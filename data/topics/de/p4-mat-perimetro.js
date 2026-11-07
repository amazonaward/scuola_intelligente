TOPIC('de', {
 "id": "p4-mat-perimetro",
 "title": "Der Umfang",
 "intro": "Wie viel Zaun braucht man für den Gemüsegarten? Wie viel Band, um ein Geschenk einmal zu umwickeln? Um das zu beantworten, muss man den <b>Rand</b> der Figuren messen, also ihren <b>Umfang</b>.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "Was ist der Umfang?",
   "html": "<p>Der <b>Umfang</b> ist die <b>Länge des Rands</b> einer ebenen Figur.</p>\n<p>Das Fachwort kommt aus dem Griechischen: <i>perí</i> = „herum“ und <i>métron</i> = „Maß“. Der Perimeter ist also das „Maß des Wegs rundherum“.</p>\n<p>Bei einem Vieleck findet man den Umfang ganz einfach:</p>\n<p style=\"font-size:1.2em\"><b>Umfang = Summe der Längen aller Seiten</b></p>\n<p>Der Umfang ist eine <b>Länge</b>: Er wird in <b>mm, cm, dm, m, km</b> … gemessen. Man bezeichnet ihn meist mit dem Buchstaben <b>U</b>.</p>\n<p>⚠️ Bevor du addierst, prüfe, ob alle Seiten in der <b>gleichen Maßeinheit</b> angegeben sind! Man kann nicht Zentimeter und Meter addieren.</p>"
  },
  {
   "type": "svg",
   "title": "Die Ameise läuft rundherum",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f0fdf4\"/>\n<polygon points=\"80,240 120,70 330,50 420,200 260,250\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"6\" stroke-dasharray=\"16 6\"/>\n<text x=\"72\" y=\"236\" font-size=\"30\">🐜</text>\n<text x=\"80\" y=\"155\" font-size=\"20\" fill=\"#1f2937\" font-weight=\"bold\">5 cm</text>\n<text x=\"200\" y=\"45\" font-size=\"20\" fill=\"#1f2937\" font-weight=\"bold\">6 cm</text>\n<text x=\"385\" y=\"115\" font-size=\"20\" fill=\"#1f2937\" font-weight=\"bold\">4 cm</text>\n<text x=\"350\" y=\"245\" font-size=\"20\" fill=\"#1f2937\" font-weight=\"bold\">5 cm</text>\n<text x=\"140\" y=\"270\" font-size=\"20\" fill=\"#1f2937\" font-weight=\"bold\">5 cm</text>\n<text x=\"440\" y=\"60\" font-size=\"20\" fill=\"#15803d\" font-weight=\"bold\">U = 5 + 6 + 4</text>\n<text x=\"470\" y=\"88\" font-size=\"20\" fill=\"#15803d\" font-weight=\"bold\">+ 5 + 5</text>\n<text x=\"470\" y=\"120\" font-size=\"24\" fill=\"#b91c1c\" font-weight=\"bold\">= 25 cm</text>\n</svg>",
   "caption": "Die Ameise startet an einer Ecke und läuft an allen Seiten entlang, bis sie wieder am Startpunkt ist: Der zurückgelegte Weg ist der Umfang."
  },
  {
   "type": "text",
   "title": "Die gebräuchlichsten Formeln",
   "html": "<p>Für manche Figuren gibt es Abkürzungen, weil sie gleiche Seiten haben.</p>\n<table>\n<tr><th>Figur</th><th>Umfang</th><th>Warum</th></tr>\n<tr><td><b>Quadrat</b> (Seite a)</td><td>U = a × 4</td><td>4 gleiche Seiten</td></tr>\n<tr><td><b>Rechteck</b> (Länge a, Breite b)</td><td>U = (a + b) × 2</td><td>2 gleiche Längen und 2 gleiche Breiten</td></tr>\n<tr><td><b>Gleichseitiges Dreieck</b></td><td>U = a × 3</td><td>3 gleiche Seiten</td></tr>\n<tr><td><b>Gleichschenkliges Dreieck</b></td><td>U = Basis + Schenkel × 2</td><td>2 gleiche schräge Seiten</td></tr>\n<tr><td><b>Raute</b></td><td>U = a × 4</td><td>4 gleiche Seiten</td></tr>\n<tr><td><b>Parallelogramm</b></td><td>U = (a + b) × 2</td><td>gegenüberliegende Seiten gleich</td></tr>\n<tr><td><b>Regelmäßiges Vieleck</b> mit n Seiten</td><td>U = a × n</td><td>n gleiche Seiten</td></tr>\n<tr><td>Beliebiges Vieleck</td><td>Summe aller Seiten</td><td>—</td></tr>\n</table>"
  },
  {
   "type": "widget",
   "title": "Spiele mit dem Rechteck",
   "widget": "areaGrid",
   "options": {
    "w": 6,
    "h": 3,
    "max": 12
   },
   "caption": "Bewege die Regler: Zähle die Kästchen am Rand und kontrolliere den Umfang. Versuche, verschiedene Rechtecke mit demselben Umfang zu finden!"
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Den Umfang berechnen",
   "questions": [
    {
     "type": "num",
     "q": "Ein Quadrat hat die Seitenlänge 7 cm. Wie groß ist sein Umfang?",
     "answer": 28,
     "unit": "cm",
     "explain": "7 × 4 = 28 cm."
    },
    {
     "type": "num",
     "q": "Ein Rechteck ist 9 cm lang und 4 cm breit. Wie groß ist der Umfang?",
     "answer": 26,
     "unit": "cm",
     "explain": "(9 + 4) × 2 = 13 × 2 = 26 cm."
    },
    {
     "type": "tf",
     "q": "Der Umfang wird in Metern, Zentimetern oder anderen Längeneinheiten gemessen.",
     "answer": true,
     "explain": "Er ist eine Länge: der Rand der Figur."
    }
   ]
  },
  {
   "type": "text",
   "title": "Aufgaben rückwärts: die Umkehrformeln",
   "html": "<p>Manchmal kennst du den Umfang und musst eine Seite finden. Dafür macht man die <b>Umkehroperation</b>:</p>\n<ul>\n<li><b>Quadrat</b>: Seite = U : 4. Wenn U = 36 cm → a = 36 : 4 = <b>9 cm</b>.</li>\n<li><b>Gleichseitiges Dreieck</b>: Seite = U : 3. Wenn U = 27 m → a = <b>9 m</b>.</li>\n<li><b>Rechteck</b>: Länge + Breite = U : 2, dann ziehe ich die Seite ab, die ich kenne. Wenn U = 30 cm und a = 10 cm → a + b = 15 → b = 15 − 10 = <b>5 cm</b>.</li>\n<li><b>Regelmäßiges Vieleck</b>: Seite = U : n (n = Anzahl der Seiten).</li>\n</ul>\n<p>Kontrolliere immer: Rechne „vorwärts“ nach und sieh, ob der ursprüngliche Umfang herauskommt!</p>"
  },
  {
   "type": "svg",
   "title": "Gleicher Umfang, verschiedene Formen",
   "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"280\" fill=\"#eff6ff\"/>\n<rect x=\"30\" y=\"100\" width=\"240\" height=\"40\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"4\"/>\n<text x=\"150\" y=\"90\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1f2937\">6 cm</text>\n<text x=\"290\" y=\"127\" font-size=\"18\" fill=\"#1f2937\">1 cm</text>\n<text x=\"150\" y=\"175\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">U = (6+1)×2 = 14 cm</text>\n<rect x=\"380\" y=\"60\" width=\"160\" height=\"120\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"4\"/>\n<text x=\"460\" y=\"50\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1f2937\">4 cm</text>\n<text x=\"550\" y=\"127\" font-size=\"18\" fill=\"#1f2937\">3 cm</text>\n<text x=\"460\" y=\"215\" font-size=\"20\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\">U = (4+3)×2 = 14 cm</text>\n<text x=\"300\" y=\"260\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1f2937\">Gleich lange Schnur … aber innen ist mehr oder weniger Platz!</text>\n</svg>",
   "caption": "Zwei Rechtecke mit demselben Umfang (14 cm) können sehr verschieden sein: Der Umfang misst den Rand, nicht den Platz innen."
  },
  {
   "type": "example",
   "title": "Praxisbeispiel: Der Zaun um den Gemüsegarten",
   "html": "<p>Opa hat einen rechteckigen Gemüsegarten, <b>12 m</b> lang und <b>8 m</b> breit. Er will ihn mit einem Zaun einfassen und ein <b>1 m</b> breites Tor lassen. Wie viele Meter Zaun muss er kaufen?</p>\n<ol>\n<li>Umfang des Gartens: (12 + 8) × 2 = 20 × 2 = <b>40 m</b></li>\n<li>Ich ziehe das Tor ab: 40 − 1 = <b>39 m</b> Zaun</li>\n</ol>\n<p>Wenn der Zaun 3 € pro Meter kostet, gibt er 39 × 3 = <b>117 €</b> aus.</p>"
  },
  {
   "type": "example",
   "title": "Praxisbeispiel: Der Bilderrahmen und das Band",
   "html": "<p>Sofia will ein Band um ihr quadratisches Bild mit der Seitenlänge <b>25 cm</b> kleben. Sie hat eine Rolle Band von <b>1 m</b>. Reicht es ihr?</p>\n<ol>\n<li>Umfang des Quadrats: 25 × 4 = <b>100 cm</b></li>\n<li>1 m = 100 cm → das Band reicht <b>genau</b>, ohne Rest! 🎀</li>\n</ol>\n<p>Und für ein gleichseitig-dreieckiges Plakat mit 40 cm Seitenlänge? 40 × 3 = 120 cm = 1,2 m: Es reicht <b>nicht</b>, es fehlen 20 cm.</p>"
  },
  {
   "type": "example",
   "title": "Praxisbeispiel: Das Fußballfeld",
   "html": "<p>Vor dem Spiel laufen die Kinder 2 Runden um ein kleines Fußballfeld, das <b>40 m</b> lang und <b>20 m</b> breit ist. Wie viele Meter laufen sie?</p>\n<ol>\n<li>Eine Runde = Umfang = (40 + 20) × 2 = <b>120 m</b></li>\n<li>Zwei Runden = 120 × 2 = <b>240 m</b></li>\n</ol>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du schon …? Die unendliche Küste",
   "html": "<p>Wie lang ist die Küste Großbritanniens? Das hängt vom Lineal ab! Misst man sie mit geraden Stücken von 200 km, erhält man etwa 2400 km, mit Stücken von 50 km etwa 3400 km: Je kleiner das Messgerät, desto mehr „gehst du“ in jede Bucht hinein und desto länger wird die Küste. Der Mathematiker <b>Benoît Mandelbrot</b> untersuchte diese seltsame Tatsache 1967: Es ist das „Küstenparadoxon“, aus dem die <b>Fraktale</b> hervorgingen.</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du schon …? Königin Dido und die Rinderhaut",
   "html": "<p>Eine Legende erzählt, dass die phönizische Königin <b>Dido</b>, als sie in Afrika ankam, so viel Land verlangte, „wie eine Rinderhaut umfassen kann“. Sie schnitt die Haut in hauchdünne Streifen und umspannte mit diesem langen Seil einen ganzen Hügel, auf dem sie <b>Karthago</b> gründete. Sie wählte die Form, die bei einem bestimmten Umfang am meisten Platz einschließt: den <b>Kreis</b> (wobei sie auch das Meeresufer als Grenze nutzte)!</p>"
  },
  {
   "type": "remember",
   "title": "Zum Merken",
   "html": "<ul>\n<li>Umfang = <b>Summe aller Seiten</b>. Er ist eine Länge (cm, m …).</li>\n<li>Quadrat: <b>a × 4</b>. Rechteck: <b>(a + b) × 2</b>. Gleichseitiges Dreieck: <b>a × 3</b>. Regelmäßiges Vieleck: <b>a × n</b>.</li>\n<li>Umkehrformeln: Seite des Quadrats = <b>U : 4</b>; beim Rechteck a + b = <b>U : 2</b>.</li>\n<li>Bevor du addierst, bringe alle Seiten auf die <b>gleiche Maßeinheit</b>.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Andere Wege, den Umfang zu verstehen",
   "intro": "Den Umfang kann man anfassen, abrollen, ablaufen. Hier sind weitere Wege, ihn zu verstehen.",
   "tabs": [
    {
     "label": "🧵 Die Schnur",
     "html": "<p>Nimm eine Schnur und lege sie eng am Rand eines Gegenstands entlang (ein Buch, der Tisch, ein Teller). Mach eine Markierung dort, wo sich die Runde schließt. Jetzt <b>rolle</b> die Schnur <b>ab</b> und miss sie mit dem Lineal: Das ist der Umfang!</p>\n<p>Dieser Trick funktioniert auch bei gekrümmten Figuren, wie dem Rand eines Tellers, wo die Formeln für Vielecke nicht reichen.</p>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"240\" fill=\"#fffbeb\"/>\n<rect x=\"40\" y=\"40\" width=\"160\" height=\"110\" fill=\"#fde68a\" stroke=\"#b91c1c\" stroke-width=\"6\"/>\n<text x=\"120\" y=\"102\" font-size=\"20\" text-anchor=\"middle\" fill=\"#78350f\">Buch</text>\n<text x=\"230\" y=\"105\" font-size=\"36\" fill=\"#1f2937\">➜</text>\n<line x1=\"290\" y1=\"95\" x2=\"570\" y2=\"95\" stroke=\"#b91c1c\" stroke-width=\"6\"/>\n<rect x=\"290\" y=\"115\" width=\"280\" height=\"30\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n<g stroke=\"#0369a1\" stroke-width=\"2\">\n<line x1=\"318\" y1=\"115\" x2=\"318\" y2=\"130\"/><line x1=\"346\" y1=\"115\" x2=\"346\" y2=\"130\"/><line x1=\"374\" y1=\"115\" x2=\"374\" y2=\"130\"/><line x1=\"402\" y1=\"115\" x2=\"402\" y2=\"130\"/><line x1=\"430\" y1=\"115\" x2=\"430\" y2=\"135\"/><line x1=\"458\" y1=\"115\" x2=\"458\" y2=\"130\"/><line x1=\"486\" y1=\"115\" x2=\"486\" y2=\"130\"/><line x1=\"514\" y1=\"115\" x2=\"514\" y2=\"130\"/><line x1=\"542\" y1=\"115\" x2=\"542\" y2=\"130\"/>\n</g>\n<text x=\"430\" y=\"190\" font-size=\"22\" text-anchor=\"middle\" fill=\"#b91c1c\" font-weight=\"bold\">die abgerollte Schnur = Umfang</text>\n</svg>"
    },
    {
     "label": "📏 Auf der Zahlengeraden",
     "html": "<p>Stell dir vor, du „öffnest“ den Rand eines Rechtecks mit Länge 5 und Breite 3 und legst ihn auf eine Gerade. Mach für jede Seite einen Sprung: <b>5, dann 3, dann 5, dann 3</b>. Wo kommst du an? Bei <b>16</b>: Das ist der Umfang! Die Sprünge sind paarweise gleich, deshalb kann man (5 + 3) × 2 rechnen.</p>",
     "widget": "numberLine",
     "options": {
      "min": 0,
      "max": 20,
      "step": 1,
      "marks": [
       5,
       8,
       13,
       16
      ]
     }
    },
    {
     "label": "🚶 Schritte zählen",
     "html": "<p>In Finnland und vielen nordischen Ländern macht man Mathematik oft <b>draußen</b>. Probiere es auf dem Hof:</p>\n<ol>\n<li>Geh am Rand des Platzes oder des Beets entlang und zähle die Schritte.</li>\n<li>Miss mit dem Maßband, wie lang einer deiner Schritte ist (zum Beispiel 50 cm).</li>\n<li>Multipliziere: 80 Schritte × 50 cm = 4000 cm = <b>40 m</b> Umfang.</li>\n</ol>\n<p>Die alten Römer vermaßen Straßen genau so: <b>tausend Schritte</b> (<i>mille passus</i>) ergaben eine <b>Meile</b>, etwa 1480 m. Ihr „Schritt“ bestand aus zwei Schreitbewegungen.</p>"
    },
    {
     "label": "🟦 Kästchen und Zahnstocher",
     "html": "<p>Zeichne eine Figur im karierten Heft entlang der Linien. Der Umfang ist die Anzahl der <b>Kästchenseiten</b>, die am Rand liegen.</p>\n<p>Oder baue Figuren mit <b>Zahnstochern</b>, die alle gleich lang sind: Der Umfang ist die Anzahl der benutzten Zahnstocher! Mit 12 Zahnstochern kannst du ein Quadrat 3 × 3, ein Rechteck 5 × 1, ein Rechteck 4 × 2 legen … alle mit Umfang 12, aber verschieden groß.</p>",
     "widget": "areaGrid",
     "options": {
      "w": 3,
      "h": 3,
      "max": 10
     }
    },
    {
     "label": "🏛️ Wie die Griechen",
     "html": "<p>Bei regelmäßigen Vielecken bemerkten die Griechen, dass der Umfang immer <b>Seite × Anzahl der Seiten</b> ist. Der große <b>Archimedes</b> von Syrakus (3. Jahrhundert v. Chr.) benutzte genau die Umfänge der regelmäßigen Vielecke mit 6, 12, 24, 48 und 96 Seiten, die er innen und außen an einen Kreis zeichnete, um zu berechnen, wie lang der Kreisumfang ist. Er fand heraus, dass der „Weg rundherum“ beim Kreis etwas mehr als das <b>3-Fache</b> seines Durchmessers ist: die berühmte Zahl π ≈ 3,14!</p>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"240\" fill=\"#faf5ff\"/>\n<circle cx=\"150\" cy=\"120\" r=\"90\" fill=\"none\" stroke=\"#7c3aed\" stroke-width=\"4\"/>\n<polygon points=\"240,120 195,198 105,198 60,120 105,42 195,42\" fill=\"#ddd6fe\" fill-opacity=\"0.6\" stroke=\"#5b21b6\" stroke-width=\"4\"/>\n<circle cx=\"420\" cy=\"120\" r=\"90\" fill=\"none\" stroke=\"#7c3aed\" stroke-width=\"4\"/>\n<polygon points=\"510,120 498,165 465,198 420,210 375,198 342,165 330,120 342,75 375,42 420,30 465,42 498,75\" fill=\"#ddd6fe\" fill-opacity=\"0.6\" stroke=\"#5b21b6\" stroke-width=\"3\"/>\n<text x=\"150\" y=\"232\" font-size=\"17\" text-anchor=\"middle\" fill=\"#1f2937\">6 Seiten</text>\n<text x=\"420\" y=\"232\" font-size=\"17\" text-anchor=\"middle\" fill=\"#1f2937\">12 Seiten: fast ein Kreis!</text>\n</svg>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Landkarte des Umfangs: Tippe einen Knoten an und erfahre das Warum",
   "nodes": [
    {
     "id": "lunghezza",
     "label": "Längenmaße",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "Der Meter und seine Vielfachen und Teile: km, hm, dam, m, dm, cm, mm.",
     "why": "Der Meter entstand 1791 in Frankreich, während der Revolution, als zehnmillionster Teil der Entfernung zwischen Nordpol und Äquator. Vorher hatte jede Stadt ihre eigenen Maße (Ellen, Fuß, Handbreit) und der Handel war ein Chaos."
    },
    {
     "id": "poligono",
     "label": "Vieleck",
     "x": 18,
     "y": 28,
     "color": "#16a34a",
     "html": "Ebene Figur, die von Strecken begrenzt wird: den Seiten.",
     "why": "Weil der Rand aus geraden Strecken besteht, können wir sie einzeln mit dem Lineal messen."
    },
    {
     "id": "perimetro",
     "label": "Umfang",
     "x": 50,
     "y": 40,
     "color": "#dc2626",
     "html": "Die Länge des Rands einer Figur: Summe der Seiten.",
     "why": "Aus dem Griechischen <i>perí</i> (herum) + <i>métron</i> (Maß). Die ägyptischen Landvermesser berechneten ihn nach jeder Nilflut, um die Feldgrenzen neu zu ziehen und zu wissen, wie viel Mauer oder Hecke nötig war."
    },
    {
     "id": "somma",
     "label": "Summe der Seiten",
     "x": 82,
     "y": 28,
     "color": "#f59e0b",
     "html": "Die Methode, die immer funktioniert: Ich addiere alle Seiten.",
     "why": "Den Rand entlangzugehen heißt, jede Seite genau einmal zu gehen: Der gesamte Weg ist die Summe der Stücke."
    },
    {
     "id": "quadrato",
     "label": "Quadrat: a × 4",
     "x": 15,
     "y": 66,
     "color": "#2563eb",
     "html": "4 gleiche Seiten: U = a × 4.",
     "why": "Die Multiplikation ist eine wiederholte Addition: a + a + a + a = a × 4."
    },
    {
     "id": "rettangolo",
     "label": "Rechteck: (a + b) × 2",
     "x": 40,
     "y": 72,
     "color": "#0ea5e9",
     "html": "Zwei gleiche Längen und zwei gleiche Breiten.",
     "why": "Die gegenüberliegenden Seiten des Rechtecks sind gleich. Man kann a × 2 + b × 2 rechnen oder (a + b) × 2: Nach dem <b>Distributivgesetz</b> ist das Ergebnis dasselbe."
    },
    {
     "id": "regolare",
     "label": "Regelmäßig: a × n",
     "x": 65,
     "y": 72,
     "color": "#a855f7",
     "html": "Regelmäßiges Vieleck mit n Seiten: U = a × n.",
     "why": "Alle Seiten sind gleich: Man addiert n-mal dieselbe Länge. Archimedes benutzte die Umfänge regelmäßiger Vielecke, um sich der Länge des Kreises zu nähern."
    },
    {
     "id": "inverse",
     "label": "Umkehrformeln",
     "x": 88,
     "y": 66,
     "color": "#14b8a6",
     "html": "Aus dem Umfang finde ich die Seite: a = U : 4 (Quadrat), a = U : n (regelmäßig).",
     "why": "Die Division ist die Umkehroperation der Multiplikation: Wenn a × 4 = U, dann U : 4 = a."
    },
    {
     "id": "area",
     "label": "Das ist nicht der Flächeninhalt!",
     "x": 50,
     "y": 94,
     "color": "#be185d",
     "html": "Der Umfang misst den Rand, der Flächeninhalt misst den Platz innen.",
     "why": "Figuren mit demselben Umfang können verschiedene Flächeninhalte haben. Unter allen Rechtecken mit demselben Umfang hat das Quadrat den größten Flächeninhalt; unter allen Figuren der Kreis (isoperimetrisches Problem, schon den Griechen bekannt)."
    }
   ],
   "edges": [
    [
     "lunghezza",
     "perimetro",
     "wird gemessen in"
    ],
    [
     "poligono",
     "perimetro",
     "hat einen"
    ],
    [
     "perimetro",
     "somma",
     "wird berechnet mit"
    ],
    [
     "perimetro",
     "quadrato",
     "Abkürzung"
    ],
    [
     "perimetro",
     "rettangolo",
     "Abkürzung"
    ],
    [
     "perimetro",
     "regolare",
     "Abkürzung"
    ],
    [
     "regolare",
     "inverse",
     "umgekehrt"
    ],
    [
     "perimetro",
     "area",
     "nicht verwechseln mit"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Umkehrformeln und Aufgaben",
   "questions": [
    {
     "type": "num",
     "q": "Der Umfang eines Quadrats ist 48 cm. Wie lang ist die Seite?",
     "answer": 12,
     "unit": "cm",
     "explain": "48 : 4 = 12 cm."
    },
    {
     "type": "num",
     "q": "Ein regelmäßiges Sechseck hat die Seitenlänge 5 m. Wie groß ist der Umfang?",
     "answer": 30,
     "unit": "m",
     "explain": "5 × 6 = 30 m."
    },
    {
     "type": "mc",
     "q": "Ein Rechteck hat den Umfang 20 cm und die Länge 7 cm. Die Breite ist …",
     "options": [
      "3 cm",
      "6 cm",
      "13 cm"
     ],
     "answer": 0,
     "explain": "20 : 2 = 10 (Länge + Breite); 10 − 7 = 3 cm."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Umfang (Perimeter)",
   "d": "Länge des Rands einer ebenen Figur; bei Vielecken ist es die Summe der Seiten."
  },
  {
   "t": "Rand",
   "d": "Die Linie, die eine Figur begrenzt."
  },
  {
   "t": "Länge",
   "d": "Im Rechteck die längere Seite, auf der die Figur „steht“."
  },
  {
   "t": "Breite",
   "d": "Im Rechteck die Seite, die senkrecht zur Länge steht."
  },
  {
   "t": "Formel",
   "d": "Eine Regel, kurz mit Buchstaben und Zeichen geschrieben, zum Beispiel U = a × 4."
  },
  {
   "t": "Umkehrformel",
   "d": "Die Regel, um eine Seite aus dem Umfang zu finden."
  },
  {
   "t": "Maßeinheit",
   "d": "Die Größe, die man zum Vergleichen benutzt, zum Beispiel der Meter."
  },
  {
   "t": "Umfangsgleich",
   "d": "Figuren, die denselben Umfang haben."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Der Umfang ist …",
    "options": [
     "der Platz innerhalb einer Figur",
     "die Länge des Rands einer Figur",
     "die Anzahl der Seiten"
    ],
    "answer": 1,
    "explain": "Umfang = Maß des Wegs rundherum."
   },
   {
    "type": "num",
    "q": "Ein Dreieck hat die Seiten 6 cm, 8 cm und 10 cm. Wie groß ist der Umfang?",
    "answer": 24,
    "unit": "cm",
    "explain": "6 + 8 + 10 = 24 cm."
   },
   {
    "type": "num",
    "q": "Ein Quadrat hat die Seitenlänge 15 m. Wie groß ist der Umfang?",
    "answer": 60,
    "unit": "m",
    "explain": "15 × 4 = 60 m."
   },
   {
    "type": "num",
    "q": "Ein Rechteck ist 25 cm lang und 10 cm breit. Wie groß ist der Umfang?",
    "answer": 70,
    "unit": "cm",
    "explain": "(25 + 10) × 2 = 70 cm."
   },
   {
    "type": "num",
    "q": "Ein gleichseitiges Dreieck hat den Umfang 36 dm. Wie lang ist eine Seite?",
    "answer": 12,
    "unit": "dm",
    "explain": "36 : 3 = 12 dm."
   },
   {
    "type": "tf",
    "q": "Zwei Rechtecke mit demselben Umfang haben immer dieselbe Form.",
    "answer": false,
    "explain": "Zum Beispiel haben 6×1 und 4×3 beide den Umfang 14, aber verschiedene Formen."
   },
   {
    "type": "mc",
    "q": "Wie lautet die Formel für den Umfang des Rechtecks?",
    "options": [
     "a × b",
     "(a + b) × 2",
     "a × 4"
    ],
    "answer": 1,
    "explain": "Zwei Längen plus zwei Breiten."
   },
   {
    "type": "num",
    "q": "Ein regelmäßiges Achteck hat die Seitenlänge 4 cm. Wie groß ist der Umfang?",
    "answer": 32,
    "unit": "cm",
    "explain": "4 × 8 = 32 cm."
   },
   {
    "type": "num",
    "q": "Ein Rechteck hat den Umfang 50 m und die Breite 10 m. Wie lang ist es?",
    "answer": 15,
    "unit": "m",
    "explain": "50 : 2 = 25; 25 − 10 = 15 m."
   },
   {
    "type": "text",
    "q": "Aus welcher alten Sprache kommt das Fachwort „Perimeter“ für den Umfang?",
    "answer": [
     "griechisch",
     "aus dem griechischen",
     "das griechische",
     "altgriechisch"
    ],
    "explain": "Aus dem Griechischen perí (herum) und métron (Maß)."
   },
   {
    "type": "order",
    "q": "Bringe die Schritte in die richtige Reihenfolge: „Ein Quadrat hat die Seitenlänge 2 m. Wie viele cm Band braucht man für einmal rundherum?“",
    "items": [
     "Ich wandle die Seite um: 2 m = 200 cm",
     "Ich wende die Formel an: U = a × 4",
     "Ich rechne 200 × 4 = 800",
     "Ich antworte: Man braucht 800 cm Band"
    ],
    "explain": "Zuerst gleiche ich die Einheiten an, dann wende ich die Formel an, rechne und antworte."
   },
   {
    "type": "num",
    "q": "Ein Rechteck ist 1 m lang und 30 cm breit. Wie groß ist der Umfang in cm?",
    "answer": 260,
    "unit": "cm",
    "explain": "1 m = 100 cm; (100 + 30) × 2 = 260 cm."
   }
  ],
  "gen": [
   [
    "perimRect",
    3
   ],
   [
    "lengthConv",
    1
   ]
  ]
 }
});
