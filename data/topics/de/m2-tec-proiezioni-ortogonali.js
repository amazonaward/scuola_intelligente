TOPIC('de', {
 "id": "m2-tec-proiezioni-ortogonali",
 "title": "Die senkrechten Projektionen (Dreitafelprojektion)",
 "intro": "Wie erklärt man einem Tischler, einem Mechaniker oder einem 3D-Drucker, wie ein <b>dreidimensionaler</b> Gegenstand aussieht, nur mit einem <b>flachen</b> Blatt? Mit den <b>senkrechten Projektionen</b>: Derselbe Gegenstand wird <b>von vorn, von oben und von der Seite gesehen</b> gezeichnet, nach genauen Regeln, die alle Techniker auf der Welt verstehen.",
 "minutes": 40,
 "sections": [
  {
   "type": "text",
   "title": "Was sie sind",
   "html": "<p><b>Projizieren</b> bedeutet „nach vorn werfen“: Stell dir vor, du wirfst den Schatten eines Gegenstands auf eine Wand. Bei der <b>senkrechten</b> (orthogonalen) Projektion sind die Projektionsstrahlen <b>parallel</b> zueinander und <b>senkrecht</b> (also im Winkel von 90°, „orthogonal“) zur Ebene, auf die wir zeichnen.</p>\n<p>Das Ergebnis ist eine Zeichnung, in der die zur Ebene parallelen Flächen in <b>wahrer Form und wahrer Größe</b> (maßstäblich) erscheinen: keine Perspektive, keine Verzerrungen. Deshalb kann man sie <b>messen</b>.</p>\n<p>Eine einzige Ansicht reicht aber nicht: Ein Würfel und ein Zylinder können von vorn beide wie ein Quadrat aussehen! Deshalb benutzt man <b>drei</b> zueinander senkrechte <b>Ebenen</b>, die eine Ecke wie in einem Zimmer bilden (das <b>Dreiflach</b>):</p>\n<ul>\n<li><b>V.E. – Vertikalebene</b>: nimmt die <b>Vorderansicht</b> (oder den <b>Aufriss</b>) auf;</li>\n<li><b>H.E. – Horizontalebene</b>: nimmt die <b>Draufsicht</b> (oder den <b>Grundriss</b>) auf;</li>\n<li><b>S.E. – Seitenebene</b>: nimmt die <b>Seitenansicht</b> (oder den <b>Seitenriss</b>) auf.</li>\n</ul>\n<p>Die Gerade, in der sich V.E. und H.E. treffen, heißt <b>Rissachse</b>.</p>"
  },
  {
   "type": "widget",
   "title": "Erkenne die Ebenen des Dreiflachs",
   "widget": "labelDiagram",
   "options": {
    "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#f8fafc\"/>\n<polygon points=\"120,30 420,30 420,190 120,190\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<polygon points=\"120,190 420,190 350,300 50,300\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"3\"/>\n<polygon points=\"420,30 420,190 350,300 350,140\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"3\"/>\n<line x1=\"120\" y1=\"190\" x2=\"420\" y2=\"190\" stroke=\"#dc2626\" stroke-width=\"5\"/>\n<polygon points=\"200,210 270,210 270,250 200,250\" fill=\"#fb923c\" stroke=\"#9a3412\" stroke-width=\"2\"/>\n<polygon points=\"200,210 270,210 290,180 220,180\" fill=\"#fdba74\" stroke=\"#9a3412\" stroke-width=\"2\"/>\n<polygon points=\"270,210 290,180 290,220 270,250\" fill=\"#ea580c\" stroke=\"#9a3412\" stroke-width=\"2\"/>\n<text x=\"500\" y=\"80\" font-size=\"16\" fill=\"#334155\">tippe auf die Kreise</text>\n<text x=\"500\" y=\"100\" font-size=\"16\" fill=\"#334155\">und wähle den Namen</text>\n</svg>",
    "spots": [
     {
      "x": 260,
      "y": 100,
      "label": "Vertikalebene (V.E.)"
     },
     {
      "x": 130,
      "y": 270,
      "label": "Horizontalebene (H.E.)"
     },
     {
      "x": 385,
      "y": 160,
      "label": "Seitenebene (S.E.)"
     },
     {
      "x": 160,
      "y": 190,
      "label": "Rissachse"
     },
     {
      "x": 240,
      "y": 230,
      "label": "Darzustellender Gegenstand"
     }
    ]
   },
   "caption": "Die drei Ebenen bilden eine Ecke wie die Wände und der Boden eines Zimmers. Der Gegenstand wird in die Ecke gestellt und auf jede Ebene „projiziert“."
  },
  {
   "type": "text",
   "title": "Die Methode Schritt für Schritt",
   "html": "<ol>\n<li><b>Betrachte den Gegenstand</b> und wähle die aussagekräftigste Fläche als <b>Vorderansicht</b> (die, die die Form am besten zeigt).</li>\n<li>Zeichne mit dem Bleistift leicht die waagrechte <b>Rissachse</b> und eine senkrechte Linie: Sie teilen das Blatt in vier Quadranten.</li>\n<li>Im Quadranten <b>oben links</b> zeichnest du die <b>Vorderansicht</b> (V.E.) und misst Breite und Höhe ab.</li>\n<li><b>Unter</b> der Vorderansicht zeichnest du die <b>Draufsicht</b> (H.E.): Breite (gleich der der Vorderansicht, du überträgst sie mit senkrechten Linien) und Tiefe.</li>\n<li><b>Rechts</b> neben der Vorderansicht zeichnest du die <b>Seitenansicht von links</b> (S.E.): Höhe (du überträgst sie mit waagrechten Linien) und Tiefe.</li>\n<li>Um die <b>Tiefe</b> von der Draufsicht in die Seitenansicht zu übertragen, benutzt du eine Linie im <b>45°</b>-Winkel im Quadranten unten rechts (oder den Zirkel): Die waagrechten Linien der Draufsicht treffen darauf und „biegen ab“, sodass sie senkrecht werden.</li>\n<li><b>Ziehe</b> die sichtbaren Kanten mit dicker durchgezogener Linie nach; die <b>verdeckten</b> Kanten mit gestrichelter Linie; die Symmetrie-<b>Achsen</b> mit Strichpunktlinie.</li>\n</ol>\n<p>Das ist die <b>europäische Methode</b> (auch „Methode des ersten Quadranten“ genannt, Norm ISO Methode E).</p>"
  },
  {
   "type": "svg",
   "title": "Die drei Ansichten einer Stufe (europäische Methode)",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#ffffff\"/>\n<line x1=\"20\" y1=\"150\" x2=\"380\" y2=\"150\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"20\" x2=\"220\" y2=\"300\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"150\" x2=\"330\" y2=\"260\" stroke=\"#64748b\" stroke-width=\"2\"/>\n<g stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\">\n<line x1=\"60\" y1=\"130\" x2=\"60\" y2=\"170\"/>\n<line x1=\"120\" y1=\"130\" x2=\"120\" y2=\"170\"/>\n<line x1=\"180\" y1=\"130\" x2=\"180\" y2=\"170\"/>\n<line x1=\"180\" y1=\"50\" x2=\"240\" y2=\"50\"/>\n<line x1=\"180\" y1=\"90\" x2=\"240\" y2=\"90\"/>\n<line x1=\"180\" y1=\"170\" x2=\"240\" y2=\"170\"/>\n<line x1=\"180\" y1=\"230\" x2=\"300\" y2=\"230\"/>\n<line x1=\"240\" y1=\"150\" x2=\"240\" y2=\"170\"/>\n<line x1=\"300\" y1=\"130\" x2=\"300\" y2=\"230\"/>\n</g>\n<polygon points=\"60,50 120,50 120,90 180,90 180,130 60,130\" fill=\"#bfdbfe\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n<rect x=\"60\" y=\"170\" width=\"120\" height=\"60\" fill=\"#bbf7d0\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n<line x1=\"120\" y1=\"170\" x2=\"120\" y2=\"230\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n<rect x=\"240\" y=\"50\" width=\"60\" height=\"80\" fill=\"#fde68a\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n<line x1=\"240\" y1=\"90\" x2=\"300\" y2=\"90\" stroke=\"#0f172a\" stroke-width=\"3\" stroke-dasharray=\"8 5\"/>\n<text x=\"120\" y=\"40\" font-size=\"15\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">Vorderansicht (V.E.)</text>\n<text x=\"120\" y=\"255\" font-size=\"15\" font-weight=\"bold\" fill=\"#15803d\" text-anchor=\"middle\">Draufsicht (H.E.)</text>\n<text x=\"270\" y=\"40\" font-size=\"15\" font-weight=\"bold\" fill=\"#b45309\" text-anchor=\"middle\">Seitenansicht links (S.E.)</text>\n<text x=\"300\" y=\"285\" font-size=\"14\" fill=\"#475569\" text-anchor=\"middle\">45°-Linie</text>\n<polygon points=\"410,140 455,140 455,170 500,170 500,200 410,200\" fill=\"#bfdbfe\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n<polygon points=\"410,140 455,140 491,112 446,112\" fill=\"#93c5fd\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n<polygon points=\"455,140 491,112 491,142 455,170\" fill=\"#60a5fa\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n<polygon points=\"455,170 500,170 536,142 491,142\" fill=\"#93c5fd\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n<polygon points=\"500,170 536,142 536,172 500,200\" fill=\"#60a5fa\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n<text x=\"480\" y=\"255\" font-size=\"15\" fill=\"#0f172a\" text-anchor=\"middle\">der Gegenstand (Stufe)</text>\n<text x=\"300\" y=\"310\" font-size=\"14\" fill=\"#0f172a\" text-anchor=\"middle\">gestrichelt = verdeckte Kante</text>\n</svg>",
   "caption": "Die Draufsicht steht unter der Vorderansicht, die Seitenansicht von links steht rechts davon. In der Seitenansicht ist die Kante der Stufe hinter dem hohen Block verdeckt: Deshalb ist sie gestrichelt."
  },
  {
   "type": "3d",
   "title": "Dreh den Körper und stell dir die drei Ansichten vor",
   "scene": "solid",
   "options": {
    "shape": "box",
    "w": 3,
    "h": 1.5,
    "d": 2,
    "color": "#60a5fa",
    "labels": true,
    "shapes": [
     "box",
     "cube",
     "prism",
     "cylinder",
     "pyramid",
     "cone"
    ]
   },
   "caption": "Dreh den Körper, bis du ihn genau von vorn siehst, dann von oben, dann von der Seite: Was du jeweils siehst, ist eine senkrechte Projektion. Probiere, den Körper zu wechseln."
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: die Ebenen und die Ansichten",
   "questions": [
    {
     "type": "mc",
     "q": "Wo zeichnet man in der europäischen Methode die Draufsicht?",
     "options": [
      "Über der Vorderansicht",
      "Unter der Vorderansicht",
      "Links neben der Vorderansicht"
     ],
     "answer": 1,
     "explain": "In der europäischen Methode (erster Quadrant) steht die Draufsicht unter der Vorderansicht."
    },
    {
     "type": "mc",
     "q": "Wie zeichnet man eine verdeckte Kante?",
     "options": [
      "Dicke durchgezogene Linie",
      "Gestrichelte Linie",
      "Strichpunktlinie"
     ],
     "answer": 1,
     "explain": "Verdeckte Kanten stellt man mit einer gestrichelten Linie dar."
    },
    {
     "type": "tf",
     "q": "Bei der senkrechten Projektion stehen die Projektionsstrahlen senkrecht zur Ebene.",
     "answer": true,
     "explain": "Orthogonal bedeutet genau „im rechten Winkel“."
    }
   ]
  },
  {
   "type": "example",
   "title": "Praxisbeispiel: der Quader",
   "html": "<p>Ein Quader (wie ein Ziegelstein) ist <b>8 cm</b> lang, <b>5 cm</b> tief und <b>3 cm</b> hoch.</p>\n<ul>\n<li><b>Vorderansicht</b>: Rechteck, 8 cm breit und 3 cm hoch.</li>\n<li><b>Draufsicht</b>: Rechteck, 8 cm breit und 5 cm tief, unter dem ersten gezeichnet.</li>\n<li><b>Seitenansicht</b>: Rechteck, 5 cm tief und 3 cm hoch, rechts neben dem ersten.</li>\n</ul>\n<p>Beachte: Jedes Maß erscheint in <b>zwei Ansichten</b>. Die Breite (8) steht in der Vorder- und der Draufsicht, die Höhe (3) in der Vorder- und der Seitenansicht, die Tiefe (5) in der Drauf- und der Seitenansicht. Das ist die „Kontrolle“, die dir sagt, ob du richtig gezeichnet hast!</p>"
  },
  {
   "type": "example",
   "title": "Praxisbeispiel: Zylinder und Pyramide",
   "html": "<ul>\n<li><b>Stehender Zylinder</b> (Durchmesser 4 cm, Höhe 6 cm): Vorderansicht = <b>Rechteck</b> 4 × 6 mit der senkrechten Achse als Strichpunktlinie; Seitenansicht = dasselbe Rechteck; Draufsicht = <b>Kreis</b> mit Durchmesser 4 cm und zwei Achsen als Kreuz.</li>\n<li><b>Pyramide mit quadratischer Grundfläche</b> (Seite 5 cm, Höhe 6 cm): Vorder- und Seitenansicht = gleichschenklige <b>Dreiecke</b> mit Grundseite 5 und Höhe 6; Draufsicht = <b>Quadrat</b> 5 × 5 mit den beiden <b>Diagonalen</b>, die die zur Spitze aufsteigenden Kanten sind.</li>\n</ul>\n<p>Zwei gleiche Ansichten (Rechteck, Rechteck) reichen nicht, um zu erkennen, ob der Gegenstand ein Zylinder oder ein Quader ist: Man braucht die dritte!</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du schon …? Das Militärgeheimnis von Monge",
   "html": "<p>Das Verfahren der Projektionen auf senkrechte Ebenen wurde vom französischen Mathematiker <b>Gaspard Monge</b> (1746–1818) entwickelt, als er ein junger Zeichner an der Militärschule von Mézières war. Mit seiner Methode konnte man <b>Festungen</b> viel schneller entwerfen als mit Berechnungen.</p>\n<p>Sie galt als so nützlich, dass die französische Armee sie jahrelang <b>geheim</b> hielt! Erst nach der Revolution konnte Monge sie öffentlich lehren, und 1799 erschien sein Buch <i>Géométrie descriptive</i> (darstellende Geometrie).</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du schon …? Europa gegen Amerika",
   "html": "<p>In den <b>Vereinigten Staaten</b> und in Kanada benutzt man eine andere Methode, die „amerikanische“ oder Methode des <b>dritten Quadranten</b>: Die Draufsicht liegt <b>über</b> der Vorderansicht und die Ansicht von rechts <b>rechts</b>. Die Ansichten sind dieselben, nur ihre Position auf dem Blatt ändert sich.</p>\n<p>Um Fehler zu vermeiden, setzt man in das Schriftfeld technischer Zeichnungen ein Symbol: einen <b>Kegelstumpf</b>, von vorn und von der Seite gesehen. An der Lage der beiden Zeichnungen erkennt man sofort, welche Methode benutzt wurde. Ein Fehler kann teuer werden: Ein „spiegelverkehrt“ gefertigtes Teil lässt sich nicht montieren!</p>"
  },
  {
   "type": "remember",
   "title": "Merke dir",
   "html": "<ul>\n<li>Senkrechte Projektion: parallele Strahlen, senkrecht zur Ebene → wahre Form, keine Perspektive.</li>\n<li>Drei Ebenen: <b>V.E.</b> (Vorderansicht), <b>H.E.</b> (Draufsicht), <b>S.E.</b> (Seitenansicht).</li>\n<li>Europäische Methode: Draufsicht <b>unter</b> der Vorderansicht, linke Seitenansicht <b>rechts</b> von der Vorderansicht.</li>\n<li>Breite, Höhe und Tiefe erscheinen jeweils in zwei Ansichten: Übertrage sie mit Hilfslinien und der 45°-Linie.</li>\n<li>Linien: durchgezogen dick = sichtbar; gestrichelt = verdeckt; Strichpunkt = Achsen.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Andere Wege, die Projektionen zu verstehen",
   "intro": "Die senkrechten Projektionen versteht man am besten mit den Händen und mit den Augen. Hier einige verschiedene Wege, sie zu „sehen“.",
   "tabs": [
    {
     "label": "📦 Die Schachtel, die sich öffnet",
     "html": "<p>Nimm einen Schuhkarton ohne Deckel und leg einen Gegenstand hinein (einen Würfel, einen Korken, einen LEGO-Stein). Stell dir vor, du zeichnest auf jede Wand <b>den Schatten</b> des Gegenstands, von vorn, von oben und von der Seite gesehen.</p>\n<p>Jetzt <b>öffne die Schachtel</b> und leg sie flach auf den Tisch: Die Rückwand bleibt stehen (V.E.), der Boden klappt <b>nach unten</b> (H.E. unten) und die Seitenwand klappt <b>zur Seite</b> (S.E. rechts). Deshalb liegen die Ansichten genau an diesen Stellen!</p>",
     "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"280\" fill=\"#fefce8\"/>\n<rect x=\"150\" y=\"20\" width=\"160\" height=\"120\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<rect x=\"150\" y=\"140\" width=\"160\" height=\"110\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"3\"/>\n<rect x=\"310\" y=\"20\" width=\"110\" height=\"120\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"3\"/>\n<text x=\"230\" y=\"85\" font-size=\"20\" font-weight=\"bold\" fill=\"#1e3a8a\" text-anchor=\"middle\">V.E.</text>\n<text x=\"230\" y=\"200\" font-size=\"20\" font-weight=\"bold\" fill=\"#14532d\" text-anchor=\"middle\">H.E.</text>\n<text x=\"365\" y=\"85\" font-size=\"20\" font-weight=\"bold\" fill=\"#78350f\" text-anchor=\"middle\">S.E.</text>\n<path d=\"M120 60 Q 90 160 140 220\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n<polygon points=\"140,220 128,206 146,204\" fill=\"#dc2626\"/>\n<text x=\"20\" y=\"150\" font-size=\"16\" fill=\"#b91c1c\">der Boden</text>\n<text x=\"20\" y=\"170\" font-size=\"16\" fill=\"#b91c1c\">klappt nach unten</text>\n<path d=\"M430 30 Q 500 20 520 90\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n<text x=\"440\" y=\"130\" font-size=\"16\" fill=\"#b91c1c\">die Wand</text>\n<text x=\"440\" y=\"150\" font-size=\"16\" fill=\"#b91c1c\">klappt zur Seite</text>\n</svg>"
    },
    {
     "label": "🔦 Schatten in der Sonne",
     "html": "<p>Die <b>Sonne</b> ist so weit weg, dass ihre Strahlen praktisch <b>parallel</b> ankommen. Mittags im Sommer, wenn die Sonne hoch steht, ist der Schatten eines Gegenstands auf dem Boden fast seine <b>Draufsicht</b>.</p>\n<p>Eine nahe Taschenlampe dagegen macht Strahlen, die sich ausbreiten: Der Schatten wird größer als der Gegenstand. Das ist die <b>Zentralprojektion</b>, die der Perspektive und der Fotografie. Die senkrechte Projektion ist wie eine „perfekte Sonne“, die immer im Winkel von 90° zur Ebene scheint.</p>"
    },
    {
     "label": "🇺🇸 Die amerikanische Methode",
     "html": "<p>Bei der amerikanischen Methode (dritter Quadrant) stellst du dir vor, die Ebene liege <b>zwischen dir und dem Gegenstand</b>, wie eine Glasscheibe, auf die du nachzeichnest, was du siehst. Dann gilt:</p>\n<ul>\n<li>die Draufsicht zeichnet man <b>über</b> der Vorderansicht;</li>\n<li>die Ansicht von rechts zeichnet man <b>rechts</b>.</li>\n</ul>\n<p>Bei der europäischen Methode dagegen liegt der Gegenstand <b>zwischen dir und der Ebene</b>, und du projizierst seinen „Schatten“ nach hinten. Die Figuren sind identisch: Nur ihre Anordnung auf dem Blatt ändert sich. Vielen Kindern kommt die amerikanische Methode intuitiver vor: „Ich zeichne, was ich sehe, dort, wo ich es sehe.“</p>"
    },
    {
     "label": "🧊 Dreh den 3D-Körper",
     "html": "<p>Wähle einen Körper, betrachte ihn genau von vorn, dann von oben, dann von der Seite. Zeichne auf ein Blatt, was du in jeder Position siehst: Du hast die drei Projektionen gemacht!</p>",
     "scene": "solid",
     "options": {
      "shape": "cylinder",
      "r": 1,
      "h": 2,
      "color": "#f97316",
      "labels": true,
      "shapes": [
       "cylinder",
       "cone",
       "pyramid",
       "prism",
       "box"
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Karte der senkrechten Projektionen",
   "nodes": [
    {
     "id": "geomdesc",
     "label": "Darstellende Geometrie",
     "x": 50,
     "y": 7,
     "color": "#7c3aed",
     "html": "Der Teil der Geometrie, der 3D-Gegenstände auf einem 2D-Blatt exakt darstellt.",
     "why": "Sie wurde von Gaspard Monge Ende des 18. Jahrhunderts systematisiert. Vor ihm benutzten Architekten und Steinmetze schon Grund- und Aufrisse (das taten schon die Römer und die Erbauer der Kathedralen), aber ohne eine einheitliche mathematische Methode."
    },
    {
     "id": "proiezione",
     "label": "Senkrechte Projektion",
     "x": 50,
     "y": 28,
     "color": "#2563eb",
     "html": "Strahlen parallel zueinander und senkrecht zur Projektionsebene.",
     "why": "Wenn die Strahlen senkrecht sind, behält jede zur Ebene parallele Strecke ihre Länge: Deshalb kann man die Zeichnung messen. Es ist dieselbe Idee wie beim Schatten in der Sonne (parallele Strahlen)."
    },
    {
     "id": "triedro",
     "label": "Dreiflach (3 Ebenen)",
     "x": 50,
     "y": 48,
     "color": "#0ea5e9",
     "html": "V.E., H.E. und S.E., zueinander senkrecht wie Wände und Boden.",
     "why": "Der Raum hat drei Dimensionen (Breite, Höhe, Tiefe): Jede Ansicht zeigt zwei davon, also ist mit drei Ansichten jede Dimension mindestens zweimal dargestellt."
    },
    {
     "id": "pv",
     "label": "Vorderansicht",
     "x": 15,
     "y": 66,
     "color": "#3b82f6",
     "html": "Auf der Vertikalebene: zeigt Breite und Höhe.",
     "why": "Man wählt die Fläche, die den Gegenstand am besten beschreibt: Sie ist das Hauptbild, von dem die anderen Ansichten abhängen."
    },
    {
     "id": "po",
     "label": "Draufsicht",
     "x": 38,
     "y": 82,
     "color": "#16a34a",
     "html": "Auf der Horizontalebene: zeigt Breite und Tiefe.",
     "why": "Es ist der „Grundriss“, derselbe, den man für Häuser und Städte benutzt: Die Idee, von oben zu schauen, ist uralt (Stadtpläne gab es schon im alten Mesopotamien)."
    },
    {
     "id": "pl",
     "label": "Seitenansicht",
     "x": 62,
     "y": 82,
     "color": "#f59e0b",
     "html": "Auf der Seitenebene: zeigt Tiefe und Höhe.",
     "why": "Sie räumt die Zweifel aus, die die ersten beiden Ansichten lassen: zum Beispiel zwischen einem Zylinder und einem Prisma."
    },
    {
     "id": "linee",
     "label": "Linienarten",
     "x": 85,
     "y": 66,
     "color": "#ef4444",
     "html": "Durchgezogen dick (sichtbar), gestrichelt (verdeckt), Strichpunkt (Achsen).",
     "why": "Die technischen Normen (DIN in Deutschland, ISO weltweit) legen die Linienarten so fest, dass jeder, in jedem Land, die Zeichnung gleich liest."
    },
    {
     "id": "metodi",
     "label": "Europäische und amerikanische Methode",
     "x": 85,
     "y": 92,
     "color": "#64748b",
     "html": "Europäisch (erster Quadrant): Draufsicht unten. Amerikanisch (dritter Quadrant): Draufsicht oben.",
     "why": "Es hängt davon ab, wo man sich die Ebene vorstellt: hinter dem Gegenstand (europäisch, wie ein Schatten) oder davor (amerikanisch, wie eine Glasscheibe). Beide sind nach der Norm ISO 128 zulässig, sofern sie mit dem Symbol gekennzeichnet sind."
    },
    {
     "id": "monge",
     "label": "Gaspard Monge",
     "x": 15,
     "y": 92,
     "color": "#a855f7",
     "html": "Französischer Mathematiker (1746–1818), Vater der darstellenden Geometrie.",
     "why": "Bei seiner Arbeit an den Festungen in Mézières erfand er ein schnelles grafisches Verfahren. Sein Buch <i>Géométrie descriptive</i> (1799) war die Grundlage des Unterrichts im technischen Zeichnen an den Ingenieurschulen."
    }
   ],
   "edges": [
    [
     "geomdesc",
     "proiezione",
     "benutzt"
    ],
    [
     "proiezione",
     "triedro",
     "auf"
    ],
    [
     "triedro",
     "pv",
     "liefert"
    ],
    [
     "triedro",
     "po",
     "liefert"
    ],
    [
     "triedro",
     "pl",
     "liefert"
    ],
    [
     "proiezione",
     "linee",
     "wird gezeichnet mit"
    ],
    [
     "triedro",
     "metodi",
     "wird angeordnet mit"
    ],
    [
     "monge",
     "geomdesc",
     "begründete"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Ansichten lesen",
   "questions": [
    {
     "type": "mc",
     "q": "Ein Gegenstand hat als Vorderansicht ein Rechteck, als Seitenansicht ein Rechteck, als Draufsicht einen Kreis. Was ist es?",
     "options": [
      "Ein Kegel",
      "Ein stehender Zylinder",
      "Eine Kugel"
     ],
     "answer": 1,
     "explain": "Nur der stehende Zylinder hat eine kreisförmige Draufsicht und rechteckige Vorder- und Seitenansichten."
    },
    {
     "type": "num",
     "q": "Ein Quader misst 6 × 4 × 2 cm (Länge × Tiefe × Höhe). Wie viele cm² beträgt die Fläche seiner Draufsicht?",
     "answer": 24,
     "unit": "cm²",
     "explain": "Von oben sieht man Länge und Tiefe: 6 × 4 = 24 cm²."
    },
    {
     "type": "tf",
     "q": "Die Tiefe eines Gegenstands erscheint in der Vorderansicht.",
     "answer": false,
     "explain": "Die Vorderansicht zeigt Breite und Höhe; die Tiefe erscheint in der Drauf- und in der Seitenansicht."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Senkrechte Projektion",
   "d": "Darstellung mit parallelen, zur Ebene senkrechten Strahlen: Die Maße bleiben wahr."
  },
  {
   "t": "Dreiflach",
   "d": "Die drei senkrechten Ebenen V.E., H.E. und S.E., auf die der Gegenstand projiziert wird."
  },
  {
   "t": "Vorderansicht (Aufriss)",
   "d": "Frontale Ansicht, auf der Vertikalebene."
  },
  {
   "t": "Draufsicht (Grundriss)",
   "d": "Ansicht von oben, auf der Horizontalebene."
  },
  {
   "t": "Seitenansicht (Seitenriss)",
   "d": "Ansicht von der Seite, auf der Seitenebene."
  },
  {
   "t": "Rissachse",
   "d": "Gerade, in der sich die Vertikal- und die Horizontalebene treffen."
  },
  {
   "t": "Hilfslinien",
   "d": "Dünne Linien, die die Maße von einer Ansicht in die andere übertragen."
  },
  {
   "t": "45°-Linie",
   "d": "Gerade, die dazu dient, die Tiefe von der Draufsicht in die Seitenansicht zu übertragen."
  },
  {
   "t": "Verdeckte Kante",
   "d": "Kante, die man von diesem Blickpunkt aus nicht sieht: Sie wird gestrichelt gezeichnet."
  },
  {
   "t": "Darstellende Geometrie",
   "d": "Wissenschaft, die 3D-Gegenstände exakt in 2D darstellt, begründet von Gaspard Monge."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Was bedeutet „orthogonal“?",
    "options": [
     "Schräg",
     "Senkrecht, im rechten Winkel",
     "Gebogen"
    ],
    "answer": 1,
    "explain": "Orthogonal = senkrecht (vom griechischen orthós, „gerade“, und gonía, „Winkel“)."
   },
   {
    "type": "mc",
    "q": "Auf welche Ebene wird die Vorderansicht projiziert?",
    "options": [
     "Horizontalebene",
     "Vertikalebene",
     "Seitenebene"
    ],
    "answer": 1,
    "explain": "Die Vorderansicht (Aufriss) liegt auf der Vertikalebene."
   },
   {
    "type": "mc",
    "q": "In der europäischen Methode zeichnet man die linke Seitenansicht …",
    "options": [
     "rechts von der Vorderansicht",
     "links von der Vorderansicht",
     "über der Vorderansicht"
    ],
    "answer": 0,
    "explain": "Im ersten Quadranten kommt die Ansicht von links rechts neben die Vorderansicht."
   },
   {
    "type": "tf",
    "q": "Symmetrieachsen zeichnet man mit der Strichpunktlinie.",
    "answer": true,
    "explain": "Feine Strichpunktlinie = Achsen und Mittellinien."
   },
   {
    "type": "num",
    "q": "Ein Würfel hat eine Kantenlänge von 5 cm. Wie viele cm² beträgt die Fläche seiner Vorderansicht?",
    "answer": 25,
    "unit": "cm²",
    "explain": "Die Vorderansicht eines Würfels ist ein Quadrat 5 × 5 = 25 cm²."
   },
   {
    "type": "mc",
    "q": "Wie sieht die Draufsicht einer Pyramide mit quadratischer Grundfläche aus?",
    "options": [
     "Ein Dreieck",
     "Ein Quadrat mit den Diagonalen",
     "Ein Kreis"
    ],
    "answer": 1,
    "explain": "Von oben sieht man die quadratische Grundfläche und die vier Kanten, die zur Spitze aufsteigen, also die Diagonalen."
   },
   {
    "type": "text",
    "q": "Wie heißt die Gerade, in der sich V.E. und H.E. treffen? (Riss…)",
    "answer": [
     "achse",
     "rissachse"
    ],
    "explain": "Es ist die Rissachse."
   },
   {
    "type": "mc",
    "q": "Wozu dient die 45°-Linie?",
    "options": [
     "Um die Perspektive zu zeichnen",
     "Um die Tiefe von der Draufsicht in die Seitenansicht zu übertragen",
     "Um die verdeckten Kanten anzuzeigen"
    ],
    "answer": 1,
    "explain": "Die waagrechten Hilfslinien der Draufsicht „biegen“ an der 45°-Geraden ab und werden in der Seitenansicht senkrecht."
   },
   {
    "type": "order",
    "q": "Bringe die Zeichenschritte in die richtige Reihenfolge.",
    "items": [
     "Vorderansicht wählen",
     "Rissachse und Achsen ziehen",
     "Vorderansicht zeichnen",
     "Maße übertragen und Draufsicht und Seitenansicht zeichnen",
     "Linien je nach ihrer Art nachziehen"
    ],
    "explain": "Zuerst Wahl und Konstruktion, dann die Ansichten, zuletzt das Nachziehen."
   },
   {
    "type": "text",
    "q": "Nachname des französischen Mathematikers, der die darstellende Geometrie begründete.",
    "answer": [
     "monge",
     "gaspard monge"
    ],
    "explain": "Gaspard Monge (1746–1818)."
   },
   {
    "type": "tf",
    "q": "Bei der amerikanischen Methode zeichnet man die Draufsicht über der Vorderansicht.",
    "answer": true,
    "explain": "Im dritten Quadranten kommt die Draufsicht nach oben."
   },
   {
    "type": "num",
    "q": "Ein Quader ist 10 cm lang, 4 cm tief und 3 cm hoch. Wie breit (in cm) ist das Rechteck der Seitenansicht?",
    "answer": 4,
    "unit": "cm",
    "explain": "Die Seitenansicht zeigt Tiefe (4 cm) und Höhe (3 cm): Ihre Breite ist die Tiefe, 4 cm."
   }
  ],
  "gen": [
   [
    "areaRect",
    2
   ]
  ]
 }
});
