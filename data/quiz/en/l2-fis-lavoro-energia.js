QBANK("en", "l2-fis-lavoro-energia", {
  f: [
    { type: "text", q: "What is the name of the SI unit of energy?", answer: ["joule", "the joule", "j", "joules"], explain: "The joule (J)." },
    { type: "num", q: "A force of 10 N moves an object 3 m in its own direction. How much work is done?", answer: 30, tol: 0.1, unit: "J", explain: "W = 10 · 3 = 30 J." },
    { type: "tf", q: "A body at rest has zero kinetic energy.", answer: true, explain: "Ek = ½mv² and v = 0." },
    { type: "mc", q: "Which formula gives gravitational potential energy near the Earth?", options: ["m·g·h", "½·m·v²", "F·s"], answer: 0, explain: "U = m·g·h." },
    { type: "num", q: "A 60 W light bulb stays on for 10 s. How much energy does it use?", answer: 600, tol: 0.5, unit: "J", explain: "E = P·t = 60 · 10 = 600 J." }
  ],
  m: [
    { type: "num", q: "Calculate the kinetic energy of a 2 kg object moving at 6 m/s.", answer: 36, tol: 0.1, unit: "J", explain: "Ek = ½ · 2 · 36 = 36 J." },
    { type: "num", q: "How much potential energy does a 0.5 kg book have on a shelf 2 m high (g = 10 m/s²)?", answer: 10, tol: 0.1, unit: "J", explain: "U = 0.5 · 10 · 2 = 10 J." },
    { type: "tf", q: "If you carry a rucksack at constant velocity along a horizontal path, the work done by its weight is zero.", answer: true, explain: "Weight is vertical, the displacement horizontal: cos 90° = 0." },
    { type: "num", q: "A 2 kW engine runs for 30 s. How much work does it do?", answer: 60000, tol: 10, unit: "J", explain: "W = P·t = 2000 · 30 = 60 000 J." },
    { type: "mc", q: "A spring is compressed: what type of energy does it store?", options: ["Kinetic", "Elastic potential", "Nuclear", "None"], answer: 1, explain: "Elastic potential energy U = ½kx²." }
  ],
  d: [
    { type: "num", q: "A 20 kg crate is dragged 6 m with a force of 50 N at 60° to the displacement. Calculate the work done by the force.", answer: 150, tol: 0.5, unit: "J", explain: "W = 50 · 6 · cos 60° = 300 · 0.5 = 150 J." },
    { type: "num", q: "A 1000 kg car brakes from 30 m/s to 0 over 90 m. Calculate the magnitude of the average braking force.", answer: 5000, tol: 5, unit: "N", explain: "W = ΔEk = 0 − ½·1000·900 = −450 000 J; F = 450 000/90 = 5000 N." },
    { type: "num", q: "A spring with k = 800 N/m is compressed by 0.05 m. Calculate the energy stored.", answer: 1, tol: 0.01, unit: "J", explain: "U = ½ · 800 · 0.0025 = 1 J." },
    { type: "num", q: "A 0.5 kg stone is thrown upwards at 20 m/s (g = 10 m/s², no friction). What maximum height does it reach?", answer: 20, tol: 0.2, unit: "m", explain: "½mv² = mgh → h = v²/(2g) = 400/20 = 20 m." },
    { type: "tf", q: "If a car doubles its speed, its braking distance (with constant braking force) quadruples.", answer: true, explain: "W = F·s = ΔEk ∝ v²: doubling v makes s 4 times as long." }
  ]
});
