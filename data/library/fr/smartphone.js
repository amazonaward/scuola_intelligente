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
    lang: 'fr',
    id: 'smartphone',
    title: 'Le smartphone',
    intro: 'Le smartphone est un <b>petit ordinateur de poche</b> qui est aussi téléphone, appareil photo, GPS et lecteur de musique. Démonte-le couche par couche : du verre qui sent ton doigt jusqu\'à la batterie !',
    model: {
      rx: 0.18, ry: -0.75, speed: 0.45, height: 470, fit: 0.95,
      parts: [
        { id: 'vetro', name: 'Verre tactile (écran tactile)', label: 'Verre tactile', color: '#bae6fd', alpha: 0.28, pos: [0, 0, 0.11], explode: [0, 0, 1.5],
          info: '<p>C\'est le verre que tu touches. Dessous, il y a une grille invisible de fils très fins qui sent où tu poses le doigt, parce que ton corps <b>conduit un peu d\'électricité</b>.</p>',
          more: '<p>C\'est un écran tactile <b>capacitif</b> : les lignes et les colonnes d\'électrodes transparentes (oxyde d\'indium-étain) forment plein de petits condensateurs. Le doigt en change la charge et la puce calcule les coordonnées du toucher plus de 100 fois par seconde. C\'est pour cela qu\'avec des gants normaux, ça ne marche pas !</p>',
          shapes: [ { t: 'extrude', d: 0.03, pts: rrect(W, H, RC, 8) },
            { t: 'group', pos: [0, 0, 0.02], shapes: Array.from({ length: 5 }, (_, k) => ({ t: 'box', div: 1, s: [0.006, H - 0.3, 0.002], pos: [-0.5 + k * 0.25, 0, 0], color: '#7dd3fc', alpha: 0.5 }))
              .concat(Array.from({ length: 9 }, (_, k) => ({ t: 'box', div: 1, s: [W - 0.25, 0.006, 0.002], pos: [0, -1.36 + k * 0.34, 0], color: '#7dd3fc', alpha: 0.5 }))) },
            { t: 'extrude', d: 0.01, pts: rrect(0.36, 0.09, 0.045, 3), pos: [0, 1.42, 0.02], color: '#0f172a', alpha: 0.9 } ] },
        { id: 'dito', name: 'Ton doigt', label: 'Toucher', color: '#fda4af', pos: [0.3, -0.2, 0.55], explode: [0, 0, 1.5],
          anim: { type: 'move', dir: [0, 0, -1], amp: 0.36, wave: 'window', from: 0.05, to: 0.35, ramp: 0.35 },
          info: '<p>Quand le doigt touche le verre, la grille de l\'écran tactile sent un petit changement électrique exactement à cet endroit et le téléphone comprend <b>où</b> tu as touché.</p>',
          shapes: [ { t: 'cyl', r: 0.13, h: 0.5, n: 16, rot: [90, 0, 0], pos: [0, 0, 0.25] }, { t: 'sphere', r: 0.13, n: 8, m: 16, hemi: true, rot: [-90, 0, 0], scale: [1, 0.8, 1] },
            { t: 'cyl', r: 0.17, h: 0.01, n: 20, rot: [90, 0, 0], pos: [0, 0, -0.33], color: '#fde047', anim: { type: 'blink', fade: true, wave: 'window', from: 0.17, to: 0.32, ramp: 0.3 } } ] },
        { id: 'display', name: 'Écran OLED', label: 'Écran', color: '#0f172a', pos: [0, 0, 0.07], explode: [0, 0, 1.05],
          info: '<p>C\'est l\'écran qui s\'illumine. Il est fait de millions de petits points colorés, les <b>pixels</b> : chacun s\'allume en rouge, vert ou bleu et ensemble ils forment les images.</p>',
          more: '<p>Dans les écrans <b>OLED</b>, chaque sous-pixel est une minuscule LED organique qui éclaire toute seule : le noir est vraiment éteint, et cela économise la batterie. Un smartphone a environ 2,5 millions de pixels, plus de 400 par pouce.</p>',
          shapes: [ { t: 'extrude', d: 0.025, pts: rrect(W - 0.06, H - 0.06, RC - 0.03, 8) },
            { t: 'extrude', d: 0.006, pts: rrect(W - 0.14, H - 0.14, RC - 0.07, 8), pos: [0, 0, 0.012], color: '#1d4ed8', decal: 1 },
            { t: 'box', s: [W - 0.14, 1.0, 0.004], pos: [0, -0.35, 0.013], color: '#7c3aed', alpha: 0.55, decal: 1 },
            { t: 'box', s: [0.5, 0.06, 0.006], pos: [0, 1.38, 0.014], color: '#e2e8f0', decal: 2 } ].concat(icons, dock) },
        { id: 'telaio', name: 'Châssis (cadre)', label: 'Châssis', color: '#9ca3af', pos: [0, 0, 0], explode: [0, 0, 0],
          info: '<p>C\'est le cadre en métal qui tient tout le téléphone ensemble. Sur les côtés, il y a les <b>boutons</b> du volume et d\'allumage.</p>',
          more: '<p>Le châssis est en <b>aluminium</b> ou en acier : léger et solide. Souvent, certaines parties du bord sont séparées par de fines bandes de plastique parce qu\'elles servent aussi d\'<b>antenne</b>.</p>',
          shapes: [ { t: 'extrude', d: 0.17, pts: ring(rrect(W + 0.04, H + 0.04, RC + 0.02, 8), rrect(W - 0.06, H - 0.06, RC - 0.03, 8)), smooth: true },
            { t: 'box', s: [0.04, 0.22, 0.05], pos: [-0.78, 0.75, 0], color: '#6b7280' }, { t: 'box', s: [0.04, 0.22, 0.05], pos: [-0.78, 0.45, 0], color: '#6b7280' },
            { t: 'box', s: [0.04, 0.35, 0.05], pos: [0.78, 0.6, 0], color: '#6b7280' },
            { t: 'box', s: [0.42, 0.04, 0.12], pos: [0, -1.56, 0], color: '#111827' },
            { t: 'box', s: [0.22, 0.02, 0.055], pos: [0, -1.575, 0], color: '#475569' } ] },
        { id: 'scheda-logica', name: 'Carte logique', label: 'Carte logique', color: '#166534', pos: [0, 0.75, -0.02], explode: [0, 0.25, 0.55],
          info: '<p>C\'est la « carte mère » du téléphone : une petite plaque verte pleine de puces reliées par des pistes de cuivre très fines.</p>',
          more: '<p>Pour tenir en quelques centimètres, la carte est faite de <b>plusieurs couches</b> superposées (jusqu\'à 10 !) et les puces sont empilées les unes sur les autres. Il y a aussi les puces pour le Wi-Fi, le Bluetooth, le GPS et le modem pour le réseau mobile.</p>',
          shapes: [ { t: 'box', s: [1.3, 1.3, 0.025] }, chip(0.18, 0.12, '#1f2937', 0.42, -0.4), chip(0.14, 0.14, '#334155', -0.42, -0.42), chip(0.2, 0.1, '#1f2937', -0.4, 0.4),
            chip(0.12, 0.08, '#b45309', 0.45, 0.42), { t: 'box', s: [0.3, 0.06, 0.03], pos: [0, -0.6, 0.025], color: '#d1d5db' } ]
            .concat(Array.from({ length: 6 }, (_, k) => ({ t: 'box', s: [0.025, 0.04, 0.03], pos: [-0.1 + k * 0.05, 0.55, 0.025], color: '#a16207' }))) },
        { id: 'processore', name: 'Processeur (SoC)', label: 'Processeur', color: '#cbd5e1', pos: [0.05, 0.85, 0.03], explode: [0.25, 0.4, 1.0],
          info: '<p>C\'est le <b>cerveau</b> du téléphone. Dans une puce grande comme un ongle, il y a le processeur, la carte graphique et le « cerveau » pour l\'intelligence artificielle.</p>',
          more: '<p>On l\'appelle <b>SoC</b> (System on a Chip, « système sur une puce »). Il contient plus de 15 milliards de transistors larges de quelques nanomètres et travaille avec très peu d\'énergie, pour ne pas trop chauffer et ne pas vider la batterie.</p>',
          shapes: [ { t: 'box', s: [0.42, 0.42, 0.03], color: '#166534' }, { t: 'box', s: [0.34, 0.34, 0.04], pos: [0, 0, 0.03] },
            { t: 'box', s: [0.12, 0.12, 0.005], pos: [-0.07, 0.07, 0.052], color: '#94a3b8', decal: 1 },
            { t: 'box', s: [0.06, 0.06, 0.006], pos: [0.1, -0.08, 0.052], color: '#38bdf8', decal: 1, anim: { type: 'blink', color: '#f0f9ff', wave: 'square', rate: 3 } } ] },
        { id: 'memoria', name: 'Mémoire (RAM et stockage)', label: 'Mémoire', color: '#334155', pos: [-0.4, 1.08, 0.03], explode: [-0.35, 0.35, 0.85],
          info: '<p>Deux types de mémoire : la <b>RAM</b>, l\'établi rapide pour les applis ouvertes, et le <b>stockage</b> où restent photos, vidéos et applis même quand le téléphone est éteint.</p>',
          more: '<p>Le stockage est une mémoire <b>flash</b> : les informations restent piégées sous forme de charges électriques dans de minuscules « cages », même sans courant. 128 Go, ce sont environ mille milliards de bits !</p>',
          shapes: [ { t: 'box', s: [0.32, 0.22, 0.04] }, { t: 'box', s: [0.3, 0.2, 0.004], pos: [0, 0, 0.022], color: '#475569', decal: 1 } ] },
        { id: 'batteria', name: 'Batterie', color: '#1f2937', pos: [0, -0.55, -0.02], explode: [0, -0.2, -0.6],
          info: '<p>C\'est le « réservoir » d\'énergie : une batterie plate au <b>lithium</b> qui se recharge des centaines de fois. Elle occupe presque la moitié du téléphone !</p>',
          more: '<p>Pendant la recharge, les ions de lithium se déplacent d\'un côté à l\'autre de la batterie ; quand tu utilises le téléphone, ils reviennent en arrière et font circuler le courant. Ne la laisse pas au soleil : la chaleur l\'abîme et peut être dangereuse.</p>',
          shapes: [ { t: 'extrude', d: 0.07, pts: rrect(1.25, 1.75, 0.06, 3) }, { t: 'box', s: [1.1, 0.6, 0.004], pos: [0, 0.2, 0.037], color: '#e2e8f0', decal: 1 },
            { t: 'box', s: [0.6, 0.08, 0.004], pos: [0, 0.32, 0.04], color: '#16a34a', decal: 2 }, { t: 'box', s: [0.3, 0.12, 0.03], pos: [0, 0.92, 0], color: '#b45309' },
            { t: 'group', pos: [-0.35, 0.08, 0.042], shapes: [0, 1, 2, 3].map((k) => ({ t: 'box', s: [0.12, 0.16, 0.004], pos: [k * 0.14, 0, 0], color: '#22c55e', decal: 2, anim: { type: 'blink', fade: true, wave: 'window', from: k * 0.2, to: 0.95, ramp: 0.05, cycle: 1 } })) } ] },
        { id: 'fotocamere', name: 'Appareils photo', color: '#111827', pos: [-0.42, 1.12, -0.12], explode: [0, 0.05, -1.6],
          info: '<p>Les appareils photo ont une petite <b>lentille</b> qui recueille la lumière et un <b>capteur</b> qui la transforme en nombres : c\'est ainsi que naît une photo.</p>',
          more: '<p>Le capteur est une grille de millions de photodiodes : chacune mesure la quantité de lumière qui la frappe. Plusieurs appareils photo servent pour différents zooms (grand angle, télé) et le processeur combine plusieurs prises de vue pour de meilleures photos, même dans le noir.</p>',
          shapes: [ { t: 'extrude', d: 0.04, pts: rrect(0.6, 0.6, 0.14, 5), pos: [0, 0, -0.01], color: '#374151' } ].concat(
            [[-0.13, 0.13], [-0.13, -0.13], [0.14, 0]].map(([x, y]) => ({ t: 'group', pos: [x, y, -0.05], shapes: [
              { t: 'cyl', r: 0.105, h: 0.06, n: 28, rot: [90, 0, 0], color: '#9ca3af' }, { t: 'cyl', r: 0.08, h: 0.065, n: 28, rot: [90, 0, 0], color: '#0f172a' },
              { t: 'sphere', r: 0.06, n: 8, m: 16, hemi: true, rot: [-90, 0, 0], pos: [0, 0, -0.03], color: '#1e3a8a' } ] })),
            [{ t: 'cyl', r: 0.03, h: 0.02, n: 12, rot: [90, 0, 0], pos: [0.15, 0.2, -0.04], color: '#fef9c3' }]) },
        { id: 'antenne', name: 'Antennes', color: '#f59e0b', pos: [0, 0, 0], explode: [0.9, 0, 0],
          info: '<p>Les antennes envoient et reçoivent des <b>ondes radio</b>, invisibles, qui voyagent à la vitesse de la lumière jusqu\'à l\'antenne-relais la plus proche. Ainsi tu parles, tu discutes et tu navigues.</p>',
          more: '<p>Un smartphone a différentes antennes pour la 4G/5G, le Wi-Fi, le Bluetooth, le GPS et le NFC (celui qui sert à payer en approchant le téléphone). Les ondes radio transportent les données comme des 0 et des 1, en changeant continuellement de forme.</p>',
          shapes: [ { t: 'pipe', r: 0.018, n: 6, pts: [[-0.5, 1.52, 0.02], [0.5, 1.52, 0.02]] }, { t: 'pipe', r: 0.018, n: 6, pts: [[-0.5, -1.52, 0.02], [0.5, -1.52, 0.02]] },
            { t: 'pipe', r: 0.014, n: 6, pts: [[0.73, 0.2, 0], [0.73, -0.5, 0]] },
            { t: 'group', pos: [0, 1.6, 0], shapes: waves } ] },
        { id: 'altoparlante', name: 'Haut-parleur et microphone', label: 'Haut-parleur', color: '#475569', pos: [0.4, -1.38, 0], explode: [0.35, -0.5, 0.35],
          info: '<p>Le <b>haut-parleur</b> fait vibrer l\'air et produit les sons. Le <b>microphone</b> fait le contraire : il sent les vibrations de ta voix et les transforme en signaux électriques.</p>',
          more: '<p>Dans le haut-parleur, une bobine parcourue par le courant bouge d\'avant en arrière près d\'un aimant et pousse une membrane. Le microphone des smartphones (MEMS) est une puce avec une membrane de silicium plus fine qu\'un cheveu.</p>',
          shapes: [ { t: 'box', s: [0.42, 0.18, 0.1], anim: { type: 'scale', axis: 'z', from: 1, to: 1.25, wave: 'sin', rate: 6 } }, { t: 'box', s: [0.3, 0.1, 0.01], pos: [0, 0, 0.055], color: '#9ca3af', decal: 1 },
            { t: 'box', s: [0.08, 0.08, 0.06], pos: [-0.75, 0, 0], color: '#64748b' } ] },
        { id: 'vibrazione', name: 'Petit moteur de vibration', label: 'Vibration', color: '#a16207', pos: [-0.45, -1.35, 0], explode: [-0.4, -0.5, 0.35],
          info: '<p>Un minuscule moteur avec un poids décalé d\'un côté : quand il tourne, il fait <b>trembler</b> le téléphone. Ainsi tu sens les notifications même dans ta poche.</p>',
          shapes: [ { t: 'cyl', r: 0.07, h: 0.22, n: 16, rot: [0, 0, 90], color: '#9ca3af' },
            { t: 'group', pos: [0.15, 0, 0], anim: { type: 'spin', axis: 'x', rate: 6 }, shapes: [ { t: 'cyl', r: 0.065, h: 0.06, n: 16, rot: [0, 0, 90], color: '#a16207' }, { t: 'box', s: [0.06, 0.06, 0.06], pos: [0, 0.05, 0] } ] } ] },
        { id: 'scocca', name: 'Coque arrière', label: 'Coque', color: '#334155', pos: [0, 0, -0.1], explode: [0, 0, -1.25],
          info: '<p>C\'est le « dos » du téléphone, en verre ou en plastique. Elle protège l\'intérieur et laisse passer les ondes radio et la recharge sans fil.</p>',
          more: '<p>Sous la coque de nombreux téléphones, il y a une <b>bobine</b> de cuivre pour la recharge sans fil : le chargeur crée un champ magnétique qui change et la bobine le retransforme en courant (induction).</p>',
          shapes: [ { t: 'extrude', d: 0.03, pts: rrect(W, H, RC, 8) },
            { t: 'tube', r: 0.36, ri: 0.24, h: 0.012, n: 32, rot: [90, 0, 0], pos: [0, -0.3, 0.022], color: '#b45309' },
            { t: 'box', s: [0.6, 0.6, 0.02], pos: [-0.42, 1.12, -0.018], color: '#1f2937' } ] }
      ]
    },
    steps: [
      { icon: '📱', title: 'Un ordinateur dans la poche', explode: 0, view: { rx: 0.18, ry: -0.75 },
        html: '<p>Dans le smartphone, il y a les mêmes pièces qu\'un ordinateur : <b>processeur</b>, <b>mémoire</b>, <b>écran</b> et <b>batterie</b>, mais écrasées dans moins d\'un centimètre d\'épaisseur !</p><p class="tip">🔁 Comme tout ordinateur : <b>entrée</b> (toucher, microphone, appareil photo) → <b>traitement</b> (processeur) → <b>sortie</b> (écran, haut-parleur).</p>' },
      { icon: '👆', title: 'Le verre qui sent le doigt', focus: ['vetro', 'dito', 'display'], explode: 0.35, loop: [0, 0.45], view: { rx: 0.15, ry: -0.6 },
        html: '<p>Sous le verre, il y a une grille invisible de fils. Ton doigt conduit un tout petit peu d\'électricité : quand tu touches, la grille « sent » un changement exactement à cet endroit.</p><p>Une puce calcule la position du toucher et l\'envoie au processeur : ainsi le téléphone sait quelle appli tu as touchée.</p><p class="tip">🧤 Essaie avec un gant de laine : ça ne marche pas, parce que la laine ne conduit pas !</p>' },
      { icon: '🌈', title: 'Des millions de pixels colorés', focus: ['display'], explode: 0.5, zoom: 1.15, view: { rx: 0.05, ry: -0.35 },
        html: '<p>L\'écran est fait de millions de petits points, les <b>pixels</b>. Chaque pixel a trois petites lumières : <b>rouge</b>, <b>verte</b> et <b>bleue</b>. En les allumant plus ou moins fort, on obtient toutes les couleurs.</p><p>Dans les écrans OLED, chaque petite lumière éclaire toute seule ; le noir, c\'est un pixel éteint.</p>' },
      { icon: '🧠', title: 'Le cerveau : processeur et mémoire', focus: ['scheda-logica', 'processore', 'memoria'], explode: 0.8, view: { rx: 0.2, ry: -0.55 },
        html: '<p>Le <b>processeur</b> (SoC) exécute les instructions des applis des milliards de fois par seconde. La <b>RAM</b> garde les applis ouvertes, le <b>stockage</b> conserve photos, musique et messages même quand le téléphone est éteint.</p><p>Tout est relié par la <b>carte logique</b>, pleine de pistes de cuivre.</p>' },
      { icon: '🔋', title: 'La batterie au lithium', focus: ['batteria', 'scocca'], explode: 0.7, view: { rx: 0.2, ry: -2.4 },
        html: '<p>La batterie est la plus grosse pièce. À l\'intérieur, de minuscules particules appelées <b>ions de lithium</b> se déplacent d\'un côté à l\'autre : quand tu charges le téléphone, elles vont dans un sens, quand tu l\'utilises, elles reviennent et font circuler le courant.</p><p class="tip">🌡️ Les batteries détestent la chaleur : ne laisse pas le téléphone au soleil ou sous l\'oreiller pendant qu\'il charge.</p>' },
      { icon: '📡', title: 'Des ondes radio invisibles', focus: ['antenne', 'telaio', 'scheda-logica'], explode: 0.25, view: { rx: 0.25, ry: -0.5 },
        html: '<p>Quand tu envoies un message, les <b>antennes</b> le transforment en <b>ondes radio</b> : elles voyagent à la vitesse de la lumière jusqu\'à une antenne-relais (la « cellule »), qui le passe au réseau jusqu\'au téléphone de ton ami.</p><p>Les mêmes ondes, mais différentes, servent pour le Wi-Fi, le Bluetooth et le GPS.</p>' },
      { icon: '📸', title: 'Appareils photo, sons et vibration', focus: ['fotocamere', 'altoparlante', 'vibrazione'], explode: 0.6, view: { rx: 0.2, ry: -2.3 },
        html: '<p>Les <b>appareils photo</b> recueillent la lumière avec une petite lentille et la transforment en nombres avec un capteur. Le <b>haut-parleur</b> fait vibrer l\'air, le <b>microphone</b> entend ta voix, et le <b>petit moteur</b> avec un poids décentré fait vibrer le téléphone.</p>' }
    ],
    facts: [
      { icon: '🚀', title: 'Plus puissant que les missions lunaires', html: 'L\'ordinateur qui a guidé Apollo 11 jusqu\'à la Lune en 1969 était des milliers de fois moins puissant que le téléphone que tu as dans ta poche.' },
      { icon: '📞', title: 'Le premier portable', html: 'Le premier téléphone portable (1973) pesait plus d\'un kilo, on l\'appelait « la brique » et sa batterie durait 30 minutes d\'appel.' },
      { icon: '⛏️', title: 'Une mine dans la poche', html: 'Dans un smartphone, il y a plus de 30 éléments chimiques différents, même un peu d\'<b>or</b> et d\'argent. C\'est pour cela qu\'il est important de le <b>recycler</b> et de ne pas le jeter à la poubelle.' },
      { icon: '🛰️', title: 'Le GPS écoute l\'espace', html: 'Pour savoir où tu es, le téléphone reçoit les signaux d\'au moins 4 satellites et calcule ta position d\'après le temps qu\'ils mettent à arriver.' },
      { icon: '🔟', title: 'Un pouce, beaucoup de pixels', html: 'Sur un écran de smartphone, il y a plus de 400 pixels par pouce (2,5 cm) : si proches que l\'œil n\'arrive pas à les distinguer.' }
    ],
    quiz: [
      { type: 'mc', q: 'Comment l\'écran tactile comprend-il où tu touches ?', options: ['Avec une caméra sous le verre', 'Il sent le petit changement électrique du doigt', 'Il mesure la chaleur du doigt', 'Il écoute le bruit du toucher'], answer: 1, explain: 'Le doigt conduit l\'électricité et change la charge de la grille invisible sous le verre.' },
      { type: 'mc', q: 'Quelles trois couleurs forment chaque pixel de l\'écran ?', options: ['Rouge, jaune, bleu', 'Rouge, vert, bleu', 'Blanc, noir, gris', 'Vert, violet, orange'], answer: 1, explain: 'RVB : rouge, vert et bleu. Mélangées, elles forment toutes les couleurs.' },
      { type: 'tf', q: 'Les photos restent dans la mémoire du téléphone même quand tu l\'éteins.', answer: true, explain: 'Les photos sont dans le stockage (mémoire flash), qui ne s\'efface pas sans courant. La RAM, si.' },
      { type: 'mc', q: 'Comment les messages voyagent-ils du téléphone à l\'antenne-relais ?', options: ['Avec des ondes radio', 'Avec un câble invisible', 'Avec le son', 'Avec la lumière du flash'], answer: 0, explain: 'Les antennes transforment les données en ondes radio, qui voyagent à la vitesse de la lumière.' },
      { type: 'mc', q: 'Quelle est la plus grosse pièce dans le smartphone ?', options: ['Le processeur', 'La batterie', 'Le microphone', 'L\'appareil photo'], answer: 1, explain: 'La batterie au lithium occupe presque la moitié de l\'espace intérieur.' },
      { type: 'order', q: 'Remets dans l\'ordre : tu touches l\'icône d\'une appli…', items: ['Le verre tactile sent le doigt', 'Le processeur comprend quelle appli tu as choisie', 'La mémoire charge l\'appli', 'L\'écran affiche l\'appli ouverte'], explain: 'Entrée (toucher) → traitement (processeur et mémoire) → sortie (écran).' }
    ]
  });
})();
