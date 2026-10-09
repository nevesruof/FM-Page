# Comandos · FM Society Community Bot

71 acciones slash. Los nombres de parámetros permanecen en inglés y sus descripciones aparecen en español en Discord. Un parámetro entre `[ ]` es opcional. Los permisos se comprueban al ejecutar el comando.

## Comunidad, AFK, invitaciones y eventos

| Comando | Descripción | Parámetros | Permiso del usuario |
|---|---|---|---|
| `/afk` | Activa tu estado AFK con un motivo opcional | `[reason]` | Todos |
| `/afklist` | Muestra quién está ausente en el servidor | — | Todos |
| `/back` | Retira manualmente tu estado AFK y restaura el apodo | — | Todos |
| `/embed` | Abre un editor para publicar un embed personalizado | `channel` | Gestionar mensajes en origen y destino |
| `/giveaway cancel` | Cancela un sorteo activo sin seleccionar ganadores | `giveaway_id` | Gestionar servidor |
| `/giveaway end` | Finaliza un sorteo y selecciona los ganadores | `giveaway_id` | Gestionar servidor |
| `/giveaway reroll` | Selecciona otros ganadores de un sorteo finalizado | `giveaway_id` | Gestionar servidor |
| `/giveaway start` | Crea un sorteo con premio, duración y botones | `prize` · `time` · `channel` · `[winners]` · `[role]` | Gestionar servidor |
| `/giveaways` | Lista los sorteos activos de la comunidad | — | Todos |
| `/invitebonus` | Suma o resta bonus al contador de invitaciones | `user` · `amount` | Gestionar servidor |
| `/invitedby` | Consulta la invitación observada al entrar un usuario | `[user]` | Todos |
| `/inviteleaderboard` | Muestra las diez personas con más invitaciones válidas | — | Todos |
| `/invites` | Consulta tus invitaciones o las de otro usuario | `[user]` | Todos |
| `/invitesetup` | Configura el canal de registros y la edad mínima de las cuentas | `channel` · `[fake_account_days]` | Gestionar servidor |
| `/logchannel` | Configura o desactiva el registro de moderación | `[channel]` | Gestionar servidor |
| `/poll` | Publica una encuesta de dos a cinco opciones separadas con | | `question` · `options` · `[time]` | Todos |
| `/pollclose` | Cierra una encuesta tuya o, si moderas, de cualquier usuario | `poll_id` | Autor o Gestionar mensajes |
| `/suggest` | Envía una propuesta al canal de sugerencias | `idea` | Todos |
| `/suggestsetup` | Configura el canal donde se publicarán las sugerencias | `channel` | Gestionar servidor |
| `/welcome disable` | Desactiva las bienvenidas sin borrar la configuración | — | Gestionar servidor |
| `/welcome goodbye` | Configura las despedidas o desactívalas omitiendo el canal | `[channel]` | Gestionar servidor |
| `/welcome image` | Cambia o elimina la imagen grande de la bienvenida | `[url]` | Gestionar servidor |
| `/welcome setup` | Activa las bienvenidas y personaliza su mensaje | `channel` · `[message]` · `[image]` | Gestionar servidor |
| `/welcome status` | Consulta el mensaje y el estado de las bienvenidas | — | Gestionar servidor |
| `/welcome test` | Envía una bienvenida de prueba al canal configurado | `[user]` | Gestionar servidor |
| `/welcome text` | Personaliza el mensaje externo que menciona al nuevo miembro | `[message]` · `[enabled]` | Gestionar servidor |

## Moderación y AutoMod

| Comando | Descripción | Parámetros | Permiso del usuario |
|---|---|---|---|
| `/automod allowdomain` | Permite o retira un dominio y sus subdominios | `domain` · `[allow]` | Gestionar servidor |
| `/automod exemptchannel` | Excluye o vuelve a proteger un canal | `channel` · `[exempt]` | Gestionar servidor |
| `/automod exemptrole` | Excluye o vuelve a proteger a los miembros de un rol | `role` · `[exempt]` | Gestionar servidor |
| `/automod setup` | Ajusta filtros, enlaces y sanción por reincidencia | `[enabled]` · `[words]` · `[links]` · `[invites]` · `[spam]` · `[caps]` · `[max_mentions]` · `[timeout_after]` · `[timeout_minutes]` | Gestionar servidor |
| `/automod status` | Muestra la configuración actual de automoderación | — | Gestionar servidor |
| `/automod wordadd` | Agrega una expresión a la lista de bloqueo | `word` | Gestionar servidor |
| `/automod wordlist` | Consulta por páginas las palabras bloqueadas | `[page]` | Gestionar servidor |
| `/automod wordremove` | Excluye una palabra base o una expresión agregada | `word` | Gestionar servidor |
| `/ban` | Banea a un usuario sin borrar su historial | `user` · `reason` | Banear miembros |
| `/kick` | Expulsa a un usuario del servidor | `user` · `reason` | Expulsar miembros |
| `/lock` | Bloquea el envío de mensajes para el rol general | — | Gestionar roles |
| `/nick` | Cambia o restablece el apodo de un usuario | `user` · `[nickname]` | Gestionar apodos |
| `/purge` | Borra hasta 100 mensajes recientes de este canal | `amount` · `[user]` | Gestionar mensajes |
| `/slowmode` | Configura el intervalo entre mensajes del canal | `seconds` | Gestionar canales |
| `/timeout` | Silencia temporalmente a un usuario | `user` · `time` · `[reason]` | Moderar miembros |
| `/unban` | Retira un ban usando el ID del usuario | `user_id` · `[reason]` | Banear miembros |
| `/unlock` | Restaura el permiso anterior guardado por lock | — | Gestionar roles |
| `/untimeout` | Retira el timeout de un usuario | `user` | Moderar miembros |
| `/unwarn` | Elimina un aviso mediante su ID | `warning_id` | Gestionar mensajes |
| `/warn` | Registra un aviso de moderación | `user` · `reason` | Gestionar mensajes |
| `/warnings` | Consulta los avisos de un usuario | `user` | Gestionar mensajes |

