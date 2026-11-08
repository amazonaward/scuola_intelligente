TOPIC('de', {
 "id": "m3-tec-robotica",
 "title": "Robotik und Automatisierung",
 "intro": "Ein mechanischer Arm, der Autos verschweißt, ein Saugroboter, der dem Sofa ausweicht, ein Rover, der den Mars erforscht, das Tor, das sich von allein öffnet. Das sind alles <b>automatische</b> Systeme: Sie <b>nehmen</b> die Umgebung mit <b>Sensoren</b> <b>wahr</b>, <b>entscheiden</b> mit einem <b>Controller</b> und <b>handeln</b> mit den <b>Aktoren</b>. Wir schauen, wie sie funktionieren und wie Roboterkonstrukteure „denken“. 🦾🤖",
 "minutes": 50,
 "sections": [
  {
   "type": "text",
   "title": "1. Automatisierung und Roboter: Was ist der Unterschied?",
   "html": "<p>Die <b>Automatisierung</b> nutzt Maschinen und Steuerungssysteme, um Aufgaben <b>ohne ständiges Eingreifen</b> eines Menschen zu erledigen: eine Waschmaschine, eine Ampel, eine Abfüllanlage.</p>\n<p>Ein <b>Roboter</b> ist eine automatische Maschine, die <b>programmierbar</b> und <b>vielseitig</b> ist: Durch Wechsel des Programms kann sie verschiedene Aufgaben übernehmen, und oft bewegt sie sich im Raum. Die Waschmaschine ist automatisch, macht aber immer dasselbe; ein Roboterarm schweißt heute, lackiert morgen oder verpackt.</p>\n<p>Jeder Roboter folgt dem Kreislauf <b>wahrnehmen ➜ verarbeiten ➜ handeln</b> (auf Englisch <i>sense – think – act</i>):</p>\n<ol>\n<li><b>Sensoren</b>: sammeln Informationen (Abstand, Licht, Berührung, Position …).</li>\n<li><b>Controller</b>: ein Computer oder Mikrocontroller führt das <b>Programm</b> aus und entscheidet, was zu tun ist.</li>\n<li><b>Aktoren</b>: setzen den Befehl in Handlung um (Motoren, Zylinder, Greifer, Lampen, Lautsprecher).</li>\n</ol>\n<p>Dazu braucht es noch eine <b>Energiequelle</b> (Batterie, Stromnetz, Druckluft) und eine <b>mechanische Struktur</b> (Gestell, Gelenke, Räder, Zahnräder).</p>"
  },
  {
   "type": "svg",
   "title": "Die Teile eines mobilen Roboters",
   "caption": "Sensoren (Augen und Ohren), Controller (Gehirn), Aktoren (Muskeln), Batterie (Energie), Struktur (Skelett).",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f1f5f9\"/>\n<rect x=\"200\" y=\"110\" width=\"200\" height=\"110\" rx=\"16\" fill=\"#94a3b8\" stroke=\"#334155\" stroke-width=\"4\"/>\n<rect x=\"250\" y=\"135\" width=\"100\" height=\"45\" rx=\"6\" fill=\"#22c55e\" stroke=\"#14532d\" stroke-width=\"3\"/>\n<text x=\"300\" y=\"164\" font-size=\"14\" fill=\"#fff\" font-weight=\"bold\" text-anchor=\"middle\">CPU</text>\n<rect x=\"225\" y=\"190\" width=\"60\" height=\"22\" rx=\"4\" fill=\"#facc15\" stroke=\"#854d0e\" stroke-width=\"2\"/>\n<circle cx=\"230\" cy=\"235\" r=\"28\" fill=\"#1e293b\"/><circle cx=\"230\" cy=\"235\" r=\"10\" fill=\"#64748b\"/>\n<circle cx=\"370\" cy=\"235\" r=\"28\" fill=\"#1e293b\"/><circle cx=\"370\" cy=\"235\" r=\"10\" fill=\"#64748b\"/>\n<rect x=\"395\" y=\"125\" width=\"40\" height=\"40\" rx=\"6\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"3\"/>\n<circle cx=\"415\" cy=\"137\" r=\"7\" fill=\"#e0f2fe\"/><circle cx=\"415\" cy=\"155\" r=\"7\" fill=\"#e0f2fe\"/>\n<line x1=\"300\" y1=\"110\" x2=\"300\" y2=\"70\" stroke=\"#334155\" stroke-width=\"4\"/>\n<circle cx=\"300\" cy=\"62\" r=\"10\" fill=\"#ef4444\"/>\n<rect x=\"160\" y=\"140\" width=\"40\" height=\"18\" rx=\"4\" fill=\"#f97316\" stroke=\"#7c2d12\" stroke-width=\"2\"/>\n<g font-size=\"15\" font-weight=\"bold\">\n<text x=\"470\" y=\"140\" fill=\"#1e40af\">Ultraschall-</text><text x=\"470\" y=\"160\" fill=\"#1e40af\">sensor</text>\n<text x=\"330\" y=\"55\" fill=\"#b91c1c\">Status-LED</text>\n<text x=\"300\" y=\"30\" fill=\"#166534\" text-anchor=\"middle\">Controller = „Gehirn“</text>\n<text x=\"20\" y=\"150\" fill=\"#9a3412\">Kontakt-</text><text x=\"20\" y=\"170\" fill=\"#9a3412\">sensor</text>\n<text x=\"20\" y=\"250\" fill=\"#0f172a\">Motoren + Räder</text><text x=\"20\" y=\"270\" fill=\"#0f172a\">(Aktoren)</text>\n<text x=\"430\" y=\"250\" fill=\"#854d0e\">Batterie</text>\n</g>\n<line x1=\"300\" y1=\"36\" x2=\"300\" y2=\"50\" stroke=\"#166534\" stroke-width=\"2\"/>\n<line x1=\"465\" y1=\"145\" x2=\"437\" y2=\"145\" stroke=\"#1e40af\" stroke-width=\"2\"/>\n<line x1=\"105\" y1=\"155\" x2=\"158\" y2=\"150\" stroke=\"#9a3412\" stroke-width=\"2\"/>\n<line x1=\"135\" y1=\"255\" x2=\"200\" y2=\"240\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n<line x1=\"428\" y1=\"245\" x2=\"288\" y2=\"205\" stroke=\"#854d0e\" stroke-width=\"2\"/>\n</svg>"
  },
  {
   "type": "text",
   "title": "2. Sensoren: die Sinne des Roboters",
   "html": "<table>\n<tr><th>Sensor</th><th>Was er misst</th><th>Beispiel für die Verwendung</th></tr>\n<tr><td>Endschalter / Taster</td><td>Berührung (ja/nein)</td><td>der Saugroboter stößt an ein Möbelstück</td></tr>\n<tr><td>Ultraschall</td><td>Abstand, mit dem Echo (wie Fledermäuse)</td><td>Hindernissen ausweichen</td></tr>\n<tr><td>Infrarot</td><td>Reflexion von IR-Licht, Nähe</td><td>einer schwarzen Linie folgen, Absturzsensor an der Treppe</td></tr>\n<tr><td>Encoder</td><td>wie weit sich ein Motor gedreht hat</td><td>wissen, um wie viele cm man sich bewegt hat</td></tr>\n<tr><td>Gyroskop / Beschleunigungssensor</td><td>Drehung, Neigung</td><td>Drohnen und Roboter, die im Gleichgewicht bleiben</td></tr>\n<tr><td>Kamera</td><td>Bilder</td><td>Objekte erkennen (mit KI)</td></tr>\n<tr><td>LiDAR</td><td>Abstände mit Laserimpulsen, 3D-Karte</td><td>autonome Autos, Rover</td></tr>\n</table>"
  },
  {
   "type": "text",
   "title": "3. Aktoren: die Muskeln des Roboters",
   "html": "<ul>\n<li><b>Gleichstrommotor (DC)</b>: dreht sich schnell, solange er Strom bekommt; für Räder und Lüfter. Oft hat er ein <b>Getriebe</b> (Zahnräder), das die Geschwindigkeit verringert und die Kraft erhöht.</li>\n<li><b>Servomotor</b>: dreht sich auf einen <b>genauen Winkel</b> (zum Beispiel von 0° bis 180°) und hält ihn; für Arme, Ruder und Greifer.</li>\n<li><b>Schrittmotor</b> (stepper): bewegt sich in präzisen <b>Schritten</b> (z. B. 200 Schritte = 1 Umdrehung, also 1,8° pro Schritt); für 3D-Drucker und CNC-Maschinen.</li>\n<li><b>Pneumatikzylinder</b> (Druckluft) und <b>hydraulische Zylinder</b> (Öl): große Kräfte, für Pressen und Bagger.</li>\n<li><b>Magnetventile, Relais</b>: öffnen und schließen Wasser-, Luft- oder Stromflüsse.</li>\n<li>Auch <b>LEDs, Displays und Lautsprecher</b> sind Aktoren: Sie „handeln“, indem sie kommunizieren.</li>\n</ul>\n<p><b>Freiheitsgrade</b> (GdL): die Anzahl unabhängiger Bewegungen, die ein Roboter ausführen kann. Ein typischer Industriearm hat <b>6 Freiheitsgrade</b> (6 Gelenke, die sich drehen): Er kann das Werkzeug in jede Position und in jede Ausrichtung seines Arbeitsraums bringen. Der menschliche Arm hat vom Schultergelenk bis zum Handgelenk 7.</p>"
  },
  {
   "type": "3d",
   "title": "Ein Roboterarm mit Gelenken",
   "scene": "molecule",
   "options": {
    "atoms": [
     {
      "x": 0,
      "y": -1.8,
      "z": 0,
      "r": 0.55,
      "color": "#475569",
      "label": "Basis (Drehung)"
     },
     {
      "x": 0,
      "y": -1,
      "z": 0,
      "r": 0.35,
      "color": "#f97316",
      "label": "Schulter"
     },
     {
      "x": 0.9,
      "y": 0.2,
      "z": 0,
      "r": 0.3,
      "color": "#f97316",
      "label": "Ellbogen"
     },
     {
      "x": 1.9,
      "y": 0.6,
      "z": 0.3,
      "r": 0.25,
      "color": "#f97316",
      "label": "Handgelenk"
     },
     {
      "x": 2.5,
      "y": 0.9,
      "z": 0.4,
      "r": 0.2,
      "color": "#3b82f6",
      "label": "Greifer (Endeffektor)"
     },
     {
      "x": 2.6,
      "y": 0.3,
      "z": 0.5,
      "r": 0.18,
      "color": "#22c55e",
      "label": "Objekt"
     }
    ],
    "bonds": [
     [
      0,
      1
     ],
     [
      1,
      2
     ],
     [
      2,
      3
     ],
     [
      3,
      4
     ]
    ]
   },
   "caption": "Jede orangefarbene Kugel ist ein Gelenk, das von einem Servomotor bewegt wird. Dreh die Szene: Die Basis dreht sich, Schulter und Ellbogen heben den Arm, das Handgelenk richtet den Greifer aus."
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Sensor oder Aktor?",
   "questions": [
    {
     "type": "mc",
     "q": "Ein Servomotor ist …",
     "options": [
      "ein Sensor",
      "ein Aktor",
      "eine Batterie"
     ],
     "answer": 1,
     "explain": "Der Servomotor erzeugt Bewegung: Er ist ein Aktor."
    },
    {
     "type": "mc",
     "q": "Welcher Sensor misst den Abstand mit einem Echo?",
     "options": [
      "Ultraschall",
      "Thermistor",
      "Mikrofon"
     ],
     "answer": 0,
     "explain": "Der Ultraschallsensor sendet einen Ton aus und misst, wie lange das Echo zurückbraucht."
    },
    {
     "type": "num",
     "q": "Ein Schrittmotor macht 200 Schritte pro Umdrehung. Um wie viel Grad dreht er sich bei jedem Schritt?",
     "answer": 1.8,
     "tol": 0.01,
     "unit": "°",
     "explain": "360° ÷ 200 = 1,8°."
    }
   ]
  },
  {
   "type": "widget",
   "title": "Spiel: Sensoren, Controller, Aktoren",
   "widget": "classify",
   "options": {
    "groups": [
     "Sensor 👁️",
     "Controller 🧠",
     "Aktor 💪"
    ],
    "items": [
     [
      "📏 Ultraschallsensor",
      0
     ],
     [
      "📷 Kamera",
      0
     ],
     [
      "🌡️ Thermistor",
      0
     ],
     [
      "🔘 Endschalter",
      0
     ],
     [
      "🖥️ Mikrocontroller (Arduino)",
      1
     ],
     [
      "🏭 Industrie-SPS (PLC)",
      1
     ],
     [
      "⚙️ Gleichstrommotor",
      2
     ],
     [
      "🦾 Servomotor",
      2
     ],
     [
      "🔧 Pneumatikzylinder",
      2
     ],
     [
      "🔊 Lautsprecher",
      2
     ]
    ]
   },
   "caption": "Denk an den Kreislauf: wahrnehmen (Sensor) ➜ verarbeiten (Controller) ➜ handeln (Aktor)."
  },
  {
   "type": "text",
   "title": "4. Die Steuerung: offener und geschlossener Regelkreis",
   "html": "<p><b>Offener Kreis</b> (<i>open loop</i>): Der Controller gibt den Befehl und <b>kontrolliert das Ergebnis nicht</b>. Beispiel: der Toaster mit Timer. Ist das Brot dicker, wird es zu wenig geröstet: Der Toaster weiß das nicht.</p>\n<p><b>Geschlossener Kreis</b> (<i>closed loop</i>, mit <b>Rückkopplung</b> oder <i>feedback</i>): Ein Sensor <b>misst das Ergebnis</b>, und der Controller vergleicht es mit dem <b>Ziel</b> (dem <i>Sollwert</i>) und korrigiert ständig. Beispiel: der <b>Thermostat</b>. Ziel 20 °C ➜ der Sensor misst 18 °C ➜ die Heizung schaltet sich ein ➜ bei 20 °C schaltet sie sich aus.</p>\n<p>Die Regelung kann sein:</p>\n<ul>\n<li><b>EIN/AUS</b> (alles oder nichts): einfach, aber der Wert „schwankt“ über und unter dem Ziel;</li>\n<li><b>proportional</b>: je weiter man vom Ziel entfernt ist, desto stärker die Korrektur (wie wenn man sanft bremst, wenn man sich dem Stoppschild nähert). Industrieanlagen verwenden oft die <b>PID-Regelung</b>, eine Weiterentwicklung dieser Idee.</li>\n</ul>"
  },
  {
   "type": "svg",
   "title": "Blockschaltbild: geschlossener Regelkreis",
   "caption": "Der Sensor „schließt den Kreis“: Das Ergebnis kommt zurück und wird mit dem Ziel verglichen.",
   "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#fff7ed\"/>\n<rect x=\"15\" y=\"70\" width=\"95\" height=\"56\" rx=\"10\" fill=\"#a855f7\"/>\n<text x=\"62\" y=\"96\" font-size=\"14\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">Ziel</text>\n<text x=\"62\" y=\"115\" font-size=\"13\" fill=\"#fff\" text-anchor=\"middle\">20 °C</text>\n<circle cx=\"150\" cy=\"98\" r=\"20\" fill=\"#fff\" stroke=\"#0f172a\" stroke-width=\"3\"/>\n<text x=\"150\" y=\"105\" font-size=\"20\" text-anchor=\"middle\" fill=\"#0f172a\">−</text>\n<rect x=\"200\" y=\"70\" width=\"110\" height=\"56\" rx=\"10\" fill=\"#22c55e\"/>\n<text x=\"255\" y=\"96\" font-size=\"14\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">Controller</text>\n<text x=\"255\" y=\"115\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\">entscheidet</text>\n<rect x=\"340\" y=\"70\" width=\"110\" height=\"56\" rx=\"10\" fill=\"#f97316\"/>\n<text x=\"395\" y=\"96\" font-size=\"14\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">Aktor</text>\n<text x=\"395\" y=\"115\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\">Heizung</text>\n<rect x=\"480\" y=\"70\" width=\"105\" height=\"56\" rx=\"10\" fill=\"#ef4444\"/>\n<text x=\"532\" y=\"96\" font-size=\"14\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">Umgebung</text>\n<text x=\"532\" y=\"115\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\">der Raum</text>\n<rect x=\"320\" y=\"180\" width=\"140\" height=\"50\" rx=\"10\" fill=\"#3b82f6\"/>\n<text x=\"390\" y=\"211\" font-size=\"14\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">Sensor 🌡️</text>\n<g stroke=\"#0f172a\" stroke-width=\"3\" fill=\"none\">\n<line x1=\"110\" y1=\"98\" x2=\"130\" y2=\"98\"/><line x1=\"170\" y1=\"98\" x2=\"198\" y2=\"98\"/><line x1=\"310\" y1=\"98\" x2=\"338\" y2=\"98\"/><line x1=\"450\" y1=\"98\" x2=\"478\" y2=\"98\"/>\n<polyline points=\"532,126 532,205 462,205\"/><polyline points=\"320,205 150,205 150,118\"/>\n</g>\n<text x=\"160\" y=\"60\" font-size=\"13\" fill=\"#0f172a\">Fehler</text>\n<text x=\"230\" y=\"245\" font-size=\"13\" fill=\"#1e40af\" font-weight=\"bold\">Rückkopplung (feedback): gemessen 18 °C</text>\n</svg>"
  },
  {
   "type": "text",
   "title": "5. Einen Roboter programmieren: das Beispiel des Linienfolgers",
   "html": "<p>Ein <b>Linienfolger</b> hat zwei Infrarotsensoren unter seiner Nase, einen links und einen rechts, und zwei Motoren. Die schwarze Linie schluckt das IR-Licht, der weiße Boden reflektiert es. Das Programm (in <b>Pseudocode</b>) ist eine Endlosschleife:</p>\n<pre>WIEDERHOLE IMMER\n  WENN links Weiß sieht UND rechts Weiß sieht\n     DANN fahre geradeaus (Motoren gleich schnell)\n  SONST WENN links Schwarz sieht\n     DANN fahre nach links (linken Motor bremsen)\n  SONST WENN rechts Schwarz sieht\n     DANN fahre nach rechts (rechten Motor bremsen)\nENDE WIEDERHOLE</pre>\n<p>Der Roboter liest die Sensoren dutzendmal pro Sekunde: Das ist ein kleiner <b>geschlossener Kreis</b>. Mit Scratch, mBlock oder der blockbasierten Programmierung von Arduino baut man genau so etwas, mit Blöcken <b>„immer“</b> und <b>„wenn … dann … sonst“</b>.</p>"
  },
  {
   "type": "example",
   "title": "Praktisches Beispiel: der Saugroboter",
   "html": "<ul>\n<li><b>Sensoren</b>: Stoßstange mit Endschalter (Anstöße), Infrarot-Absturzsensor (Treppen), Encoder an den Rädern, manchmal LiDAR oder Kamera, um eine <b>Karte</b> der Wohnung zu erstellen.</li>\n<li><b>Controller</b>: entscheidet über die Route, merkt sich die schon gereinigten Bereiche und fährt zur Station zurück, wenn der Akku leer ist.</li>\n<li><b>Aktoren</b>: zwei Motoren für die Räder, Motor der Bürste, Saugventilator.</li>\n</ul>\n<p>Sinkt der Akkustand unter eine Schwelle (zum Beispiel 15 %), ändert das Programm das Ziel: „zurück zur Station“. Das ist ein Beispiel für eine <b>sensorgesteuerte Entscheidung</b>.</p>"
  },
  {
   "type": "example",
   "title": "Praktisches Beispiel: die automatische Fabrik (Industrie 4.0)",
   "html": "<p>In einer Autofabrik fährt die Karosserie auf einem Förderband. Ein Lichtsensor erkennt sie ➜ die <b>SPS</b> (speicherprogrammierbare Steuerung, der „robuste Computer“ der Fabriken) hält das Band an ➜ sechs Roboterarme schweißen in wenigen Sekunden Hunderte Punkte ➜ eine Kamera prüft die Qualität ➜ das Band läuft weiter.</p>\n<p>Mit <b>Industrie 4.0</b> sind die Maschinen vernetzt, senden Daten in Echtzeit und melden selbst, wann eine Wartung nötig ist. Neben den klassischen Robotern, die in Sicherheitskäfigen stehen, gibt es die <b>Cobots</b> (kollaborative Roboter), die neben Menschen arbeiten und anhalten, wenn sie berührt werden.</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du… das Wort „Roboter“ stammt aus einem Theaterstück?",
   "html": "<p>Im Jahr <b>1920</b> schrieb der tschechische Schriftsteller <b>Karel Čapek</b> das Drama <i>R.U.R. (Rossum's Universal Robots)</i>, in dem eine Fabrik künstliche Arbeiter herstellt. Das Wort <b>Roboter</b> schlug ihm sein Bruder Josef vor: Es kommt vom tschechischen <i>robota</i>, „Zwangsarbeit“. 1942 erfand der Schriftsteller <b>Isaac Asimov</b> die berühmten <b>drei Gesetze der Robotik</b> (das erste: Ein Roboter darf keinem Menschen Schaden zufügen). Der erste Industrieroboter, <b>Unimate</b>, kam 1961 in eine Fabrik von General Motors.</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du… Leonardo entwarf einen Roboter, und Italien hat einen berühmten?",
   "html": "<p>Um das Jahr <b>1495</b> zeichnete <b>Leonardo da Vinci</b> einen <b>mechanischen Ritter</b> in Rüstung, bewegt durch Rollen und Seile, der sich aufrichten, die Arme und den Kopf bewegen konnte. 2002 baute ihn ein Ingenieur der NASA nach: Er funktionierte! Heute wurde am <b>Istituto Italiano di Tecnologia</b> in Genua <b>iCub</b> entwickelt, ein humanoider Roboter von der Größe eines vierjährigen Kindes, der weltweit benutzt wird, um zu erforschen, wie man lernt.</p>"
  },
  {
   "type": "remember",
   "title": "Zum Merken",
   "html": "<ul>\n<li>Roboter = programmierbare automatische Maschine: Sensoren ➜ Controller ➜ Aktoren.</li>\n<li>Sensoren: Berührung, Ultraschall, Infrarot, Encoder, Gyroskop, Kamera, LiDAR.</li>\n<li>Aktoren: Gleichstrommotoren, Servomotoren, Schrittmotoren, Zylinder, Relais.</li>\n<li>Offener Kreis: keine Kontrolle des Ergebnisses. Geschlossener Kreis: <b>Rückkopplung</b> durch einen Sensor.</li>\n<li>Freiheitsgrade = unabhängige Bewegungen (ein Industriearm hat meist 6).</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Weitere Wege, es zu verstehen",
   "intro": "Roboter versteht man leichter, wenn man sie mit etwas vergleicht, das man schon kennt.",
   "tabs": [
    {
     "label": "🧍 Der menschliche Körper",
     "html": "<p>Auch du bist ein „System mit geschlossenem Kreis“!</p>\n<ul>\n<li><b>Sensoren</b> = Augen, Ohren, Haut, das Innenohr für das Gleichgewicht.</li>\n<li><b>Controller</b> = Gehirn und Rückenmark.</li>\n<li><b>Aktoren</b> = Muskeln.</li>\n<li><b>Leitungen</b> = Nerven; <b>Energie</b> = Essen.</li>\n</ul>\n<p>Wenn du ein Glas nimmst, kontrollieren die Augen ständig die Hand, und das Gehirn korrigiert die Bewegung: Das ist Rückkopplung. Versuch es mit geschlossenen Augen: Dann wird es ein offener Kreis, und das ist viel schwieriger!</p>"
    },
    {
     "label": "🚿 Die Dusche",
     "html": "<p>Die Wassertemperatur in der Dusche einzustellen ist ein Regelkreis mit geschlossenem Kreis, den du selbst machst:</p>\n<ol>\n<li><b>Ziel</b>: lauwarmes Wasser.</li>\n<li><b>Sensor</b>: deine Hand spürt, dass das Wasser zu kalt ist.</li>\n<li><b>Controller</b>: dein Gehirn entscheidet „wärmer“.</li>\n<li><b>Aktor</b>: die Hand dreht am Mischer.</li>\n<li>Dann beginnt es von vorn: messen, vergleichen, korrigieren.</li>\n</ol>\n<p>Drehst du zu stark auf einmal, wird das Wasser kochend heiß, dann drehst du zu weit in die andere Richtung … das ist das <b>Schwingen</b> der EIN/AUS-Regelung. Drehst du Stück für Stück, machst du eine <b>proportionale</b> Regelung.</p>"
    },
    {
     "label": "🏷️ Die Teile erkennen",
     "html": "<p>Tippe auf die Punkte des Roboters und wähle den richtigen Teil.</p>",
     "widget": "labelDiagram",
     "options": {
      "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"400\" height=\"300\" fill=\"#f8fafc\"/><rect x=\"110\" y=\"110\" width=\"180\" height=\"100\" rx=\"14\" fill=\"#94a3b8\" stroke=\"#334155\" stroke-width=\"4\"/><rect x=\"160\" y=\"130\" width=\"80\" height=\"40\" rx=\"6\" fill=\"#22c55e\"/><rect x=\"150\" y=\"180\" width=\"50\" height=\"20\" rx=\"4\" fill=\"#facc15\"/><circle cx=\"140\" cy=\"225\" r=\"26\" fill=\"#1e293b\"/><circle cx=\"260\" cy=\"225\" r=\"26\" fill=\"#1e293b\"/><rect x=\"290\" y=\"130\" width=\"36\" height=\"36\" rx=\"6\" fill=\"#3b82f6\"/><rect x=\"74\" y=\"140\" width=\"36\" height=\"16\" rx=\"4\" fill=\"#f97316\"/></svg>",
      "spots": [
       {
        "x": 200,
        "y": 150,
        "label": "Controller"
       },
       {
        "x": 308,
        "y": 148,
        "label": "Ultraschallsensor"
       },
       {
        "x": 140,
        "y": 225,
        "label": "Rad mit Motor"
       },
       {
        "x": 175,
        "y": 190,
        "label": "Batterie"
       },
       {
        "x": 92,
        "y": 148,
        "label": "Kontaktsensor"
       }
      ]
     }
    },
    {
     "label": "🧩 Roboter und Aufgabe zuordnen",
     "html": "<p>Jeder Roboter ist für eine Aufgabe gebaut: Verbinde die beiden Elemente.</p>",
     "widget": "match",
     "options": {
      "pairs": [
       [
        "Industriearm mit 6 Achsen",
        "Autokarossen verschweißen"
       ],
       [
        "Rover Perseverance",
        "seit 2021 den Mars erforschen"
       ],
       [
        "Saugroboter",
        "Wohnung reinigen und Hindernissen ausweichen"
       ],
       [
        "Cobot",
        "neben Menschen arbeiten"
       ],
       [
        "Drohne",
        "von oben filmen und inspizieren"
       ],
       [
        "Chirurgischer Roboter",
        "den Arzt bei präzisen Operationen unterstützen"
       ]
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Landkarte: die Robotik",
   "nodes": [
    {
     "id": "rob",
     "label": "Roboter",
     "x": 50,
     "y": 8,
     "color": "#64748b",
     "html": "Programmierbare automatische Maschine.",
     "why": "Das Wort entstand 1920 bei Karel Čapek (aus dem Tschechischen <i>robota</i>, Zwangsarbeit). Die Idee selbstbewegter Maschinen ist alt: Schon Heron von Alexandria (1. Jh. n. Chr.) beschrieb Automaten mit Dampf und Gegengewichten."
    },
    {
     "id": "sens",
     "label": "Sensoren",
     "x": 15,
     "y": 32,
     "color": "#3b82f6",
     "html": "Nehmen die Umgebung wahr.",
     "why": "Viele Sensoren ahmen die Natur nach: Ultraschall kopiert die Echoortung der Fledermäuse, die Kamera das Auge. Sie wandeln eine physikalische Größe in ein elektrisches Signal um."
    },
    {
     "id": "ctrl",
     "label": "Controller",
     "x": 50,
     "y": 32,
     "color": "#22c55e",
     "html": "Führt das Programm aus und entscheidet.",
     "why": "Seit den 1970er-Jahren haben Mikroprozessoren (der erste, der Intel 4004 von 1971, dessen Entwicklung der Italiener Federico Faggin leitete) die Controller klein und günstig gemacht. 1968 entstand die SPS für die Fabriken."
    },
    {
     "id": "att",
     "label": "Aktoren",
     "x": 85,
     "y": 32,
     "color": "#f97316",
     "html": "Motoren, Servos, Zylinder: Sie erzeugen die Handlung.",
     "why": "Der Elektromotor beruht auf dem Elektromagnetismus, entdeckt von Ørsted (1820) und Faraday (1821): Ein Strom in einem Magnetfeld erzeugt eine Kraft."
    },
    {
     "id": "ciclo",
     "label": "Wahrnehmen-verarbeiten-handeln",
     "x": 50,
     "y": 55,
     "color": "#a855f7",
     "html": "Der Kreislauf, der sich ständig wiederholt.",
     "why": "Er ist das Grundschema jedes intelligenten Systems, natürlich oder künstlich: Auch ein Tier nimmt wahr, entscheidet und bewegt sich."
    },
    {
     "id": "feed",
     "label": "Rückkopplung",
     "x": 20,
     "y": 78,
     "color": "#ef4444",
     "html": "Der Sensor misst das Ergebnis und vergleicht es mit dem Ziel.",
     "why": "Eines der ersten Beispiele war der <b>Fliehkraftregler</b> der Dampfmaschine von James Watt (1788). 1948 begründete Norbert Wiener die <b>Kybernetik</b>, die Wissenschaft von Regelung und Kommunikation bei Tieren und Maschinen."
    },
    {
     "id": "gdl",
     "label": "Freiheitsgrade",
     "x": 50,
     "y": 82,
     "color": "#eab308",
     "html": "Unabhängige Bewegungen des Roboters.",
     "why": "Ein starrer Körper im Raum hat 6 Freiheitsgrade (3 Verschiebungen + 3 Drehungen): Deshalb kann ein Arm mit 6 Gelenken jede Position und Ausrichtung in seinem Arbeitsraum erreichen."
    },
    {
     "id": "auto",
     "label": "Automatisierung und Industrie 4.0",
     "x": 82,
     "y": 78,
     "color": "#0ea5e9",
     "html": "Fabriken mit vernetzten Maschinen.",
     "why": "Nach Mechanisierung (Dampf), Elektrizität und Informatik verbindet die „vierte industrielle Revolution“ Maschinen, Sensoren und Daten über das Internet. Der Begriff Industrie 4.0 entstand 2011 in Deutschland."
    }
   ],
   "edges": [
    [
     "rob",
     "sens",
     "hat"
    ],
    [
     "rob",
     "ctrl",
     "hat"
    ],
    [
     "rob",
     "att",
     "hat"
    ],
    [
     "sens",
     "ciclo",
     "wahrnehmen"
    ],
    [
     "ctrl",
     "ciclo",
     "verarbeiten"
    ],
    [
     "att",
     "ciclo",
     "handeln"
    ],
    [
     "ciclo",
     "feed",
     "mit"
    ],
    [
     "att",
     "gdl",
     "bestimmen"
    ],
    [
     "rob",
     "auto",
     "in der Fabrik"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Steuerung und Programmierung",
   "questions": [
    {
     "type": "mc",
     "q": "Ein Toaster mit Timer ist ein System …",
     "options": [
      "mit offenem Kreis",
      "mit geschlossenem Kreis"
     ],
     "answer": 0,
     "explain": "Er misst nicht, wie stark das Brot geröstet ist: offener Kreis."
    },
    {
     "type": "mc",
     "q": "Beim Linienfolger muss der Roboter, wenn der rechte Sensor die schwarze Linie sieht, …",
     "options": [
      "nach rechts fahren",
      "nach links fahren",
      "für immer anhalten"
     ],
     "answer": 0,
     "explain": "Die Linie wandert nach rechts: Der Roboter fährt nach rechts, um ihr zu folgen."
    },
    {
     "type": "tf",
     "q": "Der Thermostat der Heizung nutzt die Rückkopplung.",
     "answer": true,
     "explain": "Er misst die Temperatur und vergleicht sie mit der gewünschten."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Roboter",
   "d": "Programmierbare automatische Maschine, die wahrnimmt, verarbeitet und handelt."
  },
  {
   "t": "Automatisierung",
   "d": "Einsatz von Maschinen und Steuerungen, um Aufgaben ohne ständiges menschliches Eingreifen zu erledigen."
  },
  {
   "t": "Sensor",
   "d": "Gerät, das eine physikalische Größe erfasst und in ein Signal umwandelt."
  },
  {
   "t": "Aktor",
   "d": "Gerät, das einen Befehl in Handlung umsetzt (Motor, Zylinder …)."
  },
  {
   "t": "Controller",
   "d": "Computer, Mikrocontroller oder SPS, der das Programm ausführt."
  },
  {
   "t": "Rückkopplung (feedback)",
   "d": "Das Ergebnis wird gemessen und benutzt, um die Handlung zu korrigieren."
  },
  {
   "t": "Servomotor",
   "d": "Motor, der sich auf einen genauen Winkel dreht und ihn hält."
  },
  {
   "t": "Freiheitsgrade",
   "d": "Anzahl der unabhängigen Bewegungen einer Mechanik."
  },
  {
   "t": "SPS (PLC)",
   "d": "Speicherprogrammierbare Steuerung, in Fabriken verwendet."
  },
  {
   "t": "Cobot",
   "d": "Kollaborativer Roboter, der nahe bei Menschen arbeiten kann."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "order",
    "q": "Bring den Arbeitsablauf eines Roboters in die richtige Reihenfolge.",
    "items": [
     "Der Sensor nimmt wahr",
     "Der Controller verarbeitet",
     "Der Aktor handelt"
    ],
    "explain": "Wahrnehmen ➜ verarbeiten ➜ handeln."
   },
   {
    "type": "mc",
    "q": "Was unterscheidet einen Roboter von einer einfachen automatischen Maschine?",
    "options": [
     "Er ist größer",
     "Er ist für verschiedene Aufgaben programmierbar",
     "Er arbeitet mit Batterie"
    ],
    "answer": 1,
    "explain": "Der Roboter ist vielseitig und umprogrammierbar."
   },
   {
    "type": "mc",
    "q": "Welchen Aktor nutzt ein 3D-Drucker für sehr präzise Bewegungen?",
    "options": [
     "Schrittmotor",
     "Hydraulikzylinder",
     "Lautsprecher"
    ],
    "answer": 0,
    "explain": "Der Schrittmotor bewegt sich in Schritten mit bekanntem Winkel."
   },
   {
    "type": "num",
    "q": "Ein Servomotor läuft von 0° bis 180°. Steht er in der Mitte seines Weges, bei wie vielen Grad?",
    "answer": 90,
    "tol": 0,
    "unit": "°",
    "explain": "180 ÷ 2 = 90°."
   },
   {
    "type": "num",
    "q": "Ein Motor dreht sich mit 3000 Umdrehungen pro Minute. Mit einem Getriebe 1:50, wie viele Umdrehungen pro Minute macht das Rad?",
    "answer": 60,
    "tol": 0,
    "unit": "U/min",
    "explain": "3000 ÷ 50 = 60 U/min (dafür mit 50-fach höherer Kraft)."
   },
   {
    "type": "tf",
    "q": "In einem System mit offenem Kreis wird das Ergebnis gemessen und korrigiert.",
    "answer": false,
    "explain": "Das ist der geschlossene Kreis; der offene Kreis kontrolliert das Ergebnis nicht."
   },
   {
    "type": "tf",
    "q": "Ein typischer Industriearm hat 6 Freiheitsgrade.",
    "answer": true,
    "explain": "6 Gelenke: 3 für die Position und 3 für die Ausrichtung des Werkzeugs."
   },
   {
    "type": "text",
    "q": "Aus welcher Sprache stammt das Wort „Roboter“?",
    "answer": [
     "tschechisch",
     "aus dem tschechischen",
     "tschechische sprache",
     "tschechoslowakisch"
    ],
    "explain": "Vom tschechischen robota (Zwangsarbeit), im Drama R.U.R. von Karel Čapek (1920)."
   },
   {
    "type": "mc",
    "q": "Wozu dient der Absturzsensor eines Saugroboters?",
    "options": [
     "Um nicht von der Treppe zu fallen",
     "Um den Staub zu messen",
     "Um den Akku aufzuladen"
    ],
    "answer": 0,
    "explain": "Ein nach unten gerichteter Infrarotsensor erkennt den Abgrund."
   },
   {
    "type": "mc",
    "q": "Was ist ein Cobot?",
    "options": [
     "Ein Spielzeugroboter",
     "Ein Roboter, der sicher neben Menschen arbeitet",
     "Ein U-Boot-Roboter"
    ],
    "answer": 1,
    "explain": "Cobot = collaborative robot."
   },
   {
    "type": "mc",
    "q": "Welches Beispiel ist eine Steuerung mit geschlossenem Kreis?",
    "options": [
     "Der Tempomat, der die Geschwindigkeit des Autos hält",
     "Ein Küchentimer",
     "Ein Ventilator mit Schalter"
    ],
    "answer": 0,
    "explain": "Der Tempomat misst die Geschwindigkeit und korrigiert das Gaspedal."
   },
   {
    "type": "text",
    "q": "Welcher italienische Genius zeichnete um 1495 einen mechanischen Ritter?",
    "answer": [
     "leonardo",
     "leonardo da vinci"
    ],
    "explain": "Leonardo da Vinci."
   }
  ]
 }
});
