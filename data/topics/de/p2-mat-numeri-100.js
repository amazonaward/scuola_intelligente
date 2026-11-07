TOPIC('de', {
 "id": "p2-mat-numeri-100",
 "title": "Die Zahlen bis 100",
 "intro": "Nach der 20 geht es mit den Zahlen weiter… bis <b>100</b>! 💯 Wir lernen, sie mit <b>Zehnern</b> und <b>Einern</b> zu zählen, <b>Sprünge</b> zu machen und herauszufinden, welche Zahl größer ist.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "Zehner und Einer",
   "html": "<p>Wenn wir <b>10 Einer</b> haben, packen wir sie zu einem Päckchen zusammen: Das ist ein <b>Zehner</b>! 📦</p>\n<p><b>10 Einer = 1 Zehner</b></p>\n<p>Jede zweistellige Zahl besteht aus <b>Zehnern</b> und <b>Einern</b>:</p>\n<ul>\n<li><b>47</b> = <span style=\"color:#dc2626\"><b>4</b> Zehner</span> und <span style=\"color:#2563eb\"><b>7</b> Einer</span> = 40 + 7</li>\n<li><b>30</b> = 3 Zehner und 0 Einer</li>\n<li><b>85</b> = 8 Zehner und 5 Einer = 80 + 5</li>\n</ul>\n<p>Die Ziffer <b>links</b> zählt die Zehner (Z), die Ziffer <b>rechts</b> die Einer (E). Die <b>Stelle</b> ist ganz wichtig: 47 und 74 sind ganz verschiedene Zahlen!</p>"
  },
  {
   "type": "svg",
   "title": "47 mit Stangen und Würfeln",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/>\n<g fill=\"#f87171\" stroke=\"#991b1b\" stroke-width=\"2\">\n<rect x=\"40\" y=\"40\" width=\"28\" height=\"200\" rx=\"4\"/><rect x=\"80\" y=\"40\" width=\"28\" height=\"200\" rx=\"4\"/>\n<rect x=\"120\" y=\"40\" width=\"28\" height=\"200\" rx=\"4\"/><rect x=\"160\" y=\"40\" width=\"28\" height=\"200\" rx=\"4\"/>\n</g>\n<g stroke=\"#991b1b\" stroke-width=\"1.5\">\n<line x1=\"40\" y1=\"60\" x2=\"188\" y2=\"60\"/><line x1=\"40\" y1=\"80\" x2=\"188\" y2=\"80\"/><line x1=\"40\" y1=\"100\" x2=\"188\" y2=\"100\"/><line x1=\"40\" y1=\"120\" x2=\"188\" y2=\"120\"/>\n<line x1=\"40\" y1=\"140\" x2=\"188\" y2=\"140\"/><line x1=\"40\" y1=\"160\" x2=\"188\" y2=\"160\"/><line x1=\"40\" y1=\"180\" x2=\"188\" y2=\"180\"/><line x1=\"40\" y1=\"200\" x2=\"188\" y2=\"200\"/><line x1=\"40\" y1=\"220\" x2=\"188\" y2=\"220\"/>\n</g>\n<g fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"2\">\n<rect x=\"230\" y=\"200\" width=\"28\" height=\"28\" rx=\"3\"/><rect x=\"265\" y=\"200\" width=\"28\" height=\"28\" rx=\"3\"/><rect x=\"300\" y=\"200\" width=\"28\" height=\"28\" rx=\"3\"/><rect x=\"335\" y=\"200\" width=\"28\" height=\"28\" rx=\"3\"/>\n<rect x=\"230\" y=\"165\" width=\"28\" height=\"28\" rx=\"3\"/><rect x=\"265\" y=\"165\" width=\"28\" height=\"28\" rx=\"3\"/><rect x=\"300\" y=\"165\" width=\"28\" height=\"28\" rx=\"3\"/>\n</g>\n<text x=\"114\" y=\"275\" font-size=\"22\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\">4 Zehner = 40</text>\n<text x=\"296\" y=\"275\" font-size=\"22\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">7 Einer = 7</text>\n<rect x=\"400\" y=\"70\" width=\"170\" height=\"150\" rx=\"14\" fill=\"#fef9c3\" stroke=\"#ca8a04\" stroke-width=\"3\"/>\n<text x=\"450\" y=\"105\" font-size=\"22\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\">Z</text>\n<text x=\"520\" y=\"105\" font-size=\"22\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">E</text>\n<text x=\"450\" y=\"180\" font-size=\"64\" text-anchor=\"middle\" fill=\"#dc2626\" font-weight=\"bold\">4</text>\n<text x=\"520\" y=\"180\" font-size=\"64\" text-anchor=\"middle\" fill=\"#2563eb\" font-weight=\"bold\">7</text>\n</svg>",
   "caption": "Jede rote Stange hat 10 Würfel: Sie ist ein Zehner. Die einzelnen blauen Würfel sind die Einer."
  },
  {
   "type": "3d",
   "title": "Baue die Zahlen mit 3D-Würfeln",
   "scene": "blocks",
   "options": {
    "mode": "base10",
    "value": 47
   },
   "caption": "Dreh das Modell und ändere die Zahl mit dem Schieberegler: Schau, wie die Zehnerstangen wachsen."
  },
  {
   "type": "widget",
   "title": "Der Abakus",
   "widget": "abacus",
   "options": {
    "columns": [
     "Z",
     "E"
    ],
    "value": 47
   },
   "caption": "Füge Perlen hinzu und nimm welche weg. Wenn die Einer 10 erreichen, werden sie zu 1 Zehnerperle!"
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Zehner und Einer",
   "questions": [
    {
     "type": "num",
     "q": "Wie viele Zehner hat die Zahl 63?",
     "answer": 6,
     "explain": "63 = 6 Zehner und 3 Einer."
    },
    {
     "type": "num",
     "q": "Welche Zahl hat 5 Zehner und 2 Einer?",
     "answer": 52,
     "explain": "50 + 2 = 52."
    },
    {
     "type": "tf",
     "q": "Bei 38 gibt die Ziffer 8 die Zehner an.",
     "answer": false,
     "explain": "Die 8 steht rechts: Sie gibt die Einer an. Es sind 3 Zehner."
    }
   ]
  },
  {
   "type": "text",
   "title": "In Sprüngen zählen",
   "html": "<p>Einzeln bis 100 zu zählen dauert lange! Wir können <b>Sprünge</b> machen 🦘:</p>\n<ul>\n<li>Zehnersprünge: 10, 20, 30, 40, 50, 60, 70, 80, 90, <b>100</b></li>\n<li>Fünfersprünge: 5, 10, 15, 20, 25, 30…</li>\n<li>Zweiersprünge: 2, 4, 6, 8, 10, 12… das sind die <b>geraden</b> Zahlen!</li>\n</ul>\n<p>Die Zahlen, die man mit Zweiersprüngen ab 0 nicht trifft (1, 3, 5, 7…), sind die <b>ungeraden</b> Zahlen. Trick: Schau auf den Einer! Wenn er 0, 2, 4, 6 oder 8 ist, ist die Zahl gerade.</p>"
  },
  {
   "type": "widget",
   "title": "Zehnersprünge auf dem Zahlenstrahl",
   "widget": "numberLine",
   "options": {
    "min": 0,
    "max": 100,
    "step": 10,
    "marks": [
     10,
     20,
     30,
     40,
     50,
     60,
     70,
     80,
     90,
     100
    ]
   },
   "caption": "Jeder Sprung fügt einen Zehner hinzu. Mit 10 Sprüngen kommst du bei 100 an!"
  },
  {
   "type": "text",
   "title": "Vorgänger, Nachfolger und Vergleichen",
   "html": "<ul>\n<li>Der <b>Vorgänger</b> einer Zahl ist die Zahl, die <b>direkt davor</b> kommt (−1): Der Vorgänger von 40 ist <b>39</b>.</li>\n<li>Der <b>Nachfolger</b> ist die Zahl, die <b>direkt danach</b> kommt (+1): Der Nachfolger von 59 ist <b>60</b>.</li>\n</ul>\n<p>Um zwei Zahlen zu <b>vergleichen</b>:</p>\n<ol>\n<li>schau zuerst auf die <b>Zehner</b>: Wer mehr hat, gewinnt → 72 &gt; 58;</li>\n<li>wenn die Zehner gleich sind, schau auf die <b>Einer</b> → 46 &gt; 43.</li>\n</ol>\n<p>Das Zeichen <b>&gt;</b> bedeutet „größer als“, <b>&lt;</b> bedeutet „kleiner als“, <b>=</b> „gleich“. Das Krokodilmaul 🐊 öffnet sich immer zur größeren Zahl!</p>"
  },
  {
   "type": "example",
   "title": "Beispiel: Tommasos Sammelbilder ⚽",
   "html": "<p>Tommaso hat <b>6 Tütchen</b> mit je 10 Sammelbildern und <b>8 einzelne Bilder</b>.</p>\n<p>Wie viele Bilder hat er? 6 Zehner und 8 Einer = 60 + 8 = <b>68</b> Bilder.</p>\n<p>Sein Freund Elia hat <b>71</b>. Wer hat mehr? Elia hat 7 Zehner, Tommaso 6: <b>71 &gt; 68</b>. Elia gewinnt!</p>"
  },
  {
   "type": "example",
   "title": "Beispiel: die Eier auf dem Markt 🥚",
   "html": "<p>Der Bauer legt die Eier in Schachteln zu je <b>10</b>. Er hat <b>9</b> Schachteln gefüllt, und es bleiben ihm <b>4</b> Eier übrig.</p>\n<p>Eier insgesamt: 9 Zehner und 4 Einer = <b>94</b>.</p>\n<p>Wie viele fehlen bis 100? Der Nachfolger von 94 ist 95, dann 96, 97, 98, 99, 100: Es fehlen <b>6</b>!</p>"
  },
  {
   "type": "text",
   "title": "Zahlen als Wörter lesen und schreiben",
   "html": "<p>Die Zehner heißen: zehn, zwanzig, dreißig, vierzig, fünfzig, sechzig, siebzig, achtzig, neunzig, <b>hundert</b>.</p>\n<p>Im Deutschen sagt man den <b>Einer zuerst</b> und dann den Zehner, verbunden mit „und“: drei + zwanzig = <b>dreiundzwanzig</b>, fünf + vierzig = <b>fünfundvierzig</b>. Geschrieben wird aber zuerst der Zehner: 23!</p>\n<p>⚠️ Achtung bei der <b>Eins</b>: Man schreibt <b>einundzwanzig</b> (nicht „einsundzwanzig“). Und bei 30 heißt es <b>dreißig</b> mit ß, bei 16, 60, 17 und 70 fällt etwas weg: <b>sechzehn</b>, <b>sechzig</b>, <b>siebzehn</b>, <b>siebzig</b>. 😉</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du, dass…?",
   "html": "<p>Im <b>Französischen</b> heißt die Zahl 80 <i>quatre-vingts</i>, also „<b>vier mal zwanzig</b>“! 🇫🇷 Und 90 heißt „vier-zwanzig-zehn“.</p>\n<p>Das ist eine Erinnerung an eine alte Art, in Zwanzigergruppen zu zählen, vielleicht mit den Fingern <b>und</b> den Zehen. Auch die <b>Maya</b> in Amerika zählten in Zwanzigergruppen.</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du, dass…?",
   "html": "<p>Warum zählen wir gerade in Gruppen von <b>10</b>? Höchstwahrscheinlich, weil wir <b>10 Finger</b> haben! 🖐️🖐️</p>\n<p>Die Ziffern, die wir benutzen (0, 1, 2… 9), sind in <b>Indien</b> entstanden, zu den <b>Arabern</b> gelangt und kamen nach Italien dank <b>Leonardo Fibonacci</b> aus Pisa, der sie <b>1202</b> in seinem Buch <i>Liber Abaci</i> erklärte. Vorher benutzte man römische Zahlen: 47 schrieb man XLVII!</p>"
  },
  {
   "type": "remember",
   "title": "Merke dir",
   "html": "<ul>\n<li><b>10 Einer = 1 Zehner</b>; <b>10 Zehner = 1 Hunderter = 100</b>.</li>\n<li>Bei zweistelligen Zahlen: links die <b>Zehner</b>, rechts die <b>Einer</b>.</li>\n<li>Zum Vergleichen: zuerst die Zehner, dann die Einer.</li>\n<li>Vorgänger = −1, Nachfolger = +1.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Andere Wege, die Zahlen bis 100 zu verstehen",
   "intro": "Zahlen kann man sehen, anfassen, hören… Such dir den Weg aus, der zu dir passt.",
   "tabs": [
    {
     "label": "💶 Mit Geld",
     "html": "<p>Du hast Münzen zu <b>10 Cent</b> und zu <b>1 Cent</b>.</p>\n<ul>\n<li>Die 10-Cent-Münzen sind die <b>Zehner</b> 🪙.</li>\n<li>Die 1-Cent-Münzen sind die <b>Einer</b>.</li>\n</ul>\n<p>Um <b>35 Cent</b> zu bezahlen, nimmst du 3 Münzen zu 10 und 5 Münzen zu 1. Mit <b>10 Münzen zu 10 Cent</b> kommst du auf <b>100 Cent = 1 Euro</b>!</p>"
    },
    {
     "label": "🧮 Die Hundertertafel",
     "html": "<p>Schreib die Zahlen von 1 bis 100 in eine Tabelle mit 10 Zeilen und 10 Spalten.</p>\n<ul>\n<li>Gehst du eine Zeile nach unten, kommen <b>10</b> dazu (12 → 22 → 32).</li>\n<li>Gehst du nach rechts, kommt <b>1</b> dazu.</li>\n<li>Alle Zahlen einer Spalte enden mit demselben Einer!</li>\n</ul>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#ffffff\"/>\n<g font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">\n<rect x=\"50\" y=\"20\" width=\"500\" height=\"25\" fill=\"#fee2e2\"/>\n<text x=\"75\" y=\"38\">1</text><text x=\"125\" y=\"38\">2</text><text x=\"175\" y=\"38\">3</text><text x=\"225\" y=\"38\">4</text><text x=\"275\" y=\"38\">5</text><text x=\"325\" y=\"38\">6</text><text x=\"375\" y=\"38\">7</text><text x=\"425\" y=\"38\">8</text><text x=\"475\" y=\"38\">9</text><text x=\"525\" y=\"38\">10</text>\n<text x=\"75\" y=\"68\">11</text><text x=\"125\" y=\"68\">12</text><text x=\"175\" y=\"68\">13</text><text x=\"225\" y=\"68\">14</text><text x=\"275\" y=\"68\">15</text><text x=\"325\" y=\"68\">16</text><text x=\"375\" y=\"68\">17</text><text x=\"425\" y=\"68\">18</text><text x=\"475\" y=\"68\">19</text><text x=\"525\" y=\"68\">20</text>\n<text x=\"75\" y=\"98\">21</text><text x=\"125\" y=\"98\">22</text><text x=\"175\" y=\"98\">23</text><text x=\"225\" y=\"98\">24</text><text x=\"275\" y=\"98\">25</text><text x=\"325\" y=\"98\">26</text><text x=\"375\" y=\"98\">27</text><text x=\"425\" y=\"98\">28</text><text x=\"475\" y=\"98\">29</text><text x=\"525\" y=\"98\">30</text>\n<text x=\"75\" y=\"128\">31</text><text x=\"125\" y=\"128\">32</text><text x=\"175\" y=\"128\">33</text><text x=\"225\" y=\"128\">34</text><text x=\"275\" y=\"128\">35</text><text x=\"325\" y=\"128\">36</text><text x=\"375\" y=\"128\">37</text><text x=\"425\" y=\"128\">38</text><text x=\"475\" y=\"128\">39</text><text x=\"525\" y=\"128\">40</text>\n<text x=\"300\" y=\"165\" font-size=\"22\">⋮</text>\n<text x=\"75\" y=\"218\">81</text><text x=\"125\" y=\"218\">82</text><text x=\"175\" y=\"218\">83</text><text x=\"225\" y=\"218\">84</text><text x=\"275\" y=\"218\">85</text><text x=\"325\" y=\"218\">86</text><text x=\"375\" y=\"218\">87</text><text x=\"425\" y=\"218\">88</text><text x=\"475\" y=\"218\">89</text><text x=\"525\" y=\"218\">90</text>\n<text x=\"75\" y=\"248\">91</text><text x=\"125\" y=\"248\">92</text><text x=\"175\" y=\"248\">93</text><text x=\"225\" y=\"248\">94</text><text x=\"275\" y=\"248\">95</text><text x=\"325\" y=\"248\">96</text><text x=\"375\" y=\"248\">97</text><text x=\"425\" y=\"248\">98</text><text x=\"475\" y=\"248\">99</text><text x=\"525\" y=\"248\" font-weight=\"bold\" fill=\"#dc2626\">100</text>\n</g>\n<rect x=\"105\" y=\"50\" width=\"40\" height=\"205\" rx=\"8\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\"/>\n<text x=\"300\" y=\"285\" font-size=\"16\" text-anchor=\"middle\" fill=\"#2563eb\">blaue Spalte: 2, 12, 22, 32… +10 pro Zeile</text>\n</svg>"
    },
    {
     "label": "🇨🇳 Zählen wie in China",
     "html": "<p>Im <b>Chinesischen</b> (und auch im Japanischen und Koreanischen) sagt man die Zahlen ganz logisch:</p>\n<ul>\n<li>11 = „<b>zehn-eins</b>“ (shí-yī)</li>\n<li>20 = „<b>zwei-zehn</b>“ (èr-shí)</li>\n<li>47 = „<b>vier-zehn-sieben</b>“ (sì-shí-qī)</li>\n</ul>\n<p>Schon der Name sagt, wie viele Zehner und wie viele Einer es sind! Versuch, die Zahlen auf Deutsch so zu sagen: 65 = „sechs-zehn-fünf“. Hilft es dir, die Zehner zu sehen?</p>"
    },
    {
     "label": "🧊 3D-Würfel",
     "html": "<p>Versuch, <b>100</b> zu bauen: Wie viele Zehnerstangen brauchst du? Dreh das Modell und schau: 10 Stangen bilden ein <b>Quadrat</b>, die „Hunderterplatte“!</p>",
     "scene": "blocks",
     "options": {
      "mode": "base10",
      "value": 100
     }
    },
    {
     "label": "🦘 Fünfersprünge",
     "html": "<p>Zähle in Fünfersprüngen, wie die Finger einer Hand: 5, 10, 15, 20… Wie viele Sprünge brauchst du bis 50?</p>",
     "widget": "numberLine",
     "options": {
      "min": 0,
      "max": 50,
      "step": 5,
      "marks": [
       5,
       10,
       15,
       20,
       25,
       30,
       35,
       40,
       45,
       50
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Mindmap der Zahlen bis 100",
   "nodes": [
    {
     "id": "unita",
     "label": "Einer",
     "x": 15,
     "y": 10,
     "color": "#2563eb",
     "html": "Jeder einzelne gezählte Gegenstand: 1.",
     "why": "Er ist der Ausgangspunkt jedes Zählens: ein Finger, ein Steinchen, eine Kerbe in einem Stock. Menschen zählen so seit Zehntausenden von Jahren."
    },
    {
     "id": "decina",
     "label": "Zehner",
     "x": 50,
     "y": 10,
     "color": "#dc2626",
     "html": "Eine Gruppe aus 10 Einern.",
     "why": "Wir bündeln zu 10, weil wir 10 Finger haben: Fast alle Völker der Welt haben die 10 als Grundzahl gewählt."
    },
    {
     "id": "cento",
     "label": "Hundert",
     "x": 85,
     "y": 10,
     "color": "#a855f7",
     "html": "10 Zehner = 100.",
     "why": "Das italienische Wort „cento“ kommt vom lateinischen <i>centum</i>. Daher kommen auch Zentimeter (der hundertste Teil eines Meters) und Cent (der hundertste Teil eines Euros)."
    },
    {
     "id": "posizione",
     "label": "Stellenwert",
     "x": 50,
     "y": 40,
     "color": "#f59e0b",
     "html": "Dieselbe Ziffer ist mehr wert, wenn sie weiter links steht: Bei 44 ist die erste 4 vierzig wert.",
     "why": "Das ist die geniale Idee der Mathematiker aus <b>Indien</b> (vor etwa 1500 Jahren): Mit nur 10 Ziffern schreibt man alle Zahlen. Die Römer benutzten dagegen für jeden Wert andere Zeichen (X, L, C)."
    },
    {
     "id": "zero",
     "label": "Die Null",
     "x": 18,
     "y": 65,
     "color": "#64748b",
     "html": "Das Zeichen, das sagt „hier ist nichts“: 30 = 3 Zehner und 0 Einer.",
     "why": "Ohne die Null könnten wir 3 und 30 nicht unterscheiden! Der indische Mathematiker <b>Brahmagupta</b> (im Jahr 628) schrieb die ersten Regeln zum Rechnen mit der Null auf."
    },
    {
     "id": "salti",
     "label": "In Sprüngen zählen",
     "x": 82,
     "y": 40,
     "color": "#16a34a",
     "html": "In Zweier-, Fünfer-, Zehnerschritten zählen.",
     "why": "Springen geht schneller als einzeln zählen und ist die Grundlage des Einmaleins: Die Fünfersprünge sind die Fünferreihe!"
    },
    {
     "id": "confronto",
     "label": "Vergleichen > <",
     "x": 50,
     "y": 68,
     "color": "#0ea5e9",
     "html": "Zuerst schaut man auf die Zehner, dann auf die Einer.",
     "why": "Die Zehner sind mehr wert: Sogar 9 Einer reichen nicht für einen Zehner, deshalb ist 60 > 59. Die Zeichen > und < hat der englische Mathematiker <b>Thomas Harriot</b> erfunden (veröffentlicht 1631)."
    },
    {
     "id": "pari",
     "label": "Gerade und ungerade",
     "x": 82,
     "y": 72,
     "color": "#14b8a6",
     "html": "Gerade: Einer 0, 2, 4, 6, 8. Ungerade: 1, 3, 5, 7, 9.",
     "why": "Eine Zahl ist gerade, wenn man sie in zwei gleiche Gruppen ohne Rest teilen kann. Es genügt, auf die Einer zu schauen, weil sich jeder Zehner immer in zwei Fünfer teilen lässt."
    },
    {
     "id": "fibonacci",
     "label": "Indisch-arabische Ziffern",
     "x": 30,
     "y": 90,
     "color": "#ef4444",
     "html": "Die Ziffern 0–9, die wir heute benutzen.",
     "why": "Sie entstanden in Indien, wurden von den Arabern weitergebracht und in Europa von <b>Leonardo Fibonacci</b> mit dem <i>Liber Abaci</i> (1202) verbreitet."
    }
   ],
   "edges": [
    [
     "unita",
     "decina",
     "10 bilden"
    ],
    [
     "decina",
     "cento",
     "10 bilden"
    ],
    [
     "decina",
     "posizione",
     "schreibt man mit"
    ],
    [
     "posizione",
     "zero",
     "braucht"
    ],
    [
     "decina",
     "salti",
     "zählt man mit"
    ],
    [
     "posizione",
     "confronto",
     "dient zum"
    ],
    [
     "unita",
     "pari",
     "entscheidet"
    ],
    [
     "fibonacci",
     "posizione",
     "benutzt"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Vergleiche und Sprünge",
   "questions": [
    {
     "type": "mc",
     "q": "Welche Zahl ist am größten?",
     "options": [
      "69",
      "71",
      "17"
     ],
     "answer": 1,
     "explain": "71 hat 7 Zehner: mehr als 69 (6 Zehner)."
    },
    {
     "type": "num",
     "q": "Was ist der Nachfolger von 79?",
     "answer": 80,
     "explain": "79 + 1 = 80: 9 Einer + 1 ergeben einen neuen Zehner."
    },
    {
     "type": "mc",
     "q": "In Zehnersprüngen: 30, 40, 50, …",
     "options": [
      "51",
      "60",
      "55"
     ],
     "answer": 1,
     "explain": "50 + 10 = 60."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Einer",
   "d": "Ein einzelnes Element. Steht bei zweistelligen Zahlen rechts."
  },
  {
   "t": "Zehner",
   "d": "Gruppe aus 10 Einern."
  },
  {
   "t": "Hunderter",
   "d": "Gruppe aus 10 Zehnern, also 100."
  },
  {
   "t": "Vorgänger",
   "d": "Die Zahl, die direkt davor kommt (−1)."
  },
  {
   "t": "Nachfolger",
   "d": "Die Zahl, die direkt danach kommt (+1)."
  },
  {
   "t": "Gerade Zahl",
   "d": "Zahl, die auf 0, 2, 4, 6, 8 endet."
  },
  {
   "t": "Ungerade Zahl",
   "d": "Zahl, die auf 1, 3, 5, 7, 9 endet."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Welche Zahl hat 7 Zehner und 4 Einer?",
    "answer": 74,
    "explain": "70 + 4 = 74."
   },
   {
    "type": "num",
    "q": "Wie viele Einer hat die Zahl 58 (neben den Zehnern)?",
    "answer": 8,
    "explain": "58 = 5 Zehner und 8 Einer."
   },
   {
    "type": "mc",
    "q": "Wie viele Zehner hat 100?",
    "options": [
     "1",
     "10",
     "100"
    ],
    "answer": 1,
    "explain": "10 Zehner = 100."
   },
   {
    "type": "num",
    "q": "Was ist der Vorgänger von 60?",
    "answer": 59,
    "explain": "60 − 1 = 59."
   },
   {
    "type": "mc",
    "q": "Welcher Vergleich ist richtig?",
    "options": [
     "45 > 54",
     "45 < 54",
     "45 = 54"
    ],
    "answer": 1,
    "explain": "45 hat 4 Zehner, 54 hat 5."
   },
   {
    "type": "tf",
    "q": "36 ist eine gerade Zahl.",
    "answer": true,
    "explain": "Sie endet auf 6: Sie ist gerade."
   },
   {
    "type": "tf",
    "q": "Man schreibt „einsundzwanzig“.",
    "answer": false,
    "explain": "Man schreibt „einundzwanzig“: Das S von „eins“ fällt weg."
   },
   {
    "type": "mc",
    "q": "In Fünfersprüngen: 15, 20, 25, …",
    "options": [
     "26",
     "30",
     "35"
    ],
    "answer": 1,
    "explain": "25 + 5 = 30."
   },
   {
    "type": "text",
    "q": "Schreib die Zahl 38 in Buchstaben.",
    "answer": [
     "achtunddreißig",
     "achtunddreissig"
    ],
    "explain": "Acht + und + dreißig = achtunddreißig: Im Deutschen kommt der Einer zuerst."
   },
   {
    "type": "order",
    "q": "Ordne von der kleinsten zur größten Zahl.",
    "items": [
     "19",
     "41",
     "47",
     "74",
     "91"
    ],
    "explain": "Zuerst schaut man auf die Zehner, dann auf die Einer."
   },
   {
    "type": "num",
    "q": "Luca hat 3 Schachteln mit je 10 Stiften und 9 einzelne Stifte. Wie viele Stifte hat er?",
    "answer": 39,
    "explain": "3 Zehner und 9 Einer = 39."
   }
  ],
  "gen": [
   [
    "tensUnits",
    2
   ],
   [
    "compare100",
    2
   ]
  ]
 }
});
