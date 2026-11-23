/* AFAS Intake – formulierkern. Vragen staan in /vragenlijsten (zie SCHEMA.md). */
(function(){
"use strict";
const HELP = "https://help.afas.nl/help/NL/SE/";
const LKEY = "pb-intake";
const LEGACY_KEY = "pb-intake-ws";

/* ---------- Modules en vragen ---------- */
const MODS = (window.PB_MODULES||[]).slice().sort((a,b)=>(a.order||0)-(b.order||0));
const ORG = MODS.find(m=>m.fixed);
const TOPICS = MODS.filter(m=>!m.fixed);
const MBY = Object.fromEntries(MODS.map(m=>[m.id,m]));
const ALLQ = [];
MODS.forEach(m=>m.sections.forEach((s,si)=>{
  s.mod=m; s.key=m.id+"."+s.id; s.num=si+1;
  s.qs.forEach((q,qi)=>{q.sec=s;q.mod=m;q.num=(m.fixed?"":(si+1)+".")+(qi+1);q.key=m.id+"."+s.id+"_"+q.id;ALLQ.push(q)});
}));
const QBY = Object.fromEntries(ALLQ.map(q=>[q.key,q]));

/* ---------- Status ---------- */
let selected = [];   // module-ids
let answers = {};    // key -> {v, note, unk}
let owners = {};     // sectionKey -> naam
let scope = {};      // sectionKey -> ja|later|nee
let meta = {};
const SCOPE_OPTS=[["ja","Ja, gebruiken"],["later","Later (fase 2)"],["nee","Nee"]];
const SCOPE_TXT={ja:"Ja, gebruiken",later:"Later (fase 2)",nee:"Nee"};

const $ = (s,el=document)=>el.querySelector(s);
const esc = s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const hrefOf = l=>/^https?:/.test(l)?l:HELP+l;
const domId = k=>k.replace(/[^a-zA-Z0-9_-]/g,"-");
function toast(msg){const t=$("#toast");t.textContent=msg;t.hidden=false;clearTimeout(toast._t);toast._t=setTimeout(()=>t.hidden=true,2800)}
function setSave(txt){$("#savestate").textContent=txt}

const isSel = id => id==="org" || selected.includes(id);
const secVisible = s => isSel(s.mod.id) && !(s.ifNot && selected.includes(s.ifNot));
const secInScope = s => s.mod.fixed || (scope[s.key]!=="nee" && scope[s.key]!=="later");
const qActive = q => secVisible(q.sec) && secInScope(q.sec) && !(q.ifNot && selected.includes(q.ifNot));
const qShown = q => !(q.ifNot && selected.includes(q.ifNot));

/* ---------- Beoordeling per vraag ---------- */
function hasValue(q,a){ if(!a) return false; const v=a.v; if(Array.isArray(v)) return v.length>0; return v!=null && String(v).trim()!==""; }
function deviates(q,a){
  if(!a||!hasValue(q,a)) return false;
  if(q.t==="advies") return a.v==="afwijkend";
  if(q.t==="choice" && q.a) return a.v!==q.a;
  if(q.t==="multi" && q.a){const x=new Set(a.v),y=new Set(q.a);if(x.size!==y.size)return true;for(const i of x)if(!y.has(i))return true;return false}
  return false;
}
function state(q){
  const a=answers[q.key];
  if(a&&a.unk) return "unk";
  if(!hasValue(q,a)) return "empty";
  if(deviates(q,a)) return "dev";
  if(q.a||q.t==="advies") return "ok";
  return "done";
}
function adviesLabel(q){ if(q.t==="advies") return "Akkoord"; if(Array.isArray(q.a)) return q.a.join(", "); return q.a||""; }
function answerLabel(q,a){
  if(!a) return "";
  if(q.t==="advies") return a.v==="akkoord"?"Akkoord met advies":a.v==="afwijkend"?"Wijkt af":"";
  if(Array.isArray(a.v)) return a.v.join(", ");
  return a.v==null?"":String(a.v);
}

/* ---------- Opslaan ---------- */
const timers={};
function saveLocal(){
  meta.saved=new Date().toISOString();
  try{localStorage.setItem(LKEY,JSON.stringify({v:2,selected,answers,owners,scope,meta}));setSave("Opgeslagen in deze browser")}
  catch(e){setSave("Niet opgeslagen: download je antwoorden")}
}
function applyData(d){
  selected=(d.selected||[]).filter(id=>MBY[id]&&!MBY[id].fixed);
  answers=d.answers||{}; owners=d.owners||{}; scope=d.scope||{}; meta=d.meta||{};
}
function fromLegacyWS(d){
  const orgIds=["org","contact","werkgevers","modules","live","knelpunt","succes"];
  const wsIds=["volume","sollperv","huidig","huidigsys","url"];
  const ans={},own={},sc={};
  Object.entries(d.answers||{}).forEach(([k,v])=>{
    const m=k.match(/^(s[0-9a-z]+)_(.+)$/); if(!m) return;
    const [,sid,qid]=m;
    if(sid==="s0"){ if(orgIds.includes(qid)) ans["org.o1_"+qid]=v; else if(wsIds.includes(qid)) ans["ws.ws0_"+qid]=v; }
    else ans["ws."+sid+"_"+qid]=v;
  });
  Object.entries(d.owners||{}).forEach(([sid,v])=>{ if(sid==="s0") own["org.o1"]=v; else own["ws."+sid]=v; });
  Object.entries(d.scope||{}).forEach(([sid,v])=>{ sc["ws."+sid]=v; });
  return {selected:["ws"],answers:ans,owners:own,scope:sc,meta:{}};
}
function loadLocal(){
  try{
    const d=JSON.parse(localStorage.getItem(LKEY)||"null");
    if(d){applyData(d);return}
    const old=JSON.parse(localStorage.getItem(LEGACY_KEY)||"null");
    if(old&&old.answers&&Object.keys(old.answers).length){applyData(fromLegacyWS(old));saveLocal();toast("Je eerder ingevulde W&S-antwoorden zijn overgenomen")}
  }catch(e){}
}
function saveAnswer(key,delay){ clearTimeout(timers[key]); if(delay) timers[key]=setTimeout(saveLocal,delay); else saveLocal(); }

/* ---------- Startpagina ---------- */
function renderStart(){
  const has=selected.length>0;
  $("#view-start").innerHTML=`
   <div class="start-hero">
     <div>
       <h1>AFAS Intake</h1>
       <p class="sub">Leg in één keer vast hoe jullie AFAS willen inrichten</p>
       <p>Kies de onderwerpen die voor jullie spelen. Per onderwerp stellen we de vragen die we nodig hebben om AFAS volgens best practice in te richten, met bij de meeste vragen ons advies. Je vult alles in één formulier in en downloadt het resultaat als Word-bestand voor je Mentor.</p>
     </div>
     <div class="how">
       <h3>Zo werkt het</h3>
       <ol>
         <li>Vink hieronder de onderwerpen aan.</li>
         <li>Vul het formulier in; je antwoorden worden bewaard in deze browser.</li>
         <li>Klaar? Download als Word en mail het naar je Mentor.</li>
       </ol>
     </div>
   </div>
   <h2 class="start-h">Welke onderwerpen gaan jullie inrichten?</h2>
   <div class="tiles">${TOPICS.map((m,i)=>{
     const on=selected.includes(m.id); const n=m.sections.reduce((t,s)=>t+s.qs.length,0);
     return `<label class="tile-sel${on?" on":""}"><input type="checkbox" data-pick="${m.id}" ${on?"checked":""}>
       <span class="tile-top"><span class="tile-num">${i+1}</span><span class="tile-check" aria-hidden="true"></span></span>
       <b>${esc(m.title)}</b><span class="tile-tag">${esc(m.tagline||"")}</span>
       <span class="tile-intro">${esc(m.intro||"")}</span>
       <span class="tile-meta">${m.sections.length} onderdelen · ${n} vragen</span></label>`;}).join("")}
   </div>
   <div class="start-bar">
     <p>${has?`<b>${selected.length} ${selected.length===1?"onderwerp":"onderwerpen"} gekozen.</b> Je kunt later altijd onderwerpen toevoegen of weghalen; ingevulde antwoorden blijven bewaard.`:"Kies minimaal één onderwerp om te beginnen."}</p>
     <div class="btns">
       <button class="btn btn-line" data-act="import">Bestand inlezen</button>
       <button class="btn btn-gold" data-act="begin" ${has?"":"disabled"}>${Object.keys(answers).length?"Verder met invullen":"Start de intake"}</button>
     </div>
   </div>`;
}

/* ---------- Formulier ---------- */
function optionHtml(q,type,name,val,checked,extra){
  const star = (q.t==="choice"&&q.a===val)||(q.t==="multi"&&q.a&&q.a.includes(val)) ? ' <span class="star">ADVIES</span>':'';
  return `<label class="opt"><input type="${type}" name="${name}" value="${esc(val)}" data-k="${q.key}" ${extra||""} ${checked?"checked":""}><span>${esc(val)}${star}</span></label>`;
}
function qHtml(q){
  const a=answers[q.key]||{};
  const id="f_"+domId(q.key);
  const isField=["text","number","date","area"].includes(q.t);
  let input="";
  if(q.t==="text") input=`<input id="${id}" class="field${q.short?" short":""}" data-k="${q.key}" data-kind="v" value="${esc(a.v||"")}">`;
  else if(q.t==="number") input=`<input id="${id}" type="number" min="0" class="field short" data-k="${q.key}" data-kind="v" value="${esc(a.v||"")}">`;
  else if(q.t==="date") input=`<input id="${id}" type="date" class="field short" data-k="${q.key}" data-kind="v" value="${esc(a.v||"")}">`;
  else if(q.t==="area") input=`<textarea id="${id}" class="field" data-k="${q.key}" data-kind="v">${esc(a.v||"")}</textarea>`;
  else if(q.t==="choice") input=`<div class="opts" role="radiogroup">${q.o.map(o=>optionHtml(q,"radio",id,o,a.v===o)).join("")}</div>`;
  else if(q.t==="multi") input=`<div class="opts">${q.o.map(o=>optionHtml(q,"checkbox",id,o,Array.isArray(a.v)&&a.v.includes(o))).join("")}</div>`;
  else if(q.t==="advies") input=`<div class="opts" role="radiogroup">${optionHtml({key:q.key,t:"x"},"radio",id,"Akkoord met advies",a.v==="akkoord",'data-adv="akkoord"')}${optionHtml({key:q.key,t:"x"},"radio",id,"Wijkt af",a.v==="afwijkend",'data-adv="afwijkend"')}</div>`;
  else if(q.t==="upload") input=`<div class="opts">${optionHtml({key:q.key,t:"x"},"checkbox",id,"Stuur ik mee per mail",Array.isArray(a.v)&&a.v.length>0)}</div><span class="note">Stuur dit bestand mee als bijlage bij de mail met je ingevulde formulier.</span>`;
  const showAdv = q.a || q.t==="advies";
  const lnk = q.link?` <a href="${esc(hrefOf(q.link))}" target="_blank" rel="noopener">${esc(q.lt||"Meer info")} ↗</a>`:"";
  const advBox = showAdv ? `<div class="advies"><span class="tag">Ons advies</span><span class="txt">${q.t!=="advies"?`<b>${esc(adviesLabel(q))}.</b> `:""}${esc(q.at||"")}${lnk}</span>${q.t!=="advies"?`<button type="button" data-take="${q.key}">Neem advies over</button>`:""}</div>`
    : (q.link?`<div class="note"><a href="${esc(hrefOf(q.link))}" target="_blank" rel="noopener">${esc(q.lt||"Meer info in AFAS Help")} ↗</a></div>`:"");
  const noteOpen = !!(a.note) || a.v==="afwijkend";
  const tag = isField?`label for="${id}"`:`div class="lbl"`, tagEnd = isField?"label":"div";
  return `<div class="q" id="q_${domId(q.key)}" data-q="${q.key}" ${qShown(q)?"":"hidden"}>
    <div class="q-head"><${tag}><span class="q-num">${q.num}</span>${esc(q.l)}</${tagEnd}><span class="badge" data-badge="${q.key}" hidden></span></div>
    ${q.h?`<p class="q-help">${esc(q.h)}</p>`:""}
    ${q.t==="advies"?advBox+input:input+advBox}
    <div class="q-foot">
      <label><input type="checkbox" data-k="${q.key}" data-kind="unk" ${a.unk?"checked":""}> Weet ik nog niet</label>
      <button type="button" class="linkbtn" data-note="${q.key}" ${noteOpen?"hidden":""}>+ Toelichting</button>
      ${q.opt?'<span class="badge b-opt">Optioneel</span>':""}
    </div>
    <textarea class="field" data-k="${q.key}" data-kind="note" placeholder="${q.t==="advies"?"Waarom wijken jullie af, en wat willen jullie in plaats daarvan?":"Toelichting"}" ${noteOpen?"":"hidden"} aria-label="Toelichting bij ${esc(q.l)}">${esc(a.note||"")}</textarea>
  </div>`;
}
function scopeCtl(s,prefix){
  return `<div class="scope-ctl" role="radiogroup" aria-label="Scope: ${esc(s.title)}">${SCOPE_OPTS.map(([v,l])=>`<label class="sc sc-${v}"><input type="radio" name="${prefix}_${domId(s.key)}" value="${v}" data-scope="${s.key}" ${scope[s.key]===v?"checked":""}><span>${l}</span></label>`).join("")}</div>`;
}
function flowHtml(m){
  if(m.timeline&&m.timeline.length){
    return `<div class="flow"><div class="flow-h"><h2>Tijdlijn Wet verbetering poortwachter</h2><span>Wettelijke termijn, en wanneer AFAS de taak klaarzet</span></div>
      <div class="tl">${m.timeline.map(t=>`<div class="tl-i"><span class="tl-w">${esc(t.w)}</span><b>${esc(t.t)}</b>${t.afas?`<small>${esc(t.afas)}</small>`:""}</div>`).join("")}</div>
      ${m.flow&&m.flow.length?`<div class="flow-sub"><span>Naar onderdeel:</span>${m.sections.map(s=>`<button class="chipbtn" data-go="${s.key}">${esc(s.short||s.title)}</button>`).join("")}</div>`:""}</div>`;
  }
  if(!m.flow||!m.flow.length) return "";
  const S=id=>m.sections.find(s=>s.id===id);
  return `<div class="flow"><div class="flow-h"><h2>Het proces in AFAS</h2><span>Klik op een stap om naar de vragen te gaan</span></div>
    <div class="flow-row">${m.flow.filter(f=>S(f.s)).map(f=>`<button class="step" data-go="${m.id}.${f.s}"><b>${esc(f.t)}</b><small>${esc(f.d||"")}</small><span class="bar"><i data-bar="${m.id}.${f.s}"></i></span></button>`).join("")}</div>
    ${m.flowSub&&m.flowSub.length?`<div class="flow-sub"><span>Ook in dit onderwerp:</span>${m.flowSub.filter(S).map(id=>`<button class="chipbtn" data-go="${m.id}.${id}">${esc(S(id).short||S(id).title)}</button>`).join("")}</div>`:""}</div>`;
}
function scopeCard(m){
  return `<div class="flow scopecard"><div class="flow-h"><h2>Scope: welke onderdelen gaan jullie gebruiken?</h2><span>Onderdelen met 'Later' of 'Nee' worden ingeklapt en tellen niet mee</span></div>
   <div class="scope-list">${m.sections.map(s=>`<div class="scope-row" data-srow="${s.key}" ${secVisible(s)?"":"hidden"}><button class="scope-name" data-go="${s.key}">${esc(s.title)}</button>${scopeCtl(s,"sa")}</div>`).join("")}</div></div>`;
}
function sectionHtml(s){
  const m=s.mod;
  return `<section class="sec" id="sec-${domId(s.key)}" ${secVisible(s)?"":"hidden"}>
    <div class="sec-h">
      <div><div class="eyebrow">${m.fixed?"Algemeen":esc(m.short)+" · onderdeel "+s.num+" van "+m.sections.length}</div><h2>${esc(s.title)}</h2></div>
      <label class="owner">Eigenaar van dit onderdeel<input data-owner="${s.key}" placeholder="Naam en functie" value="${esc(owners[s.key]||"")}"></label>
    </div>
    <p class="sec-intro">${esc(s.intro||"")}</p>
    ${m.fixed?"":`<div class="sec-scope"><span>Gaan jullie dit onderdeel gebruiken?</span>${scopeCtl(s,"sb")}</div><p class="outnote" hidden></p>`}
    <div class="qs">${s.qs.map(qHtml).join("")}</div>
  </section>`;
}
let renderedFor=null;
function renderForm(){
  renderedFor=selected.slice().sort().join(",");
  const mods=[ORG,...TOPICS.filter(m=>selected.includes(m.id))].filter(Boolean);
  $("#form-body").innerHTML = `
    <div class="mod-overview">
      <div class="flow-h"><h2>Jullie intake</h2><button class="linkbtn" data-view="start">Onderwerpen wijzigen</button></div>
      <div class="ov-tiles">${mods.filter(m=>!m.fixed).map(m=>`<button class="ov-tile" data-go="mod-${m.id}"><b>${esc(m.title)}</b><span class="ov-bar"><i data-mbar="${m.id}"></i></span><small data-mpct="${m.id}">0%</small></button>`).join("")}</div>
    </div>
    ${mods.map(m=>`<div class="mod" id="mod-${m.id}">
      ${m.fixed?"":`<div class="mod-h"><span class="eyebrow">Onderwerp</span><h2>${esc(m.title)}</h2><p>${esc(m.intro||"")}</p></div>${flowHtml(m)}${scopeCard(m)}`}
      ${m.sections.map(sectionHtml).join("")}
    </div>`).join("")}
    <div class="endbar"><p><b>Klaar met invullen?</b> Download je antwoorden als Word-bestand en mail dat naar je Mentor, samen met de bestanden die je wilt meesturen.</p><div class="btns"><button class="btn btn-line" data-view="sum">Naar samenvatting</button><button class="btn btn-gold" data-act="docx">Download als Word</button></div></div>`;
  $("#nav").innerHTML = mods.map(m=>`<div class="nav-g"><div class="nav-gh">${esc(m.fixed?"Algemeen":m.title)}</div>${m.sections.map(s=>`<button data-go="${s.key}" ${secVisible(s)?"":"hidden"}><span class="n">${m.fixed?"":s.num}</span><span>${esc(s.short||s.title)}</span><span class="pct" data-pct="${s.key}">0%</span></button>`).join("")}</div>`).join("");
  document.querySelectorAll(".sec").forEach(s=>io.observe(s));
  applyScope(); refreshStates();
}
function applyScope(){
  ALLQ.length && MODS.forEach(m=>m.sections.forEach(s=>{
    if(m.fixed) return;
    const out=!secInScope(s), sec=document.getElementById("sec-"+domId(s.key));
    if(sec){sec.classList.toggle("out",out);$(".qs",sec).hidden=out;const n=$(".outnote",sec);n.hidden=!out;n.textContent=out?(scope[s.key]==="later"?"Dit onderdeel nemen jullie later op (fase 2). De vragen zijn ingeklapt en tellen niet mee.":"Dit onderdeel valt buiten de scope. De vragen zijn ingeklapt en tellen niet mee."):"";}
    document.querySelectorAll(`input[data-scope="${s.key}"]`).forEach(i=>i.checked=scope[s.key]===i.value);
    document.querySelectorAll(`[data-go="${s.key}"]`).forEach(b=>b.classList.toggle("is-out",out));
  }));
}
function refreshStates(){
  let total=0,done=0; const per={}, perM={};
  ALLQ.forEach(q=>{
    const st=state(q);
    const el=document.getElementById("q_"+domId(q.key));
    if(el){
      el.classList.toggle("dev",st==="dev"); el.classList.toggle("unk",st==="unk");
      const b=el.querySelector(`[data-badge]`);
      const map={ok:["b-ok","Volgens advies"],dev:["b-dev","Wijkt af"],unk:["b-unk","Weet ik nog niet"],done:["b-ok","Ingevuld"]};
      if(map[st]){b.className="badge "+map[st][0];b.textContent=map[st][1];b.hidden=false}else b.hidden=true;
    }
    if(!q.opt && qActive(q)){
      const sk=q.sec.key, mk=q.mod.id;
      per[sk]=per[sk]||{t:0,d:0}; perM[mk]=perM[mk]||{t:0,d:0};
      per[sk].t++; perM[mk].t++; total++;
      if(st!=="empty"){per[sk].d++; perM[mk].d++; done++}
    }
  });
  MODS.forEach(m=>{
    m.sections.forEach(s=>{
      const p=per[s.key]||{t:0,d:0}, pct=p.t?Math.round(p.d/p.t*100):100, out=!secInScope(s);
      const n=document.querySelector(`[data-pct="${s.key}"]`); if(n){n.textContent=out?"n.v.t.":pct+"%";n.parentElement.classList.toggle("done",!out&&pct===100)}
      const b=document.querySelector(`[data-bar="${s.key}"]`); if(b) b.style.width=out?"0%":pct+"%";
    });
    const pm=perM[m.id]||{t:0,d:0}, mp=pm.t?Math.round(pm.d/pm.t*100):0;
    const mb=document.querySelector(`[data-mbar="${m.id}"]`); if(mb) mb.style.width=mp+"%";
    const mt=document.querySelector(`[data-mpct="${m.id}"]`); if(mt) mt.textContent=mp+"%";
  });
  $("#overall").style.width=(total?Math.round(done/total*100):0)+"%";
  if(!$("#view-sum").hidden) renderSummary();
}

/* ---------- Samenvatting ---------- */
function counts(mod){
  const r={devs:[],unks:[],empties:[],answered:0,required:0};
  ALLQ.forEach(q=>{
    if(mod && q.mod!==mod) return;
    if(!qActive(q)) return;
    const st=state(q);
    if(!q.opt){r.required++; if(st!=="empty") r.answered++;}
    if(st==="dev") r.devs.push(q); else if(st==="unk") r.unks.push(q); else if(st==="empty"&&!q.opt) r.empties.push(q);
  });
  return r;
}
function renderSummary(){
  const mods=[ORG,...TOPICS.filter(m=>selected.includes(m.id))].filter(Boolean);
  const all=counts(null);
  const when=meta.saved?new Date(meta.saved).toLocaleString("nl-NL",{dateStyle:"long",timeStyle:"short"}):"";
  const org=(answers["org.o1_org"]||{}).v||"";
  const item=(q,kind)=>{const a=answers[q.key]||{};
    return `<div class="sum-item"><span class="where">${esc(q.mod.fixed?"Organisatie":q.mod.short)} ${q.num} · ${esc(q.sec.title)}</span><b>${esc(q.l)}</b>
     ${kind==="dev"?`<div class="cmp"><span>Gekozen: <b>${esc(answerLabel(q,a))}</b></span><span>Advies: ${esc(adviesLabel(q))}</span></div>`:""}
     ${a.note?`<div class="note">Toelichting: ${esc(a.note)}</div>`:""}
     <button class="linkbtn jump" data-goq="${q.key}">Naar de vraag →</button></div>`;};
  const list=(arr,kind,empty)=>arr.length?arr.map(q=>item(q,kind)).join(""):`<p class="empty">${empty}</p>`;
  $("#view-sum").innerHTML = `
   <div class="intro" style="grid-template-columns:minmax(0,1fr) auto;align-items:end">
     <div><h1>Samenvatting${org?" "+esc(org):""}</h1><p class="sub">Afwijkingen van best practice en open punten: de agenda voor de inrichtingssessies.</p></div>
     <span class="status-pill">${when?"Laatst opgeslagen "+esc(when):"Nog niets ingevuld"}</span>
   </div>
   <div class="sum-top">
     <div class="tile"><small>Ingevuld</small><b>${all.answered}/${all.required}</b></div>
     <div class="tile dev"><small>Wijkt af van advies</small><b>${all.devs.length}</b></div>
     <div class="tile unk"><small>Weet ik nog niet</small><b>${all.unks.length}</b></div>
     <div class="tile"><small>Nog niet beantwoord</small><b>${all.empties.length}</b></div>
   </div>
   ${mods.map(m=>{const c=counts(m);return `<div class="sum-mod">
     <h2>${esc(m.fixed?"Organisatie":m.title)} <span class="sum-mod-n">${c.answered}/${c.required} ingevuld</span></h2>
     ${m.fixed?"":`<div class="sum-sec"><h3>Scope</h3><div class="scope-sum">${m.sections.filter(secVisible).map(s=>{const v=scope[s.key];return `<div class="scope-sum-row"><span>${esc(s.title)}</span><span class="badge ${v==="ja"?"b-ok":v==="later"?"b-unk":v==="nee"?"b-opt":"b-dev"}">${v?SCOPE_TXT[v]:"Nog niet gekozen"}</span></div>`}).join("")}</div></div>`}
     ${c.devs.length?`<div class="sum-sec"><h3>Afwijkingen van ons advies</h3><div class="sum-list">${list(c.devs,"dev","")}</div></div>`:""}
     ${c.unks.length?`<div class="sum-sec"><h3>Open punten om samen te bespreken</h3><div class="sum-list">${list(c.unks,"unk","")}</div></div>`:""}
     ${c.empties.length?`<details class="sum-sec"><summary><h3>Nog niet beantwoord (${c.empties.length})</h3></summary><div class="sum-list">${list(c.empties,"empty","")}</div></details>`:""}
     ${!c.devs.length&&!c.unks.length&&!c.empties.length?`<p class="empty">Alles ingevuld en volgens advies.</p>`:""}
   </div>`}).join("")}
   <div class="endbar">
     <p>Klaar? Download je antwoorden als Word-bestand en mail dat naar je Mentor. Wil je later verder op een andere computer, of heb je een bestand van een collega? Lees het in met <em>Bestand inlezen</em>.</p>
     <div class="btns">
       <button class="btn btn-gold" data-act="docx">Download als Word</button>
       <button class="btn btn-line" data-act="import">Bestand inlezen</button>
       <button class="btn btn-line" data-act="wipe">Alles wissen</button>
     </div>
   </div>`;
}

/* ---------- Bevestigen ---------- */
function confirmBox(title,text,okLabel){
  return new Promise(res=>{
    const w=document.createElement("div");w.className="modal";
    w.innerHTML=`<div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="mt"><h3 id="mt">${esc(title)}</h3><p>${esc(text)}</p><div class="btns"><button class="btn btn-line-dark" data-r="0">Annuleren</button><button class="btn btn-navy" data-r="1">${esc(okLabel)}</button></div></div>`;
    w.addEventListener("click",e=>{const b=e.target.closest("[data-r]");if(b||e.target===w){w.remove();res(!!(b&&b.dataset.r==="1"))}});
    document.body.appendChild(w); w.querySelector('[data-r="1"]').focus();
  });
}

/* ---------- Interactie ---------- */
function openNote(k){const el=document.getElementById("q_"+domId(k)); if(!el) return; const n=el.querySelector('[data-kind="note"]'); const b=el.querySelector('[data-note]'); if(n)n.hidden=false; if(b)b.hidden=true}
document.addEventListener("input",e=>{
  const t=e.target;
  if(t.dataset.owner){owners[t.dataset.owner]=t.value;clearTimeout(timers.o);timers.o=setTimeout(saveLocal,500);return}
  const k=t.dataset.k; if(!k) return;
  const kind=t.dataset.kind;
  if(kind==="v"||kind==="note"){answers[k]=answers[k]||{}; answers[k][kind==="v"?"v":"note"]=t.value; refreshStates(); saveAnswer(k,500);}
});
document.addEventListener("change",e=>{
  const t=e.target, k=t.dataset.k;
  if(t.id==="importfile"){importFile(t);return}
  if(t.dataset.pick){const id=t.dataset.pick; selected=t.checked?[...new Set([...selected,id])]:selected.filter(x=>x!==id); saveLocal(); renderStart(); return}
  if(t.dataset.scope){scope[t.dataset.scope]=t.value;applyScope();refreshStates();saveLocal();return}
  if(!k) return;
  const q=QBY[k]; if(!q) return; answers[k]=answers[k]||{};
  if(t.dataset.kind==="unk"){answers[k].unk=t.checked}
  else if(t.dataset.adv){answers[k].v=t.dataset.adv; if(t.dataset.adv==="afwijkend") openNote(k);}
  else if(t.type==="radio"){answers[k].v=t.value}
  else if(t.type==="checkbox"){const box=t.closest(".opts");answers[k].v=[...box.querySelectorAll("input:checked")].map(i=>i.value)}
  else return;
  if(t.dataset.kind!=="unk" && answers[k].unk){answers[k].unk=false;const el=document.getElementById("q_"+domId(k));const u=el&&el.querySelector('[data-kind="unk"]');if(u)u.checked=false}
  if(deviates(q,answers[k])) openNote(k);
  refreshStates(); saveAnswer(k,0);
});
document.addEventListener("click",async e=>{
  const t=e.target.closest("button,[data-go]"); if(!t||t.closest(".modal")) return;
  if(t.dataset.go){showView("form");const id=t.dataset.go.startsWith("mod-")?t.dataset.go:"sec-"+domId(t.dataset.go);const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:"smooth",block:"start"});return}
  if(t.dataset.goq){showView("form");const el=document.getElementById("q_"+domId(t.dataset.goq));if(el)el.scrollIntoView({behavior:"smooth",block:"center"});return}
  if(t.dataset.view){showView(t.dataset.view);window.scrollTo({top:0});return}
  if(t.dataset.note){openNote(t.dataset.note);const el=document.getElementById("q_"+domId(t.dataset.note));el.querySelector('[data-kind="note"]').focus();return}
  if(t.dataset.take){
    const k=t.dataset.take,q=QBY[k];answers[k]=answers[k]||{};answers[k].v=Array.isArray(q.a)?[...q.a]:q.a;answers[k].unk=false;
    const el=document.getElementById("q_"+domId(k)); el.querySelectorAll(".opts input").forEach(i=>i.checked=Array.isArray(q.a)?q.a.includes(i.value):i.value===q.a);
    const u=el.querySelector('[data-kind="unk"]'); if(u)u.checked=false;
    refreshStates(); saveAnswer(k,0); return;
  }
  const act=t.dataset.act;
  if(act==="begin"){if(selected.length){renderForm();showView("form");window.scrollTo({top:0})}return}
  if(act==="docx"){exportDocx(t);return}
  if(act==="import"){$("#importfile").click();return}
  if(act==="wipe"){
    if(await confirmBox("Alle antwoorden wissen?","Alle antwoorden in deze browser worden verwijderd. Download ze eerst als je ze wilt bewaren.","Alles wissen")){
      selected=[];answers={};owners={};scope={};meta={};try{localStorage.removeItem(LKEY);localStorage.removeItem(LEGACY_KEY)}catch(err){}
      renderStart();showView("start");window.scrollTo({top:0});setSave("Leeg formulier");toast("Alle antwoorden zijn gewist");
    }
    return;
  }
  if(t.id==="tab-start"){showView("start");return}
  if(t.id==="tab-form"){if(selected.length)showView("form");else{showView("start");toast("Kies eerst een onderwerp")}return}
  if(t.id==="tab-sum"){showView("sum");return}
});

