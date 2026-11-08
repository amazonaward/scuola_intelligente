TOPIC('de', {
 "id": "m3-sci-elettricita",
 "title": "Elektrizität und Magnetismus",
 "intro": "Du schaltest das Licht ein, lädst dein Handy auf, der Kompass zeigt nach Norden, ein Blitz zerreißt den Himmel: Dahinter stecken die <b>elektrischen Ladungen</b> und der <b>Magnetismus</b>, zwei Seiten derselben Erscheinung. Wir finden heraus, was Strom, Spannung und Widerstand sind, wie ein Stromkreis funktioniert, das <b>ohmsche Gesetz</b> und wie ein Magnet Elektrizität erzeugen kann.",
 "minutes": 50,
 "sections": [
  {
   "type": "text",
   "title": "1. Die elektrische Ladung",
   "html": "<p>Alle Materie besteht aus <b>Atomen</b>. Im Kern befinden sich die <b>Protonen</b> (<b>positive</b> Ladung <b>+</b>) und die Neutronen (ohne Ladung); um den Kern bewegen sich die <b>Elektronen</b> (<b>negative</b> Ladung <b>−</b>). Normalerweise hat ein Atom so viele Protonen wie Elektronen: Er ist <b>neutral</b>.</p>\n<p>Die äußersten Elektronen können von einem Körper zum anderen wandern. Ein Körper, der <b>mehr Elektronen</b> hat, ist negativ geladen; einer, der <b>weniger</b> hat, ist positiv geladen.</p>\n<ul>\n<li>Ladungen <b>mit gleichem Vorzeichen stoßen sich ab</b> (+ und +, − und −);</li>\n<li>Ladungen <b>mit entgegengesetztem Vorzeichen ziehen sich an</b> (+ und −).</li>\n</ul>\n<p>Ein Körper kann auf drei Arten <b>elektrisch aufgeladen</b> werden:</p>\n<ol>\n<li><b>durch Reiben</b>: Reib einen Luftballon an deinen Haaren; die Elektronen wandern von den Haaren auf den Ballon, der dann an der Wand haften bleibt;</li>\n<li><b>durch Berührung</b>: Ein geladener Körper berührt einen ungeladenen und gibt ihm einen Teil seiner Ladung ab;</li>\n<li><b>durch Influenz</b>: Ein geladener Körper nähert sich, ohne zu berühren, und „verschiebt“ die Ladungen des anderen (so zieht der Ballon kleine Papierschnipsel an).</li>\n</ol>\n<p>Die Ladung misst man in <b>Coulomb (C)</b>, benannt nach dem französischen Physiker Charles-Augustin de Coulomb, der 1785 die Kraft zwischen Ladungen messen konnte.</p>"
  },
  {
   "type": "3d",
   "title": "Warum leiten Metalle? Schau dir das Atom an",
   "scene": "atom",
   "options": {
    "elements": [
     "Cu",
     "Na",
     "C",
     "O",
     "Fe"
    ]
   },
   "caption": "Wähle das Kupfer (Cu): Es hat 29 Elektronen, und das äußerste steht allein auf der äußersten Bahn und ist nur schwach gebunden. In Metallen verlassen diese Elektronen das Atom und bilden ein „Meer“ aus freien Elektronen, die sich bewegen können: Deshalb leiten Metalle den Strom."
  },
  {
   "type": "text",
   "title": "2. Leiter und Isolatoren",
   "html": "<ul>\n<li><b>Leiter</b>: Sie lassen die Ladungen leicht hindurch. Dazu gehören die <b>Metalle</b> (Silber, Kupfer, Gold, Aluminium, Eisen), der <b>Graphit</b>, das <b>Wasser</b> mit gelösten Salzen (auch das aus dem Wasserhahn!) und der <b>menschliche Körper</b>.</li>\n<li><b>Isolatoren</b>: Sie lassen die Ladungen nicht hindurch. Kunststoff, Gummi, Glas, Keramik, trockenes Holz, trockene Luft.</li>\n<li><b>Halbleiter</b>: Wie das <b>Silizium</b> leiten sie „auf Befehl“: Sie sind die Grundlage der Chips in Computern und Handys.</li>\n</ul>\n<p>In elektrischen Kabeln ist der Kupferdraht (Leiter) von Kunststoff (Isolator) umhüllt: Der Strom fließt, wohin er soll, und wir sind geschützt.</p>"
  },
  {
   "type": "widget",
   "title": "Leiter oder Isolator?",
   "widget": "classify",
   "options": {
    "groups": [
     "⚡ Leiter",
     "🛡️ Isolator"
    ],
    "items": [
     [
      "🔩 Eisennagel",
      0
     ],
     [
      "🧤 Gummihandschuh",
      1
     ],
     [
      "🥄 Stahllöffel",
      0
     ],
     [
      "🥛 Glasbecher",
      1
     ],
     [
      "✏️ Bleistiftmine (Graphit)",
      0
     ],
     [
      "🪵 Lineal aus trockenem Holz",
      1
     ],
     [
      "💧 Salzwasser",
      0
     ],
     [
      "🧸 Kunststoff eines Spielzeugs",
      1
     ],
     [
      "🪙 Münze",
      0
     ]
    ]
   },
   "caption": "Tippe auf einen Gegenstand und dann auf die richtige Gruppe. Du kannst es mit einer Batterie, einer Glühbirne und zwei Drähten nachprüfen."
  },
  {
   "type": "text",
   "title": "3. Strom, Spannung und Widerstand",
   "html": "<p>Wenn sich die Ladungen in einem Leiter geordnet bewegen, entsteht ein <b>elektrischer Strom</b>. Um ihn zu beschreiben, braucht man drei Größen:</p>\n<table>\n<tr><th>Größe</th><th>Was ist das?</th><th>Einheit</th><th>Messgerät</th></tr>\n<tr><td><b>Stromstärke (I)</b></td><td>Wie viel Ladung in einer Sekunde durch einen Querschnitt des Drahts fließt: I = Q : t</td><td><b>Ampere (A)</b></td><td>Amperemeter (in Reihe)</td></tr>\n<tr><td><b>Spannung oder Potenzialdifferenz (U)</b></td><td>Der „Schub“, der die Ladungen in Bewegung setzt, geliefert von der Quelle (Batterie, Steckdose)</td><td><b>Volt (V)</b></td><td>Voltmeter (parallel)</td></tr>\n<tr><td><b>Widerstand (R)</b></td><td>Wie stark ein Material dem Stromfluss entgegenwirkt</td><td><b>Ohm (Ω)</b></td><td>Ohmmeter</td></tr>\n</table>\n<p>Der Widerstand eines Drahts ist größer, wenn der Draht <b>länger</b>, <b>dünner</b> oder aus einem <b>schlechter leitenden</b> Material ist; meist steigt er auch mit der Temperatur.</p>\n<p>Einige Werte: Eine Stabbatterie liefert <b>1,5 V</b>, eine Autobatterie <b>12 V</b>, die Steckdosen zu Hause in Italien <b>230 V</b> (Wechselstrom mit 50 Hz). Eine LED-Lampe nimmt etwa 0,04 A auf, ein Elektroofen etwa 9 A.</p>"
  },
  {
   "type": "text",
   "title": "4. Das ohmsche Gesetz",
   "html": "<p>Im Jahr <b>1827</b> entdeckte der deutsche Physiker <b>Georg Simon Ohm</b>, dass bei vielen Leitern (bei konstanter Temperatur) die Stromstärke <b>direkt proportional</b> zur Spannung ist:</p>\n<p style=\"text-align:center;font-size:1.3em\"><b>U = R × I</b></p>\n<p>Daraus folgt: <b>I = U : R</b> und <b>R = U : I</b>.</p>\n<p>Verdoppelst du die Spannung, verdoppelt sich die Stromstärke; verdoppelst du den Widerstand, halbiert sie sich. Das Spannungs-Strom-Diagramm eines „ohmschen“ Leiters ist eine <b>Gerade durch den Ursprung</b>: Ihre Steigung ist der Widerstand.</p>\n<p><b>Leistung und Energie</b>: Die elektrische <b>Leistung</b>, also wie viel Energie jede Sekunde verbraucht wird, ist <b>P = U × I</b> und wird in <b>Watt (W)</b> gemessen. Die verbrauchte Energie ist <b>E = P × t</b>: Auf der Stromrechnung misst man sie in <b>Kilowattstunden (kWh)</b>, also der Energie, die ein 1.000-W-Gerät in einer Stunde verbraucht.</p>"
  },
  {
   "type": "example",
   "title": "Praktisches Beispiel: Rechnen mit dem ohmschen Gesetz",
   "html": "<ol>\n<li><b>Taschenlampe</b>: Batterie mit 4,5 V, Glühbirne mit 9 Ω. I = U : R = 4,5 : 9 = <b>0,5 A</b>.</li>\n<li><b>Toaster</b>: An der Steckdose mit 230 V nimmt er 4 A auf. R = U : I = 230 : 4 = <b>57,5 Ω</b>. Leistung: P = 230 × 4 = <b>920 W</b>.</li>\n<li><b>Handy-Ladegerät</b>: 5 V und 2 A → P = 5 × 2 = <b>10 W</b>. In 2 Stunden verbraucht es 10 × 2 = 20 Wh = 0,02 kWh: sehr wenig!</li>\n<li><b>Haartrockner</b> mit 2.000 W, eine halbe Stunde benutzt: E = 2 kW × 0,5 h = <b>1 kWh</b>. Kostet 1 kWh etwa 0,25 €, sind das 25 Cent.</li>\n</ol>\n<p>Deshalb spart eine LED-Lampe mit 8 W, die genauso hell leuchtet wie eine alte Glühlampe mit 60 W, über 85 % Energie.</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Ladungen und ohmsches Gesetz",
   "questions": [
    {
     "type": "tf",
     "q": "Zwei negativ geladene Körper ziehen sich an.",
     "answer": false,
     "explain": "Ladungen mit gleichem Vorzeichen stoßen sich ab."
    },
    {
     "type": "num",
     "q": "Ein Widerstand von 20 Ω ist an 10 V angeschlossen. Wie viele Ampere fließen?",
     "answer": 0.5,
     "tol": 0.001,
     "unit": "A",
     "explain": "I = U : R = 10 : 20 = 0,5 A."
    },
    {
     "type": "num",
     "q": "Ein Heizlüfter nimmt bei 230 V 8 A auf. Wie groß ist seine Leistung in Watt?",
     "answer": 1840,
     "unit": "W",
     "explain": "P = U × I = 230 × 8 = 1840 W."
    },
    {
     "type": "mc",
     "q": "In welcher Einheit wird der Widerstand gemessen?",
     "options": [
      "Volt",
      "Ampere",
      "Ohm",
      "Watt"
     ],
     "answer": 2,
     "explain": "In Ohm (Ω)."
    }
   ]
  },
  {
   "type": "text",
   "title": "5. Der Stromkreis: Reihen- und Parallelschaltung",
   "html": "<p>Ein <b>Stromkreis</b> ist ein <b>geschlossener</b> Weg, auf dem der Strom fließt. Er besteht aus einer <b>Quelle</b> (Batterie), <b>Leitern</b> (Drähten), einem oder mehreren <b>Verbrauchern</b> (Glühbirnen, Motoren) und einem <b>Schalter</b>. Ist der Schalter offen, ist der Stromkreis unterbrochen und der Strom fließt nicht.</p>\n<p><b>Reihenschaltung</b> (eins nach dem anderen, nur ein Weg):</p>\n<ul>\n<li>Die Stromstärke ist in allen Verbrauchern <b>gleich</b>;</li>\n<li>die Widerstände <b>addieren sich</b>: R = R₁ + R₂ + …;</li>\n<li>brennt eine Glühbirne durch, <b>gehen alle aus</b> (wie bei manchen alten Lichterketten am Weihnachtsbaum).</li>\n</ul>\n<p><b>Parallelschaltung</b> (jeder Verbraucher in einem eigenen Zweig):</p>\n<ul>\n<li>Die Spannung ist für alle <b>gleich</b>;</li>\n<li>der Gesamtwiderstand <b>sinkt</b>: 1/R = 1/R₁ + 1/R₂ + …;</li>\n<li>brennt eine Glühbirne durch, <b>bleiben die anderen an</b>. Deshalb ist die Hausinstallation parallel geschaltet: Jede Steckdose hat 230 V und funktioniert allein.</li>\n</ul>\n<p>Beispiel: R₁ = 6 Ω und R₂ = 3 Ω. In Reihe: 9 Ω. Parallel: 1/R = 1/6 + 1/3 = 3/6 → R = <b>2 Ω</b>.</p>"
  },
  {
   "type": "svg",
   "title": "Stromkreis in Reihe und parallel",
   "svg": "<svg viewBox=\"0 0 640 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"640\" height=\"300\" fill=\"#f8fafc\"/>\n<text x=\"150\" y=\"28\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0f172a\">IN REIHE</text>\n<rect x=\"40\" y=\"60\" width=\"220\" height=\"180\" fill=\"none\" stroke=\"#334155\" stroke-width=\"4\"/>\n<rect x=\"25\" y=\"125\" width=\"30\" height=\"50\" fill=\"#f8fafc\"/>\n<line x1=\"28\" y1=\"135\" x2=\"52\" y2=\"135\" stroke=\"#dc2626\" stroke-width=\"5\"/>\n<line x1=\"33\" y1=\"150\" x2=\"47\" y2=\"150\" stroke=\"#0f172a\" stroke-width=\"5\"/>\n<line x1=\"28\" y1=\"160\" x2=\"52\" y2=\"160\" stroke=\"#dc2626\" stroke-width=\"5\"/>\n<text x=\"10\" y=\"200\" font-size=\"14\" fill=\"#334155\">Batterie</text>\n<circle cx=\"110\" cy=\"60\" r=\"18\" fill=\"#fde047\" stroke=\"#334155\" stroke-width=\"3\"/>\n<path d=\"M98 48 L122 72 M122 48 L98 72\" stroke=\"#334155\" stroke-width=\"2\"/>\n<circle cx=\"190\" cy=\"60\" r=\"18\" fill=\"#fde047\" stroke=\"#334155\" stroke-width=\"3\"/>\n<path d=\"M178 48 L202 72 M202 48 L178 72\" stroke=\"#334155\" stroke-width=\"2\"/>\n<text x=\"150\" y=\"275\" font-size=\"14\" text-anchor=\"middle\" fill=\"#334155\">ein Weg: gleiche Stromstärke</text>\n<path d=\"M120 240 L150 240\" stroke=\"#2563eb\" stroke-width=\"3\"/>\n<polygon points=\"150,234 162,240 150,246\" fill=\"#2563eb\"/>\n<text x=\"470\" y=\"28\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0f172a\">PARALLEL</text>\n<rect x=\"360\" y=\"60\" width=\"240\" height=\"180\" fill=\"none\" stroke=\"#334155\" stroke-width=\"4\"/>\n<line x1=\"480\" y1=\"60\" x2=\"480\" y2=\"240\" stroke=\"#334155\" stroke-width=\"4\"/>\n<rect x=\"345\" y=\"125\" width=\"30\" height=\"50\" fill=\"#f8fafc\"/>\n<line x1=\"348\" y1=\"135\" x2=\"372\" y2=\"135\" stroke=\"#dc2626\" stroke-width=\"5\"/>\n<line x1=\"353\" y1=\"150\" x2=\"367\" y2=\"150\" stroke=\"#0f172a\" stroke-width=\"5\"/>\n<line x1=\"348\" y1=\"160\" x2=\"372\" y2=\"160\" stroke=\"#dc2626\" stroke-width=\"5\"/>\n<circle cx=\"480\" cy=\"150\" r=\"18\" fill=\"#fde047\" stroke=\"#334155\" stroke-width=\"3\"/>\n<path d=\"M468 138 L492 162 M492 138 L468 162\" stroke=\"#334155\" stroke-width=\"2\"/>\n<circle cx=\"600\" cy=\"150\" r=\"18\" fill=\"#fde047\" stroke=\"#334155\" stroke-width=\"3\"/>\n<path d=\"M588 138 L612 162 M612 138 L588 162\" stroke=\"#334155\" stroke-width=\"2\"/>\n<text x=\"480\" y=\"275\" font-size=\"14\" text-anchor=\"middle\" fill=\"#334155\">mehrere Zweige: gleiche Spannung</text>\n</svg>",
   "caption": "Symbole: Die roten und schwarzen Linien sind die Batterie, der Kreis mit dem X ist die Glühbirne. Links geht die andere Lampe aus, wenn du eine herausschraubst; rechts nicht."
  },
  {
   "type": "widget",
   "title": "Erkenne die Teile des Stromkreises",
   "widget": "labelDiagram",
   "options": {
    "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#ecfeff\"/>\n<rect x=\"100\" y=\"60\" width=\"400\" height=\"180\" fill=\"none\" stroke=\"#475569\" stroke-width=\"5\"/>\n<rect x=\"70\" y=\"110\" width=\"60\" height=\"80\" rx=\"6\" fill=\"#f59e0b\" stroke=\"#78350f\" stroke-width=\"3\"/>\n<rect x=\"88\" y=\"98\" width=\"24\" height=\"12\" fill=\"#78350f\"/>\n<circle cx=\"300\" cy=\"60\" r=\"28\" fill=\"#fef08a\" stroke=\"#475569\" stroke-width=\"4\"/>\n<path d=\"M285 60 Q 300 40 315 60\" stroke=\"#b45309\" stroke-width=\"3\" fill=\"none\"/>\n<rect x=\"255\" y=\"230\" width=\"90\" height=\"20\" fill=\"#ecfeff\"/>\n<circle cx=\"260\" cy=\"240\" r=\"6\" fill=\"#475569\"/>\n<circle cx=\"340\" cy=\"240\" r=\"6\" fill=\"#475569\"/>\n<line x1=\"260\" y1=\"240\" x2=\"330\" y2=\"210\" stroke=\"#475569\" stroke-width=\"5\"/>\n<circle cx=\"500\" cy=\"150\" r=\"30\" fill=\"#e2e8f0\" stroke=\"#475569\" stroke-width=\"4\"/>\n<text x=\"500\" y=\"158\" font-size=\"22\" text-anchor=\"middle\" fill=\"#0f172a\">A</text>\n</svg>",
    "spots": [
     {
      "x": 100,
      "y": 150,
      "label": "Quelle (Batterie)"
     },
     {
      "x": 300,
      "y": 60,
      "label": "Verbraucher (Glühbirne)"
     },
     {
      "x": 295,
      "y": 225,
      "label": "Geöffneter Schalter"
     },
     {
      "x": 500,
      "y": 150,
      "label": "Amperemeter"
     },
     {
      "x": 200,
      "y": 240,
      "label": "Leitender Draht"
     }
    ]
   },
   "caption": "Tippe auf jeden Punkt und wähle den Namen. Bei geöffnetem Schalter ist die Glühbirne aus: Der Stromkreis ist nicht geschlossen."
  },
  {
   "type": "text",
   "title": "6. Wirkungen des Stroms und Sicherheit",
   "html": "<ul>\n<li><b>Wärmewirkung</b> (Joule-Effekt): Ein stromdurchflossener Leiter erwärmt sich. Das nutzen Heizöfen, Backöfen, Bügeleisen, Föhne und Warmwasserboiler.</li>\n<li><b>Lichtwirkung</b>: Glühlampen und LEDs.</li>\n<li><b>Magnetische Wirkung</b>: Der Strom erzeugt ein Magnetfeld (Elektromagnete, Klingeln, Motoren).</li>\n<li><b>Chemische Wirkung</b>: Der Strom kann Stoffe trennen (<b>Elektrolyse</b>); umgekehrt kann eine chemische Reaktion Strom erzeugen (Batterien und Akkus).</li>\n</ul>\n<p>⚠️ <b>Strom ist gefährlich</b>, denn der menschliche Körper leitet ihn: Schon Ströme von etwa <b>30 Milliampere</b> durch den Körper können für das Herz sehr gefährlich sein. Goldene Regeln:</p>\n<ul>\n<li>Fasse elektrische Geräte nie mit nassen Händen an und benutze sie im Bad nicht in der Nähe von Wasser;</li>\n<li>Steck keine Gegenstände in Steckdosen und zieh nicht am Kabel;</li>\n<li>Überlaste keine Mehrfachsteckdosen (die „Steckdosenleisten“);</li>\n<li>Im Haus schaltet der <b>Fehlerstromschutzschalter</b> („FI“, auch „Sicherheitsschalter“) den Strom in einem Bruchteil einer Sekunde ab, wenn er einen Fehlerstrom gegen die Erde feststellt (meist schon bei 30 mA); der <b>Schutzleiter</b> (grün-gelb) leitet Fehlerströme zur Erde ab. Solche Anlagen müssen zugelassene Fachleute einbauen und prüfen.</li>\n<li>Such bei einem Gewitter nicht Schutz unter einem einzelnen Baum.</li>\n</ul>"
  },
  {
   "type": "text",
   "title": "7. Der Magnetismus",
   "html": "<p>Ein <b>Magnet</b> zieht Gegenstände aus <b>Eisen</b>, <b>Nickel</b> und <b>Kobalt</b> an. Jeder Magnet hat zwei <b>Pole</b>, Nord und Süd: <b>Gleichnamige Pole stoßen sich ab</b>, <b>ungleichnamige Pole ziehen sich an</b>. Wenn du einen Magneten zerbrichst, erhältst du zwei kleinere Magnete, jeder mit seinem eigenen Nord- und Südpol: Ein einzelner Pol lässt sich nicht isolieren.</p>\n<p>Um einen Magneten herum gibt es ein <b>Magnetfeld</b>, das man sichtbar macht, indem man Eisenfeilspäne auf ein Blatt streut: Die Späne ordnen sich entlang der <b>Feldlinien</b>, die vom Nordpol austreten und in den Südpol eintreten.</p>\n<p>Auch die <b>Erde</b> ist ein riesiger Magnet, dank des flüssigen Eisens, das sich im äußeren Erdkern bewegt. Die Nadel des <b>Kompasses</b> (in China erfunden, seit dem 12.–13. Jahrhundert von europäischen Seefahrern genutzt) richtet sich nach dem Erdfeld aus und zeigt nach Norden. Das Magnetfeld schützt uns außerdem vor dem Sonnenwind: Wenn die Teilchen der Sonne in die Nähe der Pole gelangen, sieht man die <b>Polarlichter</b>.</p>"
  },
  {
   "type": "text",
   "title": "8. Elektrizität und Magnetismus sind verwandt",
   "html": "<p>Im Jahr <b>1820</b> bemerkte der Däne <b>Hans Christian Ørsted</b> während einer Vorlesung, dass sich die Nadel eines Kompasses bewegte, wenn in einem nahen Draht Strom floss: <b>Der elektrische Strom erzeugt ein Magnetfeld</b>. Wickelt man einen Draht um einen Eisennagel, entsteht ein <b>Elektromagnet</b>, der „ausgeschaltet“ wird, sobald man den Strom abstellt (genutzt in Schrottkränen, Klingeln und Relais).</p>\n<p>Im Jahr <b>1831</b> entdeckte der Engländer <b>Michael Faraday</b> das Umgekehrte: <b>Bewegt man einen Magneten in einer Drahtspule, entsteht Strom</b> (elektromagnetische Induktion). Daraus entstehen:</p>\n<ul>\n<li>der <b>Generator</b> (Wechselstromgenerator): In Wasserkraft-, Wind- und Wärmekraftwerken dreht eine Turbine Magnete und Spulen und erzeugt so Strom. Der Fahrraddynamo funktioniert genauso;</li>\n<li>der <b>Elektromotor</b>: Er macht den umgekehrten Weg und wandelt elektrische Energie in Bewegung um (Mixer, Elektroautos, Ventilatoren). Der Italiener <b>Galileo Ferraris</b> entdeckte 1885 das Drehfeld, die Grundlage der Wechselstrommotoren;</li>\n<li>der <b>Transformator</b>, der die Spannung erhöht oder senkt: Der Strom reist in den Hochspannungsleitungen (in Italien bis zu 380.000 V) und kommt mit 230 V bei uns zu Hause an.</li>\n</ul>\n<p>Im Jahr 1865 fasste der Schotte <b>James Clerk Maxwell</b> alles in vier Gleichungen zusammen und erkannte, dass das <b>Licht</b> selbst eine elektromagnetische Welle ist.</p>"
  },
  {
   "type": "example",
   "title": "Praktisches Beispiel: Bau einen Elektromagneten",
   "html": "<p>Du brauchst: einen etwa 8 cm langen Eisennagel, 1 Meter dünnen isolierten Kupferdraht, eine Batterie mit 1,5 V, ein paar Büroklammern. Mach das zusammen mit einem Erwachsenen.</p>\n<ol>\n<li>Wickle den Draht mit 30–40 engen Windungen um den Nagel und lass die beiden Enden frei.</li>\n<li>Entferne an den Drahtenden etwa 1 cm der Isolierung.</li>\n<li>Halte die Enden für einige Sekunden an die Pole der Batterie: Der Nagel <b>zieht die Büroklammern an</b>!</li>\n<li>Löse ein Ende: Die Büroklammern fallen herunter.</li>\n</ol>\n<p>Probier aus, die Windungen zu verdoppeln: Wie viele Büroklammern hebt er jetzt? Mehr Windungen und mehr Strom = stärkeres Magnetfeld. ⚠️ Lass ihn nicht lange angeschlossen: Der Draht wird heiß (Joule-Effekt) und die Batterie entlädt sich.</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du schon…? Die Batterie ist italienisch",
   "html": "<p>Im Jahr <b>1799</b> stapelte der Mann aus Como, <b>Alessandro Volta</b>, Scheiben aus Zink und Kupfer, die durch in Salzwasser getränkte Tücher getrennt waren, und erhielt so die erste <b>Batterie</b>, den ersten Gleichstromerzeuger (er gab sie 1800 bekannt). Er tat das, um zu zeigen, dass Luigi Galvani sich bei der „tierischen Elektrizität“ der Frösche geirrt hatte. Zu seinen Ehren heißt die Einheit der Spannung <b>Volt</b>. Und das Wort „Elektrizität“ kommt vom griechischen <i>élektron</i>, was <b>Bernstein</b> bedeutet: Schon der Philosoph Thales hatte im 6. Jahrhundert v. Chr. bemerkt, dass geriebener Bernstein kleine Strohhalme anzieht.</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du schon…? Der Blitz und der Blitzableiter",
   "html": "<p>Ein <b>Blitz</b> ist eine riesige Entladung zwischen Wolke und Erde: Die Spannung kann Hunderte Millionen Volt erreichen und die Stromstärke zehntausende Ampere, doch er dauert weniger als eine Tausendstelsekunde. Die Luft um ihn herum erhitzt sich auf etwa 30.000 °C (heißer als die Sonnenoberfläche) und dehnt sich plötzlich aus: Das ist der <b>Donner</b>. Im Jahr 1752 zeigte Benjamin Franklin mit einem Drachen, dass Blitze Elektrizität sind, und erfand den <b>Blitzableiter</b>. Um abzuschätzen, wie weit ein Gewitter entfernt ist: Zähl die Sekunden zwischen Blitz und Donner und teil durch 3: Du erhältst die Entfernung in Kilometern.</p>"
  },
  {
   "type": "alternatives",
   "title": "Andere Wege, den Strom zu verstehen",
   "intro": "Strom kann man nicht sehen: Hier sind einige Bilder, die dir helfen, ihn dir vorzustellen.",
   "tabs": [
    {
     "label": "💧 Das Wasser-Modell",
     "html": "<p>Stell dir einen Stromkreis wie eine Wasserleitung vor:</p>\n<ul>\n<li>die <b>Batterie</b> ist eine <b>Pumpe</b>, die Wasser hochpumpt: Die <b>Spannung</b> ist der Höhenunterschied (der Druck);</li>\n<li>der <b>Strom</b> ist die Wassermenge, die jede Sekunde durch das Rohr fließt;</li>\n<li>der <b>Widerstand</b> ist ein enges Rohr oder ein fast geschlossener Hahn;</li>\n<li>der <b>Schalter</b> ist ein Absperrschieber.</li>\n</ul>\n<p>Mit mehr Druck fließt mehr Wasser (größere U → größeres I); mit einem engeren Rohr fließt weniger (größeres R → kleineres I). Das ist das ohmsche Gesetz!</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#f0f9ff\"/>\n<rect x=\"40\" y=\"40\" width=\"80\" height=\"60\" fill=\"#38bdf8\" stroke=\"#0369a1\" stroke-width=\"3\"/>\n<text x=\"80\" y=\"76\" font-size=\"15\" text-anchor=\"middle\" fill=\"#0c4a6e\">hoher Tank</text>\n<rect x=\"40\" y=\"190\" width=\"80\" height=\"40\" fill=\"#38bdf8\" stroke=\"#0369a1\" stroke-width=\"3\"/>\n<text x=\"80\" y=\"215\" font-size=\"14\" text-anchor=\"middle\" fill=\"#0c4a6e\">unten</text>\n<path d=\"M120 70 L360 70 L360 210 L120 210\" fill=\"none\" stroke=\"#0369a1\" stroke-width=\"16\"/>\n<rect x=\"340\" y=\"110\" width=\"40\" height=\"60\" fill=\"#f59e0b\" stroke=\"#78350f\" stroke-width=\"3\"/>\n<text x=\"400\" y=\"145\" font-size=\"15\" fill=\"#78350f\">Engstelle = Widerstand</text>\n<circle cx=\"80\" cy=\"150\" r=\"22\" fill=\"#a78bfa\" stroke=\"#5b21b6\" stroke-width=\"3\"/>\n<text x=\"80\" y=\"156\" font-size=\"14\" text-anchor=\"middle\" fill=\"#fff\">Pumpe</text>\n<line x1=\"80\" y1=\"128\" x2=\"80\" y2=\"100\" stroke=\"#5b21b6\" stroke-width=\"4\"/>\n<line x1=\"80\" y1=\"172\" x2=\"80\" y2=\"190\" stroke=\"#5b21b6\" stroke-width=\"4\"/>\n<text x=\"240\" y=\"60\" font-size=\"15\" text-anchor=\"middle\" fill=\"#0c4a6e\">Wasserfluss = Strom →</text>\n<text x=\"180\" y=\"130\" font-size=\"15\" fill=\"#5b21b6\">Pumpe = Batterie</text>\n<text x=\"180\" y=\"150\" font-size=\"15\" fill=\"#5b21b6\">Höhenunterschied = Spannung</text>\n</svg>"
    },
    {
     "label": "🔺 Das magische Dreieck",
     "html": "<p>In englischen Schulen benutzt man das <b>U-R-I-Dreieck</b>. Bedecke mit dem Finger die Größe, die du suchst, und lies, was übrig bleibt:</p>\n<ul><li>bedeckst du <b>U</b> → bleibt R neben I → <b>U = R × I</b>;</li>\n<li>bedeckst du <b>I</b> → bleibt U über R → <b>I = U : R</b>;</li>\n<li>bedeckst du <b>R</b> → bleibt U über I → <b>R = U : I</b>.</li></ul>\n<p>Derselbe Trick funktioniert für die Leistung, mit P oben und U, I unten.</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#fdf4ff\"/>\n<polygon points=\"300,20 470,230 130,230\" fill=\"#f0abfc\" stroke=\"#86198f\" stroke-width=\"4\"/>\n<line x1=\"210\" y1=\"130\" x2=\"390\" y2=\"130\" stroke=\"#86198f\" stroke-width=\"4\"/>\n<line x1=\"300\" y1=\"130\" x2=\"300\" y2=\"230\" stroke=\"#86198f\" stroke-width=\"4\"/>\n<text x=\"300\" y=\"110\" font-size=\"44\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4a044e\">U</text>\n<text x=\"240\" y=\"200\" font-size=\"40\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4a044e\">R</text>\n<text x=\"360\" y=\"200\" font-size=\"40\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4a044e\">I</text>\n<text x=\"300\" y=\"255\" font-size=\"15\" text-anchor=\"middle\" fill=\"#4a044e\">waagrechter Strich = geteilt · senkrechter Strich = mal</text>\n</svg>"
    },
    {
     "label": "⚛️ Die Elektronen in 3D",
     "html": "<p>Schau dir die Atome genauer an: In Metallen wie <b>Kupfer</b> ist das äußerste Elektron weit vom Kern entfernt und nur schwach gehalten. Wenn du eine Batterie anschließt, „gleiten“ alle diese freien Elektronen in dieselbe Richtung, vom Minuspol zum Pluspol. Das Erstaunliche: Sie bewegen sich sehr langsam (nur wenige Millimeter pro Minute!), aber der „Schub“ breitet sich fast mit Lichtgeschwindigkeit aus, so wie wenn du eine Reihe Murmeln in einem vollen Rohr anstößt.</p>",
     "scene": "atom",
     "options": {
      "elements": [
       "Cu",
       "Ag",
       "Au",
       "Al"
      ]
     }
    },
    {
     "label": "🧲 Wissenschaftler und Entdeckung zuordnen",
     "html": "<p>Die Geschichte der Elektrizität ist ein Staffellauf zwischen Wissenschaftlern vieler Länder. Ordne jeden seiner Entdeckung zu.</p>",
     "widget": "match",
     "options": {
      "pairs": [
       [
        "Alessandro Volta",
        "Die Batterie (1799)"
       ],
       [
        "Hans Christian Ørsted",
        "Der Strom bringt die Kompassnadel zum Drehen (1820)"
       ],
       [
        "Georg Simon Ohm",
        "U = R × I (1827)"
       ],
       [
        "Michael Faraday",
        "Elektromagnetische Induktion (1831)"
       ],
       [
        "Galileo Ferraris",
        "Magnetfeld, das rotiert (1885)"
       ],
       [
        "Benjamin Franklin",
        "Der Blitzableiter (1752)"
       ]
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Karte zu Elektrizität und Magnetismus: Tippe auf die Knoten und entdecke das Warum",
   "nodes": [
    {
     "id": "carica",
     "label": "Elektrische Ladung",
     "x": 50,
     "y": 6,
     "color": "#ef4444",
     "html": "Eigenschaft von Protonen (+) und Elektronen (−).",
     "why": "Das Elektron wurde 1897 von J. J. Thomson entdeckt; die kleinste Ladung (die des Elektrons, 1,6 × 10⁻¹⁹ C) wurde 1909 von Robert Millikan mit Öltröpfchen gemessen."
    },
    {
     "id": "coulomb",
     "label": "Anziehung und Abstoßung",
     "x": 15,
     "y": 22,
     "color": "#f97316",
     "html": "Gleiche Ladungen stoßen sich ab, entgegengesetzte ziehen sich an.",
     "why": "<b>Coulomb</b> stellte 1785 mit einer Torsionswaage fest, dass die Kraft mit dem Quadrat der Entfernung abnimmt, genau wie die Schwerkraft bei Newton."
    },
    {
     "id": "conduttori",
     "label": "Leiter und Isolatoren",
     "x": 85,
     "y": 22,
     "color": "#f59e0b",
     "html": "Materialien, die Ladungen fließen lassen oder nicht.",
     "why": "Es hängt von den äußeren Elektronen ab: In Metallen können sie sich frei zwischen den Atomen bewegen, in Isolatoren bleiben sie an ihre Atome gebunden."
    },
    {
     "id": "corrente",
     "label": "Strom, Spannung, Widerstand",
     "x": 50,
     "y": 38,
     "color": "#2563eb",
     "html": "I (Ampere), U (Volt), R (Ohm).",
     "why": "Der Gleichstrom ließ sich erst untersuchen, nachdem es die <b>Batterie von Volta</b> (1799) gab: Vorher kannte man nur kurze Entladungen."
    },
    {
     "id": "ohm",
     "label": "Ohmsches Gesetz",
     "x": 20,
     "y": 60,
     "color": "#0ea5e9",
     "html": "U = R × I.",
     "why": "<b>Ohm</b> leitete es 1827 ab, indem er sorgfältig den Strom in Drähten unterschiedlicher Länge maß. Anfangs wurde er kritisiert; 1841 zeichnete ihn die Royal Society dann aus."
    },
    {
     "id": "circuiti",
     "label": "Reihen- und Parallelschaltung",
     "x": 20,
     "y": 85,
     "color": "#14b8a6",
     "html": "Verschiedene Anschlussarten der Verbraucher.",
     "why": "Aus dem ohmschen Gesetz und der Ladungserhaltung (Kirchhoffsche Regeln, 1845) ergibt sich, wie sich Widerstände in Reihe und parallel addieren."
    },
    {
     "id": "potenza",
     "label": "Leistung und Energie",
     "x": 50,
     "y": 85,
     "color": "#22c55e",
     "html": "P = U × I (Watt); E = P × t (kWh).",
     "why": "James Prescott Joule (1840) maß die Wärme, die der Strom erzeugt, und zeigte, dass sich Energie umwandelt, aber erhalten bleibt."
    },
    {
     "id": "magnetismo",
     "label": "Magnete und Magnetfeld",
     "x": 82,
     "y": 55,
     "color": "#a855f7",
     "html": "Nord- und Südpol, Feldlinien, Erdmagnetismus.",
     "why": "William Gilbert erkannte 1600 (<i>De Magnete</i>), dass die Erde ein großer Magnet ist. Das Erdfeld entsteht durch das flüssige, sich bewegende Eisen im äußeren Kern."
    },
    {
     "id": "elettromagnetismo",
     "label": "Elektromagnetismus",
     "x": 82,
     "y": 85,
     "color": "#7c3aed",
     "html": "Strom erzeugt Magnetismus; bewegter Magnetismus erzeugt Strom.",
     "why": "<b>Ørsted</b> (1820) und <b>Faraday</b> (1831) entdeckten ihn; <b>Maxwell</b> (1865) beschrieb ihn mit 4 Gleichungen und sagte die elektromagnetischen Wellen (Radio, Licht) voraus, die Hertz 1887 nachwies."
    }
   ],
   "edges": [
    [
     "carica",
     "coulomb",
     "übt Kräfte aus"
    ],
    [
     "carica",
     "conduttori",
     "bewegt sich in den"
    ],
    [
     "conduttori",
     "corrente",
     "ermöglichen den"
    ],
    [
     "corrente",
     "ohm",
     "ist verknüpft durch das"
    ],
    [
     "ohm",
     "circuiti",
     "erklärt die"
    ],
    [
     "corrente",
     "potenza",
     "transportiert"
    ],
    [
     "corrente",
     "elettromagnetismo",
     "erzeugt Magnetismus"
    ],
    [
     "magnetismo",
     "elettromagnetismo",
     "in Bewegung erzeugt Strom"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Stromkreise und Magnete",
   "questions": [
    {
     "type": "mc",
     "q": "Warum ist die Hausinstallation parallel geschaltet?",
     "options": [
      "Um Draht zu sparen",
      "Weil jedes Gerät 230 V bekommt und allein funktioniert",
      "Weil der Strom schwächer ist"
     ],
     "answer": 1,
     "explain": "Bei der Parallelschaltung hat jeder Zweig dieselbe Spannung und ist unabhängig."
    },
    {
     "type": "num",
     "q": "Zwei Widerstände von 4 Ω und 6 Ω sind in Reihe geschaltet. Wie groß ist der Gesamtwiderstand?",
     "answer": 10,
     "unit": "Ω",
     "explain": "In Reihe addieren sie sich: 4 + 6 = 10 Ω."
    },
    {
     "type": "tf",
     "q": "Wenn man einen Magneten in eine Spule bewegt, entsteht Strom.",
     "answer": true,
     "explain": "Das ist die elektromagnetische Induktion, die Faraday entdeckte."
    }
   ]
  },
  {
   "type": "remember",
   "title": "Zum Merken",
   "html": "<ul>\n<li>Gleiche Ladungen stoßen sich ab, entgegengesetzte ziehen sich an. Aufladen: durch Reiben, Berührung, Influenz.</li>\n<li><b>I</b> in Ampere, <b>U</b> in Volt, <b>R</b> in Ohm. Ohmsches Gesetz: <b>U = R × I</b>.</li>\n<li><b>P = U × I</b> (Watt); Energie <b>E = P × t</b> (kWh).</li>\n<li>Reihe: gleiche Stromstärke, Widerstände addieren sich. Parallel: gleiche Spannung, unabhängige Zweige.</li>\n<li>Gleichnamige Magnetpole stoßen sich ab; die Erde ist ein Magnet.</li>\n<li>Strom → Magnetismus (Ørsted); bewegter Magnet → Strom (Faraday).</li>\n</ul>"
  }
 ],
 "glossary": [
  {
   "t": "Elektrische Ladung",
   "d": "Eigenschaft der Materie: positiv (Protonen) oder negativ (Elektronen)."
  },
  {
   "t": "Leiter",
   "d": "Material, in dem sich die Ladungen leicht bewegen."
  },
  {
   "t": "Isolator",
   "d": "Material, das den Strom nicht hindurchlässt."
  },
  {
   "t": "Elektrischer Strom",
   "d": "Geordneter Fluss von Ladungen; gemessen in Ampere (A)."
  },
  {
   "t": "Spannung",
   "d": "Potenzialdifferenz, die die Ladungen antreibt; gemessen in Volt (V)."
  },
  {
   "t": "Widerstand",
   "d": "Hemmung des Stromflusses; gemessen in Ohm (Ω)."
  },
  {
   "t": "Elektrische Leistung",
   "d": "Jede Sekunde verbrauchte Energie: P = U × I, in Watt."
  },
  {
   "t": "Kilowattstunde",
   "d": "Energie, die ein 1.000-W-Gerät in einer Stunde verbraucht."
  },
  {
   "t": "Stromkreis",
   "d": "Geschlossener Weg, auf dem der Strom fließt."
  },
  {
   "t": "Magnetfeld",
   "d": "Bereich um einen Magneten oder einen stromdurchflossenen Leiter, in dem magnetische Kräfte wirken."
  },
  {
   "t": "Elektromagnetische Induktion",
   "d": "Erzeugung von Strom durch ein sich änderndes Magnetfeld."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Ein Luftballon, der an den Haaren gerieben wurde, lädt sich auf…",
    "options": [
     "durch Berührung",
     "durch Reiben",
     "durch Influenz"
    ],
    "answer": 1,
    "explain": "Beim Reiben wandern Elektronen von den Haaren auf den Ballon."
   },
   {
    "type": "mc",
    "q": "Welcher dieser Stoffe ist ein Isolator?",
    "options": [
     "Kupfer",
     "Gummi",
     "Salzwasser",
     "Graphit"
    ],
    "answer": 1,
    "explain": "Gummi lässt den Strom nicht hindurch."
   },
   {
    "type": "num",
    "q": "Eine Glühbirne hat einen Widerstand von 6 Ω, und die Batterie liefert 12 V. Wie viele Ampere fließen?",
    "answer": 2,
    "unit": "A",
    "explain": "I = 12 : 6 = 2 A."
   },
   {
    "type": "num",
    "q": "In einem Stromkreis fließen 0,5 A durch einen Widerstand von 18 Ω. Wie groß ist die Spannung?",
    "answer": 9,
    "unit": "V",
    "explain": "U = R × I = 18 × 0,5 = 9 V."
   },
   {
    "type": "num",
    "q": "Ein Ofen mit 2 kW ist 3 Stunden eingeschaltet. Wie viele kWh verbraucht er?",
    "answer": 6,
    "unit": "kWh",
    "explain": "E = 2 kW × 3 h = 6 kWh."
   },
   {
    "type": "num",
    "q": "Zwei Widerstände von je 10 Ω sind parallel geschaltet. Wie groß ist der Gesamtwiderstand?",
    "answer": 5,
    "unit": "Ω",
    "explain": "1/R = 1/10 + 1/10 = 2/10 → R = 5 Ω."
   },
   {
    "type": "tf",
    "q": "In einer Reihenschaltung bleiben die anderen Lampen an, wenn eine Glühbirne durchbrennt.",
    "answer": false,
    "explain": "In Reihe gibt es nur einen Weg: Alle gehen aus."
   },
   {
    "type": "text",
    "q": "Wie heißt der italienische Wissenschaftler, der die Batterie erfand?",
    "answer": [
     "volta",
     "alessandro volta"
    ],
    "explain": "Alessandro Volta, 1799."
   },
   {
    "type": "mc",
    "q": "Was entdeckte Ørsted 1820?",
    "options": [
     "Dass der Strom ein Magnetfeld erzeugt",
     "Das Gesetz U = R × I",
     "Das Elektron"
    ],
    "answer": 0,
    "explain": "Ein stromdurchflossener Draht bringt die Kompassnadel zum Drehen."
   },
   {
    "type": "mc",
    "q": "Auf welchem Prinzip beruhen die Generatoren der Kraftwerke?",
    "options": [
     "Joule-Effekt",
     "Elektromagnetische Induktion",
     "Elektrisierung durch Reiben"
    ],
    "answer": 1,
    "explain": "Sich drehende Magnete und Spulen erzeugen Strom."
   },
   {
    "type": "tf",
    "q": "Zwei Nordpole zweier Magnete ziehen sich an.",
    "answer": false,
    "explain": "Gleichnamige Pole stoßen sich ab."
   },
   {
    "type": "order",
    "q": "Bring die Entdeckungen in die richtige zeitliche Reihenfolge.",
    "items": [
     "Blitzableiter von Franklin",
     "Batterie von Volta",
     "Versuch von Ørsted",
     "Ohmsches Gesetz",
     "Induktion von Faraday"
    ],
    "explain": "1752, 1799, 1820, 1827, 1831."
   }
  ],
  "gen": [
   [
    "proportion",
    2
   ]
  ]
 }
});
