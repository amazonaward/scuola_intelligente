TOPIC('de', {
 "id": "m3-sci-struttura-terra-vulcani",
 "title": "Der Aufbau der Erde, Vulkane und Erdbeben",
 "intro": "Die Erde wirkt unbeweglich, aber unter unseren Füßen ist sie ein lebendiger Planet: Sie besteht aus Schichten mit sehr hohen Temperaturen, ihre Oberfläche ist in Platten geteilt, die sich bewegen, und dort, wo diese zusammenstoßen oder sich voneinander entfernen, entstehen Vulkane, Erdbeben und Gebirge.",
 "minutes": 40,
 "sections": [
  {
   "type": "text",
   "title": "1. Wie kennen wir das Erdinnere?",
   "html": "<p>Das tiefste jemals gebohrte Loch, die Kola-Supertiefbohrung in Russland, reicht etwa <b>12 km</b> tief: weniger als 0,2 % des Erdradius (ca. <b>6371 km</b>). Woher wissen wir dann, was darin ist?</p><p>Dank der <b>seismischen Wellen</b> der Erdbeben: Sie laufen durch die Erde und ändern Geschwindigkeit und Richtung, wenn sie unterschiedliche Materialien durchqueren. Die <b>S-Wellen</b> gehen nicht durch Flüssigkeiten: Deshalb wissen wir, dass der <b>äußere Kern flüssig ist</b>.</p>"
  },
  {
   "type": "3d",
   "title": "Die Schichten der Erde",
   "scene": "layers",
   "options": {
    "layers": [
     {
      "r": 1,
      "color": "#65a30d",
      "label": "Kruste (5–70 km)"
     },
     {
      "r": 0.97,
      "color": "#ea580c",
      "label": "Mantel (bis 2900 km)"
     },
     {
      "r": 0.55,
      "color": "#facc15",
      "label": "Äußerer Kern, flüssig"
     },
     {
      "r": 0.19,
      "color": "#fef9c3",
      "label": "Innerer Kern, fest"
     }
    ]
   },
   "caption": "Dreh das Modell: Der herausgeschnittene Keil zeigt die Schichten. Die Verhältnisse der Radien sind fast wirklichkeitsgetreu (die Kruste ist hauchdünn!)."
  },
  {
   "type": "text",
   "title": "2. Die Schichten, eine nach der anderen",
   "html": "<table><tr><th>Schicht</th><th>Tiefe</th><th>Zustand und Zusammensetzung</th><th>Temperatur</th></tr><tr><td><b>Kruste</b></td><td>0–35 km (Kontinente, bis 70 unter den Gebirgen); 5–10 km (Ozeane)</td><td>Fest, Gesteine wie Granit (kontinental) und Basalt (ozeanisch)</td><td>bis ~1000 °C an der Basis</td></tr><tr><td><b>Mantel</b></td><td>bis ~2900 km</td><td>Silikatgesteine aus Eisen und Magnesium; fest, aber fähig, langsam zu „fließen“</td><td>1000–3700 °C</td></tr><tr><td><b>Äußerer Kern</b></td><td>2900–5150 km</td><td>Flüssig, Eisen und Nickel</td><td>~4000–5000 °C</td></tr><tr><td><b>Innerer Kern</b></td><td>5150–6371 km</td><td>Fest (wegen des enormen Drucks), Eisen und Nickel</td><td>~5000–5500 °C, so heiß wie die Sonnenoberfläche</td></tr></table><p>Die Kruste und der obere, starre Teil des Mantels bilden die <b>Lithosphäre</b> (etwa 100 km), die auf der heißeren und plastischeren <b>Asthenosphäre</b> „schwimmt“.</p>"
  },
  {
   "type": "curiosity",
   "title": "Die Erde ist ein Magnet",
   "html": "<p>Das flüssige, sich bewegende Eisen im äußeren Kern erzeugt das <b>Magnetfeld der Erde</b>: Deshalb zeigt die Kompassnadel nach Norden. Das Magnetfeld schützt uns vor dem Sonnenwind und erzeugt die <b>Polarlichter</b>. Im Lauf der Erdgeschichte haben sich die magnetischen Pole Hunderte Male umgekehrt!</p>"
  },
  {
   "type": "text",
   "title": "3. Die Plattentektonik",
   "html": "<p>Im Jahr 1912 bemerkte der Deutsche <b>Alfred Wegener</b>, dass die Küsten von Südamerika und Afrika wie Puzzleteile zusammenpassen, und schlug die <b>Kontinentalverschiebung</b> vor: Vor 250–300 Millionen Jahren bildeten die Landmassen einen einzigen Superkontinent, die <b>Pangaea</b>.</p><p>Heute wissen wir, dass die Lithosphäre in etwa <b>15 große Platten</b> geteilt ist, die sich um wenige Zentimeter pro Jahr bewegen, angetrieben von den <b>Konvektionsströmungen</b> des Mantels. Die Plattengrenzen können sein:</p><ul><li><b>divergent</b>: Die Platten entfernen sich voneinander, Magma steigt auf und bildet neue Kruste (mittelozeanische Rücken wie der Mittelatlantische Rücken; Island);</li><li><b>konvergent</b>: Die Platten stoßen zusammen; eine kann unter die andere abtauchen (<b>Subduktion</b>) und bildet Tiefseegräben, Vulkane und Gebirge (Anden, Himalaya, Alpen);</li><li><b>Transformstörungen</b>: Die Platten gleiten aneinander vorbei (San-Andreas-Verwerfung in Kalifornien).</li></ul>"
  },
  {
   "type": "svg",
   "title": "Grenzen zwischen den Platten",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#e0f2fe\"/><rect x=\"0\" y=\"180\" width=\"600\" height=\"120\" fill=\"#fb923c\"/><text x=\"300\" y=\"285\" font-size=\"16\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#7c2d12\">Mantel (Asthenosphäre): Konvektionsströmungen</text><rect x=\"0\" y=\"130\" width=\"190\" height=\"50\" fill=\"#a16207\"/><rect x=\"210\" y=\"130\" width=\"170\" height=\"50\" fill=\"#a16207\"/><polygon points=\"190,180 210,180 205,120 195,120\" fill=\"#dc2626\"/><path d=\"M200 230 L200 190\" stroke=\"#dc2626\" stroke-width=\"4\"/><text x=\"150\" y=\"120\" font-size=\"20\" font-family=\"sans-serif\">←</text><text x=\"230\" y=\"120\" font-size=\"20\" font-family=\"sans-serif\">→</text><text x=\"200\" y=\"40\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#1e3a8a\">DIVERGENT</text><text x=\"200\" y=\"62\" font-size=\"14\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#1e3a8a\">mittelozeanischer Rücken</text><polygon points=\"380,130 470,130 600,130 600,180 470,180 380,180\" fill=\"#a16207\"/><polygon points=\"380,130 470,130 520,250 470,250\" fill=\"#854d0e\"/><polygon points=\"470,130 520,70 570,130\" fill=\"#57534e\"/><polygon points=\"512,80 528,80 520,60\" fill=\"#dc2626\"/><text x=\"430\" y=\"120\" font-size=\"20\" font-family=\"sans-serif\">→</text><text x=\"490\" y=\"40\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#1e3a8a\">KONVERGENT</text><text x=\"490\" y=\"62\" font-size=\"14\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#1e3a8a\">Subduktion + Vulkan</text></svg>",
   "caption": "Links entfernen sich zwei Platten voneinander und Magma steigt auf; rechts taucht eine Platte unter die andere und speist einen Vulkan."
  },
  {
   "type": "alternatives",
   "title": "Andere Wege, es zu verstehen: Modelle und Beweise",
   "intro": "Niemand ist je in den Mantel hinabgestiegen. Woher wissen wir, wie die Erde aufgebaut ist? Mit Modellen, die uns beim Vorstellen helfen, und mit indirekten Beweisen.",
   "tabs": [
    {
     "label": "🥚 Das hart gekochte Ei",
     "html": "<p>Schneide ein hart gekochtes Ei in der Mitte durch: Schale, Eiweiß und Eigelb erinnern an Kruste, Mantel und Kern. Wenn du auf die Schale drückst, bricht sie in Stücke, die auf dem Eiweiß „schwimmen“: genau wie die Platten auf dem Mantel.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fefce8\"/><ellipse cx=\"160\" cy=\"150\" rx=\"110\" ry=\"130\" fill=\"#fff\" stroke=\"#a16207\" stroke-width=\"5\"/><circle cx=\"160\" cy=\"165\" r=\"62\" fill=\"#facc15\"/><text x=\"160\" y=\"172\" font-size=\"16\" text-anchor=\"middle\" fill=\"#713f12\">Eigelb</text><text x=\"160\" y=\"60\" font-size=\"16\" text-anchor=\"middle\" fill=\"#57534e\">Eiweiß</text><text x=\"300\" y=\"70\" font-size=\"17\" fill=\"#1f2937\">Schale → Kruste (dünn und starr, sie bricht)</text><text x=\"300\" y=\"120\" font-size=\"17\" fill=\"#1f2937\">Eiweiß → Mantel (fest, aber „plastisch“)</text><text x=\"300\" y=\"170\" font-size=\"17\" fill=\"#1f2937\">Eigelb → Kern (in der Mitte, dicht)</text><text x=\"300\" y=\"230\" font-size=\"15\" fill=\"#b91c1c\">Achtung: im Verhältnis ist die Kruste</text><text x=\"300\" y=\"252\" font-size=\"15\" fill=\"#b91c1c\">noch dünner als die Schale!</text></svg>"
    },
    {
     "label": "🍑 Der Pfirsich",
     "html": "<p>Ein aufgeschnittener Pfirsich hat vier Teile: die dünne Haut, das dicke Fruchtfleisch, den harten Stein und den Kern darin. Das ist ein Modell mit vier Schichten, wie die Erde, deren Kern in einen äußeren und einen inneren geteilt ist.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fff7ed\"/><circle cx=\"160\" cy=\"150\" r=\"125\" fill=\"#fdba74\" stroke=\"#c2410c\" stroke-width=\"4\"/><path d=\"M160,150 L160,25 A125,125 0 0 1 285,150 Z\" fill=\"#fde68a\" stroke=\"#c2410c\" stroke-width=\"2\"/><ellipse cx=\"160\" cy=\"150\" rx=\"55\" ry=\"68\" fill=\"#92400e\"/><ellipse cx=\"160\" cy=\"150\" rx=\"20\" ry=\"26\" fill=\"#78350f\" stroke=\"#fde68a\" stroke-dasharray=\"3 3\"/><text x=\"310\" y=\"80\" font-size=\"17\" fill=\"#1f2937\">Haut → Kruste</text><text x=\"310\" y=\"130\" font-size=\"17\" fill=\"#1f2937\">Fruchtfleisch → Mantel</text><text x=\"310\" y=\"180\" font-size=\"17\" fill=\"#1f2937\">Stein → äußerer Kern</text><text x=\"310\" y=\"230\" font-size=\"17\" fill=\"#1f2937\">Samen → innerer Kern</text></svg>"
    },
    {
     "label": "🌊 Die seismischen Wellen",
     "html": "<p>Das ist der echte Beweis. Die Erdbebenwellen durchqueren die Erde: Die <b>P-Wellen</b> gehen durch Feststoffe und Flüssigkeiten, die <b>S-Wellen</b> nur durch Feststoffe. Auf der anderen Seite des Planeten gibt es eine <b>Schattenzone</b>, in die keine S-Wellen gelangen: Das heißt, dass in einer bestimmten Tiefe eine <b>Flüssigkeit</b> liegt, der äußere Kern. So entdeckte R. D. Oldham (1906) den Kern, B. Gutenberg (1914) maß seine Tiefe (etwa 2900 km) und die Dänin Inge Lehmann (1936) fand den festen inneren Kern.</p>",
     "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"320\" fill=\"#0f172a\"/><circle cx=\"300\" cy=\"160\" r=\"140\" fill=\"#ea580c\"/><circle cx=\"300\" cy=\"160\" r=\"77\" fill=\"#facc15\"/><circle cx=\"300\" cy=\"160\" r=\"27\" fill=\"#fef9c3\"/><circle cx=\"300\" cy=\"20\" r=\"7\" fill=\"#fff\"/><text x=\"312\" y=\"16\" font-size=\"14\" fill=\"#fff\">Erdbeben</text><path d=\"M300,20 Q215,80 175,225\" stroke=\"#60a5fa\" stroke-width=\"3\" fill=\"none\"/><path d=\"M300,20 Q385,80 425,225\" stroke=\"#60a5fa\" stroke-width=\"3\" fill=\"none\"/><path d=\"M300,20 L300,300\" stroke=\"#a7f3d0\" stroke-width=\"3\" stroke-dasharray=\"7 4\"/><path d=\"M178,235 A140,140 0 0 0 422,235\" stroke=\"#f87171\" stroke-width=\"8\" fill=\"none\" opacity=\".7\"/><text x=\"300\" y=\"315\" font-size=\"14\" text-anchor=\"middle\" fill=\"#fecaca\">Schattenzone der S-Wellen</text><text x=\"20\" y=\"40\" font-size=\"14\" fill=\"#93c5fd\">S-Wellen: nur in Feststoffen</text><text x=\"20\" y=\"62\" font-size=\"14\" fill=\"#a7f3d0\">P-Wellen: Feststoffe und Flüssigkeiten</text></svg>"
    },
    {
     "label": "🍪 Kekse mit Creme",
     "html": "<p>Nimm einen Keks mit Cremefüllung und brich ihn in zwei Teile: Die beiden Stücke sind die <b>Platten</b>, die Creme ist der Mantel, der sich verformt. Zieh sie auseinander (<b>divergente</b> Grenze): Die Creme quillt in der Mitte heraus wie das Magma an den Rücken. Schieb sie gegeneinander (<b>konvergente</b> Grenze): Ein Stück hebt sich oder rutscht unter das andere, wie bei Gebirgen und Tiefseegräben. Lass sie seitlich aneinander entlangrutschen (<b>Transformgrenze</b>): Sie verhaken sich und schnellen dann los, wie bei einem Erdbeben.</p>"
    },
    {
     "label": "🏔️ 3D-Landschaft",
     "html": "<p>Dreh die Landschaft und tippe ihre Teile an: Vulkan, Berg, Meer … Jeder ist das Ergebnis der Bewegungen im Erdinneren oder der Erosion.</p>",
     "scene": "terrain",
     "options": {
      "features": {
       "volcano": {
        "label": "Vulkan",
        "html": "<p>Er entsteht dort, wo Magma an die Oberfläche steigt: an den Plattengrenzen (Ätna, Vulkane der Anden) oder über einem „Hotspot“ (Hawaii).</p>"
       },
       "mountain": {
        "label": "Gebirgskette",
        "html": "<p>Sie entsteht aus dem Zusammenstoß von Platten (Alpen, Himalaya): Die Kruste faltet sich und hebt sich.</p>"
       },
       "sea": {
        "label": "Meer",
        "html": "<p>Unter den Meeren ist die Kruste ozeanisch: dünner (5–10 km) und schwerer als die kontinentale.</p>"
       }
      }
     }
    }
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz 1",
   "questions": [
    {
     "type": "mc",
     "q": "Welche Schicht der Erde ist flüssig?",
     "options": [
      "Kruste",
      "Mantel",
      "Äußerer Kern",
      "Innerer Kern"
     ],
     "answer": 2,
     "explain": "Der äußere Kern besteht aus geschmolzenem Eisen und Nickel; das beweist die Tatsache, dass die S-Wellen ihn nicht durchqueren."
    },
    {
     "type": "num",
     "q": "Wie groß ist der Erdradius ungefähr in km?",
     "answer": 6371,
     "tol": 30,
     "unit": "km",
     "explain": "Etwa 6371 km."
    },
    {
     "type": "text",
     "q": "Wie hieß der einzige Superkontinent vor etwa 250 Millionen Jahren?",
     "answer": [
      "pangaea",
      "pangäa",
      "die pangaea",
      "die pangäa"
     ],
     "explain": "Die Pangaea, das bedeutet „ganze Erde“."
    }
   ]
  },
  {
   "type": "text",
   "title": "4. Die Vulkane",
   "html": "<p>Ein <b>Vulkan</b> ist ein Riss in der Kruste, aus dem <b>Magma</b> austritt, gasreiche Gesteinsschmelze. Wenn sie die Oberfläche erreicht, heißt sie <b>Lava</b>.</p><ul><li><b>Schildvulkane</b> (Hawaii): dünnflüssige, kieselsäurearme Lava, <b>effusive</b>, ruhige Ausbrüche; breite, wenig steile Form.</li><li><b>Schichtvulkane</b> (Vesuv, teils der Ätna, Fuji): zähflüssige, gasreiche Lava, <b>explosive</b> Ausbrüche mit Asche, Lapilli, Bomben und <b>Glutwolken</b> (pyroklastische Ströme).</li></ul><p>Phänomene des Vulkanismus: <b>Geysire</b>, <b>Fumarolen</b>, <b>heiße Quellen</b>, Borsäure-Dampfquellen (Larderello in der Toskana, wo 1904 die erste Glühbirne mit geothermischer Energie aufleuchtete).</p>"
  },
  {
   "type": "widget",
   "title": "Die Teile des Vulkans",
   "widget": "labelDiagram",
   "options": {
    "svg": "<svg viewBox=\"0 0 600 360\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"360\" fill=\"#e0f2fe\"/><ellipse cx=\"300\" cy=\"40\" rx=\"120\" ry=\"28\" fill=\"#9ca3af\" opacity=\"0.8\"/><ellipse cx=\"250\" cy=\"55\" rx=\"60\" ry=\"20\" fill=\"#6b7280\" opacity=\"0.8\"/><polygon points=\"60,280 270,90 330,90 540,280\" fill=\"#78716c\"/><polygon points=\"120,240 280,110 320,110 480,240\" fill=\"#a8a29e\" opacity=\"0.6\"/><rect x=\"0\" y=\"280\" width=\"600\" height=\"80\" fill=\"#57534e\"/><ellipse cx=\"300\" cy=\"325\" rx=\"110\" ry=\"28\" fill=\"#ea580c\"/><rect x=\"290\" y=\"95\" width=\"20\" height=\"230\" fill=\"#ea580c\"/><path d=\"M310 200 L420 200\" stroke=\"#ea580c\" stroke-width=\"10\"/><path d=\"M305 95 Q340 140 360 220 Q370 250 390 270\" stroke=\"#f97316\" stroke-width=\"10\" fill=\"none\"/></svg>",
    "spots": [
     {
      "x": 300,
      "y": 325,
      "label": "Magmakammer"
     },
     {
      "x": 300,
      "y": 230,
      "label": "Hauptschlot"
     },
     {
      "x": 300,
      "y": 92,
      "label": "Krater"
     },
     {
      "x": 415,
      "y": 200,
      "label": "Nebenschlot"
     },
     {
      "x": 300,
      "y": 40,
      "label": "Asche- und Gaswolke"
     },
     {
      "x": 385,
      "y": 265,
      "label": "Lavastrom"
     },
     {
      "x": 150,
      "y": 250,
      "label": "Vulkankegel"
     }
    ]
   },
   "caption": "Klicke auf jeden Punkt und wähle den richtigen Namen."
  },
  {
   "type": "3d",
   "title": "3D-Landschaft: Formen, die durch die Bewegung der Erde entstanden sind",
   "scene": "terrain",
   "options": {
    "features": {
     "volcano": {
      "label": "Vulkan",
      "html": "<p>Das Magma steigt aus der <b>Magmakammer</b> durch den <b>Schlot</b> auf und tritt aus dem <b>Krater</b> aus. Schicht um Schicht baut Lava und Asche den Kegel auf. In Italien: Ätna, Vesuv, Stromboli, Phlegräische Felder.</p>"
     },
     "mountain": {
      "label": "Gebirgskette",
      "html": "<p>Die Alpen entstanden aus dem Zusammenstoß der Afrikanischen Platte (mit der Adriatischen Mikroplatte) und der Eurasischen Platte, vor etwa 65 Millionen Jahren beginnend. Der Zusammenstoß dauert bis heute an: Deshalb gibt es in Italien Erdbeben.</p>"
     },
     "peak": {
      "label": "Gipfel",
      "html": "<p>Die höchsten Gipfel sind die jüngsten: Alte Gebirge (wie der Ural) wurden in Hunderten von Millionen Jahren von der Erosion abgetragen.</p>"
     },
     "valley": {
      "label": "Tal",
      "html": "<p>Von Flüssen (V-Form) oder Gletschern (U-Form) ausgehöhlt. Die Erosion wirkt der Hebung der Gebirge entgegen.</p>"
     },
     "sea": {
      "label": "Meer",
      "html": "<p>Die Ozeanböden weiten sich an den Rücken und tauchen in den Gräben (Subduktion) in den Mantel ab. Der älteste Meeresboden ist „nur“ etwa 180 Millionen Jahre alt.</p>"
     },
     "island": {
      "label": "Insel",
      "html": "<p>Viele Inseln sind vulkanisch: entstanden durch unterseeische Ausbrüche, wie die Äolischen Inseln, Island (auf dem Mittelatlantischen Rücken) und Hawaii (auf einem Hotspot).</p>"
     },
     "lake": {
      "label": "See",
      "html": "<p>Einige Seen liegen in alten Kratern (Bolsenasee, Braccianosee, Albanersee): Das sind Vulkanseen. Andere wurden von Gletschern ausgehöhlt, wie der Gardasee.</p>"
     },
     "plain": {
      "label": "Ebene",
      "html": "<p>Die Poebene ist ein riesiger Graben, der mit dem Schutt gefüllt wurde, den der Po und seine Nebenflüsse herantrugen. Unter den Sedimenten bewegen sich die Platten weiter.</p>"
     }
    }
   },
   "caption": "Dreh die Landschaft und tippe die Teile an, um zu lesen, wie sie entstanden sind."
  },
  {
   "type": "3d",
   "title": "Der Globus der Vulkane und Erdbeben",
   "scene": "globe",
   "options": {
    "points": [
     {
      "lat": -38.24,
      "lon": -73.05,
      "label": "Valdivia, Chile – Erdbeben 1960 (M 9,5, das stärkste je gemessene)",
      "color": "#dc2626"
     },
     {
      "lat": -16.5,
      "lon": -72,
      "label": "Peruanische Anden",
      "color": "#f97316"
     },
     {
      "lat": 19,
      "lon": -98.6,
      "label": "Popocatépetl, Mexiko",
      "color": "#f97316"
     },
     {
      "lat": 46.2,
      "lon": -122.18,
      "label": "Mount St. Helens, USA – Ausbruch 1980",
      "color": "#f97316"
     },
     {
      "lat": 61.3,
      "lon": -152.25,
      "label": "Alaska",
      "color": "#f97316"
     },
     {
      "lat": 56.06,
      "lon": 160.64,
      "label": "Kamtschatka",
      "color": "#f97316"
     },
     {
      "lat": 35.36,
      "lon": 138.73,
      "label": "Fuji, Japan",
      "color": "#f97316"
     },
     {
      "lat": 15.14,
      "lon": 120.35,
      "label": "Pinatubo, Philippinen – Ausbruch 1991",
      "color": "#f97316"
     },
     {
      "lat": -6.1,
      "lon": 105.42,
      "label": "Krakatau, Indonesien – Ausbruch 1883",
      "color": "#f97316"
     },
     {
      "lat": 19.41,
      "lon": -155.29,
      "label": "Kīlauea, Hawaii (Hotspot)",
      "color": "#eab308"
     },
     {
      "lat": 63.63,
      "lon": -19.62,
      "label": "Island – Mittelatlantischer Rücken",
      "color": "#eab308"
     },
     {
      "lat": 37.75,
      "lon": 14.99,
      "label": "Ätna",
      "color": "#f97316"
     },
     {
      "lat": 40.82,
      "lon": 14.43,
      "label": "Vesuv – Pompeji 79 n. Chr.",
      "color": "#f97316"
     },
     {
      "lat": 38.3,
      "lon": 142.37,
      "label": "Tōhoku, Japan – Erdbeben und Tsunami 2011",
      "color": "#dc2626"
     },
     {
      "lat": 3.3,
      "lon": 95.98,
      "label": "Sumatra – Erdbeben und Tsunami 2004",
      "color": "#dc2626"
     },
     {
      "lat": 38.2,
      "lon": 15.55,
      "label": "Messina – Erdbeben 1908",
      "color": "#dc2626"
     },
     {
      "lat": 0,
      "lon": -17,
      "label": "",
      "color": "#eab308"
     },
     {
      "lat": -35,
      "lon": -15,
      "label": "",
      "color": "#eab308"
     }
    ],
    "routes": [
     {
      "points": [
       0,
       1,
       2,
       3,
       4,
       5,
       6,
       7,
       8
      ],
      "color": "#ef4444"
     },
     {
      "points": [
       10,
       16,
       17
      ],
      "color": "#eab308"
     }
    ]
   },
   "caption": "In Rot der „Pazifische Feuerring“, wo etwa 75 % der aktiven Vulkane liegen; in Gelb ein Abschnitt des Mittelatlantischen Rückens. Dreh den Globus: Vulkane und Erdbeben konzentrieren sich entlang der Plattengrenzen."
  },
  {
   "type": "example",
   "title": "Beispiel: die italienischen Vulkane",
   "html": "<p>Italien ist eines der vulkanreichsten Länder Europas, weil es dort liegt, wo die Afrikanische Platte gegen die Eurasische drückt.</p><ul><li><b>Ätna</b> (Sizilien, etwa 3350 m): der höchste aktive Vulkan Europas, häufige Ausbrüche.</li><li><b>Stromboli</b>: seit Tausenden von Jahren kleine, ständige Explosionen alle 10–20 Minuten („Leuchtturm des Mittelmeers“).</li><li><b>Vesuv</b>: begrub im Jahr <b>79 n. Chr.</b> Pompeji und Herculaneum; der letzte Ausbruch war 1944. Heute wird er Tag und Nacht vom Osservatorio Vesuviano überwacht, dem ältesten der Welt (1841).</li><li><b>Phlegräische Felder</b>: eine große Caldera bei Neapel, wo sich der Boden hebt und senkt (<b>Bradyseismos</b>).</li></ul>"
  },
  {
   "type": "text",
   "title": "5. Die Erdbeben",
   "html": "<p>Die Gesteine der Kruste, von der Plattenbewegung gedrückt, speichern Energie, bis sie entlang einer <b>Verwerfung</b> brechen. Die Energie wird schlagartig als <b>seismische Wellen</b> frei.</p><ul><li><b>Hypozentrum</b>: der Punkt in der Tiefe, an dem der Bruch beginnt.</li><li><b>Epizentrum</b>: der Punkt an der Oberfläche genau über dem Hypozentrum, wo das Erdbeben am stärksten ist.</li></ul><p>Erdbeben werden mit dem <b>Seismographen</b> aufgezeichnet und mit zwei Skalen gemessen:</p><ul><li><b>Magnitude</b> (Richter, heute Momentmagnitude): misst die freigesetzte <b>Energie</b>. Jede Stufe mehr entspricht etwa <b>32-mal</b> mehr Energie.</li><li><b>Mercalli-Skala</b> (12 Grade): misst die <b>Auswirkungen</b> auf Menschen und Gebäude.</li></ul>"
  },
  {
   "type": "example",
   "title": "Beispiel: Was tun bei einem Erdbeben",
   "html": "<ol><li><b>Drinnen</b>: Geh unter einen stabilen Tisch oder in die Nähe einer tragenden Wand; halte dich von Fenstern, Glas und Möbeln fern, die umfallen können.</li><li><b>Benutze den Aufzug nicht</b> und renne während der Erschütterung nicht die Treppe hinunter.</li><li><b>Im Freien</b>: Entferne dich von Gebäuden, Bäumen und Stromleitungen.</li><li>Nach der Erschütterung geh ruhig hinaus und begib dich zum <b>Sammelplatz</b>, den der Zivilschutzplan deiner Gemeinde vorsieht.</li></ol><p>Erdbeben lassen sich nicht vorhersagen, aber man kann <b>erdbebensichere Gebäude</b> bauen, die den Erschütterungen standhalten: Das ist die echte Vorsorge.</p>"
  },
  {
   "type": "curiosity",
   "title": "Der Himalaya wächst noch",
   "html": "<p>Indien bewegt sich nach Norden und drückt seit etwa 50 Millionen Jahren gegen Asien: Der Zusammenstoß hat den <b>Himalaya</b> aufgefaltet. Der Everest (8849 m) wächst noch um einige Millimeter pro Jahr. Auf seinen Gipfeln findet man Fossilien von Meerestieren: Einst war dieses Gestein der Grund eines Ozeans!</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz 2",
   "questions": [
    {
     "type": "mc",
     "q": "Der Punkt an der Oberfläche über dem Ursprung des Erdbebens heißt:",
     "options": [
      "Hypozentrum",
      "Epizentrum",
      "Verwerfung",
      "Krater"
     ],
     "answer": 1,
     "explain": "Das Epizentrum liegt über dem Hypozentrum."
    },
    {
     "type": "mc",
     "q": "Welche Skala misst die Auswirkungen eines Erdbebens?",
     "options": [
      "Richter",
      "Mercalli",
      "Celsius",
      "Beaufort"
     ],
     "answer": 1,
     "explain": "Die Mercalli-Skala misst Schäden und Auswirkungen; die Magnitude die Energie."
    },
    {
     "type": "tf",
     "q": "Der Vesuv zerstörte Pompeji im Jahr 79 n. Chr.",
     "answer": true,
     "explain": "Der Ausbruch begrub Pompeji, Herculaneum und Stabiae."
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Begriffslandkarte: von der Kontinentalverschiebung zur Plattentektonik",
   "nodes": [
    {
     "id": "indizi",
     "label": "Wegeners Hinweise",
     "x": 20,
     "y": 8,
     "color": "#16a34a",
     "html": "<p>Küsten, die zusammenpassen (Südamerika–Afrika), gleiche Fossilien (Mesosaurus, Glossopteris) auf weit entfernten Kontinenten, gleiche Gesteine, Spuren alter Gletscher in den Tropen.</p>",
     "why": "<p>Wenn die Kontinente immer dort gewesen wären, wo sie heute sind, wie hätte ein Süßwasserreptil wie der Mesosaurus den Ozean durchqueren sollen? Die einfachste Erklärung ist, dass die Kontinente einst verbunden waren.</p>"
    },
    {
     "id": "wegener",
     "label": "Kontinentalverschiebung (1912)",
     "x": 50,
     "y": 8,
     "color": "#2563eb",
     "html": "<p>Alfred Wegener: Die Kontinente bewegen sich; vor 250 Millionen Jahren bildeten sie die Pangaea.</p>",
     "why": "<p>Wegener war Meteorologe, kein Geologe, und seine Ideen wurden lange abgelehnt.</p>"
    },
    {
     "id": "motore",
     "label": "Das Problem: Welcher Motor?",
     "x": 80,
     "y": 8,
     "color": "#b91c1c",
     "html": "<p>Wegener konnte nicht erklären, <b>welche Kraft</b> die Kontinente bewegt.</p>",
     "why": "<p>Eine gute wissenschaftliche Theorie muss nicht nur das „Was“, sondern auch das „Wie“ erklären. Ohne einen Mechanismus nahm die Mehrheit der Geologen der damaligen Zeit sie nicht an. Das ist ein Beispiel dafür, wie die Wissenschaft vorankommt: Ideen werden auf die Probe gestellt.</p>"
    },
    {
     "id": "onde",
     "label": "Seismische Wellen und innerer Aufbau",
     "x": 20,
     "y": 40,
     "color": "#ea580c",
     "html": "<p>Kruste, Mantel, flüssiger äußerer Kern, fester innerer Kern.</p>",
     "why": "<p>P- und S-Wellen ändern Geschwindigkeit und Richtung, wenn sie von einem Material ins andere gelangen: Wenn man sie an Tausenden Messstationen untersucht, lässt sich das Erdinnere rekonstruieren (Oldham, Gutenberg, Lehmann, Mohorovičić).</p>"
    },
    {
     "id": "fondali",
     "label": "Rücken und Ozeanböden",
     "x": 50,
     "y": 40,
     "color": "#0891b2",
     "html": "<p>In den 1950er-Jahren werden die mittelozeanischen Rücken entdeckt, unterseeische Gebirge von Zehntausenden km Länge.</p>",
     "why": "<p>Marie Tharp und Bruce Heezen kartierten den Atlantikboden mit Echoloten und fanden einen langen zentralen Graben. Harry Hess (1962) schlug die <b>Ozeanbodenspreizung</b> vor: Neue Kruste entsteht an den Rücken und breitet sich aus.</p>"
    },
    {
     "id": "magnetismo",
     "label": "Magnetische Streifen",
     "x": 80,
     "y": 40,
     "color": "#7c3aed",
     "html": "<p>Die Gesteine des Meeresbodens zeichnen das Magnetfeld der Erde auf, das sich im Lauf der Zeit umkehrt.</p>",
     "why": "<p>Vine und Matthews (1963) bemerkten magnetische Streifen, die zu beiden Seiten der Rücken symmetrisch sind: der Beweis, dass sich der Meeresboden in der Mitte bildet und sich wie auf einem Förderband entfernt.</p>"
    },
    {
     "id": "convezione",
     "label": "Konvektionsströmungen im Mantel",
     "x": 30,
     "y": 70,
     "color": "#dc2626",
     "html": "<p>Die innere Wärme lässt heißes Gestein langsam aufsteigen und kaltes absinken.</p>",
     "why": "<p>Es ist dasselbe Phänomen wie beim kochenden Wasser im Topf, nur sehr langsam (wenige Zentimeter pro Jahr). Es ist der „Motor“, der Wegener fehlte.</p>"
    },
    {
     "id": "tettonica",
     "label": "Plattentektonik (1960er-Jahre)",
     "x": 65,
     "y": 70,
     "color": "#1d4ed8",
     "html": "<p>Die Lithosphäre ist in Platten geteilt, die sich 2–10 cm pro Jahr bewegen.</p>",
     "why": "<p>Sie vereint alle Beweise: innerer Aufbau, Rücken, Magnetismus, Verteilung von Vulkanen und Erdbeben. Heute messen GPS-Satelliten direkt die Verschiebung der Kontinente: Der Atlantik weitet sich um etwa 2–3 cm pro Jahr.</p>"
    },
    {
     "id": "effetti",
     "label": "Vulkane, Erdbeben, Gebirge",
     "x": 50,
     "y": 92,
     "color": "#475569",
     "html": "<p>Sie konzentrieren sich entlang der Plattengrenzen.</p>",
     "why": "<p>Wo sich die Platten entfernen, steigt Magma auf; wo sie zusammenstoßen, bilden sich Gebirge und Gräben; wo sie aneinander vorbeigleiten, baut sich Spannung auf, die sich in Erdbeben entlädt. Deshalb hat Italien, an der Grenze zwischen Afrikanischer und Eurasischer Platte, Vulkane und Erdbeben.</p>"
    }
   ],
   "edges": [
    [
     "indizi",
     "wegener",
     "führen zu"
    ],
    [
     "wegener",
     "motore",
     "fehlt"
    ],
    [
     "onde",
     "convezione",
     "enthüllen den Mantel"
    ],
    [
     "fondali",
     "tettonica",
     "Beweis"
    ],
    [
     "magnetismo",
     "tettonica",
     "Beweis"
    ],
    [
     "motore",
     "convezione",
     "Antwort"
    ],
    [
     "convezione",
     "tettonica",
     "bewegt"
    ],
    [
     "wegener",
     "tettonica",
     "wird zu"
    ],
    [
     "tettonica",
     "effetti",
     "erklärt"
    ]
   ]
  }
 ],
 "glossary": [
  {
   "t": "Lithosphäre",
   "d": "Starre Hülle aus Kruste und oberem Teil des Mantels, in Platten geteilt."
  },
  {
   "t": "Asthenosphäre",
   "d": "Heißer, plastischer Teil des Mantels, auf dem sich die Platten bewegen."
  },
  {
   "t": "Subduktion",
   "d": "Vorgang, bei dem eine Platte unter eine andere abtaucht."
  },
  {
   "t": "Magma",
   "d": "Gesteinsschmelze mit Gasen unter der Oberfläche. An der Oberfläche heißt sie Lava."
  },
  {
   "t": "Verwerfung",
   "d": "Bruch in der Kruste, entlang dem sich Gesteine verschieben."
  },
  {
   "t": "Hypozentrum",
   "d": "Punkt in der Tiefe, an dem ein Erdbeben entsteht."
  },
  {
   "t": "Epizentrum",
   "d": "Punkt an der Oberfläche über dem Hypozentrum."
  },
  {
   "t": "Magnitude",
   "d": "Maß für die von einem Erdbeben freigesetzte Energie."
  },
  {
   "t": "Bradyseismos",
   "d": "Langsame Hebung und Senkung des Bodens in vulkanischen Gebieten."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "order",
    "q": "Bringe die Schichten von der Oberfläche zum Zentrum in die richtige Reihenfolge",
    "items": [
     "Kruste",
     "Mantel",
     "Äußerer Kern",
     "Innerer Kern"
    ],
    "explain": "Kruste, Mantel, äußerer Kern (flüssig), innerer Kern (fest)."
   },
   {
    "type": "mc",
    "q": "Woraus besteht der Kern hauptsächlich?",
    "options": [
     "Granit",
     "Eisen und Nickel",
     "Silizium und Sauerstoff",
     "Wasser"
    ],
    "answer": 1,
    "explain": "Eisen und Nickel."
   },
   {
    "type": "tf",
    "q": "Der innere Kern ist trotz der sehr hohen Temperatur fest.",
    "answer": true,
    "explain": "Der enorme Druck verhindert, dass das Eisen schmilzt."
   },
   {
    "type": "mc",
    "q": "Wer stellte die Theorie der Kontinentalverschiebung auf?",
    "options": [
     "Darwin",
     "Wegener",
     "Galilei",
     "Richter"
    ],
    "answer": 1,
    "explain": "Alfred Wegener, 1912."
   },
   {
    "type": "mc",
    "q": "Was geschieht an einer divergenten Plattengrenze?",
    "options": [
     "Die Platten stoßen zusammen",
     "Die Platten entfernen sich und neue Kruste entsteht",
     "Die Platten gleiten seitlich aneinander vorbei",
     "Nichts"
    ],
    "answer": 1,
    "explain": "Magma steigt auf und bildet neue ozeanische Kruste: So ist es bei den mittelozeanischen Rücken."
   },
   {
    "type": "mc",
    "q": "Explosive Ausbrüche sind typisch für Laven, die:",
    "options": [
     "dünnflüssig und gasarm sind",
     "zähflüssig und gasreich sind",
     "kalt sind",
     "aus Wasser bestehen"
    ],
    "answer": 1,
    "explain": "Das in der zähen Lava eingeschlossene Gas explodiert."
   },
   {
    "type": "text",
    "q": "Wie heißt der höchste aktive Vulkan Europas?",
    "answer": [
     "ätna",
     "der ätna",
     "aetna",
     "etna",
     "der etna"
    ],
    "explain": "Der Ätna auf Sizilien."
   },
   {
    "type": "tf",
    "q": "Die Magnitude misst die Schäden an Gebäuden.",
    "answer": false,
    "explain": "Die Magnitude misst die Energie; Schäden misst man mit der Mercalli-Skala."
   },
   {
    "type": "mc",
    "q": "Bei einem Erdbeben im Haus ist es am besten:",
    "options": [
     "den Aufzug zu nehmen",
     "unter einen stabilen Tisch zu gehen",
     "sich aus dem Fenster zu beugen",
     "die Treppe hinunterzurennen"
    ],
    "answer": 1,
    "explain": "Man geht unter einen Tisch oder in die Nähe einer tragenden Wand."
   },
   {
    "type": "mc",
    "q": "Wie entstand der Himalaya?",
    "options": [
     "Aus einem Vulkan",
     "Aus dem Zusammenstoß der Indischen und der Eurasischen Platte",
     "Durch Erosion",
     "Durch einen Meteoriten"
    ],
    "answer": 1,
    "explain": "Er ist ein Gebirge, das an einer konvergenten Plattengrenze entstand."
   },
   {
    "type": "num",
    "q": "Wie viele km tief liegt ungefähr die Grenze zwischen Mantel und Kern?",
    "answer": 2900,
    "tol": 100,
    "unit": "km",
    "explain": "Etwa 2900 km."
   }
  ]
 }
});
