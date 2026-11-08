TOPIC('en', {
  id: `m3-tec-elettricita-elettronica`,
  title: `Electricity and electronics`,
  intro: `You switch on the light, charge your phone, and the washing machine stops by itself at the end of the programme: all thanks to <b>electricity</b> and <b>electronics</b>. In this lesson we discover what electric current is, how to build a <b>circuit</b>, <b>Ohm's law</b>, the main <b>components</b> (resistors, LEDs, diodes, capacitors, transistors) and the <b>sensors</b> that let machines "feel" the world. ⚡🔌`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Where electricity comes from: charges and electrons`,
      html: `<p>All matter is made of <b>atoms</b>. Every atom has a <b>nucleus</b> with <b>protons</b> (positive charge +) and neutrons (no charge), and around it the <b>electrons</b> (negative charge −).</p>
<p>In <b>metals</b> (copper, aluminium, silver…) the outermost electrons are weakly bound: they can move from one atom to another. They are called <b>free electrons</b>.</p>
<p>An <b>electric current</b> is an <b>orderly flow of electric charges</b> (in metal wires: electrons) that move in a <b>closed circuit</b>.</p>
<ul>
<li><b>Conductors</b>: let current pass easily (metals, graphite, salt water, the human body!).</li>
<li><b>Insulators</b>: block it (plastic, rubber, glass, dry wood, ceramic, air).</li>
<li><b>Semiconductors</b>: in between; their conductivity can be controlled (silicon, germanium). They are the basis of <b>electronics</b>.</li>
</ul>`
    },
    {
      type: `3d`, title: `The atoms of a conductor and a semiconductor`,
      scene: `atom`,
      options: { elements: [`Cu`, `Al`, `Si`] },
      caption: `Copper (Cu) has only one electron in its outermost shell, easy to "detach": that is why it is an excellent conductor. Silicon (Si) has 4: it is a semiconductor.`
    },
    {
      type: `text`, title: `2. The three quantities: voltage, current, resistance`,
      html: `<p>Think of a circuit as a <b>water system</b>:</p>
<table>
<tr><th>Quantity</th><th>Symbol</th><th>Unit</th><th>Instrument</th><th>Water analogy</th></tr>
<tr><td><b>Voltage</b> (potential difference)</td><td>V</td><td>volt (V)</td><td>voltmeter</td><td>the <b>pressure</b> / the height difference that pushes the water</td></tr>
<tr><td><b>Current intensity</b></td><td>I</td><td>ampere (A)</td><td>ammeter</td><td>how much water passes <b>every second</b></td></tr>
<tr><td><b>Resistance</b></td><td>R</td><td>ohm (Ω)</td><td>ohmmeter</td><td>a <b>narrow pipe</b> that slows the flow</td></tr>
</table>
<p>A <b>multimeter</b> (or tester) measures all three.</p>
<p>Useful values: an AA battery = <b>1.5 V</b>; a car battery = <b>12 V</b>; a USB port = <b>5 V</b>; a mains socket in Italy = <b>230 V</b> alternating at <b>50 Hz</b> (dangerous!).</p>`
    },
    {
      type: `text`, title: `3. Ohm's law and power`,
      html: `<p>In <b>1827</b> the German physicist <b>Georg Simon Ohm</b> discovered that in many conductors voltage and current are <b>directly proportional</b>:</p>
<p style="font-size:1.3em;text-align:center"><b>V = R × I</b></p>
<p>and therefore: <b>I = V ÷ R</b> and <b>R = V ÷ I</b>.</p>
<p>Example: a resistance of <b>100 Ω</b> connected to <b>5 V</b> ➜ I = 5 ÷ 100 = <b>0.05 A</b> = 50 mA (milliamperes).</p>
<p>The <b>electrical power</b> (how much energy is used every second) is measured in <b>watts (W)</b>:</p>
<p style="font-size:1.3em;text-align:center"><b>P = V × I</b></p>
<p>Example: a hair dryer at 230 V drawing 8 A has a power of 230 × 8 = <b>1840 W</b>. The energy consumed is paid for in <b>kilowatt-hours (kWh)</b>: 1 kW used for 1 hour.</p>`
    },
    {
      type: `quiz`, title: `Mini-quiz: quantities and Ohm's law`,
      questions: [
        { type: `mc`, q: `In what unit is resistance measured?`, options: [`volt`, `ampere`, `ohm`], answer: 2, explain: `Resistance is measured in ohms (Ω), in honour of Georg Ohm.` },
        { type: `num`, q: `A 10 Ω resistor is connected to a 9 V battery. How many amperes flow?`, answer: 0.9, tol: 0.01, unit: `A`, explain: `I = V ÷ R = 9 ÷ 10 = 0.9 A.` },
        { type: `tf`, q: `Plastic is a good conductor.`, answer: false, explain: `Plastic is an insulator: that is why it covers electric wires.` }
      ]
    },
    {
      type: `text`, title: `4. The electric circuit: series and parallel`,
      html: `<p>A basic circuit always has:</p>
<ol>
<li>a <b>source</b> (battery, cell, power supply) that provides the voltage;</li>
<li><b>conductors</b> (wires) that carry the current;</li>
<li>a <b>load</b> (bulb, motor, LED) that turns electrical energy into light, movement, heat…;</li>
<li>a <b>switch</b> to open or close the circuit.</li>
</ol>
<p>Current flows only if the circuit is <b>closed</b>. By convention it is said to flow from <b>+</b> to <b>−</b> (conventional current), even though the electrons move the other way!</p>
<p><b>Series connection</b>: the components are one after the other, on a single path. The current is the same in all of them; if one bulb burns out, they all go off (like old Christmas lights). Resistances add up: R<sub>tot</sub> = R<sub>1</sub> + R<sub>2</sub>.</p>
<p><b>Parallel connection</b>: each component has its own branch. The voltage is the same across all of them; if one bulb burns out, the others stay on. This is how the sockets in your home are connected.</p>`
    },
    {
      type: `svg`, title: `Diagram: a circuit in series and in parallel`,
      caption: `On the left two bulbs in series (a single path); on the right in parallel (two branches). Unified symbols: cell, switch, lamp.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="150" y="28" font-size="18" font-weight="bold" fill="#1e40af" text-anchor="middle">SERIES</text>
<text x="450" y="28" font-size="18" font-weight="bold" fill="#166534" text-anchor="middle">PARALLEL</text>
<g stroke="#0f172a" stroke-width="3" fill="none">
<polyline points="40,150 40,60 105,60"/><polyline points="135,60 260,60 260,95"/><line x1="260" y1="145" x2="260" y2="175"/><polyline points="260,225 260,250 40,250 40,180"/>
<line x1="105" y1="60" x2="130" y2="45"/>
<line x1="20" y1="150" x2="60" y2="150"/><line x1="28" y1="180" x2="52" y2="180"/>
<circle cx="260" cy="120" r="22"/><line x1="245" y1="105" x2="275" y2="135"/><line x1="275" y1="105" x2="245" y2="135"/>
<circle cx="260" cy="200" r="22"/><line x1="245" y1="185" x2="275" y2="215"/><line x1="275" y1="185" x2="245" y2="215"/>
</g>
<circle cx="105" cy="60" r="4" fill="#0f172a"/><circle cx="135" cy="60" r="4" fill="#0f172a"/>
<text x="70" y="145" font-size="16" fill="#dc2626" font-weight="bold">+</text>
<text x="70" y="195" font-size="16" fill="#2563eb" font-weight="bold">−</text>
<text x="120" y="88" font-size="13" fill="#334155" text-anchor="middle">switch</text>
<text x="100" y="170" font-size="13" fill="#334155" text-anchor="middle">cell</text>
<g stroke="#0f172a" stroke-width="3" fill="none">
<polyline points="340,150 340,60 560,60 560,98"/><polyline points="460,60 460,98"/>
<polyline points="460,142 460,250"/><polyline points="560,142 560,250 340,250 340,180"/>
<line x1="320" y1="150" x2="360" y2="150"/><line x1="328" y1="180" x2="352" y2="180"/>
<circle cx="460" cy="120" r="22"/><line x1="445" y1="105" x2="475" y2="135"/><line x1="475" y1="105" x2="445" y2="135"/>
<circle cx="560" cy="120" r="22"/><line x1="545" y1="105" x2="575" y2="135"/><line x1="575" y1="105" x2="545" y2="135"/>
</g>
<circle cx="460" cy="60" r="5" fill="#0f172a"/><circle cx="460" cy="250" r="5" fill="#0f172a"/>
<text x="370" y="145" font-size="16" fill="#dc2626" font-weight="bold">+</text>
<text x="370" y="195" font-size="16" fill="#2563eb" font-weight="bold">−</text>
<text x="510" y="200" font-size="13" fill="#166534" text-anchor="middle">2 branches</text>
<text x="300" y="285" font-size="14" fill="#334155" text-anchor="middle">⊗ = lamp · long/short = cell (+/−) · ● = node</text>
</svg>`
    },
    {
      type: `text`, title: `5. From electricity to electronics: the components`,
      html: `<p><b>Electrical engineering</b> uses electricity as <b>energy</b> (motors, heaters, lights). <b>Electronics</b> uses it to <b>control</b> and carry <b>information</b> (computers, phones, sensors). The main components:</p>
<ul>
<li><b>Resistor</b>: limits the current. Its value is written with <b>coloured bands</b> (e.g. brown-black-red = 1000 Ω = 1 kΩ).</li>
<li><b>Diode</b>: lets the current pass in <b>one direction only</b>, like a non-return valve.</li>
<li><b>LED</b> (Light Emitting Diode): a diode that <b>emits light</b>. It has a long leg (+, anode) and a short one (−, cathode) and must always be protected with a <b>resistor</b>, otherwise it burns out.</li>
<li><b>Capacitor</b>: stores electric charge for a moment and releases it (like a small tank): used to filter, time, or power the flash of a camera.</li>
<li><b>Transistor</b>: a switch or amplifier <b>controlled electrically</b>, with no moving parts. A modern processor contains <b>billions</b> of them.</li>
<li><b>Integrated circuit</b> (chip): many miniaturised components on a small slice of silicon.</li>
</ul>`
    },
    {
      type: `text`, title: `6. Sensors: the "senses" of circuits`,
      html: `<p>A <b>sensor</b> transforms a physical quantity (light, heat, movement…) into an <b>electrical signal</b> that a circuit or a microcontroller can read.</p>
<table>
<tr><th>Sensor</th><th>What it "feels"</th><th>Where you find it</th></tr>
<tr><td><b>Photoresistor (LDR)</b></td><td>light: more light, less resistance</td><td>street lamps that switch on in the dark</td></tr>
<tr><td><b>Thermistor (NTC)</b></td><td>temperature</td><td>thermostat, fridge, digital thermometer</td></tr>
<tr><td><b>PIR</b> (passive infrared)</td><td>movement of warm bodies</td><td>alarms, staircase lights</td></tr>
<tr><td><b>Ultrasound</b></td><td>distance (echo)</td><td>car parking sensors</td></tr>
<tr><td><b>Microphone</b></td><td>sound</td><td>phone, voice assistants</td></tr>
<tr><td><b>Accelerometer</b></td><td>movement and tilt</td><td>smartphone (screen rotation), step counter</td></tr>
</table>
<p>The signal can be <b>analogue</b> (it varies continuously, like brightness) or <b>digital</b> (only 0 and 1, on/off).</p>`
    },
    {
      type: `widget`, title: `Game: conductor or insulator?`,
      widget: `classify`,
      options: {
        groups: [`Conductors ⚡`, `Insulators 🛑`, `Semiconductors 🔬`],
        items: [
          [`🟠 copper`, 0], [`🥈 silver`, 0], [`✏️ pencil graphite`, 0], [`🌊 salt water`, 0],
          [`🧤 rubber`, 1], [`🍶 glass`, 1], [`🪵 dry wood`, 1], [`🧴 plastic`, 1], [`🍽️ ceramic`, 1],
          [`💎 silicon`, 2], [`⚙️ germanium`, 2]
        ]
      },
      caption: `Warning: tap water at home (with dissolved salts) conducts! Never touch sockets or appliances with wet hands.`
    },
    {
      type: `example`, title: `Practical example: calculating the resistor for an LED`,
      html: `<p>You want to light a <b>red LED</b> with a <b>5 V</b> USB port. The LED needs about <b>2 V</b> and a current of <b>20 mA</b> (0.02 A).</p>
<ol>
<li>Voltage the resistor must "absorb": 5 − 2 = <b>3 V</b>.</li>
<li>Ohm's law: R = V ÷ I = 3 ÷ 0.02 = <b>150 Ω</b>.</li>
<li>Choose the nearest standard value, a little larger: <b>150 Ω or 220 Ω</b> (the LED will be a bit less bright but safer).</li>
</ol>
<p>Without a resistor, the current would rise too much and the LED would burn out in an instant.</p>`
    },
    {
      type: `example`, title: `Practical example: the automatic garden light`,
      html: `<p>A solar-powered garden lamp works like this:</p>
<ul>
<li>during the day the <b>solar panel</b> (made of silicon) turns light into electricity and charges a <b>battery</b>;</li>
<li>a <b>light sensor</b> (often the panel itself or a photoresistor) detects when it gets dark;</li>
<li>a <b>transistor</b> acts as an automatic switch and turns on the <b>LED</b>.</li>
</ul>
<p>Generator, sensor, control, actuator: it is a scheme you will find in all automatic devices.</p>`
    },
    {
      type: `curiosity`, title: `Did you know… the battery was invented by an Italian?`,
      html: `<p>In <b>1799</b> <b>Alessandro Volta</b>, a professor at Pavia, stacked discs of <b>zinc</b> and <b>copper</b> separated by cloths soaked in salt water: this was the <b>voltaic pile</b>, the first generator of direct current. He reported it in 1800 to the Royal Society in London. In his honour the unit of voltage is called the <b>volt</b>. The Italian word for battery, "pila", comes from that "pile" of discs!</p>`
    },
    {
      type: `curiosity`, title: `Did you know… Arduino was born in Ivrea?`,
      html: `<p>The <b>Arduino</b> board, used all over the world to learn electronics and build robots, was born in <b>2005</b> at the Interaction Design Institute in <b>Ivrea</b> (in Piedmont), thanks to Massimo Banzi and colleagues. The name comes from the bar they frequented, itself named after <b>Arduin of Ivrea</b>, King of Italy around the year 1000. The first <b>transistor</b>, by contrast, was built in <b>1947</b> at Bell Labs in the USA by Bardeen, Brattain and Shockley (Nobel Prize 1956).</p>`
    },
    {
      type: `remember`, title: `To remember (and safety!)`,
      html: `<ul>
<li>Current = flow of charges in a <b>closed</b> circuit.</li>
<li><b>V = R × I</b> (Ohm's law); <b>P = V × I</b> (power).</li>
<li>Series: same current, one path. Parallel: same voltage, more branches.</li>
<li>Electronics = controlling electricity with semiconductors (diodes, LEDs, transistors, chips).</li>
<li>Sensors = turn physical quantities into electrical signals.</li>
<li>⚠️ <b>Never</b> experiment with the mains socket (230 V): use only batteries or low-voltage power supplies (up to 12 V) and ask an adult.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Other ways to understand it`,
      intro: `Electricity cannot be seen: that is why different images and comparisons are needed. Choose yours.`,
      tabs: [
        {
          label: `💧 Water in pipes`,
          html: `<p>A circuit is like a closed water system:</p>
<ul>
<li>the <b>pump</b> is the battery: it creates the pressure (voltage, V);</li>
<li>the <b>water</b> flowing is the current (I);</li>
<li>a <b>narrow pipe</b> is the resistance (R): the narrower it is, the less water passes;</li>
<li>a <b>turbine</b> that turns is the bulb: it uses the energy of the water;</li>
<li>a <b>tap</b> is the switch.</li>
</ul>
<p>More pressure ➜ more water; narrower pipe ➜ less water. This is Ohm's law!</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#ecfeff"/>
<rect x="40" y="40" width="520" height="160" rx="30" fill="none" stroke="#0891b2" stroke-width="22"/>
<rect x="40" y="40" width="520" height="160" rx="30" fill="none" stroke="#67e8f9" stroke-width="12" stroke-dasharray="14 10"/>
<circle cx="50" cy="120" r="34" fill="#f97316" stroke="#7c2d12" stroke-width="3"/>
<text x="50" y="128" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">V</text>
<rect x="250" y="32" width="100" height="16" fill="#0e7490"/>
<text x="300" y="25" font-size="15" text-anchor="middle" fill="#0e7490" font-weight="bold">narrow pipe = R</text>
<circle cx="550" cy="120" r="30" fill="#fde047" stroke="#854d0e" stroke-width="3"/>
<text x="550" y="128" font-size="22" text-anchor="middle">💡</text>
<text x="300" y="232" font-size="15" text-anchor="middle" fill="#0e7490" font-weight="bold">water flow = current I</text>
<text x="105" y="125" font-size="14" fill="#7c2d12" font-weight="bold">pump = cell</text>
<text x="490" y="170" font-size="14" fill="#854d0e" font-weight="bold">turbine = lamp</text>
</svg>`
        },
        {
          label: `🔺 The Ohm triangle`,
          html: `<p>A trick used in English and German schools: write <b>V</b> at the top and <b>R · I</b> at the bottom in a triangle. Cover with your finger the quantity you are looking for:</p>
<ul>
<li>cover V ➜ R × I remains;</li>
<li>cover I ➜ V over R remains ➜ V ÷ R;</li>
<li>cover R ➜ V over I remains ➜ V ÷ I.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#fef9c3"/>
<polygon points="300,20 470,220 130,220" fill="#fde68a" stroke="#a16207" stroke-width="5"/>
<line x1="190" y1="140" x2="410" y2="140" stroke="#a16207" stroke-width="4"/>
<line x1="300" y1="140" x2="300" y2="220" stroke="#a16207" stroke-width="4"/>
<text x="300" y="115" font-size="48" font-weight="bold" fill="#dc2626" text-anchor="middle">V</text>
<text x="240" y="198" font-size="44" font-weight="bold" fill="#2563eb" text-anchor="middle">R</text>
<text x="360" y="198" font-size="44" font-weight="bold" fill="#16a34a" text-anchor="middle">I</text>
<text x="520" y="110" font-size="16" fill="#713f12" text-anchor="middle">V = R × I</text>
<text x="520" y="140" font-size="16" fill="#713f12" text-anchor="middle">I = V ÷ R</text>
<text x="520" y="170" font-size="16" fill="#713f12" text-anchor="middle">R = V ÷ I</text>
</svg>`
        },
        {
          label: `🚗 Road and traffic`,
          html: `<p>Imagine the electrons as <b>cars</b>:</p>
<ul>
<li>the <b>voltage</b> is the <b>slope</b> of the road: the steeper it is, the more the cars are pushed;</li>
<li>the <b>current</b> is <b>how many cars</b> pass under a bridge every second;</li>
<li>the <b>resistance</b> is a <b>narrowing</b> of the road;</li>
<li>in <b>series</b>: two roadworks one after the other on the same road; in <b>parallel</b>: two alternative roads, the traffic splits.</li>
</ul>`
        },
        {
          label: `🧩 Components and functions`,
          html: `<p>Match each component with what it does.</p>`,
          widget: `match`,
          options: { pairs: [
            [`Resistor`, `limits the current`],
            [`Diode`, `lets the current pass in one direction only`],
            [`LED`, `emits light`],
            [`Capacitor`, `stores charge for a short time`],
            [`Transistor`, `electrically controlled switch`],
            [`Photoresistor`, `changes resistance with light`]
          ] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Map: from the atom to the chip`,
      nodes: [
        { id: `car`, label: `Electric charge`, x: 50, y: 6, color: `#64748b`, html: `Property of protons (+) and electrons (−).`, why: `The Greeks already noticed that rubbed amber attracts small straws: "amber" in Greek is <i>élektron</i>, the origin of "electricity". The electron was discovered by <b>J. J. Thomson</b> in 1897.` },
        { id: `cor`, label: `Current`, x: 20, y: 28, color: `#3b82f6`, html: `Orderly flow of charges (A).`, why: `It is measured in amperes in honour of <b>André-Marie Ampère</b>, who in 1820 studied the forces between wires carrying current.` },
        { id: `ten`, label: `Voltage`, x: 50, y: 28, color: `#f97316`, html: `The "push" that moves the charges (V).`, why: `The first stable generator was the battery of <b>Alessandro Volta</b> (1799): chemical reactions between two different metals create a potential difference.` },
        { id: `res`, label: `Resistance`, x: 80, y: 28, color: `#ef4444`, html: `Opposition to the flow of current (Ω).`, why: `Moving electrons bump into the atoms of the material and give up energy as heat: this is the <b>Joule effect</b>, used in heaters and toasters.` },
        { id: `ohm`, label: `Ohm's law`, x: 50, y: 50, color: `#a855f7`, html: `V = R × I.`, why: `<b>Georg Simon Ohm</b> published it in 1827 after measuring currents in wires of different lengths. At first it was criticised; then it became the basis of electrical engineering.` },
        { id: `circ`, label: `Circuit`, x: 20, y: 72, color: `#22c55e`, html: `Source, wires, load, switch; series or parallel.`, why: `Charges are neither created nor destroyed (conservation of charge): to flow continuously they must return to the source, so the path has to be closed.` },
        { id: `semi`, label: `Semiconductors`, x: 50, y: 72, color: `#0ea5e9`, html: `Silicon and germanium: conduct "on command".`, why: `By adding tiny amounts of other elements (<b>doping</b>) you control how they conduct. Diodes and transistors (1947) are based on this principle.` },
        { id: `sens`, label: `Sensors`, x: 80, y: 72, color: `#eab308`, html: `Turn light, heat, movement into electrical signals.`, why: `Many exploit the fact that the resistance of a material changes with light (photoresistor) or with temperature (thermistor): with Ohm's law the change is measured.` },
        { id: `chip`, label: `Chips and microcontrollers`, x: 50, y: 94, color: `#7c3aed`, html: `Billions of transistors on a small piece of silicon.`, why: `The integrated circuit was invented in 1958–59 by <b>Jack Kilby</b> and <b>Robert Noyce</b>. In 1971 the Italian <b>Federico Faggin</b> led the project of the first commercial microprocessor, the Intel 4004.` }
      ],
      edges: [
        [`car`, `cor`, `set in motion`], [`car`, `ten`, `pushed by`], [`cor`, `ohm`, `I`], [`ten`, `ohm`, `V`], [`res`, `ohm`, `R`],
        [`ohm`, `circ`, `applies to`], [`ohm`, `semi`, `materials`], [`semi`, `chip`, `build`], [`semi`, `sens`, `build`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: components and circuits`,
      questions: [
        { type: `mc`, q: `In a parallel circuit, if one bulb burns out…`, options: [`they all go off`, `the others stay on`, `the others get brighter and burn out`], answer: 1, explain: `Each bulb has its own branch: the other branches keep working.` },
        { type: `num`, q: `What power does a lamp have that draws 0.1 A at 230 V?`, answer: 23, tol: 0, unit: `W`, explain: `P = V × I = 230 × 0.1 = 23 W.` },
        { type: `mc`, q: `Which component lets the current pass in one direction only?`, options: [`Capacitor`, `Diode`, `Resistor`], answer: 1, explain: `The diode is like a one-way valve.` }
      ]
    }
  ],
  glossary: [
    { t: `Electric current (I)`, d: `Orderly flow of charges; measured in amperes (A).` },
    { t: `Voltage (V)`, d: `Potential difference that pushes the charges; measured in volts.` },
    { t: `Resistance (R)`, d: `Opposition to the flow of current; measured in ohms (Ω).` },
    { t: `Ohm's law`, d: `V = R × I.` },
    { t: `Power (P)`, d: `Energy used every second: P = V × I, in watts (W).` },
    { t: `Semiconductor`, d: `Material (e.g. silicon) with controllable conductivity.` },
    { t: `Transistor`, d: `Component that acts as an electrically controlled switch or amplifier.` },
    { t: `LED`, d: `Diode that emits light; must be protected with a resistor.` },
    { t: `Sensor`, d: `Device that turns a physical quantity into an electrical signal.` },
    { t: `Multimeter`, d: `Instrument that measures voltage, current and resistance.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `The electric current in metals is a flow of…`, options: [`protons`, `electrons`, `neutrons`], answer: 1, explain: `It is the free electrons that move in metals.` },
      { type: `mc`, q: `Voltage is measured in…`, options: [`amperes`, `volts`, `watts`], answer: 1, explain: `Volts, in honour of Alessandro Volta.` },
      { type: `num`, q: `A 220 Ω resistor has 0.01 A flowing through it. What is the voltage across it?`, answer: 2.2, tol: 0.01, unit: `V`, explain: `V = R × I = 220 × 0.01 = 2.2 V.` },
      { type: `num`, q: `A 12 V battery makes 2 A flow through a motor. What is the resistance of the motor?`, answer: 6, tol: 0, unit: `Ω`, explain: `R = V ÷ I = 12 ÷ 2 = 6 Ω.` },
      { type: `num`, q: `Two resistances of 100 Ω and 47 Ω in series: total resistance?`, answer: 147, tol: 0, unit: `Ω`, explain: `In series the resistances add up: 100 + 47 = 147 Ω.` },
      { type: `tf`, q: `Current flows even if the circuit is open.`, answer: false, explain: `A closed circuit is needed.` },
      { type: `tf`, q: `Mains sockets in the home are connected in parallel.`, answer: true, explain: `So each appliance receives 230 V and works independently.` },
      { type: `mc`, q: `Which sensor does a street lamp that switches on by itself in the dark use?`, options: [`Thermistor`, `Photoresistor (LDR)`, `Accelerometer`], answer: 1, explain: `The photoresistor changes resistance with light.` },
      { type: `text`, q: `What is the name of the Italian who invented the battery in 1799?`, answer: [`volta`, `alessandro volta`], explain: `Alessandro Volta, a professor at Pavia.` },
      { type: `order`, q: `Put in order the path of the signal in an automatic lamp.`, items: [`The sensor detects the darkness`, `The control circuit processes the signal`, `The transistor closes the circuit`, `The LED lights up`], explain: `Sensor ➜ control ➜ electronic switch ➜ actuator (LED).` },
      { type: `mc`, q: `Why does an LED need a series resistor?`, options: [`To change colour`, `To limit the current and stop it burning out`, `To make it blink`], answer: 1, explain: `Without a resistor the current would rise too much.` },
      { type: `mc`, q: `What material are almost all chips made of?`, options: [`Copper`, `Silicon`, `Plastic`], answer: 1, explain: `Silicon is a semiconductor.` }
    ]
  }
});
