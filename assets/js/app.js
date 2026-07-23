const APP_VERSION='19';
const bookRoot=['data','conteudos','livros','a-droga-da-obediencia'];
const files={chapters:{
1:{title:'Os Karas',md:['leitura','01%20-%20Os%20Karas%20simplificado.md']},
2:{title:'Estranhos acontecimentos',md:['leitura','02 - Estranhos acontecimentos simplificado.md']},
3:{title:'Investiga\u00e7\u00e3o no Elite',md:['leitura','03%20-%20Investiga%C3%A7%C3%A3o%20no%20Elite%20simplificado.md']},
4:{title:'Cr\u00e2nio raciocina',md:['leitura','04%20-%20Cr%C3%A2nio%20raciocina%20simplificado.md']},
5:{title:'O plano de Miguel',md:['leitura','05%20-%20O%20plano%20de%20Miguel%20simplificado.md']},
6:{title:'Um encontro inesperado',md:['leitura','06%20-%20Um%20encontro%20inesperado%20simplificado.md']},
7:{title:'Chumbinho valente',md:['leitura','07%20-%20Chumbinho%20valente%20simplificado.md']},
8:{title:'Um Kara nas sombras da noite',md:['leitura','08 - Um Kara nas sombras da noite simplificado.md']},
9:{title:'Decifrando a mensagem',md:['leitura','09 - Decifrando a mensagem simplificado.md']},
10:{title:'Meninos obedientes',md:['leitura','10 - Meninos obedientes simplificado.md']},
11:{title:'Uma droga mais que perfeita',md:['leitura','11 - Uma droga mais que perfeita simplificado.md']},
12:{title:'Assalto ao banco',md:['leitura','12 - Assalto ao banco simplificado.md']},
13:{title:'Infeliz reaparecimento',md:['leitura','13 - Infeliz reaparecimento simplificado.md']},
14:{title:'Quem ser\u00e1 o oferecedor',md:['leitura','14 - Quem ser\u00e1 o oferecedor simplificado.md']},
15:{title:'Os tr\u00eas incompetentes',md:['leitura','15 - Os tr\u00eas incompetentes simplificado.md']},
16:{title:'A outra mensagem de Chumbinho',md:['leitura','16%20-%20A%20outra%20mensagem%20de%20Chumbinho%20simplificado.md']},
17:{title:'O cad\u00e1ver mensageiro',md:['leitura','17%20-%20O%20cad%C3%A1ver%20mensageiro%20simplificado.md']},
18:{title:'O perigoso espi\u00e3ozinho',md:['leitura','18%20-%20O%20perigoso%20espi%C3%A3ozinho%20simplificado.md']},
19:{title:'C\u00f3digos combinados',md:['leitura','19 - C\u00f3digos combinados simplificado.md']},
20:{title:'Em busca de fortes emo\u00e7\u00f5es',md:['leitura','20 - Em busca de fortes emo\u00e7\u00f5es simplificado.md']},
21:{title:'Um casal de namorados curiosos',md:['leitura','21%20-%20Um%20casal%20de%20namorados%20curiosos%20simplificado.md']},
22:{title:'Na trilha de um desconhecido',md:['leitura','22%20-%20Na%20trilha%20de%20um%20desconhecido%20simplificado.md']},
23:{title:'O del\u00edrio do Doutor Q.I.',md:['leitura','23%20-%20O%20del%C3%ADrio%20do%20Doutor%20Q.I.%20simplificado.md']},
24:{title:'Z\u00e9 da Silva, perigoso meliante',md:['leitura','24%20-%20Z%C3%A9%20da%20Silva%2C%20perigoso%20meliante%20simplificado.md']},
25:{title:'Dois Karas \u00e9 melhor do que um s\u00f3',md:['leitura','25 - Dois Karas \u00e9 melhor do que um s\u00f3 simplificado.md']},
26:{title:'Mocinhos e bandidos',md:['leitura','26 - Mocinhos e bandidos simplificado.md']},
27:{title:'De prefer\u00eancia, mortos!',md:['leitura','27%20-%20De%20prefer%C3%AAncia%2C%20mortos%21%20simplificado (1).md']},
28:{title:'A capacidade de desobedecer',md:['leitura','28%20-%20A%20capacidade%20de%20desobedecer%20simplificado.md']},
29:{title:'E o Doutor Q.I.',md:['leitura','29%20-%20E%20o%20Doutor%20Q.I.%20simplificado.md']},
30:{title:'Temos de continuar!',md:['leitura','30 - Temos de continuar! simplificado.md']}
}};
const fallbackVideos=[
{title:'Video 1',range:'Capitulos 1 a 5',src:'https://pub-b14aacef07d1423ba53cf17a2025b1d3.r2.dev/01.%20cap.%2001%20a%2005.mp4'},
{title:'Video 2',range:'Capitulos 6 a 10',src:'https://pub-b14aacef07d1423ba53cf17a2025b1d3.r2.dev/02.%20cap.%2006%20a%2010.mp4'},
{title:'Video 3',range:'Capitulos 11 a 15',src:'https://pub-b14aacef07d1423ba53cf17a2025b1d3.r2.dev/03.%20cap.%2011%20a%2015.mp4'},
{title:'Video 4',range:'Capitulos 16 a 20',src:'https://pub-b14aacef07d1423ba53cf17a2025b1d3.r2.dev/04.%20cap.%2016%20a%2020.mp4'}
];
const characterFiles=['miguel','cranio','calu','magri','chumbinho','bino','marius-casperides','doutor-qi','detetive-andrade','oferecedor'];

