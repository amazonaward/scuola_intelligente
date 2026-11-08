TOPIC('en', {
  id: `m3-tec-robotica`,
  title: `Robotics and automation`,
  intro: `A robotic arm that welds cars, a robot vacuum cleaner that avoids the sofa, a rover exploring Mars, a gate that opens by itself. They are all <b>automatic</b> systems: they <b>sense</b> the environment with <b>sensors</b>, <b>decide</b> with a <b>controller</b> and <b>act</b> with <b>actuators</b>. Let's discover how they work and how a robot designer "reasons". 🦾🤖`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Automation and robots: what is the difference?`,
      html: `<p><b>Automation</b> is the use of machines and control systems to carry out tasks <b>without continuous human intervention</b>: a washing machine, a traffic light, a bottling line.</p>
<p>A <b>robot</b> is an automatic machine that is <b>programmable</b> and <b>versatile</b>: it can carry out different tasks by changing its program, and it often moves through space. A washing machine is automatic but always does the same thing; a robotic arm today welds, tomorrow paints or packs.</p>
<p>Every robot follows the cycle <b>sense ➜ think ➜ act</b>:</p>
<ol>
<li><b>Sensors</b>: collect information (distance, light, contact, position…).</li>
<li><b>Controller</b>: a computer or microcontroller runs the <b>program</b> and decides what to do.</li>
<li><b>Actuators</b>: turn the command into action (motors, pistons, grippers, lights, loudspeakers).</li>
</ol>
<p>It also needs an <b>energy source</b> (battery, mains electricity, compressed air) and a <b>mechanical structure</b> (frame, joints, wheels, gears).</p>`
    },
    {
      type: `svg`, title: `The parts of a mobile robot`,
      caption: `Sensors (eyes and ears), controller (brain), actuators (muscles), battery (energy), structure (skeleton).`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f1f5f9"/>
<rect x="200" y="110" width="200" height="110" rx="16" fill="#94a3b8" stroke="#334155" stroke-width="4"/>
<rect x="250" y="135" width="100" height="45" rx="6" fill="#22c55e" stroke="#14532d" stroke-width="3"/>
<text x="300" y="164" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">CPU</text>
<rect x="225" y="190" width="60" height="22" rx="4" fill="#facc15" stroke="#854d0e" stroke-width="2"/>
<circle cx="230" cy="235" r="28" fill="#1e293b"/><circle cx="230" cy="235" r="10" fill="#64748b"/>
<circle cx="370" cy="235" r="28" fill="#1e293b"/><circle cx="370" cy="235" r="10" fill="#64748b"/>
<rect x="395" y="125" width="40" height="40" rx="6" fill="#3b82f6" stroke="#1e3a8a" stroke-width="3"/>
<circle cx="415" cy="137" r="7" fill="#e0f2fe"/><circle cx="415" cy="155" r="7" fill="#e0f2fe"/>
<line x1="300" y1="110" x2="300" y2="70" stroke="#334155" stroke-width="4"/>
<circle cx="300" cy="62" r="10" fill="#ef4444"/>
<rect x="160" y="140" width="40" height="18" rx="4" fill="#f97316" stroke="#7c2d12" stroke-width="2"/>
<g font-size="15" font-weight="bold">
<text x="470" y="140" fill="#1e40af">ultrasonic</text><text x="470" y="160" fill="#1e40af">sensor</text>
<text x="330" y="55" fill="#b91c1c">status LED</text>
<text x="300" y="30" fill="#166534" text-anchor="middle">controller = "brain"</text>
<text x="20" y="150" fill="#9a3412">contact</text><text x="20" y="170" fill="#9a3412">sensor</text>
<text x="20" y="250" fill="#0f172a">motors + wheels</text><text x="20" y="270" fill="#0f172a">(actuators)</text>
<text x="430" y="250" fill="#854d0e">battery</text>
</g>
<line x1="300" y1="36" x2="300" y2="50" stroke="#166534" stroke-width="2"/>
<line x1="465" y1="145" x2="437" y2="145" stroke="#1e40af" stroke-width="2"/>
<line x1="105" y1="155" x2="158" y2="150" stroke="#9a3412" stroke-width="2"/>
<line x1="135" y1="255" x2="200" y2="240" stroke="#0f172a" stroke-width="2"/>
<line x1="428" y1="245" x2="288" y2="205" stroke="#854d0e" stroke-width="2"/>
</svg>`
    },
    {
      type: `text`, title: `2. Sensors: the robot's senses`,
      html: `<table>
<tr><th>Sensor</th><th>What it measures</th><th>Example of use</th></tr>
<tr><td>Limit switch / button</td><td>contact (yes/no)</td><td>the robot vacuum cleaner bumps into a piece of furniture</td></tr>
<tr><td>Ultrasound</td><td>distance, using the echo (like bats)</td><td>avoiding obstacles</td></tr>
<tr><td>Infrared</td><td>reflection of IR light, closeness</td><td>following a black line, anti-fall sensor on stairs</td></tr>
<tr><td>Encoder</td><td>how much a motor has turned</td><td>knowing how many cm it has moved</td></tr>
<tr><td>Gyroscope / accelerometer</td><td>rotation, tilt</td><td>drones and robots that stay balanced</td></tr>
<tr><td>Camera</td><td>images</td><td>recognising objects (with AI)</td></tr>
<tr><td>LiDAR</td><td>distances with laser pulses, 3D map</td><td>self-driving cars, rovers</td></tr>
</table>`
    },
    {
      type: `text`, title: `3. Actuators: the robot's muscles`,
      html: `<ul>
<li><b>DC motor (direct current)</b>: spins fast as long as it is powered; used for wheels and fans. It often has a <b>gearbox</b> (gears) that reduces speed and increases force.</li>
<li><b>Servo motor</b>: turns to a <b>precise angle</b> (for example from 0° to 180°) and holds it; used for arms, rudders, grippers.</li>
<li><b>Stepper motor</b>: advances in precise <b>steps</b> (e.g. 200 steps = 1 turn, that is 1.8° per step); used in 3D printers and CNC machines.</li>
<li><b>Pneumatic pistons</b> (compressed air) and <b>hydraulic</b> ones (oil): large forces, used in presses and excavators.</li>
<li><b>Solenoid valves, relays</b>: open and close flows of water, air or current.</li>
<li><b>LEDs, displays and loudspeakers</b> are also actuators: they "act" by communicating.</li>
</ul>
<p><b>Degrees of freedom</b> (DoF): the number of independent movements a robot can make. A typical industrial arm has <b>6 degrees of freedom</b> (6 joints that rotate): it can bring the tool to any position and with any orientation within its workspace. The human arm, from shoulder to wrist, has 7.</p>`
    },
    {
      type: `3d`, title: `A jointed robotic arm`,
      scene: `molecule`,
      options: {
        atoms: [
          { x: 0, y: -1.8, z: 0, r: 0.55, color: `#475569`, label: `base (rotation)` },
          { x: 0, y: -1.0, z: 0, r: 0.35, color: `#f97316`, label: `shoulder` },
          { x: 0.9, y: 0.2, z: 0, r: 0.3, color: `#f97316`, label: `elbow` },
          { x: 1.9, y: 0.6, z: 0.3, r: 0.25, color: `#f97316`, label: `wrist` },
          { x: 2.5, y: 0.9, z: 0.4, r: 0.2, color: `#3b82f6`, label: `gripper (end effector)` },
          { x: 2.6, y: 0.3, z: 0.5, r: 0.18, color: `#22c55e`, label: `object` }
        ],
        bonds: [[0, 1], [1, 2], [2, 3], [3, 4]]
      },
      caption: `Each orange sphere is a joint moved by a servo motor. Rotate the scene: the base turns, the shoulder and elbow raise the arm, the wrist orients the gripper.`
    },
    {
      type: `quiz`, title: `Mini-quiz: sensor or actuator?`,
      questions: [
        { type: `mc`, q: `A servo motor is…`, options: [`a sensor`, `an actuator`, `a battery`], answer: 1, explain: `The servo motor produces movement: it is an actuator.` },
        { type: `mc`, q: `Which sensor measures distance using an echo?`, options: [`Ultrasound`, `Thermistor`, `Microphone`], answer: 0, explain: `The ultrasonic sensor emits a sound and measures how long the echo takes to come back.` },
        { type: `num`, q: `A stepper motor makes 200 steps per turn. How many degrees does it turn at each step?`, answer: 1.8, tol: 0.01, unit: `°`, explain: `360° ÷ 200 = 1.8°.` }
      ]
    },
    {
      type: `widget`, title: `Game: sensors, controllers, actuators`,
      widget: `classify`,
      options: {
        groups: [`Sensor 👁️`, `Controller 🧠`, `Actuator 💪`],
        items: [
          [`📏 ultrasonic sensor`, 0], [`📷 camera`, 0], [`🌡️ thermistor`, 0], [`🔘 limit switch`, 0],
          [`🖥️ microcontroller (Arduino)`, 1], [`🏭 factory PLC`, 1],
          [`⚙️ DC motor`, 2], [`🦾 servo motor`, 2], [`🔧 pneumatic piston`, 2], [`🔊 loudspeaker`, 2]
        ]
      },
      caption: `Remember the cycle: sense (sensor) ➜ think (controller) ➜ act (actuator).`
    },
    {
      type: `text`, title: `4. Control: open loop and closed loop`,
      html: `<p><b>Open loop</b>: the controller gives the command and <b>does not check the result</b>. Example: the toaster with a timer. If the bread is thicker, it comes out less toasted: the toaster does not know.</p>
<p><b>Closed loop</b> (with <b>feedback</b>): a sensor <b>measures the result</b> and the controller compares it with the <b>target</b> (the <i>set-point</i>), correcting continuously. Example: the <b>thermostat</b>. Target 20 °C ➜ the sensor measures 18 °C ➜ it switches the boiler on ➜ once it reaches 20 °C it switches it off.</p>
<p>Control can be:</p>
<ul>
<li><b>ON/OFF</b> (all or nothing): simple, but the value "oscillates" above and below the target;</li>
<li><b>proportional</b>: the further you are from the target, the stronger the correction (like braking gently as you approach a stop). Industrial systems often use <b>PID</b> control, which is an evolution of this idea.</li>
</ul>`
    },
    {
      type: `svg`, title: `Block diagram: closed loop`,
      caption: `The sensor "closes the loop": the result comes back and is compared with the target.`,
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fff7ed"/>
<rect x="15" y="70" width="95" height="56" rx="10" fill="#a855f7"/>
<text x="62" y="96" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">Target</text>
<text x="62" y="115" font-size="13" fill="#fff" text-anchor="middle">20 °C</text>
<circle cx="150" cy="98" r="20" fill="#fff" stroke="#0f172a" stroke-width="3"/>
<text x="150" y="105" font-size="20" text-anchor="middle" fill="#0f172a">−</text>
<rect x="200" y="70" width="110" height="56" rx="10" fill="#22c55e"/>
<text x="255" y="96" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">Controller</text>
<text x="255" y="115" font-size="12" fill="#fff" text-anchor="middle">decides</text>
<rect x="340" y="70" width="110" height="56" rx="10" fill="#f97316"/>
<text x="395" y="96" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">Actuator</text>
<text x="395" y="115" font-size="12" fill="#fff" text-anchor="middle">boiler</text>
<rect x="480" y="70" width="105" height="56" rx="10" fill="#ef4444"/>
<text x="532" y="96" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">Environment</text>
<text x="532" y="115" font-size="12" fill="#fff" text-anchor="middle">the room</text>
<rect x="320" y="180" width="140" height="50" rx="10" fill="#3b82f6"/>
<text x="390" y="211" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">Sensor 🌡️</text>
<g stroke="#0f172a" stroke-width="3" fill="none">
<line x1="110" y1="98" x2="130" y2="98"/><line x1="170" y1="98" x2="198" y2="98"/><line x1="310" y1="98" x2="338" y2="98"/><line x1="450" y1="98" x2="478" y2="98"/>
<polyline points="532,126 532,205 462,205"/><polyline points="320,205 150,205 150,118"/>
</g>
<text x="160" y="60" font-size="13" fill="#0f172a">error</text>
<text x="230" y="245" font-size="13" fill="#1e40af" font-weight="bold">feedback: measured value 18 °C</text>
</svg>`
    },
    {
      type: `text`, title: `5. Programming a robot: the line-follower example`,
      html: `<p>A <b>line-following</b> robot has two infrared sensors under its nose, one on the left and one on the right, and two motors. The black line absorbs IR light, the white floor reflects it. The program (in <b>pseudocode</b>) is an endless loop:</p>
<pre>REPEAT FOREVER
  IF left sees white AND right sees white
     THEN go straight (equal motors)
  ELSE IF left sees black
     THEN turn left (slow down the left motor)
  ELSE IF right sees black
     THEN turn right (slow down the right motor)
END REPEAT</pre>
<p>The robot reads the sensors dozens of times per second: it is a small <b>closed loop</b>. With Scratch, mBlock or Arduino's block programming you build exactly this, with <b>"forever"</b> and <b>"if… then… else"</b> blocks.</p>`
    },
    {
      type: `example`, title: `Practical example: the robot vacuum cleaner`,
      html: `<ul>
<li><b>Sensors</b>: bumper with limit switches (impacts), infrared anti-fall sensors (stairs), encoders on the wheels, sometimes LiDAR or a camera to make a <b>map</b> of the house.</li>
<li><b>Controller</b>: decides the route, remembers the areas already cleaned, returns to the base when the battery is flat.</li>
<li><b>Actuators</b>: two motors for the wheels, the brush motor, the suction fan.</li>
</ul>
<p>When the battery drops below a threshold (for example 15%), the program changes its goal: "return to base". It is an example of a <b>decision based on sensors</b>.</p>`
    },
    {
      type: `example`, title: `Practical example: the automatic factory (Industry 4.0)`,
      html: `<p>In a car factory the car body moves along a conveyor belt. A photoelectric sensor detects it ➜ the <b>PLC</b> (programmable logic controller, the "rugged computer" of factories) stops the belt ➜ six robotic arms weld hundreds of spots in a few seconds ➜ a camera checks the quality ➜ the belt starts again.</p>
<p>With <b>Industry 4.0</b> machines are connected to a network, send data in real time and signal by themselves when maintenance is needed. Alongside classic robots, shut behind safety cages, there are <b>cobots</b> (collaborative robots), designed to work next to people and stop if they touch them.</p>`
    },
    {
      type: `curiosity`, title: `Did you know… the word "robot" comes from a play?`,
      html: `<p>In <b>1920</b> the Czech writer <b>Karel Čapek</b> wrote the play <i>R.U.R. (Rossum's Universal Robots)</i>, in which a factory produces artificial workers. The word <b>robot</b> was suggested to him by his brother Josef: it comes from the Czech <i>robota</i>, "forced labour". In 1942 the writer <b>Isaac Asimov</b> invented the famous <b>Three Laws of Robotics</b> (the first: a robot may not injure a human being). The first industrial robot, <b>Unimate</b>, entered a General Motors factory in <b>1961</b>.</p>`
    },
    {
      type: `curiosity`, title: `Did you know… Leonardo designed a robot, and Italy has a famous one?`,
      html: `<p>Around <b>1495</b> <b>Leonardo da Vinci</b> drew a <b>mechanical knight</b> in armour, moved by pulleys and cables, able to sit up, move its arms and its head. In 2002 a NASA engineer reconstructed it: it worked! Today at the <b>Italian Institute of Technology</b> in Genoa <b>iCub</b> has been developed, a humanoid robot the size of a 4-year-old child, used all over the world to study how learning happens.</p>`
    },
    {
      type: `remember`, title: `To remember`,
      html: `<ul>
<li>Robot = <b>programmable</b> automatic machine: sensors ➜ controller ➜ actuators.</li>
<li>Sensors: contact, ultrasound, infrared, encoders, gyroscope, camera, LiDAR.</li>
<li>Actuators: DC motors, servo motors, stepper motors, pistons, relays.</li>
<li>Open loop: no check of the result. Closed loop: <b>feedback</b> with a sensor.</li>
<li>Degrees of freedom = independent movements (an industrial arm usually has 6).</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Other ways to understand it`,
      intro: `Robots are easier to understand if we compare them with something we already know.`,
      tabs: [
        {
          label: `🧍 The human body`,
          html: `<p>You too are a "closed-loop system"!</p>
<ul>
<li><b>Sensors</b> = eyes, ears, skin, the inner ear for balance.</li>
<li><b>Controller</b> = brain and spinal cord.</li>
<li><b>Actuators</b> = muscles.</li>
<li><b>Wires</b> = nerves; <b>energy</b> = food.</li>
</ul>
<p>When you pick up a glass, your eyes constantly check your hand and your brain corrects the movement: that is feedback. Try picking it up with your eyes closed: it becomes an open loop, and it is much harder!</p>`
        },
        {
          label: `🚿 The shower`,
          html: `<p>Adjusting the temperature of the shower is a closed-loop control done by you:</p>
<ol>
<li><b>Target</b>: lukewarm water.</li>
<li><b>Sensor</b>: your hand feels the water is too cold.</li>
<li><b>Controller</b>: your brain decides "hotter".</li>
<li><b>Actuator</b>: your hand turns the mixer.</li>
<li>You start again: measure, compare, correct.</li>
</ol>
<p>If you turn too suddenly, the water becomes boiling, then you turn too far the other way… this is the <b>oscillation</b> of ON/OFF control. If you turn a little at a time, you are doing <b>proportional</b> control.</p>`
        },
        {
          label: `🏷️ Recognise the parts`,
          html: `<p>Tap the points of the robot and choose the right part.</p>`,
          widget: `labelDiagram`,
          options: {
            svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#f8fafc"/><rect x="110" y="110" width="180" height="100" rx="14" fill="#94a3b8" stroke="#334155" stroke-width="4"/><rect x="160" y="130" width="80" height="40" rx="6" fill="#22c55e"/><rect x="150" y="180" width="50" height="20" rx="4" fill="#facc15"/><circle cx="140" cy="225" r="26" fill="#1e293b"/><circle cx="260" cy="225" r="26" fill="#1e293b"/><rect x="290" y="130" width="36" height="36" rx="6" fill="#3b82f6"/><rect x="74" y="140" width="36" height="16" rx="4" fill="#f97316"/></svg>`,
            spots: [
              { x: 200, y: 150, label: `Controller` },
              { x: 308, y: 148, label: `Ultrasonic sensor` },
              { x: 140, y: 225, label: `Wheel with motor` },
              { x: 175, y: 190, label: `Battery` },
              { x: 92, y: 148, label: `Contact sensor` }
            ]
          }
        },
        {
          label: `🧩 Match robot and task`,
          html: `<p>Each robot is designed for a task: connect the two elements.</p>`,
          widget: `match`,
          options: { pairs: [
            [`6-axis industrial arm`, `welding car bodies`],
            [`Rover Perseverance`, `exploring Mars since 2021`],
            [`Robot vacuum cleaner`, `cleaning the house while avoiding obstacles`],
            [`Cobot`, `working alongside people`],
            [`Drone`, `filming and inspecting from above`],
            [`Surgical robot`, `helping the doctor in precise operations`]
          ] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Map: robotics`,
      nodes: [
        { id: `rob`, label: `Robot`, x: 50, y: 8, color: `#64748b`, html: `Programmable automatic machine.`, why: `The word was born in 1920 with Karel Čapek (from the Czech <i>robota</i>, forced labour). The idea of self-moving machines is ancient: Hero of Alexandria (1st century AD) already described steam-powered and counterweight automata.` },
        { id: `sens`, label: `Sensors`, x: 15, y: 32, color: `#3b82f6`, html: `They sense the environment.`, why: `Many sensors imitate nature: ultrasound copies the echolocation of bats; the camera copies the eye. They turn a physical quantity into an electrical signal.` },
        { id: `ctrl`, label: `Controller`, x: 50, y: 32, color: `#22c55e`, html: `Runs the program and decides.`, why: `Since the 1970s microprocessors (the first, the Intel 4004 of 1971, whose project was led by the Italian Federico Faggin) have made controllers small and cheap. In 1968 the PLC was born for factories.` },
        { id: `att`, label: `Actuators`, x: 85, y: 32, color: `#f97316`, html: `Motors, servos, pistons: they produce the action.`, why: `The electric motor is based on electromagnetism discovered by Ørsted (1820) and Faraday (1821): a current in a magnetic field produces a force.` },
        { id: `ciclo`, label: `Sense-think-act`, x: 50, y: 55, color: `#a855f7`, html: `The cycle that repeats continuously.`, why: `It is the basic scheme of every intelligent system, natural or artificial: even an animal senses, decides and moves.` },
        { id: `feed`, label: `Feedback`, x: 20, y: 78, color: `#ef4444`, html: `The sensor measures the result and compares it with the target.`, why: `One of the first examples was the <b>centrifugal governor</b> of James Watt's steam engine (1788). In 1948 Norbert Wiener founded <b>cybernetics</b>, the science of control and communication in animals and machines.` },
        { id: `gdl`, label: `Degrees of freedom`, x: 50, y: 82, color: `#eab308`, html: `Independent movements of the robot.`, why: `A rigid object in space has 6 degrees of freedom (3 translations + 3 rotations): for this reason an arm with 6 joints can reach every position and orientation within its workspace.` },
        { id: `auto`, label: `Automation and Industry 4.0`, x: 82, y: 78, color: `#0ea5e9`, html: `Factories with machines connected in a network.`, why: `After mechanisation (steam), electricity and computing, the "fourth industrial revolution" connects machines, sensors and data via the Internet. The term Industrie 4.0 was born in Germany in 2011.` }
      ],
      edges: [
        [`rob`, `sens`, `has`], [`rob`, `ctrl`, `has`], [`rob`, `att`, `has`], [`sens`, `ciclo`, `sense`], [`ctrl`, `ciclo`, `think`], [`att`, `ciclo`, `act`],
        [`ciclo`, `feed`, `with`], [`att`, `gdl`, `define`], [`rob`, `auto`, `in factories`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: control and programming`,
      questions: [
        { type: `mc`, q: `A toaster with a timer is a … system.`, options: [`open-loop`, `closed-loop`], answer: 0, explain: `It does not measure how toasted the bread is: open loop.` },
        { type: `mc`, q: `In a line follower, if the right sensor sees the black line, the robot must…`, options: [`turn right`, `turn left`, `stop forever`], answer: 0, explain: `The line is moving to the right: the robot turns right to follow it.` },
        { type: `tf`, q: `The home thermostat uses feedback.`, answer: true, explain: `It measures the temperature and compares it with the desired one.` }
      ]
    }
  ],
  glossary: [
    { t: `Robot`, d: `Programmable automatic machine that senses, processes and acts.` },
    { t: `Automation`, d: `Use of machines and controls to carry out tasks without continuous human intervention.` },
    { t: `Sensor`, d: `Device that detects a physical quantity and turns it into a signal.` },
    { t: `Actuator`, d: `Device that turns a command into action (motor, piston…).` },
    { t: `Controller`, d: `Computer, microcontroller or PLC that runs the program.` },
    { t: `Feedback`, d: `The result is measured and used to correct the action.` },
    { t: `Servo motor`, d: `Motor that turns to a precise angle and holds it.` },
    { t: `Degrees of freedom`, d: `Number of independent movements of a mechanism.` },
    { t: `PLC`, d: `Programmable logic controller, used in factories.` },
    { t: `Cobot`, d: `Collaborative robot, designed to work near people.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `order`, q: `Put in order the operating cycle of a robot.`, items: [`The sensor senses`, `The controller processes`, `The actuator acts`], explain: `Sense ➜ think ➜ act.` },
      { type: `mc`, q: `What distinguishes a robot from a simple automatic machine?`, options: [`It is bigger`, `It can be programmed for different tasks`, `It runs on a battery`], answer: 1, explain: `The robot is versatile and reprogrammable.` },
      { type: `mc`, q: `Which actuator does a 3D printer use for very precise movements?`, options: [`Stepper motor`, `Hydraulic piston`, `Loudspeaker`], answer: 0, explain: `The stepper advances in steps of a known angle.` },
      { type: `num`, q: `A servo motor goes from 0° to 180°. If it is halfway through its travel, what angle is it at?`, answer: 90, tol: 0, unit: `°`, explain: `180 ÷ 2 = 90°.` },
      { type: `num`, q: `A motor turns at 3000 rpm. With a 1:50 gearbox, how many rpm does the wheel make?`, answer: 60, tol: 0, unit: `rpm`, explain: `3000 ÷ 50 = 60 rpm (but with 50 times more force).` },
      { type: `tf`, q: `In an open-loop system the result is measured and corrected.`, answer: false, explain: `This is closed loop; an open loop does not check the result.` },
      { type: `tf`, q: `A typical industrial arm has 6 degrees of freedom.`, answer: true, explain: `6 joints: 3 for the position and 3 for the orientation of the tool.` },
      { type: `text`, q: `From which language does the word "robot" come?`, answer: [`czech`, `from czech`, `the czech language`, `czechoslovak`], explain: `From Czech robota (forced labour), in the play R.U.R. by Karel Čapek (1920).` },
      { type: `mc`, q: `What is the anti-fall sensor of a robot vacuum cleaner for?`, options: [`To avoid falling down the stairs`, `To measure the dust`, `To recharge the battery`], answer: 0, explain: `An infrared sensor pointing downwards detects the drop.` },
      { type: `mc`, q: `What is a cobot?`, options: [`A toy robot`, `A robot that works safely alongside people`, `An underwater robot`], answer: 1, explain: `Cobot = collaborative robot.` },
      { type: `mc`, q: `Which example is a closed-loop control?`, options: [`Cruise control that keeps the car's speed`, `A kitchen timer`, `A fan with a switch`], answer: 0, explain: `Cruise control measures the speed and corrects the accelerator.` },
      { type: `text`, q: `Which Italian genius drew a mechanical knight around 1495?`, answer: [`leonardo`, `leonardo da vinci`], explain: `Leonardo da Vinci.` }
    ]
  }
});
