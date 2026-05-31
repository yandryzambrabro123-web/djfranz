/* DJ FRANZ — Final JS */
const WA='593997790261';
const waLink=m=>`https://wa.me/${WA}?text=${encodeURIComponent(m)}`;

/* PRELOADER */
window.addEventListener('load',()=>setTimeout(()=>document.getElementById('pre').classList.add('out'),2100));

/* CURSOR */
const cur=document.getElementById('cur'),ring=document.getElementById('cur-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px';});
(function animRing(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animRing);})();
document.querySelectorAll('a,button,.svc-slide,.show-item,.gal-item,.song-item,.pb-chip').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.classList.add('big');ring.classList.add('big');});
  el.addEventListener('mouseleave',()=>{cur.classList.remove('big');ring.classList.remove('big');});
});

/* HEADER */
const hdr=document.getElementById('hdr');
window.addEventListener('scroll',()=>hdr.classList.toggle('stuck',scrollY>80));

/* HAMBURGER */
document.getElementById('hbg').addEventListener('click',()=>document.getElementById('mob').classList.toggle('open'));
document.querySelectorAll('.mob-menu a').forEach(a=>a.addEventListener('click',()=>document.getElementById('mob').classList.remove('open')));

/* MARQUEE */
const mqEl=document.getElementById('mq');
const mqW=['BODAS','QUINCEAÑERAS','DISCOTECAS','CONCIERTOS','POOL PARTIES','USA TOUR','FLASH MEMORY 64GB','AFTER PARTIES','EVENTOS PRIVADOS'];
mqEl.innerHTML=[...mqW,...mqW,...mqW].map(w=>`<span class="mq-item">${w}<span class="mq-dot"></span></span>`).join('');

/* ARTISTS TICKER */
const arts=['Jombriel','La Locura','Jossimar','Dayanara Peralta','WaldoKinc','Bebo Yau','El Tita','Paolo Plaza','Ariel Fase','Beder Musicólogo','Erivan y Jerry','Kutty y Chicho','Maluma','J Balvin','Bad Bunny','Nicky Jam','Carlos Vives','Silvestre','Marc Anthony','Karol G','Shakira','Enrique Iglesias','Daddy Yankee','Arcángel'];
const atEl=document.getElementById('at');
atEl.innerHTML=[...arts,...arts].map(a=>`<span class="at-nm">🇪🇨 ${arts.indexOf(a)<12?'':'🌎 '}${a}<span class="at-dot"> · </span></span>`).join('');

/* VISUALIZER */
const viz=document.getElementById('viz');
for(let i=0;i<26;i++){const b=document.createElement('div');b.className='vb';const h=Math.random()*48+6,d=(Math.random()*.6+.35).toFixed(2);b.style.cssText=`--h:${h}px;--d:${d}s;animation-delay:${(Math.random()*.4).toFixed(2)}s`;viz.appendChild(b);}
setInterval(()=>document.querySelectorAll('.vb').forEach(b=>b.style.setProperty('--h',(Math.random()*52+5)+'px')),220);

/* COUNTDOWN */
const evDate=new Date('2025-06-14T20:00:00');
function tick(){
  const diff=evDate-new Date();
  if(diff<=0)return;
  const d=Math.floor(diff/86400000),h=Math.floor(diff%86400000/3600000),m=Math.floor(diff%3600000/60000),s=Math.floor(diff%60000/1000);
  document.getElementById('cd-d').textContent=String(d).padStart(2,'0');
  document.getElementById('cd-h').textContent=String(h).padStart(2,'0');
  document.getElementById('cd-m').textContent=String(m).padStart(2,'0');
  document.getElementById('cd-s').textContent=String(s).padStart(2,'0');
}
tick();setInterval(tick,1000);

/* STATS */
const sObs=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting||e.target.dataset.done)return;
  e.target.dataset.done='1';
  const t=parseInt(e.target.dataset.t);let v=0;
  const iv=setInterval(()=>{v=Math.min(v+t/55,t);e.target.textContent=Math.floor(v);if(v>=t)clearInterval(iv);},18);
  sObs.unobserve(e.target);
}),{threshold:.5});
document.querySelectorAll('.hst-n[data-t]').forEach(el=>sObs.observe(el));

/* REVEAL */
const rObs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');rObs.unobserve(e.target);}}),{threshold:.1});
document.querySelectorAll('.rv,.rv-l,.rv-r').forEach(el=>rObs.observe(el));

