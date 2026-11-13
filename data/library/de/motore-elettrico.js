/* Il motore elettrico a corrente continua (con spazzole), come quello dei giocattoli e dei ventilatori a pile.
   L'albero è lungo l'asse z (davanti = +z, dove c'è l'elica). Magnete N in alto, S in basso. Il rotore gira intorno a z. */
(function () {
  const TAU = Math.PI * 2, D = Math.PI / 180;
  /* settore di corona circolare nel piano XY, da a0 ad a1 gradi */
  const sector = (r0, r1, a0, a1, n) => {
    const o = [], i = []; for (let k = 0; k <= n; k++) { const a = (a0 + (a1 - a0) * k / n) * D; o.push([r1 * Math.cos(a), r1 * Math.sin(a)]); i.push([r0 * Math.cos(a), r0 * Math.sin(a)]); }
    return o.concat(i.reverse());
  };
  const SPIN = { type: 'spin', axis: 'z', dir: -1 };
  /* un polo del rotore: gambo + "cappello" ad arco; orientato verso +y e poi ruotato */
  const pole = (a) => ({ t: 'group', rot: [0, 0, a], shapes: [
    { t: 'box', s: [0.2, 0.42, 1.0], pos: [0, 0.33, 0], color: '#6b7280' },
    { t: 'extrude', d: 1.0, pts: sector(0.5, 0.64, 52, 128, 10), color: '#6b7280' } ] });
  const coil = (a, ph) => ({ t: 'group', rot: [0, 0, a], shapes: [
    { t: 'box', s: [0.36, 0.3, 0.86], pos: [0, 0.3, 0], color: '#c2410c', anim: { type: 'blink', color: '#fb923c', wave: 'sin01', rate: 1, phase: ph } },
    ...[-0.32, -0.16, 0, 0.16, 0.32].map((z) => ({ t: 'box', s: [0.37, 0.31, 0.012], pos: [0, 0.3, z], color: '#9a3412' })),
    { t: 'box', s: [0.37, 0.12, 1.0], pos: [0, 0.26, 0], color: '#b45309' } ] });
  const commSeg = (a) => ({ t: 'extrude', d: 0.32, pts: sector(0.12, 0.2, a + 8, a + 112, 8), color: '#d97706' });
  const fieldLine = (x) => Array.from({ length: 2 }, (_, k) => ({ t: 'group', pos: [x, 0.62, 0.0], anim: { type: 'move', dir: [0, -1, 0], amp: 1.24, wave: 'saw', rate: 0.5, phase: k / 2 + x },
    shapes: [{ t: 'cone', r: 0.05, h: 0.12, n: 10, rot: [180, 0, 0] }] }));
  const BAT = [[0.95, -1.55, 0.95], [0.95, -1.2, 1.05], [0.45, -0.1, 1.05], [0.3, 0, 1.05], [0.22, 0.0, 1.05], [0, 0.18, 1.05], [-0.22, 0, 1.05], [-0.3, 0, 1.05], [-0.45, -0.1, 1.05], [-0.95, -1.2, 1.05], [-0.95, -1.55, 0.95]];

  LIBRARY({
    id: 'motore-elettrico',
    lang: 'de',
    title: 'Der Elektromotor',
    intro: 'Der Elektromotor verwandelt <b>Strom</b> mithilfe von Magneten in <b>Bewegung</b>. Er steckt in Ventilatoren, Bohrmaschinen, Waschmaschinen, Spielzeug und Elektroautos. Sieh, wie sich die Magnete abstoßen und anziehen!',
    model: {
      rx: 0.22, ry: -0.65, speed: 0.35, height: 470,
      parts: [
        { id: 'carcassa', name: 'Gehäuse', color: '#94a3b8', alpha: 0.2, explode: [0, 0, 0],
          info: '<p>Das ist die Metall-„Dose“, die den Motor umschließt und schützt. Sie hält die Magnete fest und dient dem Magnetfeld als Weg.</p>',
          more: '<p>Das Gehäuse besteht aus <b>Eisen</b>: Das Magnetfeld „bevorzugt“ den Weg durch Eisen statt durch Luft, so schließt sich der Magnetkreis und der Motor wird stärker.</p>',
          shapes: [ { t: 'tube', r: 1.02, ri: 0.96, h: 1.5, n: 40, rot: [90, 0, 0] }, { t: 'cyl', r: 1.02, h: 0.05, n: 40, rot: [90, 0, 0], pos: [0, 0, -0.77] },
            { t: 'cyl', r: 0.13, h: 0.12, n: 20, rot: [90, 0, 0], pos: [0, 0, -0.84], color: '#cbd5e1', alpha: 1 },
            { t: 'box', s: [1.3, 0.06, 0.6], pos: [0, -1.05, 0], color: '#475569', alpha: 1 } ] },
        { id: 'magnete-n', name: 'Magnet (Nordpol)', label: 'Magnet N', color: '#dc2626', explode: [0, 0.7, 0],
          info: '<p>Ein gebogener <b>Magnet</b>, am Gehäuse befestigt, mit dem <b>Nordpol</b> zur Mitte. Er bewegt sich nie: Er ist der <b>Stator</b> (der Teil, der „steht“).</p>',
          more: '<p>Magnete haben immer zwei Pole. <b>Gleiche</b> Pole stoßen sich ab, <b>verschiedene</b> Pole ziehen sich an. In modernen Motoren verwendet man <b>Neodym</b>-Magnete, klein, aber sehr stark.</p>',
          shapes: [ { t: 'extrude', d: 1.2, pts: sector(0.72, 0.95, 45, 135, 14) }, { t: 'box', s: [0.16, 0.16, 0.01], pos: [0, 0.83, 0.61], color: '#fef2f2', decal: 1 } ] },
        { id: 'magnete-s', name: 'Magnet (Südpol)', label: 'Magnet S', color: '#2563eb', explode: [0, -0.7, 0],
          info: '<p>Gegenüber sitzt ein weiterer Magnet mit dem <b>Südpol</b> zur Mitte. Zwischen den beiden Magneten liegt ein unsichtbares <b>Magnetfeld</b>, das von Nord nach Süd verläuft.</p>',
          shapes: [ { t: 'extrude', d: 1.2, pts: sector(0.72, 0.95, 225, 315, 14) }, { t: 'box', s: [0.16, 0.16, 0.01], pos: [0, -0.83, 0.61], color: '#eff6ff', decal: 1 } ] },
        { id: 'campo', name: 'Magnetfeld', label: 'Magnetfeld', color: '#a855f7', alpha: 0.75, explode: [0, 0, -0.9],
          info: '<p>Die Pfeile zeigen das <b>Magnetfeld</b>: eine „unsichtbare Kraft“, die aus dem Nordpol austritt und in den Südpol eintritt. Du kannst es mit Eisenfeilspänen auf einem Blatt über einem Magneten sichtbar machen!</p>',
          shapes: [-0.42, 0, 0.42].map((x) => ({ t: 'pipe', r: 0.012, n: 5, pts: [[x, 0.7, 0], [x, -0.7, 0]], alpha: 0.4 })).concat(fieldLine(-0.42), fieldLine(0), fieldLine(0.42)) },
        { id: 'rotore', name: 'Rotor (Eisenkern)', label: 'Rotor', color: '#6b7280', explode: [0, 0, 0.9], anim: SPIN,
          info: '<p>Das ist der Teil, der sich <b>dreht</b>. Er hat drei Eisen-„Arme“, jeder von einer Kupferdrahtspule umwickelt.</p>',
          more: '<p>Der Kern besteht aus vielen dünnen, verklebten Eisenblechen (<b>Lamellen</b>): So wird er weniger heiß. Mit drei Polen läuft der Motor immer an, in welcher Stellung er auch stehen geblieben ist.</p>',
          shapes: [ { t: 'cyl', r: 0.17, h: 1.0, n: 20, rot: [90, 0, 0], color: '#6b7280' }, pole(0), pole(120), pole(240) ] },
        { id: 'bobine', name: 'Kupferspulen (Elektromagnete)', label: 'Spulen', color: '#c2410c', explode: [0, 0, 0.9], anim: SPIN,
          info: '<p>Das sind Knäuel aus vielfach gewickeltem <b>Kupferdraht</b>. Wenn Strom hindurchfließt, werden sie zu <b>Magneten</b> (Elektromagneten): Ausgeschaltet ziehen sie nichts mehr an.</p>',
          more: '<p>Ein elektrischer Strom erzeugt immer ein Magnetfeld um den Draht (das entdeckte <b>Ørsted</b> 1820, als er sah, wie sich eine Kompassnadel bewegte). Wickelt man den Draht viele Male um Eisen, wird das Feld viel stärker. Der Draht ist mit einem Isolierlack überzogen: Deshalb sieht er rot-orange aus.</p>',
          shapes: [ coil(0, 0), coil(120, 1 / 3), coil(240, 2 / 3) ] },
        { id: 'albero', name: 'Welle', color: '#d1d5db', explode: [0, 0, 0.9], anim: SPIN,
          info: '<p>Das ist der Stahl-„Stab“ in der Mitte des Rotors. Er dreht sich mit ihm und ragt aus dem Motor heraus, um anzutreiben, was wir wollen: einen Propeller, ein Rad, ein Zahnrad.</p>',
          shapes: [ { t: 'cyl', r: 0.06, h: 2.75, n: 16, rot: [90, 0, 0], pos: [0, 0, 0.32] }, { t: 'box', s: [0.02, 0.12, 0.6], pos: [0.055, 0, 1.4], color: '#94a3b8' } ] },
        { id: 'commutatore', name: 'Kommutator', color: '#d97706', pos: [0, 0, 0.88], explode: [0, 0, 1.25], anim: SPIN,
          info: '<p>Das ist ein kleiner Kupferring, der in <b>drei Segmente</b> geteilt ist, jedes mit einer Spule verbunden. Beim Drehen wechselt er, welche Spulen Strom bekommen und in welcher Richtung.</p>',
          more: '<p>Ohne Kommutator würde der Rotor nach einer halben Umdrehung stehen bleiben, mit dem Nordpol der Spule vor dem Südpol des Magneten. Der Kommutator <b>kehrt den Strom um</b>, genau in diesem Moment: Der Pol wechselt und der Rotor wird weiter nach vorn gedrückt.</p>',
          shapes: [0, 120, 240].map(commSeg).concat([{ t: 'cyl', r: 0.11, h: 0.34, n: 16, rot: [90, 0, 0], color: '#1f2937' }]) },
        { id: 'spazzole', name: 'Kohlebürsten', color: '#1f2937', pos: [0, 0, 0.88], explode: [0, 0.4, 1.25],
          info: '<p>Zwei <b>Kohle</b>blöcke, die von einer kleinen Feder gegen den Kommutator gedrückt werden. Beim Schleifen leiten sie den Strom von der Batterie zu den sich drehenden Spulen.</p>',
          more: '<p>Kohle (Graphit) leitet Strom gut und ist „rutschig“. Beim Schleifen nutzt sie sich aber ab: <b>Bürstenlose</b> (Brushless) Motoren in Drohnen und Elektroautos nutzen stattdessen Elektronik, um den Strom umzuschalten, und halten länger.</p>',
          shapes: [-1, 1].map((sx) => ({ t: 'group', shapes: [
            { t: 'box', s: [0.14, 0.12, 0.14], pos: [sx * 0.27, 0, 0] }, { t: 'box', s: [0.2, 0.18, 0.2], pos: [sx * 0.42, 0, 0], color: '#94a3b8', alpha: 0.6 },
            { t: 'pipe', r: 0.01, n: 4, caps: false, color: '#facc15', pts: Array.from({ length: 20 }, (_, i) => [sx * (0.34 + i * 0.008), 0.035 * Math.cos(i * 1.2), 0.035 * Math.sin(i * 1.2)]) } ] })) },
        { id: 'calotta', name: 'Lagerschild und Lager', label: 'Lagerschild', color: '#f8fafc', alpha: 0.3, pos: [0, 0, 0.82], explode: [0, 0, 2.0],
          info: '<p>Das ist der Kunststoff-„Deckel“, der den Motor verschließt und die Bürsten hält. In der Mitte sitzt ein <b>Lager</b>, das die Welle ohne Reibung drehen lässt.</p>',
          shapes: [ { t: 'cyl', r: 1.0, h: 0.06, n: 40, rot: [90, 0, 0], pos: [0, 0, 0.4] }, { t: 'tube', r: 1.0, ri: 0.94, h: 0.4, n: 40, rot: [90, 0, 0], pos: [0, 0, 0.2] },
            { t: 'tube', r: 0.14, ri: 0.07, h: 0.12, n: 20, rot: [90, 0, 0], pos: [0, 0, 0.45], color: '#9ca3af', alpha: 1 },
            { t: 'box', s: [0.12, 0.06, 0.1], pos: [0.7, 0, 0.46], color: '#d97706', alpha: 1 }, { t: 'box', s: [0.12, 0.06, 0.1], pos: [-0.7, 0, 0.46], color: '#d97706', alpha: 1 } ] },
        { id: 'pila', name: 'Batterie und Drähte', label: 'Batterie', color: '#111827', explode: [0, -0.6, 0.5],
          info: '<p>Die <b>Batterie</b> schiebt den Strom in die Drähte: Er tritt am <b>+</b>-Pol aus, fließt durch den Motor und kehrt zum <b>−</b>-Pol zurück. Wenn du die Drähte vertauschst, dreht sich der Motor rückwärts!</p>',
          more: '<p>Je höher die Spannung (die Volt) der Batterie, desto stärker ist der Strom und desto schneller dreht sich der Motor. Eine Mignon-Batterie hat 1,5 V; die Batterie eines Elektroautos etwa 400 V.</p>',
          shapes: [ { t: 'cyl', r: 0.2, h: 1.6, n: 24, rot: [0, 0, 90], pos: [0, -1.6, 0.95] }, { t: 'cyl', r: 0.205, h: 0.5, n: 24, rot: [0, 0, 90], pos: [0.55, -1.6, 0.95], color: '#f59e0b' },
            { t: 'cyl', r: 0.07, h: 0.08, n: 14, rot: [0, 0, 90], pos: [0.84, -1.6, 0.95], color: '#d1d5db' }, { t: 'cyl', r: 0.15, h: 0.02, n: 20, rot: [0, 0, 90], pos: [-0.81, -1.6, 0.95], color: '#d1d5db' },
            { t: 'box', s: [0.1, 0.1, 0.01], pos: [0.55, -1.6, 1.16], color: '#111827', decal: 1 }, { t: 'box', s: [0.03, 0.1, 0.012], pos: [0.55, -1.6, 1.165], color: '#f8fafc', decal: 2 }, { t: 'box', s: [0.1, 0.03, 0.012], pos: [0.55, -1.6, 1.165], color: '#f8fafc', decal: 2 },
            { t: 'pipe', r: 0.025, n: 6, curve: true, color: '#ef4444', pts: [[0.9, -1.6, 0.95], [0.95, -1.2, 1.05], [0.75, -0.4, 1.3], [0.7, 0, 1.3]] },
            { t: 'pipe', r: 0.025, n: 6, curve: true, color: '#111827', pts: [[-0.85, -1.6, 0.95], [-0.95, -1.2, 1.05], [-0.75, -0.4, 1.3], [-0.7, 0, 1.3]] } ] },
        { id: 'corrente', name: 'Elektrischer Strom', label: 'Strom', color: '#facc15', noLabel: true, explode: [0, 0, 0.5],
          info: '<p>Der Strom (die gelben Punkte) startet an der Batterie, tritt durch eine Bürste ein, durchfließt eine Spule des Rotors und tritt an der anderen Bürste aus, zurück zur Batterie.</p>',
          shapes: Array.from({ length: 14 }, (_, k) => ({ t: 'sphere', r: 0.035, n: 5, m: 8, pos: BAT[0], color: '#facc15', anim: { type: 'path', pts: BAT, wave: 'saw', rate: 0.5, phase: k / 14 } })) },
        { id: 'elica', name: 'Propeller (die Arbeit!)', label: 'Propeller', color: '#22c55e', pos: [0, 0, 1.62], explode: [0, 0, 1.4], anim: SPIN,
          info: '<p>Dafür ist der Motor da: Er dreht etwas! Hier einen Propeller, wie in einem Ventilator. Die elektrische Energie ist zu <b>Bewegungsenergie</b> geworden.</p>',
          shapes: [ { t: 'cyl', r: 0.12, h: 0.14, n: 20, rot: [90, 0, 0], color: '#15803d' } ].concat([0, 120, 240].map((a) => ({ t: 'group', rot: [0, 0, a], shapes: [
            { t: 'sphere', r: 1, n: 8, m: 12, pos: [0, 0.45, 0], scale: [0.16, 0.38, 0.03], rot: [0, 25, 0] } ] }))) }
      ]
    },
    steps: [
      { icon: '⚡', title: 'Vom Strom zur Bewegung', explode: 0,
        html: '<p>Ein Elektromotor dreht eine <b>Welle</b> nur mit Strom und Magneten. Er verbrennt nichts, macht keinen Rauch und wird kaum warm.</p><p>Er hat einen festen Teil, den <b>Stator</b> (die Magnete), und einen Teil, der sich dreht, den <b>Rotor</b> (die Spulen).</p>' },
      { icon: '🧲', title: 'Die Magnete: Sie ziehen und stoßen', focus: ['magnete-n', 'magnete-s', 'campo'], explode: 0.2, view: { rx: 0.05, ry: -0.1 },
        html: '<p>Jeder Magnet hat einen <b>Nordpol</b> und einen <b>Südpol</b>. <b>Verschiedene Pole ziehen sich an</b>, <b>gleiche Pole stoßen sich ab</b>.</p><p>Zwischen den beiden Magneten des Motors liegt ein unsichtbares <b>Magnetfeld</b> (die lila Pfeile), das von Nord nach Süd verläuft.</p><p class="tip">🧪 Probier es mit zwei Kühlschrankmagneten: Wenn du einen drehst, spürst du, wie sie sich abstoßen oder anziehen.</p>' },
      { icon: '🌀', title: 'Spulen, die zu Magneten werden', focus: ['bobine', 'rotore', 'corrente'], explode: 0.35, view: { rx: 0.2, ry: -0.5 },
        html: '<p>Die <b>Spulen</b> sind Kupferdrähte, viele Male um das Eisen des Rotors gewickelt. Wenn Strom hindurchfließt, werden sie zu <b>Elektromagneten</b>: Magneten, die man ein- und ausschalten kann!</p><p class="tip">🔩 Du kannst selbst einen bauen: Wickle einen Draht um einen Nagel und verbinde ihn mit einer Batterie. Der Nagel zieht Büroklammern an.</p>' },
      { icon: '🔄', title: 'Anziehen und Abstoßen: Der Rotor dreht sich', focus: ['rotore', 'bobine', 'magnete-n', 'magnete-s'], explode: 0, view: { rx: 0.0, ry: 0.0 },
        html: '<p>Der Pol einer Spule wird vom gegenüberliegenden Magneten mit entgegengesetztem Pol <b>angezogen</b> und von dem mit gleichem Pol <b>abgestoßen</b>. So beginnt der Rotor sich zu drehen.</p>' },
      { icon: '🔀', title: 'Kommutator und Bürsten: der Trick', focus: ['commutatore', 'spazzole', 'corrente', 'pila'], explode: 0.3, zoom: 1.1, view: { rx: 0.25, ry: -0.3 },
        html: '<p>Wenn nichts weiter passieren würde, bliebe die Spule vor dem Magneten stehen, der sie anzieht. Aber genau in diesem Moment <b>kehrt der Kommutator</b>, der sich unter den <b>Bürsten</b> dreht, <b>den Strom um</b>: Der Pol der Spule wechselt und wird wieder nach vorn gedrückt.</p><p>So bleibt der Rotor nie stehen, solange Strom da ist.</p>' },
      { icon: '🌬️', title: 'Die Welle leistet die Arbeit', focus: ['albero', 'elica', 'calotta'], explode: 0, view: { rx: 0.25, ry: -0.9 },
        html: '<p>Die <b>Welle</b> ragt aus dem Motor heraus und dreht den <b>Propeller</b>: Die elektrische Energie ist zu Bewegungsenergie geworden. Anstelle des Propellers könnte ein Rad sein, die Riemenscheibe der Waschmaschine oder der Bohrer einer Bohrmaschine.</p>' },
      { icon: '🔁', title: 'Und umgekehrt: der Dynamo', explode: 0.5, view: { rx: 0.3, ry: -0.7 },
        html: '<p>Wenn du die Welle eines Motors wie diesem von Hand drehst, kommt aus den Bürsten Strom heraus: Er wird zu einem <b>Generator</b> (einem Dynamo)! Das ist dasselbe Prinzip wie in Kraftwerken und beim Fahrraddynamo.</p><p class="tip">🚗 Elektroautos nutzen das beim Bremsen: Der Motor wird zum Generator und lädt die Batterie auf.</p>' }
    ],
    facts: [
      { icon: '🧭', title: 'Eine verrückt gewordene Kompassnadel', html: '1820 bemerkte Hans Christian Ørsted, dass sich die Nadel eines Kompasses in der Nähe eines stromführenden Drahtes bewegte: Er hatte entdeckt, dass <b>Elektrizität und Magnetismus</b> zusammenhängen.' },
      { icon: '🇮🇹', title: 'Galileo Ferraris', html: 'Der Turiner Ingenieur <b>Galileo Ferraris</b> erfand 1885 den Motor mit rotierendem Magnetfeld, den „Vater“ der heutigen Fabrikmotoren.' },
      { icon: '🏠', title: 'Wie viele Motoren im Haus?', html: 'Kühlschrank, Waschmaschine, Staubsauger, Ventilator, Föhn, Mixer, CD-Player … In einem Haus gibt es oft mehr als <b>30 Elektromotoren</b>!' },
      { icon: '🔋', title: 'Sehr effizient', html: 'Ein guter Elektromotor verwandelt mehr als <b>90 %</b> der aufgenommenen Energie in Bewegung; ein Benzinmotor etwa 30 %.' }
    ],
    quiz: [
      { type: 'mc', q: 'Zwei Magnete, bei denen die Nordpole einander gegenüberstehen …', options: ['ziehen sich an', 'stoßen sich ab', 'tun nichts', 'werden zu einem einzigen Magneten'], answer: 1, explain: 'Gleiche Pole stoßen sich ab, verschiedene Pole ziehen sich an.' },
      { type: 'mc', q: 'Was wird aus einer Kupferspule, wenn Strom hindurchfließt?', options: ['Eine Glühbirne', 'Ein Elektromagnet', 'Eine Batterie', 'Ein Isolator'], answer: 1, explain: 'Der Strom erzeugt ein Magnetfeld: Die Spule wird zu einem Magneten, den man ein- und ausschalten kann.' },
      { type: 'mc', q: 'Wofür ist der Kommutator da?', options: ['Um den Motor zu kühlen', 'Um den Strom in den Spulen im richtigen Moment umzukehren', 'Um Lärm zu machen', 'Um die Magnete festzuhalten'], answer: 1, explain: 'Wenn man den Strom umkehrt, wechselt der Pol der Spule, sodass der Rotor weiter angeschoben wird.' },
      { type: 'tf', q: 'Wenn du die beiden Drähte der Batterie vertauschst, dreht sich der Motor rückwärts.', answer: true, explain: 'Der Strom fließt in die Gegenrichtung, die Pole der Spulen kehren sich um und damit auch die Drehrichtung.' },
      { type: 'mc', q: 'Wie heißt der Teil des Motors, der sich dreht?', options: ['Stator', 'Rotor', 'Gehäuse', 'Lagerschild'], answer: 1, explain: 'Der Rotor dreht sich; der Stator (mit den Magneten) steht still.' },
      { type: 'mc', q: 'Was passiert, wenn du die Welle eines Elektromotors von Hand drehst?', options: ['Er geht kaputt', 'Er erzeugt Strom: Er wird zum Generator', 'Die Batterie wird magnetisiert', 'Nichts'], answer: 1, explain: 'Der Motor funktioniert auch umgekehrt: Das ist das Prinzip von Dynamos und Kraftwerken.' }
    ]
  });
})();
