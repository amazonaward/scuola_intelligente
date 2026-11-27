TOPIC('en', {
  id: "l1-sci-moti-terra",
  title: "Motions of the Earth and the Moon",
  intro: "You don't notice a thing, yet right now you are spinning around the Earth's axis at more than 1000 km/h (at mid-latitudes) and travelling around the Sun at about 30 km per second. These two motions give us day and night, the seasons and time zones. And the Moon, with its phases, the tides and eclipses, completes the show. In this lesson we discover the <b>geometry of the sky</b> and why it is hot in summer even though in the northern summer the Earth is <i>farther</i> from the Sun.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "The Earth's rotation",
      html: `<p>The Earth spins around its <b>axis</b> (the line passing through the poles) from <b>west to east</b> (anticlockwise as seen from the North Pole). That is why the Sun, the Moon and the stars seem to rise in the east and set in the west.</p>
<ul>
<li>The <b>sidereal day</b> (measured against the stars) lasts <b>23 h 56 min 4 s</b>.</li>
<li>The <b>solar day</b> (from one noon to the next) lasts on average <b>24 hours</b>. It is a little longer because, while the Earth spins, it also moves along its orbit and has to turn for about 4 more minutes to bring the Sun back to the same position.</li>
<li>The speed of a point on the surface depends on latitude: at the equator it is about <b>1670 km/h</b>, in Rome (about 42° N) about 1240 km/h, at the poles zero.</li>
</ul>
<p>Consequences of rotation:</p>
<ul>
<li>the <b>alternation of day and night</b>;</li>
<li>the <b>flattening at the poles</b> (the Earth is a geoid);</li>
<li>the <b>deflection of moving bodies</b> due to the <b>Coriolis effect</b>: to the right in the northern hemisphere, to the left in the southern (important for winds and currents, but not for the water draining from a sink, which depends on other factors);</li>
<li>the <b>tides</b> are explained by the Moon and the Sun, but rotation makes them "run" around the planet.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Foucault's pendulum: proof that the Earth rotates",
      html: `<p>In 1851 the French physicist <b>Léon Foucault</b> hung a 28 kg ball on a 67-metre wire from the dome of the Panthéon in Paris. The pendulum swung, and its plane of swing slowly turned: the floor, that is the Earth, was rotating beneath it. In Paris the plane makes a full turn in about 32 hours; at the poles in 24 hours; at the equator it does not turn at all. It was the first direct laboratory demonstration of the Earth's rotation.</p>`
    },
    {
      type: "text",
      title: "Revolution and the tilt of the axis",
      html: `<p>The Earth travels along an almost circular elliptical orbit around the Sun, in the same direction as its rotation (anticlockwise as seen from the North Pole). The <b>sidereal year</b> lasts <b>365.256 days</b>; the <b>tropical year</b> (from equinox to equinox, on which the calendar is based) about <b>365.242 days</b>. Hence <b>leap years</b> (Gregorian calendar, 1582): one extra day every 4 years, except for century years not divisible by 400 (1900 was not a leap year, 2000 was).</p>
<p>The Earth–Sun distance varies only a little: <b>perihelion</b> about 147.1 million km (early January), <b>aphelion</b> about 152.1 million km (early July). The difference is only 3%: <b>distance does not cause the seasons</b>.</p>
<p>The real cause is the <b>tilt of the Earth's axis</b>: the axis makes an angle of about <b>23.4°</b> (23° 27') with the perpendicular to the <b>plane of the orbit</b> (called the <b>ecliptic</b>), and throughout the year it <b>keeps the same direction in space</b> (pointing roughly towards the Pole Star). So for half of the year the northern hemisphere is tilted towards the Sun, and for the other half the southern hemisphere.</p>`
    },
    {
      type: "svg",
      title: "The seasons: why they change",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#0f172a"/>
<circle cx="320" cy="160" r="26" fill="#facc15"/><text x="320" y="205" font-size="14" text-anchor="middle" fill="#fde68a">Sun</text>
<ellipse cx="320" cy="160" rx="240" ry="105" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="6 5"/>
<g>
<circle cx="80" cy="160" r="20" fill="#3b82f6"/><line x1="68" y1="190" x2="92" y2="130" stroke="#f8fafc" stroke-width="3"/><text x="80" y="228" font-size="14" text-anchor="middle" fill="#e2e8f0">21 June</text><text x="80" y="246" font-size="14" text-anchor="middle" fill="#93c5fd">N summer solstice</text>
<circle cx="560" cy="160" r="20" fill="#3b82f6"/><line x1="548" y1="190" x2="572" y2="130" stroke="#f8fafc" stroke-width="3"/><text x="560" y="228" font-size="14" text-anchor="middle" fill="#e2e8f0">21 December</text><text x="560" y="246" font-size="14" text-anchor="middle" fill="#93c5fd">N winter solstice</text>
<circle cx="320" cy="265" r="20" fill="#3b82f6"/><line x1="308" y1="295" x2="332" y2="235" stroke="#f8fafc" stroke-width="3"/><text x="320" y="312" font-size="14" text-anchor="middle" fill="#e2e8f0">equinox</text>
<circle cx="320" cy="55" r="20" fill="#3b82f6"/><line x1="308" y1="85" x2="332" y2="25" stroke="#f8fafc" stroke-width="3"/><text x="320" y="20" font-size="14" text-anchor="middle" fill="#e2e8f0">equinox</text>
</g>
<text x="140" y="60" font-size="14" fill="#93c5fd">axis always parallel to itself</text>
</svg>`,
      caption: "The axis (white line) always points in the same direction: in June the northern hemisphere is tilted towards the Sun, in December away from it."
    },
    {
      type: "text",
      title: "Solstices, equinoxes and seasons",
      html: `<p>When the northern hemisphere is tilted towards the Sun, the rays arrive <b>more vertically</b> and the Sun stays in the sky <b>longer</b>: there is more energy per square metre and more time to warm up. It is summer. Six months later the opposite happens. The seasons in the southern hemisphere are always the opposite of those in the northern hemisphere (at Christmas it is summer in Australia).</p>
<table>
<tr><th>Date (approx.)</th><th>Event</th><th>What happens (northern hemisphere)</th></tr>
<tr><td>20-21 March</td><td><b>Spring equinox</b></td><td>day and night are equal (12 h) everywhere; the Sun is at the zenith over the equator</td></tr>
<tr><td>20-21 June</td><td><b>Summer solstice</b></td><td>longest day; Sun at the zenith over the Tropic of Cancer (23.4° N)</td></tr>
<tr><td>22-23 September</td><td><b>Autumn equinox</b></td><td>day and night are equal</td></tr>
<tr><td>21-22 December</td><td><b>Winter solstice</b></td><td>shortest day; Sun at the zenith over the Tropic of Capricorn (23.4° S)</td></tr>
</table>
<p>The <b>noon Sun</b> reaches a maximum height above the horizon equal to <b>90° − latitude + declination</b>. In Rome (42° N) on 21 June it is 90 − 42 + 23.4 = <b>71.4°</b>; on 21 December it is 90 − 42 − 23.4 = <b>24.6°</b>.</p>
<p>The <b>astronomical zones</b>: the torrid zone between the tropics (±23.4°); the temperate zones between the tropics and the polar circles; the frigid zones from the <b>polar circles</b> (±66.6°) to the poles, where there is the <b>midnight sun</b> in summer and the polar night in winter.</p>`
    },
    {
      type: "example",
      title: "The height of the Sun in Milan",
      html: `<p>Milan is at a latitude of about <b>45.5° N</b>. How high is the noon Sun at the equinoxes and solstices?</p>
<ul>
<li>Equinox (declination 0°): 90 − 45.5 = <b>44.5°</b></li>
<li>Summer solstice: 90 − 45.5 + 23.4 = <b>67.9°</b></li>
<li>Winter solstice: 90 − 45.5 − 23.4 = <b>21.1°</b></li>
</ul>
<p>At noon the shadow of a 2 m pole is 2 / tan(21.1°) ≈ 5.2 m long in December, but only 2 / tan(67.9°) ≈ 0.8 m in June. Sundials use this idea to mark the seasons.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: seasons and rotation",
      questions: [
        { type: "mc", q: "The cause of the seasons is…", options: ["the change in distance from the Sun", "the tilt of the Earth's axis", "the rotation on its axis"], answer: 1, explain: "The axis tilted by 23.4° changes the angle at which the rays arrive and the length of daylight." },
        { type: "tf", q: "In December the Earth is closer to the Sun than in June.", answer: true, explain: "Perihelion is in January: the northern winter happens when the Earth is closer to the Sun." },
        { type: "num", q: "How high does the Sun get above the horizon at a place at 40° N at the equinox?", answer: 50, unit: "°", explain: "90 − 40 = 50°." }
      ]
    },
    {
      type: "3d",
      title: "The globe and its key parallels",
      scene: "globe",
      options: { points: [
        { lat: 0, lon: 0, label: "Equator / Greenwich", color: "#ef4444" },
        { lat: 23.4, lon: 30, label: "Tropic of Cancer", color: "#f97316" },
        { lat: -23.4, lon: 30, label: "Tropic of Capricorn", color: "#f97316" },
        { lat: 66.6, lon: 30, label: "Arctic Circle", color: "#3b82f6" },
        { lat: 41.9, lon: 12.5, label: "Rome", color: "#16a34a" }
      ], routes: [] },
      caption: "Rotate the globe: the tropics mark the limit up to which the Sun can be at the zenith; the polar circles mark the limit of the midnight sun."
    },
    {
      type: "text",
      title: "Time zones",
      html: `<p>The Earth turns 360° in 24 hours, that is <b>15° per hour</b> (1° every 4 minutes). The Sun reaches its highest point ("noon") at different moments depending on longitude: Rome (12.5° E) and Turin (7.7° E) differ by about 4.8°, so true noon arrives in Turin about 19 minutes later than in Rome. In the 19th century every city kept its own time and railway timetables became impossible: in 1884, at the <b>International Meridian Conference</b> in Washington, the <b>Greenwich meridian</b> (longitude 0°) was chosen as the origin and the globe was divided into <b>24 time zones</b> of 15°.</p>
<ul>
<li>Moving <b>east</b> the time <b>goes forward</b> (you gain hours); moving <b>west</b> it <b>goes back</b>.</li>
<li>Italy is in the Central European time zone (<b>CET = UTC+1</b>, meridian 15° E, which passes close to Mount Etna); in summer, <b>daylight saving time</b> brings it to UTC+2.</li>
<li>The <b>International Date Line</b> (around 180° longitude, in the Pacific) is where one day changes to the next: travelling west you <b>add</b> a day.</li>
</ul>
<p>Many countries use time zones that are not strictly centred on meridians: China, which spans five geographical time zones, uses a single time (UTC+8).</p>`
    },
    {
      type: "example",
      title: "What time is it in New York?",
      html: `<p>In Rome it is <b>18:00</b> (CET, UTC+1). New York is at UTC−5 (standard time). What time is it in New York?</p>
<ol>
<li>Difference between the zones: +1 − (−5) = 6 hours.</li>
<li>New York is to the west, so the time is <b>earlier</b>: 18:00 − 6 h = <b>12:00</b>.</li>
</ol>
<p>For Tokyo (UTC+9): difference 9 − 1 = 8 hours, to the east: 18:00 + 8 = <b>02:00 the next day</b>.</p>`
    },
    {
      type: "text",
      title: "The Moon and its motions",
      html: `<p>The Moon is our only natural satellite: diameter 3474 km (about a quarter of the Earth's), average distance <b>384,400 km</b>. It has three motions:</p>
<ul>
<li><b>Rotation</b> on its axis in 27.3 days;</li>
<li><b>Revolution</b> around the Earth in 27.3 days (<b>sidereal month</b>);</li>
<li><b>Translation</b> together with the Earth around the Sun.</li>
</ul>
<p>Because rotation and revolution take the same time (<b>synchronous rotation</b>, caused by tidal forces), the Moon <b>always shows us the same face</b>. The other side (not "dark", but "hidden") was photographed for the first time by the Soviet probe <b>Luna 3</b> in 1959.</p>
<p>The <b>phases of the Moon</b> depend on the relative positions of the Sun, Earth and Moon: half of the Moon is always lit by the Sun, but we see a different part of that half. The cycle (<b>synodic month</b> or lunation) lasts <b>29.53 days</b>, longer than the sidereal month because in the meantime the Earth has moved along its orbit and the Moon has to "catch up" with the Sun to line up again.</p>
<table>
<tr><th>Phase</th><th>Position</th><th>Appearance</th></tr>
<tr><td><b>New Moon</b></td><td>Moon between Earth and Sun</td><td>invisible</td></tr>
<tr><td>First quarter</td><td>90° from the Sun</td><td>right half lit (northern hemisphere), rises at noon</td></tr>
<tr><td><b>Full Moon</b></td><td>Earth between Sun and Moon</td><td>the whole disc; rises at sunset</td></tr>
<tr><td>Last quarter</td><td>90° from the Sun</td><td>left half lit; rises at midnight</td></tr>
</table>
<p>A handy rule (northern hemisphere): if the lit part of the Moon looks like a D (bulging towards the <b>west</b>, the right), it is <b>waxing</b>; if it looks like a C (bulging towards the east, the left), it is <b>waning</b>.</p>`
    },
    {
      type: "svg",
      title: "The phases of the Moon",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#0f172a"/>
<text x="320" y="28" font-size="16" text-anchor="middle" fill="#f8fafc" font-weight="bold">The phases seen from Earth (northern hemisphere), over one month</text>
<g>
<circle cx="70" cy="110" r="36" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
<circle cx="190" cy="110" r="36" fill="#1e293b" stroke="#64748b" stroke-width="2"/><path d="M190 74 A36 36 0 0 1 190 146 A18 36 0 0 0 190 74 Z" fill="#fde68a"/>
<circle cx="310" cy="110" r="36" fill="#1e293b" stroke="#64748b" stroke-width="2"/><path d="M310 74 A36 36 0 0 1 310 146 Z" fill="#fde68a"/>
<circle cx="430" cy="110" r="36" fill="#1e293b" stroke="#64748b" stroke-width="2"/><path d="M430 74 A36 36 0 0 1 430 146 A18 36 0 0 1 430 74 Z" fill="#fde68a"/>
<circle cx="550" cy="110" r="36" fill="#fde68a" stroke="#64748b" stroke-width="2"/>
</g>
<g font-size="14" fill="#e2e8f0" text-anchor="middle">
<text x="70" y="175">New</text><text x="190" y="175">Waxing crescent</text><text x="310" y="175">First quarter</text><text x="430" y="175">Gibbous</text><text x="550" y="175">Full</text>
<text x="70" y="195" fill="#94a3b8">day 0</text><text x="190" y="195" fill="#94a3b8">~3-4</text><text x="310" y="195" fill="#94a3b8">~7.4</text><text x="430" y="195" fill="#94a3b8">~11</text><text x="550" y="195" fill="#94a3b8">~14.8</text>
</g>
<text x="320" y="250" font-size="15" text-anchor="middle" fill="#cbd5e1">Then the Moon wanes: gibbous, last quarter (day ~22), crescent, and new again (29.5)</text>
<text x="320" y="275" font-size="14" text-anchor="middle" fill="#94a3b8">The lit part is always on the side facing the Sun</text>
</svg>`,
      caption: "The Moon does not change shape: what changes is how much of its lit half is turned towards us."
    },
    {
      type: "text",
      title: "Eclipses",
      html: `<p>An <b>eclipse</b> happens when the Sun, the Earth and the Moon are lined up.</p>
<ul>
<li><b>Solar eclipse</b>: the Moon passes between the Earth and the Sun, at <b>new</b> Moon. Its shadow falls on the Earth, and people in the shadow zone (a strip at most about 270 km wide) see a <b>total</b> eclipse, lasting at most about seven and a half minutes. Outside it, in the <b>penumbra</b>, the eclipse is partial. It is a lucky coincidence that the Sun is about 400 times larger than the Moon and about 400 times farther away: the two discs look almost the same size in the sky. If the Moon is at its farthest point, the eclipse is <b>annular</b>.</li>
<li><b>Lunar eclipse</b>: the Earth passes between them, at <b>full</b> Moon, and the Moon enters the Earth's shadow. It can be seen from the whole half of the Earth where it is night, and totality can last almost two hours; the Moon does not disappear but turns <b>reddish</b>, because the Earth's atmosphere bends the red light of the Sun towards the Moon (as in a sunset).</li>
</ul>
<p>Why isn't there an eclipse at every new and full Moon? Because the Moon's orbit is tilted by about <b>5.1°</b> relative to the ecliptic: usually the Moon passes a little above or below the Sun or the Earth's shadow. An eclipse happens only if the Moon is close to the <b>nodes</b>, the two points where its orbit crosses the plane of the ecliptic. Each year there are 4 to 7 eclipses (solar and lunar together).</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand the phases of the Moon",
      intro: "Phases are a classic misconception: the Earth's shadow has nothing to do with them. Try recreating them.",
      tabs: [
        {
          label: "💡 The lamp experiment",
          html: `<p>In a dark room, switch on a lamp (the Sun) and hold a ball (the Moon) while your head is the Earth. Turning around with the ball held out in front of you, you will see the ball lit as in all the phases: full when it is opposite the lamp, new when it is between you and the lamp. The shadow of your head falls on the ball only in one precise position: a lunar eclipse.</p>`
        },
        {
          label: "🧭 When it rises and sets",
          html: `<p>A way to recognise the phase from the time of day: the <b>new</b> Moon rises and sets with the Sun; the <b>full</b> Moon rises when the Sun sets (and vice versa); the <b>first quarter</b> rises at noon and sets at midnight; the <b>last quarter</b> rises at midnight and sets at noon. Each day the Moon rises on average about 50 minutes later than the day before, because it moves about 12-13° eastwards along its path.</p>`
        },
        {
          label: "🌊 Why are there tides?",
          html: `<p>The Moon's gravity pulls the water on the side facing the Moon and, through the differential effect, also creates a bulge on the opposite side: two high and two low tides a day (about every 12 hours and 25 minutes). At <b>new</b> and <b>full</b> Moon the Sun and Moon add up: larger tides, called <b>spring tides</b>. At the quarters they work against each other: weaker tides, called <b>neap tides</b>. In the Mediterranean the tides are small (a few tens of centimetres, but up to about 1 m in Venice); in the Bay of Fundy in Canada they exceed 15 m.</p>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "The Moon is moving away",
      html: `<p>The mirrors left on the Moon by the Apollo astronauts (1969-1972) make it possible to measure the Earth–Moon distance by laser to within millimetres. Result: the Moon is moving away by about <b>3.8 cm a year</b>, while the Earth's rotation slows down. A billion years ago days lasted about 19-20 hours, and in many billions of years a total solar eclipse will no longer be possible, because the Moon will look too small to cover the Sun's disc. It is thought that the Moon formed about 4.5 billion years ago from a collision between the proto-Earth and a Mars-sized body (<b>Theia</b>).</p>`
    },
    {
      type: "conceptMap",
      title: "Map of the motions: tap the nodes and find out why",
      nodes: [
        { id: "rot", label: "Rotation", x: 18, y: 8, color: "#3b82f6", html: "The Earth spinning on itself in 24 h.", why: "It was proposed by <b>Heraclides Ponticus</b> (4th century BC) and supported by Copernicus; demonstrated by <b>Foucault</b> in 1851. It produces day and night, the Coriolis effect and the flattening at the poles." },
        { id: "riv", label: "Revolution", x: 82, y: 8, color: "#22c55e", html: "A lap around the Sun in about 365.25 days.", why: "With <b>Copernicus</b> (1543) and Galileo the Earth lost its immobility. Confirmation came from <b>stellar parallax</b> (Bessel, 1838) and the aberration of light (Bradley, 1729)." },
        { id: "asse", label: "Tilted axis (23.4°)", x: 50, y: 32, color: "#f97316", html: "The axis is not perpendicular to the orbit.", why: "According to the most widely accepted hypothesis, the tilt is due to the impact that formed the Moon about 4.5 billion years ago. The Moon acts as a stabiliser: without it the angle could vary a lot, with drastic effects on climate." },
        { id: "stag", label: "Seasons", x: 82, y: 40, color: "#ef4444", html: "Change in the angle of the rays and the length of daylight.", why: "A common but wrong belief is that they depend on the distance from the Sun: but the Earth is closer in January, and the southern hemisphere has summer at Christmas." },
        { id: "fusi", label: "Time zones", x: 18, y: 44, color: "#eab308", html: "24 zones of 15°.", why: "Born with railways and the telegraph: 1884, Washington Conference, with the Greenwich meridian as the origin." },
        { id: "luna", label: "Motions of the Moon", x: 50, y: 62, color: "#a855f7", html: "Synchronous rotation, revolution in 27.3 days.", why: "Synchronous rotation is due to the tidal forces the Earth exerted on the Moon over billions of years, slowing its rotation until it matched its revolution." },
        { id: "fasi", label: "Phases of the Moon", x: 18, y: 82, color: "#06b6d4", html: "A 29.53-day cycle.", why: "<b>Aristarchus of Samos</b> (3rd century BC) already used the half-Moon phase to work out the relative distances of the Sun and Moon, with a correct geometric method but inaccurate measurements." },
        { id: "ecl", label: "Eclipses", x: 82, y: 82, color: "#14b8a6", html: "Sun–Earth–Moon alignment.", why: "The Babylonians discovered the <b>Saros cycle</b> (about 18 years and 11 days), after which eclipses repeat almost identically, and used it to predict them. Eclipses are not monthly because the Moon's orbit is tilted by 5.1°." }
      ],
      edges: [
        ["rot", "fusi", "gives rise to"],
        ["riv", "stag", "with the tilted axis gives"],
        ["asse", "stag", "causes"],
        ["luna", "fasi", "gives rise to"],
        ["luna", "ecl", "when aligned gives"],
        ["rot", "luna", "spins like"],
        ["riv", "asse", "keeps"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: the Moon",
      questions: [
        { type: "mc", q: "Why do we always see the same face of the Moon?", options: ["Because the Moon does not rotate", "Because rotation and revolution take the same time", "Because the other side is always in shadow"], answer: 1, explain: "It is synchronous rotation. The other side gets as much light as the first." },
        { type: "mc", q: "In which phase of the Moon can a solar eclipse happen?", options: ["Full Moon", "New Moon", "First quarter"], answer: 1, explain: "The Moon must be between the Earth and the Sun, so it shows us its unlit side." },
        { type: "num", q: "In Rome it is 12:00 (UTC+1). What time is it in London (UTC+0), in hours?", answer: 11, unit: "h", explain: "London is to the west: the time goes back 1 hour." }
      ]
    }
  ],
  glossary: [
    { t: "Rotation", d: "The Earth's motion around its own axis, in 24 hours." },
    { t: "Revolution", d: "The Earth's motion around the Sun, in about 365.25 days." },
    { t: "Ecliptic", d: "The plane of the Earth's orbit around the Sun." },
    { t: "Solstice", d: "The moment when the Sun reaches its greatest declination north or south: longest or shortest day." },
    { t: "Equinox", d: "The moment when day and night have the same length." },
    { t: "Time zone", d: "Each of the 24 bands of 15° of longitude that share the same time." },
    { t: "Synodic month", d: "The interval between two identical phases of the Moon: 29.53 days." },
    { t: "Synchronous rotation", d: "The condition in which a body rotates in the same time as it takes to complete one revolution." },
    { t: "Solar eclipse", d: "The Moon hides the Sun from the Earth (new Moon)." },
    { t: "Lunar eclipse", d: "The Moon passes into the Earth's shadow (full Moon)." },
    { t: "Tides", d: "Rises and falls in sea level caused by the pull of the Moon and the Sun." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "How long is the mean solar day?", options: ["23 h 56 min", "24 h", "27 days"], answer: 1, explain: "The mean solar day lasts 24 hours (the sidereal day 23 h 56 min)." },
      { type: "tf", q: "The seasons are caused by the Earth's distance from the Sun.", answer: false, explain: "They depend on the tilt of the Earth's axis." },
      { type: "mc", q: "What happens on 21 June in the northern hemisphere?", options: ["Spring equinox", "Summer solstice", "Autumn equinox"], answer: 1, explain: "The longest day of the year." },
      { type: "num", q: "What is the maximum height of the noon Sun at the summer solstice at 45° N? (declination 23.4°)", answer: 68.4, tol: 0.2, unit: "°", explain: "90 − 45 + 23.4 = 68.4°." },
      { type: "num", q: "In how many minutes does the Earth turn through 1° of longitude?", answer: 4, unit: "min", explain: "360° in 24 hours: 1° every 4 minutes." },
      { type: "mc", q: "Why does the Moon always show us the same face?", options: ["Synchronous rotation", "The Moon is still", "The tides stop it"], answer: 0, explain: "Rotation and revolution both last about 27.3 days." },
      { type: "tf", q: "A lunar eclipse happens at full Moon.", answer: true, explain: "The Earth is between the Sun and the Moon, and the Moon enters the shadow cone." },
      { type: "mc", q: "Why isn't there an eclipse at every new Moon?", options: ["The Moon's orbit is tilted by about 5° to the ecliptic", "The Moon is too small", "The Earth rotates"], answer: 0, explain: "Usually the Moon passes above or below the Sun–Earth line." },
      { type: "order", q: "Put the phases of the Moon in order after the new Moon.", items: ["Waxing crescent", "First quarter", "Full Moon", "Last quarter"], explain: "The full cycle lasts 29.5 days." },
      { type: "text", q: "Which French physicist demonstrated the Earth's rotation with a pendulum in 1851?", answer: ["foucault", "leon foucault", "léon foucault"], explain: "Léon Foucault, at the Panthéon in Paris." }
    ]
  }
});
