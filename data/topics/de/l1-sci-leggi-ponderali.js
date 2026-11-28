TOPIC('de', {
  id: "l1-sci-leggi-ponderali",
  title: "Die Massengesetze und die Atomtheorie",
  intro: "Ende des 18. Jahrhunderts wird die Chemie zur Wissenschaft – dank einer einfachen Idee: <b>wägen</b>. Indem sie die Massen der reagierenden Stoffe genau maßen, entdeckten Lavoisier, Proust und Dalton so präzise Zahlenregeln, dass sich eine Frage aufdrängte: Warum ist die Natur so geordnet? Die Antwort war eine der wirkungsvollsten Ideen der Geschichte: Die Materie besteht aus <b>Atomen</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Vor Lavoisier: das Rätsel des Feuers",
      html: `<p>Im 18. Jahrhundert glaubte man, ein brennender Körper verliere dabei einen geheimnisvollen Stoff, das <b>Phlogiston</b>. Doch es gab ein Problem: Eisen, das rostet, oder ein Metall, das an der Luft „verkalkt“, wird <b>schwerer</b>. Wie kann ein Körper, der etwas verliert, schwerer werden?</p>
<p>Antoine-Laurent de <b>Lavoisier</b> (1743–1794) machte die Chemie zu einer quantitativen Wissenschaft: Er wog immer alles, <b>vorher und nachher</b>, und arbeitete in geschlossenen Gefäßen, damit kein Gas entweichen konnte. Er erkannte, dass die Verbrennung eine Reaktion mit dem <b>Sauerstoff</b> der Luft ist (das Gas wurde 1774 von Priestley isoliert und von Lavoisier „Sauerstoff“ getauft) und dass das Metall hinterher schwerer ist, weil es Sauerstoff <b>aufgenommen</b> hat.</p>`
    },
    {
      type: "text",
      title: "Das Gesetz von der Erhaltung der Masse (Lavoisier, 1789)",
      html: `<p>In seinem <i>Traité élémentaire de chimie</i> (1789) formulierte Lavoisier den Grundsatz, der sich so übersetzen lässt:</p>
<p><b>„Nichts wird erschaffen, nichts wird vernichtet, alles wird umgewandelt.“</b></p>
<p>Bei einer chemischen Reaktion in einem <b>geschlossenen System</b> ist die Gesamtmasse der Edukte gleich der Gesamtmasse der Produkte:</p>
<p><b>m(Edukte) = m(Produkte)</b></p>
<p>Warum scheint das manchmal nicht zu stimmen? Wenn du ein Stück Papier verbrennst, wiegt die Asche weniger als das Papier zu Beginn: Der Rest der Masse steckt aber in den Gasen (CO₂ und Wasserdampf), die sich in der Luft verteilt haben. Verbrennst du dagegen Eisenwolle, <b>nimmt</b> das Gewicht <b>zu</b>, weil sie sich mit dem Sauerstoff der Luft verbindet.</p>
<p>Heute wissen wir, dass die Erhaltung bei chemischen Reaktionen sehr genau gilt; die mit der Energieänderung verbundenen Massenänderungen (E = mc²) sind zu klein, um gemessen zu werden. Erst bei Kernreaktionen werden sie bedeutsam.</p>`
    },
    {
      type: "example",
      title: "Eine Verbrennung wägen",
      html: `<p>Wir verbrennen <b>12 g Kohlenstoff</b> in einem geschlossenen Gefäß mit Sauerstoff. Es entstehen <b>44 g Kohlenstoffdioxid</b>. Wie viel Sauerstoff hat reagiert?</p>
<ol>
<li>m(Edukte) = m(Produkte): m(C) + m(O₂) = m(CO₂).</li>
<li>12 g + m(O₂) = 44 g → m(O₂) = <b>32 g</b>.</li>
</ol>
<p>Ein weiterer Fall: 5,6 g Eisen reagieren mit Schwefel zu 8,8 g Eisensulfid. Der verbrauchte Schwefel beträgt 8,8 − 5,6 = <b>3,2 g</b>.</p>`
    },
    {
      type: "text",
      title: "Das Gesetz der konstanten Proportionen (Proust, 1799)",
      html: `<p>Der französische Chemiker Joseph-Louis <b>Proust</b> (1754–1826) untersuchte jahrelang Proben von Verbindungen unterschiedlicher Herkunft und stellte etwas Überraschendes fest:</p>
<p><b>In einer reinen Verbindung sind die Elemente immer im gleichen Massenverhältnis verbunden, gleich woher die Verbindung stammt.</b></p>
<p>Wasser besteht immer aus <b>1 Teil Wasserstoff und 8 Teilen Sauerstoff</b> (Massenverhältnis 1 : 8): 9 g Wasser enthalten 1 g H und 8 g O; 90 g enthalten 10 g H und 80 g O. Gibst du 2 g Wasserstoff mit 8 g Sauerstoff zusammen, reagiert nur 1 g Wasserstoff: 1 g H bleibt übrig, weil das Verhältnis eingehalten werden muss.</p>
<p>Das Gesetz wurde heftig diskutiert: Der Chemiker <b>Berthollet</b> meinte, die Proportionen könnten sich mit den Bedingungen ändern. Die Debatte dauerte fast ein Jahrzehnt, aber Prousts immer genauere Daten setzten sich durch. Manche feste Verbindungen, die sogenannten <b>nichtstöchiometrischen</b>, können geringe Abweichungen aufweisen (zum Beispiel bestimmte Eisenoxide): Das sind keine Ausnahmen vom Gesetz, sondern Fälle, in denen die Kristallstruktur „Leerstellen“ hat.</p>`
    },
    {
      type: "example",
      title: "Das Gesetz von Proust anwenden",
      html: `<p>Calciumoxid entsteht aus Calcium und Sauerstoff im Massenverhältnis <b>5 : 2</b> (also 5 g Ca auf 2 g O). Wie viel Sauerstoff braucht man für 35 g Calcium?</p>
<ol>
<li>Verhältnisgleichung: 5 : 2 = 35 : x</li>
<li>x = 2 × 35 / 5 = <b>14 g Sauerstoff</b>.</li>
<li>Es entstehen 35 + 14 = 49 g Calciumoxid (Erhaltung der Masse).</li>
</ol>`
    },
    {
      type: "svg",
      title: "Das Verhältnis 1 : 8 im Wasser",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<text x="320" y="26" font-size="18" text-anchor="middle" fill="#0c4a6e" font-weight="bold">Wasser aus verschiedenen Quellen: immer 1 Teil H auf 8 Teile O</text>
<line x1="30" y1="240" x2="610" y2="240" stroke="#475569" stroke-width="2"/>
<rect x="60" y="232" width="34" height="8" fill="#9ca3af" stroke="#475569"/><rect x="94" y="176" width="34" height="64" fill="#ef4444" stroke="#475569"/>
<text x="94" y="262" font-size="15" text-anchor="middle" fill="#1f2937" font-weight="bold">Fluss</text><text x="94" y="282" font-size="14" text-anchor="middle" fill="#1f2937">1 g H + 8 g O</text>
<rect x="240" y="224" width="34" height="16" fill="#9ca3af" stroke="#475569"/><rect x="274" y="112" width="34" height="128" fill="#ef4444" stroke="#475569"/>
<text x="274" y="262" font-size="15" text-anchor="middle" fill="#1f2937" font-weight="bold">Regen</text><text x="274" y="282" font-size="14" text-anchor="middle" fill="#1f2937">2 g H + 16 g O</text>
<rect x="420" y="216" width="34" height="24" fill="#9ca3af" stroke="#475569"/><rect x="454" y="48" width="34" height="192" fill="#ef4444" stroke="#475569"/>
<text x="454" y="262" font-size="15" text-anchor="middle" fill="#1f2937" font-weight="bold">Meer</text><text x="454" y="282" font-size="14" text-anchor="middle" fill="#1f2937">3 g H + 24 g O</text>
<rect x="530" y="60" width="16" height="16" fill="#9ca3af" stroke="#475569"/><text x="552" y="74" font-size="14" fill="#1f2937">Wasserstoff</text>
<rect x="530" y="86" width="16" height="16" fill="#ef4444" stroke="#475569"/><text x="552" y="100" font-size="14" fill="#1f2937">Sauerstoff</text>
</svg>`,
      caption: "Der rote Balken (Sauerstoff) ist bei jeder Wasserprobe immer 8-mal so hoch wie der graue (Wasserstoff)."
    },
    {
      type: "text",
      title: "Das Gesetz der multiplen Proportionen (Dalton, 1803)",
      html: `<p>Der Engländer John <b>Dalton</b> (1766–1844), Lehrer und Meteorologe, fragte sich, was geschieht, wenn <b>zwei Elemente mehrere verschiedene Verbindungen</b> bilden. Beispiel: Kohlenstoff und Sauerstoff bilden das Monoxid (CO) und das Dioxid (CO₂).</p>
<table>
<tr><th>Verbindung</th><th>g O auf 12 g C</th></tr>
<tr><td>CO (Kohlenstoffmonoxid)</td><td>16 g</td></tr>
<tr><td>CO₂ (Kohlenstoffdioxid)</td><td>32 g</td></tr>
</table>
<p>Das Verhältnis der Sauerstoffmassen, die sich mit der <b>gleichen Masse</b> Kohlenstoff verbinden, ist 16 : 32 = <b>1 : 2</b>, ein Verhältnis <b>kleiner ganzer Zahlen</b>. Das ist das Gesetz:</p>
<p><b>Verbinden sich zwei Elemente auf mehrere Arten zu verschiedenen Verbindungen, so stehen die Massen des einen Elements, die sich mit einer festen Masse des anderen verbinden, in Verhältnissen kleiner ganzer Zahlen zueinander.</b></p>
<p>Ein weiteres Beispiel: Stickstoff und Sauerstoff bilden N₂O, NO, N₂O₃, NO₂, N₂O₅. Die Sauerstoffmassen auf 28 g Stickstoff betragen 16, 32, 48, 64 und 80 g: Verhältnis 1 : 2 : 3 : 4 : 5.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die drei Gesetze",
      questions: [
        { type: "mc", q: "Welches Gesetz besagt, dass die Masse bei einer Reaktion in einem geschlossenen System erhalten bleibt?", options: ["Proust", "Lavoisier", "Dalton"], answer: 1, explain: "Es ist das Gesetz von der Erhaltung der Masse von Lavoisier (1789)." },
        { type: "num", q: "Wasser enthält H und O im Massenverhältnis 1 : 8. Wie viel Gramm Sauerstoff verbinden sich mit 5 g Wasserstoff?", answer: 40, unit: "g", explain: "5 × 8 = 40 g." },
        { type: "tf", q: "Nach Dalton gilt: Bilden zwei Elemente verschiedene Verbindungen, so sind die Verhältnisse der Massen eines Elements, das sich mit einer festen Menge des anderen verbindet, kleine ganze Zahlen.", answer: true, explain: "So lautet das Gesetz der multiplen Proportionen." }
      ]
    },
    {
      type: "text",
      title: "Die Atomtheorie von Dalton (1808)",
      html: `<p>Die drei Gesetze sind Erfahrungsregeln: Sie <b>beschreiben</b>, aber sie <b>erklären</b> nicht. 1808 schlug Dalton (<i>A New System of Chemical Philosophy</i>) ein Modell vor, das alle erklären konnte. Die Idee des Atoms war alt (<b>Demokrit</b> und Leukipp, 5. Jh. v. Chr.), aber es war eine philosophische Spekulation; Dalton machte daraus eine Theorie, die Zahlen vorhersagte. Seine Postulate:</p>
<ol>
<li>Die Materie besteht aus winzigen, unteilbaren <b>Atomen</b>.</li>
<li>Die Atome desselben Elements sind <b>alle gleich</b> (gleiche Masse, gleiche Eigenschaften); Atome verschiedener Elemente sind verschieden.</li>
<li>Atome werden bei Reaktionen <b>weder erschaffen noch vernichtet</b>: Sie ordnen sich neu an.</li>
<li>Verbindungen entstehen durch die Vereinigung von Atomen verschiedener Elemente in <b>einfachen, festen Verhältnissen</b> (ein Atom A mit einem, zwei, drei Atomen B).</li>
</ol>
<p>So erklären sie die Gesetze:</p>
<ul>
<li><b>Lavoisier</b>: Wenn Atome weder erschaffen noch vernichtet werden, kann sich die Gesamtmasse nicht ändern.</li>
<li><b>Proust</b>: Wenn jedes Wassermolekül immer denselben Aufbau hat (2 H + 1 O), ist das Massenverhältnis von H zu O immer gleich.</li>
<li><b>Dalton (multiple Proportionen)</b>: CO und CO₂ unterscheiden sich darin, dass auf jedes C-Atom 1 bzw. 2 O-Atome kommen: daher 1 : 2.</li>
</ul>`
    },
    {
      type: "3d",
      title: "Ein Atom in 3D",
      scene: "atom",
      options: { elements: ["H", "He", "C", "O", "Na"] },
      caption: "Daltons Modell sah Atome als volle, unteilbare Kugeln. Heute wissen wir, dass sie einen Kern und Elektronen darum herum haben: Der Kern seiner Idee bleibt für die Chemie aber gültig."
    },
    {
      type: "text",
      title: "Was nach Dalton korrigiert wurde",
      html: `<p>Daltons Theorie war eine großartige Idee mit einigen Fehlern, die die spätere Wissenschaft berichtigt hat:</p>
<ul>
<li><b>Unteilbare Atome?</b> Nein: 1897 entdeckte <b>J. J. Thomson</b> das Elektron; 1911 entdeckte <b>Rutherford</b> den Atomkern; das Neutron wurde 1932 von <b>Chadwick</b> entdeckt.</li>
<li><b>Alle Atome gleich?</b> Nicht ganz: Die <b>Isotope</b> desselben Elements haben unterschiedliche Massen (Kohlenstoff-12 und Kohlenstoff-14).</li>
<li><b>Formeln der Verbindungen</b>: Dalton hielt Wasser für HO. 1811 schlug <b>Avogadro</b> vor, dass Gase bei gleichem Volumen, gleicher Temperatur und gleichem Druck die gleiche Anzahl Moleküle enthalten und dass gasförmige Elemente aus zweiatomigen Molekülen bestehen (H₂, O₂); er wurde aber 50 Jahre lang ignoriert, bis <b>Cannizzaro</b> auf dem Kongress von Karlsruhe 1860 die Überzeugungskraft dieser Idee zeigte. Von Gay-Lussac (1808) wusste man, dass 2 Volumen Wasserstoff und 1 Volumen Sauerstoff 2 Volumen Wasserdampf ergeben: Die Formel H₂O erklärt dieses Verhältnis.</li>
</ul>
<p>Nicht alle akzeptierten das Atom: Noch um 1900 hielten bedeutende Wissenschaftler (wie <b>Ostwald</b> und <b>Mach</b>) es nur für ein Rechenhilfsmittel. Die brownsche Bewegung, 1905 von Einstein erklärt und 1908 von <b>Perrin</b> bestätigt, überzeugte schließlich auch die Skeptiker.</p>`
    },
    {
      type: "text",
      title: "Atome, Elemente, Moleküle und Verbindungen",
      html: `<p>Ein <b>Element</b> besteht aus Atomen mit derselben <b>Ordnungszahl</b> Z (Anzahl der Protonen). Bekannt sind 118 Elemente; sie sind im <b>Periodensystem</b> von <b>Mendelejew</b> (1869) angeordnet, der Lücken für noch unentdeckte Elemente ließ und deren Eigenschaften vorhersagte: Gallium (1875) und Germanium (1886) bestätigten sie.</p>
<p>Ein <b>Molekül</b> ist eine Gruppe verbundener Atome: O₂, H₂O, CO₂. Eine <b>Verbindung</b> enthält Atome verschiedener Elemente.</p>
<p>Die <b>Atommasse</b> wird in <b>atomaren Masseneinheiten</b> (u) gemessen: 1 u ist der zwölfte Teil der Masse eines Kohlenstoff-12-Atoms, etwa 1,66 × 10⁻²⁷ kg. Wasserstoff wiegt etwa 1 u, Kohlenstoff 12 u, Sauerstoff 16 u. Die <b>Molekülmasse</b> des Wassermoleküls beträgt 2 × 1 + 16 = 18 u: Du findest das Verhältnis 2 : 16 = 1 : 8 von Proust wieder!</p>`
    },
    {
      type: "widget",
      title: "Das Periodensystem",
      widget: "periodicTable",
      options: {},
      caption: "Tippe auf die Elemente: Symbol, Ordnungszahl, Masse und Familie. Finde H, C, N, O, Na, Cl."
    },
    {
      type: "alternatives",
      title: "Andere Wege, die Massengesetze zu verstehen",
      intro: "Wenn dich die Massenverhältnisse verwirren, versuche es mit Überlegungen über Atome oder mit Vergleichen.",
      tabs: [
        {
          label: "🧱 Mit Bausteinen",
          html: `<p>Stell dir H-Atome als weiße Bausteine zu je 1 g und O-Atome als rote zu je 16 g vor. Ein Wassermolekül besteht aus 2 weißen + 1 roten: 2 g + 16 g = 18 g, im Verhältnis 1 : 8. Egal, wie viele Moleküle es sind: Jedes „Bauwerk“ hat dasselbe Verhältnis – das ist das Gesetz von Proust. Und wenn du „doppelte“ Bauwerke baust (H₂O₂, Wasserstoffperoxid: 2 weiße + 2 rote), verdoppelt sich das Verhältnis von O bei gleicher H-Masse: Gesetz der multiplen Proportionen (H₂O: 16 g O auf 2 g H; H₂O₂: 32 g O auf 2 g H, also 1 : 2).</p>`,
          scene: "molecule",
          options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O" }, { x: 0.85, y: 0.6, z: 0, r: 0.3, color: "#e5e7eb", label: "H" }, { x: -0.85, y: 0.6, z: 0, r: 0.3, color: "#e5e7eb", label: "H" } ], bonds: [[0,1],[0,2]] }
        },
        {
          label: "🥪 Das Sandwich",
          html: `<p>Ein Sandwich braucht immer 2 Scheiben Brot und 1 Scheibe Schinken: Hast du 10 Scheiben Brot und 10 Scheiben Schinken, machst du 5 Sandwiches und es bleiben 5 Scheiben Schinken übrig. Ebenso reagieren 2 g Wasserstoff und 8 g Sauerstoff nicht vollständig: Es reagiert 1 g H mit 8 g O und 1 g H bleibt übrig. Die festen Verhältnisse sind keine menschliche Regel, sondern die Folge davon, dass Moleküle „Sandwiches“ aus Atomen sind.</p>`
        },
        {
          label: "🗂️ Ein Stück Geschichte",
          html: `<p>Drei Ideen in zehn Jahren: <b>1789</b> (Lavoisier: Die Masse bleibt erhalten), <b>1799</b> (Proust: Die Verhältnisse sind fest), <b>1803–1808</b> (Dalton: Atome erklären alles). Jede erforderte genauere Instrumente: Lavoisiers Waage, für ihre Zeit mit großer Präzision gebaut, erlaubte es, Unterschiede von wenigen Milligramm zu erkennen. So wurde die Chemie Schritt für Schritt von der Alchemie zur exakten Wissenschaft.</p>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Lavoisier und das Ende eines Genies",
      html: `<p>Lavoisier war nicht nur Chemiker: Er war auch Beamter der <b>Ferme générale</b>, der privaten Gesellschaft, die für die französische Monarchie die Steuern eintrieb. Während der Revolution wurde er verhaftet und am 8. Mai 1794 guillotiniert. Der Mathematiker Lagrange soll gesagt haben: „Es hat nur einen Augenblick gedauert, diesen Kopf abzuschlagen, und vielleicht reichen hundert Jahre nicht, um einen ebensolchen hervorzubringen.“ Seine Frau, <b>Marie-Anne Paulze</b>, war seine Mitarbeiterin: Sie zeichnete die Instrumente, übersetzte englische Texte und besorgte die Veröffentlichung seiner Werke.</p>`
    },
    {
      type: "curiosity",
      title: "Wie viele Atome sind in einem Wassertropfen?",
      html: `<p>Ein Wassertropfen von etwa 0,05 g enthält rund <b>1,7 × 10²¹ Moleküle</b>, also mehr als tausend Milliarden Milliarden. Ein Atom hat einen Durchmesser in der Größenordnung von 10⁻¹⁰ m (ein Zehntel Nanometer): In einem Haar (etwa 70 µm) passen hintereinander etwa 700 000 davon. Deshalb benutzen Chemiker zum Zählen von Atomen das <b>Mol</b>: 1 Mol enthält 6,022 × 10²³ Teilchen (Avogadro-Zahl) und hat eine Masse in Gramm, die der Molekülmasse entspricht: 18 g Wasser sind ein Mol Moleküle.</p>`
    },
    {
      type: "conceptMap",
      title: "Mindmap der Atomtheorie: Tippe auf die Knoten und finde heraus, warum",
      nodes: [
        { id: "lav", label: "Erhaltung der Masse", x: 15, y: 8, color: "#3b82f6", html: "In einem geschlossenen System ändert sich die Masse nicht.", why: "<b>Lavoisier</b> (1789) gewann das Gesetz, indem er Edukte und Produkte in geschlossenen Gefäßen genau wog, und widerlegte so die Phlogistontheorie: Die Verbrennung fügt Sauerstoff hinzu, sie nimmt kein Phlogiston weg." },
        { id: "prou", label: "Konstante Proportionen", x: 50, y: 8, color: "#22c55e", html: "Eine Verbindung hat immer dieselbe Massenzusammensetzung.", why: "<b>Proust</b> (1799) bewies es mit wiederholten Analysen von Kupfercarbonat und anderen natürlichen und künstlichen Verbindungen und antwortete damit auf Bertholets Einwände." },
        { id: "mult", label: "Multiple Proportionen", x: 85, y: 8, color: "#f59e0b", html: "Verhältnisse kleiner ganzer Zahlen.", why: "<b>Dalton</b> (1803) leitete es aus den Daten zu den Verbindungen von Kohlenstoff und Sauerstoff sowie von Stickstoff und Sauerstoff ab: Gerade das Vorkommen ganzer Zahlen war der Hinweis darauf, dass die Materie „körnig“ ist." },
        { id: "dalton", label: "Daltons Atomtheorie", x: 50, y: 38, color: "#a855f7", html: "Unteilbare Atome, für jedes Element identisch, die sich neu anordnen.", why: "Dalton griff die Atomidee von Demokrit und Leukipp auf und machte 1808 eine quantitative Theorie daraus, indem er jedem Element eine relative Masse zuordnete (Wasserstoff = 1)." },
        { id: "avog", label: "Avogadro und Cannizzaro", x: 20, y: 62, color: "#06b6d4", html: "Moleküle und Gasvolumen.", why: "Dalton unterschied nicht zwischen Atomen und Molekülen und gab falsche Formeln an (Wasser = HO). <b>Avogadro</b> (1811) löste das Problem, wurde aber erst nach Cannizzaro (Karlsruhe, 1860) gehört." },
        { id: "elettrone", label: "Elektron, Kern, Neutron", x: 50, y: 70, color: "#ef4444", html: "Das Atom hat eine innere Struktur.", why: "Thomson (1897), Rutherford (1911), Chadwick (1932): Experimente mit Kathodenstrahlen und zur Streuung von Alphateilchen zeigten, dass das Atom nicht unteilbar ist." },
        { id: "tavola", label: "Periodensystem", x: 82, y: 62, color: "#14b8a6", html: "Die Elemente nach Ordnungszahl geordnet.", why: "<b>Mendelejew</b> (1869) ordnete die Elemente nach Atommasse und Eigenschaften und ließ Lücken; <b>Moseley</b> (1913) zeigte, dass die wahre Ordnung die nach der Ordnungszahl ist." },
        { id: "mole", label: "Mol", x: 50, y: 92, color: "#eab308", html: "Einheit der Stoffmenge.", why: "Es erlaubt den Übergang von der Skala einzelner Atome (u) zu der in Gramm, denn 1 Mol enthält von jedem Stoff dieselbe Teilchenzahl (6,022 × 10²³)." }
      ],
      edges: [
        ["lav", "dalton", "erklärt durch"],
        ["prou", "dalton", "erklärt durch"],
        ["mult", "dalton", "erklärt durch"],
        ["dalton", "avog", "korrigiert durch"],
        ["dalton", "elettrone", "überholt durch"],
        ["avog", "tavola", "führt zu"],
        ["elettrone", "tavola", "erklärt"],
        ["avog", "mole", "führt zu"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Atome",
      questions: [
        { type: "mc", q: "Welches Postulat Daltons wurde durch spätere Entdeckungen korrigiert?", options: ["Atome sind unteilbar", "Die Materie besteht aus Atomen", "Atome ordnen sich bei Reaktionen neu an"], answer: 0, explain: "Das Atom hat eine innere Struktur: Kern (Protonen und Neutronen) und Elektronen." },
        { type: "num", q: "Wie groß ist die Molekülmasse von Wasser in u? (H = 1, O = 16)", answer: 18, unit: "u", explain: "2 × 1 + 16 = 18 u." },
        { type: "tf", q: "Dalton hielt die Formel von Wasser für H₂O.", answer: false, explain: "Er glaubte an HO, weil er die zweiatomige Natur von gasförmigem Wasserstoff und Sauerstoff nicht kannte (Avogadro, 1811)." }
      ]
    }
  ],
  glossary: [
    { t: "Gesetz von Lavoisier", d: "Bei einer chemischen Reaktion in einem geschlossenen System ist die Masse der Edukte gleich der Masse der Produkte." },
    { t: "Gesetz von Proust", d: "In einer Verbindung sind die Elemente immer im gleichen Massenverhältnis verbunden." },
    { t: "Gesetz von Dalton", d: "Die Massen eines Elements, die sich mit einer festen Masse eines anderen verbinden, stehen im Verhältnis kleiner ganzer Zahlen." },
    { t: "Atom", d: "Das kleinste Teilchen eines Elements, das dessen chemische Eigenschaften behält." },
    { t: "Molekül", d: "Verband aus zwei oder mehr verbundenen Atomen." },
    { t: "Element", d: "Reiner Stoff, der aus Atomen mit gleicher Ordnungszahl besteht." },
    { t: "Verbindung", d: "Reiner Stoff, der aus Atomen verschiedener Elemente in festem Verhältnis besteht." },
    { t: "Ordnungszahl (Z)", d: "Anzahl der Protonen im Kern: Sie bestimmt das Element." },
    { t: "Atomare Masseneinheit (u)", d: "Ein Zwölftel der Masse eines Kohlenstoff-12-Atoms." },
    { t: "Isotope", d: "Atome desselben Elements mit unterschiedlicher Neutronenzahl." },
    { t: "Mol", d: "Stoffmenge, die 6,022 × 10²³ Teilchen enthält." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Wer formulierte das Gesetz von der Erhaltung der Masse?", options: ["Dalton", "Lavoisier", "Proust"], answer: 1, explain: "Lavoisier, im Traité élémentaire de chimie (1789)." },
      { type: "num", q: "10 g Magnesium verbrennen zu 16,6 g Magnesiumoxid. Wie viel Gramm Sauerstoff haben reagiert?", answer: 6.6, tol: 0.05, unit: "g", explain: "16,6 − 10 = 6,6 g, nach der Erhaltung der Masse." },
      { type: "num", q: "Das Massenverhältnis H : O im Wasser ist 1 : 8. Wie viel Wasserstoff steckt in 45 g Wasser?", answer: 5, unit: "g", explain: "1 Teil von 9 ist Wasserstoff: 45/9 = 5 g." },
      { type: "mc", q: "Welches Gesetz erklärt, dass CO und CO₂ bei gleicher Kohlenstoffmasse Sauerstoff im Verhältnis 1 : 2 enthalten?", options: ["Erhaltung der Masse", "Konstante Proportionen", "Multiple Proportionen"], answer: 2, explain: "Es ist das Gesetz der multiplen Proportionen von Dalton." },
      { type: "tf", q: "Nach Dalton sind die Atome eines Elements alle untereinander identisch.", answer: true, explain: "Es war sein Postulat; die Isotope haben es später relativiert." },
      { type: "mc", q: "Wer entdeckte 1897 das Elektron?", options: ["J. J. Thomson", "Rutherford", "Mendelejew"], answer: 0, explain: "Joseph John Thomson, bei der Untersuchung der Kathodenstrahlen." },
      { type: "text", q: "Wie heißt die Einheit, die 6,022 × 10²³ Teilchen enthält?", answer: ["Mol", "das Mol", "mol"], explain: "Ein Mol enthält die Avogadro-Zahl an Teilchen." },
      { type: "order", q: "Bringe die Ereignisse in die zeitliche Reihenfolge.", items: ["Erhaltung der Masse (Lavoisier)", "Konstante Proportionen (Proust)", "Atomtheorie (Dalton)", "Kongress von Karlsruhe (Cannizzaro)"], explain: "1789, 1799, 1808, 1860." },
      { type: "mc", q: "Was hat Rutherford 1911 gezeigt?", options: ["Dass das Atom einen kleinen, dichten Kern hat", "Dass es keine Atome gibt", "Dass Elektronen Wellen sind"], answer: 0, explain: "Mit dem Streuversuch von Alphateilchen an einer Goldfolie." },
      { type: "num", q: "4 g Wasserstoff werden mit 24 g Sauerstoff zur Reaktion gebracht (Verhältnis 1 : 8). Wie viel Gramm Wasserstoff bleiben übrig?", answer: 1, unit: "g", explain: "24 g O reagieren mit 3 g H: Es bleiben 4 − 3 = 1 g übrig." }
    ]
  }
});
