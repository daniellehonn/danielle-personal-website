// Danielle Hon. Presentation only; copy lives in shared/content.js.
(function(){
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
  function el(id){ return document.getElementById(id); }

  // ── FPO slots ──────────────────────────────────────────────────
  // Every .plate.fpo carries a real <img src>. If the file exists the
  // slot becomes the photograph and the brief disappears. Until then it
  // stays a deliberate for-position-only mark. No code change needed:
  // drop the file at the path printed in the brief.
  Array.prototype.forEach.call(document.querySelectorAll('.plate.fpo'), function(slot){
    var img = slot.querySelector('img');
    var src = img && img.getAttribute('data-src');
    if (!src) return;
    var probe = new Image();
    probe.onload = function(){
      if (!probe.naturalWidth) return;
      img.src = src;                     // only request it once it exists
      slot.classList.remove('fpo');
      var brief = slot.querySelector('.fpobrief');
      if (brief) brief.remove();
    };
    probe.src = src;
  });

  // ── home lead: Danielle's copy, links live inline ──────────────
  // the ink cat rides beside her name in the hero
  if (el('lead')) el('lead').innerHTML = esc(PERSON.intro).replace(
    'Danielle',
    '<span class="named">Danielle<img class="catmark" src="assets/cat01.png" alt=""></span>');
  if (el('sub')) el('sub').innerHTML =
    '<a class="inlink" href="archive.html">View all projects here</a>. ' +
    '<a class="inlink" href="about.html">Read about me</a>, or check out my ' +
    '<a class="inlink" href="resume.pdf" target="_blank" rel="noopener">resume</a> and ' +
    '<a class="inlink" href="'+PERSON.github+'" target="_blank" rel="noopener">GitHub</a>.';
})();

// ── selected work: one row per project ──────────────────────────
(function(){
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
  var host = document.getElementById('covers');
  if (!host) return;
  host.innerHTML = PROJECTS.filter(featured).map(function(p){
    var img = p.img
      ? '<div class="cvrimg"><img src="'+p.img+'" alt="" loading="lazy"></div>'
      : '<div class="cvrimg"></div>';
    return '<a class="cvr'+(p.img?'':' nofoto')+'" href="project.html?p='+p.slug+'">'+
      img+
      '<span class="meta">'+p.num+'</span>'+
      '<span><h3 class="cvrtitle">'+esc(p.title)+'</h3>'+
        '<p class="cvrsub">'+esc(p.sub)+' · '+esc(p.year)+'</p></span>'+
      '<span class="cvrgo meta">Read &rarr;</span>'+
    '</a>';
  }).join('');

  // closing about: the first paragraph only, per the spec
  var c = document.getElementById('closingcopy');
  if (c) c.innerHTML = '<p>'+PERSON.about[0]+'</p><p>'+PERSON.about[1]+'</p>';
  var l = document.getElementById('closinglinks');
  if (l) l.innerHTML =
    '<a href="mailto:'+PERSON.email+'">Email</a>'+
    '<a href="'+PERSON.github+'" target="_blank" rel="noopener">GitHub</a>'+
    '<a href="'+PERSON.linkedin+'" target="_blank" rel="noopener">LinkedIn</a>'+
    '<a href="resume.pdf" target="_blank" rel="noopener">Résumé</a>';

})();

// ══ ARCHIVE ═══════════════════════════════════════════════════════
(function(){
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
  var host = document.getElementById('entries');
  if (!host) return;
  var c = document.getElementById('count');
  if (c) c.textContent = PROJECTS.length + ' projects · 2023 to present';
  host.innerHTML = PROJECTS.map(function(p){
    var disc = p.role.split(/\s*\+\s*/).map(function(d){
      return '<span class="chip">'+esc(d)+'</span>'; }).join('');
    // the same halftoned reveal the home rows use, so the inverted
    // text lands on a dark plate instead of vanishing into the paper
    var plate = p.img
      ? '<div class="cvrimg"><img src="'+p.img+'" alt="" loading="lazy"></div>'
      : '<div class="cvrimg"></div>';
    return '<a class="entry'+(p.img?'':' nofoto')+'" href="project.html?p='+p.slug+'">'+
      plate+
      '<div class="entrynum">'+p.num+'</div>'+
      '<div>'+
        '<h2 class="entrytitle">'+esc(p.title)+'</h2>'+
        '<p class="entrysub">'+esc(p.sub)+'</p>'+
        '<div class="entrydisc">'+disc+'</div>'+
      '</div>'+
      '<p class="entrydesc">'+esc(p.desc)+'</p>'+
      '<div class="entryspecs meta">'+
        '<div>Status<div class="v">'+esc(p.status)+'</div></div>'+
        '<div>Timeline<div class="v">'+esc(p.timeline)+'</div></div>'+
        '<div>Context<div class="v">'+esc(p.loc)+'</div></div>'+
      '</div>'+
    '</a>';
  }).join('');
})();

