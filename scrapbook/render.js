// Scrapbook — presentation only. Copy comes from ../shared/content.js.
(function(){
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
  function el(id){ return document.getElementById(id); }

  // ransom-note: wrap each glyph as its own cut-out scrap
  function ransom(text){
    return text.split('').map(function(ch){
      if (ch === ' ') return '<span class="sp"></span>';
      return '<span class="g">'+esc(ch)+'</span>';
    }).join('');
  }
  document.querySelectorAll('[data-ransom]').forEach(function(node){
    node.innerHTML = ransom(node.getAttribute('data-ransom'));
  });

  // ── footer ──
  var foot = el('contact');
  if (foot) foot.innerHTML =
    '<a href="mailto:'+PERSON.email+'">'+PERSON.email+'</a>'+
    '<a href="'+PERSON.github+'" target="_blank" rel="noopener">github</a>'+
    '<a href="'+PERSON.linkedin+'" target="_blank" rel="noopener">linkedin</a>'+
    '<span class="sp">made with tape &amp; glue · '+new Date().getFullYear()+'</span>';

  // ── hero (index) ──
  if (el('eyebrow')) el('eyebrow').textContent = PERSON.role.toLowerCase() + ' · currently at UCLA';
  if (el('intro'))   el('intro').textContent   = PERSON.intro;
  if (el('facts')) {
    var facts = [
      ['based', PERSON.base[0]], ['since', PERSON.since],
      ['projects', PROJECTS.length], ['status', PERSON.available ? 'open to work!' : 'heads down']
    ];
    el('facts').innerHTML = facts.map(function(f, i){
      return '<span class="sticker'+(i===3 && PERSON.available ? ' on' : '')+'"><b>'+f[0]+'</b> '+f[1]+'</span>';
    }).join('');
  }
  if (el('about-copy'))
    el('about-copy').innerHTML = PERSON.about.map(function(p){ return '<p>'+esc(p)+'</p>'; }).join('');

  // ── cards ──
  var host = el('cards');
  if (host) {
    var list = host.getAttribute('data-show') === 'all' ? PROJECTS : PROJECTS.filter(featured);
    host.innerHTML = list.map(function(p){
      return '<a class="card paper taped'+(p.num % 2 ? '' : ' one')+'" href="case.html?p='+p.slug+'">'+
        '<div class="fignum">fig. '+p.num+'</div>'+
        '<div class="cphoto"><span class="cphotol">'+esc(p.ph)+'</span></div>'+
        '<div class="ctag">'+esc(p.cat.toLowerCase())+'</div>'+
        '<h3 class="ctitle">'+esc(p.title)+'</h3>'+
        '<p class="cdesc">'+esc(p.desc)+'</p>'+
        '<div class="cfoot"><span>'+esc(p.year)+'</span><span class="go">read it →</span></div>'+
      '</a>';
    }).join('');
  }

  // ── case study ──
  var root = el('case');
  if (!root) return;
  var slug = (location.search.match(/[?&]p=([^&]+)/) || [])[1], i = -1;
  PROJECTS.forEach(function(p, k){ if (p.slug === slug) i = k; });
  if (i < 0) { location.replace('work.html'); return; }
  var p = PROJECTS[i], next = PROJECTS[(i + 1) % PROJECTS.length];

  document.title = p.title + ' — ' + PERSON.name;
  var dm = document.querySelector('meta[name="description"]');
  if (dm) dm.setAttribute('content', p.lead);

  var links = p.links.length ? '<div class="clinks">' + p.links.map(function(l){
      return '<a href="'+l.url+'" target="_blank" rel="noopener">'+esc(l.label.toLowerCase())+' →</a>'; }).join('') + '</div>' : '';

  root.innerHTML = '<div class="wrap">'+
    '<section class="chero">'+
      '<p class="eyebrow">fig. '+p.num+' · '+esc(p.cat.toLowerCase())+'</p>'+
      '<h1 class="ctitle-big">'+esc(p.title)+'</h1>'+
      '<p class="clead">'+esc(p.lead)+'</p>'+ links +
      '<div class="specs">'+
        [['role',p.role],['timeline',p.timeline],['stack',p.stack],['status',p.status]].map(function(s,k){
          return '<div class="paper spec"><p class="k">'+s[0]+'</p><p class="v'+(k===3?' on':'')+'">'+s[1]+'</p></div>';
        }).join('')+
      '</div>'+
      '<div class="cover"><div class="cover-inner"><span class="cphotol">cover photo goes here</span></div>'+
        '<div class="cap">'+esc(p.title)+' — cover</div></div>'+
      '<div class="body">'+
        '<div class="block"><h3>the problem</h3>'+p.problem+'</div>'+
        '<div class="block"><h3>what I built</h3>'+p.built+'</div>'+
        '<div class="block"><h3>outcome</h3>'+p.outcome+'</div>'+
        '<div class="block"><h3>tools</h3><div class="chips">'+
          p.chips.map(function(c){ return '<span class="chip">'+esc(c.toLowerCase())+'</span>'; }).join('')+
        '</div></div>'+
      '</div>'+
      '<div class="gal">'+
        '<div class="polaroid taped one"><span class="pin"></span><div class="pi">fig. 02</div><span class="cap">detail</span></div>'+
        '<div class="polaroid taped one"><span class="pin"></span><div class="pi">fig. 03</div><span class="cap">detail</span></div>'+
      '</div>'+
      '<a class="paper nextp taped" href="case.html?p='+next.slug+'">'+
        '<div class="k">next in the book · fig. '+next.num+'</div>'+
        '<div class="t">'+esc(next.title)+' →</div></a>'+
    '</section></div>';
})();
