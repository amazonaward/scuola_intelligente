TOPIC('de', {
  id: "l1-fis-grandezze-misure",
  title: "Physikalische Größen und das Internationale Einheitensystem",
  intro: "Die Physik beginnt dort, wo wir aufhören zu sagen „es ist lang“, „es ist schwer“, „es ist schnell“, und anfangen zu sagen, <b>wie viel</b>. Dafür brauchen wir <b>Größen</b>, <b>Maßeinheiten</b>, auf die sich alle einigen, und eine bequeme Schreibweise für riesige oder winzige Zahlen. In dieser Lektion lernen wir das <b>Internationale Einheitensystem (SI)</b>, die Vorsätze, das Umrechnen von Einheiten, die <b>wissenschaftliche Notation</b> und die <b>Größenordnungen</b> kennen.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Was ist eine physikalische Größe?",
      html: `<p>Eine <b>physikalische Größe</b> ist eine Eigenschaft eines Körpers oder eines Vorgangs, die man <b>messen</b> kann: die Länge eines Tisches, die Masse eines Rucksacks, die Dauer einer Unterrichtsstunde, die Temperatur eines Raumes. „Schön“, „sympathisch“ oder „gut“ sind keine physikalischen Größen: Es gibt kein Gerät, das sie objektiv messen könnte.</p>
<p><b>Messen</b> einer Größe bedeutet, <b>sie mit einer gleichartigen Größe zu vergleichen, die als Normal gewählt wurde</b> (die <b>Maßeinheit</b>), und zu zählen, wie oft diese in der ersten enthalten ist. Das Ergebnis ist eine <b>Zahl mit einer Einheit</b>:</p>
<p style="text-align:center"><b>Messwert = Zahlenwert × Einheit</b>, zum Beispiel l = 3,2 m</p>
<p>Ohne Einheit hat eine Zahl in der Physik keine Bedeutung: „5“ kann 5 Meter, 5 Sekunden oder 5 Kilogramm sein. Die physikalischen Größen teilt man ein in:</p>
<ul>
<li><b>Basisgrößen</b>: Sie werden als Ausgangspunkt gewählt (Länge, Masse, Zeit …);</li>
<li><b>abgeleitete Größen</b>: Sie entstehen, indem man Basisgrößen durch Produkte und Quotienten verknüpft (Fläche, Volumen, Geschwindigkeit, Dichte …).</li>
</ul>`
    },
    {
      type: "text",
      title: "Das Internationale Einheitensystem (SI)",
      html: `<p>Jahrhundertelang benutzte jedes Land, manchmal sogar jede Stadt, eigene Einheiten (Fuß, Elle, Pfund, Unze …). 1960 beschloss die Generalkonferenz für Maß und Gewicht das <b>Internationale Einheitensystem</b>, das heute in der ganzen Wissenschaft verwendet wird. Es hat <b>sieben Basisgrößen</b>:</p>
<table>
<tr><th>Größe</th><th>Einheit</th><th>Symbol</th></tr>
<tr><td>Länge</td><td>Meter</td><td>m</td></tr>
<tr><td>Masse</td><td>Kilogramm</td><td>kg</td></tr>
<tr><td>Zeit</td><td>Sekunde</td><td>s</td></tr>
<tr><td>elektrische Stromstärke</td><td>Ampere</td><td>A</td></tr>
<tr><td>thermodynamische Temperatur</td><td>Kelvin</td><td>K</td></tr>
<tr><td>Stoffmenge</td><td>Mol</td><td>mol</td></tr>
<tr><td>Lichtstärke</td><td>Candela</td><td>cd</td></tr>
</table>
<p>Im Lehrplan des ersten Jahres brauchen wir vor allem die ersten drei: <b>Länge, Masse, Zeit</b>.</p>`
    },
    {
      type: "widget",
      title: "Basisgröße oder abgeleitete Größe?",
      widget: "classify",
      options: { groups: ["Basisgröße (SI)", "Abgeleitete Größe"], items: [
        ["Länge", 0],
        ["Geschwindigkeit", 1],
        ["Masse", 0],
        ["Fläche", 1],
        ["Zeit", 0],
        ["Dichte", 1],
        ["Temperatur (Kelvin)", 0],
        ["Volumen", 1],
        ["Kraft", 1]
      ] },
      caption: "Abgeleitete Größen erhält man aus den Basisgrößen durch Produkte und Quotienten."
    },
    {
      type: "text",
      title: "Wie Einheiten definiert werden",
      html: `<p>Im Lauf der Zeit haben sich die Definitionen geändert, damit sie immer genauer und reproduzierbarer werden:</p>
<ul>
<li>Das <b>Meter</b> ist heute definiert als die Strecke, die das Licht im Vakuum in <b>1/299 792 458 Sekunden</b> zurücklegt; 1791 hatte man es dagegen als zehnmillionsten Teil des Erdmeridianquadranten gedacht;</li>
<li>die <b>Sekunde</b> ist die Dauer von <b>9 192 631 770 Perioden</b> der Strahlung eines Cäsium-133-Atoms;</li>
<li>das <b>Kilogramm</b> war bis 2019 durch einen Zylinder aus Platin-Iridium definiert, der in Sèvres (Frankreich) aufbewahrt wird; seit dem 20. Mai 2019 wird es über die <b>Planck-Konstante</b> definiert.</li>
</ul>
<p>Heute beruhen alle SI-Einheiten auf <b>Naturkonstanten</b>: Sie hängen nicht mehr von einem Gegenstand ab, der verfallen könnte.</p>`
    },
    {
      type: "text",
      title: "Die abgeleiteten Größen",
      html: `<p>Die Einheiten der abgeleiteten Größen erhält man durch Kombination der Basiseinheiten:</p>
<table>
<tr><th>Größe</th><th>Definition</th><th>SI-Einheit</th></tr>
<tr><td>Fläche</td><td>Länge × Länge</td><td>m²</td></tr>
<tr><td>Volumen</td><td>Länge × Länge × Länge</td><td>m³</td></tr>
<tr><td>Geschwindigkeit</td><td>Weg / Zeit</td><td>m/s</td></tr>
<tr><td>Dichte</td><td>Masse / Volumen</td><td>kg/m³</td></tr>
<tr><td>Kraft (kommt später)</td><td>Masse × Beschleunigung</td><td>Newton: N = kg·m/s²</td></tr>
</table>
<p>Ob eine Formel stimmt, prüft man mit der <b>Dimensionsanalyse</b>: Die Einheiten müssen aufgehen. Beispiel: Die Geschwindigkeit ist Weg/Zeit, also hat die Formel <i>v = s / t</i> die Einheit m/s. Würdest du dagegen <i>v = s · t</i> schreiben, bekämst du m·s – das ist keine Geschwindigkeit.</p>`
    },
    {
      type: "remember",
      title: "Die Regeln für das Schreiben von Messwerten",
      html: `<ul>
<li>Das Einheitensymbol schreibt man <b>ohne Punkt</b> und <b>ohne Plural</b>: 5 kg und nicht „5 kg.“ oder „5 kgs“</li>
<li>Zwischen Zahl und Einheit steht ein Leerzeichen: 12 m.</li>
<li>Einheitensymbole, die von einem Eigennamen stammen, schreibt man <b>groß</b> (N für Newton, K für Kelvin, A für Ampère), die anderen klein (m, kg, s).</li>
<li>Das Dezimalzeichen im Deutschen ist das Komma: 3,5 m.</li>
</ul>`
    },
    {
      type: "text",
      title: "Vielfache und Teile",
      html: `<p>Wenn eine Größe viel größer oder viel kleiner als die Einheit ist, verwendet man <b>Vorsätze</b>, die die Einheit mit einer Zehnerpotenz multiplizieren:</p>
<table>
<tr><th>Vorsatz</th><th>Symbol</th><th>Faktor</th></tr>
<tr><td>Tera</td><td>T</td><td>10¹²</td></tr>
<tr><td>Giga</td><td>G</td><td>10⁹</td></tr>
<tr><td>Mega</td><td>M</td><td>10⁶</td></tr>
<tr><td>Kilo</td><td>k</td><td>10³</td></tr>
<tr><td>Zenti</td><td>c</td><td>10⁻²</td></tr>
<tr><td>Milli</td><td>m</td><td>10⁻³</td></tr>
<tr><td>Mikro</td><td>μ</td><td>10⁻⁶</td></tr>
<tr><td>Nano</td><td>n</td><td>10⁻⁹</td></tr>
<tr><td>Piko</td><td>p</td><td>10⁻¹²</td></tr>
</table>
<p>Beispiele: 1 km = 10³ m; 1 mm = 10⁻³ m; 1 GB = 10⁹ Byte; 1 nm = 10⁻⁹ m (ein Bruchteil des Durchmessers eines Virus).</p>
<p>Vorsicht beim <b>Kilogramm</b>: Es ist die einzige SI-Basiseinheit, die schon einen Vorsatz enthält. Vielfache und Teile bildet man ausgehend vom Gramm (1 mg = 10⁻³ g = 10⁻⁶ kg).</p>`
    },
    {
      type: "widget",
      title: "Vorsätze und Zehnerpotenzen",
      widget: "match",
      options: { pairs: [
        ["Kilo (k)", "10³"],
        ["Mega (M)", "10⁶"],
        ["Giga (G)", "10⁹"],
        ["Milli (m)", "10⁻³"],
        ["Mikro (μ)", "10⁻⁶"],
        ["Nano (n)", "10⁻⁹"]
      ] },
      caption: "Ordne jedem Vorsatz seinen Faktor zu."
    },
    {
      type: "svg",
      title: "Die Skala der Vorsätze",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<text x="320" y="28" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">Jede Stufe ist tausendmal so groß wie die vorige</text>
<line x1="30" y1="130" x2="610" y2="130" stroke="#334155" stroke-width="3"/>
<g fill="#2563eb"><circle cx="60" cy="130" r="9"/><circle cx="145" cy="130" r="9"/><circle cx="230" cy="130" r="9"/><circle cx="315" cy="130" r="9"/><circle cx="400" cy="130" r="9"/><circle cx="485" cy="130" r="9"/><circle cx="570" cy="130" r="9"/></g>
<g font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">
<text x="60" y="108">Nano</text><text x="145" y="108">Mikro</text><text x="230" y="108">Milli</text><text x="315" y="108">Einheit</text><text x="400" y="108">Kilo</text><text x="485" y="108">Mega</text><text x="570" y="108">Giga</text>
</g>
<g font-size="15" text-anchor="middle" fill="#1d4ed8">
<text x="60" y="160">10⁻⁹</text><text x="145" y="160">10⁻⁶</text><text x="230" y="160">10⁻³</text><text x="315" y="160">1</text><text x="400" y="160">10³</text><text x="485" y="160">10⁶</text><text x="570" y="160">10⁹</text>
</g>
<g font-size="14" text-anchor="middle" fill="#475569">
<text x="102" y="205">× 1000</text><text x="187" y="205">× 1000</text><text x="272" y="205">× 1000</text><text x="357" y="205">× 1000</text><text x="442" y="205">× 1000</text><text x="527" y="205">× 1000</text>
</g>
<text x="320" y="262" font-size="15" text-anchor="middle" fill="#0f172a">Um zum Vorsatz rechts davon zu wechseln: Zahlenwert durch 1000 teilen</text>
</g>
</svg>`,
      caption: "Geht man nach rechts, wird dieselbe Menge durch eine tausendmal kleinere Zahl ausgedrückt (1000 m = 1 km)."
    },
    {
      type: "example",
      title: "Umrechnungen in der Praxis",
      html: `<p><b>1)</b> 2,5 km in Meter umrechnen: 2,5 × 10³ m = <b>2500 m</b>.</p>
<p><b>2)</b> 450 mm in Meter umrechnen: 450 × 10⁻³ m = <b>0,45 m</b>.</p>
<p><b>3)</b> 36 km/h in m/s umrechnen: 36 × 1000 m / 3600 s = <b>10 m/s</b>. Praktische Regel: Von km/h nach m/s teilt man durch 3,6, umgekehrt multipliziert man mit 3,6.</p>
<p><b>4)</b> Flächen und Volumen: 1 m² = (10² cm)² = <b>10⁴ cm²</b>; 1 m³ = <b>10⁶ cm³</b>; 1 L = 1 dm³ = 10⁻³ m³. Achtung: Bei Flächen und Volumen werden die Faktoren quadriert bzw. hoch drei genommen!</p>
<p><b>5)</b> Dichte: 1 g/cm³ = 10⁻³ kg / 10⁻⁶ m³ = <b>10³ kg/m³</b>. Wasser hat eine Dichte von etwa 1000 kg/m³.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Einheiten und Vorsätze",
      questions: [
        { type: "num", q: "Wie viele Meter sind 3,2 km?", answer: 3200, tol: 0, unit: "m", explain: "3,2 × 1000 = 3200 m." },
        { type: "num", q: "Rechne 72 km/h in m/s um.", answer: 20, tol: 0, unit: "m/s", explain: "72 : 3,6 = 20 m/s." },
        { type: "tf", q: "Das Kilogramm ist die Einheit der Masse im Internationalen Einheitensystem.", answer: true, explain: "Das kg ist die SI-Einheit der Masse." }
      ]
    },
    {
      type: "text",
      title: "Die wissenschaftliche Notation",
      html: `<p>Zahlen wie die Masse der Erde (5 970 000 000 000 000 000 000 000 kg) lassen sich unbequem schreiben. Man verwendet die <b>wissenschaftliche Notation</b>:</p>
<p style="text-align:center"><b>a × 10ⁿ</b> mit <b>1 ≤ a &lt; 10</b> und ganzem n</p>
<p>Um eine Zahl in wissenschaftlicher Notation zu schreiben, verschiebt man das Komma, bis vor dem Komma nur eine von null verschiedene Ziffer steht; der Exponent n ist die Anzahl der Stellen, um die man das Komma verschoben hat (positiv, wenn die Zahl groß war, negativ, wenn sie klein war).</p>
<ul>
<li>45 000 = <b>4,5 × 10⁴</b> (Komma um 4 Stellen nach links verschoben)</li>
<li>0,00032 = <b>3,2 × 10⁻⁴</b> (Komma um 4 Stellen nach rechts verschoben)</li>
<li>Masse der Erde ≈ <b>5,97 × 10²⁴ kg</b></li>
<li>Masse des Elektrons ≈ <b>9,11 × 10⁻³¹ kg</b></li>
</ul>
<p><b>Rechnen.</b> Beim Multiplizieren multipliziert man die Zahlen und addiert die Exponenten: (2 × 10³)(3 × 10⁴) = 6 × 10⁷. Beim Dividieren subtrahiert man die Exponenten: (8 × 10⁹)/(2 × 10³) = 4 × 10⁶. Beim Addieren muss man die Zahlen auf dieselbe Zehnerpotenz bringen.</p>`
    },
    {
      type: "text",
      title: "Die Größenordnung",
      html: `<p>Die <b>Größenordnung</b> einer Zahl ist die ihr <b>nächstgelegene Zehnerpotenz</b>. Sie dient dazu, sich schnell eine Vorstellung vom „Maßstab“ einer Größe zu machen und Schätzungen anzustellen.</p>
<p>Praktische Regel: Man schreibt die Zahl in wissenschaftlicher Notation a × 10ⁿ. Ist <b>a &lt; 5</b>, ist die Größenordnung <b>10ⁿ</b>; ist <b>a ≥ 5</b>, ist sie <b>10ⁿ⁺¹</b> (die genaue Schwelle wäre √10 ≈ 3,16, in Schulbüchern nimmt man aber oft 5).</p>
<ul>
<li>3,2 × 10⁴ → Größenordnung 10⁴</li>
<li>8 × 10⁴ → 10⁵</li>
<li>Durchmesser eines Atoms: ≈ 10⁻¹⁰ m. Durchmesser eines Haares: ≈ 10⁻⁴ m. Körpergröße eines Menschen: ≈ 10⁰ m. Erdradius: ≈ 10⁷ m (6,4 × 10⁶ m). Abstand Erde–Sonne: ≈ 10¹¹ m (1,5 × 10¹¹ m).</li>
</ul>
<p>Zwei Größen, die sich um <b>n Größenordnungen</b> unterscheiden, haben ein Verhältnis von etwa 10ⁿ.</p>`
    },
    {
      type: "widget",
      title: "Von der kleinsten zur größten",
      widget: "flashcards",
      options: { cards: [
        { front: "⚛️ Atomkern", back: "etwa 10⁻¹⁵ m" },
        { front: "🔬 Atom", back: "etwa 10⁻¹⁰ m" },
        { front: "🦠 Bakterium", back: "etwa 10⁻⁶ m" },
        { front: "💇 Dicke eines Haares", back: "etwa 10⁻⁴ m" },
        { front: "🧍 Ein Mensch", back: "etwa 10⁰ m (1–2 m)" },
        { front: "🌍 Erdradius", back: "6,4 × 10⁶ m, Größenordnung 10⁷ m" },
        { front: "☀️ Abstand Erde–Sonne", back: "1,5 × 10¹¹ m" },
        { front: "✨ Ein Lichtjahr", back: "etwa 9,5 × 10¹⁵ m" },
        { front: "🌌 Durchmesser der Milchstraße", back: "etwa 10²¹ m" }
      ] },
      caption: "Dreh die Karten um: In 36 Größenordnungen steckt das ganze beobachtbare Universum."
    },
    {
      type: "example",
      title: "Überschlagen: Wie oft schlägt das Herz?",
      html: `<p>Ein Mensch hat etwa <b>70 Herzschläge pro Minute</b>. Wie viele Schläge sind es in einem Leben von 80 Jahren?</p>
<ol>
<li>Minuten in einem Jahr: 60 × 24 × 365 ≈ 5,3 × 10⁵.</li>
<li>Minuten in 80 Jahren: 5,3 × 10⁵ × 80 ≈ 4,2 × 10⁷.</li>
<li>Herzschläge: 70 × 4,2 × 10⁷ ≈ <b>3 × 10⁹</b>, also etwa <b>drei Milliarden</b>.</li>
</ol>
<p>Die Größenordnung ist 10⁹: Man braucht nicht die genaue Zahl, es genügt zu verstehen, dass es um Milliarden geht.</p>`
    },
    {
      type: "curiosity",
      title: "Das Desaster des Mars Climate Orbiter",
      html: `<p>1999 zerstörte sich die NASA-Sonde <b>Mars Climate Orbiter</b> beim Versuch, in eine Umlaufbahn einzutreten, in der Marsatmosphäre, in einer viel geringeren Höhe als geplant. Ursache: Eine Software lieferte die Schubdaten in <b>Pound-force</b> (angloamerikanische Einheit), während ein anderes Programm sie in <b>Newton</b> (SI) erwartete. Ein Fehler bei den Maßeinheiten kostete rund 125 Millionen Dollar.</p>`
    },
    {
      type: "curiosity",
      title: "Ein Meter, geboren aus der Revolution",
      html: `<p>Das metrische Dezimalsystem wurde während der Französischen Revolution entworfen, mit der Idee, Maße „für alle Zeiten, für alle Völker“ zu schaffen. 1791 schlug die Akademie der Wissenschaften vor, das Meter als den <b>zehnmillionsten Teil des Erdmeridianquadranten</b> zu definieren. Zwei Astronomen, Delambre und Méchain, vermaßen den Meridianbogen zwischen Dünkirchen und Barcelona, unter großen Schwierigkeiten und sogar mit Verhaftungen. Das Platin-Normal wurde 1799 angefertigt.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Umrechnungen zu verstehen",
      intro: "Wenn dich das Umrechnen verwirrt, versuche es einmal aus einem anderen Blickwinkel.",
      tabs: [
        {
          label: "🪜 Die Treppe der Vorsätze",
          html: "<p>Stell dir eine <b>Treppe</b> vor (wie in der Zeichnung): Jede Stufe multipliziert oder dividiert mit 1000. Gehst du eine Stufe hinunter, wird der <b>Zahlenwert</b> mit 1000 multipliziert (3 km = 3000 m); gehst du hinauf, wird er durch 1000 geteilt (3000 m = 3 km). Bei <b>Flächen</b> ist jede Stufe 10⁶ wert (1 km² = 10⁶ m²), bei <b>Volumen</b> 10⁹ (1 km³ = 10⁹ m³).</p>"
        },
        {
          label: "🧮 Die Methode der Umrechnungsfaktoren",
          html: "<p>Man multipliziert mit einem Bruch, der gleich 1 ist und so geschrieben wird, dass sich die unerwünschten Einheiten wegkürzen.<br>Beispiel: 54 km/h = 54 <u>km</u>/<u>h</u> × (1000 m / 1 <u>km</u>) × (1 <u>h</u> / 3600 s) = 54 000 / 3600 m/s = <b>15 m/s</b>.<br>Du musst nur prüfen, dass am Ende nur die gewünschten Einheiten übrig bleiben: Wenn nicht, hast du einen Bruch auf den Kopf gestellt.</p>"
        },
        {
          label: "🔢 Die Methode der wissenschaftlichen Notation",
          html: "<p>Ersetze den Vorsatz durch die Zehnerpotenz: 45 μm = 45 × 10⁻⁶ m = 4,5 × 10⁻⁵ m. Mit der wissenschaftlichen Notation gehen keine Nullen verloren, und man kann sehr unterschiedliche Größen leicht vergleichen: Die Zahlen sind zwei Ziffern lang, und der <b>Exponent</b> erledigt die Arbeit.</p>"
        },
        {
          label: "📏 Zeichnung: Größenordnungen",
          html: "<p>Jeder Schritt nach rechts auf dem Zahlenstrahl ist eine Zehnerpotenz mehr.</p>",
          svg: "<svg viewBox='0 0 600 200' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='200' fill='#fff7ed'/><line x1='40' y1='100' x2='560' y2='100' stroke='#9a3412' stroke-width='3'/><g fill='#ea580c'><circle cx='60' cy='100' r='8'/><circle cx='150' cy='100' r='8'/><circle cx='240' cy='100' r='8'/><circle cx='330' cy='100' r='8'/><circle cx='420' cy='100' r='8'/><circle cx='510' cy='100' r='8'/></g><g font-family='sans-serif' font-size='15' text-anchor='middle' fill='#7c2d12'><text x='60' y='80'>10⁻¹⁰</text><text x='150' y='80'>10⁻⁶</text><text x='240' y='80'>10⁻²</text><text x='330' y='80'>10²</text><text x='420' y='80'>10⁶</text><text x='510' y='80'>10¹⁰</text><text x='60' y='135'>Atom</text><text x='150' y='135'>Bakterium</text><text x='240' y='135'>Ameise</text><text x='330' y='135'>Feld</text><text x='420' y='135'>Italien</text><text x='510' y='135'>Erde–Mond x30</text></g></svg>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Begriffslandkarte der Größen und Messungen",
      nodes: [
        { id: "grandezza", label: "Physikalische Größe", x: 50, y: 8, color: "#2563eb", html: "Messbare Eigenschaft eines Gegenstands oder eines Vorgangs.", why: "Galilei behauptete, das Buch der Natur sei in der Sprache der Mathematik geschrieben: Um ein Phänomen zu untersuchen, muss man zuerst das finden, was sich messen lässt. Die moderne Physik entsteht, als man messbare Größen (Zeit, Weg, Masse) statt vager Eigenschaften wählt." },
        { id: "misura", label: "Messwert = Zahl × Einheit", x: 18, y: 42, color: "#16a34a", html: "Vergleich mit einem gleichartigen Normal, der Maßeinheit.", why: "Eine Messung ist ein Vergleich: Zu sagen, ein Tisch sei 2 m lang, heißt, dass das Normal-Meter zweimal in den Tisch passt. Ohne ein gemeinsames Normal kann man Ergebnisse verschiedener Personen nicht vergleichen." },
        { id: "si", label: "Internationales Einheitensystem", x: 82, y: 42, color: "#f59e0b", html: "Sieben Basiseinheiten, die auf der ganzen Welt gelten.", why: "Das SI geht auf das französische metrische Dezimalsystem (1790–99) und die Meterkonvention (1875) zurück. Seit 2019 sind die Einheiten über physikalische Konstanten (c, h, e, k, N_A) definiert, daher sind sie überall stabil und reproduzierbar." },
        { id: "derivate", label: "Abgeleitete Größen", x: 82, y: 78, color: "#8b5cf6", html: "Fläche, Volumen, Geschwindigkeit, Dichte, Kraft …", why: "Die abgeleiteten Größen ergeben sich aus den physikalischen Gesetzen: Die Geschwindigkeit ist das Verhältnis von Weg und Zeit; die Kraft (F = m·a) verbindet Masse und Beschleunigung. Ihre Einheiten leitet man aus den Basiseinheiten ab." },
        { id: "potenze", label: "Zehnerpotenzen und Vorsätze", x: 18, y: 78, color: "#ef4444", html: "Wissenschaftliche Notation, Größenordnungen, Vielfache und Teile.", why: "Das Universum reicht von 10⁻¹⁵ m bis 10²⁶ m: Keine gewöhnliche Schreibweise hält das aus. Zehnerpotenzen sind die logarithmische Skala, mit der sich Wissenschaftler zwischen Atomkern und Galaxien zurechtfinden." },
        { id: "stima", label: "Schätzen und Überprüfen", x: 50, y: 78, color: "#64748b", html: "Dimensionsanalyse und Größenordnungen, um Ergebnisse zu kontrollieren.", why: "Enrico Fermi war berühmt für schnelle Abschätzungen (die „Fermi-Probleme“): Ein Ergebnis mit falscher Größenordnung ist sicher falsch, daher ist das Schätzen eine wertvolle Kontrolle." }
      ],
      edges: [["grandezza", "misura", "wird ausgedrückt durch"], ["misura", "si", "verwendet Einheiten des"], ["si", "derivate", "erzeugt"], ["grandezza", "potenze", "wird geschrieben mit"], ["potenze", "stima", "dient zum"], ["derivate", "stima", "werden kontrolliert durch"]]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: wissenschaftliche Notation",
      questions: [
        { type: "mc", q: "Wie schreibt man 0,0045 in wissenschaftlicher Notation?", options: ["4,5 × 10⁻³", "4,5 × 10³", "45 × 10⁻⁴", "0,45 × 10⁻²"], answer: 0, explain: "Man verschiebt das Komma um 3 Stellen nach rechts: 4,5 × 10⁻³." },
        { type: "mc", q: "Was ist die Größenordnung von 7,5 × 10⁵?", options: ["10⁵", "10⁶", "10⁴", "10⁷"], answer: 1, explain: "Da 7,5 ≥ 5 ist, ist die Größenordnung 10⁶." },
        { type: "num", q: "Berechne (2 × 10⁴) × (3 × 10⁵) und gib den Exponenten von 10 im Ergebnis an, geschrieben als 6 × 10ⁿ.", answer: 9, tol: 0, explain: "6 × 10⁹: Die Exponenten werden addiert, 4 + 5 = 9." }
      ]
    }
  ],
  glossary: [
    { t: "Physikalische Größe", d: "Eigenschaft eines Körpers oder eines Vorgangs, die man messen kann." },
    { t: "Maßeinheit", d: "Normalgröße, mit der man andere Größen derselben Art vergleicht." },
    { t: "Internationales Einheitensystem (SI)", d: "In der gesamten Wissenschaft verwendetes Einheitensystem mit sieben Basisgrößen." },
    { t: "Abgeleitete Größe", d: "Größe, die man aus den Basisgrößen durch Produkte und Quotienten erhält, etwa Geschwindigkeit oder Dichte." },
    { t: "Vorsatz", d: "Vorderer Teil der Einheit, der ein Vielfaches oder einen Teil angibt (Kilo-, Milli- …)." },
    { t: "Wissenschaftliche Notation", d: "Schreibweise einer Zahl als a × 10ⁿ mit 1 ≤ a < 10." },
    { t: "Größenordnung", d: "Die einer Zahl nächstgelegene Zehnerpotenz." },
    { t: "Dimensionsanalyse", d: "Überprüfung einer Formel anhand der Maßeinheiten." },
    { t: "Dichte", d: "Verhältnis von Masse und Volumen eines Körpers (kg/m³)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Eine Größe zu messen bedeutet:", options: ["Sie nach Augenmaß zu schätzen", "Sie mit einem gleichartigen Normal, der Maßeinheit, zu vergleichen", "Zu zählen, wie viele Ziffern sie hat", "Sie mit einer Formel zu berechnen"], answer: 1, explain: "Ein Messwert ist das Verhältnis zwischen der Größe und der gewählten Einheit." },
      { type: "tf", q: "Das Internationale Einheitensystem hat sieben Basisgrößen.", answer: true, explain: "Länge, Masse, Zeit, Stromstärke, Temperatur, Stoffmenge und Lichtstärke." },
      { type: "text", q: "Wie lautet das richtige Symbol der SI-Einheit der Masse?", answer: ["kg"], explain: "Das Kilogramm schreibt man kg, ohne Punkt und ohne Plural." },
      { type: "num", q: "Wie viele Meter sind 450 mm?", answer: 0.45, tol: 0.001, unit: "m", explain: "450 × 10⁻³ m = 0,45 m." },
      { type: "num", q: "Wie viele Meter pro Sekunde sind 108 km/h?", answer: 30, tol: 0.01, unit: "m/s", explain: "108 : 3,6 = 30 m/s." },
      { type: "mc", q: "Welche Einheit ist im SI für die Dichte richtig?", options: ["kg·m", "kg/m³", "m/s", "kg/s"], answer: 1, explain: "Dichte = Masse/Volumen, also kg/m³." },
      { type: "mc", q: "Schreibe 52 000 000 in wissenschaftlicher Notation.", options: ["52 × 10⁶", "5,2 × 10⁷", "0,52 × 10⁸", "5,2 × 10⁶"], answer: 1, explain: "Das Komma muss um 7 Stellen verschoben werden: 5,2 × 10⁷." },
      { type: "mc", q: "Was ist die Größenordnung von 3 × 10⁻⁵?", options: ["10⁻⁴", "10⁻⁵", "10⁻⁶", "10⁵"], answer: 1, explain: "Da 3 < 5 ist, ist die Größenordnung 10⁻⁵." },
      { type: "tf", q: "1 m² ist gleich 100 cm².", answer: false, explain: "1 m² = (100 cm)² = 10 000 cm² = 10⁴ cm²." },
      { type: "order", q: "Ordne vom Kleinsten zum Größten.", items: ["1 nm", "1 μm", "1 mm", "1 km"], explain: "Nano 10⁻⁹ m < Mikro 10⁻⁶ m < Milli 10⁻³ m < Kilo 10³ m." }
    ]
  }
});