// ══ ABOUT ═════════════════════════════════════════════════════════
(function(){
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
  function el(id){ return document.getElementById(id); }
  var bio = el('bio');
  if (!bio) return;

  // Wrap annotated phrases after escaping, so the copy in content.js
  // stays plain prose and the markup is generated here.
  var html = PERSON.about.map(function(x){ return '<p>'+esc(x)+'</p>'; }).join('');
  if (typeof ANNOTATIONS !== 'undefined'){
    ANNOTATIONS.forEach(function(a,i){
      var needle = esc(a.phrase);
      if (html.indexOf(needle) < 0) return;
      html = html.replace(needle,
        '<span class="anno" data-anno="'+i+'" tabindex="0" role="button" '+
        'aria-label="Show figure for '+needle+'">'+needle+'</span>');
    });
  }
  bio.innerHTML = html;

  // ── the image trail ────────────────────────────────────────────
  // Sweeping across an annotated phrase drops its photographs, but the
  // trail is offset into the empty column to the right of the text, so
  // it never lands on a word. Vertical position follows the cursor;
  // horizontal position wanders inside the safe zone.
  (function(){
    var layer = el('figtrail');
    if (!layer || typeof ANNOTATIONS === 'undefined') return;

    var STEP = 95;       // px of cursor travel between drops
    var LIFE = 1550;     // ms a print stays before removal
    var MAX  = 4;        // most prints alive at once
    var HALF = 216;      // half a print's width, for clamping

    var lastX = null, lastY = null, live = [], seq = 0, zone = null, lastPick = -1;

    // Pull at random rather than cycling in order, so the same sweep
    // never shows the same run twice. Never repeats back to back.
    function pick(shots){
      if (shots.length === 1) return shots[0];
      var i;
      do { i = Math.floor(Math.random() * shots.length); } while (i === lastPick);
      lastPick = i;
      return shots[i];
    }

    // The safe column: right of the longest text line, inside the viewport.
    function measureZone(){
      // .rowbody is capped at 50ch, so its box is the real text measure.
      // Block-level headings would report the full column and are skipped.
      var right = 0;
      Array.prototype.forEach.call(document.querySelectorAll('.rowbody'), function(n){
        right = Math.max(right, n.getBoundingClientRect().right);
      });
      var edge = window.innerWidth - 18;
      var left = Math.max(right + 34, window.innerWidth * 0.60);
      left = Math.min(left, edge - 2 * HALF - 20);      // always leave room
      zone = { left: left, right: edge, mid: (left + edge) / 2 };
    }
    measureZone();
    window.addEventListener('resize', measureZone);

    function drop(n, cursorY){
      var a = ANNOTATIONS[n];
      if (!a || !a.shots.length) return;
      var shot = pick(a.shots);
      seq++;

      // wander horizontally inside the zone, drift vertically so a
      // sideways sweep still reads as a trail rather than a single pile
      var span = Math.max(0, (zone.right - zone.left) / 2 - HALF);
      var x = zone.mid + (((seq % 3) - 1) * span * 0.72);
      x = Math.max(zone.left + HALF, Math.min(zone.right - HALF, x));
      // a print is up to ~400px tall and is centred on its point, so the
      // clamp has to keep half of it inside the viewport
      var HALFH = 268;
      var y = cursorY + (((seq % 4) - 1.5) * 74);
      var loY = HALFH + 12, hiY = window.innerHeight - HALFH - 12;
      y = (hiY < loY) ? window.innerHeight / 2
                      : Math.max(loY, Math.min(hiY, y));

      var card = document.createElement('div');
      card.className = 'trailcard';
      card.style.left = x + 'px';
      card.style.top  = y + 'px';
      card.style.setProperty('--r', (((seq % 5) - 2) * 3.4) + 'deg');

      var img = document.createElement('img');
      img.src = shot.src; img.alt = '';
      card.appendChild(img);

      if (shot.cap){
        var cap = document.createElement('div');
        cap.className = 'trailcap';
        cap.textContent = shot.cap;
        card.appendChild(cap);
      }

      layer.appendChild(card);
      live.push(card);
      while (live.length > MAX){
        var old = live.shift();
        if (old.parentNode) old.parentNode.removeChild(old);
      }
      setTimeout(function(){
        var i = live.indexOf(card);
        if (i > -1) live.splice(i, 1);
        if (card.parentNode) card.parentNode.removeChild(card);
      }, LIFE);
    }

    function onMove(n, e){
      var x = e.clientX, y = e.clientY;
      if (lastX === null){ lastX = x; lastY = y; drop(n, y); return; }
      var dx = x - lastX, dy = y - lastY;
      if (Math.sqrt(dx*dx + dy*dy) < STEP) return;
      lastX = x; lastY = y;
      drop(n, y);
    }

    Array.prototype.forEach.call(document.querySelectorAll('.anno'), function(sp){
      var n = parseInt(sp.getAttribute('data-anno'), 10);
      sp.addEventListener('mouseenter', function(e){
        measureZone(); lastX = null; seq = 0; onMove(n, e); });
      sp.addEventListener('mousemove', function(e){ onMove(n, e); });
      sp.addEventListener('mouseleave', function(){ lastX = null; });
      sp.addEventListener('focus', function(){
        var r = sp.getBoundingClientRect();
        measureZone(); seq = 0; drop(n, r.top + r.height/2); });
      sp.addEventListener('click', function(e){
        e.preventDefault();
        var r = sp.getBoundingClientRect();
        drop(n, r.top + r.height/2); });
    });
  })();

  el('interests').innerHTML = PERSON.interests.map(function(i){
    return '<span>'+esc(i)+'</span>'; }).join('');

  // written out, the way the reference does it
  el('contact').textContent =
    PERSON.email.replace('@',' [at] ').replace(/\.com$/,' [dot] com');

  el('links').innerHTML = '<p>other parts of the internet you can find me:</p>' +
    '<div class="stack">' +
      '<a href="'+PERSON.github+'" target="_blank" rel="noopener">github</a>' +
      '<a href="'+PERSON.linkedin+'" target="_blank" rel="noopener">linkedin</a>' +
      '<a href="'+PERSON.instagram+'" target="_blank" rel="noopener">instagram</a>' +
      '<a href="resume.pdf" target="_blank" rel="noopener">resume</a>' +
    '</div>';

  var so = el('signofflinks');
  if (so) so.innerHTML =
    '<a href="mailto:'+PERSON.email+'">Email me</a>' +
    '<a href="resume.pdf" target="_blank" rel="noopener">Resume</a>';

  var lm = new Date(document.lastModified);
  if (!isNaN(lm)){
    var M=['January','February','March','April','May','June','July','August',
           'September','October','November','December'];
    var d=lm.getDate(), sfx=(d%10==1&&d!=11)?'st':(d%10==2&&d!=12)?'nd':(d%10==3&&d!=13)?'rd':'th';
    el('updated').textContent = 'Last updated '+M[lm.getMonth()]+' '+d+sfx+', '+lm.getFullYear();
  }
})();

