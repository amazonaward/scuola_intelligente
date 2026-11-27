TOPIC('en', {
  id: "l1-sci-terra-sistema-solare",
  title: "The Earth in the Solar System",
  intro: "We are passengers on a ball of rock racing at about 30 km per second around a star. How do we know? For thousands of years humanity believed the opposite: that the Earth stood still at the centre of the cosmos. In this lesson we find out how the <b>Solar System</b> is built, the <b>laws of Kepler</b> that govern its motions, and how people managed to measure the <b>shape and size of the Earth</b> with very simple tools.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Our family of celestial bodies",
      html: `<p>The <b>Solar System</b> formed about <b>4.6 billion years ago</b> from the collapse of a cloud of gas and dust (the <b>solar nebula</b>). The Sun formed at the centre; the leftover material, flattened into a spinning disc, clumped together into planets, moons, asteroids and comets.</p>
<ul>
<li>The <b>Sun</b> is a small star (a "yellow dwarf") but it contains <b>99.86%</b> of the mass of the system. Its diameter is about 109 times that of the Earth. It shines because in its core (about 15 million degrees) hydrogen is turned into helium by <b>nuclear fusion</b>.</li>
<li>There are eight <b>planets</b>. Four are <b>terrestrial</b> (rocky, small, dense, close to the Sun): Mercury, Venus, Earth, Mars. Four are <b>giants</b>: the <b>gas giants</b> Jupiter and Saturn (hydrogen and helium) and the <b>ice giants</b> Uranus and Neptune.</li>
<li>The <b>asteroid belt</b> between Mars and Jupiter; the <b>Kuiper belt</b> beyond Neptune; the very distant <b>Oort cloud</b>, a reservoir of comets.</li>
<li>The <b>dwarf planets</b> (Pluto, Ceres, Eris...): since 2006 the International Astronomical Union has defined a planet as a body that orbits the Sun, is spherical because of its own gravity, and has "cleared" its orbit. Pluto has not, so it is a dwarf planet.</li>
</ul>
<p>Why are the planets near the Sun rocky and the distant ones gaseous? In the early disc, close to the Sun it was too hot for gases and ices to condense: only metals and rocks remained. Beyond the "frost line" (between Mars and Jupiter) the protoplanets could gather ice and capture hydrogen and helium.</p>`
    },
    {
      type: "3d",
      title: "The Solar System in motion",
      scene: "solar",
      options: { labels: true },
      caption: "Rotate the view. Notice that the planets orbit almost in the same plane and in the same direction: it is the legacy of the disc they were born from."
    },
    {
      type: "svg",
      title: "Distances from the Sun",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#0f172a"/>
<circle cx="25" cy="150" r="22" fill="#facc15"/>
<g stroke="#334155" stroke-width="1" stroke-dasharray="4 4"><line x1="75" y1="40" x2="75" y2="260"/><line x1="105" y1="40" x2="105" y2="260"/><line x1="125" y1="40" x2="125" y2="260"/><line x1="170" y1="40" x2="170" y2="260"/></g>
<g>
<circle cx="75" cy="150" r="4" fill="#9ca3af"/><text x="75" y="190" font-size="14" text-anchor="middle" fill="#e2e8f0">Me</text>
<circle cx="100" cy="150" r="7" fill="#fbbf24"/><text x="100" y="212" font-size="14" text-anchor="middle" fill="#e2e8f0">Ve</text>
<circle cx="130" cy="150" r="8" fill="#3b82f6"/><text x="130" y="190" font-size="14" text-anchor="middle" fill="#e2e8f0">Ea</text>
<circle cx="170" cy="150" r="5" fill="#ef4444"/><text x="170" y="212" font-size="14" text-anchor="middle" fill="#e2e8f0">Ma</text>
<circle cx="290" cy="150" r="22" fill="#d97706"/><text x="290" y="190" font-size="14" text-anchor="middle" fill="#e2e8f0">Ju</text>
<circle cx="400" cy="150" r="18" fill="#eab308"/><text x="400" y="212" font-size="14" text-anchor="middle" fill="#e2e8f0">Sa</text>
<circle cx="520" cy="150" r="12" fill="#22d3ee"/><text x="520" y="190" font-size="14" text-anchor="middle" fill="#e2e8f0">Ur</text>
<circle cx="600" cy="150" r="12" fill="#2563eb"/><text x="600" y="212" font-size="14" text-anchor="middle" fill="#e2e8f0">Ne</text>
</g>
<text x="320" y="30" font-size="16" text-anchor="middle" fill="#f8fafc" font-weight="bold">Average distances from the Sun (sizes not to scale)</text>
<text x="320" y="270" font-size="14" text-anchor="middle" fill="#cbd5e1">0.39 · 0.72 · 1 · 1.52 · 5.2 · 9.6 · 19.2 · 30 AU</text>
</svg>`,
      caption: "Distances in astronomical units (AU). 1 AU = average Earth–Sun distance ≈ 149.6 million km. Sunlight covers it in about 8 minutes and 20 seconds."
    },
    {
      type: "example",
      title: "How far away is the Sun, in light-time?",
      html: `<p>Light travels at about <b>300,000 km/s</b>. Earth–Sun distance: <b>149.6 million km</b>.</p>
<ol>
<li>t = s / v = 149,600,000 km / 300,000 km/s ≈ <b>499 s</b>.</li>
<li>499 s ≈ 8 minutes and 19 seconds.</li>
</ol>
<p>This means that when you look at the Sun, you see it as it was more than 8 minutes ago. For Neptune (30 AU) light takes about four and a half hours: signals from the Voyager probes, more than 20 billion km away, take over 18 hours to arrive.</p>`
    },
    {
      type: "text",
      title: "From geocentrism to heliocentrism",
      html: `<p>To see how ways of thinking changed, follow the steps:</p>
<ul>
<li><b>Aristotle</b> and later <b>Ptolemy</b> (2nd century AD, <i>Almagest</i>): the Earth is motionless at the centre and everything revolves around it. To explain the "retrograde" motion of the planets (which sometimes seem to move backwards) Ptolemy used circles on circles, called <b>epicycles</b>.</li>
<li><b>Aristarchus of Samos</b> (3rd century BC) had already proposed a system with the Sun at the centre, but nobody followed him.</li>
<li><b>Copernicus</b> (<i>De revolutionibus</i>, 1543): the Sun is at the centre and the Earth is a planet that spins on its axis and goes around the Sun. Retrograde motion becomes an effect of perspective: the faster Earth overtakes Mars.</li>
<li><b>Galileo</b> (1610), with the telescope: the four moons of Jupiter (which go around Jupiter, not the Earth), the phases of Venus, sunspots, the craters of the Moon.</li>
<li><b>Kepler</b> (1609–1619) and <b>Newton</b> (1687) gave the model its mathematical laws.</li>
</ul>`
    },
    {
      type: "decision",
      title: "It is 1610: is the Earth still or moving?",
      html: `<p>You have just read Galileo's <i>Sidereus Nuncius</i>. He says that with a telescope he has seen <b>four "stars" circling Jupiter</b> and that Venus shows phases like the Moon, from "crescent" to "full". The Church and almost all university professors defend Ptolemy's system, in which everything goes around the Earth. What do you think?</p>`,
      question: "What would you have thought?",
      options: [
        { label: "Galileo is wrong: they are flaws in the lenses", outcome: "That was many people's reaction at the time. But other astronomers, including Jesuits at the Collegio Romano, repeated the observations and confirmed them." },
        { label: "Not everything goes around the Earth, but I am not sure the Sun is the centre", outcome: "Reasonable: Jupiter's moons show that there are centres of motion other than the Earth. Tycho Brahe's hybrid system (planets around the Sun and the Sun around the Earth) also explained the phases of Venus." },
        { label: "The Copernican model is the simplest and most consistent", outcome: "That is the conclusion Galileo and Kepler reached, even though the decisive proof (stellar parallax) only came in 1838 with Bessel." }
      ],
      answer: 2,
      explain: "Galileo's observations (1610) did not prove heliocentrism on their own, but they showed that Ptolemy's model did not hold up. In 1633 Galileo was tried by the Inquisition and forced to recant. The Copernican system was later proven by Kepler's laws and Newton's gravitation."
    },
    {
      type: "text",
      title: "Kepler's three laws",
      html: `<p>Johannes <b>Kepler</b> (1571–1630) inherited <b>Tycho Brahe</b>'s observations of Mars, which were more precise than any before. After years of calculations, he discovered that orbits are not circles:</p>
<ol>
<li><b>First law (1609)</b>: each planet moves along an <b>ellipse</b> with the Sun at one of the two <b>foci</b>.</li>
<li><b>Second law (1609)</b>: the line joining the planet to the Sun <b>sweeps out equal areas in equal times</b>. Consequence: the planet moves faster when it is close to the Sun (<b>perihelion</b>) and slower when it is far away (<b>aphelion</b>).</li>
<li><b>Third law (1619)</b>: the square of the orbital period is proportional to the cube of the semi-major axis of the orbit: <b>T² / a³ = constant</b>. With T in years and a in AU the constant equals 1: <b>T² = a³</b>.</li>
</ol>
<p>In 1687 Newton showed that the three laws follow from a single force: <b>universal gravitation</b>, F = G · m₁ · m₂ / r².</p>`
    },
    {
      type: "svg",
      title: "The ellipse and the law of areas",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<ellipse cx="320" cy="150" rx="260" ry="100" fill="none" stroke="#2563eb" stroke-width="3"/>
<circle cx="220" cy="150" r="14" fill="#facc15" stroke="#b45309" stroke-width="2"/>
<circle cx="420" cy="150" r="4" fill="#475569"/>
<text x="220" y="185" font-size="14" text-anchor="middle" fill="#1f2937">Sun (focus)</text>
<text x="420" y="170" font-size="14" text-anchor="middle" fill="#475569">other focus</text>
<path d="M220 150 L560 150 A260 100 0 0 0 543 106 Z" fill="#fde68a" opacity="0.9" stroke="#b45309" stroke-width="1"/>
<path d="M220 150 L83 128 A260 100 0 0 0 80 175 Z" fill="#bbf7d0" opacity="0.9" stroke="#15803d" stroke-width="1"/>
<circle cx="580" cy="150" r="9" fill="#3b82f6"/>
<circle cx="60" cy="150" r="9" fill="#3b82f6"/>
<text x="580" y="185" font-size="14" text-anchor="middle" fill="#1f2937">aphelion</text>
<text x="60" y="185" font-size="14" text-anchor="middle" fill="#1f2937">perihelion</text>
<text x="320" y="30" font-size="16" text-anchor="middle" fill="#0c4a6e" font-weight="bold">The two coloured areas are equal: same travel time</text>
<text x="320" y="285" font-size="14" text-anchor="middle" fill="#475569">(the eccentricity is greatly exaggerated: Earth's orbit is almost a circle)</text>
</svg>`,
      caption: "The closer the planet is to the Sun, the faster it moves: to sweep the same area in a shorter stretch it needs more speed; for the wider one, less is enough."
    },
    {
      type: "example",
      title: "Using the third law: the period of Mars",
      html: `<p>Mars has a semi-major axis <b>a = 1.52 AU</b>. How long is its year?</p>
<ol>
<li>T² = a³ = 1.52³ ≈ 3.51</li>
<li>T = √3.51 ≈ <b>1.87 Earth years</b> (about 687 days).</li>
</ol>
<p>For Jupiter, a = 5.2 AU: T² = 140.6 → T ≈ <b>11.9 years</b>. And for an asteroid with a period of 8 years? a³ = 64 → a = <b>4 AU</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: the Solar System and Kepler",
      questions: [
        { type: "mc", q: "At which point in its orbit does a planet move fastest?", options: ["Aphelion", "Perihelion", "It is always the same"], answer: 1, explain: "Second law: closer to the Sun, faster." },
        { type: "num", q: "A planet has a semi-major axis a = 4 AU. What is its period T (in years)?", answer: 8, tol: 0.05, unit: "years", explain: "T² = 4³ = 64 → T = 8 years." },
        { type: "tf", q: "The Sun contains about 99.86% of the mass of the Solar System.", answer: true, explain: "All the planets together make up less than 0.2% (Jupiter alone accounts for more than two thirds of that)." }
      ]
    },
    {
      type: "text",
      title: "The shape and size of the Earth",
      html: `<p>People knew the Earth was a sphere long before Columbus. Greek philosophers already gave evidence:</p>
<ul>
<li>during <b>lunar eclipses</b> the Earth's shadow on the Moon is always round (<b>Aristotle</b>, 4th century BC);</li>
<li><b>ships disappear over the horizon</b> hull first: first the hull vanishes, then the sails;</li>
<li>as you travel south new stars appear, and the height of the Pole Star changes with latitude;</li>
<li>today: photos from space, round-the-world journeys, GPS.</li>
</ul>
<p>More precisely, the Earth is not a perfect sphere but a <b>geoid</b>: it is flattened at the poles because of its rotation. Equatorial radius <b>6378 km</b>, polar radius <b>6357 km</b> (a difference of about 21 km, or 0.3%). The circumference at the equator is about <b>40,075 km</b>; along a meridian about 40,008 km. One degree of latitude measures about 111 km: this is the origin of the original definition of the <b>metre</b> (1791: one ten-millionth of the quarter meridian from the pole to the equator).</p>`
    },
    {
      type: "example",
      title: "Eratosthenes measures the Earth (about 240 BC)",
      html: `<p>Eratosthenes, head of the Library of Alexandria, learned that at <b>Syene</b> (today Aswan), at noon on the summer solstice, the Sun lit up the bottom of wells: it was at the <b>zenith</b>. At the same moment in <b>Alexandria</b> a vertical rod (gnomon) cast a shadow: the Sun made an angle of about <b>7.2°</b> with the vertical, that is 1/50 of a full circle.</p>
<ol>
<li>So the distance from Syene to Alexandria is 1/50 of the Earth's circumference.</li>
<li>The distance (measured by "bematists", who counted their steps) was about <b>5000 stadia</b>.</li>
<li>Circumference = 5000 × 50 = <b>250,000 stadia</b>.</li>
</ol>
<p>With a stadion between 157 and 185 m, the result is between 39,000 and 46,000 km: amazingly close to the true value of 40,000 km, using a rod, a shadow and a little geometry.</p>`
    },
    {
      type: "widget",
      title: "The globe",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#f0f9ff"/><circle cx="200" cy="150" r="110" fill="#bae6fd" stroke="#0369a1" stroke-width="3"/><ellipse cx="200" cy="150" rx="110" ry="30" fill="none" stroke="#dc2626" stroke-width="2"/><ellipse cx="200" cy="150" rx="40" ry="110" fill="none" stroke="#16a34a" stroke-width="2"/><line x1="200" y1="20" x2="200" y2="280" stroke="#475569" stroke-width="2" stroke-dasharray="6 4"/><ellipse cx="200" cy="92" rx="70" ry="14" fill="none" stroke="#7c3aed" stroke-width="2"/></svg>`,
        spots: [
          { x: 200, y: 20, label: "Axis of rotation" },
          { x: 310, y: 150, label: "Equator" },
          { x: 200, y: 78, label: "Parallel" },
          { x: 160, y: 220, label: "Meridian" }
        ]
      },
      caption: "The geographic grid: parallels (circles parallel to the equator) measure latitude, meridians (from pole to pole) measure longitude."
    },
    {
      type: "3d",
      title: "The interior of the Earth",
      scene: "layers",
      options: { layers: [
        { r: 1, color: "#92400e", label: "Crust (5-70 km)" },
        { r: 0.9, color: "#ea580c", label: "Mantle (down to 2900 km)" },
        { r: 0.55, color: "#f59e0b", label: "Outer core (liquid)" },
        { r: 0.2, color: "#fef08a", label: "Inner core (solid)" }
      ] },
      caption: "The Earth's radius is about 6371 km. We know its interior thanks to seismic waves from earthquakes, which change speed as they pass through different materials (the proportions here are schematic)."
    },
    {
      type: "alternatives",
      title: "Other ways to grasp the sizes",
      intro: "Astronomical distances are beyond intuition. Try these scales.",
      tabs: [
        {
          label: "⚽ At a scale of 1:10 billion",
          html: `<p>Let's shrink everything 10 billion times: the Sun becomes a ball about 14 cm across, the Earth a 1.3 mm grain 15 m away. Jupiter is a 1.4 cm marble 78 m away; Neptune is 450 m away. The nearest star, Proxima Centauri, would be more than 4000 km away, farther than from Rome to Moscow. The Solar System is almost entirely empty space.</p>`
        },
        {
          label: "🏎️ At 100 km/h",
          html: `<p>A car travelling at 100 km/h would take about <b>1.5 million hours</b>, or about <b>170 years</b>, to go from the Earth to the Sun. The Moon (384,400 km) would take about 160 days. Light goes around the equator 7.5 times in one second.</p>`
        },
        {
          label: "📅 The cosmic calendar",
          html: `<p>Let's squeeze the Universe's 13.8 billion years of history into one year: the Big Bang is on 1 January; the Solar System is born around 2 September; life appears in mid-September; dinosaurs rule at the end of December; <b>Homo sapiens</b> appears a few minutes before midnight on 31 December. All of written human history fits into the last few seconds.</p>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Are we upside down?",
      html: `<p>There is no absolute "up" in space: "down" is where gravity points, that is towards the centre of the Earth. An Australian is "upside down" compared with an Italian only on our maps, which put north at the top by convention (many medieval maps put east at the top, which is where the word <b>orient</b> yourself comes from). Another curiosity: the Earth does not only travel around the Sun at about 30 km/s: the Sun itself orbits the centre of the Milky Way at about 220 km/s and completes one lap in about 230 million years.</p>`
    },
    {
      type: "curiosity",
      title: "Why Pluto is no longer a planet",
      html: `<p>Pluto was discovered in 1930 by <b>Clyde Tombaugh</b>. But in the 2000s other bodies of similar size were found in the Kuiper belt: <b>Eris</b>, found in 2005, is even slightly more massive than Pluto. Either dozens of objects had to be declared planets, or the category had to be redefined. In 2006 the International Astronomical Union chose the second option and created the category of <b>dwarf planets</b>. In 2015 the <b>New Horizons</b> probe sent us spectacular photos of Pluto's surface, with a huge heart-shaped plain of nitrogen ice.</p>`
    },
    {
      type: "conceptMap",
      title: "Map of the Solar System: tap the nodes and find out why",
      nodes: [
        { id: "nebulosa", label: "Solar nebula", x: 50, y: 6, color: "#a855f7", html: "The cloud of gas and dust from which everything was born, 4.6 billion years ago.", why: "The nebular hypothesis was proposed by <b>Kant</b> (1755) and <b>Laplace</b> (1796) to explain why the planets all orbit in the same direction and almost in the same plane; the age of 4.57 billion years comes from radiometric dating of the oldest meteorites." },
        { id: "sole", label: "Sun", x: 20, y: 28, color: "#facc15", html: "The central star.", why: "The Sun's energy comes from the fusion of hydrogen into helium: <b>Bethe</b> (1938–39) explained the reactions. That is why the Sun has a limited life: it still has about 5 billion years of fuel." },
        { id: "pianeti", label: "Planets", x: 50, y: 40, color: "#3b82f6", html: "Four terrestrial and four giants.", why: "The difference in composition depends on the temperature of the disc: inside the frost line only rocks and metals, outside it also ices and gases." },
        { id: "keplero", label: "Kepler's laws", x: 80, y: 28, color: "#22c55e", html: "Elliptical orbits, equal areas, T² ∝ a³.", why: "For years Kepler tried to make Tycho Brahe's data fit circular orbits, but there was always a discrepancy of 8 minutes of arc: trusting the data more than tradition, he discovered ellipses." },
        { id: "newton", label: "Universal gravitation", x: 80, y: 56, color: "#ef4444", html: "F = G·m₁·m₂/r².", why: "Newton (1687) showed that the same force that makes an apple fall governs the motion of the Moon and the planets, and from it he mathematically derived Kepler's three laws." },
        { id: "terra", label: "Shape of the Earth", x: 20, y: 62, color: "#06b6d4", html: "A geoid slightly flattened at the poles.", why: "Rotation creates a centrifugal force that is greatest at the equator, and rock flows into a bulge. In 1735 French expeditions to Lapland and Peru measured the length of one degree of meridian and confirmed the flattening predicted by Newton." },
        { id: "eratostene", label: "Eratosthenes", x: 20, y: 86, color: "#f59e0b", html: "First measurement of the Earth's circumference.", why: "He used geometry: the alternate angles formed by parallel sunrays, together with the distance between two cities, give the fraction of the circumference." },
        { id: "geo", label: "Geocentrism and heliocentrism", x: 55, y: 80, color: "#14b8a6", html: "Earth or Sun at the centre?", why: "Copernicus (1543), Galileo (1610), Kepler (1609) and Newton (1687) built the modern model one on top of the other. Observational confirmation of the Earth's yearly revolution, stellar parallax, came in 1838 with Bessel." }
      ],
      edges: [
        ["nebulosa", "sole", "forms"],
        ["nebulosa", "pianeti", "forms"],
        ["pianeti", "keplero", "described by"],
        ["keplero", "newton", "explained by"],
        ["pianeti", "terra", "including"],
        ["terra", "eratostene", "measured by"],
        ["geo", "keplero", "leads to"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: the Earth",
      questions: [
        { type: "mc", q: "Who first measured the Earth's circumference using shadows and geometry?", options: ["Eratosthenes", "Ptolemy", "Kepler"], answer: 0, explain: "Eratosthenes of Cyrene, librarian in Alexandria (3rd century BC)." },
        { type: "mc", q: "The shape of the Earth is best described as…", options: ["a perfect sphere", "a geoid, flattened at the poles", "a disc"], answer: 1, explain: "Rotation makes the equator bulge: the equatorial radius is 21 km longer than the polar one." },
        { type: "tf", q: "Pluto is a dwarf planet.", answer: true, explain: "Since 2006, according to the IAU definition." }
      ]
    }
  ],
  glossary: [
    { t: "Solar System", d: "The Sun and all the bodies that orbit it." },
    { t: "Astronomical unit (AU)", d: "The average Earth–Sun distance, about 149.6 million km." },
    { t: "Terrestrial planet", d: "A small, rocky planet: Mercury, Venus, Earth, Mars." },
    { t: "Giant planet", d: "A large, low-density planet: Jupiter, Saturn, Uranus, Neptune." },
    { t: "Dwarf planet", d: "A spherical body that orbits the Sun but has not cleared its orbit (Pluto, Ceres)." },
    { t: "Ellipse", d: "A closed curve for which the sum of the distances from the two foci is constant." },
    { t: "Perihelion / aphelion", d: "The points of an orbit closest to and farthest from the Sun." },
    { t: "Kepler's third law", d: "T² / a³ is the same for all planets." },
    { t: "Geoid", d: "The real shape of the Earth, flattened at the poles." },
    { t: "Latitude / longitude", d: "Angular coordinates that locate a point on the Earth relative to the equator and the Greenwich meridian." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which body in the Solar System has the most mass?", options: ["Jupiter", "The Sun", "The Earth"], answer: 1, explain: "The Sun has 99.86% of the mass." },
      { type: "mc", q: "Which are the gas giants?", options: ["Jupiter and Saturn", "Uranus and Neptune", "Mars and Venus"], answer: 0, explain: "Jupiter and Saturn are made mostly of hydrogen and helium; Uranus and Neptune are ice giants." },
      { type: "tf", q: "According to Kepler, planetary orbits are ellipses with the Sun at one focus.", answer: true, explain: "It is Kepler's first law." },
      { type: "num", q: "A planet has a semi-major axis a = 9 AU. What is its period in years?", answer: 27, unit: "years", explain: "T² = 9³ = 729 → T = 27 years." },
      { type: "mc", q: "In January the Earth is at perihelion, so…", options: ["it moves faster", "it is warmer in the northern hemisphere", "it is farther from the Sun"], answer: 0, explain: "Close to the Sun it moves faster (second law). The seasons do not depend on distance but on the tilt of the axis." },
      { type: "num", q: "If sunlight takes 500 seconds to reach the Earth, how many km away is the Sun? (c = 300,000 km/s)", answer: 150000000, tol: 1000000, unit: "km", explain: "s = c · t = 300,000 × 500 = 150 million km." },
      { type: "mc", q: "What evidence did Aristotle give for the Earth being a sphere?", options: ["The round shadow of the Earth during lunar eclipses", "Photos from space", "The tides"], answer: 0, explain: "Only a spherical body always casts a round shadow." },
      { type: "text", q: "Who wrote De revolutionibus orbium coelestium in 1543?", answer: ["copernicus", "nicolaus copernicus", "nicholas copernicus"], explain: "Nicolaus Copernicus, who proposed the heliocentric system." },
      { type: "order", q: "Put the planets in order of increasing distance from the Sun.", items: ["Mercury", "Earth", "Mars", "Jupiter", "Saturn"], explain: "Mercury 0.39 AU, Earth 1, Mars 1.52, Jupiter 5.2, Saturn 9.6." },
      { type: "mc", q: "How has it been possible to study the Earth's internal structure?", options: ["With seismic waves", "By digging down to the core", "With telescopes"], answer: 0, explain: "The deepest borehole (Kola, about 12 km) does not even reach the mantle: we know the interior from seismic waves." }
    ]
  }
});
