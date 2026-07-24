const APP_VERSION='32';
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
{title:'Video 4',range:'Capitulos 16 a 20',src:'https://pub-b14aacef07d1423ba53cf17a2025b1d3.r2.dev/04.%20cap.%2016%20a%2020.mp4'},
{title:'Video 5',range:'Capitulos 21 a 25',src:'https://pub-b14aacef07d1423ba53cf17a2025b1d3.r2.dev/05.%20cap.%2021%20a%2025.mp4'},
{title:'Video 6',range:'Capitulos 26 a 30',src:'https://pub-b14aacef07d1423ba53cf17a2025b1d3.r2.dev/06.%20cap.%2026%20a%2030.mp4'}
];
const characterFiles=['miguel','cranio','calu','magri','chumbinho','bino','marius-casperides','doutor-qi','detetive-andrade','oferecedor'];

const app=document.querySelector('#app'),side=document.querySelector('#sidebar'),ov=document.querySelector('#overlay'),installBtn=document.querySelector('#install');
function readProgress(){try{return JSON.parse(localStorage.getItem('progress')||'{}')}catch(e){localStorage.removeItem('progress');return {}}}
const S={data:null,bookCharacters:[],bookGlossary:[],videos:fallbackVideos,install:null,progress:readProgress()};
const contentUrl=(parts,versioned=true)=>'./'+[...bookRoot,...parts].map(encodeURIComponent).join('/')+(versioned?'?v='+APP_VERSION:'');
const assetUrl=parts=>'./assets/img/'+parts.map(encodeURIComponent).join('/')+'?v='+APP_VERSION;
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
async function getJson(parts){const r=await fetch(contentUrl(parts));if(!r.ok)throw new Error('Arquivo nao encontrado');return r.json()}
async function getOptionalJson(parts,fallback=null){try{return await getJson(parts)}catch(e){return fallback}}
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
  const grupo=(src.match(/^grupo:\s*\n((?:-\s*.+\n?)+)/m)?.[1]||'').split(/\n/).map(x=>x.replace(/^-\s*/,'').trim()).filter(Boolean).join(', ');
  const traits=(src.match(/^personalidade:\s*\n((?:-\s*.+\n?)+)/m)?.[1]||'').split(/\n/).map(x=>x.replace(/^-\s*/,'').trim()).filter(Boolean);
  const spoilers=[...src.matchAll(/texto:\s*(.+)/g)].map(m=>m[1].trim());
  return {id,nome,papel:role,grupo,caracteristicas:traits,descricao:spoilers.at(-1)||'',capitulos:Array.from({length:last-first+1},(_,i)=>first+i)};
}
const cleanLine=s=>String(s||'').replace(/^[-*]\s*/,'').replace(/^[A-Da-d][).]\s*/,'').trim();
const normalizeAnswer=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
function parseQuizMarkdown(md){
  const src=stripFrontMatter(md);
  const chunks=src.split(/\n###\s+/).slice(1);
  return chunks.map(chunk=>{
    const lines=chunk.split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
    if(!lines.length)return null;
    let question='',options=[],answerRaw='',explanation='';
    for(let i=0;i<lines.length;i++){
      const line=lines[i];
      if(/^pergunta\s*:/i.test(line)){question=line.replace(/^pergunta\s*:\s*/i,'').trim();continue}
      if(/^alternativas?\s*:/i.test(line)||/^opcoes\s*:/i.test(line)){
        for(i++;i<lines.length&&/^(?:[-*]\s*)?[A-Da-d]?[).]?\s*.+/.test(lines[i])&&!/^(resposta|explica|observa)/i.test(lines[i]);i++)options.push(cleanLine(lines[i]));
        i--;continue;
      }
      if(/^resposta\s*:/i.test(line)){answerRaw=line.replace(/^resposta\s*:\s*/i,'').trim();continue}
      if(/^explica/i.test(line)){explanation=line.replace(/^explica(?:cao|\u00e7\u00e3o)?\s*:\s*/i,'').trim();continue}
      if(!question&&!/^quest/i.test(line))question=line;
    }
    if(!question||!options.length)return null;
    const answerKey=answerRaw.match(/[A-Da-d]/)?.[0]?.toLowerCase();
    let answer=answerKey?answerKey.charCodeAt(0)-97:options.findIndex(o=>normalizeAnswer(o)===normalizeAnswer(answerRaw));
    if(answer<0)answer=0;
    return {question,options,answer,explanation};
  }).filter(Boolean);
}
function parseFlashcardsMarkdown(md){
  const src=stripFrontMatter(md);
  const chunks=src.split(/\n###\s+/).slice(1);
  return chunks.map(chunk=>{
    const front=chunk.match(/(?:frente|pergunta)\s*:\s*([\s\S]*?)(?=\n(?:verso|resposta)\s*:|$)/i)?.[1]?.trim();
    const back=chunk.match(/(?:verso|resposta)\s*:\s*([\s\S]*?)(?=\n(?:observa|###)|$)/i)?.[1]?.trim();
    if(!front||!back||front==='...'||back==='-')return null;
    return {front:plain(front),back:plain(back)};
  }).filter(Boolean);
}
function parseClozesMarkdown(md){
  const src=stripFrontMatter(md);
  const chunks=src.split(/\n###\s+/).slice(1);
  return chunks.map(chunk=>{
    const text=chunk.match(/Texto\s*:\s*```([\s\S]*?)```/i)?.[1]?.trim()||chunk.match(/Texto\s*:\s*([\s\S]*?)(?=\nResposta)/i)?.[1]?.trim();
    const answerBlock=chunk.match(/Resposta\(s\)\s*:\s*([\s\S]*?)(?=\nObserva|\n###|$)/i)?.[1]||'';
    const answers=answerBlock.split(/\r?\n/).map(cleanLine).filter(x=>x&&x!=='-');
    if(!text||text==='...'||!answers.length)return null;
    return {text:plain(text),answers};
  }).filter(Boolean);
}
function parseQuizJson(data){
  return (data?.questoes||data?.quiz||[]).map(q=>{
    const options=(q.alternativas||q.options||[]).map(a=>typeof a==='string'?a:a.texto);
    const key=String(q.resposta_correta??q.answer??'').toLowerCase();
    const answer=/^[a-d]$/.test(key)?key.charCodeAt(0)-97:options.findIndex(o=>normalizeAnswer(o)===normalizeAnswer(key));
    return {question:q.enunciado||q.pergunta||q.question,options,answer:answer<0?0:answer,explanation:q.explicacao||q.explanation||''};
  }).filter(q=>q.question&&q.options.length);
}
function parseFlashcardsJson(data){
  return (data?.flashcards||data?.cards||[]).map(f=>({front:f.frente||f.front,back:f.verso||f.back})).filter(f=>f.front&&f.back);
}
function parseClozesJson(data){
  const componentItems=(data?.atividades||[]).map(item=>{
    const text=(item.componentes||[]).map(c=>c.tipo==='lacuna'?'____':(c.conteudo||'')).join('');
    const answers=(item.componentes||[]).filter(c=>c.tipo==='lacuna').flatMap(c=>c.respostas_aceitas||c.answers||[]).filter(Boolean);
    return {text,answers};
  });
  const itemItems=(data?.itens||data?.clozes||[]).map(item=>{
    const answers=(item.lacunas||[]).flatMap(l=>l.respostas_aceitas||l.answers||[]).filter(Boolean);
    return {text:item.texto||item.text||'',answers};
  });
  return [...componentItems,...itemItems].filter(x=>x.text&&x.answers.length);
}

function row(c){let x=p(c.id),has=files.chapters[c.id]?.md,sub=chapterSubtitle(c);return `<a class="chapter" href="#/capitulos/${c.id}"><span class="dot ${x===100?'done':''}">${x===100?'OK':x?'▶':''}</span><span><b>Capitulo ${c.id} - ${esc(chapterTitle(c))}</b>${sub?`<small class="muted">${esc(sub)}</small>`:''}<div class="bar"><span style="width:${x}%"></span></div></span><span>${has?'Abrir':'Em breve'} ›</span></a>`}
function home(){let d=S.data,chapters=allChapters(),g=chapters.slice(0,5),o=overall();app.innerHTML=`<section class="hero"><div><div class="eyebrow">ESTUDO DO LIVRO</div><h1>${esc(d.book.title)}</h1><h2>${esc(d.book.author)}</h2><p>${esc(d.book.description)}</p><p><a class="btn primary" href="#/capitulos/1">▶ Continuar estudando</a> <a class="btn secondary" href="#/capitulos">Ver capitulos</a></p></div><div class="progress-card"><h3>Meu progresso</h3><div class="ring" style="--p:${o}%">${o}%</div><p>${chapters.filter(c=>p(c.id)===100).length} de ${chapters.length} capitulos</p><p>${S.videos.length} videos disponiveis</p></div></section><section class="quick"><a href="#/capitulos">Capitulos</a><a href="#/videos">Videos</a><a href="#/capitulos/1">Quiz</a><a href="#/capitulos/1">Flashcards</a></section><section class="panel"><h2>Capitulos</h2><div class="grid">${g.map(row).join('')}</div></section>`}
function chapterStatus(id){const x=p(id);return x===100?'Concluido':x>0?'Em andamento':'Nao iniciado'}
function netflixChapterCard(c){
  const x=p(c.id),status=chapterStatus(c.id),statusClass=x===100?'done':x>0?'doing':'idle';
  const img=assetUrl(['chapters',`cap-${String(c.id).padStart(2,'0')}.jpg`]);
  return `<a class="nf-card ${statusClass}" href="#/capitulos/${c.id}" aria-label="Capitulo ${c.id} - ${esc(chapterTitle(c))}" style="--card-img:url('${img}')"><img class="nf-thumb" src="${img}" alt="" loading="lazy"><span class="nf-card-bar"><i style="width:${x}%"></i></span><small>${status}</small></a>`;
}
function list(){
  const d=S.data,chapters=allChapters(),o=overall(),done=chapters.filter(c=>p(c.id)===100).length,doing=chapters.filter(c=>p(c.id)>0&&p(c.id)<100).length,notStarted=chapters.length-done-doing;
  const hero=assetUrl(['chapters','banner-capitulos-d-o.png']);
  app.innerHTML=`<section class="nf-page" style="--hero-img:url('${hero}')"><img class="nf-hero-img" src="${hero}" alt=""><div class="nf-hero"><div class="nf-cover" style="--cover-img:url('${assetUrl(['book-cover.jpg'])}')"><span class="nf-ribbon">Leitura Simplificada</span><b>A Droga da<br>Obediencia</b><small>Pedro Bandeira</small></div><div class="nf-copy"><span class="nf-kicker">A DROGA DA OBEDIENCIA</span><h1>Capitulos</h1><h2>Leia, responda e revise.</h2><p>${esc(d.book.description)}</p><div class="nf-progress"><span>Seu progresso geral</span><div class="bar"><span style="width:${o}%"></span></div><b>${o}%</b></div><div class="nf-meta"><span>▣ ${chapters.length} capitulos</span><span>◷ ~5h de leitura</span><span>★ Conquistas</span></div></div></div><div class="nf-toolbar"><div class="nf-filters"><button class="active" data-filter="all">Todos os capitulos</button><button data-filter="idle">Nao iniciados ${notStarted}</button><button data-filter="doing">Em andamento ${doing}</button><button data-filter="done">Concluidos ${done}</button></div><span>Ordenar: Padrao</span></div><div class="nf-grid">${chapters.map(netflixChapterCard).join('')}</div></section>`;
  document.querySelectorAll('.nf-filters button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.nf-filters button').forEach(x=>x.classList.toggle('active',x===b));document.querySelectorAll('.nf-card').forEach(card=>{card.style.display=b.dataset.filter==='all'||card.classList.contains(b.dataset.filter)?'flex':'none'})});
}
function quizHtml(id,questions,md){if(questions.length)return questions.map((q,qi)=>`<div class="scene q" data-a="${q.answer}" data-exp="${esc(q.explanation)}"><h3>${qi+1}. ${esc(q.question)}</h3>${q.options.map((o,oi)=>`<label class="option"><input type="radio" name="q${id}-${qi}" value="${oi}"> ${esc(o)}</label>`).join('')}<div class="fb"></div></div>`).join('');return `<div class="scene">${mdToHtml(md||'> As perguntas deste capitulo ainda nao foram adicionadas em data.')}</div>`}
function flashHtml(cards,md){if(cards.length)return `<div class="flashgrid">${cards.map(f=>`<button class="flash"><span class="front">${esc(f.front)}</span><span class="back">${esc(f.back)}</span></button>`).join('')}</div>`;return `<div class="scene">${mdToHtml(md||'> Os flashcards deste capitulo ainda nao foram adicionados em data.')}</div>`}
function clozeHtml(items,md){if(items.length)return items.map((c,i)=>`<div class="scene cloze" data-answers="${esc(c.answers.join('|'))}"><h3>Cloze ${i+1}</h3><p>${esc(c.text)}</p><input class="cloze-input" placeholder="Digite a resposta"><button class="btn secondary cloze-check">Conferir</button><div class="fb"></div></div>`).join('');return `<div class="scene">${mdToHtml(md||'> Os exercicios deste capitulo ainda nao foram adicionados em data.')}</div>`}
function tabButton(id,label,active=false){return `<button class="chapter-tab ${active?'active':''}" data-tab="${id}" type="button" aria-selected="${active}">${label}</button>`}
function timelineHtml(data){
  const events=(data?.eventos||[]).slice().sort((a,b)=>(a.ordem||0)-(b.ordem||0));
  if(!events.length)return '<div class="scene"><p>Timeline deste capitulo ainda nao foi adicionada em data.</p></div>';
  return `<ol class="timeline-list">${events.map(ev=>`<li><b>${esc(ev.titulo)}</b><p>${esc(ev.descricao)}</p></li>`).join('')}</ol>${data?.atividade_ordenacao?.instrucao?`<div class="scene"><p>${esc(data.atividade_ordenacao.instrucao)}</p></div>`:''}`;
}
function vocabHtml(data,terms){
  const items=(data?.termos||[]).map(t=>({termo:t.termo,definicao:t.definicao,exemplo:t.exemplo_contextual}));
  const list=items.length?items:terms.map(t=>({termo:t.termo||t.term,definicao:t.definicao||t.definition,exemplo:t.exemplo}));
  if(!list.length)return '<div class="scene"><p>Vocabulario deste capitulo ainda nao foi adicionado em data.</p></div>';
  return `<div class="grid">${list.map(termCard).join('')}</div>`;
}
function objetivosHtml(data){
  const objetivos=data?.objetivos||[],criterios=data?.criterios_de_sucesso||[];
  if(!objetivos.length&&!criterios.length)return '<div class="scene"><p>Objetivos deste capitulo ainda nao foram adicionados em data.</p></div>';
  return `${objetivos.length?`<div class="grid">${objetivos.map(o=>`<article class="card"><span>${esc(o.prioridade||'objetivo')}</span><h2>${esc(o.descricao)}</h2></article>`).join('')}</div>`:''}${criterios.length?`<div class="scene"><h3>Criterios de sucesso</h3><ul>${criterios.map(c=>`<li>${esc(c)}</li>`).join('')}</ul></div>`:''}`;
}

async function chapter(id){
  let f=files.chapters[id],c=S.data.chapters.find(x=>x.id===id)||{id,title:f?.title,subtitle:''};if(!f)return notfound();save(id,20);
  const pad=String(id).padStart(2,'0');
  let error='';
  const [mdResult,quizJson,flashJson,clozeJson,timelineJson,vocabJson,objetivosJson,quizMd,flashMd,clozeMd]=await Promise.all([
    f?.md?getText(f.md).then(text=>({text})).catch(()=>({text:'',error:'Nao consegui carregar o arquivo Markdown deste capitulo.'})):Promise.resolve({text:''}),
    getOptionalJson(['quizzes',`cap.${pad}-quizzes.json`]),
    getOptionalJson(['flashcards',`cap.${pad}-flashcards.json`]),
    getOptionalJson(['clozes',`cap.${pad}-clozes.json`]),
    getOptionalJson(['timeline',`cap.${pad}-timeline.json`]),
    getOptionalJson(['vocabulario',`cap.${pad}-vocabulario.json`]),
    getOptionalJson(['objetivos',`cap.${pad}-objetivos.json`]),
    getOptionalText(['quizzes',`cap.${pad}-quizzes.md`]),
    getOptionalText(['flashcards',`cap.${pad}-flashcards.md`]),
    getOptionalText(['clozes',`cap.${pad}-clozes.md`])
  ]);
  const md=mdResult.text;
  error=mdResult.error||'';
  const questions=quizJson?parseQuizJson(quizJson):parseQuizMarkdown(quizMd);
  const cards=flashJson?parseFlashcardsJson(flashJson):parseFlashcardsMarkdown(flashMd);
  const clozes=clozeJson?parseClozesJson(clozeJson):parseClozesMarkdown(clozeMd);
  const content=md?mdToHtml(md):`<div class="scene"><p>${esc(error||'Este capitulo ainda nao tem arquivo em data/conteudos.')}</p></div>`;
  const terms=S.bookGlossary.filter(g=>Array.isArray(g.capitulos)&&g.capitulos.includes(id));
  const maxChapter=Math.max(...Object.keys(files.chapters).map(Number));
  app.innerHTML=`<div class="layout"><article class="reader"><div class="eyebrow">CAPITULO ${id}</div><h1>${esc(f?.title||c.title)}</h1>${f?.md?'':`<p class="muted">Aguardando arquivo do capitulo</p>`}<div class="chapter-tabs" role="tablist">${tabButton('leitura','📖 Leitura',true)}${tabButton('quiz','❔ Quiz')}${tabButton('cloze','🧩 Cloze')}${tabButton('flashcards','🃏 Flashcards')}${tabButton('timeline','🗓️ Timeline')}${tabButton('vocabulario','📘 Vocabulario')}${tabButton('objetivos','⭐ Objetivos')}</div><section class="tab-panel active" data-panel="leitura"><section class="markdown">${content}</section></section><section class="tab-panel" data-panel="quiz" hidden><h2>Perguntas interativas</h2>${quizHtml(id,questions,quizMd)}</section><section class="tab-panel" data-panel="cloze" hidden><h2>Cloze</h2>${clozeHtml(clozes,clozeMd)}</section><section class="tab-panel" data-panel="flashcards" hidden><h2>Flashcards</h2>${flashHtml(cards,flashMd)}</section><section class="tab-panel" data-panel="timeline" hidden><h2>Timeline</h2>${timelineHtml(timelineJson)}</section><section class="tab-panel" data-panel="vocabulario" hidden><h2>Vocabulario</h2>${vocabHtml(vocabJson,terms)}</section><section class="tab-panel" data-panel="objetivos" hidden><h2>Objetivos</h2>${objetivosHtml(objetivosJson)}</section><p><button class="btn primary" id="finish">Concluir capitulo</button> ${id<maxChapter?`<a class="btn secondary" href="#/capitulos/${id+1}">Proximo capitulo -></a>`:''}</p></article><aside class="panel"><h3>Neste capitulo</h3><p>Texto ${f?.md?'disponivel':'pendente'}</p><p>Quiz ${questions.length||0} perguntas</p><p>Flashcards ${cards.length||0} cartoes</p><p>Cloze ${clozes.length||0} exercicios</p><p>Timeline ${(timelineJson?.eventos||[]).length} eventos</p><p>Vocabulario ${(vocabJson?.termos||terms).length} termos</p><p>Objetivos ${(objetivosJson?.objetivos||[]).length} itens</p><p><a class="btn secondary" href="#/glossario/${id}">Glossario geral</a></p><p><a class="btn secondary" href="#/videos">Ver videos</a></p></aside></div>`;
  document.querySelectorAll('.chapter-tab').forEach(b=>b.onclick=()=>{document.querySelectorAll('.chapter-tab').forEach(x=>{const selected=x===b;x.classList.toggle('active',selected);x.setAttribute('aria-selected',selected?'true':'false')});document.querySelectorAll('.tab-panel').forEach(p=>{const show=p.dataset.panel===b.dataset.tab;p.hidden=!show;p.classList.toggle('active',show)});window.scrollTo({top:0,behavior:'smooth'})});
  document.querySelectorAll('.flash').forEach(b=>b.onclick=()=>b.classList.toggle('flipped'));
  document.querySelectorAll('.q').forEach(q=>q.onchange=e=>{if(!e.target.matches('input'))return;let ok=+e.target.value===+q.dataset.a,exp=q.dataset.exp;q.querySelector('.fb').textContent=(ok?'Resposta correta! ':'Ainda nao. ')+exp;save(id,Math.min(80,p(id)+8))});
  document.querySelectorAll('.cloze-check').forEach(b=>b.onclick=()=>{const box=b.closest('.cloze'),value=normalizeAnswer(box.querySelector('.cloze-input').value),answers=box.dataset.answers.split('|').map(normalizeAnswer),ok=answers.includes(value);box.querySelector('.fb').textContent=ok?'Resposta correta!':'Ainda nao. Resposta esperada: '+box.dataset.answers.split('|').join(', ');if(ok)save(id,Math.min(80,p(id)+8))});
  document.querySelector('#finish').onclick=()=>{save(id,100);alert('Capitulo concluido!');chapter(id)};
}

function videoCard(v,i){
  const poster=assetUrl(['videos',`video-${String(i+1).padStart(2,'0')}.jpg`]);
  return `<article class="nf-video-card"><div class="nf-video-media">${v.src?`<video controls preload="metadata" poster="${poster}" src="${esc(v.src)}"></video>`:`<img src="${poster}" alt="" loading="lazy"><span class="nf-video-soon">Em breve</span>`}</div><div class="nf-video-body"><span>${esc(v.range||'Video de apoio')}</span><h2>${esc(v.title||`Video ${i+1}`)}</h2>${v.description?`<p>${esc(v.description)}</p>`:''}</div></article>`;
}
function videos(){
  const items=S.videos.length?S.videos:fallbackVideos,hero=assetUrl(['chapters','banner-videos-d-o.png']);
  app.innerHTML=`<section class="nf-page video-page" style="--hero-img:url('${hero}')"><img class="nf-hero-img" src="${hero}" alt=""><div class="nf-hero video-hero"><div class="nf-copy"><span class="nf-kicker">A DROGA DA OBEDIENCIA</span><h1>Videos</h1><h2>Assista aos resumos por grupo de capitulos.</h2><p>Use os videos como apoio antes ou depois da leitura simplificada.</p><div class="nf-meta"><span>▷ ${items.length} videos</span><span>▣ Capitulos 1 a 30</span><span>★ Revisao guiada</span></div></div></div><div class="nf-toolbar"><div class="nf-filters"><button class="active" type="button">Todos os videos</button></div><span>Ordenar: Padrao</span></div><div class="video-grid">${items.map(videoCard).join('')}</div></section>`;
}
function characterCard(c){return `<article class="card"><span>${esc(c.papel||'personagem')}</span><h2>${esc(c.nome||c.name)}</h2><p>${esc(c.descricao||c.description)}</p>${c.grupo?`<p class="muted">${esc(c.grupo)}</p>`:''}${Array.isArray(c.caracteristicas)?`<p>${c.caracteristicas.slice(0,4).map(esc).join(' · ')}</p>`:''}${Array.isArray(c.capitulos)?`<small class="muted">Capitulos ${c.capitulos[0]} a ${c.capitulos.at(-1)}</small>`:''}</article>`}
function termCard(g){const cat=g.categoria||g.category;return `<article class="card">${cat?`<span>${esc(cat)}</span>`:''}<h2>${esc(g.termo||g.term)}</h2><p>${esc(g.definicao||g.definition)}</p>${g.exemplo?`<p class="muted">${esc(g.exemplo)}</p>`:''}${g.primeira_aparicao?`<small class="muted">Desde o capitulo ${g.primeira_aparicao}</small>`:''}</article>`}
function chars(){const items=S.bookCharacters.length?S.bookCharacters:S.data.characters.map(c=>({nome:c.name,descricao:c.description}));app.innerHTML=`<section class="page"><h1>Personagens</h1><p class="muted">Conheca os personagens do livro.</p><div class="grid">${items.map(characterCard).join('')}</div></section>`}
function glossary(chapterId){let chapter=Number(chapterId),items=S.bookGlossary.length?S.bookGlossary:S.data.glossary.map(g=>({termo:g.term,definicao:g.definition}));if(chapter)items=items.filter(g=>Array.isArray(g.capitulos)&&g.capitulos.includes(chapter));const links=allChapters().map(c=>`<a class="btn secondary" href="#/glossario/${c.id}">${c.id}</a>`).join(' ');app.innerHTML=`<section class="page"><h1>${chapter?`Glossario do capitulo ${chapter}`:'Glossario'}</h1><p class="muted">${chapter?'Termos liberados ate este capitulo.':'Escolha um capitulo ou veja todos os termos do livro.'}</p><p><a class="btn primary" href="#/glossario">Todos</a> ${links}</p><div class="grid">${items.length?items.map(termCard).join(''):'<article class="card"><p>Nenhum termo encontrado para este capitulo.</p></article>'}</div></section>`}
function progress(){app.innerHTML=`<section class="page"><h1>Meu progresso</h1><div class="panel"><div class="ring" style="--p:${overall()}%">${overall()}%</div><div class="grid">${allChapters().map(row).join('')}</div></div></section>`}
function notfound(){app.innerHTML='<div class="panel"><h1>Pagina nao encontrada</h1></div>'}
function route(){try{if(!S.data)return;side.classList.remove('open');ov.classList.remove('show');let [r,id]=(location.hash.replace('#/','')||'inicio').split('/');({inicio:home,livro:home,capitulos:()=>id?chapter(+id):list(),videos,personagens:chars,glossario:()=>glossary(id),progresso:progress}[r]||notfound)();window.scrollTo(0,0)}catch(e){app.innerHTML=`<section class="page"><div class="panel"><h1>Erro ao abrir a pagina</h1><p>${esc(e.message)}</p></div></section>`;console.error(e)}}

app.innerHTML='<section class="page"><div class="panel">Carregando educa-one...</div></section>';
fetch('./data/site.json?v='+APP_VERSION).then(r=>{if(!r.ok)throw new Error('Nao consegui carregar data/site.json');return r.json()}).then(d=>{
  S.data=d;route();
  return Promise.all([
    getOptionalText(['videos','videos-r2.md']),
    getOptionalText(['glossario','glossario.md']),
    Promise.all(characterFiles.map(id=>getOptionalText(['personagens',id+'.md'])))
  ]).then(([videosMd,glossaryMd,characterMds])=>{
    S.videos=parseVideos(videosMd);S.bookGlossary=parseGlossary(glossaryMd);S.bookCharacters=characterMds.filter(Boolean).map(parseCharacter);
    if(/^#\/(?:videos|personagens|glossario)/.test(location.hash))route();
  });
}).catch(e=>{app.innerHTML=`<section class="page"><div class="panel"><h1>Erro ao carregar dados</h1><p>${esc(e.message)}</p></div></section>`;console.error(e)});
addEventListener('hashchange',route);
document.querySelector('#menu').onclick=()=>{side.classList.add('open');ov.classList.add('show')};
ov.onclick=()=>{side.classList.remove('open');ov.classList.remove('show')};
document.querySelector('#theme').onclick=()=>{document.documentElement.classList.toggle('light');localStorage.setItem('theme',document.documentElement.classList.contains('light')?'light':'dark')};
if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light');
document.querySelector('#search').oninput=e=>{if(!S.data||e.target.value.length<2)return;let t=e.target.value.toLowerCase(),m=allChapters().filter(c=>(chapterTitle(c)+' '+chapterSubtitle(c)).toLowerCase().includes(t));app.innerHTML=`<section class="page"><h1>Resultados</h1><div class="grid">${m.map(row).join('')}</div></section>`};
const isStandalone=()=>matchMedia('(display-mode: standalone)').matches||navigator.standalone;
function updateInstallButton(){
  if(isStandalone()){installBtn.hidden=false;installBtn.disabled=true;installBtn.textContent='Instalado';return}
  installBtn.disabled=false;installBtn.textContent='Instalar';
}
updateInstallButton();
addEventListener('beforeinstallprompt',e=>{e.preventDefault();S.install=e;updateInstallButton();installBtn.hidden=false});
addEventListener('appinstalled',()=>{S.install=null;updateInstallButton()});
installBtn.onclick=()=>{if(!installBtn.disabled)S.install?.prompt()};
if('serviceWorker'in navigator)addEventListener('load',async()=>{for(const r of await navigator.serviceWorker.getRegistrations())await r.unregister();if('caches'in window)for(const k of await caches.keys())await caches.delete(k)});
