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
    '<span class="named">Danielle<img class="catmark" src="assets/shots/logo-cat/cat01.png" alt=""></span>');
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
  // Anything already listed under an experience entry is shown there,
  // so the archive holds only what the timeline does not already cover.
  var claimed = {};
  if (typeof EXPERIENCE !== 'undefined'){
    EXPERIENCE.forEach(function(e){
      var tag = (e.workTag || e.org).toUpperCase();
      PROJECTS.forEach(function(p){ if (p.loc.toUpperCase() === tag) claimed[p.slug] = true; });
    });
  }
  var list = PROJECTS.filter(function(p){ return !claimed[p.slug]; });

  var c = document.getElementById('count');
  if (c) c.textContent = list.length + ' projects · 2023 to present';
  host.innerHTML = list.map(function(p){
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


  if (el('interests')) el('interests').innerHTML = PERSON.interests.map(function(i){
    return '<span>'+esc(i)+'</span>'; }).join('');

  // written out, the way the reference does it
  if (el('contact')) el('contact').textContent =
    PERSON.email.replace('@',' [at] ').replace(/\.com$/,' [dot] com');

  if (el('links')) el('links').innerHTML = '<p>other parts of the internet you can find me:</p>' +
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

  // only the standalone About page carries this line
  var upd = el('updated'), lm = new Date(document.lastModified);
  if (upd && !isNaN(lm)){
    var M=['January','February','March','April','May','June','July','August',
           'September','October','November','December'];
    var d=lm.getDate(), sfx=(d%10==1&&d!=11)?'st':(d%10==2&&d!=12)?'nd':(d%10==3&&d!=13)?'rd':'th';
    upd.textContent = 'Last updated '+M[lm.getMonth()]+' '+d+sfx+', '+lm.getFullYear();
  }
})();


