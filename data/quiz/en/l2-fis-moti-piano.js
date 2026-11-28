QBANK("en", "l2-fis-moti-piano", {
  f: [
    { type: "mc", q: "What is the name of the curve traced by a stone thrown into the air (without air resistance)?", options: ["Straight line", "Parabola", "Circle"], answer: 1, explain: "The combination of uniform horizontal motion and accelerated vertical motion gives a parabola." },
    { type: "tf", q: "In a throw, the horizontal and vertical motions can be studied separately.", answer: true, explain: "This is Galileo's principle of independence of motions." },
    { type: "num", q: "A point completes one revolution in 4 s. What is the frequency?", answer: 0.25, tol: 0.01, unit: "Hz", explain: "f = 1/T = 1/4 = 0.25 Hz." },
    { type: "mc", q: "What unit is frequency measured in?", options: ["Seconds", "Hertz", "Metres per second"], answer: 1, explain: "1 Hz = 1 cycle per second." },
    { type: "text", q: "What is the name of the time taken to complete one full oscillation?", answer: ["period", "the period"], explain: "It is the period T, measured in seconds." }
  ],
  m: [
    { type: "num", q: "An object is thrown horizontally off an 80 m cliff (g = 10 m/s²). How long until it hits the water?", answer: 4, tol: 0.05, unit: "s", explain: "t = √(2h/g) = √(160/10) = 4 s." },
    { type: "num", q: "With the same fall (4 s) and a horizontal velocity of 15 m/s, how far does the body move horizontally?", answer: 60, tol: 0.5, unit: "m", explain: "x = vₓ·t = 15 · 4 = 60 m." },
    { type: "mc", q: "Which pair of launch angles, at the same speed, gives the same range?", options: ["30° and 60°", "30° and 45°", "10° and 20°", "45° and 90°"], answer: 0, explain: "Complementary angles have the same sin 2θ, so the same range." },
    { type: "num", q: "A wheel of radius 0.5 m turns with a period of 2 s. Calculate the speed of a point on the rim (use π = 3.14).", answer: 1.57, tol: 0.02, unit: "m/s", explain: "v = 2πr/T = 2 · 3.14 · 0.5 / 2 = 1.57 m/s." },
    { type: "mc", q: "A stone tied to a string is swung in a circle. If the string breaks, the stone...", options: ["Moves towards the centre", "Flies off along the tangent", "Moves radially outwards", "Falls straight down at once"], answer: 1, explain: "Without a centripetal force the body continues in a straight line, in the direction of its velocity: the tangent." }
  ],
  d: [
    { type: "num", q: "A ball is kicked with v₀ = 10 m/s at 45° (g = 10 m/s²). Calculate the range.", answer: 10, tol: 0.1, unit: "m", explain: "R = v₀² sin 90°/g = 100/10 = 10 m." },
    { type: "num", q: "A satellite orbits with radius 7000 km and speed 7.5 km/s. Calculate the centripetal acceleration in m/s² (round to one decimal place).", answer: 8.0, tol: 0.1, unit: "m/s²", explain: "a = v²/r = (7500)²/(7·10⁶) ≈ 8.0 m/s²: a little less than g, because the altitude is low." },
    { type: "num", q: "A spring with k = 400 N/m holds a 1 kg mass. Calculate the period (π = 3.14).", answer: 0.31, tol: 0.01, unit: "s", explain: "T = 2π√(m/k) = 6.28 · √(1/400) = 6.28 · 0.05 = 0.314 s." },
    { type: "tf", q: "If the length of a pendulum is quadrupled, its period doubles.", answer: true, explain: "T = 2π√(L/g): with L×4, T×√4 = 2." },
    { type: "mc", q: "An object moves with simple harmonic motion with amplitude 0.2 m and angular frequency 5 rad/s. What is its maximum speed?", options: ["0.04 m/s", "1 m/s", "25 m/s", "0.4 m/s"], answer: 1, explain: "v_max = ω·A = 5 · 0.2 = 1 m/s, reached at the centre of oscillation." }
  ]
});