const app=document.querySelector('#app'),side=document.querySelector('#sidebar'),ov=document.querySelector('#overlay');
function readProgress(){try{return JSON.parse(localStorage.getItem('progress')||'{}')}catch(e){localStorage.removeItem('progress');return {}}}
const S={data:null,bookCharacters:[],bookGlossary:[],videos:fallbackVideos,install:null,progress:readProgress()};
const contentUrl=(parts,versioned=true)=>'./'+[...bookRoot,...parts].map(encodeURIComponent).join('/')+(versioned?'?v='+APP_VERSION:'');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const stripFrontMatter=s=>String(s||'').replace(/^---[\s\S]*?---\s*/,'');
const plain=s=>stripFrontMatter(String(s||'')).replace(/```[\s\S]*?```/g,'').replace(/`([^`]+)`/g,'$1').replace(/\*\*([^*]+)\*\*/g,'$1').replace(/^#+\s*/gm,'').replace(/^>\s*/gm,'').trim();
const p=id=>S.progress['c'+id]||0;
const save=(id,v)=>{S.progress['c'+id]=Math.max(p(id),v);localStorage.setItem('progress',JSON.stringify(S.progress))};
const allChapters=()=>Object.keys(files.chapters).map(Number).sort((a,b)=>a-b).map(id=>S.data.chapters.find(c=>c.id===id)||{id,title:files.chapters[id].title,subtitle:''});
const overall=()=>{let chapters=allChapters();return Math.round(chapters.reduce((a,c)=>a+p(c.id),0)/chapters.length)};
const chapterTitle=c=>files.chapters[c.id]?.title||c.title;
const chapterSubtitle=c=>files.chapters[c.id]?.md?'':'Em breve';

async function getText(parts){const r=await fetch(contentUrl(parts));if(!r.ok)throw new Error('Arquivo nao encontrado');return r.text()}
async function getOptionalText(parts,fallback=''){try{return await getText(parts)}catch(e){return fallback}}
function inlineMd(s){return esc(s).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/`([^`]+)`/g,'<code>$1</code>')}
function mdToHtml(md){
  const lines=stripFrontMatter(md).replace(/\r/g,'').split('\n');let html='',para=[],list=[];
  const flushPara=()=>{if(para.length){html+=`<p>${inlineMd(para.join(' '))}</p>`;para=[]}};
  const flushList=()=>{if(list.length){html+=`<ul>${list.map(x=>`<li>${inlineMd(x)}</li>`).join('')}</ul>`;list=[]}};
  for(const line of lines){const t=line.trim();if(!t){flushPara();flushList();continue}
    if(/^[-\u2013\u2014]{6,}$/.test(t)){flushPara();flushList();html+='<hr>';continue}
    if(t.startsWith('# ')){flushPara();flushList();continue}
    if(t.startsWith('## ')){flushPara();flushList();html+=`<h2>${inlineMd(t.slice(3))}</h2>`;continue}
    if(t.startsWith('### ')){flushPara();flushList();html+=`<h3>${inlineMd(t.slice(4))}</h3>`;continue}
    if(t.startsWith('- ')){flushPara();list.push(t.slice(2));continue}
    if(t.startsWith('> ')){flushPara();html+=`<p class="muted">${inlineMd(t.slice(2))}</p>`;continue}
    para.push(t)}
  flushPara();flushList();return html;
}
function parseVideos(md){
  const lines=stripFrontMatter(md).split(/\r?\n/).map(x=>x.trim()).filter(Boolean),out=[];
  for(let i=0;i<lines.length;i++){
    if(!/^https?:\/\//i.test(lines[i+1]||''))continue;
    const label=lines[i],src=lines[i+1],m=label.match(/video\s*0?(\d+)\s*-\s*(.+)/i);
    const n=m?.[1]||String(out.length+1),range=(m?.[2]||label).replace(/^cap\./i,'Capitulos').replace(/^capitulo/i,'Capitulo');
    out.push({title:`Video ${Number(n)}`,range,src});
    i++;
  }
  return out.length?out:fallbackVideos;
}
function pickSection(text,...names){
  const src=stripFrontMatter(text);
  for(const name of names){
    const re=new RegExp(`###\\s+${name}[\\s\\S]*?(?=\\n###\\s+|\\n##\\s+|$)`,'i');
    const m=src.match(re);
    if(m)return plain(m[0].replace(/^###.+\n?/,''));
  }
  return '';
}
function parseGlossary(md){
  return stripFrontMatter(md).split(/\n##\s+/).slice(1).map(section=>{
    const title=(section.split(/\r?\n/)[0]||'').trim();
    const category=(section.match(/\*\*Categoria:\*\*\s*([^\n]+)/i)?.[1]||'termo').trim();
    const first=Number(section.match(/Primeira ocorr.*?cap.*?(\d+)/i)?.[1]||1);
    const definition=pickSection(section,'Explica..o inicial','Explica..o')||plain(section).split('\n').slice(0,3).join(' ');
    return {termo:title,categoria:category,definicao:definition,capitulos:Array.from({length:31-first},(_,i)=>first+i),primeira_aparicao:first};
  }).filter(x=>x.termo);
}
function parseCharacter(md){
  const src=stripFrontMatter(md),get=k=>(src.match(new RegExp(`^${k}:\\s*(.+)$`,'m'))?.[1]||'').trim();
  const id=get('id'),nome=get('nome')||id,role=get('tipo')||'personagem';
  const first=Number(get('primeira_aparicao')||1),last=Number(get('ultima_aparicao')||30);
  const group=(src.match(/^grupo:\s*\n((?:-\s*.+\n?)+)/m)?.[1]||'').split(/\n/).map(x=>x.replace(/^-\s*/,'').trim()).filter(Boolean).join(', ');
  const traits=(src.match(/^personalidade:\s*\n((?:-\s*.+\n?)+)/m)?.[1]||'').split(/\n/).map(x=>x.replace(/^-\s*/,'').trim()).filter(Boolean);
  const spoilers=[...src.matchAll(/texto:\s*(.+)/g)].map(m=>m[1].trim());
  return {id,nome,papel:role,grupo,caracteristicas:traits,descricao:spoilers.at(-1)||'',capitulos:Array.from({length:last-first+1},(_,i)=>first+i)};
}

function row(c){let x=p(c.id),has=files.chapters[c.id]?.md,sub=chapterSubtitle(c);return `<a class="chapter" href="#/capitulos/${c.id}"><span class="dot ${x===100?'done':''}">${x===100?'OK':x?'▶':''}</span><span><b>Capitulo ${c.id} - ${esc(chapterTitle(c))}</b>${sub?`<small class="muted">${esc(sub)}</small>`:''}<div class="bar"><span style="width:${x}%"></span></div></span><span>${has?'Abrir':'Em breve'} ›</span></a>`}
function home(){let d=S.data,chapters=allChapters(),g=chapters.slice(0,5),o=overall();app.innerHTML=`<section class="hero"><div><div class="eyebrow">ESTUDO DO LIVRO</div><h1>${esc(d.book.title)}</h1><h2>${esc(d.book.author)}</h2><p>${esc(d.book.description)}</p><p><a class="btn primary" href="#/capitulos/1">▶ Continuar estudando</a> <a class="btn secondary" href="#/capitulos">Ver capitulos</a></p></div><div class="progress-card"><h3>Meu progresso</h3><div class="ring" style="--p:${o}%">${o}%</div><p>${chapters.filter(c=>p(c.id)===100).length} de ${chapters.length} capitulos</p><p>Quizzes nos arquivos da pasta data/conteudos</p><p>Flashcards nos arquivos da pasta data/conteudos</p><p>${S.videos.length} videos disponiveis</p></div></section><section class="quick"><a href="#/capitulos">Capitulos<br><small>Arquivos em data</small></a><a href="#/videos">Videos<br><small>Links do R2</small></a><a href="#/capitulos/1">Quiz<br><small>Arquivos Markdown</small></a><a href="#/capitulos/1">Flashcards<br><small>Arquivos Markdown</small></a></section><section class="panel"><h2>Capitulos</h2><div class="grid">${g.map(row).join('')}</div></section>`}
function list(){app.innerHTML=`<section class="page"><h1>Capitulos</h1><p class="muted">Leia, responda e revise.</p><div class="grid">${allChapters().map(row).join('')}</div></section>`}
function quizHtml(id,questions,md){if(questions.length)return questions.map((q,qi)=>`<div class="scene q" data-a="${q.answer}" data-exp="${esc(q.explanation)}"><h3>${qi+1}. ${esc(q.question)}</h3>${q.options.map((o,oi)=>`<label class="option"><input type="radio" name="q${id}-${qi}" value="${oi}"> ${esc(o)}</label>`).join('')}<div class="fb"></div></div>`).join('');return `<div class="scene">${mdToHtml(md||'> As perguntas deste capitulo ainda nao foram adicionadas em data.')}</div>`}
function flashHtml(cards,md){if(cards.length)return `<div class="flashgrid">${cards.map(f=>`<button class="flash"><span class="front">${esc(f.front)}</span><span class="back">${esc(f.back)}</span></button>`).join('')}</div>`;return `<div class="scene">${mdToHtml(md||'> Os flashcards deste capitulo ainda nao foram adicionados em data.')}</div>`}

async function chapter(id){
  let f=files.chapters[id],c=S.data.chapters.find(x=>x.id===id)||{id,title:f?.title,subtitle:''};if(!f)return notfound();save(id,20);
  app.innerHTML='<section class="page"><div class="panel">Carregando arquivos do capitulo...</div></section>';
  const pad=String(id).padStart(2,'0');
  let md='',quizMd='',flashMd='',error='';
  if(f?.md){try{md=await getText(f.md)}catch(e){error='Nao consegui carregar o arquivo Markdown deste capitulo.'}}
  quizMd=await getOptionalText(['quizzes',`cap.${pad}-quizzes.md`]);
  flashMd=await getOptionalText(['flashcards',`cap.${pad}-flashcards.md`]);
  const questions=[],cards=[];
  const content=md?mdToHtml(md):`<div class="scene"><p>${esc(error||'Este capitulo ainda nao tem arquivo em data/conteudos.')}</p></div>`;
  const terms=S.bookGlossary.filter(g=>Array.isArray(g.capitulos)&&g.capitulos.includes(id));
  const maxChapter=Math.max(...Object.keys(files.chapters).map(Number));
  app.innerHTML=`<div class="layout"><article class="reader"><div class="eyebrow">CAPITULO ${id}</div><h1>${esc(f?.title||c.title)}</h1><p class="muted">${f?.md?'Carregado de data/conteudos':'Aguardando arquivo do capitulo'}</p>${f?.md?`<p><a class="btn secondary" href="${contentUrl(f.md)}" target="_blank" rel="noopener">Abrir arquivo do capitulo</a></p>`:''}<section class="markdown">${content}</section><h2>Perguntas interativas</h2>${quizHtml(id,questions,quizMd)}<h2>Flashcards</h2>${flashHtml(cards,flashMd)}${terms.length?`<h2>Glossario do capitulo</h2><div class="grid">${terms.map(termCard).join('')}</div>`:''}<p><button class="btn primary" id="finish">Concluir capitulo</button> ${id<maxChapter?`<a class="btn secondary" href="#/capitulos/${id+1}">Proximo capitulo →</a>`:''}</p></article><aside class="panel"><h3>Neste capitulo</h3><p>Texto ${f?.md?'disponivel':'pendente'}</p><p>Quiz ${quizMd?'arquivo disponivel':'pendente'}</p><p>Flashcards ${flashMd?'arquivo disponivel':'pendente'}</p><p>ABC ${terms.length||0} termos</p><p><a class="btn secondary" href="#/glossario/${id}">Glossario</a></p><p><a class="btn secondary" href="#/videos">Ver videos</a></p></aside></div>`;
  document.querySelectorAll('.flash').forEach(b=>b.onclick=()=>b.classList.toggle('flipped'));
  document.querySelectorAll('.q').forEach(q=>q.onchange=e=>{if(!e.target.matches('input'))return;let ok=+e.target.value===+q.dataset.a,exp=q.dataset.exp;q.querySelector('.fb').textContent=(ok?'Resposta correta! ':'Ainda nao. ')+exp;save(id,Math.min(80,p(id)+8))});
  document.querySelector('#finish').onclick=()=>{save(id,100);alert('Capitulo concluido!');chapter(id)};
}

function videos(){app.innerHTML=`<section class="page"><h1>Videos</h1><p class="muted">Assista aos videos de apoio por grupo de capitulos.</p><div class="grid">${S.videos.map(v=>`<article class="card"><span>${esc(v.range)}</span><h2>${esc(v.title)}</h2>${v.src?`<video controls preload="metadata" src="${esc(v.src)}" style="width:100%;aspect-ratio:16/9;background:#000;border-radius:12px;margin:12px 0"></video>`:`<p class="muted">Video em preparacao.</p><button class="btn secondary" disabled>Em breve</button>`}</article>`).join('')}</div></section>`}
function characterCard(c){return `<article class="card"><span>${esc(c.papel||'personagem')}</span><h2>${esc(c.nome||c.name)}</h2><p>${esc(c.descricao||c.description)}</p>${c.grupo?`<p class="muted">${esc(c.grupo)}</p>`:''}${Array.isArray(c.caracteristicas)?`<p>${c.caracteristicas.slice(0,4).map(esc).join(' · ')}</p>`:''}${Array.isArray(c.capitulos)?`<small class="muted">Capitulos ${c.capitulos[0]} a ${c.capitulos.at(-1)}</small>`:''}</article>`}
function termCard(g){return `<article class="card"><span>${esc(g.categoria||'termo')}</span><h2>${esc(g.termo||g.term)}</h2><p>${esc(g.definicao||g.definition)}</p>${g.exemplo?`<p class="muted">${esc(g.exemplo)}</p>`:''}${g.primeira_aparicao?`<small class="muted">Desde o capitulo ${g.primeira_aparicao}</small>`:''}</article>`}
function chars(){const items=S.bookCharacters.length?S.bookCharacters:S.data.characters.map(c=>({nome:c.name,descricao:c.description}));app.innerHTML=`<section class="page"><h1>Personagens</h1><p class="muted">Conheca os personagens do livro.</p><div class="grid">${items.map(characterCard).join('')}</div></section>`}
function glossary(chapterId){let chapter=Number(chapterId),items=S.bookGlossary.length?S.bookGlossary:S.data.glossary.map(g=>({termo:g.term,definicao:g.definition}));if(chapter)items=items.filter(g=>Array.isArray(g.capitulos)&&g.capitulos.includes(chapter));const links=allChapters().map(c=>`<a class="btn secondary" href="#/glossario/${c.id}">${c.id}</a>`).join(' ');app.innerHTML=`<section class="page"><h1>${chapter?`Glossario do capitulo ${chapter}`:'Glossario'}</h1><p class="muted">${chapter?'Termos liberados ate este capitulo.':'Escolha um capitulo ou veja todos os termos do livro.'}</p><p><a class="btn primary" href="#/glossario">Todos</a> ${links}</p><div class="grid">${items.length?items.map(termCard).join(''):'<article class="card"><p>Nenhum termo encontrado para este capitulo.</p></article>'}</div></section>`}
function progress(){app.innerHTML=`<section class="page"><h1>Meu progresso</h1><div class="panel"><div class="ring" style="--p:${overall()}%">${overall()}%</div><div class="grid">${allChapters().map(row).join('')}</div></div></section>`}
function notfound(){app.innerHTML='<div class="panel"><h1>Pagina nao encontrada</h1></div>'}
function route(){try{if(!S.data)return;side.classList.remove('open');ov.classList.remove('show');let [r,id]=(location.hash.replace('#/','')||'inicio').split('/');({inicio:home,livro:home,capitulos:()=>id?chapter(+id):list(),videos,personagens:chars,glossario:()=>glossary(id),progresso:progress}[r]||notfound)();window.scrollTo(0,0)}catch(e){app.innerHTML=`<section class="page"><div class="panel"><h1>Erro ao abrir a pagina</h1><p>${esc(e.message)}</p></div></section>`;console.error(e)}}

app.innerHTML='<section class="page"><div class="panel">Carregando educa-one...</div></section>';
Promise.all([
  fetch('./data/site.json?v='+APP_VERSION).then(r=>{if(!r.ok)throw new Error('Nao consegui carregar data/site.json');return r.json()}),
  getOptionalText(['videos','videos-r2.md']),
  getOptionalText(['glossario','glossario.md']),
  Promise.all(characterFiles.map(id=>getOptionalText(['personagens',id+'.md'])))
]).then(([d,videosMd,glossaryMd,characterMds])=>{S.data=d;S.videos=parseVideos(videosMd);S.bookGlossary=parseGlossary(glossaryMd);S.bookCharacters=characterMds.filter(Boolean).map(parseCharacter);route()}).catch(e=>{app.innerHTML=`<section class="page"><div class="panel"><h1>Erro ao carregar dados</h1><p>${esc(e.message)}</p></div></section>`;console.error(e)});
addEventListener('hashchange',route);
document.querySelector('#menu').onclick=()=>{side.classList.add('open');ov.classList.add('show')};
ov.onclick=()=>{side.classList.remove('open');ov.classList.remove('show')};
document.querySelector('#theme').onclick=()=>{document.documentElement.classList.toggle('light');localStorage.setItem('theme',document.documentElement.classList.contains('light')?'light':'dark')};
if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light');
document.querySelector('#search').oninput=e=>{if(!S.data||e.target.value.length<2)return;let t=e.target.value.toLowerCase(),m=allChapters().filter(c=>(chapterTitle(c)+' '+chapterSubtitle(c)).toLowerCase().includes(t));app.innerHTML=`<section class="page"><h1>Resultados</h1><div class="grid">${m.map(row).join('')}</div></section>`};
addEventListener('beforeinstallprompt',e=>{e.preventDefault();S.install=e;document.querySelector('#install').hidden=false});
document.querySelector('#install').onclick=()=>S.install?.prompt();
if('serviceWorker'in navigator)addEventListener('load',async()=>{for(const r of await navigator.serviceWorker.getRegistrations())await r.unregister();if('caches'in window)for(const k of await caches.keys())await caches.delete(k)});
