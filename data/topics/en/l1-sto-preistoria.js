TOPIC('en', {
  id: "l1-sto-preistoria",
  title: "Prehistory and the Neolithic Revolution",
  intro: "For more than <b>99%</b> of its history, humanity did not leave a single written line. Yet in that enormously long time we learned to walk on two legs, to chip stone, to master fire, to paint and to bury our dead. Then, about <b>12,000 years ago</b>, everything changed: we stopped chasing food and began to <b>produce</b> it. In this lesson we find out how historians reconstruct a past without written words, and why the <b>Neolithic Revolution</b> is the deepest turning point before the industrial age.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. What prehistory is and how we study it",
      html: `<p>By convention, <b>history</b> begins with the invention of <b>writing</b> (around <b>3300-3000 BC</b> in Mesopotamia). Everything before that is called <b>prehistory</b>. It is not a time "without history": it is a time without <b>written sources</b>, studied with other methods.</p>
<ul>
<li><b>Archaeology</b>: excavates and analyses material remains (tools, bones, houses, graves). The context matters as much as the object: the layer it is found in tells us when and with what it was used (<b>stratigraphy</b>).</li>
<li><b>Palaeontology and physical anthropology</b>: study fossils and skeletons to reconstruct human evolution.</li>
<li><b>Dating</b>: <b>radiocarbon (C-14)</b> measures the radioactive carbon left in organic remains and reaches back to about 50,000 years ago; for longer periods other methods are used (potassium-argon, volcanic layers). <b>Dendrochronology</b> counts tree rings.</li>
<li><b>Genetics</b>: ancient DNA reveals the relationships between populations, including with the Neanderthals.</li>
</ul>
<p>Historians do not "know" how people lived: they <b>interpret clues</b>. That is why every new discovery can correct what was believed before.</p>`
    },
    {
      type: "text",
      title: "2. Human evolution: from australopithecines to Homo sapiens",
      html: `<p>Humans are not descended "from the apes" of today: apes and humans share a <b>common ancestor</b> who lived a few million years ago in Africa. The main stages:</p>
<ul>
<li><b>Australopithecines</b> (from about 4 million years ago): small, with a brain only slightly larger than a chimpanzee's, but <b>bipedal</b>. The famous skeleton nicknamed <b>Lucy</b> (<i>Australopithecus afarensis</i>, about 3.2 million years old, discovered in Ethiopia in 1974) is an example.</li>
<li><b>Homo habilis</b> (about 2.4-1.5 million years ago): the first chipped stone tools, <b>pebble tools</b>.</li>
<li><b>Homo erectus</b> (from about 1.9 million years ago): tall and upright, it left Africa and reached Asia and Europe; it used <b>fire</b> and symmetrical hand axes.</li>
<li><b>Neanderthals</b> (<i>Homo neanderthalensis</i>, about 400,000-40,000 years ago): adapted to the European cold, hunters, they buried their dead. They are not our "direct ancestors": they are <b>cousins</b>. They interbred with Homo sapiens, and many of us still carry a few percent of their DNA.</li>
<li><b>Homo sapiens</b>: the oldest fossils (Jebel Irhoud, Morocco) are about <b>300,000 years</b> old. From there our species spread across the whole planet; it reached Europe about 45,000 years ago.</li>
</ul>
<p>It is not a "ladder" climbing straight up: several human species lived side by side for a long time, a bit like the branches of a bush. We are the only one left.</p>`
    },
    {
      type: "widget",
      title: "A timeline that lasts millions of years",
      widget: "timeline",
      options: {
        unit: "years",
        scale: "log",
        events: [
          { year: -3200000, label: "Lucy (Australopithecus)", icon: "🦴" },
          { year: -2400000, label: "Homo habilis: first tools", icon: "🪨" },
          { year: -1900000, label: "Homo erectus", icon: "🚶" },
          { year: -400000, label: "Controlled use of fire becomes widespread", icon: "🔥" },
          { year: -300000, label: "Homo sapiens", icon: "🧑" },
          { year: -40000, label: "Neanderthals disappear", icon: "🏔️" },
          { year: -17000, label: "Lascaux paintings", icon: "🎨" },
          { year: -10000, label: "Beginning of the Neolithic", icon: "🌾" },
          { year: -3300, label: "Writing: history begins", icon: "✍️" }
        ]
      },
      caption: "The scale is logarithmic: each step covers shorter and shorter intervals. If the history of humanity were a single day, writing would appear in the last few minutes."
    },
    {
      type: "text",
      title: "3. The Palaeolithic: hunter-gatherers",
      html: `<p>The <b>Palaeolithic</b> ("Old Stone Age") runs from the first worked stones to about <b>10,000 BC</b>. It is the period of the <b>ice ages</b>, when great glaciers covered northern Europe and the sea level was much lower.</p>
<ul>
<li><b>Foraging economy</b>: people live off what nature offers: hunting (mammoths, bison, reindeer), fishing, gathering fruit, roots and eggs.</li>
<li><b>Nomadism</b>: groups of 20-50 people move around following animals and the seasons; they live in rock shelters, caves or huts made of hides.</li>
<li><b>Technology</b>: chipped stone, bone, antler; later spears with spear-throwers, bows and arrows, bone needles for sewing hides. <b>Fire</b> provides warmth, light, protection and cooked food (more digestible and more nutritious).</li>
<li><b>Organisation</b>: probably no accumulated wealth and no permanent leaders; food was shared because it could not be stored for long.</li>
<li><b>Symbolic world</b>: burials, ornaments, figurines such as the <b>Venus of Willendorf</b> (about 25,000 years ago) and the <b>cave paintings</b> of Lascaux (France) and Altamira (Spain), with wonderfully lively animals.</li>
</ul>
<p>At the end of the Palaeolithic the climate warmed up (about <b>11,700 years ago</b> the <b>Holocene</b> begins, our interglacial epoch). The transition period is called the <b>Mesolithic</b>: hunters adapt to forests, rivers and coasts, using microliths and bows, and the dog (the first domestic animal, perhaps more than 15,000 years ago) helps them hunt.</p>`
    },
    {
      type: "svg",
      title: "What changed with the Neolithic",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<rect x="20" y="20" width="270" height="260" rx="12" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>
<rect x="310" y="20" width="270" height="260" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<text x="155" y="50" font-size="18" font-weight="bold" text-anchor="middle" fill="#0c4a6e">PALAEOLITHIC</text>
<text x="445" y="50" font-size="18" font-weight="bold" text-anchor="middle" fill="#14532d">NEOLITHIC</text>
<g font-size="15" fill="#0f172a">
<text x="40" y="90">Hunting and gathering</text>
<text x="40" y="125">Nomadism</text>
<text x="40" y="160">Small groups (20-50)</text>
<text x="40" y="195">Few things to carry</text>
<text x="40" y="230">Food: whatever is there</text>
<text x="330" y="90">Farming, herding</text>
<text x="330" y="125">Settled life: villages</text>
<text x="330" y="160">Communities of hundreds</text>
<text x="330" y="195">Houses, pottery, stores</text>
<text x="330" y="230">Surplus and inequality</text>
</g>
<path d="M292 150 L308 150" stroke="#b45309" stroke-width="4"/>
<polygon points="308,142 322,150 308,158" fill="#b45309"/>
<text x="300" y="268" font-size="14" text-anchor="middle" fill="#7c2d12">from about 10,000 BC</text>
</svg>`,
      caption: "The change did not happen overnight: it took thousands of years and happened in different places at different times."
    },
    {
      type: "text",
      title: "4. The Neolithic Revolution",
      html: `<p>Between <b>10,000 and 8000 BC</b>, in some regions of the world, communities began to <b>grow</b> plants and <b>raise</b> animals. The Australian archaeologist <b>Gordon Childe</b> called it the "Neolithic Revolution" (1936). Today people prefer to speak of a slow, gradual process, but its impact was truly revolutionary.</p>
<p><b>Where and what?</b> Farming arose independently in several centres:</p>
<ul>
<li><b>Fertile Crescent</b> (Near East, from the Levant to Mesopotamia): wheat (emmer, einkorn), barley, lentils, chickpeas; sheep, goats, then cattle and pigs.</li>
<li><b>China</b>: millet (north) and <b>rice</b> (Yangtze valley).</li>
<li><b>Mesoamerica</b>: <b>maize</b>, beans, squash. <b>Andes</b>: potatoes, llamas.</li>
<li><b>New Guinea</b>, <b>sub-Saharan Africa</b> and other areas.</li>
</ul>
<p><b>Why then?</b> After the end of the last ice age the climate became warmer and more stable, and in some areas wild cereals grew in abundance. Probably the larger, less mobile groups began to sow seeds as a safety measure. Historians still debate the details: it is a good example of how causes are never just one.</p>
<p><b>Domestication</b> means selecting, over time, the most useful plants and animals: ears of grain that do not shatter on their own, more docile animals. Plants and animals change... and humans change along with them.</p>`
    },
    {
      type: "3d",
      title: "3D map: the Neolithic in the Near East",
      scene: "spacetime",
      caption: "The base is the map of the Near East, the height is time (from 10,000 to 3000 BC). Tap the events to read them and see the cause-and-effect arrows.",
      options: {
        lat: [28, 42],
        lon: [28, 52],
        years: [-10000, -3000],
        places: [
          { lat: 31.5, lon: 35.2, label: "Levant" },
          { lat: 36.2, lon: 43.1, label: "Northern Mesopotamia" },
          { lat: 32.0, lon: 45.0, label: "Southern Mesopotamia" },
          { lat: 39.0, lon: 35.0, label: "Anatolia" }
        ],
        events: [
          { id: "gobekli", lat: 37.22, lon: 38.92, year: -9500, label: "Göbekli Tepe", html: "In south-eastern Anatolia hunter-gatherers build large enclosures of carved stone pillars. The site shows that <b>the organisation of large communities</b> came before, or alongside, farming." },
          { id: "natufiani", lat: 32.0, lon: 35.2, year: -9000, label: "First farmers of the Levant", html: "The descendants of the Natufians, semi-settled hunter-gatherers who harvested wild cereals, begin to grow wheat and barley.", causes: ["gobekli"] },
          { id: "gerico", lat: 31.87, lon: 35.44, year: -8000, label: "Jericho", html: "One of the first permanent villages: round mud-brick houses and a massive <b>stone wall</b> with a tower. Perhaps a thousand inhabitants at its peak.", causes: ["natufiani"] },
          { id: "allevamento", lat: 37.0, lon: 41.0, year: -8000, label: "Domestic sheep and goats", html: "In the Near East sheep and goats are domesticated: meat, milk, wool and hides are available without the need to hunt.", causes: ["natufiani"] },
          { id: "catal", lat: 37.67, lon: 32.83, year: -7100, label: "Çatalhöyük", html: "In Anatolia, a large Neolithic town (up to about 5000-8000 inhabitants): houses packed together, with no streets; people entered through the roof. Wall paintings and burials under the floors.", causes: ["gerico", "allevamento"] },
          { id: "ceramica", lat: 36.5, lon: 40.5, year: -6500, label: "Spread of pottery", html: "Fired clay makes it possible to store cereals, water and oil and to cook food in containers: a key tool for a society that builds up stores.", causes: ["catal"] },
          { id: "irrigazione", lat: 33.5, lon: 44.5, year: -5500, label: "Irrigation in Mesopotamia", html: "In southern Mesopotamia, where there is little rain, canals are dug to bring river water to the fields: this needs collective work and organisation. The first cities will be born here.", causes: ["ceramica"] },
          { id: "citta", lat: 31.3, lon: 45.6, year: -3500, label: "First cities: Uruk", html: "With agricultural surplus, specialisation of labour and temple-storehouses, the first true <b>city</b> is born. Soon writing appears (about 3300-3000 BC). End of prehistory.", causes: ["irrigazione"] }
        ]
      }
    },
    {
      type: "quiz",
      title: "Mini-quiz: from the Palaeolithic to the Neolithic",
      questions: [
        { type: "mc", q: "What conventionally marks the end of prehistory?", options: ["The invention of farming", "The invention of writing", "The appearance of Homo sapiens"], answer: 1, explain: "History begins with written sources, from about 3300-3000 BC in Mesopotamia." },
        { type: "tf", q: "Neanderthals are the direct ancestors of Homo sapiens.", answer: false, explain: "They are a cousin species: Homo sapiens and Neanderthals had an older common ancestor." },
        { type: "mc", q: "Which of these was a feature of the Palaeolithic?", options: ["Nomadism", "Permanent villages with stores of grain", "Bronze metalworking"], answer: 0, explain: "Hunter-gatherers moved around following animals and the seasons." },
        { type: "text", q: "What is the name of the region of the Near East where the earliest farming began?", answer: ["fertile crescent", "the fertile crescent"], explain: "The Fertile Crescent, from the Levant to Mesopotamia." }
      ]
    },
    {
      type: "text",
      title: "5. Villages, crafts, trade: Neolithic life",
      html: `<p>Farming means <b>staying put</b>: fields and harvests have to be defended. <b>Villages</b> appear, with houses of mud, stone or wood.</p>
<ul>
<li><b>New techniques</b>: <b>polished</b> stone (axes, grinding stones), <b>pottery</b> for storing food, <b>weaving</b> of wool and flax, and later the plough pulled by animals.</li>
<li><b>Surplus</b>: if more is produced than is needed, part of the population can do other things: potters, weavers, craftsmen, priests, warriors. It is the beginning of the <b>division of labour</b>.</li>
<li><b>Property and inequality</b>: stores, land and herds can be owned, inherited, stolen. The first differences in wealth and power appear.</li>
<li><b>Trade</b>: obsidian (volcanic glass used for blades) travelled hundreds of kilometres.</li>
<li><b>Religion</b>: cults of fertility and of ancestors, female figurines, burials under houses.</li>
</ul>
<p>Not everything was progress: the skeletons of the first farmers show <b>more tooth decay, more disease and shorter height</b> than those of hunters. Living close to domestic animals encourages <b>zoonoses</b> (diseases that pass from animals to humans), and epidemics spread in large communities. But the greater quantity of food allowed a much larger population to survive: from a few million people the world reached hundreds of millions.</p>`
    },
    {
      type: "decision",
      title: "10,000 years ago: farm or keep hunting?",
      html: `<p>Imagine you live in a group of hunter-gatherers in the Levant, around 9000 BC. Hunting still pays off, but the climate is warmer and wild cereals grow in abundance. Some neighbours have started sowing seeds near the river: they say the harvest is more reliable, but you have to work all year round and you can no longer move around. Your group has to decide.</p>`,
      question: "What would you have chosen?",
      options: [
        { label: "Keep hunting and gathering: less work and freedom to move.", outcome: "Hunter-gatherers had a varied diet and more free time than was once thought. But, being few in number, the groups that chose this path were gradually overwhelmed or absorbed by the more numerous farming groups." },
        { label: "Switch to farming and settle in a permanent village.", outcome: "The work is harder and the diet less varied, but food is more predictable and more people can be fed. Over time stores, wealth and leaders appear, and then cities and states." },
        { label: "Do both: sow a little and keep hunting in season.", outcome: "That is exactly what many communities did for thousands of years: the transition was slow and mixed, with intermediate forms of sowing, gathering and hunting." }
      ],
      answer: 2,
      explain: "Archaeologists show that the shift to farming was <b>slow and gradual</b>: for centuries communities combined hunting, gathering and cultivation. It was not a choice made in a day, but a series of small adaptations with enormous consequences that no one could foresee."
    },
    {
      type: "example",
      title: "Worked example: the Iceman of Similaun (Ötzi)",
      html: `<p>In <b>1991</b> two hikers found a body mummified by the ice on the Similaun glacier, in South Tyrol (northern Italy): it was <b>Ötzi</b>, who lived around <b>3300 BC</b>, in the Copper Age. We can read a whole world in him:</p>
<ul>
<li>a <b>copper axe</b> (a metal that was still extremely rare), a bow with arrows, a flint dagger;</li>
<li>clothes of goat, bear and deer skin, shoes padded with grass;</li>
<li>in his stomach: meat, cereals (emmer wheat) and plants, a sign of a mixed economy of herding, farming and hunting;</li>
<li>tattoos where his joints hurt, and an <b>arrowhead</b> in his shoulder: he was probably killed.</li>
</ul>
<p>Ötzi shows the archaeologist's method well: from a few objects and analyses (DNA, isotopes, C-14) a fragment of a life can be reconstructed.</p>`
    },
    {
      type: "example",
      title: "Worked example: reading a find like a detective",
      html: `<p>An archaeologist finds a bone with some parallel marks in an excavation layer. How does she reason?</p>
<ol>
<li><b>Where?</b> She records the layer and the nearby objects: if there are ashes and flints next to it, it was an inhabited place.</li>
<li><b>What is it?</b> Analysis under the microscope distinguishes the marks of a flint knife (clean cuts) from an animal's bites.</li>
<li><b>When?</b> The bone is dated with radiocarbon and compared with other finds.</li>
<li><b>What does it mean?</b> If many reindeer bones have the same cuts, the group butchered reindeer systematically: a clue to organised hunting and to seasonality.</li>
</ol>
<p>The same procedure, applied to charred seeds or fragments of pottery, makes it possible to work out what was grown and eaten in a Neolithic village.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Bread and beer",
      html: `<p>Beer may be older than bread! Some archaeologists believe that cereals were also grown to make fermented drinks, used at ritual feasts (this hypothesis is debated). Certainly, in ancient Mesopotamia and Egypt beer was an everyday food and even a form of pay for workers. One thing is sure: since the Neolithic we have basically kept eating the same plants and the same domestic animals as back then.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The first \"towns\" had no streets",
      html: `<p>At <b>Çatalhöyük</b> (Turkey, about 7000-5500 BC) the houses were rectangular and packed tightly together like a beehive, and <b>there were no streets</b>: people walked on the roofs and entered by climbing down a ladder through an opening. The dead were buried under the floor of the house. Archaeologists often call it a "town", but there were no palaces or separate temples: it was a large community without obvious hierarchies.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand the Neolithic",
      intro: "If the \"Neolithic Revolution\" feels abstract, try seeing it from other angles: an analogy, a hypothesis, a map.",
      tabs: [
        {
          label: "🏦 Surplus as savings",
          html: `<p>Think of a <b>bank account</b>. The hunter-gatherer lives "from day to day": every day they earn their food and eat it; they have no savings. The farmer, on the other hand, at the autumn harvest produces <b>more than they eat right away</b> and puts it in the granary: they have <b>savings</b>.</p><p>With savings come all the social novelties: someone can stop working in the fields (craftsmen, priests, soldiers), someone manages the stores (the first officials), someone wants to steal them (the first wars for control of storehouses). Surplus is the "seed" of cities, wealth, inequality and the state.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f0fdf4"/>
<text x="150" y="30" font-size="16" font-weight="bold" text-anchor="middle" fill="#14532d">Hunter</text>
<text x="450" y="30" font-size="16" font-weight="bold" text-anchor="middle" fill="#14532d">Farmer</text>
<rect x="100" y="60" width="100" height="40" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
<text x="150" y="85" font-size="14" text-anchor="middle" fill="#0f172a">today's food</text>
<rect x="380" y="60" width="140" height="40" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
<text x="450" y="85" font-size="14" text-anchor="middle" fill="#0f172a">today's food</text>
<rect x="380" y="110" width="140" height="70" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
<text x="450" y="140" font-size="16" font-weight="bold" text-anchor="middle" fill="#7c2d12">SURPLUS</text>
<text x="450" y="162" font-size="14" text-anchor="middle" fill="#7c2d12">in the granary</text>
<text x="150" y="150" font-size="14" text-anchor="middle" fill="#0f172a">no stores</text>
<text x="300" y="205" font-size="14" text-anchor="middle" fill="#0f172a">Surplus makes crafts, leaders and cities possible.</text>
</svg>`
        },
        {
          label: "🌱 The world changed the seeds too",
          html: `<p>A question: who domesticated whom? <b>Wild wheat</b> drops its ripe ears on its own to scatter its seeds. But gatherers mostly took home the ears that <b>stayed attached</b> to the plant (the others had fallen!). By sowing those seeds every year, they unknowingly selected plants with non-shattering ears, and those plants could no longer reproduce without humans.</p><p>The same goes for cattle, which became more docile and peaceful, and for dogs, descended from wolves. It is a process of <b>coevolution</b>: we changed them, and they changed us (for example, the ability to digest milk as adults, which appeared in some European and African populations, is linked to herding).</p>`
        },
        {
          label: "📅 Scroll through the dates",
          html: `<p>Place the stages of the Neolithic on the timeline: see how everything happens in a few thousand years compared with the millions of years before.</p>`,
          widget: "timeline",
          options: {
            unit: "years",
            events: [
              { year: -10000, label: "End of the ice age", icon: "🧊" },
              { year: -9500, label: "Göbekli Tepe", icon: "🗿" },
              { year: -8000, label: "Jericho, walls", icon: "🏘️" },
              { year: -7100, label: "Çatalhöyük", icon: "🏠" },
              { year: -6500, label: "Pottery widespread", icon: "🏺" },
              { year: -5500, label: "Irrigation", icon: "💧" },
              { year: -3500, label: "First cities", icon: "🏙️" },
              { year: -3300, label: "Ötzi and writing", icon: "🧊" }
            ]
          }
        },
        {
          label: "🃏 Review cards",
          html: `<p>Flip the cards to review the key concepts.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "Prehistory", back: "The period before writing (before 3300-3000 BC)" },
              { front: "Nomadism", back: "Moving around constantly, following animals and the seasons" },
              { front: "Domestication", back: "Selecting plants and animals to make them useful to humans" },
              { front: "Surplus", back: "Production beyond immediate needs: the basis of crafts and power" },
              { front: "Fertile Crescent", back: "The region of the Near East where farming began" },
              { front: "Radiocarbon", back: "A method for dating organic remains up to about 50,000 years old" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of the Neolithic Revolution: tap the nodes and find out why",
      nodes: [
        { id: "clima", label: "End of the ice age", x: 50, y: 6, color: "#0ea5e9", html: "About 11,700 years ago the climate becomes warmer and more stable (Holocene).", why: "As the ice retreats, environments and resources change: wild cereals grow in abundance and the lowlands become more habitable. A stable climate makes it possible to plan a harvest from year to year." },
        { id: "domest", label: "Domestication", x: 20, y: 30, color: "#16a34a", html: "Plants (wheat, barley, rice, maize) and animals (sheep, goats, cattle) are selected.", why: "It came about through trial and error: those who sowed the most useful seeds and raised the most docile animals got more reliable food. It was not the sudden invention of a genius, but a long collective process." },
        { id: "sedent", label: "Settled life", x: 80, y: 30, color: "#f97316", html: "People live in permanent villages near their fields.", why: "A harvest cannot be carried around and must be defended: that is why people stopped moving. With a settled life births increase, because mothers no longer have to carry small children on long journeys." },
        { id: "surplus", label: "Surplus", x: 50, y: 52, color: "#eab308", html: "More is produced than is needed, and it is stored (granaries, pottery).", why: "Surplus separates those who produce food from those who can do other things. It is also something that can be stolen, traded and inherited: hence inequality and conflict." },
        { id: "lavoro", label: "Division of labour", x: 18, y: 76, color: "#a855f7", html: "Craftsmen, priests, warriors and traders appear.", why: "When not everyone has to produce food, some people specialise. Specialisation improves techniques (pottery, weaving, metals) and encourages long-distance trade." },
        { id: "potere", label: "Leaders and hierarchies", x: 82, y: 76, color: "#ef4444", html: "Those who control stores and rituals gain authority.", why: "Managing granaries, irrigation and defence requires someone to make decisions: priests and leaders tend to pass on their power. It is the seed of the future state." },
        { id: "citta", label: "Cities and writing", x: 50, y: 95, color: "#7c2d12", html: "Around 3500-3000 BC the first cities and writing appear in Mesopotamia.", why: "Writing was born to count stores and debts in temple storehouses. It is the direct consequence of a complex farming society: the end of prehistory." }
      ],
      edges: [
        ["clima", "domest", "encourages"],
        ["domest", "sedent", "leads to"],
        ["sedent", "surplus", "produces"],
        ["domest", "surplus", "generates"],
        ["surplus", "lavoro", "makes possible"],
        ["surplus", "potere", "feeds"],
        ["lavoro", "citta", "leads to"],
        ["potere", "citta", "organises"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: society and consequences",
      questions: [
        { type: "mc", q: "What was a consequence of agricultural surplus?", options: ["Everyone went back to being nomads", "The division of labour began", "Social differences disappeared"], answer: 1, explain: "Those who no longer produced food could specialise in other crafts." },
        { type: "tf", q: "The first farmers always enjoyed better health than hunter-gatherers.", answer: false, explain: "Skeletons show more tooth decay, more disease and shorter height: the advantage was mainly in numbers." },
        { type: "order", q: "Put these in chronological order.", items: ["Homo habilis", "Homo erectus", "Homo sapiens", "Beginning of the Neolithic", "First cities"], explain: "From 2.4 million years ago, 1.9 million, 300,000 years, 10,000 BC, 3500 BC." }
      ]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li><b>Prehistory</b> = before writing (before about 3300-3000 BC); it is studied through archaeology, palaeontology, dating and genetics.</li>
<li>Evolution: australopithecines → <b>Homo habilis</b> → <b>Homo erectus</b> (fire) → <b>Homo sapiens</b> (about 300,000 years ago); Neanderthals are a cousin species.</li>
<li><b>Palaeolithic</b>: nomadic hunter-gatherers, chipped stone, cave art. <b>Neolithic</b>: farming, herding, villages, pottery, polished stone.</li>
<li>Farming arose in several independent centres (Fertile Crescent, China, Mesoamerica...). It brought <b>surplus</b>, the division of labour, inequality and cities.</li>
<li>The process was <b>slow</b> and not only beneficial: more food and more people, but also more toil and disease.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Prehistory", d: "The period before the invention of writing." },
    { t: "Palaeolithic", d: "\"Old Stone Age\": nomadic hunter-gatherers, chipped stone." },
    { t: "Mesolithic", d: "The transition phase between the Palaeolithic and the Neolithic." },
    { t: "Neolithic", d: "\"New Stone Age\": farming, herding, villages, polished stone." },
    { t: "Nomadism", d: "The travelling life of groups that move around following resources and the seasons." },
    { t: "Settled life", d: "Living permanently in one fixed place, typical of those who farm the land." },
    { t: "Domestication", d: "The selection of plants and animals made dependent on and useful to humans." },
    { t: "Surplus", d: "The amount of produce beyond immediate consumption." },
    { t: "Stratigraphy", d: "The study of soil layers to date and interpret finds." },
    { t: "Fertile Crescent", d: "The area of the Near East where farming began." },
    { t: "Zoonosis", d: "A disease that passes from animals to humans." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Why is prehistory not studied through written documents?", options: ["Because all the documents were destroyed", "Because writing had not yet been invented", "Because people did not speak"], answer: 1, explain: "By definition, prehistory is the period before writing." },
      { type: "mc", q: "Which method can date organic remains up to about 50,000 years ago?", options: ["Radiocarbon (C-14)", "Dendrochronology", "Stratigraphy"], answer: 0, explain: "C-14 measures the remaining radioactive carbon, which decays over time." },
      { type: "tf", q: "Homo sapiens is descended from the Neanderthals.", answer: false, explain: "Neanderthals and sapiens are cousin species, with an older common ancestor." },
      { type: "mc", q: "Which species was the first to leave Africa and use fire regularly?", options: ["Homo erectus", "Australopithecus afarensis", "Homo habilis"], answer: 0, explain: "Homo erectus spread into Asia and Europe and used fire." },
      { type: "text", q: "What is the practice of selecting plants and animals to make them useful to humans called?", answer: ["domestication", "the domestication"], explain: "Domestication is at the heart of the Neolithic Revolution." },
      { type: "mc", q: "Which of these is a direct consequence of agricultural surplus?", options: ["The rise of non-farming specialists", "The end of pottery", "The return to nomadism"], answer: 0, explain: "With enough stores, some people could devote themselves to other crafts." },
      { type: "order", q: "Put these in chronological order.", items: ["Appearance of Homo sapiens", "Lascaux paintings", "Beginning of the Neolithic", "Village of Jericho", "Invention of writing"], explain: "300,000 years ago; about 17,000 years ago; 10,000 BC; about 8000 BC; about 3300 BC." },
      { type: "num", q: "In about what year BC did Ötzi, the Iceman of Similaun, live? (write just the number)", answer: 3300, tol: 200, explain: "He lived around 3300 BC, in the Copper Age." },
      { type: "tf", q: "Farming began in a single place and spread from there to the whole world.", answer: false, explain: "It arose independently in several centres: the Near East, China, Mesoamerica, the Andes, New Guinea and others." },
      { type: "mc", q: "Why can cultivated cereals not spread without humans?", options: ["They were selected for ears that do not scatter their seeds on their own", "Their seeds are too small", "They only grow in laboratories"], answer: 0, explain: "Human selection favoured plants with non-shattering ears: the seeds stay attached and have to be sown." },
      { type: "mc", q: "What was a negative effect of the shift to farming?", options: ["More tooth decay and disease, including from domestic animals", "Less food available overall", "Being unable to build houses"], answer: 0, explain: "A less varied diet and living alongside animals encouraged tooth decay and zoonoses, while allowing more people to live." }
    ]
  }
});
