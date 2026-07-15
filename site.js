// Shared across every page. Loads after projects.js so the cards it renders
// are already in the DOM when the reveal observer starts watching.

// UTC clock — header on every page.
(function(){
  var el = document.getElementById('utc');
  if (!el) return;
  function p(n){ return String(n).padStart(2,'0'); }
  function tick(){
    var d = new Date();
    el.textContent = p(d.getUTCHours())+':'+p(d.getUTCMinutes())+':'+p(d.getUTCSeconds());
  }
  tick(); setInterval(tick, 1000);
})();

// Reveal on scroll. .reveal starts at opacity:0, so anything not observed
// stays invisible — bail out by showing everything if IO is unavailable.
(function(){
  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) {
    els.forEach(function(el){ el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: .15 });
  els.forEach(function(el){ io.observe(el); });
})();
