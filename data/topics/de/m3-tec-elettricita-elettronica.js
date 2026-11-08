TOPIC('de', {
 "id": "m3-tec-elettricita-elettronica",
 "title": "Elettricità ed elettronica",
 "intro": "Du machst das Licht an, lädst dein Handy, und die Waschmaschine schaltet sich am Ende des Programms von selbst ab: alles dank der <b>Elektrizität</b> und der <b>Elektronik</b>. In dieser Lektion entdecken wir, was der elektrische Strom ist, wie man einen <b>Stromkreis</b> aufbaut, das <b>Ohmsche Gesetz</b>, die wichtigsten <b>Bauteile</b> (Widerstände, LEDs, Dioden, Kondensatoren, Transistoren) und die <b>Sensoren</b>, mit denen Maschinen die Welt „spüren“. ⚡🔌",
 "minutes": 50,
 "sections": [
  {
   "type": "text",
   "title": "1. Woher kommt die Elektrizität: Ladungen und Elektronen",
   "html": "<p>Alle Materie besteht aus <b>Atomen</b>. Jedes Atom hat einen <b>Kern</b> mit <b>Protonen</b> (positive Ladung +) und Neutronen (ohne Ladung), und um ihn herum kreisen die <b>Elektronen</b> (negative Ladung −).</p>\n<p>In <b>Metallen</b> (Kupfer, Aluminium, Silber …) sind die äußersten Elektronen nur schwach gebunden: Sie können von einem Atom zum nächsten wandern. Man nennt sie <b>freie Elektronen</b>.</p>\n<p>Der <b>elektrische Strom</b> ist ein <b>geordneter Fluss elektrischer Ladungen</b> (in Metalldrähten: Elektronen), die sich in einem <b>geschlossenen Stromkreis</b> bewegen.</p>\n<ul>\n<li><b>Leiter</b>: lassen den Strom leicht durch (Metalle, Graphit, Salzwasser, der menschliche Körper!).</li>\n<li><b>Isolatoren</b>: sperren ihn (Kunststoff, Gummi, Glas, trockenes Holz, Keramik, Luft).</li>\n<li><b>Halbleiter</b>: liegen dazwischen; ihre Leitfähigkeit lässt sich steuern (Silizium, Germanium). Sie sind die Grundlage der <b>Elektronik</b>.</li>\n</ul>"
  },
  {
   "type": "3d",
   "title": "Die Atome eines Leiters und eines Halbleiters",
   "scene": "atom",
   "options": {
    "elements": [
     "Cu",
     "Al",
     "Si"
    ]
   },
   "caption": "Kupfer (Cu) hat nur ein Elektron in der äußersten Schale, das sich leicht „lösen“ lässt: Deshalb ist es ein hervorragender Leiter. Silizium (Si) hat davon vier: Es ist ein Halbleiter."
  },
  {
   "type": "text",
   "title": "2. Die drei Größen: Spannung, Stromstärke, Widerstand",
   "html": "<p>Stell dir einen Stromkreis wie eine <b>Wasserleitung</b> vor:</p>\n<table>\n<tr><th>Größe</th><th>Zeichen</th><th>Einheit</th><th>Messgerät</th><th>Vergleich mit Wasser</th></tr>\n<tr><td><b>Spannung</b> (Potenzialdifferenz)</td><td>V</td><td>Volt (V)</td><td>Voltmeter</td><td>der <b>Druck</b> / das Gefälle, das das Wasser antreibt</td></tr>\n<tr><td><b>Stromstärke</b></td><td>I</td><td>Ampere (A)</td><td>Amperemeter</td><td>wie viel Wasser <b>jede Sekunde</b> fließt</td></tr>\n<tr><td><b>Widerstand</b></td><td>R</td><td>Ohm (Ω)</td><td>Ohmmeter</td><td>ein <b>enges Rohr</b>, das den Fluss bremst</td></tr>\n</table>\n<p>Ein <b>Multimeter</b> (oder Tester) misst alle drei.</p>\n<p>Nützliche Werte: eine Mignon-Batterie (AA) = <b>1,5 V</b>; eine Autobatterie = <b>12 V</b>; der USB-Anschluss = <b>5 V</b>; die Steckdose in Italien = <b>230 V</b> Wechselspannung mit <b>50 Hz</b> (gefährlich!).</p>"
  },
  {
   "type": "text",
   "title": "3. Das Ohmsche Gesetz und die Leistung",
   "html": "<p>Im Jahr <b>1827</b> entdeckte der deutsche Physiker <b>Georg Simon Ohm</b>, dass in vielen Leitern Spannung und Stromstärke <b>direkt proportional</b> sind:</p>\n<p style=\"font-size:1.3em;text-align:center\"><b>V = R × I</b></p>\n<p>und daraus folgt: <b>I = V ÷ R</b> und <b>R = V ÷ I</b>.</p>\n<p>Beispiel: Ein Widerstand von <b>100 Ω</b> an <b>5 V</b> angeschlossen ➜ I = 5 ÷ 100 = <b>0,05 A</b> = 50 mA (Milliampere).</p>\n<p>Die <b>elektrische Leistung</b> (wie viel Energie pro Sekunde umgesetzt wird) misst man in <b>Watt (W)</b>:</p>\n<p style=\"font-size:1.3em;text-align:center\"><b>P = V × I</b></p>\n<p>Beispiel: Ein Föhn an 230 V, der 8 A aufnimmt, hat die Leistung 230 × 8 = <b>1840 W</b>. Die verbrauchte Energie bezahlt man in <b>Kilowattstunden (kWh)</b>: 1 kW, eine Stunde lang genutzt.</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Größen und Ohmsches Gesetz",
   "questions": [
    {
     "type": "mc",
     "q": "In welcher Einheit misst man den Widerstand?",
     "options": [
      "Volt",
      "Ampere",
      "Ohm"
     ],
     "answer": 2,
     "explain": "Der Widerstand wird in Ohm (Ω) gemessen, zu Ehren von Georg Ohm."
    },
    {
     "type": "num",
     "q": "Ein Widerstand von 10 Ω ist an eine 9-V-Batterie angeschlossen. Wie viele Ampere fließen?",
     "answer": 0.9,
     "tol": 0.01,
     "unit": "A",
     "explain": "I = V ÷ R = 9 ÷ 10 = 0,9 A."
    },
    {
     "type": "tf",
     "q": "Kunststoff ist ein guter Leiter.",
     "answer": false,
     "explain": "Kunststoff ist ein Isolator: Deshalb umhüllt man damit die Stromdrähte."
    }
   ]
  },
  {
   "type": "text",
   "title": "4. Der elektrische Stromkreis: Reihenschaltung und Parallelschaltung",
   "html": "<p>Ein einfacher Stromkreis hat immer:</p>\n<ol>\n<li>eine <b>Quelle</b> (Batterie, Akku, Netzteil), die die Spannung liefert;</li>\n<li><b>Leiter</b> (Drähte), die den Strom führen;</li>\n<li>einen <b>Verbraucher</b> (Lampe, Motor, LED), der die elektrische Energie in Licht, Bewegung, Wärme … umwandelt;</li>\n<li>einen <b>Schalter</b>, um den Stromkreis zu öffnen oder zu schließen.</li>\n</ol>\n<p>Der Strom fließt nur, wenn der Stromkreis <b>geschlossen</b> ist. Nach Konvention sagt man, er fließe vom <b>+</b> zum <b>−</b> (technische Stromrichtung), obwohl sich die Elektronen in die entgegengesetzte Richtung bewegen!</p>\n<p><b>Reihenschaltung</b>: Die Bauteile liegen hintereinander auf einem einzigen Weg. Der Strom ist überall gleich; wenn eine Lampe durchbrennt, gehen alle aus (wie bei den alten Weihnachtslichtern). Die Widerstände addieren sich: R<sub>ges</sub> = R<sub>1</sub> + R<sub>2</sub>.</p>\n<p><b>Parallelschaltung</b>: Jedes Bauteil hat seinen eigenen Zweig. Die Spannung ist überall gleich; wenn eine Lampe durchbrennt, bleiben die anderen an. So sind die Steckdosen im Haus angeschlossen.</p>"
  },
  {
   "type": "svg",
   "title": "Schema: Stromkreis in Reihe und parallel",
   "caption": "Links zwei Lampen in Reihe (ein einziger Weg); rechts parallel (zwei Zweige). Vereinheitlichte Symbole: Batterie, Schalter, Lampe.",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/>\n<text x=\"150\" y=\"28\" font-size=\"18\" font-weight=\"bold\" fill=\"#1e40af\" text-anchor=\"middle\">REIHE</text>\n<text x=\"450\" y=\"28\" font-size=\"18\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">PARALLEL</text>\n<g stroke=\"#0f172a\" stroke-width=\"3\" fill=\"none\">\n<polyline points=\"40,150 40,60 105,60\"/><polyline points=\"135,60 260,60 260,95\"/><line x1=\"260\" y1=\"145\" x2=\"260\" y2=\"175\"/><polyline points=\"260,225 260,250 40,250 40,180\"/>\n<line x1=\"105\" y1=\"60\" x2=\"130\" y2=\"45\"/>\n<line x1=\"20\" y1=\"150\" x2=\"60\" y2=\"150\"/><line x1=\"28\" y1=\"180\" x2=\"52\" y2=\"180\"/>\n<circle cx=\"260\" cy=\"120\" r=\"22\"/><line x1=\"245\" y1=\"105\" x2=\"275\" y2=\"135\"/><line x1=\"275\" y1=\"105\" x2=\"245\" y2=\"135\"/>\n<circle cx=\"260\" cy=\"200\" r=\"22\"/><line x1=\"245\" y1=\"185\" x2=\"275\" y2=\"215\"/><line x1=\"275\" y1=\"185\" x2=\"245\" y2=\"215\"/>\n</g>\n<circle cx=\"105\" cy=\"60\" r=\"4\" fill=\"#0f172a\"/><circle cx=\"135\" cy=\"60\" r=\"4\" fill=\"#0f172a\"/>\n<text x=\"70\" y=\"145\" font-size=\"16\" fill=\"#dc2626\" font-weight=\"bold\">+</text>\n<text x=\"70\" y=\"195\" font-size=\"16\" fill=\"#2563eb\" font-weight=\"bold\">−</text>\n<text x=\"120\" y=\"88\" font-size=\"13\" fill=\"#334155\" text-anchor=\"middle\">Schalter</text>\n<text x=\"100\" y=\"170\" font-size=\"13\" fill=\"#334155\" text-anchor=\"middle\">Batterie</text>\n<g stroke=\"#0f172a\" stroke-width=\"3\" fill=\"none\">\n<polyline points=\"340,150 340,60 560,60 560,98\"/><polyline points=\"460,60 460,98\"/>\n<polyline points=\"460,142 460,250\"/><polyline points=\"560,142 560,250 340,250 340,180\"/>\n<line x1=\"320\" y1=\"150\" x2=\"360\" y2=\"150\"/><line x1=\"328\" y1=\"180\" x2=\"352\" y2=\"180\"/>\n<circle cx=\"460\" cy=\"120\" r=\"22\"/><line x1=\"445\" y1=\"105\" x2=\"475\" y2=\"135\"/><line x1=\"475\" y1=\"105\" x2=\"445\" y2=\"135\"/>\n<circle cx=\"560\" cy=\"120\" r=\"22\"/><line x1=\"545\" y1=\"105\" x2=\"575\" y2=\"135\"/><line x1=\"575\" y1=\"105\" x2=\"545\" y2=\"135\"/>\n</g>\n<circle cx=\"460\" cy=\"60\" r=\"5\" fill=\"#0f172a\"/><circle cx=\"460\" cy=\"250\" r=\"5\" fill=\"#0f172a\"/>\n<text x=\"370\" y=\"145\" font-size=\"16\" fill=\"#dc2626\" font-weight=\"bold\">+</text>\n<text x=\"370\" y=\"195\" font-size=\"16\" fill=\"#2563eb\" font-weight=\"bold\">−</text>\n<text x=\"510\" y=\"200\" font-size=\"13\" fill=\"#166534\" text-anchor=\"middle\">2 Zweige</text>\n<text x=\"300\" y=\"285\" font-size=\"14\" fill=\"#334155\" text-anchor=\"middle\">⊗ = Lampe · lang/kurz = Batterie (+/−) · ● = Knoten</text>\n</svg>"
  },
  {
   "type": "text",
   "title": "5. Von der Elektrotechnik zur Elektronik: die Bauteile",
   "html": "<p>Die <b>Elektrotechnik</b> nutzt die Elektrizität als <b>Energie</b> (Motoren, Heizungen, Lampen). Die <b>Elektronik</b> nutzt sie, um <b>Informationen</b> zu <b>steuern</b> und weiterzugeben (Computer, Telefone, Sensoren). Die wichtigsten Bauteile:</p>\n<ul>\n<li><b>Widerstand</b>: begrenzt den Strom. Der Wert wird mit <b>Farbringen</b> angegeben (z. B. braun-schwarz-rot = 1000 Ω = 1 kΩ).</li>\n<li><b>Diode</b>: lässt den Strom <b>nur in eine Richtung</b> durch, wie ein Rückschlagventil.</li>\n<li><b>LED</b> (Light Emitting Diode, Leuchtdiode): eine Diode, die <b>Licht aussendet</b>. Sie hat ein langes Beinchen (+, Anode) und ein kurzes (−, Kathode) und muss immer mit einem <b>Widerstand</b> geschützt werden, sonst brennt sie durch.</li>\n<li><b>Kondensator</b>: speichert elektrische Ladungen für einen Moment und gibt sie wieder ab (wie ein kleiner Speicher): dient zum Filtern, für Zeitsteuerungen und für den Blitz der Kamera.</li>\n<li><b>Transistor</b>: ein elektrisch gesteuerter Schalter oder Verstärker ohne bewegliche Teile. Ein moderner Prozessor enthält davon <b>Milliarden</b>.</li>\n<li><b>Integrierter Schaltkreis</b> (Chip): viele miniaturisierte Bauteile auf einem Siliziumplättchen.</li>\n</ul>"
  },
  {
   "type": "text",
   "title": "6. Die Sensoren: die „Sinnesorgane“ der Schaltungen",
   "html": "<p>Ein <b>Sensor</b> wandelt eine physikalische Größe (Licht, Wärme, Bewegung …) in ein <b>elektrisches Signal</b> um, das eine Schaltung oder ein Mikrocontroller lesen kann.</p>\n<table>\n<tr><th>Sensor</th><th>Was er „spürt“</th><th>Wo du ihn findest</th></tr>\n<tr><td><b>Fotowiderstand (LDR)</b></td><td>Licht: mehr Licht, weniger Widerstand</td><td>Straßenlaternen, die sich im Dunkeln einschalten</td></tr>\n<tr><td><b>Heißleiter (NTC)</b></td><td>Temperatur</td><td>Thermostat, Kühlschrank, digitales Thermometer</td></tr>\n<tr><td><b>PIR</b> (passive Infrarot)</td><td>Bewegung warmer Körper</td><td>Alarmanlagen, Treppenlicht</td></tr>\n<tr><td><b>Ultraschall</b></td><td>Abstand (Echo)</td><td>Parkhilfe des Autos</td></tr>\n<tr><td><b>Mikrofon</b></td><td>Schall</td><td>Telefon, Sprachassistenten</td></tr>\n<tr><td><b>Beschleunigungssensor</b></td><td>Bewegung und Neigung</td><td>Smartphone (Drehung des Bildschirms), Schrittzähler</td></tr>\n</table>\n<p>Das Signal kann <b>analog</b> (es ändert sich stufenlos, wie die Helligkeit) oder <b>digital</b> (nur 0 und 1, an/aus) sein.</p>"
  },
  {
   "type": "widget",
   "title": "Spiel: Leiter oder Isolator?",
   "widget": "classify",
   "options": {
    "groups": [
     "Leiter ⚡",
     "Isolatoren 🛑",
     "Halbleiter 🔬"
    ],
    "items": [
     [
      "🟠 Kupfer",
      0
     ],
     [
      "🥈 Silber",
      0
     ],
     [
      "✏️ Graphit der Bleistiftmine",
      0
     ],
     [
      "🌊 Salzwasser",
      0
     ],
     [
      "🧤 Gummi",
      1
     ],
     [
      "🍶 Glas",
      1
     ],
     [
      "🪵 trockenes Holz",
      1
     ],
     [
      "🧴 Kunststoff",
      1
     ],
     [
      "🍽️ Keramik",
      1
     ],
     [
      "💎 Silizium",
      2
     ],
     [
      "⚙️ Germanium",
      2
     ]
    ]
   },
   "caption": "Achtung: Leitungswasser (mit gelösten Salzen) leitet den Strom! Berühre Steckdosen oder Geräte niemals mit nassen Händen."
  },
  {
   "type": "example",
   "title": "Praktisches Beispiel: den Widerstand für eine LED berechnen",
   "html": "<p>Du willst eine <b>rote LED</b> an einem USB-Anschluss mit <b>5 V</b> betreiben. Die LED braucht etwa <b>2 V</b> und einen Strom von <b>20 mA</b> (0,02 A).</p>\n<ol>\n<li>Spannung, die der Widerstand „aufnehmen“ muss: 5 − 2 = <b>3 V</b>.</li>\n<li>Ohmsches Gesetz: R = V ÷ I = 3 ÷ 0,02 = <b>150 Ω</b>.</li>\n<li>Man wählt den nächstliegenden handelsüblichen Wert, etwas größer: <b>150 Ω oder 220 Ω</b> (die LED leuchtet dann etwas schwächer, ist aber sicherer).</li>\n</ol>\n<p>Ohne Widerstand würde der Strom zu stark ansteigen, und die LED würde in Sekundenbruchteilen durchbrennen.</p>"
  },
  {
   "type": "example",
   "title": "Praktisches Beispiel: die automatische Gartenbeleuchtung",
   "html": "<p>Eine solarbetriebene Gartenlampe funktioniert so:</p>\n<ul>\n<li>tagsüber wandelt das <b>Solarmodul</b> (aus Silizium) Licht in Elektrizität um und lädt einen <b>Akku</b>;</li>\n<li>ein <b>Lichtsensor</b> (oft das Solarmodul selbst oder ein Fotowiderstand) erkennt, wann es dunkel wird;</li>\n<li>ein <b>Transistor</b> wirkt als automatischer Schalter und schaltet die <b>LED</b> ein.</li>\n</ul>\n<p>Generator, Sensor, Steuerung, Aktor: Dieses Schema findest du in allen automatischen Geräten wieder.</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du… die Batterie wurde von einem Italiener erfunden?",
   "html": "<p>Im Jahr <b>1799</b> stapelte <b>Alessandro Volta</b>, Professor in Pavia, Scheiben aus <b>Zink</b> und <b>Kupfer</b>, getrennt durch mit Salzwasser getränkte Tücher: Das war die <b>Batterie</b> (<i>pila</i>), der erste Generator für Gleichstrom. 1800 berichtete er der Royal Society in London davon. Zu seinen Ehren heißt die Einheit der Spannung <b>Volt</b>. Auch das italienische Wort „pila“ (Stapel) bezieht sich genau auf diesen Scheibenstapel!</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du… Arduino wurde in Ivrea erfunden?",
   "html": "<p>Das Board <b>Arduino</b>, weltweit genutzt, um Elektronik zu lernen und Roboter zu bauen, entstand im Jahr <b>2005</b> am Interaction Design Institute in <b>Ivrea</b> (im Piemont), dank Massimo Banzi und Kollegen. Der Name stammt von der Bar, die sie besuchten, die wiederum <b>Arduin von Ivrea</b> gewidmet war, König von Italien um das Jahr 1000. Den ersten <b>Transistor</b> dagegen baute man 1947 bei den Bell Labs in den USA, von Bardeen, Brattain und Shockley (Nobelpreis 1956).</p>"
  },
  {
   "type": "remember",
   "title": "Zum Merken (und Sicherheit!)",
   "html": "<ul>\n<li>Strom = Fluss von Ladungen in einem <b>geschlossenen</b> Stromkreis.</li>\n<li><b>V = R × I</b> (Ohmsches Gesetz); <b>P = V × I</b> (Leistung).</li>\n<li>Reihe: gleiche Stromstärke, ein einziger Weg. Parallel: gleiche Spannung, mehrere Zweige.</li>\n<li>Elektronik = Elektrizität mit Halbleitern steuern (Dioden, LEDs, Transistoren, Chips).</li>\n<li>Sensoren = wandeln physikalische Größen in elektrische Signale um.</li>\n<li>⚠️ <b>Niemals</b> Experimente mit der Steckdose (230 V) machen: Verwende nur Batterien oder Netzteile mit niedriger Spannung (bis 12 V) und frag einen Erwachsenen.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Weitere Wege, es zu verstehen",
   "intro": "Elektrizität sieht man nicht: Deshalb braucht man unterschiedliche Bilder und Vergleiche. Wähl deinen.",
   "tabs": [
    {
     "label": "💧 Wasser in den Rohren",
     "html": "<p>Der Stromkreis ist wie eine geschlossene Wasserleitung:</p>\n<ul>\n<li>die <b>Pumpe</b> ist die Batterie: Sie erzeugt den Druck (Spannung, V);</li>\n<li>das <b>Wasser</b>, das fließt, ist der Strom (I);</li>\n<li>ein <b>enges Rohr</b> ist der Widerstand (R): Je enger, desto weniger Wasser fließt hindurch;</li>\n<li>eine sich drehende <b>Turbine</b> ist die Lampe: Sie nutzt die Energie des Wassers;</li>\n<li>ein <b>Wasserhahn</b> ist der Schalter.</li>\n</ul>\n<p>Mehr Druck ➜ mehr Wasser; engeres Rohr ➜ weniger Wasser. Das ist das Ohmsche Gesetz!</p>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"240\" fill=\"#ecfeff\"/>\n<rect x=\"40\" y=\"40\" width=\"520\" height=\"160\" rx=\"30\" fill=\"none\" stroke=\"#0891b2\" stroke-width=\"22\"/>\n<rect x=\"40\" y=\"40\" width=\"520\" height=\"160\" rx=\"30\" fill=\"none\" stroke=\"#67e8f9\" stroke-width=\"12\" stroke-dasharray=\"14 10\"/>\n<circle cx=\"50\" cy=\"120\" r=\"34\" fill=\"#f97316\" stroke=\"#7c2d12\" stroke-width=\"3\"/>\n<text x=\"50\" y=\"128\" font-size=\"20\" text-anchor=\"middle\" fill=\"#fff\" font-weight=\"bold\">V</text>\n<rect x=\"250\" y=\"32\" width=\"100\" height=\"16\" fill=\"#0e7490\"/>\n<text x=\"300\" y=\"25\" font-size=\"15\" text-anchor=\"middle\" fill=\"#0e7490\" font-weight=\"bold\">enges Rohr = R</text>\n<circle cx=\"550\" cy=\"120\" r=\"30\" fill=\"#fde047\" stroke=\"#854d0e\" stroke-width=\"3\"/>\n<text x=\"550\" y=\"128\" font-size=\"22\" text-anchor=\"middle\">💡</text>\n<text x=\"300\" y=\"232\" font-size=\"15\" text-anchor=\"middle\" fill=\"#0e7490\" font-weight=\"bold\">Wasserfluss = Strom I</text>\n<text x=\"105\" y=\"125\" font-size=\"14\" fill=\"#7c2d12\" font-weight=\"bold\">Pumpe = Batterie</text>\n<text x=\"490\" y=\"170\" font-size=\"14\" fill=\"#854d0e\" font-weight=\"bold\">Turbine = Lampe</text>\n</svg>"
    },
    {
     "label": "🔺 Das Ohm-Dreieck",
     "html": "<p>Ein Trick, der an englischen und deutschen Schulen verwendet wird: Schreib <b>V</b> oben und <b>R · I</b> unten in ein Dreieck. Deck mit dem Finger die Größe ab, die du suchst:</p>\n<ul>\n<li>V abdecken ➜ es bleibt R × I;</li>\n<li>I abdecken ➜ es bleibt V über R ➜ V ÷ R;</li>\n<li>R abdecken ➜ es bleibt V über I ➜ V ÷ I.</li>\n</ul>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"240\" fill=\"#fef9c3\"/>\n<polygon points=\"300,20 470,220 130,220\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"5\"/>\n<line x1=\"190\" y1=\"140\" x2=\"410\" y2=\"140\" stroke=\"#a16207\" stroke-width=\"4\"/>\n<line x1=\"300\" y1=\"140\" x2=\"300\" y2=\"220\" stroke=\"#a16207\" stroke-width=\"4\"/>\n<text x=\"300\" y=\"115\" font-size=\"48\" font-weight=\"bold\" fill=\"#dc2626\" text-anchor=\"middle\">V</text>\n<text x=\"240\" y=\"198\" font-size=\"44\" font-weight=\"bold\" fill=\"#2563eb\" text-anchor=\"middle\">R</text>\n<text x=\"360\" y=\"198\" font-size=\"44\" font-weight=\"bold\" fill=\"#16a34a\" text-anchor=\"middle\">I</text>\n<text x=\"520\" y=\"110\" font-size=\"16\" fill=\"#713f12\" text-anchor=\"middle\">V = R × I</text>\n<text x=\"520\" y=\"140\" font-size=\"16\" fill=\"#713f12\" text-anchor=\"middle\">I = V ÷ R</text>\n<text x=\"520\" y=\"170\" font-size=\"16\" fill=\"#713f12\" text-anchor=\"middle\">R = V ÷ I</text>\n</svg>"
    },
    {
     "label": "🚗 Straße und Verkehr",
     "html": "<p>Stell dir die Elektronen als <b>Autos</b> vor:</p>\n<ul>\n<li>die <b>Spannung</b> ist das <b>Gefälle</b> der Straße: je steiler, desto stärker werden die Autos geschoben;</li>\n<li>die <b>Stromstärke</b> ist, <b>wie viele Autos</b> jede Sekunde unter einer Brücke durchfahren;</li>\n<li>der <b>Widerstand</b> ist eine <b>Verengung</b> der Fahrbahn;</li>\n<li>in <b>Reihe</b>: zwei Baustellen hintereinander auf derselben Straße; <b>parallel</b>: zwei alternative Straßen, der Verkehr teilt sich.</li>\n</ul>"
    },
    {
     "label": "🧩 Bauteile und Funktionen",
     "html": "<p>Ordne jedes Bauteil dem zu, was es tut.</p>",
     "widget": "match",
     "options": {
      "pairs": [
       [
        "Widerstand",
        "begrenzt den Strom"
       ],
       [
        "Diode",
        "lässt den Strom nur in eine Richtung durch"
       ],
       [
        "LED",
        "sendet Licht aus"
       ],
       [
        "Kondensator",
        "speichert Ladungen für kurze Zeit"
       ],
       [
        "Transistor",
        "elektrisch gesteuerter Schalter"
       ],
       [
        "Fotowiderstand",
        "ändert seinen Widerstand mit dem Licht"
       ]
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Landkarte: vom Atom zum Chip",
   "nodes": [
    {
     "id": "car",
     "label": "Elektrische Ladung",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "Eigenschaft von Protonen (+) und Elektronen (−).",
     "why": "Schon die Griechen bemerkten, dass geriebener Bernstein Strohhalme anzieht: „Bernstein“ heißt auf Griechisch <i>élektron</i>, daher kommt „Elektrizität“. Das Elektron wurde 1897 von <b>J. J. Thomson</b> entdeckt."
    },
    {
     "id": "cor",
     "label": "Strom",
     "x": 20,
     "y": 28,
     "color": "#3b82f6",
     "html": "Geordneter Fluss von Ladungen (A).",
     "why": "Man misst ihn in Ampere zu Ehren von <b>André-Marie Ampère</b>, der 1820 die Kräfte zwischen stromdurchflossenen Drähten untersuchte."
    },
    {
     "id": "ten",
     "label": "Spannung",
     "x": 50,
     "y": 28,
     "color": "#f97316",
     "html": "Der „Schub“, der die Ladungen bewegt (V).",
     "why": "Die erste stabile Stromquelle war die Batterie von <b>Alessandro Volta</b> (1799): Chemische Reaktionen zwischen zwei verschiedenen Metallen erzeugen eine Potenzialdifferenz."
    },
    {
     "id": "res",
     "label": "Widerstand",
     "x": 80,
     "y": 28,
     "color": "#ef4444",
     "html": "Hemmung des Stromflusses (Ω).",
     "why": "Die bewegten Elektronen stoßen gegen die Atome des Materials und geben Energie als Wärme ab: Das ist die <b>Joule-Wärme</b>, genutzt in Heizgeräten und Toastern."
    },
    {
     "id": "ohm",
     "label": "Ohmsches Gesetz",
     "x": 50,
     "y": 50,
     "color": "#a855f7",
     "html": "V = R × I.",
     "why": "<b>Georg Simon Ohm</b> veröffentlichte es 1827 nach Messungen an Drähten unterschiedlicher Länge. Anfangs wurde es kritisiert; dann wurde es die Grundlage der Elektrotechnik."
    },
    {
     "id": "circ",
     "label": "Stromkreis",
     "x": 20,
     "y": 72,
     "color": "#22c55e",
     "html": "Quelle, Leiter, Verbraucher, Schalter; Reihe oder parallel.",
     "why": "Ladungen werden weder erzeugt noch vernichtet (Ladungserhaltung): Um dauerhaft zu fließen, müssen sie zur Quelle zurückkehren, deshalb muss der Weg geschlossen sein."
    },
    {
     "id": "semi",
     "label": "Halbleiter",
     "x": 50,
     "y": 72,
     "color": "#0ea5e9",
     "html": "Silizium und Germanium: leiten „auf Befehl“.",
     "why": "Durch das Hinzufügen winziger Mengen anderer Elemente (<b>Dotierung</b>) steuert man, wie sie leiten. Auf diesem Prinzip beruhen Diode und Transistor (1947)."
    },
    {
     "id": "sens",
     "label": "Sensoren",
     "x": 80,
     "y": 72,
     "color": "#eab308",
     "html": "Wandeln Licht, Wärme, Bewegung in elektrische Signale um.",
     "why": "Viele nutzen aus, dass sich der Widerstand eines Materials mit dem Licht (Fotowiderstand) oder der Temperatur (Thermistor) ändert: Mit dem Ohmschen Gesetz misst man die Änderung."
    },
    {
     "id": "chip",
     "label": "Chips und Mikrocontroller",
     "x": 50,
     "y": 94,
     "color": "#7c3aed",
     "html": "Milliarden Transistoren auf einem Siliziumplättchen.",
     "why": "Der integrierte Schaltkreis wurde 1958–59 von <b>Jack Kilby</b> und <b>Robert Noyce</b> erfunden. 1971 leitete der Italiener <b>Federico Faggin</b> die Entwicklung des ersten kommerziellen Mikroprozessors, des Intel 4004."
    }
   ],
   "edges": [
    [
     "car",
     "cor",
     "in Bewegung"
    ],
    [
     "car",
     "ten",
     "angetrieben durch"
    ],
    [
     "cor",
     "ohm",
     "I"
    ],
    [
     "ten",
     "ohm",
     "V"
    ],
    [
     "res",
     "ohm",
     "R"
    ],
    [
     "ohm",
     "circ",
     "gilt für"
    ],
    [
     "ohm",
     "semi",
     "Materialien"
    ],
    [
     "semi",
     "chip",
     "bauen"
    ],
    [
     "semi",
     "sens",
     "bauen"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Bauteile und Schaltungen",
   "questions": [
    {
     "type": "mc",
     "q": "In einer Parallelschaltung brennt eine Lampe durch…",
     "options": [
      "gehen alle aus",
      "bleiben die anderen an",
      "leuchten die anderen heller und brennen durch"
     ],
     "answer": 1,
     "explain": "Jede Lampe hat ihren eigenen Zweig: Die anderen Zweige funktionieren weiter."
    },
    {
     "type": "num",
     "q": "Welche Leistung hat eine Lampe, die bei 230 V 0,1 A aufnimmt?",
     "answer": 23,
     "tol": 0,
     "unit": "W",
     "explain": "P = V × I = 230 × 0,1 = 23 W."
    },
    {
     "type": "mc",
     "q": "Welches Bauteil lässt den Strom nur in eine Richtung durch?",
     "options": [
      "Kondensator",
      "Diode",
      "Widerstand"
     ],
     "answer": 1,
     "explain": "Die Diode ist wie ein Ventil, das nur in eine Richtung öffnet."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Elektrischer Strom (I)",
   "d": "Geordneter Fluss von Ladungen; gemessen in Ampere (A)."
  },
  {
   "t": "Spannung (V)",
   "d": "Potenzialdifferenz, die die Ladungen antreibt; gemessen in Volt."
  },
  {
   "t": "Widerstand (R)",
   "d": "Hemmung des Stromflusses; gemessen in Ohm (Ω)."
  },
  {
   "t": "Ohmsches Gesetz",
   "d": "V = R × I."
  },
  {
   "t": "Leistung (P)",
   "d": "Umgesetzte Energie pro Sekunde: P = V × I, in Watt (W)."
  },
  {
   "t": "Halbleiter",
   "d": "Material (z. B. Silizium) mit steuerbarer Leitfähigkeit."
  },
  {
   "t": "Transistor",
   "d": "Bauteil, das elektrisch gesteuert als Schalter oder Verstärker wirkt."
  },
  {
   "t": "LED",
   "d": "Diode, die Licht aussendet; muss mit einem Widerstand geschützt werden."
  },
  {
   "t": "Sensor",
   "d": "Gerät, das eine physikalische Größe in ein elektrisches Signal umwandelt."
  },
  {
   "t": "Multimeter",
   "d": "Messgerät, das Spannung, Strom und Widerstand misst."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Der elektrische Strom in Metallen ist ein Fluss von…",
    "options": [
     "Protonen",
     "Elektronen",
     "Neutronen"
    ],
    "answer": 1,
    "explain": "In Metallen bewegen sich die freien Elektronen."
   },
   {
    "type": "mc",
    "q": "Die Spannung misst man in…",
    "options": [
     "Ampere",
     "Volt",
     "Watt"
    ],
    "answer": 1,
    "explain": "Volt, zu Ehren von Alessandro Volta."
   },
   {
    "type": "num",
    "q": "Ein Widerstand von 220 Ω wird von 0,01 A durchflossen. Wie groß ist die Spannung an ihm?",
    "answer": 2.2,
    "tol": 0.01,
    "unit": "V",
    "explain": "V = R × I = 220 × 0,01 = 2,2 V."
   },
   {
    "type": "num",
    "q": "Eine 12-V-Batterie lässt 2 A durch einen Motor fließen. Wie groß ist der Widerstand des Motors?",
    "answer": 6,
    "tol": 0,
    "unit": "Ω",
    "explain": "R = V ÷ I = 12 ÷ 2 = 6 Ω."
   },
   {
    "type": "num",
    "q": "Zwei Widerstände von 100 Ω und 47 Ω in Reihe: Wie groß ist der Gesamtwiderstand?",
    "answer": 147,
    "tol": 0,
    "unit": "Ω",
    "explain": "In Reihe addieren sich die Widerstände: 100 + 47 = 147 Ω."
   },
   {
    "type": "tf",
    "q": "Der Strom fließt auch dann, wenn der Stromkreis offen ist.",
    "answer": false,
    "explain": "Man braucht einen geschlossenen Stromkreis."
   },
   {
    "type": "tf",
    "q": "Die Steckdosen im Haus sind parallel geschaltet.",
    "answer": true,
    "explain": "So erhält jedes Gerät 230 V und funktioniert unabhängig."
   },
   {
    "type": "mc",
    "q": "Welcher Sensor wird bei einer Straßenlaterne verwendet, die sich im Dunkeln von selbst einschaltet?",
    "options": [
     "Heißleiter (Thermistor)",
     "Fotowiderstand (LDR)",
     "Beschleunigungssensor"
    ],
    "answer": 1,
    "explain": "Der Fotowiderstand ändert seinen Widerstand mit dem Licht."
   },
   {
    "type": "text",
    "q": "Wie hieß der Italiener, der 1799 die Batterie erfand?",
    "answer": [
     "volta",
     "alessandro volta"
    ],
    "explain": "Alessandro Volta, Professor in Pavia."
   },
   {
    "type": "order",
    "q": "Bring den Signalweg einer automatischen Lampe in die richtige Reihenfolge.",
    "items": [
     "Der Sensor erkennt die Dunkelheit",
     "Die Steuerschaltung verarbeitet das Signal",
     "Der Transistor schließt den Stromkreis",
     "Die LED leuchtet auf"
    ],
    "explain": "Sensor ➜ Steuerung ➜ elektronischer Schalter ➜ Aktor (LED)."
   },
   {
    "type": "mc",
    "q": "Warum braucht eine LED einen Vorwiderstand?",
    "options": [
     "Um die Farbe zu ändern",
     "Um den Strom zu begrenzen und ein Durchbrennen zu verhindern",
     "Um sie blinken zu lassen"
    ],
    "answer": 1,
    "explain": "Ohne Widerstand würde der Strom zu stark ansteigen."
   },
   {
    "type": "mc",
    "q": "Aus welchem Material bestehen fast alle Chips?",
    "options": [
     "Kupfer",
     "Silizium",
     "Kunststoff"
    ],
    "answer": 1,
    "explain": "Silizium ist ein Halbleiter."
   }
  ]
 }
});
