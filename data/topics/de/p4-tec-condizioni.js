TOPIC('de', {
 "id": "p4-tec-condizioni",
 "title": "Wenn … dann: die Bedingungen",
 "intro": "<i>Wenn es regnet, dann nehme ich den Regenschirm. ☔ Sonst nehme ich die Mütze. 🧢</i> Jeden Tag triffst du unzählige solche Entscheidungen, ohne es zu merken. Auch Computer, Videospiele und Roboter entscheiden mit <b>Bedingungen</b>: <b>WENN</b> etwas wahr ist, <b>DANN</b> führen sie eine Aktion aus, <b>SONST</b> eine andere. Entdecken wir, wie man einer Maschine „das Entscheiden beibringt“!",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "1. Was ist eine Bedingung?",
   "html": "<p>Eine <b>Bedingung</b> ist eine Frage, die man nur mit <b>JA</b> oder <b>NEIN</b> beantworten kann, also mit <b>WAHR</b> oder <b>FALSCH</b>.</p>\n<ul>\n<li>„Regnet es?“ → ja / nein ✅</li>\n<li>„Ist die Ampel rot?“ → ja / nein ✅</li>\n<li>„Ist die Punktzahl größer als 100?“ → ja / nein ✅</li>\n<li>„Wie spät ist es?“ → ❌ ist <b>keine</b> Bedingung: Die Antwort ist nicht ja oder nein!</li>\n</ul>\n<p>Der Computer prüft die Bedingung und wählt je nach Antwort, <b>welchem Weg</b> er im Programm folgt. Diese Wahl heißt <b>Auswahl</b> oder <b>bedingte Anweisung</b>.</p>"
  },
  {
   "type": "text",
   "title": "2. WENN … DANN (if … then)",
   "html": "<p>Die einfachste Form ist:</p>\n<p style=\"font-size:1.2em\">🟨 <b>WENN</b> <i>Bedingung</i> <b>DANN</b> <i>Aktion</i></p>\n<p>Wenn die Bedingung <b>wahr</b> ist, führt der Computer die Aktion aus. Wenn sie <b>falsch</b> ist, überspringt er sie und macht weiter.</p>\n<ul>\n<li>WENN der Akku unter 20 % ist DANN zeige „Akku leer“ an 🔋</li>\n<li>WENN die Katze den Fisch berührt DANN addiere 1 Punkt 🐱🐟</li>\n<li>WENN es dunkel wird DANN schalte die Laternen an 💡</li>\n</ul>\n<p>Auf Englisch, der Sprache der Programmierer, sagt man für <b>WENN</b> <b>if</b> und für <b>DANN</b> <b>then</b>.</p>"
  },
  {
   "type": "text",
   "title": "3. WENN … DANN … SONST (if … else)",
   "html": "<p>Oft wollen wir etwas tun, wenn die Bedingung wahr ist, und <b>etwas anderes</b>, wenn sie falsch ist:</p>\n<p style=\"font-size:1.2em\">🟨 <b>WENN</b> <i>Bedingung</i> <b>DANN</b> <i>Aktion A</i> <b>SONST</b> <i>Aktion B</i></p>\n<ul>\n<li>WENN die Antwort richtig ist DANN sage „Bravo!“ 🎉 SONST sage „Versuch’s nochmal!“ 🔁</li>\n<li>WENN die Ampel grün ist DANN geh hinüber 🚶 SONST warte ✋</li>\n</ul>\n<p><b>Sonst</b> heißt auf Englisch <b>else</b>. Mit dem Sonst führt das Programm <b>immer</b> eine der beiden Aktionen aus, <b>nie beide</b> und <b>nie keine</b>.</p>"
  },
  {
   "type": "svg",
   "title": "Das Flussdiagramm: die Raute der Entscheidungen",
   "svg": "<svg viewBox=\"0 0 600 340\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"340\" fill=\"#f8fafc\"/>\n<ellipse cx=\"300\" cy=\"35\" rx=\"70\" ry=\"24\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"3\"/>\n<text x=\"300\" y=\"42\" font-size=\"18\" font-weight=\"bold\" fill=\"#14532d\" text-anchor=\"middle\">START</text>\n<line x1=\"300\" y1=\"59\" x2=\"300\" y2=\"85\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<polygon points=\"300,85 410,145 300,205 190,145\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"3\"/>\n<text x=\"300\" y=\"140\" font-size=\"18\" font-weight=\"bold\" fill=\"#78350f\" text-anchor=\"middle\">Regnet es?</text>\n<text x=\"300\" y=\"162\" font-size=\"14\" fill=\"#78350f\" text-anchor=\"middle\">(Bedingung)</text>\n<line x1=\"190\" y1=\"145\" x2=\"110\" y2=\"145\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<line x1=\"110\" y1=\"145\" x2=\"110\" y2=\"225\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<line x1=\"410\" y1=\"145\" x2=\"490\" y2=\"145\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<line x1=\"490\" y1=\"145\" x2=\"490\" y2=\"225\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<text x=\"150\" y=\"135\" font-size=\"18\" font-weight=\"bold\" fill=\"#15803d\" text-anchor=\"middle\">JA</text>\n<text x=\"450\" y=\"135\" font-size=\"18\" font-weight=\"bold\" fill=\"#b91c1c\" text-anchor=\"middle\">NEIN</text>\n<rect x=\"30\" y=\"225\" width=\"160\" height=\"50\" rx=\"6\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<text x=\"110\" y=\"256\" font-size=\"17\" fill=\"#1e3a8a\" text-anchor=\"middle\">Nimm den Regenschirm ☔</text>\n<rect x=\"410\" y=\"225\" width=\"160\" height=\"50\" rx=\"6\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<text x=\"490\" y=\"256\" font-size=\"17\" fill=\"#1e3a8a\" text-anchor=\"middle\">Nimm die Mütze 🧢</text>\n<line x1=\"110\" y1=\"275\" x2=\"110\" y2=\"305\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<line x1=\"490\" y1=\"275\" x2=\"490\" y2=\"305\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<line x1=\"110\" y1=\"305\" x2=\"490\" y2=\"305\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<text x=\"300\" y=\"330\" font-size=\"16\" fill=\"#334155\" text-anchor=\"middle\">dann geht es weiter: aus dem Haus gehen 🚪</text>\n</svg>",
   "caption": "In Flussdiagrammen zeichnet man die Bedingung als Raute: Sie hat einen Eingang und zwei Ausgänge, JA (wahr) und NEIN (falsch)."
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Bedingungen erkennen",
   "questions": [
    {
     "type": "mc",
     "q": "Welche dieser Fragen ist eine Bedingung?",
     "options": [
      "Welche Farbe hat der Himmel?",
      "Ist die Punktzahl größer als 10?",
      "Wie alt bist du?"
     ],
     "answer": 1,
     "explain": "Eine Bedingung hat nur zwei Antworten: wahr oder falsch. «Ist die Punktzahl größer als 10?» → ja oder nein."
    },
    {
     "type": "mc",
     "q": "In einem Flussdiagramm zeichnet man die Bedingung in …",
     "options": [
      "ein Rechteck",
      "eine Raute",
      "ein Oval"
     ],
     "answer": 1,
     "explain": "Die Raute ist das Symbol der Entscheidung, mit zwei Ausgängen (ja / nein)."
    },
    {
     "type": "tf",
     "q": "Bei WENN … DANN … SONST kann das Programm beide Aktionen zusammen ausführen.",
     "answer": false,
     "explain": "Es führt immer nur eine aus: die des JA oder die des NEIN."
    },
    {
     "type": "mc",
     "q": "Wie sagt man «sonst» in Programmiersprachen?",
     "options": [
      "then",
      "if",
      "else"
     ],
     "answer": 2,
     "explain": "if = wenn, then = dann, else = sonst."
    }
   ]
  },
  {
   "type": "text",
   "title": "4. Vergleiche: größer, kleiner, gleich",
   "html": "<p>Viele Bedingungen <b>vergleichen Zahlen</b>. Man benutzt die Zeichen, die du aus der Mathematik kennst:</p>\n<table>\n<tr><th>Zeichen</th><th>Bedeutet</th><th>Beispiel</th><th>Wahr oder falsch?</th></tr>\n<tr><td><b>&gt;</b></td><td>größer als</td><td>Punkte &gt; 100 (mit Punkte = 120)</td><td>✅ wahr</td></tr>\n<tr><td><b>&lt;</b></td><td>kleiner als</td><td>Leben &lt; 1 (mit Leben = 3)</td><td>❌ falsch</td></tr>\n<tr><td><b>=</b></td><td>gleich</td><td>Alter = 9 (mit Alter = 9)</td><td>✅ wahr</td></tr>\n</table>\n<p>Werte wie „Punkte“, „Leben“, „Alter“, die sich während des Spiels ändern können, heißen <b>Variablen</b>: Sie sind wie Schachteln mit einem Etikett, in denen der Computer eine Zahl aufbewahrt.</p>"
  },
  {
   "type": "text",
   "title": "5. Zusammengesetzte Bedingungen: UND, ODER, NICHT",
   "html": "<p>Manchmal braucht man mehrere Bedingungen zusammen. Man verbindet sie mit drei magischen Wörtchen, den <b>logischen Operatoren</b>:</p>\n<ul>\n<li>🤝 <b>UND</b> (and): nur wahr, wenn <b>beide</b> Bedingungen wahr sind.<br><i>WENN ich die Hausaufgaben fertig habe <b>UND</b> es nicht regnet DANN gehe ich in den Park.</i></li>\n<li>🔀 <b>ODER</b> (or): wahr, wenn <b>mindestens eine</b> Bedingung wahr ist.<br><i>WENN Samstag <b>ODER</b> Sonntag ist DANN keine Schule.</i></li>\n<li>🔄 <b>NICHT</b> (not): <b>dreht</b> die Antwort <b>um</b>: Wahr wird falsch und falsch wird wahr.<br><i>WENN ich <b>NICHT</b> meine Pausenbrot habe DANN kaufe ich eins.</i></li>\n</ul>\n<p>Man kann Bedingungen auch <b>ineinander</b> verschachteln (verschachtelte Bedingungen): WENN Sommer ist DANN (WENN die Sonne scheint DANN gehe ich ans Meer SONST gehe ich ins Schwimmbad).</p>"
  },
  {
   "type": "example",
   "title": "Praxisbeispiel: das Spiel in Scratch",
   "html": "<p>In <b>Scratch</b> sind die Blöcke für Bedingungen orange (Kategorie <i>Steuerung</i>) und haben einen sechseckigen Platz, in den die Bedingung passt.</p>\n<p>Programm der Katze, die Äpfel einsammelt 🍎:</p>\n<p style=\"font-family:monospace;background:#fff7ed;padding:8px;border-radius:8px\">\nWenn die grüne Flagge angeklickt wird<br>\nwiederhole fortlaufend<br>\n&nbsp;&nbsp;<b>falls</b> &lt;wird Apfel berührt?&gt; <b>dann</b><br>\n&nbsp;&nbsp;&nbsp;&nbsp;ändere Punkte um 1<br>\n&nbsp;&nbsp;&nbsp;&nbsp;spiele Klang „Pop“<br>\n&nbsp;&nbsp;<b>falls</b> &lt;Punkte = 10&gt; <b>dann</b><br>\n&nbsp;&nbsp;&nbsp;&nbsp;sage „Du hast gewonnen!“ 🏆<br>\n&nbsp;&nbsp;&nbsp;&nbsp;stoppe alles\n</p>\n<p>Beachte: Die Bedingung wird <b>ständig</b> geprüft, weil sie in einer „fortlaufend“-Schleife steht. Ohne Schleife würde sie nur einmal geprüft, am Anfang!</p>"
  },
  {
   "type": "example",
   "title": "Praxisbeispiel: Bedingungen um dich herum",
   "html": "<p>Die Maschinen des Alltags sind voller WENN … DANN:</p>\n<ul>\n<li>🚪 <b>Automatiktür</b> des Supermarkts: WENN der Sensor eine Person sieht DANN öffne SONST schließe.</li>\n<li>🌡️ <b>Thermostat</b> der Heizung: WENN die Temperatur &lt; 20 °C DANN schalte den Heizkessel ein SONST schalte ihn aus.</li>\n<li>🚗 <b>Parksensor</b>: WENN das Hindernis weniger als 30 cm entfernt ist DANN piepe schneller.</li>\n<li>📱 <b>Handy</b>: WENN der Code richtig ist DANN entsperre SONST sperre nach 5 Fehlern für eine Weile.</li>\n<li>🌿 <b>Gartenbewässerung</b>: WENN es 7 Uhr ist UND der Boden trocken ist DANN öffne das Wasser.</li>\n</ul>"
  },
  {
   "type": "widget",
   "title": "Wahr oder falsch? Probier es selbst",
   "widget": "classify",
   "options": {
    "groups": [
     "✅ WAHR",
     "❌ FALSCH"
    ],
    "items": [
     [
      "7 > 5",
      0
     ],
     [
      "3 > 8",
      1
     ],
     [
      "10 = 10",
      0
     ],
     [
      "4 < 2",
      1
     ],
     [
      "(2 < 5) UND (6 > 1)",
      0
     ],
     [
      "(2 > 5) UND (6 > 1)",
      1
     ],
     [
      "(2 > 5) ODER (6 > 1)",
      0
     ],
     [
      "(1 > 3) ODER (0 > 9)",
      1
     ],
     [
      "NICHT (3 = 3)",
      1
     ],
     [
      "NICHT (5 < 1)",
      0
     ]
    ]
   },
   "caption": "Tippe jede Bedingung an und lege sie in die richtige Schachtel. Denk daran: UND will alle wahr, ODER mindestens eine, NICHT dreht um."
  },
  {
   "type": "decision",
   "title": "Programmiere den Staubsaugerroboter",
   "html": "Du programmierst einen Staubsaugerroboter 🤖. Er hat vorne einen Sensor, der sagt, ob ein <b>Hindernis</b> da ist (eine Wand, ein Tischbein, die Katze …). Der Roboter muss das ganze Zimmer säubern, ohne stecken zu bleiben.",
   "question": "Welche Regel würdest du schreiben?",
   "options": [
    {
     "label": "WENN ein Hindernis da ist DANN bleib für immer stehen.",
     "outcome": "Der Roboter bleibt an der ersten Wand hängen und putzt nichts mehr: Das Zimmer bleibt schmutzig!"
    },
    {
     "label": "WENN ein Hindernis da ist DANN dreh dich ein Stück SONST fahre vorwärts (und wiederhole für immer).",
     "outcome": "Der Roboter weicht den Hindernissen aus, ändert die Richtung und putzt weiter: Es funktioniert!"
    },
    {
     "label": "Fahre immer vorwärts, ohne Bedingungen.",
     "outcome": "Der Roboter prallt gegen die Wand und schiebt weiter: Die Räder drehen durch."
    }
   ],
   "answer": 1,
   "explain": "Die ersten Staubsaugerroboter für zu Hause (wie die, die seit den frühen 2000er-Jahren verkauft werden) benutzten genau einfache Regeln dieser Art: WENN ich gegen etwas stoße DANN drehe ich mich und fahre wieder los, alles in einer Schleife, die sich wiederholt. Man braucht eine <b>Bedingung</b> (ist ein Hindernis da?), die <b>zwei Wege</b> (dreh dich / fahre vorwärts) und eine <b>Schleife</b>, die die Prüfung wiederholt. Heute benutzen viele Roboter auch Karten und Kameras, aber im Inneren stecken immer unzählige WENN … DANN."
  },
  {
   "type": "curiosity",
   "title": "Wusstest du schon …? George Boole und wahr/falsch",
   "html": "<p>Im Jahr <b>1854</b> veröffentlichte der englische Mathematiker <b>George Boole</b> ein Buch, <i>Die Gesetze des Denkens</i>, in dem er WAHR und FALSCH wie Zahlen behandelte: <b>1</b> und <b>0</b>. Er erfand eine Algebra mit den Operationen UND, ODER, NICHT.</p>\n<p>Zu seiner Zeit schien es nur ein Spiel für Mathematiker zu sein. Fast ein Jahrhundert später erkannten die Ingenieure, dass elektrische Schaltkreise genauso funktionieren (Strom ja = 1, Strom nein = 0): Heute „denkt“ jeder Computer und jedes Smartphone mit der <b>booleschen Algebra</b>. Ihm zu Ehren heißen in Programmiersprachen die Werte wahr/falsch <b>boolesche Werte</b>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du schon …? Spielbücher",
   "html": "<p>Es gibt Bücher, in denen du selbst entscheidest, wie die Geschichte verläuft: Am Ende einer Seite liest du <i>«Wenn du die Höhle betreten willst, geh auf Seite 42, sonst geh auf Seite 17»</i>. Sie heißen <b>Spielbücher</b> (auf Englisch <i>gamebooks</i>) und wurden in den 1980er-Jahren berühmt.</p>\n<p>Ein Spielbuch ist genau ein <b>Programm aus WENN … SONST</b>, und der Leser ist der Computer! Auch Videospiele mit verzweigten Geschichten funktionieren so.</p>"
  },
  {
   "type": "remember",
   "title": "Zum Merken",
   "html": "<ul>\n<li>Eine <b>Bedingung</b> ist eine Frage mit der Antwort <b>wahr</b> oder <b>falsch</b>.</li>\n<li><b>WENN … DANN</b> (if … then): Die Aktion wird nur ausgeführt, wenn die Bedingung wahr ist.</li>\n<li><b>WENN … DANN … SONST</b> (if … else): Es wird immer eine der beiden Aktionen ausgeführt.</li>\n<li>Vergleiche: <b>&gt;</b> größer, <b>&lt;</b> kleiner, <b>=</b> gleich.</li>\n<li><b>UND</b> = alle wahr; <b>ODER</b> = mindestens eine wahr; <b>NICHT</b> = dreht um.</li>\n<li>In Flussdiagrammen ist die Bedingung eine <b>Raute</b> mit zwei Ausgängen.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Andere Wege, Bedingungen zu verstehen",
   "intro": "Dieselbe Idee kann man auf viele Arten schreiben und sehen: mit Blöcken, in einer echten Programmiersprache, als Weggabelung im Wald, als Ampeln der Spielregeln oder als Zuordnungsspiel.",
   "tabs": [
    {
     "label": "🧩 Mit Blöcken (Scratch)",
     "html": "<p>In Scratch (am <b>MIT</b> in Boston entwickelt und 2007 veröffentlicht) ist der Block <b>falls … dann … sonst</b> wie ein doppeltes <b>C-förmiges Maul</b>: In das erste Maul legst du die Blöcke für das JA, in das zweite die für das NEIN. Die Bedingung hat die Form eines <b>Sechsecks</b>: Nur sechseckige Blöcke (die wahr oder falsch liefern) passen hinein!</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#ffffff\"/>\n<path d=\"M60 20 H420 V70 H120 V120 H420 V150 H120 V200 H420 V240 H60 Z\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"3\"/>\n<text x=\"80\" y=\"52\" font-size=\"20\" font-weight=\"bold\" fill=\"#ffffff\">falls</text>\n<polygon points=\"120,32 140,22 330,22 350,32 330,62 140,62\" fill=\"#38bdf8\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"50\" font-size=\"17\" fill=\"#ffffff\" text-anchor=\"middle\" font-weight=\"bold\">wird Apfel berührt?</text>\n<text x=\"360\" y=\"52\" font-size=\"20\" font-weight=\"bold\" fill=\"#ffffff\">dann</text>\n<rect x=\"130\" y=\"80\" width=\"230\" height=\"32\" rx=\"6\" fill=\"#a855f7\"/>\n<text x=\"245\" y=\"102\" font-size=\"17\" fill=\"#ffffff\" text-anchor=\"middle\">sage „Mmh!“ 🍎</text>\n<text x=\"80\" y=\"142\" font-size=\"20\" font-weight=\"bold\" fill=\"#ffffff\">sonst</text>\n<rect x=\"130\" y=\"160\" width=\"230\" height=\"32\" rx=\"6\" fill=\"#3b82f6\"/>\n<text x=\"245\" y=\"182\" font-size=\"17\" fill=\"#ffffff\" text-anchor=\"middle\">gehe 10er-Schritt 🐾</text>\n<text x=\"440\" y=\"100\" font-size=\"16\" fill=\"#15803d\" font-weight=\"bold\">← wenn WAHR</text>\n<text x=\"440\" y=\"182\" font-size=\"16\" fill=\"#b91c1c\" font-weight=\"bold\">← wenn FALSCH</text>\n</svg>"
    },
    {
     "label": "🐍 Wie die echten Programmierer",
     "html": "<p>Später wirst du Programme mit Wörtern schreiben. Hier ist dieselbe Idee in <b>Python</b>, einer der meistbenutzten Sprachen der Welt (auch für künstliche Intelligenz):</p>\n<p style=\"font-family:monospace;background:#0f172a;color:#e2e8f0;padding:10px;border-radius:8px\">\npunkte = 12<br>\n<span style=\"color:#f472b6\">if</span> punkte &gt; 10:<br>\n&nbsp;&nbsp;&nbsp;&nbsp;print(\"Du hast gewonnen!\")<br>\n<span style=\"color:#f472b6\">else</span>:<br>\n&nbsp;&nbsp;&nbsp;&nbsp;print(\"Spiel weiter\")\n</p>\n<p>Die nach rechts verschobenen Zeilen (Einrückung) sind die, die „in“ der Bedingung stehen, genau wie die Blöcke im Maul des Scratch-Blocks. Dieses Programm schreibt <b>„Du hast gewonnen!“</b>, weil 12 &gt; 10 wahr ist.</p>"
    },
    {
     "label": "🌲 Die Weggabelung im Wald",
     "html": "<p>Stell dir vor, du gehst auf einem Pfad und kommst an eine <b>Gabelung</b> mit einem Schild: <i>„Hast du die Taschenlampe? JA → Höhlenpfad. NEIN → Seepfad.“</i></p>\n<p>Du kannst nicht beide Pfade nehmen, und du kannst nicht stehen bleiben: <b>Du musst einen wählen</b>, je nach Antwort. Ein Programm ist ein Wald voller Gabelungen: Der Computer kommt an jede Gabelung, liest das Schild (die Bedingung) und nimmt einen Weg.</p>\n<p>Und wenn das Schild nur sagt <i>„Hast du Durst? JA → geh zum Brunnen“</i>? Dann gehst du bei NEIN geradeaus weiter: Das ist der Fall von <b>WENN … DANN ohne SONST</b>.</p>"
    },
    {
     "label": "🚦 Die Spielregeln",
     "html": "<p>Alle Brettspiele sind voller Bedingungen, auch die aus anderen Ländern:</p>\n<ul>\n<li>🎲 <b>Gänsespiel</b>: WENN du auf das Brunnenfeld kommst DANN bleib stehen, bis ein anderer Spieler kommt.</li>\n<li>🐍 <b>Schlangen und Leitern</b> (in Indien entstanden, hieß <i>Moksha Patam</i>): WENN du auf einer Leiter landest DANN steig hinauf, WENN du auf dem Kopf einer Schlange landest DANN rutsche hinab.</li>\n<li>🃏 <b>UNO</b>: WENN die Karte dieselbe Farbe ODER dieselbe Zahl hat DANN darfst du sie spielen SONST ziehst du.</li>\n</ul>\n<p>Probier es aus: Schreibe die Regeln deines Lieblingsspiels mit WENN … DANN … SONST auf!</p>"
    },
    {
     "label": "🎮 Ordne Bedingung und Aktion zu",
     "html": "<p>Jede Maschine hat ihre Regel. Ordne die Bedingung (WENN …) der richtigen Aktion (DANN …) zu.</p>",
     "widget": "match",
     "options": {
      "pairs": [
       [
        "WENN es dunkel wird",
        "schalte die Laternen an"
       ],
       [
        "WENN die Temperatur unter 20 °C liegt",
        "schalte die Heizung ein"
       ],
       [
        "WENN der Sensor eine Person sieht",
        "öffne die Tür"
       ],
       [
        "WENN der Akku unter 20 % ist",
        "zeige «Akku leer» an"
       ],
       [
        "WENN der Roboter gegen ein Hindernis stößt",
        "dreh dich und fahre wieder los"
       ],
       [
        "WENN der Code falsch ist",
        "entsperre nicht"
       ]
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Karte der Bedingungen: tippe einen Knoten an",
   "nodes": [
    {
     "id": "algoritmo",
     "label": "Algorithmus",
     "x": 50,
     "y": 6,
     "color": "#2563eb",
     "html": "Eine Folge genauer Anweisungen, um ein Problem zu lösen.",
     "why": "Der Name kommt von <b>al-Chwarizmi</b>, einem persischen Mathematiker, der um das Jahr 800 in Bagdad lebte und dessen Bücher in Europa die indisch-arabischen Zahlen und die Rechenmethoden bekannt machten."
    },
    {
     "id": "condizione",
     "label": "Bedingung",
     "x": 50,
     "y": 30,
     "color": "#f59e0b",
     "html": "Eine Frage mit der Antwort wahr oder falsch.",
     "why": "Ein Computer kann nicht wie wir „denken“: Er kann nur prüfen, ob etwas wahr oder falsch ist, millionenfach pro Sekunde. Darum muss jede Entscheidung in Ja/Nein-Fragen verwandelt werden."
    },
    {
     "id": "booleani",
     "label": "Wahr / Falsch (boolesche Werte)",
     "x": 18,
     "y": 30,
     "color": "#a855f7",
     "html": "Die beiden einzig möglichen Werte einer Bedingung: wahr (1) und falsch (0).",
     "why": "Sie wurden von <b>George Boole</b> 1854 untersucht. 1937 zeigte <b>Claude Shannon</b>, dass die Schalter elektrischer Schaltkreise den Regeln von Boole folgen: Daraus entstanden die digitalen Computer."
    },
    {
     "id": "ifthen",
     "label": "WENN … DANN",
     "x": 30,
     "y": 58,
     "color": "#16a34a",
     "html": "if … then: Die Aktion wird nur ausgeführt, wenn die Bedingung wahr ist.",
     "why": "Es ist die Idee der <b>Auswahl</b>: Zusammen mit der <b>Sequenz</b> (Anweisungen nacheinander) und der <b>Wiederholung</b> (Schleifen) ist sie einer der drei Bausteine, aus denen sich, wie Böhm und Jacopini 1966 zeigten, jedes Programm bauen lässt."
    },
    {
     "id": "else",
     "label": "SONST",
     "x": 30,
     "y": 84,
     "color": "#ef4444",
     "html": "else: der Weg, dem man folgt, wenn die Bedingung falsch ist.",
     "why": "Es dient dazu, das Programm nicht „ohne Antwort“ zu lassen: Mit if … else tut der Computer immer genau eines der beiden Dinge."
    },
    {
     "id": "confronti",
     "label": "Vergleiche > < =",
     "x": 70,
     "y": 58,
     "color": "#0ea5e9",
     "html": "Bedingungen, die Zahlen oder Variablen vergleichen.",
     "why": "Es sind dieselben Zeichen wie in der Mathematik. Die Zeichen &gt; und &lt; führte der englische Mathematiker Thomas Harriot ein (veröffentlicht 1631); das Gleichheitszeichen = erfand Robert Recorde 1557, „weil nichts gleicher ist als zwei parallele Linien“."
    },
    {
     "id": "logici",
     "label": "UND · ODER · NICHT",
     "x": 82,
     "y": 30,
     "color": "#db2777",
     "html": "Logische Operatoren, um Bedingungen zu verbinden oder umzudrehen.",
     "why": "Sie stammen aus der Logik der griechischen Philosophen (Aristoteles) und wurden von Boole in Rechnungen verwandelt. In Schaltkreisen heißen sie <i>logische Gatter</i> AND, OR, NOT: In einem Prozessor gibt es davon Milliarden."
    },
    {
     "id": "rombo",
     "label": "Flussdiagramm",
     "x": 70,
     "y": 84,
     "color": "#64748b",
     "html": "Zeichnung des Programms: Die Bedingung ist eine Raute mit den Ausgängen JA und NEIN.",
     "why": "Flussdiagramme wurden in der Informatik ab den 1940er-Jahren benutzt (Goldstine und von Neumann, 1947), um Programme zu entwerfen, bevor man sie schrieb; die Symbole wurden später genormt. Sie helfen, alle möglichen Wege zu sehen."
    }
   ],
   "edges": [
    [
     "algoritmo",
     "condizione",
     "entscheidet mit"
    ],
    [
     "condizione",
     "booleani",
     "gilt"
    ],
    [
     "condizione",
     "ifthen",
     "wird benutzt in"
    ],
    [
     "ifthen",
     "else",
     "+ Weg des NEIN"
    ],
    [
     "condizione",
     "confronti",
     "ist oft ein"
    ],
    [
     "condizione",
     "logici",
     "wird kombiniert mit"
    ],
    [
     "ifthen",
     "rombo",
     "wird gezeichnet mit"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Folge dem Programm",
   "questions": [
    {
     "type": "mc",
     "q": "punkte = 7. WENN punkte > 5 DANN sage «Gut» SONST sage «Los!». Was sagt es?",
     "options": [
      "Gut",
      "Los!",
      "Nichts"
     ],
     "answer": 0,
     "explain": "7 > 5 ist wahr, also folgt man dem Weg des JA: «Gut»."
    },
    {
     "type": "mc",
     "q": "WENN Samstag ODER Sonntag ist DANN keine Schule. Heute ist Sonntag. Ist Schule?",
     "options": [
      "Ja",
      "Nein"
     ],
     "answer": 1,
     "explain": "Bei ODER genügt eine wahre Bedingung: Es ist Sonntag, also keine Schule."
    },
    {
     "type": "tf",
     "q": "(3 > 1) UND (2 > 5) ist wahr.",
     "answer": false,
     "explain": "Bei UND müssen beide wahr sein: 2 > 5 ist falsch, also ist alles falsch."
    },
    {
     "type": "mc",
     "q": "NICHT (wahr) ist gleich …",
     "options": [
      "wahr",
      "falsch"
     ],
     "answer": 1,
     "explain": "NICHT dreht den Wert um."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Bedingung",
   "d": "Frage, auf die man nur mit wahr oder falsch antwortet."
  },
  {
   "t": "Bedingte Anweisung (Auswahl)",
   "d": "Teil des Programms, der je nach Bedingung wählt, was getan wird."
  },
  {
   "t": "if / then / else",
   "d": "Wenn / dann / sonst, in Programmiersprachen."
  },
  {
   "t": "Variable",
   "d": "Eine «Schachtel» mit einem Namen, die einen Wert enthält, der sich ändern kann (Punkte, Leben …)."
  },
  {
   "t": "Vergleichsoperatoren",
   "d": "Zeichen > (größer), < (kleiner), = (gleich)."
  },
  {
   "t": "Logische Operatoren",
   "d": "UND (and), ODER (or), NICHT (not): verbinden oder drehen Bedingungen um."
  },
  {
   "t": "Boolescher Wert",
   "d": "Wert, der nur wahr oder falsch sein kann, nach dem Namen von George Boole."
  },
  {
   "t": "Flussdiagramm",
   "d": "Zeichnung eines Algorithmus: Die Entscheidungen sind Rauten mit den Ausgängen JA/NEIN."
  },
  {
   "t": "Sensor",
   "d": "Gerät, das etwas misst (Licht, Temperatur, Entfernung) und den Bedingungen Daten liefert."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Eine Bedingung kann als Antwort haben …",
    "options": [
     "jede beliebige Zahl",
     "nur wahr oder falsch",
     "nur Wörter"
    ],
    "answer": 1,
    "explain": "Eine Bedingung ist wahr oder falsch."
   },
   {
    "type": "mc",
    "q": "Wie sagt man «wenn» auf Englisch in Programmen?",
    "options": [
     "then",
     "if",
     "else"
    ],
    "answer": 1,
    "explain": "if = wenn."
   },
   {
    "type": "mc",
    "q": "leben = 0. WENN leben = 0 DANN «Game over» SONST «Weiter». Was erscheint?",
    "options": [
     "Game over",
     "Weiter"
    ],
    "answer": 0,
    "explain": "leben = 0 ist wahr → Game over."
   },
   {
    "type": "mc",
    "q": "alter = 8. WENN alter > 10 DANN «Du darfst einsteigen» SONST «Du bist zu klein». Was erscheint?",
    "options": [
     "Du darfst einsteigen",
     "Du bist zu klein"
    ],
    "answer": 1,
    "explain": "8 > 10 ist falsch → man folgt dem SONST."
   },
   {
    "type": "tf",
    "q": "Beim Operator ODER genügt es, wenn nur eine Bedingung wahr ist.",
    "answer": true,
    "explain": "ODER ist wahr, wenn mindestens eine Bedingung wahr ist."
   },
   {
    "type": "tf",
    "q": "(5 = 5) UND (1 < 4) ist wahr.",
    "answer": true,
    "explain": "Beide sind wahr, also ergibt UND wahr."
   },
   {
    "type": "tf",
    "q": "In Flussdiagrammen zeichnet man die Entscheidung in einen Kreis.",
    "answer": false,
    "explain": "Man zeichnet sie in eine Raute."
   },
   {
    "type": "text",
    "q": "Wie heißt in Programmen das Wort, das «sonst» bedeutet?",
    "answer": [
     "else"
    ],
    "explain": "else = sonst."
   },
   {
    "type": "num",
    "q": "punkte = 4. WENN punkte < 5 DANN addiere 10 zu den Punkten. Wie viele Punkte sind es am Ende?",
    "answer": 14,
    "explain": "4 < 5 ist wahr, also 4 + 10 = 14."
   },
   {
    "type": "num",
    "q": "x = 9. WENN x > 5 UND x < 8 DANN wird x zu 0 SONST wird x zu 1. Wie viel ist x am Ende?",
    "answer": 1,
    "explain": "9 > 5 ist wahr, aber 9 < 8 ist falsch: Bei UND ist das Ergebnis falsch, also wird x zu 1."
   },
   {
    "type": "mc",
    "q": "Welcher Gegenstand benutzt die Regel «WENN die Temperatur niedrig ist DANN schalte ein»?",
    "options": [
     "das Thermostat",
     "das Buch",
     "der Bleistift"
    ],
    "answer": 0,
    "explain": "Das Thermostat misst die Temperatur und schaltet die Heizung ein oder aus."
   },
   {
    "type": "order",
    "q": "Bring in die richtige Reihenfolge, wie ein Programm mit einer Bedingung arbeitet.",
    "items": [
     "kommt zur Bedingung",
     "prüft, ob sie wahr oder falsch ist",
     "wählt den Weg JA oder NEIN",
     "führt die Aktionen dieses Weges aus",
     "macht mit dem Rest des Programms weiter"
    ],
    "explain": "Der Computer prüft, wählt einen Weg, führt aus und macht dann weiter."
   }
  ]
 }
});
