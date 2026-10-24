# FM Society · Documentación

Web de documentación del bot de comunidad de FM Society, creado por Ake.

- Español por defecto y traducción completa al inglés.
- Catálogo de 71 comandos con búsqueda, categorías, parámetros, permisos y ejemplos.
- Guías para miembros y staff: comandos del día a día, bienvenidas, invitaciones y AutoMod.
- «Antes de empezar»: 15 preguntas frecuentes filtrables por miembros y staff.
- Diseño en blanco y negro, adaptado a móvil, con animaciones.
- Interruptor de animaciones (cabecera y pie). Si el sistema pide reducir movimiento, la web arranca en modo calmado (solo fundidos); la preferencia se guarda en el navegador.

## Uso

Sitio estático: `index.html` está en la raíz. No requiere instalación de dependencias ni compilación. Publica el contenido del repositorio en un hosting estático.

Para abrirlo localmente:

```sh
python -m http.server 8080
```

Abre `http://localhost:8080`.

## Validación

Con Node.js 22 o posterior:

```sh
node scripts/validate.mjs
```

Comprueba enlaces, imágenes, iconos, traducciones, búsquedas y detalles de los 71 comandos.

## Actualizar el catálogo

El inventario del bot v1.0.1 está en `content/COMMANDS.md`. Las traducciones y los ejemplos se mantienen en `scripts/build_catalog.py`. Tras editar ambos:

```sh
python scripts/build_catalog.py
node scripts/validate.mjs
```

Las vistas del bot y el sorteo interactivo son ejemplos de documentación. No conectan con Discord ni participan en sorteos reales.

**Made By Ake · FM Society**
