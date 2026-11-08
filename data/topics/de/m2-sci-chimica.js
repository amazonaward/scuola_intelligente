TOPIC('de', {
  id: 'm2-sci-chimica',
  title: `Elemente, Verbindungen, Reaktionen`,
  intro: `Was passiert, wenn du Essig mit Natron mischst? Warum rostet Eisen? Wohin «verschwindet» das Holz, das verbrennt? In dieser Lektion betreten wir die Welt der <b>Atome</b> und <b>Moleküle</b>, lernen Reaktionen aufzuschreiben und zu <b>bilanzieren</b> und zu berechnen, wie viel Produkt man erhält: Das sind die <b>stöchiometrischen Verhältnisse</b>. Und dann geht es ins <b>Labor</b>!`,
  minutes: 50,
  sections: [
    {
      type: 'text', title: `1. Die Materie besteht aus Atomen`,
      html: `<p>Alles, was uns umgibt, besteht aus winzig kleinen Teilchen, den <b>Atomen</b>. Ein Atom ist so klein, dass in einem Salzkorn etwa eine Milliarde Milliarden davon stecken.</p>
<p>Jedes Atom hat:</p>
<ul>
<li>in der Mitte einen <b>Kern</b> mit <b>Protonen</b> (Ladung +) und <b>Neutronen</b> (ohne Ladung);</li>
<li>darum herum die <b>Elektronen</b> (Ladung −), viel leichter, auf Energieniveaus («Schalen») verteilt.</li>
</ul>
<p>Die <b>Ordnungszahl Z</b> ist die Zahl der Protonen: Sie ist der «Personalausweis» des Elements. Alle Atome mit 6 Protonen sind Kohlenstoff, alle mit 8 Protonen sind Sauerstoff.</p>
<p>Ein Atom ist <b>neutral</b>: Es hat genauso viele Elektronen wie Protonen.</p>`
    },
    {
      type: '3d', title: `Das Atom in 3D (Bohr'sches Modell)`,
      scene: 'atom',
      caption: `Wähle ein Element: Sieh dir an, wie die Elektronen in den Schalen angeordnet sind. Die erste Schale enthält höchstens 2 Elektronen, die zweite 8.`,
      options: { elements: ['H', 'He', 'C', 'N', 'O', 'Na', 'Mg', 'Cl'] }
    },
    {
      type: 'text', title: `2. Elemente und Verbindungen`,
      html: `<p>Ein <b>Element</b> ist ein Stoff, der aus nur einer Atomsorte besteht: Eisen (Fe), Sauerstoff (O₂), Gold (Au). Heute kennen wir <b>118 Elemente</b>, geordnet im <b>Periodensystem</b>.</p>
<p>Eine <b>Verbindung</b> ist ein Stoff aus Atomen verschiedener Elemente, die <b>in festen Verhältnissen</b> miteinander verbunden sind: Wasser (H₂O) hat immer 2 Wasserstoffatome auf ein Sauerstoffatom.</p>
<p>Achtung: Eine Verbindung hat <b>völlig andere</b> Eigenschaften als die Elemente, aus denen sie besteht. Natrium (Na) ist ein Metall, das bei Kontakt mit Wasser explodiert, Chlor (Cl₂) ist ein giftiges Gas … aber zusammen bilden sie das <b>Kochsalz</b> (NaCl)!</p>
<p>Ein <b>Gemisch</b> dagegen ist nur eine Mischung (Wasser und Sand, Luft): Die Bestandteile bleiben sie selbst und lassen sich mit physikalischen Methoden trennen.</p>`
    },
    {
      type: 'widget', title: `Das interaktive Periodensystem`,
      widget: 'periodicTable',
      caption: `Tippe auf ein Element, um Ordnungszahl, Masse und Wissenswertes zu sehen. Elemente derselben Spalte (Gruppe) verhalten sich ähnlich.`,
      options: {}
    },
    {
      type: 'text', title: `3. Die Moleküle`,
      html: `<p>Ein <b>Molekül</b> ist eine Gruppe verbundener Atome. Die <b>chemische Formel</b> sagt, welche Atome es gibt und wie viele:</p>
<ul>
<li><b>H₂O</b> (Wasser): 2 Wasserstoff + 1 Sauerstoff.</li>
<li><b>CO₂</b> (Kohlenstoffdioxid): 1 Kohlenstoff + 2 Sauerstoff.</li>
<li><b>CH₄</b> (Methan, das Gas am Herd): 1 Kohlenstoff + 4 Wasserstoff.</li>
</ul>
<p>Das Salz <b>NaCl</b> bildet keine einzelnen Moleküle, sondern ein <b>Kristallgitter</b>: Na⁺- und Cl⁻-Ionen wechseln sich ab wie auf einem dreidimensionalen Schachbrett. Deshalb sind Salzkristalle Würfelchen!</p>`
    },
    {
      type: 'alternatives', title: `Die Moleküle in 3D`,
      intro: `Drehe die Moleküle: Die Form zählt! Wasser ist «gewinkelt», Kohlenstoffdioxid ist gestreckt.`,
      tabs: [
        { label: `💧 H₂O Wasser`, html: `<p>Der Sauerstoff (rot) sitzt in der Mitte, die beiden Wasserstoffe bilden einen Winkel von etwa <b>104,5°</b>. Diese gewinkelte Form macht Wasser fähig, sehr viele Stoffe aufzulösen.</p>`, scene: 'molecule', options: { atoms: [{ x: 0, y: 0.2, z: 0, r: 0.55, color: '#ef4444', label: 'O' }, { x: 0.76, y: -0.39, z: 0, r: 0.35, color: '#94a3b8', label: 'H' }, { x: -0.76, y: -0.39, z: 0, r: 0.35, color: '#94a3b8', label: 'H' }], bonds: [[0, 1], [0, 2]] } },
        { label: `🫧 CO₂`, html: `<p>Ein <b>lineares</b> Molekül: O=C=O. Es ist das Gas der Sprudelbläschen und das, das wir ausatmen. Pflanzen brauchen es für die Fotosynthese.</p>`, scene: 'molecule', options: { atoms: [{ x: 0, y: 0, z: 0, r: 0.5, color: '#374151', label: 'C' }, { x: 1.16, y: 0, z: 0, r: 0.5, color: '#ef4444', label: 'O' }, { x: -1.16, y: 0, z: 0, r: 0.5, color: '#ef4444', label: 'O' }], bonds: [[0, 1], [0, 2]] } },
        { label: `🔥 CH₄ Methan`, html: `<p>Der Kohlenstoff in der Mitte und 4 Wasserstoffe an den Ecken eines <b>Tetraeders</b> (Winkel von 109,5°): Die Atome ordnen sich so weit voneinander entfernt wie möglich an.</p>`, scene: 'molecule', options: { atoms: [{ x: 0, y: 0, z: 0, r: 0.5, color: '#374151', label: 'C' }, { x: 0.63, y: 0.63, z: 0.63, r: 0.32, color: '#94a3b8', label: 'H' }, { x: -0.63, y: -0.63, z: 0.63, r: 0.32, color: '#94a3b8', label: 'H' }, { x: -0.63, y: 0.63, z: -0.63, r: 0.32, color: '#94a3b8', label: 'H' }, { x: 0.63, y: -0.63, z: -0.63, r: 0.32, color: '#94a3b8', label: 'H' }], bonds: [[0, 1], [0, 2], [0, 3], [0, 4]] } },
        { label: `🧂 NaCl Salz`, html: `<p>Ein Stückchen des <b>Kristallgitters</b>: Na⁺ (violett, klein) und Cl⁻ (grün, groß) wechseln sich entlang aller Kanten des Würfels ab.</p>`, scene: 'molecule', options: { atoms: [
          { x: -0.8, y: -0.8, z: -0.8, r: 0.3, color: '#8b5cf6', label: 'Na' }, { x: 0.8, y: -0.8, z: -0.8, r: 0.45, color: '#22c55e', label: 'Cl' },
          { x: -0.8, y: 0.8, z: -0.8, r: 0.45, color: '#22c55e', label: 'Cl' }, { x: 0.8, y: 0.8, z: -0.8, r: 0.3, color: '#8b5cf6', label: 'Na' },
          { x: -0.8, y: -0.8, z: 0.8, r: 0.45, color: '#22c55e', label: 'Cl' }, { x: 0.8, y: -0.8, z: 0.8, r: 0.3, color: '#8b5cf6', label: 'Na' },
          { x: -0.8, y: 0.8, z: 0.8, r: 0.3, color: '#8b5cf6', label: 'Na' }, { x: 0.8, y: 0.8, z: 0.8, r: 0.45, color: '#22c55e', label: 'Cl' }],
          bonds: [[0, 1], [0, 2], [1, 3], [2, 3], [4, 5], [4, 6], [5, 7], [6, 7], [0, 4], [1, 5], [2, 6], [3, 7]] } }
      ]
    },
    {
      type: 'quiz', title: `Mini-Quiz: Atome und Moleküle`,
      questions: [
        { type: 'mc', q: `Die Ordnungszahl Z gibt die Zahl der … an.`, options: [`Neutronen`, `Protonen`, `Moleküle`], answer: 1, explain: `Z = Zahl der Protonen im Kern: Sie bestimmt das Element.` },
        { type: 'mc', q: `Welcher dieser Stoffe ist eine Verbindung?`, options: [`O₂`, `Fe`, `H₂O`], answer: 2, explain: `H₂O enthält Atome zweier verschiedener Elemente (H und O).` },
        { type: 'tf', q: `Kochsalz hat dieselben Eigenschaften wie Natrium und Chlor.`, answer: false, explain: `Eine Verbindung hat neue Eigenschaften: Natrium ist explosiv und Chlor giftig, Salz nicht.` }
      ]
    },
    {
      type: 'text', title: `4. Die chemischen Reaktionen`,
      html: `<p>Bei einer <b>chemischen Reaktion</b> werden die Bindungen zwischen den Atomen gelöst, und es entstehen neue: Die Ausgangsstoffe (<b>Edukte</b>) wandeln sich in neue Stoffe (<b>Produkte</b>) um.</p>
<p>Woran erkennst du, dass eine Reaktion stattgefunden hat? Suche nach diesen <b>Hinweisen</b>:</p>
<ul>
<li>🫧 es bilden sich Gas-<b>Blasen</b>;</li>
<li>🎨 die <b>Farbe</b> ändert sich;</li>
<li>🌫️ es erscheint ein Feststoff, der die Flüssigkeit «trübt» (<b>Niederschlag</b>);</li>
<li>🔥 es wird <b>Wärme</b>, Licht oder eine Flamme erzeugt oder aufgenommen.</li>
</ul>
<p>Eine Reaktion schreibt man als <b>chemische Gleichung</b>: Edukte links, Pfeil, Produkte rechts.</p>
<p style="text-align:center;font-size:1.2em"><b>CH₄ + 2 O₂ → CO₂ + 2 H₂O</b></p>
<p>Die Zahlen vor den Formeln heißen <b>Koeffizienten</b>: Sie sagen, wie viele Moleküle beteiligt sind.</p>`
    },
    {
      type: 'text', title: `5. Die zwei großen Gesetze`,
      html: `<p><b>Gesetz von Lavoisier (Erhaltung der Masse, 1789)</b>: «Nichts entsteht, nichts vergeht, alles verwandelt sich.» Bei einer Reaktion in einem geschlossenen Gefäß ist die <b>Masse der Edukte gleich der Masse der Produkte</b>. Die Atome verschwinden nicht: Sie ordnen sich neu an.</p>
<p><b>Gesetz von Proust (konstante Proportionen, 1799)</b>: In einer Verbindung sind die Elemente immer im <b>gleichen Massenverhältnis</b> verbunden. Im Eisensulfid (FeS) sind immer <b>7 g Eisen auf 4 g Schwefel</b>. Gibt man mehr Eisen dazu, <b>bleibt</b> der Überschuss <b>übrig</b>.</p>
<p>Deshalb muss man eine Gleichung <b>bilanzieren</b>: Links und rechts muss von jedem Element dieselbe Zahl Atome stehen.</p>`
    },
    {
      type: 'svg', title: `Die Waage von Lavoisier`,
      caption: `Vor und nach der Reaktion zeigt die Waage denselben Wert an, wenn das Gefäß geschlossen ist.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<rect x="295" y="80" width="10" height="170" fill="#475569"/>
<rect x="220" y="250" width="160" height="16" rx="4" fill="#334155"/>
<rect x="90" y="76" width="420" height="8" rx="4" fill="#64748b"/>
<polygon points="300,60 290,80 310,80" fill="#334155"/>
<line x1="120" y1="84" x2="120" y2="150" stroke="#64748b" stroke-width="2"/>
<line x1="480" y1="84" x2="480" y2="150" stroke="#64748b" stroke-width="2"/>
<rect x="60" y="150" width="120" height="10" rx="3" fill="#94a3b8"/>
<rect x="420" y="150" width="120" height="10" rx="3" fill="#94a3b8"/>
<rect x="85" y="100" width="70" height="50" rx="6" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
<rect x="445" y="100" width="70" height="50" rx="6" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
<text x="120" y="130" font-size="14" text-anchor="middle" fill="#1e3a8a">4 g H₂</text>
<text x="120" y="146" font-size="14" text-anchor="middle" fill="#1e3a8a">32 g O₂</text>
<text x="480" y="132" font-size="14" text-anchor="middle" fill="#14532d">36 g H₂O</text>
<text x="120" y="190" font-size="17" text-anchor="middle" fill="#0f172a" font-weight="bold">VORHER: 36 g</text>
<text x="480" y="190" font-size="17" text-anchor="middle" fill="#0f172a" font-weight="bold">NACHHER: 36 g</text>
<text x="300" y="30" font-size="18" text-anchor="middle" fill="#7c3aed" font-weight="bold">2 H₂ + O₂ → 2 H₂O</text>
</svg>`
    },
    {
      type: 'example', title: `Geführtes Beispiel 1: eine Gleichung bilanzieren`,
      html: `<p>Wir bilanzieren die Reaktion von Wasserstoff mit Sauerstoff: <b>H₂ + O₂ → H₂O</b></p>
<ol>
<li>Ich zähle die Atome: links H = 2, O = 2; rechts H = 2, O = 1. Der Sauerstoff stimmt nicht.</li>
<li>Ich setze eine <b>2</b> vor H₂O: <b>H₂ + O₂ → 2 H₂O</b>. Jetzt ist rechts H = 4, O = 2.</li>
<li>Jetzt stimmt der Wasserstoff nicht mehr: Ich setze eine <b>2</b> vor H₂: <b>2 H₂ + O₂ → 2 H₂O</b>.</li>
<li>Kontrolle: links H = 4, O = 2; rechts H = 4, O = 2. ✅ Bilanziert!</li>
</ol>
<p>⚠️ Man ändert nur die <b>Koeffizienten</b>, nie die kleinen Zahlen in den Formeln: H₂O₂ ist kein Wasser, sondern Wasserstoffperoxid!</p>`
    },
    {
      type: 'text', title: `6. Das Mol und die stöchiometrischen Verhältnisse`,
      html: `<p>Atome sind zu klein, um sie einzeln zu zählen. Chemiker zählen sie «in Paketen», so wie man Eier im Dutzend zählt. Das Paket der Chemiker heißt <b>Mol</b> und enthält <b>6,022 × 10²³</b> Teilchen (Avogadro-Zahl).</p>
<p>Die <b>molare Masse</b> ist die Masse eines Mols in Gramm. Man berechnet sie, indem man die Atommassen (aus dem Periodensystem) addiert: H = 1, C = 12, O = 16, Na = 23, S = 32, Cl = 35,5, Fe = 56.</p>
<ul>
<li>H₂ → 2 × 1 = <b>2 g/mol</b></li>
<li>O₂ → 2 × 16 = <b>32 g/mol</b></li>
<li>H₂O → 2 × 1 + 16 = <b>18 g/mol</b></li>
<li>CO₂ → 12 + 2 × 16 = <b>44 g/mol</b></li>
</ul>
<p>Die <b>Koeffizienten</b> einer bilanzierten Gleichung geben die <b>Molverhältnisse</b> an: In 2 H₂ + O₂ → 2 H₂O reagieren <b>2 Mol</b> Wasserstoff mit <b>1 Mol</b> Sauerstoff und ergeben <b>2 Mol</b> Wasser. Das sind die <b>stöchiometrischen Verhältnisse</b> (vom Griechischen <i>stoicheion</i> = Element und <i>metron</i> = Maß).</p>`
    },
    {
      type: 'example', title: `Geführtes Beispiel 2: Wie viel Wasser erhalte ich?`,
      html: `<p>Reaktion: <b>2 H₂ + O₂ → 2 H₂O</b>. Ich habe <b>4 g H₂</b> und <b>32 g O₂</b>.</p>
<ol>
<li>Ich wandle Gramm in Mol um: H₂ → 4 g ÷ 2 g/mol = <b>2 mol</b>; O₂ → 32 g ÷ 32 g/mol = <b>1 mol</b>.</li>
<li>Das geforderte Verhältnis ist 2 : 1, und genau das habe ich. Beide reagieren vollständig.</li>
<li>Es bilden sich 2 mol H₂O → 2 × 18 g = <b>36 g</b>.</li>
<li>Kontrolle mit Lavoisier: 4 g + 32 g = 36 g ✅</li>
</ol>`
    },
    {
      type: 'example', title: `Geführtes Beispiel 3: das begrenzende Reagenz`,
      html: `<p>Jetzt habe ich <b>10 g H₂</b> und weiterhin <b>32 g O₂</b>.</p>
<ol>
<li>Mol: H₂ = 10 ÷ 2 = <b>5 mol</b>; O₂ = 32 ÷ 32 = <b>1 mol</b>.</li>
<li>1 mol O₂ braucht 2 mol H₂. Ich habe 5: Der Wasserstoff ist im Überschuss.</li>
<li>Der Sauerstoff ist zuerst aufgebraucht: Er ist das <b>begrenzende Reagenz</b>. Er bestimmt, wie viel Produkt entsteht: 2 mol H₂O = <b>36 g</b>.</li>
<li>Es bleiben 5 − 2 = 3 mol H₂ = <b>6 g</b> Wasserstoff übrig, die nicht reagiert haben.</li>
<li>Kontrolle: 10 + 32 = 42 g vorher; 36 + 6 = 42 g nachher ✅</li>
</ol>
<p>Dieselbe Überlegung gilt für Eisen und Schwefel (Fe + S → FeS): Mit <b>14 g Fe</b> und <b>10 g S</b> reagieren 14 g Fe mit 8 g S (Verhältnis 7 : 4), es entstehen <b>22 g FeS</b>, und <b>2 g Schwefel</b> bleiben übrig.</p>`
    },
    {
      type: 'widget', title: `🧪 Online-Labor`,
      widget: 'chemLab',
      caption: `Nimm die Reagenzien aus dem Regal, wähle, wie viel Gramm du nimmst, und gib sie ins Becherglas. Das Labor sagt dir, ob eine Reaktion stattfindet, zeigt die bilanzierte Gleichung, die Mol, das begrenzende Reagenz, die Produkte und prüft die Massenerhaltung.`,
      options: {}
    },
    {
      type: 'remember', title: `Experimente zum Ausprobieren im Labor`,
      html: `<ul>
<li>🫧 <b>Natron + Essig</b>: NaHCO₃ + CH₃COOH → CH₃COONa + H₂O + CO₂ (Blasen von Kohlenstoffdioxid). Wenn das Becherglas offen ist, entweicht das Gas, und die Waage zeigt weniger an: Warum?</li>
<li>🔩 <b>Eisen + Schwefel</b>: Fe + S → FeS. Probiere 56 g + 32 g, dann 56 g + 50 g: Was bleibt übrig?</li>
<li>⚖️ <b>Natriumhydroxid + Salzsäure</b>: NaOH + HCl → NaCl + H₂O (Neutralisation: Es entstehen Salz und Wasser, und es wird warm).</li>
<li>🌫️ <b>Silbernitrat + Natriumchlorid</b>: AgNO₃ + NaCl → AgCl↓ + NaNO₃ (weißer Niederschlag).</li>
<li>🔥 <b>Verbrennung von Methan</b>: CH₄ + 2 O₂ → CO₂ + 2 H₂O.</li>
<li>✨ <b>Magnesium + Sauerstoff</b>: 2 Mg + O₂ → 2 MgO (strahlend weißes Licht).</li>
<li>🎈 <b>Zink + Salzsäure</b>: Zn + 2 HCl → ZnCl₂ + H₂ (Wasserstoff wird frei).</li>
</ul>
<p>⚠️ Das sind <b>virtuelle</b> Experimente: Viele dieser Reagenzien sind gefährlich und werden nur in einem echten Labor benutzt, mit einer Lehrkraft und Schutzausrüstung.</p>`
    },
    {
      type: 'curiosity', title: `Wusstest du, dass … beim Verbrennen von Holz nichts «verschwindet»?`,
      html: `<p>Ein Holzscheit von 1 kg hinterlässt nur wenige Gramm Asche. Es sieht so aus, als sei die Masse verschwunden, aber das stimmt nicht: Der Kohlenstoff und der Wasserstoff des Holzes haben sich mit dem <b>Sauerstoff der Luft</b> verbunden und sind zu <b>CO₂ und Wasserdampf</b> geworden, die davongeflogen sind. Würdest du auch alle Gase wiegen, wäre die Masse der Produkte sogar <b>größer</b> als die des Holzes, weil sie den Sauerstoff aus der Luft enthält!</p>`
    },
    {
      type: 'curiosity', title: `Wusstest du, dass … Mendelejew Lücken im Periodensystem ließ?`,
      html: `<p>Im Jahr 1869 ordnete Dmitri Mendelejew die 63 bekannten Elemente und bemerkte, dass sich die Eigenschaften in regelmäßigen Abständen wiederholten. Wo die Rechnung nicht aufging, ließ er <b>leere Felder</b> und sagte die Eigenschaften noch unbekannter Elemente voraus. Wenige Jahre später wurden das <b>Gallium</b> (1875) und das <b>Germanium</b> (1886) entdeckt, mit fast genau den Eigenschaften, die er vorhergesagt hatte!</p>`
    },
    {
      type: 'alternatives', title: `Andere Wege, die Stöchiometrie zu verstehen`,
      intro: `Wenn dich Mol und Koeffizienten verwirren, denke sie dir so.`,
      tabs: [
        {
          label: `🥞 Ein Kochrezept`,
          html: `<p>Rezept für Pfannkuchen: <b>2 Eier + 1 Tasse Milch → 4 Pfannkuchen</b>. Das ist eine bilanzierte Gleichung!</p>
<ul>
<li>Mit 6 Eiern und 3 Tassen Milch → 12 Pfannkuchen (alles verdreifacht).</li>
<li>Mit 6 Eiern und <b>nur 1 Tasse</b> Milch → nur 4 Pfannkuchen: Die Milch ist das <b>begrenzende Reagenz</b>, und 4 Eier bleiben übrig.</li>
</ul>
<p>Mol sind wie die «Dutzend» im Rezept: Sie zählen die Zutaten in Gruppen.</p>`
        },
        {
          label: `🧱 Bausteine`,
          html: `<p>Stell dir Atome wie Bausteine vor: <b>weiß</b> = H, <b>rot</b> = O. Ein Wassermolekül = 1 roter + 2 weiße.</p>
<p>Wenn du 10 weiße und 3 rote hast, wie viele «Wasser» baust du? Jedes Wasser braucht 2 weiße: Mit 10 weißen könntest du 5 bauen, aber mit 3 roten nur 3. Du baust <b>3</b>, und 4 weiße bleiben übrig. Die Bausteine verschwinden nie: Am Ende des Spiels zählst du alle (Lavoisier!).</p>`,
          scene: 'blocks', options: { mode: 'array', a: 3, b: 3 }
        },
        {
          label: `⚖️ Die Waage mit zwei Schalen`,
          html: `<p>Eine Gleichung zu bilanzieren ist wie eine Waage ins Gleichgewicht zu bringen: Auf jeder Schale muss dieselbe Zahl Atome jeder Sorte liegen. Du kannst <b>ganze Moleküle</b> hinzufügen (die Koeffizienten), aber du kannst kein Molekül in der Mitte «durchschneiden» und kein Atom in ein anderes verwandeln.</p>
<p>Versuche es mit Methan: CH₄ + O₂ → CO₂ + H₂O. Rechts braucht man 2 H₂O, um 4 H zu haben; dann sind rechts 4 O, und links braucht man 2 O₂. Ergebnis: <b>CH₄ + 2 O₂ → CO₂ + 2 H₂O</b>.</p>`
        }
      ]
    },
    {
      type: 'conceptMap', title: `Landkarte: Wie wir die Atome entdeckt haben`,
      nodes: [
        { id: 'democrito', label: `Demokrit (5. Jh. v. Chr.)`, x: 12, y: 12, color: '#a855f7', html: `Der griechische Philosoph stellte sich vor, die Materie bestehe aus unteilbaren Teilchen: «átomos» = nicht schneidbar.`, why: `Es war nur eine Überlegung, ohne Experimente: Wenn man einen Gegenstand in immer kleinere Stücke schneidet, muss man irgendwann bei einem Stück ankommen, das sich nicht mehr teilen lässt. 2000 Jahre lang blieb die Idee eine Philosophie.` },
        { id: 'lavoisier', label: `Lavoisier (1789)`, x: 38, y: 30, color: '#ef4444', html: `Erhaltung der Masse: Bei Reaktionen ändert sich die Gesamtmasse nicht.`, why: `Lavoisier benutzte die Waage sehr streng und führte die Reaktionen in geschlossenen Gefäßen durch. Er entdeckte, dass erhitzte Metalle schwerer werden, weil sie sich mit einem Gas der Luft verbinden, das er Sauerstoff nannte. So wurde die Chemie zu einer Wissenschaft des Messens.` },
        { id: 'proust', label: `Proust (1799)`, x: 62, y: 30, color: '#f97316', html: `Konstante Proportionen: Eine Verbindung hat immer dieselbe Zusammensetzung nach Masse.`, why: `Bei der Analyse von Kupfercarbonat-Proben, die auf verschiedene Weise hergestellt waren, fand Proust immer dieselben Prozentanteile. Das war ein Hinweis darauf, dass sich die Elemente «in ganzen Stücken» verbinden.` },
        { id: 'dalton', label: `Dalton (1808)`, x: 50, y: 52, color: '#3b82f6', html: `Atomtheorie: Jedes Element besteht aus lauter gleichen Atomen; Verbindungen sind Kombinationen von Atomen in ganzen Zahlen.`, why: `Dalton erkannte, dass sich die Gesetze von Lavoisier und Proust leicht erklären lassen, wenn es Atome gibt: Die Masse bleibt erhalten, weil Atome weder entstehen noch vergehen; die Proportionen sind fest, weil sie sich immer in Verhältnissen ganzer Zahlen verbinden.` },
        { id: 'mendeleev', label: `Mendelejew (1869)`, x: 22, y: 76, color: '#22c55e', html: `Das Periodensystem: Nach der Masse geordnete Elemente zeigen sich wiederholende Eigenschaften.`, why: `Mendelejew bemerkte die Periodizität und wagte es, Felder für unbekannte Elemente leer zu lassen. Als sie mit den vorhergesagten Eigenschaften entdeckt wurden, verstanden alle, dass das System eine verborgene Struktur der Atome widerspiegelte.` },
        { id: 'bohr', label: `Bohr (1913)`, x: 78, y: 76, color: '#0ea5e9', html: `Atommodell: Elektronen auf Bahnen (Energieniveaus) um den Kern.`, why: `Nachdem Rutherford (1911) den Kern entdeckt hatte, erklärte Bohr, warum Atome nur Licht bestimmter Farben aussenden: Die Elektronen springen zwischen festen Energieniveaus. Die Niveaus erklären auch, warum sich das Periodensystem wiederholt.` },
        { id: 'stechiometria', label: `Stöchiometrie`, x: 50, y: 95, color: '#eab308', html: `Mengen von Edukten und Produkten mit Mol und Koeffizienten berechnen.`, why: `Wenn sich Atome in ganzen Zahlen verbinden (Dalton) und die Masse erhalten bleibt (Lavoisier), können wir genau vorhersagen, wie viel Gramm Produkt wir erhalten: Das ist die Grundlage der chemischen und pharmazeutischen Industrie.` }
      ],
      edges: [
        ['democrito', 'dalton', 'die Idee kehrt zurück'], ['lavoisier', 'dalton', 'erklärt durch'], ['proust', 'dalton', 'erklärt durch'],
        ['dalton', 'mendeleev', 'Atommassen'], ['mendeleev', 'bohr', 'verborgene Struktur'], ['dalton', 'stechiometria', 'ganze Zahlen'], ['lavoisier', 'stechiometria', 'konstante Masse']
      ]
    },
    {
      type: 'decision', title: `1770: Was passiert, wenn ein Metall verbrennt?`,
      html: `<p>Im 18. Jahrhundert glaubten fast alle Chemiker an die <b>Phlogistontheorie</b>: Jeder Stoff, der verbrennt, enthalte ein «Feuerprinzip», das Phlogiston, das bei der Verbrennung entweicht. Es gab aber ein Problem: Wenn man Zinn oder Blei an der Luft erhitzt, <b>wiegt</b> das entstehende Pulver (der «Kalk») <b>mehr</b> als das Ausgangsmetall.</p>`,
      question: `Welche Erklärung hättest du an Lavoisiers Stelle gewählt?`,
      options: [
        { label: `Das Phlogiston hat ein negatives Gewicht: Wenn es entweicht, wird das Metall schwerer.`, outcome: `Das wurde tatsächlich von einigen Chemikern vorgeschlagen, um die Theorie zu retten. Aber es ist eine «maßgeschneiderte» Annahme, die man nicht überprüfen kann und die allen anderen Erfahrungen mit Gewichten widerspricht.` },
        { label: `Das Metall nimmt etwas aus der Luft auf: Deshalb wiegt es mehr.`, outcome: `Das ist die Hypothese von Lavoisier. Man kann sie überprüfen: Wenn ich das Metall in einem geschlossenen Gefäß erhitze, muss die Luft darin abnehmen und das Gesamtgewicht gleich bleiben.` },
        { label: `Die Waage irrt: Es ist nur ein Messfehler.`, outcome: `Die Gewichtszunahme wiederholte sich immer, mit verschiedenen Metallen und Waagen: Es konnte kein zufälliger Fehler sein.` }
      ],
      answer: 1,
      explain: `Lavoisier erhitzte Metalle in verschlossenen Gefäßen: Das Gesamtgewicht änderte sich nicht, aber wenn er das Gefäß öffnete, strömte Luft hinein. Das Metall hatte ein Gas «aufgenommen», das er <b>Sauerstoff</b> nannte (1777). Die Wissenschaft wählte seine Erklärung nicht, weil sie bekannter war, sondern weil sie <b>messbare Vorhersagen machte, die sich als wahr erwiesen</b>, während das Phlogiston erfundene Ausnahmen brauchte. Das war die Geburt der modernen Chemie.`
    },
    {
      type: 'quiz', title: `Mini-Quiz: Reaktionen und Rechnungen`,
      questions: [
        { type: 'num', q: `Molare Masse von CO₂ (C = 12, O = 16)?`, answer: 44, unit: 'g/mol', explain: `12 + 2 × 16 = 44 g/mol.` },
        { type: 'mc', q: `Wie viele Mol O₂ braucht man in 2 H₂ + O₂ → 2 H₂O für 4 Mol H₂?`, options: [`1`, `2`, `4`], answer: 1, explain: `Das Verhältnis ist 2 : 1, also brauchen 4 mol H₂ 2 mol O₂.` },
        { type: 'tf', q: `Das begrenzende Reagenz ist das, das als erstes aufgebraucht ist.`, answer: true, explain: `Es bestimmt, wie viel Produkt entstehen kann.` }
      ]
    }
  ],
  glossary: [
    { t: `Atom`, d: `Das kleinste Teilchen eines Elements: Kern (Protonen und Neutronen) und Elektronen.` },
    { t: `Ordnungszahl (Z)`, d: `Zahl der Protonen im Kern; bestimmt das Element.` },
    { t: `Element`, d: `Stoff, der aus nur einer Atomsorte besteht.` },
    { t: `Verbindung`, d: `Stoff aus Atomen verschiedener Elemente in festen Verhältnissen.` },
    { t: `Molekül`, d: `Gruppe miteinander verbundener Atome.` },
    { t: `Chemische Reaktion`, d: `Umwandlung, bei der aus Edukten neue Produkte werden.` },
    { t: `Koeffizient`, d: `Zahl vor einer Formel in einer Gleichung: gibt an, wie viele Moleküle oder Mol.` },
    { t: `Mol`, d: `Menge, die 6,022 × 10²³ Teilchen enthält.` },
    { t: `Molare Masse`, d: `Masse in Gramm von einem Mol eines Stoffes (g/mol).` },
    { t: `Stöchiometrisches Verhältnis`, d: `Molverhältnis zwischen Edukten und Produkten, gegeben durch die Koeffizienten.` },
    { t: `Begrenzendes Reagenz`, d: `Das Reagenz, das als erstes verbraucht wird und die Produktmenge begrenzt.` },
    { t: `Niederschlag`, d: `Feststoff, der sich bei einer Reaktion in einer Lösung bildet.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: 'mc', q: `Was besagt das Gesetz von Lavoisier?`, options: [`Die Masse der Produkte ist gleich der Masse der Edukte`, `Gase wiegen immer weniger als Feststoffe`, `Elemente lassen sich in andere Elemente umwandeln`], answer: 0, explain: `Nichts entsteht, nichts vergeht, alles verwandelt sich.` },
      { type: 'num', q: `Molare Masse von Wasser H₂O (H = 1, O = 16)?`, answer: 18, unit: 'g/mol', explain: `2 × 1 + 16 = 18 g/mol.` },
      { type: 'num', q: `Bilanziere: CH₄ + ? O₂ → CO₂ + 2 H₂O. Welcher Koeffizient steht vor O₂?`, answer: 2, explain: `Rechts sind 2 + 2 = 4 O-Atome, also braucht man 2 O₂.` },
      { type: 'num', q: `Wie viel Gramm O₂ reagieren vollständig mit 8 g H₂? (2 H₂ + O₂ → 2 H₂O)`, answer: 64, unit: 'g', explain: `8 g H₂ = 4 mol; man braucht 2 mol O₂ = 2 × 32 = 64 g.` },
      { type: 'num', q: `Wie viele Mol Wasser entstehen aus 3 Mol O₂ (bei überschüssigem Wasserstoff)?`, answer: 6, unit: 'mol', explain: `Das Verhältnis O₂ : H₂O ist 1 : 2, also 3 × 2 = 6 mol.` },
      { type: 'num', q: `14 g Eisen reagieren genau mit 8 g Schwefel. Wie viel Gramm FeS entstehen?`, answer: 22, unit: 'g', explain: `Nach Lavoisier: 14 + 8 = 22 g.` },
      { type: 'mc', q: `Bei 10 g H₂ und 32 g O₂: Welches ist das begrenzende Reagenz?`, options: [`H₂`, `O₂`, `Keines`], answer: 1, explain: `5 mol H₂ und 1 mol O₂: Der Sauerstoff ist zuerst aufgebraucht, und 6 g H₂ bleiben übrig.` },
      { type: 'num', q: `Wie viele Mol sind 88 g CO₂?`, answer: 2, unit: 'mol', explain: `88 ÷ 44 = 2 mol.` },
      { type: 'mc', q: `Wenn man Silbernitrat und Natriumchlorid mischt, bildet sich ein Niederschlag in der Farbe …`, options: [`blau`, `weiß`, `rot`], answer: 1, explain: `Silberchlorid (AgCl) ist ein weißer Feststoff.` },
      { type: 'mc', q: `Welcher dieser Stoffe ist ein Gemisch und keine Verbindung?`, options: [`destilliertes Wasser`, `Kochsalz`, `Luft`], answer: 2, explain: `Luft ist ein Gemisch aus Gasen (Stickstoff, Sauerstoff, Argon …).` },
      { type: 'order', q: `Bringe sie in zeitliche Reihenfolge.`, items: [`Demokrit`, `Lavoisier`, `Dalton`, `Mendelejew`, `Bohr`], explain: `5. Jh. v. Chr., 1789, 1808, 1869, 1913.` },
      { type: 'tf', q: `In einer Gleichung darf man die kleinen Zahlen in den Formeln ändern, um sie zu bilanzieren.`, answer: false, explain: `Man ändert nur die Koeffizienten: Die Formeln zu ändern hieße, den Stoff zu wechseln.` }
    ]
  }
});