/* SERVICES DRAG */
const strip=document.getElementById('svcStrip');
let isDown=false,startX,scrollLeft;
strip.addEventListener('mousedown',e=>{isDown=true;strip.classList.add('drag');startX=e.pageX-strip.offsetLeft;scrollLeft=strip.scrollLeft;});
strip.addEventListener('mouseleave',()=>{isDown=false;strip.classList.remove('drag');});
strip.addEventListener('mouseup',()=>{isDown=false;strip.classList.remove('drag');});
strip.addEventListener('mousemove',e=>{if(!isDown)return;e.preventDefault();strip.scrollLeft=scrollLeft-(e.pageX-strip.offsetLeft-startX)*1.5;});
document.querySelectorAll('.svc-wa').forEach(btn=>{
  btn.addEventListener('click',e=>{e.preventDefault();window.open(waLink(btn.closest('.svc-slide').dataset.msg),'_blank');});
});

/* ══════════════════════════════════════
   PLAYLIST BUILDER
══════════════════════════════════════ */
const SONGS={
  'Reggaeton':[
    {t:'TUSA',a:'Karol G & Nicki Minaj',e:'🎵'},{t:'Hawái',a:'Maluma',e:'🌴'},
    {t:'Con Calma',a:'Daddy Yankee',e:'🎧'},{t:'Problema',a:'J Balvin',e:'🔥'},
    {t:'Si Veo a Tu Mamá',a:'Bad Bunny',e:'🎤'},{t:'Noche de Bodas',a:'Ivy Queen',e:'👑'},
    {t:'Contigo',a:'Nicky Jam',e:'❤️'},{t:'Cojo Tu Presencia',a:'Arcángel',e:'🎶'},
  ],
  'Salsa':[
    {t:'Vivir Mi Vida',a:'Marc Anthony',e:'🎺'},{t:'Cali Pachanguero',a:'Grupo Niche',e:'🥁'},
    {t:'El Cantante',a:'Héctor Lavoe',e:'🎵'},{t:'Pedro Navaja',a:'Rubén Blades',e:'🎼'},
    {t:'La Vida Es Un Carnaval',a:'Celia Cruz',e:'🌟'},{t:'Llorarás',a:'Oscar D\'León',e:'🎹'},
  ],
  'Cumbia':[
    {t:'La Bicicleta',a:'Carlos Vives',e:'🚲'},{t:'Cumbia Sampuesana',a:'Clásico',e:'🎶'},
    {t:'La Pollera Colorá',a:'Wilson Choperena',e:'🌺'},{t:'El Pescador',a:'Jorge Velosa',e:'🎵'},
  ],
  'Bachata':[
    {t:'Propuesta Indecente',a:'Romeo Santos',e:'🌹'},{t:'El Tonto',a:'Romeo Santos',e:'💔'},
    {t:'Obsesión',a:'Aventura',e:'❤️'},{t:'Darte un Beso',a:'Prince Royce',e:'💋'},
  ],
  'Pop':[
    {t:'Waka Waka',a:'Shakira',e:'🌍'},{t:'Bailando',a:'Enrique Iglesias',e:'💃'},
    {t:'Livin la Vida Loca',a:'Ricky Martin',e:'🔥'},{t:'She Wolf',a:'Shakira',e:'🐺'},
  ],
  'Vallenato':[
    {t:'La Bicicleta',a:'Carlos Vives',e:'🎵'},{t:'El Amor de Mi Tierra',a:'Carlos Vives',e:'🌿'},
    {t:'La Gota Fría',a:'Carlos Vives',e:'💧'},{t:'Jossimar - Hits',a:'Jossimar',e:'🇪🇨'},
  ],
  'Trap':[
    {t:'MIA',a:'Bad Bunny & Drake',e:'🎤'},{t:'Vete',a:'Bad Bunny',e:'👋'},
    {t:'Dakiti',a:'Bad Bunny & Jhay Cortez',e:'🌙'},{t:'Safaera',a:'Bad Bunny',e:'🔊'},
  ],
  'Ecuador':[
    {t:'La Locura Mix',a:'La Locura',e:'🇪🇨'},{t:'Éxitos',a:'Jombriel',e:'🇪🇨'},
    {t:'Mix Urbano',a:'WaldoKinc',e:'🇪🇨'},{t:'Hits',a:'Dayanara Peralta',e:'🇪🇨'},
    {t:'Lo Mejor',a:'El Tita',e:'🇪🇨'},{t:'Éxitos',a:'Bebo Yau',e:'🇪🇨'},
    {t:'Mix',a:'Ariel Fase',e:'🇪🇨'},{t:'Hits',a:'Erivan y Jerry',e:'🇪🇨'},
  ],
  'Merengue':[
    {t:'El Costo de la Vida',a:'Juan Luis Guerra',e:'🎺'},{t:'Ojalá Que Llueva Café',a:'Juan Luis Guerra',e:'☕'},
    {t:'Suavemente',a:'Elvis Crespo',e:'🎵'},{t:'Loco',a:'Enrique Iglesias',e:'🔥'},
  ],
};

