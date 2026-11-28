QBANK("en", "l3-fis-fluidodinamica", {
  f: [
    { type: "mc", q: "What does the flow rate of a pipe measure?", options: ["The mass of the pipe", "The volume of fluid passing per unit time", "The pressure of the fluid", "The temperature of the fluid"], answer: 1, explain: "Q = ΔV/Δt = A·v." },
    { type: "tf", q: "If a pipe narrows, the fluid inside it speeds up.", answer: true, explain: "A·v is constant: smaller area, higher speed." },
    { type: "num", q: "A pipe has a cross-section of 0.02 m² and water flows at 3 m/s. Calculate the flow rate in m³/s.", answer: 0.06, tol: 0.001, unit: "m³/s", explain: "Q = 0.02 × 3 = 0.06 m³/s." },
    { type: "mc", q: "What is the name of the hypothetical incompressible, non-viscous fluid in steady flow?", options: ["Real fluid", "Ideal fluid", "Newtonian fluid", "Turbulent fluid"], answer: 1, explain: "It is the model used for Bernoulli's principle." },
    { type: "mc", q: "Which of the following fluids is the most viscous?", options: ["Air", "Water", "Honey", "Alcohol"], answer: 2, explain: "Honey has a viscosity of about 10 Pa·s, enormously greater than that of water." }
  ],
  m: [
    { type: "num", q: "A pipe with a cross-section of 6 cm² narrows to 2 cm². If the speed in the wide section is 2 m/s, what is it in the narrow section?", answer: 6, tol: 0.01, unit: "m/s", explain: "v2 = A1·v1/A2 = 6·2/2 = 6 m/s." },
    { type: "num", q: "A hole is 0.8 m below the free surface of a tank. With g = 10 m/s², at what speed does the water come out?", answer: 4, tol: 0.01, unit: "m/s", explain: "v = √(2gh) = √16 = 4 m/s." },
    { type: "tf", q: "Bernoulli's principle says that where the speed is higher, at constant height, the pressure is lower.", answer: true, explain: "p + ½ρv² = constant at constant height." },
    { type: "num", q: "A horizontal pipe has water at 2 m/s in one section and 4 m/s in another. What is the pressure difference (ρ = 1000 kg/m³)?", answer: 6000, tol: 1, unit: "Pa", explain: "Δp = ½·1000·(16 − 4) = 6000 Pa." },
    { type: "mc", q: "Which law explains the dependence on the fourth power of the radius for viscous flow in a pipe?", options: ["Stevin's law", "Poiseuille's law", "Torricelli's theorem", "Archimedes' principle"], answer: 1, explain: "Q = πr⁴Δp/(8ηL)." }
  ],
  d: [
    { type: "num", q: "An artery narrows and its radius is halved. For the same Δp, by what factor does the flow rate decrease (Poiseuille's law)?", answer: 16, tol: 0, unit: "times", explain: "Q ∝ r⁴: (1/2)⁴ = 1/16." },
    { type: "num", q: "Water (ρ = 1000 kg/m³) flows in a pipe of diameter 5 cm with v = 2 m/s and η = 10⁻³ Pa·s. Calculate the Reynolds number.", answer: 100000, tol: 1, unit: "", explain: "Re = ρvd/η = 1000·2·0.05/10⁻³ = 10⁵: turbulent flow." },
    { type: "num", q: "A wide tank has a hole of area 4 cm² at a depth of 2 m. With g = 9.8 m/s², what is the flow rate out of it? (in L/s, rounded to one decimal place)", answer: 2.5, tol: 0.1, unit: "L/s", explain: "v = √(2·9.8·2) ≈ 6.26 m/s; Q = 4·10⁻⁴ × 6.26 ≈ 2.5·10⁻³ m³/s = 2.5 L/s." },
    { type: "tf", q: "Two ships travelling side by side and close together tend to be drawn towards each other because of the low pressure in the gap between them.", answer: true, explain: "The water between the ships is faster and at lower pressure: the pressure outside pushes the ships towards each other." },
    { type: "mc", q: "Why does an aircraft wing produce lift?", options: ["Because the air above it is slower", "Because the pressure above is lower than below, and the wing deflects the air downwards", "Because the air below is faster", "Because the aircraft is lighter than air"], answer: 1, explain: "Above the wing the flow is faster and the pressure lower; in addition the wing deflects the air downwards and, in reaction, is pushed upwards." }
  ]
});
