TOPIC('en', {
  id: `m1-geo-coordinate`,
  title: `Latitude and longitude`,
  intro: `How can you pinpoint any spot on Earth precisely, even in the middle of the ocean? We use an imaginary grid of <b>parallels</b> and <b>meridians</b>, the <b>geographic grid</b>. Every place has its own "address" made of two numbers: <b>latitude</b> and <b>longitude</b>. <b>Time zones</b> also depend on longitude.`,
  minutes: 35,
  sections: [
    {
      type: `text`,
      title: `1. The geographic grid`,
      html: `<p>The Earth rotates around an axis that passes through the <b>North Pole</b> and the <b>South Pole</b>. On this basis geographers have drawn two families of imaginary lines:</p><ul><li><b>Parallels</b>: horizontal circles, parallel to each other, that go around the Earth from West to East. The longest is the <b>Equator</b> (about <b>40,075 km</b>), which divides the Earth into the <b>northern hemisphere</b> and the <b>southern hemisphere</b>. The closer you get to the poles, the smaller the parallels; the poles are just points.</li><li><b>Meridians</b>: half-circles that run from one pole to the other. They are all <b>equal</b> (about 20,000 km). The reference meridian passes through the observatory of <b>Greenwich</b>, near London (chosen in <b>1884</b> at the International Conference in Washington), and divides the Earth into the <b>eastern hemisphere</b> and the <b>western hemisphere</b>.</li></ul>`
    },
    {
      type: `svg`,
      title: `Parallels and meridians`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="320" fill="#0f172a"/><circle cx="160" cy="165" r="120" fill="#38bdf8" stroke="#e0f2fe" stroke-width="2"/><g fill="none" stroke="#fef08a" stroke-width="2"><ellipse cx="160" cy="165" rx="120" ry="18"/><ellipse cx="160" cy="105" rx="104" ry="15"/><ellipse cx="160" cy="225" rx="104" ry="15"/><ellipse cx="160" cy="60" rx="60" ry="9"/><ellipse cx="160" cy="270" rx="60" ry="9"/></g><ellipse cx="160" cy="165" rx="120" ry="18" fill="none" stroke="#f97316" stroke-width="4"/><text x="160" y="30" font-size="16" font-family="sans-serif" text-anchor="middle" fill="#fef08a">PARALLELS</text><text x="30" y="170" font-size="14" font-family="sans-serif" fill="#fdba74" text-anchor="end">0°</text><circle cx="440" cy="165" r="120" fill="#38bdf8" stroke="#e0f2fe" stroke-width="2"/><g fill="none" stroke="#bbf7d0" stroke-width="2"><ellipse cx="440" cy="165" rx="40" ry="120"/><ellipse cx="440" cy="165" rx="80" ry="120"/><ellipse cx="440" cy="165" rx="110" ry="120"/></g><line x1="440" y1="45" x2="440" y2="285" stroke="#ef4444" stroke-width="4"/><text x="440" y="30" font-size="16" font-family="sans-serif" text-anchor="middle" fill="#bbf7d0">MERIDIANS</text><text x="448" y="300" font-size="14" font-family="sans-serif" fill="#fca5a5">Greenwich 0°</text><circle cx="440" cy="45" r="5" fill="#ffffff"/><text x="455" y="50" font-size="14" font-family="sans-serif" fill="#ffffff">North Pole</text><text x="160" y="196" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#7c2d12" font-weight="bold">Equator</text></svg>`,
      caption: `Left: the parallels, circles that get smaller and smaller towards the poles. Right: the meridians, all equal, which meet at the poles.`
    },
    {
      type: `text`,
      title: `2. Latitude and longitude`,
      html: `<p>Coordinates are measured in <b>degrees</b> (°), divided into <b>minutes</b> (′, 1° = 60′) and <b>seconds</b> (″, 1′ = 60″), because they are <b>angles</b> measured from the centre of the Earth.</p><ul><li><b>Latitude</b>: the angular distance of a point from the <b>Equator</b>. It goes from <b>0°</b> (Equator) to <b>90°</b> (poles) and is marked <b>North</b> or <b>South</b>. All points on the same parallel have the same latitude.</li><li><b>Longitude</b>: the angular distance of a point from the <b>Greenwich meridian</b>. It goes from <b>0°</b> to <b>180°</b> and is marked <b>East</b> or <b>West</b>. All points on the same meridian have the same longitude.</li></ul><p>You always write <b>latitude first, then longitude</b>. Example: <b>Rome 41° 54′ N, 12° 30′ E</b>. Sat-navs and the Internet use decimal degrees and signs: 41.9 / 12.5 (North and East positive, South and West negative).</p>`
    },
    {
      type: `remember`,
      title: `A trick so you don't mix them up`,
      html: `<p><b>Latitude</b> → think of a <b>ladder</b> ("lat-ladder"): the lines are <b>horizontal</b> like the rungs of a ladder: you climb up and down between North and South.<br><b>Longitude</b> → "<b>long</b>": meridians are <b>long</b> lines running from pole to pole; you move between East and West.</p>`
    },
    {
      type: `text`,
      title: `3. The special parallels`,
      html: `<p>Because of the tilt of the Earth's axis (about <b>23° 27′</b>) some parallels have an astronomical meaning:</p><table><tr><th>Parallel</th><th>Latitude</th><th>Why it is special</th></tr><tr><td>Equator</td><td>0°</td><td>The Sun is at the zenith (directly overhead) at the equinoxes</td></tr><tr><td>Tropic of Cancer</td><td>23° 27′ N</td><td>The Sun is at the zenith on 21 June</td></tr><tr><td>Tropic of Capricorn</td><td>23° 27′ S</td><td>The Sun is at the zenith on 21–22 December</td></tr><tr><td>Arctic Circle</td><td>66° 33′ N</td><td>Beyond it, at least one day a year of midnight sun and one of polar night</td></tr><tr><td>Antarctic Circle</td><td>66° 33′ S</td><td>The same, in the southern hemisphere</td></tr></table><p>These parallels mark the boundaries of the <b>astronomical zones</b> (torrid, temperate, polar), which you will study in the lesson on climates.</p>`
    },
    {
      type: `3d`,
      title: `Find the cities on the globe`,
      scene: `globe`,
      options: {
        points: [
          { lat: 41.9, lon: 12.5, label: `Rome 41.9° N – 12.5° E`, color: `#16a34a` },
          { lat: 45.46, lon: 9.19, label: `Milan 45.5° N – 9.2° E`, color: `#16a34a` },
          { lat: 51.48, lon: 0, label: `Greenwich 51.5° N – 0°`, color: `#dc2626` },
          { lat: 40.71, lon: -74.0, label: `New York 40.7° N – 74° W`, color: `#2563eb` },
          { lat: -33.87, lon: 151.21, label: `Sydney 33.9° S – 151.2° E`, color: `#f97316` },
          { lat: -0.18, lon: -78.47, label: `Quito (almost on the Equator)`, color: `#a855f7` },
          { lat: 35.68, lon: 139.69, label: `Tokyo 35.7° N – 139.7° E`, color: `#f97316` },
          { lat: -34.6, lon: -58.38, label: `Buenos Aires 34.6° S – 58.4° W`, color: `#2563eb` }
        ]
      },
      caption: `Rotate the globe: notice that Rome and New York have almost the same latitude (they are almost on the same parallel), but very different longitudes.`
    },
    {
      type: `example`,
      title: `Worked example: how long is a degree?`,
      html: `<p>A meridian runs from pole to pole: 180° of latitude over about 20,000 km. So <b>1° of latitude ≈ 20,000 : 180 ≈ 111 km</b>.</p><p>Milan is at about 45.5° N, Rome at about 41.9° N. The difference is 45.5 − 41.9 = <b>3.6°</b>; 3.6 × 111 ≈ <b>400 km</b> in the North-South direction. (The real straight-line distance is about 480 km, because Milan is also further West.)</p><p>A degree of longitude, on the other hand, is 111 km long only at the Equator and gets shorter towards the poles, where it becomes zero.</p>`
    },
    {
      type: `quiz`,
      title: `Mini-quiz 1`,
      questions: [
        { type: `mc`, q: `What is the latitude of the Equator?`, options: [`0°`, `45°`, `90°`, `180°`], answer: 0, explain: `The Equator is the reference parallel: 0°.` },
        { type: `mc`, q: `What is the maximum value longitude can have?`, options: [`90°`, `180°`, `360°`, `23° 27′`], answer: 1, explain: `180° East or West: beyond that you come back from the other side.` },
        { type: `tf`, q: `All meridians are the same length.`, answer: true, explain: `They all run from one pole to the other; parallels, instead, get shorter towards the poles.` },
        { type: `num`, q: `About how many km is 1° of latitude?`, answer: 111, tol: 2, unit: `km`, explain: `20,000 km : 180° ≈ 111 km.` }
      ]
    },
    {
      type: `text`,
      title: `4. Time zones`,
      html: `<p>The Earth makes a complete turn (<b>360°</b>) in <b>24 hours</b>. So in one hour it turns 360 : 24 = <b>15°</b>. That is why the Earth has been divided into <b>24 time zones</b>, segments about 15° of longitude wide: within each zone the same time is used.</p><ul><li>The reference zone is the Greenwich one: its time is called <b>UTC</b> (Coordinated Universal Time).</li><li>Going <b>East</b> you <b>add</b> one hour for each zone (where the Sun rises earlier); going <b>West</b> you <b>subtract</b>.</li><li><b>Italy</b> is in the <b>UTC+1</b> zone (Central European Time); in summer, with <b>daylight saving time</b>, it becomes UTC+2.</li><li>Time-zone borders are not straight lines: they often follow the borders of countries. <b>China</b>, as wide as 5 zones, uses a single time for the whole country.</li></ul><p>Along the 180° meridian, in the Pacific Ocean, runs (with many detours) the <b>International Date Line</b>: crossing it westwards you add a day, eastwards you take one away.</p>`
    },
    {
      type: `example`,
      title: `Worked example: calling your uncle in New York`,
      html: `<p>In Rome it is <b>18:00</b> (winter, UTC+1). New York is in the <b>UTC−5</b> zone. The difference is 1 − (−5) = <b>6 hours</b>, and New York is to the West: so there it is 18 − 6 = <b>12:00</b>, midday. Your uncle is on his lunch break!</p><p>And in <b>Tokyo</b> (UTC+9)? Difference 9 − 1 = 8 hours to the East: 18 + 8 = 26 → <b>2:00 at night</b> the next day. Better not to call!</p>`
    },
    {
      type: `widget`,
      title: `The time-zone number line`,
      widget: `numberLine`,
      options: { min: -12, max: 14, step: 1, marks: [-5, 0, 1, 9] },
      caption: `Each mark is a zone (UTC). Marked: New York (−5), Greenwich (0), Italy (+1), Tokyo (+9). Counting the jumps between two marks = difference in hours. Kiribati even uses UTC+14!`
    },
    {
      type: `curiosity`,
      title: `The longitude problem`,
      html: `<p>Latitude could already be measured in the Middle Ages by observing the height of the Pole Star or of the Sun. Longitude could not: you needed to know what time it was <b>at the same moment</b> on board and in the port of departure (each hour of difference = 15°). But pendulum clocks did not work on rocking ships. Many ships were wrecked. In 1714 the British Parliament offered a huge prize to whoever solved the problem. It was won by a carpenter and clockmaker, <b>John Harrison</b>: his marine chronometer <b>H4</b>, tested in 1761–62, was off by only a few seconds on a two-month voyage to Jamaica.</p>`
    },
    {
      type: `curiosity`,
      title: `A place with every time`,
      html: `<p>At the <b>North Pole</b> and the <b>South Pole</b> all the meridians meet, and so do all the time zones! Walking around the pole you can cross 24 zones in a few seconds. That is why scientific bases in Antarctica choose a time for convenience: the US <b>Amundsen-Scott</b> base, right at the South Pole, uses New Zealand time, because that is where its supplies come from.</p>`
    },
    {
      type: `alternatives`,
      title: `Other ways to understand it`,
      intro: `If latitude and longitude seem abstract, try these methods.`,
      tabs: [
        { label: `🚢 Battleships`, html: `<p>In the game of battleships every square has a <b>letter</b> (row) and a <b>number</b> (column): "B4, hit!". Geographic coordinates work the same way: latitude tells you which "row" (parallel) you are on, longitude which "column" (meridian). The only difference: on Earth the grid is wrapped around a sphere and the numbers start from the centre (0°) and go towards North/South and East/West.</p>`, svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#e0f2fe"/><g stroke="#0369a1" stroke-width="1.5"><line x1="100" y1="40" x2="100" y2="280"/><line x1="180" y1="40" x2="180" y2="280"/><line x1="260" y1="40" x2="260" y2="280"/><line x1="340" y1="40" x2="340" y2="280"/><line x1="420" y1="40" x2="420" y2="280"/><line x1="500" y1="40" x2="500" y2="280"/><line x1="100" y1="40" x2="500" y2="40"/><line x1="100" y1="100" x2="500" y2="100"/><line x1="100" y1="160" x2="500" y2="160"/><line x1="100" y1="220" x2="500" y2="220"/><line x1="100" y1="280" x2="500" y2="280"/></g><line x1="100" y1="160" x2="500" y2="160" stroke="#f97316" stroke-width="4"/><line x1="300" y1="40" x2="300" y2="280" stroke="#dc2626" stroke-width="4"/><g font-family="sans-serif" font-size="14" fill="#0c4a6e"><text x="510" y="45">60° N</text><text x="510" y="105">30° N</text><text x="510" y="165" fill="#c2410c" font-weight="bold">0° Equator</text><text x="510" y="225">30° S</text><text x="85" y="30">90° W</text><text x="165" y="30">60° W</text><text x="285" y="30" fill="#b91c1c" font-weight="bold">0°</text><text x="400" y="30">60° E</text></g><circle cx="335" cy="78" r="10" fill="#16a34a"/><text x="350" y="83" font-size="15" font-family="sans-serif" fill="#14532d" font-weight="bold">Rome ≈ 42° N, 12° E</text><circle cx="180" cy="82" r="10" fill="#2563eb"/><text x="110" y="70" font-size="14" font-family="sans-serif" fill="#1e3a8a">New York ≈ 41° N, 74° W</text></svg>` },
        { label: `📐 The Cartesian plane`, html: `<p>In maths a point on the plane is given by two numbers (x; y). On Earth: <b>longitude</b> is like <b>x</b> (right = East positive, left = West negative) and <b>latitude</b> is like <b>y</b> (up = North positive, down = South negative). The origin (0; 0) is in the Gulf of Guinea, where the Equator meets Greenwich. But careful: in geography you write latitude (y) first and then longitude (x)!</p>` },
        { label: `🍊 The orange segments`, html: `<p>Take an orange: the segments run from one "pole" to the other like the <b>meridians</b>, and they are all equal like <b>time zones</b>. If you cut it into horizontal slices, each slice is a <b>parallel</b>: the middle slice (the Equator) is the biggest, those towards the ends get smaller and smaller. An orange with 24 segments would be a perfect model of the time zones!</p>` },
        { label: `🌍 Globe with routes`, html: `<p>Follow the 40–42° N parallel on the globe: it links Rome, Madrid, New York, Beijing. They are all cities with similar seasons, because they receive the Sun at similar angles.</p>`, scene: `globe`, options: { points: [ { lat: 41.9, lon: 12.5, label: `Rome`, color: `#16a34a` }, { lat: 40.42, lon: -3.7, label: `Madrid`, color: `#16a34a` }, { lat: 40.71, lon: -74.0, label: `New York`, color: `#16a34a` }, { lat: 39.9, lon: 116.4, label: `Beijing`, color: `#16a34a` }, { lat: 41.0, lon: 28.97, label: `Istanbul`, color: `#16a34a` } ], routes: [ { points: [2, 1, 0, 4, 3], color: `#f97316` } ] } }
      ]
    },
    {
      type: `widget`,
      title: `Which hemisphere is it in?`,
      widget: `classify`,
      options: { groups: [`Northern hemisphere`, `Southern hemisphere`], items: [ [`🇮🇹 Rome`, 0], [`🇦🇺 Sydney`, 1], [`🇯🇵 Tokyo`, 0], [`🇦🇷 Buenos Aires`, 1], [`🇿🇦 Cape Town`, 1], [`🇺🇸 New York`, 0], [`🇧🇷 Rio de Janeiro`, 1], [`🇪🇬 Cairo`, 0] ] },
      caption: `Remember: cities in the southern hemisphere have a South (S) latitude.`
    },
    {
      type: `quiz`,
      title: `Mini-quiz 2`,
      questions: [
        { type: `num`, q: `By how many degrees does the Earth turn in one hour?`, answer: 15, tol: 0, unit: `°`, explain: `360° : 24 h = 15° per hour.` },
        { type: `num`, q: `In Rome (UTC+1) it is midday (12 o'clock). What time is it in Moscow (UTC+3)?`, answer: 14, tol: 0, unit: `h`, explain: `Moscow is 2 zones further East: 12 + 2 = 14.` },
        { type: `mc`, q: `Which parallel is at 23° 27′ North?`, options: [`Tropic of Capricorn`, `Arctic Circle`, `Tropic of Cancer`, `Equator`], answer: 2, explain: `The Tropic of Cancer: on 21 June the Sun is at the zenith there.` }
      ]
    },
    {
      type: `conceptMap`,
      title: `Concept map: the address of places`,
      nodes: [
        { id: `sfera`, label: `A spherical, rotating Earth`, x: 50, y: 8, color: `#0ea5e9`, html: `<p>Axis of rotation, poles, rotation in 24 hours.</p>`, why: `<p>Eratosthenes (3rd century BC) already measured the Earth's circumference using the shadow of a stick: he found a value very close to the real 40,000 km.</p>` },
        { id: `angoli`, label: `Measuring in degrees`, x: 82, y: 22, color: `#ca8a04`, html: `<p>Degrees, minutes, seconds (sexagesimal system).</p>`, why: `<p>The circle divided into 360° and the subdivisions of 60 come from Babylonian astronomers, who counted in base 60 (as we still do with hours and minutes).</p>` },
        { id: `paralleli`, label: `Parallels → latitude`, x: 20, y: 35, color: `#f97316`, html: `<p>From 0° (Equator) to 90° N or S.</p>`, why: `<p>The Equator is "natural": it is the circle perpendicular to the axis of rotation. That is why latitude could be measured with the stars since ancient times.</p>` },
        { id: `meridiani`, label: `Meridians → longitude`, x: 50, y: 40, color: `#dc2626`, html: `<p>From 0° (Greenwich) to 180° E or W.</p>`, why: `<p>The zero meridian is a <b>convention</b>: over time many were used (Paris, Rome, El Hierro island). In 1884 in Washington 25 countries chose Greenwich, because most nautical charts already used it.</p>` },
        { id: `tropici`, label: `Tropics and polar circles`, x: 15, y: 70, color: `#a855f7`, html: `<p>23° 27′ and 66° 33′.</p>`, why: `<p>They depend on the tilt of the Earth's axis (about 23.4°): the tropics are 23.4° from the Equator, the polar circles at 90° − 23.4° ≈ 66.6°.</p>` },
        { id: `coordinate`, label: `Geographic coordinates`, x: 42, y: 70, color: `#16a34a`, html: `<p>Latitude first, then longitude.</p>`, why: `<p>The grid was used systematically by Ptolemy (2nd century AD) in his <i>Geography</i>, which listed about 8,000 places with their coordinates.</p>` },
        { id: `fusi`, label: `Time zones`, x: 78, y: 62, color: `#2563eb`, html: `<p>24 zones of 15°, UTC, daylight saving time, International Date Line.</p>`, why: `<p>Until the 19th century every city used the time of its own Sun. Railways needed common timetables: the Canadian Sandford Fleming proposed the 24 zones (1879). Italy adopted Central European Time in 1893.</p>` },
        { id: `gps`, label: `Navigation and GPS`, x: 68, y: 90, color: `#475569`, html: `<p>From Harrison's chronometer to GPS.</p>`, why: `<p>Measuring longitude means measuring <b>time</b>: GPS works precisely thanks to extremely accurate atomic clocks on board the satellites.</p>` }
      ],
      edges: [ [`sfera`, `paralleli`, `axis and Equator`], [`sfera`, `meridiani`, `poles`], [`angoli`, `meridiani`, `measures`], [`angoli`, `paralleli`, `measures`], [`paralleli`, `tropici`, `special`], [`paralleli`, `coordinate`, `latitude`], [`meridiani`, `coordinate`, `longitude`], [`meridiani`, `fusi`, `15° = 1 hour`], [`fusi`, `gps`, `time`] ]
    }
  ],
  glossary: [
    { t: `Geographic grid`, d: `The set of parallels and meridians imagined on the Earth.` },
    { t: `Parallel`, d: `Imaginary circle parallel to the Equator.` },
    { t: `Meridian`, d: `Imaginary half-circle joining the two poles.` },
    { t: `Latitude`, d: `Angular distance of a point from the Equator (0°–90° N or S).` },
    { t: `Longitude`, d: `Angular distance of a point from the Greenwich meridian (0°–180° E or W).` },
    { t: `Hemisphere`, d: `Half of the Earth: northern/southern (divided by the Equator), eastern/western (by Greenwich and 180°).` },
    { t: `Time zone`, d: `Segment of about 15° of longitude in which the same time applies.` },
    { t: `UTC`, d: `Coordinated Universal Time, the world reference time.` },
    { t: `International Date Line`, d: `Line close to the 180° meridian where the calendar date changes.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Which line divides the Earth into the northern and southern hemispheres?`, options: [`The Greenwich meridian`, `The Equator`, `The Tropic of Cancer`, `The International Date Line`], answer: 1, explain: `The Equator separates North and South.` },
      { type: `text`, q: `What is the name of the prime meridian (0°)?`, answer: [`greenwich`, `greenwich meridian`, `the greenwich meridian`], explain: `It passes through the Greenwich observatory, near London.` },
      { type: `mc`, q: `How do you write the coordinates of a point?`, options: [`Longitude first, then latitude`, `Latitude first, then longitude`, `Only the latitude`, `There is no order`], answer: 1, explain: `E.g. Rome 41° 54′ N, 12° 30′ E.` },
      { type: `tf`, q: `All parallels are the same length.`, answer: false, explain: `The Equator is the longest; towards the poles they get shorter.` },
      { type: `num`, q: `How many main time zones are there?`, answer: 24, tol: 0, explain: `One for each hour of the day.` },
      { type: `num`, q: `In Rome (UTC+1) it is 10 o'clock. What time is it in London (UTC+0)?`, answer: 9, tol: 0, unit: `h`, explain: `London is one zone further West: 10 − 1 = 9.` },
      { type: `num`, q: `If in Rome (UTC+1) it is 20:00, what time is it in Los Angeles (UTC−8)?`, answer: 11, tol: 0, unit: `h`, explain: `Difference 1 − (−8) = 9 hours to the West: 20 − 9 = 11.` },
      { type: `mc`, q: `What is the latitude of the South Pole?`, options: [`0°`, `90° N`, `90° S`, `180°`], answer: 2, explain: `The poles have a latitude of 90°, North or South.` },
      { type: `order`, q: `Put the parallels in order from North to South`, items: [`Arctic Circle`, `Tropic of Cancer`, `Equator`, `Tropic of Capricorn`, `Antarctic Circle`], explain: `66° 33′ N, 23° 27′ N, 0°, 23° 27′ S, 66° 33′ S.` },
      { type: `mc`, q: `Why was it difficult to measure longitude at sea?`, options: [`There were no stars`, `It required accurate clocks, which did not work on ships`, `The compass did not point East`, `The sea was too deep`], answer: 1, explain: `The problem was solved by John Harrison's chronometer in the 18th century.` },
      { type: `tf`, q: `Rome and New York have a similar latitude.`, answer: true, explain: `Rome about 42° N, New York about 41° N.` }
    ],
    gen: [ [`intAdd`, 2] ]
  }
});
