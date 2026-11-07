/* GL3D — piccolo renderer WebGL (nessuna libreria esterna) usato da Mini3D.
   Un unico contesto WebGL condiviso e fuori dal DOM disegna per tutte le viste: gli oggetti 3D vengono messi
   in coda durante il disegno di una vista e "stampati" sul suo canvas 2D (drawImage) appena la scena torna a
   disegnare in 2D o a fine frame. Così l'ordine fra 2D e 3D resta quello del codice delle scene (come prima),
   ma dentro ogni gruppo 3D c'è lo z-buffer, l'illuminazione per pixel e l'antialiasing.
   Se WebGL non c'è (o con ?nogl / localStorage m3d-nogl=1) GL3D.ok resta false e Mini3D usa il vecchio Canvas2D. */
(function () {
  'use strict';
  const G = { ok: false, active: null, stats: { flushes: 0, draws: 0 } };
  window.GL3D = G;
  let noGL = /[?&]nogl\b/.test(location.search);
  try { if (localStorage.getItem('m3d-nogl') === '1') noGL = true; } catch (e) { /* ignore */ }

  let cv = null, gl = null, gl2 = false, inst = null, u32 = false, HP = 'highp';
  let CW = 0, CH = 0, frameNo = 0, tried = false;
  const P = {};               // programmi
  const B = {};               // buffer condivisi
  const views = new WeakMap(); // ctx 2D -> vista

  /* ================= colori ================= */
  const colCache = new Map();
  let parseCtx = null;
  function rgba(c) {
    if (Array.isArray(c)) return [c[0], c[1], c[2], c[3] == null ? 1 : c[3]];
    if (c == null) c = '#60a5fa';
    let r = colCache.get(c);
    if (r) return r;
    const s = String(c).trim();
    let m;
    if (s[0] === '#' && (s.length === 7 || s.length === 9)) {
      const n = parseInt(s.slice(1, 7), 16);
      r = [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255, s.length === 9 ? parseInt(s.slice(7), 16) / 255 : 1];
    } else if (s[0] === '#' && (s.length === 4 || s.length === 5)) {
      const h = (i) => parseInt(s[i] + s[i], 16) / 255;
      r = [h(1), h(2), h(3), s.length === 5 ? h(4) : 1];
    } else if ((m = s.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s/]+([\d.]+%?))?\s*\)$/i))) {
      let a = m[4] == null ? 1 : parseFloat(m[4]); if (m[4] && m[4].endsWith('%')) a /= 100;
      r = [m[1] / 255, m[2] / 255, m[3] / 255, a];
    } else {
      // qualsiasi altro colore CSS: lo normalizza il canvas
      if (!parseCtx) parseCtx = document.createElement('canvas').getContext('2d');
      parseCtx.fillStyle = '#000'; parseCtx.fillStyle = s;
      const v = parseCtx.fillStyle;
      r = v[0] === '#' || /^rgba?\(/.test(v) ? rgba(v) : [0.5, 0.5, 0.5, 1];
    }
    if (colCache.size > 2000) colCache.clear();
    colCache.set(c, r);
    return r;
  }
  G.rgba = rgba;

  /* ================= shader ================= */
  const CAM = `
uniform mat3 uR; uniform vec3 uT; uniform vec3 uVP; uniform vec2 uDZ;
vec4 project(vec3 c) { float w = (6.0 - c.z) / 6.0; return vec4(2.0 * c.x * uVP.x / uVP.y, 2.0 * c.y * uVP.x / uVP.z, uDZ.x * w + uDZ.y, w); }`;

  const LIGHTING = `
uniform vec4 uLight; uniform vec3 uUp; uniform vec3 uAmb; uniform vec3 uRimCol;
vec3 toLin(vec3 c) { return pow(max(c, vec3(0.0)), vec3(2.2)); }
vec3 toSrgb(vec3 c) {
  c = max(c, vec3(0.0));
  c = mix(c, 0.82 + 0.18 * (1.0 - exp(-(c - 0.82) / 0.18)), step(0.82, c));
  return pow(c, vec3(1.0 / 2.2));
}
vec3 shadeIt(vec3 base, vec3 N, vec3 V, vec3 P, float spec, float shin, float rim) {
  vec3 L = uLight.w > 0.5 ? normalize(uLight.xyz - P) : uLight.xyz;
  float nl = dot(N, L);
  float hemi = dot(N, uUp) * 0.5 + 0.5;
  vec3 amb = mix(vec3(0.40, 0.37, 0.35), vec3(0.70, 0.73, 0.80), hemi) * uAmb.x;
  vec3 key = vec3(1.0, 0.97, 0.93) * uAmb.y;
  float fill = max(dot(N, normalize(vec3(-0.65, -0.15, 0.55))), 0.0) * uAmb.z;
  vec3 H = normalize(L + V);
  float sp = pow(max(dot(N, H), 0.0), shin) * spec * smoothstep(0.0, 0.15, nl) * (shin + 8.0) / 48.0;
  float fr = pow(1.0 - max(dot(N, V), 0.0), 3.0);
  return base * (amb + key * max(nl, 0.0) + fill) + key * sp + uRimCol * fr * rim;
}`;

  const NOISE = `
float h3(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float vnoise(vec3 x) {
  vec3 i = floor(x); vec3 f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(h3(i), h3(i + vec3(1.0, 0.0, 0.0)), f.x), mix(h3(i + vec3(0.0, 1.0, 0.0)), h3(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
             mix(mix(h3(i + vec3(0.0, 0.0, 1.0)), h3(i + vec3(1.0, 0.0, 1.0)), f.x), mix(h3(i + vec3(0.0, 1.0, 1.0)), h3(i + vec3(1.0, 1.0, 1.0)), f.x), f.y), f.z);
}
float fbm(vec3 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * vnoise(p); p = p * 2.03 + vec3(1.7, 9.2, 3.1); a *= 0.5; } return s; }`;

  const MESH_VS = `
attribute vec3 aPos; attribute vec3 aNor; attribute vec3 aFN; attribute vec3 aCol; attribute vec2 aUV; attribute float aX;
attribute vec4 iA; attribute vec4 iB; attribute vec4 iC;
uniform float uMode; uniform mat4 uM; uniform mat3 uNM; uniform mat3 uSpin;
varying vec3 vCam; varying vec3 vN; varying vec3 vFN; varying vec3 vObj; varying vec3 vCol; varying vec2 vUV; varying float vX; varying float vA;
${CAM}
void main() {
  vec3 wp; vec3 wn; vec3 wf; vCol = aCol; vA = 1.0;
  if (uMode < 0.5) { wp = (uM * vec4(aPos, 1.0)).xyz; wn = uNM * aNor; wf = uNM * aFN; }
  else if (uMode < 1.5) { wp = iA.xyz + aPos * iA.w; wn = aNor; wf = aNor; vCol = iC.rgb; vA = iC.a; }
  else {
    vec3 a = iA.xyz; vec3 d = iB.xyz - a; float L = length(d); vec3 y = d / max(L, 1e-6);
    vec3 t = abs(y.y) < 0.95 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
    vec3 x = normalize(cross(t, y)); vec3 z = cross(x, y);
    wp = a + x * (aPos.x * iA.w) + y * (aPos.y * L) + z * (aPos.z * iA.w);
    wn = x * aNor.x + z * aNor.z; wf = wn; vCol = iC.rgb; vA = iC.a;
  }
  vObj = uSpin * aPos; vUV = aUV; vX = aX;
  vec3 c = uR * wp + uT; vCam = c; vN = uR * wn; vFN = uR * wf;
  gl_Position = project(c);
}`;

  const MESH_FS = () => `
precision ${HP} float;
varying vec3 vCam; varying vec3 vN; varying vec3 vFN; varying vec3 vObj; varying vec3 vCol; varying vec2 vUV; varying float vX; varying float vA;
uniform vec4 uTint; uniform vec4 uMat; uniform vec4 uFog; uniform float uPat; uniform float uTime; uniform float uBevel; uniform float uCull;
uniform sampler2D uTex; uniform mat3 uR;
${LIGHTING}
${NOISE}
vec2 sphUV(vec3 q) { return vec2(atan(q.x, q.z) / 6.2831853 + 0.5, 0.5 - asin(clamp(q.y, -1.0, 1.0)) / 3.1415927); }
void main() {
  vec3 V = normalize(vec3(0.0, 0.0, 6.0) - vCam);
  vec3 N = normalize(vN);
  float facing = dot(vFN, V);
  if (uCull > 0.5 && facing < 0.0) discard;
  if (facing < 0.0) N = -N;
  vec3 base = toLin(vCol * uTint.rgb);
  float alpha = uTint.a * vA;
  float spec = uMat.x, shin = uMat.y, rim = uMat.z, emit = uMat.w;
  vec3 q = normalize(vObj);
  if (uPat > 0.5) {
    if (uPat < 1.5) {                       // 1: Sole
      float n = fbm(q * 4.5 + vec3(uTime * 0.05, 0.0, uTime * 0.03));
      float g = fbm(q * 14.0 - vec3(0.0, uTime * 0.08, 0.0));
      vec3 c = mix(vec3(1.0, 0.42, 0.04), vec3(1.0, 0.86, 0.45), smoothstep(0.25, 0.75, n * 0.75 + g * 0.45));
      float mu = max(dot(N, V), 0.0);
      c *= 0.55 + 0.45 * pow(mu, 0.45);
      c = c * 1.25 + vec3(0.25, 0.12, 0.0) * pow(1.0 - mu, 2.0);
      gl_FragColor = vec4(toSrgb(c) * alpha, alpha); return;
    } else if (uPat < 2.5) {                // 2: Giove (bande)
      float w = fbm(q * vec3(2.0, 7.0, 2.0) + 3.0);
      float t = sin(q.y * 21.0 + w * 3.2);
      vec3 cream = toLin(vec3(0.93, 0.86, 0.72));
      base = mix(base * 0.72, cream, smoothstep(-0.2, 0.9, t) * 0.75);
      float sp2 = distance(q, normalize(vec3(0.55, -0.36, 0.75)));
      base = mix(base, toLin(vec3(0.78, 0.36, 0.22)), (1.0 - smoothstep(0.1, 0.17, sp2)) * 0.85);
      spec = 0.05;
    } else if (uPat < 3.5) {                // 3: Saturno
      float t = sin(q.y * 30.0 + fbm(q * 3.0) * 1.4);
      base *= 0.86 + 0.16 * t; spec = 0.05;
    } else if (uPat < 4.5) {                // 4: roccioso (Mercurio, Luna)
      float n = fbm(q * 5.0);
      float cr = smoothstep(0.62, 0.7, vnoise(q * 11.0)) * 0.35;
      base *= (0.62 + 0.62 * n) * (1.0 - cr); spec = 0.03;
    } else if (uPat < 5.5) {                // 5: Venere
      float n = fbm(q * vec3(2.5, 7.0, 2.5) + vec3(uTime * 0.02, 0.0, 0.0));
      base *= 0.85 + 0.3 * n; spec = 0.1;
    } else if (uPat < 6.5) {                // 6: giganti di ghiaccio
      base *= 0.93 + 0.08 * sin(q.y * 12.0 + fbm(q * 3.0) * 1.2); spec = 0.25; shin = 30.0;
    } else if (uPat < 8.5) {                // 7: Terra con nuvole, 8: globo
      vec3 tc = texture2D(uTex, sphUV(q)).rgb;
      float wet = smoothstep(0.04, 0.16, tc.b - max(tc.r, tc.g));
      base = toLin(tc);
      spec = mix(0.04, 0.9, wet); shin = mix(8.0, 70.0, wet);
      if (uPat < 7.5) {
        float cl = smoothstep(0.52, 0.78, fbm(q * 4.0 + vec3(uTime * 0.01, 0.0, 0.0)));
        base = mix(base, vec3(0.95), cl * 0.85); spec *= 1.0 - cl;
      }
    } else if (uPat < 9.5) {                // 9: anelli
      float r = vUV.x;
      float b = 0.55 + 0.45 * sin(r * 70.0) * sin(r * 23.0 + 1.0);
      b *= 0.7 + 0.5 * vnoise(vec3(r * 90.0, 0.0, 0.0));
      b *= smoothstep(0.0, 0.025, abs(r - 0.63) - 0.035);
      b *= smoothstep(0.0, 0.05, r) * (1.0 - smoothstep(0.93, 1.0, r));
      base *= 0.75 + 0.4 * r;
      alpha *= clamp(b, 0.0, 1.0) * 0.9;
      spec = 0.0; rim = 0.0;
      N = facing < 0.0 ? -normalize(vFN) : normalize(vFN);
    } else if (uPat < 10.5) {               // 10: acqua
      vec3 p = vObj * 11.0;
      vec2 rp = vec2(vnoise(p + vec3(uTime * 0.4, 0.0, 0.0)) - 0.5, vnoise(p.zyx + vec3(5.0, 0.0, uTime * 0.3)) - 0.5);
      N = normalize(N + (uR * vec3(rp.x, 0.0, rp.y)) * 0.14);
      float fr = pow(1.0 - max(dot(N, V), 0.0), 4.0);
      alpha *= clamp(mix(0.45, 0.9, vX) + fr * 0.3, 0.0, 1.0);
      shin = 90.0;
    } else if (uPat < 11.5) {               // 11: cubetti smussati
      float e = min(min(vUV.x, 1.0 - vUV.x), min(vUV.y, 1.0 - vUV.y));
      float b = 1.0 - smoothstep(0.0, uBevel, e);
      float hl = smoothstep(uBevel * 0.45, uBevel, e) * (1.0 - smoothstep(uBevel, uBevel * 1.9, e));
      base *= mix(1.0, 0.62, b * b);
      base += vec3(0.10) * hl;
    } else if (uPat < 12.5) {               // 12: ombra morbida
      float a = alpha * vX;
      gl_FragColor = vec4(0.0, 0.0, 0.0, a); return;
    } else if (uPat < 13.5) {               // 13: Marte
      float n = fbm(q * 5.0);
      base *= 0.7 + 0.5 * n;
      base = mix(base, vec3(0.95), smoothstep(0.86, 0.9, abs(q.y)));
      spec = 0.04;
    }
  }
  vec3 col = shadeIt(base, N, V, vCam, spec, shin, rim) + base * emit;
  float fz = smoothstep(0.4, -3.2, vCam.z) * uFog.a;
  col = mix(col, toLin(uFog.rgb), fz);
  gl_FragColor = vec4(toSrgb(col) * alpha, alpha);
}`;

  const LINE_VS = `
attribute vec3 aA; attribute vec3 aB; attribute vec2 aS; attribute vec4 aC;
uniform vec3 uLW; // larghezza (px css), bias di profondità, dpr
varying vec4 vC; varying float vSide; varying float vHW;
${CAM}
void main() {
  vec4 a = project(uR * aA + uT); vec4 b = project(uR * aB + uT);
  vec4 me = aS.x < 0.5 ? a : b;
  vec2 half_ = uVP.yz * 0.5;
  vec2 sa = a.xy / a.w * half_; vec2 sb = b.xy / b.w * half_;
  vec2 d = sb - sa; float L = length(d); d = L > 1e-5 ? d / L : vec2(1.0, 0.0);
  vec2 n = vec2(-d.y, d.x);
  float hw = max(uLW.x, 1.0 / uLW.z) * 0.5 + 1.0 / uLW.z;
  vec2 off = n * aS.y * hw + d * (aS.x < 0.5 ? -1.0 : 1.0) * max(uLW.x, 1.0 / uLW.z) * 0.5;
  me.xy += off / half_ * me.w;
  me.z -= uLW.y * me.w;
  gl_Position = me; vC = aC; vSide = aS.y * hw; vHW = max(uLW.x, 1.0 / uLW.z) * 0.5;
}`;
  const LINE_FS = () => `
precision ${HP} float;
varying vec4 vC; varying float vSide; varying float vHW;
uniform vec3 uLW; uniform float uAlpha;
void main() {
  float cov = clamp((vHW - abs(vSide)) * uLW.z + 0.5, 0.0, 1.0);
  float a = vC.a * cov * uAlpha * min(1.0, uLW.x * uLW.z);
  if (a <= 0.002) discard;
  gl_FragColor = vec4(vC.rgb * a, a);
}`;

  const SPRITE_VS = `
attribute vec2 aQ; attribute vec4 aS; attribute vec4 aC;
uniform vec2 uPx;
varying vec2 vQ; varying vec4 vC; varying float vR; varying float vK;
void main() {
  float ext = aS.w > 0.5 ? 2.8 : 1.0;
  float R = aS.z * ext + 1.5;
  vec2 p = aS.xy + aQ * R;
  vQ = aQ * R / max(aS.z, 0.001); vC = aC; vR = aS.z; vK = aS.w;
  gl_Position = vec4(p.x / uPx.x * 2.0 - 1.0, 1.0 - p.y / uPx.y * 2.0, 0.0, 1.0);
}`;
  const SPRITE_FS = () => `
precision ${HP} float;
varying vec2 vQ; varying vec4 vC; varying float vR; varying float vK;
uniform vec4 uMat;
${LIGHTING}
void main() {
  float d2 = dot(vQ, vQ); float d = sqrt(d2);
  if (vK > 0.5) {
    float g = clamp(1.0 - (d - 0.55) / 2.25, 0.0, 1.0); g = g * g * g;
    vec3 c = vC.rgb * 1.15;
    float a = g * 0.75 * vC.a;
    gl_FragColor = vec4(c * a, a); return;
  }
  float aa = 1.1 / max(vR, 0.5);
  float cov = 1.0 - smoothstep(1.0 - aa, 1.0 + aa * 0.3, d);
  if (cov <= 0.0) discard;
  vec3 N = vec3(vQ.x, -vQ.y, sqrt(max(1.0 - d2, 0.0))); N = normalize(N);
  vec3 col = shadeIt(toLin(vC.rgb), N, vec3(0.0, 0.0, 1.0), vec3(0.0), uMat.x, uMat.y, uMat.z) + toLin(vC.rgb) * uMat.w;
  float a = cov * vC.a;
  gl_FragColor = vec4(toSrgb(col) * a, a);
}`;

  function compile(vs, fs) {
    const mk = (type, src) => {
      const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error('GL3D shader: ' + gl.getShaderInfoLog(s));
      return s;
    };
    const p = gl.createProgram();
    gl.attachShader(p, mk(gl.VERTEX_SHADER, vs)); gl.attachShader(p, mk(gl.FRAGMENT_SHADER, fs));
    // aPos/aA/aQ sempre in posizione 0 (attributo 0 deve essere un array attivo)
    gl.bindAttribLocation(p, 0, vs.includes('aPos') ? 'aPos' : vs.includes('aA;') ? 'aA' : 'aQ');
    gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error('GL3D link: ' + gl.getProgramInfoLog(p));
    const prog = { p, a: {}, u: {} };
    const na = gl.getProgramParameter(p, gl.ACTIVE_ATTRIBUTES);
    for (let i = 0; i < na; i++) { const n = gl.getActiveAttrib(p, i).name; prog.a[n] = gl.getAttribLocation(p, n); }
    const nu = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < nu; i++) { const n = gl.getActiveUniform(p, i).name.replace(/\[0\]$/, ''); prog.u[n] = gl.getUniformLocation(p, n); }
    return prog;
  }

  function init() {
    if (tried) return G.ok;
    tried = true;
    if (noGL) return false;
    try {
      cv = document.createElement('canvas'); cv.width = 64; cv.height = 64;
      const attrs = { alpha: true, premultipliedAlpha: true, antialias: true, depth: true, stencil: false, preserveDrawingBuffer: true };
      gl = cv.getContext('webgl2', attrs); gl2 = !!gl;
      if (!gl) gl = cv.getContext('webgl', attrs) || cv.getContext('experimental-webgl', attrs);
      if (!gl) return false;
      if (gl2) { u32 = true; inst = { div: (l, d) => gl.vertexAttribDivisor(l, d), draw: (m, n, t, o, k) => gl.drawElementsInstanced(m, n, t, o, k) }; }
      else {
        u32 = !!gl.getExtension('OES_element_index_uint');
        const e = gl.getExtension('ANGLE_instanced_arrays');
        if (e) inst = { div: (l, d) => e.vertexAttribDivisorANGLE(l, d), draw: (m, n, t, o, k) => e.drawElementsInstancedANGLE(m, n, t, o, k) };
      }
      const hp = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT);
      HP = hp && hp.precision > 0 ? 'highp' : 'mediump';
      P.mesh = compile(MESH_VS, MESH_FS());
      P.line = compile(LINE_VS, LINE_FS());
      P.sprite = compile(SPRITE_VS, SPRITE_FS());
      // buffer dinamici e indici dei quadrilateri
      B.dyn = gl.createBuffer(); B.dyn2 = gl.createBuffer(); B.inst = gl.createBuffer();
      const NQ = 16383, qi = new Uint16Array(NQ * 6);
      for (let i = 0; i < NQ; i++) { const o = i * 6, v = i * 4; qi[o] = v; qi[o + 1] = v + 1; qi[o + 2] = v + 2; qi[o + 3] = v; qi[o + 4] = v + 2; qi[o + 5] = v + 3; }
      B.quadIdx = gl.createBuffer(); gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, B.quadIdx); gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, qi, gl.STATIC_DRAW);
      B.NQ = NQ;
      cv.addEventListener('webglcontextlost', (e) => { e.preventDefault(); G.ok = false; G.lost = true; });
      gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, gl.NONE);
      G.ok = true; G.gl = gl; G.webgl2 = gl2;
    } catch (e) {
      console.warn('GL3D: WebGL non disponibile, uso Canvas2D.', e);
      G.ok = false;
    }
    return G.ok;
  }
  G.init = init;

  /* ================= mesh su GPU ================= */
  function mkBuf(data, target) { const b = gl.createBuffer(); gl.bindBuffer(target || gl.ARRAY_BUFFER, b); gl.bufferData(target || gl.ARRAY_BUFFER, data, gl.STATIC_DRAW); return b; }
  /* d: {pos, nor, fn?, col?, uv?, x?, idx, lines?:{a,b,s,c}} → mesh GPU */
  function createMesh(d) {
    const n = d.pos.length / 3;
    const m = { n, count: d.idx.length, bufs: {}, frame: frameNo, bound: d.bound || boundOf(d.pos) };
    m.bufs.aPos = mkBuf(d.pos);
    m.bufs.aNor = mkBuf(d.nor || d.pos);
    m.bufs.aFN = mkBuf(d.fn || d.nor || d.pos);
    m.bufs.aCol = mkBuf(d.col || new Float32Array(n * 3).fill(1));
    m.bufs.aUV = mkBuf(d.uv || new Float32Array(n * 2));
    m.bufs.aX = mkBuf(d.x || new Float32Array(n));
    const big = n > 65535;
    if (big && !u32) throw new Error('GL3D: mesh troppo grande');
    m.idxType = big ? gl.UNSIGNED_INT : gl.UNSIGNED_SHORT;
    m.idx = mkBuf(big ? new Uint32Array(d.idx) : new Uint16Array(d.idx), gl.ELEMENT_ARRAY_BUFFER);
    if (d.lines && d.lines.n) m.lines = createLines(d.lines);
    return m;
  }
  function createLines(L) {
    return { n: L.n, a: mkBuf(L.a), b: mkBuf(L.b), s: mkBuf(L.s), c: mkBuf(L.c) };
  }
  function deleteMesh(m) {
    if (!m || m.deleted || !gl) return;
    m.deleted = true;
    Object.values(m.bufs).forEach((b) => gl.deleteBuffer(b)); gl.deleteBuffer(m.idx);
    if (m.lines) ['a', 'b', 's', 'c'].forEach((k) => gl.deleteBuffer(m.lines[k]));
  }
  G.createMesh = (d) => (init() ? createMesh(d) : null);
  G.deleteMesh = deleteMesh;
  function boundOf(pos) {
    let x = 0, y = 0, z = 0; const n = pos.length / 3 || 1;
    for (let i = 0; i < pos.length; i += 3) { x += pos[i]; y += pos[i + 1]; z += pos[i + 2]; }
    x /= n; y /= n; z /= n; let r = 0;
    for (let i = 0; i < pos.length; i += 3) r = Math.max(r, Math.hypot(pos[i] - x, pos[i + 1] - y, pos[i + 2] - z));
    return { c: [x, y, z], r };
  }

  /* linee 3D spesse (segmenti a coppie di punti) → array per createLines */
  function lineArrays(segs, color) {
    // segs: [[a,b,col?], ...]
    const n = segs.length;
    const A = new Float32Array(n * 12), Bb = new Float32Array(n * 12), S = new Float32Array(n * 8), C = new Float32Array(n * 16);
    const sides = [[0, -1], [0, 1], [1, 1], [1, -1]];
    for (let i = 0; i < n; i++) {
      const [a, b, c] = segs[i]; const col = rgba(c || color);
      for (let k = 0; k < 4; k++) {
        const o3 = (i * 4 + k) * 3, o2 = (i * 4 + k) * 2, o4 = (i * 4 + k) * 4;
        A[o3] = a[0]; A[o3 + 1] = a[1]; A[o3 + 2] = a[2]; Bb[o3] = b[0]; Bb[o3 + 1] = b[1]; Bb[o3 + 2] = b[2];
        S[o2] = sides[k][0]; S[o2 + 1] = sides[k][1];
        C[o4] = col[0]; C[o4 + 1] = col[1]; C[o4 + 2] = col[2]; C[o4 + 3] = col[3];
      }
    }
    return { n, a: A, b: Bb, s: S, c: C };
  }

  /* ---------- mesh dalle facce (drawFaces) ---------- */
  const COS_CREASE = Math.cos(42 * Math.PI / 180);
  function buildFaces(faces, color, opts) {
    const list = [];
    let cx = 0, cy = 0, cz = 0, cn = 0;
    for (const f of faces) {
      const p = f.pts; if (!p || p.length < 3) continue;
      // normale di Newell (robusta anche per poligoni)
      let nx = 0, ny = 0, nz = 0;
      for (let i = 0; i < p.length; i++) {
        const a = p[i], b = p[(i + 1) % p.length];
        nx += (a[1] - b[1]) * (a[2] + b[2]); ny += (a[2] - b[2]) * (a[0] + b[0]); nz += (a[0] - b[0]) * (a[1] + b[1]);
      }
      const m = Math.hypot(nx, ny, nz); if (m < 1e-12) continue;
      nx /= m; ny /= m; nz /= m;
      if (f.normalHint) { const h = f.normalHint; if (nx * h[0] + ny * h[1] + nz * h[2] < 0) { nx = -nx; ny = -ny; nz = -nz; } }
      list.push({ f, n: [nx, ny, nz], area: m / 2, keys: [] });
      for (const q of p) { cx += q[0]; cy += q[1]; cz += q[2]; cn++; }
    }
    const smooth = opts.smooth !== false;
    const key = (q) => Math.round(q[0] * 1e4) + '_' + Math.round(q[1] * 1e4) + '_' + Math.round(q[2] * 1e4);
    const byV = smooth ? new Map() : null;
    if (smooth) list.forEach((it, i) => it.f.pts.forEach((q) => { const k = key(q); it.keys.push(k); let a = byV.get(k); if (!a) byV.set(k, (a = [])); a.push(i); }));
    let nv = 0, ni = 0;
    for (const it of list) { nv += it.f.pts.length; ni += (it.f.pts.length - 2) * 3; }
    const pos = new Float32Array(nv * 3), nor = new Float32Array(nv * 3), fn = new Float32Array(nv * 3), col = new Float32Array(nv * 3), uv = new Float32Array(nv * 2);
    const idx = new Array(ni);
    const quadUV = [[0, 0], [1, 0], [1, 1], [0, 1]];
    const edges = new Map();
    const wantEdges = opts.edges !== false;
    let v = 0, ii = 0;
    for (let fi = 0; fi < list.length; fi++) {
      const it = list[fi], p = it.f.pts, n = it.n;
      const c = rgba(it.f.color || color);
      const base = v;
      for (let k = 0; k < p.length; k++) {
        const q = p[k];
        pos[v * 3] = q[0]; pos[v * 3 + 1] = q[1]; pos[v * 3 + 2] = q[2];
        let sx = n[0], sy = n[1], sz = n[2];
        if (smooth) {
          sx *= it.area; sy *= it.area; sz *= it.area;
          for (const gi of byV.get(it.keys[k])) {
            if (gi === fi) continue;
            const g = list[gi]; const d = n[0] * g.n[0] + n[1] * g.n[1] + n[2] * g.n[2];
            if (Math.abs(d) < COS_CREASE) continue;
            const s = d < 0 ? -g.area : g.area;
            sx += g.n[0] * s; sy += g.n[1] * s; sz += g.n[2] * s;
          }
          const m = Math.hypot(sx, sy, sz) || 1; sx /= m; sy /= m; sz /= m;
        }
        nor[v * 3] = sx; nor[v * 3 + 1] = sy; nor[v * 3 + 2] = sz;
        fn[v * 3] = n[0]; fn[v * 3 + 1] = n[1]; fn[v * 3 + 2] = n[2];
        col[v * 3] = c[0]; col[v * 3 + 1] = c[1]; col[v * 3 + 2] = c[2];
        const t = p.length === 4 ? quadUV[k] : [0.5, 0.5];
        uv[v * 2] = t[0]; uv[v * 2 + 1] = t[1];
        v++;
      }
      for (let k = 1; k < p.length - 1; k++) { idx[ii++] = base; idx[ii++] = base + k; idx[ii++] = base + k + 1; }
      if (wantEdges && it.f.kind !== 'side') {
        for (let k = 0; k < p.length; k++) {
          const a = p[k], b = p[(k + 1) % p.length];
          const ka = key(a), kb = key(b); const ek = ka < kb ? ka + '|' + kb : kb + '|' + ka;
          if (!edges.has(ek)) edges.set(ek, [a, b]);
        }
      }
    }
    const out = { pos, nor, fn, col, uv, idx };
    if (edges.size) out.lines = lineArrays([...edges.values()], opts.edgeColor || 'rgba(20,30,60,.72)');
    return out;
  }

  /* cache delle mesh per contenuto (le scene spesso ricreano gli array ad ogni frame) */
  const meshCache = new Map();
  function hashFaces(faces, color, opts) {
    let h = 2166136261 | 0;
    const mix = (x) => { h = Math.imul(h ^ x, 16777619); };
    const str = (s) => { s = String(s); for (let i = 0; i < s.length; i++) mix(s.charCodeAt(i)); };
    str(color); mix(opts.smooth === false ? 1 : 2); mix(opts.edges === false ? 3 : 4); str(opts.edgeColor || '');
    mix(faces.length);
    for (const f of faces) {
      const p = f.pts; if (!p) continue;
      mix(p.length);
      for (const q of p) { mix((q[0] * 8192) | 0); mix((q[1] * 8192) | 0); mix((q[2] * 8192) | 0); }
      if (f.color) str(f.color);
      if (f.kind) mix(f.kind.charCodeAt(0));
      if (f.normalHint) { const k = f.normalHint; mix((k[0] * 64) | 0); mix((k[1] * 64) | 0); mix((k[2] * 64) | 0); }
    }
    return h + ':' + faces.length;
  }
  function cachedMesh(key, build) {
    let m = meshCache.get(key);
    if (m && !m.deleted) { meshCache.delete(key); meshCache.set(key, m); m.frame = frameNo; return m; }
    m = createMesh(build()); m.frame = frameNo;
    meshCache.set(key, m);
    if (meshCache.size > 64) {
      for (const [k, old] of meshCache) {
        if (meshCache.size <= 64) break;
        if (old.frame === frameNo) continue;
        meshCache.delete(k); deleteMesh(old);
      }
    }
    return m;
  }
  G.cachedMesh = (key, build) => (init() ? cachedMesh(key, build) : null);

  /* ---------- sfere / cilindri / dischi condivisi ---------- */
  const shared = {};
  function sphereMesh(lod) {
    const k = 'sph' + lod; if (shared[k]) return shared[k];
    const la = [10, 20, 40][lod], lo = la * 2;
    const pos = [], uv = [], idx = [];
    for (let i = 0; i <= la; i++) {
      const th = (i / la) * Math.PI;
      for (let j = 0; j <= lo; j++) {
        const ph = (j / lo) * Math.PI * 2;
        pos.push(Math.sin(th) * Math.sin(ph), Math.cos(th), Math.sin(th) * Math.cos(ph)); uv.push(j / lo, i / la);
      }
    }
    for (let i = 0; i < la; i++) for (let j = 0; j < lo; j++) {
      const a = i * (lo + 1) + j, b = a + lo + 1;
      idx.push(a, b, a + 1, a + 1, b, b + 1);
    }
    const p = new Float32Array(pos);
    return (shared[k] = createMesh({ pos: p, nor: p, uv: new Float32Array(uv), idx, bound: { c: [0, 0, 0], r: 1 } }));
  }
  function cylMesh() {
    if (shared.cyl) return shared.cyl;
    const n = 24, pos = [], nor = [], idx = [];
    for (let i = 0; i <= n; i++) {
      const a = (i / n) * Math.PI * 2, x = Math.cos(a), z = Math.sin(a);
      pos.push(x, 0, z, x, 1, z); nor.push(x, 0, z, x, 0, z);
    }
    for (let i = 0; i < n; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    return (shared.cyl = createMesh({ pos: new Float32Array(pos), nor: new Float32Array(nor), idx, bound: { c: [0, 0.5, 0], r: 1.2 } }));
  }
  /* anello/disco piatto nel piano xz: uv.x = posizione radiale 0..1 */
  function annulusMesh(r0, r1, seg) {
    const k = 'ann' + r0 + '_' + r1 + '_' + seg; if (shared[k]) return shared[k];
    const pos = [], nor = [], uv = [], idx = [], rings = 6;
    for (let j = 0; j <= rings; j++) {
      const r = r0 + (r1 - r0) * (j / rings);
      for (let i = 0; i <= seg; i++) { const a = (i / seg) * Math.PI * 2; pos.push(r * Math.cos(a), 0, r * Math.sin(a)); nor.push(0, 1, 0); uv.push(j / rings, i / seg); }
    }
    for (let j = 0; j < rings; j++) for (let i = 0; i < seg; i++) { const a = j * (seg + 1) + i, b = a + seg + 1; idx.push(a, b, a + 1, a + 1, b, b + 1); }
    return (shared[k] = createMesh({ pos: new Float32Array(pos), nor: new Float32Array(nor), uv: new Float32Array(uv), idx, bound: { c: [0, 0, 0], r: r1 } }));
  }
  /* disco con alpha radiale per le ombre morbide */
  function shadowMesh() {
    if (shared.shadow) return shared.shadow;
    const seg = 48, rings = 8, pos = [], x = [], idx = [];
    pos.push(0, 0, 0); x.push(1);
    for (let j = 1; j <= rings; j++) {
      const r = j / rings, a = Math.pow(1 - r, 1.6) * (1 - 0.15 * r);
      for (let i = 0; i < seg; i++) { const t = (i / seg) * Math.PI * 2; pos.push(r * Math.cos(t), 0, r * Math.sin(t)); x.push(a); }
    }
    for (let i = 0; i < seg; i++) idx.push(0, 1 + i, 1 + ((i + 1) % seg));
    for (let j = 1; j < rings; j++) for (let i = 0; i < seg; i++) {
      const a = 1 + (j - 1) * seg + i, b = 1 + (j - 1) * seg + ((i + 1) % seg), c = a + seg, d = b + seg;
      idx.push(a, c, b, b, c, d);
    }
    const p = new Float32Array(pos);
    return (shared.shadow = createMesh({ pos: p, nor: new Float32Array(p.length).map((_, i) => (i % 3 === 1 ? 1 : 0)), x: new Float32Array(x), idx, bound: { c: [0, 0, 0], r: 1 } }));
  }

  /* ---------- texture ---------- */
  const texCache = new Map();
  G.texture = function (key, makeCanvas) {
    if (!init()) return null;
    let t = texCache.get(key); if (t) return t;
    const c = makeCanvas();
    t = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, t);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, c);
    const pot = (n) => (n & (n - 1)) === 0;
    if (pot(c.width) && pot(c.height)) { gl.generateMipmap(gl.TEXTURE_2D); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR); }
    else gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    texCache.set(key, t);
    return t;
  };

  /* ================= viste e frame ================= */
  /* collega una vista: i metodi che "dipingono" sul canvas 2D prima stampano la coda 3D */
  const PAINT = ['fill', 'stroke', 'fillRect', 'strokeRect', 'fillText', 'strokeText', 'drawImage', 'putImageData', 'getImageData', 'clearRect'];
  G.attach = function (view) {
    if (!init()) return false;
    const ctx = view.ctx;
    const st = view._g = { q: [], cleared: false, bbox: null, fog: null };
    const proto = CanvasRenderingContext2D.prototype;
    for (const m of PAINT) {
      const orig = proto[m];
      ctx[m] = function () { if (st.q.length && G.active === view) flush(view); return orig.apply(this, arguments); };
    }
    views.set(ctx, view);
    return true;
  };
  G.viewOf = (ctx) => views.get(ctx) || null;
  G.begin = function (view) {
    if (!G.ok || !view._g) return false;
    frameNo++;
    G.active = view; const st = view._g; st.q.length = 0; st.cleared = false; st.bbox = null;
    return true;
  };
  G.end = function (view) {
    if (G.active !== view) return;
    try { if (G.ok && view._g.q.length) flush(view); }
    finally { G.active = null; if (view._g) view._g.q.length = 0; }
  };
  /* questa vista sta disegnando adesso con WebGL? (ctx deve essere quello della vista, senza trasformazioni extra) */
  G.on = function (view, ctx) {
    if (!G.ok || G.active !== view || !view._g) return false;
    if (ctx && ctx !== view.ctx) return false;
    return true;
  };
  G.plainTransform = function (ctx, v) {
    const t = ctx.getTransform ? ctx.getTransform() : null; if (!t) return true;
    const d = (v && v._dpr) || window.devicePixelRatio || 1;
    return Math.abs(t.a - d) < 1e-6 && Math.abs(t.d - d) < 1e-6 && Math.abs(t.b) < 1e-6 && Math.abs(t.c) < 1e-6 && Math.abs(t.e) < 1e-6 && Math.abs(t.f) < 1e-6;
  };

  /* camera della vista nel momento della chiamata (la rotazione viene "misurata" con v.rot) */
  function camOf(v) {
    const o = v.rot([0, 0, 0]), a = v.rot([1, 0, 0]), b = v.rot([0, 1, 0]), c = v.rot([0, 0, 1]);
    const R = new Float32Array([a[0] - o[0], a[1] - o[1], a[2] - o[2], b[0] - o[0], b[1] - o[1], b[2] - o[2], c[0] - o[0], c[1] - o[1], c[2] - o[2]]);
    return { R, T: new Float32Array(o), scale: v.scale, W: v.W, H: v.H, up: [R[3], R[4], R[5]] };
  }
  function toCam(cam, p) {
    const R = cam.R;
    return [R[0] * p[0] + R[3] * p[1] + R[6] * p[2] + cam.T[0], R[1] * p[0] + R[4] * p[1] + R[7] * p[2] + cam.T[1], R[2] * p[0] + R[5] * p[1] + R[8] * p[2] + cam.T[2]];
  }
  /* rettangolo a schermo (px css) di una sfera di raggio r in coordinate mondo */
  function sphereBox(cam, c, r) {
    const q = toCam(cam, c);
    const zn = q[2] + r, zf = q[2] - r;
    if (6 - zn < 0.08) return null;
    const f1 = 6 / (6 - zn), f2 = 6 / (6 - zf), s = cam.scale;
    const xs = [(q[0] - r) * f1, (q[0] - r) * f2, (q[0] + r) * f1, (q[0] + r) * f2];
    const ys = [(q[1] - r) * f1, (q[1] - r) * f2, (q[1] + r) * f1, (q[1] + r) * f2];
    return [cam.W / 2 + Math.min(...xs) * s, cam.H / 2 - Math.max(...ys) * s, cam.W / 2 + Math.max(...xs) * s, cam.H / 2 - Math.min(...ys) * s];
  }
  function grow(st, box, pad) {
    if (!box) { st.bbox = 'all'; return; }
    if (st.bbox === 'all') return;
    const b = [box[0] - pad, box[1] - pad, box[2] + pad, box[3] + pad];
    if (!st.bbox) st.bbox = b;
    else st.bbox = [Math.min(st.bbox[0], b[0]), Math.min(st.bbox[1], b[1]), Math.max(st.bbox[2], b[2]), Math.max(st.bbox[3], b[3])];
  }
  function matOf(m) {
    m = m || {};
    return {
      spec: m.specular != null ? m.specular : 0.35, shin: m.shininess != null ? m.shininess : 36, rim: m.rim != null ? m.rim : 0.22,
      emit: m.emissive || 0, pattern: m.pattern || 0, bevel: m.bevel || 0, alpha: m.alpha != null ? m.alpha : 1,
      tint: m.tint || null, tex: m.tex || null, spin: m.spin || null, light: m.light || null, cull: !!m.cull,
      depthWrite: m.depthWrite, depthTest: m.depthTest !== false, amb: m.ambient || null, rimColor: m.rimColor || null, time: m.time || 0,
      fog: m.fog, offset: !!m.offset
    };
  }
  function push(v, item) {
    const st = v._g; item.ga = v.ctx.globalAlpha; st.q.push(item);
  }

  /* --- API di coda (usata da mini3d.js) --- */
  G.faces = function (v, faces, color, opts) {
    const key = 'F' + hashFaces(faces, color, opts);
    const mesh = cachedMesh(key, () => buildFaces(faces, color, opts));
    const cam = camOf(v);
    const mat = matOf(opts);
    if (opts.bevel) mat.pattern = 11;
    push(v, { t: 'mesh', mesh, cam, mat, mode: 0, edges: opts.edges !== false && mesh.lines ? { width: opts.edgeWidth || 1.3 } : null });
    grow(v._g, sphereBox(cam, mesh.bound.c, mesh.bound.r), 4);
  };
  /* mesh qualsiasi già su GPU, con matrice modello opzionale (array di 16, colonne) */
  G.mesh = function (v, mesh, model, mat) {
    if (!mesh) return;
    const cam = camOf(v);
    push(v, { t: 'mesh', mesh, cam, mat: matOf(mat), mode: 0, model: model || null, edges: mat && mat.edges && mesh.lines ? { width: mat.edgeWidth || 1.3 } : null });
    let b = mesh.bound;
    if (model) { const s = Math.max(Math.hypot(model[0], model[1], model[2]), Math.hypot(model[4], model[5], model[6]), Math.hypot(model[8], model[9], model[10])); const c = b.c; b = { c: [model[0] * c[0] + model[4] * c[1] + model[8] * c[2] + model[12], model[1] * c[0] + model[5] * c[1] + model[9] * c[2] + model[13], model[2] * c[0] + model[6] * c[1] + model[10] * c[2] + model[14]], r: b.r * s }; }
    grow(v._g, sphereBox(cam, b.c, b.r), 4);
  };
  G.sphere = function (v, center, r, color, mat) {
    const cam = camOf(v);
    const box = sphereBox(cam, center, r);
    const px = box ? Math.max(box[2] - box[0], box[3] - box[1]) * 0.5 : 100;
    const lod = px < 14 ? 0 : px < 70 ? 1 : 2;
    const c = rgba(color);
    const model = [r, 0, 0, 0, 0, r, 0, 0, 0, 0, r, 0, center[0], center[1], center[2], 1];
    push(v, { t: 'mesh', mesh: sphereMesh(lod), cam, mat: matOf(mat), mode: 0, model, color: c });
    grow(v._g, box, 4);
  };
  /* tante sfere in un solo disegno: list = [{p:[x,y,z], r, color, alpha?}] */
  G.spheres = function (v, list, mat) {
    if (!list.length) return;
    const cam = camOf(v); let maxpx = 0;
    const data = new Float32Array(list.length * 8);
    list.forEach((s, i) => {
      const c = rgba(s.color); const o = i * 8;
      data[o] = s.p[0]; data[o + 1] = s.p[1]; data[o + 2] = s.p[2]; data[o + 3] = s.r;
      data[o + 4] = c[0]; data[o + 5] = c[1]; data[o + 6] = c[2]; data[o + 7] = (s.alpha != null ? s.alpha : 1) * c[3];
      const box = sphereBox(cam, s.p, s.r); grow(v._g, box, 4);
      if (box) maxpx = Math.max(maxpx, (box[2] - box[0]) * 0.5);
    });
    const lod = maxpx < 14 ? 0 : maxpx < 70 ? 1 : 2;
    push(v, { t: 'inst', mesh: sphereMesh(lod), cam, mat: matOf(mat), mode: 1, data, n: list.length });
  };
  /* cilindri fra due punti: list = [{a, b, r, color}] */
  G.cylinders = function (v, list, mat) {
    if (!list.length) return;
    const cam = camOf(v);
    const data = new Float32Array(list.length * 12);
    list.forEach((s, i) => {
      const c = rgba(s.color); const o = i * 12;
      data.set([s.a[0], s.a[1], s.a[2], s.r, s.b[0], s.b[1], s.b[2], 0, c[0], c[1], c[2], (s.alpha != null ? s.alpha : 1) * c[3]], o);
      grow(v._g, sphereBox(cam, [(s.a[0] + s.b[0]) / 2, (s.a[1] + s.b[1]) / 2, (s.a[2] + s.b[2]) / 2], Math.hypot(s.a[0] - s.b[0], s.a[1] - s.b[1], s.a[2] - s.b[2]) / 2 + s.r), 4);
    });
    push(v, { t: 'inst', mesh: cylMesh(), cam, mat: matOf(mat), mode: 2, data, n: list.length, cyl: true });
  };
  G.annulus = function (v, r0, r1, model, color, mat) {
    const m = annulusMesh(r0, r1, 96);
    const cam = camOf(v);
    push(v, { t: 'mesh', mesh: m, cam, mat: matOf(mat), mode: 0, model, color: rgba(color) });
    const s = Math.hypot(model[0], model[1], model[2]);
    grow(v._g, sphereBox(cam, [model[12], model[13], model[14]], r1 * s), 4);
  };
  /* ombra morbida a terra: disco ellittico (rx, rz) all'altezza y */
  G.shadow = function (v, center, rx, rz, alpha) {
    const cam = camOf(v);
    const model = [rx, 0, 0, 0, 0, 1, 0, 0, 0, 0, rz, 0, center[0], center[1], center[2], 1];
    push(v, { t: 'mesh', mesh: shadowMesh(), cam, mat: Object.assign(matOf({ pattern: 12, alpha: alpha != null ? alpha : 0.28 }), { depthWrite: false }), mode: 0, model });
    grow(v._g, sphereBox(cam, center, Math.max(rx, rz)), 4);
  };
  /* linee 3D: segs = [[a, b, color?], ...] oppure polilinea pts (opts.strip) */
  G.lines = function (v, pts, color, width, opts) {
    opts = opts || {};
    let segs = pts;
    if (opts.strip) { segs = []; for (let i = 0; i < pts.length - 1; i++) segs.push([pts[i], pts[i + 1]]); if (opts.closed && pts.length > 2) segs.push([pts[pts.length - 1], pts[0]]); }
    if (!segs.length) return;
    const cam = camOf(v);
    const key = 'L' + hashSegs(segs, color);
    const mesh = cachedMesh(key, () => {
      const L = lineArrays(segs, color); const all = [];
      for (const s of segs) all.push(s[0][0], s[0][1], s[0][2], s[1][0], s[1][1], s[1][2]);
      return { pos: new Float32Array(3), idx: [0, 0, 0], lines: L, bound: boundOf(all) };
    });
    push(v, { t: 'lines', mesh, cam, width: width || 1.5, bias: opts.bias != null ? opts.bias : 0.0006, depthTest: opts.depthTest !== false, alpha: opts.alpha != null ? opts.alpha : 1 });
    grow(v._g, sphereBox(cam, mesh.bound.c, mesh.bound.r), (width || 1.5) + 4);
  };
  function hashSegs(segs, color) {
    let h = 2166136261 | 0; const mix = (x) => { h = Math.imul(h ^ x, 16777619); };
    const s = String(color); for (let i = 0; i < s.length; i++) mix(s.charCodeAt(i));
    for (const g of segs) { for (let k = 0; k < 2; k++) { const q = g[k]; mix((q[0] * 8192) | 0); mix((q[1] * 8192) | 0); mix((q[2] * 8192) | 0); } if (g[2]) { const c = String(g[2]); for (let i = 0; i < c.length; i++) mix(c.charCodeAt(i)); } }
    return h + ':' + segs.length;
  }
  /* sfera "a schermo" (ball): x, y, r in px css già proiettati */
  G.ball = function (v, ctx, x, y, r, color, glow) {
    const t = ctx.getTransform ? ctx.getTransform() : { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
    const dpr = v._dpr || window.devicePixelRatio || 1;
    // in px css della vista (tiene conto di eventuali translate/scale della scena)
    const X = (t.a * x + t.c * y + t.e) / dpr, Y = (t.b * x + t.d * y + t.f) / dpr, R = Math.max(0.5, r * Math.sqrt(Math.abs(t.a * t.d - t.b * t.c)) / dpr);
    const c = rgba(color);
    const st = v._g;
    const last = st.q[st.q.length - 1];
    const it = last && last.t === 'sprite' && last.ga === ctx.globalAlpha ? last : null;
    const rec = [X, Y, R, c, glow ? 1 : 0];
    if (it) it.list.push(rec); else push(v, { t: 'sprite', list: [rec] });
    grow(st, [X - R * (glow ? 2.8 : 1), Y - R * (glow ? 2.8 : 1), X + R * (glow ? 2.8 : 1), Y + R * (glow ? 2.8 : 1)], 3);
  };
  /* bagliore additivo (alone) attorno a un punto 3D */
  G.glow = function (v, center, rpx, color, alpha) {
    const s = v.P(center);
    const c = rgba(color);
    const rec = [s[0], s[1], rpx / 2.8, [c[0], c[1], c[2], (alpha != null ? alpha : 1) * c[3]], 2];
    const st = v._g, last = st.q[st.q.length - 1];
    if (last && last.t === 'sprite' && last.ga === v.ctx.globalAlpha) last.list.push(rec); else push(v, { t: 'sprite', list: [rec] });
    grow(v._g, [s[0] - rpx, s[1] - rpx, s[0] + rpx, s[1] + rpx], 3);
  };
  G.setFog = function (v, color, amount) { if (v._g) v._g.fog = color ? [...rgba(color).slice(0, 3), amount == null ? 0.25 : amount] : null; };

  /* ================= rendering ================= */
  const I3 = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
  const I4 = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  const DZ = (() => { const wn = 0.03, wf = 4; const Bz = -2 / (1 / wn - 1 / wf); return new Float32Array([1 - Bz / wf, Bz]); })();
  const LIGHT_DIR = (() => { const l = [0.4, 0.7, 0.6]; const m = Math.hypot(...l); return l.map((x) => x / m); })();
  const enabled = new Set();
  function attrib(prog, name, buf, size, divisor) {
    const loc = prog.a[name]; if (loc == null || loc < 0) return;
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.enableVertexAttribArray(loc); enabled.add(loc);
    gl.vertexAttribPointer(loc, size, gl.FLOAT, false, 0, 0);
    if (inst) inst.div(loc, divisor || 0);
  }
  function attribI(prog, name, buf, size, stride, offset) {
    const loc = prog.a[name]; if (loc == null || loc < 0) return;
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.enableVertexAttribArray(loc); enabled.add(loc);
    gl.vertexAttribPointer(loc, size, gl.FLOAT, false, stride, offset);
    inst.div(loc, 1);
  }
  function resetAttribs() {
    for (const l of enabled) { gl.disableVertexAttribArray(l); if (inst) inst.div(l, 0); }
    enabled.clear();
  }
  function camUniforms(prog, cam) {
    const u = prog.u;
    gl.uniformMatrix3fv(u.uR, false, cam.R); gl.uniform3fv(u.uT, cam.T);
    gl.uniform3f(u.uVP, cam.scale, cam.W, cam.H); gl.uniform2fv(u.uDZ, DZ);
  }
  function lightUniforms(prog, mat, cam, fog) {
    const u = prog.u;
    if (mat.light && mat.light.point) { const p = toCam(cam, mat.light.point); gl.uniform4f(u.uLight, p[0], p[1], p[2], 1); }
    else { const d = (mat.light && mat.light.dir) || LIGHT_DIR; gl.uniform4f(u.uLight, d[0], d[1], d[2], 0); }
    if (u.uUp) gl.uniform3fv(u.uUp, cam ? cam.up : [0, 1, 0]);
    const a = mat.amb || [0.5, 0.8, 0.12];
    gl.uniform3f(u.uAmb, a[0], a[1], a[2]);
    const rc = mat.rimColor ? rgba(mat.rimColor) : [0.85, 0.92, 1];
    gl.uniform3f(u.uRimCol, rc[0], rc[1], rc[2]);
    gl.uniform4f(u.uMat, mat.spec, mat.shin, mat.rim, mat.emit);
    if (u.uFog) { const f = mat.fog === false ? null : fog; if (f) gl.uniform4f(u.uFog, f[0], f[1], f[2], f[3]); else gl.uniform4f(u.uFog, 0, 0, 0, 0); }
  }

  function drawMesh(v, it) {
    const prog = P.mesh, u = prog.u, mat = it.mat, m = it.mesh;
    gl.useProgram(prog.p);
    camUniforms(prog, it.cam); lightUniforms(prog, mat, it.cam, v._g.fog);
    gl.uniform1f(u.uMode, it.mode);
    const M = it.model ? new Float32Array(it.model) : I4;
    gl.uniformMatrix4fv(u.uM, false, M);
    // matrice delle normali (scala uniforme o diagonale)
    if (it.model) {
      const c = it.model, nm = new Float32Array([c[0], c[1], c[2], c[4], c[5], c[6], c[8], c[9], c[10]]);
      for (let k = 0; k < 3; k++) { const l = Math.hypot(nm[k * 3], nm[k * 3 + 1], nm[k * 3 + 2]) || 1; const l2 = l * l; nm[k * 3] /= l2; nm[k * 3 + 1] /= l2; nm[k * 3 + 2] /= l2; }
      gl.uniformMatrix3fv(u.uNM, false, nm);
    } else gl.uniformMatrix3fv(u.uNM, false, I3);
    gl.uniformMatrix3fv(u.uSpin, false, mat.spin ? new Float32Array(mat.spin) : I3);
    const tint = it.color || mat.tint || [1, 1, 1, 1];
    gl.uniform4f(u.uTint, tint[0], tint[1], tint[2], (tint[3] == null ? 1 : tint[3]) * mat.alpha * it.ga);
    gl.uniform1f(u.uPat, mat.pattern); gl.uniform1f(u.uTime, mat.time); gl.uniform1f(u.uBevel, mat.bevel || 0.1); gl.uniform1f(u.uCull, mat.cull ? 1 : 0);
    if (mat.tex) { gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, mat.tex); gl.uniform1i(u.uTex, 0); }
    const transparent = mat.alpha * it.ga < 0.999 || (tint[3] != null && tint[3] < 0.999) || mat.pattern === 9 || mat.pattern === 10 || mat.pattern === 12;
    if (mat.depthTest) gl.enable(gl.DEPTH_TEST); else gl.disable(gl.DEPTH_TEST);
    gl.depthMask(mat.depthWrite != null ? !!mat.depthWrite : !transparent);
    if (it.edges || mat.offset) { gl.enable(gl.POLYGON_OFFSET_FILL); gl.polygonOffset(1, 1); } else gl.disable(gl.POLYGON_OFFSET_FILL);
    for (const k of ['aPos', 'aNor', 'aFN', 'aCol', 'aUV', 'aX']) attrib(prog, k, m.bufs[k], k === 'aUV' ? 2 : k === 'aX' ? 1 : 3);
    for (const k of ['iA', 'iB', 'iC']) { const l = prog.a[k]; if (l != null && l >= 0) gl.vertexAttrib4f(l, 0, 0, 0, 1); }
    if (prog.a.iC != null) gl.vertexAttrib4f(prog.a.iC, 1, 1, 1, 1);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, m.idx);
    gl.drawElements(gl.TRIANGLES, m.count, m.idxType, 0); G.stats.draws++;
    resetAttribs();
    gl.disable(gl.POLYGON_OFFSET_FILL);
    if (it.edges) drawLines(v, { mesh: m, cam: it.cam, width: it.edges.width, bias: 0.0004, depthTest: true, alpha: mat.alpha, ga: it.ga });
  }

  function drawInst(v, it) {
    const prog = P.mesh, u = prog.u, mat = it.mat, m = it.mesh;
    gl.useProgram(prog.p);
    camUniforms(prog, it.cam); lightUniforms(prog, mat, it.cam, v._g.fog);
    gl.uniform1f(u.uMode, it.mode);
    gl.uniformMatrix4fv(u.uM, false, I4); gl.uniformMatrix3fv(u.uNM, false, I3); gl.uniformMatrix3fv(u.uSpin, false, I3);
    gl.uniform4f(u.uTint, 1, 1, 1, mat.alpha * it.ga);
    gl.uniform1f(u.uPat, mat.pattern); gl.uniform1f(u.uTime, mat.time); gl.uniform1f(u.uBevel, 0.1); gl.uniform1f(u.uCull, 0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthMask(mat.alpha * it.ga >= 0.999 && mat.depthWrite !== false);
    for (const k of ['aPos', 'aNor', 'aFN', 'aCol', 'aUV', 'aX']) attrib(prog, k, m.bufs[k], k === 'aUV' ? 2 : k === 'aX' ? 1 : 3);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, m.idx);
    const stride = it.cyl ? 48 : 32;
    if (inst) {
      gl.bindBuffer(gl.ARRAY_BUFFER, B.inst); gl.bufferData(gl.ARRAY_BUFFER, it.data, gl.DYNAMIC_DRAW);
      attribI(prog, 'iA', B.inst, 4, stride, 0);
      if (it.cyl) { attribI(prog, 'iB', B.inst, 4, stride, 16); attribI(prog, 'iC', B.inst, 4, stride, 32); }
      else { attribI(prog, 'iC', B.inst, 4, stride, 16); if (prog.a.iB >= 0) gl.vertexAttrib4f(prog.a.iB, 0, 0, 0, 0); }
      inst.draw(gl.TRIANGLES, m.count, m.idxType, 0, it.n); G.stats.draws++;
    } else {
      const f = stride / 4;
      for (let i = 0; i < it.n; i++) {
        const d = it.data, o = i * f;
        gl.vertexAttrib4f(prog.a.iA, d[o], d[o + 1], d[o + 2], d[o + 3]);
        if (it.cyl) { gl.vertexAttrib4f(prog.a.iB, d[o + 4], d[o + 5], d[o + 6], 0); gl.vertexAttrib4f(prog.a.iC, d[o + 8], d[o + 9], d[o + 10], d[o + 11]); }
        else gl.vertexAttrib4f(prog.a.iC, d[o + 4], d[o + 5], d[o + 6], d[o + 7]);
        gl.drawElements(gl.TRIANGLES, m.count, m.idxType, 0); G.stats.draws++;
      }
    }
    resetAttribs();
  }

  function drawLines(v, it) {
    const L = it.mesh.lines; if (!L) return;
    const prog = P.line, u = prog.u;
    gl.useProgram(prog.p);
    camUniforms(prog, it.cam);
    gl.uniform3f(u.uLW, it.width, it.bias, window.devicePixelRatio || 1);
    gl.uniform1f(u.uAlpha, (it.alpha != null ? it.alpha : 1) * (it.ga != null ? it.ga : 1));
    if (it.depthTest) gl.enable(gl.DEPTH_TEST); else gl.disable(gl.DEPTH_TEST);
    gl.depthMask(false);
    attrib(prog, 'aA', L.a, 3); attrib(prog, 'aB', L.b, 3); attrib(prog, 'aS', L.s, 2); attrib(prog, 'aC', L.c, 4);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, B.quadIdx);
    for (let s = 0; s < L.n; s += B.NQ) {
      const k = Math.min(B.NQ, L.n - s);
      if (s) { // spezzoni oltre i 65k vertici: sposta i puntatori
        const off = s * 4;
        for (const [name, buf, size] of [['aA', L.a, 3], ['aB', L.b, 3], ['aS', L.s, 2], ['aC', L.c, 4]]) { gl.bindBuffer(gl.ARRAY_BUFFER, buf); gl.vertexAttribPointer(prog.a[name], size, gl.FLOAT, false, 0, off * size * 4); }
      }
      gl.drawElements(gl.TRIANGLES, k * 6, gl.UNSIGNED_SHORT, 0); G.stats.draws++;
    }
    resetAttribs();
  }

  function drawSprites(v, it, vw, vh) {
    const prog = P.sprite, u = prog.u;
    const list = it.list;
    gl.useProgram(prog.p);
    gl.uniform2f(u.uPx, v.W || vw, (v.W ? vh * v.W / vw : vh));
    lightUniforms(prog, matOf({ specular: 0.45, shininess: 40, rim: 0.25 }), null, null);
    gl.disable(gl.DEPTH_TEST); gl.depthMask(false);
    // prima gli aloni, poi le sfere
    const order = [];
    for (const s of list) if (s[4]) order.push([s[0], s[1], s[2], s[3], 1]);
    for (const s of list) if (s[4] !== 2) order.push([s[0], s[1], s[2], s[3], 0]);
    const n = Math.min(order.length, B.NQ);
    const data = new Float32Array(n * 4 * 10);
    const Q = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
    for (let i = 0; i < n; i++) {
      const s = order[i], c = s[3];
      for (let k = 0; k < 4; k++) {
        const o = (i * 4 + k) * 10;
        data[o] = Q[k][0]; data[o + 1] = Q[k][1];
        data[o + 2] = s[0]; data[o + 3] = s[1]; data[o + 4] = s[2]; data[o + 5] = s[4];
        data[o + 6] = c[0]; data[o + 7] = c[1]; data[o + 8] = c[2]; data[o + 9] = c[3] * it.ga;
      }
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, B.dyn); gl.bufferData(gl.ARRAY_BUFFER, data, gl.DYNAMIC_DRAW);
    const a = prog.a;
    gl.enableVertexAttribArray(a.aQ); gl.vertexAttribPointer(a.aQ, 2, gl.FLOAT, false, 40, 0); enabled.add(a.aQ);
    gl.enableVertexAttribArray(a.aS); gl.vertexAttribPointer(a.aS, 4, gl.FLOAT, false, 40, 8); enabled.add(a.aS);
    gl.enableVertexAttribArray(a.aC); gl.vertexAttribPointer(a.aC, 4, gl.FLOAT, false, 40, 24); enabled.add(a.aC);
    if (inst) [a.aQ, a.aS, a.aC].forEach((l) => inst.div(l, 0));
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, B.quadIdx);
    gl.drawElements(gl.TRIANGLES, n * 6, gl.UNSIGNED_SHORT, 0); G.stats.draws++;
    resetAttribs();
  }

  /* disegna la coda della vista e la incolla sul suo canvas 2D */
  function flush(v) {
    const st = v._g; if (!st || !st.q.length) return;
    if (!G.ok) { st.q.length = 0; return; }
    const c2 = v.canvas, vw = c2.width, vh = c2.height;
    if (!vw || !vh) { st.q.length = 0; return; }
    if (vw > CW || vh > CH) {
      CW = Math.max(CW, Math.ceil(vw / 128) * 128); CH = Math.max(CH, Math.ceil(vh / 128) * 128);
      cv.width = CW; cv.height = CH; st.cleared = false;
    }
    gl.viewport(0, 0, vw, vh);
    gl.enable(gl.SCISSOR_TEST);
    if (!st.cleared) {
      gl.scissor(0, 0, vw, vh); gl.clearColor(0, 0, 0, 0); gl.clearDepth(1); gl.depthMask(true);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); st.cleared = true;
    }
    gl.disable(gl.SCISSOR_TEST);
    gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.disable(gl.CULL_FACE); gl.depthFunc(gl.LEQUAL);
    const q = st.q.slice(); st.q.length = 0;
    try {
      for (const it of q) {
        if (it.t === 'mesh') drawMesh(v, it);
        else if (it.t === 'inst') drawInst(v, it);
        else if (it.t === 'lines') drawLines(v, it);
        else if (it.t === 'sprite') drawSprites(v, it, vw, vh);
      }
    } catch (e) { console.error('GL3D', e); }
    G.stats.flushes++;
    // area da copiare (px dispositivo)
    const dpr = vw / (v.W || vw);
    let x0 = 0, y0 = 0, x1 = vw, y1 = vh;
    if (st.bbox && st.bbox !== 'all') {
      x0 = Math.max(0, Math.floor(st.bbox[0] * dpr)); y0 = Math.max(0, Math.floor(st.bbox[1] * dpr));
      x1 = Math.min(vw, Math.ceil(st.bbox[2] * dpr)); y1 = Math.min(vh, Math.ceil(st.bbox[3] * dpr));
    }
    st.bbox = null;
    if (x1 - x0 < 1 || y1 - y0 < 1) return;
    const ctx = v.ctx, P2 = CanvasRenderingContext2D.prototype;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
    ctx.shadowBlur = 0; ctx.shadowColor = 'rgba(0,0,0,0)'; ctx.filter = 'none';
    P2.drawImage.call(ctx, cv, x0, CH - vh + y0, x1 - x0, y1 - y0, x0, y0, x1 - x0, y1 - y0);
    ctx.restore();
    // pulisce il colore (la profondità resta per il resto del frame)
    gl.enable(gl.SCISSOR_TEST);
    gl.scissor(x0, vh - y1, x1 - x0, y1 - y0); gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
    gl.disable(gl.SCISSOR_TEST);
  }
  G.flush = flush;
})();
