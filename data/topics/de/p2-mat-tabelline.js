TOPIC('de', {
 "id": "p2-mat-tabelline",
 "title": "Das Einmaleins",
 "intro": "Das <b>Einmaleins</b> ist eine Superkraft 🦸: Damit zählen wir ganz schnell viele gleiche Dinge. Wir entdecken, dass <b>Multiplizieren</b> eine <b>wiederholte Addition</b> ist!",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "Multiplizieren = viele Male dieselbe Zahl addieren",
   "html": "<p>Du hast <b>3 Teller</b>, und auf jedem Teller liegen <b>4 Kekse</b> 🍪.</p><p>Du kannst so zählen: 4 + 4 + 4 = 12.</p><p>Oder du sagst: <b>3 mal 4</b>, das schreibt man <b>3 × 4 = 12</b>.</p><p>Das Zeichen <b>×</b> liest man „mal“. Die Zahlen, die wir multiplizieren, heißen <b>Faktoren</b>, das Ergebnis heißt <b>Produkt</b>.</p>"
  },
  {
   "type": "svg",
   "title": "3 × 4 als Punktefeld",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fefce8\"/><text x=\"300\" y=\"40\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3 Reihen × 4 Spalten = 12</text><g fill=\"#a16207\" stroke=\"#713f12\" stroke-width=\"2\"><circle cx=\"110\" cy=\"100\" r=\"24\"/><circle cx=\"180\" cy=\"100\" r=\"24\"/><circle cx=\"250\" cy=\"100\" r=\"24\"/><circle cx=\"320\" cy=\"100\" r=\"24\"/><circle cx=\"110\" cy=\"170\" r=\"24\"/><circle cx=\"180\" cy=\"170\" r=\"24\"/><circle cx=\"250\" cy=\"170\" r=\"24\"/><circle cx=\"320\" cy=\"170\" r=\"24\"/><circle cx=\"110\" cy=\"240\" r=\"24\"/><circle cx=\"180\" cy=\"240\" r=\"24\"/><circle cx=\"250\" cy=\"240\" r=\"24\"/><circle cx=\"320\" cy=\"240\" r=\"24\"/></g><g fill=\"#fde68a\"><circle cx=\"102\" cy=\"94\" r=\"4\"/><circle cx=\"172\" cy=\"94\" r=\"4\"/><circle cx=\"242\" cy=\"94\" r=\"4\"/><circle cx=\"312\" cy=\"94\" r=\"4\"/><circle cx=\"102\" cy=\"164\" r=\"4\"/><circle cx=\"172\" cy=\"164\" r=\"4\"/><circle cx=\"242\" cy=\"164\" r=\"4\"/><circle cx=\"312\" cy=\"164\" r=\"4\"/><circle cx=\"102\" cy=\"234\" r=\"4\"/><circle cx=\"172\" cy=\"234\" r=\"4\"/><circle cx=\"242\" cy=\"234\" r=\"4\"/><circle cx=\"312\" cy=\"234\" r=\"4\"/></g><g font-size=\"22\" fill=\"#2563eb\" font-weight=\"bold\"><text x=\"370\" y=\"108\">4</text><text x=\"370\" y=\"178\">+ 4</text><text x=\"370\" y=\"248\">+ 4</text></g><text x=\"470\" y=\"178\" font-size=\"34\" font-weight=\"bold\" fill=\"#dc2626\">= 12</text></svg>",
   "caption": "Ein Punktefeld: Reihen und Spalten aus Keksen. 3 Reihen mit je 4 ergeben 12."
  },
  {
   "type": "example",
   "title": "Beispiel: die Pfoten der Hunde 🐕",
   "html": "<p>Im Park sind <b>5 Hunde</b>. Jeder Hund hat <b>4 Pfoten</b>.</p><p>Wie viele Pfoten sind es insgesamt? 4 + 4 + 4 + 4 + 4 = 20, also <b>5 × 4 = 20</b> Pfoten! 🐾</p>"
  },
  {
   "type": "text",
   "title": "Tricks, um sich das Einmaleins zu merken",
   "html": "<ul><li><b>× 1</b>: Die Zahl bleibt gleich. 7 × 1 = 7.</li><li><b>× 0</b>: Das ergibt immer 0! 8 × 0 = 0 (0 Teller = 0 Kekse).</li><li><b>× 2</b>: Das ist das <b>Doppelte</b>. 6 × 2 = 6 + 6 = 12.</li><li><b>× 5</b>: Die Ergebnisse enden immer auf <b>0</b> oder <b>5</b>: 5, 10, 15, 20…</li><li><b>× 10</b>: Häng eine <b>0</b> hinten an. 3 × 10 = 30.</li><li><b>× 9</b>: Die Ziffern des Ergebnisses ergeben zusammen 9! 9 × 3 = 27 → 2 + 7 = 9.</li></ul>"
  },
  {
   "type": "remember",
   "title": "Das Vertauschungsgesetz",
   "html": "<p>Wenn du die Faktoren vertauschst, ändert sich das Ergebnis <b>nicht</b>: <b>3 × 4 = 4 × 3 = 12</b>.</p><p>Wenn du also 3 × 8 kannst, kannst du auch 8 × 3! So musst du nur noch die Hälfte der Aufgaben lernen. 😄</p>"
  },
  {
   "type": "widget",
   "title": "Die Einmaleins-Tafel",
   "widget": "timesTable",
   "options": {
    "size": 10
   },
   "caption": "Tippe auf ein Feld: Zeile und Spalte treffen sich beim Ergebnis. Schau: Die Tafel ist auf beiden Seiten der Diagonale gleich!"
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: wiederholte Additionen",
   "questions": [
    {
     "type": "mc",
     "q": "2 + 2 + 2 + 2 ist gleich…",
     "options": [
      "2 × 4",
      "2 × 2",
      "4 + 2"
     ],
     "answer": 0,
     "explain": "Die 2 wird 4-mal wiederholt: 2 × 4 = 8."
    },
    {
     "type": "num",
     "q": "Wie viel ist 5 × 3?",
     "answer": 15,
     "explain": "5 + 5 + 5 = 15."
    },
    {
     "type": "tf",
     "q": "6 × 0 = 6",
     "answer": false,
     "explain": "Jede Zahl mal 0 ergibt 0."
    }
   ]
  },
  {
   "type": "widget",
   "title": "Sprünge auf dem Zahlenstrahl: die Dreierreihe",
   "widget": "numberLine",
   "options": {
    "min": 0,
    "max": 30,
    "step": 3,
    "marks": [
     3,
     6,
     9,
     12,
     15,
     18,
     21,
     24,
     27,
     30
    ]
   },
   "caption": "Mach Dreiersprünge: 3, 6, 9, 12… das sind die Ergebnisse der Dreierreihe!"
  },
  {
   "type": "example",
   "title": "Beispiel: Einkaufen auf dem Markt 🥚",
   "html": "<p>Oma kauft <b>2 Packungen Eier</b>. In jeder Packung sind <b>6 Eier</b>.</p><p>Wie viele Eier? <b>2 × 6 = 12</b> Eier. Ein Dutzend! 🥚</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du, dass…? 🏛️",
   "html": "<p>Die Einmaleins-Tafel heißt in Italien <b>„tavola pitagorica“</b> (pythagoreische Tafel), zu Ehren von <b>Pythagoras</b>, einem griechischen Mathematiker, der vor mehr als 2500 Jahren lebte.</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du, dass…? ✋",
   "html": "<p>Für die Neunerreihe gibt es einen Fingertrick! Streck die Hände aus. Für 9 × 4 klappst du den <b>4. Finger</b> von links nach unten: Links bleiben <b>3 Finger</b> und rechts <b>6 Finger</b>. Das Ergebnis ist <b>36</b>!</p>"
  },
  {
   "type": "3d",
   "title": "Das Einmaleins in 3D 🧊",
   "scene": "blocks",
   "options": {
    "mode": "array",
    "a": 3,
    "b": 4
   },
   "caption": "Eine Malaufgabe ist ein Rechteck aus Würfeln: 3 Reihen mit je 4 Würfeln = 12 Würfel. Ändere die Zahlen mit den Schiebereglern und dreh das Rechteck: 3 × 4 und 4 × 3 haben gleich viele Würfel!"
  },
  {
   "type": "alternatives",
   "title": "Dir gefällt die Schulmethode nicht? Hier sind andere Wege! 🌍",
   "intro": "<p>Überall auf der Welt multiplizieren Kinder auf verschiedene Weise. Es gibt nicht nur einen richtigen Weg: Wähle den, den du am besten verstehst!</p>",
   "tabs": [
    {
     "label": "🧊 3D-Würfel",
     "html": "<p>Leg die Würfel in <b>Reihen</b>: 3 Reihen mit je 5 Würfeln. Wie viele sind es insgesamt? Zähle die Reihen und die Würfel in jeder Reihe: <b>3 × 5 = 15</b>.</p><p>Beweg die Schieberegler und bau selbst das Einmaleins!</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 3,
      "b": 5
     }
    },
    {
     "label": "🔄 Dreh das Rechteck",
     "html": "<p>Zeichne 3 Reihen mit je 5 Kästchen. Jetzt <b>dreh das Blatt</b>: Es werden 5 Reihen mit je 3 Kästchen! Es sind immer <b>15</b> Kästchen.</p><p>Deshalb ist <b>3 × 5 = 5 × 3</b>. Das nennt man <b>Vertauschungsgesetz</b>. So musst du nur die Hälfte der Einmaleins-Tafel lernen! 😉</p>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"240\" fill=\"#f0f9ff\"/><g fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"2\"><rect x=\"40\" y=\"50\" width=\"30\" height=\"30\"/><rect x=\"70\" y=\"50\" width=\"30\" height=\"30\"/><rect x=\"100\" y=\"50\" width=\"30\" height=\"30\"/><rect x=\"130\" y=\"50\" width=\"30\" height=\"30\"/><rect x=\"160\" y=\"50\" width=\"30\" height=\"30\"/><rect x=\"40\" y=\"80\" width=\"30\" height=\"30\"/><rect x=\"70\" y=\"80\" width=\"30\" height=\"30\"/><rect x=\"100\" y=\"80\" width=\"30\" height=\"30\"/><rect x=\"130\" y=\"80\" width=\"30\" height=\"30\"/><rect x=\"160\" y=\"80\" width=\"30\" height=\"30\"/><rect x=\"40\" y=\"110\" width=\"30\" height=\"30\"/><rect x=\"70\" y=\"110\" width=\"30\" height=\"30\"/><rect x=\"100\" y=\"110\" width=\"30\" height=\"30\"/><rect x=\"130\" y=\"110\" width=\"30\" height=\"30\"/><rect x=\"160\" y=\"110\" width=\"30\" height=\"30\"/></g><text x=\"115\" y=\"185\" font-size=\"26\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#1e3a8a\">3 × 5 = 15</text><text x=\"300\" y=\"110\" font-size=\"44\" text-anchor=\"middle\">🔄</text><g fill=\"#f472b6\" stroke=\"#831843\" stroke-width=\"2\"><rect x=\"420\" y=\"20\" width=\"30\" height=\"30\"/><rect x=\"450\" y=\"20\" width=\"30\" height=\"30\"/><rect x=\"480\" y=\"20\" width=\"30\" height=\"30\"/><rect x=\"420\" y=\"50\" width=\"30\" height=\"30\"/><rect x=\"450\" y=\"50\" width=\"30\" height=\"30\"/><rect x=\"480\" y=\"50\" width=\"30\" height=\"30\"/><rect x=\"420\" y=\"80\" width=\"30\" height=\"30\"/><rect x=\"450\" y=\"80\" width=\"30\" height=\"30\"/><rect x=\"480\" y=\"80\" width=\"30\" height=\"30\"/><rect x=\"420\" y=\"110\" width=\"30\" height=\"30\"/><rect x=\"450\" y=\"110\" width=\"30\" height=\"30\"/><rect x=\"480\" y=\"110\" width=\"30\" height=\"30\"/><rect x=\"420\" y=\"140\" width=\"30\" height=\"30\"/><rect x=\"450\" y=\"140\" width=\"30\" height=\"30\"/><rect x=\"480\" y=\"140\" width=\"30\" height=\"30\"/></g><text x=\"465\" y=\"215\" font-size=\"26\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#831843\">5 × 3 = 15</text></svg>"
    },
    {
     "label": "🇯🇵 Die japanischen Linien",
     "html": "<p>In <b>Japan</b> und <b>China</b> multiplizieren viele Kinder, indem sie <b>Linien</b> zeichnen! Für 12 × 13:</p><ol><li>Du zeichnest 1 Linie und dann 2 Linien (die 12) schräg in eine Richtung;</li><li>du zeichnest 1 Linie und dann 3 Linien (die 13) schräg in die andere Richtung;</li><li>du zählst die <b>Kreuzungspunkte</b> in jedem Bereich: links die Hunderter, in der Mitte die Zehner, rechts die Einer.</li></ol><p>Ergebnis: 1 | 5 | 6 → <b>156</b>. Schau dir die Animation an!</p>",
     "widget": "lineMultiply",
     "options": {
      "a": 12,
      "b": 13
     }
    },
    {
     "label": "🇷🇺 Der russische Bauer",
     "html": "<p>Man erzählt, dass die <b>russischen Bauern</b> multiplizierten und dabei nur zwei Dinge konnten: <b>halbieren</b> und <b>verdoppeln</b>!</p><ol><li>Schreib die beiden Zahlen in zwei Spalten.</li><li>Links teilst du durch 2 (ohne Rest), rechts verdoppelst du.</li><li>Streich die Zeilen durch, in denen links eine <b>gerade</b> Zahl steht.</li><li>Addiere die übrigen Zahlen rechts.</li></ol><p>Probier es: 8 × 6 = 48.</p>",
     "widget": "russianPeasant",
     "options": {
      "a": 8,
      "b": 6
     }
    },
    {
     "label": "🏺 Die alten Ägypter",
     "html": "<p>Vor mehr als 3500 Jahren multiplizierten die <b>Ägypter</b> nur mit <b>Verdoppeln</b>! Für 7 × 6:</p><ul><li>1 × 6 = 6</li><li>2 × 6 = 12</li><li>4 × 6 = 24</li></ul><p>Dann wählten sie die Zeilen aus, die zusammen 7 ergeben: 1 + 2 + 4 = 7. Sie addierten 6 + 12 + 24 = <b>42</b>. Genial, oder?</p>",
     "widget": "egyptianMultiply",
     "options": {
      "a": 7,
      "b": 6
     }
    },
    {
     "label": "🔲 Die Gittermethode",
     "html": "<p>Die <b>Gittermethode</b> benutzt ein Gitter mit Diagonalen, das an Fensterläden erinnert (auf Italienisch heißt sie „gelosia“, wie die Fensterläden). Sie kommt aus der <b>arabischen</b> Welt und wurde im Mittelalter in <b>Venedig</b> und in ganz Italien benutzt.</p><p>In jedes Feld schreibst du das Ergebnis einer Einmaleins-Aufgabe (Zehner über der Diagonale, Einer darunter), dann addierst du entlang der Diagonalen.</p>",
     "widget": "lattice",
     "options": {
      "a": 23,
      "b": 4
     }
    },
    {
     "label": "✋ Der Neunertrick",
     "html": "<p>Für die Neunerreihe brauchst du nur deine Hände!</p><ol><li>Streck die Hände vor dir aus: 10 Finger.</li><li>Für 9 × 3 klappst du den <b>dritten Finger</b> von links nach unten.</li><li>Die Finger <b>links</b> vom umgeklappten Finger sind die <b>Zehner</b>: 2.</li><li>Die Finger <b>rechts</b> davon sind die <b>Einer</b>: 7.</li></ol><p>9 × 3 = <b>27</b>! Das klappt von 9 × 1 bis 9 × 10.</p>",
     "svg": "<svg viewBox=\"0 0 600 220\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"220\" fill=\"#fefce8\"/><g fill=\"#fdba74\" stroke=\"#9a3412\" stroke-width=\"2\"><rect x=\"40\" y=\"40\" width=\"34\" height=\"110\" rx=\"17\"/><rect x=\"90\" y=\"40\" width=\"34\" height=\"110\" rx=\"17\"/><rect x=\"140\" y=\"110\" width=\"34\" height=\"40\" rx=\"17\" fill=\"#fca5a5\"/><rect x=\"190\" y=\"40\" width=\"34\" height=\"110\" rx=\"17\"/><rect x=\"240\" y=\"40\" width=\"34\" height=\"110\" rx=\"17\"/><rect x=\"320\" y=\"40\" width=\"34\" height=\"110\" rx=\"17\"/><rect x=\"370\" y=\"40\" width=\"34\" height=\"110\" rx=\"17\"/><rect x=\"420\" y=\"40\" width=\"34\" height=\"110\" rx=\"17\"/><rect x=\"470\" y=\"40\" width=\"34\" height=\"110\" rx=\"17\"/><rect x=\"520\" y=\"40\" width=\"34\" height=\"110\" rx=\"17\"/></g><text x=\"157\" y=\"30\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#b91c1c\" font-weight=\"bold\">3.</text><text x=\"82\" y=\"185\" font-size=\"22\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#1e3a8a\">2 Zehner</text><text x=\"400\" y=\"185\" font-size=\"22\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#166534\">7 Einer</text><text x=\"300\" y=\"212\" font-size=\"24\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#111827\">9 × 3 = 27</text></svg>"
    },
    {
     "label": "🐸 Die Froschsprünge",
     "html": "<p>Ein Frosch springt immer gleich weit. Wenn er Vierersprünge macht, wo kommt er nach 5 Sprüngen an? 4, 8, 12, 16, <b>20</b>! Die Einmaleinsreihen sind <b>gleiche Sprünge</b> auf dem Zahlenstrahl.</p>",
     "widget": "numberLine",
     "options": {
      "min": 0,
      "max": 40,
      "step": 4,
      "marks": [
       20,
       40
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Die Mindmap der Multiplikation 🗺️",
   "nodes": [
    {
     "id": "addizione",
     "label": "Addition",
     "x": 50,
     "y": 6,
     "color": "#22c55e",
     "html": "<p>Du kannst schon addieren: 3 + 3 + 3 + 3.</p>",
     "why": "<p>Die Addition ist die erste Rechenart: zusammenfügen. Alle anderen Rechenarten entstehen aus ihr.</p>"
    },
    {
     "id": "ripetuta",
     "label": "Wiederholte Addition",
     "x": 50,
     "y": 26,
     "color": "#16a34a",
     "html": "<p>Wenn du viele Male <b>dieselbe Zahl</b> dazutust, kannst du eine Abkürzung nehmen: die Multiplikation. 3 + 3 + 3 + 3 = 4 × 3.</p>",
     "why": "<p>Hundertmal 3 + 3 + 3 + … zu schreiben, würde ewig dauern! Die Multiplikation ist entstanden, um <b>Mühe zu sparen</b>.</p>"
    },
    {
     "id": "moltiplicazione",
     "label": "Multiplikation ×",
     "x": 50,
     "y": 46,
     "color": "#3b82f6",
     "html": "<p>4 × 3 = 12. Die Zahlen, die du multiplizierst, heißen <b>Faktoren</b>, das Ergebnis heißt <b>Produkt</b>.</p>",
     "why": "<p>Das Zeichen × hat zum ersten Mal ein englischer Mathematiker benutzt, <b>William Oughtred</b>, vor fast 400 Jahren. Vorher schrieb man es in Worten!</p>"
    },
    {
     "id": "rettangolo",
     "label": "Rechteck aus Kästchen",
     "x": 15,
     "y": 46,
     "color": "#f97316",
     "html": "<p>Jede Malaufgabe kann man als <b>Rechteck</b> zeichnen: 4 Reihen mit je 3 Kästchen.</p>",
     "why": "<p>Das Rechteck lässt uns die Multiplikation <b>sehen</b>: Die Reihen sind gleich, genau wie die gleichen Summanden bei der wiederholten Addition.</p>"
    },
    {
     "id": "tabelline",
     "label": "Einmaleins",
     "x": 85,
     "y": 46,
     "color": "#a855f7",
     "html": "<p>Das <b>Einmaleins</b> sind die Malaufgaben von 1 bis 10, die man auswendig können sollte. Zusammen bilden sie die <b>Einmaleins-Tafel</b>.</p>",
     "why": "<p>In Italien heißt sie „pythagoreisch“, zu Ehren des griechischen Mathematikers <b>Pythagoras</b>, aber das Einmaleins ist noch älter: In <b>China</b> wurde eine Multiplikationstafel gefunden, die vor mehr als 2300 Jahren auf Bambusstreifen geschrieben wurde!</p>"
    },
    {
     "id": "commutativa",
     "label": "Man kann drehen: 3×5 = 5×3",
     "x": 15,
     "y": 75,
     "color": "#ec4899",
     "html": "<p><b>Vertauschungsgesetz</b>: Wenn du die Faktoren vertauschst, ändert sich das Produkt nicht.</p>",
     "why": "<p>Warum? Nimm das Rechteck 3 × 5 und dreh es: Es wird zu 5 × 3, aber die Kästchen sind immer noch dieselben! Niemand hat welche hinzugefügt oder weggenommen.</p>"
    },
    {
     "id": "zero",
     "label": "× 0 = 0",
     "x": 40,
     "y": 75,
     "color": "#64748b",
     "html": "<p>Jede Zahl mal <b>0</b> ergibt <b>0</b>.</p>",
     "why": "<p>5 × 0 bedeutet „5-mal nichts“: Wenn du 5 leere Schachteln hast, wie viele Bonbons hast du? Null!</p>"
    },
    {
     "id": "uno",
     "label": "× 1 bleibt gleich",
     "x": 62,
     "y": 75,
     "color": "#0ea5e9",
     "html": "<p>Jede Zahl mal <b>1</b> bleibt gleich: 7 × 1 = 7.</p>",
     "why": "<p>7 × 1 bedeutet „die 7 nur einmal“: Da ändert sich nichts!</p>"
    },
    {
     "id": "dieci",
     "label": "× 10: eine 0 anhängen",
     "x": 85,
     "y": 75,
     "color": "#eab308",
     "html": "<p>4 × 10 = 40: Man hängt eine <b>Null</b> an.</p>",
     "why": "<p>Mal 10 rechnen verwandelt jeden Einer in einen Zehner: Die Ziffern rücken eine Stelle nach links, und die Null hält den leeren Platz bei den Einern frei.</p>"
    },
    {
     "id": "divisione",
     "label": "Division",
     "x": 50,
     "y": 95,
     "color": "#ef4444",
     "html": "<p>Die <b>Division</b> ist die Umkehrung: Wenn 4 × 3 = 12, dann ist 12 : 3 = 4.</p>",
     "why": "<p>Wenn du das Einmaleins gut kannst, hilft dir das sehr beim Dividieren: Es ist dieselbe Tafel, nur andersherum gelesen!</p>"
    }
   ],
   "edges": [
    [
     "addizione",
     "ripetuta",
     "mit gleichen Zahlen"
    ],
    [
     "ripetuta",
     "moltiplicazione",
     "Abkürzung"
    ],
    [
     "moltiplicazione",
     "rettangolo",
     "zeichnet man als"
    ],
    [
     "moltiplicazione",
     "tabelline",
     "von 1 bis 10"
    ],
    [
     "rettangolo",
     "commutativa",
     "beim Drehen"
    ],
    [
     "moltiplicazione",
     "zero",
     ""
    ],
    [
     "moltiplicazione",
     "uno",
     ""
    ],
    [
     "tabelline",
     "dieci",
     ""
    ],
    [
     "moltiplicazione",
     "divisione",
     "die Umkehrung"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: schnelles Einmaleins",
   "questions": [
    {
     "type": "num",
     "q": "7 × 2 = ?",
     "answer": 14,
     "explain": "Das Doppelte von 7 ist 14."
    },
    {
     "type": "num",
     "q": "4 × 10 = ?",
     "answer": 40,
     "explain": "Mal 10: Häng eine Null an: 40."
    },
    {
     "type": "mc",
     "q": "Welches Ergebnis gehört zur Fünferreihe?",
     "options": [
      "23",
      "35",
      "41"
     ],
     "answer": 1,
     "explain": "35 = 5 × 7; die Ergebnisse der Fünferreihe enden auf 0 oder 5."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Multiplikation",
   "d": "Eine wiederholte Addition derselben Zahl. Man benutzt das Zeichen ×."
  },
  {
   "t": "Faktoren",
   "d": "Die Zahlen, die man multipliziert."
  },
  {
   "t": "Produkt",
   "d": "Das Ergebnis der Multiplikation."
  },
  {
   "t": "Punktefeld",
   "d": "Gegenstände in gleichen Reihen und Spalten angeordnet."
  },
  {
   "t": "Doppeltes",
   "d": "Eine Zahl, 2-mal genommen."
  },
  {
   "t": "Einmaleins-Tafel",
   "d": "Die Tabelle mit allen Ergebnissen des Einmaleins."
  },
  {
   "t": "Vertauschungsgesetz",
   "d": "Wenn man die Faktoren vertauscht, ändert sich das Produkt nicht."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "3 × 3 = ?",
    "answer": 9,
    "explain": "3 + 3 + 3 = 9."
   },
   {
    "type": "num",
    "q": "6 × 5 = ?",
    "answer": 30,
    "explain": "5 + 5 + 5 + 5 + 5 + 5 = 30."
   },
   {
    "type": "num",
    "q": "8 × 2 = ?",
    "answer": 16,
    "explain": "Das Doppelte von 8 ist 16."
   },
   {
    "type": "mc",
    "q": "Welche Addition ist gleich 4 × 3?",
    "options": [
     "4 + 3",
     "3 + 3 + 3 + 3",
     "4 + 4 + 4 + 4"
    ],
    "answer": 1,
    "explain": "4 × 3 bedeutet 4-mal die 3."
   },
   {
    "type": "tf",
    "q": "5 × 2 ist gleich 2 × 5.",
    "answer": true,
    "explain": "Vertauschungsgesetz: Beide ergeben 10."
   },
   {
    "type": "num",
    "q": "9 × 1 = ?",
    "answer": 9,
    "explain": "Mal 1 bleibt die Zahl gleich."
   },
   {
    "type": "num",
    "q": "Eine Spinne hat 8 Beine. Wie viele Beine haben 3 Spinnen? 🕷️",
    "answer": 24,
    "explain": "3 × 8 = 24."
   },
   {
    "type": "mc",
    "q": "Wie heißt das Ergebnis einer Multiplikation?",
    "options": [
     "Summe",
     "Produkt",
     "Differenz"
    ],
    "answer": 1,
    "explain": "Das Ergebnis der Multiplikation ist das Produkt."
   },
   {
    "type": "order",
    "q": "Bring die Ergebnisse der Viererreihe in die richtige Reihenfolge",
    "items": [
     "4",
     "8",
     "12",
     "16",
     "20"
    ],
    "explain": "4, 8, 12, 16, 20: jedes Mal + 4."
   },
   {
    "type": "num",
    "q": "0 × 7 = ?",
    "answer": 0,
    "explain": "Mal 0 ergibt immer 0."
   }
  ],
  "gen": [
   [
    "times",
    4
   ]
  ]
 }
});
