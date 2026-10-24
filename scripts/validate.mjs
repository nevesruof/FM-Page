import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
const root=path.resolve(import.meta.dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const app=fs.readFileSync(path.join(root,'app.js'),'utf8');
const catalogSource=fs.readFileSync(path.join(root,'catalog.js'),'utf8');
for(const file of ['app.js','catalog.js'])execFileSync(process.execPath,['--check',path.join(root,file)]);
const context={window:{}};vm.createContext(context);vm.runInContext(catalogSource,context);
const catalog=context.window.FM_CATALOG;
assert.equal(catalog.length,71);assert.equal(new Set(catalog.map(c=>c.name)).size,71);
function section(start,end){return app.slice(app.indexOf(start),app.indexOf(end,app.indexOf(start)));}
vm.runInContext(section('const strings =','const categories=')+';globalThis.strings=strings;globalThis.guides=guides;globalThis.faqs=faqs;',context);
const {strings,guides,faqs}=context;
assert.deepEqual(Object.keys(strings.es).sort(),Object.keys(strings.en).sort(),'ES/EN keys must match');
const attrs=[...html.matchAll(/data-i18n(?:-html|-aria|-title|-placeholder|-alt)?="([^"]+)"/g)].map(m=>m[1]);
for(const key of attrs)for(const language of ['es','en'])assert.ok(strings[language][key],`Missing ${language} translation: ${key}`);
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(ids.length,new Set(ids).size,'Duplicate DOM ids');
for(const match of html.matchAll(/\bhref="#([^"]+)"/g))assert.ok(ids.includes(match[1]),`Broken anchor/SVG: ${match[1]}`);
for(const match of html.matchAll(/\b(?:href|src)="((?:\/|\.\/)[^"?#]+)(?:[?#][^"]*)?"/g))assert.ok(fs.existsSync(path.join(root,match[1].replace(/^\.?\//,''))),`Missing asset: ${match[1]}`);
for(const c of catalog){assert.ok(strings.es[c.category]);assert.ok(c.es && c.en);assert.ok(c.permission.es && c.permission.en);assert.ok(c.example.es.startsWith('/'+c.name));assert.ok(c.example.en.startsWith('/'+c.name));for(const p of c.parameters){assert.equal(typeof p.required,'boolean');assert.ok(p.es && p.en);if(p.required)assert.ok(c.example.es.includes(p.name+':'),`Example omits required ${c.name}/${p.name}`);}}
for(const guide of Object.values(guides))for(const language of ['es','en'])for(const field of ['title','description','code','note'])assert.ok(guide[language][field]);
vm.runInContext(`let lang='es';const t=key=>strings[lang][key];`+section('const normalize=','function feedback(')+section('const synonyms=','function renderCatalog(')+`;globalThis.matches=matches;globalThis.setTestLanguage=x=>lang=x;`,context);
function results(q){return catalog.filter(c=>context.matches(c,q));}
for(const language of ['es','en']){
context.setTestLanguage(language);
assert.equal(results('').length,71);
assert.ok(results('/giveaway start').some(c=>c.name==='giveaway start'));
assert.ok(results('BIENVENÍDA').some(c=>c.name==='welcome setup'));
assert.ok(results('antilink').some(c=>c.name==='automod setup'));
assert.ok(results('encuesta').some(c=>c.name==='poll'));
assert.ok(results('reminder').some(c=>c.name==='remind'));
assert.equal(results('not-a-command-zzxy').length,0);
}
const els=new Map();
context.$=selector=>{if(!els.has(selector))els.set(selector,{innerHTML:'',addEventListener(){}});return els.get(selector);};
vm.runInContext(`const icons={welcome:'door',afk:'moon',invites:'link',events:'gift',automod:'shield',moderation:'sliders',utility:'code',fun:'dice',community:'users'};`+section('const escape=','function feedback(').replace(/const normalize=.*?;\n/s,'')+section('function renderCommand(','function openCommand(')+`;globalThis.renderCommand=renderCommand;`,context);
for(const language of ['es','en']){context.setTestLanguage(language);for(const c of catalog){context.renderCommand(c);const rendered=els.get('#dialog-content').innerHTML;assert.ok(rendered.includes('id="dialog-title"'));assert.ok(!rendered.includes('undefined'));assert.ok(rendered.includes(c.name));}}
assert.ok(html.includes('lang="es"'));assert.ok(html.includes('Made By Take &amp; FumandoMari.'));
const css=fs.readFileSync(path.join(root,'style.css'),'utf8');assert.ok(css.includes('prefers-reduced-motion'));assert.ok(css.includes('@media(max-width:600px)'));
for(const f of faqs){assert.ok(['members','staff'].includes(f.g));for(const language of ['es','en'])assert.ok(f[language].q&&f[language].a,'FAQ needs question and answer in ES/EN');}
assert.ok(faqs.length>=12,'Antes de empezar needs enough questions');
const installTerms=/\.env|sqlite|hosting|DISCORD_GUILD_ID|requirements\.txt|main\.py|pip install|server members intent|message content intent/i;
const userFacing=JSON.stringify([strings,guides,faqs])+html;
assert.ok(!installTerms.test(userFacing),'User-facing docs must not include installation or hosting instructions');
assert.ok(html.includes('data-motion-toggle'),'Motion toggle must exist');
console.log(`PASS: 71 bilingual commands, 86 parameters, ${new Set(attrs).size} interface translations, search synonyms, 142 detail views, section links, SVG icons and local assets.`);
