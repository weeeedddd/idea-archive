const LEVEL={E:'Easy',M:'Medium',H:'Hard'};
const T={
en:{
 cat:{All:'All',World:'World',Combat:'Combat',Character:'Character',Crafting:'Crafting',Community:'Community',Adventure:'Adventure',Dungeons:'Dungeons',Quests:'Quests',Classes:'Classes',Economy:'Economy',Housing:'Housing',Pets:'Pets & mounts',Events:'Events',PvP:'PvP',Interface:'Interface',Server:'Server',Mobility:'Mobility',Military:'Military',Factions:'Factions',Expeditions:'Expeditions'},
 lvl:{Any:'Any',Easy:'Easy',Medium:'Medium',Hard:'Hard'},
 how:'How: ',count:(a,b)=>`Showing ${a} of ${b} ideas`,resCount:a=>`${a} ideas with votes`,more:n=>`Explore all ${n} ideas`,less:'Show fewer ideas',
 title:'Idea Archive — 140 RPG server ideas',
 desc:'A searchable collection of 140 ideas for a Minecraft MMORPG on Purpur 26.1.1, each with an effort rating, a build note and a vote button.',
 placeholder:'Try bosses, crafting, guilds…',
 v:{yes:'Yes',maybe:'Maybe',no:'No',you:'You',viewIdeas:'Ideas',viewRes:'Results',
  helpIdeas:'Vote on every idea: Yes, Maybe or No. Your votes stay in this browser. Share your link so others can compare.',
  helpRes:'Ranked by score (yes minus no) across you and everyone whose votes you added.',
  vf:{All:'All',y:'I like',m:'Maybe',n:'I dislike',u:'Not voted yet'},rf:{All:'All voted',Y:'Everyone likes',S:'Opinions differ',N:'Nobody likes'},
  name:'Your name',namePh:'e.g. Alex',copy:'Copy my share link',copied:'Link copied. Send it to the others.',copyFail:'Copy this link:',
  add:'Add votes from a link',addPh:'Paste a shared link here',addBtn:'Add',addOk:n=>`Added votes from ${n}.`,addErr:'That link contains no votes.',
  sum:(a,b,y,m,n)=>`You voted on ${a} of ${b} ideas: ${y} yes, ${m} maybe, ${n} no.`,csv:'Download results (CSV)',
  banner:(n,c)=>`${n} shared ${c} votes with you.`,bannerAdd:'Add to results',bannerNo:'Dismiss',loaded:'Votes loaded from:',remove:n=>`Remove ${n}`,
  noRes:'No votes yet. Vote on a few ideas first.',score:'Score'},
 ui:{skip:'Skip to the ideas',brandSub:'An evolving collection of concepts',h2:'140 ideas.<br>One shared world.',
  intro:'An evolving collection of ideas for a Minecraft MMORPG on a Purpur 26.1.1 server. Every idea is meant to be buildable with plugins and a server resource pack, with no client mods. They are concepts, not a promise that each will ship.',
  r1h:'Plugins only',r1p:'Quests, skills, parties, guilds, regions, menus, economy, custom items, instanced dungeons.',
  r2h:'Plus a resource pack',r2p:'Custom item models, weapons, capes, icons, sounds and music, menu art.',
  r3h:'Not realistic without client mods',r3p:'New player animations, shaders, a free camera, a fully custom HUD, physics beyond vanilla.',
  lvEasy:'Easy',lvMedium:'Medium',lvHard:'Hard',lead:'Effort, as a rough guide:',lE:'a small plugin feature or build work.',lM:'a feature that needs its own system.',lH:'a large system that needs design, scripting and testing.',
  search:'Search ideas',meta:'Explore the possibilities',reset:'Clear filters',empty:'No matching ideas. Try another search or clear your filters.',
  foot1:'An independent concept collection. Not affiliated with Minecraft, Mojang, Purpur or any other game or brand.',foot2:'Ideas only, not a live game server.'}},
de:{
 cat:{All:'Alle',World:'Welt',Combat:'Kampf',Character:'Charakter',Crafting:'Handwerk',Community:'Community',Adventure:'Abenteuer',Dungeons:'Dungeons',Quests:'Quests',Classes:'Klassen',Economy:'Wirtschaft',Housing:'Wohnen',Pets:'Haustiere & Reittiere',Events:'Events',PvP:'PvP',Interface:'Interface',Server:'Server',Mobility:'Mobilität',Military:'Militär',Factions:'Fraktionen',Expeditions:'Expeditionen'},
 lvl:{Any:'Alle',Easy:'Einfach',Medium:'Mittel',Hard:'Schwer'},
 how:'Umsetzung: ',count:(a,b)=>`${a} von ${b} Ideen`,resCount:a=>`${a} Ideen mit Stimmen`,more:n=>`Alle ${n} Ideen ansehen`,less:'Weniger Ideen anzeigen',
 title:'Ideenarchiv — 140 Ideen für einen RPG-Server',
 desc:'Eine durchsuchbare Sammlung von 140 Ideen für ein Minecraft-MMORPG auf Purpur 26.1.1, jeweils mit Aufwandsstufe, Umsetzungshinweis und Abstimmung.',
 placeholder:'Probiere Bosse, Handwerk, Gilden…',
 v:{yes:'Ja',maybe:'Vielleicht',no:'Nein',you:'Du',viewIdeas:'Ideen',viewRes:'Ergebnisse',
  helpIdeas:'Stimme bei jeder Idee ab: Ja, Vielleicht oder Nein. Deine Stimmen bleiben in diesem Browser. Teile deinen Link, damit andere vergleichen können.',
  helpRes:'Sortiert nach Punktzahl (Ja minus Nein) über dich und alle, deren Stimmen du hinzugefügt hast.',
  vf:{All:'Alle',y:'Gefällt mir',m:'Vielleicht',n:'Gefällt mir nicht',u:'Noch nicht abgestimmt'},rf:{All:'Alle mit Stimmen',Y:'Allen gefällt es',S:'Meinungen gehen auseinander',N:'Niemandem gefällt es'},
  name:'Dein Name',namePh:'z. B. Alex',copy:'Meinen Teilen-Link kopieren',copied:'Link kopiert. Schick ihn den anderen.',copyFail:'Kopiere diesen Link:',
  add:'Stimmen aus einem Link hinzufügen',addPh:'Geteilten Link hier einfügen',addBtn:'Hinzufügen',addOk:n=>`Stimmen von ${n} hinzugefügt.`,addErr:'Dieser Link enthält keine Stimmen.',
  sum:(a,b,y,m,n)=>`Du hast bei ${a} von ${b} Ideen abgestimmt: ${y} Ja, ${m} Vielleicht, ${n} Nein.`,csv:'Ergebnisse herunterladen (CSV)',
  banner:(n,c)=>`${n} hat ${c} Stimmen mit dir geteilt.`,bannerAdd:'Zu den Ergebnissen hinzufügen',bannerNo:'Schließen',loaded:'Geladene Stimmen von:',remove:n=>`${n} entfernen`,
  noRes:'Noch keine Stimmen. Stimme zuerst bei ein paar Ideen ab.',score:'Punkte'},
 ui:{skip:'Zu den Ideen springen',brandSub:'Eine wachsende Sammlung von Konzepten',h2:'140 Ideen.<br>Eine gemeinsame Welt.',
  intro:'Eine wachsende Sammlung von Ideen für ein Minecraft-MMORPG auf einem Purpur-26.1.1-Server. Jede Idee soll sich mit Plugins und einem Server-Resource-Pack umsetzen lassen, ohne Client-Mods. Es sind Konzepte, kein Versprechen, dass alles erscheint.',
  r1h:'Nur Plugins',r1p:'Quests, Skills, Gruppen, Gilden, Regionen, Menüs, Wirtschaft, eigene Items, instanzierte Dungeons.',
  r2h:'Plus Resource Pack',r2p:'Eigene Item-Modelle, Waffen, Umhänge, Icons, Sounds und Musik, Menügrafiken.',
  r3h:'Ohne Client-Mods nicht realistisch',r3p:'Neue Spieleranimationen, Shader, freie Kamera, ein komplett eigenes HUD, Physik über Vanilla hinaus.',
  lvEasy:'Einfach',lvMedium:'Mittel',lvHard:'Schwer',lead:'Aufwand, grob geschätzt:',lE:'ein kleines Plugin-Feature oder reine Bauarbeit.',lM:'ein Feature, das ein eigenes System braucht.',lH:'ein großes System mit Konzept, Skripting und Tests.',
  search:'Ideen durchsuchen',meta:'Entdecke die Möglichkeiten',reset:'Filter zurücksetzen',empty:'Keine passenden Ideen. Versuche eine andere Suche oder setze die Filter zurück.',
  foot1:'Eine unabhängige Ideensammlung. Nicht verbunden mit Minecraft, Mojang, Purpur oder anderen Spielen oder Marken.',foot2:'Nur Ideen, kein laufender Spieleserver.'}}
};

