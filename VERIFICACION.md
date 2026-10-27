# Verificación de la guía de Piscinas Ruema

Fecha: 27 de octubre de 2026. Estado: **publicado y verificado en GitHub Pages**.

Web pública: [guía de mantenimiento](https://piscinasruema-collab.github.io/guia-mantenimiento-ruema/). Repositorio público: [piscinasruema-collab/guia-mantenimiento-ruema](https://github.com/piscinasruema-collab/guia-mantenimiento-ruema).

Origen de publicación: `main`, `/(root)`, HTTPS obligatorio. [Despliegue inicial completado correctamente](https://github.com/piscinasruema-collab/guia-mantenimiento-ruema/actions/runs/40504663146), correspondiente al contenido de la guía y el logo. Las actualizaciones posteriores de documentación se guardan también en `main`.

## Pruebas realizadas

| Comprobación | Resultado |
| --- | --- |
| Estructura estática | HTML, CSS, JavaScript y SVG juntos; rutas relativas y `.nojekyll`. No requiere compilación. |
| Servir la guía localmente por HTTP | Respuesta 200 y carga correcta en el navegador. |
| Sintaxis de JavaScript | Comprobada con `node --check script.js`; sin errores. |
| Consola del navegador | Sin errores ni avisos tras las pruebas funcionales. |
| Botón «Empezar mi guía» | Llega a la personalización. |
| Seis enlaces de navegación | Verificado cada destino de agua, rutina, limpieza, errores, temporadas y preguntas. |
| Contacto y vuelta al inicio | Llegan a sus secciones. WhatsApp permanece oculto y sin `href`. |
| Cinco opciones de lámina | Actualizan el aviso; no introducen diferencias técnicas inventadas entre gamas. |
| Cinco opciones de tratamiento | Cambian título, explicación y límites de la referencia. |
| Cuatro estados del selector de situación | Comprobados uso habitual, ocasional, invernaje y sin selección. |
| Cinco listas, 19 tareas | Se probaron completas: todas alcanzan el 100 % y vuelven al 0 % al desmarcar la lista. |
| Marcar y desmarcar una tarea | El porcentaje y el contador se actualizan. |
| Cambiar de lista durante la visita | Las marcas de la lista anterior se mantienen al volver, solo en memoria. |
| Recarga | Cero tareas marcadas; tres selectores en su estado inicial; progreso al 0 %. |
| Cinco consejos de temporada | Cambian el contenido y el enlace «Ver mi rutina» abre la lista correspondiente. |
| Once desplegables | Se abrieron y cerraron el detalle técnico, las ocho preguntas, las fuentes y la privacidad. |
| Pantallas de 320, 375, 390, 768 y 1280 px | Sin desbordamiento horizontal del documento. La navegación de temas tiene desplazamiento horizontal intencionado en móvil. |
| Revisión visual | Portada de escritorio y portada/checklist móvil de 390 px inspeccionados mediante capturas. |
| Identificadores y enlaces internos | Sin identificadores duplicados ni enlaces a secciones inexistentes. |
| Recursos | CSS, JS y SVG locales existentes; sin recursos remotos de ejecución. SVG bien formado. |
| Enlaces externos | Las fuentes oficiales y la privacidad de GitHub se recuperaron durante la revisión documental. Son enlaces opcionales. |
| Enlaces a otra pestaña | Todos incluyen `noopener noreferrer`. |
| Privacidad, revisión de código | Sin formularios, llamadas de red de aplicación, almacenamiento persistente, analítica o rastreadores. |
| Seguridad, revisión de código | Sin ejecución dinámica, HTML dinámico ni manejadores en atributos. CSP con conexiones y formularios bloqueados. |
| Datos de contacto | Configuración vacía, sin teléfono ni dirección web inventados. |
| Logotipo oficial incorporado | PNG original aportado por la empresa, idéntico al archivo de origen según SHA-256. Cabecera y pie revisados visualmente en escritorio y móvil de 390 px; proporciones correctas, sin desbordamiento ni errores de consola. |
| Archivos sensibles | No se incluyen documentos de clientes, el PDF original, claves o archivos de entorno. |
| Acceso público sin autenticación | HTML, CSS, JS, SVG y PNG responden con HTTP 200 mediante peticiones sin credenciales; todas las respuestas usan HTTPS y coinciden byte a byte con los archivos locales. |
| Cookies del alojamiento en esas respuestas | Ninguna de las cinco respuestas comprobadas incluye `Set-Cookie`. Esto no excluye el procesamiento de datos técnicos por GitHub. |
| Funciones en la web publicada | Comprobados el inicio de guía, la selección de ALIVE y cloración salina, el cambio a invernaje, las cinco listas con marcado y desmarcado, y el reinicio al recargar. Sin errores ni avisos en la consola. |

La revisión de código y recursos respalda la ausencia de transmisión de preferencias; no equivale a un análisis independiente del tráfico del proveedor de alojamiento.

## Pruebas pendientes y límites

- **Publicación:** completada tras el inicio de sesión del usuario. Se verificó la URL generada por el despliegue; no se requiere cuenta de GitHub para abrir la guía. Los archivos y el historial del repositorio son públicos.
- **Dispositivos físicos:** no se ha probado en un iPhone/Safari ni en un Android/Chrome reales. Los tamaños de navegador comprobados son simulaciones de anchura, no pruebas de esos sistemas.
- **Accesibilidad completa:** se han preparado estructura semántica, etiquetas, texto alternativo, foco visible, controles grandes y reducción de movimiento. No se ha realizado una auditoría WCAG completa ni una sesión con lector de pantalla.
- **Apertura directa del archivo:** el navegador de prueba solo admite HTTP/HTTPS; la apertura mediante `file:` no pudo verificarse. La ejecución local por HTTP sí se probó. El código no utiliza módulos, peticiones ni cargas de datos que requieran un servidor de aplicación.
- **WhatsApp:** por decisión del usuario, está desactivado. Se comprobó que no hay enlace utilizable ni número ficticio. No se abrió ninguna conversación ni se enviaron mensajes. Si se habilita, habrá que comprobar el destino con el número real.
- **Restauración desde historial:** se implementó el reinicio con `pageshow` y la limpieza de tareas con `pagehide`; no se ha ensayado la caché de navegación de cada navegador móvil.
- **Sin JavaScript e impresión:** se incluye texto de alternativa para el checklist y estilos de impresión; no se hizo una prueba visual específica de esos modos. La guía interactiva requiere JavaScript.
- **Seguridad del alojamiento:** HTTPS, acceso público, recursos y consola comprobados en la URL final. No se realizó una captura independiente completa del tráfico del navegador ni una auditoría de la infraestructura de GitHub. Se mantiene la recomendación de revisar la pestaña Red tras futuros cambios.
- **Validez técnica por instalación:** la documentación se contrastó, pero no se conoce la instalación concreta de cada cliente. Las referencias de membrana no sustituyen un plan de desinfección ni certifican la seguridad del baño.

## Qué publicar

Subir únicamente estos ocho archivos del paquete, directamente a la raíz del repositorio: `index.html`, `styles.css`, `script.js`, `piscina.svg`, `logo-ruema.png`, `.nojekyll`, `README.md` y `VERIFICACION.md`.

El ZIP es un paquete de entrega: no debe subirse como sustituto de los archivos. Las capturas de revisión y los programas temporales de comprobación están fuera del paquete.

Las instrucciones completas están en `README.md`. Repetir las pruebas críticas después de cada modificación y después de publicar. El logotipo oficial forma parte de la versión publicada y su archivo coincide byte a byte con el original local.
