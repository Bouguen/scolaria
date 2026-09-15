(function(root){
'use strict';
const norm=s=>String(s??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[’']/g,' ');
const stop=new Set('un une des du de d le la les l en au aux a avec pour et ou je mon ma mes me souhaite souhaites souhaitez veux veut vous comment utiliser ia'.split(' '));
const families=[['creer','creation','generer','produire','concevoir'],['quiz','qcm','questionnaire','question'],['cours','sequence','seance','lecon','preparation'],['corriger','correction','feedback','retour','revision'],['dissertation','argumentation','argument','philosophie'],['illustration','image','visuel','dessin','schema'],['ameliorer','amelioration','reviser','revision'],['activite','atelier','scenario','exercice'],['svt','biologie','vivant'],['mathematiques','maths','mathematique','proportionnalite'],['verifier','verification','preuve','fiabilite'],['donnees','confidentialite','cndp','protection'],['evaluer','evaluation','bareme','grille'],['gratuit','gratuite','freemium']];
const arabic={'إنشاء':'creer','انشاء':'creer','توليد':'generer','اختبار':'quiz','الاختبار':'quiz','درس':'cours','الدروس':'cours','تصحيح':'corriger','مقال':'dissertation','صورة':'image','نشاط':'activite','رياضيات':'mathematiques','الرياضيات':'mathematiques','علوم':'svt','تحسين':'ameliorer','حماية':'protection','بيانات':'donnees','البيانات':'donnees','تقييم':'evaluation','مصادر':'sources','مجاني':'gratuit'};
const arabicStop=new Set(['في','من','عن','مع','كيف','أريد','اريد','أن','ان','الذكاء','الاصطناعي']);
function terms(q){return norm(q).replace(/[\u064b-\u065f\u0670]/g,'').split(/[^a-z0-9\u0600-\u06ff]+/).filter(w=>w&&!stop.has(w)&&!arabicStop.has(w)).map(w=>arabic[w]||w);}
function variants(w){return families.find(f=>f.includes(w))||[w];}
function score(r,q){const ts=terms(q);if(!ts.length)return 1;const title=norm(r.title),hay=norm([r.title,r.desc,r.description,r.category,r.discipline,r.objective,r.example,r.text,r.toolKind,...(r.tags||[]),...(r.skills||[])].join(' '));let score=0;for(const w of ts){const vs=variants(w);if(!vs.some(v=>hay.includes(v)))return 0;score+=vs.some(v=>title.includes(v))?5:1;}return score;}
const api={norm,terms,score,matches:(r,q)=>score(r,q)>0};if(typeof module==='object'&&module.exports)module.exports=api;else root.ScolariaSearch=api;
})(typeof globalThis!=='undefined'?globalThis:this);
