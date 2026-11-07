TOPIC('en', {
  id: `m1-tec-algoritmi-diagrammi`,
  title: `Algorithms and Flowcharts`,
  intro: `A recipe, the Lego instructions, the route to get to school: these are all <b>algorithms</b>, sequences of precise steps to solve a problem. Computers do nothing but carry out algorithms written by people. In this lesson we learn to <b>write</b> them and to <b>draw</b> them with <b>flowcharts</b>, the first step to becoming a programmer. 🤖➡️🔷`,
  minutes: 40,
  sections: [
    {
      type: `text`, title: `1. What an algorithm is`,
      html: `<p>An <b>algorithm</b> is a <b>finite sequence of clear instructions</b> that, carried out in order, solve a problem.</p>
<p>A good algorithm must be:</p>
<ul>
<li><b>finite</b>: it must end after a limited number of steps;</li>
<li><b>unambiguous</b>: each instruction can be understood in only one way ("add a bit of salt" is ambiguous, "add 5 g of salt" is not);</li>
<li><b>executable</b>: whoever carries it out (person or machine) must be able to do every step;</li>
<li><b>general</b>: it must work for all cases of the same type, not just one.</li>
</ul>
<p>Whoever carries out the algorithm is called the <b>executor</b>. A computer is a very fast executor but <b>without imagination</b>: it does exactly what is written, even if it is wrong!</p>`
    },
    {
      type: `example`, title: `Practical example: the tea algorithm`,
      html: `<ol>
<li>Fill the kettle with water.</li>
<li>Switch on the kettle.</li>
<li><b>While</b> the water is not boiling, wait.</li>
<li>Put the tea bag in the cup.</li>
<li>Pour the water into the cup.</li>
<li>Wait 3 minutes and take out the tea bag.</li>
<li><b>If</b> you want sweet tea, add sugar; <b>otherwise</b> add nothing.</li>
<li>End: drink the tea! 🍵</li>
</ol>
<p>Notice three things: the steps are in <b>sequence</b>; at step 3 there is a <b>repetition</b> (wait while…); at step 7 there is a <b>choice</b> (if… otherwise…). These are the three "bricks" of every algorithm.</p>`
    },
    {
      type: `text`, title: `2. The symbols of flowcharts`,
      html: `<p>A <b>flowchart</b> draws an algorithm with blocks of different shapes, connected by <b>arrows</b> that show the order.</p>
<table>
<tr><th>Shape</th><th>Name</th><th>Meaning</th></tr>
<tr><td>⬭ oval</td><td><b>Start / End</b></td><td>where the algorithm begins and where it ends</td></tr>
<tr><td>▱ parallelogram</td><td><b>Input / Output</b></td><td>reading a piece of data (input) or showing a result (output)</td></tr>
<tr><td>▭ rectangle</td><td><b>Process</b></td><td>an action or a calculation (e.g. sum ← a + b)</td></tr>
<tr><td>◇ diamond</td><td><b>Decision</b></td><td>a question with a <b>yes / no</b> (true / false) answer: two arrows come out of it</td></tr>
<tr><td>→ arrow</td><td><b>Flow</b></td><td>shows the next step</td></tr>
</table>
<p>Rules: only one <b>Start</b>, at least one <b>End</b>, every block has one arrow going in and one going out (the diamond has two going out).</p>`
    },
    {
      type: `svg`, title: `A flowchart: even or odd?`,
      caption: `The algorithm reads a number N, checks whether the remainder of the division by 2 is 0 and writes "even" or "odd".`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs><marker id="fa" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#334155"/></marker></defs>
<ellipse cx="300" cy="25" rx="60" ry="18" fill="#86efac" stroke="#166534" stroke-width="2"/>
<text x="300" y="31" font-size="16" text-anchor="middle" fill="#14532d" font-weight="bold">START</text>
<line x1="300" y1="43" x2="300" y2="58" stroke="#334155" stroke-width="2" marker-end="url(#fa)"/>
<polygon points="250,62 370,62 350,96 230,96" fill="#93c5fd" stroke="#1e40af" stroke-width="2"/>
<text x="300" y="85" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">read N</text>
<line x1="300" y1="96" x2="300" y2="112" stroke="#334155" stroke-width="2" marker-end="url(#fa)"/>
<polygon points="300,116 385,150 300,184 215,150" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="148" font-size="14" text-anchor="middle" fill="#713f12" font-weight="bold">remainder of</text>
<text x="300" y="166" font-size="14" text-anchor="middle" fill="#713f12" font-weight="bold">N ÷ 2 = 0 ?</text>
<line x1="215" y1="150" x2="140" y2="150" stroke="#334155" stroke-width="2"/>
<line x1="140" y1="150" x2="140" y2="198" stroke="#334155" stroke-width="2" marker-end="url(#fa)"/>
<text x="175" y="142" font-size="15" fill="#166534" font-weight="bold">YES</text>
<line x1="385" y1="150" x2="460" y2="150" stroke="#334155" stroke-width="2"/>
<line x1="460" y1="150" x2="460" y2="198" stroke="#334155" stroke-width="2" marker-end="url(#fa)"/>
<text x="410" y="142" font-size="15" fill="#b91c1c" font-weight="bold">NO</text>
<polygon points="85,202 215,202 195,236 65,236" fill="#93c5fd" stroke="#1e40af" stroke-width="2"/>
<text x="140" y="225" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">write "even"</text>
<polygon points="405,202 535,202 515,236 385,236" fill="#93c5fd" stroke="#1e40af" stroke-width="2"/>
<text x="460" y="225" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">write "odd"</text>
<line x1="140" y1="236" x2="140" y2="270" stroke="#334155" stroke-width="2"/>
<line x1="460" y1="236" x2="460" y2="270" stroke="#334155" stroke-width="2"/>
<line x1="140" y1="270" x2="236" y2="270" stroke="#334155" stroke-width="2" marker-end="url(#fa)"/>
<line x1="460" y1="270" x2="364" y2="270" stroke="#334155" stroke-width="2" marker-end="url(#fa)"/>
<ellipse cx="300" cy="275" rx="60" ry="18" fill="#fca5a5" stroke="#991b1b" stroke-width="2"/>
<text x="300" y="281" font-size="16" text-anchor="middle" fill="#7f1d1d" font-weight="bold">END</text>
</svg>`
    },
    {
      type: `widget`, title: `Recognise the blocks`,
      widget: `labelDiagram`,
      caption: `Click on each block and choose its name.`,
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<ellipse cx="100" cy="60" rx="70" ry="28" fill="#86efac" stroke="#166534" stroke-width="3"/>
<polygon points="250,35 390,35 360,85 220,85" fill="#93c5fd" stroke="#1e40af" stroke-width="3"/>
<rect x="430" y="35" width="140" height="50" fill="#c4b5fd" stroke="#5b21b6" stroke-width="3"/>
<polygon points="200,150 280,195 200,240 120,195" fill="#fde68a" stroke="#a16207" stroke-width="3"/>
<line x1="340" y1="195" x2="440" y2="195" stroke="#334155" stroke-width="4"/>
<polygon points="440,185 460,195 440,205" fill="#334155"/>
</svg>`,
        spots: [
          { x: 100, y: 60, label: `Start / End` },
          { x: 305, y: 60, label: `Input / Output` },
          { x: 500, y: 60, label: `Process` },
          { x: 200, y: 195, label: `Decision` },
          { x: 400, y: 195, label: `Flow arrow` }
        ]
      }
    },
    {
      type: `quiz`, title: `Mini-quiz: the blocks`,
      questions: [
        { type: `mc`, q: `Which shape is used for a question with a yes / no answer?`, options: [`rectangle`, `diamond`, `oval`], answer: 1, explain: `The diamond is the decision block: two arrows come out of it.` },
        { type: `mc`, q: `"Read the number N" goes in an…`, options: [`input / output block (parallelogram)`, `start block`, `decision block`], answer: 0, explain: `Reading a piece of data is an input.` },
        { type: `tf`, q: `"Put in a bit of flour" is an unambiguous instruction.`, answer: false, explain: `"A bit" can be understood in many ways: a precise quantity is needed.` }
      ]
    },
    {
      type: `text`, title: `3. The three basic structures`,
      html: `<p>Every algorithm, even the most complicated, can be built by combining only <b>three structures</b>:</p>
<ol>
<li><b>Sequence</b>: instructions one after the other (first A, then B, then C).</li>
<li><b>Selection</b> (or choice): <b>IF</b> a condition is true do A, <b>OTHERWISE</b> do B. In the diagram it is the diamond with two paths that then join up again.</li>
<li><b>Iteration</b> (or loop, repetition): <b>REPEAT</b> some instructions while a condition is true, or a fixed number of times. In the diagram it is an arrow that <b>goes back</b>.</li>
</ol>
<p>This was proved by two Italian computer scientists, <b>Corrado Böhm</b> and <b>Giuseppe Jacopini</b>, in <b>1966</b>: it is the <b>Böhm-Jacopini theorem</b>, one of the foundations of programming.</p>
<p>⚠️ Beware of <b>infinite loops</b>: if the condition for leaving the loop never becomes true, the algorithm never ends!</p>`
    },
    {
      type: `svg`, title: `Sequence, selection, iteration`,
      caption: `The three "bricks" of programming: with these you can build any algorithm.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<defs><marker id="fb" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#334155"/></marker></defs>
<text x="100" y="30" font-size="17" text-anchor="middle" fill="#1e3a8a" font-weight="bold">SEQUENCE</text>
<rect x="50" y="50" width="100" height="40" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/><text x="100" y="76" font-size="16" text-anchor="middle" fill="#3b0764">A</text>
<line x1="100" y1="90" x2="100" y2="116" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<rect x="50" y="120" width="100" height="40" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/><text x="100" y="146" font-size="16" text-anchor="middle" fill="#3b0764">B</text>
<line x1="100" y1="160" x2="100" y2="186" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<rect x="50" y="190" width="100" height="40" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/><text x="100" y="216" font-size="16" text-anchor="middle" fill="#3b0764">C</text>
<text x="300" y="30" font-size="17" text-anchor="middle" fill="#1e3a8a" font-weight="bold">SELECTION</text>
<polygon points="300,50 360,85 300,120 240,85" fill="#fde68a" stroke="#a16207" stroke-width="2"/><text x="300" y="91" font-size="15" text-anchor="middle" fill="#713f12">cond?</text>
<line x1="240" y1="85" x2="225" y2="85" stroke="#334155" stroke-width="2"/><line x1="225" y1="85" x2="225" y2="146" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<line x1="360" y1="85" x2="375" y2="85" stroke="#334155" stroke-width="2"/><line x1="375" y1="85" x2="375" y2="146" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<text x="222" y="75" font-size="13" text-anchor="end" fill="#166534" font-weight="bold">yes</text><text x="378" y="75" font-size="13" fill="#b91c1c" font-weight="bold">no</text>
<rect x="190" y="150" width="70" height="40" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/><text x="225" y="176" font-size="16" text-anchor="middle" fill="#3b0764">A</text>
<rect x="340" y="150" width="70" height="40" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/><text x="375" y="176" font-size="16" text-anchor="middle" fill="#3b0764">B</text>
<path d="M225 190 L225 230 L300 230 M375 190 L375 230 L300 230" stroke="#334155" stroke-width="2" fill="none"/>
<line x1="300" y1="230" x2="300" y2="256" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<text x="500" y="30" font-size="17" text-anchor="middle" fill="#1e3a8a" font-weight="bold">ITERATION</text>
<rect x="450" y="60" width="100" height="40" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/><text x="500" y="86" font-size="16" text-anchor="middle" fill="#3b0764">A</text>
<line x1="500" y1="100" x2="500" y2="126" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<polygon points="500,130 560,165 500,200 440,165" fill="#fde68a" stroke="#a16207" stroke-width="2"/><text x="500" y="171" font-size="15" text-anchor="middle" fill="#713f12">done?</text>
<path d="M440 165 L420 165 L420 80 L446 80" stroke="#dc2626" stroke-width="2" fill="none" marker-end="url(#fb)"/>
<text x="415" y="125" font-size="13" text-anchor="end" fill="#b91c1c" font-weight="bold">no</text>
<line x1="500" y1="200" x2="500" y2="246" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<text x="510" y="230" font-size="13" fill="#166534" font-weight="bold">yes</text>
<text x="300" y="290" font-size="14" text-anchor="middle" fill="#334155">Böhm-Jacopini theorem (1966)</text>
</svg>`
    },
    {
      type: `example`, title: `Practical example: Euclid's algorithm for the GCD`,
      html: `<p>One of the oldest algorithms in the world (around 300 BC) finds the <b>Greatest Common Divisor</b> of two numbers A and B:</p>
<ol>
<li><b>Start</b>: read A and B.</li>
<li><b>While</b> B is not 0, repeat:
<ul><li>work out R = remainder of A ÷ B;</li><li>set A ← B and B ← R.</li></ul></li>
<li>Write A: it is the GCD. <b>End</b>.</li>
</ol>
<p><b>Let's try with A = 48 and B = 18:</b></p>
<table>
<tr><th>A</th><th>B</th><th>remainder A ÷ B</th></tr>
<tr><td>48</td><td>18</td><td>12</td></tr>
<tr><td>18</td><td>12</td><td>6</td></tr>
<tr><td>12</td><td>6</td><td>0</td></tr>
<tr><td><b>6</b></td><td>0</td><td>stop!</td></tr>
</table>
<p>GCD(48, 18) = <b>6</b>. It contains a <b>sequence</b>, a <b>loop</b> and a <b>condition</b>.</p>`
    },
    {
      type: `example`, title: `Practical example: crossing the road`,
      html: `<p>Draw (in your notebook) the flowchart of this algorithm:</p>
<ol>
<li>Start.</li>
<li>Arrive at the zebra crossing.</li>
<li>Is the pedestrian light green? <b>No</b> → wait and go back to check (loop). <b>Yes</b> → go on.</li>
<li>Look left and right: are cars coming? <b>Yes</b> → wait and check again. <b>No</b> → cross.</li>
<li>End.</li>
</ol>
<p>There are <b>two diamonds</b>, each with an arrow that goes back: two "wait until…" loops.</p>`
    },
    {
      type: `widget`, title: `Game: sequence, selection or iteration?`,
      widget: `classify`,
      caption: `Which structure does each instruction use?`,
      options: {
        groups: [`➡️ Sequence`, `🔀 Selection (if…)`, `🔁 Iteration (repeat…)`],
        items: [
          [`Open the book, then read the page`, 0], [`Switch on the PC, enter the password`, 0], [`Put on your socks and then your shoes`, 0],
          [`If it rains take an umbrella`, 1], [`If the mark is at least 6 write "pass"`, 1], [`If you are hungry eat an apple`, 1],
          [`Stir until the sugar dissolves`, 2], [`Do 10 push-ups`, 2], [`Repeat the poem until you know it`, 2]
        ]
      }
    },
    {
      type: `curiosity`, title: `Did you know… "algorithm" comes from the name of a Persian mathematician?`,
      html: `<p>Around <b>820 AD</b>, in Baghdad, in the "House of Wisdom", the mathematician <b>Muhammad ibn Musa al-Khwarizmi</b> was at work. He wrote a book on calculations with Indian numerals (our digits 0-9). When it was translated into Latin, his name became <i>Algoritmi</i>: "Dixit Algoritmi" = "so said al-Khwarizmi". The word <b>algebra</b> also comes from him (from <i>al-jabr</i>, in the title of another of his books). In Italy the Indo-Arabic numerals were spread by <b>Fibonacci</b> in 1202.</p>`
    },
    {
      type: `curiosity`, title: `Did you know… the first programmer was a nineteenth-century woman?`,
      html: `<p>In <b>1843</b> the English mathematician <b>Ada Lovelace</b> wrote an algorithm to make Charles Babbage's <b>Analytical Engine</b>, a mechanical computer that was never completed, calculate the "Bernoulli numbers". It is considered the first program in history! Ada also guessed that such a machine could one day compose music. The programming language <b>Ada</b> is named after her.</p>`
    },
    {
      type: `alternatives`, title: `Other ways to understand it`,
      intro: `If flowcharts seem complicated, try these paths.`,
      tabs: [
        {
          label: `🤖 The human robot (unplugged coding)`,
          html: `<p>Play in pairs: one is the <b>programmer</b>, the other the <b>robot</b>. The robot knows only 4 commands: <b>FORWARD</b> (one step), <b>TURN RIGHT</b>, <b>TURN LEFT</b>, <b>PICK UP</b>.</p>
<p>The programmer writes on a sheet the algorithm to make the robot get to the pencil case on the teacher's desk and pick it up. The robot carries out <b>exactly</b> what is written, even if it walks into the wall! 😄</p>
<p>In Italy this type of activity was spread by <b>CodyRoby</b>, invented by Professor Alessandro Bogliolo of the University of Urbino, promoter of the Code Week.</p>`
        },
        {
          label: `🧩 With Scratch blocks`,
          html: `<p>In <b>Scratch</b> (created in <b>2007</b> at MIT in Boston) you don't write code: you snap together <b>coloured blocks</b> like bricks.</p>
<ul>
<li>blocks one under the other are the <b>sequence</b>;</li>
<li>the <b>"if … then … else"</b> block is the selection (the diamond!);</li>
<li>the <b>"repeat 10 times"</b> and <b>"repeat until"</b> blocks are the iteration (the arrow that goes back).</li>
</ul>
<p>Every Scratch program can be turned into a flowchart, and vice versa!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f8fafc"/>
<rect x="60" y="15" width="220" height="36" rx="16" fill="#facc15"/><text x="170" y="39" font-size="16" text-anchor="middle" fill="#422006" font-weight="bold">when 🏁 clicked</text>
<rect x="60" y="55" width="200" height="34" rx="6" fill="#f59e0b"/><text x="160" y="78" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">repeat 4 times</text>
<rect x="60" y="89" width="20" height="80" fill="#f59e0b"/>
<rect x="80" y="95" width="180" height="32" rx="6" fill="#3b82f6"/><text x="170" y="117" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">move 100 steps</text>
<rect x="80" y="131" width="180" height="32" rx="6" fill="#3b82f6"/><text x="170" y="153" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">turn 90 degrees</text>
<rect x="60" y="169" width="200" height="22" rx="6" fill="#f59e0b"/>
<rect x="360" y="40" width="180" height="140" fill="none" stroke="#3b82f6" stroke-width="5"/>
<text x="450" y="210" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">result: a square!</text>
</svg>`
        },
        {
          label: `🍝 Grandma's recipe`,
          html: `<p>A recipe is an algorithm for people:</p>
<ul>
<li>the <b>ingredients</b> are the <b>inputs</b>;</li>
<li>the <b>steps</b> ("boil the water", "throw in the pasta") are the <b>processes</b>;</li>
<li>"<b>taste: if</b> it is bland add salt" is a <b>selection</b>;</li>
<li>"<b>stir until</b> the cream thickens" is an <b>iteration</b>;</li>
<li>the <b>finished dish</b> is the <b>output</b>.</li>
</ul>
<p>But grandma writes "salt to taste": for a computer it would be an <b>ambiguous</b> instruction!</p>`
        },
        {
          label: `🔢 Euclid with numbers`,
          html: `<p>Try carrying out Euclid's algorithm yourself like a computer, with divisions with remainder. On the line you see the "jumps" of 18 inside 48: two jumps reach 36, the remainder is 12. Then we go on with 18 and 12…</p>`,
          widget: `numberLine`,
          options: { min: 0, max: 50, step: 2, marks: [18, 36, 48] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Map: from algorithm to program`,
      nodes: [
        { id: `prob`, label: `Problem`, x: 50, y: 6, color: `#ef4444`, html: `A situation to be solved.`, why: `Every algorithm is born from a problem: calculating, sorting, searching, deciding. The first step is to <b>analyse it</b>: what data do I have (input)? What do I want to obtain (output)?` },
        { id: `alg`, label: `Algorithm`, x: 50, y: 28, color: `#3b82f6`, html: `A finite sequence of unambiguous instructions.`, why: `The word comes from <b>al-Khwarizmi</b> (ninth century). But algorithms are older: the Babylonians had calculation procedures on clay tablets (around 1800 BC) and Euclid described the one for the GCD around 300 BC.` },
        { id: `prop`, label: `Properties`, x: 15, y: 28, color: `#0ea5e9`, html: `Finite, unambiguous, executable, general.`, why: `In <b>1936</b> the English mathematician <b>Alan Turing</b> gave a precise definition of a "procedure that a machine can carry out" (the Turing machine): it is the theoretical basis of computers.` },
        { id: `fc`, label: `Flowchart`, x: 22, y: 58, color: `#f59e0b`, html: `Graphic representation with blocks and arrows.`, why: `The first "flow process charts" were presented by the engineers <b>Frank and Lillian Gilbreth</b> in 1921 to organise work in factories. In 1947 <b>Goldstine and von Neumann</b> used them for the programs of the first computers.` },
        { id: `pseudo`, label: `Pseudocode`, x: 50, y: 58, color: `#a855f7`, html: `The algorithm written in simple, structured words (IF…THEN, REPEAT…).`, why: `It is halfway between human language and a programming language: it lets you think about the algorithm without worrying about syntax.` },
        { id: `strutt`, label: `Sequence, selection, iteration`, x: 82, y: 40, color: `#22c55e`, html: `The three basic structures.`, why: `The <b>Böhm-Jacopini theorem</b> (1966) proves that these three structures are enough to write any algorithm. From this comes "structured programming".` },
        { id: `prog`, label: `Program`, x: 78, y: 78, color: `#14b8a6`, html: `The algorithm translated into a language for the computer.`, why: `Programming languages (Scratch, Python, JavaScript…) translate algorithms into instructions that the processor understands. The first program is attributed to <b>Ada Lovelace</b> (1843).` },
        { id: `ese`, label: `Executor`, x: 40, y: 88, color: `#64748b`, html: `Whoever carries it out: person, robot, computer.`, why: `The executor must know every instruction. That is why an algorithm for a computer has to be much more precise than one for a person, who uses common sense.` }
      ],
      edges: [
        [`prob`, `alg`, `is solved with`], [`alg`, `prop`, `must have`], [`alg`, `fc`, `is drawn with`], [`alg`, `pseudo`, `is written in`],
        [`alg`, `strutt`, `is made of`], [`pseudo`, `prog`, `is translated into`], [`fc`, `ese`, `guides`], [`prog`, `ese`, `is run by`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: structures and loops`,
      questions: [
        { type: `mc`, q: `"Repeat until the bottle is full" is an example of…`, options: [`sequence`, `selection`, `iteration`], answer: 2, explain: `It is a loop: it repeats until the condition changes.` },
        { type: `num`, q: `With Euclid's algorithm, what is the GCD of 30 and 12?`, answer: 6, tol: 0, explain: `30 ÷ 12 remainder 6; 12 ÷ 6 remainder 0 → GCD = 6.` },
        { type: `mc`, q: `Who proved that sequence, selection and iteration are enough?`, options: [`Böhm and Jacopini`, `Euclid`, `Ada Lovelace`], answer: 0, explain: `Corrado Böhm and Giuseppe Jacopini, in 1966.` }
      ]
    }
  ],
  glossary: [
    { t: `Algorithm`, d: `A finite sequence of unambiguous instructions that solves a problem.` },
    { t: `Executor`, d: `Who (or what) carries out the algorithm: person, robot, computer.` },
    { t: `Flowchart`, d: `A drawing of an algorithm with blocks (oval, parallelogram, rectangle, diamond) and arrows.` },
    { t: `Input / Output`, d: `Data going in / results coming out.` },
    { t: `Sequence`, d: `Instructions carried out one after the other.` },
    { t: `Selection`, d: `A choice between two paths depending on a condition (if… otherwise…).` },
    { t: `Iteration (loop)`, d: `Repeating instructions a number of times or while a condition holds.` },
    { t: `Infinite loop`, d: `A loop that never ends because the exit condition never happens.` },
    { t: `Pseudocode`, d: `An algorithm written in simple, structured language.` },
    { t: `Coding`, d: `Programming: writing instructions for a computer.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Which is NOT a property of an algorithm?`, options: [`finite`, `ambiguous`, `executable`], answer: 1, explain: `An algorithm must be NOT ambiguous.` },
      { type: `mc`, q: `In a flowchart the oval shows…`, options: [`start and end`, `a decision`, `a calculation`], answer: 0, explain: `Oval = Start / End.` },
      { type: `mc`, q: `From a decision diamond come out…`, options: [`one arrow`, `two arrows (yes / no)`, `no arrows`], answer: 1, explain: `One for yes, one for no.` },
      { type: `tf`, q: `"Sum ← A + B" goes in a process rectangle.`, answer: true, explain: `It is a calculation: rectangle.` },
      { type: `order`, q: `Put the algorithm for brushing your teeth in order.`, items: [`Take the toothbrush`, `Put on the toothpaste`, `Brush your teeth for 2 minutes`, `Rinse your mouth`, `Wash the toothbrush`], explain: `First you prepare the toothbrush, then you brush, finally you rinse and wash the toothbrush.` },
      { type: `mc`, q: `"If the temperature goes above 25 °C switch on the fan" is…`, options: [`a sequence`, `a selection`, `a loop`], answer: 1, explain: `There is a condition with a choice: selection.` },
      { type: `text`, q: `What is a loop that never ends called?`, answer: [`infinite loop`, `an infinite loop`, `endless loop`, `infinite`], explain: `An infinite loop.` },
      { type: `num`, q: `Use Euclid's algorithm: GCD of 84 and 36?`, answer: 12, tol: 0, explain: `84 ÷ 36 remainder 12; 36 ÷ 12 remainder 0 → GCD = 12.` },
      { type: `mc`, q: `The word "algorithm" comes from…`, options: [`a Persian mathematician, al-Khwarizmi`, `a Greek word meaning number`, `the name of a computer`], answer: 0, explain: `From the Latin "Algoritmi", the name of al-Khwarizmi (ninth century).` },
      { type: `tf`, q: `A computer understands ambiguous instructions by using common sense.`, answer: false, explain: `The computer carries out instructions literally: they must be precise.` },
      { type: `mc`, q: `An algorithm reads a number and repeats "write hello" that number of times. If the input is 3, how many times does it write "hello"?`, options: [`1`, `3`, `endlessly`], answer: 1, explain: `The loop repeats 3 times.` },
      { type: `mc`, q: `Who is considered the first programmer in history?`, options: [`Marie Curie`, `Ada Lovelace`, `Rita Levi-Montalcini`], answer: 1, explain: `Ada Lovelace, 1843.` }
    ],
    gen: [[`gcd`, 2]]
  }
});
