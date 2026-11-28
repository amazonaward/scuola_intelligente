QBANK("en", "l2-fis-moto-accelerato", {
  "f": [
    { "type": "num", "q": "A body goes from 0 to 20 m/s in 4 s. What is its average acceleration?", "answer": 5, "unit": "m/s²", "explain": "20 / 4 = 5 m/s²." },
    { "type": "mc", "q": "What does the slope of the velocity-time graph indicate?", "options": ["The position", "The acceleration", "The displacement"], "answer": 1, "explain": "Slope = Δv / Δt = acceleration." },
    { "type": "num", "q": "A body starts from rest with a = 2 m/s². What is its velocity after 10 s?", "answer": 20, "unit": "m/s", "explain": "v = a t = 2 · 10 = 20 m/s." },
    { "type": "tf", "q": "In a vacuum all bodies in free fall have the same acceleration.", "answer": true, "explain": "That is Galileo's result: g ≈ 9.8 m/s², independent of mass." },
    { "type": "num", "q": "A car has a = 3 m/s² and starts from rest. How many metres does it cover in 4 s?", "answer": 24, "unit": "m", "explain": "s = ½ · 3 · 16 = 24 m." }
  ],
  "m": [
    { "type": "num", "q": "A ball falls from rest for 2 s (g = 9.8 m/s²). What is its final velocity?", "answer": 19.6, "tol": 0.1, "unit": "m/s", "explain": "v = g t = 9.8 · 2 = 19.6 m/s." },
    { "type": "num", "q": "A car at 15 m/s accelerates at 2 m/s² for 5 s. What velocity does it reach?", "answer": 25, "unit": "m/s", "explain": "v = 15 + 2 · 5 = 25 m/s." },
    { "type": "mc", "q": "v = +8 m/s and a = −2 m/s². What is the body doing?", "options": ["Speeding up", "Slowing down", "Moving at constant velocity"], "answer": 1, "explain": "v and a have opposite signs: the magnitude of the velocity decreases." },
    { "type": "num", "q": "A car at 10 m/s brakes with a = 2.5 m/s². How many metres does it travel before stopping?", "answer": 20, "unit": "m", "explain": "s = v₀² / (2a) = 100 / 5 = 20 m." },
    { "type": "tf", "q": "If the initial speed when braking triples, the stopping distance becomes 9 times as long.", "answer": true, "explain": "The distance is proportional to v₀²: 3² = 9." }
  ],
  "d": [
    { "type": "num", "q": "A car goes from 10 to 30 m/s over a distance of 200 m with constant acceleration. What is the acceleration?", "answer": 2, "unit": "m/s²", "explain": "v² = v₀² + 2 a s: 900 = 100 + 400 a, a = 2 m/s²." },
    { "type": "num", "q": "A stone is thrown upwards at 14.7 m/s (g = 9.8 m/s²). After how many seconds does it reach the highest point?", "answer": 1.5, "tol": 0.01, "unit": "s", "explain": "t = v₀ / g = 14.7 / 9.8 = 1.5 s." },
    { "type": "num", "q": "A stone dropped from a bridge hits the water after 3 s (g = 9.8 m/s²). How high is the bridge?", "answer": 44.1, "tol": 0.1, "unit": "m", "explain": "h = ½ · 9.8 · 9 = 44.1 m." },
    { "type": "num", "q": "A ball starts from rest and covers 2 m in the first second. How many metres does it cover during the fourth second (not in total)?", "answer": 14, "unit": "m", "explain": "The distances per second are in the ratio 1 : 3 : 5 : 7: 2 · 7 = 14 m." },
    { "type": "mc", "q": "On a v-t graph a straight line goes from (0 s, 4 m/s) to (5 s, 14 m/s). The distance covered in 5 s is…", "options": ["45 m", "70 m", "20 m"], "answer": 0, "explain": "Area of the trapezium: (4 + 14) / 2 · 5 = 45 m." }
  ]
});