const GENRES=Object.keys(SONGS);
const selGenres=new Set();
const selSongs=new Set();
let plName='Mi Playlist';

/* Build genre chips */
const gChips=document.getElementById('genreChips');
GENRES.forEach(g=>{
  const el=document.createElement('div');
  el.className='pb-chip'+(g==='Ecuador'?' pb-chip--ec':'');
  el.textContent=g==='Ecuador'?'🇪🇨 Ecuador':g;
  el.onclick=()=>{
    el.classList.toggle('on');
    selGenres.has(g)?selGenres.delete(g):selGenres.add(g);
    renderSongs();
  };
  gChips.appendChild(el);
  if(g==='Ecuador')el.click(); // Ecuador selected by default
});

/* Build song grid */
function renderSongs(){
  const grid=document.getElementById('songsGrid');
  grid.innerHTML='';
  const genres=[...selGenres];
  if(!genres.length){grid.innerHTML='<div style="grid-column:1/-1;font-family:var(--fm);font-size:9px;letter-spacing:.15em;color:rgba(240,237,232,.2);text-transform:uppercase;padding:16px 0">Selecciona un género para ver canciones</div>';updatePreview();return;}
  const allSongs=[];
  genres.forEach(g=>(SONGS[g]||[]).forEach(s=>allSongs.push({...s,genre:g})));
  allSongs.forEach(s=>{
    const key=`${s.t}|${s.a}`;
    const el=document.createElement('div');
    el.className='song-item'+(selSongs.has(key)?' on':'');
    el.innerHTML=`<span class="si-emoji">${s.e}</span><div class="si-info-wrap"><div class="si-name">${s.t}</div><div class="si-artist">${s.a}</div></div><span class="si-check">✓</span>`;
    el.onclick=()=>{
      el.classList.toggle('on');
      selSongs.has(key)?selSongs.delete(key):selSongs.add(key);
      updatePreview();
    };
    grid.appendChild(el);
  });
  updatePreview();
}

/* Update playlist preview */
function updatePreview(){
  const tracks=[...selSongs];
  const name=document.getElementById('plNameInput').value||'Mi Playlist';
  document.getElementById('pbpName').textContent=name;
  document.getElementById('pbpCount').textContent=`${tracks.length} canciones · ~${Math.round(tracks.length*3.5)} min`;
  const container=document.getElementById('pbpTracks');
  if(!tracks.length){container.innerHTML='<div class="pbp-empty">Agrega canciones a tu playlist</div>';updateBtns();return;}
  container.innerHTML=tracks.map((k,i)=>{
    const[t,a]=k.split('|');
    return`<div class="pbp-track"><span class="pbp-tn">${i+1}</span><span class="pbp-tt">${t}</span><span class="pbp-ta">${a}</span><button class="pbp-rm" data-key="${k}" title="Quitar">×</button></div>`;
  }).join('');
  container.querySelectorAll('.pbp-rm').forEach(btn=>{
    btn.onclick=()=>{selSongs.delete(btn.dataset.key);renderSongs();};
  });
  // Update cover emoji
  const first=[...selSongs][0];
  if(first){const song=getAllSongs().find(s=>`${s.t}|${s.a}`===first);if(song)document.getElementById('pbpCover').textContent=song.e;}
  updateBtns();
}

function getAllSongs(){return Object.values(SONGS).flat();}

function updateBtns(){
  const has=selSongs.size>0;
  document.getElementById('spotifyBtn').disabled=!has;
  document.getElementById('waBtn').disabled=!has;
}

/* Playlist name sync */
const nameInput=document.getElementById('plNameInput');
const nameDisplay=document.getElementById('plName');
nameInput.addEventListener('input',()=>{
  const v=nameInput.value||'Mi Playlist';
  nameDisplay.textContent=v;
  document.getElementById('pbpName').textContent=v;
});

/* Auto generate */
function autoGenerate(){
  selSongs.clear();
  const genres=[...selGenres];
  if(!genres.length){toast('Selecciona al menos un género primero.');return;}
  genres.forEach(g=>{
    const songs=SONGS[g]||[];
    const pick=songs.slice().sort(()=>Math.random()-.5).slice(0,3);
    pick.forEach(s=>selSongs.add(`${s.t}|${s.a}`));
  });
  renderSongs();
  document.getElementById('songsGrid').querySelectorAll('.song-item').forEach(el=>{
    const key=el.querySelector('.si-name').textContent+'|'+el.querySelector('.si-artist').textContent;
    if(selSongs.has(key))el.classList.add('on');
  });
  toast('✓ Playlist generada automáticamente');
}

