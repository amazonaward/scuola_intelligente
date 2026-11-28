QBANK("en", "l3-fis-gravitazione", {
  f: [
    { type: "mc", q: "According to Kepler, what shape is a planet's orbit?", options: ["Circle", "Ellipse", "Parabola", "Spiral"], answer: 1, explain: "First law: an ellipse with the Sun at one focus." },
    { type: "tf", q: "The gravitational force between two masses is always attractive.", answer: true, explain: "Gravity has no repulsive version: masses always attract each other." },
    { type: "mc", q: "Who first measured the constant G, in 1798?", options: ["Galileo", "Newton", "Cavendish", "Einstein"], answer: 2, explain: "Henry Cavendish measured it with a torsion balance." },
    { type: "num", q: "What is the approximate value of g at the Earth's surface?", answer: 9.8, tol: 0.1, unit: "m/s²", explain: "g = GM/R² ≈ 9.8 m/s²." },
    { type: "mc", q: "At which point of its orbit does a planet move fastest?", options: ["Aphelion", "Perihelion", "Always the same", "At the foci"], answer: 1, explain: "At perihelion, closest to the Sun." }
  ],
  m: [
    { type: "num", q: "A celestial body has a = 4 AU. What is its period in years?", answer: 8, tol: 0.01, unit: "years", explain: "T = 4^1.5 = 8 years." },
    { type: "num", q: "Two bodies attract each other with a force of 12 N. If the distance doubles, what is the new force?", answer: 3, tol: 0, unit: "N", explain: "F ∝ 1/r²: 12/4 = 3 N." },
    { type: "num", q: "A planet has a mass of 8·10²³ kg and a radius of 3·10⁶ m. What is g (G = 6.67·10⁻¹¹)? ", answer: 5.9, tol: 0.1, unit: "m/s²", explain: "g = GM/R² = 6.67·10⁻¹¹·8·10²³/(9·10¹²) ≈ 5.9 m/s²." },
    { type: "tf", q: "The orbital speed of a satellite depends on its mass.", answer: false, explain: "v = √(GM/r) depends only on M and r." },
    { type: "mc", q: "If the mass of the Sun doubled while the Earth's orbit stayed the same, the force on the Earth would:", options: ["double", "halve", "stay the same", "quadruple"], answer: 0, explain: "F is proportional to M." }
  ],
  d: [
    { type: "num", q: "Calculate the escape velocity from a planet with GM = 4·10¹⁴ m³/s² and R = 5·10⁶ m (in km/s).", answer: 12.65, tol: 0.1, unit: "km/s", explain: "v = √(2GM/R) = √(1.6·10⁸) ≈ 12 650 m/s." },
    { type: "num", q: "A satellite orbits at r = 4·10⁷ m from a planet with GM = 4·10¹⁴ m³/s². What is its speed in m/s?", answer: 3162, tol: 5, unit: "m/s", explain: "v = √(GM/r) = √(10⁷) ≈ 3162 m/s." },
    { type: "num", q: "A satellite has a period 4 times that of another satellite around the same planet. How many times larger is its orbital radius (T² ∝ r³)?", answer: 2.52, tol: 0.02, unit: "times", explain: "r ∝ T^(2/3): 4^(2/3) ≈ 2.52." },
    { type: "mc", q: "What can be said about the total energy of a satellite in a bound circular orbit?", options: ["It is positive", "It is zero", "It is negative, E = −GMm/(2r)", "It depends only on the satellite's speed"], answer: 2, explain: "K = GMm/2r and U = −GMm/r: the sum is −GMm/(2r)." },
    { type: "tf", q: "The escape velocity is √2 times the circular orbital speed just above the surface.", answer: true, explain: "v_esc = √(2GM/R) = √2 · √(GM/R)." }
  ]
});
