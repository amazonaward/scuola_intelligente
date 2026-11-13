/* Il frigorifero (combinato: freezer in alto, frigo in basso). Davanti = +z, alto = +y, le porte sono aperte.
   Circuito del refrigerante: compressore → condensatore (dietro) → capillare → evaporatore (nel freezer) → compressore. */
(function () {
  const ZC = -0.66; // piano del condensatore (dietro al mobile)
  const serp = (x0, x1, ys, z) => { const out = []; ys.forEach((y, i) => { const a = i % 2 ? x1 : x0, b = i % 2 ? x0 : x1; out.push([a, y, z], [b, y, z]); }); return out; };
  const CROWS = Array.from({ length: 9 }, (_, i) => 2.75 - i * 0.25);
  const COND = serp(0.45, -0.45, CROWS, ZC);
  const EROWS = [2.25, 2.42, 2.59, 2.76];
  const EVAP = serp(-0.42, 0.42, EROWS, -0.44);
  const HOT = [[0.2, 0.46, -0.8], [0.5, 0.62, -0.8], [0.55, 2.75, ZC], ...COND, [-0.52, 0.65, ZC], [-0.52, 0.65, -0.58], [-0.48, 2.25, -0.5]];
  const COLD = [[-0.48, 2.25, -0.5], ...EVAP, [0.5, 2.76, -0.5], [0.5, 2.76, -0.76], [0.4, 0.75, -0.76], [0.28, 0.46, -0.8]];
  const drops = (path, color, n, rate) => Array.from({ length: n }, (_, k) => ({ t: 'sphere', r: 0.045, n: 6, m: 8, pos: path[0], color, anim: { type: 'path', pts: path, wave: 'saw', rate, phase: k / n } }));
  const glass = (y) => ({ t: 'box', s: [1.04, 0.025, 0.9], pos: [0, y, 0.0], div: 2 });
  /* porta: parte dal cardine (x = 0) e si estende verso +x; aperta ruotando intorno a y */
  const DOOR_OPEN = -112;

  LIBRARY({
    id: 'frigorifero',
    lang: 'de',
    title: 'Der Kühlschrank',
    intro: 'Der Kühlschrank „erzeugt“ keine Kälte: Er <b>entzieht den Lebensmitteln die Wärme</b> und gibt sie nach hinten ab. Das schafft er mit einer besonderen Flüssigkeit, die in einem geschlossenen Kreislauf strömt und ständig verdampft und wieder flüssig wird. Folge ihrer Reise!',
    model: {
      rx: 0.18, ry: -0.5, speed: 0.35, height: 490,
      parts: [
        { id: 'mobile', name: 'Gehäuse (Korpus)', label: 'Gehäuse', color: '#f1f5f9', alpha: 0.3, explode: [0, 0, 0],
          info: '<p>Es ist die große „Schachtel“ des Kühlschranks: außen aus lackiertem Blech, innen aus weißem, leicht zu reinigendem Kunststoff.</p>',
          shapes: [ { t: 'box', s: [1.2, 3.0, 0.05], pos: [0, 1.5, -0.525] }, { t: 'box', s: [0.06, 3.0, 1.1], pos: [-0.57, 1.5, 0] }, { t: 'box', s: [0.06, 3.0, 1.1], pos: [0.57, 1.5, 0] },
            { t: 'box', s: [1.2, 0.06, 1.1], pos: [0, 2.97, 0] }, { t: 'box', s: [1.2, 0.12, 1.1], pos: [0, 0.06, 0] },
            { t: 'box', s: [1.08, 0.06, 1.0], pos: [0, 2.05, 0.03], color: '#e2e8f0', alpha: 0.7 },
            { t: 'box', s: [1.2, 0.08, 0.04], pos: [0, 0.04, 0.56], color: '#64748b', alpha: 0.8 } ] },
        { id: 'isolamento', name: 'Dämmung (Schaum)', label: 'Dämmung', color: '#fde68a', alpha: 0.16, explode: [0, 0, -0.35],
          info: '<p>Zwischen dem Außenblech und dem Innenkunststoff liegt eine Schicht <b>Schaum</b> voller Luftbläschen. Die ruhende Luft lässt nur sehr wenig Wärme durch: So dringt die Wärme der Küche nicht ein.</p>',
          more: '<p>Es ist <b>Polyurethan</b>-Schaum, 4–7 cm dick. Es ist dasselbe Prinzip wie bei der Daunenjacke oder der Thermosflasche: Ein <b>dämmendes</b> Material bremst den Wärmefluss, der immer vom wärmeren zum kälteren Körper geht.</p>',
          shapes: [ { t: 'box', s: [1.08, 2.8, 0.06], pos: [0, 1.52, -0.47] }, { t: 'box', s: [0.05, 2.8, 0.98], pos: [-0.515, 1.52, 0.0] }, { t: 'box', s: [0.05, 2.8, 0.98], pos: [0.515, 1.52, 0.0] } ] },
        { id: 'porta-frigo', name: 'Kühlschranktür', label: 'Tür', color: '#e5e7eb', pos: [-0.6, 0.12, 0.56], rot: [0, DOOR_OPEN, 0], explode: [-0.35, 0, 0.35],
          info: '<p>Auch die Tür ist mit Dämmschaum gefüllt. Auf der Innenseite sind die <b>Türfächer</b> für Flaschen, Eier und Butter.</p>',
          shapes: [ { t: 'box', s: [1.2, 1.9, 0.09], pos: [0.6, 0.95, 0.045] }, { t: 'box', s: [1.04, 1.74, 0.05], pos: [0.6, 0.95, -0.02], color: '#f8fafc' },
            { t: 'box', s: [0.06, 0.9, 0.05], pos: [1.1, 1.3, 0.12], color: '#94a3b8' },
            ...[0.35, 0.85, 1.35].map((y) => ({ t: 'group', pos: [0.6, y, -0.13], shapes: [ { t: 'box', s: [0.96, 0.03, 0.17] }, { t: 'box', s: [0.96, 0.14, 0.02], pos: [0, 0.07, -0.085], color: '#bae6fd', alpha: 0.6 } ] })),
            { t: 'cyl', r: 0.06, h: 0.42, n: 14, pos: [0.4, 0.58, -0.13], color: '#16a34a', alpha: 0.85 }, { t: 'cyl', r: 0.025, h: 0.12, n: 10, pos: [0.4, 0.85, -0.13], color: '#16a34a', alpha: 0.85 },
            { t: 'cyl', r: 0.065, h: 0.3, n: 14, pos: [0.65, 0.52, -0.13], color: '#f8fafc' }, { t: 'box', s: [0.18, 0.2, 0.09], pos: [0.85, 0.47, -0.13], color: '#fde047' } ] },
        { id: 'porta-freezer', name: 'Gefrierfachtür', label: 'Gefrierfachtür', color: '#e5e7eb', pos: [-0.6, 2.08, 0.56], rot: [0, DOOR_OPEN, 0], explode: [-0.35, 0.2, 0.35],
          info: '<p>Das <b>Gefrierfach</b> hat seine eigene Tür: Darin herrschen <b>−18 °C</b>, genug, um Wasser in Eis zu verwandeln und Lebensmittel monatelang haltbar zu machen.</p>',
          shapes: [ { t: 'box', s: [1.2, 0.9, 0.09], pos: [0.6, 0.45, 0.045] }, { t: 'box', s: [1.04, 0.76, 0.05], pos: [0.6, 0.45, -0.02], color: '#f8fafc' }, { t: 'box', s: [0.06, 0.45, 0.05], pos: [1.1, 0.3, 0.12], color: '#94a3b8' } ] },
        { id: 'guarnizione', name: 'Magnetdichtung', label: 'Dichtung', color: '#475569', pos: [-0.6, 0.12, 0.56], rot: [0, DOOR_OPEN, 0], explode: [-0.35, 0, 0.6],
          info: '<p>Der Gummirand rund um die Tür enthält einen <b>Magneten</b>, der sie fest gegen das Metallgehäuse zieht: So entweicht die kalte Luft nicht.</p>',
          more: '<p>Mach einen Test: Klemme ein Blatt Papier in die Tür. Wenn es sich leicht herausziehen lässt, ist die Dichtung beschädigt und der Kühlschrank verbraucht mehr. Ein Kühlschrankmagnet haftet gerade deshalb, weil das Blech aus <b>Eisen</b> ist.</p>',
          shapes: [ { t: 'box', s: [1.12, 0.04, 0.04], pos: [0.6, 0.06, -0.02] }, { t: 'box', s: [1.12, 0.04, 0.04], pos: [0.6, 1.84, -0.02] },
            { t: 'box', s: [0.04, 1.82, 0.04], pos: [0.06, 0.95, -0.02] }, { t: 'box', s: [0.04, 1.82, 0.04], pos: [1.14, 0.95, -0.02] } ] },
        { id: 'ripiani', name: 'Ablagen und Schubladen', label: 'Ablagen', color: '#bae6fd', alpha: 0.45, explode: [0, 0, 0.7],
          info: '<p>Glasablagen und Schubladen für Obst und Gemüse. Unten, nahe der Gemüseschublade, ist die Luft weniger kalt; oben ist sie kälter.</p>',
          more: '<p>Kalte Luft ist <b>dichter</b> und sinkt ab, wärmere steigt auf: So entstehen Zonen mit unterschiedlicher Temperatur. Deshalb kommen Fleisch und Fisch auf die kälteste Ablage und das Gemüse in die Schublade.</p>',
          shapes: [ glass(0.55), glass(1.05), glass(1.5), { t: 'box', s: [0.98, 0.32, 0.8], pos: [0, 0.3, 0.02], color: '#a7f3d0' }, glass(2.45) ] },
        { id: 'cibi', name: 'Lebensmittel', color: '#ef4444', explode: [0, 0, 1.1],
          info: '<p>Lebensmittel halten sich in der Kälte besser, weil <b>Bakterien</b> und Schimmelpilze, die sie verderben lassen, bei Kälte viel langsamer wachsen.</p>',
          more: '<p>Im Kühlschrank (etwa 4 °C) werden die Bakterien langsamer; im Gefrierfach (−18 °C) stehen sie fast ganz still, sterben aber nicht ab: Deshalb muss aufgetautes Essen bald verzehrt werden.</p>',
          shapes: [ { t: 'sphere', r: 0.11, n: 10, m: 14, pos: [-0.25, 0.66, 0.05] }, { t: 'sphere', r: 0.1, n: 10, m: 14, pos: [-0.05, 0.65, 0.12], color: '#84cc16' },
            { t: 'cyl', r: 0.17, h: 0.12, n: 20, pos: [0.25, 1.13, 0.0], color: '#fde68a' }, { t: 'box', s: [0.3, 0.16, 0.2], pos: [-0.2, 1.15, -0.05], color: '#38bdf8' },
            { t: 'cyl', r: 0.07, h: 0.32, n: 14, pos: [0.3, 1.68, -0.15], color: '#f8fafc' }, { t: 'cyl', r: 0.07, h: 0.06, n: 14, pos: [0.3, 1.87, -0.15], color: '#2563eb' },
            { t: 'box', s: [0.36, 0.1, 0.24], pos: [-0.2, 2.53, 0.08], color: '#c4b5fd' }, { t: 'box', s: [0.28, 0.08, 0.2], pos: [0.2, 2.52, 0.1], color: '#e0f2fe' },
            { t: 'sphere', r: 0.06, n: 8, m: 10, pos: [0.0, 0.42, 0.15], color: '#f97316' }, { t: 'sphere', r: 0.06, n: 8, m: 10, pos: [0.14, 0.41, 0.1], color: '#ef4444' } ] },
        { id: 'compressore', name: 'Kompressor', color: '#1f2937', pos: [0.2, 0.28, -0.8], explode: [0.4, -0.2, -0.8],
          info: '<p>Er ist das „Herz“ des Kühlschranks, eine Pumpe mit Elektromotor. Er <b>presst</b> das Kältemittelgas zusammen: Zusammengedrückt wird das Gas heiß und strömt zum Verflüssiger.</p>',
          more: '<p>Wenn man ein Gas zusammendrückt, führt man ihm Energie zu, und seine Temperatur steigt (das spürst du auch beim Aufpumpen eines Fahrradreifens: Die Pumpe wird warm). Das Brummen, das du ab und zu hörst, ist der Kompressor, der anspringt.</p>',
          anim: { type: 'move', dir: [1, 0, 0], amp: 0.006, wave: 'sin', rate: 9 },
          shapes: [ { t: 'sphere', r: 1, n: 12, m: 20, scale: [0.26, 0.2, 0.2] }, { t: 'cyl', r: 0.24, h: 0.04, n: 24, pos: [0, -0.02, 0], color: '#111827' },
            { t: 'box', s: [0.6, 0.04, 0.4], pos: [0, -0.2, 0], color: '#475569' }, { t: 'box', s: [0.12, 0.1, 0.08], pos: [-0.2, 0.05, 0.16], color: '#0f172a' } ] },
        { id: 'condensatore', name: 'Verflüssiger (Gitter hinten)', label: 'Verflüssiger', color: '#334155', explode: [0, 0, -0.9],
          info: '<p>Er ist das schwarze Gitter hinten am Kühlschrank. Das heiße Gas durchströmt es, gibt seine Wärme an die Luft der Küche ab und kühlt sich ab, bis es <b>flüssig</b> wird. Berühre es (vorsichtig!): Es ist lauwarm.</p>',
          more: '<p>Der Übergang vom Gas zur Flüssigkeit heißt <b>Kondensation</b> und setzt Wärme frei, wie der Dampf, der sich am Topfdeckel niederschlägt. Wenn das Gitter voller Staub ist oder an der Wand anliegt, entweicht die Wärme schlecht und der Kühlschrank verbraucht mehr.</p>',
          shapes: [ { t: 'pipe', r: 0.022, n: 6, pts: COND }, ...Array.from({ length: 10 }, (_, k) => ({ t: 'cyl', r: 0.006, h: 2.1, n: 4, pos: [-0.42 + k * 0.093, 1.75, ZC - 0.03], color: '#475569' })) ] },
        { id: 'capillare', name: 'Kapillarrohr (Expansion)', label: 'Kapillarrohr', color: '#b45309', explode: [-0.5, 0, -0.6],
          info: '<p>Es ist ein hauchdünnes Röhrchen, wie ein Kupferspaghetto. Die Flüssigkeit zwängt sich mühsam hindurch und findet am anderen Ende viel Platz: Ihr Druck bricht zusammen, und sie wird <b>eiskalt</b>.</p>',
          more: '<p>Wenn der Druck plötzlich sinkt, beginnt die Flüssigkeit schon bei −25 °C zu sieden. Etwas Ähnliches passiert bei einer Sprühdose: Wenn du lange sprühst, wird sie kalt.</p>',
          shapes: [ { t: 'pipe', r: 0.014, n: 6, curve: true, pts: [[-0.45, 0.75, ZC], [-0.52, 0.65, ZC], [-0.52, 0.65, -0.58], [-0.5, 1.4, -0.55], [-0.48, 2.25, -0.5]] },
            { t: 'cyl', r: 0.035, h: 0.18, n: 12, pos: [-0.52, 0.55, ZC], color: '#78716c' } ] },
        { id: 'evaporatore', name: 'Verdampfer', color: '#93c5fd', explode: [0, 0.45, 0.25],
          info: '<p>Im Gefrierfach verläuft hinter der Wand eine eiskalte Rohrschlange. Hier <b>verdampft</b> das Kältemittel: Dafür braucht es Wärme und „stiehlt“ sie der Luft und den Lebensmitteln. Das ist die Kälte!</p>',
          more: '<p>Damit eine Flüssigkeit verdampft, braucht es Energie (die <b>latente Wärme</b>). Aus demselben Grund frierst du, wenn du aus dem Wasser kommst: Der Schweiß oder das Wasser, die verdunsten, nehmen dir Wärme weg. Am Verdampfer bildet sich oft <b>Reif</b>.</p>',
          shapes: [ { t: 'pipe', r: 0.026, n: 6, pts: EVAP }, { t: 'box', s: [0.95, 0.68, 0.015], pos: [0, 2.5, -0.465], color: '#dbeafe', alpha: 0.7 } ] },
        { id: 'refrigerante-caldo', name: 'Heißes Kältemittel (verdichtet)', label: 'Heißes Kältemittel', color: '#f97316', noLabel: true, explode: [0, 0, -0.9],
          info: '<p>Nach dem Kompressor ist das Kältemittel ein <b>heißes, zusammengepresstes Gas</b>. Im Verflüssiger verliert es Wärme und wird flüssig.</p>',
          shapes: drops(HOT, '#f97316', 16, 0.35) },
        { id: 'refrigerante-freddo', name: 'Kaltes Kältemittel', label: 'Kaltes Kältemittel', color: '#2563eb', noLabel: true, explode: [0, 0.45, 0.25],
          info: '<p>Nach dem Kapillarrohr ist das Kältemittel <b>kalt</b> und hat niedrigen Druck. Im Verdampfer nimmt es die Wärme des Kühlschranks auf und wird wieder zu Gas, bereit für den Kompressor.</p>',
          more: '<p>Heute verwendet man Kältemittel wie <b>Isobutan</b> (R600a), die die Ozonschicht nicht schädigen. Die alten FCKW dagegen zerstörten sie und wurden 1987 verboten (Montrealer Protokoll).</p>',
          shapes: drops(COLD, '#2563eb', 10, 0.5) },
        { id: 'calore', name: 'Austretende Wärme', label: 'Wärme', color: '#ef4444', alpha: 0.7, explode: [0, 0, -1.1],
          info: '<p>Die den Lebensmitteln entzogene Wärme plus die des Motors tritt am Verflüssiger aus und heizt die Küche ein wenig auf. Die warme Luft <b>steigt</b> auf.</p>',
          shapes: Array.from({ length: 8 }, (_, k) => ({ t: 'sphere', r: 0.05, n: 6, m: 8, pos: [-0.35 + (k % 4) * 0.23, 0.9 + (k > 3 ? 0.9 : 0), -0.8],
            anim: [{ type: 'move', dir: [0, 1, 0], amp: 0.9, wave: 'saw', rate: 0.6, phase: k / 8 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.6, phase: k / 8 }] })) },
        { id: 'aria-fredda', name: 'Kalte Luft', label: 'Kalte Luft', color: '#7dd3fc', alpha: 0.8, explode: [0, 0, 0.7],
          info: '<p>Die vom Verdampfer abgekühlte Luft ist schwerer und <b>sinkt</b> auf die Ablagen ab, während die wärmere Luft aufsteigt: Die Luft zirkuliert im Kühlschrank von allein.</p>',
          shapes: Array.from({ length: 8 }, (_, k) => ({ t: 'sphere', r: 0.04, n: 6, m: 8, pos: [-0.3 + (k % 4) * 0.2, 1.95, 0.25 - (k > 3 ? 0.25 : 0)],
            anim: [{ type: 'move', dir: [0, -1, 0], amp: 1.5, wave: 'saw', rate: 0.4, phase: k / 8 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.4, phase: k / 8 }] })) },
        { id: 'termostato', name: 'Thermostat und Licht', label: 'Thermostat', color: '#f8fafc', pos: [0.38, 1.92, 0.25], explode: [0.4, 0, 0.6],
          info: '<p>Das <b>Thermostat</b> misst die Temperatur: Wenn es innen kalt genug ist, schaltet es den Kompressor aus, und wenn es sich erwärmt, schaltet es ihn wieder ein. Daneben sitzt die Lampe, die angeht, wenn man die Tür öffnet.</p>',
          more: '<p>Die richtige Temperatur für den Kühlschrank beträgt etwa <b>4 °C</b>, für das Gefrierfach <b>−18 °C</b>. Jedes Mal, wenn du die Tür offen lässt, strömt warme, feuchte Luft hinein, und der Kompressor muss mehr arbeiten.</p>',
          shapes: [ { t: 'box', s: [0.3, 0.14, 0.2] }, { t: 'cyl', r: 0.045, h: 0.04, n: 16, rot: [90, 0, 0], pos: [0.06, 0, 0.11], color: '#475569' },
            { t: 'sphere', r: 0.05, n: 8, m: 12, pos: [-0.08, -0.08, 0.04], color: '#fef9c3', anim: { type: 'blink', color: '#ffffff', wave: 'sin01', rate: 0.5 } } ] }
      ]
    },
    steps: [
      { icon: '🧊', title: 'Kälte wird nicht gemacht: Man bringt die Wärme weg', explode: 0,
        html: '<p>Der Kühlschrank ist eine <b>Wärmepumpe</b>: Er nimmt die Wärme von innen (aus den Lebensmitteln) und gibt sie nach außen in die Küche ab. Ohne Wärme bleibt innen die Kälte.</p><p>Der „Lastwagen“, der die Wärme transportiert, ist eine besondere Flüssigkeit, das <b>Kältemittel</b>, das in einem geschlossenen Rohrkreislauf umläuft.</p>' },
      { icon: '🔄', title: 'Die Reise des Kältemittels', focus: ['compressore', 'condensatore', 'capillare', 'evaporatore', 'refrigerante-caldo', 'refrigerante-freddo'], explode: 0.3, view: { rx: 0.25, ry: -2.3 },
        html: '<p>Das Kältemittel macht immer dieselbe Runde: <b>Kompressor → Verflüssiger → Kapillarrohr → Verdampfer</b> und wieder zum Kompressor.</p><p>In Orange ist es heiß und verdichtet, in Blau ist es kalt. Es wechselt ständig seinen Zustand: von Gas zu Flüssigkeit und von Flüssigkeit zu Gas.</p>' },
      { icon: '💪', title: '1 · Der Kompressor presst zusammen', focus: ['compressore', 'refrigerante-caldo'], explode: 0.2, view: { rx: 0.42, ry: -2.5 },
        html: '<p>Der <b>Kompressor</b> ist eine Pumpe mit Elektromotor. Er drückt das Kältemittelgas zusammen: Ein verdichtetes Gas wird <b>heiß</b>, genau wie die Fahrradpumpe, wenn du einen Reifen aufpumpst.</p>' },
      { icon: '♨️', title: '2 · Der Verflüssiger gibt die Wärme ab', focus: ['condensatore', 'refrigerante-caldo', 'calore'], explode: 0.25, view: { rx: 0.15, ry: -2.75 },
        html: '<p>Das heiße Gas durchströmt das schwarze Gitter auf der Rückseite. Es gibt seine Wärme an die Luft der Küche ab, kühlt sich ab und wird <b>flüssig</b> (Kondensation).</p><p class="tip">🖐️ Deshalb ist die Luft hinter dem Kühlschrank lauwarm: Es ist die Wärme, die deinen Lebensmitteln entzogen wurde!</p>' },
      { icon: '🍝', title: '3 · Das Kapillarrohr: Druck runter, Temperatur runter', focus: ['capillare', 'refrigerante-caldo', 'refrigerante-freddo', 'evaporatore'], explode: 0.2, view: { rx: 0.2, ry: -2.2 },
        html: '<p>Die Flüssigkeit strömt durch ein Röhrchen, so dünn wie ein Spaghetto. Am Ausgang findet sie viel Platz: Der Druck bricht zusammen, und das Kältemittel wird <b>eiskalt</b>, unter −20 °C.</p>' },
      { icon: '❄️', title: '4 · Der Verdampfer stiehlt die Wärme', focus: ['evaporatore', 'refrigerante-freddo', 'aria-fredda', 'cibi', 'ripiani'], explode: 0, view: { rx: 0.15, ry: -0.35 },
        html: '<p>Im <b>Verdampfer</b> siedet das Kältemittel und wird wieder zu Gas. Zum Verdampfen braucht es Wärme und nimmt sie der Luft und den Lebensmitteln: So kühlt der Kühlschrank ab.</p><p>Die kalte Luft ist schwerer und <b>sinkt</b> auf die Ablagen ab.</p><p class="tip">💧 Das passiert auch dir: Wenn du aus dem Schwimmbad kommst, nimmt das Wasser, das von deiner Haut verdunstet, Wärme mit, und du frierst.</p>' },
      { icon: '🧱', title: 'Die Kälte drinnen halten', focus: ['isolamento', 'guarnizione', 'porta-frigo', 'porta-freezer', 'termostato'], explode: 0.45, view: { rx: 0.2, ry: -0.75 },
        html: '<p>Wände und Türen sind mit <b>Dämmschaum</b> gefüllt, und die <b>Magnetdichtung</b> schließt die Tür dicht. Das <b>Thermostat</b> schaltet den Kompressor nur ein, wenn es nötig ist.</p><p class="tip">🚪 Lass die Tür nicht lange offen und stelle keine heißen Speisen in den Kühlschrank: Der Kompressor müsste viel mehr arbeiten.</p>' }
    ],
    facts: [
      { icon: '🏔️', title: 'Vor dem Kühlschrank: die Eiskeller', html: 'Früher bewahrte man Lebensmittel in <b>Eiskellern</b> auf: Gruben oder Räume, in die man im Winter gesammelten Schnee legte, mit Stroh bedeckt, damit er bis zum Sommer hielt.' },
      { icon: '🔁', title: 'Ein umgekehrter Kühlschrank', html: 'Die <b>Klimaanlage</b> und die <b>Wärmepumpe</b>, die Häuser heizt, funktionieren wie ein Kühlschrank: Sie bringen Wärme von einem Ort an einen anderen.' },
      { icon: '🧪', title: 'Ein ozonfreundliches Gas', html: 'Die alten Kühlschränke verwendeten Gase (FCKW), die die Ozonschicht zerstörten. Seit 1987 sind sie weltweit verboten, und heute erholt sich die Ozonschicht.' },
      { icon: '⚡', title: 'Immer eingeschaltet', html: 'Der Kühlschrank ist das einzige Haushaltsgerät, das Tag und Nacht läuft: Deshalb lohnt es sich, ein Gerät mit hoher Energieeffizienzklasse zu wählen und das Gitter hinten sauber zu halten.' },
      { icon: '🧑‍🔬', title: 'Einstein und der Kühlschrank', html: 'Auch Albert Einstein ließ sich 1930 zusammen mit Leó Szilárd einen Kühlschrank ohne bewegliche Teile patentieren!' }
    ],
    quiz: [
      { type: 'mc', q: 'Was macht ein Kühlschrank wirklich?', options: ['Er erzeugt Kälte aus dem Nichts', 'Er bringt die Wärme von innen nach außen', 'Er benutzt gekauftes Eis', 'Er bläst Luft von draußen hinein'], answer: 1, explain: 'Der Kühlschrank ist eine Wärmepumpe: Er entzieht dem Innenraum Wärme und gibt sie am Verflüssiger nach außen ab.' },
      { type: 'order', q: 'Bringe die Reise des Kältemittels in die richtige Reihenfolge, beginnend beim Kompressor', items: ['Kompressor', 'Verflüssiger', 'Kapillarrohr', 'Verdampfer'], explain: 'Verdichtet und heiß, dann flüssig im Verflüssiger, kalt nach dem Kapillarrohr, verdampft im Gefrierfach und kehrt zum Kompressor zurück.' },
      { type: 'mc', q: 'Warum ist die Luft hinter dem Kühlschrank lauwarm?', options: ['Dort ist ein kleiner Heizofen', 'Der Verflüssiger gibt die den Lebensmitteln entzogene Wärme ab', 'Die Lampe heizt', 'Das ist ein Defekt'], answer: 1, explain: 'Im Verflüssiger gibt das Kältemittel die im Kühlschrank aufgenommene Wärme an die Luft der Küche ab.' },
      { type: 'tf', q: 'Wenn eine Flüssigkeit verdampft, nimmt sie Wärme aus ihrer Umgebung auf.', answer: true, explain: 'Zum Verdampfen braucht es Energie: Deshalb kühlt der Verdampfer den Kühlschrank (und der Schweiß kühlt die Haut).' },
      { type: 'mc', q: 'Wozu dient der Schaum in den Wänden?', options: ['Um den Kühlschrank schwerer zu machen', 'Zum Dämmen: Die Wärme der Küche dringt kaum ein', 'Um das Essen zu parfümieren', 'Um Licht zu machen'], answer: 1, explain: 'Der Schaum voller Luftbläschen ist ein ausgezeichneter Wärmedämmstoff.' },
      { type: 'num', q: 'Bei wie viel Grad unter null hält man ein Gefrierfach normalerweise? (Schreibe nur die Zahl, ohne Minus)', answer: 18, explain: 'Das Gefrierfach arbeitet bei etwa −18 °C; der Kühlschrank bei etwa 4 °C.' }
    ]
  });
})();