/* ---------- state ---------- */
let lang='en';try{lang=localStorage.getItem('lang')||((navigator.language||'').toLowerCase().startsWith('de')?'de':'en')}catch(e){}
if(!T[lang])lang='en';
const store=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const load=(k,d)=>{try{const s=localStorage.getItem(k);return s?JSON.parse(s):d}catch(e){return d}};
let votes=load('votes',{}),others=load('others',{}),myname=load('myname','');
let category='All',level='Any',expanded=false,view='ideas',vf='All',rf='All';

/* ---------- ideas ---------- */
const hashKey=s=>{let h=5381;for(let i=0;i<s.length;i++)h=((h<<5)+h+s.charCodeAt(i))>>>0;return h.toString(36)};
const allIdeas=[],CATS=[];
function addIdea(cat,title,desc,lvl,how,d){
 if(!CATS.includes(cat))CATS.push(cat);
 allIdeas.push({category:cat,id:allIdeas.length+1,key:hashKey(title),level:LEVEL[lvl],en:{title,desc,how},de:d?{title:d[0],desc:d[1],how:d[2]}:{title,desc,how}});
}
for(const [cat,items] of Object.entries(groups))for(const [t,d,l,h] of items){const id=allIdeas.length;addIdea(cat,t,d,l,h,(typeof DE!=='undefined')&&DE[id])}
if(typeof MORE!=='undefined')for(const [cat,items] of Object.entries(MORE))items.forEach(([t,d,l,h],i)=>addIdea(cat,t,d,l,h,(typeof MORE_DE!=='undefined')&&MORE_DE[cat]&&MORE_DE[cat][i]));