/* ---------- Bibliotheken pas laden als ze nodig zijn ---------- */
const LIBS={docx:"https://cdn.jsdelivr.net/npm/docx@8.5.0/build/index.umd.js",JSZip:"https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"};
function loadLib(name){
  if(window[name]) return Promise.resolve(window[name]);
  return new Promise((res,rej)=>{const s=document.createElement("script");s.src=LIBS[name];s.onload=()=>window[name]?res(window[name]):rej();s.onerror=rej;document.head.appendChild(s)});
}
function saveBlob(blob,filename){const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),4000)}
const b64enc=s=>btoa(unescape(encodeURIComponent(s)));
const b64dec=s=>decodeURIComponent(escape(atob(s)));

/* ---------- Export naar Word ---------- */
async function exportDocx(btn){
  const old=btn.textContent; btn.disabled=true; btn.textContent="Bezig…";
  try{
    const D=await loadLib("docx");
    const {Document,Packer,Paragraph,TextRun,HeadingLevel,Table,TableRow,TableCell,WidthType,ShadingType,BorderStyle,PageBreak}=D;
    const NAVY="262E73",WARN="A4560F",OPEN="4B54A8",GREY="5B6084",OK="2C7A55";
    const org=(answers["org.o1_org"]||{}).v||"";
    const now=new Date();
    const P=(text,o={})=>new Paragraph({spacing:{after:o.after??80},children:[new TextRun({text:String(text),bold:o.bold,size:o.size||20,color:o.color,italics:o.italics})]});
    const H=(text,lvl,size)=>new Paragraph({heading:lvl,spacing:{before:300,after:80},children:[new TextRun({text,bold:true,size,color:NAVY})]});
    const cell=(children,o={})=>new TableCell({children:Array.isArray(children)?children:[children],width:{size:o.w,type:WidthType.PERCENTAGE},shading:o.fill?{type:ShadingType.CLEAR,color:"auto",fill:o.fill}:undefined,margins:{top:60,bottom:60,left:90,right:90}});
    const border={style:BorderStyle.SINGLE,size:4,color:"D9DCE9"};
    const borders={top:border,bottom:border,left:border,right:border,insideHorizontal:border,insideVertical:border};
    const tbl=rows=>new Table({width:{size:100,type:WidthType.PERCENTAGE},borders,rows});
    const head=(cols,ws)=>new TableRow({tableHeader:true,children:cols.map((h,i)=>cell(P(h,{bold:true,color:"FFFFFF",size:18}),{w:ws[i],fill:NAVY}))});
    const mods=[ORG,...TOPICS.filter(m=>selected.includes(m.id))].filter(Boolean);
    const all=counts(null);

    const children=[
      new Paragraph({spacing:{after:60},children:[new TextRun({text:"PROCES BOUWERS",bold:true,size:16,color:"7A5C14"})]}),
      new Paragraph({heading:HeadingLevel.TITLE,spacing:{after:80},children:[new TextRun({text:"AFAS Intake",bold:true,size:44,color:NAVY})]}),
      P(mods.filter(m=>!m.fixed).map(m=>m.title).join(" · "),{size:22,color:GREY,after:120}),
      P((org?"Organisatie: "+org+"   ·   ":"")+"Datum: "+now.toLocaleDateString("nl-NL",{dateStyle:"long"}),{after:200}),
      tbl([new TableRow({children:[
        cell(P("Wijkt af van advies: "+all.devs.length,{bold:true,color:WARN}),{w:34,fill:"FCEBD9"}),
        cell(P("Weet ik nog niet: "+all.unks.length,{bold:true,color:OPEN}),{w:33,fill:"E8EAF8"}),
        cell(P("Nog niet beantwoord: "+all.empties.length,{bold:true,color:GREY}),{w:33,fill:"F1F2F8"})]})])
    ];
    mods.forEach((m,mi)=>{
      if(mi>0) children.push(new Paragraph({children:[new PageBreak()]}));
      children.push(H(m.fixed?"Organisatie":m.title,HeadingLevel.HEADING_1,32));
      if(!m.fixed){
        children.push(P("Scope",{bold:true,color:NAVY,size:22}));
        children.push(tbl([head(["Onderdeel","Gebruiken?"],[65,35]),...m.sections.filter(secVisible).map(s=>{const v=scope[s.key];return new TableRow({children:[cell(P(s.title,{size:18}),{w:65}),cell(P(v?SCOPE_TXT[v]:"Nog niet gekozen",{size:18,bold:true,color:v==="ja"?OK:v==="later"?OPEN:v==="nee"?GREY:WARN}),{w:35})]})})]));
      }
      m.sections.filter(secVisible).forEach(s=>{
        children.push(H((m.fixed?"":s.num+". ")+s.title,HeadingLevel.HEADING_2,24));
        if(!secInScope(s)){children.push(P(scope[s.key]==="later"?"Scope: later (fase 2). Vragen niet ingevuld.":"Scope: niet gebruiken. Vragen niet ingevuld.",{italics:true,color:GREY}));return}
        if(owners[s.key]) children.push(P("Eigenaar: "+owners[s.key],{italics:true,color:GREY}));
        const rows=s.qs.filter(qShown).map(q=>{
          const a=answers[q.key]||{}, st=state(q);
          const ansP=[P(a.unk?"Weet ik nog niet":(answerLabel(q,a)||"—"),{size:18,italics:a.unk,color:a.unk?OPEN:undefined})];
          if(a.note) ansP.push(P("Toelichting: "+a.note,{size:16,color:GREY}));
          const stTxt={ok:"Volgens advies",dev:"Wijkt af",unk:"Open punt",done:"Ingevuld",empty:q.opt?"Optioneel":"Niet beantwoord"}[st];
          const stP=[P(stTxt,{size:16,bold:true,color:{dev:WARN,unk:OPEN,ok:OK}[st]||GREY})];
          if(st==="dev") stP.push(P("Advies: "+adviesLabel(q),{size:16,color:GREY}));
          return new TableRow({children:[cell(P(q.num,{size:16,color:GREY}),{w:7}),cell(P(q.l,{size:18}),{w:38}),cell(ansP,{w:33,fill:st==="dev"?"FCEBD9":st==="unk"?"E8EAF8":undefined}),cell(stP,{w:22})]});
        });
        children.push(tbl([head(["Nr","Vraag","Antwoord","Status / advies"],[7,38,33,22]),...rows]));
      });
    });
    const payload=JSON.stringify({app:"pb-intake",v:2,selected,answers,owners,scope,saved:now.toISOString()});
    children.push(P("",{after:400}));
    children.push(P("Technische gegevens om het formulier opnieuw in te lezen. Niet wijzigen.",{size:14,color:"AAAAAA"}));
    children.push(new Paragraph({children:[new TextRun({text:"PBDATA:"+b64enc(payload)+":PBEND",size:2,color:"FFFFFF"})]}));
    const doc=new Document({creator:"Proces Bouwers",title:"AFAS Intake",styles:{default:{document:{run:{font:"Montserrat",size:20,color:"1B1F3B"}}}},
      sections:[{properties:{page:{margin:{top:1000,bottom:1000,left:1000,right:1000}}},children}]});
    const blob=await Packer.toBlob(doc);
    saveBlob(blob,("AFAS Intake"+(org?" - "+org:"")+" "+now.toISOString().slice(0,10)+".docx").replace(/[\\/:*?"<>|]/g,""));
    toast("Word-bestand gedownload");
  }catch(err){console.error(err);toast("Downloaden lukte niet. Controleer je internetverbinding en probeer opnieuw.")}
  finally{btn.disabled=false;btn.textContent=old}
}

/* ---------- Importeren ---------- */
async function importFile(input){
  const f=input.files[0]; input.value=""; if(!f) return;
  try{
    let data;
    if(/\.json$/i.test(f.name)) data=JSON.parse(await f.text());
    else{
      const JSZip=await loadLib("JSZip");
      const zip=await JSZip.loadAsync(f);
      const xml=await zip.file("word/document.xml").async("string");
      const m=xml.replace(/<[^>]+>/g,"").match(/PBDATA:([A-Za-z0-9+\/=]+):PBEND/);
      if(!m) throw new Error("geen data");
      data=JSON.parse(b64dec(m[1]));
    }
    if(data&&data.app==="pb-intake-ws") data=fromLegacyWS(data);
    else if(!data||data.app!=="pb-intake") throw new Error("onbekend");
    if(Object.keys(answers).length && !(await confirmBox("Antwoorden vervangen?","De antwoorden in deze browser worden vervangen door die uit '"+f.name+"'.","Vervangen"))) return;
    applyData(data); meta={};
    saveLocal(); renderStart(); if(selected.length){renderForm();showView("sum")}else showView("start");
    window.scrollTo({top:0}); toast("Antwoorden ingelezen");
  }catch(err){toast("Dit bestand kan niet worden ingelezen. Gebruik een Word-bestand dat met dit formulier is gedownload.")}
}

/* ---------- Weergave ---------- */
function showView(v){
  if(v==="form"&&!selected.length) v="start";
  ["start","form","sum"].forEach(x=>{$("#view-"+x).hidden=x!==v;$("#tab-"+x).setAttribute("aria-pressed",String(x===v))});
  if(v==="start") renderStart();
  if((v==="form"||v==="sum")&&renderedFor!==selected.slice().sort().join(",")) renderForm();
  if(v==="sum") renderSummary();
  const h={start:"#start",form:"#formulier",sum:"#samenvatting"}[v]; if(location.hash!==h) history.replaceState(null,"",location.pathname+location.search+h);
}
window.addEventListener("hashchange",()=>showView(location.hash==="#samenvatting"?"sum":location.hash==="#formulier"?"form":"start"));
const io=new IntersectionObserver(es=>{es.forEach(en=>{if(en.isIntersecting){const k=en.target.id.slice(4);document.querySelectorAll(".nav button").forEach(b=>b.classList.toggle("on",domId(b.dataset.go||"")===k))}})},{rootMargin:"-30% 0px -60% 0px"});

/* ---------- Start ---------- */
loadLocal();
const pre=new URLSearchParams(location.search).get("kies");
if(pre){
  /* Voorselectie uit de link alleen bij een nieuw formulier, en daarna uit het adres halen */
  if(!selected.length) pre.split(",").forEach(id=>{if(MBY[id]&&!MBY[id].fixed&&!selected.includes(id))selected.push(id)});
  history.replaceState(null,"",location.pathname+location.hash);
}
setSave(meta.saved?"Opgeslagen in deze browser":"Nog niets ingevuld");
if(selected.length) renderForm();
const h=location.hash;
showView(h==="#samenvatting"?"sum":(h==="#formulier"||(!h&&selected.length&&Object.keys(answers).length))?"form":"start");
})();
