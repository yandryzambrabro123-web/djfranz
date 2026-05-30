/* DJ FRANZ — v7 */
const WA = '593997790261';
const waLink = m => `https://wa.me/${WA}?text=${encodeURIComponent(m)}`;

// PRELOADER
window.addEventListener('load', () => setTimeout(() => document.getElementById('pre').classList.add('out'), 2100));

// CURSOR
const cur = document.getElementById('cur');
document.addEventListener('mousemove', e => { cur.style.left = e.clientX+'px'; cur.style.top = e.clientY+'px'; });
document.querySelectorAll('a,button,.svc-slide,.show-item,.gal-item').forEach(el => {
  el.addEventListener('mouseenter', () => cur.classList.add('big'));
  el.addEventListener('mouseleave', () => cur.classList.remove('big'));
});

// HEADER
const hdr = document.getElementById('hdr');
window.addEventListener('scroll', () => hdr.classList.toggle('stuck', scrollY > 80));

// HAMBURGER
document.getElementById('hbg').addEventListener('click', () => document.getElementById('mob').classList.toggle('open'));
document.querySelectorAll('.mob-menu a').forEach(a => a.addEventListener('click', () => document.getElementById('mob').classList.remove('open')));

// MARQUEE
const mqEl = document.getElementById('mq');
const mqW = ['BODAS','QUINCEAÑERAS','DISCOTECAS','CONCIERTOS','POOL PARTIES','USA TOUR','FLASH MEMORY 64GB','AFTER PARTIES','EVENTOS PRIVADOS'];
const mqA = [...mqW,...mqW,...mqW];
mqEl.innerHTML = mqA.map(w => `<span class="mq-item">${w}<span class="mq-dot"></span></span>`).join('');

// ARTISTS TICKER
const arts = ['Maluma','J Balvin','Enrique Iglesias','Nicky Jam','Carlos Vives','Gilberto Santa Rosa','Silvestre','Jessi Uribe','Arcángel','Tego Calderón','Ivy Queen','Gente de Zona','Sin Bandera','Nacho','Trébol Clan','Kevin Roldán','Yeison Jiménez','Paola Jara','Ana del Castillo','Víctor Manuelle','Jerry Rivera','Alberto Barros','WaldoKinc','Paolo Plaza'];
const atEl = document.getElementById('at');
const atA = [...arts,...arts];
atEl.innerHTML = atA.map(a => `<span class="at-nm">${a}<span class="at-dot"> · </span></span>`).join('');

// VISUALIZER
const viz = document.getElementById('viz');
for(let i=0;i<28;i++){
  const b = document.createElement('div');
  b.className='vb';
  const h=Math.random()*48+6, d=(Math.random()*.6+.35).toFixed(2);
  b.style.cssText=`--h:${h}px;--d:${d}s;animation-delay:${(Math.random()*.4).toFixed(2)}s`;
  viz.appendChild(b);
}
setInterval(()=>{
  document.querySelectorAll('.vb').forEach(b => b.style.setProperty('--h', (Math.random()*52+5)+'px'));
}, 200);

// COUNTDOWN
const eventDate = new Date('2025-06-14T20:00:00');
function tick(){
  const d = eventDate - new Date();
  if(d<=0) return;
  const dd=Math.floor(d/86400000), h=Math.floor(d%86400000/3600000), m=Math.floor(d%3600000/60000), s=Math.floor(d%60000/1000);
  document.getElementById('cd-d').textContent=String(dd).padStart(2,'0');
  document.getElementById('cd-h').textContent=String(h).padStart(2,'0');
  document.getElementById('cd-m').textContent=String(m).padStart(2,'0');
  document.getElementById('cd-s').textContent=String(s).padStart(2,'0');
}
tick(); setInterval(tick,1000);

// STAT COUNTERS
const sObs = new IntersectionObserver(es => es.forEach(e => {
  if(!e.isIntersecting||e.target.dataset.done) return;
  e.target.dataset.done='1';
  const t=parseInt(e.target.dataset.t); let v=0;
  const int=setInterval(()=>{ v=Math.min(v+t/55,t); e.target.textContent=Math.floor(v); if(v>=t)clearInterval(int); },18);
  sObs.unobserve(e.target);
}),{threshold:.5});
document.querySelectorAll('.hst-n[data-t]').forEach(el=>sObs.observe(el));

// REVEAL
const rObs = new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');rObs.unobserve(e.target);}}),{threshold:.1});
document.querySelectorAll('.rv').forEach(el=>rObs.observe(el));

// SERVICES HORIZONTAL DRAG
const strip = document.getElementById('svcStrip');
let isDown=false, startX, scrollLeft;
strip.addEventListener('mousedown', e=>{isDown=true;strip.classList.add('dragging');startX=e.pageX-strip.offsetLeft;scrollLeft=strip.scrollLeft;});
strip.addEventListener('mouseleave',()=>{isDown=false;strip.classList.remove('dragging');});
strip.addEventListener('mouseup',()=>{isDown=false;strip.classList.remove('dragging');});
strip.addEventListener('mousemove',e=>{if(!isDown)return;e.preventDefault();const x=e.pageX-strip.offsetLeft;strip.scrollLeft=scrollLeft-(x-startX)*1.5;});

// SERVICE WA BUTTONS
document.querySelectorAll('.svc-wa-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const msg = btn.closest('.svc-slide').dataset.msg;
    window.open(waLink(msg), '_blank');
  });
});

// TOAST
function toast(msg){ const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('on'); setTimeout(()=>t.classList.remove('on'),4500); }

// FLASH FORM
document.getElementById('fForm').addEventListener('submit', function(e){
  e.preventDefault();
  const n=document.getElementById('fn').value.trim(), c=document.getElementById('fc').value.trim();
  const a=document.getElementById('fa').value.trim();
  const g=[...document.querySelectorAll('#fForm input[type=checkbox]:checked')].map(x=>x.value).join(', ');
  if(!n||!c){toast('Por favor completa nombre y ciudad.');return;}
  let m=`Hola DJ Franz! 🎵 Quiero pedir la Flash Memory 64GB.\n\n👤 Nombre: ${n}\n📍 Ciudad: ${c}`;
  if(g) m+=`\n🎵 Géneros: ${g}`;
  if(a) m+=`\n🎤 Artistas: ${a}`;
  m+=`\n\n💰 Precio: $25 (envío incluido)`;
  window.open(waLink(m),'_blank');
  this.reset(); toast('✓ Abriendo WhatsApp...');
});

// CONTACT FORM
document.getElementById('cForm').addEventListener('submit', function(e){
  e.preventDefault();
  const n=document.getElementById('cn').value.trim(), p=document.getElementById('cph').value.trim();
  const t=document.getElementById('ct').value, dt=document.getElementById('cdt').value;
  const cy=document.getElementById('ccy').value.trim(), bg=document.getElementById('cbg').value;
  const mg=document.getElementById('cmsg').value.trim();
  if(!n||!p||!t){toast('Completa nombre, teléfono y tipo de evento.');return;}
  let m=`Hola DJ Franz! 🎧 Quiero reservar un evento.\n\n👤 ${n}\n📱 ${p}\n🎉 ${t}`;
  if(dt) m+=`\n📅 ${dt}`;
  if(cy) m+=`\n📍 ${cy}`;
  if(bg) m+=`\n💰 ${bg}`;
  if(mg) m+=`\n📝 ${mg}`;
  window.open(waLink(m),'_blank');
  this.reset(); toast('✓ Abriendo WhatsApp...');
});