if(typeof MORE2!=='undefined')for(const [cat,items] of Object.entries(MORE2))items.forEach(([t,d,l,h],i)=>addIdea(cat,t,d,l,h,(typeof MORE2_DE!=='undefined')&&MORE2_DE[cat]&&MORE2_DE[cat][i]));
if(window.LONG){const m=new Map(LONG.map(x=>[x[0],x]));allIdeas.forEach(i=>{const l=m.get(i.en.title);if(l){i.en.desc=l[1];i.de.desc=l[2]}})}

/* ---------- small helpers ---------- */
function el(tag,props={},...kids){const e=document.createElement(tag);for(const [k,v] of Object.entries(props)){if(k==='class')e.className=v;else if(k.startsWith('on'))e.addEventListener(k.slice(2),v);else e.setAttribute(k,v)}e.append(...kids);return e}
const $=s=>document.querySelector(s);
const E_ICON={y:'\u{1F44D}',m:'\u{1F914}',n:'\u{1F44E}'};
const vlabel=(t,c)=>c==='y'?t.v.yes:c==='m'?t.v.maybe:t.v.no;

/* ---------- filters (categories + effort) ---------- */
const filters=$('#filters'),levels=$('#levels');
function chip(parent,name,onPick){const b=el('button',{type:'button',class:'filter','data-k':name});b.addEventListener('click',()=>{onPick(name);expanded=false;renderIdeas()});parent.append(b)}
['All',...CATS].forEach(n=>chip(filters,n,v=>category=v));
['Any',...Object.values(LEVEL)].forEach(n=>chip(levels,n,v=>level=v));

