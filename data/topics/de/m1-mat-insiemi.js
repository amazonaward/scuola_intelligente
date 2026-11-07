TOPIC('de', {
 "id": "m1-mat-insiemi",
 "title": "Mengen",
 "intro": "Eine <b>Menge</b> ist eine Sammlung von Objekten, die nach einem genauen Kriterium ausgewählt sind. Mit Mengen können wir Ideen ordnen, einteilen, Probleme lösen und die Sprache verstehen, die die ganze Mathematik benutzt. Wir lernen, sie zu <b>darstellen</b> und mit ihnen zu <b>rechnen</b>: Schnittmenge, Vereinigung, Differenz, Komplement und kartesisches Produkt.",
 "minutes": 40,
 "sections": [
  {
   "type": "text",
   "title": "Was ist eine Menge?",
   "html": "<p>In der Mathematik ist eine <b>Menge</b> eine Zusammenfassung von Objekten (den <b>Elementen</b>), bei der man <b>eindeutig</b> feststellen kann, ob ein Objekt dazugehört oder nicht.</p>\n<ul>\n<li>„Die Monate des Jahres, die mit M beginnen“ → <b>ist eine Menge</b>: März, Mai. Kein Zweifel.</li>\n<li>„Die geraden Zahlen kleiner als 10“ → <b>ist eine Menge</b>: 0, 2, 4, 6, 8.</li>\n<li>„Die schönsten Filme“ → <b>ist keine Menge</b>: „schön“ hängt vom Geschmack ab!</li>\n</ul>\n<p><b>Symbole</b>:</p>\n<ul>\n<li>Mengen bezeichnet man mit <b>Großbuchstaben</b>: A, B, C …; die Elemente mit Kleinbuchstaben oder Zahlen;</li>\n<li><b>∈</b> bedeutet „<b>ist Element von</b>“: 4 ∈ P (4 ist Element der Menge der geraden Zahlen);</li>\n<li><b>∉</b> bedeutet „<b>ist nicht Element von</b>“: 7 ∉ P;</li>\n<li>eine Menge ohne Elemente ist die <b>leere Menge</b>: ∅ oder { } (z. B. „die Monate mit 32 Tagen“);</li>\n<li>die Anzahl der Elemente heißt <b>Mächtigkeit</b> (Kardinalität): |A| oder n(A). Eine Menge kann <b>endlich</b> (die Buchstaben des Alphabets) oder <b>unendlich</b> (die natürlichen Zahlen) sein.</li>\n</ul>"
  },
  {
   "type": "text",
   "title": "Drei Arten, eine Menge darzustellen",
   "html": "<p>Dieselbe Menge kann man auf drei Arten schreiben. Nehmen wir A = die Vokale des Alphabets.</p>\n<ol>\n<li><b>Darstellung durch Aufzählung</b> (tabellarisch): Man schreibt alle Elemente in geschweiften Klammern, durch Kommas getrennt, <b>ohne Wiederholungen</b> und in beliebiger Reihenfolge:<br><b>A = { a, e, i, o, u }</b></li>\n<li><b>Darstellung durch Eigenschaft</b> (beschreibend): Man schreibt die Eigenschaft hin, die sie gemeinsam haben:<br><b>A = { x | x ist ein Vokal des Alphabets }</b><br>(man liest: „A ist die Menge der x, für die gilt: x ist ein Vokal“). Das ist sehr nützlich für unendliche Mengen: P = { x | x ist eine gerade natürliche Zahl }.</li>\n<li><b>Grafische Darstellung</b> (<b>Euler-Venn</b>-Diagramm): Man zeichnet eine geschlossene Linie und setzt die Elemente als Punkte hinein. Was draußen ist, gehört nicht dazu.</li>\n</ol>\n<p>Achtung: { 1, 2, 3 } und { 3, 1, 2 } sind dieselbe Menge (die Reihenfolge zählt nicht), und { 1, 1, 2 } schreibt man einfach { 1, 2 }.</p>"
  },
  {
   "type": "svg",
   "title": "Das Euler-Venn-Diagramm",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#ffffff\"/>\n<ellipse cx=\"180\" cy=\"150\" rx=\"140\" ry=\"105\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"4\"/>\n<text x=\"60\" y=\"55\" font-size=\"28\" font-weight=\"bold\" fill=\"#1d4ed8\">A</text>\n<g font-size=\"22\" font-weight=\"bold\" fill=\"#1e3a8a\">\n<circle cx=\"120\" cy=\"110\" r=\"5\"/><text x=\"132\" y=\"117\">a</text>\n<circle cx=\"210\" cy=\"100\" r=\"5\"/><text x=\"222\" y=\"107\">e</text>\n<circle cx=\"140\" cy=\"180\" r=\"5\"/><text x=\"152\" y=\"187\">i</text>\n<circle cx=\"230\" cy=\"170\" r=\"5\"/><text x=\"242\" y=\"177\">o</text>\n<circle cx=\"185\" cy=\"225\" r=\"5\"/><text x=\"197\" y=\"232\">u</text>\n</g>\n<g font-size=\"22\" fill=\"#64748b\">\n<circle cx=\"380\" cy=\"80\" r=\"5\"/><text x=\"392\" y=\"87\">b</text>\n<circle cx=\"430\" cy=\"160\" r=\"5\"/><text x=\"442\" y=\"167\">m</text>\n<circle cx=\"370\" cy=\"230\" r=\"5\"/><text x=\"382\" y=\"237\">z</text>\n</g>\n<text x=\"480\" y=\"60\" font-size=\"18\" fill=\"#0f172a\">a ∈ A</text>\n<text x=\"480\" y=\"95\" font-size=\"18\" fill=\"#0f172a\">m ∉ A</text>\n<text x=\"480\" y=\"130\" font-size=\"18\" fill=\"#0f172a\">|A| = 5</text>\n<text x=\"330\" y=\"285\" font-size=\"15\" fill=\"#475569\">draußen: gehört nicht dazu</text>\n</svg>",
   "caption": "Es heißt so zu Ehren von Leonhard Euler (1707–1783) und John Venn (1834–1923), die diese Zeichnungen zum logischen Denken benutzten."
  },
  {
   "type": "text",
   "title": "Teilmengen und Gleichheit",
   "html": "<p>Eine Menge B ist <b>Teilmenge</b> von A, wenn <b>jedes</b> Element von B auch Element von A ist. Man schreibt <b>B ⊆ A</b> (B ist in A <b>enthalten</b>).</p>\n<p>Beispiel: A = { 1, 2, 3, 4, 5, 6 }, B = { 2, 4, 6 } → B ⊆ A. Im Diagramm wird B <b>innerhalb</b> von A gezeichnet.</p>\n<ul>\n<li>Wenn B ⊆ A ist und A mindestens ein Element mehr hat, ist B eine <b>echte</b> Teilmenge: <b>B ⊂ A</b>.</li>\n<li>Jede Menge ist Teilmenge von sich selbst, und die leere Menge ist Teilmenge <b>jeder</b> Menge: Man nennt sie <b>unechte</b> Teilmengen.</li>\n<li>Zwei Mengen sind <b>gleich</b>, wenn sie genau dieselben Elemente haben: A ⊆ B und B ⊆ A.</li>\n</ul>\n<p>Die Menge <b>aller</b> Teilmengen von A heißt <b>Potenzmenge</b> P(A). Wenn A n Elemente hat, gibt es <b>2ⁿ</b> Teilmengen. Für A = { x, y }: ∅, {x}, {y}, {x, y} → 4 = 2².</p>\n<p>Achtung bei den Symbolen: <b>∈</b> verbindet ein <b>Element</b> mit einer Menge (2 ∈ A); <b>⊆</b> verbindet eine <b>Menge</b> mit einer Menge ({2} ⊆ A).</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Mengen darstellen",
   "questions": [
    {
     "type": "tf",
     "q": "„Die netten Schüler der Klasse“ ist eine Menge im mathematischen Sinn.",
     "answer": false,
     "explain": "„Nett“ ist ein persönliches Urteil: Man kann nicht eindeutig feststellen, wer dazugehört."
    },
    {
     "type": "mc",
     "q": "Wie schreibt man durch Aufzählung die Menge der Buchstaben des Wortes „MAMMA“?",
     "options": [
      "{ M, A, M, M, A }",
      "{ M, A }",
      "{ MAMMA }",
      "{ M, M, M }"
     ],
     "answer": 1,
     "explain": "Elemente wiederholt man nicht: Die verschiedenen Buchstaben sind nur M und A."
    },
    {
     "type": "mc",
     "q": "Wenn A = { 3, 5, 7 } ist, welche Schreibweise ist richtig?",
     "options": [
      "5 ⊆ A",
      "{5} ∈ A",
      "5 ∈ A",
      "4 ∈ A"
     ],
     "answer": 2,
     "explain": "5 ist ein Element: Man benutzt ∈. {5} ist eine Menge: Man würde {5} ⊆ A schreiben."
    },
    {
     "type": "num",
     "q": "Wie viele Teilmengen hat eine Menge mit 3 Elementen?",
     "answer": 8,
     "tol": 0,
     "explain": "2³ = 8, wenn man auch die leere Menge und die Menge selbst mitzählt."
    }
   ]
  },
  {
   "type": "text",
   "title": "Die Rechenoperationen mit Mengen",
   "html": "<p>Nehmen wir A = { 1, 2, 3, 4, 5, 6 } (die Zahlen auf dem Würfel) und B = { 2, 4, 6, 8 } (gerade Zahlen kleiner als 10, ohne die 0).</p>\n<table>\n<tr><th>Operation</th><th>Symbol</th><th>Bedeutung</th><th>Ergebnis</th></tr>\n<tr><td><b>Schnittmenge</b></td><td>A ∩ B</td><td>Elemente, die <b>in A und in B</b> liegen (gemeinsame)</td><td>{ 2, 4, 6 }</td></tr>\n<tr><td><b>Vereinigung</b></td><td>A ∪ B</td><td>Elemente, die <b>in A oder in B</b> liegen (in mindestens einer), nur einmal genommen</td><td>{ 1, 2, 3, 4, 5, 6, 8 }</td></tr>\n<tr><td><b>Differenz</b></td><td>A − B (oder A \\ B)</td><td>Elemente von A, die <b>nicht</b> in B liegen</td><td>{ 1, 3, 5 }</td></tr>\n<tr><td><b>Differenz</b></td><td>B − A</td><td>Elemente von B, die nicht in A liegen</td><td>{ 8 }</td></tr>\n</table>\n<ul>\n<li>Wenn A ∩ B = ∅ ist, nennt man die Mengen <b>disjunkt</b> (z. B. gerade und ungerade Zahlen).</li>\n<li>Vereinigung und Schnittmenge haben die <b>Kommutativität</b>: A ∪ B = B ∪ A. Die Differenz <b>nicht</b>!</li>\n<li>Wenn B ⊆ U ist (U = <b>Grundmenge</b>, die alles enthält), heißt die Differenz U − B das <b>Komplement</b> von B bezüglich U: B̄ oder C<sub>U</sub>B.</li>\n<li><b>Zählregel</b>: |A ∪ B| = |A| + |B| − |A ∩ B|. Die gemeinsamen Elemente zieht man ab, weil wir sie sonst doppelt zählen würden. Hier: 6 + 4 − 3 = 7 ✔️</li>\n</ul>"
  },
  {
   "type": "svg",
   "title": "Die Operationen gezeichnet",
   "svg": "<svg viewBox=\"0 0 600 220\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"220\" fill=\"#ffffff\"/>\n<defs>\n<clipPath id=\"ia\"><circle cx=\"80\" cy=\"95\" r=\"55\"/></clipPath>\n\n</defs>\n<circle cx=\"80\" cy=\"95\" r=\"55\" fill=\"#ffffff\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<circle cx=\"130\" cy=\"95\" r=\"55\" fill=\"#ffffff\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n<circle cx=\"130\" cy=\"95\" r=\"55\" fill=\"#a855f7\" clip-path=\"url(#ia)\"/>\n<circle cx=\"80\" cy=\"95\" r=\"55\" fill=\"none\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<circle cx=\"130\" cy=\"95\" r=\"55\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n<text x=\"105\" y=\"185\" font-size=\"22\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#581c87\">A ∩ B</text>\n<circle cx=\"280\" cy=\"95\" r=\"55\" fill=\"#a855f7\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<circle cx=\"330\" cy=\"95\" r=\"55\" fill=\"#a855f7\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n<circle cx=\"280\" cy=\"95\" r=\"55\" fill=\"none\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<text x=\"305\" y=\"185\" font-size=\"22\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#581c87\">A ∪ B</text>\n<circle cx=\"470\" cy=\"95\" r=\"55\" fill=\"#a855f7\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<circle cx=\"520\" cy=\"95\" r=\"55\" fill=\"#ffffff\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n<circle cx=\"470\" cy=\"95\" r=\"55\" fill=\"none\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<text x=\"495\" y=\"185\" font-size=\"22\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#581c87\">A − B</text>\n<g font-size=\"18\" font-weight=\"bold\"><text x=\"45\" y=\"40\" fill=\"#1d4ed8\">A</text><text x=\"160\" y=\"40\" fill=\"#dc2626\">B</text><text x=\"245\" y=\"40\" fill=\"#1d4ed8\">A</text><text x=\"360\" y=\"40\" fill=\"#dc2626\">B</text><text x=\"435\" y=\"40\" fill=\"#1d4ed8\">A</text><text x=\"550\" y=\"40\" fill=\"#dc2626\">B</text></g>\n<text x=\"300\" y=\"212\" font-size=\"15\" text-anchor=\"middle\" fill=\"#475569\">in Violett: das Ergebnis der Operation</text>\n</svg>",
   "caption": "Schnittmenge = der gemeinsame Teil (das „und“); Vereinigung = alles (das „oder“); Differenz = A ohne den Teil von B."
  },
  {
   "type": "example",
   "title": "Praktisches Beispiel: Sport in der Klasse",
   "html": "<p>In einer Klasse mit <b>24</b> Schülern spielen <b>14</b> Fußball, <b>9</b> schwimmen und <b>5</b> machen beide Sportarten. Wie viele machen keine von beiden?</p>\n<ol>\n<li>Zeichne zwei sich überschneidende Kreise: F (Fußball) und S (Schwimmen), innerhalb des Rechtecks U (die Klasse).</li>\n<li>In die Schnittmenge schreibst du <b>5</b>.</li>\n<li>Nur Fußball: 14 − 5 = <b>9</b>. Nur Schwimmen: 9 − 5 = <b>4</b>.</li>\n<li>Mindestens eine Sportart: |F ∪ S| = 14 + 9 − 5 = <b>18</b> (oder 9 + 5 + 4).</li>\n<li>Keine Sportart (Komplement): 24 − 18 = <b>6</b> Schüler.</li>\n</ol>\n<p>Typischer Fehler: 14 + 9 = 23 addieren und schließen, dass nur 1 keinen Sport macht. Aber so werden die 5, die beide machen, <b>doppelt</b> gezählt!</p>"
  },
  {
   "type": "text",
   "title": "Das kartesische Produkt",
   "html": "<p>Das <b>kartesische Produkt</b> A × B ist die Menge aller <b>geordneten Paare</b> (a; b), bei denen das erste Element aus A und das zweite aus B genommen wird.</p>\n<p>A = { Nudeln, Reis }, B = { Tomatensauce, Pesto, Butter } →<br>A × B = { (Nudeln; Tomatensauce), (Nudeln; Pesto), (Nudeln; Butter), (Reis; Tomatensauce), (Reis; Pesto), (Reis; Butter) }</p>\n<ul>\n<li>Die Anzahl der Paare ist <b>|A| × |B|</b> = 2 × 3 = 6. Deshalb heißt es „Produkt“!</li>\n<li>Die Paare sind <b>geordnet</b>: (Nudeln; Pesto) ≠ (Pesto; Nudeln), also ist im Allgemeinen A × B ≠ B × A.</li>\n<li>Man stellt es mit einer <b>Kreuztabelle</b>, einem <b>Pfeildiagramm</b> oder einem <b>Koordinatensystem</b> (einem Punktgitter) dar.</li>\n</ul>\n<p>Es heißt so zu Ehren von <b>René Descartes</b> (Cartesius, 1596–1650), dem französischen Philosophen, der das Koordinatensystem mit den Koordinaten (x; y) erfand.</p>"
  },
  {
   "type": "example",
   "title": "Praktisches Beispiel: Wie viele Kombinationen?",
   "html": "<p>Du hast <b>3 T-Shirts</b> (rot, blau, grün) und <b>2 Hosen</b> (Jeans, Jogginghose). Wie viele verschiedene Kombinationen kannst du machen?</p>\n<table>\n<tr><th>×</th><th>Jeans</th><th>Jogginghose</th></tr>\n<tr><td><b>rot</b></td><td>(rot; Jeans)</td><td>(rot; Jogginghose)</td></tr>\n<tr><td><b>blau</b></td><td>(blau; Jeans)</td><td>(blau; Jogginghose)</td></tr>\n<tr><td><b>grün</b></td><td>(grün; Jeans)</td><td>(grün; Jogginghose)</td></tr>\n</table>\n<p>3 × 2 = <b>6 Kombinationen</b>. Wenn du 4 Paar Schuhe dazunimmst: 6 × 4 = 24 Kombinationen! Es ist dieselbe Überlegung, mit der man die Autokennzeichen oder die möglichen Passwörter zählt.</p>"
  },
  {
   "type": "widget",
   "title": "Wohin gehört jede Zahl?",
   "widget": "classify",
   "options": {
    "groups": [
     "Nur Vielfache von 2",
     "Vielfache von 2 und von 3 (Schnittmenge)",
     "Nur Vielfache von 3",
     "Weder das eine noch das andere"
    ],
    "items": [
     [
      "4",
      0
     ],
     [
      "6",
      1
     ],
     [
      "9",
      2
     ],
     [
      "12",
      1
     ],
     [
      "5",
      3
     ],
     [
      "8",
      0
     ],
     [
      "15",
      2
     ],
     [
      "18",
      1
     ],
     [
      "7",
      3
     ],
     [
      "10",
      0
     ],
     [
      "21",
      2
     ],
     [
      "1",
      3
     ]
    ]
   },
   "caption": "Mit U = {1…21}, A = Vielfache von 2, B = Vielfache von 3: Die Schnittmenge A ∩ B sind die Vielfachen von 6!"
  },
  {
   "type": "curiosity",
   "title": "Cantor und die Unendlichkeiten verschiedener Größe",
   "html": "<p>Die Mengenlehre wurde vom deutschen Mathematiker <b>Georg Cantor</b> zwischen <b>1874</b> und 1897 geschaffen. Er entdeckte etwas, das die Mathematiker seiner Zeit sprachlos machte: <b>Es gibt Unendlichkeiten, die größer sind als andere</b>!</p>\n<p>Die natürlichen Zahlen (0, 1, 2, 3 …) und die geraden Zahlen sind „gleich viele“: Du kannst sie zuordnen 0↔0, 1↔2, 2↔4, 3↔6 …, ohne dass eine übrig bleibt. Dagegen sind die Punkte einer Geraden „mehr“ als die natürlichen Zahlen: Man kann sie nicht einzeln abzählen, nicht einmal in unendlicher Zeit. Der Mathematiker David Hilbert sagte: „Aus dem Paradies, das Cantor uns geschaffen hat, soll uns niemand vertreiben können.“</p>"
  },
  {
   "type": "curiosity",
   "title": "Das Barbier-Paradoxon",
   "html": "<p>Im Jahr <b>1901</b> entdeckte der englische Philosoph <b>Bertrand Russell</b> ein Problem in der Mengenlehre, das er so erklärte: In einem Dorf rasiert der Barbier <b>alle und nur</b> die Männer, die sich <b>nicht</b> selbst rasieren. Wer rasiert den Barbier?</p>\n<ul>\n<li>Wenn er sich selbst rasiert, dürfte er sich nicht rasieren (er rasiert nur, wer sich nicht selbst rasiert).</li>\n<li>Wenn er sich nicht selbst rasiert, dann müsste er sich rasieren!</li>\n</ul>\n<p>Das ist ein <b>Paradoxon</b>: So einen Barbier gibt es nicht. Um ähnliche Probleme zu vermeiden, mussten die Mathematiker strengere Regeln festlegen, was eine Menge sein kann. Deshalb sagt die Definition „eindeutig“!</p>"
  },
  {
   "type": "alternatives",
   "title": "Andere Wege zum Verstehen",
   "intro": "Mengen sind überall um dich herum: Versuche, sie auf diese Weisen zu sehen.",
   "tabs": [
    {
     "label": "🧺 Mit Seilkreisen (Hula-Hoop)",
     "html": "<p>In den Schulen vieler Länder (und in der Montessori-Methode) macht man Mengen in der Turnhalle: zwei Seilkreise auf dem Boden, die sich ein bisschen überlappen. Jeder stellt sich dorthin, wo er hingehört: in den roten Kreis, wer einen Bruder hat, in den blauen, wer ein Haustier hat. Wer beides hat, steht im gemeinsamen Teil (<b>Schnittmenge</b>); wer keins von beiden hat, bleibt <b>draußen</b> (Komplement).</p><p>Probiere es zu Hause mit zwei Schnürsenkeln und deinen Spielsachen: rote Autos und Spielzeug mit Rädern … wohin kommt das rote Auto?</p>"
    },
    {
     "label": "🔍 Wie eine Suchmaschine",
     "html": "<p>Wenn du im Internet suchst oder die Produkte eines Online-Shops filterst, benutzt du die Operationen zwischen Mengen!</p><ul><li>„Schuhe <b>UND</b> rot“ → <b>Schnittmenge</b>: nur die Schuhe, die auch rot sind;</li><li>„Katzen <b>ODER</b> Hunde“ → <b>Vereinigung</b>: alle Seiten, die von mindestens einem der beiden handeln;</li><li>„Pizza <b>NICHT</b> Ananas“ → <b>Differenz</b>: die Seiten über Pizza, ohne die mit Ananas.</li></ul><p>Diese Operatoren heißen <b>AND, OR, NOT</b> und kommen aus der <b>Booleschen Algebra</b> (George Boole, 1854). Sie sind die Grundlage dafür, wie Computer funktionieren!</p>"
    },
    {
     "label": "📊 Das Carroll-Diagramm",
     "html": "<p>Der Schriftsteller von <i>Alice im Wunderland</i>, <b>Lewis Carroll</b>, war auch Mathematiker! Er erfand eine andere Art, Mengen zu zeichnen: eine Tabelle. Sie wird in englischen Schulen viel benutzt.</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"260\" fill=\"#ffffff\"/><rect x=\"150\" y=\"50\" width=\"420\" height=\"190\" fill=\"#f8fafc\" stroke=\"#0f172a\" stroke-width=\"3\"/><line x1=\"360\" y1=\"50\" x2=\"360\" y2=\"240\" stroke=\"#0f172a\" stroke-width=\"3\"/><line x1=\"150\" y1=\"145\" x2=\"570\" y2=\"145\" stroke=\"#0f172a\" stroke-width=\"3\"/><g font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\"><text x=\"255\" y=\"38\" fill=\"#1d4ed8\">gerade</text><text x=\"465\" y=\"38\" fill=\"#1d4ed8\">ungerade</text><text x=\"75\" y=\"102\" fill=\"#dc2626\">Vielfache</text><text x=\"75\" y=\"122\" fill=\"#dc2626\">von 3</text><text x=\"75\" y=\"192\" fill=\"#dc2626\">Nicht-Vielfache</text><text x=\"75\" y=\"212\" fill=\"#dc2626\">von 3</text></g><g font-size=\"24\" text-anchor=\"middle\" fill=\"#0f172a\"><text x=\"255\" y=\"105\">6, 12, 18</text><text x=\"465\" y=\"105\">3, 9, 15</text><text x=\"255\" y=\"200\">2, 4, 8, 10</text><text x=\"465\" y=\"200\">1, 5, 7, 11</text></g><rect x=\"150\" y=\"50\" width=\"210\" height=\"95\" fill=\"#a855f7\" fill-opacity=\"0.25\"/></svg>"
    },
    {
     "label": "🧊 Das kartesische Produkt in 3D",
     "html": "<p>Das kartesische Produkt A × B kann man sich als ein <b>Rechteck aus Würfelchen</b> „ansehen“: Jede Zeile ist ein Element von A, jede Spalte ein Element von B, und jedes Würfelchen ist ein Paar. Mit 3 T-Shirts und 4 Hosen erhältst du 3 × 4 = 12 Würfelchen = 12 Kombinationen. Ändere die Zahlen mit den Schiebereglern!</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 3,
      "b": 4
     }
    },
    {
     "label": "🧩 Ordne Symbol und Bedeutung zu",
     "html": "<p>Verbinde jedes Symbol mit seiner Bedeutung.</p>",
     "widget": "match",
     "options": {
      "pairs": [
       [
        "∈",
        "ist Element von"
       ],
       [
        "∉",
        "ist nicht Element von"
       ],
       [
        "∅",
        "leere Menge"
       ],
       [
        "⊆",
        "ist Teilmenge von"
       ],
       [
        "∩",
        "Schnittmenge"
       ],
       [
        "∪",
        "Vereinigung"
       ],
       [
        "×",
        "kartesisches Produkt"
       ]
      ]
     }
    },
    {
     "label": "🇫🇷 Die französischen „Kartoffeln“",
     "html": "<p>In <b>Frankreich</b> nennen viele Lehrer und Schüler die Euler-Venn-Diagramme scherzhaft <b>„les patates“</b> (die Kartoffeln), weil man sie als rundliche geschlossene Linien zeichnet, nicht unbedingt als perfekte Kreise. Das ist eine wichtige Idee: <b>Die Form zählt nicht</b>, es zählt nur, <b>wer drinnen und wer draußen ist</b>.</p><p>Probieren wir es. Grundmenge U = Zahlen von 1 bis 12. A = Vielfache von 2, B = Vielfache von 3.</p><ol><li>Zeichne zwei „Kartoffeln“, die sich ein bisschen <b>überlappen</b>, innerhalb eines Rechtecks (der Grundmenge).</li><li>Beginne immer mit dem <b>gemeinsamen Teil</b>: Welche Zahlen sind Vielfache von 2 und von 3? <b>6 und 12</b> → A ∩ B = {6, 12}.</li><li>Dann der Rest von A: 2, 4, 8, 10.</li><li>Dann der Rest von B: 3, 9.</li><li>Schließlich, <b>außerhalb der Kartoffeln</b>, aber innerhalb der Grundmenge: 1, 5, 7, 11.</li></ol><p>Lies jetzt die Zeichnung: A ∪ B = {2, 3, 4, 6, 8, 9, 10, 12} (alles, was in mindestens einer Kartoffel liegt); das <b>Komplement</b> von A ∪ B = {1, 5, 7, 11}. Du hast auch eine Regel entdeckt: Die gemeinsamen Vielfachen von 2 und 3 sind die <b>Vielfachen von 6</b>!</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><rect x=\"20\" y=\"20\" width=\"560\" height=\"260\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"32\" y=\"46\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">U = {1, 2, …, 12}</text><path d=\"M120,150 C110,70 230,50 300,90 C350,120 360,200 300,230 C230,265 130,230 120,150 Z\" fill=\"#bfdbfe\" fill-opacity=\"0.7\" stroke=\"#1d4ed8\" stroke-width=\"3\"/><path d=\"M260,140 C250,80 360,55 430,85 C500,115 490,215 420,235 C340,258 270,210 260,140 Z\" fill=\"#fbcfe8\" fill-opacity=\"0.7\" stroke=\"#be185d\" stroke-width=\"3\"/><text x=\"150\" y=\"80\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">A: Vielfache von 2</text><text x=\"380\" y=\"72\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#be185d\" font-weight=\"bold\">B: Vielfache von 3</text><text x=\"160\" y=\"140\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">2</text><text x=\"200\" y=\"120\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">4</text><text x=\"170\" y=\"190\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">8</text><text x=\"220\" y=\"210\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">10</text><text x=\"282\" y=\"150\" font-size=\"22\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">6</text><text x=\"286\" y=\"190\" font-size=\"22\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">12</text><text x=\"380\" y=\"140\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">3</text><text x=\"410\" y=\"195\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">9</text><text x=\"60\" y=\"260\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">1</text><text x=\"510\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">5</text><text x=\"530\" y=\"250\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">7</text><text x=\"60\" y=\"110\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">11</text></svg>"
    },
    {
     "label": "🇺🇸 Die amerikanische „New Math“: Zählen durch Zuordnen",
     "html": "<p>In den 1960er-Jahren brachte in den <b>USA</b> eine große Schulreform, die <b>„New Math“</b> genannt wurde, die Mengen schon in die Grundschule. Eine der Kernideen, von Cantor übernommen, war diese: <b>Zwei Mengen haben gleich viele Elemente, wenn man sie einander eins zu eins zuordnen kann</b>, ohne dass eines übrig bleibt (das nennt man <b>eineindeutige Zuordnung</b>, Bijektion). Man muss nicht einmal zählen können!</p><ol><li>A = {🍎, 🍐, 🍌} und B = {a, b, c}. Ordne zu: 🍎↔a, 🍐↔b, 🍌↔c. Keines bleibt allein → A und B haben <b>gleich viele</b> Elemente (3).</li><li>C = {🐶, 🐱, 🐭, 🐰} und B = {a, b, c}: Nach den Zuordnungen bleibt ein Tier übrig → C hat <b>mehr</b> Elemente als B.</li><li>Jetzt die Überraschung. N = {1, 2, 3, 4, …} und P = {2, 4, 6, 8, …}. Ordne jeder Zahl ihr Doppeltes zu: 1↔2, 2↔4, 3↔6, 4↔8 … Es bleibt nie eines übrig!</li></ol><p>Also gibt es „genauso viele“ gerade Zahlen wie natürliche Zahlen, auch wenn P nur ein Teil von N ist. Bei <b>unendlichen</b> Mengen passieren Dinge, die bei endlichen unmöglich sind: Genau das entdeckte Cantor.</p><p>🎯 Probiere es: Wie ordnest du N der Menge der Vielfachen von 10 zu?</p>"
    }
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Operationen",
   "questions": [
    {
     "type": "mc",
     "q": "A = { 1, 3, 5, 7 }, B = { 3, 4, 5 }. Wie viel ist A ∩ B?",
     "options": [
      "{ 1, 3, 4, 5, 7 }",
      "{ 3, 5 }",
      "{ 1, 7 }",
      "{ 4 }"
     ],
     "answer": 1,
     "explain": "Die gemeinsamen Elemente sind 3 und 5."
    },
    {
     "type": "mc",
     "q": "Mit denselben Mengen: Wie viel ist A − B?",
     "options": [
      "{ 1, 7 }",
      "{ 4 }",
      "{ 3, 5 }",
      "∅"
     ],
     "answer": 0,
     "explain": "Man nimmt aus A die Elemente weg, die auch in B liegen: Es bleiben 1 und 7."
    },
    {
     "type": "num",
     "q": "|A| = 10, |B| = 7, |A ∩ B| = 3. Wie viel ist |A ∪ B|?",
     "answer": 14,
     "tol": 0,
     "explain": "10 + 7 − 3 = 14: Die gemeinsamen Elemente zählt man nur einmal."
    },
    {
     "type": "tf",
     "q": "A × B und B × A sind immer dieselbe Menge.",
     "answer": false,
     "explain": "Die Paare sind geordnet: (1; a) ist anders als (a; 1). Sie haben aber gleich viele Elemente."
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Landkarte: warum Mengen die Sprache der Mathematik sind",
   "nodes": [
    {
     "id": "classificare",
     "label": "Einteilen",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "Objekte nach einem Merkmal zusammenfassen.",
     "why": "Das ist eine der ersten Tätigkeiten des Denkens: Schon Aristoteles (4. Jh. v. Chr.) teilte Tiere und Begriffe in Gattungen und Arten ein."
    },
    {
     "id": "insieme",
     "label": "Menge",
     "x": 50,
     "y": 22,
     "color": "#2563eb",
     "html": "Genau bestimmte Sammlung von Elementen.",
     "why": "Georg Cantor (1874) machte daraus einen strengen mathematischen Begriff: „Eine Menge ist eine Zusammenfassung bestimmter, wohlunterschiedener Objekte zu einem Ganzen.“"
    },
    {
     "id": "appartenenza",
     "label": "Zugehörigkeit ∈",
     "x": 15,
     "y": 36,
     "color": "#0ea5e9",
     "html": "Ein Element gehört dazu oder nicht: nichts dazwischen.",
     "why": "Das ist das logische Prinzip vom „ausgeschlossenen Dritten“ (Aristoteles): Etwas ist oder ist nicht. Das Symbol ∈ kommt vom griechischen Buchstaben Epsilon, dem Anfangsbuchstaben von „ist“, und wurde 1889 von Giuseppe Peano gewählt."
    },
    {
     "id": "rappresentazioni",
     "label": "Darstellungen",
     "x": 85,
     "y": 36,
     "color": "#16a34a",
     "html": "Aufzählung, Eigenschaft, Euler-Venn-Diagramm.",
     "why": "Euler benutzte die Kreise in den „Briefen an eine deutsche Prinzessin“ (1768); John Venn verbesserte sie 1880 für die Logik."
    },
    {
     "id": "sottoinsiemi",
     "label": "Teilmengen",
     "x": 25,
     "y": 56,
     "color": "#9333ea",
     "html": "B ⊆ A, wenn jedes Element von B in A liegt.",
     "why": "Die Teilmengen einer Menge mit n Elementen sind 2ⁿ: Für jedes Element entscheidet man „drinnen“ oder „draußen“, 2 Möglichkeiten, n-mal wiederholt."
    },
    {
     "id": "operazioni",
     "label": "Operationen ∩ ∪ −",
     "x": 50,
     "y": 56,
     "color": "#ea580c",
     "html": "Schnittmenge, Vereinigung, Differenz, Komplement.",
     "why": "Sie entsprechen den Wörtern „und“, „oder“, „nicht“ der Logik. George Boole (1854) schuf eine Algebra der Logik, die heute die Schaltkreise der Computer zum Funktionieren bringt."
    },
    {
     "id": "cartesiano",
     "label": "Kartesisches Produkt",
     "x": 78,
     "y": 56,
     "color": "#dc2626",
     "html": "Alle geordneten Paare (a; b).",
     "why": "Es entsteht aus der Idee von Descartes (1637), jeden Punkt der Ebene durch ein Zahlenpaar zu beschreiben: die Koordinaten."
    },
    {
     "id": "contare",
     "label": "Zählen: |A ∪ B|",
     "x": 35,
     "y": 80,
     "color": "#f59e0b",
     "html": "|A ∪ B| = |A| + |B| − |A ∩ B|.",
     "why": "Das ist das „Prinzip von Inklusion und Exklusion“: Man zieht die Schnittmenge ab, weil sie doppelt gezählt wurde."
    },
    {
     "id": "fondamenti",
     "label": "Grundlagen der Mathematik",
     "x": 72,
     "y": 82,
     "color": "#0f766e",
     "html": "Zahlen, Funktionen, Geometrie werden mit Mengen definiert.",
     "why": "Nach dem Paradoxon von Russell (1901) legten Zermelo (1908) und Fraenkel die Axiome der Mengenlehre (ZF) fest, die Grundlage fast der gesamten modernen Mathematik."
    }
   ],
   "edges": [
    [
     "classificare",
     "insieme",
     "wird formalisiert in"
    ],
    [
     "insieme",
     "appartenenza",
     "beruht auf"
    ],
    [
     "insieme",
     "rappresentazioni",
     "wird geschrieben mit"
    ],
    [
     "insieme",
     "sottoinsiemi",
     "enthält"
    ],
    [
     "insieme",
     "operazioni",
     "wird kombiniert mit"
    ],
    [
     "insieme",
     "cartesiano",
     "wird multipliziert"
    ],
    [
     "operazioni",
     "contare",
     "ermöglicht"
    ],
    [
     "sottoinsiemi",
     "fondamenti",
     "Struktur"
    ],
    [
     "operazioni",
     "fondamenti",
     "Logik"
    ],
    [
     "cartesiano",
     "fondamenti",
     "Koordinaten"
    ]
   ]
  }
 ],
 "glossary": [
  {
   "t": "Menge",
   "d": "Zusammenfassung von Objekten, bei der man eindeutig sagen kann, ob ein Objekt dazugehört."
  },
  {
   "t": "Element",
   "d": "Jedes der Objekte, die eine Menge bilden."
  },
  {
   "t": "Leere Menge",
   "d": "Menge ohne Elemente: ∅."
  },
  {
   "t": "Mächtigkeit",
   "d": "Anzahl der Elemente einer Menge."
  },
  {
   "t": "Teilmenge",
   "d": "Menge, deren Elemente alle zu einer anderen Menge gehören."
  },
  {
   "t": "Schnittmenge",
   "d": "Menge der Elemente, die zwei Mengen gemeinsam sind: A ∩ B."
  },
  {
   "t": "Vereinigung",
   "d": "Menge der Elemente, die zu mindestens einer der beiden Mengen gehören: A ∪ B."
  },
  {
   "t": "Differenz",
   "d": "Elemente der ersten Menge, die nicht zur zweiten gehören: A − B."
  },
  {
   "t": "Komplement",
   "d": "Elemente der Grundmenge, die nicht zu einer Menge gehören."
  },
  {
   "t": "Kartesisches Produkt",
   "d": "Menge aller geordneten Paare (a; b) mit a ∈ A und b ∈ B."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Welche dieser Zusammenfassungen ist eine Menge im mathematischen Sinn?",
    "options": [
     "Die interessanten Bücher",
     "Die ungeraden Zahlen kleiner als 10",
     "Die schönsten Lieder",
     "Die großen Kinder"
    ],
    "answer": 1,
    "explain": "{ 1, 3, 5, 7, 9 }: Man stellt zweifelsfrei fest, wer dazugehört."
   },
   {
    "type": "num",
    "q": "Wie viele Elemente hat die Menge der Buchstaben des (italienischen) Wortes „MATEMATICA“?",
    "answer": 6,
    "tol": 0,
    "explain": "{ M, A, T, E, I, C }: 6 verschiedene Buchstaben."
   },
   {
    "type": "mc",
    "q": "Die Menge der Monate mit 32 Tagen ist …",
    "options": [
     "unendlich",
     "leer",
     "aus einem Element gebildet",
     "keine Menge"
    ],
    "answer": 1,
    "explain": "Kein Monat hat 32 Tage: Es ist die leere Menge ∅."
   },
   {
    "type": "mc",
    "q": "A = { a, b, c, d }, B = { c, d, e }. A ∪ B = ?",
    "options": [
     "{ c, d }",
     "{ a, b }",
     "{ a, b, c, d, e }",
     "{ a, b, c, d, c, d, e }"
    ],
    "answer": 2,
    "explain": "Alle Elemente, jedes nur einmal."
   },
   {
    "type": "tf",
    "q": "Die leere Menge ist Teilmenge jeder Menge.",
    "answer": true,
    "explain": "Sie hat keine Elemente, die „draußen“ liegen könnten: Sie ist eine unechte Teilmenge jeder Menge."
   },
   {
    "type": "mc",
    "q": "Zwei Mengen heißen disjunkt, wenn …",
    "options": [
     "sie gleich sind",
     "ihre Schnittmenge leer ist",
     "die eine Teilmenge der anderen ist",
     "sie gleich viele Elemente haben"
    ],
    "answer": 1,
    "explain": "Sie haben keine gemeinsamen Elemente: A ∩ B = ∅."
   },
   {
    "type": "num",
    "q": "In einer Klasse mit 25 Schülern lernen 15 zusätzlich Englisch, 12 zusätzlich Französisch und 7 beides. Wie viele lernen keine zusätzliche Sprache?",
    "answer": 5,
    "tol": 0,
    "explain": "Mindestens eine: 15 + 12 − 7 = 20. Keine: 25 − 20 = 5."
   },
   {
    "type": "num",
    "q": "A hat 4 Elemente und B hat 5. Wie viele Paare hat A × B?",
    "answer": 20,
    "tol": 0,
    "explain": "|A × B| = 4 × 5 = 20."
   },
   {
    "type": "text",
    "q": "Wie heißt das Diagramm mit geschlossenen Linien, mit dem man Mengen darstellt? (Nachnamen der beiden Mathematiker)",
    "answer": [
     "euler-venn",
     "euler venn",
     "venn",
     "euler",
     "euler-venn-diagramm",
     "venn-diagramm"
    ],
    "explain": "Euler-Venn-Diagramm."
   },
   {
    "type": "mc",
    "q": "U = { 1, 2, 3, 4, 5, 6 }, B = { 2, 3 }. Das Komplement von B bezüglich U ist …",
    "options": [
     "{ 2, 3 }",
     "{ 1, 4, 5, 6 }",
     "∅",
     "{ 1, 2, 3, 4, 5, 6 }"
    ],
    "answer": 1,
    "explain": "Die Elemente von U, die nicht in B liegen."
   },
   {
    "type": "order",
    "q": "Bringe die Schritte zur Lösung eines Problems mit dem Venn-Diagramm in die richtige Reihenfolge",
    "items": [
     "Zeichne die Grundmenge und die sich überschneidenden Mengen",
     "Schreibe die Anzahl der gemeinsamen Elemente hin",
     "Berechne die Teile „nur A“ und „nur B“",
     "Berechne, was draußen bleibt"
    ],
    "explain": "Man beginnt immer mit der Schnittmenge, dann die exklusiven Teile, zuletzt das Komplement."
   },
   {
    "type": "mc",
    "q": "Wer begründete die Mengenlehre?",
    "options": [
     "Euklid",
     "Georg Cantor",
     "Pythagoras",
     "Isaac Newton"
    ],
    "answer": 1,
    "explain": "Georg Cantor, ab 1874."
   }
  ]
 }
});
