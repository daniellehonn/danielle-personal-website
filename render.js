// Micrographics x Utilitarian. Presentation only; copy lives in shared/content.js.
(function(){
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
  function el(id){ return document.getElementById(id); }

  // Local time where Danielle actually is, so a reader knows whether it's a
  // reasonable hour to expect a reply. A UTC clock told them nothing.
  var utc = el('utc');
  if (utc){
    var tick=function(){
      try {
        // en-US so the zone reads PDT/PST; en-GB renders it as a GMT offset.
        utc.textContent = 'LOS ANGELES ' + new Intl.DateTimeFormat('en-US',{
          timeZone:'America/Los_Angeles', hour:'2-digit', minute:'2-digit',
          hour12:false, timeZoneName:'short'}).format(new Date());
      } catch(e){ utc.textContent = 'LOS ANGELES'; }
    };
    tick(); setInterval(tick,30000);
  }

  // Last time this document actually changed. A real revision, not a fake one.
  var upd = el('upd');
  if (upd){
    var lm = new Date(document.lastModified);
    upd.textContent = isNaN(lm) ? 'UPD —' :
      'UPD ' + lm.getFullYear()+'.'+('0'+(lm.getMonth()+1)).slice(-2)+'.'+('0'+lm.getDate()).slice(-2);
  }

  // ── footer ──
  var foot = el('contact');
  if (foot){ foot.className='foot'; foot.innerHTML=
    '<span class="fitem k">Contact</span>'+
    '<a href="mailto:'+PERSON.email+'">'+PERSON.email+'</a>'+
    '<a href="'+PERSON.github+'" target="_blank" rel="noopener">GitHub</a>'+
    '<a href="'+PERSON.linkedin+'" target="_blank" rel="noopener">LinkedIn</a>'+
    '<a href="resume.pdf" target="_blank" rel="noopener">Résumé</a>'+
    '<span class="fitem sp">Los Angeles · '+new Date().getFullYear()+'</span>'; }

  // ── hero (index) ──
  if (el('intro')) el('intro').textContent = PERSON.intro;
  if (el('thesis')) el('thesis').textContent = PERSON.thesis;
  if (el('stamp')) el('stamp').innerHTML =
    PERSON.available ? '<span class="dot"></span>Open to Internships · Email Me' : 'Heads Down';

  // ── home (spacious landing) ──
  if (el('role')) el('role').textContent = PERSON.role;
  if (el('home-name')) el('home-name').innerHTML = esc(PERSON.name).replace(/\s+/, '<br>');
  if (el('home-thesis')) el('home-thesis').textContent = PERSON.thesis;
  if (el('ticker')){
    // Flavour only. Anything already stated above the fold is left out on purpose.
    var segs = ['Welcome to my corner of the internet','Currently building et al.',
      'Co-founding ContextForce since 2023','B.S. Computer Science, UCLA'];
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

  // data-limit lets the home page show a teaser while /about runs the full copy.
  var ac = el('about-copy');
  if (ac){
    var paras = PERSON.about, lim = parseInt(ac.getAttribute('data-limit'),10);
    if (lim) paras = paras.slice(0, lim);
    ac.innerHTML = paras.map(function(p){ return '<p>'+esc(p)+'</p>'; }).join('')
      + (lim ? '<p><a class="seclink" href="about.html">Read the full story →</a></p>' : '');
  }
  if (el('about-specs')) el('about-specs').innerHTML = [
    ['Location', PERSON.base[0]],
    ['Projects On File', PROJECTS.length],
    ['Status', PERSON.available ? '<span class="rust">OPEN TO INTERNSHIPS</span>' : 'CLOSED']
  ].map(function(r){ return '<tr><td>'+r[0]+'</td><td>'+r[1]+'</td></tr>'; }).join('');

  // ── cards ──
  var host = el('cards');
  if (host){
    var list = host.getAttribute('data-show')==='all' ? PROJECTS : PROJECTS.filter(featured);
    host.innerHTML = list.map(function(p){
      return '<a class="card" href="case.html?p='+p.slug+'">'+
        '<div class="cardtop"><span class="cnum">'+p.num+'</span><span class="ccode">'+esc(p.code)+'</span></div>'+
        '<div class="cimg"><span class="figtag">Outcome</span><div class="figstack mono">'+(p.metric||p.stack)+'</div></div>'+
        '<div class="cbody">'+
          '<div class="ctag">'+esc(p.cat)+'</div>'+
          '<h3 class="ctitle">'+esc(p.title)+'</h3>'+
          '<p class="cdesc">'+esc(p.desc)+'</p>'+
          '<div class="cfoot"><span>'+esc(p.year)+' · '+esc(p.loc)+'</span><span class="go">View →</span></div>'+
        '</div></a>';
    }).join('');
  }

  // ── work list (work.html): spacious editorial index ──
  var wl = el('worklist');
  if (wl) wl.innerHTML = PROJECTS.map(function(p,i){
    // One divider where the featured run ends. The tail is archive, not headline.
    var split = (i>0 && PROJECTS[i-1].feat && !p.feat)
      ? '<div class="wsplit"><span class="k">Also on file</span></div>' : '';
    var badges = p.links.map(function(l){
      return '<span class="wbadge">'+esc(l.label==='VIEW LIVE'?'LIVE':l.label)+'</span>'; }).join('');
    return split+'<a class="wrow reveal'+(p.feat?'':' arch')+'" href="case.html?p='+p.slug+'">'+
      '<span class="wnum disp">'+p.num+'</span>'+
      '<span class="wmain">'+
        '<span class="wname">'+esc(p.title)+'</span>'+
        '<span class="wdesc">'+esc(p.desc)+'</span>'+
        (badges ? '<span class="wlinks">'+badges+'</span>' : '')+
      '</span>'+
      '<span class="wmetric mono">'+(p.metric||'')+'</span>'+
      '<span class="wmeta"><span class="wcat">'+esc(p.cat)+'</span>'+
        '<span class="wyear mono">'+esc(p.year)+' · '+esc(p.loc)+'</span></span>'+
      '<span class="warr">&#8594;</span>'+
    '</a>';
  }).join('');

  // ── track record: roles and affiliations (about) ──
  if (el('exp') && typeof EXPERIENCE !== 'undefined') el('exp').innerHTML = EXPERIENCE.map(function(e,i){
    return '<article class="erow reveal stg-'+((i%6)+1)+'">'+
      '<div class="emeta"><span class="ecode mono">'+esc(e.code)+'</span>'+
        '<span class="eperiod mono">'+esc(e.period)+'</span></div>'+
      '<div class="ebody">'+
        '<h3 class="erole">'+esc(e.role)+'</h3>'+
        '<div class="eorg">'+esc(e.org)+' <span class="eloc">· '+esc(e.loc)+'</span></div>'+
        '<ul class="ebul">'+e.bullets.map(function(b){ return '<li>'+esc(b)+'</li>'; }).join('')+'</ul>'+
      '</div>'+
    '</article>';
  }).join('');

  // ── reveal on scroll: progressive enhancement over a visible default ──
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

  document.title = p.title+' · '+PERSON.name;
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
    // FIG 01 carries the result. It used to repeat the project code twice.
    '<div class="cover"><span class="tag">FIG 01 — Outcome</span>'+
      '<div class="plate"><div class="platestack">'+(p.metric||p.stack)+'</div>'+
        '<div class="platemeta mono">'+esc(p.code)+' · '+esc(p.year)+'</div></div></div>'+
    '<section class="pbody"><div class="pbtag">[ 01 ] Overview</div><div class="inner">'+
      '<div class="block"><h3>The Problem</h3>'+p.problem+'</div>'+
      '<div class="block"><h3>What I Built</h3>'+p.built+'</div>'+
      '<div class="block"><h3>Outcome</h3>'+p.outcome+'</div>'+
      '<div class="block"><h3>Tools</h3><div class="chips">'+
        p.chips.map(function(c){ return '<span class="chip">'+esc(c)+'</span>'; }).join('')+
      '</div></div>'+
    '</div></section>'+
    // Every case ends with a way out that isn't another case.
    '<section class="cend">'+
      '<div class="cendmain"><div class="k">[ 02 ] Get in touch</div>'+
        '<p class="cendlead">If this is the kind of work your team needs, I\'m open to internships.</p>'+
        '<div class="clinks">'+
          '<a href="mailto:'+PERSON.email+'">Email me →</a>'+
          '<a href="resume.pdf" target="_blank" rel="noopener">Résumé →</a>'+
        '</div>'+
      '</div>'+
      '<a class="cendnext" href="case.html?p='+next.slug+'">'+
        '<span class="k">Next · Case '+next.num+'</span>'+
        '<span class="t">'+esc(next.title)+' →</span></a>'+
    '</section>';
})();