// ══ PROJECT: the editorial story ══════════════════════════════════
(function(){
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
  var root = document.getElementById('project');
  if (!root) return;
  var slug = (location.search.match(/[?&]p=([^&]+)/)||[])[1], i=-1;
  PROJECTS.forEach(function(p,k){ if(p.slug===slug) i=k; });
  if (i<0){ location.replace('archive.html'); return; }
  var p = PROJECTS[i], next = PROJECTS[(i+1)%PROJECTS.length];

  document.title = p.title + ' · Danielle Hon';
  var dm = document.querySelector('meta[name="description"]');
  if (dm) dm.setAttribute('content', p.lead);
  var sp = document.getElementById('spinepg');
  if (sp) sp.textContent = p.num + ' / ' + ('00'+PROJECTS.length).slice(-3);
  var sn = document.getElementById('spinename');
  if (sn) sn.textContent = p.title;

  function fpo(label, shot, note, path, cls){
    return '<figure class="plate fpo '+(cls||'')+'" style="margin:0">'+
      '<img data-src="'+path+'" alt="">'+
      '<figcaption class="fpobrief">'+
        '<div class="fpolabel">'+label+' · For position only</div>'+
        '<div class="fposhot">'+shot+'</div>'+
        '<div class="fponote">'+note+'<code>'+path+'</code></div>'+
      '</figcaption></figure>';
  }
  function real(path, cap){
    return '<figure class="plate" style="aspect-ratio:16/10">'+
      '<img src="'+path+'" alt="">'+
      (cap?'<figcaption class="pcap meta" style="position:absolute;left:12px;bottom:10px;'+
        'color:var(--paper);mix-blend-mode:difference">'+esc(cap)+'</figcaption>':'')+
    '</figure>';
  }
  function unwritten(what, why){
    return '<div class="unwritten"><div class="k2">Unwritten</div><p><strong>'+
      esc(what)+'</strong> '+esc(why)+'</p></div>';
  }

  var links = p.links.map(function(l){
    return '<a class="meta" href="'+l.url+'" target="_blank" rel="noopener" '+
      'style="color:var(--accent)">'+esc(l.label)+' →</a>'; }).join(' ');

  root.innerHTML =
    // ── hero
    '<section class="sec"><span class="secn meta">01</span>'+
      '<div class="meta">Project '+p.num+' · '+esc(p.cat)+'</div>'+
      '<h1 class="h-page" style="margin-top:10px">'+esc(p.title)+'</h1>'+
      '<div class="pspecs meta">'+
        '<div>Duration<div class="v">'+esc(p.timeline)+'</div></div>'+
        '<div>Role<div class="v">'+esc(p.role)+'</div></div>'+
        '<div>Context<div class="v">'+esc(p.loc)+'</div></div>'+
        '<div>Status<div class="v" style="color:var(--accent)">'+esc(p.status)+'</div></div>'+
        (links?'<div>Links<div class="v">'+links+'</div></div>':'')+
      '</div>'+
    '</section>'+

    // ── one full-width visual
    (p.img
      ? '<div style="padding:0 var(--m) 0 calc(var(--m) + 46px)">'+real(p.img)+'</div>'
      : fpo('Plate '+p.num, 'Abstract, not a mockup',
          'Close-up texture. Keyboard edge, cable, paper under raking light, or an architectural detail. Something that suggests the work without illustrating it. ',
          'assets/shots/'+p.slug+'-hero.jpg', 'pvisual'))+

    // ── one sentence
    '<section class="sec"><span class="secn meta">02</span><p class="h-lead">'+esc(p.lead)+'</p></section>'+

    // ── the problem
    '<section class="sec"><span class="secn meta">03</span>'+
      '<h2 class="h-sec" style="margin-bottom:16px">The problem</h2>'+
      '<div class="two"><div></div><div class="body">'+p.problem+'</div></div>'+
    '</section>'+

    // ── research
    '<section class="sec"><span class="secn meta">04</span>'+
      '<h2 class="h-sec" style="margin-bottom:16px">Research</h2>'+
      '<div class="two">'+
        fpo('Fig A','Sketches, notebook',
          'Photograph the actual pages. Wireframes, arrows, crossings-out. Shot flat, natural light, edges of the notebook visible. ',
          'assets/shots/'+p.slug+'-research-a.jpg')+
        fpo('Fig B','Early screens or diagrams',
          'Whatever came before the thing shipped. Screenshots of a rough build, a whiteboard, a mind map. ',
          'assets/shots/'+p.slug+'-research-b.jpg')+
      '</div>'+
    '</section>'+

    // ── design
    '<section class="sec"><span class="secn meta">05</span>'+
      '<h2 class="h-sec" style="margin-bottom:16px">Design</h2>'+
      '<div class="two">'+
        '<div class="body">'+p.built+'</div>'+
        (p.img ? real(p.img, p.title) : fpo('Fig C','Interface, cropped in',
          'A detail rather than a full screen. One interaction, close. ',
          'assets/shots/'+p.slug+'-design.jpg'))+
      '</div>'+
    '</section>'+

    // ── engineering
    '<section class="sec"><span class="secn meta">06</span>'+
      '<h2 class="h-sec" style="margin-bottom:16px">Engineering</h2>'+
      '<div class="two rev">'+
        fpo('Fig D','Architecture diagram',
          'Draw the system: boundaries, data flow, where the agent sits. Export as a flat image on the paper colour. ',
          'assets/shots/'+p.slug+'-arch.jpg')+
        '<div><div class="body"><p><strong>Stack.</strong> '+p.stack.replace(/<br>/g,' · ')+'</p></div>'+
          '<div class="chips">'+p.chips.map(function(c){
            return '<span class="chip">'+esc(c)+'</span>'; }).join('')+'</div></div>'+
      '</div>'+
    '</section>'+

    // ── reflection
    '<section class="sec"><span class="secn meta">07</span>'+
      '<h2 class="h-sec" style="margin-bottom:16px">Reflection</h2>'+
      '<div class="two"><div></div><div>'+
        '<div class="body">'+p.outcome+'</div>'+
        '<div style="margin-top:26px">'+
        unwritten('What did not work, and what you would change.',
          'This is the half that makes a design journal worth reading, and only you have it. Two or three sentences on the approach you abandoned, the assumption that turned out wrong, or the thing you would rebuild.')+
        '</div>'+
      '</div></div>'+
    '</section>'+

    // ── next
    '<a class="pnext" href="project.html?p='+next.slug+'">'+
      '<span class="meta">Next · Project '+next.num+'</span>'+
      '<span class="t">'+esc(next.title)+' →</span></a>';
})();

