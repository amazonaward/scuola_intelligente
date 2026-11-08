TOPIC('en', {
 "id": "m3-sci-elettricita",
 "title": "Electricity and magnetism",
 "intro": "You switch on the light, charge your phone, the compass points north, a lightning bolt tears through the sky: behind all of this there are <b>electric charges</b> and <b>magnetism</b>, two faces of the same phenomenon. We will find out what current, voltage and resistance are, how a circuit works, <b>Ohm's law</b> and how a magnet can produce electricity.",
 "minutes": 50,
 "sections": [
  {
   "type": "text",
   "title": "1. Electric charge",
   "html": "<p>All matter is made of <b>atoms</b>. In the nucleus there are <b>protons</b> (<b>positive +</b> charge) and neutrons (no charge); around it move the <b>electrons</b> (<b>negative −</b> charge). Usually an atom has as many protons as electrons: it is <b>neutral</b>.</p>\n<p>The outermost electrons can move from one body to another. A body that has <b>extra electrons</b> is negatively charged; one that has <b>fewer</b> is positively charged.</p>\n<ul>\n<li>Charges <b>of the same sign repel</b> (+ and +, − and −);</li>\n<li>charges <b>of opposite sign attract</b> (+ and −).</li>\n</ul>\n<p>A body can be <b>charged</b> in three ways:</p>\n<ol>\n<li><b>by rubbing</b> (friction): rub a balloon on your hair; electrons pass from the hair to the balloon, which then sticks to the wall;</li>\n<li><b>by contact</b>: a charged body touches a neutral one and gives it part of its charge;</li>\n<li><b>by induction</b>: a charged body comes close without touching and \"moves\" the charges of the other (this is how the balloon attracts little bits of paper).</li>\n</ol>\n<p>Charge is measured in <b>coulombs (C)</b>, after the French physicist Charles-Augustin de Coulomb, who in 1785 measured the force between charges.</p>"
  },
  {
   "type": "3d",
   "title": "Why do metals conduct? Look at the atom",
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
   "caption": "Choose copper (Cu): it has 29 electrons and the last one, alone on the outermost orbit, is only weakly held. In metals these electrons leave the atom and form a \"sea\" of free electrons that can move: that is why metals conduct current."
  },
  {
   "type": "text",
   "title": "2. Conductors and insulators",
   "html": "<ul>\n<li><b>Conductors</b>: they let charges pass easily. They are the <b>metals</b> (silver, copper, gold, aluminium, iron), <b>graphite</b>, <b>water</b> with dissolved salts (even tap water!) and the <b>human body</b>.</li>\n<li><b>Insulators</b>: they do not let charges pass. Plastic, rubber, glass, ceramic, dry wood, dry air.</li>\n<li><b>Semiconductors</b>: like <b>silicon</b>, they conduct \"on command\": they are the basis of computer and phone chips.</li>\n</ul>\n<p>In electric cables the copper (conductor) is wrapped in plastic (insulator): the current goes where it should and we are protected.</p>"
  },
  {
   "type": "widget",
   "title": "Conductor or insulator?",
   "widget": "classify",
   "options": {
    "groups": [
     "⚡ Conductor",
     "🛡️ Insulator"
    ],
    "items": [
     [
      "🔩 Iron nail",
      0
     ],
     [
      "🧤 Rubber glove",
      1
     ],
     [
      "🥄 Steel spoon",
      0
     ],
     [
      "🥛 Glass tumbler",
      1
     ],
     [
      "✏️ Pencil lead (graphite)",
      0
     ],
     [
      "🪵 Dry wooden ruler",
      1
     ],
     [
      "💧 Salt water",
      0
     ],
     [
      "🧸 Plastic of a toy",
      1
     ],
     [
      "🪙 Coin",
      0
     ]
    ]
   },
   "caption": "Tap an object and then the right group. You could check with a battery, a bulb and two wires."
  },
  {
   "type": "text",
   "title": "3. Current, voltage and resistance",
   "html": "<p>When charges move in an orderly way in a conductor, we have an <b>electric current</b>. To describe it we need three quantities:</p>\n<table>\n<tr><th>Quantity</th><th>What it is</th><th>Unit</th><th>Instrument</th></tr>\n<tr><td><b>Current (I)</b></td><td>How much charge passes in one second through a cross-section of the wire: I = Q ÷ t</td><td><b>ampere (A)</b></td><td>ammeter (in series)</td></tr>\n<tr><td><b>Voltage or potential difference (V)</b></td><td>The \"push\" that sets the charges moving, provided by the generator (battery, socket)</td><td><b>volt (V)</b></td><td>voltmeter (in parallel)</td></tr>\n<tr><td><b>Resistance (R)</b></td><td>How much a material opposes the passage of current</td><td><b>ohm (Ω)</b></td><td>ohmmeter</td></tr>\n</table>\n<p>The resistance of a wire is greater if the wire is <b>longer</b>, <b>thinner</b> or made of a <b>less conductive</b> material; it usually also increases with temperature.</p>\n<p>Some values: an AA battery gives <b>1.5 V</b>, a car battery <b>12 V</b>, household sockets in Italy <b>230 V</b> (alternating current at 50 Hz). An LED bulb draws about 0.04 A, an electric oven about 9 A.</p>"
  },
  {
   "type": "text",
   "title": "4. Ohm's law",
   "html": "<p>In <b>1827</b> the German physicist <b>Georg Simon Ohm</b> discovered that, for many conductors (at constant temperature), the current is <b>directly proportional</b> to the voltage:</p>\n<p style=\"text-align:center;font-size:1.3em\"><b>V = R × I</b></p>\n<p>from which: <b>I = V ÷ R</b> and <b>R = V ÷ I</b>.</p>\n<p>If you double the voltage, the current doubles; if you double the resistance, the current halves. The voltage–current graph of an \"ohmic\" conductor is a <b>straight line through the origin</b>: the slope is the resistance.</p>\n<p><b>Power and energy</b>: electrical <b>power</b>, that is, how much energy is used every second, is <b>P = V × I</b> and is measured in <b>watts (W)</b>. The energy consumed is <b>E = P × t</b>: on the bill it is measured in <b>kilowatt-hours (kWh)</b>, the energy used by a 1,000 W appliance left on for 1 hour.</p>"
  },
  {
   "type": "example",
   "title": "Worked example: calculations with Ohm's law",
   "html": "<ol>\n<li><b>Torch</b>: 4.5 V battery, 9 Ω bulb. I = V ÷ R = 4.5 ÷ 9 = <b>0.5 A</b>.</li>\n<li><b>Toaster</b>: at the 230 V socket it draws 4 A. R = V ÷ I = 230 ÷ 4 = <b>57.5 Ω</b>. Power: P = 230 × 4 = <b>920 W</b>.</li>\n<li><b>Phone charger</b>: 5 V and 2 A → P = 5 × 2 = <b>10 W</b>. In 2 hours it uses 10 × 2 = 20 Wh = 0.02 kWh: very little!</li>\n<li><b>Hairdryer</b> of 2,000 W used for half an hour: E = 2 kW × 0.5 h = <b>1 kWh</b>. If 1 kWh costs about €0.25, that is 25 cents.</li>\n</ol>\n<p>That is why an 8 W LED bulb, which gives the same light as an old 60 W incandescent bulb, saves over 85% of the energy.</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: charges and Ohm's law",
   "questions": [
    {
     "type": "tf",
     "q": "Two negatively charged bodies attract each other.",
     "answer": false,
     "explain": "Charges of the same sign repel."
    },
    {
     "type": "num",
     "q": "A 20 Ω resistor is connected to 10 V. How many amperes pass?",
     "answer": 0.5,
     "tol": 0.001,
     "unit": "A",
     "explain": "I = V ÷ R = 10 ÷ 20 = 0.5 A."
    },
    {
     "type": "num",
     "q": "A heater draws 8 A at 230 V. What is its power in watts?",
     "answer": 1840,
     "unit": "W",
     "explain": "P = V × I = 230 × 8 = 1840 W."
    },
    {
     "type": "mc",
     "q": "What unit is resistance measured in?",
     "options": [
      "Volt",
      "Ampere",
      "Ohm",
      "Watt"
     ],
     "answer": 2,
     "explain": "In ohms (Ω)."
    }
   ]
  },
  {
   "type": "text",
   "title": "5. The electric circuit: series and parallel",
   "html": "<p>A <b>circuit</b> is a <b>closed</b> path in which current flows. It includes: a <b>generator</b> (battery), <b>conductors</b> (wires), one or more <b>loads</b> (bulbs, motors) and a <b>switch</b>. If the switch is open the circuit is broken and no current flows.</p>\n<p><b>Series connection</b> (one after the other, a single path):</p>\n<ul>\n<li>the current is <b>the same</b> in all the loads;</li>\n<li>the resistances <b>add up</b>: R = R₁ + R₂ + …;</li>\n<li>if one bulb burns out, <b>they all go out</b> (like some old Christmas tree lights).</li>\n</ul>\n<p><b>Parallel connection</b> (each on a different branch):</p>\n<ul>\n<li>the voltage is <b>the same</b> for all;</li>\n<li>the total resistance <b>decreases</b>: 1/R = 1/R₁ + 1/R₂ + …;</li>\n<li>if one bulb burns out, <b>the others stay on</b>. That is why the wiring of a house is in parallel: every socket has 230 V and works on its own.</li>\n</ul>\n<p>Example: R₁ = 6 Ω and R₂ = 3 Ω. In series: 9 Ω. In parallel: 1/R = 1/6 + 1/3 = 3/6 → R = <b>2 Ω</b>.</p>"
  },
  {
   "type": "svg",
   "title": "Series and parallel circuit",
   "svg": "<svg viewBox=\"0 0 640 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"640\" height=\"300\" fill=\"#f8fafc\"/>\n<text x=\"150\" y=\"28\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0f172a\">IN SERIES</text>\n<rect x=\"40\" y=\"60\" width=\"220\" height=\"180\" fill=\"none\" stroke=\"#334155\" stroke-width=\"4\"/>\n<rect x=\"25\" y=\"125\" width=\"30\" height=\"50\" fill=\"#f8fafc\"/>\n<line x1=\"28\" y1=\"135\" x2=\"52\" y2=\"135\" stroke=\"#dc2626\" stroke-width=\"5\"/>\n<line x1=\"33\" y1=\"150\" x2=\"47\" y2=\"150\" stroke=\"#0f172a\" stroke-width=\"5\"/>\n<line x1=\"28\" y1=\"160\" x2=\"52\" y2=\"160\" stroke=\"#dc2626\" stroke-width=\"5\"/>\n<text x=\"10\" y=\"200\" font-size=\"14\" fill=\"#334155\">battery</text>\n<circle cx=\"110\" cy=\"60\" r=\"18\" fill=\"#fde047\" stroke=\"#334155\" stroke-width=\"3\"/>\n<path d=\"M98 48 L122 72 M122 48 L98 72\" stroke=\"#334155\" stroke-width=\"2\"/>\n<circle cx=\"190\" cy=\"60\" r=\"18\" fill=\"#fde047\" stroke=\"#334155\" stroke-width=\"3\"/>\n<path d=\"M178 48 L202 72 M202 48 L178 72\" stroke=\"#334155\" stroke-width=\"2\"/>\n<text x=\"150\" y=\"275\" font-size=\"14\" text-anchor=\"middle\" fill=\"#334155\">a single path: same current</text>\n<path d=\"M120 240 L150 240\" stroke=\"#2563eb\" stroke-width=\"3\"/>\n<polygon points=\"150,234 162,240 150,246\" fill=\"#2563eb\"/>\n<text x=\"470\" y=\"28\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0f172a\">IN PARALLEL</text>\n<rect x=\"360\" y=\"60\" width=\"240\" height=\"180\" fill=\"none\" stroke=\"#334155\" stroke-width=\"4\"/>\n<line x1=\"480\" y1=\"60\" x2=\"480\" y2=\"240\" stroke=\"#334155\" stroke-width=\"4\"/>\n<rect x=\"345\" y=\"125\" width=\"30\" height=\"50\" fill=\"#f8fafc\"/>\n<line x1=\"348\" y1=\"135\" x2=\"372\" y2=\"135\" stroke=\"#dc2626\" stroke-width=\"5\"/>\n<line x1=\"353\" y1=\"150\" x2=\"367\" y2=\"150\" stroke=\"#0f172a\" stroke-width=\"5\"/>\n<line x1=\"348\" y1=\"160\" x2=\"372\" y2=\"160\" stroke=\"#dc2626\" stroke-width=\"5\"/>\n<circle cx=\"480\" cy=\"150\" r=\"18\" fill=\"#fde047\" stroke=\"#334155\" stroke-width=\"3\"/>\n<path d=\"M468 138 L492 162 M492 138 L468 162\" stroke=\"#334155\" stroke-width=\"2\"/>\n<circle cx=\"600\" cy=\"150\" r=\"18\" fill=\"#fde047\" stroke=\"#334155\" stroke-width=\"3\"/>\n<path d=\"M588 138 L612 162 M612 138 L588 162\" stroke=\"#334155\" stroke-width=\"2\"/>\n<text x=\"480\" y=\"275\" font-size=\"14\" text-anchor=\"middle\" fill=\"#334155\">several branches: same voltage</text>\n</svg>",
   "caption": "Symbols: the red and black lines are the battery, the circle with the X is the bulb. On the left, unscrewing one bulb switches off the other too; on the right it does not."
  },
  {
   "type": "widget",
   "title": "Identify the parts of the circuit",
   "widget": "labelDiagram",
   "options": {
    "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#ecfeff\"/>\n<rect x=\"100\" y=\"60\" width=\"400\" height=\"180\" fill=\"none\" stroke=\"#475569\" stroke-width=\"5\"/>\n<rect x=\"70\" y=\"110\" width=\"60\" height=\"80\" rx=\"6\" fill=\"#f59e0b\" stroke=\"#78350f\" stroke-width=\"3\"/>\n<rect x=\"88\" y=\"98\" width=\"24\" height=\"12\" fill=\"#78350f\"/>\n<circle cx=\"300\" cy=\"60\" r=\"28\" fill=\"#fef08a\" stroke=\"#475569\" stroke-width=\"4\"/>\n<path d=\"M285 60 Q 300 40 315 60\" stroke=\"#b45309\" stroke-width=\"3\" fill=\"none\"/>\n<rect x=\"255\" y=\"230\" width=\"90\" height=\"20\" fill=\"#ecfeff\"/>\n<circle cx=\"260\" cy=\"240\" r=\"6\" fill=\"#475569\"/>\n<circle cx=\"340\" cy=\"240\" r=\"6\" fill=\"#475569\"/>\n<line x1=\"260\" y1=\"240\" x2=\"330\" y2=\"210\" stroke=\"#475569\" stroke-width=\"5\"/>\n<circle cx=\"500\" cy=\"150\" r=\"30\" fill=\"#e2e8f0\" stroke=\"#475569\" stroke-width=\"4\"/>\n<text x=\"500\" y=\"158\" font-size=\"22\" text-anchor=\"middle\" fill=\"#0f172a\">A</text>\n</svg>",
    "spots": [
     {
      "x": 100,
      "y": 150,
      "label": "Generator (battery)"
     },
     {
      "x": 300,
      "y": 60,
      "label": "Load (bulb)"
     },
     {
      "x": 295,
      "y": 225,
      "label": "Open switch"
     },
     {
      "x": 500,
      "y": 150,
      "label": "Ammeter"
     },
     {
      "x": 200,
      "y": 240,
      "label": "Conducting wire"
     }
    ]
   },
   "caption": "Tap each point and choose the name. With the switch open the bulb is off: the circuit is not closed."
  },
  {
   "type": "text",
   "title": "6. The effects of current and safety",
   "html": "<ul>\n<li><b>Heating effect</b> (Joule effect): a conductor carrying current heats up. It is used by heaters, ovens, irons, hairdryers, water heaters.</li>\n<li><b>Light effect</b>: bulbs and LEDs.</li>\n<li><b>Magnetic effect</b>: current creates a magnetic field (electromagnets, doorbells, motors).</li>\n<li><b>Chemical effect</b>: current can split substances apart (<b>electrolysis</b>); conversely, a chemical reaction can produce current (cells and batteries).</li>\n</ul>\n<p>⚠️ <b>Current is dangerous</b> for the human body, which is a conductor: currents of only about <b>30 milliamps</b> through the body can be very dangerous for the heart. Golden rules:</p>\n<ul>\n<li>never touch electrical appliances with wet hands or in the bathroom near water;</li>\n<li>do not stick objects into sockets and do not pull on cables;</li>\n<li>do not overload multiple sockets (extension leads);</li>\n<li>at home the <b>residual-current device</b> (RCD, the \"life saver\") cuts the power in a fraction of a second if it detects a leak to earth (usually already at 30 mA); the <b>earth wire</b> (yellow-green) carries fault currents to earth. Wiring systems must be made and certified by qualified technicians.</li>\n<li>during a thunderstorm do not shelter under an isolated tree.</li>\n</ul>"
  },
  {
   "type": "text",
   "title": "7. Magnetism",
   "html": "<p>A <b>magnet</b> attracts objects made of <b>iron</b>, <b>nickel</b> and <b>cobalt</b>. Every magnet has two <b>poles</b>, North and South: <b>like poles repel</b>, <b>opposite poles attract</b>. If you break a magnet you get two smaller magnets, each with its own North and South: you cannot isolate a single pole.</p>\n<p>Around a magnet there is a <b>magnetic field</b>, which you can \"see\" by sprinkling iron filings on a sheet of paper: they line up along the <b>field lines</b>, which come out of the North pole and go into the South pole.</p>\n<p>The <b>Earth</b> too is an enormous magnet, thanks to the molten iron moving in the outer core. The needle of the <b>compass</b> (invented in China, used by European sailors from the 12th–13th century) lines up along the Earth's field and points north. The magnetic field also protects us from the solar wind: when particles from the Sun arrive near the poles, we see the <b>polar auroras</b>.</p>"
  },
  {
   "type": "text",
   "title": "8. Electricity and magnetism are related",
   "html": "<p>In <b>1820</b> the Dane <b>Hans Christian Ørsted</b> noticed, during a lecture, that the needle of a compass moved when current flowed through a wire nearby: <b>an electric current creates a magnetic field</b>. By winding a wire around an iron nail you get an <b>electromagnet</b>, which \"switches off\" when the current is removed (used in scrapyard cranes, doorbells, relays).</p>\n<p>In <b>1831</b> the Englishman <b>Michael Faraday</b> discovered the opposite: <b>moving a magnet inside a coil of wire produces current</b> (electromagnetic induction). From this come:</p>\n<ul>\n<li>the <b>generator</b> (alternator): in hydroelectric, wind and thermal power stations a turbine spins magnets and coils and produces current. The bicycle dynamo works the same way;</li>\n<li>the <b>electric motor</b>: it works the other way round, turning electrical energy into movement (blenders, electric cars, fans). The Italian <b>Galileo Ferraris</b> in 1885 discovered the rotating magnetic field, the basis of alternating-current motors;</li>\n<li>the <b>transformer</b>, which raises or lowers the voltage: the current travels along high-voltage lines (up to 380,000 V in Italy) and arrives at home at 230 V.</li>\n</ul>\n<p>In 1865 the Scotsman <b>James Clerk Maxwell</b> brought it all together in four equations and realised that <b>light</b> itself is an electromagnetic wave.</p>"
  },
  {
   "type": "example",
   "title": "Worked example: build an electromagnet",
   "html": "<p>You need: an iron nail about 8 cm long, 1 metre of thin insulated copper wire, a 1.5 V battery, a few paper clips. Do it with an adult.</p>\n<ol>\n<li>Wind the wire around the nail making 30–40 tight turns, leaving the two ends free.</li>\n<li>Strip the plastic from the ends of the wire for about 1 cm.</li>\n<li>Hold the ends on the poles of the battery for a few seconds: the nail <b>attracts the paper clips</b>!</li>\n<li>Disconnect one end: the paper clips fall.</li>\n</ol>\n<p>Try doubling the turns: how many paper clips does it lift now? More turns and more current = stronger magnetic field. ⚠️ Do not keep it connected for long: the wire heats up (Joule effect) and the battery runs down.</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? The battery is Italian",
   "html": "<p>In <b>1799</b> Alessandro Volta, from Como, stacked discs of zinc and copper separated by cloths soaked in salt water and made the first <b>voltaic pile</b>, the first generator of direct current (he announced it in 1800). He did it to prove that Luigi Galvani was wrong about the \"animal electricity\" of frogs. In his honour the unit of voltage is called the <b>volt</b>. And the word \"electricity\" comes from the Greek <i>élektron</i>, which means <b>amber</b>: already the philosopher Thales, in the 6th century BC, noticed that rubbed amber attracted bits of straw.</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? Lightning and the lightning rod",
   "html": "<p>A <b>lightning bolt</b> is a gigantic discharge between cloud and ground: the voltage can reach hundreds of millions of volts and the current tens of thousands of amperes, but it lasts less than a thousandth of a second. The air around it heats up to about 30,000 °C (hotter than the surface of the Sun) and expands suddenly: this is the <b>thunder</b>. In 1752 Benjamin Franklin showed with a kite that lightning is electricity and invented the <b>lightning rod</b>. To find out how far away a storm is: count the seconds between the flash and the thunder and divide by 3: you get the kilometres.</p>"
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand current",
   "intro": "Current cannot be seen: here are some pictures that help you \"see\" it.",
   "tabs": [
    {
     "label": "💧 The water analogy",
     "html": "<p>Think of a circuit as a plumbing system:</p>\n<ul>\n<li>the <b>battery</b> is a <b>pump</b> that lifts the water: the <b>voltage</b> is the height difference (the pressure);</li>\n<li>the <b>current</b> is the amount of water passing through the pipe every second;</li>\n<li>the <b>resistance</b> is a narrow pipe or an almost closed tap;</li>\n<li>the <b>switch</b> is a sluice gate.</li>\n</ul>\n<p>With more pressure more water flows (bigger V → bigger I); with a narrower pipe less flows (bigger R → smaller I). It is Ohm's law!</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#f0f9ff\"/>\n<rect x=\"40\" y=\"40\" width=\"80\" height=\"60\" fill=\"#38bdf8\" stroke=\"#0369a1\" stroke-width=\"3\"/>\n<text x=\"80\" y=\"76\" font-size=\"15\" text-anchor=\"middle\" fill=\"#0c4a6e\">high tank</text>\n<rect x=\"40\" y=\"190\" width=\"80\" height=\"40\" fill=\"#38bdf8\" stroke=\"#0369a1\" stroke-width=\"3\"/>\n<text x=\"80\" y=\"215\" font-size=\"14\" text-anchor=\"middle\" fill=\"#0c4a6e\">low down</text>\n<path d=\"M120 70 L360 70 L360 210 L120 210\" fill=\"none\" stroke=\"#0369a1\" stroke-width=\"16\"/>\n<rect x=\"340\" y=\"110\" width=\"40\" height=\"60\" fill=\"#f59e0b\" stroke=\"#78350f\" stroke-width=\"3\"/>\n<text x=\"400\" y=\"145\" font-size=\"15\" fill=\"#78350f\">narrowing = resistance</text>\n<circle cx=\"80\" cy=\"150\" r=\"22\" fill=\"#a78bfa\" stroke=\"#5b21b6\" stroke-width=\"3\"/>\n<text x=\"80\" y=\"156\" font-size=\"14\" text-anchor=\"middle\" fill=\"#fff\">pump</text>\n<line x1=\"80\" y1=\"128\" x2=\"80\" y2=\"100\" stroke=\"#5b21b6\" stroke-width=\"4\"/>\n<line x1=\"80\" y1=\"172\" x2=\"80\" y2=\"190\" stroke=\"#5b21b6\" stroke-width=\"4\"/>\n<text x=\"240\" y=\"60\" font-size=\"15\" text-anchor=\"middle\" fill=\"#0c4a6e\">water flow = current →</text>\n<text x=\"180\" y=\"130\" font-size=\"15\" fill=\"#5b21b6\">pump = battery</text>\n<text x=\"180\" y=\"150\" font-size=\"15\" fill=\"#5b21b6\">height difference = voltage</text>\n</svg>"
    },
    {
     "label": "🔺 The magic triangle",
     "html": "<p>In British schools they use the <b>VIR triangle</b>. Cover with your finger the quantity you are looking for and read what is left:</p>\n<ul><li>cover <b>V</b> → R next to I is left → <b>V = R × I</b>;</li>\n<li>cover <b>I</b> → V over R is left → <b>I = V ÷ R</b>;</li>\n<li>cover <b>R</b> → V over I is left → <b>R = V ÷ I</b>.</li></ul>\n<p>The same trick works for power, with P at the top and V, I at the bottom.</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#fdf4ff\"/>\n<polygon points=\"300,20 470,230 130,230\" fill=\"#f0abfc\" stroke=\"#86198f\" stroke-width=\"4\"/>\n<line x1=\"210\" y1=\"130\" x2=\"390\" y2=\"130\" stroke=\"#86198f\" stroke-width=\"4\"/>\n<line x1=\"300\" y1=\"130\" x2=\"300\" y2=\"230\" stroke=\"#86198f\" stroke-width=\"4\"/>\n<text x=\"300\" y=\"110\" font-size=\"44\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4a044e\">V</text>\n<text x=\"240\" y=\"200\" font-size=\"40\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4a044e\">R</text>\n<text x=\"360\" y=\"200\" font-size=\"40\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4a044e\">I</text>\n<text x=\"300\" y=\"255\" font-size=\"15\" text-anchor=\"middle\" fill=\"#4a044e\">horizontal line = divided by · vertical line = times</text>\n</svg>"
    },
    {
     "label": "⚛️ Electrons in 3D",
     "html": "<p>Look at the atoms up close: in metals like <b>copper</b> the outermost electron is far from the nucleus and held only weakly. When you connect a battery, all these free electrons \"slide\" in the same direction, from the negative pole towards the positive. Curiously, they move very slowly (a few millimetres per minute!), but the \"push\" travels almost at the speed of light, like when you push a row of marbles in a full tube.</p>",
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
     "label": "🧲 Match scientist and discovery",
     "html": "<p>The history of electricity is a relay race between scientists from many countries. Match each one to their discovery.</p>",
     "widget": "match",
     "options": {
      "pairs": [
       [
        "Alessandro Volta",
        "The voltaic pile (1799)"
       ],
       [
        "Hans Christian Ørsted",
        "Current makes a compass move (1820)"
       ],
       [
        "Georg Simon Ohm",
        "V = R × I (1827)"
       ],
       [
        "Michael Faraday",
        "Electromagnetic induction (1831)"
       ],
       [
        "Galileo Ferraris",
        "Rotating magnetic field (1885)"
       ],
       [
        "Benjamin Franklin",
        "The lightning rod (1752)"
       ]
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Map of electricity and magnetism: tap the nodes and find out why",
   "nodes": [
    {
     "id": "carica",
     "label": "Electric charge",
     "x": 50,
     "y": 6,
     "color": "#ef4444",
     "html": "A property of protons (+) and electrons (−).",
     "why": "The electron was discovered by J. J. Thomson in 1897; the smallest charge (that of the electron, 1.6 × 10⁻¹⁹ C) was measured by Robert Millikan in 1909 using oil droplets."
    },
    {
     "id": "coulomb",
     "label": "Attraction and repulsion",
     "x": 15,
     "y": 22,
     "color": "#f97316",
     "html": "Like charges repel, opposite charges attract.",
     "why": "In 1785 <b>Coulomb</b> used a torsion balance to measure that the force decreases with the square of the distance, just like Newton's gravity."
    },
    {
     "id": "conduttori",
     "label": "Conductors and insulators",
     "x": 85,
     "y": 22,
     "color": "#f59e0b",
     "html": "Materials that do or do not let charges move.",
     "why": "It depends on the outer electrons: in metals they are free to move between the atoms, in insulators they stay bound to their atoms."
    },
    {
     "id": "corrente",
     "label": "Current, voltage, resistance",
     "x": 50,
     "y": 38,
     "color": "#2563eb",
     "html": "I (ampere), V (volt), R (ohm).",
     "why": "Continuous current could only be studied after <b>Volta's pile</b> (1799): before that, only instantaneous discharges were known."
    },
    {
     "id": "ohm",
     "label": "Ohm's law",
     "x": 20,
     "y": 60,
     "color": "#0ea5e9",
     "html": "V = R × I.",
     "why": "<b>Ohm</b> worked it out in 1827 by carefully measuring the current in wires of different lengths. At first he was criticised; then the Royal Society honoured him in 1841."
    },
    {
     "id": "circuiti",
     "label": "Series and parallel circuits",
     "x": 20,
     "y": 85,
     "color": "#14b8a6",
     "html": "Different ways of connecting the loads.",
     "why": "From Ohm's law and the conservation of charge (Kirchhoff's laws, 1845) we get how resistances add up in series and in parallel."
    },
    {
     "id": "potenza",
     "label": "Power and energy",
     "x": 50,
     "y": 85,
     "color": "#22c55e",
     "html": "P = V × I (watts); E = P × t (kWh).",
     "why": "James Prescott Joule (1840) measured the heat produced by current and showed that energy changes form but is conserved."
    },
    {
     "id": "magnetismo",
     "label": "Magnets and magnetic field",
     "x": 82,
     "y": 55,
     "color": "#a855f7",
     "html": "North and South poles, field lines, Earth's magnetism.",
     "why": "William Gilbert in 1600 (<i>De Magnete</i>) realised that the Earth is a big magnet. The Earth's field comes from liquid iron moving in the outer core."
    },
    {
     "id": "elettromagnetismo",
     "label": "Electromagnetism",
     "x": 82,
     "y": 85,
     "color": "#7c3aed",
     "html": "Current creates magnetism; moving magnetism creates current.",
     "why": "<b>Ørsted</b> (1820) and <b>Faraday</b> (1831) discovered it; <b>Maxwell</b> (1865) described it with 4 equations, predicting the electromagnetic waves (radio, light) later found by Hertz in 1887."
    }
   ],
   "edges": [
    [
     "carica",
     "coulomb",
     "exerts forces"
    ],
    [
     "carica",
     "conduttori",
     "moves in"
    ],
    [
     "conduttori",
     "corrente",
     "allow the"
    ],
    [
     "corrente",
     "ohm",
     "is linked by"
    ],
    [
     "ohm",
     "circuiti",
     "explains"
    ],
    [
     "corrente",
     "potenza",
     "carries"
    ],
    [
     "corrente",
     "elettromagnetismo",
     "generates magnetism"
    ],
    [
     "magnetismo",
     "elettromagnetismo",
     "in motion generates current"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: circuits and magnets",
   "questions": [
    {
     "type": "mc",
     "q": "Why is the wiring of a house connected in parallel?",
     "options": [
      "To save wire",
      "Because every appliance gets 230 V and works on its own",
      "Because the current is weaker"
     ],
     "answer": 1,
     "explain": "In parallel every branch has the same voltage and is independent."
    },
    {
     "type": "num",
     "q": "Two resistors of 4 Ω and 6 Ω are in series. What is the total resistance?",
     "answer": 10,
     "unit": "Ω",
     "explain": "In series they add up: 4 + 6 = 10 Ω."
    },
    {
     "type": "tf",
     "q": "Moving a magnet inside a coil produces current.",
     "answer": true,
     "explain": "It is the electromagnetic induction discovered by Faraday."
    }
   ]
  },
  {
   "type": "remember",
   "title": "To remember",
   "html": "<ul>\n<li>Like charges repel, opposite charges attract. Charging: rubbing, contact, induction.</li>\n<li><b>I</b> in amperes, <b>V</b> in volts, <b>R</b> in ohms. Ohm's law: <b>V = R × I</b>.</li>\n<li><b>P = V × I</b> (watts); energy <b>E = P × t</b> (kWh).</li>\n<li>Series: same current, R add up. Parallel: same voltage, independent branches.</li>\n<li>Like magnetic poles repel; the Earth is a magnet.</li>\n<li>Current → magnetism (Ørsted); moving magnet → current (Faraday).</li>\n</ul>"
  }
 ],
 "glossary": [
  {
   "t": "Electric charge",
   "d": "A property of matter: positive (protons) or negative (electrons)."
  },
  {
   "t": "Conductor",
   "d": "A material in which charges move easily."
  },
  {
   "t": "Insulator",
   "d": "A material that does not let current pass."
  },
  {
   "t": "Electric current",
   "d": "An orderly flow of charges; measured in amperes (A)."
  },
  {
   "t": "Voltage",
   "d": "The potential difference that pushes the charges; measured in volts (V)."
  },
  {
   "t": "Resistance",
   "d": "Opposition to the passage of current; measured in ohms (Ω)."
  },
  {
   "t": "Electrical power",
   "d": "Energy used every second: P = V × I, in watts."
  },
  {
   "t": "Kilowatt-hour",
   "d": "The energy used by a 1,000 W appliance in one hour."
  },
  {
   "t": "Circuit",
   "d": "A closed path in which current flows."
  },
  {
   "t": "Magnetic field",
   "d": "The region around a magnet or a current in which magnetic forces act."
  },
  {
   "t": "Electromagnetic induction",
   "d": "The production of current by a changing magnetic field."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "A balloon rubbed on hair becomes charged…",
    "options": [
     "by contact",
     "by rubbing",
     "by induction"
    ],
    "answer": 1,
    "explain": "Rubbing transfers electrons from the hair to the balloon."
   },
   {
    "type": "mc",
    "q": "Which of these materials is an insulator?",
    "options": [
     "Copper",
     "Rubber",
     "Salt water",
     "Graphite"
    ],
    "answer": 1,
    "explain": "Rubber does not let current pass."
   },
   {
    "type": "num",
    "q": "A bulb has a resistance of 6 Ω and the battery gives 12 V. How many amperes pass?",
    "answer": 2,
    "unit": "A",
    "explain": "I = 12 ÷ 6 = 2 A."
   },
   {
    "type": "num",
    "q": "In a circuit 0.5 A passes through a resistance of 18 Ω. What is the voltage?",
    "answer": 9,
    "unit": "V",
    "explain": "V = R × I = 18 × 0.5 = 9 V."
   },
   {
    "type": "num",
    "q": "A 2 kW oven stays on for 3 hours. How many kWh does it use?",
    "answer": 6,
    "unit": "kWh",
    "explain": "E = 2 kW × 3 h = 6 kWh."
   },
   {
    "type": "num",
    "q": "Two 10 Ω resistors are in parallel. What is the total resistance?",
    "answer": 5,
    "unit": "Ω",
    "explain": "1/R = 1/10 + 1/10 = 2/10 → R = 5 Ω."
   },
   {
    "type": "tf",
    "q": "In a series circuit, if one bulb burns out, the others stay on.",
    "answer": false,
    "explain": "In series there is only one path: they all go out."
   },
   {
    "type": "text",
    "q": "What is the name of the Italian scientist who invented the battery (voltaic pile)?",
    "answer": [
     "volta",
     "alessandro volta"
    ],
    "explain": "Alessandro Volta, in 1799."
   },
   {
    "type": "mc",
    "q": "What did Ørsted discover in 1820?",
    "options": [
     "That current creates a magnetic field",
     "The law V = R × I",
     "The electron"
    ],
    "answer": 0,
    "explain": "A wire carrying current makes the compass needle turn."
   },
   {
    "type": "mc",
    "q": "On what principle are the generators of power stations based?",
    "options": [
     "The Joule effect",
     "Electromagnetic induction",
     "Charging by rubbing"
    ],
    "answer": 1,
    "explain": "Rotating magnets and coils produce current."
   },
   {
    "type": "tf",
    "q": "Two North poles of two magnets attract each other.",
    "answer": false,
    "explain": "Like poles repel."
   },
   {
    "type": "order",
    "q": "Put the discoveries in chronological order.",
    "items": [
     "Franklin's lightning rod",
     "Volta's pile",
     "Ørsted's experiment",
     "Ohm's law",
     "Faraday's induction"
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
