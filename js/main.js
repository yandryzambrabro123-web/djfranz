/* DJ FRANZ — main.js v4 */

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
document.querySelectorAll('a,button,.svc-card,.ev-item,.gi,.t-card').forEach(el => {
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
const bandEl = document.getElementById('band');
const bandItems = ['BODAS','QUINCEAÑERAS','DISCOTECAS','EVENTOS PRIVADOS','CONCIERTOS','POOL PARTIES','USA TOUR','FLASH MEMORY 64GB','AFTER PARTIES','CORPORATIVOS'];
const bandAll = [...bandItems,...bandItems,...bandItems];
bandEl.innerHTML = bandAll.map(i => `<span class="band-item">${i}<span class="band-sep"></span></span>`).join('');

// ARTISTS
const artists = [
  'Maluma','J Balvin','Enrique Iglesias','Nicky Jam','Carlos Vives',
  'Gilberto Santa Rosa','Silvestre','Jessi Uribe','Arcángel','Tego Calderón',
  'Ivy Queen','Gente de Zona','Sin Bandera','Nacho','Trébol Clan',
  'Kevin Roldán','Yeison Jiménez','Paola Jara','Ana del Castillo',
  'Víctor Manuelle','Jerry Rivera','Alberto Barros','WaldoKinc','Paolo Plaza',
  'Jorge Celedón','Habana de Primera','Maluma','J Balvin'
];
function buildRow(id, items) {
  const all = [...items, ...items];
  document.getElementById(id).innerHTML = all.map(a =>
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

// HERO STAT COUNTERS
const heroStats = document.querySelectorAll('.hs-n[data-target]');
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
heroStats.forEach(el => statObs.observe(el));

// FORM
document.getElementById('bkForm').addEventListener('submit', e => {
  e.preventDefault();
  const toast = document.getElementById('toast');
  toast.classList.add('on');
  setTimeout(() => toast.classList.remove('on'), 4000);
  e.target.reset();
});
