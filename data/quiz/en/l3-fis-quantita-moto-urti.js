QBANK("en", "l3-fis-quantita-moto-urti", {
  f: [
    { type: "num", q: "Calculate the momentum of a 3 kg body moving at 4 m/s.", answer: 12, tol: 0, unit: "kg·m/s", explain: "p = m·v = 3 × 4 = 12 kg·m/s." },
    { type: "tf", q: "Momentum is a vector quantity.", answer: true, explain: "It has the same direction as the velocity." },
    { type: "mc", q: "Which formula gives the impulse of a constant force?", options: ["F·Δt", "F/Δt", "F·Δx", "m·a"], answer: 0, explain: "J = F·Δt, in N·s." },
    { type: "mc", q: "In a perfectly inelastic collision, after the collision the bodies:", options: ["always stop", "stick together", "bounce off with the same speed", "push each other apart"], answer: 1, explain: "By definition the bodies stay stuck together and move with the same velocity." },
    { type: "tf", q: "In an isolated system the total momentum is conserved.", answer: true, explain: "This is the principle of conservation of momentum." }
  ],
  m: [
    { type: "num", q: "A constant force of 40 N acts on a body for 0.5 s. What is the change in momentum?", answer: 20, tol: 0, unit: "kg·m/s", explain: "Δp = J = F·Δt = 40 × 0.5 = 20 kg·m/s." },
    { type: "num", q: "A 3000 kg wagon at 4 m/s couples to a stationary 1000 kg wagon. What is the final velocity?", answer: 3, tol: 0, unit: "m/s", explain: "V = (3000·4)/4000 = 3 m/s." },
    { type: "mc", q: "Why is a car with crumple zones safer?", options: ["It has less mass", "It lengthens the collision time and reduces the force on the passengers", "It reduces the passengers' momentum", "It increases the impulse"], answer: 1, explain: "For the same Δp, a longer Δt means a smaller average force." },
    { type: "tf", q: "In an elastic collision the total kinetic energy is conserved.", answer: true, explain: "This is exactly the feature that distinguishes an elastic collision." },
    { type: "num", q: "A 50 kg skater standing still on the ice throws a 5 kg parcel at 4 m/s. At what speed does the skater recoil?", answer: 0.4, tol: 0.01, unit: "m/s", explain: "5·4 = 50·V ⟹ V = 0.4 m/s." }
  ],
  d: [
    { type: "num", q: "A 3 kg ball at 5 m/s collides elastically with a stationary 3 kg ball. What is the velocity of the second ball after the collision?", answer: 5, tol: 0, unit: "m/s", explain: "Equal masses: they exchange velocities, so v'2 = 5 m/s and v'1 = 0." },
    { type: "num", q: "A 1 kg block at 8 m/s collides elastically with a stationary 3 kg block. What is the final velocity of the 1 kg block (with its sign)?", answer: -4, tol: 0.01, unit: "m/s", explain: "v'1 = (1−3)·8/(1+3) = −16/4 = −4 m/s: it bounces back." },
    { type: "num", q: "A 20 g bullet embeds itself in a stationary 1.98 kg block hanging from a string; immediately afterwards the system has a velocity of 2 m/s. What was the velocity of the bullet?", answer: 200, tol: 0.5, unit: "m/s", explain: "m·v = (m+M)·V ⟹ v = 2.00 × 2/0.020 = 200 m/s." },
    { type: "num", q: "A 20 000 kg wagon at 3 m/s couples to a stationary 10 000 kg wagon. How much kinetic energy is dissipated?", answer: 30000, tol: 10, unit: "J", explain: "Before: 90 000 J; after (V = 2 m/s): ½·30 000·4 = 60 000 J; 30 000 J dissipated." },
    { type: "mc", q: "An explosion splits a body initially at rest into two fragments, one of mass m and one of mass 3m. What is the ratio of their speeds?", options: ["Fragment m goes 3 times faster", "Fragment 3m goes 3 times faster", "They have the same speed", "Fragment m goes 9 times faster"], answer: 0, explain: "The total momentum stays zero: m·v1 = 3m·v2, so v1 = 3·v2." }
  ]
});