/* Open Spotify */
function openSpotify(){
  if(!selSongs.size)return;
  const tracks=[...selSongs];
  const name=nameInput.value||'Mi Playlist';
  // Search for the playlist name on Spotify
  const searchUrl=`https://open.spotify.com/search/${encodeURIComponent(name)}`;
  window.open(searchUrl,'_blank');
  // Also show a modal with all tracks
  const trackList=tracks.map((k,i)=>{const[t,a]=k.split('|');return`${i+1}. ${t} — ${a}`;}).join('\n');
  setTimeout(()=>{
    toast(`✓ Spotify abierto. Tu playlist "${name}" tiene ${tracks.length} canciones.`);
  },800);
}

/* Send WA */
function sendWA(){
  if(!selSongs.size)return;
  const name=nameInput.value||'Mi Playlist';
  const tracks=[...selSongs].map((k,i)=>{const[t,a]=k.split('|');return`${i+1}. ${t} — ${a}`;}).join('\n');
  let msg=`Hola DJ Franz! 🎵 Quiero mi Flash Memory 64GB.\n\n`;
  msg+=`🎧 Nombre de mi playlist: "${name}"\n\n`;
  msg+=`📋 Canciones:\n${tracks}\n\n`;
  msg+=`💰 Precio: $25 (envío incluido)`;
  window.open(waLink(msg),'_blank');
}

/* Init songs */
renderSongs();

/* TOAST */
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('on');setTimeout(()=>t.classList.remove('on'),4500);}

/* CONTACT FORM */
document.getElementById('cForm').addEventListener('submit',function(e){
  e.preventDefault();
  const n=document.getElementById('cn').value.trim(),p=document.getElementById('cph').value.trim();
  const t=document.getElementById('ct').value,dt=document.getElementById('cdt').value;
  const cy=document.getElementById('ccy').value.trim(),bg=document.getElementById('cbg').value;
  const mg=document.getElementById('cmsg').value.trim();
  if(!n||!p||!t){toast('Completa nombre, teléfono y tipo de evento.');return;}
  let msg=`Hola DJ Franz! 🎧 Quiero reservar un evento.\n\n👤 ${n}\n📱 ${p}\n🎉 ${t}`;
  if(dt)msg+=`\n📅 ${dt}`;if(cy)msg+=`\n📍 ${cy}`;if(bg)msg+=`\n💰 ${bg}`;if(mg)msg+=`\n📝 ${mg}`;
  window.open(waLink(msg),'_blank');
  this.reset();toast('✓ Abriendo WhatsApp...');
});

// Drag scroll para svc-strip y gal-track
['svcStrip','gal-track'].forEach(id=>{
  const el=document.getElementById(id)||document.querySelector('.gal-track');
  if(!el)return;
  let isDown=false,startX,scrollLeft;
  el.addEventListener('mousedown',e=>{isDown=true;el.style.animationPlayState='paused';startX=e.pageX-el.offsetLeft;scrollLeft=el.scrollLeft;});
  el.addEventListener('mouseleave',()=>{isDown=false;el.style.animationPlayState='running';});
  el.addEventListener('mouseup',()=>{isDown=false;el.style.animationPlayState='running';});
  el.addEventListener('mousemove',e=>{if(!isDown)return;e.preventDefault();const x=e.pageX-el.offsetLeft;el.scrollLeft=scrollLeft-(x-startX)*2;});
  el.addEventListener('touchstart',e=>{startX=e.touches[0].pageX-el.offsetLeft;scrollLeft=el.scrollLeft;el.style.animationPlayState='paused';},{passive:true});
  el.addEventListener('touchend',()=>el.style.animationPlayState='running');
  el.addEventListener('touchmove',e=>{const x=e.touches[0].pageX-el.offsetLeft;el.scrollLeft=scrollLeft-(x-startX)*2;},{passive:true});
});

// Drag manual galería y servicios
document.querySelectorAll('.gal-track, .svc-strip').forEach(el=>{
  el.style.animation='none';
  let isDown=false,startX,scrollLeft;
  el.addEventListener('mousedown',e=>{isDown=true;el.classList.add('drag');startX=e.pageX-el.offsetLeft;scrollLeft=el.scrollLeft;});
  window.addEventListener('mouseup',()=>{isDown=false;el.classList.remove('drag');});
  el.addEventListener('mousemove',e=>{if(!isDown)return;e.preventDefault();const x=e.pageX-el.offsetLeft;el.scrollLeft=scrollLeft-(x-startX)*2;});
  el.addEventListener('touchstart',e=>{startX=e.touches[0].pageX;scrollLeft=el.scrollLeft;},{passive:true});
  el.addEventListener('touchmove',e=>{el.scrollLeft=scrollLeft-(e.touches[0].pageX-startX);},{passive:true});
});
