/* Il telescopio riflettore (tipo Newton) su montatura altazimutale a forcella e treppiede.
   Il tubo è descritto lungo x (x+ = bocca del tubo); viene inclinato di 32° e ruota piano intorno all'asse verticale. */
(function () {
  const PIV = [0, 2.45, 0], TILT = 32;
  const PAN = { type: 'swing', axis: 'y', amp: 28, rate: 0.22 };
  const TILTA = { type: 'swing', axis: 'z', amp: 6, rate: 0.22, phase: 0.25 };
  /* tutto ciò che sta sul tubo segue la rotazione (stesse animazioni in tutti i pezzi) */
  const onTube = (shapes) => [ { t: 'group', pos: PIV, anim: PAN, shapes: [ { t: 'group', rot: [0, 0, TILT], anim: TILTA, shapes } ] } ];
  const onFork = (shapes) => [ { t: 'group', pos: PIV, anim: PAN, shapes } ];
  const R = 0.42, X0 = -1.7, X1 = 1.7, SEC = 1.12;
  const RAYS = [0.27, -0.27, 0.14, -0.14];
  const photons = [];
  RAYS.forEach((y, i) => { for (let k = 0; k < 5; k++) photons.push({ t: 'sphere', r: 0.035, n: 6, m: 8, pos: [3.0, y, 0], color: '#fde047',
    anim: { type: 'path', pts: [[3.0, y, 0], [-1.47, y, 0], [SEC, 0, 0], [SEC, 0.95, 0]], wave: 'saw', rate: 0.9, phase: k / 5 + i * 0.07 } }); });
  const rayLines = RAYS.map((y) => ({ t: 'pipe', r: 0.008, n: 5, pts: [[3.0, y, 0], [-1.47, y, 0], [SEC, 0, 0], [SEC, 0.95, 0]], color: '#fde68a', alpha: 0.45 }));

  LIBRARY({
    lang: 'de',
    id: 'telescopio',
    title: 'Das Teleskop',
    intro: 'Ein Teleskop ist ein „Trichter für Licht“: Es sammelt mit einem großen <b>Spiegel</b> oder einer großen <b>Linse</b> ganz viel Licht und bündelt es in unser Auge. So sehen wir schwache und weit entfernte Dinge, zum Beispiel die Krater des Mondes oder die Ringe des Saturn.',
    model: {
      rx: 0.18, ry: -0.35, speed: 0.4, height: 480, fit: 1.05,
      parts: [
        { id: 'tubo', name: 'Optischer Tubus', label: 'Tubus', color: '#e2e8f0', alpha: 0.28, explode: [0, 0.5, 0.9],
          info: '<p>Der Tubus hält die Spiegel im richtigen Abstand und schützt sie vor seitlich einfallendem Licht, vor Staub und vor der Feuchtigkeit der Nacht.</p>',
          more: '<p>Der Abstand zwischen dem Hauptspiegel und dem Punkt, an dem sich das Licht bündelt, heißt <b>Brennweite</b>. Teilt man die Brennweite des Teleskops durch die des Okulars, erhält man die <b>Vergrößerung</b>: 1000 mm ÷ 10 mm = 100-fach.</p>',
          shapes: onTube([ { t: 'cyl', r: R, h: X1 - X0, n: 36, rot: [0, 0, 90], open: true, ds: true },
            { t: 'tube', r: R + 0.03, ri: R - 0.01, h: 0.12, n: 36, rot: [0, 0, 90], pos: [X1 - 0.06, 0, 0], color: '#1e293b', alpha: 1 },
            { t: 'tube', r: R + 0.03, ri: R - 0.01, h: 0.1, n: 36, rot: [0, 0, 90], pos: [X0 + 0.05, 0, 0], color: '#1e293b', alpha: 1 },
            { t: 'cyl', r: R + 0.03, h: 0.04, n: 36, rot: [0, 0, 90], pos: [X0 - 0.02, 0, 0], color: '#334155', alpha: 1 } ]) },
        { id: 'specchio-primario', name: 'Hauptspiegel', label: 'Hauptspiegel', color: '#cbd5e1', explode: [-1.0, -0.5, 0],
          info: '<p>Er ist das Herz des Teleskops: ein <b>gekrümmter</b> (konkaver) Spiegel am Ende des Tubus. Er sammelt das Licht der Sterne und wirft es zurück, sodass es sich in einem Punkt, dem Brennpunkt, <b>sammelt</b>.</p>',
          more: '<p>Seine Oberfläche ist eine <b>Parabel</b>, genau auf ein Zehntausendstel Millimeter, und mit einer hauchdünnen Aluminiumschicht überzogen. Je größer der Spiegel, desto mehr Licht sammelt er: Ein Spiegel von 20 cm sammelt etwa <b>800-mal</b> so viel Licht wie unser Auge.</p>',
          shapes: onTube([ { t: 'lathe', n: 36, rot: [0, 0, -90], pos: [-1.5, 0, 0], pts: [[0, 0.0], [0.2, 0.012], [0.38, 0.045], [0.38, -0.06], [0, -0.06]], color: '#e0f2fe' },
            { t: 'cyl', r: 0.4, h: 0.08, n: 30, rot: [0, 0, 90], pos: [-1.6, 0, 0], color: '#475569' },
            { t: 'cyl', r: 0.03, h: 0.12, n: 8, rot: [0, 0, 90], pos: [-1.68, 0.25, 0], color: '#94a3b8' }, { t: 'cyl', r: 0.03, h: 0.12, n: 8, rot: [0, 0, 90], pos: [-1.68, -0.25, 0], color: '#94a3b8' } ]) },
        { id: 'specchio-secondario', name: 'Fangspiegel', label: 'Fangspiegel', color: '#e0f2fe', explode: [0.4, 0.9, 0.5],
          info: '<p>Ein kleiner, ebener Spiegel, um 45° geneigt, nahe der Tubusöffnung. Er lenkt das Licht zur Seite, zum <b>Okular</b>, damit wir nicht mit dem Kopf vor dem Tubus stehen müssen!</p>',
          more: '<p>Er wird in der Mitte von dünnen Metallstreben gehalten, der <b>„Spinne“</b>. Sie sind es, die die kreuzförmigen „Zacken“ erzeugen, die man auf Fotos heller Sterne sieht.</p>',
          shapes: onTube([ { t: 'group', pos: [SEC, 0, 0], shapes: [ { t: 'cyl', r: 0.1, h: 0.025, n: 24, rot: [0, 0, 45] },
            { t: 'cyl', r: 0.05, h: 0.18, n: 14, rot: [0, 0, 90], pos: [0.11, 0, 0], color: '#334155' } ] },
            { t: 'box', s: [0.015, R * 2 - 0.02, 0.012], pos: [SEC + 0.15, 0, 0], color: '#334155' },
            { t: 'box', s: [0.015, 0.012, R * 2 - 0.02], pos: [SEC + 0.15, 0, 0], color: '#334155' } ]) },
        { id: 'oculare', name: 'Okular', color: '#1f2937', explode: [0.2, 1.2, 0],
          info: '<p>Es ist die „Lupe“, an die man das Auge hält. Es nimmt das winzige Bild, das die Spiegel erzeugen, und <b>vergrößert</b> es.</p>',
          more: '<p>Man kann die Okulare wechseln: Eines mit kurzer Brennweite (z. B. 6 mm) vergrößert stärker, eines mit langer Brennweite (25 mm) zeigt einen größeren und helleren Himmelsausschnitt. Zu starke Vergrößerung macht das Bild dunkel und unruhig.</p>',
          shapes: onTube([ { t: 'cyl', r: 0.09, h: 0.24, n: 20, pos: [SEC, R + 0.28, 0], color: '#1f2937' },
            { t: 'cyl', r: 0.11, h: 0.08, n: 20, pos: [SEC, R + 0.43, 0], color: '#111827' },
            { t: 'cyl', r: 0.065, h: 0.02, n: 16, pos: [SEC, R + 0.475, 0], color: '#0ea5e9', decal: 1 },
            { t: 'torus', R: 0.1, r: 0.012, n: 20, m: 6, pos: [SEC, R + 0.25, 0], color: '#64748b' } ]) },
        { id: 'focheggiatore', name: 'Okularauszug (Fokussierer)', label: 'Scharfstellen', color: '#64748b', explode: [0.6, 0.9, -0.4],
          info: '<p>Ein kleines Rohr, das sich beim Drehen zweier <b>Knöpfe</b> hebt und senkt: Es verschiebt das Okular, bis das Bild scharf wird, genau wie beim Scharfstellen eines Fernglases.</p>',
          shapes: onTube([ { t: 'box', s: [0.32, 0.12, 0.3], pos: [SEC, R + 0.03, 0], color: '#475569' },
            { t: 'cyl', r: 0.07, h: 0.14, n: 18, pos: [SEC, R + 0.14, 0], color: '#94a3b8' },
            { t: 'group', pos: [SEC, R + 0.05, 0], anim: { type: 'swing', axis: 'z', amp: 60, rate: 0.5 }, shapes: [
              { t: 'cyl', r: 0.06, h: 0.07, n: 16, rot: [90, 0, 0], pos: [0, 0, 0.22], color: '#111827' }, { t: 'cyl', r: 0.06, h: 0.07, n: 16, rot: [90, 0, 0], pos: [0, 0, -0.22], color: '#111827' },
              { t: 'cyl', r: 0.015, h: 0.42, n: 8, rot: [90, 0, 0], color: '#94a3b8' } ] } ]) },
        { id: 'cercatore', name: 'Sucher', color: '#f1f5f9', explode: [0, 0.9, -0.9],
          info: '<p>Ein kleines Fernrohr, das auf dem Tubus sitzt. Es zeigt einen großen Himmelsausschnitt und dient dazu, das Teleskop auf das richtige Objekt zu <b>richten</b>, wie ein Visier.</p>',
          shapes: onTube([ { t: 'cyl', r: 0.07, h: 0.6, n: 20, rot: [0, 0, 90], pos: [0.85, R + 0.22, -0.2] },
            { t: 'cyl', r: 0.085, h: 0.12, n: 20, rot: [0, 0, 90], pos: [1.18, R + 0.22, -0.2], color: '#1f2937' },
            { t: 'cyl', r: 0.04, h: 0.1, n: 14, rot: [0, 0, 90], pos: [0.52, R + 0.22, -0.2], color: '#1f2937' },
            { t: 'box', s: [0.06, 0.16, 0.04], pos: [0.7, R + 0.1, -0.15], color: '#64748b' }, { t: 'box', s: [0.06, 0.16, 0.04], pos: [1.0, R + 0.1, -0.15], color: '#64748b' } ]) },
        { id: 'luce', name: 'Weg des Lichts', label: 'Sternenlicht', color: '#fde047', chip: true,
          info: '<p>Das Licht eines Sterns tritt in die Tubusöffnung ein, läuft hinunter zum großen Spiegel, wird <b>reflektiert und gebündelt</b> zum kleinen Spiegel hin und tritt schließlich seitlich im Okular aus.</p>',
          more: '<p>Die Strahlen eines sehr weit entfernten Sterns sind praktisch <b>parallel</b>. Der Parabolspiegel lässt sie alle im selben Punkt zusammenlaufen: im <b>Brennpunkt</b>. Dort entsteht ein kleines, umgekehrtes Bild.</p>',
          shapes: onTube(rayLines.concat(photons)) },
        { id: 'montatura', name: 'Gabelmontierung', label: 'Montierung', color: '#475569', explode: [0, -0.2, 0],
          info: '<p>Sie trägt den Tubus und erlaubt es, ihn in zwei Richtungen zu drehen: <b>rechts-links</b> (Azimut) und <b>auf-ab</b> (Höhe). Man muss sie behutsam bewegen: Bei 100-facher Vergrößerung verschiebt ein Millimeter alles!</p>',
          more: '<p>Die Erde dreht sich, deshalb „laufen“ die Sterne aus dem Blickfeld. Viele Montierungen haben <b>Motoren</b>, die dem Himmel von allein folgen; die „parallaktischen“ haben eine Achse, die parallel zur Erdachse liegt.</p>',
          shapes: onFork([ { t: 'cyl', r: 0.36, h: 0.14, n: 30, pos: [0, -0.62, 0], color: '#334155' },
            { t: 'box', s: [0.34, 0.12, 1.24], pos: [0, -0.5, 0] },
            { t: 'box', s: [0.22, 0.6, 0.08], pos: [0, -0.2, 0.62] }, { t: 'box', s: [0.22, 0.6, 0.08], pos: [0, -0.2, -0.62] },
            { t: 'cyl', r: 0.09, h: 0.06, n: 18, rot: [90, 0, 0], pos: [0, 0, 0.68], color: '#111827' }, { t: 'cyl', r: 0.09, h: 0.06, n: 18, rot: [90, 0, 0], pos: [0, 0, -0.68], color: '#111827' } ])
            .concat(onTube([ { t: 'torus', R: R + 0.035, r: 0.035, n: 32, m: 6, rot: [0, 0, 90], pos: [0.45, 0, 0] }, { t: 'torus', R: R + 0.035, r: 0.035, n: 32, m: 6, rot: [0, 0, 90], pos: [-0.45, 0, 0] },
              { t: 'cyl', r: 0.05, h: 1.18, n: 14, rot: [90, 0, 0], color: '#64748b' } ]),
            [ { t: 'cyl', r: 0.3, h: 0.16, n: 30, pos: [0, 1.73, 0], color: '#334155' } ]) },
        { id: 'treppiede', name: 'Stativ', color: '#94a3b8', explode: [0, -0.6, 0],
          info: '<p>Drei kräftige Beine: Mit drei Auflagepunkten <b>wackelt ein Gegenstand nie</b>, nicht einmal auf unebenem Gras. Ein Teleskop muss absolut ruhig stehen.</p>',
          shapes: [ { t: 'cyl', r: 0.24, h: 0.2, n: 24, pos: [0, 1.56, 0], color: '#475569' } ].concat([0, 120, 240].map((a) => {
            const c = Math.cos(a * Math.PI / 180), s = Math.sin(a * Math.PI / 180);
            return { t: 'group', shapes: [ { t: 'pipe', r: 0.045, n: 10, pts: [[0.2 * c, 1.5, 0.2 * s], [1.25 * c, 0.05, 1.25 * s]] },
              { t: 'pipe', r: 0.032, n: 10, pts: [[0.75 * c, 0.75, 0.75 * s], [1.25 * c, 0.05, 1.25 * s]], color: '#e2e8f0' },
              { t: 'sphere', r: 0.06, n: 8, pos: [1.25 * c, 0.04, 1.25 * s], color: '#1f2937' } ] };
          })) },
        { id: 'vassoio', name: 'Okularablage', label: 'Ablage', color: '#64748b', explode: [0, -0.3, 0.6],
          info: '<p>Ein Brett zwischen den Beinen, das das Stativ steif hält und die <b>Ersatzokulare</b> trägt, damit man die Vergrößerung wechseln kann.</p>',
          shapes: [ { t: 'cyl', r: 0.55, h: 0.05, n: 3, pos: [0, 0.78, 0], phase: 30 } ].concat([0, 120, 240].map((a) => ({ t: 'cyl', r: 0.07, h: 0.14, n: 16, pos: [0.25 * Math.cos((a + 60) * Math.PI / 180), 0.86, 0.25 * Math.sin((a + 60) * Math.PI / 180)], color: '#111827' }))) }
      ]
    },
    steps: [
      { icon: '🔭', title: 'Ein Trichter für Licht', explode: 0,
        html: '<p>Die Sterne sind unvorstellbar weit weg und schicken uns nur sehr wenig Licht. Die Pupille unseres Auges ist nur wenige Millimeter breit; ein Teleskop hat einen Spiegel so groß wie ein Teller: Er sammelt <b>hundertmal mehr Licht</b> und lässt uns Dinge sehen, die mit bloßem Auge unsichtbar sind.</p>' },
      { icon: '✨', title: 'Das Licht tritt in den Tubus ein', focus: ['luce', 'tubo'], view: { rx: 0.1, ry: 0 }, zoom: 1.15,
        html: '<p>Die Lichtstrahlen eines Sterns kommen <b>parallel</b> an, treten durch die offene Tubusöffnung ein und laufen bis ganz nach unten.</p>' },
      { icon: '🪞', title: 'Der gekrümmte Spiegel bündelt', focus: ['specchio-primario', 'luce', 'tubo'], view: { rx: 0.1, ry: 0.2 }, zoom: 1.2,
        html: '<p>Ganz unten sitzt der <b>Hauptspiegel</b>, gekrümmt wie die Innenseite eines Löffels. Er wirft die Strahlen zurück und lässt sie alle in einem Punkt <b>zusammenlaufen</b>: dem <b>Brennpunkt</b>.</p><p class="tip">🥄 Schau in einen glänzenden Löffel: Auch er ist ein Hohlspiegel!</p>' },
      { icon: '↗️', title: 'Der Fangspiegel lenkt das Licht um', focus: ['specchio-secondario', 'luce', 'oculare'], view: { rx: 0.15, ry: -0.2 }, zoom: 1.2,
        html: '<p>Bevor die Strahlen den Brennpunkt erreichen, schickt sie der um 45° geneigte <b>Fangspiegel</b> zur Seite, aus dem Tubus heraus. Diese Art von Teleskop hat <b>Isaac Newton</b> im Jahr 1668 erfunden.</p>' },
      { icon: '👁️', title: 'Das Okular vergrößert', focus: ['oculare', 'focheggiatore', 'luce'], view: { rx: 0.3, ry: -0.4 }, zoom: 1.25,
        html: '<p>Das <b>Okular</b> ist eine kleine Lupe: Es betrachtet das Bild im Brennpunkt und lässt es groß erscheinen. Mit den Knöpfen des <b>Okularauszugs</b> stellt man scharf, bis die Sterne zu klaren Pünktchen werden.</p><p class="tip">🙃 Im Teleskop erscheint der Mond oft auf dem Kopf: Für die Astronomie spielt das keine Rolle!</p>' },
      { icon: '🎯', title: 'Den Himmel anpeilen und verfolgen', focus: ['cercatore', 'montatura', 'treppiede', 'vassoio'], explode: 0.25,
        html: '<p>Mit dem <b>Sucher</b> zielt man auf das Objekt, dann kann man den Tubus mit der <b>Montierung</b> nach rechts-links und auf-ab drehen. Das <b>Stativ</b> hält alles ruhig: Schon ein kleines Wackeln wirkt bei 100-facher Vergrößerung wie ein Erdbeben.</p>' },
      { icon: '🌌', title: 'Linsen oder Spiegel?', explode: 0,
        html: '<p>Es gibt zwei große Familien: <b>Refraktoren</b> haben vorne eine Linse (wie das Fernrohr von <b>Galileo</b>, 1609), <b>Reflektoren</b> hinten einen Spiegel (wie dieses hier). Die größten Teleskope der Welt sind alle Spiegelteleskope: Es ist leichter, einen riesigen Spiegel zu bauen als eine riesige Linse.</p>' }
    ],
    facts: [
      { icon: '🌙', title: 'Galilei und der Mond', html: 'Im Jahr 1609 richtete <b>Galileo Galilei</b> sein Fernrohr zum Himmel und entdeckte die Krater des Mondes, die Phasen der Venus und vier Monde des Jupiter.' },
      { icon: '🏔️', title: 'Auf den Berggipfeln', html: 'Große Sternwarten baut man auf hohen, einsamen Bergen, zum Beispiel in Chile oder auf den Kanarischen Inseln: Dort ist die Luft dünner, trockener und ruhiger.' },
      { icon: '🛰️', title: 'Teleskope im Weltraum', html: 'Das <b>James-Webb-Teleskop</b> hat einen Spiegel von 6,5 Metern aus 18 goldenen Sechsecken und beobachtet das Universum aus dem Weltraum, weit weg von der Luft, die die Sterne flimmern lässt.' },
      { icon: '⏳', title: 'In die Vergangenheit schauen', html: 'Licht ist schnell, aber nicht unendlich schnell: Der Stern, den du heute Nacht siehst, hat dieses Licht vielleicht <b>vor Jahrhunderten</b> ausgesandt. Ein Teleskop ist eine Zeitmaschine!' },
      { icon: '⚠️', title: 'Niemals die Sonne!', html: 'Schau <b>niemals</b> ohne einen besonderen Filter mit einem Teleskop oder Fernglas in die Sonne: Das gebündelte Licht kann das Auge im Nu schädigen.' }
    ],
    quiz: [
      { type: 'mc', q: 'Was macht der Hauptspiegel eines Spiegelteleskops?', options: ['Er färbt das Licht', 'Er sammelt das Licht und bündelt es im Brennpunkt', 'Er erzeugt Licht', 'Er blockiert das Mondlicht'], answer: 1, explain: 'Er ist konkav: Er wirft die parallelen Strahlen zurück und lässt sie im Brennpunkt zusammenlaufen.' },
      { type: 'mc', q: 'Wer erfand das Spiegelteleskop?', options: ['Galileo Galilei', 'Isaac Newton', 'Albert Einstein', 'Leonardo da Vinci'], answer: 1, explain: 'Newton baute 1668 den ersten Reflektor. Galilei benutzte ein Linsenfernrohr.' },
      { type: 'mc', q: 'Wozu dient der Sucher?', options: ['Zum Scharfstellen', 'Um das Teleskop auf das richtige Objekt zu richten', 'Um stärker zu vergrößern', 'Um den Spiegel zu kühlen'], answer: 1, explain: 'Er ist ein kleines Fernrohr mit großem Blickfeld, das als Visier benutzt wird.' },
      { type: 'tf', q: 'Man kann mit einem Teleskop ohne Filter in die Sonne schauen, wenn man es nur kurz tut.', answer: false, explain: 'Niemals! Das gebündelte Licht schädigt das Auge sofort. Man braucht geprüfte Sonnenfilter.' },
      { type: 'num', q: 'Ein Teleskop hat eine Brennweite von 1200 mm und das Okular 12 mm. Wie stark vergrößert es?', answer: 100, unit: '×', explain: '1200 ÷ 12 = 100-fache Vergrößerung.' },
      { type: 'mc', q: 'Warum zeigt ein Teleskop Sterne, die mit bloßem Auge unsichtbar sind?', options: ['Weil es sich den Sternen nähert', 'Weil es viel mehr Licht sammelt als das Auge', 'Weil es die Sterne anzündet', 'Weil es die Wolken herausfiltert'], answer: 1, explain: 'Der Spiegel hat im Vergleich zur Pupille eine riesige Fläche: Er sammelt viel mehr Licht.' }
    ]
  });
})();
