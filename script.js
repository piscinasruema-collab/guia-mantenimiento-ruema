'use strict';

// CONFIGURACIÓN COMERCIAL: vacío por decisión de Piscinas Ruema.
// Si se habilita después: número internacional real, solo dígitos, sin + ni espacios.
// No introducir números de prueba ni datos privados. El código publicado será visible.
const CONFIG = Object.freeze({ whatsappNumber: '' });

const routines = Object.freeze({
  frequent: [
    ['water', 'Comprobar el agua antes de corregirla', 'Mide pH y desinfectante con el equipo adecuado y sigue tu plan de control.'],
    ['leaves', 'Retirar hojas y suciedad visible', 'Utiliza una red compatible y en buen estado.'],
    ['level', 'Observar el nivel y la temperatura', 'Revisa el nivel previsto para tu instalación y presta atención al calor.'],
    ['filter', 'Comprobar que la filtración funciona', 'Observa su funcionamiento según el manual, sin manipular equipos en marcha.']
  ],
  weekly: [
    ['line', 'Revisar la línea de flotación', 'Si hay grasa, limpia con un paño suave y un producto compatible.'],
    ['balance', 'Revisar la estabilidad del agua', 'Valora con tu mantenedor si toca medir TAC y otros parámetros.'],
    ['baskets', 'Comprobar cestos y filtro', 'Límpialos solo como indique el fabricante, con las medidas de seguridad del equipo.'],
    ['tools', 'Revisar cepillos, ruedas y accesorios', 'Busca aristas, piezas sueltas o desgaste que pueda dañar la lámina.']
  ],
  periodic: [
    ['equipment', 'Revisar el plan del equipo', 'Consulta los intervalos de mantenimiento del filtro, las sondas y el tratamiento.'],
    ['chemicals', 'Revisar etiquetas y conservación', 'Comprueba compatibilidad, caducidad y almacenamiento de los productos.'],
    ['analysis', 'Valorar un análisis más completo', 'Especialmente si hay manchas, depósitos, agua de origen desconocido o pH inestable.']
  ],
  winter: [
    ['plan', 'Acordar el plan de invernaje', 'Adáptalo al clima local, al tratamiento y a los equipos.'],
    ['protect', 'Prever la protección frente a heladas', 'Pide indicaciones para skimmers, circuitos y nivel de agua.'],
    ['cover', 'Revisar el cobertor y el tratamiento', 'Con cobertor, evita la acumulación de desinfectante; acuerda los ajustes necesarios.'],
    ['monitor', 'Mantener los controles acordados', 'El invernaje no implica abandonar el cuidado ni vaciar la piscina.']
  ],
  opening: [
    ['inspect', 'Inspeccionar la piscina y el cobertor', 'Retira los residuos sin arrastrarlos contra la lámina.'],
    ['restart', 'Revisar equipos antes de arrancar', 'Sigue el procedimiento de puesta en marcha de tu instalación.'],
    ['measure', 'Medir antes de tratar', 'Comprueba el equilibrio del agua y solicita ayuda si hay anomalías.'],
    ['safe', 'Confirmar las condiciones antes del baño', 'No te bases solo en la transparencia; resuelve los resultados anómalos.']
  ]
});
const treatments = Object.freeze({
  unknown: ['Primero, identifica tu sistema.', 'No hay una cifra de desinfectante válida para todos los tratamientos. Revisa el equipo y la etiqueta del producto o consulta con tu mantenedor.', 'Las referencias de cloro dependen de si es estabilizado o no. La cloración salina también produce cloro.'],
  chlorine: ['Cloro: importa qué producto utilizas.', 'El manual RENOLIT [1] diferencia 0,7–1,5 mg/l para cloro estabilizado y 0,3–1,0 mg/l para no estabilizado. Identifica el tipo antes de interpretar la medida.', 'Son concentraciones orientativas del fabricante del revestimiento, no dosis ni una autorización de baño. Confirma un plan de desinfección compatible con la etiqueta y los requisitos sanitarios aplicables.'],
  salt: ['Con sal, también hay que controlar el cloro.', 'Tu clorador genera cloro no estabilizado. El manual RENOLIT [1] da una referencia de 0,3–1,0 mg/l para este tipo. Comprueba manualmente el cloro aunque el equipo tenga control automático [2].', 'Revisa el estabilizante con tu profesional y sigue el manual del clorador para la salinidad y el mantenimiento. No aumentes la producción sin medir ni uses este rango como garantía sanitaria.'],
  bromine: ['Bromo: comprueba el ajuste de tu sistema.', 'El manual RENOLIT [1] indica una referencia de 1–2 mg/l para bromo. El exceso puede alterar el color de la lámina, como advierte el folleto original.', 'Confirma con tu mantenedor el pH y el plan de tratamiento adecuados. No apliques a este sistema las cifras de cloro.'],
  other: ['Cada sistema necesita sus instrucciones.', 'No disponemos de información suficiente para adaptar valores a ese tratamiento. Sigue su manual y verifica la compatibilidad con la lámina armada.', 'No extrapoles valores de cloro o bromo a otros sistemas ni combines tratamientos por tu cuenta.']
});
const seasons = Object.freeze({
  swim: ['TIEMPO DE DISFRUTAR', 'El cuidado forma parte del baño.', 'Mantén el nivel de agua y revisa el equilibrio y la filtración según el uso. Retira la suciedad antes de que se acumule y presta atención a la línea de flotación.', 'frequent'],
  heat: ['CUANDO SUBE LA TEMPERATURA', 'Más calor, más atención.', 'Comprueba la temperatura y los parámetros del agua con mayor atención. El manual RENOLIT fija 32 °C como límite general. Revisa la producción de cloro y el efecto del cobertor con tu profesional; evita corregir a ciegas.', 'frequent'],
  rain: ['DESPUÉS DE LA TORMENTA', 'Primero revisa. Después actúa.', 'Cuando sea seguro acercarse, retira los residuos con suavidad y mide el agua antes de corregirla. El folleto original recomienda revisar el TAC tras las lluvias. Si hay inundación, entrada de barro o una anomalía eléctrica, pide asistencia antes de usar los equipos.', 'periodic'],
  winter: ['PROTEGER PARA VOLVER A DISFRUTAR', 'El invierno también cuenta.', 'Mantén la piscina protegida y acuerda el cuidado de skimmers y circuitos frente a heladas. No la vacíes por tu cuenta. Con cobertor, ajusta el aporte de cloro al plan de invernaje para evitar que se acumule [2].', 'winter'],
  opening: ['PREPARAR UNA NUEVA TEMPORADA', 'Vuelve al agua, paso a paso.', 'Retira los residuos, inspecciona la lámina y sigue el procedimiento de arranque del equipo. Analiza el agua antes de añadir productos. Un tratamiento de choque no es un paso automático: requiere valorar el problema y seguir la etiqueta.', 'opening']
});