/* ---------- vote panel ---------- */
const panel=$('#votes'),P={};
P.help=el('p',{class:'vhelp'});
P.vIdeas=el('button',{type:'button',class:'filter',onclick:()=>setView('ideas')});
P.vRes=el('button',{type:'button',class:'filter',onclick:()=>setView('results')});
P.chips=el('div',{class:'filters',role:'group'});
P.nameLabel=el('label',{class:'vlabel'});P.name=el('input',{type:'text',maxlength:'24',autocomplete:'nickname'});P.name.value=myname;
P.name.addEventListener('input',()=>{myname=P.name.value.trim();store('myname',myname)});
P.nameLabel.append(el('span',{}),P.name);
P.copy=el('button',{type:'button',class:'secondary',onclick:copyLink});
P.addLabel=el('label',{class:'vlabel'});P.addIn=el('input',{type:'text',autocomplete:'off'});P.addBtn=el('button',{type:'button',class:'secondary',onclick:()=>addFromText(P.addIn.value)});
P.addLabel.append(el('span',{}),P.addIn);
P.status=el('p',{class:'vstatus','aria-live':'polite'});
P.others=el('div',{class:'vothers'});
P.sum=el('p',{class:'vsum'});
P.csv=el('button',{type:'button',class:'secondary',onclick:downloadCsv});
P.banner=el('div',{class:'vbanner',hidden:''});
panel.append(P.banner,P.help,el('div',{class:'vrow'},P.vIdeas,P.vRes),P.chips,el('div',{class:'vrow vtools'},P.nameLabel,P.copy,P.addLabel,P.addBtn,P.csv),P.status,P.others,P.sum);

function setView(v){view=v;expanded=false;renderChips();renderIdeas()}
function renderChips(){
 const t=T[lang],keys=view==='ideas'?['All','y','m','n','u']:['All','Y','S','N'];
 P.chips.replaceChildren();
 P.chips.setAttribute('aria-label',view==='ideas'?t.v.helpIdeas.split(':')[0]:t.v.viewRes);
 keys.forEach(k=>{const b=el('button',{type:'button',class:'filter','data-k':k});b.textContent=(view==='ideas'?t.v.vf:t.v.rf)[k];const cur=view==='ideas'?vf:rf;b.classList.toggle('active',cur===k);b.setAttribute('aria-pressed',String(cur===k));b.addEventListener('click',()=>{if(view==='ideas')vf=k;else rf=k;expanded=false;renderChips();renderIdeas()});P.chips.append(b)});
}
function updatePanelText(){
 const t=T[lang].v;
 P.help.textContent=view==='ideas'?t.helpIdeas:t.helpRes;
 P.vIdeas.textContent=t.viewIdeas;P.vRes.textContent=t.viewRes;
 [[P.vIdeas,'ideas'],[P.vRes,'results']].forEach(([b,v])=>{b.classList.toggle('active',view===v);b.setAttribute('aria-pressed',String(view===v))});
 P.nameLabel.firstChild.textContent=t.name;P.name.placeholder=t.namePh;
 P.copy.textContent=t.copy;P.addLabel.firstChild.textContent=t.add;P.addIn.placeholder=t.addPh;P.addBtn.textContent=t.addBtn;
 P.csv.textContent=t.csv;P.csv.hidden=view!=='results';
 renderOthers();updateSummary();
}
function renderOthers(){
 const t=T[lang].v,names=Object.keys(others);P.others.replaceChildren();
 if(!names.length)return;
 P.others.append(el('span',{class:'vlab'},t.loaded));
 names.forEach(n=>{const b=el('button',{type:'button',class:'vremove','aria-label':t.remove(n),onclick:()=>{delete others[n];store('others',others);renderOthers();renderIdeas()}});b.textContent=`${n} (${Object.keys(others[n]).length}) ✕`;P.others.append(b)});
}
function updateSummary(){
 const t=T[lang].v,c={y:0,m:0,n:0};for(const i of allIdeas){const v=votes[i.key];if(v)c[v]++}
 P.sum.textContent=t.sum(c.y+c.m+c.n,allIdeas.length,c.y,c.m,c.n);
}
function say(msg){P.status.textContent=msg}

