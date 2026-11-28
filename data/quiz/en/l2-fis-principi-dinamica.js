QBANK("en", "l2-fis-principi-dinamica", {
  f: [
    { type: "mc", q: "Which law says that a body with no forces acting on it keeps its velocity?", options: ["First", "Second", "Third"], answer: 0, explain: "It is the law of inertia." },
    { type: "tf", q: "For the same force, a heavier body accelerates less.", answer: true, explain: "a = F/m: more mass, less acceleration." },
    { type: "num", q: "What force is needed to give a 5 kg mass an acceleration of 2 m/s²?", answer: 10, tol: 0.1, unit: "N", explain: "F = m·a = 5 · 2 = 10 N." },
    { type: "text", q: "What is the name of a body's tendency to keep its state of motion?", answer: ["inertia"], explain: "It is called inertia." },
    { type: "tf", q: "If you push a wall, the wall pushes you with the same force.", answer: true, explain: "Third law: action and reaction are equal in magnitude." }
  ],
  m: [
    { type: "num", q: "A 4 kg trolley has an acceleration of 3 m/s². What is the resultant force?", answer: 12, tol: 0.1, unit: "N", explain: "F = 4 · 3 = 12 N." },
    { type: "mc", q: "A car brakes suddenly: the passengers are thrown forwards because...", options: ["A force pushes them forwards", "Due to inertia they tend to keep their velocity", "The air pushes them", "Their weight increases"], answer: 1, explain: "No forward force acts on the body: it tends to keep the velocity it had." },
    { type: "num", q: "What is the acceleration of an 8 kg body under a resultant force of 20 N?", answer: 2.5, tol: 0.05, unit: "m/s²", explain: "a = 20/8 = 2.5 m/s²." },
    { type: "mc", q: "A 60 kg person is in a stationary lift (g = 10 m/s²): what is the normal force?", options: ["60 N", "600 N", "6 N", "0 N"], answer: 1, explain: "N = m·g = 60 · 10 = 600 N." },
    { type: "tf", q: "On the Moon an astronaut's mass is smaller than on Earth.", answer: false, explain: "Mass does not change; weight does, because the Moon's g is about one sixth of Earth's." }
  ],
  d: [
    { type: "num", q: "Two perpendicular forces of 6 N and 8 N act on a 2 kg body. Calculate its acceleration.", answer: 5, tol: 0.05, unit: "m/s²", explain: "Resultant √(36 + 64) = 10 N; a = 10/2 = 5 m/s²." },
    { type: "num", q: "A 1000 kg rocket has a thrust of 15000 N (g = 10 m/s²). What is its upward acceleration?", answer: 5, tol: 0.05, unit: "m/s²", explain: "Resultant = 15000 − 10000 = 5000 N; a = 5000/1000 = 5 m/s²." },
    { type: "num", q: "A lift is going up but slowing down with a = 2 m/s² downwards. What normal force acts on a 70 kg person (g = 10 m/s²)?", answer: 560, tol: 1, unit: "N", explain: "N = m(g − a) = 70 · 8 = 560 N." },
    { type: "mc", q: "Two skaters at rest push each other apart. The first has a mass of 40 kg, the second 60 kg. Who gains more speed?", options: ["The lighter one", "The heavier one", "Both the same", "Neither"], answer: 0, explain: "The forces are equal; a = F/m is greater for the smaller mass (m₁v₁ = m₂v₂)." },
    { type: "tf", q: "A body can have zero velocity at one instant and non-zero acceleration.", answer: true, explain: "Example: a stone thrown upwards has v = 0 at the top but a = g." }
  ]
});