const $ = (id) => document.getElementById(id);
let activeRoutine = 'frequent';
let activeSeason = 'swim';
let done = new Set(); // Solo memoria; nunca cookies, localStorage, sessionStorage ni IndexedDB.

function updateProgress() {
  const tasks = routines[activeRoutine];
  const count = tasks.filter(([key]) => done.has(activeRoutine + ':' + key)).length;
  const percent = Math.round(count / tasks.length * 100);
  $('progress-number').textContent = percent + '%';
  $('routine-progress').value = percent;
  $('routine-progress').textContent = percent + '%';
  $('progress-text').textContent = count + ' de ' + tasks.length + ' tareas completadas' + (count === tasks.length ? '. Lista completada en esta visita.' : '');
}
function renderRoutine(key) {
  if (!Object.hasOwn(routines, key)) return;
  activeRoutine = key;
  document.querySelectorAll('[data-routine]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.routine === key)));
  const fragment = document.createDocumentFragment();
  routines[key].forEach(([id, title, note]) => {
    const label = document.createElement('label');
    label.className = 'task';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.autocomplete = 'off';
    checkbox.checked = done.has(key + ':' + id);
    checkbox.addEventListener('change', () => {
      const taskKey = key + ':' + id;
      if (checkbox.checked) done.add(taskKey); else done.delete(taskKey);
      updateProgress();
    });
    const text = document.createElement('span');
    text.textContent = title;
    const detail = document.createElement('small');
    detail.textContent = note;
    text.append(detail);
    label.append(checkbox, text);
    fragment.append(label);
  });
  $('checklist').replaceChildren(fragment);
  updateProgress();
}
function renderSeason(key) {
  if (!Object.hasOwn(seasons, key)) return;
  activeSeason = key;
  const [label, title, copy] = seasons[key];
  $('season-label').textContent = label;
  $('season-title').textContent = title;
  $('season-copy').textContent = copy;
  document.querySelectorAll('[data-season]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.season === key)));
}
function updateProfile() {
  const liner = $('liner').value;
  const treatment = $('treatment').value;
  const situation = $('situation').value;
  const knownRenolit = ['vogue', 'touch', 'alive'].includes(liner);
  const prefix = knownRenolit
    ? 'RENOLIT ALKORPLAN ' + liner.toUpperCase() + ': consejos comunes del fabricante. No atribuimos diferencias de mantenimiento entre VOGUE, TOUCH y ALIVE.'
    : 'Te mostramos consejos generales. Comprueba la gama y el manual de tu piscina antes de aplicar referencias del fabricante.';
  const usage = situation === 'occasional'
    ? ' Aunque la uses poco, mantén los controles y ajusta el plan con tu profesional.'
    : situation === 'winter' ? ' Hemos abierto la rutina y los consejos de invernaje.'
      : situation === 'swim' ? ' Hemos abierto la rutina de uso habitual y los consejos de temporada.' : '';
  $('profile-note').textContent = prefix + usage;
  const selected = treatments[treatment] || treatments.unknown;
  $('treatment-title').textContent = selected[0];
  $('treatment-copy').textContent = selected[1];
  $('treatment-detail').textContent = selected[2] + (knownRenolit ? '' : ' Si tu lámina no es RENOLIT, confirma primero las referencias de su fabricante.');
}
function configureContact() {
  const number = CONFIG.whatsappNumber;
  const valid = /^[1-9]\d{7,14}$/.test(number);
  const link = $('whatsapp-link');
  link.hidden = !valid;
  if (valid) {
    // Sin texto predefinido ni preferencias en la URL. El usuario decide qué enviar.
    link.href = 'https://wa.me/' + number;
    $('contact-status').textContent = 'Se abrirá WhatsApp. Tú decides si escribes y envías un mensaje.';
  } else {
    link.removeAttribute('href');
    $('contact-status').textContent = 'WhatsApp no está habilitado en esta guía.';
  }
}
function resetVisit() {
  done = new Set();
  ['liner', 'treatment', 'situation'].forEach((id) => { $(id).value = 'unknown'; });
  renderRoutine('frequent');
  renderSeason('swim');
  updateProfile();
}

document.querySelectorAll('[data-routine]').forEach((button) => button.addEventListener('click', () => renderRoutine(button.dataset.routine)));
document.querySelectorAll('[data-season]').forEach((button) => button.addEventListener('click', () => renderSeason(button.dataset.season)));
['liner', 'treatment'].forEach((id) => $(id).addEventListener('change', updateProfile));
$('situation').addEventListener('change', () => {
  const value = $('situation').value;
  if (value === 'winter') { renderRoutine('winter'); renderSeason('winter'); }
  else if (value === 'swim' || value === 'occasional') { renderRoutine('frequent'); renderSeason('swim'); }
  updateProfile();
});
$('reset-checklist').addEventListener('click', () => {
  routines[activeRoutine].forEach(([id]) => done.delete(activeRoutine + ':' + id));
  renderRoutine(activeRoutine);
});
$('season-checklist').addEventListener('click', () => renderRoutine(seasons[activeSeason][3]));
$('start-guide').addEventListener('click', () => $('liner').focus({ preventScroll: true }));
// También reinicia al restaurar la página desde la caché de navegación del navegador.
window.addEventListener('pageshow', resetVisit);
window.addEventListener('pagehide', () => { done.clear(); });
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    if (!visible.length) return;
    document.querySelectorAll('.guide-nav a').forEach((link) => {
      if (link.hash === '#' + visible[0].target.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-70px 0px -45% 0px', threshold: [0, 0.2, 0.5] });
  ['agua', 'rutina', 'limpieza', 'errores', 'temporadas', 'preguntas'].forEach((id) => observer.observe($(id)));
}
configureContact();
resetVisit();
