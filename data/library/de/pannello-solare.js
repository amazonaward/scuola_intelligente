/* Il pannello solare fotovoltaico: a sinistra il modulo su un cavalletto (strati che si separano con Esplodi),
   a destra una cella "ingrandita" per vedere come la luce mette in moto gli elettroni e accende una lampadina. */
(function () {
  const TILT = 30, PC = [0, 1.7, 0], D = Math.PI / 180;
  const N = [0, Math.cos(TILT * D), Math.sin(TILT * D)];               // normale del pannello
  const along = (k) => [0, N[1] * k, N[2] * k];
  const W = (x, y, z) => [x, PC[1] + y * Math.cos(TILT * D) - z * Math.sin(TILT * D), y * Math.sin(TILT * D) + z * Math.cos(TILT * D)];
  const P = (shapes) => [ { t: 'group', pos: PC, rot: [TILT, 0, 0], shapes } ];
  const CS = 0.33, NX = 6, NZ = 10, PW = NX * CS, PL = NZ * CS;
  const cells = [];
  for (let i = 0; i < NX; i++) for (let j = 0; j < NZ; j++) cells.push({ t: 'box', s: [CS - 0.02, 0.012, CS - 0.02], pos: [-PW / 2 + CS * (i + 0.5), 0, -PL / 2 + CS * (j + 0.5)] });
  for (let i = 0; i < NX; i++) for (const o of [-0.08, 0.08]) cells.push({ t: 'box', s: [0.014, 0.004, PL - 0.04], pos: [-PW / 2 + CS * (i + 0.5) + o, 0.008, 0], color: '#e2e8f0', decal: 1 });
  for (let j = 0; j < NZ; j++) cells.push({ t: 'box', s: [PW - 0.04, 0.003, 0.006], pos: [0, 0.008, -PL / 2 + CS * (j + 0.5)], color: '#64748b', decal: 1 });
  const SUN = [-3.4, 5.3, 1.6];
  const photonsPanel = [[-0.6, -1.0], [0.5, -0.3], [-0.2, 0.6], [0.7, 1.2], [-0.8, 0.2], [0.2, -1.4]].map(([x, z], k) => {
    const end = W(x, 0.03, z); return { t: 'sphere', r: 0.06, n: 6, m: 8, pos: SUN, color: '#fde047', anim: [ { type: 'path', pts: [SUN, end], wave: 'saw', rate: 0.6, phase: k / 6 }, { type: 'blink', fade: true, wave: 'window', from: 0.05, to: 0.95, ramp: 0.1, rate: 0.6, phase: k / 6 } ] };
  });
  /* cella ingrandita */
  const ZX = 3.7, ZY = 0.9;                                           // base del blocco
  const TOPN = ZY + 0.95, JUN = ZY + 0.72;
  const CIRCUIT = [[ZX + 0.55, TOPN + 0.05, 0], [ZX + 0.55, TOPN + 0.5, 0], [ZX + 1.25, TOPN + 0.9, 0], [ZX + 1.45, TOPN + 0.9, 0], [ZX + 1.55, TOPN + 0.5, 0], [ZX + 1.55, ZY - 0.05, 0], [ZX + 0.85, ZY - 0.05, 0]];
  const electrons = [];
  for (let k = 0; k < 12; k++) {
    const x = ZX - 0.5 + (k % 4) * 0.3, z = -0.3 + (k % 3) * 0.3;
    const pts = [[x, JUN, z], [x, TOPN, z], [ZX + 0.55, TOPN + 0.05, z * 0.2]].concat(CIRCUIT.slice(1), [[ZX + 0.2, ZY - 0.05, 0], [x, ZY + 0.05, z], [x, JUN - 0.05, z]]);
    electrons.push({ t: 'sphere', r: 0.045, n: 6, m: 8, pos: pts[0], color: '#2563eb', anim: { type: 'path', pts, wave: 'saw', rate: 0.22, phase: k / 12 } });
  }
  const holes = Array.from({ length: 8 }, (_, k) => { const x = ZX - 0.6 + (k % 4) * 0.35, z = -0.35 + (k % 2) * 0.6; return { t: 'sphere', r: 0.05, n: 6, m: 8, pos: [x, JUN - 0.05, z], color: '#f87171', anim: [ { type: 'path', pts: [[x, JUN - 0.05, z], [x + 0.05, ZY + 0.08, z]], wave: 'saw', rate: 0.45, phase: k / 8 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.45, phase: k / 8 } ] }; });
  const photonsCell = Array.from({ length: 6 }, (_, k) => { const x = ZX - 0.6 + k * 0.24, z = -0.2 + (k % 3) * 0.2; return { t: 'sphere', r: 0.055, n: 6, m: 8, pos: [x - 0.6, TOPN + 1.4, z], color: '#fde047', anim: [ { type: 'path', pts: [[x - 0.6, TOPN + 1.4, z], [x, JUN, z]], wave: 'saw', rate: 0.7, phase: k / 6 }, { type: 'blink', fade: true, wave: 'window', from: 0.02, to: 0.92, ramp: 0.08, rate: 0.7, phase: k / 6 } ] }; });
  const cellOnPanel = W(-PW / 2 + CS * 5.5, 0.02, -PL / 2 + CS * 6.5);

  LIBRARY({
    lang: 'de',
    id: 'pannello-solare',
    title: 'Das Solarmodul',
    intro: 'Ein <b>photovoltaisches</b> Solarmodul verwandelt das Sonnenlicht direkt in <b>Strom</b>, ohne Lärm, ohne Rauch und ohne bewegliche Teile. Das Geheimnis steckt in einem besonderen Material: dem <b>Silizium</b>.',
    model: {
      rx: 0.32, ry: -0.35, speed: 0.4, height: 480, fit: 1.0,
      parts: [
        { id: 'sole', name: 'Sonne', color: '#fbbf24', explode: [-0.6, 0.4, 0],
          info: '<p>Die Sonne schickt eine riesige Menge Energie in Form von Licht zur Erde: In einer Stunde kommt mehr an, als die Menschheit in einem ganzen Jahr verbraucht!</p>',
          shapes: [ { t: 'sphere', r: 0.6, n: 16, m: 24, pos: SUN }, { t: 'sphere', r: 0.8, n: 14, m: 20, pos: SUN, color: '#fde68a', alpha: 0.3, anim: { type: 'scale', from: 1, to: 1.12, rate: 0.6 } } ]
            .concat(Array.from({ length: 10 }, (_, k) => ({ t: 'group', pos: SUN, rot: [0, 0, k * 36], shapes: [ { t: 'cone', r: 0.08, h: 0.35, n: 8, pos: [0, 0.95, 0], color: '#fcd34d', anim: { type: 'move', dir: [0, 1, 0], amp: 0.06, rate: 1, phase: k * 0.1 } } ] }))) },
        { id: 'luce', name: 'Sonnenlicht (Photonen)', label: 'Photonen', color: '#fde047', explode: [0, 0, 0], chip: true,
          info: '<p>Licht besteht aus winzigen Energie-„Paketen“, den <b>Photonen</b>. Wenn ein Photon auf eine Solarzelle trifft, kann es seine Energie an ein Elektron abgeben.</p>',
          shapes: photonsPanel.concat(photonsCell) },
        { id: 'vetro', name: 'Gehärtetes Glas', label: 'Glas', color: '#e0f2fe', alpha: 0.3, explode: along(2.2),
          info: '<p>Eine sehr widerstandsfähige <b>Glasschicht</b> schützt die Zellen vor Regen, Schnee und Hagel und lässt fast das ganze Licht durch.</p>',
          more: '<p>Das Glas ist so behandelt, dass es das Licht <b>nicht spiegelt</b> (Antireflex), und es ist gehärtet: Es hält Hagelkörnern von 2,5 cm stand, die mit 80 km/h aufprallen.</p>',
          shapes: P([ { t: 'box', s: [PW + 0.02, 0.03, PL + 0.02], pos: [0, 0.045, 0] } ]) },
        { id: 'eva', name: 'EVA-Schichten (der „Kleber“)', label: 'EVA', color: '#f8fafc', alpha: 0.22, explode: along(1.5),
          info: '<p>Zwei Folien aus durchsichtigem Kunststoff umhüllen die Zellen wie bei einem Sandwich: Sie kleben sie am Glas fest und schützen sie vor Feuchtigkeit.</p>',
          shapes: P([ { t: 'box', s: [PW, 0.012, PL], pos: [0, 0.022, 0] }, { t: 'box', s: [PW, 0.012, PL], pos: [0, -0.02, 0], color: '#e2e8f0' } ]) },
        { id: 'celle', name: 'Solarzellen', label: 'Zellen', color: '#1e3a8a', explode: along(0.8),
          info: '<p>Die <b>Zellen</b> sind hauchdünne Quadrate aus <b>Silizium</b>, dem Stoff aus Sand. Jede Zelle erzeugt einen kleinen Strom; zusammengeschaltet (hier 60) liefern sie genug Energie für viele Haushaltsgeräte.</p>',
          more: '<p>Jede Zelle liefert etwa <b>0,5 Volt</b>: Schaltet man sie hintereinander (in Reihe), addieren sich die Spannungen, wie bei den Batterien einer Fernbedienung. Die silbernen Linien sind die <b>Kontakte</b>, die den Strom sammeln.</p>',
          shapes: P(cells) },
        { id: 'retro', name: 'Rückseitenfolie', label: 'Rückseite', color: '#f8fafc', explode: along(-0.5),
          info: '<p>Eine weiße Kunststofffolie verschließt das Modul hinten: Sie isoliert die elektrischen Teile und schützt sie vor Wasser und Sonne.</p>',
          shapes: P([ { t: 'box', s: [PW, 0.015, PL], pos: [0, -0.035, 0] } ]) },
        { id: 'cornice', name: 'Aluminiumrahmen', label: 'Rahmen', color: '#cbd5e1', explode: along(0),
          info: '<p>Ein <b>Aluminium</b>rahmen, leicht und rostfrei, macht das Modul steif und ermöglicht es, es am Gestell zu befestigen.</p>',
          shapes: P([ { t: 'box', s: [PW + 0.16, 0.1, 0.08], pos: [0, 0.0, PL / 2 + 0.04] }, { t: 'box', s: [PW + 0.16, 0.1, 0.08], pos: [0, 0.0, -PL / 2 - 0.04] },
            { t: 'box', s: [0.08, 0.1, PL], pos: [PW / 2 + 0.04, 0, 0] }, { t: 'box', s: [0.08, 0.1, PL], pos: [-PW / 2 - 0.04, 0, 0] },
            { t: 'box', s: [PW + 0.16, 0.012, 0.02], pos: [0, 0.056, PL / 2 + 0.07], color: '#e2e8f0' }, { t: 'box', s: [PW + 0.16, 0.012, 0.02], pos: [0, 0.056, -PL / 2 - 0.07], color: '#e2e8f0' } ]) },
        { id: 'scatola', name: 'Anschlussdose und Kabel', label: 'Anschlussdose', color: '#1f2937', explode: along(-1.0),
          info: '<p>Hinter dem Modul sammelt ein kleines Kästchen den Strom aller Zellen. Es enthält die <b>Dioden</b>, die Probleme verhindern, wenn ein Teil des Moduls im Schatten liegt.</p>',
          shapes: P([ { t: 'box', s: [0.36, 0.08, 0.22], pos: [0, -0.09, -PL / 2 + 0.35] }, { t: 'pipe', r: 0.025, n: 6, curve: true, pts: [[0.12, -0.12, -PL / 2 + 0.35], [0.4, -0.3, -PL / 2 + 0.6], [0.6, -0.6, -0.3]], color: '#111827' },
            { t: 'pipe', r: 0.025, n: 6, curve: true, pts: [[-0.12, -0.12, -PL / 2 + 0.35], [-0.4, -0.3, -PL / 2 + 0.6], [-0.5, -0.6, -0.3]], color: '#b91c1c' } ]) },
        { id: 'struttura', name: 'Tragkonstruktion', label: 'Gestell', color: '#94a3b8', explode: [0, -0.5, 0],
          info: '<p>Das Gestell hält das Modul <b>schräg</b> zur Sonne. In Italien beträgt der beste Neigungswinkel etwa 30°, nach <b>Süden</b> ausgerichtet.</p>',
          more: '<p>Manche Anlagen haben „Nachführsysteme“: Motoren, die die Module im Lauf des Tages mit der Sonne drehen, wie Sonnenblumen, und bis zu 30 % mehr Strom erzeugen.</p>',
          shapes: [-0.75, 0.75].flatMap((x) => [ { t: 'pipe', r: 0.04, n: 8, pts: [W(x, -0.09, PL / 2 - 0.15), W(x, -0.09, -PL / 2 + 0.15)] },
            { t: 'pipe', r: 0.035, n: 8, pts: [[x, 0, W(0, 0, PL / 2 - 0.2)[2]], W(x, -0.1, PL / 2 - 0.2)] },
            { t: 'pipe', r: 0.035, n: 8, pts: [[x, 0, W(0, 0, -PL / 2 + 0.3)[2]], W(x, -0.1, -PL / 2 + 0.3)] },
            { t: 'pipe', r: 0.025, n: 6, pts: [[x, 0.05, W(0, 0, PL / 2 - 0.2)[2]], W(x, -0.1, -PL / 2 + 0.3)] },
            { t: 'box', s: [0.3, 0.06, 0.3], pos: [x, 0.03, W(0, 0, PL / 2 - 0.2)[2]], color: '#78716c' }, { t: 'box', s: [0.3, 0.06, 0.3], pos: [x, 0.03, W(0, 0, -PL / 2 + 0.3)[2]], color: '#78716c' } ]) },
        { id: 'zoom', name: 'Eine Zelle unter dem Mikroskop', label: 'Vergrößerte Zelle', color: '#94a3b8', explode: [0, 0, 0], chip: true, noLabel: true,
          info: '<p>Wir vergrößern eine einzige Zelle und betrachten sie im „Querschnitt“: Sie besteht aus zwei verschiedenen Siliziumschichten, eine über der anderen.</p>',
          shapes: [ { t: 'pipe', r: 0.012, n: 4, pts: [cellOnPanel, [ZX - 0.8, TOPN, 0.5]], color: '#64748b', alpha: 0.5 }, { t: 'pipe', r: 0.012, n: 4, pts: [cellOnPanel, [ZX - 0.8, ZY, 0.5]], color: '#64748b', alpha: 0.5 },
            { t: 'box', s: [0.36, 0.03, 0.36], pos: cellOnPanel, rot: [TILT, 0, 0], color: '#facc15', alpha: 0.6 } ] },
        { id: 'silicio-n', name: 'N-Silizium', label: 'N-Silizium', color: '#60a5fa', explode: [0, 0.5, 0],
          info: '<p>Die dünne Schicht oben. Dem Silizium wurde eine Prise <b>Phosphor</b> beigemischt: So hat es einige Elektronen (negative Ladung, N) mehr.</p>',
          more: '<p>Winzige Mengen eines anderen Elements beizumischen heißt <b>Dotieren</b>. Zwischen der N-Schicht und der P-Schicht entsteht der <b>Übergang</b>: eine Art elektrische „Rutsche“, die die Elektronen immer in dieselbe Richtung schiebt.</p>',
          shapes: [ { t: 'box', s: [1.6, 0.22, 1.0], pos: [ZX, ZY + 0.84, 0] }, { t: 'box', s: [1.6, 0.02, 1.0], pos: [ZX, TOPN - 0.0, 0], color: '#1e3a8a' } ] },
        { id: 'giunzione', name: 'P-N-Übergang', label: 'Übergang', color: '#a855f7', explode: [0, 0.25, 0],
          info: '<p>Die Grenze zwischen den beiden Schichten. Hier gibt es ein kleines elektrisches Feld: Wenn das Licht ein Elektron „befreit“, schiebt der Übergang es nach oben und das <b>Loch</b> (den leeren Platz) nach unten.</p>',
          shapes: [ { t: 'box', s: [1.62, 0.05, 1.02], pos: [ZX, JUN, 0], anim: { type: 'blink', color: '#f0abfc', amount: 0.6, rate: 1.4 } } ] },
        { id: 'silicio-p', name: 'P-Silizium', label: 'P-Silizium', color: '#f9a8d4', explode: [0, -0.2, 0],
          info: '<p>Die dicke Schicht unten. Hier wurde dem Silizium eine Prise <b>Bor</b> beigemischt: Einige Elektronen fehlen, und es bleiben „leere Plätze“, die <b>Löcher</b> (positive Ladung, P).</p>',
          shapes: [ { t: 'box', s: [1.6, 0.68, 1.0], pos: [ZX, ZY + 0.36, 0] } ] },
        { id: 'contatti', name: 'Metallkontakte', label: 'Kontakte', color: '#e2e8f0', explode: [0, 0, 0.5],
          info: '<p>Dünne Silberstreifen oben (die das Licht durchlassen) und eine Aluminiumplatte unten sammeln die Elektronen und leiten sie in die Drähte.</p>',
          shapes: [-0.5, 0, 0.5].map((x) => ({ t: 'box', s: [0.06, 0.05, 1.02], pos: [ZX + x, TOPN + 0.035, 0] })).concat([ { t: 'box', s: [1.62, 0.06, 1.02], pos: [ZX, ZY - 0.02, 0], color: '#9ca3af' } ]) },
        { id: 'elettroni', name: 'Bewegte Elektronen', label: 'Elektronen', color: '#2563eb', explode: [0, 0, 0], chip: true,
          info: '<p>Die vom Übergang angeschobenen <b>Elektronen</b> verlassen die oberen Kontakte, laufen durch den Draht, bringen die Glühlampe zum Leuchten und kehren unten zurück. Ein geordneter Fluss von Elektronen ist der <b>elektrische Strom</b>!</p>',
          more: '<p>Das Modul erzeugt <b>Gleichstrom</b> (die Elektronen fließen immer in dieselbe Richtung), wie eine Batterie. Die Steckdosen zu Hause nutzen dagegen Wechselstrom: Dafür braucht man den <b>Wechselrichter</b>.</p>',
          shapes: electrons },
        { id: 'lacune', name: 'Löcher', color: '#f87171', explode: [0, 0, 0], chip: true,
          info: '<p>Die <b>Löcher</b> sind die „Lücken“, die die Elektronen hinterlassen: Sie verhalten sich wie positive Ladungen und wandern nach unten, wo sie auf die Elektronen treffen, die aus dem Stromkreis zurückkommen.</p>',
          shapes: holes },
        { id: 'lampadina', name: 'Stromkreis und Glühlampe', label: 'Glühlampe', color: '#fde047', explode: [0.4, 0.3, 0],
          info: '<p>Verbindet man die beiden Kontakte mit einem Draht, entsteht ein <b>Stromkreis</b>: Der vom Licht erzeugte Strom bringt die Glühlampe zum Leuchten. Verschwindet die Sonne, wird die Lampe schwächer.</p>',
          shapes: [ { t: 'pipe', r: 0.025, n: 6, pts: CIRCUIT, color: '#b45309' },
            { t: 'sphere', r: 0.22, n: 14, m: 20, pos: [ZX + 1.35, TOPN + 1.15, 0], color: '#fef08a', alpha: 0.85, anim: { type: 'blink', color: '#ffffff', amount: 0.7, rate: 1 } },
            { t: 'cyl', r: 0.1, h: 0.16, n: 14, pos: [ZX + 1.35, TOPN + 0.92, 0], color: '#94a3b8' } ] },
        { id: 'inverter', name: 'Wechselrichter', color: '#e5e7eb', explode: [0.4, -0.2, 0.6],
          info: '<p>Ein Kasten, der den Gleichstrom des Moduls in <b>Wechselstrom</b> umwandelt, den der Steckdosen zu Hause, und ihn ins Netz einspeist.</p>',
          shapes: [ { t: 'box', s: [0.5, 0.6, 0.2], pos: [1.6, 0.42, 1.2] }, { t: 'box', s: [0.25, 0.12, 0.02], pos: [1.6, 0.55, 1.31], color: '#16a34a', decal: 1, anim: { type: 'blink', color: '#86efac', amount: 0.6, rate: 2 } },
            { t: 'pipe', r: 0.025, n: 6, curve: true, pts: [[0.6, 0.85, -0.3], [1.0, 0.4, 0.3], [1.5, 0.2, 1.15]], color: '#111827' } ] }
      ]
    },
    steps: [
      { icon: '☀️', title: 'Strom aus Licht', explode: 0,
        html: '<p>Ein Solarmodul hat weder Motoren noch Zahnräder: <b>Das Licht selbst</b> erzeugt den Strom. Dieses Phänomen heißt <b>photovoltaischer Effekt</b> („Photo“ = Licht, „Volt“ = Elektrizität).</p>' },
      { icon: '🥪', title: 'Ein Sandwich aus Schichten', explode: 1, focus: ['vetro', 'eva', 'celle', 'retro', 'cornice', 'scatola'], view: { rx: 0.25, ry: -0.9 },
        html: '<p>Das Modul ist ein „Sandwich“: oben das <b>Glas</b>, dann der durchsichtige Kunststoff (<b>EVA</b>), die <b>Zellen</b> aus Silizium, noch eine EVA-Schicht und die <b>Rückseitenfolie</b>. Alles wird von einem <b>Rahmen</b> aus Aluminium gehalten.</p>' },
      { icon: '🔲', title: 'Die Siliziumzellen', focus: ['celle', 'cornice', 'luce'], view: { rx: 0.7, ry: -0.3 }, zoom: 1.3,
        html: '<p>Jedes blaue Quadrat ist eine <b>Zelle</b> aus Silizium, dünn wie ein Blatt Papier. Die silbernen Linien sammeln den Strom. Die Zellen sind hintereinandergeschaltet, wie die Batterien in einer Taschenlampe.</p>' },
      { icon: '🔬', title: 'Eine Zelle unter dem Mikroskop', focus: ['zoom', 'silicio-n', 'silicio-p', 'giunzione', 'contatti'], view: { rx: 0.2, ry: -0.15 },
        html: '<p>Wir vergrößern eine Zelle. Sie besteht aus zwei Schichten: dem <b>N</b>-Silizium (oben) mit zusätzlichen Elektronen und dem <b>P</b>-Silizium (unten) mit „leeren Plätzen“. Wo sie sich berühren, liegt der <b>Übergang</b>.</p>' },
      { icon: '⚡', title: 'Das Licht befreit die Elektronen', focus: ['luce', 'giunzione', 'elettroni', 'lacune', 'silicio-n', 'silicio-p'], view: { rx: 0.15, ry: -0.05 }, zoom: 1.2,
        html: '<p>Ein <b>Photon</b> trifft das Silizium und „löst“ ein Elektron heraus. Der Übergang schiebt das <b>Elektron</b> nach oben und das <b>Loch</b> nach unten: So entsteht ein Ladungsunterschied, wie in einer Batterie.</p>' },
      { icon: '💡', title: 'Die Glühlampe geht an', focus: ['elettroni', 'lampadina', 'contatti', 'lacune'], view: { rx: 0.15, ry: 0.15 },
        html: '<p>Verbinden wir oben und unten mit einem Draht, fließen die Elektronen durch den <b>Stromkreis</b>: Das ist der <b>elektrische Strom</b>, der die Glühlampe zum Leuchten bringt und dann in die Zelle zurückkehrt. Solange Licht da ist, geht der Kreislauf weiter!</p>' },
      { icon: '🏠', title: 'Vom Dach zur Steckdose', focus: ['inverter', 'scatola', 'struttura', 'celle'], view: { rx: 0.3, ry: -0.9 },
        html: '<p>Die <b>Anschlussdose</b> sammelt den Strom, der <b>Wechselrichter</b> wandelt ihn in den Strom der Steckdosen zu Hause um. Das Modul wird etwa 30° nach <b>Süden</b> geneigt, um möglichst viel Sonne einzufangen.</p><p class="tip">🌱 Sonnenenergie ist <b>erneuerbar</b> und sauber: Die Sonne wird noch Milliarden Jahre scheinen.</p>' }
    ],
    facts: [
      { icon: '🛰️', title: 'Für den Weltraum geboren', html: 'Die ersten brauchbaren Solarmodule wurden 1958 am Satelliten <b>Vanguard 1</b> eingesetzt, der nach mehr als 65 Jahren im Orbit noch heute funktioniert!' },
      { icon: '🏖️', title: 'Aus Sand gemacht', html: 'Das Silizium der Zellen wird aus <b>Sand</b> (Quarz) gewonnen, einem der häufigsten Stoffe der Erde.' },
      { icon: '🥵', title: 'Zu viel Hitze hilft nicht', html: 'Module mögen Licht, keine Hitze: Wenn sie zu heiß werden, erzeugen sie etwas weniger Strom. Deshalb arbeiten sie an kalten, klaren Tagen besonders gut.' },
      { icon: '⏳', title: 'Langes Leben', html: 'Ein Solarmodul hält mehr als <b>25 Jahre</b> und lässt sich am Ende recyceln: Glas, Aluminium und Silizium kann man fast vollständig zurückgewinnen.' },
      { icon: '🧮', title: 'Wie viel erzeugt es?', html: 'In Italien erzeugt ein Modul für zu Hause (etwa 400 W) in einem Jahr rund 500 kWh: genug, um einen Kühlschrank das ganze Jahr zu betreiben.' }
    ],
    quiz: [
      { type: 'mc', q: 'Was verwandelt ein Photovoltaikmodul?', options: ['Wärme in Wind', 'Licht in Strom', 'Wasser in Dampf', 'Lärm in Licht'], answer: 1, explain: 'Das ist der photovoltaische Effekt: Das Licht setzt die Elektronen in Bewegung.' },
      { type: 'mc', q: 'Aus welchem Material bestehen fast alle Solarzellen?', options: ['Kupfer', 'Silizium', 'Holz', 'Kunststoff'], answer: 1, explain: 'Silizium, das aus Sand gewonnen wird.' },
      { type: 'tf', q: 'Ein Solarmodul hat viele Zahnräder, die sich drehen.', answer: false, explain: 'Es hat keine beweglichen Teile: Das Licht erzeugt den Strom direkt.' },
      { type: 'mc', q: 'Wozu dient der Wechselrichter?', options: ['Um das Modul zu reinigen', 'Um Gleichstrom in Wechselstrom umzuwandeln', 'Um der Sonne zu folgen', 'Um die Zellen zu kühlen'], answer: 1, explain: 'Die Steckdosen zu Hause nutzen Wechselstrom; das Modul erzeugt Gleichstrom.' },
      { type: 'mc', q: 'In welche Himmelsrichtung sollte man die Module in Italien ausrichten?', options: ['Norden', 'Süden', 'Osten', 'Westen'], answer: 1, explain: 'Auf unserer Erdhalbkugel steht die Sonne mittags im Süden.' },
      { type: 'order', q: 'Bring in die richtige Reihenfolge: Wie entsteht der Strom in der Zelle?', items: ['Das Photon trifft das Silizium', 'Ein Elektron wird frei', 'Der Übergang schiebt es nach oben', 'Das Elektron läuft durch den Stromkreis', 'Die Glühlampe leuchtet'], explain: 'Licht → freies Elektron → Trennung am Übergang → Strom im Stromkreis.' }
    ]
  });
})();
