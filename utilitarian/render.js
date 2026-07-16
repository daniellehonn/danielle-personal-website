// Utilitarian — presentation only. Copy comes from ../shared/content.js.
(function(){
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
  function el(id){ return document.getElementById(id); }

  // ── UTC readout (instrument bar) ──
  var utc = el('utc');
  if (utc){
    var tick=function(){var d=new Date(),p=function(n){return('0'+n).slice(-2)};
      utc.textContent='UTC '+p(d.getUTCHours())+':'+p(d.getUTCMinutes());};
    tick(); setInterval(tick,1000);
  }

  // ── footer (every page) ──
  var foot = el('contact');
  if (foot){ foot.className='foot'; foot.innerHTML=
    '<span class="fitem k">Contact</span>'+
    '<a href="mailto:'+PERSON.email+'">'+PERSON.email+'</a>'+
    '<a href="'+PERSON.github+'" target="_blank" rel="noopener">GitHub</a>'+
    '<a href="'+PERSON.linkedin+'" target="_blank" rel="noopener">LinkedIn</a>'+
    '<span class="fitem sp">Los Angeles · '+new Date().getFullYear()+'</span>'; }

  // ── hero (index) ──
  if (el('role'))  el('role').textContent  = PERSON.role;
  if (el('intro')) el('intro').textContent = PERSON.intro;
  if (el('status')) el('status').innerHTML =
    PERSON.available ? '<span class="dot"></span>Available — new projects' : 'Heads down';
  if (el('hside')) el('hside').innerHTML = [
    ['Base', PERSON.base.join(' / ')],
    ['Focus', PERSON.disciplines.join(', ')],
    ['Active since', PERSON.since]
  ].map(function(s){
    return '<div class="hspec"><div class="k">'+s[0]+'</div><div class="v">'+esc(s[1])+'</div></div>';
  }).join('') + '<div class="hcat"><img src="../assets/cat01.png" alt=""></div>';

  if (el('about-copy'))
    el('about-copy').innerHTML = '<div class="k" style="margin-bottom:14px">About</div>' +
      PERSON.about.map(function(p){ return '<p>'+esc(p)+'</p>'; }).join('');
  if (el('about-specs')) el('about-specs').innerHTML = [
    ['Discipline', PERSON.disciplines.length + ' areas'],
    ['Projects on file', PROJECTS.length],
    ['Location', PERSON.base[0]],
    ['Status', PERSON.available ? 'OPEN' : 'CLOSED']
  ].map(function(r){ return '<tr><td>'+r[0]+'</td><td>'+esc(String(r[1]))+'</td></tr>'; }).join('');

  // ── cards ──
  var host = el('cards');
  if (host){
    var list = host.getAttribute('data-show')==='all' ? PROJECTS : PROJECTS.filter(featured);
    host.innerHTML = list.map(function(p){
      return '<a class="card" href="case.html?p='+p.slug+'">'+
        '<div class="cardtop"><span class="cnum">'+p.num+'</span><span class="ccode">'+esc(p.code)+'</span></div>'+
        '<div class="cimg"><span class="cimgl">'+esc(p.ph)+'</span></div>'+
        '<div class="cbody">'+
          '<div class="ctag">'+esc(p.cat)+'</div>'+
          '<h3 class="ctitle">'+esc(p.title)+'</h3>'+
          '<p class="cdesc">'+esc(p.desc)+'</p>'+
          '<div class="cfoot"><span>'+esc(p.year)+' · '+esc(p.loc)+'</span><span class="go">View →</span></div>'+
        '</div></a>';
    }).join('');
  }

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
      '<div class="ceyebrow">'+esc(p.cat)+' — CASE '+p.num+' / '+total+'</div>'+
      '<h1 class="ctitle-big">'+esc(p.title)+'</h1>'+
      '<p class="clead">'+esc(p.lead)+'</p>'+ links +
    '</section>'+
    '<section class="specs">'+
      [['Role',p.role],['Timeline',p.timeline],['Stack',p.stack],['Status',p.status]].map(function(s,k){
        return '<div class="spec"><div class="k">'+s[0]+'</div><div class="v'+(k===3?' haz':'')+'">'+s[1]+'</div></div>';
      }).join('')+
    '</section>'+
    '<div class="cover"><span class="tag">FIG 01 — COVER</span><span class="cimgl">DROP COVER IMAGE</span></div>'+
    '<section class="pbody"><div class="pbtag">[ 01 ] Overview</div><div class="inner">'+
      '<div class="block"><h3>The Problem</h3>'+p.problem+'</div>'+
      '<div class="block"><h3>What I Built</h3>'+p.built+'</div>'+
      '<div class="block"><h3>Outcome</h3>'+p.outcome+'</div>'+
      '<div class="block"><h3>Tools</h3><div class="chips">'+
        p.chips.map(function(c){ return '<span class="chip">'+esc(c)+'</span>'; }).join('')+
      '</div></div>'+
    '</div></section>'+
    '<div class="gal">'+
      '<div class="cover"><span class="cimgl">FIG 02</span></div>'+
      '<div class="cover"><span class="cimgl">FIG 03</span></div>'+
    '</div>'+
    '<a class="nextp" href="case.html?p='+next.slug+'">'+
      '<span class="k">Next — Case '+next.num+'</span>'+
      '<span class="t">'+esc(next.title)+' →</span></a>';
})();
