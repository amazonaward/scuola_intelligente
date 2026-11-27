QBANK("en", "l1-fis-vettori-forze", {
 "f": [
  { "type": "mc", "q": "What is the SI unit of force?", "options": ["Newton", "Joule", "Kilogram"], "answer": 0, "explain": "Force is measured in newtons (N)." },
  { "type": "tf", "q": "Mass is a vector quantity.", "answer": false, "explain": "Mass is a scalar: it only has a value." },
  { "type": "mc", "q": "Which instrument measures forces?", "options": ["Dynamometer", "Thermometer", "Stopwatch"], "answer": 0, "explain": "A dynamometer uses the extension of a spring." },
  { "type": "num", "q": "Two forces of 3 N and 5 N have the same line of action and the same sense. What is the resultant?", "answer": 8, "tol": 0, "unit": "N", "explain": "The magnitudes add up: 3 + 5 = 8 N." },
  { "type": "mc", "q": "In which direction does weight act?", "options": ["Towards the centre of the Earth", "Horizontally", "Upwards"], "answer": 0, "explain": "Weight is vertical, pointing downwards." }
 ],
 "m": [
  { "type": "num", "q": "Calculate the weight of a 12 kg body on Earth (g = 9.8 m/s²).", "answer": 117.6, "tol": 0.1, "unit": "N", "explain": "P = 12 × 9.8 = 117.6 N." },
  { "type": "num", "q": "A spring with k = 80 N/m is stretched by 0.15 m. What is the elastic force?", "answer": 12, "tol": 0.01, "unit": "N", "explain": "F = 80 × 0.15 = 12 N." },
  { "type": "num", "q": "Two perpendicular forces of 5 N and 12 N: calculate the resultant.", "answer": 13, "tol": 0, "unit": "N", "explain": "√(25 + 144) = √169 = 13 N." },
  { "type": "tf", "q": "An astronaut's weight is the same on Earth and on the Moon.", "answer": false, "explain": "On the Moon g is about 1/6: the weight is about one sixth, the mass stays the same." },
  { "type": "mc", "q": "What does the friction force oppose?", "options": ["Sliding between surfaces", "Gravity", "The stretching of a spring", "Mass"], "answer": 0, "explain": "Friction acts along the surfaces in contact and resists their relative motion." }
 ],
 "d": [
  { "type": "num", "q": "A 6 kg body in a place where g = 1.6 m/s²: what is its weight?", "answer": 9.6, "tol": 0.01, "unit": "N", "explain": "P = 6 × 1.6 = 9.6 N." },
  { "type": "num", "q": "A 10 kg block (g = 10 m/s²) is at rest on a horizontal surface with μ_s = 0.4. What is the minimum force needed to set it in motion?", "answer": 40, "tol": 0.1, "unit": "N", "explain": "N = 100 N; F_s,max = 0.4 × 100 = 40 N." },
  { "type": "mc", "q": "A spring hanging from a support stretches by 4 cm with a weight of 2 N. How much does it stretch with 6 N (within the elastic limit)?", "options": ["8 cm", "10 cm", "12 cm", "16 cm"], "answer": 2, "explain": "k = 2/0.04 = 50 N/m; Δx = 6/50 = 0.12 m = 12 cm." },
  { "type": "mc", "q": "A boat heads perpendicular to the bank at 12 m/s in a river flowing at 5 m/s. What is the magnitude of its velocity relative to the bank?", "options": ["7 m/s", "13 m/s", "17 m/s", "60 m/s"], "answer": 1, "explain": "√(12² + 5²) = √169 = 13 m/s." },
  { "type": "tf", "q": "If the vector sum of the forces on a body is zero, the magnitudes of the forces must all be zero.", "answer": false, "explain": "Equal and opposite forces, for example, have a zero resultant even though their magnitudes are not zero." }
 ]
});
