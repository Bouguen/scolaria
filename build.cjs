const fs=require('fs'),path=require('path');
const ROOT=__dirname,D=path.join(ROOT,'dist');
const original=JSON.parse(fs.readFileSync(path.join(ROOT,'content/source-originale.json'),'utf8'));
const {resources,date}=require('./content/catalogue.cjs');
require('./content/scolaria.cjs').enrich(resources);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icons={home:'M3 10 12 3l9 7v11h-6v-7H9v7H3Z',book:'M3 4h7l2 2 2-2h7v16h-7l-2 1-2-1H3ZM12 6v15',grid:'M3 3h7v7H3ZM14 3h7v7h-7ZM3 14h7v7H3ZM14 14h7v7h-7Z',prompt:'M4 5h16v12H9l-5 4ZM8 9l3 2-3 2m6 0h3',play:'M5 3h14v18H5Zm5 5 5 4-5 4Z',check:'M4 4h16v17H4ZM8 11l3 3 5-6',shield:'M12 2 21 6v6c0 5-9 10-9 10S3 17 3 12V6Zm-4 9 3 3 5-6',globe:'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM3 12h18M12 3c5 6 5 12 0 18-5-6-5-12 0-18',star:'M5 3h14v19l-7-5-7 5Z',search:'M18 18l4 4M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',compass:'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM16 8l-3 5-5 3 3-5Z',users:'M8 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM1 22v-5a7 7 0 0 1 14 0v5M17 3a4 4 0 0 1 0 8m1 3c4 0 5 3 5 6',bulb:'M8 18h8m-7 4h6M7 14a7 7 0 1 1 10 0l-1 2H8Z',clock:'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM12 6v6l4 3'};
const icon=n=>`<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="${icons[n]||icons.book}"/></svg>`;
const nav=[['Explorer','accueil','Accueil','home'],['','bibliotheque','Toutes les ressources','book'],['','outils','Annuaire des outils','grid'],['','prompts','Bibliothèque de prompts','prompt'],['','tutoriels','Tutoriels pas à pas','play'],['','scenarios','Scénarios pédagogiques','check'],['Apprendre & transmettre','parcours','Parcours guidés','compass'],['','comprendre','Comprendre l’IA','bulb'],['','eleves','L’IA avec les élèves','users'],['','evaluation','Repenser l’évaluation','check'],['','ethique','Cadre juridique & éthique','shield'],['Aller plus loin','sources','Sources & veille','globe'],['','glossaire','Glossaire & FAQ','book']];
const url=(p='')=>p==='accueil'?'/':'/'+p+'/';
function shell(title,active,body){return require("./brand.cjs").shell(title,active,body)}
function write(route,html){const dir=path.join(D,route);fs.mkdirSync(dir,{recursive:true});fs.writeFileSync(path.join(dir,'index.html'),html)}
function card(r){return `<article class="card"><div class="card-top"><span class="badge ${r.type||''}">${esc(r.type||'Outil')}</span><button class="bookmark" data-fav="${r.id||''}" aria-label="Ajouter aux favoris : ${esc(r.title)}" aria-pressed="false">${icon('star')}</button></div><h3><a href="/ressources/${r.id||'chatgpt'}/">${esc(r.title)}</a></h3><p>${esc(r.desc)}</p><div class="card-foot"><span>${esc(r.category||'Toutes disciplines')} · ${esc(r.difficulty||'Débutant')}</span><a class="arrow" href="/ressources/${r.id||'chatgpt'}/" aria-label="Lire ${esc(r.title)}">↗</a></div></article>`}
const search=`<form class="searchbox" action="/bibliotheque/">${icon('search')}<input name="q" aria-label="Rechercher dans le portail" placeholder="Un outil, un besoin, une idée de cours…"><button class="btn">Rechercher</button></form>`;
function home(){return require("./brand.cjs").home(resources,card,search)}
write('',shell('Accueil','accueil',home()));
require('./pages.cjs')({fs,path,D,ROOT,resources,original,date,esc,icon,shell,write,card,search});
fs.writeFileSync(path.join(D,'favicon.svg'),'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="#245d49"/><path d="M9 29V13h8l3 3 3-3h8v16h-8l-3 3-3-3ZM20 16v16" fill="none" stroke="#f1f3e8" stroke-width="2"/></svg>');
if(fs.existsSync(path.join(ROOT,'scolaria-pages.cjs')))require('./scolaria-pages.cjs')({fs,path,D,ROOT,resources,original,date,esc,icon,shell,write,card,search});
console.log('Portail SCOLAR·IA généré.');
