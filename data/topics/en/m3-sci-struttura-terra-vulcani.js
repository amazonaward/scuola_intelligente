TOPIC('en', {
  id: "m3-sci-struttura-terra-vulcani",
  title: "The structure of the Earth, volcanoes and earthquakes",
  intro: "The Earth seems still, but beneath our feet it is a living planet: it is made of layers with extremely high temperatures, its surface is divided into plates that move and, where they collide or pull apart, volcanoes, earthquakes and mountains are born.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. How do we know what's inside the Earth?",
      html: "<p>The deepest hole ever dug, the Kola Superdeep Borehole in Russia, reaches about <b>12 km</b>: less than 0.2% of the Earth's radius (about <b>6371 km</b>). So how do we know what's inside?</p><p>Thanks to the <b>seismic waves</b> of earthquakes: they travel through the Earth and change speed and direction when they pass through different materials. <b>S waves</b> cannot pass through liquids: that's how we know that the <b>outer core is liquid</b>.</p>"
    },
    {
      type: "3d",
      title: "The layers of the Earth",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#65a30d", label: "Crust (5–70 km)" },
          { r: 0.97, color: "#ea580c", label: "Mantle (down to 2900 km)" },
          { r: 0.55, color: "#facc15", label: "Liquid outer core" },
          { r: 0.19, color: "#fef9c3", label: "Solid inner core" }
        ]
      },
      caption: "Turn the model: the cut-away slice shows the layers. The proportions of the radii are almost real (the crust is extremely thin!)."
    },
    {
      type: "text",
      title: "2. The layers, one by one",
      html: "<table><tr><th>Layer</th><th>Depth</th><th>State and composition</th><th>Temperature</th></tr><tr><td><b>Crust</b></td><td>0–35 km (continents, up to 70 under mountain ranges); 5–10 km (oceans)</td><td>Solid, granite rocks (continental) and basalt rocks (oceanic)</td><td>up to ~1000 °C at the base</td></tr><tr><td><b>Mantle</b></td><td>down to ~2900 km</td><td>Rocks made of iron and magnesium silicates; solid but able to «flow» slowly</td><td>1000–3700 °C</td></tr><tr><td><b>Outer core</b></td><td>2900–5150 km</td><td>Liquid, iron and nickel</td><td>~4000–5000 °C</td></tr><tr><td><b>Inner core</b></td><td>5150–6371 km</td><td>Solid (because of the enormous pressure), iron and nickel</td><td>~5000–5500 °C, like the surface of the Sun</td></tr></table><p>The crust plus the upper, rigid part of the mantle form the <b>lithosphere</b> (about 100 km), which «floats» on the hotter, softer <b>asthenosphere</b>.</p>"
    },
    {
      type: "curiosity",
      title: "The Earth is a magnet",
      html: "<p>The moving liquid iron in the outer core generates the <b>Earth's magnetic field</b>: that's why a compass needle points north. The magnetic field protects us from the solar wind and creates the <b>polar auroras</b>. Over the Earth's history the magnetic poles have flipped hundreds of times!</p>"
    },
    {
      type: "text",
      title: "3. Plate tectonics",
      html: "<p>In 1912 the German <b>Alfred Wegener</b> noticed that the coasts of South America and Africa fit together like jigsaw pieces and proposed <b>continental drift</b>: 250–300 million years ago the land formed a single supercontinent, <b>Pangaea</b>.</p><p>Today we know that the lithosphere is divided into about <b>15 large plates</b> that move a few centimetres a year, pushed by <b>convection currents</b> in the mantle. The boundaries between plates can be:</p><ul><li><b>divergent</b>: the plates move apart, magma rises and creates new crust (ocean ridges, such as the Mid-Atlantic Ridge; Iceland);</li><li><b>convergent</b>: the plates collide; one can sink under the other (<b>subduction</b>), forming ocean trenches, volcanoes and mountain ranges (Andes, Himalayas, Alps);</li><li><b>transform</b>: the plates slide past each other (the San Andreas Fault, in California).</li></ul>"
    },
    {
      type: "svg",
      title: "Plate boundaries",
      svg: "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#e0f2fe\"/><rect x=\"0\" y=\"180\" width=\"600\" height=\"120\" fill=\"#fb923c\"/><text x=\"300\" y=\"285\" font-size=\"16\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#7c2d12\">mantle (asthenosphere): convection currents</text><rect x=\"0\" y=\"130\" width=\"190\" height=\"50\" fill=\"#a16207\"/><rect x=\"210\" y=\"130\" width=\"170\" height=\"50\" fill=\"#a16207\"/><polygon points=\"190,180 210,180 205,120 195,120\" fill=\"#dc2626\"/><path d=\"M200 230 L200 190\" stroke=\"#dc2626\" stroke-width=\"4\"/><text x=\"150\" y=\"120\" font-size=\"20\" font-family=\"sans-serif\">←</text><text x=\"230\" y=\"120\" font-size=\"20\" font-family=\"sans-serif\">→</text><text x=\"200\" y=\"40\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#1e3a8a\">DIVERGENT</text><text x=\"200\" y=\"62\" font-size=\"14\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#1e3a8a\">ocean ridge</text><polygon points=\"380,130 470,130 600,130 600,180 470,180 380,180\" fill=\"#a16207\"/><polygon points=\"380,130 470,130 520,250 470,250\" fill=\"#854d0e\"/><polygon points=\"470,130 520,70 570,130\" fill=\"#57534e\"/><polygon points=\"512,80 528,80 520,60\" fill=\"#dc2626\"/><text x=\"430\" y=\"120\" font-size=\"20\" font-family=\"sans-serif\">→</text><text x=\"490\" y=\"40\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#1e3a8a\">CONVERGENT</text><text x=\"490\" y=\"62\" font-size=\"14\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#1e3a8a\">subduction + volcano</text></svg>",
      caption: "On the left two plates move apart and magma rises; on the right one plate sinks under the other and feeds a volcano."
    },
    {
      type: "alternatives",
      title: "Other ways to understand it: models and evidence",
      intro: "Nobody has ever been down to the mantle. How do we know what the Earth is like? With models that help us imagine it and with indirect evidence.",
      tabs: [
        {
          label: "🥚 The hard-boiled egg",
          html: "<p>Cut a hard-boiled egg in half: shell, white and yolk are like crust, mantle and core. If you crack the shell it breaks into pieces that stay «floating» on the white: just like the plates on the mantle.</p>",
          svg: "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fefce8\"/><ellipse cx=\"160\" cy=\"150\" rx=\"110\" ry=\"130\" fill=\"#fff\" stroke=\"#a16207\" stroke-width=\"5\"/><circle cx=\"160\" cy=\"165\" r=\"62\" fill=\"#facc15\"/><text x=\"160\" y=\"172\" font-size=\"16\" text-anchor=\"middle\" fill=\"#713f12\">yolk</text><text x=\"160\" y=\"60\" font-size=\"16\" text-anchor=\"middle\" fill=\"#57534e\">white</text><text x=\"300\" y=\"70\" font-size=\"17\" fill=\"#1f2937\">shell → crust (thin and rigid, it breaks)</text><text x=\"300\" y=\"120\" font-size=\"17\" fill=\"#1f2937\">white → mantle (solid but «plastic»)</text><text x=\"300\" y=\"170\" font-size=\"17\" fill=\"#1f2937\">yolk → core (in the centre, dense)</text><text x=\"300\" y=\"230\" font-size=\"15\" fill=\"#b91c1c\">Careful: in proportion the crust</text><text x=\"300\" y=\"252\" font-size=\"15\" fill=\"#b91c1c\">is even thinner than the shell!</text></svg>"
        },
        {
          label: "🍑 The peach",
          html: "<p>A cut peach has four parts: the thin skin, the thick flesh, the hard stone and the seed inside. It's a four-layer model, like the Earth with its core divided into outer and inner.</p>",
          svg: "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fff7ed\"/><circle cx=\"160\" cy=\"150\" r=\"125\" fill=\"#fdba74\" stroke=\"#c2410c\" stroke-width=\"4\"/><path d=\"M160,150 L160,25 A125,125 0 0 1 285,150 Z\" fill=\"#fde68a\" stroke=\"#c2410c\" stroke-width=\"2\"/><ellipse cx=\"160\" cy=\"150\" rx=\"55\" ry=\"68\" fill=\"#92400e\"/><ellipse cx=\"160\" cy=\"150\" rx=\"20\" ry=\"26\" fill=\"#78350f\" stroke=\"#fde68a\" stroke-dasharray=\"3 3\"/><text x=\"310\" y=\"80\" font-size=\"17\" fill=\"#1f2937\">skin → crust</text><text x=\"310\" y=\"130\" font-size=\"17\" fill=\"#1f2937\">flesh → mantle</text><text x=\"310\" y=\"180\" font-size=\"17\" fill=\"#1f2937\">stone → outer core</text><text x=\"310\" y=\"230\" font-size=\"17\" fill=\"#1f2937\">seed → inner core</text></svg>"
        },
        {
          label: "🌊 Seismic waves",
          html: "<p>This is the real evidence. Earthquake waves travel through the Earth: <b>P waves</b> pass through solids and liquids, <b>S waves</b> only through solids. On the other side of the planet there is a <b>shadow zone</b> where S waves don't arrive: it means that at a certain depth there is a <b>liquid</b>, the outer core. That's how R. D. Oldham (1906) identified the core, B. Gutenberg (1914) measured its depth (about 2900 km) and the Dane Inge Lehmann (1936) discovered the solid inner core.</p>",
          svg: "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"320\" fill=\"#0f172a\"/><circle cx=\"300\" cy=\"160\" r=\"140\" fill=\"#ea580c\"/><circle cx=\"300\" cy=\"160\" r=\"77\" fill=\"#facc15\"/><circle cx=\"300\" cy=\"160\" r=\"27\" fill=\"#fef9c3\"/><circle cx=\"300\" cy=\"20\" r=\"7\" fill=\"#fff\"/><text x=\"312\" y=\"16\" font-size=\"14\" fill=\"#fff\">earthquake</text><path d=\"M300,20 Q215,80 175,225\" stroke=\"#60a5fa\" stroke-width=\"3\" fill=\"none\"/><path d=\"M300,20 Q385,80 425,225\" stroke=\"#60a5fa\" stroke-width=\"3\" fill=\"none\"/><path d=\"M300,20 L300,300\" stroke=\"#a7f3d0\" stroke-width=\"3\" stroke-dasharray=\"7 4\"/><path d=\"M178,235 A140,140 0 0 0 422,235\" stroke=\"#f87171\" stroke-width=\"8\" fill=\"none\" opacity=\".7\"/><text x=\"300\" y=\"315\" font-size=\"14\" text-anchor=\"middle\" fill=\"#fecaca\">S-wave shadow zone</text><text x=\"20\" y=\"40\" font-size=\"14\" fill=\"#93c5fd\">S waves: solids only</text><text x=\"20\" y=\"62\" font-size=\"14\" fill=\"#a7f3d0\">P waves: solids and liquids</text></svg>"
        },
        {
          label: "🍪 Biscuits and cream",
          html: "<p>Take a cream biscuit and break it in two: the two pieces are the <b>plates</b>, the cream is the mantle that deforms. Pull them apart (<b>divergent</b> boundary): the cream comes out in the middle like magma at the ridges. Push them against each other (<b>convergent</b> boundary): one rises or ends up under the other, as in mountain ranges and ocean trenches. Slide them sideways (<b>transform</b> boundary): they stick and then jerk, like in an earthquake.</p>"
        },
        {
          label: "🏔️ 3D landscape",
          html: "<p>Turn the landscape and tap its parts: volcano, mountains, sea… Each one is the result of the Earth's internal movements or of erosion.</p>",
          scene: "terrain",
          options: {
            features: {
              volcano: { label: "Volcano", html: "<p>It forms where magma rises to the surface: at plate boundaries (Etna, the volcanoes of the Andes) or above a «hot spot» (Hawaii).</p>" },
              mountain: { label: "Mountain range", html: "<p>It is born from the collision between plates (Alps, Himalayas): the crust folds and rises.</p>" },
              sea: { label: "Sea", html: "<p>Under the seas the crust is oceanic: thinner (5–10 km) and heavier than continental crust.</p>" }
            }
          }
        }
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz 1",
      questions: [
        { type: "mc", q: "Which layer of the Earth is liquid?", options: ["Crust", "Mantle", "Outer core", "Inner core"], answer: 2, explain: "The outer core is molten iron and nickel; the proof is that S waves don't pass through it." },
        { type: "num", q: "Roughly how long is the Earth's radius in km?", answer: 6371, tol: 30, unit: "km", explain: "About 6371 km." },
        { type: "text", q: "What was the name of the single supercontinent of about 250 million years ago?", answer: ["pangaea", "pangea"], explain: "Pangaea, which means «all the Earth»." }
      ]
    },
    {
      type: "text",
      title: "4. Volcanoes",
      html: "<p>A <b>volcano</b> is an opening in the crust from which <b>magma</b> comes out: molten rock rich in gas. When it reaches the surface it is called <b>lava</b>.</p><ul><li><b>Shield volcanoes</b> (Hawaii): runny lava poor in silica, gentle <b>effusive</b> eruptions; a wide, not very steep shape.</li><li><b>Stratovolcanoes</b> (Vesuvius, partly Etna, Fuji): sticky lava rich in gas, <b>explosive</b> eruptions with ash, lapilli, volcanic bombs and <b>pyroclastic flows</b>.</li></ul><p>Phenomena linked to volcanic activity: <b>geysers</b>, <b>fumaroles</b>, <b>hot springs</b>, steam vents (Larderello, in Tuscany, where in 1904 the first light bulb was lit using geothermal energy).</p>"
    },
    {
      type: "widget",
      title: "The parts of a volcano",
      widget: "labelDiagram",
      options: {
        svg: "<svg viewBox=\"0 0 600 360\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"360\" fill=\"#e0f2fe\"/><ellipse cx=\"300\" cy=\"40\" rx=\"120\" ry=\"28\" fill=\"#9ca3af\" opacity=\"0.8\"/><ellipse cx=\"250\" cy=\"55\" rx=\"60\" ry=\"20\" fill=\"#6b7280\" opacity=\"0.8\"/><polygon points=\"60,280 270,90 330,90 540,280\" fill=\"#78716c\"/><polygon points=\"120,240 280,110 320,110 480,240\" fill=\"#a8a29e\" opacity=\"0.6\"/><rect x=\"0\" y=\"280\" width=\"600\" height=\"80\" fill=\"#57534e\"/><ellipse cx=\"300\" cy=\"325\" rx=\"110\" ry=\"28\" fill=\"#ea580c\"/><rect x=\"290\" y=\"95\" width=\"20\" height=\"230\" fill=\"#ea580c\"/><path d=\"M310 200 L420 200\" stroke=\"#ea580c\" stroke-width=\"10\"/><path d=\"M305 95 Q340 140 360 220 Q370 250 390 270\" stroke=\"#f97316\" stroke-width=\"10\" fill=\"none\"/></svg>",
        spots: [
          { x: 300, y: 325, label: "Magma chamber" },
          { x: 300, y: 230, label: "Main vent" },
          { x: 300, y: 92, label: "Crater" },
          { x: 415, y: 200, label: "Secondary vent" },
          { x: 300, y: 40, label: "Cloud of ash and gas" },
          { x: 385, y: 265, label: "Lava flow" },
          { x: 150, y: 250, label: "Volcanic cone" }
        ]
      },
      caption: "Click on each point and choose the right name."
    },
    {
      type: "3d",
      title: "3D landscape: shapes born from a moving Earth",
      scene: "terrain",
      options: {
        features: {
          volcano: { label: "Volcano", html: "<p>Magma rises from the <b>magma chamber</b> up the <b>vent</b> and comes out of the <b>crater</b>. Layer after layer of lava and ash builds the cone. In Italy: Etna, Vesuvius, Stromboli, Campi Flegrei.</p>" },
          mountain: { label: "Mountain range", html: "<p>The Alps were born from the collision between the African plate (with the Adriatic microplate) and the Eurasian plate, starting about 65 million years ago. The collision is still going on today: that's why Italy has earthquakes.</p>" },
          peak: { label: "Peak", html: "<p>The highest peaks are the youngest: old mountains (such as the Urals) have been worn down by erosion for hundreds of millions of years.</p>" },
          valley: { label: "Valley", html: "<p>Carved by rivers (V-shaped) or by glaciers (U-shaped). Erosion works against the uplift of mountains.</p>" },
          sea: { label: "Sea", html: "<p>Ocean floors widen at the ridges and sink into the mantle at the trenches (subduction). The oldest ocean floor is «only» about 180 million years old.</p>" },
          island: { label: "Island", html: "<p>Many islands are volcanic: born from underwater eruptions, like the Aeolian Islands, Iceland (on the Atlantic ridge) and Hawaii (on a hot spot).</p>" },
          lake: { label: "Lake", html: "<p>Some lakes fill ancient craters (lakes Bolsena, Bracciano, Albano): these are volcanic lakes. Others were carved by glaciers, like Lake Garda.</p>" },
          plain: { label: "Plain", html: "<p>The Po Valley is a huge basin filled with debris carried by the Po and its tributaries. Under the sediments, the plates keep moving.</p>" }
        }
      },
      caption: "Turn the landscape and tap the parts to read how they formed."
    },
    {
      type: "3d",
      title: "The globe of volcanoes and earthquakes",
      scene: "globe",
      options: {
        points: [
          { lat: -38.24, lon: -73.05, label: "Valdivia, Chile – 1960 earthquake (M 9.5, the strongest ever recorded)", color: "#dc2626" },
          { lat: -16.5, lon: -72, label: "Peruvian Andes", color: "#f97316" },
          { lat: 19, lon: -98.6, label: "Popocatépetl, Mexico", color: "#f97316" },
          { lat: 46.2, lon: -122.18, label: "Mount St. Helens, USA – 1980 eruption", color: "#f97316" },
          { lat: 61.3, lon: -152.25, label: "Alaska", color: "#f97316" },
          { lat: 56.06, lon: 160.64, label: "Kamchatka", color: "#f97316" },
          { lat: 35.36, lon: 138.73, label: "Mount Fuji, Japan", color: "#f97316" },
          { lat: 15.14, lon: 120.35, label: "Pinatubo, Philippines – 1991 eruption", color: "#f97316" },
          { lat: -6.1, lon: 105.42, label: "Krakatoa, Indonesia – 1883 eruption", color: "#f97316" },
          { lat: 19.41, lon: -155.29, label: "Kīlauea, Hawaii (hot spot)", color: "#eab308" },
          { lat: 63.63, lon: -19.62, label: "Iceland – Mid-Atlantic Ridge", color: "#eab308" },
          { lat: 37.75, lon: 14.99, label: "Etna", color: "#f97316" },
          { lat: 40.82, lon: 14.43, label: "Vesuvius – Pompeii AD 79", color: "#f97316" },
          { lat: 38.3, lon: 142.37, label: "Tōhoku, Japan – 2011 earthquake and tsunami", color: "#dc2626" },
          { lat: 3.3, lon: 95.98, label: "Sumatra – 2004 earthquake and tsunami", color: "#dc2626" },
          { lat: 38.2, lon: 15.55, label: "Messina – 1908 earthquake", color: "#dc2626" },
          { lat: 0, lon: -17, label: "", color: "#eab308" },
          { lat: -35, lon: -15, label: "", color: "#eab308" }
        ],
        routes: [
          { points: [0, 1, 2, 3, 4, 5, 6, 7, 8], color: "#ef4444" },
          { points: [10, 16, 17], color: "#eab308" }
        ]
      },
      caption: "In red the «Pacific Ring of Fire», home to about 75% of active volcanoes; in yellow a stretch of the Mid-Atlantic Ridge. Turn the globe: volcanoes and earthquakes are concentrated along plate boundaries."
    },
    {
      type: "example",
      title: "Example: Italy's volcanoes",
      html: "<p>Italy is one of the most volcanic countries in Europe because it lies where the African plate pushes against the Eurasian plate.</p><ul><li><b>Etna</b> (Sicily, about 3350 m): the highest active volcano in Europe, with frequent eruptions.</li><li><b>Stromboli</b>: small explosions every 10–20 minutes, for thousands of years («Lighthouse of the Mediterranean»).</li><li><b>Vesuvius</b>: in <b>AD 79</b> it buried Pompeii and Herculaneum; its last eruption was in 1944. Today it is monitored day and night by the Vesuvius Observatory, the oldest in the world (1841).</li><li><b>Campi Flegrei</b>: a large caldera near Naples, where the ground rises and falls (<b>bradyseism</b>).</li></ul>"
    },
    {
      type: "text",
      title: "5. Earthquakes",
      html: "<p>The rocks of the crust, pushed by plate movement, store up energy until they break along a <b>fault</b>. The energy is released all at once in the form of <b>seismic waves</b>.</p><ul><li><b>Hypocentre</b> (focus): the point deep down where the break starts.</li><li><b>Epicentre</b>: the point on the surface directly above the hypocentre, where the earthquake is strongest.</li></ul><p>Earthquakes are recorded with a <b>seismograph</b> and measured on two scales:</p><ul><li><b>Magnitude</b> (Richter, today moment magnitude): measures the <b>energy</b> released. Each step up corresponds to about <b>32 times</b> more energy.</li><li><b>Mercalli scale</b> (12 degrees): measures the <b>effects</b> on people and buildings.</li></ul>"
    },
    {
      type: "example",
      title: "Example: what to do during an earthquake",
      html: "<ol><li><b>Indoors</b>: take cover under a sturdy table or next to a load-bearing wall; stay away from windows, glass and furniture that could fall.</li><li><b>Don't use the lift</b> and don't run down the stairs during the shaking.</li><li><b>Outdoors</b>: move away from buildings, trees and power lines.</li><li>After the shaking, leave calmly and go to the <b>assembly area</b> shown in your town's civil protection plan.</li></ol><p>Earthquakes can't be predicted, but <b>earthquake-resistant buildings</b> can be built to withstand them: that is real prevention.</p>"
    },
    {
      type: "curiosity",
      title: "The Himalayas are still growing",
      html: "<p>India has been moving north and pressing against Asia for about 50 million years: the collision has raised the <b>Himalayas</b>. Everest (8849 m) is still growing by a few millimetres a year. Fossils of sea creatures are found on its peaks: those rocks were once the floor of an ocean!</p>"
    },
    {
      type: "quiz",
      title: "Mini-quiz 2",
      questions: [
        { type: "mc", q: "The point on the surface above the origin of an earthquake is called:", options: ["Hypocentre", "Epicentre", "Fault", "Crater"], answer: 1, explain: "The epicentre is above the hypocentre." },
        { type: "mc", q: "Which scale measures the effects of an earthquake?", options: ["Richter", "Mercalli", "Celsius", "Beaufort"], answer: 1, explain: "The Mercalli scale measures damage and effects; magnitude measures energy." },
        { type: "tf", q: "Vesuvius destroyed Pompeii in AD 79.", answer: true, explain: "The eruption buried Pompeii, Herculaneum and Stabiae." }
      ]
    },
    {
      type: "conceptMap",
      title: "Concept map: from continental drift to plate tectonics",
      nodes: [
        { id: "indizi", label: "Wegener's clues", x: 20, y: 8, color: "#16a34a", html: "<p>Coastlines that fit (South America–Africa), the same fossils (Mesosaurus, Glossopteris) on distant continents, the same rocks, traces of ancient glaciers in the tropics.</p>", why: "<p>If the continents had always been where they are today, how could a freshwater reptile like Mesosaurus have crossed the ocean? The simplest explanation is that the continents were once joined.</p>" },
        { id: "wegener", label: "Continental drift (1912)", x: 50, y: 8, color: "#2563eb", html: "<p>Alfred Wegener: the continents move; 250 million years ago they formed Pangaea.</p>", why: "<p>Wegener was a meteorologist, not a geologist, and his ideas were rejected for a long time.</p>" },
        { id: "motore", label: "The problem: what engine?", x: 80, y: 8, color: "#b91c1c", html: "<p>Wegener couldn't explain <b>what force</b> moved the continents.</p>", why: "<p>A good scientific theory must explain not only the «what» but also the «how». Without a mechanism, most geologists of the time did not accept it. It's an example of how science advances: ideas are put to the test.</p>" },
        { id: "onde", label: "Seismic waves and internal structure", x: 20, y: 40, color: "#ea580c", html: "<p>Crust, mantle, liquid outer core, solid inner core.</p>", why: "<p>P and S waves change speed and direction as they pass from one material to another: by studying them from thousands of seismic stations, scientists reconstruct the inside of the Earth (Oldham, Gutenberg, Lehmann, Mohorovičić).</p>" },
        { id: "fondali", label: "Ridges and ocean floors", x: 50, y: 40, color: "#0891b2", html: "<p>In the 1950s the ridges were discovered: underwater mountains tens of thousands of km long.</p>", why: "<p>Marie Tharp and Bruce Heezen mapped the floor of the Atlantic with echo sounders and found a long central rift. Harry Hess (1962) proposed <b>sea-floor spreading</b>: new crust is born at the ridges and spreads outwards.</p>" },
        { id: "magnetismo", label: "Magnetic stripes", x: 80, y: 40, color: "#7c3aed", html: "<p>The rocks of the sea floor record the Earth's magnetic field, which flips over time.</p>", why: "<p>Vine and Matthews (1963) noticed symmetrical magnetic stripes on both sides of the ridges: proof that the sea floor forms in the middle and moves away, like a conveyor belt.</p>" },
        { id: "convezione", label: "Convection currents in the mantle", x: 30, y: 70, color: "#dc2626", html: "<p>Internal heat makes hot rocks slowly rise and cold rocks sink.</p>", why: "<p>It's the same thing that happens to boiling water in a pan, but extremely slow (a few centimetres a year). It's the «engine» Wegener was missing.</p>" },
        { id: "tettonica", label: "Plate tectonics (1960s)", x: 65, y: 70, color: "#1d4ed8", html: "<p>The lithosphere is divided into plates that move 2–10 cm a year.</p>", why: "<p>It brings together all the evidence: internal structure, ridges, magnetism, the distribution of volcanoes and earthquakes. Today GPS satellites directly measure the movement of the continents: the Atlantic widens by about 2–3 cm a year.</p>" },
        { id: "effetti", label: "Volcanoes, earthquakes, mountains", x: 50, y: 92, color: "#475569", html: "<p>They are concentrated along plate boundaries.</p>", why: "<p>Where plates move apart, magma rises; where they collide, mountains and trenches form; where they slide past each other, stress builds up and is released in earthquakes. That's why Italy, on the border between the African and Eurasian plates, has volcanoes and earthquakes.</p>" }
      ],
      edges: [
        ["indizi", "wegener", "lead to"],
        ["wegener", "motore", "is missing"],
        ["onde", "convezione", "reveal the mantle"],
        ["fondali", "tettonica", "evidence"],
        ["magnetismo", "tettonica", "evidence"],
        ["motore", "convezione", "answer"],
        ["convezione", "tettonica", "moves"],
        ["wegener", "tettonica", "becomes"],
        ["tettonica", "effetti", "explains"]
      ]
    }
  ],
  glossary: [
    { t: "Lithosphere", d: "Rigid outer shell made of the crust and the upper mantle, divided into plates." },
    { t: "Asthenosphere", d: "Hot, soft part of the mantle on which the plates move." },
    { t: "Subduction", d: "Process in which one plate sinks under another." },
    { t: "Magma", d: "Molten rock with gas, below the surface. At the surface it is called lava." },
    { t: "Fault", d: "A crack in the crust along which rocks move." },
    { t: "Hypocentre", d: "Point deep down where an earthquake starts." },
    { t: "Epicentre", d: "Point on the surface above the hypocentre." },
    { t: "Magnitude", d: "Measure of the energy released by an earthquake." },
    { t: "Bradyseism", d: "Slow rising and sinking of the ground in volcanic areas." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "order", q: "Put the layers in order from the surface to the centre", items: ["Crust", "Mantle", "Outer core", "Inner core"], explain: "Crust, mantle, outer core (liquid), inner core (solid)." },
      { type: "mc", q: "What is the core mainly made of?", options: ["Granite", "Iron and nickel", "Silicon and oxygen", "Water"], answer: 1, explain: "Iron and nickel." },
      { type: "tf", q: "The inner core is solid despite the extremely high temperature.", answer: true, explain: "The enormous pressure stops the iron from melting." },
      { type: "mc", q: "Who proposed the theory of continental drift?", options: ["Darwin", "Wegener", "Galileo", "Richter"], answer: 1, explain: "Alfred Wegener, in 1912." },
      { type: "mc", q: "What happens at a divergent boundary?", options: ["The plates collide", "The plates move apart and new crust forms", "The plates slide sideways", "Nothing"], answer: 1, explain: "Magma rises and creates new oceanic crust: this is what happens at ridges." },
      { type: "mc", q: "Explosive eruptions are typical of lavas that are:", options: ["runny and poor in gas", "sticky and rich in gas", "cold", "made of water"], answer: 1, explain: "Gas trapped in the sticky lava explodes." },
      { type: "text", q: "What is the name of the highest active volcano in Europe?", answer: ["etna", "mount etna"], explain: "Etna, in Sicily." },
      { type: "tf", q: "Magnitude measures the damage to buildings.", answer: false, explain: "Magnitude measures energy; damage is measured with the Mercalli scale." },
      { type: "mc", q: "During an earthquake at home it is best to:", options: ["Take the lift", "Take cover under a sturdy table", "Look out of the window", "Run down the stairs"], answer: 1, explain: "Take cover under a table or next to a load-bearing wall." },
      { type: "mc", q: "How were the Himalayas formed?", options: ["From a volcano", "From the collision between the Indian plate and the Eurasian plate", "From erosion", "From a meteorite"], answer: 1, explain: "It's a range born at a convergent boundary." },
      { type: "num", q: "Roughly how many km deep is the boundary between mantle and core?", answer: 2900, tol: 100, unit: "km", explain: "About 2900 km." }
    ]
  }
});
