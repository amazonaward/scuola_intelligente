QBANK("en", "l3-fis-secondo-principio", {
  f: [
    { type: "mc", q: "What is the name of the ratio between the work produced and the heat absorbed by a heat engine?", options: ["Entropy", "Efficiency", "Power", "Heat capacity"], answer: 1, explain: "η = W/Q_h." },
    { type: "tf", q: "Heat flows spontaneously from a hot body to a cold one.", answer: true, explain: "This is the natural direction of spontaneous processes." },
    { type: "num", q: "An engine absorbs 1000 J and produces 250 J of work. Calculate its efficiency.", answer: 0.25, tol: 0.001, unit: "", explain: "η = 250/1000 = 0.25." },
    { type: "mc", q: "Which quantity can never decrease in an isolated system?", options: ["Internal energy", "Entropy", "Temperature", "Volume"], answer: 1, explain: "Second law: ΔS ≥ 0." },
    { type: "mc", q: "Who published \"Réflexions sur la puissance motrice du feu\" (Reflections on the Motive Power of Fire) in 1824?", options: ["Joule", "Clausius", "Sadi Carnot", "Boltzmann"], answer: 2, explain: "Sadi Carnot founded thermodynamics with that work." }
  ],
  m: [
    { type: "num", q: "An engine absorbs 800 J and gives out 600 J to the cold reservoir. What is its efficiency?", answer: 0.25, tol: 0.001, unit: "", explain: "W = 200 J; η = 200/800 = 0.25." },
    { type: "num", q: "What is the maximum efficiency of an engine working between 450 K and 300 K?", answer: 0.333, tol: 0.002, unit: "", explain: "η = 1 − 300/450 = 1/3." },
    { type: "num", q: "A body at 200 K reversibly absorbs 800 J. Calculate ΔS.", answer: 4, tol: 0.001, unit: "J/K", explain: "ΔS = 800/200 = 4 J/K." },
    { type: "tf", q: "A refrigerator violates the Clausius statement because it moves heat from cold to hot.", answer: false, explain: "It does so by spending work: the heat transfer is not the \"sole result\"." },
    { type: "num", q: "A refrigerator with COP = 4 removes 800 J. How much work does it use?", answer: 200, tol: 0, unit: "J", explain: "W = Q_c/COP = 800/4 = 200 J." }
  ],
  d: [
    { type: "num", q: "A power station has a real efficiency of 40% and operates between 900 K and 300 K. What is its efficiency as a percentage of the Carnot efficiency (rounded)?", answer: 60, tol: 0.5, unit: "%", explain: "η_C = 1 − 300/900 = 0.667; 0.40/0.667 = 0.60." },
    { type: "num", q: "1000 J flow from a body at 500 K to one at 250 K. What is the total ΔS?", answer: 2, tol: 0.001, unit: "J/K", explain: "ΔS = −1000/500 + 1000/250 = −2 + 4 = +2 J/K." },
    { type: "num", q: "A Carnot engine between 600 K and 300 K absorbs 1200 J from the hot reservoir. How much work does it produce?", answer: 600, tol: 0, unit: "J", explain: "η = 0.5; W = 0.5 × 1200 = 600 J." },
    { type: "tf", q: "In a reversible Carnot cycle Q_c/Q_h = T_c/T_h.", answer: true, explain: "This is the relation that leads to η = 1 − T_c/T_h." },
    { type: "mc", q: "What does S = k_B ln W say?", options: ["Energy is proportional to the logarithm of the volume", "Entropy measures the number of microstates compatible with the macroscopic state", "Temperature is proportional to W", "Heat is proportional to ln W"], answer: 1, explain: "It is Boltzmann's formula: more microstates, more entropy." }
  ]
});
