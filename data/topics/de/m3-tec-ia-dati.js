TOPIC('de', {
 "id": "m3-tec-ia-dati",
 "title": "Intelligenza artificiale e dati",
 "intro": "Die Vorschläge in Videos, der Übersetzer, Chatbots, die Texte schreiben, Autos, die von selbst bremsen: die <b>künstliche Intelligenz</b> (KI) ist schon Teil unseres Lebens. Aber wie schafft es eine Maschine, <b>aus Daten zu lernen</b>? Was ist ein <b>neuronales Netz</b>? Und welche <b>Risiken</b> (Fehler, Vorurteile, Datenschutz, Fälschungen) und welche <b>Chancen</b> gibt es? In dieser Lektion schauen wir in die „Blackbox“. 🤖📊",
 "minutes": 50,
 "sections": [
  {
   "type": "text",
   "title": "1. Daten, Informationen, Wissen",
   "html": "<p>Ein <b>Datenwert</b> ist ein roher Wert: <i>38,5</i>. Eine <b>Information</b> ist ein Datenwert mit Bedeutung: <i>die Temperatur von Marco ist 38,5 °C</i>. <b>Wissen</b> entsteht, wenn man viele Informationen miteinander verbindet: <i>ab 37,5 °C spricht man von Fieber</i>.</p>\n<p>Daten können sein:</p>\n<ul>\n<li><b>strukturiert</b>: in Tabellen geordnet (Noten, Temperaturen, Preise);</li>\n<li><b>unstrukturiert</b>: Texte, Fotos, Audios, Videos (sie machen die große Mehrheit aus).</li>\n</ul>\n<p>Im Computer wird jeder Datenwert zu einer Folge von <b>Bits</b> (0 und 1). Ein Foto ist ein Raster aus Pixeln, jedes mit drei Zahlen (Rot, Grün, Blau, von 0 bis 255). Ein Text ist eine Folge von Zahlen, eine für jedes Zeichen oder jeden Wortteil.</p>\n<p>Jeden Tag entstehen auf der Welt riesige Datenmengen (man spricht von <b>Big Data</b>): Genau diese Fülle hat es der modernen KI ermöglicht zu funktionieren.</p>"
  },
  {
   "type": "text",
   "title": "2. Programmieren oder lernen lassen?",
   "html": "<p>Bei der <b>klassischen Programmierung</b> schreibt der Mensch die <b>Regeln</b>; der Computer wendet sie auf die Daten an und liefert die Antworten.</p>\n<p>Beim <b>Machine Learning</b> (maschinelles Lernen) gibt man dem Computer die <b>Daten</b> und die <b>richtigen Antworten</b> (Beispiele); der Computer leitet die <b>Regeln</b> selbst ab, das heißt, er baut ein <b>Modell</b>.</p>\n<p>Es gibt drei Hauptarten des Lernens:</p>\n<ul>\n<li><b>Überwacht</b> (supervised): Beispiele mit dem richtigen <b>Etikett</b> („diese E-Mail ist Spam / ist kein Spam“). Das Modell lernt, das Etikett vorherzusagen.</li>\n<li><b>Unüberwacht</b> (unsupervised): Daten ohne Etikett; das Modell findet selbst <b>Gruppen</b> und Ähnlichkeiten (z. B. Kunden mit ähnlichem Geschmack).</li>\n<li><b>Durch Verstärkung</b> (reinforcement): Das Modell probiert Handlungen aus und erhält <b>Belohnungen oder Strafen</b>, wie bei der Hundeausbildung (z. B. lernen, ein Videospiel zu spielen).</li>\n</ul>"
  },
  {
   "type": "svg",
   "title": "Der Kreislauf des maschinellen Lernens",
   "caption": "Daten ➜ Aufteilung in Training und Test ➜ Training ➜ Prüfung mit nie gesehenen Daten ➜ Einsatz. Macht das Modell zu viele Fehler, geht man zurück zu den Daten.",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f5f3ff\"/>\n<rect x=\"20\" y=\"40\" width=\"120\" height=\"70\" rx=\"12\" fill=\"#a78bfa\"/>\n<text x=\"80\" y=\"70\" font-size=\"16\" fill=\"#fff\" font-weight=\"bold\" text-anchor=\"middle\">1. DATEN</text>\n<text x=\"80\" y=\"94\" font-size=\"13\" fill=\"#fff\" text-anchor=\"middle\">sammeln, bereinigen</text>\n<rect x=\"170\" y=\"20\" width=\"120\" height=\"50\" rx=\"10\" fill=\"#22c55e\"/>\n<text x=\"230\" y=\"50\" font-size=\"14\" fill=\"#fff\" font-weight=\"bold\" text-anchor=\"middle\">80% Training</text>\n<rect x=\"170\" y=\"85\" width=\"120\" height=\"50\" rx=\"10\" fill=\"#f59e0b\"/>\n<text x=\"230\" y=\"115\" font-size=\"14\" fill=\"#fff\" font-weight=\"bold\" text-anchor=\"middle\">20% Test</text>\n<rect x=\"320\" y=\"20\" width=\"130\" height=\"70\" rx=\"12\" fill=\"#7c3aed\"/>\n<text x=\"385\" y=\"50\" font-size=\"15\" fill=\"#fff\" font-weight=\"bold\" text-anchor=\"middle\">2. TRAINIEREN</text>\n<text x=\"385\" y=\"73\" font-size=\"12\" fill=\"#ede9fe\" text-anchor=\"middle\">probiert, irrt, korrigiert</text>\n<rect x=\"470\" y=\"40\" width=\"115\" height=\"70\" rx=\"12\" fill=\"#1d4ed8\"/>\n<text x=\"527\" y=\"70\" font-size=\"15\" fill=\"#fff\" font-weight=\"bold\" text-anchor=\"middle\">3. MODELL</text>\n<text x=\"527\" y=\"93\" font-size=\"12\" fill=\"#dbeafe\" text-anchor=\"middle\">die gefundenen „Regeln“</text>\n<rect x=\"320\" y=\"170\" width=\"130\" height=\"70\" rx=\"12\" fill=\"#f59e0b\"/>\n<text x=\"385\" y=\"200\" font-size=\"15\" fill=\"#fff\" font-weight=\"bold\" text-anchor=\"middle\">4. PRÜFEN</text>\n<text x=\"385\" y=\"223\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\">mit den Testdaten</text>\n<rect x=\"470\" y=\"170\" width=\"115\" height=\"70\" rx=\"12\" fill=\"#16a34a\"/>\n<text x=\"527\" y=\"200\" font-size=\"15\" fill=\"#fff\" font-weight=\"bold\" text-anchor=\"middle\">5. EINSATZ</text>\n<text x=\"527\" y=\"223\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\">neue Daten</text>\n<g stroke=\"#4c1d95\" stroke-width=\"3\" fill=\"none\">\n<path d=\"M140 65 L168 45\"/><path d=\"M140 85 L168 110\"/>\n<path d=\"M290 45 L318 50\"/><path d=\"M450 55 L468 70\"/>\n<path d=\"M527 112 L527 168\"/><path d=\"M290 110 C 330 120, 360 140, 380 168\"/>\n<path d=\"M450 205 L468 205\"/>\n<path d=\"M320 220 C 200 260, 90 230, 80 112\" stroke-dasharray=\"7 5\"/>\n</g>\n<text x=\"170\" y=\"262\" font-size=\"13\" fill=\"#4c1d95\" font-weight=\"bold\">zu viele Fehler? Daten verbessern</text>\n</svg>"
  },
  {
   "type": "text",
   "title": "3. Im Inneren eines neuronalen Netzes",
   "html": "<p>Die leistungsstärksten KIs von heute nutzen <b>künstliche neuronale Netze</b>, die (sehr entfernt) von den Nervenzellen des Gehirns inspiriert sind.</p>\n<p>Ein <b>künstliches Neuron</b> führt eine ganz einfache Rechnung aus:</p>\n<ol>\n<li>es empfängt <b>Zahlen als Eingabe</b> (Input);</li>\n<li>es multipliziert jede Zahl mit einem <b>Gewicht</b> (wie wichtig sie ist);</li>\n<li>es addiert alles (plus einen Wert namens <i>Bias</i>);</li>\n<li>übersteigt das Ergebnis eine <b>Schwelle</b>, „feuert“ es und sendet ein Signal an die nachfolgenden Neuronen.</li>\n</ol>\n<p>Beispiel: <i>\"Gehe ich in den Park?\"</i> Eingaben: es ist sonnig (1), ich habe Hausaufgaben (1), ein Freund ist da (1). Gewichte: Sonne +3, Hausaufgaben −4, Freund +2. Summe: 3 − 4 + 2 = <b>1</b>. Schwelle 0 ➜ 1 &gt; 0 ➜ <b>ja, ich gehe!</b></p>\n<p>Ein Netz besteht aus <b>Schichten</b>: Eingabeschicht, eine oder mehrere <b>versteckte Schichten</b>, Ausgabeschicht. Wenn Netze viele Schichten haben, spricht man von <b>Deep Learning</b> (tiefes Lernen). Das <b>Trainieren</b> des Netzes bedeutet, die <b>Gewichte</b> millionenfach automatisch anzupassen, damit die Fehler kleiner werden. Große Sprachmodelle haben <b>Milliarden</b> Gewichte.</p>"
  },
  {
   "type": "3d",
   "title": "Ein kleines neuronales Netz in 3D",
   "scene": "molecule",
   "options": {
    "atoms": [
     {
      "x": -2,
      "y": 1.2,
      "z": 0,
      "r": 0.3,
      "color": "#22c55e",
      "label": "Eingabe 1"
     },
     {
      "x": -2,
      "y": 0,
      "z": 0,
      "r": 0.3,
      "color": "#22c55e",
      "label": "Eingabe 2"
     },
     {
      "x": -2,
      "y": -1.2,
      "z": 0,
      "r": 0.3,
      "color": "#22c55e",
      "label": "Eingabe 3"
     },
     {
      "x": 0,
      "y": 1.6,
      "z": 0.5,
      "r": 0.3,
      "color": "#a855f7",
      "label": "versteckt"
     },
     {
      "x": 0,
      "y": 0.5,
      "z": -0.5,
      "r": 0.3,
      "color": "#a855f7",
      "label": "versteckt"
     },
     {
      "x": 0,
      "y": -0.5,
      "z": 0.5,
      "r": 0.3,
      "color": "#a855f7",
      "label": "versteckt"
     },
     {
      "x": 0,
      "y": -1.6,
      "z": -0.5,
      "r": 0.3,
      "color": "#a855f7",
      "label": "versteckt"
     },
     {
      "x": 2,
      "y": 0.6,
      "z": 0,
      "r": 0.35,
      "color": "#f97316",
      "label": "Katze"
     },
     {
      "x": 2,
      "y": -0.6,
      "z": 0,
      "r": 0.35,
      "color": "#f97316",
      "label": "Hund"
     }
    ],
    "bonds": [
     [
      0,
      3
     ],
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
      3
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
      3
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
      7
     ],
     [
      3,
      8
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
   },
   "caption": "Grün: Eingabeneuronen (z. B. Pixel). Violett: versteckte Schicht. Orange: Ausgaben (Katze oder Hund). Jede Verbindung hat ein Gewicht, das beim Training angepasst wird."
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: wie eine Maschine lernt",
   "questions": [
    {
     "type": "mc",
     "q": "Ein Modell, das aus E-Mails lernt, die bereits als „Spam / kein Spam“ etikettiert sind, nutzt das ___-Lernen.",
     "options": [
      "überwachte",
      "unüberwachte",
      "durch Verstärkung"
     ],
     "answer": 0,
     "explain": "Die Beispiele tragen das richtige Etikett: überwacht."
    },
    {
     "type": "num",
     "q": "Ein Neuron hat die Eingaben 1 und 1 und die Gewichte 2 und −5. Wie groß ist die gewichtete Summe?",
     "answer": -3,
     "tol": 0,
     "explain": "1×2 + 1×(−5) = 2 − 5 = −3."
    },
    {
     "type": "tf",
     "q": "Die Testdaten dienen dazu, das Modell an Beispielen zu prüfen, die es nie gesehen hat.",
     "answer": true,
     "explain": "Würde man mit den Trainingsdaten prüfen, könnte das Modell nur „auswendig lernen“ und nicht verallgemeinern."
    }
   ]
  },
  {
   "type": "text",
   "title": "4. Generative KI und Chatbots",
   "html": "<p>Die <b>generative KI</b> erzeugt neue Inhalte: Texte, Bilder, Musik, Videos. Chatbots, wie du sie kennst, beruhen auf <b>großen Sprachmodellen</b> (LLM, <i>Large Language Models</i>).</p>\n<p>Ein LLM wurde auf riesigen Textmengen trainiert, um eine einzige Sache zu tun, dafür aber sehr gut: <b>das nächste Wort (oder Wortteil) vorherzusagen</b>. Wiederholt man diese Vorhersage viele Male, entstehen ganze Sätze.</p>\n<p>Wichtige Folgen:</p>\n<ul>\n<li>das Modell <b>„weiß“ nicht wie ein Mensch</b>: Es erzeugt den wahrscheinlichsten Text, der meistens korrekt ist, <b>erfindet aber manchmal</b> Fakten, Daten oder Quellen überzeugend (man nennt das <b>Halluzinationen</b>);</li>\n<li>die Antworten hängen davon ab, wie du die Frage stellst (der <b>Prompt</b>);</li>\n<li>die Informationen müssen immer an verlässlichen Quellen <b>überprüft</b> werden.</li>\n</ul>"
  },
  {
   "type": "text",
   "title": "5. Risiken und Regeln",
   "html": "<ul>\n<li><b>Vorurteile (Bias)</b>: Wenn die Daten unausgewogen sind, wird es auch das Modell sein. Ein System, das fast nur mit Gesichtern eines bestimmten Typs trainiert wurde, erkennt andere schlechter.</li>\n<li><b>Fehler und Halluzinationen</b>: Die KI kann mit großer Sicherheit falsch liegen.</li>\n<li><b>Datenschutz</b>: Fotos, Stimme, Nachrichten und Standort sind <b>personenbezogene Daten</b>. In Europa schützt sie die <b>DSGVO</b> (Datenschutz-Grundverordnung, seit 2018 in Kraft).</li>\n<li><b>Deepfakes und Desinformation</b>: falsche, aber realistische Bilder, Audios und Videos.</li>\n<li><b>Energie und Umwelt</b>: Das Trainieren und Nutzen großer Modelle braucht Rechenzentren, die viel Strom und Wasser zur Kühlung verbrauchen.</li>\n<li><b>Arbeit und Lernen</b>: Die KI kann helfen, aber wenn sie deine Hausaufgaben übernimmt … lernst du selbst nichts!</li>\n</ul>\n<p>Die Europäische Union hat 2024 den <b>AI Act</b> verabschiedet, das weltweit erste große Gesetz zur KI: Es teilt die Systeme nach <b>Risikostufe</b> ein und verbietet die inakzeptablen (zum Beispiel ein „Sozialpunktesystem“ für Bürger). 2025 hat auch Italien ein eigenes Gesetz zur KI verabschiedet, das unter anderem die <b>Zustimmung der Eltern</b> verlangt, wenn Minderjährige unter 14 Jahren sie nutzen.</p>\n<p><b>Chancen</b>: frühere medizinische Diagnosen, sofortige Übersetzungen, Hilfe für Menschen mit Behinderungen (Vorlesen von Texten für Blinde, automatische Untertitel), Wettervorhersagen, die Entdeckung neuer Medikamente und Materialien.</p>"
  },
  {
   "type": "widget",
   "title": "Spiel: Risiko oder Chance?",
   "widget": "classify",
   "options": {
    "groups": [
     "Chance 🌱",
     "Risiko ⚠️"
    ],
    "items": [
     [
      "🩺 Tumore auf Röntgenbildern früher finden als der Arzt",
      0
     ],
     [
      "🔊 Einem blinden Menschen einen Text laut vorlesen",
      0
     ],
     [
      "🌍 Ein Gespräch in Echtzeit übersetzen",
      0
     ],
     [
      "💊 Neue Moleküle für Medikamente entdecken",
      0
     ],
     [
      "🎭 Gefälschtes Video eines Politikers, der nie Gesagtes sagt",
      1
     ],
     [
      "📸 Fotos von Personen ohne deren Erlaubnis verwenden",
      1
     ],
     [
      "⚖️ Bewerber mit Daten voller Vorurteile auswählen",
      1
     ],
     [
      "📝 Eine von der KI geschriebene Hausaufgabe abschreiben, ohne sie zu verstehen",
      1
     ]
    ]
   },
   "caption": "Dasselbe Werkzeug kann guten oder schlechten Zwecken dienen: Entscheidend ist, wie wir es benutzen."
  },
  {
   "type": "example",
   "title": "Praktisches Beispiel: der Spam-Filter",
   "html": "<p>Dein E-Mail-Dienst erhält Millionen Nachrichten. Um den Filter zu trainieren:</p>\n<ol>\n<li><b>Daten</b>: viele E-Mails, die von Nutzern bereits als „Spam“ oder „kein Spam“ markiert wurden.</li>\n<li><b>Merkmale</b> (features): Wörter wie „GRATIS“, „du hast gewonnen“, seltsame Links, ein unbekannter Absender …</li>\n<li><b>Training</b>: Das Modell lernt, wie viel Gewicht jedes Merkmal hat.</li>\n<li><b>Test</b>: Von 1000 neuen E-Mails sortiert es 980 richtig ➜ <b>Genauigkeit</b> = 980 ÷ 1000 = <b>98 %</b>.</li>\n</ol>\n<p>Wenn du „Als Spam melden“ drückst, lieferst du ein neues etikettiertes Beispiel: Auch du trainierst das Modell!</p>"
  },
  {
   "type": "example",
   "title": "Praktisches Beispiel: die Videovorschläge",
   "html": "<p>Videoplattformen erfassen, was du ansiehst, wie lange, und was du überspringst. Mit <b>unüberwachtem</b> Lernen gruppieren sie Nutzer mit ähnlichem Geschmack; dann schlagen sie dir vor, was den „Ähnlichen“ gefallen hat.</p>\n<p>Die positive Seite: Du entdeckst interessante Inhalte. Das Risiko: die <b>Filterblase</b> (<i>filter bubble</i>), also immer dieselben Ideen zu sehen, und die Zeit, die unbemerkt vergeht. Das Ziel des Systems ist, dich so lange wie möglich dranzuhalten: Denk daran!</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du… der Begriff „künstliche Intelligenz“ hat ein Geburtsdatum?",
   "html": "<p>Im Jahr <b>1950</b> fragte sich der englische Mathematiker <b>Alan Turing</b>: „Können Maschinen denken?“, und schlug ein Spiel vor, das später <b>Turing-Test</b> genannt wurde. Den Begriff <b>„artificial intelligence“</b> verwendete <b>John McCarthy</b> für ein Sommerseminar am Dartmouth College (USA) im Jahr <b>1956</b>. 1958 baute Frank Rosenblatt das <b>Perzeptron</b>, das erste künstliche Neuron, das lernen konnte.</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du… Maschinen haben die Weltmeister besiegt?",
   "html": "<p>Im Jahr <b>1997</b> besiegte der Computer <b>Deep Blue</b> von IBM den Schachweltmeister <b>Garri Kasparow</b>, allerdings vor allem durch reine Rechenkraft („Brute Force“). Im Jahr <b>2016</b> schlug <b>AlphaGo</b> von DeepMind den Champion <b>Lee Sedol</b> im Spiel <b>Go</b>, einem Spiel mit mehr möglichen Stellungen als Atome im beobachtbaren Universum: Dort brauchte man neuronale Netze. Im November <b>2022</b> machte die Veröffentlichung von ChatGPT Chatbots innerhalb weniger Monate Hunderten Millionen Menschen bekannt.</p>"
  },
  {
   "type": "widget",
   "title": "Die Geschichte der KI",
   "widget": "timeline",
   "options": {
    "events": [
     {
      "year": 1950,
      "label": "Turing: „Können Maschinen denken?“",
      "icon": "🧠"
     },
     {
      "year": 1956,
      "label": "Dartmouth: der Begriff „KI“ entsteht",
      "icon": "🏫"
     },
     {
      "year": 1958,
      "label": "Rosenblatts Perzeptron",
      "icon": "🔘"
     },
     {
      "year": 1997,
      "label": "Deep Blue schlägt Kasparow im Schach",
      "icon": "♟️"
     },
     {
      "year": 2012,
      "label": "Tiefe Netze erkennen Bilder",
      "icon": "🖼️"
     },
     {
      "year": 2016,
      "label": "AlphaGo schlägt Lee Sedol im Go",
      "icon": "⚫"
     },
     {
      "year": 2022,
      "label": "Chatbots werden zum Massenphänomen",
      "icon": "💬"
     },
     {
      "year": 2024,
      "label": "EU: AI Act verabschiedet",
      "icon": "⚖️"
     }
    ],
    "unit": "Jahre"
   },
   "caption": "Siebzig Jahre Geschichte: lange Phasen des Wartens („KI-Winter“) und plötzliche Beschleunigungen."
  },
  {
   "type": "remember",
   "title": "Zum Merken: die KI mit Verstand nutzen",
   "html": "<ul>\n<li>Die KI lernt <b>aus Daten</b>: Wenn die Daten falsch oder unvollständig sind, ist sie es auch.</li>\n<li>Sie gibt <b>wahrscheinliche</b> Antworten, keine sicheren: <b>Überprüfe</b> immer an verlässlichen Quellen.</li>\n<li><b>Gib keine persönlichen Daten</b> (deine oder die anderer) in Chatbots ein.</li>\n<li>Nutze sie, um zu verstehen, nicht um abzuschreiben; und sag, wenn du sie benutzt hast.</li>\n<li>Wichtige Entscheidungen bleiben bei den <b>Menschen</b>.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Weitere Wege, es zu verstehen",
   "intro": "Wie lernt eine Maschine eigentlich „lernen“? Hier sind vier verschiedene Wege.",
   "tabs": [
    {
     "label": "🍳 Der Koch und das Rezept",
     "html": "<p><b>Klassische Programmierung</b>: Ich gebe dir das <b>Rezept</b> (Regeln) und die Zutaten (Daten) ➜ du backst den Kuchen (Antwort).</p>\n<p><b>Machine Learning</b>: Ich gebe dir <b>viele schon gebackene Kuchen</b> mit ihren Zutaten, und du musst <b>das Rezept erraten</b>. Du probierst, irrst dich, korrigierst … Am Ende ist das rekonstruierte „Rezept“ das <b>Modell</b>.</p>"
    },
    {
     "label": "🎛️ Die Drehknöpfe",
     "html": "<p>Stell dir ein Mischpult mit Tausenden <b>Drehknöpfen</b> (den Gewichten) vor. Du zeigst der Maschine ein Katzenfoto: Sie antwortet „Hund“. Fehler! Also drehst du jeden Knopf <b>ein kleines bisschen</b> in die Richtung, die den Fehler verkleinert hätte. Du wiederholst das mit Millionen Fotos. Am Ende stehen die Knöpfe richtig, um Katzen zu erkennen.</p>\n<p>Diese Methode, die Knöpfe anzupassen, heißt <b>Gradientenabstieg</b>: wie wenn man im Nebel von einem Berg hinabsteigt und immer einen Schritt nach unten macht.</p>",
     "svg": "<svg viewBox=\"0 0 600 220\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"220\" fill=\"#0f172a\"/>\n<g fill=\"#334155\" stroke=\"#94a3b8\" stroke-width=\"2\">\n<circle cx=\"80\" cy=\"90\" r=\"34\"/><circle cx=\"190\" cy=\"90\" r=\"34\"/><circle cx=\"300\" cy=\"90\" r=\"34\"/><circle cx=\"410\" cy=\"90\" r=\"34\"/><circle cx=\"520\" cy=\"90\" r=\"34\"/>\n</g>\n<g stroke=\"#facc15\" stroke-width=\"5\" stroke-linecap=\"round\">\n<line x1=\"80\" y1=\"90\" x2=\"100\" y2=\"65\"/><line x1=\"190\" y1=\"90\" x2=\"165\" y2=\"70\"/><line x1=\"300\" y1=\"90\" x2=\"300\" y2=\"58\"/><line x1=\"410\" y1=\"90\" x2=\"440\" y2=\"100\"/><line x1=\"520\" y1=\"90\" x2=\"500\" y2=\"62\"/>\n</g>\n<g font-size=\"15\" fill=\"#e2e8f0\" text-anchor=\"middle\"><text x=\"80\" y=\"150\">Gewicht 1</text><text x=\"190\" y=\"150\">Gewicht 2</text><text x=\"300\" y=\"150\">Gewicht 3</text><text x=\"410\" y=\"150\">Gewicht 4</text><text x=\"520\" y=\"150\">…</text></g>\n<text x=\"300\" y=\"195\" font-size=\"16\" fill=\"#facc15\" text-anchor=\"middle\" font-weight=\"bold\">jeder Fehler ➜ kleine Korrektur aller Drehknöpfe</text>\n</svg>"
    },
    {
     "label": "👶 Wie ein Kind",
     "html": "<p>Ein kleines Kind sieht einen Hund und sagt „wau“. Dann sieht es eine Katze und sagt ebenfalls „wau“: Die Mama korrigiert es, „nein, das ist eine <b>Katze</b>“. Nach vielen Beispielen lernt es den Unterschied. Das ist das <b>überwachte</b> Lernen.</p>\n<p>Aber achte auf die Unterschiede: Einem Kind reichen wenige Beispiele; einem neuronalen Netz braucht man Tausende oder Millionen. Und das Kind <b>versteht</b>, was ein Tier ist; das Netz findet nur Regelmäßigkeiten in Zahlen.</p>"
    },
    {
     "label": "🃏 Karteikarten der Begriffe",
     "html": "<p>Wiederhole die Schlüsselwörter der KI (viele sind englisch).</p>",
     "widget": "flashcards",
     "options": {
      "cards": [
       {
        "front": "dataset",
        "back": "Datensatz: Datenmenge, mit der trainiert wird"
       },
       {
        "front": "training",
        "back": "Training: das Modell passt die Gewichte an"
       },
       {
        "front": "Modell",
        "back": "das Ergebnis des Trainings: die gefundenen „Regeln“"
       },
       {
        "front": "bias",
        "back": "Vorurteil in den Daten, das das Modell lernt"
       },
       {
        "front": "prompt",
        "back": "die Anfrage, die du an den Chatbot schreibst"
       },
       {
        "front": "Halluzination",
        "back": "erfundene, aber überzeugende Antwort"
       },
       {
        "front": "deepfake",
        "back": "gefälschtes Video oder Audio, mit KI erstellt"
       }
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Landkarte: die künstliche Intelligenz",
   "nodes": [
    {
     "id": "dati",
     "label": "Daten",
     "x": 15,
     "y": 10,
     "color": "#a855f7",
     "html": "Zahlen, Texte, Bilder, Töne: der „Rohstoff“ der KI.",
     "why": "Mit dem Internet, den Smartphones und den Sensoren ist die Menge digitaler Daten seit den 2000er-Jahren explodiert: Ohne diese Fülle hätten neuronale Netze nicht genug Beispiele."
    },
    {
     "id": "ml",
     "label": "Machine Learning",
     "x": 50,
     "y": 10,
     "color": "#7c3aed",
     "html": "Regeln aus Beispielen lernen, statt sie zu schreiben.",
     "why": "Den Begriff verwendete <b>Arthur Samuel</b> 1959 für ein Programm, das lernte, Dame zu spielen, indem es Partie für Partie besser wurde."
    },
    {
     "id": "calc",
     "label": "Rechenleistung",
     "x": 85,
     "y": 10,
     "color": "#0ea5e9",
     "html": "Grafikprozessoren (GPU) und Rechenzentren.",
     "why": "Die GPUs, ursprünglich für Videospiele entwickelt, führen Tausende Multiplikationen parallel aus: genau das, was neuronale Netze brauchen. Seit 2012 sind sie das wichtigste Werkzeug der KI."
    },
    {
     "id": "sup",
     "label": "Überwacht",
     "x": 15,
     "y": 40,
     "color": "#22c55e",
     "html": "Beispiele mit dem richtigen Etikett.",
     "why": "Es ist die meistgenutzte Methode, weil sich der Fehler leicht messen lässt: Man vergleicht die Antwort des Modells mit dem Etikett."
    },
    {
     "id": "nonsup",
     "label": "Unüberwacht",
     "x": 40,
     "y": 40,
     "color": "#16a34a",
     "html": "Findet Gruppen in Daten ohne Etikett.",
     "why": "Etikettieren kostet Zeit und menschliche Arbeit: Viele Daten haben keine Etiketten, und Clustering-Algorithmen nutzen sie trotzdem."
    },
    {
     "id": "rinf",
     "label": "Durch Verstärkung",
     "x": 65,
     "y": 40,
     "color": "#15803d",
     "html": "Belohnungen und Strafen.",
     "why": "Es ist inspiriert von psychologischen Experimenten zur Konditionierung von Tieren (wie denen von B. F. Skinner). AlphaGo nutzte es, indem es Millionen Partien gegen sich selbst spielte."
    },
    {
     "id": "rete",
     "label": "Neuronale Netze",
     "x": 85,
     "y": 62,
     "color": "#f97316",
     "html": "Schichten künstlicher Neuronen mit einstellbaren Gewichten.",
     "why": "Inspiriert vom biologischen Neuron, das McCulloch und Pitts (1943) beschrieben haben, und vom Perzeptron von Rosenblatt (1958). Die Methode, Netze mit vielen Schichten zu trainieren (Backpropagation), wurde 1986 berühmt."
    },
    {
     "id": "gen",
     "label": "Generative KI",
     "x": 55,
     "y": 75,
     "color": "#ef4444",
     "html": "Erzeugt neue Texte, Bilder, Töne.",
     "why": "2017 veröffentlichten Forscher von Google die Architektur <b>Transformer</b>, die ganze Sätze parallel analysieren kann: Sie ist die Grundlage der großen Sprachmodelle."
    },
    {
     "id": "etica",
     "label": "Risiken und Regeln",
     "x": 20,
     "y": 85,
     "color": "#64748b",
     "html": "Vorurteile, Datenschutz, Deepfakes, Energie; DSGVO und AI Act.",
     "why": "Je mehr die KI wichtige Dinge entscheidet (Kredite, Arbeit, Gesundheit), desto mehr Regeln braucht man. Die EU hat einen Ansatz gewählt, der auf der <b>Risikostufe</b> beruht: Je höher das Risiko, desto strenger die Kontrollen."
    }
   ],
   "edges": [
    [
     "dati",
     "ml",
     "speisen"
    ],
    [
     "calc",
     "ml",
     "macht möglich"
    ],
    [
     "ml",
     "sup",
     "Typ"
    ],
    [
     "ml",
     "nonsup",
     "Typ"
    ],
    [
     "ml",
     "rinf",
     "Typ"
    ],
    [
     "ml",
     "rete",
     "Werkzeug"
    ],
    [
     "rete",
     "gen",
     "ermöglicht"
    ],
    [
     "dati",
     "etica",
     "Datenschutz"
    ],
    [
     "gen",
     "etica",
     "Deepfakes"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Risiken und verantwortungsvoller Umgang",
   "questions": [
    {
     "type": "mc",
     "q": "Was ist eine „Halluzination“ eines Chatbots?",
     "options": [
      "Ein Verbindungsfehler",
      "Eine erfundene, aber überzeugend geschriebene Antwort",
      "Ein farbiges Bild"
     ],
     "answer": 1,
     "explain": "Das Modell erzeugt wahrscheinlichen Text, der manchmal nicht stimmt."
    },
    {
     "type": "tf",
     "q": "Wenn die Trainingsdaten Vorurteile enthalten, kann das Modell sie wiederholen.",
     "answer": true,
     "explain": "Das Modell lernt, was es in den Daten findet, auch Vorurteile (Bias)."
    },
    {
     "type": "mc",
     "q": "Welche europäische Regel schützt personenbezogene Daten seit 2018?",
     "options": [
      "AI Act",
      "DSGVO",
      "Wi-Fi-Gesetz"
     ],
     "answer": 1,
     "explain": "Die DSGVO, die Datenschutz-Grundverordnung."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Datenwert",
   "d": "Roher Wert, der mit einer Bedeutung zur Information wird."
  },
  {
   "t": "Machine Learning",
   "d": "Maschinelles Lernen: der Computer leitet Regeln aus Beispielen ab."
  },
  {
   "t": "Modell",
   "d": "Ergebnis des Trainings, mit dem Vorhersagen für neue Daten gemacht werden."
  },
  {
   "t": "Neuronales Netz",
   "d": "Gruppe künstlicher Neuronen, in Schichten organisiert und durch Gewichte verbunden."
  },
  {
   "t": "Gewicht",
   "d": "Zahl, die angibt, wie wichtig eine Verbindung in einem neuronalen Netz ist."
  },
  {
   "t": "Deep Learning",
   "d": "Lernen mit neuronalen Netzen aus vielen Schichten."
  },
  {
   "t": "LLM",
   "d": "Großes Sprachmodell: sagt das nächste Wort in einem Text voraus."
  },
  {
   "t": "Bias",
   "d": "Vorurteil oder Ungleichgewicht in den Daten, das das Modell lernt."
  },
  {
   "t": "Deepfake",
   "d": "Mit KI erstelltes gefälschtes Bild, Audio oder Video."
  },
  {
   "t": "AI Act",
   "d": "EU-Gesetz zur KI (2024), das auf Risikostufen beruht."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Was liefern wir dem Computer beim Machine Learning?",
    "options": [
     "Nur die Regeln",
     "Viele Beispiele (Daten), oft mit den richtigen Antworten",
     "Nur Strom"
    ],
    "answer": 1,
    "explain": "Der Computer leitet die Regeln aus den Beispielen ab."
   },
   {
    "type": "mc",
    "q": "Ein Roboter lernt zu laufen und erhält eine Belohnung, wenn er nicht fällt. Er nutzt das Lernen…",
    "options": [
     "überwacht",
     "unüberwacht",
     "durch Verstärkung"
    ],
    "answer": 2,
    "explain": "Belohnungen und Strafen: Lernen durch Verstärkung."
   },
   {
    "type": "num",
    "q": "Ein Modell klassifiziert 450 von 500 Fotos richtig. Wie hoch ist die Genauigkeit in Prozent?",
    "answer": 90,
    "tol": 0,
    "unit": "%",
    "explain": "450 ÷ 500 = 0,9 = 90 %."
   },
   {
    "type": "num",
    "q": "Neuron: Eingaben 1, 0, 1 mit den Gewichten 3, 5, −1. Wie groß ist die gewichtete Summe?",
    "answer": 2,
    "tol": 0,
    "explain": "1×3 + 0×5 + 1×(−1) = 3 + 0 − 1 = 2."
   },
   {
    "type": "tf",
    "q": "Ein Chatbot sagt immer die Wahrheit, weil er das ganze Internet gelesen hat.",
    "answer": false,
    "explain": "Er kann Fehler machen und „halluzinieren“: Man muss überprüfen."
   },
   {
    "type": "tf",
    "q": "Deep Learning nutzt neuronale Netze mit vielen Schichten.",
    "answer": true,
    "explain": "„Deep“ = tief: viele versteckte Schichten."
   },
   {
    "type": "mc",
    "q": "Wozu dienen die Testdaten?",
    "options": [
     "Zum Trainieren des Modells",
     "Zur Prüfung des Modells an nie gesehenen Beispielen",
     "Zum Verzieren des Datensatzes"
    ],
    "answer": 1,
    "explain": "Man misst, wie gut das Modell verallgemeinert."
   },
   {
    "type": "text",
    "q": "Wie heißt der englische Mathematiker, der sich 1950 fragte, ob Maschinen denken können?",
    "answer": [
     "turing",
     "alan turing"
    ],
    "explain": "Alan Turing schlug das „Imitationsspiel“ vor, bekannt als Turing-Test."
   },
   {
    "type": "order",
    "q": "Bring die Phasen des maschinellen Lernens in die richtige Reihenfolge.",
    "items": [
     "Daten sammeln und bereinigen",
     "Das Modell trainieren",
     "Es mit Testdaten prüfen",
     "Es mit neuen Daten einsetzen"
    ],
    "explain": "Daten ➜ Training ➜ Test ➜ Einsatz."
   },
   {
    "type": "mc",
    "q": "Welches Verhalten ist beim Chatbot richtig?",
    "options": [
     "Adressen und Telefonnummern von Mitschülern eingeben",
     "Ihn nutzen, um ein Thema zu verstehen, und dann im Buch überprüfen",
     "Den erzeugten Text abgeben, als wäre er von dir"
    ],
    "answer": 1,
    "explain": "Verantwortungsvoller Umgang: zum Verstehen nutzen, überprüfen, ohne persönliche Daten."
   },
   {
    "type": "mc",
    "q": "Warum kann eine Gesichtserkennung bei manchen Personen schlechter funktionieren?",
    "options": [
     "Weil die Trainingsdaten unausgewogen waren",
     "Weil diese Personen sich bewegen",
     "Weil der Computer müde ist"
    ],
    "answer": 0,
    "explain": "Das ist ein Fall von Bias in den Daten."
   },
   {
    "type": "tf",
    "q": "Der europäische AI Act ordnet KI-Systeme nach Risikostufen ein.",
    "answer": true,
    "explain": "Inakzeptables Risiko (verboten), hohes, begrenztes und minimales Risiko."
   }
  ],
  "gen": [
   [
    "percent",
    2
   ]
  ]
 }
});
