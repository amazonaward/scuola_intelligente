TOPIC('de', {
 "id": "p4-mat-poligoni",
 "title": "Die Vielecke (Polygone)",
 "intro": "Schau dich um: Das Heft ist ein Rechteck, das STOPP-Schild ein Achteck, die Zellen der Bienen sind Sechsecke. Das sind alles <b>Vielecke</b>! Wir lernen, sie zu erkennen, ihnen einen Namen zu geben und die Geheimnisse von <b>Dreiecken</b> und <b>Vierecken</b> zu entdecken.",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "Was ist ein Vieleck?",
   "html": "<p>Nimm einen Stift und zeichne eine Linie, die an einem Punkt beginnt, aus <b>vielen geraden Stücken</b> besteht und genau zum Startpunkt zurückkehrt, ohne sich je zu kreuzen. Du hast einen <b>geschlossenen Streckenzug</b> gezeichnet.</p>\n<p>Das <b>Vieleck</b> ist der Teil der Ebene, der von einem geschlossenen Streckenzug eingeschlossen wird, <b>zusammen</b> mit der Linie selbst (seinem Rand).</p>\n<p>Jedes Vieleck hat:</p>\n<ul>\n<li><b>Seiten</b>: die geraden Strecken des Rands;</li>\n<li><b>Ecken</b> (Eckpunkte): die Punkte, an denen sich zwei Seiten treffen;</li>\n<li><b>Winkel</b>: die „Öffnungen“ zwischen zwei benachbarten Seiten, an jeder Ecke;</li>\n<li><b>Diagonalen</b>: die Strecken, die zwei <b>nicht benachbarte</b> Ecken verbinden.</li>\n</ul>\n<p>In jedem Vieleck ist die Anzahl der Seiten, Ecken und Winkel <b>immer gleich</b>: Ein Vieleck mit 5 Seiten hat auch 5 Ecken und 5 Winkel.</p>\n<p><b>Keine Vielecke sind</b>: der Kreis (der Rand ist gekrümmt), eine offene Figur, eine Figur mit sich kreuzenden Seiten.</p>"
  },
  {
   "type": "svg",
   "title": "Die Teile eines Vielecks",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f0f9ff\"/>\n<polygon points=\"120,230 90,120 200,50 310,110 280,230\" fill=\"#bae6fd\" stroke=\"#1e40af\" stroke-width=\"5\"/>\n<line x1=\"90\" y1=\"120\" x2=\"310\" y2=\"110\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"10 6\"/>\n<line x1=\"200\" y1=\"50\" x2=\"120\" y2=\"230\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"10 6\"/>\n<circle cx=\"200\" cy=\"50\" r=\"9\" fill=\"#f59e0b\" stroke=\"#78350f\" stroke-width=\"2\"/>\n<path d=\"M 105 210 A 25 25 0 0 1 140 228\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"5\"/>\n<text x=\"350\" y=\"60\" font-size=\"20\" fill=\"#f59e0b\" font-weight=\"bold\">● Ecke</text>\n<text x=\"350\" y=\"110\" font-size=\"20\" fill=\"#1e40af\" font-weight=\"bold\">━ Seite</text>\n<text x=\"350\" y=\"160\" font-size=\"20\" fill=\"#16a34a\" font-weight=\"bold\">◜ Winkel</text>\n<text x=\"350\" y=\"210\" font-size=\"20\" fill=\"#dc2626\" font-weight=\"bold\">┅ Diagonale</text>\n<text x=\"200\" y=\"280\" font-size=\"18\" fill=\"#1f2937\" text-anchor=\"middle\">Fünfeck: 5 Seiten, 5 Ecken, 5 Winkel</text>\n</svg>",
   "caption": "Das Fünfeck hat 5 Seiten, 5 Ecken, 5 Winkel und 5 Diagonalen (hier siehst du 2)."
  },
  {
   "type": "text",
   "title": "Der Name hängt von der Anzahl der Seiten ab",
   "html": "<p>Das Wort <b>Polygon</b> kommt aus dem Griechischen: <i>polýs</i> = „viele“ und <i>gonía</i> = „Winkel“. „Polygon“ bedeutet also „Figur mit vielen Winkeln“.</p>\n<table>\n<tr><th>Seiten</th><th>Name</th><th>Wo siehst du es?</th></tr>\n<tr><td>3</td><td><b>Dreieck</b></td><td>Warnschild ⚠️</td></tr>\n<tr><td>4</td><td><b>Viereck</b></td><td>Fenster, Blatt Papier, Bildschirm</td></tr>\n<tr><td>5</td><td><b>Fünfeck</b></td><td>die schwarzen Flecken des Fußballs ⚽</td></tr>\n<tr><td>6</td><td><b>Sechseck</b></td><td>Bienenwaben 🐝, Schraubenmutter</td></tr>\n<tr><td>7</td><td><b>Siebeneck</b></td><td>manche englische Münzen</td></tr>\n<tr><td>8</td><td><b>Achteck</b></td><td>STOPP-Schild 🛑</td></tr>\n<tr><td>9</td><td><b>Neuneck</b></td><td></td></tr>\n<tr><td>10</td><td><b>Zehneck</b></td><td></td></tr>\n</table>\n<p>Das Vieleck mit der <b>kleinsten Anzahl an Seiten</b> ist das Dreieck: Mit nur 2 Strecken kann man keine Figur schließen!</p>"
  },
  {
   "type": "text",
   "title": "Konvex, konkav und regelmäßig",
   "html": "<ul>\n<li>Ein Vieleck ist <b>konvex</b>, wenn keine Seite, verlängert, ins Innere der Figur eindringt. Alle seine Winkel sind kleiner als ein gestreckter Winkel (180°).</li>\n<li>Ein Vieleck ist <b>konkav</b>, wenn es eine „Einbuchtung“ hat, wie ein Stern oder ein Pfeil: Mindestens eine verlängerte Seite dringt in die Figur ein, und mindestens ein Winkel ist größer als 180°.</li>\n<li>Ein Vieleck ist <b>regelmäßig</b>, wenn es <b>lauter gleiche Seiten</b> und <b>lauter gleiche Winkel</b> hat: das gleichseitige Dreieck, das Quadrat, das Sechseck der Bienen …</li>\n</ul>\n<p>Achtung: Die <b>Raute</b> hat 4 gleiche Seiten, aber die Winkel nicht, also ist sie <b>nicht</b> regelmäßig. Das <b>Rechteck</b> hat 4 gleiche Winkel, aber die Seiten nicht, also ist auch es <b>nicht</b> regelmäßig. Nur das <b>Quadrat</b> hat beides!</p>"
  },
  {
   "type": "svg",
   "title": "Konvex, konkav, regelmäßig",
   "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"280\" fill=\"#fefce8\"/>\n<polygon points=\"40,200 70,80 170,60 190,190\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"4\"/>\n<text x=\"115\" y=\"245\" font-size=\"20\" fill=\"#166534\" text-anchor=\"middle\" font-weight=\"bold\">konvex</text>\n<polygon points=\"300,50 325,120 395,125 340,165 360,235 300,195 240,235 260,165 205,125 275,120\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"4\"/>\n<text x=\"300\" y=\"270\" font-size=\"20\" fill=\"#991b1b\" text-anchor=\"middle\" font-weight=\"bold\">konkav (Stern)</text>\n<polygon points=\"490,60 550,95 550,165 490,200 430,165 430,95\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"4\"/>\n<text x=\"490\" y=\"245\" font-size=\"20\" fill=\"#1e3a8a\" text-anchor=\"middle\" font-weight=\"bold\">regelmäßig (Sechseck)</text>\n</svg>",
   "caption": "Der Stern hat „Einbuchtungen“: Er ist konkav. Das Sechseck hat lauter gleiche Seiten und Winkel: Es ist regelmäßig."
  },
  {
   "type": "widget",
   "title": "Finde die Teile des Vielecks",
   "widget": "labelDiagram",
   "options": {
    "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/>\n<polygon points=\"150,250 100,110 300,40 500,110 450,250\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"5\"/>\n<line x1=\"100\" y1=\"110\" x2=\"500\" y2=\"110\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"10 6\"/>\n<path d=\"M 420 250 A 30 30 0 0 1 462 226\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"5\"/>\n<circle cx=\"300\" cy=\"40\" r=\"9\" fill=\"#1d4ed8\"/>\n</svg>",
    "spots": [
     {
      "x": 300,
      "y": 40,
      "label": "Ecke"
     },
     {
      "x": 300,
      "y": 250,
      "label": "Seite"
     },
     {
      "x": 300,
      "y": 110,
      "label": "Diagonale"
     },
     {
      "x": 440,
      "y": 235,
      "label": "Winkel"
     },
     {
      "x": 300,
      "y": 180,
      "label": "Innenfläche"
     }
    ]
   },
   "caption": "Tippe auf jeden Punkt und wähle den richtigen Namen."
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Vielecke erkennen",
   "questions": [
    {
     "type": "mc",
     "q": "Welche dieser Figuren ist KEIN Vieleck?",
     "options": [
      "Das Quadrat",
      "Der Kreis",
      "Das Dreieck"
     ],
     "answer": 1,
     "explain": "Der Kreis hat einen gekrümmten Rand: Ein Vieleck hat nur gerade Seiten."
    },
    {
     "type": "num",
     "q": "Wie viele Ecken hat ein Achteck?",
     "answer": 8,
     "explain": "Seiten, Ecken und Winkel sind immer gleich viele: 8."
    },
    {
     "type": "tf",
     "q": "Die Raute ist ein regelmäßiges Vieleck.",
     "answer": false,
     "explain": "Sie hat gleiche Seiten, aber nicht gleiche Winkel: Um regelmäßig zu sein, braucht es beides."
    }
   ]
  },
  {
   "type": "text",
   "title": "Die Dreiecke",
   "html": "<p>Das Dreieck hat 3 Seiten, 3 Ecken, 3 Winkel und <b>keine Diagonale</b>. Es ist das „stabilste“ Vieleck: Wenn du ein Dreieck aus drei Stäbchen baust, verformt es sich nicht!</p>\n<p><b>Einteilung nach den Seiten</b>:</p>\n<ul>\n<li><b>gleichseitig</b>: 3 gleiche Seiten (und 3 gleiche Winkel zu je 60°);</li>\n<li><b>gleichschenklig</b>: 2 gleiche Seiten (und 2 gleiche Winkel an der Basis);</li>\n<li><b>ungleichseitig</b>: 3 verschieden lange Seiten.</li>\n</ul>\n<p><b>Einteilung nach den Winkeln</b>:</p>\n<ul>\n<li><b>rechtwinklig</b>: hat einen <b>rechten</b> Winkel (90°), wie die Ecke eines Blatts;</li>\n<li><b>spitzwinklig</b>: 3 <b>spitze</b> Winkel (kleiner als 90°);</li>\n<li><b>stumpfwinklig</b>: ein <b>stumpfer</b> Winkel (größer als 90°).</li>\n</ul>\n<p>⭐ Die goldene Regel: <b>Die Summe der Innenwinkel eines Dreiecks ist immer 180°</b>, also ein gestreckter Winkel.</p>\n<p>Noch eine Regel: In einem Dreieck ist <b>jede Seite kürzer als die Summe der beiden anderen</b>. Mit Stäbchen von 2, 3 und 10 cm schließt sich das Dreieck nicht!</p>"
  },
  {
   "type": "svg",
   "title": "Die Familie der Dreiecke",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#fdf4ff\"/>\n<text x=\"300\" y=\"26\" font-size=\"18\" fill=\"#6b21a8\" text-anchor=\"middle\" font-weight=\"bold\">Nach den Seiten</text>\n<polygon points=\"40,125 140,125 90,40\" fill=\"#f0abfc\" stroke=\"#86198f\" stroke-width=\"4\"/>\n<text x=\"90\" y=\"148\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">gleichseitig</text>\n<polygon points=\"250,125 350,125 300,35\" fill=\"#c4b5fd\" stroke=\"#5b21b6\" stroke-width=\"4\"/>\n<text x=\"300\" y=\"148\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">gleichschenklig</text>\n<polygon points=\"440,125 570,125 470,55\" fill=\"#a5b4fc\" stroke=\"#3730a3\" stroke-width=\"4\"/>\n<text x=\"505\" y=\"148\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">ungleichseitig</text>\n<text x=\"300\" y=\"176\" font-size=\"18\" fill=\"#9a3412\" text-anchor=\"middle\" font-weight=\"bold\">Nach den Winkeln</text>\n<polygon points=\"40,280 150,280 40,195\" fill=\"#fdba74\" stroke=\"#9a3412\" stroke-width=\"4\"/>\n<rect x=\"40\" y=\"262\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"#9a3412\" stroke-width=\"3\"/>\n<text x=\"140\" y=\"215\" font-size=\"16\" fill=\"#1f2937\">rechtwinklig</text>\n<polygon points=\"250,280 360,280 290,190\" fill=\"#fcd34d\" stroke=\"#92400e\" stroke-width=\"4\"/>\n<text x=\"350\" y=\"215\" font-size=\"16\" fill=\"#1f2937\">spitzwinklig</text>\n<polygon points=\"420,280 580,280 450,240\" fill=\"#bef264\" stroke=\"#3f6212\" stroke-width=\"4\"/>\n<text x=\"500\" y=\"225\" font-size=\"16\" fill=\"#1f2937\">stumpfwinklig</text>\n</svg>",
   "caption": "Jedes Dreieck hat zwei „Familiennamen“: einen für die Seiten und einen für die Winkel. Z. B.: rechtwinklig-gleichschenkliges Dreieck."
  },
  {
   "type": "widget",
   "title": "Ordne die Dreiecke nach den Seiten",
   "widget": "classify",
   "options": {
    "groups": [
     "Gleichseitig",
     "Gleichschenklig",
     "Ungleichseitig"
    ],
    "items": [
     [
      "Seiten 5, 5, 5 cm",
      0
     ],
     [
      "Seiten 4, 4, 6 cm",
      1
     ],
     [
      "Seiten 3, 4, 5 cm",
      2
     ],
     [
      "Seiten 7, 7, 7 cm",
      0
     ],
     [
      "Seiten 10, 6, 10 cm",
      1
     ],
     [
      "Seiten 6, 8, 9 cm",
      2
     ],
     [
      "⚠️ Warnschild",
      0
     ],
     [
      "🏠 Giebeldach mit zwei gleich langen Seiten",
      1
     ]
    ]
   },
   "caption": "Zähle, wie viele Seiten gleich sind: 3 → gleichseitig, 2 → gleichschenklig, keine → ungleichseitig."
  },
  {
   "type": "text",
   "title": "Die Vierecke",
   "html": "<p>Vierecke haben 4 Seiten, 4 Ecken, 4 Winkel und <b>2 Diagonalen</b>. Die <b>Summe ihrer Innenwinkel ist 360°</b>: Eine Diagonale teilt das Viereck nämlich in <b>2 Dreiecke</b>, und 180° + 180° = 360°.</p>\n<p>Man teilt sie ein, indem man auf die <b>parallelen Seiten</b> schaut (die sich nie treffen, wie die Schienen der Eisenbahn):</p>\n<ul>\n<li><b>Trapez</b>: hat <b>genau ein Paar</b> paralleler Seiten (die beiden Grundseiten). Es kann <i>rechtwinklig</i>, <i>gleichschenklig</i> oder <i>allgemein</i> sein.</li>\n<li><b>Parallelogramm</b>: hat <b>zwei Paare</b> paralleler Seiten; gegenüberliegende Seiten sind gleich lang und gegenüberliegende Winkel gleich groß.</li>\n<li><b>Raute</b>: Parallelogramm mit <b>4 gleich langen Seiten</b>; die Diagonalen stehen senkrecht aufeinander.</li>\n<li><b>Rechteck</b>: Parallelogramm mit <b>4 rechten Winkeln</b>; die Diagonalen sind gleich lang.</li>\n<li><b>Quadrat</b>: hat 4 gleiche Seiten <b>und</b> 4 rechte Winkel. Es ist gleichzeitig eine Raute und ein Rechteck!</li>\n</ul>\n<p>Ein Viereck ohne parallele Seiten heißt <b>allgemeines Viereck</b>, wie ein Drachen 🪁.</p>"
  },
  {
   "type": "svg",
   "title": "Der Stammbaum der Vierecke",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#ecfeff\"/>\n<rect x=\"215\" y=\"10\" width=\"170\" height=\"36\" rx=\"10\" fill=\"#0e7490\"/>\n<text x=\"300\" y=\"34\" font-size=\"17\" fill=\"#ffffff\" text-anchor=\"middle\" font-weight=\"bold\">Vierecke</text>\n<line x1=\"300\" y1=\"46\" x2=\"140\" y2=\"80\" stroke=\"#0e7490\" stroke-width=\"3\"/>\n<line x1=\"300\" y1=\"46\" x2=\"460\" y2=\"80\" stroke=\"#0e7490\" stroke-width=\"3\"/>\n<polygon points=\"80,140 200,140 170,90 110,90\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"3\"/>\n<text x=\"140\" y=\"165\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Trapez (1 Paar ∥)</text>\n<polygon points=\"390,140 510,140 540,90 420,90\" fill=\"#a7f3d0\" stroke=\"#065f46\" stroke-width=\"3\"/>\n<text x=\"465\" y=\"165\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Parallelogramm (2 Paare ∥)</text>\n<line x1=\"465\" y1=\"172\" x2=\"370\" y2=\"200\" stroke=\"#065f46\" stroke-width=\"3\"/>\n<line x1=\"465\" y1=\"172\" x2=\"540\" y2=\"200\" stroke=\"#065f46\" stroke-width=\"3\"/>\n<polygon points=\"370,205 405,240 370,275 335,240\" fill=\"#fbcfe8\" stroke=\"#9d174d\" stroke-width=\"3\"/>\n<text x=\"370\" y=\"298\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Raute</text>\n<rect x=\"495\" y=\"215\" width=\"90\" height=\"50\" fill=\"#c7d2fe\" stroke=\"#3730a3\" stroke-width=\"3\"/>\n<text x=\"540\" y=\"298\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Rechteck</text>\n<rect x=\"430\" y=\"245\" width=\"42\" height=\"42\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"3\"/>\n<text x=\"451\" y=\"314\" font-size=\"16\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\">Quadrat</text>\n<line x1=\"395\" y1=\"262\" x2=\"430\" y2=\"266\" stroke=\"#991b1b\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/>\n<line x1=\"495\" y1=\"250\" x2=\"472\" y2=\"262\" stroke=\"#991b1b\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/>\n<polygon points=\"120,210 160,240 120,300 80,240\" fill=\"#ddd6fe\" stroke=\"#5b21b6\" stroke-width=\"3\"/>\n<text x=\"210\" y=\"260\" font-size=\"16\" fill=\"#1f2937\">Allg. Viereck</text>\n<text x=\"210\" y=\"280\" font-size=\"14\" fill=\"#5b21b6\">(Drachen, kein ∥)</text>\n</svg>",
   "caption": "Das Quadrat hat zwei „Eltern“: Es ist sowohl eine Raute (gleiche Seiten) als auch ein Rechteck (rechte Winkel)."
  },
  {
   "type": "3d",
   "title": "Vielecke in Körpern",
   "scene": "solid",
   "options": {
    "shape": "prism",
    "n": 6,
    "r": 1,
    "h": 1.2,
    "color": "#f59e0b",
    "labels": true,
    "shapes": [
     "cube",
     "prism",
     "pyramid"
    ]
   },
   "caption": "Die Flächen der Körper sind Vielecke: Das sechsseitige Prisma hat 2 Sechsecke und 6 Rechtecke, die Pyramide hat Dreiecke. Wechsle den Körper mit den Knöpfen und zähle die Flächen."
  },
  {
   "type": "example",
   "title": "Praxisbeispiel: Die Fliesenlegerin",
   "html": "<p>Frau Anna muss den Badezimmerboden <b>ohne Lücken</b> fliesen. Welche regelmäßigen Fliesen kann sie benutzen?</p>\n<ul>\n<li><b>Quadrate</b>: Um einen Punkt passen 4, weil 4 × 90° = 360° ✅</li>\n<li><b>Gleichseitige Dreiecke</b>: Es passen 6, weil 6 × 60° = 360° ✅</li>\n<li><b>Regelmäßige Sechsecke</b>: Es passen 3, weil 3 × 120° = 360° ✅</li>\n<li><b>Regelmäßige Fünfecke</b>: Jeder Winkel ist 108°; 3 × 108° = 324°, es bleibt eine Lücke ❌</li>\n</ul>\n<p>Nur diese drei regelmäßigen Vielecke können allein einen Boden bedecken: Man nennt das <b>regelmäßige Parkettierungen</b>.</p>"
  },
  {
   "type": "example",
   "title": "Praxisbeispiel: Der fehlende Winkel",
   "html": "<p>Luca hat ein Dreieck gezeichnet. Mit dem Geodreieck misst er zwei Winkel: <b>50°</b> und <b>70°</b>. Wie groß ist der dritte, ohne ihn zu messen?</p>\n<ol>\n<li>Ich addiere die Winkel, die ich kenne: 50° + 70° = 120°</li>\n<li>Ich ziehe sie von 180° ab: 180° − 120° = <b>60°</b></li>\n</ol>\n<p>Alle drei Winkel sind kleiner als 90°: Es ist ein <b>spitzwinkliges</b> Dreieck.</p>\n<p>Bei einem Viereck geht es genauso, nur ausgehend von <b>360°</b>: Wenn drei Winkel 90°, 90° und 120° messen, ist der vierte 360° − 300° = <b>60°</b>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du schon …? Die mathematischen Bienen",
   "html": "<p>Bienen bauen ihre Waben mit Zellen in Form eines <b>Sechsecks</b>. Unter den Figuren, die die Ebene ohne Lücken bedecken, ist das Sechseck diejenige, die am meisten Platz umschließt und dabei am wenigsten Wachs für die Wände braucht. 1999 hat der Mathematiker Thomas Hales bewiesen, dass es wirklich die beste Lösung ist (die „Wabenvermutung“, die schon in der Antike aufgestellt wurde)!</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du schon …? Der Fußball",
   "html": "<p>Der klassische Fußball besteht aus <b>12 schwarzen Fünfecken</b> und <b>20 weißen Sechsecken</b>, die zusammengenäht sind. Dasselbe Muster findet man in einem Kohlenstoffmolekül namens <b>Fulleren</b> (C₆₀), das 1985 entdeckt wurde.</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du schon …? Warum Kräne aus Dreiecken bestehen",
   "html": "<p>Schau dir einen Kran, einen Strommast oder den Eiffelturm an: Sie sind voller <b>Dreiecke</b>. Ein Quadrat aus Stäben lässt sich „zusammendrücken“ und wird zur Raute, ein Dreieck nicht: Wenn die drei Seiten fest sind, ist die Form fest. Deshalb benutzen Ingenieure Dreiecke, um Konstruktionen steif zu machen.</p>"
  },
  {
   "type": "remember",
   "title": "Zum Merken",
   "html": "<ul>\n<li>Vieleck = Teil der Ebene, der von einem geschlossenen Streckenzug begrenzt wird. Seiten = Ecken = Winkel.</li>\n<li>Dreiecke: nach den Seiten <b>gleichseitig, gleichschenklig, ungleichseitig</b>; nach den Winkeln <b>rechtwinklig, spitzwinklig, stumpfwinklig</b>. Winkelsumme = <b>180°</b>.</li>\n<li>Vierecke: Trapez (1 Paar paralleler Seiten), Parallelogramm, Raute, Rechteck, Quadrat (2 Paare). Winkelsumme = <b>360°</b>.</li>\n<li>Regelmäßig = gleiche Seiten <b>und</b> gleiche Winkel.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Andere Wege, Vielecke zu verstehen",
   "intro": "Wenn dir die Definitionen schwierig vorkommen, versuche anzufassen, zu falten, zu laufen oder zu bauen. Such dir den Weg aus, der dir gefällt!",
   "tabs": [
    {
     "label": "🐢 Lauf wie eine Schildkröte",
     "html": "<p>In den 1960er-Jahren erfand Seymour Papert am MIT (USA) die Sprache <b>Logo</b>: Kinder zeichnen, indem sie eine Schildkröte steuern, die läuft und sich dreht. Probiere es auf dem Hof oder in der Turnhalle!</p>\n<ul>\n<li><b>Quadrat</b>: Wiederhole 4-mal „5 Schritte vor, um 90° drehen“.</li>\n<li><b>Gleichseitiges Dreieck</b>: Wiederhole 3-mal „5 Schritte vor, um 120° drehen“.</li>\n<li><b>Sechseck</b>: Wiederhole 6-mal „5 Schritte vor, um 60° drehen“.</li>\n</ul>\n<p>Hast du es gemerkt? Am Ende hast du immer <b>eine ganze Drehung gemacht: 360°</b>! 4 × 90 = 3 × 120 = 6 × 60 = 360. Um ein regelmäßiges Vieleck mit <b>n</b> Seiten zu laufen, musst du dich jedes Mal um 360° : n drehen.</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#f0fdf4\"/>\n<rect x=\"60\" y=\"50\" width=\"160\" height=\"160\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"5\" stroke-dasharray=\"14 8\"/>\n<text x=\"60\" y=\"40\" font-size=\"30\">🐢</text>\n<text x=\"140\" y=\"240\" font-size=\"18\" text-anchor=\"middle\" fill=\"#14532d\">4 × (vor, drehe 90°)</text>\n<polygon points=\"420,40 510,200 330,200\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"5\" stroke-dasharray=\"14 8\"/>\n<text x=\"405\" y=\"30\" font-size=\"30\">🐢</text>\n<text x=\"420\" y=\"240\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1e3a8a\">3 × (vor, drehe 120°)</text>\n</svg>"
    },
    {
     "label": "🪢 Mit Gummibändern (Geobrett)",
     "html": "<p>Das <b>Geobrett</b> ist ein Brett mit Nägeln in Reihen, erfunden in den 1950er-Jahren vom ägyptisch-britischen Mathematiker <b>Caleb Gattegno</b>. Man spannt bunte Gummibänder von einem Nagel zum anderen.</p>\n<p>Du kannst es mit einem Korkbrett und Reißzwecken selbst bauen: Versuche,</p>\n<ul>\n<li>ein Quadrat zu spannen, und verschiebe dann nur eine Ecke des Gummibands: Es wird ein Trapez oder ein beliebiges Viereck;</li>\n<li>ein Dreieck mit einem rechten Winkel zu spannen (folge den Nagelreihen);</li>\n<li>eine Figur mit einer Einbuchtung zu spannen: ein <b>konkaves</b> Vieleck.</li>\n</ul>\n<p>Mit den Händen versteht man sofort, dass die Zahl der „Spitzen“ (Ecken) gleich der Zahl der Gummiband-Stücke (Seiten) ist.</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"150\" y=\"10\" width=\"300\" height=\"240\" rx=\"14\" fill=\"#d6a76b\" stroke=\"#78350f\" stroke-width=\"4\"/>\n<g fill=\"#374151\">\n<circle cx=\"190\" cy=\"50\" r=\"6\"/><circle cx=\"245\" cy=\"50\" r=\"6\"/><circle cx=\"300\" cy=\"50\" r=\"6\"/><circle cx=\"355\" cy=\"50\" r=\"6\"/><circle cx=\"410\" cy=\"50\" r=\"6\"/>\n<circle cx=\"190\" cy=\"105\" r=\"6\"/><circle cx=\"245\" cy=\"105\" r=\"6\"/><circle cx=\"300\" cy=\"105\" r=\"6\"/><circle cx=\"355\" cy=\"105\" r=\"6\"/><circle cx=\"410\" cy=\"105\" r=\"6\"/>\n<circle cx=\"190\" cy=\"160\" r=\"6\"/><circle cx=\"245\" cy=\"160\" r=\"6\"/><circle cx=\"300\" cy=\"160\" r=\"6\"/><circle cx=\"355\" cy=\"160\" r=\"6\"/><circle cx=\"410\" cy=\"160\" r=\"6\"/>\n<circle cx=\"190\" cy=\"215\" r=\"6\"/><circle cx=\"245\" cy=\"215\" r=\"6\"/><circle cx=\"300\" cy=\"215\" r=\"6\"/><circle cx=\"355\" cy=\"215\" r=\"6\"/><circle cx=\"410\" cy=\"215\" r=\"6\"/>\n</g>\n<polygon points=\"190,50 300,50 245,160\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"5\"/>\n<polygon points=\"300,105 410,105 410,215 355,160 300,215\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"5\"/>\n</svg>"
    },
    {
     "label": "📄 Papier falten (Origami)",
     "html": "<p>In <b>Japan</b> lernt man Geometrie auch mit <b>Origami</b>, der Kunst des Papierfaltens.</p>\n<ol>\n<li>Nimm ein rechteckiges Blatt (A4). Falte eine Ecke, bis sie die gegenüberliegende Seite berührt, und schneide den überstehenden Streifen ab: Du erhältst ein <b>Quadrat</b>!</li>\n<li>Falte das Quadrat entlang der Diagonale: Du erhältst 2 gleiche <b>rechtwinklig-gleichschenklige Dreiecke</b>.</li>\n<li>Reiße die 3 Ecken eines beliebigen Papierdreiecks ab und lege sie nebeneinander: Sie bilden immer eine <b>gerade Linie</b>, also einen gestreckten Winkel von <b>180°</b>!</li>\n</ol>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"240\" fill=\"#fff7ed\"/>\n<polygon points=\"40,200 240,200 110,50\" fill=\"#fdba74\" stroke=\"#9a3412\" stroke-width=\"4\"/>\n<path d=\"M 70 200 A 30 30 0 0 0 52 172\" fill=\"#ef4444\"/>\n<path d=\"M 210 200 A 30 30 0 0 1 222 179\" fill=\"#3b82f6\"/>\n<text x=\"110\" y=\"85\" font-size=\"22\" fill=\"#16a34a\">●</text>\n<text x=\"270\" y=\"130\" font-size=\"34\" fill=\"#1f2937\">➜</text>\n<line x1=\"330\" y1=\"180\" x2=\"580\" y2=\"180\" stroke=\"#1f2937\" stroke-width=\"4\"/>\n<path d=\"M 455 180 L 395 180 A 60 60 0 0 1 420 131 Z\" fill=\"#ef4444\"/>\n<path d=\"M 455 180 L 420 131 A 60 60 0 0 1 480 125 Z\" fill=\"#16a34a\"/>\n<path d=\"M 455 180 L 480 125 A 60 60 0 0 1 515 180 Z\" fill=\"#3b82f6\"/>\n<text x=\"455\" y=\"220\" font-size=\"22\" text-anchor=\"middle\" fill=\"#1f2937\" font-weight=\"bold\">= 180°</text>\n</svg>"
    },
    {
     "label": "🧊 Vielecke in 3D-Körpern",
     "html": "<p>Vielecke sind „flach“, aber du findest sie als <b>Flächen</b> von Körpern. Dreh die Pyramide: Die Grundfläche ist ein Vieleck, die Seitenflächen sind <b>Dreiecke</b>. Wechsle den Körper und zähle die Flächen jeder Art.</p>",
     "scene": "solid",
     "options": {
      "shape": "pyramid",
      "n": 5,
      "r": 1.1,
      "h": 1.3,
      "color": "#a855f7",
      "labels": true,
      "shapes": [
       "pyramid",
       "prism",
       "cube"
      ]
     }
    },
    {
     "label": "🔺 Strohhalme und Pfeifenreiniger",
     "html": "<p>In vielen Schulen in <b>Nordeuropa</b> baut man zuerst, bevor man zeichnet. Nimm Strohhalme und Pfeifenreiniger (oder Zahnstocher und Knetmasse):</p>\n<ul>\n<li>Baue ein Quadrat und drücke es an einer Ecke: Es verformt sich und wird zur <b>Raute</b>. Die Winkel ändern sich, die Seiten nicht!</li>\n<li>Baue ein Dreieck und drücke es: Es <b>bewegt sich nicht</b>. Das Dreieck ist starr.</li>\n<li>Füge dem Quadrat eine Diagonale hinzu: Jetzt sind es 2 Dreiecke und es verformt sich nicht mehr. Das ist der Trick bei Toren und Kränen!</li>\n</ul>"
    },
    {
     "label": "🇬🇷 Archimedes: Das Vieleck, das zum Kreis wird",
     "html": "<p><b>Archimedes</b> war ein großer <b>griechischer</b> Mathematiker, der im 3. Jahrhundert v. Chr. in <b>Syrakus</b> auf Sizilien lebte. Er wollte wissen, wie oft der Durchmesser in den Kreisumfang passt (die Zahl, die wir heute <b>π</b> nennen). Seine Idee: <b>regelmäßige Vielecke</b> in den Kreis zeichnen, mit immer <b>mehr Seiten</b>: 6, 12, 24, 48, 96. Je mehr Seiten das Vieleck hat, desto mehr ähnelt es dem Kreis!</p><p>Mit dem 96-Eck fand er heraus, dass π etwas mehr als 3 10/71 und etwas weniger als 3 1/7 ist, also ungefähr <b>3,14</b>.</p><p>🎯 <b>Konstruiere das Sechseck des Archimedes</b>:</p><ol><li>Zeichne einen Kreis mit dem Zirkel. <b>Verändere die Öffnung nicht!</b></li><li>Setze den Zirkel an einem Punkt des Kreises ein und mache eine Markierung auf dem Kreis. Setze auf der Markierung ein und mache eine weitere. Mach weiter: Es sind genau <b>6</b> Markierungen.</li><li>Verbinde die Markierungen mit dem Lineal: Das ist ein <b>regelmäßiges Sechseck</b>.</li></ol><p>Die Seite des Sechsecks ist so lang wie der <b>Radius</b>! Also ist der Umfang 6 Radien = 3 Durchmesser. Der Kreis ist etwas länger als das Sechseck: Deshalb ist π etwas mehr als 3.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><circle cx=\"160\" cy=\"150\" r=\"120\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"3\"/><polygon points=\"160,30 263.9,90 263.9,210 160,270 56.1,210 56.1,90\" fill=\"#fde68a\" fill-opacity=\"0.8\" stroke=\"#b45309\" stroke-width=\"3\"/><line x1=\"160\" y1=\"150\" x2=\"160\" y2=\"30\" stroke=\"#dc2626\" stroke-width=\"3\"/><text x=\"166\" y=\"95\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">r</text><text x=\"222\" y=\"56\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#b45309\" font-weight=\"bold\">r</text><circle cx=\"440\" cy=\"150\" r=\"120\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"3\"/><polygon points=\"440,30 500,46.1 543.9,90 560,150 543.9,210 500,253.9 440,270 380,253.9 336.1,210 320,150 336.1,90 380,46.1\" fill=\"#bbf7d0\" fill-opacity=\"0.8\" stroke=\"#15803d\" stroke-width=\"3\"/><text x=\"160\" y=\"292\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">6 Seiten</text><text x=\"440\" y=\"292\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">12 Seiten: fast ein Kreis!</text></svg>"
    },
    {
     "label": "🕌 Die geometrischen Sterne der arabischen Kunst",
     "html": "<p>In Moscheen, Palästen und Büchern der <b>arabischen</b> und islamischen Welt gibt es Verzierungen, die nur aus <b>regelmäßigen Vielecken</b> bestehen: Sterne, Sechsecke, Achtecke, die ineinandergreifen. Die Handwerker zeichneten sie mit <b>Lineal und Zirkel</b>, immer ausgehend von einem Kreis. Einer der berühmtesten Sterne ist der <b>achtzackige Stern</b>.</p><ol><li>Zeichne einen Kreis und ein <b>Quadrat</b>, dessen Ecken auf dem Kreis liegen.</li><li>Zeichne ein <b>zweites, gleiches Quadrat</b> mit demselben Mittelpunkt, aber <b>um 45° gedreht</b> (seine Ecken liegen in der Mitte zwischen denen des ersten).</li><li>Die beiden Quadrate zusammen bilden einen <b>achtzackigen Stern</b>.</li></ol><p>Jetzt suche die versteckten Vielecke: In der Mitte ist ein <b>Achteck</b> (8 Seiten, roter Rand); an den Zacken sind <b>8</b> gleichschenklige <b>Dreiecke</b>. Wie viele Seiten hat der Rand des Sterns? <b>16</b>! Es ist ein <b>konkaves</b> Vieleck: Einige seiner Winkel sind größer als ein gestreckter Winkel.</p><p>🎯 Probiere es mit <b>zwei gleichseitigen Dreiecken</b>: eins mit der Spitze nach oben und eins mit der Spitze nach unten. Welchen Stern erhältst du? Und welches Vieleck ist in der Mitte?</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fefce8\"/><circle cx=\"300\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#cbd5e1\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><polygon points=\"300,25 425,150 300,275 175,150\" fill=\"#2563eb\" fill-opacity=\"0.55\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"388.4,61.6 388.4,238.4 211.6,238.4 211.6,61.6\" fill=\"#f59e0b\" fill-opacity=\"0.55\" stroke=\"#92400e\" stroke-width=\"2\"/><polygon points=\"336.6,61.6 388.4,113.4 388.4,186.6 336.6,238.4 263.4,238.4 211.6,186.6 211.6,113.4 263.4,61.6\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"4\"/><text x=\"40\" y=\"60\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e3a8a\" font-weight=\"bold\">Quadrat 1</text><text x=\"40\" y=\"82\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#92400e\" font-weight=\"bold\">+ Quadrat 2</text><text x=\"40\" y=\"104\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#92400e\">um 45° gedreht</text><text x=\"450\" y=\"60\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">in der Mitte:</text><text x=\"450\" y=\"82\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">ein Achteck</text><text x=\"450\" y=\"220\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">an den Zacken:</text><text x=\"450\" y=\"242\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">8 Dreiecke</text></svg>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Landkarte der Vielecke: Tippe einen Knoten an und erfahre das Warum",
   "nodes": [
    {
     "id": "piano",
     "label": "Punkte, Geraden und Ebene",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "Die grundlegenden „Zutaten“ der Geometrie: der Punkt, die gerade Linie und die Ebene.",
     "why": "Sie werden nicht definiert: Man nimmt sie als Ausgangsideen an. Der griechische Mathematiker <b>Euklid</b> schrieb um 300 v. Chr. in Alexandria (Ägypten) die <i>Elemente</i>, ausgehend von wenigen <b>Postulaten</b> (Ausgangswahrheiten) wie „durch zwei Punkte geht genau eine Gerade“. Alles andere wird daraus bewiesen."
    },
    {
     "id": "spezzata",
     "label": "Geschlossener Streckenzug",
     "x": 50,
     "y": 24,
     "color": "#0ea5e9",
     "html": "Eine Linie aus aufeinanderfolgenden Strecken, die zum Startpunkt zurückkehrt, ohne sich zu kreuzen.",
     "why": "Sie dient dazu, einen Teil der Ebene „einzuzäunen“. Wäre die Linie gekrümmt, hätten wir Figuren wie den Kreis; wäre sie offen, schlösse sie nichts ein."
    },
    {
     "id": "poligono",
     "label": "Vieleck",
     "x": 50,
     "y": 42,
     "color": "#16a34a",
     "html": "Der Teil der Ebene, der von einem geschlossenen Streckenzug eingeschlossen wird, einschließlich des Rands.",
     "why": "Aus dem Griechischen <i>polýs</i> (viele) + <i>gonía</i> (Winkel). Die alten Ägypter und Babylonier vermaßen schon Felder in Form von Dreiecken und Trapezen; die Griechen gaben die Namen und die Beweise."
    },
    {
     "id": "elementi",
     "label": "Seiten, Ecken, Winkel, Diagonalen",
     "x": 15,
     "y": 42,
     "color": "#f59e0b",
     "html": "Die Teile jedes Vielecks. Seiten, Ecken und Winkel sind immer gleich viele.",
     "why": "Jede Seite endet in einer Ecke, wo die nächste Seite beginnt: Wenn du um die Figur herumgehst, triffst du abwechselnd eine Seite und eine Ecke, also sind es gleich viele."
    },
    {
     "id": "regolare",
     "label": "Regelmäßiges Vieleck",
     "x": 85,
     "y": 42,
     "color": "#a855f7",
     "html": "Es hat lauter gleiche Seiten und lauter gleiche Winkel.",
     "why": "Man kann es immer in einen Kreis zeichnen, mit den Ecken auf dem Kreisrand. Euklid zeigte, wie man gleichseitiges Dreieck, Quadrat, regelmäßiges Fünfeck und Sechseck nur mit Lineal und Zirkel konstruiert. 1796 entdeckte der junge <b>Gauß</b>, dass man auch das regelmäßige 17-Eck konstruieren kann!"
    },
    {
     "id": "triangolo",
     "label": "Dreieck",
     "x": 25,
     "y": 70,
     "color": "#ef4444",
     "html": "Vieleck mit 3 Seiten. Es wird nach den Seiten und nach den Winkeln eingeteilt.",
     "why": "Es ist das einfachste und starrste Vieleck: Drei Seiten legen die Form fest. Jedes andere Vieleck lässt sich in Dreiecke zerlegen, indem man die Diagonalen von einer Ecke zieht."
    },
    {
     "id": "somma180",
     "label": "Winkelsumme = 180°",
     "x": 25,
     "y": 92,
     "color": "#dc2626",
     "html": "Die Innenwinkel jedes Dreiecks ergeben immer 180°.",
     "why": "Das beweist man mit dem <b>Parallelenaxiom von Euklid</b>: Zeichne durch die Ecke eine Parallele zur Grundseite, und die drei Winkel liegen nebeneinander auf der Geraden, bilden also einen gestreckten Winkel. Auf einer Kugel (wie der Erde) gilt das Axiom nicht und die Summe ist größer als 180°!"
    },
    {
     "id": "quadrilatero",
     "label": "Vierecke",
     "x": 75,
     "y": 70,
     "color": "#2563eb",
     "html": "Vielecke mit 4 Seiten: Trapeze, Parallelogramme, Rauten, Rechtecke, Quadrate.",
     "why": "Man teilt sie nach den <b>Paaren paralleler Seiten</b> ein: 0 (allgemeines Viereck), 1 (Trapez), 2 (Parallelogramm und seine „Kinder“ Raute, Rechteck und Quadrat)."
    },
    {
     "id": "somma360",
     "label": "Winkelsumme = 360°",
     "x": 75,
     "y": 92,
     "color": "#1d4ed8",
     "html": "Die Innenwinkel jedes Vierecks ergeben 360°.",
     "why": "Eine Diagonale teilt es in 2 Dreiecke: 2 × 180° = 360°. Allgemein teilt man ein Vieleck mit n Seiten in (n − 2) Dreiecke, die Summe ist also (n − 2) × 180°: beim Fünfeck 540°, beim Sechseck 720°."
    }
   ],
   "edges": [
    [
     "piano",
     "spezzata",
     "aus Strecken entsteht"
    ],
    [
     "spezzata",
     "poligono",
     "schließt ein"
    ],
    [
     "poligono",
     "elementi",
     "hat"
    ],
    [
     "poligono",
     "regolare",
     "kann sein"
    ],
    [
     "poligono",
     "triangolo",
     "3 Seiten"
    ],
    [
     "poligono",
     "quadrilatero",
     "4 Seiten"
    ],
    [
     "triangolo",
     "somma180",
     "Eigenschaft"
    ],
    [
     "quadrilatero",
     "somma360",
     "= 2 Dreiecke"
    ],
    [
     "somma180",
     "somma360",
     "× 2"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Dreiecke und Vierecke",
   "questions": [
    {
     "type": "num",
     "q": "In einem Dreieck messen zwei Winkel 90° und 35°. Wie groß ist der dritte?",
     "answer": 55,
     "unit": "°",
     "explain": "180 − 90 − 35 = 55°."
    },
    {
     "type": "mc",
     "q": "Ein Viereck mit genau einem Paar paralleler Seiten ist ein …",
     "options": [
      "Raute",
      "Trapez",
      "Rechteck"
     ],
     "answer": 1,
     "explain": "Das Trapez hat genau ein Paar paralleler Seiten, die Grundseiten."
    },
    {
     "type": "tf",
     "q": "Das Quadrat ist auch ein Rechteck.",
     "answer": true,
     "explain": "Es hat 4 rechte Winkel: Also ist es ein besonderes Rechteck (mit lauter gleichen Seiten)."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Vieleck (Polygon)",
   "d": "Teil der Ebene, der von einem geschlossenen Streckenzug begrenzt wird, einschließlich des Rands."
  },
  {
   "t": "Seite",
   "d": "Jede der Strecken, die den Rand des Vielecks bilden."
  },
  {
   "t": "Ecke",
   "d": "Punkt, an dem sich zwei aufeinanderfolgende Seiten treffen."
  },
  {
   "t": "Diagonale",
   "d": "Strecke, die zwei nicht aufeinanderfolgende Ecken verbindet."
  },
  {
   "t": "Regelmäßiges Vieleck",
   "d": "Vieleck mit lauter gleichen Seiten und lauter gleichen Winkeln."
  },
  {
   "t": "Konkaves Vieleck",
   "d": "Vieleck mit einer Einbuchtung: Mindestens ein Winkel ist größer als 180°."
  },
  {
   "t": "Gleichschenkliges Dreieck",
   "d": "Dreieck mit zwei gleich langen Seiten."
  },
  {
   "t": "Ungleichseitiges Dreieck",
   "d": "Dreieck mit drei verschieden langen Seiten."
  },
  {
   "t": "Rechter Winkel",
   "d": "Winkel von 90°, wie die Ecke eines Blatts."
  },
  {
   "t": "Parallele Seiten",
   "d": "Seiten, die auf Geraden liegen, die sich nie treffen."
  },
  {
   "t": "Trapez",
   "d": "Viereck mit genau einem Paar paralleler Seiten."
  },
  {
   "t": "Parallelogramm",
   "d": "Viereck mit zwei Paaren paralleler Seiten."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Wie heißt das Vieleck mit 6 Seiten?",
    "options": [
     "Fünfeck",
     "Sechseck",
     "Achteck"
    ],
    "answer": 1,
    "explain": "6 Seiten: Sechseck, wie die Zellen der Bienen."
   },
   {
    "type": "num",
    "q": "Wie viele Seiten hat ein Zehneck?",
    "answer": 10,
    "explain": "Deka = zehn."
   },
   {
    "type": "tf",
    "q": "Ein Dreieck kann zwei rechte Winkel haben.",
    "answer": false,
    "explain": "90° + 90° = 180°: Für den dritten Winkel bliebe nichts übrig."
   },
   {
    "type": "num",
    "q": "In einem Dreieck messen zwei Winkel 60° und 80°. Wie groß ist der dritte?",
    "answer": 40,
    "unit": "°",
    "explain": "180 − 60 − 80 = 40°."
   },
   {
    "type": "mc",
    "q": "Ein Dreieck mit den Seiten 6 cm, 6 cm und 4 cm ist …",
    "options": [
     "gleichseitig",
     "gleichschenklig",
     "ungleichseitig"
    ],
    "answer": 1,
    "explain": "Es hat zwei gleiche Seiten: gleichschenklig."
   },
   {
    "type": "mc",
    "q": "Welches Viereck hat 4 gleiche Seiten, aber KEINE rechten Winkel?",
    "options": [
     "Raute",
     "Rechteck",
     "Trapez"
    ],
    "answer": 0,
    "explain": "Die Raute hat gleiche Seiten und gleiche gegenüberliegende Winkel, aber keine rechten."
   },
   {
    "type": "num",
    "q": "Drei Winkel eines Vierecks messen 90°, 90° und 100°. Wie groß ist der vierte?",
    "answer": 80,
    "unit": "°",
    "explain": "360 − 90 − 90 − 100 = 80°."
   },
   {
    "type": "text",
    "q": "Wie heißt die Strecke, die zwei nicht benachbarte Ecken verbindet?",
    "answer": [
     "diagonale",
     "die diagonale"
    ],
    "explain": "Es ist die Diagonale."
   },
   {
    "type": "tf",
    "q": "Das Dreieck hat keine Diagonalen.",
    "answer": true,
    "explain": "Im Dreieck ist jede Ecke mit den beiden anderen benachbart: Es gibt keine nicht aufeinanderfolgenden Ecken."
   },
   {
    "type": "order",
    "q": "Ordne vom Vieleck mit den wenigsten Seiten zu dem mit den meisten.",
    "items": [
     "Dreieck",
     "Viereck",
     "Fünfeck",
     "Sechseck",
     "Achteck"
    ],
    "explain": "3, 4, 5, 6, 8 Seiten."
   },
   {
    "type": "mc",
    "q": "Ein regelmäßiges Vieleck muss haben …",
    "options": [
     "nur gleiche Seiten",
     "nur gleiche Winkel",
     "lauter gleiche Seiten und Winkel"
    ],
    "answer": 2,
    "explain": "Es braucht beides."
   }
  ],
  "gen": [
   [
    "triAngle",
    2
   ]
  ]
 }
});
