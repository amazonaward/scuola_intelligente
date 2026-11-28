TOPIC('en', {
  id: "l1-sum-percezione-attenzione",
  title: "Perception and attention",
  intro: "You think you see the world \"as it is\", like a camera. In fact your brain <b>builds</b> what you see: it fills in gaps, chooses, interprets, and sometimes gets it wrong. In this lesson you'll discover the difference between <b>sensation and perception</b>, the <b>Gestalt laws</b>, <b>optical illusions</b> (Müller-Lyer, Ponzo, Kanizsa, Rubin's vase) and the role of <b>attention</b>, with famous experiments such as the \"invisible gorilla\" and the Stroop effect.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Sensation and perception",
      html: `<p>When you watch a friend walking towards you, two processes work together:</p>
<ul>
<li><b>Sensation</b> is the <b>registering of stimuli</b> by the sense organs: light hits the retina, and light-sensitive cells (cones and rods) turn it into nerve impulses. It is a "bottom-up", physiological process.</li>
<li><b>Perception</b> is the brain's <b>organisation and interpretation</b> of those impulses: we recognise "Luca" coming towards us, not just patches of colour. This process also depends on <b>experience, expectations, culture and emotions</b> ("top-down").</li>
</ul>
<p>Perception is not a copy of reality but an <b>active construction</b>. The <b>blind spot</b> proves it: where the optic nerve leaves the retina there are no light-sensitive cells, yet we don't see a "hole" in our field of vision, because the brain fills it in based on what is around it.</p>
<p>A very important Italian researcher in this field is <b>Gaetano Kanizsa</b> (1913-1993), from Trieste, who followed the Gestalt tradition; we'll see his famous triangle later.</p>`
    },
    {
      type: "svg",
      title: "From the world to the brain",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="15" y="100" width="120" height="90" rx="12" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="75" y="135" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">STIMULUS</text>
<text x="75" y="157" font-size="14" text-anchor="middle" fill="#0f172a">light, sounds,</text>
<text x="75" y="175" font-size="14" text-anchor="middle" fill="#0f172a">smells...</text>
<rect x="170" y="100" width="120" height="90" rx="12" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<text x="230" y="135" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">SENSATION</text>
<text x="230" y="157" font-size="14" text-anchor="middle" fill="#0f172a">sense organs</text>
<text x="230" y="175" font-size="14" text-anchor="middle" fill="#0f172a">(retina...)</text>
<rect x="325" y="100" width="120" height="90" rx="12" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="385" y="135" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">PERCEPTION</text>
<text x="385" y="157" font-size="14" text-anchor="middle" fill="#0f172a">organisation</text>
<text x="385" y="175" font-size="14" text-anchor="middle" fill="#0f172a">and meaning</text>
<rect x="480" y="100" width="105" height="90" rx="12" fill="#e9d5ff" stroke="#6b21a8" stroke-width="2"/>
<text x="532" y="135" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">RESPONSE</text>
<text x="532" y="157" font-size="14" text-anchor="middle" fill="#0f172a">"It's Luca!"</text>
<polygon points="138,145 166,145 158,137" fill="#0f172a"/><line x1="135" y1="145" x2="166" y2="145" stroke="#0f172a" stroke-width="3"/>
<line x1="290" y1="145" x2="322" y2="145" stroke="#0f172a" stroke-width="3"/><polygon points="322,145 312,138 312,152" fill="#0f172a"/>
<line x1="445" y1="145" x2="477" y2="145" stroke="#0f172a" stroke-width="3"/><polygon points="477,145 467,138 467,152" fill="#0f172a"/>
<rect x="325" y="30" width="260" height="46" rx="10" fill="#fed7aa" stroke="#9a3412" stroke-width="2"/>
<text x="455" y="58" font-size="14" text-anchor="middle" fill="#0f172a">experience, expectations, culture, emotions</text>
<line x1="385" y1="78" x2="385" y2="98" stroke="#9a3412" stroke-width="2" stroke-dasharray="5 4"/>
<text x="300" y="250" font-size="14" text-anchor="middle" fill="#0f172a">Perception is an interpretation: the same sensation, different perceptions.</text>
</svg>`,
      caption: "Sensation is the raw material; perception gives it shape and meaning."
    },
    {
      type: "text",
      title: "2. Gestalt: we perceive forms, not pieces",
      html: `<p>In the early 20th century, in Germany, <b>Max Wertheimer</b> (1880-1943), <b>Wolfgang Köhler</b> and <b>Kurt Koffka</b> founded <b>Gestalt</b> psychology (a German word meaning "form, configuration"). In <b>1912</b> Wertheimer published his studies on the <b>phi phenomenon</b>: two fixed lights that switch on and off in quick succession are seen as <b>one moving light</b> (the principle behind cinema and neon signs). The movement is not in the stimuli: the brain "adds" it. That's why the whole is <b>different from the sum of its parts</b>: a melody stays the same if you play it in another key, even though every single note has changed.</p>
<p>The Gestalt psychologists described a number of <b>laws of perceptual organisation</b>, the criteria the brain uses to group stimuli:</p>
<ul>
<li><b>Figure and ground</b>: we always perceive an object "in front" (the figure) against a background.</li>
<li><b>Proximity</b>: elements close together are seen as a group.</li>
<li><b>Similarity</b>: similar elements (in colour, shape) are grouped together.</li>
<li><b>Closure</b>: we tend to complete open figures.</li>
<li><b>Good continuation</b>: we see lines that carry on smoothly rather than breaking off.</li>
<li><b>Good form</b> (or Prägnanz): among the possible interpretations we choose the simplest, most regular and symmetrical one.</li>
<li><b>Common fate</b>: elements moving together are seen as a unit (a flock of birds).</li>
</ul>`
    },
    {
      type: "svg",
      title: "The Gestalt laws at a glance",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<text x="100" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Proximity</text>
<g fill="#1e3a8a"><circle cx="40" cy="70" r="8"/><circle cx="64" cy="70" r="8"/><circle cx="88" cy="70" r="8"/><circle cx="130" cy="70" r="8"/><circle cx="154" cy="70" r="8"/><circle cx="178" cy="70" r="8"/><circle cx="40" cy="100" r="8"/><circle cx="64" cy="100" r="8"/><circle cx="88" cy="100" r="8"/><circle cx="130" cy="100" r="8"/><circle cx="154" cy="100" r="8"/><circle cx="178" cy="100" r="8"/></g>
<text x="100" y="140" font-size="14" text-anchor="middle" fill="#0f172a">two groups, not 12 dots</text>
<text x="300" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Similarity</text>
<g><circle cx="230" cy="70" r="9" fill="#dc2626"/><circle cx="260" cy="70" r="9" fill="#1e3a8a"/><circle cx="290" cy="70" r="9" fill="#dc2626"/><circle cx="320" cy="70" r="9" fill="#1e3a8a"/><circle cx="350" cy="70" r="9" fill="#dc2626"/><circle cx="380" cy="70" r="9" fill="#1e3a8a"/>
<circle cx="230" cy="100" r="9" fill="#dc2626"/><circle cx="260" cy="100" r="9" fill="#1e3a8a"/><circle cx="290" cy="100" r="9" fill="#dc2626"/><circle cx="320" cy="100" r="9" fill="#1e3a8a"/><circle cx="350" cy="100" r="9" fill="#dc2626"/><circle cx="380" cy="100" r="9" fill="#1e3a8a"/></g>
<text x="305" y="140" font-size="14" text-anchor="middle" fill="#0f172a">we see columns of colour</text>
<text x="510" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Closure</text>
<path d="M 450 100 A 40 40 0 1 1 470 112" fill="none" stroke="#166534" stroke-width="5" stroke-dasharray="10 8"/>
<text x="510" y="140" font-size="14" text-anchor="middle" fill="#0f172a">we see a circle</text>
<text x="150" y="176" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Figure and ground</text>
<rect x="60" y="190" width="180" height="90" fill="#0f172a"/>
<path d="M 110 280 L 110 235 Q 110 205 150 205 Q 190 205 190 235 L 190 280 Z" fill="#f8fafc"/>
<text x="400" y="176" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">The Kanizsa triangle</text>
<g fill="#0f172a"><circle cx="400" cy="208" r="14"/><circle cx="362" cy="272" r="14"/><circle cx="438" cy="272" r="14"/></g>
<polygon points="400,208 362,272 438,272" fill="#ffffff"/>
<text x="520" y="240" font-size="14" text-anchor="middle" fill="#0f172a">we "see" a</text>
<text x="520" y="258" font-size="14" text-anchor="middle" fill="#0f172a">triangle that isn't there</text>
</svg>`,
      caption: "The brain organises what it sees according to rules: it groups, completes, simplifies."
    },
    {
      type: "example",
      title: "The laws in action in everyday life",
      html: `<ul>
<li><b>Proximity</b>: on a web page, buttons placed close together seem to belong to the same function.</li>
<li><b>Similarity</b>: in sport, players wearing the same kit are instantly seen as one team.</li>
<li><b>Closure</b>: the WWF logo shows a panda made of black patches that aren't joined up, yet we see the whole animal.</li>
<li><b>Common fate</b>: in a flock of starlings, hundreds of dots moving together are seen as a single "cloud".</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "The triangle that isn't there",
      html: `<p>In <b>1955</b> Gaetano Kanizsa published the triangle figure that bears his name: three "Pac-Men" and three open angles suggest a white triangle, which even seems brighter than the background, with <b>illusory contours</b> that don't actually exist. It's an example of <b>closure</b> and <b>good form</b>: the brain prefers to "explain" the drawing with a triangle lying on top, rather than with three cut-off circles.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: sensation, perception, Gestalt",
      questions: [
        { type: "mc", q: "The process by which the brain organises and interprets sensory data is...", options: ["sensation", "perception", "selective attention", "conditioning"], answer: 1, explain: "Sensation registers, perception interprets." },
        { type: "mc", q: "Wertheimer's phi phenomenon (1912) shows that...", options: ["movement can be perceived even when there is none in the stimulus", "colours don't exist", "memory is infallible", "attention is limited"], answer: 0, explain: "Two alternating lights are seen as one moving light." },
        { type: "tf", q: "According to Gestalt, perception is simply the sum of elementary sensations.", answer: false, explain: "The whole is different from the sum of its parts: relationships and organisation matter." }
      ]
    },
    {
      type: "text",
      title: "3. Optical illusions and perceptual constancies",
      html: `<p><b>Illusions</b> are systematic, shared "errors" of perception. They don't mean the brain is faulty; they reveal the <b>criteria</b> it uses to interpret the world. Three classic examples:</p>
<ul>
<li><b>Müller-Lyer illusion</b> (Franz Müller-Lyer, 1889): two equal lines look different in length if they end with arrowheads pointing inwards or outwards.</li>
<li><b>Ponzo illusion</b> (Mario Ponzo, 1913): two equal lines between two converging lines (like railway tracks) look different; the "further away" one seems bigger.</li>
<li><b>Rubin's vase</b> (Edgar Rubin, 1915): an image seen either as a vase or as two profiles facing each other. It illustrates <b>figure-ground reversal</b>: we can't see both at the same time.</li>
</ul>
<p>Illusions are linked to <b>perceptual constancies</b>: we keep perceiving an object as having a stable size, shape and colour even when the viewing conditions change. A person walking away projects a smaller and smaller image onto the retina, but we don't see them "shrink": the brain compensates for distance (<b>size constancy</b>). A book seen from the side stays rectangular (<b>shape constancy</b>). Illusions occur when these mechanisms are "fooled" by misleading cues.</p>`
    },
    {
      type: "svg",
      title: "Müller-Lyer and Ponzo",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<text x="150" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Müller-Lyer</text>
<line x1="50" y1="80" x2="250" y2="80" stroke="#1e3a8a" stroke-width="4"/>
<line x1="50" y1="80" x2="75" y2="60" stroke="#1e3a8a" stroke-width="4"/><line x1="50" y1="80" x2="75" y2="100" stroke="#1e3a8a" stroke-width="4"/>
<line x1="250" y1="80" x2="225" y2="60" stroke="#1e3a8a" stroke-width="4"/><line x1="250" y1="80" x2="225" y2="100" stroke="#1e3a8a" stroke-width="4"/>
<line x1="50" y1="180" x2="250" y2="180" stroke="#dc2626" stroke-width="4"/>
<line x1="50" y1="180" x2="25" y2="160" stroke="#dc2626" stroke-width="4"/><line x1="50" y1="180" x2="25" y2="200" stroke="#dc2626" stroke-width="4"/>
<line x1="250" y1="180" x2="275" y2="160" stroke="#dc2626" stroke-width="4"/><line x1="250" y1="180" x2="275" y2="200" stroke="#dc2626" stroke-width="4"/>
<text x="150" y="240" font-size="14" text-anchor="middle" fill="#0f172a">The two lines are the same length (200).</text>
<text x="450" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Ponzo</text>
<line x1="380" y1="270" x2="440" y2="40" stroke="#6b7280" stroke-width="3"/>
<line x1="540" y1="270" x2="470" y2="40" stroke="#6b7280" stroke-width="3"/>
<line x1="432" y1="85" x2="480" y2="85" stroke="#dc2626" stroke-width="6"/>
<line x1="450" y1="205" x2="498" y2="205" stroke="#1e3a8a" stroke-width="6"/>
<text x="450" y="290" font-size="14" text-anchor="middle" fill="#0f172a">The two lines are equal (48).</text>
</svg>`,
      caption: "Measure with a ruler: in both figures the lines being compared are equal, but the context fools us."
    },
    {
      type: "widget",
      title: "Match the researcher and the discovery",
      widget: "match",
      options: { pairs: [
        ["Wertheimer (1912)", "Phi phenomenon"],
        ["Kanizsa (1955)", "Illusory contours"],
        ["Rubin (1915)", "Vase / two profiles"],
        ["Müller-Lyer (1889)", "Lines with arrowheads"],
        ["Ponzo (1913)", "Converging lines"]
      ] },
      caption: "Link each researcher to their contribution."
    },
    {
      type: "text",
      title: "4. Attention: a limited spotlight",
      html: `<p>At every moment our senses receive far more information than the brain can process. <b>Attention</b> is the process that <b>selects</b> some stimuli and ignores others. It is a resource with <b>limited capacity</b>.</p>
<ul>
<li><b>Selective attention</b>: focusing on one stimulus and shutting out the others. Example: the <b>"cocktail party effect"</b> studied by Colin Cherry (1953): in a noisy room we follow just one conversation, but if someone says our name we notice it even though we weren't listening. Donald Broadbent proposed (1958) the <b>filter</b> model: a "bottleneck" lets through only the selected information (later models, such as Treisman's, allow a more "flexible" filter through which important stimuli still get through).</li>
<li><b>Sustained attention</b> (vigilance): keeping your concentration for a long time, as in a lesson.</li>
<li><b>Divided attention</b>: trying to do several things at once. It only works if one task is <b>automatic</b> (walking and talking), not if both need resources (driving and writing a text message).</li>
</ul>
<p>Attention can be directed <b>voluntarily</b> ("top-down", I decide) or <b>captured</b> by strong stimuli (a sudden noise, a bright colour: "bottom-up").</p>`
    },
    {
      type: "example",
      title: "The invisible gorilla (Simons and Chabris, 1999)",
      html: `<p>Daniel Simons and Christopher Chabris showed volunteers a short video in which two teams of players, one in white shirts and one in black, passed a basketball to each other. The task was to <b>count the passes</b> made by the white team. Halfway through, a person dressed as a <b>gorilla</b> walked across the scene, beat its chest and walked off, staying visible for about nine seconds.</p>
<p>Result: about <b>half</b> of the participants, busy with the task, <b>didn't notice the gorilla</b>. This is called <b>inattentional blindness</b>: if our attention is busy elsewhere, we can miss what passes right in front of our eyes. It explains why a driver distracted by a message may "not see" a pedestrian.</p>`
    },
    {
      type: "curiosity",
      title: "The Stroop effect",
      html: `<p>In 1935 John Ridley Stroop showed that naming the <b>colour of the ink</b> is slower when the written word names a different colour (for example the word RED printed in blue). Reading is so automatic that it interferes with the task: attention has to <b>inhibit</b> the automatic response. The Stroop test is still used to assess attentional control.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand attention and perception",
      intro: "If these ideas still feel abstract, try looking at them from another angle.",
      tabs: [
        { label: "🔦 The spotlight", html: `<p>Attention is like the <b>beam of a torch</b> in a dark room: it lights up one spot clearly and leaves the rest in shadow. You can move it (selective attention), hold it still for a long time (sustained) or try to light up two spots with a wider beam (divided), but you lose sharpness.</p>` },
        { label: "🎬 The film director", html: `<p>Perception is like a <b>film director</b> editing a film from incomplete footage: choosing scenes, filling in gaps (blind spot, closure), keeping everything consistent (constancies). That's why two viewers can "edit" the same material differently, depending on their experiences and expectations.</p>` },
        { label: "👉 Try it yourself", html: `<p>Draw a cross on the left of a sheet of paper and a black dot about ten centimetres to its right. Close your left eye and stare at the cross with your right eye, holding the sheet about 30-40 cm away. As you move the sheet closer or further away, the dot will <b>disappear</b>: it is falling on your blind spot. The brain fills the gap with the background.</p>` }
      ]
    },
    {
      type: "decision",
      title: "Texting while riding?",
      html: `<p>You're on your scooter and a notification comes in. You know attention is a limited resource, but you think: "It'll only take a second, I ride on autopilot by now."</p>`,
      question: "In the light of what psychology tells us, what's the best thing to do?",
      options: [
        { label: "Reply quickly: riding is automatic by now.", outcome: "Riding is only automatic in predictable conditions. One surprise (a pedestrian, sudden braking) and your attention is taken up by reading: the risk of inattentional blindness goes up enormously." },
        { label: "Wait until you've stopped somewhere safe.", outcome: "This is the right choice: dividing attention between two complex tasks makes both worse." },
        { label: "Reply by voice on hands-free, so you don't look at the screen.", outcome: "Less risky than typing, but a conversation also takes up cognitive resources and reduces your ability to notice the unexpected." }
      ],
      answer: 1,
      explain: "Research on attention shows that <b>multitasking</b> with tasks that aren't automatic is really constant switching from one task to another, which costs time and causes mistakes. The invisible gorilla experiment also shows that people focused on something else don't see what is right in front of them."
    },
    {
      type: "conceptMap",
      title: "Map: perception and attention",
      nodes: [
        { id: "sens", label: "Sensation", x: 15, y: 10, color: "#3b82f6", html: "The registering of stimuli by the sense organs.", why: "It depends on physiology: cones and rods in the retina, receptors in the ear and skin. Without sensation there is no material to work on." },
        { id: "perc", label: "Perception", x: 50, y: 10, color: "#10b981", html: "The organisation and interpretation of stimuli.", why: "The brain has to choose an interpretation: sensory data are ambiguous (a 2D image on the retina could match countless 3D scenes). That's why it uses rules and knowledge." },
        { id: "gest", label: "Gestalt laws", x: 85, y: 10, color: "#f59e0b", html: "Proximity, similarity, closure, continuation, good form, common fate.", why: "Wertheimer, Köhler and Koffka (from 1912) noticed that perceptual organisation is spontaneous and follows principles of simplicity and regularity: useful shortcuts for understanding the world quickly." },
        { id: "ill", label: "Illusions", x: 85, y: 50, color: "#ef4444", html: "Müller-Lyer, Ponzo, Kanizsa, Rubin.", why: "They happen when misleading cues trigger mechanisms that usually work well (such as perceptual constancies). They reveal the hidden rules of perception." },
        { id: "att", label: "Attention", x: 50, y: 50, color: "#8b5cf6", html: "Selecting stimuli: selective, sustained, divided.", why: "Processing resources are limited (Broadbent, 1958): without a filter we would be swamped with information. The price is that what we don't select can slip past us (the invisible gorilla)." },
        { id: "cec", label: "Inattentional blindness", x: 20, y: 80, color: "#ec4899", html: "Not seeing something visible because attention is elsewhere.", why: "Simons and Chabris (1999): half the participants don't see a gorilla. It shows that seeing is not passive, but depends on what we are looking for." }
      ],
      edges: [["sens", "perc", "feeds"], ["perc", "gest", "follows"], ["gest", "ill", "reveal their limits"], ["att", "perc", "guides"], ["att", "cec", "when limited causes"]]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li>Sensation = <b>registering</b>; perception = <b>interpreting</b>.</li>
<li>Gestalt (1912, Wertheimer, Köhler, Koffka): the <b>whole</b> is not the sum of its parts.</li>
<li>Illusions show the <b>rules</b> of perception, not a defect in it.</li>
<li>Attention is <b>limited</b>: multitasking is an illusion when the tasks aren't automatic.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: illusions and attention",
      questions: [
        { type: "mc", q: "In the invisible gorilla experiment, the participants had to...", options: ["count one team's passes", "recognise faces", "remember colours", "solve riddles"], answer: 0, explain: "The counting task kept their attention busy." },
        { type: "tf", q: "Rubin's vase illustrates figure-ground reversal.", answer: true, explain: "You see either the vase or two profiles, never both at once." },
        { type: "mc", q: "The \"cocktail party effect\" is an example of which kind of attention?", options: ["selective", "divided", "sustained", "absent"], answer: 0, explain: "We follow one conversation and filter out the others, but stay alert to our own name." }
      ]
    }
  ],
  glossary: [
    { t: "Sensation", d: "The registering of stimuli by the sense organs." },
    { t: "Perception", d: "The brain's organisation and interpretation of sensations." },
    { t: "Gestalt", d: "\"Form\": the school that studies how perception is organised into structured wholes." },
    { t: "Figure and ground", d: "The perceptual distinction between the object in front and what lies behind it." },
    { t: "Phi phenomenon", d: "The illusion of movement produced by lights switching on one after another (Wertheimer, 1912)." },
    { t: "Perceptual constancy", d: "The ability to perceive an object's size, shape and colour as stable when conditions change." },
    { t: "Optical illusion", d: "A systematic, shared error of perception." },
    { t: "Selective attention", d: "The ability to focus on some stimuli while ignoring others." },
    { t: "Inattentional blindness", d: "Failing to perceive a visible stimulus because attention is elsewhere." },
    { t: "Stroop effect", d: "Interference between automatic reading and naming the ink colour (1935)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What distinguishes perception from sensation?", options: ["Perception interprets and organises stimuli", "Perception only happens in dreams", "Sensation depends on culture, perception doesn't", "They are the same thing"], answer: 0, explain: "Sensation registers, perception gives shape and meaning." },
      { type: "tf", q: "The blind spot of the retina is a hole that we see as black in our field of vision.", answer: false, explain: "The brain fills the gap with the surrounding information, so we don't see it." },
      { type: "mc", q: "Who published studies on the phi phenomenon in 1912?", options: ["Kanizsa", "Wertheimer", "Stroop", "Broadbent"], answer: 1, explain: "Max Wertheimer, founder of Gestalt psychology." },
      { type: "mc", q: "A set of dots seen as two separate groups illustrates the law of...", options: ["proximity", "closure", "common fate", "figure-ground"], answer: 0, explain: "Elements close together are grouped." },
      { type: "text", q: "What is the illusion with two equal lines ending in arrowheads pointing inwards or outwards called?", answer: ["muller-lyer", "müller-lyer", "muller-lyer illusion", "müller-lyer illusion", "the müller-lyer illusion", "the muller-lyer illusion"], explain: "It is the Müller-Lyer illusion (1889)." },
      { type: "mc", q: "The \"invisible gorilla\" demonstrates...", options: ["inattentional blindness", "shape constancy", "the law of closure", "short-term memory"], answer: 0, explain: "People focused on a task can fail to see an unexpected stimulus." },
      { type: "mc", q: "The filter model (Broadbent, 1958) states that...", options: ["a bottleneck selects the information to be processed", "all stimuli are fully processed", "attention has no limits", "perception is innate"], answer: 0, explain: "A filter lets only part of the information through." },
      { type: "tf", q: "Multitasking works well even with two tasks that both need concentration.", answer: false, explain: "Attention is limited: you switch from one task to the other, which costs time and causes mistakes." },
      { type: "order", q: "Put in chronological order.", items: ["Müller-Lyer illusion", "Wertheimer's phi phenomenon", "Rubin's vase", "Kanizsa triangle"], explain: "1889, 1912, 1915, 1955." },
      { type: "mc", q: "The Stroop effect shows that...", options: ["an automatic response (reading) can interfere with the required task", "everyone perceives colours the same way", "memory is limited", "children perceive better than adults"], answer: 0, explain: "Reading is automatic and interferes with naming the ink colour." }
    ]
  }
});
