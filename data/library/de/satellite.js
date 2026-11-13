/* Il satellite (osservazione della Terra e telecomunicazioni). La Terra è in basso (sfondo "orbit"). */
(function () {
  const cells = (side) => {
    const s = [];
    for (let k = 0; k < 3; k++) {
      const x = side * (1.05 + k * 1.02);
      s.push({ t: 'box', s: [0.96, 0.03, 0.9], pos: [x, 0, 0], color: '#1e3a8a' });
      for (let i = 1; i < 4; i++) s.push({ t: 'box', s: [0.012, 0.008, 0.9], pos: [x - 0.48 + i * 0.24, 0.02, 0], color: '#93c5fd', decal: 1 });
      for (let j = 1; j < 4; j++) s.push({ t: 'box', s: [0.96, 0.008, 0.012], pos: [x, 0.02, -0.45 + j * 0.225], color: '#93c5fd', decal: 1 });
    }
    s.push({ t: 'cyl', r: 0.035, h: 0.5, n: 10, rot: [0, 0, 90], pos: [side * 0.55, 0, 0], color: '#cbd5e1' });
    return s;
  };
  const thr = (x, y, z, rot, ph) => ({ t: 'group', pos: [x, y, z], rot, shapes: [
    { t: 'cone', r: 0.07, h: 0.12, n: 12, rot: [180, 0, 0], color: '#6b7280' },
    { t: 'cone', r: 0.06, h: 0.3, n: 10, rot: [180, 0, 0], pos: [0, -0.2, 0], color: '#a5f3fc', alpha: 0.85, anim: { type: 'blink', fade: true, wave: 'window', from: ph, to: ph + 0.08, ramp: 0.3 } }
  ] });

  LIBRARY({
    lang: 'de',
    id: 'satellite',
    title: 'Der Satellit',
    intro: 'Ein künstlicher Satellit kreist in Hunderten oder Tausenden Kilometern Höhe um die Erde. Er fotografiert den Planeten und bringt uns Fernsehen, Internet und das <b>GPS</b>-Signal. Aber wie schafft er es, nicht herunterzufallen?',
    model: {
      rx: 0.28, ry: -0.6, speed: 0.25, height: 480, bg: 'orbit',
      parts: [
        { id: 'corpo', name: 'Körper (Struktur)', label: 'Körper', color: '#d4a017', alpha: 0.42, explode: [0, 0, 0],
          info: '<p>Das ist die „Box“, die die Geräte enthält. Sie ist in goldene Folien gehüllt, die <b>Thermodecke</b>, die sie vor der Hitze der Sonne und der Kälte des Schattens schützt.</p>',
          more: '<p>In der Sonne kann ein Satellit +120 °C heiß werden, im Schatten der Erde −150 °C kalt. Die Thermodecke besteht aus vielen hauchdünnen Kunststoffschichten mit Metallbeschichtung, die die Wärme zurückwerfen.</p>',
          shapes: [ { t: 'box', s: [1, 1.2, 1] }, { t: 'box', s: [1.04, 0.05, 1.04], pos: [0, 0.6, 0], color: '#a16207', alpha: 1 }, { t: 'box', s: [1.04, 0.05, 1.04], pos: [0, -0.6, 0], color: '#a16207', alpha: 1 } ] },
        { id: 'pannelli', name: 'Solarmodule', color: '#1e3a8a', explode: [0, 0, 0], anim: { type: 'swing', axis: 'x', amp: 25, rate: 0.35 },
          info: '<p>Sie verwandeln das Sonnenlicht in <b>Strom</b>. Sie drehen sich langsam, um immer zur Sonne zu zeigen, wie Sonnenblumen.</p>',
          more: '<p>Sie bestehen aus <b>Photovoltaikzellen</b> aus Silizium oder Galliumarsenid. Beim Start sind sie zusammengefaltet und klappen sich erst im Orbit auf.</p>',
          shapes: cells(1).concat(cells(-1)) },
        { id: 'batterie', name: 'Batterien', color: '#16a34a', pos: [-0.22, -0.3, 0.1], explode: [-0.4, -0.3, 1.5],
          info: '<p>Sie speichern die Energie der Module und nutzen sie, wenn der Satellit durch den <b>Schatten der Erde</b> fliegt, wo die Sonne nicht hinkommt.</p>',
          shapes: [0, 1, 2].map((k) => ({ t: 'box', s: [0.14, 0.32, 0.4], pos: [k * 0.17 - 0.17, 0, 0] })) },
        { id: 'serbatoio', name: 'Treibstofftank', label: 'Tank', color: '#9ca3af', pos: [0, 0.15, -0.05], explode: [0, 0.4, -1.5],
          info: '<p>Eine Kugel voller Treibstoff für die kleinen Triebwerke. Ist er leer, kann der Satellit seine Bahn nicht mehr korrigieren.</p>',
          shapes: [ { t: 'sphere', r: 0.3, n: 12 } ] },
        { id: 'computer', name: 'Bordcomputer', label: 'Computer', color: '#1e40af', pos: [0.25, -0.25, 0.15], explode: [0.4, -0.3, 1.5],
          info: '<p>Er ist das Gehirn des Satelliten: Er steuert alle Geräte, führt die Befehle von der Erde aus und entscheidet bei Problemen selbst.</p>',
          more: '<p>Dort oben können <b>Strahlen</b> Bits im Speicher verfälschen: Weltraumcomputer sind besonders robust und oft doppelt vorhanden (einer als Reserve).</p>',
          shapes: [ { t: 'box', s: [0.32, 0.3, 0.36] }, { t: 'box', s: [0.05, 0.05, 0.02], pos: [0.08, 0.08, 0.18], color: '#22c55e', anim: { type: 'blink', color: '#bbf7d0', wave: 'square', rate: 4 } } ] },
        { id: 'antenna-parabolica', name: 'Parabolantenne', label: 'Parabolantenne', color: '#f1f5f9', pos: [0, -0.62, 0.55], explode: [0, -0.6, 0.6],
          anim: { type: 'swing', axis: 'x', amp: 8, rate: 0.2 },
          info: '<p>Sie schickt Fotos und Daten zur Erde und empfängt Befehle, mit <b>Radiowellen</b>, die sich mit Lichtgeschwindigkeit ausbreiten: 300 000 km pro Sekunde!</p>',
          more: '<p>Die Parabelform bündelt die Radiowellen zu einem schmalen Strahl, so wie der Spiegel einer Taschenlampe das Licht bündelt. So reicht das Signal weit und braucht wenig Energie.</p>',
          shapes: [ { t: 'cyl', r: 0.03, h: 0.25, n: 8, pos: [0, -0.1, 0], color: '#94a3b8' },
            { t: 'lathe', ds: true, n: 28, rot: [180, 0, 0], pos: [0, -0.25, 0], pts: [[0.02, 0], [0.2, 0.024], [0.35, 0.074], [0.5, 0.15], [0.62, 0.23]] },
            { t: 'cyl', r: 0.012, h: 0.42, n: 6, pos: [0, -0.43, 0], color: '#94a3b8' }, { t: 'cyl', r: 0.05, r2: 0.03, h: 0.08, n: 10, pos: [0, -0.64, 0], color: '#475569' } ] },
        { id: 'antenna', name: 'Rundstrahlantenne', label: 'Antenne', color: '#e5e7eb', pos: [0.3, 0.6, 0.3], explode: [0.3, 0.6, 0.3],
          info: '<p>Eine kleine Antenne, die in <b>alle Richtungen</b> sendet: Sie dient für Notrufe, auch wenn der Satellit falsch ausgerichtet ist.</p>',
          shapes: [ { t: 'cyl', r: 0.015, h: 0.6, n: 6, pos: [0, 0.3, 0] }, { t: 'sphere', r: 0.04, n: 6, pos: [0, 0.62, 0], color: '#ef4444' } ] },
        { id: 'fotocamera', name: 'Kamera (Teleskop)', label: 'Kamera', color: '#334155', pos: [-0.28, -0.75, -0.25], explode: [-0.6, -0.8, -0.4],
          info: '<p>Ein kleines Teleskop, das auf die Erde blickt: Es fotografiert Wolken, Meere, Wälder und Städte. Es dient für den <b>Wetterbericht</b> und zur Beobachtung von Bränden und Gletschern.</p>',
          shapes: [ { t: 'cyl', r: 0.17, h: 0.45, n: 24 }, { t: 'cyl', r: 0.12, h: 0.02, n: 24, pos: [0, -0.23, 0], color: '#0ea5e9' }, { t: 'tube', r: 0.19, ri: 0.16, h: 0.1, n: 24, pos: [0, -0.2, 0], color: '#111827' } ] },
        { id: 'sensore-stellare', name: 'Sternsensor', label: 'Sternsensor', color: '#475569', pos: [-0.3, 0.68, -0.3], explode: [-0.4, 0.7, -0.4],
          info: '<p>Das ist eine kleine Kamera, die auf die <b>Sterne</b> blickt: Indem er sie erkennt, weiß der Satellit, in welche Richtung er gedreht ist. So wie es die alten Seeleute machten!</p>',
          shapes: [ { t: 'box', s: [0.18, 0.14, 0.18] }, { t: 'cyl', r: 0.07, r2: 0.13, h: 0.2, n: 16, pos: [0, 0.17, 0], color: '#111827', ds: true, open: true } ] },
        { id: 'propulsori', name: 'Steuerdüsen', color: '#6b7280', explode: [0, 0, 0],
          info: '<p>Kleine Raketentriebwerke, die kurze Gas-„Stöße“ abgeben: Sie korrigieren die Bahn und drehen den Satelliten in die richtige Position.</p>',
          more: '<p>Manche Satelliten nutzen <b>Ionentriebwerke</b>: Sie schieben nur ganz schwach, dafür monatelang, und verbrauchen viel weniger Treibstoff.</p>',
          shapes: [ thr(0.45, -0.62, 0.45, [0, 0, 0], 0.1), thr(-0.45, -0.62, -0.45, [0, 0, 0], 0.35), thr(-0.45, 0.62, 0.45, [180, 0, 0], 0.6), thr(0.45, 0.62, -0.45, [180, 0, 0], 0.85) ] },
        { id: 'radiatore', name: 'Radiator', color: '#f8fafc', pos: [0, 0, -0.52], explode: [0, 0, -0.7],
          info: '<p>Eine weiße Platte, die die von den Geräten erzeugte Wärme ins Weltall abgibt. Im Vakuum gibt es keine Luft, die kühlt: Die Wärme geht nur als <b>Strahlung</b> weg.</p>',
          shapes: [ { t: 'box', s: [0.9, 1.0, 0.03] } ] }
      ]
    },
    steps: [
      { icon: '🌍', title: 'Warum fällt er nicht herunter?', explode: 0, view: { rx: 0.25, ry: -0.6 },
        html: '<p>In Wirklichkeit <b>fällt</b> ein Satellit <b>ständig</b> zur Erde! Aber er rast seitwärts so schnell (etwa 27 000 km/h in niedriger Umlaufbahn), dass die runde Erde unter ihm „wegläuft“. So kreist er immer weiter um sie: Das ist die <b>Umlaufbahn</b>.</p><p class="tip">🍎 Newton stellte es sich mit einer Kanone auf dem Gipfel eines sehr hohen Berges vor: Je kräftiger du schießt, desto weiter fällt die Kugel … bis sie einmal um die Welt fliegt!</p>' },
      { icon: '☀️', title: 'Energie von der Sonne', focus: ['pannelli', 'batterie'], explode: 0.5,
        html: '<p>Die <b>Solarmodule</b> verwandeln Licht in Strom und drehen sich mit der Sonne mit. Die <b>Batterien</b> speichern die Energie für die Zeit, in der der Satellit im Schatten der Erde fliegt.</p>' },
      { icon: '📡', title: 'Mit der Erde sprechen', focus: ['antenna-parabolica', 'antenna', 'computer'], explode: 0.4, view: { rx: -0.2, ry: -0.6 },
        html: '<p>Die <b>Parabolantenne</b> schickt Daten und Fotos mit Radiowellen zur Erde und empfängt die Befehle der Kontrollstationen. Der <b>Bordcomputer</b> führt alles aus.</p>' },
      { icon: '🧭', title: 'Wohin bin ich gedreht?', focus: ['sensore-stellare', 'computer', 'propulsori'], explode: 0.3,
        html: '<p>Der <b>Sternsensor</b> fotografiert die Sterne und erkennt daran die Ausrichtung. Wenn nötig, geben die <b>Steuerdüsen</b> kleine Stöße ab, um den Satelliten zu drehen oder die Bahn zu korrigieren, mit dem Treibstoff aus dem <b>Tank</b>.</p>' },
      { icon: '📸', title: 'Seine Aufgabe', focus: ['fotocamera', 'antenna-parabolica'], explode: 0.2, view: { rx: -0.35, ry: -0.3 },
        html: '<p>Jeder Satellit hat eine Aufgabe: die Erde fotografieren (Wetter, Umwelt), Fernsehen und Internet übertragen oder das <b>GPS</b>-Signal senden, das deinem Handy sagt, wo du bist.</p><p class="tip">🛰️ Für das GPS müssen mindestens 4 Satelliten gleichzeitig sichtbar sein.</p>' },
      { icon: '🌡️', title: 'Weder zu heiß noch zu kalt', focus: ['corpo', 'radiatore'], explode: 0.3,
        html: '<p>Die <b>goldene Decke</b> wirft das Sonnenlicht zurück, der weiße <b>Radiator</b> gibt die Wärme der Geräte ab. So bleibt die Temperatur im Inneren genau richtig für die Elektronik.</p>' }
    ],
    facts: [
      { icon: '🔴', title: 'Sputnik 1', html: 'Der erste künstliche Satellit wurde 1957 von der Sowjetunion gestartet: Es war eine Kugel von 58 cm, die nur „Piep, piep“ machte.' },
      { icon: '🇮🇹', title: 'Italien im Weltall', html: '1964 war Italien das dritte Land der Welt, das einen eigenen Satelliten in die Umlaufbahn brachte: den <b>San Marco 1</b>.' },
      { icon: '🔢', title: 'Tausende da oben', html: 'Heute kreisen mehr als <b>10 000 aktive Satelliten</b> um die Erde, und es werden jedes Jahr mehr.' },
      { icon: '🌐', title: 'Geostationäre Bahn', html: 'In 36 000 km Höhe dreht sich ein Satellit mit der Erde mit und scheint am Himmel stillzustehen: Deshalb bewegen sich die Fernsehschüsseln nicht.' }
    ],
    quiz: [
      { type: 'mc', q: 'Woher bekommt ein Satellit seine Energie?', options: ['Von einem Benzinmotor', 'Von den Solarmodulen', 'Von einem Kabel zur Erde', 'Vom Sonnenwind, der ihn schiebt'], answer: 1, explain: 'Die Solarmodule verwandeln Sonnenlicht in Strom; die Batterien speichern ihn für die Stunden im Schatten.' },
      { type: 'tf', q: 'Ein Satellit im Orbit fällt in Wirklichkeit ständig zur Erde.', answer: true, explain: 'Er fällt, aber er rast seitwärts so schnell, dass sich die Erde unter ihm wegkrümmt: Deshalb kreist er immer weiter um sie.' },
      { type: 'mc', q: 'Wozu dient der Sternsensor?', options: ['Um die Sterne für die Astronomen zu fotografieren', 'Um zu erkennen, in welche Richtung der Satellit gedreht ist', 'Um die Temperatur zu messen', 'Um Strom zu erzeugen'], answer: 1, explain: 'Indem er die Sterne erkennt, weiß der Satellit, wie er ausgerichtet ist.' },
      { type: 'mc', q: 'Womit schickt der Satellit die Daten zur Erde?', options: ['Mit Radiowellen', 'Mit einem Kabel', 'Mit Rauchzeichen', 'Mit Schall'], answer: 0, explain: 'Radiowellen breiten sich im Vakuum mit Lichtgeschwindigkeit aus; Schall dagegen breitet sich im Vakuum nicht aus.' },
      { type: 'mc', q: 'Warum ist der Satellit in goldene Folien gehüllt?', options: ['Damit er schöner aussieht', 'Um ihn vor Hitze und Kälte zu schützen', 'Damit er schwerer wird', 'Um die GPS-Signale zurückzuwerfen'], answer: 1, explain: 'Die Thermodecke wirft die Wärme der Sonne zurück und hält die Wärme im Inneren, wenn der Satellit im Schatten ist.' }
    ]
  });
})();
