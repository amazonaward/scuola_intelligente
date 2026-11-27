QBANK("en", "l1-art-costruzioni-geometriche", {
 f: [
  { type: "mc", q: "Which tools does classical Euclidean geometry allow for constructions?", options: ["Unmarked straightedge and compass", "Graduated ruler and protractor", "Set squares only"], answer: 0, explain: "Euclid allows only the line (straightedge) and the circle (compass)." },
  { type: "num", q: "How many degrees does the bisector of a 60° angle make with each arm?", answer: 30, tol: 0, unit: "°", explain: "60° ÷ 2 = 30°." },
  { type: "tf", q: "Two lines perpendicular to the same line are parallel to each other.", answer: true, explain: "They form equal corresponding angles (90°), so they are parallel." },
  { type: "mc", q: "How many sides does a hexagon have?", options: ["5", "6", "8"], answer: 1, explain: "Hexa- means six." },
  { type: "text", q: "What is the line that touches a circle at a single point called?", answer: ["tangent", "a tangent", "the tangent"], explain: "It is the tangent, perpendicular to the radius at the point of contact." }
 ],
 m: [
  { type: "mc", q: "The side of a square inscribed in a circle of radius r is…", options: ["r", "r√2", "2r"], answer: 1, explain: "The diagonal of the square is the diameter 2r, so the side is 2r/√2 = r√2." },
  { type: "num", q: "A regular hexagon is inscribed in a circle of radius 7 cm. What is its perimeter?", answer: 42, tol: 0, unit: "cm", explain: "The side equals the radius: 6 × 7 = 42 cm." },
  { type: "mc", q: "What shape is ACBD in the perpendicular bisector construction, with AC = BC = AD = BD?", options: ["A rhombus", "A trapezium", "A non-square rectangle"], answer: 0, explain: "Four equal sides: it is a rhombus, with perpendicular diagonals." },
  { type: "tf", q: "The regular 17-sided polygon can be constructed with straightedge and compass.", answer: true, explain: "Gauss proved it in 1796: 17 is a Fermat prime." },
  { type: "order", q: "Put the steps for dividing AB into 3 equal parts in order.", items: ["Draw a ray from A", "Mark 3 equal segments on the ray", "Join the last point to B", "Draw the parallels from points 1 and 2"], explain: "This is the construction based on the intercept (Thales') theorem." }
 ],
 d: [
  { type: "mc", q: "Which of these three problems can NOT be solved with straightedge and compass?", options: ["Bisecting an angle", "Trisecting any angle", "Constructing the perpendicular bisector of a segment"], answer: 1, explain: "Trisecting an arbitrary angle is impossible with straightedge and compass alone." },
  { type: "num", q: "A blending arc has a radius of 5 cm and joins two perpendicular lines. How far is the centre of the arc from the vertex of the angle? (round to a whole number: 5√2)", answer: 7, tol: 0.1, unit: "cm", explain: "The centre is 5 cm from each line: its distance from the vertex is 5√2 ≈ 7.07 cm." },
  { type: "tf", q: "In an external blend between a line and a circle of radius R, the centre of the arc of radius r is R + r from the centre of the circle.", answer: true, explain: "Two externally tangent circles have their centres R + r apart." },
  { type: "mc", q: "The ratio of the diagonal to the side of a regular pentagon is…", options: ["√2", "φ = (1+√5)/2", "√3"], answer: 1, explain: "It is the golden ratio, about 1.618." },
  { type: "text", q: "What do we call the set of all points that satisfy the same geometric property (for example the points equidistant from two given points)?", answer: ["locus", "a locus", "the locus", "geometric locus"], explain: "It is a locus: the perpendicular bisector of a segment is the locus of points equidistant from its endpoints." }
 ]
});
