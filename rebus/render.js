// Rebus — presentation only. Copy comes from ../shared/content.js.
// The gimmick: certain nouns are swapped for pictograms. The decoder key in
// the About section spells out every symbol used, so nothing is a dead end.
(function(){
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
  function el(id){ return document.getElementById(id); }

  // word -> emoji. Whole-word, case-insensitive. Also the About decoder key.
  var MAP = [
    ['AI','🤖'], ['product','📦'], ['products','📦'], ['engineering','⚙️'],
    ['browsing','🌐'], ['browser','🌐'], ['PDFs','📄'], ['PDF','📄'],
    ['documents','📄'], ['data','📊'], ['search','🔍'], ['agents','🕵️'],
    ['air','💨'], ['courses','🎓'], ['course','🎓'], ['code','💻'],
    ['models','🧠'], ['interfaces','🖥️'], ['interface','🖥️'], ['shipping','🚀'],
    ['tools','🛠️'], ['research','🔬']
  ];
  var CAT_PIC = { 'AI PRODUCT':'📦','APPLIED RESEARCH':'🔬','AI ENGINEERING':'⚙️','INTERFACE':'🖥️' };

  // replace whole words in a plain string; returns HTML
  function rebus(text){
    var used = {};
    var html = esc(text).replace(/\b([A-Za-z]+)\b/g, function(m){
      for (var i=0;i<MAP.length;i++){
        if (MAP[i][0].toLowerCase() === m.toLowerCase()){
          used[MAP[i][1]] = MAP[i][0];
          return '<span class="pic rb" title="'+MAP[i][0]+'">'+MAP[i][1]+'</span>';
        }
      }
      return m;
    });
    return html;
  }

  // ── footer ──
  var foot = el('contact');
  if (foot) foot.innerHTML =
    '<a href="mailto:'+PERSON.email+'">'+PERSON.email+'</a>'+
    '<a href="'+PERSON.github+'" target="_blank" rel="noopener">GitHub</a>'+
    '<a href="'+PERSON.linkedin+'" target="_blank" rel="noopener">LinkedIn</a>'+
    '<span class="sp">Los Angeles · '+new Date().getFullYear()+'</span>';

  // ── hero (index) ──
  if (el('statement')){
    // a hand-built rebus line; the nouns are the puzzle
    el('statement').innerHTML =
      'I build <span class="pic rb" title="AI">🤖</span> '+
      '<span class="pic rb" title="products">📦</span> people actually '+
      '<span class="pic rb" title="reach for">🤩</span>.';
  }
  if (el('sub')) el('sub').innerHTML = rebus(PERSON.intro);
  if (el('meta')){
    el('meta').innerHTML =
      '<span><b>Based</b>'+esc(PERSON.base[0])+'</span>'+
      '<span><b>Since</b>'+esc(PERSON.since)+'</span>'+
      '<span><b>Projects</b>'+PROJECTS.length+'</span>'+
      '<span class="'+(PERSON.available?'on':'')+'"><b style="color:inherit;opacity:.7">Status</b>'+
        (PERSON.available?'open to new work':'heads down')+'</span>';
  }

  // ── about + decoder key ──
  if (el('about-copy'))
    el('about-copy').innerHTML = PERSON.about.map(function(p){ return '<p>'+rebus(p)+'</p>'; }).join('');
  if (el('decoder-rows'))
    el('decoder-rows').innerHTML = MAP.filter(function(m,i,a){
      return a.findIndex(function(x){return x[1]===m[1]}) === i;   // unique emoji
    }).map(function(m){
      return '<div class="row"><span class="e">'+m[1]+'</span><span class="arrow">→</span><span>'+m[0]+'</span></div>';
    }).join('');

  // ── cards ──
  var host = el('cards');
  if (host){
    var list = host.getAttribute('data-show')==='all' ? PROJECTS : PROJECTS.filter(featured);
    host.innerHTML = list.map(function(p){
      return '<a class="card" href="case.html?p='+p.slug+'">'+
        '<div class="cpic">'+(CAT_PIC[p.cat]||'🔹')+'</div>'+
        '<div class="ctag">'+esc(p.cat)+'</div>'+
        '<h3 class="ctitle">'+esc(p.title)+'</h3>'+
        '<p class="cdesc">'+esc(p.desc)+'</p>'+
        '<div class="cfoot"><span class="cnum">Fig. '+p.num+' · '+esc(p.year)+'</span>'+
          '<span class="go">Read →</span></div>'+
      '</a>';
    }).join('');
  }

  // ── case study ──
  var root = el('case');
  if (!root) return;
  var slug = (location.search.match(/[?&]p=([^&]+)/)||[])[1], i=-1;
  PROJECTS.forEach(function(p,k){ if(p.slug===slug) i=k; });
  if (i<0){ location.replace('work.html'); return; }
  var p = PROJECTS[i], next = PROJECTS[(i+1)%PROJECTS.length];
  var pic = CAT_PIC[p.cat] || '🔹';

  document.title = p.title+' — '+PERSON.name;
  var dm = document.querySelector('meta[name="description"]');
  if (dm) dm.setAttribute('content', p.lead);

  var links = p.links.length ? '<div class="clinks">'+p.links.map(function(l){
      return '<a href="'+l.url+'" target="_blank" rel="noopener">'+esc(l.label)+' →</a>'; }).join('')+'</div>' : '';

  root.innerHTML = '<div class="wrap">'+
    '<section class="chero">'+
      '<div class="ceyebrow"><span class="e">'+pic+'</span>'+esc(p.cat)+' · Fig. '+p.num+'</div>'+
      '<h1 class="ctitle-big">'+esc(p.title)+'</h1>'+
      '<p class="clead">'+rebus(p.lead)+'</p>'+ links +
    '</section>'+
    '<div class="specs">'+
      [['Role',p.role],['Timeline',p.timeline],['Stack',p.stack],['Status',p.status]].map(function(s,k){
        return '<div class="spec"><p class="k">'+s[0]+'</p><p class="v'+(k===3?' on':'')+'">'+s[1]+'</p></div>';
      }).join('')+
    '</div>'+
    '<div class="cover"><span class="e">'+pic+'</span></div>'+
    '<div class="body">'+
      '<div class="block"><h3><span class="e">❓</span>The problem</h3>'+p.problem+'</div>'+
      '<div class="block"><h3><span class="e">🛠️</span>What I built</h3>'+p.built+'</div>'+
      '<div class="block"><h3><span class="e">🎯</span>Outcome</h3>'+p.outcome+'</div>'+
      '<div class="block"><h3><span class="e">🧰</span>Tools</h3><div class="chips">'+
        p.chips.map(function(c){ return '<span class="chip">'+esc(c)+'</span>'; }).join('')+
      '</div></div>'+
    '</div>'+
    '<div class="gal"><div class="g"><span class="e">'+pic+'</span></div>'+
      '<div class="g"><span class="e">'+pic+'</span></div></div>'+
    '<a class="nextp" href="case.html?p='+next.slug+'">'+
      '<span class="k">Next · Fig. '+next.num+'</span>'+
      '<span class="t"><span class="e">'+(CAT_PIC[next.cat]||'🔹')+'</span>'+esc(next.title)+' →</span></a>'+
    '</div>';
})();
