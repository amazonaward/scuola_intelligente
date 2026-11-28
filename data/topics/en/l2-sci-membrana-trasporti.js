TOPIC('en', {
  id: "l2-sci-membrana-trasporti",
  title: "The cell membrane and transport",
  intro: "A cell is not a closed room: it has to let in nutrients and oxygen, let out waste and signals, and at the same time keep its inside different from the outside. The gatekeeper is the <b>plasma membrane</b>, only 7-8 nanometres thick yet able to select every molecule. In this lesson we study how it is built and how <b>transport</b> works: <b>diffusion</b>, <b>osmosis</b>, <b>active transport</b>, <b>endocytosis</b> and <b>exocytosis</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "The structure of the membrane: the fluid mosaic model",
      html: `<p>The membrane is made mainly of <b>phospholipids</b>, <b>amphipathic</b> molecules: they have a <b>hydrophilic head</b> (with the phosphate group, which "loves" water) and two <b>hydrophobic tails</b> (fatty acid chains, which "avoid" water). In water they spontaneously arrange themselves into a <b>double layer</b> (bilayer): the heads face the water inside and outside the cell, the tails are hidden in the middle. As early as <b>1925</b> Gorter and Grendel, by extracting the lipids from red blood cells, had estimated that two layers were enough to cover the cell.</p>
<p>In <b>1972</b> <b>Singer and Nicolson</b> proposed the <b>fluid mosaic model</b>:</p>
<ul>
<li><b>fluid</b>: the phospholipids are not fixed but move sideways, like people in a crowd;</li>
<li><b>mosaic</b>: <b>proteins</b> are embedded in the bilayer (channels, carriers, receptors, enzymes, recognition proteins);</li>
<li><b>cholesterol</b> (in animal cells) regulates fluidity: it makes it change less with temperature;</li>
<li>on the outside, sugar chains attached to lipids and proteins form the <b>glycocalyx</b>, which is used for recognition between cells (for example, it determines the ABO blood groups).</li>
</ul>
<p>Thanks to this structure the membrane is <b>selectively permeable</b>: it lets some substances through easily and blocks others.</p>
<table>
<tr><th>Substance</th><th>Does it pass directly through the bilayer?</th></tr>
<tr><td>Oxygen, CO₂, nitrogen (small non-polar molecules)</td><td>yes, easily</td></tr>
<tr><td>Fat-soluble molecules (steroids, alcohol, vitamins A-D-E-K)</td><td>yes</td></tr>
<tr><td>Water</td><td>a little (small but polar molecule); much more through <b>aquaporins</b></td></tr>
<tr><td>Glucose, amino acids (large and polar)</td><td>no: carriers are needed</td></tr>
<tr><td>Ions (Na⁺, K⁺, Cl⁻, Ca²⁺) </td><td>no: channels or pumps are needed</td></tr>
</table>`
    },
    {
      type: "svg",
      title: "The fluid mosaic membrane",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="0" y="0" width="600" height="90" fill="#dbeafe"/><rect x="0" y="210" width="600" height="90" fill="#fef9c3"/>
<text x="20" y="30" font-size="16" font-weight="bold" fill="#1e3a8a">OUTSIDE the cell</text>
<text x="20" y="285" font-size="16" font-weight="bold" fill="#854d0e">CYTOPLASM</text>
<g fill="#f59e0b" stroke="#b45309" stroke-width="1">
<circle cx="30" cy="100" r="12"/><circle cx="70" cy="100" r="12"/><circle cx="110" cy="100" r="12"/><circle cx="150" cy="100" r="12"/><circle cx="190" cy="100" r="12"/><circle cx="350" cy="100" r="12"/><circle cx="390" cy="100" r="12"/><circle cx="430" cy="100" r="12"/><circle cx="470" cy="100" r="12"/><circle cx="510" cy="100" r="12"/><circle cx="550" cy="100" r="12"/>
<circle cx="30" cy="200" r="12"/><circle cx="70" cy="200" r="12"/><circle cx="110" cy="200" r="12"/><circle cx="150" cy="200" r="12"/><circle cx="190" cy="200" r="12"/><circle cx="350" cy="200" r="12"/><circle cx="390" cy="200" r="12"/><circle cx="430" cy="200" r="12"/><circle cx="470" cy="200" r="12"/><circle cx="510" cy="200" r="12"/><circle cx="550" cy="200" r="12"/></g>
<g stroke="#b45309" stroke-width="3"><line x1="30" y1="112" x2="30" y2="188"/><line x1="70" y1="112" x2="70" y2="188"/><line x1="110" y1="112" x2="110" y2="188"/><line x1="150" y1="112" x2="150" y2="188"/><line x1="190" y1="112" x2="190" y2="188"/><line x1="350" y1="112" x2="350" y2="188"/><line x1="390" y1="112" x2="390" y2="188"/><line x1="430" y1="112" x2="430" y2="188"/><line x1="470" y1="112" x2="470" y2="188"/><line x1="510" y1="112" x2="510" y2="188"/><line x1="550" y1="112" x2="550" y2="188"/></g>
<rect x="225" y="82" width="95" height="136" rx="30" fill="#a78bfa" stroke="#5b21b6" stroke-width="3"/>
<rect x="250" y="95" width="45" height="110" rx="8" fill="#ede9fe"/>
<text x="272" y="155" font-size="14" font-weight="bold" fill="#4c1d95" text-anchor="middle">channel</text>
<ellipse cx="205" cy="150" rx="8" ry="8" fill="#16a34a"/><text x="130" y="155" font-size="14" fill="#166534" font-weight="bold">cholesterol</text>
<path d="M560 80 q10 -20 20 0 q10 20 20 0" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="470" y="60" font-size="14" font-weight="bold" fill="#991b1b">glycocalyx</text>
<text x="100" y="75" font-size="14" font-weight="bold" fill="#92400e">hydrophilic heads</text>
<text x="400" y="155" font-size="14" font-weight="bold" fill="#92400e">hydrophobic tails</text>
</svg>`,
      caption: "A phospholipid bilayer with a channel protein, cholesterol and sugar chains on the outside."
    },
    {
      type: "3d",
      title: "A phospholipid in 3D (diagram)",
      scene: "molecule",
      options: {
        atoms: [
          { x: 0, y: 1.2, z: 0, r: 0.5, color: "#f59e0b", label: "Head (phosphate)" },
          { x: 0, y: 0.5, z: 0, r: 0.25, color: "#a855f7", label: "Glycerol" },
          { x: -0.4, y: -0.2, z: 0, r: 0.2, color: "#64748b", label: "" },
          { x: -0.4, y: -0.9, z: 0, r: 0.2, color: "#64748b", label: "" },
          { x: -0.4, y: -1.6, z: 0, r: 0.2, color: "#64748b", label: "Tail 1" },
          { x: 0.4, y: -0.2, z: 0, r: 0.2, color: "#64748b", label: "" },
          { x: 0.4, y: -0.9, z: 0, r: 0.2, color: "#64748b", label: "" },
          { x: 0.4, y: -1.6, z: 0, r: 0.2, color: "#64748b", label: "Tail 2" }
        ],
        bonds: [[0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [5, 6], [6, 7]]
      },
      caption: "Simplified diagram: a hydrophilic head (yellow) and two hydrophobic fatty acid tails (grey). Rotate it with your finger."
    },
    {
      type: "text",
      title: "Passive transport: diffusion",
      html: `<p>Molecules are always moving randomly (thermal motion). If they are more concentrated in one area than in another, by pure <b>statistical</b> chance more molecules move from the crowded area to the less crowded one than the other way round: this is <b>diffusion</b>. A drop of ink in a glass of water spreads out on its own until it is evenly distributed. No metabolic energy is needed: it is <b>passive transport</b>, which follows the <b>concentration gradient</b>, from high to low concentration, until equilibrium is reached.</p>
<p>Across the membrane, diffusion can be:</p>
<ul>
<li><b>simple</b>: the molecule crosses the bilayer directly (O₂, CO₂, fat-soluble molecules). In the lungs oxygen passes from the air into the blood because it is more concentrated in the air; CO₂ travels the opposite way;</li>
<li><b>facilitated</b>: the molecule (glucose, amino acids, ions) passes with the help of a <b>channel protein</b> or a <b>carrier protein</b> that changes shape; still down the gradient and without using ATP. The rate reaches a maximum when all the carriers are occupied (saturation).</li>
</ul>
<p>The rate of diffusion increases with the difference in concentration, with temperature and with the available surface area, and decreases with the thickness to be crossed: that is why gas exchange in the lungs takes place in alveoli with extremely thin walls (one cell thick) and a total surface area of about 70-100 m².</p>`
    },
    {
      type: "text",
      title: "Osmosis: the diffusion of water",
      html: `<p><b>Osmosis</b> is the diffusion of <b>water</b> across a semi-permeable membrane, when the solutions on the two sides have different concentrations of solutes that cannot pass through. Water moves <b>towards the more concentrated solution</b> (that is, where there is less "free" water), tending to dilute it. The force that drives the water is <b>osmotic pressure</b>.</p>
<p>Two solutions are compared using these terms:</p>
<ul>
<li><b>isotonic</b>: same solute concentration, no net movement;</li>
<li><b>hypertonic</b>: more concentrated (in solutes) than the other: it draws in water;</li>
<li><b>hypotonic</b>: less concentrated: it loses water.</li>
</ul>
<p>What happens to a cell in a solution:</p>
<table>
<tr><th>Outside solution</th><th>Red blood cell (animal)</th><th>Plant cell</th></tr>
<tr><td><b>Hypotonic</b> (pure water)</td><td>water enters: it swells and bursts (<b>haemolysis</b>)</td><td>water enters: <b>turgor</b> increases, the wall stops it from bursting</td></tr>
<tr><td><b>Isotonic</b></td><td>normal shape</td><td>"flaccid" cell</td></tr>
<tr><td><b>Hypertonic</b> (salty/sugary water)</td><td>water leaves: it shrivels (<b>crenation</b>)</td><td>the membrane pulls away from the wall: <b>plasmolysis</b></td></tr>
</table>
<p>In 2003 <b>Peter Agre</b> received the Nobel Prize in Chemistry for discovering <b>aquaporins</b>, channel proteins specific to water, which make osmosis much faster (for example in the kidneys, which reabsorb litres of water every day).</p>`
    },
    {
      type: "example",
      title: "Saline solution and sugar on strawberries",
      html: `<p>The <b>saline solution</b> used in hospitals is a <b>0.9%</b> (mass/volume) sodium chloride solution: 9 g of salt per litre, and it has the same osmotic pressure as blood plasma (it is <b>isotonic</b>). If distilled water were injected into a vein, the red blood cells, in a hypotonic environment, would swell and burst.</p>
<p>How much salt do you need for 500 mL of saline solution? 9 g/L × 0.5 L = <b>4.5 g</b>.</p>
<p>In the kitchen: if you sprinkle sugar on strawberries, after a while some liquid appears at the bottom. The sugar creates a <b>hypertonic</b> environment outside: water leaves the fruit's cells by osmosis. The same principle explains why salt preserves meat and fish: microbes in a hypertonic environment lose water and die or cannot reproduce. And why drinking seawater dehydrates you: it is saltier than our body fluids and would draw water out of the tissues.</p>`
    },
    {
      type: "example",
      title: "Why do we need blood vessels? How slow diffusion is",
      html: `<p>The time a molecule takes to diffuse grows with the <b>square</b> of the distance: t ≈ x² / (2D), where D is the diffusion coefficient (for a small molecule in water, about 10⁻⁹ m²/s).</p>
<ul>
<li>x = 10 µm (the size of a cell): t ≈ (10⁻⁵)² / (2 · 10⁻⁹) = 10⁻¹⁰ / (2 · 10⁻⁹) ≈ <b>0.05 s</b>;</li>
<li>x = 1 cm (10⁻² m): t ≈ 10⁻⁴ / (2 · 10⁻⁹) = 5 · 10⁴ s ≈ <b>14 hours</b>.</li>
</ul>
<p>Covering a distance 1000 times greater takes a million times longer. That is why diffusion works well inside a cell but not from one side of a body to the other: large animals need a circulatory system that carries substances by "convection", bringing capillaries to within a few micrometres of every cell.</p>`
    },
    {
      type: "widget",
      title: "What happens to the cell?",
      widget: "classify",
      options: { groups: ["Water enters the cell", "Water leaves the cell", "No net movement"], items: [
        ["Red blood cell in distilled water", 0],
        ["Strawberry sprinkled with sugar", 1],
        ["Red blood cell in a 0.9% NaCl solution", 2],
        ["Slug with salt on its body", 1],
        ["Plant root in soil rich in fresh water", 0],
        ["Wilted lettuce placed in cold water", 0]
      ] },
      caption: "Remember: water always moves towards the solution with the higher solute concentration."
    },
    {
      type: "quiz",
      title: "Mini-quiz: diffusion and osmosis",
      questions: [
        { type: "mc", q: "In which direction does water move by osmosis?", options: ["Towards the more concentrated solution", "Towards the more dilute solution", "It never moves"], answer: 0, explain: "Water moves towards the area with more solute, tending to dilute it." },
        { type: "tf", q: "Facilitated diffusion uses ATP.", answer: false, explain: "It is passive transport: it uses proteins but follows the gradient and needs no metabolic energy." },
        { type: "mc", q: "What do we call a solution with the same solute concentration as blood?", options: ["Hypotonic", "Isotonic", "Hypertonic"], answer: 1, explain: "Isotonic means same osmotic pressure; saline solution is isotonic." }
      ]
    },
    {
      type: "text",
      title: "Active transport: against the gradient, paid for in ATP",
      html: `<p>Very often the cell has to concentrate a substance where it is already plentiful, or get rid of it where there is already too much: going <b>against the gradient</b> is like pushing a ball uphill, and it requires energy. This is <b>active transport</b>, carried out by proteins called <b>pumps</b>, which use the energy of <b>ATP</b>.</p>
<p>The most important example is the <b>sodium-potassium pump</b> (Na⁺/K⁺-ATPase), discovered by <b>Jens Skou</b> in 1957 (Nobel Prize 1997). In each cycle, using one molecule of ATP, it <b>pumps out 3 Na⁺ ions</b> and <b>brings in 2 K⁺ ions</b>. So inside the cell there is a lot of potassium and little sodium, and outside the opposite. This gradient:</p>
<ul>
<li>creates the electrical potential difference (about −70 mV in resting neurons) on which the <b>nerve impulse</b> is based;</li>
<li>regulates cell volume (counteracting the entry of water);</li>
<li>makes <b>secondary active transport</b> possible: in the intestine sodium flows back in down its gradient, dragging glucose along with it (co-transport).</li>
</ul>
<p>It is estimated that in neurons the pump uses up to about 20-40% of the ATP.</p>
<p>Another pump is the proton (H⁺) pump in the stomach: the parietal cells pump H⁺ until hydrochloric acid is produced, bringing the pH of gastric juice to about 1.5-2.</p>`
    },
    {
      type: "svg",
      title: "The sodium-potassium pump",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="0" y="0" width="600" height="95" fill="#dbeafe"/><rect x="0" y="205" width="600" height="95" fill="#fef9c3"/>
<rect x="0" y="95" width="600" height="110" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
<path d="M230 80 L370 80 L350 220 L250 220 Z" fill="#a78bfa" stroke="#5b21b6" stroke-width="3"/>
<text x="300" y="155" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">Na⁺/K⁺ PUMP</text>
<text x="20" y="28" font-size="16" font-weight="bold" fill="#1e3a8a">Outside: lots of Na⁺, little K⁺</text>
<text x="20" y="285" font-size="16" font-weight="bold" fill="#854d0e">Inside: lots of K⁺, little Na⁺</text>
<g fill="#ef4444"><circle cx="440" cy="40" r="12"/><circle cx="480" cy="55" r="12"/><circle cx="520" cy="40" r="12"/></g>
<text x="480" y="85" font-size="14" font-weight="bold" fill="#991b1b" text-anchor="middle">3 Na⁺ out</text>
<g fill="#2563eb"><circle cx="100" cy="60" r="12"/><circle cx="140" cy="70" r="12"/></g>
<text x="120" y="92" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">2 K⁺ in</text>
<text x="450" y="250" font-size="16" font-weight="bold" fill="#92400e">ATP → ADP + P</text>
<path d="M400 120 C420 90 440 70 440 55" fill="none" stroke="#dc2626" stroke-width="4"/>
<path d="M200 70 C190 95 190 110 200 135" fill="none" stroke="#2563eb" stroke-width="4"/>
</svg>`,
      caption: "The pump spends ATP to move 3 sodium ions out and 2 potassium ions in, always against their gradient."
    },
    {
      type: "text",
      title: "Bulk transport: endocytosis and exocytosis",
      html: `<p>Particles too big to pass through channels and pumps (proteins, bacteria, large fragments) travel in <b>vesicles</b> formed by the membrane itself. These processes use ATP.</p>
<ul>
<li><b>Endocytosis</b>: the membrane folds inwards, surrounds the material and closes into a vesicle that enters the cell.
<ul>
<li><b>Phagocytosis</b> ("cell eating"): engulfing large solid particles, such as bacteria; it is carried out by white blood cells (macrophages, neutrophils) and amoebas. The vesicle fuses with lysosomes and the contents are digested. It was observed by <b>Ilya Mechnikov</b> (Nobel Prize 1908) in starfish larvae;</li>
<li><b>Pinocytosis</b> ("cell drinking"): taking in liquids with dissolved molecules;</li>
<li><b>Receptor-mediated endocytosis</b>: only specific molecules that bind to receptors are captured: this is how cells take up cholesterol (LDL).</li>
</ul></li>
<li><b>Exocytosis</b>: a vesicle from inside fuses with the membrane and releases its contents outside: this is how hormones (insulin), digestive enzymes and neurotransmitters at the synapse leave the cell. The vesicle membrane becomes part of the cell membrane.</li>
</ul>
<p>Endocytosis and exocytosis balance each other, so the cell surface stays constant.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: active and bulk transport",
      questions: [
        { type: "num", q: "How many K⁺ ions does the sodium-potassium pump bring in during each cycle?", answer: 2, explain: "3 Na⁺ go out and 2 K⁺ come in, using one molecule of ATP." },
        { type: "mc", q: "Which process allows a white blood cell to engulf a bacterium?", options: ["Phagocytosis", "Osmosis", "Simple diffusion"], answer: 0, explain: "It is a form of endocytosis that forms a vesicle around the particle." },
        { type: "tf", q: "Active transport always moves substances down their concentration gradient.", answer: false, explain: "The opposite: it goes against the gradient, which is why it requires energy." }
      ]
    },
    {
      type: "alternatives",
      title: "Other ways to understand transport",
      intro: "To find your way among the types of transport, try these analogies.",
      tabs: [
        {
          label: "⛷️ Downhill or uphill",
          html: `<p>Think of <b>concentration</b> as the height of a ski slope. <b>Diffusion</b> (simple or facilitated): you ski down the slope effortlessly, even if you have to wait to get through a gate (<i>channel</i>). <b>Active transport</b>: you go back up the slope, and you need a ski lift, that is, a pump that burns energy (ATP). <b>Vesicles</b>: you carry a very large load down on a sledge because it won't fit through the gate.</p>`
        },
        {
          label: "🍵 Tea and the tea bag",
          html: `<p>Put a tea bag in hot water: the substances in the tea come out of the bag (a permeable membrane) and spread until the colour is even. Meanwhile water enters the bag, a bit like osmosis (the bag holds back the leaves, which are too large to get through). Tea brews faster in hot water, just as diffusion speeds up with temperature.</p>`
        },
        {
          label: "🥔 The potato experiment",
          html: `<p>Cut two identical potato cubes and weigh them. Put one in pure water and one in very salty water (for example 100 g of salt per litre) for an hour. Weigh them again: the one in pure water is heavier and firmer (water entered by osmosis), the one in salty water is lighter and floppy (water left). Measuring the difference in mass lets you estimate the concentration at which the cube doesn't change weight: that is the concentration that is isotonic to the potato cells.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><rect x="40" y="90" width="220" height="170" rx="10" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/><rect x="340" y="90" width="220" height="170" rx="10" fill="#fde68a" stroke="#b45309" stroke-width="3"/><rect x="120" y="170" width="60" height="60" fill="#fef3c7" stroke="#92400e" stroke-width="3"/><rect x="430" y="180" width="40" height="40" fill="#fef3c7" stroke="#92400e" stroke-width="3"/><text x="150" y="70" font-size="16" font-weight="bold" fill="#1e40af" text-anchor="middle">Pure water</text><text x="450" y="70" font-size="16" font-weight="bold" fill="#92400e" text-anchor="middle">Salty water</text><text x="150" y="285" font-size="14" fill="#1e293b" text-anchor="middle">swells (water enters)</text><text x="450" y="285" font-size="14" fill="#1e293b" text-anchor="middle">shrinks (water leaves)</text></svg>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Anaesthetics, poisons and the membrane",
      html: `<p>Many poisons work by blocking membrane proteins. <b>Tetrodotoxin</b> from the pufferfish (fugu) blocks the sodium channels of neurons: nerves can no longer transmit impulses and paralysis sets in. <b>Digitalis</b> (digoxin), a drug obtained from the foxglove plant (Digitalis), inhibits the Na⁺/K⁺ pump and, in controlled doses, strengthens the heart's contractions. Cholera toxins, on the other hand, make the chloride channels of intestinal cells open: water leaves by osmosis, causing very severe diarrhoea, which is why it is treated first of all with solutions of salts and sugars (oral rehydration), exploiting sodium-glucose co-transport.</p>`
    },
    {
      type: "curiosity",
      title: "Why do your fingers wrinkle in water?",
      html: `<p>After a long bath the skin on your hands and feet wrinkles. It was thought to be just osmosis, with the skin swelling with water. In reality the phenomenon is controlled by the nervous system: the blood vessels in the fingers narrow and the skin folds into grooves. Some studies suggest that these grooves improve grip on wet objects. It is a good example of how an apparently "physical" phenomenon can have a more complex explanation.</p>`
    },
    {
      type: "conceptMap",
      title: "Map of transport: tap the nodes and find out why",
      nodes: [
        { id: "membrana", label: "Plasma membrane", x: 50, y: 6, color: "#3b82f6", html: "A phospholipid bilayer with proteins: selective permeability.", why: "Gorter and Grendel (1925) found that the lipids of red blood cells were enough to cover the cell twice; Singer and Nicolson (1972) added the proteins with the fluid mosaic model, later confirmed by electron microscopy and freeze-fracture techniques." },
        { id: "diff", label: "Diffusion", x: 15, y: 36, color: "#22c55e", html: "From more concentrated to less concentrated, without energy.", why: "It is a consequence of thermal motion: in 1827 the botanist Robert Brown observed the random movement of pollen grains in water; in 1905 Einstein explained it as collisions with molecules, and Jean Perrin confirmed it experimentally, proving that atoms are real." },
        { id: "osmosi", label: "Osmosis", x: 50, y: 36, color: "#0ea5e9", html: "Diffusion of water across a semi-permeable membrane.", why: "Abbé Nollet described the phenomenon in 1748; in the nineteenth century Pfeffer measured osmotic pressure and van 't Hoff (Nobel Prize 1901) showed that it behaves like the pressure of a gas: π = MRT (for dilute solutions)." },
        { id: "facil", label: "Facilitated diffusion", x: 85, y: 36, color: "#a855f7", html: "With channels and carriers, without ATP.", why: "It is needed because polar molecules cannot cross the hydrophobic core of the bilayer; ion channels have been studied with the patch-clamp technique of Neher and Sakmann (Nobel Prize 1991)." },
        { id: "attivo", label: "Active transport", x: 25, y: 66, color: "#ef4444", html: "Pumps that use ATP against the gradient.", why: "To stay alive, cells must keep their inside different from the outside: it is a non-equilibrium state. The Na⁺/K⁺ pump (Skou, 1957) maintains the gradients needed by nerves, muscles and intestinal absorption." },
        { id: "massa", label: "Endo/exocytosis", x: 75, y: 66, color: "#f59e0b", html: "Transport in vesicles for large molecules.", why: "They are needed when the particle is too large for transport proteins. Mechnikov, observing phagocytosis, grasped the role of cells in immune defence (Nobel Prize 1908)." },
        { id: "atp", label: "Energy (ATP)", x: 50, y: 88, color: "#14b8a6", html: "The cell's energy currency.", why: "Its cost explains why active transport is limited to essential cases: the cell spends ATP only to go against the gradient." }
      ],
      edges: [
        ["membrana", "diff", "allows"],
        ["membrana", "osmosi", "allows"],
        ["diff", "facil", "with proteins"],
        ["membrana", "attivo", "hosts pumps"],
        ["attivo", "atp", "uses"],
        ["massa", "atp", "uses"],
        ["membrana", "massa", "changes shape"]
      ]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul><li>Passive (no ATP, down the gradient): simple diffusion, facilitated diffusion, osmosis.</li><li>Active (ATP, against the gradient or in bulk): pumps such as Na⁺/K⁺ (3 out, 2 in), endocytosis, exocytosis.</li><li>Water moves towards the more concentrated (hypertonic) solution.</li><li>Red blood cell: hypotonic = bursts, hypertonic = shrivels.</li></ul>`
    }
  ],
  glossary: [
    { t: "Phospholipid", d: "A lipid with a hydrophilic head and two hydrophobic tails: the basic component of the membrane." },
    { t: "Fluid mosaic", d: "Model of the membrane: a fluid phospholipid bilayer with embedded proteins." },
    { t: "Selective permeability", d: "The membrane's ability to let some substances through and not others." },
    { t: "Diffusion", d: "Passive movement of particles from the more concentrated area to the less concentrated one." },
    { t: "Osmosis", d: "Diffusion of water across a semi-permeable membrane." },
    { t: "Isotonic solution", d: "A solution with the same solute concentration as another (usually the cell)." },
    { t: "Hypertonic solution", d: "A solution with a higher solute concentration than another." },
    { t: "Hypotonic solution", d: "A solution with a lower solute concentration than another." },
    { t: "Active transport", d: "Transport against the gradient that uses energy (ATP)." },
    { t: "Sodium-potassium pump", d: "A protein that pumps out 3 Na⁺ and brings in 2 K⁺ for every ATP used." },
    { t: "Endocytosis", d: "Entry of material into the cell in vesicles formed by the membrane." },
    { t: "Exocytosis", d: "Release of substances outside the cell by fusion of vesicles with the membrane." },
    { t: "Plasmolysis", d: "The membrane pulling away from the wall in a plant cell in a hypertonic environment." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Why do phospholipids form a bilayer in water?", options: ["The hydrophobic tails hide inside and the hydrophilic heads face the water", "The heads repel the tails", "Because they are non-polar molecules"], answer: 0, explain: "Their amphipathic nature leads them to arrange themselves spontaneously into a bilayer." },
      { type: "tf", q: "Oxygen crosses the membrane by simple diffusion.", answer: true, explain: "It is a small non-polar molecule and passes directly between the phospholipids." },
      { type: "mc", q: "A red blood cell placed in distilled water...", options: ["shrivels", "swells and may burst", "does not change"], answer: 1, explain: "Distilled water is hypotonic: water enters by osmosis and causes haemolysis." },
      { type: "num", q: "How many grams of NaCl do you need for 2 litres of saline solution (9 g/L)?", answer: 18, unit: "g", explain: "9 g/L × 2 L = 18 g." },
      { type: "mc", q: "Which process requires ATP?", options: ["Osmosis", "Facilitated diffusion", "Sodium-potassium pump"], answer: 2, explain: "The pump moves ions against the gradient and uses ATP." },
      { type: "num", q: "In each cycle of the Na⁺/K⁺ pump, how many sodium ions are pumped out?", answer: 3, explain: "Each cycle pumps out 3 Na⁺ and brings in 2 K⁺." },
      { type: "text", q: "What do we call the engulfing of a large solid particle, such as a bacterium, by a cell?", answer: ["phagocytosis"], explain: "It is a form of endocytosis carried out, for example, by macrophages." },
      { type: "order", q: "Put in order the stages of the exocytosis of a hormone.", items: ["The hormone is packaged into a vesicle by the Golgi", "The vesicle moves towards the membrane", "The vesicle fuses with the membrane", "The hormone is released outside"], explain: "The contents pass from the Golgi to the vesicle, the vesicle reaches the membrane, fuses with it and releases them." },
      { type: "tf", q: "Plasmolysis occurs in a plant cell placed in a hypertonic solution.", answer: true, explain: "Water leaves, the cytoplasm shrinks and the membrane pulls away from the wall." },
      { type: "mc", q: "Why does fruit sprinkled with sugar release liquid?", options: ["Because sugar reacts with water to form an acid", "Because sugar creates a hypertonic environment that draws out water", "Because the fruit heats up"], answer: 1, explain: "Water leaves by osmosis towards the more concentrated area, that is, the sugar outside." }
    ]
  }
});