// ── reveal on scroll ──────────────────────────────────────────────
// Sections rise the first time they come into view. Progressive: the
// .js class is only set when scripting is on, so without it everything
// is visible from the start.
(function(){
  var targets = document.querySelectorAll(
    '.sec, .row, .cvr, .entry, .psec, .updated');
  if (!targets.length) return;
  if (!('IntersectionObserver' in window)){
    Array.prototype.forEach.call(targets, function(n){ n.classList.add('reveal','in'); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      io.unobserve(e.target);
    });
  }, { threshold:.12, rootMargin:'0px 0px -6% 0px' });
  Array.prototype.forEach.call(targets, function(n, i){
    n.classList.add('reveal');
    n.style.transitionDelay = ((i % 4) * 45) + 'ms';
    io.observe(n);
  });
})();

// ── the cat changes pose ──────────────────────────────────────────
// Three ink cats were drawn; only one is ever shown. Hovering the mark
// swaps to a different one, so the cat looks like it moved rather than
// like the image tilted. The alternates are preloaded so the swap is
// instant, and a short opacity dip stops it reading as a glitch.
(function(){
  var CATS = ['assets/cat01.png','assets/cat02.png','assets/cat03.png'];
  CATS.forEach(function(src){ var p = new Image(); p.src = src; });

  function wire(trigger, img){
    if (!trigger || !img) return;
    var home = img.getAttribute('src'), at = CATS.indexOf(home);
    if (at < 0) at = 0;
    function swap(to){
      img.style.opacity = '0';
      setTimeout(function(){ img.src = CATS[to]; img.style.opacity = '1'; }, 90);
    }
    trigger.addEventListener('mouseenter', function(){
      var next = (at + 1 + Math.floor(Math.random() * (CATS.length - 1))) % CATS.length;
      swap(next);
    });
    trigger.addEventListener('mouseleave', function(){ swap(at); });
  }

  wire(document.querySelector('.named'),   document.querySelector('.catmark'));
  wire(document.querySelector('.sidemark'), document.querySelector('.sidemark img'));
})();
