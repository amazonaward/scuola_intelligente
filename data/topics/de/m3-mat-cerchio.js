TOPIC('de', {
  id: "m3-mat-cerchio",
  title: "Kreislinie und Kreis",
  intro: "Räder, Pizzen, Uhren, Münzen, die Laufbahn im Stadion: Der Kreis ist überall. Wir lernen seine Teile kennen, entdecken die geheimnisvolle Zahl <b>π</b> (Pi) und berechnen den <b>Umfang</b>, den <b>Flächeninhalt des Kreises</b>, von <b>Kreisbögen</b>, <b>Kreissektoren</b> und <b>Kreisringen</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Kreislinie und Kreis: Das ist nicht dasselbe",
      html: `<p>Die <b>Kreislinie</b> (circonferenza) ist die geschlossene <b>Linie</b> aus allen Punkten der Ebene, die vom <b>Mittelpunkt</b>, einem festen Punkt, den <b>gleichen Abstand</b> haben. Der <b>Kreis</b> (cerchio) ist der <b>Teil der Ebene</b>, den die Kreislinie umschließt (die Kreislinie eingeschlossen).</p>
<p>Denk an einen Ring 💍 (Kreislinie: hat nur eine Länge) und an eine Münze 🪙 (Kreis: hat einen Flächeninhalt).</p>
<ul>
<li><b>Radius</b> (r): Strecke vom Mittelpunkt zu einem Punkt der Kreislinie.</li>
<li><b>Durchmesser</b> (d): Strecke, die durch den Mittelpunkt geht und zwei Punkte der Kreislinie verbindet: <b>d = 2r</b>. Er ist die längste Sehne.</li>
<li><b>Sehne</b>: Strecke, die zwei beliebige Punkte der Kreislinie verbindet.</li>
<li><b>Kreisbogen</b>: Teil der Kreislinie zwischen zwei Punkten.</li>
<li><b>Mittelpunktswinkel</b>: Winkel mit dem Scheitel im Mittelpunkt.</li>
<li><b>Kreissektor</b>: Teil des Kreises zwischen zwei Radien (ein „Pizzastück“).</li>
<li><b>Kreissegment</b>: Teil des Kreises zwischen einer Sehne und einem Bogen.</li>
<li><b>Kreisring</b>: Teil der Ebene zwischen zwei Kreislinien mit demselben Mittelpunkt (<b>konzentrisch</b>), wie eine CD oder ein Donut.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Die Teile des Kreises",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#fffbeb"/>
<circle cx="200" cy="160" r="130" fill="#fde68a" stroke="#b45309" stroke-width="4"/>
<path d="M200 160 L330 160 A130 130 0 0 0 292 68 Z" fill="#f97316" opacity="0.85"/>
<path d="M95 236 A130 130 0 0 0 200 290 L95 236 Z" fill="#60a5fa" opacity="0.9"/>
<line x1="95" y1="236" x2="200" y2="290" stroke="#1d4ed8" stroke-width="3"/>
<line x1="70" y1="160" x2="200" y2="160" stroke="#16a34a" stroke-width="4"/>
<line x1="108" y1="68" x2="292" y2="252" stroke="#7c3aed" stroke-width="4" stroke-dasharray="10 5"/>
<circle cx="200" cy="160" r="6" fill="#1f2937"/>
<text x="185" y="185" font-size="16" fill="#1f2937" font-weight="bold">O</text>
<text x="400" y="50" font-size="17" fill="#b45309" font-weight="bold">— Kreislinie (die Linie)</text>
<text x="400" y="85" font-size="17" fill="#92400e" font-weight="bold">▇ Kreis (die Fläche)</text>
<text x="400" y="120" font-size="17" fill="#16a34a" font-weight="bold">— Radius r</text>
<text x="400" y="155" font-size="17" fill="#7c3aed" font-weight="bold">- - Durchmesser d = 2r</text>
<text x="400" y="190" font-size="17" fill="#ea580c" font-weight="bold">▇ Kreissektor</text>
<text x="400" y="225" font-size="17" fill="#1d4ed8" font-weight="bold">— Sehne, ▇ Kreissegment</text>
<text x="400" y="260" font-size="17" fill="#c2410c">∠ Mittelpunktswinkel</text>
</svg>`,
      caption: "Der orangefarbene Sektor wird von zwei Radien und einem Bogen begrenzt; das blaue Segment von einer Sehne und einem Bogen."
    },
    {
      type: "text",
      title: "Geraden und Kreislinie, Umfangswinkel",
      html: `<p>Eine Gerade kann zu einer Kreislinie so liegen (d = Abstand der Geraden vom Mittelpunkt):</p>
<ul>
<li><b>Passante</b> (außerhalb): kein gemeinsamer Punkt (d &gt; r);</li>
<li><b>Tangente</b>: genau ein gemeinsamer Punkt (d = r); die Tangente steht im Berührpunkt <b>senkrecht auf dem Radius</b>;</li>
<li><b>Sekante</b>: zwei gemeinsame Punkte (d &lt; r).</li>
</ul>
<p>Ein <b>Umfangswinkel</b> hat seinen Scheitel auf der Kreislinie, und seine Schenkel schneiden sie. Wichtige Eigenschaft: <b>Ein Umfangswinkel ist halb so groß wie der Mittelpunktswinkel</b> über demselben Bogen. Folge: Jeder Umfangswinkel über einem <b>Halbkreis</b> ist ein <b>rechter</b> Winkel (90°): Jedes einbeschriebene Dreieck mit einer Seite auf dem Durchmesser ist rechtwinklig (Satz des <b>Thales</b>).</p>`
    },
    {
      type: "text",
      title: "Die Zahl π und der Umfang des Kreises",
      html: `<p>Nimm irgendeinen runden Gegenstand, miss mit einer Schnur den Umfang U und den Durchmesser d und berechne U : d. Mit einer Dose, einem Teller oder einem Rad erhältst du immer etwa <b>3,14</b>! Diese Zahl heißt <b>π</b> (Pi):</p>
<p style="text-align:center;font-size:1.2em"><b>π = U : d ≈ 3,14159265…</b></p>
<p>π ist eine <b>irrationale</b> Zahl: Sie hat unendlich viele Dezimalstellen, die sich nie regelmäßig wiederholen. Beim Rechnen benutzt man meist <b>3,14</b>.</p>
<p>Formeln:</p>
<ul>
<li><b>U = π · d = 2 · π · r</b></li>
<li>Umgestellte Formeln: <b>d = U : π</b>, <b>r = U : (2π)</b></li>
<li><b>Länge eines Kreisbogens</b> mit dem Mittelpunktswinkel α: <b>l = U · α / 360°</b>. Der Bogen ist proportional zu seinem Winkel: halber Winkel, halber Bogen.</li>
</ul>
<p>Beispiel: r = 5 cm → U = 2 · 3,14 · 5 = <b>31,4 cm</b>. Ein Bogen von 72° ist 72/360 = 1/5 → 31,4 : 5 = <b>6,28 cm</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Teile und Kreislinie",
      questions: [
        { type: "mc", q: "Die längste Sehne einer Kreislinie ist …", options: ["der Radius", "der Durchmesser", "der Bogen"], answer: 1, explain: "Der Durchmesser geht durch den Mittelpunkt und ist die größte Sehne." },
        { type: "num", q: "Umfang des Kreises mit dem Radius 10 cm (π = 3,14)?", answer: 62.8, tol: 0.01, unit: "cm", explain: "2 · 3,14 · 10 = 62,8 cm." },
        { type: "tf", q: "Eine Tangente hat zwei Punkte mit der Kreislinie gemeinsam.", answer: false, explain: "Die Tangente hat nur einen gemeinsamen Punkt; die Sekante hat zwei." }
      ]
    },
    {
      type: "text",
      title: "Der Flächeninhalt von Kreis, Sektor und Kreisring",
      html: `<ul>
<li><b>Flächeninhalt des Kreises</b>: <b>A = π · r²</b>. Umgestellte Formel: <b>r = √(A : π)</b>.</li>
<li><b>Flächeninhalt des Kreissektors</b> mit dem Winkel α: <b>A<sub>s</sub> = π r² · α / 360°</b>. Ein Viertelkreis (90°) hat den Flächeninhalt πr²/4.</li>
<li>Alternative Formel für den Sektor: <b>A<sub>s</sub> = l · r / 2</b> (wie ein „Dreieck“ mit dem Bogen als Grundseite und dem Radius als Höhe).</li>
<li><b>Flächeninhalt des Kreisrings</b>: <b>A = π (R² − r²)</b>, wobei R der äußere und r der innere Radius ist.</li>
</ul>
<p>⚠️ Achtung: Wenn sich der Radius <b>verdoppelt</b>, verdoppelt sich der Umfang, aber der Flächeninhalt wird <b>4-mal</b> so groß (weil r quadriert wird)!</p>
<p>Beispiel: r = 6 cm → A = 3,14 · 36 = <b>113,04 cm²</b>. Sektor von 60° → 113,04 · 60/360 = 113,04 : 6 = <b>18,84 cm²</b>.</p>`
    },
    {
      type: "widget",
      title: "Sektoren als Bruchteile des Kreises",
      widget: "fractionPie",
      options: { n: 1, d: 6 },
      caption: "Ein Sektor ist ein Bruchteil des Kreises: 1/6 des Kreises entspricht einem Winkel von 360° : 6 = 60°. Verändere die Regler und berechne den Winkel jedes Sektors."
    },
    {
      type: "example",
      title: "Praxisbeispiel: das Fahrradrad",
      html: `<p>Ein Fahrradrad hat einen Durchmesser von <b>66 cm</b> (26-Zoll-Rad).</p>
<ul>
<li>Bei einer Umdrehung legt es U = 3,14 · 66 = <b>207,24 cm ≈ 2,07 m</b> zurück.</li>
<li>Wie viele Umdrehungen macht es für <b>1 km</b> (100 000 cm)? 100 000 : 207,24 ≈ <b>483 Umdrehungen</b>.</li>
<li>Genau so funktioniert der <b>Fahrradtacho</b>: Ein Magnet am Rad zählt die Umdrehungen und multipliziert sie mit dem Umfang!</li>
</ul>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: eine große Pizza oder zwei mittlere?",
      html: `<p>In der Pizzeria: Eine <b>große</b> Pizza hat den Durchmesser <b>40 cm</b>, eine <b>mittlere</b> den Durchmesser <b>28 cm</b>. Lohnt sich eine große oder zwei mittlere?</p>
<ul>
<li>Große: r = 20 → A = 3,14 · 400 = <b>1256 cm²</b>.</li>
<li>Zwei mittlere: r = 14 → A = 3,14 · 196 = 615,44 → × 2 = <b>1230,88 cm²</b>.</li>
</ul>
<p>Überraschung: <b>Eine einzige große Pizza</b> hat mehr Pizza als zwei mittlere! Weil der Flächeninhalt mit dem <b>Quadrat</b> des Radius wächst.</p>
<p><b>Bonus – der Kreisring</b>: Der 2 cm breite Rand der großen Pizza ist ein Kreisring mit R = 20 und r = 18: A = 3,14 · (400 − 324) = 3,14 · 76 ≈ <b>238,6 cm²</b>, fast ein Fünftel der Pizza!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Die Jagd nach π",
      html: `<ul>
<li>Im <b>Papyrus Rhind</b> (Ägypten, um 1650 v. Chr.) wurde der Flächeninhalt des Kreises so berechnet, als wäre π etwa <b>3,16</b>.</li>
<li><b>Archimedes</b> von Syrakus (3. Jahrhundert v. Chr.) zeichnete dem Kreis Vielecke mit bis zu <b>96 Seiten</b> ein und um und bewies, dass π zwischen <b>3 + 10/71</b> und <b>3 + 1/7</b> liegt (also zwischen 3,1408 und 3,1429).</li>
<li>In China fand <b>Zu Chongzhi</b> (5. Jahrhundert) den Bruch <b>355/113</b>, genau bis zur sechsten Dezimalstelle.</li>
<li>Das Symbol π wurde 1706 von William Jones verwendet und von Euler berühmt gemacht; es kommt vom Anfangsbuchstaben des griechischen Wortes <i>perímetros</i> („Umfang“).</li>
<li>Heute haben Computer über <b>100 000 Milliarden</b> Stellen von π berechnet. Am <b>14. März</b> (3/14 nach amerikanischer Schreibweise) feiert man den <b>Pi-Tag</b>, den die UNESCO seit 2019 zum Internationalen Tag der Mathematik erklärt hat.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Warum Räder und Kanaldeckel rund sind",
      html: `<p>Ein rundes Rad hält die Achse <b>immer auf derselben Höhe</b>, weil alle Punkte der Kreislinie denselben Abstand vom Mittelpunkt haben: Darum ist die Fahrt ruhig. Und <b>Kanaldeckel</b> sind oft rund, weil ein kreisförmiger Deckel <b>nicht ins Loch fallen kann</b>: Seine Breite ist in jeder Richtung gleich. Ein quadratischer Deckel dagegen kann, schräg gehalten, entlang der Diagonale hineinrutschen!</p>`
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<table>
<tr><th>Größe</th><th>Formel</th></tr>
<tr><td>Durchmesser</td><td>d = 2r</td></tr>
<tr><td>Umfang</td><td>U = 2πr = πd</td></tr>
<tr><td>Bogen</td><td>l = U · α / 360°</td></tr>
<tr><td>Flächeninhalt des Kreises</td><td>A = πr²</td></tr>
<tr><td>Flächeninhalt des Sektors</td><td>A<sub>s</sub> = πr² · α / 360° = l · r / 2</td></tr>
<tr><td>Kreisring</td><td>A = π(R² − r²)</td></tr>
</table>
<p>π ≈ 3,14. Umfangswinkel = Hälfte des zugehörigen Mittelpunktswinkels.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, π und den Flächeninhalt des Kreises zu verstehen",
      intro: "Warum gerade πr²? Hier sind vier Arten, die Formeln zu „sehen“, statt sie auswendig zu lernen.",
      tabs: [
        {
          label: "🍕 Die Pizza in Stücken",
          html: `<p>Schneide den Kreis in viele dünne Stücke und lege sie <b>abwechselnd umgedreht</b> nebeneinander. Du erhältst eine Figur, die einem <b>Rechteck</b> immer ähnlicher wird:</p>
<ul>
<li>die <b>Grundseite</b> ist die Hälfte des Umfangs: <b>πr</b>;</li>
<li>die <b>Höhe</b> ist der Radius: <b>r</b>.</li>
</ul>
<p>Flächeninhalt = Grundseite × Höhe = πr × r = <b>πr²</b>! Je mehr Stücke du machst, desto mehr wird die Figur zu einem perfekten Rechteck. Diese Idee findet sich in den Schriften von Leonardo da Vinci und Kepler.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fff7ed"/>
<g stroke="#92400e" stroke-width="2">
<path d="M40 180 L65 80 L90 180 Z" fill="#fbbf24"/><path d="M65 80 L90 180 L115 80 Z" fill="#f97316"/>
<path d="M90 180 L115 80 L140 180 Z" fill="#fbbf24"/><path d="M115 80 L140 180 L165 80 Z" fill="#f97316"/>
<path d="M140 180 L165 80 L190 180 Z" fill="#fbbf24"/><path d="M165 80 L190 180 L215 80 Z" fill="#f97316"/>
<path d="M190 180 L215 80 L240 180 Z" fill="#fbbf24"/><path d="M215 80 L240 180 L265 80 Z" fill="#f97316"/>
<path d="M240 180 L265 80 L290 180 Z" fill="#fbbf24"/><path d="M265 80 L290 180 L315 80 Z" fill="#f97316"/>
<path d="M290 180 L315 80 L340 180 Z" fill="#fbbf24"/><path d="M315 80 L340 180 L365 80 Z" fill="#f97316"/>
</g>
<line x1="40" y1="205" x2="365" y2="205" stroke="#1d4ed8" stroke-width="3"/>
<text x="200" y="232" font-size="20" text-anchor="middle" fill="#1d4ed8" font-weight="bold">Grundseite ≈ halber Umfang = πr</text>
<line x1="385" y1="80" x2="385" y2="180" stroke="#16a34a" stroke-width="3"/>
<text x="400" y="135" font-size="20" fill="#16a34a" font-weight="bold">Höhe = r</text>
<text x="300" y="45" font-size="22" text-anchor="middle" fill="#1f2937" font-weight="bold">A = πr · r = πr²</text>
</svg>`
        },
        {
          label: "🏛️ Die Methode des Archimedes",
          html: `<p>Archimedes wusste nicht, wie man eine Kurve „misst“, also sperrte er sie zwischen zwei <b>Vielecke</b> ein: eines <b>innen</b> (einbeschrieben) und eines <b>außen</b> (umbeschrieben). Die Kreislinie ist länger als der Umfang des inneren Vielecks und kürzer als der des äußeren.</p>
<ul>
<li>Beim einbeschriebenen <b>Sechseck</b> (Seiten = r) ist der Umfang 6r = 3d → π &gt; 3.</li>
<li>Wenn man die Seitenzahl verdoppelt (12, 24, 48, <b>96</b>), nähern sich die Vielecke dem Kreis immer mehr an.</li>
</ul>
<p>Mit 96 Seiten erhielt er 3,1408 &lt; π &lt; 3,1429. Ohne Taschenrechner, vor mehr als 2200 Jahren!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0f9ff"/>
<circle cx="150" cy="130" r="100" fill="none" stroke="#1d4ed8" stroke-width="4"/>
<polygon points="250,130 200,217 100,217 50,130 100,43 200,43" fill="#86efac" fill-opacity="0.5" stroke="#16a34a" stroke-width="3"/>
<polygon points="265,130 208,230 92,230 35,130 92,30 208,30" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="330" y="80" font-size="18" fill="#16a34a" font-weight="bold">einbeschr. Sechseck: Umfang 6r</text>
<text x="330" y="120" font-size="18" fill="#1d4ed8" font-weight="bold">Kreisumfang 2πr</text>
<text x="330" y="160" font-size="18" fill="#dc2626" font-weight="bold">umbeschr. Sechseck: ≈ 6,93r</text>
<text x="330" y="210" font-size="20" fill="#1f2937" font-weight="bold">→ 3 &lt; π &lt; 3,47</text>
</svg>`
        },
        {
          label: "🥫 Die rollende Dose (3D)",
          html: `<p>Nimm einen <b>Zylinder</b>, zum Beispiel eine Dose: Ihre Grundfläche ist ein Kreis. Lass sie sich einmal ganz auf einem Blatt <b>abrollen</b>: Die zurückgelegte Strecke ist ihr <b>Umfang</b>. Wenn du mit dem Lineal misst, siehst du, dass er etwa das <b>3,14-Fache</b> des Durchmessers beträgt.</p>
<p>Dreh das Modell: Die Mantelfläche des Zylinders ist, abgerollt, ein Rechteck mit der Grundseite genau <b>2πr</b>. Darum lautet die Formel für die Mantelfläche 2πr · h!</p>`,
          scene: "solid",
          options: { shape: "cylinder", r: 1, h: 1.6, color: "#f59e0b", labels: true, shapes: ["cylinder", "cone", "sphere"] }
        },
        {
          label: "🇯🇵 Kästchen zählen",
          html: `<p>In Japan und in vielen anderen Ländern beginnt man damit, den Flächeninhalt durch <b>Zählen der Kästchen</b> zu schätzen. Zeichne auf kariertem Papier einen Kreis mit dem Radius 10 Kästchen: Darin liegen etwa <b>314 Kästchen</b>, also 3,14 × 10².</p>
<p>Das Quadrat, das den Kreis umschließt, hat den Flächeninhalt (2r)² = 4r² = 400 Kästchen: Der Kreis nimmt davon etwa <b>¾</b> ein (genau π/4 ≈ 0,785). Probiere es mit dem Widget: Baue ein Quadrat 10 × 10 und stell dir darin einen Kreis mit dem Radius 5 vor: Er nimmt etwa 78 von 100 Kästchen ein.</p>`,
          widget: "areaGrid",
          options: { w: 10, h: 10, max: 12 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte von Kreislinie und Kreis",
      nodes: [
        { id: "def", label: "Kreislinie", x: 50, y: 6, color: "#b45309", html: "Der Ort aller Punkte mit gleichem Abstand von einem Mittelpunkt.", why: "Es ist der 15. definierte Begriff in Euklids <i>Elementen</i> (um 300 v. Chr.); das dritte Postulat besagt, dass man immer einen Kreis mit gegebenem Mittelpunkt und Radius ziehen kann: Das ist der Zirkel!" },
        { id: "cerchio", label: "Kreis", x: 20, y: 26, color: "#f59e0b", html: "Der Teil der Ebene, den die Kreislinie umschließt.", why: "Die Kreislinie ist eine „Grenze“ (eine Linie, sie hat eine Länge), der Kreis ist ein „Gebiet“ (er hat einen Flächeninhalt). Der Unterschied ist für die Formeln wichtig." },
        { id: "parti", label: "Radius, Durchmesser, Sehne, Bogen", x: 80, y: 26, color: "#16a34a", html: "Die Elemente der Kreislinie; d = 2r.", why: "Sie folgen aus der Definition: Alle Radien sind gleich lang, und der Durchmesser besteht aus zwei in einer Linie liegenden Radien." },
        { id: "pi", label: "π ≈ 3,14", x: 50, y: 42, color: "#7c3aed", html: "Konstantes Verhältnis von Umfang und Durchmesser.", why: "Es ist konstant, weil alle Kreise ähnlich sind (Vergrößerungen voneinander). Archimedes schätzte es mit Vielecken ab; 1761 bewies Johann Lambert, dass es irrational ist, und 1882 Ferdinand von Lindemann, dass es transzendent ist (daher die Unmöglichkeit der „Quadratur des Kreises“ mit Zirkel und Lineal)." },
        { id: "lunghezza", label: "U = 2πr", x: 25, y: 64, color: "#2563eb", html: "Länge der Kreislinie.", why: "Sie folgt direkt aus der Definition von π: Wenn U/d = π, dann U = πd = 2πr." },
        { id: "area", label: "A = πr²", x: 75, y: 64, color: "#dc2626", html: "Flächeninhalt des Kreises.", why: "Archimedes bewies sie in der <i>Kreismessung</i>: Der Kreis ist flächengleich zu einem Dreieck mit dem Umfang als Grundseite und dem Radius als Höhe, also 2πr · r / 2 = πr²." },
        { id: "arco", label: "Bögen", x: 10, y: 86, color: "#0ea5e9", html: "l = U · α/360°.", why: "Bögen und Mittelpunktswinkel sind direkt proportional. Die Einteilung des Vollkreises in 360° stammt von den Babyloniern, die das Sechzigersystem und ein Jahr von etwa 360 Tagen benutzten." },
        { id: "settore", label: "Sektoren", x: 40, y: 86, color: "#f97316", html: "A = πr² · α/360°.", why: "Auch der Flächeninhalt des Sektors ist proportional zum Winkel: Ein Sektor von 90° ist 1/4 des Kreises." },
        { id: "corona", label: "Kreisring", x: 70, y: 86, color: "#14b8a6", html: "A = π(R² − r²).", why: "Er ist die Differenz zweier konzentrischer Kreise: großer Flächeninhalt minus kleiner, mit ausgeklammertem π." },
        { id: "angoli", label: "Umfangswinkel", x: 92, y: 86, color: "#a855f7", html: "Hälfte des zugehörigen Mittelpunktswinkels.", why: "Von Euklid bewiesen (Buch III, Satz 20). Sonderfall: Der Winkel im Halbkreis ist ein rechter, der Satz wird Thales zugeschrieben (6. Jahrhundert v. Chr.)." }
      ],
      edges: [
        ["def", "cerchio", "umschließt"],
        ["def", "parti", "hat"],
        ["parti", "pi", "U : d ="],
        ["pi", "lunghezza", "liefert"],
        ["pi", "area", "liefert"],
        ["lunghezza", "arco", "Bruchteil"],
        ["area", "settore", "Bruchteil"],
        ["area", "corona", "Differenz"],
        ["parti", "angoli", "Eigenschaft"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Flächeninhalte",
      questions: [
        { type: "num", q: "Flächeninhalt eines Kreises mit dem Radius 4 cm (π = 3,14)?", answer: 50.24, tol: 0.01, unit: "cm²", explain: "3,14 · 16 = 50,24 cm²." },
        { type: "mc", q: "Wenn sich der Radius verdreifacht, wird der Flächeninhalt …", options: ["3-mal so groß", "6-mal so groß", "9-mal so groß"], answer: 2, explain: "Der Flächeninhalt hängt von r² ab: 3² = 9." },
        { type: "num", q: "Ein Sektor von 90° in einem Kreis mit dem Flächeninhalt 200 cm² hat den Flächeninhalt …", answer: 50, unit: "cm²", explain: "90° ist 1/4 von 360°: 200 : 4 = 50 cm²." }
      ]
    }
  ],
  glossary: [
    { t: "Circonferenza (Kreislinie)", d: "Geschlossene Linie aus den Punkten mit gleichem Abstand vom Mittelpunkt." },
    { t: "Cerchio (Kreis)", d: "Von einer Kreislinie begrenzter Teil der Ebene." },
    { t: "Raggio (Radius)", d: "Strecke, die den Mittelpunkt mit einem Punkt der Kreislinie verbindet." },
    { t: "Diametro (Durchmesser)", d: "Sehne durch den Mittelpunkt; sie ist doppelt so lang wie der Radius." },
    { t: "Corda (Sehne)", d: "Strecke, die zwei Punkte der Kreislinie verbindet." },
    { t: "Arco (Kreisbogen)", d: "Teil der Kreislinie zwischen zwei Punkten." },
    { t: "Settore circolare (Kreissektor)", d: "Teil des Kreises zwischen zwei Radien und einem Bogen." },
    { t: "Corona circolare (Kreisring)", d: "Teil der Ebene zwischen zwei konzentrischen Kreislinien." },
    { t: "π (Pi)", d: "Verhältnis von Umfang und Durchmesser, etwa 3,14; eine irrationale Zahl." },
    { t: "Tangente", d: "Gerade mit nur einem gemeinsamen Punkt mit der Kreislinie, in diesem Punkt senkrecht zum Radius." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "tf", q: "Die Kreislinie ist eine Linie, der Kreis ist eine Fläche.", answer: true, explain: "Die Kreislinie hat eine Länge, der Kreis einen Flächeninhalt." },
      { type: "num", q: "Der Durchmesser ist 18 cm. Wie lang ist der Radius?", answer: 9, unit: "cm", explain: "r = d : 2 = 9 cm." },
      { type: "num", q: "Umfang des Kreises mit dem Durchmesser 50 cm (π = 3,14)?", answer: 157, tol: 0.01, unit: "cm", explain: "3,14 · 50 = 157 cm." },
      { type: "num", q: "Eine Kreislinie ist 94,2 cm lang. Wie lang ist der Radius? (π = 3,14)", answer: 15, tol: 0.01, unit: "cm", explain: "r = 94,2 : (2 · 3,14) = 94,2 : 6,28 = 15 cm." },
      { type: "num", q: "Flächeninhalt des Kreises mit dem Radius 10 cm (π = 3,14)?", answer: 314, tol: 0.01, unit: "cm²", explain: "3,14 · 100 = 314 cm²." },
      { type: "num", q: "Länge eines Bogens von 60° auf einer 36 cm langen Kreislinie?", answer: 6, unit: "cm", explain: "60/360 = 1/6 → 36 : 6 = 6 cm." },
      { type: "num", q: "Flächeninhalt des Kreisrings mit R = 5 cm und r = 3 cm (π = 3,14)?", answer: 50.24, tol: 0.01, unit: "cm²", explain: "3,14 · (25 − 9) = 3,14 · 16 = 50,24 cm²." },
      { type: "mc", q: "Eine Gerade, deren Abstand vom Mittelpunkt kleiner als der Radius ist, ist …", options: ["eine Passante", "eine Tangente", "eine Sekante"], answer: 2, explain: "Wenn d < r, schneidet die Gerade die Kreislinie in zwei Punkten." },
      { type: "mc", q: "Ein Mittelpunktswinkel misst 80°. Wie groß ist der Umfangswinkel über demselben Bogen?", options: ["160°", "40°", "80°"], answer: 1, explain: "Er ist halb so groß: 40°." },
      { type: "mc", q: "Wer schätzte π mit Vielecken von 96 Seiten ab?", options: ["Pythagoras", "Archimedes", "Descartes"], answer: 1, explain: "Archimedes von Syrakus, 3. Jahrhundert v. Chr." },
      { type: "order", q: "Ordne diese Näherungen von π von der ungenauesten zur genauesten.", items: ["3", "3,14", "22/7 (≈ 3,1429)", "355/113 (≈ 3,1415929)"], explain: "π = 3,14159265…: 355/113 irrt sich erst in der siebten Dezimalstelle; 22/7 ist genauer als 3,14 (Fehler etwa 0,0013 gegenüber 0,0016)." },
      { type: "tf", q: "Wenn sich der Radius verdoppelt, verdoppelt sich auch der Flächeninhalt.", answer: false, explain: "Der Flächeninhalt wird 4-mal so groß, weil er von r² abhängt." }
    ],
    gen: [["circle", 3]]
  }
});
