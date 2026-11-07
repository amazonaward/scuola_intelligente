TOPIC('de', {
 "id": "m1-mat-numeri-primi-mcd-mcm",
 "title": "Primzahlen, ggT und kgV",
 "intro": "Die Primzahlen sind die „Bausteine“, aus denen man alle anderen natürlichen Zahlen aufbaut. Wir lernen, sie zu erkennen, Zahlen in Faktoren zu zerlegen und sie zu benutzen, um den <b>größten gemeinsamen Teiler</b> und das <b>kleinste gemeinsame Vielfache</b> zu berechnen.",
 "minutes": 40,
 "sections": [
  {
   "type": "text",
   "title": "Vielfache und Teiler",
   "html": "<p>Wir beginnen mit zwei Schlüsselwörtern:</p>\n<ul>\n<li>ein <b>Vielfaches</b> einer Zahl erhält man, indem man sie mit 0, 1, 2, 3 … multipliziert.<br>Vielfache von 6: 0, 6, 12, 18, 24, 30 … (es sind unendlich viele!)</li>\n<li>ein <b>Teiler</b> einer Zahl ist eine Zahl, die sie <b>ohne Rest</b> teilt.<br>Teiler von 12: 1, 2, 3, 4, 6, 12 (es sind endlich viele).</li>\n</ul>\n<p>Die beiden Dinge gehören zusammen: Wenn 12 ein <b>Vielfaches</b> von 3 ist, dann ist 3 ein <b>Teiler</b> von 12. Man sagt auch, dass 12 durch 3 <b>teilbar</b> ist.</p>\n<p>Merke: <b>1</b> ist Teiler aller Zahlen, und jede Zahl ist Teiler von sich selbst.</p>"
  },
  {
   "type": "remember",
   "title": "Die Teilbarkeitsregeln",
   "html": "<p>Um zu erkennen, ob eine Zahl teilbar ist, ohne zu dividieren:</p>\n<table>\n<tr><th>Durch</th><th>Regel</th><th>Beispiel</th></tr>\n<tr><td><b>2</b></td><td>die letzte Ziffer ist gerade (0, 2, 4, 6, 8)</td><td>374 ✔️</td></tr>\n<tr><td><b>3</b></td><td>die Quersumme ist durch 3 teilbar</td><td>411 → 4+1+1 = 6 ✔️</td></tr>\n<tr><td><b>4</b></td><td>die letzten zwei Ziffern bilden eine durch 4 teilbare Zahl (oder sind 00)</td><td>1.316 → 16 ✔️</td></tr>\n<tr><td><b>5</b></td><td>die letzte Ziffer ist 0 oder 5</td><td>845 ✔️</td></tr>\n<tr><td><b>9</b></td><td>die Quersumme ist durch 9 teilbar</td><td>738 → 7+3+8 = 18 ✔️</td></tr>\n<tr><td><b>10, 100 …</b></td><td>endet auf eine, zwei … Nullen</td><td>4.500 ✔️</td></tr>\n<tr><td><b>11</b></td><td>die Differenz zwischen der Summe der Ziffern an ungeraden und an geraden Stellen ist 0 oder ein Vielfaches von 11</td><td>693 → (6+3) − 9 = 0 ✔️</td></tr>\n</table>"
  },
  {
   "type": "text",
   "title": "Primzahlen und zusammengesetzte Zahlen",
   "html": "<p>Eine natürliche Zahl größer als 1 heißt:</p>\n<ul>\n<li><b>Primzahl</b>, wenn sie <b>nur zwei Teiler</b> hat: 1 und sich selbst. Beispiele: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 …</li>\n<li><b>zusammengesetzt</b>, wenn sie <b>mehr als zwei Teiler</b> hat. Beispiele: 4 (1, 2, 4), 9 (1, 3, 9), 12 (1, 2, 3, 4, 6, 12).</li>\n</ul>\n<p>Die Zahl <b>1</b> ist weder Primzahl noch zusammengesetzt: Sie hat nur einen Teiler.</p>\n<p>Die <b>2</b> ist die einzige gerade Primzahl: Alle anderen geraden Zahlen sind durch 2 teilbar, also zusammengesetzt.</p>\n<p>Die Primzahlen kleiner als 50 sind: <b>2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47</b>.</p>"
  },
  {
   "type": "example",
   "title": "Praktisches Beispiel: das Sieb des Eratosthenes",
   "html": "<p>Vor mehr als 2.200 Jahren erfand der griechische Mathematiker <b>Eratosthenes</b> eine Methode, Primzahlen zu finden, wie ein Sieb:</p>\n<ol>\n<li>Schreibe die Zahlen von 2 bis 100 auf.</li>\n<li>Die 2 ist prim: Kreise sie ein und streiche alle ihre Vielfachen (4, 6, 8 …).</li>\n<li>Die erste nicht gestrichene Zahl ist 3: Kreise sie ein und streiche ihre Vielfachen (6, 9, 12 …).</li>\n<li>Dann 5, dann 7 … Wiederhole, solange du kannst.</li>\n<li>Die übrig gebliebenen (eingekreisten) Zahlen sind alle Primzahlen bis 100: Es sind <b>25</b>.</li>\n</ol>\n<p>Um bis 100 zu kommen, genügt es, die Vielfachen von 2, 3, 5 und 7 zu streichen, denn 11 × 11 = 121 ist schon mehr als 100.</p>"
  },
  {
   "type": "widget",
   "title": "Prim oder zusammengesetzt?",
   "widget": "classify",
   "options": {
    "groups": [
     "Primzahl",
     "Zusammengesetzte Zahl"
    ],
    "items": [
     [
      "2",
      0
     ],
     [
      "9",
      1
     ],
     [
      "13",
      0
     ],
     [
      "21",
      1
     ],
     [
      "29",
      0
     ],
     [
      "33",
      1
     ],
     [
      "37",
      0
     ],
     [
      "49",
      1
     ],
     [
      "51",
      1
     ],
     [
      "53",
      0
     ],
     [
      "57",
      1
     ],
     [
      "61",
      0
     ]
    ]
   },
   "caption": "Vorsicht, Fallen: 51 = 3 × 17 und 57 = 3 × 19 (benutze die Teilbarkeitsregel für 3!)."
  },
  {
   "type": "text",
   "title": "Die Zerlegung in Primfaktoren",
   "html": "<p>Der <b>Fundamentalsatz der Arithmetik</b> besagt, dass sich jede zusammengesetzte Zahl auf eine einzige Weise als <b>Produkt von Primzahlen</b> schreiben lässt (abgesehen von der Reihenfolge).</p>\n<p>Um eine Zahl zu zerlegen, teilt man sie durch Primzahlen, von der kleinsten an, bis man bei 1 ankommt. Man benutzt eine Tabelle mit zwei Spalten:</p>\n<table>\n<tr><td>180</td><td>2</td></tr>\n<tr><td>90</td><td>2</td></tr>\n<tr><td>45</td><td>3</td></tr>\n<tr><td>15</td><td>3</td></tr>\n<tr><td>5</td><td>5</td></tr>\n<tr><td>1</td><td></td></tr>\n</table>\n<p>Also ist <b>180 = 2 × 2 × 3 × 3 × 5 = 2² × 3² × 5</b>.</p>\n<p>Man kann auch den <b>Faktorbaum</b> benutzen: Man teilt die Zahl in zwei beliebige Faktoren und macht weiter, bis alle „Blätter“ Primzahlen sind.</p>"
  },
  {
   "type": "svg",
   "title": "Der Faktorbaum von 180",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#ffffff\"/>\n<g stroke=\"#64748b\" stroke-width=\"3\">\n<line x1=\"300\" y1=\"45\" x2=\"200\" y2=\"105\"/><line x1=\"300\" y1=\"45\" x2=\"400\" y2=\"105\"/>\n<line x1=\"200\" y1=\"125\" x2=\"140\" y2=\"185\"/><line x1=\"200\" y1=\"125\" x2=\"260\" y2=\"185\"/>\n<line x1=\"400\" y1=\"125\" x2=\"350\" y2=\"185\"/><line x1=\"400\" y1=\"125\" x2=\"450\" y2=\"185\"/>\n<line x1=\"450\" y1=\"205\" x2=\"410\" y2=\"255\"/><line x1=\"450\" y1=\"205\" x2=\"490\" y2=\"255\"/>\n</g>\n<g font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\">\n<circle cx=\"300\" cy=\"35\" r=\"26\" fill=\"#e0e7ff\" stroke=\"#4338ca\" stroke-width=\"2\"/><text x=\"300\" y=\"42\" fill=\"#312e81\">180</text>\n<circle cx=\"200\" cy=\"115\" r=\"22\" fill=\"#e0e7ff\" stroke=\"#4338ca\" stroke-width=\"2\"/><text x=\"200\" y=\"122\" fill=\"#312e81\">10</text>\n<circle cx=\"400\" cy=\"115\" r=\"22\" fill=\"#e0e7ff\" stroke=\"#4338ca\" stroke-width=\"2\"/><text x=\"400\" y=\"122\" fill=\"#312e81\">18</text>\n<circle cx=\"140\" cy=\"195\" r=\"22\" fill=\"#fde047\" stroke=\"#a16207\" stroke-width=\"3\"/><text x=\"140\" y=\"202\" fill=\"#713f12\">2</text>\n<circle cx=\"260\" cy=\"195\" r=\"22\" fill=\"#fde047\" stroke=\"#a16207\" stroke-width=\"3\"/><text x=\"260\" y=\"202\" fill=\"#713f12\">5</text>\n<circle cx=\"350\" cy=\"195\" r=\"22\" fill=\"#fde047\" stroke=\"#a16207\" stroke-width=\"3\"/><text x=\"350\" y=\"202\" fill=\"#713f12\">2</text>\n<circle cx=\"450\" cy=\"195\" r=\"22\" fill=\"#e0e7ff\" stroke=\"#4338ca\" stroke-width=\"2\"/><text x=\"450\" y=\"202\" fill=\"#312e81\">9</text>\n<circle cx=\"410\" cy=\"265\" r=\"22\" fill=\"#fde047\" stroke=\"#a16207\" stroke-width=\"3\"/><text x=\"410\" y=\"272\" fill=\"#713f12\">3</text>\n<circle cx=\"490\" cy=\"265\" r=\"22\" fill=\"#fde047\" stroke=\"#a16207\" stroke-width=\"3\"/><text x=\"490\" y=\"272\" fill=\"#713f12\">3</text>\n</g>\n<text x=\"20\" y=\"275\" font-size=\"18\" fill=\"#111\">180 = 2² × 3² × 5</text>\n<text x=\"20\" y=\"250\" font-size=\"14\" fill=\"#a16207\">gelb: die Primfaktoren</text>\n</svg>",
   "caption": "Man kann auf verschiedene Weise anfangen (zum Beispiel 180 = 12 × 15), aber am Ende sind die Primfaktoren immer dieselben!"
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Primzahlen und Zerlegung",
   "questions": [
    {
     "type": "tf",
     "q": "Die Zahl 1 ist eine Primzahl.",
     "answer": false,
     "explain": "1 hat nur einen Teiler: Sie ist weder prim noch zusammengesetzt."
    },
    {
     "type": "mc",
     "q": "Welche dieser Zahlen ist prim?",
     "options": [
      "27",
      "39",
      "41",
      "45"
     ],
     "answer": 2,
     "explain": "41 hat nur die Teiler 1 und 41. 27 = 3³, 39 = 3 × 13, 45 = 3² × 5."
    },
    {
     "type": "mc",
     "q": "Wie lautet die Zerlegung von 72?",
     "options": [
      "2³ × 3²",
      "2² × 3³",
      "2 × 36",
      "8 × 9"
     ],
     "answer": 0,
     "explain": "72 = 8 × 9 = 2³ × 3². 8 und 9 sind nicht prim!"
    },
    {
     "type": "tf",
     "q": "462 ist durch 3 teilbar.",
     "answer": true,
     "explain": "4 + 6 + 2 = 12, und das ist durch 3 teilbar."
    }
   ]
  },
  {
   "type": "text",
   "title": "Der größte gemeinsame Teiler (ggT)",
   "html": "<p>Der <b>ggT</b> von zwei oder mehr Zahlen ist der <b>größte</b> ihrer <b>gemeinsamen Teiler</b>.</p>\n<p><b>Methode 1 – Teiler aufzählen</b>: ggT(12, 18)?<br>Teiler von 12: 1, 2, <b>3</b>, 4, <b>6</b>, 12 – Teiler von 18: 1, 2, 3, 6, 9, 18.<br>Gemeinsame: 1, 2, 3, 6 → <b>ggT = 6</b>.</p>\n<p><b>Methode 2 – Zerlegung</b> (schneller bei großen Zahlen):</p>\n<ol>\n<li>Zerlege die Zahlen in Primfaktoren.</li>\n<li>Nimm nur die <b>gemeinsamen</b> Faktoren, mit dem <b>kleinsten</b> Exponenten.</li>\n<li>Multipliziere sie.</li>\n</ol>\n<p>ggT(60, 84): 60 = 2² × 3 × 5; 84 = 2² × 3 × 7. Gemeinsam: 2² und 3 → ggT = 4 × 3 = <b>12</b>.</p>\n<p>Wenn der ggT 1 ist, heißen die Zahlen <b>teilerfremd</b> (z. B. 8 und 15).</p>"
  },
  {
   "type": "text",
   "title": "Das kleinste gemeinsame Vielfache (kgV)",
   "html": "<p>Das <b>kgV</b> von zwei oder mehr Zahlen ist das <b>kleinste</b> ihrer <b>gemeinsamen Vielfachen</b> (ungleich 0).</p>\n<p><b>Methode 1 – Vielfache aufzählen</b>: kgV(4, 6)?<br>Vielfache von 4: 4, 8, <b>12</b>, 16, 20, 24 … – Vielfache von 6: 6, <b>12</b>, 18, 24 …<br>→ <b>kgV = 12</b>.</p>\n<p><b>Methode 2 – Zerlegung</b>:</p>\n<ol>\n<li>Zerlege die Zahlen in Primfaktoren.</li>\n<li>Nimm die <b>gemeinsamen und nicht gemeinsamen</b> Faktoren, jeden einmal, mit dem <b>größten</b> Exponenten.</li>\n<li>Multipliziere sie.</li>\n</ol>\n<p>kgV(60, 84): 60 = 2² × 3 × 5; 84 = 2² × 3 × 7 → 2² × 3 × 5 × 7 = <b>420</b>.</p>\n<p>Kontrolltrick für zwei Zahlen: <b>ggT × kgV = Produkt der beiden Zahlen</b>. Tatsächlich 12 × 420 = 5.040 = 60 × 84 ✔️</p>"
  },
  {
   "type": "example",
   "title": "Praktisches Beispiel (ggT): die Bonbontüten",
   "html": "<p>Du hast <b>24 Erdbeerbonbons</b> und <b>36 Zitronenbonbons</b>. Du willst lauter gleiche Tüten packen, mit allen Bonbons, und zwar <b>so viele wie möglich</b>. Wie viele Tüten?</p>\n<p>Die Anzahl der Tüten muss sowohl 24 als auch 36 teilen und so groß wie möglich sein: Das ist der <b>ggT</b>.</p>\n<p>24 = 2³ × 3; 36 = 2² × 3² → ggT = 2² × 3 = <b>12 Tüten</b>.</p>\n<p>In jeder Tüte: 24 : 12 = <b>2 Erdbeer</b> und 36 : 12 = <b>3 Zitrone</b>.</p>\n<p>Signalwörter für den ggT: „der größte“, „in gleiche Teile aufteilen“, „ohne Rest“.</p>"
  },
  {
   "type": "example",
   "title": "Praktisches Beispiel (kgV): die Busse",
   "html": "<p>An der Haltestelle fährt der Bus <b>A</b> alle <b>12 Minuten</b> und der Bus <b>B</b> alle <b>18 Minuten</b>. Um 8:00 Uhr fahren sie gemeinsam ab. Wann fahren sie wieder gemeinsam ab?</p>\n<p>Wir suchen die erste Zeit, die ein Vielfaches von 12 und von 18 ist: das <b>kgV</b>.</p>\n<p>12 = 2² × 3; 18 = 2 × 3² → kgV = 2² × 3² = <b>36 Minuten</b>.</p>\n<p>Sie fahren wieder gemeinsam um <b>8:36 Uhr</b> ab.</p>\n<p>Signalwörter für das kgV: „wieder gemeinsam“, „gleichzeitig“, „der kleinste“, Ereignisse, die sich wiederholen.</p>"
  },
  {
   "type": "curiosity",
   "title": "Die mathematischen Zikaden",
   "html": "<p>In Nordamerika leben Zikaden, die <b>13 oder 17 Jahre</b> unter der Erde bleiben und dann alle gemeinsam herauskommen, zu Milliarden! 13 und 17 sind Primzahlen.</p>\n<p>Die Wissenschaftler glauben, dass das ein „Trick“ gegen Fressfeinde ist: Wenn ein Fressfeind einen Lebenszyklus von 2, 3, 4 oder 6 Jahren hat, begegnen ihm die Zikaden mit einem Primzahl-Zyklus seltener. Zum Beispiel ist das kgV von 17 und 6 gleich 102: ein Zusammentreffen alle 102 Jahre!</p>"
  },
  {
   "type": "curiosity",
   "title": "Primzahlen schützen deine Geheimnisse",
   "html": "<p>Euklid bewies vor mehr als 2.300 Jahren, dass es <b>unendlich viele</b> Primzahlen gibt.</p>\n<p>Heute dienen riesige Primzahlen (mit Hunderten von Ziffern) der <b>Kryptografie</b>: Sie schützen Chat-Nachrichten, Passwörter und Online-Zahlungen. Zwei riesige Primzahlen zu multiplizieren ist für einen Computer leicht, aber den Weg zurück zu gehen und herauszufinden, welche es waren, ist sehr schwierig!</p>\n<p>Die größte bekannte Primzahl hat mehr als <b>41 Millionen Ziffern</b>.</p>"
  },
  {
   "type": "alternatives",
   "title": "Andere Wege, Primzahlen, ggT und kgV zu verstehen",
   "intro": "Viele Wege führen zum selben Ergebnis. Überall auf der Welt benutzen Schüler verschiedene Methoden: Wähle die, die du am meisten als deine fühlst.",
   "tabs": [
    {
     "label": "🧊 Rechtecke aus Würfelchen (3D)",
     "html": "<p>Nimm 12 Würfelchen: Du kannst sie zu verschiedenen Rechtecken legen: 1 × 12, 2 × 6, 3 × 4. Die Seiten der Rechtecke sind genau die <b>Teiler</b> von 12.</p><p>Probiere es jetzt mit 7 Würfelchen: Das einzig mögliche Rechteck ist eine Reihe 1 × 7. Eine Zahl ist <b>prim</b>, wenn man <b>nur die Reihe</b> legen kann! Ändere die Zahlen mit den Schiebereglern und suche die „Nur-Reihe“-Zahlen.</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 3,
      "b": 4
     }
    },
    {
     "label": "🕸️ Das Sieb des Eratosthenes",
     "html": "<p>Eratosthenes (3. Jh. v. Chr.) erfand ein „Sieb“: Schreibe die Zahlen auf, streiche die 1, kreise dann die 2 ein und streiche alle ihre Vielfachen; kreise die erste nicht gestrichene Zahl (3) ein und streiche ihre Vielfachen; dann die 5, die 7 … Die, die übrig bleiben, sind die Primzahlen. Hier das Ergebnis bis 30: Die <b>grünen</b> sind prim.</p>",
     "svg": "<svg viewBox=\"0 0 600 200\" xmlns=\"http://www.w3.org/2000/svg\"><g font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\"><rect x=\"10\" y=\"10\" width=\"54\" height=\"54\" fill=\"#e5e7eb\"/><text x=\"37\" y=\"44\" fill=\"#9ca3af\">1</text><rect x=\"68\" y=\"10\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"95\" y=\"44\" fill=\"#14532d\">2</text><rect x=\"126\" y=\"10\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"153\" y=\"44\" fill=\"#14532d\">3</text><rect x=\"184\" y=\"10\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"211\" y=\"44\" fill=\"#991b1b\">4</text><rect x=\"242\" y=\"10\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"269\" y=\"44\" fill=\"#14532d\">5</text><rect x=\"300\" y=\"10\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"327\" y=\"44\" fill=\"#991b1b\">6</text><rect x=\"358\" y=\"10\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"385\" y=\"44\" fill=\"#14532d\">7</text><rect x=\"416\" y=\"10\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"443\" y=\"44\" fill=\"#991b1b\">8</text><rect x=\"474\" y=\"10\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"501\" y=\"44\" fill=\"#991b1b\">9</text><rect x=\"532\" y=\"10\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"559\" y=\"44\" fill=\"#991b1b\">10</text><rect x=\"10\" y=\"70\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"37\" y=\"104\" fill=\"#14532d\">11</text><rect x=\"68\" y=\"70\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"95\" y=\"104\" fill=\"#991b1b\">12</text><rect x=\"126\" y=\"70\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"153\" y=\"104\" fill=\"#14532d\">13</text><rect x=\"184\" y=\"70\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"211\" y=\"104\" fill=\"#991b1b\">14</text><rect x=\"242\" y=\"70\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"269\" y=\"104\" fill=\"#991b1b\">15</text><rect x=\"300\" y=\"70\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"327\" y=\"104\" fill=\"#991b1b\">16</text><rect x=\"358\" y=\"70\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"385\" y=\"104\" fill=\"#14532d\">17</text><rect x=\"416\" y=\"70\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"443\" y=\"104\" fill=\"#991b1b\">18</text><rect x=\"474\" y=\"70\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"501\" y=\"104\" fill=\"#14532d\">19</text><rect x=\"532\" y=\"70\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"559\" y=\"104\" fill=\"#991b1b\">20</text><rect x=\"10\" y=\"130\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"37\" y=\"164\" fill=\"#991b1b\">21</text><rect x=\"68\" y=\"130\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"95\" y=\"164\" fill=\"#991b1b\">22</text><rect x=\"126\" y=\"130\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"153\" y=\"164\" fill=\"#14532d\">23</text><rect x=\"184\" y=\"130\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"211\" y=\"164\" fill=\"#991b1b\">24</text><rect x=\"242\" y=\"130\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"269\" y=\"164\" fill=\"#991b1b\">25</text><rect x=\"300\" y=\"130\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"327\" y=\"164\" fill=\"#991b1b\">26</text><rect x=\"358\" y=\"130\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"385\" y=\"164\" fill=\"#991b1b\">27</text><rect x=\"416\" y=\"130\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"443\" y=\"164\" fill=\"#991b1b\">28</text><rect x=\"474\" y=\"130\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"501\" y=\"164\" fill=\"#14532d\">29</text><rect x=\"532\" y=\"130\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"559\" y=\"164\" fill=\"#991b1b\">30</text></g></svg>"
    },
    {
     "label": "🪜 Die Leitermethode",
     "html": "<p>In vielen Ländern (Frankreich, Rumänien, Russland, Spanien …) zerlegt man in einer Spalte: Man zieht einen senkrechten Strich, rechts schreibt man die <b>kleinste Primzahl</b>, die teilt, links das Ergebnis, und macht weiter, bis man bei 1 ankommt.</p><p>Liest man die rechte Spalte: 360 = 2 × 2 × 2 × 3 × 3 × 5 = <b>2³ × 3² × 5</b>. Es ist dasselbe wie der Faktorbaum, nur senkrecht gezeichnet: Viele finden es übersichtlicher.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"300\" y1=\"15\" x2=\"300\" y2=\"285\" stroke=\"#1e293b\" stroke-width=\"4\"/><g font-size=\"26\" font-weight=\"bold\"><text x=\"280\" y=\"45\" text-anchor=\"end\" fill=\"#1e3a8a\">360</text><text x=\"320\" y=\"45\" fill=\"#dc2626\">2</text><text x=\"280\" y=\"85\" text-anchor=\"end\" fill=\"#1e3a8a\">180</text><text x=\"320\" y=\"85\" fill=\"#dc2626\">2</text><text x=\"280\" y=\"125\" text-anchor=\"end\" fill=\"#1e3a8a\">90</text><text x=\"320\" y=\"125\" fill=\"#dc2626\">2</text><text x=\"280\" y=\"165\" text-anchor=\"end\" fill=\"#1e3a8a\">45</text><text x=\"320\" y=\"165\" fill=\"#16a34a\">3</text><text x=\"280\" y=\"205\" text-anchor=\"end\" fill=\"#1e3a8a\">15</text><text x=\"320\" y=\"205\" fill=\"#16a34a\">3</text><text x=\"280\" y=\"245\" text-anchor=\"end\" fill=\"#1e3a8a\">5</text><text x=\"320\" y=\"245\" fill=\"#9333ea\">5</text><text x=\"280\" y=\"285\" text-anchor=\"end\" fill=\"#1e3a8a\">1</text></g><text x=\"460\" y=\"150\" font-size=\"24\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\">360 = 2³ × 3² × 5</text></svg>"
    },
    {
     "label": "🎂 Die „Torte“: ggT und kgV zusammen",
     "html": "<p>Eine Methode, die in den Vereinigten Staaten und in Asien benutzt wird (sie heißt „ladder“ oder „cake method“). Schreibe die zwei Zahlen nebeneinander und teile <b>beide</b> durch eine Primzahl, die beide teilt, bis es keine mehr gibt:</p><table><tr><td>2</td><td>24</td><td>36</td></tr><tr><td>2</td><td>12</td><td>18</td></tr><tr><td>3</td><td>6</td><td>9</td></tr><tr><td></td><td><b>2</b></td><td><b>3</b></td></tr></table><ul><li><b>ggT</b> = Produkt der Zahlen links = 2 × 2 × 3 = <b>12</b></li><li><b>kgV</b> = Zahlen links × unten übrig gebliebene Zahlen = 2 × 2 × 3 × 2 × 3 = <b>72</b></li></ul><p>Kontrolle: ggT × kgV = 12 × 72 = 864 = 24 × 36. Das funktioniert bei zwei Zahlen immer!</p>"
    },
    {
     "label": "🔁 Der euklidische Algorithmus",
     "html": "<p>Euklid (um 300 v. Chr.) fand einen superschnellen Weg zum ggT, <b>ohne zu zerlegen</b>: Man teilt die größere Zahl durch die kleinere und behält den Rest; dann teilt man den Divisor durch den Rest … bis der Rest 0 ist.</p><p><b>ggT(84, 36)</b>:</p><ul><li>84 : 36 = 2 Rest <b>12</b></li><li>36 : 12 = 3 Rest <b>0</b> → ggT = <b>12</b></li></ul><p><b>Warum funktioniert das?</b> Jede Zahl, die 84 und 36 teilt, teilt auch 84 − 36 − 36 = 12. Die gemeinsamen Teiler ändern sich also nicht, während die Zahlen immer kleiner werden. Es ist einer der ältesten Algorithmen der Geschichte: Computer benutzen ihn noch heute!</p>"
    },
    {
     "label": "🚦 Eine Geschichte für das kgV",
     "html": "<p>Zwei Leuchttürme blinken um Mitternacht gleichzeitig: der erste alle 6 Sekunden, der zweite alle 8 Sekunden. Wann blinken sie wieder gleichzeitig?</p><ul><li>Leuchtturm A: 6, 12, 18, <b>24</b>, 30 …</li><li>Leuchtturm B: 8, 16, <b>24</b>, 32 …</li></ul><p>Nach <b>24 Sekunden</b> = kgV(6, 8). Das kgV beantwortet immer die Frage „<i>Wann treffen sie sich wieder?</i>“. Der ggT dagegen beantwortet „<i>In wie viele gleiche Gruppen kann ich alles ohne Rest aufteilen?</i>“.</p>"
    }
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: ggT und kgV",
   "questions": [
    {
     "type": "num",
     "q": "ggT(18, 24) = ?",
     "answer": 6,
     "tol": 0,
     "explain": "18 = 2 × 3², 24 = 2³ × 3 → gemeinsame Faktoren mit dem kleineren Exponenten: 2 × 3 = 6."
    },
    {
     "type": "num",
     "q": "kgV(6, 8) = ?",
     "answer": 24,
     "tol": 0,
     "explain": "6 = 2 × 3, 8 = 2³ → 2³ × 3 = 24."
    },
    {
     "type": "mc",
     "q": "Zwei Freunde gehen ins Schwimmbad, der eine alle 4 Tage, der andere alle 6. Heute waren sie zusammen dort. Was musst du berechnen, um zu wissen, wann sie sich wiedersehen?",
     "options": [
      "Den ggT",
      "Das kgV",
      "Die Summe",
      "Die Differenz"
     ],
     "answer": 1,
     "explain": "Ereignisse, die sich wiederholen und wieder zusammentreffen: Man braucht das kgV (12 Tage)."
    },
    {
     "type": "tf",
     "q": "8 und 15 sind teilerfremd.",
     "answer": true,
     "explain": "8 = 2³ und 15 = 3 × 5 haben keine gemeinsamen Faktoren: ggT = 1."
    }
   ]
  },
  {
   "type": "3d",
   "title": "Die Teiler von 24 in 3D",
   "scene": "blocks",
   "options": {
    "mode": "array",
    "a": 4,
    "b": 6
   },
   "caption": "24 Würfelchen können die Rechtecke 1 × 24, 2 × 12, 3 × 8 und 4 × 6 bilden: Die Teiler von 24 sind 1, 2, 3, 4, 6, 8, 12, 24. Probiere 23 einzustellen: Man kann nur die Reihe legen. 23 ist prim!"
  },
  {
   "type": "conceptMap",
   "title": "Landkarte: warum Primzahlen so wichtig sind",
   "nodes": [
    {
     "id": "naturali",
     "label": "Natürliche Zahlen",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "0, 1, 2, 3, 4 … die Zahlen zum Zählen.",
     "why": "Sie entstehen aus dem Bedürfnis, Dinge zu zählen: Schafe, Tage, Münzen. Sie sind der Ausgangspunkt der gesamten Arithmetik."
    },
    {
     "id": "divisibilita",
     "label": "Vielfache und Teiler",
     "x": 50,
     "y": 22,
     "color": "#3b82f6",
     "html": "a ist Teiler von b, wenn b : a keinen Rest ergibt; b ist dann ein Vielfaches von a.",
     "why": "Es kommt vom praktischen Problem, Dinge ohne Rest in gleiche Teile zu teilen: Deshalb ist die Division mit Rest die Grundlage von allem."
    },
    {
     "id": "criteri",
     "label": "Teilbarkeitsregeln",
     "x": 15,
     "y": 36,
     "color": "#0ea5e9",
     "html": "Abkürzungen: für 2 die letzte Ziffer gerade, für 3 die Quersumme durch 3 teilbar, für 5 die letzte Ziffer 0 oder 5 …",
     "why": "Sie funktionieren, weil wir die Zahlen zur Basis 10 schreiben: Zum Beispiel ergeben 10, 100, 1000 … durch 3 geteilt immer Rest 1, deshalb zählt nur die Quersumme."
    },
    {
     "id": "primi",
     "label": "Primzahlen",
     "x": 50,
     "y": 40,
     "color": "#16a34a",
     "html": "Zahlen größer als 1 mit nur zwei Teilern: 1 und sich selbst.",
     "why": "Euklid definierte sie in den Elementen (um 300 v. Chr.). Sie sind die „Atome“ der Zahlen: Man kann sie nicht in Produkte kleinerer Zahlen zerlegen."
    },
    {
     "id": "infiniti",
     "label": "Es gibt unendlich viele Primzahlen",
     "x": 85,
     "y": 36,
     "color": "#22c55e",
     "html": "Es gibt keine größte Primzahl.",
     "why": "Euklids Beweis: Angenommen, du hättest alle Primzahlen. Multipliziere sie und addiere 1. Die neue Zahl lässt, durch jede dieser Primzahlen geteilt, Rest 1: Also ist sie entweder selbst prim oder hat einen Primteiler, der in der Liste fehlte. Widerspruch! Die Primzahlen hören nie auf."
    },
    {
     "id": "tfa",
     "label": "Fundamentalsatz der Arithmetik",
     "x": 50,
     "y": 60,
     "color": "#f59e0b",
     "html": "Jede Zahl größer als 1 lässt sich auf genau eine Weise als Produkt von Primzahlen schreiben (abgesehen von der Reihenfolge).",
     "why": "Dass die Zerlegung existiert, ist leicht: Wenn eine Zahl nicht prim ist, zerlegst du sie und machst weiter. Die Eindeutigkeit beruht auf dem Lemma von Euklid (wenn eine Primzahl ein Produkt teilt, teilt sie einen der Faktoren). Carl Friedrich Gauß formulierte und bewies ihn 1801 vollständig."
    },
    {
     "id": "scomposizione",
     "label": "Zerlegung in Faktoren",
     "x": 50,
     "y": 74,
     "color": "#ea580c",
     "html": "Baum, Leiter oder Torte: z. B. 360 = 2³ × 3² × 5.",
     "why": "Dank des Fundamentalsatzes ist es egal, wo du beginnst: Du kommst immer bei denselben Faktoren an."
    },
    {
     "id": "mcd",
     "label": "ggT",
     "x": 22,
     "y": 88,
     "color": "#9333ea",
     "html": "Gemeinsame Faktoren, nur einmal genommen, mit dem kleinsten Exponenten.",
     "why": "Ein gemeinsamer Teiler kann nur Faktoren enthalten, die in beiden Zahlen vorkommen, und nicht öfter, als sie in der Zahl mit den wenigsten vorkommen."
    },
    {
     "id": "mcm",
     "label": "kgV",
     "x": 78,
     "y": 88,
     "color": "#db2777",
     "html": "Gemeinsame und nicht gemeinsame Faktoren, nur einmal genommen, mit dem größten Exponenten.",
     "why": "Ein gemeinsames Vielfaches muss beide Zahlen „enthalten“: also alle ihre Faktoren, jeden so oft, wie ihn die Zahl braucht, die ihn am häufigsten hat."
    },
    {
     "id": "euclide",
     "label": "Euklidischer Algorithmus",
     "x": 15,
     "y": 70,
     "color": "#7c3aed",
     "html": "ggT durch fortgesetzte Divisionen, ohne zu zerlegen.",
     "why": "Die gemeinsamen Teiler von a und b sind dieselben wie die von b und dem Rest von a : b. Die Zahlen werden kleiner, bis der Rest 0 ist."
    },
    {
     "id": "usi",
     "label": "Wozu sie dienen",
     "x": 85,
     "y": 70,
     "color": "#0f766e",
     "html": "Brüche kürzen, Brüche addieren, Schichten und Kalender organisieren, Kryptografie (RSA).",
     "why": "Zwei riesige Primzahlen zu multiplizieren ist leicht, aber sie aus dem Produkt zurückzugewinnen ist sehr schwer: Auf diesem Unterschied beruhen die digitalen Schlösser, die das Internet schützen."
    }
   ],
   "edges": [
    [
     "naturali",
     "divisibilita",
     "ohne Rest teilen"
    ],
    [
     "divisibilita",
     "criteri",
     "Abkürzungen"
    ],
    [
     "divisibilita",
     "primi",
     "nur 2 Teiler"
    ],
    [
     "primi",
     "infiniti",
     "Euklid beweist"
    ],
    [
     "primi",
     "tfa",
     "Bausteine aller Zahlen"
    ],
    [
     "tfa",
     "scomposizione",
     "garantiert"
    ],
    [
     "scomposizione",
     "mcd",
     "kleinerer Exponent"
    ],
    [
     "scomposizione",
     "mcm",
     "größerer Exponent"
    ],
    [
     "divisibilita",
     "euclide",
     "Reste"
    ],
    [
     "euclide",
     "mcd",
     "berechnet"
    ],
    [
     "tfa",
     "usi",
     "Anwendungen"
    ]
   ]
  }
 ],
 "glossary": [
  {
   "t": "Vielfaches",
   "d": "Zahl, die man erhält, wenn man eine Zahl mit einer natürlichen Zahl multipliziert."
  },
  {
   "t": "Teiler",
   "d": "Zahl, die eine andere ohne Rest teilt."
  },
  {
   "t": "Primzahl",
   "d": "Zahl größer als 1, die nur durch 1 und durch sich selbst teilbar ist."
  },
  {
   "t": "Zusammengesetzte Zahl",
   "d": "Zahl, die mehr als zwei Teiler hat."
  },
  {
   "t": "Primfaktor",
   "d": "Primzahl, die in der Zerlegung einer Zahl vorkommt."
  },
  {
   "t": "Zerlegung",
   "d": "Schreibweise einer Zahl als Produkt von Primfaktoren."
  },
  {
   "t": "ggT",
   "d": "Größter gemeinsamer Teiler: der größte Teiler, der mehreren Zahlen gemeinsam ist."
  },
  {
   "t": "kgV",
   "d": "Kleinstes gemeinsames Vielfaches: das kleinste (von null verschiedene) gemeinsame Vielfache mehrerer Zahlen."
  },
  {
   "t": "Teilerfremd",
   "d": "Zahlen, deren ggT gleich 1 ist."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Welche Menge enthält nur Primzahlen?",
    "options": [
     "2, 3, 9, 11",
     "3, 5, 7, 13",
     "1, 2, 3, 5",
     "5, 7, 15, 17"
    ],
    "answer": 1,
    "explain": "9 und 15 sind zusammengesetzt, 1 ist nicht prim."
   },
   {
    "type": "tf",
    "q": "Die 2 ist die einzige gerade Primzahl.",
    "answer": true,
    "explain": "Jede andere gerade Zahl ist durch 2 teilbar, also zusammengesetzt."
   },
   {
    "type": "mc",
    "q": "Die Zahl 5.430 ist teilbar durch …",
    "options": [
     "2, 3, 5 und 10",
     "nur 2 und 5",
     "nur 10",
     "2, 5, 9"
    ],
    "answer": 0,
    "explain": "Sie endet auf 0 (2, 5, 10), und 5+4+3+0 = 12 ist durch 3 teilbar, nicht durch 9."
   },
   {
    "type": "mc",
    "q": "Die Zerlegung von 120 ist …",
    "options": [
     "2³ × 3 × 5",
     "2² × 3 × 10",
     "2 × 3 × 4 × 5",
     "2⁴ × 3 × 5"
    ],
    "answer": 0,
    "explain": "120 = 8 × 15 = 2³ × 3 × 5."
   },
   {
    "type": "num",
    "q": "ggT(36, 48) = ?",
    "answer": 12,
    "tol": 0,
    "explain": "36 = 2² × 3², 48 = 2⁴ × 3 → 2² × 3 = 12."
   },
   {
    "type": "num",
    "q": "kgV(10, 15) = ?",
    "answer": 30,
    "tol": 0,
    "explain": "10 = 2 × 5, 15 = 3 × 5 → 2 × 3 × 5 = 30."
   },
   {
    "type": "num",
    "q": "Du hast 30 Rosen und 45 Tulpen: Du willst so viele gleiche Sträuße wie möglich binden und dabei alle Blumen verwenden. Wie viele Sträuße?",
    "answer": 15,
    "tol": 0,
    "explain": "ggT(30, 45) = 15: Jeder Strauß hat 2 Rosen und 3 Tulpen."
   },
   {
    "type": "num",
    "q": "Ein Leuchtturm blinkt alle 8 Sekunden, ein anderer alle 12. Sie blinken jetzt gleichzeitig: Nach wie vielen Sekunden tun sie es wieder?",
    "answer": 24,
    "tol": 0,
    "unit": "s",
    "explain": "kgV(8, 12) = 24 Sekunden."
   },
   {
    "type": "text",
    "q": "Wie heißt die Methode, die ein griechischer Mathematiker erfand, um Primzahlen durch „Aussieben“ der Zahlen zu finden?",
    "answer": [
     "sieb des eratosthenes",
     "das sieb des eratosthenes",
     "sieb",
     "eratosthenes",
     "eratosthenes sieb"
    ],
    "explain": "Es ist das Sieb des Eratosthenes."
   },
   {
    "type": "tf",
    "q": "Der ggT zweier Zahlen ist immer größer als ihr kgV.",
    "answer": false,
    "explain": "Der ggT ist höchstens so groß wie die kleinere Zahl; das kgV ist mindestens so groß wie die größere."
   },
   {
    "type": "order",
    "q": "Bringe die Schritte zur Berechnung des kgV mit der Zerlegung in die richtige Reihenfolge",
    "items": [
     "Zerlege die Zahlen in Primfaktoren",
     "Nimm die gemeinsamen und nicht gemeinsamen Faktoren",
     "Wähle für jeden den größten Exponenten",
     "Multipliziere die gewählten Faktoren"
    ],
    "explain": "Gemeinsame und nicht gemeinsame, größter Exponent, dann multipliziert man."
   }
  ],
  "gen": [
   [
    "isPrime",
    1
   ],
   [
    "gcd",
    1
   ],
   [
    "lcm",
    1
   ]
  ]
 }
});
