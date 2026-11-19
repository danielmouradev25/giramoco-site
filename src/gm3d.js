/* Gira Moço · capa 3D "Mata" para a home da Montink (Script Head) */
(function(){
  if (window.__gm3d) return; window.__gm3d = true;
  var PRINT = (document.currentScript && document.currentScript.src ? document.currentScript.src.replace(/[^\/]*$/, '') : 'https://cdn.jsdelivr.net/gh/danielmouradev25/giramoco-site@main/') + 'assets/baiana.jpg';
  var LAUNCH = new Date('2026-11-20T00:00:00-03:00').getTime();

  function isHome(){
    var p = location.pathname.replace(/\/+$/, '');
    return p === '' || /^\/[^\/]+$/.test(p) && !/\./.test(p) && document.querySelector('[id^="carrossel-"],[id^="secao-de-informacao-"]') !== null;
  }
  function storeBase(){ var p = location.pathname.replace(/\/+$/, ''); return p; }

  /* fontes e estilo */
  function addHead(){
    if (document.getElementById('gm3d-fonts')) return;
    var l = document.createElement('link'); l.id = 'gm3d-fonts'; l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=Rubik:wght@400;500;600&family=Mali:wght@600;700&display=swap';
    document.head.appendChild(l);
    var s = document.createElement('style'); s.id = 'gm3d-css';
    s.textContent = [
      '#gm3d{--papel:#F3EEE4;--papel-2:#E8E0D0;--tinta:#171412;--terra:#A9532D;--f-t:"Archivo","Arial Narrow",Impact,sans-serif;--f-x:"Rubik",Arial,sans-serif;--f-m:"Mali","Comic Neue",cursive;position:relative;flex-shrink:0;width:100%;height:380vh;height:380svh;background:var(--papel);color:var(--tinta);font-family:var(--f-x)}',
      '#gm3d *{box-sizing:border-box}',
      '#gm3d .gm-palco{position:sticky;top:0;height:100vh;height:100svh;overflow:hidden;background:radial-gradient(70% 60% at 50% 45%,#FBF7EE,var(--papel) 60%,var(--papel-2))}',
      '#gm3d canvas{position:absolute;inset:0;width:100%;height:100%;display:block}',
      '#gm3d .gm-ato{position:absolute;left:0;right:0;bottom:clamp(76px,11vh,110px);padding:0 clamp(16px,4vw,56px);max-width:900px;display:grid;justify-items:start;gap:14px;opacity:0;visibility:hidden;transform:translateY(16px);transition:opacity .5s ease,transform .7s cubic-bezier(.2,.7,.2,1),visibility 0s linear .5s;pointer-events:none}',
      '#gm3d .gm-ato.on{opacity:1;visibility:visible;transform:none;transition:opacity .5s ease,transform .7s cubic-bezier(.2,.7,.2,1),visibility 0s}',
      '#gm3d .gm-ato.on a{pointer-events:auto}',
      '#gm3d .gm-tag{display:inline-block;font-weight:600;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--terra);background:var(--papel);padding:.35em .6em;margin:0}',
      '#gm3d .gm-h{font-family:var(--f-t);font-stretch:62%;font-weight:800;text-transform:uppercase;line-height:1.04;margin:0;font-size:clamp(2.5rem,9.6vw,6.8rem);text-wrap:balance}',
      '#gm3d .gm-cx{background:var(--tinta);color:var(--papel);padding:0 .14em;-webkit-box-decoration-break:clone;box-decoration-break:clone}',
      '#gm3d .gm-lin{display:inline;background:var(--papel);font-weight:500;padding:.18em .5em;line-height:1.9;-webkit-box-decoration-break:clone;box-decoration-break:clone;margin:0}',
      '#gm3d .gm-dica{font-size:12px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;background:var(--papel);padding:.4em .7em}',
      '#gm3d .gm-btns{display:flex;flex-wrap:wrap;gap:10px;margin-top:6px}',
      '#gm3d .gm-btn{display:inline-flex;align-items:center;padding:12px 20px;border-radius:999px;background:var(--tinta);color:var(--papel);text-decoration:none;font-weight:600;font-size:14px;border:1.5px solid var(--tinta);transition:background .2s,border-color .2s}',
      '#gm3d .gm-btn:hover{background:var(--terra);border-color:var(--terra)}',
      '#gm3d .gm-btn.claro{background:var(--papel);color:var(--tinta);border-color:var(--papel)}',
      '#gm3d .gm-btn.claro:hover{background:var(--terra);color:var(--papel);border-color:var(--terra)}',
      '#gm3d .gm-passaro{position:absolute;left:0;top:0;width:clamp(78px,10vw,136px);pointer-events:none;will-change:transform;transform:translate(52vw,24vh)}',
      '#gm3d .gm-passaro svg{display:block;width:100%;height:auto;overflow:visible}',
      '#gm3d .asa{transform-box:view-box;transform-origin:116px 80px;animation:gmbater .26s ease-in-out infinite alternate}',
      '#gm3d .asa.longe{animation-delay:-.05s}',
      '@keyframes gmbater{from{transform:rotate(34deg)}to{transform:rotate(-38deg)}}',
      '#gm3d .gm-bilhete{position:absolute;left:0;top:0;pointer-events:none;font-family:var(--f-m);font-weight:700;font-size:clamp(18px,1.9vw,26px);line-height:1.2;background:var(--papel);border:1.5px solid var(--tinta);border-radius:8px;padding:.15em .55em .25em;box-shadow:3px 3px 0 var(--tinta);transition:opacity .4s;white-space:nowrap}',
      '#gm3d.sem3d{height:auto}#gm3d.sem3d .gm-palco{position:relative;height:auto;min-height:70vh;padding:15vh 0 0}#gm3d.sem3d .gm-ato{position:relative;bottom:auto;opacity:1;visibility:visible;transform:none;margin-bottom:40px}#gm3d.sem3d .gm-ato.extra{display:none}#gm3d.sem3d canvas,#gm3d.sem3d .gm-bilhete{display:none}',
      '@media (max-width:899px){#gm3d .gm-h{font-size:clamp(2.4rem,12.5vw,4.4rem)}#gm3d .gm-ato{bottom:84px}}',
      '@media (prefers-reduced-motion:reduce){#gm3d .asa{animation:none}#gm3d .gm-ato{transition:none}}'
    ].join('\n');
    document.head.appendChild(s);
  }

  var BIRD = '<svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg"><g stroke="#171412" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">' +
    '<g class="asa longe"><path d="M114 76 C96 44 70 30 44 32 C64 48 84 64 110 86 Z" fill="#4E3622"/></g>' +
    '<path d="M70 82 L22 70 L26 86 L18 100 L72 98 Z" fill="#6B4A2E"/><path d="M24 80 L60 86 M24 92 L62 94" stroke="#F3EEE4" stroke-width="2"/>' +
    '<ellipse cx="112" cy="94" rx="52" ry="33" fill="#F1C232"/><path d="M62 92 C66 66 104 54 150 62 C146 78 116 86 62 98 Z" fill="#6B4A2E"/>' +
    '<path d="M98 120 L92 134 M110 122 L108 136" stroke-width="3"/><circle cx="160" cy="60" r="27" fill="#171412"/>' +
    '<path d="M136 58 C146 40 170 36 188 50" fill="none" stroke="#F3EEE4" stroke-width="7"/><path d="M146 78 C158 90 176 86 186 70 C176 72 160 72 146 78 Z" fill="#F3EEE4"/>' +
    '<path d="M150 34 L160 28 L168 35 Z" fill="#F1C232" stroke-width="2"/><path d="M184 58 L214 63 L184 70 Z" fill="#171412"/><path d="M146 58 L166 57" stroke-width="2.5"/>' +
    '<circle cx="174" cy="59" r="9" fill="#A9532D"/><path d="M170 55 L174 52" stroke="#F3EEE4" stroke-width="2"/>' +
    '<g class="asa"><path d="M118 78 C100 44 76 26 50 22 C64 44 84 66 116 90 Z" fill="#7A5636"/><path d="M64 32 L98 66 M60 42 L94 72 M76 30 L104 62" stroke="#F3EEE4" stroke-width="2"/></g></g></svg>';

  function build(){
    var base = storeBase();
    var lancado = Date.now() >= LAUNCH;
    var sec = document.createElement('section'); sec.id = 'gm3d'; sec.setAttribute('aria-label', 'Gira Moço: a mata');
    sec.innerHTML =
      '<div class="gm-palco"><canvas aria-hidden="true"></canvas>' +
      '<div class="gm-bilhete" aria-hidden="true">nem te vi!</div>' +
      '<div class="gm-passaro" aria-hidden="true">' + BIRD + '</div>' +
      '<div class="gm-ato on" data-ato="0"><span class="gm-tag">Coleção 01 · Só Tem no Brasil</span>' +
        '<h2 class="gm-h"><span class="gm-cx">Brasilidades com história</span></h2>' +
        '<p><span class="gm-lin">Camisetas autorais de cotidiano, bichos do Brasil e retratos.</span></p>' +
        '<span class="gm-dica">Role para entrar na mata ↓</span></div>' +
      '<div class="gm-ato extra" data-ato="1"><span class="gm-tag">Gira Moço</span>' +
        '<h2 class="gm-h"><span class="gm-cx">A moda como manifesto de preservação de identidades e culturas</span></h2></div>' +
      '<div class="gm-ato extra" data-ato="2"><span class="gm-tag">Coleção 01 · Só Tem no Brasil</span>' +
        '<h2 class="gm-h"><span class="gm-cx">' + (lancado ? 'Já está no ar' : 'Lançamento 20.11') + '</span></h2>' +
        '<div class="gm-btns"><a class="gm-btn" href="' + base + '/camisetas">Ver camisetas</a>' +
        '<a class="gm-btn claro" href="https://www.instagram.com/use_giramoco/" target="_blank" rel="noopener">@use_giramoco ↗</a></div></div>' +
      '</div>';
    return sec;
  }

  var inst = null; // {sec, stop}

  function progress(sec){
    var stage = sec.firstElementChild, total = sec.offsetHeight - stage.offsetHeight;
    if (total <= 0) return 0;
    var r = (stage.getBoundingClientRect().top - sec.getBoundingClientRect().top) / total;
    return r < 0 ? 0 : r > 1 ? 1 : r;
  }

  function start(sec){
    var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    var ptr = {x: 0, y: 0, active: false};
    var alive = true;
    var acts = [].slice.call(sec.querySelectorAll('.gm-ato')), note = sec.querySelector('.gm-bilhete');
    function onScroll(){
      if (!alive) return;
      var p = progress(sec), i = p < 0.16 ? 0 : p < 0.70 ? 1 : 2;
      acts.forEach(function(a){ a.classList.toggle('on', +a.dataset.ato === i); });
      if (note) note.style.opacity = p < 0.12 ? '1' : '0';
    }
    function onMove(e){ if (e.pointerType === 'touch') return; ptr.x = (e.clientX / innerWidth) * 2 - 1; ptr.y = -((e.clientY / innerHeight) * 2 - 1); ptr.active = true; }
    document.addEventListener('scroll', onScroll, {capture: true, passive: true});
    addEventListener('pointermove', onMove, {passive: true});
    onScroll();

    var ctx = {sec: sec, reduce: reduce, ptr: ptr, alive: function(){ return alive && sec.isConnected; }};
    import('https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.min.js')
      .then(function(THREE){ return mata(THREE, ctx); })
      .catch(function(e){ console.warn('[GM] capa sem 3D', e); sec.classList.add('sem3d'); });

    return function stop(){
      alive = false;
      document.removeEventListener('scroll', onScroll, {capture: true});
      removeEventListener('pointermove', onMove);
      if (ctx.dispose) ctx.dispose();
    };
  }

  /* ===== mata em xilogravura (Three.js) ===== */
  function mata(THREE, ctx){
    var sec = ctx.sec, stage = sec.firstElementChild, canvas = stage.querySelector('canvas');
    var bird = stage.querySelector('.gm-passaro'), note = stage.querySelector('.gm-bilhete');
    var reduce = ctx.reduce;
    var clamp = function(x, a, b){ return Math.min(b, Math.max(a, x)); };
    var smooth = function(x){ x = clamp(x, 0, 1); return x * x * (3 - 2 * x); };
    var mix = function(a, b, t){ return a + (b - a) * t; };
    function rng(seed){ return function(){ seed |= 0; seed = seed + 0x6D2B79F5 | 0; var t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
    var INKS = ['#171412', '#22302A', '#2E4535', '#566B58', '#8F9C88', '#C2BCA6'];
    function carve(g, fn){ g.save(); g.globalCompositeOperation = 'destination-out'; fn(); g.restore(); }
    function leaf(g, R, x, y, ang, L, ink, o){
      o = o || {}; var W = L * (o.w || 0.2), bend = (R() - 0.5) * L * 0.25;
      g.save(); g.translate(x, y); g.rotate(ang); g.beginPath(); g.moveTo(0, 0);
      g.quadraticCurveTo(L * 0.42, -W * 1.15 + bend, L, bend * 1.4); g.quadraticCurveTo(L * 0.45, W * 1.15 + bend, 0, 0);
      g.fillStyle = ink; g.fill();
      carve(g, function(){
        g.lineCap = 'round'; g.lineWidth = Math.max(1.2, L * 0.011);
        g.beginPath(); g.moveTo(L * 0.04, 0); g.quadraticCurveTo(L * 0.45, bend * 0.9, L * 0.92, bend * 1.3); g.stroke();
        g.lineWidth = Math.max(1, L * 0.006); var n = o.veins || 9;
        for (var k = 1; k < n; k++) { var t = k / n, px = L * t * 0.95, py = bend * t * 1.2, len = W * (1 - Math.abs(t - 0.45)) * 0.85;
          g.beginPath(); g.moveTo(px, py); g.lineTo(px + len * 0.55, py - len); g.stroke();
          g.beginPath(); g.moveTo(px, py); g.lineTo(px + len * 0.55, py + len); g.stroke(); }
      });
      g.restore();
    }
    function frond(g, R, x, y, ang, L, ink){
      g.save(); g.translate(x, y); g.rotate(ang);
      var droop = L * (0.18 + R() * 0.2);
      var P = function(t){ return {x: L * t, y: droop * t * t - L * 0.12 * Math.sin(Math.PI * t)}; };
      g.strokeStyle = ink; g.fillStyle = ink; g.lineCap = 'round'; g.lineWidth = Math.max(1.5, L * 0.012);
      g.beginPath(); for (var t = 0; t <= 1.001; t += 0.05) { var p = P(t); t === 0 ? g.moveTo(p.x, p.y) : g.lineTo(p.x, p.y); } g.stroke();
      for (var u = 0.06; u < 1; u += 0.032) {
        var a0 = P(u), q = P(u + 0.01), a = Math.atan2(q.y - a0.y, q.x - a0.x), ll = L * 0.3 * (1 - u * 0.65) * (0.8 + R() * 0.3);
        [-1, 1].forEach(function(side){ var aa = a + side * (0.95 + R() * 0.25) + 0.35;
          g.save(); g.translate(a0.x, a0.y); g.rotate(aa); g.beginPath(); g.moveTo(0, 0);
          g.quadraticCurveTo(ll * 0.5, -ll * 0.07, ll, ll * 0.12); g.quadraticCurveTo(ll * 0.5, ll * 0.07, 0, 0); g.fill(); g.restore(); });
      }
      g.restore();
    }
    function vine(g, R, x, H, ink){
      var len = H * (0.18 + R() * 0.32), sway = (R() - 0.5) * H * 0.12;
      g.save(); g.strokeStyle = ink; g.fillStyle = ink; g.lineWidth = Math.max(1.5, H * 0.003); g.lineCap = 'round';
      g.beginPath(); g.moveTo(x, -10); g.quadraticCurveTo(x + sway, len * 0.5, x + sway * 0.4, len); g.stroke();
      for (var t = 0.12; t < 1; t += 0.09) { var px = mix(x, x + sway * 0.4, t) + sway * Math.sin(t * Math.PI) * 0.5, py = len * t, s = H * 0.014 * (0.7 + R() * 0.6), side = (Math.round(t * 100) % 2) ? 1 : -1;
        g.beginPath(); g.ellipse(px + side * s, py, s, s * 0.6, side * 0.6, 0, Math.PI * 2); g.fill(); }
      g.restore();
    }
    function trunk(g, R, x, W, H, ink){
      var w = W * (0.018 + R() * 0.03), lean = (R() - 0.5) * W * 0.04;
      g.save(); g.fillStyle = ink; g.beginPath(); g.moveTo(x - w * 2.4, H + 4); g.quadraticCurveTo(x - w * 0.6, H * 0.86, x - w * 0.5 + lean, H * 0.5);
      g.lineTo(x - w * 0.4 + lean * 2, -10); g.lineTo(x + w * 0.4 + lean * 2, -10); g.lineTo(x + w * 0.5 + lean, H * 0.5); g.quadraticCurveTo(x + w * 0.6, H * 0.86, x + w * 2.4, H + 4); g.closePath(); g.fill();
      carve(g, function(){ g.lineWidth = Math.max(1, w * 0.08); for (var k = -2; k <= 2; k++) { g.beginPath(); g.moveTo(x + k * w * 0.18 + lean * 2, 0); g.quadraticCurveTo(x + k * w * 0.2 + lean, H * 0.5, x + k * w * 0.5, H * 0.95); g.stroke(); } });
      g.restore();
    }
    function heliconia(g, R, x, y, s, ang){
      g.save(); g.translate(x, y); g.rotate(ang); g.strokeStyle = INKS[1]; g.lineWidth = s * 0.05; g.beginPath(); g.moveTo(0, 0); g.lineTo(0, s * 1.9); g.stroke();
      for (var k = 0; k < 6; k++) { var yy = s * 0.25 + k * s * 0.27, side = k % 2 ? 1 : -1, bl = s * (0.55 - k * 0.04);
        g.save(); g.translate(0, yy); g.scale(side, 1); g.beginPath(); g.moveTo(0, 0); g.quadraticCurveTo(bl * 0.6, -bl * 0.05, bl, -bl * 0.55); g.quadraticCurveTo(bl * 0.5, bl * 0.25, 0, bl * 0.18); g.closePath();
        g.fillStyle = '#A9532D'; g.fill(); g.beginPath(); g.moveTo(bl * 0.82, -bl * 0.42); g.lineTo(bl, -bl * 0.55); g.lineTo(bl * 0.86, -bl * 0.3); g.closePath(); g.fillStyle = '#F1C232'; g.fill(); g.restore(); }
      g.restore();
    }
    function grass(g, R, W, H, ink, n){
      g.save(); g.strokeStyle = ink; g.lineCap = 'round';
      for (var k = 0; k < n; k++) { var x = R() * W, h = H * (0.05 + R() * 0.12), lean = (R() - 0.5) * h * 0.9; g.lineWidth = 1.5 + R() * 3.5;
        g.beginPath(); g.moveTo(x, H + 4); g.quadraticCurveTo(x + lean * 0.3, H - h * 0.6, x + lean, H - h); g.stroke(); }
      g.restore();
    }
    function makeLayer(i, N, W, H){
      var c = document.createElement('canvas'); c.width = W; c.height = H; var g = c.getContext('2d'), R = rng(1009 + i * 7919);
      var ink = INKS[i], d = i / (N - 1), portrait = W < H, cx = W * 0.5, cy = H * 0.46;
      var rx = W * (portrait ? 0.42 - 0.1 * d : 0.37 - 0.12 * d), ry = H * (portrait ? 0.31 - 0.08 * d : 0.39 - 0.12 * d), S = Math.min(W, H), k;
      if (i >= 2) { var nT = 2 + Math.floor(R() * 3); for (k = 0; k < nT; k++) trunk(g, R, cx + (k % 2 ? 1 : -1) * (rx * (1.05 + R() * 0.7)), W, H, ink); }
      if (i >= 3) for (k = 0; k < 2; k++) { var side = k ? 1 : -1, x = cx + side * rx * (1.1 + R() * 0.5), top = H * (0.12 + R() * 0.1);
        g.save(); g.strokeStyle = ink; g.lineWidth = S * 0.008; g.beginPath(); g.moveTo(x, H + 5); g.quadraticCurveTo(x + side * S * 0.03, H * 0.5, x, top); g.stroke(); g.restore();
        for (var f = 0; f < 7; f++) frond(g, R, x, top, -Math.PI / 2 + (f / 6 - 0.5) * 3.4, S * (0.16 + R() * 0.05), ink); }
      var count = Math.round(26 + (1 - d) * 22);
      for (k = 0; k < count; k++) {
        var th = R() * Math.PI * 2, s = 1.12 + R() * 0.9, px = clamp(cx + Math.cos(th) * rx * s, -W * 0.05, W * 1.05), py = clamp(cy + Math.sin(th) * ry * s, -H * 0.05, H * 1.05);
        var inward = th + Math.PI + (R() - 0.5) * 0.9, L = S * (0.14 + R() * 0.2) * (1.15 - d * 0.45);
        if (Math.sin(th) < -0.55 && R() < 0.5) { vine(g, R, px, H, ink); continue; }
        if (R() < 0.42) frond(g, R, px, py, inward, L * 1.1, ink); else leaf(g, R, px, py, inward, L, ink, {w: 0.16 + R() * 0.1, veins: 7 + Math.floor(R() * 6)});
      }
      if (i >= 1 && i <= 3) for (k = 0; k < 2; k++) { var sd = k ? 1 : -1; heliconia(g, R, cx + sd * rx * (0.95 + R() * 0.3), cy - ry * (0.2 + R() * 0.6), S * 0.07 * (1.2 - d * 0.4), sd * 0.25); }
      grass(g, R, W, H, ink, Math.round(120 * (1 - d * 0.5)));
      carve(g, function(){ g.lineCap = 'round'; for (var q = 0; q < 900; q++) { var x = R() * W, y = R() * H, l = 3 + R() * 9, a = -0.6 + R() * 0.3; g.lineWidth = 0.8 + R() * 1.4; g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke(); } });
      return c;
    }
    function makeSky(W, H){
      var c = document.createElement('canvas'); c.width = W; c.height = H; var g = c.getContext('2d');
      var gr = g.createRadialGradient(W * 0.5, H * 0.42, 0, W * 0.5, H * 0.42, Math.max(W, H) * 0.7);
      gr.addColorStop(0, '#FFFBF2'); gr.addColorStop(0.45, '#F3EEE4'); gr.addColorStop(1, '#E2D8C4'); g.fillStyle = gr; g.fillRect(0, 0, W, H);
      var R = rng(77); g.fillStyle = '#DED5C1'; for (var k = 0; k < 9; k++) { var x = R() * W, w = W * (0.01 + R() * 0.015); g.fillRect(x, H * (0.1 + R() * 0.2), w, H); }
      return c;
    }
    function makePrint(){
      return new Promise(function(res, rej){ var im = new Image(); im.crossOrigin = 'anonymous'; im.onload = function(){ res(im); }; im.onerror = rej; im.src = PRINT; }).then(function(img){
        var wait = document.fonts && document.fonts.load ? Promise.race([document.fonts.load('700 46px Mali'), new Promise(function(r){ setTimeout(r, 1500); })]).catch(function(){}) : Promise.resolve();
        return wait.then(function(){
          var c = document.createElement('canvas'); c.width = 1100; c.height = 1300; var g = c.getContext('2d');
          g.save(); g.shadowColor = 'rgba(23,20,18,.35)'; g.shadowBlur = 50; g.shadowOffsetY = 22; g.fillStyle = '#FBF8F1'; g.fillRect(70, 50, 960, 1150); g.restore();
          var sx = img.width * 0.31, sw = img.width * 0.62, sh = img.height; g.drawImage(img, sx, 0, sw, sh, 110, 90, 880, Math.min(950, 880 * sh / sw));
          g.fillStyle = '#4B443D'; g.font = '700 46px Mali, "Comic Neue", cursive'; g.textAlign = 'center'; g.fillText('retratos · coleção 01', 550, 1125);
          g.fillStyle = 'rgba(217,200,167,.82)';
          g.save(); g.translate(170, 62); g.rotate(-0.35); g.fillRect(-80, -22, 160, 44); g.restore();
          g.save(); g.translate(930, 62); g.rotate(0.3); g.fillRect(-80, -22, 160, 44); g.restore();
          return c;
        });
      });
    }
    var VS = 'uniform float uTime, uAmp, uSeed; varying vec2 vUv; void main(){ vUv = uv; vec3 p = position; float edge = clamp(abs(uv.y - 0.5) * 2.0 + abs(uv.x - 0.5) * 1.2, 0.0, 1.6); p.x += sin(uTime * 0.9 + uv.y * 6.0 + uSeed) * uAmp * edge; p.y += cos(uTime * 0.7 + uv.x * 5.0 + uSeed * 1.7) * uAmp * 0.45 * edge; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }';
    var FS = 'uniform sampler2D map; uniform float uOpacity; varying vec2 vUv; void main(){ vec4 c = texture2D(map, vUv); gl_FragColor = vec4(c.rgb, c.a * uOpacity); }';

    var small = innerWidth < 900;
    var renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: !small, alpha: false, powerPreference: 'high-performance'});
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, small ? 1.5 : 2));
    renderer.setClearColor(new THREE.Color('#F3EEE4'), 1);
    var scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(50, 1, 0.05, 200);
    var N = 6, D = 5.2, Z0 = 6, tanH = Math.tan(THREE.MathUtils.degToRad(25));
    var aspect0 = clamp(stage.clientWidth / Math.max(1, stage.clientHeight), 0.42, 2.4);
    var TW = small ? 900 : 1800, TH = Math.round(TW / aspect0), maxAniso = renderer.capabilities.getMaxAnisotropy();
    var layers = [], disposables = [];
    function shader(tex, amp, seed, transparent){ var m = new THREE.ShaderMaterial({uniforms: {map: {value: tex}, uTime: {value: 0}, uAmp: {value: amp}, uSeed: {value: seed}, uOpacity: {value: 1}}, vertexShader: VS, fragmentShader: FS, transparent: transparent, depthWrite: false}); disposables.push(m, tex); return m; }
    for (var i = 0; i < N; i++) {
      var tex = new THREE.CanvasTexture(makeLayer(i, N, TW, TH)); tex.anisotropy = Math.min(4, maxAniso);
      var z = -i * D, dist = Z0 - z, h = 2 * dist * tanH * 1.1, w = h * aspect0 * 1.1;
      var geo = new THREE.PlaneGeometry(w, h, 24, 24); disposables.push(geo);
      var m = new THREE.Mesh(geo, shader(tex, h * 0.006, i * 1.7, true)); m.position.z = z; m.renderOrder = N - i; scene.add(m); layers.push(m);
    }
    var zPrint = -(N - 1) * D - 4.5, zEnd = zPrint + 4.6, zSky = zPrint - 6, skyH = 2 * (Z0 - zSky) * tanH * 1.15;
    var skyGeo = new THREE.PlaneGeometry(skyH * aspect0 * 1.15, skyH); disposables.push(skyGeo);
    var sky = new THREE.Mesh(skyGeo, shader(new THREE.CanvasTexture(makeSky(1024, Math.round(1024 / aspect0))), 0, 0, false));
    sky.position.z = zSky; sky.renderOrder = -1; scene.add(sky);
    var print = null;
    makePrint().then(function(pc){
      var t = new THREE.CanvasTexture(pc); t.anisotropy = Math.min(8, maxAniso);
      var g = new THREE.PlaneGeometry(1, 1300 / 1100); disposables.push(g);
      print = new THREE.Mesh(g, shader(t, 0, 0, true)); print.position.set(0, 0.05, zPrint); print.rotation.z = -0.035; print.renderOrder = 0; scene.add(print); fit();
    }).catch(function(){});
    function fit(){
      var w = stage.clientWidth, h = stage.clientHeight; if (!w || !h) return;
      renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
      if (print) { var vh = 2 * (zEnd - zPrint) * tanH, s = Math.min(vh * 0.6 / (1300 / 1100), vh * camera.aspect * 0.78); print.scale.set(s, s, 1); print.position.y = vh * (camera.aspect < 0.9 ? 0.12 : 0.06); print.position.x = camera.aspect > 1.1 ? vh * camera.aspect * 0.17 : 0; }
    }
    fit(); addEventListener('resize', fit);
    var time = 0, prog = 0, px = 0, py = 0, lastBx = null, face = 1, raf = 0, clock = new THREE.Clock(), ptr = ctx.ptr;
    function frame(){
      if (!ctx.alive()) return;
      raf = requestAnimationFrame(frame);
      var dt = Math.min(clock.getDelta(), 0.05), r = stage.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      if (!reduce) time += dt;
      var target = smooth(clamp((progress(sec) - 0.04) / 0.86, 0, 1));
      prog += (target - prog) * Math.min(1, dt * 4.5); if (Math.abs(target - prog) < 1e-4) prog = target;
      var camZ = mix(Z0, zEnd, prog), auto = reduce ? 0 : 1;
      var ax = ptr.active ? ptr.x : Math.sin(time * 0.35) * 0.6 * auto, ay = ptr.active ? ptr.y : Math.cos(time * 0.27) * 0.4 * auto;
      px += (ax * 0.35 - px) * 0.05; py += (ay * 0.22 - py) * 0.05;
      camera.position.set(px, py + Math.sin(time * 0.6) * 0.03, camZ); camera.lookAt(px * 0.4, py * 0.4, camZ - 10);
      layers.forEach(function(m){ var dd = camZ - m.position.z; m.material.uniforms.uOpacity.value = smooth((dd - 0.9) / 3.2); m.material.uniforms.uTime.value = time; m.visible = dd > 0.3; });
      renderer.render(scene, camera);
      var W = stage.clientWidth, H = stage.clientHeight, k = smooth(clamp(prog * 1.5, 0, 1));
      var bx = 0.5 + (W < 700 ? 0.26 : 0.3) * Math.sin(time * 0.45), by = 0.26 + 0.07 * Math.sin(time * 0.9 + 1.2);
      bx = mix(bx, 0.5 + 0.08 * Math.sin(time * 0.7), k); by = mix(by, 0.36 + 0.03 * Math.sin(time * 1.3), k);
      var sc = mix(1, 0.32, k) * (W < 700 ? 0.85 : 1), X = bx * W, Y = by * H;
      if (lastBx !== null && Math.abs(X - lastBx) > 0.15) face = X > lastBx ? 1 : -1; lastBx = X;
      var bw = bird.offsetWidth || 120;
      bird.style.transform = 'translate(' + (X - bw / 2) + 'px,' + (Y - bw * 0.33) + 'px) scale(' + (sc * face) + ',' + sc + ') rotate(' + (Math.sin(time * 2.1) * 4) + 'deg)';
      bird.style.opacity = String(1 - smooth((prog - 0.72) / 0.18));
      if (note) note.style.transform = 'translate(' + (X + bw * 0.3) + 'px,' + (Y - bw * 0.95) + 'px) rotate(-6deg)';
    }
    frame();
    ctx.dispose = function(){ cancelAnimationFrame(raf); removeEventListener('resize', fit); disposables.forEach(function(d){ try { d.dispose(); } catch (e) {} }); renderer.dispose(); };
  }

  /* encaixe na home da Montink (a loja troca de página sem recarregar) */
  function tick(){
    var home = isHome();
    if (home) {
      var mq = document.querySelector('#cabecalho');
      var content = mq && mq.parentElement && mq.parentElement.querySelector('[id^="carrossel-"],[id^="secao-de-informacao-"],[id^="banner-"]');
      if (!content) return;
      var parent = content.parentElement, marquee = parent.querySelector('[id^="marquee-"]');
      var anchor = marquee && marquee.parentElement === parent ? marquee.nextSibling : parent.firstChild;
      if (inst && inst.sec.isConnected && inst.sec.parentElement === parent) return;
      addHead();
      if (inst) { if (inst.sec.isConnected) inst.sec.remove(); }
      var sec = inst ? inst.sec : build();
      parent.insertBefore(sec, anchor);
      if (!inst) inst = {sec: sec, stop: start(sec)};
    } else if (inst) {
      inst.stop(); if (inst.sec.isConnected) inst.sec.remove(); inst = null;
    }
  }
  setInterval(tick, 400);
  if (document.readyState !== 'loading') tick(); else document.addEventListener('DOMContentLoaded', tick);
})();
