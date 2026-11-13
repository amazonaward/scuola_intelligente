/* Il faro, su uno scoglio. Alto = +y. La lanterna è in cima (y ≈ 5–6): la lente di Fresnel gira intorno a y
   e i suoi due "occhi di bue" mandano due fasci di luce che spazzano il mare. */
(function () {
  const D = Math.PI / 180, LY = 5.58, TAU = Math.PI * 2;
  const R = (y) => 0.9 - 0.06 * y; // raggio della torre all'altezza y
  const band = (y0, y1, color) => ({ t: 'lathe', n: 30, pts: [[R(y0), y0], [R(y1), y1]], color });
  const SPIN = { type: 'spin', axis: 'y', rate: 1 };
  /* "occhio di bue": anelli concentrici che guardano verso +x */
  const bullseye = (a) => ({ t: 'group', rot: [0, a, 0], shapes: [
    { t: 'sphere', r: 1, n: 8, m: 14, pos: [0.3, 0, 0], scale: [0.05, 0.12, 0.12], color: '#e0f2fe', alpha: 0.75 },
    ...[0.17, 0.24, 0.31].map((r) => ({ t: 'torus', R: r, r: 0.016, n: 24, m: 4, rot: [0, 0, 90], pos: [0.3, 0, 0], color: '#a5f3fc', alpha: 0.7 })),
    { t: 'box', s: [0.02, 0.72, 0.72], pos: [0.27, 0, 0], color: '#b45309', alpha: 0.9 } ] });
  const beam = (a) => ({ t: 'group', rot: [0, a, 0], shapes: [ { t: 'lathe', n: 18, pts: [[0.12, 0], [0.45, 1.2], [0.9, 3.4]], rot: [0, 0, -90], pos: [0.3, 0, 0], ds: true } ] });
  const steps = Array.from({ length: 44 }, (_, k) => { const a = k * 32, y = 0.25 + k * 0.105; return { t: 'box', s: [0.36, 0.035, 0.13], pos: [0.27 * Math.cos(a * D), y, -0.27 * Math.sin(a * D)], rot: [0, a, 0] }; });
  const ROCK = [[0, -0.75], [2.1, -0.75], [2.2, -0.5], [1.9, -0.3], [1.75, -0.12], [1.3, 0.0], [0, 0.02]];

  LIBRARY({
    id: 'faro',
    lang: 'de',
    title: 'Der Leuchtturm',
    intro: 'Nachts, mitten auf dem Meer: Woher wissen die Schiffe, wo die Felsen sind und wo der Hafen liegt? Sie schauen auf die <b>Leuchttürme</b>! Jeder Leuchtturm blinkt auf seine ganz eigene Weise, und eine besondere Linse lässt sein Licht sehr weit reichen.',
    model: {
      rx: 0.18, ry: -0.5, speed: 0.22, height: 500, bg: 'sky', floor: false,
      parts: [
        { id: 'scogli', name: 'Klippe', color: '#78716c', explode: [0, -0.6, 0],
          info: '<p>Leuchttürme werden dort gebaut, wo die Schiffe am meisten gefährdet sind: auf Felsen, Landspitzen und Inselchen oder an der Einfahrt von Häfen.</p>',
          shapes: [ { t: 'lathe', n: 22, pts: ROCK }, { t: 'sphere', r: 1, n: 7, m: 10, pos: [1.3, -0.1, 0.9], scale: [0.6, 0.35, 0.5], color: '#57534e' }, { t: 'sphere', r: 1, n: 7, m: 10, pos: [-1.4, -0.15, -0.6], scale: [0.7, 0.3, 0.6], color: '#57534e' },
            { t: 'cyl', r: 1.15, h: 0.2, n: 30, pos: [0, 0.08, 0], color: '#d6d3d1' } ] },
        { id: 'mare', name: 'Meer', color: '#0369a1', alpha: 0.35, explode: [0, -0.6, 0], chip: false, noLabel: true,
          info: '<p>Das Meer rund um den Leuchtturm. Nachts ist der Leuchtturm für die Seeleute wie ein leuchtendes Verkehrsschild.</p>',
          shapes: [ { t: 'cyl', r: 3.4, h: 0.04, n: 40, pos: [0, -0.3, 0] } ] },
        { id: 'torre', name: 'Turm', color: '#f8fafc', explode: [0, 0, 0],
          info: '<p>Der Turm hebt das Licht so hoch wie möglich: Je höher es ist, desto weiter sieht man es, weil die Erde gekrümmt ist. Die farbigen <b>Streifen</b> machen ihn auch tagsüber erkennbar.</p>',
          more: '<p>Von einem 50 Meter hohen Turm sieht man das Licht bis in etwa <b>45 km</b> Entfernung. Die Wände sind an der Basis sehr dick (bis zu 2 Meter), um den Wellen und dem Sturmwind standzuhalten.</p>',
          shapes: [ band(0.1, 1.1), band(1.1, 2.1, '#dc2626'), band(2.1, 3.1), band(3.1, 4.1, '#dc2626'), band(4.1, 5.0),
            { t: 'box', s: [0.32, 0.6, 0.02], pos: [0, 0.42, R(0.42) - 0.01], color: '#3f2a1d', decal: 1 },
            ...[1.6, 2.6, 3.6].map((y, i) => ({ t: 'box', s: [0.12, 0.22, 0.02], pos: [R(y) * Math.sin(i * 70 * D), y, R(y) * Math.cos(i * 70 * D) - 0.01], rot: [0, i * 70, 0], color: '#1e293b', decal: 1 })) ] },
        { id: 'scala', name: 'Wendeltreppe', label: 'Treppe', color: '#a8a29e', explode: [1.5, 0, 0],
          info: '<p>Im Turm führt eine lange <b>Wendeltreppe</b> bis zur Laterne hinauf. Der Leuchtturmwärter stieg sie jede Nacht mehrmals hinauf.</p>',
          shapes: [ { t: 'cyl', r: 0.08, h: 4.9, n: 12, pos: [0, 2.55, 0], color: '#78716c' } ].concat(steps) },
        { id: 'contrappeso', name: 'Gewicht des Uhrwerks', label: 'Gewicht', color: '#334155', explode: [1.5, 0, 0],
          info: '<p>In den alten Leuchttürmen gab es keinen Elektromotor: Ein an einem Seil hängendes <b>Gewicht</b> sank langsam im Turm nach unten und ließ, wie bei einer Pendeluhr, die Linse drehen.</p>',
          more: '<p>Der Wärter musste den Mechanismus „aufziehen“, indem er eine Kurbel drehte und das Gewicht hochzog, sogar alle 2–4 Stunden die ganze Nacht lang. Heute übernimmt ein kleiner Elektromotor die Arbeit, und der Leuchtturm ist fast immer automatisch.</p>',
          shapes: [ { t: 'cyl', r: 0.006, h: 4.5, n: 4, pos: [0, 2.75, 0.15], color: '#1f2937' },
            { t: 'cyl', r: 0.07, h: 0.3, n: 12, pos: [0, 4.4, 0.15], anim: { type: 'move', dir: [0, -1, 0], amp: 3.6, wave: 'saw', rate: 0.05 } } ] },
        { id: 'ballatoio', name: 'Umgang', color: '#1f2937', explode: [0, 0.4, 0],
          info: '<p>Die kleine Terrasse rund um die Laterne. Von hier aus putzte der Wärter die Scheiben von Salz und Schnee, damit das Licht immer stark nach draußen drang.</p>',
          shapes: [ { t: 'cyl', r: 1.0, h: 0.1, n: 32, pos: [0, 5.02, 0] }, { t: 'torus', R: 0.97, r: 0.02, n: 40, m: 4, pos: [0, 5.38, 0] },
            ...Array.from({ length: 16 }, (_, k) => ({ t: 'cyl', r: 0.012, h: 0.32, n: 4, pos: [0.97 * Math.cos(k * 22.5 * D), 5.22, 0.97 * Math.sin(k * 22.5 * D)] })),
            ...Array.from({ length: 12 }, (_, k) => ({ t: 'box', s: [0.12, 0.2, 0.08], pos: [0.88 * Math.cos(k * 30 * D), 4.88, 0.88 * Math.sin(k * 30 * D)], rot: [0, -k * 30, 0], color: '#e5e7eb' })) ] },
        { id: 'lanterna', name: 'Laterne (Glasraum)', label: 'Laterne', color: '#bae6fd', alpha: 0.22, explode: [0, 0.75, 0],
          info: '<p>Der Raum aus Glas ganz oben, in dem das Licht steht. Die Scheiben sind dick, um dem Wind, dem Regen … und den Vögeln standzuhalten, die nachts dagegenfliegen!</p>',
          shapes: [ { t: 'cyl', r: 0.6, h: 0.82, n: 32, pos: [0, 5.66, 0], ds: true }, { t: 'tube', r: 0.64, ri: 0.58, h: 0.25, n: 32, pos: [0, 5.18, 0], color: '#f8fafc', alpha: 1 },
            ...Array.from({ length: 8 }, (_, k) => ({ t: 'cyl', r: 0.018, h: 0.82, n: 5, pos: [0.6 * Math.cos(k * 45 * D), 5.66, 0.6 * Math.sin(k * 45 * D)], color: '#1f2937', alpha: 1 })) ] },
        { id: 'cupola', name: 'Kuppel', color: '#991b1b', explode: [0, 1.2, 0],
          info: '<p>Der Kupfer-„Hut“ der Laterne. Oben sitzt ein <b>Schornstein</b>, damit die Wärme der Lampe abziehen kann, und ein <b>Blitzableiter</b>: Der Leuchtturm ist der höchste Punkt der Küste!</p>',
          shapes: [ { t: 'sphere', r: 0.66, n: 10, m: 28, hemi: true, pos: [0, 6.07, 0], scale: [1, 0.7, 1] }, { t: 'cyl', r: 0.68, h: 0.05, n: 32, pos: [0, 6.08, 0], color: '#7f1d1d' },
            { t: 'sphere', r: 0.11, n: 8, m: 12, pos: [0, 6.6, 0], color: '#1f2937' }, { t: 'cyl', r: 0.012, h: 0.45, n: 4, pos: [0, 6.9, 0], color: '#475569' },
            { t: 'group', pos: [0, 6.95, 0], anim: { type: 'swing', axis: 'y', amp: 25, rate: 0.15 }, shapes: [ { t: 'extrude', d: 0.01, pts: [[0, 0], [0.25, 0.03], [0.25, -0.05], [0, -0.03]], color: '#475569' } ] } ] },
        { id: 'lente', name: 'Fresnel-Linse', label: 'Fresnel-Linse', color: '#a5f3fc', pos: [0, LY, 0], explode: [0, 0, 1.6], anim: SPIN,
          info: '<p>Sie ist die „Superkraft“ des Leuchtturms: ein Käfig aus ringförmig geschliffenen Gläsern, 1822 von <b>Augustin Fresnel</b> erfunden. Sie sammelt das Licht, das in alle Richtungen geht, und bündelt es zu schmalen, sehr starken <b>Strahlen</b>.</p>',
          more: '<p>Eine normale Linse dieser Größe wäre dick und sehr schwer. Fresnel hatte die Idee, sie in konzentrische Ringe zu „zerschneiden“ und nur die gekrümmten Flächen zu behalten, die das Licht beugen (<b>Brechung</b>): gleiche Wirkung, viel weniger Glas. Oben und unten gibt es außerdem Prismen, die es spiegeln. Dieselben dünnen Linsen werden in Projektoren und Autoscheinwerfern verwendet.</p>',
          shapes: [ bullseye(0), bullseye(180), { t: 'torus', R: 0.33, r: 0.02, n: 28, m: 4, pos: [0, 0.38, 0], color: '#b45309' }, { t: 'torus', R: 0.33, r: 0.02, n: 28, m: 4, pos: [0, -0.38, 0], color: '#b45309' },
            ...[0.22, 0.3].map((y) => ({ t: 'torus', R: 0.28, r: 0.02, n: 28, m: 4, pos: [0, y, 0], alpha: 0.6 })), ...[-0.22, -0.3].map((y) => ({ t: 'torus', R: 0.28, r: 0.02, n: 28, m: 4, pos: [0, y, 0], alpha: 0.6 })) ] },
        { id: 'lampada', name: 'Lampe', color: '#fde047', pos: [0, LY, 0], explode: [0, 0, 0.8],
          info: '<p>In der Mitte der Linse sitzt die Lichtquelle. Früher war es eine Öl- oder Petroleumflamme; heute ist es eine elektrische Lampe oder eine Gruppe von <b>LEDs</b>.</p>',
          shapes: [ { t: 'sphere', r: 0.08, n: 8, m: 12, anim: { type: 'blink', color: '#ffffff', wave: 'sin01', rate: 3 } }, { t: 'sphere', r: 0.17, n: 8, m: 12, color: '#fef08a', alpha: 0.35 },
            { t: 'cyl', r: 0.03, h: 0.3, n: 8, pos: [0, -0.22, 0], color: '#475569' } ] },
        { id: 'fasci', name: 'Lichtstrahlen', label: 'Lichtstrahlen', color: '#facc15', alpha: 0.28, pos: [0, LY, 0], explode: [0, 0, 1.6], anim: SPIN,
          info: '<p>Die zwei Strahlen drehen sich mit der Linse wie die Zeiger einer Uhr. Wer vom Meer aus schaut, sieht jedes Mal einen <b>Blitz</b>, wenn ein Strahl in seine Richtung zeigt.</p>',
          more: '<p>Jeder Leuchtturm hat seine eigene <b>Kennung</b>: zum Beispiel „2 weiße Blitze alle 10 Sekunden“. In den Seekarten steht sie für jeden Leuchtturm: Indem er die Blitze zählt, erkennt der Seemann, welchen Leuchtturm er sieht und wo er sich also befindet.</p>',
          shapes: [ beam(0), beam(180) ] },
        { id: 'meccanismo', name: 'Drehmechanismus', label: 'Mechanismus', color: '#b45309', pos: [0, 5.2, 0], explode: [0, -0.2, 1.1],
          info: '<p>Unter der Linse lässt ein Mechanismus sie langsam und immer gleich schnell drehen, sodass die Blitze genau im richtigen Takt ankommen.</p>',
          more: '<p>Die großen Linsen wiegen Tonnen! Damit man sie mit wenig Kraft drehen konnte, ließ man sie auf einem Bad aus flüssigem <b>Quecksilber</b> schwimmen: Ein kleiner Stoß genügte, um sie zu bewegen.</p>',
          shapes: [ { t: 'cyl', r: 0.28, h: 0.12, n: 24, color: '#94a3b8' }, { t: 'cyl', r: 0.24, h: 0.03, n: 24, pos: [0, 0.07, 0], color: '#cbd5e1' },
            { t: 'group', pos: [0, 0.1, 0], anim: SPIN, shapes: [ { t: 'cyl', r: 0.22, h: 0.04, n: 24 }, ...Array.from({ length: 12 }, (_, k) => ({ t: 'box', s: [0.04, 0.04, 0.03], pos: [0.23 * Math.cos(k * 30 * D), 0, 0.23 * Math.sin(k * 30 * D)], rot: [0, -k * 30, 0] })) ] },
            { t: 'group', pos: [0.32, 0.1, 0], anim: { type: 'spin', axis: 'y', dir: -1, rate: 2.75 }, shapes: [ { t: 'cyl', r: 0.08, h: 0.04, n: 14, color: '#d97706' }, { t: 'box', s: [0.14, 0.045, 0.02], color: '#78350f' } ] },
            { t: 'cyl', r: 0.07, h: 0.16, n: 14, pos: [0.32, -0.04, 0], color: '#1f2937' } ] }
      ]
    },
    steps: [
      { icon: '🗼', title: 'Eine Ampel für die Schiffe', explode: 0,
        html: '<p>Der Leuchtturm zeigt den Schiffen gefährliche <b>Felsen</b> und die Einfahrt in die <b>Häfen</b> an. Tagsüber erkennt man ihn an Farben und Form, nachts an seinem Licht.</p>' },
      { icon: '📏', title: 'Warum so hoch?', focus: ['torre', 'scogli', 'mare'], explode: 0, view: { rx: 0.05, ry: -0.4 },
        html: '<p>Die Erde ist gekrümmt: Ein tief stehendes Licht verschwindet schon nach wenigen Kilometern hinter dem Horizont. Je <b>höher</b> das Licht steht, desto weiter sieht man es. Deshalb sind Leuchttürme hohe Türme, oft auf Klippen.</p><p class="tip">🌍 Aus 50 Metern Höhe sieht man das Licht bis in etwa 45 km Entfernung.</p>' },
      { icon: '🪜', title: 'Im Inneren des Turms', focus: ['scala', 'contrappeso'], explode: 0, view: { rx: 0.25, ry: -0.6 },
        html: '<p>Eine <b>Wendeltreppe</b> führt bis nach oben. In den Leuchttürmen von früher sank in der Mitte langsam ein <b>Gewicht</b> herab, das die Linse drehte, wie bei einer Pendeluhr. Der Wärter zog es jede Nacht mehrmals wieder hoch.</p>' },
      { icon: '💡', title: 'Die Laterne und die Lampe', focus: ['lanterna', 'lampada', 'cupola', 'ballatoio'], explode: 0.3, zoom: 1.2, view: { rx: 0.3, ry: -0.5 },
        html: '<p>Ganz oben ist die <b>Laterne</b>, ein Raum aus Glas. Darin die <b>Lampe</b>: früher eine Ölflamme, heute eine elektrische Lampe oder LEDs. Die <b>Kuppel</b> schützt sie und hat einen Blitzableiter.</p>' },
      { icon: '🔍', title: 'Die Fresnel-Linse', focus: ['lente', 'lampada', 'fasci'], explode: 0, zoom: 1.25, view: { rx: 0.3, ry: -0.8 },
        html: '<p>Das Licht einer Lampe geht in alle Richtungen und würde verschwendet. Die <b>Fresnel-Linse</b> aus Glasringen beugt die Strahlen und bündelt sie zu schmalen, sehr starken <b>Strahlen</b>, die man auf Dutzende Kilometer sieht.</p><p class="tip">🔎 Mit einer Lupe kannst du das Sonnenlicht zu einem Pünktchen bündeln: Das Prinzip ist dasselbe!</p>' },
      { icon: '🔄', title: 'Blitze, die kreisen', focus: ['fasci', 'lente', 'meccanismo'], explode: 0, view: { rx: 0.35, ry: -0.5 },
        html: '<p>Der <b>Mechanismus</b> lässt die Linse kreisen, und die Lichtstrahlen überstreichen das Meer wie die Zeiger einer Uhr. Von einem Schiff aus sieht man jedes Mal einen <b>Blitz</b>, wenn ein Strahl vorbeizieht.</p><p>Jeder Leuchtturm hat seinen eigenen Blitzrhythmus (die <b>Kennung</b>): Indem sie ihn zählen, wissen die Seeleute, welchen Leuchtturm sie sehen.</p>' }
    ],
    facts: [
      { icon: '🏛️', title: 'Der Leuchtturm von Alexandria', html: 'Der berühmteste Leuchtturm der Antike stand auf der Insel <b>Pharos</b> in Alexandria in Ägypten: Er war mehr als 100 Meter hoch und eines der sieben Weltwunder. Von ihm stammt das Wort „Pharos“, das in manchen Sprachen „Leuchtturm“ bedeutet.' },
      { icon: '🇮🇹', title: 'Die Laterne von Genua', html: 'Die <b>Lanterna</b> von Genua, 77 Meter hoch, ist einer der ältesten noch in Betrieb befindlichen Leuchttürme: Der heutige Turm stammt von 1543.' },
      { icon: '📚', title: 'Der Leuchtturmwärter', html: 'Jahrhundertelang hatten Leuchttürme einen <b>Wärter</b>, der dort mit seiner Familie lebte, die Lampe anzündete, die Scheiben putzte und den Mechanismus aufzog. Heute sind fast alle Leuchttürme automatisch.' },
      { icon: '📡', title: 'Leuchttürme und GPS', html: 'Auch wenn die Schiffe heute GPS haben, bleiben die Leuchttürme in Betrieb: Wenn die Elektronik ausfällt, kann ein blinkendes Licht an der Küste noch immer ein Schiff retten.' }
    ],
    quiz: [
      { type: 'mc', q: 'Warum sind Leuchttürme so hoch?', options: ['Damit sie schöner aussehen', 'Weil man ein hohes Licht weiter sieht, da die Erde gekrümmt ist', 'Um von den Wellen entfernt zu bleiben', 'Damit Touristen hinaufsteigen'], answer: 1, explain: 'Je höher das Licht steht, desto später verschwindet es hinter dem gekrümmten Horizont.' },
      { type: 'mc', q: 'Was macht die Fresnel-Linse?', options: ['Sie färbt das Licht', 'Sie bündelt das Licht zu starken Strahlen', 'Sie schaltet das Licht tagsüber aus', 'Sie lässt den Leuchtturm sich drehen'], answer: 1, explain: 'Ihre Glasringe beugen die Strahlen und sammeln sie zu schmalen Bündeln.' },
      { type: 'tf', q: 'Jeder Leuchtturm blinkt in seinem eigenen Rhythmus, der Kennung genannt wird.', answer: true, explain: 'Indem sie die Blitze zählen, erkennen die Seeleute den Leuchtturm auch nachts.' },
      { type: 'mc', q: 'Wie wurde die Linse in den alten Leuchttürmen gedreht?', options: ['Mit einem Benzinmotor', 'Mit einem absinkenden Gewicht, wie bei einer Uhr', 'Mit dem Wind', 'Von Hand, die ganze Nacht'], answer: 1, explain: 'Ein Uhrwerk, von einem Gewicht angetrieben, drehte die Linse; der Wärter zog es wieder auf.' },
      { type: 'mc', q: 'Welcher antike Leuchtturm war eines der sieben Weltwunder?', options: ['Die Lanterna von Genua', 'Der Leuchtturm von Alexandria', 'Der Leuchtturm am Kap Hoorn', 'Der Schiefe Turm von Pisa'], answer: 1, explain: 'Der Leuchtturm auf der Insel Pharos in Alexandria in Ägypten.' }
    ]
  });
})();
