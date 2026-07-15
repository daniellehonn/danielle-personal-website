// Shared UTC clock — used by the index and every case study page.
(function(){
  var el=document.getElementById('utc');
  if(!el) return;
  function p(n){return String(n).padStart(2,'0');}
  function tick(){var d=new Date();el.textContent=p(d.getUTCHours())+':'+p(d.getUTCMinutes())+':'+p(d.getUTCSeconds());}
  tick();setInterval(tick,1000);
})();
