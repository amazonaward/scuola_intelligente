TOPIC('en', {
  id: "l3-sci-dna-genetica",
  title: "DNA and genetics",
  intro: "Why are your eyes a particular colour? Why do two parents have children who differ from each other and yet look alike? Genetics has looked for the answer in two complementary ways: in the nineteenth century <b>Gregor Mendel</b> discovered the <b>laws</b> of inheritance by counting peas, without knowing what a gene was; a century later <b>Watson and Crick</b> showed the structure of the molecule that contains genes, <b>DNA</b>. In this lesson we bring the two stories together: from Mendel's laws to the double helix, from DNA <b>replication</b> to <b>protein synthesis</b>, and on to mutations and the technologies that now let us read and edit the genome.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Mendel and inherited characteristics",
      html: `<p>Between 1856 and 1863, in the garden of the monastery in Brno, the monk <b>Gregor Mendel</b> crossed thousands of pea plants (<i>Pisum sativum</i>). He chose the plant carefully: it is easy to grow, it self-fertilises but can also be cross-pollinated by hand, and it shows <b>clearly contrasting</b> characteristics (smooth or wrinkled seeds, yellow or green, purple or white flowers, tall or short plants...). He started from <b>pure-breeding lines</b>, which over generations always produced the same characteristic. He was the first to <b>count</b> the results and treat them mathematically. He presented his results in 1865 and published them in 1866, but they were ignored until <b>1900</b>, when de Vries, Correns and Tschermak rediscovered them.</p>
<p><b>Key words.</b> A <b>gene</b> is a section of DNA that determines a characteristic; its alternative forms are <b>alleles</b>. A diploid individual has two alleles for each gene (one from each parent): if they are the same it is <b>homozygous</b> (AA or aa), if they are different it is <b>heterozygous</b> (Aa). The allele that shows even in a heterozygote is <b>dominant</b> (capital letter), the one that shows only in a homozygote is <b>recessive</b> (lower case). The <b>genotype</b> is the set of alleles, the <b>phenotype</b> is the observable characteristic.</p>`
    },
    {
      type: "text",
      title: "Mendel's three laws",
      html: `<ol>
<li><b>Law of dominance (uniformity of hybrids)</b>: crossing two pure-breeding lines that differ in one characteristic (AA × aa), all the offspring of the F₁ are alike and show the dominant characteristic (all Aa). Mendel crossed smooth and wrinkled seeds: the F₁ had only smooth seeds.</li>
<li><b>Law of segregation</b>: the alleles of each gene separate when gametes form, and each gamete receives <b>only one</b>. Crossing two hybrids (Aa × Aa), the recessive characteristic reappears in the F₂, in a <b>3 : 1</b> ratio. Mendel obtained 5474 smooth seeds and 1850 wrinkled ones (2.96 : 1). Genotypes: 1 AA : 2 Aa : 1 aa.</li>
<li><b>Law of independent assortment</b>: the alleles of different genes are distributed into gametes independently. Crossing two double heterozygotes (AaBb × AaBb) gives the phenotypic ratio <b>9 : 3 : 3 : 1</b> in the F₂. Mendel obtained 315 smooth yellow seeds, 101 wrinkled yellow, 108 smooth green and 32 wrinkled green (out of 556), very close to 9 : 3 : 3 : 1.</li>
</ol>
<p>The <b>Punnett square</b> is the tool for working out the combinations: the gametes of the two parents go along the sides and the genotypes of the offspring in the boxes. A <b>test cross</b> is used to find out whether a dominant individual is AA or Aa: it is crossed with a homozygous recessive (aa); if even one of the offspring shows the recessive characteristic, the parent was Aa.</p>
<p>The third law holds only if the genes are on <b>different chromosomes</b> (or very far apart on the same one). Genes close together on the same chromosome are inherited together, they are <b>linked</b>, unless crossing over occurs during meiosis (T. H. Morgan, the fruit fly <i>Drosophila</i>, 1910-1915).</p>`
    },
    {
      type: "svg",
      title: "The Punnett square: Aa × Aa",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="210" y="32" font-size="16" font-weight="bold" fill="#1f2937" text-anchor="middle">Gametes of parent 1</text>
<text x="60" y="165" font-size="16" font-weight="bold" fill="#1f2937" text-anchor="middle">Gametes of</text>
<text x="60" y="185" font-size="16" font-weight="bold" fill="#1f2937" text-anchor="middle">parent 2</text>
<g font-size="24" font-weight="bold" text-anchor="middle">
<text x="190" y="70" fill="#7c3aed">A</text><text x="290" y="70" fill="#0ea5e9">a</text>
<text x="125" y="130" fill="#7c3aed">A</text><text x="125" y="230" fill="#0ea5e9">a</text>
</g>
<g stroke="#334155" stroke-width="2">
<rect x="145" y="85" width="100" height="100" fill="#ddd6fe"/><rect x="245" y="85" width="100" height="100" fill="#e0f2fe"/>
<rect x="145" y="185" width="100" height="100" fill="#e0f2fe"/><rect x="245" y="185" width="100" height="100" fill="#fecaca"/>
</g>
<g font-size="26" font-weight="bold" text-anchor="middle" fill="#1f2937">
<text x="195" y="145">AA</text><text x="295" y="145">Aa</text><text x="195" y="245">Aa</text><text x="295" y="245" fill="#b91c1c">aa</text>
</g>
<g font-size="15" fill="#334155">
<text x="375" y="115">25% AA</text><text x="375" y="140">50% Aa</text><text x="375" y="165">25% aa</text>
<text x="375" y="205" font-weight="bold" fill="#047857">Dominant phenotype: 75%</text>
<text x="375" y="230" font-weight="bold" fill="#b91c1c">Recessive phenotype: 25%</text>
<text x="375" y="255" fill="#475569">Ratio 3 : 1</text>
</g>
</svg>`,
      caption: "Each heterozygous parent produces two types of gamete with equal probability: this gives the 1 : 2 : 1 and 3 : 1 ratios."
    },
    {
      type: "example",
      title: "The risk of a recessive disease",
      html: `<p><b>Cystic fibrosis</b> is a recessive genetic disease (CFTR gene): it appears only in people who are homozygous <i>aa</i>. Two healthy parents can both be <b>carriers</b> (Aa). What is the probability that they have a child with the disease?</p>
<ul>
<li>Gametes: each parent gives A with probability ½ and a with probability ½.</li>
<li>Child aa: ½ · ½ = <b>¼ = 25%</b> in each pregnancy. Healthy carrier child (Aa): 50%. Child without the disease allele: 25%.</li>
<li>If a healthy child has two carrier parents, the probability that the child is also a carrier is 2/3 (knowing that the child is not aa: 2 cases out of 3).</li>
</ul>
<p>Each pregnancy is an independent event: having already had one affected child does not change the probability for the next one.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: Mendel",
      questions: [
        { type: "mc", q: "In the cross Aa × aa, what proportion of the offspring will have the recessive phenotype?", options: ["50%", "25%", "75%", "0%"], answer: 0, explain: "Gametes A, a against a, a: 2 Aa and 2 aa, that is half of the offspring." },
        { type: "num", q: "In a cross between two double heterozygotes AaBb × AaBb, what fraction of the offspring (in sixteenths) shows both recessive characteristics?", answer: 1, explain: "The 9 : 3 : 3 : 1 ratio has only one sixteenth of double recessives (aabb)." },
        { type: "tf", q: "An individual with a dominant phenotype can be homozygous or heterozygous.", answer: true, explain: "AA and Aa have the same phenotype; a test cross with aa can tell them apart." }
      ]
    },
    {
      type: "text",
      title: "Beyond Mendel: when characteristics are not so simple",
      html: `<p>Many characteristics do not follow simple dominance:</p>
<ul>
<li><b>Incomplete dominance</b>: the heterozygote has an intermediate phenotype. In snapdragons (and in <i>Mirabilis jalapa</i>), red × white flowers give pink flowers; pink × pink gives 1 red : 2 pink : 1 white.</li>
<li><b>Codominance</b>: both alleles are expressed. In the ABO blood group system the alleles I<sup>A</sup> and I<sup>B</sup> are codominant and i<sup>0</sup> is recessive: group AB has both antigens; group A can be I<sup>A</sup>I<sup>A</sup> or I<sup>A</sup>i; group O is ii. The gene has <b>three alleles</b> (multiple alleles).</li>
<li><b>Polygenic characteristics</b>: they depend on several genes and on the environment (height, skin colour): they vary continuously.</li>
<li><b>Sex-linked characteristics</b>: genes on the X chromosome. Since males have only one X (XY), a recessive allele on the X (colour blindness, haemophilia) shows in a male even with a single copy; a female, XX, must have two. A carrier mother (X<sup>D</sup>X<sup>d</sup>) has a 50% chance of passing the allele to each child: her sons have a 50% chance of being colour-blind.</li>
<li><b>Pleiotropy</b> and <b>epistasis</b>: one gene can affect several characteristics, or the expression of one gene can depend on another.</li>
</ul>
<p>After 1900 it became clear where genes were: in 1902-1903 Sutton and Boveri observed that the behaviour of chromosomes during meiosis is just what Mendel's "factors" would require (the <b>chromosome theory of inheritance</b>); Morgan confirmed it with white-eyed flies (1910), an X-linked characteristic.</p>`
    },
    {
      type: "text",
      title: "The molecule of inheritance: DNA",
      html: `<p>What is in chromosomes? For many years genes were thought to be proteins, which are more varied and complex than DNA. The evidence against this came from three experiments:</p>
<ul>
<li><b>Griffith (1928)</b>: harmless bacteria, mixed with disease-causing bacteria killed by heat, became disease-causing: there is a "transforming substance".</li>
<li><b>Avery, MacLeod and McCarty (1944)</b> showed that the transforming substance is <b>DNA</b>.</li>
<li><b>Hershey and Chase (1952)</b>: when bacteriophage viruses infect a bacterium, what enters is the DNA (labelled with radioactive phosphorus), not the proteins (labelled with sulfur): DNA carries the information.</li>
</ul>
<p>DNA (deoxyribonucleic acid) is a <b>polymer of nucleotides</b>. Each nucleotide has a sugar (<b>deoxyribose</b>), a <b>phosphate group</b> and a <b>nitrogenous base</b>: one of two purines (adenine A and guanine G, with two rings) or two pyrimidines (cytosine C and thymine T, with one ring). The nucleotides join sugar to phosphate to form a backbone, with the bases pointing inwards.</p>
<p>In 1950 <b>Erwin Chargaff</b> discovered that in every DNA the amount of A equals that of T, and the amount of G equals that of C (in humans about 30% A, 30% T, 20% G, 20% C). In 1952 <b>Rosalind Franklin</b> and Raymond Gosling obtained the famous <b>Photo 51</b>, an X-ray diffraction image showing a helical structure. In April <b>1953</b> <b>James Watson and Francis Crick</b> published the <b>double helix</b> model in <i>Nature</i> (Nobel Prize 1962, with Maurice Wilkins):</p>
<ul>
<li>two strands wound around a common axis, with the sugar-phosphate backbone on the outside;</li>
<li>the bases are on the inside and pair up through <b>hydrogen bonds</b> according to the rule <b>A–T</b> (two bonds) and <b>G–C</b> (three bonds);</li>
<li>the strands are <b>antiparallel</b> (one runs 5′→3′, the other 3′→5′) and <b>complementary</b>: if you know one, you can work out the other;</li>
<li>10 base pairs per turn (3.4 nm), diameter 2 nm.</li>
</ul>
<p>In humans each diploid cell contains about 6 billion base pairs (3 billion per set of chromosomes), with a total length of about two metres, packed into 46 chromosomes thanks to histone proteins.</p>`
    },
    {
      type: "3d",
      title: "The double helix in 3D",
      scene: "molecule",
      options: (function () {
        var atoms = [], bonds = [], n = 16, cols = { A: '#ef4444', T: '#f59e0b', G: '#22c55e', C: '#3b82f6' };
        var s1 = 'ATGCGTACCTAGGCTA', cmp = { A: 'T', T: 'A', G: 'C', C: 'G' };
        for (var i = 0; i < n; i++) {
          var th = i * Math.PI / 5, y = (i - n / 2) * 0.28;
          var c = Math.cos(th), s = Math.sin(th), b1 = s1[i], b2 = cmp[b1];
          var base = atoms.length;
          atoms.push({ x: c * 1.1, y: y, z: s * 1.1, r: 0.16, color: '#94a3b8' });
          atoms.push({ x: -c * 1.1, y: y, z: -s * 1.1, r: 0.16, color: '#94a3b8' });
          atoms.push({ x: c * 0.4, y: y, z: s * 0.4, r: 0.13, color: cols[b1], label: b1 });
          atoms.push({ x: -c * 0.4, y: y, z: -s * 0.4, r: 0.13, color: cols[b2], label: b2 });
          bonds.push([base, base + 2]); bonds.push([base + 1, base + 3]); bonds.push([base + 2, base + 3]);
          if (i > 0) { bonds.push([base - 4, base]); bonds.push([base - 3, base + 1]); }
        }
        return { atoms: atoms, bonds: bonds };
      })(),
      caption: "Sugar-phosphate backbone (grey) on the outside, base pairs on the inside: A (red) with T (orange), G (green) with C (blue)."
    },
    {
      type: "text",
      title: "DNA replication",
      html: `<p>Before every cell division (the S phase of the cell cycle, seen in the lesson on mitosis and meiosis) the DNA has to be <b>copied</b>. Watson and Crick had already guessed the mechanism: when the two strands separate, each acts as a <b>template</b> for a new complementary strand. The model is called <b>semi-conservative</b>: each daughter double helix has one old strand and one new strand. <b>Meselson and Stahl proved it in 1958</b> by growing bacteria in heavy nitrogen (¹⁵N) and then in normal nitrogen, and separating the DNA by density.</p>
<p>The key players are enzymes:</p>
<ol>
<li><b>Helicase</b> opens the double helix by breaking the hydrogen bonds: this forms the <b>replication fork</b>.</li>
<li><b>Primase</b> makes a short RNA starter (a <i>primer</i>), because DNA polymerase cannot start from nothing.</li>
<li><b>DNA polymerase</b> adds nucleotides following the A–T, G–C rule, <b>always in the 5′→3′ direction</b>.</li>
<li>Because the strands are antiparallel, one (the <b>leading strand</b>) is copied continuously, the other (the <b>lagging strand</b>) in short pieces, the <b>Okazaki fragments</b>, which are joined by <b>DNA ligase</b>.</li>
</ol>
<p>DNA polymerase also <b>proofreads</b>: it removes wrong nucleotides. After the repair systems have done their work, the final error rate is about one in a billion bases copied. In eukaryotic chromosomes copying starts at thousands of <b>origins of replication</b> at the same time; otherwise the human genome would take weeks to copy.</p>`
    },
    {
      type: "text",
      title: "From gene to protein: the central dogma",
      html: `<p>A gene is a section of DNA that contains the instructions for a protein (or for a functional RNA). In 1958 Crick stated the <b>central dogma</b>: information flows <b>DNA → RNA → protein</b>. Proteins determine the structure and functions of the cell, and are ultimately what we observe as characteristics.</p>
<p><b>RNA</b> (ribonucleic acid) differs from DNA in three ways: its sugar is <b>ribose</b>, it has the base <b>uracil (U)</b> instead of thymine, and it is usually <b>single-stranded</b>. The main types are <b>mRNA</b> (messenger: the copy of the gene), <b>tRNA</b> (transfer: it carries the amino acids) and <b>rRNA</b> (ribosomal: part of the ribosomes).</p>
<p><b>1. Transcription</b> (in the nucleus, in eukaryotes). <b>RNA polymerase</b> binds to the gene's <b>promoter</b>, opens the helix and makes a strand of mRNA complementary to the <b>template</b> strand (A→U, T→A, G→C, C→G). In eukaryotes the primary transcript is <b>processed</b>: a cap and a poly-A tail are added, and <b>splicing</b> removes the <b>introns</b> and joins the <b>exons</b>. The mature mRNA leaves the nucleus.</p>
<p><b>2. Translation</b> (in the cytoplasm, on the ribosomes). The <b>genetic code</b> links each <b>triplet of mRNA bases (codon)</b> to an amino acid. With 4 bases in groups of 3 there are 4³ = <b>64 codons</b>: <b>61</b> code for the 20 amino acids (the code is <b>degenerate</b>: several codons for the same amino acid), AUG is the <b>start</b> codon (methionine) and UAA, UAG, UGA are the <b>stop</b> codons. The code is almost <b>universal</b>: the same in bacteria, plants and humans. Each <b>tRNA</b> carries an amino acid and has an <b>anticodon</b> complementary to the codon; the ribosome moves along the mRNA, the tRNAs bind one after another and the amino acids are joined by <b>peptide bonds</b> until the stop codon is reached. The chain then folds into the working protein.</p>
<p>The code was cracked between 1961 and 1966 (Nirenberg, Matthaei, Khorana, Holley; Nobel Prize 1968): the first codon to be deciphered was UUU = phenylalanine.</p>`
    },
    {
      type: "svg",
      title: "From DNA to protein, with an example",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs><marker id="ar2" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#475569"/></marker></defs>
<g font-size="17" font-weight="bold" text-anchor="start">
<text x="20" y="45" fill="#1d4ed8">DNA (template)</text>
<text x="20" y="125" fill="#15803d">mRNA</text>
<text x="20" y="205" fill="#b45309">Protein</text>
</g>
<g font-size="22" font-weight="bold" font-family="monospace" fill="#1d4ed8">
<text x="190" y="48">TAC</text><text x="270" y="48">CGG</text><text x="350" y="48">TTT</text><text x="430" y="48">ACT</text>
</g>
<g font-size="22" font-weight="bold" font-family="monospace" fill="#15803d">
<text x="190" y="128">AUG</text><text x="270" y="128">GCC</text><text x="350" y="128">AAA</text><text x="430" y="128">UGA</text>
</g>
<g font-size="17" font-weight="bold" fill="#b45309">
<text x="188" y="208">Met</text><text x="272" y="208">Ala</text><text x="352" y="208">Lys</text><text x="425" y="208" fill="#b91c1c">STOP</text>
</g>
<g stroke="#475569" stroke-width="3" marker-end="url(#ar2)">
<line x1="105" y1="62" x2="105" y2="95"/><line x1="105" y1="140" x2="105" y2="175"/>
<line x1="210" y1="58" x2="210" y2="95"/><line x1="290" y1="58" x2="290" y2="95"/><line x1="370" y1="58" x2="370" y2="95"/><line x1="450" y1="58" x2="450" y2="95"/>
<line x1="210" y1="138" x2="210" y2="175"/><line x1="290" y1="138" x2="290" y2="175"/><line x1="370" y1="138" x2="370" y2="175"/>
</g>
<text x="125" y="85" font-size="14" fill="#475569">transcription</text>
<text x="125" y="165" font-size="14" fill="#475569">translation</text>
<text x="300" y="260" font-size="15" fill="#334155" text-anchor="middle">Each triplet of bases (codon) corresponds to an amino acid.</text>
<text x="300" y="282" font-size="15" fill="#334155" text-anchor="middle">UGA codes for nothing: it marks the end of the chain.</text>
</svg>`,
      caption: "The template strand TAC-CGG-TTT-ACT gives the mRNA AUG-GCC-AAA-UGA and the peptide Met-Ala-Lys."
    },
    {
      type: "quiz",
      title: "Mini-quiz: DNA, RNA, proteins",
      questions: [
        { type: "mc", q: "What mRNA is transcribed from the DNA template strand 3′-TACGGA-5′?", options: ["5′-AUGCCU-3′", "5′-TACGGA-3′", "5′-ATGCCT-3′", "5′-UACGGA-3′"], answer: 0, explain: "T→A, A→U, C→G, G→C, G→C, A→U: AUGCCU." },
        { type: "num", q: "How many nucleotides are needed (not counting the stop codon) to code for a protein of 100 amino acids?", answer: 300, explain: "Each amino acid is coded by a triplet: 100 · 3 = 300." },
        { type: "tf", q: "In DNA replication, each daughter double helix contains one old strand and one new strand.", answer: true, explain: "This is the semi-conservative model, proved by Meselson and Stahl (1958)." }
      ]
    },
    {
      type: "example",
      title: "Reading a gene and mutating it",
      html: `<p>Coding strand: 5′-ATG GCC AAA TGA-3′. The mRNA has the same sequence with U instead of T: <b>AUG GCC AAA UGA</b>, so Met-Ala-Lys-stop.</p>
<ul>
<li><b>Silent substitution</b>: GCC → GCA (still Ala).</li>
<li><b>Missense</b>: AAA → GAA (Lys → Glu): a single letter changes the amino acid.</li>
<li><b>Nonsense</b>: AAA → UAA (Lys → stop): the protein ends one amino acid early.</li>
<li><b>Deletion of one base</b> (we remove the first A of AAA): AUG GCC AAU GA... the reading frame shifts and all the following codons change.</li>
</ul>`
    },
    {
      type: "text",
      title: "Mutations",
      html: `<p>A <b>mutation</b> is a permanent change in the DNA sequence. It can come from copying errors that are not repaired or from <b>mutagens</b> (UV rays, X-rays, some chemicals, smoking). The types are:</p>
<ul>
<li><b>point mutations</b> (one base changes): <b>silent</b> (same amino acid, because the code is degenerate), <b>missense</b> (a different amino acid), <b>nonsense</b> (a stop codon appears and the protein is cut short);</li>
<li><b>insertions and deletions</b> of one or more bases: if the number is not a multiple of three, the reading frame changes (<b>frameshift</b>) and almost all the amino acids after it are wrong;</li>
<li><b>chromosome mutations</b> (losses, duplications, inversions, translocations of pieces of chromosome) and <b>genome mutations</b> (a change in the number of chromosomes, such as trisomy 21, or Down syndrome).</li>
</ul>
<p><b>A famous example</b>: <b>sickle cell anaemia</b> is caused by a single base change in the gene for the β chain of haemoglobin (GAG → GTG in the DNA, i.e. GAG → GUG in the mRNA), so that glutamic acid in position six becomes valine. That single substitution makes the haemoglobin clump together and deforms the red blood cells. Heterozygotes are more resistant to malaria: that is why the allele is common in areas where malaria is widespread. <b>Cystic fibrosis</b>, on the other hand, is often caused by the deletion of 3 bases (ΔF508), which removes one phenylalanine from the CFTR protein.</p>
<p>Mutations in body (somatic) cells are not passed on to children, but they can cause cancer; mutations in gametes pass to the next generations and are the raw material of evolution, because they create new alleles.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand genetics",
      intro: "Different pictures for the same mechanisms.",
      tabs: [
        { label: "📚 The library and the recipes", html: "<p>The genome is a <b>library</b> of recipe books (the chromosomes), kept in the nucleus, which never leave the reading room. A gene is a <b>recipe</b>. When it is needed, the cell makes a <b>photocopy</b> (transcription, the mRNA) and takes it to the kitchen (the ribosome), where the cook (tRNA) reads the instructions in groups of three words (codons) and puts the ingredients (amino acids) together in the order written. A point mutation is a typing error in a recipe: changing 'salt' to 'malt' can ruin the dish (missense) or change nothing at all (silent); skipping a letter shifts all the words that follow (frameshift).</p>" },
        { label: "🤐 The zip", html: "<p>Replication is a <b>zip</b> coming undone: the double helix 'unzips' for a stretch and each side attracts the missing teeth. Every A tooth is matched by a T tooth, every G by a C, and at the end you have two identical zips, each with one old half and one new half. The fact that A pairs only with T and G only with C is the secret of the <b>accuracy</b> of the copy, which Watson and Crick discovered precisely by looking at how the bases could fit together.</p>" },
        { label: "🌳 Probability tree", html: "<p>If the Punnett square doesn't convince you, use a tree. For Aa × Aa: parent 1 gives A (½) or a (½); for each of these, parent 2 gives A (½) or a (½). Four branches, each with probability ¼: AA, Aa, aA, aa. For two independent genes just <b>multiply</b>: the probability of the recessive phenotype for both, aabb, is ¼ · ¼ = 1/16. This is the product rule, the same one used in the probability lesson: Mendel was one of the first to see that inheritance is a statistical phenomenon.</p>" },
        { label: "🧪 DNA and RNA compared", html: "<p>Move each feature into the right group: you'll see the comparison at once.</p>", widget: "classify", options: { groups: ["DNA only", "RNA only", "Both"], items: [["Deoxyribose", 0], ["Ribose", 1], ["Thymine (T)", 0], ["Uracil (U)", 1], ["Adenine (A)", 2], ["Double-stranded (usually)", 0], ["Single-stranded (usually)", 1], ["Phosphate group", 2], ["Cytosine and guanine", 2]] } }
      ]
    },
    {
      type: "text",
      title: "Reading and editing DNA",
      html: `<p>Understanding DNA has changed medicine, agriculture and justice.</p>
<ul>
<li><b>PCR</b> (polymerase chain reaction, Kary Mullis, 1983): it makes millions of copies of a DNA fragment in a few hours, through cycles of heating and cooling. It is the basis of molecular swab tests for the SARS-CoV-2 virus.</li>
<li><b>Genetic fingerprinting</b> (Alec Jeffreys, 1984): repeated sequences differ from person to person (except in identical twins): used in criminal investigations and paternity tests.</li>
<li><b>Recombinant DNA and GMOs</b>: since the 1970s, restriction enzymes have been used to cut and paste pieces of DNA. In 1978 human insulin was produced in bacteria; today crops are grown with inserted genes.</li>
<li><b>Human Genome Project</b> (1990-2003): reading of the entire human sequence, about 3 billion bases and about 20,000 protein-coding genes (only 1-2% of the genome). In 2022 the complete sequence, with no gaps, was published.</li>
<li><b>CRISPR-Cas9</b>: in 2012 Emmanuelle Charpentier and Jennifer Doudna showed that a bacterial defence system can be used as guided 'molecular scissors' to cut DNA at a chosen point. They received the Nobel Prize in Chemistry in 2020. Treatments are being studied for diseases such as sickle cell anaemia, but inheritable changes to embryos raise serious ethical problems.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Mendel's numbers were too good",
      html: `<p>Some have suspected that Mendel's results were 'too good to be true': the mathematician and biologist Ronald Fisher (1936) calculated that the ratios were closer to 3 : 1 than chance alone would lead you to expect. Possible explanations include an assistant who 'helped' the monk, or a tendency to repeat the counts when the numbers didn't fit. The debate is not settled, but the substance of Mendel's laws has been confirmed a thousand times over. A curious fact: Mendel wrote to Nägeli, a famous botanist, but was not taken seriously; he died in 1884, never knowing that his work would found a science.</p>`
    },
    {
      type: "curiosity",
      title: "We are almost all the same",
      html: `<p>Any two people share about 99.9% of their DNA: the differences are mostly single base changes (SNPs), on average about one every thousand bases. We share about 98-99% of our DNA with chimpanzees. What matters is not so much how many genes we have, but <b>how and when they are switched on or off</b>: this is the study of <b>epigenetics</b> and gene regulation. For example, your liver cells and your neurons have the same DNA but use different genes.</p>`
    },
    {
      type: "conceptMap",
      title: "Map: from characteristic to molecule",
      nodes: [
        { id: "mendel", label: "Mendel's laws", x: 15, y: 12, color: "#2563eb", html: "Dominance, segregation, independent assortment.", why: "Mendel (1866) deduced the existence of discrete inherited 'factors' by counting offspring, without knowing what they were. His success was due to his method: pure-breeding lines, one characteristic at a time, lots of numbers." },
        { id: "cromo", label: "Chromosome theory", x: 50, y: 12, color: "#16a34a", html: "Genes are on chromosomes.", why: "Meiosis explains segregation and assortment: homologous chromosomes separate just as alleles do. Sutton, Boveri and Morgan linked Mendel's factors to chromosomes." },
        { id: "dna", label: "Structure of DNA", x: 85, y: 12, color: "#f59e0b", html: "Double helix, complementary bases.", why: "Griffith, Avery, Hershey and Chase identified DNA as the genetic material; Chargaff, Franklin, Wilkins, Watson and Crick revealed its structure. A–T and G–C complementarity explains both copying and information." },
        { id: "dupl", label: "Replication", x: 20, y: 55, color: "#a855f7", html: "Semi-conservative: template, polymerase, ligase.", why: "Complementarity allows each strand to act as a template: the model was confirmed by Meselson and Stahl. It is the basis of mitosis: each daughter cell receives the same genome." },
        { id: "esp", label: "Gene expression", x: 55, y: 55, color: "#ef4444", html: "Transcription and translation.", why: "The central dogma (Crick, 1958) and the cracking of the code (1961-66) showed how the sequence of bases determines the sequence of amino acids and so the structure of proteins." },
        { id: "mut", label: "Mutations", x: 85, y: 55, color: "#0ea5e9", html: "Inheritable changes in the sequence.", why: "Changing the DNA sequence changes the protein and therefore the phenotype: this is the bridge between genes and disease, and between genes and evolution (Darwin did not know the source of variation; genetics provided it)." },
        { id: "fen", label: "Phenotype", x: 50, y: 90, color: "#7c3aed", html: "The observable characteristic: genotype + environment.", why: "Proteins are the link between genotype and phenotype: that is why Mendel's dominant and recessive alleles usually correspond to working or non-working proteins." }
      ],
      edges: [["mendel", "cromo", "explained by"], ["cromo", "dna", "carry the"], ["dna", "dupl", "makes possible"], ["dna", "esp", "is read through"], ["esp", "fen", "produces the"], ["mut", "esp", "alter"], ["mut", "fen", "change the"]]
    }
  ],
  glossary: [
    { t: "Gene", d: "Section of DNA that contains the information for a protein or a functional RNA." },
    { t: "Allele", d: "One of the alternative forms of a gene." },
    { t: "Homozygous / heterozygous", d: "Having two identical alleles / two different alleles for a gene." },
    { t: "Genotype and phenotype", d: "The set of alleles of an individual / its observable characteristics." },
    { t: "Nucleotide", d: "Unit of DNA: sugar, phosphate group and nitrogenous base." },
    { t: "Complementarity", d: "Pairing A–T (A–U in RNA) and G–C between the bases of the two strands." },
    { t: "Semi-conservative replication", d: "Each daughter double helix contains one original strand and one new strand." },
    { t: "Transcription", d: "Synthesis of mRNA from a DNA strand, carried out by RNA polymerase." },
    { t: "Translation", d: "Synthesis of a protein on the ribosomes, reading the mRNA in groups of three bases." },
    { t: "Codon", d: "Triplet of mRNA bases that codes for an amino acid or a stop signal." },
    { t: "Mutation", d: "Permanent change in the DNA sequence." },
    { t: "Central dogma", d: "Genetic information flows DNA → RNA → protein." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Why did Mendel choose the pea plant?", options: ["It has clearly contrasting characteristics and is easy to cross", "It is the only plant with chromosomes", "It grows in a single season", "It has no mutations"], answer: 0, explain: "Peas have clear-cut characteristics (smooth/wrinkled, yellow/green) and allow controlled crosses." },
      { type: "num", q: "In the cross Aa × Aa, what percentage of the offspring will be homozygous recessive aa?", answer: 25, unit: "%", explain: "The Punnett square gives 1 AA : 2 Aa : 1 aa, that is ¼ aa." },
      { type: "mc", q: "A mother who is a healthy carrier of colour blindness (XᴰXᵈ) and an unaffected father (XᴰY): what is the probability that a son is colour-blind?", options: ["50%", "25%", "0%", "100%"], answer: 0, explain: "A son receives the Y from his father and one of his mother's two X chromosomes: half of the sons receive Xᵈ." },
      { type: "tf", q: "In DNA, adenine pairs with cytosine.", answer: false, explain: "A pairs with T (two hydrogen bonds) and G with C (three)." },
      { type: "mc", q: "What is the complementary strand of 5′-ATGC-3′?", options: ["3′-TACG-5′", "3′-ATGC-5′", "3′-UACG-5′", "3′-CGTA-5′"], answer: 0, explain: "A–T, T–A, G–C, C–G, with the strand antiparallel: 3′-TACG-5′." },
      { type: "mc", q: "Which enzyme joins the Okazaki fragments?", options: ["DNA ligase", "Helicase", "Primase", "RNA polymerase"], answer: 0, explain: "DNA ligase seals the fragments on the lagging strand." },
      { type: "mc", q: "What mRNA is transcribed from the template strand 3′-TACCCG-5′?", options: ["5′-AUGGGC-3′", "5′-ATGGGC-3′", "5′-UACCCG-3′", "5′-AUGCCC-3′"], answer: 0, explain: "T→A, A→U, C→G, C→G, C→G, G→C: AUGGGC." },
      { type: "num", q: "How many different codons are possible with 4 bases in triplets?", answer: 64, explain: "4³ = 64." },
      { type: "mc", q: "What type of mutation is a base substitution that creates a stop codon?", options: ["Nonsense", "Silent", "Missense", "Frameshift"], answer: 0, explain: "The result is a shortened protein: a nonsense mutation." },
      { type: "order", q: "Put the path of genetic information in order.", items: ["DNA", "Transcription", "mRNA", "Translation", "Protein"], explain: "DNA → (transcription) → mRNA → (translation) → protein." }
    ]
  }
});