/* ---------- sharing ---------- */
function encodeVotes(v){return Object.entries(v).map(([k,c])=>k+c).join('.')}
function parseVotes(data){const o={};(data||'').split('.').forEach(tok=>{if(tok.length<2)return;const c=tok.slice(-1);if('ymn'.includes(c))o[tok.slice(0,-1)]=c});return o}
function shareLink(){return location.origin+location.pathname+'#v='+encodeURIComponent(myname||'Friend')+'~'+encodeVotes(votes)}
function copyLink(){
 const t=T[lang].v,link=shareLink();
 if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(link).then(()=>say(t.copied),()=>{say(t.copyFail+' '+link)});
 else say(t.copyFail+' '+link);
}
function parseShared(text){
 const s=String(text||'').trim(),i=s.indexOf('#v='),body=i>=0?s.slice(i+3):s.startsWith('v=')?s.slice(2):s;
 const j=body.indexOf('~');if(j<0)return null;
 let name;try{name=decodeURIComponent(body.slice(0,j))}catch(e){name=body.slice(0,j)}
 const v=parseVotes(body.slice(j+1));if(!Object.keys(v).length)return null;
 return {name:(name||'Friend').slice(0,24),v};
}
function addFromText(text){
 const t=T[lang].v,r=parseShared(text);
 if(!r){say(t.addErr);return}
 others[r.name]=r.v;store('others',others);P.addIn.value='';say(t.addOk(r.name));renderOthers();renderIdeas();
}
function showBanner(){
 const r=parseShared(location.hash);if(!r)return;
 const t=T[lang].v;P.banner.hidden=false;P.banner.replaceChildren(
  el('span',{},t.banner(r.name,Object.keys(r.v).length)),
  el('button',{type:'button',class:'secondary',onclick:()=>{others[r.name]=r.v;store('others',others);history.replaceState(null,'',location.pathname);P.banner.hidden=true;view='results';renderChips();updatePanelText();renderIdeas();say(T[lang].v.addOk(r.name))}},t.bannerAdd),
  el('button',{type:'button',class:'secondary',onclick:()=>{history.replaceState(null,'',location.pathname);P.banner.hidden=true}},t.bannerNo));
}
function csvEsc(s){return '"'+String(s).replace(/"/g,'""')+'"'}
function downloadCsv(){
 const names=Object.keys(others),t=T[lang],head=['#',t.cat.All==='All'?'Category':'Kategorie',t.cat.All==='All'?'Idea':'Idee',t.cat.All==='All'?'Effort':'Aufwand',t.v.you,...names,t.v.score];
 const rows=[head];
 for(const i of rankedVoted()){const x=i[lang];rows.push([i.id,t.cat[i.category],x.title,t.lvl[i.level],...[votes[i.key],...names.map(n=>others[n][i.key])].map(c=>c?vlabel(t,c):''),i.score])}
 const csv='﻿'+rows.map(r=>r.map(csvEsc).join(';')).join('\r\n');
 const a=el('a',{href:URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'})),download:'idea-votes.csv'});document.body.append(a);a.click();a.remove();
}

/* ---------- results ---------- */
function voterList(i){return [['you',votes[i.key]],...Object.entries(others).map(([n,v])=>[n,v[i.key]])].filter(x=>x[1])}
function rankedVoted(){
 return allIdeas.map(i=>{const l=voterList(i),y=l.filter(x=>x[1]==='y').length,n=l.filter(x=>x[1]==='n').length;return Object.assign({},i,{voters:l,ys:y,ns:n,score:y-n})}).filter(i=>i.voters.length)
  .sort((a,b)=>b.score-a.score||b.ys-a.ys||a.id-b.id);
}

/* ---------- static text ---------- */
function applyStatic(){
 const t=T[lang],f=s=>typeof s==='string'?s.replace(/140/g,allIdeas.length):s;
 document.documentElement.lang=lang;document.title=f(t.title);
 const md=document.querySelector('meta[name=description]');if(md)md.content=f(t.desc);
 document.querySelectorAll('[data-i18n]').forEach(e=>{const v=f(t.ui[e.dataset.i18n]);if(v===undefined)return;if(e.dataset.html)e.innerHTML=v;else e.textContent=v});
 $('#search').placeholder=t.placeholder;
 [...filters.children].forEach(b=>b.textContent=t.cat[b.dataset.k]);
 [...levels.children].forEach(b=>b.textContent=t.lvl[b.dataset.k]);
 document.querySelectorAll('.lang button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
 renderChips();updatePanelText();
}

/* ---------- cards ---------- */
function voteButtons(i,t){
 const wrap=el('div',{class:'vote',role:'group','aria-label':t.v.yes+' / '+t.v.maybe+' / '+t.v.no});
 ['y','m','n'].forEach(c=>{
  const b=el('button',{type:'button',class:'vbtn v-'+c,'aria-pressed':String(votes[i.key]===c)});
  b.append(el('span',{'aria-hidden':'true'},E_ICON[c]),' '+vlabel(t,c));
  b.addEventListener('click',()=>{
   if(votes[i.key]===c)delete votes[i.key];else votes[i.key]=c;store('votes',votes);
   wrap.querySelectorAll('.vbtn').forEach(x=>x.setAttribute('aria-pressed',String(votes[i.key]===x.className.split('v-')[1].charAt(0))));
   updateSummary();
  });
  wrap.append(b);
 });
 return wrap;
}
function baseCard(i,t,content){
 const x=i[lang],article=el('article',{class:'idea'});
 const label=el('small',{},t.cat[i.category],el('em',{class:'lvl lvl-'+i.level.toLowerCase()},t.lvl[i.level]));
 content.prepend(label,el('p',{class:'t'},x.title),el('p',{class:'d'},x.desc),el('p',{class:'how'},t.how+x.how));
 article.append(el('span',{},String(i.id).padStart(3,'0')),content);return article;
}

/* ---------- render ---------- */
function renderIdeas(){
 const t=T[lang],query=$('#search').value.trim().toLowerCase();
 const text=i=>{const x=i[lang];return `${x.title} ${x.desc} ${x.how} ${t.cat[i.category]}`.toLowerCase()};
 const container=$('#ideas');container.replaceChildren();
 let matches;
 if(view==='ideas'){
  matches=allIdeas.filter(i=>(category==='All'||i.category===category)&&(level==='Any'||i.level===level)&&text(i).includes(query)&&(vf==='All'||(vf==='u'?!votes[i.key]:votes[i.key]===vf)));
 }else{
  matches=rankedVoted().filter(i=>(category==='All'||i.category===category)&&(level==='Any'||i.level===level)&&text(i).includes(query)&&(rf==='All'||(rf==='Y'&&i.ys===i.voters.length)||(rf==='N'&&i.ns===i.voters.length)||(rf==='S'&&i.ys>0&&i.ns>0)));
 }
 const visible=expanded?matches:matches.slice(0,12);
 visible.forEach(i=>{
  if(view==='ideas'){container.append(baseCard(i,t,el('div',{},voteButtons(i,t))))}
  else{
   const voters=el('div',{class:'voters'});i.voters.forEach(([n,c])=>voters.append(el('span',{class:'voter v-'+c},(n==='you'?t.v.you:n)+' ',el('span',{'aria-hidden':'true'},E_ICON[c]),el('span',{class:'sr'},' '+vlabel(t,c)))));
   const card=baseCard(i,t,el('div',{},voters));
   card.classList.add('result');card.prepend(el('span',{class:'score '+(i.score>0?'pos':i.score<0?'neg':'zero'),'aria-label':t.v.score+' '+i.score},(i.score>0?'+':'')+i.score));
   container.append(card);
  }
 });
 for(const [group,current] of [[filters,category],[levels,level]])[...group.children].forEach(b=>{const on=b.dataset.k===current;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on))});
 $('#count').textContent=view==='results'&&!matches.length?t.v.noRes:(view==='results'?t.resCount(matches.length)+' · ':'')+t.count(visible.length,matches.length);
 const more=$('#more');more.hidden=matches.length<=12;more.textContent=expanded?t.less:t.more(matches.length);
 $('#empty').hidden=matches.length>0;$('#reset').hidden=matches.length>0;
 if(view==='results')P.help.textContent=t.v.helpRes;else P.help.textContent=t.v.helpIdeas;
 P.vIdeas.setAttribute('aria-pressed',String(view==='ideas'));P.vRes.setAttribute('aria-pressed',String(view==='results'));
 P.vIdeas.classList.toggle('active',view==='ideas');P.vRes.classList.toggle('active',view==='results');P.csv.hidden=view!=='results';
}
$('#more').addEventListener('click',()=>{expanded=!expanded;renderIdeas()});
$('#search').addEventListener('input',()=>{expanded=false;renderIdeas()});
$('#reset').addEventListener('click',()=>{category='All';level='Any';vf='All';rf='All';expanded=false;$('#search').value='';renderChips();renderIdeas();$('#search').focus()});
document.querySelectorAll('.lang button').forEach(b=>b.addEventListener('click',()=>{lang=b.dataset.lang;try{localStorage.setItem('lang',lang)}catch(e){}applyStatic();renderIdeas();showBanner()}));
addEventListener('hashchange',showBanner);
applyStatic();renderIdeas();showBanner();
