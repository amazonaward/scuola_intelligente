QBANK("en", "l3-fis-moto-rotatorio", {
  f: [
    { type: "mc", q: "What is the unit of torque?", options: ["N", "N·m", "kg·m²", "rad/s"], answer: 1, explain: "τ = F·b: newtons times metres." },
    { type: "tf", q: "A force applied exactly on the axis of rotation produces no rotation at all.", answer: true, explain: "The lever arm is zero, so the torque is zero." },
    { type: "num", q: "A force of 20 N acts perpendicularly 0.5 m from the axis. What is the torque?", answer: 10, tol: 0, unit: "N·m", explain: "τ = 20 × 0.5 = 10 N·m." },
    { type: "mc", q: "What does a skater do to spin faster?", options: ["Stretches her arms out", "Pulls her arms in towards her body", "Pushes harder on the ice", "Increases her mass"], answer: 1, explain: "She reduces I, and since L is conserved ω increases." },
    { type: "tf", q: "The moment of inertia depends on how the mass is distributed about the axis.", answer: true, explain: "I = Σ m·r²: the distances from the axis matter." }
  ],
  m: [
    { type: "num", q: "A body with I = 2 kg·m² has α = 3 rad/s². What torque is acting on it?", answer: 6, tol: 0, unit: "N·m", explain: "τ = I·α = 2 × 3 = 6 N·m." },
    { type: "num", q: "Two children are on a seesaw: one of 30 kg sits 2 m from the pivot. How far from the pivot must a 20 kg child sit to balance?", answer: 3, tol: 0, unit: "m", explain: "30·2 = 20·d ⟹ d = 3 m." },
    { type: "num", q: "A uniform disc of 6 kg and radius 0.2 m rotates about its axis. Calculate its moment of inertia.", answer: 0.12, tol: 0.001, unit: "kg·m²", explain: "I = ½·6·0.04 = 0.12 kg·m²." },
    { type: "num", q: "A body has I = 0.5 kg·m² and ω = 8 rad/s. What is its rotational kinetic energy?", answer: 16, tol: 0, unit: "J", explain: "K = ½·I·ω² = ½·0.5·64 = 16 J." },
    { type: "mc", q: "When the resultant torque of the external forces is zero, which quantity is conserved?", options: ["Angular velocity", "Moment of inertia", "Angular momentum", "Kinetic energy"], answer: 2, explain: "If τ_net = 0 then L = I·ω stays constant." }
  ],
  d: [
    { type: "num", q: "A solid sphere of 2 kg and radius 0.1 m rotates about a diameter. Calculate I.", answer: 0.008, tol: 0.0005, unit: "kg·m²", explain: "I = 2/5·M·R² = 0.4 × 2 × 0.01 = 0.008 kg·m²." },
    { type: "num", q: "A uniform rod of 3 kg and length 2 m rotates about an axis through one end, perpendicular to the rod. Calculate I.", answer: 4, tol: 0.01, unit: "kg·m²", explain: "I = 1/3·M·L² = 1/3 × 3 × 4 = 4 kg·m²." },
    { type: "num", q: "A disc with a moment of inertia of 1.0 kg·m² rotates at 4 rad/s. A ring falls onto it and sticks, bringing the total I to 2.0 kg·m². What is the new angular velocity?", answer: 2, tol: 0, unit: "rad/s", explain: "Conservation of L: 1.0·4 = 2.0·ω' ⟹ ω' = 2 rad/s." },
    { type: "tf", q: "In a pirouette, when the skater pulls her arms in, her rotational kinetic energy increases.", answer: true, explain: "L is constant and ω grows as 1/I, so K = L²/(2I) increases: the work is done by her muscles." },
    { type: "mc", q: "Why does a ring roll down a slope more slowly than a solid sphere (same mass and radius)?", options: ["It has more friction", "It has a greater mass", "It has a larger I and converts more energy into rotation", "It starts from higher up"], answer: 2, explain: "For the ring I/(MR²) = 1, for the sphere 2/5: more energy goes into rotation, less into translation." }
  ]
});
