TOPIC('en', {
  id: "l3-sci-modelli-atomici",
  title: "Atomic models and electron configuration",
  intro: "For more than two thousand years the atom was a philosophical idea; between 1897 and 1926 it became a laboratory object, with a tiny nucleus and a cloud of electrons that obeys the rules of <b>quantum mechanics</b>. In this lesson we follow the chain of experiments and ideas that leads from <b>Thomson</b> to <b>Bohr</b> and on to <b>orbitals</b>, and we learn to write the <b>electron configuration</b> of an element: the key to understanding why chemistry works the way it does.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "From the indivisible atom to subatomic particles",
      html: `<p>In the lesson on the laws of chemical combination you saw that Dalton (1803-1808) pictured atoms as solid, indivisible spheres. At the end of the nineteenth century this picture ran into trouble: some experiments showed that smaller particles could be extracted from the atom.</p>
<ul>
<li><b>1897, J. J. Thomson</b> studies cathode rays in a vacuum tube: they are deflected by electric and magnetic fields, so they are made of particles with a <b>negative charge</b>, much lighter than a hydrogen atom. He has discovered the <b>electron</b>. Since the atom is neutral, it must also contain positive charge: Thomson proposes the "plum pudding" model, a sphere of spread-out positive charge with the electrons embedded in it like the fruit in a pudding.</li>
<li><b>1909-1911, Geiger, Marsden and Rutherford</b> fire α particles (helium nuclei, positively charged) at an extremely thin sheet of gold foil. If the plum pudding were right, the particles would pass through almost undisturbed. Instead, most of them do pass through the foil, but <b>some are deflected through large angles and about one in 8000 bounces back</b>. Rutherford said it was like firing a 15-inch (38 cm) shell at a piece of tissue paper and seeing it come back.</li>
<li><b>1911, Rutherford</b> deduces the <b>nuclear model</b>: all the positive charge and almost all the mass are concentrated in a tiny <b>nucleus</b>, surrounded by electrons at a great distance. The radius of the atom is about 10⁻¹⁰ m, that of the nucleus about 10⁻¹⁵ m: the atom is <b>almost entirely empty space</b>.</li>
<li>In <b>1919</b> Rutherford identifies the <b>proton</b>; in <b>1932</b> James Chadwick discovers the <b>neutron</b>, an uncharged particle with almost the same mass as the proton.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Three models compared",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="100" cy="140" r="75" fill="#fecaca" stroke="#dc2626" stroke-width="3"/>
<g fill="#2563eb"><circle cx="70" cy="110" r="8"/><circle cx="120" cy="100" r="8"/><circle cx="85" cy="160" r="8"/><circle cx="130" cy="150" r="8"/><circle cx="100" cy="190" r="8"/><circle cx="60" cy="140" r="8"/></g>
<text x="100" y="250" font-size="16" text-anchor="middle" fill="#1f2937" font-weight="bold">Thomson 1904</text>
<text x="100" y="272" font-size="14" text-anchor="middle" fill="#475569">spread-out + charge</text>
<circle cx="300" cy="140" r="75" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<circle cx="300" cy="140" r="7" fill="#dc2626"/>
<circle cx="365" cy="108" r="8" fill="#2563eb"/><circle cx="240" cy="175" r="8" fill="#2563eb"/><circle cx="318" cy="205" r="8" fill="#2563eb"/>
<text x="300" y="250" font-size="16" text-anchor="middle" fill="#1f2937" font-weight="bold">Rutherford 1911</text>
<text x="300" y="272" font-size="14" text-anchor="middle" fill="#475569">nucleus + electrons</text>
<circle cx="500" cy="140" r="30" fill="none" stroke="#16a34a" stroke-width="2"/>
<circle cx="500" cy="140" r="52" fill="none" stroke="#16a34a" stroke-width="2"/>
<circle cx="500" cy="140" r="75" fill="none" stroke="#16a34a" stroke-width="2"/>
<circle cx="500" cy="140" r="7" fill="#dc2626"/>
<circle cx="530" cy="140" r="7" fill="#2563eb"/><circle cx="460" cy="115" r="7" fill="#2563eb"/><circle cx="500" cy="215" r="7" fill="#2563eb"/>
<text x="500" y="250" font-size="16" text-anchor="middle" fill="#1f2937" font-weight="bold">Bohr 1913</text>
<text x="500" y="272" font-size="14" text-anchor="middle" fill="#475569">quantised orbits</text>
<text x="300" y="28" font-size="16" text-anchor="middle" fill="#0369a1">Red = positive charge, blue = electrons</text>
</svg>`,
      caption: "Each model was born to explain an experiment that the previous one could not explain."
    },
    {
      type: "example",
      title: "How empty is an atom?",
      html: `<p>The ratio between the radius of the atom (10⁻¹⁰ m) and the radius of the nucleus (10⁻¹⁵ m) is 10⁵, that is, one hundred thousand. If the nucleus were a 1 cm marble placed in the middle of a football pitch, the outermost electrons would be about a kilometre away. And yet almost all the mass is in that marble: protons and neutrons each weigh about 1836 times as much as an electron.</p>
<p>So why does matter not look empty to us, and why don't we fall through the floor? Because what matters are the <b>electric forces</b> between the electron clouds of neighbouring atoms, which repel each other.</p>`
    },
    {
      type: "text",
      title: "Atomic number, mass number, isotopes",
      html: `<p>Every atom is described by two numbers:</p>
<ul>
<li>the <b>atomic number Z</b> = number of protons in the nucleus. It identifies the element: Z = 6 is always carbon. In a neutral atom it is also the number of electrons.</li>
<li>the <b>mass number A</b> = protons + neutrons (the <b>nucleons</b>). The number of neutrons is therefore A − Z.</li>
</ul>
<p>We write ᴬ_Z X; for example carbon-12 has Z = 6, A = 12 and therefore 6 neutrons. Atoms with the <b>same Z but a different A</b> are <b>isotopes</b>: carbon-14 has 6 protons and 8 neutrons, and it is radioactive. The chemical properties of two isotopes are practically identical, because they depend on the electrons; what changes is the mass. This is why the atomic mass shown in the periodic table is a weighted average of the naturally occurring isotopes (as you saw in the lesson on the mole).</p>
<p>If an atom loses or gains electrons it becomes an <b>ion</b>: Na⁺ has 11 protons and 10 electrons; Cl⁻ has 17 protons and 18 electrons.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: inside the atom",
      questions: [
        { type: "num", q: "How many neutrons does an atom of iron-56 (Z = 26) have?", answer: 30, explain: "Neutrons = A − Z = 56 − 26 = 30." },
        { type: "mc", q: "Which observation in Rutherford's experiment led to the idea of a small, dense nucleus?", options: ["Almost all the α particles went through the foil, but a few bounced back", "All the α particles bounced back", "The α particles were absorbed by the gold", "The α particles turned into electrons"], answer: 0, explain: "Most particles passing straight through shows there is empty space; the rare rebounds show a small, massive, positive region." },
        { type: "tf", q: "Two isotopes of the same element have a different number of protons.", answer: false, explain: "Isotopes have the same Z (same protons) and a different number of neutrons." }
      ]
    },
    {
      type: "text",
      title: "Light and spectra: the problem Rutherford could not solve",
      html: `<p>Rutherford's model has two serious flaws. According to classical physics, an electron orbiting the nucleus is accelerating, so it should emit electromagnetic waves, lose energy and <b>spiral into the nucleus in a fraction of a second</b>: atoms would not be stable. It also fails to explain why atoms emit light only of certain colours.</p>
<p>If you heat a gas (or pass an electric discharge through it) and analyse the light with a prism, you do not see a continuous rainbow but a few <b>bright lines</b> at precise wavelengths: the <b>line spectrum</b>, different for every element, like a fingerprint. In 1885 Johann Balmer found a formula for the visible lines of hydrogen, but nobody knew why it worked.</p>
<p>In 1900 Max Planck had proposed that energy is exchanged in packets, called <b>quanta</b>, and in 1905 Einstein explained the photoelectric effect with <b>photons</b>: a photon of frequency ν carries the energy <b>E = hν</b> (h = 6.626·10⁻³⁴ J·s, Planck's constant). Since ν = c/λ, a shorter wavelength means a higher energy.</p>`
    },
    {
      type: "text",
      title: "The Bohr model (1913)",
      html: `<p>Niels Bohr combined Rutherford and Planck with two postulates for the hydrogen atom:</p>
<ol>
<li>The electron can move only in certain <b>allowed orbits</b>, each with a well-defined energy (<b>energy levels</b>, numbered n = 1, 2, 3…). In an allowed orbit it does not radiate: it is in a <b>stationary state</b>.</li>
<li>The electron can <b>jump</b> from one level to another by absorbing or emitting a photon whose energy is exactly the <b>difference</b> between the two levels: <b>ΔE = hν</b>.</li>
</ol>
<p>For hydrogen the levels have energy <b>Eₙ = −13.6 eV / n²</b> (the electronvolt, eV, equals 1.602·10⁻¹⁹ J). Zero corresponds to a free electron; the minus sign shows that the electron is bound. The ground state (n = 1) is −13.6 eV: this is the ionisation energy of hydrogen. The jump from n = 3 to n = 2 releases 3.40 − 1.51 = 1.89 eV, that is red light at 656 nm: exactly the line Balmer had described. So the model explains the hydrogen spectrum quantitatively, and also why atoms are stable: there is no level below n = 1.</p>`
    },
    {
      type: "svg",
      title: "The hydrogen levels and the Balmer lines",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#0f172a"/>
<g stroke="#e2e8f0" stroke-width="3">
<line x1="60" y1="260" x2="320" y2="260"/>
<line x1="60" y1="130" x2="320" y2="130"/>
<line x1="60" y1="88" x2="320" y2="88"/>
<line x1="60" y1="66" x2="320" y2="66"/>
<line x1="60" y1="54" x2="320" y2="54"/>
</g>
<g font-size="15" fill="#e2e8f0">
<text x="330" y="265">n = 1   −13.6 eV</text>
<text x="330" y="135">n = 2   −3.40 eV</text>
<text x="330" y="93">n = 3   −1.51 eV</text>
<text x="330" y="71">n = 4   −0.85 eV</text>
<text x="330" y="52">n = 5   −0.54 eV</text>
</g>
<g stroke-width="3" fill="none">
<path d="M110 88 L110 128" stroke="#ef4444"/><path d="M104 118 L110 130 L116 118" stroke="#ef4444"/>
<path d="M160 66 L160 128" stroke="#06b6d4"/><path d="M154 118 L160 130 L166 118" stroke="#06b6d4"/>
<path d="M210 54 L210 128" stroke="#6366f1"/><path d="M204 118 L210 130 L216 118" stroke="#6366f1"/>
</g>
<text x="110" y="180" font-size="14" fill="#ef4444" text-anchor="middle">656 nm</text>
<text x="160" y="198" font-size="14" fill="#06b6d4" text-anchor="middle">486 nm</text>
<text x="210" y="216" font-size="14" fill="#a5b4fc" text-anchor="middle">434 nm</text>
<text x="450" y="200" font-size="15" fill="#fde68a" text-anchor="middle">Jumps down to n = 2</text>
<text x="450" y="220" font-size="15" fill="#fde68a" text-anchor="middle">emit visible light</text>
<text x="300" y="25" font-size="17" fill="#ffffff" text-anchor="middle" font-weight="bold">Energy of the electron in the hydrogen atom</text>
</svg>`,
      caption: "The levels get closer and closer together as you go up: that is why the lines crowd together towards the violet."
    },
    {
      type: "3d",
      title: "The Bohr atom in 3D",
      scene: "atom",
      options: { elements: ["H", "He", "C", "O", "Na"] },
      caption: "Rotate the model and change element: the electrons arrange themselves in successive shells (2, then 8, then 8...)."
    },
    {
      type: "text",
      title: "Beyond Bohr: quantum mechanics",
      html: `<p>The Bohr model works very well for hydrogen but already fails with helium, and it does not explain why the orbits are quantised. The answer came in the 1920s:</p>
<ul>
<li><b>1924, de Broglie</b>: matter also behaves like a wave, with wavelength <b>λ = h/(mv)</b>. For an electron in an atom, λ is comparable to the size of the atom: this is why only certain states are allowed, like the notes of a guitar string fixed at both ends. The experimental confirmation is electron diffraction (Davisson and Germer, 1927).</li>
<li><b>1926, Schrödinger</b> writes the wave equation that describes the electron; <b>Born</b> gives its interpretation: the square of the wave function gives the <b>probability</b> of finding the electron at a point.</li>
<li><b>1927, Heisenberg</b>: the <b>uncertainty principle</b>, position and momentum cannot both be known with arbitrary precision (Δx·Δp ≥ ħ/2). So there are no well-defined trajectories.</li>
</ul>
<p>The electron no longer travels along an orbit; it is described by an <b>orbital</b>: the region of space around the nucleus where the probability of finding it is high (usually we draw the surface that encloses about 90% of the probability). It is a probability "cloud", not a path.</p>`
    },
    {
      type: "text",
      title: "Quantum numbers",
      html: `<p>Each orbital is identified by three <b>quantum numbers</b>, and each electron has a fourth number, its spin:</p>
<table>
<tr><th>Number</th><th>Symbol</th><th>Values</th><th>What it determines</th></tr>
<tr><td>principal</td><td>n</td><td>1, 2, 3, …</td><td>energy and size of the orbital (shell)</td></tr>
<tr><td>secondary (azimuthal)</td><td>l</td><td>0, 1, …, n − 1</td><td>shape: l = 0 s (spherical), 1 p (dumbbell), 2 d, 3 f (subshell)</td></tr>
<tr><td>magnetic</td><td>mₗ</td><td>from −l to +l</td><td>orientation in space</td></tr>
<tr><td>spin</td><td>mₛ</td><td>+½ or −½</td><td>direction of the electron's intrinsic spin</td></tr>
</table>
<p>The counting follows from this: an s subshell has 1 orbital, p has 3, d has 5, f has 7; each orbital holds at most <b>2 electrons</b> (with opposite spins). So s holds up to 2 electrons, p up to 6, d up to 10, f up to 14. Shell n contains n subshells and n² orbitals, so at most <b>2n²</b> electrons: 2, 8, 18, 32…</p>
<p>Example: for n = 3 the allowed values are l = 0, 1, 2, that is the subshells 3s, 3p, 3d: 1 + 3 + 5 = 9 orbitals, 18 electrons.</p>`
    },
    {
      type: "remember",
      title: "The three filling rules",
      html: `<ol>
<li><b>Aufbau principle (lowest energy first)</b>: electrons occupy the lowest-energy orbitals first. The order is 1s, 2s, 2p, 3s, 3p, <b>4s</b>, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d…</li>
<li><b>Pauli exclusion principle (1925)</b>: no two electrons in an atom can have all four quantum numbers the same. So an orbital holds at most two electrons, with opposite spins.</li>
<li><b>Hund's rule</b>: in orbitals of equal energy (for example the three 2p orbitals) electrons first go in one per orbital, with parallel spins, and only then pair up.</li>
</ol>`
    },
    {
      type: "svg",
      title: "The filling-order diagram",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-size="18" font-weight="bold" text-anchor="middle">
<text x="70" y="50" fill="#1d4ed8">1s</text>
<text x="70" y="100" fill="#1d4ed8">2s</text><text x="140" y="100" fill="#16a34a">2p</text>
<text x="70" y="150" fill="#1d4ed8">3s</text><text x="140" y="150" fill="#16a34a">3p</text><text x="210" y="150" fill="#d97706">3d</text>
<text x="70" y="200" fill="#1d4ed8">4s</text><text x="140" y="200" fill="#16a34a">4p</text><text x="210" y="200" fill="#d97706">4d</text><text x="280" y="200" fill="#dc2626">4f</text>
<text x="70" y="250" fill="#1d4ed8">5s</text><text x="140" y="250" fill="#16a34a">5p</text>
</g>
<g stroke="#475569" stroke-width="2" fill="none">
<path d="M45 85 L225 160" stroke-dasharray="4 4"/>
</g>
<text x="400" y="60" font-size="16" fill="#1f2937" font-weight="bold">Filling order</text>
<text x="400" y="90" font-size="15" fill="#334155">1s → 2s → 2p → 3s → 3p</text>
<text x="400" y="115" font-size="15" fill="#334155">→ 4s → 3d → 4p → 5s → 4d</text>
<text x="400" y="140" font-size="15" fill="#334155">→ 5p → 6s → 4f → 5d → 6p</text>
<text x="400" y="185" font-size="15" fill="#b45309">Follow the diagonals:</text>
<text x="400" y="207" font-size="15" fill="#b45309">read in order of increasing</text>
<text x="400" y="229" font-size="15" fill="#b45309">n + l (4s before 3d)</text>
</svg>`,
      caption: "4s costs less energy than 3d, which is why potassium and calcium fill 4s before 3d."
    },
    {
      type: "example",
      title: "Writing an electron configuration",
      html: `<p>List the subshells in filling order, with the number of electrons as a superscript.</p>
<ul>
<li><b>Oxygen (Z = 8)</b>: 1s² 2s² 2p⁴. In the three 2p orbitals, by Hund's rule: ↑↓ ↑ ↑ (two unpaired electrons).</li>
<li><b>Chlorine (Z = 17)</b>: 1s² 2s² 2p⁶ 3s² 3p⁵, in short form [Ne] 3s² 3p⁵ (you start from the previous noble gas). It has 7 valence electrons, one short of an octet.</li>
<li><b>Iron (Z = 26)</b>: [Ar] 4s² 3d⁶.</li>
<li><b>Exceptions</b>: chromium (Z = 24) is [Ar] 4s¹ 3d⁵ and copper (Z = 29) is [Ar] 4s¹ 3d¹⁰: half-filled or completely filled d subshells are particularly stable.</li>
</ul>
<p>The electrons in the outermost shell are the <b>valence electrons</b>: they are the ones that take part in bonds and determine chemical behaviour. In the next topic you will see that the periodic table is a map of these configurations.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: orbitals and electrons",
      questions: [
        { type: "num", q: "What is the maximum number of electrons the 3d subshell can hold?", answer: 10, explain: "A d subshell has 5 orbitals with 2 electrons each: 10." },
        { type: "mc", q: "What is the electron configuration of sodium (Z = 11)?", options: ["1s² 2s² 2p⁶ 3s¹", "1s² 2s² 2p⁵ 3s²", "1s² 2s² 2p⁶ 3p¹", "1s² 2s¹ 2p⁶ 3s²"], answer: 0, explain: "11 electrons: 2 + 2 + 6 = 10 in the first shells, the last one goes into 3s." },
        { type: "tf", q: "According to Hund's rule, when three 2p orbitals contain 3 electrons, the electrons go in one per orbital.", answer: true, explain: "Electrons first occupy orbitals of equal energy singly, with parallel spins (nitrogen: 2p³)." }
      ]
    },
    {
      type: "alternatives",
      title: "Other ways to understand orbitals",
      intro: "The idea of a probability cloud is hard to grasp: here are three different pictures.",
      tabs: [
        { label: "🏨 The quantum hotel", html: "<p>Imagine a hotel with floors (the shells n). Each floor has several types of room: floor 1 has only one room (1s), floor 2 has a single room (2s) and three p rooms, floor 3 also has five d rooms. Each room has <b>two beds</b> (spin up and spin down): that is the Pauli principle. Guests arrive and always choose the cheapest room available (Aufbau); in a group of rooms with the same price, each guest first takes a room alone and only then do people share (Hund). Floor 4 has 4s rooms that are cheaper than the 3d rooms: that is why 4s fills first.</p>" },
        { label: "🎯 The probability cloud", html: "<p>If you could photograph the electron of a hydrogen atom a million times and overlay the photos, you would get a cloud of dots: dense near the nucleus, sparser further out. You would never see an orbit. An <b>s</b> orbital is a spherical cloud; a <b>p</b> orbital has two lobes, like a dumbbell, with a nodal plane in the middle where the probability is zero. The three p orbitals (pₓ, p_y, p_z) point along the three axes. It is like a swarm of bees around a hive: you know where you are likely to find them, not the path of each one.</p>" },
        { label: "🎸 Standing waves", html: "<p>A guitar string fixed at both ends can only vibrate at certain frequencies: the fundamental and the harmonics, with a whole number of half-waves. There are no in-between notes. In the same way the electron, which behaves like a wave, can only \"exist\" around the nucleus if its wave closes up on itself: this gives quantised energies and the whole numbers n, l, mₗ. The <b>nodes</b> of the string correspond to the nodes of the orbitals: n − l − 1 radial nodes.</p>" }
      ]
    },
    {
      type: "curiosity",
      title: "The colours of fireworks",
      html: `<p>Every element has its own lines, so every element gives a flame its own colour: sodium an intense yellow-orange, lithium a carmine red, potassium lilac, copper blue-green, strontium a bright red (used in signal flares). Pyrotechnicians choose their salts on this basis. Using the same principle, <b>spectroscopy</b> lets us find out what stars are made of: helium was identified in 1868 in the spectrum of the Sun, 27 years before it was found on Earth, and its name comes from <i>helios</i>, the Sun.</p>`
    },
    {
      type: "curiosity",
      title: "Why does 4s fill before 3d, but empty first?",
      html: `<p>In the transition metals the neutral atom's configuration is [Ar] 4s² 3dⁿ, but when they lose electrons to form ions, <b>the 4s electrons are the first to leave</b>. Iron forms Fe²⁺ ([Ar] 3d⁶) and Fe³⁺ ([Ar] 3d⁵). The reason is that, once 3d starts to fill, the attraction of the nucleus brings it down to an energy lower than that of 4s: the filling order does not match the order of energies in every atom. It is a good example of an empirical rule with a subtler explanation behind it.</p>`
    },
    {
      type: "conceptMap",
      title: "Map: the story of the atom",
      nodes: [
        { id: "thomson", label: "Electron (Thomson)", x: 15, y: 12, color: "#2563eb", html: "Negative particle discovered in 1897; plum pudding model.", why: "Cathode rays were deflected by electric and magnetic fields: from the charge-to-mass ratio Thomson deduced that the particles were much lighter than the atom, so the atom could not be indivisible." },
        { id: "ruth", label: "Nucleus (Rutherford)", x: 50, y: 12, color: "#dc2626", html: "Positive charge and mass concentrated in a very small nucleus.", why: "Thomson's model predicted only small deflections of the α particles. The rebounds observed by Geiger and Marsden were incompatible with spread-out charge: a small, hard centre was needed." },
        { id: "planck", label: "Quanta of light", x: 85, y: 12, color: "#f59e0b", html: "E = hν: energy is exchanged in packets.", why: "Planck (1900) solved the problem of black-body radiation by assuming packets of energy; Einstein (1905) saw light itself as made of quanta to explain the photoelectric effect." },
        { id: "spettri", label: "Line spectra", x: 15, y: 55, color: "#a855f7", html: "Each element emits only certain wavelengths.", why: "Bunsen and Kirchhoff (1859) turned them into a tool for chemical analysis. The fact that the lines were discrete made no sense in classical physics: it suggested discrete energy levels." },
        { id: "bohr", label: "Bohr model", x: 50, y: 55, color: "#16a34a", html: "Allowed orbits and jumps with ΔE = hν.", why: "Bohr (1913) combined Rutherford's nucleus and Planck's quanta to explain both the stability of the atom and the hydrogen spectrum: it worked, but only for atoms with one electron." },
        { id: "onde", label: "Matter waves", x: 85, y: 55, color: "#0ea5e9", html: "λ = h/(mv); Heisenberg's uncertainty principle.", why: "De Broglie (1924) extended wave-particle duality to electrons; this explains why only certain \"standing waves\" are possible around the nucleus and why it makes no sense to talk about trajectories." },
        { id: "orbitali", label: "Orbitals and quantum numbers", x: 50, y: 90, color: "#ef4444", html: "n, l, mₗ, mₛ: the identity card of every electron.", why: "Solutions of the Schrödinger equation (1926): the whole numbers n, l, mₗ are not imposed by hand as in Bohr's model but emerge from the mathematics. Spin was introduced by Uhlenbeck and Goudsmit in 1925." }
      ],
      edges: [["thomson", "ruth", "superseded by"], ["ruth", "bohr", "plus quanta leads to"], ["planck", "bohr", "provides"], ["spettri", "bohr", "explained by"], ["bohr", "onde", "superseded by"], ["onde", "orbitali", "leads to"]]
    }
  ],
  glossary: [
    { t: "Electron", d: "Negatively charged subatomic particle, discovered by Thomson in 1897." },
    { t: "Nucleus", d: "Central region of the atom, containing protons and neutrons; it holds almost all the mass." },
    { t: "Atomic number (Z)", d: "Number of protons in the nucleus; it identifies the element." },
    { t: "Mass number (A)", d: "Sum of the protons and neutrons in the nucleus." },
    { t: "Isotopes", d: "Atoms of the same element (same Z) with a different number of neutrons." },
    { t: "Photon", d: "Quantum of electromagnetic radiation, with energy E = hν." },
    { t: "Energy level", d: "An energy allowed for an electron in an atom; it is quantised." },
    { t: "Orbital", d: "Region of space where the probability of finding an electron is high, described by a wave function." },
    { t: "Quantum numbers", d: "n, l, mₗ, mₛ: they identify the state of an electron in an atom." },
    { t: "Pauli principle", d: "No two electrons in an atom can have all four quantum numbers the same." },
    { t: "Valence electrons", d: "Electrons in the outermost shell, responsible for chemical bonds." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Who discovered the electron, and with what?", options: ["Thomson, by studying cathode rays", "Rutherford, with the gold foil", "Bohr, with spectra", "Chadwick, with α particles"], answer: 0, explain: "Thomson (1897) showed that cathode rays are very light negative particles." },
      { type: "tf", q: "In Rutherford's model almost all the mass of the atom is concentrated in the nucleus.", answer: true, explain: "The nucleus is about 10⁵ times smaller than the atom but contains the protons and neutrons, which each weigh about 1836 times as much as an electron." },
      { type: "num", q: "How many neutrons does carbon-14 (Z = 6) have?", answer: 8, explain: "Neutrons = A − Z = 14 − 6 = 8." },
      { type: "mc", q: "Why, according to classical physics, would Rutherford's atom be unstable?", options: ["The orbiting electron, being accelerated, would radiate energy and fall into the nucleus", "The protons repel each other", "The neutrons decay", "The electrons attract each other"], answer: 0, explain: "An accelerated charge emits radiation and so loses energy: the electron should spiral into the nucleus." },
      { type: "num", q: "An electron in hydrogen has energy E = −13.6/n² eV. What is the energy at level n = 2?", answer: -3.4, tol: 0.05, unit: "eV", explain: "E₂ = −13.6/4 = −3.4 eV." },
      { type: "mc", q: "What happens when an electron in hydrogen goes from n = 3 to n = 2?", options: ["It emits a photon with energy equal to the difference between the levels", "It absorbs a photon", "The number of protons changes", "It leaves the atom"], answer: 0, explain: "Going down a level, the atom emits a photon with ΔE = hν (the red line at 656 nm)." },
      { type: "mc", q: "Which quantum number determines the shape of the orbital?", options: ["l (secondary)", "n (principal)", "mₛ (spin)", "None"], answer: 0, explain: "l = 0, 1, 2, 3 corresponds to s, p, d, f; n gives energy and size, mₗ the orientation." },
      { type: "num", q: "How many orbitals does the third shell (n = 3) have in total?", answer: 9, explain: "n² = 9 orbitals: 1 (3s) + 3 (3p) + 5 (3d)." },
      { type: "mc", q: "What is the electron configuration of chlorine (Z = 17)?", options: ["1s² 2s² 2p⁶ 3s² 3p⁵", "1s² 2s² 2p⁶ 3s² 3p⁶", "1s² 2s² 2p⁶ 3s¹ 3p⁶", "1s² 2s² 2p⁵ 3s² 3p⁶"], answer: 0, explain: "17 electrons: 2 + 2 + 6 + 2 + 5. It has 7 valence electrons." },
      { type: "order", q: "Put these subshells in filling order (first one first).", items: ["2p", "3s", "3p", "4s", "3d"], explain: "Order: 2p, 3s, 3p, 4s, then 3d (4s has a lower energy than 3d)." }
    ]
  }
});
