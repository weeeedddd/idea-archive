const LEVEL={E:'Easy',M:'Medium',H:'Hard'};
const T={
en:{
 cat:{All:'All',World:'World',Combat:'Combat',Character:'Character',Crafting:'Crafting',Community:'Community',Adventure:'Adventure',Dungeons:'Dungeons'},
 lvl:{Any:'Any',Easy:'Easy',Medium:'Medium',Hard:'Hard'},
 how:'How: ',count:(a,b)=>`Showing ${a} of ${b} ideas`,more:n=>`Explore all ${n} ideas`,less:'Show fewer ideas',
 title:'Idea Archive — 140 RPG server ideas',
 desc:'A searchable collection of 140 ideas for a Minecraft MMORPG on Purpur 26.1.1, each with an effort rating and a note on how to build it.',
 placeholder:'Try bosses, crafting, guilds…',
 ui:{skip:'Skip to the ideas',brandSub:'An evolving collection of concepts',h2:'140 ideas.<br>One shared world.',
  intro:'An evolving collection of ideas for a Minecraft MMORPG on a Purpur 26.1.1 server. Every idea is meant to be buildable with plugins and a server resource pack, with no client mods. They are concepts, not a promise that each will ship.',
  r1h:'Plugins only',r1p:'Quests, skills, parties, guilds, regions, menus, economy, custom items, instanced dungeons.',
  r2h:'Plus a resource pack',r2p:'Custom item models, weapons, capes, icons, sounds and music, menu art.',
  r3h:'Not realistic without client mods',r3p:'New player animations, shaders, a free camera, a fully custom HUD, physics beyond vanilla.',
  lvEasy:'Easy',lvMedium:'Medium',lvHard:'Hard',lead:'Effort, as a rough guide:',lE:'a small plugin feature or build work.',lM:'a feature that needs its own system.',lH:'a large system that needs design, scripting and testing.',
  search:'Search ideas',meta:'Explore the possibilities',reset:'Clear filters',empty:'No matching ideas. Try another search or clear your filters.',
  foot1:'An independent concept collection. Not affiliated with Minecraft, Mojang, Purpur or any other game or brand.',foot2:'Ideas only, not a live game server.'}},
de:{
 cat:{All:'Alle',World:'Welt',Combat:'Kampf',Character:'Charakter',Crafting:'Handwerk',Community:'Community',Adventure:'Abenteuer',Dungeons:'Dungeons'},
 lvl:{Any:'Alle',Easy:'Einfach',Medium:'Mittel',Hard:'Schwer'},
 how:'Umsetzung: ',count:(a,b)=>`${a} von ${b} Ideen`,more:n=>`Alle ${n} Ideen ansehen`,less:'Weniger Ideen anzeigen',
 title:'Ideenarchiv — 140 Ideen für einen RPG-Server',
 desc:'Eine durchsuchbare Sammlung von 140 Ideen für ein Minecraft-MMORPG auf Purpur 26.1.1, jeweils mit Aufwandsstufe und Hinweis zur Umsetzung.',
 placeholder:'Probiere Bosse, Handwerk, Gilden…',
 ui:{skip:'Zu den Ideen springen',brandSub:'Eine wachsende Sammlung von Konzepten',h2:'140 Ideen.<br>Eine gemeinsame Welt.',
  intro:'Eine wachsende Sammlung von Ideen für ein Minecraft-MMORPG auf einem Purpur-26.1.1-Server. Jede Idee soll sich mit Plugins und einem Server-Resource-Pack umsetzen lassen, ohne Client-Mods. Es sind Konzepte, kein Versprechen, dass alles erscheint.',
  r1h:'Nur Plugins',r1p:'Quests, Skills, Gruppen, Gilden, Regionen, Menüs, Wirtschaft, eigene Items, instanzierte Dungeons.',
  r2h:'Plus Resource Pack',r2p:'Eigene Item-Modelle, Waffen, Umhänge, Icons, Sounds und Musik, Menügrafiken.',
  r3h:'Ohne Client-Mods nicht realistisch',r3p:'Neue Spieleranimationen, Shader, freie Kamera, ein komplett eigenes HUD, Physik über Vanilla hinaus.',
  lvEasy:'Einfach',lvMedium:'Mittel',lvHard:'Schwer',lead:'Aufwand, grob geschätzt:',lE:'ein kleines Plugin-Feature oder reine Bauarbeit.',lM:'ein Feature, das ein eigenes System braucht.',lH:'ein großes System mit Konzept, Skripting und Tests.',
  search:'Ideen durchsuchen',meta:'Entdecke die Möglichkeiten',reset:'Filter zurücksetzen',empty:'Keine passenden Ideen. Versuche eine andere Suche oder setze die Filter zurück.',
  foot1:'Eine unabhängige Ideensammlung. Nicht verbunden mit Minecraft, Mojang, Purpur oder anderen Spielen oder Marken.',foot2:'Nur Ideen, kein laufender Spieleserver.'}}
};
let lang='en';try{lang=localStorage.getItem('lang')||((navigator.language||'').toLowerCase().startsWith('de')?'de':'en')}catch(e){}
if(!T[lang])lang='en';
const allIdeas=[];
for(const [category,items] of Object.entries(groups))for(const [title,desc,lvl,how] of items){
 const id=allIdeas.length+1,d=(typeof DE!=='undefined')&&DE[id-1];
 allIdeas.push({category,id,level:LEVEL[lvl],en:{title,desc,how},de:d?{title:d[0],desc:d[1],how:d[2]}:{title,desc,how}});
}
let category='All',level='Any',expanded=false;
const filters=document.querySelector('#filters'),levels=document.querySelector('#levels');
function chip(parent,name,onPick){const button=document.createElement('button');button.type='button';button.className='filter';button.dataset.k=name;button.addEventListener('click',()=>{onPick(name);expanded=false;renderIdeas()});parent.append(button)}
['All',...Object.keys(groups)].forEach(n=>chip(filters,n,v=>category=v));
['Any',...Object.values(LEVEL)].forEach(n=>chip(levels,n,v=>level=v));
function applyStatic(){
 const t=T[lang],f=s=>typeof s==='string'?s.replace(/140/g,allIdeas.length):s;
 document.documentElement.lang=lang;document.title=f(t.title);
 const md=document.querySelector('meta[name=description]');if(md)md.content=f(t.desc);
 document.querySelectorAll('[data-i18n]').forEach(el=>{const v=f(t.ui[el.dataset.i18n]);if(v===undefined)return;if(el.dataset.html)el.innerHTML=v;else el.textContent=v});
 document.querySelector('#search').placeholder=t.placeholder;
 [...filters.children].forEach(b=>b.textContent=t.cat[b.dataset.k]);
 [...levels.children].forEach(b=>b.textContent=t.lvl[b.dataset.k]);
 document.querySelectorAll('.lang button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
}
function renderIdeas(){
 const t=T[lang],query=document.querySelector('#search').value.trim().toLowerCase();
 const matches=allIdeas.filter(i=>{const x=i[lang];return (category==='All'||i.category===category)&&(level==='Any'||i.level===level)&&`${x.title} ${x.desc} ${x.how} ${t.cat[i.category]}`.toLowerCase().includes(query)});
 const visible=expanded?matches:matches.slice(0,12);
 const container=document.querySelector('#ideas');container.replaceChildren();
 visible.forEach(i=>{
  const x=i[lang],article=document.createElement('article');article.className='idea';
  const number=document.createElement('span');number.textContent=String(i.id).padStart(3,'0');
  const content=document.createElement('div'),label=document.createElement('small');label.textContent=t.cat[i.category];
  const badge=document.createElement('em');badge.className='lvl lvl-'+i.level.toLowerCase();badge.textContent=t.lvl[i.level];label.append(badge);
  const title=document.createElement('p');title.className='t';title.textContent=x.title;
  const desc=document.createElement('p');desc.className='d';desc.textContent=x.desc;
  const how=document.createElement('p');how.className='how';how.textContent=t.how+x.how;
  content.append(label,title,desc,how);article.append(number,content);container.append(article);
 });
 for(const [group,current] of [[filters,category],[levels,level]])[...group.children].forEach(b=>{const on=b.dataset.k===current;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on))});
 document.querySelector('#count').textContent=t.count(visible.length,matches.length);
 const more=document.querySelector('#more');more.hidden=matches.length<=12;more.textContent=expanded?t.less:t.more(matches.length);
 document.querySelector('#empty').hidden=matches.length>0;document.querySelector('#reset').hidden=matches.length>0;
}
document.querySelector('#more').addEventListener('click',()=>{expanded=!expanded;renderIdeas()});
document.querySelector('#search').addEventListener('input',()=>{expanded=false;renderIdeas()});
document.querySelector('#reset').addEventListener('click',()=>{category='All';level='Any';expanded=false;document.querySelector('#search').value='';renderIdeas();document.querySelector('#search').focus()});
document.querySelectorAll('.lang button').forEach(b=>b.addEventListener('click',()=>{lang=b.dataset.lang;try{localStorage.setItem('lang',lang)}catch(e){}applyStatic();renderIdeas()}));
applyStatic();renderIdeas();
