TOPIC('de', {
 "id": "p5-tec-ia-intro",
 "title": "Was ist künstliche Intelligenz?",
 "intro": "Das Handy, das dein Gesicht erkennt, der Sprachassistent, der Fragen beantwortet, das Programm, das einen Text im Nu übersetzt: Dahinter steckt <b>künstliche Intelligenz</b> (KI). Aber wie kann eine Maschine „lernen“? Ist sie wirklich so intelligent wie wir? Das finden wir heute heraus, und wir lernen auch, sie mit Köpfchen zu benutzen. 🤖🧠",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "1. Normale Programme und Programme, die lernen",
   "html": "<p>Ein <b>normales Programm</b> folgt <b>Anweisungen</b>, die ein Mensch geschrieben hat, Schritt für Schritt, wie ein Rezept: <i>„Wenn die Zahl gerade ist, schreibe GERADE; sonst schreibe UNGERADE“</i>. Der Programmierer muss alles vorhersehen.</p>\n<p>Aber versuche einmal, die Anweisungen zu schreiben, wie man eine <b>Katze</b> auf einem Foto erkennt: „Sie hat spitze Ohren“ … Füchse auch! „Sie hat Schnurrhaare“ … Mäuse auch! Es ist fast unmöglich, alle Regeln aufzuschreiben.</p>\n<p>Die <b>künstliche Intelligenz</b> geht einen anderen Weg: Statt der Maschine die Regeln zu geben, geben wir ihr <b>sehr viele Beispiele</b>, und sie entdeckt die „versteckten Regeln“ selbst. Diese Methode heißt <b>maschinelles Lernen</b> (englisch <i>machine learning</i>).</p>\n<p>Das ist ein bisschen so, wie du gelernt hast, Hunde zu erkennen: Niemand hat dir eine Definition gegeben, du hast viele Hunde gesehen und verstanden, wie sie aussehen!</p>"
  },
  {
   "type": "text",
   "title": "2. Wie eine Maschine lernt: 4 Schritte",
   "html": "<ol>\n<li><b>Daten sammeln</b>: zum Beispiel 10.000 Fotos von Katzen und 10.000 Fotos von Hunden.</li>\n<li><b>Beschriften</b>: Ein Mensch schreibt auf jedes Foto „Katze“ oder „Hund“. Das sind die <b>Trainingsdaten</b>.</li>\n<li><b>Trainieren</b> (<i>training</i>): Die Maschine sieht sich die Fotos an, versucht zu raten, prüft die Beschriftung und verbessert sich ein kleines bisschen, wenn sie falsch lag. Das wiederholt sie tausende und tausende Male. Am Ende hat sie ein <b>Modell</b> gebaut.</li>\n<li><b>Benutzen und überprüfen</b>: Wir zeigen ihr ein <b>neues</b> Foto, das sie noch nie gesehen hat. Das Modell antwortet: „Katze zu 95 %“. Man prüft, wie oft es recht hat.</li>\n</ol>\n<p>Hinweis: Die KI ist nicht zu 100 % sicher, sie gibt eine <b>Wahrscheinlichkeit</b> an. Und sie lernt nur von dem, was wir ihr geben: Wenn auf den Fotos nur schwarze Katzen sind, erkennt sie vielleicht eine weiße Katze nicht!</p>"
  },
  {
   "type": "svg",
   "title": "Von den Beispielen zum Modell",
   "caption": "Viele Beispiele mit Beschriftung ➜ Training ➜ ein Modell, das auch neue Beispiele erkennt.",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f5f3ff\"/>\n<text x=\"95\" y=\"30\" font-size=\"16\" text-anchor=\"middle\" fill=\"#4c1d95\" font-weight=\"bold\">1. Beispiele + Beschriftungen</text>\n<rect x=\"20\" y=\"45\" width=\"70\" height=\"60\" rx=\"8\" fill=\"#ffffff\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"55\" y=\"85\" font-size=\"30\" text-anchor=\"middle\">🐱</text>\n<rect x=\"100\" y=\"45\" width=\"70\" height=\"60\" rx=\"8\" fill=\"#ffffff\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"135\" y=\"85\" font-size=\"30\" text-anchor=\"middle\">🐶</text>\n<rect x=\"20\" y=\"125\" width=\"70\" height=\"60\" rx=\"8\" fill=\"#ffffff\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"55\" y=\"165\" font-size=\"30\" text-anchor=\"middle\">🐈</text>\n<rect x=\"100\" y=\"125\" width=\"70\" height=\"60\" rx=\"8\" fill=\"#ffffff\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"135\" y=\"165\" font-size=\"30\" text-anchor=\"middle\">🐕</text>\n<text x=\"55\" y=\"120\" font-size=\"13\" text-anchor=\"middle\" fill=\"#16a34a\" font-weight=\"bold\">Katze</text>\n<text x=\"135\" y=\"120\" font-size=\"13\" text-anchor=\"middle\" fill=\"#2563eb\" font-weight=\"bold\">Hund</text>\n<text x=\"55\" y=\"200\" font-size=\"13\" text-anchor=\"middle\" fill=\"#16a34a\" font-weight=\"bold\">Katze</text>\n<text x=\"135\" y=\"200\" font-size=\"13\" text-anchor=\"middle\" fill=\"#2563eb\" font-weight=\"bold\">Hund</text>\n<text x=\"95\" y=\"230\" font-size=\"14\" text-anchor=\"middle\" fill=\"#4c1d95\">… tausende Fotos</text>\n<text x=\"200\" y=\"130\" font-size=\"34\" fill=\"#7c3aed\">➜</text>\n<rect x=\"240\" y=\"70\" width=\"140\" height=\"120\" rx=\"16\" fill=\"#7c3aed\"/>\n<text x=\"310\" y=\"110\" font-size=\"34\" text-anchor=\"middle\">⚙️</text>\n<text x=\"310\" y=\"145\" font-size=\"15\" text-anchor=\"middle\" fill=\"#ffffff\" font-weight=\"bold\">2. Training</text>\n<text x=\"310\" y=\"168\" font-size=\"13\" text-anchor=\"middle\" fill=\"#ede9fe\">probiert, irrt, verbessert sich</text>\n<text x=\"390\" y=\"130\" font-size=\"34\" fill=\"#7c3aed\">➜</text>\n<rect x=\"430\" y=\"45\" width=\"150\" height=\"80\" rx=\"12\" fill=\"#ffffff\" stroke=\"#7c3aed\" stroke-width=\"3\"/>\n<text x=\"505\" y=\"75\" font-size=\"15\" text-anchor=\"middle\" fill=\"#4c1d95\" font-weight=\"bold\">3. Neues Foto</text>\n<text x=\"505\" y=\"112\" font-size=\"30\" text-anchor=\"middle\">🐈‍⬛</text>\n<rect x=\"430\" y=\"150\" width=\"150\" height=\"80\" rx=\"12\" fill=\"#22c55e\"/>\n<text x=\"505\" y=\"182\" font-size=\"15\" text-anchor=\"middle\" fill=\"#ffffff\" font-weight=\"bold\">4. Antwort</text>\n<text x=\"505\" y=\"212\" font-size=\"18\" text-anchor=\"middle\" fill=\"#ffffff\" font-weight=\"bold\">Katze: 95 %</text>\n<line x1=\"505\" y1=\"125\" x2=\"505\" y2=\"150\" stroke=\"#7c3aed\" stroke-width=\"3\"/>\n<text x=\"300\" y=\"275\" font-size=\"16\" text-anchor=\"middle\" fill=\"#4c1d95\">Mehr gute und unterschiedliche Beispiele = bessere Antworten</text>\n</svg>"
  },
  {
   "type": "widget",
   "title": "Versuch selbst, dein Gehirn zu „trainieren“",
   "widget": "classify",
   "caption": "Mach es wie eine KI: Sieh dir die Beispiele an und teile sie in zwei Gruppen ein. Welche „versteckte Regel“ hast du benutzt?",
   "options": {
    "groups": [
     "🍎 Obst",
     "🥕 Gemüse"
    ],
    "items": [
     [
      "🍎 Apfel",
      0
     ],
     [
      "🍌 Banane",
      0
     ],
     [
      "🍇 Trauben",
      0
     ],
     [
      "🍓 Erdbeere",
      0
     ],
     [
      "🍐 Birne",
      0
     ],
     [
      "🥕 Karotte",
      1
     ],
     [
      "🥦 Brokkoli",
      1
     ],
     [
      "🥬 Salat",
      1
     ],
     [
      "🧅 Zwiebel",
      1
     ],
     [
      "🥔 Kartoffel",
      1
     ]
    ]
   }
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Wie lernt die KI?",
   "questions": [
    {
     "type": "mc",
     "q": "Wie lernt ein System für maschinelles Lernen?",
     "options": [
      "Es liest ein Regelbuch",
      "Aus vielen Beispielen",
      "Indem es die Lehrerin fragt"
     ],
     "answer": 1,
     "explain": "Es lernt aus den Trainingsdaten: viele Beispiele, oft mit Beschriftungen."
    },
    {
     "type": "tf",
     "q": "Die KI ist sich bei ihren Antworten immer zu 100 % sicher.",
     "answer": false,
     "explain": "Sie gibt eine Wahrscheinlichkeit an und kann sich irren."
    },
    {
     "type": "order",
     "q": "Bringe die Schritte in die richtige Reihenfolge.",
     "items": [
      "Daten sammeln",
      "Beispiele beschriften",
      "Das Modell trainieren",
      "Mit neuen Daten testen"
     ],
     "explain": "Daten ➜ Beschriftungen ➜ Training ➜ Überprüfung."
    }
   ]
  },
  {
   "type": "text",
   "title": "3. Neuronale Netze: ein „Gehirn“ aus Zahlen",
   "html": "<p>Viele heutige KI benutzen <b>künstliche neuronale Netze</b>, die (ganz entfernt) von den <b>Neuronen</b> in unserem Gehirn inspiriert sind.</p>\n<ul>\n<li>Ein Netz besteht aus vielen künstlichen „Neuronen“, die in <b>Schichten</b> angeordnet sind.</li>\n<li>Die erste Schicht erhält die Daten (zum Beispiel die Pixel eines Fotos).</li>\n<li>Die Schichten in der Mitte, die <b>versteckten</b> Schichten, entdecken immer komplexere Dinge: erst Linien und Flecken, dann Formen wie Augen und Ohren, dann „Katzengesicht“.</li>\n<li>Die letzte Schicht gibt die Antwort.</li>\n</ul>\n<p>Jede Verbindung hat ein <b>Gewicht</b>, eine Zahl, die sagt, wie wichtig sie ist. Das Netz zu trainieren heißt, die <b>Gewichte nach und nach anzupassen</b>, bis die Antworten stimmen. Die größten Netze haben <b>Milliarden</b> von Gewichten!</p>\n<p>Wenn Netze viele Schichten haben, spricht man von <b>Deep Learning</b> (tiefes Lernen).</p>"
  },
  {
   "type": "3d",
   "title": "Ein neuronales Netz in 3D",
   "scene": "molecule",
   "caption": "Dreh das Netz: links die Eingaben (E, blau), in der Mitte die versteckte Schicht (V, lila), rechts die Ausgaben (Katze K und Hund H, grün). Jeder Stab ist eine Verbindung mit ihrem „Gewicht“.",
   "options": {
    "atoms": [
     {
      "x": -1.6,
      "y": 0.9,
      "z": 0,
      "r": 0.25,
      "color": "#3b82f6",
      "label": "E"
     },
     {
      "x": -1.6,
      "y": 0.3,
      "z": 0,
      "r": 0.25,
      "color": "#3b82f6",
      "label": "E"
     },
     {
      "x": -1.6,
      "y": -0.3,
      "z": 0,
      "r": 0.25,
      "color": "#3b82f6",
      "label": "E"
     },
     {
      "x": -1.6,
      "y": -0.9,
      "z": 0,
      "r": 0.25,
      "color": "#3b82f6",
      "label": "E"
     },
     {
      "x": 0,
      "y": 0.75,
      "z": 0.3,
      "r": 0.28,
      "color": "#a855f7",
      "label": "V"
     },
     {
      "x": 0,
      "y": 0,
      "z": -0.3,
      "r": 0.28,
      "color": "#a855f7",
      "label": "V"
     },
     {
      "x": 0,
      "y": -0.75,
      "z": 0.3,
      "r": 0.28,
      "color": "#a855f7",
      "label": "V"
     },
     {
      "x": 1.6,
      "y": 0.4,
      "z": 0,
      "r": 0.32,
      "color": "#22c55e",
      "label": "K"
     },
     {
      "x": 1.6,
      "y": -0.4,
      "z": 0,
      "r": 0.32,
      "color": "#22c55e",
      "label": "H"
     }
    ],
    "bonds": [
     [
      0,
      4
     ],
     [
      0,
      5
     ],
     [
      0,
      6
     ],
     [
      1,
      4
     ],
     [
      1,
      5
     ],
     [
      1,
      6
     ],
     [
      2,
      4
     ],
     [
      2,
      5
     ],
     [
      2,
      6
     ],
     [
      3,
      4
     ],
     [
      3,
      5
     ],
     [
      3,
      6
     ],
     [
      4,
      7
     ],
     [
      4,
      8
     ],
     [
      5,
      7
     ],
     [
      5,
      8
     ],
     [
      6,
      7
     ],
     [
      6,
      8
     ]
    ]
   }
  },
  {
   "type": "text",
   "title": "4. Wo du der KI jeden Tag begegnest",
   "html": "<ul>\n<li>📷 <b>Bilder erkennen</b>: das Entsperren mit dem Gesicht, die nach Personen gruppierten Fotos, das Auto, das die Verkehrsschilder liest.</li>\n<li>🗣️ <b>Sprache verstehen</b>: die Sprachassistenten, die automatischen Untertitel.</li>\n<li>🌐 <b>Übersetzen</b>: die automatischen Übersetzer.</li>\n<li>🎬 <b>Empfehlen</b>: die Videos und Lieder, „die dir gefallen könnten“.</li>\n<li>💬 <b>Texte und Bilder erzeugen</b>: die Chatbots und die Programme, die aus einer Beschreibung Zeichnungen machen (<b>generative</b> KI).</li>\n<li>🏥 <b>Medizin</b>: Ärztinnen und Ärzten helfen, Krankheiten auf Röntgenbildern zu finden.</li>\n<li>🌦️ <b>Wissenschaft</b>: das Wetter vorhersagen, die Form von Proteinen entdecken.</li>\n</ul>"
  },
  {
   "type": "example",
   "title": "Praktisches Beispiel: der Spamfilter",
   "html": "<p>Das E-Mail-Postfach trennt nützliche E-Mails von allein von Werbung oder betrügerischen Mails (<b>Spam</b>). Wie?</p>\n<ol>\n<li>Millionen von Nutzern haben auf die Schaltfläche „Als Spam melden“ gedrückt: Das sind die <b>Beschriftungen</b>.</li>\n<li>Das System hat gelernt, dass bestimmte Dinge im Spam oft vorkommen: „DU HAST GEWONNEN!!!“, seltsame Links, unbekannte Absender.</li>\n<li>Wenn eine neue Mail ankommt, berechnet es die Wahrscheinlichkeit, dass sie Spam ist. Ist sie hoch, verschiebt es sie in den Spam-Ordner.</li>\n</ol>\n<p>Jedes Mal, wenn du einen Spam meldest, hilfst du der KI beim Lernen!</p>"
  },
  {
   "type": "example",
   "title": "Praktisches Beispiel: warum der Chatbot sich irren kann",
   "html": "<p>Ein <b>Chatbot</b> (wie die Assistenten, mit denen man „plaudern“ kann) wurde mit einer riesigen Menge an Texten trainiert. Er hat gelernt vorherzusagen, <b>welches Wort als Nächstes kommt</b>, und das so gut, dass er Sätze schreibt, die von einem Menschen zu stammen scheinen.</p>\n<p>Aber er „weiß“ die Dinge nicht so, wie du sie weißt: Manchmal erfindet er falsche Antworten, die sehr überzeugend geschrieben sind (sie heißen „<b>Halluzinationen</b>“).</p>\n<p>Beispiel: Du fragst „Wer hat den Wettlauf in meiner Schule gewonnen?“. Der Chatbot kann das nicht wissen, aber er könnte einen Namen erfinden! Deshalb muss man Informationen immer in verlässlichen Quellen <b>überprüfen</b>: in einem Buch, bei einer Lehrkraft, auf einer seriösen Website.</p>"
  },
  {
   "type": "decision",
   "title": "Was würdest du tun?",
   "html": "<p>Du musst für die Schule ein Referat über die Ägypter machen. Ein Chatbot schreibt dir im Nu einen wunderschönen Text, in dem auch steht, dass „die Pyramiden im Jahr 1200 n. Chr. gebaut wurden“.</p>",
   "question": "Was tust du?",
   "options": [
    {
     "label": "Ich kopiere den Text so, wie er ist, und gebe ihn ab.",
     "outcome": "Der Text ist nicht von dir und enthält einen groben Fehler: Die Pyramiden von Gizeh sind etwa 4500 Jahre alt (2600–2500 v. Chr.)! Die Lehrerin merkt es, und vor allem hast du nichts gelernt."
    },
    {
     "label": "Ich lasse mir vom Chatbot die wichtigsten Ideen erklären, überprüfe die Daten im Buch und schreibe den Text mit meinen eigenen Worten.",
     "outcome": "Sehr gut! Du benutzt die KI als Helfer, nicht als jemanden, der die Arbeit für dich macht. Beim Überprüfen entdeckst du auch den Fehler bei der Jahreszahl."
    },
    {
     "label": "Ich benutze nie eine KI, weil sie sowieso alles falsch macht.",
     "outcome": "Das ist vorsichtig, aber KI kann nützlich sein: Sie erklärt auf verschiedene Weisen, hilft beim Erstellen von Übersichten und beim Üben. Wichtig ist, sie mit einem Erwachsenen und mit der richtigen Erlaubnis zu benutzen und immer zu überprüfen."
    }
   ],
   "answer": 1,
   "explain": "Die KI ist ein <b>Werkzeug</b>: Sie kann dir helfen, Ideen zu verstehen und zu ordnen, aber sie kann sich irren und ersetzt dein Gehirn nicht. Die goldene Regel: <b>Benutze sie, aber überprüfe immer und schreibe mit eigenen Worten</b>. Und denk daran, dass für viele KI-Dienste die Erlaubnis der Eltern nötig ist, vor allem unter 14 Jahren."
  },
  {
   "type": "remember",
   "title": "Die Regeln für den guten Umgang mit KI",
   "html": "<ul>\n<li>✅ <b>Überprüfe</b>: Die KI kann sich irren oder etwas erfinden. Kontrolliere in verlässlichen Quellen.</li>\n<li>🔒 <b>Privatsphäre</b>: Schreibe nie deinen vollständigen Namen, deine Adresse, Schule, Passwörter oder persönliche Fotos.</li>\n<li>🧠 <b>Denk selbst</b>: Benutze sie, um besser zu verstehen, nicht um abzuschreiben.</li>\n<li>👨‍👩‍👧 <b>Frag einen Erwachsenen</b>: Viele Dienste verlangen die Erlaubnis der Eltern.</li>\n<li>⚖️ <b>Respekt</b>: Benutze sie nicht, um jemanden auszulachen oder falsche Bilder von echten Menschen zu erstellen.</li>\n</ul>"
  },
  {
   "type": "widget",
   "title": "Spiel: KI oder keine KI?",
   "widget": "classify",
   "caption": "Welche dieser Dinge benutzen maschinelles Lernen, und welche folgen nur festen Regeln?",
   "options": {
    "groups": [
     "🤖 Benutzt KI (lernt aus Daten)",
     "⚙️ Folgt festen Regeln"
    ],
    "items": [
     [
      "Handy mit Gesicht entsperren",
      0
     ],
     [
      "Automatischer Übersetzer",
      0
     ],
     [
      "Empfohlene Videos",
      0
     ],
     [
      "Sprachassistent",
      0
     ],
     [
      "Spamfilter",
      0
     ],
     [
      "Taschenrechner",
      1
     ],
     [
      "Ampel mit Zeitschaltung",
      1
     ],
     [
      "Wecker",
      1
     ],
     [
      "Thermostat, das bei 20 °C anschaltet",
      1
     ]
    ]
   }
  },
  {
   "type": "curiosity",
   "title": "Wusstest du, dass … die Frage „Können Maschinen denken?“ über 75 Jahre alt ist?",
   "html": "<p>Im Jahr <b>1950</b> schlug der englische Mathematiker <b>Alan Turing</b> ein Spiel vor: Eine Person chattet mit zwei versteckten Gesprächspartnern, einem Menschen und einer Maschine. Wenn sie nicht herausfinden kann, wer die Maschine ist, verhält sich die Maschine „intelligent“. Das ist der berühmte <b>Turing-Test</b>. Der Name „künstliche Intelligenz“ entstand dagegen <b>1956</b> bei einer Tagung am Dartmouth College (USA), die <b>John McCarthy</b> organisiert hatte.</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du, dass … ein Computer den Schachweltmeister geschlagen hat?",
   "html": "<p>Im Jahr <b>1997</b> schlug der IBM-Computer <b>Deep Blue</b> den Schachweltmeister <b>Garry Kasparov</b>. Im Jahr <b>2016</b> schlug das Programm <b>AlphaGo</b> den Meister <b>Lee Sedol</b> im <b>Go</b>, einem chinesischen Spiel mit mehr möglichen Stellungen, als es Atome im Universum gibt. AlphaGo hatte gelernt, indem es Partien von Menschen studierte und dann Millionen von Partien spielte … gegen sich selbst!</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du, dass … Europa das erste KI-Gesetz gemacht hat?",
   "html": "<p>Im Jahr <b>2024</b> hat die Europäische Union den <b>AI Act</b> beschlossen, das erste große Gesetz der Welt über künstliche Intelligenz. Es teilt die KI nach ihrem <b>Risiko</b> ein: Manche sind verboten (zum Beispiel solche, die Menschen manipulieren), andere, etwa die in Krankenhäusern oder Schulen eingesetzten, müssen strenge Regeln einhalten. Auch Italien hat 2025 sein eigenes KI-Gesetz gemacht.</p>"
  },
  {
   "type": "alternatives",
   "title": "Andere Wege zum Verstehen",
   "intro": "Maschinelles Lernen ist eine schwierige Idee. Hier sind ein paar andere Wege.",
   "tabs": [
    {
     "label": "🐕 Wie man einen Hund trainiert",
     "html": "<p>Wenn du einem Hund „Sitz“ beibringst, erklärst du ihm keine Regeln: Du sagst „Sitz“, und wenn er es tut, bekommt er eine Belohnung 🦴. Wenn er sich irrt, gibt es keine Belohnung. Nach vielen Versuchen hat der Hund „verstanden“.</p>\n<p>Manche KI lernen genau so! Das heißt <b>bestärkendes Lernen</b>: Die Maschine probiert Handlungen aus, bekommt „Punkte“, wenn sie es gut macht, und lernt nach und nach die beste Strategie. So ist AlphaGo zum Meister geworden.</p>"
    },
    {
     "label": "🍝 Das Rezept und der Koch",
     "html": "<table>\n<tr><th>Normales Programm</th><th>Künstliche Intelligenz</th></tr>\n<tr><td>Wie ein <b>Rezept</b> Wort für Wort befolgen: 200 g Nudeln, 10 Minuten, Salz.</td><td>Wie ein Koch, der <b>tausend Gerichte</b> probiert hat und von allein verstanden hat, was sie gut macht.</td></tr>\n<tr><td>Regeln ➜ Antworten</td><td>Beispiele + Antworten ➜ Regeln</td></tr>\n<tr><td>Es tut nur, was geschrieben steht.</td><td>Sie kann neue Fälle bewältigen, kann sich aber auch irren.</td></tr>\n</table>"
    },
    {
     "label": "📈 Errate die Regel",
     "html": "<p>Sieh dir diese Beispiele an: 1 ➜ 3 · 2 ➜ 5 · 3 ➜ 7 · 4 ➜ 9. Was wird das Ergebnis von 10 sein?</p>\n<p>Du hast die Regel „<b>das Doppelte plus eins</b>“ entdeckt und <b>21</b> geantwortet, obwohl es dir niemand gesagt hat. Genau das tut eine Maschine, die lernt: Sie findet aus den Beispielen die versteckte Regel! Auf dem Zahlenstrahl unten sind die Ergebnisse markiert: Siehst du das Muster?</p>",
     "widget": "numberLine",
     "options": {
      "min": 0,
      "max": 22,
      "step": 1,
      "marks": [
       3,
       5,
       7,
       9,
       21
      ]
     }
    },
    {
     "label": "🔗 KI-Wörter",
     "html": "<p>Ordne jedes Wort seiner Bedeutung zu.</p>",
     "widget": "match",
     "options": {
      "pairs": [
       [
        "Trainingsdaten",
        "Die Beispiele, aus denen die Maschine lernt"
       ],
       [
        "Beschriftung",
        "Die richtige Antwort, die auf einem Beispiel steht"
       ],
       [
        "Modell",
        "Das Ergebnis des Trainings"
       ],
       [
        "Neuronales Netz",
        "Verbundene Schichten künstlicher Neuronen"
       ],
       [
        "Halluzination",
        "Erfundene, aber überzeugende Antwort"
       ],
       [
        "Chatbot",
        "Programm, mit dem man sich unterhält"
       ]
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Landkarte: die Wurzeln der künstlichen Intelligenz",
   "nodes": [
    {
     "id": "ia",
     "label": "Künstliche Intelligenz",
     "x": 50,
     "y": 8,
     "color": "#7c3aed",
     "html": "Systeme, die Aufgaben erledigen, für die man normalerweise menschliche Intelligenz braucht.",
     "why": "Den Namen wählte <b>John McCarthy</b> für die Tagung in Dartmouth 1956. Die Wissenschaftler damals dachten, sie würden das Problem in wenigen Jahren lösen … es hat Jahrzehnte gedauert!"
    },
    {
     "id": "turing",
     "label": "Alan Turing",
     "x": 15,
     "y": 25,
     "color": "#64748b",
     "html": "Der „Vater“ der Informatik und der KI.",
     "why": "1936 beschrieb er die „Turingmaschine“, das Modell jedes Computers. 1950 fragte er sich, ob Maschinen denken können, und schlug seinen Test vor. Im Krieg half er, die geheimen Codes der Nazis zu entschlüsseln."
    },
    {
     "id": "dati",
     "label": "Daten",
     "x": 85,
     "y": 25,
     "color": "#0ea5e9",
     "html": "Die Beispiele, aus denen die Maschine lernt.",
     "why": "Moderne KI funktioniert, weil es heute dank des Internets riesige Mengen an Texten, Fotos und Tönen gibt. Ein großes Projekt, <b>ImageNet</b> (2009), sammelte mehr als 14 Millionen von Hand beschriftete Bilder."
    },
    {
     "id": "ml",
     "label": "Maschinelles Lernen",
     "x": 50,
     "y": 35,
     "color": "#a855f7",
     "html": "Aus Beispielen lernen statt aus geschriebenen Regeln.",
     "why": "Der Begriff <i>machine learning</i> wurde 1959 von <b>Arthur Samuel</b> benutzt, der ein Damespiel-Programm schuf, das sich verbessern konnte, indem es gegen sich selbst spielte."
    },
    {
     "id": "neuro",
     "label": "Neuronen im Gehirn",
     "x": 15,
     "y": 60,
     "color": "#ec4899",
     "html": "Die biologische Inspiration.",
     "why": "1943 beschrieben McCulloch und Pitts ein „mathematisches Neuron“. Unser Gehirn hat etwa 86 Milliarden miteinander verbundene Neuronen: Die künstlichen Netze ahmen die Idee nach, nicht die genaue Funktionsweise."
    },
    {
     "id": "rete",
     "label": "Neuronale Netze",
     "x": 40,
     "y": 62,
     "color": "#8b5cf6",
     "html": "Schichten künstlicher Neuronen mit einstellbaren Gewichten.",
     "why": "Das erste, das <b>Perceptron</b>, baute Frank Rosenblatt 1958. Tiefe Netze wurden erst nach 2012 mächtig, dank mehr Daten und superschneller Chips (der GPUs, die für Videospiele entstanden sind!)."
    },
    {
     "id": "usi",
     "label": "Alltägliche Anwendungen",
     "x": 70,
     "y": 62,
     "color": "#22c55e",
     "html": "Übersetzer, Sprachassistenten, Fotos, Medizin.",
     "why": "Sie funktionieren gut dort, wo es viele Beispiele gibt und die Regeln schwer von Hand zu schreiben sind: Bilder, Sprache, Sprachen."
    },
    {
     "id": "etica",
     "label": "Verantwortungsvoller Umgang",
     "x": 55,
     "y": 88,
     "color": "#ef4444",
     "html": "Überprüfen, die Privatsphäre schützen, Ungerechtigkeit vermeiden.",
     "why": "Wenn die Trainingsdaten unvollständig oder voller Vorurteile sind, ist es die KI auch (das nennt man <b>Bias</b>). Deshalb braucht es Regeln, wie den europäischen AI Act von 2024, und Menschen, die kontrollieren."
    }
   ],
   "edges": [
    [
     "turing",
     "ia",
     "stellt die Frage"
    ],
    [
     "ia",
     "ml",
     "heute vor allem"
    ],
    [
     "dati",
     "ml",
     "füttern"
    ],
    [
     "neuro",
     "rete",
     "inspirieren"
    ],
    [
     "ml",
     "rete",
     "benutzt"
    ],
    [
     "rete",
     "usi",
     "ermöglichen"
    ],
    [
     "usi",
     "etica",
     "erfordern"
    ],
    [
     "dati",
     "etica",
     "können Bias haben"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: KI im Alltag",
   "questions": [
    {
     "type": "mc",
     "q": "Was ist eine „Halluzination“ eines Chatbots?",
     "options": [
      "Ein Traum des Computers",
      "Eine erfundene, aber überzeugend geschriebene Antwort",
      "Ein Virus"
     ],
     "answer": 1,
     "explain": "Der Chatbot kann Tatsachen erfinden: Man muss immer überprüfen."
    },
    {
     "type": "tf",
     "q": "Es ist eine gute Idee, seine Wohnadresse in einen Chatbot zu schreiben.",
     "answer": false,
     "explain": "Teile nie persönliche Daten online."
    },
    {
     "type": "mc",
     "q": "Welche dieser Sachen benutzt KEINE KI?",
     "options": [
      "Der automatische Übersetzer",
      "Ein Taschenrechner",
      "Das Entsperren mit dem Gesicht"
     ],
     "answer": 1,
     "explain": "Der Taschenrechner folgt festen Regeln, er lernt nicht."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Künstliche Intelligenz (KI)",
   "d": "Computersysteme, die Aufgaben wie Erkennen, Übersetzen, Vorhersagen erledigen können, indem sie aus Daten lernen."
  },
  {
   "t": "Maschinelles Lernen",
   "d": "Machine learning: Die Maschine lernt aus Beispielen statt aus geschriebenen Regeln."
  },
  {
   "t": "Trainingsdaten",
   "d": "Die Beispiele, mit denen man einer KI etwas beibringt."
  },
  {
   "t": "Beschriftung",
   "d": "Die richtige Antwort, die zu einem Beispiel gehört (z. B. „Katze“)."
  },
  {
   "t": "Modell",
   "d": "Das Ergebnis des Trainings, das Antworten zu neuen Daten gibt."
  },
  {
   "t": "Neuronales Netz",
   "d": "Gesamtheit künstlicher Neuronen, die in Schichten angeordnet und durch Gewichte verbunden sind."
  },
  {
   "t": "Chatbot",
   "d": "Programm, mit dem man sich schreibend oder sprechend unterhalten kann."
  },
  {
   "t": "Halluzination",
   "d": "Falsche Antwort, die eine KI erfunden hat, aber als wahr darstellt."
  },
  {
   "t": "Bias",
   "d": "Vorurteil: systematischer Fehler durch unvollständige oder unausgewogene Daten."
  },
  {
   "t": "Algorithmus",
   "d": "Folge genauer Anweisungen, um ein Problem zu lösen."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Was ist der wichtigste Unterschied zwischen einem normalen Programm und einer lernenden KI?",
    "options": [
     "Die KI ist bunter",
     "Das normale Programm folgt geschriebenen Regeln; die KI findet die Regeln aus den Beispielen",
     "Es gibt keinen Unterschied"
    ],
    "answer": 1,
    "explain": "Die KI lernt aus Beispielen (Trainingsdaten)."
   },
   {
    "type": "text",
    "q": "Wie heißt maschinelles Lernen auf Englisch?",
    "answer": [
     "machine learning"
    ],
    "explain": "Machine learning."
   },
   {
    "type": "order",
    "q": "Bringe die Schritte des Trainings in die richtige Reihenfolge.",
    "items": [
     "Ich sammle viele Fotos",
     "Ich schreibe die Beschriftung auf jedes Foto",
     "Die Maschine probiert, irrt sich und verbessert sich",
     "Ich teste das Modell mit neuen Fotos"
    ],
    "explain": "Daten ➜ Beschriftungen ➜ Training ➜ Überprüfung."
   },
   {
    "type": "mc",
    "q": "Wer schlug 1950 einen Test vor, um herauszufinden, ob eine Maschine „denkt“?",
    "options": [
     "Alan Turing",
     "Leonardo da Vinci",
     "Albert Einstein"
    ],
    "answer": 0,
    "explain": "Der Turing-Test."
   },
   {
    "type": "num",
    "q": "In welchem Jahr entstand der Name „künstliche Intelligenz“?",
    "answer": 1956,
    "tol": 0,
    "explain": "Bei der Tagung in Dartmouth, 1956."
   },
   {
    "type": "tf",
    "q": "Wenn eine KI nur von Fotos schwarzer Katzen lernt, erkennt sie vielleicht eine weiße Katze nicht.",
    "answer": true,
    "explain": "Die KI lernt nur aus dem, was sie sieht: Man braucht unterschiedliche Daten (sonst gibt es Bias)."
   },
   {
    "type": "mc",
    "q": "Die künstlichen neuronalen Netze sind inspiriert von …",
    "options": [
     "den Neuronen im Gehirn",
     "Spinnennetzen",
     "Fischernetzen"
    ],
    "answer": 0,
    "explain": "Sie sind, ganz entfernt, von den Neuronen inspiriert."
   },
   {
    "type": "mc",
    "q": "Ein Chatbot nennt dir ein geschichtliches Datum. Was tust du?",
    "options": [
     "Ich glaube es sofort",
     "Ich überprüfe es in einem Buch oder auf einer verlässlichen Website",
     "Ich ändere es zufällig"
    ],
    "answer": 1,
    "explain": "KI können sich irren: Überprüfe immer."
   },
   {
    "type": "mc",
    "q": "Welche Angabe darf man NIE in einen Chatbot schreiben?",
    "options": [
     "Eine Frage über Dinosaurier",
     "Dein Passwort",
     "Ein Wort zum Übersetzen"
    ],
    "answer": 1,
    "explain": "Passwörter und persönliche Daten muss man immer schützen."
   },
   {
    "type": "tf",
    "q": "1997 schlug der Computer Deep Blue den Schachweltmeister.",
    "answer": true,
    "explain": "Er schlug Garry Kasparov."
   },
   {
    "type": "text",
    "q": "Wie heißt das europäische KI-Gesetz von 2024? (auf Englisch)",
    "answer": [
     "ai act",
     "der ai act",
     "artificial intelligence act"
    ],
    "explain": "Der AI Act, das erste große Gesetz der Welt über KI."
   },
   {
    "type": "mc",
    "q": "Was bedeutet es, ein neuronales Netz zu „trainieren“?",
    "options": [
     "Es einschalten",
     "Die Gewichte der Verbindungen anpassen, bis die Antworten stimmen",
     "Es mit dem Internet verbinden"
    ],
    "answer": 1,
    "explain": "Beim Training werden die Gewichte nach und nach angepasst."
   }
  ]
 }
});
