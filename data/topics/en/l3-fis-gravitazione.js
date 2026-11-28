TOPIC('en', {
  id: "l3-fis-gravitazione",
  title: "Universal gravitation",
  intro: "The same force that makes an apple fall from a tree keeps the Moon in orbit around the Earth and the planets around the Sun. It is one of the most powerful ideas in the history of science: in 1687 Isaac Newton showed that <b>the physics of the heavens and the physics of the Earth are the same physics</b>. In this lesson we start from <b>Kepler</b>'s three laws, discover the <b>law of universal gravitation</b>, calculate the speed of <b>satellites</b> and introduce the concept of the <b>gravitational field</b>.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "From Ptolemy's heavens to Kepler's ellipses",
      html: `<p>For almost fifteen centuries people accepted Ptolemy's <b>geocentric</b> model (2nd century AD, <i>Almagest</i>): the Earth at rest at the centre, and the planets moving on circles and circles upon circles (epicycles). In 1543 <b>Nicolaus Copernicus</b> proposed the <b>heliocentric</b> model, with the Sun at the centre, but keeping circular orbits. With the telescope (1609-1610) <b>Galileo</b> discovered the phases of Venus and the moons of Jupiter, evidence that not everything revolves around the Earth.</p>
<p>The decisive step was taken by <b>Johannes Kepler</b> (1571-1630), who inherited the observations of Mars, of unprecedented precision, made by <b>Tycho Brahe</b> (1546-1601), the astronomer who observed with the naked eye using extremely accurate instruments. After years of calculations Kepler discovered three empirical laws.</p>`
    },
    {
      type: "widget",
      title: "From the Earth to the Sun: the great timeline",
      widget: "timeline",
      options: { unit: "years", events: [
        { year: 150, label: "Ptolemy: Almagest", icon: "🌍" },
        { year: 1543, label: "Copernicus: De revolutionibus", icon: "☀️" },
        { year: 1609, label: "Kepler: first two laws", icon: "🪐" },
        { year: 1610, label: "Galileo: moons of Jupiter", icon: "🔭" },
        { year: 1619, label: "Kepler: third law", icon: "📐" },
        { year: 1687, label: "Newton: Principia", icon: "🍎" },
        { year: 1798, label: "Cavendish measures G", icon: "⚖️" },
        { year: 1846, label: "Discovery of Neptune", icon: "🔵" },
        { year: 1915, label: "Einstein: general relativity", icon: "🌀" }
      ] },
      caption: "In less than a century the heavens go from a \"perfect world\" to a system governed by mathematical laws."
    },
    {
      type: "decision",
      title: "Kepler and the 8 minutes of arc",
      html: "<p>For years Kepler tried to describe the orbit of Mars with a circle (as Aristotle, Ptolemy and Copernicus would have it). The best circle he finds reproduces Tycho's data with an error of <b>8 minutes of arc</b> (about a quarter of the apparent diameter of the full Moon). For all the astronomers of the time an error like that would have been acceptable: the instruments of the day had similar errors.</p><p>But Kepler knows that Tycho measured with a precision of 1-2 minutes of arc.</p>",
      question: "What would you have done?",
      options: [
        { label: "Keep the circle: the error is small, tradition matters", outcome: "You would have followed two thousand years of wisdom, but the theory would have stayed in disagreement with the best data ever collected and the discovery of the laws would have been delayed." },
        { label: "Trust Tycho's data and look for a curve other than a circle", outcome: "This is Kepler's choice: he abandons a philosophical principle thousands of years old because it does not stand up to observation. He tries an oval, then the ellipse." },
        { label: "Say that Tycho made mistakes in his measurements", outcome: "It would have been more convenient, but wrong: Tycho's data were excellent and Kepler knew it." }
      ],
      answer: 1,
      explain: "Kepler writes that \"from these eight minutes of arc a revolution in astronomy is born\". In <i>Astronomia nova</i> (1609) he publishes the first two laws: the orbit of Mars is an ellipse with the Sun at one focus, and the radius vector sweeps out equal areas in equal times. The method is a model for science: if the theory does not reproduce the data, you change the theory."
    },
    {
      type: "text",
      title: "Kepler's three laws",
      html: `<ol>
<li><b>Law of orbits</b> (1609): the planets move in <b>ellipses</b> with the <b>Sun at one of the two foci</b>. The ellipse has a semi-major axis <b>a</b>. The orbits of the planets are very close to circles (the Earth's has an eccentricity of 0.017).</li>
<li><b>Law of areas</b> (1609): the line joining the planet to the Sun <b>sweeps out equal areas in equal times</b>. So the planet moves <b>faster</b> when it is closer to the Sun (perihelion) and slower when it is farther away (aphelion). This is equivalent to the conservation of angular momentum L = m·v·r.</li>
<li><b>Law of periods</b> (1619, <i>Harmonices mundi</i>): the ratio of the <b>square of the orbital period</b> to the <b>cube of the semi-major axis</b> is <b>the same for all the planets</b>:</li>
</ol>
<p style="text-align:center"><b>T² / a³ = constant</b></p>
<p>With T in years and a in <b>astronomical units</b> (1 AU = mean Earth–Sun distance ≈ 1.5·10<sup>11</sup> m), the constant is 1 for the planets of the Solar System.</p>
<table>
<tr><th>Planet</th><th>a (AU)</th><th>T (years)</th><th>T²/a³</th></tr>
<tr><td>Mercury</td><td>0.387</td><td>0.241</td><td>≈ 1.0</td></tr>
<tr><td>Earth</td><td>1.000</td><td>1.000</td><td>1.0</td></tr>
<tr><td>Mars</td><td>1.524</td><td>1.881</td><td>≈ 1.0</td></tr>
<tr><td>Jupiter</td><td>5.203</td><td>11.86</td><td>≈ 1.0</td></tr>
<tr><td>Saturn</td><td>9.537</td><td>29.46</td><td>≈ 1.0</td></tr>
</table>`
    },
    {
      type: "svg",
      title: "The ellipse and the law of areas",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#0f172a"/>
<g font-family="sans-serif">
<ellipse cx="300" cy="150" rx="250" ry="110" fill="none" stroke="#94a3b8" stroke-width="3"/>
<circle cx="200" cy="150" r="14" fill="#facc15"/>
<text x="200" y="185" font-size="15" fill="#fde68a" text-anchor="middle">Sun (focus)</text>
<circle cx="400" cy="150" r="4" fill="#94a3b8"/>
<text x="400" y="172" font-size="14" fill="#94a3b8" text-anchor="middle">other focus</text>
<path d="M200 150 L 110 148 L 98 120 Z" fill="#ef4444" fill-opacity="0.6" stroke="#fca5a5" stroke-width="2"/>
<path d="M200 150 L 520 116 L 545 150 L 535 175 Z" fill="#3b82f6" fill-opacity="0.5" stroke="#93c5fd" stroke-width="2"/>
<circle cx="105" cy="140" r="9" fill="#38bdf8"/>
<circle cx="535" cy="165" r="9" fill="#38bdf8"/>
<text x="60" y="95" font-size="15" fill="#fca5a5">perihelion:</text>
<text x="60" y="113" font-size="15" fill="#fca5a5">fast</text>
<text x="500" y="95" font-size="15" fill="#93c5fd">aphelion: slow</text>
<text x="300" y="30" font-size="15" fill="#e2e8f0" text-anchor="middle" font-weight="bold">Equal areas in equal times</text>
<text x="300" y="285" font-size="14" fill="#cbd5e1" text-anchor="middle">(ellipse greatly exaggerated for clarity)</text>
</g>
</svg>`,
      caption: "The two coloured areas are swept out in the same time interval: they are equal even though the arcs travelled are different."
    },
    {
      type: "3d",
      title: "The Solar System in motion",
      scene: "solar",
      options: { labels: true },
      caption: "Notice how the more distant planets take much longer to complete an orbit (Kepler's third law)."
    },
    {
      type: "example",
      title: "How long is a year on Mars and on Jupiter?",
      html: `<p>With the third law, in Earth years and AU: T = a<sup>3/2</sup>.</p>
<ul>
<li><b>Mars</b>: a = 1.52 AU ⟹ T = 1.52<sup>1.5</sup> ≈ <b>1.87 years</b> (about 687 days);</li>
<li><b>Jupiter</b>: a = 5.20 AU ⟹ T = 5.20<sup>1.5</sup> ≈ <b>11.9 years</b>;</li>
<li><b>A comet</b> with a = 17.8 AU: T = 17.8<sup>1.5</sup> ≈ 75 years — this is Halley's comet, which returns every 75-76 years (last perihelion passage: 1986, next in 2061).</li>
</ul>
<p>The same law holds for the moons of a planet, with a different constant: T²/a³ depends on the mass of the central body.</p>`
    },
    {
      type: "quiz",
      title: "Check: Kepler",
      questions: [
        { type: "mc", q: "Where is the Sun located relative to the elliptical orbit of a planet?", options: ["At the centre of the ellipse", "At one of the two foci", "At any point", "At aphelion"], answer: 1, explain: "Kepler's first law: the Sun is at one of the two foci." },
        { type: "num", q: "An asteroid has a semi-major axis a = 4 AU. How long is its year (in Earth years)?", answer: 8, tol: 0.01, unit: "years", explain: "T = a^(3/2) = 4^1.5 = 8 years." },
        { type: "tf", q: "A planet moves faster when it is closer to the Sun.", answer: true, explain: "Second law: to sweep out the same area, the shorter radius must go faster (L = m·v·r constant)." }
      ]
    },
    {
      type: "text",
      title: "The law of universal gravitation",
      html: `<p>Kepler describes <i>how</i> the planets move, but does not explain <i>why</i>. Newton (<i>Philosophiae Naturalis Principia Mathematica</i>, 1687) showed that the three laws follow from <b>a single force</b>: all bodies with mass attract each other with a force</p>
<p style="text-align:center"><b>F = G · m<sub>1</sub> · m<sub>2</sub> / r²</b></p>
<ul>
<li><b>m<sub>1</sub>, m<sub>2</sub></b>: the masses of the two bodies (treated as point masses, or uniform spheres with r = distance between the centres);</li>
<li><b>r</b>: distance between the centres;</li>
<li><b>G = 6.67·10<sup>-11</sup> N·m²/kg²</b>: the universal gravitational constant (the same everywhere).</li>
</ul>
<p>Features: the force is always <b>attractive</b>, acts along the line joining the centres, obeys the <b>third law</b> (the two forces are equal and opposite) and decreases with the <b>square of the distance</b> (the "inverse square law"): doubling r makes the force a quarter, tripling it makes it a ninth.</p>
<p>The force is <b>extremely weak</b> for everyday objects: two 70 kg people 1 m apart attract each other with F = 6.67·10<sup>-11</sup> × 70 × 70 / 1 ≈ 3.3·10<sup>-7</sup> N (less than the weight of a grain of sand). It only becomes large when at least one of the masses is astronomical.</p>
<p>Newton did not know the value of G: it was measured by <b>Henry Cavendish</b> in 1798 with a torsion balance, two small lead spheres attracted by two large ones. Cavendish is said to have "weighed the Earth": once G and g are known, the mass of the Earth follows.</p>`
    },
    {
      type: "example",
      title: "The Moon test",
      html: `<p>Newton asked himself: if gravity decreases as 1/r², the Moon (at 60 Earth radii) must "fall" towards the Earth with an acceleration 60² = 3600 times smaller than g. So a<sub>Moon</sub> = 9.8/3600 ≈ <b>2.7·10<sup>-3</sup> m/s²</b>.</p>
<p>From circular motion: a<sub>c</sub> = 4π²r/T². With r = 3.84·10<sup>8</sup> m and T = 27.3 days = 2.36·10<sup>6</sup> s we get a<sub>c</sub> = 39.5 × 3.84·10<sup>8</sup> / (5.57·10<sup>12</sup>) ≈ <b>2.7·10<sup>-3</sup> m/s²</b>. The numbers match: it is the same force that makes the apple fall and keeps the Moon in orbit. The Moon is continuously falling towards the Earth, but its tangential velocity is so high that it always "misses" the target.</p>`
    },
    {
      type: "text",
      title: "The gravitational field and gravity on Earth",
      html: `<p>A mass M changes the space around it: at every point it creates a <b>gravitational field</b> g⃗, defined as the force per unit mass that would act on a test mass m placed at that point:</p>
<p style="text-align:center"><b>g⃗ = F⃗/m &nbsp;⟹&nbsp; g = G·M/r²</b> (at a distance r from the centre)</p>
<p>The field is a vector pointing towards M and is measured in N/kg (equivalent to m/s²). At the surface of a planet of mass M and radius R:</p>
<p style="text-align:center"><b>g = G·M / R²</b></p>
<p>For the Earth (M = 5.97·10<sup>24</sup> kg, R = 6.37·10<sup>6</sup> m): g = 6.67·10<sup>-11</sup> × 5.97·10<sup>24</sup> / (6.37·10<sup>6</sup>)² ≈ <b>9.8 m/s²</b>. Weight W = m·g is simply the gravitational force at the surface. This also explains why <b>all bodies fall with the same acceleration</b>: the force is proportional to m, but the acceleration a = F/m does not depend on m.</p>
<p>g decreases with altitude: at a height h above the surface g(h) = G·M/(R + h)². At 400 km (the orbit of the ISS) g ≈ 8.7 m/s², still 88% of its value at ground level: astronauts "float" not because there is no gravity, but because they are in <b>free fall</b> together with the station.</p>
<table>
<tr><th>Body</th><th>g at the surface (m/s²)</th></tr>
<tr><td>Sun</td><td>≈ 274</td></tr>
<tr><td>Jupiter</td><td>≈ 24.8</td></tr>
<tr><td>Earth</td><td>9.81</td></tr>
<tr><td>Mars</td><td>≈ 3.7</td></tr>
<tr><td>Moon</td><td>≈ 1.62</td></tr>
</table>`
    },
    {
      type: "quiz",
      title: "Check: Newton's law and g",
      questions: [
        { type: "mc", q: "If the distance between two bodies is doubled, the gravitational force:", options: ["doubles", "halves", "becomes a quarter", "becomes an eighth"], answer: 2, explain: "F ∝ 1/r²: with r doubled the force becomes 1/4." },
        { type: "num", q: "At what distance from the centre of the Earth (in Earth radii R) is g a quarter of its value at the surface?", answer: 2, tol: 0, unit: "R", explain: "g ∝ 1/r²: g/4 when r = 2R, that is at a height of one Earth radius above the surface." },
        { type: "tf", q: "Astronauts on the ISS float because there is no gravity there.", answer: false, explain: "At 400 km g is still about 88% of its value at ground level: the astronauts are in free fall together with the station." }
      ]
    },
    {
      type: "text",
      title: "Satellites: circular orbits",
      html: `<p>For a satellite (artificial or natural) in a circular orbit of radius r around a body of mass M, the centripetal force is provided by the <b>gravitational force</b>:</p>
<p style="text-align:center">m·v²/r = G·M·m/r² &nbsp;⟹&nbsp; <b>v = √(G·M / r)</b></p>
<p>The period is T = 2π·r/v, which gives <b>T² = (4π²/GM)·r³</b>: here is Kepler's third law with its constant explained, K = 4π²/(G·M). From these results we see that:</p>
<ul>
<li>the <b>mass of the satellite does not matter</b>: a ball and a spacecraft at the same altitude have the same speed and the same period;</li>
<li>the <b>higher</b> the orbit, the <b>slower</b> the satellite and the longer its period;</li>
<li>knowing T and r for a satellite, you can <b>weigh</b> the central body: M = 4π²r³/(G·T²). This is how the mass of the Sun (using the Earth), of Jupiter (using its moons) and so on were determined.</li>
</ul>
<p><b>Examples.</b> International Space Station (ISS): altitude ≈ 400 km ⟹ r ≈ 6.78·10<sup>6</sup> m; v = √(3.99·10<sup>14</sup>/6.78·10<sup>6</sup>) ≈ <b>7.7 km/s</b> (about 27 600 km/h), period ≈ <b>92 minutes</b>: 16 sunrises a day. <b>Geostationary satellite</b>: period of one sidereal day (23 h 56 min), equatorial orbit with r ≈ 42 160 km, that is about 35 800 km above the surface: it appears stationary in the sky, ideal for telecommunications and weather forecasting.</p>`
    },
    {
      type: "svg",
      title: "Newton's cannon",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eff6ff"/>
<g font-family="sans-serif">
<circle cx="300" cy="380" r="260" fill="#60a5fa" stroke="#1d4ed8" stroke-width="4"/>
<rect x="283" y="108" width="34" height="18" fill="#334155" rx="3"/>
<text x="300" y="98" font-size="15" fill="#0f172a" text-anchor="middle">cannon on the mountain</text>
<path d="M317 117 Q 400 100 450 190" stroke="#dc2626" stroke-width="3" fill="none" stroke-dasharray="6 5"/>
<path d="M317 117 Q 480 90 520 260" stroke="#f59e0b" stroke-width="3" fill="none" stroke-dasharray="6 5"/>
<path d="M317 117 Q 570 80 580 300" stroke="#16a34a" stroke-width="3" fill="none" stroke-dasharray="6 5"/>
<text x="455" y="205" font-size="14" fill="#991b1b">low speed: falls back</text>
<text x="300" y="60" font-size="15" fill="#166534" text-anchor="middle">v = √(GM/R) ≈ 7.9 km/s: orbit!</text>
</g>
</svg>`,
      caption: "Newton imagined a cannon on top of a mountain: the more powerful the shot, the farther away the cannonball lands. At a certain speed the Earth \"curves away\" beneath it as fast as the cannonball falls: that is an orbit."
    },
    {
      type: "text",
      title: "Potential energy and escape velocity",
      html: `<p>Near the surface, gravitational potential energy is U = m·g·h. In general, choosing U = 0 at infinite distance, for a mass m at a distance r from the centre of M:</p>
<p style="text-align:center"><b>U(r) = − G·M·m / r</b></p>
<p>It is negative: the mass is "bound" to the planet and energy must be supplied to move it away. For a satellite in a circular orbit the kinetic energy is K = ½mv² = G·M·m/(2r) and the total energy is E = K + U = −G·M·m/(2r) (negative: a bound orbit).</p>
<p>The <b>escape velocity</b> is the minimum speed that must be given to a body at the surface for it to reach infinity (with E = 0, neglecting air): ½mv² = G·M·m/R ⟹</p>
<p style="text-align:center"><b>v<sub>esc</sub> = √(2·G·M / R) = √2 · v<sub>orbital</sub></b></p>
<p>For the Earth v<sub>esc</sub> ≈ <b>11.2 km/s</b> (the orbital speed at low altitude is 7.9 km/s); for the Moon ≈ 2.4 km/s: too little to hold on to an atmosphere. For a body dense enough to have v<sub>esc</sub> greater than the speed of light, not even light can get out: it is a <b>black hole</b> (described rigorously by general relativity).</p>`
    },
    {
      type: "example",
      title: "Weighing the Earth and the Sun",
      html: `<p><b>Mass of the Earth.</b> From g at the surface: M = g·R²/G = 9.81 × (6.37·10<sup>6</sup>)² / 6.67·10<sup>-11</sup> ≈ <b>5.97·10<sup>24</sup> kg</b>.</p>
<p><b>Mass of the Sun.</b> The Earth orbits at r = 1.50·10<sup>11</sup> m with T = 3.156·10<sup>7</sup> s: M<sub>S</sub> = 4π²r³/(G·T²) = 39.5 × 3.375·10<sup>33</sup> / (6.67·10<sup>-11</sup> × 9.96·10<sup>14</sup>) ≈ <b>2.0·10<sup>30</sup> kg</b>: about 333 000 Earth masses.</p>
<p>Without ever setting foot on the Sun we have worked out its mass just by observing an orbit: the beauty of universal gravitation.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand gravitation",
      intro: "Such a big idea has many pictures: choose the one that helps you most.",
      tabs: [
        {
          label: "🔦 The inverse square",
          html: "<p>Imagine a light bulb: its light spreads over an ever larger sphere. At a distance r the surface area is 4πr², so the intensity falls off as 1/r². With gravity, the \"influence\" of a mass spreads through three-dimensional space in the same way: that is why the law is 1/r² and not, for example, 1/r or 1/r³. It is also why stable, closed elliptical orbits around a focus exist only with this power: with other laws the orbits would not close.</p>"
        },
        {
          label: "🧗 The potential well",
          html: "<p>Think of potential energy as a funnel-shaped <b>well</b> (like the ones in science museums, where coins spiral round and round). A planet is a deep funnel, and the circling coin represents a satellite: if it is fast it stays high up, if it slows down it spirals downwards. If it has enough energy it gets out of the well (escape velocity). Closed orbits are those with negative total energy, that is, \"trapped\" in the funnel.</p>"
        },
        {
          label: "🔗 Match laws and formulas",
          html: "<p>Match each law or quantity to its formula.</p>",
          widget: "match",
          options: { pairs: [
            ["Kepler's third law", "T²/a³ = constant"],
            ["Universal gravitation", "F = G·m1·m2/r²"],
            ["Gravitational field", "g = G·M/r²"],
            ["Circular orbital speed", "v = √(G·M/r)"],
            ["Escape velocity", "v = √(2·G·M/R)"]
          ] }
        },
        {
          label: "📉 Drawing: g with distance",
          html: "<p>The gravitational field decreases rapidly as you move away from the surface (r in Earth radii).</p>",
          svg: "<svg viewBox='0 0 600 270' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='270' fill='#f8fafc'/><g font-family='sans-serif'><line x1='60' y1='230' x2='560' y2='230' stroke='#334155' stroke-width='3'/><line x1='60' y1='230' x2='60' y2='20' stroke='#334155' stroke-width='3'/><path d='M120 44 C 160 140 200 175 240 183 S 320 203 360 209 S 440 216 480 218 L 540 220' stroke='#2563eb' stroke-width='5' fill='none'/><g font-size='14' fill='#334155' text-anchor='middle'><text x='120' y='250'>1 R</text><text x='240' y='250'>2 R</text><text x='360' y='250'>3 R</text><text x='480' y='250'>4 R</text></g><text x='30' y='125' font-size='14' fill='#334155' transform='rotate(-90 30 125)' text-anchor='middle'>g</text><text x='140' y='60' font-size='14' fill='#1e3a8a'>9.8 m/s² (r = R)</text><text x='250' y='170' font-size='14' fill='#1e3a8a'>2.45 (r = 2R)</text><text x='370' y='196' font-size='14' fill='#1e3a8a'>1.09 (r = 3R)</text></g></svg>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "Neptune, discovered with mathematics",
      html: `<p>Around 1840 it was noticed that the orbit of Uranus (discovered by William Herschel in 1781) showed small irregularities compared with Newton's predictions. Two mathematicians, <b>Urbain Le Verrier</b> in France and <b>John Couch Adams</b> in England, suggested that an unknown planet existed and calculated its position. On 23 September 1846 the astronomer <b>Johann Galle</b>, in Berlin, pointed his telescope at the spot indicated by Le Verrier and found <b>Neptune</b> less than a degree away: Newton's law of gravitation was so reliable that a planet could be discovered "with a pen".</p>`
    },
    {
      type: "curiosity",
      title: "When Newton is not enough: Mercury and Einstein",
      html: `<p>Mercury also showed an anomaly: its perihelion advanced by about 43 seconds of arc per century more than Newton's theory predicted. People looked for another planet, "Vulcan", but it did not exist. The problem was solved only in 1915 by <b>Albert Einstein</b> with <b>general relativity</b>: gravity is not a force acting at a distance but a <b>curvature of spacetime</b> caused by mass and energy. For slow-moving bodies and weak fields Einstein's theory coincides with Newton's, which remains excellent for calculating the orbits of satellites and the trajectories of space probes.</p>`
    },
    {
      type: "conceptMap",
      title: "Map of gravitation",
      nodes: [
        { id: "keplero", label: "Kepler's laws", x: 15, y: 12, color: "#16a34a", html: "Elliptical orbits, equal areas in equal times, T²/a³ = constant.", why: "They were derived (1609-1619) from analysing Tycho Brahe's data on the motion of Mars: they are empirical laws, which describe but do not explain." },
        { id: "newton", label: "Universal gravitation F = G m1 m2/r²", x: 70, y: 12, color: "#ef4444", html: "All masses attract each other with a force inversely proportional to the square of the distance.", why: "Newton derived it by showing that a 1/r² central force produces elliptical orbits, equal areas and the third law. The comparison with the Moon's acceleration confirmed that it is universal." },
        { id: "campo", label: "Gravitational field g = GM/r²", x: 85, y: 50, color: "#8b5cf6", html: "Force per unit mass: a vector at every point in space, directed towards M.", why: "The idea of a field (Faraday, Maxwell) removes the awkwardness of Newton's \"action at a distance\": the mass changes space, and that change acts on another mass." },
        { id: "satelliti", label: "Satellites and orbits", x: 15, y: 55, color: "#2563eb", html: "v = √(GM/r), T² = 4π²r³/(GM): gravity provides the centripetal force.", why: "In a circular orbit gravity and the centripetal force are one and the same. This is how Kepler's third law is derived, and the constant contains the mass of the central body." },
        { id: "energia", label: "Potential energy and escape", x: 55, y: 85, color: "#f59e0b", html: "U = −GMm/r; escape velocity = √(2GM/R) ≈ 11.2 km/s for the Earth.", why: "It is obtained by integrating the gravitational force. Negative energy means the body is bound; the escape velocity corresponds to zero total energy." },
        { id: "einstein", label: "General relativity", x: 20, y: 90, color: "#64748b", html: "Gravity as the curvature of spacetime (1915).", why: "It explains what Newton could not (Mercury's perihelion, the bending of light, gravitational waves) and includes Newton's theory as a limiting case." }
      ],
      edges: [["keplero", "newton", "explained by"], ["newton", "campo", "is described by"], ["newton", "satelliti", "determines"], ["newton", "energia", "implies"], ["newton", "einstein", "generalised by"]]
    }
  ],
  glossary: [
    { t: "Heliocentrism", d: "A model in which the Sun is at the centre of the Solar System and the planets orbit around it." },
    { t: "Semi-major axis", d: "Half the major diameter of an ellipse: the \"mean distance\" of a planet from the Sun." },
    { t: "Perihelion / aphelion", d: "The points of the orbit nearest to / farthest from the Sun." },
    { t: "Astronomical unit (AU)", d: "The mean Earth–Sun distance, about 1.5·10¹¹ m." },
    { t: "Gravitational constant G", d: "G = 6.67·10⁻¹¹ N·m²/kg²: the universal constant in Newton's law." },
    { t: "Gravitational field", d: "Force per unit mass at every point in space; g = G·M/r²." },
    { t: "Escape velocity", d: "The minimum speed needed to move away from a celestial body for ever; for the Earth ≈ 11.2 km/s." },
    { t: "Geostationary satellite", d: "A satellite with a period of one sidereal day in an equatorial orbit: it appears stationary in the sky." },
    { t: "Free fall", d: "The motion of a body acted on by gravity alone: it explains the apparent weightlessness in orbit." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What does Kepler's second law state?", options: ["The planets move in circular orbits", "The radius vector sweeps out equal areas in equal times", "T² is proportional to a³", "The speed is constant"], answer: 1, explain: "It is equivalent to the conservation of angular momentum: the planet is faster at perihelion." },
      { type: "num", q: "A planet has a semi-major axis a = 9 AU. What is its period in years (third law)?", answer: 27, tol: 0.01, unit: "years", explain: "T = a^(3/2) = 9^1.5 = 27 years." },
      { type: "mc", q: "If the distance between two masses triples, the gravitational force:", options: ["triples", "falls to a third", "falls to a ninth", "stays the same"], answer: 2, explain: "F ∝ 1/r²: with r tripled F becomes 1/9." },
      { type: "tf", q: "The gravitational force between the Earth and the Moon has the same magnitude on the Earth as on the Moon.", answer: true, explain: "By the third law the two forces are equal and opposite." },
      { type: "num", q: "What is the gravitational acceleration at a height of 2 Earth radii above the surface (r = 3R)? Use g0 = 9.8 m/s².", answer: 1.09, tol: 0.02, unit: "m/s²", explain: "g = g0/9 = 9.8/9 ≈ 1.09 m/s²." },
      { type: "tf", q: "A more massive satellite, at the same altitude, has a greater orbital speed.", answer: false, explain: "v = √(GM/r) does not depend on the mass of the satellite." },
      { type: "mc", q: "How does the period of a satellite change if the radius of its orbit increases?", options: ["It decreases", "It increases", "It stays the same", "It depends on the mass of the satellite"], answer: 1, explain: "T² ∝ r³: higher orbits have longer periods." },
      { type: "num", q: "A satellite orbits the Earth with r = 6.78·10⁶ m. With GM = 3.99·10¹⁴ m³/s², what is its approximate speed in km/s?", answer: 7.67, tol: 0.1, unit: "km/s", explain: "v = √(GM/r) = √(5.88·10⁷) ≈ 7670 m/s ≈ 7.7 km/s." },
      { type: "mc", q: "Why do astronauts float on the ISS?", options: ["There is no gravity at that altitude", "They are in free fall together with the station", "The air holds them up", "They are beyond the Earth's pull"], answer: 1, explain: "At 400 km g ≈ 8.7 m/s²: astronauts and station fall together, so there is no apparent weight." },
      { type: "order", q: "Put the planets in order of increasing orbital period.", items: ["Mercury", "Earth", "Mars", "Jupiter", "Saturn"], explain: "The farther the planet, the longer T: 0.24; 1; 1.88; 11.9; 29.5 years." }
    ]
  }
});
