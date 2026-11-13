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
    id: 'iss',
    lang: 'de',
    title: 'Die Internationale Raumstation',
    intro: 'Die <b>ISS</b> ist ein Zuhause und ein Labor, so groß wie ein Fußballfeld, das in <b>400 km</b> Höhe um die Erde kreist. Sie braucht für eine ganze Runde 90 Minuten, und an Bord leben immer einige Astronauten aus vielen Ländern.',
    model: {
      rx: 0.42, ry: -0.62, speed: 0.3, height: 480, bg: 'orbit', fit: 1.05,
      parts: [
        { id: 'traliccio', name: 'Gitterträger (das „Rückgrat“)', label: 'Gitterträger', color: '#cbd5e1', explode: [0, 1.6, 0],
          info: '<p>Ein langer Metallträger, mehr als 100 Meter lang. Er hält Solarmodule, Radiatoren, Antennen und den Roboterarm zusammen: Er ist das <b>Rückgrat</b> der Station.</p>',
          more: '<p>Der Gitterträger besteht aus <b>11 Segmenten</b>, die nacheinander vom Space Shuttle in die Umlaufbahn gebracht und von den Astronauten bei Weltraumspaziergängen zusammengebaut wurden. Im Inneren verlaufen Stromkabel und Kühlleitungen.</p>',
          shapes: truss.concat([ { t: 'box', s: [0.4, 0.4, 0.3], pos: [0, 0.75, TZ], color: '#9ca3af' } ]) },
        { id: 'pannelli', name: 'Solarmodule', color: '#b45309', explode: [0, 2.6, 0],
          info: '<p>Acht große goldfarbene „Flügel“ verwandeln das Sonnenlicht in <b>Strom</b>. Sie drehen sich ganz langsam, damit sie immer zur Sonne zeigen.</p>',
          more: '<p>Jeder Flügel ist 35 Meter lang und hat etwa 33 000 Solarzellen. Zusammen erzeugen sie bis zu <b>120 kW</b>: genug für etwa vierzig Häuser. Ein Teil der Energie lädt die <b>Batterien</b>, die gebraucht werden, wenn die Station durch den Schatten der Erde fliegt (etwa 35 Minuten pro Runde).</p>',
          shapes: [ array(-5.0, 0), array(-6.85, 0), array(5.0, 0), array(6.85, 0) ] },
        { id: 'giunti', name: 'Drehgelenke (SARJ)', label: 'Drehgelenke', color: '#475569', explode: [0, 1.6, 0],
          info: '<p>Zwei große „Lager“ im Gitterträger drehen die Enden mit den Solarmodulen, wie Sonnenblumen, die der Sonne folgen.</p>',
          more: '<p>Jedes Gelenk ist ein Ring von fast 3 Metern Durchmesser mit Zahnrädern und Motoren. Es dreht sich bei jeder Runde der Station um 360°, also alle 90 Minuten.</p>',
          shapes: [-3.6, 3.6].map((x) => ({ t: 'group', pos: [x, TY, TZ], shapes: [
            { t: 'cyl', r: 0.4, h: 0.32, n: 30, rot: [0, 0, 90] },
            { t: 'group', anim: { type: 'spin', axis: 'x', rate: 0.25 }, shapes: [ { t: 'torus', R: 0.4, r: 0.05, n: 30, m: 8, rot: [0, 0, 90], color: '#f59e0b' }, { t: 'box', s: [0.34, 0.08, 0.84], color: '#94a3b8' } ] }
          ] })) },
        { id: 'radiatori', name: 'Radiatoren', color: '#f8fafc', explode: [0, -1.2, 0.6],
          info: '<p>Große weiße Platten, die die <b>Wärme</b> von Menschen und Maschinen in den Weltraum abgeben. Ohne sie würde die Station zu einem Backofen!</p>',
          more: '<p>In den Leitungen der Station fließt <b>Ammoniak</b>, der die Wärme aufnimmt und zu den Radiatoren bringt. Dort wird die Wärme als Infrarotlicht in den Weltraum abgestrahlt. Auch die Radiatoren drehen sich, aber so, dass sie der Sonne die Kante zeigen.</p>',
          shapes: [ radiator(-2.4, 0), radiator(2.4, 0.5) ] },
        { id: 'zvezda', name: 'Swesda (russisches Servicemodul)', label: 'Swesda', color: '#d6d3d1', explode: [0, 0, -2.2],
          info: '<p>Das russische Modul „Stern“: Es hat Schlafkojen, eine Küche, ein Bad und die <b>Triebwerke</b>, die die Station ab und zu wieder anheben, denn sonst würde sie ganz langsam absinken.</p>',
          more: '<p>In 400 km Höhe gibt es noch einen Hauch von Luft, der die Station bremst: Sie verliert etwa 2 km Höhe pro Monat. Die Triebwerke von Swesda und der angedockten Raumschiffe sorgen für die „Neustarts“ (Reboost).</p>',
          shapes: modZ(-7.4, -4.4, 0.6, '#d6d3d1').concat([
            { t: 'cyl', r: 0.72, h: 1.1, n: 30, rot: [90, 0, 0], pos: [0, 0, -6.75], color: '#d6d3d1' },
            { t: 'cone', r: 0.2, h: 0.3, n: 16, rot: [90, 0, 0], pos: [0.3, 0, -7.45], color: '#57534e' },
            { t: 'cone', r: 0.2, h: 0.3, n: 16, rot: [90, 0, 0], pos: [-0.3, 0, -7.45], color: '#57534e' },
            { t: 'sphere', r: 0.55, n: 14, m: 24, pos: [0, 0, -4.2], color: '#e7e5e4' },
            { t: 'box', s: [3.2, 0.03, 0.9], pos: [-2.3, 0, -6.6], color: '#1e3a8a' }, { t: 'box', s: [3.2, 0.03, 0.9], pos: [2.3, 0, -6.6], color: '#1e3a8a' },
            { t: 'box', s: [3.2, 0.008, 0.012], pos: [-2.3, 0.02, -6.6], color: '#93c5fd', decal: 1 }, { t: 'box', s: [3.2, 0.008, 0.012], pos: [2.3, 0.02, -6.6], color: '#93c5fd', decal: 1 }
          ]) },
        { id: 'zarya', name: 'Sarja (das erste Modul)', label: 'Sarja', color: '#e7e5e4', explode: [0, -0.3, -1.4],
          info: '<p>Auf Russisch „Morgenröte“: Es war das <b>erste Bauteil</b> der Station und wurde 1998 gestartet. Heute dient es als Lager und enthält Treibstofftanks.</p>',
          shapes: modZ(-3.95, -1.6, 0.62, '#e7e5e4').concat([ { t: 'tube', r: 0.3, ri: 0.22, h: 0.4, n: 20, pos: [0, -0.75, -3.0], color: '#9ca3af' } ]) },
        { id: 'nodi', name: 'Knoten Unity und Harmony', label: 'Knoten', color: '#f1f5f9', explode: [0, 0.4, 0],
          info: '<p>Die <b>Knoten</b> sind „Kreuzungen“: kurze Module mit vielen Anschlüssen an jeder Seite, an die die anderen Module und die Raumschiffe andocken.</p>',
          more: '<p>Jeder Knoten hat 6 Luken (vorn, hinten, oben, unten, rechts, links). Harmony und Tranquility wurden <b>in Italien</b> gebaut, in Turin!</p>',
          shapes: modZ(-1.45, -0.35, 0.66, '#f1f5f9').concat(modZ(2.75, 4.1, 0.64, '#f1f5f9'), [ { t: 'tube', r: 0.34, ri: 0.26, h: 0.3, n: 20, pos: [0, -0.72, 3.4], color: '#9ca3af' } ]) },
        { id: 'destiny', name: 'Destiny (US-Labor)', label: 'Destiny', color: '#ece7dc', explode: [0, 0.5, 0.4],
          info: '<p>Das amerikanische Labor: Hier machen die Astronauten Experimente mit Pflanzen, Flammen, Flüssigkeiten und ihrem eigenen Körper, um zu verstehen, wie sich die Dinge <b>ohne Schwerkraft</b> verändern.</p>',
          more: '<p>In der Schwerelosigkeit werden Flammen zu blauen Kugeln, Wasser bildet schwebende Tropfen und die Knochen verlieren Kalzium: Deshalb machen die Astronauten täglich 2 Stunden Sport.</p>',
          shapes: modZ(-0.3, 2.7, 0.64, '#ece7dc').concat([ { t: 'cyl', r: 0.2, h: 0.04, n: 20, rot: [0, 0, 0], pos: [0, -0.64, 1.4], color: '#1e293b' } ]) },
        { id: 'columbus', name: 'Columbus (europäisches Labor)', label: 'Columbus', color: '#e2e8f0', explode: [1.6, 0, 0.6],
          info: '<p>Das Labor der <b>Europäischen Weltraumorganisation</b>. Auch dieses wurde zu einem großen Teil in Turin gebaut. Außen hat es Plattformen für Experimente, die dem Vakuum ausgesetzt sind.</p>',
          shapes: modX(0.62, 2.4, 0.6, '#e2e8f0', 0, 3.42).concat([ { t: 'box', s: [0.5, 0.35, 0.35], pos: [2.0, 0.55, 3.42], color: '#94a3b8' } ]) },
        { id: 'kibo', name: 'Kibo (japanisches Labor)', label: 'Kibo', color: '#f5f5f4', explode: [-1.6, 0.3, 0.6],
          info: '<p>Auf Japanisch „Hoffnung“: Es ist das größte Modul. Es hat einen eigenen kleinen Roboterarm und eine <b>Außenterrasse</b>, auf der Experimente dem Weltraum ausgesetzt werden.</p>',
          shapes: modX(-3.1, -0.62, 0.7, '#f5f5f4', 0, 3.42).concat([
            { t: 'box', s: [1.4, 0.15, 1.3], pos: [-3.9, -0.2, 3.42], color: '#9ca3af' },
            { t: 'box', s: [0.35, 0.3, 0.35], pos: [-3.6, 0.03, 3.1], color: '#fbbf24' }, { t: 'box', s: [0.35, 0.3, 0.35], pos: [-4.2, 0.03, 3.7], color: '#60a5fa' },
            { t: 'cyl', r: 0.42, h: 0.9, n: 24, pos: [-1.9, 1.05, 3.42], color: '#f5f5f4' }, { t: 'torus', R: 0.42, r: 0.025, n: 24, m: 6, pos: [-1.9, 1.2, 3.42], color: '#a8a29e' }
          ]) },
        { id: 'cupola', name: 'Tranquility und Cupola', label: 'Cupola', color: '#e7e5e4', explode: [-1.4, -1.0, -0.2],
          info: '<p>Die <b>Cupola</b> ist das „Panoramafenster“ der Station: 7 Fenster, durch die die Astronauten die Erde betrachten und Stürme, Städte und Polarlichter fotografieren.</p>',
          more: '<p>Das mittlere Fenster ist die größte Scheibe, die je in den Weltraum gebracht wurde (80 cm). Die Scheiben bestehen aus 4 dicken Schichten und haben Außenklappen, die sich schließen, um sie vor Mikrometeoriten zu schützen.</p>',
          shapes: modX(-2.75, -0.66, 0.6, '#e7e5e4', 0, -0.9).concat([
            { t: 'cyl', r: 0.52, r2: 0.42, h: 0.32, n: 7, pos: [-1.7, -0.72, -0.9], color: '#d6d3d1' },
            { t: 'cyl', r: 0.36, h: 0.04, n: 7, pos: [-1.7, -0.9, -0.9], color: '#0ea5e9' },
            { t: 'cyl', r: 0.38, h: 0.05, n: 7, pos: [-1.7, -0.88, -0.9], color: '#9ca3af' }
          ]) },
        { id: 'braccio', name: 'Canadarm2 (Roboterarm)', label: 'Roboterarm', color: '#f1f5f9', pos: [1.4, TY + 0.25, TZ], explode: [0.5, 1.6, 0.8],
          info: '<p>Ein 17 Meter langer Roboterarm, gebaut in <b>Kanada</b>. Er fängt Frachtraumschiffe ein, bewegt schwere Teile und trägt die Astronauten bei Weltraumspaziergängen herum.</p>',
          more: '<p>Er hat 7 Gelenke, wie ein menschlicher Arm (Schulter, Ellbogen, Handgelenk). Er hat kein „Vorn“ und „Hinten“: Er kann sich lösen und mit dem anderen Ende wieder festmachen und bewegt sich so wie eine <b>Raupe</b> über die Station.</p>',
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
        { id: 'dragon', name: 'Raumschiff Crew Dragon', label: 'Crew Dragon', color: '#f8fafc', explode: [0, 0, 1.4],
          anim: { type: 'move', dir: [0, 0, 1], amp: 2.2, wave: 'window', from: 0.05, to: 0.75, ramp: 0.45 },
          info: '<p>Ein Raumschiff, das die <b>Astronauten</b> von der Erde zur Station und wieder nach Hause bringt. Es dockt von allein an, gesteuert vom Computer.</p>',
          more: '<p>Das Andocken (Docking) geschieht mit wenigen Zentimetern pro Sekunde: Station und Raumschiff fliegen mit 28 000 km/h, aber im Verhältnis zueinander stehen sie fast still, wie zwei Autos nebeneinander auf der Autobahn.</p>',
          shapes: [ { t: 'lathe', n: 30, rot: [-90, 0, 0], pos: [0, 0, 5.35], pts: [[0, 1.25], [0.2, 1.22], [0.32, 1.0], [0.6, 0.2], [0.64, 0.08], [0.6, 0], [0, 0]] },
            { t: 'cyl', r: 0.13, h: 0.14, n: 16, rot: [90, 0, 0], pos: [0, 0, 4.12], color: '#9ca3af' },
            { t: 'cyl', r: 0.6, h: 0.75, n: 30, rot: [90, 0, 0], pos: [0, 0, 5.75], color: '#e5e7eb' },
            { t: 'torus', R: 0.6, r: 0.02, n: 30, m: 6, rot: [90, 0, 0], pos: [0, 0, 5.38], color: '#1f2937' },
            { t: 'box', s: [0.02, 0.45, 0.55], pos: [0.6, 0, 5.75], color: '#1e3a8a', decal: 1 },
            { t: 'box', s: [0.02, 0.45, 0.55], pos: [-0.6, 0, 5.75], color: '#1e3a8a', decal: 1 },
            { t: 'cyl', r: 0.08, h: 0.03, n: 12, rot: [-30, 0, 0], pos: [0, 0.4, 4.85], color: '#0f172a', decal: 1 } ] },
        { id: 'soyuz', name: 'Raumschiff Sojus', label: 'Sojus', color: '#a3a38a', explode: [0, -1.4, 0],
          info: '<p>Das russische Raumschiff: Es befördert 3 Astronauten. Es besteht aus drei Teilen: dem Orbitalmodul (der Kugel), der Rückkehrkapsel und dem Servicemodul mit den Solarmodulen.</p>',
          shapes: [ { t: 'cyl', r: 0.12, h: 0.3, n: 16, pos: [0, -0.8, -3.0], color: '#9ca3af' },
            { t: 'sphere', r: 0.42, n: 14, m: 24, pos: [0, -1.32, -3.0], scale: [1, 1.12, 1], color: '#a3a38a' },
            { t: 'lathe', n: 28, pos: [0, 0, -3.0], pts: [[0.24, -1.75], [0.5, -1.95], [0.58, -2.42], [0.3, -2.5], [0, -2.5]], color: '#78716c' },
            { t: 'cyl', r: 0.5, h: 0.85, n: 28, pos: [0, -2.95, -3.0], color: '#d6d3d1' },
            { t: 'cyl', r: 0.44, r2: 0.5, h: 0.12, n: 28, pos: [0, -3.43, -3.0], color: '#57534e' },
            { t: 'box', s: [3.0, 0.03, 0.55], pos: [0, -3.0, -3.0], color: '#1e3a8a' },
            { t: 'box', s: [3.0, 0.008, 0.012], pos: [0, -2.98, -3.0], color: '#93c5fd', decal: 1 } ] },
        { id: 'astronauta', name: 'Astronaut beim Weltraumspaziergang', label: 'Astronaut', color: '#f8fafc', pos: [-3.0, TY + 0.55, TZ + 0.55], explode: [-0.4, 1.4, 1.2],
          anim: { type: 'swing', axis: 'z', amp: 8, rate: 0.6 },
          info: '<p>Um die Station von außen zu reparieren, tragen die Astronauten einen <b>Raumanzug</b>, der ein kleines Raumschiff ist: Er liefert Luft, Wasser und Wärme und schützt vor den Strahlen der Sonne.</p>',
          more: '<p>Ein Weltraumspaziergang dauert etwa <b>6–7 Stunden</b>. Der Astronaut ist immer mit Seilen an der Station festgebunden: Würde er sich lösen, würde er einfach davonschweben!</p>',
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
      { icon: '🛰️', title: 'Ein Zuhause im Weltraum', explode: 0,
        html: '<p>Die Raumstation wurde seit 1998 Stück für Stück <b>in der Umlaufbahn zusammengebaut</b>, von 5 Raumfahrtagenturen: USA, Russland, Europa (mit Italien!), Japan und Kanada. Sie ist das größte Objekt, das Menschen je im Weltraum gebaut haben.</p><p class="tip">🔭 Abends kann man sie mit bloßem Auge sehen: Sie sieht aus wie ein sehr heller Stern, der in wenigen Minuten über den Himmel zieht, ohne zu blinken.</p>' },
      { icon: '☀️', title: 'Energie von der Sonne', focus: ['pannelli', 'giunti', 'traliccio'], view: { rx: 0.3, ry: -0.35 },
        html: '<p>Im Weltraum gibt es keine Steckdosen: Die ganze Energie kommt vom Sonnenlicht, dank der <b>acht Flügel aus Solarmodulen</b>.</p><p>Die <b>Drehgelenke</b> drehen die Flügel so, dass sie immer zur Sonne zeigen, wie es Sonnenblumen tun.</p>' },
      { icon: '🏠', title: 'Die Zimmer: die Module', focus: ['zvezda', 'zarya', 'nodi', 'destiny', 'columbus', 'kibo', 'cupola'], explode: 0.35, view: { rx: 0.55, ry: -0.5 },
        html: '<p>Die Astronauten leben in den <b>Modulen</b>: dicken, luftgefüllten Zylindern, die wie die Waggons eines Zuges miteinander verbunden sind. Es gibt die Labore (<b>Destiny</b>, <b>Columbus</b>, <b>Kibo</b>), die Schlafkojen, das Fitnessstudio und das Bad.</p><p class="tip">🇮🇹 Etwa die Hälfte des bewohnbaren Raums der ISS wurde in <b>Turin</b> gebaut.</p>' },
      { icon: '🪟', title: 'Das Fenster zur Erde', focus: ['cupola', 'nodi', 'astronauta'], view: { rx: -0.25, ry: -0.9 }, zoom: 1.3,
        html: '<p>Aus der <b>Cupola</b> sieht man die Erde unter den Füßen vorbeiziehen. Alle 90 Minuten macht die Station eine ganze Runde: Die Astronauten sehen am Tag <b>16 Sonnenaufgänge und 16 Sonnenuntergänge</b>!</p>' },
      { icon: '🌡️', title: 'Die Wärme loswerden', focus: ['radiatori', 'traliccio'], view: { rx: 0.2, ry: -0.2 },
        html: '<p>Menschen, Computer und Experimente erzeugen Wärme. Im Vakuum verschwindet die Wärme nicht mit dem Wind: Eine Flüssigkeit nimmt sie auf und bringt sie zu den weißen <b>Radiatoren</b>, die sie in den Weltraum „abstrahlen“.</p><p class="tip">🌗 In der Sonne wird die Außenseite der Station bis zu +120 °C heiß, im Schatten −150 °C kalt.</p>' },
      { icon: '🦾', title: 'Der Roboterarm', focus: ['braccio', 'traliccio', 'astronauta'], view: { rx: 0.45, ry: -0.75 }, zoom: 1.25,
        html: '<p>Der <b>Canadarm2</b> fängt Frachtraumschiffe ein, bewegt die Teile und trägt die Astronauten bei <b>Weltraumspaziergängen</b> nach draußen.</p>' },
      { icon: '🚀', title: 'Ankunft und Abflug', focus: ['dragon', 'soyuz', 'nodi', 'zarya'], view: { rx: 0.25, ry: -1.1 },
        html: '<p>Die Raumschiffe bringen Astronauten, Essen, Wasser, Kleidung und Experimente. Die <b>Crew Dragon</b> nähert sich ganz langsam und dockt von allein an einem Knoten an. Die russische <b>Sojus</b> befördert drei Personen.</p>' },
      { icon: '🌍', title: 'Warum fällt sie nicht herunter?', explode: 0, view: { rx: 0.42, ry: -0.62 },
        html: '<p>In Wirklichkeit <b>fällt</b> die Station ständig zur Erde! Aber sie ist seitlich so schnell (<b>28 000 km/h</b>, 8 km pro Sekunde), dass die Erde beim Fallen „unter ihr“ wegkrümmt: So kreist sie immer weiter um die Erde.</p><p>Deshalb schwebt an Bord alles: Astronauten und Gegenstände fallen zusammen mit der Station.</p>' }
    ],
    facts: [
      { icon: '⚽', title: 'So groß wie ein Fußballfeld', html: 'Die ISS ist 109 Meter lang und wiegt etwa <b>420 Tonnen</b>, so viel wie 300 Autos.' },
      { icon: '🚿', title: 'Wasser wird wiederverwertet', html: 'An Bord wird fast das gesamte Wasser wiederverwertet, auch Schweiß und Pipi: Es wird gefiltert und ist wieder trinkbar. „Der Kaffee von gestern wird zum Kaffee von morgen“!' },
      { icon: '😴', title: 'Im Stehen schlafen', html: 'Die Astronauten schlafen in Schlafsäcken, die an der Wand festgebunden sind: Ohne Schwerkraft gibt es kein „oben“ und „unten“, deshalb kann man in jeder Position schlafen.' },
      { icon: '📏', title: 'Im Weltraum größer', html: 'Ohne Schwerkraft dehnt sich die Wirbelsäule: Die Astronauten werden bis zu <b>5 cm größer</b>. Zurück auf der Erde sind sie wieder wie vorher.' },
      { icon: '🇮🇹', title: 'Italienische Astronauten', html: 'Auf der ISS waren mehrere Italiener, zum Beispiel <b>Samantha Cristoforetti</b> (die erste europäische Kommandantin der Station) und <b>Luca Parmitano</b>.' }
    ],
    quiz: [
      { type: 'mc', q: 'In welcher Höhe fliegt die Raumstation?', options: ['Etwa 10 km', 'Etwa 400 km', 'Etwa 36 000 km', 'Etwa 384 000 km'], answer: 1, explain: 'Die ISS fliegt in etwa 400 km Höhe: 10 km ist die Flughöhe der Flugzeuge, 384 000 km die Entfernung zum Mond.' },
      { type: 'mc', q: 'Woher kommt der Strom der Station?', options: ['Aus einem langen Kabel von der Erde', 'Aus einem Benzinmotor', 'Von den Solarmodulen', 'Von den Radiatoren'], answer: 2, explain: 'Acht große Flügel aus Solarmodulen verwandeln das Sonnenlicht in Strom.' },
      { type: 'tf', q: 'An Bord schweben die Gegenstände, weil es im Weltraum keine Schwerkraft gibt.', answer: false, explain: 'Die Schwerkraft ist da (fast wie auf der Erde), aber Station, Astronauten und Gegenstände fallen alle zusammen um die Erde: Deshalb schweben sie.' },
      { type: 'mc', q: 'Wofür sind die weißen Radiatoren da?', options: ['Um Strom zu erzeugen', 'Um überschüssige Wärme in den Weltraum abzugeben', 'Um mit der Erde zu kommunizieren', 'Um die Station anzutreiben'], answer: 1, explain: 'Eine Flüssigkeit nimmt die Wärme auf und bringt sie zu den Radiatoren, die sie in den Weltraum abstrahlen.' },
      { type: 'num', q: 'Wie viele Minuten braucht die ISS für eine ganze Runde um die Erde?', answer: 90, tol: 3, unit: 'min', explain: 'Etwa 90 Minuten: Deshalb sehen die Astronauten 16 Sonnenaufgänge am Tag.' },
      { type: 'mc', q: 'Wie heißt das „Panoramafenster“ der Station?', options: ['Cupola', 'Sarja', 'Canadarm2', 'Destiny'], answer: 0, explain: 'Die Cupola hat 7 Fenster und wurde in Italien gebaut.' }
    ]
  });
})();
