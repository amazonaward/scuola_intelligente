TOPIC('de', {
 "id": "p5-tec-dati-binario",
 "title": "Daten und Binärcode",
 "intro": "Ein Computer kann dir ein Foto zeigen, dich ein Lied hören lassen, deinen Namen schreiben … und doch kennt er in seinem Inneren nur <b>zwei Symbole</b>: <b>0</b> und <b>1</b>. Wie geht das? Heute entdecken wir den <b>Binärcode</b>, die <b>Bits</b> und die <b>Bytes</b> und lernen, Zahlen, Buchstaben und Zeichnungen so zu schreiben, wie ein Computer sie „sieht“. 💻",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "1. Was sind Daten?",
   "html": "<p><b>Daten</b> sind Informationen: eine Zahl, ein Wort, die Farbe eines Punktes in einem Foto, ein Ton, die Temperatur von heute.</p>\n<p>Der Computer funktioniert mit <b>Strom</b>. Im Inneren stecken Milliarden winziger Schalter, die <b>Transistoren</b>, die nur zwei Zustände haben können:</p>\n<ul>\n<li>💡 <b>an</b> (es fließt Strom) = <b>1</b></li>\n<li>⚫ <b>aus</b> (es fließt kein Strom) = <b>0</b></li>\n</ul>\n<p>Jede 0 oder 1 heißt <b>Bit</b> (von <i>BInary digiT</i>, „Binärziffer“). Es ist die kleinste Information, die es gibt: ein Ja oder ein Nein.</p>\n<p>Mit nur einem Bit kann man wenig sagen (ja/nein, an/aus). Aber wenn man <b>viele Bits hintereinander</b> setzt, kann man <b>alles</b> darstellen!</p>"
  },
  {
   "type": "text",
   "title": "2. Wie viele Kombinationen?",
   "html": "<p>Jedes zusätzliche Bit <b>verdoppelt</b> die möglichen Kombinationen:</p>\n<table>\n<tr><th>Bits</th><th>Kombinationen</th><th>Anzahl</th></tr>\n<tr><td>1</td><td>0 · 1</td><td>2</td></tr>\n<tr><td>2</td><td>00 · 01 · 10 · 11</td><td>4</td></tr>\n<tr><td>3</td><td>000 · 001 · 010 · 011 · 100 · 101 · 110 · 111</td><td>8</td></tr>\n<tr><td>4</td><td>…</td><td>16</td></tr>\n<tr><td><b>8</b></td><td>…</td><td><b>256</b></td></tr>\n</table>\n<p>Eine Gruppe von <b>8 Bits</b> heißt <b>Byte</b>. Mit einem Byte kann man <b>256</b> verschiedene Werte schreiben (von 0 bis 255): genug für alle Groß- und Kleinbuchstaben, die Ziffern und die Satzzeichen!</p>"
  },
  {
   "type": "text",
   "title": "3. Binär zählen",
   "html": "<p>Wir zählen im <b>Zehnersystem</b>: Wir benutzen 10 Ziffern (0–9), und jede Stelle ist 10-mal so viel wert wie die rechts daneben (Einer, Zehner, Hunderter …).</p>\n<p>Der Computer zählt im <b>Zweiersystem</b>: Er benutzt 2 Ziffern (0 und 1), und jede Stelle ist <b>doppelt</b> so viel wert wie die rechts daneben:</p>\n<table>\n<tr><th>128</th><th>64</th><th>32</th><th>16</th><th>8</th><th>4</th><th>2</th><th>1</th></tr>\n</table>\n<p><b>Von binär zu dezimal</b>: Addiere die Werte der Stellen, an denen eine <b>1</b> steht.</p>\n<p>Beispiel: <b>1101</b> ➜ 8 + 4 + 0 + 1 = <b>13</b>.</p>\n<p><b>Von dezimal zu binär</b> (Methode der Division durch 2): Teile durch 2 und schreibe den Rest auf; mach weiter, bis du bei 0 ankommst; dann lies die Reste <b>von unten nach oben</b>.</p>\n<p>Beispiel: 13 : 2 = 6 Rest <b>1</b> · 6 : 2 = 3 Rest <b>0</b> · 3 : 2 = 1 Rest <b>1</b> · 1 : 2 = 0 Rest <b>1</b> ➜ von unten gelesen: <b>1101</b>. ✅</p>\n<p>Die ersten Zahlen: 0 = 0 · 1 = 1 · 2 = 10 · 3 = 11 · 4 = 100 · 5 = 101 · 6 = 110 · 7 = 111 · 8 = 1000.</p>\n<p>⚠️ Binär liest man „10“ <b>nicht</b> als „zehn“, sondern als „eins-null“, und es ist 2 wert!</p>"
  },
  {
   "type": "svg",
   "title": "Die Binär-Glühbirnen",
   "caption": "Jede leuchtende Glühbirne zählt so viel wie die Zahl darunter. Hier leuchten 8, 4 und 1: 8 + 4 + 1 = 13, also 1101.",
   "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#0f172a\"/>\n<text x=\"300\" y=\"34\" font-size=\"20\" text-anchor=\"middle\" fill=\"#f8fafc\" font-weight=\"bold\">Die Zahl 13 binär</text>\n<g>\n<circle cx=\"120\" cy=\"105\" r=\"45\" fill=\"#facc15\"/><rect x=\"105\" y=\"148\" width=\"30\" height=\"20\" fill=\"#94a3b8\"/>\n<text x=\"120\" y=\"115\" font-size=\"30\" text-anchor=\"middle\" fill=\"#713f12\" font-weight=\"bold\">1</text>\n<text x=\"120\" y=\"200\" font-size=\"22\" text-anchor=\"middle\" fill=\"#facc15\" font-weight=\"bold\">8</text>\n</g>\n<g>\n<circle cx=\"240\" cy=\"105\" r=\"45\" fill=\"#facc15\"/><rect x=\"225\" y=\"148\" width=\"30\" height=\"20\" fill=\"#94a3b8\"/>\n<text x=\"240\" y=\"115\" font-size=\"30\" text-anchor=\"middle\" fill=\"#713f12\" font-weight=\"bold\">1</text>\n<text x=\"240\" y=\"200\" font-size=\"22\" text-anchor=\"middle\" fill=\"#facc15\" font-weight=\"bold\">4</text>\n</g>\n<g>\n<circle cx=\"360\" cy=\"105\" r=\"45\" fill=\"#334155\" stroke=\"#64748b\" stroke-width=\"3\"/><rect x=\"345\" y=\"148\" width=\"30\" height=\"20\" fill=\"#94a3b8\"/>\n<text x=\"360\" y=\"115\" font-size=\"30\" text-anchor=\"middle\" fill=\"#94a3b8\" font-weight=\"bold\">0</text>\n<text x=\"360\" y=\"200\" font-size=\"22\" text-anchor=\"middle\" fill=\"#64748b\" font-weight=\"bold\">2</text>\n</g>\n<g>\n<circle cx=\"480\" cy=\"105\" r=\"45\" fill=\"#facc15\"/><rect x=\"465\" y=\"148\" width=\"30\" height=\"20\" fill=\"#94a3b8\"/>\n<text x=\"480\" y=\"115\" font-size=\"30\" text-anchor=\"middle\" fill=\"#713f12\" font-weight=\"bold\">1</text>\n<text x=\"480\" y=\"200\" font-size=\"22\" text-anchor=\"middle\" fill=\"#facc15\" font-weight=\"bold\">1</text>\n</g>\n<text x=\"300\" y=\"240\" font-size=\"22\" text-anchor=\"middle\" fill=\"#f8fafc\" font-weight=\"bold\">8 + 4 + 0 + 1 = 13</text>\n</svg>"
  },
  {
   "type": "widget",
   "title": "Jede Stelle ist doppelt so viel wert",
   "widget": "numberLine",
   "caption": "Auf dem Zahlenstrahl sind die „Werte“ der Binärstellen markiert: 1, 2, 4, 8, 16, 32, 64. Sieh, wie jeder Sprung doppelt so groß ist wie der vorherige!",
   "options": {
    "min": 0,
    "max": 64,
    "step": 1,
    "marks": [
     1,
     2,
     4,
     8,
     16,
     32,
     64
    ]
   }
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Bits und Zahlen",
   "questions": [
    {
     "type": "num",
     "q": "Wie viel ist die Binärzahl 101 im Dezimalsystem wert?",
     "answer": 5,
     "tol": 0,
     "explain": "4 + 0 + 1 = 5."
    },
    {
     "type": "num",
     "q": "Wie viele Bits hat ein Byte?",
     "answer": 8,
     "tol": 0,
     "unit": "Bit",
     "explain": "1 Byte = 8 Bit."
    },
    {
     "type": "mc",
     "q": "Wie schreibt man 6 binär?",
     "options": [
      "110",
      "101",
      "111"
     ],
     "answer": 0,
     "explain": "4 + 2 + 0 = 6 ➜ 110."
    }
   ]
  },
  {
   "type": "text",
   "title": "4. Buchstaben, Bilder und Töne",
   "html": "<p><b>🔤 Die Buchstaben</b>: Jedes Zeichen hat eine Nummer, festgelegt durch einen Code, der für alle Computer gleich ist. Der erste berühmte Code ist der <b>ASCII</b> (1963): <b>A = 65</b>, B = 66, C = 67 … a = 97, Leerzeichen = 32. Die Nummer wird dann binär geschrieben: A = 65 = <b>01000001</b>. Heute benutzt man <b>Unicode</b>, der mehr als 150.000 Zeichen aus allen Sprachen der Welt enthält, auch die Emojis 😀!</p>\n<p><b>🖼️ Die Bilder</b>: Ein Foto ist in ein Gitter aus Quadraten geteilt, die <b>Pixel</b>. Für jeden Pixel speichert der Computer die Farbe mit drei Zahlen: wie viel <b>Rot</b>, wie viel <b>Grün</b> und wie viel <b>Blau</b> (<b>RGB</b>), jede von 0 bis 255, also je ein Byte. Mischt man sie, ergeben sich mehr als 16 Millionen Farben!</p>\n<p><b>🎵 Die Töne</b>: Das Mikrofon misst tausende Male pro Sekunde, wie stark die Luft schwingt (bei der Musik auf CDs: 44.100-mal pro Sekunde), und speichert jede Messung als Zahl.</p>\n<p>Alles wird am Ende zu einer sehr langen Reihe aus 0 und 1.</p>"
  },
  {
   "type": "svg",
   "title": "Eine Zeichnung aus Bits",
   "caption": "Jede Zeile ist ein Byte: 1 = farbiges Quadrat, 0 = weiß. So speichert der Computer, vereinfacht gesagt, ein Schwarz-Weiß-Bild.",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/>\n<g font-size=\"16\" font-family=\"monospace\" fill=\"#0f172a\">\n<text x=\"20\" y=\"48\">0 1 1 0 0 1 1 0</text>\n<text x=\"20\" y=\"78\">1 1 1 1 1 1 1 1</text>\n<text x=\"20\" y=\"108\">1 1 1 1 1 1 1 1</text>\n<text x=\"20\" y=\"138\">1 1 1 1 1 1 1 1</text>\n<text x=\"20\" y=\"168\">0 1 1 1 1 1 1 0</text>\n<text x=\"20\" y=\"198\">0 0 1 1 1 1 0 0</text>\n<text x=\"20\" y=\"228\">0 0 0 1 1 0 0 0</text>\n<text x=\"20\" y=\"258\">0 0 0 0 0 0 0 0</text>\n</g>\n<text x=\"225\" y=\"150\" font-size=\"34\" fill=\"#64748b\">➜</text>\n<g stroke=\"#cbd5e1\" stroke-width=\"1\">\n<rect x=\"300\" y=\"30\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"330\" y=\"30\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"360\" y=\"30\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"390\" y=\"30\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"420\" y=\"30\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"450\" y=\"30\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"480\" y=\"30\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"510\" y=\"30\" width=\"30\" height=\"30\" fill=\"#ffffff\"/>\n<rect x=\"300\" y=\"60\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"330\" y=\"60\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"360\" y=\"60\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"390\" y=\"60\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"420\" y=\"60\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"450\" y=\"60\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"480\" y=\"60\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"510\" y=\"60\" width=\"30\" height=\"30\" fill=\"#ef4444\"/>\n<rect x=\"300\" y=\"90\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"330\" y=\"90\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"360\" y=\"90\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"390\" y=\"90\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"420\" y=\"90\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"450\" y=\"90\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"480\" y=\"90\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"510\" y=\"90\" width=\"30\" height=\"30\" fill=\"#ef4444\"/>\n<rect x=\"300\" y=\"120\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"330\" y=\"120\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"360\" y=\"120\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"390\" y=\"120\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"420\" y=\"120\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"450\" y=\"120\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"480\" y=\"120\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"510\" y=\"120\" width=\"30\" height=\"30\" fill=\"#ef4444\"/>\n<rect x=\"300\" y=\"150\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"330\" y=\"150\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"360\" y=\"150\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"390\" y=\"150\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"420\" y=\"150\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"450\" y=\"150\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"480\" y=\"150\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"510\" y=\"150\" width=\"30\" height=\"30\" fill=\"#ffffff\"/>\n<rect x=\"300\" y=\"180\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"330\" y=\"180\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"360\" y=\"180\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"390\" y=\"180\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"420\" y=\"180\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"450\" y=\"180\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"480\" y=\"180\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"510\" y=\"180\" width=\"30\" height=\"30\" fill=\"#ffffff\"/>\n<rect x=\"300\" y=\"210\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"330\" y=\"210\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"360\" y=\"210\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"390\" y=\"210\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"420\" y=\"210\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"450\" y=\"210\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"480\" y=\"210\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"510\" y=\"210\" width=\"30\" height=\"30\" fill=\"#ffffff\"/>\n<rect x=\"300\" y=\"240\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"330\" y=\"240\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"360\" y=\"240\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"390\" y=\"240\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"420\" y=\"240\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"450\" y=\"240\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"480\" y=\"240\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"510\" y=\"240\" width=\"30\" height=\"30\" fill=\"#ffffff\"/>\n</g>\n</svg>"
  },
  {
   "type": "text",
   "title": "5. Wie schwer sind Daten?",
   "html": "<p>So wie es zu den Metern die Kilometer gibt, haben auch die Bytes ihre Vielfachen:</p>\n<table>\n<tr><th>Einheit</th><th>Wert (ungefähr)</th><th>Was hineinpasst</th></tr>\n<tr><td><b>1 Byte</b> (B)</td><td>8 Bit</td><td>ein Buchstabe</td></tr>\n<tr><td><b>1 Kilobyte</b> (kB)</td><td>1.000 Byte</td><td>eine halbe Seite Text</td></tr>\n<tr><td><b>1 Megabyte</b> (MB)</td><td>1.000 kB = 1 Million Byte</td><td>ein ganzes Buch nur aus Text oder ein Foto</td></tr>\n<tr><td><b>1 Gigabyte</b> (GB)</td><td>1.000 MB = 1 Milliarde Byte</td><td>etwa eine Stunde Film</td></tr>\n<tr><td><b>1 Terabyte</b> (TB)</td><td>1.000 GB</td><td>hunderttausende Fotos</td></tr>\n</table>\n<p>Hinweis: In der Informatik sind die Vielfachen manchmal <b>1.024</b> statt 1.000 wert (weil 1024 = 2<sup>10</sup>). Für den Moment genügt es, sich „ungefähr tausend“ zu merken.</p>"
  },
  {
   "type": "example",
   "title": "Praktisches Beispiel: Schreibe deinen Namen binär",
   "html": "<p>Probieren wir es mit <b>CIAO</b>. Wir benutzen den ASCII-Code der Großbuchstaben (A = 65, B = 66 … jeder Buchstabe +1):</p>\n<table>\n<tr><th>Buchstabe</th><th>Code</th><th>Binär (8 Bit)</th></tr>\n<tr><td>C</td><td>67</td><td>01000011</td></tr>\n<tr><td>I</td><td>73</td><td>01001001</td></tr>\n<tr><td>A</td><td>65</td><td>01000001</td></tr>\n<tr><td>O</td><td>79</td><td>01001111</td></tr>\n</table>\n<p>Prüfe das C: 64 + 2 + 1 = 67 ✅. Alle Großbuchstaben beginnen mit <b>010</b>; die anderen 5 Ziffern geben die Stelle im Alphabet an (C ist der 3. Buchstabe: 00011 = 3).</p>\n<p>Probiere es jetzt mit deinem Namen! 4 Buchstaben „wiegen“ so 4 Byte = 32 Bit.</p>"
  },
  {
   "type": "example",
   "title": "Praktisches Beispiel: ein Spiel mit Binärkarten",
   "html": "<p>Nimm 5 Kärtchen und zeichne Punkte darauf: <b>16, 8, 4, 2, 1</b>. Lege sie nebeneinander, mit den Punkten sichtbar (1) oder umgedreht (0).</p>\n<ul>\n<li>Du willst <b>10</b> legen? Dreh nur 8 und 2 nach oben ➜ <b>01010</b>.</li>\n<li>Du willst <b>21</b> legen? 16 + 4 + 1 ➜ <b>10101</b>.</li>\n<li>Was ist die größte Zahl, die du legen kannst? Alle nach oben: 16 + 8 + 4 + 2 + 1 = <b>31</b> = 11111.</li>\n</ul>\n<p>Diese Aktivität kommt von <b>CS Unplugged</b>, einem neuseeländischen Projekt, um Informatik <b>ohne Computer</b> zu lernen.</p>"
  },
  {
   "type": "remember",
   "title": "Merk dir",
   "html": "<ul>\n<li><b>Bit</b> = 0 oder 1, die kleinste Information. <b>Byte</b> = 8 Bit = 256 Werte.</li>\n<li>Binär ➜ dezimal: Addiere die Werte (1, 2, 4, 8, 16 …), wo eine 1 steht.</li>\n<li>Dezimal ➜ binär: Teile durch 2 und lies die Reste von unten nach oben.</li>\n<li>Buchstaben = Codes (ASCII/Unicode); Bilder = Pixel mit RGB; Töne = Messungen der Schwingung.</li>\n</ul>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du, dass … das Binärsystem älter ist als der Computer?",
   "html": "<p>Der deutsche Mathematiker <b>Gottfried Wilhelm Leibniz</b> beschrieb das Binärsystem im Jahr <b>1703</b>, mehr als 200 Jahre vor dem ersten Computer! Ihn faszinierte, dass man mit nur 0 und 1 alle Zahlen schreiben konnte. 1854 erfand der Engländer <b>George Boole</b> eine Algebra, die nur aus „wahr“ und „falsch“ bestand, und 1937 begriff der Amerikaner <b>Claude Shannon</b>, dass man sie mit elektrischen Schaltkreisen bauen konnte: Die Idee des digitalen Computers war geboren.</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du, dass … auch die Brailleschrift ein Binärcode ist?",
   "html": "<p>Die <b>Brailleschrift</b>, 1824 vom Franzosen Louis Braille erfunden (der als Kind erblindet war), benutzt Zellen mit <b>6 erhabenen Punkten</b>: Jeder Punkt ist da (1) oder nicht da (0). Wie viele Kombinationen gibt es? 2 × 2 × 2 × 2 × 2 × 2 = <b>64</b>, genug für alle Buchstaben, Zahlen und Satzzeichen. Louis Braille war damals erst 15 Jahre alt!</p>"
  },
  {
   "type": "alternatives",
   "title": "Andere Wege zum Verstehen",
   "intro": "Das Binärsystem kommt uns nur seltsam vor, weil wir gewohnt sind, mit 10 Fingern zu zählen. Hier sind andere Wege.",
   "tabs": [
    {
     "label": "🖐️ Mit den Fingern zählen",
     "html": "<p>Mit den Fingern einer Hand kommst du normalerweise bis 5. Aber wenn jeder Finger ein Bit ist (hoch = 1, gesenkt = 0) und doppelt so viel wert ist wie der vorherige:</p>\n<ul>\n<li>Daumen = 1 · Zeigefinger = 2 · Mittelfinger = 4 · Ringfinger = 8 · kleiner Finger = 16</li>\n</ul>\n<p>Mit <b>einer Hand</b> kommst du bis <b>31</b>, mit zwei Händen bis <b>1023</b>! Probiere es: Für 3 hebst du Daumen und Zeigefinger; für 5 Daumen und Mittelfinger.</p>",
     "svg": "<svg viewBox=\"0 0 600 220\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"220\" fill=\"#fef9c3\"/>\n<rect x=\"190\" y=\"120\" width=\"220\" height=\"90\" rx=\"40\" fill=\"#fdba74\"/>\n<rect x=\"150\" y=\"110\" width=\"40\" height=\"70\" rx=\"20\" fill=\"#fdba74\" transform=\"rotate(-35 170 145)\"/>\n<rect x=\"205\" y=\"30\" width=\"36\" height=\"100\" rx=\"18\" fill=\"#fdba74\"/>\n<rect x=\"250\" y=\"15\" width=\"36\" height=\"115\" rx=\"18\" fill=\"#fdba74\"/>\n<rect x=\"295\" y=\"25\" width=\"36\" height=\"105\" rx=\"18\" fill=\"#fdba74\"/>\n<rect x=\"340\" y=\"50\" width=\"34\" height=\"80\" rx=\"17\" fill=\"#fdba74\"/>\n<g font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#7c2d12\">\n<text x=\"140\" y=\"110\">1</text><text x=\"223\" y=\"25\">2</text><text x=\"268\" y=\"12\">4</text><text x=\"313\" y=\"20\">8</text><text x=\"357\" y=\"45\">16</text>\n</g>\n<text x=\"500\" y=\"110\" font-size=\"18\" text-anchor=\"middle\" fill=\"#7c2d12\" font-weight=\"bold\">alle oben =</text>\n<text x=\"500\" y=\"140\" font-size=\"26\" text-anchor=\"middle\" fill=\"#b91c1c\" font-weight=\"bold\">31</text>\n</svg>"
    },
    {
     "label": "🧮 Wie der Abakus",
     "html": "<p>Du kennst den Abakus: In der Einerspalte nimmst du bei 10 Kugeln alle weg und legst 1 in die Zehnerspalte. Das Binärsystem ist genauso, aber der „Tausch“ passiert bei <b>2</b>: Sobald du 2 Kugeln in einer Spalte hast, nimmst du sie weg und legst 1 in die Spalte links davon.</p>\n<p>Probiere unten mit dem Abakus im Zehnersystem zu zählen, und stell dir vor, dass jede Spalte nur 0 oder 1 Kugel haben darf: Das ist das Binärsystem!</p>",
     "widget": "abacus",
     "options": {
      "columns": [
       "h",
       "da",
       "u"
      ],
      "value": 101
     }
    },
    {
     "label": "🔦 Nachrichten mit der Taschenlampe",
     "html": "<p>Auch andere Codes benutzen nur zwei Signale:</p>\n<ul>\n<li><b>Morsecode</b> (Samuel Morse, 1830er-Jahre): Punkt und Strich. SOS = · · · — — — · · ·</li>\n<li><b>I Ging</b> (das alte China, vor etwa 3000 Jahren): ganze und unterbrochene Linien in 6er-Gruppen = 64 Hexagramme. Leibniz studierte sie und sah darin sein Binärsystem!</li>\n<li><b>Flaggen auf Schiffen und Rauchzeichen</b>: da / nicht da.</li>\n</ul>\n<p>Probiere es mit einem Freund: mit der Taschenlampe, langes Licht = 1, kurzes Licht = 0. Schickt euch eine Zahl!</p>"
    },
    {
     "label": "🔗 Zuordnen",
     "html": "<p>Ordne jeder Binärzahl ihren Dezimalwert zu.</p>",
     "widget": "match",
     "options": {
      "pairs": [
       [
        "1",
        "1"
       ],
       [
        "10",
        "2"
       ],
       [
        "11",
        "3"
       ],
       [
        "100",
        "4"
       ],
       [
        "111",
        "7"
       ],
       [
        "1000",
        "8"
       ],
       [
        "1010",
        "10"
       ],
       [
        "1111",
        "15"
       ]
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Landkarte: vom Bit zum Computer",
   "nodes": [
    {
     "id": "bit",
     "label": "Bit (0/1)",
     "x": 50,
     "y": 8,
     "color": "#3b82f6",
     "html": "Die kleinste Informationseinheit.",
     "why": "Der Name <i>bit</i> (binary digit) wurde vom Mathematiker John Tukey vorgeschlagen und 1948 von <b>Claude Shannon</b> in seinem Artikel verwendet, der die „Informationstheorie“ begründete."
    },
    {
     "id": "trans",
     "label": "Transistor",
     "x": 15,
     "y": 30,
     "color": "#64748b",
     "html": "Elektronischer Schalter: an oder aus.",
     "why": "Er wurde <b>1947</b> in den Bell Labs (USA) von Bardeen, Brattain und Shockley erfunden, die dafür den Nobelpreis bekamen. Vorher benutzte man Röhren, so groß wie Glühbirnen. Heute enthält ein Prozessor Milliarden von Transistoren."
    },
    {
     "id": "base2",
     "label": "Zweiersystem",
     "x": 50,
     "y": 30,
     "color": "#a855f7",
     "html": "Jede Stelle ist doppelt so viel wert: 1, 2, 4, 8, 16 …",
     "why": "Von <b>Leibniz</b> 1703 beschrieben. Man benutzt es in Computern, weil es viel zuverlässiger ist, nur zwei elektrische Zustände (Strom / kein Strom) zu unterscheiden als zehn."
    },
    {
     "id": "boole",
     "label": "Boolesche Logik",
     "x": 85,
     "y": 30,
     "color": "#ef4444",
     "html": "Wahr/falsch, AND, OR, NOT.",
     "why": "<b>George Boole</b> (1854) verwandelte das Denken in Rechnungen mit 0 und 1. 1937 zeigte <b>Claude Shannon</b> mit 21 Jahren, dass Schaltkreise mit Schaltern diese Rechnungen ausführen konnten."
    },
    {
     "id": "byte",
     "label": "Byte = 8 Bit",
     "x": 30,
     "y": 55,
     "color": "#22c55e",
     "html": "256 Kombinationen: ein Zeichen.",
     "why": "Das Wort wurde 1956 von Werner Buchholz bei IBM erfunden. Die 8 Bit wurden mit dem IBM-Computer System/360 (1964) zum Standard, weil sie für Buchstaben, Zahlen und Symbole genügten."
    },
    {
     "id": "ascii",
     "label": "Codes: ASCII, Unicode",
     "x": 12,
     "y": 80,
     "color": "#16a34a",
     "html": "Jedes Zeichen hat eine Nummer.",
     "why": "Der <b>ASCII</b> (1963) wurde in den USA geschaffen, damit verschiedene Computer Texte austauschen konnten. Er enthielt nur das englische Alphabet, deshalb entstand 1991 <b>Unicode</b> für alle Sprachen der Welt."
    },
    {
     "id": "pixel",
     "label": "Pixel und RGB",
     "x": 42,
     "y": 80,
     "color": "#f97316",
     "html": "Bilder als Gitter aus Farben.",
     "why": "„Pixel“ kommt von <i>picture element</i>. Die Farben macht man aus Rot, Grün und Blau, weil das menschliche Auge drei Arten von „Sensoren“ (Zapfen) hat, die genau für diese Farben empfindlich sind."
    },
    {
     "id": "units",
     "label": "kB, MB, GB, TB",
     "x": 75,
     "y": 62,
     "color": "#eab308",
     "html": "Die Vielfachen des Bytes.",
     "why": "Man benutzt die Vorsilben des Internationalen Einheitensystems (Kilo = tausend, Mega = Million, Giga = Milliarde). In der Informatik stehen sie manchmal für Zweierpotenzen (1024): Deshalb entstanden 1998 die Namen Kibibyte, Mebibyte …"
    },
    {
     "id": "data",
     "label": "Daten",
     "x": 75,
     "y": 88,
     "color": "#0ea5e9",
     "html": "Texte, Fotos, Töne, Videos: Alles wird zu Zahlen.",
     "why": "Eine Information in Zahlen zu verwandeln, nennt man <b>digitalisieren</b> (von <i>digit</i>, Ziffer). Sind es erst einmal Zahlen, kann man Daten fehlerfrei kopieren, komprimieren und in die ganze Welt schicken."
    }
   ],
   "edges": [
    [
     "trans",
     "bit",
     "speichert"
    ],
    [
     "base2",
     "bit",
     "benutzt"
    ],
    [
     "boole",
     "bit",
     "rechnet mit"
    ],
    [
     "bit",
     "byte",
     "8 bilden"
    ],
    [
     "byte",
     "ascii",
     "kodiert"
    ],
    [
     "byte",
     "pixel",
     "färbt"
    ],
    [
     "byte",
     "units",
     "gemessen in"
    ],
    [
     "units",
     "data",
     "Menge an"
    ],
    [
     "pixel",
     "data",
     "ist eine Art von"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Codes und Maße",
   "questions": [
    {
     "type": "mc",
     "q": "Was bedeutet RGB?",
     "options": [
      "Rot, Gelb, Weiß",
      "Rot, Grün, Blau (Red, Green, Blue)",
      "Rasch, Groß, Binär"
     ],
     "answer": 1,
     "explain": "Red, Green, Blue: die drei Farben, die für jeden Pixel gemischt werden."
    },
    {
     "type": "tf",
     "q": "1 Megabyte ist größer als 1 Gigabyte.",
     "answer": false,
     "explain": "1 GB ≈ 1000 MB."
    },
    {
     "type": "num",
     "q": "Wie viele Kombinationen kann man mit 3 Bits bilden?",
     "answer": 8,
     "tol": 0,
     "explain": "2 × 2 × 2 = 8."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Datum (Daten)",
   "d": "Eine Information (Zahl, Text, Bild, Ton), die man speichern kann."
  },
  {
   "t": "Bit",
   "d": "Binärziffer: 0 oder 1."
  },
  {
   "t": "Byte",
   "d": "Gruppe aus 8 Bits; kann 256 Werte haben."
  },
  {
   "t": "Binärcode",
   "d": "System, das Informationen mit nur 0 und 1 darstellt."
  },
  {
   "t": "Zweiersystem",
   "d": "Zahlensystem mit zwei Ziffern, in dem jede Stelle doppelt so viel wert ist wie die vorherige."
  },
  {
   "t": "Transistor",
   "d": "Winziger elektronischer Schalter, der „Baustein“ der Computer."
  },
  {
   "t": "ASCII / Unicode",
   "d": "Codes, die jedem Zeichen eine Nummer zuweisen."
  },
  {
   "t": "Pixel",
   "d": "Das kleinste farbige Quadrat eines digitalen Bildes."
  },
  {
   "t": "RGB",
   "d": "Rot, Grün, Blau: die drei Grundfarben der Bilder auf dem Bildschirm."
  },
  {
   "t": "Digitalisieren",
   "d": "Eine Information in Zahlen verwandeln, die der Computer benutzen kann."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Wie viel ist die Binärzahl 1010 im Dezimalsystem wert?",
    "answer": 10,
    "tol": 0,
    "explain": "8 + 0 + 2 + 0 = 10."
   },
   {
    "type": "num",
    "q": "Wie viel ist die Binärzahl 11111 im Dezimalsystem wert?",
    "answer": 31,
    "tol": 0,
    "explain": "16 + 8 + 4 + 2 + 1 = 31."
   },
   {
    "type": "text",
    "q": "Schreibe 9 binär.",
    "answer": [
     "1001",
     "00001001"
    ],
    "explain": "9 = 8 + 1 ➜ 1001."
   },
   {
    "type": "mc",
    "q": "Wie viele verschiedene Werte kann ein Byte haben?",
    "options": [
     "8",
     "100",
     "256"
    ],
    "answer": 2,
    "explain": "2 hoch 8 = 256 (von 0 bis 255)."
   },
   {
    "type": "tf",
    "q": "Der Computer benutzt das Binärsystem, weil Transistoren zwei Zustände haben: an und aus.",
    "answer": true,
    "explain": "Zwei elektrische Zustände lassen sich leicht fehlerfrei unterscheiden."
   },
   {
    "type": "order",
    "q": "Bringe sie von der kleinsten zur größten in die richtige Reihenfolge.",
    "items": [
     "Bit",
     "Byte",
     "Kilobyte",
     "Megabyte",
     "Gigabyte"
    ],
    "explain": "Bit < Byte (8 Bit) < kB < MB < GB."
   },
   {
    "type": "mc",
    "q": "Im ASCII-Code ist der Buchstabe A gleich …",
    "options": [
     "1",
     "65",
     "100"
    ],
    "answer": 1,
    "explain": "A = 65 = 01000001."
   },
   {
    "type": "mc",
    "q": "Wer beschrieb 1703 das Binärsystem?",
    "options": [
     "Leibniz",
     "Galilei",
     "Leonardo da Vinci"
    ],
    "answer": 0,
    "explain": "Gottfried Wilhelm Leibniz."
   },
   {
    "type": "mc",
    "q": "Ein digitales Foto besteht aus …",
    "options": [
     "Pixeln",
     "Musik-Bytes",
     "bunten Transistoren"
    ],
    "answer": 0,
    "explain": "Ein Gitter aus Pixeln, jeder mit seiner RGB-Farbe."
   },
   {
    "type": "num",
    "q": "Wie viel ist im Binärsystem die Stelle links von der 16 wert?",
    "answer": 32,
    "tol": 0,
    "explain": "Jede Stelle ist doppelt so viel wert: 16 × 2 = 32."
   },
   {
    "type": "tf",
    "q": "Im Binärsystem ist „10“ gleich zehn.",
    "answer": false,
    "explain": "Binär ist 10 = 2 (eine 2 und null Einer)."
   },
   {
    "type": "mc",
    "q": "Die Brailleschrift benutzt Zellen mit 6 Punkten. Wie viele Kombinationen gibt es?",
    "options": [
     "12",
     "36",
     "64"
    ],
    "answer": 2,
    "explain": "2 hoch 6 = 64."
   }
  ],
  "gen": [
   [
    "power",
    2
   ]
  ]
 }
});
