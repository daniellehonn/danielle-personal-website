// Registry — presentation only. Copy from ../shared/content.js.
// Projects rendered as packages. Metadata is real; nothing fabricated.
(function(){
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
  function el(id){ return document.getElementById(id); }
  function statusClass(s){ s=(s||'').toUpperCase();
    return s==='ONGOING'||s==='PROTOTYPE' ? 'wip' : s==='SHIPPED' ? 'ship' : ''; }

  // ── footer ──
  var foot = el('contact');
  if (foot) foot.innerHTML =
    '<a href="mailto:'+PERSON.email+'">'+PERSON.email+'</a>'+
    '<a href="'+PERSON.github+'" target="_blank" rel="noopener">GitHub</a>'+
    '<a href="'+PERSON.linkedin+'" target="_blank" rel="noopener">LinkedIn</a>'+
    '<span class="sp">© '+new Date().getFullYear()+' · '+PROJECTS.length+' packages</span>';

  // ── owner header (index) ──
  if (el('bio')) el('bio').textContent = PERSON.intro;
  if (el('pills')){
    el('pills').innerHTML =
      '<span class="pill"><b>'+PROJECTS.length+'</b> packages</span>'+
      '<span class="pill"><b>'+PERSON.disciplines.length+'</b> categories</span>'+
      '<span class="pill">since <b>'+PERSON.since+'</b></span>'+
      '<span class="pill">'+esc(PERSON.base[0])+'</span>'+
      (PERSON.available ? '<span class="pill ok"><span class="dot"></span>open to new work</span>' : '');
  }

  // ── package list + filter ──
  var host = el('cards');
  if (host){
    var all = host.getAttribute('data-show') === 'all' ? PROJECTS : PROJECTS.filter(featured);
    var cats = ['All'].concat(all.map(function(p){return p.cat;}).filter(function(c,i,a){return a.indexOf(c)===i;}));
    var active = 'All';

    var base = location.origin + location.pathname.replace(/[^/]*$/, '');
    function pkgRow(p){
      var url = 'case.html?p='+p.slug;
      // NOTE: the row is a <div>, not an <a> — a row-level handler navigates.
      // Nesting <button>/<a> inside an <a> is invalid and the parser splits it.
      var meta = ['<span class="m">v'+esc(p.year)+'</span>',
                  '<span class="m">'+esc(p.loc)+'</span>'];
      p.links.forEach(function(l){
        meta.push('<a href="'+l.url+'" target="_blank" rel="noopener">'+esc(l.label.toLowerCase())+'</a>');
      });
      meta.push('<button class="copy" data-copy="'+esc(base+url)+'">copy link</button>');
      return '<div class="pkg" data-href="'+url+'" data-cat="'+esc(p.cat)+'" tabindex="0" role="link">'+
        '<div class="pkg-head">'+
          '<a class="pkg-name" href="'+url+'">@daniellehon/'+esc(p.slug)+'</a>'+
          '<span class="badge type">'+esc(p.cat.toLowerCase())+'</span>'+
          (statusClass(p.status) ? '<span class="badge '+statusClass(p.status)+'">'+esc(p.status.toLowerCase())+'</span>' : '')+
          '<span class="pkg-ver">'+esc(p.code)+'</span>'+
        '</div>'+
        '<p class="pkg-desc">'+esc(p.desc)+'</p>'+
        '<div class="pkg-meta">'+meta.join('')+'</div>'+
      '</div>';
    }

    function paint(){
      var list = active==='All' ? all : all.filter(function(p){return p.cat===active;});
      host.innerHTML = list.length ? list.map(pkgRow).join('') : '<div class="empty">No packages match this filter.</div>';
      if (el('count')) el('count').innerHTML = '<b>'+list.length+'</b> package'+(list.length===1?'':'s')+
        (active==='All'?'':' · '+esc(active.toLowerCase()));
      wireCopy();
    }

    if (el('filters')){
      el('filters').innerHTML = cats.map(function(c){
        return '<button class="filt'+(c===active?' on':'')+'" data-cat="'+esc(c)+'">'+esc(c==='All'?'All':c.toLowerCase())+'</button>';
      }).join('');
      el('filters').addEventListener('click', function(e){
        var b=e.target.closest('.filt'); if(!b) return;
        active=b.getAttribute('data-cat');
        el('filters').querySelectorAll('.filt').forEach(function(x){x.classList.toggle('on',x===b);});
        paint();
      });
    }
    paint();

    // row navigation: click/Enter anywhere except a real link or button
    function rowNav(target){ if (target && target.getAttribute) location.href = target.getAttribute('data-href'); }
    host.addEventListener('click', function(e){
      if (e.target.closest('a, button')) return;      // let links/buttons act
      rowNav(e.target.closest('.pkg'));
    });
    host.addEventListener('keydown', function(e){
      if (e.key !== 'Enter') return;
      var row = e.target.closest('.pkg');
      if (row && !e.target.closest('a, button')) { e.preventDefault(); rowNav(row); }
    });

    // live search (index only; input is disabled elsewhere)
    var sb = el('search');
    if (sb && !sb.disabled){
      sb.addEventListener('input', function(){
        var q = sb.value.trim().toLowerCase();
        host.querySelectorAll('.pkg').forEach(function(row){
          var hit = row.textContent.toLowerCase().indexOf(q) !== -1;
          row.style.display = hit ? '' : 'none';
        });
      });
    }
  }

  function wireCopy(){
    document.querySelectorAll('.copy[data-copy]').forEach(function(btn){
      btn.addEventListener('click', function(){
        var txt = btn.getAttribute('data-copy');
        (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(function(){
          var was = btn.textContent; btn.textContent='copied ✓'; btn.classList.add('done');
          setTimeout(function(){ btn.textContent=was; btn.classList.remove('done'); }, 1400);
        }).catch(function(){});
      });
    });
  }

  // ── package detail (case) ──
  var root = el('case');
  if (!root) return;
  var slug = (location.search.match(/[?&]p=([^&]+)/) || [])[1], i = -1;
  PROJECTS.forEach(function(p, k){ if (p.slug === slug) i = k; });
  if (i < 0) { location.replace('work.html'); return; }
  var p = PROJECTS[i], next = PROJECTS[(i + 1) % PROJECTS.length];

  document.title = '@daniellehon/'+p.slug+' — '+PERSON.name;
  var dm = document.querySelector('meta[name="description"]');
  if (dm) dm.setAttribute('content', p.lead);

  var side = ''+
    '<div class="grp"><div class="lbl">Type</div><div class="val">'+esc(p.cat)+'</div></div>'+
    '<div class="grp"><div class="lbl">Version</div><div class="val mono">'+esc(p.code)+' · '+esc(p.year)+'</div></div>'+
    '<div class="grp"><div class="lbl">Role</div><div class="val">'+p.role+'</div></div>'+
    '<div class="grp"><div class="lbl">Timeline</div><div class="val">'+p.timeline+'</div></div>'+
    '<div class="grp"><div class="lbl">Stack</div><div class="val">'+p.stack+'</div></div>'+
    '<div class="grp"><div class="lbl">Status</div><div class="val'+(statusClass(p.status)==='ship'?' ok':'')+'">'+p.status+'</div></div>';
  if (p.links.length) side += '<div class="grp"><div class="lbl">Links</div>'+
    p.links.map(function(l){ return '<a class="lnk" href="'+l.url+'" target="_blank" rel="noopener">'+esc(l.label.toLowerCase())+'<span class="arw">↗</span></a>'; }).join('')+'</div>';

  var badges = '<span class="badge type">'+esc(p.cat.toLowerCase())+'</span>'+
    (statusClass(p.status) ? '<span class="badge '+statusClass(p.status)+'">'+esc(p.status.toLowerCase())+'</span>' : '')+
    '<span class="badge">'+esc(p.loc.toLowerCase())+'</span>';

  root.innerHTML = '<div class="wrap"><div class="detail">'+
    '<div class="readme">'+
      '<div class="readme-head">'+
        '<div class="crumb"><a href="work.html">packages</a> / @daniellehon/'+esc(p.slug)+'</div>'+
        '<h1 class="d-name">@daniellehon/'+esc(p.slug)+'</h1>'+
        '<div class="d-badges">'+badges+'</div>'+
        '<p class="d-lead">'+esc(p.lead)+'</p>'+
        '<div class="install"><span class="p">$</span><span class="mono" id="inst">open @daniellehon/'+esc(p.slug)+'</span>'+
          '<button class="copy" data-copy="'+esc(location.origin+location.pathname)+'?p='+p.slug+'">copy</button></div>'+
      '</div>'+
      '<div class="cover">FIG 01 — COVER · DROP IMAGE</div>'+
      '<div class="block"><h3>The problem</h3>'+p.problem+'</div>'+
      '<div class="block"><h3>What I built</h3>'+p.built+'</div>'+
      '<div class="block"><h3>Outcome</h3>'+p.outcome+'</div>'+
      '<div class="block"><h3>Keywords</h3><div class="keywords">'+
        p.chips.map(function(c){ return '<span class="kw">'+esc(c.toLowerCase().replace(/\s+/g,'-'))+'</span>'; }).join('')+
      '</div></div>'+
    '</div>'+
    '<aside class="side">'+side+'</aside>'+
  '</div></div>'+
  '<a class="nextbar" href="case.html?p='+next.slug+'"><div class="in">'+
    '<div><div class="k">Next package</div><div class="t">@daniellehon/'+esc(next.slug)+'</div></div>'+
    '<span class="k">→</span></div></a>';
  wireCopy();
})();
