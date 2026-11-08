TOPIC('de', {
 "id": "m3-tec-assonometria",
 "title": "L'assonometria",
 "intro": "Ein Blatt Papier ist flach, Gegenstände haben aber drei Dimensionen. Wie zeichnet man einen Würfel, ein Möbelstück oder ein Gebäude so, dass man <b>die Form</b> versteht und die Teile auch <b>messen</b> kann? Mit der <b>Axonometrie</b>: einer technischen Zeichenmethode, die Breite, Tiefe und Höhe in einer einzigen Ansicht zeigt. Sie ist die Sprache von Konstrukteuren, Architekten … und vieler Videospiele! 📐🧊",
 "minutes": 45,
 "sections": [
  {
   "type": "text",
   "title": "1. Von den Orthogonalprojektionen zur Axonometrie",
   "html": "<p>Mit den <b>Orthogonalprojektionen</b> (die du schon kennst) zeichnet man ein Objekt in <b>drei getrennten Ansichten</b>: Grundriss, Aufriss und Seitenansicht. Sie sind genau, aber um die Form zu verstehen, muss man sie im Kopf „zusammensetzen“.</p>\n<p>Die <b>Axonometrie</b> (aus dem Griechischen <i>áxōn</i> = Achse und <i>métron</i> = Maß: „Maß entlang der Achsen“) zeigt das Objekt dagegen <b>in einer einzigen Zeichnung</b>, mit drei gleichzeitig sichtbaren Seiten.</p>\n<p>Sie ist eine <b>Parallelprojektion</b>: Die Projektionsstrahlen verlaufen alle parallel zueinander, als würde man das Objekt aus unendlich großer Entfernung betrachten. Daraus folgen wichtige Eigenschaften:</p>\n<ul>\n<li>parallele Linien in der Wirklichkeit bleiben im Bild <b>parallel</b>;</li>\n<li>die Maße entlang der Achsen kann man <b>mit dem Lineal ablesen</b> (gegebenenfalls mit einem Faktor multipliziert);</li>\n<li>Objekte <b>werden in der Ferne nicht kleiner</b> (anders als bei der <b>Perspektive</b>).</li>\n</ul>"
  },
  {
   "type": "text",
   "title": "2. Die drei Achsen: x, y, z",
   "html": "<p>Jede Axonometrie wird auf <b>drei Achsen</b> aufgebaut, die von einem Ursprung O ausgehen:</p>\n<ul>\n<li><b>Achse z</b>: immer <b>senkrecht</b>, für die <b>Höhen</b>;</li>\n<li><b>Achse x</b>: für die <b>Breiten</b> (Längen);</li>\n<li><b>Achse y</b>: für die <b>Tiefen</b>.</li>\n</ul>\n<p>Die verschiedenen Axonometrien unterscheiden sich durch zwei Dinge:</p>\n<ol>\n<li>die <b>Winkel</b>, die die Achsen x und y mit der Waagerechten bilden;</li>\n<li>die <b>Verkürzungsfaktoren</b>: ob die Maße entlang einer Achse in wahrer Größe (×1) oder verkürzt (zum Beispiel ×½) aufgetragen werden.</li>\n</ol>"
  },
  {
   "type": "text",
   "title": "3. Die Arten der Axonometrie",
   "html": "<table>\n<tr><th>Art</th><th>Winkel der Achsen x und y</th><th>Verkürzungen</th><th>Typische Verwendung</th></tr>\n<tr><td><b>Isometrisch</b></td><td>30° und 30° (die drei Achsen bilden Winkel von 120°)</td><td>keine: x, y, z in wahrer Größe</td><td>Maschinenbau, Gegenstände, Design</td></tr>\n<tr><td><b>Kavalier-Projektion</b></td><td>x waagerecht; y mit 45° (oder 30°, 60°)</td><td>y auf ½ verkürzt („verkürzte“ Kavalier-Projektion)</td><td>Gegenstände mit einer wichtigen Seite, schnelle Skizzen</td></tr>\n<tr><td><b>Monometrisch (planometrisch)</b></td><td>x und y mit 30°/60° (oder 45°/45°) zueinander im Winkel von 90°</td><td>keine</td><td>Architektur, Einrichtung: der Grundriss bleibt wahr</td></tr>\n</table>\n<p><b>Isometrisch</b> = „gleiches Maß“: Alle drei Achsen haben denselben Maßstab. In der Theorie wäre der genaue Verkürzungsfaktor auf allen Achsen etwa 0,82, aber im technischen Zeichnen verwendet man die <b>vereinfachte Isometrie</b> mit wahren Maßen: Die Zeichnung wird nur etwas größer.</p>\n<p>Bei der <b>Kavalier-Projektion</b> wird die Vorderfläche <b>genau so gezeichnet, wie sie ist</b> (in wahrer Form): perfekt für Objekte mit einer komplizierten Vorderseite, wie ein Zahnrad oder ein Buchstabe.</p>\n<p>Bei der <b>monometrischen Projektion</b> ist der <b>Grundriss</b> in wahrer Form, nur gedreht: Man zeichnet den Grundriss eines Hauses und „hebt“ dann die Wände senkrecht an.</p>"
  },
  {
   "type": "svg",
   "title": "Derselbe Würfel in drei Axonometrien",
   "caption": "Würfel mit Kantenlänge 60: isometrisch (Achsen mit 30°), Kavalier-Projektion (Tiefe mit 45°, auf die Hälfte verkürzt), monometrisch (Grundriss um 30°/60° gedreht).",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#f8fafc\"/>\n<g stroke=\"#1e293b\" stroke-width=\"2.5\" stroke-linejoin=\"round\">\n<polygon points=\"100,140 152,170 100,200 48,170\" fill=\"#fde68a\"/>\n<polygon points=\"48,170 100,200 100,260 48,230\" fill=\"#f59e0b\"/>\n<polygon points=\"100,200 152,170 152,230 100,260\" fill=\"#fbbf24\"/>\n</g>\n<text x=\"100\" y=\"40\" font-size=\"17\" font-weight=\"bold\" fill=\"#92400e\" text-anchor=\"middle\">ISOMETRISCH</text>\n<text x=\"100\" y=\"62\" font-size=\"13\" fill=\"#334155\" text-anchor=\"middle\">30° – 30°, alles ×1</text>\n<g stroke=\"#1e293b\" stroke-width=\"2.5\" stroke-linejoin=\"round\">\n<polygon points=\"250,170 310,170 331,149 271,149\" fill=\"#bfdbfe\"/>\n<polygon points=\"310,170 331,149 331,209 310,230\" fill=\"#3b82f6\"/>\n<rect x=\"250\" y=\"170\" width=\"60\" height=\"60\" fill=\"#60a5fa\"/>\n</g>\n<text x=\"290\" y=\"40\" font-size=\"17\" font-weight=\"bold\" fill=\"#1e40af\" text-anchor=\"middle\">KAVALIER</text>\n<text x=\"290\" y=\"62\" font-size=\"13\" fill=\"#334155\" text-anchor=\"middle\">y mit 45°, ×½</text>\n<g stroke=\"#1e293b\" stroke-width=\"2.5\" stroke-linejoin=\"round\">\n<polygon points=\"490,120 542,150 512,202 460,172\" fill=\"#bbf7d0\"/>\n<polygon points=\"460,172 512,202 512,262 460,232\" fill=\"#22c55e\"/>\n<polygon points=\"512,202 542,150 542,210 512,262\" fill=\"#4ade80\"/>\n</g>\n<text x=\"490\" y=\"40\" font-size=\"17\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">MONOMETRISCH</text>\n<text x=\"490\" y=\"62\" font-size=\"13\" fill=\"#334155\" text-anchor=\"middle\">Grundriss 30°/60°, ×1</text>\n<line x1=\"20\" y1=\"290\" x2=\"580\" y2=\"290\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"6 4\"/>\n<text x=\"300\" y=\"312\" font-size=\"13\" fill=\"#475569\" text-anchor=\"middle\">parallele Linien bleiben parallel: kein Fluchtpunkt</text>\n</svg>"
  },
  {
   "type": "3d",
   "title": "Dreh den Körper und finde die isometrische Ansicht",
   "scene": "solid",
   "options": {
    "shape": "box",
    "w": 3,
    "h": 2,
    "d": 2,
    "color": "#f59e0b",
    "labels": true,
    "shapes": [
     "cube",
     "box",
     "prism",
     "pyramid",
     "cylinder"
    ]
   },
   "caption": "Dreh den Körper, bis du drei Flächen mit „gleicher Bedeutung“ siehst: Das ist der Blickwinkel der Isometrie. Die angegebenen Maße sind die, die man auf die Achsen überträgt."
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: erkenne die Axonometrie",
   "questions": [
    {
     "type": "mc",
     "q": "Bei der isometrischen Axonometrie bilden die Achsen x und y mit der Waagerechten einen Winkel von…",
     "options": [
      "45°",
      "30°",
      "60°"
     ],
     "answer": 1,
     "explain": "Isometrisch: x und y mit 30°, z senkrecht; die drei Achsen liegen je 120° auseinander."
    },
    {
     "type": "mc",
     "q": "Bei welcher Axonometrie ist die Vorderseite in wahrer Form?",
     "options": [
      "Isometrisch",
      "Kavalier",
      "Monometrisch"
     ],
     "answer": 1,
     "explain": "Bei der Kavalier-Projektion wird die Vorderebene (x-z) so gezeichnet, wie sie ist."
    },
    {
     "type": "tf",
     "q": "In der Axonometrie laufen parallele Linien in einem Fluchtpunkt zusammen.",
     "answer": false,
     "explain": "Es ist eine Parallelprojektion: Parallelen bleiben parallel. Der Fluchtpunkt gehört zur Perspektive."
    }
   ]
  },
  {
   "type": "text",
   "title": "4. So zeichnet man einen Quader in Isometrie (Schritt für Schritt)",
   "html": "<p>Wir zeichnen eine Schachtel mit <b>4 × 3 × 2 cm</b> (Breite × Tiefe × Höhe) mit Zeichendreieck mit 30°/60° und Lineal.</p>\n<ol>\n<li><b>Ursprung</b>: Wähle einen Punkt O unten in der Mitte des Blattes.</li>\n<li><b>Achsen</b>: Ziehe von O die senkrechte Linie (z) und mit dem 30°-Winkel zwei Geraden mit 30° über der Waagerechten: nach rechts (x) und nach links (y).</li>\n<li><b>Maße</b>: Trage auf der Achse x 4 cm, auf der Achse y 3 cm und auf der Achse z 2 cm ab.</li>\n<li><b>Grundfläche</b>: Ziehe von den Endpunkten Parallelen zu den Achsen (Parallele zu y vom Punkt auf x, Parallele zu x vom Punkt auf y): Du erhältst die Raute der Grundfläche.</li>\n<li><b>Senkrechte Kanten</b>: Von jeder sichtbaren Ecke der Grundfläche ziehst du eine 2 cm lange Senkrechte nach oben.</li>\n<li><b>Deckfläche</b>: Verbinde die oberen Ecken mit Parallelen zu den Achsen x und y.</li>\n<li><b>Nachziehen</b>: Zieh die sichtbaren Kanten mit <b>dickem</b> Strich nach; verdeckte Kanten zeichnet man <b>gestrichelt</b> oder lässt sie weg; radiere die Konstruktionslinien aus.</li>\n</ol>\n<p>Goldene Regel: <b>Man misst nur entlang der Achsen</b> (oder parallel zu ihnen). Die Diagonalen und Kreise sind nicht in wahrer Größe!</p>"
  },
  {
   "type": "svg",
   "title": "Die Konstruktion Schritt für Schritt",
   "caption": "1) Achsen mit 30°; 2) Maße auf den Achsen und Grundfläche; 3) senkrechte Kanten und Deckfläche.",
   "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"280\" fill=\"#fffbeb\"/>\n<g font-size=\"16\" font-weight=\"bold\" fill=\"#92400e\"><text x=\"100\" y=\"28\" text-anchor=\"middle\">1. Achsen</text><text x=\"300\" y=\"28\" text-anchor=\"middle\">2. Grundfläche</text><text x=\"500\" y=\"28\" text-anchor=\"middle\">3. Körper</text></g>\n<g stroke=\"#64748b\" stroke-width=\"2\"><line x1=\"100\" y1=\"240\" x2=\"100\" y2=\"60\"/><line x1=\"100\" y1=\"240\" x2=\"185\" y2=\"191\"/><line x1=\"100\" y1=\"240\" x2=\"15\" y2=\"191\"/></g>\n<text x=\"108\" y=\"70\" font-size=\"16\" fill=\"#dc2626\" font-weight=\"bold\">z</text>\n<text x=\"180\" y=\"185\" font-size=\"16\" fill=\"#dc2626\" font-weight=\"bold\">x</text>\n<text x=\"15\" y=\"185\" font-size=\"16\" fill=\"#dc2626\" font-weight=\"bold\">y</text>\n<path d=\"M140 240 A40 40 0 0 0 135 220\" stroke=\"#2563eb\" stroke-width=\"2\" fill=\"none\"/>\n<line x1=\"100\" y1=\"240\" x2=\"185\" y2=\"240\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/>\n<text x=\"145\" y=\"258\" font-size=\"14\" fill=\"#2563eb\">30°</text>\n<g stroke=\"#cbd5e1\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"><line x1=\"300\" y1=\"250\" x2=\"390\" y2=\"198\"/><line x1=\"300\" y1=\"250\" x2=\"225\" y2=\"207\"/><line x1=\"300\" y1=\"250\" x2=\"300\" y2=\"120\"/></g>\n<polygon points=\"300,250 369,210 317,180 248,220\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"3\"/>\n<text x=\"345\" y=\"248\" font-size=\"14\" fill=\"#b45309\">4 cm</text>\n<text x=\"240\" y=\"250\" font-size=\"14\" fill=\"#b45309\">3 cm</text>\n<polygon points=\"500,240 569,200 569,165 500,205\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<polygon points=\"500,240 448,210 448,175 500,205\" fill=\"#fbbf24\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<polygon points=\"500,205 569,165 517,135 448,175\" fill=\"#fef3c7\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<polyline points=\"448,210 517,170 569,200\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/>\n<line x1=\"517\" y1=\"170\" x2=\"517\" y2=\"135\" stroke=\"#1e293b\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/>\n<text x=\"580\" y=\"190\" font-size=\"14\" fill=\"#1e293b\">2 cm</text>\n</svg>"
  },
  {
   "type": "example",
   "title": "Praktisches Beispiel: das Regalbrett im Kinderzimmer",
   "html": "<p>Du möchtest ein Regalbrett von <b>80 × 20 × 2 cm</b> bauen lassen. Mit den reinen Orthogonalprojektionen würde der Schreiner es verstehen, deine Eltern vielleicht aber nicht. Wenn du es in <b>Isometrie</b> im Maßstab 1:10 zeichnest (8 cm auf der Achse x, 2 cm auf y, 0,2 cm auf z), sieht man sofort, wie es aussieht, und man kann die <b>Maße</b> entlang der Kanten eintragen.</p>\n<p>Wenn das Regalbrett vorne eine verzierte Einkerbung hat, ist dagegen die <b>Kavalier-Projektion</b> besser: Die Vorderseite bleibt in wahrer Form, und die Einkerbung lässt sich leicht zeichnen.</p>"
  },
  {
   "type": "example",
   "title": "Praktisches Beispiel: der Grundriss des Hauses in monometrischer Projektion",
   "html": "<p>Du hast den Grundriss deines Zimmers im Maßstab 1:50. Um ihn „möbliert“ zu zeigen:</p>\n<ol>\n<li>drehst du den Grundriss um 30° (oder 45°) und zeichnest ihn genau so nach: Die Maße bleiben wahr;</li>\n<li>von jeder Ecke hebst du die Wände senkrecht an, zum Beispiel 2,70 m ➜ 5,4 cm im Maßstab 1:50;</li>\n<li>du zeichnest Bett und Schreibtisch als Quader und hebst ihre Höhen ebenfalls senkrecht an.</li>\n</ol>\n<p>Architekten verwenden diese Ansicht oft als „Vogelperspektive“; wenn die Teile getrennt dargestellt werden, spricht man von einer <b>Explosionszeichnung</b>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du… Videospiele nutzen die Axonometrie?",
   "html": "<p>Viele Strategie- und Simulationsspiele (wie die Klassiker <i>SimCity 2000</i> oder <i>Age of Empires</i>) verwenden eine sogenannte „isometrische“ Ansicht. Auf dem Pixelbildschirm nutzt man tatsächlich fast immer eine <b>Dimetrie 2:1</b>: Die Linien steigen um 1 Pixel auf 2 Pixel waagerecht (Winkel etwa 26,6° statt 30°), weil die Linien auf dem Bildschirm dann sauber aussehen, ohne unregelmäßige „Treppen“. Wie bei der Axonometrie werden weit entfernte Objekte <b>nicht kleiner</b>!</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du… China hat schon vor Jahrhunderten axonometrisch gezeichnet?",
   "html": "<p>Auf den chinesischen Bildrollen, wie der berühmten <i>Am Fluss während des Qingming-Festes</i> (12. Jahrhundert), sind Häuser und Brücken mit schrägen, parallelen Linien gezeichnet: eine Art <b>Axonometrie</b>, die es erlaubt, die Stadt „auszurollen“, ohne festen Blickpunkt. In Europa wurde die Isometrie als wissenschaftliche Methode 1822 vom englischen Professor <b>William Farish</b> beschrieben, um Maschinen zu zeichnen.</p>"
  },
  {
   "type": "remember",
   "title": "Zum Merken",
   "html": "<ul>\n<li>Axonometrie = <b>Parallelprojektion</b> auf drei Achsen (x Breite, y Tiefe, z senkrechte Höhe).</li>\n<li><b>Isometrisch</b>: x und y mit 30°, alle Maße wahr.</li>\n<li><b>Kavalier-Projektion</b>: Vorderseite wahr, Tiefe mit 45° auf ½ verkürzt.</li>\n<li><b>Monometrisch</b>: wahrer, gedrehter Grundriss, wahre Höhen.</li>\n<li>Man misst <b>nur parallel zu den Achsen</b>; sichtbare Kanten dick, verdeckte gestrichelt.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Weitere Wege, es zu verstehen",
   "intro": "Die Axonometrie ist leichter zu sehen als zu erklären. Probier diese Zugänge aus.",
   "tabs": [
    {
     "label": "🧊 Dreh den 3D-Würfel",
     "html": "<p>Nimm den Würfel und dreh ihn so, dass die <b>vorderste senkrechte Kante</b> in der Mitte liegt und du drei gleich große Flächen siehst (oben, links, rechts). Genau das ist der Blick der <b>Isometrie</b>: Keine Fläche ist „wichtiger“ als die anderen.</p>",
     "scene": "solid",
     "options": {
      "shape": "cube",
      "color": "#3b82f6",
      "labels": true
     }
    },
    {
     "label": "📄 Isometrisches Papier",
     "html": "<p>In vielen Ländern (Vereinigtes Königreich, Japan, USA) verwendet man in der Schule <b>isometrisches Papier</b>: ein Blatt mit Punkten, die in Dreiecken angeordnet sind. Man verbindet die Punkte entlang der drei Richtungen (senkrecht und zwei mit 30°), und die Zeichnung entsteht ganz von selbst, ohne Geodreieck!</p>\n<p>Probier es aus: Ein Würfel der Kantenlänge 1 besteht aus einem Sechseck aus 6 kleinen Dreiecken.</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#ffffff\"/>\n<g fill=\"#94a3b8\">\n<circle cx=\"100\" cy=\"30\" r=\"3\"/><circle cx=\"100\" cy=\"70\" r=\"3\"/><circle cx=\"100\" cy=\"110\" r=\"3\"/><circle cx=\"100\" cy=\"150\" r=\"3\"/><circle cx=\"100\" cy=\"190\" r=\"3\"/><circle cx=\"100\" cy=\"230\" r=\"3\"/>\n<circle cx=\"135\" cy=\"50\" r=\"3\"/><circle cx=\"135\" cy=\"90\" r=\"3\"/><circle cx=\"135\" cy=\"130\" r=\"3\"/><circle cx=\"135\" cy=\"170\" r=\"3\"/><circle cx=\"135\" cy=\"210\" r=\"3\"/>\n<circle cx=\"170\" cy=\"30\" r=\"3\"/><circle cx=\"170\" cy=\"70\" r=\"3\"/><circle cx=\"170\" cy=\"110\" r=\"3\"/><circle cx=\"170\" cy=\"150\" r=\"3\"/><circle cx=\"170\" cy=\"190\" r=\"3\"/><circle cx=\"170\" cy=\"230\" r=\"3\"/>\n<circle cx=\"205\" cy=\"50\" r=\"3\"/><circle cx=\"205\" cy=\"90\" r=\"3\"/><circle cx=\"205\" cy=\"130\" r=\"3\"/><circle cx=\"205\" cy=\"170\" r=\"3\"/><circle cx=\"205\" cy=\"210\" r=\"3\"/>\n<circle cx=\"240\" cy=\"30\" r=\"3\"/><circle cx=\"240\" cy=\"70\" r=\"3\"/><circle cx=\"240\" cy=\"110\" r=\"3\"/><circle cx=\"240\" cy=\"150\" r=\"3\"/><circle cx=\"240\" cy=\"190\" r=\"3\"/><circle cx=\"240\" cy=\"230\" r=\"3\"/>\n<circle cx=\"275\" cy=\"50\" r=\"3\"/><circle cx=\"275\" cy=\"90\" r=\"3\"/><circle cx=\"275\" cy=\"130\" r=\"3\"/><circle cx=\"275\" cy=\"170\" r=\"3\"/><circle cx=\"275\" cy=\"210\" r=\"3\"/>\n<circle cx=\"65\" cy=\"50\" r=\"3\"/><circle cx=\"65\" cy=\"90\" r=\"3\"/><circle cx=\"65\" cy=\"130\" r=\"3\"/><circle cx=\"65\" cy=\"170\" r=\"3\"/><circle cx=\"65\" cy=\"210\" r=\"3\"/>\n</g>\n<g stroke=\"#1e293b\" stroke-width=\"3\" stroke-linejoin=\"round\">\n<polygon points=\"170,70 240,110 170,150 100,110\" fill=\"#fde68a\"/>\n<polygon points=\"100,110 170,150 170,230 100,190\" fill=\"#f59e0b\"/>\n<polygon points=\"170,150 240,110 240,190 170,230\" fill=\"#fbbf24\"/>\n</g>\n<text x=\"440\" y=\"100\" font-size=\"17\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">Verbinde die Punkte</text>\n<text x=\"440\" y=\"130\" font-size=\"15\" fill=\"#334155\" text-anchor=\"middle\">nur in 3 Richtungen:</text>\n<text x=\"440\" y=\"160\" font-size=\"15\" fill=\"#334155\" text-anchor=\"middle\">| senkrecht, / und  mit 30°</text>\n</svg>"
    },
    {
     "label": "🔦 Der Schatten in der Sonne",
     "html": "<p>Die Sonne ist so weit entfernt, dass ihre Strahlen <b>parallel</b> ankommen. Der Schatten eines Gegenstands auf dem Boden ist daher eine <b>Parallelprojektion</b>, genau wie die Axonometrie! Wenn du einen Drahtwürfel in die Sonne hältst, ändert sein Schatten die Form, aber parallele Linien bleiben immer parallel.</p>\n<p>Mit einer nahen Lampe dagegen gehen die Strahlen von einem Punkt aus: Der Schatten wird größer, wie in der <b>Perspektive</b>.</p>"
    },
    {
     "label": "🏷️ Benenne die Achsen",
     "html": "<p>Tippe auf die Punkte der Zeichnung und wähle die richtige Beschriftung.</p>",
     "widget": "labelDiagram",
     "options": {
      "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"400\" height=\"300\" fill=\"#f8fafc\"/><g stroke=\"#1e293b\" stroke-width=\"3\"><polygon points=\"200,90 290,140 200,190 110,140\" fill=\"#bfdbfe\"/><polygon points=\"110,140 200,190 200,270 110,220\" fill=\"#3b82f6\"/><polygon points=\"200,190 290,140 290,220 200,270\" fill=\"#60a5fa\"/></g><g stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5 4\"><line x1=\"200\" y1=\"270\" x2=\"200\" y2=\"30\"/><line x1=\"200\" y1=\"270\" x2=\"360\" y2=\"178\"/><line x1=\"200\" y1=\"270\" x2=\"40\" y2=\"178\"/></g></svg>",
      "spots": [
       {
        "x": 200,
        "y": 40,
        "label": "Achse z (Höhe)"
       },
       {
        "x": 350,
        "y": 184,
        "label": "Achse x (Breite)"
       },
       {
        "x": 50,
        "y": 184,
        "label": "Achse y (Tiefe)"
       },
       {
        "x": 200,
        "y": 270,
        "label": "Ursprung O"
       },
       {
        "x": 200,
        "y": 140,
        "label": "Deckfläche"
       }
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Landkarte: die Axonometrie",
   "nodes": [
    {
     "id": "rapp",
     "label": "Den 3D-Körper darstellen",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "Dreidimensionale Objekte auf einem flachen Blatt zeichnen.",
     "why": "Jede Zeichnung auf Papier verliert eine Dimension. Die <b>darstellende Geometrie</b>, begründet von <b>Gaspard Monge</b> (1795), untersucht, wie man das ohne Informationsverlust macht."
    },
    {
     "id": "orto",
     "label": "Orthogonalprojektionen",
     "x": 15,
     "y": 30,
     "color": "#0ea5e9",
     "html": "Drei getrennte Ansichten: Grundriss, Aufriss, Seitenansicht.",
     "why": "Von Monge für die französischen Festungsanlagen systematisiert: genau, aber wenig anschaulich."
    },
    {
     "id": "ass",
     "label": "Axonometrie",
     "x": 50,
     "y": 30,
     "color": "#f59e0b",
     "html": "Eine einzige Ansicht mit drei Achsen und lesbaren Maßen.",
     "why": "Sie entstand, um die Genauigkeit der Maße mit der Anschaulichkeit der Form zu verbinden. Die Isometrie wurde von William Farish (Cambridge, 1822) formalisiert."
    },
    {
     "id": "prosp",
     "label": "Perspektive",
     "x": 85,
     "y": 30,
     "color": "#a855f7",
     "html": "So sieht es das Auge: Parallelen laufen in Fluchtpunkten zusammen.",
     "why": "Von <b>Filippo Brunelleschi</b> in Florenz um 1415 wiederentdeckt und 1435 von Leon Battista Alberti beschrieben. Realistisch, aber die Maße lassen sich nicht direkt ablesen."
    },
    {
     "id": "par",
     "label": "Parallelprojektion",
     "x": 50,
     "y": 52,
     "color": "#22c55e",
     "html": "Alle Strahlen sind parallel: kein Fluchtpunkt.",
     "why": "Das ist, als würde man aus unendlicher Entfernung schauen. Eine Parallelprojektion erhält die Parallelität und die Verhältnisse zwischen parallelen Strecken: deshalb kann man mit dem Lineal messen."
    },
    {
     "id": "iso",
     "label": "Isometrisch",
     "x": 15,
     "y": 78,
     "color": "#ef4444",
     "html": "x und y mit 30°, alles in wahrem Maß.",
     "why": "Betrachtet man einen Würfel entlang seiner Raumdiagonale, erscheinen die drei Kanten gleich lang und im Winkel von 120° zueinander. Der theoretische Faktor ist √(2/3) ≈ 0,82; man verwendet 1 der Einfachheit halber (vereinfachte Isometrie)."
    },
    {
     "id": "cav",
     "label": "Kavalier",
     "x": 50,
     "y": 78,
     "color": "#3b82f6",
     "html": "Vorderseite wahr, Tiefe mit 45° und ×½.",
     "why": "Der Name stammt vom „Kavalier“, dem Erdwall der Festungen, von dem aus man alles von oben sehen konnte. Die Verkürzung auf ½ lässt den Körper natürlicher wirken."
    },
    {
     "id": "mono",
     "label": "Monometrisch",
     "x": 85,
     "y": 78,
     "color": "#16a34a",
     "html": "Wahrer, gedrehter Grundriss, senkrechte Höhen.",
     "why": "Sie wird von Architekten des 20. Jahrhunderts oft verwendet (zum Beispiel in der Bewegung De Stijl und am Bauhaus), weil der Grundriss messbar bleibt und die Wände „hochgezogen“ werden."
    }
   ],
   "edges": [
    [
     "rapp",
     "orto",
     "Methode"
    ],
    [
     "rapp",
     "ass",
     "Methode"
    ],
    [
     "rapp",
     "prosp",
     "Methode"
    ],
    [
     "ass",
     "par",
     "ist eine"
    ],
    [
     "par",
     "iso",
     "Typ"
    ],
    [
     "par",
     "cav",
     "Typ"
    ],
    [
     "par",
     "mono",
     "Typ"
    ],
    [
     "orto",
     "par",
     "auch"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: konstruieren",
   "questions": [
    {
     "type": "num",
     "q": "Bei der verkürzten Kavalier-Projektion wird eine wahre Tiefe von 6 cm gezeichnet mit einer Länge von…",
     "answer": 3,
     "tol": 0,
     "unit": "cm",
     "explain": "Faktor ½: 6 × 0,5 = 3 cm."
    },
    {
     "type": "mc",
     "q": "Wie zeichnet man verdeckte Kanten?",
     "options": [
      "Mit durchgezogenem, dickem Strich",
      "Gestrichelt (oder gar nicht)",
      "In Rot"
     ],
     "answer": 1,
     "explain": "Konvention im technischen Zeichnen: verdeckte Kanten werden gestrichelt gezeichnet."
    },
    {
     "type": "tf",
     "q": "In der Isometrie kann man eine Diagonale der Fläche mit dem Lineal messen.",
     "answer": false,
     "explain": "Man misst nur entlang von Richtungen, die parallel zu den Achsen verlaufen."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Axonometrie",
   "d": "Darstellungsmethode mit Parallelprojektion auf drei Achsen."
  },
  {
   "t": "Achsen x, y, z",
   "d": "Richtungen für Breite, Tiefe und Höhe (z immer senkrecht)."
  },
  {
   "t": "Isometrisch",
   "d": "Axonometrie mit x und y bei 30° und wahren Maßen auf allen Achsen."
  },
  {
   "t": "Kavalier",
   "d": "Axonometrie mit Vorderseite in wahrer Form und verkürzter schräger Tiefe."
  },
  {
   "t": "Monometrisch",
   "d": "Axonometrie mit wahrem, gedrehtem Grundriss und senkrechten Höhen."
  },
  {
   "t": "Verkürzungsfaktor",
   "d": "Zahl, mit der man die Maße entlang einer Achse multipliziert (z. B. ½)."
  },
  {
   "t": "Perspektive",
   "d": "Darstellung mit Fluchtpunkten, so wie das Auge sieht."
  },
  {
   "t": "Parallelprojektion",
   "d": "Projektion, bei der alle Strahlen parallel zueinander verlaufen."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "„Axonometrie“ bedeutet…",
    "options": [
     "Maß entlang der Achsen",
     "freihändiges Zeichnen",
     "Ansicht von oben"
    ],
    "answer": 0,
    "explain": "Aus dem Griechischen áxōn (Achse) + métron (Maß)."
   },
   {
    "type": "mc",
    "q": "Die Achse z steht für…",
    "options": [
     "die Tiefe",
     "die Höhe",
     "die Breite"
    ],
    "answer": 1,
    "explain": "z ist immer senkrecht: die Höhen."
   },
   {
    "type": "mc",
    "q": "In der Isometrie bilden die drei Achsen untereinander Winkel von…",
    "options": [
     "90°",
     "120°",
     "45°"
    ],
    "answer": 1,
    "explain": "360° : 3 = 120°."
   },
   {
    "type": "num",
    "q": "Ein Würfel mit Kantenlänge 5 cm in vereinfachter Isometrie: Wie lang ist die Kante, die auf der Achse x gezeichnet wird?",
    "answer": 5,
    "tol": 0,
    "unit": "cm",
    "explain": "In der vereinfachten Isometrie sind die Maße wahr."
   },
   {
    "type": "num",
    "q": "In der verkürzten Kavalier-Projektion (½) ist eine Schachtel 12 cm tief: Wie lang ist die Zeichnung auf der Achse y?",
    "answer": 6,
    "tol": 0,
    "unit": "cm",
    "explain": "12 × ½ = 6 cm."
   },
   {
    "type": "tf",
    "q": "In der Axonometrie werden weit entfernte Objekte kleiner gezeichnet.",
    "answer": false,
    "explain": "Das passiert in der Perspektive, nicht in der Axonometrie."
   },
   {
    "type": "tf",
    "q": "Bei der monometrischen Projektion ist der Grundriss in wahrer Form.",
    "answer": true,
    "explain": "Der Grundriss ist nur gedreht (30°/60° oder 45°)."
   },
   {
    "type": "order",
    "q": "Bring die Schritte zum Zeichnen eines Quaders in Isometrie in die richtige Reihenfolge.",
    "items": [
     "Ursprung festlegen und Achsen ziehen",
     "Maße auf den Achsen abtragen",
     "Grundfläche mit Parallelen zu den Achsen zeichnen",
     "Senkrechte Kanten hochziehen",
     "Deckfläche schließen",
     "Sichtbare Kanten nachziehen"
    ],
    "explain": "Zuerst Achsen und Maße, dann Grundfläche, Höhen, Deckfläche und Nachziehen."
   },
   {
    "type": "mc",
    "q": "Für ein Objekt mit stark verzierter Vorderseite eignet sich am besten…",
    "options": [
     "die Kavalier-Projektion",
     "die Isometrie",
     "die Zentralperspektive"
    ],
    "answer": 0,
    "explain": "Die Kavalier-Projektion hält die Vorderseite in wahrer Form."
   },
   {
    "type": "text",
    "q": "Wie heißt die Methode mit Fluchtpunkten, die Brunelleschi wiederentdeckt hat?",
    "answer": [
     "Perspektive",
     "die Perspektive",
     "perspektive"
    ],
    "explain": "Die Perspektive, verwendet ab der Renaissance."
   },
   {
    "type": "mc",
    "q": "Wer beschrieb die Isometrie 1822 als wissenschaftliche Methode?",
    "options": [
     "Leonardo da Vinci",
     "William Farish",
     "Gaspard Monge"
    ],
    "answer": 1,
    "explain": "William Farish, Professor in Cambridge."
   }
  ]
 }
});
