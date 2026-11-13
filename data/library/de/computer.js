/* Il computer (PC fisso). Formato: data/library/FORMATO.md */
(function () {
  /* ventola generica: asse lungo y locale, gira (spin) */
  const fan = (r, color, rate) => [
    { t: 'tube', r: r, ri: r * 0.9, h: 0.06, n: 28, color: '#1f2937' },
    { t: 'group', anim: { type: 'spin', axis: 'y', rate: rate || 3 }, shapes: [
      { t: 'cyl', r: r * 0.28, h: 0.07, n: 16, color: '#374151' }
    ].concat(Array.from({ length: 7 }, (_, k) => ({ t: 'group', rot: [0, k * 360 / 7, 0], shapes: [{ t: 'box', s: [r * 0.62, 0.012, r * 0.3], pos: [r * 0.58, 0, 0], rot: [28, 0, 0], color: color }] }))) }
  ];
  const keys = [];
  for (let row = 0; row < 3; row++) for (let i = 0; i < 13; i++) keys.push({ t: 'box', decal: 1, s: [0.11, 0.045, 0.1], pos: [-0.81 + i * 0.135, 0.05, -0.2 + row * 0.135], color: row === 0 && i > 10 ? '#fbbf24' : '#f1f5f9' });
  keys.push({ t: 'box', decal: 1, s: [0.7, 0.045, 0.1], pos: [-0.05, 0.05, 0.205], color: '#f1f5f9' });
  keys.push({ t: 'box', decal: 1, s: [0.24, 0.045, 0.1], pos: [0.7, 0.05, 0.205], color: '#f1f5f9' });
  const caps = Array.from({ length: 6 }, (_, k) => ({ t: 'cyl', r: 0.03, h: 0.08, n: 10, pos: [-0.62 + k * 0.07, -0.62, 0.06], rot: [90, 0, 0], color: k % 2 ? '#1e293b' : '#475569' }));

  LIBRARY({
    id: 'computer',
    lang: 'de',
    title: 'Der Computer',
    intro: 'Ein Computer ist eine Maschine, die <b>Anweisungen</b> blitzschnell <b>befolgt</b>: Er empfängt Daten (Tastatur, Maus), <b>verarbeitet</b> sie und zeigt das Ergebnis an (Monitor). Öffne das Glasgehäuse und entdecke alle seine Teile!',
    model: {
      rx: 0.3, ry: -0.42, speed: 0.6, height: 470,
      parts: [
        { id: 'case', name: 'Gehäuse', label: 'Gehäuse', color: '#374151', pos: [1.6, 1.05, -0.3], explode: [0, 0, 0],
          info: '<p>Es ist die „Schachtel“, die alle Teile zusammenhält und schützt. Es hat eine Glasscheibe zum Hineinschauen, Lüftungsöffnungen und den <b>Einschaltknopf</b>.</p>',
          more: '<p>Das Gehäuse besteht aus Stahl oder Aluminium: Es schützt nicht nur, sondern <b>schirmt</b> auch gegen elektromagnetische Störungen <b>ab</b> und leitet frische Luft von vorne nach hinten.</p>',
          shapes: [
            { t: 'box', s: [2, 2, 0.04], pos: [0, 0, -0.43] },
            { t: 'box', s: [2, 0.05, 0.9], pos: [0, 0.975, 0] },
            { t: 'box', s: [2, 0.05, 0.9], pos: [0, -0.975, 0] },
            { t: 'box', s: [0.06, 2, 0.9], pos: [0.97, 0, 0], color: '#1f2937' },
            { t: 'box', s: [0.04, 2, 0.9], pos: [-0.98, 0, 0] },
            { t: 'box', s: [2, 2, 0.02], pos: [0, 0, 0.44], color: '#bfdbfe', alpha: 0.13 },
            { t: 'cyl', r: 0.06, h: 0.03, pos: [1.01, 0.8, 0.1], rot: [0, 0, 90], color: '#22c55e' },
            { t: 'box', s: [0.01, 1.4, 0.04], pos: [1.005, -0.1, -0.25], color: '#38bdf8' },
            { t: 'box', s: [0.15, 0.04, 0.12], pos: [0.85, -1.02, 0.35], color: '#111827' },
            { t: 'box', s: [0.15, 0.04, 0.12], pos: [-0.85, -1.02, 0.35], color: '#111827' },
            { t: 'box', s: [0.15, 0.04, 0.12], pos: [0.85, -1.02, -0.35], color: '#111827' },
            { t: 'box', s: [0.15, 0.04, 0.12], pos: [-0.85, -1.02, -0.35], color: '#111827' }
          ] },
        { id: 'scheda-madre', name: 'Hauptplatine', color: '#15803d', pos: [1.45, 1.2, -0.68], explode: [0, 0, 0.35],
          info: '<p>Sie ist die „Stadt“ des Computers: eine große Platte mit <b>Kupferstraßen</b> (Leiterbahnen), die alle Teile miteinander verbinden, so wie Straßen die Häuser verbinden.</p>',
          more: '<p>Sie enthält den <b>Sockel</b> für die CPU, die Steckplätze für den Arbeitsspeicher und für Karten, den <b>Chipsatz</b>, der den Datenverkehr verteilt, und einen kleinen Chip (BIOS/UEFI) mit dem ersten Programm, das beim Einschalten startet.</p>',
          shapes: [
            { t: 'box', s: [1.5, 1.55, 0.04] },
            { t: 'box', s: [0.42, 0.42, 0.03], pos: [-0.2, 0.35, 0.03], color: '#d1d5db' },
            { t: 'box', s: [0.2, 0.2, 0.05], pos: [0.3, -0.42, 0.04], color: '#1f2937' },
            { t: 'box', s: [1.0, 0.06, 0.06], pos: [-0.12, -0.25, 0.05], color: '#111827' },
            { t: 'box', s: [1.0, 0.06, 0.06], pos: [-0.12, -0.6, 0.05], color: '#111827' },
            { t: 'box', s: [0.05, 0.95, 0.05], pos: [0.32, 0.3, 0.04], color: '#111827' },
            { t: 'box', s: [0.05, 0.95, 0.05], pos: [0.42, 0.3, 0.04], color: '#111827' },
            { t: 'box', s: [0.16, 0.5, 0.26], pos: [-0.68, 0.42, 0.15], color: '#9ca3af' }
          ].concat(caps) },
        { id: 'cpu', name: 'CPU (Prozessor)', label: 'CPU', color: '#cbd5e1', pos: [1.25, 1.55, -0.635], explode: [0, 0.2, 1.25],
          info: '<p>Sie ist das <b>Gehirn</b> des Computers: Sie führt die Anweisungen der Programme eine nach der anderen aus, <b>Milliarden Mal pro Sekunde</b>. Sie rechnet und trifft Entscheidungen („wenn … dann …“).</p>',
          more: '<p>Im Inneren sind <b>Milliarden von Transistoren</b>, winzige Schalter, die sich ein- und ausschalten (1 und 0). Die Geschwindigkeit wird in Gigahertz gemessen: 3 GHz = 3 Milliarden Taktschläge pro Sekunde. Moderne CPUs haben mehrere <b>Kerne</b>, also mehrere Gehirne, die zusammenarbeiten.</p>',
          shapes: [ { t: 'box', s: [0.34, 0.34, 0.03], color: '#166534' }, { t: 'box', s: [0.27, 0.27, 0.03], pos: [0, 0, 0.025] } ] },
        { id: 'dissipatore', name: 'Kühlkörper', color: '#d1d5db', pos: [1.25, 1.55, -0.38], explode: [0, 0.25, 2.05],
          info: '<p>Beim Arbeiten wird die CPU sehr heiß. Der Kühlkörper besteht aus vielen <b>Metalllamellen</b>, die die Wärme abführen, wie ein umgekehrter Heizkörper.</p>',
          more: '<p>Die <b>Kupferrohre</b> (Heatpipes) enthalten eine Flüssigkeit, die in der Nähe der CPU verdampft und sich zwischen den Lamellen wieder verflüssigt: So wandert die Wärme blitzschnell. Zwischen CPU und Kühlkörper wird <b>Wärmeleitpaste</b> aufgetragen.</p>',
          shapes: [ { t: 'box', s: [0.3, 0.3, 0.05], pos: [0, 0, -0.23], color: '#b45309' } ]
            .concat(Array.from({ length: 11 }, (_, k) => ({ t: 'box', s: [0.3, 0.014, 0.42], pos: [0, -0.27 + k * 0.054, 0.02] })))
            .concat([-0.08, 0, 0.08].map((x) => ({ t: 'cyl', r: 0.022, h: 0.64, n: 8, pos: [x, 0, 0.02], color: '#c2410c' }))) },
        { id: 'ventola-cpu', name: 'CPU-Lüfter', label: 'CPU-Lüfter', color: '#60a5fa', pos: [1.45, 1.55, -0.36], rot: [0, 0, 90], explode: [0.7, 0.25, 2.05],
          info: '<p>Er bläst frische Luft zwischen die Lamellen des Kühlkörpers, damit die Wärme schneller verschwindet. Je mehr die CPU arbeitet, desto schneller dreht sich der Lüfter.</p>',
          shapes: fan(0.25, '#60a5fa', 3) },
        { id: 'ram', name: 'RAM (Arbeitsspeicher)', label: 'RAM', color: '#1e3a8a', pos: [1.82, 1.5, -0.51], explode: [0.45, 0.1, 1.45],
          info: '<p>Er ist der <b>Arbeitstisch</b> des Computers: Er hält die Daten der geöffneten Programme bereit, damit die CPU sie sofort greifen kann. Er ist blitzschnell, aber wenn du den Computer ausschaltest, <b>wird alles gelöscht</b>.</p>',
          more: '<p>RAM bedeutet <i>Random Access Memory</i>: Jede beliebige Stelle kann in wenigen Nanosekunden gelesen werden. Ein heutiger PC hat meist 8–32 GB RAM. Ist es zu wenig, wird der Computer langsam, weil er die Festplatte mitbenutzen muss.</p>',
          shapes: [-0.05, 0.05].map((x) => ({ t: 'group', pos: [x, 0, 0], shapes: [
            { t: 'box', s: [0.035, 0.9, 0.28] },
            { t: 'box', s: [0.04, 0.9, 0.03], pos: [0, 0, 0.15], color: '#a855f7', anim: { type: 'blink', color: '#22d3ee', rate: 0.5, phase: x } }
          ] })) },
        { id: 'ssd', name: 'SSD (Massenspeicher)', label: 'SSD', color: '#111827', pos: [1.25, 1.12, -0.645], explode: [0, -0.05, 1.15],
          info: '<p>Sie ist das „Lager“, in dem Programme, Fotos und Spiele <b>auch bei ausgeschaltetem Computer</b> gespeichert bleiben. Sie hat keine beweglichen Teile: Sie benutzt Flash-Speicherchips, wie ein USB-Stick.</p>',
          more: '<p>SSD bedeutet <i>Solid State Drive</i>. Sie ist viel schneller als die alte <b>Festplatte</b> (HDD) mit sich drehenden Scheiben. Wenn du ein Programm öffnest, werden seine Daten von der SSD in den RAM kopiert.</p>',
          shapes: [ { t: 'box', s: [0.6, 0.17, 0.02] }, { t: 'box', s: [0.34, 0.12, 0.006], pos: [-0.05, 0, 0.013], decal: 2, color: '#f97316' }, { t: 'box', s: [0.1, 0.1, 0.012], pos: [0.22, 0, 0.014], color: '#334155' } ] },
        { id: 'scheda-video', name: 'Grafikkarte (GPU)', label: 'Grafikkarte', color: '#1f2937', pos: [1.3, 0.83, -0.425], explode: [0, -0.5, 1.6],
          info: '<p>Sie zeichnet die Bilder, die du auf dem Bildschirm siehst: Sie berechnet die Farbe von <b>Millionen Pixeln</b>, etwa <b>60-mal pro Sekunde</b>. Bei Videospielen hat sie viel zu tun!</p>',
          more: '<p>Die GPU hat Tausende kleiner Kerne, die <b>parallel</b> arbeiten: Sie ist perfekt, um viele gleiche Rechenschritte gleichzeitig auszuführen. Deshalb wird sie heute auch zum Trainieren der <b>künstlichen Intelligenz</b> benutzt.</p>',
          shapes: [
            { t: 'box', s: [1.3, 0.12, 0.47] },
            { t: 'box', s: [1.3, 0.03, 0.45], pos: [0, 0.075, 0], color: '#065f46' },
            { t: 'box', s: [1.3, 0.02, 0.05], pos: [0, 0.07, 0.22], color: '#ef4444' },
            { t: 'box', s: [0.04, 0.18, 0.5], pos: [-0.67, 0.02, 0.0], color: '#9ca3af' },
            { t: 'group', pos: [0.3, -0.07, 0], shapes: fan(0.18, '#9ca3af', 2.5) },
            { t: 'group', pos: [-0.25, -0.07, 0], shapes: fan(0.18, '#9ca3af', 2.5) }
          ] },
        { id: 'alimentatore', name: 'Netzteil', color: '#111827', pos: [1.0, 0.31, -0.32], explode: [-0.2, -0.35, 1.35],
          info: '<p>Es nimmt den Strom aus der Steckdose zu Hause (230 Volt, viel zu stark!) und wandelt ihn in <b>schwächeren Gleichstrom</b> (12, 5 und 3,3 Volt) um, der für jedes Teil passt.</p>',
          more: '<p>Der Strom aus der Steckdose ist <b>Wechselstrom</b>: Er wechselt 50-mal pro Sekunde die Richtung. Das Netzteil senkt ihn ab, „richtet“ ihn gleich und macht ihn stabil. Ein gutes Netzteil verschwendet wenig Energie als Wärme.</p>',
          shapes: [
            { t: 'box', s: [0.75, 0.42, 0.82] },
            { t: 'group', pos: [0, 0.2, 0.05], shapes: fan(0.22, '#4b5563', 2) },
            { t: 'box', s: [0.3, 0.005, 0.2], pos: [0.15, 0.212, -0.28], color: '#fbbf24' },
            { t: 'pipe', r: 0.035, curve: true, pts: [[0.3, 0.2, -0.3], [0.4, 0.5, -0.35], [0.55, 1.0, -0.3], [0.62, 1.3, -0.32]], color: '#f59e0b' },
            { t: 'pipe', r: 0.03, curve: true, pts: [[0.25, 0.2, -0.2], [0.35, 0.45, -0.15], [0.4, 0.55, -0.1]], color: '#ef4444' }
          ] },
        { id: 'ventola-case', name: 'Gehäuselüfter', label: 'Gehäuselüfter', color: '#a78bfa', pos: [0.67, 1.6, -0.35], rot: [0, 0, 90], explode: [-0.9, 0.1, 0.6],
          info: '<p>Er bläst die warme Luft aus dem Gehäuse. Zusammen mit dem CPU-Lüfter erzeugt er einen <b>Luftzug</b>: Vorne kommt frische Luft herein, hinten geht warme hinaus.</p>',
          shapes: fan(0.27, '#a78bfa', 2) },
        { id: 'monitor', name: 'Monitor', color: '#1f2937', pos: [-1.0, 0, -0.4], explode: [-0.7, 0.15, 0],
          info: '<p>Er ist ein <b>Ausgabegerät</b> (Output): Er zeigt die Bilder, die die Grafikkarte vorbereitet. Der Bildschirm besteht aus Millionen kleiner Punkte, den <b>Pixeln</b>.</p>',
          more: '<p>Jedes Pixel hat drei Lichter: <b>Rot, Grün und Blau</b> (RGB). Wenn man sie mit unterschiedlicher Stärke mischt, entstehen Millionen von Farben. Ein Full-HD-Bildschirm hat 1920 × 1080 = mehr als 2 Millionen Pixel.</p>',
          shapes: [
            { t: 'box', s: [0.8, 0.04, 0.45], pos: [0, 0.02, 0], color: '#374151' },
            { t: 'box', s: [0.12, 0.75, 0.07], pos: [0, 0.42, -0.08], color: '#4b5563' },
            { t: 'box', s: [2.3, 1.35, 0.08], pos: [0, 1.35, 0] },
            { t: 'box', s: [2.18, 1.23, 0.01], pos: [0, 1.37, 0.045], decal: 1, color: '#2563eb' },
            { t: 'box', s: [1.0, 0.6, 0.006], pos: [-0.25, 1.45, 0.052], decal: 2, color: '#f8fafc' },
            { t: 'box', s: [1.0, 0.08, 0.008], pos: [-0.25, 1.71, 0.054], decal: 2, color: '#4c7cf3' },
            { t: 'box', s: [0.5, 0.05, 0.008], pos: [-0.38, 1.5, 0.056], decal: 2, color: '#94a3b8' },
            { t: 'box', s: [0.7, 0.05, 0.008], pos: [-0.28, 1.38, 0.056], decal: 2, color: '#cbd5e1' },
            { t: 'box', s: [0.45, 0.35, 0.007], pos: [0.62, 1.15, 0.053], decal: 2, color: '#fde68a' },
            { t: 'box', s: [2.18, 0.08, 0.008], pos: [0, 0.795, 0.053], decal: 2, color: '#0f172a' },
            { t: 'box', s: [0.02, 0.07, 0.01], pos: [-0.5, 1.38, 0.06], decal: 3, color: '#111827', anim: { type: 'blink', fade: true, wave: 'square', rate: 2 } }
          ] },
        { id: 'tastiera', name: 'Tastatur', color: '#334155', pos: [-0.9, 0.03, 0.75], explode: [0, 0, 0.75],
          info: '<p>Sie ist ein <b>Eingabegerät</b> (Input): Jede Taste, die du drückst, schließt einen kleinen Stromkreis und schickt dem Computer einen <b>Code</b>, eine Zahl, die den Buchstaben angibt.</p>',
          more: '<p>Die Anordnung der Buchstaben heißt <b>QWERTY</b> (die ersten sechs Buchstaben oben links) und wurde um 1870 für Schreibmaschinen erfunden. (Auf deutschen Tastaturen ist es meist QWERTZ.)</p>',
          shapes: [ { t: 'box', s: [1.9, 0.06, 0.62] } ].concat(keys) },
        { id: 'mouse', name: 'Maus', color: '#e5e7eb', pos: [0.55, 0.0, 0.85], explode: [0.6, 0, 0.6],
          info: '<p>Auch die Maus ist ein <b>Eingabegerät</b>: Eine kleine Kamera an der Unterseite schaut auf den Tisch und erkennt, wie du sie bewegst; so wandert der Pfeil über den Bildschirm.</p>',
          more: '<p>Der optische Sensor macht Tausende „Fotos“ pro Sekunde von der Oberfläche und vergleicht sie, um die Bewegung zu berechnen. Die erste Maus (1964, Douglas Engelbart) war aus Holz!</p>',
          shapes: [
            { t: 'sphere', r: 1, n: 10, hemi: true, scale: [0.17, 0.12, 0.27] },
            { t: 'cyl', r: 0.028, h: 0.03, n: 12, pos: [0, 0.115, -0.1], rot: [0, 0, 90], color: '#ef4444' },
            { t: 'box', s: [0.004, 0.02, 0.14], pos: [0, 0.11, -0.13], color: '#94a3b8' }
          ] }
      ]
    },
    steps: [
      { icon: '🔌', title: 'Es geht an!', focus: ['alimentatore', 'case'], explode: 0.25, view: { rx: 0.3, ry: -0.2 },
        html: '<p>Drücke den <b>grünen Knopf</b> am Gehäuse. Das <b>Netzteil</b> nimmt den Strom aus der Steckdose und wandelt ihn in schwächeren Strom um, der für die empfindlichen Schaltkreise des Computers geeignet ist.</p><p class="tip">⚠️ Öffne niemals einen eingeschalteten Computer oder einen, der an der Steckdose hängt!</p>' },
      { icon: '🏙️', title: 'Die Hauptplatine verbindet alles', focus: ['scheda-madre'], explode: 0.5,
        html: '<p>Der Strom gelangt zur <b>Hauptplatine</b>. Sie ist wie eine Stadt: Die Kupferleiterbahnen sind Straßen, auf denen Strom und Daten von einem Teil zum anderen wandern.</p><p>Zuerst startet ein kleines Programm (das <b>BIOS</b>), das prüft, ob alles funktioniert.</p>' },
      { icon: '📦', title: 'Vom Lager zum Arbeitstisch', focus: ['ssd', 'ram'], explode: 0.75,
        html: '<p>Die Programme sind auf der <b>SSD</b> gespeichert, dem Lager, das nie vergisst. Wenn du ein Spiel öffnest, werden seine Daten in den <b>RAM</b> kopiert, den Arbeitstisch: Er ist blitzschnell, leert sich aber, wenn du ausschaltest.</p><p class="tip">🧠 Es ist, als würdest du ein Buch aus dem Regal (SSD) nehmen und auf dem Tisch (RAM) aufschlagen.</p>' },
      { icon: '🧠', title: 'Die CPU führt die Anweisungen aus', focus: ['cpu', 'ram'], explode: 0.85,
        html: '<p>Die <b>CPU</b> liest die Anweisungen des Programms aus dem RAM und führt sie eine nach der anderen aus: addieren, vergleichen, entscheiden. Sie tut das <b>Milliarden Mal pro Sekunde</b>!</p><p>Für sie besteht alles aus <b>0 und 1</b>: Strom aus oder an.</p>' },
      { icon: '🌬️', title: 'Abkühlen!', focus: ['dissipatore', 'ventola-cpu', 'ventola-case', 'cpu'], explode: 0.5,
        html: '<p>Viel Arbeit erzeugt <b>Wärme</b>. Der <b>Kühlkörper</b> sammelt sie mit seinen Lamellen, der <b>Lüfter</b> bläst die warme Luft weg und der Gehäuselüfter befördert sie nach draußen.</p><p>Ohne Kühlung würde sich die CPU von selbst abschalten, um nicht zu verbrennen.</p>' },
      { icon: '🎨', title: 'Die Grafikkarte zeichnet', focus: ['scheda-video', 'monitor'], explode: 0.6,
        html: '<p>Die <b>Grafikkarte</b> berechnet die Farbe jedes Pixels und schickt das Bild über ein Kabel etwa 60-mal pro Sekunde an den <b>Monitor</b>: Deshalb siehst du, wie sich die Dinge flüssig bewegen.</p>' },
      { icon: '⌨️', title: 'Du hast das Kommando: Eingabe und Ausgabe', focus: ['tastiera', 'mouse', 'monitor'], explode: 0, view: { rx: 0.45, ry: -0.6 },
        html: '<p><b>Tastatur und Maus</b> sind <b>Eingabegeräte</b> (Input): Sie bringen deine Befehle in den Computer. Der <b>Monitor</b> ist ein <b>Ausgabegerät</b> (Output).</p><p class="tip">🔁 Eingabe → Verarbeitung (CPU) → Ausgabe: Das ist der Kreislauf jedes Computers, auch des Smartphones!</p>' }
    ],
    facts: [
      { icon: '🐘', title: 'Der Riese ENIAC', html: 'Einer der ersten Computer, der ENIAC (1946), wog 27 Tonnen und füllte einen ganzen Raum. Dein Handy ist millionenfach leistungsfähiger!' },
      { icon: '🦋', title: 'Der erste „Bug“', html: 'Im Jahr 1947 blieb eine Motte in einem Computer stecken und legte ihn lahm. Seitdem nennt man Programmfehler <i>Bugs</i>, also „Käfer“.' },
      { icon: '🔬', title: 'Milliarden von Schaltern', html: 'Eine moderne CPU enthält Dutzende Milliarden Transistoren, jeder tausendmal dünner als ein Haar.' },
      { icon: '0️⃣', title: 'Nur 0 und 1', html: 'Texte, Fotos, Musik und Videos sind im Computer sehr lange Reihen aus 0 und 1: der <b>Binärcode</b>.' }
    ],
    quiz: [
      { type: 'mc', q: 'Welches Teil ist das „Gehirn“, das die Anweisungen ausführt?', options: ['Der RAM', 'Die CPU', 'Der Monitor', 'Das Netzteil'], answer: 1, explain: 'Die CPU (der Prozessor) führt die Anweisungen der Programme aus, Milliarden Mal pro Sekunde.' },
      { type: 'tf', q: 'Wenn du den Computer ausschaltest, bleiben die Daten im RAM gespeichert.', answer: false, explain: 'Der RAM wird gelöscht, wenn der Strom fehlt: Die Daten bleiben dagegen auf der SSD.' },
      { type: 'mc', q: 'Wozu dienen Kühlkörper und Lüfter?', options: ['Um Lärm zu machen', 'Um die Wärme abzuführen', 'Um Dateien zu speichern', 'Um sich mit dem Internet zu verbinden'], answer: 1, explain: 'Die CPU wird heiß: Die Lamellen des Kühlkörpers sammeln die Wärme und der Lüfter bläst sie weg.' },
      { type: 'mc', q: 'Welches dieser Geräte ist ein AUSGABEgerät (Output)?', options: ['Tastatur', 'Maus', 'Monitor', 'Mikrofon'], answer: 2, explain: 'Der Monitor zeigt die Ergebnisse: Er ist ein Ausgabegerät. Tastatur, Maus und Mikrofon sind Eingabegeräte.' },
      { type: 'mc', q: 'Was macht das Netzteil?', options: ['Es wandelt den Strom aus der Steckdose in Strom um, der zu den Schaltkreisen passt', 'Es zeichnet die Bilder', 'Es kühlt die Grafikkarte', 'Es bewahrt die Fotos auf'], answer: 0, explain: 'Es senkt die 230 V der Steckdose auf 12, 5 und 3,3 V Gleichstrom ab.' },
      { type: 'order', q: 'Bringe die Reise eines Programms, das du öffnest, in die richtige Reihenfolge', items: ['Es ist auf der SSD gespeichert', 'Es wird in den RAM kopiert', 'Die CPU führt seine Anweisungen aus', 'Das Ergebnis erscheint auf dem Monitor'], explain: 'Lager (SSD) → Arbeitstisch (RAM) → Gehirn (CPU) → Ausgabe (Monitor).' }
    ]
  });
})();
