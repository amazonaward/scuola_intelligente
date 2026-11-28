TOPIC('en', {
  id: "l2-fis-moto-rettilineo",
  title: "Uniform linear motion",
  intro: "Describing how a body moves is the first task of physics, and it is called <b>kinematics</b>. Before asking <i>why</i> something moves (dynamics), we learn to describe <i>how</i>: where it is, how fast it is going, where it will be a moment from now. The simplest case is <b>uniform linear motion</b>: a straight path and a velocity that never changes. With a few ideas (position, velocity, equation of motion and graphs) you will be able to predict where two trains will meet or how long it will take you to reach your destination.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Frame of reference, position and displacement",
      html: `<p>Saying "the train is stationary" or "it is moving" is not enough: <b>relative to what</b>? For a seated passenger, the person next to them is not moving; for someone standing at the station, that same person is travelling at 150 km/h. Motion is always <b>relative to a frame of reference</b>: a reference body plus coordinate axes with an origin.</p>
<p>In linear motion we use a single axis (an oriented straight line) with an origin O and a positive direction. The <b>position</b> of a point is its coordinate <b>s</b> (or x) on this axis, with a sign: positive on one side of the origin, negative on the other. It is measured in <b>metres (m)</b>.</p>
<ul>
<li>The <b>path</b> (trajectory) is the line traced out by the moving point. If it is a straight line, the motion is <b>linear</b> (rectilinear).</li>
<li><b>Displacement</b> is the change in position: <b>Δs = s₂ − s₁</b>. It can be positive, negative or zero. It is not the same as the <b>distance travelled</b> (always positive): if you go to school and come back home, the distance travelled is twice the distance between them, but the displacement is <b>zero</b>.</li>
<li>The <b>time interval</b> is Δt = t₂ − t₁, measured in <b>seconds (s)</b>.</li>
</ul>
<p>A moving body is modelled as a <b>point particle</b> when its size is negligible compared with the distances it covers (a car driving from Rome to Milan).</p>`
    },
    {
      type: "text",
      title: "Average and instantaneous velocity",
      html: `<p><b>Average velocity</b> is the ratio between the displacement and the time interval taken:</p>
<p style="text-align:center"><b>v<sub>m</sub> = Δs / Δt = (s₂ − s₁) / (t₂ − t₁)</b></p>
<p>The SI unit is the <b>metre per second (m/s)</b>. In everyday life we use <b>km/h</b>. The conversion is useful and worth remembering:</p>
<p style="text-align:center"><b>1 m/s = 3.6 km/h</b> &nbsp;&nbsp; (to go from km/h to m/s you <b>divide by 3.6</b>; from m/s to km/h you multiply)</p>
<p>Why 3.6? 1 km = 1000 m and 1 h = 3600 s, so 1 km/h = 1000/3600 m/s = 1/3.6 m/s. For example, 90 km/h = 25 m/s; 10 m/s = 36 km/h.</p>
<p>A car's speedometer shows the <b>instantaneous velocity</b>: the velocity at a given instant, i.e. the average velocity calculated over a time interval so short that it is almost a single point. In uniform linear motion the instantaneous velocity is always equal to the average velocity.</p>
<p>In linear motion velocity has a <b>sign</b>: positive if the body moves in the direction of the axis, negative if it moves the opposite way. The sign tells you the direction of motion, not "how fast"; the <b>magnitude</b> (absolute value) is also called speed.</p>`
    },
    {
      type: "remember",
      title: "What uniform linear motion is",
      html: `<p>A motion is <b>uniform linear motion</b> if the path is a <b>straight line</b> and the <b>velocity is constant</b>: in equal time intervals the body covers <b>equal distances</b>. This is the same as saying that the ratio Δs / Δt is always the same.</p>
<p>The <b>equation of motion</b> (position-time law) is the formula that gives the position at every instant:</p>
<p style="text-align:center"><b>s(t) = s₀ + v · t</b></p>
<p>where s₀ is the position at time t = 0 (initial position), v the (constant) velocity and t the elapsed time. If the body starts from the origin, s₀ = 0 and s = v · t. From the same formula you get <b>t = (s − s₀) / v</b> and <b>v = (s − s₀) / t</b>.</p>`
    },
    {
      type: "example",
      title: "Examples: calculations with the equation of motion",
      html: `<p><b>1. The average speed camera</b>. Two gantries are 10 km apart on the same stretch of motorway. A car passes them 5 minutes apart. Average velocity: 10 km / (5/60 h) = 10 / 0.0833 = <b>120 km/h</b>. If the limit were 110 km/h, the car would be fined even if it never exceeded that limit in front of a single camera: the average velocity cannot be hidden.</p>
<p><b>2. By bike</b>. A bike travels at 18 km/h = 5 m/s. It starts at position s₀ = 200 m. After 40 s it is at s = 200 + 5 · 40 = <b>400 m</b>. To reach 1000 m it needs t = (1000 − 200) / 5 = 160 s.</p>
<p><b>3. Sound and light</b>. Sound travels in air at about 343 m/s (at 20 °C); light in a vacuum at <b>299 792 458 m/s</b>, about 300 000 km/s. After a flash of lightning, if you hear the thunder 6 s later, the lightning struck 343 · 6 ≈ 2 060 m away, i.e. about 2 km (the light reaches you practically instantly).</p>
<p><b>4. The average is not the average of the velocities</b>. You go from A to B (120 km) at 60 km/h and come back at 40 km/h. It is not 50 km/h! Outward time 120/60 = 2 h, return time 120/40 = 3 h; the total distance is 240 km in 5 h: the average speed is 240 / 5 = <b>48 km/h</b> (lower, because you spent more time at the lower speed).</p>`
    },
    {
      type: "svg",
      title: "The position-time graph: a straight line",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="250" x2="570" y2="250" stroke="#1f2937" stroke-width="3"/>
<line x1="60" y1="250" x2="60" y2="24" stroke="#1f2937" stroke-width="3"/>
<polygon points="570,250 558,244 558,256" fill="#1f2937"/><polygon points="60,24 54,36 66,36" fill="#1f2937"/>
<text x="540" y="276" font-size="16" fill="#1f2937" font-weight="bold">t (s)</text>
<text x="70" y="32" font-size="16" fill="#1f2937" font-weight="bold">s (m)</text>
<line x1="60" y1="250" x2="510" y2="50" stroke="#dc2626" stroke-width="4"/>
<line x1="60" y1="150" x2="510" y2="250" stroke="#2563eb" stroke-width="4"/>
<circle cx="210" cy="183" r="7" fill="#166534"/>
<text x="222" y="178" font-size="16" fill="#166534" font-weight="bold">meeting</text>
<text x="440" y="86" font-size="16" fill="#dc2626" font-weight="bold">A: s = 20 t</text>
<text x="280" y="222" font-size="16" fill="#2563eb" font-weight="bold">B: s = 100 − 10 t</text>
<text x="66" y="142" font-size="16" fill="#2563eb">s₀ = 100 m</text>
<line x1="60" y1="150" x2="60" y2="150" stroke="#2563eb"/>
<text x="352" y="146" font-size="16" fill="#1f2937">slope = velocity</text>
<text x="352" y="166" font-size="16" fill="#dc2626">(rising → v &gt; 0)</text>
<text x="352" y="270" font-size="16" fill="#2563eb">(falling → v &lt; 0)</text>
</svg>`,
      caption: "In the position-time graph of uniform motion, position is a straight line: its slope is the velocity. The red line rises (v = +20 m/s), the blue one falls (v = −10 m/s). Where they cross, the two bodies are in the same place at the same instant."
    },
    {
      type: "text",
      title: "Reading graphs: s-t and v-t",
      html: `<p><b>Position-time graph (s, t)</b>: in uniform linear motion it is a <b>straight line</b>.</p>
<ul>
<li>The <b>intercept</b> with the vertical axis is the initial position s₀.</li>
<li>The <b>slope</b> (gradient) is the velocity: Δs / Δt. Steeper line = greater velocity; horizontal line = body at rest; falling line = motion in the opposite direction.</li>
</ul>
<p><b>Velocity-time graph (v, t)</b>: it is a <b>horizontal line</b> (the velocity does not change). Here the interesting quantity is the <b>area</b> under the graph between two instants: it is the <b>displacement</b> Δs = v · Δt (the area of a rectangle with base Δt and height v). This idea (area under the graph = accumulated quantity) will come back with accelerated motion and, later on, with the integral.</p>`
    },
    {
      type: "svg",
      title: "The velocity-time graph and the area",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="100" width="320" height="150" fill="#bbf7d0" stroke="#166534" stroke-width="3"/>
<line x1="60" y1="250" x2="570" y2="250" stroke="#1f2937" stroke-width="3"/>
<line x1="60" y1="250" x2="60" y2="24" stroke="#1f2937" stroke-width="3"/>
<polygon points="570,250 558,244 558,256" fill="#1f2937"/><polygon points="60,24 54,36 66,36" fill="#1f2937"/>
<text x="540" y="276" font-size="16" fill="#1f2937" font-weight="bold">t (s)</text>
<text x="70" y="32" font-size="16" fill="#1f2937" font-weight="bold">v (m/s)</text>
<line x1="60" y1="100" x2="440" y2="100" stroke="#166534" stroke-width="5"/>
<text x="34" y="106" font-size="16" fill="#166534" font-weight="bold">15</text>
<text x="372" y="274" font-size="16" fill="#1f2937" font-weight="bold">4</text>
<text x="140" y="180" font-size="18" fill="#14532d" font-weight="bold">Area = v · Δt</text>
<text x="140" y="206" font-size="18" fill="#14532d" font-weight="bold">= 15 · 4 = 60 m</text>
<text x="400" y="130" font-size="16" fill="#1f2937">constant v:</text>
<text x="400" y="152" font-size="16" fill="#1f2937">horizontal line</text>
</svg>`,
      caption: "The area of the rectangle under the line v = 15 m/s between 0 and 4 s is 60: it is exactly the displacement covered."
    },
    {
      type: "quiz",
      title: "Mini-quiz: velocity and equation of motion",
      questions: [
        { type: "num", q: "A car is travelling at 108 km/h. What is its velocity in m/s?", answer: 30, unit: "m/s", explain: "108 / 3.6 = 30 m/s." },
        { type: "num", q: "A cyclist starts from the origin and rides at 6 m/s. After how many seconds has he covered 150 m?", answer: 25, unit: "s", explain: "t = s / v = 150 / 6 = 25 s." },
        { type: "tf", q: "In the position-time graph of uniform linear motion, a steeper line means a greater velocity.", answer: true, explain: "The slope of the s-t line is the velocity: the steeper it is, the faster the body." },
        { type: "mc", q: "A body has equation of motion s = 50 − 5t (SI units). What does the negative sign of −5 mean?", options: ["That the body moves opposite to the positive direction of the axis", "That the body is at rest", "That time runs backwards"], answer: 0, explain: "The velocity is v = −5 m/s: the body moves in the negative direction, approaching the origin from s₀ = 50 m." }
      ]
    },
    {
      type: "text",
      title: "When two bodies meet",
      html: `<p>A classic kinematics problem: <b>two bodies on the same line start from different points; they meet when they have the same position at the same instant</b>. Procedure:</p>
<ol>
<li>Choose an axis with an origin and a positive direction.</li>
<li>Write the equation of motion of <b>each</b> body with its initial position and velocity (<b>with the sign!</b>): s<sub>A</sub> = s₀A + v<sub>A</sub> t and s<sub>B</sub> = s₀B + v<sub>B</sub> t.</li>
<li><b>Set</b> the two positions <b>equal</b>: s<sub>A</sub> = s<sub>B</sub>.</li>
<li>Solve the linear equation for the time t; then substitute t to find where the meeting takes place.</li>
</ol>
<p><b>Example</b>: two trains, A and B, are at two stations 300 km apart. Train A leaves one station (s = 0) towards the other at 100 km/h; train B leaves the other station (s = 300 km) at the same instant towards A at 80 km/h. Equations of motion: s<sub>A</sub> = 100 t; s<sub>B</sub> = 300 − 80 t. They meet when 100 t = 300 − 80 t, i.e. 180 t = 300, <b>t = 1.67 h</b> (1 h 40 min). Position: s = 100 · 1.67 ≈ <b>167 km</b> from A's station.</p>
<p><b>Chase</b>: if the two bodies move in the same direction, they meet only if the one behind is faster. A car at 30 m/s is chasing a lorry at 20 m/s that has a 200 m head start: the relative velocity is 10 m/s, so the time to catch up is 200 / 10 = <b>20 s</b>, after the car has covered 600 m.</p>`
    },
    {
      type: "example",
      title: "Example: overtaking on the motorway",
      html: `<p>A car travelling at 126 km/h (35 m/s) approaches a lorry going at 90 km/h (25 m/s). The car is 40 m behind the lorry and wants to overtake it: it has to end up 20 m in front. So it must gain 40 + 20 = 60 m (for simplicity, the lengths of the vehicles are ignored). The relative velocity is 35 − 25 = 10 m/s, so overtaking takes 60 / 10 = <b>6 s</b>. In those 6 seconds the car covers 35 · 6 = <b>210 m</b>. If another car is coming the other way at 90 km/h (25 m/s), the closing distance is (35 + 25) · 6 = 360 m: the oncoming car must be more than 360 m away when the overtaking starts!</p>`
    },
    {
      type: "text",
      title: "Galileo and the relativity of motion",
      html: `<p>In the <i>Dialogue Concerning the Two Chief World Systems</i> (1632), <b>Galileo Galilei</b> proposed a famous thought experiment: shut yourself in the hold of a large ship with some flies, butterflies, a bowl of water with fish in it, and a hanging bottle that drips. As long as the ship moves with <b>uniform motion, without rocking</b>, you cannot tell, by watching what happens in there, whether the ship is at rest or moving. The drops fall in the same spot, the fish swim in every direction, jumps have the same length.</p>
<p>This is the <b>principle of Galilean relativity</b>: the laws of physics are the same in all frames of reference moving with uniform linear motion relative to one another (inertial frames). A consequence: <b>velocities add up</b>. If you walk at 1 m/s along the corridor of a train going at 30 m/s, your velocity relative to the track is 31 m/s (or 29 m/s if you walk the opposite way). In 1905 Albert Einstein would show that this rule holds only at low speeds, but for everyday life it is accurate.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? How fast Bolt runs",
      html: `<p>On 16 August 2009 in Berlin, <b>Usain Bolt</b> ran the 100 m in <b>9.58 s</b>, a world record still unbeaten. His average speed was 100 / 9.58 ≈ <b>10.44 m/s ≈ 37.6 km/h</b>. In the fastest stretches he reached about 12.3 m/s (44 km/h). This is not uniform motion: he started from rest and accelerated, which is what we study in the next lesson!</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The Sun from 8 minutes ago",
      html: `<p>Light takes about <b>8 minutes and 20 seconds</b> to travel the 150 million km between the Sun and the Earth: t = 1.496 × 10¹¹ m / 3 × 10⁸ m/s ≈ 499 s. When you look at the Sun you see it as it was more than 8 minutes ago: if it went out now, we would find out in 8 minutes. By the same idea, the light from a star 4.2 light years away (Proxima Centauri) shows us the star as it was more than 4 years ago: looking far away means looking into the past.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand uniform motion",
      intro: "Motion is easy to feel but hard to describe: here are three ways of looking at it.",
      tabs: [
        {
          label: "🎞️ Frames (stroboscopic)",
          html: `<p>Imagine photographing a car every second from above a strip with a scale in metres. If the motion is <b>uniform</b>, between one photo and the next the car always moves forward by the same number of metres. A table:</p>
<table><tr><th>t (s)</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>s (m)</th><td>5</td><td>15</td><td>25</td><td>35</td><td>45</td></tr><tr><th>Δs (m)</th><td></td><td>10</td><td>10</td><td>10</td><td>10</td></tr></table>
<p>Δs is always 10 m every second: v = 10 m/s and the equation of motion is s = 5 + 10t. When the table has constant increments, the motion is uniform; if the increments grow, the body is accelerating.</p>`
        },
        {
          label: "🔄 Unit conversion",
          html: `<p>You learn the 3.6 by matching concrete cases. Match the speeds in km/h with those in m/s.</p>`,
          widget: "match",
          options: { pairs: [
            ["36 km/h", "10 m/s"],
            ["72 km/h", "20 m/s"],
            ["108 km/h", "30 m/s"],
            ["18 km/h", "5 m/s"],
            ["90 km/h", "25 m/s"],
            ["7.2 km/h", "2 m/s"]
          ] }
        },
        {
          label: "🚦 Reaction time",
          html: `<p>Uniform motion helps you understand an important fact: a driver takes about <b>1 s</b> to react to an obstacle before starting to brake. At 130 km/h (36.1 m/s), in that single second the car covers <b>36 metres</b> at constant velocity, before the brake is even touched. At 50 km/h (13.9 m/s) it is 14 metres. That is why being distracted by your phone for just 3 seconds at 90 km/h means travelling 75 m "blind" (25 m/s × 3 s).</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: uniform linear motion",
      nodes: [
        { id: "rif", label: "Frame of reference", x: 50, y: 6, color: "#6366f1", html: "Origin, axis and direction: needed to define a position.", why: "Motion is relative: without a reference, 'at rest' and 'moving' make no sense. Galileo was the first to understand this, in 1632, replying to those who claimed the Earth could not move." },
        { id: "pos", label: "Position and displacement", x: 18, y: 30, color: "#f59e0b", html: "s and Δs = s₂ − s₁.", why: "Position has a sign relative to the origin; displacement is a difference and is a vector quantity (direction included)." },
        { id: "vel", label: "Velocity", x: 82, y: 30, color: "#16a34a", html: "v = Δs / Δt, in m/s (1 m/s = 3.6 km/h).", why: "It is a ratio between distance and time: the 'rate of change of position'. The definition shows why its unit is m/s: a length divided by a time." },
        { id: "mru", label: "Uniform linear motion", x: 50, y: 55, color: "#a855f7", html: "Straight path, constant velocity.", why: "The simplest case and also a good approximation of many real motions. By the principle of inertia (Galileo, Newton), a body with no forces acting on it moves exactly like this." },
        { id: "lo", label: "Equation of motion", x: 18, y: 82, color: "#ef4444", html: "s = s₀ + v t.", why: "It follows from the definition of constant velocity: if Δs/Δt = v for every interval, then s − s₀ = v t. It is a linear function of time." },
        { id: "gr", label: "s-t and v-t graphs", x: 82, y: 82, color: "#0ea5e9", html: "s-t: line with slope v; v-t: horizontal line whose area is Δs.", why: "Cartesian graphs (an idea of Descartes and Galileo) turn a formula into a picture: the slope measures the velocity and the area the displacement. It is the seed of the derivative and the integral." },
        { id: "inc", label: "Two bodies meeting", x: 50, y: 94, color: "#14b8a6", html: "Set the two equations of motion equal.", why: "Two bodies meet when they have the same position at the same instant: on the s-t graph, where the two lines intersect." }
      ],
      edges: [
        ["rif", "pos", "defines"],
        ["rif", "vel", "measured relative to"],
        ["pos", "mru", "changes in"],
        ["vel", "mru", "constant in"],
        ["mru", "lo", "described by"],
        ["mru", "gr", "represented by"],
        ["lo", "inc", "used for"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: graphs and meetings",
      questions: [
        { type: "num", q: "A body has equation of motion s = 10 + 4t (SI). What is its position after 6 s?", answer: 34, unit: "m", explain: "s = 10 + 4 · 6 = 34 m." },
        { type: "num", q: "Two bodies have s_A = 5t and s_B = 60 − 7t (SI). After how many seconds do they meet?", answer: 5, unit: "s", explain: "5t = 60 − 7t → 12t = 60 → t = 5 s." },
        { type: "tf", q: "In a velocity-time graph of uniform linear motion, the area under the line represents the displacement.", answer: true, explain: "Area = v · Δt = Δs." },
        { type: "mc", q: "On a position-time graph, a horizontal line means…", options: ["The body is at rest", "The body has a constant non-zero velocity", "The body is accelerating"], answer: 0, explain: "If the position does not change over time, the velocity is zero: the body is at rest." }
      ]
    }
  ],
  glossary: [
    { t: "Kinematics", d: "The branch of physics that describes motion without dealing with its causes." },
    { t: "Frame of reference", d: "A reference body with an origin and axes relative to which motion is described." },
    { t: "Position", d: "The coordinate s of a point on the axis, with a sign relative to the origin." },
    { t: "Displacement", d: "Change in position Δs = s₂ − s₁." },
    { t: "Average velocity", d: "Ratio between displacement and time interval: vm = Δs/Δt." },
    { t: "Instantaneous velocity", d: "Velocity at a given instant: the average over a very short time interval." },
    { t: "Uniform linear motion", d: "Motion along a straight line with constant velocity." },
    { t: "Equation of motion", d: "Formula giving position as a function of time: s = s₀ + v·t in uniform motion." },
    { t: "Point particle", d: "Model of a body whose size is negligible compared with the distances covered." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "In uniform linear motion…", options: ["The velocity is constant", "The acceleration is constant and non-zero", "The path is a curve"], answer: 0, explain: "By definition: straight path and constant velocity." },
      { type: "num", q: "A train covers 270 km in 3 hours. What is its average speed?", answer: 90, unit: "km/h", explain: "270 / 3 = 90 km/h." },
      { type: "num", q: "Convert 72 km/h into m/s.", answer: 20, unit: "m/s", explain: "72 / 3.6 = 20 m/s." },
      { type: "num", q: "A car starts from s₀ = 30 m with v = 12 m/s. Where is it after 5 s?", answer: 90, unit: "m", explain: "s = 30 + 12 · 5 = 90 m." },
      { type: "tf", q: "If you go to school and come back home, the total displacement is equal to twice the distance.", answer: false, explain: "You return to your starting point: the total displacement is zero (the distance travelled is double)." },
      { type: "num", q: "A car covers 120 km at 60 km/h and another 120 km at 120 km/h. What is the average speed over the whole journey?", answer: 80, unit: "km/h", explain: "Times: 2 h + 1 h = 3 h; distance 240 km; 240/3 = 80 km/h." },
      { type: "mc", q: "What does the slope of a line in the position-time graph represent?", options: ["The initial position", "The velocity", "The time"], answer: 1, explain: "Slope = Δs / Δt = velocity." },
      { type: "num", q: "Two cyclists start from two points 90 km apart and ride towards each other at 20 km/h and 25 km/h. After how many hours do they meet?", answer: 2, unit: "h", explain: "Closing speed 45 km/h: t = 90 / 45 = 2 h." },
      { type: "text", q: "What is the name of the formula that gives the position of a body as a function of time?", answer: ["equation of motion", "the equation of motion", "position-time law", "law of motion", "position-time equation"], explain: "It is the equation of motion: s = s₀ + v·t in uniform linear motion." },
      { type: "order", q: "Put in order the steps for finding where two bodies meet.", items: ["Choose the origin and direction of the axis", "Write the equation of motion of each body", "Set the two positions equal", "Solve for the time", "Substitute the time to find the place"], explain: "You write the model of each motion, require the same position at the same instant and solve." }
    ]
  }
});
