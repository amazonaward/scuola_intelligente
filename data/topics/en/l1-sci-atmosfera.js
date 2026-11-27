TOPIC('en', {
  id: "l1-sci-atmosfera",
  title: "The atmosphere and weather",
  intro: "We live immersed in an ocean of air that protects us from radiation, regulates the planet's temperature and brings us rain. Every day we see its effects: a sudden thunderstorm, a crystal-clear sky after a cold north wind, fog in the Po Valley. In this lesson we find out how the <b>atmosphere</b> is made, why there is <b>wind</b>, how <b>clouds and rain</b> form and how to read a weather map.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "What the atmosphere is made of",
      html: `<p>The <b>atmosphere</b> is the layer of gases surrounding the Earth, held in place by gravity. Although it stretches for hundreds of kilometres, <b>99%</b> of its mass is in the first 30 km, and 50% below 5.5 km.</p>
<p>The <b>composition of dry air</b> (by volume):</p>
<table>
<tr><th>Gas</th><th>Percentage</th></tr>
<tr><td>Nitrogen (N₂)</td><td>78.08%</td></tr>
<tr><td>Oxygen (O₂)</td><td>20.95%</td></tr>
<tr><td>Argon (Ar)</td><td>0.93%</td></tr>
<tr><td>Carbon dioxide (CO₂)</td><td>about 0.042% (about 420 ppm)</td></tr>
<tr><td>Others (neon, helium, methane, ozone…)</td><td>traces</td></tr>
</table>
<p>Air also contains a variable amount of <b>water vapour</b> (from almost 0 to 4%) and of <b>particulate matter</b> (dust, sea salt, pollen, ash). Even though CO₂ is a tiny fraction, it is a greenhouse gas: since 1750 its concentration has risen from about 280 to over 420 ppm because of the burning of fossil fuels.</p>
<p>Today's atmosphere is very different from the primitive one: oxygen appeared mainly thanks to <b>cyanobacteria</b>, about 2.4 billion years ago (the <b>Great Oxidation Event</b>), an event that made complex life possible.</p>`
    },
    {
      type: "svg",
      title: "The layers of the atmosphere",
      svg: `<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="340" fill="#f8fafc"/>
<rect x="30" y="285" width="260" height="35" fill="#fde68a" stroke="#92400e"/>
<rect x="30" y="215" width="260" height="70" fill="#bfdbfe" stroke="#1d4ed8"/>
<rect x="30" y="150" width="260" height="65" fill="#c7d2fe" stroke="#4338ca"/>
<rect x="30" y="85" width="260" height="65" fill="#ddd6fe" stroke="#6d28d9"/>
<rect x="30" y="20" width="260" height="65" fill="#1e1b4b" stroke="#312e81"/>
<text x="160" y="308" font-size="15" text-anchor="middle" fill="#1f2937">EARTH</text>
<text x="160" y="255" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">TROPOSPHERE</text>
<text x="160" y="187" font-size="16" text-anchor="middle" fill="#312e81" font-weight="bold">STRATOSPHERE</text>
<text x="160" y="122" font-size="16" text-anchor="middle" fill="#4c1d95" font-weight="bold">MESOSPHERE</text>
<text x="160" y="58" font-size="16" text-anchor="middle" fill="#e0e7ff" font-weight="bold">THERMOSPHERE</text>
<g font-size="14" fill="#1f2937">
<text x="305" y="285">0 km</text>
<text x="305" y="219">~12 km (tropopause)</text>
<text x="305" y="154">~50 km</text>
<text x="305" y="89">~85 km</text>
<text x="305" y="24">over 600 km: exosphere</text>
</g>
<g font-size="14" fill="#334155">
<text x="470" y="250">weather, clouds, airliners</text>
<text x="470" y="182">ozone layer (15-35 km)</text>
<text x="470" y="118">meteors (shooting stars)</text>
<text x="470" y="55">auroras, ISS (about 400 km)</text>
</g>
<text x="470" y="270" font-size="14" fill="#1d4ed8">T: from +15 to -56 °C</text>
<text x="470" y="202" font-size="14" fill="#4338ca">T: from -56 to about 0 °C</text>
<text x="470" y="138" font-size="14" fill="#6d28d9">T: down to -90 °C</text>
<text x="470" y="74" font-size="14" fill="#312e81">T: above 1000 °C (but very little air)</text>
</svg>`,
      caption: "Temperature falls with height in the troposphere, rises in the stratosphere (ozone absorbs UV rays), falls again in the mesosphere and rises again in the thermosphere."
    },
    {
      type: "text",
      title: "The layers, one by one",
      html: `<ul>
<li><b>Troposphere</b> (about 0-12 km; 8 km at the poles, 16-18 km at the equator): it contains about 80% of the mass of the air and almost all the water vapour. This is where weather happens. The temperature <b>falls by about 6.5 °C every 1000 m</b> (the environmental lapse rate), down to about −56 °C at the <b>tropopause</b>.</li>
<li><b>Stratosphere</b> (12-50 km): the air is stable and dry; this is where the <b>ozone layer</b> (O₃) is found, which absorbs most of the harmful ultraviolet (UV) rays, warming the air.</li>
<li><b>Mesosphere</b> (50-85 km): the coldest part (down to −90 °C); meteoroids burn up through friction.</li>
<li><b>Thermosphere</b> (about 85-600 km): very thin, with theoretical temperatures of over 1000 °C due to the absorption of X-rays and UV, but an object does not heat up because there are too few molecules. It hosts the <b>polar auroras</b> and satellites in low orbit.</li>
<li><b>Exosphere</b>: the transition to space.</li>
</ul>
<p>In 1985 <b>Joseph Farman</b>'s team discovered the <b>ozone hole</b> over Antarctica, caused by chlorofluorocarbons (CFCs) used in fridges and spray cans. With the <b>Montreal Protocol</b> (1987) almost all countries banned CFCs: the ozone layer is recovering, and this is considered one of the greatest successes of international environmental cooperation.</p>`
    },
    {
      type: "curiosity",
      title: "The greenhouse effect: enemy or friend?",
      html: `<p>Without the greenhouse effect the Earth's average temperature would be about <b>−18 °C</b> instead of the current <b>+15 °C</b> or so. The natural greenhouse effect is <b>essential for life</b>: gases such as water vapour, CO₂ and methane let sunlight through, which warms the ground, but trap part of the infrared heat given off by the surface. The problem is the increase in the greenhouse effect caused by human emissions: the global average temperature has already risen by about <b>1.1-1.2 °C</b> compared with pre-industrial times. The phenomenon was suspected by <b>Fourier</b> (1824), demonstrated in the laboratory by <b>Tyndall</b> (1859) and first calculated by <b>Arrhenius</b> (1896), who predicted that doubling CO₂ would warm the Earth by a few degrees.</p>`
    },
    {
      type: "text",
      title: "Atmospheric pressure",
      html: `<p>Air has weight: a column of air from the surface to the top of the atmosphere, over 1 cm², weighs about 1 kg. <b>Atmospheric pressure</b> is the force the air exerts per unit area. At sea level it averages <b>1013 hPa</b> (hectopascals), that is <b>1 atmosphere</b>, or 760 mm of mercury.</p>
<p>It was <b>Evangelista Torricelli</b>, a pupil of Galileo, who demonstrated this in 1643: turning a glass tube full of mercury upside down into a dish, the mercury dropped to a column of 76 cm, held up by the weight of the air on the mercury in the dish: the <b>barometer</b> was born. In 1648 <b>Blaise Pascal</b> had his brother-in-law repeat the experiment on the Puy de Dôme and saw that as you go higher the column drops: there is less air above.</p>
<p>How pressure changes:</p>
<ul>
<li><b>with altitude</b>: it decreases, by about 1 hPa every 8 m in the first few kilometres; it halves about every 5.5 km (on Everest it is about a third of sea-level pressure, about 330 hPa);</li>
<li><b>with temperature</b>: warm air is lighter, so it rises and creates an area of <b>low pressure</b> (a <b>depression or cyclone</b>); cold air is heavier and sinks, creating <b>high pressure</b> (an <b>anticyclone</b>).</li>
</ul>
<p>On weather maps, <b>isobars</b> are lines joining points with the same pressure. A depression usually brings unsettled weather; an anticyclone clear skies.</p>`
    },
    {
      type: "example",
      title: "Temperature and pressure at altitude",
      html: `<p>In Milan (120 m) it is <b>20 °C</b>. Under the same conditions, what is the temperature at the top of Monte Rosa (Punta Gnifetti, 4554 m)?</p>
<ol>
<li>Height difference: 4554 − 120 = 4434 m ≈ 4.43 km.</li>
<li>Drop: 4.43 × 6.5 = 28.8 °C.</li>
<li>T ≈ 20 − 28.8 = <b>about −8.8 °C</b>.</li>
</ol>
<p>The pressure at the top will be about 580 hPa, that is about 57% of sea-level pressure: that is why mountaineers breathe "less oxygen" (the percentage of O₂ is still 21%, but each breath contains fewer molecules of it).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: air and pressure",
      questions: [
        { type: "mc", q: "Which is the most abundant gas in the air?", options: ["Oxygen", "Nitrogen", "Carbon dioxide"], answer: 1, explain: "Nitrogen makes up 78%." },
        { type: "mc", q: "In which layer does weather happen?", options: ["Troposphere", "Stratosphere", "Thermosphere"], answer: 0, explain: "It is the lowest layer, with most of the water vapour." },
        { type: "tf", q: "In an anticyclone the weather is usually clear.", answer: true, explain: "The air sinks, warms up and clouds dissolve." }
      ]
    },
    {
      type: "text",
      title: "Wind",
      html: `<p><b>Wind</b> is air moving horizontally, from areas of <b>high pressure</b> to areas of <b>low pressure</b>, just as water flows downhill. The closer together the isobars (the steeper the pressure <b>gradient</b>), the stronger it is.</p>
<ul>
<li>Because of the <b>Coriolis effect</b>, wind is deflected: <b>to the right</b> in the northern hemisphere, to the left in the southern. That is why around a cyclone the air turns <b>anticlockwise</b> in the north (and converges towards the centre), and clockwise around an anticyclone.</li>
<li>It is measured with an <b>anemometer</b> (speed, in m/s, knots or km/h) and a <b>windsock</b> or weathervane (direction). The direction always tells you where the wind is blowing from: the <i>maestrale</i> (mistral) comes from the north-west.</li>
<li>The <b>Beaufort scale</b> (1805) classifies it from 0 (calm) to 12 (hurricane, over 118 km/h).</li>
</ul>
<p><b>Local winds</b>: the <b>sea breeze</b> during the day (the land warms up more than the sea, warm air rises and cool air from the sea replaces it: the wind blows from sea to land) and the <b>land breeze</b> at night; <b>mountain and valley breezes</b>; the <b>foehn</b>, a warm, dry wind that blows down after crossing mountains.</p>
<p><b>Prevailing winds</b>: the <b>trade winds</b> blow towards the equator from the north-east (northern hemisphere) and the south-east (southern hemisphere); the westerlies at mid-latitudes; the <b>monsoons</b> change direction with the season, bringing rain to India and South-East Asia in summer. Around the Italian seas the traditional wind names are: <i>tramontana</i> (N), <i>grecale</i> (NE), <i>levante</i> (E), <i>scirocco</i> (SE), <i>ostro</i> (S), <i>libeccio</i> (SW), <i>ponente</i> (W), <i>maestrale</i> (NW).</p>`
    },
    {
      type: "svg",
      title: "How wind forms: the sea breeze",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#e0f2fe"/>
<rect x="0" y="210" width="320" height="90" fill="#38bdf8"/>
<rect x="320" y="210" width="320" height="90" fill="#d6a85f"/>
<circle cx="560" cy="45" r="28" fill="#facc15"/>
<text x="160" y="270" font-size="18" text-anchor="middle" fill="#fff" font-weight="bold">SEA (cooler)</text>
<text x="480" y="270" font-size="18" text-anchor="middle" fill="#fff" font-weight="bold">LAND (warmer)</text>
<g stroke="#dc2626" stroke-width="4" fill="none"><path d="M480 200 L480 110"/><path d="M455 200 L455 120"/><path d="M505 200 L505 120"/></g>
<polygon points="480,95 468,115 492,115" fill="#dc2626"/><polygon points="455,105 443,125 467,125" fill="#dc2626"/><polygon points="505,105 493,125 517,125" fill="#dc2626"/>
<text x="480" y="80" font-size="14" text-anchor="middle" fill="#7f1d1d" font-weight="bold">warm air rises: low pressure</text>
<path d="M240 200 L420 200" stroke="#1d4ed8" stroke-width="5" fill="none"/><polygon points="436,200 416,190 416,210" fill="#1d4ed8"/>
<text x="330" y="190" font-size="15" text-anchor="middle" fill="#1e3a8a" font-weight="bold">sea breeze</text>
<path d="M420 70 L240 70" stroke="#6b7280" stroke-width="3" fill="none" stroke-dasharray="6 5"/><polygon points="224,70 244,60 244,80" fill="#6b7280"/>
<text x="330" y="60" font-size="14" text-anchor="middle" fill="#374151">return flow aloft</text>
<text x="160" y="150" font-size="14" text-anchor="middle" fill="#1e3a8a" font-weight="bold">cool air: high pressure</text>
</svg>`,
      caption: "During the day the land warms up more than the sea: warm air rises and cool air from the sea rushes in to replace it."
    },
    {
      type: "text",
      title: "Humidity, clouds and precipitation",
      html: `<p><b>Absolute humidity</b> is the mass of water vapour per m³ of air (g/m³). But air cannot hold as much as it likes: there is a maximum, <b>saturation</b>, which increases with temperature (at 0 °C about 4.8 g/m³; at 20 °C about 17.3 g/m³; at 30 °C about 30 g/m³). <b>Relative humidity</b> is the percentage ratio between the vapour present and the maximum vapour at the same temperature: RH = (absolute humidity / maximum) × 100. It is measured with a <b>hygrometer</b>. At 100% the air is saturated. The <b>dew point</b> is the temperature at which air, as it cools, becomes saturated.</p>
<p>When saturated air cools further, the vapour <b>condenses</b> on tiny particles (condensation nuclei), forming droplets: <b>clouds</b> (high up) or <b>fog</b> (at ground level). Near the ground <b>dew</b> or <b>frost</b> (below 0 °C) forms.</p>
<p>Clouds are classified by shape and height (Luke Howard, 1803):</p>
<ul>
<li><b>cirrus</b>, wispy and thin (above 6 km, ice crystals);</li>
<li><b>cumulus</b>, cauliflower-shaped (vertical growth; when huge, <b>cumulonimbus</b>, which bring thunderstorms and hail);</li>
<li><b>stratus</b>, uniform grey layers (at low altitude: high fog, drizzle);</li>
<li><b>nimbus</b> (<i>nimbus</i> = rain cloud): nimbostratus, which give steady rain.</li>
</ul>
<p>Cloud droplets (about 0.02 mm) do not fall: they are too light. To become a raindrop (1-3 mm) they must merge (coalescence) or grow on ice. <b>Precipitation</b> can be rain, snow, hail (ice pellets that go up and down several times inside the cumulonimbus) and sleet. It is measured with a <b>rain gauge</b> in mm (1 mm = 1 L/m²).</p>`
    },
    {
      type: "example",
      title: "Relative humidity and dew point",
      html: `<p>On a summer evening at 20 °C the air contains <b>10 g/m³</b> of vapour. At 20 °C the maximum is <b>17.3 g/m³</b>.</p>
<ol>
<li>RH = 10 / 17.3 × 100 ≈ <b>58%</b>.</li>
<li>At night the temperature drops to about 11 °C, where the maximum is about 10 g/m³: the air becomes saturated (RH = 100%).</li>
<li>The <b>dew point</b> is about 11 °C: dew forms on the grass, and if the sky is clear and there is no wind, fog may appear.</li>
</ol>
<p>That is why car windows mist up in winter: the warm, humid air inside the car touches the cold glass, drops below the dew point and condenses.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand clouds and rain",
      intro: "From cloud to raindrop, by way of rising air.",
      tabs: [
        {
          label: "🥶 The cold bottle",
          html: `<p>Experiment: take a cold bottle or can out of the fridge on a hot day. After a few minutes it is covered in droplets. The water has not "passed through" the glass: the air next to the surface has cooled below the dew point, and its vapour has condensed. The same thing happens in the sky when air rises and cools.</p>`
        },
        {
          label: "⛰️ Why it rains more in the mountains",
          html: `<p>When a moist wind meets a mountain range it is forced to rise. As it rises it expands and cools (about 6-10 °C per 1000 m), the vapour condenses and forms clouds and rain (<b>orographic precipitation</b>). On the other side the air sinks, warms up and dries out: this is the <b>foehn</b>, or "rain shadow". That is why the Alps get much more precipitation than the valley floors, and why in winter the Po Valley receives dry, cold wind when the <i>tramontana</i> crosses the mountains.</p>`
        },
        {
          label: "🌩️ Why thunderstorms happen",
          html: `<p>In summer the ground heats up, warm moist air rises in a column (<b>convection</b>), condenses and releases heat (<b>latent heat</b>), which makes it rise even further. A cumulonimbus 10-12 km tall develops. In the clouds, ice crystals colliding with each other become electrically charged: the top positive, the base negative. When the potential difference is high enough, <b>lightning</b> strikes, heating the air to about 30,000 °C and making it expand violently: that is <b>thunder</b>. Light travels at 300,000 km/s, sound at about 340 m/s: count the seconds between the flash and the thunder and divide by 3 to get the distance of the lightning in km.</p>`
        }
      ]
    },
    {
      type: "text",
      title: "Weather systems, fronts and forecasts",
      html: `<p>An <b>air mass</b> is a large volume of air with uniform temperature and humidity. When different air masses meet, the boundary between them is called a <b>front</b>:</p>
<ul>
<li><b>warm front</b>: warm air rises slowly over cold air: layered clouds, light but long-lasting rain, then rising temperatures;</li>
<li><b>cold front</b>: cold air wedges under warm air and pushes it upwards: cumulonimbus, showers and violent but short thunderstorms, then falling temperatures and clearing skies.</li>
</ul>
<p>The <b>weather systems</b> at our latitudes are born from the clash between polar and subtropical air; they arrive from the west (from the Atlantic). Italy is also affected by the <b>Azores High</b> (stable summers) and the <b>Russian-Siberian High</b> (winter cold).</p>
<p><b>Weather</b> is the state of the atmosphere in a place at a given moment (temperature, pressure, wind, humidity, clouds, precipitation): it changes from hour to hour. <b>Climate</b>, on the other hand, is the set of average conditions over at least 30 years. As the saying goes: "climate is what you expect, weather is what you get".</p>
<p><b>Forecasts</b> are based on data from ground stations, weather balloons, radar and satellites, and on <b>numerical models</b> that solve the fluid-dynamics and thermodynamic equations of the atmosphere by computer: the idea came from <b>Lewis Fry Richardson</b> (1922), and the first automatic computer forecast was made in 1950. After about a week forecasts lose accuracy because the atmosphere is a <b>chaotic</b> system: in the 1960s <b>Edward Lorenz</b> discovered that small initial differences grow quickly (the famous "butterfly effect").</p>`
    },
    {
      type: "curiosity",
      title: "Hurricanes and great storms",
      html: `<p>A <b>tropical cyclone</b> (hurricane in the Atlantic, typhoon in the western Pacific) forms over oceans with surface water above about 26.5 °C: condensing vapour releases enormous amounts of heat, which feed the storm, with winds above 118 km/h and a calm central "eye". In 1900 the hurricane that hit Galveston (Texas) killed about 8000 people. Over the Mediterranean, <b>medicanes</b> (Mediterranean hurricanes) sometimes form: cyclones with a similar structure but smaller and weaker.</p>`
    },
    {
      type: "conceptMap",
      title: "Map of the atmosphere: tap the nodes and find out why",
      nodes: [
        { id: "atm", label: "Atmosphere", x: 50, y: 6, color: "#3b82f6", html: "A layer of gases: 78% nitrogen, 21% oxygen.", why: "Air was considered a simple element until the 18th century: <b>Priestley</b> (1774) and <b>Scheele</b> isolated oxygen, and <b>Lavoisier</b> understood that air is a mixture of two main gases." },
        { id: "strati", label: "Layers", x: 20, y: 28, color: "#6366f1", html: "Troposphere, stratosphere, mesosphere, thermosphere.", why: "In 1902 <b>Léon Teisserenc de Bort</b>, using unmanned weather balloons, discovered that above about 11 km the temperature stops falling: it was the discovery of the stratosphere." },
        { id: "pres", label: "Pressure", x: 80, y: 28, color: "#f59e0b", html: "The weight of the air: 1013 hPa at sea level.", why: "<b>Torricelli</b> (1643) measured pressure and demonstrated the existence of a vacuum; <b>Pascal</b> (1648) confirmed that it decreases with altitude." },
        { id: "vento", label: "Wind", x: 50, y: 48, color: "#22c55e", html: "Air moving from high to low pressure.", why: "Wind is the atmosphere's attempt to even out differences in pressure; the Coriolis effect (1835) deflects it to the right in the northern hemisphere and explains the direction in which cyclones turn." },
        { id: "temp", label: "Temperature", x: 15, y: 56, color: "#ef4444", html: "It depends on the Sun, altitude and the greenhouse effect.", why: "The natural greenhouse effect keeps the Earth at +15 °C; <b>Arrhenius</b> (1896) calculated that doubling CO₂ would raise the temperature by a few degrees, anticipating the climate question by a century." },
        { id: "umid", label: "Humidity and clouds", x: 80, y: 64, color: "#0ea5e9", html: "Vapour condenses when it cools.", why: "Warmer air holds more vapour: when it rises and cools, the excess vapour condenses and forms clouds. In 1803 Luke Howard classified them with the Latin names still used today." },
        { id: "prec", label: "Precipitation", x: 50, y: 82, color: "#14b8a6", html: "Rain, snow, hail.", why: "It forms when droplets become heavy enough to fall; it can be convective (thunderstorms), orographic (over mountains) or frontal." },
        { id: "fronti", label: "Fronts and weather systems", x: 18, y: 84, color: "#a855f7", html: "Where different air masses meet.", why: "The theory of fronts was developed by the Norwegian school of <b>Vilhelm Bjerknes</b> in 1918-1922, by analogy with the battle fronts of the First World War." },
        { id: "clima", label: "Climate", x: 85, y: 90, color: "#64748b", html: "Average conditions over at least 30 years.", why: "Weather is chaotic and unpredictable beyond about 10 days (Lorenz), while climate is the long-term statistics, predictable on average: that is why it can be studied over decades." }
      ],
      edges: [
        ["atm", "strati", "is divided into"],
        ["atm", "pres", "exerts"],
        ["pres", "vento", "generates"],
        ["temp", "pres", "changes"],
        ["temp", "umid", "controls"],
        ["umid", "prec", "produces"],
        ["fronti", "prec", "cause"],
        ["vento", "fronti", "brings"],
        ["prec", "clima", "shape"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: wind and clouds",
      questions: [
        { type: "mc", q: "Wind blows…", options: ["from high to low pressure", "from low to high pressure", "always from the sea towards the land"], answer: 0, explain: "Just as water flows from a higher level to a lower one." },
        { type: "num", q: "Absolute humidity of 8.65 g/m³ at 20 °C (maximum 17.3 g/m³): what is the relative humidity?", answer: 50, unit: "%", explain: "8.65 / 17.3 = 0.5 → 50%." },
        { type: "tf", q: "Cumulonimbus clouds can bring thunderstorms and hail.", answer: true, explain: "They are clouds with great vertical growth." }
      ]
    }
  ],
  glossary: [
    { t: "Atmosphere", d: "The layer of gases surrounding the Earth." },
    { t: "Troposphere", d: "The lowest layer, where weather happens." },
    { t: "Ozone", d: "A gas (O₃) in the stratosphere that absorbs UV rays." },
    { t: "Atmospheric pressure", d: "The force of the air per unit area: 1013 hPa at sea level." },
    { t: "Isobar", d: "A line joining points with the same pressure." },
    { t: "Anticyclone / cyclone", d: "An area of high pressure (clear weather) / of low pressure (unsettled weather)." },
    { t: "Relative humidity", d: "The percentage ratio between the vapour present and the maximum vapour at that temperature." },
    { t: "Dew point", d: "The temperature at which air becomes saturated and vapour condenses." },
    { t: "Front", d: "The boundary between two different air masses." },
    { t: "Weather", d: "The state of the atmosphere in a place at a given moment." },
    { t: "Climate", d: "The average atmospheric conditions of a place over at least 30 years." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What is the percentage of oxygen in the air?", options: ["About 21%", "About 78%", "About 50%"], answer: 0, explain: "Oxygen is 20.95%; nitrogen 78%." },
      { type: "mc", q: "Where is the ozone layer?", options: ["Troposphere", "Stratosphere", "Thermosphere"], answer: 1, explain: "Between about 15 and 35 km." },
      { type: "num", q: "By how many °C does the temperature drop when you climb 2000 m in the troposphere (6.5 °C/km)?", answer: 13, unit: "°C", explain: "2 × 6.5 = 13 °C." },
      { type: "mc", q: "Who first measured atmospheric pressure with mercury?", options: ["Torricelli", "Galileo", "Newton"], answer: 0, explain: "Evangelista Torricelli in 1643." },
      { type: "tf", q: "In a cyclone (low pressure) the weather is usually unsettled.", answer: true, explain: "The air rises, condenses and forms clouds and precipitation." },
      { type: "mc", q: "Why is wind direction given by where it comes from?", options: ["It is a convention: a north wind comes from the north", "Because the wind goes north", "Because it is simpler"], answer: 0, explain: "The <i>tramontana</i>, for example, blows from north to south." },
      { type: "num", q: "Air at 25 °C contains 11.5 g/m³ of vapour; the maximum at 25 °C is 23 g/m³. What is the relative humidity?", answer: 50, unit: "%", explain: "11.5 / 23 = 50%." },
      { type: "order", q: "Put the layers of the atmosphere in order from bottom to top.", items: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"], explain: "From the ground towards space." },
      { type: "text", q: "What is the instrument that measures pressure called?", answer: ["barometer", "a barometer", "the barometer"], explain: "Invented by Torricelli in 1643." },
      { type: "mc", q: "Climate is…", options: ["the state of the atmosphere right now", "the average of atmospheric conditions over at least 30 years", "the day's maximum temperature"], answer: 1, explain: "Weather changes every hour; climate describes the typical behaviour of a place." }
    ]
  }
});
