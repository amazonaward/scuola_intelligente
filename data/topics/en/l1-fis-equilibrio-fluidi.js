TOPIC('en', {
  id: "l1-fis-equilibrio-fluidi",
  title: "Equilibrium of fluids",
  intro: "Why do your ears hurt when you dive deep? Why does a steel ship float while a pin sinks? How can a small push of your foot on the pedal stop a one-tonne car? The answers lie in <b>pressure</b> and in three laws named after great scientists: <b>Pascal</b>, <b>Stevin</b> and <b>Archimedes</b>. In this lesson we study fluids, that is liquids and gases, when they are <b>at rest</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "What is pressure?",
      html: `<p>Walking on fresh snow in boots makes you sink in; on skis it doesn't. The weight is the same, but the <b>area</b> over which it is spread changes. To describe this effect we use <b>pressure</b>:</p>
<p style="text-align:center"><b>p = F / S</b></p>
<p>where F is the force <b>perpendicular</b> to the surface and S the area on which it acts. In the International System the unit is the <b>pascal</b> (Pa): 1 Pa = 1 N/m². It is a tiny pressure (a sheet of paper lying on a table exerts about 1 Pa!), so these units are often used:</p>
<ul>
<li>the <b>hectopascal</b> (hPa) = 100 Pa, used in weather forecasts;</li>
<li>the <b>atmosphere</b> (atm): 1 atm = 101 325 Pa ≈ 1013 hPa, the average air pressure at sea level;</li>
<li>the <b>bar</b>: 1 bar = 100 000 Pa (tyre pressure is measured in bar);</li>
<li>the <b>millimetre of mercury</b> (mmHg): 1 atm = 760 mmHg.</li>
</ul>
<p>Example: a nail and a hammer. The same force of 100 N, applied to the head of the nail (about 1 cm² = 0.0001 m²) gives p = 100/0.0001 = 1 000 000 Pa, but on the tip (0.01 mm² = 10<sup>−8</sup> m²) it gives p = 10 000 000 000 Pa: that is why the tip goes into the wood.</p>`
    },
    {
      type: "example",
      title: "Example: stiletto heel versus boot",
      html: `<p>A person of 60 kg (P = 588 N) stands on a stiletto heel with an area of 1 cm² (0.0001 m²), or on two boots, each with a sole area of 200 cm² (0.02 m²).</p>
<ol>
<li>Stiletto heel (all the weight on one heel): p = 588 / 0.0001 = <b>5 880 000 Pa</b> (about 58 atm!).</li>
<li>Boots (two soles, total S = 0.04 m²): p = 588 / 0.04 = <b>14 700 Pa</b> (about 0.15 atm).</li>
</ol>
<p>The heel produces a pressure almost 400 times greater: that is why it can dent a wooden floor, while the boots can't. It is also why skis, snowshoes and tractor tracks spread the weight over large areas.</p>`
    },
    {
      type: "text",
      title: "Pascal's principle and the hydraulic press",
      html: `<p>Liquids are (practically) <b>incompressible</b> and transmit pressure in every direction. Blaise Pascal (1623–1662) stated it like this:</p>
<p style="text-align:center"><b>A pressure applied at one point of a fluid in equilibrium is transmitted unchanged to every other point of the fluid and to the walls of the container.</b></p>
<p>Application: the <b>hydraulic press</b>. Two pistons of different area, S<sub>1</sub> (small) and S<sub>2</sub> (large), are connected by a liquid. If we push the small one with F<sub>1</sub>, the pressure p = F<sub>1</sub>/S<sub>1</sub> is transmitted to the large one, which exerts F<sub>2</sub> = p·S<sub>2</sub>:</p>
<p style="text-align:center"><b>F<sub>1</sub> / S<sub>1</sub> = F<sub>2</sub> / S<sub>2</sub></b></p>
<p>If S<sub>2</sub> is 100 times S<sub>1</sub>, the force is multiplied by 100. But careful: the liquid is neither created nor destroyed, so the small piston must move <b>100 times further</b> than the large one. The work (force × displacement) is the same: as with the lever, no energy is gained; force is traded for displacement.</p>
<p>Pascal's principle is behind car hydraulic brakes, garage lifts, presses and the arms of excavators.</p>`
    },
    {
      type: "svg",
      title: "The hydraulic press",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<path d="M90 120 L90 230 L510 230 L510 100 L420 100 L420 190 L180 190 L180 120 Z" fill="#7dd3fc" stroke="#0369a1" stroke-width="3"/>
<rect x="95" y="100" width="80" height="18" fill="#64748b"/>
<rect x="125" y="60" width="20" height="40" fill="#64748b"/>
<line x1="135" y1="20" x2="135" y2="56" stroke="#16a34a" stroke-width="5"/>
<polygon points="135,58 126,42 144,42" fill="#16a34a"/>
<text x="150" y="35" font-size="18" fill="#15803d" font-weight="bold">F1 (small)</text>
<text x="135" y="260" font-size="17" text-anchor="middle" fill="#1f2937" font-weight="bold">S1</text>
<rect x="425" y="78" width="130" height="18" fill="#64748b"/>
<rect x="470" y="40" width="40" height="38" fill="#64748b"/>
<rect x="445" y="14" width="90" height="26" rx="4" fill="#ef4444"/>
<text x="490" y="33" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">load</text>
<line x1="590" y1="40" x2="590" y2="92" stroke="#16a34a" stroke-width="5"/>
<polygon points="590,38 582,54 598,54" fill="#16a34a"/>
<text x="480" y="260" font-size="17" text-anchor="middle" fill="#1f2937" font-weight="bold">S2 (large)</text>
<text x="300" y="215" font-size="18" text-anchor="middle" fill="#0c4a6e" font-weight="bold">same pressure everywhere</text>
<text x="300" y="130" font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">F1 / S1 = F2 / S2</text>
</svg>`,
      caption: "The pressure p = F/S is the same in both pistons. If S2 = 20·S1, then F2 = 20·F1, but the small piston moves down a distance 20 times greater."
    },
    {
      type: "quiz",
      title: "Mini-quiz: pressure and Pascal",
      questions: [
        { type: "num", q: "A force of 200 N acts perpendicularly on a surface of 0.5 m². What is the pressure (in Pa)?", answer: 400, unit: "Pa", explain: "p = F/S = 200 / 0.5 = 400 Pa." },
        { type: "num", q: "In a hydraulic press the small piston has an area of 4 cm² and the large one 100 cm². If 50 N is applied to the small one, what force (in N) is obtained on the large one?", answer: 1250, unit: "N", explain: "F2 = F1·S2/S1 = 50 × 100/4 = 1250 N." },
        { type: "tf", q: "A hydraulic press saves work as well as force.", answer: false, explain: "The work stays the same: the force is multiplied, but the displacement of the large piston is proportionally smaller." }
      ]
    },
    {
      type: "text",
      title: "Stevin's law",
      html: `<p>In a liquid at rest the pressure <b>increases with depth</b>: at each lower point the weight of the column of liquid above is added. Simon Stevin (1548–1620), a Flemish mathematician and engineer, formulated the law (often called the law of hydrostatic pressure):</p>
<p style="text-align:center"><b>p = p<sub>0</sub> + ρ · g · h</b></p>
<ul>
<li>p<sub>0</sub> is the pressure at the surface (usually atmospheric pressure);</li>
<li>ρ is the <b>density</b> of the liquid (water: about 1000 kg/m³);</li>
<li>g = 9.8 m/s²;</li>
<li>h is the <b>depth</b>.</li>
</ul>
<p>From the formula it follows that:</p>
<ul>
<li>the pressure depends <b>only on the depth</b> and on the density, not on the shape of the container or on the amount of water (the \"hydrostatic paradox\");</li>
<li>all points at the same depth have the same pressure: the free surface of a liquid is <b>horizontal</b>;</li>
<li>in <b>communicating vessels</b> a uniform liquid reaches the same level in all the branches; if the liquids are different, the heights are <b>inversely proportional</b> to the densities (ρ<sub>1</sub>h<sub>1</sub> = ρ<sub>2</sub>h<sub>2</sub>).</li>
</ul>
<p>Every <b>10 m</b> of depth in water the pressure increases by about <b>1 atm</b> (ρgh = 1000·9.8·10 ≈ 98 000 Pa). At 30 m a diver therefore experiences a total pressure of about 4 atm: 1 from the air plus 3 from the water.</p>`
    },
    {
      type: "example",
      title: "Example: the pressure in a swimming pool and at the bottom of the sea",
      html: `<p>Let's calculate the pressure <b>due to the water</b> at different depths (ρ = 1000 kg/m³, g = 9.8 m/s²):</p>
<ul>
<li>3 m (bottom of a deep swimming pool): ρgh = 1000 × 9.8 × 3 = 29 400 Pa, about 0.3 atm;</li>
<li>40 m (the limit for deep recreational diving): 392 000 Pa, about 3.9 atm from the water alone, about 4.9 atm in total;</li>
<li>about 10 900 m (the Mariana Trench, at its deepest point): about 1100 atm: every square centimetre bears a weight of over a tonne.</li>
</ul>
<p>That is why submarines have strong hulls and bathyscaphes are spheres of thick steel or titanium: a sphere spreads the pressure better. On our eardrum, at a depth of just 2 m, the pressure difference is already noticeable (about 0.2 atm) and we \"feel\" our ears.</p>`
    },
    {
      type: "svg",
      title: "Pressure increases with depth",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="40" width="260" height="230" fill="#7dd3fc" stroke="#0369a1" stroke-width="3"/>
<line x1="60" y1="40" x2="320" y2="40" stroke="#0369a1" stroke-width="4"/>
<text x="190" y="30" font-size="16" text-anchor="middle" fill="#0369a1" font-weight="bold">surface: p0</text>
<g stroke="#1e3a8a" stroke-width="3" fill="#1e3a8a">
<line x1="150" y1="90" x2="205" y2="90"/><polygon points="210,90 198,84 198,96"/>
<line x1="150" y1="170" x2="225" y2="170"/><polygon points="230,170 218,164 218,176"/>
<line x1="150" y1="250" x2="245" y2="250"/><polygon points="250,250 238,244 238,256"/>
</g>
<text x="75" y="95" font-size="16" fill="#1f2937">h = 5 m</text>
<text x="75" y="175" font-size="16" fill="#1f2937">h = 15 m</text>
<text x="75" y="255" font-size="16" fill="#1f2937">h = 25 m</text>
<text x="360" y="95" font-size="17" fill="#1f2937">p = 1 + 0.5 = 1.5 atm</text>
<text x="360" y="175" font-size="17" fill="#1f2937">p = 1 + 1.5 = 2.5 atm</text>
<text x="360" y="255" font-size="17" fill="#1f2937">p = 1 + 2.5 = 3.5 atm</text>
<text x="360" y="50" font-size="16" fill="#475569">longer arrow = greater pressure</text>
</svg>`,
      caption: "Every 10 m of water adds about 1 atm. The arrows show that pressure acts perpendicular to the walls and increases as you go down."
    },
    {
      type: "text",
      title: "Atmospheric pressure and Torricelli",
      html: `<p>Air has weight too: above every square metre of the Earth's surface there is a column of air tens of km high that weighs about 100 000 N. That is why atmospheric pressure at sea level is about <b>1 atm = 101 325 Pa</b>.</p>
<p>In <b>1643</b> Evangelista Torricelli, a pupil of Galileo, filled a glass tube about a metre long, closed at one end, with mercury and turned it upside down in a dish of mercury. The mercury fell until it settled about <b>760 mm</b> above the level in the dish, leaving an empty space at the top (the \"Torricellian vacuum\"). It was the pressure of the air that held up the column: the <b>barometer</b> was born. Mercury is 13.6 times denser than water: with water the column would be over 10 m high (about 10.3 m).</p>
<p>Around 1654 Otto von Guericke demonstrated the force of atmospheric pressure with the <b>Magdeburg hemispheres</b>: after pumping the air out of two copper hemispheres, two teams of horses could not pull them apart. Pressure drops with altitude: at about 5500 m it is about half that at sea level, which is why in the mountains water boils below 100 °C and crisp packets puff up on a plane.</p>`
    },
    {
      type: "text",
      title: "Archimedes' principle",
      html: `<p>Why does a stone weigh less in water, and why is a ball hard to hold under? Because every body immersed in a fluid receives an upward push, which Archimedes of Syracuse (3rd century BC) stated like this:</p>
<p style="text-align:center"><b>A body immersed in a fluid receives an upward thrust equal to the weight of the fluid displaced.</b></p>
<p style="text-align:center"><b>F<sub>A</sub> = ρ<sub>fluid</sub> · V<sub>immersed</sub> · g</b></p>
<p>Where does it come from? By Stevin's law, the pressure on the lower face of the body (which is deeper) is greater than on the upper face: the difference gives a net upward force, the <b>buoyant force</b> (or upthrust), which depends only on the volume of fluid displaced.</p>
<p>When a body of density ρ<sub>c</sub> is released in a fluid of density ρ<sub>f</sub>, compare the weight (ρ<sub>c</sub> V g) with the upthrust (ρ<sub>f</sub> V g):</p>
<ul>
<li>ρ<sub>c</sub> &gt; ρ<sub>f</sub>: the weight wins, the body <b>sinks</b>;</li>
<li>ρ<sub>c</sub> = ρ<sub>f</sub>: equilibrium at any point, the body stays <b>suspended</b> (like a submarine at neutral trim);</li>
<li>ρ<sub>c</sub> &lt; ρ<sub>f</sub>: the upthrust wins, the body rises and <b>floats</b>. In equilibrium, the immersed part satisfies ρ<sub>f</sub> V<sub>imm</sub> = ρ<sub>c</sub> V, that is V<sub>imm</sub>/V = ρ<sub>c</sub>/ρ<sub>f</sub>.</li>
</ul>
<p>A block of ice (ρ = 917 kg/m³) in fresh water (1000 kg/m³) has about <b>92%</b> of its volume submerged: the \"tip of the iceberg\" really is small. In sea water (about 1025 kg/m³) a little more sticks out (about 10%).</p>`
    },
    {
      type: "example",
      title: "Example: how much does a stone weigh in water?",
      html: `<p>A stone with a volume of 2 dm³ (0.002 m³) and a density of 2700 kg/m³ hangs from a dynamometer.</p>
<ol>
<li>Mass: m = 2700 × 0.002 = 5.4 kg; weight in air: P = 5.4 × 9.8 ≈ <b>52.9 N</b>.</li>
<li>Completely immersed in water: upthrust F<sub>A</sub> = 1000 × 0.002 × 9.8 = <b>19.6 N</b>.</li>
<li>The dynamometer shows the <b>apparent weight</b>: 52.9 − 19.6 ≈ <b>33.3 N</b>.</li>
</ol>
<p>The stone \"weighs\" about 37% less. That is why in a swimming pool you can lift a friend: their apparent weight in water is a small fraction of their real weight.</p>`
    },
    {
      type: "curiosity",
      title: "\"Eureka!\" and the king's crown",
      html: `<p>According to the Roman architect Vitruvius, Hiero II, the tyrant of Syracuse, had given a goldsmith some gold to make a crown and suspected that it had been mixed with silver. Archimedes had to uncover the trick without damaging it. As he got into a bath he noticed the water overflowing and realised he could measure the <b>volume</b> of the crown from the water it displaced; by comparing its density with that of gold he would expose the fraud. He ran naked through the streets shouting \"Eureka!\" (\"I have found it!\"). Historians are unsure about the details of the story (some think he used a hydrostatic balance), but the density-based method still works today for identifying materials.</p>`
    },
    {
      type: "curiosity",
      title: "Why does a steel ship float?",
      html: `<p>Steel has a density of about 7800 kg/m³, almost eight times that of water: a solid piece sinks. But a hull is <b>hollow</b>: it contains a lot of air. What counts is the <b>average density</b> of the whole object (hull + air + cargo). If this is less than that of water, the ship floats. When the ship is loaded, it sinks a little lower, displacing more water and increasing the upthrust, until the upthrust equals the total weight: that is why \"load lines\" (the Plimsoll mark) are painted on the sides. If a hole opens and water takes the place of the air, the average density becomes greater than that of water and the ship sinks.</p>`
    },
    {
      type: "widget",
      title: "Does it float or sink in fresh water?",
      widget: "classify",
      options: { groups: ["Floats", "Sinks"], items: [
        ["🧊 ice (917 kg/m³)", 0],
        ["🪵 pine wood (about 500 kg/m³)", 0],
        ["🫒 olive oil (about 920 kg/m³)", 0],
        ["🪨 stone (about 2700 kg/m³)", 1],
        ["🔩 solid iron (7870 kg/m³)", 1],
        ["🥇 gold (19 300 kg/m³)", 1],
        ["🎈 polystyrene (about 30 kg/m³)", 0],
        ["⚓ lead (11 340 kg/m³)", 1]
      ] },
      caption: "Compare the density of the body with that of water (1000 kg/m³)."
    },
    {
      type: "alternatives",
      title: "Other ways to understand upthrust and pressure",
      intro: "Archimedes and Stevin are not as intuitive as they seem. Here are some other routes.",
      tabs: [
        {
          label: "📦 The displaced fluid",
          html: `<p>Imagine taking the stone out of the water and replacing it with a \"blob of water\" of the same shape. That blob would stay still, in equilibrium with the surrounding water: so the push on the blob of water is exactly equal to its weight. Now put the stone back: the surrounding water doesn't \"know\" what is inside the shape, so it pushes in the same way. <b>The upthrust is the weight of the water the body has pushed out of the way</b>. This reasoning (typical of Archimedes) also explains why the shape doesn't matter, only the volume displaced.</p>`
        },
        {
          label: "🥤 The syringe press",
          html: `<p>Take two syringes of different diameter, connected by a small tube full of water. If you push the smaller one with a little force, the large one moves with more force, but <b>only a little</b>: to move the large plunger by 1 cm (double the diameter, 4 times the area) you have to push the small one by 4 cm. You get 4 times the force, but you have to cover 4 times the distance. You can do this experiment at home, and it is an easy way to \"feel\" Pascal's principle.</p>`
        },
        {
          label: "🏔️ The column of water",
          html: `<p>Think of a tower of bricks: the bottom brick bears the weight of all the ones above. The same happens in water: at depth h, above each cm² there is a column of water of height h. Its weight is: volume (S·h) × density × g. Dividing by S you get p = ρ g h. It doesn't matter whether above you there is a swimming pool or a huge lake: what counts is the <b>height</b> of the column.</p>`
        },
        {
          label: "📏 Measuring the level",
          html: `<p>The \"hydrostatic paradox\" says that the bottom of a vessel that is wide at the base and narrow at the top has the same pressure as a cylindrical one, if the height of the liquid is the same. In communicating vessels the liquid settles at the same height, because only then is the pressure at the bottom the same in every branch.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of the equilibrium of fluids",
      nodes: [
        { id: "fluidi", label: "Fluids in equilibrium", x: 50, y: 6, color: "#64748b", html: "Liquids and gases at rest: they have no shape of their own and adapt to their container.", why: "Their statics (hydrostatics) began in antiquity with Archimedes and was revived in the 17th century by Stevin, Torricelli and Pascal, when experimental science began to measure air pressure." },
        { id: "pressione", label: "Pressure p = F/S", x: 20, y: 28, color: "#2563eb", html: "Perpendicular force per unit area, in pascals.", why: "The unit is named after Blaise Pascal. The concept is needed because in fluids the force is not applied at a point but spread over the whole surface." },
        { id: "pascal", label: "Pascal's principle", x: 12, y: 54, color: "#16a34a", html: "Pressure is transmitted equally throughout the fluid.", why: "Pascal formulated it in 1647–1654, after Torricelli's experiments. It follows from the fact that a fluid in equilibrium cannot sustain tangential forces: the force on the walls is always perpendicular." },
        { id: "stevino", label: "Stevin's law", x: 40, y: 54, color: "#f59e0b", html: "p = p0 + ρgh: pressure increases with depth.", why: "Stevin (1586) derived it by reasoning about the equilibrium of a portion of liquid: on its lower face there must act the pressure that supports the weight of the whole column above." },
        { id: "torchio", label: "Hydraulic press", x: 8, y: 80, color: "#22c55e", html: "F1/S1 = F2/S2: multiplies force.", why: "A technical application of Pascal's principle (late 18th century, Bramah). It does not create energy: the force gained is paid for in displacement." },
        { id: "atmosfera", label: "Atmospheric pressure", x: 60, y: 28, color: "#0ea5e9", html: "The weight of the air: about 1 atm at sea level.", why: "Torricelli (1643) measured it with the mercury barometer: the column is 760 mm high because ρ_Hg g h equals the air pressure." },
        { id: "archimede", label: "Archimedes' upthrust", x: 75, y: 54, color: "#9333ea", html: "FA = ρ V g, upwards.", why: "It follows from Stevin's law: the pressure below the body is greater than above it. Archimedes stated it in his treatise On Floating Bodies (3rd century BC)." },
        { id: "galleggiamento", label: "Floating", x: 70, y: 82, color: "#ef4444", html: "Depends on comparing the density of the body with that of the fluid.", why: "If the weight exceeds the upthrust the body sinks; otherwise it rises until the upthrust on the immersed part equals the weight. A ship floats because of its average density." }
      ],
      edges: [["fluidi", "pressione", "measured by"], ["pressione", "pascal", "is transmitted"], ["pressione", "stevino", "increases with h"], ["pascal", "torchio", "application"], ["stevino", "atmosfera", "column of air"], ["stevino", "archimede", "from which follows"], ["archimede", "galleggiamento", "explains"]]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li><b>Pressure</b>: p = F/S (pascal, 1 Pa = 1 N/m²). 1 atm = 101 325 Pa = 760 mmHg.</li>
<li><b>Pascal</b>: pressure is transmitted equally throughout the fluid. Press: F1/S1 = F2/S2.</li>
<li><b>Stevin</b>: p = p0 + ρ g h. Every 10 m of water: +1 atm.</li>
<li><b>Archimedes</b>: F<sub>A</sub> = ρ<sub>fluid</sub> · V<sub>immersed</sub> · g = weight of the fluid displaced.</li>
<li>A body floats if its <b>average</b> density is less than that of the fluid.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: Stevin and Archimedes",
      questions: [
        { type: "num", q: "What pressure (in Pa) does water (ρ = 1000 kg/m³, g = 10 m/s²) exert at a depth of 5 m, excluding the atmosphere?", answer: 50000, tol: 0, unit: "Pa", explain: "p = ρ g h = 1000 × 10 × 5 = 50 000 Pa." },
        { type: "num", q: "A cube with 10 cm sides is completely immersed in water (ρ = 1000 kg/m³, g = 10 m/s²). What is the Archimedes upthrust (in N)?", answer: 10, unit: "N", explain: "V = 0.001 m³; F = 1000 × 0.001 × 10 = 10 N." },
        { type: "mc", q: "A body with a density of 800 kg/m³ placed in water…", options: ["sinks", "floats with 80% immersed", "floats with 20% immersed"], answer: 1, explain: "The immersed fraction is ρc/ρf = 800/1000 = 0.8, that is 80%." },
        { type: "tf", q: "The pressure in a liquid at rest depends on the shape of the container.", answer: false, explain: "It depends only on depth and density (Stevin's law)." }
      ]
    }
  ],
  glossary: [
    { t: "Pressure", d: "The ratio of the perpendicular force to the area on which it acts: p = F/S." },
    { t: "Pascal", d: "The SI unit of pressure: 1 Pa = 1 N/m²." },
    { t: "Atmosphere", d: "A unit of pressure: 1 atm = 101 325 Pa, the average air pressure at sea level." },
    { t: "Pascal's principle", d: "A pressure at one point of a fluid in equilibrium is transmitted unchanged throughout the fluid." },
    { t: "Hydraulic press", d: "A machine with two pistons of different area that multiplies force thanks to Pascal's principle." },
    { t: "Stevin's law", d: "p = p0 + ρgh: the pressure in a liquid increases linearly with depth." },
    { t: "Density", d: "The ratio of mass to volume: ρ = m/V." },
    { t: "Communicating vessels", d: "Connected containers in which a uniform liquid reaches the same level." },
    { t: "Archimedes' upthrust", d: "The upward force on an immersed body, equal to the weight of the fluid displaced." },
    { t: "Barometer", d: "An instrument that measures atmospheric pressure; the first was invented by Torricelli in 1643." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "A force of 600 N is spread evenly over 0.3 m². What is the pressure (in Pa)?", answer: 2000, unit: "Pa", explain: "p = F/S = 600/0.3 = 2000 Pa." },
      { type: "mc", q: "About how many pascals are 1 atm?", options: ["1000 Pa", "101 325 Pa", "760 Pa"], answer: 1, explain: "1 atm = 101 325 Pa, that is 760 mmHg." },
      { type: "num", q: "In a hydraulic press the small piston has an area of 5 cm², the large one 200 cm². With what force (in N) must you push the small one to lift a load that requires 4000 N on the large one?", answer: 100, unit: "N", explain: "F1 = F2·S1/S2 = 4000 × 5/200 = 100 N." },
      { type: "tf", q: "In a hydraulic press the large piston moves further than the small one.", answer: false, explain: "The volume of liquid displaced is the same: the large piston, having a larger area, moves less." },
      { type: "num", q: "What is the water pressure (ρ = 1000 kg/m³, g = 9.8 m/s²) at a depth of 20 m, excluding the atmosphere, in Pa?", answer: 196000, tol: 100, unit: "Pa", explain: "p = ρ g h = 1000 × 9.8 × 20 = 196 000 Pa, about 2 atm." },
      { type: "mc", q: "Who first measured atmospheric pressure with a tube of mercury?", options: ["Archimedes", "Torricelli", "Newton"], answer: 1, explain: "Evangelista Torricelli, in 1643: the mercury stopped at about 760 mm." },
      { type: "tf", q: "A body denser than water can never float, not even if it is hollow.", answer: false, explain: "What counts is the average density: a hollow steel ship has an average density lower than that of water." },
      { type: "num", q: "An object with a volume of 0.005 m³ is completely immersed in water (ρ = 1000 kg/m³, g = 10 m/s²). What is the upthrust (in N)?", answer: 50, unit: "N", explain: "FA = ρ V g = 1000 × 0.005 × 10 = 50 N." },
      { type: "order", q: "Put in order the steps for finding out whether a body floats.", items: ["Measure the mass and volume of the body", "Calculate the density of the body (m/V)", "Compare it with the density of the fluid", "Conclude: it floats if it is less, it sinks if it is greater"], explain: "Compare the densities: the body floats if its average density is less than that of the fluid." },
      { type: "mc", q: "Why does pressure increase as you go down in a lake?", options: ["Because the water is colder", "Because the weight of the column of water is above you", "Because gravity increases"], answer: 1, explain: "Each layer must support the weight of the water above it, as Stevin's law predicts." },
      { type: "text", q: "What is the cry attributed to Archimedes when he discovered how to measure the volume of the crown?", answer: ["eureka", "heureka"], explain: "\"Eureka!\", from the Greek for \"I have found it\"." }
    ]
  }
});
