TOPIC("de", {
 "id": "p3-geo-mare-coste",
 "title": "Das Meer und die Küsten",
 "intro": "Wo das Land auf das Meer trifft, entstehen viele verschiedene Formen: Inseln, Golfe, Halbinseln, Meerengen … Sie haben ein bisschen schwierige Namen, aber heute lernen wir, sie zu erkennen, indem wir <b>eine Landschaft in 3D drehen</b> und sie auf der Karte Italiens und der Welt suchen.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "Was ist die Küste?",
   "html": "<p>Die <b>Küste</b> ist der Landstreifen, der das Meer berührt. Die genaue Linie, an der das Wasser auf das Land trifft, heißt <b>Küstenlinie</b>.</p>\n<ul>\n<li><b>Steilküste</b> (felsig): Das Land endet mit steilen Wänden, den <b>Klippen</b>. Das Meer ist sofort tief. Beispiel: die Cinque Terre in Ligurien, die Amalfiküste.</li>\n<li><b>Flachküste</b> (sandig): Das Land fällt ganz allmählich ins Meer ab und bildet lange <b>Strände</b>. Beispiel: die Riviera der Romagna.</li>\n</ul>\n<p>Das Meer arbeitet ständig an der Küste: Die <b>Wellen</b> tragen die Felsen ab (Erosion) und bringen Sand von einem Ort zum anderen (Ablagerung).</p>"
  },
  {
   "type": "3d",
   "title": "Die Küstenlandschaft in 3D",
   "scene": "terrain",
   "caption": "Dreh die Landschaft und tippe auf jede Beschriftung: Der Teil leuchtet auf. Versuche, alle 13 zu finden!",
   "options": {
    "features": {
     "sea": {
      "label": "Meer",
      "html": "Große Fläche aus Salzwasser. Italien wird vom Mittelmeer umspült."
     },
     "coast": {
      "label": "Küste",
      "html": "Der Landstreifen, der ans Meer grenzt. Sie kann <b>hoch</b> (Klippen) oder <b>flach</b> (Strände) sein."
     },
     "beach": {
      "label": "Strand",
      "html": "Abschnitt einer Flachküste, der mit Sand oder Kieseln bedeckt ist, die von Wellen und Flüssen herangebracht wurden."
     },
     "island": {
      "label": "Insel",
      "html": "Land, das <b>von allen Seiten</b> von Wasser umgeben ist. Die größte Italiens (und des Mittelmeers) ist <b>Sizilien</b>."
     },
     "archipelago": {
      "label": "Archipel",
      "html": "Eine <b>Gruppe von Inseln</b>, die nahe beieinander liegen. Beispiele: die <b>Liparischen Inseln</b>, der Toskanische Archipel, La Maddalena."
     },
     "peninsula": {
      "label": "Halbinsel",
      "html": "Land, das <b>auf drei Seiten</b> von Wasser umgeben und auf der vierten mit dem Festland verbunden ist. <b>Italien</b> ist eine Halbinsel in Form eines Stiefels!"
     },
     "cape": {
      "label": "Kap (Vorgebirge)",
      "html": "Eine Landspitze, die ins Meer hineinragt. Wenn sie hoch und felsig ist, heißt sie auch <b>Vorgebirge</b>, wie der Gargano (der „Sporn“ des Stiefels)."
     },
     "gulf": {
      "label": "Golf",
      "html": "Eine <b>große</b> Einbuchtung: Das Meer dringt ins Land ein und bildet einen weiten Bogen. Beispiel: der <b>Golf von Neapel</b>."
     },
     "bay": {
      "label": "Bucht",
      "html": "Eine <b>kleine</b> Einbuchtung, wie ein Golf im Miniaturformat, oft windgeschützt: ausgezeichnet für Boote."
     },
     "isthmus": {
      "label": "Landenge (Isthmus)",
      "html": "Ein <b>schmaler Landstreifen</b>, der zwei größere Länder verbindet und zwei Meere trennt. Beispiele: der Isthmus von <b>Korinth</b> in Griechenland, der Isthmus von <b>Panama</b>."
     },
     "strait": {
      "label": "Meerenge",
      "html": "Ein <b>schmaler Meeresdurchgang</b> zwischen zwei Ländern, der zwei Meere verbindet. Das Gegenteil der Landenge! Beispiel: die <b>Straße von Messina</b> zwischen Sizilien und Kalabrien."
     },
     "lagoon": {
      "label": "Lagune",
      "html": "Eine flache Fläche aus Salzwasser, vom Meer durch Sandstreifen (Nehrungen) getrennt. Beispiel: die <b>Lagune von Venedig</b>."
     },
     "delta": {
      "label": "Delta",
      "html": "Die Mündung eines Flusses, die sich in viele Arme teilt, in Form eines Dreiecks, weil der Fluss viel Schutt ablagert. Der Name kommt vom griechischen Buchstaben Δ. Beispiel: das <b>Podelta</b>."
     }
    }
   }
  },
  {
   "type": "svg",
   "title": "Insel, Halbinsel, Landenge, Meerenge: die Unterschiede",
   "caption": "Schau genau hin, wo Wasser (blau) und wo Land (grün) ist.",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"0\" y=\"0\" width=\"600\" height=\"300\" fill=\"#7dd3fc\"/>\n<g>\n<ellipse cx=\"80\" cy=\"120\" rx=\"50\" ry=\"35\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"2\"/>\n<text x=\"80\" y=\"200\" font-size=\"17\" text-anchor=\"middle\" fill=\"#0c4a6e\" font-weight=\"bold\">INSEL</text>\n<text x=\"80\" y=\"222\" font-size=\"13\" text-anchor=\"middle\" fill=\"#0c4a6e\">Wasser ringsherum</text>\n</g>\n<g>\n<rect x=\"160\" y=\"20\" width=\"130\" height=\"50\" fill=\"#4ade80\"/>\n<path d=\"M200,70 L250,70 L240,150 L210,150 Z\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"2\"/>\n<text x=\"225\" y=\"200\" font-size=\"17\" text-anchor=\"middle\" fill=\"#0c4a6e\" font-weight=\"bold\">HALBINSEL</text>\n<text x=\"225\" y=\"222\" font-size=\"13\" text-anchor=\"middle\" fill=\"#0c4a6e\">Wasser auf 3 Seiten</text>\n</g>\n<g>\n<circle cx=\"345\" cy=\"70\" r=\"35\" fill=\"#4ade80\"/>\n<rect x=\"337\" y=\"100\" width=\"16\" height=\"45\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"2\"/>\n<circle cx=\"345\" cy=\"170\" r=\"30\" fill=\"#4ade80\"/>\n<text x=\"345\" y=\"235\" font-size=\"17\" text-anchor=\"middle\" fill=\"#0c4a6e\" font-weight=\"bold\">LANDENGE</text>\n<text x=\"345\" y=\"257\" font-size=\"13\" text-anchor=\"middle\" fill=\"#0c4a6e\">schmales Land zwischen zwei Meeren</text>\n</g>\n<g>\n<rect x=\"430\" y=\"40\" width=\"65\" height=\"130\" fill=\"#4ade80\"/>\n<rect x=\"520\" y=\"40\" width=\"65\" height=\"130\" fill=\"#4ade80\"/>\n<rect x=\"495\" y=\"40\" width=\"25\" height=\"130\" fill=\"#0284c7\"/>\n<text x=\"508\" y=\"200\" font-size=\"17\" text-anchor=\"middle\" fill=\"#0c4a6e\" font-weight=\"bold\">MEERENGE</text>\n<text x=\"508\" y=\"222\" font-size=\"13\" text-anchor=\"middle\" fill=\"#0c4a6e\">schmales Meer zwischen zwei Ländern</text>\n</g>\n</svg>"
  },
  {
   "type": "remember",
   "title": "Paare von „Gegensätzen“",
   "html": "<ul>\n<li><b>Landenge ↔ Meerenge</b>: Die Landenge ist schmales Land zwischen zwei Gewässern; die Meerenge ist schmales Wasser zwischen zwei Ländern.</li>\n<li><b>Kap ↔ Golf</b>: Das Kap ist Land, das ins Meer hineinragt; der Golf ist Meer, das ins Land eindringt.</li>\n<li><b>Insel ↔ See</b>: Die Insel ist Land, das von Wasser umgeben ist; der See ist Wasser, das von Land umgeben ist.</li>\n</ul>"
  },
  {
   "type": "example",
   "title": "Praxisbeispiel: Italien ist ein Katalog der Formen!",
   "html": "<p>Nimm eine Karte Italiens und suche:</p>\n<ul>\n<li>Die <b>Halbinsel</b>: ganz Italien in Form eines Stiefels.</li>\n<li>Die größten <b>Inseln</b>: <b>Sizilien</b> und <b>Sardinien</b>.</li>\n<li>Einen <b>Archipel</b>: die <b>Liparischen Inseln</b> (Lipari, Vulcano, Stromboli, Salina, Panarea, Filicudi, Alicudi).</li>\n<li>Einen <b>Golf</b>: Golf von Neapel, Golf von Tarent (unter dem Stiefel).</li>\n<li>Ein <b>Vorgebirge</b>: der Gargano, der „Sporn“.</li>\n<li>Eine <b>Meerenge</b>: die Straße von Messina, an der schmalsten Stelle nur etwa 3 km breit.</li>\n<li>Eine <b>Lagune</b>: die Lagune von Venedig. Ein <b>Delta</b>: das Podelta.</li>\n</ul>"
  },
  {
   "type": "3d",
   "title": "Finde die echten Beispiele auf dem Globus",
   "scene": "globe",
   "caption": "Dreh den Globus: Die orangefarbenen Punkte sind echte Beispiele für Inseln, Meerengen, Landengen, Golfe, Lagunen und Deltas.",
   "options": {
    "points": [
     {
      "lat": 37.6,
      "lon": 14,
      "label": "Sizilien (Insel)"
     },
     {
      "lat": 38.5,
      "lon": 14.95,
      "label": "Liparische Inseln (Archipel)"
     },
     {
      "lat": 42.5,
      "lon": 12.8,
      "label": "Italienische Halbinsel"
     },
     {
      "lat": 40.75,
      "lon": 14.2,
      "label": "Golf von Neapel"
     },
     {
      "lat": 38.2,
      "lon": 15.6,
      "label": "Straße von Messina"
     },
     {
      "lat": 41.8,
      "lon": 15.95,
      "label": "Gargano (Vorgebirge)"
     },
     {
      "lat": 45.4,
      "lon": 12.33,
      "label": "Lagune von Venedig"
     },
     {
      "lat": 44.95,
      "lon": 12.45,
      "label": "Podelta"
     },
     {
      "lat": 37.93,
      "lon": 22.98,
      "label": "Isthmus von Korinth"
     },
     {
      "lat": 9.1,
      "lon": -79.7,
      "label": "Isthmus von Panama"
     },
     {
      "lat": 35.95,
      "lon": -5.6,
      "label": "Straße von Gibraltar"
     }
    ]
   }
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Insel oder Halbinsel?",
   "questions": [
    {
     "type": "mc",
     "q": "Ein Land, das von allen Seiten von Wasser umgeben ist, ist …",
     "options": [
      "eine Halbinsel",
      "eine Insel",
      "eine Landenge"
     ],
     "answer": 1,
     "explain": "Die Insel hat Wasser ringsherum."
    },
    {
     "type": "mc",
     "q": "Eine Gruppe von Inseln, die nahe beieinander liegen, heißt …",
     "options": [
      "Archipel",
      "Golf",
      "Delta"
     ],
     "answer": 0,
     "explain": "Archipel, wie die Liparischen Inseln."
    },
    {
     "type": "tf",
     "q": "Italien ist eine Halbinsel.",
     "answer": true,
     "explain": "Es ist auf drei Seiten vom Meer umgeben und im Norden mit Europa verbunden."
    }
   ]
  },
  {
   "type": "widget",
   "title": "Spiel: Ordne die Form der Definition zu",
   "widget": "match",
   "options": {
    "pairs": [
     [
      "Insel",
      "Land mit Wasser ringsherum"
     ],
     [
      "Halbinsel",
      "Land mit Wasser auf drei Seiten"
     ],
     [
      "Landenge",
      "Landstreifen zwischen zwei Meeren"
     ],
     [
      "Meerenge",
      "Meeresarm zwischen zwei Ländern"
     ],
     [
      "Golf",
      "Große Einbuchtung des Meeres"
     ],
     [
      "Kap",
      "Landspitze im Meer"
     ],
     [
      "Lagune",
      "Flaches Wasser, vom Meer durch Nehrungen getrennt"
     ],
     [
      "Delta",
      "Flussmündung mit vielen Armen"
     ]
    ]
   }
  },
  {
   "type": "widget",
   "title": "Spiel: Land oder Wasser?",
   "widget": "classify",
   "caption": "Einige Formen sind „Landstücke“, andere „Wasserstücke“. Ordne sie der richtigen Gruppe zu.",
   "options": {
    "groups": [
     "🟩 Besteht aus Land",
     "🟦 Besteht aus Wasser"
    ],
    "items": [
     [
      "Insel",
      0
     ],
     [
      "Halbinsel",
      0
     ],
     [
      "Landenge",
      0
     ],
     [
      "Kap",
      0
     ],
     [
      "Vorgebirge",
      0
     ],
     [
      "Meerenge",
      1
     ],
     [
      "Golf",
      1
     ],
     [
      "Bucht",
      1
     ],
     [
      "Lagune",
      1
     ],
     [
      "See",
      1
     ]
    ]
   }
  },
  {
   "type": "curiosity",
   "title": "Wusstest du schon … dass in Venedig die Häuser auf Millionen von Pfählen stehen?",
   "html": "<p>Venedig ist auf mehr als 100 kleinen Inseln in der <b>Lagune</b> gebaut. Der Boden ist weicher Schlamm, deshalb haben die Venezianer <b>Millionen von Holzpfählen</b> dicht an dicht in den Grund gerammt und darüber die Häuser gebaut. Unter Wasser, ohne Luft, fault das Holz nicht: Manche Pfähle stehen dort seit mehr als tausend Jahren!</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du schon … dass die Liparischen Inseln Vulkane sind?",
   "html": "<p>Die Inseln des Archipels der <b>Liparischen Inseln</b> sind die Gipfel von Vulkanen, die aus dem Meer ragen. Der <b>Stromboli</b> ist seit Tausenden von Jahren aktiv und schleudert alle paar Minuten Lapilli aus: Die alten Seeleute nannten ihn „den Leuchtturm des Mittelmeers“, weil man ihn nachts von weitem leuchten sah.</p>"
  },
  {
   "type": "alternatives",
   "title": "Andere Wege, es zu verstehen",
   "intro": "Wenn du bei all diesen Wörtern durcheinanderkommst, probiere diese Tricks.",
   "tabs": [
    {
     "label": "🛁 In der Badewanne",
     "html": "<p>Fülle die Wanne (oder eine Schüssel) ein wenig und lege verschiedene Gegenstände hinein:</p>\n<ul>\n<li>Ein <b>Schwamm</b>, der weit weg vom Rand schwimmt: eine <b>Insel</b>.</li>\n<li>Viele kleine Schwämme nebeneinander: ein <b>Archipel</b>.</li>\n<li>Dein <b>Arm</b>, der sich auf den Rand stützt und ins Wasser ragt: eine <b>Halbinsel</b>; die Fingerspitzen sind das <b>Kap</b>.</li>\n<li>Der Wasserraum zwischen zwei gespreizten Fingern: eine <b>Meerenge</b>.</li>\n</ul>"
    },
    {
     "label": "🔤 Aus den Wörtern",
     "html": "<p>Viele Namen kommen aus dem Lateinischen und Griechischen und enthalten schon die Erklärung:</p>\n<ul>\n<li><b>Halbinsel</b> (italienisch <i>penisola</i>) = vom lateinischen <i>paene insula</i>, „<b>fast</b> eine Insel“.</li>\n<li><b>Archipel</b> = aus dem Griechischen, „Hauptmeer“: So hieß das Ägäische Meer, das voller Inseln ist.</li>\n<li><b>Delta</b> = der griechische Buchstabe <b>Δ</b>, Dreieck, wie die Form der Mündung.</li>\n<li><b>Kap</b> (italienisch <i>capo</i>) = „Kopf“: der Kopf des Landes, der ins Meer ragt.</li>\n</ul>"
    },
    {
     "label": "🗺️ Die Zeichnung von oben",
     "html": "<p>Zeichne von oben mit zwei Farben: <b>grün</b> das Land, <b>blau</b> das Wasser. Dann frag dich: <i>Wer umgibt wen?</i></p>\n<ul>\n<li>Grün, von Blau umgeben → Insel.</li>\n<li>Blau, von Grün umgeben → See.</li>\n<li>Dünner grüner Streifen → Landenge. Dünner blauer Streifen → Meerenge.</li>\n</ul>",
     "svg": "<svg viewBox=\"0 0 600 220\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"0\" y=\"0\" width=\"290\" height=\"220\" fill=\"#7dd3fc\"/>\n<ellipse cx=\"145\" cy=\"105\" rx=\"80\" ry=\"55\" fill=\"#4ade80\"/>\n<text x=\"145\" y=\"112\" font-size=\"18\" text-anchor=\"middle\" fill=\"#14532d\" font-weight=\"bold\">INSEL</text>\n<rect x=\"310\" y=\"0\" width=\"290\" height=\"220\" fill=\"#4ade80\"/>\n<ellipse cx=\"455\" cy=\"105\" rx=\"80\" ry=\"55\" fill=\"#38bdf8\"/>\n<text x=\"455\" y=\"112\" font-size=\"18\" text-anchor=\"middle\" fill=\"#0c4a6e\" font-weight=\"bold\">SEE</text>\n</svg>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Karte: Wie die Formen der Küste entstehen",
   "nodes": [
    {
     "id": "mare",
     "label": "Meer und Land",
     "x": 50,
     "y": 8,
     "color": "#0ea5e9",
     "html": "Wo sie sich treffen, entstehen die Küstenformen.",
     "why": "Die Küstenlinie steht nie still: Das Meer trägt sie ab oder verlängert sie, der Meeresspiegel steigt und fällt, die Flüsse bringen Schutt. Die Formen, die wir sehen, sind eine „Momentaufnahme“ dieser ständigen Arbeit."
    },
    {
     "id": "onde",
     "label": "Wellenerosion",
     "x": 18,
     "y": 35,
     "color": "#ef4444",
     "html": "Die Wellen tragen die Felsen ab.",
     "why": "Jede Welle trifft mit Kraft auf den Felsen und schleudert Sand und Steine wie kleine Hämmer. Weiche Gesteine werden schneller abgetragen als harte: So entstehen Golfe (wo das Gestein weich war) und Kaps (wo es hart war)."
    },
    {
     "id": "deposito",
     "label": "Ablagerung von Sand",
     "x": 50,
     "y": 35,
     "color": "#eab308",
     "html": "Flüsse und Strömungen bringen Sand und lassen ihn liegen.",
     "why": "Wenn das Wasser langsamer wird, kann es den Sand nicht mehr transportieren und lässt ihn fallen. So bilden sich Strände, Nehrungen, Lagunen und Deltas."
    },
    {
     "id": "livello",
     "label": "Meeresspiegel und Vulkane",
     "x": 82,
     "y": 35,
     "color": "#a855f7",
     "html": "Das Meer steigt und fällt, die Vulkane schaffen neues Land.",
     "why": "Während der letzten Eiszeit (vor etwa 20.000 Jahren) lag das Meer mehr als 100 Meter tiefer: Viele heutige Inseln waren Hügel, die mit dem Festland verbunden waren. Als das Eis schmolz, stieg das Meer und umschloss sie."
    },
    {
     "id": "golfo",
     "label": "Golfe und Kaps",
     "x": 12,
     "y": 68,
     "color": "#f97316",
     "html": "Einbuchtungen und Landspitzen.",
     "why": "Sie entstehen durch unterschiedliche Erosion: Weiche Gesteine weichen zurück (Golf), harte halten stand und ragen hervor (Kap)."
    },
    {
     "id": "spiaggia",
     "label": "Strände und Lagunen",
     "x": 40,
     "y": 68,
     "color": "#facc15",
     "html": "Flache, sandige Küsten.",
     "why": "Der abgelagerte Sand bildet lange Nehrungen; wenn eine Nehrung einen Meeresabschnitt abschließt, bildet sich dahinter eine Lagune, wie in Venedig."
    },
    {
     "id": "delta",
     "label": "Delta",
     "x": 62,
     "y": 88,
     "color": "#22c55e",
     "html": "Mündung mit vielen Armen.",
     "why": "Es entsteht, wenn der Fluss mehr Schutt bringt, als das Meer fortschaffen kann: Die Mündung wächst vor und der Fluss teilt sich in Arme."
    },
    {
     "id": "isola",
     "label": "Inseln und Archipele",
     "x": 85,
     "y": 68,
     "color": "#16a34a",
     "html": "Vom Meer umgebene Länder.",
     "why": "Sie können Teile des Kontinents sein, die das steigende Meer abgetrennt hat (wie Sardinien), oder Gipfel von Vulkanen, die vom Meeresgrund aufstiegen (wie die Liparischen Inseln)."
    }
   ],
   "edges": [
    [
     "mare",
     "onde",
     "trägt ab"
    ],
    [
     "mare",
     "deposito",
     "bringt"
    ],
    [
     "mare",
     "livello",
     "verändert"
    ],
    [
     "onde",
     "golfo",
     "gräbt aus"
    ],
    [
     "deposito",
     "spiaggia",
     "bildet"
    ],
    [
     "deposito",
     "delta",
     "bildet"
    ],
    [
     "livello",
     "isola",
     "trennt / schafft"
    ]
   ]
  },
  {
   "type": "example",
   "title": "Praxisbeispiel: Warum fahren die Schiffe durch Meerengen und Kanäle?",
   "html": "<p>Ein Schiff, das von Genua nach Venedig fährt, könnte um Sizilien herumfahren, aber wenn es durch die <b>Straße von Messina</b> fährt, spart es viele Kilometer.</p>\n<p>Manchmal hat der Mensch sogar eine <b>Landenge durchstochen</b>, um einen Kanal zu bauen: Der <b>Kanal von Korinth</b> (1893) durchschneidet die Landenge von Korinth, und der <b>Panamakanal</b> (1914) verbindet den Atlantischen und den Pazifischen Ozean. Davor mussten die Schiffe um ganz Südamerika herumfahren!</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: die Formen des Wassers",
   "questions": [
    {
     "type": "mc",
     "q": "Die Straße von Messina trennt …",
     "options": [
      "Sardinien und Korsika",
      "Sizilien und Kalabrien",
      "Italien und Griechenland"
     ],
     "answer": 1,
     "explain": "Sie trennt Sizilien von Kalabrien und verbindet das Tyrrhenische und das Ionische Meer."
    },
    {
     "type": "mc",
     "q": "Eine kleine, geschützte Einbuchtung ist …",
     "options": [
      "eine Bucht",
      "ein Kap",
      "eine Landenge"
     ],
     "answer": 0,
     "explain": "Die Bucht ist wie ein kleiner Golf."
    },
    {
     "type": "tf",
     "q": "Das Delta hat seinen Namen von einem griechischen Buchstaben.",
     "answer": true,
     "explain": "Dem Buchstaben Δ, in Form eines Dreiecks."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Küste",
   "d": "Landstreifen, der ans Meer grenzt; sie kann hoch oder flach sein."
  },
  {
   "t": "Insel",
   "d": "Land, das von allen Seiten von Wasser umgeben ist."
  },
  {
   "t": "Archipel",
   "d": "Gruppe nahe beieinander liegender Inseln."
  },
  {
   "t": "Halbinsel",
   "d": "Land, das auf drei Seiten von Wasser umgeben ist."
  },
  {
   "t": "Kap / Vorgebirge",
   "d": "Landspitze, die ins Meer ragt (das Vorgebirge ist hoch)."
  },
  {
   "t": "Golf",
   "d": "Weite Einbuchtung des Meeres."
  },
  {
   "t": "Bucht",
   "d": "Kleine, geschützte Einbuchtung."
  },
  {
   "t": "Landenge",
   "d": "Schmaler Landstreifen, der zwei Länder verbindet und zwei Meere trennt."
  },
  {
   "t": "Meerenge",
   "d": "Schmaler Meeresarm, der zwei Länder trennt und zwei Meere verbindet."
  },
  {
   "t": "Lagune",
   "d": "Flaches Salzwasser, vom Meer durch Sandbänke getrennt."
  },
  {
   "t": "Delta",
   "d": "Flussmündung, die sich in mehrere Arme in Form eines Dreiecks teilt."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Ein Land, das auf drei Seiten von Wasser umgeben ist, ist …",
    "options": [
     "eine Insel",
     "eine Halbinsel",
     "ein Golf"
    ],
    "answer": 1,
    "explain": "Halbinsel = „fast eine Insel“."
   },
   {
    "type": "mc",
    "q": "Welche ist die größte Insel des Mittelmeers?",
    "options": [
     "Sardinien",
     "Sizilien",
     "Korsika"
    ],
    "answer": 1,
    "explain": "Sizilien, etwa 25.700 km²."
   },
   {
    "type": "mc",
    "q": "Der Landstreifen, der zwei Länder verbindet und zwei Meere trennt, ist …",
    "options": [
     "eine Meerenge",
     "eine Landenge",
     "eine Lagune"
    ],
    "answer": 1,
    "explain": "Die Landenge, wie die von Panama."
   },
   {
    "type": "tf",
    "q": "Eine Meerenge ist ein Meeresdurchgang zwischen zwei Ländern.",
    "answer": true,
    "explain": "Beispiel: Straße von Messina, Straße von Gibraltar."
   },
   {
    "type": "text",
    "q": "Wie heißt eine Gruppe nahe beieinander liegender Inseln?",
    "answer": [
     "Archipel",
     "ein Archipel"
    ],
    "explain": "Archipel, wie die Liparischen Inseln."
   },
   {
    "type": "mc",
    "q": "Eine Küste mit steilen Klippen ist …",
    "options": [
     "eine Steilküste",
     "eine Flachküste",
     "ein Delta"
    ],
    "answer": 0,
    "explain": "Die Steilküste ist felsig und steil."
   },
   {
    "type": "mc",
    "q": "Venedig liegt in …",
    "options": [
     "einem Delta",
     "einer Lagune",
     "einer Meerenge"
    ],
    "answer": 1,
    "explain": "Die Lagune von Venedig, vom Meer durch Sandnehrungen getrennt."
   },
   {
    "type": "mc",
    "q": "Der Gargano ist …",
    "options": [
     "ein Vorgebirge",
     "ein Archipel",
     "eine Lagune"
    ],
    "answer": 0,
    "explain": "Er ist der „Sporn“ des Stiefels: ein Vorgebirge."
   },
   {
    "type": "tf",
    "q": "Der Golf ist Land, das ins Meer ragt.",
    "answer": false,
    "explain": "Es ist umgekehrt: Der Golf ist Meer, das ins Land eindringt. Land, das ins Meer ragt, ist das Kap."
   },
   {
    "type": "mc",
    "q": "Das Podelta liegt am …",
    "options": [
     "Tyrrhenischen Meer",
     "Adriatischen Meer",
     "Ionischen Meer"
    ],
    "answer": 1,
    "explain": "Der Po mündet ins Adriatische Meer, zwischen Venetien und der Emilia-Romagna."
   },
   {
    "type": "mc",
    "q": "Warum entsteht ein Delta?",
    "options": [
     "Weil der Fluss an der Mündung viel Schutt ablagert",
     "Weil die Wellen den Felsen aushöhlen",
     "Weil es einen Vulkan gibt"
    ],
    "answer": 0,
    "explain": "Der Schutt häuft sich an und der Fluss teilt sich in viele Arme."
   }
  ]
 }
});
