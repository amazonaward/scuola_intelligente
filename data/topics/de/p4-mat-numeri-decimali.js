TOPIC('de', {
 "id": "p4-mat-numeri-decimali",
 "title": "Die Dezimalzahlen",
 "intro": "Ein Heft kostet 1,50 €, du bist 1,38 m groß, du hast 37,5 °C Fieber … Zahlen mit <b>Komma</b> gibt es überall! Das sind die <b>Dezimalzahlen</b>: Sie zählen die <b>Teile, die kleiner als das Ganze sind</b>, nämlich <b>Zehntel</b>, <b>Hundertstel</b> und <b>Tausendstel</b>.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "Das Ganze in 10, 100, 1000 Teile teilen",
   "html": "<p>Bisher haben wir ganze Einheiten gezählt. Aber oft braucht man Teile, die <b>kleiner</b> als das Ganze sind. Unser System ist auch „nach unten“ dezimal: <b>Jede Stelle wird in 10 Teile geteilt</b>.</p>\n<ul>\n<li>Teile das Ganze in <b>10</b> gleiche Teile: Jeder Teil ist <b>ein Zehntel</b> → 1/10 = <b>0,1</b></li>\n<li>Teile ein Zehntel in 10 Teile: Jeder Teil ist <b>ein Hundertstel</b> → 1/100 = <b>0,01</b></li>\n<li>Teile ein Hundertstel in 10 Teile: Jeder Teil ist <b>ein Tausendstel</b> → 1/1000 = <b>0,001</b></li>\n</ul>\n<p>Also: <b>1 Ganzes = 10 Zehntel = 100 Hundertstel = 1000 Tausendstel</b>.</p>\n<p>Brüche mit dem Nenner 10, 100, 1000 heißen <b>Dezimalbrüche</b> und lassen sich als <b>Dezimalzahlen</b> schreiben: 3/10 = 0,3; 25/100 = 0,25; 7/1000 = 0,007.</p>"
  },
  {
   "type": "svg",
   "title": "Zehntel und Hundertstel",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f0f9ff\"/>\n<g stroke=\"#1e3a8a\" stroke-width=\"2\">\n<rect x=\"30\" y=\"40\" width=\"200\" height=\"200\" fill=\"#ffffff\"/>\n<rect x=\"30\" y=\"40\" width=\"60\" height=\"200\" fill=\"#60a5fa\"/>\n</g>\n<g stroke=\"#1e3a8a\" stroke-width=\"2\">\n<line x1=\"50\" y1=\"40\" x2=\"50\" y2=\"240\"/><line x1=\"70\" y1=\"40\" x2=\"70\" y2=\"240\"/><line x1=\"90\" y1=\"40\" x2=\"90\" y2=\"240\"/><line x1=\"110\" y1=\"40\" x2=\"110\" y2=\"240\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"240\"/><line x1=\"150\" y1=\"40\" x2=\"150\" y2=\"240\"/><line x1=\"170\" y1=\"40\" x2=\"170\" y2=\"240\"/><line x1=\"190\" y1=\"40\" x2=\"190\" y2=\"240\"/><line x1=\"210\" y1=\"40\" x2=\"210\" y2=\"240\"/>\n</g>\n<text x=\"130\" y=\"275\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-weight=\"bold\">3 Zehntel = 0,3</text>\n<g stroke=\"#9d174d\" stroke-width=\"1\">\n<rect x=\"340\" y=\"40\" width=\"200\" height=\"200\" fill=\"#ffffff\" stroke-width=\"2\"/>\n<rect x=\"340\" y=\"40\" width=\"40\" height=\"200\" fill=\"#f472b6\"/>\n<rect x=\"380\" y=\"40\" width=\"20\" height=\"100\" fill=\"#f472b6\"/>\n</g>\n<g stroke=\"#9d174d\" stroke-width=\"1\">\n<line x1=\"360\" y1=\"40\" x2=\"360\" y2=\"240\"/><line x1=\"380\" y1=\"40\" x2=\"380\" y2=\"240\"/><line x1=\"400\" y1=\"40\" x2=\"400\" y2=\"240\"/><line x1=\"420\" y1=\"40\" x2=\"420\" y2=\"240\"/><line x1=\"440\" y1=\"40\" x2=\"440\" y2=\"240\"/><line x1=\"460\" y1=\"40\" x2=\"460\" y2=\"240\"/><line x1=\"480\" y1=\"40\" x2=\"480\" y2=\"240\"/><line x1=\"500\" y1=\"40\" x2=\"500\" y2=\"240\"/><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"240\"/>\n<line x1=\"340\" y1=\"60\" x2=\"540\" y2=\"60\"/><line x1=\"340\" y1=\"80\" x2=\"540\" y2=\"80\"/><line x1=\"340\" y1=\"100\" x2=\"540\" y2=\"100\"/><line x1=\"340\" y1=\"120\" x2=\"540\" y2=\"120\"/><line x1=\"340\" y1=\"140\" x2=\"540\" y2=\"140\"/><line x1=\"340\" y1=\"160\" x2=\"540\" y2=\"160\"/><line x1=\"340\" y1=\"180\" x2=\"540\" y2=\"180\"/><line x1=\"340\" y1=\"200\" x2=\"540\" y2=\"200\"/><line x1=\"340\" y1=\"220\" x2=\"540\" y2=\"220\"/>\n</g>\n<text x=\"440\" y=\"275\" font-size=\"20\" text-anchor=\"middle\" fill=\"#be185d\" font-weight=\"bold\">25 Hundertstel = 0,25</text>\n<text x=\"130\" y=\"28\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">1 Ganzes in 10 Teile geteilt</text>\n<text x=\"440\" y=\"28\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">1 Ganzes in 100 Teile geteilt</text>\n</svg>",
   "caption": "Links 3 Streifen von 10; rechts 25 Kästchen von 100 (2 Streifen zu 10 + 5 Kästchen)."
  },
  {
   "type": "text",
   "title": "Schritt 1 – Das Komma und die Stellenwerttafel",
   "html": "<p>Eine Dezimalzahl hat zwei Teile, getrennt durch das <b>Komma</b>:</p>\n<ul>\n<li>links die <b>ganzen Stellen</b> (Einer, Zehner, Hunderter …);</li>\n<li>rechts die <b>Nachkommastellen</b> (Zehntel <b>z</b>, Hundertstel <b>h</b>, Tausendstel <b>t</b>).</li>\n</ul>\n<table>\n<tr><th>H</th><th>Z</th><th>E</th><th>,</th><th>z</th><th>h</th><th>t</th></tr>\n<tr><td></td><td>2</td><td>7</td><td>,</td><td>4</td><td>0</td><td>5</td></tr>\n</table>\n<p><b>27,405</b> liest man: <i>siebenundzwanzig <b>Komma</b> vier null fünf</i> oder <i>siebenundzwanzig <b>Einer</b> und vierhundertfünf <b>Tausendstel</b></i>.</p>\n<p>⚠️ Achtung: <b>z</b> nach dem Komma sind <b>Zehntel</b>, nicht Zehner! Die Zehntel sind <b>10-mal kleiner</b> als das Ganze, die Zehner 10-mal größer.</p>"
  },
  {
   "type": "widget",
   "title": "Baue die Zehntel",
   "widget": "fractionPie",
   "options": {
    "n": 3,
    "d": 10
   },
   "caption": "Lass den Nenner bei 10 und bewege den Zähler: Das Widget zeigt die passende Dezimalzahl (mit Punkt oder Komma, je nach Sprache). Probiere es auch mit 100!"
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Dezimalzahlen lesen",
   "questions": [
    {
     "type": "mc",
     "q": "In der Zahl 5,72 steht die Ziffer 7 für …",
     "options": [
      "7 Zehner",
      "7 Zehntel",
      "7 Hundertstel"
     ],
     "answer": 1,
     "explain": "Es ist die erste Ziffer nach dem Komma: Zehntel."
    },
    {
     "type": "num",
     "q": "Schreibe als Dezimalzahl: 9 Hundertstel.",
     "answer": 0.09,
     "explain": "9/100 = 0,09 (die Null hält den Platz der Zehntel frei)."
    },
    {
     "type": "num",
     "q": "Wie viele Hundertstel sind in 1 Ganzen?",
     "answer": 100,
     "explain": "1 = 100/100."
    }
   ]
  },
  {
   "type": "text",
   "title": "Schritt 2 – Dezimalzahlen vergleichen",
   "html": "<p>So <b>vergleichst</b> du zwei Dezimalzahlen:</p>\n<ol>\n<li>vergleiche zuerst die <b>ganzen Stellen</b>: <i>4,1 &gt; 3,99</i> (weil 4 &gt; 3);</li>\n<li>sind die ganzen Stellen gleich, vergleiche die <b>Zehntel</b>, dann die <b>Hundertstel</b>, dann die <b>Tausendstel</b>.</li>\n</ol>\n<p>⚠️ Berühmte Falle: Ist <b>0,5</b> größer oder kleiner als <b>0,45</b>? Viele sagen „kleiner, weil 5 &lt; 45“. Falsch! Vergleiche die Zehntel: <b>5 Zehntel</b> gegen <b>4 Zehntel</b> → <b>0,5 &gt; 0,45</b>.</p>\n<p>Trick: Hänge rechts <b>Nullen</b> an, damit beide gleich viele Nachkommastellen haben. Nullen am Ende ändern den Wert nicht: <b>0,5 = 0,50</b>. Jetzt ist es leicht: 50 Hundertstel &gt; 45 Hundertstel.</p>"
  },
  {
   "type": "text",
   "title": "Schritt 3 – Schriftlich addieren und subtrahieren",
   "html": "<p>Goldene Regel: <b>Komma unter Komma</b>! So stehen Zehntel unter Zehnteln, Hundertstel unter Hundertsteln.</p>\n<pre style=\"font-size:1.2em\">   12,50 +\n    3,75 =\n  -------\n   16,25</pre>\n<ol>\n<li>Schreibe die Zahlen untereinander, Komma unter Komma (hänge Nullen an, wenn nötig: 12,5 → 12,50).</li>\n<li>Rechne wie mit ganzen Zahlen, von rechts, mit Übertrag.</li>\n<li>Setze im Ergebnis das Komma <b>unter die anderen</b>.</li>\n</ol>\n<p>Subtraktion: <i>10 − 2,35</i> → schreibe <b>10,00 − 2,35 = 7,65</b>.</p>"
  },
  {
   "type": "text",
   "title": "Schritt 4 – Mit 10, 100, 1000 multiplizieren und dividieren",
   "html": "<p>Bei Dezimalzahlen „wandert“ das Komma:</p>\n<ul>\n<li><b>× 10</b> → das Komma wandert <b>1 Stelle nach rechts</b>: 3,47 × 10 = 34,7</li>\n<li><b>× 100</b> → 2 Stellen nach rechts: 3,47 × 100 = 347</li>\n<li><b>× 1000</b> → 3 Stellen nach rechts (hänge Nullen an, wenn nötig): 3,47 × 1000 = 3470</li>\n<li><b>: 10</b> → das Komma wandert <b>1 Stelle nach links</b>: 52 : 10 = 5,2</li>\n<li><b>: 100</b> → 2 Stellen nach links: 52 : 100 = 0,52</li>\n<li><b>: 1000</b> → 3 Stellen nach links: 52 : 1000 = 0,052</li>\n</ul>\n<p>In Wirklichkeit wechseln die <b>Ziffern</b> den Platz (sie werden 10-, 100-, 1000-mal größer oder kleiner), aber der Kommatrick funktioniert prima!</p>"
  },
  {
   "type": "example",
   "title": "Praxisbeispiel: Der Einkauf",
   "html": "<p>Im Supermarkt kauft Giulia:</p>\n<ul>\n<li>Brot: <b>1,80 €</b></li>\n<li>Milch: <b>1,25 €</b></li>\n<li>Äpfel: <b>2,47 €</b></li>\n</ul>\n<p>Gesamtbetrag: 1,80 + 1,25 + 2,47 = <b>5,52 €</b>.</p>\n<p>Sie zahlt mit einem <b>10-€</b>-Schein. Wechselgeld: 10,00 − 5,52 = <b>4,48 €</b>.</p>\n<p>Beim Geld sind die ganzen Stellen die <b>Euro</b>, die ersten zwei Nachkommastellen die <b>Cent</b> (1 € = 100 Cent). Deshalb haben Preise immer 2 Stellen nach dem Komma: 1,80 € und nicht 1,8 €.</p>"
  },
  {
   "type": "example",
   "title": "Praxisbeispiel: Die Maße",
   "html": "<p>Der <b>Meter</b> wird in 10 <b>Dezimeter</b>, 100 <b>Zentimeter</b>, 1000 <b>Millimeter</b> geteilt: genau wie Zehntel, Hundertstel und Tausendstel!</p>\n<ul>\n<li>Marco ist <b>1,38 m</b> groß = 1 Meter und 38 Zentimeter = 138 cm.</li>\n<li>Ein Bleistift ist <b>0,175 m</b> lang = 175 Millimeter = 17,5 cm.</li>\n<li>Beim Weitsprung springt Sara <b>2,45 m</b> und Lucia <b>2,5 m</b>. Wer gewinnt? 2,5 = 2,50 &gt; 2,45 → <b>Lucia</b>, um 5 Zentimeter!</li>\n</ul>\n<p>Auch das Thermometer benutzt Zehntel: <b>37,5 °C</b> = 37 Grad und 5 Zehntel.</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du schon …? Komma oder Punkt?",
   "html": "<p>In <b>Deutschland</b>, <b>Italien</b> und fast ganz Kontinentaleuropa schreibt man <b>3,14</b> mit einem <b>Komma</b>. Im <b>Vereinigten Königreich</b>, in den <b>USA</b>, in China und in Japan schreibt man <b>3.14</b> mit einem <b>Punkt</b>!</p>\n<p>Deshalb benutzen Taschenrechner und Computer oft den Punkt, und in einer Tabellenkalkulation kann eine Zahl „falsch“ aussehen. Seit 2003 erlauben die internationalen Regeln (Internationales Einheitensystem) <b>beides</b> und empfehlen, Tausender mit einem <b>Leerzeichen</b> zu trennen, um keine Verwirrung zu stiften.</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du schon …? Der Mann, der die Dezimalzahlen „erfand“",
   "html": "<p>Im Jahr <b>1585</b> schrieb der flämische Mathematiker <b>Simon Stevin</b> ein Büchlein von wenigen Seiten, <i>La Disme</i> („das Zehntel“), um Kaufleuten und Landvermessern zu erklären, wie man mit Dezimalzahlen statt mit komplizierten Brüchen rechnet. Er benutzte noch kein Komma: Er schrieb die Zahlen mit nummerierten Kreisen!</p>\n<p>Das Komma und der Dezimalpunkt verbreiteten sich wenige Jahre später, auch dank des Schotten <b>John Napier</b> (Anfang des 17. Jahrhunderts), dem Erfinder der Logarithmen.</p>"
  },
  {
   "type": "remember",
   "title": "Zum Merken",
   "html": "<ul>\n<li>1 = 10 Zehntel = 100 Hundertstel = 1000 Tausendstel.</li>\n<li>Links vom Komma die <b>ganzen Stellen</b>, rechts die <b>Nachkommastellen</b> (z, h, t).</li>\n<li><b>Endnullen</b> ändern den Wert nicht: 0,5 = 0,50 = 0,500.</li>\n<li>Vergleichen: ganze Stellen, dann Zehntel, Hundertstel, Tausendstel.</li>\n<li>Addition und Subtraktion: <b>Komma unter Komma</b>.</li>\n<li>× 10, 100, 1000: Komma um 1, 2, 3 Stellen nach <b>rechts</b>; : 10, 100, 1000: nach <b>links</b>.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Andere Wege, Dezimalzahlen zu verstehen",
   "intro": "Wenn dich das Komma verwirrt, versuche Dezimalzahlen als Geld, als Maße, als 3D-Würfel oder auf einem besonderen Abakus zu sehen.",
   "tabs": [
    {
     "label": "💶 Euro und Cent",
     "html": "<p>Der einfachste Weg, Dezimalzahlen zu verstehen, ist das <b>Geld</b>:</p>\n<ul>\n<li>1 € = <b>10 Münzen zu 10 Cent</b> → jede 10-Cent-Münze ist <b>ein Zehntel</b> Euro (0,10 €);</li>\n<li>1 € = <b>100 Münzen zu 1 Cent</b> → jeder Cent ist <b>ein Hundertstel</b> Euro (0,01 €).</li>\n</ul>\n<p>Also sind <b>3,45 €</b> = 3 Münzen zu 1 € + 4 Münzen zu 10 Cent + 5 Münzen zu 1 Cent.</p>\n<p>Und die Falle 0,5 oder 0,45? Denk ans Geld: <b>50 Cent</b> oder <b>45 Cent</b>? Klar: 0,50 € ist mehr!</p>",
     "svg": "<svg viewBox=\"0 0 600 200\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"200\" fill=\"#fefce8\"/>\n<g stroke=\"#a16207\" stroke-width=\"3\">\n<circle cx=\"60\" cy=\"80\" r=\"40\" fill=\"#e5e7eb\"/><circle cx=\"60\" cy=\"80\" r=\"27\" fill=\"#fbbf24\"/>\n<circle cx=\"150\" cy=\"80\" r=\"40\" fill=\"#e5e7eb\"/><circle cx=\"150\" cy=\"80\" r=\"27\" fill=\"#fbbf24\"/>\n<circle cx=\"240\" cy=\"80\" r=\"40\" fill=\"#e5e7eb\"/><circle cx=\"240\" cy=\"80\" r=\"27\" fill=\"#fbbf24\"/>\n<circle cx=\"320\" cy=\"85\" r=\"24\" fill=\"#facc15\"/><circle cx=\"375\" cy=\"85\" r=\"24\" fill=\"#facc15\"/><circle cx=\"430\" cy=\"85\" r=\"24\" fill=\"#facc15\"/><circle cx=\"485\" cy=\"85\" r=\"24\" fill=\"#facc15\"/>\n</g>\n<g stroke=\"#9a3412\" stroke-width=\"2\" fill=\"#ea580c\">\n<circle cx=\"335\" cy=\"150\" r=\"12\"/><circle cx=\"370\" cy=\"150\" r=\"12\"/><circle cx=\"405\" cy=\"150\" r=\"12\"/><circle cx=\"440\" cy=\"150\" r=\"12\"/><circle cx=\"475\" cy=\"150\" r=\"12\"/>\n</g>\n<g font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1f2937\">\n<text x=\"60\" y=\"86\">1 €</text><text x=\"150\" y=\"86\">1 €</text><text x=\"240\" y=\"86\">1 €</text>\n<text x=\"320\" y=\"90\">10 ct</text><text x=\"375\" y=\"90\">10 ct</text><text x=\"430\" y=\"90\">10 ct</text><text x=\"485\" y=\"90\">10 ct</text>\n</g>\n<text x=\"150\" y=\"160\" font-size=\"22\" text-anchor=\"middle\" fill=\"#1f2937\">3 Einer</text>\n<text x=\"545\" y=\"90\" font-size=\"18\" fill=\"#1f2937\">4 z</text>\n<text x=\"510\" y=\"157\" font-size=\"18\" fill=\"#1f2937\">5 h</text>\n<text x=\"300\" y=\"192\" font-size=\"24\" text-anchor=\"middle\" fill=\"#b45309\" font-weight=\"bold\">= 3,45 €</text>\n</svg>"
    },
    {
     "label": "🧊 Die 3D-Würfel als Dezimalzahlen",
     "html": "<p>Benutze die Zehnersystem-Blöcke, aber <b>gib den Stücken neue Namen</b>:</p>\n<ul>\n<li>die <b>Platte</b> (100 Würfel) = <b>1 Ganzes</b>;</li>\n<li>die <b>Stange</b> (10 Würfel) = <b>1 Zehntel</b> (0,1);</li>\n<li>der <b>Würfel</b> = <b>1 Hundertstel</b> (0,01).</li>\n</ul>\n<p>Das Modell zeigt hier 245 Würfel: Mit den neuen Namen sind das 2 Ganze, 4 Zehntel und 5 Hundertstel = <b>2,45</b>! Bewege den Regler und lies die Zahl als Dezimalzahl: Setze einfach das Komma nach der Hunderterziffer.</p>",
     "scene": "blocks",
     "options": {
      "mode": "base10",
      "value": 245
     }
    },
    {
     "label": "🧮 Der Abakus mit Komma",
     "html": "<p>Stell dir auf diesem Abakus ein <b>Komma</b> nach dem ersten Stab vor: Die Stäbe sind <b>E</b> (Einer), <b>z</b> (Zehntel), <b>h</b> (Hundertstel), <b>t</b> (Tausendstel).</p>\n<p>Die gezeigte Zahl 3254 liest man also als <b>3,254</b>: 3 Einer, 2 Zehntel, 5 Hundertstel, 4 Tausendstel. Versuche, 1 Tausendstel hinzuzufügen, wenn schon 9 da sind: Schau dir den Wechsel zu den Hundertsteln an!</p>",
     "widget": "abacus",
     "options": {
      "columns": [
       "E",
       "z",
       "h",
       "t"
      ],
      "value": 3254
     }
    },
    {
     "label": "📏 Das Maßband",
     "html": "<p>Nimm ein Maßband oder ein Lineal: Es ist eine fertige <b>Zahlengerade für Dezimalzahlen</b>!</p>\n<ul>\n<li>zwischen 0 und 1 Meter gibt es 10 große Striche: die <b>Dezimeter</b> = Zehntel eines Meters (0,1 m);</li>\n<li>jeder Dezimeter hat 10 Striche: die <b>Zentimeter</b> = Hundertstel eines Meters (0,01 m);</li>\n<li>jeder Zentimeter hat 10 kleine Kerben: die <b>Millimeter</b> = Tausendstel eines Meters (0,001 m).</li>\n</ul>\n<p>Übung: Finde auf dem Maßband 0,3 m (30 cm), 0,75 m (75 cm), 0,08 m (8 cm). Du wirst merken, dass 0,08 <b>viel näher bei null</b> liegt als 0,3, obwohl „8 größer aussieht als 3“.</p>"
    },
    {
     "label": "🗣️ Ziffer für Ziffer lesen",
     "html": "<p>Auf Englisch schreibt man 3,25 als <b>3.25</b> und liest <i>„three <b>point</b> two five“</i>: Die Nachkommastellen werden <b>eine nach der anderen</b> gelesen.</p>\n<p>Diese Art zu lesen hilft, einen häufigen Fehler zu vermeiden: „null Komma fünf“ gegen „null Komma fünfundvierzig“ lässt uns an 5 und 45 denken. Liest man Ziffer für Ziffer, „null Komma fünf“ und „null Komma vier fünf“, sieht man sofort, dass die erste Ziffer nach dem Komma, 5 gegen 4, entscheidet, welche Zahl größer ist!</p>\n<p>Probiere es so: <i>null Komma vier fünf</i> und nicht „null Komma fünfundvierzig“.</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Landkarte der Dezimalzahlen",
   "nodes": [
    {
     "id": "unita",
     "label": "Ganzes",
     "x": 50,
     "y": 6,
     "color": "#2563eb",
     "html": "Die Zahl 1: das Ganze, das wir teilen wollen.",
     "why": "Im Dezimalsystem ist jede Stelle 10-mal so viel wert wie die Stelle rechts davon. Setzt man diese Regel „über“ die Einer hinaus nach rechts fort, entstehen die Zehntel, Hundertstel, Tausendstel."
    },
    {
     "id": "frazdec",
     "label": "Dezimalbrüche",
     "x": 20,
     "y": 28,
     "color": "#16a34a",
     "html": "Brüche mit dem Nenner 10, 100, 1000: 3/10, 25/100 …",
     "why": "Sie sind die Brücke zwischen Brüchen und Dezimalzahlen: 3/10 = 0,3. Vor Stevin rechnete man mit Brüchen, die viel mühsamer zu addieren und zu vergleichen waren."
    },
    {
     "id": "decimi",
     "label": "Zehntel, Hundertstel, Tausendstel",
     "x": 50,
     "y": 30,
     "color": "#f59e0b",
     "html": "0,1 – 0,01 – 0,001: Jede Stelle ist 10-mal kleiner als die vorige.",
     "why": "Es ist dieselbe 10er-Regel wie bei Zehnern und Hundertern, nur „umgekehrt“ angewandt. Auch die Maßeinheiten (dm, cm, mm) folgen dieser Regel seit 1795, als Frankreich das <b>metrische System</b> einführte."
    },
    {
     "id": "virgola",
     "label": "Das Komma",
     "x": 80,
     "y": 28,
     "color": "#ef4444",
     "html": "Es trennt die ganzen Stellen von den Nachkommastellen.",
     "why": "Simon Stevin (1585) benutzte Kreise; John Napier verbreitete Punkt/Komma Anfang des 17. Jahrhunderts. In Deutschland und Italien benutzt man das Komma, in den angelsächsischen Ländern den Punkt: Seit 2003 erlaubt das Internationale Einheitensystem beides."
    },
    {
     "id": "confronto",
     "label": "Vergleichen",
     "x": 20,
     "y": 60,
     "color": "#a855f7",
     "html": "Ganze Stellen, dann Zehntel, Hundertstel, Tausendstel; 0,5 = 0,50.",
     "why": "Das funktioniert dank des Stellenwerts: 1 Zehntel ist mehr wert als 9 Hundertstel (10 Hundertstel &gt; 9 Hundertstel). Endnullen ändern nichts, weil sie „0 Teile“ dieser Stelle bedeuten."
    },
    {
     "id": "operazioni",
     "label": "Addition und Subtraktion",
     "x": 50,
     "y": 62,
     "color": "#0ea5e9",
     "html": "Komma unter Komma, dann rechnet man wie mit ganzen Zahlen.",
     "why": "Man kann nur Gleiches addieren: Zehntel mit Zehnteln, Hundertstel mit Hundertsteln, wie Einer mit Einern. Wenn man die Kommas untereinander schreibt, stehen die Stellen richtig."
    },
    {
     "id": "x10",
     "label": "× und : mit 10, 100, 1000",
     "x": 80,
     "y": 60,
     "color": "#14b8a6",
     "html": "Das Komma wandert nach rechts (×) oder nach links (:).",
     "why": "Beim Multiplizieren mit 10 wird jede Ziffer 10-mal größer: Aus Zehnteln werden Einer, aus Einern Zehner … Die Ziffern „rutschen“ eine Stelle weiter, und es sieht aus, als wanderte das Komma."
    },
    {
     "id": "vita",
     "label": "Geld und Maße",
     "x": 50,
     "y": 88,
     "color": "#64748b",
     "html": "Euro und Cent, Meter und Zentimeter, Grad und Zehntel.",
     "why": "Der Euro (im Umlauf seit 2002) und das metrische System sind dezimal, damit man mit denselben Regeln wie bei Zahlen einfach rechnen kann."
    }
   ],
   "edges": [
    [
     "unita",
     "decimi",
     "geteilt in 10, 100, 1000"
    ],
    [
     "frazdec",
     "decimi",
     "werden geschrieben als"
    ],
    [
     "decimi",
     "virgola",
     "nach dem"
    ],
    [
     "decimi",
     "confronto",
     ""
    ],
    [
     "virgola",
     "operazioni",
     "untereinander schreiben"
    ],
    [
     "virgola",
     "x10",
     "wandert"
    ],
    [
     "operazioni",
     "vita",
     "braucht man für"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Vergleichen und Rechnen",
   "questions": [
    {
     "type": "mc",
     "q": "Welche Zahl ist größer?",
     "options": [
      "0,8",
      "0,75",
      "0,09"
     ],
     "answer": 0,
     "explain": "0,8 = 0,80 > 0,75 > 0,09."
    },
    {
     "type": "num",
     "q": "Wie viel ist 4,6 + 2,75?",
     "answer": 7.35,
     "explain": "4,60 + 2,75 = 7,35 (Komma unter Komma)."
    },
    {
     "type": "num",
     "q": "Wie viel ist 0,36 × 100?",
     "answer": 36,
     "explain": "Komma um 2 Stellen nach rechts: 36."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Dezimalzahl",
   "d": "Zahl mit ganzen Stellen und Nachkommastellen, getrennt durch ein Komma."
  },
  {
   "t": "Zehntel",
   "d": "Einer der 10 gleichen Teile des Ganzen: 0,1."
  },
  {
   "t": "Hundertstel",
   "d": "Einer der 100 gleichen Teile des Ganzen: 0,01."
  },
  {
   "t": "Tausendstel",
   "d": "Einer der 1000 gleichen Teile des Ganzen: 0,001."
  },
  {
   "t": "Dezimalbruch",
   "d": "Bruch mit dem Nenner 10, 100, 1000 …"
  },
  {
   "t": "Ganze Stellen",
   "d": "Die Ziffern links vom Komma."
  },
  {
   "t": "Nachkommastellen",
   "d": "Die Ziffern rechts vom Komma."
  },
  {
   "t": "Komma",
   "d": "Zeichen, das die ganzen Stellen von den Nachkommastellen trennt (in angelsächsischen Ländern benutzt man den Punkt)."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Schreibe den Bruch 7/10 als Dezimalzahl.",
    "answer": 0.7,
    "explain": "7 Zehntel = 0,7."
   },
   {
    "type": "num",
    "q": "Schreibe als Dezimalzahl: 4 Ganze und 3 Hundertstel.",
    "answer": 4.03,
    "explain": "4,03: Die Null hält den Platz der Zehntel frei."
   },
   {
    "type": "mc",
    "q": "In 12,384 steht die Ziffer 8 für …",
    "options": [
     "8 Zehntel",
     "8 Hundertstel",
     "8 Tausendstel"
    ],
    "answer": 1,
    "explain": "Zweite Ziffer nach dem Komma: Hundertstel."
   },
   {
    "type": "tf",
    "q": "0,40 und 0,4 sind dieselbe Zahl.",
    "answer": true,
    "explain": "Endnullen ändern den Wert nicht."
   },
   {
    "type": "mc",
    "q": "Welche Zahl ist kleiner?",
    "options": [
     "0,3",
     "0,29",
     "0,31"
    ],
    "answer": 1,
    "explain": "0,29 hat 2 Zehntel, die anderen 3."
   },
   {
    "type": "num",
    "q": "Wie viel ist 10 − 3,6?",
    "answer": 6.4,
    "explain": "10,0 − 3,6 = 6,4."
   },
   {
    "type": "num",
    "q": "Wie viel ist 52,7 : 10?",
    "answer": 5.27,
    "explain": "Komma um 1 Stelle nach links."
   },
   {
    "type": "num",
    "q": "Wie viele Tausendstel sind in 1 Zehntel?",
    "answer": 100,
    "explain": "1 Zehntel = 10 Hundertstel = 100 Tausendstel."
   },
   {
    "type": "order",
    "q": "Ordne vom kleinsten zum größten.",
    "items": [
     "0,05",
     "0,5",
     "0,55",
     "5,05"
    ],
    "explain": "Vergleiche die ganzen Stellen, dann die Zehntel, dann die Hundertstel."
   },
   {
    "type": "num",
    "q": "Ein Brötchen kostet 2,35 € und ein Getränk 1,90 €. Wie viel gibst du insgesamt aus?",
    "answer": 4.25,
    "unit": "€",
    "explain": "2,35 + 1,90 = 4,25 €."
   }
  ],
  "gen": [
   [
    "decAdd",
    2
   ],
   [
    "decMul",
    1
   ]
  ]
 }
});
