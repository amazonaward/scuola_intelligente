/* Lo smartphone, in piedi: lo schermo guarda verso +z, l'alto è +y. Esplodendo, gli strati si separano lungo z.
   Ciclo (1): 0–0.25 un dito tocca lo schermo; il segnale radio parte dall'antenna. */
(function () {
  /* rettangolo arrotondato (piano XY), centrato */
  const rrect = (w, h, r, seg) => {
    const out = [], n = seg || 6, cx = w / 2 - r, cy = h / 2 - r;
    [[cx, cy, 0], [-cx, cy, 90], [-cx, -cy, 180], [cx, -cy, 270]].forEach(([x, y, a0]) => {
      for (let i = 0; i <= n; i++) { const a = (a0 + (i / n) * 90) * Math.PI / 180; out.push([x + r * Math.cos(a), y + r * Math.sin(a)]); }
    });
    return out;
  };
  /* cornice: contorno esterno + foro (poligono "a buco di serratura") */
  const ring = (o, i) => o.concat([o[0], i[0]], i.slice(1).reverse(), [i[0]]);
  const W = 1.5, H = 3.1, RC = 0.22;
  /* icone delle app: griglia 4 × 5 */
  const APP = ['#ef4444', '#f59e0b', '#22c55e', '#3b82f6', '#a855f7', '#ec4899', '#14b8a6', '#f97316', '#64748b', '#0ea5e9', '#84cc16', '#eab308', '#6366f1', '#10b981', '#f43f5e', '#8b5cf6', '#06b6d4', '#d946ef', '#facc15', '#4ade80'];
  const icons = APP.map((c, k) => ({ t: 'extrude', d: 0.008, pts: rrect(0.22, 0.22, 0.06, 3), pos: [-0.465 + (k % 4) * 0.31, 1.0 - Math.floor(k / 4) * 0.36, 0.012], color: c, decal: 2 }));
  const dock = [0, 1, 2, 3].map((k) => ({ t: 'extrude', d: 0.008, pts: rrect(0.22, 0.22, 0.06, 3), pos: [-0.465 + k * 0.31, -1.18, 0.012], color: ['#22c55e', '#3b82f6', '#f8fafc', '#f59e0b'][k], decal: 2 }));
  /* onde radio: anelli che si allargano e svaniscono */
  const waves = [0, 1, 2].map((k) => ({ t: 'group', anim: [{ type: 'scale', from: 0.3, to: 1.9, wave: 'saw', phase: k / 3 }, { type: 'blink', fade: true, wave: 'rsaw', phase: k / 3 }],
    shapes: [{ t: 'torus', R: 0.4, r: 0.02, n: 28, m: 4, rot: [90, 0, 0], color: '#fbbf24' }] }));
  const chip = (w, h, c, x, y, z) => ({ t: 'box', s: [w, h, 0.05], pos: [x, y, z || 0.035], color: c });

  LIBRARY({
    lang: 'de',
    id: 'smartphone',
    title: 'Das Smartphone',
    intro: 'Das Smartphone ist ein <b>kleiner Taschencomputer</b>, der auch Telefon, Kamera, Navi und Musikplayer ist. Nimm es Schicht für Schicht auseinander: vom Glas, das du mit dem Finger berührst, bis zur Batterie!',
    model: {
      rx: 0.18, ry: -0.75, speed: 0.45, height: 470, fit: 0.95,
      parts: [
        { id: 'vetro', name: 'Touch-Glas (Touchscreen)', label: 'Touch-Glas', color: '#bae6fd', alpha: 0.28, pos: [0, 0, 0.11], explode: [0, 0, 1.5],
          info: '<p>Das ist das Glas, das du berührst. Darunter liegt ein unsichtbares Gitter aus hauchdünnen Drähten, das spürt, wo du den Finger aufsetzt, weil dein Körper <b>ein wenig Strom leitet</b>.</p>',
          more: '<p>Es ist ein <b>kapazitiver</b> Touchscreen: Die Zeilen und Spalten aus durchsichtigen Elektroden (Indiumzinnoxid) bilden viele kleine Kondensatoren. Der Finger verändert ihre Ladung, und der Chip berechnet die Koordinaten der Berührung mehr als 100-mal pro Sekunde. Deshalb funktioniert es mit normalen Handschuhen nicht!</p>',
          shapes: [ { t: 'extrude', d: 0.03, pts: rrect(W, H, RC, 8) },
            { t: 'group', pos: [0, 0, 0.02], shapes: Array.from({ length: 5 }, (_, k) => ({ t: 'box', div: 1, s: [0.006, H - 0.3, 0.002], pos: [-0.5 + k * 0.25, 0, 0], color: '#7dd3fc', alpha: 0.5 }))
              .concat(Array.from({ length: 9 }, (_, k) => ({ t: 'box', div: 1, s: [W - 0.25, 0.006, 0.002], pos: [0, -1.36 + k * 0.34, 0], color: '#7dd3fc', alpha: 0.5 }))) },
            { t: 'extrude', d: 0.01, pts: rrect(0.36, 0.09, 0.045, 3), pos: [0, 1.42, 0.02], color: '#0f172a', alpha: 0.9 } ] },
        { id: 'dito', name: 'Dein Finger', label: 'Berührung', color: '#fda4af', pos: [0.3, -0.2, 0.55], explode: [0, 0, 1.5],
          anim: { type: 'move', dir: [0, 0, -1], amp: 0.36, wave: 'window', from: 0.05, to: 0.35, ramp: 0.35 },
          info: '<p>Wenn der Finger das Glas berührt, spürt das Gitter des Touchscreens genau an dieser Stelle eine kleine elektrische Veränderung, und das Telefon erkennt, <b>wo</b> du getippt hast.</p>',
          shapes: [ { t: 'cyl', r: 0.13, h: 0.5, n: 16, rot: [90, 0, 0], pos: [0, 0, 0.25] }, { t: 'sphere', r: 0.13, n: 8, m: 16, hemi: true, rot: [-90, 0, 0], scale: [1, 0.8, 1] },
            { t: 'cyl', r: 0.17, h: 0.01, n: 20, rot: [90, 0, 0], pos: [0, 0, -0.33], color: '#fde047', anim: { type: 'blink', fade: true, wave: 'window', from: 0.17, to: 0.32, ramp: 0.3 } } ] },
        { id: 'display', name: 'OLED-Display', label: 'Display', color: '#0f172a', pos: [0, 0, 0.07], explode: [0, 0, 1.05],
          info: '<p>Das ist der Bildschirm, der leuchtet. Er besteht aus Millionen farbiger Pünktchen, den <b>Pixeln</b>: Jedes leuchtet rot, grün oder blau, und zusammen bilden sie die Bilder.</p>',
          more: '<p>Bei <b>OLED</b>-Displays ist jedes Subpixel eine winzige organische LED, die von selbst leuchtet: Schwarz ist wirklich aus, und das spart Akku. Ein Smartphone hat etwa 2,5 Millionen Pixel, mehr als 400 pro Zoll.</p>',
          shapes: [ { t: 'extrude', d: 0.025, pts: rrect(W - 0.06, H - 0.06, RC - 0.03, 8) },
            { t: 'extrude', d: 0.006, pts: rrect(W - 0.14, H - 0.14, RC - 0.07, 8), pos: [0, 0, 0.012], color: '#1d4ed8', decal: 1 },
            { t: 'box', s: [W - 0.14, 1.0, 0.004], pos: [0, -0.35, 0.013], color: '#7c3aed', alpha: 0.55, decal: 1 },
            { t: 'box', s: [0.5, 0.06, 0.006], pos: [0, 1.38, 0.014], color: '#e2e8f0', decal: 2 } ].concat(icons, dock) },
        { id: 'telaio', name: 'Rahmen (Chassis)', label: 'Rahmen', color: '#9ca3af', pos: [0, 0, 0], explode: [0, 0, 0],
          info: '<p>Das ist der Metallrahmen, der das ganze Telefon zusammenhält. An den Seiten sitzen die <b>Tasten</b> für Lautstärke und Einschalten.</p>',
          more: '<p>Der Rahmen besteht aus <b>Aluminium</b> oder Stahl: leicht und stabil. Oft sind Teile des Randes durch dünne Kunststoffstreifen getrennt, weil sie auch als <b>Antenne</b> dienen.</p>',
          shapes: [ { t: 'extrude', d: 0.17, pts: ring(rrect(W + 0.04, H + 0.04, RC + 0.02, 8), rrect(W - 0.06, H - 0.06, RC - 0.03, 8)), smooth: true },
            { t: 'box', s: [0.04, 0.22, 0.05], pos: [-0.78, 0.75, 0], color: '#6b7280' }, { t: 'box', s: [0.04, 0.22, 0.05], pos: [-0.78, 0.45, 0], color: '#6b7280' },
            { t: 'box', s: [0.04, 0.35, 0.05], pos: [0.78, 0.6, 0], color: '#6b7280' },
            { t: 'box', s: [0.42, 0.04, 0.12], pos: [0, -1.56, 0], color: '#111827' },
            { t: 'box', s: [0.22, 0.02, 0.055], pos: [0, -1.575, 0], color: '#475569' } ] },
        { id: 'scheda-logica', name: 'Platine', label: 'Platine', color: '#166534', pos: [0, 0.75, -0.02], explode: [0, 0.25, 0.55],
          info: '<p>Das ist die „Hauptplatine“ des Telefons: ein grünes Plättchen voller Chips, die durch hauchdünne Kupferbahnen verbunden sind.</p>',
          more: '<p>Damit alles auf wenige Zentimeter passt, besteht die Platine aus <b>mehreren</b> übereinanderliegenden Schichten (bis zu 10!), und die Chips sind aufeinandergestapelt. Es gibt auch die Chips für WLAN, Bluetooth, GPS und das Modem für das Mobilfunknetz.</p>',
          shapes: [ { t: 'box', s: [1.3, 1.3, 0.025] }, chip(0.18, 0.12, '#1f2937', 0.42, -0.4), chip(0.14, 0.14, '#334155', -0.42, -0.42), chip(0.2, 0.1, '#1f2937', -0.4, 0.4),
            chip(0.12, 0.08, '#b45309', 0.45, 0.42), { t: 'box', s: [0.3, 0.06, 0.03], pos: [0, -0.6, 0.025], color: '#d1d5db' } ]
            .concat(Array.from({ length: 6 }, (_, k) => ({ t: 'box', s: [0.025, 0.04, 0.03], pos: [-0.1 + k * 0.05, 0.55, 0.025], color: '#a16207' }))) },
        { id: 'processore', name: 'Prozessor (SoC)', label: 'Prozessor', color: '#cbd5e1', pos: [0.05, 0.85, 0.03], explode: [0.25, 0.4, 1.0],
          info: '<p>Das ist das <b>Gehirn</b> des Telefons. In einem Chip, so groß wie ein Fingernagel, sitzen der Prozessor, die Grafikeinheit und das „Gehirn“ für die künstliche Intelligenz.</p>',
          more: '<p>Er heißt <b>SoC</b> (System on a Chip, „System auf einem Chip“). Er enthält mehr als 15 Milliarden Transistoren, nur wenige Nanometer breit, und arbeitet mit sehr wenig Energie, damit er nicht zu heiß wird und den Akku nicht leert.</p>',
          shapes: [ { t: 'box', s: [0.42, 0.42, 0.03], color: '#166534' }, { t: 'box', s: [0.34, 0.34, 0.04], pos: [0, 0, 0.03] },
            { t: 'box', s: [0.12, 0.12, 0.005], pos: [-0.07, 0.07, 0.052], color: '#94a3b8', decal: 1 },
            { t: 'box', s: [0.06, 0.06, 0.006], pos: [0.1, -0.08, 0.052], color: '#38bdf8', decal: 1, anim: { type: 'blink', color: '#f0f9ff', wave: 'square', rate: 3 } } ] },
        { id: 'memoria', name: 'Speicher (RAM und Datenspeicher)', label: 'Speicher', color: '#334155', pos: [-0.4, 1.08, 0.03], explode: [-0.35, 0.35, 0.85],
          info: '<p>Zwei Arten von Speicher: der <b>RAM</b>, die schnelle Werkbank für die geöffneten Apps, und der <b>Datenspeicher</b>, in dem Fotos, Videos und Apps auch bei ausgeschaltetem Telefon bleiben.</p>',
          more: '<p>Der Datenspeicher ist ein <b>Flash</b>-Speicher: Die Informationen bleiben als elektrische Ladungen in winzigen „Käfigen“ gefangen, auch ohne Strom. 128 GB sind etwa tausend Milliarden Bit!</p>',
          shapes: [ { t: 'box', s: [0.32, 0.22, 0.04] }, { t: 'box', s: [0.3, 0.2, 0.004], pos: [0, 0, 0.022], color: '#475569', decal: 1 } ] },
        { id: 'batteria', name: 'Akku', color: '#1f2937', pos: [0, -0.55, -0.02], explode: [0, -0.2, -0.6],
          info: '<p>Das ist der Energie-„Tank“: ein flacher <b>Lithium</b>-Akku, der sich hunderte Male aufladen lässt. Er nimmt fast die Hälfte des Telefons ein!</p>',
          more: '<p>Beim Laden wandern Lithium-Ionen von einer Seite des Akkus zur anderen; beim Benutzen des Telefons wandern sie zurück und lassen den Strom fließen. Lass ihn nicht in der Sonne liegen: Hitze schadet ihm und kann gefährlich sein.</p>',
          shapes: [ { t: 'extrude', d: 0.07, pts: rrect(1.25, 1.75, 0.06, 3) }, { t: 'box', s: [1.1, 0.6, 0.004], pos: [0, 0.2, 0.037], color: '#e2e8f0', decal: 1 },
            { t: 'box', s: [0.6, 0.08, 0.004], pos: [0, 0.32, 0.04], color: '#16a34a', decal: 2 }, { t: 'box', s: [0.3, 0.12, 0.03], pos: [0, 0.92, 0], color: '#b45309' },
            { t: 'group', pos: [-0.35, 0.08, 0.042], shapes: [0, 1, 2, 3].map((k) => ({ t: 'box', s: [0.12, 0.16, 0.004], pos: [k * 0.14, 0, 0], color: '#22c55e', decal: 2, anim: { type: 'blink', fade: true, wave: 'window', from: k * 0.2, to: 0.95, ramp: 0.05, cycle: 1 } })) } ] },
        { id: 'fotocamere', name: 'Kameras', color: '#111827', pos: [-0.42, 1.12, -0.12], explode: [0, 0.05, -1.6],
          info: '<p>Die Kameras haben eine kleine <b>Linse</b>, die das Licht sammelt, und einen <b>Sensor</b>, der es in Zahlen umwandelt: So entsteht ein Foto.</p>',
          more: '<p>Der Sensor ist ein Gitter aus Millionen Fotodioden: Jede misst, wie viel Licht sie trifft. Mehrere Kameras gibt es für verschiedene Zooms (Weitwinkel, Tele), und der Prozessor kombiniert mehrere Aufnahmen für bessere Fotos, auch im Dunkeln.</p>',
          shapes: [ { t: 'extrude', d: 0.04, pts: rrect(0.6, 0.6, 0.14, 5), pos: [0, 0, -0.01], color: '#374151' } ].concat(
            [[-0.13, 0.13], [-0.13, -0.13], [0.14, 0]].map(([x, y]) => ({ t: 'group', pos: [x, y, -0.05], shapes: [
              { t: 'cyl', r: 0.105, h: 0.06, n: 28, rot: [90, 0, 0], color: '#9ca3af' }, { t: 'cyl', r: 0.08, h: 0.065, n: 28, rot: [90, 0, 0], color: '#0f172a' },
              { t: 'sphere', r: 0.06, n: 8, m: 16, hemi: true, rot: [-90, 0, 0], pos: [0, 0, -0.03], color: '#1e3a8a' } ] })),
            [{ t: 'cyl', r: 0.03, h: 0.02, n: 12, rot: [90, 0, 0], pos: [0.15, 0.2, -0.04], color: '#fef9c3' }]) },
        { id: 'antenne', name: 'Antennen', color: '#f59e0b', pos: [0, 0, 0], explode: [0.9, 0, 0],
          info: '<p>Die Antennen senden und empfangen unsichtbare <b>Radiowellen</b>, die mit Lichtgeschwindigkeit bis zum nächsten Sendemast reisen. So telefonierst, chattest und surfst du.</p>',
          more: '<p>Ein Smartphone hat verschiedene Antennen für 4G/5G, WLAN, Bluetooth, GPS und NFC (damit bezahlt man, indem man das Telefon ans Gerät hält). Die Radiowellen tragen die Daten als 0 und 1, indem sie ständig ihre Form verändern.</p>',
          shapes: [ { t: 'pipe', r: 0.018, n: 6, pts: [[-0.5, 1.52, 0.02], [0.5, 1.52, 0.02]] }, { t: 'pipe', r: 0.018, n: 6, pts: [[-0.5, -1.52, 0.02], [0.5, -1.52, 0.02]] },
            { t: 'pipe', r: 0.014, n: 6, pts: [[0.73, 0.2, 0], [0.73, -0.5, 0]] },
            { t: 'group', pos: [0, 1.6, 0], shapes: waves } ] },
        { id: 'altoparlante', name: 'Lautsprecher und Mikrofon', label: 'Lautsprecher', color: '#475569', pos: [0.4, -1.38, 0], explode: [0.35, -0.5, 0.35],
          info: '<p>Der <b>Lautsprecher</b> bringt die Luft zum Schwingen und erzeugt die Töne. Das <b>Mikrofon</b> macht das Gegenteil: Es spürt die Schwingungen deiner Stimme und verwandelt sie in elektrische Signale.</p>',
          more: '<p>Im Lautsprecher bewegt sich eine stromdurchflossene Spule vor und zurück, nahe an einem Magneten, und schiebt eine Membran an. Das Mikrofon der Smartphones (MEMS) ist ein Chip mit einer Siliziummembran, dünner als ein Haar.</p>',
          shapes: [ { t: 'box', s: [0.42, 0.18, 0.1], anim: { type: 'scale', axis: 'z', from: 1, to: 1.25, wave: 'sin', rate: 6 } }, { t: 'box', s: [0.3, 0.1, 0.01], pos: [0, 0, 0.055], color: '#9ca3af', decal: 1 },
            { t: 'box', s: [0.08, 0.08, 0.06], pos: [-0.75, 0, 0], color: '#64748b' } ] },
        { id: 'vibrazione', name: 'Vibrationsmotor', label: 'Vibration', color: '#a16207', pos: [-0.45, -1.35, 0], explode: [-0.4, -0.5, 0.35],
          info: '<p>Ein winziger Motor mit einem einseitig angebrachten Gewicht: Wenn er sich dreht, lässt er das Telefon <b>zittern</b>. So spürst du Benachrichtigungen sogar in der Tasche.</p>',
          shapes: [ { t: 'cyl', r: 0.07, h: 0.22, n: 16, rot: [0, 0, 90], color: '#9ca3af' },
            { t: 'group', pos: [0.15, 0, 0], anim: { type: 'spin', axis: 'x', rate: 6 }, shapes: [ { t: 'cyl', r: 0.065, h: 0.06, n: 16, rot: [0, 0, 90], color: '#a16207' }, { t: 'box', s: [0.06, 0.06, 0.06], pos: [0, 0.05, 0] } ] } ] },
        { id: 'scocca', name: 'Rückseite', label: 'Rückseite', color: '#334155', pos: [0, 0, -0.1], explode: [0, 0, -1.25],
          info: '<p>Das ist der „Rücken“ des Telefons, aus Glas oder Kunststoff. Sie schützt das Innere und lässt die Radiowellen und das kabellose Laden durch.</p>',
          more: '<p>Unter der Rückseite vieler Telefone liegt eine Kupfer-<b>Spule</b> für das kabellose Laden: Das Ladegerät erzeugt ein sich änderndes Magnetfeld, und die Spule verwandelt es wieder in Strom (Induktion).</p>',
          shapes: [ { t: 'extrude', d: 0.03, pts: rrect(W, H, RC, 8) },
            { t: 'tube', r: 0.36, ri: 0.24, h: 0.012, n: 32, rot: [90, 0, 0], pos: [0, -0.3, 0.022], color: '#b45309' },
            { t: 'box', s: [0.6, 0.6, 0.02], pos: [-0.42, 1.12, -0.018], color: '#1f2937' } ] }
      ]
    },
    steps: [
      { icon: '📱', title: 'Ein Computer in der Tasche', explode: 0, view: { rx: 0.18, ry: -0.75 },
        html: '<p>Im Smartphone stecken dieselben Teile wie in einem Computer: <b>Prozessor</b>, <b>Speicher</b>, <b>Bildschirm</b> und <b>Akku</b>, aber auf weniger als einen Zentimeter Dicke zusammengequetscht!</p><p class="tip">🔁 Wie bei jedem Computer: <b>Eingabe</b> (Touch, Mikrofon, Kamera) → <b>Verarbeitung</b> (Prozessor) → <b>Ausgabe</b> (Bildschirm, Lautsprecher).</p>' },
      { icon: '👆', title: 'Das Glas, das den Finger spürt', focus: ['vetro', 'dito', 'display'], explode: 0.35, loop: [0, 0.45], view: { rx: 0.15, ry: -0.6 },
        html: '<p>Unter dem Glas liegt ein unsichtbares Gitter aus Drähten. Dein Finger leitet ein bisschen Strom: Wenn du tippst, „spürt“ das Gitter genau an dieser Stelle eine Veränderung.</p><p>Ein Chip berechnet die Position der Berührung und schickt sie an den Prozessor: So weiß das Telefon, welche App du angetippt hast.</p><p class="tip">🧤 Probier es mit einem Wollhandschuh: Es funktioniert nicht, weil Wolle keinen Strom leitet!</p>' },
      { icon: '🌈', title: 'Millionen farbiger Pixel', focus: ['display'], explode: 0.5, zoom: 1.15, view: { rx: 0.05, ry: -0.35 },
        html: '<p>Der Bildschirm besteht aus Millionen Pünktchen, den <b>Pixeln</b>. Jeder Pixel hat drei Lämpchen: <b>rot</b>, <b>grün</b> und <b>blau</b>. Wenn man sie mehr oder weniger stark einschaltet, entstehen alle Farben.</p><p>Bei OLED-Displays leuchtet jedes Lämpchen von selbst; Schwarz ist ein ausgeschalteter Pixel.</p>' },
      { icon: '🧠', title: 'Das Gehirn: Prozessor und Speicher', focus: ['scheda-logica', 'processore', 'memoria'], explode: 0.8, view: { rx: 0.2, ry: -0.55 },
        html: '<p>Der <b>Prozessor</b> (SoC) führt die Befehle der Apps milliardenfach pro Sekunde aus. Der <b>RAM</b> hält die geöffneten Apps bereit, der <b>Datenspeicher</b> bewahrt Fotos, Musik und Nachrichten auch bei ausgeschaltetem Telefon auf.</p><p>Alles ist durch die <b>Platine</b> verbunden, die voller Kupferbahnen ist.</p>' },
      { icon: '🔋', title: 'Der Lithium-Akku', focus: ['batteria', 'scocca'], explode: 0.7, view: { rx: 0.2, ry: -2.4 },
        html: '<p>Der Akku ist das größte Teil. Darin wandern winzig kleine Teilchen, die <b>Lithium-Ionen</b>, von einer Seite zur anderen: Wenn du das Telefon lädst, gehen sie in die eine Richtung, wenn du es benutzt, kommen sie zurück und lassen den Strom fließen.</p><p class="tip">🌡️ Akkus hassen Hitze: Lass das Telefon nicht in der Sonne oder beim Laden unter dem Kissen liegen.</p>' },
      { icon: '📡', title: 'Unsichtbare Radiowellen', focus: ['antenne', 'telaio', 'scheda-logica'], explode: 0.25, view: { rx: 0.25, ry: -0.5 },
        html: '<p>Wenn du eine Nachricht schickst, verwandeln die <b>Antennen</b> sie in <b>Radiowellen</b>: Sie reisen mit Lichtgeschwindigkeit zu einem Sendemast (der „Zelle“), der sie durch das Netz bis zum Telefon deines Freundes weitergibt.</p><p>Dieselben Wellen, aber in anderer Form, nutzen WLAN, Bluetooth und GPS.</p>' },
      { icon: '📸', title: 'Kameras, Töne und Vibration', focus: ['fotocamere', 'altoparlante', 'vibrazione'], explode: 0.6, view: { rx: 0.2, ry: -2.3 },
        html: '<p>Die <b>Kameras</b> sammeln das Licht mit einer kleinen Linse und verwandeln es mit einem Sensor in Zahlen. Der <b>Lautsprecher</b> bringt die Luft zum Schwingen, das <b>Mikrofon</b> hört deine Stimme, und der <b>Motor</b> mit dem schiefen Gewicht lässt das Telefon vibrieren.</p>' }
    ],
    facts: [
      { icon: '🚀', title: 'Leistungsstärker als die Mondmissionen', html: 'Der Computer, der 1969 Apollo 11 zum Mond steuerte, war tausendmal weniger leistungsstark als das Telefon in deiner Tasche.' },
      { icon: '📞', title: 'Das erste Handy', html: 'Das erste Mobiltelefon (1973) wog mehr als ein Kilo, hieß „der Ziegelstein“, und der Akku reichte für 30 Minuten Gespräch.' },
      { icon: '⛏️', title: 'Ein Bergwerk in der Tasche', html: 'In einem Smartphone stecken mehr als 30 verschiedene chemische Elemente, sogar ein bisschen <b>Gold</b> und Silber. Deshalb ist es wichtig, es zu <b>recyceln</b> und nicht in den Müll zu werfen.' },
      { icon: '🛰️', title: 'Das GPS lauscht ins All', html: 'Um zu wissen, wo du bist, empfängt das Telefon die Signale von mindestens 4 Satelliten und berechnet deine Position aus der Zeit, die sie bis zu dir brauchen.' },
      { icon: '🔟', title: 'Ein Zoll, viele Pixel', html: 'Auf einem Smartphone-Bildschirm gibt es mehr als 400 Pixel pro Zoll (2,5 cm): so dicht beieinander, dass das Auge sie nicht unterscheiden kann.' }
    ],
    quiz: [
      { type: 'mc', q: 'Wie erkennt der Touchscreen, wo du tippst?', options: ['Mit einer Kamera unter dem Glas', 'Er spürt die kleine elektrische Veränderung durch den Finger', 'Er misst die Wärme des Fingers', 'Er hört das Geräusch der Berührung'], answer: 1, explain: 'Der Finger leitet Strom und verändert die Ladung des unsichtbaren Gitters unter dem Glas.' },
      { type: 'mc', q: 'Welche drei Farben bilden jeden Pixel des Bildschirms?', options: ['Rot, Gelb, Blau', 'Rot, Grün, Blau', 'Weiß, Schwarz, Grau', 'Grün, Violett, Orange'], answer: 1, explain: 'RGB: Rot, Grün und Blau. Gemischt ergeben sie alle Farben.' },
      { type: 'tf', q: 'Die Fotos bleiben im Speicher des Telefons, auch wenn du es ausschaltest.', answer: true, explain: 'Die Fotos liegen im Datenspeicher (Flash-Speicher), der ohne Strom nicht gelöscht wird. Der RAM dagegen schon.' },
      { type: 'mc', q: 'Wie reisen die Nachrichten vom Telefon zum Sendemast?', options: ['Mit Radiowellen', 'Mit einem unsichtbaren Kabel', 'Mit Schall', 'Mit dem Licht des Blitzes'], answer: 0, explain: 'Die Antennen verwandeln die Daten in Radiowellen, die mit Lichtgeschwindigkeit reisen.' },
      { type: 'mc', q: 'Welches ist das größte Teil im Smartphone?', options: ['Der Prozessor', 'Der Akku', 'Das Mikrofon', 'Die Kamera'], answer: 1, explain: 'Der Lithium-Akku nimmt fast die Hälfte des Platzes im Inneren ein.' },
      { type: 'order', q: 'Bring in die richtige Reihenfolge: Du tippst auf das Symbol einer App …', items: ['Das Touch-Glas spürt den Finger', 'Der Prozessor erkennt, welche App du gewählt hast', 'Der Speicher lädt die App', 'Das Display zeigt die geöffnete App'], explain: 'Eingabe (Touch) → Verarbeitung (Prozessor und Speicher) → Ausgabe (Display).' }
    ]
  });
})();
