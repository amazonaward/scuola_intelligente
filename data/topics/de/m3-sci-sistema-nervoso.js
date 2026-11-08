TOPIC('de', {
  id: "m3-sci-sistema-nervoso",
  title: "Das Nervensystem",
  intro: "Diesen Satz lesen, sich an ein Lied erinnern, die Hand von einem heißen Topf zurückziehen, den Duft von Pizza riechen: Alles läuft über das <b>Nervensystem</b>, das Kommunikationsnetz des Körpers. Es besteht aus Milliarden besonderer Zellen, den <b>Neuronen</b>, die elektrische und chemische Signale in wenigen Tausendstelsekunden austauschen.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Wozu dient das Nervensystem?",
      html: `<p>Das Nervensystem erfüllt drei Aufgaben, eine nach der anderen:</p>
<ol>
<li><b>Aufnehmen</b> von Informationen von außerhalb und aus dem Inneren des Körpers, durch die <b>Rezeptoren</b> der Sinnesorgane (Augen, Ohren, Haut …) und der inneren Organe.</li>
<li><b>Verarbeiten</b> der Informationen: sie mit Erinnerungen vergleichen, entscheiden, was zu tun ist. Das erledigen das <b>Gehirn</b> und das <b>Rückenmark</b>.</li>
<li><b>Antworten</b>, indem es Befehle an die <b>Effektoren</b> sendet: die Muskeln (die sich zusammenziehen) und die Drüsen (die Stoffe herstellen).</li>
</ol>
<p>Es arbeitet zusammen mit dem <b>Hormonsystem</b> (den Drüsen, die Hormone herstellen): Das Nervensystem ist schnell wie eine Nachricht auf dem Handy, die Hormone sind langsamer, haben aber länger anhaltende Wirkungen, wie ein Brief.</p>`
    },
    {
      type: "text",
      title: "2. Das Neuron, die Zelle, die „spricht“",
      html: `<p>Das <b>Neuron</b> ist die Zelle des Nervensystems. Im menschlichen Gehirn gibt es etwa <b>86 Milliarden</b> davon. Es besteht aus:</p>
<ul>
<li>dem <b>Zellkörper</b> mit dem Zellkern;</li>
<li>den <b>Dendriten</b>: kurze Verzweigungen, die Signale von anderen Neuronen <b>empfangen</b>;</li>
<li>dem <b>Axon</b>: ein langer Fortsatz (kann über 1 Meter lang sein, vom Rückenmark bis zur großen Zehe!), der das Signal <b>weiterleitet</b>;</li>
<li>der <b>Myelinscheide</b>: eine isolierende Fetthülle, wie das Plastik um Stromkabel, die das Signal viel schneller macht;</li>
<li>den <b>synaptischen Endknöpfchen</b>: die „Finger“ am Ende, die die Nachricht an die nächste Zelle weitergeben.</li>
</ul>
<p>Das Signal, das am Axon entlangläuft, heißt <b>Nervenimpuls</b>: eine kleine elektrische Welle, die durch den Durchtritt von Ionen (Natrium und Kalium) durch die Membran entsteht. In Fasern mit Myelin kann es bis zu etwa <b>120 m/s</b> schnell sein (mehr als 400 km/h).</p>
<p>Neben den Neuronen gibt es die <b>Gliazellen</b>, die sie ernähren, schützen und das Myelin bilden.</p>`
    },
    {
      type: "widget",
      title: "Erkenne die Teile des Neurons",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="260" fill="#eff6ff"/>
<path d="M90 130 L30 70 M90 130 L25 130 M90 130 L35 195 M60 100 L45 60 M55 165 L30 175 M40 70 L20 50" stroke="#7c3aed" stroke-width="7" stroke-linecap="round" fill="none"/>
<circle cx="100" cy="130" r="38" fill="#c084fc" stroke="#6d28d9" stroke-width="4"/>
<circle cx="100" cy="130" r="13" fill="#4c1d95"/>
<line x1="138" y1="130" x2="540" y2="130" stroke="#6d28d9" stroke-width="8"/>
<rect x="170" y="115" width="70" height="30" rx="15" fill="#fde68a" stroke="#d97706" stroke-width="3"/>
<rect x="260" y="115" width="70" height="30" rx="15" fill="#fde68a" stroke="#d97706" stroke-width="3"/>
<rect x="350" y="115" width="70" height="30" rx="15" fill="#fde68a" stroke="#d97706" stroke-width="3"/>
<rect x="440" y="115" width="70" height="30" rx="15" fill="#fde68a" stroke="#d97706" stroke-width="3"/>
<path d="M540 130 L590 85 M540 130 L600 130 M540 130 L590 180" stroke="#6d28d9" stroke-width="6" fill="none"/>
<circle cx="592" cy="83" r="9" fill="#22c55e"/><circle cx="604" cy="130" r="9" fill="#22c55e"/><circle cx="592" cy="182" r="9" fill="#22c55e"/>
<text x="340" y="230" font-size="16" fill="#1e3a8a" text-anchor="middle">Richtung des Impulses →</text>
</svg>`,
        spots: [
          { x: 35, y: 70, label: "Dendriten" },
          { x: 100, y: 105, label: "Zellkörper" },
          { x: 100, y: 130, label: "Zellkern" },
          { x: 300, y: 130, label: "Myelinscheide" },
          { x: 250, y: 155, label: "Axon" },
          { x: 604, y: 130, label: "Synaptische Endknöpfchen" }
        ]
      },
      caption: "Tippe auf jeden Punkt und wähle den richtigen Namen. Das Signal kommt über die Dendriten hinein und geht über die Endknöpfchen hinaus."
    },
    {
      type: "text",
      title: "3. Die Synapse: ein chemischer Sprung",
      html: `<p>Die Neuronen berühren sich nicht: Zwischen einem Neuron und dem nächsten liegt ein mikroskopisch kleiner Spalt, die <b>Synapse</b>. Wenn der elektrische Impuls am Ende des Axons ankommt, setzt das Neuron chemische Stoffe frei, die <b>Neurotransmitter</b> (zum Beispiel Acetylcholin, Dopamin, Serotonin). Sie überqueren den Spalt und binden an die nächste Zelle, die dadurch „angehen“ oder „ausgehen“ kann.</p>
<p>Jedes Neuron kann Tausende von Synapsen haben: Im Gehirn sind es Hunderte von <b>Billionen</b>. Wenn wir etwas lernen, werden einige Synapsen verstärkt und neue bilden sich: Das ist die <b>Plastizität</b> des Gehirns. Deshalb funktioniert Üben!</p>
<p>Viele <b>Drogen</b>, <b>Alkohol</b> und <b>Nikotin</b> wirken genau auf die Synapsen, indem sie die Neurotransmitter nachahmen oder blockieren: Sie verändern Wahrnehmung und Reflexe und können <b>abhängig</b> machen. Das Gehirn von Jugendlichen ist noch im Aufbau (bis etwa 25 Jahre) und besonders verletzlich.</p>`
    },
    {
      type: "text",
      title: "4. Die Gliederung: zentral und peripher",
      html: `<table>
<tr><th>Zentrales Nervensystem (ZNS)</th><th>Peripheres Nervensystem (PNS)</th></tr>
<tr><td><b>Gehirn</b> (im Schädel) und <b>Rückenmark</b> (in der Wirbelsäule). Es verarbeitet Informationen und trifft Entscheidungen.</td>
<td><b>Nerven</b>, die das ZNS mit dem ganzen Körper verbinden: <b>12 Hirnnervenpaare</b> (gehen vom Gehirn aus) und <b>31 Spinalnervenpaare</b> (gehen vom Rückenmark aus).</td></tr>
</table>
<p>Das ZNS wird geschützt von <b>Knochen</b> (Schädel und Wirbel), von drei Häuten, den <b>Hirnhäuten</b> (harte Hirnhaut, Spinnwebenhaut, weiche Hirnhaut), und von einer Flüssigkeit, die als Polster dient, dem <b>Liquor</b>.</p>
<p>Das PNS gliedert sich in:</p>
<ul>
<li><b>somatisch</b> (willkürlich): steuert die Skelettmuskeln, die du bewegst, wenn du willst;</li>
<li><b>vegetativ</b> (unwillkürlich): steuert Herz, Magen, Darm, Drüsen. Es hat zwei Teile, die gegensätzlich arbeiten:
<ul><li><b>Sympathikus</b>: „Kampf oder Flucht“ – beschleunigt das Herz, weitet die Pupillen, hemmt die Verdauung;</li>
<li><b>Parasympathikus</b>: „Ruhe und Verdauung“ – verlangsamt das Herz, fördert die Verdauung.</li></ul></li>
</ul>`
    },
    {
      type: "text",
      title: "5. Das Gehirn (Enzephalon)",
      html: `<p>Das <b>Gehirn</b> wiegt etwa <b>1,3–1,4 kg</b>, also 2 % des Körpergewichts, verbraucht aber etwa <b>20 % der Energie</b>. Es umfasst:</p>
<ul>
<li><b>Großhirn</b>: in zwei <b>Hemisphären</b> geteilt, die durch den <b>Balken</b> verbunden sind. Der äußere Teil, die <b>Großhirnrinde</b> (graue Substanz, voller Falten), ist der Ort, wo Denken, Sprache, Gedächtnis und willkürliche Bewegungen entstehen. Jede Hemisphäre gliedert sich in 4 <b>Lappen</b>: Stirnlappen, Scheitellappen, Schläfenlappen, Hinterhauptslappen.</li>
<li><b>Zwischenhirn</b>: Der <b>Thalamus</b> sortiert die Informationen der Sinne; der <b>Hypothalamus</b> regelt Temperatur, Hunger, Durst, Schlaf und steuert die Hypophyse (die „Königin“ der Drüsen).</li>
<li><b>Kleinhirn</b>: hinter und unter dem Großhirn; koordiniert die Bewegungen und das <b>Gleichgewicht</b>. Es erlaubt dir, Fahrrad zu fahren, ohne darüber nachzudenken.</li>
<li><b>Hirnstamm</b>: verbindet Gehirn und Rückenmark; steuert automatische lebenswichtige Funktionen wie <b>Atmung</b> und <b>Herzschlag</b>.</li>
</ul>
<p>Interessant: Die Nervenbahnen <b>kreuzen sich</b>. Die <b>linke</b> Hemisphäre steuert die <b>rechte</b> Körperhälfte und umgekehrt.</p>`
    },
    {
      type: "svg",
      title: "Die Hirnlappen und ihre Funktionen",
      svg: `<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="330" fill="#fff7ed"/>
<path d="M120 190 C 100 110, 170 40, 280 38 C 380 35, 470 70, 490 150 C 505 205, 470 240, 420 240 L 160 240 C 130 238, 122 215, 120 190 Z" fill="#fca5a5" stroke="#7f1d1d" stroke-width="3"/>
<path d="M280 38 C 270 100, 290 150, 260 240" stroke="#7f1d1d" stroke-width="3" fill="none"/>
<path d="M420 70 C 400 130, 420 180, 440 235" stroke="#7f1d1d" stroke-width="3" fill="none"/>
<path d="M140 200 C 220 180, 330 190, 420 200" stroke="#7f1d1d" stroke-width="3" fill="none"/>
<path d="M120 190 C 100 110, 170 40, 280 38 C 270 100, 290 150, 270 195 C 220 185, 170 190, 120 190 Z" fill="#60a5fa" opacity="0.75"/>
<path d="M280 38 C 380 35, 410 50, 420 70 C 400 130, 420 180, 420 200 C 360 192, 310 190, 270 195 C 290 150, 270 100, 280 38 Z" fill="#fbbf24" opacity="0.75"/>
<path d="M420 70 C 470 85, 495 130, 490 160 C 500 205, 470 238, 440 236 C 425 220, 420 210, 420 200 C 420 180, 400 130, 420 70 Z" fill="#a78bfa" opacity="0.8"/>
<path d="M140 200 C 220 182, 330 190, 420 200 C 430 220, 438 232, 440 238 L 170 240 C 150 236, 142 222, 140 200 Z" fill="#34d399" opacity="0.8"/>
<ellipse cx="430" cy="270" rx="55" ry="32" fill="#f472b6" stroke="#831843" stroke-width="3"/>
<rect x="335" y="238" width="30" height="80" fill="#fb923c" stroke="#7c2d12" stroke-width="3"/>
<text x="165" y="130" font-size="16" font-weight="bold" fill="#1e3a8a">STIRNLAPPEN</text>
<text x="158" y="150" font-size="13" fill="#1e3a8a">Entscheiden, Bewegung,</text>
<text x="170" y="166" font-size="13" fill="#1e3a8a">Sprechen (Broca)</text>
<text x="300" y="90" font-size="16" font-weight="bold" fill="#78350f">SCHEITELLAPPEN</text>
<text x="300" y="110" font-size="13" fill="#78350f">Tasten, Lage</text>
<text x="430" y="140" font-size="14" font-weight="bold" fill="#3b0764">HINTER-</text>
<text x="433" y="157" font-size="14" font-weight="bold" fill="#3b0764">HAUPT</text>
<text x="437" y="175" font-size="13" fill="#3b0764">Sehen</text>
<text x="200" y="218" font-size="16" font-weight="bold" fill="#064e3b">SCHLÄFENLAPPEN: Hören, Gedächtnis</text>
<text x="430" y="275" font-size="14" font-weight="bold" fill="#831843" text-anchor="middle">Kleinhirn</text>
<text x="300" y="300" font-size="14" font-weight="bold" fill="#7c2d12" text-anchor="end">Hirnstamm</text>
<text x="40" y="60" font-size="15" fill="#334155">vorn ←</text>
</svg>`,
      caption: "Linke Hemisphäre von der Seite gesehen. Jeder Lappen hat überwiegende Funktionen, aber für fast jede Tätigkeit arbeiten viele Bereiche zusammen."
    },
    {
      type: "3d",
      title: "Die Schichten, die das Gehirn schützen",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#fcd5b5", label: "Kopfhaut" },
          { r: 0.95, color: "#f1f5f9", label: "Schädelknochen" },
          { r: 0.87, color: "#93c5fd", label: "Hirnhäute und Liquor" },
          { r: 0.82, color: "#9ca3af", label: "Rinde (graue Substanz)" },
          { r: 0.72, color: "#f8fafc", label: "Weiße Substanz (Axone mit Myelin)" },
          { r: 0.15, color: "#38bdf8", label: "Ventrikel, mit Liquor gefüllt" }
        ]
      },
      caption: "Dreh und schau auf den Keil: Die graue Substanz enthält die Zellkörper der Neuronen, die weiße Substanz ist wegen des Myelins der Axone weiß. Der Fahrradhelm fügt eine zusätzliche Schicht hinzu!"
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Neuronen und Gehirn",
      questions: [
        { type: "mc", q: "Welcher Teil des Neurons empfängt die Signale?", options: ["Das Axon", "Die Dendriten", "Die Myelinscheide"], answer: 1, explain: "Die Dendriten empfangen, das Axon leitet weiter." },
        { type: "mc", q: "Welches Organ koordiniert das Gleichgewicht?", options: ["Das Kleinhirn", "Das Rückenmark", "Der Thalamus"], answer: 0, explain: "Das Kleinhirn koordiniert Bewegungen und Gleichgewicht." },
        { type: "tf", q: "Die linke Hemisphäre steuert vor allem die linke Körperhälfte.", answer: false, explain: "Die Nervenbahnen kreuzen sich: Die linke Hemisphäre steuert die rechte Körperhälfte." },
        { type: "text", q: "Wie heißt der Spalt zwischen zwei Neuronen, in dem die Neurotransmitter übertreten?", answer: ["synapse", "die synapse", "synaptischer spalt", "der synaptische spalt"], explain: "Es ist die Synapse." }
      ]
    },
    {
      type: "text",
      title: "6. Das Rückenmark und die Reflexe",
      html: `<p>Das <b>Rückenmark</b> ist ein etwa <b>45 cm</b> langer Strang, der in der Wirbelsäule nach unten verläuft. Es dient als „Autobahn“ zwischen Gehirn und Körper, kann aber bei den <b>Reflexen</b> auch allein entscheiden.</p>
<p>Ein <b>Reflex</b> ist eine <b>automatische, blitzschnelle und unwillkürliche</b> Reaktion. Der Weg heißt <b>Reflexbogen</b>:</p>
<ol>
<li>ein <b>Rezeptor</b> (in der Haut) spürt die Hitze des Topfes;</li>
<li>ein <b>sensibles Neuron</b> bringt das Signal zum Rückenmark;</li>
<li>im Rückenmark gibt ein <b>Interneuron</b> es sofort weiter an …</li>
<li>… ein <b>motorisches Neuron</b>, das zum <b>Muskel</b> des Arms führt;</li>
<li>der Muskel zieht sich zusammen: Du <b>ziehst die Hand weg</b>. Erst <b>danach</b> erhält das Gehirn die Information und du spürst den Schmerz!</li>
</ol>
<p>Der Arzt prüft den <b>Kniesehnenreflex</b>, indem er mit einem kleinen Hammer unter das Knie klopft: Das Bein schnellt von allein vor. Auch Blinzeln, Niesen und Husten sind Reflexe.</p>`
    },
    {
      type: "svg",
      title: "Der Reflexbogen",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f0fdf4"/>
<ellipse cx="480" cy="150" rx="70" ry="80" fill="#e5e7eb" stroke="#475569" stroke-width="3"/>
<path d="M455 120 C 440 150, 440 170, 460 190 L 500 190 C 520 170, 520 150, 505 120 Z" fill="#9ca3af"/>
<text x="480" y="255" font-size="15" text-anchor="middle" fill="#1e293b" font-weight="bold">Rückenmark</text>
<rect x="40" y="60" width="80" height="50" rx="10" fill="#ef4444"/>
<text x="80" y="92" font-size="15" fill="#fff" text-anchor="middle">🔥 Hitze</text>
<circle cx="140" cy="85" r="10" fill="#f59e0b"/>
<text x="140" y="45" font-size="14" fill="#92400e" text-anchor="middle">1 Rezeptor</text>
<path d="M150 85 C 260 60, 380 70, 470 135" stroke="#2563eb" stroke-width="6" fill="none"/>
<text x="290" y="58" font-size="14" fill="#1d4ed8" text-anchor="middle">2 sensibles Neuron →</text>
<circle cx="480" cy="155" r="9" fill="#a855f7"/>
<text x="560" y="160" font-size="14" fill="#6b21a8">3 Interneuron</text>
<path d="M470 165 C 380 230, 260 240, 160 215" stroke="#dc2626" stroke-width="6" fill="none"/>
<text x="300" y="262" font-size="14" fill="#b91c1c" text-anchor="middle">← 4 motorisches Neuron</text>
<ellipse cx="120" cy="210" rx="45" ry="25" fill="#fb7185" stroke="#9f1239" stroke-width="3"/>
<text x="120" y="215" font-size="14" fill="#fff" text-anchor="middle">Muskel</text>
<text x="120" y="262" font-size="14" fill="#9f1239" text-anchor="middle">5 Du ziehst die Hand weg!</text>
</svg>`,
      caption: "Der Weg des Reflexes führt nicht über das Gehirn: Deshalb ist er so schnell."
    },
    {
      type: "widget",
      title: "Willkürlich oder unwillkürlich?",
      widget: "classify",
      options: {
        groups: ["🙋 Willkürlich (du entscheidest es)", "⚡ Unwillkürlich / Reflex"],
        items: [
          ["Die Hand heben, um zu sprechen", 0],
          ["Der Herzschlag", 1],
          ["Einen Ball kicken", 0],
          ["Blinzeln, wenn eine Mücke kommt", 1],
          ["Einen Satz schreiben", 0],
          ["Die Pupille, die sich bei starkem Licht verengt", 1],
          ["Das Niesen", 1],
          ["Ein Brötchen kauen", 0],
          ["Die Verdauung im Magen", 1]
        ]
      },
      caption: "Willkürliche Bewegungen gehen von der Großhirnrinde aus; unwillkürliche vom Rückenmark, vom Hirnstamm oder vom vegetativen System."
    },
    {
      type: "text",
      title: "7. Die Sinnesorgane",
      html: `<p>Die Sinnesorgane enthalten <b>Rezeptoren</b>, die einen Reiz (Licht, Schall, Druck, chemische Stoffe) in Nervenimpulse verwandeln. Das Gehirn deutet sie dann: In Wirklichkeit <b>sehen und hören wir mit dem Gehirn</b>.</p>
<table>
<tr><th>Sinn</th><th>Organ und Rezeptoren</th><th>Hirnbereich</th></tr>
<tr><td>👁️ Sehen</td><td>Auge: Das Licht tritt durch Hornhaut, Pupille und Linse und erzeugt ein <b>umgekehrtes</b> Bild auf der <b>Netzhaut</b>, wo sich die <b>Zapfen</b> (etwa 6 Millionen, sehen Farben) und die <b>Stäbchen</b> (etwa 120 Millionen, sehen bei wenig Licht) befinden. Der <b>Sehnerv</b> bringt das Signal zum Gehirn, das das Bild „aufrichtet“.</td><td>Hinterhauptslappen</td></tr>
<tr><td>👂 Hören und Gleichgewicht</td><td>Außenohr (Ohrmuschel) → Mittelohr (Trommelfell und drei Gehörknöchelchen: Hammer, Amboss, <b>Steigbügel</b>, der kleinste Knochen des Körpers, etwa 3 mm) → Innenohr: die <b>Schnecke</b> für das Hören und die <b>Bogengänge</b> für das Gleichgewicht.</td><td>Schläfenlappen; Kleinhirn</td></tr>
<tr><td>👃 Riechen</td><td>Rezeptoren im oberen Teil der Nase, empfindlich für Tausende von Gerüchen.</td><td>Schläfenlappen und limbisches System (Gefühle und Erinnerungen)</td></tr>
<tr><td>👅 Schmecken</td><td>Geschmacksknospen auf der Zunge: süß, salzig, sauer, bitter und <b>umami</b> (der „herzhafte“ Geschmack von Parmesan und Brühe).</td><td>Geschmacksrinde</td></tr>
<tr><td>✋ Tasten</td><td>Rezeptoren in der <b>Haut</b> für Druck, Vibration, Wärme, Kälte und Schmerz. Fingerspitzen und Lippen haben besonders viele.</td><td>Scheitellappen</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Ordne den Teil seiner Funktion zu",
      widget: "match",
      options: {
        pairs: [
          ["Netzhaut", "Enthält Zapfen und Stäbchen"],
          ["Schnecke", "Verwandelt Schall in Impulse"],
          ["Bogengänge", "Gleichgewichtssinn"],
          ["Hinterhauptslappen", "Verarbeitet das Sehen"],
          ["Hirnstamm", "Steuert Atmung und Herzschlag"],
          ["Hypothalamus", "Regelt Hunger, Durst und Temperatur"]
        ]
      },
      caption: "Tippe links auf ein Element und dann rechts auf das passende."
    },
    {
      type: "example",
      title: "Praxisbeispiel: Miss deine Reaktionszeit mit einem Lineal",
      html: `<p>Du brauchst einen Mitschüler und ein 30-cm-Lineal.</p>
<ol>
<li>Der Mitschüler hält das Lineal senkrecht, mit der 0 unten, zwischen deinem geöffneten Daumen und Zeigefinger (ohne es zu berühren).</li>
<li>Ohne Vorwarnung lässt er es fallen: Du fängst es so schnell wie möglich.</li>
<li>Lies ab, bei wie vielen Zentimetern du es gegriffen hast.</li>
</ol>
<p>Das Lineal fällt wie jeder Gegenstand, also lässt sich aus der Strecke die Zeit berechnen: <b>t = √(2 × d : 9,8)</b> (mit d in Metern).<br>
Wenn du es bei <b>20 cm</b> gegriffen hast: t = √(2 × 0,20 : 9,8) ≈ <b>0,2 Sekunden</b>. Bei 15 cm ≈ 0,17 s; bei 10 cm ≈ 0,14 s.</p>
<p>In dieser Zeit sieht das Auge, das Signal geht zum Gehirn, das Gehirn entscheidet und sendet den Befehl an die Muskeln der Hand. Versucht es noch einmal, nachdem ihr laut vorgelesen habt oder mit einer Ablenkung: Die Zeit wird schlechter. Das ist der Grund, warum man <b>beim Autofahren nicht das Handy benutzt</b>: Bei 50 km/h legt man in 1 Sekunde Ablenkung etwa 14 Meter zurück.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Finde deinen blinden Fleck",
      html: `<p>Zeichne auf ein Blatt ein <b>X</b> links und einen <b>Punkt</b> 8 cm weiter rechts. Schließe das linke Auge und fixiere das X mit dem rechten Auge. Bewege das Blatt langsam näher und weiter weg: Bei etwa 25–30 cm <b>verschwindet</b> der Punkt!</p>
<p>An dieser Stelle fällt das Bild dorthin, wo der <b>Sehnerv</b> die Netzhaut verlässt: Dort gibt es weder Zapfen noch Stäbchen. Normalerweise bemerken wir das nicht, weil das Gehirn das „Loch“ mit dem füllt, was darum herum ist, und weil sich die beiden Augen gegenseitig ergänzen.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Ein italienischer Nobelpreis für die Neuronen",
      html: `<p>Im Jahr 1873 erfand der italienische Arzt <b>Camillo Golgi</b> in Pavia eine Färbung mit Silbersalzen (die „schwarze Reaktion“), die zum ersten Mal ganze Neuronen unter dem Mikroskop zeigte. Der Spanier <b>Santiago Ramón y Cajal</b> nutzte sie, um zu beweisen, dass das Nervensystem aus getrennten Zellen besteht. Im Jahr <b>1906</b> bekamen sie gemeinsam den Nobelpreis, obwohl sie sich nicht einig waren, wie die Neuronen funktionieren! 1986 gewann eine weitere Italienerin, <b>Rita Levi-Montalcini</b>, den Nobelpreis für die Entdeckung des Nervenwachstumsfaktors (NGF).</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Das Gehirn schaltet nie ab",
      html: `<p>Im <b>Schlaf</b> arbeitet das Gehirn sehr viel: Es ordnet die Erinnerungen des Tages, festigt, was du gelernt hast, und „räumt“ Abfallstoffe „auf“. Deshalb hilft es in deinem Alter wirklich, 9–10 Stunden pro Nacht zu schlafen, um besser zu lernen. Und das Gehirn spürt keinen Schmerz: Es hat keine Schmerzrezeptoren, sodass manche Operationen am wachen Patienten durchgeführt werden!</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, das Nervensystem zu verstehen",
      intro: "Wenn dir die Namen der Teile nicht im Kopf bleiben, probiere, das Nervensystem anders zu betrachten.",
      tabs: [
        {
          label: "🏢 Die Nachrichtenfirma",
          html: `<p>Stell dir den Körper als große <b>Firma</b> vor:</p>
<ul>
<li>die <b>Rezeptoren</b> sind die Sensoren und Kameras am Eingang;</li>
<li>die <b>sensiblen Nerven</b> sind die Leitungen, die die Nachrichten ins Zentralbüro bringen;</li>
<li>das <b>Gehirn</b> ist die Geschäftsleitung, wo entschieden wird; die <b>Stirnrinde</b> ist der Direktor, das <b>Kleinhirn</b> der Koordinator der Arbeiten, der <b>Hirnstamm</b> der Hausmeister, der auch nachts die Heizung am Laufen hält;</li>
<li>das <b>Rückenmark</b> ist die Vermittlungszentrale, die im Notfall (Reflex) handelt, ohne den Direktor zu fragen;</li>
<li>die <b>motorischen Nerven</b> bringen die Befehle zu den Arbeitern: den <b>Muskeln</b>.</li>
</ul>`
        },
        {
          label: "🔌 Wie eine Elektroinstallation",
          html: `<p>Ein Neuron ähnelt einem <b>Stromkabel</b>: Das Axon ist der Kupferdraht, das <b>Myelin</b> die isolierende Kunststoffhülle. Aber es gibt einen wichtigen Unterschied: Im Neuron laufen nicht Elektronen wie im Kupfer, sondern <b>Ionen</b> (Natrium und Kalium), die durch die Membran hinein- und hinausgehen, ein „Ruck“ nach dem anderen, wie eine Reihe fallender Dominosteine. In der Faser mit Myelin „springt“ das Signal von einer Unterbrechung der Hülle zur nächsten: Deshalb ist es schneller.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fefce8"/>
<text x="20" y="35" font-size="16" fill="#0f172a" font-weight="bold">Stromkabel</text>
<rect x="20" y="50" width="560" height="34" rx="17" fill="#3b82f6"/>
<rect x="20" y="61" width="560" height="12" fill="#d97706"/>
<text x="300" y="104" font-size="14" fill="#1e3a8a" text-anchor="middle">Kunststoffhülle + Kupfer: Es laufen Elektronen</text>
<text x="20" y="140" font-size="16" fill="#0f172a" font-weight="bold">Axon mit Myelin</text>
<line x1="20" y1="172" x2="580" y2="172" stroke="#7c3aed" stroke-width="10"/>
<rect x="40" y="156" width="110" height="32" rx="16" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<rect x="170" y="156" width="110" height="32" rx="16" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<rect x="300" y="156" width="110" height="32" rx="16" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<rect x="430" y="156" width="110" height="32" rx="16" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<path d="M160 150 Q 225 115 290 150 Q 355 115 420 150 Q 485 115 550 150" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="300" y="212" font-size="14" fill="#7f1d1d" text-anchor="middle">das Signal „springt“ zwischen den freien Abschnitten: schneller</text>
</svg>`
        },
        {
          label: "👁️ Das Auge in 3D",
          html: `<p>Das Auge ist eine Kugel von etwa <b>2,4 cm</b>. Dreh das Modell: Von außen findest du die <b>Lederhaut</b> (das „Weiße“ im Auge), die gefäßreiche <b>Aderhaut</b>, die <b>Netzhaut</b> mit den Rezeptoren und im Inneren den <b>Glaskörper</b>, eine durchsichtige Gallerte. Vorn funktionieren Hornhaut und Linse wie die Linsen einer Kamera.</p>`,
          scene: "layers",
          options: {
            layers: [
              { r: 1, color: "#f8fafc", label: "Lederhaut" },
              { r: 0.94, color: "#b91c1c", label: "Aderhaut" },
              { r: 0.89, color: "#f59e0b", label: "Netzhaut (Zapfen und Stäbchen)" },
              { r: 0.85, color: "#bae6fd", label: "Glaskörper" }
            ]
          }
        },
        {
          label: "🃏 Wiederholungskarten",
          html: `<p>Dreh die Karten um: vorn der Teil, hinten, was er tut. Das Wiederholen mit Karten nutzt genau die Plastizität des Gehirns: Jedes Mal, wenn du dich erinnerst, wird die Synapse verstärkt.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🧠 Stirnrinde", back: "Entscheidungen, willkürliche Bewegungen, gesprochene Sprache" },
              { front: "⚖️ Kleinhirn", back: "Gleichgewicht und Koordination der Bewegungen" },
              { front: "❤️ Hirnstamm", back: "Atmung, Herzschlag, Schlucken" },
              { front: "🦴 Rückenmark", back: "Verbindet Gehirn und Körper; steuert die Reflexe" },
              { front: "🏃 Sympathikus", back: "Kampf oder Flucht: beschleunigt das Herz" },
              { front: "😌 Parasympathikus", back: "Ruhe und Verdauung: verlangsamt das Herz" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte des Nervensystems: Tippe auf die Knoten und entdecke das Warum",
      nodes: [
        { id: "stimolo", label: "Reize und Rezeptoren", x: 12, y: 10, color: "#f59e0b", html: "Licht, Schall, Wärme, Druck, chemische Stoffe, die von den Rezeptoren wahrgenommen werden.", why: "Rezeptoren sind spezialisierte Zellen, die eine Energieform in ein elektrisches Signal verwandeln. Jeder Rezeptor antwortet nur auf eine Art von Reiz: Deshalb lässt ein Schlag aufs Auge „Sterne sehen“." },
        { id: "neurone", label: "Neuron", x: 50, y: 10, color: "#a855f7", html: "Die Zelle, die Nervensignale weiterleitet.", why: "Die <b>Neuronentheorie</b> von Ramón y Cajal (Ende des 19. Jahrhunderts), ermöglicht durch die Färbung von <b>Golgi</b> (1873), zeigte, dass das Nervensystem aus getrennten Zellen besteht. Nobelpreis 1906 für beide." },
        { id: "impulso", label: "Elektrischer Impuls", x: 85, y: 10, color: "#ef4444", html: "Eine elektrische Welle, die am Axon entlangläuft.", why: "<b>Luigi Galvani</b> sah 1791, wie sich Froschschenkel zusammenzogen, wenn Metalle sie berührten, und sprach von „tierischer Elektrizität“. 1952 erklärten Hodgkin und Huxley die Rolle der Natrium- und Kaliumionen (Nobelpreis 1963)." },
        { id: "sinapsi", label: "Synapse", x: 85, y: 40, color: "#db2777", html: "Der chemische Kontaktpunkt zwischen zwei Neuronen.", why: "Der Name wurde 1897 von Charles Sherrington vorgeschlagen. 1921 zeigte Otto Loewi mit einem Versuch an Froschherzen, dass Neuronen über chemische Stoffe (die Neurotransmitter) kommunizieren." },
        { id: "snc", label: "Zentrales Nervensystem", x: 50, y: 45, color: "#2563eb", html: "Gehirn und Rückenmark: Sie verarbeiten und entscheiden.", why: "Es entwickelte sich, indem sich die Neuronen in einem von Knochen geschützten „Kommandozentrum“ konzentrierten: Einfache Tiere wie Quallen haben nur ein verteiltes Netz von Neuronen, die Wirbeltiere ein immer komplexeres Gehirn." },
        { id: "snp", label: "Peripheres Nervensystem", x: 15, y: 45, color: "#0ea5e9", html: "12 Hirnnervenpaare und 31 Spinalnervenpaare.", why: "Nerven sind Bündel von Axonen: Sie müssen jeden Muskel und jeden Zentimeter Haut erreichen, deshalb verzweigen sie sich im ganzen Körper." },
        { id: "riflessi", label: "Reflexe", x: 15, y: 80, color: "#14b8a6", html: "Automatische Reaktionen, die vom Rückenmark gesteuert werden.", why: "Sie sind ein Überlebensvorteil: Wenn man das Gehirn überspringt, gewinnt man kostbare Millisekunden, um sich vor einer Gefahr zu retten." },
        { id: "corteccia", label: "Rinde und Lappen", x: 50, y: 80, color: "#16a34a", html: "Denken, Sprache, Gedächtnis, Sinne.", why: "Im Jahr 1861 untersuchte <b>Paul Broca</b> einen Patienten, der verstand, aber nicht sprechen konnte, und fand eine Schädigung im linken Stirnlappen: Es war der erste Beweis, dass Funktionen einen „Ort“ im Gehirn haben." },
        { id: "autonomo", label: "Vegetatives System", x: 85, y: 80, color: "#64748b", html: "Sympathikus und Parasympathikus regeln die inneren Organe.", why: "Die lebenswichtigen Funktionen (Herzschlag, Verdauung) müssen immer funktionieren, auch wenn wir schlafen oder an etwas anderes denken: Deshalb sind sie einem System anvertraut, das nicht vom Willen abhängt." }
      ],
      edges: [
        ["stimolo", "neurone", "aktivieren das"],
        ["neurone", "impulso", "erzeugt den"],
        ["impulso", "sinapsi", "gelangt zur"],
        ["neurone", "snc", "bildet das"],
        ["neurone", "snp", "bildet das"],
        ["snp", "snc", "bringt Informationen zum"],
        ["snp", "riflessi", "bildet mit dem Rückenmark die"],
        ["snc", "corteccia", "umfasst die"],
        ["snc", "autonomo", "steuert das"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Reflexe und Sinne",
      questions: [
        { type: "order", q: "Bringe den Reflexbogen in die richtige Reihenfolge.", items: ["Rezeptor", "Sensibles Neuron", "Rückenmark (Interneuron)", "Motorisches Neuron", "Muskel"], explain: "Das Signal geht vom Rezeptor zum Rückenmark und kehrt zum Muskel zurück." },
        { type: "mc", q: "Welche Zellen der Netzhaut sehen Farben?", options: ["Die Stäbchen", "Die Zapfen", "Die Gliazellen"], answer: 1, explain: "Die Zapfen sehen Farben; die Stäbchen funktionieren bei wenig Licht." },
        { type: "tf", q: "Der Parasympathikus beschleunigt bei Gefahr den Herzschlag.", answer: false, explain: "Ihn beschleunigt der Sympathikus; der Parasympathikus verlangsamt ihn." }
      ]
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li>Das <b>Neuron</b> empfängt mit den Dendriten und leitet mit dem Axon weiter; es kommuniziert an den <b>Synapsen</b> über Neurotransmitter.</li>
<li><b>ZNS</b> = Gehirn + Rückenmark; <b>PNS</b> = Nerven (12 Hirnnervenpaare, 31 Spinalnervenpaare).</li>
<li>Gehirn: <b>Großhirn</b> (4 Lappen, 2 Hemisphären), <b>Kleinhirn</b> (Gleichgewicht), <b>Hirnstamm</b> (lebenswichtige Funktionen).</li>
<li><b>Reflex</b>: automatische Reaktion, vom Rückenmark gesteuert.</li>
<li>Vegetatives System: <b>Sympathikus</b> (aktiviert) und <b>Parasympathikus</b> (beruhigt).</li>
<li>Schütze dein Gehirn: Schlaf, Helm, kein Alkohol und keine Drogen.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Neuron", d: "Nervenzelle, die Impulse empfängt und weiterleitet." },
    { t: "Axon", d: "Langer Fortsatz des Neurons, der den Impuls weiterleitet." },
    { t: "Dendriten", d: "Kurze Verzweigungen des Neurons, die die Signale empfangen." },
    { t: "Myelin", d: "Isolierende Hülle, die den Impuls schneller macht." },
    { t: "Synapse", d: "Kommunikationsstelle zwischen zwei Neuronen oder zwischen Neuron und Muskel." },
    { t: "Neurotransmitter", d: "Chemischer Stoff, der das Signal an der Synapse überträgt." },
    { t: "Gehirn (Enzephalon)", d: "Teil des ZNS im Schädel: Großhirn, Kleinhirn, Hirnstamm." },
    { t: "Reflex", d: "Automatische und unwillkürliche Reaktion auf einen Reiz." },
    { t: "Rezeptor", d: "Zelle oder Struktur, die einen Reiz aufnimmt." },
    { t: "Hirnhäute", d: "Drei Häute, die Gehirn und Rückenmark umhüllen." },
    { t: "Netzhaut", d: "Innere Schicht des Auges mit den Fotorezeptoren (Zapfen und Stäbchen)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Das zentrale Nervensystem besteht aus …", options: ["Hirn- und Spinalnerven", "Gehirn und Rückenmark", "Gehirn und Herz"], answer: 1, explain: "ZNS = Gehirn + Rückenmark." },
      { type: "mc", q: "Wozu dient die Myelinscheide?", options: ["Das Neuron zu ernähren", "Den Impuls schneller zu machen", "Hormone herzustellen"], answer: 1, explain: "Sie isoliert das Axon und lässt das Signal „springen“." },
      { type: "text", q: "Wie heißen die chemischen Stoffe, die an der Synapse freigesetzt werden?", answer: ["neurotransmitter", "die neurotransmitter", "neurotransmitters", "botenstoffe", "neurotrasmettitori"], explain: "Die Neurotransmitter, wie Dopamin und Serotonin." },
      { type: "num", q: "Wie viele Spinalnervenpaare hat der menschliche Körper?", answer: 31, explain: "31 Paare, die zwischen den Wirbeln aus dem Rückenmark austreten." },
      { type: "mc", q: "Welcher Lappen verarbeitet die Bilder, die die Augen sehen?", options: ["Stirnlappen", "Schläfenlappen", "Hinterhauptslappen", "Scheitellappen"], answer: 2, explain: "Der Hinterhauptslappen, im hinteren Teil." },
      { type: "tf", q: "Beim Reflex läuft das Signal zuerst durch das Gehirn und dann durch das Rückenmark.", answer: false, explain: "Der Reflex wird vom Rückenmark gesteuert; das Gehirn wird erst danach informiert." },
      { type: "mc", q: "Welcher Teil des Gehirns steuert Atmung und Herzschlag?", options: ["Der Hirnstamm", "Der Balken", "Der Scheitellappen"], answer: 0, explain: "Der Hirnstamm steuert die lebenswichtigen Funktionen." },
      { type: "mc", q: "Wo liegt die Schnecke?", options: ["Im Auge", "Im Innenohr", "In der Nase"], answer: 1, explain: "Die schneckenförmige Cochlea liegt im Innenohr." },
      { type: "tf", q: "Der Sympathikus bereitet den Körper auf Handeln vor („Kampf oder Flucht“).", answer: true, explain: "Er beschleunigt Herz und Atmung und weitet die Pupillen." },
      { type: "order", q: "Bringe den Weg des Signals im Neuron in die richtige Reihenfolge.", items: ["Dendriten", "Zellkörper", "Axon", "Synaptische Endknöpfchen"], explain: "Man tritt über die Dendriten ein und verlässt das Neuron über die Endknöpfchen." },
      { type: "text", q: "Welcher italienische Wissenschaftler erfand die „schwarze Reaktion“ zum Färben der Neuronen?", answer: ["golgi", "camillo golgi"], explain: "Camillo Golgi, Nobelpreis 1906." },
      { type: "num", q: "Ein Lineal wird in etwa 0,2 s gefangen. Wenn ein Fahrrad 5 m/s fährt, wie viele Meter legt es in dieser Zeit zurück?", answer: 1, tol: 0.01, unit: "m", explain: "5 m/s × 0,2 s = 1 m." }
    ]
  }
});
