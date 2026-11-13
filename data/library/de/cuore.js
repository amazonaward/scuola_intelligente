/* Il cuore umano, visto da davanti (la sinistra del corpo è a destra dello schermo: +x).
   Ciclo cardiaco (cycle 1): 0–0.16 contraggono gli atri; 0.2–0.55 contraggono i ventricoli. */
(function () {
  const ell = (pos, sc, rot) => ({ t: 'sphere', r: 1, n: 14, m: 24, pos, scale: sc, rot });
  /* valvola: anello + due lembi che si aprono (sign 1 = verso il basso, -1 = verso l'alto) */
  const valve = (win, sign) => [
    { t: 'torus', R: 0.13, r: 0.022, n: 24, m: 6 },
    { t: 'group', pos: [-0.12, 0, 0], anim: { type: 'swing', axis: 'z', amp: -65 * sign, wave: 'window', from: win[0], to: win[1], ramp: 0.25 }, shapes: [{ t: 'box', s: [0.12, 0.012, 0.2], pos: [0.06, 0, 0], color: '#fef3c7' }] },
    { t: 'group', pos: [0.12, 0, 0], anim: { type: 'swing', axis: 'z', amp: 65 * sign, wave: 'window', from: win[0], to: win[1], ramp: 0.25 }, shapes: [{ t: 'box', s: [0.12, 0.012, 0.2], pos: [-0.06, 0, 0], color: '#fef3c7' }] }
  ];
  const BLUE = [[-0.8, 1.45, 0.1], [-0.75, 0.5, 0.12], [-0.55, 0.1, 0.25], [-0.38, -0.45, 0.32], [-0.22, 0.0, 0.4], [-0.15, 0.4, 0.42], [-0.05, 0.8, 0.45], [0.2, 1.05, 0.3], [0.75, 1.0, 0.05], [1.2, 1.0, -0.1]];
  const RED = [[1.2, 0.42, -0.4], [0.7, 0.45, -0.35], [0.42, 0.48, -0.3], [0.38, 0.1, -0.18], [0.36, -0.6, -0.05], [0.2, -0.1, 0.0], [0.12, 0.38, 0.0], [0.12, 0.9, 0.05], [0.2, 1.35, 0], [0.5, 1.5, -0.25], [0.75, 1.3, -0.5], [0.8, 0.6, -0.55], [0.8, -0.6, -0.55]];
  const drops = (path, color) => Array.from({ length: 10 }, (_, k) => ({ t: 'sphere', r: 0.055, n: 6, m: 8, pos: path[0], color, anim: { type: 'path', pts: path, wave: 'saw', rate: 0.25, phase: k / 10 } }));
  const AV = [0.58, 0.19], SL = [0.22, 0.52];
  const squeeze = (win, amt) => ({ type: 'scale', from: 1, to: amt, wave: 'window', win, ramp: 0.45 });

  LIBRARY({
    id: 'cuore',
    lang: 'de',
    title: 'Das menschliche Herz',
    intro: 'Das Herz ist ein Muskel, so groß wie deine Faust, der etwa <b>100 000-mal am Tag</b> schlägt. Es ist eine <b>Doppelpumpe</b>: Die rechte Seite schickt das Blut zur Lunge, die linke in den ganzen Körper.',
    model: {
      rx: 0.12, ry: -0.25, speed: 0.75, height: 480, bg: 'body',
      phases: [ { from: 0, to: 0.18, label: 'Vorhöfe: ziehen sich zusammen', color: '#7c3aed' }, { from: 0.18, to: 0.56, label: 'Kammern: ziehen sich zusammen (Systole)', color: '#dc2626' }, { from: 0.56, to: 1, label: 'Ruhe und Füllung (Diastole)', color: '#0891b2' } ],
      parts: [
        { id: 'atrio-destro', name: 'Rechter Vorhof', color: '#818cf8', alpha: 0.5, explode: [-0.6, 0.35, 0.2], anim: Object.assign(squeeze([0, 0.17], 0.84), { pivot: [-0.72, 0.42, 0.12] }),
          info: '<p>Er ist das „Wartezimmer“ auf der rechten Seite: Hier kommt das <b>sauerstoffarme</b> Blut an, das über die Hohlvenen aus dem Körper zurückkehrt.</p>', shapes: [ ell([-0.72, 0.42, 0.12], [0.45, 0.45, 0.42]) ] },
        { id: 'ventricolo-destro', name: 'Rechte Kammer', color: '#4f46e5', alpha: 0.5, explode: [-0.45, -0.4, 0.5], anim: Object.assign(squeeze([0.19, 0.56], 0.84), { pivot: [-0.32, -0.38, 0.32] }),
          info: '<p>Sie drückt das sauerstoffarme Blut in die <b>Lungenarterie</b>, zur Lunge hin. Ihre Wände sind dünner als die der linken Kammer: Die Lunge ist ja nah.</p>', shapes: [ ell([-0.32, -0.38, 0.32], [0.6, 0.8, 0.42], [0, 0, -15]) ] },
        { id: 'atrio-sinistro', name: 'Linker Vorhof', color: '#fca5a5', alpha: 0.5, explode: [0.55, 0.45, -0.35], anim: Object.assign(squeeze([0, 0.17], 0.84), { pivot: [0.42, 0.48, -0.3] }),
          info: '<p>Er nimmt das <b>sauerstoffreiche</b> Blut auf, das über die Lungenvenen aus der Lunge kommt.</p>', shapes: [ ell([0.42, 0.48, -0.3], [0.45, 0.36, 0.4]) ] },
        { id: 'ventricolo-sinistro', name: 'Linke Kammer', color: '#dc2626', alpha: 0.5, explode: [0.55, -0.5, -0.1], anim: Object.assign(squeeze([0.19, 0.56], 0.86), { pivot: [0.3, -0.45, -0.05] }),
          info: '<p>Sie ist die stärkste Kammer: Mit ihrer dicken Muskelwand drückt sie das sauerstoffreiche Blut in die <b>Aorta</b> und von dort in den ganzen Körper, bis in die Zehenspitzen.</p>',
          more: '<p>Bei jedem Schlag pumpt die linke Kammer etwa <b>70 ml</b> Blut: in einer Minute etwa 5 Liter, also das ganze Blut, das du im Körper hast!</p>', shapes: [ ell([0.3, -0.45, -0.05], [0.66, 0.95, 0.62], [0, 0, 22]) ] },
        { id: 'setto', name: 'Scheidewand', color: '#fda4af', explode: [0, -0.4, 0.15],
          info: '<p>Eine Muskelwand, die das Herz in zwei Hälften teilt: So vermischen sich das blaue Blut (rechts) und das rote (links) <b>nie</b>.</p>',
          shapes: [ { t: 'box', s: [0.06, 1.15, 0.62], pos: [-0.02, -0.38, 0.13], rot: [0, 31, 8] } ] },
        { id: 'tricuspide', name: 'Trikuspidalklappe', label: 'Trikuspidalklappe', color: '#fbbf24', pos: [-0.55, 0.06, 0.24], explode: [-0.4, 0, 0.3],
          info: '<p>Eine „Einbahntür“ zwischen rechtem Vorhof und rechter Kammer: Sie öffnet sich, damit das Blut hinunterfließt, und schließt sich, wenn die Kammer drückt, damit das Blut nicht zurückfließt.</p>', shapes: valve(AV, 1) },
        { id: 'mitrale', name: 'Mitralklappe', label: 'Mitralklappe', color: '#fbbf24', pos: [0.4, 0.1, -0.18], explode: [0.45, 0, -0.2],
          info: '<p>Die Tür zwischen linkem Vorhof und linker Kammer. Sie hat zwei Segel und sieht aus wie eine Mitra, die Bischofsmütze: daher der Name.</p>', shapes: valve(AV, 1) },
        { id: 'polmonare', name: 'Pulmonalklappe', label: 'Pulmonalklappe', color: '#fbbf24', pos: [-0.15, 0.4, 0.42], explode: [-0.2, 0.5, 0.4],
          info: '<p>Am Ausgang der rechten Kammer: Sie öffnet sich, wenn die Kammer drückt, und schließt sich gleich danach, damit das Blut nicht zurückfließt.</p>', shapes: valve(SL, -1) },
        { id: 'aortica', name: 'Aortenklappe', label: 'Aortenklappe', color: '#fbbf24', pos: [0.12, 0.36, 0.0], explode: [0.25, 0.55, 0],
          info: '<p>Am Ausgang der linken Kammer, am Anfang der Aorta. Wenn sie sich schließt, erzeugt sie einen Teil des Herzschlag-Geräuschs „bum-<b>BUM</b>“.</p>', shapes: valve(SL, -1) },
        { id: 'aorta', name: 'Aorta', color: '#ef4444', explode: [0.25, 0.85, -0.2],
          info: '<p>Die größte Arterie des Körpers: fast so dick wie ein Daumen. Sie beginnt an der linken Kammer, macht einen Bogen (den <b>Aortenbogen</b>) und bringt das sauerstoffreiche Blut in den ganzen Körper.</p>',
          shapes: [ { t: 'pipe', r: 0.14, n: 14, curve: true, pts: [[0.12, 0.33, 0], [0.12, 0.9, 0.05], [0.2, 1.35, 0], [0.5, 1.5, -0.25], [0.75, 1.3, -0.5], [0.8, 0.6, -0.55], [0.8, -0.8, -0.55]] },
            { t: 'pipe', r: 0.055, n: 10, pts: [[0.25, 1.4, -0.05], [0.2, 1.85, 0]] }, { t: 'pipe', r: 0.05, n: 10, pts: [[0.45, 1.5, -0.2], [0.45, 1.9, -0.2]] }, { t: 'pipe', r: 0.05, n: 10, pts: [[0.62, 1.45, -0.35], [0.7, 1.85, -0.4]] } ] },
        { id: 'arteria-polmonare', name: 'Lungenarterie', color: '#3b82f6', explode: [0, 0.9, 0.45],
          info: '<p>Sie bringt das <b>sauerstoffarme</b> Blut von der rechten Kammer zu den beiden Lungenflügeln. Sie ist die einzige Arterie, die „blaues“ Blut transportiert!</p>',
          shapes: [ { t: 'pipe', r: 0.13, n: 14, curve: true, pts: [[-0.15, 0.35, 0.42], [-0.08, 0.8, 0.45], [0.2, 1.05, 0.3]] },
            { t: 'pipe', r: 0.09, n: 12, curve: true, pts: [[0.2, 1.05, 0.3], [-0.3, 1.06, 0.08], [-1.05, 1.0, 0]] }, { t: 'pipe', r: 0.09, n: 12, curve: true, pts: [[0.2, 1.05, 0.3], [0.75, 1.02, 0.05], [1.25, 1.0, -0.1]] } ] },
        { id: 'vene-cave', name: 'Hohlvenen', color: '#2563eb', explode: [-0.85, 0.2, 0],
          info: '<p>Zwei große Venen bringen das verbrauchte Blut zum Herzen zurück: die <b>obere Hohlvene</b> vom Kopf und von den Armen, die <b>untere Hohlvene</b> vom restlichen Körper.</p>',
          shapes: [ { t: 'pipe', r: 0.13, n: 14, pts: [[-0.78, 0.7, 0.1], [-0.8, 1.55, 0.1]] }, { t: 'pipe', r: 0.14, n: 14, curve: true, pts: [[-0.74, 0.15, 0.06], [-0.72, -0.6, 0], [-0.7, -1.35, 0]] } ] },
        { id: 'vene-polmonari', name: 'Lungenvenen', color: '#f87171', explode: [0.5, 0.5, -0.8],
          info: '<p>Vier Venen bringen das Blut zum Herzen, das <b>gerade in der Lunge mit Sauerstoff beladen</b> wurde.</p>',
          shapes: [ [[0.2, 0.42, -0.45], [-0.55, 0.45, -0.58]], [[0.2, 0.58, -0.45], [-0.5, 0.75, -0.62]], [[0.7, 0.42, -0.35], [1.25, 0.4, -0.42]], [[0.7, 0.58, -0.35], [1.25, 0.75, -0.48]] ].map((p) => ({ t: 'pipe', r: 0.065, n: 10, pts: p })) },
        { id: 'coronarie', name: 'Herzkranzgefäße', label: 'Kranzgefäße', color: '#b91c1c', explode: [0, 0, 0.5],
          info: '<p>Auch das Herz braucht Sauerstoff! Die Kranzgefäße sind kleine Arterien, die wie ein Kranz über seine Oberfläche verlaufen und es versorgen.</p>',
          more: '<p>Wenn ein Kranzgefäß verstopft, bekommt ein Teil des Herzmuskels keinen Sauerstoff mehr: Das ist der <b>Herzinfarkt</b>. Gesunde Ernährung und Bewegung halten die Arterien sauber.</p>',
          shapes: [ { t: 'pipe', r: 0.032, n: 8, curve: true, pts: [[0.1, 0.35, 0.18], [0.0, 0.1, 0.46], [-0.05, -0.45, 0.66], [0.18, -1.05, 0.45]] },
            { t: 'pipe', r: 0.03, n: 8, curve: true, pts: [[0.0, 0.33, 0.22], [-0.5, 0.14, 0.52], [-0.9, -0.25, 0.32], [-0.75, -0.75, 0.1]] } ] },
        { id: 'nodi', name: 'Taktgeber des Herzschlags (natürlicher Schrittmacher)', label: 'Natürlicher Schrittmacher', color: '#facc15', explode: [-0.3, 0.3, 0.6],
          info: '<p>Das Herz schlägt <b>von allein</b>! Eine kleine Gruppe von Zellen im rechten Vorhof, der <b>Sinusknoten</b>, erzeugt einen kleinen elektrischen Impuls, der erst die Vorhöfe und dann, über den AV-Knoten, die Kammern zusammenziehen lässt.</p>',
          more: '<p>Die elektrischen Impulse des Herzens lassen sich mit dem <b>Elektrokardiogramm</b> (EKG) aufzeichnen. Wenn der Knoten nicht richtig funktioniert, wird ein künstlicher Herzschrittmacher eingesetzt.</p>',
          shapes: [ { t: 'sphere', r: 0.07, n: 8, pos: [-0.68, 0.8, 0.3], anim: { type: 'blink', color: '#ffffff', wave: 'window', from: 0, to: 0.08, ramp: 0.3 } },
            { t: 'sphere', r: 0.06, n: 8, pos: [-0.2, 0.06, 0.25], anim: { type: 'blink', color: '#ffffff', wave: 'window', from: 0.12, to: 0.2, ramp: 0.3 } },
            { t: 'pipe', r: 0.014, n: 6, curve: true, pts: [[-0.68, 0.8, 0.3], [-0.45, 0.4, 0.3], [-0.2, 0.06, 0.25], [-0.05, -0.5, 0.3], [0.05, -1.0, 0.25]] } ] },
        { id: 'sangue-blu', name: 'Sauerstoffarmes Blut', label: '„Blaues“ Blut', color: '#3b82f6', noLabel: true,
          info: '<p>Das Blut, das aus dem Körper zurückkehrt, hat den Sauerstoff an die Zellen abgegeben und nimmt <b>Kohlendioxid</b> mit. In Zeichnungen wird es blau gefärbt, aber in Wirklichkeit ist es dunkelrot.</p>', shapes: drops(BLUE, '#2563eb') },
        { id: 'sangue-rosso', name: 'Sauerstoffreiches Blut', label: 'Rotes Blut', color: '#ef4444', noLabel: true,
          info: '<p>In der Lunge belädt sich das Blut wieder mit <b>Sauerstoff</b> und wird leuchtend rot. Das Herz pumpt es in den ganzen Körper.</p>', shapes: drops(RED, '#ef4444') }
      ]
    },
    steps: [
      { icon: '🫀', title: 'Eine Doppelpumpe', explode: 0,
        html: '<p>Das Herz hat <b>4 Kammern</b>: zwei <b>Vorhöfe</b> oben und zwei <b>Kammern</b> unten. Die <b>rechte</b> Hälfte (auf dem Bildschirm links!) pumpt das Blut zur Lunge, die <b>linke</b> Hälfte in den ganzen Körper.</p><p class="tip">🪞 Schau dir das Herz einer Person an, die dir gegenübersteht: Ihre rechte Seite ist deine linke.</p>' },
      { icon: '⚡', title: 'Der Herzschlag startet von allein', focus: ['nodi', 'atrio-destro', 'atrio-sinistro'], loop: [0, 0.25],
        html: '<p>Der <b>Sinusknoten</b>, unser natürlicher Schrittmacher, sendet einen kleinen elektrischen Funken aus. Der Impuls breitet sich über die Vorhöfe aus, geht dann zum <b>AV-Knoten</b> und wandert hinunter zu den Kammern.</p>' },
      { icon: '⬇️', title: 'Die Vorhöfe füllen die Kammern', focus: ['atrio-destro', 'atrio-sinistro', 'tricuspide', 'mitrale', 'sangue-blu', 'sangue-rosso'], loop: [0.55, 1.2 - 0.02],
        html: '<p>Während die Kammern entspannt sind, fließt das Blut aus den Vorhöfen durch die offene <b>Trikuspidalklappe</b> und <b>Mitralklappe</b> nach unten. Am Ende ziehen sich die Vorhöfe zusammen und geben den letzten Schub.</p>' },
      { icon: '💥', title: 'Die Kammern pumpen', focus: ['ventricolo-destro', 'ventricolo-sinistro', 'polmonare', 'aortica', 'tricuspide', 'mitrale'], loop: [0.18, 0.6],
        html: '<p>Die Kammern ziehen sich kräftig zusammen (<b>Systole</b>). Die Trikuspidal- und die Mitralklappe schließen sich schlagartig, die <b>Pulmonal-</b> und die <b>Aortenklappe</b> öffnen sich, und das Blut strömt in die Arterien.</p><p class="tip">🩺 „Bum-BUM“: Das erste Geräusch ist das Schließen der Klappen zwischen Vorhöfen und Kammern, das zweite das der Klappen an den Arterien.</p>' },
      { icon: '🫁', title: 'Kleiner Kreislauf: zur Lunge', focus: ['atrio-destro', 'ventricolo-destro', 'arteria-polmonare', 'vene-polmonari', 'vene-cave', 'sangue-blu', 'atrio-sinistro'],
        html: '<p>Das „blaue“ Blut kommt über die <b>Hohlvenen</b>, fließt durch den rechten Vorhof und die rechte Kammer und gelangt über die <b>Lungenarterie</b> zur Lunge. Dort gibt es das Kohlendioxid ab und nimmt Sauerstoff auf, dann kehrt es über die <b>Lungenvenen</b> zum linken Vorhof zurück.</p>' },
      { icon: '🏃', title: 'Großer Kreislauf: in den ganzen Körper', focus: ['atrio-sinistro', 'ventricolo-sinistro', 'aorta', 'sangue-rosso', 'coronarie', 'vene-polmonari'],
        html: '<p>Die linke Kammer drückt das rote Blut in die <b>Aorta</b> und von dort in alle Arterien des Körpers. Die ersten, die Blut bekommen, sind die <b>Kranzgefäße</b>, die das Herz selbst versorgen!</p><p class="tip">⏱️ Ein Bluttropfen braucht für einen kompletten Weg durch den Körper etwa eine Minute.</p>' }
    ],
    facts: [
      { icon: '✊', title: 'Groß wie eine Faust', html: 'Das Herz wiegt etwa 300 Gramm, wie ein großer Apfel, und liegt ein wenig nach links verschoben in der Brust.' },
      { icon: '🔢', title: 'Unermüdlich', html: 'Im Laufe eines ganzen Lebens schlägt das Herz mehr als <b>2,5 Milliarden</b> Mal, ohne sich je auszuruhen.' },
      { icon: '🐋', title: 'Das größte Herz', html: 'Das Herz des Blauwals wiegt etwa 180 kg: Es ist das größte im Tierreich.' },
      { icon: '🏃‍♀️', title: 'Schneller beim Rennen', html: 'In Ruhe hat ein Kind etwa 80–100 Herzschläge pro Minute; beim Rennen schlägt das Herz schneller, um mehr Sauerstoff zu den Muskeln zu bringen.' }
    ],
    quiz: [
      { type: 'mc', q: 'Wie viele Kammern hat das menschliche Herz?', options: ['2', '3', '4', '6'], answer: 2, explain: 'Zwei Vorhöfe (oben) und zwei Kammern (unten).' },
      { type: 'mc', q: 'Wohin fließt das Blut, das die rechte Kammer pumpt?', options: ['Zum Gehirn', 'Zur Lunge', 'Zu den Beinen', 'Zur Leber'], answer: 1, explain: 'Die rechte Kammer schickt das sauerstoffarme Blut über die Lungenarterie zur Lunge.' },
      { type: 'mc', q: 'Welche ist die größte Arterie des Körpers?', options: ['Die Hohlvene', 'Die Lungenarterie', 'Die Aorta', 'Das Kranzgefäß'], answer: 2, explain: 'Die Aorta beginnt an der linken Kammer und bringt das sauerstoffreiche Blut in den ganzen Körper.' },
      { type: 'tf', q: 'Die Herzklappen lassen das Blut nur in eine Richtung fließen.', answer: true, explain: 'Sie sind Einbahntüren: Sie schließen sich, damit das Blut nicht zurückfließt.' },
      { type: 'mc', q: 'Was löst jeden Herzschlag aus?', options: ['Das Gehirn, bei jedem Schlag', 'Ein elektrischer Impuls des Sinusknotens', 'Die Lunge, wenn du atmest', 'Der Magen'], answer: 1, explain: 'Das Herz hat seinen eigenen „natürlichen Schrittmacher“: den Sinusknoten.' },
      { type: 'order', q: 'Bringe die Reise des Bluts, das aus dem Körper zurückkehrt, in die richtige Reihenfolge', items: ['Hohlvenen', 'Rechter Vorhof', 'Rechte Kammer', 'Lungenarterie', 'Lunge', 'Lungenvenen', 'Linker Vorhof', 'Linke Kammer', 'Aorta'], explain: 'Zuerst der kleine Kreislauf (rechtes Herz → Lunge → linkes Herz), dann der große Kreislauf mit der Aorta.' }
    ]
  });
})();
