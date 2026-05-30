/* DJ FRANZ — main.js v5 */
const WA = '593997790261';
const waLink = (msg) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

// PRELOADER
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('pre').classList.add('out'), 2000);
});

// CURSOR
const cr = document.getElementById('cr');
document.addEventListener('mousemove', e => {
  cr.style.left = e.clientX + 'px';
  cr.style.top  = e.clientY + 'px';
});
document.querySelectorAll('a,button,.svc-card,.ev-item,.gi').forEach(el => {
  el.addEventListener('mouseenter', () => cr.classList.add('xl'));
  el.addEventListener('mouseleave', () => cr.classList.remove('xl'));
});

// NAV
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('pinned', scrollY > 80));

// HAMBURGER
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobMenu').classList.toggle('open');
});
document.querySelectorAll('.mob-menu a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('mobMenu').classList.remove('open'));
});

// BAND
const bandItems = ['BODAS','QUINCEAÑERAS','DISCOTECAS','EVENTOS PRIVADOS','CONCIERTOS','POOL PARTIES','USA TOUR','FLASH MEMORY 64GB','AFTER PARTIES'];
const bandEl = document.getElementById('band');
const bandAll = [...bandItems,...bandItems,...bandItems];
bandEl.innerHTML = bandAll.map(i =>
  `<span class="band-item">${i}<span class="band-sep"></span></span>`
).join('');

// ARTISTS
const artists = [
  'Maluma','J Balvin','Enrique Iglesias','Nicky Jam','Carlos Vives',
  'Gilberto Santa Rosa','Silvestre','Jessi Uribe','Arcángel','Tego Calderón',
  'Ivy Queen','Gente de Zona','Sin Bandera','Nacho','Trébol Clan',
  'Kevin Roldán','Yeison Jiménez','Paola Jara','Ana del Castillo',
  'Víctor Manuelle','Jerry Rivera','Alberto Barros','WaldoKinc','Paolo Plaza',
  'Jorge Celedón','Habana de Primera'
];
function buildRow(id, items) {
  const el  = document.getElementById(id);
  const all = [...items, ...items];
  el.innerHTML = all.map(a =>
    `<span class="art-nm">${a}<span class="art-dot"> · </span></span>`
  ).join('');
}
buildRow('ar1', artists.slice(0, 16));
buildRow('ar2', artists.slice(10));

// REVEAL
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); revObs.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.rv,.rv-l,.rv-r').forEach(el => revObs.observe(el));

// HERO COUNTERS
const statObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting || e.target.dataset.done) return;
    e.target.dataset.done = '1';
    const target = parseInt(e.target.dataset.target);
    let v = 0;
    const step = target / 55;
    const t = setInterval(() => {
      v = Math.min(v + step, target);
      e.target.textContent = Math.floor(v);
      if (v >= target) clearInterval(t);
    }, 18);
    statObs.unobserve(e.target);
  });
}, { threshold: 0.5 });
document.querySelectorAll('.hs-n[data-target]').forEach(el => statObs.observe(el));

// TOAST
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('on');
  setTimeout(() => t.classList.remove('on'), 4500);
}

// ── FLASH MEMORY FORM → WhatsApp ──────────────────────
document.getElementById('flashForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name    = document.getElementById('ff-name').value.trim();
  const city    = document.getElementById('ff-city').value.trim();
  const artists = document.getElementById('ff-artists').value.trim();
  const note    = document.getElementById('ff-note').value.trim();
  const genres  = [...document.querySelectorAll('#flashForm input[type="checkbox"]:checked')]
                    .map(c => c.value).join(', ');

  if (!name || !city) {
    showToast('Por favor completa nombre y ciudad.');
    return;
  }

  let msg = `Hola DJ Franz! 🎵 Quiero pedir la Flash Memory 64GB.\n\n`;
  msg += `👤 Nombre: ${name}\n`;
  msg += `📍 Ciudad de entrega: ${city}\n`;
  if (genres)  msg += `🎵 Géneros: ${genres}\n`;
  if (artists) msg += `🎤 Artistas favoritos: ${artists}\n`;
  if (note)    msg += `📝 Nota: ${note}\n`;
  msg += `\n💰 Precio: $25 (envío incluido)`;

  window.open(waLink(msg), '_blank');
  this.reset();
  showToast('✓ Abriendo WhatsApp con tu pedido...');
});

// ── BOOKING FORM → WhatsApp ───────────────────────────
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name   = document.getElementById('bk-name').value.trim();
  const phone  = document.getElementById('bk-phone').value.trim();
  const type   = document.getElementById('bk-type').value;
  const date   = document.getElementById('bk-date').value;
  const city   = document.getElementById('bk-city').value.trim();
  const budget = document.getElementById('bk-budget').value;
  const msg_   = document.getElementById('bk-msg').value.trim();

  if (!name || !phone || !type) {
    showToast('Por favor completa nombre, teléfono y tipo de evento.');
    return;
  }

  let msg = `Hola DJ Franz! 🎧 Quiero reservar un evento.\n\n`;
  msg += `👤 Nombre: ${name}\n`;
  msg += `📱 Teléfono: ${phone}\n`;
  msg += `🎉 Tipo de evento: ${type}\n`;
  if (date)   msg += `📅 Fecha: ${date}\n`;
  if (city)   msg += `📍 Ciudad: ${city}\n`;
  if (budget) msg += `💰 Presupuesto: ${budget}\n`;
  if (msg_)   msg += `📝 Detalles: ${msg_}\n`;

  window.open(waLink(msg), '_blank');
  this.reset();
  showToast('✓ Abriendo WhatsApp con tu solicitud...');
});