// ══ EXPERIENCE: the timeline ══════════════════════════════════════
(function(){
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
  var host = document.getElementById('timeline');
  if (!host || typeof EXPERIENCE === 'undefined') return;
  // The projects built at a given place, pulled by matching PROJECTS.loc
  // against the org. Keeps the timeline and the archive in step.
  function work(e){
    var tag = (e.workTag || e.org).toUpperCase();
    var hits = PROJECTS.filter(function(p){ return p.loc.toUpperCase() === tag; });
    if (!hits.length) return '';
    return '<div class="twork">'+
      '<div class="meta tworkhead">Selected projects developed under '+esc(e.org)+'</div>'+
      '<ul class="tworklist">'+hits.map(function(p){
        // data-shots wires the same image trail the About copy uses.
        // A project with no image simply carries none and stays quiet.
        var shots = p.img ? ' data-shots=\''+JSON.stringify([{src:p.img,cap:p.title}])+'\'' : '';
        return '<li><a href="project.html?p='+p.slug+'"'+shots+'>'+
          '<span class="twnum">'+p.num+'</span>'+
          '<span class="twname">'+esc(p.title)+'</span>'+
          '<span class="twsub">'+esc(p.sub)+'</span>'+
          '<span class="twgo meta">&rarr;</span></a></li>';
      }).join('')+'</ul></div>';
  }

  host.innerHTML = EXPERIENCE.map(function(e){
    var bullets = e.bullets && e.bullets.length
      ? '<ul class="tbul">'+e.bullets.map(function(b){ return '<li>'+esc(b)+'</li>'; }).join('')+'</ul>'
      : '';
    return '<article class="tentry">'+
      '<div class="tyear">'+esc(e.year)+'</div>'+
      '<div>'+
        '<h3 class="trole">'+esc(e.role)+'</h3>'+
        '<div class="torg">'+esc(e.org)+'</div>'+
        '<div class="tmeta meta"><span>'+esc(e.period)+'</span><span>'+esc(e.loc)+'</span></div>'+
        (e.note ? '<p class="tnote">'+esc(e.note)+'</p>' : '')+
        bullets+
        work(e)+
      '</div>'+
    '</article>';
  }).join('');
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
  var CATS = ['assets/shots/logo-cat/cat01.png','assets/shots/logo-cat/cat02.png','assets/shots/logo-cat/cat03.png'];
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

// ── one page, and four ────────────────────────────────────────────
// The home page carries every section, so it reads as one continuous
// scroll. /archive, /experience and /about render the same content on
// their own for linking. On home the nav scrolls; anywhere else it
// navigates. The active item tracks whichever section you are in.
(function(){
  var links = document.querySelectorAll('.sidenav a[data-sec]');
  if (!links.length) return;

  var secs = {};
  Array.prototype.forEach.call(links, function(a){
    var id = a.getAttribute('data-sec');
    var node = document.getElementById(id);
    if (node) secs[id] = { link: a, node: node };
  });
  var onePager = Object.keys(secs).length > 1;   // true only on home

  if (onePager){
    Array.prototype.forEach.call(links, function(a){
      var id = a.getAttribute('data-sec');
      if (!secs[id]) return;
      a.addEventListener('click', function(e){
        e.preventDefault();
        secs[id].node.scrollIntoView({ behavior:'smooth', block:'start' });
        history.replaceState(null, '', id === 'top' ? location.pathname : '#'+id);
      });
    });

    if ('IntersectionObserver' in window){
      var spy = new IntersectionObserver(function(entries){
        entries.forEach(function(en){
          if (!en.isIntersecting) return;
          Array.prototype.forEach.call(links, function(a){ a.classList.remove('on'); });
          var id = en.target.id;
          if (secs[id]) secs[id].link.classList.add('on');
        });
      }, { rootMargin:'-45% 0px -50% 0px' });
      Object.keys(secs).forEach(function(id){ spy.observe(secs[id].node); });
    }

    // arriving with a hash: land on that section
    if (location.hash){
      var t = document.getElementById(location.hash.slice(1));
      if (t) setTimeout(function(){ t.scrollIntoView(); }, 60);
    }
  }
})();

// ── the sign-off follows the cursor ───────────────────────────────
// Each letter is wrapped so it can colour on its own. Whichever letters
// sit under the pointer take the accent and the ones beside them catch
// a little of it, so the colour moves through the line as you sweep it.
(function(){
  var line = document.querySelector('.signoff');
  if (!line || !line.textContent.trim()) return;

  var text = line.textContent;
  line.textContent = '';
  var glyphs = [];
  text.split('').forEach(function(ch){
    if (ch === ' '){ line.appendChild(document.createTextNode(' ')); return; }
    var sp = document.createElement('span');
    sp.className = 'sg';
    sp.textContent = ch;
    line.appendChild(sp);
    glyphs.push(sp);
  });

  var REACH = 58;              // px either side of the cursor that lights up
  var raf = null, px = 0, active = false;

  function paint(){
    raf = null;
    glyphs.forEach(function(g){
      var r = g.getBoundingClientRect();
      var d = Math.abs((r.left + r.width / 2) - px);
      var t = active ? Math.max(0, 1 - d / REACH) : 0;
      g.style.color = t > 0 ? 'color-mix(in srgb, var(--accent) ' + Math.round(t * 100) + '%, var(--ink))' : '';
      g.style.transform = t > 0 ? 'translateY(' + (-t * 3).toFixed(2) + 'px)' : '';
    });
  }
  function queue(){ if (!raf) raf = requestAnimationFrame(paint); }

  line.addEventListener('mousemove', function(e){ active = true; px = e.clientX; queue(); });
  line.addEventListener('mouseenter', function(e){ active = true; px = e.clientX; queue(); });
  line.addEventListener('mouseleave', function(){ active = false; queue(); });
})();

// Bound last, once every section has rendered: the trail attaches to
// annotated phrases and to any [data-shots] element, and those only
// exist after the timeline and archive have been written.
// ══ THE IMAGE TRAIL ═══════════════════════════════════════════════
// Lives at the top level so it binds on every page, not just the one
// that happens to have the About copy.
// Sweeping across a phrase or a project row drops photographs, offset
// into the empty column right of the text so nothing lands on a word.
// Vertical position follows the cursor; horizontal wanders in the zone.
(function(){
  function el(id){ return document.getElementById(id); }
  (function(){
    var layer = el('figtrail');
    if (!layer) return;

    // Every photograph is fetched up front. Positioning happens against
    // translate(-50%,-50%), so a card sized before its image arrives is
    // centred on a tiny box and visibly jumps once it loads.
    (function preload(){
      var seen = {};
      function take(list){
        (list || []).forEach(function(sh){
          if (!sh || !sh.src || seen[sh.src]) return;
          seen[sh.src] = 1;
          var im = new Image(); im.src = sh.src;
        });
      }
      if (typeof ANNOTATIONS !== 'undefined')
        ANNOTATIONS.forEach(function(a){ take(a.shots); });
      Array.prototype.forEach.call(document.querySelectorAll('[data-shots]'), function(el){
        try { take(JSON.parse(el.getAttribute('data-shots'))); } catch(e){}
      });
    })();

    var STEP = 110;      // px of cursor travel between flips
    var HALF = 216, HALFH = 268;   // half a print, for keeping it on screen

    var lastX = null, lastY = null, zone = null, card = null, idx = 0;

    // The clear column to the right of the text.
    function measureZone(){
      var right = 0;
      Array.prototype.forEach.call(document.querySelectorAll('.rowbody'), function(n){
        right = Math.max(right, n.getBoundingClientRect().right);
      });
      var edge = window.innerWidth - 18;
      var left = Math.max(right + 34, window.innerWidth * 0.60);
      left = Math.min(left, edge - 2 * HALF - 20);
      zone = { left: left, right: edge, mid: (left + edge) / 2 };
    }

    // One print, held for the whole hover. Moving within the phrase flips
    // it to the next photograph in that phrase's set rather than stacking
    // another on top, so a sweep reads through the set in order.
    function show(shots, cursorY, advance){
      if (!zone) measureZone();
      if (advance) idx = (idx + 1) % shots.length;
      var shot = shots[idx % shots.length];
      var y = Math.max(HALFH + 12, Math.min(window.innerHeight - HALFH - 12, cursorY));

      if (!card){
        card = document.createElement('div');
        card.className = 'trailcard';
        card.innerHTML = '<img alt="">' +
          (shot.cap ? '<div class="trailcap"></div>' : '');
        layer.appendChild(card);
      }
      var img = card.querySelector('img');
      if (img.getAttribute('src') !== shot.src) img.src = shot.src;

      var cap = card.querySelector('.trailcap');
      if (shot.cap){
        if (!cap){ cap = document.createElement('div'); cap.className = 'trailcap'; card.appendChild(cap); }
        cap.textContent = shot.cap;
      } else if (cap){ cap.remove(); }

      card.style.left = zone.mid + 'px';
      card.style.top  = y + 'px';
      card.style.setProperty('--r', (((idx % 5) - 2) * 2.4) + 'deg');
      settle(y);
    }

    // Re-clamp against the card's real height once it has one. Until the
    // image is laid out the box has no size, so the first clamp is a guess.
    function settle(y){
      if (!card) return;
      requestAnimationFrame(function(){
        if (!card) return;
        var h = card.offsetHeight || 0;
        if (!h) return;
        var half = h / 2 + 12;
        var clamped = Math.max(half, Math.min(window.innerHeight - half, y));
        card.style.top = clamped + 'px';
      });
    }

    function clearAll(){
      if (!card) return;
      var going = card; card = null;
      going.classList.add('out');
      setTimeout(function(){ if (going.parentNode) going.parentNode.removeChild(going); }, 200);
    }

    function onMove(shots, e){
      var x = e.clientX, y = e.clientY;
      if (lastX === null){ lastX = x; lastY = y; show(shots, y, false); return; }
      if (Math.hypot(x - lastX, y - lastY) < STEP){ return; }
      lastX = x; lastY = y;
      show(shots, y, true);          // moved far enough: flip to the next
    }

    function bind(el, shots, followsLink){
      el.addEventListener('mouseenter', function(e){
        measureZone(); lastX = null; idx = Math.floor(Math.random() * shots.length);
        onMove(shots, e); });
      el.addEventListener('mousemove', function(e){ onMove(shots, e); });
      el.addEventListener('mouseleave', function(){ lastX = null; clearAll(); });
      el.addEventListener('focus', function(){
        var r = el.getBoundingClientRect();
        measureZone(); show(shots, r.top + r.height/2, false); });
      el.addEventListener('click', function(e){
        // annotated phrases are not links, so a tap should show a print;
        // a real link must be allowed to navigate
        if (followsLink) return;
        e.preventDefault();
        var r = el.getBoundingClientRect();
        show(shots, r.top + r.height/2, true);   // tap flips to the next
      });
    }

    Array.prototype.forEach.call(document.querySelectorAll('.anno'), function(sp){
      var n = parseInt(sp.getAttribute('data-anno'), 10);
      var a = ANNOTATIONS[n];
      if (a) bind(sp, a.shots, false);
    });

    // anything else that declares its own set, such as the project list
    // on the experience timeline
    Array.prototype.forEach.call(document.querySelectorAll('[data-shots]'), function(el){
      var shots;
      try { shots = JSON.parse(el.getAttribute('data-shots')); } catch(err){ return; }
      if (shots && shots.length) bind(el, shots, el.tagName === 'A');
    });
})();
})();

// ── grown scrollwork ──────────────────────────────────────────────
// Ornaments are generated, not stamped. A chain of invisible guide
// circles is laid down; every visible stroke is a tangent between two of
// them, with control points perpendicular to each radius, so the curve
// leaves and arrives along the circle and the whole thing flows as one
// hand. Chains branch off their own circles, and each terminates in a
// spiral. This is the construction the Eternal Research generator uses.
(function(){
  var layer = document.getElementById('flourish');
  if (!layer) return;
  var mq = window.matchMedia;
  if (mq && (mq('(hover: none)').matches || mq('(prefers-reduced-motion: reduce)').matches)) return;

  // ── style, the same knobs the Eternal Research panel exposes ──────
  // All 0..1. Tune here; nothing else needs touching.
  var STYLE = {
    density:       1.00,   // how much grows per sprout
    straightLines: 0.15,   // long straight tangent runs vs S-curves
    flourishes:    0.90,   // how far the terminal spirals wind in
    blankAreas:    0.30,   // gaps left in the composition
    lineThickness: 0.35,   // stroke weight
    outline:       false,  // contour of a ribbon vs a single stroke
    outlineWeight: 0.9,    // px of the contour itself, when outline is on
    sketch:        2,      // passes per stroke; >1 gives a drawn-twice look
    wobble:        1.5     // px of hand wobble along a stroke
  };

  var NS = 'http://www.w3.org/2000/svg', TAU = Math.PI * 2, HALF = Math.PI / 2;
  function rnd(a, b){ return a + Math.random() * (b - a); }
  function clamp(v, a, b){ return Math.max(a, Math.min(b, v)); }

  // radii taper and the heading turns harder as the chain runs, so each
  // stroke sweeps first and tightens into a curl at the end
  // `stopAt` is the inward limit: a chain that reaches it has run as far
  // into the page as it may and is cut there, rather than being allowed
  // to cross into the type.
  function chain(x, y, ang, r, n, turn, stopAt){
    var cs = [];
    for (var i = 0; i < n; i++){
      if (stopAt !== undefined && x < stopAt) break;
      cs.push({ x:x, y:y, r:r });
      var t = i / (n - 1);
      var step = r * rnd(0.95, 1.45);
      ang += turn * (0.05 + 1.15 * t * t * t) * rnd(0.85, 1.15);
      r *= (0.99 - 0.14 * t);
      x += Math.cos(ang) * step; y += Math.sin(ang) * step;
    }
    return cs;
  }

  // same handedness takes an external tangent, opposite takes an internal
  // one; that switch is what turns a bland arc into an S-curve
  function tangent(c1, c2, cw1, cw2){
    var dx = c2.x - c1.x, dy = c2.y - c1.y, d = Math.hypot(dx, dy);
    if (!d) return null;
    var a = Math.atan2(dy, dx);
    if (cw1 !== cw2){
      var v = (c1.r + c2.r) / d;
      if (v <= 1){
        var b = Math.acos(clamp(v, -1, 1)) * (cw1 ? 1 : -1);
        var a1 = a + b, a2 = a1 + Math.PI;
        return [{ x:c1.x + c1.r*Math.cos(a1), y:c1.y + c1.r*Math.sin(a1), ang:a1 },
                { x:c2.x + c2.r*Math.cos(a2), y:c2.y + c2.r*Math.sin(a2), ang:a2 }];
      }
      cw2 = cw1;                                   // too close, fall back
    }
    var v2 = (c1.r - c2.r) / d; if (Math.abs(v2) > 1) return null;
    var b2 = Math.acos(clamp(v2, -1, 1)) * (cw1 ? 1 : -1), ang = a + b2;
    return [{ x:c1.x + c1.r*Math.cos(ang), y:c1.y + c1.r*Math.sin(ang), ang:ang },
            { x:c2.x + c2.r*Math.cos(ang), y:c2.y + c2.r*Math.sin(ang), ang:ang }, cw2];
  }

  // A pen does not travel true. Sample the smooth path, push each point
  // off the line by a slow random walk, and re-emit as a polyline: the
  // stroke keeps its shape but stops being mechanically exact.
  var probe = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  function roughen(d, amp){
    if (!amp) return d;
    probe.setAttribute('d', d);
    var len = 0;
    try { len = probe.getTotalLength(); } catch(e){ return d; }
    if (!len || !isFinite(len)) return d;
    var step = 3.2, n = Math.max(2, Math.ceil(len / step));
    var out = [], off = 0, drift = 0;
    for (var i = 0; i <= n; i++){
      var t = (i / n) * len, pt;
      try { pt = probe.getPointAtLength(t); } catch(e){ return d; }
      // a smoothed walk, so the wobble is a wander and not a buzz
      drift += (Math.random() - 0.5) * amp * 0.55;
      drift *= 0.86;
      off = off * 0.72 + drift;
      var nx = probe.getPointAtLength(Math.min(len, t + 1));
      var dx = nx.x - pt.x, dy = nx.y - pt.y, m = Math.hypot(dx, dy) || 1;
      out.push((pt.x - dy / m * off).toFixed(1) + ',' + (pt.y + dx / m * off).toFixed(1));
    }
    return 'M' + out.join(' L');
  }

  function ribbonWidth(){
    return STYLE.outline ? 2.4 + STYLE.lineThickness * 7.5
                         : 0.7 + STYLE.lineThickness * 2.6;
  }

  function cp(t, cw, k, sign){
    var d = t.ang + (cw ? -HALF : HALF);
    return { x:t.x + Math.cos(d)*k*sign, y:t.y + Math.sin(d)*k*sign };
  }

  // always the minor arc: the long way round draws a full loop, which
  // reads as a bead rather than a stroke hugging its guide
  function arcTo(c, p0, p1){
    var a0 = Math.atan2(p0.y - c.y, p0.x - c.x), a1 = Math.atan2(p1.y - c.y, p1.x - c.x);
    var delta = a1 - a0;
    while (delta < -Math.PI) delta += TAU;
    while (delta >  Math.PI) delta -= TAU;
    return 'A' + c.r.toFixed(1) + ',' + c.r.toFixed(1) + ' 0 0 ' + (delta > 0 ? 1 : 0) +
           ' ' + p1.x.toFixed(1) + ',' + p1.y.toFixed(1);
  }

  function build(cs){
    if (cs.length < 2) return '';
    var cw = [Math.random() < 0.5], d = [], arrive = null;
    for (var i = 1; i < cs.length; i++)
      cw.push(Math.random() < (1 - STYLE.straightLines * 0.9) ? !cw[i-1] : cw[i-1]);
    for (var i = 0; i < cs.length - 1; i++){
      if (i > 1 && i < cs.length - 3 && Math.random() < STYLE.blankAreas * 0.09){ arrive = null; continue; }
      var t = tangent(cs[i], cs[i+1], cw[i], cw[i+1]);
      if (!t) continue;
      if (t[2] !== undefined) cw[i+1] = t[2];
      var k = Math.hypot(t[1].x - t[0].x, t[1].y - t[0].y) * 0.42;
      var A = cp(t[0], cw[i], k, 1), B = cp(t[1], cw[i+1], k, -1);
      d.push(arrive ? arcTo(cs[i], arrive, t[0])
                    : 'M' + t[0].x.toFixed(1) + ',' + t[0].y.toFixed(1));
      d.push('C' + A.x.toFixed(1) + ',' + A.y.toFixed(1) + ' ' +
                   B.x.toFixed(1) + ',' + B.y.toFixed(1) + ' ' +
                   t[1].x.toFixed(1) + ',' + t[1].y.toFixed(1));
      arrive = t[1];
    }
    if (arrive){
      // the terminal spiral, as a dense polyline. Chaining shrinking arc
      // commands leaves the radius inconsistent with the endpoints and
      // SVG scales the arc to compensate, which throws spikes.
      // The spiral must stop while its radius still clears the ribbon.
      // Wind tighter than that and the ribbon overlaps itself into a blob.
      var lc = cs[cs.length-1], dir = cw[cw.length-1] ? 1 : -1, rq = lc.r;
      var a0 = Math.atan2(arrive.y - lc.y, arrive.x - lc.x);
      var turns = Math.round(12 + STYLE.flourishes * 40);
      var floor = Math.max(3.2, ribbonWidth() * 1.35);
      for (var q = 1; q <= turns && rq > floor; q++){
        var aq = a0 + dir * 0.13 * q;
        rq *= 0.962;
        d.push('L' + (lc.x + rq*Math.cos(aq)).toFixed(1) + ',' + (lc.y + rq*Math.sin(aq)).toFixed(1));
      }
    }
    return d.join(' ');
  }

  // a child chain off a circle partway along its parent, angled away:
  // what turns single strokes into filigree
  // A branch that runs back through what is already drawn reads as a
  // tangle. Reject any child whose circles crowd an existing one, past
  // the first couple where it is still leaving its parent.
  function collides(child, placed){
    for (var i = 2; i < child.length; i++){
      var a = child[i];
      for (var g = 0; g < placed.length; g++){
        var ch = placed[g];
        for (var j = 0; j < ch.length; j++){
          var b = ch[j];
          if (Math.hypot(a.x - b.x, a.y - b.y) < (a.r + b.r) * 0.72) return true;
        }
      }
    }
    return false;
  }

  var inward = 0;

  function grow(cs, depth, placed){
    var out = [];
    if (depth > 2) return out;
    placed = placed || [cs];
    var tries = 2 + (Math.random() < STYLE.density * 0.7 ? 1 : 0);
    for (var b = 0; b < tries; b++){
      var child = null;
      for (var attempt = 0; attempt < 10 && !child; attempt++){
        var i = Math.floor(rnd(1, Math.max(2, cs.length - 2)));
        var c = cs[i], prev = cs[i-1];
        var base = Math.atan2(c.y - prev.y, c.x - prev.x);
        var cand = chain(c.x, c.y, base + (Math.random() < 0.5 ? 1 : -1) * rnd(0.8, 1.5),
                         c.r * rnd(0.55, 0.8), Math.round(rnd(7, 12)),
                         Math.random() < 0.5 ? 1 : -1, inward);
        if (!collides(cand, placed)) child = cand;
      }
      if (!child) continue;
      out.push(child); placed.push(child);
      out = out.concat(grow(child, depth + 1, placed));
    }
    return out;
  }

  // ── the organism ──────────────────────────────────────────────────
  // One composition is grown once and hidden. Moving the cursor feeds it:
  // limbs uncover in the order they grew, parents before their branches,
  // so it creeps outward like something living rather than popping in as
  // separate pieces. It withdraws slowly when you stop.
  var svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('preserveAspectRatio', 'none');
  layer.style.setProperty('--w', ribbonWidth().toFixed(2) + 'px');
  layer.style.setProperty('--knock',
    Math.max(0.4, ribbonWidth() - STYLE.outlineWeight * 2).toFixed(2) + 'px');
  layer.appendChild(svg);

  var zone = null, limbs = [], progress = 0, raf = null, lastX = null, lastY = null;

  function measureZone(){
    var r = layer.getBoundingClientRect(), right = 0;
    Array.prototype.forEach.call(
      layer.parentNode.querySelectorAll('.h-lead, .lede, .scrollcue'), function(n){
        var b = n.getBoundingClientRect();
        if (b.width) right = Math.max(right, b.right - r.left);
      });
    var left = Math.min(right + 40, r.width - 220);
    zone = { left:left, right:r.width - 20, h:r.height };
  }

  function compose(){
    measureZone();
    svg.innerHTML = ''; limbs = [];
    if (!zone.h) return;

    // several seeds off the corner, each grown until it runs into what is
    // already there, so the whole thing reads as one body
    // Seeds run down the right edge rather than piling into the corner.
    // Clustered seeds fill their own space and then collision rejection
    // starves every later branch, which is what capped the old growth.
    // Rooted on the right edge, headed inward. The chains run long and are
    // cut when they approach the type, so the growth reaches well into the
    // page while its origin stays pinned to the margin.
    inward = zone.left + 24;
    var placed = [], chains = [], seeds = 9;
    for (var n = 0; n < seeds; n++){
      var seed = chain(zone.right + rnd(-16, 14),
                       50 + (n / seeds) * zone.h * 0.46 + rnd(0, 34),
                       Math.PI + rnd(-0.85, 0.85), rnd(26, 44),
                       Math.round(rnd(16, 26)), Math.random() < 0.5 ? 1 : -1, inward);
      if (collides(seed, placed)) continue;
      placed.push(seed); chains.push(seed);
      grow(seed, 0, placed).forEach(function(c){ chains.push(c); });
    }

    var g  = document.createElementNS(NS, 'g'), gi = document.createElementNS(NS, 'g');
    var m  = document.createElementNS(NS, 'g'), mi = document.createElementNS(NS, 'g');
    var flip = 'translate(0,' + zone.h.toFixed(1) + ') scale(1,-1)';
    m.setAttribute('transform', flip); mi.setAttribute('transform', flip);

    var passes = Math.max(1, STYLE.sketch | 0);
    chains.forEach(function(ch){
      var d = build(ch); if (!d) return;
      [[g, gi], [m, mi]].forEach(function(pair){
        var set = [];
        for (var k = 0; k < passes; k++){
          var dd = roughen(d, STYLE.wobble * (k ? 1.25 : 1));
          var outer = document.createElementNS(NS, 'path');
          outer.setAttribute('d', dd); outer.setAttribute('pathLength', '1');
          if (k) outer.setAttribute('class', 'pass2');
          pair[0].appendChild(outer); set.push(outer);
          if (STYLE.outline){
            var inner = document.createElementNS(NS, 'path');
            inner.setAttribute('d', dd); inner.setAttribute('pathLength', '1');
            inner.setAttribute('class', 'knock');
            pair[1].appendChild(inner); set.push(inner);
          }
        }
        limbs.push(set);
      });
    });
    // every ribbon down before any knockout, or one erases its neighbour
    svg.appendChild(g); svg.appendChild(m);
    svg.appendChild(gi); svg.appendChild(mi);
    paint();
  }

  // Limbs uncover in sequence and overlap generously, so growth reads as
  // one continuous creep rather than a series of separate reveals.
  function paint(){
    var n = limbs.length; if (!n) return;
    var span = 1 / n, reach = span * 2.4;
    for (var i = 0; i < n; i++){
      var t = Math.max(0, Math.min(1, (progress - i * span) / reach));
      for (var j = 0; j < limbs[i].length; j++){
        limbs[i][j].style.strokeDashoffset = (1 - t).toFixed(4);
        limbs[i][j].style.opacity = t > 0 ? 1 : 0;
      }
    }
  }

  var GROW = 1 / 2200;   // uncovered per px of cursor travel
  var DECAY = 0.9992;    // how slowly it withdraws once you stop

  function tick(){
    progress *= DECAY; paint();
    if (progress > 0.001) raf = requestAnimationFrame(tick);
    else { progress = 0; paint(); raf = null; }
  }

  layer.parentNode.addEventListener('mousemove', function(e){
    var r = layer.getBoundingClientRect();
    var x = e.clientX - r.left, y = e.clientY - r.top;
    if (lastX !== null){
      progress = Math.min(1, progress + Math.hypot(x - lastX, y - lastY) * GROW);
      paint();
      if (!raf) raf = requestAnimationFrame(tick);
    }
    lastX = x; lastY = y;
  });
  layer.parentNode.addEventListener('mouseleave', function(){ lastX = null; });

  compose();
  addEventListener('resize', compose);
})();
