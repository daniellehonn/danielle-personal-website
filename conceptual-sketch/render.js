// Conceptual Sketch — presentation only. Copy lives in ../shared/content.js.
(function(){
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
  function el(id){ return document.getElementById(id); }

  // ── footer (every page) ──
  var foot = el('contact');
  if (foot) foot.innerHTML =
    '<img class="brandcat" src="../assets/cat02.png" alt="">'+
    '<a href="mailto:'+PERSON.email+'">'+PERSON.email+'</a>'+
    '<a href="'+PERSON.github+'" target="_blank" rel="noopener">GitHub</a>'+
    '<a href="'+PERSON.linkedin+'" target="_blank" rel="noopener">LinkedIn</a>'+
    '<span class="sp">drawn in Los Angeles, '+new Date().getFullYear()+'</span>';

  // ── hero bits (index only) ──
  if (el('eyebrow')) el('eyebrow').textContent = PERSON.role.toLowerCase() + ', currently at UCLA';
  if (el('intro'))   el('intro').textContent   = PERSON.intro;
  if (el('facts')) {
    var facts = [
      ['Based', PERSON.base[0]], ['Since', PERSON.since],
      ['Projects', PROJECTS.length], ['Status', PERSON.available ? 'open to new work' : 'heads down']
    ];
    el('facts').innerHTML = facts.map(function(f, i){
      var on = i === 3 && PERSON.available ? ' on' : '';
      return '<span class="fact'+on+'"><b>'+f[0]+'</b> — '+f[1]+'</span>';
    }).join('');
  }
  if (el('about-copy'))
    el('about-copy').innerHTML = PERSON.about.map(function(p){ return '<p>'+esc(p)+'</p>'; }).join('');

  // ── cards ──
  var host = el('cards');
  if (host) {
    var list = host.getAttribute('data-show') === 'all' ? PROJECTS : PROJECTS.filter(featured);
    host.innerHTML = list.map(function(p){
      return '<a class="card sketchbox'+(p.num % 2 ? '' : ' alt')+'" href="case.html?p='+p.slug+'">'+
        '<div class="fignum">fig. '+p.num+'</div>'+
        '<div class="cimg"><span class="cimgl">sketch of '+esc(p.title)+'</span></div>'+
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
  var d = document.querySelector('meta[name="description"]');
  if (d) d.setAttribute('content', p.lead);

  var links = p.links.length ? '<div class="clinks">' + p.links.map(function(l){
      return '<a href="'+l.url+'" target="_blank" rel="noopener">'+esc(l.label.toLowerCase())+' →</a>';
    }).join('') + '</div>' : '';

  root.innerHTML =
    '<section class="chero"><div class="wrap">'+
      '<p class="eyebrow">fig. '+p.num+' — '+esc(p.cat.toLowerCase())+'</p>'+
      '<h1 class="ctitle-big">'+esc(p.title)+'</h1>'+
      '<p class="clead">'+esc(p.lead)+'</p>'+ links +
      '<div class="specs">'+
        [['Role',p.role],['Timeline',p.timeline],['Stack',p.stack],['Status',p.status]].map(function(s,k){
          return '<div class="spec sketchbox'+(k%2?' alt':'')+'"><p class="k">'+s[0].toLowerCase()+'</p>'+
                 '<p class="v'+(k===3?' on':'')+'">'+s[1]+'</p></div>';
        }).join('')+
      '</div>'+
      '<div class="cover sketchbox"><span class="cimgl">cover sketch goes here</span></div>'+
      '<div class="body">'+
        '<div class="block"><h3>The problem</h3>'+p.problem+'</div>'+
        '<div class="block"><h3>What I built</h3>'+p.built+'</div>'+
        '<div class="block"><h3>Outcome</h3>'+p.outcome+'</div>'+
        '<div class="block"><h3>Tools</h3><div class="chips">'+
          p.chips.map(function(c){ return '<span class="chip">'+esc(c.toLowerCase())+'</span>'; }).join('')+
        '</div></div>'+
      '</div>'+
      '<div class="gal">'+
        '<div class="cover sketchbox"><span class="cimgl">fig. 02</span></div>'+
        '<div class="cover sketchbox alt"><span class="cimgl">fig. 03</span></div>'+
      '</div>'+
      '<div class="rule"></div>'+
      '<a class="nextp" href="case.html?p='+next.slug+'">'+
        '<div class="k">next — fig. '+next.num+'</div>'+
        '<div class="t">'+esc(next.title)+' →</div></a>'+
    '</div></section>';
})();
