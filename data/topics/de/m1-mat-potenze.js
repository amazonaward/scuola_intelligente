TOPIC('de', {
 "id": "m1-mat-potenze",
 "title": "Die Potenzen",
 "intro": "Die <b>Potenz</b> ist eine schnelle Schreibweise für eine Multiplikation lauter gleicher Faktoren: 2 × 2 × 2 × 2 × 2 = <b>2⁵</b>. Wir lernen die Bezeichnungen, die Sonderfälle, die <b>Rechengesetze</b>, die das Rechnen vereinfachen, und die <b>wissenschaftliche Schreibweise</b>, mit der man riesige Zahlen (wie die Entfernung der Sterne) oder winzige (wie die Größe eines Bakteriums) aufschreiben kann.",
 "minutes": 45,
 "sections": [
  {
   "type": "text",
   "title": "Was ist eine Potenz?",
   "html": "<p>Die <b>Potenz</b> einer Zahl ist das Produkt mehrerer Faktoren, die <b>gleich</b> dieser Zahl sind.</p>\n<p style=\"font-size:1.3em;text-align:center\"><b>3⁴ = 3 × 3 × 3 × 3 = 81</b></p>\n<ul>\n<li>die <b>Basis</b> (3) ist der Faktor, der sich wiederholt;</li>\n<li>der <b>Exponent</b> (4), klein oben rechts geschrieben, sagt, <b>wie oft</b> die Basis mit sich selbst multipliziert wird;</li>\n<li>das Ergebnis (81) heißt ebenfalls <b>Potenz</b>.</li>\n</ul>\n<p>Man liest „drei hoch vier“. Mit Exponent 2 sagt man auch „zum <b>Quadrat</b>“ (5² = 25), mit Exponent 3 „zur <b>dritten Potenz</b>“ oder „<b>Kubikzahl</b>“ (2³ = 8).</p>\n<p><b>Achtung vor dem häufigsten Fehler</b>: 3⁴ ist <b>nicht</b> 3 × 4 = 12! Es ist 3 × 3 × 3 × 3 = 81.</p>\n<p>Die Rechenart heißt <b>Potenzieren</b>: Sie ist die fünfte Rechenart nach den vier, die du kennst. So wie die Multiplikation eine wiederholte Addition ist, ist die Potenz eine <b>wiederholte Multiplikation</b>.</p>"
  },
  {
   "type": "svg",
   "title": "Quadratzahlen und Kubikzahlen: warum sie so heißen",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#ffffff\"/>\n<g stroke=\"#1e3a8a\" stroke-width=\"2\" fill=\"#93c5fd\">\n<rect x=\"40\" y=\"70\" width=\"45\" height=\"45\"/><rect x=\"85\" y=\"70\" width=\"45\" height=\"45\"/><rect x=\"130\" y=\"70\" width=\"45\" height=\"45\"/>\n<rect x=\"40\" y=\"115\" width=\"45\" height=\"45\"/><rect x=\"85\" y=\"115\" width=\"45\" height=\"45\"/><rect x=\"130\" y=\"115\" width=\"45\" height=\"45\"/>\n<rect x=\"40\" y=\"160\" width=\"45\" height=\"45\"/><rect x=\"85\" y=\"160\" width=\"45\" height=\"45\"/><rect x=\"130\" y=\"160\" width=\"45\" height=\"45\"/>\n</g>\n<text x=\"107\" y=\"50\" font-size=\"22\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1e3a8a\">3² = 9</text>\n<text x=\"107\" y=\"240\" font-size=\"16\" text-anchor=\"middle\" fill=\"#334155\">ein Quadrat mit Seitenlänge 3</text>\n<g stroke=\"#9a3412\" stroke-width=\"2\">\n<polygon points=\"330,120 450,120 450,240 330,240\" fill=\"#fdba74\"/>\n<polygon points=\"330,120 380,80 500,80 450,120\" fill=\"#fed7aa\"/>\n<polygon points=\"450,120 500,80 500,200 450,240\" fill=\"#fb923c\"/>\n<line x1=\"370\" y1=\"120\" x2=\"370\" y2=\"240\"/><line x1=\"410\" y1=\"120\" x2=\"410\" y2=\"240\"/>\n<line x1=\"330\" y1=\"160\" x2=\"450\" y2=\"160\"/><line x1=\"330\" y1=\"200\" x2=\"450\" y2=\"200\"/>\n<line x1=\"347\" y1=\"107\" x2=\"467\" y2=\"107\"/><line x1=\"363\" y1=\"93\" x2=\"483\" y2=\"93\"/>\n<line x1=\"370\" y1=\"120\" x2=\"420\" y2=\"80\"/><line x1=\"410\" y1=\"120\" x2=\"460\" y2=\"80\"/>\n<line x1=\"467\" y1=\"107\" x2=\"467\" y2=\"227\"/><line x1=\"483\" y1=\"93\" x2=\"483\" y2=\"213\"/>\n<line x1=\"450\" y1=\"160\" x2=\"500\" y2=\"120\"/><line x1=\"450\" y1=\"200\" x2=\"500\" y2=\"160\"/>\n</g>\n<text x=\"415\" y=\"50\" font-size=\"22\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#9a3412\">3³ = 27</text>\n<text x=\"415\" y=\"275\" font-size=\"16\" text-anchor=\"middle\" fill=\"#334155\">ein Würfel mit Kantenlänge 3</text>\n</svg>",
   "caption": "Die Griechen stellten sich Zahlen als Figuren vor: 3² sind die Kästchen eines Quadrats mit Seitenlänge 3, 3³ die Würfelchen eines Würfels mit Kantenlänge 3."
  },
  {
   "type": "3d",
   "title": "Die dritte Potenz einer Zahl in 3D",
   "scene": "blocks",
   "options": {
    "mode": "volume",
    "a": 3,
    "b": 3,
    "c": 3
   },
   "caption": "3 × 3 × 3 = 3³ = 27 Würfelchen. Stelle alle Seiten auf 4: Du erhältst 4³ = 64. Probiere dann 5: Wie viele sind es?"
  },
  {
   "type": "remember",
   "title": "Die Sonderfälle",
   "html": "<ul>\n<li><b>Exponent 1</b>: a¹ = a (nur ein Faktor). 7¹ = 7</li>\n<li><b>Exponent 0</b>: a⁰ = <b>1</b> (mit a ≠ 0). 5⁰ = 1, 1000⁰ = 1 (warum, sehen wir gleich!)</li>\n<li><b>Basis 1</b>: 1ⁿ = 1. 1¹⁰⁰ = 1</li>\n<li><b>Basis 0</b>: 0ⁿ = 0 (mit n ≠ 0). 0⁵ = 0</li>\n<li><b>0⁰</b> hat in der Arithmetik keine Bedeutung: Es ist eine <b>unbestimmte</b> Form.</li>\n<li><b>Basis 10</b>: 10ⁿ = 1 gefolgt von <b>n Nullen</b>. 10⁶ = 1.000.000 (eine Million)</li>\n</ul>"
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Potenzen berechnen",
   "questions": [
    {
     "type": "num",
     "q": "Wie viel ist 2⁵?",
     "answer": 32,
     "tol": 0,
     "explain": "2 × 2 × 2 × 2 × 2 = 32."
    },
    {
     "type": "mc",
     "q": "Wie viel ist 4³?",
     "options": [
      "12",
      "64",
      "43",
      "7"
     ],
     "answer": 1,
     "explain": "4 × 4 × 4 = 64. Nicht 4 × 3!"
    },
    {
     "type": "num",
     "q": "Wie viel ist 9⁰?",
     "answer": 1,
     "tol": 0,
     "explain": "Jede Zahl ungleich 0 hoch 0 ergibt 1."
    },
    {
     "type": "tf",
     "q": "10⁴ = 10.000",
     "answer": true,
     "explain": "1 gefolgt von 4 Nullen."
    }
   ]
  },
  {
   "type": "text",
   "title": "Die Potenzgesetze",
   "html": "<p>Mit den Gesetzen kann man mit Potenzen rechnen, <b>ohne sie auszurechnen</b>. Sie gelten nur in den angegebenen Fällen!</p>\n<table>\n<tr><th>Gesetz</th><th>Regel</th><th>Beispiel</th></tr>\n<tr><td><b>1. Produkt</b> von Potenzen mit <b>gleicher Basis</b></td><td>aᵐ × aⁿ = aᵐ⁺ⁿ<br>(die Exponenten werden addiert)</td><td>2³ × 2⁴ = 2⁷ = 128</td></tr>\n<tr><td><b>2. Quotient</b> von Potenzen mit <b>gleicher Basis</b></td><td>aᵐ : aⁿ = aᵐ⁻ⁿ<br>(die Exponenten werden subtrahiert, m ≥ n)</td><td>5⁶ : 5⁴ = 5² = 25</td></tr>\n<tr><td><b>3. Potenz einer Potenz</b></td><td>(aᵐ)ⁿ = aᵐ×ⁿ<br>(die Exponenten werden multipliziert)</td><td>(3²)³ = 3⁶ = 729</td></tr>\n<tr><td><b>4. Produkt</b> von Potenzen mit <b>gleichem Exponenten</b></td><td>aⁿ × bⁿ = (a × b)ⁿ</td><td>2³ × 5³ = 10³ = 1000</td></tr>\n<tr><td><b>5. Quotient</b> von Potenzen mit <b>gleichem Exponenten</b></td><td>aⁿ : bⁿ = (a : b)ⁿ</td><td>12² : 4² = 3² = 9</td></tr>\n</table>\n<p><b>Warum funktionieren sie?</b> Man muss nur die Faktoren aufschreiben: 2³ × 2⁴ = (2×2×2) × (2×2×2×2) = sieben 2 = 2⁷.</p>\n<p><b>Deshalb ist a⁰ = 1</b>: 5³ : 5³ = 5³⁻³ = 5⁰; aber jede Zahl geteilt durch sich selbst ergibt 1. Also ist 5⁰ = 1!</p>\n<p><b>Achtung</b>: Für die <b>Summe</b> gibt es keine Regel! 2³ + 2⁴ = 8 + 16 = 24, und das ist <b>nicht</b> 2⁷ = 128.</p>"
  },
  {
   "type": "example",
   "title": "Praktisches Beispiel: ein Term mit Potenzen",
   "html": "<p>In Termen haben Potenzen <b>Vorrang</b> vor Multiplikationen und Divisionen. Reihenfolge: Klammern → <b>Potenzen</b> → × und : → + und −.</p>\n<p>Löse: <b>[ (2⁴ × 2³) : 2⁵ + 3² ] × 2 − 5⁰</b></p>\n<ol>\n<li>runde Klammern mit den Gesetzen: 2⁴ × 2³ = 2⁷; 2⁷ : 2⁵ = 2² = 4</li>\n<li>3² = 9 → [ 4 + 9 ] = 13</li>\n<li>5⁰ = 1</li>\n<li>13 × 2 − 1 = 26 − 1 = <b>25</b></li>\n</ol>\n<p>Noch ein Trick: <b>25² × 4²</b> = (25 × 4)² = 100² = <b>10.000</b>. Ohne die Gesetze hättest du 625 × 16 rechnen müssen!</p>"
  },
  {
   "type": "widget",
   "title": "Welches Gesetz?",
   "widget": "match",
   "options": {
    "pairs": [
     [
      "7² × 7⁵ = 7⁷",
      "Produkt gleiche Basis"
     ],
     [
      "9⁸ : 9³ = 9⁵",
      "Quotient gleiche Basis"
     ],
     [
      "(4³)² = 4⁶",
      "Potenz einer Potenz"
     ],
     [
      "2⁵ × 5⁵ = 10⁵",
      "Produkt gleicher Exponent"
     ],
     [
      "15⁴ : 3⁴ = 5⁴",
      "Quotient gleicher Exponent"
     ],
     [
      "8⁰ = 1",
      "Exponent null"
     ]
    ]
   },
   "caption": "Verbinde jede Gleichung mit dem Gesetz, das sie begründet."
  },
  {
   "type": "text",
   "title": "Die Zehnerpotenzen und die wissenschaftliche Schreibweise",
   "html": "<p>Die <b>Zehnerpotenzen</b> sind das Herz unseres Dezimalsystems:</p>\n<p>10¹ = 10 (Zehner), 10² = 100 (Hunderter), 10³ = 1.000 (Tausender), 10⁶ = eine Million, 10⁹ = eine Milliarde.</p>\n<p>Jede Zahl lässt sich in <b>Polynomform</b> mit Zehnerpotenzen schreiben:<br>4.705 = 4 × 10³ + 7 × 10² + 0 × 10¹ + 5 × 10⁰.</p>\n<p>Die <b>wissenschaftliche Schreibweise</b> schreibt eine Zahl als <b>a × 10ⁿ</b>, wobei <b>a</b> eine Zahl zwischen 1 (eingeschlossen) und 10 (ausgeschlossen) ist. Wissenschaftler benutzen sie für sehr große Zahlen:</p>\n<ul>\n<li>Entfernung Erde–Sonne ≈ 150.000.000 km = <b>1,5 × 10⁸ km</b></li>\n<li>Lichtgeschwindigkeit ≈ 300.000 km/s = <b>3 × 10⁵ km/s</b></li>\n<li>Einwohner der Erde ≈ 8.000.000.000 = <b>8 × 10⁹</b></li>\n</ul>\n<p><b>So geht es</b>: Verschiebe das Komma, bis vorne nur eine einzige Ziffer ungleich 0 steht; der Exponent ist die Zahl der Stellen, um die du es verschoben hast. 47.000 → 4,7 (das Komma wandert um 4 Stellen) → <b>4,7 × 10⁴</b>.</p>\n<p>Die <b>Größenordnung</b> ist die der Zahl am nächsten liegende Zehnerpotenz: Sie dient für schnelle Schätzungen. Zum Beispiel hat 8 × 10⁹ die Größenordnung 10¹⁰ (weil 8 näher an 10 als an 1 liegt).</p>"
  },
  {
   "type": "example",
   "title": "Praktisches Beispiel: die Gefahr der Mundpropaganda",
   "html": "<p>Eine Falschnachricht wird weitergeleitet: Am ersten Tag erhält sie <b>1</b> Person, die sie an <b>3</b> Freunde schickt. Am nächsten Tag schickt jeder der 3 sie an 3 weitere, und so weiter.</p>\n<table>\n<tr><th>Tag</th><th>Neue Personen</th><th>Potenz</th></tr>\n<tr><td>1</td><td>3</td><td>3¹</td></tr>\n<tr><td>2</td><td>9</td><td>3²</td></tr>\n<tr><td>3</td><td>27</td><td>3³</td></tr>\n<tr><td>5</td><td>243</td><td>3⁵</td></tr>\n<tr><td>10</td><td>59.049</td><td>3¹⁰</td></tr>\n<tr><td>20</td><td>3.486.784.401</td><td>3²⁰ ≈ 3,5 × 10⁹</td></tr>\n</table>\n<p>In 20 Tagen (theoretisch) fast die halbe Menschheit! Dieses Wachstum heißt <b>exponentiell</b>: Deshalb verbreiten sich falsche Nachrichten so schnell. Bevor du weiterleitest, prüfe nach!</p>"
  },
  {
   "type": "curiosity",
   "title": "Die Legende vom Schachbrett",
   "html": "<p>Eine indische Legende erzählt, dass der Erfinder des Schachspiels vom König als Belohnung verlangte: <b>1 Reiskorn</b> auf das erste Feld, <b>2</b> auf das zweite, <b>4</b> auf das dritte und so weiter, immer verdoppelt bis zum 64. Feld. Der König lachte über den so bescheidenen Wunsch …</p>\n<p>Aber auf dem letzten Feld hätten <b>2⁶³</b> Körner gelegen, und insgesamt <b>2⁶⁴ − 1 = 18.446.744.073.709.551.615</b> Körner: etwa 18 Trillionen (18 Milliarden Milliarden), ungefähr das <b>Tausendfache</b> der weltweiten Reisernte eines Jahres!</p>"
  },
  {
   "type": "curiosity",
   "title": "Das Googol und das bis zum Mond gefaltete Blatt",
   "html": "<p>Die Zahl <b>10¹⁰⁰</b> (1 gefolgt von 100 Nullen) heißt <b>Googol</b>: Den Namen erfand 1920 der 9-jährige Neffe des amerikanischen Mathematikers Edward Kasner, Milton Sirotta. Die Gründer von <b>Google</b> wählten den Namen ihrer Firma in Anlehnung an genau diese Zahl!</p>\n<p>Und ein Gedankenexperiment: Ein Blatt Papier von <b>0,1 mm</b> Dicke verdoppelt seine Dicke, wenn du es in der Mitte faltest. Nach <b>42 Faltungen</b> wäre die Dicke 0,1 × 2⁴² mm ≈ <b>440.000 km</b>: mehr als die Entfernung Erde–Mond (etwa 384.000 km)! In der Praxis hat es niemand geschafft, ein Blatt öfter als 12-mal zu falten.</p>"
  },
  {
   "type": "alternatives",
   "title": "Andere Wege zum Verstehen",
   "intro": "Potenzen wachsen auf überraschende Weise. Hier sind weitere Möglichkeiten, sie zu „spüren“.",
   "tabs": [
    {
     "label": "🌳 Der Baum der Verdopplungen",
     "html": "<p>Stell dir einen Stammbaum vor: Du hast 2 Eltern, 4 Großeltern, 8 Urgroßeltern … Jede Generation weiter zurück ist eine Potenz von 2. Vor zehn Generationen (etwa 300 Jahren) hattest du 2¹⁰ = <b>1.024</b> Vorfahren!</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"260\" fill=\"#f0fdf4\"/><g stroke=\"#166534\" stroke-width=\"2\"><line x1=\"300\" y1=\"225\" x2=\"160\" y2=\"165\"/><line x1=\"300\" y1=\"225\" x2=\"440\" y2=\"165\"/><line x1=\"160\" y1=\"165\" x2=\"90\" y2=\"105\"/><line x1=\"160\" y1=\"165\" x2=\"230\" y2=\"105\"/><line x1=\"440\" y1=\"165\" x2=\"370\" y2=\"105\"/><line x1=\"440\" y1=\"165\" x2=\"510\" y2=\"105\"/></g><g fill=\"#22c55e\"><circle cx=\"300\" cy=\"225\" r=\"18\"/><circle cx=\"160\" cy=\"165\" r=\"16\"/><circle cx=\"440\" cy=\"165\" r=\"16\"/><circle cx=\"90\" cy=\"105\" r=\"14\"/><circle cx=\"230\" cy=\"105\" r=\"14\"/><circle cx=\"370\" cy=\"105\" r=\"14\"/><circle cx=\"510\" cy=\"105\" r=\"14\"/></g><g fill=\"#86efac\">\n<circle cx=\"55\" cy=\"50\" r=\"11\"/><circle cx=\"125\" cy=\"50\" r=\"11\"/><circle cx=\"195\" cy=\"50\" r=\"11\"/><circle cx=\"265\" cy=\"50\" r=\"11\"/><circle cx=\"335\" cy=\"50\" r=\"11\"/><circle cx=\"405\" cy=\"50\" r=\"11\"/><circle cx=\"475\" cy=\"50\" r=\"11\"/><circle cx=\"545\" cy=\"50\" r=\"11\"/></g><g font-size=\"16\" font-weight=\"bold\" fill=\"#14532d\"><text x=\"320\" y=\"250\">du: 2⁰ = 1</text><text x=\"470\" y=\"190\">Eltern: 2¹ = 2</text><text x=\"10\" y=\"135\">Großeltern: 2² = 4</text><text x=\"200\" y=\"25\">Urgroßeltern: 2³ = 8</text></g></svg>"
    },
    {
     "label": "💻 Potenzen in Computern",
     "html": "<p>Computer zählen zur <b>Basis 2</b> (Binärsystem): Sie benutzen nur 0 und 1. Deshalb haben Speicher „seltsame“ Zahlen:</p><ul><li>1 Byte = 8 Bit = 2³ Bit und kann 2⁸ = <b>256</b> verschiedene Werte haben;</li><li>1 Kibibyte = 2¹⁰ = <b>1.024</b> Byte (ungefähr tausend);</li><li>ein USB-Stick mit 64 GB: 64 = 2⁶.</li></ul><p>Im Binärsystem schreibt man auch die Zahlen mit Potenzen von 2: 13 = 8 + 4 + 1 = 1 × 2³ + 1 × 2² + 0 × 2¹ + 1 × 2⁰ = <b>1101</b>. Es ist dasselbe Prinzip wie bei der Polynomform zur Basis 10!</p>"
    },
    {
     "label": "🧊 Quadrate in 3D",
     "html": "<p>Ein Quadrat aus 5 × 5 Würfelchen enthält 5² = 25 Würfelchen. Vergrößere die Seite um 1: Das Quadrat wird zu 6² = 36. Es wurden nicht nur 6 Würfelchen hinzugefügt, sondern 11 (eine Reihe, eine Spalte und die Ecke)! Probiere es mit den Schiebereglern und entdecke die Regel der Quadratzahlen.</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 5,
      "b": 5
     }
    },
    {
     "label": "🇨🇳 Ein System ohne Exponenten",
     "html": "<p>Im <b>Chinesischen</b> und im <b>Japanischen</b> werden große Zahlen in Gruppen zu 4 Stellen zusammengefasst, nicht zu 3: Es gibt ein Wort für <b>10⁴</b> (万, <i>wàn</i> / <i>man</i>) und eines für <b>10⁸</b> (亿, <i>yì</i> / 億 <i>oku</i>). Deshalb sagt man „eine Million“ als „hundert wàn“ (100 × 10⁴).</p><p>In Indien benutzt man das <b>Lakh</b> (10⁵) und das <b>Crore</b> (10⁷) und schreibt 1,00,00,000 statt 10.000.000! Dieselbe Zahl, andere Gruppierungen: Die Zehnerpotenzen sind die gemeinsame Sprache, die alle zusammenbringt.</p>"
    }
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Gesetze und wissenschaftliche Schreibweise",
   "questions": [
    {
     "type": "mc",
     "q": "3⁵ × 3² = ?",
     "options": [
      "3¹⁰",
      "3⁷",
      "9⁷",
      "3³"
     ],
     "answer": 1,
     "explain": "Gleiche Basis: Die Exponenten werden addiert, 5 + 2 = 7."
    },
    {
     "type": "mc",
     "q": "(2³)⁴ = ?",
     "options": [
      "2⁷",
      "2¹²",
      "2⁸¹",
      "8⁷"
     ],
     "answer": 1,
     "explain": "Potenz einer Potenz: Die Exponenten werden multipliziert, 3 × 4 = 12."
    },
    {
     "type": "mc",
     "q": "Wie schreibt man 6.200.000 in wissenschaftlicher Schreibweise?",
     "options": [
      "62 × 10⁵",
      "6,2 × 10⁶",
      "0,62 × 10⁷",
      "6,2 × 10⁵"
     ],
     "answer": 1,
     "explain": "Das Komma wandert um 6 Stellen; vorne bleibt nur eine Ziffer, 6,2."
    },
    {
     "type": "tf",
     "q": "2³ + 2² = 2⁵",
     "answer": false,
     "explain": "8 + 4 = 12, aber 2⁵ = 32. Für die Summe gibt es keine Gesetze!"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Landkarte: warum Potenzen so funktionieren",
   "nodes": [
    {
     "id": "moltiplicazione",
     "label": "Wiederholte Multiplikation",
     "x": 50,
     "y": 5,
     "color": "#64748b",
     "html": "Lauter gleiche Faktoren: 2 × 2 × 2.",
     "why": "So wie die Multiplikation die wiederholte Addition abkürzt, kürzt die Potenz die wiederholte Multiplikation ab."
    },
    {
     "id": "potenza",
     "label": "Potenz aⁿ",
     "x": 50,
     "y": 20,
     "color": "#2563eb",
     "html": "Basis a, Exponent n.",
     "why": "Die Schreibweise mit hochgestelltem Exponenten führte René Descartes in seiner „Géométrie“ von 1637 ein. Vorher schrieb man sie ausführlich oder mit Wörtern (Quadrat, Kubus)."
    },
    {
     "id": "figure",
     "label": "Quadrate und Würfel",
     "x": 15,
     "y": 32,
     "color": "#ea580c",
     "html": "a² = Flächeninhalt eines Quadrats, a³ = Volumen eines Würfels.",
     "why": "Die Pythagoreer (6. Jh. v. Chr.) stellten Zahlen mit Steinchen dar, die zu Figuren gelegt wurden: daher die Namen „Quadrat“ und „Kubus“."
    },
    {
     "id": "casi",
     "label": "Sonderfälle",
     "x": 85,
     "y": 32,
     "color": "#0ea5e9",
     "html": "a¹ = a, a⁰ = 1, 1ⁿ = 1, 0ⁿ = 0.",
     "why": "a⁰ = 1 ist keine willkürlich erfundene Regel: Es ist der einzige Wert, der das Quotientengesetz wahr macht (aⁿ : aⁿ = a⁰ = 1)."
    },
    {
     "id": "proprieta",
     "label": "Gesetze",
     "x": 50,
     "y": 44,
     "color": "#9333ea",
     "html": "Gleiche Basis: Exponenten + oder −; Potenz einer Potenz: Exponenten ×; gleicher Exponent: Basen × oder :.",
     "why": "Sie ergeben sich alle aus dem Zählen der Faktoren: aᵐ × aⁿ hat m Faktoren plus n Faktoren. Das Kommutativ- und das Assoziativgesetz der Multiplikation erlauben es, sie zu gruppieren."
    },
    {
     "id": "espressioni",
     "label": "Potenzen in Termen",
     "x": 20,
     "y": 64,
     "color": "#f59e0b",
     "html": "Klammern → Potenzen → × und : → + und −.",
     "why": "Die Potenz „bindet“ noch stärker als die Multiplikation, weil sie eine abgekürzte Form davon ist."
    },
    {
     "id": "dieci",
     "label": "Zehnerpotenzen",
     "x": 50,
     "y": 66,
     "color": "#16a34a",
     "html": "10ⁿ = 1 gefolgt von n Nullen.",
     "why": "Sie sind die Grundlage des dezimalen Stellenwertsystems: Jede Stelle ist 10-mal so viel wert wie die rechts davon. Archimedes (3. Jh. v. Chr.) benutzte im „Sandrechner“ ein ähnliches System, um die Sandkörner des Universums zu zählen."
    },
    {
     "id": "scientifica",
     "label": "Wissenschaftliche Schreibweise",
     "x": 80,
     "y": 64,
     "color": "#dc2626",
     "html": "a × 10ⁿ mit 1 ≤ a < 10.",
     "why": "Wissenschaftler brauchen sie, um weit auseinanderliegende Größen zu vergleichen: von Galaxien bis zu Viren. Sie macht das Rechnen einfacher und zeigt sofort die Größenordnung."
    },
    {
     "id": "esponenziale",
     "label": "Exponentielles Wachstum",
     "x": 35,
     "y": 88,
     "color": "#db2777",
     "html": "Bei jedem Schritt verdoppeln oder verdreifachen: Man wächst blitzschnell.",
     "why": "Bakterien, Ansteckungen, Bankzinsen, virale Nachrichten wachsen so. Die Legende vom Schachbrett zeigt, wie sehr unsere Intuition Potenzen unterschätzt."
    },
    {
     "id": "binario",
     "label": "Basis 2 und Computer",
     "x": 70,
     "y": 88,
     "color": "#0f766e",
     "html": "Computer benutzen die Potenzen von 2.",
     "why": "Gottfried Leibniz beschrieb das Binärsystem 1703; im 20. Jahrhundert zeigte Claude Shannon, dass elektrische Schaltkreise mit an/aus mit 0 und 1 rechnen können."
    }
   ],
   "edges": [
    [
     "moltiplicazione",
     "potenza",
     "wird abgekürzt zu"
    ],
    [
     "potenza",
     "figure",
     "Exponenten 2 und 3"
    ],
    [
     "potenza",
     "casi",
     "Exponenten 0 und 1"
    ],
    [
     "potenza",
     "proprieta",
     "erfüllt"
    ],
    [
     "proprieta",
     "casi",
     "erklärt a⁰ = 1"
    ],
    [
     "proprieta",
     "espressioni",
     "vereinfacht"
    ],
    [
     "potenza",
     "dieci",
     "Basis 10"
    ],
    [
     "dieci",
     "scientifica",
     "ermöglicht"
    ],
    [
     "potenza",
     "esponenziale",
     "beschreibt"
    ],
    [
     "esponenziale",
     "binario",
     "Basis 2"
    ]
   ]
  }
 ],
 "glossary": [
  {
   "t": "Potenz",
   "d": "Produkt mehrerer gleicher Faktoren: aⁿ."
  },
  {
   "t": "Basis",
   "d": "Der Faktor, der sich in einer Potenz wiederholt."
  },
  {
   "t": "Exponent",
   "d": "Die Zahl, die angibt, wie oft die Basis mit sich selbst multipliziert wird."
  },
  {
   "t": "Quadrat",
   "d": "Potenz mit Exponent 2."
  },
  {
   "t": "Kubus (dritte Potenz)",
   "d": "Potenz mit Exponent 3."
  },
  {
   "t": "Zehnerpotenz",
   "d": "10ⁿ: 1 gefolgt von n Nullen."
  },
  {
   "t": "Wissenschaftliche Schreibweise",
   "d": "Schreibweise einer Zahl als a × 10ⁿ, mit a zwischen 1 und 10 (ausgeschlossen)."
  },
  {
   "t": "Größenordnung",
   "d": "Die einer Zahl am nächsten liegende Zehnerpotenz."
  },
  {
   "t": "Exponentielles Wachstum",
   "d": "Wachstum, bei dem die Menge bei jedem Schritt mit derselben Zahl multipliziert wird."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Wie viel ist 5³?",
    "answer": 125,
    "tol": 0,
    "explain": "5 × 5 × 5 = 125."
   },
   {
    "type": "mc",
    "q": "In 7⁴ heißt die Zahl 4 …",
    "options": [
     "Basis",
     "Exponent",
     "Faktor",
     "Potenz"
    ],
    "answer": 1,
    "explain": "Der Exponent gibt an, wie oft die Basis 7 mit sich selbst multipliziert wird."
   },
   {
    "type": "tf",
    "q": "1²⁰ = 20",
    "answer": false,
    "explain": "1 mit sich selbst multipliziert, so oft du willst, ergibt immer 1."
   },
   {
    "type": "mc",
    "q": "2⁶ : 2² = ?",
    "options": [
     "2³",
     "2⁴",
     "2⁸",
     "1³"
    ],
    "answer": 1,
    "explain": "Gleiche Basis: Die Exponenten werden subtrahiert, 6 − 2 = 4."
   },
   {
    "type": "num",
    "q": "Rechne mit dem Gesetz: 4³ × 25³ = ? (schreibe die Zahl)",
    "answer": 1000000,
    "tol": 0,
    "explain": "(4 × 25)³ = 100³ = 1.000.000."
   },
   {
    "type": "mc",
    "q": "Welche Zahl ist in wissenschaftlicher Schreibweise richtig geschrieben?",
    "options": [
     "35 × 10⁴",
     "0,7 × 10³",
     "3,5 × 10⁵",
     "10 × 10²"
    ],
    "answer": 2,
    "explain": "Die Zahl vorne muss zwischen 1 (eingeschlossen) und 10 (ausgeschlossen) liegen."
   },
   {
    "type": "num",
    "q": "Löse: 2³ + 3² × 2 − 4⁰",
    "answer": 25,
    "tol": 0,
    "explain": "8 + 9 × 2 − 1 = 8 + 18 − 1 = 25."
   },
   {
    "type": "num",
    "q": "Löse: (5² − 4²)² : 3⁴",
    "answer": 1,
    "tol": 0,
    "explain": "25 − 16 = 9; 9² = 81; 3⁴ = 81; 81 : 81 = 1."
   },
   {
    "type": "mc",
    "q": "Wie viel ist 10⁹?",
    "options": [
     "Eine Million",
     "Eine Milliarde",
     "Tausend",
     "Hundert Millionen"
    ],
    "answer": 1,
    "explain": "1 gefolgt von 9 Nullen: 1.000.000.000."
   },
   {
    "type": "text",
    "q": "Wie liest man „6²“? (sechs zum …)",
    "answer": [
     "quadrat",
     "zum quadrat",
     "sechs zum quadrat",
     "im quadrat",
     "sechs hoch zwei",
     "hoch zwei"
    ],
    "explain": "Sechs zum Quadrat = 36."
   },
   {
    "type": "order",
    "q": "Bringe sie in die Reihenfolge vom kleinsten zum größten",
    "items": [
     "2³",
     "3²",
     "2⁴",
     "5²",
     "3³"
    ],
    "explain": "8 < 9 < 16 < 25 < 27."
   },
   {
    "type": "mc",
    "q": "Warum ist 7⁰ = 1?",
    "options": [
     "Es ist eine Vereinbarung ohne Grund",
     "Weil 7³ : 7³ = 7⁰ ist und jede Zahl geteilt durch sich selbst 1 ergibt",
     "Weil 7 × 0 = 0 ist",
     "Weil die 0 nicht zählt"
    ],
    "answer": 1,
    "explain": "Das Quotientengesetz zwingt a⁰ dazu, 1 zu sein."
   }
  ],
  "gen": [
   [
    "power",
    3
   ]
  ]
 }
});
