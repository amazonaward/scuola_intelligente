QBANK("en", "l2-mat-sistemi-lineari", {
 "f": [
  { "type": "num", "q": "Solve { x + y = 8 ; x − y = 2 } and give the value of x.", "answer": 5, "explain": "Adding: 2x = 10, so x = 5 (and y = 3)." },
  { "type": "tf", "q": "Every linear equation in x and y represents a line in the plane.", "answer": true, "explain": "The graph of a first-degree equation in x and y is a straight line." },
  { "type": "mc", "q": "A system with exactly one solution is called…", "options": ["consistent and independent", "inconsistent", "dependent"], "answer": 0, "explain": "Consistent and independent = exactly one solution; the lines intersect." },
  { "type": "mc", "q": "In the substitution method you solve for one unknown and…", "options": ["substitute it into the other equation", "divide by zero", "multiply by x"], "answer": 0, "explain": "The system is reduced to an equation in one unknown." },
  { "type": "num", "q": "If x = 3 and x + y = 10, what is y?", "answer": 7, "explain": "y = 10 − 3 = 7." }
 ],
 "m": [
  { "type": "mc", "q": "Solve { y = x + 1 ; 2x + y = 7 }.", "options": ["(2, 3)", "(3, 4)", "(1, 2)"], "answer": 0, "explain": "2x + x + 1 = 7 → x = 2, y = 3." },
  { "type": "num", "q": "Solve { 2x + 3y = 13 ; 2x − y = 1 } and give the value of y.", "answer": 3, "explain": "Subtracting: 4y = 12 → y = 3 (and x = 2)." },
  { "type": "mc", "q": "The system { x + y = 2 ; x + y = 5 } is…", "options": ["consistent and independent", "inconsistent", "dependent"], "answer": 1, "explain": "x + y cannot equal both 2 and 5: distinct parallel lines." },
  { "type": "num", "q": "Calculate D = a b′ − a′ b for { 4x + y = 3 ; 2x + 3y = 5 }.", "answer": 10, "explain": "D = 4·3 − 2·1 = 10." },
  { "type": "num", "q": "Two numbers add up to 30 and one is twice the other. What is the larger one?", "answer": 20, "explain": "{ x + y = 30 ; x = 2y } → 3y = 30 → y = 10, x = 20." }
 ],
 "d": [
  { "type": "mc", "q": "For which value of k is the system { x + 2y = 4 ; 3x + ky = 12 } dependent?", "options": ["k = 6", "k = 2", "k = 3"], "answer": 0, "explain": "The second equation must be three times the first: 3x + 6y = 12, so k = 6." },
  { "type": "mc", "q": "For which value of k is the system { 2x − y = 1 ; 4x − 2y = k } inconsistent?", "options": ["k = 2", "k ≠ 2", "only k = 0"], "answer": 1, "explain": "The second is 2(2x − y) = k: it coincides with the first only if k = 2; for any other k the lines are distinct and parallel." },
  { "type": "num", "q": "Cramer: solve { 2x + y = 7 ; x + 3y = 11 } and give the value of x.", "answer": 2, "explain": "D = 6 − 1 = 5; Dx = 7·3 − 11·1 = 10; x = 10/5 = 2 (and y = 3)." },
  { "type": "num", "q": "A train covers a stretch in 3 h with a tailwind and in 4 h against the wind; the distance is 120 km. What is its speed with no wind (km/h)?", "answer": 35, "explain": "x + v = 40, x − v = 30 → x = 35." },
  { "type": "tf", "q": "If D = 0 in a 2×2 system, the system cannot have exactly one solution.", "answer": true, "explain": "With D = 0 the lines have the same slope: they are parallel or coincident, never intersecting." }
 ]
});
