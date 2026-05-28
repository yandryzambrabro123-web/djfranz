/* ══════════════════════════════════════════
   DJ FRANZ — MAIN JAVASCRIPT
══════════════════════════════════════════ */

// ── PRELOADER ────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('pre').classList.add('out');
  }, 2100);
});

// ── CUSTOM CURSOR ────────────────────────
const cr = document.getElementById('cr');
document.addEventListener('mousemove', e => {
  cr.style.left = e.clientX + 'px';
  cr.style.top  = e.clientY + 'px';
});
document.querySelectorAll('a, button, .svc-row, .ev-tr, .gi, .t-card').forEach(el => {
  el.addEventListener('mouseenter', () => cr.classList.add('xl'));
  el.addEventListener('mouseleave', () => cr.classList.remove('xl'));
});

// ── NAV STICKY ───────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('pinned', window.scrollY > 80);
});

// ── MOBILE MENU ──────────────────────────
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('.mm-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ── MARQUEE BAND ─────────────────────────
const bandItems = [
  'BODAS', 'QUINCEAÑERAS', 'DISCOTECAS', 'EVENTOS PRIVADOS',
  'CONCIERTOS', 'POOL PARTIES', 'USA TOUR', 'FLASH MEMORY 64GB',
  'AFTER PARTIES', 'CORPORATIVOS'
];
const bandEl = document.getElementById('band');
const bandAll = [...bandItems, ...bandItems, ...bandItems];
bandEl.innerHTML = bandAll
  .map(i => `<span class="band-item">${i}<span class="band-sep"></span></span>`)
  .join('');

// ── ARTISTS TICKER ───────────────────────
const artists = [
  'Maluma', 'J Balvin', 'Enrique Iglesias', 'Nicky Jam', 'Carlos Vives',
  'Gilberto Santa Rosa', 'Silvestre Dangond', 'Jessi Uribe', 'Arcángel',
  'Tego Calderón', 'Ivy Queen', 'Gente de Zona', 'Sin Bandera', 'Nacho',
  'Trébol Clan', 'Kevin Roldán', 'Yeison Jiménez', 'Paola Jara',
  'Ana del Castillo', 'Víctor Manuelle', 'Jerry Rivera', 'Alberto Barros',
  'WaldoKinc', 'Paolo Plaza', 'Jorge Celedón', 'Habana de Primera',
  'Luis Alfonso', 'Alex Manga', 'Herbert Vargas', 'Tego Calderón'
];

function buildArtistRow(id, items) {
  const el  = document.getElementById(id);
  const all = [...items, ...items];
  el.innerHTML = all
    .map(a => `<span class="art-nm">${a}<span class="art-dot"> · </span></span>`)
    .join('');
}
buildArtistRow('ar1', artists.slice(0, 16));
buildArtistRow('ar2', artists.slice(12));

// ── SCROLL REVEAL ────────────────────────
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.rv, .rvl, .rvr').forEach(el => revealObs.observe(el));

// ── STAT COUNTERS ────────────────────────
const statObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('on');

    const numEl  = e.target.querySelector('.sn');
    const target = parseInt(e.target.querySelector('.s-lbl').dataset.target);

    if (numEl && !numEl.dataset.done) {
      numEl.dataset.done = '1';
      let v = 0;
      const step = target / 55;
      const t = setInterval(() => {
        v = Math.min(v + step, target);
        numEl.textContent = Math.floor(v);
        if (v >= target) clearInterval(t);
      }, 18);
    }
    statObs.unobserve(e.target);
  });
}, { threshold: 0.3 });

document.querySelectorAll('.s-box').forEach(el => statObs.observe(el));

// ── BOOKING FORM ─────────────────────────
document.getElementById('bkForm').addEventListener('submit', e => {
  e.preventDefault();
  const toast = document.getElementById('toast');
  toast.classList.add('on');
  setTimeout(() => toast.classList.remove('on'), 4000);
  e.target.reset();
});
