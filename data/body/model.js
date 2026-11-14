/* Il corpo umano – geometria (uguale per tutte le lingue).
   Unità ≈ cm, y in alto (piedi 0, testa ≈ 170), +x = sinistra della persona, +z = davanti.
   Tutti i pezzi hanno pos = origine: le forme sono scritte direttamente in coordinate del corpo. */
(function () {
  const D = 180 / Math.PI;
  const SIDES = [-1, 1];
  const BONE = '#f1e8d4', SKIN = '#fcd5b0', MUS = '#b91c1c';
  const RED = '#ef4444', BLUE = '#2563eb';

  /* ---- aiuti ---- */
  const mk = (t, o) => { const r = { t }; Object.keys(o).forEach((k) => { if (o[k] != null) r[k] = o[k]; }); return r; };
  /* ellissoide: centro, semi-assi, colore, rotazione (gradi), risoluzione */
  const E = (pos, sc, color, rot, n, m) => mk('sphere', { r: 1, n: n || 10, m: m || 16, pos, scale: sc, color, rot });
  /* tubo curvo: la curva (Catmull-Rom) è calcolata qui con k passi per tratto, per tenere basso il numero di facce */
  const smooth = (P0, k) => {
    if (P0.length < 3 || k < 2) return P0;
    const g = (i) => P0[Math.max(0, Math.min(P0.length - 1, i))], Q = [];
    for (let i = 0; i < P0.length - 1; i++) for (let j = 0; j < k; j++) {
      const t = j / k, t2 = t * t, t3 = t2 * t, a = g(i - 1), b = g(i), c = g(i + 1), d = g(i + 2);
      Q.push([0, 1, 2].map((q) => 0.5 * (2 * b[q] + (-a[q] + c[q]) * t + (2 * a[q] - 5 * b[q] + 4 * c[q] - d[q]) * t2 + (-a[q] + 3 * b[q] - 3 * c[q] + d[q]) * t3)));
    }
    Q.push(P0[P0.length - 1]);
    return Q;
  };
  const P = (pts, r, color, n, k) => mk('pipe', { pts: smooth(pts, k || 3), r, n: n || 6, color });
  /* inclinazione (gradi, asse z) di un segmento che va da b (basso) ad a (alto) */
  const ang = (a, b) => -Math.atan2(a[0] - b[0], a[1] - b[1]) * D;
  const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2];
  const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
  /* tronco di cono tra due punti (a = alto, b = basso) */
  const limb = (a, b, ra, rb, color, n) => mk('cyl', { pos: mid(a, b), r: rb, r2: ra, h: dist(a, b), n: n || 14, rot: [0, 0, ang(a, b)], color });
  const mir = (pts, s) => pts.map((p) => [p[0] * s, p[1], p[2]]);
  const clamp01 = (v) => Math.max(0, Math.min(1, v));

  /* curva della colonna (cifosi toracica, lordosi lombare e cervicale): z della colonna a quota y */
  const spineZ = (y) => -6.5 + 1.8 * Math.sin(((y - 82) / 66) * Math.PI * 2 + 0.6);

  /* ---- punti chiave delle braccia e delle gambe (s = ±1) ---- */
  const SH = (s) => [s * 20, 137, 0], EL = (s) => [s * 26.5, 108, 0.5], WR = (s) => [s * 30, 84, 1.5];
  const HIP = (s) => [s * 9.5, 86, 0], KN = (s) => [s * 8.5, 49, 0.5], AN = (s) => [s * 8.5, 9, 0];

  /* ================= PELLE ================= */
  const pelle = () => {
    const sh = [];
    sh.push(E([0, 158, 0], [8.4, 11.3, 10.2], SKIN, null, 10, 18));
    sh.push(E([0, 150.5, 3.2], [6, 5, 6.5], SKIN, null, 10, 18));
    sh.push(mk('cyl', { pos: [0, 145, -1], r: 4.8, h: 14, n: 20, scale: [1, 1, 1.1], color: SKIN }));
    sh.push(mk('lathe', { n: 28, caps: true, scale: [1, 1, 0.58], color: SKIN,
      pts: [[0.01, 69], [13, 71], [16.5, 78], [17, 86], [16, 96], [14.5, 106], [16, 118], [17.5, 130], [18, 137], [13, 141], [6, 144.5], [0.01, 145.5]] }));
    SIDES.forEach((s) => {
      sh.push(E([s * 20, 136, 0], [5.2, 5.4, 5.2], SKIN, null, 8, 14));              // spalla
      sh.push(limb(SH(s), EL(s), 4.4, 3.5, SKIN));                                       // braccio
      sh.push(E(EL(s), [3.5, 3.5, 3.5], SKIN, null, 8, 14));                             // gomito
      sh.push(limb(EL(s), WR(s), 3.5, 2.5, SKIN));                                       // avambraccio
      sh.push(E([s * 31, 78.5, 1.8], [2.3, 5.4, 1.8], SKIN, [0, 0, s * -6], 8, 14));     // mano
      sh.push(limb(HIP(s), KN(s), 8.2, 5.5, SKIN, 16));                                  // coscia
      sh.push(E(KN(s), [5.4, 5, 5.4], SKIN, null, 8, 14));                               // ginocchio
      sh.push(limb(KN(s), AN(s), 5.4, 3.2, SKIN, 14));                                   // gamba
      sh.push(E([s * 8.5, 3.2, 4.2], [3.6, 3.2, 8.8], SKIN, null, 8, 14));               // piede
    });
    return { id: 'pelle', systems: ['pelle'], color: SKIN, alpha: 0.18, explode: [0, 4, 125], anchor: [14, 100, 9], shapes: sh };
  };

  /* ================= SCHELETRO ================= */
  const cranio = () => {
    const sh = [E([0, 158, 0], [7.6, 9.5, 9.5], BONE, null, 12, 22),
      /* mandibola a U */
      P([[-4.6, 153.5, 0], [-4.2, 149.5, 2.6], [-2, 148, 5.4], [0, 147.6, 6.4], [2, 148, 5.4], [4.2, 149.5, 2.6], [4.6, 153.5, 0]], 0.9, BONE, 7),
      /* orbite */
      E([-3.2, 159.5, 8.2], [1.9, 1.9, 0.6], '#cbbfa6', null, 6, 10), E([3.2, 159.5, 8.2], [1.9, 1.9, 0.6], '#cbbfa6', null, 6, 10)];
    return { id: 'cranio', systems: ['scheletro'], color: BONE, alpha: 0.42, explode: [0, 30, -62], anchor: [0, 167, 3], shapes: sh };
  };

  const colonna = () => {
    const sh = [];
    for (let i = 0; i < 24; i++) {
      const y = 147 - i * (57 / 23), z = spineZ(y), r = i < 7 ? 1.2 : i < 19 ? 1.6 : 2.1;
      sh.push(mk('cyl', { pos: [0, y, z], r, h: 1.9, n: 8, color: BONE }));
      sh.push(mk('box', { pos: [0, y - 0.3, z - 4.1], s: [0.5, 1.8, 1.6], color: BONE }));
    }
    sh.push(E([0, 84, -5.6], [4.2, 5, 2.4], BONE, [-18, 0, 0], 8, 14));   // sacro
    sh.push(E([0, 77.5, -4.6], [0.9, 1.8, 0.9], BONE, null, 6, 8));       // coccige
    return { id: 'colonna', systems: ['scheletro'], color: BONE, explode: [0, 0, -68], anchor: [0, 118, -9], shapes: sh };
  };

  const costole = () => {
    const sh = [];
    SIDES.forEach((s) => {
      for (let i = 0; i < 10; i++) {
        const y0 = 135 - i * 3.6, k = Math.min(1, (i + 1) / 4);
        const a = 9 + 4.5 * k - 0.35 * Math.max(0, i - 5);
        const back = spineZ(y0) - 0.3, front = 6 + 2.6 * Math.min(1, (i + 1) / 5);
        const b = (front - back) / 2, zc = (front + back) / 2;
        const e = i < 7 ? 2.85 : 2.55 - (i - 7) * 0.2;
        const pts = [[s * 2.0, y0 + 0.6, spineZ(y0)]];
        for (let q = 0; q < 8; q++) {
          const f = 0.35 + (e - 0.35) * (q / 7);
          pts.push([s * a * Math.sin(f), y0 - 7 * Math.pow(f / Math.PI, 1.2), zc - b * Math.cos(f)]);
        }
        sh.push(P(pts, 0.5, BONE, 4, 1));
      }
    });
    sh.push(mk('box', { pos: [0, 121, 8.2], s: [3.8, 26, 1.1], color: '#e6dcc4' }));           // sterno
    sh.push(mk('cone', { pos: [0, 106, 8.0], r: 1.1, h: 3.5, n: 6, rot: [0, 0, 180], color: '#e6dcc4' }));   // processo xifoideo
    return { id: 'costole', systems: ['scheletro'], color: BONE, explode: [0, 8, -44], anchor: [11, 118, 6], shapes: sh };
  };

  const bacino = () => {
    const sh = [E([0, 84, -5.6], [4.4, 5.2, 2.6], '#e6dcc4', [-18, 0, 0], 8, 14)];
    SIDES.forEach((s) => {
      sh.push(E([s * 10, 91, -1.5], [6.2, 5.6, 2.2], BONE, [0, s * 28, s * -12], 10, 16));       // ala iliaca
      sh.push(E([s * 8.4, 80.2, -1.2], [2.6, 3.2, 2.2], BONE, null, 8, 12));                     // ischio
      sh.push(P([[s * 3, 88, -6], [s * 10, 91, -4], [s * 13.2, 87.5, 0.5], [s * 10.5, 81, 4.8], [s * 1.2, 79.5, 6.2]], 1.15, BONE, 7));
      sh.push(E([s * 8.5, 87, 0], [2.5, 2.5, 2.5], BONE, null, 8, 12));                          // cavità dell'anca
    });
    return { id: 'bacino', systems: ['scheletro'], color: BONE, explode: [0, -22, -52], anchor: [11, 86, 3], shapes: sh };
  };

  const ossaBraccia = () => {
    const sh = [];
    SIDES.forEach((s) => {
      sh.push(P(mir([[1.4, 139.2, 5.6], [10, 141, 3.2], [17, 140.2, 0.5], [20.5, 138.8, -2.2]], s), 0.8, BONE, 6));          // clavicola
      sh.push(E([s * 13.5, 131, -7.8], [5.5, 6.6, 0.8], BONE, [0, s * 10, s * 8], 8, 12));                                    // scapola
      sh.push(E([s * 20, 137, -0.5], [2.1, 2.1, 2.1], BONE, null, 7, 10));                                                    // testa dell'omero
      sh.push(P([[s * 20, 137, -0.5], [s * 26.5, 108.5, 0.5]], 1.3, BONE, 8));                                                // omero
      sh.push(P([[s * 26.3, 108, 0.2], [s * 29.6, 84, 1]], 0.85, BONE, 6));                                                   // ulna
      sh.push(P([[s * 27.4, 108, 1.5], [s * 31, 84, 2.4]], 0.7, BONE, 6));                                                    // radio
      sh.push(E([s * 31, 82, 1.7], [2, 1.3, 1.3], BONE, null, 6, 8));                                                         // polso
      sh.push(E([s * 31.2, 78, 1.9], [2, 3.1, 0.9], BONE, null, 6, 8));                                                       // mano
      for (let f = 0; f < 5; f++) {
        const x = s * (29.6 + f * 0.95), top = f === 0 ? 72 : 71.5 - (f === 2 ? 0 : 0.6 * (f - 1));
        sh.push(P([[x, 76, 1.9], [x + s * 0.1, top, 1.9]], 0.3, BONE, 4));                                                    // dita
      }
    });
    return { id: 'ossa_braccia', systems: ['scheletro'], color: BONE, explode: [0, 6, -34], anchor: [27, 118, 1], shapes: sh };
  };

  const ossaGambe = () => {
    const sh = [];
    SIDES.forEach((s) => {
      sh.push(E([s * 8.2, 87, 0], [2.2, 2.2, 2.2], BONE, null, 7, 10));                                    // testa del femore
      sh.push(P([[s * 8.6, 86.5, 0], [s * 11, 83.5, 0], [s * 9.6, 70, 0.6], [s * 8.5, 50, 0.5]], 1.7, BONE, 8));   // femore
      sh.push(E([s * 8.6, 48, 0.5], [2.9, 2.2, 2.6], BONE, null, 7, 12));                                  // ginocchio
      sh.push(E([s * 8.6, 48.2, 3.5], [1.7, 1.9, 1], '#e6dcc4', null, 6, 10));                             // rotula
      sh.push(P([[s * 8.5, 46, 0.8], [s * 8.5, 10, 0.3]], 1.35, BONE, 7));                                 // tibia
      sh.push(P([[s * 11, 46, -0.4], [s * 10.6, 10.5, -0.4]], 0.65, BONE, 6));                            // perone
      sh.push(E([s * 9, 6.5, -0.5], [2.4, 2, 2.4], BONE, null, 6, 10));                                    // caviglia
      sh.push(E([s * 8.5, 2.6, 4.2], [2.4, 1.4, 7.6], BONE, null, 6, 10));                                 // piede
    });
    return { id: 'ossa_gambe', systems: ['scheletro'], color: BONE, explode: [0, -16, -56], anchor: [11, 66, 1], shapes: sh };
  };

  /* ================= MUSCOLI ================= */
  const muscoli = () => {
    const sh = [];
    const m = (pos, sc, rot) => E(pos, sc, MUS, rot, 7, 12);
    sh.push(m([0, 134, -7.2], [11, 8, 2]));                                          // trapezio
    SIDES.forEach((s) => {
      sh.push(m([s * 7, 128, 6.4], [7, 5.4, 2.2], [0, 0, s * -10]));                 // pettorale
      sh.push(m([s * 2.2, 102.5, 7.5], [2, 2.1, 1.2]));                              // addominali (3 file)
      sh.push(m([s * 2.2, 97.5, 7.5], [2, 2.1, 1.2]));
      sh.push(m([s * 2.2, 92.5, 7.5], [2, 2.1, 1.2]));
      sh.push(m([s * 11, 96, 2.5], [3, 8.4, 4.6]));                                  // obliqui
      sh.push(m([s * 7, 115, -5.5], [7, 12, 1.9], [0, 0, s * 8]));                   // dorsali
      sh.push(m([s * 8, 80, -3], [7, 7, 4.5]));                                      // glutei
      sh.push(m([s * 20.5, 136.5, 0], [4.8, 6, 5.2], [0, 0, s * -10]));              // deltoide
      const a = mid(SH(s), EL(s)), ar = ang(SH(s), EL(s));
      sh.push(m([a[0], 123, 2.2], [2.7, 9.5, 2.6], [0, 0, ar]));                     // bicipite
      sh.push(m([a[0], 123, -2.2], [2.5, 9, 2.4], [0, 0, ar]));                      // tricipite
      const f = mid(EL(s), WR(s));
      sh.push(m([f[0], 97, 0.8], [2.5, 10.5, 2.6], [0, 0, ang(EL(s), WR(s))]));      // avambraccio
      sh.push(m([s * 9.5, 66, 1.3], [5.2, 17, 4.6], [0, 0, s * 2]));                 // quadricipite
      sh.push(m([s * 8.6, 37, -1.3], [3.2, 9.5, 3.2]));                              // polpaccio
    });
    return { id: 'muscoli', systems: ['muscoli'], color: MUS, alpha: 0.35, explode: [0, 2, 88], anchor: [8, 127, 8], shapes: sh };
  };

  const diaframma = () => {
    const sh = [];
    SIDES.forEach((s) => sh.push(mk('sphere', { r: 1, n: 8, m: 16, hemi: true, pos: [s * 6.2, s < 0 ? 103.2 : 102, -0.5], scale: [7.6, s < 0 ? 5.2 : 4.4, 7.6], color: '#e11d48', alpha: 0.7, ds: true })));
    return { id: 'diaframma', systems: ['muscoli', 'respiratorio'], color: '#e11d48', alpha: 0.7,
      explode: [0, -8, 30], anchor: [0, 106, 4], shapes: sh,
      anim: { type: 'move', dir: [0, -1, 0], amp: 1.4, wave: 'sin01', rate: 0.4 } };
  };

  /* ================= SISTEMA NERVOSO ================= */
  const cervello = () => ({ id: 'cervello', systems: ['nervoso'], color: '#f9a8d4',
    explode: [0, 30, 24], anchor: [0, 166, 4],
    shapes: [E([-1.9, 160.5, 0.6], [3.5, 6.4, 8], '#f9a8d4', null, 12, 16), E([1.9, 160.5, 0.6], [3.5, 6.4, 8], '#f9a8d4', null, 12, 16),
      E([0, 158, 5], [5, 3.4, 3.5], '#f5a3c9', null, 8, 12),
      P([[0, 156, -1.5], [0, 152, -3], [0, 148.5, -4.2], [0, 146.5, -4.6]], 1.3, '#f3c1d9', 8)] });

  const cervelletto = () => ({ id: 'cervelletto', systems: ['nervoso'], color: '#c084fc',
    explode: [0, 16, -18], anchor: [0, 153, -8],
    shapes: [E([0, 153.2, -5.8], [4.6, 2.7, 3.2], '#c084fc', null, 10, 16)] });

  const midollo = () => {
    const pts = [];
    for (let y = 147; y >= 88; y -= 4.5) pts.push([0, y, spineZ(y) - 2.4]);
    pts.push([0, 88, spineZ(88) - 2.4]);
    const sh = [P(pts, 0.65, '#fde68a', 6, 1)];
    [140, 128, 116, 104, 94].forEach((y) => SIDES.forEach((s) => sh.push(P([[0, y, spineZ(y) - 2.4], [s * 4, y - 1.2, spineZ(y) - 2.4], [s * 8.6, y - 3, spineZ(y) + 1]], 0.22, '#fde68a', 3, 1))));
    return { id: 'midollo', systems: ['nervoso'], color: '#fde68a', explode: [0, 0, -36], anchor: [0, 112, -9.5], shapes: sh };
  };

  const nervi = () => {
    const sh = [];
    SIDES.forEach((s) => {
      sh.push(P(mir([[0.6, 142, -5.5], [8, 140, -3.4], [16.5, 135, -1.2], [22, 122, -1.4], [25.4, 108, -0.8], [28.2, 95, 0.6], [30.2, 84, 1.6]], s), 0.42, '#fde047', 6));   // nervo del braccio
      sh.push(P(mir([[28.4, 86, 2], [30.2, 79, 2.2], [31, 73, 2.1]], s), 0.25, '#fde047', 4));
      sh.push(P(mir([[1.8, 84, -5.2], [5.6, 79, -6.2], [9, 70, -3.6], [8.8, 52, -2.8], [8.2, 30, -1.8], [8.6, 8, 1.6]], s), 0.5, '#fde047', 6)); // nervo sciatico
      sh.push(P(mir([[4.6, 83, -2.5], [8.2, 76, 0.8], [10.6, 62, 3], [9.4, 50, 2.8]], s), 0.35, '#fde047', 5));                                    // nervo femorale
      sh.push(P(mir([[1.4, 157, 4.5], [2.4, 158.4, 7], [3.2, 159.5, 8.2]], s), 0.32, '#fde047', 5));                                                // nervo ottico
    });
    return { id: 'nervi', systems: ['nervoso'], color: '#fde047', explode: [0, 0, -22], anchor: [28, 100, 1.5], shapes: sh };
  };

  /* ================= SENSI ================= */
  const occhi = () => {
    const sh = [];
    SIDES.forEach((s) => {
      sh.push(E([s * 3.2, 159.5, 8.3], [1.5, 1.5, 1.5], '#f8fafc', null, 9, 14));
      sh.push(E([s * 3.2, 159.5, 9.5], [0.8, 0.8, 0.35], '#2563eb', null, 7, 10));
      sh.push(E([s * 3.2, 159.5, 9.8], [0.4, 0.4, 0.2], '#0f172a', null, 5, 8));
    });
    return { id: 'occhi', systems: ['sensi'], color: '#f8fafc', explode: [0, 18, 40], anchor: [0, 160, 10.5], shapes: sh };
  };

  const orecchie = () => {
    const sh = [];
    SIDES.forEach((s) => {
      sh.push(E([s * 8.5, 157, -0.5], [1.1, 3.2, 2.2], '#fdba74', [0, 0, s * -6], 8, 14));
      sh.push(E([s * 7.4, 156, 0], [0.9, 1.1, 1.1], '#a8a29e', null, 5, 8));
    });
    return { id: 'orecchie', systems: ['sensi'], color: '#fdba74', explode: [0, 22, 4], anchor: [8.5, 160, -0.5], shapes: sh };
  };

  const naso = () => ({ id: 'naso', systems: ['sensi', 'respiratorio'], color: '#fdba74',
    explode: [0, 10, 46], anchor: [0, 155, 12.4],
    shapes: [E([0, 158, 9.7], [1.2, 2.8, 1.5], '#fdba74', [-12, 0, 0], 7, 10), E([0, 155.4, 11.3], [1.5, 1.4, 1.4], '#fdba74', null, 8, 12),
      E([-1.2, 154.8, 10.6], [0.7, 0.8, 0.9], '#fb923c', null, 6, 8), E([1.2, 154.8, 10.6], [0.7, 0.8, 0.9], '#fb923c', null, 6, 8),
      P([[0, 154.2, 8.4], [0, 152.4, 4], [0, 151, -0.5]], 0.6, '#fda4af', 6)] });

  const lingua = () => ({ id: 'lingua', systems: ['sensi', 'digerente'], color: '#f87171',
    explode: [0, 2, 36], anchor: [0, 151.6, 7],
    shapes: [E([0, 151, 3.4], [2.7, 1.1, 4.3], '#f87171', [-6, 0, 0], 8, 14), E([0, 151.2, 0.2], [2, 1.3, 2], '#ef6a6a', null, 6, 10)] });

  /* ================= CIRCOLATORIO ================= */
  const cuore = () => ({ id: 'cuore', systems: ['circolatorio'], color: '#b91c1c',
    explode: [8, 10, 44], anchor: [3, 117, 7.5],
    shapes: [E([3, 117, 3.6], [4.6, 6.3, 4], '#b91c1c', [0, 0, 28], 12, 18),         // ventricoli
      E([-1, 121.6, 3.4], [3, 3, 3.2], '#c42727', null, 8, 14),                       // atrio destro
      E([3.6, 122.6, 0.8], [2.8, 2.2, 2.2], '#c42727', null, 8, 12),                  // atrio sinistro
      mk('cyl', { pos: [1.6, 124.2, 3.2], r: 1.3, r2: 1.2, h: 3.4, n: 10, color: '#d33a3a' })],
    anim: { type: 'scale', from: 1, to: 1.09, wave: 'window', win: [0, 0.3], ramp: 0.5, rate: 1.6, pivot: [2.5, 118, 3] } });

  const AORTA = [[3.2, 120, 3.5], [1.8, 124.5, 3], [1.5, 129, 2.4], [3, 132, 0.6], [4.6, 130, -1.8], [4, 125, -3.4], [3.4, 118, -3.7], [3, 108, -3.6], [2.2, 100, -3.3], [1.8, 92, -3.2], [1.2, 86, -3]];
  const LEGART = (s) => mir([[1.5, 86, -3], [4, 81, -1.5], [6, 75, 2], [7, 62, 3], [7.2, 55, 1.5], [7.5, 48, -2], [7.6, 38, -1.5], [8, 22, 0], [8.5, 8, 1.8]], s);
  const LEGVEIN = (s) => mir([[1.2, 85, -2.4], [3.6, 80, -1.2], [5.2, 74, 1.8], [6.3, 62, 2.2], [6.6, 55, 1], [7, 48, -3], [7.2, 38, -2.4], [7.8, 22, -0.8], [8.6, 8, 1]], s);
  const dropsOn = (path, color, n) => Array.from({ length: n }, (_, k) => mk('sphere', { r: 0.62, n: 4, m: 6, pos: path[0], color, anim: { type: 'path', pts: path, wave: 'saw', rate: 0.18, phase: k / n } }));

  const arterie = () => {
    const sh = [P(AORTA, 1.15, RED, 10)];
    SIDES.forEach((s) => {
      sh.push(P(LEGART(s), 0.55, RED, 7));
      sh.push(P([[1.5, 128.5, 2.7], [s * 2.6, 134, 2], [s * 3.2, 141, 1.6], [s * 3.3, 148, 0.8], [s * 3.4, 154, 0.5], [s * 3, 160, 0]], 0.5, RED, 7));            // carotide
      sh.push(P([[1.5, 129, 2.2], [s * 3, 131.5, 1.6], [s * 10, 138.5, 1.4], [s * 18, 137, 1], [s * 22, 125, 0.6], [s * 25, 108, 1.5], [s * 27.5, 95, 2.2], [s * 30, 82, 2.5]], 0.5, RED, 7)); // braccio
      sh.push(P([[1.8, 94, -3.3], [s * 3, 93.4, -3.5], [s * 4.8, 93.2, -3.7]], 0.45, RED, 6));                                                                    // arteria renale
    });
    sh.push(P([[2.2, 101, -2.8], [1.4, 100.5, 0], [-2, 100, 2], [-5, 99, 3]], 0.48, RED, 6));                      // arteria epatica
    sh.push(P([[1.4, 100.5, 0], [5, 99.5, 0.5], [8, 99, -2], [10.5, 98.6, -3.6]], 0.42, RED, 6));                  // arteria splenica
    sh.push(P([[1.4, 97, -2.8], [1, 90, 0.5], [0, 84, 3]], 0.45, RED, 6));                                        // verso l'intestino
    /* arterie polmonari (sangue povero di ossigeno: blu) e vene polmonari (rosse) */
    sh.push(P([[1.6, 121, 5.3], [0.6, 125.5, 3.4], [-1.5, 126.5, 2.2], [-6.3, 124.6, 1]], 0.55, '#3b82f6', 7));
    sh.push(P([[0.6, 125.5, 3.4], [3.4, 126, 2.6], [8, 123.6, 1]], 0.55, '#3b82f6', 7));
    sh.push(P([[-7, 118.6, -1], [-2.4, 119.4, -0.4], [0.6, 120, 1]], 0.5, RED, 6));
    sh.push(P([[8.4, 118.6, -1], [4.2, 120.2, 0], [2.6, 122, 1.4]], 0.5, RED, 6));
    const path = AORTA.concat(LEGART(1).slice(1));
    return { id: 'arterie', systems: ['circolatorio'], color: RED, explode: [26, -4, -20], anchor: [3.4, 105, -5], shapes: sh.concat(dropsOn(path, '#fecaca', 5)) };
  };

  const vene = () => {
    const sh = [P([[-1, 121, 3.2], [-2, 126, 2], [-2.2, 134, 1.2]], 0.8, BLUE, 8),                                          // vena cava superiore
      P([[-1.4, 117, 1], [-1.6, 110, -1], [-2, 100, -2.4], [-1.6, 92, -3], [-1.2, 85, -2.6]], 1.0, BLUE, 10),             // vena cava inferiore
      P([[-1.2, 85, 1.4], [-2, 89, 2], [-3, 93, 2.6], [-4.6, 97, 2.8]], 0.6, '#3b6fd9', 6)];                              // vena porta
    SIDES.forEach((s) => {
      sh.push(P(LEGVEIN(s), 0.65, BLUE, 7));
      sh.push(P([[-2.2, 134, 1.2], [s * 4.1, 131.5, 0.6], [s * 4.2, 141, -0.4], [s * 4, 150, -0.8], [s * 3.6, 156, -1.2]], 0.7, BLUE, 7));   // giugulare
      sh.push(P([[s * 4, 131.5, 0.6], [s * 12, 138.6, -0.2], [s * 22, 128, -1.6], [s * 26, 108, -1.8], [s * 29, 92, -1.2], [s * 31, 82, -0.4]], 0.5, BLUE, 7)); // braccio
      sh.push(P([[s * 4.8, 92.8, -3.9], [s * 2, 92, -3.4], [-1.6, 91.8, -3.1]], 0.45, BLUE, 6));                                                 // vena renale
    });
    sh.push(P([[-4.6, 97, 2.8], [-5.4, 100, 0.5], [-3, 103.5, -1.2], [-1.8, 108, -1]], 0.5, '#3b6fd9', 6));                  // vena epatica
    const path = LEGVEIN(1).slice().reverse().concat([[1.2, 85, -2.4], [-1.2, 85, -2.6], [-1.6, 92, -3], [-2, 100, -2.4], [-1.6, 110, -1], [-1.4, 117, 1]]);
    return { id: 'vene', systems: ['circolatorio'], color: BLUE, explode: [-26, -4, -20], anchor: [-2, 105, -4], shapes: sh.concat(dropsOn(path, '#bfdbfe', 5)) };
  };

  /* ================= RESPIRATORIO ================= */
  const trachea = () => {
    const sh = [P([[0, 152, 2], [0, 142, 1.6], [0, 135, 0.7], [0, 129, -0.4]], 1.1, '#9fd3f5', 10)];
    SIDES.forEach((s) => {
      sh.push(P([[0, 129, -0.4], [s * 2, 127.5, -0.7], [s * 4, 125.5, -0.9], [s * 6.2, 121, -1]], 0.75, '#9fd3f5', 8));
      sh.push(P([[s * 4, 125.5, -0.9], [s * 6, 124.6, 0.6], [s * 8, 123.5, 1.4]], 0.4, '#9fd3f5', 6));
      sh.push(P([[s * 6.2, 121, -1], [s * 7.5, 115.5, -1.2], [s * 8.2, 109, -1.2]], 0.45, '#9fd3f5', 6));
      sh.push(P([[s * 6.2, 121, -1], [s * 9.6, 118, -1.2], [s * 11, 113, -1.4]], 0.4, '#9fd3f5', 6));
    });
    return { id: 'trachea', systems: ['respiratorio'], color: '#9fd3f5', explode: [0, 16, 14], anchor: [0, 140, 3.6], shapes: sh };
  };

  const polmoni = () => ({ id: 'polmoni', systems: ['respiratorio'], color: '#f9a8d4', alpha: 0.6,
    explode: [0, 4, 18], anchor: [-10, 124, 6],
    shapes: [E([-8.2, 121, -1], [5.2, 14, 6], '#f9a8d4', [0, 0, -3], 14, 22), E([-9.8, 112, -1], [3, 5, 4], '#f4a0cc', null, 8, 12),
      E([9.2, 120.5, -1], [4.2, 13.5, 5.8], '#f9a8d4', [0, 0, 3], 14, 22)],
    anim: { type: 'scale', from: 0.96, to: 1.05, axis: 'xyz', wave: 'sin01', rate: 0.4, pivot: [0, 112, -1] } });

  /* ================= DIGERENTE ================= */
  const esofago = () => ({ id: 'esofago', systems: ['digerente'], color: '#f4a78a',
    explode: [0, 8, -8], anchor: [0.8, 130, -2.6],
    shapes: [P([[0, 150, 0.5], [0, 143, -1], [0, 132, -1.8], [0.6, 120, -2.3], [1.5, 110, -1.4], [3, 104, 0.4]], 0.9, '#f4a78a', 10)] });

  const stomaco = () => ({ id: 'stomaco', systems: ['digerente'], color: '#fdba74',
    explode: [26, 8, 32], anchor: [8, 96, 7.2],
    shapes: [E([6.9, 101.6, 1.6], [3.9, 3.6, 3.3], '#fdba74', null, 10, 16), E([6.8, 96, 2.9], [4.7, 6.8, 3.3], '#fdba74', [0, 0, 14], 12, 18),
      P([[6, 91.6, 3.2], [3.4, 90, 3.4], [1, 90.2, 3.4], [-0.5, 90.5, 3.3]], 2.0, '#fdba74', 10), E([-0.6, 90.5, 3.3], [0.9, 0.9, 0.9], '#e08a3c', null, 6, 8)] });

  const fegato = () => ({ id: 'fegato', systems: ['digerente'], color: '#92400e',
    explode: [-24, 6, 30], anchor: [-6, 99, 9.5],
    shapes: [E([-5.2, 99.2, 3.4], [8, 5.1, 5.4], '#92400e', [0, 0, 8], 12, 18), E([2, 98.4, 5], [5, 3.4, 3.6], '#9a4a1c', [0, 0, -6], 8, 14)] });

  const cistifellea = () => ({ id: 'cistifellea', systems: ['digerente'], color: '#65a30d',
    explode: [-16, -6, 50], anchor: [-6.6, 92.6, 8],
    shapes: [E([-6.6, 93.3, 7.3], [1.1, 2.5, 1.1], '#65a30d', [0, 0, 10], 8, 12), P([[-6.2, 91.2, 6.8], [-4.8, 90.6, 5], [-3.6, 89.2, 3.4]], 0.3, '#84cc16', 5)] });

  const pancreas = () => ({ id: 'pancreas', systems: ['digerente', 'endocrino'], color: '#facc15',
    explode: [10, -6, 14], anchor: [4, 93.8, 0.8],
    shapes: [E([-2.4, 90.4, 0.4], [2.5, 2.4, 1.9], '#facc15', null, 8, 12), P([[-1.8, 91.2, 0.3], [2, 92.4, 0], [6, 93.8, -0.3], [9.4, 95.4, -1.2]], 1.4, '#facc15', 8)] });

  const intestinoTenue = () => {
    const pts = [[-0.5, 90.5, 3.3], [-3.2, 88.5, 1.6], [-3.5, 85.5, 1.6], [-1.6, 83.6, 2.6]];
    const rows = 5, K = 7;
    for (let r = 0; r < rows; r++) {
      const y = 83.4 - r * 1.9;
      for (let k = 0; k <= K; k++) {
        const f = r % 2 === 0 ? k / K : 1 - k / K;
        pts.push([-7 + 14 * f, y + 0.7 * Math.sin(k * 2.1 + r), 3.4 + 1.8 * Math.cos(k * 1.7 + r * 1.3)]);
      }
    }
    return { id: 'intestino_tenue', systems: ['digerente'], color: '#f59e8b', explode: [0, -6, 46], anchor: [0, 80, 7.4], shapes: [P(pts, 0.95, '#f59e8b', 6, 2)] };
  };

  const intestinoCrasso = () => ({ id: 'intestino_crasso', systems: ['digerente'], color: '#d97706',
    explode: [0, -18, 24], anchor: [10.5, 86, 4.8],
    shapes: [P([[-8.5, 78.5, 3.5], [-10, 84, 4], [-10.5, 90, 4.2], [-8.5, 92.8, 5.5], [-4, 91, 6.8], [0, 90.4, 7], [4, 91, 6.8], [8.5, 92.8, 5.5], [10.5, 90, 4.2], [10.3, 84, 4], [9.5, 78, 3.2], [6.5, 74.5, 1.6], [2.4, 74, 0.4], [0.4, 72.6, -1.6], [0, 70.8, -3]], 1.5, '#d97706', 8, 3),
      E([-8.5, 78.4, 3.5], [2.2, 2.4, 2.2], '#d97706', null, 8, 12),
      P([[-8.2, 76.6, 3.4], [-7, 75.2, 3.8], [-6.2, 76.2, 4.6]], 0.4, '#d97706', 5)] });

  /* ================= URINARIO ================= */
  const reni = () => {
    const sh = [];
    SIDES.forEach((s) => {
      sh.push(E([s * 6.3, s < 0 ? 91.6 : 93.4, -3.8], [2.5, 4.6, 2], '#be123c', [0, 0, s * 10], 10, 16));
      sh.push(P([[s * 4.3, s < 0 ? 91.2 : 93, -3.8], [s * 4, 85, -4.4], [s * 3.2, 78, -2.2], [s * 1.8, 74, 1.6]], 0.3, '#fde68a', 5));
    });
    return { id: 'reni', systems: ['urinario'], color: '#be123c', explode: [0, 4, -12], anchor: [-6.4, 91.6, -6], shapes: sh };
  };

  const vescica = () => ({ id: 'vescica', systems: ['urinario'], color: '#e9a8a0',
    explode: [0, -26, 30], anchor: [0, 75, 6.5],
    shapes: [E([0, 75.6, 3.4], [3.4, 3, 3.2], '#e9a8a0', null, 10, 16), P([[0, 73.4, 3.4], [0, 71.4, 4.2], [0, 69.6, 5.2]], 0.4, '#e9a8a0', 5)] });

  /* ================= ENDOCRINO ================= */
  const tiroide = () => ({ id: 'tiroide', systems: ['endocrino'], color: '#c026d3',
    explode: [0, 28, 28], anchor: [0, 144.8, 4.4],
    shapes: [E([-1.8, 145.4, 2.9], [1.1, 2.3, 1.2], '#c026d3', [0, 0, 8], 8, 12), E([1.8, 145.4, 2.9], [1.1, 2.3, 1.2], '#c026d3', [0, 0, -8], 8, 12), E([0, 144.4, 3.1], [1.9, 0.5, 0.8], '#c026d3', null, 6, 10)] });

  const surrenali = () => {
    const sh = [];
    SIDES.forEach((s) => sh.push(E([s * 5.4, s < 0 ? 96.4 : 98.2, -3.8], [1.7, 1.1, 1.3], '#fdba74', [0, 0, s * 15], 7, 10)));
    return { id: 'surrenali', systems: ['endocrino'], color: '#fdba74', explode: [0, 16, -2], anchor: [6, 99.4, -3.8], shapes: sh };
  };

  /* ================= IMMUNITARIO ================= */
  const milza = () => ({ id: 'milza', systems: ['immunitario'], color: '#7c3aed',
    explode: [34, 10, 10], anchor: [11.4, 98.6, -1.2],
    shapes: [E([11, 98.4, -4], [2, 4.2, 3], '#7c3aed', [0, 0, -8], 9, 14)] });

  const timo = () => ({ id: 'timo', systems: ['immunitario'], color: '#c4b5fd',
    explode: [0, 22, 36], anchor: [0, 129, 7],
    shapes: [E([-1.7, 128.8, 5], [1.9, 3.9, 1.4], '#c4b5fd', [0, 0, 6], 8, 12), E([1.7, 128.8, 5], [1.9, 3.9, 1.4], '#c4b5fd', [0, 0, -6], 8, 12)] });

  const linfonodi = () => {
    const sh = [], at = (p, r) => sh.push(mk('sphere', { r: r || 0.8, n: 5, m: 8, pos: p, color: '#22c55e' }));
    SIDES.forEach((s) => {
      at([s * 4.3, 147.6, 0.6]); at([s * 4.5, 144, 0.2], 0.7);               // collo
      at([s * 14.6, 132, -0.4], 1); at([s * 15.4, 128.6, 1.2], 0.9);          // ascelle
      at([s * 5.4, 76.6, 5], 0.9); at([s * 8, 78, 4.4], 0.8);                 // inguine
    });
    at([0, 86.5, -1.2], 0.8); at([-1.8, 93, -1], 0.7); at([1.6, 92, -1], 0.7);   // addome
    return { id: 'linfonodi', systems: ['immunitario'], color: '#22c55e', explode: [0, 0, 58], anchor: [15, 130, 2], shapes: sh };
  };

  BODY_MODEL({
    systems: [
      { id: 'scheletro', emoji: '🦴', color: '#e5e7eb' },
      { id: 'muscoli', emoji: '💪', color: '#dc2626' },
      { id: 'nervoso', emoji: '🧠', color: '#eab308' },
      { id: 'sensi', emoji: '👀', color: '#06b6d4' },
      { id: 'circolatorio', emoji: '❤️', color: '#ef4444' },
      { id: 'respiratorio', emoji: '🫁', color: '#38bdf8' },
      { id: 'digerente', emoji: '🍽️', color: '#f97316' },
      { id: 'urinario', emoji: '💧', color: '#facc15' },
      { id: 'endocrino', emoji: '🦋', color: '#a855f7' },
      { id: 'immunitario', emoji: '🛡️', color: '#22c55e' },
      { id: 'pelle', emoji: '🖐️', color: '#fdba74' }
    ],
    options: { rx: 0.12, ry: -0.45, height: 640, bg: 'body', floor: false, labels: false },
    parts: [
      pelle(), muscoli(), diaframma(),
      cranio(), colonna(), costole(), bacino(), ossaBraccia(), ossaGambe(),
      cervello(), cervelletto(), midollo(), nervi(),
      occhi(), orecchie(), naso(), lingua(),
      cuore(), arterie(), vene(),
      trachea(), polmoni(),
      esofago(), stomaco(), fegato(), cistifellea(), pancreas(), intestinoTenue(), intestinoCrasso(),
      reni(), vescica(), tiroide(), surrenali(), milza(), timo(), linfonodi()
    ]
  });
})();
