TOPIC('de', {
  "id": "m2-mat-pitagora",
  "title": "Der Satz des Pythagoras",
  "intro": "Der Satz des Pythagoras ist eine der berühmtesten Entdeckungen der Mathematik: Er verbindet die drei Seiten jedes <b>rechtwinkligen Dreiecks</b> und erlaubt uns, Entfernungen zu berechnen, die wir nicht direkt messen können.",
  "minutes": 35,
  "sections": [
    {
      "type": "text",
      "title": "1. Das rechtwinklige Dreieck",
      "html": "<p>Ein <b>rechtwinkliges Dreieck</b> hat einen rechten Winkel (90°). Seine Seiten haben besondere Namen:</p><ul><li>die beiden Seiten, die den rechten Winkel bilden, heißen <b>Katheten</b> (wir bezeichnen sie mit <i>a</i> und <i>b</i>);</li><li>die dem rechten Winkel gegenüberliegende Seite ist die <b>Hypotenuse</b> (<i>c</i>): Sie ist immer die längste Seite.</li></ul><p>Pythagoras war ein griechischer Mathematiker und Philosoph, der im 6. Jahrhundert v. Chr. in Kroton in Kalabrien lebte.</p>"
    },
    {
      "type": "svg",
      "title": "Katheten und Hypotenuse",
      "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><polygon points=\"150,250 450,250 150,50\" fill=\"#dbeafe\" stroke=\"#1e3a8a\" stroke-width=\"4\"/><rect x=\"150\" y=\"225\" width=\"25\" height=\"25\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><text x=\"300\" y=\"280\" font-size=\"20\" fill=\"#b91c1c\" text-anchor=\"middle\" font-family=\"sans-serif\">Kathete b</text><text x=\"95\" y=\"155\" font-size=\"20\" fill=\"#b91c1c\" text-anchor=\"middle\" font-family=\"sans-serif\">Kathete a</text><text x=\"330\" y=\"135\" font-size=\"20\" fill=\"#15803d\" font-family=\"sans-serif\">Hypotenuse c</text><text x=\"190\" y=\"240\" font-size=\"16\" fill=\"#1e3a8a\" font-family=\"sans-serif\">90°</text></svg>",
      "caption": "Die Katheten bilden den rechten Winkel; die Hypotenuse liegt ihm gegenüber."
    },
    {
      "type": "remember",
      "title": "Die Aussage",
      "html": "<p>In jedem rechtwinkligen Dreieck ist <b>das Quadrat über der Hypotenuse flächengleich der Summe der Quadrate über den Katheten</b>.</p><p style=\"font-size:1.3em;text-align:center\"><b>c² = a² + b²</b></p><p>Umgestellte Formeln: <b>c = √(a² + b²)</b> &nbsp; <b>a = √(c² − b²)</b> &nbsp; <b>b = √(c² − a²)</b></p>"
    },
    {
      "type": "svg",
      "title": "Der Beweis mit den Quadraten (3, 4, 5)",
      "svg": "<svg viewBox=\"0 0 600 370\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"370\" fill=\"#ffffff\"/><g stroke=\"#334155\" stroke-width=\"2\"><rect x=\"150\" y=\"230\" width=\"120\" height=\"120\" fill=\"#fde68a\"/><rect x=\"60\" y=\"140\" width=\"90\" height=\"90\" fill=\"#bfdbfe\"/><polygon points=\"150,140 270,230 360,110 240,20\" fill=\"#bbf7d0\"/><polygon points=\"150,230 270,230 150,140\" fill=\"#e2e8f0\" stroke-width=\"3\"/></g><text x=\"210\" y=\"297\" font-size=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\">b² = 16</text><text x=\"105\" y=\"192\" font-size=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\">a² = 9</text><text x=\"255\" y=\"130\" font-size=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\">c² = 25</text><text x=\"400\" y=\"220\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e3a8a\">a = 3, b = 4, c = 5</text><text x=\"400\" y=\"255\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#15803d\">9 + 16 = 25 ✔</text><text x=\"400\" y=\"290\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#475569\">gelbe Fläche + blaue Fläche</text><text x=\"400\" y=\"312\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#475569\">= grüne Fläche</text></svg>",
      "caption": "Wenn man über jeder Seite ein Quadrat errichtet, ist der Flächeninhalt des grünen Quadrats (über der Hypotenuse) gleich der Summe der beiden anderen."
    },
    {
      "type": "widget",
      "title": "Probier es selbst: Bewege die Katheten",
      "widget": "pythagoras",
      "options": {
        "a": 3,
        "b": 4
      },
      "caption": "Ändere die Länge der Katheten und beobachte, wie sich die Quadrate verändern: Die Summe der Flächen der kleinen Quadrate ist immer gleich der Fläche des großen."
    },
    {
      "type": "alternatives",
      "title": "Andere Wege, es zu verstehen: 6 Beweise aus aller Welt",
      "intro": "Der Satz des Pythagoras hat mehr als 350 verschiedene Beweise! Wenn dich einer nicht überzeugt, probiere einen anderen: Bei jedem «macht es klick» bei einem anderen.",
      "tabs": [
        {
          "label": "🇨🇳 China: das Gougu",
          "html": "<p>Im <b>Zhou Bi Suan Jing</b>, einem alten chinesischen Text über Astronomie und Mathematik (sein Inhalt stammt von vor etwa 2000 Jahren), heißt der Satz <b>Gougu</b> (gou = kurze Kathete, gu = lange Kathete). Die klassische Figur ist ein Quadrat mit der Seite a + b, in dem vier gleiche Dreiecke liegen: Der Raum in der Mitte ist das Quadrat der Hypotenuse.</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"600\" height=\"300\" fill=\"#fffbeb\"/><g transform=\"translate(40,20)\"><rect x=\"0\" y=\"0\" width=\"260\" height=\"260\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"3\"/><polygon points=\"0,0 100,0 0,160\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"100,0 260,0 260,100\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"260,100 260,260 160,260\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"160,260 0,260 0,160\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"100,0 260,100 160,260 0,160\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"3\"/><text x=\"130\" y=\"138\" font-size=\"28\" text-anchor=\"middle\" fill=\"#7f1d1d\" font-weight=\"bold\">c²</text><text x=\"50\" y=\"-4\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1e3a8a\">a</text><text x=\"180\" y=\"-4\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1e3a8a\">b</text></g><text x=\"330\" y=\"70\" font-size=\"18\" fill=\"#1f2937\">Großes Quadrat: Seite a + b</text><text x=\"330\" y=\"105\" font-size=\"18\" fill=\"#1f2937\">Flächeninhalt = (a + b)²</text><text x=\"330\" y=\"140\" font-size=\"18\" fill=\"#1f2937\">= 4 Dreiecke + Quadrat c²</text><text x=\"330\" y=\"175\" font-size=\"18\" fill=\"#1f2937\">= 4 · (a·b : 2) + c²</text><text x=\"330\" y=\"220\" font-size=\"18\" fill=\"#b91c1c\" font-weight=\"bold\">a² + 2ab + b² = 2ab + c²</text><text x=\"330\" y=\"255\" font-size=\"20\" fill=\"#b91c1c\" font-weight=\"bold\">a² + b² = c²</text></svg>"
        },
        {
          "label": "🏛️ Euklid",
          "html": "<p>In den <b>Elementen</b> (um 300 v. Chr.), Satz I.47, zieht Euklid von der Ecke des rechten Winkels aus eine Senkrechte zur Hypotenuse. Sie teilt das große Quadrat in zwei Rechtecke und zeigt mit kongruenten Dreiecken, dass jedes Rechteck <b>flächengleich</b> (gleicher Flächeninhalt) dem Quadrat über einer der Katheten ist. Das ist die «Windmühlenfigur».</p>",
          "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"320\" fill=\"#f5f3ff\"/><g transform=\"translate(150,30)\"><polygon points=\"0,90 120,90 0,0\" fill=\"#fde68a\" stroke=\"#1f2937\" stroke-width=\"2\"/><polygon points=\"0,0 -90,0 -90,90 0,90\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\" opacity=\".8\"/><polygon points=\"0,0 120,90 210,-30 90,-120\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"2\" opacity=\".8\"/><polygon points=\"0,90 120,90 120,210 0,210\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"2\" opacity=\".8\"/><line x1=\"0\" y1=\"90\" x2=\"133\" y2=\"-88\" stroke=\"#7c3aed\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><text x=\"-45\" y=\"50\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">a²</text><text x=\"60\" y=\"160\" font-size=\"20\" text-anchor=\"middle\" fill=\"#166534\" font-weight=\"bold\">b²</text><text x=\"105\" y=\"-15\" font-size=\"20\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\">c²</text></g><text x=\"360\" y=\"200\" font-size=\"16\" fill=\"#1f2937\">Die violette Linie von der Ecke</text><text x=\"360\" y=\"222\" font-size=\"16\" fill=\"#1f2937\">des rechten Winkels teilt c²</text><text x=\"360\" y=\"244\" font-size=\"16\" fill=\"#1f2937\">in zwei Rechtecke: eines gleich a²,</text><text x=\"360\" y=\"266\" font-size=\"16\" fill=\"#1f2937\">das andere gleich b² (Elemente, I.47)</text></svg>"
        },
        {
          "label": "🇺🇸 Präsident Garfield",
          "html": "<p>Im Jahr 1876 fand der Abgeordnete (und spätere Präsident der Vereinigten Staaten) <b>James Garfield</b> einen Beweis mit einem <b>Trapez</b>, das aus zwei gleichen rechtwinkligen Dreiecken und einem gleichschenkligen Dreieck besteht. Berechnet man den Flächeninhalt des Trapezes auf zwei verschiedene Arten, erhält man den Satz.</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#ecfeff\"/><g transform=\"translate(40,30)\"><polygon points=\"0,240 0,80 100,240\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"100,240 260,240 260,140\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/><polygon points=\"0,80 100,240 260,140\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"2\"/><line x1=\"0\" y1=\"80\" x2=\"260\" y2=\"140\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"-12\" y=\"165\" font-size=\"16\" fill=\"#1e3a8a\">a</text><text x=\"45\" y=\"262\" font-size=\"16\" fill=\"#1e3a8a\">b</text><text x=\"175\" y=\"262\" font-size=\"16\" fill=\"#92400e\">a</text><text x=\"268\" y=\"195\" font-size=\"16\" fill=\"#92400e\">b</text><text x=\"120\" y=\"160\" font-size=\"20\" fill=\"#7f1d1d\" font-weight=\"bold\">c²/2</text></g><text x=\"340\" y=\"80\" font-size=\"17\" fill=\"#1f2937\">Trapez mit den Grundseiten a und b, Höhe a + b</text><text x=\"340\" y=\"115\" font-size=\"17\" fill=\"#1f2937\">Flächeninhalt = (a + b)(a + b) : 2</text><text x=\"340\" y=\"150\" font-size=\"17\" fill=\"#1f2937\">= ab/2 + ab/2 + c²/2</text><text x=\"340\" y=\"195\" font-size=\"18\" fill=\"#b91c1c\" font-weight=\"bold\">→ a² + b² = c²</text><text x=\"340\" y=\"240\" font-size=\"14\" fill=\"#475569\">James Garfield, 1876 (später US-Präsident)</text></svg>"
        },
        {
          "label": "🧩 Puzzle",
          "html": "<p>Nimm <b>4 gleiche rechtwinklige Dreiecke</b> und ein Quadrat mit der Seite a + b. Auf eine Weise angeordnet, lassen sie zwei Quadrate frei, a² und b². Auf eine andere Weise angeordnet, lassen sie nur ein schräges Quadrat frei, c². Der freie Platz ist derselbe, also <b>a² + b² = c²</b>. Keine Rechnung, nur Hinschauen!</p>",
          "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"280\" fill=\"#f0fdf4\"/><g transform=\"translate(30,20)\"><rect width=\"240\" height=\"240\" fill=\"#fff\" stroke=\"#14532d\" stroke-width=\"3\"/><rect x=\"0\" y=\"0\" width=\"90\" height=\"90\" fill=\"#93c5fd\"/><rect x=\"90\" y=\"90\" width=\"150\" height=\"150\" fill=\"#86efac\"/><polygon points=\"90,0 240,0 240,90\" fill=\"#fde68a\" stroke=\"#92400e\"/><polygon points=\"90,0 90,90 240,90\" fill=\"#fcd34d\" stroke=\"#92400e\"/><polygon points=\"0,90 90,90 0,240\" fill=\"#fde68a\" stroke=\"#92400e\"/><polygon points=\"90,90 90,240 0,240\" fill=\"#fcd34d\" stroke=\"#92400e\"/><text x=\"45\" y=\"52\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1e3a8a\">a²</text><text x=\"165\" y=\"172\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#166534\">b²</text></g><g transform=\"translate(330,20)\"><rect width=\"240\" height=\"240\" fill=\"#fca5a5\" stroke=\"#14532d\" stroke-width=\"3\"/><polygon points=\"0,0 90,0 0,150\" fill=\"#fde68a\" stroke=\"#92400e\"/><polygon points=\"90,0 240,0 240,90\" fill=\"#fcd34d\" stroke=\"#92400e\"/><polygon points=\"240,90 240,240 150,240\" fill=\"#fde68a\" stroke=\"#92400e\"/><polygon points=\"150,240 0,240 0,150\" fill=\"#fcd34d\" stroke=\"#92400e\"/><text x=\"120\" y=\"128\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#7f1d1d\">c²</text></g><text x=\"300\" y=\"275\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">Dieselben 4 Dreiecke, dasselbe Quadrat: Der freie Platz ist gleich groß!</text></svg>"
        },
        {
          "label": "🪢 Das ägyptische Seil",
          "html": "<p>Die Baumeister und Landvermesser des alten Ägypten (die «Harpedonapten», Seilspanner) sollen der Überlieferung nach ein Seil mit <b>12 gleichen Abschnitten</b> benutzt haben, die durch Knoten getrennt waren. Spannt man es zu einem Dreieck mit den Seiten 3, 4 und 5, erhält man einen perfekten <b>rechten Winkel</b>: nützlich, um Felder und Fundamente abzustecken. Das ist der <b>Umkehrsatz</b> in Aktion: Wenn 3² + 4² = 5², ist das Dreieck rechtwinklig. Noch heute benutzen Maurer den «3-4-5»-Trick mit dem Zollstock.</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fff7ed\"/><polyline points=\"100,250 340,250 100,70 100,250\" fill=\"#fed7aa\" stroke=\"#9a3412\" stroke-width=\"5\"/><circle cx=\"100\" cy=\"250\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"160\" cy=\"250\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"220\" cy=\"250\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"280\" cy=\"250\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"340\" cy=\"250\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"100\" cy=\"190\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"100\" cy=\"130\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"100\" cy=\"70\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"148\" cy=\"106\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"196\" cy=\"142\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"244\" cy=\"178\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"292\" cy=\"214\" r=\"7\" fill=\"#7c2d12\"/><rect x=\"100\" y=\"230\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\"/><text x=\"220\" y=\"282\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1f2937\">4 Abschnitte</text><text x=\"70\" y=\"165\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1f2937\">3 Abschn.</text><text x=\"250\" y=\"140\" font-size=\"18\" fill=\"#1f2937\">5 Abschnitte</text><text x=\"380\" y=\"110\" font-size=\"17\" fill=\"#1f2937\">Seil mit 12 gleichen Abschnitten,</text><text x=\"380\" y=\"140\" font-size=\"17\" fill=\"#1f2937\">gespannt zum 3-4-5-Dreieck:</text><text x=\"380\" y=\"170\" font-size=\"17\" fill=\"#b91c1c\" font-weight=\"bold\">rechter Winkel garantiert!</text></svg>"
        },
        {
          "label": "🧊 Mit 3D-Würfelchen",
          "html": "<p>Das 3 × 3-Quadrat hat <b>9</b> Würfelchen, das 4 × 4-Quadrat hat <b>16</b>. Zusammen sind es 25: genau so viele, wie man braucht, um das <b>5 × 5</b>-Quadrat über der Hypotenuse zu füllen. Probiere mit den Reglern andere Zahlen aus: Bei 6 und 8 braucht man 36 + 64 = 100 Würfelchen, also ein 10 × 10-Quadrat.</p>",
          "scene": "blocks",
          "options": {
            "mode": "array",
            "a": 5,
            "b": 5
          }
        }
      ]
    },
    {
      "type": "text",
      "title": "2. Wie man ihn benutzt: Schritt für Schritt",
      "html": "<p><b>Die Hypotenuse finden</b> (ich kenne die beiden Katheten):</p><ol><li>ich quadriere jede Kathete;</li><li>ich addiere die beiden Quadrate;</li><li>ich ziehe die Quadratwurzel.</li></ol><p><b>Eine Kathete finden</b> (ich kenne die Hypotenuse und die andere Kathete):</p><ol><li>ich quadriere die Hypotenuse und die bekannte Kathete;</li><li>ich <b>subtrahiere</b> das Quadrat der Kathete vom Quadrat der Hypotenuse;</li><li>ich ziehe die Quadratwurzel.</li></ol><p>Achtung: Bei der Kathete <b>subtrahiert</b> man, bei der Hypotenuse <b>addiert</b> man!</p>"
    },
    {
      "type": "example",
      "title": "Beispiel: die an die Wand gelehnte Leiter",
      "html": "<p>Eine <b>5 m</b> lange Leiter lehnt an einer Wand; der Fuß der Leiter steht <b>3 m</b> von der Wand entfernt. Wie hoch reicht sie?</p><p>Die Leiter ist die Hypotenuse, der Abstand von der Wand eine Kathete: <br>h = √(5² − 3²) = √(25 − 9) = √16 = <b>4 m</b>.</p>"
    },
    {
      "type": "example",
      "title": "Beispiel: die Bildschirmdiagonale",
      "html": "<p>Die Zoll-Angabe eines Fernsehers bezeichnet die <b>Diagonale</b>. Ein Bildschirm, der 88,6 cm breit und 49,8 cm hoch ist, hat die Diagonale:</p><p>d = √(88,6² + 49,8²) = √(7849,96 + 2480,04) = √10330 ≈ <b>101,6 cm</b>, also etwa 40 Zoll (1 Zoll = 2,54 cm).</p><p>Genauso berechnet man die Diagonale eines Rechtecks oder eines Quadrats: In einem Quadrat mit der Seite <i>l</i> ist d = l·√2 ≈ l × 1,414.</p>"
    },
    {
      "type": "quiz",
      "title": "Mini-Quiz 1",
      "questions": [
        {
          "type": "mc",
          "q": "Welche ist die längste Seite eines rechtwinkligen Dreiecks?",
          "options": [
            "Die größere Kathete",
            "Die Hypotenuse",
            "Das hängt vom Dreieck ab"
          ],
          "answer": 1,
          "explain": "Die Hypotenuse liegt dem rechten Winkel gegenüber, dem größten Winkel des Dreiecks, also ist sie immer die längste Seite."
        },
        {
          "type": "num",
          "q": "Katheten 6 cm und 8 cm. Wie lang ist die Hypotenuse?",
          "answer": 10,
          "tol": 0,
          "unit": "cm",
          "explain": "√(36 + 64) = √100 = 10 cm."
        },
        {
          "type": "tf",
          "q": "Der Satz des Pythagoras gilt für alle Dreiecke.",
          "answer": false,
          "explain": "Er gilt nur für rechtwinklige Dreiecke."
        }
      ]
    },
    {
      "type": "text",
      "title": "3. Die pythagoreischen Tripel",
      "html": "<p>Ein <b>pythagoreisches Tripel</b> ist eine Gruppe von drei ganzen Zahlen, die a² + b² = c² erfüllen. Die gebräuchlichsten:</p><table><tr><th>a</th><th>b</th><th>c</th></tr><tr><td>3</td><td>4</td><td>5</td></tr><tr><td>5</td><td>12</td><td>13</td></tr><tr><td>8</td><td>15</td><td>17</td></tr><tr><td>7</td><td>24</td><td>25</td></tr><tr><td>20</td><td>21</td><td>29</td></tr></table><p>Multipliziert man ein Tripel mit derselben Zahl, erhält man ein weiteres Tripel: 3-4-5 × 2 = <b>6-8-10</b>, × 3 = <b>9-12-15</b>.</p><p>Der Satz funktioniert auch umgekehrt: Wenn a² + b² = c², ist das Dreieck <b>rechtwinklig</b>.</p>"
    },
    {
      "type": "curiosity",
      "title": "Das Seil mit den 12 Knoten",
      "html": "<p>Um nach den Überschwemmungen des Nils rechte Winkel auf den Feldern abzustecken, benutzten die alten Ägypter ein Seil mit <b>12 Knoten</b> in gleichen Abständen: Spannten sie es zu einem Dreieck mit den Seiten 3, 4 und 5, erhielten sie einen perfekten rechten Winkel. Maurer benutzen diesen Trick (3-4-5 Meter) noch heute, um zu prüfen, ob die Mauern im rechten Winkel stehen.</p>"
    },
    {
      "type": "curiosity",
      "title": "Mehr als 370 Beweise",
      "html": "<p>Der Satz ist seit mindestens 3800 Jahren bekannt: Die babylonische Tontafel <b>Plimpton 322</b> enthält pythagoreische Tripel. Im Jahr 1940 sammelte der Mathematiker Elisha Loomis <b>367 verschiedene Beweise</b>; einen davon fand sogar ein Präsident der Vereinigten Staaten, James Garfield, im Jahr 1876.</p>"
    },
    {
      "type": "text",
      "title": "4. Anwendungen in der Geometrie",
      "html": "<ul><li><b>Diagonale des Rechtecks</b>: d = √(b² + h²).</li><li><b>Höhe des gleichseitigen Dreiecks</b> mit der Seite l: h = √(l² − (l/2)²) ≈ l × 0,866.</li><li><b>Schräge Seite des rechtwinkligen Trapezes</b>: Man benutzt das Dreieck, das von der Höhe und der Differenz der Grundseiten gebildet wird.</li><li><b>Abstand zweier Punkte</b> im Koordinatensystem: d = √((x₂−x₁)² + (y₂−y₁)²).</li><li><b>Raumdiagonale des Würfels</b> mit der Kante s: D = s·√3.</li></ul>"
    },
    {
      "type": "conceptMap",
      "title": "Begriffslandkarte: Woher kommt der Satz?",
      "nodes": [
        {
          "id": "def",
          "label": "Definitionen: Punkt, Gerade, Ebene",
          "x": 50,
          "y": 6,
          "color": "#64748b",
          "html": "<p>Die Grundobjekte der Geometrie.</p>",
          "why": "<p>Euklid beginnt die Elemente mit 23 Definitionen («Ein Punkt ist, was keine Teile hat»). Man kann sie nicht beweisen: Sie sind das gemeinsame Vokabular, von dem man ausgeht.</p>"
        },
        {
          "id": "post",
          "label": "Die ersten 4 Postulate des Euklid",
          "x": 22,
          "y": 24,
          "color": "#a855f7",
          "html": "<p>Durch zwei Punkte geht eine Gerade; eine Strecke lässt sich verlängern; man kann einen Kreis zeichnen; alle rechten Winkel sind gleich.</p>",
          "why": "<p>Ein <b>Postulat</b> (oder Axiom) ist eine Regel, die man ohne Beweis akzeptiert, weil sie einleuchtend scheint. Jeder Satz muss auf etwas aufbauen: Würde man alles ins Unendliche beweisen, finge man nie an. Euklid wählte sehr wenige Regeln und leitete daraus Hunderte von Sätzen ab.</p>"
        },
        {
          "id": "quinto",
          "label": "5. Postulat: die Parallelen",
          "x": 78,
          "y": 24,
          "color": "#7c3aed",
          "html": "<p>Durch einen Punkt außerhalb einer Geraden geht <b>genau eine</b> Parallele (in der Form von Playfair).</p>",
          "why": "<p>Über 2000 Jahre lang versuchten Mathematiker, es aus den anderen vier zu beweisen, ohne Erfolg. Im 19. Jahrhundert verstanden Lobatschewski, Bolyai und Gauß, warum: Man kann es durch ein anderes Postulat <b>ersetzen</b> und erhält ebenso widerspruchsfreie Geometrien!</p>"
        },
        {
          "id": "angoli",
          "label": "Winkelsumme = 180°",
          "x": 78,
          "y": 46,
          "color": "#2563eb",
          "html": "<p>In jedem Dreieck ergeben die Innenwinkel zusammen 180°.</p>",
          "why": "<p>Man beweist es, indem man die Parallele zu einer Seite zieht: Man braucht die Wechselwinkel, die genau vom 5. Postulat abhängen.</p>"
        },
        {
          "id": "aree",
          "label": "Flächeninhalte und flächengleiche Figuren",
          "x": 22,
          "y": 46,
          "color": "#0d9488",
          "html": "<p>Figuren, die in dieselben Teile zerlegt sind, haben denselben Flächeninhalt; das Rechteck hat den Flächeninhalt b × h.</p>",
          "why": "<p>Euklid vergleicht Flächeninhalte, indem er kongruente Figuren verschiebt und neu zusammensetzt (Kongruenzsätze für Dreiecke). Auch Rechtecke und Quadrate «funktionieren» nur in der Geometrie mit dem 5. Postulat gut.</p>"
        },
        {
          "id": "pit",
          "label": "Satz des Pythagoras",
          "x": 50,
          "y": 66,
          "color": "#dc2626",
          "html": "<p>c² = a² + b² in rechtwinkligen Dreiecken.</p>",
          "why": "<p>Man beweist ihn durch die Kombination flächengleicher Figuren (Euklid, I.47) oder durch Ähnlichkeit von Dreiecken. Er wird Pythagoras (6. Jh. v. Chr.) zugeschrieben, aber die Babylonier kannten bereits Tripel wie 3-4-5: Die Tafel <b>Plimpton 322</b> (um 1800 v. Chr.) listet viele auf. Das Verdienst der Griechen ist der allgemeine <b>Beweis</b>, nicht nur das Beispiel.</p>"
        },
        {
          "id": "inverso",
          "label": "Umkehrsatz",
          "x": 18,
          "y": 86,
          "color": "#ea580c",
          "html": "<p>Wenn a² + b² = c², ist das Dreieck rechtwinklig.</p>",
          "why": "<p>Das ist Satz I.48 des Euklid. Er dient dazu, rechte Winkel zu konstruieren (das 3-4-5-Seil) und zu prüfen, ob ein Dreieck rechtwinklig ist.</p>"
        },
        {
          "id": "distanza",
          "label": "Abstand im Koordinatensystem",
          "x": 50,
          "y": 92,
          "color": "#16a34a",
          "html": "<p>d = √((x₂ − x₁)² + (y₂ − y₁)²)</p>",
          "why": "<p>Die waagerechte und die senkrechte Verschiebung sind die Katheten eines rechtwinkligen Dreiecks: Der Abstand ist die Hypotenuse. So funktionieren auch GPS, Videospiele und digitale Karten.</p>"
        },
        {
          "id": "noneuclide",
          "label": "Nichteuklidische Geometrien",
          "x": 84,
          "y": 82,
          "color": "#be185d",
          "html": "<p>Auf einer Kugel gilt der Satz des Pythagoras <b>nicht</b>.</p>",
          "why": "<p>Auf der Erdoberfläche kann ein Dreieck mit einer Ecke am Nordpol und zwei am Äquator <b>drei rechte Winkel</b> haben (Summe 270°). Ändert man das 5. Postulat, ändern sich auch Pythagoras und die Winkelsumme. Einstein benutzte genau eine nichteuklidische Geometrie, um in der Allgemeinen Relativitätstheorie (1915) die gekrümmte Raumzeit zu beschreiben.</p>"
        }
      ],
      "edges": [
        [
          "def",
          "post",
          "Grundlage von"
        ],
        [
          "def",
          "quinto",
          "Grundlage von"
        ],
        [
          "post",
          "aree",
          "ermöglichen"
        ],
        [
          "quinto",
          "angoli",
          "beweist"
        ],
        [
          "aree",
          "pit",
          "beweisen"
        ],
        [
          "angoli",
          "pit",
          "dienen zu"
        ],
        [
          "pit",
          "inverso",
          "wird umgekehrt"
        ],
        [
          "pit",
          "distanza",
          "wird angewendet"
        ],
        [
          "quinto",
          "noneuclide",
          "wenn man es ändert…"
        ],
        [
          "noneuclide",
          "pit",
          "gilt nicht mehr"
        ]
      ]
    },
    {
      "type": "quiz",
      "title": "Mini-Quiz 2",
      "questions": [
        {
          "type": "num",
          "q": "Hypotenuse 13 cm, eine Kathete 5 cm. Wie lang ist die andere Kathete?",
          "answer": 12,
          "tol": 0,
          "unit": "cm",
          "explain": "√(169 − 25) = √144 = 12 cm."
        },
        {
          "type": "mc",
          "q": "Welches davon ist ein pythagoreisches Tripel?",
          "options": [
            "4, 5, 6",
            "6, 8, 10",
            "2, 3, 4"
          ],
          "answer": 1,
          "explain": "36 + 64 = 100 = 10². Es ist das Doppelte des Tripels 3-4-5."
        },
        {
          "type": "num",
          "q": "Rechteck mit der Grundseite 12 cm und der Höhe 5 cm: Wie lang ist die Diagonale?",
          "answer": 13,
          "tol": 0,
          "unit": "cm",
          "explain": "√(144 + 25) = √169 = 13 cm."
        }
      ]
    }
  ],
  "glossary": [
    {
      "t": "Rechtwinkliges Dreieck",
      "d": "Dreieck mit einem Winkel von 90°."
    },
    {
      "t": "Katheten",
      "d": "Die beiden Seiten, die den rechten Winkel bilden."
    },
    {
      "t": "Hypotenuse",
      "d": "Die dem rechten Winkel gegenüberliegende Seite; sie ist die längste."
    },
    {
      "t": "Pythagoreisches Tripel",
      "d": "Drei ganze Zahlen a, b, c mit a² + b² = c²."
    },
    {
      "t": "Quadratwurzel",
      "d": "Die Zahl, die mit sich selbst multipliziert die Ausgangszahl ergibt: √49 = 7."
    },
    {
      "t": "Flächengleich",
      "d": "Mit demselben Flächeninhalt (oder demselben Volumen), auch wenn die Form verschieden ist."
    }
  ],
  "verifica": {
    "pass": 0.7,
    "questions": [
      {
        "type": "mc",
        "q": "Der Satz des Pythagoras lautet:",
        "options": [
          "c = a + b",
          "c² = a² + b²",
          "a² = b² + c²",
          "c² = a² − b²"
        ],
        "answer": 1,
        "explain": "Das Quadrat der Hypotenuse (c) ist gleich der Summe der Quadrate der Katheten."
      },
      {
        "type": "num",
        "q": "Katheten 9 cm und 12 cm. Hypotenuse?",
        "answer": 15,
        "tol": 0,
        "unit": "cm",
        "explain": "√(81 + 144) = √225 = 15 cm (Tripel 3-4-5 × 3)."
      },
      {
        "type": "num",
        "q": "Hypotenuse 17 cm, Kathete 8 cm. Andere Kathete?",
        "answer": 15,
        "tol": 0,
        "unit": "cm",
        "explain": "√(289 − 64) = √225 = 15 cm."
      },
      {
        "type": "tf",
        "q": "Ein Dreieck mit den Seiten 5, 12, 13 ist rechtwinklig.",
        "answer": true,
        "explain": "25 + 144 = 169 = 13²: Es gilt der Umkehrsatz."
      },
      {
        "type": "tf",
        "q": "Ein Dreieck mit den Seiten 4, 6, 7 ist rechtwinklig.",
        "answer": false,
        "explain": "16 + 36 = 52, aber 7² = 49: Sie sind nicht gleich."
      },
      {
        "type": "num",
        "q": "Seite eines Quadrats 10 cm. Diagonale (auf Zehntel runden)?",
        "answer": 14.1,
        "tol": 0.05,
        "unit": "cm",
        "explain": "d = 10 × √2 ≈ 14,1 cm."
      },
      {
        "type": "mc",
        "q": "Um eine Kathete zu finden, wenn ich Hypotenuse und andere Kathete kenne, muss ich:",
        "options": [
          "die Quadrate addieren",
          "die Quadrate subtrahieren",
          "die Seiten addieren",
          "die Seiten multiplizieren"
        ],
        "answer": 1,
        "explain": "a = √(c² − b²): Man subtrahiert das Quadrat der bekannten Kathete vom Quadrat der Hypotenuse."
      },
      {
        "type": "num",
        "q": "Eine 10 m lange Leiter steht mit dem Fuß 6 m von der Wand entfernt. Wie hoch reicht sie?",
        "answer": 8,
        "tol": 0,
        "unit": "m",
        "explain": "√(100 − 36) = √64 = 8 m."
      },
      {
        "type": "text",
        "q": "Wie heißt die dem rechten Winkel gegenüberliegende Seite?",
        "answer": [
          "Hypotenuse",
          "die Hypotenuse",
          "ipotenusa"
        ],
        "explain": "Es ist die Hypotenuse."
      },
      {
        "type": "order",
        "q": "Bringe die Schritte zur Berechnung der Hypotenuse in die richtige Reihenfolge",
        "items": [
          "Ich quadriere die Katheten",
          "Ich addiere die Quadrate",
          "Ich ziehe die Quadratwurzel"
        ],
        "explain": "Zuerst die Quadrate, dann die Summe, schließlich die Wurzel."
      }
    ],
    "gen": [
      [
        "pythagoras",
        2
      ]
    ]
  }
});
