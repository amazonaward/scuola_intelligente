TOPIC('en', {
  id: `l3-art-prospettiva`,
  title: `Technical drawing: perspective`,
  intro: `Why do two parallel railway tracks seem to meet on the horizon? Why can a painted room look deep on a flat sheet of paper? <b>Perspective</b> is the geometric method that Renaissance artists invented to represent three-dimensional space on a flat surface, as an eye fixed at one point would see it. In this lesson you will learn to actually draw it: <b>one-point perspective</b> (frontal), with a single vanishing point, and <b>two-point perspective</b> (angular), with two vanishing points. You need a pencil, a ruler and a little patience. ✏️📐`,
  minutes: 55,
  sections: [
    {
      type: `text`, title: `1. What perspective is`,
      html: `<p>In the Renaissance <b>Brunelleschi</b> (around 1415-1420) and <b>Alberti</b> (<i>De pictura</i>, 1435) found the rule: if the picture is like a transparent <b>window</b>, what you see through it can be traced. Every point in space corresponds to the point where the <b>visual ray</b> going from the eye to that point <b>cuts the picture plane</b>. Later <b>Piero della Francesca</b> (<i>De prospectiva pingendi</i>) turned it into a true geometry treatise, and <b>Dürer</b> (1525) described instruments for drawing it. It is a <b>central projection</b>: all the rays start from a single point, the eye.</p>
<p>The basic elements:</p>
<ul>
<li><b>Viewpoint</b> (PV, station point): the position of the observer's eye;</li>
<li><b>Picture plane</b> (Q): the vertical plane on which you draw (the sheet);</li>
<li><b>Ground plane</b>: the horizontal plane of the ground on which the objects stand;</li>
<li><b>Ground line</b> (LT): the line where the picture plane meets the ground plane;</li>
<li><b>Horizon line</b> (LO): the horizontal line on the picture plane that lies <b>at the observer's eye level</b>;</li>
<li><b>Principal point</b> (PP): the projection of the viewpoint onto the picture plane, on the horizon line;</li>
<li><b>Vanishing point</b> (F): the point on the horizon where the images of parallel lines receding into the distance converge.</li>
</ul>`
    },
    {
      type: `svg`, title: `A corridor in one-point perspective`,
      caption: `The lines in space perpendicular to the picture plane (edges of the floor, walls and ceiling) converge at the vanishing point F, which lies on the horizon line, at eye level. The transverse lines stay horizontal.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f0f9ff"/><polygon points="140,260 460,260 460,20 140,20" fill="#e0f2fe" stroke="#075985" stroke-width="3"/><line x1="140" y1="20" x2="300" y2="110" stroke="#0369a1" stroke-width="3"/><line x1="460" y1="20" x2="300" y2="110" stroke="#0369a1" stroke-width="3"/><line x1="140" y1="260" x2="300" y2="110" stroke="#0369a1" stroke-width="3"/><line x1="460" y1="260" x2="300" y2="110" stroke="#0369a1" stroke-width="3"/><line x1="188" y1="215" x2="412" y2="215" stroke="#0ea5e9" stroke-width="2"/><line x1="222.1" y1="183" x2="377.9" y2="183" stroke="#0ea5e9" stroke-width="2"/><line x1="246.7" y1="160" x2="353.3" y2="160" stroke="#0ea5e9" stroke-width="2"/><line x1="263.7" y1="144" x2="336.3" y2="144" stroke="#0ea5e9" stroke-width="2"/><line x1="275.5" y1="133" x2="324.5" y2="133" stroke="#0ea5e9" stroke-width="2"/><line x1="0" y1="110" x2="600" y2="110" stroke="#dc2626" stroke-width="2" stroke-dasharray="8 6"/><line x1="0" y1="260" x2="600" y2="260" stroke="#16a34a" stroke-width="3"/><circle cx="300" cy="110" r="6" fill="#dc2626"/><text x="300" y="96" font-size="16" font-weight="bold" fill="#991b1b" text-anchor="middle">F</text><text x="10" y="104" font-size="14" fill="#991b1b">horizon line (LO)</text><text x="10" y="280" font-size="14" fill="#166534">ground line (LT)</text><text x="590" y="280" font-size="14" fill="#075985" text-anchor="end">chequered floor</text></svg>`
    },
    {
      type: `text`, title: `2. The basic rules`,
      html: `<p>The rules for drawing in perspective are few and apply to every construction:</p>
<ol>
<li><b>The horizon line is at eye level</b>: everything above it is seen from below, everything below it is seen from above. An object whose top face is at eye level appears as a line (you only see the side).</li>
<li><b>Lines that are parallel to each other and not parallel to the picture plane converge at the same vanishing point</b>, which lies on the horizon if they are horizontal.</li>
<li><b>Lines parallel to the picture plane</b> stay parallel to each other and have no vanishing point: verticals stay vertical, horizontals parallel to the picture plane stay horizontal.</li>
<li><b>The farther away an object is, the smaller it looks</b>, and distances get "compressed" as they approach the horizon.</li>
<li><b>A segment lying on the picture plane</b> (that is, on the ground line) appears at <b>true size</b>: it is the reference measurement.</li>
</ol>`
    },
    {
      type: `text`, title: `3. One-point perspective: one vanishing point`,
      html: `<p>In <b>one-point perspective</b> (or frontal perspective) one side of the object is <b>parallel to the picture plane</b>: the edges perpendicular to the picture plane (the "depths") all converge at the <b>main vanishing point F</b>, which coincides with the principal point PP; the other edges stay horizontal or vertical. It is the perspective of a corridor, of a street seen from the middle, of a square.</p>
<p><b>How to draw a horizontal square (distance point method):</b></p>
<ol>
<li>Draw the <b>horizon line</b> and the <b>ground line</b> below it. Mark the vanishing point <b>F</b> on the horizon.</li>
<li>On the ground line mark the side <b>AB</b> of the square (real measurement). Join A and B to F: these are the <b>receding lines</b> of the side edges.</li>
<li>On the horizon, to the right of F, mark the <b>distance point D</b>, at a distance from F equal to the observer's distance from the picture plane (the principal distance). The 45° diagonals in space converge at D (and at D', symmetrical on the left).</li>
<li>Join <b>A to D</b>: this line cuts the receding line from B to F at point <b>C</b>, which is the back corner of the square.</li>
<li>Through C draw the <b>horizontal</b> as far as the receding line from A to F: you find the fourth corner <b>E</b>. The quadrilateral ABCE is the image of the square.</li>
</ol>
<p>The principal distance controls the "distortion": if it is small (observer close by) the perspective is strong and converges quickly; if it is large it is flatter, like a photograph taken with a telephoto lens.</p>`
    },
    {
      type: `svg`, title: `The square with the distance point`,
      caption: `From corner A a line is drawn towards the distance point D: it meets the receding line B-F at C, and a horizontal through C finds E. In purple, the diagonal AC (and the symmetrical one towards D').`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#fffbeb"/><line x1="0" y1="90" x2="600" y2="90" stroke="#dc2626" stroke-width="2" stroke-dasharray="8 6"/><line x1="0" y1="250" x2="600" y2="250" stroke="#16a34a" stroke-width="3"/><line x1="200" y1="250" x2="300" y2="90" stroke="#a16207" stroke-width="2" stroke-dasharray="4 4"/><line x1="320" y1="250" x2="300" y2="90" stroke="#a16207" stroke-width="2" stroke-dasharray="4 4"/><line x1="200" y1="250" x2="500" y2="90" stroke="#7c3aed" stroke-width="2"/><line x1="320" y1="250" x2="100" y2="90" stroke="#7c3aed" stroke-width="2"/><polygon points="200,250 320,250 312.5,190 237.5,190" fill="#fde68a" stroke="#78350f" stroke-width="4" fill-opacity="0.8"/><circle cx="300" cy="90" r="6" fill="#dc2626"/><circle cx="500" cy="90" r="6" fill="#7c3aed"/><circle cx="100" cy="90" r="6" fill="#7c3aed"/><text x="300" y="76" font-size="16" font-weight="bold" fill="#991b1b" text-anchor="middle">F</text><text x="500" y="76" font-size="16" font-weight="bold" fill="#5b21b6" text-anchor="middle">D</text><text x="100" y="76" font-size="16" font-weight="bold" fill="#5b21b6" text-anchor="middle">D'</text><text x="190" y="270" font-size="16" fill="#78350f" text-anchor="end">A</text><text x="330" y="270" font-size="16" fill="#78350f">B</text><text x="322" y="188" font-size="16" fill="#78350f">C</text><text x="228" y="188" font-size="16" fill="#78350f" text-anchor="end">E</text><text x="590" y="108" font-size="14" fill="#991b1b" text-anchor="end">horizon</text><text x="590" y="290" font-size="14" fill="#166534" text-anchor="end">ground line, AB = side</text></svg>`
    },
    {
      type: `example`, title: `Example: from the square to the cube`,
      html: `<p>Once you have found the square ABCE on the ground, the <b>cube</b> is easy: from the four base corners you raise the <b>vertical</b> edges. Edge AA' (the nearest one, on the ground line) is at true size and is as long as AB. Then you join A' and B' to F to find the top sides, and you carry the verticals up from C and E until they meet the receding lines A'-F and B'-F. If the horizon line is <b>above</b> the cube, you also see the top face; if it is <b>below</b>, you see the underside; if it passes <b>through</b> the cube, the top or bottom face shrinks to a line.</p>`
    },
    {
      type: `quiz`, title: `Mini-quiz: elements and one-point perspective`,
      questions: [
        { type: `mc`, q: `Where is the horizon line?`, options: [`At the observer's eye level`, `On the ground line`, `Always halfway up the sheet`], answer: 0, explain: `It is the line on the picture plane at the height of the viewpoint.` },
        { type: `tf`, q: `In one-point perspective the lines perpendicular to the picture plane converge at a single vanishing point.`, answer: true, explain: `It is the main vanishing point.` },
        { type: `mc`, q: `How does a vertical line (parallel to the picture plane) appear in perspective?`, options: [`Vertical`, `Tilted towards the vanishing point`, `Curved`], answer: 0, explain: `Lines parallel to the picture plane stay parallel.` }
      ]
    },
    {
      type: `text`, title: `4. Two-point perspective: two vanishing points`,
      html: `<p>In <b>two-point perspective</b> (or angular perspective) the object is <b>rotated</b>: none of its vertical faces is parallel to the picture plane, and the nearest edge comes towards us. A box, a house seen from the corner, a building: two sets of horizontal edges, each with its own vanishing point, <b>F1</b> and <b>F2</b>, both on the horizon line. The vertical edges stay <b>vertical</b> (they are parallel to the picture plane).</p>
<p><b>Constructing a cube (rectangular box) in two-point perspective:</b></p>
<ol>
<li>Draw the horizon line and mark F1 on the left and F2 on the right (well apart, even off the sheet, to avoid distortion).</li>
<li>Draw the <b>nearest vertical edge</b>, as you like: its length is real (it lies on the picture plane).</li>
<li>Join the two ends of the edge to F1 and to F2: you get the <b>receding lines</b> of the two visible faces.</li>
<li>Choose the width of the two faces by drawing <b>two verticals</b>, one on the left and one on the right: the points where they meet the receding lines are the corners.</li>
<li>For the back top corner, join the two top side corners to F2 and F1 respectively (where the two receding lines cross): you have closed the top face.</li>
</ol>
<p><b>Correctness condition</b>: if the real edges are at right angles to each other, the directions from the eye to the two vanishing points form a right angle: the viewpoint lies on the <b>semicircle with diameter F1F2</b> (in the horizontal plane). That is why vanishing points that are too close together produce an angle that is too sharp and a distorted drawing: it is better to keep them far apart.</p>
<p>For very tall buildings, or ones seen from below, you can add a <b>third (vertical) vanishing point</b> so that the verticals also converge upwards or downwards: this is three-point perspective, used in comics and in drawings of skyscrapers.</p>`
    },
    {
      type: `svg`, title: `A cube in two-point perspective`,
      caption: `Two vanishing points F1 and F2 on the horizon. The nearest vertical edge stays vertical and the two sides converge towards F1 and F2. The cube is below the horizon: you can see the top face.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f5f3ff"/><line x1="0" y1="60" x2="600" y2="60" stroke="#dc2626" stroke-width="2" stroke-dasharray="8 6"/><line x1="300" y1="130" x2="40" y2="60" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="4 4"/><line x1="300" y1="130" x2="560" y2="60" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="4 4"/><line x1="300" y1="250" x2="40" y2="60" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="4 4"/><line x1="300" y1="250" x2="560" y2="60" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="4 4"/><polygon points="300,130 300,250 170,155 170,95" fill="#ddd6fe" stroke="#4c1d95" stroke-width="3"/><polygon points="300,130 300,250 430,155 430,95" fill="#c4b5fd" stroke="#4c1d95" stroke-width="3"/><polygon points="300,130 170,95 300,83.3 430,95" fill="#ede9fe" stroke="#4c1d95" stroke-width="3"/><circle cx="40" cy="60" r="6" fill="#dc2626"/><circle cx="560" cy="60" r="6" fill="#dc2626"/><text x="40" y="44" font-size="16" font-weight="bold" fill="#991b1b" text-anchor="middle">F1</text><text x="560" y="44" font-size="16" font-weight="bold" fill="#991b1b" text-anchor="middle">F2</text><text x="300" y="50" font-size="14" fill="#991b1b" text-anchor="middle">horizon line</text><text x="292" y="270" font-size="14" fill="#4c1d95" text-anchor="end">vertical edge</text></svg>`
    },
    {
      type: `example`, title: `Example: choosing the height of the horizon`,
      html: `<p>Photograph or draw the same box from three heights: from the ground (low horizon), standing up (horizon at about one and a half metres), from a second-floor window (high horizon). With a low horizon the object looks imposing and monumental, and you see almost only its front; with a medium horizon you get the most natural effect; with a high horizon (a view from above) you see the top and the object looks small and readable, like on a map. Renaissance painters chose the horizon carefully: Mantegna, in the oculus of the <i>Camera degli Sposi</i> (Bridal Chamber), uses an extremely low viewpoint ("di sotto in su", from below upwards) to create the illusion of a sky opening in the ceiling. Leonardo, in the <i>Last Supper</i>, places it at the height of Christ's face.</p>`
    },
    {
      type: `widget`, title: `Timeline of perspective`,
      widget: `timeline`,
      options: { events: [ { year: 1415, label: `Brunelleschi's experiment (c. 1415-20)`, icon: `🔬` }, { year: 1426, label: `Masaccio's Holy Trinity (c. 1426-28)`, icon: `🎨` }, { year: 1435, label: `Alberti writes De pictura`, icon: `📖` }, { year: 1474, label: `Piero writes De prospectiva pingendi (c. 1470-80)`, icon: `📐` }, { year: 1495, label: `Leonardo's Last Supper (c. 1494-98)`, icon: `🍷` }, { year: 1511, label: `Raphael's School of Athens`, icon: `🏛️` }, { year: 1525, label: `Dürer: Underweysung der Messung`, icon: `✏️` } ], unit: `years` },
      caption: `Dates AD, some approximate.`
    },
    {
      type: `curiosity`, title: `Did you know… perspective has a "flaw"?`,
      html: `<p>Linear perspective is only correct if you look at the drawing from <b>one precise point</b> (the viewpoint). If you move a long way, the shapes become distorted: you can see this in the <b>illusionistic ceilings</b> painted by Andrea Pozzo in the church of Sant'Ignazio in Rome, where a disc on the floor marks the exact spot from which the painted dome looks real. Seen from anywhere else, it looks distorted. A wide-angle photograph also stretches faces at the edges: it is the same geometric effect.</p>`
    },
    {
      type: `curiosity`, title: `Did you know… perspective is not the only way to represent space?`,
      html: `<p>In many traditions, such as medieval European, Chinese and Japanese, or Byzantine art, space is not rendered with a vanishing point: important objects are bigger than minor ones, and walls are "opened up" to show several sides at once. Chinese painting uses parallel lines that do not converge, or a "bird's-eye" view. In modern art, Cubism (Picasso, Braque) deliberately rejected the single viewpoint, showing the same object from several sides at the same time.</p>`
    },
    {
      type: `remember`, title: `Key points`,
      html: `<ul><li><b>Elements</b>: viewpoint, picture plane, ground line, horizon line (eye level), vanishing point.</li><li><b>One-point</b>: one vanishing point; the square is constructed with the <b>distance point</b> (45° diagonals).</li><li><b>Two-point</b>: two vanishing points F1, F2 on the horizon; verticals stay vertical; the viewpoint lies on the semicircle with diameter F1F2.</li><li>A segment on the ground line is at true size.</li></ul>`
    },
    {
      type: `alternatives`, title: `Other ways to understand it`,
      intro: `Perspective is understood by looking, tracing and recognising.`,
      tabs: [
        {
          label: `🪟 Trace on a window`,
          html: `<p>Alberti's experiment: stand still in front of a window, close one eye and with a marker trace on the glass the outlines of what you see outside (street, buildings, houses). You have just made a perspective drawing: the lines of the streets converge towards the horizon, the vertical lines of the buildings stay vertical. Then copy it onto paper and compare it with the rules: the horizon line is at the height of your eye, and the vanishing points are where the streets seem to meet.</p>`
        },
        {
          label: `🏷️ Label the drawing`,
          html: `<p>Tap a point of the corridor and choose the correct name.</p>`,
          widget: `labelDiagram`,
          options: { svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f0f9ff"/><polygon points="140,260 460,260 460,20 140,20" fill="#e0f2fe" stroke="#075985" stroke-width="3"/><line x1="140" y1="20" x2="300" y2="110" stroke="#0369a1" stroke-width="3"/><line x1="460" y1="20" x2="300" y2="110" stroke="#0369a1" stroke-width="3"/><line x1="140" y1="260" x2="300" y2="110" stroke="#0369a1" stroke-width="3"/><line x1="460" y1="260" x2="300" y2="110" stroke="#0369a1" stroke-width="3"/><line x1="188" y1="215" x2="412" y2="215" stroke="#0ea5e9" stroke-width="2"/><line x1="222.1" y1="183" x2="377.9" y2="183" stroke="#0ea5e9" stroke-width="2"/><line x1="246.7" y1="160" x2="353.3" y2="160" stroke="#0ea5e9" stroke-width="2"/><line x1="263.7" y1="144" x2="336.3" y2="144" stroke="#0ea5e9" stroke-width="2"/><line x1="275.5" y1="133" x2="324.5" y2="133" stroke="#0ea5e9" stroke-width="2"/><line x1="0" y1="110" x2="600" y2="110" stroke="#dc2626" stroke-width="2" stroke-dasharray="8 6"/><line x1="0" y1="260" x2="600" y2="260" stroke="#16a34a" stroke-width="3"/><circle cx="300" cy="110" r="6" fill="#dc2626"/><text x="300" y="96" font-size="16" font-weight="bold" fill="#991b1b" text-anchor="middle">F</text><text x="10" y="104" font-size="14" fill="#991b1b">horizon line (LO)</text><text x="10" y="280" font-size="14" fill="#166534">ground line (LT)</text><text x="590" y="280" font-size="14" fill="#075985" text-anchor="end">chequered floor</text></svg>`, spots: [ { x: 300, y: 110, label: `Vanishing point` }, { x: 60, y: 110, label: `Horizon line` }, { x: 60, y: 260, label: `Ground line` }, { x: 220, y: 185, label: `Converging line` }, { x: 300, y: 160, label: `Horizontal transverse line` } ] }
        },
        {
          label: `🧩 One-point or two-point?`,
          html: `<p>Sort the features.</p>`,
          widget: `classify`,
          options: { groups: [`One-point`, `Two-point`], items: [[`A single vanishing point`, 0], [`Two vanishing points`, 1], [`One face parallel to the picture plane`, 0], [`Object seen from the corner`, 1], [`Distance point for the diagonals`, 0], [`Viewpoint on the semicircle F1F2`, 1], [`Corridor seen from the front`, 0]] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Map: perspective`,
      nodes: [
        { id: `pro`, label: `Perspective`, x: 50, y: 6, color: `#64748b`, html: `Projection of space onto a plane from a single viewpoint.`, why: `It was born in the Renaissance as an application of geometry to art: the picture is a window, and the visual rays cut its plane.` },
        { id: `ele`, label: `Elements`, x: 16, y: 30, color: `#f59e0b`, html: `PV, picture plane, LT, LO, F.`, why: `They fix the position of the observer and of the object relative to the picture plane.` },
        { id: `cen`, label: `One-point`, x: 42, y: 34, color: `#22c55e`, html: `One vanishing point.`, why: `One face is parallel to the picture plane: the depths converge at the principal point.` },
        { id: `acc`, label: `Two-point`, x: 68, y: 34, color: `#ec4899`, html: `Two vanishing points.`, why: `The object is rotated: two horizontal directions, two vanishing points on the horizon.` },
        { id: `tre`, label: `Three-point`, x: 90, y: 30, color: `#a855f7`, html: `The verticals converge too.`, why: `Used for tall buildings or ones seen from below/above, when the picture plane is tilted.` },
        { id: `dis`, label: `Distance point`, x: 24, y: 64, color: `#0ea5e9`, html: `45° diagonals.`, why: `Since the angle is known, this point on the horizon makes it possible to measure depth.` },
        { id: `ver`, label: `Verticals`, x: 52, y: 66, color: `#ef4444`, html: `They stay vertical.`, why: `They are parallel to the picture plane and so have no vanishing point.` },
        { id: `ste`, label: `History`, x: 82, y: 64, color: `#14b8a6`, html: `Brunelleschi, Alberti, Piero, Dürer.`, why: `From the discovery (c. 1415) to the theory (1435) to the treatise (Piero).` },
        { id: `eff`, label: `Artistic use`, x: 50, y: 92, color: `#3b82f6`, html: `Choice of horizon and viewpoint.`, why: `A low horizon gives monumentality, a high one gives a panorama.` }
      ],
      edges: [[`pro`, `ele`, `based on`], [`pro`, `cen`, `case`], [`pro`, `acc`, `case`], [`pro`, `tre`, `case`], [`cen`, `dis`, `uses`], [`acc`, `ver`, `keeps`], [`pro`, `ste`, `born`], [`ste`, `eff`, `leads to`], [`ver`, `eff`, `leads to`]]
    },
    {
      type: `quiz`, title: `Mini-quiz: two-point perspective`,
      questions: [
        { type: `mc`, q: `How many vanishing points does a cube seen from the corner have (two-point perspective, with vertical edges)?`, options: [`Two`, `One`, `Four`], answer: 0, explain: `Two, F1 and F2, on the horizon.` },
        { type: `tf`, q: `In two-point perspective the vertical edges converge downwards.`, answer: false, explain: `They stay vertical, because they are parallel to the picture plane.` },
        { type: `mc`, q: `Where are F1 and F2?`, options: [`On the horizon line`, `On the ground line`, `On the edge of the sheet`], answer: 0, explain: `They are points on the horizon.` }
      ]
    }
  ],
  glossary: [
    { t: `Viewpoint`, d: `The position of the observer's eye (also called station point).` },
    { t: `Picture plane`, d: `The vertical plane on which the perspective is drawn.` },
    { t: `Ground plane`, d: `The horizontal plane on which the objects stand.` },
    { t: `Ground line`, d: `The intersection of the picture plane and the ground plane.` },
    { t: `Horizon line`, d: `The line on the picture plane at the observer's eye level.` },
    { t: `Principal point`, d: `The orthogonal projection of the viewpoint onto the picture plane.` },
    { t: `Vanishing point`, d: `The point where the images of parallel lines not parallel to the picture plane converge.` },
    { t: `Distance point`, d: `The point on the horizon where lines at 45° to the picture plane converge.` },
    { t: `One-point perspective`, d: `Perspective with a single main vanishing point (frontal).` },
    { t: `Two-point perspective`, d: `Perspective with two vanishing points (angular).` },
    { t: `Visual ray`, d: `An imaginary line going from the eye to a point on the object.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `What is the ground line?`, options: [`The intersection of the picture plane and the ground plane`, `The line at eye level`, `The edge of the sheet`], answer: 0, explain: `The horizon line is something else.` },
      { type: `mc`, q: `The horizon line is at the height of which part of the body?`, options: [`The observer's eyes`, `The feet`, `The heart`], answer: 0, explain: `It is also called the height of the viewpoint.` },
      { type: `tf`, q: `In one-point perspective each face of the cube has a different vanishing point.`, answer: false, explain: `There is only one, the main vanishing point.` },
      { type: `num`, q: `How many vanishing points on the horizon do you need for a rectangular box in two-point perspective?`, answer: 2, tol: 0, explain: `Two: F1 and F2.` },
      { type: `text`, q: `What is the name of the point on the horizon where the 45° diagonals converge?`, answer: [`distance point`, `the distance point`, `point of distance`], explain: `It is the distance point.` },
      { type: `order`, q: `Put in order the steps for drawing a square in one-point perspective.`, items: [`Draw the horizon and the ground line`, `Mark side AB and join it to F`, `Mark the distance point D`, `Join A to D and find C`, `Draw the horizontal through C`], explain: `From the base lines to the back corners.` },
      { type: `mc`, q: `Which segment is at true size?`, options: [`The one on the ground line`, `The one near the horizon`, `The distant vertical one`], answer: 0, explain: `A segment on the picture plane is not reduced.` },
      { type: `mc`, q: `Who wrote De pictura in 1435?`, options: [`Leon Battista Alberti`, `Piero della Francesca`, `Dürer`], answer: 0, explain: `Alberti, Florence.` },
      { type: `tf`, q: `Vertical lines stay vertical in two-point perspective.`, answer: true, explain: `They are parallel to the picture plane.` },
      { type: `mc`, q: `In two-point perspective, where is the viewpoint if the edges are at right angles?`, options: [`On the semicircle with diameter F1F2`, `On the principal point`, `On the ground line`], answer: 0, explain: `Edges at right angles require a right angle at the viewpoint.` }
    ]
  }
});
