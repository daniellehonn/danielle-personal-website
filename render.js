// Micrographics × Utilitarian — presentation only. Copy from shared/content.js.
(function(){
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
  function el(id){ return document.getElementById(id); }

  // UTC readout
  var utc = el('utc');
  if (utc){
    var tick=function(){var d=new Date(),p=function(n){return('0'+n).slice(-2)};
      utc.textContent='UTC '+p(d.getUTCHours())+':'+p(d.getUTCMinutes());};
    tick(); setInterval(tick,1000);
  }

  // ── footer ──
  var foot = el('contact');
  if (foot){ foot.className='foot'; foot.innerHTML=
    '<span class="fitem k">Contact</span>'+
    '<a href="mailto:'+PERSON.email+'">'+PERSON.email+'</a>'+
    '<a href="'+PERSON.github+'" target="_blank" rel="noopener">GitHub</a>'+
    '<a href="'+PERSON.linkedin+'" target="_blank" rel="noopener">LinkedIn</a>'+
    '<span class="fitem sp">Los Angeles · '+new Date().getFullYear()+'</span>'; }

  // ── hero (index) ──
  if (el('intro')) el('intro').textContent = PERSON.intro;
  if (el('thesis')) el('thesis').textContent = PERSON.thesis;
  if (el('stamp')) el('stamp').innerHTML =
    PERSON.available ? '<span class="dot"></span>Available — New Projects' : 'Heads Down';

  // ── home (spacious landing) ──
  if (el('role')) el('role').textContent = PERSON.role;
  if (el('home-name')) el('home-name').innerHTML = esc(PERSON.name).replace(/\s+/, '<br>');
  if (el('home-thesis')) el('home-thesis').textContent = PERSON.thesis;
  if (el('ticker')){
    var segs = ['Los Angeles, CA','34.0689° N · 118.4452° W','Available for new projects',
      'Product · AI · Engineering','Welcome to my corner of the internet'];
    var row = '<div class="tickrow">'+segs.join('<span class="sep">/////</span>')+'<span class="sep">/////</span></div>';
    el('ticker').innerHTML = row + row;
  }

  if (el('hside')) el('hside').innerHTML = [
    ['Base', PERSON.base.join(' / ')],
    ['Focus', PERSON.disciplines.join(', ')],
    ['Active Since', PERSON.since]
  ].map(function(s,i){
    return '<div class="hspec reveal stg-'+(i+2)+'"><div class="k">'+s[0]+'</div><div class="v">'+esc(s[1])+'</div></div>';
  }).join('') + '<div class="hcat cyc" aria-hidden="true">'
    + '<img src="assets/cat01.png" alt="">'
    + '<img src="assets/cat02.png" alt="">'
    + '<img src="assets/cat03.png" alt="">'
    + '</div>';

  if (el('about-copy'))
    el('about-copy').innerHTML = PERSON.about.map(function(p){ return '<p>'+esc(p)+'</p>'; }).join('');
  if (el('about-specs')) el('about-specs').innerHTML = [
    ['Discipline', PERSON.disciplines.length + ' areas'],
    ['Projects On File', PROJECTS.length],
    ['Location', PERSON.base[0]],
    ['Status', PERSON.available ? '<span class="rust">OPEN</span>' : 'CLOSED']
  ].map(function(r){ return '<tr><td>'+r[0]+'</td><td>'+r[1]+'</td></tr>'; }).join('');

  // ── cards ──
  var host = el('cards');
  if (host){
    var list = host.getAttribute('data-show')==='all' ? PROJECTS : PROJECTS.filter(featured);
    host.innerHTML = list.map(function(p){
      return '<a class="card" href="case.html?p='+p.slug+'">'+
        '<div class="cardtop"><span class="cnum">'+p.num+'</span><span class="ccode">'+esc(p.code)+'</span></div>'+
        '<div class="cimg"><span class="figtag">Stack</span><div class="figstack mono">'+p.stack+'</div></div>'+
        '<div class="cbody">'+
          '<div class="ctag">'+esc(p.cat)+'</div>'+
          '<h3 class="ctitle">'+esc(p.title)+'</h3>'+
          '<p class="cdesc">'+esc(p.desc)+'</p>'+
          '<div class="cfoot"><span>'+esc(p.year)+' · '+esc(p.loc)+'</span><span class="go">View →</span></div>'+
        '</div></a>';
    }).join('');
  }

  // ── work list (work.html) — spacious editorial index ──
  var wl = el('worklist');
  if (wl) wl.innerHTML = PROJECTS.map(function(p){
    return '<a class="wrow reveal" href="case.html?p='+p.slug+'">'+
      '<span class="wnum disp">'+p.num+'</span>'+
      '<span class="wname">'+esc(p.title)+'</span>'+
      '<span class="wcat">'+esc(p.cat)+'</span>'+
      '<span class="wyear mono">'+esc(p.year)+'</span>'+
      '<span class="warr">&#8594;</span>'+
    '</a>';
  }).join('');

  // ── the thread (index/about) ──
  if (el('thread-copy'))
    el('thread-copy').innerHTML = PERSON.story.map(function(p){ return '<p>'+esc(p)+'</p>'; }).join('');
  if (el('arc') && typeof ARC !== 'undefined') el('arc').innerHTML = ARC.map(function(a,i){
    return '<a class="arcnode reveal stg-'+((i%6)+1)+'" href="case.html?p='+a.ref+'">'+
      '<div class="arctop"><span class="arcn disp">'+a.n+'</span><span class="arck">'+esc(a.k)+'</span></div>'+
      '<div class="arct">'+esc(a.t)+'</div>'+
      '<div class="arcd">'+esc(a.d)+'</div>'+
      '<div class="xtr mono"><span class="raw">'+esc(a.raw)+'</span>'+
        '<span class="arr">&#8594;</span>'+
        '<span class="parsed">'+esc(a.parsed).replace(/\n/g,'<br>')+'</span></div>'+
    '</a>';
  }).join('');

  // ── how I build (index) ──
  if (el('build-note'))
    el('build-note').innerHTML = 'This site was designed, critiqued and built <strong>agentically</strong> — the same way I ship everything: spec it, measure it, iterate. Below is how I work under the hood.';
  if (el('build') && typeof CAPABILITIES !== 'undefined') el('build').innerHTML = CAPABILITIES.map(function(c,i){
    return '<a class="brow reveal stg-'+((i%6)+1)+'" href="case.html?p='+c.ref+'">'+
      '<span class="bk">'+esc(c.k)+'</span>'+
      '<span class="bt">'+esc(c.t)+'</span>'+
      '<span class="bd">'+esc(c.d)+'</span>'+
      '<span class="bcode">'+esc(c.code)+'</span>'+
    '</a>';
  }).join('');

  // ── range: the colophon — this design is live, the rest live in /designs ──
  var DESIGNS = [
    {n:'01', name:'Micro × Utilitarian',href:'index.html',                       sw:['#E7EAEC','#17150F','#43616D','#B83C24'], here:true},
    {n:'02', name:'Micrographics',      href:'designs/micrographics/index.html', sw:['#F0EEE9','#17150F','#43616D','#C1432A']},
    {n:'03', name:'Utilitarian',        href:'designs/utilitarian/index.html',   sw:['#E4E4E1','#141413','#E4502B','#D8D8D4']},
    {n:'04', name:'Registry',           href:'designs/registry/index.html',      sw:['#E4E0D7','#1C2733','#2E4A5E','#C9A227']}
  ];
  if (el('range')) el('range').innerHTML = DESIGNS.map(function(d){
    return '<a class="rcell'+(d.here?' here':'')+'" href="'+d.href+'">'+
      '<div class="rtop"><span class="rn">'+d.n+'</span>'+(d.here?'<span class="rhere">YOU ARE HERE</span>':'')+'</div>'+
      '<div class="rsw">'+d.sw.map(function(c){ return '<i style="background:'+c+'"></i>'; }).join('')+'</div>'+
      '<div class="rname">'+esc(d.name)+'</div>'+
    '</a>';
  }).join('');

  // ── reveal on scroll — progressive enhancement over a visible default ──
  (function(){
    var nodes = document.querySelectorAll('.reveal');
    if (!nodes.length) return;
    if (!('IntersectionObserver' in window)){
      for (var i=0;i<nodes.length;i++) nodes[i].classList.add('in');
      return;
    }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: .16, rootMargin: '0px 0px -8% 0px' });
    nodes.forEach(function(n){ io.observe(n); });
  })();

  // ── case study ──
  var root = el('case');
  if (!root) return;
  var slug = (location.search.match(/[?&]p=([^&]+)/)||[])[1], i=-1;
  PROJECTS.forEach(function(p,k){ if(p.slug===slug) i=k; });
  if (i<0){ location.replace('work.html'); return; }
  var p = PROJECTS[i], next = PROJECTS[(i+1)%PROJECTS.length];
  var total = ('00'+PROJECTS.length).slice(-3);

  document.title = p.title+' — '+PERSON.name;
  var dm = document.querySelector('meta[name="description"]');
  if (dm) dm.setAttribute('content', p.lead);

  var links = p.links.length ? '<div class="clinks">'+p.links.map(function(l){
      return '<a href="'+l.url+'" target="_blank" rel="noopener">'+esc(l.label)+' →</a>'; }).join('')+'</div>' : '';

  root.innerHTML =
    '<section class="chero">'+
      '<span class="cross" style="left:14px;top:14px"></span>'+
      '<div class="ceyebrow">'+esc(p.cat)+' — CASE '+p.num+' / '+total+'</div>'+
      '<h1 class="ctitle-big">'+esc(p.title)+'</h1>'+
      '<p class="clead">'+esc(p.lead)+'</p>'+ links +
      '<div class="csysid">SYS. ID — '+p.sysid+'</div>'+
    '</section>'+
    '<section class="specs">'+
      [['Role',p.role],['Timeline',p.timeline],['Stack',p.stack],['Status',p.status]].map(function(s,k){
        return '<div class="spec"><div class="k">'+s[0]+'</div><div class="v'+(k===3?' rust':'')+'">'+s[1]+'</div></div>';
      }).join('')+
    '</section>'+
    '<div class="cover"><span class="tag">FIG 01 — '+esc(p.code)+'</span>'+
      '<div class="plate"><div class="platecode disp">'+esc(p.code)+'</div>'+
        '<div class="platemeta mono">'+esc(p.cat)+' · '+esc(p.year)+'</div></div></div>'+
    '<section class="pbody"><div class="pbtag">[ 01 ] Overview</div><div class="inner">'+
      '<div class="block"><h3>The Problem</h3>'+p.problem+'</div>'+
      '<div class="block"><h3>What I Built</h3>'+p.built+'</div>'+
      '<div class="block"><h3>Outcome</h3>'+p.outcome+'</div>'+
      '<div class="block"><h3>Tools</h3><div class="chips">'+
        p.chips.map(function(c){ return '<span class="chip">'+esc(c)+'</span>'; }).join('')+
      '</div></div>'+
    '</div></section>'+
    '<div class="gal">'+
      '<div class="cover"><span class="tag">FIG 02 — ROLE</span><div class="plate"><div class="platemeta mono">'+esc(p.role)+'</div></div></div>'+
      '<div class="cover"><span class="tag">FIG 03 — TIMELINE</span><div class="plate"><div class="platemeta mono">'+esc(p.timeline)+'</div></div></div>'+
    '</div>'+
    '<a class="nextp" href="case.html?p='+next.slug+'">'+
      '<span class="k">Next — Case '+next.num+'</span>'+
      '<span class="t">'+esc(next.title)+' →</span></a>';
})();
