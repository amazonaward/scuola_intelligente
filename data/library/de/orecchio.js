/* L'orecchio (destro, visto da davanti-sotto). Il suono arriva da sinistra (−x) da un diapason, entra nel condotto lungo +x,
   fa vibrare timpano e ossicini e arriva alla coclea; a destra il nervo acustico va verso il cervello. */
(function () {
  const V = 6;                                                     // velocità delle vibrazioni
  const C = [1.4, -0.2, 0.05];                                      // centro della coclea
  const spiral = (() => { const p = []; for (let i = 0; i <= 40; i++) { const t = i / 40 * 2.6, a = Math.PI + t * Math.PI * 2, r = 0.55 * (1 - 0.3 * t); p.push([C[0] + r * Math.cos(a), C[1] + r * Math.sin(a), C[2] + 0.1 * t]); } return p; })();
  const CANAL = [[-1.95, 0.05, 0.05], [-1.3, 0.12, 0.0], [-0.6, 0.0, 0.0], [-0.06, 0, 0]];
  const NERVE = [[C[0], C[1], C[2] + 0.2], [1.8, 0.0, 0.1], [2.3, 0.2, 0.05], [2.9, 0.3, 0.0]];
  const rings = Array.from({ length: 4 }, (_, k) => ({ t: 'torus', R: 0.55, r: 0.03, n: 28, m: 5, rot: [0, 0, 90], pos: [-3.2, 0.05, 0.05], color: '#38bdf8',
    anim: [ { type: 'move', dir: [0, -1, 0], amp: 3.1, wave: 'saw', rate: 0.5, phase: k / 4 }, { type: 'scale', from: 1.1, to: 0.35, wave: 'saw', rate: 0.5, phase: k / 4 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.5, phase: k / 4 } ] }));
  const fluid = Array.from({ length: 9 }, (_, k) => ({ t: 'sphere', r: 0.045, n: 6, m: 8, pos: spiral[0], color: '#7dd3fc', anim: { type: 'path', pts: spiral, wave: 'saw', rate: 0.4, phase: k / 9 } }));

  LIBRARY({
    lang: 'de',
    id: 'orecchio',
    title: 'Das Ohr',
    intro: 'Das Ohr verwandelt die <b>Schwingungen der Luft</b> in Signale für das Gehirn. Tief im Kopf verbirgt es den kleinsten Muskel, den kleinsten Knochen des Körpers und eine „Schnecke“ voller Flüssigkeit. Folge der Reise des Schalls!',
    model: {
      rx: 0.15, ry: 0.6, speed: 0.4, height: 470, bg: 'body', fit: 1.05,
      parts: [
        { id: 'diapason', name: 'Stimmgabel (die Schallquelle)', label: 'Stimmgabel', color: '#9ca3af', pos: [-3.5, -0.6, 0], explode: [-0.6, 0, 0],
          info: '<p>Schall entsteht, wenn etwas <b>schwingt</b>. Wird die Stimmgabel angeschlagen, schwingt sie hunderte Male pro Sekunde hin und her und schiebt die Luft um sich herum an.</p>',
          more: '<p>Die Stimmgabel der Musiker schwingt 440-mal pro Sekunde (440 Hertz): Das ist der Ton <b>A</b>, mit dem man Instrumente stimmt. Mehr Schwingungen pro Sekunde = höherer Ton.</p>',
          shapes: [ { t: 'cyl', r: 0.05, h: 0.6, n: 12, pos: [0, -0.3, 0] }, { t: 'sphere', r: 0.08, n: 8, m: 12, pos: [0, -0.62, 0], color: '#6b7280' },
            { t: 'torus', R: 0.15, r: 0.045, n: 16, m: 8, arc: 180, rot: [90, 0, 0], pos: [0, 0.15, 0] },
            { t: 'group', pos: [0.15, 0.15, 0], anim: { type: 'swing', axis: 'z', amp: 1.5, rate: V }, shapes: [ { t: 'box', s: [0.08, 1.1, 0.1], pos: [0, 0.55, 0] } ] },
            { t: 'group', pos: [-0.15, 0.15, 0], anim: { type: 'swing', axis: 'z', amp: -1.5, rate: V }, shapes: [ { t: 'box', s: [0.08, 1.1, 0.1], pos: [0, 0.55, 0] } ] } ] },
        { id: 'onde', name: 'Schallwellen', label: 'Schallwellen', color: '#38bdf8', explode: [0, 0, 0], chip: true,
          info: '<p>Die Schwingungen werden von einem Luftteilchen zum nächsten weitergegeben, wie ein Schubs in einer Reihe von Menschen: Das sind die <b>Schallwellen</b>. Sie kommen bis zu unserem Ohr.</p>',
          more: '<p>In der Luft breitet sich der Schall mit etwa <b>340 Metern pro Sekunde</b> aus, im Wasser ist er 4-mal so schnell. Im leeren Weltraum breitet er sich nicht aus: Dort herrscht völlige Stille.</p>',
          shapes: rings },
        { id: 'padiglione', name: 'Ohrmuschel', label: 'Ohrmuschel', color: '#f5c6a5', explode: [-1.0, 0, 0],
          info: '<p>Das ist der Teil, den wir sehen und „Ohr“ nennen. Mit ihren Rundungen fängt sie die Töne wie ein <b>Trichter</b> auf und leitet sie in den Gehörgang.</p>',
          more: '<p>Die Falten der Ohrmuschel verändern den Schall ein wenig, je nachdem, aus welcher Richtung er kommt: So erkennt das Gehirn, ob ein Geräusch von vorn, von hinten oder von oben kommt. Sie besteht aus <b>Knorpel</b>, nicht aus Knochen.</p>',
          shapes: [ { t: 'sphere', r: 1, n: 14, m: 24, scale: [0.07, 1.05, 0.62], pos: [-1.97, 0.3, -0.1] },
            { t: 'pipe', r: 0.1, n: 10, curve: true, pts: [[-2.05, -0.15, 0.36], [-2.1, 0.55, 0.47], [-2.12, 1.1, 0.28], [-2.12, 1.3, -0.12], [-2.11, 0.95, -0.52], [-2.08, 0.3, -0.64], [-2.07, -0.35, -0.55], [-2.07, -0.75, -0.3]], color: '#f0b48e' },
            { t: 'sphere', r: 1, n: 10, m: 16, scale: [0.1, 0.32, 0.24], pos: [-2.02, -0.78, -0.18], color: '#f5c6a5' },
            { t: 'lathe', n: 24, rot: [0, 0, 90], pos: [-2.0, 0.08, 0.0], pts: [[0, -0.02], [0.2, 0.0], [0.34, 0.09], [0.38, 0.13]], ds: true, color: '#e8a782' },
            { t: 'pipe', r: 0.06, n: 8, curve: true, pts: [[-2.08, 0.75, 0.25], [-2.08, 0.85, -0.15], [-2.07, 0.45, -0.35]], color: '#f0b48e' },
            { t: 'sphere', r: 0.1, n: 8, m: 10, scale: [0.6, 1, 0.8], pos: [-2.07, 0.02, 0.36], color: '#f0b48e' } ] },
        { id: 'condotto', name: 'Gehörgang', label: 'Gehörgang', color: '#f9a8d4', alpha: 0.45, explode: [-0.5, 0, 0.3],
          info: '<p>Ein kleines Rohr von etwa <b>2,5 cm</b> Länge, das den Schall bis zum Trommelfell führt. Es hat kleine Härchen und bildet das <b>Ohrenschmalz</b>, das Staub und Insekten festhält.</p>',
          more: '<p>Das Ohrenschmalz wandert ganz von allein langsam nach außen: Deshalb soll man keine Wattestäbchen ins Ohr stecken, sonst schiebt man es womöglich zum Trommelfell hin.</p>',
          shapes: [ { t: 'pipe', r: 0.2, n: 18, curve: true, pts: CANAL, caps: false } ] },
        { id: 'timpano', name: 'Trommelfell', color: '#fda4af', alpha: 0.85, explode: [0, 0.3, 0.6], anim: { type: 'move', dir: [1, 0, 0], amp: 0.035, rate: V },
          info: '<p>Eine dünne, straff gespannte Haut wie das Fell einer Trommel am Ende des Gehörgangs. Wenn der Schall ankommt, <b>schwingt</b> sie mit der Luft mit.</p>',
          more: '<p>Das Trommelfell ist nur einen zehntel Millimeter dick und schwingt sogar bei Bewegungen, die kleiner sind als ein Atom! Ein zu lauter Knall kann es aber beschädigen.</p>',
          shapes: [ { t: 'cone', r: 0.3, h: 0.1, n: 28, rot: [0, 0, -90], pos: [0, 0, 0] }, { t: 'torus', R: 0.3, r: 0.025, n: 28, m: 6, rot: [0, 0, 90], color: '#e11d48', alpha: 1 } ] },
        { id: 'martello', name: 'Hammer', color: '#fef3c7', explode: [0.1, 0.8, 0.5], anim: { type: 'swing', axis: 'z', amp: -3, rate: V, pivot: [0.13, 0.5, 0] },
          info: '<p>Das erste der drei <b>Gehörknöchelchen</b>. Sein „Stiel“ ist am Trommelfell befestigt: Wenn das Trommelfell schwingt, bewegt sich der Hammer mit.</p>',
          shapes: [ { t: 'pipe', r: 0.04, n: 8, curve: true, pts: [[0.03, -0.05, 0], [0.05, 0.2, 0], [0.1, 0.42, 0]] }, { t: 'sphere', r: 0.1, n: 10, m: 14, pos: [0.13, 0.52, 0] } ] },
        { id: 'incudine', name: 'Amboss', color: '#fde68a', explode: [0.3, 0.9, 0.5], anim: { type: 'swing', axis: 'z', amp: 3, rate: V, pivot: [0.32, 0.55, 0] },
          info: '<p>Das zweite Gehörknöchelchen, geformt wie der Amboss eines Schmieds. Es bekommt den Stoß vom Hammer und gibt ihn an den Steigbügel weiter.</p>',
          shapes: [ { t: 'sphere', r: 0.1, n: 10, m: 14, scale: [1.1, 0.9, 0.9], pos: [0.3, 0.52, 0] }, { t: 'pipe', r: 0.035, n: 8, curve: true, pts: [[0.33, 0.47, 0], [0.42, 0.33, 0], [0.45, 0.19, 0]] }, { t: 'pipe', r: 0.03, n: 8, pts: [[0.36, 0.56, 0], [0.55, 0.6, -0.02]] } ] },
        { id: 'staffa', name: 'Steigbügel', color: '#fcd34d', explode: [0.5, 0.7, 0.5], anim: { type: 'move', dir: [1, 0, 0], amp: 0.025, rate: V },
          info: '<p>Das dritte Gehörknöchelchen, geformt wie ein Steigbügel zum Reiten: Es ist <b>der kleinste Knochen des Körpers</b> (etwa 3 mm). Wie ein Kolben drückt es auf das „ovale Fenster“ der Hörschnecke.</p>',
          more: '<p>Die drei Gehörknöchelchen arbeiten wie ein <b>Hebel</b>: Der Druck, der am ovalen Fenster ankommt, ist etwa <b>20-mal</b> stärker als der am Trommelfell. Das ist nötig, weil der Schall von der Luft in die Flüssigkeit der Hörschnecke übergehen muss.</p>',
          shapes: [ { t: 'pipe', r: 0.022, n: 6, curve: true, pts: [[0.46, 0.18, 0], [0.56, 0.22, 0.05], [0.68, 0.17, 0.06]] }, { t: 'pipe', r: 0.022, n: 6, curve: true, pts: [[0.46, 0.18, 0], [0.56, 0.12, -0.05], [0.68, 0.13, -0.06]] },
            { t: 'cyl', r: 0.08, h: 0.025, n: 16, rot: [0, 0, 90], scale: [1, 1, 0.6], pos: [0.7, 0.15, 0] } ] },
        { id: 'cassa', name: 'Paukenhöhle (Mittelohr)', label: 'Mittelohr', color: '#fecdd3', alpha: 0.16, explode: [0.2, 0.4, 0.4],
          info: '<p>Ein kleiner Hohlraum, gefüllt mit <b>Luft</b>, hinter dem Trommelfell: Hier liegen die drei Gehörknöchelchen. Das ist das <b>Mittelohr</b>.</p>',
          shapes: [ { t: 'sphere', r: 0.55, n: 14, m: 22, scale: [1, 1.05, 0.8], pos: [0.35, 0.22, 0] } ] },
        { id: 'tromba', name: 'Eustachische Röhre', label: 'Eustachische Röhre', color: '#f9a8d4', explode: [0.2, -0.4, 0.5],
          info: '<p>Ein Kanal, der das Mittelohr mit dem Rachen verbindet. Er lässt Luft hinein und hinaus, damit auf beiden Seiten des Trommelfells der gleiche Druck herrscht.</p>',
          more: '<p>Wenn du im Flugzeug oder in den Bergen die Ohren wie „zugestopft“ spürst, öffnet Schlucken oder Gähnen die Eustachische Röhre: Du hörst ein „Klick“ und der Druck gleicht sich aus.</p>',
          shapes: [ { t: 'pipe', r: 0.07, n: 10, curve: true, pts: [[0.45, -0.25, 0.05], [0.6, -0.7, 0.25], [0.75, -1.2, 0.5], [0.85, -1.55, 0.65]] }, { t: 'cyl', r: 0.12, r2: 0.07, h: 0.18, n: 14, pos: [0.87, -1.62, 0.68], rot: [20, 0, -15] } ] },
        { id: 'coclea', name: 'Hörschnecke (Cochlea)', label: 'Hörschnecke', color: '#fbcfe8', explode: [0.7, -0.3, 0.3],
          info: '<p>Ein kleines Rohr, aufgerollt wie das Haus einer <b>Schnecke</b> und voller Flüssigkeit. Der Steigbügel bringt die Flüssigkeit in Bewegung, und Tausende <b>Haarzellen</b> verwandeln die Bewegung in elektrische Signale.</p>',
          more: '<p>Jeder Abschnitt der Hörschnecke „hört“ andere Töne: der Anfang (nahe dem Steigbügel) die <b>hohen</b>, die Spitze die <b>tiefen</b> Töne. Es gibt etwa 15 000 Haarzellen, und sie wachsen nicht nach: Zu laute Geräusche (Kopfhörer auf voller Lautstärke!) können sie für immer zerstören.</p>',
          shapes: [ { t: 'pipe', r: 0.13, n: 14, curve: true, pts: spiral }, { t: 'sphere', r: 0.15, n: 10, m: 14, pos: spiral[spiral.length - 1], color: '#f9a8d4' } ] },
        { id: 'liquido', name: 'Bewegte Flüssigkeit', label: 'Flüssigkeit', color: '#7dd3fc', explode: [0.7, -0.3, 0.3], chip: true,
          info: '<p>Wenn der Steigbügel drückt, entsteht in der Flüssigkeit der Hörschnecke eine Welle, die durch die Schnecke läuft und die Härchen der Zellen verbiegt.</p>',
          shapes: fluid },
        { id: 'canali', name: 'Bogengänge (Gleichgewicht)', label: 'Bogengänge', color: '#f9a8d4', explode: [0.6, 0.8, 0],
          info: '<p>Drei mit Flüssigkeit gefüllte Ringe, einer für jede Richtung im Raum. Wenn du den Kopf bewegst, verschiebt sich die Flüssigkeit, und das Gehirn merkt, wie du gedreht bist: Sie sind für das <b>Gleichgewicht</b> da!</p>',
          more: '<p>Wenn du dich im Kreis drehst und plötzlich stehen bleibst, bewegt sich die Flüssigkeit noch ein Weilchen weiter: Darum wird dir schwindelig. Zusammen mit den Bogengängen spüren zwei kleine Bläschen (Utriculus und Sacculus) die Schwerkraft und das Beschleunigen.</p>',
          shapes: [ { t: 'sphere', r: 0.18, n: 12, m: 16, pos: [0.88, 0.22, 0], color: '#fbcfe8' },
            { t: 'torus', R: 0.3, r: 0.045, n: 26, m: 8, arc: 290, rot: [90, 0, 120], pos: [1.0, 0.62, 0.05] },
            { t: 'torus', R: 0.28, r: 0.045, n: 26, m: 8, arc: 290, rot: [0, 30, 90], pos: [1.12, 0.55, -0.3] },
            { t: 'torus', R: 0.27, r: 0.045, n: 26, m: 8, arc: 290, rot: [0, 200, 0], pos: [1.25, 0.32, 0.05] } ] },
        { id: 'nervo', name: 'Hörnerv', label: 'Hörnerv', color: '#fde047', explode: [1.0, 0, 0],
          info: '<p>Er trägt die elektrischen Signale der Hörschnecke und der Gleichgewichtsorgane bis zum <b>Gehirn</b>. Das Gehirn erkennt eine Stimme, ein Lied oder das Miauen der Katze.</p>',
          shapes: [ { t: 'pipe', r: 0.09, n: 12, curve: true, pts: NERVE }, { t: 'pipe', r: 0.06, n: 10, curve: true, pts: [[0.95, 0.25, 0.05], [1.5, 0.15, 0.1], [1.8, 0.0, 0.1]] } ]
            .concat(Array.from({ length: 5 }, (_, k) => ({ t: 'sphere', r: 0.055, n: 6, m: 8, pos: NERVE[0], color: '#ffffff', anim: [ { type: 'path', pts: NERVE, wave: 'saw', rate: 0.8, phase: k / 5 }, { type: 'blink', color: '#38bdf8', rate: 1.6, phase: k / 5 } ] }))) }
      ]
    },
    steps: [
      { icon: '🔔', title: 'Schall ist eine Schwingung', focus: ['diapason', 'onde', 'padiglione'], view: { rx: 0.1, ry: 0.5 },
        html: '<p>Wenn etwas schwingt, wie die <b>Stimmgabel</b>, schiebt es die Luft vor und zurück. Die Schwingungen wandern als <b>Wellen</b> durch die Luft, bis sie unsere Ohren erreichen.</p><p class="tip">✋ Lege die Finger an den Hals und sag „aaa“: Du spürst, wie die Stimmbänder schwingen!</p>' },
      { icon: '👂', title: 'Das Außenohr sammelt den Schall', focus: ['padiglione', 'condotto', 'onde', 'timpano'], view: { rx: 0.15, ry: 0.95 }, zoom: 1.3,
        html: '<p>Die <b>Ohrmuschel</b> fängt die Töne wie ein Trichter auf und schickt sie in den <b>Gehörgang</b>. Am Ende liegt das <b>Trommelfell</b>, eine gespannte Haut wie das Fell einer Trommel.</p>' },
      { icon: '🥁', title: 'Das Trommelfell schwingt', focus: ['timpano', 'martello', 'incudine', 'staffa', 'cassa'], view: { rx: 0.1, ry: -0.3 }, zoom: 2.4,
        html: '<p>Der Schall bringt das <b>Trommelfell zum Schwingen</b>. Dahinter, im <b>Mittelohr</b>, geben drei Gehörknöchelchen, <b>Hammer</b>, <b>Amboss</b> und <b>Steigbügel</b>, die Schwingung weiter und machen sie stärker, wie ein Hebel.</p><p class="tip">🦴 Der Steigbügel ist der kleinste Knochen des Körpers: Er ist so groß wie ein Reiskorn!</p>' },
      { icon: '🐌', title: 'In der Schnecke', focus: ['coclea', 'liquido', 'staffa', 'nervo'], view: { rx: 0.1, ry: -0.2 }, zoom: 1.6,
        html: '<p>Der Steigbügel drückt auf die Flüssigkeit der <b>Hörschnecke</b>. Die Flüssigkeit bewegt sich und verbiegt die Härchen von Tausenden Zellen, die <b>elektrische Signale</b> erzeugen. Der Anfang der Schnecke hört die hohen, die Spitze die tiefen Töne.</p>' },
      { icon: '🧠', title: 'Das Gehirn hört zu', focus: ['nervo', 'coclea', 'canali'], view: { rx: 0.2, ry: 0.4 }, zoom: 1.3,
        html: '<p>Der <b>Hörnerv</b> bringt die Signale zum Gehirn, das sie in das verwandelt, was wir „hören“: Worte, Musik, Geräusche. Mit zwei Ohren erkennt das Gehirn sogar, <b>woher</b> ein Geräusch kommt.</p>' },
      { icon: '🤸', title: 'Ohren für das Gleichgewicht', focus: ['canali', 'nervo'], view: { rx: 0.4, ry: -0.6 }, zoom: 2.0,
        html: '<p>Das Ohr ist nicht nur zum Hören da! Die drei <b>Bogengänge</b>, gefüllt mit Flüssigkeit, sagen dem Gehirn, wie sich der Kopf bewegt. So kannst du auf einem Bein stehen, ohne umzufallen.</p>' },
      { icon: '🌬️', title: 'Das Druckventil', focus: ['tromba', 'cassa', 'timpano'], view: { rx: -0.1, ry: -0.5 }, zoom: 1.6,
        html: '<p>Die <b>Eustachische Röhre</b> verbindet das Mittelohr mit dem Rachen und gleicht den Luftdruck aus. Deshalb gehen die Ohren im Flugzeug beim Schlucken oder Gähnen wieder „auf“.</p><p class="tip">🎧 Schütze deine Ohren: Mit Kopfhörern nie lauter als halbe Lautstärke!</p>' }
    ],
    facts: [
      { icon: '🔊', title: 'Gemessen in Dezibel', html: 'Die Stärke des Schalls misst man in <b>Dezibel</b> (dB): Ein Flüstern hat 30 dB, ein Gespräch 60 dB, ein Rockkonzert 110 dB. Über 85 dB schadet es dem Gehör, wenn es lange andauert.' },
      { icon: '🐕', title: 'Töne, die wir nicht hören', html: 'Wir hören Töne von 20 bis 20 000 Schwingungen pro Sekunde. Hunde kommen bis 45 000, Fledermäuse und Delfine über 100 000 (Ultraschall)!' },
      { icon: '😴', title: 'Immer an', html: 'Die Ohren „schalten“ nie ab, nicht einmal im Schlaf: Das Gehirn überhört nur die Geräusche, aber ein Wecker oder dein Name wecken dich.' },
      { icon: '🦉', title: 'Schiefe Ohren', html: 'Die Schleiereule hat ein Ohr höher als das andere: So erkennt sie genau, wo sich im Dunkeln eine kleine Maus versteckt.' },
      { icon: '🎤', title: 'Deine aufgenommene Stimme', html: 'Deine aufgenommene Stimme klingt komisch, weil du sie beim Sprechen auch durch die <b>Schädelknochen</b> hörst, und die machen sie tiefer.' }
    ],
    quiz: [
      { type: 'order', q: 'Bring die Reise des Schalls in die richtige Reihenfolge', items: ['Ohrmuschel', 'Gehörgang', 'Trommelfell', 'Gehörknöchelchen', 'Hörschnecke', 'Hörnerv'], explain: 'Vom Außenohr ins Mittelohr, dann ins Innenohr und schließlich zum Gehirn.' },
      { type: 'mc', q: 'Welcher ist der kleinste Knochen des menschlichen Körpers?', options: ['Der Hammer', 'Der Steigbügel', 'Die Kniescheibe', 'Der Amboss'], answer: 1, explain: 'Der Steigbügel im Mittelohr ist etwa 3 mm groß.' },
      { type: 'mc', q: 'Was enthält die Hörschnecke?', options: ['Luft', 'Flüssigkeit', 'Sand', 'Blut'], answer: 1, explain: 'Die Hörschnecke ist voller Flüssigkeit: Ihre Bewegung verbiegt die Haarzellen.' },
      { type: 'tf', q: 'Die Bogengänge sind für das Gleichgewicht da.', answer: true, explain: 'Die Flüssigkeit in den drei Ringen meldet dem Gehirn die Bewegungen des Kopfes.' },
      { type: 'mc', q: 'Was ist Schall?', options: ['Ein unsichtbares Licht', 'Eine Schwingung, die sich durch die Luft ausbreitet', 'Ein Gas', 'Ein elektrischer Strom'], answer: 1, explain: 'Schall ist eine Schwingung, die sich in einem Stoff ausbreitet, wie Luft oder Wasser.' },
      { type: 'mc', q: 'Warum gehen die Ohren im Flugzeug beim Schlucken „auf“?', options: ['Weil der Gehörgang gereinigt wird', 'Weil sich die Eustachische Röhre öffnet und der Druck ausgeglichen wird', 'Weil das Trommelfell schwingt', 'Weil sich die Hörschnecke schließt'], answer: 1, explain: 'Die Eustachische Röhre verbindet Mittelohr und Rachen und gleicht den Druck aus.' }
    ]
  });
})();
