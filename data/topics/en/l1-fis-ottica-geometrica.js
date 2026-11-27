TOPIC('en', {
  id: "l1-fis-ottica-geometrica",
  title: "Geometrical optics",
  intro: "Why does a straw in a glass look broken? How does a microscope magnify a cell, and how do glasses correct short-sightedness? Why do optical fibres bring the internet into our homes? To answer, you don't need to know what light really is deep down: it is enough to describe its path with <b>straight lines</b>, the <b>light rays</b>, and two very simple laws, <b>reflection</b> and <b>refraction</b>. This is <b>geometrical optics</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Light and rays",
      html: `<p>A <b>light source</b> emits light (the Sun, a light bulb, a screen); an <b>illuminated body</b> sends it back towards our eyes (the Moon, a book). In a <b>uniform, transparent medium</b> (air, water, glass) light travels in a <b>straight line</b>: this is the basis of geometrical optics. Its path is represented by a <b>light ray</b>, simply a line with a direction; a set of rays forms a <b>beam</b> (parallel, diverging or converging).</p>
<p>Light also travels in a <b>vacuum</b>, at a speed of</p>
<p style="text-align:center"><b>c = 299 792 458 m/s ≈ 3.00 × 10<sup>8</sup> m/s</b></p>
<p>The Sun is about 150 million km away: its light takes about 8 minutes and 20 seconds to reach the Earth. A <b>light-year</b> is the distance light travels in one year (about 9.46 × 10<sup>12</sup> km).</p>
<p>Straight-line propagation produces <b>shadows</b>: behind an opaque obstacle lit by a point source there is a sharp dark region (the <b>umbra</b>); if the source is extended, a <b>penumbra</b> also appears, a region that is only partly lit. <b>Eclipses</b> are astronomical umbras and penumbras: in a solar eclipse the Moon casts its shadow on the Earth; in a lunar eclipse it is the Earth that darkens the Moon.</p>
<p>A body can be <b>transparent</b> (it lets light through), <b>translucent</b> (it scatters it) or <b>opaque</b> (it absorbs or reflects it). When a ray reaches a surface separating two media, in general part of it is <b>reflected</b>, part <b>refracted</b> and part <b>absorbed</b>.</p>`
    },
    {
      type: "example",
      title: "Example: measuring the height of a tree with its shadow",
      html: `<p>At 3 pm a post 1.5 m tall casts a shadow 2 m long; the tree's shadow is 14 m long. The rays of the (very distant) Sun are practically parallel, so the two triangles formed by object, shadow and ray are similar:</p>
<ol>
<li>tree height / tree shadow = post height / post shadow</li>
<li>h / 14 = 1.5 / 2</li>
<li>h = 14 × 0.75 = <b>10.5 m</b></li>
</ol>
<p>According to tradition, Thales (6th century BC) already used this method, based on straight-line propagation, to measure the height of the pyramids.</p>`
    },
    {
      type: "text",
      title: "Reflection and plane mirrors",
      html: `<p>When a ray strikes a smooth surface (a mirror, still water, polished metal) it is sent back: this is <b>reflection</b>. The angles are measured from the <b>normal</b>, the line perpendicular to the surface at the point of incidence.</p>
<p><b>Laws of reflection</b>:</p>
<ol>
<li>the incident ray, the reflected ray and the normal lie <b>in the same plane</b>;</li>
<li>the <b>angle of reflection equals the angle of incidence</b>: θ<sub>r</sub> = θ<sub>i</sub>.</li>
</ol>
<p>If the surface is smooth there is <b>specular reflection</b> (parallel rays stay parallel); if it is rough, the rays are sent back in all directions: <b>diffuse reflection</b>. It is thanks to diffuse reflection that we can see objects from any position, even though they are not mirrors.</p>
<p><b>Plane mirror.</b> The image of an object is:</p>
<ul>
<li><b>virtual</b> (behind the mirror: the rays don't really pass through there, but seem to come from there);</li>
<li><b>upright</b> and the <b>same size</b>;</li>
<li><b>symmetrical</b> with respect to the mirror: the image is as far behind the mirror as the object is in front of it. That is why left and right appear swapped (your right hand becomes the image's left hand).</li>
</ul>
<p>To see your whole body in a plane mirror, it only needs to be <b>half</b> your height, with its lower edge halfway between your eyes and the floor.</p>`
    },
    {
      type: "svg",
      title: "Reflection and refraction",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="150" fill="#f0f9ff"/>
<rect y="150" width="600" height="150" fill="#bae6fd"/>
<line x1="0" y1="150" x2="600" y2="150" stroke="#0369a1" stroke-width="3"/>
<line x1="300" y1="20" x2="300" y2="280" stroke="#64748b" stroke-width="2" stroke-dasharray="8 6"/>
<text x="308" y="35" font-size="16" fill="#475569">normal</text>
<line x1="130" y1="50" x2="300" y2="150" stroke="#f59e0b" stroke-width="4"/>
<polygon points="300,150 284,130 274,142" fill="#f59e0b"/>
<line x1="300" y1="150" x2="470" y2="50" stroke="#ef4444" stroke-width="4"/>
<polygon points="470,50 450,52 460,66" fill="#ef4444"/>
<line x1="300" y1="150" x2="390" y2="270" stroke="#16a34a" stroke-width="4"/>
<polygon points="390,270 380,252 368,262" fill="#16a34a"/>
<text x="95" y="45" font-size="17" fill="#b45309" font-weight="bold">incident ray</text>
<text x="445" y="38" font-size="17" fill="#b91c1c" font-weight="bold">reflected</text>
<text x="400" y="275" font-size="17" fill="#15803d" font-weight="bold">refracted</text>
<text x="215" y="120" font-size="17" fill="#1f2937" font-weight="bold">θi</text>
<text x="345" y="120" font-size="17" fill="#1f2937" font-weight="bold">θr = θi</text>
<text x="335" y="205" font-size="17" fill="#1f2937" font-weight="bold">θ2</text>
<text x="20" y="100" font-size="18" fill="#0c4a6e" font-weight="bold">air (n1 = 1)</text>
<text x="20" y="190" font-size="18" fill="#0c4a6e" font-weight="bold">water (n2 = 1.33)</text>
</svg>`,
      caption: "A ray passing from air into water splits: part is reflected with θr = θi, part enters the water bending towards the normal (θ2 < θi)."
    },
    {
      type: "text",
      title: "Refraction and Snell's law",
      html: `<p>When light passes from one medium to another, it <b>changes speed</b> and, if it arrives at an angle, it <b>changes direction</b>: this is <b>refraction</b>. Every transparent medium is described by its <b>refractive index</b>:</p>
<p style="text-align:center"><b>n = c / v</b></p>
<p>where v is the speed of light in that medium (so n ≥ 1 always). Typical values: air about 1.000; water 1.33; ordinary glass about 1.5; diamond 2.42.</p>
<p><b>Snell's law</b> (or the Snell–Descartes law), formulated by the Dutchman Willebrord Snell around 1621 and made known by Descartes:</p>
<p style="text-align:center"><b>n<sub>1</sub> · sin θ<sub>1</sub> = n<sub>2</sub> · sin θ<sub>2</sub></b></p>
<p>with the angles measured from the normal. Consequences:</p>
<ul>
<li>going into a medium with a <b>higher</b> n (\"optically denser\", e.g. air → water) the ray <b>bends towards the normal</b>;</li>
<li>going into a medium with a <b>lower</b> n (water → air) the ray <b>bends away from the normal</b>;</li>
<li>a ray perpendicular to the surface (θ<sub>1</sub> = 0) is not deviated.</li>
</ul>
<p>Refraction explains why a straw in a glass looks broken, why a swimming pool looks shallower than it is, and why the Sun looks squashed at sunset: the atmosphere has a refractive index that increases towards the ground and bends the rays.</p>`
    },
    {
      type: "example",
      title: "Example: from air into water",
      html: `<p>A ray strikes the surface of a swimming pool at an angle of incidence of 45°. At what angle does it continue in the water (n = 1.33)?</p>
<ol>
<li>1.00 · sin 45° = 1.33 · sin θ<sub>2</sub></li>
<li>sin θ<sub>2</sub> = 0.7071 / 1.33 ≈ 0.532</li>
<li>θ<sub>2</sub> ≈ <b>32°</b></li>
</ol>
<p>The ray has bent towards the normal (from 45° to 32°). That is why a fish seen from above seems closer to the surface than it really is, and a fisherman with a spear has to aim lower than where he sees it.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: reflection and refraction",
      questions: [
        { type: "num", q: "A ray strikes a mirror at an angle of 35° to the normal. What is the angle between the incident ray and the reflected ray?", answer: 70, unit: "°", explain: "θr = θi = 35°, so between the two rays there are 35° + 35° = 70°." },
        { type: "mc", q: "A ray passes from air into glass (n = 1.5) at an oblique angle. The refracted ray…", options: ["bends away from the normal", "bends towards the normal", "does not change direction"], answer: 1, explain: "Going into a medium with a higher index it bends towards the normal: sin θ2 = sin θ1 / 1.5 < sin θ1." },
        { type: "num", q: "In a material light travels at 2.0 × 10^8 m/s. What is the refractive index (c = 3.0 × 10^8 m/s)?", answer: 1.5, tol: 0.01, explain: "n = c/v = 3.0 × 10^8 / 2.0 × 10^8 = 1.5." }
      ]
    },
    {
      type: "text",
      title: "Total internal reflection and optical fibres",
      html: `<p>When light passes from a medium with a higher n to one with a lower n (for example from water to air), the ray bends away from the normal. Increasing the angle of incidence, you reach a <b>critical angle</b> θ<sub>L</sub> at which the refracted ray \"skims\" along the surface (θ<sub>2</sub> = 90°):</p>
<p style="text-align:center"><b>sin θ<sub>L</sub> = n<sub>2</sub> / n<sub>1</sub></b> (with n<sub>2</sub> &lt; n<sub>1</sub>)</p>
<p>Beyond this angle there is no refracted ray any more: all the light is reflected. This is <b>total internal reflection</b>. For water–air θ<sub>L</sub> = arcsin(1/1.33) ≈ 48.8°; for glass–air (n = 1.5) ≈ 41.8°. This is the reason for the \"silvery\" reflections you see when you look up at the surface from under water, and for the sparkle of a diamond (θ<sub>L</sub> ≈ 24.4°, very small: light bounces around inside the stone before coming out).</p>
<p><b>Optical fibres</b> are very thin strands of glass: light entering them at a small angle undergoes continuous total internal reflections on the walls and travels even hundreds of km, following the bends. They carry most internet traffic and are used in medicine (endoscopes).</p>`
    },
    {
      type: "text",
      title: "Spherical mirrors",
      html: `<p>A <b>spherical mirror</b> is a cap of a sphere of radius R. It has a <b>centre of curvature</b> C, a <b>vertex</b> V and an <b>optical axis</b> (the line CV). For rays close to the axis (paraxial approximation), rays parallel to the axis meet at one point, the <b>focus</b> F, at a distance</p>
<p style="text-align:center"><b>f = R / 2</b></p>
<ul>
<li><b>Concave</b> mirror (reflecting on the inside, like a spoon): it <b>converges</b> the rays, real focus; with f &gt; 0. It is used in headlights, satellite dishes, reflecting telescopes and make-up mirrors;</li>
<li><b>Convex</b> mirror (reflecting on the outside): it <b>diverges</b> the rays, virtual focus (f &lt; 0). It always gives a virtual, upright, diminished image with a wide field of view: it is the mirror used for wing mirrors and in car parks.</li>
</ul>
<p>If <b>p</b> is the distance of the object from the mirror and <b>q</b> that of the image, the <b>mirror equation</b> holds:</p>
<p style="text-align:center"><b>1/p + 1/q = 1/f</b></p>
<p>and the <b>magnification</b> is G = −q/p (G &lt; 0: inverted image; |G| &gt; 1: enlarged). For a concave mirror, if the object is beyond the centre C the image is real, inverted and diminished; between C and F it is real, inverted and enlarged; between F and V it is virtual, upright and enlarged (like a shaving mirror).</p>`
    },
    {
      type: "example",
      title: "Example: the image in a concave mirror",
      html: `<p>A concave mirror has a radius of curvature R = 40 cm. A candle is at p = 60 cm from the vertex. Where is the image formed?</p>
<ol>
<li>Focus: f = R/2 = 20 cm.</li>
<li>1/q = 1/f − 1/p = 1/20 − 1/60 = 3/60 − 1/60 = 2/60 = 1/30 → <b>q = 30 cm</b> (positive: real image, in front of the mirror).</li>
<li>Magnification: G = −q/p = −30/60 = <b>−0.5</b>: inverted image, half the size.</li>
</ol>
<p>If we move the candle to p = 10 cm (between F and V): 1/q = 1/20 − 1/10 = −1/20 → q = −20 cm (virtual, behind the mirror), G = −(−20)/10 = +2: upright and twice as big. This is what you see in a make-up mirror.</p>`
    },
    {
      type: "text",
      title: "Thin lenses",
      html: `<p>A <b>lens</b> is a piece of transparent material (glass or plastic) bounded by curved surfaces; rays are deviated twice by refraction, on entering and on leaving. For a <b>thin lens</b> the same relations as for mirrors hold:</p>
<p style="text-align:center"><b>1/p + 1/q = 1/f &nbsp;&nbsp;&nbsp; G = −q/p</b></p>
<ul>
<li><b>Converging lens</b> (thicker in the middle, f &gt; 0): rays parallel to the axis converge at the focus. If the object is beyond the focus it gives a real, inverted image (like a camera, a projector, our eye); if it is between the lens and the focus it gives a virtual, upright, enlarged image: this is the <b>magnifying glass</b>;</li>
<li><b>Diverging lens</b> (thinner in the middle, f &lt; 0): the rays spread out; the image is always virtual, upright and diminished.</li>
</ul>
<p>The <b>power</b> of a lens is measured in <b>dioptres</b> (D): P = 1/f with f in metres. A lens with f = 50 cm = 0.5 m has P = +2 D; one with f = −25 cm has P = −4 D. The higher the power, the more the lens bends the rays.</p>
<p><b>The eye and glasses.</b> In the eye the cornea and the crystalline lens form a real, inverted image on the retina (the brain turns it the right way up). In <b>short-sightedness</b> (myopia) the image of a distant object forms <b>in front of</b> the retina (the eye is too long): it is corrected with a <b>diverging</b> lens (negative dioptres). In <b>long-sightedness</b> (hypermetropia) it forms <b>behind</b> the retina: it is corrected with a <b>converging</b> lens (positive dioptres). Presbyopia, typical after the age of 45, is also corrected with converging lenses.</p>`
    },
    {
      type: "widget",
      title: "Mirror or lens, converging or diverging?",
      widget: "classify",
      options: { groups: ["Converges the rays", "Diverges the rays"], items: [
        ["🪞 concave mirror", 0],
        ["🔍 magnifying glass (converging)", 0],
        ["👓 lens for short-sightedness", 1],
        ["🚗 wing mirror (convex)", 1],
        ["👓 lens for long-sightedness", 0],
        ["🔭 main mirror of a reflecting telescope", 0],
        ["🪞 security mirror in shops (convex)", 1],
        ["📷 camera lens (converging system)", 0]
      ] },
      caption: "Remember: concave and converging make the rays converge (f > 0); convex and diverging make them diverge (f < 0)."
    },
    {
      type: "curiosity",
      title: "Alhazen and the first book of optics",
      html: `<p>Optics as an experimental science was born in the Islamic world. <b>Ibn al-Haytham</b> (Latinised as Alhazen, c. 965–1040), born in Basra and active in Cairo, wrote the <i>Book of Optics</i> between 1011 and 1021. Using experiments with the camera obscura, he showed that we see because light <b>enters</b> the eye from an object, and not because the eye \"emits\" rays, as many Greek philosophers believed. His method, based on hypotheses tested by repeatable experiments, is considered a forerunner of the modern scientific method. Translated into Latin, his book influenced Roger Bacon, Kepler and Leonardo.</p>`
    },
    {
      type: "curiosity",
      title: "Mirages and the \"early\" Sun",
      html: `<p>On roads in summer we sometimes see \"puddles of water\" that vanish as we get closer: it is a <b>mirage</b>. The scorching asphalt heats the air in contact with it, which has a lower refractive index than the air above: rays from the sky curve upwards before reaching our eyes, and we see a patch of sky \"on the ground\", which looks like water. Sunset is also a refraction effect: when the Sun appears just to touch the horizon, it is actually already about half a degree below it, and its image is slightly squashed because the atmosphere bends the rays.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand refraction",
      intro: "Why does light bend when it changes medium? Three different pictures that lead to the same law.",
      tabs: [
        {
          label: "🏖️ Fermat's lifeguard",
          html: `<p>A lifeguard has to reach a swimmer in the sea, starting from the beach. On the sand he runs fast, in the water he swims more slowly. The quickest route is <b>not the straight line</b>: it pays to run a bit further on the sand and swim less in the water. Pierre de Fermat (1601–1665) realised that light does the same: between two points it chooses the path that takes the <b>least time</b> (<b>Fermat's principle</b>). Both reflection and Snell's law can be derived from this principle, and it explains why light bends towards the normal when it slows down (entering a medium with a higher n).</p>`
        },
        {
          label: "🛒 The trolley on the lawn",
          html: `<p>A trolley with side-by-side wheels comes at an angle from smooth tarmac onto a grassy lawn. The wheel that touches the grass first slows down, while the other carries on fast: the trolley <b>turns</b> towards the slow wheel and changes direction. In the same way a light front entering a slower medium at an angle rotates. This analogy is very similar to the one used by Huygens and the supporters of the wave theory of light in the 17th century.</p>`
        },
        {
          label: "✏️ How to draw rays through lenses",
          html: `<p>To construct the image of an object in a converging lens, two \"special\" rays starting from the tip of the arrow are enough:</p>
<ol>
<li>the ray <b>parallel</b> to the axis: after the lens it passes through the <b>focus</b>;</li>
<li>the ray passing through the <b>centre</b> of the lens: it is not deviated.</li>
</ol>
<p>Where they meet (or their extensions meet) the tip of the image is formed.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<line x1="20" y1="150" x2="580" y2="150" stroke="#64748b" stroke-width="2"/>
<path d="M300 40 Q320 150 300 260 Q280 150 300 40 Z" fill="#bae6fd" stroke="#0369a1" stroke-width="3"/>
<circle cx="210" cy="150" r="5" fill="#111827"/><text x="203" y="178" font-size="16" fill="#111827" font-weight="bold">F</text>
<circle cx="390" cy="150" r="5" fill="#111827"/><text x="383" y="178" font-size="16" fill="#111827" font-weight="bold">F'</text>
<line x1="100" y1="150" x2="100" y2="100" stroke="#16a34a" stroke-width="5"/>
<polygon points="100,95 93,110 107,110" fill="#16a34a"/>
<text x="60" y="130" font-size="16" fill="#15803d" font-weight="bold">object</text>
<line x1="100" y1="100" x2="300" y2="100" stroke="#f59e0b" stroke-width="3"/>
<line x1="300" y1="100" x2="490" y2="205" stroke="#f59e0b" stroke-width="3"/>
<line x1="100" y1="100" x2="490" y2="198" stroke="#ef4444" stroke-width="3"/>
<line x1="490" y1="150" x2="490" y2="200" stroke="#dc2626" stroke-width="5"/>
<polygon points="490,205 483,190 497,190" fill="#dc2626"/>
<text x="500" y="232" font-size="16" fill="#b91c1c" font-weight="bold">real, inverted image</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of geometrical optics",
      nodes: [
        { id: "luce", label: "Light rays", x: 50, y: 6, color: "#64748b", html: "Model: light travels in a straight line in a uniform medium.", why: "It is an approximate model, valid when objects are much larger than the wavelength of light (about half a thousandth of a mm). When that is not the case, diffraction and interference come into play." },
        { id: "ombre", label: "Shadows and eclipses", x: 15, y: 25, color: "#94a3b8", html: "Regions behind an obstacle that light does not reach.", why: "They are the simplest proof of straight-line propagation: the ancient Greeks already used shadows and geometry to measure the size of the Earth (Eratosthenes) and astronomical distances." },
        { id: "riflessione", label: "Reflection", x: 50, y: 28, color: "#ef4444", html: "θr = θi, rays in the same plane.", why: "It follows from Fermat's principle: the shortest reflected path is the one with equal angles. Euclid and Hero already knew it." },
        { id: "rifrazione", label: "Refraction", x: 82, y: 28, color: "#16a34a", html: "n1 sin θ1 = n2 sin θ2.", why: "Light slows down in media with a higher n (n = c/v). Snell (1621) and Descartes formulated it; Fermat derived it from the principle of least time (1662)." },
        { id: "specchi", label: "Mirrors", x: 28, y: 55, color: "#f59e0b", html: "Plane and spherical: 1/p + 1/q = 1/f.", why: "In a spherical mirror the focus is at R/2 because, for rays close to the axis, the geometry of the circle makes the reflected rays converge halfway between the vertex and the centre." },
        { id: "riftot", label: "Total internal reflection", x: 82, y: 55, color: "#0ea5e9", html: "Beyond the critical angle sin θL = n2/n1 there is no refracted ray.", why: "It is Snell's law taken to the limit: if sin θ2 would have to exceed 1, there is no solution and all the light is reflected. It makes optical fibres possible." },
        { id: "lenti", label: "Lenses", x: 62, y: 78, color: "#9333ea", html: "Converging and diverging, power in dioptres.", why: "A lens is a sequence of two refractions at curved surfaces; its shape bends rays far from the centre more, so that they converge at a point." },
        { id: "occhio", label: "The eye and instruments", x: 30, y: 92, color: "#22c55e", html: "Glasses, microscope, telescope, camera.", why: "They all combine lenses or mirrors. The telescope was improved by Galileo in 1609; in 1604 Kepler understood how the eye works optically and how to correct its defects." }
      ],
      edges: [["luce", "ombre", "proof"], ["luce", "riflessione", "at surfaces"], ["luce", "rifrazione", "between media"], ["riflessione", "specchi", "application"], ["rifrazione", "riftot", "limiting case"], ["rifrazione", "lenti", "application"], ["lenti", "occhio", "instruments"], ["specchi", "occhio", "instruments"]]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li>Light travels in a straight line; in a vacuum c = 3.00 × 10<sup>8</sup> m/s.</li>
<li><b>Reflection</b>: θ<sub>r</sub> = θ<sub>i</sub>. A plane mirror gives a virtual, upright, symmetrical image.</li>
<li><b>Refraction</b>: n = c/v; n<sub>1</sub> sin θ<sub>1</sub> = n<sub>2</sub> sin θ<sub>2</sub>. Towards a higher n the ray bends towards the normal.</li>
<li><b>Total internal reflection</b> if n<sub>1</sub> &gt; n<sub>2</sub> and θ &gt; θ<sub>L</sub>, with sin θ<sub>L</sub> = n<sub>2</sub>/n<sub>1</sub>.</li>
<li>Mirrors and thin lenses: <b>1/p + 1/q = 1/f</b>, G = −q/p; spherical mirror f = R/2; power P = 1/f (dioptres).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: mirrors and lenses",
      questions: [
        { type: "num", q: "A converging lens has a focal length of 10 cm. An object is at 30 cm. At what distance (in cm) is the image formed?", answer: 15, unit: "cm", explain: "1/q = 1/10 − 1/30 = 2/30, so q = 15 cm." },
        { type: "num", q: "How many dioptres does a converging lens with a focal length of 25 cm have?", answer: 4, unit: "D", explain: "P = 1/f = 1/0.25 m = 4 D." },
        { type: "mc", q: "Which lens corrects short-sightedness?", options: ["Converging", "Diverging", "Flat"], answer: 1, explain: "In a short-sighted eye the image forms in front of the retina: a diverging lens is needed to move it back." },
        { type: "tf", q: "A convex mirror always gives a virtual, upright, diminished image.", answer: true, explain: "For any position of the object: that is why it is used for wing mirrors, with a wide field of view." }
      ]
    }
  ],
  glossary: [
    { t: "Light ray", d: "A line with a direction that represents the path of light." },
    { t: "Normal", d: "The line perpendicular to a surface at the point where a ray arrives." },
    { t: "Reflection", d: "The return of light into the same medium after striking a surface: θr = θi." },
    { t: "Refraction", d: "The change in direction of light when it passes from one medium to another." },
    { t: "Refractive index", d: "n = c/v: the ratio of the speed of light in a vacuum to its speed in the medium." },
    { t: "Critical angle", d: "The angle of incidence beyond which total internal reflection occurs: sin θL = n2/n1." },
    { t: "Focus", d: "The point where rays parallel to the axis converge after a mirror or a lens." },
    { t: "Focal length", d: "The distance between the focus and the mirror or lens: f = R/2 for spherical mirrors." },
    { t: "Real / virtual image", d: "Real: formed by rays that actually meet. Virtual: formed by the extensions of the rays." },
    { t: "Dioptre", d: "The unit of lens power: 1 D = 1 m⁻¹." },
    { t: "Optical fibre", d: "A strand of glass in which light travels by total internal reflection." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What is the basic assumption of geometrical optics?", options: ["Light travels in a straight line in a uniform medium", "Light is made only of waves", "Light stops at mirrors"], answer: 0, explain: "The model of straight rays describes very well how shadows, mirrors and lenses form images." },
      { type: "num", q: "A ray strikes a plane mirror at an angle of 28° to the normal. What is the angle of reflection?", answer: 28, unit: "°", explain: "By the law of reflection θr = θi = 28°." },
      { type: "num", q: "Light in a liquid travels at 2.25 × 10^8 m/s. Calculate the refractive index (c = 3.0 × 10^8 m/s). Round to two decimal places.", answer: 1.33, tol: 0.01, explain: "n = c/v = 3.0/2.25 = 1.33: it is water." },
      { type: "tf", q: "Passing from water into air, an oblique ray bends towards the normal.", answer: false, explain: "Going into a medium with a lower n (air) the ray bends away from the normal." },
      { type: "num", q: "A ray passes from air (n = 1) into glass (n = 1.5) at an angle of incidence of 30°. What is sin θ2 (round to two decimal places)?", answer: 0.33, tol: 0.01, explain: "sin θ2 = sin 30° / 1.5 = 0.5/1.5 ≈ 0.33, so θ2 ≈ 19.5°." },
      { type: "mc", q: "Why does an optical fibre carry light without losing it?", options: ["Because it is made of metal", "Because of total internal reflection on its inner walls", "Because light stops inside the glass"], answer: 1, explain: "Inside the fibre the light strikes the walls at angles greater than the critical angle: it is totally reflected and carries on." },
      { type: "num", q: "A concave mirror has a radius of curvature of 60 cm. What is its focal length (in cm)?", answer: 30, unit: "cm", explain: "f = R/2 = 30 cm." },
      { type: "num", q: "A lens has f = 20 cm and an object is placed at 60 cm. Calculate the image distance (in cm).", answer: 30, unit: "cm", explain: "1/q = 1/20 − 1/60 = 2/60, so q = 30 cm; G = −0.5." },
      { type: "tf", q: "A magnifying glass is a converging lens with the object between the lens and the focus.", answer: true, explain: "In this case the image is virtual, upright and enlarged." },
      { type: "order", q: "Put in order the steps for constructing the image in a converging lens graphically.", items: ["Draw the optical axis, the lens and the foci", "Draw the object and a ray parallel to the axis", "Make the ray pass through the focus after the lens", "Draw the ray through the centre of the lens", "Find the intersection: that is where the image forms"], explain: "Two special rays are enough: where they meet you find the tip of the image." },
      { type: "text", q: "What is the phenomenon called in which a ray, beyond a certain angle, no longer leaves the medium but is entirely sent back?", answer: ["total internal reflection", "total reflection", "internal reflection"], explain: "It is total internal reflection, which happens beyond the critical angle." }
    ]
  }
});
