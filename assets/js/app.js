const APP_VERSION='12';
const bookRoot=['data','livros','a droga da obediência'];
const files={chapters:{
1:{title:'Os Karas',md:['leitura','capitulo 01','01%20-%20Os%20Karas%20simplificado.md'],json:['leitura','capitulo 01','capitulo_01_os_karas_atividades.json']},
2:{title:'Estranhos acontecimentos',md:['leitura','capitulo 02','02 - Estranhos acontecimentos simplificado.md'],json:['leitura','capitulo 02','capitulo_02_estranhos_acontecimentos_atividades.json']},
3:{title:'Investigação no Elite',md:['leitura','capitulo 03','03%20-%20Investiga%C3%A7%C3%A3o%20no%20Elite%20simplificado.md'],json:['leitura','capitulo 03','capitulo_03_investigacao_no_elite_atividades.json']},
4:{title:'Crânio raciocina',md:['leitura','capitulo 04','04%20-%20Cr%C3%A2nio%20raciocina%20simplificado.md']},
5:{title:'O plano de Miguel',md:['leitura','capitulo 05','05%20-%20O%20plano%20de%20Miguel%20simplificado.md']},
6:{title:'Um encontro inesperado',md:['leitura','capitulo 06','06%20-%20Um%20encontro%20inesperado%20simplificado.md']},
7:{title:'Chumbinho valente',md:['leitura','capitulo 07','07%20-%20Chumbinho%20valente%20simplificado.md']},
8:{title:'Um Kara nas sombras da noite',md:['leitura','capitulo 08','08 - Um Kara nas sombras da noite simplificado.md']},
9:{title:'Decifrando a mensagem',md:['leitura','capitulo 09','09 - Decifrando a mensagem simplificado.md']},
10:{title:'Meninos obedientes',md:['leitura','capitulo 10','10 - Meninos obedientes simplificado.md']},
11:{title:'Uma droga mais que perfeita',md:['leitura','capitulo 11','11 - Uma droga mais que perfeita simplificado.md']},
12:{title:'Assalto ao banco',md:['leitura','capitulo 12','12 - Assalto ao banco simplificado.md']},
13:{title:'Infeliz reaparecimento',md:['leitura','capitulo 13','13 - Infeliz reaparecimento simplificado.md']},
14:{title:'Quem será o oferecedor',md:['leitura','capitulo 14','14 - Quem será o oferecedor simplificado.md']},
15:{title:'Os três incompetentes',md:['leitura','capitulo 15','15 - Os três incompetentes simplificado.md']}
},videos:[
{title:'Vídeo 1',range:'Capítulos 1 a 5'},
{title:'Vídeo 2',range:'Capítulos 6 a 10'},
{title:'Vídeo 3',range:'Capítulos 11 a 15'},
{title:'Vídeo 4',range:'Capítulos 16 a 20'}
]};

const app=document.querySelector('#app'),side=document.querySelector('#sidebar'),ov=document.querySelector('#overlay');
function readProgress(){try{return JSON.parse(localStorage.getItem('progress')||'{}')}catch(e){localStorage.removeItem('progress');return {}}}
const S={data:null,install:null,progress:readProgress()};
const url=(parts,versioned=true)=>'./'+[...bookRoot,...parts].map(encodeURIComponent).join('/')+(versioned?'?v='+APP_VERSION:'');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const p=id=>S.progress['c'+id]||0;
const save=(id,v)=>{S.progress['c'+id]=Math.max(p(id),v);localStorage.setItem('progress',JSON.stringify(S.progress))};
const overall=()=>Math.round(S.data.chapters.reduce((a,c)=>a+p(c.id),0)/S.data.chapters.length);
const chapterTitle=c=>files.chapters[c.id]?.title||c.title;
const chapterSubtitle=c=>files.chapters[c.id]?.md?'':'Em breve';

