TOPIC('de', {
  id: "l1-sci-trasformazioni",
  title: "Physikalische und chemische Umwandlungen",
  intro: "Ein schmelzender Eiswürfel und ein rostender Nagel sind zwei Veränderungen, aber grundverschiedene: Im ersten Fall bleibt der Stoff Wasser, im zweiten wird das Eisen zu etwas Neuem. Diesen Unterschied zu verstehen ist der erste Schritt, um Chemie zu betreiben. In dieser Lektion untersuchen wir die <b>Zustandsänderungen</b>, lesen eine <b>Erwärmungskurve</b> und lernen, wie man eine <b>chemische Reaktion</b> erkennt und aufschreibt.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Physikalische und chemische Umwandlungen",
      html: `<p>Eine <b>physikalische Umwandlung</b> verändert das Aussehen oder den Zustand der Materie, aber <b>nicht</b> die Natur der Stoffe: Die Zusammensetzung der Teilchen bleibt gleich. Beispiele: Schmelzen von Eis, Verdampfen von Wasser, Auflösen von Zucker im Tee, Zerbrechen eines Glases. Oft sind sie <b>umkehrbar</b>.</p>
<p>Bei einer <b>chemischen Umwandlung</b> (oder <b>chemischen Reaktion</b>) werden die Ausgangsstoffe, die <b>Edukte</b>, in neue Stoffe mit anderen Eigenschaften umgewandelt, die <b>Produkte</b>. Die Atome werden weder erzeugt noch zerstört: Sie ordnen sich neu, indem Bindungen gelöst und gebildet werden. Beispiele: Verbrennung von Methan, Rost, Garen eines Eis, Fotosynthese.</p>
<p>Woran erkennt man eine chemische Reaktion? Oft (nicht immer) beobachtet man:</p>
<ul>
<li>Bildung von <b>Gas</b> (Bläschen, Aufschäumen);</li>
<li>Bildung eines <b>Niederschlags</b> (Feststoff, der in einer klaren Lösung erscheint);</li>
<li><b>Farbänderung</b>, die nicht nur von einer Verdünnung herrührt;</li>
<li>Abgabe oder Aufnahme von <b>Wärme</b> oder <b>Licht</b>.</li>
</ul>
<p>Das sind nur Hinweise: Siedendes Wasser bildet Blasen und nimmt Wärme auf, ist aber eine physikalische Umwandlung. Der entscheidende Beweis ist, dass danach <b>neue Stoffe</b> vorliegen.</p>`
    },
    {
      type: "widget",
      title: "Physikalisch oder chemisch?",
      widget: "classify",
      options: { groups: ["Physikalische Umwandlung", "Chemische Umwandlung"], items: [
        ["Die Butter schmilzt in der Pfanne", 0],
        ["Ein Eisennagel rostet", 1],
        ["Aus Milch wird Joghurt", 1],
        ["Das Wasser kocht im Topf", 0],
        ["Eine Kerze brennt", 1],
        ["Man schneidet ein Blatt Papier", 0],
        ["Ein angebissener Apfel wird braun", 1],
        ["Salz löst sich im Wasser", 0],
        ["Eine Brausetablette im Glas", 1],
        ["Mottenkugeln sublimieren", 0]
      ] },
      caption: "Bei der Kerze schmilzt das Wachs (physikalisch), brennt dann aber (chemisch): Dieselbe Szene kann beides enthalten."
    },
    {
      type: "text",
      title: "Die Zustandsänderungen",
      html: `<p>Die Zustandsänderung eines Stoffes ist eine physikalische Umwandlung. Jeder Übergang hat einen Namen:</p>
<table>
<tr><th>Übergang</th><th>Von → zu</th><th>Wärme</th></tr>
<tr><td><b>Schmelzen</b></td><td>fest → flüssig</td><td>aufgenommen</td></tr>
<tr><td><b>Erstarren</b></td><td>flüssig → fest</td><td>abgegeben</td></tr>
<tr><td><b>Verdampfen</b> / <b>Sieden</b></td><td>flüssig → gasförmig</td><td>aufgenommen</td></tr>
<tr><td><b>Kondensieren</b></td><td>gasförmig → flüssig</td><td>abgegeben</td></tr>
<tr><td><b>Sublimieren</b></td><td>fest → gasförmig</td><td>aufgenommen</td></tr>
<tr><td><b>Resublimieren</b> (oder Desublimation)</td><td>gasförmig → fest</td><td>abgegeben</td></tr>
</table>
<p>Das <b>Verdunsten</b> geschieht nur an der Oberfläche und bei jeder Temperatur (Wäsche trocknet auch bei 15 °C); das <b>Sieden</b> geschieht in der ganzen Flüssigkeit, wenn der Dampfdruck gleich dem Außendruck ist, bei einer genauen Temperatur. Deshalb kocht Wasser im Hochgebirge, wo der Druck geringer ist, unter 100 °C (in etwa 3000 m Höhe bei rund 90 °C), und die Nudeln garen langsamer. Im Schnellkochtopf passiert das Gegenteil.</p>`
    },
    {
      type: "svg",
      title: "Die Erwärmungskurve des Wassers",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#f8fafc"/>
<line x1="70" y1="20" x2="70" y2="270" stroke="#1f2937" stroke-width="2"/>
<line x1="70" y1="270" x2="620" y2="270" stroke="#1f2937" stroke-width="2"/>
<text x="20" y="150" font-size="15" fill="#1f2937" transform="rotate(-90 20 150)" text-anchor="middle">Temperatur (°C)</text>
<text x="350" y="305" font-size="15" fill="#1f2937" text-anchor="middle">Zugeführte Wärme im Zeitverlauf</text>
<line x1="62" y1="200" x2="70" y2="200" stroke="#1f2937" stroke-width="2"/><text x="56" y="205" font-size="14" text-anchor="end" fill="#1f2937">0</text>
<line x1="62" y1="70" x2="70" y2="70" stroke="#1f2937" stroke-width="2"/><text x="56" y="75" font-size="14" text-anchor="end" fill="#1f2937">100</text>
<line x1="70" y1="200" x2="620" y2="200" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 5"/>
<line x1="70" y1="70" x2="620" y2="70" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 5"/>
<polyline points="70,250 150,200 250,200 400,70 520,70 600,25" fill="none" stroke="#dc2626" stroke-width="4"/>
<text x="110" y="240" font-size="14" fill="#0369a1" font-weight="bold" text-anchor="middle">Eis</text>
<text x="200" y="185" font-size="14" fill="#0369a1" font-weight="bold" text-anchor="middle">Schmelzen</text>
<text x="330" y="150" font-size="14" fill="#15803d" font-weight="bold" text-anchor="middle">flüssiges Wasser</text>
<text x="460" y="55" font-size="14" fill="#b45309" font-weight="bold" text-anchor="middle">Sieden</text>
<text x="570" y="70" font-size="14" fill="#b45309" font-weight="bold" text-anchor="middle" dy="30">Dampf</text>
</svg>`,
      caption: "Auf den beiden waagerechten Abschnitten (Schmelzen bei 0 °C und Sieden bei 100 °C) ändert sich die Temperatur nicht: Die zugeführte Wärme dient dazu, die Bindungen zwischen den Molekülen zu lösen, nicht dazu, sie schneller zu machen."
    },
    {
      type: "text",
      title: "Die Erwärmungskurve lesen",
      html: `<p>Wenn du einen Eisblock mit konstanter Flamme erwärmst und die Temperatur im Zeitverlauf misst, erhältst du eine abschnittsweise Kurve:</p>
<ol>
<li><b>Schräge Abschnitte</b>: Die Wärme erhöht die kinetische Energie der Teilchen und damit die Temperatur. Wie viel Wärme nötig ist, hängt von der <b>spezifischen Wärmekapazität</b> ab (flüssiges Wasser: 4,18 J/(g·°C); Eis etwa 2,1 J/(g·°C)).</li>
<li><b>Haltepunkte (waagerechte Abschnitte)</b>: Während der Zustandsänderung bleibt die Temperatur konstant. Die zugeführte Wärme dient dazu, die Kräfte zwischen den Teilchen zu überwinden: Das ist die <b>latente Wärme</b>.</li>
</ol>
<p>Für Wasser: spezifische Schmelzwärme ≈ <b>334 J/g</b>; spezifische Verdampfungswärme ≈ <b>2260 J/g</b>. Wasser zu verdampfen erfordert fast siebenmal so viel Energie wie es zu schmelzen.</p>
<p>Die Formel für die ausgetauschte Wärme ohne Zustandsänderung lautet <b>Q = m · c · ΔT</b>; mit Zustandsänderung <b>Q = m · L</b>.</p>`
    },
    {
      type: "example",
      title: "Wie viel Wärme braucht man?",
      html: `<p>Wie viel Wärme braucht man, um <b>200 g Wasser von 20 °C auf 70 °C</b> zu erwärmen?</p>
<ol>
<li>Q = m · c · ΔT = 200 g × 4,18 J/(g·°C) × (70 − 20) °C</li>
<li>Q = 200 × 4,18 × 50 = <b>41 800 J ≈ 41,8 kJ</b>.</li>
</ol>
<p>Und nun: Wie viel, um 100 g Wasser, das schon 100 °C hat, zu verdampfen? Q = m · L = 100 × 2260 = <b>226 000 J</b>. Deshalb ist Schweiß eine ausgezeichnete „Klimaanlage“: Beim Verdunsten entzieht er dem Körper viel Wärme.</p>`
    },
    {
      type: "curiosity",
      title: "Warum Salz das Eis auf den Straßen schmilzt",
      html: `<p>Eine Lösung aus Wasser und Salz gefriert bei einer <b>niedrigeren</b> Temperatur als 0 °C: Das nennt man <b>Gefrierpunktserniedrigung</b>. Eine gesättigte NaCl-Lösung gefriert bei etwa −21 °C. Salz auf vereiste Straßen zu streuen erwärmt das Eis nicht: Es senkt seinen Schmelzpunkt, und tatsächlich wird Salz bei Temperaturen weit unter −10 °C kaum noch wirksam. Ebenso siedet ein Gemisch aus Wasser und Salz knapp über 100 °C (<b>Siedepunktserhöhung</b>).</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Zustände und Kurven",
      questions: [
        { type: "mc", q: "Der Übergang von fest zu gasförmig heißt …", options: ["Schmelzen", "Sublimieren", "Kondensieren"], answer: 1, explain: "Sublimieren: Das geschieht zum Beispiel bei Mottenkugeln und bei Trockeneis (festem CO₂)." },
        { type: "tf", q: "Beim Schmelzen von Eis steigt die Temperatur.", answer: false, explain: "Sie bleibt bei 0 °C, bis das ganze Eis geschmolzen ist: Die Wärme dient der Zustandsänderung." },
        { type: "num", q: "Wie viel Wärme braucht man, um 50 g Eis bei 0 °C zu schmelzen (L = 334 J/g)?", answer: 16700, unit: "J", explain: "Q = m · L = 50 × 334 = 16 700 J." }
      ]
    },
    {
      type: "text",
      title: "Die chemische Reaktion und ihre Gleichung",
      html: `<p>Eine chemische Reaktion beschreibt man mit einer <b>Reaktionsgleichung</b>: links die <b>Edukte</b>, rechts die <b>Produkte</b>, verbunden durch einen Pfeil. Zum Beispiel die Verbrennung von Methan:</p>
<p><b>CH₄ + 2 O₂ → CO₂ + 2 H₂O</b></p>
<p>Die Zahlen vor den Formeln sind die <b>stöchiometrischen Koeffizienten</b>; die tiefgestellten Zahlen (Indizes) geben an, wie viele Atome in einem Molekül sind, und dürfen nicht verändert werden. Die Gleichung muss <b>ausgeglichen</b> sein: Die Atome jedes Elements müssen links und rechts in gleicher Zahl vorkommen, weil bei einer Reaktion die Masse erhalten bleibt (Gesetz von Lavoisier, das wir noch behandeln).</p>
<p>Kontrolle für Methan: links 1 C, 4 H, 4 O; rechts 1 C, 4 H (2×2), 4 O (2 + 2×1). Ausgeglichen.</p>
<p>So gleicht man aus, Schritt für Schritt:</p>
<ol>
<li>Schreibe die richtigen Formeln der Edukte und Produkte auf;</li>
<li>zähle die Atome jedes Elements auf beiden Seiten;</li>
<li>füge Koeffizienten vor den Formeln hinzu (nie die Indizes ändern), beginne mit den Elementen, die in den wenigsten Stoffen vorkommen, und lass Sauerstoff oder Wasserstoff für den Schluss;</li>
<li>zähle nochmals und kürze die Koeffizienten.</li>
</ol>`
    },
    {
      type: "example",
      title: "Die Wassersynthese ausgleichen",
      html: `<p>Rohe Reaktion: <b>H₂ + O₂ → H₂O</b>. Die O-Atome sind nicht gleich viele (2 gegen 1).</p>
<ol>
<li>Ich setze 2 vor H₂O: H₂ + O₂ → 2 H₂O. Nun O: 2 = 2 ✔️, aber H: 2 links, 4 rechts.</li>
<li>Ich setze 2 vor H₂: <b>2 H₂ + O₂ → 2 H₂O</b>. H: 4 = 4 ✔️.</li>
</ol>
<p>Man liest: Zwei Wasserstoffmoleküle reagieren mit einem Sauerstoffmolekül und ergeben zwei Wassermoleküle. Das Verhältnis 2 : 1 : 2 gilt auch für die Volumina der Gase (unter gleichen Bedingungen): eine Idee, die zur Theorie von Avogadro führen wird.</p>`
    },
    {
      type: "widget",
      title: "Das Chemielabor",
      widget: "chemLab",
      options: {},
      caption: "Wähle die Edukte, gib sie ins Becherglas und beobachte die ausgeglichene Reaktion, die Masse vorher und nachher und das limitierende Edukt."
    },
    {
      type: "alternatives",
      title: "Andere Sichtweisen auf eine Reaktion",
      intro: "Wenn dir das Ausgleichen wie ein Algebra-Trick vorkommt, betrachte es auf diese Arten.",
      tabs: [
        {
          label: "🧱 Die LEGO-Steine",
          html: `<p>Atome sind Bausteine: Eine Reaktion erzeugt keine und zerstört keine, sie <b>setzt sie neu zusammen</b>. Um 2 Wassermoleküle zu bauen, braucht man 4 H-Steine und 2 O-Steine. Hast du nur H₂- und O₂-Moleküle, musst du die Steine zählen und so viele „Teile“ verwenden, dass vorher und nachher dieselbe Summe herauskommt: Das ist der ganze Sinn der Koeffizienten.</p>`,
          scene: "molecule",
          options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O" }, { x: 0.85, y: 0.6, z: 0, r: 0.3, color: "#e5e7eb", label: "H" }, { x: -0.85, y: 0.6, z: 0, r: 0.3, color: "#e5e7eb", label: "H" } ], bonds: [[0,1],[0,2]] }
        },
        {
          label: "🍳 Kochrezept",
          html: `<p>Eine chemische Gleichung ist ein <b>Rezept</b>: „1 Ei + 100 g Mehl → 1 Pfannkuchen“ lässt sich auf 2 Eier und 200 g Mehl hochrechnen. Auch CH₄ + 2 O₂ → CO₂ + 2 H₂O sagt, dass man für jedes Methanmolekül zwei Sauerstoffmoleküle braucht; für 10 Methanmoleküle braucht man 20. Das <b>limitierende Edukt</b> ist die Zutat, die zuerst ausgeht und die Produktion stoppt.</p>`
        },
        {
          label: "⚖️ Die Waage",
          html: `<p>Wie eine algebraische Gleichung ist auch eine chemische Gleichung eine Waage: Was du links hast, muss so viel wiegen wie das, was du rechts hast, Atom für Atom. Es ist dieselbe Idee, anschaulich gefasst, die zur Entdeckung der Massenerhaltung führte: Wenn die Wägung einer Reaktion „nicht aufgeht“, hast du vergessen, ein Gas zu wiegen.</p>`
        }
      ]
    },
    {
      type: "text",
      title: "Exotherme und endotherme Reaktionen",
      html: `<p>Jede Reaktion tauscht Energie mit der Umgebung aus, meist als Wärme:</p>
<ul>
<li><b>exotherm</b>: gibt Wärme ab (Verbrennungen, Explosionen, Neutralisationen; die Oxidation von Eisen in Taschenwärmern);</li>
<li><b>endotherm</b>: nimmt Wärme auf (Fotosynthese, das Garen eines Eis, die „Sofort-Kälte“ der Kompressen in Erste-Hilfe-Sets).</li>
</ul>
<p>Um zu starten, brauchen viele Reaktionen eine kleine Energiemenge, die <b>Aktivierungsenergie</b>: Ein Streichholz muss gerieben werden, aber dann brennt es von selbst weiter. Ein <b>Katalysator</b> senkt die Aktivierungsenergie und beschleunigt die Reaktion, ohne verbraucht zu werden (wie die Katalysatoren in Autoabgasanlagen oder die Enzyme in unserem Körper).</p>`
    },
    {
      type: "curiosity",
      title: "Trockeneis und der Tripelpunkt",
      html: `<p>Das sogenannte <b>Trockeneis</b> ist festes Kohlenstoffdioxid: Bei Atmosphärendruck schmilzt es nicht, es <b>sublimiert</b> direkt bei −78,5 °C, ohne Pfützen zu hinterlassen (deshalb wird es zum Kühlen von Speiseeis und für Nebel auf Bühnen verwendet). CO₂ kann nur oberhalb von etwa 5,2 Atmosphären flüssig sein. Jeder Stoff hat einen <b>Tripelpunkt</b>, eine einzige Kombination aus Temperatur und Druck, bei der fest, flüssig und gasförmig nebeneinander bestehen: Für Wasser liegt er bei 0,01 °C und wurde bis 2019 zur Definition des Kelvin verwendet.</p>`
    },
    {
      type: "remember",
      title: "Kurzzusammenfassung",
      html: `<ul>
<li>Physikalisch: Es ändert sich der <b>Zustand oder die Form</b>; die Stoffe bleiben dieselben.</li>
<li>Chemisch: Es entstehen <b>neue Stoffe</b>; die Atome ordnen sich neu.</li>
<li>Bei den Zustandsänderungen eines Reinstoffs ist die <b>Temperatur konstant</b>.</li>
<li>Q = m · c · ΔT (Erwärmung), Q = m · L (Zustandsänderung).</li>
<li>Eine chemische Gleichung muss <b>ausgeglichen</b> sein.</li>
</ul>`
    },
    {
      type: "conceptMap",
      title: "Begriffslandkarte der Umwandlungen: Tippe auf die Knoten und entdecke das Warum",
      nodes: [
        { id: "trasf", label: "Umwandlungen", x: 50, y: 6, color: "#a855f7", html: "Veränderungen der Materie: physikalisch oder chemisch.", why: "Die Alchemisten glaubten, jede Veränderung wandle den Stoff selbst um; erst mit der modernen Chemie (Lavoisier, 1780–90) begriff man, dass man zwischen dem, was nur den Zustand ändert, und dem, was neue Stoffe erzeugt, unterscheiden muss." },
        { id: "fisica", label: "Physikalische", x: 22, y: 30, color: "#3b82f6", html: "Zustandsänderungen, Auflösen, Zerbrechen.", why: "Die Moleküle ändern sich nicht, nur ihre Anordnung und ihre Bewegung: Deshalb sind sie meist durch eine Änderung von Temperatur oder Druck umkehrbar." },
        { id: "chimica", label: "Chemische (Reaktionen)", x: 78, y: 30, color: "#ef4444", html: "Edukte → Produkte.", why: "Die Bindungen der Edukte werden gelöst, und neue entstehen. 1808 erklärte <b>Dalton</b>, dass Reaktionen eine Umverteilung von Atomen sind, die dieselben bleiben: Daraus entsteht das Ausgleichen." },
        { id: "stato", label: "Zustandsänderungen", x: 10, y: 58, color: "#0ea5e9", html: "Schmelzen, Verdampfen, Sublimieren …", why: "Sie hängen von Temperatur und Druck ab: Das Zustandsdiagramm eines Stoffes zeigt die Bereiche, in denen er fest, flüssig oder gasförmig ist, und den <b>Tripelpunkt</b>, an dem sie nebeneinander bestehen (Wasser: 0,01 °C und etwa 611 Pa)." },
        { id: "latente", label: "Latente Wärme", x: 30, y: 82, color: "#f59e0b", html: "Wärme, die ohne Temperaturänderung ausgetauscht wird.", why: "Entdeckt vom Schotten <b>Joseph Black</b> um 1760: Beim Erwärmen von schmelzendem Eis bewegte sich das Thermometer nicht, aber die Wärme wurde dennoch aufgenommen, und er nannte sie „verborgene Wärme“." },
        { id: "equazione", label: "Reaktionsgleichung", x: 70, y: 58, color: "#22c55e", html: "Beschreibt Edukte und Produkte mit Koeffizienten.", why: "Die Symbolik von Formeln wie H₂O wurde von <b>Berzelius</b> (1813–14) geordnet, der die Buchstaben als Symbole der Elemente einführte." },
        { id: "bilancio", label: "Ausgleichen", x: 70, y: 82, color: "#14b8a6", html: "Gleich viele Atome vorher und nachher.", why: "Direkte Folge der <b>Massenerhaltung</b> von Lavoisier (1789): In einem geschlossenen System ändert sich die Gesamtmasse nicht." },
        { id: "energia", label: "Energie der Reaktion", x: 92, y: 80, color: "#f97316", html: "Exotherm oder endotherm.", why: "Bindungen zu lösen kostet Energie, sie zu bilden setzt welche frei: Die Bilanz aus beidem entscheidet, ob die Reaktion erwärmt oder abkühlt." }
      ],
      edges: [
        ["trasf", "fisica", "kann sein"],
        ["trasf", "chimica", "kann sein"],
        ["fisica", "stato", "Beispiel"],
        ["stato", "latente", "erfordert"],
        ["chimica", "equazione", "wird beschrieben durch"],
        ["equazione", "bilancio", "muss haben"],
        ["chimica", "energia", "tauscht aus"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Reaktionen",
      questions: [
        { type: "mc", q: "Bei einer chemischen Reaktion …", options: ["werden Atome in Atome anderer Elemente umgewandelt", "ordnen sich die Atome neu und bilden neue Stoffe", "nimmt die Gesamtmasse ab"], answer: 1, explain: "Die Atome bleiben erhalten; es ändern sich die Bindungen zwischen ihnen." },
        { type: "mc", q: "Welche Koeffizienten sind richtig: __ Al + __ O₂ → __ Al₂O₃ ?", options: ["2, 3, 1", "4, 3, 2", "2, 2, 2"], answer: 1, explain: "4 Al + 3 O₂ → 2 Al₂O₃: 4 Al und 6 O auf jeder Seite." },
        { type: "tf", q: "Ein Katalysator wird während der Reaktion verbraucht.", answer: false, explain: "Er beschleunigt die Reaktion, indem er die Aktivierungsenergie senkt, liegt am Ende aber unverändert vor." }
      ]
    }
  ],
  glossary: [
    { t: "Physikalische Umwandlung", d: "Veränderung, die die Natur der Stoffe nicht ändert." },
    { t: "Chemische Reaktion", d: "Umwandlung, bei der aus Edukten andere Produkte entstehen." },
    { t: "Edukt", d: "Stoff, der in einer Reaktion verbraucht wird." },
    { t: "Produkt", d: "Stoff, der in einer Reaktion entsteht." },
    { t: "Schmelzen", d: "Übergang von fest zu flüssig." },
    { t: "Sublimieren", d: "Direkter Übergang von fest zu gasförmig." },
    { t: "Latente Wärme", d: "Wärme, die bei einer Zustandsänderung ohne Temperaturänderung ausgetauscht wird." },
    { t: "Spezifische Wärmekapazität", d: "Energie, die nötig ist, um die Temperatur von 1 g eines Stoffes um 1 °C zu erhöhen." },
    { t: "Reaktionsgleichung", d: "Darstellung einer Reaktion mit Formeln und Koeffizienten." },
    { t: "Exotherme Reaktion", d: "Reaktion, die Wärme an die Umgebung abgibt." },
    { t: "Katalysator", d: "Stoff, der eine Reaktion beschleunigt, ohne verbraucht zu werden." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welche dieser Umwandlungen ist chemisch?", options: ["Das Schmelzen von Eis", "Die Verbrennung von Holz", "Das Verdunsten von Wasser"], answer: 1, explain: "Bei der Verbrennung entstehen Asche, Kohlenstoffdioxid und Wasserdampf: neue Stoffe." },
      { type: "tf", q: "Das Verdunsten geschieht nur bei 100 °C.", answer: false, explain: "Das Verdunsten geschieht bei jeder Temperatur von der Oberfläche aus; bei 100 °C (auf Meereshöhe) siedet das Wasser." },
      { type: "mc", q: "Wie heißt der Übergang von gasförmig zu fest?", options: ["Resublimieren", "Kondensieren", "Schmelzen"], answer: 0, explain: "Es ist das Resublimieren (Desublimation): So entsteht Reif." },
      { type: "num", q: "Wie viel Wärme braucht man, um 100 g Wasser um 30 °C zu erwärmen? (c = 4,18 J/g·°C)", answer: 12540, unit: "J", explain: "Q = 100 × 4,18 × 30 = 12 540 J." },
      { type: "mc", q: "Im Erwärmungsdiagramm entsprechen die waagerechten Abschnitte …", options: ["einem Temperaturanstieg", "einer Zustandsänderung", "einer chemischen Reaktion"], answer: 1, explain: "Die Temperatur bleibt während der Zustandsänderung konstant." },
      { type: "num", q: "In der Gleichung 2 H₂ + O₂ → 2 H₂O: Wie viele Wasserstoffatome stehen insgesamt rechts?", answer: 4, explain: "2 Moleküle × 2 Atome = 4." },
      { type: "tf", q: "In einer ausgeglichenen Reaktion ist die Zahl der Atome jedes Elements bei Edukten und Produkten gleich.", answer: true, explain: "Das ist die Massenerhaltung." },
      { type: "mc", q: "Eine Reaktion, die Wärme aufnimmt, heißt …", options: ["exotherm", "endotherm", "katalytisch"], answer: 1, explain: "Endotherm: Sie entzieht der Umgebung Wärme, die sich abkühlt." },
      { type: "order", q: "Bringe die Abschnitte beim Erwärmen eines Eiswürfels von −10 °C auf 120 °C in die richtige Reihenfolge.", items: ["Erwärmen des Eises", "Schmelzen bei 0 °C", "Erwärmen des flüssigen Wassers", "Sieden bei 100 °C", "Erwärmen des Dampfes"], explain: "Auf jeden schrägen Abschnitt (Erwärmung) folgt ein Haltepunkt (Zustandsänderung)." },
      { type: "text", q: "Wie heißt der Stoff, der eine Reaktion beschleunigt, ohne verbraucht zu werden?", answer: ["katalysator", "der katalysator"], explain: "Katalysatoren senken die Aktivierungsenergie; Enzyme sind biologische Katalysatoren." }
    ]
  }
});