## Utilidades y diversión

| Comando | Descripción | Parámetros | Permiso del usuario |
|---|---|---|---|
| `/about` | Muestra la versión y la información del bot | — | Todos |
| `/avatar` | Muestra el avatar de un usuario en tamaño grande | `[user]` | Todos |
| `/banner` | Muestra el banner de perfil de un usuario si tiene uno | `[user]` | Todos |
| `/calc` | Calcula una operación aritmética con límites seguros | `expression` | Todos |
| `/cancelreminder` | Cancela uno de tus recordatorios usando su ID | `reminder_id` | Todos |
| `/choose` | Elige una opción entre alternativas separadas con | | `options` | Todos |
| `/coinflip` | Lanza una moneda | — | Todos |
| `/eightball` | Haz una pregunta a la bola mágica | `question` | Todos |
| `/help` | Abre el menú de comandos y sus descripciones | — | Todos |
| `/hug` | Envía un abrazo a alguien de la comunidad | `user` | Todos |
| `/membercount` | Consulta el total de miembros y bots conocidos | — | Todos |
| `/pat` | Envía una muestra de cariño a otro usuario | `user` | Todos |
| `/ping` | Consulta la latencia de conexión y la del comando | — | Todos |
| `/remind` | Crea un recordatorio privado; si no hay DM se envía aquí | `time` · `text` | Todos |
| `/reminders` | Muestra tus recordatorios activos de este servidor | — | Todos |
| `/roleinfo` | Consulta los datos y el número de miembros de un rol | `role` | Todos |
| `/roll` | Lanza de uno a diez dados de hasta cien caras | `[dice]` · `[sides]` | Todos |
| `/rps` | Juega piedra, papel o tijeras contra el bot | `choice` | Todos |
| `/servericon` | Muestra el icono del servidor | — | Todos |
| `/serverinfo` | Muestra los datos principales de la comunidad | — | Todos |
| `/ship` | Calcula una compatibilidad de juego entre dos usuarios | `user` · `[other]` | Todos |
| `/timestamp` | Convierte una fecha UTC en una marca de tiempo de Discord | `date` | Todos |
| `/uptime` | Consulta cuánto tiempo lleva conectado el bot | — | Todos |
| `/userinfo` | Muestra información y fechas de un miembro | `[user]` | Todos |

## Parámetros en Discord

| Parámetro | Descripción |
|---|---|
| `allow` | Permite el dominio; falso lo retira de la lista |
| `amount` | Cantidad; en bonus admite valores negativos |
| `caps` | Activa o desactiva el filtro de mayúsculas |
| `channel` | Canal de texto donde se publicará o configurará |
| `choice` | Tu jugada |
| `date` | Fecha UTC o ISO, por ejemplo 2026-10-09 18:00 |
| `dice` | Cantidad de dados, entre 1 y 10 |
| `domain` | Dominio sin https ni rutas, por ejemplo minecraft.net |
| `enabled` | Activa o desactiva el sistema |
| `exempt` | Excluye del filtro; falso retira la excepción |
| `expression` | Operación aritmética, por ejemplo (10+5)/3 |
| `fake_account_days` | Edad mínima en días para contar una invitación como normal |
| `giveaway_id` | ID numérico del sorteo mostrado en el embed |
| `idea` | Tu propuesta para la comunidad |
| `image` | URL http o https de la imagen |
| `invites` | Activa o desactiva el bloqueo de invitaciones externas |
| `links` | Activa o desactiva el filtro de enlaces |
| `max_mentions` | Cantidad de menciones a partir de la cual se retira el mensaje |
| `message` | Texto con {user}, {username}, {server} y {count} |
| `nickname` | Nuevo apodo; omítelo para restablecer el nombre |
| `options` | Alternativas separadas con &#124; |
| `other` | Segundo usuario; si se omite se usa tu perfil |
| `page` | Página de resultados |
| `poll_id` | ID numérico de la encuesta |
| `prize` | Premio del sorteo |
| `question` | Pregunta que quieres realizar |
| `reason` | Motivo de la acción |
| `reminder_id` | ID numérico de tu recordatorio |
| `role` | Rol al que se aplica el comando |
| `seconds` | Intervalo en segundos; cero desactiva el slowmode |
| `sides` | Caras de cada dado, entre 2 y 100 |
| `spam` | Activa o desactiva el filtro de spam |
| `text` | Mensaje del recordatorio |
| `time` | Duración, por ejemplo 10m, 2h, 1d o 1d12h |
| `timeout_after` | Infracciones en diez minutos necesarias para aplicar timeout |
| `timeout_minutes` | Duración del timeout automático en minutos |
| `url` | URL de imagen; omítela para eliminar la imagen adicional |
| `user` | Usuario al que se aplica el comando |
| `user_id` | ID de Discord del usuario |
| `warning_id` | ID numérico del aviso |
| `winners` | Número de ganadores, entre 1 y 20 |
| `word` | Palabra o expresión que quieres modificar |
| `words` | Activa o desactiva el filtro de palabras |
