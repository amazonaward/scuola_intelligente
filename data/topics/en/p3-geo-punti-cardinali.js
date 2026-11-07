TOPIC('en', {
  id: "p3-geo-punti-cardinali",
  title: "The cardinal points",
  intro: `So that we don't get lost and so that we can explain where a place is, we use four special directions: <b>North</b>, <b>East</b>, <b>South</b> and <b>West</b>. They are the <b>cardinal points</b>. Let's learn to find them with the <b>Sun</b>, with the <b>stars</b> and with the <b>compass</b>, and to read them on maps.`,
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Left and right are not enough",
      html: `<p>If you tell a friend "the school is on the right", they need to know which way you are facing. If you turn round, the right changes! Right, left, in front and behind are <b>relative directions</b>: they depend on how we are facing.</p>
<p>The <b>cardinal points</b>, instead, are <b>always the same</b>, for everyone, in every part of the world:</p>
<ul>
<li><b>North</b> (N);</li>
<li><b>South</b> (S);</li>
<li><b>East</b> (E), also called the <b>Orient</b> or the <b>Levant</b>;</li>
<li><b>West</b> (W), also called the <b>Occident</b>.</li>
</ul>
<p>"Cardinal" comes from the Latin <i>cardo</i>, a hinge: they are the "hinge" directions on which all orientation turns.</p>`
    },
    {
      type: "text",
      title: "Step 1: the Sun shows us the way",
      html: `<p>The oldest way to find your bearings is to look at the <b>Sun</b>:</p>
<ul>
<li>🌅 in the morning the Sun <b>rises</b> in the <b>East</b> (in Italian the East is also called <i>Levante</i>: where the Sun "lifts itself up");</li>
<li>☀️ at midday, in Italy, the Sun is in the <b>South</b> (in Italian the South is also called <i>Mezzogiorno</i>, "midday");</li>
<li>🌇 in the evening the Sun <b>sets</b> in the <b>West</b> (in Italian <i>Ponente</i>: where the Sun "puts itself down", that is, goes down);</li>
<li>🌙 <b>North</b> is the direction where the Sun never passes, for us.</li>
</ul>
<p>In fact the Sun rises exactly in the East and sets exactly in the West only two days a year, at the <b>equinoxes</b> (around 21 March and 23 September). In summer it rises a bit more towards the North-East, in winter more towards the South-East.</p>`
    },
    {
      type: "svg",
      title: "The Sun's journey across the sky",
      svg: `<svg viewBox="0 0 600 310" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="310" fill="#e0f2fe"/>
<rect y="220" width="600" height="90" fill="#86efac"/>
<path d="M60 220 Q300 -20 540 220" stroke="#f59e0b" stroke-width="4" stroke-dasharray="10 8" fill="none"/>
<circle cx="70" cy="205" r="22" fill="#fb923c"/>
<circle cx="300" cy="62" r="26" fill="#facc15"/>
<circle cx="530" cy="205" r="22" fill="#f97316"/>
<text x="70" y="160" font-size="15" text-anchor="middle" fill="#9a3412" font-weight="bold">morning</text>
<text x="300" y="25" font-size="15" text-anchor="middle" fill="#854d0e" font-weight="bold">midday</text>
<text x="530" y="160" font-size="15" text-anchor="middle" fill="#9a3412" font-weight="bold">evening</text>
<text x="70" y="255" font-size="20" text-anchor="middle" fill="#14532d" font-weight="bold">EAST</text>
<text x="300" y="255" font-size="20" text-anchor="middle" fill="#14532d" font-weight="bold">SOUTH</text>
<text x="530" y="255" font-size="20" text-anchor="middle" fill="#14532d" font-weight="bold">WEST</text>
<circle cx="300" cy="285" r="10" fill="#1e293b"/>
<text x="318" y="292" font-size="14" fill="#1e293b">you, looking towards the South</text>
<text x="300" y="150" font-size="14" text-anchor="middle" fill="#334155">behind you is the NORTH</text>
</svg>`,
      caption: "If you look at the Sun at midday (in Italy) you have the South in front of you, the East on your left, the West on your right and the North behind."
    },
    {
      type: "remember",
      title: "The arms trick",
      html: `<p>In the morning stand with your <b>right arm</b> stretched out towards the rising Sun. Then:</p>
<ul>
<li>your <b>right</b> arm points to the <b>East</b>;</li>
<li>your <b>left</b> arm points to the <b>West</b>;</li>
<li>in <b>front</b> of you is the <b>North</b>;</li>
<li><b>behind</b> you is the <b>South</b>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: the Sun and the directions",
      questions: [
        { type: "mc", q: "Where does the Sun rise?", options: ["In the North", "In the East", "In the West"], answer: 1, explain: "The Sun rises in the East." },
        { type: "mc", q: "What is the West also called?", options: ["Occident", "Midday", "The North"], answer: 0, explain: "The Occident, from the Latin for \"setting\": it is where the Sun goes down." },
        { type: "tf", q: "Right and left are the same for everyone, like the cardinal points.", answer: false, explain: "Right and left depend on which way you are facing; the cardinal points do not." }
      ]
    },
    {
      type: "text",
      title: "Step 2: the wind rose",
      html: `<p>Between the four cardinal points there are the <b>intermediate</b> directions:</p>
<ul>
<li><b>North-East</b> (NE), between North and East;</li>
<li><b>South-East</b> (SE), between South and East;</li>
<li><b>South-West</b> (SW), between South and West;</li>
<li><b>North-West</b> (NW), between North and West.</li>
</ul>
<p>All together they form the <b>wind rose</b> (or compass rose). It is called that because Mediterranean sailors gave a name to the <b>wind</b> coming from each direction: <b>Tramontana</b> from the North, <b>Grecale</b> from the North-East, <b>Levante</b> from the East, <b>Scirocco</b> from the South-East, <b>Ostro</b> from the South, <b>Libeccio</b> from the South-West, <b>Ponente</b> from the West and <b>Maestrale</b> (Mistral) from the North-West.</p>`
    },
    {
      type: "widget",
      title: "Complete the wind rose",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#f8fafc"/>
<circle cx="300" cy="170" r="140" fill="#e0f2fe" stroke="#0369a1" stroke-width="3"/>
<polygon points="300,40 318,170 300,300 282,170" fill="#1e3a8a"/>
<polygon points="170,170 300,152 430,170 300,188" fill="#1e3a8a"/>
<polygon points="300,40 318,170 300,170" fill="#dc2626"/>
<polygon points="210,80 304,166 390,260 296,174" fill="#60a5fa" opacity="0.8"/>
<polygon points="390,80 304,174 210,260 296,166" fill="#60a5fa" opacity="0.8"/>
<circle cx="300" cy="170" r="10" fill="#facc15" stroke="#1e293b" stroke-width="2"/>
</svg>`,
        spots: [
          { x: 300, y: 45, label: "North" },
          { x: 425, y: 170, label: "East" },
          { x: 300, y: 295, label: "South" },
          { x: 175, y: 170, label: "West" },
          { x: 385, y: 85, label: "North-East" },
          { x: 385, y: 255, label: "South-East" },
          { x: 215, y: 255, label: "South-West" },
          { x: 215, y: 85, label: "North-West" }
        ]
      },
      caption: "Touch each point and choose the right name. The red point shows the North. Remember the clockwise order: N, E, S, W (\"Never Eat Soggy Waffles\")."
    },
    {
      type: "text",
      title: "Step 3: the compass",
      html: `<p>At night, in cloudy weather or inside a wood you can't see the Sun. Then we use the <b>compass</b>.</p>
<p>Inside the compass there is a <b>magnetised needle</b> (a small magnet) free to turn. The Earth behaves like a gigantic magnet: that is why the needle always turns with its coloured tip towards the <b>North</b>.</p>
<p>How to use it:</p>
<ol>
<li>hold the compass <b>flat</b>, still, away from iron objects and from the phone;</li>
<li>wait for the needle to settle;</li>
<li>turn the compass until the letter <b>N</b> on the dial is under the coloured tip of the needle;</li>
<li>now you can read all the directions!</li>
</ol>
<p>Careful: the needle shows <b>magnetic North</b>, which is a little different from the geographic <b>North Pole</b> and moves slowly every year. In Italy the difference is small, a few degrees.</p>`
    },
    {
      type: "3d",
      title: "North and South on the globe",
      scene: "globe",
      options: {
        points: [
          { lat: 90, lon: 0, label: "North Pole", color: "#dc2626" },
          { lat: -90, lon: 0, label: "South Pole", color: "#2563eb" },
          { lat: 86, lon: 140, label: "Magnetic North Pole (approx., it moves)", color: "#f97316" },
          { lat: 41.9, lon: 12.5, label: "Rome", color: "#16a34a" },
          { lat: 0, lon: -78.5, label: "Quito (on the Equator)", color: "#a855f7" },
          { lat: -33.9, lon: 151.2, label: "Sydney", color: "#0ea5e9" }
        ],
        routes: [{ points: [3, 0], color: "#dc2626" }]
      },
      caption: "Rotate the globe. From any point, going North means going towards the North Pole (the red line starts from Rome). The Equator divides the Earth into the Northern Hemisphere and the Southern Hemisphere."
    },
    {
      type: "text",
      title: "Step 4: the cardinal points on maps",
      html: `<p>On almost all maps <b>North is at the top</b>, <b>South at the bottom</b>, <b>East on the right</b> and <b>West on the left</b>. Often in one corner there is a little wind rose or an arrow with an "N".</p>
<p>This way we can describe where places are. For example, in Italy:</p>
<ul>
<li>the <b>Alps</b> are in the <b>North</b>;</li>
<li><b>Sicily</b> is in the <b>South</b>;</li>
<li>the <b>Adriatic Sea</b> is to the <b>East</b> of the peninsula;</li>
<li>the <b>Tyrrhenian Sea</b> is to the <b>West</b>;</li>
<li><b>Piedmont</b> is in the <b>North-West</b>, <b>Puglia</b> in the <b>South-East</b>.</li>
</ul>
<p>That is why we say "northern Italy" (the North), "central" and "southern" (the South).</p>`
    },
    {
      type: "svg",
      title: "Italy and the cardinal points",
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#bae6fd"/>
<path d="M150 40 L330 30 L350 60 L330 90 L300 95 L320 140 L370 190 L420 215 L450 240 L430 250 L400 235 L395 260 L370 285 L355 270 L360 245 L330 215 L290 185 L260 150 L230 110 L200 95 L170 80 Z" fill="#86efac" stroke="#166534" stroke-width="3"/>
<path d="M320 300 L380 295 L370 325 L330 330 Z" fill="#86efac" stroke="#166534" stroke-width="3"/>
<path d="M190 190 L220 185 L225 250 L195 255 Z" fill="#86efac" stroke="#166534" stroke-width="3"/>
<text x="240" y="62" font-size="15" fill="#14532d" font-weight="bold">Alps</text>
<text x="350" y="322" font-size="13" fill="#14532d" font-weight="bold">Sicily</text>
<text x="160" y="275" font-size="13" fill="#14532d" font-weight="bold">Sardinia</text>
<text x="400" y="140" font-size="15" fill="#0c4a6e" font-weight="bold">Adriatic Sea</text>
<text x="220" y="300" font-size="15" fill="#0c4a6e" font-weight="bold">Tyrrhenian Sea</text>
<circle cx="170" cy="70" r="6" fill="#dc2626"/><text x="100" y="60" font-size="13" fill="#7f1d1d" font-weight="bold">Turin</text>
<g transform="translate(520,80)">
<circle r="45" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
<polygon points="0,-38 7,0 0,38 -7,0" fill="#1e3a8a"/>
<polygon points="-38,0 0,-7 38,0 0,7" fill="#1e3a8a"/>
<polygon points="0,-38 7,0 0,0" fill="#dc2626"/>
<text y="-50" font-size="16" text-anchor="middle" font-weight="bold" fill="#dc2626">N</text>
<text y="64" font-size="16" text-anchor="middle" font-weight="bold">S</text>
<text x="56" y="6" font-size="16" text-anchor="middle" font-weight="bold">E</text>
<text x="-56" y="6" font-size="16" text-anchor="middle" font-weight="bold">W</text>
</g>
</svg>`,
      caption: "Simplified drawing (not to scale). With the wind rose in the corner, you can say that Turin is in the North-West and Sicily in the South."
    },
    {
      type: "example",
      title: "Practical example: finding your bearings in your classroom",
      html: `<p>Try this experiment at school:</p>
<ol>
<li>On a sunny morning, look at which window the light comes in through: that wall faces more or less <b>East</b>.</li>
<li>Write a sign saying "EAST" and hang it on that wall.</li>
<li>On the opposite wall hang "WEST".</li>
<li>Stand with your back to the West, looking at the East: on your <b>left</b> is the <b>North</b>, on your <b>right</b> the <b>South</b>.</li>
<li>Check with a compass (or with a phone compass app, with your teacher's help): were you right?</li>
</ol>
<p>Now you can say: "The board is in the North, the door in the West…".</p>`
    },
    {
      type: "example",
      title: "Practical example: the shadow of a stick",
      html: `<p>A very ancient way to find North with the Sun, called a <b>gnomon</b>:</p>
<ol>
<li>stick a straight stick into flat, sunny ground, in late morning;</li>
<li>mark the tip of the <b>shadow</b> with a pebble;</li>
<li>wait 15–20 minutes: the shadow has moved. Mark the new tip with another pebble;</li>
<li>join the two pebbles with a line: the first mark is towards the <b>West</b>, the second towards the <b>East</b>;</li>
<li>the perpendicular line shows North and South. Around midday the stick's shadow is at its shortest and points (in Italy) straight towards the <b>North</b>.</li>
</ol>`
    },
    {
      type: "curiosity",
      title: "Did you know… the compass was invented in China?",
      html: `<p>More than 2000 years ago, in <b>China</b>, people used a spoon of <b>lodestone</b> (a stone that attracts iron) placed on a bronze plate: the handle always turned towards the <b>South</b>! It was called a <b>sinan</b>, "south-pointer". Chinese scientists described the magnetic needle for navigation around the year <b>1100</b>; soon after, the compass reached the Mediterranean too. In <b>Amalfi</b> there is a statue of Flavio Gioia, whom a legend names as the inventor of the compass: today we know that Amalfi sailors improved it, but did not invent it.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know… some peoples never say \"right\" and \"left\"?",
      html: `<p>In Australia, the Aboriginal people who speak the <b>Guugu Yimithirr</b> language use only the cardinal points. They don't say "you have an ant on your left leg", but "you have an ant on your west leg"! Even small children always know where North is, even inside a room with no windows.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know… \"to orient\" means \"to face the East\"?",
      html: `<p>In the Middle Ages many European maps had the <b>East (the Orient) at the top</b>, towards Jerusalem and the earthly paradise imagined in Asia. Turning towards the Orient was the way to find your path: hence the word <b>orient</b> itself! Many old churches are also built with the altar towards the East.</p>`
    },
    {
      type: "widget",
      title: "Game: match the name to the direction",
      widget: "match",
      options: {
        pairs: [
          ["Settentrione", "North"],
          ["Meridione", "South"],
          ["Levante / Oriente", "East"],
          ["Ponente / Occidente", "West"],
          ["Tramontana", "Wind from the North"],
          ["Scirocco", "Wind from the South-East"]
        ]
      }
    },
    {
      type: "alternatives",
      title: "Other ways to find North",
      intro: "No compass and the Sun doesn't help? Here are other methods, used in other countries and at other times.",
      tabs: [
        {
          label: "⭐ The North Star",
          html: `<p>At night, in our hemisphere, we look for the <b>North Star</b> (Polaris). It is the only star that seems to stand <b>still</b> while the others turn around it, because it is almost exactly above the North Pole.</p>
<p>How to find it: look for the <b>Big Dipper</b> (seven stars shaped like a saucepan). Take the two stars on the edge of the pan, opposite the handle, and extend their distance about <b>5 times</b>: you reach the North Star. Below it, on the horizon, is the <b>North</b>.</p>
<p>In the Southern Hemisphere (Australia, South America) Polaris can't be seen: people use the constellation of the <b>Southern Cross</b>.</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#0f172a"/>
<g fill="#fde68a">
<circle cx="380" cy="200" r="6"/><circle cx="440" cy="210" r="6"/><circle cx="450" cy="160" r="6"/><circle cx="390" cy="150" r="6"/>
<circle cx="330" cy="140" r="5"/><circle cx="280" cy="150" r="5"/><circle cx="230" cy="180" r="5"/>
</g>
<path d="M380 200 L440 210 L450 160 L390 150 Z M390 150 L330 140 L280 150 L230 180" stroke="#94a3b8" stroke-width="2" fill="none"/>
<path d="M440 210 L450 160 L480 30" stroke="#f87171" stroke-width="2" stroke-dasharray="6 6" fill="none"/>
<circle cx="482" cy="28" r="9" fill="#ffffff"/>
<text x="495" y="34" font-size="16" fill="#ffffff" font-weight="bold">North Star</text>
<text x="330" y="250" font-size="16" fill="#e2e8f0" font-weight="bold">Big Dipper</text>
<text x="40" y="40" font-size="14" fill="#cbd5e1">extend 5 times →</text>
<rect y="265" width="600" height="15" fill="#14532d"/>
</svg>`
        },
        {
          label: "🇦🇺 The compass in your body",
          html: `<p>Like the Guugu Yimithirr speakers in Australia, try for one day to <b>not say right and left</b>, but only North, South, East, West: "pass me the pencil that is East of the notebook".</p>
<p>At first it's hard, but the brain learns to keep in mind where the cardinal points are, like an inner compass. Many animals have a \"compass\" too: <b>sea turtles</b>, <b>homing pigeons</b> and <b>migratory birds</b> sense the Earth's magnetic field!</p>`
        },
        {
          label: "🧲 Build a compass",
          html: `<p>You need: a sewing <b>needle</b>, a <b>magnet</b>, a cork (or a leaf), a bowl of water.</p>
<ol>
<li>Rub the needle on the magnet about <b>30 times</b>, always in the <b>same direction</b>: the needle becomes a small magnet.</li>
<li>Rest the needle on the cork and set the cork floating on the water.</li>
<li>Wait: the needle will turn by itself until it shows the <b>North–South</b> line!</li>
</ol>
<p>To work out which end points North, compare with the Sun: at midday the Sun is on the opposite side.</p>`
        },
        {
          label: "🌍 North on the globe",
          html: `<p>Rotate the globe: North is always the direction towards the <b>North Pole</b>, East is the direction in which the Earth turns (that is why the Sun seems to rise in the East). In Australia, in the Southern Hemisphere, at midday the Sun is in the <b>North</b>, not the South!</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 90, lon: 0, label: "N - North Pole", color: "#dc2626" },
              { lat: -90, lon: 0, label: "S - South Pole", color: "#2563eb" },
              { lat: 45, lon: 7.7, label: "Turin", color: "#16a34a" },
              { lat: -33.9, lon: 151.2, label: "Sydney: the midday Sun is in the North", color: "#f97316" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: where do the cardinal points come from? Touch the nodes",
      nodes: [
        { id: "rotazione", label: "🌍 The Earth spins", x: 50, y: 6, color: "#0ea5e9", html: "The Earth rotates on itself from West to East in about 24 hours.", why: "That it was the Earth that turns, and not the sky, was argued by Nicolaus Copernicus (1543) and Galileo Galilei. In 1851 Léon Foucault proved it in Paris with a huge pendulum that slowly changes direction." },
        { id: "poli", label: "🧊 The Poles", x: 20, y: 28, color: "#2563eb", html: "The two points where the axis of rotation passes: North Pole and South Pole.", why: "They are the only points on Earth that don't move in a circle. North and South are defined exactly like this: the direction towards one Pole or the other." },
        { id: "sole", label: "☀️ The Sun rises and sets", x: 50, y: 30, color: "#f59e0b", html: "It rises in the East, it sets in the West.", why: "The Sun doesn't move around us: it is we who, turning with the Earth towards the East, see it appear from that side. That is why East and West are also called Levante and Ponente in Italian." },
        { id: "nsoe", label: "🧭 N, E, S, W", x: 80, y: 28, color: "#dc2626", html: "The four cardinal points.", why: "North-South follows the Earth's axis, East-West follows the direction of rotation: that is why they are perpendicular and the same for everyone. The name \"cardinal\" comes from the Latin cardo, hinge." },
        { id: "rosa", label: "🌹 Wind rose", x: 80, y: 58, color: "#ec4899", html: "8 (or 16, or 32) directions named after winds.", why: "Mediterranean sailors named the winds after where they came from: Grecale from Greece, Scirocco from Syria, Libeccio from Libya, Maestrale from the \"master wind\", that is, the strongest. They were the reference points for sailing." },
        { id: "magnete", label: "🧲 Earth's magnetism", x: 20, y: 58, color: "#7c3aed", html: "The Earth behaves like an enormous magnet.", why: "In the Earth's outer core molten iron moves and generates a magnetic field. The English physician William Gilbert first guessed this in 1600, in his book \"De Magnete\"." },
        { id: "bussola", label: "🧭 The compass", x: 50, y: 70, color: "#16a34a", html: "A magnetised needle that lines up with the magnetic field.", why: "Invented in China (first for divination, then for navigation around 1100), it reached Europe in the 12th century and let sailors navigate even without seeing the Sun or the stars." },
        { id: "carte", label: "🗺️ Maps with North at the top", x: 50, y: 93, color: "#92400e", html: "Convention: North at the top, East on the right.", why: "There is no \"up\" in space: it is a choice. It spread with navigators who used the compass, which points North, and with maps printed in the Renaissance (like those of Gerardus Mercator, 1569)." }
      ],
      edges: [
        ["rotazione", "poli", "around the axis of the"],
        ["rotazione", "sole", "makes the Sun rise and set"],
        ["poli", "nsoe", "give North and South"],
        ["sole", "nsoe", "gives East and West"],
        ["nsoe", "rosa", "are divided in the"],
        ["magnete", "bussola", "turns the needle of the"],
        ["bussola", "nsoe", "shows North"],
        ["bussola", "carte", "leads to"]
      ]
    },
    {
      type: "remember",
      title: "Remember",
      html: `<ul>
<li>The cardinal points are <b>North</b>, <b>East</b>, <b>South</b>, <b>West</b> (clockwise: "Never Eat Soggy Waffles").</li>
<li>The Sun <b>rises in the East</b>, at midday in Italy it is in the <b>South</b>, it <b>sets in the West</b>.</li>
<li>At night North is found with the <b>North Star</b>.</li>
<li>The <b>compass</b> has a magnetised needle that points to the North.</li>
<li>On maps <b>North is at the top</b>, East on the right, South at the bottom, West on the left.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: compass and maps",
      questions: [
        { type: "mc", q: "Where does the compass needle point?", options: ["Towards the North", "Towards the Sun", "Towards home"], answer: 0, explain: "The magnetised needle lines up with the Earth's magnetic field and points towards the North." },
        { type: "mc", q: "On a map, East is usually…", options: ["at the top", "on the right", "on the left"], answer: 1, explain: "North at the top, East on the right, South at the bottom, West on the left." },
        { type: "order", q: "Put the cardinal points in clockwise order, starting from North.", items: ["North", "East", "South", "West"], explain: "N → E → S → W: \"Never Eat Soggy Waffles\"." }
      ]
    }
  ],
  glossary: [
    { t: "Cardinal points", d: "The four main directions: North, East, South, West." },
    { t: "To orient oneself", d: "To work out where you are and which way to go." },
    { t: "Settentrione", d: "The Italian name for the North." },
    { t: "Meridione / Mezzogiorno", d: "Italian names for the South." },
    { t: "Levante / Oriente", d: "Italian names for the East, where the Sun rises." },
    { t: "Ponente / Occidente", d: "Italian names for the West, where the Sun sets." },
    { t: "Wind rose", d: "A drawing with the cardinal points and the intermediate directions, each named after a wind." },
    { t: "Compass", d: "An instrument with a magnetised needle that points to the North." },
    { t: "North Star", d: "A star located almost above the North Pole that shows the direction of North." },
    { t: "Equinox", d: "A day when day and night last the same and the Sun rises exactly in the East." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What are the four cardinal points?", options: ["North, South, East, West", "Right, left, up, down", "Sea, mountain, lake, river"], answer: 0, explain: "North, South, East and West." },
      { type: "mc", q: "Where does the Sun set?", options: ["In the East", "In the West", "In the North"], answer: 1, explain: "In the West, also called the Occident." },
      { type: "tf", q: "In Italy, at midday, the Sun is in the South.", answer: true, explain: "That is why in Italian the South is also called Mezzogiorno (\"midday\")." },
      { type: "text", q: "What is the instrument with a magnetised needle that shows the North called?", answer: ["compass", "the compass", "a compass"], explain: "The compass." },
      { type: "mc", q: "What is the Italian name for the North?", options: ["Meridione", "Settentrione", "Levante"], answer: 1, explain: "Settentrione; the South is the Meridione." },
      { type: "mc", q: "Which star shows the North at night?", options: ["The North Star", "The Sun", "Sirius"], answer: 0, explain: "The North Star, which you find with the help of the Big Dipper." },
      { type: "mc", q: "Which direction is between South and West?", options: ["North-East", "South-East", "South-West"], answer: 2, explain: "South-West (SW), where the Libeccio wind blows from." },
      { type: "tf", q: "On maps, North is usually at the bottom.", answer: false, explain: "North is usually at the top." },
      { type: "order", q: "Put the Sun's path during the day in order (in Italy).", items: ["Rises in the East", "At midday is in the South", "Sets in the West"], explain: "East → South → West." },
      { type: "mc", q: "Compared with Piedmont, Sicily is in the…", options: ["North-West", "South-East", "North-East"], answer: 1, explain: "Piedmont is in the North-West of Italy, Sicily in the South: compared with Piedmont it is to the South-East." },
      { type: "mc", q: "Where was the compass invented?", options: ["In China", "In America", "In Australia"], answer: 0, explain: "In China; then it reached the Mediterranean around the 12th century." },
      { type: "text", q: "What is the wind that blows from the North called (its Italian name)?", answer: ["tramontana", "la tramontana", "the tramontana"], explain: "The Tramontana, a cold wind that comes \"from beyond the mountains\"." }
    ]
  }
});
