TOPIC('en', {
  id: "l2-sci-ecosistemi",
  title: "Ecosystems",
  intro: "A wolf, a wood, a lake, a coral reef: no living thing lives alone. Every organism depends on other organisms and on the environment around it: light, water, soil, temperature. The study of these relationships is called <b>ecology</b>. In this lesson we find out how an <b>ecosystem</b> is organised, who eats whom, how <b>energy</b> and <b>matter</b> circulate (the <b>biogeochemical cycles</b>) and why <b>biodiversity</b> is so important, and so threatened.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "What ecology is: levels of organisation",
      html: `<p>The term <b>ecology</b> (from the Greek <i>oikos</i>, house, and <i>logos</i>, study) was coined in <b>1866</b> by the German biologist <b>Ernst Haeckel</b>. Ecology studies the relationships between organisms and their environment, at increasing levels of complexity:</p>
<ul>
<li><b>Individual</b>: a single organism;</li>
<li><b>Population</b>: individuals of the same species living in the same area (the deer in a wood);</li>
<li><b>Community</b> (or biocoenosis): all the populations of different species living in the same area;</li>
<li><b>Ecosystem</b>: the community plus the physical (non-living) environment it interacts with, in a system that exchanges energy and matter (a term coined by Arthur Tansley, 1935);</li>
<li><b>Biome</b>: a large group of ecosystems with similar climate and vegetation (tundra, taiga, rainforest, savannah, desert);</li>
<li><b>Biosphere</b>: all the ecosystems on Earth, that is, the part of the planet where there is life (from the ocean floor about 10 km deep up to a few km into the atmosphere).</li>
</ul>
<p>An ecosystem has two components:</p>
<ul>
<li><b>abiotic</b> (non-living) factors: light, temperature, water, pH, salinity, soil composition, wind;</li>
<li><b>biotic</b> (living) factors: organisms and their interactions (predation, competition, etc.).</li>
</ul>
<p>Every species lives in a <b>habitat</b> (the place with its conditions, its "address") and has an <b>ecological niche</b> (its "job"): all the resources it uses and the way it lives (what it eats, when it is active, where it shelters). According to <b>Gause</b>'s <b>competitive exclusion principle</b> (1934, with experiments on two species of <i>Paramecium</i>), two species with the same niche cannot coexist for long in the same place: either one wins out, or they become different (like finches with different beaks).</p>`
    },
    {
      type: "3d",
      title: "The biosphere in layers (diagram)",
      scene: "layers",
      options: { layers: [
        { r: 1, color: "#60a5fa", label: "Atmosphere (life in the first few km)" },
        { r: 0.92, color: "#22c55e", label: "Biosphere (soil, water, organisms)" },
        { r: 0.85, color: "#a16207", label: "Earth's crust" },
        { r: 0.55, color: "#f97316", label: "Mantle" },
        { r: 0.25, color: "#ef4444", label: "Core" }
      ] },
      caption: "The biosphere is an extremely thin layer, a few tens of km thick compared with the Earth's radius of about 6370 km."
    },
    {
      type: "text",
      title: "Who does what: roles in the ecosystem",
      html: `<p>Every organism has a role in the flow of energy:</p>
<ul>
<li><b>Producers</b> (autotrophs): they make organic matter from inorganic substances. Plants, algae and cyanobacteria use <b>photosynthesis</b> (the energy of light); in hydrothermal vents on the ocean floor some bacteria use chemical energy (<b>chemosynthesis</b>), without light.</li>
<li><b>Consumers</b> (heterotrophs): they feed on other organisms. <b>Primary</b> (herbivores), <b>secondary</b> (carnivores that eat herbivores), <b>tertiary</b> (top predators). <b>Omnivores</b> occupy several levels.</li>
<li><b>Decomposers</b> (fungi and bacteria): they break down remains and waste, returning mineral salts to the soil. <b>Detritivores</b> (earthworms, millipedes) break dead matter into small pieces, making decomposition easier.</li>
</ul>
<p>Feeding relationships form <b>food chains</b>: grass → grasshopper → frog → snake → eagle. In nature, however, each species has several prey and several predators, so chains intertwine into <b>food webs</b>. The <b>trophic level</b> is the position an organism occupies in the chain (producer = level 1, herbivore = level 2, etc.).</p>
<p>Other kinds of relationships between species:</p>
<table>
<tr><th>Relationship</th><th>Effect on the two species</th><th>Example</th></tr>
<tr><td>Predation</td><td>+ / −</td><td>lion and zebra</td></tr>
<tr><td>Competition</td><td>− / −</td><td>two bird species competing for the same seeds</td></tr>
<tr><td>Parasitism</td><td>+ / − (the parasite lives at the host's expense)</td><td>tick and dog, tapeworm and human</td></tr>
<tr><td>Mutualism</td><td>+ / +</td><td>bees and flowers; lichens (alga or cyanobacterium + fungus); <i>Rhizobium</i> bacteria in the roots of legumes</td></tr>
<tr><td>Commensalism</td><td>+ / 0</td><td>remoras that attach themselves to sharks to travel and eat their leftovers</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Producer, consumer or decomposer?",
      widget: "classify",
      options: { groups: ["Producer", "Consumer", "Decomposer"], items: [
        ["Oak", 0],
        ["Deer", 1],
        ["Wolf", 1],
        ["Woodland mushroom", 2],
        ["Seaweed", 0],
        ["Earthworm", 2],
        ["Cyanobacterium", 0],
        ["Zooplankton", 1],
        ["Soil bacteria", 2]
      ] },
      caption: "The earthworm is a detritivore: in this simple scheme we put it with the decomposers. Anything that does neither photosynthesis nor chemosynthesis is never a producer."
    },
    {
      type: "svg",
      title: "A grassland food web",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<defs><marker id="ar" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#334155"/></marker></defs>
<g font-size="15" font-weight="bold" text-anchor="middle">
<rect x="20" y="230" width="120" height="44" rx="10" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="80" y="258" fill="#14532d">Grass</text>
<rect x="190" y="230" width="120" height="44" rx="10" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="250" y="258" fill="#14532d">Seeds</text>
<rect x="20" y="140" width="120" height="44" rx="10" fill="#fde68a" stroke="#b45309" stroke-width="2"/><text x="80" y="168" fill="#78350f">Grasshopper</text>
<rect x="190" y="140" width="120" height="44" rx="10" fill="#fde68a" stroke="#b45309" stroke-width="2"/><text x="250" y="168" fill="#78350f">Mouse</text>
<rect x="100" y="55" width="120" height="44" rx="10" fill="#fecaca" stroke="#b91c1c" stroke-width="2"/><text x="160" y="83" fill="#7f1d1d">Frog</text>
<rect x="360" y="140" width="120" height="44" rx="10" fill="#fecaca" stroke="#b91c1c" stroke-width="2"/><text x="420" y="168" fill="#7f1d1d">Snake</text>
<rect x="400" y="30" width="120" height="44" rx="10" fill="#e9d5ff" stroke="#7e22ce" stroke-width="2"/><text x="460" y="58" fill="#581c87">Eagle</text>
<rect x="400" y="235" width="170" height="44" rx="10" fill="#e7e5e4" stroke="#57534e" stroke-width="2"/><text x="485" y="263" fill="#292524">Decomposers</text>
</g>
<g stroke="#334155" stroke-width="3" fill="none" marker-end="url(#ar)">
<line x1="80" y1="230" x2="80" y2="188"/><line x1="250" y1="230" x2="250" y2="188"/><line x1="100" y1="230" x2="230" y2="188"/>
<line x1="80" y1="140" x2="140" y2="103"/><line x1="250" y1="140" x2="190" y2="103"/>
<line x1="210" y1="75" x2="395" y2="55"/><line x1="320" y1="150" x2="365" y2="155"/><line x1="440" y1="140" x2="455" y2="78"/><line x1="220" y1="85" x2="370" y2="143"/>
</g>
<g stroke="#a8a29e" stroke-width="2" stroke-dasharray="5 5" fill="none"><path d="M460 30 C560 60 560 200 520 232"/></g>
<text x="300" y="20" font-size="14" fill="#475569" text-anchor="middle">The arrows go from what is eaten to what eats it (energy)</text>
</svg>`,
      caption: "In the web, the eagle eats both snakes and frogs; the decomposers receive remains from all levels (dashed line)."
    },
    {
      type: "text",
      title: "The flow of energy and ecological pyramids",
      html: `<p>The Sun is the source of almost all the energy in the biosphere. Plants capture less than 1% of what reaches their leaves (some is reflected, some is used to evaporate water). This energy passes along the chain, but <b>at each step most of it is lost</b>: it is used by the organism to live (cellular respiration, movement, keeping its temperature) and given off as <b>heat</b>, and some stays in parts that are not eaten (bones, hair, roots). On average only about <b>10%</b> of the energy of one trophic level passes to the next (the <b>10% rule</b>, formulated by Raymond Lindeman in 1942; the real value ranges from 5% to 20%).</p>
<p>Consequences:</p>
<ul>
<li>food chains have <b>few links</b> (usually 3-5): there is not enough energy to support more levels;</li>
<li>top predators are <b>few and rare</b>;</li>
<li>energy <b>flows one way</b> (from the Sun, to living things, to heat), while <b>matter is recycled</b>.</li>
</ul>
<p><b>Ecological pyramids</b> show the trophic levels visually: pyramids of <b>energy</b> (always pyramid-shaped), of <b>biomass</b> (total mass of organisms) and of <b>numbers</b> (which can be upside down: one tree hosts thousands of insects).</p>`
    },
    {
      type: "example",
      title: "Calculation: how much energy reaches the lion?",
      html: `<p>In a savannah, let's assume for simplicity that the producers (grass) capture <b>20,000 kcal</b> in a year on a given area. Let's apply the 10% rule:</p>
<table>
<tr><th>Level</th><th>Organisms</th><th>Energy available</th></tr>
<tr><td>1 - Producers</td><td>grass</td><td>20,000 kcal</td></tr>
<tr><td>2 - Primary consumers</td><td>zebras, gazelles</td><td>2000 kcal</td></tr>
<tr><td>3 - Secondary consumers</td><td>lions</td><td>200 kcal</td></tr>
<tr><td>4 - Tertiary consumers</td><td>(if there were a predator of lions)</td><td>20 kcal</td></tr>
</table>
<p>Each level has 10% of the previous one: just 4 steps are enough to reduce the energy to one thousandth. That is why a wheat field can feed more people than the meat obtained from the same area used to grow animal feed: eating producers (level 1) is more energy-efficient than going through a herbivore (level 2). On average, producing 1 kg of beef takes several kg of feed (6-10 kg or more, depending on how it is calculated).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: food webs and energy",
      questions: [
        { type: "mc", q: "On average, what share of energy passes from one trophic level to the next?", options: ["About 90%", "About 10%", "About 1%"], answer: 1, explain: "This is the 10% rule: the rest is given off as heat or not used." },
        { type: "mc", q: "Mutualism is a relationship in which...", options: ["both species benefit", "one species harms the other", "one species lives at the other's expense without harm"], answer: 0, explain: "It is a +/+ relationship: for example bees and flowers." },
        { type: "tf", q: "Energy circulates in the ecosystem in cycles, like matter.", answer: false, explain: "Energy flows in one direction (Sun → organisms → heat); matter, on the other hand, is recycled." }
      ]
    },
    {
      type: "text",
      title: "Biogeochemical cycles: matter is recycled",
      html: `<p>The chemical elements we are made of (carbon, nitrogen, phosphorus, hydrogen, oxygen, sulphur...) exist in limited amounts: they don't come from outside, so they must be <b>recycled</b>. <b>Biogeochemical cycles</b> describe their path between organisms (the "bio" part) and the atmosphere, waters and rocks (the "geo" part). Water already has its own cycle (see the lesson on the hydrosphere). Let's look at the others.</p>
<p><b>The carbon cycle.</b> Carbon is the basic element of all organic molecules.</p>
<ul>
<li>Producers take in <b>CO₂</b> from the atmosphere through <b>photosynthesis</b> (6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂) and build it into organic matter;</li>
<li>consumers receive it with their food; all organisms return it as CO₂ through <b>cellular respiration</b>; decomposers release it from remains;</li>
<li>some is removed from the cycle for very long periods: as <b>fossil fuels</b> (coal, oil, gas, formed from organic remains buried for millions of years) and as limestone rocks (CaCO₃ from marine shells);</li>
<li>the oceans absorb CO₂ from the atmosphere (about a quarter of what humans emit), and this makes the water more acidic.</li>
</ul>
<p>By burning fossil fuels, humans are putting back into circulation, in a few decades, carbon that built up over millions of years: atmospheric CO₂ has risen from about <b>280 ppm</b> (parts per million) before the Industrial Revolution to over <b>420 ppm</b> today, intensifying the greenhouse effect.</p>
<p><b>The nitrogen cycle.</b> Nitrogen is found in proteins and nucleic acids. The atmosphere is <b>78%</b> nitrogen (N₂), but most organisms cannot use it in this form, because the N≡N triple bond is extremely strong.</p>
<ol>
<li><b>Fixation</b>: some bacteria (<i>Rhizobium</i> in the root nodules of beans, peas and clover; cyanobacteria) turn N₂ into ammonia (NH₃/NH₄⁺); lightning and industry also fix it (the <b>Haber-Bosch</b> process, developed between 1909 and 1913, which produces fertilisers);</li>
<li><b>Nitrification</b>: soil bacteria oxidise ammonium to nitrites (NO₂⁻) and then nitrates (NO₃⁻);</li>
<li><b>Assimilation</b>: plants absorb nitrates and ammonium and make proteins; animals get them by eating plants;</li>
<li><b>Ammonification</b>: decomposers turn organic nitrogen into ammonium;</li>
<li><b>Denitrification</b>: other bacteria reduce nitrates to N₂, which returns to the atmosphere.</li>
</ol>
<p><b>The phosphorus cycle.</b> It is needed for DNA, ATP, membranes and bones. Unlike the others it has no significant gas phase: it is slowly released from rocks (phosphates) by erosion, passes into soil and water, enters plants and then animals, and finally returns to sediments (an extremely slow process, millions of years). That is why it is often a <b>limiting factor</b> and is added to soils with fertilisers.</p>
<p>Fertilisers and detergents rich in phosphates and nitrates that reach lakes and seas cause <b>eutrophication</b>: algae grow excessively ("blooms"); when they die, decomposing bacteria use up the dissolved oxygen and the fish die from lack of oxygen. A well-known case is the Adriatic Sea in the 1980s.</p>`
    },
    {
      type: "svg",
      title: "The carbon cycle",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<defs><marker id="ac" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1e293b"/></marker></defs>
<rect x="190" y="20" width="220" height="56" rx="14" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<text x="300" y="55" font-size="17" font-weight="bold" fill="#1e3a8a" text-anchor="middle">CO₂ in the atmosphere</text>
<rect x="30" y="140" width="150" height="56" rx="14" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<text x="105" y="174" font-size="17" font-weight="bold" fill="#14532d" text-anchor="middle">Plants</text>
<rect x="420" y="140" width="150" height="56" rx="14" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<text x="495" y="174" font-size="17" font-weight="bold" fill="#78350f" text-anchor="middle">Animals</text>
<rect x="200" y="235" width="200" height="50" rx="14" fill="#e7e5e4" stroke="#57534e" stroke-width="3"/>
<text x="300" y="266" font-size="16" font-weight="bold" fill="#292524" text-anchor="middle">Soil and fossils</text>
<g stroke="#1e293b" stroke-width="3" fill="none" marker-end="url(#ac)">
<path d="M230 78 C180 100 140 120 120 138"/>
<path d="M170 140 C190 110 230 90 250 80"/>
<path d="M170 180 C300 150 330 150 418 170"/>
<path d="M440 138 C420 100 380 90 360 80"/>
<path d="M120 198 C130 220 160 240 198 255"/>
<path d="M480 198 C470 230 430 250 402 262"/>
<path d="M300 233 C300 180 300 130 300 80" stroke-dasharray="6 5"/>
</g>
<text x="95" y="105" font-size="14" font-weight="bold" fill="#166534">photosynthesis</text>
<text x="200" y="130" font-size="14" fill="#1e293b">respiration</text>
<text x="270" y="150" font-size="14" fill="#1e293b">food</text>
<text x="455" y="105" font-size="14" fill="#1e293b">respiration</text>
<text x="312" y="200" font-size="14" fill="#7c2d12">combustion and decomposition</text>
</svg>`,
      caption: "Carbon passes from the atmosphere to producers through photosynthesis and returns to the atmosphere through respiration, decomposition and combustion."
    },
    {
      type: "widget",
      title: "Which process? The nitrogen cycle",
      widget: "match",
      options: { pairs: [
        ["Fixation", "N₂ → ammonia, carried out by bacteria such as Rhizobium"],
        ["Nitrification", "Ammonium → nitrites → nitrates"],
        ["Assimilation", "Plants absorb nitrates to build proteins"],
        ["Ammonification", "Decomposers return ammonium from organic remains"],
        ["Denitrification", "Nitrates go back to nitrogen gas N₂"]
      ] },
      caption: "Match each stage to its meaning."
    },
    {
      type: "text",
      title: "Population dynamics and ecological succession",
      html: `<p>The number of individuals in a population depends on births, deaths, immigration and emigration. Under ideal conditions growth is <b>exponential</b> (J-shaped curve: the population doubles at regular intervals). But resources are limited, so growth slows down and stops at the environment's <b>carrying capacity</b> (K): growth becomes <b>logistic</b> (S-shaped curve). <b>Limiting factors</b> are either <b>density-dependent</b> (competition, predators, disease, which weigh more when the population is large) or <b>density-independent</b> (drought, fires, frosts).</p>
<p>Communities change over time through <b>ecological succession</b>. In <b>primary succession</b> the starting point is an environment with no soil (solidified lava, rock left behind by a glacier): the first to arrive are the <b>pioneers</b> (lichens, mosses), which produce soil; then grasses, shrubs, trees, up to the relatively stable <b>climax community</b>. In <b>secondary succession</b> the process restarts from existing soil after a disturbance (a fire, an abandoned field), and it is faster. An example of primary succession has been observed on the volcanic island of <b>Surtsey</b> (Iceland), born from an underwater eruption in 1963: within a few decades it was colonised by mosses, plants, insects and seabirds.</p>`
    },
    {
      type: "text",
      title: "Biodiversity and its crisis",
      html: `<p><b>Biodiversity</b> is the variety of life at three levels: <b>genetic</b> (the diversity of alleles within a species), <b>species</b> (the number of different species) and <b>ecosystem</b>. It is not evenly distributed: it increases from the poles to the equator, and tropical rainforests, which cover less than 7% of the Earth's land surface, are home to more than half of known species. There are some <b>biodiversity hotspots</b>, such as the Mediterranean basin, with many endemic species (found only there).</p>
<p>Why does it matter? It provides <b>ecosystem services</b>: pollination (about three quarters of food crops depend at least partly on pollinators), water purification, soil fertility, climate regulation, raw materials, medicines (aspirin comes from willow bark, penicillin from a mould); as well as aesthetic and cultural value. A rich community is also more <b>resilient</b>: if one species disappears, others can take over its role.</p>
<p>Some species have a role out of proportion to their abundance: <b>keystone species</b>. In 1966 the biologist <b>Robert Paine</b> removed the starfish <i>Pisaster</i> from stretches of rocky shore: mussels, its prey, took over and the number of species fell from 15 to about 8. Another example is the reintroduction of <b>wolves</b> to Yellowstone Park in 1995: the deer, kept in check and on the move, stopped grazing the riverbanks, the vegetation recovered and with it beavers, birds and even the shape of the rivers (the "trophic cascade").</p>
<p>Extinctions are a natural occurrence, but according to many estimates the current rate is <b>100 to 1000 times</b> higher than the background rate. People speak of a <b>sixth mass extinction</b>. The main causes:</p>
<ul>
<li><b>habitat loss and fragmentation</b> (deforestation, urbanisation, intensive farming);</li>
<li><b>invasive species</b> introduced by humans (the red swamp crayfish from Louisiana, the grey squirrel that is replacing the red squirrel in Italy and Britain);</li>
<li><b>overexploitation</b> (overfishing and overhunting);</li>
<li><b>pollution</b> (pesticides, plastic, eutrophication);</li>
<li><b>climate change</b> (coral bleaching, shifting ranges).</li>
</ul>
<p>The <b>IUCN</b> publishes the <b>Red List</b> of threatened species, with categories from "least concern" to "critically endangered" and "extinct".</p>`
    },
    {
      type: "example",
      title: "DDT and biomagnification",
      html: `<p>Some substances (DDT, PCBs, mercury) do not break down and build up in fatty tissue. Moving up the food chain, their concentration <b>increases</b> at each level, because each predator eats many individuals from the level below: this is <b>biomagnification</b>. A simplified example (indicative values, in parts per million):</p>
<table>
<tr><th>Level</th><th>DDT concentration</th></tr>
<tr><td>Water</td><td>0.000003 ppm</td></tr>
<tr><td>Plankton</td><td>0.04 ppm</td></tr>
<tr><td>Small fish</td><td>0.5 ppm</td></tr>
<tr><td>Predatory fish</td><td>2 ppm</td></tr>
<tr><td>Fish-eating birds (osprey)</td><td>25 ppm</td></tr>
</table>
<p>Between the water and the birds, DDT becomes <b>millions of times</b> more concentrated. In birds of prey, DDT made eggshells thinner, so the eggs broke. In 1962 <b>Rachel Carson</b>, in her book <i>Silent Spring</i>, exposed the effects of pesticides: the book helped bring about the ban on DDT in the United States in 1972 and the birth of the environmental movement. Populations of bald eagles and peregrine falcons later recovered.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand ecosystems",
      intro: "If cycles and webs feel like diagrams to memorise, try these images.",
      tabs: [
        {
          label: "🏪 The ecosystem as an economy",
          html: `<p>Producers are like <b>factories</b> that create wealth (organic matter) from energy and raw materials. Consumers are the <b>customers</b>. Decomposers are the <b>recyclers</b>: without them the city would be buried in rubbish and the raw materials would run out. Solar energy is like electricity, which comes from outside and is not recycled; carbon and nitrogen are like metals, which can be reused endlessly. An economic crisis can be devastating, and so can the loss of a keystone species.</p>`
        },
        {
          label: "🍰 The energy cake",
          html: `<p>You have a cake with 100 slices (captured solar energy). Do you eat them all? No, only 10 reach you (the herbivore); the other 90 are used for living or burned up moving around. Then the carnivore gets just 1 slice, and a second carnivore would get only 0.1. After 4-5 steps the cake is gone: that is why a chain cannot be long. It is also why each tuna (at the top) is much rarer than sardines.</p>`
        },
        {
          label: "🔄 A diagram of the nitrogen cycle",
          html: `<p>A simple way to remember the cycle: <b>N₂ → NH₄⁺ → NO₂⁻ → NO₃⁻ → proteins → NH₄⁺ → N₂</b>. The three central arrows are carried out by different bacteria. Each link is a specialised "team" of microbes, and if one is missing the cycle stops.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><defs><marker id="an" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1e293b"/></marker></defs><g font-size="16" font-weight="bold" text-anchor="middle"><rect x="20" y="40" width="110" height="50" rx="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="75" y="72" fill="#1e3a8a">N₂ (air)</text><rect x="170" y="40" width="110" height="50" rx="10" fill="#fde68a" stroke="#b45309" stroke-width="2"/><text x="225" y="72" fill="#78350f">NH₄⁺</text><rect x="320" y="40" width="110" height="50" rx="10" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/><text x="375" y="72" fill="#7c2d12">NO₂⁻</text><rect x="470" y="40" width="110" height="50" rx="10" fill="#fecaca" stroke="#b91c1c" stroke-width="2"/><text x="525" y="72" fill="#7f1d1d">NO₃⁻</text><rect x="400" y="200" width="170" height="50" rx="10" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="485" y="232" fill="#14532d">Proteins (plants)</text></g><g stroke="#1e293b" stroke-width="3" marker-end="url(#an)" fill="none"><line x1="132" y1="65" x2="168" y2="65"/><line x1="282" y1="65" x2="318" y2="65"/><line x1="432" y1="65" x2="468" y2="65"/><line x1="525" y1="92" x2="510" y2="198"/><path d="M400 225 C250 240 225 180 225 92"/><path d="M510 40 C510 10 75 10 75 38"/></g><g font-size="14" fill="#475569"><text x="150" y="110" text-anchor="middle">fixation</text><text x="300" y="110" text-anchor="middle">nitrification</text><text x="450" y="110" text-anchor="middle">nitrification</text><text x="300" y="20" text-anchor="middle">denitrification</text><text x="350" y="260" text-anchor="middle">ammonification</text><text x="545" y="165" text-anchor="start">assimilation</text></g></svg>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Forests that talk to each other",
      html: `<p>Beneath the floor of a wood, the roots of many trees are connected by <b>networks of mycorrhizal fungal hyphae</b>: a mutualistic symbiosis in which the fungus gets sugars from the tree and helps the roots absorb water and minerals (especially phosphorus and nitrogen). In the 1990s the researcher Suzanne Simard showed that carbon can pass from one tree to another through this network. The press called it the "wood wide web"; the mechanisms and importance of these exchanges are still being studied and debated by scientists, but mycorrhizal symbiosis is now proven for more than 80% of land plants.</p>`
    },
    {
      type: "curiosity",
      title: "The largest organism in the world",
      html: `<p>In the forests of Oregon (United States) the fungus <i>Armillaria ostoyae</i> covers about 9 km² with its underground mycelium (several hundred football pitches) and is estimated to be more than 2000 years old. If it really is a single individual, it is the largest known organism on the surface. Another gigantic "organism" is the quaking aspen grove <i>Pando</i> in Utah, a clone with thousands of trunks connected by the same roots, weighing about 6000 tonnes. They show that the boundaries between "individual" and "ecosystem" are not always clear-cut.</p>`
    },
    {
      type: "conceptMap",
      title: "Map of ecosystems: tap the nodes and find out why",
      nodes: [
        { id: "eco", label: "Ecosystem", x: 50, y: 6, color: "#3b82f6", html: "Community + physical environment, with flows of energy and matter.", why: "Arthur Tansley (1935) introduced the term to stress that organisms and their environment form a single physical system. Eugene Odum, with his textbook Fundamentals of Ecology (1953), made the idea the basis of modern ecology." },
        { id: "energia", label: "Energy flow", x: 18, y: 32, color: "#f59e0b", html: "Sun → producers → consumers → heat. The 10% rule.", why: "Lindeman (1942), studying Cedar Bog Lake in Minnesota, showed that about 90% of the energy is lost at each step, and explained it with the laws of thermodynamics: no energy transformation is 100% efficient." },
        { id: "cicli", label: "Biogeochemical cycles", x: 82, y: 32, color: "#22c55e", html: "Carbon, nitrogen, phosphorus: matter is recycled.", why: "Matter on Earth is a closed system: atoms are neither created nor destroyed (Lavoisier, 1789). That is why every carbon atom in your body has in the past been in an atmosphere, in a plant, perhaps in another animal." },
        { id: "reti", label: "Food webs", x: 18, y: 60, color: "#ef4444", html: "Who eats whom: intertwined chains.", why: "In 1927 Charles Elton introduced food chains and pyramids of numbers; webs describe reality better and show why removing one species can trigger knock-on effects." },
        { id: "biodiv", label: "Biodiversity", x: 82, y: 60, color: "#a855f7", html: "Variety of genes, species and ecosystems.", why: "The term was popularised in 1986 at the National Forum on BioDiversity in Washington; the Convention on Biological Diversity (Rio de Janeiro, 1992) recognises it as a common good. A varied community is more stable and resilient." },
        { id: "uomo", label: "Human impact", x: 50, y: 82, color: "#14b8a6", html: "Habitat loss, pollution, climate, invasive species.", why: "Humans already take a considerable fraction of the planet's primary productivity and have altered more than 70% of the ice-free land. Understanding ecosystems helps us find solutions (protected areas, sustainable agriculture, rewilding)." },
        { id: "chiave", label: "Keystone species", x: 50, y: 48, color: "#06b6d4", html: "Species that have a huge effect compared with their abundance.", why: "Paine (1966) with starfish and the reintroduction of wolves to Yellowstone (1995) show that top predators can determine the structure of the whole community." }
      ],
      edges: [
        ["eco", "energia", "has a"],
        ["eco", "cicli", "has"],
        ["energia", "reti", "flows through"],
        ["cicli", "biodiv", "sustain"],
        ["reti", "chiave", "include"],
        ["biodiv", "uomo", "threatened by"],
        ["chiave", "biodiv", "maintain"]
      ]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul><li>Ecosystem = community + abiotic environment. Levels: individual, population, community, ecosystem, biome, biosphere.</li><li>Energy: one-way flow, with 90% lost at each trophic level. Matter: cycles (C, N, P).</li><li>Relationships: predation (+/−), competition (−/−), parasitism (+/−), mutualism (+/+), commensalism (+/0).</li><li>Threats to biodiversity: habitat, invasive species, overexploitation, pollution, climate.</li></ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: cycles and biodiversity",
      questions: [
        { type: "mc", q: "Which organisms return mineral salts to the soil from the remains of plants and animals?", options: ["Producers", "Decomposers", "Tertiary consumers"], answer: 1, explain: "Decomposer fungi and bacteria mineralise organic matter." },
        { type: "mc", q: "Which process turns atmospheric nitrogen into ammonia?", options: ["Fixation", "Nitrification", "Denitrification"], answer: 0, explain: "Fixation is carried out mainly by bacteria such as Rhizobium and by cyanobacteria." },
        { type: "tf", q: "The phosphorus cycle has an important atmospheric gas phase.", answer: false, explain: "Phosphorus circulates mainly between rocks, soil, water and organisms." }
      ]
    }
  ],
  glossary: [
    { t: "Ecosystem", d: "A community of organisms together with the physical environment in which it lives." },
    { t: "Habitat", d: "The place where a species lives, with its conditions." },
    { t: "Ecological niche", d: "The set of resources a species uses and its way of life." },
    { t: "Producer", d: "An autotrophic organism that makes organic matter from inorganic substances." },
    { t: "Decomposer", d: "An organism (fungi, bacteria) that breaks down organic remains." },
    { t: "Trophic level", d: "The position of an organism in the food chain." },
    { t: "10% rule", d: "On average only 10% of the energy passes from one trophic level to the next." },
    { t: "Mutualism", d: "A relationship between two species from which both benefit." },
    { t: "Biogeochemical cycle", d: "The path of an element between living things, atmosphere, waters and rocks." },
    { t: "Eutrophication", d: "An excess of nutrients in water that causes algal blooms and lack of oxygen." },
    { t: "Biodiversity", d: "The variety of genes, species and ecosystems." },
    { t: "Biomagnification", d: "The increase in concentration of a persistent substance along the food chain." },
    { t: "Keystone species", d: "A species whose effect on the ecosystem is much greater than its abundance." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Who coined the term ecology in 1866?", options: ["Ernst Haeckel", "Charles Darwin", "Carl Linnaeus"], answer: 0, explain: "Haeckel formed the word from the Greek oikos (house)." },
      { type: "tf", q: "An ecosystem includes both living things and the physical environment.", answer: true, explain: "Biotic and abiotic parts form a single system." },
      { type: "num", q: "The producers have 50,000 kcal. On average, how many kcal reach the secondary consumers (level 3) according to the 10% rule?", answer: 500, unit: "kcal", explain: "50,000 → 5000 (primary) → 500 (secondary)." },
      { type: "mc", q: "The relationship between a bee and a flower is an example of...", options: ["parasitism", "mutualism", "competition"], answer: 1, explain: "The bee gets nectar, the flower gets pollinated." },
      { type: "order", q: "Put the food chain in order from the producer to the top.", items: ["Grass", "Grasshopper", "Frog", "Snake"], explain: "Producer, primary consumer, secondary consumer, tertiary consumer." },
      { type: "mc", q: "Why are food chains rarely longer than 4-5 links?", options: ["Because of lack of space", "Because about 90% of the energy is lost at each level", "Because predators become extinct"], answer: 1, explain: "After a few steps there is too little energy left to support more levels." },
      { type: "text", q: "What is the excess of nutrients (nitrates and phosphates) in a lake that causes algal blooms called?", answer: ["eutrophication", "eutrophisation"], explain: "When the algae die, decomposers use up the oxygen and the fish die." },
      { type: "tf", q: "Matter circulates in cycles, while energy flows in one direction.", answer: true, explain: "Solar energy arrives, passes along the chain and is lost as heat; atoms, on the other hand, are recycled." },
      { type: "mc", q: "Which process returns the carbon of organisms to the atmosphere?", options: ["Respiration and decomposition", "Nitrogen fixation", "Eutrophication"], answer: 0, explain: "Respiration, decomposition and combustion release CO₂." },
      { type: "mc", q: "Why is the loss of a keystone species so serious?", options: ["Because it has a disproportionate effect on the structure of the community", "Because it is always the most numerous", "Because it has no predators"], answer: 0, explain: "Like the starfish Pisaster or the wolf in Yellowstone, it affects many other species." }
    ]
  }
});
