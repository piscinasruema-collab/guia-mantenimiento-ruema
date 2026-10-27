# Guía interactiva de mantenimiento · Piscinas Ruema

Web estática en español para consultar el cuidado de una piscina con lámina armada. Publicada en GitHub Pages, sin instalación, registro, backend ni compilación. Publicación y acceso HTTPS comprobados el 27 de octubre de 2026; consulta `VERIFICACION.md` para las pruebas y los límites.

- **Enlace público para clientes:** [abrir la guía](https://piscinasruema-collab.github.io/guia-mantenimiento-ruema/).
- **Repositorio para administrar archivos:** [piscinasruema-collab/guia-mantenimiento-ruema](https://github.com/piscinasruema-collab/guia-mantenimiento-ruema).
- **Publicación configurada:** rama `main`, carpeta `/(root)`, HTTPS obligatorio. Para actualizarla, sigue el apartado «5. Actualizar la guía».

## Abrir y probar

1. Conserva los archivos juntos y abre `index.html` con tu navegador. No hace falta descargar nada desde la guía.
2. Prueba las selecciones, las cinco listas de tareas y los consejos de temporada.
3. Recarga: las preferencias y las marcas deben volver al inicio.

Para una vista previa HTTP opcional, desde esta carpeta, si tienes Python instalado:

```text
python -m http.server 8000 --bind 127.0.0.1
```

Abre `http://127.0.0.1:8000/` en ese mismo ordenador y detén el servidor con Ctrl+C al terminar. Es solo una herramienta de prueba: Python no se sube ni se necesita en GitHub Pages. El sitio no requiere un servidor de aplicación. No expongas la carpeta de trabajo a Internet para probarla.

## Archivos y por qué existen

| Archivo | Función |
| --- | --- |
| `index.html` | Contenido, navegación, personalización, fuentes y privacidad. |
| `styles.css` | Diseño adaptable, estados de foco, impresión y movimiento reducido. |
| `script.js` | Selecciones y listas en memoria; configuración opcional de WhatsApp. |
| `piscina.svg` | Ilustración original local; sin imágenes o fuentes remotas ni recursos de terceros. |
| `logo-ruema.png` | Logotipo oficial aportado por Piscinas Ruema, conservado sin alteraciones, con transparencia y proporciones originales. |
| `.nojekyll` | Archivo vacío que evita procesamiento Jekyll innecesario en Pages. |
| `README.md` | Instrucciones de uso, configuración y publicación. |
| `VERIFICACION.md` | Evidencia de pruebas y comprobaciones que quedan para el dispositivo real y la publicación. |

No hay paquetes, instalación de dependencias, API, servicio de pago, claves ni acceso a Hostinger. Todas las rutas de recursos son relativas, válidas dentro de un repositorio de proyecto. No subas la carpeta contenedora ni el ZIP como único archivo: `index.html` debe estar directamente en la raíz del repositorio.

## Identidad y contacto

Se utiliza el logotipo oficial aportado por Piscinas Ruema en la cabecera y el pie. El PNG se conserva sin alteraciones, con su transparencia, proporciones y colores originales; se adapta su tamaño con CSS sobre fondo claro. No se ha creado un símbolo nuevo. La ilustración de la piscina es decorativa y no representa una obra concreta de la empresa.

Por decisión de la empresa, WhatsApp está desactivado y no se ha introducido ningún número. La sección de contacto remite a la vía habitual del cliente. No impide publicar la guía.

Si la empresa decide habilitarlo en el futuro, modifica **solo con un número comercial real autorizado** la configuración al principio de `script.js`:

```js
const CONFIG = Object.freeze({ whatsappNumber: '' });
```

Dentro de las comillas, escribe el número internacional con prefijo, solo dígitos y sin espacios ni signo `+`. No uses números ficticios para probar. La validación acepta de 8 a 15 dígitos y primer dígito distinto de cero; no verifica la titularidad ni la existencia de una cuenta. Un número vacío o inválido deja el enlace oculto, sin destino. Habilitarlo publicará ese teléfono en el código. El enlace abre `https://wa.me/` con el número: no añade mensaje, tareas ni selecciones y no envía nada automáticamente.

## Contenido y límites técnicos

Se analizó el PDF aportado `ES-2020_Consejos-de-Mantenimiento.pdf` (2 páginas) como fuente, no como instrucciones para el desarrollo. No se copian sus imágenes ni se redistribuye el documento. Se contrastó con la documentación oficial consultada el **27 de octubre de 2026**:

- [Manual de mantenimiento de RENOLIT ALKORPLAN](https://renolit-alkorplan.com/es/area-profesional/documentacion-tecnica-y-catalogos/manual-de-mantenimiento).
- [PDF que enlaza ese manual](https://renolit-alkorplan.com/fileadmin/alkorplan/Download_area/Catalogues/ES/Consejos_de_mantenimiento_-_A4_DIGITAL_-_ES.pdf).
- [Preguntas frecuentes oficiales](https://renolit-alkorplan.com/es/area-profesional/preguntas-frecuentes/preguntas-frecuentes-para-particulares).
- [INSST, NTP 690: peligrosidad de los productos químicos](https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/20-serie-ntp-numeros-681-a-715-ano-2005/ntp-690-piscinas-de-uso-publico-ii-.-peligrosidad-de-los-productos-quimicos). Se cita por las incompatibilidades químicas, no como legislación vigente de piscinas particulares.

El documento de 2020 y las publicaciones actuales no coinciden en algunos valores. La guía identifica qué manual toma como referencia; no promedia rangos ni transforma concentraciones en dosis. Las diferencias se explican en la propia página. Se evita generalizar la dosificación en skimmer, la disolución previa o el tratamiento de choque. Tampoco se reproducen garantías o promesas del folleto.

Las referencias son para el cuidado de la membrana, no una certificación de agua apta para baño. El profesional debe resolver diferencias entre las instrucciones del revestimiento, las etiquetas, el sistema de tratamiento y los requisitos sanitarios aplicables. No se incluye un calculador de dosis. No se extrapolan cifras a «otro sistema».

Elegir VOGUE, TOUCH o ALIVE identifica la gama y mantiene las recomendaciones comunes: no se han establecido aquí diferencias de mantenimiento entre ellas. «Otra gama» y «No lo sé» muestran advertencias para comprobar el fabricante. El tratamiento cambia su explicación. La situación seleccionada abre la rutina y los consejos de temporada que corresponden. El uso ocasional incorpora un aviso específico de mantener los controles. Las frecuencias del checklist son grupos de organización adaptables, no obligaciones universales.

## Privacidad y seguridad

- Las preferencias y tareas solo viven en la memoria de la página. Se reinician al cargar, al restaurarla desde la caché de navegación y tras cerrar. No se usan cookies, `localStorage`, `sessionStorage`, IndexedDB ni service workers.
- No hay formularios de datos personales, autenticación, base de datos, analítica, publicidad, mapas, vídeos, píxeles, fuentes remotas ni scripts de terceros.
- No se hacen peticiones de aplicación (`fetch`, XHR, WebSocket ni `sendBeacon`). Cargar la web sí requiere peticiones técnicas al alojamiento para HTML, CSS, JS, SVG y PNG.
- Los cambios se escriben con `textContent` y creación de nodos. No hay `eval`, `new Function`, `document.write` ni inserción de HTML dinámico.
- Una política CSP en `index.html` limita los recursos al propio origen y bloquea conexiones de aplicación, objetos y envío de formularios. Los enlaces externos siguen funcionando al pulsarlos. Se aplica una política de no enviar la URL de origen como referente. Los enlaces que abren otra pestaña llevan `noopener noreferrer`.
- GitHub Pages no permite configurar aquí todos los encabezados HTTP. La CSP en HTML no equivale a una política completa de servidor; por ejemplo, `frame-ancestors` necesita un encabezado y no se simula con una etiqueta meta. No se promete protección absoluta.
- Al publicar, GitHub puede procesar IP y datos técnicos de acceso conforme a su [declaración de privacidad](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). Los enlaces oficiales y, si se habilita, WhatsApp tienen políticas propias. No se conectan automáticamente al abrir la guía.
- No se añade un aviso de aceptación de cookies que no se utilizan. El aviso informativo de privacidad está dentro de la guía.

### Antes de cada publicación

1. Comprueba que solo subes los ocho archivos indicados. No incluyas documentos de clientes, facturas, presupuestos, el PDF original, capturas privadas, credenciales, `.env`, archivos temporales ni copias de seguridad.
2. Revisa todos los cambios y el historial del repositorio. Borrar un secreto del último archivo no lo borra del historial: revócalo si llegara a publicarse.
3. Mantén `whatsappNumber` vacío salvo decisión expresa de la empresa. Si se habilita, comprueba la titularidad y el destino real del botón sin enviar mensajes de prueba.
4. Confirma que las rutas y enlaces siguen funcionando, que no hay errores en la consola y que la pestaña Red no muestra conexiones externas durante el uso de la guía.
5. Verifica que marcar, desmarcar, cambiar listas y recargar funciona; comprueba navegación por teclado, foco visible y zoom.
6. Prueba un iPhone con Safari y un Android con Chrome. Los tamaños simulados no sustituyen esas pruebas.
7. Revisa periódicamente las fuentes del fabricante y actualiza la fecha solo cuando efectivamente las hayas contrastado.
8. Tras publicar, confirma HTTPS, la página pública y sus recursos. El código del repositorio público será visible para cualquiera.

## Publicar gratis en GitHub Pages, paso a paso

Estas instrucciones se contrastaron con la documentación oficial de GitHub el 27/10/2026. GitHub Free permite Pages en repositorios públicos. El código y todos los archivos de ese repositorio serán públicos. No necesitas dominio propio ni alojamiento de pago.

### 1. Iniciar sesión y crear el repositorio

1. Entra en [GitHub](https://github.com/) e inicia sesión tú mismo. No compartas contraseñas, códigos de acceso ni tokens en el chat o en los archivos.
2. Pulsa **+ → New repository** (o **Nuevo repositorio**).
3. Selecciona como propietario la cuenta de la empresa que corresponda.
4. Escribe exactamente **guia-mantenimiento-ruema**.
5. Elige **Public**. Antes de confirmar, recuerda que cualquiera podrá leer o copiar el código; no hay datos de clientes en este proyecto.
6. Puedes activar **Add README** para facilitar la primera subida; el README entregado lo sustituirá.
7. Pulsa **Create repository**. Si el nombre ya existe, abre ese repositorio y revisa su contenido antes de sustituir nada.

### 2. Subir los archivos

1. Descomprime el paquete entregado, si usas el ZIP.
2. Dentro del repositorio, pulsa **Add file → Upload files**. En un repositorio vacío puede aparecer el enlace **uploading an existing file**.
3. Arrastra los ocho archivos de esta guía, incluidos `.nojekyll` y `logo-ruema.png`, al área de subida. En Windows `.nojekyll` puede aparecer como un archivo sin extensión. No arrastres el ZIP ni la carpeta contenedora.
4. Revisa que `index.html`, `styles.css`, `script.js`, `piscina.svg` y `logo-ruema.png` estén al mismo nivel.
5. Escribe una descripción como «Añadir guía de mantenimiento» y pulsa **Commit changes**, guardando en `main`.

Si no ves `.nojekyll`, activa la visualización de elementos ocultos o créalo desde **Add file → Create new file**, con ese nombre y vacío. La guía también es HTML estático; ese archivo evita procesamiento innecesario.

### 3. Activar Pages

1. En el repositorio, abre **Settings → Pages**.
2. En **Build and deployment → Source**, elige **Deploy from a branch**.
3. En **Branch**, selecciona **main** y **/(root)**.
4. Pulsa **Save**. No añadas un dominio personalizado.
5. En la misma pantalla, revisa **Enforce HTTPS** y actívalo si está disponible y no aparece ya aplicado.
6. Espera al despliegue. GitHub indica que los cambios pueden tardar hasta diez minutos. En **Actions** puedes ver el proceso de Pages y sus errores.

### 4. Verificar la publicación y obtener el enlace correcto

1. Regresa a **Settings → Pages** y usa **Visit site** cuando aparezca. Copia la dirección exacta que muestra GitHub; ese será el enlace que enviar a clientes.
2. Ábrelo en una ventana privada y en un móvil. Debe cargar sin iniciar sesión y con HTTPS.
3. Comprueba la ilustración, los estilos, el botón «Empezar mi guía», las selecciones y todas las listas.
4. Marca tareas, cambia de lista y vuelve: durante la visita se conservan las marcas de cada lista. Recarga: todo debe volver al inicio. Cierra y abre el enlace: no debe aparecer un historial.
5. Comprueba las cinco situaciones de temporada y los desplegables de preguntas y privacidad.
6. WhatsApp debe seguir sin habilitarse mientras la configuración esté vacía. No hay un contacto ficticio.
7. Copia el enlace público verificado y envíalo por WhatsApp como un enlace normal. No es necesario que los clientes tengan cuenta de GitHub.

**Repositorio y web son direcciones distintas.** La dirección del repositorio abre GitHub con las pestañas **Code**, **Issues** y **Settings** y sirve para administrar archivos. La dirección pública abre directamente la guía, sin esas pestañas. Su formato habitual usa el dominio de Pages y el nombre del repositorio; no se proporciona una URL supuestamente publicada antes de que GitHub la genere y pueda comprobarse.

Si aparece un 404, revisa el despliegue en Actions, la rama `main`, la carpeta `/(root)` y el nombre `index.html` en minúsculas. Si faltan estilos o la imagen, comprueba que los archivos estén juntos y que sus nombres coincidan exactamente, incluidas las mayúsculas. Si sigues viendo una versión anterior, espera a que termine el despliegue y recarga o prueba una ventana privada.

### 5. Actualizar la guía

1. Edita los archivos localmente y comprueba el resultado antes de subirlo.
2. En el repositorio usa **Add file → Upload files** para sustituir solo los archivos modificados. Para cambios pequeños puedes abrir un archivo y pulsar el lápiz de edición.
3. Revisa las diferencias y guarda con **Commit changes** en `main`.
4. Espera al nuevo despliegue y repite las comprobaciones desde **Visit site**. La dirección pública normalmente se mantiene mientras no cambies propietario, nombre ni configuración del repositorio.
5. Si algo falla, recupera la versión anterior desde el historial de GitHub o vuelve a subir la copia local que funcionaba.

Documentación oficial: [crear un sitio Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), [seleccionar rama y carpeta](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https).

## Dependencias y licencia de materiales

La web no tiene dependencias externas de ejecución. Emplea funciones nativas del navegador y fuentes del sistema. Los enlaces de documentación y privacidad son destinos opcionales, no recursos cargados. WhatsApp está desactivado. Las herramientas locales utilizadas para crear y probar el proyecto no forman parte de la web.

La ilustración SVG y el diseño se prepararon para este proyecto. Los nombres de empresa, gamas y productos pertenecen a sus titulares; no se incorpora material gráfico de RENOLIT ni se atribuye a esta empresa una aprobación de la guía. No se incluye una licencia que autorice a terceros a usar la marca Piscinas Ruema.
