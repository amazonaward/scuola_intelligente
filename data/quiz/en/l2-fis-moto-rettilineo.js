QBANK("en", "l2-fis-moto-rettilineo", {
  "f": [
    { "type": "num", "q": "A car covers 150 km in 2 hours. What is its average speed?", "answer": 75, "unit": "km/h", "explain": "150 / 2 = 75 km/h." },
    { "type": "mc", "q": "What is the SI unit of velocity?", "options": ["km/h", "m/s", "m²/s"], "answer": 1, "explain": "Metre per second (m/s)." },
    { "type": "num", "q": "Convert 36 km/h into m/s.", "answer": 10, "unit": "m/s", "explain": "36 / 3.6 = 10 m/s." },
    { "type": "tf", "q": "In uniform linear motion the velocity is constant.", "answer": true, "explain": "That is the definition of uniform motion." },
    { "type": "num", "q": "A body moves at 4 m/s for 10 s starting from the origin. How many metres has it covered?", "answer": 40, "unit": "m", "explain": "s = v · t = 4 · 10 = 40 m." }
  ],
  "m": [
    { "type": "num", "q": "A cyclist rides at 18 km/h. How many metres does she cover in 20 seconds?", "answer": 100, "unit": "m", "explain": "18 km/h = 5 m/s; 5 · 20 = 100 m." },
    { "type": "num", "q": "A body has equation of motion s = 20 + 3t (SI). Where is it after 8 s?", "answer": 44, "unit": "m", "explain": "s = 20 + 3 · 8 = 44 m." },
    { "type": "tf", "q": "A body that moves from A to B and then returns to A has zero displacement.", "answer": true, "explain": "Displacement is the difference between final and initial position: they coincide." },
    { "type": "mc", "q": "A position-time graph is a falling straight line. The body…", "options": ["Moves in the negative direction", "Is accelerating", "Is at rest"], "answer": 0, "explain": "A negative slope means a negative velocity." },
    { "type": "num", "q": "Light takes about 1.3 s to travel from the Moon to the Earth. With c = 300 000 km/s, how far away is the Moon?", "answer": 390000, "tol": 5000, "unit": "km", "explain": "d = c t = 300 000 km/s · 1.3 s ≈ 390 000 km." }
  ],
  "d": [
    { "type": "num", "q": "Two trains are 360 km apart and travel towards each other at 100 km/h and 80 km/h. After how many hours do they meet?", "answer": 2, "unit": "h", "explain": "Closing speed 180 km/h: 360 / 180 = 2 h." },
    { "type": "num", "q": "A car at 25 m/s is chasing a lorry at 20 m/s that is 150 m ahead. How many seconds does it take to catch up?", "answer": 30, "unit": "s", "explain": "Relative velocity 5 m/s: 150 / 5 = 30 s." },
    { "type": "num", "q": "You travel at 30 km/h on the way there and at 60 km/h on the way back along the same route. What is the overall average speed?", "answer": 40, "unit": "km/h", "explain": "With a 60 km route: 2 h + 1 h = 3 h for 120 km → 40 km/h (harmonic mean)." },
    { "type": "mc", "q": "An observer on a train moving at 30 m/s throws a ball forward at 5 m/s relative to the train. Relative to the track, the ball's velocity is…", "options": ["25 m/s", "35 m/s", "5 m/s"], "answer": 1, "explain": "In Galilean relativity velocities add up: 30 + 5 = 35 m/s." },
    { "type": "num", "q": "The area under the v-t graph is a rectangle with base 8 s and height 12 m/s. What is the displacement?", "answer": 96, "unit": "m", "explain": "Area = 12 · 8 = 96 m." }
  ]
});
