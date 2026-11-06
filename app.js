/* TITAN X 3 ULTRA iPhone — GitHub Pages PWA, local-only, no external API or keys. */
'use strict';
const START='2026-11-04', END='2027-07-31', STORAGE='titanx-v2';
const DAY_NAMES=['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
const WEEK_SHORT=['L','M','M','J','V','S','D'];
const SVG={
 home:'<path d="m3 10 9-7 9 7v10H3z"/><path d="M9 20v-7h6v7"/>',
 sword:'<path d="m14 5 5-2 2 2-2 5-9 9-5-5 9-9ZM5 14l-2 2 5 5 2-2M15 4l5 5"/>',
 calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/>',
 chart:'<path d="M3 3v18h18M6 17l5-5 4 3 5-8"/>',
 settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a2 2 0 0 0 .4 2.2l-1.9 1.9a2 2 0 0 0-2.2-.4 2 2 0 0 0-1.5 1.8h-2.8a2 2 0 0 0-1.5-1.8 2 2 0 0 0-2.2.4l-1.9-1.9A2 2 0 0 0 6.2 15a2 2 0 0 0-1.8-1.5v-2.8A2 2 0 0 0 6.2 9a2 2 0 0 0-.4-2.2L7.7 5a2 2 0 0 0 2.2.4A2 2 0 0 0 11.4 3h2.8a2 2 0 0 0 1.5 2.4 2 2 0 0 0 2.2-.4l1.9 1.9A2 2 0 0 0 19.4 9a2 2 0 0 0 1.8 1.7v2.8A2 2 0 0 0 19.4 15z"/>',
 arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
 bolt:'<path d="m13 2-9 12h7l-1 8 10-12h-7l0-8Z"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
 heart:'<path d="M20.5 8.4c0 5-8.5 10.5-8.5 10.5S3.5 13.4 3.5 8.4a4.6 4.6 0 0 1 8.5-2.2 4.6 4.6 0 0 1 8.5 2.2Z"/>',
 check:'<path d="m5 12 4 4L19 6"/>',
 trophy:'<path d="M7 4h10v7a5 5 0 0 1-10 0V4ZM7 6H4v3a4 4 0 0 0 4 4m9-7h3v3a4 4 0 0 1-4 4M12 16v4m-4 0h8"/>',
 bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"/>',
 dumbbell:'<path d="m7 6 11 11M5 4 3 6l4 4 2-2M15 16l2-2 4 4-2 2M2 7l5-5M17 22l5-5"/>',
 steps:'<path d="m5 5 3-2 3 4-2 4-4 2-2-3ZM14 14l4-3 4 4-2 5-5 1-2-3Z"/>',
 moon:'<path d="M20 15.3A8 8 0 0 1 8.7 4a8.5 8.5 0 1 0 11.3 11.3Z"/>',
 shield:'<path d="M12 2 3 6v7c0 5 5 8 9 9 4-1 9-4 9-9V6z"/>',
 fire:'<path d="M12 22c-5 0-8-4-8-8 0-4 4-9 6-11 0 4 3 5 3 9 1-1 2-3 2-5 5 4 5 8 5 10 0 3-3 5-8 5Z"/>',
 copy:'<path d="M8 8h12v13H8zM16 8V3H4v13h4"/>'
};
const icon=(name,cl='')=>`<svg class="${cl}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${SVG[name]||SVG.shield}</svg>`;
const ex=(name,amount,how,sets=3,kind='dumbbell')=>({name,amount,how,sets,kind});
const PLANS={
 1:{name:'Poitrine, bras et abdos',type:'force',time:'50–60 min',energy:'Force',warm:'8 minutes de marche sur place et de mouvements doux des bras.',items:[
 ex('Pompes normales','15 à 20 par série','Mains au sol, corps droit. Descends doucement, puis pousse pour remonter. Arrête avant de perdre ta bonne position.',4),
 ex('Pompes mains rapprochées','8 à 12 par série','Place les mains un peu plus près. Garde les coudes sous contrôle et ne force pas les poignets.',3),
 ex('Pousser les haltères allongé','10 par série','Allonge-toi sur le dos, coudes près du sol. Pousse les haltères vers le plafond, puis redescends lentement.',3),
 ex('Abdos, épaules légèrement levées','12 à 15 par série','Allonge-toi, genoux pliés. Soulève un peu les épaules sans tirer sur ta nuque.',3,'shield'),
 ex('Tenir la planche','30 à 40 secondes','Reste en appui sur les avant-bras et les pieds. Garde le dos droit et respire.',3,'shield')]},
 2:{name:'Boxe sans contact et endurance',type:'technique',time:'45–60 min',energy:'Cardio',warm:'10 minutes de marche rapide et de mouvements des bras.',items:[
 ex('Boxe dans le vide','2 minutes par série','Fais des gestes contrôlés dans le vide, avec une garde stable. Aucun contact avec quelqu’un ni avec un objet.',5,'steps'),
 ex('Avancer, reculer, aller sur les côtés','1 minute par série','Reste équilibré et déplace-toi sans croiser les pieds trop vite.',4,'steps'),
 ex('Corde à sauter ou petits sauts','1 minute par série','Saute doucement et pose les pieds sans taper fort sur le sol.',4,'clock'),
 ex('Marche rapide','5 minutes par série','Garde un rythme où tu peux encore parler.',2,'heart')]},
 3:{name:'Dos et biceps',type:'force',time:'50–60 min',energy:'Force',warm:'8 minutes de marche puis mouvements des épaules sans poids.',items:[
 ex('Tirer les haltères vers les hanches','10 par série','Penche légèrement le haut du corps, dos droit, puis tire les poids vers tes hanches.',4),
 ex('Monter les haltères vers les épaules','8 à 12 par série','Plie les coudes sans balancer le dos. Utilise des poids plus légers si nécessaire.',4),
 ex('Monter les haltères, mains face à face','10 par série','Garde les paumes face à face. Monte et descends lentement les poids.',3),
 ex('Bras et jambe opposés','8 par côté','À quatre pattes, tends un bras et la jambe opposée, puis change de côté.',3,'shield'),
 ex('Planche sur le côté','25 à 30 secondes de chaque côté','Appuie-toi sur un avant-bras et garde ton corps bien aligné.',2,'shield')]},
 4:{name:'Récupération active',type:'repos',time:'20–30 min tranquille',energy:'Récupération',warm:'Journée légère, sans défi de pompes.',items:[
 ex('Marche tranquille','15 à 20 minutes','Marche à ton rythme. Si tu es fatigué, raccourcis.',1,'steps'),
 ex('Bouger doucement les articulations','5 à 10 minutes','Fais de petits mouvements confortables des épaules, hanches et chevilles.',1,'heart')]},
 5:{name:'Jambes, épaules et abdos',type:'force',time:'50–60 min',energy:'Force',warm:'8 minutes de marche, petites flexions de jambes sans poids.',items:[
 ex('S’accroupir puis se relever','10 à 12 par série','Écarte les pieds de façon confortable, descends à ton niveau puis remonte.',4),
 ex('Grand pas en arrière','8 à 10 par jambe','Recule une jambe, plie doucement les deux genoux, puis reviens debout.',3),
 ex('Lever le bassin allongé','12 à 15 par série','Sur le dos, genoux pliés, pieds au sol. Monte le bassin et redescends lentement.',3,'shield'),
 ex('Pousser les haltères au-dessus de la tête','8 à 10 par série','Utilise des poids légers. Pousse doucement sans creuser le bas du dos.',3),
 ex('Abdos au sol','12 à 15 par série','Genoux pliés, soulève un peu les épaules sans tirer sur ta tête.',3,'shield')]},
 6:{name:'Coordination et technique de combat',type:'technique',time:'40–55 min',energy:'Coordination',warm:'8 minutes de marche et de mouvements faciles.',items:[
 ex('Boxe dans le vide','2 minutes par série','Travaille ton équilibre et la précision de tes mouvements, sans contact.',5,'steps'),
 ex('Déplacements entre deux repères','1 minute par série','Va d’un repère à l’autre en restant stable, sans sprint maximal.',4,'steps'),
 ex('Tenir sur une jambe','30 secondes par côté','Reste équilibré, puis change de jambe. Garde une chaise proche si besoin.',3,'heart'),
 ex('Marcher pour récupérer','3 minutes','Ralentis progressivement et relâche les épaules.',2,'clock')]},
 0:{name:'Repos et récupération',type:'repos',time:'Repos libre',energy:'Récupération',warm:'Aucune séance de musculation aujourd’hui.',items:[
 ex('Récupération','Repos','Mange suffisamment, hydrate-toi, dors et adapte la marche à ta fatigue. Pas de défi de 200 pompes.',1,'moon')]}
};
const FIRST={name:'Départ TITAN X : haut du corps',type:'force',time:'50–60 min',energy:'Force',warm:'8 à 10 minutes pour échauffer les bras, les jambes et les épaules.',items:[
 ex('Pompes normales','12 à 15 par série','Corps droit. Descends doucement puis pousse pour remonter.',4),
 ex('Monter les haltères vers les épaules','8 à 10 par série','Plie les coudes. Choisis des poids faciles à contrôler sans balancer le dos.',3),
 ex('Pousser les haltères allongé','10 par série','Allongé au sol, pousse les haltères vers le plafond puis redescends lentement.',3),
 ex('Tirer les haltères vers les hanches','10 par série','Penche le buste, dos droit, puis tire les poids vers toi.',3),
 ex('Abdos au sol','12 à 15 par série','Genoux pliés, soulève légèrement les épaules.',3,'shield'),
 ex('Planche','30 secondes','Reste droit sur les avant-bras et les pieds.',3,'shield')]};
const todayDate=()=>new Date();
const dateKey=(d)=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const parseDate=(s)=>{const [y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d,12)};
const addDays=(k,n)=>{const d=parseDate(k);d.setDate(d.getDate()+n);return dateKey(d)};
const getPlan=(k)=>k===START?FIRST:PLANS[parseDate(k).getDay()];
const inRange=(k)=>k>=START&&k<=END;
const isFuture=(k)=>k>dateKey(todayDate());
const esc=(x)=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let state;
try{state=JSON.parse(localStorage.getItem(STORAGE))||{}}catch{state={}};
state.completed=state.completed&&typeof state.completed==='object'?state.completed:{};
state.checks=state.checks&&typeof state.checks==='object'?state.checks:{};
state.records=state.records&&typeof state.records==='object'?state.records:{};
state.reminder=Object.assign({time:'18:30',enabled:false},state.reminder||{});
state.device=Object.assign({},state.device||{});
let view=new URL(location.href).searchParams.get('view')==='missions'?'missions':'home';
let selected=inRange(dateKey(todayDate()))?dateKey(todayDate()):(dateKey(todayDate())<START?START:END);
let calendarMonth=selected.slice(0,7);
let timer={duration:90,remaining:90,deadline:null,running:false};
const store=()=>{try{localStorage.setItem(STORAGE,JSON.stringify(state))}catch{toast('Impossible de sauvegarder sur cet appareil.')}};
const completedKeys=()=>Object.keys(state.completed).filter(k=>inRange(k)&&state.completed[k]?.done);
const isDone=(k)=>Boolean(state.completed[k]?.done);
function xpTotal(){return completedKeys().reduce((acc,k)=>acc+(Number(state.completed[k].xp)||0),0)}
function levelStats(){const xp=xpTotal(),level=Math.floor(xp/250)+1,progress=xp%250,rank=level>=70?'S':level>=50?'A':level>=35?'B':level>=20?'C':level>=10?'D':'E';return{xp,level,progress,rank}}
function streak(){let count=0,k=dateKey(todayDate());if(!inRange(k))k=END;for(let i=0;i<290&&k>=START;i++,k=addDays(k,-1)){const plan=getPlan(k);if(plan.type==='repos')continue;if(isDone(k))count++;else if(k===dateKey(todayDate()))continue;else break}return count}
function longestStreak(){let num=0,best=0;for(let k=START;k<=dateKey(todayDate())&&k<=END;k=addDays(k,1)){const p=getPlan(k);if(p.type==='repos')continue;if(isDone(k)){num++;best=Math.max(best,num)}else num=0}return best}
function trainingCount(){return completedKeys().filter(k=>getPlan(k).type!=='repos').length}
function countSets(k){const p=getPlan(k),checks=state.checks[k]||{};const all=p.items.reduce((n,e)=>n+e.sets,0);let marked=0;for(let i=0;i<p.items.length;i++)for(let s=0;s<p.items[i].sets;s++)if(checks[`${i}:${s}`])marked++;return{marked,all}}
function currentWeek(){const base=parseDate(dateKey(todayDate()));const offset=(base.getDay()+6)%7;base.setDate(base.getDate()-offset);return Array.from({length:7},(_,i)=>{const x=new Date(base);x.setDate(x.getDate()+i);return dateKey(x)})}
function weekProgress(){const keys=currentWeek().filter(k=>inRange(k)&&getPlan(k).type!=='repos');return{done:keys.filter(isDone).length,total:keys.length}}
function formatDate(k,opt={day:'numeric',month:'long'}){return parseDate(k).toLocaleDateString('fr-FR',opt)}
function greet(){const h=new Date().getHours();return h<12?'BONJOUR':h<18?'BON APRÈS-MIDI':'BONSOIR'}
function toast(message){const host=document.getElementById('toast');const el=document.createElement('div');el.className='toast';el.textContent=message;host.append(el);setTimeout(()=>el.remove(),3600)}
function topSection(title,kicker,subtitle=''){return `<div class="eyebrow">${kicker}</div><h1 style="margin:7px 0 5px">${title}</h1>${subtitle?`<p class="muted small" style="margin:4px 0 15px">${subtitle}</p>`:''}`}
function renderHome(){const ls=levelStats(),cur=dateKey(todayDate()),p=getPlan(inRange(cur)?cur:START),wp=weekProgress();let percent=(ls.progress/250*100).toFixed(0);return `
 <div class="hero"><div class="hero-head"><span class="eyebrow">${greet()} · CHASSEUR</span><span class="rank-plate">RANG ${ls.rank}</span></div>
 <div class="hero-content"><div><div class="hero-title">MODE <em>ULTRA</em></div><p class="hero-sub">Développe force, endurance et coordination. Repose-toi pour progresser jusqu’en juillet 2027.</p></div><div class="rank-orb"><strong>${ls.rank}</strong></div></div>
 <div class="level-row"><strong>NIVEAU ${ls.level}</strong><span class="muted">${ls.progress} / 250 XP</span></div><div class="progress-track"><div class="progress-fill" style="width:${percent}%"></div></div></div>
 <div class="metrics"><div class="metric"><strong class="ac">${trainingCount()}</strong><small>SÉANCES</small></div><div class="metric"><strong class="gold">${streak()}</strong><small>SÉRIE ACTIVE</small></div><div class="metric"><strong>${ls.xp}</strong><small>XP TOTAL</small></div></div>
 <div class="section-heading"><h2>MISSION DU JOUR</h2><span class="pill">${formatDate(cur,{weekday:'short',day:'numeric',month:'short'}).toUpperCase()}</span></div>
 <div class="quest-card"><div class="quest-top"><div class="quest-label"><span>QUÊTE PRINCIPALE</span><span class="pill ${p.type==='repos'?'rest':''}">${p.energy.toUpperCase()}</span></div><div class="quest-title">${p.name}</div><p class="quest-sub">${p.time} · ${p.warm}</p></div><div class="quest-bottom"><div class="reward"><small>RÉCOMPENSE</small>${p.type==='repos'?'+20 XP':'jusqu’à +100 XP'}</div>${isDone(cur)?'<span class="completed-pill">'+icon('check')+' Mission validée</span>':`<button class="btn small" data-action="goto-today">Voir ma mission ${icon('arrow')}</button>`}</div></div>
 <div class="section-heading"><h2>CETTE SEMAINE</h2><button class="text-btn" data-view="calendar">CALENDRIER →</button></div>
 ${renderWeekStrip()}
 <div style="margin-top:11px" class="banner">${icon('shield')}<div><strong>${wp.done} / ${wp.total} entraînements validés</strong><p>Le jeudi et le dimanche servent à récupérer. Ils ne cassent pas ta série.</p></div></div>
 <div class="section-heading"><h2>PROCHAINS OBJECTIFS</h2></div>
 <div class="panel"><div class="row space"><div><div class="eyebrow">PROGRESSION</div><h3 style="margin-top:6px">${ls.level<10?'Atteindre le rang D':ls.level<20?'Atteindre le rang C':'Continuer à progresser'}</h3></div><div style="font-size:25px;color:#79d8ff">${icon('bolt')}</div></div><p class="small muted" style="margin-bottom:0">Tu gagnes des XP grâce aux séances réellement effectuées, sans bonus pour en faire trop.</p></div>
 <div class="lastline">TITAN X · LA RÉGULARITÉ BAT LA PRÉCIPITATION</div>`}
function renderWeekStrip(){return `<div class="week-strip">${currentWeek().map((k,i)=>{const d=parseDate(k);return `<button class="week-day ${k===dateKey(todayDate())?'is-today':''} ${isDone(k)?'done':''} ${isFuture(k)?'future':''}" data-action="select-day" data-date="${k}" ${!inRange(k)?'disabled':''}><span class="daylabel">${WEEK_SHORT[i]}</span><strong>${d.getDate()}</strong><span class="mark"></span></button>`}).join('')}</div>`}
function renderMissions(){const p=getPlan(selected),outOfRange=!inRange(selected),isRest=p.type==='repos',future=isFuture(selected),checks=countSets(selected),day=DAY_NAMES[parseDate(selected).getDay()];return `${topSection('MISSIONS','TON ENTRAÎNEMENT','Séances adaptées, mouvements simples et progrès mesurables.')}
 <div class="panel" style="padding:13px"><div class="day-callout"><button class="btn ghost small" data-action="prev-day">‹</button><div style="text-align:center"><div class="eyebrow">${day.toUpperCase()}</div><strong>${formatDate(selected)}</strong></div><button class="btn ghost small" data-action="next-day">›</button></div></div>
 <div class="section-heading"><h2>${esc(p.name)}</h2><span class="pill ${isRest?'rest':''}">${isRest?'RÉCUPÉRATION':'MISSION'}</span></div>
 <div class="notice ${isRest?'ok':''}"><strong>${p.time}</strong> · ${p.warm} ${!isRest?'Entre les séries, repose-toi 1 à 2 minutes. Tu n’as pas besoin d’aller jusqu’à l’épuisement.':''}</div>
 <div class="row space" style="margin:15px 2px 9px"><span class="eyebrow">${isRest?'ÉTAPES':'EXERCICES'}</span><span class="mini-progress">${checks.marked}/${checks.all} étapes</span></div>
 <div class="progress-track" style="margin-bottom:13px"><div class="progress-fill" style="width:${checks.all?Math.round(checks.marked/checks.all*100):0}%"></div></div>
 ${p.items.map((e,i)=>`<div class="exercise-card"><div class="ex-head"><div class="ex-icon">${icon(e.kind)}</div><div style="flex:1"><div class="ex-name">${esc(e.name)}</div><div class="ex-sub">${e.sets} ${e.sets>1?'séries':'étape'} · ${esc(e.amount)}</div></div></div><div class="ex-desc">${esc(e.how)}</div><div class="sets">${Array.from({length:e.sets},(_,n)=>{const done=Boolean(state.checks[selected]?.[`${i}:${n}`]);return `<button class="set-btn ${done?'done':''}" data-action="mark-set" data-ex="${i}" data-set="${n}" ${future||outOfRange||isDone(selected)?'disabled':''}>${done?'✓ ':''}${isRest?'Fait':'Série '+(n+1)}</button>`}).join('')}</div></div>`).join('')}
 <div class="panel" style="margin-top:12px">${isDone(selected)?`<div class="banner" style="margin-bottom:12px">${icon('check')}<div><strong>Mission terminée</strong><p>+${state.completed[selected].xp||0} XP gagnés. Bien joué !</p></div></div><button class="btn secondary wide" data-action="undo-session">Corriger cette validation</button>`:future?'<div class="notice">Cette journée n’est pas encore arrivée. Tu peux déjà consulter son programme.</div>':`<div class="row space" style="margin-bottom:12px"><div><div class="eyebrow">RÉCOMPENSE</div><strong style="font-size:21px;color:#f6c66d">${isRest?'20':'jusqu’à 100'} XP</strong></div><span class="mini-progress">${checks.marked} séries cochées</span></div><button class="btn wide" data-action="complete-session">${isRest?'Valider ma récupération':'Terminer ma séance'} ${icon('arrow')}</button>`}</div>
 <div class="section-heading"><h2>CHRONOMÈTRE</h2><span class="pill">REPOS ENTRE SÉRIES</span></div>
 <div class="glass" style="text-align:center"><div class="seg" style="width:max-content;max-width:100%;margin:auto"><button data-action="preset" data-sec="60" class="${timer.duration===60?'active':''}">1 min</button><button data-action="preset" data-sec="90" class="${timer.duration===90?'active':''}">1 min 30</button><button data-action="preset" data-sec="120" class="${timer.duration===120?'active':''}">2 min</button></div>
 <div class="timer-ring"><span class="timer-digits" id="timerDigits">${timerString()}</span><span class="timer-caption">TEMPS DE REPOS</span></div>
 <div class="timer-controls"><button class="btn" data-action="toggle-timer" id="timerToggle">${timer.running?'Pause':'Démarrer'}</button><button class="btn secondary" data-action="reset-timer">Recommencer</button></div><p class="tiny muted" style="margin-bottom:0">Le chronomètre fonctionne lorsque l’application est ouverte. Il n’envoie pas de push en arrière-plan.</p></div>
 <div class="notice">Si un mouvement fait mal ou si ta technique se dégrade, arrête ou réduis la charge. Les exercices avec contact se pratiquent avec un entraîneur qualifié.</div>`}
function renderCalendar(){let [y,m]=calendarMonth.split('-').map(Number);const first=new Date(y,m-1,1,12),offset=(first.getDay()+6)%7,last=new Date(y,m,0).getDate();return `${topSection('CALENDRIER','TON HISTORIQUE','Consulte tes missions passées et celles à venir.')}
 <div class="panel"><div class="calendar-heading"><h2 style="text-transform:capitalize">${first.toLocaleDateString('fr-FR',{month:'long',year:'numeric'})}</h2><div class="month-nav"><button data-action="prev-month" aria-label="Mois précédent">‹</button><button data-action="next-month" aria-label="Mois suivant">›</button></div></div><div class="month-grid">${WEEK_SHORT.map(w=>`<span class="month-weekday">${w}</span>`).join('')}${Array.from({length:offset},()=>'<span class="cal-cell blank"></span>').join('')}${Array.from({length:last},(_,i)=>{const k=`${y}-${String(m).padStart(2,'0')}-${String(i+1).padStart(2,'0')}`;return `<button data-action="select-day" data-date="${k}" class="cal-cell ${isDone(k)?'done':''} ${k===dateKey(todayDate())?'today':''} ${k===selected?'selected':''} ${isFuture(k)?'future':''}" ${!inRange(k)?'disabled':''}>${i+1}${isDone(k)?'<span class="cal-dot"></span>':''}</button>`}).join('')}</div><div class="legend"><span>Jour actuel</span><span>Mission validée</span></div></div>
 <div class="section-heading"><h2>JOUR SÉLECTIONNÉ</h2></div><div class="quest-card"><div class="quest-top"><div class="quest-label"><span>${formatDate(selected,{weekday:'long',day:'numeric',month:'long',year:'numeric'}).toUpperCase()}</span></div><div class="quest-title">${getPlan(selected).name}</div><p class="quest-sub">${isDone(selected)?'Mission terminée · '+state.completed[selected].xp+' XP':'Pas encore validée'}</p></div><div class="quest-bottom"><span class="pill ${getPlan(selected).type==='repos'?'rest':''}">${getPlan(selected).energy}</span><button class="btn small" data-view="missions">Ouvrir la mission ${icon('arrow')}</button></div></div>`}
function achievements(){const keys=completedKeys(),s=trainingCount(),rest=keys.filter(k=>getPlan(k).type==='repos').length,level=levelStats().level;return [
 ['⚔️','Premier pas','Terminer une première séance',s>=1],
 ['🔥','Sur ta lancée','Enchaîner 3 séances prévues',longestStreak()>=3],
 ['🛡️','Repos maîtrisé','Valider 5 jours de récupération',rest>=5],
 ['🔷','Rang D','Atteindre le rang D',level>=10],
 ['🏆','10 missions','Valider 10 entraînements',s>=10],
 ['✨','50 missions','Valider 50 entraînements',s>=50],
 ['📈','Détermination','Enchaîner 10 séances prévues',longestStreak()>=10],
 ['👑','Rang S','Atteindre le rang S',level>=70]
 ]}
function renderStats(){const ls=levelStats(),ach=achievements(),unlocked=ach.filter(a=>a[3]).length;const week=currentWeek(),series=Array.from({length:8},(_,i)=>{const monday=parseDate(week[0]);monday.setDate(monday.getDate()-(7-i)*7);let n=0;for(let j=0;j<7;j++){const d=new Date(monday);d.setDate(d.getDate()+j);const k=dateKey(d);if(inRange(k)&&getPlan(k).type!=='repos'&&isDone(k))n++}return n});return `${topSection('ÉVOLUTION','PROGRESSION','Ton aventure avance avec les séances terminées et la récupération.')}
 <div class="hero" style="padding:18px"><div class="row space"><div><span class="eyebrow">TON PROFIL</span><h2 style="font-size:36px;margin-top:5px">RANG ${ls.rank} · NIV. ${ls.level}</h2><div class="muted small">${ls.xp} XP au total</div></div><div class="rank-orb" style="width:75px;min-width:75px;height:84px"><strong style="font-size:43px">${ls.rank}</strong></div></div><div class="level-row"><strong>PROCHAIN NIVEAU</strong><span>${ls.progress}/250 XP</span></div><div class="progress-track"><div class="progress-fill" style="width:${ls.progress/250*100}%"></div></div></div>
 <div class="metrics"><div class="metric"><strong>${trainingCount()}</strong><small>SÉANCES</small></div><div class="metric"><strong class="gold">${longestStreak()}</strong><small>MEILLEURE SÉRIE</small></div><div class="metric"><strong class="ac">${unlocked}/${ach.length}</strong><small>SUCCÈS</small></div></div>
 <div class="section-heading"><h2>8 DERNIÈRES SEMAINES</h2><span class="pill">SÉANCES</span></div><div class="panel"><div class="row space"><strong>Entraînements validés</strong><span class="muted tiny">0 à 5 / semaine</span></div><div class="chart">${series.map((n,i)=>`<div class="chart-item"><div class="chart-bar" title="${n} entraînement(s)" style="height:${Math.max(4,Math.round(n/5*119))}px"></div><small>${i===7?'Cette':'S-'+(7-i)}</small></div>`).join('')}</div></div>
 <div class="section-heading"><h2>SUCCÈS DÉBLOQUÉS</h2><span class="pill">${unlocked} / ${ach.length}</span></div><div class="achievements">${ach.map(a=>`<div class="achievement ${a[3]?'unlocked':''}"><span class="ach-icon">${a[0]}</span><div class="ach-name">${a[1]}</div><div class="ach-desc">${a[2]}</div></div>`).join('')}</div>
 <div class="section-heading"><h2>TES PERFORMANCES</h2></div><div class="panel"><p class="muted small" style="margin-top:0">Note tes progrès sans forcer pour battre un record à chaque séance.</p><div class="goal-inputs"><div><label class="field-label" for="recordPush">Pompes propres</label><input class="field" id="recordPush" type="number" min="0" max="300" placeholder="Ex. 35" value="${esc(state.records.push||'')}"></div><div><label class="field-label" for="recordWeight">Poids contrôlé (kg)</label><input class="field" id="recordWeight" type="number" min="0" max="100" step="0.5" placeholder="Ex. 8" value="${esc(state.records.weight||'')}"></div></div><button class="btn wide" data-action="save-records" style="margin-top:12px">Enregistrer mes progrès</button></div>`}
function renderSettings(){
 return `${topSection('RÉGLAGES','TITAN X V3 ULTRA','Ton application personnelle, sans inscription ni abonnement.')}
 <div class="panel"><div class="row space"><h3>RAPPEL QUOTIDIEN</h3><span class="pill rest">SUR IPHONE</span></div>
 <p class="small">Pour recevoir un rappel même lorsque TITAN X est fermée, crée une notification récurrente dans l’application <strong>Rappels</strong> de ton iPhone.</p>
 <ol class="install-guide"><li>Ouvre l’app <strong>Rappels</strong>.</li><li>Ajoute « TITAN X — séance ou récupération ».</li><li>Choisis <strong>18 h 30</strong>, puis <strong>Tous les jours</strong>.</li></ol>
 <button class="btn secondary wide" data-action="copy-reminder">${icon('copy')} Copier le titre du rappel</button>
 <div class="notice ok" style="margin-top:12px">Aucun serveur, abonnement ou clé VAPID nécessaire. Le rappel est géré par l’iPhone ; TITAN X ne l’active pas automatiquement.</div>
 </div>
 <div class="section-heading"><h2>INSTALLATION SUR IPHONE</h2></div>
 <div class="panel"><div class="row" style="margin-bottom:9px">${icon('shield')}<strong>Ouvrir comme une vraie application</strong></div>
 <ol class="install-guide"><li>Ouvre ton lien TITAN X dans <strong>Safari</strong>.</li><li>Touche <strong>Partager</strong> puis <strong>Sur l’écran d’accueil</strong>.</li><li>Touche <strong>Ajouter</strong> et lance TITAN X depuis son icône.</li></ol>
 <div class="notice ok">Après la première ouverture en ligne, tes écrans de sport fonctionnent hors ligne. La progression reste sur cet appareil.</div></div>
 <div class="section-heading"><h2>MES DONNÉES</h2></div>
 <div class="panel"><p class="muted small" style="margin-top:0">Tes séances, XP et records restent enregistrés localement. Sauvegarde-les avant de supprimer l’application ou de changer d’iPhone.</p>
 <button class="btn secondary wide" data-action="backup">${icon('copy')} Exporter ma sauvegarde</button><div style="height:10px"></div>
 <label class="btn ghost wide" style="display:flex;justify-content:center;align-items:center;gap:6px;cursor:pointer">Importer une sauvegarde<input type="file" id="importFile" accept="application/json,.json" hidden></label><div style="height:10px"></div>
 <button class="btn ghost wide" data-action="reset-data">Effacer mes données</button>
 <div class="notice" style="margin-top:12px">Si tu utilisais l’ancienne version sur un autre lien, fais une sauvegarde dans ses réglages et importe-la ici. Les données ne traversent pas automatiquement deux sites différents.</div></div>
 <div class="lastline">TITAN X V3 ULTRA · IPHONE · GRATUIT · HORS LIGNE<br>Force · endurance · coordination · récupération</div>`;
}
function render(){const page=document.getElementById('page');page.innerHTML=({home:renderHome,missions:renderMissions,calendar:renderCalendar,stats:renderStats,settings:renderSettings}[view]||renderHome)();document.querySelectorAll('.navitem').forEach(btn=>{btn.classList.toggle('active',btn.dataset.view===view);btn.setAttribute('aria-current',btn.dataset.view===view?'page':'false')});document.getElementById('notifyDot').classList.toggle('visible',false);updateTimerDisplay()}
function go(next){view=next;render();window.scrollTo({top:0,behavior:'auto'})}
function toggleSet(index,set){if(isDone(selected)||isFuture(selected)||!inRange(selected))return;const p=getPlan(selected);if(!p.items[index]||set>=p.items[index].sets)return;const checks=state.checks[selected]||(state.checks[selected]={});const id=`${index}:${set}`;checks[id]=!checks[id];store();render()}
function completeSession(){if(!inRange(selected)||isFuture(selected)||isDone(selected))return;const p=getPlan(selected),sets=countSets(selected);if(p.type!=='repos'&&sets.marked===0){toast('Coche les séries que tu as vraiment faites avant de valider.');return}const amount=p.type==='repos'?20:Math.max(10,Math.round(100*sets.marked/sets.all));state.completed[selected]={done:true,xp:amount,at:new Date().toISOString()};store();render();toast(`Mission validée : +${amount} XP. Bien joué !`)}
function undoSession(){if(!isDone(selected))return;if(!confirm('Annuler la validation de cette journée ? Les séries cochées seront conservées.'))return;delete state.completed[selected];store();render();toast('Validation annulée.')}
function timerString(){const sec=Math.max(0,timer.remaining);return `${String(Math.floor(sec/60)).padStart(2,'0')}:${String(sec%60).padStart(2,'0')}`}
function tick(){if(timer.running&&timer.deadline){timer.remaining=Math.max(0,Math.ceil((timer.deadline-Date.now())/1000));if(timer.remaining<=0){timer.running=false;timer.deadline=null;if(navigator.vibrate)navigator.vibrate(150);toast('Repos terminé ! Reprends quand tu te sens prêt.')}}updateTimerDisplay()}
function updateTimerDisplay(){const digits=document.getElementById('timerDigits');if(digits)digits.textContent=timerString();const toggle=document.getElementById('timerToggle');if(toggle)toggle.textContent=timer.running?'Pause':'Démarrer'}
function timerPreset(sec){timer.duration=sec;timer.remaining=sec;timer.running=false;timer.deadline=null;render()}
function timerToggle(){if(timer.running){timer.remaining=Math.max(0,Math.ceil((timer.deadline-Date.now())/1000));timer.running=false;timer.deadline=null}else{if(timer.remaining===0)timer.remaining=timer.duration;timer.running=true;timer.deadline=Date.now()+timer.remaining*1000}render()}
function timerReset(){timer.running=false;timer.deadline=null;timer.remaining=timer.duration;render()}
function saveRecords(){const a=document.getElementById('recordPush'),b=document.getElementById('recordWeight'),x=Number(a.value),y=Number(b.value);if((a.value&&(!Number.isFinite(x)||x<0||x>300))||(b.value&&(!Number.isFinite(y)||y<0||y>100))){toast('Vérifie les valeurs indiquées.');return}state.records={push:a.value,weight:b.value};store();toast('Tes performances sont enregistrées.')}
function backup(){const safe={completed:state.completed,checks:state.checks,records:state.records,reminder:{time:state.reminder.time,enabled:false}};const blob=new Blob([JSON.stringify({version:2,exportedAt:new Date().toISOString(),data:safe},null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='titan-x-sauvegarde.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),3000)}
async function importBackup(file){if(!file)return;try{if(file.size>1024*1024)throw Error('Sauvegarde trop volumineuse');const parsed=JSON.parse(await file.text());const data=parsed.data;if(parsed.version!==2||!data||typeof data!=='object'||!data.completed||typeof data.completed!=='object'||!data.checks||typeof data.checks!=='object'||Array.isArray(data.completed)||Array.isArray(data.checks))throw Error('Format incorrect');const completed={};for(const [k,v] of Object.entries(data.completed)){if(/^\d{4}-\d{2}-\d{2}$/.test(k)&&inRange(k)&&v&&v.done===true){const xp=Math.round(Number(v.xp));completed[k]={done:true,xp:Number.isFinite(xp)?Math.max(0,Math.min(100,xp)):0,at:String(v.at||'').slice(0,40)}}}data.completed=completed;if(!confirm('Remplacer ta progression actuelle par cette sauvegarde ?'))return;state={completed:data.completed||{},checks:data.checks||{},records:data.records||{},reminder:{time:data.reminder?.time||'18:30',enabled:false},device:state.device};store();render();toast('Sauvegarde importée avec succès.')}catch{toast('Cette sauvegarde n’est pas valide.')}}
function resetData(){if(!confirm('Effacer tous les entraînements, XP et records enregistrés sur cet appareil ?'))return;if(!confirm('Confirmer la suppression définitive des données locales ?'))return;const reminder=state.reminder,device=state.device;state={completed:{},checks:{},records:{},reminder,device};store();render();toast('Données de progression effacées.')}
async function copyReminderTitle(){try{await navigator.clipboard.writeText('TITAN X — séance ou récupération');toast('Titre copié. Crée maintenant un rappel quotidien à 18 h 30 dans Rappels.')}catch{toast('Titre du rappel : TITAN X — séance ou récupération')}}
document.getElementById('page').addEventListener('click',event=>{const control=event.target.closest('button[data-action],button[data-view]');if(!control)return;const action=control.dataset.action;if(control.dataset.view){go(control.dataset.view);return}if(action==='goto-today'){selected=dateKey(todayDate());go('missions')}
else if(action==='select-day'){selected=control.dataset.date;calendarMonth=selected.slice(0,7);go('missions')}
else if(action==='prev-day'){const k=addDays(selected,-1);if(inRange(k)){selected=k;render()}}
else if(action==='next-day'){const k=addDays(selected,1);if(inRange(k)){selected=k;render()}}
else if(action==='prev-month'||action==='next-month'){const [y,m]=calendarMonth.split('-').map(Number);const d=new Date(y,m-1+(action==='prev-month'?-1:1),1);const k=dateKey(d).slice(0,7);if(k>='2026-11'&&k<='2027-07'){calendarMonth=k;render()}}
else if(action==='mark-set')toggleSet(Number(control.dataset.ex),Number(control.dataset.set));
else if(action==='complete-session')completeSession();else if(action==='undo-session')undoSession();
else if(action==='preset')timerPreset(Number(control.dataset.sec));else if(action==='toggle-timer')timerToggle();else if(action==='reset-timer')timerReset();
else if(action==='save-records')saveRecords();else if(action==='backup')backup();else if(action==='reset-data')resetData();
else if(action==='copy-reminder')copyReminderTitle()});
document.getElementById('page').addEventListener('change',event=>{if(event.target.id==='reminderTime')updateReminderTime(event.target.value);if(event.target.id==='importFile')importBackup(event.target.files?.[0])});
document.querySelectorAll('.navitem').forEach(button=>{button.querySelector('.navicon').innerHTML=icon(button.querySelector('.navicon').dataset.i);button.addEventListener('click',()=>go(button.dataset.view))});
document.getElementById('headerNotify').addEventListener('click',()=>go('settings'));
if('serviceWorker' in navigator && location.protocol==='https:'){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js',{scope:'./'}).catch(()=>{}));let reloading=false;navigator.serviceWorker.addEventListener('controllerchange',()=>{if(!reloading){reloading=true;location.reload()}})}
document.addEventListener('visibilitychange',()=>{if(!document.hidden)tick()});
setInterval(tick,300);render();