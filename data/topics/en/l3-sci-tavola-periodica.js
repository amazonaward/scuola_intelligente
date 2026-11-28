TOPIC('en', {
  id: "l3-sci-tavola-periodica",
  title: "The periodic table",
  intro: "The periodic table is the most useful map in chemistry: from a single glance at an element's position you can work out its electron configuration, whether it is a metal, how reactive it is and what bonds it will form. In this lesson we see <b>how it came about</b> (and how Mendeleev managed to predict elements nobody had found yet), how it is organised and how <b>electronic structure</b> explains the <b>periodic properties</b>: atomic radius, ionisation energy, electronegativity.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Putting the elements in order",
      html: `<p>In 1860 about 60 elements were known, with very different properties. Chemists were looking for a way to classify them.</p>
<ul>
<li><b>1829, Döbereiner</b> notices "triads": groups of three elements with similar properties, where the mass of the middle one is roughly the average of the other two (lithium, sodium, potassium).</li>
<li><b>1864, Newlands</b> arranges the elements in order of increasing atomic mass and observes that every eighth element resembles the first (the "law of octaves"), but his idea was met with scepticism.</li>
<li><b>1869, Dmitri Mendeleev</b> (and, almost at the same time, Lothar Meyer) arranges the elements in order of increasing atomic mass, starting a new row whenever the properties repeat: this gives rows (periods) and columns (groups). Where the pattern requires it, he <b>leaves gaps</b> and even swaps the order of some pairs (tellurium and iodine).</li>
</ul>
<p>The strength of Mendeleev's table is its predictive power: for the empty boxes he described in advance the mass and properties of elements no one had ever seen, which he called eka-aluminium, eka-boron and eka-silicon. <b>Gallium</b> (1875, Lecoq de Boisbaudran), <b>scandium</b> (1879, Nilson) and <b>germanium</b> (1886, Winkler) were then discovered, with properties very close to his predictions. In <b>1913 Henry Moseley</b> measured X-ray spectra and showed that the quantity that really orders the elements is not mass but the <b>atomic number Z</b>: this explained Mendeleev's swaps.</p>
<p><b>Modern periodic law</b>: the properties of the elements are periodic functions of their atomic number.</p>`
    },
    {
      type: "widget",
      title: "Explore the table",
      widget: "periodicTable",
      options: {},
      caption: "Tap the elements: compare those in the same column and those in the same row."
    },
    {
      type: "text",
      title: "How the table is built",
      html: `<p>The modern table has <b>7 periods</b> (rows) and <b>18 groups</b> (columns, numbered 1-18 according to IUPAC). Its shape <b>mirrors the filling of the orbitals</b>:</p>
<ul>
<li>the <b>period</b> is the principal quantum number n of the outermost shell. The periods contain 2, 8, 8, 18, 18, 32, 32 elements, because they fill, respectively, 1s; 2s 2p; 3s 3p; 4s 3d 4p; 5s 4d 5p; 6s 4f 5d 6p; 7s 5f 6d 7p.</li>
<li>the <b>block</b> depends on the last subshell being filled: <b>s</b> (groups 1-2), <b>p</b> (groups 13-18), <b>d</b> (groups 3-12, transition metals), <b>f</b> (lanthanides and actinides, at the bottom).</li>
<li>for the <b>main groups</b> (1, 2, 13-18) the number of valence electrons is 1 or 2 for groups 1-2 and the group number minus 10 for groups 13-18 (group 17 = 7 valence electrons). Elements in the same group have the same valence configuration, and therefore <b>similar chemical behaviour</b>.</li>
</ul>
<p>Some groups have names: <b>1 alkali metals</b> (Li, Na, K…), <b>2 alkaline earth metals</b> (Be, Mg, Ca…), <b>16 chalcogens</b> (O, S…), <b>17 halogens</b> (F, Cl, Br, I), <b>18 noble gases</b> (He, Ne, Ar…). Hydrogen, with only one electron, sits in group 1 but is not an alkali metal.</p>
<p>Another major division is between <b>metals</b> (on the left and in the middle: shiny, good conductors, malleable, tend to lose electrons), <b>non-metals</b> (top right: tend to gain electrons) and <b>metalloids</b> (such as silicon and germanium, along the dividing line; they are semiconductors).</p>`
    },
    {
      type: "svg",
      title: "The blocks of the table",
      svg: (function () {
        var x0 = 50, y0 = 38, w = 28, h = 24, out = '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/>';
        var col = { s: '#fb923c', p: '#60a5fa', d: '#4ade80', f: '#c084fc' };
        function cell(c, r, b, t) {
          out += '<rect x="' + (x0 + (c - 1) * w) + '" y="' + (y0 + (r - 1) * h) + '" width="' + (w - 2) + '" height="' + (h - 2) + '" rx="3" fill="' + col[b] + '"/>';
          if (t) out += '<text x="' + (x0 + (c - 1) * w + (w - 2) / 2) + '" y="' + (y0 + (r - 1) * h + 16) + '" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">' + t + '</text>';
        }
        for (var r = 1; r <= 7; r++) {
          cell(1, r, 's', r === 1 ? 'H' : ''); if (r > 1) cell(2, r, 's', '');
          if (r === 1) cell(18, 1, 's', 'He');
          if (r >= 2) for (var c = 13; c <= 18; c++) cell(c, r, 'p', '');
          if (r >= 4) for (var c2 = 3; c2 <= 12; c2++) { if (r >= 6 && c2 === 3) continue; cell(c2, r, 'd', ''); }
          if (r >= 6) cell(3, r, 'f', '*');
        }
        for (var c3 = 3; c3 <= 16; c3++) { cell(c3, 9, 'f', ''); cell(c3, 10, 'f', ''); }
        for (var g = 1; g <= 18; g++) out += '<text x="' + (x0 + (g - 1) * w + 13) + '" y="30" font-size="14" fill="#475569" text-anchor="middle">' + g + '</text>';
        for (var p = 1; p <= 7; p++) out += '<text x="38" y="' + (y0 + (p - 1) * h + 17) + '" font-size="14" fill="#475569" text-anchor="middle">' + p + '</text>';
        out += '<text x="578" y="62" font-size="14" fill="#ea580c" text-anchor="end" font-weight="bold">s block</text>';
        out += '<text x="578" y="92" font-size="14" fill="#2563eb" text-anchor="end" font-weight="bold">p block</text>';
        out += '<text x="578" y="122" font-size="14" fill="#16a34a" text-anchor="end" font-weight="bold">d block</text>';
        out += '<text x="578" y="152" font-size="14" fill="#9333ea" text-anchor="end" font-weight="bold">f block</text>';
        out += '<text x="300" y="285" font-size="14" fill="#475569" text-anchor="middle">Rows = periods (1-7), columns = groups (1-18). He belongs to the s block.</text>';
        return out + '</svg>';
      })(),
      caption: "The shape of the table reproduces the filling order of the orbitals: 2, 6, 10 and 14 columns for s, p, d, f."
    },
    {
      type: "example",
      title: "Reading the table: sulfur",
      html: `<p><b>Sulfur</b> (S, Z = 16) is in <b>period 3</b>, <b>group 16</b>. What can you work out without any other information?</p>
<ul>
<li>Period 3: the outermost shell has n = 3.</li>
<li>Group 16 (p block): 16 − 10 = 6 valence electrons. Configuration: [Ne] 3s² 3p⁴.</li>
<li>It is a non-metal; it is 2 electrons short of an octet, so it tends to form the S²⁻ ion or to make 2 bonds (like oxygen, in the same group: H₂S resembles H₂O).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: finding your way around the table",
      questions: [
        { type: "mc", q: "How many valence electrons do the halogens (group 17) have?", options: ["7", "1", "8", "17"], answer: 0, explain: "Group 17 = 17 − 10 = 7 valence electrons (ns² np⁵)." },
        { type: "num", q: "How many elements are there in the fourth period?", answer: 18, explain: "4s (2), 3d (10) and 4p (6) are filled: 18 elements, from K to Kr." },
        { type: "tf", q: "Mendeleev ordered the elements by atomic number.", answer: false, explain: "He ordered them by increasing atomic mass; it was Moseley (1913) who showed that the correct order is by atomic number." }
      ]
    },
    {
      type: "text",
      title: "Effective nuclear charge and shielding",
      html: `<p>To understand periodic properties you need just one idea: a valence electron is attracted by the nucleus (charge +Z) but is also <b>shielded</b> by the inner electrons, which repel it. What it feels is the <b>effective nuclear charge Z_eff</b>, roughly Z minus the number of inner electrons.</p>
<ul>
<li><b>Across a period</b> (from left to right) Z increases by one each time while the electrons are added to the same shell, where they shield each other only a little: Z_eff <b>increases</b> and the nucleus "pulls" the electrons closer.</li>
<li><b>Down a group</b> (from top to bottom) a whole shell is added: the valence electrons are further away and more shielded, so they are held less tightly, even though Z is larger.</li>
</ul>`
    },
    {
      type: "text",
      title: "Periodic properties",
      html: `<table>
<tr><th>Property</th><th>Across a period (→)</th><th>Down a group (↓)</th></tr>
<tr><td><b>Atomic radius</b></td><td>decreases</td><td>increases</td></tr>
<tr><td><b>Ionisation energy</b> (to remove an electron)</td><td>increases</td><td>decreases</td></tr>
<tr><td><b>Electron affinity</b> (energy released when capturing an electron)</td><td>generally increases in size</td><td>generally decreases</td></tr>
<tr><td><b>Electronegativity</b> (tendency to attract bonding electrons)</td><td>increases</td><td>decreases</td></tr>
<tr><td><b>Metallic character</b></td><td>decreases</td><td>increases</td></tr>
</table>
<p>A few numbers to give you an idea:</p>
<ul>
<li>Metallic radius (pm): Li 152, Na 186, K 227, Rb 248, Cs 265: it grows as you go down group 1.</li>
<li>First ionisation energy (kJ/mol): Li 520, Na 496, K 419, Cs 376; He 2372 and Ne 2081 are the highest in their periods, because noble gases have complete, very stable shells.</li>
<li>Pauling electronegativity: Na 0.93, H 2.20, C 2.55, N 3.04, Cl 3.16, O 3.44, <b>F 3.98</b> (the most electronegative of all). Francium and caesium are among the least electronegative (about 0.7).</li>
</ul>
<p><b>Ions</b>: a cation is <b>smaller</b> than the neutral atom (it loses a shell, or Z_eff per electron increases), an anion is <b>larger</b> (more electrons repelling each other around the same nucleus). Na has a radius of 186 pm, Na⁺ about 102 pm; Cl is about 99 pm, Cl⁻ about 181 pm.</p>`
    },
    {
      type: "svg",
      title: "The trends at a glance",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs>
<marker id="arrA" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
<marker id="arrB" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#2563eb"/></marker>
</defs>
<rect x="40" y="50" width="220" height="170" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
<text x="150" y="35" font-size="16" font-weight="bold" fill="#b91c1c" text-anchor="middle">Atomic radius</text>
<line x1="230" y1="90" x2="70" y2="90" stroke="#dc2626" stroke-width="4" marker-end="url(#arrA)"/>
<line x1="80" y1="70" x2="80" y2="200" stroke="#dc2626" stroke-width="4" marker-end="url(#arrA)"/>
<text x="150" y="130" font-size="14" fill="#7f1d1d" text-anchor="middle">increases to the left</text>
<text x="160" y="170" font-size="14" fill="#7f1d1d" text-anchor="middle">and downwards</text>
<text x="150" y="245" font-size="14" fill="#475569" text-anchor="middle">Cs, Fr: the largest</text>
<rect x="340" y="50" width="220" height="170" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="450" y="35" font-size="16" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Ionisation and EN</text>
<line x1="370" y1="90" x2="530" y2="90" stroke="#2563eb" stroke-width="4" marker-end="url(#arrB)"/>
<line x1="520" y1="200" x2="520" y2="70" stroke="#2563eb" stroke-width="4" marker-end="url(#arrB)"/>
<text x="440" y="130" font-size="14" fill="#1e3a8a" text-anchor="middle">increases to the right</text>
<text x="440" y="170" font-size="14" fill="#1e3a8a" text-anchor="middle">and upwards</text>
<text x="450" y="245" font-size="14" fill="#475569" text-anchor="middle">Highest: F (EN), He (I1)</text>
</svg>`,
      caption: "The two maps are mirror images: whatever makes an atom small also makes it hard to ionise."
    },
    {
      type: "remember",
      title: "How to reason about the trends",
      html: `<p>Don't learn the tables by heart: always ask yourself <b>how strongly is the outer electron attracted by the nucleus?</b></p>
<ul>
<li>Higher Z_eff means electrons that are closer and held more tightly: small radius, high ionisation energy, high electronegativity (towards the right).</li>
<li>More shells mean more distance and more shielding: large radius, low ionisation energy, electrons easy to give away (towards the bottom).</li>
<li>That is why the most reactive <b>metals</b> are at the bottom left (Cs, Fr) and the most reactive <b>non-metals</b> at the top right (F, O).</li>
</ul>`
    },
    {
      type: "example",
      title: "Comparing three elements of the third period",
      html: `<p>Sodium, magnesium and chlorine are in the same row (n = 3), but:</p>
<ul>
<li><b>Radius</b>: Na (186 pm) &gt; Mg (160 pm) &gt; Cl (99 pm, covalent radius), because Z_eff increases.</li>
<li><b>First ionisation energy</b>: Na 496, Mg 738, Cl 1251 kJ/mol. Sodium easily loses 1 electron (Na⁺ has the configuration of neon), whereas chlorine gains 1 (Cl⁻ has that of argon).</li>
<li><b>Type of element</b>: Na is a reactive metal, Mg a less reactive metal, Cl a non-metal. When they react, Na gives and Cl takes: the result is sodium chloride, NaCl, an ionic compound.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: periodic properties",
      questions: [
        { type: "mc", q: "Which has the largest atomic radius?", options: ["Potassium", "Sodium", "Lithium", "Magnesium"], answer: 0, explain: "Potassium is further down group 1 (4 shells) than Na and Li." },
        { type: "mc", q: "Which element has the highest electronegativity?", options: ["Fluorine", "Chlorine", "Oxygen", "Nitrogen"], answer: 0, explain: "Fluorine is at the top right (leaving out He): it has the highest value, 3.98 on the Pauling scale." },
        { type: "tf", q: "The chloride ion Cl⁻ is smaller than the chlorine atom.", answer: false, explain: "An anion has more electrons for the same number of protons: their repulsion spreads them out, so it is larger." }
      ]
    },
    {
      type: "alternatives",
      title: "Other ways to understand the table",
      intro: "If reading the tables alone doesn't convince you, try these pictures.",
      tabs: [
        { label: "🧲 Tug of war", html: "<p>Picture the nucleus as a team pulling on a rope (the valence electron) and the inner electrons as obstacles that push back. Moving right along the same period adds <b>pullers</b> (protons) but no obstacles: the nucleus wins and the rope gets shorter (small radius, electrons hard to remove). Moving down a row adds <b>new rows of obstacles</b> and the rope is longer: the electron is held less tightly.</p>" },
        { label: "🏢 The block of flats", html: "<p>The table is a block of flats: the <b>periods</b> are the floors, the <b>groups</b> are the staircases. People living on the same staircase have the same front door, that is the same number of valence electrons, so they behave in a similar way with their neighbours (bonds). Floor 4 has 18 flats, because besides 4s and 4p there is room for the ten 3d rooms; on floor 6 the 14 f flats are added, which for lack of space we draw separately, at the bottom.</p>" },
        { label: "🎴 Patience cards", html: "<p>Mendeleev used cards, one for each element, with its mass and properties, and laid them out as in a game of patience until a pattern repeated. Try it yourself: the noble gases (He, Ne, Ar) do not react, then come the alkali metals, which react violently with water. Every alkali metal follows a noble gas: that is the idea of a period, a sudden jump from an inert element to a reactive one, which the modern table explains as 'one more electron in a new shell'.</p>" },
        { label: "🔥 Flame test", html: "<p>Within the same group the flame colours change but the behaviour is related: lithium carmine red, sodium yellow, potassium lilac. They all react with water to produce hydrogen and a hydroxide (2 Na + 2 H₂O → 2 NaOH + H₂), but Li slowly, Na vigorously, K with a flame, Cs explosively: reactivity increases down the group because the outer electron is held less and less tightly.</p>" }
      ]
    },
    {
      type: "curiosity",
      title: "The last row and the names of the elements",
      html: `<p>Today's table reaches <b>118 elements</b>: the last official names were given in 2016 (nihonium Nh, moscovium Mc, tennessine Ts, oganesson Og), completing the seventh period. The elements beyond uranium (Z = 92) are artificial (apart from traces of neptunium and plutonium) and the heaviest are made in laboratories a few atoms at a time, lasting fractions of a second. <b>Technetium</b> (Z = 43) was the first element produced artificially (1937, Perrier and Segrè) and its name actually means "artificial". Among the names there is also <b>mendelevium</b> (Z = 101), in honour of the father of the table.</p>`
    },
    {
      type: "curiosity",
      title: "Exceptions in ionisation energy",
      html: `<p>In the second period the first ionisation energy does not increase perfectly regularly: boron (1s² 2s² 2p¹) has a lower value than beryllium (2s²), and oxygen (2p⁴) a lower value than nitrogen (2p³). In the first case 2p is slightly higher in energy than 2s; in the second, oxygen has a paired electron that suffers repulsion and is removed more easily than any of nitrogen's three unpaired electrons, which form a particularly stable configuration (Hund's rule). The trends are general rules; the electronic details refine them.</p>`
    },
    {
      type: "conceptMap",
      title: "Map: from configuration to properties",
      nodes: [
        { id: "mend", label: "Periodic law", x: 15, y: 12, color: "#2563eb", html: "Properties repeat when the elements are ordered by Z.", why: "Mendeleev (1869) deduced it from atomic masses and the chemistry of compounds; Moseley (1913) corrected it by showing that the right variable is Z, the charge of the nucleus." },
        { id: "config", label: "Electron configuration", x: 50, y: 12, color: "#16a34a", html: "The filling of orbitals gives periods and blocks.", why: "Energy quantisation (Bohr, Schrödinger) and the Pauli principle impose 2, 6, 10, 14 electrons per subshell: that is why the periods have lengths 2, 8, 18, 32." },
        { id: "val", label: "Valence electrons", x: 85, y: 12, color: "#f59e0b", html: "Same group = same outer configuration.", why: "Only the outermost electrons take part in bonds: Lewis (1916) and Kossel showed that the noble gases, with eight outer electrons, are stable." },
        { id: "zeff", label: "Effective nuclear charge", x: 30, y: 55, color: "#a855f7", html: "Z minus the shielding of the inner electrons.", why: "It explains the trends with a single concept: across a period the electrons shield each other little, so Z_eff grows; in a group, adding a shell increases the distance." },
        { id: "prop", label: "Periodic properties", x: 70, y: 55, color: "#0ea5e9", html: "Radius, ionisation energy, electron affinity, electronegativity.", why: "They result from the balance between the attraction of the nucleus and the distance of the electrons; their regularity makes it possible to predict elements that have never been studied." },
        { id: "chim", label: "Chemical behaviour", x: 50, y: 90, color: "#ef4444", html: "Metals, non-metals, reactivity, type of bond.", why: "Elements with low ionisation energy give away electrons (metals), those with high electron affinity capture them (non-metals): the difference in electronegativity decides whether a bond will be ionic or covalent (next lesson)." }
      ],
      edges: [["mend", "config", "explained by"], ["config", "val", "identifies the"], ["config", "zeff", "determines the"], ["zeff", "prop", "governs the"], ["val", "chim", "decide the"], ["prop", "chim", "explain the"]]
    }
  ],
  glossary: [
    { t: "Period", d: "Row of the periodic table; it corresponds to the principal quantum number of the outermost shell." },
    { t: "Group", d: "Column of the periodic table; its elements have similar valence configurations." },
    { t: "Alkali metals", d: "Elements of group 1 (except hydrogen): very reactive, one valence electron." },
    { t: "Halogens", d: "Elements of group 17 (F, Cl, Br, I): seven valence electrons." },
    { t: "Noble gases", d: "Elements of group 18: complete outer shell, almost inert." },
    { t: "Effective nuclear charge", d: "The positive charge a valence electron actually feels, taking into account the shielding by the inner electrons." },
    { t: "Atomic radius", d: "Measure of the size of an atom; it decreases across a period and increases down a group." },
    { t: "Ionisation energy", d: "Energy needed to remove an electron from an atom in the gaseous state." },
    { t: "Electron affinity", d: "Energy involved when a gaseous atom captures an electron." },
    { t: "Electronegativity", d: "Ability of an atom to attract the electrons of a bond towards itself (Pauling scale, F = 3.98)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What criterion did Mendeleev use to order the elements in his 1869 table?", options: ["Increasing atomic mass, grouping similar properties together", "Increasing atomic number", "Alphabetical order", "Colour"], answer: 0, explain: "Mendeleev used atomic mass; ordering by atomic number is due to Moseley (1913)." },
      { type: "tf", q: "Mendeleev left gaps and predicted the properties of unknown elements that were later discovered (gallium, scandium, germanium).", answer: true, explain: "Eka-aluminium, eka-boron and eka-silicon correspond to gallium, scandium and germanium." },
      { type: "num", q: "How many valence electrons does an element in group 15 have?", answer: 5, explain: "Group 15 = 15 − 10 = 5 valence electrons (ns² np³)." },
      { type: "num", q: "How many elements are there in the sixth period?", answer: 32, explain: "6s (2), 4f (14), 5d (10), 6p (6) are filled: 32 elements." },
      { type: "mc", q: "Which block is iron (Z = 26, [Ar] 4s² 3d⁶) in?", options: ["d", "s", "p", "f"], answer: 0, explain: "The last subshell filled is 3d: it is a transition metal." },
      { type: "mc", q: "How does atomic radius change going down a group?", options: ["It increases", "It decreases", "It stays the same", "It first decreases, then increases"], answer: 0, explain: "A shell is added with each period: the valence electrons are further from the nucleus." },
      { type: "mc", q: "Which element has the lowest first ionisation energy?", options: ["Caesium", "Lithium", "Fluorine", "Helium"], answer: 0, explain: "Caesium has a valence electron that is very far away and well shielded: it is the easiest to remove." },
      { type: "tf", q: "Across a period, electronegativity increases from left to right.", answer: true, explain: "Z_eff increases and the radius decreases: the bonding electrons are attracted more strongly." },
      { type: "mc", q: "Why is the sodium ion Na⁺ smaller than the sodium atom?", options: ["It has lost its outermost shell and Z_eff per electron is higher", "It has lost a proton", "It has gained a neutron", "It has more electrons"], answer: 0, explain: "When it loses its valence electron (3s), shells 1 and 2 remain, which are closer to the nucleus." },
      { type: "order", q: "Put in order of increasing atomic radius.", items: ["Cl", "Si", "Mg", "Na"], explain: "In the third period the radius decreases towards the right: Cl < Si < Mg < Na." }
    ]
  }
});
