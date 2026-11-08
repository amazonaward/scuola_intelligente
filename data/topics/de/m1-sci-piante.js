TOPIC('de', {
  id: "m1-sci-piante",
  title: "Die Pflanzen",
  intro: "Pflanzen bewegen sich nicht und essen nicht, und doch wachsen sie, stellen aus Licht Zucker her und erzeugen den <b>Sauerstoff</b>, den wir atmen. Wir entdecken, wie sie aufgebaut sind (<b>Wurzel, Stängel, Blätter</b>), wie die <b>Fotosynthese</b> funktioniert, wie sie sich <b>fortpflanzen</b> und wie man sie einteilt.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Die Pflanzen: Steckbrief",
      html: `<p>Pflanzen sind Organismen des Reichs der <b>Pflanzen</b> (oder Gewächse):</p>
<ul>
<li><b>mehrzellig</b>, mit <b>eukaryotischen</b> Zellen;</li>
<li><b>autotroph</b>: Sie stellen ihre Nahrung durch <b>Fotosynthese</b> selbst her;</li>
<li>ihre Zellen haben eine <b>Zellwand aus Zellulose</b> (starr), eine große <b>Vakuole</b> und <b>Chloroplasten</b>, die den grünen Farbstoff <b>Chlorophyll</b> enthalten;</li>
<li>sie leben „festgewachsen“, im Boden verankert, reagieren aber auf Reize: Der Stängel biegt sich zum Licht (<b>Fototropismus</b>) und die Wurzel wächst nach unten (<b>Geotropismus</b>).</li>
</ul>
<p>Man schätzt, dass es etwa <b>380 000</b> Pflanzenarten gibt. Sie sind die Grundlage fast aller <b>Nahrungsketten</b> auf dem Festland: Sie sind die <b>Produzenten</b>.</p>`
    },
    {
      type: "text",
      title: "2. Wurzel, Stängel und Blätter",
      html: `<p>Die höher entwickelten Pflanzen (die <b>Sprosspflanzen</b>) haben einen in drei Organe gegliederten Körper:</p>
<p><b>🟫 Die Wurzel</b></p>
<ul>
<li><b>verankert</b> die Pflanze im Boden;</li>
<li><b>nimmt</b> Wasser und Mineralsalze durch die hauchdünnen <b>Wurzelhaare</b> <b>auf</b>;</li>
<li>manchmal dient sie als <b>Speicher</b>: Möhre, Rote Bete und Radieschen sind verdickte Wurzeln.</li>
</ul>
<p>Sie kann eine <b>Pfahlwurzel</b> sein (eine dicke Hauptwurzel, wie bei der Möhre) oder eine <b>Büschelwurzel</b> (viele gleiche dünne Wurzeln, wie beim Weizen).</p>
<p><b>🟩 Der Stängel</b></p>
<ul>
<li><b>trägt</b> Blätter, Blüten und Früchte und bringt sie zum Licht;</li>
<li><b>transportiert</b> die Stoffe in zwei „Röhrensystemen“: Das <b>Xylem</b> leitet den <b>Rohsaft</b> (Wasser und Salze) nach oben, das <b>Phloem</b> verteilt den <b>Nährsaft</b> (Wasser und Zucker) in der ganzen Pflanze.</li>
</ul>
<p>Er kann <b>krautig</b> (grün und weich) oder <b>holzig</b> (der Stamm der Bäume) sein. Jedes Jahr bildet der Stamm einen neuen <b>Jahresring</b> aus Holz: Wenn man sie zählt, erfährt man das Alter des Baumes.</p>
<p><b>🍃 Das Blatt</b></p>
<ul>
<li>ist das „Labor“ der <b>Fotosynthese</b>;</li>
<li>hat einen breiten, flachen Teil, die <b>Blattspreite</b>, die über den <b>Blattstiel</b> am Stängel sitzt; die <b>Blattadern</b> sind die Gefäße, die den Saft leiten;</li>
<li>auf der Unterseite hat es Tausende winziger Löcher, die <b>Spaltöffnungen</b> (Stomata), die sich öffnen und schließen, damit Kohlenstoffdioxid hinein- und Sauerstoff und Wasserdampf hinausgelangen.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Die Teile der Pflanze",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#e0f2fe"/>
<rect y="230" width="600" height="110" fill="#a16207"/>
<circle cx="520" cy="50" r="30" fill="#facc15"/>
<path d="M300 230 L300 90" stroke="#15803d" stroke-width="10"/>
<path d="M300 170 Q240 150 210 120 Q260 120 300 165" fill="#22c55e" stroke="#14532d" stroke-width="2"/>
<path d="M300 140 Q360 120 390 90 Q340 90 300 135" fill="#22c55e" stroke="#14532d" stroke-width="2"/>
<circle cx="300" cy="75" r="16" fill="#facc15"/>
<g fill="#f472b6"><circle cx="300" cy="50" r="13"/><circle cx="325" cy="75" r="13"/><circle cx="300" cy="100" r="13"/><circle cx="275" cy="75" r="13"/></g>
<circle cx="300" cy="75" r="11" fill="#facc15"/>
<path d="M300 230 L300 300 M300 250 L260 290 M300 250 L340 295 M300 270 L270 320 M300 270 L330 325" stroke="#fef3c7" stroke-width="5"/>
<path d="M260 290 L250 300 M340 295 L352 302" stroke="#fef3c7" stroke-width="2"/>
<rect x="420" y="250" width="40" height="40" rx="8" fill="#93c5fd"/>
<text x="440" y="310" font-size="15" text-anchor="middle" fill="#ffffff">Wasser</text>
</svg>`,
        spots: [
          { x: 300, y: 75, label: "Blüte" },
          { x: 230, y: 130, label: "Blatt" },
          { x: 300, y: 200, label: "Stängel" },
          { x: 300, y: 285, label: "Wurzel" },
          { x: 352, y: 302, label: "Wurzelhaare" },
          { x: 520, y: 50, label: "Sonnenlicht" }
        ]
      },
      caption: "Klicke auf jeden Punkt und wähle den richtigen Namen."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Organe der Pflanze",
      questions: [
        { type: "mc", q: "Welches Organ nimmt Wasser und Mineralsalze auf?", options: ["Das Blatt", "Die Wurzel", "Die Blüte", "Die Frucht"], answer: 1, explain: "Die Wurzel nimmt Wasser und Salze mit den Wurzelhaaren auf." },
        { type: "mc", q: "Wie heißen die winzigen Löcher im Blatt, durch die die Gase eintreten?", options: ["Blattadern", "Spaltöffnungen", "Blattstiele", "Vakuolen"], answer: 1, explain: "Die Spaltöffnungen regeln den Gasaustausch und die Verdunstung." },
        { type: "tf", q: "Die Möhre ist eine Wurzel.", answer: true, explain: "Sie ist eine verdickte Pfahlwurzel, voller Speicherstoffe." }
      ]
    },
    {
      type: "text",
      title: "3. Die Fotosynthese",
      html: `<p>In den <b>Chloroplasten</b> der Blätter verwandelt die Pflanze dank des <b>Chlorophylls</b>, das die Energie des <b>Lichts</b> einfängt, <b>Wasser</b> und <b>Kohlenstoffdioxid</b> in <b>Glukose</b> (einen Zucker) und setzt <b>Sauerstoff</b> frei:</p>
<p style="text-align:center"><b>Kohlenstoffdioxid + Wasser + Licht → Glukose + Sauerstoff</b><br>6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂</p>
<ul>
<li>Das <b>Wasser</b> kommt aus den Wurzeln durch das Xylem;</li>
<li>das <b>Kohlenstoffdioxid</b> tritt aus der Luft durch die Spaltöffnungen ein;</li>
<li>die <b>Glukose</b> wird benutzt, um Energie zu gewinnen, um die <b>Zellulose</b> der Pflanze aufzubauen oder wird als <b>Stärke</b> gespeichert (in Kartoffeln, Weizenkörnern, Samen);</li>
<li>der <b>Sauerstoff</b> tritt aus den Spaltöffnungen aus: Es ist der Sauerstoff, den wir atmen!</li>
</ul>
<p><b>Achtung</b>: Auch Pflanzen <b>atmen</b>, Tag und Nacht, wie wir (sie verbrauchen Sauerstoff und geben Kohlenstoffdioxid ab). Aber tagsüber erzeugt die Fotosynthese viel mehr Sauerstoff, als die Pflanze verbraucht.</p>
<p><b>Transpiration</b>: Aus den Blättern verdunstet Wasser. Diese Verdunstung „zieht“ das Wasser wie mit einem Strohhalm aus den Wurzeln nach oben: Ein großer Baum kann Hunderte Liter am Tag verdunsten.</p>`
    },
    {
      type: "svg",
      title: "Das Blatt: eine Fabrik mit Solarenergie",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f0fdf4"/>
<circle cx="70" cy="60" r="40" fill="#facc15"/>
<text x="70" y="66" font-size="17" text-anchor="middle" font-weight="bold">Licht</text>
<line x1="110" y1="85" x2="210" y2="135" stroke="#f59e0b" stroke-width="5"/>
<path d="M200 160 Q300 40 470 160 Q300 280 200 160 Z" fill="#22c55e" stroke="#14532d" stroke-width="4"/>
<path d="M200 160 L470 160 M280 160 L320 120 M280 160 L320 200 M360 160 L400 125 M360 160 L400 195" stroke="#14532d" stroke-width="3"/>
<text x="335" y="150" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">Chlorophyll</text>
<text x="70" y="180" font-size="17" text-anchor="middle" fill="#475569" font-weight="bold">CO₂</text>
<text x="70" y="200" font-size="14" text-anchor="middle" fill="#475569">aus der Luft</text>
<line x1="100" y1="185" x2="200" y2="170" stroke="#475569" stroke-width="4"/>
<text x="210" y="300" font-size="17" text-anchor="middle" fill="#2563eb" font-weight="bold">H₂O aus den Wurzeln</text>
<line x1="210" y1="280" x2="250" y2="200" stroke="#2563eb" stroke-width="4"/>
<text x="540" y="100" font-size="18" text-anchor="middle" fill="#0ea5e9" font-weight="bold">O₂</text>
<text x="540" y="120" font-size="14" text-anchor="middle" fill="#0ea5e9">in die Luft</text>
<line x1="460" y1="140" x2="520" y2="110" stroke="#0ea5e9" stroke-width="4"/>
<text x="530" y="230" font-size="17" text-anchor="middle" fill="#b45309" font-weight="bold">Glukose</text>
<text x="530" y="250" font-size="14" text-anchor="middle" fill="#b45309">im Saft</text>
<line x1="440" y1="185" x2="500" y2="215" stroke="#b45309" stroke-width="4"/>
</svg>`,
      caption: "Hinein gehen Licht, Kohlenstoffdioxid und Wasser; heraus kommen Sauerstoff und Zucker."
    },
    {
      type: "example",
      title: "Praxisbeispiel: der gefärbte Sellerie",
      html: `<ol>
<li>Stelle einen <b>Selleriestängel</b> mit Blättern (oder eine weiße Nelke) in ein Glas Wasser mit einigen Tropfen roter oder blauer <b>Lebensmittelfarbe</b>.</li>
<li>Warte 24 Stunden.</li>
<li>Die Blätter sind gefärbt! Schneide den Stängel quer durch: Du siehst farbige Pünktchen. Das sind die <b>Gefäße des Xylems</b>, die das Wasser nach oben transportiert haben.</li>
</ol>
<p>Probiere es auch mit zwei Gläsern: eines in der Sonne und eines im Schatten. Wo steigt es schneller? In der Sonne ist die <b>Transpiration</b> stärker und „zieht“ das Wasser stärker.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: eine Bohne keimen lassen",
      html: `<ol>
<li>Lege nasse Watte in ein Glas und drücke eine <b>trockene Bohne</b> gegen das Glas.</li>
<li>Halte die Watte feucht. Nach 2–3 Tagen quillt der Samen auf, und das <b>Würzelchen</b> kommt heraus und wächst nach unten.</li>
<li>Dann kommt der kleine <b>Spross</b>, der nach oben wächst, mit den ersten Blättern.</li>
<li>Die beiden Hälften der Bohne, die <b>Keimblätter</b>, entleeren sich: Sie enthielten den Nahrungsvorrat für das Pflänzchen.</li>
</ol>
<p>Versuche, das Glas nach einigen Tagen umzudrehen: Die Wurzel <b>ändert die Richtung</b> und wächst wieder nach unten (Geotropismus)!</p>`
    },
    {
      type: "text",
      title: "4. Die Einteilung der Pflanzen",
      html: `<table>
<tr><th>Gruppe</th><th>Leitgefäße</th><th>Samen</th><th>Beispiele</th></tr>
<tr><td><b>Moose (Bryophyten)</b></td><td>nein</td><td>nein (Sporen)</td><td>Moose, Lebermoose</td></tr>
<tr><td><b>Farnpflanzen (Pteridophyten)</b></td><td>ja</td><td>nein (Sporen)</td><td>Farne, Schachtelhalme</td></tr>
<tr><td><b>Nacktsamer (Gymnospermen)</b> („nackter Same“)</td><td>ja</td><td>ja, nicht von einer Frucht geschützt, oft in Zapfen</td><td>Kiefer, Tanne, Lärche, Zypresse, Ginkgo</td></tr>
<tr><td><b>Bedecktsamer (Angiospermen)</b> („Same in einem Behälter“)</td><td>ja</td><td>ja, in einer <b>Frucht</b>; sie haben <b>Blüten</b></td><td>Apfelbaum, Weizen, Rose, Eiche, Sonnenblume</td></tr>
</table>
<p>Die <b>Moose</b> haben keine echten Leitgefäße: Darum bleiben sie klein und leben an feuchten Orten. Die Bedecktsamer sind die größte Gruppe (etwa 90 % der Pflanzen) und teilen sich in:</p>
<ul>
<li><b>Einkeimblättrige</b>: Der Same hat 1 Keimblatt, die Blätter haben parallele Adern, die Wurzeln sind büschelig (Weizen, Mais, Reis, Tulpe, Palme);</li>
<li><b>Zweikeimblättrige</b>: Der Same hat 2 Keimblätter, die Blätter haben verzweigte Adern (Bohne, Eiche, Rose, Sonnenblume).</li>
</ul>`
    },
    {
      type: "widget",
      title: "Ordne die Pflanzen ein",
      widget: "classify",
      options: {
        groups: ["Moose", "Farnpflanzen", "Nacktsamer", "Bedecktsamer"],
        items: [["🌱 Moos", 0], ["🌿 Farn", 1], ["🎋 Schachtelhalm", 1], ["🌲 Kiefer", 2], ["🌲 Tanne", 2], ["🍂 Ginkgo", 2], ["🌹 Rose", 3], ["🌾 Weizen", 3], ["🍎 Apfelbaum", 3], ["🌻 Sonnenblume", 3]]
      },
      caption: "Der Ginkgo wirft im Herbst seine Blätter ab, ist aber ein Nacktsamer: Er ist ein echtes „lebendes Fossil“."
    },
    {
      type: "text",
      title: "5. Die Blüte, der Same und die Frucht",
      html: `<p>Die <b>Blüte</b> ist das Organ der <b>geschlechtlichen Fortpflanzung</b> der Bedecktsamer. Von außen nach innen:</p>
<ul>
<li>der <b>Kelch</b>, gebildet aus den grünen <b>Kelchblättern</b>, die die Knospe schützen;</li>
<li>die <b>Krone</b>, gebildet aus den bunten <b>Kronblättern</b>, die Insekten anlocken;</li>
<li>die <b>Staubblätter</b> (männliche Organe): In den <b>Staubbeuteln</b> bildet sich der <b>Pollen</b>;</li>
<li>der <b>Stempel</b> (weibliches Organ): oben die <b>Narbe</b>, unten der <b>Griffel</b> und der <b>Fruchtknoten</b>, der die <b>Samenanlagen</b> enthält.</li>
</ul>
<ol>
<li><b>Bestäubung</b>: Der Pollen gelangt von den Staubbeuteln zur Narbe, getragen vom <b>Wind</b> (Windblütler, wie der Weizen) oder von <b>Tieren</b>, vor allem Insekten wie Bienen (Insektenblütler).</li>
<li><b>Befruchtung</b>: Aus dem Pollenkorn wächst ein Schlauch, der bis zur Samenanlage hinunterreicht; die männliche Zelle verschmilzt mit der weiblichen.</li>
<li>Die befruchtete Samenanlage wird zum <b>Samen</b>, der den <b>Embryo</b> und einen Nahrungsvorrat enthält.</li>
<li>Der Fruchtknoten wird dicker und wird zur <b>Frucht</b>, die die Samen schützt und bei ihrer Verbreitung hilft (von Tieren gefressen, vom Wind getragen wie der „Fallschirm“ des Löwenzahns oder am Fell hängend wie die Klette).</li>
<li><b>Keimung</b>: Mit Wasser und Wärme erwacht der Same und eine neue Pflanze entsteht.</li>
</ol>
<p><b>Vegetative Fortpflanzung</b> (ungeschlechtlich): Viele Pflanzen vermehren sich auch ohne Blüten, aus einem Stück von sich selbst: die <b>Stecklinge</b> (ein Zweig im Wasser bildet Wurzeln), die <b>Ausläufer</b> der Erdbeere, die <b>Knollen</b> der Kartoffel, die <b>Zwiebeln</b> der Küchenzwiebel und der Tulpe. Die neuen Pflanzen sind identische Kopien der Mutter.</p>`
    },
    {
      type: "3d",
      title: "Im Inneren einer Frucht: der Pfirsich in 3D",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#fb923c", label: "Schale (Exokarp)" },
          { r: 0.95, color: "#fde68a", label: "Fruchtfleisch (Mesokarp)" },
          { r: 0.42, color: "#92400e", label: "Stein (Endokarp)" },
          { r: 0.24, color: "#fef3c7", label: "Same (Mandel)" }
        ]
      },
      caption: "Die Frucht ist der herangewachsene Fruchtknoten der Blüte: Schale, Fruchtfleisch und Stein sind die drei Teile ihrer Wand. Im Stein liegt der Same, aus dem ein neuer Pfirsichbaum wachsen kann."
    },
    {
      type: "curiosity",
      title: "Wusstest du schon … der höchste Baum der Welt ist über 116 Meter hoch?",
      html: `<p>Er heißt <b>Hyperion</b> und ist ein <b>Küstenmammutbaum</b> (<i>Sequoia sempervirens</i>) in Kalifornien: Er ist etwa <b>116 Meter</b> hoch, mehr als die Freiheitsstatue mit Sockel (93 m). Sein genauer Standort ist geheim, um ihn vor Touristen zu schützen.</p>
<p>Die größte Einzelblüte dagegen ist die der <b>Rafflesia arnoldii</b> aus den Wäldern von Sumatra und Borneo: Sie kann über einen <b>Meter</b> Durchmesser haben und 10 kg wiegen. Und sie stinkt nach verfaultem Fleisch, um die Fliegen anzulocken, die sie bestäuben!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon … die Entdeckung der Fotosynthese hat 150 Jahre gedauert?",
      html: `<ul>
<li>Um <b>1640</b> pflanzte der Belgier <b>Jan van Helmont</b> eine Weide von 2,3 kg in einen Topf mit 90 kg Erde. Nach 5 Jahren wog der Baum etwa 77 kg, aber die Erde hatte nur 57 Gramm abgenommen! Er schloss (teilweise falsch), die Pflanze sei nur dank des Wassers gewachsen.</li>
<li>Im Jahr <b>1771</b> entdeckte der Engländer <b>Joseph Priestley</b>, dass ein Minzpflänzchen unter einer Glasglocke die von einer Kerze verbrauchte Luft „reparierte“, sodass eine Maus überleben konnte.</li>
<li>Im Jahr <b>1779</b> bewies der Niederländer <b>Jan Ingenhousz</b>, dass man <b>Licht</b> braucht und dass nur die grünen Teile Sauerstoff erzeugen.</li>
</ul>
<p>Heute wissen wir, dass die Masse der Weide vor allem vom <b>Kohlenstoffdioxid der Luft</b> stammte: Bäume bestehen großenteils aus Luft!</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Pflanzen zu verstehen",
      intro: "Wenn dir das klassische Schema nicht reicht, versuche es mit einem Vergleich, mit der Geschichte oder mit einem Zuordnungsspiel.",
      tabs: [
        {
          label: "🏭 Die Pflanze als Fabrik",
          html: `<table>
<tr><th>Teil</th><th>In der Fabrik ist es …</th></tr>
<tr><td>Wurzel</td><td>die Wasserleitung und das Lager</td></tr>
<tr><td>Stängel (Xylem und Phloem)</td><td>die Förderbänder und Rohre</td></tr>
<tr><td>Blatt</td><td>die Produktionsabteilung</td></tr>
<tr><td>Chlorophyll</td><td>die Solarpaneele</td></tr>
<tr><td>Spaltöffnungen</td><td>die Fenster, damit Luft hinein- und die „Abgase“ (Sauerstoff) hinausgelangen</td></tr>
<tr><td>Glukose und Stärke</td><td>das fertige Produkt und die Vorräte</td></tr>
<tr><td>Blüte und Frucht</td><td>die Abteilung, die neue Fabriken baut</td></tr>
</table>`
        },
        {
          label: "🍳 Das Rezept der Fotosynthese",
          html: `<p>Stell dir die Fotosynthese als <b>Rezept</b> vor:</p>
<ul>
<li><b>Zutaten</b>: 6 „Löffel“ Kohlenstoffdioxid + 6 Löffel Wasser.</li>
<li><b>Herd</b>: das Sonnenlicht.</li>
<li><b>Koch</b>: das Chlorophyll in den Chloroplasten.</li>
<li><b>Ergebnis</b>: 1 Torte aus Glukose + 6 „Luftballons“ Sauerstoff, die davonfliegen.</li>
</ul>
<p>Zähle die Atome: Vorher gibt es 6 C, 12 H und 18 O; nachher, in der Glukose C₆H₁₂O₆ und in den 6 O₂, wieder 6 C, 12 H und 6 + 12 = 18 O. In der Küche wie in der Chemie <b>geht nichts verloren und nichts entsteht neu</b> (Lavoisier)!</p>`
        },
        {
          label: "🧪 Das CO₂-Molekül in 3D",
          html: `<p>Das <b>Kohlenstoffdioxid</b> (CO₂) ist die „unsichtbare“ Zutat der Fotosynthese: ein Kohlenstoffatom (schwarz), gebunden an zwei Sauerstoffatome (rot), in einer geraden Linie. Die Pflanzen „zerlegen“ diese Moleküle und benutzen den Kohlenstoff, um Zucker, Holz und Blätter aufzubauen.</p>`,
          scene: "molecule",
          options: {
            atoms: [
              { x: 0, y: 0, z: 0, r: 0.45, color: "#334155", label: "C" },
              { x: 1.16, y: 0, z: 0, r: 0.45, color: "#ef4444", label: "O" },
              { x: -1.16, y: 0, z: 0, r: 0.45, color: "#ef4444", label: "O" }
            ],
            bonds: [[0, 1], [0, 2]]
          }
        },
        {
          label: "🌸 Ordne die Teile der Blüte zu",
          html: `<p>Ein Spiel, um sich die Teile der Blüte einzuprägen und was aus ihnen wird.</p>`,
          widget: "match",
          options: { pairs: [["Kronblätter", "locken die Insekten an"], ["Staubbeutel", "bilden den Pollen"], ["Narbe", "empfängt den Pollen"], ["Fruchtknoten", "wird zur Frucht"], ["Samenanlage", "wird zum Samen"], ["Kelchblätter", "schützen die Knospe"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Pflanzen: Tippe und entdecke das Warum",
      nodes: [
        { id: "pianta", label: "Pflanze", x: 50, y: 5, color: "#16a34a", html: "Mehrzelliger, eukaryotischer, autotropher Organismus.", why: "Die ersten Landpflanzen erschienen vor etwa 470 Millionen Jahren, als Nachkommen grüner Algen. Das Verlassen des Wassers erforderte Wurzeln, Gefäße und eine Haut (Kutikula), die die Pflanze nicht austrocknen ließ." },
        { id: "radice", label: "Wurzel", x: 15, y: 28, color: "#a16207", html: "Verankert die Pflanze und nimmt Wasser und Salze auf.", why: "Auf dem Festland ist das Wasser im Boden: Man brauchte ein Organ, um es zu erreichen. Die Wurzelhaare vergrößern die aufnehmende Oberfläche enorm." },
        { id: "fusto", label: "Stängel und Gefäße", x: 38, y: 28, color: "#65a30d", html: "Trägt und transportiert: Xylem (Rohsaft) und Phloem (Nährsaft).", why: "Um im Wettbewerb um Licht zu bestehen, mussten Pflanzen in die Höhe wachsen: Man brauchte eine starre Stütze (das Holz, aus Zellulose und Lignin) und Röhren, um das Wasser bis nach oben zu bringen." },
        { id: "foglia", label: "Blatt", x: 62, y: 28, color: "#22c55e", html: "Ort der Fotosynthese; hat die Spaltöffnungen.", why: "Es ist breit und dünn, um möglichst viel Licht einzufangen und Kohlenstoffdioxid aufzunehmen; die Spaltöffnungen schließen sich bei zu großer Hitze, um kein Wasser zu verlieren." },
        { id: "foto", label: "Fotosynthese", x: 62, y: 54, color: "#facc15", html: "CO₂ + H₂O + Licht → Glukose + O₂.", why: "Schrittweise entdeckt: van Helmont (1640), Priestley (1771), Ingenhousz (1779). 1950 entdeckte Melvin Calvin mit radioaktivem Kohlenstoff ihre chemischen Reaktionen (Nobelpreis 1961)." },
        { id: "ossigeno", label: "Sauerstoff in der Luft", x: 90, y: 54, color: "#0ea5e9", html: "Etwa 21 % der Luft.", why: "Fast der gesamte Sauerstoff der Atmosphäre wurde durch die Fotosynthese von Cyanobakterien, Algen und Pflanzen erzeugt, beginnend vor etwa 2,4 Milliarden Jahren." },
        { id: "fiore", label: "Blüte", x: 15, y: 60, color: "#ec4899", html: "Fortpflanzungsorgan der Bedecktsamer.", why: "Blüten erschienen vor etwa 130 Millionen Jahren, zur Zeit der Dinosaurier. Die bunten Kronblätter und der Nektar sind ein „Abkommen“ mit den Insekten: Nahrung im Tausch gegen den Transport des Pollens." },
        { id: "seme", label: "Same und Frucht", x: 35, y: 82, color: "#f97316", html: "Der Same schützt den Embryo; die Frucht schützt und verbreitet die Samen.", why: "Der Same erlaubt der Pflanze, auf den richtigen Moment zum Keimen zu warten, sogar jahrelang. Die süße Frucht ist eine „Belohnung“ für Tiere, die beim Fressen die Samen weit verstreuen." },
        { id: "gruppi", label: "Einteilung", x: 75, y: 84, color: "#6366f1", html: "Moose, Farnpflanzen, Nacktsamer, Bedecktsamer.", why: "Sie spiegelt die Entwicklungsgeschichte wider: zuerst Pflanzen ohne Gefäße, dann mit Gefäßen, aber ohne Samen, dann mit nackten Samen, schließlich mit Blüten und Früchten." }
      ],
      edges: [
        ["pianta", "radice", "hat"],
        ["pianta", "fusto", "hat"],
        ["pianta", "foglia", "hat"],
        ["radice", "fusto", "Wasser steigt in den Gefäßen"],
        ["foglia", "foto", "Ort der"],
        ["foto", "ossigeno", "erzeugt"],
        ["pianta", "fiore", "pflanzt sich fort mit der"],
        ["fiore", "seme", "nach der Befruchtung"],
        ["seme", "gruppi", "das Vorhandensein von Samen teilt die"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Fotosynthese und Fortpflanzung",
      questions: [
        { type: "mc", q: "Welches Gas erzeugen die Pflanzen bei der Fotosynthese?", options: ["Kohlenstoffdioxid", "Sauerstoff", "Stickstoff", "Methan"], answer: 1, explain: "Die Fotosynthese setzt Sauerstoff frei." },
        { type: "mc", q: "Nach der Befruchtung wird der Fruchtknoten zu …", options: ["dem Samen", "der Frucht", "dem Pollen", "dem Blatt"], answer: 1, explain: "Der Fruchtknoten wird zur Frucht, die Samenanlagen zu den Samen." },
        { type: "tf", q: "Farne pflanzen sich mit Samen fort.", answer: false, explain: "Farne (Farnpflanzen) pflanzen sich mit Sporen fort." }
      ]
    },
    {
      type: "remember",
      title: "Zum Merken",
      html: `<ul>
<li>Pflanzen sind <b>autotroph</b>: Sie betreiben <b>Fotosynthese</b> in den Chloroplasten dank des Chlorophylls.</li>
<li><b>Wurzel</b> (nimmt auf), <b>Stängel</b> (trägt und transportiert), <b>Blatt</b> (Fotosynthese, Spaltöffnungen).</li>
<li>Fotosynthese: <b>CO₂ + H₂O + Licht → Glukose + O₂</b>.</li>
<li>Blüte → Bestäubung → Befruchtung → <b>Same</b> (aus der Samenanlage) und <b>Frucht</b> (aus dem Fruchtknoten).</li>
<li>Gruppen: <b>Moose, Farnpflanzen</b> (Sporen); <b>Nacktsamer, Bedecktsamer</b> (Samen).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Chlorophyll", d: "Grüner Farbstoff der Chloroplasten, der die Energie des Lichts einfängt." },
    { t: "Fotosynthese", d: "Vorgang, bei dem Pflanzen mithilfe von Licht aus CO₂ und Wasser Glukose und Sauerstoff herstellen." },
    { t: "Spaltöffnungen", d: "Kleine Öffnungen im Blatt für den Austausch von Gasen und Wasser." },
    { t: "Xylem", d: "Gefäße, die den Rohsaft (Wasser und Salze) von den Wurzeln zu den Blättern transportieren." },
    { t: "Phloem", d: "Gefäße, die den Nährsaft (Zucker) verteilen." },
    { t: "Transpiration", d: "Verdunstung von Wasser aus den Blättern." },
    { t: "Bestäubung", d: "Transport des Pollens von den Staubbeuteln zur Narbe." },
    { t: "Keimblatt", d: "Embryonales Blatt des Samens, das oft Speicherstoffe enthält." },
    { t: "Bedecktsamer", d: "Pflanzen mit Blüten und von einer Frucht umschlossenen Samen." },
    { t: "Nacktsamer", d: "Pflanzen mit nackten Samen, oft in Zapfen getragen." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Wo findet die Fotosynthese statt?", options: ["In den Mitochondrien der Wurzeln", "In den Chloroplasten der Blätter", "Im Zellkern der Blüte"], answer: 1, explain: "In den Chloroplasten, vor allem in den Zellen der Blätter." },
      { type: "order", q: "Bringe die Schritte der Fortpflanzung einer Blütenpflanze in die richtige Reihenfolge.", items: ["Bestäubung", "Befruchtung", "Bildung von Same und Frucht", "Verbreitung der Samen", "Keimung"], explain: "Der Pollen gelangt zur Narbe, befruchtet die Samenanlage, Same und Frucht bilden sich, die Samen werden verbreitet und keimen." },
      { type: "mc", q: "Welche dieser Zutaten gehört NICHT zur Fotosynthese?", options: ["Licht", "Wasser", "Kohlenstoffdioxid", "Sauerstoff"], answer: 3, explain: "Sauerstoff ist ein Produkt, keine Zutat." },
      { type: "tf", q: "Pflanzen atmen nur nachts.", answer: false, explain: "Pflanzen atmen immer, Tag und Nacht; tagsüber erzeugt die Fotosynthese aber mehr Sauerstoff, als verbraucht wird." },
      { type: "text", q: "Wie heißen die Gefäße, die den Rohsaft von den Wurzeln zu den Blättern leiten?", answer: ["xylem", "das xylem", "Xylem", "Das Xylem", "Holzteil", "Gefäße"], explain: "Das Xylem (Holzteil)." },
      { type: "mc", q: "Die Kiefer ist …", options: ["ein Moos", "eine Farnpflanze", "ein Nacktsamer", "ein Bedecktsamer"], answer: 2, explain: "Die Kiefer hat nackte Samen in den Zapfen: Sie ist ein Nacktsamer." },
      { type: "mc", q: "Welcher Teil der Blüte bildet den Pollen?", options: ["Die Narbe", "Der Staubbeutel", "Der Fruchtknoten", "Das Kelchblatt"], answer: 1, explain: "Der Pollen bildet sich in den Staubbeuteln der Staubblätter." },
      { type: "tf", q: "Der Weizen ist eine einkeimblättrige Pflanze mit parallelen Blattadern.", answer: true, explain: "Der Weizen hat ein Keimblatt, Blätter mit parallelen Adern und Büschelwurzeln." },
      { type: "mc", q: "Die Kartoffel, die wir essen, ist …", options: ["eine Wurzel", "eine Frucht", "eine Knolle (unterirdischer Stängel)", "ein Same"], answer: 2, explain: "Sie ist eine Knolle, ein unterirdischer Stängel voller Stärke, der auch zur vegetativen Fortpflanzung dient." },
      { type: "num", q: "Wie viele O₂-Moleküle entstehen bei der Fotosynthese pro Glukosemolekül?", answer: 6, explain: "6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂." },
      { type: "mc", q: "Wer entdeckte, dass Pflanzen nur im Licht Sauerstoff erzeugen?", options: ["Jan Ingenhousz", "Carl von Linné", "Galileo Galilei"], answer: 0, explain: "Jan Ingenhousz, im Jahr 1779." },
      { type: "text", q: "Wie heißen die Öffnungen im Blatt, die den Gasaustausch regeln?", answer: ["spaltöffnungen", "die spaltöffnungen", "Spaltöffnungen", "Stomata", "Stoma", "stomata", "Die Spaltöffnungen"], explain: "Die Spaltöffnungen (Stomata)." }
    ]
  }
});
