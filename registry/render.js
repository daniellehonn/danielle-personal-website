// Registry (pi.dev idiom) — presentation only. Copy from ../shared/content.js.
// Projects as catalogue packages. Metadata is real; nothing fabricated.
(function(){
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
  function el(id){ return document.getElementById(id); }
  function statusTag(s){ s=(s||'').toUpperCase();
    var c = s==='SHIPPED' ? 'ship' : (s==='ONGOING'||s==='PROTOTYPE') ? 'wip' : '';
    return c ? '<span class="tag '+c+'">'+esc(s.toLowerCase())+'</span>' : ''; }
  var base = location.origin + location.pathname.replace(/[^/]*$/, '');

  // ── footer ──
  var foot = el('contact');
  if (foot) foot.innerHTML =
    '<a href="mailto:'+PERSON.email+'">'+PERSON.email+'</a>'+
    '<a href="'+PERSON.github+'" target="_blank" rel="noopener">GitHub</a>'+
    '<a href="'+PERSON.linkedin+'" target="_blank" rel="noopener">LinkedIn</a>'+
    '<span class="sp">© '+new Date().getFullYear()+' · '+PROJECTS.length+' packages · Los Angeles</span>';

  // ── pills (index) ──
  if (el('pills')) el('pills').innerHTML =
    '<span class="pill"><b>'+PROJECTS.length+'</b> packages</span>'+
    '<span class="pill"><b>'+PERSON.disciplines.length+'</b> types</span>'+
    '<span class="pill">since <b>'+PERSON.since+'</b></span>'+
    '<span class="pill">'+esc(PERSON.base[0])+'</span>'+
    (PERSON.available ? '<span class="pill ok"><span class="dot"></span>open to new work</span>' : '');

  // row-level navigation (rows are divs, not anchors — avoids nested <a>/<button>)
  function wireNav(host){
    host.addEventListener('click', function(e){
      if (e.target.closest('a, button')) return;
      var r = e.target.closest('[data-href]'); if (r) location.href = r.getAttribute('data-href');
    });
    host.addEventListener('keydown', function(e){
      if (e.key !== 'Enter') return;
      var r = e.target.closest('[data-href]');
      if (r && !e.target.closest('a, button')) { e.preventDefault(); location.href = r.getAttribute('data-href'); }
    });
  }
  function wireCopy(scope){
    (scope||document).querySelectorAll('.copy[data-copy]').forEach(function(btn){
      btn.addEventListener('click', function(){
        var t=btn.getAttribute('data-copy');
        (navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){
          var w=btn.textContent; btn.textContent='copied'; btn.classList.add('done');
          setTimeout(function(){btn.textContent=w;btn.classList.remove('done');},1300);
        }).catch(function(){});
      });
    });
  }

  // ── featured (index): compact mini cards ──
  var feat = el('featured');
  if (feat){
    var f = PROJECTS.filter(featured);
    if (el('feat-count')) el('feat-count').textContent = f.length + ' shown';
    var fhtml = f.map(function(p){
      return '<div class="mini" data-href="case.html?p='+p.slug+'" tabindex="0" role="link">'+
        '<div class="nm">@daniellehon/'+esc(p.slug)+'</div>'+
        '<div class="ds">'+esc(p.desc)+'</div>'+
        '<div class="ts">'+esc(p.cat)+' · '+esc(p.year)+'</div>'+
      '</div>';
    }).join('');
    for (var fp=(4-f.length%4)%4; fp>0; fp--) fhtml += '<div class="mini filler" aria-hidden="true"></div>';
    feat.innerHTML = fhtml;
    wireNav(feat);
  }

  // ── all packages: filter bar + wide cards ──
  var host = el('cards');
  if (host){
    var all = PROJECTS.slice();
    var cats = ['All types'].concat(all.map(function(p){return p.cat;}).filter(function(c,i,a){return a.indexOf(c)===i;}));
    var state = { q:'', type:'All types', sort:'num' };

    if (el('filterbar')) el('filterbar').innerHTML =
      '<input id="q" type="text" placeholder="Filter packages…" aria-label="Filter packages">'+
      '<select id="type" aria-label="Type">'+cats.map(function(c){return '<option>'+esc(c)+'</option>';}).join('')+'</select>'+
      '<select id="sort" aria-label="Sort">'+
        '<option value="num">Catalogue order</option><option value="year">Newest first</option><option value="az">A–Z</option>'+
      '</select>'+
      '<button class="btn" id="do-search">[ Search ]</button>'+
      '<button class="btn" id="do-reset">[ Reset ]</button>';

    function card(p){
      var meta = ['<span class="tag">'+esc(p.cat.toLowerCase())+'</span>', statusTag(p.status),
                  '<span>v'+esc(p.year)+'</span>','<span>'+esc(p.loc)+'</span>'];
      p.links.forEach(function(l){ meta.push('<a href="'+l.url+'" target="_blank" rel="noopener">'+esc(l.label.toLowerCase())+'</a>'); });
      meta.push('<button class="copy" data-copy="'+esc(base+'case.html?p='+p.slug)+'">copy link</button>');
      return '<div class="wide" data-href="case.html?p='+p.slug+'" tabindex="0" role="link">'+
        '<div class="thumb">'+p.num+'</div>'+
        '<div class="body">'+
          '<a class="nm" href="case.html?p='+p.slug+'">@daniellehon/'+esc(p.slug)+'</a>'+
          '<div class="ds">'+esc(p.desc)+'</div>'+
          '<div class="mt">'+meta.filter(Boolean).join('')+'</div>'+
        '</div></div>';
    }
    function apply(){
      var list = all.filter(function(p){
        if (state.type!=='All types' && p.cat!==state.type) return false;
        if (state.q && (p.title+' '+p.desc+' '+p.slug+' '+p.cat+' '+p.chips.join(' ')).toLowerCase().indexOf(state.q)===-1) return false;
        return true;
      });
      if (state.sort==='year') list.sort(function(a,b){return (b.year+'').localeCompare(a.year+'');});
      else if (state.sort==='az') list.sort(function(a,b){return a.title.localeCompare(b.title);});
      else list.sort(function(a,b){return a.num.localeCompare(b.num);});
      var chtml = list.map(card).join('');
      for (var cp=(2-list.length%2)%2; cp>0 && list.length; cp--) chtml += '<div class="wide filler" aria-hidden="true"></div>';
      host.innerHTML = list.length ? chtml : '<div class="empty">No packages match.</div>';
      if (el('all-count')) el('all-count').textContent = list.length
        ? '1–'+list.length+' / '+all.length : '0 / '+all.length;
      wireCopy(host);
    }
    var qi=el('q'), ty=el('type'), so=el('sort');
    if (qi) qi.addEventListener('input', function(){ state.q=qi.value.trim().toLowerCase(); apply(); });
    if (ty) ty.addEventListener('change', function(){ state.type=ty.value; apply(); });
    if (so) so.addEventListener('change', function(){ state.sort=so.value; apply(); });
    if (el('do-search')) el('do-search').addEventListener('click', apply);
    if (el('do-reset')) el('do-reset').addEventListener('click', function(){
      state={q:'',type:'All types',sort:'num'}; if(qi)qi.value=''; if(ty)ty.value='All types'; if(so)so.value='num'; apply();
    });
    wireNav(host);
    apply();
  }

  // ── package detail ──
  var root = el('case');
  if (!root) return;
  var slug = (location.search.match(/[?&]p=([^&]+)/)||[])[1], i=-1;
  PROJECTS.forEach(function(p,k){ if(p.slug===slug) i=k; });
  if (i<0){ location.replace('work.html'); return; }
  var p = PROJECTS[i], next = PROJECTS[(i+1)%PROJECTS.length];

  document.title = '@daniellehon/'+p.slug+' — '+PERSON.name;
  var dm=document.querySelector('meta[name="description"]'); if(dm) dm.setAttribute('content',p.lead);

  var side = ''+
    '<div class="grp"><div class="lbl">Type</div><div class="val">'+esc(p.cat)+'</div></div>'+
    '<div class="grp"><div class="lbl">Version</div><div class="val">'+esc(p.code)+' · '+esc(p.year)+'</div></div>'+
    '<div class="grp"><div class="lbl">Role</div><div class="val">'+p.role+'</div></div>'+
    '<div class="grp"><div class="lbl">Timeline</div><div class="val">'+p.timeline+'</div></div>'+
    '<div class="grp"><div class="lbl">Stack</div><div class="val">'+p.stack+'</div></div>'+
    '<div class="grp"><div class="lbl">Status</div><div class="val'+((p.status||'').toUpperCase()==='SHIPPED'?' ok':'')+'">'+p.status+'</div></div>'+
    '<div class="grp"><div class="lbl">Published from</div><div class="val">'+esc(p.loc)+'</div></div>';
  if (p.links.length) side += '<div class="grp"><div class="lbl">Links</div>'+
    p.links.map(function(l){ return '<a class="lnk" href="'+l.url+'" target="_blank" rel="noopener">'+esc(l.label.toLowerCase())+'<span class="arw">↗</span></a>'; }).join('')+'</div>';

  root.innerHTML = '<div class="wrap"><div class="detail">'+
    '<div>'+
      '<div class="crumb"><a href="work.html">packages</a> / @daniellehon/'+esc(p.slug)+'</div>'+
      '<h1 class="d-name">@daniellehon/'+esc(p.slug)+'</h1>'+
      '<div class="d-badges"><span class="tag">'+esc(p.cat.toLowerCase())+'</span>'+statusTag(p.status)+
        '<span class="tag">'+esc(p.loc.toLowerCase())+'</span></div>'+
      '<p class="d-lead">'+esc(p.lead)+'</p>'+
      '<div class="install"><span class="p">$</span><span class="cmd">open @daniellehon/'+esc(p.slug)+'</span>'+
        '<button class="copy" data-copy="'+esc(location.href.split('#')[0])+'">copy</button></div>'+
      '<div class="readme">'+
        '<div class="cover">Fig 01 — cover · drop image</div>'+
        '<div class="block"><h3>The problem</h3>'+p.problem+'</div>'+
        '<div class="block"><h3>What I built</h3>'+p.built+'</div>'+
        '<div class="block"><h3>Outcome</h3>'+p.outcome+'</div>'+
        '<div class="block"><h3>Keywords</h3><div class="keywords">'+
          p.chips.map(function(c){ return '<span class="kw">'+esc(c.toLowerCase().replace(/\s+/g,'-'))+'</span>'; }).join('')+
        '</div></div>'+
      '</div>'+
    '</div>'+
    '<aside class="side">'+side+'</aside>'+
  '</div></div>'+
  '<a class="nextbar" href="case.html?p='+next.slug+'"><div class="in">'+
    '<div><div class="k">Next package</div><div class="t">@daniellehon/'+esc(next.slug)+'</div></div>'+
    '<span class="k">→</span></div></a>';
  wireCopy(root);
})();
