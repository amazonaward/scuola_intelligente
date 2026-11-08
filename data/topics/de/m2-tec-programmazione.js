TOPIC('de', {
 "id": "m2-tec-programmazione",
 "title": "Programmieren: Variablen und Schleifen",
 "intro": "Jede App, jedes Videospiel und jeder Roboter funktioniert dank zweier ganz einfacher Ideen: den <b>Variablen</b>, die dazu dienen, Daten zu <b>merken</b>, und den <b>Schleifen</b>, die dazu dienen, Anweisungen zu <b>wiederholen</b>, ohne sie neu zu schreiben. Wir entdecken sie zuerst mit Blöcken (wie in Scratch) und dann mit echtem Code in <b>Python</b>.",
 "minutes": 40,
 "sections": [
  {
   "type": "text",
   "title": "Was eine Variable ist",
   "html": "<p>Eine <b>Variable</b> ist wie eine <b>Schachtel mit einem Etikett</b>: Das Etikett ist der <b>Name</b>, drinnen liegt ein <b>Wert</b>, der sich während des Programms ändern kann.</p>\n<ul>\n<li><b>Erstellen und zuweisen</b>: <code>punti = 0</code> bedeutet „lege 0 in die Schachtel namens punti“. Das Zeichen <code>=</code> heißt in der Programmierung nicht „ist gleich“, sondern <b>„weise zu“</b>, „lege hinein“.</li>\n<li><b>Lesen</b>: <code>print(punti)</code> zeigt den Inhalt der Schachtel auf dem Bildschirm.</li>\n<li><b>Ändern</b>: <code>punti = punti + 10</code> bedeutet „nimm den Wert von punti, addiere 10 und lege das Ergebnis wieder in dieselbe Schachtel“.</li>\n</ul>\n<p>Werte haben einen <b>Typ</b>:</p>\n<table>\n<tr><th>Typ</th><th>Beispiel</th><th>Wofür</th></tr>\n<tr><td><b>Ganzzahl</b> (int)</td><td><code>vite = 3</code></td><td>zählen</td></tr>\n<tr><td><b>Dezimalzahl</b> (float)</td><td><code>prezzo = 2.50</code></td><td>Messwerte, Geld (in Python benutzt man den Punkt, nicht das Komma!)</td></tr>\n<tr><td><b>Zeichenkette</b> (str)</td><td><code>nome = \"Sara\"</code></td><td>Texte, immer in Anführungszeichen</td></tr>\n<tr><td><b>Boolescher Wert</b> (bool)</td><td><code>vinto = False</code></td><td>wahr/falsch (True/False)</td></tr>\n</table>\n<p>Regeln für Namen: keine Leerzeichen (benutze <code>punteggio_max</code>), nicht mit einer Zahl beginnen, wähle Namen, die den Inhalt verraten.</p>"
  },
  {
   "type": "svg",
   "title": "Variablen als Schachteln",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f0fdf4\"/>\n<g>\n<polygon points=\"40,120 170,120 190,100 60,100\" fill=\"#fcd34d\" stroke=\"#92400e\" stroke-width=\"3\"/>\n<rect x=\"40\" y=\"120\" width=\"130\" height=\"100\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"3\"/>\n<rect x=\"55\" y=\"190\" width=\"100\" height=\"24\" rx=\"5\" fill=\"#ffffff\" stroke=\"#92400e\" stroke-width=\"2\"/>\n<text x=\"105\" y=\"208\" font-size=\"16\" font-weight=\"bold\" fill=\"#92400e\" text-anchor=\"middle\">punti</text>\n<text x=\"105\" y=\"170\" font-size=\"40\" font-weight=\"bold\" fill=\"#1f2937\" text-anchor=\"middle\">10</text>\n</g>\n<g>\n<polygon points=\"230,120 360,120 380,100 250,100\" fill=\"#a5b4fc\" stroke=\"#3730a3\" stroke-width=\"3\"/>\n<rect x=\"230\" y=\"120\" width=\"130\" height=\"100\" fill=\"#818cf8\" stroke=\"#3730a3\" stroke-width=\"3\"/>\n<rect x=\"245\" y=\"190\" width=\"100\" height=\"24\" rx=\"5\" fill=\"#ffffff\" stroke=\"#3730a3\" stroke-width=\"2\"/>\n<text x=\"295\" y=\"208\" font-size=\"16\" font-weight=\"bold\" fill=\"#3730a3\" text-anchor=\"middle\">nome</text>\n<text x=\"295\" y=\"168\" font-size=\"26\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">\"Sara\"</text>\n</g>\n<g>\n<polygon points=\"420,120 550,120 570,100 440,100\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"3\"/>\n<rect x=\"420\" y=\"120\" width=\"130\" height=\"100\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"3\"/>\n<rect x=\"435\" y=\"190\" width=\"100\" height=\"24\" rx=\"5\" fill=\"#ffffff\" stroke=\"#166534\" stroke-width=\"2\"/>\n<text x=\"485\" y=\"208\" font-size=\"16\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">vinto</text>\n<text x=\"485\" y=\"168\" font-size=\"26\" font-weight=\"bold\" fill=\"#14532d\" text-anchor=\"middle\">False</text>\n</g>\n<text x=\"105\" y=\"250\" font-size=\"16\" fill=\"#1f2937\" text-anchor=\"middle\">Ganzzahl</text>\n<text x=\"295\" y=\"250\" font-size=\"16\" fill=\"#1f2937\" text-anchor=\"middle\">Zeichenkette</text>\n<text x=\"485\" y=\"250\" font-size=\"16\" fill=\"#1f2937\" text-anchor=\"middle\">Boolesch</text>\n<text x=\"300\" y=\"50\" font-size=\"20\" font-weight=\"bold\" fill=\"#14532d\" text-anchor=\"middle\">Etikett = Name · Inhalt = Wert</text>\n<text x=\"300\" y=\"285\" font-size=\"16\" fill=\"#334155\" text-anchor=\"middle\">punti = punti + 10 → die Schachtel „punti“ enthält jetzt 20</text>\n</svg>",
   "caption": "Jede Variable hat einen Namen (das Etikett) und einen Wert (den Inhalt). Der Inhalt kann sich ändern, der Name nicht."
  },
  {
   "type": "text",
   "title": "Was eine Schleife ist",
   "html": "<p>Eine <b>Schleife</b> (englisch <i>loop</i>) ist ein Block von Anweisungen, den der Computer <b>wiederholt</b>. Es gibt zwei Haupttypen:</p>\n<p><b>1. Zählschleife</b> – wiederholt eine <b>feste Anzahl</b> von Malen. In Scratch ist das der Block „wiederhole 10 mal“; in Python ist es <code>for</code>:</p>\n<pre><code>for i in range(5):\n    print(\"Ciao!\")</code></pre>\n<p>Es gibt „Ciao!“ <b>5 Mal</b> aus. Die Variable <code>i</code> hat die Werte 0, 1, 2, 3, 4 (in Python beginnt man bei 0 zu zählen!).</p>\n<p><b>2. Bedingungsschleife</b> – wiederholt, <b>solange</b> eine Bedingung wahr ist. In Scratch ist das „wiederhole bis …“; in Python ist es <code>while</code>:</p>\n<pre><code>vite = 3\nwhile vite &gt; 0:\n    print(\"Giochi ancora!\")\n    vite = vite - 1</code></pre>\n<p>Sie wiederholt, solange <code>vite</code> größer als 0 ist: 3 Mal. Wenn wir vergessen, <code>vite</code> zu verringern, <b>endet</b> die Schleife <b>nie</b>: Das ist eine <b>Endlosschleife</b>, einer der häufigsten Fehler!</p>\n<p>⚠️ In Python ist die <b>Einrückung</b> (die 4 Leerzeichen am Zeilenanfang) Pflicht: Sie zeigt an, welche Anweisungen <b>in</b> der Schleife stehen.</p>"
  },
  {
   "type": "widget",
   "title": "Vom Block zum Code",
   "widget": "match",
   "options": {
    "pairs": [
     [
      "🟧 setze punti auf 0",
      "punti = 0"
     ],
     [
      "🟧 ändere punti um 1",
      "punti = punti + 1"
     ],
     [
      "🟨 wiederhole 10 mal",
      "for i in range(10):"
     ],
     [
      "🟨 wiederhole bis vite = 0",
      "while vite > 0:"
     ],
     [
      "🟪 sage „Ciao!“",
      "print(\"Ciao!\")"
     ],
     [
      "🟦 frage nach dem Namen und warte",
      "nome = input(\"Come ti chiami?\")"
     ]
    ]
   },
   "caption": "Ordne jeden Block im Scratch-Stil der Python-Zeile zu, die dasselbe tut."
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Variablen",
   "questions": [
    {
     "type": "num",
     "q": "x = 5, dann x = x + 3. Wie viel ist x?",
     "answer": 8,
     "explain": "Man nimmt den alten Wert (5), addiert 3 und legt ihn wieder in x: 8."
    },
    {
     "type": "mc",
     "q": "Von welchem Typ ist der Wert \"42\" (in Anführungszeichen)?",
     "options": [
      "Ganzzahl",
      "Zeichenkette",
      "Boolescher Wert"
     ],
     "answer": 1,
     "explain": "Alles, was in Anführungszeichen steht, ist eine Zeichenkette, auch wenn es Ziffern enthält."
    },
    {
     "type": "tf",
     "q": "In der Programmierung bedeutet „=“ „weise einen Wert zu“.",
     "answer": true,
     "explain": "Um zwei Werte zu vergleichen, benutzt man dagegen „==“."
    }
   ]
  },
  {
   "type": "example",
   "title": "Praxisbeispiel: der Zähler und der Akkumulator",
   "html": "<p>Wir wollen die Zahlen von 1 bis 100 addieren. Der junge <b>Carl Friedrich Gauß</b> soll das, so eine berühmte Anekdote, mit 9 Jahren in wenigen Sekunden im Kopf gemacht haben. Der Computer macht es mit einer Schleife:</p>\n<pre><code>somma = 0\nfor n in range(1, 101):\n    somma = somma + n\nprint(somma)</code></pre>\n<ul>\n<li><code>n</code> ist der <b>Zähler</b>: Er hat die Werte 1, 2, 3 … bis 100 (<code>range(1, 101)</code> hört <b>vor</b> 101 auf).</li>\n<li><code>somma</code> ist der <b>Akkumulator</b>: Er startet bei 0 und „sammelt“ in jedem Durchgang die neue Zahl.</li>\n</ul>\n<p>Ergebnis: <b>5050</b>. Gauß' Trick? 1+100 = 101, 2+99 = 101 … es gibt 50 Paare: 50 × 101 = 5050.</p>"
  },
  {
   "type": "example",
   "title": "Praxisbeispiel: Errate die Zahl",
   "html": "<pre><code>segreto = 7\ntentativo = 0\nwhile tentativo != segreto:\n    tentativo = int(input(\"Indovina (1-10): \"))\n    if tentativo &lt; segreto:\n        print(\"Più alto!\")\n    elif tentativo &gt; segreto:\n        print(\"Più basso!\")\nprint(\"Bravo, hai indovinato!\")</code></pre>\n<p>Hier ist die Schleife eine <code>while</code>-Schleife: Wir wissen nicht, <b>wie oft</b> der Spieler es versuchen wird, also wiederholen wir, <b>solange</b> der Versuch verschieden (<code>!=</code>) von der Geheimzahl ist. <code>input</code> liest, was der Benutzer schreibt; <code>int(...)</code> verwandelt es von einer Zeichenkette in eine ganze Zahl.</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du schon …? Die erste Programmiererin",
   "html": "<p>Das erste Programm der Geschichte wurde von einer Frau geschrieben: <b>Ada Lovelace</b>, einer englischen Mathematikerin. Im Jahr <b>1843</b> beschrieb sie in den Anmerkungen zu einem Artikel über die „Analytical Engine“ von Charles Babbage ein Verfahren zur Berechnung der <b>Bernoulli-Zahlen</b> mit sich wiederholenden Anweisungen: eine echte <b>Schleife</b>!</p>\n<p>Die Maschine wurde nie gebaut, aber Ada hatte schon verstanden, dass Computer nicht nur mit Zahlen, sondern auch mit Musik und Symbolen arbeiten könnten. Ihr zu Ehren heißt eine Programmiersprache <b>Ada</b>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du schon …? Der erste „Bug“ war ein echtes Insekt",
   "html": "<p>Im Jahr <b>1947</b> fanden die Techniker des Computers Mark II an der Harvard-Universität einen Fehler, der von einer <b>Motte</b> verursacht wurde, die in einem Relais steckengeblieben war. Sie klebten sie mit Klebeband ins Arbeitsbuch und schrieben „first actual case of bug being found“. Zum Team gehörte <b>Grace Hopper</b>, eine Pionierin der Programmiersprachen. Seitdem heißen Fehler in Programmen <b>Bugs</b> (Insekten) und sie zu beheben nennt man <b>Debugging</b>.</p>\n<p>Und der Name <b>Python</b>? Er kommt nicht von der Schlange: Sein Erfinder, der Niederländer <b>Guido van Rossum</b>, der ihn <b>1991</b> veröffentlichte, war Fan der englischen Komikergruppe <i>Monty Python</i>.</p>"
  },
  {
   "type": "remember",
   "title": "Merke dir",
   "html": "<ul>\n<li><b>Variable</b> = Name + Wert, der sich ändern kann. <code>=</code> weist zu, <code>==</code> vergleicht.</li>\n<li>Typen: <b>int</b>, <b>float</b>, <b>str</b> (in Anführungszeichen), <b>bool</b> (True/False).</li>\n<li><b>for</b>: Zählschleife, Anzahl der Wiederholungen bekannt. <code>range(5)</code> → 0, 1, 2, 3, 4.</li>\n<li><b>while</b>: Bedingungsschleife, wiederholt, solange die Bedingung wahr ist. Vorsicht vor Endlosschleifen!</li>\n<li>Der <b>Zähler</b> zählt die Durchgänge; der <b>Akkumulator</b> addiert die Werte.</li>\n<li>In Python zeigt die Einrückung (4 Leerzeichen), was in der Schleife steht.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Andere Wege, Variablen und Schleifen zu verstehen",
   "intro": "Der Code kommt dir wie Chinesisch vor? Probiere es mit einem Vergleich aus dem Alltag, mit farbigen Blöcken oder mit Lernkarten.",
   "tabs": [
    {
     "label": "🏃 Das Training",
     "html": "<p>Der Trainer sagt: „<b>Lauft 5 Runden um das Feld</b>.“ Das ist eine <b>for</b>-Schleife: Die Anzahl der Wiederholungen steht vorher fest. Um dich nicht zu verzählen, zählst du die Runden an den Fingern ab: Die Finger sind der <b>Zähler</b>.</p>\n<p>Dann sagt er: „<b>Lauft, bis ich pfeife</b>.“ Das ist eine <b>while</b>-Schleife: Du weißt nicht, wie viele Runden du läufst, du läufst weiter, solange die Bedingung („er hat nicht gepfiffen“) wahr ist.</p>\n<p>Die <b>Anzeigetafel</b> mit dem Spielstand ist eine <b>Variable</b>: Sie hat einen Namen (Heim, Gäste) und einen Wert, der sich bei jedem Tor ändert.</p>"
    },
    {
     "label": "🧱 Scratch und Python im Vergleich",
     "html": "<p>Dasselbe Programm, „zeichne ein Quadrat“, in zwei Sprachen:</p>\n<table>\n<tr><th>Scratch (Blöcke)</th><th>Python (Text, mit dem Modul turtle)</th></tr>\n<tr><td>Wenn die grüne Flagge angeklickt wird<br>wiederhole 4 mal<br>&nbsp;&nbsp;gehe 100 Schritte<br>&nbsp;&nbsp;drehe dich um 90 Grad</td><td><code>import turtle</code><br><code>t = turtle.Turtle()</code><br><code>for i in range(4):</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;t.forward(100)</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;t.right(90)</code></td></tr>\n</table>\n<p>Der Block „wiederhole“ von Scratch „umarmt“ die zu wiederholenden Anweisungen; in Python übernimmt dieselbe Aufgabe die <b>Einrückung</b>. Scratch wurde am <b>MIT</b> in Boston entwickelt und 2007 veröffentlicht; turtle ist von der Sprache <b>Logo</b> (1967) mit ihrer berühmten Schildkröte inspiriert.</p>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"240\" fill=\"#f8fafc\"/>\n<rect x=\"30\" y=\"30\" width=\"230\" height=\"40\" rx=\"10\" fill=\"#facc15\" stroke=\"#a16207\" stroke-width=\"2\"/>\n<text x=\"145\" y=\"57\" font-size=\"17\" font-weight=\"bold\" fill=\"#422006\" text-anchor=\"middle\">wiederhole 4 mal</text>\n<rect x=\"30\" y=\"70\" width=\"24\" height=\"110\" fill=\"#facc15\" stroke=\"#a16207\" stroke-width=\"2\"/>\n<rect x=\"54\" y=\"80\" width=\"200\" height=\"38\" rx=\"8\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"2\"/>\n<text x=\"154\" y=\"105\" font-size=\"16\" fill=\"#ffffff\" text-anchor=\"middle\">gehe 100 Schritte</text>\n<rect x=\"54\" y=\"128\" width=\"200\" height=\"38\" rx=\"8\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"2\"/>\n<text x=\"154\" y=\"153\" font-size=\"16\" fill=\"#ffffff\" text-anchor=\"middle\">drehe dich um 90°</text>\n<rect x=\"30\" y=\"180\" width=\"230\" height=\"22\" rx=\"8\" fill=\"#facc15\" stroke=\"#a16207\" stroke-width=\"2\"/>\n<text x=\"300\" y=\"120\" font-size=\"30\" fill=\"#334155\" text-anchor=\"middle\">=</text>\n<rect x=\"330\" y=\"40\" width=\"250\" height=\"160\" rx=\"10\" fill=\"#1e293b\"/>\n<text x=\"345\" y=\"80\" font-size=\"16\" fill=\"#f472b6\" font-family=\"monospace\">for i in range(4):</text>\n<text x=\"375\" y=\"115\" font-size=\"16\" fill=\"#a5f3fc\" font-family=\"monospace\">t.forward(100)</text>\n<text x=\"375\" y=\"150\" font-size=\"16\" fill=\"#a5f3fc\" font-family=\"monospace\">t.right(90)</text>\n<text x=\"455\" y=\"185\" font-size=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Einrückung = in der Schleife</text>\n</svg>"
    },
    {
     "label": "📝 Von Hand verfolgen",
     "html": "<p>Eine Methode, die in Informatik-Schulen auf der ganzen Welt benutzt wird: die <b>Ablauftabelle</b>. Man „tut so, als wäre man der Computer“ und schreibt Zeile für Zeile den Wert jeder Variablen auf.</p>\n<pre><code>x = 1\nfor i in range(4):\n    x = x * 2</code></pre>\n<table>\n<tr><th>Durchgang</th><th>i</th><th>x vorher</th><th>x nachher</th></tr>\n<tr><td>1</td><td>0</td><td>1</td><td>2</td></tr>\n<tr><td>2</td><td>1</td><td>2</td><td>4</td></tr>\n<tr><td>3</td><td>2</td><td>4</td><td>8</td></tr>\n<tr><td>4</td><td>3</td><td>8</td><td>16</td></tr>\n</table>\n<p>Am Ende hat <code>x</code> den Wert <b>16</b>. Mit der Tabelle verläufst du dich nie, auch nicht bei den längsten Schleifen!</p>"
    },
    {
     "label": "🃏 Lernkarten der Schlüsselwörter",
     "html": "<p>Dreh die Karten um, um die Schlüsselwörter der Programmierung zu wiederholen.</p>",
     "widget": "flashcards",
     "options": {
      "cards": [
       {
        "front": "Variable",
        "back": "Schachtel mit einem Namen, die einen veränderbaren Wert enthält"
       },
       {
        "front": "=",
        "back": "Zuweisung: Lege einen Wert in die Variable"
       },
       {
        "front": "==",
        "back": "Vergleich: Sind die beiden Werte gleich?"
       },
       {
        "front": "for",
        "back": "Zählschleife: Anzahl der Wiederholungen bekannt"
       },
       {
        "front": "while",
        "back": "Bedingungsschleife: wiederholt, solange es wahr ist"
       },
       {
        "front": "Bug",
        "back": "Fehler im Programm"
       },
       {
        "front": "Akkumulator",
        "back": "Variable, die in jedem Durchgang die Werte addiert"
       }
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Karte der Programmierung",
   "nodes": [
    {
     "id": "algoritmo",
     "label": "Algorithmus",
     "x": 50,
     "y": 7,
     "color": "#7c3aed",
     "html": "Endliche Folge genauer Anweisungen zur Lösung eines Problems.",
     "why": "Der Name stammt vom persischen Mathematiker <b>al-Chwarizmi</b> (9. Jahrhundert), dessen latinisierter Name zu „algorismus“ wurde. Ein Programm ist ein Algorithmus, der in einer Sprache geschrieben ist, die der Computer versteht."
    },
    {
     "id": "programma",
     "label": "Programm",
     "x": 50,
     "y": 27,
     "color": "#2563eb",
     "html": "In einer Programmiersprache geschriebener Algorithmus (Scratch, Python …).",
     "why": "Der Computer versteht nur 0 und 1: Programmiersprachen sind eine Brücke zwischen uns und der Maschine. Ein anderes Programm (Interpreter oder Compiler) übersetzt sie."
    },
    {
     "id": "variabile",
     "label": "Variable",
     "x": 20,
     "y": 47,
     "color": "#f59e0b",
     "html": "Name + veränderbarer Wert, im Speicher abgelegt.",
     "why": "Physisch ist sie ein Bereich des Arbeitsspeichers (RAM) mit einer Adresse; der Name dient uns dazu, uns keine numerischen Adressen merken zu müssen. Die Idee, Buchstaben statt Zahlen zu benutzen, stammt aus der Algebra (François Viète, 1591)."
    },
    {
     "id": "tipi",
     "label": "Datentypen",
     "x": 8,
     "y": 72,
     "color": "#f97316",
     "html": "int, float, str, bool.",
     "why": "Der Computer muss wissen, wie er die Bits deuten soll: Dieselbe Folge von 0 und 1 kann eine Zahl oder ein Buchstabe sein. Der Typ bool trägt den Namen von George Boole (1815–1864), der die Algebra von wahr/falsch erfand."
    },
    {
     "id": "assegna",
     "label": "Zuweisung =",
     "x": 32,
     "y": 72,
     "color": "#eab308",
     "html": "Legt einen Wert in eine Variable: x = x + 1.",
     "why": "In der Mathematik ist x = x + 1 unmöglich; in der Informatik bedeutet es „rechne rechts, speichere dann links“. Manche Sprachen (wie Pascal) benutzen := gerade, um Verwechslungen zu vermeiden."
    },
    {
     "id": "ciclo",
     "label": "Schleife",
     "x": 80,
     "y": 47,
     "color": "#16a34a",
     "html": "Wiederholte Anweisungen: for oder while.",
     "why": "Sie vermeidet, tausendmal dasselbe neu zu schreiben. Ada Lovelace beschrieb 1843 schon ein wiederholtes Verfahren für Babbages Maschine."
    },
    {
     "id": "for",
     "label": "for (Zähler)",
     "x": 66,
     "y": 72,
     "color": "#22c55e",
     "html": "Anzahl der Wiederholungen bekannt: for i in range(10).",
     "why": "Man benutzt sie, wenn man im Voraus weiß, wie oft man wiederholen muss. Der Zähler i zählt die Durchgänge."
    },
    {
     "id": "while",
     "label": "while (Bedingung)",
     "x": 92,
     "y": 72,
     "color": "#14b8a6",
     "html": "Wiederholt, solange die Bedingung wahr ist.",
     "why": "Man benutzt sie, wenn man nicht weiß, wie oft es nötig sein wird (z. B. bis der Benutzer errät). Die Bedingung muss früher oder später falsch werden, sonst ist die Schleife endlos."
    },
    {
     "id": "debug",
     "label": "Debugging",
     "x": 50,
     "y": 93,
     "color": "#ef4444",
     "html": "Fehler (Bugs) finden und beheben.",
     "why": "Vom berühmten Fall der Motte im Computer Mark II (1947). Programmieren heißt auch, Fehler zu machen und zu beheben: Das ist normal!"
    }
   ],
   "edges": [
    [
     "algoritmo",
     "programma",
     "geschrieben in einer Sprache"
    ],
    [
     "programma",
     "variabile",
     "benutzt"
    ],
    [
     "programma",
     "ciclo",
     "benutzt"
    ],
    [
     "variabile",
     "tipi",
     "hat einen"
    ],
    [
     "variabile",
     "assegna",
     "erhält Werte mit"
    ],
    [
     "ciclo",
     "for",
     "Typ"
    ],
    [
     "ciclo",
     "while",
     "Typ"
    ],
    [
     "programma",
     "debug",
     "wird behoben mit"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Schleifen",
   "questions": [
    {
     "type": "num",
     "q": "Wie oft wird „Ciao“ ausgegeben bei: for i in range(7): print(\"Ciao\")?",
     "answer": 7,
     "explain": "range(7) erzeugt 0, 1, 2, 3, 4, 5, 6: sieben Werte, sieben Wiederholungen."
    },
    {
     "type": "mc",
     "q": "Welche Schleife benutzt du, wenn du nicht weißt, wie oft du wiederholen musst?",
     "options": [
      "for",
      "while",
      "keine von beiden"
     ],
     "answer": 1,
     "explain": "while wiederholt, solange eine Bedingung wahr ist, ohne feste Anzahl."
    },
    {
     "type": "tf",
     "q": "Der Code „n = 5 / while n > 0: print(n)“ hält von selbst an.",
     "answer": false,
     "explain": "n ändert sich nie: Die Bedingung bleibt immer wahr und die Schleife ist endlos."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Variable",
   "d": "Speicherplatz mit einem Namen, der einen veränderbaren Wert enthält."
  },
  {
   "t": "Zuweisung",
   "d": "Anweisung, die einen Wert in eine Variable legt (Zeichen = in Python)."
  },
  {
   "t": "Zeichenkette (String)",
   "d": "Folge von Zeichen, in Anführungszeichen geschrieben: \"ciao\"."
  },
  {
   "t": "Boolescher Wert",
   "d": "Datentyp mit nur zwei Werten: True (wahr) und False (falsch)."
  },
  {
   "t": "Schleife (Loop)",
   "d": "Gruppe von Anweisungen, die mehrmals wiederholt werden."
  },
  {
   "t": "for",
   "d": "Zählschleife mit festgelegter Anzahl von Wiederholungen."
  },
  {
   "t": "while",
   "d": "Bedingungsschleife: wiederholt, solange die Bedingung wahr ist."
  },
  {
   "t": "Zähler",
   "d": "Variable, die die Durchgänge einer Schleife zählt."
  },
  {
   "t": "Akkumulator",
   "d": "Variable, die in jedem Durchgang Werte addiert (ansammelt)."
  },
  {
   "t": "Endlosschleife",
   "d": "Schleife, deren Bedingung nie falsch wird: Das Programm endet nicht."
  },
  {
   "t": "Bug / Debugging",
   "d": "Fehler im Programm / das Finden und Beheben davon."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Was ist eine Variable?",
    "options": [
     "Ein Fehler im Programm",
     "Ein Behälter mit einem Namen für einen Wert, der sich ändern kann",
     "Eine Art von Schleife"
    ],
    "answer": 1,
    "explain": "Eine Variable ist eine „Schachtel“ mit einem Namen und einem Wert."
   },
   {
    "type": "num",
    "q": "a = 10, dann a = a - 4, dann a = a * 2. Wie viel ist a?",
    "answer": 12,
    "explain": "10 − 4 = 6; 6 × 2 = 12."
   },
   {
    "type": "mc",
    "q": "Welcher Wert ist ein boolescher Wert?",
    "options": [
     "\"vero\"",
     "True",
     "1.5"
    ],
    "answer": 1,
    "explain": "In Python sind die booleschen Werte True und False, ohne Anführungszeichen."
   },
   {
    "type": "num",
    "q": "x = 0; for i in range(5): x = x + 2. Wie viel ist x am Ende?",
    "answer": 10,
    "explain": "Die Schleife läuft 5 Mal und addiert jedes Mal 2: 5 × 2 = 10."
   },
   {
    "type": "text",
    "q": "Welches Python-Schlüsselwort erzeugt eine Schleife, die wiederholt, solange eine Bedingung wahr ist?",
    "answer": [
     "while"
    ],
    "explain": "while = „solange“."
   },
   {
    "type": "tf",
    "q": "range(3) erzeugt die Zahlen 1, 2, 3.",
    "answer": false,
    "explain": "range(3) erzeugt 0, 1, 2: Man beginnt bei 0 und hört vor 3 auf."
   },
   {
    "type": "mc",
    "q": "Was passiert, wenn in einer while-Schleife die Bedingung nie falsch wird?",
    "options": [
     "Das Programm hält sofort an",
     "Es entsteht eine Endlosschleife",
     "Der Computer korrigiert den Fehler von selbst"
    ],
    "answer": 1,
    "explain": "Die Schleife läuft für immer: Das ist eine Endlosschleife."
   },
   {
    "type": "mc",
    "q": "Was ist der Unterschied zwischen = und == in Python?",
    "options": [
     "Keiner",
     "= weist zu, == vergleicht",
     "= vergleicht, == weist zu"
    ],
    "answer": 1,
    "explain": "= legt einen Wert in eine Variable; == prüft, ob zwei Werte gleich sind."
   },
   {
    "type": "order",
    "q": "Bringe die Zeilen in die richtige Reihenfolge, um die Zahlen von 1 bis 10 zu addieren und das Ergebnis anzuzeigen.",
    "items": [
     "somma = 0",
     "for n in range(1, 11):",
     "    somma = somma + n",
     "print(somma)"
    ],
    "explain": "Zuerst setzt man den Akkumulator auf null, dann addiert die Schleife, zuletzt wird ausgegeben."
   },
   {
    "type": "num",
    "q": "Wie viel ergibt die Summe der Zahlen von 1 bis 100, berechnet im Beispiel von Gauß?",
    "answer": 5050,
    "explain": "50 Paare zu je 101: 50 × 101 = 5050."
   },
   {
    "type": "text",
    "q": "Wie heißt die Mathematikerin, die 1843 das erste Programm der Geschichte schrieb? (Nachname)",
    "answer": [
     "lovelace",
     "ada lovelace"
    ],
    "explain": "Ada Lovelace, für die Analytical Engine von Charles Babbage."
   },
   {
    "type": "num",
    "q": "x = 1; for i in range(3): x = x * 3. Wie viel ist x?",
    "answer": 27,
    "explain": "1 × 3 = 3, 3 × 3 = 9, 9 × 3 = 27."
   }
  ]
 }
});
