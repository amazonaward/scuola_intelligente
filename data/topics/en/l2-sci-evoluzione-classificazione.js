TOPIC('en', {
  id: "l2-sci-evoluzione-classificazione",
  title: "Evolution and classification",
  intro: "A few million described species live on Earth today, and probably many more still unknown, and they all descend from common ancestors. How do new species arise? And how can we bring order to so much variety? You met Darwin and natural selection in middle school: here we take them up again more rigorously, with <b>population genetics</b> and the <b>modern synthesis</b>, and then we see how biologists <b>classify</b> living things into domains and kingdoms, following their evolutionary relationships.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Recap: Darwin and natural selection",
      html: `<p>In <b>1859</b> Charles Darwin, in <i>On the Origin of Species</i> (and independently Alfred Russel Wallace), proposed that species change over time and descend from common ancestors, and that the main mechanism is <b>natural selection</b>. It rests on four observations:</p>
<ol>
<li>individuals in a population <b>vary</b> from one another;</li>
<li>many variations are <b>heritable</b>;</li>
<li>more individuals are born than the environment can support: there is <b>competition</b> for resources;</li>
<li>individuals with traits that are more advantageous in that environment <b>survive and reproduce more</b>: these traits become more common in later generations.</li>
</ol>
<p>Darwin knew neither the source of variation nor the laws of heredity (Mendel's work, 1866, remained ignored until 1900). The <b>synthetic theory of evolution</b> (or modern synthesis, 1930s-1940s, with Fisher, Haldane, Wright, Dobzhansky, Mayr, Simpson) brought them together: <b>evolution = change in allele frequencies in a population over generations</b>. Careful: it is the <b>population</b> that evolves, not the single individual, and selection has no goal and does not "design": it rewards whatever works best <i>at that moment and in that environment</i>.</p>`
    },
    {
      type: "text",
      title: "Sources of variation and evolutionary factors",
      html: `<p>The <b>gene pool</b> of a population is the set of all the alleles present. Its composition can change for five main reasons:</p>
<ul>
<li><b>Mutations</b>: random changes in DNA (substitution of a base, insertions, deletions). They are the primary source of new alleles. They are <b>random with respect to needs</b>: the environment does not "ask for" a mutation, but picks some from among those already present. In humans an estimated thirty or so new mutations per genome arise each generation.</li>
<li><b>Sexual recombination</b> (crossing over, independent assortment, fertilisation): it reshuffles existing alleles.</li>
<li><b>Natural selection</b>: differential survival and reproduction. What counts is <b>fitness</b> (reproductive success): how many fertile offspring an individual leaves.</li>
<li><b>Genetic drift</b>: random changes in allele frequencies by pure chance, important especially in small populations. Typical cases are the <b>bottleneck effect</b> (a population drastically reduced by a disaster, like cheetahs, which are genetically very uniform) and the <b>founder effect</b> (a few individuals colonise an island).</li>
<li><b>Gene flow</b>: migration of individuals, and therefore of alleles, between populations; it tends to make populations more alike.</li>
</ul>
<p>Natural selection can follow three patterns:</p>
<table>
<tr><th>Type</th><th>What it favours</th><th>Example</th></tr>
<tr><td><b>Directional</b></td><td>one extreme of the trait</td><td>resistance to pesticides or antibiotics; larger beaks in Galápagos finches in drought years (Peter and Rosemary Grant)</td></tr>
<tr><td><b>Stabilising</b></td><td>intermediate values</td><td>babies' birth weight: those too small or too large face more risks</td></tr>
<tr><td><b>Disruptive</b></td><td>both extremes</td><td>large or small beaks but not medium ones in some African birds feeding on hard and soft seeds</td></tr>
</table>
<p>There is also <b>sexual selection</b>: traits such as the peacock's tail or a stag's antlers spread because they increase mating success, even if they reduce survival.</p>`
    },
    {
      type: "example",
      title: "Hardy-Weinberg: measuring evolution with mathematics",
      html: `<p>In 1908 the mathematician <b>Godfrey Hardy</b> and the physician <b>Wilhelm Weinberg</b> independently proved an important principle. In a large population with random mating and no mutation, migration or selection, allele frequencies stay constant. If for a gene with two alleles, <b>A</b> (frequency <i>p</i>) and <b>a</b> (frequency <i>q</i>), p + q = 1, then the genotype frequencies are:</p>
<p style="text-align:center"><b>p² (AA) + 2pq (Aa) + q² (aa) = 1</b></p>
<p>If the observed values differ from these, it means one of the conditions does not hold and the population <b>is evolving</b>.</p>
<p><b>Application.</b> Cystic fibrosis is a recessive disease (aa) that affects about 1 person in 2500 in Europe.</p>
<ol>
<li>q² = 1/2500 = 0.0004, so q = √0.0004 = <b>0.02</b>;</li>
<li>p = 1 − 0.02 = <b>0.98</b>;</li>
<li>healthy carriers (Aa): 2pq = 2 × 0.98 × 0.02 ≈ <b>0.039</b>, that is about <b>4%</b>, one person in 25.</li>
</ol>
<p>Almost all the "a" alleles are hidden in healthy heterozygotes: that is why a harmful recessive allele disappears very slowly.</p>`
    },
    {
      type: "example",
      title: "Reading a scientific name",
      html: `<p>The binomial name already tells you who is related to whom. <i>Panthera leo</i> (lion) and <i>Panthera tigris</i> (tiger) share the genus <i>Panthera</i>: they are closer to each other than to the domestic cat, <i>Felis catus</i>, which belongs to another genus (but the same family, Felidae). The wolf <i>Canis lupus</i> and the dog <i>Canis lupus familiaris</i> are actually the same species (the dog is a domestic subspecies), and indeed they interbreed with fertile offspring; the red fox, <i>Vulpes vulpes</i>, is in the same family (Canidae) but in another genus, and does not interbreed with dogs. Recognising the genus helps you understand how closely things are related far better than common names do: the whale, for example, is a mammal, while the seahorse is a fish, despite its appearance and name.</p>`
    },
    {
      type: "decision",
      title: "Antibiotics: what happens if you stop the treatment halfway?",
      html: `<p>A patient has a bacterial infection. After 3 days of an antibiotic course that was meant to last 7, they feel better and think about stopping.</p>`,
      question: "From an evolutionary point of view, what can happen?",
      options: [
        { label: "Nothing: the remaining bacteria are dead anyway.", outcome: "No: it is precisely the bacteria slightly less sensitive to the drug that survive." },
        { label: "The less sensitive bacteria survive, reproduce and pass on the resistance.", outcome: "This is natural selection in action: the antibiotic kills the sensitive bacteria, leaving those with mutations that give resistance." },
        { label: "Antibiotics make bacteria mutate and become resistant.", outcome: "No: resistance mutations are random and already exist; the drug does not cause them, it selects them." }
      ],
      answer: 1,
      explain: "Bacteria reproduce in minutes to hours: a single individual with a resistance mutation, which was irrelevant before, has a huge advantage when the drug is present and leaves many descendants. That is why antibiotics should be taken only when prescribed and for the full length of time indicated; antimicrobial resistance is one of the great global health emergencies."
    },
    {
      type: "quiz",
      title: "Mini-quiz: the mechanisms of evolution",
      questions: [
        { type: "mc", q: "According to the synthetic theory, what evolves?", options: ["The single individual", "The population, through changes in allele frequencies", "The whole species in a coordinated way"], answer: 1, explain: "Individuals do not change their DNA to adapt: it is the genetic make-up of the population that changes." },
        { type: "num", q: "In a population in Hardy-Weinberg equilibrium, q = 0.1. What is p?", answer: 0.9, tol: 0.001, explain: "p + q = 1, so p = 0.9." },
        { type: "tf", q: "Genetic drift has stronger effects in small populations.", answer: true, explain: "Chance fluctuations in frequencies matter much more when only a few individuals reproduce." }
      ]
    },
    {
      type: "text",
      title: "What a species is, and how new ones arise",
      html: `<p>According to the <b>biological species concept</b> of <b>Ernst Mayr</b> (1942), a species is a group of natural populations that can interbreed and produce <b>fertile</b> offspring, and that are reproductively isolated from other populations. The concept is useful for animals but not for bacteria or organisms that reproduce asexually, nor for fossils, for which other criteria are used (morphology, DNA).</p>
<p>A new species arises through <b>speciation</b>, that is, when two populations develop <b>reproductive isolation</b>:</p>
<ul>
<li><b>Allopatric speciation</b> (from "other homeland"): a geographical barrier (a stretch of sea, a mountain range, a river that changes course) splits a population in two. Since they no longer exchange alleles, they accumulate different mutations and undergo different selection (and drift). If they meet again, they no longer interbreed. It is the most common way; a classic example: <b>Darwin's finches</b> in the Galápagos, descended from a single species that arrived from the mainland, with different beaks for different foods, and the cichlids of the African lakes.</li>
<li><b>Sympatric speciation</b>: the new species arises in the same area, with no barriers. In plants it often happens through <b>polyploidy</b> (meiosis errors producing gametes with double the number of chromosomes: bread wheat is hexaploid, 6n = 42) or through ecological specialisation.</li>
</ul>
<p><b>Reproductive barriers</b> can be <b>prezygotic</b> (they prevent the zygote from forming: different courtship rituals, different flowering periods, incompatible genitals) or <b>postzygotic</b> (the hybrid is born but does not survive or is sterile: the <b>mule</b>, a hybrid of a male donkey and a mare, has 63 chromosomes and cannot produce normal gametes).</p>
<p>Two other important phenomena: <b>convergent evolution</b> (distantly related species develop similar traits because they face similar pressures: the wings of insects, birds and bats, or the streamlined shape of sharks and dolphins) and <b>adaptive radiation</b> (many species occupying different niches derive from one ancestor: mammals after the extinction of the dinosaurs, 66 million years ago).</p>`
    },
    {
      type: "widget",
      title: "The history of life on Earth (logarithmic scale)",
      widget: "timeline",
      options: { scale: "log", unit: "years", events: [
        { year: -4540000000, label: "Formation of the Earth", icon: "🌍" },
        { year: -3800000000, label: "First cells (prokaryotes)", icon: "🦠" },
        { year: -2400000000, label: "Oxygenic photosynthesis: oxygen in the atmosphere", icon: "🫧" },
        { year: -1800000000, label: "First eukaryotic cells", icon: "🔬" },
        { year: -541000000, label: "Cambrian explosion", icon: "🦐" },
        { year: -375000000, label: "Vertebrates move onto land", icon: "🐟" },
        { year: -252000000, label: "End-Permian extinction", icon: "🌋" },
        { year: -66000000, label: "Extinction of the non-avian dinosaurs", icon: "☄️" },
        { year: -300000, label: "Homo sapiens", icon: "🧑" }
      ] },
      caption: "On a logarithmic scale each mark corresponds to a factor of 10: this way we can see billions and thousands of years together."
    },
    {
      type: "text",
      title: "Classifying living things: from Linnaeus to domains",
      html: `<p>Bringing order to millions of species is the job of <b>systematics</b> (or taxonomy). The father of modern taxonomy is the Swede <b>Carl von Linné (Linnaeus)</b>, who in his <i>Systema Naturae</i> (first edition 1735, tenth edition 1758 for animals) introduced two fundamental ideas.</p>
<ul>
<li><b>Binomial nomenclature</b>: every species has a two-part Latin name, <b>genus</b> (capital letter) + <b>specific epithet</b> (lower case), in italics: <i>Homo sapiens</i>, <i>Canis lupus</i> (wolf), <i>Canis lupus familiaris</i> (domestic dog), <i>Quercus robur</i> (English oak). It avoids the ambiguity of common names (which change from language to language and even from region to region).</li>
<li><b>A hierarchy of nested categories (taxa)</b>: from the broadest to the most specific: <b>domain, kingdom, phylum, class, order, family, genus, species</b>. Each group contains smaller groups, like Russian dolls.</li>
</ul>
<p><b>Example: the classification of humans.</b> Domain Eukarya → kingdom Animalia → phylum Chordata → class Mammalia → order Primates → family Hominidae → genus <i>Homo</i> → species <i>Homo sapiens</i>.</p>
<p>Linnaeus classified on the basis of observable <b>similarity</b>. After Darwin, classification has a deeper criterion: it must reflect <b>evolutionary relationships</b> (<b>phylogeny</b>). The German <b>Willi Hennig</b> (1950s) founded <b>cladistics</b>: valid groups are <b>clades</b>, or <b>monophyletic</b> groups, made up of an ancestor and <b>all</b> its descendants. Trees (<b>cladograms</b>) are built on the basis of <b>shared derived characters</b> (homologies) and, today, above all by comparing DNA and protein sequences. A surprising consequence: birds are theropod dinosaurs, so the traditional "reptiles" are not a monophyletic group; crocodiles are closer to birds than to lizards.</p>`
    },
    {
      type: "svg",
      title: "A simplified phylogenetic tree of vertebrates",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g stroke="#334155" stroke-width="4" fill="none">
<line x1="40" y1="150" x2="140" y2="150"/>
<line x1="140" y1="60" x2="140" y2="240"/>
<line x1="140" y1="60" x2="400" y2="60"/>
<line x1="140" y1="240" x2="190" y2="240"/>
<line x1="190" y1="150" x2="190" y2="240"/>
<line x1="190" y1="150" x2="250" y2="150"/>
<line x1="250" y1="110" x2="250" y2="190"/>
<line x1="250" y1="110" x2="400" y2="110"/>
<line x1="250" y1="190" x2="320" y2="190"/>
<line x1="320" y1="160" x2="320" y2="220"/>
<line x1="320" y1="160" x2="400" y2="160"/>
<line x1="320" y1="220" x2="400" y2="220"/>
<line x1="190" y1="270" x2="400" y2="270"/>
<line x1="190" y1="240" x2="190" y2="270"/>
</g>
<g font-size="16" font-weight="bold" fill="#0f172a">
<text x="410" y="66">Cartilaginous fish (sharks)</text>
<text x="410" y="116">Bony fish (trout)</text>
<text x="410" y="166">Amphibians (frog)</text>
<text x="410" y="226">Reptiles and birds</text>
<text x="410" y="276">Mammals</text>
</g>
<g fill="#ef4444"><circle cx="140" cy="150" r="7"/><circle cx="190" cy="240" r="7"/><circle cx="250" cy="190" r="7"/><circle cx="320" cy="190" r="7"/></g>
<text x="20" y="30" font-size="14" fill="#475569">Each node (red circle) is a common ancestor.</text>
<text x="20" y="290" font-size="14" fill="#475569">Simplified structure: the branches are not to time scale.</text>
</svg>`,
      caption: "Simplified tree: the nodes are common ancestors; there are no 'more evolved species', only groups related to different degrees."
    },
    {
      type: "text",
      title: "The domains and kingdoms of life",
      html: `<p>In <b>1969</b> <b>Robert Whittaker</b> proposed five kingdoms: Monera, Protists, Fungi, Plants, Animals. In <b>1977</b> <b>Carl Woese</b>, comparing ribosomal RNA, showed that prokaryotes include two very different evolutionary lines: this gave rise to the <b>three-domain</b> system:</p>
<table>
<tr><th>Domain</th><th>Features</th><th>Examples</th></tr>
<tr><td><b>Bacteria</b></td><td>unicellular prokaryotes, peptidoglycan wall</td><td><i>Escherichia coli</i>, cyanobacteria, streptococci</td></tr>
<tr><td><b>Archaea</b></td><td>prokaryotes with membranes and genes more similar to eukaryotes; often in extreme environments (hot springs, salt pans, oxygen-free places)</td><td>methanogens, <i>Halobacterium</i></td></tr>
<tr><td><b>Eukarya</b></td><td>cells with a nucleus and organelles</td><td>protists, fungi, plants, animals</td></tr>
</table>
<p>Within the <b>Eukaryotes</b> we distinguish:</p>
<ul>
<li><b>Protists</b>: a varied, non-monophyletic group of mostly unicellular eukaryotes (amoebas, paramecia, unicellular algae, the malaria parasite <i>Plasmodium</i>). Some are autotrophic, others heterotrophic.</li>
<li><b>Fungi</b>: eukaryotes that are <b>heterotrophic by absorption</b> (they secrete enzymes and absorb nutrients), with a wall made of <b>chitin</b>; organised in <b>hyphae</b> that form the <b>mycelium</b>; yeasts, moulds, mushrooms. They are closer to animals than to plants.</li>
<li><b>Plants</b>: multicellular, <b>autotrophic</b> (photosynthesis), with a cellulose wall: mosses, ferns, gymnosperms (conifers, with naked seeds), angiosperms (flowering plants with fruits).</li>
<li><b>Animals</b>: multicellular, <b>heterotrophic by ingestion</b>, without a wall, mostly mobile; sponges, cnidarians, worms, molluscs, arthropods (the largest group: more than 80% of described animal species), echinoderms, chordates (including vertebrates).</li>
</ul>
<p>About 2 million species are estimated to have been described; those that exist could number 8-10 million (or many more if microorganisms are counted). <b>Viruses</b> do not belong to any domain because they are not cells.</p>`
    },
    {
      type: "widget",
      title: "Which kingdom does it belong to?",
      widget: "classify",
      options: { groups: ["Animals", "Plants", "Fungi", "Bacteria/Archaea", "Protists"], items: [
        ["Brewer's yeast", 2],
        ["Paramecium", 4],
        ["Fir tree", 1],
        ["Jellyfish", 0],
        ["Escherichia coli", 3],
        ["Porcini mushroom", 2],
        ["Unicellular green alga (Chlamydomonas)", 4],
        ["Fern", 1],
        ["Spider", 0],
        ["Marsh methanogen", 3]
      ] },
      caption: "Remember: a fungus is not a plant (it does not photosynthesise and has a chitin wall) and a jellyfish is an animal."
    },
    {
      type: "3d",
      title: "All living things are related: a molecule in common",
      scene: "molecule",
      options: {
        atoms: [
          { x: 0, y: 0, z: 0, r: 0.45, color: "#ef4444", label: "ATP: ribose" },
          { x: 0.9, y: 0.4, z: 0, r: 0.4, color: "#f59e0b", label: "phosphate" },
          { x: 1.8, y: 0.1, z: 0.3, r: 0.4, color: "#f59e0b", label: "phosphate" },
          { x: 2.7, y: 0.5, z: 0, r: 0.4, color: "#f59e0b", label: "phosphate" },
          { x: -0.9, y: -0.4, z: 0, r: 0.45, color: "#3b82f6", label: "adenine" }
        ],
        bonds: [[0, 1], [1, 2], [2, 3], [0, 4]]
      },
      caption: "The structure of ATP (adenosine triphosphate) is the same in bacteria, fungi, plants and animals: a clue to a common ancestor."
    },
    {
      type: "alternatives",
      title: "Other ways to understand evolution and classification",
      intro: "Two ideas that are often hard to grasp: the common ancestor and the fact that evolution has no goal.",
      tabs: [
        {
          label: "🌳 The tree and the cousins",
          html: `<p>Think of your family tree. You and your cousin have grandparents in common, but neither of you descends from the other. In the same way, <b>humans do not descend from chimpanzees</b>: the two share a common ancestor that lived about 6-7 million years ago, after which the two lines separated. That is why a question like "Why are there still apes, if we descend from them?" makes no sense: today's apes are our "cousins", not our ancestors.</p>`
        },
        {
          label: "🏔️ The landscape of opportunities",
          html: `<p>Imagine a landscape with hills: each point is a genetic combination and the height represents fitness. Populations move "uphill" through natural selection but stop on the first hill they come to, even if there is a higher one: evolution proceeds by small, gradual changes and cannot "go back and redesign". That is why there are "flaws" like the giraffe's recurrent laryngeal nerve, which makes a detour of several metres from the brain down to the chest and back up to the larynx: it is the legacy of an ancestor with a short neck.</p>`
        },
        {
          label: "📊 The colour game",
          html: `<p>Take 100 beans: 50 red and 50 white, scattered on a table with red spots. A bird (you, with your eyes closed) eats 10 at a time, choosing the most visible ones, that is, the white ones. After 5 "hunts" there are many more red ones left. Each time the remaining red beans "reproduce" by doubling. After a few generations the population is almost all red, even though no bean ever "wanted" to change colour: the less visible ones won. This is natural selection in miniature, and in class you can really do it with beans and coloured paper.</p>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "The longest study of evolution",
      html: `<p>Since 1988 the biologist <b>Richard Lenski</b> has been growing 12 populations of <i>Escherichia coli</i> in the laboratory, transferring them every day to a fresh medium with little glucose and with citrate. After more than 70,000 generations all the populations have become faster at growing. In one of them, around generation 31,500, an important novelty appeared: the bacteria began to feed on <b>citrate</b>, something impossible for <i>E. coli</i> in aerobic conditions. It is a real-time demonstration that random mutations and selection produce novelty.</p>`
    },
    {
      type: "curiosity",
      title: "Living fossils and missing links",
      html: `<p>The <b>coelacanth</b>, a lobe-finned fish thought to have been extinct for 66 million years, was caught alive in 1938 off South Africa. <i>Tiktaalik</i>, discovered in 2004 in Canada by Neil Shubin and colleagues (about 375 million years old), has gills and scales like a fish, but also a mobile neck and bones in its fins similar to limbs: an example of a <b>transitional form</b> between fish and tetrapods. Many others are known: <i>Archaeopteryx</i> (about 150 million years old), with reptile-like teeth and tail but also feathers, or early whales such as <i>Pakicetus</i>, with legs and the features of land mammals.</p>`
    },
    {
      type: "conceptMap",
      title: "Map of evolution: tap the nodes and find out why",
      nodes: [
        { id: "darwin", label: "Natural selection", x: 50, y: 6, color: "#3b82f6", html: "Variation, heredity, struggle for resources, differential reproductive success.", why: "Darwin and Wallace presented the theory together at the Linnean Society in 1858. It was also inspired by Malthus's essay on population (populations grow faster than resources) and by the artificial selection practised by pigeon breeders." },
        { id: "gen", label: "Genetics", x: 18, y: 32, color: "#22c55e", html: "Mutations and recombination generate variation.", why: "In the twentieth century the rediscovery of Mendel (1900) and the synthetic theory explained the cause of variation: in 1973 Dobzhansky summed it up by saying that \"nothing in biology makes sense except in the light of evolution\"." },
        { id: "hw", label: "Hardy-Weinberg", x: 82, y: 32, color: "#a855f7", html: "An equilibrium model for allele frequencies.", why: "It provides the null hypothesis: if a population departs from equilibrium, we know some factor is at work (selection, drift, migration, mutation, non-random mating)." },
        { id: "spec", label: "Speciation", x: 82, y: 60, color: "#f59e0b", html: "Reproductive isolation and the birth of new species.", why: "Mayr (1942) based the species concept on reproductive isolation and studied isolated populations on Pacific islands. The Galápagos and the African lakes are real natural laboratories of speciation." },
        { id: "filo", label: "Phylogeny", x: 18, y: 60, color: "#ef4444", html: "The tree of relationships among living things.", why: "Darwin drew the first sketch of a tree in 1837 with the words \"I think\". Today much more detailed trees are built by comparing the DNA sequences of thousands of species." },
        { id: "tass", label: "Classification", x: 50, y: 82, color: "#14b8a6", html: "Binomial nomenclature and hierarchical groups.", why: "Linnaeus created a practical system, independent of any evolutionary theory (he believed species were fixed); after Darwin the same scheme was reinterpreted as a reflection of common descent, and today the aim is for groups to be monophyletic." },
        { id: "prove", label: "Evidence", x: 50, y: 40, color: "#06b6d4", html: "Fossils, comparative anatomy, embryology, DNA, biogeography.", why: "All living things use the same genetic code (with small variations), a fact that is hard to explain without a common ancestor. Comparing human and chimpanzee DNA shows a similarity of about 98-99% in the sequences that can be aligned." }
      ],
      edges: [
        ["gen", "darwin", "explains variation"],
        ["darwin", "spec", "leads to"],
        ["hw", "gen", "measures changes"],
        ["spec", "filo", "creates the branches"],
        ["filo", "tass", "guides"],
        ["prove", "darwin", "support"],
        ["prove", "filo", "reconstruct"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: classification",
      questions: [
        { type: "mc", q: "Which order is correct, from the broadest to the most specific?", options: ["Genus, family, order, class", "Class, order, family, genus", "Order, class, genus, family"], answer: 1, explain: "Domain, kingdom, phylum, class, order, family, genus, species." },
        { type: "text", q: "Which scientist introduced binomial nomenclature?", answer: ["linnaeus", "carl linnaeus", "carolus linnaeus", "linné", "carl von linné", "linne"], explain: "Linnaeus used it in his Systema Naturae (1735-1758)." },
        { type: "tf", q: "Fungi are more closely related to animals than to plants.", answer: true, explain: "DNA analyses show this: fungi and animals share a more recent common ancestor than they do with plants." }
      ]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul><li>Evolution = change in allele frequencies in a population. Factors: mutation, selection, drift, gene flow, recombination.</li><li>Hardy-Weinberg: p + q = 1; p² + 2pq + q² = 1.</li><li>Speciation = reproductive isolation (allopatric or sympatric).</li><li>Three domains: Bacteria, Archaea, Eukarya. Eukaryotes: protists, fungi, plants, animals.</li><li>Species: binomial name in italics (<i>Homo sapiens</i>).</li></ul>`
    }
  ],
  glossary: [
    { t: "Natural selection", d: "Differential survival and reproduction of the best-adapted individuals." },
    { t: "Gene pool", d: "The set of all the alleles present in a population." },
    { t: "Genetic drift", d: "Random change in allele frequencies, stronger in small populations." },
    { t: "Fitness", d: "An individual's ability to leave fertile offspring." },
    { t: "Speciation", d: "The process by which new species form." },
    { t: "Reproductive isolation", d: "The impossibility of fertile interbreeding between different populations." },
    { t: "Homology", d: "Similarity due to a common ancestor." },
    { t: "Phylogeny", d: "The evolutionary history and relationships of groups of organisms." },
    { t: "Monophyletic group (clade)", d: "A group made up of an ancestor and all its descendants." },
    { t: "Binomial nomenclature", d: "The system that gives each species a two-part name: genus and specific epithet." },
    { t: "Domain", d: "The broadest category of classification: Bacteria, Archaea, Eukarya." },
    { t: "Convergent evolution", d: "Development of similar traits in unrelated groups because of similar selective pressures." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Mutations are...", options: ["caused by the need to adapt", "random with respect to the organism's needs", "possible only in bacteria"], answer: 1, explain: "Mutations are random: the environment then selects among those that already exist." },
      { type: "num", q: "A recessive disease affects 1 person in 10,000 (q² = 0.0001). What is q?", answer: 0.01, tol: 0.0005, explain: "q = √0.0001 = 0.01." },
      { type: "mc", q: "A geographical barrier that divides a population favours...", options: ["allopatric speciation", "sympatric speciation", "zero genetic drift"], answer: 0, explain: "Geographical isolation interrupts gene flow and allows the populations to diverge." },
      { type: "tf", q: "Humans descend from chimpanzees.", answer: false, explain: "We share a common ancestor with chimpanzees: they are two parallel lines." },
      { type: "text", q: "What is the name of Linnaeus's system that gives each species a two-part name (genus + species)?", answer: ["binomial nomenclature", "binomial", "binomial system", "binomial naming"], explain: "E.g. Canis lupus for the wolf." },
      { type: "mc", q: "Which domain contains the prokaryotes that often live in extreme environments and have genes similar to eukaryotes?", options: ["Bacteria", "Archaea", "Eukarya"], answer: 1, explain: "The Archaea, distinguished from Bacteria by Woese in 1977." },
      { type: "order", q: "Put the taxonomic categories in order from the broadest to the most specific.", items: ["Domain", "Kingdom", "Class", "Family", "Species"], explain: "Domain → kingdom → phylum → class → order → family → genus → species." },
      { type: "tf", q: "Fungi are plants without chlorophyll.", answer: false, explain: "They are a separate kingdom: heterotrophic by absorption, with a chitin wall, more closely related to animals." },
      { type: "mc", q: "The wings of a bird and the wings of an insect are...", options: ["homologous", "analogous", "identical in origin"], answer: 1, explain: "They have the same function but a different origin: a case of convergent evolution." },
      { type: "mc", q: "Why is drug resistance an example of natural selection?", options: ["The drug causes the desired mutation", "The drug eliminates the sensitive ones and favours the resistant ones already present", "Bacteria decide to change"], answer: 1, explain: "The drug acts as a selective factor on pre-existing variation." }
    ]
  }
});
