TOPIC('de', {
  id: "m1-sci-materia-stati",
  title: "Die Materie und ihre Zustände",
  intro: "Das Eis schmilzt, das Wasser kocht, die Fensterscheiben beschlagen, die Mottenkugel „verschwindet“ im Schrank. All das erklärt sich mit einer einzigen Idee: Die <b>Materie</b> besteht aus winzigen <b>Teilchen</b>, die sich ständig bewegen. Wir entdecken die <b>Aggregatzustände</b>, die <b>Zustandsänderungen</b> und den Unterschied zwischen <b>Wärme</b> und <b>Temperatur</b>.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Was ist Materie?",
      html: `<p>Die <b>Materie</b> ist alles, was eine <b>Masse</b> hat und einen <b>Raum</b> (ein <b>Volumen</b>) einnimmt. Materie sind Wasser, Luft, ein Stein, dein Körper. Keine Materie sind Licht, Schall, ein Gedanke.</p>
<p>Ein bestimmter Teil Materie heißt <b>Körper</b> (eine Münze, ein Tropfen); die Art von Materie, aus der er besteht, heißt <b>Stoff</b> oder <b>Material</b> (Kupfer, Wasser).</p>
<p>Nach dem <b>Teilchenmodell</b> besteht die Materie aus winzigen Teilchen (Atomen und Molekülen), die:</p>
<ol>
<li>durch <b>leeren Raum</b> getrennt sind;</li>
<li>sich ständig <b>bewegen</b> (je höher die Temperatur, desto schneller bewegen sie sich);</li>
<li>sich mit Kohäsionskräften gegenseitig <b>anziehen</b>, mal stärker, mal schwächer.</li>
</ol>
<p>Die Idee, dass die Materie aus Teilchen besteht, ist uralt: Der griechische Philosoph <b>Demokrit</b> (5. Jahrhundert v. Chr.) nannte sie <i>átomos</i>, „unteilbar“. Aber erst im 19. Jahrhundert, mit dem englischen Chemiker <b>John Dalton</b> (1808), wurde daraus eine echte wissenschaftliche Theorie.</p>`
    },
    {
      type: "text",
      title: "2. Die drei Aggregatzustände",
      html: `<table>
<tr><th></th><th>🧊 Fest</th><th>💧 Flüssig</th><th>💨 Gasförmig (Gas)</th></tr>
<tr><td><b>Form</b></td><td>eigene</td><td>die des Gefäßes</td><td>die des Gefäßes</td></tr>
<tr><td><b>Volumen</b></td><td>eigenes</td><td>eigenes</td><td>nimmt den ganzen verfügbaren Raum ein</td></tr>
<tr><td><b>Teilchen</b></td><td>sehr dicht beieinander, geordnet, schwingen auf der Stelle</td><td>nah beieinander, aber frei beweglich</td><td>weit auseinander, sehr schnell, ungeordnet</td></tr>
<tr><td><b>Kohäsionskräfte</b></td><td>sehr stark</td><td>mittel</td><td>fast null</td></tr>
<tr><td><b>Lässt es sich zusammendrücken?</b></td><td>nein</td><td>fast gar nicht</td><td>ja, stark</td></tr>
</table>
<p>Bei vielen Festkörpern sind die Teilchen in einem geordneten Gitter angeordnet: Das sind die <b>Kristalle</b> (Salz, Eis, Quarz). Die ohne Ordnung heißen <b>amorph</b> (Glas, Kunststoff).</p>
<p>Es gibt auch einen <b>vierten Zustand</b>: das <b>Plasma</b>, ein so heißes Gas, dass die Atome Elektronen verlieren. Es ist der Zustand der Materie in den Sternen, in Blitzen und in Neonreklamen. Es ist der im Universum am weitesten verbreitete Zustand!</p>`
    },
    {
      type: "svg",
      title: "Die Teilchen in den drei Zuständen",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="20" y="40" width="170" height="190" fill="#e0f2fe" stroke="#0369a1" stroke-width="4"/>
<g fill="#2563eb">
<circle cx="45" cy="205" r="13"/><circle cx="75" cy="205" r="13"/><circle cx="105" cy="205" r="13"/><circle cx="135" cy="205" r="13"/><circle cx="165" cy="205" r="13"/>
<circle cx="45" cy="175" r="13"/><circle cx="75" cy="175" r="13"/><circle cx="105" cy="175" r="13"/><circle cx="135" cy="175" r="13"/><circle cx="165" cy="175" r="13"/>
<circle cx="45" cy="145" r="13"/><circle cx="75" cy="145" r="13"/><circle cx="105" cy="145" r="13"/><circle cx="135" cy="145" r="13"/><circle cx="165" cy="145" r="13"/>
<circle cx="45" cy="115" r="13"/><circle cx="75" cy="115" r="13"/><circle cx="105" cy="115" r="13"/><circle cx="135" cy="115" r="13"/><circle cx="165" cy="115" r="13"/>
</g>
<text x="105" y="270" font-size="20" text-anchor="middle" font-weight="bold" fill="#0369a1">FEST</text>
<text x="105" y="292" font-size="15" text-anchor="middle" fill="#334155">geordnet, schwingen</text>
<rect x="215" y="40" width="170" height="190" fill="#e0f2fe" stroke="#0369a1" stroke-width="4"/>
<rect x="219" y="130" width="162" height="96" fill="#bae6fd"/>
<g fill="#0ea5e9">
<circle cx="240" cy="210" r="13"/><circle cx="270" cy="200" r="13"/><circle cx="305" cy="212" r="13"/><circle cx="338" cy="203" r="13"/><circle cx="365" cy="212" r="13"/>
<circle cx="250" cy="175" r="13"/><circle cx="285" cy="170" r="13"/><circle cx="318" cy="178" r="13"/><circle cx="352" cy="172" r="13"/>
<circle cx="238" cy="145" r="13"/><circle cx="300" cy="145" r="13"/><circle cx="335" cy="146" r="13"/>
</g>
<text x="300" y="270" font-size="20" text-anchor="middle" font-weight="bold" fill="#0369a1">FLÜSSIG</text>
<text x="300" y="292" font-size="15" text-anchor="middle" fill="#334155">nah, gleiten</text>
<rect x="410" y="40" width="170" height="190" fill="#e0f2fe" stroke="#0369a1" stroke-width="4"/>
<g fill="#94a3b8">
<circle cx="440" cy="70" r="13"/><circle cx="530" cy="90" r="13"/><circle cx="475" cy="140" r="13"/><circle cx="555" cy="175" r="13"/><circle cx="440" cy="200" r="13"/><circle cx="510" cy="210" r="13"/>
</g>
<g stroke="#64748b" stroke-width="3">
<line x1="453" y1="70" x2="480" y2="70"/><line x1="543" y1="90" x2="565" y2="70"/><line x1="488" y1="140" x2="512" y2="125"/><line x1="440" y1="187" x2="440" y2="165"/>
</g>
<text x="495" y="270" font-size="20" text-anchor="middle" font-weight="bold" fill="#0369a1">GAS</text>
<text x="495" y="292" font-size="15" text-anchor="middle" fill="#334155">weit, sehr schnell</text>
<text x="300" y="26" font-size="17" text-anchor="middle" fill="#0f172a">mehr Energie (Wärme) = freiere Teilchen →</text>
</svg>`,
      caption: "Das Gas füllt den ganzen Behälter; die Flüssigkeit nimmt die Form des Bodens an; der Festkörper behält seine Form."
    },
    {
      type: "3d",
      title: "Ein Kristall in 3D",
      scene: "molecule",
      options: {
        atoms: [
          { x: -0.8, y: -0.8, z: -0.8, r: 0.3, color: "#2563eb", label: "" },
          { x: 0.8, y: -0.8, z: -0.8, r: 0.3, color: "#2563eb", label: "" },
          { x: -0.8, y: 0.8, z: -0.8, r: 0.3, color: "#2563eb", label: "" },
          { x: 0.8, y: 0.8, z: -0.8, r: 0.3, color: "#2563eb", label: "" },
          { x: -0.8, y: -0.8, z: 0.8, r: 0.3, color: "#2563eb", label: "" },
          { x: 0.8, y: -0.8, z: 0.8, r: 0.3, color: "#2563eb", label: "" },
          { x: -0.8, y: 0.8, z: 0.8, r: 0.3, color: "#2563eb", label: "" },
          { x: 0.8, y: 0.8, z: 0.8, r: 0.3, color: "#2563eb", label: "" },
          { x: 0, y: 0, z: 0, r: 0.3, color: "#f59e0b", label: "" }
        ],
        bonds: [[0, 1], [0, 2], [1, 3], [2, 3], [4, 5], [4, 6], [5, 7], [6, 7], [0, 4], [1, 5], [2, 6], [3, 7], [8, 0], [8, 7]]
      },
      caption: "In kristallinen Festkörpern sitzen die Teilchen an den Ecken eines geordneten Gitters, zusammengehalten von starken Kräften (den Stäbchen). Sie können nur um ihre Position schwingen."
    },
    {
      type: "widget",
      title: "Fest, flüssig oder Gas?",
      widget: "classify",
      options: {
        groups: ["Fest", "Flüssig", "Gasförmig"],
        items: [["🪨 Stein", 0], ["🧂 Salz", 0], ["🥛 Milch", 1], ["🫒 Öl", 1], ["🎈 Helium im Luftballon", 2], ["💨 Wasserdampf", 2], ["🧈 Butter im Kühlschrank", 0], ["🍯 Honig", 1], ["🫧 Kohlenstoffdioxid in Getränken", 2], ["🪟 Glas", 0]]
      },
      caption: "Glas ist ein amorpher Festkörper: Er ist fest, auch wenn seine Teilchen nicht geordnet sind."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Materie und Teilchen",
      questions: [
        { type: "mc", q: "Welcher Zustand hat ein eigenes Volumen, aber die Form des Gefäßes?", options: ["Fest", "Flüssig", "Gas"], answer: 1, explain: "Die Flüssigkeit hat ein eigenes Volumen, nimmt aber die Form des Gefäßes an." },
        { type: "tf", q: "Gase lassen sich leicht zusammendrücken, weil zwischen den Teilchen viel leerer Raum ist.", answer: true, explain: "Darum passt in Gasflaschen so viel Gas hinein." },
        { type: "mc", q: "Welcher griechische Philosoph sprach als Erster von Atomen?", options: ["Platon", "Demokrit", "Archimedes"], answer: 1, explain: "Demokrit stellte sich im 5. Jahrhundert v. Chr. unteilbare Teilchen vor, die átomos." }
      ]
    },
    {
      type: "text",
      title: "3. Wärme und Temperatur: Das ist nicht dasselbe!",
      html: `<ul>
<li>Die <b>Temperatur</b> gibt an, wie schnell sich die Teilchen eines Körpers im Durchschnitt bewegen. Sie wird mit dem <b>Thermometer</b> gemessen.</li>
<li>Die <b>Wärme</b> ist <b>Energie</b>, die von einem wärmeren zu einem kälteren Körper übergeht, bis beide dieselbe Temperatur erreichen (<b>thermisches Gleichgewicht</b>). Sie wird in <b>Joule</b> (J) oder in Kalorien gemessen.</li>
</ul>
<p>Eine Wanne mit lauwarmem Wasser enthält viel mehr Wärme als eine Tasse mit kochend heißem Kaffee, obwohl sie eine niedrigere Temperatur hat: Sie hat viel mehr Teilchen!</p>
<p><b>Die Temperaturskalen</b>:</p>
<ul>
<li><b>Celsius</b> (°C), vom Schweden Anders Celsius (1742): Bei 0 °C schmilzt Eis, bei 100 °C kocht Wasser (auf Meereshöhe).</li>
<li><b>Kelvin</b> (K), von Lord Kelvin (1848): beginnt am <b>absoluten Nullpunkt</b>, 0 K = −273,15 °C, der tiefstmöglichen Temperatur, bei der die Teilchen fast stillstehen. K = °C + 273,15.</li>
<li><b>Fahrenheit</b> (°F), in den USA benutzt: Eis schmilzt bei 32 °F und Wasser kocht bei 212 °F.</li>
</ul>
<p>Wärme lässt Körper auch <b>ausdehnen</b>: Beim Erwärmen bewegen sich die Teilchen mehr und entfernen sich voneinander. Darum haben Bahngleise und Brücken <b>Dehnungsfugen</b>, und die Flüssigkeit im Thermometer steigt.</p>`
    },
    {
      type: "text",
      title: "4. Die Zustandsänderungen",
      html: `<p>Durch Zufuhr oder Entzug von Wärme kann ein Stoff seinen Zustand ändern. Die Teilchen bleiben <b>dieselben</b>: Es ändert sich nur, wie sie angeordnet sind und wie stark sie sich bewegen. Das sind umkehrbare <b>physikalische Umwandlungen</b>.</p>
<table>
<tr><th>Übergang</th><th>Von → zu</th><th>Wärme</th><th>Beispiel</th></tr>
<tr><td><b>Schmelzen</b></td><td>fest → flüssig</td><td>nimmt auf</td><td>das Eis schmilzt</td></tr>
<tr><td><b>Erstarren</b></td><td>flüssig → fest</td><td>gibt ab</td><td>Wasser wird im Gefrierfach zu Eis</td></tr>
<tr><td><b>Verdampfen</b></td><td>flüssig → gasförmig</td><td>nimmt auf</td><td>aufgehängte Wäsche trocknet (Verdunsten); Wasser kocht (Sieden)</td></tr>
<tr><td><b>Kondensieren</b></td><td>gasförmig → flüssig</td><td>gibt ab</td><td>Spiegel beschlagen nach dem Duschen</td></tr>
<tr><td><b>Sublimieren</b></td><td>fest → gasförmig</td><td>nimmt auf</td><td>die Mottenkugel, das Trockeneis</td></tr>
<tr><td><b>Resublimieren</b></td><td>gasförmig → fest</td><td>gibt ab</td><td>der Reif auf dem Gras im Winter</td></tr>
</table>
<p><b>Verdunsten und Sieden</b>: Das Verdunsten findet bei jeder Temperatur statt, nur an der Oberfläche; das Sieden findet bei einer bestimmten Temperatur (der <b>Siedetemperatur</b>) und in der ganzen Flüssigkeit statt, mit Blasen.</p>
<p><b>Die überraschende Tatsache</b>: Während einer Zustandsänderung <b>bleibt die Temperatur konstant</b>! Die zugeführte Wärme erwärmt nicht, sondern dient dazu, die Teilchen voneinander zu „lösen“. Das nennt man <b>latente Wärme</b> („verborgene“ Wärme). Schmelzendes Eis bleibt bei 0 °C, bis es ganz Wasser ist.</p>`
    },
    {
      type: "svg",
      title: "Die Erwärmungskurve von Wasser",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#fffbeb"/>
<line x1="70" y1="280" x2="580" y2="280" stroke="#111827" stroke-width="3"/>
<line x1="70" y1="280" x2="70" y2="20" stroke="#111827" stroke-width="3"/>
<text x="560" y="305" font-size="16" text-anchor="end">Zeit (zugeführte Wärme) →</text>
<text x="20" y="30" font-size="16">°C</text>
<line x1="65" y1="230" x2="580" y2="230" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4"/>
<line x1="65" y1="90" x2="580" y2="90" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4"/>
<text x="60" y="235" font-size="16" text-anchor="end">0</text>
<text x="60" y="95" font-size="16" text-anchor="end">100</text>
<polyline points="80,265 140,230 250,230 330,90 500,90 570,40" fill="none" stroke="#dc2626" stroke-width="6"/>
<text x="100" y="215" font-size="15" fill="#2563eb" font-weight="bold">Eis</text>
<text x="195" y="255" font-size="15" text-anchor="middle" fill="#7c3aed" font-weight="bold">Schmelzen</text>
<text x="195" y="273" font-size="14" text-anchor="middle" fill="#7c3aed">T konstant</text>
<text x="300" y="170" font-size="15" fill="#0284c7" font-weight="bold">Wasser</text>
<text x="415" y="115" font-size="15" text-anchor="middle" fill="#7c3aed" font-weight="bold">Sieden</text>
<text x="415" y="133" font-size="14" text-anchor="middle" fill="#7c3aed">T konstant</text>
<text x="520" y="35" font-size="15" fill="#64748b" font-weight="bold">Dampf</text>
</svg>`,
      caption: "Die waagrechten Abschnitte sind die Zustandsänderungen: Man führt Wärme zu, aber die Temperatur steigt nicht."
    },
    {
      type: "widget",
      title: "Ordne die Zustandsänderung dem Beispiel zu",
      widget: "match",
      options: {
        pairs: [
          ["Schmelzen", "🍦 das Eis in der Sonne"],
          ["Erstarren", "🧊 die Eiswürfel im Gefrierfach"],
          ["Verdunsten", "👕 aufgehängte Wäsche, die trocknet"],
          ["Kondensieren", "🪞 der beschlagene Spiegel"],
          ["Sublimieren", "🌫️ das rauchende Trockeneis"],
          ["Resublimieren", "❄️ der Reif auf den Autoscheiben"]
        ]
      }
    },
    {
      type: "example",
      title: "Praxisbeispiel: Warum gart die Pasta im Schnellkochtopf schneller?",
      html: `<p>Die Siedetemperatur hängt vom <b>Druck</b> der Luft über der Flüssigkeit ab.</p>
<ul>
<li>Auf Meereshöhe kocht Wasser bei <b>100 °C</b>.</li>
<li>In den Bergen ist der Druck niedriger: In 3000 m Höhe kocht Wasser bei etwa <b>90 °C</b>, auf dem Gipfel des Mount Everest (8849 m) bei etwa <b>70 °C</b>. Die Pasta gart schlechter, weil das Wasser nicht heiß genug wird!</li>
<li>Im <b>Schnellkochtopf</b> bleibt der Dampf eingeschlossen und der Druck steigt: Das Wasser kocht bei etwa <b>120 °C</b> und die Speisen garen in der halben Zeit.</li>
</ul>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Warum streut man Salz auf vereiste Straßen?",
      html: `<p>Reines Wasser gefriert bei 0 °C. Wenn du darin <b>Salz</b> auflöst, „stören“ die Salzteilchen die Wasserteilchen und machen es schwerer, Eiskristalle zu bilden: Salzwasser gefriert bei tieferen Temperaturen (bis etwa −21 °C bei viel Salz).</p>
<p>Aus demselben Grund gefriert das <b>Meer</b> schwerer als Seen, und in den Kühler von Autos füllt man <b>Frostschutzmittel</b>.</p>
<p><b>Experiment in der Küche</b>: Lege zwei Eiswürfel auf zwei Untertassen und bestreue nur einen mit Salz. Welcher schmilzt zuerst?</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon … Eis schwimmt, und das ist ein Glück?",
      html: `<p>Fast alle Stoffe werden beim Erstarren dichter, und der Festkörper sinkt. <b>Wasser</b> macht das Gegenteil: Wenn es gefriert, ordnen sich die Moleküle zu einem sechseckigen Kristall voller leerer Räume an, sodass das Eis etwa <b>9 % mehr</b> Raum einnimmt und weniger dicht ist (etwa 0,92 g/cm³). Darum <b>schwimmt</b> Eis, und mit Wasser gefüllte Flaschen platzen im Gefrierfach.</p>
<p>Das rettet Fischen und Pflanzen in Seen das Leben: Im Winter bildet sich das Eis an der Oberfläche und wirkt wie eine „Decke“, während das Wasser am Grund flüssig bleibt, bei etwa <b>4 °C</b>, der Temperatur, bei der Wasser am dichtesten ist.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon … Trockeneis macht nicht nass?",
      html: `<p><b>Trockeneis</b> ist festes Kohlenstoffdioxid (CO₂). Bei normalem Druck wird es nie flüssig: Bei <b>−78,5 °C</b> geht es direkt von fest zu gasförmig über (Sublimation) und bildet jenen weißen Nebel, der bei Konzerten und in Filmen benutzt wird. Man darf es nie mit bloßen Händen anfassen: Es ist so kalt, dass es Verbrennungen verursacht!</p>
<p>Und Schneeflocken? Jede ist ein Eiskristall mit <b>6 Spitzen</b>, entstanden durch Resublimation von Wasserdampf in den Wolken.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, die Aggregatzustände zu verstehen",
      intro: "Teilchen sieht man nicht: Versuche, sie dir auf verschiedene Arten vorzustellen.",
      tabs: [
        {
          label: "💃 Vergleich: die Klasse beim Fest",
          html: `<ul>
<li><b>Fest</b>: Die Schüler sitzen an ihren Pulten, in geordneten Reihen. Sie rutschen ein wenig auf dem Stuhl herum (schwingen), bleiben aber an ihrem Platz.</li>
<li><b>Flüssig</b>: Es ist Pause. Die Schüler stehen auf und gehen durch die Klasse, immer nah beieinander, aneinander vorbeigleitend. Das Klassenzimmer (das Volumen) ist immer dasselbe.</li>
<li><b>Gas</b>: Die Schulglocke läutet zum Schulschluss! Alle rennen in alle Richtungen, weit voneinander entfernt, und füllen den ganzen Schulhof.</li>
</ul>
<p>Die <b>Wärme</b> ist wie die Musik: Je lauter und rhythmischer sie ist, desto mehr bewegen sich die Kinder und desto weiter entfernen sie sich voneinander.</p>`
        },
        {
          label: "💧 Das Wassermolekül in 3D",
          html: `<p>Wasser besteht aus H₂O-Molekülen: einem <b>Sauerstoff</b>atom (rot) und zwei <b>Wasserstoff</b>atomen (grau), die in einem „V“ mit einem Winkel von etwa <b>104,5°</b> angeordnet sind. Diese gewinkelte Form erklärt, warum Eis sechseckige Kristalle bildet und warum Wasser so viele Stoffe löst. In allen drei Zuständen ist das Molekül dasselbe: Es ändert sich nur, wie nah die Moleküle beieinander sind und wie stark sie sich bewegen.</p>`,
          scene: "molecule",
          options: {
            atoms: [
              { x: 0, y: 0.2, z: 0, r: 0.55, color: "#ef4444", label: "O" },
              { x: 0.76, y: -0.39, z: 0, r: 0.35, color: "#94a3b8", label: "H" },
              { x: -0.76, y: -0.39, z: 0, r: 0.35, color: "#94a3b8", label: "H" }
            ],
            bonds: [[0, 1], [0, 2]]
          }
        },
        {
          label: "🔄 Der Kreislauf der Übergänge",
          html: `<p>Zeichne ein Dreieck mit <b>fest</b>, <b>flüssig</b> und <b>gasförmig</b> an den Ecken. Die Pfeile, die zum Gas hinaufführen, <b>nehmen Wärme auf</b> (rot), die, die zum Festkörper hinunterführen, <b>geben Wärme ab</b> (blau).</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="300" cy="55" r="45" fill="#cbd5e1"/>
<circle cx="110" cy="240" r="45" fill="#93c5fd"/>
<circle cx="490" cy="240" r="45" fill="#38bdf8"/>
<text x="300" y="62" font-size="20" text-anchor="middle" font-weight="bold">GAS</text>
<text x="110" y="247" font-size="18" text-anchor="middle" font-weight="bold">FEST</text>
<text x="490" y="247" font-size="18" text-anchor="middle" font-weight="bold">FLÜSSIG</text>
<line x1="160" y1="230" x2="440" y2="230" stroke="#dc2626" stroke-width="4"/>
<line x1="440" y1="255" x2="160" y2="255" stroke="#2563eb" stroke-width="4"/>
<text x="300" y="222" font-size="16" text-anchor="middle" fill="#dc2626">Schmelzen</text>
<text x="300" y="277" font-size="16" text-anchor="middle" fill="#2563eb">Erstarren</text>
<line x1="470" y1="195" x2="340" y2="85" stroke="#dc2626" stroke-width="4"/>
<line x1="320" y1="100" x2="445" y2="208" stroke="#2563eb" stroke-width="4"/>
<text x="455" y="130" font-size="16" fill="#dc2626">Verdampfen</text>
<text x="330" y="160" font-size="16" fill="#2563eb">Kondensieren</text>
<line x1="130" y1="195" x2="260" y2="85" stroke="#dc2626" stroke-width="4"/>
<line x1="280" y1="100" x2="155" y2="208" stroke="#2563eb" stroke-width="4"/>
<text x="40" y="130" font-size="16" fill="#dc2626">Sublimieren</text>
<text x="150" y="160" font-size="16" fill="#2563eb">Resublimieren</text>
</svg>`
        },
        {
          label: "🌡️ Die Skalen in der Welt",
          html: `<p>In Deutschland und fast überall benutzt man Celsius; in den <b>USA</b> Fahrenheit; Wissenschaftler benutzen <b>Kelvin</b>.</p>
<table>
<tr><th>Phänomen</th><th>°C</th><th>K</th><th>°F</th></tr>
<tr><td>Absoluter Nullpunkt</td><td>−273,15</td><td>0</td><td>−459,67</td></tr>
<tr><td>Schmelzen des Eises</td><td>0</td><td>273,15</td><td>32</td></tr>
<tr><td>Menschlicher Körper</td><td>37</td><td>310,15</td><td>98,6</td></tr>
<tr><td>Sieden des Wassers</td><td>100</td><td>373,15</td><td>212</td></tr>
</table>
<p>Formel: °F = °C × 1,8 + 32. Wenn dir ein amerikanischer Freund sagt, draußen seien 77 °F, sind das (77 − 32) : 1,8 = 25 °C: ein schöner Tag!</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Materie: Tippe und entdecke das Warum",
      nodes: [
        { id: "materia", label: "Materie", x: 50, y: 6, color: "#6366f1", html: "Alles, was Masse und Volumen hat.", why: "Wir können es überprüfen: Auch Luft hat eine Masse (ein aufgeblasener Ball wiegt mehr als ein leerer) und nimmt Raum ein (ein umgedrehtes Glas im Wasser füllt sich nicht)." },
        { id: "particelle", label: "Teilchenmodell", x: 50, y: 26, color: "#2563eb", html: "Die Materie besteht aus Teilchen in Bewegung, getrennt durch leeren Raum.", why: "Demokrit stellte es sich im 5. Jahrhundert v. Chr. vor; John Dalton machte daraus 1808 eine wissenschaftliche Theorie. 1905 erklärte Einstein mit den Teilchen die Brown'sche Bewegung der Pollenkörner im Wasser: der Beweis, dass es Atome wirklich gibt." },
        { id: "solido", label: "Fest", x: 15, y: 46, color: "#0369a1", html: "Eigene Form und eigenes Volumen.", why: "Die Kräfte zwischen den Teilchen sind so stark, dass sie sie an festen Plätzen halten: Sie können nur schwingen." },
        { id: "liquido", label: "Flüssig", x: 50, y: 50, color: "#0ea5e9", html: "Eigenes Volumen, Form des Gefäßes.", why: "Die Teilchen sind noch nah beieinander (darum ändert sich das Volumen nicht), haben aber genug Energie, um aneinander vorbeizugleiten." },
        { id: "gas", label: "Gasförmig", x: 85, y: 46, color: "#94a3b8", html: "Weder eigene Form noch eigenes Volumen.", why: "Die Teilchen haben so viel Energie, dass sie die Anziehungskräfte fast ganz überwinden: Sie fliegen in alle Richtungen und füllen den Raum." },
        { id: "temperatura", label: "Temperatur", x: 22, y: 74, color: "#f59e0b", html: "Gibt die mittlere Bewegung der Teilchen an; wird mit dem Thermometer gemessen.", why: "Je schneller sich die Teilchen bewegen, desto wärmer ist der Körper. Am absoluten Nullpunkt (−273,15 °C) ist die Bewegung die kleinstmögliche: Darum kann man nicht weiter hinunter." },
        { id: "calore", label: "Wärme", x: 78, y: 74, color: "#ef4444", html: "Energie, die vom wärmeren zum kälteren Körper übergeht.", why: "Die schnelleren Teilchen stoßen an die langsameren und geben Energie ab, bis die Temperaturen gleich sind. James Joule bewies das im 19. Jahrhundert, indem er Wasser mit Schaufeln erwärmte, die von einem fallenden Gewicht bewegt wurden." },
        { id: "passaggi", label: "Zustandsänderungen", x: 50, y: 94, color: "#a855f7", html: "Schmelzen, Erstarren, Verdampfen, Kondensieren, Sublimieren, Resublimieren.", why: "Durch Wärmezufuhr gewinnen die Teilchen genug Energie, um die Bindungen zu ihren Nachbarn zu lösen; durch Entzug nähern sie sich wieder. Während der Änderung bleibt die Temperatur konstant, weil die Energie zum Lösen der Bindungen dient (latente Wärme)." }
      ],
      edges: [
        ["materia", "particelle", "erklärt durch das"],
        ["particelle", "solido", "fest gebunden"],
        ["particelle", "liquido", "gleiten"],
        ["particelle", "gas", "frei"],
        ["particelle", "temperatura", "mittlere Geschwindigkeit ="],
        ["calore", "temperatura", "verändert die"],
        ["calore", "passaggi", "bewirkt die"],
        ["passaggi", "solido", "verbinden"],
        ["passaggi", "gas", "verbinden"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Zustandsänderungen",
      questions: [
        { type: "mc", q: "Wie heißt der Übergang von gasförmig zu flüssig?", options: ["Verdunsten", "Kondensieren", "Sublimieren", "Schmelzen"], answer: 1, explain: "Gasförmig → flüssig ist das Kondensieren, wie wenn ein Spiegel beschlägt." },
        { type: "tf", q: "Während das Eis schmilzt, steigt seine Temperatur weiter.", answer: false, explain: "Beim Schmelzen bleibt die Temperatur konstant bei 0 °C: Die Wärme dient dazu, die Bindungen zu lösen." },
        { type: "num", q: "Wie viel Kelvin sind 27 °C? (benutze 273)", answer: 300, unit: "K", explain: "K = °C + 273 = 27 + 273 = 300 K." }
      ]
    },
    {
      type: "remember",
      title: "Zum Merken",
      html: `<ul>
<li>Die Materie hat <b>Masse</b> und <b>Volumen</b> und besteht aus <b>Teilchen</b> in Bewegung.</li>
<li><b>Fest</b>: eigene Form und eigenes Volumen. <b>Flüssig</b>: eigenes Volumen. <b>Gas</b>: nichts Eigenes.</li>
<li><b>Temperatur</b> = Bewegung der Teilchen; <b>Wärme</b> = Energie, die vom Warmen zum Kalten übergeht.</li>
<li>Übergänge, die Wärme <b>aufnehmen</b>: Schmelzen, Verdampfen, Sublimieren. Die sie <b>abgeben</b>: Erstarren, Kondensieren, Resublimieren.</li>
<li>Während einer Zustandsänderung <b>bleibt die Temperatur konstant</b>.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Materie", d: "Alles, was Masse hat und Raum einnimmt." },
    { t: "Aggregatzustand", d: "Form, in der die Materie auftritt: fest, flüssig, gasförmig (und Plasma)." },
    { t: "Kohäsion", d: "Anziehungskraft zwischen den Teilchen eines Stoffes." },
    { t: "Temperatur", d: "Größe, die mit der mittleren Geschwindigkeit der Teilchen zusammenhängt." },
    { t: "Wärme", d: "Energie, die von einem wärmeren zu einem kälteren Körper übergeht." },
    { t: "Absoluter Nullpunkt", d: "Die tiefstmögliche Temperatur: 0 K = −273,15 °C." },
    { t: "Latente Wärme", d: "Wärme, die bei einer Zustandsänderung aufgenommen oder abgegeben wird, ohne die Temperatur zu ändern." },
    { t: "Sublimation", d: "Direkter Übergang von fest zu gasförmig." },
    { t: "Resublimation", d: "Direkter Übergang von gasförmig zu fest." },
    { t: "Wärmeausdehnung", d: "Zunahme des Volumens eines Körpers, wenn er erwärmt wird." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welche dieser Dinge ist KEINE Materie?", options: ["Die Luft", "Das Licht", "Das Wasser", "Das Holz"], answer: 1, explain: "Licht ist Energie: Es hat keine Masse und nimmt kein Volumen ein." },
      { type: "mc", q: "In welchem Zustand sind die Teilchen geordnet und schwingen auf der Stelle?", options: ["Fest", "Flüssig", "Gasförmig"], answer: 0, explain: "Im Festkörper halten die Kohäsionskräfte die Teilchen an festen Plätzen." },
      { type: "tf", q: "Wärme und Temperatur sind dasselbe.", answer: false, explain: "Wärme ist Energie auf dem Weg; die Temperatur misst die Bewegung der Teilchen." },
      { type: "text", q: "Wie heißt der direkte Übergang von fest zu gasförmig?", answer: ["Sublimation", "die Sublimation", "Sublimieren", "sublimieren"], explain: "Es ist die Sublimation, wie bei der Mottenkugel oder dem Trockeneis." },
      { type: "mc", q: "Welche Zustandsänderung gibt Wärme an die Umgebung ab?", options: ["Schmelzen", "Verdunsten", "Kondensieren", "Sublimieren"], answer: 2, explain: "Kondensieren, Erstarren und Resublimieren geben Wärme ab." },
      { type: "num", q: "Wie viel Kelvin entspricht die Schmelztemperatur des Eises, 0 °C? (auf ganze Zahlen runden)", answer: 273, tol: 0.5, unit: "K", explain: "K = °C + 273,15, also 0 °C = 273,15 K ≈ 273 K. Der absolute Nullpunkt, 0 K, ist −273,15 °C." },
      { type: "num", q: "Bei welcher Temperatur (in °C) kocht Wasser auf Meereshöhe?", answer: 100, unit: "°C", explain: "Auf Meereshöhe kocht reines Wasser bei 100 °C." },
      { type: "mc", q: "Warum kocht Wasser im Hochgebirge unter 100 °C?", options: ["Weil es kalt ist", "Weil der Luftdruck niedriger ist", "Weil das Wasser reiner ist"], answer: 1, explain: "Bei weniger Druck entweichen die Moleküle leichter aus der Flüssigkeit." },
      { type: "tf", q: "Eis schwimmt, weil es weniger dicht ist als flüssiges Wasser.", answer: true, explain: "Eis hat eine Dichte von etwa 0,92 g/cm³, kleiner als die des Wassers." },
      { type: "order", q: "Bringe in die richtige Reihenfolge, was passiert, wenn man einen Eiswürfel von −10 °C erwärmt.", items: ["Das Eis erwärmt sich bis 0 °C", "Das Eis schmilzt bei konstanter Temperatur", "Das Wasser erwärmt sich bis 100 °C", "Das Wasser kocht bei konstanter Temperatur", "Der Dampf erwärmt sich über 100 °C"], explain: "Das ist die Erwärmungskurve: ansteigende Abschnitte und waagrechte Abschnitte bei den Zustandsänderungen." },
      { type: "mc", q: "Der Reif auf dem Gras ist ein Beispiel für …", options: ["Erstarren", "Resublimieren", "Kondensieren", "Schmelzen"], answer: 1, explain: "Der Wasserdampf geht direkt in den festen Zustand über: Resublimation." },
      { type: "mc", q: "Warum haben Bahngleise kleine Lücken zwischen den Teilstücken?", options: ["Um Eisen zu sparen", "Wegen der Wärmeausdehnung im Sommer", "Damit das Wasser abfließen kann"], answer: 1, explain: "Bei Hitze dehnt sich das Metall aus: Ohne Lücken würden sich die Gleise verformen." }
    ]
  }
});
