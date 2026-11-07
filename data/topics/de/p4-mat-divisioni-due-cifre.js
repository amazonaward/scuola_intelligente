TOPIC('de', {
 "id": "p4-mat-divisioni-due-cifre",
 "title": "Divisionen mit zweistelligem Divisor",
 "intro": "450 Schüler fahren auf Ausflug mit Bussen zu je 52 Plätzen: Wie viele Busse braucht man? Um das zu beantworten, musst du durch eine <b>zweistellige</b> Zahl teilen. Das scheint schwierig, aber mit einer guten <b>Schätzung</b>, ein paar <b>Strategien</b> und der <b>Probe</b> wird es ein Kinderspiel!",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "Wiederholung: Die Begriffe der Division",
   "html": "<p>In der Division <b>864 : 24 = 36</b>:</p>\n<ul>\n<li><b>864</b> ist der <b>Dividend</b> (die Menge, die geteilt wird);</li>\n<li><b>24</b> ist der <b>Divisor</b> (in wie viele Teile geteilt wird, oder wie groß jede Gruppe ist);</li>\n<li><b>36</b> ist der <b>Quotient</b> (das Ergebnis);</li>\n<li>bleibt etwas übrig, ist das der <b>Rest</b>, der immer <b>kleiner als der Divisor</b> sein muss.</li>\n</ul>\n<p>Die Division braucht man in zwei Situationen:</p>\n<ul>\n<li><b>Verteilen</b>: 864 Sammelbildchen auf 24 Kinder verteilt → wie viele für jedes?</li>\n<li><b>Aufteilen</b>: 864 Sammelbildchen in Tütchen zu 24 → wie viele Tütchen?</li>\n</ul>\n<p>Die Division ist die <b>Umkehroperation</b> der Multiplikation: Wenn 36 × 24 = 864, dann 864 : 24 = 36.</p>"
  },
  {
   "type": "text",
   "title": "Schritt 1 – Den Quotienten schätzen",
   "html": "<p>Das Geheimnis beim Teilen durch zwei Ziffern ist das <b>Schätzen</b>, also klug zu erraten, wie oft der Divisor im Dividenden „steckt“.</p>\n<p><b>Fingertrick</b>: Decke mit dem Finger die letzte Ziffer des Divisors und auch die letzte Ziffer des Teils vom Dividenden zu, den du gerade teilst.</p>\n<ul>\n<li>86 : 24 → decke die 4 und die 6 ab → <b>8 : 2 = 4</b>. Probiere 4: 4 × 24 = 96. Das ist mehr als 86! Zu groß → probiere <b>3</b>: 3 × 24 = 72 ✅.</li>\n</ul>\n<p>Ein noch besserer Trick: <b>Runde den Divisor</b> auf den nächsten Zehner. 24 ist nahe bei 20, 47 nahe bei 50, 31 nahe bei 30.</p>\n<ul>\n<li>145 : 31 → denke 150 : 30 = <b>5</b> → 5 × 31 = 155 zu viel → <b>4</b>: 4 × 31 = 124 ✅ (Rest 21).</li>\n</ul>\n<p>Ist das Produkt <b>zu groß</b>, verkleinere die Zahl um 1; ist der Rest <b>größer als oder gleich dem Divisor</b>, erhöhe sie um 1.</p>"
  },
  {
   "type": "text",
   "title": "Schritt 2 – Die schriftliche Division, Schritt für Schritt",
   "html": "<p>Wir rechnen <b>864 : 24</b> mit der italienischen Methode („L-Methode“).</p>\n<ol>\n<li><b>Ich nehme die Ziffern</b>: 8 enthält 24 nicht, also nehme ich <b>86</b>.</li>\n<li><b>Ich schätze</b>: Wie oft steckt die 24 in der 86? 8 : 2 = 4, aber 4 × 24 = 96 &gt; 86 → <b>3</b>. Ich schreibe 3 in den Quotienten.</li>\n<li><b>Ich multipliziere und subtrahiere</b>: 3 × 24 = 72; 86 − 72 = <b>14</b>. Der Rest 14 ist kleiner als 24 ✅.</li>\n<li><b>Ich hole</b> die nächste Ziffer (4) <b>herunter</b>: Ich erhalte <b>144</b>.</li>\n<li><b>Ich schätze</b>: 144 : 24 → 14 : 2 = 7, aber 7 × 24 = 168, zu viel; 6 × 24 = <b>144</b> ✅. Ich schreibe 6 in den Quotienten.</li>\n<li><b>Ich subtrahiere</b>: 144 − 144 = <b>0</b>. Es gibt keine weiteren Ziffern herunterzuholen: Fertig!</li>\n</ol>\n<p>Ergebnis: <b>864 : 24 = 36</b>, Rest <b>0</b>.</p>"
  },
  {
   "type": "svg",
   "title": "864 : 24 schriftlich",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#f8fafc\"/>\n<g font-family=\"monospace\" font-size=\"34\" font-weight=\"bold\">\n<text x=\"80\" y=\"60\" fill=\"#1f2937\">8 6 4</text>\n<text x=\"300\" y=\"60\" fill=\"#2563eb\">2 4</text>\n<text x=\"300\" y=\"115\" fill=\"#16a34a\">3 6</text>\n<text x=\"80\" y=\"115\" fill=\"#dc2626\">7 2</text>\n<text x=\"40\" y=\"115\" fill=\"#dc2626\">−</text>\n<text x=\"80\" y=\"170\" fill=\"#1f2937\">1 4 4</text>\n<text x=\"80\" y=\"225\" fill=\"#dc2626\">1 4 4</text>\n<text x=\"40\" y=\"225\" fill=\"#dc2626\">−</text>\n<text x=\"160\" y=\"280\" fill=\"#1f2937\">0</text>\n</g>\n<line x1=\"280\" y1=\"25\" x2=\"280\" y2=\"80\" stroke=\"#1f2937\" stroke-width=\"4\"/>\n<line x1=\"280\" y1=\"75\" x2=\"400\" y2=\"75\" stroke=\"#1f2937\" stroke-width=\"4\"/>\n<line x1=\"70\" y1=\"128\" x2=\"160\" y2=\"128\" stroke=\"#1f2937\" stroke-width=\"3\"/>\n<line x1=\"70\" y1=\"238\" x2=\"200\" y2=\"238\" stroke=\"#1f2937\" stroke-width=\"3\"/>\n<path d=\"M185 45 Q215 100 182 150\" stroke=\"#f97316\" stroke-width=\"3\" fill=\"none\" stroke-dasharray=\"6 5\"/>\n<text x=\"215\" y=\"105\" font-size=\"15\" fill=\"#c2410c\">hole</text>\n<text x=\"215\" y=\"122\" font-size=\"15\" fill=\"#c2410c\">die 4</text>\n<g font-size=\"17\" fill=\"#334155\">\n<text x=\"420\" y=\"58\">← Divisor</text>\n<text x=\"420\" y=\"113\">← Quotient</text>\n<text x=\"430\" y=\"170\">86 : 24 → 3</text>\n<text x=\"430\" y=\"195\">3 × 24 = 72</text>\n<text x=\"430\" y=\"230\">144 : 24 → 6</text>\n<text x=\"430\" y=\"255\">6 × 24 = 144</text>\n<text x=\"230\" y=\"282\">← Rest</text>\n</g>\n</svg>",
   "caption": "Der Divisor steht rechts oben, der Quotient darunter; links schreibt man Produkte, Subtraktionen und heruntergeholte Ziffern."
  },
  {
   "type": "text",
   "title": "Schritt 3 – Die Probe",
   "html": "<p>Um sicher zu sein, machst du die <b>Probe</b> mit der Umkehroperation:</p>\n<p style=\"font-size:1.2em\"><b>Quotient × Divisor + Rest = Dividend</b></p>\n<ul>\n<li>864 : 24 = 36 → Probe: 36 × 24 = 864 ✅</li>\n<li>1.000 : 32 = 31 Rest 8 → Probe: 31 × 32 = 992; 992 + 8 = 1.000 ✅</li>\n</ul>\n<p>Denk auch an die <b>Restkontrolle</b>: Der Rest muss immer <b>kleiner als der Divisor</b> sein. Wenn du 1.000 : 32 = 30 Rest 40 findest, steckt ein Fehler drin: 40 &gt; 32, der Quotient war zu klein!</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Schätzen und Probe",
   "questions": [
    {
     "type": "mc",
     "q": "Welche „leichte“ Division kannst du dir zum Schätzen von 183 : 29 denken?",
     "options": [
      "180 : 30",
      "100 : 20",
      "200 : 20"
     ],
     "answer": 0,
     "explain": "29 ist nahe bei 30 und 183 nahe bei 180: 180 : 30 = 6."
    },
    {
     "type": "num",
     "q": "Mach die Probe: Ein Kind hat 500 : 23 = 21 Rest 17 gefunden. Wie viel ist 21 × 23 + 17?",
     "answer": 500,
     "explain": "21 × 23 = 483; 483 + 17 = 500: Die Division ist richtig!"
    },
    {
     "type": "tf",
     "q": "Bei einer Division durch 15 kann der Rest 18 sein.",
     "answer": false,
     "explain": "Der Rest muss kleiner als der Divisor (15) sein."
    }
   ]
  },
  {
   "type": "text",
   "title": "Schritt 4 – Konstanz des Quotienten: eine Abkürzung",
   "html": "<p>Wenn du Dividend und Divisor mit der <b>gleichen Zahl</b> <b>multiplizierst</b> oder <b>dividierst</b>, ändert sich der Quotient <b>nicht</b>. Das ist die <b>Konstanz des Quotienten</b>.</p>\n<ul>\n<li>720 : 15 → ich verdopple beide → 1440 : 30 → ich teile durch 10 → <b>144 : 3 = 48</b>. Viel leichter!</li>\n<li>600 : 25 → ich multipliziere mit 4 → 2400 : 100 = <b>24</b>.</li>\n<li>840 : 40 → ich teile durch 10 → 84 : 4 = <b>21</b>.</li>\n</ul>\n<p>Achtung: Wenn die Division einen <b>Rest</b> hat, bleibt der Quotient gleich, aber der Rest ändert sich (er wird ebenfalls multipliziert oder geteilt). Benutze diese Abkürzung vor allem bei Divisionen ohne Rest.</p>"
  },
  {
   "type": "example",
   "title": "Praxisbeispiel: Die Busse für den Ausflug",
   "html": "<p>450 Schüler müssen auf Ausflug fahren. Jeder Bus hat <b>52 Plätze</b>. Wie viele Busse braucht man?</p>\n<ol>\n<li>Schätzen: 450 : 50 = 9 → ich probiere 9 × 52 = 468 &gt; 450, zu viel → <b>8</b>.</li>\n<li>8 × 52 = 416; 450 − 416 = <b>34</b>. Also 450 : 52 = <b>8 Rest 34</b>.</li>\n<li>Probe: 8 × 52 + 34 = 416 + 34 = 450 ✅.</li>\n</ol>\n<p>Aber achte auf die <b>Bedeutung des Rests</b>! 8 Busse fahren 416 Schüler; 34 Schüler bleiben zu Fuß. Man braucht noch einen Bus: insgesamt <b>9 Busse</b>.</p>\n<p>Bei Sachaufgaben muss man sich immer fragen: <b>Wird der Rest ignoriert, addiert oder benutzt?</b></p>"
  },
  {
   "type": "example",
   "title": "Praxisbeispiel: Eier in Packungen",
   "html": "<p>Ein Bauernhof sammelt <b>1.000 Eier</b> und packt sie in Packungen zu <b>12</b> (ein Dutzend). Wie viele volle Packungen? Wie viele Eier bleiben übrig?</p>\n<ol>\n<li>100 : 12 → 10 : 1 = 10? Zu viel! Der Teilquotient hat immer nur eine Ziffer (höchstens 9): Ich probiere 9 → 9 × 12 = 108 &gt; 100 → <b>8</b>: 8 × 12 = 96; 100 − 96 = 4.</li>\n<li>Ich hole die 0 herunter: <b>40</b> : 12 → <b>3</b>: 3 × 12 = 36; 40 − 36 = 4.</li>\n<li>Ergebnis: <b>1.000 : 12 = 83 Rest 4</b>.</li>\n<li>Probe: 83 × 12 = 996; 996 + 4 = 1.000 ✅.</li>\n</ol>\n<p>Der Bauernhof füllt <b>83 Packungen</b> und es bleiben <b>4 Eier</b> übrig (für das Rührei!).</p>"
  },
  {
   "type": "3d",
   "title": "Die Division als Würfelrechteck",
   "scene": "blocks",
   "options": {
    "mode": "array",
    "a": 6,
    "b": 12,
    "max": 12
   },
   "caption": "72 Würfel in Reihen zu 12: Wie viele Reihen? 72 : 12 = 6. Jede Division ohne Rest ist ein Rechteck: Dividend = alle Würfel, Divisor = Würfel pro Reihe, Quotient = Anzahl der Reihen."
  },
  {
   "type": "curiosity",
   "title": "Wusstest du schon …? Die „L-Methode“ ist italienisch",
   "html": "<p>Die Schreibweise der Division, die du hier benutzt, mit dem Divisor oben rechts und dem Quotienten darunter, ist typisch für <b>Italien</b> und andere europäische Länder (Frankreich, Spanien, Lateinamerika). In den <b>angelsächsischen Ländern</b> benutzt man die <b>„long division“</b>: Der Dividend steht unter einer Art „Dach“ und der Quotient wird <b>darüber</b> geschrieben. In Deutschland schreibt man alles in eine Zeile: <i>864 : 24 = 36</i>, mit der Rechnung darunter.</p>\n<p>Die Methode ändert sich, aber die Schritte (schätzen, multiplizieren, subtrahieren, herunterholen) sind immer die gleichen!</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du schon …? Durch null teilen geht nicht",
   "html": "<p>Man kann durch 1, durch 24, durch 1.000 teilen … aber <b>niemals durch null</b>! Warum? Mach die Probe: 8 : 0 = ? Es müsste eine Zahl geben, die mit 0 multipliziert 8 ergibt. Aber jede Zahl mal 0 ist 0! Also ergibt die Division durch null <b>keinen Sinn</b>.</p>\n<p>Auch Taschenrechner wissen das: Wenn du es versuchst, zeigen sie <b>„Fehler“</b> oder <b>„E“</b> an.</p>"
  },
  {
   "type": "remember",
   "title": "Zum Merken",
   "html": "<ul>\n<li><b>Dividend : Divisor = Quotient</b> (+ Rest).</li>\n<li>Der <b>Rest</b> ist immer <b>kleiner als der Divisor</b>.</li>\n<li>Schritte: <b>Ziffern nehmen → schätzen → multiplizieren → subtrahieren → herunterholen</b>, und von vorn.</li>\n<li>Zum Schätzen den <b>Divisor runden</b> auf den Zehner (oder den Fingertrick benutzen).</li>\n<li>Produkt zu groß → um 1 verkleinern; Rest zu groß → um 1 erhöhen.</li>\n<li><b>Probe</b>: Quotient × Divisor + Rest = Dividend.</li>\n<li><b>Konstanz des Quotienten</b>: Dividend und Divisor mit der gleichen Zahl multiplizieren oder dividieren, der Quotient ändert sich nicht.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Andere Wege zum Dividieren",
   "intro": "Wenn dich das schriftliche Verfahren blockiert, probiere diese Wege: in großen Stücken (England), mit Rückwärtssprüngen, wie die alten Ägypter oder mit der Tabelle der Vielfachen.",
   "tabs": [
    {
     "label": "🇬🇧 In großen Stücken (Chunking)",
     "html": "<p>In englischen Schulen lernt man das <b>Chunking</b> („in Stücken“): Statt die richtige Ziffer zu erraten, nimmst du vom Dividenden <b>große, leichte Stücke</b> weg (× 10, × 5, × 2 …), bis nichts mehr übrig ist.</p>\n<p><b>864 : 24</b></p>\n<table>\n<tr><th>Ich nehme weg</th><th>Wie oft 24</th><th>Bleibt übrig</th></tr>\n<tr><td>240 (= 24 × 10)</td><td>10</td><td>624</td></tr>\n<tr><td>240 (= 24 × 10)</td><td>10</td><td>384</td></tr>\n<tr><td>240 (= 24 × 10)</td><td>10</td><td>144</td></tr>\n<tr><td>120 (= 24 × 5)</td><td>5</td><td>24</td></tr>\n<tr><td>24 (= 24 × 1)</td><td>1</td><td>0</td></tr>\n<tr><td><b>Summe</b></td><td><b>36</b></td><td></td></tr>\n</table>\n<p>Es ist länger, aber die <b>Schätzung geht nie schief</b>: Du benutzt nur Einmaleins-Reihen, die du gut kennst!</p>"
    },
    {
     "label": "🐸 Rückwärtssprünge",
     "html": "<p>Teilen heißt auch: <b>Wie oft kann ich den Divisor wegnehmen?</b> Auf der Zahlengeraden startest du beim Dividenden und machst <b>Rückwärtssprünge</b>, so lang wie der Divisor, bis du bei 0 ankommst (oder nicht mehr springen kannst).</p>\n<p>Probiere es mit <b>96 : 24</b>: Der Frosch startet bei 96, stelle den Sprung auf 24 ein und drücke „−“. Zähle die Sprünge: 96 → 72 → 48 → 24 → 0. Das sind <b>4 Sprünge</b>: 96 : 24 = 4!</p>\n<p>Probiere dann 100 : 24: Nach 4 Sprüngen kommst du bei 4 an und kannst nicht mehr springen. 4 ist der <b>Rest</b>.</p>",
     "widget": "numberLine",
     "options": {
      "min": 0,
      "max": 100,
      "step": 24,
      "start": 96,
      "marks": [
       72,
       48,
       24,
       0
      ]
     }
    },
    {
     "label": "𓂀 Wie die Ägypter (Verdopplungen)",
     "html": "<p>Die alten Ägypter teilten nur mit <b>Verdopplungen</b>! Für <b>864 : 24</b> schrieben sie eine Tabelle: 1 → 24, 2 → 48, 4 → 96, 8 → 192, 16 → 384, 32 → 768.</p>\n<p>Dann suchten sie, welche Zeilen zusammen 864 ergeben: <b>768 + 96 = 864</b>, also die Zeilen <b>32</b> und <b>4</b>. Der Quotient ist also <b>32 + 4 = 36</b>!</p>\n<p>Im Widget unten, das die „ägyptische Multiplikation“ 36 × 24 macht, siehst du genau diese Tabelle: Die behaltenen Zeilen sind die, die zusammen 864 ergeben.</p>",
     "widget": "egyptianMultiply",
     "options": {
      "a": 36,
      "b": 24
     }
    },
    {
     "label": "📋 Die Tabelle der Vielfachen",
     "html": "<p>Wenn dir das Schätzen Angst macht, schreibe vor dem Anfangen die <b>Reihe des Divisors</b> auf: So musst du nicht raten, du musst nur nachsehen!</p>\n<p>Zum Teilen durch <b>24</b>:</p>\n<table>\n<tr><td>24 × 1 = 24</td><td>24 × 4 = 96</td><td>24 × 7 = 168</td></tr>\n<tr><td>24 × 2 = 48</td><td>24 × 5 = 120</td><td>24 × 8 = 192</td></tr>\n<tr><td>24 × 3 = 72</td><td>24 × 6 = 144</td><td>24 × 9 = 216</td></tr>\n</table>\n<p>Nun 86 : 24? Ich suche das größte Vielfache, das 86 nicht übersteigt: <b>72</b> (× 3). Und 144 : 24? Da steht genau <b>144</b> (× 6). Quotient: <b>36</b>.</p>\n<p>Schneller Trick, um die Tabelle zu bauen: Addiere jedes Mal 24 zur vorigen Zahl (24, 48, 72, 96 …).</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Landkarte der Division",
   "nodes": [
    {
     "id": "divisione",
     "label": "Division",
     "x": 50,
     "y": 6,
     "color": "#2563eb",
     "html": "Rechenoperation zum Verteilen oder Gruppieren: Dividend : Divisor = Quotient.",
     "why": "Sie entstand aus praktischen Bedürfnissen: Ernte, Soldatenrationen, Erbschaft teilen. Ägypter und Babylonier konnten schon vor 4000 Jahren dividieren, die ersten mit Verdopplungen, die zweiten mit Tabellen von Kehrwerten."
    },
    {
     "id": "inversa",
     "label": "Umkehrung der Multiplikation",
     "x": 18,
     "y": 28,
     "color": "#16a34a",
     "html": "Wenn 36 × 24 = 864, dann 864 : 24 = 36.",
     "why": "Teilen heißt, den fehlenden Faktor zu suchen: 24 × ? = 864. Deshalb ist es der Schlüssel zum Dividieren, das Einmaleins gut zu kennen."
    },
    {
     "id": "termini",
     "label": "Dividend, Divisor, Quotient, Rest",
     "x": 50,
     "y": 28,
     "color": "#f59e0b",
     "html": "Die vier Namen der Division.",
     "why": "„Quotient“ kommt vom lateinischen <i>quotiens</i>, „wie oft“: wie oft der Divisor im Dividenden steckt."
    },
    {
     "id": "resto",
     "label": "Rest < Divisor",
     "x": 82,
     "y": 28,
     "color": "#ef4444",
     "html": "Was übrig bleibt, ist immer kleiner als der Divisor.",
     "why": "Wäre der Rest gleich oder größer als der Divisor, passte noch eine ganze Gruppe hinein: Der Quotient wäre zu klein. Diese Idee lag schon den Berechnungen von <b>Euklid</b> (um 300 v. Chr.) zugrunde, der in seinen <i>Elementen</i> Divisionen mit Rest benutzte."
    },
    {
     "id": "stima",
     "label": "Schätzen",
     "x": 18,
     "y": 58,
     "color": "#a855f7",
     "html": "Den Divisor runden, um die Ziffer des Quotienten zu erraten.",
     "why": "Es funktioniert, weil sich der Quotient nur wenig ändert, wenn man den Divisor ein wenig rundet. Höchstens musst du um 1 oder 2 korrigieren: Es ist eine kluge Art von „Probieren und Verbessern“."
    },
    {
     "id": "algoritmo",
     "label": "Schriftliches Verfahren",
     "x": 50,
     "y": 58,
     "color": "#0ea5e9",
     "html": "Ziffern nehmen, schätzen, multiplizieren, subtrahieren, herunterholen.",
     "why": "Es funktioniert dank des <b>Stellenwerts</b>: Man teilt zuerst den Teil der Hunderter, dann der Zehner, dann der Einer. Die Methode kam mit den indisch-arabischen Ziffern nach Europa; Fibonacci erklärte sie im <i>Liber Abaci</i> (1202), und in Italien wurde sie in den Rechenschulen der Kaufleute verfeinert."
    },
    {
     "id": "prova",
     "label": "Probe",
     "x": 82,
     "y": 58,
     "color": "#14b8a6",
     "html": "Quotient × Divisor + Rest = Dividend.",
     "why": "Das ist die Definition der Division mit Rest selbst: Dividend = Divisor × Quotient + Rest. Die Umkehroperation zu benutzen ist die sicherste Kontrolle."
    },
    {
     "id": "invariantiva",
     "label": "Konstanz des Quotienten",
     "x": 34,
     "y": 86,
     "color": "#64748b",
     "html": "Dividend und Divisor mit der gleichen Zahl multiplizieren oder dividieren: Der Quotient bleibt gleich.",
     "why": "Wenn du die Bonbons verdoppelst und auch die Kinder, bekommt jedes immer gleich viele Bonbons! Es ist dieselbe Idee wie bei gleichwertigen Brüchen: 720/15 = 1440/30."
    },
    {
     "id": "zero",
     "label": "Niemals durch null",
     "x": 66,
     "y": 86,
     "color": "#be185d",
     "html": "Durch null zu teilen ergibt keinen Sinn.",
     "why": "Keine Zahl mal 0 ergibt etwas anderes als 0, also kann die Probe nie gelingen. Mathematiker sagen, die Division durch null sei „unmöglich“ oder „nicht definiert“."
    }
   ],
   "edges": [
    [
     "divisione",
     "inversa",
     "ist die"
    ],
    [
     "divisione",
     "termini",
     "hat"
    ],
    [
     "termini",
     "resto",
     "regelt"
    ],
    [
     "inversa",
     "stima",
     "hilft beim"
    ],
    [
     "stima",
     "algoritmo",
     "braucht man im"
    ],
    [
     "algoritmo",
     "prova",
     "kontrolliert man mit"
    ],
    [
     "inversa",
     "prova",
     "beruht auf"
    ],
    [
     "divisione",
     "invariantiva",
     "Eigenschaft"
    ],
    [
     "divisione",
     "zero",
     "Achtung"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Rechne",
   "questions": [
    {
     "type": "num",
     "q": "Wie viel ist 672 : 32?",
     "answer": 21,
     "explain": "67 : 32 = 2 (64), Rest 3; ich hole die 2 herunter → 32 : 32 = 1. Quotient 21."
    },
    {
     "type": "num",
     "q": "Benutze die Konstanz des Quotienten: 900 : 25 = ?",
     "answer": 36,
     "explain": "× 4: 3600 : 100 = 36."
    },
    {
     "type": "mc",
     "q": "Bei 158 : 26 ergibt die Schätzung „160 : 30“ den Wert 5. Der richtige Quotient ist …",
     "options": [
      "5",
      "6",
      "7"
     ],
     "answer": 1,
     "explain": "5 × 26 = 130, Rest 28 ≥ 26: zu klein! 6 × 26 = 156, Rest 2 ✅."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Dividend",
   "d": "Die Zahl, die geteilt wird."
  },
  {
   "t": "Divisor",
   "d": "Die Zahl, durch die geteilt wird."
  },
  {
   "t": "Quotient",
   "d": "Das Ergebnis der Division."
  },
  {
   "t": "Rest",
   "d": "Was übrig bleibt; er ist immer kleiner als der Divisor."
  },
  {
   "t": "Schätzung",
   "d": "Ungefähre Rechnung, um das Ergebnis vorherzusagen."
  },
  {
   "t": "Probe",
   "d": "Kontrolle des Ergebnisses: Quotient × Divisor + Rest = Dividend."
  },
  {
   "t": "Konstanz des Quotienten",
   "d": "Multipliziert oder dividiert man Dividend und Divisor mit der gleichen Zahl, ändert sich der Quotient nicht."
  },
  {
   "t": "Division ohne Rest",
   "d": "Division mit dem Rest 0."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Wie viel ist 336 : 14?",
    "answer": 24,
    "explain": "33 : 14 = 2 (28), Rest 5; ich hole die 6 herunter → 56 : 14 = 4. Quotient 24."
   },
   {
    "type": "num",
    "q": "Wie viel ist 945 : 45?",
    "answer": 21,
    "explain": "94 : 45 = 2 (90), Rest 4; ich hole die 5 herunter → 45 : 45 = 1. Quotient 21."
   },
   {
    "type": "num",
    "q": "Wie groß ist der Rest von 500 : 18?",
    "answer": 14,
    "explain": "500 : 18 = 27 Rest 14 (27 × 18 = 486; 500 − 486 = 14)."
   },
   {
    "type": "mc",
    "q": "In 1.250 : 25 = 50 ist die Zahl 25 …",
    "options": [
     "der Dividend",
     "der Divisor",
     "der Quotient"
    ],
    "answer": 1,
    "explain": "Die Zahl, durch die geteilt wird, ist der Divisor."
   },
   {
    "type": "tf",
    "q": "Die Probe der Division macht man mit der Multiplikation.",
    "answer": true,
    "explain": "Quotient × Divisor + Rest = Dividend."
   },
   {
    "type": "tf",
    "q": "Wenn ein Kind 300 : 40 = 6 Rest 60 findet, ist das Ergebnis richtig.",
    "answer": false,
    "explain": "Der Rest 60 ist größer als der Divisor 40: Der richtige Quotient ist 7 Rest 20."
   },
   {
    "type": "mc",
    "q": "Welche Division hat denselben Quotienten wie 480 : 16?",
    "options": [
     "240 : 8",
     "480 : 8",
     "240 : 16"
    ],
    "answer": 0,
    "explain": "Dividend und Divisor beide durch 2 geteilt: Konstanz des Quotienten."
   },
   {
    "type": "order",
    "q": "Bringe die Schritte der schriftlichen Division in die richtige Reihenfolge.",
    "items": [
     "Ich nehme die Ziffern des Dividenden",
     "Ich schätze, wie oft der Divisor hineinpasst",
     "Ich multipliziere die Ziffer mit dem Divisor",
     "Ich subtrahiere",
     "Ich hole die nächste Ziffer herunter"
    ],
    "explain": "Nehmen, schätzen, multiplizieren, subtrahieren, herunterholen: und von vorn."
   },
   {
    "type": "num",
    "q": "Eine Schule hat 380 Schüler und jeder Bus fährt 50 Personen. Wie viele Busse braucht man, um alle zu fahren?",
    "answer": 8,
    "explain": "380 : 50 = 7 Rest 30: Für die übrigen 30 Schüler braucht man noch einen Bus, also 8."
   },
   {
    "type": "num",
    "q": "In einer Bibliothek sind 1.008 Bücher, die in Regale zu je 42 Büchern gestellt werden. Wie viele Regale werden gefüllt?",
    "answer": 24,
    "explain": "1.008 : 42 = 24 (42 × 24 = 1.008)."
   },
   {
    "type": "text",
    "q": "Wie heißt das Ergebnis der Division?",
    "answer": [
     "quotient",
     "der quotient"
    ],
    "explain": "Der Quotient."
   }
  ],
  "gen": [
   [
    "div2",
    3
   ]
  ]
 }
});
