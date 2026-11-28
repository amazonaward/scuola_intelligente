TOPIC('en', {
  id: "l2-sci-mitosi-meiosi",
  title: "Mitosis and meiosis",
  intro: "A newborn baby came from a single cell, the zygote. As an adult, that same person has tens of trillions of cells, and keeps making millions every second to replace old ones. How does one cell become two without losing a single piece of genetic information? And how do two parents produce a child who is not identical to either of them? The answers are <b>mitosis</b>, which produces identical copies, and <b>meiosis</b>, which produces gametes, different every time. Together with the <b>cell cycle</b>, they are the subject of this lesson.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Chromosomes, DNA and chromosome number",
      html: `<p>The DNA of a eukaryotic cell is divided into linear molecules wrapped around proteins (<i>histones</i>): this is <b>chromatin</b>. When the cell divides, the chromatin condenses to form <b>chromosomes</b>, visible under a light microscope. A duplicated chromosome is made of two <b>sister chromatids</b>, identical copies joined at a point called the <b>centromere</b>.</p>
<p>In humans every body cell (<b>somatic</b> cell) has <b>46 chromosomes</b>, organised into <b>23 pairs of homologous chromosomes</b>: in each pair, one chromosome comes from the father and one from the mother. Homologues have the same shape and the same genes (though possibly in different versions, or <b>alleles</b>). Twenty-two pairs are <b>autosomes</b>; the twenty-third is the pair of <b>sex chromosomes</b>: XX in women, XY in men.</p>
<ul>
<li>A cell with complete pairs is <b>diploid</b> (<b>2n</b>): in humans 2n = 46.</li>
<li><b>Gametes</b> (egg cell and sperm cell) have only one chromosome from each pair: they are <b>haploid</b> (<b>n</b>): in humans n = 23.</li>
<li>Fertilisation joins two gametes: n + n = 2n and the original number is restored.</li>
</ul>
<p>The number of chromosomes is characteristic of each species, but it says nothing about how "evolved" an organism is: the chimpanzee has 48 chromosomes, the dog 78, the pea 14, rice 24, a goldfish about 100, and a species of Australian ant (<i>Myrmecia pilosula</i>) only 2 (and the males 1).</p>`
    },
    {
      type: "text",
      title: "The cell cycle",
      html: `<p>A dividing cell goes through a repeating sequence: the <b>cell cycle</b>. It is divided into two main periods:</p>
<ul>
<li><b>Interphase</b>: the period of growth and preparation (usually 90% of the cycle, about 22-23 hours out of 24 in a human cell in culture). It includes:
<ul>
<li><b>G1</b> (Gap 1): the cell grows, carries out its functions, makes proteins and organelles;</li>
<li><b>S</b> (synthesis): the DNA is <b>replicated</b>; at the end each chromosome is made of two sister chromatids. The centrosome duplicates;</li>
<li><b>G2</b> (Gap 2): further growth, checking of replication, preparation for division.</li>
</ul></li>
<li><b>M phase</b> (mitosis + cytokinesis): division of the nucleus and then of the cytoplasm, about one hour.</li>
</ul>
<p>Some cells leave the cycle and stay in a resting phase called <b>G0</b>: mature neurons and muscle cells no longer divide, while others (such as liver cells) can re-enter the cycle if repair is needed.</p>
<p>The cycle is monitored by <b>checkpoints</b>, especially at the end of G1, in G2 and in metaphase, where proteins such as <b>cyclins</b> and <b>cyclin-dependent kinases</b> (Cdks) decide whether to go ahead: "Is the DNA intact? Has it been copied completely? Are all the chromosomes attached to the spindle?" If the DNA is damaged, the protein <b>p53</b> stops the cycle or triggers programmed cell death (<b>apoptosis</b>). If these checks fail, the cell can become cancerous.</p>`
    },
    {
      type: "svg",
      title: "The cell cycle",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="300" cy="150" r="110" fill="none" stroke="#cbd5e1" stroke-width="40"/>
<path d="M300 40 A110 110 0 0 1 395 205" fill="none" stroke="#22c55e" stroke-width="40"/>
<path d="M395 205 A110 110 0 0 1 220 240" fill="none" stroke="#f59e0b" stroke-width="40"/>
<path d="M220 240 A110 110 0 0 1 190 85" fill="none" stroke="#3b82f6" stroke-width="40"/>
<path d="M190 85 A110 110 0 0 1 300 40" fill="none" stroke="#ef4444" stroke-width="40"/>
<text x="300" y="150" font-size="18" font-weight="bold" fill="#1e293b" text-anchor="middle">Cell</text>
<text x="300" y="172" font-size="18" font-weight="bold" fill="#1e293b" text-anchor="middle">cycle</text>
<text x="450" y="95" font-size="16" font-weight="bold" fill="#166534">G1: growth</text>
<text x="440" y="250" font-size="16" font-weight="bold" fill="#92400e">S: DNA replication</text>
<text x="60" y="230" font-size="16" font-weight="bold" fill="#1e40af">G2: preparation</text>
<text x="60" y="55" font-size="16" font-weight="bold" fill="#991b1b">M: division</text>
<text x="300" y="285" font-size="14" fill="#475569" text-anchor="middle">G1 + S + G2 = interphase (most of the time)</text>
</svg>`,
      caption: "The cycle of a cell: G1, S and G2 make up interphase; M phase (mitosis and cytokinesis) is short."
    },
    {
      type: "text",
      title: "Mitosis in five stages",
      html: `<p><b>Mitosis</b> (a term introduced by Walther Flemming in 1882 from the Greek <i>mitos</i>, thread) distributes the duplicated chromosomes into two identical nuclei. One 2n cell produces two 2n cells, genetically identical to the parent cell.</p>
<ol>
<li><b>Prophase</b>: the chromatin condenses into chromosomes (each with two sister chromatids); the nucleolus disappears; the centrosomes move to the poles and the microtubule <b>mitotic spindle</b> forms from the centrioles. In <b>prometaphase</b> the nuclear envelope breaks up and the microtubules attach to the chromosomes at the <b>kinetochores</b> (protein structures on the centromere).</li>
<li><b>Metaphase</b>: the chromosomes line up on the cell's equator (the <b>metaphase plate</b>). This is the best moment to count and photograph the chromosomes (the <b>karyotype</b>).</li>
<li><b>Anaphase</b>: the centromeres split and the sister chromatids, now chromosomes in their own right, are pulled towards opposite poles as the microtubules shorten. Each pole receives a complete set.</li>
<li><b>Telophase</b>: the chromosomes decondense, and the nuclear envelope and nucleoli reappear: two daughter nuclei.</li>
<li><b>Cytokinesis</b> (not a phase of mitosis, but it goes with it): the cytoplasm divides. In animal cells a <b>contractile ring</b> of actin and myosin forms a cleavage furrow that pinches the cell in two; in plant cells the wall prevents pinching and a <b>cell plate</b> forms across the middle of the cell, becoming the new wall.</li>
</ol>
<p>The result: <b>two daughter cells with the same number of chromosomes and the same DNA as the parent cell</b>.</p>`
    },
    {
      type: "svg",
      title: "The phases of mitosis (cell with 2n = 4)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g fill="#fff" stroke="#475569" stroke-width="3"><circle cx="70" cy="130" r="55"/><circle cx="195" cy="130" r="55"/><circle cx="320" cy="130" r="55"/><circle cx="445" cy="130" r="55"/></g>
<ellipse cx="540" cy="130" rx="55" ry="45" fill="#fff" stroke="#475569" stroke-width="3"/>
<g stroke-width="6" stroke-linecap="round" fill="none">
<path d="M45 115 l10 15 M60 110 l10 18" stroke="#dc2626"/><path d="M70 140 l12 -10 M88 148 l14 -8" stroke="#2563eb"/>
<line x1="170" y1="110" x2="190" y2="125" stroke="#dc2626"/><line x1="190" y1="110" x2="170" y2="125" stroke="#dc2626"/><line x1="210" y1="140" x2="225" y2="155" stroke="#2563eb"/><line x1="225" y1="140" x2="210" y2="155" stroke="#2563eb"/>
<line x1="320" y1="85" x2="320" y2="175" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 4"/>
<path d="M305 100 l30 0 M305 125 l30 0" stroke="#dc2626"/><path d="M305 150 l30 0 M305 170 l30 0" stroke="#2563eb"/>
<path d="M425 90 l12 -8 M452 90 l-12 -8 M425 170 l12 8 M452 170 l-12 8" stroke="#dc2626"/><path d="M428 110 l10 -8 M450 110 l-10 -8 M428 150 l10 8 M450 150 l-10 8" stroke="#2563eb"/>
<circle cx="520" cy="130" r="16" fill="#fecaca" stroke="#dc2626" stroke-width="3"/><circle cx="560" cy="130" r="16" fill="#bfdbfe" stroke="#2563eb" stroke-width="3"/>
<line x1="540" y1="87" x2="540" y2="173" stroke="#475569" stroke-width="4" stroke-dasharray="3 3"/>
</g>
<text x="70" y="220" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Prophase</text>
<text x="195" y="220" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Prometaphase</text>
<text x="320" y="220" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Metaphase</text>
<text x="445" y="220" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Anaphase</text>
<text x="540" y="220" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Telophase</text>
<text x="300" y="265" font-size="14" fill="#475569" text-anchor="middle">Red and blue: two pairs of homologous chromosomes (one large pair, one small pair)</text>
</svg>`,
      caption: "In metaphase the chromosomes lie on the equator; in anaphase the sister chromatids separate towards opposite poles."
    },
    {
      type: "widget",
      title: "What happens in each phase?",
      widget: "match",
      options: { pairs: [
        ["Prophase", "Chromatin condenses into chromosomes, the spindle forms"],
        ["Metaphase", "Chromosomes line up on the equator"],
        ["Anaphase", "Sister chromatids separate towards the poles"],
        ["Telophase", "The nuclear envelopes re-form"],
        ["Cytokinesis", "The cytoplasm divides into two cells"],
        ["S phase", "The DNA is replicated"]
      ] },
      caption: "Match each phase to its description."
    },
    {
      type: "example",
      title: "Counting cells: exponential growth",
      html: `<p>With every mitosis the number of cells doubles. Starting from a single cell, after <i>n</i> divisions there are <b>2ⁿ</b> cells:</p>
<ul>
<li>after 10 divisions: 2¹⁰ = <b>1024</b>;</li>
<li>after 20: 2²⁰ ≈ <b>one million</b>;</li>
<li>after 30: 2³⁰ ≈ <b>one billion</b>.</li>
</ul>
<p>With one division every 24 hours, after 30 days one cell would have become more than a billion. If all divisions went on unchecked, the body would be out of control: that is why the organism regulates the cycle with many brakes. A tumour arises precisely from cells that have lost their brakes (mutations in genes that regulate the cycle, such as <i>p53</i>) and keep on dividing. A bacterium like <i>Escherichia coli</i>, dividing every 20 minutes, goes through 30 generations in 10 hours: from 1 cell more than a billion would arise.</p>`
    },
    {
      type: "text",
      title: "Asexual reproduction",
      html: `<p>When an organism reproduces by mitosis alone (or by simple cell division) without the fusion of gametes, this is <b>asexual reproduction</b>: the offspring are <b>clones</b> of the parent, genetically identical (apart from mutations). It is fast and needs only one individual, but it produces no variation.</p>
<ul>
<li><b>Binary fission</b>: in bacteria (without mitosis, by duplicating the circular chromosome) and in protists such as amoebas and paramecia.</li>
<li><b>Budding</b>: a "bud" grows on the parent and then breaks off (hydra, yeasts).</li>
<li><b>Fragmentation and regeneration</b>: a fragment can give rise to a whole individual (planarians, starfish).</li>
<li><b>Vegetative propagation</b> in plants: runners (strawberry), bulbs, tubers (potato), cuttings.</li>
<li><b>Parthenogenesis</b>: development of an unfertilised egg (male bees, some lizards and insects).</li>
</ul>
<p><b>Sexual reproduction</b>, by contrast, combines the genetic material of two parents through gametes. It costs more (you have to find a partner) but it produces <b>variation</b>, which gives the species a better chance of adapting when the environment changes: parasites and diseases, for example, struggle to "specialise" on ever-new genomes.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: the cycle and mitosis",
      questions: [
        { type: "mc", q: "In which phase of interphase is the DNA replicated?", options: ["G1", "S", "G2"], answer: 1, explain: "S stands for synthesis: a copy of all the DNA is made." },
        { type: "num", q: "A human somatic cell enters mitosis. How many chromosomes will each daughter cell have?", answer: 46, explain: "Mitosis keeps the chromosome number the same: 2n = 46." },
        { type: "tf", q: "In anaphase the homologous chromosomes separate.", answer: false, explain: "In mitotic anaphase the sister chromatids separate; homologues separate in anaphase I of meiosis." }
      ]
    },
    {
      type: "text",
      title: "Meiosis: halving in order to recombine",
      html: `<p><b>Meiosis</b> takes place in the reproductive organs (testes and ovaries) and turns one diploid cell (2n) into <b>four haploid cells</b> (n), each different from the others. It involves <b>a single DNA replication</b>, followed by <b>two consecutive divisions</b>: meiosis I and meiosis II.</p>
<p><b>Meiosis I</b> (reduction division: from 2n to n):</p>
<ul>
<li><b>Prophase I</b>: the homologues pair up closely (<b>synapsis</b>) forming <b>tetrads</b> (4 chromatids). <b>Crossing over</b> takes place between non-sister chromatids: they exchange segments of DNA at points called <b>chiasmata</b>. Each chromosome becomes a mosaic of maternal and paternal material.</li>
<li><b>Metaphase I</b>: the <b>pairs</b> of homologues line up on the equator. Which pole each pair faces is random: this is <b>independent assortment</b>.</li>
<li><b>Anaphase I</b>: the <b>homologues</b> separate (not the chromatids!), each still made of two chromatids.</li>
<li><b>Telophase I</b> and cytokinesis: two haploid cells (n), with chromosomes still duplicated.</li>
</ul>
<p><b>Meiosis II</b> (equational division, similar to mitosis, with no new replication): in anaphase II the <b>sister chromatids</b> separate. Final result: <b>4 haploid cells</b> with single chromosomes.</p>
<p>In humans <b>spermatogenesis</b> produces four sperm cells from each cell; <b>oogenesis</b> produces only one large egg (the other three products, the polar bodies, are small and break down), because the egg must contain the reserves for the early development of the embryo. Oogenesis begins before birth and stops in prophase I, resuming even decades later, at puberty and with ovulation.</p>`
    },
    {
      type: "svg",
      title: "Mitosis and meiosis compared (cell 2n = 4)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="150" y="25" font-size="18" font-weight="bold" fill="#1e293b" text-anchor="middle">MITOSIS</text>
<text x="450" y="25" font-size="18" font-weight="bold" fill="#1e293b" text-anchor="middle">MEIOSIS</text>
<line x1="300" y1="10" x2="300" y2="290" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5 5"/>
<circle cx="150" cy="75" r="30" fill="#fff" stroke="#475569" stroke-width="3"/>
<text x="150" y="82" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">2n</text>
<path d="M150 108 L150 135" stroke="#475569" stroke-width="3"/><text x="170" y="125" font-size="14" fill="#475569">1 division</text>
<circle cx="105" cy="170" r="28" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/><circle cx="195" cy="170" r="28" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<text x="105" y="176" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">2n</text><text x="195" y="176" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">2n</text>
<text x="150" y="235" font-size="14" fill="#1e293b" text-anchor="middle">2 identical cells</text>
<text x="150" y="260" font-size="14" fill="#1e293b" text-anchor="middle">growth, repair, cloning</text>
<circle cx="450" cy="75" r="30" fill="#fff" stroke="#475569" stroke-width="3"/>
<text x="450" y="82" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">2n</text>
<path d="M450 108 L450 125" stroke="#475569" stroke-width="3"/>
<circle cx="400" cy="145" r="20" fill="#fef3c7" stroke="#b45309" stroke-width="3"/><circle cx="500" cy="145" r="20" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>
<text x="400" y="151" font-size="14" font-weight="bold" fill="#92400e" text-anchor="middle">n</text><text x="500" y="151" font-size="14" font-weight="bold" fill="#92400e" text-anchor="middle">n</text>
<g fill="#dcfce7" stroke="#15803d" stroke-width="3"><circle cx="370" cy="200" r="17"/><circle cx="430" cy="200" r="17"/><circle cx="470" cy="200" r="17"/><circle cx="530" cy="200" r="17"/></g>
<g font-size="14" font-weight="bold" fill="#166534" text-anchor="middle"><text x="370" y="206">n</text><text x="430" y="206">n</text><text x="470" y="206">n</text><text x="530" y="206">n</text></g>
<text x="450" y="245" font-size="14" fill="#1e293b" text-anchor="middle">2 divisions, 4 different cells</text>
<text x="450" y="268" font-size="14" fill="#1e293b" text-anchor="middle">production of gametes</text>
</svg>`,
      caption: "Mitosis keeps the number of chromosomes; meiosis halves it and produces genetically different cells."
    },
    {
      type: "text",
      title: "Why meiosis creates variation",
      html: `<p>There are three mechanisms that, one on top of the other, make every individual practically unique (except identical twins):</p>
<ol>
<li><b>Crossing over</b> in prophase I: it reshuffles the genes within each pair of homologues (usually 1-3 exchanges per pair);</li>
<li><b>Independent assortment</b> of chromosomes in metaphase I: with <i>n</i> pairs, 2ⁿ combinations are possible. For humans 2²³ = <b>8,388,608</b> different gametes, even without counting crossing over;</li>
<li><b>Random fertilisation</b>: which sperm meets which egg? The possible combinations are (2²³)² ≈ <b>70 trillion</b> (7 × 10¹³), even before crossing over.</li>
</ol>
<p>Without meiosis the number of chromosomes would double in every generation: meiosis halves it so that fertilisation can restore it.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: meiosis and variation",
      questions: [
        { type: "mc", q: "How many cell divisions does meiosis include?", options: ["One", "Two", "Four"], answer: 1, explain: "Meiosis I (reduction) and meiosis II (equational)." },
        { type: "num", q: "How many different gametes can a cell with n = 4 produce through independent assortment alone?", answer: 16, explain: "2⁴ = 16." },
        { type: "tf", q: "Fertilisation restores the diploid number of chromosomes.", answer: true, explain: "n + n = 2n: the two haploid gametes form the diploid zygote." }
      ]
    },
    {
      type: "example",
      title: "Errors in meiosis: when chromosomes fail to separate",
      html: `<p>Sometimes the homologues (in anaphase I) or the chromatids (in anaphase II) fail to separate: this is <b>non-disjunction</b>. The result is gametes with one chromosome too many or too few; if they take part in fertilisation, the result is <b>aneuploidy</b>:</p>
<ul>
<li><b>Down syndrome</b>: trisomy of chromosome 21 (47 chromosomes). It was described in 1866 by Langdon Down; in 1959 <b>Jérôme Lejeune</b> discovered its chromosomal cause. The probability rises with the mother's age: about 1 in 1500 at 20, 1 in 100 at 40;</li>
<li><b>Turner syndrome</b>: a woman with only one X (45, X);</li>
<li><b>Klinefelter syndrome</b>: a male with XXY chromosomes (47).</li>
</ul>
<p>Many other aneuploidies are incompatible with life and cause early miscarriages. They can be detected with a <b>karyotype</b>, an ordered picture of the chromosomes in metaphase.</p>`
    },
    {
      type: "widget",
      title: "Mitosis or meiosis?",
      widget: "classify",
      options: { groups: ["Mitosis", "Meiosis", "Both"], items: [
        ["Produces genetically identical cells", 0],
        ["Produces gametes", 1],
        ["Includes DNA replication before it starts", 2],
        ["Crossing over takes place", 1],
        ["Two consecutive divisions", 1],
        ["Used for growth and tissue repair", 0],
        ["Microtubule spindles form", 2],
        ["The daughter cells are haploid", 1]
      ] },
      caption: "Both start from a duplication of DNA and use the spindle, but the outcomes are very different."
    },
    {
      type: "alternatives",
      title: "Other ways to understand mitosis and meiosis",
      intro: "These two divisions are easy to mix up: here are three other ways to tell them apart.",
      tabs: [
        {
          label: "🧦 Socks: pairs and photocopies",
          html: `<p>Imagine you have 23 pairs of socks (pairs of homologues: one from Dad, one from Mum). Before dividing, you make a <b>photocopy</b> of each one (replication). <b>Mitosis</b>: you split them into two boxes, each with 23 complete pairs, just like the original. <b>Meiosis</b>: in two steps: first you separate the pairs (one sock from each pair into each box, chosen at random), then you separate the photocopies: 4 boxes in all, each with 23 socks, different every time. On top of that, along the way you swap pieces between the socks of a pair (crossing over).</p>`
        },
        {
          label: "🃏 The deck of cards",
          html: `<p>You have a deck made of two 23-card decks put together (23 from the father, 23 from the mother). To make a gamete, you <b>draw one card from each pair</b> by tossing a coin: each gamete is a hand of 23 cards. How many different hands? 2 choices for each of the 23 pairs: 2²³ ≈ 8.4 million. If the child receives two hands (one from each parent), there are about 70 trillion possible combinations.</p>`
        },
        {
          label: "🎯 Summary table",
          html: `<table>
<tr><th></th><th>Mitosis</th><th>Meiosis</th></tr>
<tr><td>Cells where it occurs</td><td>somatic</td><td>germ cells (gonads)</td></tr>
<tr><td>Number of divisions</td><td>1</td><td>2</td></tr>
<tr><td>Cells produced</td><td>2</td><td>4</td></tr>
<tr><td>Chromosome number</td><td>stays 2n</td><td>from 2n to n</td></tr>
<tr><td>Daughter cells</td><td>identical to the parent cell</td><td>different from each other</td></tr>
<tr><td>Crossing over</td><td>no</td><td>yes (prophase I)</td></tr>
<tr><td>Function</td><td>growth, repair, asexual reproduction</td><td>sexual reproduction</td></tr>
</table>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "HeLa cells: the immortal cell",
      html: `<p>In 1951 an American woman, <b>Henrietta Lacks</b>, died of cervical cancer. From the cells of her tumour, taken without her knowledge, scientists obtained the first human cell line able to divide indefinitely in the laboratory: <b>HeLa cells</b>. They have lost the normal "brakes" of the cell cycle and do not age. They have been used to develop the polio vaccine, to study cancer and viruses, and to test drugs. The story opened a major ethical debate on patients' informed consent, and today the Lacks family has a say in decisions about the use of the genetic data.</p>`
    },
    {
      type: "curiosity",
      title: "Telomeres and the number of divisions",
      html: `<p>Normal human cells grown in the laboratory divide at most about 50-60 times (the <b>Hayflick limit</b>, 1961). The reason lies in the <b>telomeres</b>, repeated sequences at the ends of chromosomes that get shorter with each replication, like the plastic tips of shoelaces. When they become too short, the cell stops dividing. Stem cells, germ cells and cancer cells use an enzyme, <b>telomerase</b>, to rebuild them. For their discoveries about telomeres, Blackburn, Greider and Szostak received the Nobel Prize in 2009.</p>`
    },
    {
      type: "conceptMap",
      title: "Map of cell division: tap the nodes and find out why",
      nodes: [
        { id: "ciclo", label: "Cell cycle", x: 50, y: 6, color: "#3b82f6", html: "Interphase (G1, S, G2) and M phase.", why: "The cell cycle is regulated by cyclins and Cdks, discovered by Hartwell, Nurse and Hunt (Nobel Prize 2001) by studying yeasts and sea urchin eggs. Such a fundamental system has remained practically the same in all eukaryotes." },
        { id: "mitosi", label: "Mitosis", x: 20, y: 34, color: "#22c55e", html: "One division, two identical cells.", why: "Flemming (1882) observed it by staining salamander cells: the threads of chromatin disappeared and reappeared in halves. He realised that the nucleus does not simply split in two, but shares out the threads precisely." },
        { id: "meiosi", label: "Meiosis", x: 80, y: 34, color: "#a855f7", html: "Two divisions, four haploid gametes.", why: "Oscar Hertwig (1876) observed fertilisation in the sea urchin; from this it was understood that gametes must have half the chromosomes, otherwise the number would double in every generation. Van Beneden (1883) confirmed it in Ascaris, and in 1887 Weismann deduced that a reduction division was necessary." },
        { id: "crossing", label: "Crossing over", x: 80, y: 62, color: "#f59e0b", html: "Exchange of segments between homologues.", why: "Thomas Hunt Morgan and his group (1910-1915), studying the fruit fly Drosophila, realised that genes are arranged in a row along chromosomes and that exchanges between homologues reshuffle their combinations; this led to the first gene maps." },
        { id: "asex", label: "Asexual reproduction", x: 20, y: 62, color: "#14b8a6", html: "Clones by mitosis.", why: "It works well in a stable environment and is very fast; but it carries the risk of a population where everyone is the same, vulnerable to a single parasite." },
        { id: "var", label: "Variation", x: 50, y: 82, color: "#ef4444", html: "Gametes always different thanks to crossing over, assortment and fertilisation.", why: "Without variation there is no evolution by natural selection: Darwin observed it but did not know its cause, which was only made clear by twentieth-century genetics." },
        { id: "err", label: "Errors and cancer", x: 50, y: 52, color: "#06b6d4", html: "Non-disjunction, loss of control over the cycle.", why: "Lejeune (1959) discovered that Down syndrome is due to an extra chromosome 21; in 1914 Boveri proposed that tumours arise from abnormal chromosomes, an idea confirmed decades later." }
      ],
      edges: [
        ["ciclo", "mitosi", "ends with"],
        ["ciclo", "meiosi", "prepares"],
        ["meiosi", "crossing", "includes"],
        ["mitosi", "asex", "is the basis of"],
        ["crossing", "var", "produces"],
        ["meiosi", "var", "produces"],
        ["mitosi", "err", "if unregulated"],
        ["meiosi", "err", "if faulty"]
      ]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul><li>Cell cycle: G1 → S (replicates the DNA) → G2 → M.</li><li>Mitosis: prophase, metaphase, anaphase, telophase; 2 identical 2n cells.</li><li>Meiosis: 2 divisions, 4 different n cells; crossing over in prophase I; homologues separate in anaphase I and chromatids in anaphase II.</li><li>Humans: 2n = 46, n = 23. Possible gametes: 2²³ ≈ 8.4 million.</li></ul>`
    }
  ],
  glossary: [
    { t: "Chromosome", d: "A structure containing a DNA molecule associated with proteins, visible during division." },
    { t: "Sister chromatids", d: "The two identical copies of a duplicated chromosome, joined at the centromere." },
    { t: "Homologues", d: "A pair of chromosomes with the same genes, one from the mother and one from the father." },
    { t: "Diploid (2n)", d: "A cell with two sets of chromosomes." },
    { t: "Haploid (n)", d: "A cell with only one set of chromosomes, like gametes." },
    { t: "Interphase", d: "The period of the cell cycle between two divisions (G1, S, G2)." },
    { t: "Mitosis", d: "Division of the nucleus that produces two cells identical to the parent cell." },
    { t: "Meiosis", d: "A double division that produces four haploid cells." },
    { t: "Crossing over", d: "Exchange of DNA segments between homologous chromosomes in prophase I." },
    { t: "Gamete", d: "A haploid sex cell (egg or sperm)." },
    { t: "Cytokinesis", d: "Division of the cytoplasm at the end of mitosis or meiosis." },
    { t: "Non-disjunction", d: "Failure of chromosomes to separate, a cause of aneuploidy." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "How many chromosomes does a human sperm cell have?", answer: 23, explain: "Gametes are haploid: n = 23." },
      { type: "mc", q: "In which phase of mitosis do the chromosomes line up on the equator?", options: ["Prophase", "Metaphase", "Telophase"], answer: 1, explain: "Metaphase is the phase of alignment on the metaphase plate." },
      { type: "tf", q: "At the end of mitosis the daughter cells are genetically identical to the parent cell.", answer: true, explain: "Mitosis distributes identical copies of the DNA." },
      { type: "mc", q: "Crossing over takes place...", options: ["in mitotic anaphase", "in prophase I of meiosis", "in telophase II"], answer: 1, explain: "The paired homologues exchange DNA segments in prophase I." },
      { type: "num", q: "How many different gametes can an organism with n = 3 (2n = 6) produce, considering independent assortment only?", answer: 8, explain: "2ⁿ = 2³ = 8." },
      { type: "mc", q: "How many haploid cells result from a complete meiosis?", options: ["2", "4", "8"], answer: 1, explain: "Two successive divisions after a single replication produce 4 cells." },
      { type: "text", q: "What is the phase of the cell cycle in which DNA is replicated called? (one letter)", answer: ["s", "s phase", "phase s"], explain: "It is the S phase, for DNA synthesis." },
      { type: "order", q: "Put the phases of mitosis in order.", items: ["Prophase", "Metaphase", "Anaphase", "Telophase"], explain: "Condensation, alignment, separation of the chromatids, re-formation of the nuclei." },
      { type: "mc", q: "What causes Down syndrome?", options: ["A trisomy of chromosome 21", "The absence of the X chromosome", "A viral infection"], answer: 0, explain: "A non-disjunction leads to three copies of chromosome 21 (47 chromosomes)." },
      { type: "tf", q: "In anaphase I of meiosis the sister chromatids separate.", answer: false, explain: "In anaphase I the homologues separate; the sister chromatids separate in anaphase II." }
    ]
  }
});