async function getText(parts){const r=await fetch(url(parts));if(!r.ok)throw new Error('Arquivo não encontrado');return r.text()}
async function getJson(parts){const r=await fetch(url(parts));if(!r.ok)throw new Error('Arquivo não encontrado');return r.json()}
function inlineMd(s){return esc(s).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')}
function mdToHtml(md){
  const lines=md.replace(/\r/g,'').split('\n');let html='',para=[],list=[];
  const flushPara=()=>{if(para.length){html+=`<p>${inlineMd(para.join(' '))}</p>`;para=[]}};
  const flushList=()=>{if(list.length){html+=`<ul>${list.map(x=>`<li>${inlineMd(x)}</li>`).join('')}</ul>`;list=[]}};
  for(const line of lines){const t=line.trim();if(!t){flushPara();flushList();continue}
    if(/^[-–—]{6,}$/.test(t)){flushPara();flushList();html+='<hr>';continue}
    if(t.startsWith('# ')){flushPara();flushList();continue}
    if(t.startsWith('## ')){flushPara();flushList();html+=`<h2>${inlineMd(t.slice(3))}</h2>`;continue}
    if(t.startsWith('-   ')||t.startsWith('- ')){flushPara();list.push(t.replace(/^-   |^- /,''));continue}
    para.push(t)}
  flushPara();flushList();return html;
}

function row(c){let x=p(c.id),has=files.chapters[c.id]?.md,sub=chapterSubtitle(c);return `<a class="chapter" href="#/capitulos/${c.id}"><span class="dot ${x===100?'done':''}">${x===100?'✓':x?'▶':''}</span><span><b>Capítulo ${c.id} — ${esc(chapterTitle(c))}</b>${sub?`<small class="muted">${esc(sub)}</small>`:''}<div class="bar"><span style="width:${x}%"></span></div></span><span>${has?'Abrir':'Em breve'} ›</span></a>`}
function home(){let d=S.data,g=d.chapters.slice(0,5),o=overall();app.innerHTML=`<section class="hero"><div><div class="eyebrow">ESTUDO DO LIVRO</div><h1>${esc(d.book.title)}</h1><h2>${esc(d.book.author)}</h2><p>${esc(d.book.description)}</p><p><a class="btn primary" href="#/capitulos/1">▶ Continuar estudando</a> <a class="btn secondary" href="#/capitulos">Ver capítulos</a></p></div><div class="progress-card"><h3>Meu progresso</h3><div class="ring" style="--p:${o}%">${o}%</div><p>📖 ${d.chapters.filter(c=>p(c.id)===100).length} de ${d.chapters.length} capítulos</p><p>❔ Atividades nos capítulos 1 a 3</p><p>🗂 Flashcards nos capítulos 1 a 3</p><p>▶ ${files.videos.length} vídeos disponíveis</p></div></section><section class="quick"><a href="#/capitulos">📖 Capítulos<br><small>Arquivos em data</small></a><a href="#/videos">▶ Vídeos<br><small>MP4 do projeto</small></a><a href="#/capitulos/1">🧠 Quiz<br><small>Atividades reais</small></a><a href="#/capitulos/1">🗂 Flashcards<br><small>Cartões reais</small></a></section><section class="panel"><h2>Capítulos</h2><div class="grid">${g.map(row).join('')}</div></section>`}
function list(){app.innerHTML=`<section class="page"><h1>Capítulos</h1><p class="muted">Leia, responda e revise.</p><div class="grid">${S.data.chapters.map(row).join('')}</div></section>`}
function quizHtml(id,questions){if(!questions.length)return '<div class="scene"><p>As perguntas deste capítulo ainda não foram adicionadas em data.</p></div>';return questions.map((q,qi)=>`<div class="scene q" data-a="${q.answer}" data-exp="${esc(q.explanation)}"><h3>${qi+1}. ${esc(q.question)}</h3>${q.options.map((o,oi)=>`<label class="option"><input type="radio" name="q${id}-${qi}" value="${oi}"> ${esc(o)}</label>`).join('')}<div class="fb"></div></div>`).join('')}
function flashHtml(cards){if(!cards.length)return '<div class="scene"><p>Os flashcards deste capítulo ainda não foram adicionados em data.</p></div>';return `<div class="flashgrid">${cards.map(f=>`<button class="flash"><span class="front">${esc(f.front)}</span><span class="back">${esc(f.back)}</span></button>`).join('')}</div>`}

async function chapter(id){
  let c=S.data.chapters.find(x=>x.id===id),f=files.chapters[id];if(!c)return notfound();save(id,20);
  app.innerHTML='<section class="page"><div class="panel">Carregando arquivos do capítulo...</div></section>';
  let md='',activity=null,error='';if(f?.md){try{md=await getText(f.md)}catch(e){error='Não consegui carregar o arquivo Markdown deste capítulo.'}}if(f?.json){try{activity=await getJson(f.json)}catch(e){}}
  const questions=(activity?.quiz||[]).map(q=>({question:q.pergunta,options:q.alternativas||[],answer:q.indice_alternativa_correta,explanation:q.explicacao||''}));
  const cards=(activity?.flashcards||[]).map(f=>({front:f.frente,back:f.verso}));
  const content=md?mdToHtml(md):`<div class="scene"><p>${esc(error||'Este capítulo ainda não tem arquivo em data/livros.')}</p></div>`;
  app.innerHTML=`<div class="layout"><article class="reader"><div class="eyebrow">CAPÍTULO ${id}</div><h1>${esc(f?.title||c.title)}</h1><p class="muted">${f?.md?'Carregado de data/livros':'Aguardando arquivo do capítulo'}</p>${f?.md?`<p><a class="btn secondary" href="${url(f.md)}" target="_blank" rel="noopener">Abrir arquivo do capítulo</a></p>`:''}<section class="markdown">${content}</section><h2>Perguntas interativas</h2>${quizHtml(id,questions)}<h2>Flashcards</h2>${flashHtml(cards)}<p><button class="btn primary" id="finish">Concluir capítulo</button> ${id<S.data.chapters.length?`<a class="btn secondary" href="#/capitulos/${id+1}">Próximo capítulo →</a>`:''}</p></article><aside class="panel"><h3>Neste capítulo</h3><p>📖 Texto ${f?.md?'disponível':'pendente'}</p><p>❔ ${questions.length||0} perguntas</p><p>🗂 ${cards.length||0} flashcards</p><p><a class="btn secondary" href="#/videos">Ver vídeos</a></p></aside></div>`;
  document.querySelectorAll('.flash').forEach(b=>b.onclick=()=>b.classList.toggle('flipped'));
  document.querySelectorAll('.q').forEach(q=>q.onchange=e=>{if(!e.target.matches('input'))return;let ok=+e.target.value===+q.dataset.a,exp=q.dataset.exp;q.querySelector('.fb').textContent=(ok?'Resposta correta! ':'Ainda não. ')+exp;save(id,Math.min(80,p(id)+8))});
  document.querySelector('#finish').onclick=()=>{save(id,100);alert('Capítulo concluído!');chapter(id)};
}

function videos(){app.innerHTML=`<section class="page"><h1>Vídeos</h1><p class="muted">Os vídeos serão adicionados em links externos para manter o site leve.</p><div class="grid">${files.videos.map(v=>`<article class="card"><span>${esc(v.range)}</span><h2>${esc(v.title)}</h2><p class="muted">Vídeo em preparação.</p><button class="btn secondary" disabled>Em breve</button></article>`).join('')}</div></section>`}
function chars(){app.innerHTML=`<section class="page"><h1>Personagens</h1><div class="grid">${S.data.characters.map(c=>`<article class="card"><h2>${esc(c.name)}</h2><p>${esc(c.description)}</p></article>`).join('')}</div></section>`}
function glossary(){app.innerHTML=`<section class="page"><h1>Glossário</h1><div class="grid">${S.data.glossary.map(g=>`<article class="card"><h2>${esc(g.term)}</h2><p>${esc(g.definition)}</p></article>`).join('')}</div></section>`}
function progress(){app.innerHTML=`<section class="page"><h1>Meu progresso</h1><div class="panel"><div class="ring" style="--p:${overall()}%">${overall()}%</div><div class="grid">${S.data.chapters.map(row).join('')}</div></div></section>`}
function notfound(){app.innerHTML='<div class="panel"><h1>Página não encontrada</h1></div>'}
function route(){try{if(!S.data)return;side.classList.remove('open');ov.classList.remove('show');let [r,id]=(location.hash.replace('#/','')||'inicio').split('/');({inicio:home,livro:home,capitulos:()=>id?chapter(+id):list(),videos,personagens:chars,glossario:glossary,progresso:progress}[r]||notfound)();window.scrollTo(0,0)}catch(e){app.innerHTML=`<section class="page"><div class="panel"><h1>Erro ao abrir a página</h1><p>${esc(e.message)}</p></div></section>`;console.error(e)}}

app.innerHTML='<section class="page"><div class="panel">Carregando educa-one...</div></section>';
fetch('./data/site.json?v='+APP_VERSION).then(r=>{if(!r.ok)throw new Error('Não consegui carregar data/site.json');return r.json()}).then(d=>{S.data=d;route()}).catch(e=>{app.innerHTML=`<section class="page"><div class="panel"><h1>Erro ao carregar dados</h1><p>${esc(e.message)}</p></div></section>`;console.error(e)});
addEventListener('hashchange',route);
document.querySelector('#menu').onclick=()=>{side.classList.add('open');ov.classList.add('show')};
ov.onclick=()=>{side.classList.remove('open');ov.classList.remove('show')};
document.querySelector('#theme').onclick=()=>{document.documentElement.classList.toggle('light');localStorage.setItem('theme',document.documentElement.classList.contains('light')?'light':'dark')};
if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light');
document.querySelector('#search').oninput=e=>{if(!S.data||e.target.value.length<2)return;let t=e.target.value.toLowerCase(),m=S.data.chapters.filter(c=>(chapterTitle(c)+' '+chapterSubtitle(c)).toLowerCase().includes(t));app.innerHTML=`<section class="page"><h1>Resultados</h1><div class="grid">${m.map(row).join('')}</div></section>`};
addEventListener('beforeinstallprompt',e=>{e.preventDefault();S.install=e;document.querySelector('#install').hidden=false});
document.querySelector('#install').onclick=()=>S.install?.prompt();
if('serviceWorker'in navigator)addEventListener('load',async()=>{for(const r of await navigator.serviceWorker.getRegistrations())await r.unregister();if('caches'in window)for(const k of await caches.keys())await caches.delete(k)});
