// Micrographics — presentation only. All copy comes from ../../shared/content.js.
(function(){
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }

  // ── work cards: [data-show="featured"] on the index, "all" on the archive
  var host = document.getElementById('cards');
  if (host) {
    var list = host.getAttribute('data-show') === 'all' ? PROJECTS : PROJECTS.filter(featured);
    list.forEach(function(p){
      var a = document.createElement('a');
      a.className = 'card reveal';
      a.href = 'case.html?p=' + p.slug;
      a.innerHTML =
        '<div class="imgbox"><span class="num">'+p.num+'</span><span class="imgph">'+esc(p.ph)+'</span></div>'+
        '<div class="cmeta"><span>[ '+esc(p.cat)+' ]</span><span>'+esc(p.code)+'</span></div>'+
        '<h3 class="ctitle">'+esc(p.title)+'</h3>'+
        '<p class="cdesc">'+esc(p.desc)+'</p>'+
        '<div class="crow"><span>'+esc(p.year)+'</span><span>'+esc(p.loc)+'</span></div>'+
        '<div class="cfoot"><span class="vc">VIEW CASE</span><span class="accent">+</span></div>';
      host.appendChild(a);
    });
  }

  // ── case study: case.html?p=<slug>
  var root = document.getElementById('case');
  if (!root) return;
  var slug = (location.search.match(/[?&]p=([^&]+)/) || [])[1];
  var i = -1;
  PROJECTS.forEach(function(p, k){ if (p.slug === slug) i = k; });
  if (i < 0) { location.replace('work.html'); return; }   // unknown slug -> archive
  var p = PROJECTS[i], next = PROJECTS[(i + 1) % PROJECTS.length];
  var total = ('00' + PROJECTS.length).slice(-3);

  document.title = p.title + ' — ' + PERSON.name;
  var d = document.querySelector('meta[name="description"]');
  if (d) d.setAttribute('content', p.lead);

  var links = p.links.length
    ? '<p class="plink">' + p.links.map(function(l){
        return '<a href="'+l.url+'" target="_blank" rel="noopener">'+esc(l.label)+' →</a>'; }).join('') + '</p>'
    : '';

  document.getElementById('caseno').textContent = 'CASE ' + p.num + ' / ' + total;
  root.innerHTML =
    '<section class="phero"><div class="wrap"><span class="cross" style="left:40px;top:20px"></span>'+
      '<div class="pcat">'+esc(p.cat)+' — CASE STUDY '+p.num+'</div>'+
      '<h1 class="ptitle">'+esc(p.title)+'</h1>'+
      '<p class="plead">'+esc(p.lead)+'</p>'+links+
      '<div class="psysid">SYS. ID — '+p.sysid+'</div></div></section>'+
    '<div class="wrap"><div class="metastrip">'+
      '<div class="metacell"><p class="k">Role</p><p class="v">'+p.role+'</p></div>'+
      '<div class="metacell"><p class="k">Timeline</p><p class="v">'+p.timeline+'</p></div>'+
      '<div class="metacell"><p class="k">Stack</p><p class="v">'+p.stack+'</p></div>'+
      '<div class="metacell"><p class="k">Status</p><p class="v mark">'+p.status+'</p></div>'+
    '</div></div>'+
    '<div class="wrap"><div class="bigimg"><span class="tag">FIG 01 — COVER</span>'+
      '<span class="imgph">DROP COVER IMAGE</span></div></div>'+
    '<section><div class="wrap"><div class="pbody"><div class="pbtag">[ 01 ] OVERVIEW</div><div>'+
      '<div class="block"><h3>The Problem</h3>'+p.problem+'</div>'+
      '<div class="block"><h3>What I Built</h3>'+p.built+'</div>'+
      '<div class="block"><h3>Outcome</h3>'+p.outcome+'</div>'+
      '<div class="block"><h3>Tools</h3><div class="tags">'+
        p.chips.map(function(c){ return '<span class="chip">'+esc(c)+'</span>'; }).join('')+
      '</div></div>'+
    '</div></div></div></section>'+
    '<div class="wrap"><div class="gallery">'+
      '<div class="gimg"><span class="imgph">FIG 02</span></div>'+
      '<div class="gimg"><span class="imgph">FIG 03</span></div></div></div>'+
    '<div class="wrap"><a class="nextp" href="case.html?p='+next.slug+'">'+
      '<div class="k">NEXT PROJECT — '+next.num+'</div>'+
      '<div class="t">'+esc(next.title)+' →</div></a></div>'+
    '<footer class="foot"><div class="footmeta"><span>© 2026 '+PERSON.name.toUpperCase()+'</span>'+
      '<span>CASE NO. '+p.sysid+'</span><span>DOC. TYPE — CASE STUDY</span>'+
      '<span>VERSION 1.0</span></div></footer>';
})();
