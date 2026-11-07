TOPIC('de', {
  id: "p2-geo-mappe",
  title: "Grundrisse und Karten",
  intro: "Stell dir vor, du bist ein kleiner <b>Vogel</b> 🐦, der über deinem Klassenzimmer fliegt: Was würdest du sehen? Nur die <b>Dächer</b>, die <b>Oberseite</b> der Tische und Stühle! Heute lernen wir, <b>von oben zu sehen</b> und <b>Grundrisse</b>, <b>Karten</b> und <b>Legenden</b> 🗺️ zu lesen.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Drei Arten, einen Gegenstand anzuschauen 👀",
      html: `<p>Derselbe Gegenstand sieht anders aus, wenn du ihn von verschiedenen Punkten aus anschaust. Nimm ein <b>Glas</b> 🥛:</p>
<ul>
<li>👁️ <b>Von vorn</b> (Vorderansicht): Du siehst ein Rechteck.</li>
<li>↘️ <b>Von schräg</b> (Schrägansicht, ein bisschen von oben): Du siehst das Glas und ein Stück des runden Randes.</li>
<li>⬇️ <b>Von oben</b> (Draufsicht, „aus der Vogelperspektive“): Du siehst nur einen <b>Kreis</b>!</li>
</ul>
<p><b>Grundrisse</b> und <b>Karten</b> werden immer <b>von oben</b> gezeichnet, so wie ein kleiner Vogel sie sehen würde.</p>`
    },
    {
      type: "svg",
      title: "Ein Tisch, auf drei Arten gesehen",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="40" y="110" width="140" height="18" fill="#b45309"/>
<rect x="50" y="128" width="14" height="80" fill="#92400e"/>
<rect x="156" y="128" width="14" height="80" fill="#92400e"/>
<polygon points="250,110 400,110 370,145 220,145" fill="#d97706"/>
<rect x="220" y="145" width="150" height="12" fill="#b45309"/>
<rect x="226" y="157" width="12" height="60" fill="#92400e"/>
<rect x="355" y="157" width="12" height="60" fill="#92400e"/>
<rect x="388" y="125" width="10" height="60" fill="#92400e"/>
<rect x="450" y="90" width="120" height="120" fill="#f59e0b" stroke="#92400e" stroke-width="4"/>
<text x="110" y="250" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">von vorn</text>
<text x="300" y="250" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">von schräg</text>
<text x="510" y="250" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">von oben</text>
<text x="510" y="275" font-size="15" text-anchor="middle" fill="#475569">(wie in einem Grundriss)</text>
<text x="300" y="40" font-size="22" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Derselbe Tisch!</text>
</svg>`,
      caption: "Von oben wird der Tisch zu einem Quadrat: Die Beine sieht man nicht mehr, sie sind darunter versteckt."
    },
    {
      type: "3d",
      title: "Dreh den Körper und schau ihn von oben an 🔄",
      scene: "solid",
      options: { shape: "cube", shapes: ["cube", "cylinder", "cone", "pyramid", "sphere"], color: "#38bdf8" },
      caption: "Wechsle den Körper mit den Knöpfen und dreh ihn, bis du ihn genau von oben siehst. Der Würfel wird zu einem Quadrat, der Zylinder und der Kegel werden zu einem Kreis, die Pyramide zu einem Quadrat mit einem X!"
    },
    {
      type: "text",
      title: "Verkleinern: der Maßstab 🔍",
      html: `<p>Ein echtes Zimmer ist groß; das Blatt ist klein. Um es zu zeichnen, müssen wir alles <b>auf dieselbe Weise verkleinern</b>. Das nennt man <b>Verkleinerung im Maßstab</b>.</p>
<p>Ein einfacher Weg ist, die <b>Kästchen</b> im Heft zu benutzen:</p>
<p style="font-size:1.1em">📏 <b>1 Kästchen = 1 Schritt</b> (oder 1 Meter)</p>
<p>Wenn das Lehrerpult 2 Schritte lang ist, zeichnest du es <b>2 Kästchen</b> lang. Wenn das Klassenzimmer 8 Schritte lang ist, zeichnest du es <b>8 Kästchen</b> lang. So bleibt alles <b>im richtigen Verhältnis</b>: Große Dinge bleiben größer, kleine kleiner.</p>`
    },
    {
      type: "widget",
      title: "Zeichne den Grundriss eines Zimmers auf Kästchen",
      widget: "areaGrid",
      options: { w: 6, h: 4, max: 12 },
      caption: "Jedes Kästchen ist 1 Schritt. Bewege die Regler: Wie viele Kästchen braucht man für ein Zimmer, das 6 Schritte lang und 4 breit ist?"
    },
    {
      type: "text",
      title: "Grundriss, Plan, Landkarte 🗺️",
      html: `<p>Je größer der Raum, desto mehr muss man verkleinern. Auch der Name der Zeichnung ändert sich:</p>
<table>
<tr><th>Name</th><th>Was sie zeigt</th><th>Beispiel</th></tr>
<tr><td>📐 <b>Grundriss</b></td><td>einen kleinen Raum, mit vielen Einzelheiten</td><td>dein Kinderzimmer, das Klassenzimmer, ein Haus</td></tr>
<tr><td>🗺️ <b>Plan</b> (Stadtplan)</td><td>einen größeren Raum: Straßen, Plätze, Parks</td><td>das Viertel, das Stadtzentrum</td></tr>
<tr><td>🌍 <b>Landkarte</b></td><td>sehr große Räume: Regionen, Staaten, Kontinente</td><td>die Karte von Italien, der Globus</td></tr>
</table>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: von oben",
      questions: [
        { type: "mc", q: "Von oben gesehen sieht ein Ball aus wie …", options: ["ein Quadrat", "ein Kreis", "ein Dreieck"], answer: 1, explain: "Der Ball wird von oben als Kreis gesehen." },
        { type: "mc", q: "Wie heißt die Zeichnung eines Zimmers, von oben gesehen?", options: ["Grundriss", "Porträt", "Comic"], answer: 0, explain: "Es ist der Grundriss." },
        { type: "num", q: "1 Kästchen = 1 Schritt. Ein Schrank ist 3 Schritte breit: Wie viele Kästchen?", answer: 3, tol: 0, unit: "Kästchen", explain: "3 Schritte = 3 Kästchen." }
      ]
    },
    {
      type: "text",
      title: "Die Legende: das Wörterbuch der Karte 🔑",
      html: `<p>Auf Grundrissen und Karten zeichnet man nicht alles genau: Man benutzt <b>Symbole</b> 🔣 (kleine Zeichnungen, Farben, Linien).</p>
<p>Um zu verstehen, was jedes Symbol bedeutet, gibt es die <b>Legende</b>: ein Kästchen, meistens in einer Ecke, das alle Symbole erklärt. Sie ist wie ein kleines <b>Wörterbuch</b>!</p>
<p>Manche Farben benutzt man fast immer auf dieselbe Weise:</p>
<ul>
<li>🟦 <b>blau</b>: Wasser (Flüsse, Seen, Meer);</li>
<li>🟩 <b>grün</b>: Wiesen, Parks, Ebenen;</li>
<li>🟫 <b>braun</b>: Berge und Hügel;</li>
<li>⬜ <b>grau</b> oder <b>weiß</b>: Straßen und Plätze.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Eine Karte mit Legende",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#ffffff"/>
<rect x="10" y="10" width="400" height="300" fill="#bbf7d0" stroke="#0f172a" stroke-width="2"/>
<path d="M10 220 C120 200 200 260 410 230" stroke="#3b82f6" stroke-width="16" fill="none"/>
<rect x="10" y="110" width="400" height="22" fill="#d1d5db"/>
<rect x="190" y="10" width="22" height="300" fill="#d1d5db"/>
<rect x="60" y="40" width="70" height="50" fill="#f87171" stroke="#7f1d1d" stroke-width="2"/>
<rect x="260" y="40" width="50" height="50" fill="#facc15" stroke="#854d0e" stroke-width="2"/>
<circle cx="340" cy="170" r="16" fill="#15803d"/>
<circle cx="370" cy="160" r="16" fill="#15803d"/>
<circle cx="80" cy="165" r="16" fill="#15803d"/>
<rect x="430" y="10" width="160" height="300" fill="#f1f5f9" stroke="#0f172a" stroke-width="2"/>
<text x="510" y="38" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">LEGENDE</text>
<rect x="445" y="60" width="28" height="22" fill="#f87171" stroke="#7f1d1d" stroke-width="2"/>
<text x="482" y="77" font-size="15" fill="#0f172a">Schule</text>
<rect x="445" y="100" width="28" height="22" fill="#facc15" stroke="#854d0e" stroke-width="2"/>
<text x="482" y="117" font-size="15" fill="#0f172a">Geschäft</text>
<circle cx="459" cy="152" r="12" fill="#15803d"/>
<text x="482" y="157" font-size="15" fill="#0f172a">Baum</text>
<rect x="445" y="182" width="28" height="14" fill="#d1d5db"/>
<text x="482" y="195" font-size="15" fill="#0f172a">Straße</text>
<rect x="445" y="222" width="28" height="12" fill="#3b82f6"/>
<text x="482" y="234" font-size="15" fill="#0f172a">Fluss</text>
<rect x="445" y="258" width="28" height="22" fill="#bbf7d0" stroke="#0f172a" stroke-width="1"/>
<text x="482" y="275" font-size="15" fill="#0f172a">Wiese</text>
</svg>`,
      caption: "Dank der Legende verstehst du sofort, wo die Schule, das Geschäft, die Bäume und der Fluss sind."
    },
    {
      type: "widget",
      title: "Ordne das Symbol der Bedeutung zu",
      widget: "match",
      options: {
        pairs: [
          ["🟦 blaue Linie", "Fluss"],
          ["🟩 grüne Fläche", "Park oder Wiese"],
          ["🔺 braunes Dreieck", "Berg"],
          ["✝️ Kreuz", "Kirche"],
          ["🅿️ blaues P", "Parkplatz"],
          ["➕ grünes Kreuz", "Apotheke"]
        ]
      },
      caption: "Das sind Symbole, die auf echten Karten sehr oft benutzt werden."
    },
    {
      type: "example",
      title: "Praktisches Beispiel: der Grundriss meines Klassenzimmers ✏️",
      html: `<p>So zeichnet Matteo den Grundriss seines Klassenzimmers:</p>
<ol>
<li>👣 Er <b>misst</b> das Klassenzimmer in Schritten: 8 Schritte lang, 6 breit.</li>
<li>📏 Im Heft zeichnet er ein Rechteck von <b>8 × 6 Kästchen</b>.</li>
<li>🚪 Er markiert die <b>Tür</b> und die <b>Fenster</b> an den richtigen Seiten.</li>
<li>🟫 Er zeichnet die <b>Tische</b> als kleine Rechtecke, das <b>Lehrerpult</b> als größeres Rechteck, die <b>Tafel</b> als dicke Linie an der Wand.</li>
<li>🔑 Er macht die <b>Legende</b>: Tisch = kleines braunes Rechteck, Lehrerpult = blaues Rechteck …</li>
</ol>
<p>Jetzt weiß ein Mitschüler aus einer anderen Klasse, wenn er den Grundriss anschaut, wo Matteos Tisch steht!</p>`
    },
    {
      type: "example",
      title: "Praktisches Beispiel: die Schatzsuche 🏴‍☠️",
      html: `<p>Die Lehrerin versteckt im Garten einen Schatz und gibt den Kindern eine <b>Karte</b>:</p>
<ul>
<li>🌳 Drei grüne Kreise = die drei Bäume.</li>
<li>🟫 Ein braunes Rechteck = die Bank.</li>
<li>❌ Ein rotes X = der Schatz, zwischen der Bank und dem größten Baum.</li>
</ul>
<p>Die Kinder <b>drehen die Karte</b>, bis die Zeichnungen so liegen wie die echten Dinge vor ihnen (man sagt, man <b>nordet die Karte ein</b>) und … finden den Schatz! 🎁</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? 🏛️",
      html: `<p>Vor mehr als <b>1800 Jahren</b> wurde in Rom ein riesiger, in <b>Marmor</b> gemeißelter Plan der Stadt angefertigt: die <b>Forma Urbis</b>. Sie war etwa <b>18 Meter</b> breit und <b>13</b> hoch, so groß wie die Fassade eines Hauses, und zeigte jedes Haus und jedes Zimmer! Heute sind nur noch Stücke davon übrig, und die Archäologen versuchen, sie wie ein Puzzle wieder zusammenzusetzen.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? 🛰️",
      html: `<p>Heute macht man Karten auch mit <b>Satellitenfotos</b>: Die Satelliten kreisen in Hunderten von Kilometern Höhe um die Erde und fotografieren alles <b>von oben</b>. Die Karten-Apps auf dem Handy benutzen genau diese Fotos: Du kannst das Dach deiner Schule sehen!</p>`
    },
    {
      type: "3d",
      title: "Von der Wirklichkeit zur Karte: die 3D-Landschaft",
      scene: "terrain",
      caption: "Dreh die Landschaft und schau sie genau von oben an: Du siehst den Berg als braunen Fleck, den See und den Fluss als blaue Formen, die Ebene grün. So entsteht eine Landkarte!",
      options: {
        features: {
          mountain: { label: "Berg", html: "Auf Karten wird er <b>braun</b> gefärbt: Je dunkler, desto höher." },
          hill: { label: "Hügel", html: "Auf Karten ist er hellbraun oder gelb." },
          plain: { label: "Ebene", html: "Auf Karten wird sie <b>grün</b> gefärbt." },
          river: { label: "Fluss", html: "Auf Karten ist er eine <b>blaue Linie</b>, die sich zum Meer hin verbreitert." },
          lake: { label: "See", html: "Auf Karten ist er ein geschlossener <b>blauer</b> Fleck." },
          sea: { label: "Meer", html: "Auf Karten ist es <b>blau</b>: Je dunkler, desto tiefer." }
        }
      }
    },
    {
      type: "alternatives",
      title: "Andere Wege, Karten zu verstehen",
      intro: "Kommen dir Karten schwierig vor? Probiere diese anderen Wege.",
      tabs: [
        {
          label: "🧱 Mit Bausteinen",
          html: `<p>Baue dein Kinderzimmer mit <b>Bausteinen</b> oder kleinen Schachteln nach: ein langer Baustein für das Bett, ein quadratischer für den Nachttisch …</p>
<p>Dann stelle sie auf ein <b>Blatt</b> und <b>zeichne</b> den Umriss jedes Bausteins mit dem Bleistift <b>nach</b>. Nimm die Bausteine weg: Auf dem Blatt ist der <b>Grundriss</b> deines Kinderzimmers geblieben! Genau so, als würdest du es von oben sehen.</p>`,
          scene: "blocks",
          options: { mode: "volume", a: 4, b: 3, c: 1 }
        },
        {
          label: "🔦 Das Schattenspiel",
          html: `<p>Halte im Dunkeln eine Taschenlampe <b>genau über</b> einen Gegenstand (eine Tasse, ein Spielzeug). Der <b>Schatten</b> auf dem Tisch ist die Form, die du von oben sehen würdest!</p>
<ul>
<li>☕ die Tasse wirft einen runden Schatten;</li>
<li>📦 eine Schachtel wirft einen rechteckigen Schatten;</li>
<li>🧸 ein Teddybär wirft einen Schatten als Fleck.</li>
</ul>
<p>Grundrisse sind ein bisschen wie die „Schatten von oben“ der Dinge.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#1e293b"/>
<rect x="270" y="10" width="60" height="30" rx="6" fill="#facc15"/>
<polygon points="280,40 320,40 420,200 180,200" fill="#fef9c3" opacity="0.25"/>
<rect x="265" y="120" width="70" height="60" fill="#60a5fa"/>
<ellipse cx="300" cy="205" rx="45" ry="14" fill="#0f172a"/>
<rect x="0" y="200" width="600" height="40" fill="#78350f"/>
<ellipse cx="300" cy="215" rx="50" ry="12" fill="#1c1917"/>
<text x="480" y="90" font-size="17" fill="#fef9c3" text-anchor="middle">Taschenlampe oben</text>
<text x="480" y="225" font-size="17" fill="#fef9c3" text-anchor="middle">Schatten = Form von oben</text>
</svg>`
        },
        {
          label: "🌍 Karten anderer Völker",
          html: `<p>In der Welt hat man Karten auf viele Arten gemacht:</p>
<ul>
<li>🐚 Die Bewohner der <b>Marshallinseln</b> (Pazifischer Ozean) bauten <b>Karten aus Stäbchen und Muscheln</b>: Die Muscheln waren die Inseln, die Stäbchen zeigten, wie sich die Wellen bewegen.</li>
<li>🏺 In <b>Mesopotamien</b> (dem heutigen Irak) wurde vor etwa 2600 Jahren eine der ältesten „Weltkarten“ in eine Tontafel eingeritzt.</li>
<li>📜 Die <b>Tabula Peutingeriana</b> ist eine mittelalterliche Kopie einer römischen Straßenkarte: Sie ist fast <b>7 Meter</b> lang und nur 34 cm breit, wie eine ganz lange Rolle!</li>
</ul>`
        },
        {
          label: "🧩 Lies den Parkplan",
          html: `<p>Schau dir den Plan an und klicke auf die Punkte: Kannst du sagen, was jedes Ding ist, nur anhand der Form von oben?</p>`,
          widget: "labelDiagram",
          options: {
            svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#bbf7d0"/>
<path d="M0 150 L600 150" stroke="#d6d3d1" stroke-width="26"/>
<ellipse cx="130" cy="70" rx="80" ry="40" fill="#60a5fa"/>
<circle cx="330" cy="70" r="22" fill="#15803d"/>
<circle cx="380" cy="80" r="22" fill="#15803d"/>
<rect x="470" y="210" width="80" height="20" fill="#a16207"/>
<rect x="100" y="210" width="90" height="60" fill="#fde68a" stroke="#a16207" stroke-width="3"/>
<circle cx="320" cy="240" r="30" fill="#e5e7eb" stroke="#64748b" stroke-width="4"/>
</svg>`,
            spots: [
              { x: 130, y: 70, label: "Teich" },
              { x: 355, y: 75, label: "Bäume" },
              { x: 300, y: 150, label: "Weg" },
              { x: 510, y: 220, label: "Bank" },
              { x: 145, y: 240, label: "Sandkasten" },
              { x: 320, y: 240, label: "Brunnen" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Karten",
      nodes: [
        { id: "alto", label: "Ansicht von oben", x: 50, y: 6, color: "#6366f1", html: "<p>Die Dinge von oben anschauen, wie ein kleiner Vogel.</p>", why: "<p>Von oben sieht man alle Dinge <b>zusammen</b> und an ihrer wahren Stelle, ohne dass eins das andere verdeckt. Darum zeichnen Kartografen (wer Karten macht) immer von oben.</p>" },
        { id: "riduzione", label: "Verkleinerung im Maßstab", x: 20, y: 30, color: "#f97316", html: "<p>Alles auf dieselbe Weise verkleinern.</p>", why: "<p>Ein Blatt kann nicht so groß sein wie eine Stadt! Wenn man alles <b>mit demselben Maß</b> verkleinert (zum Beispiel 1 Kästchen = 1 Meter), bleiben die Formen und Entfernungen richtig.</p>" },
        { id: "simboli", label: "Symbole", x: 50, y: 30, color: "#0ea5e9", html: "<p>Kleine Zeichnungen, Farben und Linien anstelle der echten Dinge.</p>", why: "<p>Würden wir jedes Haus mit allen Fenstern zeichnen, wäre die Karte unübersichtlich. Symbole sind <b>einfach</b> und schnell zu erkennen.</p>" },
        { id: "legenda", label: "Legende", x: 80, y: 30, color: "#a855f7", html: "<p>Das Kästchen, das die Symbole erklärt.</p>", why: "<p>Das Wort kommt vom lateinischen <i>legenda</i>, „die Dinge, die man lesen soll“. Ohne Legende wären die Symbole ein Geheimcode!</p>" },
        { id: "pianta", label: "Grundriss", x: 20, y: 62, color: "#16a34a", html: "<p>Kleine Räume: ein Zimmer, ein Haus, die Schule.</p>", why: "<p>Man verkleinert wenig, deshalb sieht man viele Einzelheiten: Türen, Fenster, Möbel. <b>Architekten</b> zeichnen Grundrisse, bevor sie ein Haus bauen.</p>" },
        { id: "mappa", label: "Plan", x: 50, y: 62, color: "#eab308", html: "<p>Größere Räume: das Viertel, die Stadt.</p>", why: "<p>Man verkleinert stärker: Die Häuser werden zu kleinen Rechtecken, und man sieht vor allem die Straßen, Plätze und Parks.</p>" },
        { id: "carta", label: "Landkarte", x: 80, y: 62, color: "#ef4444", html: "<p>Riesige Räume: Italien, die Kontinente.</p>", why: "<p>Man verkleinert enorm: Eine Stadt wird zu einem Punkt. Der griechische Geograf <b>Ptolemäus</b> schrieb vor etwa 1900 Jahren auf, wie man die Welt mit Breiten- und Längenkreisen zeichnet.</p>" },
        { id: "colori", label: "Konventionelle Farben", x: 50, y: 92, color: "#14b8a6", html: "<p>Blau = Wasser, grün = Ebene, braun = Berg.</p>", why: "<p>„Konventionell“ heißt <b>gemeinsam beschlossen</b>. Wenn alle dieselben Farben benutzen, kann jeder auf der Welt eine Karte lesen, ohne die Sprache dessen zu kennen, der sie gemacht hat.</p>" }
      ],
      edges: [
        ["alto", "riduzione", "dann macht man die"],
        ["alto", "simboli", "man benutzt"],
        ["simboli", "legenda", "erklärt in der"],
        ["riduzione", "pianta", "wenig:"],
        ["riduzione", "mappa", "mehr:"],
        ["riduzione", "carta", "enorm:"],
        ["simboli", "colori", "wie die"],
        ["carta", "colori", "benutzt die"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Legende",
      questions: [
        { type: "mc", q: "Wozu dient die Legende?", options: ["Um die Symbole der Karte zu erklären", "Um die Karte zu färben", "Um die Temperatur zu messen"], answer: 0, explain: "Die Legende ist das „Wörterbuch“ der Symbole." },
        { type: "mc", q: "Auf Karten bedeutet Blau normalerweise …", options: ["Berge", "Wasser", "Straßen"], answer: 1, explain: "Blau = Meere, Seen und Flüsse." },
        { type: "tf", q: "Um das Viertel zu zeichnen, benutzt man dieselbe Verkleinerung wie beim Kinderzimmer.", answer: false, explain: "Das Viertel ist größer: Man muss stärker verkleinern." }
      ]
    },
    {
      type: "remember",
      title: "Merke dir 📌",
      html: `<ul>
<li>Grundrisse und Karten zeigen die Orte <b>von oben gesehen</b>.</li>
<li>Um sie zu zeichnen, <b>verkleinert</b> man alles auf dieselbe Weise (Maßstab).</li>
<li><b>Grundriss</b> = kleine Räume; <b>Plan</b> = größere Räume; <b>Landkarte</b> = riesige Räume.</li>
<li>Die <b>Symbole</b> werden in der <b>Legende</b> erklärt.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Grundriss", d: "Zeichnung eines kleinen Raumes von oben, wie ein Zimmer." },
    { t: "Plan", d: "Zeichnung eines größeren Raumes von oben, wie ein Viertel." },
    { t: "Landkarte", d: "Zeichnung sehr großer Gebiete: Regionen, Staaten, Kontinente." },
    { t: "Draufsicht", d: "Von oben schauen, genau von oben." },
    { t: "Maßstab", d: "Alles auf dieselbe Weise verkleinern, damit es aufs Blatt passt." },
    { t: "Symbol", d: "Eine kleine Zeichnung oder Farbe, die für etwas Echtes steht." },
    { t: "Legende", d: "Das Kästchen, das erklärt, was die Symbole bedeuten." },
    { t: "Kartograf", d: "Die Person, die Karten zeichnet." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Von oben gesehen sieht ein Glas aus wie …", options: ["ein Rechteck", "ein Kreis", "ein Stern"], answer: 1, explain: "Von oben sieht man den runden Rand: einen Kreis." },
      { type: "mc", q: "Wie heißt die Ansicht „aus der Vogelperspektive“, genau von oben?", options: ["Vorderansicht", "Draufsicht", "Seitenansicht"], answer: 1, explain: "Draufsicht = von oben." },
      { type: "text", q: "Wie heißt das Kästchen, das die Symbole einer Karte erklärt?", answer: ["Legende", "die Legende"], explain: "Die Legende." },
      { type: "order", q: "Bring die Zeichnungen in die Reihenfolge vom kleineren zum größeren Raum.", items: ["Grundriss des Kinderzimmers", "Plan des Viertels", "Landkarte von Italien"], explain: "Grundriss → Plan → Landkarte." },
      { type: "num", q: "1 Kästchen = 1 Schritt. Das Klassenzimmer ist 9 Schritte lang. Wie viele Kästchen zeichnest du?", answer: 9, tol: 0, unit: "Kästchen", explain: "9 Schritte = 9 Kästchen." },
      { type: "tf", q: "Auf Landkarten ist die Ebene oft grün gefärbt.", answer: true, explain: "Grün = Ebene, braun = Berg, blau = Wasser." },
      { type: "mc", q: "Von oben gesehen sieht ein Bett aus wie …", options: ["ein Rechteck", "ein Kreis", "ein Dreieck"], answer: 0, explain: "Das Bett ist von oben ein Rechteck." },
      { type: "mc", q: "Warum benutzt man Symbole auf Karten?", options: ["Damit sie leichter zu lesen sind", "Um sie vor Piraten zu verstecken", "Weil echte Zeichnungen verboten sind"], answer: 0, explain: "Symbole sind einfach und schnell zu erkennen." },
      { type: "tf", q: "„Im Maßstab“ verkleinern heißt, jedes Ding auf eine andere Weise zu verkleinern.", answer: false, explain: "Alles muss auf dieselbe Weise verkleinert werden, damit die Verhältnisse stimmen." },
      { type: "order", q: "Bring die Schritte zum Zeichnen des Klassenzimmer-Grundrisses in die richtige Reihenfolge.", items: ["Ich messe das Klassenzimmer in Schritten", "Ich zeichne den Umriss auf die Kästchen", "Ich zeichne Türen, Fenster und Tische", "Ich mache die Legende"], explain: "Zuerst misst man, dann zeichnet man den Umriss, dann das Innere, zum Schluss erklärt man die Symbole." },
      { type: "mc", q: "Was war die Forma Urbis?", options: ["Ein in Marmor gemeißelter Plan von Rom", "Eine Karten-App", "Ein römischer Kompass"], answer: 0, explain: "Ein riesiger Marmorplan des antiken Roms." }
    ]
  }
});
