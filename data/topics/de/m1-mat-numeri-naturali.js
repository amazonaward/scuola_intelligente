TOPIC('de', {
 "id": "m1-mat-numeri-naturali",
 "title": "Die natürlichen Zahlen und die vier Grundrechenarten",
 "intro": "Die <b>natürlichen Zahlen</b> sind die Zahlen zum Zählen: 0, 1, 2, 3 … In der weiterführenden Schule lernen wir, sie als eine richtige <b>Menge</b> (ℕ) zu betrachten, das <b>dezimale Stellenwertsystem</b> gut zu kennen und die <b>Rechengesetze</b> der vier Grundrechenarten zu nutzen, um schneller zu rechnen und <b>Terme</b> zu lösen.",
 "minutes": 45,
 "sections": [
  {
   "type": "text",
   "title": "Die Menge ℕ und der Zahlenstrahl",
   "html": "<p>Die Menge der natürlichen Zahlen bezeichnet man mit <b>ℕ</b>: ℕ = { 0, 1, 2, 3, 4, … }.</p>\n<ul>\n<li>Sie hat ein <b>erstes</b> Element, die <b>0</b>, aber <b>kein letztes</b>: Sie ist unendlich. Jede Zahl n hat einen <b>Nachfolger</b> n + 1.</li>\n<li>Jede Zahl (außer der 0) hat einen <b>Vorgänger</b> n − 1.</li>\n<li>Sie ist eine <b>geordnete</b> Menge: Von zwei verschiedenen Zahlen ist eine immer kleiner als die andere (Zeichen <b>&lt;</b>, <b>&gt;</b>, <b>=</b>).</li>\n<li>Sie ist <b>diskret</b>: Zwischen zwei aufeinanderfolgenden natürlichen Zahlen (z. B. 4 und 5) liegt keine weitere natürliche Zahl.</li>\n</ul>\n<p>Die natürlichen Zahlen kann man auf dem <b>Zahlenstrahl</b> darstellen: Man legt einen Punkt für die 0 fest (den <b>Ursprung</b>), eine Richtung (den Pfeil) und eine <b>Einheit</b> (eine immer gleich lange Strecke). Jede Zahl entspricht einem Punkt.</p>"
  },
  {
   "type": "widget",
   "title": "Der Zahlenstrahl der natürlichen Zahlen",
   "widget": "numberLine",
   "options": {
    "min": 0,
    "max": 20,
    "step": 1,
    "marks": [
     7,
     15
    ]
   },
   "caption": "Mach die Sprünge: Wie viele Schritte sind es von 7 bis 15? Das ist die Subtraktion 15 − 7 = 8!"
  },
  {
   "type": "text",
   "title": "Das dezimale Stellenwertsystem",
   "html": "<p>Unser Zahlensystem ist:</p>\n<ul>\n<li><b>dezimal</b>: Es benutzt 10 Ziffern (0, 1, 2, … 9), und je 10 Einheiten einer Stelle bilden 1 Einheit der nächsthöheren Stelle (10 Einer = 1 Zehner, 10 Zehner = 1 Hunderter …);</li>\n<li><b>Stellenwertsystem</b>: Der Wert einer Ziffer hängt von ihrer <b>Stelle</b> ab. In <b>333</b> sind die drei Ziffern gleich, aber sie bedeuten 300, 30 und 3!</li>\n</ul>\n<p>Die Ziffern werden in <b>Klassen</b> zu je drei gruppiert: Einer, Tausender, Millionen, Milliarden. Man liest von links und trennt die Klassen mit einem Punkt (oder einem Leerzeichen): <b>4.507.230</b> = vier Millionen fünfhundertsiebentausendzweihundertdreißig.</p>\n<p><b>Polynomform</b> (erweiterte Schreibweise): 4.507 = 4 × 1000 + 5 × 100 + 0 × 10 + 7 × 1.</p>\n<p>Der <b>Wert</b> einer Ziffer ändert sich mit der Stelle, und die <b>Null</b> ist entscheidend: Sie zeigt an, dass diese Stelle leer ist (407 ≠ 47).</p>"
  },
  {
   "type": "3d",
   "title": "Der Stellenwert mit Würfelchen",
   "scene": "blocks",
   "options": {
    "mode": "base10",
    "value": 245
   },
   "caption": "Eine Platte = 1 Hunderter (10 × 10 Würfelchen), eine Stange = 1 Zehner, ein Würfelchen = 1 Einer. 245 = 2 Hunderter + 4 Zehner + 5 Einer. Ändere die Zahl mit dem Schieberegler."
  },
  {
   "type": "text",
   "title": "Die vier Grundrechenarten und ihre Bezeichnungen",
   "html": "<table>\n<tr><th>Rechenart</th><th>Bezeichnungen</th><th>Ergebnis</th><th>Beispiel</th></tr>\n<tr><td><b>Addition</b> +</td><td>Summanden</td><td>Summe</td><td>12 + 8 = 20</td></tr>\n<tr><td><b>Subtraktion</b> −</td><td>Minuend, Subtrahend</td><td>Differenz (oder Rest)</td><td>20 − 8 = 12</td></tr>\n<tr><td><b>Multiplikation</b> ×</td><td>Faktoren</td><td>Produkt</td><td>6 × 4 = 24</td></tr>\n<tr><td><b>Division</b> :</td><td>Dividend, Divisor</td><td>Quotient (und Rest)</td><td>24 : 4 = 6</td></tr>\n</table>\n<p>Subtraktion und Division sind die <b>Umkehrungen</b> von Addition und Multiplikation: 20 − 8 = 12, weil 12 + 8 = 20; 24 : 4 = 6, weil 6 × 4 = 24.</p>\n<p><b>In ℕ kann man nicht immer alles rechnen</b>:</p>\n<ul>\n<li>Addition und Multiplikation ergeben <b>immer</b> eine natürliche Zahl: Man sagt, sie sind in ℕ <b>abgeschlossen</b>;</li>\n<li>die Subtraktion geht nur, wenn der Minuend ≥ dem Subtrahenden ist (3 − 5 ergibt keine natürliche Zahl);</li>\n<li>die Division ohne Rest geht nur, wenn der Dividend ein <b>Vielfaches</b> des Divisors ist; sonst bleibt ein <b>Rest</b>: 25 : 4 = 6 Rest 1, also 25 = 4 × 6 + 1.</li>\n</ul>"
  },
  {
   "type": "remember",
   "title": "Null und Eins: besondere Zahlen",
   "html": "<ul>\n<li><b>0 ist das neutrale Element der Addition</b>: a + 0 = a. Auch a − 0 = a.</li>\n<li><b>1 ist das neutrale Element der Multiplikation</b>: a × 1 = a. Auch a : 1 = a.</li>\n<li><b>0 ist das absorbierende Element der Multiplikation</b>: a × 0 = 0 (Nullproduktsatz: Wenn ein Produkt 0 ist, ist mindestens ein Faktor 0).</li>\n<li><b>0 : a = 0</b> (mit a ≠ 0): null Bonbons auf 5 Freunde verteilt = 0 Bonbons für jeden.</li>\n<li><b>a : 0 ist unmöglich</b>: Keine Zahl mal 0 ergibt a.</li>\n<li><b>0 : 0 ist unbestimmt</b>: Jede Zahl mal 0 ergibt 0, also gibt es keine eindeutige Antwort.</li>\n</ul>"
  },
  {
   "type": "text",
   "title": "Die Rechengesetze",
   "html": "<p>Die Gesetze sind „Spielregeln“, die immer gelten und mit denen man <b>im Kopf</b> schneller rechnen kann.</p>\n<ul>\n<li><b>Kommutativgesetz</b> (Addition und Multiplikation): Wenn man die Reihenfolge der Glieder ändert, ändert sich das Ergebnis nicht.<br>7 + 25 = 25 + 7 &nbsp;&nbsp; 4 × 9 = 9 × 4</li>\n<li><b>Assoziativgesetz</b> (Addition und Multiplikation): Man kann zwei oder mehr Glieder durch ihr Ergebnis ersetzen.<br>17 + 8 + 2 = 17 + (8 + 2) = 17 + 10 = 27 &nbsp;&nbsp; 25 × 7 × 4 = (25 × 4) × 7 = 700</li>\n<li><b>Zerlegen</b>: Man kann ein Glied in eine Summe (oder ein Produkt) zerlegen.<br>48 + 7 = 48 + 2 + 5 = 55 &nbsp;&nbsp; 15 × 6 = 15 × 2 × 3 = 30 × 3 = 90</li>\n<li><b>Distributivgesetz</b> der Multiplikation bezüglich der Addition (und der Subtraktion):<br>7 × 12 = 7 × (10 + 2) = 70 + 14 = 84 &nbsp;&nbsp; 9 × 98 = 9 × (100 − 2) = 900 − 18 = 882</li>\n<li><b>Konstanz der Differenz</b>: Wenn man zum Minuenden und zum Subtrahenden dieselbe Zahl addiert oder von beiden subtrahiert, ändert sich die Differenz nicht.<br>83 − 29 = (83 + 1) − (29 + 1) = 84 − 30 = 54</li>\n<li><b>Konstanz des Quotienten</b>: Wenn man Dividend und Divisor mit derselben Zahl (≠ 0) multipliziert oder durch sie dividiert, ändert sich der Quotient nicht.<br>350 : 50 = 35 : 5 = 7 &nbsp;&nbsp; 140 : 5 = 280 : 10 = 28</li>\n</ul>\n<p>Achtung: Subtraktion und Division sind <b>weder</b> kommutativ (8 − 3 ≠ 3 − 8) <b>noch</b> assoziativ ((24 : 4) : 2 = 3, aber 24 : (4 : 2) = 12).</p>"
  },
  {
   "type": "example",
   "title": "Praktisches Beispiel: Schnellrechnen im Supermarkt",
   "html": "<p>Du kaufst <b>4</b> Packungen Saft zu je <b>2,99 €</b> ... wir rechnen in Cent: 299 Cent.</p>\n<p>4 × 299 = 4 × (300 − 1) = 1200 − 4 = <b>1196</b> Cent = <b>11,96 €</b> (Distributivgesetz).</p>\n<p>Dann bezahlst du mit <b>20 €</b>: 2000 − 1196 = ? Mit der Konstanz der Differenz addiere ich zu beiden 4: 2004 − 1200 = <b>804</b> Cent = <b>8,04 €</b> Wechselgeld.</p>\n<p>Schließlich teilst du die Ausgabe von <b>36 €</b> unter <b>4</b> Freunden auf und nutzt die Konstanz des Quotienten: 36 : 4 = 18 : 2 = <b>9 €</b> pro Kopf.</p>\n<p>Kein Taschenrechner: nur Rechengesetze!</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Rechengesetze",
   "questions": [
    {
     "type": "mc",
     "q": "Welches Gesetz wird in 25 × 13 × 4 = (25 × 4) × 13 benutzt?",
     "options": [
      "Distributivgesetz",
      "Kommutativ- und Assoziativgesetz",
      "Konstanz der Differenz",
      "Zerlegen"
     ],
     "answer": 1,
     "explain": "Man vertauscht die Reihenfolge (Kommutativgesetz) und fasst 25 × 4 = 100 zusammen (Assoziativgesetz)."
    },
    {
     "type": "num",
     "q": "Rechne im Kopf mit dem Distributivgesetz: 6 × 102 = ?",
     "answer": 612,
     "tol": 0,
     "explain": "6 × 100 + 6 × 2 = 600 + 12 = 612."
    },
    {
     "type": "tf",
     "q": "Für die Subtraktion gilt das Kommutativgesetz.",
     "answer": false,
     "explain": "10 − 4 = 6, aber 4 − 10 ist nicht einmal eine natürliche Zahl."
    },
    {
     "type": "mc",
     "q": "Wie viel ist 7 : 0?",
     "options": [
      "0",
      "7",
      "1",
      "Es ist unmöglich"
     ],
     "answer": 3,
     "explain": "Keine Zahl mal 0 ergibt 7: Die Division durch null ist unmöglich."
    }
   ]
  },
  {
   "type": "text",
   "title": "Terme: die Reihenfolge der Rechenoperationen",
   "html": "<p>Ein <b>Term</b> ist eine Folge von auszuführenden Rechenoperationen. Damit alle dasselbe Ergebnis erhalten, folgt man einer genauen Reihenfolge:</p>\n<ol>\n<li>zuerst löst man die <b>Klammern</b> auf: runde ( ), dann eckige [ ], dann geschweifte { };</li>\n<li>innerhalb der Klammern (und außerhalb) rechnet man zuerst <b>Multiplikationen und Divisionen</b>, in der Reihenfolge, wie sie von links nach rechts auftreten;</li>\n<li>dann <b>Additionen und Subtraktionen</b>, von links nach rechts.</li>\n</ol>\n<p>Beispiel: <b>{ 30 − [ 4 × (7 − 2) + 3 ] } : 7</b></p>\n<ul>\n<li>runde Klammern: 7 − 2 = 5 → { 30 − [ 4 × 5 + 3 ] } : 7</li>\n<li>eckige Klammern: 4 × 5 + 3 = 20 + 3 = 23 → { 30 − 23 } : 7</li>\n<li>geschweifte Klammern: 30 − 23 = 7 → 7 : 7 = <b>1</b></li>\n</ul>\n<p>Typischer Fehler: In 2 + 3 × 4 zuerst 2 + 3 = 5 und dann × 4 = 20 zu rechnen. Falsch! Zuerst die Multiplikation: 2 + 12 = <b>14</b>.</p>"
  },
  {
   "type": "example",
   "title": "Praktisches Beispiel: von der Aufgabe zum Term",
   "html": "<p><b>Aufgabe</b>: Die Klasse 5a macht einen Ausflug. Der Bus kostet 450 € und der Eintritt ins Museum 6 € pro Person. Es sind 22 Schüler und 3 Begleitpersonen (die auch Eintritt zahlen). Die Lehrer teilen die Gesamtkosten nur auf die <b>Schüler</b> auf. Wie viel zahlt jeder Schüler?</p>\n<p><b>Term</b>: [ 450 + 6 × (22 + 3) ] : 22</p>\n<ul>\n<li>(22 + 3) = 25 Personen</li>\n<li>6 × 25 = 150 € Eintritt</li>\n<li>450 + 150 = 600 € insgesamt</li>\n<li>600 : 22 = 27 Rest 6 → jeder Schüler zahlt 27 €, und 6 € bleiben zu decken (oder man rundet auf: 22 × 28 = 616 €, 16 € bleiben für den Snack übrig!).</li>\n</ul>\n<p>Einen einzigen Term aufzuschreiben hilft, die ganze Struktur der Aufgabe zu sehen.</p>"
  },
  {
   "type": "curiosity",
   "title": "Die Null: eine indische Erfindung",
   "html": "<p>Die alten Römer hatten keine Null und benutzten ein <b>Nicht-Stellenwertsystem</b>: In MMXXVI bedeutet das M immer 1000, egal wo es steht. Mit römischen Zahlen zu multiplizieren war ein Albtraum: Man benutzte den Abakus!</p>\n<p>Die Ziffern, die wir benutzen, und die <b>Null</b> als Zahl entstanden in <b>Indien</b>: Der Mathematiker <b>Brahmagupta</b> schrieb im Jahr <b>628 n. Chr.</b> die ersten Regeln zum Rechnen mit der Null auf. Die Araber verbreiteten sie (deshalb nennen wir sie „arabische Ziffern“), und nach Europa brachte sie <b>Leonardo Fibonacci</b> aus Pisa mit dem <i>Liber abaci</i> im Jahr <b>1202</b>. Das Wort „Null“ kommt vom lateinischen <i>nulla</i>, „keine“; das Wort „Ziffer“ dagegen stammt vom arabischen <i>ṣifr</i>, „leer“, ebenso wie das englische „zero“!</p>"
  },
  {
   "type": "curiosity",
   "title": "Der kleine Gauß und die Summe von 1 bis 100",
   "html": "<p>Man erzählt, dass um 1785 der Lehrer von <b>Carl Friedrich Gauß</b>, der etwa 8 Jahre alt war, der Klasse die Aufgabe stellte, alle Zahlen von 1 bis 100 zu addieren, um sie zu beschäftigen. Gauß antwortete nach wenigen Sekunden: <b>5050</b>!</p>\n<p>Sein Trick nutzt das Kommutativ- und das Assoziativgesetz: 1 + 100 = 101, 2 + 99 = 101, 3 + 98 = 101 … Es gibt 50 Paare, die 101 ergeben: 50 × 101 = <b>5050</b>.</p>\n<p>Probier es selbst: Wie viel ist die Summe von 1 bis 20? (10 Paare zu je 21 = 210)</p>"
  },
  {
   "type": "alternatives",
   "title": "Andere Wege zu multiplizieren",
   "intro": "Überall auf der Welt und in der Geschichte multipliziert man auf viele verschiedene Arten. Alle funktionieren dank des Distributivgesetzes!",
   "tabs": [
    {
     "label": "🇯🇵 Linienmethode",
     "html": "<p>In Japan und China lernt man das Multiplizieren durch Linienzeichnen: die Zehner des einen Faktors in eine Richtung, die Einer in die andere. Man zählt die Schnittpunkte in jedem Bereich: Das sind Hunderter, Zehner und Einer. Sieh dir die Animation an.</p>",
     "widget": "lineMultiply",
     "options": {
      "a": 23,
      "b": 12
     }
    },
    {
     "label": "🇷🇺 Der russische Bauer",
     "html": "<p>Eine uralte Methode, die russische Bauern benutzten: Man <b>halbiert</b> die eine Zahl und <b>verdoppelt</b> die andere; man streicht die Zeilen, in denen die halbierte Zahl gerade ist, und addiert die übrig gebliebenen. Es funktioniert, weil man im Grunde die Zahl im Zweiersystem aufschreibt!</p>",
     "widget": "russianPeasant",
     "options": {
      "a": 37,
      "b": 24
     }
    },
    {
     "label": "🏺 Ägyptische Methode",
     "html": "<p>Die Ägypter multiplizierten vor 4000 Jahren (Papyrus Rhind) nur durch <b>Verdoppeln</b>: 1, 2, 4, 8, 16 … mal die Zahl, und addierten dann die passenden Zeilen. Das ist das Distributivgesetz: 13 × 21 = (8 + 4 + 1) × 21.</p>",
     "widget": "egyptianMultiply",
     "options": {
      "a": 13,
      "b": 21
     }
    },
    {
     "label": "🔢 Gittermethode (Fibonacci)",
     "html": "<p>Die Gittermethode (sie heißt so, weil das Raster an Fenstergitter erinnert, in Italien „gelosie“ genannt) kam mit Fibonacci aus der arabischen Welt nach Europa. Jedes Kästchen enthält das Produkt zweier Ziffern, und man addiert die Diagonalen.</p>",
     "widget": "lattice",
     "options": {
      "a": 47,
      "b": 36
     }
    },
    {
     "label": "🧊 Das Distributivgesetz mit Würfelchen",
     "html": "<p>Ein Rechteck aus 7 × 12 Würfelchen lässt sich in ein Rechteck 7 × 10 und eines 7 × 2 zerlegen: 70 + 14 = 84. Genau das ist das Distributivgesetz, in 3D gesehen. Probiere aus, die Maße zu ändern.</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 7,
      "b": 12
     }
    }
   ]
  },
  {
   "type": "widget",
   "title": "Erkenne das Gesetz",
   "widget": "match",
   "options": {
    "pairs": [
     [
      "5 + 9 = 9 + 5",
      "Kommutativgesetz"
     ],
     [
      "(6 + 4) + 7 = 6 + (4 + 7)",
      "Assoziativgesetz"
     ],
     [
      "8 × 15 = 8 × 10 + 8 × 5",
      "Distributivgesetz"
     ],
     [
      "90 − 38 = 92 − 40",
      "Konstanz der Differenz"
     ],
     [
      "600 : 30 = 60 : 3",
      "Konstanz des Quotienten"
     ],
     [
      "a × 1 = a",
      "neutrales Element"
     ],
     [
      "a × 0 = 0",
      "absorbierendes Element"
     ]
    ]
   },
   "caption": "Verbinde jede Gleichung mit dem Gesetz, das sie benutzt."
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Terme",
   "questions": [
    {
     "type": "num",
     "q": "Wie viel ist 5 + 3 × 4?",
     "answer": 17,
     "tol": 0,
     "explain": "Zuerst die Multiplikation: 3 × 4 = 12; dann 5 + 12 = 17."
    },
    {
     "type": "num",
     "q": "Wie viel ist (5 + 3) × 4?",
     "answer": 32,
     "tol": 0,
     "explain": "Zuerst die Klammer: 8 × 4 = 32."
    },
    {
     "type": "num",
     "q": "Löse: [ 20 − (3 + 2) × 3 ] × 2",
     "answer": 10,
     "tol": 0,
     "explain": "(3 + 2) = 5; 5 × 3 = 15; 20 − 15 = 5; 5 × 2 = 10."
    },
    {
     "type": "mc",
     "q": "Was ist in 48 : 6 × 2 das richtige Ergebnis?",
     "options": [
      "4",
      "16",
      "8",
      "96"
     ],
     "answer": 1,
     "explain": "Multiplikationen und Divisionen rechnet man von links nach rechts: 48 : 6 = 8; 8 × 2 = 16."
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Landkarte: warum die Rechenarten so funktionieren",
   "nodes": [
    {
     "id": "contare",
     "label": "Zählen",
     "x": 50,
     "y": 5,
     "color": "#64748b",
     "html": "Jedem Gegenstand eine Zahl zuordnen: 1, 2, 3 …",
     "why": "Der Ishango-Knochen (Kongo, etwa 20.000 Jahre alt) hat Kerben, die vielleicht zum Zählen dienten: Das Bedürfnis zu zählen ist uralt."
    },
    {
     "id": "naturali",
     "label": "Menge ℕ",
     "x": 50,
     "y": 20,
     "color": "#2563eb",
     "html": "0, 1, 2, 3 … geordnet, unendlich, diskret.",
     "why": "Giuseppe Peano, Mathematiker aus Cuneo, beschrieb ℕ 1889 mit fünf Axiomen: Es gibt die 0, jede Zahl hat einen Nachfolger, verschiedene Zahlen haben verschiedene Nachfolger, die 0 ist Nachfolger keiner Zahl, und das Induktionsprinzip gilt."
    },
    {
     "id": "posizionale",
     "label": "Stellenwertsystem",
     "x": 15,
     "y": 34,
     "color": "#0ea5e9",
     "html": "10 Ziffern, der Wert hängt von der Stelle ab.",
     "why": "Wir benutzen die Basis 10 wahrscheinlich, weil wir 10 Finger haben. Die indische Null (Brahmagupta, 628) machte das System möglich; Fibonacci brachte es 1202 nach Europa."
    },
    {
     "id": "addizione",
     "label": "Addition",
     "x": 35,
     "y": 42,
     "color": "#16a34a",
     "html": "Mengen vereinen; neutrales Element 0.",
     "why": "Peano definiert sie mit dem „Nachfolger“: a + 1 ist der Nachfolger von a, a + 2 der Nachfolger des Nachfolgers … Daraus ergeben sich Kommutativ- und Assoziativgesetz."
    },
    {
     "id": "moltiplicazione",
     "label": "Multiplikation",
     "x": 65,
     "y": 42,
     "color": "#ea580c",
     "html": "Wiederholte Addition; neutrales Element 1, absorbierendes 0.",
     "why": "3 × 4 = 4 + 4 + 4. Als Rechteck aus 3 Zeilen und 4 Spalten gezeichnet sieht man, dass sich beim Drehen (4 × 3) die Zahl der Kästchen nicht ändert: Das ist das Kommutativgesetz."
    },
    {
     "id": "inverse",
     "label": "Subtraktion und Division",
     "x": 85,
     "y": 30,
     "color": "#dc2626",
     "html": "Umkehroperationen; in ℕ nicht immer möglich.",
     "why": "Um die Subtraktion immer möglich zu machen, erfanden die Mathematiker die negativen Zahlen (ℤ); für die Division die Brüche (ℚ)."
    },
    {
     "id": "distributiva",
     "label": "Distributivgesetz",
     "x": 50,
     "y": 62,
     "color": "#9333ea",
     "html": "a × (b + c) = a × b + a × c.",
     "why": "Ein Rechteck mit den Seiten a und (b + c) teilt sich in zwei Rechtecke a × b und a × c. Es ist die Grundlage aller schriftlichen Multiplikationsverfahren."
    },
    {
     "id": "invariantive",
     "label": "Konstanzgesetze",
     "x": 85,
     "y": 62,
     "color": "#db2777",
     "html": "Subtraktion: dieselbe Zahl + oder −; Division: dieselbe Zahl × oder :.",
     "why": "Subtraktion: Wenn zwei Personen ein Jahr älter werden, ändert sich ihr Altersunterschied nicht. Division: Es ist dasselbe Prinzip wie bei gleichwertigen Brüchen (Erweitern und Kürzen)."
    },
    {
     "id": "espressioni",
     "label": "Terme",
     "x": 30,
     "y": 84,
     "color": "#f59e0b",
     "html": "Klammern, dann × und :, dann + und −.",
     "why": "Das ist eine unter Mathematikern geteilte Vereinbarung (zwischen dem 17. und 19. Jahrhundert festgelegt), damit alle dasselbe Ergebnis erhalten; die Multiplikation „bindet stärker“, weil sie eine abgekürzte Addition ist."
    },
    {
     "id": "calcolomentale",
     "label": "Schnellrechnen",
     "x": 70,
     "y": 86,
     "color": "#0f766e",
     "html": "Rechengesetze, die man zum Kopfrechnen nutzt.",
     "why": "Die Methoden anderer Länder (japanische Linien, russischer Bauer, ägyptisch, Gitter) sind alles verschiedene Arten, das Distributivgesetz anzuwenden."
    }
   ],
   "edges": [
    [
     "contare",
     "naturali",
     "entsteht"
    ],
    [
     "naturali",
     "posizionale",
     "wird geschrieben mit"
    ],
    [
     "naturali",
     "addizione",
     "Rechenart"
    ],
    [
     "addizione",
     "moltiplicazione",
     "wiederholt"
    ],
    [
     "addizione",
     "inverse",
     "Umkehrung"
    ],
    [
     "moltiplicazione",
     "inverse",
     "Umkehrung"
    ],
    [
     "moltiplicazione",
     "distributiva",
     "bezüglich der +"
    ],
    [
     "inverse",
     "invariantive",
     "erfüllen"
    ],
    [
     "distributiva",
     "calcolomentale",
     "ermöglicht"
    ],
    [
     "addizione",
     "espressioni",
     "Reihenfolge"
    ],
    [
     "moltiplicazione",
     "espressioni",
     "Reihenfolge"
    ]
   ]
  }
 ],
 "glossary": [
  {
   "t": "Natürliche Zahlen (ℕ)",
   "d": "Die Zahlen 0, 1, 2, 3 …, die zum Zählen benutzt werden."
  },
  {
   "t": "Stellenwertsystem",
   "d": "System, in dem der Wert einer Ziffer von ihrer Stelle abhängt."
  },
  {
   "t": "Summanden / Summe",
   "d": "Glieder und Ergebnis der Addition."
  },
  {
   "t": "Minuend, Subtrahend, Differenz",
   "d": "Glieder und Ergebnis der Subtraktion."
  },
  {
   "t": "Faktoren / Produkt",
   "d": "Glieder und Ergebnis der Multiplikation."
  },
  {
   "t": "Dividend, Divisor, Quotient",
   "d": "Glieder und Ergebnis der Division."
  },
  {
   "t": "Neutrales Element",
   "d": "Zahl, die bei einer Rechenart das andere Glied unverändert lässt (0 bei +, 1 bei ×)."
  },
  {
   "t": "Absorbierendes Element",
   "d": "Die 0 bei der Multiplikation: Jede Zahl mal 0 ergibt 0."
  },
  {
   "t": "Distributivgesetz",
   "d": "a × (b + c) = a × b + a × c."
  },
  {
   "t": "Term",
   "d": "Folge von Rechenoperationen, die in einer festgelegten Reihenfolge auszuführen sind."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "tf",
    "q": "Die Menge der natürlichen Zahlen hat ein letztes Element.",
    "answer": false,
    "explain": "Jede Zahl hat einen Nachfolger: ℕ ist unendlich."
   },
   {
    "type": "mc",
    "q": "In der Zahl 3.582.104 hat die Ziffer 8 den Wert …",
    "options": [
     "8",
     "8.000",
     "80.000",
     "800.000"
    ],
    "answer": 2,
    "explain": "Sie steht an der Stelle der Zehntausender: 80.000."
   },
   {
    "type": "mc",
    "q": "Wie heißt das Ergebnis der Division?",
    "options": [
     "Produkt",
     "Differenz",
     "Quotient",
     "Summe"
    ],
    "answer": 2,
    "explain": "Dividend : Divisor = Quotient."
   },
   {
    "type": "num",
    "q": "Rechne mit der Konstanz der Differenz: 1.000 − 397 = ?",
    "answer": 603,
    "tol": 0,
    "explain": "Ich addiere zu beiden 3: 1.003 − 400 = 603."
   },
   {
    "type": "num",
    "q": "Rechne mit dem Distributivgesetz: 15 × 99 = ?",
    "answer": 1485,
    "tol": 0,
    "explain": "15 × 100 − 15 = 1500 − 15 = 1485."
   },
   {
    "type": "mc",
    "q": "Welche Gleichung zeigt das Assoziativgesetz?",
    "options": [
     "3 + 7 = 7 + 3",
     "(2 × 5) × 9 = 2 × (5 × 9)",
     "4 × (3 + 2) = 12 + 8",
     "40 : 8 = 20 : 4"
    ],
    "answer": 1,
    "explain": "Die Faktoren werden anders gruppiert, das Produkt ändert sich nicht."
   },
   {
    "type": "num",
    "q": "Löse: 36 : (2 + 7) × 5 − 4",
    "answer": 16,
    "tol": 0,
    "explain": "(2 + 7) = 9; 36 : 9 = 4; 4 × 5 = 20; 20 − 4 = 16."
   },
   {
    "type": "num",
    "q": "Löse: { 50 − [ 3 × (4 + 6) − 5 ] } : 5",
    "answer": 5,
    "tol": 0,
    "explain": "(4 + 6) = 10; 3 × 10 − 5 = 25; 50 − 25 = 25; 25 : 5 = 5."
   },
   {
    "type": "tf",
    "q": "0 : 8 = 0",
    "answer": true,
    "explain": "Denn 0 × 8 = 0. Unmöglich ist dagegen 8 : 0."
   },
   {
    "type": "num",
    "q": "Wie viel ist die Summe aller Zahlen von 1 bis 10 (Gauß-Trick)?",
    "answer": 55,
    "tol": 0,
    "explain": "5 Paare zu je 11: 5 × 11 = 55."
   },
   {
    "type": "order",
    "q": "Bringe die Schritte zum Lösen eines Terms in die richtige Reihenfolge",
    "items": [
     "Runde Klammern",
     "Eckige Klammern",
     "Geschweifte Klammern",
     "Außerhalb der Klammern: × und :",
     "Außerhalb der Klammern: + und −"
    ],
    "explain": "Von innen nach außen; innerhalb jeder Ebene zuerst × und :, dann + und −."
   },
   {
    "type": "mc",
    "q": "Wer brachte die indisch-arabischen Ziffern mit dem Liber abaci (1202) nach Europa?",
    "options": [
     "Pythagoras",
     "Leonardo Fibonacci",
     "Galileo",
     "Euklid"
    ],
    "answer": 1,
    "explain": "Leonardo Pisano, genannt Fibonacci."
   }
  ],
  "gen": [
   [
    "mult2",
    1
   ],
   [
    "div2",
    1
   ]
  ]
 }
});
