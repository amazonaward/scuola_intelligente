/* La Stazione Spaziale Internazionale (ISS). Formato: data/library/FORMATO.md
   Assi: il traliccio corre lungo x, i moduli abitati lungo z (z+ = verso di marcia), y = alto (la Terra è sotto, sfondo "orbit"). */
(function () {
  const TY = 1.15, TZ = 0.8;                       // asse del traliccio
  /* modulo cilindrico lungo z (o lungo x con ax = 'x'): corpo, anelli di rinforzo, coni di raccordo */
  const modZ = (z0, z1, r, color, x, y) => {
    const L = z1 - z0, zc = (z0 + z1) / 2, s = [
      { t: 'cyl', r, h: L - 0.24, n: 30, rot: [90, 0, 0], pos: [x || 0, y || 0, zc], color },
      { t: 'cyl', r, r2: r * 0.62, h: 0.12, n: 30, rot: [90, 0, 0], pos: [x || 0, y || 0, z1 - 0.06], color },
      { t: 'cyl', r: r * 0.62, r2: r, h: 0.12, n: 30, rot: [90, 0, 0], pos: [x || 0, y || 0, z0 + 0.06], color }
    ];
    for (let k = 1; k < 4; k++) s.push({ t: 'torus', R: r + 0.005, r: 0.025, n: 30, m: 6, rot: [90, 0, 0], pos: [x || 0, y || 0, z0 + 0.12 + (L - 0.24) * k / 4], color: '#a8a29e' });
    return s;
  };
  const modX = (x0, x1, r, color, y, z) => modZ(x0, x1, r, color, 0, 0).map((s) => Object.assign({}, s, { pos: [s.pos[2], y, z], rot: [0, 0, 90] }));
  /* ala di pannelli solari: telo dorato a celle + albero centrale */
  const wing = (dir) => {
    const s = [{ t: 'cyl', r: 0.035, h: 4.3, n: 8, rot: [90, 0, 0], pos: [0, 0, dir * 2.3], color: '#e5e7eb' }];
    for (const side of [-1, 1]) {
      s.push({ t: 'box', s: [0.46, 0.02, 4.2], pos: [side * 0.27, 0, dir * 2.35], color: '#b45309' });
      for (let k = 1; k < 12; k++) s.push({ t: 'box', s: [0.46, 0.006, 0.012], pos: [side * 0.27, 0.014, dir * (0.25 + k * 0.35)], color: '#fcd34d', decal: 1 });
      s.push({ t: 'box', s: [0.012, 0.006, 4.2], pos: [side * 0.27, 0.014, dir * 2.35], color: '#fcd34d', decal: 1 });
    }
    s.push({ t: 'box', s: [1.0, 0.08, 0.12], pos: [0, 0, dir * 4.45], color: '#9ca3af' });
    return s;
  };
  const array = (x, ph) => ({ t: 'group', pos: [x, TY, TZ], anim: { type: 'swing', axis: 'x', amp: 35, rate: 0.5, phase: ph }, shapes: [
    { t: 'cyl', r: 0.16, h: 0.5, n: 16, pos: [0, 0, 0], color: '#6b7280' }
  ].concat(wing(1), wing(-1)) });
  /* traliccio: trave con correnti e diagonali */
  const truss = [ { t: 'box', s: [15.2, 0.46, 0.46], pos: [0, TY, TZ], color: '#cbd5e1' } ];
  for (let i = -7; i <= 7; i++) {
    truss.push({ t: 'box', s: [0.06, 0.5, 0.5], pos: [i, TY, TZ], color: '#94a3b8' });
    if (i < 7) for (const zz of [-1, 1]) truss.push({ t: 'box', s: [1.08, 0.035, 0.012], pos: [i + 0.5, TY, TZ + zz * 0.236], rot: [0, 0, (i % 2 ? 1 : -1) * 23], color: '#64748b', decal: 1 });
  }
  const radiator = (x, ph) => ({ t: 'group', pos: [x, TY - 0.25, TZ], anim: { type: 'swing', axis: 'y', amp: 22, rate: 0.35, phase: ph }, shapes: [
    { t: 'cyl', r: 0.06, h: 0.5, n: 10, pos: [0, -0.2, 0], color: '#9ca3af' }
  ].concat([0, 1, 2, 3].map((k) => ({ t: 'box', s: [1.3, 0.78, 0.04], pos: [0, -0.9 - k * 0.84, 0], color: '#f8fafc' })),
    [0, 1, 2, 3].map((k) => ({ t: 'box', s: [1.22, 0.02, 0.012], pos: [0, -0.9 - k * 0.84, 0.026], color: '#cbd5e1', decal: 1 }))) });

  LIBRARY({
    lang: 'en',
    id: 'iss',
    title: 'The International Space Station',
    intro: 'The <b>ISS</b> is a home and a laboratory the size of a football pitch, orbiting the Earth at <b>400 km</b> up. It completes one full lap in 90 minutes, and there are always some astronauts on board from many countries.',
    model: {
      rx: 0.42, ry: -0.62, speed: 0.3, height: 480, bg: 'orbit', fit: 1.05,
      parts: [
        { id: 'traliccio', name: 'Truss (the "backbone")', label: 'Truss', color: '#cbd5e1', explode: [0, 1.6, 0],
          info: '<p>A long metal beam, more than 100 metres long. It holds together the solar panels, radiators, antennas and the robotic arm: it is the <b>backbone</b> of the station.</p>',
          more: '<p>The truss is made of <b>11 segments</b> carried into orbit one at a time by the Space Shuttle and assembled by astronauts during spacewalks. Electrical cables and cooling pipes run inside it.</p>',
          shapes: truss.concat([ { t: 'box', s: [0.4, 0.4, 0.3], pos: [0, 0.75, TZ], color: '#9ca3af' } ]) },
        { id: 'pannelli', name: 'Solar panels', color: '#b45309', explode: [0, 2.6, 0],
          info: '<p>Eight large golden "wings" turn sunlight into <b>electricity</b>. They turn slowly so that they always stay facing the Sun.</p>',
          more: '<p>Each wing is 35 metres long and holds about 33,000 solar cells. Together they produce up to <b>120 kW</b>: enough for about forty homes. Part of the energy charges the <b>batteries</b>, which are needed when the station passes into the Earth\'s shadow (about 35 minutes every lap).</p>',
          shapes: [ array(-5.0, 0), array(-6.85, 0), array(5.0, 0), array(6.85, 0) ] },
        { id: 'giunti', name: 'Rotary joints (SARJ)', label: 'Rotary joints', color: '#475569', explode: [0, 1.6, 0],
          info: '<p>Two large "bearings" in the truss turn the ends carrying the panels, like sunflowers that follow the Sun.</p>',
          more: '<p>Each joint is a ring almost 3 metres in diameter, with gears and motors. It turns 360° every lap of the station, that is every 90 minutes.</p>',
          shapes: [-3.6, 3.6].map((x) => ({ t: 'group', pos: [x, TY, TZ], shapes: [
            { t: 'cyl', r: 0.4, h: 0.32, n: 30, rot: [0, 0, 90] },
            { t: 'group', anim: { type: 'spin', axis: 'x', rate: 0.25 }, shapes: [ { t: 'torus', R: 0.4, r: 0.05, n: 30, m: 8, rot: [0, 0, 90], color: '#f59e0b' }, { t: 'box', s: [0.34, 0.08, 0.84], color: '#94a3b8' } ] }
          ] })) },
        { id: 'radiatori', name: 'Radiators', color: '#f8fafc', explode: [0, -1.2, 0.6],
          info: '<p>Large white panels that throw the <b>heat</b> produced by people and machines out into space. Without them the station would become an oven!</p>',
          more: '<p>Ammonia circulates in the station\'s pipes: it collects the <b>heat</b> and carries it to the radiators. There the heat is radiated into space as infrared light. The radiators also turn, but to stay edge-on to the Sun.</p>',
          shapes: [ radiator(-2.4, 0), radiator(2.4, 0.5) ] },
        { id: 'zvezda', name: 'Zvezda (Russian service module)', label: 'Zvezda', color: '#d6d3d1', explode: [0, 0, -2.2],
          info: '<p>The Russian module "Star": it has sleeping quarters, a kitchen, a bathroom and the <b>engines</b> that now and then lift the station back up, which would otherwise slowly sink.</p>',
          more: '<p>At 400 km there is still a trace of air that slows the station down: it loses about 2 km of altitude a month. The engines of Zvezda and of the docked spacecraft perform the "reboosts".</p>',
          shapes: modZ(-7.4, -4.4, 0.6, '#d6d3d1').concat([
            { t: 'cyl', r: 0.72, h: 1.1, n: 30, rot: [90, 0, 0], pos: [0, 0, -6.75], color: '#d6d3d1' },
            { t: 'cone', r: 0.2, h: 0.3, n: 16, rot: [90, 0, 0], pos: [0.3, 0, -7.45], color: '#57534e' },
            { t: 'cone', r: 0.2, h: 0.3, n: 16, rot: [90, 0, 0], pos: [-0.3, 0, -7.45], color: '#57534e' },
            { t: 'sphere', r: 0.55, n: 14, m: 24, pos: [0, 0, -4.2], color: '#e7e5e4' },
            { t: 'box', s: [3.2, 0.03, 0.9], pos: [-2.3, 0, -6.6], color: '#1e3a8a' }, { t: 'box', s: [3.2, 0.03, 0.9], pos: [2.3, 0, -6.6], color: '#1e3a8a' },
            { t: 'box', s: [3.2, 0.008, 0.012], pos: [-2.3, 0.02, -6.6], color: '#93c5fd', decal: 1 }, { t: 'box', s: [3.2, 0.008, 0.012], pos: [2.3, 0.02, -6.6], color: '#93c5fd', decal: 1 }
          ]) },
        { id: 'zarya', name: 'Zarya (the first module)', label: 'Zarya', color: '#e7e5e4', explode: [0, -0.3, -1.4],
          info: '<p>"Dawn" in Russian: it was the <b>first piece</b> of the station, launched in 1998. Today it serves as a storeroom and holds fuel tanks.</p>',
          shapes: modZ(-3.95, -1.6, 0.62, '#e7e5e4').concat([ { t: 'tube', r: 0.3, ri: 0.22, h: 0.4, n: 20, pos: [0, -0.75, -3.0], color: '#9ca3af' } ]) },
        { id: 'nodi', name: 'Unity and Harmony nodes', label: 'Nodes', color: '#f1f5f9', explode: [0, 0.4, 0],
          info: '<p>The <b>nodes</b> are "junctions": short modules with many hatches on each side, to which the other modules and the spacecraft attach.</p>',
          more: '<p>Each node has 6 hatches (front, back, up, down, right, left). Harmony and Tranquility were built <b>in Italy</b>, in Turin!</p>',
          shapes: modZ(-1.45, -0.35, 0.66, '#f1f5f9').concat(modZ(2.75, 4.1, 0.64, '#f1f5f9'), [ { t: 'tube', r: 0.34, ri: 0.26, h: 0.3, n: 20, pos: [0, -0.72, 3.4], color: '#9ca3af' } ]) },
        { id: 'destiny', name: 'Destiny (US laboratory)', label: 'Destiny', color: '#ece7dc', explode: [0, 0.5, 0.4],
          info: '<p>The American laboratory: here astronauts carry out experiments on plants, flames, liquids and on their own bodies, to understand how things change <b>without weight</b>.</p>',
          more: '<p>In microgravity flames become blue spheres, water forms floating balls, and bones lose calcium: that is why astronauts do 2 hours of exercise a day.</p>',
          shapes: modZ(-0.3, 2.7, 0.64, '#ece7dc').concat([ { t: 'cyl', r: 0.2, h: 0.04, n: 20, rot: [0, 0, 0], pos: [0, -0.64, 1.4], color: '#1e293b' } ]) },
        { id: 'columbus', name: 'Columbus (European laboratory)', label: 'Columbus', color: '#e2e8f0', explode: [1.6, 0, 0.6],
          info: '<p>The laboratory of the <b>European Space Agency</b>. It too was largely built in Turin. Outside, it has platforms for experiments exposed to the vacuum.</p>',
          shapes: modX(0.62, 2.4, 0.6, '#e2e8f0', 0, 3.42).concat([ { t: 'box', s: [0.5, 0.35, 0.35], pos: [2.0, 0.55, 3.42], color: '#94a3b8' } ]) },
        { id: 'kibo', name: 'Kibo (Japanese laboratory)', label: 'Kibo', color: '#f5f5f4', explode: [-1.6, 0.3, 0.6],
          info: '<p>"Hope" in Japanese: it is the largest module. It has a small robotic arm of its own and an external <b>terrace</b> where experiments are exposed to space.</p>',
          shapes: modX(-3.1, -0.62, 0.7, '#f5f5f4', 0, 3.42).concat([
            { t: 'box', s: [1.4, 0.15, 1.3], pos: [-3.9, -0.2, 3.42], color: '#9ca3af' },
            { t: 'box', s: [0.35, 0.3, 0.35], pos: [-3.6, 0.03, 3.1], color: '#fbbf24' }, { t: 'box', s: [0.35, 0.3, 0.35], pos: [-4.2, 0.03, 3.7], color: '#60a5fa' },
            { t: 'cyl', r: 0.42, h: 0.9, n: 24, pos: [-1.9, 1.05, 3.42], color: '#f5f5f4' }, { t: 'torus', R: 0.42, r: 0.025, n: 24, m: 6, pos: [-1.9, 1.2, 3.42], color: '#a8a29e' }
          ]) },
        { id: 'cupola', name: 'Tranquility and Cupola', label: 'Cupola', color: '#e7e5e4', explode: [-1.4, -1.0, -0.2],
          info: '<p>The <b>Cupola</b> is the station\'s "panoramic window": 7 windows from which astronauts look at the Earth and photograph storms, cities and auroras.</p>',
          more: '<p>The central window is the largest piece of glass ever sent into space (80 cm). The panes are 4 layers thick and have external covers that close to protect them from micrometeoroids.</p>',
          shapes: modX(-2.75, -0.66, 0.6, '#e7e5e4', 0, -0.9).concat([
            { t: 'cyl', r: 0.52, r2: 0.42, h: 0.32, n: 7, pos: [-1.7, -0.72, -0.9], color: '#d6d3d1' },
            { t: 'cyl', r: 0.36, h: 0.04, n: 7, pos: [-1.7, -0.9, -0.9], color: '#0ea5e9' },
            { t: 'cyl', r: 0.38, h: 0.05, n: 7, pos: [-1.7, -0.88, -0.9], color: '#9ca3af' }
          ]) },
        { id: 'braccio', name: 'Canadarm2 (robotic arm)', label: 'Robotic arm', color: '#f1f5f9', pos: [1.4, TY + 0.25, TZ], explode: [0.5, 1.6, 0.8],
          info: '<p>A robotic arm 17 metres long, built in <b>Canada</b>. It grabs cargo spacecraft, moves heavy pieces and carries astronauts around during spacewalks.</p>',
          more: '<p>It has 7 joints, like a human arm (shoulder, elbow, wrist). It has no "front" or "back": it can detach and reattach at its other end, moving across the station like an <b>inchworm</b>.</p>',
          shapes: [ { t: 'box', s: [0.6, 0.18, 0.6], color: '#94a3b8' },
            { t: 'group', anim: { type: 'swing', axis: 'y', amp: 40, rate: 0.4 }, shapes: [
              { t: 'cyl', r: 0.12, h: 0.25, n: 16, pos: [0, 0.2, 0], color: '#64748b' },
              { t: 'pipe', r: 0.07, n: 12, pts: [[0, 0.3, 0], [0, 1.4, 1.5]] },
              { t: 'group', pos: [0, 1.4, 1.5], anim: { type: 'swing', axis: 'x', amp: 30, rate: 0.4, phase: 0.2 }, shapes: [
                { t: 'sphere', r: 0.13, n: 10, color: '#64748b' },
                { t: 'pipe', r: 0.065, n: 12, pts: [[0, 0, 0], [0, -0.6, 1.9]] },
                { t: 'cyl', r: 0.12, h: 0.3, n: 16, pos: [0, -0.68, 2.05], rot: [70, 0, 0], color: '#64748b' },
                { t: 'cyl', r: 0.09, h: 0.18, n: 16, pos: [0, -0.74, 2.3], rot: [70, 0, 0], color: '#1f2937' }
              ] } ] } ] },
        { id: 'dragon', name: 'Crew Dragon spacecraft', label: 'Crew Dragon', color: '#f8fafc', explode: [0, 0, 1.4],
          anim: { type: 'move', dir: [0, 0, 1], amp: 2.2, wave: 'window', from: 0.05, to: 0.75, ramp: 0.45 },
          info: '<p>A spacecraft that carries <b>astronauts</b> from Earth to the station and brings them home. It docks by itself, guided by the computer.</p>',
          more: '<p>Docking happens at a few centimetres per second: the station and the spacecraft travel at 28,000 km/h, but relative to each other they are almost still, like two cars side by side on a motorway.</p>',
          shapes: [ { t: 'lathe', n: 30, rot: [-90, 0, 0], pos: [0, 0, 5.35], pts: [[0, 1.25], [0.2, 1.22], [0.32, 1.0], [0.6, 0.2], [0.64, 0.08], [0.6, 0], [0, 0]] },
            { t: 'cyl', r: 0.13, h: 0.14, n: 16, rot: [90, 0, 0], pos: [0, 0, 4.12], color: '#9ca3af' },
            { t: 'cyl', r: 0.6, h: 0.75, n: 30, rot: [90, 0, 0], pos: [0, 0, 5.75], color: '#e5e7eb' },
            { t: 'torus', R: 0.6, r: 0.02, n: 30, m: 6, rot: [90, 0, 0], pos: [0, 0, 5.38], color: '#1f2937' },
            { t: 'box', s: [0.02, 0.45, 0.55], pos: [0.6, 0, 5.75], color: '#1e3a8a', decal: 1 },
            { t: 'box', s: [0.02, 0.45, 0.55], pos: [-0.6, 0, 5.75], color: '#1e3a8a', decal: 1 },
            { t: 'cyl', r: 0.08, h: 0.03, n: 12, rot: [-30, 0, 0], pos: [0, 0.4, 4.85], color: '#0f172a', decal: 1 } ] },
        { id: 'soyuz', name: 'Soyuz spacecraft', label: 'Soyuz', color: '#a3a38a', explode: [0, -1.4, 0],
          info: '<p>The Russian spacecraft: it carries 3 astronauts. It is made of three parts: the orbital module (the sphere), the return capsule and the service module with the solar panels.</p>',
          shapes: [ { t: 'cyl', r: 0.12, h: 0.3, n: 16, pos: [0, -0.8, -3.0], color: '#9ca3af' },
            { t: 'sphere', r: 0.42, n: 14, m: 24, pos: [0, -1.32, -3.0], scale: [1, 1.12, 1], color: '#a3a38a' },
            { t: 'lathe', n: 28, pos: [0, 0, -3.0], pts: [[0.24, -1.75], [0.5, -1.95], [0.58, -2.42], [0.3, -2.5], [0, -2.5]], color: '#78716c' },
            { t: 'cyl', r: 0.5, h: 0.85, n: 28, pos: [0, -2.95, -3.0], color: '#d6d3d1' },
            { t: 'cyl', r: 0.44, r2: 0.5, h: 0.12, n: 28, pos: [0, -3.43, -3.0], color: '#57534e' },
            { t: 'box', s: [3.0, 0.03, 0.55], pos: [0, -3.0, -3.0], color: '#1e3a8a' },
            { t: 'box', s: [3.0, 0.008, 0.012], pos: [0, -2.98, -3.0], color: '#93c5fd', decal: 1 } ] },
        { id: 'astronauta', name: 'Astronaut on a spacewalk', label: 'Astronaut', color: '#f8fafc', pos: [-3.0, TY + 0.55, TZ + 0.55], explode: [-0.4, 1.4, 1.2],
          anim: { type: 'swing', axis: 'z', amp: 8, rate: 0.6 },
          info: '<p>To repair the station from outside, astronauts wear a <b>spacesuit</b>, which is a small spacecraft: it provides air, water and warmth, and protects from the Sun\'s rays.</p>',
          more: '<p>A spacewalk lasts about <b>6–7 hours</b>. The astronaut is always tethered to the station with cables: if they came loose, they would keep floating away!</p>',
          shapes: [ { t: 'sphere', r: 0.17, n: 12, m: 18, scale: [1, 1.35, 0.85] },
            { t: 'sphere', r: 0.12, n: 12, m: 18, pos: [0, 0.32, 0] }, { t: 'sphere', r: 0.095, n: 10, m: 16, pos: [0, 0.32, 0.04], scale: [1, 0.8, 1], color: '#d97706' },
            { t: 'box', s: [0.28, 0.32, 0.12], pos: [0, 0.05, -0.17], color: '#e5e7eb' },
            { t: 'pipe', r: 0.055, n: 10, curve: true, pts: [[0.15, 0.12, 0], [0.32, 0.0, 0.08], [0.38, -0.2, 0.15]] },
            { t: 'pipe', r: 0.055, n: 10, curve: true, pts: [[-0.15, 0.12, 0], [-0.3, 0.18, 0.12], [-0.4, 0.35, 0.18]] },
            { t: 'pipe', r: 0.065, n: 10, curve: true, pts: [[0.07, -0.18, 0], [0.1, -0.42, 0.05], [0.12, -0.62, 0]] },
            { t: 'pipe', r: 0.065, n: 10, curve: true, pts: [[-0.07, -0.18, 0], [-0.12, -0.4, -0.05], [-0.14, -0.6, 0.05]] },
            { t: 'pipe', r: 0.012, n: 6, curve: true, pts: [[0, -0.05, -0.2], [0.2, -0.3, -0.4], [0.3, -0.55, -0.35]], color: '#facc15' } ] }
      ]
    },
    steps: [
      { icon: '🛰️', title: 'A home in space', explode: 0,
        html: '<p>The Space Station has been <b>assembled in orbit</b> piece by piece, since 1998, by 5 space agencies: the USA, Russia, Europe (with Italy!), Japan and Canada. It is the largest object ever built by humans in space.</p><p class="tip">🔭 In the evening it can be seen with the naked eye: it looks like a very bright star crossing the sky in a few minutes, without flickering.</p>' },
      { icon: '☀️', title: 'Energy from the Sun', focus: ['pannelli', 'giunti', 'traliccio'], view: { rx: 0.3, ry: -0.35 },
        html: '<p>In space there are no electrical sockets: all the energy comes from sunlight, thanks to the <b>eight wings of solar panels</b>.</p><p>The <b>rotary joints</b> turn the wings to keep them always facing the Sun, just as sunflowers do.</p>' },
      { icon: '🏠', title: 'The rooms: the modules', focus: ['zvezda', 'zarya', 'nodi', 'destiny', 'columbus', 'kibo', 'cupola'], explode: 0.35, view: { rx: 0.55, ry: -0.5 },
        html: '<p>Astronauts live in the <b>modules</b>: large cylinders full of air, connected to each other like the carriages of a train. There are the laboratories (<b>Destiny</b>, <b>Columbus</b>, <b>Kibo</b>), the sleeping quarters, the gym and the bathroom.</p><p class="tip">🇮🇹 About half of the habitable space of the ISS was built in <b>Turin</b>.</p>' },
      { icon: '🪟', title: 'The window on the Earth', focus: ['cupola', 'nodi', 'astronauta'], view: { rx: -0.25, ry: -0.9 }, zoom: 1.3,
        html: '<p>From the <b>Cupola</b> you can see the Earth slide by beneath your feet. Every 90 minutes the station completes a full lap: astronauts see <b>16 sunrises and 16 sunsets</b> a day!</p>' },
      { icon: '🌡️', title: 'Throwing away the heat', focus: ['radiatori', 'traliccio'], view: { rx: 0.2, ry: -0.2 },
        html: '<p>People, computers and experiments produce heat. In a vacuum the heat cannot be carried off by wind: a liquid collects it and carries it to the white <b>radiators</b>, which "radiate" it into space.</p><p class="tip">🌗 In sunlight the outside of the station reaches +120 °C, in shadow −150 °C.</p>' },
      { icon: '🦾', title: 'The robotic arm', focus: ['braccio', 'traliccio', 'astronauta'], view: { rx: 0.45, ry: -0.75 }, zoom: 1.25,
        html: '<p>The <b>Canadarm2</b> grabs cargo spacecraft, moves pieces and carries astronauts outside the station during <b>spacewalks</b>.</p>' },
      { icon: '🚀', title: 'Arrivals and departures', focus: ['dragon', 'soyuz', 'nodi', 'zarya'], view: { rx: 0.25, ry: -1.1 },
        html: '<p>The spacecraft bring astronauts, food, water, clothes and experiments. The <b>Crew Dragon</b> slowly approaches and docks by itself to a node. The Russian <b>Soyuz</b> carries three people.</p>' },
      { icon: '🌍', title: 'Why doesn\'t it fall?', explode: 0, view: { rx: 0.42, ry: -0.62 },
        html: '<p>In fact the station is <b>always falling</b> toward the Earth! But it travels so fast sideways (<b>28,000 km/h</b>, 8 km every second) that, while it falls, the Earth curves away beneath it: so it keeps circling around it.</p><p>That is why everything floats on board: astronauts and objects fall together with the station.</p>' }
    ],
    facts: [
      { icon: '⚽', title: 'As big as a football pitch', html: 'The ISS is 109 metres long and weighs about <b>420 tonnes</b>, as much as 300 cars.' },
      { icon: '🚿', title: 'Water is recycled', html: 'On board almost all the water is recycled, even sweat and urine: it is filtered and becomes drinkable again. "Yesterday\'s coffee becomes tomorrow\'s coffee"!' },
      { icon: '😴', title: 'Sleeping standing up', html: 'Astronauts sleep in sleeping bags tied to the wall: without weight there is no "up" and "down", so they can sleep in any position.' },
      { icon: '📏', title: 'Taller in space', html: 'Without weight the spine stretches: astronauts become up to <b>5 cm taller</b>. Back on Earth they return to their usual height.' },
      { icon: '🇮🇹', title: 'Italian astronauts', html: 'Several Italians have been on the ISS, such as <b>Samantha Cristoforetti</b> (the first European woman to command the station) and <b>Luca Parmitano</b>.' }
    ],
    quiz: [
      { type: 'mc', q: 'At what altitude does the Space Station fly?', options: ['About 10 km', 'About 400 km', 'About 36,000 km', 'About 384,000 km'], answer: 1, explain: 'The ISS flies at about 400 km: 10 km is the altitude of airliners, and 384,000 km is the distance to the Moon.' },
      { type: 'mc', q: 'Where does the station\'s electricity come from?', options: ['From a long cable from Earth', 'From a petrol engine', 'From solar panels', 'From the radiators'], answer: 2, explain: 'Eight large wings of solar panels turn sunlight into electricity.' },
      { type: 'tf', q: 'On board, objects float because there is no gravity in space.', answer: false, explain: 'Gravity is there (almost as strong as on Earth), but the station, the astronauts and the objects all fall together around the Earth: that is why they float.' },
      { type: 'mc', q: 'What are the white radiators for?', options: ['To produce electricity', 'To throw excess heat out into space', 'To communicate with Earth', 'To push the station'], answer: 1, explain: 'A liquid collects the heat and carries it to the radiators, which radiate it into space.' },
      { type: 'num', q: 'In how many minutes does the ISS complete one full lap around the Earth?', answer: 90, tol: 3, unit: 'min', explain: 'About 90 minutes: that is why astronauts see 16 sunrises a day.' },
      { type: 'mc', q: 'What is the station\'s "panoramic window" called?', options: ['Cupola', 'Zarya', 'Canadarm2', 'Destiny'], answer: 0, explain: 'The Cupola has 7 windows and was built in Italy.' }
    ]
  });
})();
