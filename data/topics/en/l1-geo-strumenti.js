TOPIC('en', {
  id: "l1-geo-strumenti",
  title: "The tools of geography",
  intro: "A geographer does not just describe the world: they <b>measure</b> it, <b>represent</b> it and <b>interpret</b> it. In this lesson you will learn to read a <b>map</b>, to use <b>scale</b> and <b>coordinates</b>, to understand why every map distorts reality, and you will discover how <b>GPS</b> and <b>GIS</b> have changed the way we study places.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Representing the Earth: plans, maps and charts",
      html: `<p>The Earth is (almost) a sphere, but we need to represent it on a flat sheet of paper or screen. Every representation is a <b>reduction</b> of reality, made for a purpose. The main types are:</p>
<ul>
<li><b>Plan</b> 🏙️: shows a very small area (a town, a building) in great detail; typical scales from 1:1,000 to 1:10,000.</li>
<li><b>Topographic map</b> 🥾: shows an area with roads, rivers, woods, buildings and relief, for example the maps of the IGM (Italy's Military Geographic Institute) at 1:25,000, the ones used by hikers and climbers.</li>
<li><b>Geographic map</b> 🗺️: a larger area (a region, a country), less detail, scale around 1:100,000–1:1,000,000.</li>
<li><b>World map</b> 🌍: the whole surface of the Earth on a flat plane; scales of hundreds of millions.</li>
<li><b>Thematic map</b> 📊: shows <b>a single phenomenon</b> (population density, climate, income, voting) on top of a simple geographic base.</li>
</ul>
<p>Every map has certain standard elements: a <b>title</b>, <b>orientation</b> (usually north at the top), a <b>scale</b>, a <b>legend</b> or key (explaining the symbols and colours) and, where needed, the <b>geographic grid</b>.</p>`
    },
    {
      type: "text",
      title: "2. Scale: how much reality is reduced",
      html: `<p>The <b>scale</b> is the ratio between a distance measured on the map and the corresponding real distance. It can be shown in three ways:</p>
<ul>
<li><b>numerical (ratio)</b>: 1:50,000 means that 1 cm on the map corresponds to 50,000 cm (that is <b>500 m</b>) in reality;</li>
<li><b>graphic (scale bar)</b>: a graduated line showing real distances (useful because it stays correct if you enlarge or reduce a photocopy);</li>
<li><b>verbal</b>: \"1 cm = 500 m\".</li>
</ul>
<p>Watch out for the paradox: a <b>large</b> scale such as 1:1,000 (a large fraction, 1/1,000) shows a <b>small</b> area in lots of detail; a <b>small</b> scale such as 1:10,000,000 shows a <b>vast</b> area with little detail.</p>
<p><b>Useful formulas</b> (with D = distance on the map, R = real distance, N = scale denominator):</p>
<p style="text-align:center"><b>R = D × N</b> &nbsp;&nbsp;&nbsp; <b>D = R ÷ N</b> &nbsp;&nbsp;&nbsp; <b>N = R ÷ D</b></p>`
    },
    {
      type: "example",
      title: "Worked example: measuring a route",
      html: `<p>On a <b>1:50,000</b> map the path from the mountain hut to the summit measures <b>7.2 cm</b>. How long is it in reality?</p>
<p>R = 7.2 cm × 50,000 = 360,000 cm = <b>3,600 m = 3.6 km</b>.</p>
<p>If a hiker walks at 3 km/h on the flat but the climb slows them down, they can allow about 1 h 15 min. Careful: the map measures <b>horizontal</b> distance; if the path climbs steeply, the real route is a little longer than the ruler suggests.</p>
<p><b>The other way round</b>: two villages are 12 km apart and you want a map 24 cm wide. You need N = 12 km ÷ 24 cm = 1,200,000 cm ÷ 24 cm = 50,000: a scale of <b>1:50,000</b>.</p>`
    },
    {
      type: "text",
      title: "3. The geographic grid: latitude and longitude",
      html: `<p>To pinpoint a place on Earth precisely we use the <b>geographic grid</b>, made up of two families of imaginary circles:</p>
<ul>
<li><b>parallels</b>: circles parallel to the <b>Equator</b> (0°). They measure <b>latitude</b>, the angular distance from the Equator, from 0° to <b>90° North</b> (North Pole) and from 0° to <b>90° South</b> (South Pole). The main parallels are: the Equator, the Tropic of Cancer (about 23°26′ N), the Tropic of Capricorn (about 23°26′ S), and the Arctic and Antarctic Circles (about 66°34′ N and S).</li>
<li><b>meridians</b>: half-circles joining the poles. They measure <b>longitude</b>, the angular distance from the <b>Greenwich meridian</b> (0°), from 0° to <b>180° East</b> and from 0° to <b>180° West</b>.</li>
</ul>
<p>The reference meridian (prime meridian) passes through the observatory at <b>Greenwich</b>, in London: it was chosen by the International Meridian Conference in Washington in <b>1884</b>. Coordinates are written in degrees (°), minutes (′) and seconds (″): <b>Rome</b> is at about <b>41°54′ N, 12°30′ E</b>; Milan at about 45°28′ N, 9°11′ E.</p>
<p>One degree of latitude always corresponds to about <b>111 km</b> on the surface. One degree of longitude, however, measures 111 km only at the Equator and gets <b>shorter</b> as you move towards the poles, where the meridians meet.</p>`
    },
    {
      type: "svg",
      title: "The geographic grid",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<circle cx="170" cy="150" r="115" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="3"/>
<ellipse cx="170" cy="150" rx="115" ry="30" fill="none" stroke="#dc2626" stroke-width="3"/>
<ellipse cx="170" cy="95" rx="100" ry="22" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
<ellipse cx="170" cy="205" rx="100" ry="22" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
<ellipse cx="170" cy="150" rx="35" ry="115" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
<ellipse cx="170" cy="150" rx="80" ry="115" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
<line x1="170" y1="25" x2="170" y2="275" stroke="#15803d" stroke-width="4"/>
<circle cx="214" cy="116" r="6" fill="#f59e0b" stroke="#111827" stroke-width="2"/>
<text x="170" y="20" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">North Pole 90°N</text>
<text x="170" y="294" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">South Pole 90°S</text>
<text x="330" y="60" font-size="16" fill="#dc2626" font-weight="bold">Equator = 0° (parallel)</text>
<text x="330" y="100" font-size="16" fill="#15803d" font-weight="bold">Greenwich meridian = 0°</text>
<text x="330" y="140" font-size="16" fill="#1e3a8a">Parallels: latitude</text>
<text x="330" y="170" font-size="16" fill="#1e3a8a">Meridians: longitude</text>
<text x="330" y="215" font-size="16" fill="#92400e" font-weight="bold">A point = latitude + longitude</text>
<text x="330" y="245" font-size="15" fill="#111827">e.g. 45°N, 10°E (Po Valley, Italy)</text>
</svg>`,
      caption: "Parallels (horizontal) give latitude, meridians (vertical) give longitude. Where the two cross identifies a unique point on Earth."
    },
    {
      type: "quiz",
      title: "Mini-quiz: scale and coordinates",
      questions: [
        { type: "num", q: "On a 1:25,000 map two points are 6 cm apart. How many kilometres is that in reality?", answer: 1.5, tol: 0.01, unit: "km", explain: "6 cm × 25,000 = 150,000 cm = 1,500 m = 1.5 km." },
        { type: "mc", q: "Which map has the smallest scale?", options: ["1:1,000", "1:50,000", "1:10,000,000"], answer: 2, explain: "The larger the denominator, the smaller the scale: 1:10,000,000 shows a very large area with little detail." },
        { type: "mc", q: "What does latitude measure?", options: ["The angular distance from the Equator", "The angular distance from Greenwich", "The height above sea level"], answer: 0, explain: "Latitude goes from 0° (Equator) to 90° N or S (the poles). Distance from Greenwich is longitude." }
      ]
    },
    {
      type: "text",
      title: "4. Every map distorts: projections",
      html: `<p>A sphere cannot be flattened without stretching or tearing it (try laying an orange peel flat). The mathematical method for transferring the grid from the sphere to a plane is called a <b>map projection</b>. No projection preserves all properties at once: you have to <b>choose what to sacrifice</b>.</p>
<ul>
<li><b>Conformal projections</b>: preserve <b>angles</b> and local shapes, but distort areas. The most famous is the <b>Mercator projection</b> (Gerardus Mercator, 1569), designed for <b>navigation</b>: a route with a constant bearing (fixed compass direction) becomes a straight line. On the other hand, it hugely enlarges areas near the poles: <b>Greenland</b> looks as big as Africa, while Africa is in fact about <b>14 times larger</b>.</li>
<li><b>Equal-area projections</b>: preserve <b>areas</b> but distort shapes (for example the <b>Gall-Peters</b> projection, made popular in the 1970s by Arno Peters, or the Mollweide projection). Useful for comparing sizes and for thematic maps.</li>
<li><b>Compromise projections</b>: preserve nothing exactly but limit distortion (for example the Robinson projection, long used by National Geographic).</li>
</ul>
<p>For Italy and the rest of Europe, official maps use conformal projections of the <b>transverse cylindrical</b> type (such as Gauss-Boaga and UTM), because over small areas the distortion becomes negligible.</p>`
    },
    {
      type: "svg",
      title: "Why Greenland looks huge",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="150" y="30" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Mercator (conformal)</text>
<text x="450" y="30" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Equal-area (true areas)</text>
<ellipse cx="150" cy="95" rx="55" ry="38" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<text x="150" y="100" font-size="15" text-anchor="middle" fill="#111827">Greenland</text>
<ellipse cx="150" cy="215" rx="55" ry="62" fill="#fbbf24" stroke="#92400e" stroke-width="2"/>
<text x="150" y="220" font-size="15" text-anchor="middle" fill="#111827">Africa</text>
<ellipse cx="450" cy="105" rx="20" ry="14" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<text x="450" y="140" font-size="15" text-anchor="middle" fill="#111827">Greenland</text>
<ellipse cx="450" cy="215" rx="55" ry="62" fill="#fbbf24" stroke="#92400e" stroke-width="2"/>
<text x="450" y="220" font-size="15" text-anchor="middle" fill="#111827">Africa</text>
<text x="300" y="290" font-size="14" text-anchor="middle" fill="#111827">Greenland: about 2.2 million km². Africa: about 30 million km².</text>
</svg>`,
      caption: "Simplified diagram: in the Mercator projection areas near the poles are enlarged. In reality Africa is about 14 times bigger than Greenland."
    },
    {
      type: "curiosity",
      title: "Did you know… the Earth is not a perfect sphere?",
      html: `<p>The Earth is a <b>geoid</b>: flattened at the poles and bulging at the Equator, because it spins on its axis. The equatorial radius is about <b>6,378 km</b>, the polar radius about <b>6,357 km</b>: a difference of about 21 km. For everyday measurements a sphere is good enough (circumference about <b>40,000 km</b>: it is no coincidence, since at the end of the 18th century the <b>metre</b> was defined as one ten-millionth of the distance from the North Pole to the Equator); for precise calculations a reference <b>ellipsoid</b> is used.</p>`
    },
    {
      type: "text",
      title: "5. Reading relief and symbols",
      html: `<p>How do you show the <b>third dimension</b>, height, on a flat sheet? The main methods are:</p>
<ul>
<li><b>Contour lines</b>: lines joining all points at the same altitude. They are separated by a fixed <b>contour interval</b> (for example 25 m). Where the lines are <b>close together</b> the slope is <b>steep</b>; where they are <b>far apart</b> it is gentle. Concentric rings show a hill or a summit; \"V\"-shaped contours point uphill along a valley.</li>
<li><b>Layer tints (hypsometric colours)</b>: bands of colour for different altitudes (green for plains, brown for mountains, white for peaks above a certain height; increasingly dark blue for ocean depths, with <b>bathymetric lines</b> or isobaths).</li>
<li><b>Hill shading and 3D models</b>: give the illusion of relief, and today are calculated from <b>digital terrain models</b>.</li>
</ul>
<p><b>Thematic maps</b> use other visual languages: <b>choropleth maps</b> (a different colour for each region according to the value of the data, for example density), <b>proportional symbol</b> maps (a bigger circle for a more populous city), <b>dot</b> maps and <b>isoline</b> maps (isotherms for temperature, isobars for pressure, isohyets for rainfall).</p>`
    },
    {
      type: "svg",
      title: "Contour lines: a hill seen from above and from the side",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<ellipse cx="150" cy="150" rx="120" ry="95" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<ellipse cx="150" cy="150" rx="85" ry="65" fill="#86efac" stroke="#166534" stroke-width="2"/>
<ellipse cx="135" cy="148" rx="50" ry="38" fill="#4ade80" stroke="#166534" stroke-width="2"/>
<ellipse cx="125" cy="146" rx="18" ry="14" fill="#16a34a" stroke="#166534" stroke-width="2"/>
<text x="125" y="151" font-size="14" text-anchor="middle" fill="#ffffff" font-weight="bold">300</text>
<text x="45" y="153" font-size="14" fill="#111827">100</text>
<text x="80" y="153" font-size="14" fill="#111827">200</text>
<text x="150" y="30" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">From above (map)</text>
<path d="M330 250 L400 230 L440 180 L470 120 L500 180 L540 230 L580 250 Z" fill="#86efac" stroke="#166534" stroke-width="3"/>
<line x1="320" y1="250" x2="590" y2="250" stroke="#111827" stroke-width="2"/>
<line x1="352" y1="236" x2="568" y2="236" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="5 4"/>
<line x1="423" y1="206" x2="518" y2="206" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="455" y="30" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">From the side (cross-section)</text>
<text x="470" y="108" font-size="14" text-anchor="middle" fill="#111827">summit</text>
<text x="450" y="280" font-size="14" text-anchor="middle" fill="#111827">contours every 100 m: steep on the right, gentle on the left</text>
</svg>`,
      caption: "Each line joins points at the same height. The closer together the lines, the steeper the slope."
    },
    {
      type: "text",
      title: "6. Finding your way and measuring time: compass, GPS and time zones",
      html: `<p>Finding your bearings means locating the cardinal points. For centuries people used the <b>Sun</b>, the <b>Pole Star</b> (in the northern hemisphere it shows north) and the <b>compass</b>, which uses the Earth's magnetic field. Careful: the needle points to <b>magnetic north</b>, which is not the same as geographic north (the difference is called <b>magnetic declination</b>).</p>
<p>Today the most common method is <b>GNSS</b> (Global Navigation Satellite System), of which the American <b>GPS</b> was the first. The principle: a receiver (like your phone) calculates how long the radio signal takes to travel from several satellites and works out its distance from each; with at least <b>four satellites</b> (three for position, one to correct the clock) it fixes latitude, longitude and altitude. The main systems are GPS (USA), <b>Galileo</b> (European Union), GLONASS (Russia) and BeiDou (China); each has dozens of satellites orbiting at about 20,000 km.</p>
<p><b>Time</b> also depends on position. The Earth turns 360° in 24 hours: every <b>15° of longitude</b> corresponds to <b>1 hour</b>. The globe is divided into <b>24 time zones</b>; in practice (for political reasons) there are more real time zones. Italy is in the Central European time zone (<b>UTC+1</b>, <b>UTC+2</b> in summer time). Crossing the <b>International Date Line</b> (near the 180° meridian) you gain or lose a day.</p>`
    },
    {
      type: "3d",
      title: "On the globe: the coordinates of some cities",
      scene: "globe",
      options: {
        points: [
          { lat: 41.9, lon: 12.5, label: "Rome (41.9° N, 12.5° E)", color: "#dc2626" },
          { lat: 51.48, lon: 0, label: "Greenwich (0°)", color: "#16a34a" },
          { lat: 0, lon: -78.5, label: "Quito (almost on the Equator)", color: "#f59e0b" },
          { lat: -33.9, lon: 151.2, label: "Sydney (33.9° S)", color: "#2563eb" },
          { lat: 40.7, lon: -74.0, label: "New York", color: "#7c3aed" },
          { lat: 35.7, lon: 139.7, label: "Tokyo", color: "#0ea5e9" }
        ],
        routes: [ { points: [0, 4], color: "#dc2626" }, { points: [0, 5], color: "#2563eb" } ]
      },
      caption: "Rotate the globe: notice that Greenwich is on the 0° meridian and Quito is almost on the Equator (the country takes its name from it: Ecuador = Equator in Spanish)."
    },
    {
      type: "text",
      title: "7. GIS, remote sensing and data: digital geography",
      html: `<p>A <b>GIS</b> (<i>Geographic Information System</i>) is a computer system that stores, links and analyses data according to location. The key idea is that of <b>stacked layers</b>: roads, rivers, buildings, land use, population… each in its own layer, which can be switched on and off and combined with the others. Data come in two types: <b>vector</b> (points, lines, polygons: a bus stop, a road, a municipality) and <b>raster</b> (grids of pixels: a satellite photo, an elevation model).</p>
<p>A historical example of a \"GIS before its time\": in <b>1854</b>, during a <b>cholera</b> epidemic in London, the doctor <b>John Snow</b> marked the homes of the dead on a map and found that they were clustered around a water pump in Broad Street. He had the pump handle removed and the cases fell: the <b>map</b> had revealed the cause (contaminated water) before the bacterium was even known.</p>
<p><b>Remote sensing</b> gathers information about the Earth's surface from a distance, using satellites and drones. Programmes such as <b>Copernicus</b> (EU, Sentinel satellites) and Landsat (USA) produce free images used to monitor fires, floods, glaciers, crops and urban growth. Infrared images, for example, reveal the health of vegetation.</p>`
    },
    {
      type: "example",
      title: "Worked example: where should we build a school?",
      html: `<p>A town council has to choose where to build a new school. With a GIS, four layers are stacked:</p>
<ol>
<li>where school-age children live (registry data: points);</li>
<li>the road network and public transport stops (lines and points);</li>
<li>flood-risk zones (polygons);</li>
<li>vacant publicly owned land (polygons).</li>
</ol>
<p>The system finds the vacant plots, <b>outside the flood-risk zones</b>, within 500 m of a stop, that <b>minimise the average distance</b> from the children's homes. In a few seconds it suggests 2 or 3 sites: the decision is still made by people, but it is based on data and not on impressions. It is the same method used to plan hospitals, bus routes and civil protection plans.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know… GPS needs relativity?",
      html: `<p>The atomic clocks on GPS satellites run <b>slightly faster</b> than those on the ground (gravity is weaker at altitude: general relativity) and slightly slower (because the satellites move fast: special relativity). The net result is a gain of about <b>38 microseconds per day</b>. Without correcting it, the position error would grow by about <b>10 km per day</b>! Every time you use your smartphone to find your way, you are (without knowing it) using Einstein's theory.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand maps and coordinates",
      intro: "If scale or coordinates don't make sense to you, try looking at them from a different angle.",
      tabs: [
        {
          label: "🏀 The orange peel",
          html: `<p>Take an orange peel and try to flatten it on the table: it tears or stretches. That is exactly the problem with projections! To get a continuous map you have to <b>stretch</b> some areas (as Mercator does with the poles) or <b>cut</b> the surface into \"segments\" (interrupted maps, like Goode's). That is why no flat map is \"right\": each one is a choice between shapes, areas, distances and directions.</p>`
        },
        {
          label: "🧭 The world's address",
          html: `<p>Think of coordinates as an <b>address</b> like \"street and number\" in a city laid out on a grid (like New York or Turin): <b>latitude</b> is like the \"row\" (how far north or south of the Equator you are) and <b>longitude</b> is like the \"column\" (how far east or west of Greenwich you are). Two numbers are enough to pinpoint a place: a phone can even tell you how many metres you are from the post office.</p>`,
          widget: "labelDiagram",
          options: {
            svg: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="260" fill="#eff6ff"/><line x1="40" y1="130" x2="470" y2="130" stroke="#dc2626" stroke-width="3"/><line x1="250" y1="20" x2="250" y2="240" stroke="#15803d" stroke-width="3"/><circle cx="360" cy="70" r="8" fill="#f59e0b" stroke="#111827" stroke-width="2"/><circle cx="130" cy="190" r="8" fill="#2563eb" stroke="#111827" stroke-width="2"/></svg>`,
            spots: [
              { x: 120, y: 130, label: "Equator (0° latitude)" },
              { x: 250, y: 40, label: "Greenwich meridian (0° longitude)" },
              { x: 360, y: 70, label: "Point to the North and East" },
              { x: 130, y: 190, label: "Point to the South and West" }
            ]
          }
        },
        {
          label: "👣 Pacing it out",
          html: `<p>A simple way to get a feel for scale: measure your <b>stride</b>. An adult stride is about 70–75 cm; <b>1,000 steps</b> are therefore about 700 m, and you can estimate the distance from home to school this way. Then mark it on a 1:10,000 town map: if you get 7 cm, the scale works. Or compare it with the \"human scale\": on a 1:25,000 map, 4 cm is 1 km, about 15 minutes on foot.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: the geographer's tools",
      nodes: [
        { id: "carta", label: "The map", x: 50, y: 8, color: "#2563eb", html: "A reduced, symbolic and approximate representation of the Earth's surface.", why: "The earliest known maps date back to Babylon (the Nippur tablet and the \"Babylonian world map\", around the 6th century BC). The Greeks, with Eratosthenes (c. 240 BC), measured the Earth's circumference within a few per cent of today's value, and Ptolemy (2nd century AD) established the idea of a grid of coordinates." },
        { id: "scala", label: "Scale", x: 15, y: 38, color: "#16a34a", html: "Ratio between distance on the map and real distance.", why: "It is a simple proportion: it lets you measure on the map and work out real sizes. Scale is the reason why a map is always a choice between detail and extent." },
        { id: "coordinate", label: "Coordinates", x: 50, y: 38, color: "#dc2626", html: "Latitude and longitude pinpoint every place.", why: "The Equator and the poles are defined by the Earth's rotation, so latitude is a natural reference. Longitude, on the other hand, has no natural reference: it is a convention, fixed at Greenwich in 1884. Measuring it at sea was a problem for centuries: it was solved by John Harrison's marine chronometer in the 18th century." },
        { id: "proiezioni", label: "Projections", x: 85, y: 38, color: "#a855f7", html: "How we go from the sphere to the plane.", why: "A theorem by Gauss (the Theorema Egregium, 1827) proves that a sphere cannot be laid flat without distorting distances or areas: distortion is not the mapmakers' fault, it is a mathematical property of the surface." },
        { id: "rilievo", label: "Relief and symbols", x: 25, y: 68, color: "#f59e0b", html: "Contour lines, layer tints, legend.", why: "Contour lines were introduced in the 18th and 19th centuries, when armies needed maps that let them predict movement across the ground. Even today Italy's IGM topographic maps derive from that military need." },
        { id: "gps", label: "GPS and satellites", x: 60, y: 68, color: "#0ea5e9", html: "Position calculated from the distance to several satellites.", why: "GPS was developed by the US Department of Defense (first satellites in the 1970s, full system in the 1990s) for military purposes. Since 2000 the civilian signal has been available with much greater accuracy." },
        { id: "gis", label: "GIS and data", x: 50, y: 93, color: "#ec4899", html: "Stacked layers of georeferenced information.", why: "The first true GIS was the Canada Geographic Information System, designed by Roger Tomlinson in the 1960s to inventory Canada's land resources; that is why he is called the \"father of GIS\"." }
      ],
      edges: [
        ["carta", "scala", "has a"],
        ["carta", "coordinate", "has a grid of"],
        ["carta", "proiezioni", "is made with a"],
        ["carta", "rilievo", "shows the"],
        ["coordinate", "gps", "are calculated by"],
        ["gps", "gis", "feeds the"],
        ["proiezioni", "gis", "are used in"]
      ]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li><b>Scale</b> = distance on the map ÷ real distance. R = D × N. Large scale = small area, lots of detail.</li>
<li><b>Latitude</b> (parallels, 0° to 90° N/S from the Equator); <b>longitude</b> (meridians, 0° to 180° E/W from Greenwich).</li>
<li>Every <b>projection</b> distorts: Mercator preserves angles, Gall-Peters preserves areas.</li>
<li><b>Contour lines</b> close together = steep slope.</li>
<li><b>GPS</b> uses at least 4 satellites; <b>GIS</b> stacks layers of georeferenced data.</li>
<li>15° of longitude = 1 hour of time difference.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: projections and GIS",
      questions: [
        { type: "mc", q: "Why does Greenland look as big as Africa on the Mercator projection?", options: ["Because areas near the poles are enlarged", "Because Greenland really is very large", "Because the scale is wrong"], answer: 0, explain: "Mercator preserves angles (useful for navigation) but greatly enlarges areas far from the Equator." },
        { type: "tf", q: "The north shown by a compass needle is exactly the same as geographic north.", answer: false, explain: "The needle points to magnetic north, which differs from geographic north by an angle called magnetic declination." },
        { type: "text", q: "What is the system that stacks layers of georeferenced data called (three-letter abbreviation)?", answer: ["gis"], explain: "GIS: Geographic Information System." }
      ]
    }
  ],
  glossary: [
    { t: "Scale", d: "Ratio between a distance measured on the map and the corresponding real distance (e.g. 1:50,000)." },
    { t: "Latitude", d: "Angular distance of a point from the Equator, from 0° to 90° North or South; measured with parallels." },
    { t: "Longitude", d: "Angular distance of a point from the Greenwich meridian, from 0° to 180° East or West; measured with meridians." },
    { t: "Map projection", d: "Mathematical method that transfers the grid from the Earth's sphere to a plane, always with some distortion." },
    { t: "Contour lines", d: "Lines joining points at the same altitude; they let you read relief on a map." },
    { t: "Thematic map", d: "Map showing a single phenomenon (climate, population, income…) on a simplified geographic base." },
    { t: "GPS / GNSS", d: "Satellite positioning system: the receiver calculates its position from its distance to at least four satellites." },
    { t: "GIS", d: "Geographic information system: stores, overlays and analyses data linked to location." },
    { t: "Remote sensing", d: "Gathering information about the Earth's surface from a distance, using satellites, aircraft or drones." },
    { t: "Time zone", d: "Each of the 24 bands of 15° of longitude into which the Earth is divided, sharing the same standard time." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "On a 1:100,000 map two cities are 8.5 cm apart. How many km apart are they in reality?", answer: 8.5, tol: 0.05, unit: "km", explain: "8.5 cm × 100,000 = 850,000 cm = 8,500 m = 8.5 km." },
      { type: "mc", q: "Which of these scales shows the most detail?", options: ["1:5,000", "1:500,000", "1:50,000,000"], answer: 0, explain: "1:5,000 is the largest scale (smallest denominator): it shows a small area in lots of detail." },
      { type: "mc", q: "In what year was the Greenwich meridian chosen as the international reference meridian?", options: ["1492", "1884", "1969", "1990"], answer: 1, explain: "The International Meridian Conference in Washington in 1884 chose Greenwich as the 0° meridian." },
      { type: "tf", q: "One degree of longitude always measures about 111 km, everywhere on Earth.", answer: false, explain: "This is only true at the Equator: meridians converge towards the poles, so the distance between two meridians decreases with latitude." },
      { type: "mc", q: "Which projection preserves angles and was designed for navigation?", options: ["Gall-Peters", "Mercator", "Mollweide"], answer: 1, explain: "Mercator (1569): routes with a constant bearing become straight lines, but areas near the poles are greatly enlarged." },
      { type: "mc", q: "On a topographic map the contour lines are very close together. What does this show?", options: ["A steep slope", "A plain", "A lake"], answer: 0, explain: "Close contours mean a big change in height over a short distance: a steep slope." },
      { type: "order", q: "Put in order from the largest scale (most detail) to the smallest (least detail).", items: ["1:1,000", "1:25,000", "1:500,000", "1:30,000,000"], explain: "The smaller the denominator, the larger the scale: plan, topographic map, regional map, world map." },
      { type: "num", q: "What is the minimum number of satellites a GPS receiver needs to calculate its position and correct its clock?", answer: 4, tol: 0, explain: "Three are needed for position in space, the fourth to correct the receiver's clock error." },
      { type: "text", q: "What is the line joining points at the same altitude on a map called?", answer: ["contour line", "contour lines", "contour", "isohypse"], explain: "A contour line (or isohypse)." },
      { type: "tf", q: "John Snow, by mapping cholera deaths in London in 1854, identified the Broad Street pump as the source of the outbreak.", answer: true, explain: "One of the first examples of spatial data analysis: the clustering of cases around the pump pointed to contaminated water." }
    ]
  }
});
