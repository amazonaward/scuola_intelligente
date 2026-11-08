TOPIC('de', {
  id: "m1-sci-cellula",
  title: "Die Zelle",
  intro: "Alle Lebewesen, vom Bakterium bis zum Wal, bestehen aus <b>Zellen</b>. Die Zelle ist die kleinste Einheit, die leben kann: Sie ernährt sich, erzeugt Energie, wächst und vermehrt sich. Gehen wir hinein und erkunden sie!",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Die Zelltheorie",
      html: `<p>Im Jahr <b>1665</b> beobachtete der englische Wissenschaftler <b>Robert Hooke</b> unter dem Mikroskop eine dünne Scheibe Kork und sah viele kleine „Kämmerchen“: Er nannte sie <b>Zellen</b> (vom lateinischen <i>cellula</i>, kleine Kammer).</p>
<p>Im 19. Jahrhundert formulierten die Wissenschaftler Schleiden, Schwann und Virchow die <b>Zelltheorie</b>:</p>
<ol>
<li>Alle Lebewesen bestehen aus einer oder mehreren <b>Zellen</b>;</li>
<li>die Zelle ist die <b>Grundeinheit</b> des Lebens: Sie ist der kleinste Teil, der allein leben kann;</li>
<li>jede Zelle entsteht aus einer <b>anderen Zelle</b>, die sich teilt.</li>
</ol>
<p>Organismen, die aus nur einer Zelle bestehen, heißen <b>einzellig</b> (Bakterien, Amöben, Hefen); solche, die aus sehr vielen Zellen bestehen, heißen <b>mehrzellig</b> (Pflanzen, Tiere, wir!).</p>`
    },
    {
      type: "text",
      title: "Wie klein ist eine Zelle?",
      html: `<p>Die meisten Zellen messen zwischen <b>10 und 100 Mikrometern</b>. Ein Mikrometer (µm) ist ein Tausendstel Millimeter!</p>
<p>Um sie zu sehen, braucht man das <b>Lichtmikroskop</b>, das bis etwa 1.000–1.500-fach vergrößert. Um die kleinsten Teile zu beobachten, benutzt man das <b>Elektronenmikroskop</b>, das sogar mehr als 100.000-fach vergrößert.</p>
<p>Es gibt aber Ausnahmen: Das <b>Eigelb</b> eines Hühnereis ist eine einzige riesige Zelle, und manche Nervenzellen (Neuronen) sind länger als einen Meter!</p>`
    },
    {
      type: "text",
      title: "Die drei Grundbestandteile",
      html: `<p>Fast alle Zellen haben drei Hauptbestandteile:</p>
<ul>
<li><b>Zellmembran (oder Plasmamembran)</b>: eine dünne „Hülle“, die die Zelle umgibt. Sie entscheidet, was hineinkommt (Nährstoffe, Wasser, Sauerstoff) und was hinausgeht (Abfallstoffe). Sie ist wie die <b>Haustür mit einem Pförtner</b>.</li>
<li><b>Zellplasma (Zytoplasma)</b>: eine gelartige Substanz, die vor allem aus Wasser besteht und die Zelle ausfüllt. Darin schwimmen die <b>Organellen</b>, kleine „Organe“ der Zelle, jedes mit einer Aufgabe.</li>
<li><b>Zellkern</b>: die „Kommandozentrale“. Er enthält die <b>DNA</b>, die Anweisungen, damit die Zelle funktioniert und neue Zellen gebaut werden. In seinem Inneren liegt das <b>Kernkörperchen</b>, wo die Ribosomen gebaut werden.</li>
</ul>`
    },
    {
      type: "3d",
      title: "Im Inneren der Zelle in 3D",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#f472b6", label: "Zellmembran" },
          { r: 0.95, color: "#fde68a", label: "Zellplasma" },
          { r: 0.42, color: "#8b5cf6", label: "Zellkern (Kernhülle)" },
          { r: 0.16, color: "#1e1b4b", label: "Kernkörperchen" }
        ]
      },
      caption: "Drehe das Modell: Das herausgeschnittene Stück zeigt die Membran, das Zellplasma, den Zellkern und in der Mitte das Kernkörperchen."
    },
    {
      type: "text",
      title: "Die Organellen: eine kleine Stadt",
      html: `<p>Wir können uns die Zelle wie eine <b>Stadt</b> vorstellen, in der jede Organelle ihre eigene Arbeit hat:</p>
<table>
<tr><th>Organelle</th><th>Was sie tut</th><th>In der Stadt ist sie …</th></tr>
<tr><td><b>Zellkern</b></td><td>Enthält die DNA und steuert die Zelle</td><td>das Rathaus</td></tr>
<tr><td><b>Mitochondrien</b></td><td>Erzeugen Energie durch die Zellatmung (sie verbrauchen Zucker und Sauerstoff)</td><td>das Kraftwerk</td></tr>
<tr><td><b>Ribosomen</b></td><td>Bauen die Proteine auf</td><td>die Fabriken</td></tr>
<tr><td><b>Endoplasmatisches Retikulum</b></td><td>Netz aus Kanälen, das die Stoffe transportiert</td><td>die Straßen</td></tr>
<tr><td><b>Golgi-Apparat</b></td><td>Bereitet Stoffe vor, „verpackt“ und verschickt sie</td><td>das Postamt</td></tr>
<tr><td><b>Lysosomen</b></td><td>Verdauen Stoffe und Abfälle</td><td>die Müllabfuhr</td></tr>
<tr><td><b>Vakuolen</b></td><td>Speichern Wasser und Stoffe</td><td>die Lagerhäuser</td></tr>
</table>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Zwiebelzellen beobachten",
      html: `<p>Mit einem Schulmikroskop kannst du echte Pflanzenzellen sehen:</p>
<ol>
<li>Schneide eine Zwiebel auf und ziehe mit einer Pinzette das <b>durchsichtige Häutchen</b> ab, das zwischen den Schichten liegt.</li>
<li>Lege es mit einem Tropfen Wasser auf einen Objektträger.</li>
<li>Gib einen Tropfen <b>Jodlösung</b> (oder Methylenblau) dazu, um die Zellkerne zu färben.</li>
<li>Decke es mit einem Deckglas ab und achte darauf, dass keine Blasen entstehen.</li>
<li>Beobachte zuerst mit der kleinsten Vergrößerung, dann mit der größten.</li>
</ol>
<p>Du siehst viele <b>ziegelförmige</b> Zellen, ordentlich angeordnet wie in einer Mauer, jede mit einem dunklen Punkt: dem <b>Zellkern</b>. Die regelmäßige Form kommt von der <b>Zellwand</b>.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, sich die Zelle vorzustellen",
      intro: "Die Zelle ist mit bloßem Auge unsichtbar: Um sie zu verstehen, hilft ein Vergleich mit etwas, das du kennst. Such dir den Vergleich aus, der für dich am besten passt.",
      tabs: [
        {
          label: "🏙️ Die Zelle als Stadt",
          html: "<table><tr><th>Organelle</th><th>In der Stadt ist sie …</th><th>Was sie tut</th></tr><tr><td>Zellmembran</td><td>die Stadtmauer mit den Toren und dem Zoll</td><td>entscheidet, wer hinein- und hinausdarf</td></tr><tr><td>Zellkern</td><td>das Rathaus mit dem Archiv</td><td>bewahrt die DNA auf, die „Anleitung“ der Stadt</td></tr><tr><td>Mitochondrien</td><td>die Kraftwerke</td><td>erzeugen Energie aus Nahrung und Sauerstoff</td></tr><tr><td>Ribosomen</td><td>die kleinen Werkstätten</td><td>bauen die Proteine</td></tr><tr><td>Endoplasmatisches Retikulum</td><td>die Straßen und Fließbänder</td><td>transportiert und verarbeitet Stoffe</td></tr><tr><td>Golgi-Apparat</td><td>das Postamt</td><td>verpackt und verschickt</td></tr><tr><td>Lysosomen</td><td>die Müllabfuhr</td><td>verdauen Abfälle und alte Teile</td></tr><tr><td>Vakuole</td><td>der Tank und das Lagerhaus</td><td>speichert Wasser und Stoffe</td></tr><tr><td>Chloroplasten (nur Pflanzen)</td><td>die Solarpaneele</td><td>verwandeln Licht in Nahrung</td></tr><tr><td>Zellwand (nur Pflanzen)</td><td>die Steinmauern</td><td>geben starre Form und Schutz</td></tr></table>"
        },
        {
          label: "🍪 Die Keksfabrik",
          html: "<p>Stell dir eine Keksfabrik vor:</p><ul><li>Im <b>Büro des Direktors</b> (Zellkern) liegt das Rezeptbuch (DNA).</li><li>Die Rezepte werden kopiert und zu den <b>Öfen</b> (Ribosomen) gebracht, wo die Kekse (Proteine) gebacken werden.</li><li>Die Kekse wandern auf <b>Förderbändern</b> (endoplasmatisches Retikulum) zur <b>Verpackungsabteilung</b> (Golgi), die sie einpackt und nach draußen verschickt.</li><li>Der <b>Generator</b> (Mitochondrien) versorgt die ganze Fabrik mit Strom.</li><li>Das <b>Tor mit dem Wächter</b> (Membran) kontrolliert die eingehenden und ausgehenden Waren.</li></ul><p>Wenn im Rezeptbuch ein Fehler steht, werden die Kekse falsch gebacken: Darum ist die DNA im Zellkern so gut geschützt.</p>"
        },
        {
          label: "🔬 Eine Tierzelle in 3D",
          html: "<p>Hier ein 3D-Modell: Die große Kugel in der Mitte ist der <b>Zellkern</b> (K), die länglichen roten sind die <b>Mitochondrien</b> (M), die gelben der <b>Golgi-Apparat</b> (G), die kleinen blauen die <b>Lysosomen</b> (L) und die violetten Pünktchen die <b>Ribosomen</b>. Drehe sie: Du siehst, dass die Organellen in alle Richtungen verteilt im Zellplasma schwimmen.</p>",
          scene: "molecule",
          options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.75, color: "#7c3aed", label: "K" }, { x: 1.3, y: 0.4, z: 0.3, r: 0.3, color: "#ef4444", label: "M" }, { x: -1.2, y: -0.5, z: 0.6, r: 0.3, color: "#ef4444", label: "M" }, { x: 0.3, y: -1.3, z: -0.5, r: 0.3, color: "#ef4444", label: "M" }, { x: -0.4, y: 1.2, z: -0.8, r: 0.3, color: "#ef4444", label: "M" }, { x: 1.0, y: -0.7, z: 1.0, r: 0.35, color: "#f59e0b", label: "G" }, { x: -1.1, y: 0.9, z: 0.7, r: 0.2, color: "#3b82f6", label: "L" }, { x: 0.9, y: 1.0, z: -0.9, r: 0.2, color: "#3b82f6", label: "L" }, { x: 0.6, y: 0.8, z: 0.9, r: 0.08, color: "#a855f7" }, { x: -0.8, y: -0.9, z: -0.6, r: 0.08, color: "#a855f7" }, { x: 1.4, y: -0.2, z: -0.6, r: 0.08, color: "#a855f7" }, { x: -1.4, y: 0.1, z: -0.3, r: 0.08, color: "#a855f7" }, { x: 0.1, y: 0.6, z: 1.4, r: 0.08, color: "#a855f7" }, { x: -0.3, y: -0.7, z: 1.3, r: 0.08, color: "#a855f7" } ], bonds: [] }
        },
        {
          label: "🧽 Hookes Kork",
          html: "<p>Im Jahr 1665 beobachtete Robert Hooke mit einem selbstgebauten Mikroskop eine hauchdünne Scheibe <b>Kork</b>. Er sah viele kleine leere Kammern, wie die Zellen der Mönche (lateinisch <i>cellula</i> = kleine Kammer). In Wirklichkeit sah er nur die Wände toter Pflanzenzellen.</p><p>Du kannst es auch nachmachen, mit einer starken Lupe und einem dünn geschnittenen Korken: Du siehst ein wabenförmiges Netz.</p>",
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="240" fill="#fef3c7"/><g fill="#fde68a" stroke="#92400e" stroke-width="4"><polygon points="60,40 100,20 140,40 140,80 100,100 60,80"/><polygon points="140,40 180,20 220,40 220,80 180,100 140,80"/><polygon points="220,40 260,20 300,40 300,80 260,100 220,80"/><polygon points="100,100 140,80 180,100 180,140 140,160 100,140"/><polygon points="180,100 220,80 260,100 260,140 220,160 180,140"/><polygon points="260,100 300,80 340,100 340,140 300,160 260,140"/><polygon points="60,160 100,140 140,160 140,200 100,220 60,200"/><polygon points="140,160 180,140 220,160 220,200 180,220 140,200"/><polygon points="220,160 260,140 300,160 300,200 260,220 220,200"/></g><text x="470" y="100" font-size="20" text-anchor="middle" fill="#78350f" font-weight="bold">Der Kork</text><text x="470" y="130" font-size="18" text-anchor="middle" fill="#78350f">unter dem Mikroskop</text><text x="470" y="160" font-size="18" text-anchor="middle" fill="#78350f">(Hooke, 1665)</text></svg>`
        },
        {
          label: "📏 Wie klein ist sie?",
          html: "<p>Eine Hautzelle misst etwa <b>30 Mikrometer</b> (0,03 mm). Man bräuchte etwa <b>30 in einer Reihe, um 1 Millimeter zu erreichen</b>.</p><p>Wenn wir eine Zelle so groß machen würden wie dein <b>Klassenzimmer</b>, wäre der Zellkern so groß wie ein Lehrerpult und ein Mitochondrium so groß wie ein Federmäppchen. Dein Körper, auf dieselbe Weise vergrößert, wäre mehr als 300 Kilometer hoch!</p><p>Im menschlichen Körper gibt es etwa <b>37 Billionen</b> Zellen.</p>"
        }
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Teile der Zelle",
      questions: [
        { type: "mc", q: "Welcher Teil der Zelle enthält die DNA?", options: ["Die Membran", "Das Zellplasma", "Der Zellkern", "Die Vakuole"], answer: 2, explain: "Der Zellkern enthält die DNA, mit den Anweisungen für das Leben der Zelle." },
        { type: "mc", q: "Welche Organellen erzeugen Energie?", options: ["Ribosomen", "Mitochondrien", "Lysosomen", "Vakuolen"], answer: 1, explain: "Die Mitochondrien sind die Kraftwerke: Sie betreiben die Zellatmung." },
        { type: "tf", q: "Einzellige Organismen bestehen aus nur einer Zelle.", answer: true, explain: "Zum Beispiel Bakterien, Amöben und Hefen." },
        { type: "text", q: "Wie heißt der Wissenschaftler, der 1665 die Kämmerchen im Kork „Zellen“ nannte?", answer: ["hooke", "robert hooke", "Hooke", "Robert Hooke"], explain: "Es war Robert Hooke, der den Kork unter dem Mikroskop beobachtete." }
      ]
    },
    {
      type: "text",
      title: "Tierzelle und Pflanzenzelle",
      html: `<p>Die Zellen von Tieren und die von Pflanzen ähneln sich, haben aber einige wichtige Unterschiede.</p>
<p>Die <b>Pflanzenzelle</b> hat zusätzlich:</p>
<ul>
<li>die <b>Zellwand</b>, eine starre Hülle aus <b>Zellulose</b> außerhalb der Membran: Sie gibt Form und Halt (darum stehen Pflanzen auch ohne Skelett aufrecht);</li>
<li>die <b>Chloroplasten</b>, grüne Organellen, die <b>Chlorophyll</b> enthalten und die <b>Fotosynthese</b> betreiben: Sie verwandeln Sonnenlicht, Wasser und Kohlenstoffdioxid in Zucker und Sauerstoff;</li>
<li>eine <b>große zentrale Vakuole</b>, die mit Wasser gefüllt ist und die Zelle „prall“ hält.</li>
</ul>
<p>Die <b>Tierzelle</b> hat keine Wand und keine Chloroplasten, hat eine eher <b>runde und veränderliche</b> Form und kleine Vakuolen.</p>
<table>
<tr><th></th><th>Tier</th><th>Pflanze</th></tr>
<tr><td>Membran, Zellplasma, Zellkern</td><td>✔️</td><td>✔️</td></tr>
<tr><td>Mitochondrien</td><td>✔️</td><td>✔️</td></tr>
<tr><td>Zellwand</td><td>❌</td><td>✔️</td></tr>
<tr><td>Chloroplasten</td><td>❌</td><td>✔️</td></tr>
<tr><td>Große Vakuole</td><td>❌</td><td>✔️</td></tr>
<tr><td>Form</td><td>rundlich, veränderlich</td><td>regelmäßig, oft rechteckig</td></tr>
</table>`
    },
    {
      type: "svg",
      title: "Tierzelle und Pflanzenzelle im Vergleich",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#ffffff"/>
<text x="160" y="28" font-size="18" text-anchor="middle" font-weight="bold" fill="#be185d">Tierzelle</text>
<ellipse cx="160" cy="155" rx="130" ry="105" fill="#fef3c7" stroke="#db2777" stroke-width="4"/>
<circle cx="150" cy="150" r="40" fill="#c4b5fd" stroke="#6d28d9" stroke-width="3"/>
<circle cx="155" cy="145" r="13" fill="#4c1d95"/>
<ellipse cx="230" cy="110" rx="22" ry="11" fill="#fb923c" stroke="#c2410c" stroke-width="2"/>
<path d="M214 110 q8 -8 16 0 q8 8 16 0" fill="none" stroke="#c2410c" stroke-width="2"/>
<ellipse cx="90" cy="210" rx="22" ry="11" fill="#fb923c" stroke="#c2410c" stroke-width="2"/>
<circle cx="230" cy="200" r="10" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<g fill="#334155"><circle cx="100" cy="110" r="3"/><circle cx="110" cy="100" r="3"/><circle cx="200" cy="230" r="3"/><circle cx="215" cy="160" r="3"/></g>
<text x="480" y="28" font-size="18" text-anchor="middle" font-weight="bold" fill="#15803d">Pflanzenzelle</text>
<rect x="350" y="45" width="260" height="225" rx="8" fill="#dcfce7" stroke="#166534" stroke-width="8"/>
<rect x="360" y="55" width="240" height="205" rx="5" fill="#fefce8" stroke="#db2777" stroke-width="3"/>
<rect x="440" y="95" width="120" height="120" rx="20" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
<circle cx="400" cy="100" r="28" fill="#c4b5fd" stroke="#6d28d9" stroke-width="3"/>
<circle cx="403" cy="97" r="9" fill="#4c1d95"/>
<g fill="#22c55e" stroke="#14532d" stroke-width="2">
<ellipse cx="390" cy="200" rx="18" ry="10"/><ellipse cx="580" cy="80" rx="16" ry="9"/><ellipse cx="420" cy="245" rx="16" ry="9"/><ellipse cx="585" cy="235" rx="16" ry="9"/>
</g>
<ellipse cx="530" cy="245" rx="18" ry="9" fill="#fb923c" stroke="#c2410c" stroke-width="2"/>
</svg>`,
      caption: "In der Pflanzenzelle sieht man die Zellwand (dicker grüner Rand), die Chloroplasten (grün) und die große Vakuole (hellblau)."
    },
    {
      type: "widget",
      title: "Erkenne die Teile der Pflanzenzelle",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
<rect width="400" height="300" fill="#ffffff"/>
<rect x="40" y="30" width="320" height="240" rx="10" fill="#dcfce7" stroke="#166534" stroke-width="10"/>
<rect x="52" y="42" width="296" height="216" rx="6" fill="#fefce8" stroke="#db2777" stroke-width="3"/>
<rect x="170" y="80" width="140" height="140" rx="24" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
<circle cx="105" cy="95" r="32" fill="#c4b5fd" stroke="#6d28d9" stroke-width="3"/>
<circle cx="108" cy="92" r="10" fill="#4c1d95"/>
<ellipse cx="100" cy="210" rx="22" ry="12" fill="#22c55e" stroke="#14532d" stroke-width="2"/>
<ellipse cx="140" cy="240" rx="20" ry="9" fill="#fb923c" stroke="#c2410c" stroke-width="2"/>
</svg>`,
        spots: [
          { x: 44, y: 150, label: "Zellwand" },
          { x: 58, y: 60, label: "Zellmembran" },
          { x: 105, y: 120, label: "Zellkern" },
          { x: 240, y: 150, label: "Vakuole" },
          { x: 100, y: 210, label: "Chloroplast" },
          { x: 140, y: 240, label: "Mitochondrium" },
          { x: 150, y: 160, label: "Zellplasma" }
        ]
      },
      caption: "Klicke auf jeden Punkt und wähle den richtigen Namen."
    },
    {
      type: "curiosity",
      title: "Wie viele Zellen hast du?",
      html: `<p>Der Körper eines Erwachsenen besteht aus etwa <b>30 Billionen Zellen</b> (30 gefolgt von 12 Nullen)! Und in unserem Darm leben noch mehr freundliche Bakterien.</p>
<p>Nicht alle Zellen leben gleich lang: Die <b>roten Blutkörperchen</b> leben etwa 120 Tage, die Hautzellen einige Wochen, während viele <b>Neuronen</b> im Gehirn ein ganzes Leben lang halten. Jede Sekunde entstehen in deinem Körper Millionen neuer Zellen!</p>`
    },
    {
      type: "curiosity",
      title: "Für jede Arbeit eine Zelle",
      html: `<p>In mehrzelligen Organismen sind die Zellen <b>spezialisiert</b>: Sie haben je nach Aufgabe verschiedene Formen.</p>
<ul>
<li>Die <b>Neuronen</b> haben lange „Fäden“, um elektrische Botschaften zu übertragen.</li>
<li>Die <b>roten Blutkörperchen</b> sind abgeflachte Scheibchen ohne Zellkern, um mehr Sauerstoff zu transportieren.</li>
<li>Die <b>Muskelzellen</b> sind lang und können sich verkürzen.</li>
</ul>
<p>Gleiche Zellen bilden ein <b>Gewebe</b>, verschiedene Gewebe bilden ein <b>Organ</b> (wie das Herz), mehrere Organe bilden ein <b>Organsystem</b>, und die Organsysteme zusammen bilden den <b>Organismus</b>.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Warum welkt der Salat?",
      html: `<p>Wenn du Salat außerhalb des Kühlschranks liegen lässt, wird er schlaff. Warum?</p>
<p>Die Pflanzenzellen halten die Pflanze dank der <b>großen, mit Wasser gefüllten Vakuole</b> „gespannt“, die gegen die Zellwand drückt, wie die Luft in einem Ball.</p>
<p>Wenn das Blatt Wasser verliert, leeren sich die Vakuolen und die Zellen „fallen zusammen“: Das Blatt welkt. Wenn du es eine Weile in kaltes Wasser legst, nehmen die Zellen wieder Wasser auf und das Blatt wird wieder knackig!</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Tier oder Pflanze?",
      questions: [
        { type: "mc", q: "Welche Struktur gibt es NUR in der Pflanzenzelle?", options: ["Zellkern", "Membran", "Chloroplast", "Mitochondrium"], answer: 2, explain: "Die Chloroplasten, die die Fotosynthese betreiben, gibt es nur in Pflanzenzellen (und in Algen)." },
        { type: "tf", q: "Auch Pflanzenzellen haben Mitochondrien.", answer: true, explain: "Ja: Auch Pflanzen atmen und erzeugen Energie mit den Mitochondrien." },
        { type: "mc", q: "Woraus besteht die Zellwand der Pflanzen?", options: ["Zellulose", "Fett", "Knochen", "Chlorophyll"], answer: 0, explain: "Die Wand besteht aus Zellulose, demselben Stoff, aus dem man Papier macht." }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte: Wie die Zelltheorie entstand",
      nodes: [
        { id: "lenti", label: "Linsen und Mikroskope", x: 50, y: 6, color: "#64748b", html: "Geräte, die vergrößern, was das Auge nicht sieht.", why: "Die niederländischen Brillenmacher entdeckten um 1590, dass das Bild stark vergrößert wird, wenn man zwei Linsen hintereinander hält. Ohne dieses Gerät hätte nie jemand eine Zelle gesehen." },
        { id: "hooke", label: "Hooke (1665)", x: 20, y: 24, color: "#f59e0b", html: "Robert Hooke beobachtet den Kork und nennt die Kämmerchen, die er sieht, „Zellen“.", why: "Er hatte ein zusammengesetztes Mikroskop gebaut und veröffentlichte seine Zeichnungen in dem Buch Micrographia. Er sah aber nur die Wände toter Zellen." },
        { id: "leeuwenhoek", label: "Van Leeuwenhoek (1674)", x: 80, y: 24, color: "#ea580c", html: "Antoni van Leeuwenhoek sieht als Erster lebende Zellen: Bakterien, rote Blutkörperchen, Urtierchen in einem Wassertropfen.", why: "Er baute winzige, perfekte Linsen, die bis etwa 270-fach vergrößerten. Die mikroskopisch kleinen Lebewesen, die er sich bewegen sah, nannte er „Tierchen“." },
        { id: "schleiden", label: "Schleiden (1838)", x: 20, y: 46, color: "#16a34a", html: "Matthias Schleiden: Alle Pflanzen bestehen aus Zellen.", why: "Als er sehr viele Pflanzengewebe unter dem Mikroskop untersuchte, fand er überall Zellen: in Blättern, Wurzeln, Stängeln." },
        { id: "schwann", label: "Schwann (1839)", x: 80, y: 46, color: "#0ea5e9", html: "Theodor Schwann: Auch alle Tiere bestehen aus Zellen.", why: "Im Gespräch mit Schleiden erkannte er, dass die Strukturen, die er in Tiergeweben sah, den Pflanzenzellen ähnlich waren: Also ist die Zelle die gemeinsame Einheit aller Lebewesen." },
        { id: "virchow", label: "Virchow (1855)", x: 50, y: 64, color: "#dc2626", html: "Rudolf Virchow: Jede Zelle entsteht aus einer anderen Zelle (omnis cellula e cellula).", why: "Vorher glaubten viele, das Leben könne aus dem Nichts entstehen (Urzeugung). Virchow sah beim Erforschen von Krankheiten, dass sich Zellen durch Teilung vermehren. Pasteur bewies kurz darauf mit Experimenten, dass es keine Urzeugung gibt." },
        { id: "teoria", label: "Zelltheorie", x: 50, y: 82, color: "#7c3aed", html: "1) Alle Lebewesen bestehen aus Zellen. 2) Die Zelle ist die kleinste Einheit des Lebens. 3) Jede Zelle stammt von einer anderen Zelle ab.", why: "Sie ist das Ergebnis von fast zwei Jahrhunderten Beobachtungen. Sie ist eine der Grundlagen der Biologie, wie die Evolutionstheorie." },
        { id: "oggi", label: "Heute", x: 50, y: 96, color: "#0f766e", html: "Das Elektronenmikroskop (seit 1931) zeigt die Organellen; man erforscht die DNA im Zellkern.", why: "Das Elektronenmikroskop benutzt Elektronen statt Licht und vergrößert bis zu millionenfach: So wurden Ribosomen, das Retikulum und der Aufbau der Mitochondrien entdeckt." }
      ],
      edges: [ ["lenti", "hooke", "ermöglichen zu sehen"], ["lenti", "leeuwenhoek", "bessere Linsen"], ["hooke", "schleiden", "Name Zelle"], ["leeuwenhoek", "schwann", "lebende Zellen"], ["schleiden", "schwann", "Vergleich Pflanzen–Tiere"], ["schleiden", "teoria", "Punkt 1"], ["schwann", "teoria", "Punkte 1 und 2"], ["virchow", "teoria", "Punkt 3"], ["teoria", "oggi", "wird vertieft"] ]
    }
  ],
  glossary: [
    { t: "Zelle", d: "Die kleinste lebende Einheit." },
    { t: "Zellmembran", d: "Dünne Hülle, die die Zelle umgibt und den Austausch mit der Außenwelt steuert." },
    { t: "Zellplasma", d: "Gelartige Substanz, die die Zelle ausfüllt und in der die Organellen liegen." },
    { t: "Zellkern", d: "Kontrollzentrum der Zelle, enthält die DNA." },
    { t: "DNA", d: "Molekül, das die Erbinformationen enthält." },
    { t: "Organelle", d: "Struktur der Zelle mit einer bestimmten Aufgabe." },
    { t: "Mitochondrium", d: "Organelle, die durch die Zellatmung Energie erzeugt." },
    { t: "Chloroplast", d: "Grüne Organelle der Pflanzenzellen, die die Fotosynthese betreibt." },
    { t: "Zellwand", d: "Starre Hülle aus Zellulose bei Pflanzenzellen." },
    { t: "Einzeller", d: "Organismus, der aus nur einer Zelle besteht." },
    { t: "Gewebe", d: "Gruppe gleicher Zellen, die dieselbe Aufgabe erfüllen." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Nach der Zelltheorie entsteht jede Zelle …", options: ["aus dem Nichts", "aus einer anderen Zelle", "aus dem Kork", "lebt für immer"], answer: 1, explain: "Jede Zelle entsteht durch die Teilung einer anderen Zelle." },
      { type: "mc", q: "Welcher Teil kontrolliert, was in die Zelle hinein- und aus ihr herausgeht?", options: ["Der Zellkern", "Die Zellmembran", "Das Kernkörperchen", "Das Zellplasma"], answer: 1, explain: "Die Membran ist wie ein Pförtner: Sie wählt die Stoffe aus." },
      { type: "mc", q: "Welches Paar enthält nur Strukturen, die typisch für die Pflanzenzelle sind?", options: ["Wand und Chloroplasten", "Zellkern und Mitochondrien", "Membran und Zellplasma", "Ribosomen und Lysosomen"], answer: 0, explain: "Zellwand und Chloroplasten fehlen in der Tierzelle." },
      { type: "tf", q: "Das Eigelb eines Hühnereis ist eine einzige Zelle.", answer: true, explain: "Es ist eine riesige Zelle, voller Nährstoffe." },
      { type: "text", q: "Wie heißt der grüne Farbstoff in den Chloroplasten?", answer: ["Chlorophyll", "das Chlorophyll", "chlorophyll"], explain: "Das Chlorophyll fängt das Sonnenlicht für die Fotosynthese ein." },
      { type: "mc", q: "Was tun die Ribosomen?", options: ["Sie erzeugen Energie", "Sie bauen Proteine auf", "Sie verdauen Abfälle", "Sie betreiben Fotosynthese"], answer: 1, explain: "Die Ribosomen sind die Fabriken der Proteine." },
      { type: "order", q: "Ordne vom Einfachsten zum Komplexesten", items: ["Zelle", "Gewebe", "Organ", "Organsystem", "Organismus"], explain: "Zellen → Gewebe → Organe → Organsysteme → Organismus." },
      { type: "tf", q: "Ein Bakterium ist ein mehrzelliger Organismus.", answer: false, explain: "Bakterien sind einzellig: Sie bestehen aus nur einer Zelle." },
      { type: "mc", q: "Welches Gerät braucht man, um Zellen zu sehen?", options: ["Das Teleskop", "Das Mikroskop", "Das Thermometer", "Die Sonnenbrille"], answer: 1, explain: "Zellen sind mikroskopisch klein: Man braucht das Mikroskop." },
      { type: "num", q: "In welchem Jahr beobachtete Robert Hooke die Korkzellen?", answer: 1665, tol: 0, explain: "Im Jahr 1665; er veröffentlichte es in dem Buch Micrographia." },
      { type: "mc", q: "Warum welkt ein Salatblatt ohne Wasser?", options: ["Es verliert den Zellkern", "Die Vakuolen leeren sich", "Die Mitochondrien gehen kaputt", "Das Chlorophyll wird gelb"], answer: 1, explain: "Ohne Wasser leeren sich die Vakuolen und die Zellen bleiben nicht mehr „prall“." }
    ]
  }
});
