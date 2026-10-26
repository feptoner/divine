/* Divine Coaching Centre: hash router + pages. No dependencies.
   ADD REAL NOTES: push objects into RESOURCES, e.g.
   {id:'phy12-1',subject:'Physics',cls:'12',title:'Physics Class 12 notes',url:'notes/physics-12.pdf'}
   (cls: '10' | '12' | 'any'). Put the files in a notes/ folder next to index.html. */
(() => {
'use strict';
const PH = '919236581919', TEL = 'tel:+919236581919';
const ADDR = '529 Patel Nagar, Ghosiyana Rd, Khaira, Gonda, Uttar Pradesh 271003, India';
const DIR = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(ADDR);
const MAP = 'https://maps.google.com/maps?q=' + encodeURIComponent(ADDR) + '&output=embed';
const wa = t => 'https://wa.me/' + PH + '?text=' + encodeURIComponent(t);
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => '&#' + c.charCodeAt(0) + ';');

const SUB = [
  ['Physics', '⚛️', 'Understand how the physical world works, with guidance for board preparation.'],
  ['Chemistry', '🧪', 'Make sense of matter and reactions with clear, exam-focused support.'],
  ['Biology', '🧬', 'Explore living systems and build confidence for board examinations.'],
  ['Psychology', '🧠', 'Learn how the mind and behaviour are studied, with structured study support.'],
  ['English', '📖', 'Strengthen reading, writing and grammar for board examinations.'],
  ['Sociology', '👥', 'Understand society and its institutions through clear explanations.'],
  ['Home Science', '🏠', 'Everyday science of nutrition, care and home management.']
];
const IMG = [
  { s: 'images/divine-classroom.jpg', w: 1041, h: 1400, p: 'center 30%', c: 'Divine Classroom', a: 'Classroom with rows of blue desk-chairs and a Divine Classroom sign above a shelf of books' },
  { s: 'images/divine-neon.jpg', w: 875, h: 1400, p: 'center 35%', c: 'Divine entrance', a: 'Glowing Divine neon sign above a potted palm lit in green' },
  { s: 'images/divine-session.jpg', w: 1400, h: 1058, p: '30% center', c: 'A session at Divine Institute', a: 'Instructor holding a framed certificate beside a student in front of a whiteboard, with seated students applauding' }
];
const RESOURCES = []; /* real notes go here */
const CL = { '10': 'Class 10', '12': 'Class 12', any: 'Class to be confirmed' };
const allRes = () => [...RESOURCES, ...SUB.filter(s => !RESOURCES.some(r => r.subject === s[0]))
  .map(s => ({ id: 'soon-' + s[0], subject: s[0], cls: 'any', title: s[0] + ' study notes', url: '' }))];
const icon = n => (SUB.find(s => s[0] === n) || [, '📘'])[1];
const stars = '<span class="st" role="img" aria-label="4.9 out of 5 stars">★★★★★</span>';
const pic = (i, lazy) => `<img src="${IMG[i].s}" alt="${esc(IMG[i].a)}" width="${IMG[i].w}" height="${IMG[i].h}" style="object-position:${IMG[i].p}"${lazy ? ' loading="lazy"' : ''}>`;
const opts = (arr, ph, sel) => `<option value="">${ph}</option>` + arr.map(x => `<option${x === sel ? ' selected' : ''}>${x}</option>`).join('');
const names = SUB.map(s => s[0]);
const callBtn = '<a class="btn alt" href="' + TEL + '">📞 Call +91 9236581919</a>';
const waBtn = (t, l) => `<a class="btn gold" href="${wa(t)}" target="_blank" rel="noopener">💬 ${l || 'WhatsApp us'}</a>`;
const subCard = (s, i) => `<article class="card" style="--i:${i}"><span class="ic" aria-hidden="true">${s[1]}</span><h3>${s[0]}</h3><p>${s[2]}</p><a class="lnk" href="#/courses?q=${encodeURIComponent(s[0])}">Course details →</a></article>`;
const courseCard = (s, i) => `<article class="card" style="--i:${i}"><span class="ic" aria-hidden="true">${s[1]}</span><h3>${s[0]}</h3><p>${s[2]}</p><p>Class availability: please confirm with the centre.</p><a class="lnk" href="#/admission?s=${encodeURIComponent(s[0])}">Enquire about ${s[0]} →</a></article>`;
const resCard = (r, i) => `<article class="card" style="--i:${i}"><span class="bd ${r.url ? 'ok' : ''}">${r.url ? 'Available' : 'Coming soon'}</span><h3>${icon(r.subject)} ${esc(r.title)}</h3><p>${esc(r.subject)} · ${CL[r.cls] || ''}</p><button class="btn alt sm" style="margin-top:1rem" type="button" data-act="det" data-id="${esc(r.id)}">View details</button></article>`;

/* ---------- pages ---------- */
const home = () => `
<section class="hero"><div class="wrap hg">
<div><span class="pill rv"><i></i>UP Board Class 10 &amp; Class 12</span>
<h1 class="rv" style="--i:1">Build Your <em>Future</em> with Divine Coaching Centre</h1>
<p class="lead rv" style="--i:2">Focused academic guidance for UP Board High School and Intermediate students, with subject-specific learning and study support.</p>
<div class="btns rv" style="--i:3"><a class="btn" href="#/courses">Explore Courses →</a><a class="btn alt" href="#/admission">Enquire About Admission</a></div>
<p class="rv" style="--i:4">${stars} <b>4.9</b> on Google Reviews · Khaira, Gonda</p></div>
<div class="art rv" style="--i:2">${pic(0).replace('<img', '<img class="a1"')}${pic(1).replace('<img', '<img class="a2"')}<span class="chip c1">📚 Class 10 &amp; 12</span><span class="chip c2">⭐ 4.9 Google</span></div>
</div></section>
<section><div class="wrap"><div class="sh2 rv"><p class="eb">Academic focus</p><h2>Two board pathways, one clear plan</h2></div>
<div class="grid">
<article class="card n rv"><span class="num">10</span><h3>UP Board High School</h3><p>Guidance for students preparing for the Class 10 board examinations.</p><a class="lnk" href="#/admission">Ask about Class 10 →</a></article>
<article class="card n rv" style="--i:1"><span class="num">12</span><h3>UP Board Intermediate</h3><p>Guidance for students preparing for the Class 12 board examinations.</p><a class="lnk" href="#/admission">Ask about Class 12 →</a></article>
</div><p class="mut rv" style="margin-top:1.2rem">Subject availability can differ by class. Please confirm with the centre before enrolling.</p></div></section>
<section><div class="wrap"><div class="sh2 rv"><p class="eb">Subjects</p><h2>Seven subjects to choose from</h2><p>Pick a subject to see how to enquire.</p></div>
<div class="grid">${SUB.map(subCard).join('')}</div></div></section>
<section><div class="wrap two"><div class="stack rv"><div class="ph big">${pic(2, 1)}</div><div class="ph ov">${pic(1, 1)}</div></div>
<div class="rv" style="--i:1"><p class="eb">About Divine</p><h2>A learning space in the heart of Khaira, Gonda</h2>
<p class="lead">Divine Coaching Centre supports students preparing for UP Board High School and Intermediate examinations across Physics, Chemistry, Biology, Psychology, English, Sociology and Home Science. For batches, timings and fees, please speak to the centre directly.</p>
<div class="btns"><a class="btn" href="#/admission">Admission enquiry</a><a class="btn alt" href="#/contact">Contact &amp; location</a></div></div></div></section>
<section><div class="wrap"><div class="sh2 rv" style="display:flex;justify-content:space-between;align-items:end;gap:1rem;max-width:none"><div><p class="eb">Gallery</p><h2>Inside Divine</h2></div>
<div class="cn"><button class="rb" type="button" data-act="car" data-d="-1" aria-label="Scroll gallery left">‹</button><button class="rb" type="button" data-act="car" data-d="1" aria-label="Scroll gallery right">›</button></div></div>
<div class="car" id="car" role="region" aria-label="Photo gallery">${IMG.map((m, i) => `<button class="gi" type="button" data-act="lb" data-i="${i}" aria-label="Enlarge photo: ${esc(m.c)}">${pic(i, 1)}<span>${esc(m.c)}</span></button>`).join('')}</div>
<button class="btn alt" type="button" data-act="lb" data-i="0">View Gallery</button></div></section>
<section><div class="wrap trust">
<div class="panel rv"><p class="eb">Trusted by families</p><p class="big-n">4.9</p><p>${stars}</p><p class="mut">Rating on Google Reviews</p></div>
<div class="panel rv" style="--i:1"><h3>Visit or call us</h3><address class="info" style="margin:.8rem 0"><span>${ADDR}</span><a href="${TEL}"><b>+91 9236581919</b></a></address>
<div class="btns" style="margin:0">${callBtn}<a class="btn" href="${DIR}" target="_blank" rel="noopener">Get Directions</a></div></div></div></section>
<section><div class="wrap"><div class="cta rv"><h2>Ready to start your preparation?</h2><p>Tell us the class and subject you are interested in. We will guide you on the next steps.</p><div class="btns"><a class="btn gold" href="#/admission">Enquire About Admission</a><a class="btn alt" href="#/contact">Contact Us</a></div></div></div></section>`;

const courses = p => {
  const q = p.get('q') || '';
  return `<section class="pg"><div class="wrap"><div class="sh2"><p class="eb">Courses</p><h1>Subjects at Divine</h1><p>Subject guidance for UP Board High School (Class 10) and Intermediate (Class 12) students.</p></div>
<div class="tools"><label>Search subjects<input id="q" type="search" value="${esc(q)}" placeholder="e.g. Physics" autocomplete="off"></label>
<label>Exam pathway<select id="cls"><option value="">All pathways</option><option value="10">Class 10 (High School)</option><option value="12">Class 12 (Intermediate)</option></select></label></div>
<p id="cnote" class="mut" role="status" style="margin:-.8rem 0 1.4rem"></p><div class="grid" id="clist">${SUB.filter(s => s[0].toLowerCase().includes(q.toLowerCase())).map(courseCard).join('')}</div></div></section>`;
};
const notes = () => `<section class="pg"><div class="wrap"><div class="sh2"><p class="eb">Notes</p><h1>Study resources</h1><p>Browse by subject and class. Entries marked “Coming soon” are placeholders, not downloadable notes yet.</p></div>
<div class="tools" style="grid-template-columns:repeat(auto-fit,minmax(200px,1fr))"><label>Search<input id="q" type="search" placeholder="Search notes" autocomplete="off"></label>
<label>Subject<select id="sb">${opts(names, 'All subjects')}</select></label>
<label>Class<select id="cls"><option value="">All classes</option><option value="10">Class 10</option><option value="12">Class 12</option></select></label></div>
<p id="ncount" class="mut" role="status" style="margin:-.8rem 0 1.4rem"></p><div class="grid" id="nlist"></div>
<div class="cta" style="margin-top:3rem"><h2>Need study material?</h2><p>Ask the centre which notes are available for your class and subject.</p><div class="btns">${waBtn('Hello Divine Coaching Centre, I would like to know about available study notes.', 'Ask on WhatsApp')}</div></div></div></section>`;

const field = (id, label, inner, req) => `<label for="${id}">${label}${req ? ' <b aria-hidden="true">*</b><span class="mut"> (required)</span>' : ''}${inner}<span class="err" id="e-${id}" role="alert"></span></label>`;
const admission = p => `<section class="pg"><div class="wrap two" style="align-items:start"><div><p class="eb">Admission</p><h1>Start your <em>enquiry</em> today</h1>
<p class="lead">For students and parents considering UP Board Class 10 or Class 12 preparation. Share a few details and we will help with the next steps.</p>
<div class="grid" style="margin-top:2.2rem;grid-template-columns:1fr">
<article class="card n"><span class="num">1</span><h3>Fill in the form</h3><p>Tell us the class and subject you are interested in.</p></article>
<article class="card n" style="--i:1"><span class="num">2</span><h3>Review the message</h3><p>We prepare a WhatsApp message. Nothing is sent until you press send in WhatsApp.</p></article>
<article class="card n" style="--i:2"><span class="num">3</span><h3>The centre replies</h3><p>Prefer a call? Dial the centre directly.</p></article></div>
<div class="btns">${callBtn}</div></div>
<form class="panel" id="adm" data-wa="adm" novalidate aria-label="Admission enquiry form">
${field('sn', 'Student name', '<input id="sn" data-v="n" autocomplete="name" aria-describedby="e-sn">', 1)}
${field('pn', 'Parent / guardian name', '<input id="pn" autocomplete="off">')}
${field('ph', 'Contact phone number', '<input id="ph" data-v="p" type="tel" inputmode="tel" autocomplete="tel" placeholder="10-digit mobile number" aria-describedby="e-ph">', 1)}
${field('cl', 'Class', '<select id="cl" data-v="r" aria-describedby="e-cl"><option value="">Choose class</option><option value="10th">10th (High School)</option><option value="12th">12th (Intermediate)</option></select>', 1)}
${field('sb', 'Subject of interest', `<select id="sb" data-v="r" aria-describedby="e-sb">${opts(names, 'Choose subject', p.get('s'))}</select>`, 1)}
${field('ms', 'Message (optional)', '<textarea id="ms" rows="3"></textarea>')}
<button class="btn" type="submit">Continue on WhatsApp</button><div class="out" aria-live="polite"></div></form></div></section>`;

const contact = () => `<section class="pg"><div class="wrap"><div class="sh2"><p class="eb">Contact</p><h1>Talk to Divine Coaching Centre</h1></div>
<div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))">
<div class="cc rv"><h2>Divine Coaching Centre</h2><p>${stars} <b>4.9</b> on Google Reviews</p><address class="info">${ADDR}</address><p>Phone: <a href="${TEL}"><b>+91 9236581919</b></a></p>
<div class="btns" style="margin:0"><a class="btn gold" href="${TEL}">📞 Call now</a>${waBtn('Hello Divine Coaching Centre, I have a question.', 'WhatsApp')}<a class="btn alt" href="${DIR}" target="_blank" rel="noopener">Get Directions</a></div></div>
<div class="rv" style="--i:1"><iframe class="map" title="Map search for the Divine Coaching Centre address" loading="lazy" src="${MAP}"></iframe><p class="mut" style="margin-top:.6rem;font-size:.9rem">This map searches the address above. If it does not load, <a href="${DIR}" target="_blank" rel="noopener">open directions in Google Maps</a>.</p></div></div>
<form class="panel" id="ct" data-wa="ct" novalidate style="margin-top:2rem;max-width:640px" aria-label="Contact form"><h2>Send a message</h2>
${field('cn', 'Your name', '<input id="cn" data-v="n" autocomplete="name" aria-describedby="e-cn">', 1)}
${field('cm', 'Message', '<textarea id="cm" data-v="r" rows="4" aria-describedby="e-cm"></textarea>', 1)}
<button class="btn" type="submit">Continue on WhatsApp</button><div class="out" aria-live="polite"></div></form></div></section>`;

const ROUTES = {
  home: ['Divine Coaching Centre, Gonda | UP Board Class 10 & 12', home],
  courses: ['Courses | Divine Coaching Centre', courses],
  notes: ['Notes | Divine Coaching Centre', notes],
  admission: ['Admission Enquiry | Divine Coaching Centre', admission],
  contact: ['Contact & Location | Divine Coaching Centre', contact]
};

/* ---------- router ---------- */
const app = $('#app'); let io;
function reveal() {
  io && io.disconnect(); const els = $$('.rv');
  if (!('IntersectionObserver' in window)) return els.forEach(e => e.classList.add('in'));
  io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }), { threshold: .12 });
  els.forEach(e => io.observe(e));
}
function setMenu(on) { document.body.classList.toggle('menu', on); const b = $('#mb'); b.setAttribute('aria-expanded', on); b.textContent = on ? '✕' : '☰'; b.setAttribute('aria-label', on ? 'Close menu' : 'Open menu'); }
function route() {
  const [path, qs] = (location.hash.slice(2) || 'home').split('?');
  const k = ROUTES[path] ? path : 'home', r = ROUTES[k];
  app.innerHTML = r[1](new URLSearchParams(qs || ''));
  document.title = r[0]; setMenu(false);
  $$('#nav a[data-r]').forEach(a => a.dataset.r === k ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'));
  refresh(); reveal(); window.scrollTo(0, 0); app.focus({ preventScroll: true });
}
function refresh() {
  const q = (($('#q') || {}).value || '').trim().toLowerCase(), cls = ($('#cls') || {}).value || '';
  const cl = $('#clist'), nl = $('#nlist');
  if (cl) {
    const l = SUB.filter(s => s[0].toLowerCase().includes(q));
    cl.innerHTML = l.length ? l.map(courseCard).join('') : '<div class="panel empty" style="grid-column:1/-1"><h3>No subject matches your search</h3><p class="mut">Try another name, or ask the centre what is available.</p></div>';
    $('#cnote').textContent = cls ? (cls === '10' ? 'UP Board High School (Class 10)' : 'UP Board Intermediate (Class 12)') + ': subject availability can differ by class, so please confirm with the centre.' : '';
  }
  if (nl) {
    const sb = $('#sb').value;
    const l = allRes().filter(r => (!sb || r.subject === sb) && (!cls || r.cls === cls || r.cls === 'any') && (r.title + ' ' + r.subject).toLowerCase().includes(q));
    nl.innerHTML = l.length ? l.map(resCard).join('') : `<div class="panel empty" style="grid-column:1/-1"><h3>No resources found</h3><p class="mut">Try a different search or filter, or ask the centre directly.</p><div class="btns" style="justify-content:center">${waBtn('Hello Divine Coaching Centre, I am looking for study notes.', 'Ask on WhatsApp')}</div></div>`;
    $('#ncount').textContent = l.length + ' resource' + (l.length === 1 ? '' : 's') + ' shown';
  }
}

/* ---------- lightbox, details, theme ---------- */
const lb = $('#lb'), dt = $('#dt'); let li = 0;
function showLb(i) { li = (i + IMG.length) % IMG.length; const m = IMG[li], im = $('#lbi'); im.src = m.s; im.alt = m.a; $('#lbc').textContent = m.c + ' (' + (li + 1) + ' of ' + IMG.length + ')'; }
function details(id) {
  const r = allRes().find(x => x.id === id); if (!r) return;
  $('#dtb').innerHTML = `<span class="bd ${r.url ? 'ok' : ''}">${r.url ? 'Available' : 'Coming soon'}</span><h2 id="dtt">${esc(r.title)}</h2><p class="mut">${esc(r.subject)} · ${CL[r.cls] || ''}</p>` +
    (r.url ? `<p style="margin:1rem 0">Open the file in a new tab or download it.</p><div class="btns" style="margin:0"><a class="btn" href="${esc(r.url)}" target="_blank" rel="noopener">Open</a><a class="btn alt" href="${esc(r.url)}" download>Download</a></div><p id="dtn" class="err" role="status"></p>`
      : `<p style="margin:1rem 0">This resource has not been uploaded yet, so there is nothing to download. Ask the centre about material for this subject.</p><div class="btns" style="margin:0">${waBtn('Hello Divine Coaching Centre, I would like study material for ' + r.subject + '.', 'Ask on WhatsApp')}</div>`);
  if (r.url) fetch(r.url, { method: 'HEAD' }).then(x => { if (!x.ok) throw 0; }).catch(() => { $('#dtn').textContent = 'This file could not be reached right now. Please ask the centre for a copy.'; });
  dt.showModal();
}
const paint = () => { const d = document.documentElement.dataset.theme === 'dark', b = $('#th'); b.textContent = d ? '☀️' : '🌙'; b.setAttribute('aria-label', d ? 'Switch to light mode' : 'Switch to dark mode'); };

/* ---------- forms ---------- */
function validate(f) {
  let first = null;
  $$('[data-v]', f).forEach(el => {
    const v = el.value.trim(), t = el.dataset.v;
    const ok = t === 'p' ? /^(?:\+?91)?[6-9]\d{9}$/.test(v.replace(/[\s-]/g, '')) : t === 'n' ? v.length > 1 : v !== '';
    $('#e-' + el.id).textContent = ok ? '' : t === 'p' ? 'Enter a valid 10-digit Indian mobile number.' : t === 'n' ? 'Please enter at least 2 characters.' : 'This field is required.';
    ok ? el.removeAttribute('aria-invalid') : el.setAttribute('aria-invalid', 'true');
    if (!ok && !first) first = el;
  });
  first && first.focus(); return !first;
}
document.addEventListener('submit', e => {
  const f = e.target; if (!f.dataset.wa) return; e.preventDefault(); if (!validate(f)) return;
  const v = id => ($('#' + id, f) || {}).value ? $('#' + id, f).value.trim() : '';
  const msg = f.dataset.wa === 'adm'
    ? ['Hello Divine Coaching Centre, I would like to enquire about admission.', 'Student: ' + v('sn'), v('pn') && 'Parent/Guardian: ' + v('pn'), 'Phone: ' + v('ph'), 'Class: ' + v('cl'), 'Subject of interest: ' + v('sb'), v('ms') && 'Message: ' + v('ms')].filter(Boolean).join('\n')
    : 'Hello Divine Coaching Centre, I am ' + v('cn') + '.\n' + v('cm');
  const url = wa(msg), out = $('.out', f);
  out.innerHTML = `<p><b>Your message is ready.</b> WhatsApp should open in a new tab. Nothing has been sent until you press send there. If it did not open, use the buttons below.</p><pre></pre><div class="btns" style="margin:0"><a class="btn gold" href="${url}" target="_blank" rel="noopener">Open WhatsApp</a>${callBtn}<button class="btn alt" type="button" data-act="copy">Copy message</button></div>`;
  $('pre', out).textContent = msg; window.open(url, '_blank', 'noopener');
});

/* ---------- delegated events ---------- */
document.addEventListener('click', e => {
  if (e.target === lb || e.target === dt) return e.target.close();
  if (e.target.closest('#nav a')) setMenu(false);
  const t = e.target.closest('[data-act]'); if (!t) return;
  const a = t.dataset.act;
  if (a === 'theme') { const n = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.theme = n; try { localStorage.setItem('dcc-theme', n); } catch (_) {} paint(); }
  else if (a === 'menu') setMenu(!document.body.classList.contains('menu'));
  else if (a === 'lb') { showLb(+t.dataset.i); lb.showModal(); }
  else if (a === 'prev') showLb(li - 1);
  else if (a === 'next') showLb(li + 1);
  else if (a === 'close') t.closest('dialog').close();
  else if (a === 'car') { const c = $('#car'); c.scrollBy({ left: +t.dataset.d * c.clientWidth * .8, behavior: 'smooth' }); }
  else if (a === 'det') details(t.dataset.id);
  else if (a === 'copy') navigator.clipboard.writeText($('pre', t.closest('.out')).textContent).then(() => { t.textContent = 'Copied ✓'; }, () => { t.textContent = 'Select the text above to copy'; });
});
document.addEventListener('input', e => { if (['q', 'cls', 'sb'].includes(e.target.id) && (e.target.closest('.tools'))) refresh(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') setMenu(false);
  if (lb.open) { if (e.key === 'ArrowLeft') showLb(li - 1); if (e.key === 'ArrowRight') showLb(li + 1); }
});
let tx = 0;
lb.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
lb.addEventListener('touchend', e => { const d = e.changedTouches[0].clientX - tx; if (Math.abs(d) > 50) showLb(li + (d < 0 ? 1 : -1)); });
document.addEventListener('error', e => { if (e.target.tagName === 'IMG') e.target.classList.add('bad'); }, true);
window.addEventListener('hashchange', route);
$('#yr').textContent = new Date().getFullYear();
paint(); route();
})();
