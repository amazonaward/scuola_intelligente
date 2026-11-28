QBANK("en", "l2-sci-membrana-trasporti", {
  f: [
    { type: "mc", q: "What is the plasma membrane mainly made of?", options: ["A phospholipid bilayer with proteins", "Cellulose", "Proteins only"], answer: 0, explain: "It is a phospholipid bilayer with embedded proteins." },
    { type: "tf", q: "Simple diffusion always takes place from the more concentrated area to the less concentrated one.", answer: true, explain: "It follows the concentration gradient, without using energy." },
    { type: "text", q: "What do we call the diffusion of water across a semi-permeable membrane?", answer: ["osmosis"], explain: "Osmosis is the movement of water towards the more concentrated solution." },
    { type: "mc", q: "Which molecule provides the energy for active transport?", options: ["ATP", "DNA", "Cholesterol"], answer: 0, explain: "ATP is the cell's energy currency." },
    { type: "tf", q: "In exocytosis the contents of a vesicle are released outside the cell.", answer: true, explain: "The vesicle fuses with the membrane and releases its contents outside." }
  ],
  m: [
    { type: "mc", q: "A solution with more solutes than another is called...", options: ["hypotonic", "hypertonic", "isotonic"], answer: 1, explain: "Hypertonic means having a higher solute concentration." },
    { type: "mc", q: "What happens to a red blood cell in a very concentrated salt solution?", options: ["It swells", "It shrivels because it loses water", "It bursts"], answer: 1, explain: "The environment is hypertonic: water leaves and the cell undergoes crenation." },
    { type: "num", q: "One litre of saline solution contains 9 g of salt. How many grams are there in 250 mL?", answer: 2.25, tol: 0.01, unit: "g", explain: "9 × 0.25 = 2.25 g." },
    { type: "mc", q: "Which of these molecules crosses the lipid bilayer most easily?", options: ["Oxygen", "Sodium ion", "Glucose"], answer: 0, explain: "Oxygen is small and non-polar; ions and glucose need proteins." },
    { type: "tf", q: "Glucose enters many cells by facilitated diffusion through carrier proteins.", answer: true, explain: "It is a large polar molecule: it uses a carrier, without ATP, down the gradient." }
  ],
  d: [
    { type: "mc", q: "Why is the Na⁺/K⁺ pump important for neurons?", options: ["It maintains the ion gradients on which the nerve impulse is based", "It produces ATP", "It digests proteins"], answer: 0, explain: "The Na⁺ and K⁺ gradient generates the membrane potential needed for nerve signals." },
    { type: "num", q: "In 10 cycles of the sodium-potassium pump, how many ions in total (Na⁺ + K⁺) are moved?", answer: 50, explain: "Each cycle moves 3 Na⁺ + 2 K⁺ = 5 ions; 10 cycles = 50 ions." },
    { type: "mc", q: "A plant watered with very salty water wilts. Why?", options: ["The soil is hypertonic and the roots lose water by osmosis", "Salt is toxic only to photosynthesis", "Salt blocks the light"], answer: 0, explain: "Water tends to leave the roots towards the more concentrated soil." },
    { type: "tf", q: "The osmotic pressure of a solution increases if the solute concentration increases.", answer: true, explain: "It is proportional to the solute concentration (van 't Hoff's law)." },
    { type: "mc", q: "Which pair correctly matches process and feature?", options: ["Endocytosis - uses ATP and forms vesicles", "Osmosis - uses ATP", "Simple diffusion - requires pumps"], answer: 0, explain: "Endocytosis requires energy; osmosis and simple diffusion are passive." }
  ]
});
