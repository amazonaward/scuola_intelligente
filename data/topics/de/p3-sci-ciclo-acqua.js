TOPIC('de', {
 "id": "p3-sci-ciclo-acqua",
 "title": "Der Wasserkreislauf",
 "intro": "Das Wasser der Erde wird nie verbraucht: Es reist ständig zwischen Meer, Himmel und Land. Diese endlose Reise heißt <b>Wasserkreislauf</b>.",
 "minutes": 25,
 "sections": [
  {
   "type": "text",
   "title": "Wasser verändert seine Form",
   "html": "<p>Wasser kann in <b>drei Zuständen</b> vorkommen:</p>\n<ul>\n<li><b>Fest</b>: Eis, Schnee, Hagel. Es hat eine eigene Form.</li>\n<li><b>Flüssig</b>: das Wasser aus dem Hahn, aus den Flüssen und aus dem Meer. Es nimmt die Form des Gefäßes an.</li>\n<li><b>Gasförmig</b>: der Wasserdampf. Er ist unsichtbar und verteilt sich in der Luft.</li>\n</ul>\n<p>Den Zustand des Wassers verändert die <b>Wärme</b>: Beim Erwärmen schmilzt das Eis und das Wasser verdunstet; beim Abkühlen wird der Dampf wieder flüssig und das Wasser gefriert.</p>"
  },
  {
   "type": "3d",
   "title": "Wie ist ein Wassertropfen aufgebaut?",
   "scene": "molecule",
   "options": {
    "atoms": [
     {
      "x": 0,
      "y": 0,
      "z": 0,
      "r": 0.6,
      "color": "#ef4444",
      "label": "O (Sauerstoff)"
     },
     {
      "x": 0.75,
      "y": -0.55,
      "z": 0,
      "r": 0.38,
      "color": "#f8fafc",
      "label": "H (Wasserstoff)"
     },
     {
      "x": -0.75,
      "y": -0.55,
      "z": 0,
      "r": 0.38,
      "color": "#f8fafc",
      "label": "H (Wasserstoff)"
     }
    ],
    "bonds": [
     [
      0,
      1
     ],
     [
      0,
      2
     ]
    ]
   },
   "caption": "Jeder Wassertropfen besteht aus Milliarden winziger H₂O-Moleküle: ein Sauerstoffatom und zwei Wasserstoffatome. Dreh es!"
  },
  {
   "type": "text",
   "title": "Die Stationen der Reise",
   "html": "<ol>\n<li><b>Verdunstung</b>: Die Sonne erwärmt das Wasser von Meeren, Seen und Flüssen. Ein Teil wird zu <b>Dampf</b> und steigt in den Himmel. Auch Pflanzen „schwitzen“ Dampf aus den Blättern (<b>Transpiration</b>).</li>\n<li><b>Kondensation</b>: Oben ist es kalt. Der Dampf kühlt ab und verwandelt sich in winzig kleine Tröpfchen: So entstehen die <b>Wolken</b>.</li>\n<li><b>Niederschlag</b>: Die Tröpfchen verbinden sich, werden schwer und fallen als <b>Regen</b> herunter, oder als <b>Schnee</b> oder <b>Hagel</b>, wenn es sehr kalt ist.</li>\n<li><b>Abfluss und Versickerung</b>: Das gefallene Wasser fließt in den Flüssen zum Meer oder dringt in den Boden ein und bildet das unterirdische <b>Grundwasser</b>.</li>\n</ol>\n<p>Dann erwärmt die Sonne das Wasser wieder … und der Kreislauf beginnt von vorn!</p>"
  },
  {
   "type": "svg",
   "title": "Der Wasserkreislauf",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#e0f2fe\"/>\n<circle cx=\"540\" cy=\"55\" r=\"35\" fill=\"#facc15\"/>\n<path d=\"M0 230 L170 110 L300 230z\" fill=\"#78716c\"/>\n<path d=\"M140 132 L170 110 L200 132 L185 140 L170 128 L155 140z\" fill=\"#ffffff\"/>\n<rect y=\"230\" width=\"600\" height=\"90\" fill=\"#65a30d\"/>\n<path d=\"M330 320 L330 250 Q450 225 600 245 L600 320z\" fill=\"#2563eb\"/>\n<path d=\"M200 200 Q240 240 330 255\" stroke=\"#3b82f6\" stroke-width=\"10\" fill=\"none\"/>\n<ellipse cx=\"190\" cy=\"65\" rx=\"70\" ry=\"28\" fill=\"#94a3b8\"/>\n<ellipse cx=\"240\" cy=\"55\" rx=\"55\" ry=\"25\" fill=\"#cbd5e1\"/>\n<path d=\"M150 100 l-6 16 M180 100 l-6 16 M210 100 l-6 16 M240 100 l-6 16\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n<path d=\"M470 235 Q480 180 460 130 M500 235 Q510 180 490 130 M530 235 Q540 180 520 130\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-dasharray=\"6 6\" fill=\"none\"/>\n<path d=\"M440 110 Q360 60 310 60\" stroke=\"#475569\" stroke-width=\"4\" fill=\"none\" marker-end=\"url(#f)\"/>\n<defs><marker id=\"f\" markerWidth=\"10\" markerHeight=\"10\" refX=\"6\" refY=\"5\" orient=\"auto\"><path d=\"M0 0 L10 5 L0 10z\" fill=\"#475569\"/></marker></defs>\n<text x=\"500\" y=\"290\" font-size=\"18\" fill=\"#ffffff\" text-anchor=\"middle\" font-weight=\"bold\">1 Verdunstung</text>\n<text x=\"380\" y=\"45\" font-size=\"18\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2 Kondensation</text>\n<text x=\"80\" y=\"150\" font-size=\"18\" fill=\"#1e3a8a\" text-anchor=\"middle\" font-weight=\"bold\">3 Niederschlag</text>\n<text x=\"230\" y=\"290\" font-size=\"18\" fill=\"#ffffff\" text-anchor=\"middle\" font-weight=\"bold\">4 Abfluss</text>\n</svg>",
   "caption": "Die Sonne lässt das Meerwasser verdunsten, der Dampf bildet die Wolken, der Regen fällt auf die Berge und die Flüsse bringen ihn zurück ins Meer."
  },
  {
   "type": "widget",
   "title": "Finde die Stationen des Kreislaufs",
   "widget": "labelDiagram",
   "options": {
    "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#e0f2fe\"/>\n<circle cx=\"540\" cy=\"50\" r=\"30\" fill=\"#facc15\"/>\n<path d=\"M0 220 L160 100 L290 220z\" fill=\"#78716c\"/>\n<rect y=\"220\" width=\"600\" height=\"80\" fill=\"#65a30d\"/>\n<path d=\"M330 300 L330 240 Q450 215 600 235 L600 300z\" fill=\"#2563eb\"/>\n<path d=\"M190 195 Q240 235 330 245\" stroke=\"#3b82f6\" stroke-width=\"10\" fill=\"none\"/>\n<ellipse cx=\"200\" cy=\"60\" rx=\"70\" ry=\"28\" fill=\"#94a3b8\"/>\n<path d=\"M160 95 l-6 16 M190 95 l-6 16 M220 95 l-6 16\" stroke=\"#2563eb\" stroke-width=\"4\"/>\n<path d=\"M480 225 Q490 170 470 120 M510 225 Q520 170 500 120\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-dasharray=\"6 6\" fill=\"none\"/>\n</svg>",
    "spots": [
     {
      "x": 490,
      "y": 170,
      "label": "Verdunstung"
     },
     {
      "x": 200,
      "y": 60,
      "label": "Kondensation (Wolke)"
     },
     {
      "x": 190,
      "y": 105,
      "label": "Niederschlag"
     },
     {
      "x": 260,
      "y": 228,
      "label": "Abfluss (Fluss)"
     },
     {
      "x": 470,
      "y": 270,
      "label": "Meer"
     }
    ]
   },
   "caption": "Klicke auf jeden Punkt und wähle den richtigen Namen."
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: die Stationen",
   "questions": [
    {
     "type": "mc",
     "q": "Wie heißt der Übergang des Wassers von flüssig zu Dampf?",
     "options": [
      "Kondensation",
      "Verdunstung",
      "Erstarren"
     ],
     "answer": 1,
     "explain": "Wenn sich Wasser erwärmt und zu Dampf wird, spricht man von Verdunstung."
    },
    {
     "type": "mc",
     "q": "Woraus bestehen Wolken?",
     "options": [
      "Aus Rauch",
      "Aus Watte",
      "Aus Wassertröpfchen oder Eiskristallen"
     ],
     "answer": 2,
     "explain": "Wolken bestehen aus Millionen winziger Tröpfchen (oder kleiner Eiskristalle)."
    },
    {
     "type": "tf",
     "q": "Der Motor des Wasserkreislaufs ist die Sonne.",
     "answer": true,
     "explain": "Die Wärme der Sonne lässt das Wasser verdunsten und setzt den Kreislauf in Gang."
    }
   ]
  },
  {
   "type": "example",
   "title": "Praxisbeispiel: der Kreislauf in der Küche",
   "html": "<p>Wenn Mama oder Papa Wasser für die Nudeln zum Kochen bringen:</p>\n<ul>\n<li>Aus dem Topf steigt <b>Dampf</b> auf (Verdunstung);</li>\n<li>wenn man einen Deckel auflegt, bilden sich darunter viele <b>Tröpfchen</b> (Kondensation);</li>\n<li>die Tröpfchen werden groß und <b>fallen zurück</b> in den Topf (Niederschlag)!</li>\n</ul>\n<p>Der Topf ist wie ein kleiner Wasserkreislauf. ⚠️ Mach diese Beobachtung nur mit einem Erwachsenen: Der Dampf ist heiß!</p>"
  },
  {
   "type": "example",
   "title": "Praxisbeispiel: ein Wasserkreislauf im Beutel",
   "html": "<p>Du brauchst: einen durchsichtigen Plastikbeutel mit Zipverschluss, ein bisschen blau gefärbtes Wasser, Klebeband.</p>\n<ol>\n<li>Gib einen Fingerbreit Wasser in den Beutel und verschließe ihn gut.</li>\n<li>Klebe ihn mit dem Klebeband an ein Fenster in der Sonne.</li>\n<li>Nach ein paar Stunden siehst du oben Tröpfchen (die „Wolken“), die dann hinunterrutschen (der „Regen“).</li>\n</ol>\n<p>Das Wasser im Beutel kommt nie heraus: genau wie das Wasser der Erde!</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du schon …?",
   "html": "<p>Das Wasser, das du heute trinkst, könnte dasselbe sein, das schon die Dinosaurier getrunken haben! Das Wasser auf der Erde kreist seit Milliarden von Jahren und seine Menge bleibt fast immer gleich.</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du schon …?",
   "html": "<p>Etwa <b>97 %</b> des Wassers der Erde sind salzig (Meere und Ozeane). Nur 3 % sind Süßwasser, und der größte Teil davon ist an den Polen und auf den Bergen gefroren. Deshalb darf man es nicht verschwenden!</p>"
  },
  {
   "type": "widget",
   "title": "Fest, flüssig oder gasförmig?",
   "widget": "classify",
   "options": {
    "groups": [
     "🧊 Fest",
     "💧 Flüssig",
     "💨 Gasförmig"
    ],
    "items": [
     [
      "❄️ Schnee",
      0
     ],
     [
      "🧊 Eiswürfel",
      0
     ],
     [
      "🌨️ Hagel",
      0
     ],
     [
      "🌧️ Regen",
      1
     ],
     [
      "🏞️ Flusswasser",
      1
     ],
     [
      "🚿 Duschwasser",
      1
     ],
     [
      "♨️ Dampf aus dem Topf",
      2
     ],
     [
      "🌫️ Wasserdampf in der Luft",
      2
     ]
    ]
   },
   "caption": "Ordne jedes Beispiel der richtigen Gruppe zu."
  },
  {
   "type": "remember",
   "title": "Das solltest du dir merken",
   "html": "<p>Der Wasserkreislauf hat 4 Stationen: <b>Verdunstung → Kondensation → Niederschlag → Abfluss/Versickerung</b>. Der Motor ist die <b>Sonne</b>. Wasser wird weder erschaffen noch verbraucht: Es <b>kreist</b>.</p>"
  },
  {
   "type": "3d",
   "title": "Der Wasserkreislauf in einer 3D-Landschaft",
   "scene": "terrain",
   "caption": "Drehe die Landschaft und tippe auf ihre Teile: Finde heraus, welche Rolle jedes auf der Reise des Wassers spielt.",
   "options": {
    "features": {
     "sea": {
      "label": "Meer",
      "html": "Das Meer enthält fast das ganze Wasser der Erde (etwa 97 %). Die Sonne erwärmt es und das Wasser <b>verdunstet</b>: Hier beginnt ein großer Teil des Kreislaufs. Das Salz dagegen bleibt im Meer: Deshalb ist der Regen süß!"
     },
     "mountain": {
      "label": "Berg",
      "html": "Die feuchte Luft, die vom Meer kommt, stößt gegen die Berge und muss aufsteigen. Beim Aufsteigen kühlt sie ab, der Dampf <b>kondensiert</b> und es bilden sich Wolken: Deshalb regnet und schneit es in den Bergen oft."
     },
     "glacier": {
      "label": "Gletscher",
      "html": "Auf den höchsten Gipfeln sammelt sich der Schnee und wird zu Eis. Der Gletscher ist ein <b>Wasserspeicher</b>: Im Sommer schmilzt er langsam und speist Bäche und Flüsse. Hier kann das Wasser sogar Tausende von Jahren stillstehen!"
     },
     "source": {
      "label": "Quelle",
      "html": "Das Regenwasser dringt in den Boden ein (<b>Versickerung</b>), fließt unter der Erde und tritt dann aus einer Quelle hervor. Oft ist es frisches, sauberes Wasser, vom Gestein gefiltert."
     },
     "river": {
      "label": "Fluss",
      "html": "Der Fluss sammelt das Wasser von Regen, Quellen und Gletschern und bringt es zurück zum Meer: Das ist der <b>Abfluss</b>, der letzte Teil des Kreislaufs."
     },
     "lake": {
      "label": "See",
      "html": "Der See ist eine Mulde voller Süßwasser. Auch aus dem See verdunstet Wasser, und der See kann als „Speicher“ für die Flüsse dienen."
     },
     "delta": {
      "label": "Deltamündung",
      "html": "Der Fluss erreicht das Meer und teilt sich in viele Arme: Das Süßwasser kehrt ins Meer zurück und der Kreislauf kann von vorn beginnen."
     }
    }
   }
  },
  {
   "type": "alternatives",
   "title": "Andere Wege, es zu verstehen",
   "intro": "Wenn dir das Schema mit den Pfeilen nicht reicht, probiere einen dieser Wege: eine Geschichte, ein Experiment, einen „Riesentopf“ oder die Teilchen aus der Nähe.",
   "tabs": [
    {
     "label": "💧 Die Reise von Tropfi",
     "html": "<p>Hallo! Ich bin <b>Tropfi</b> und lebe im Meer. Eines Morgens erwärmt mich die Sonne so stark, dass ich ganz leicht werde: Ich bin zu <b>Dampf</b> geworden und steige unsichtbar in den Himmel auf. ☀️</p>\n<p>Da oben ist es kalt! Ich drücke mich mit anderen Tröpfchen um ein Staubkorn: Gemeinsam bilden wir eine <b>Wolke</b>. ☁️</p>\n<p>Der Wind trägt uns über die Berge. Wir werden so viele und so schwer, dass wir herunterfallen: Das ist der <b>Regen</b>! 🌧️ Ich falle auf eine Wiese, schlüpfe in den Boden und fließe unter der Erde bis zu einer <b>Quelle</b>.</p>\n<p>Dann springe ich in den Bach, sause im <b>Fluss</b> dahin … und nach ein paar Wochen bin ich wieder im Meer. Meine Reise hört nie auf! 🔄</p>"
    },
    {
     "label": "🧪 Experiment zu Hause",
     "html": "<p>Du kannst in der Küche einen kleinen Wasserkreislauf nachbauen, <b>mit Hilfe eines Erwachsenen</b>:</p>\n<ol>\n<li>Gib ein bisschen Wasser in einen Topf und erhitze es (der Herd spielt die <b>Sonne</b>).</li>\n<li>Ein Erwachsener hält einen kalten Deckel mit Eiswürfeln darauf über den Topf (das ist der <b>kalte Himmel</b>).</li>\n<li>Schau unter den Deckel: Es bilden sich Tröpfchen (<b>Kondensation</b>), die dann in den Topf zurückfallen (<b>Regen</b>)!</li>\n</ol>\n<p><b>Version ohne Feuer:</b> Gib ein bisschen Wasser in einen gut verschlossenen, durchsichtigen Plastikbeutel und klebe ihn an ein Fenster in der Sonne. Nach ein paar Stunden siehst du Tröpfchen an den Wänden, die nach unten rutschen.</p>"
    },
    {
     "label": "🍲 Der Riesentopf",
     "html": "<p>Stell dir die Erde wie einen <b>riesigen Topf mit Deckel</b> vor:</p>\n<ul>\n<li>Die <b>Sonne</b> ist der Herd, der heizt;</li>\n<li>das <b>Meer</b> ist das Wasser im Topf;</li>\n<li>die <b>kalte Luft oben</b> ist der Deckel, wo der Dampf wieder zu Wasser wird;</li>\n<li>die Tropfen, die zurückfallen, sind der <b>Regen</b>.</li>\n</ul>\n<p>Der Unterschied? Der Topf der Erde ist nie fest verschlossen: Das Wasser kann in den Gletschern, in den Seen, unter der Erde oder in Pflanzen und Tieren bleiben (auch in dir!).</p>"
    },
    {
     "label": "🔬 Die Teilchen aus der Nähe",
     "html": "<p>Wasser besteht aus winzigen Teilchen (Molekülen). Wenn sich die Temperatur ändert, ändert sich die Art, wie sie sich bewegen:</p>\n<ul>\n<li><b>Eis</b>: Die Moleküle sitzen eng und still an ihrem Platz, wie Kinder, die in einer Reihe sitzen.</li>\n<li><b>Flüssiges Wasser</b>: Die Moleküle gleiten aneinander vorbei, wie Kinder, die auf dem Hof spielen.</li>\n<li><b>Dampf</b>: Die Moleküle rasen frei und weit auseinander, wie Kinder, die auf einer riesigen Wiese davonlaufen.</li>\n</ul>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"10\" y=\"20\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#dbeafe\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<rect x=\"210\" y=\"20\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<rect x=\"410\" y=\"20\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#f1f5f9\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<g fill=\"#2563eb\">\n<circle cx=\"45\" cy=\"55\" r=\"12\"/><circle cx=\"80\" cy=\"55\" r=\"12\"/><circle cx=\"115\" cy=\"55\" r=\"12\"/><circle cx=\"150\" cy=\"55\" r=\"12\"/>\n<circle cx=\"45\" cy=\"95\" r=\"12\"/><circle cx=\"80\" cy=\"95\" r=\"12\"/><circle cx=\"115\" cy=\"95\" r=\"12\"/><circle cx=\"150\" cy=\"95\" r=\"12\"/>\n<circle cx=\"45\" cy=\"135\" r=\"12\"/><circle cx=\"80\" cy=\"135\" r=\"12\"/><circle cx=\"115\" cy=\"135\" r=\"12\"/><circle cx=\"150\" cy=\"135\" r=\"12\"/>\n<circle cx=\"45\" cy=\"175\" r=\"12\"/><circle cx=\"80\" cy=\"175\" r=\"12\"/><circle cx=\"115\" cy=\"175\" r=\"12\"/><circle cx=\"150\" cy=\"175\" r=\"12\"/>\n<circle cx=\"240\" cy=\"120\" r=\"12\"/><circle cx=\"268\" cy=\"140\" r=\"12\"/><circle cx=\"300\" cy=\"118\" r=\"12\"/><circle cx=\"330\" cy=\"145\" r=\"12\"/><circle cx=\"360\" cy=\"125\" r=\"12\"/>\n<circle cx=\"250\" cy=\"170\" r=\"12\"/><circle cx=\"285\" cy=\"175\" r=\"12\"/><circle cx=\"318\" cy=\"172\" r=\"12\"/><circle cx=\"352\" cy=\"175\" r=\"12\"/><circle cx=\"290\" cy=\"90\" r=\"12\"/>\n<circle cx=\"440\" cy=\"50\" r=\"12\"/><circle cx=\"545\" cy=\"70\" r=\"12\"/><circle cx=\"490\" cy=\"120\" r=\"12\"/><circle cx=\"430\" cy=\"170\" r=\"12\"/><circle cx=\"560\" cy=\"165\" r=\"12\"/>\n</g>\n<text x=\"100\" y=\"235\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1e3a8a\">🧊 Fest</text>\n<text x=\"300\" y=\"235\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1e3a8a\">💧 Flüssig</text>\n<text x=\"500\" y=\"235\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1e3a8a\">♨️ Gasförmig</text>\n</svg>"
    },
    {
     "label": "⚛️ Das Molekül in 3D",
     "html": "<p>Hier ist ein Wassermolekül: ein <b>Sauerstoff</b>atom (rot) und zwei <b>Wasserstoff</b>atome (weiß). Man schreibt <b>H₂O</b>. Dreh es mit dem Finger: Es hat die Form eines kleinen „V“, wie der Kopf von Micky Maus!</p>",
     "scene": "molecule",
     "options": {
      "atoms": [
       {
        "x": 0,
        "y": 0,
        "z": 0,
        "r": 0.55,
        "color": "#ef4444",
        "label": "O"
       },
       {
        "x": 0.75,
        "y": 0.58,
        "z": 0,
        "r": 0.35,
        "color": "#e5e7eb",
        "label": "H"
       },
       {
        "x": -0.75,
        "y": 0.58,
        "z": 0,
        "r": 0.35,
        "color": "#e5e7eb",
        "label": "H"
       }
      ],
      "bonds": [
       [
        0,
        1
       ],
       [
        0,
        2
       ]
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Karte des Wasserkreislaufs: Tippe auf die Knoten und finde heraus, warum",
   "nodes": [
    {
     "id": "sole",
     "label": "Sonne ☀️",
     "x": 50,
     "y": 6,
     "color": "#f59e0b",
     "html": "Die Sonne liefert die Energie (die Wärme), die den ganzen Kreislauf antreibt.",
     "why": "Ohne die Wärme der Sonne würde das Wasser nicht verdunsten: Der ganze Kreislauf ist wie ein Motor, der mit Sonnenenergie läuft. Auch der Wind, der die Wolken bewegt, entsteht, weil die Sonne die Erde an jedem Ort unterschiedlich erwärmt."
    },
    {
     "id": "evaporazione",
     "label": "Verdunstung",
     "x": 18,
     "y": 30,
     "color": "#f97316",
     "html": "Flüssiges Wasser verwandelt sich in unsichtbaren Dampf.",
     "why": "Die Wassermoleküle bewegen sich immer. Wenn sie erwärmt werden, schaffen es die schnellsten, aus der Oberfläche „herauszuspringen“ und in die Luft zu fliegen. Deshalb trocknet aufgehängte Wäsche in Sonne und Wind schneller."
    },
    {
     "id": "condensazione",
     "label": "Kondensation",
     "x": 50,
     "y": 32,
     "color": "#64748b",
     "html": "Der Dampf kühlt ab und wird wieder zu Tröpfchen: So entstehen die Wolken.",
     "why": "Je höher man steigt, desto kälter ist die Luft. Der abgekühlte Dampf setzt sich an winzige Staub- oder Salzkörnchen und bildet Tröpfchen. Die Wolken fallen nicht herunter, weil die Tröpfchen winzig klein sind (man braucht etwa eine Million, um einen einzigen Regentropfen zu bilden!) und die Luftströmungen sie oben halten."
    },
    {
     "id": "precipitazione",
     "label": "Niederschläge",
     "x": 82,
     "y": 30,
     "color": "#3b82f6",
     "html": "Regen, Schnee oder Hagel, die auf die Erde fallen.",
     "why": "Die Tröpfchen in der Wolke stoßen zusammen und verbinden sich: Wenn sie zu schwer werden, können die Strömungen sie nicht mehr tragen und sie fallen. Wenn es sehr kalt ist, fallen sie als Schnee oder Hagel."
    },
    {
     "id": "infiltrazione",
     "label": "Versickerung",
     "x": 80,
     "y": 62,
     "color": "#92400e",
     "html": "Ein Teil des Wassers dringt in den Boden ein und bildet das Grundwasser.",
     "why": "Der Boden ist voller kleiner Zwischenräume zwischen den Körnchen, wie ein Schwamm. Das Wasser rutscht hinein, wird vom Gestein gefiltert und kann nach Tagen oder Jahren aus Quellen wieder hervortreten."
    },
    {
     "id": "scorrimento",
     "label": "Abfluss",
     "x": 50,
     "y": 72,
     "color": "#0ea5e9",
     "html": "Bäche und Flüsse bringen das Wasser zurück zum Meer.",
     "why": "Das Wasser fließt wegen der Schwerkraft immer nach unten. Im Jahr 1674 maß der Franzose <b>Pierre Perrault</b> den Regen, der in der Nähe der Seine fiel, und entdeckte, dass er ausreichte (ja sogar übrig blieb!), um den Fluss zu speisen: Das war der erste Beweis, dass Flüsse aus Regen entstehen."
    },
    {
     "id": "mare",
     "label": "Meer und Ozeane",
     "x": 18,
     "y": 72,
     "color": "#1d4ed8",
     "html": "Der große Speicher: Er enthält etwa 97 % des gesamten Wassers der Erde.",
     "why": "Wenige Jahre nach Perrault berechnete der englische Astronom <b>Edmond Halley</b>, wie viel Wasser aus dem Mittelmeer verdunstet, und stellte fest, dass es genauso viel ist, wie die Flüsse hineinbringen: So läuft das Meer nicht über und leert sich auch nicht."
    },
    {
     "id": "piante",
     "label": "Pflanzen",
     "x": 50,
     "y": 94,
     "color": "#16a34a",
     "html": "Pflanzen nehmen Wasser mit den Wurzeln auf und geben es als Dampf über die Blätter ab (Transpiration).",
     "why": "Die Blätter haben winzige Öffnungen, die Spaltöffnungen, aus denen Wasserdampf austritt. Ein großer Wald wie der Amazonas schickt so viel Wasser zurück in den Himmel, dass er einen Teil seines eigenen Regens „herstellt“."
    }
   ],
   "edges": [
    [
     "sole",
     "evaporazione",
     "erwärmt und löst aus"
    ],
    [
     "evaporazione",
     "condensazione",
     "der Dampf steigt auf →"
    ],
    [
     "condensazione",
     "precipitazione",
     "schwere Tropfen →"
    ],
    [
     "precipitazione",
     "infiltrazione",
     "in den Boden"
    ],
    [
     "precipitazione",
     "scorrimento",
     "an der Oberfläche"
    ],
    [
     "infiltrazione",
     "scorrimento",
     "Quellen"
    ],
    [
     "scorrimento",
     "mare",
     "kehrt zurück ins"
    ],
    [
     "mare",
     "evaporazione",
     "beginnt von vorn"
    ],
    [
     "piante",
     "evaporazione",
     "Transpiration"
    ],
    [
     "infiltrazione",
     "piante",
     "Wurzeln"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Wasser in jedem Zustand",
   "questions": [
    {
     "type": "tf",
     "q": "Eis ist Wasser im festen Zustand.",
     "answer": true,
     "explain": "Eis ist festes Wasser."
    },
    {
     "type": "mc",
     "q": "Wohin geht das Wasser, das in den Boden eindringt?",
     "options": [
      "Es verschwindet",
      "Es bildet das unterirdische Grundwasser",
      "Es kehrt sofort in die Wolken zurück"
     ],
     "answer": 1,
     "explain": "Das Wasser versickert und bildet unterirdische Speicher, die Grundwasserleiter genannt werden."
    },
    {
     "type": "num",
     "q": "Wie viele Hauptstationen hat der Wasserkreislauf?",
     "answer": 4,
     "explain": "Verdunstung, Kondensation, Niederschlag, Abfluss."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Verdunstung",
   "d": "Übergang des Wassers von flüssig zu Dampf, dank der Wärme."
  },
  {
   "t": "Kondensation",
   "d": "Übergang des Dampfes zu Tröpfchen aus flüssigem Wasser, wegen der Kälte."
  },
  {
   "t": "Niederschlag",
   "d": "Herabfallen des Wassers aus den Wolken: Regen, Schnee, Hagel."
  },
  {
   "t": "Versickerung",
   "d": "Das Wasser, das in den Boden eindringt."
  },
  {
   "t": "Grundwasserleiter",
   "d": "Wasserspeicher unter der Erde."
  },
  {
   "t": "Transpiration",
   "d": "Der Wasserdampf, den Pflanzen über die Blätter abgeben."
  },
  {
   "t": "Wasserdampf",
   "d": "Wasser im gasförmigen Zustand, unsichtbar."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Was setzt den Wasserkreislauf in Gang?",
    "options": [
     "Der Wind",
     "Die Wärme der Sonne",
     "Der Mond"
    ],
    "answer": 1,
    "explain": "Die Wärme der Sonne lässt das Wasser verdunsten."
   },
   {
    "type": "order",
    "q": "Bringe die Stationen des Wasserkreislaufs in die richtige Reihenfolge.",
    "items": [
     "Verdunstung",
     "Kondensation",
     "Niederschlag",
     "Abfluss zum Meer"
    ],
    "explain": "Das Wasser verdunstet, bildet Wolken, fällt herunter und kehrt zum Meer zurück."
   },
   {
    "type": "tf",
    "q": "Die Wassermenge auf der Erde nimmt jeden Tag ab, weil wir es trinken.",
    "answer": false,
    "explain": "Das Wasser kreist ständig: Es kehrt immer in den Kreislauf zurück."
   },
   {
    "type": "mc",
    "q": "Wie heißt das Wasser, das als Eiskügelchen fällt?",
    "options": [
     "Schnee",
     "Hagel",
     "Tau"
    ],
    "answer": 1,
    "explain": "Hagel besteht aus Eiskügelchen."
   },
   {
    "type": "text",
    "q": "Wie heißt der Übergang von Dampf zu Tröpfchen?",
    "answer": [
     "Kondensation",
     "die Kondensation"
    ],
    "explain": "Er heißt Kondensation."
   },
   {
    "type": "mc",
    "q": "Wie viel vom Wasser der Erde ist salzig?",
    "options": [
     "Etwa 3 %",
     "Etwa die Hälfte",
     "Etwa 97 %"
    ],
    "answer": 2,
    "explain": "Etwa 97 % des Wassers sind in den Meeren und Ozeanen."
   },
   {
    "type": "tf",
    "q": "Auch Pflanzen geben Wasserdampf ab.",
    "answer": true,
    "explain": "Das heißt Transpiration."
   },
   {
    "type": "mc",
    "q": "Der Dampf, der aus dem kochenden Topf aufsteigt, ist Wasser im … Zustand.",
    "options": [
     "festen",
     "flüssigen",
     "gasförmigen"
    ],
    "answer": 2,
    "explain": "Dampf ist gasförmiges Wasser."
   },
   {
    "type": "mc",
    "q": "Aus welchen Atomen besteht ein Wassermolekül?",
    "options": [
     "2 Wasserstoff und 1 Sauerstoff",
     "1 Kohlenstoff und 2 Sauerstoff",
     "Nur Sauerstoff"
    ],
    "answer": 0,
    "explain": "H₂O: zwei Wasserstoffatome und ein Sauerstoffatom."
   },
   {
    "type": "tf",
    "q": "Wolken entstehen, weil die Luft oben kälter ist.",
    "answer": true,
    "explain": "Die Kälte lässt den Dampf zu Tröpfchen kondensieren."
   }
  ]
 }
});
