QBANK("en", "l2-mat-circonferenza-poligoni", {
  "f": [
    { "type": "mc", "q": "What is the chord through the centre of a circle called?", "options": ["Radius", "Diameter", "Arc"], "answer": 1, "explain": "The diameter is the longest chord and passes through the centre; it is twice the radius." },
    { "type": "num", "q": "A circle has a radius of 7 cm. What is its diameter?", "answer": 14, "unit": "cm", "explain": "d = 2r = 2 × 7 = 14 cm." },
    { "type": "tf", "q": "A line tangent to a circle has only one point in common with it.", "answer": true, "explain": "By definition the tangent touches the circle at only one point." },
    { "type": "num", "q": "An angle at the centre measures 90°. What is the angle at the circumference subtended by the same arc?", "answer": 45, "unit": "°", "explain": "The angle at the circumference is half: 90° / 2 = 45°." },
    { "type": "mc", "q": "A polygon with all its vertices on the circle is called…", "options": ["Circumscribed", "Inscribed", "Regular"], "answer": 1, "explain": "Inscribed = vertices on the circle; circumscribed = sides tangent to it." }
  ],
  "m": [
    { "type": "num", "q": "From an external point P, the tangent PA is drawn to a circle of radius 3 cm. If OP = 5 cm, how long is PA?", "answer": 4, "unit": "cm", "explain": "OAP is right-angled at A: PA = √(5² − 3²) = √16 = 4 cm." },
    { "type": "tf", "q": "A triangle inscribed in a semicircle (with the diameter as one side) is right-angled.", "answer": true, "explain": "The angle opposite the diameter is subtended by a semicircle, so it measures 90°." },
    { "type": "num", "q": "An inscribed quadrilateral has an angle of 83°. What is the opposite angle?", "answer": 97, "unit": "°", "explain": "Opposite angles are supplementary: 180° − 83° = 97°." },
    { "type": "mc", "q": "Which special point of a triangle is the centre of the inscribed circle?", "options": ["The circumcentre", "The incentre", "The orthocentre"], "answer": 1, "explain": "The incentre is where the angle bisectors meet and it is equidistant from the three sides." },
    { "type": "num", "q": "A regular hexagon has radius 5 cm. What is its perimeter?", "answer": 30, "unit": "cm", "explain": "The side of a regular hexagon equals the radius: 6 × 5 = 30 cm." }
  ],
  "d": [
    { "type": "num", "q": "A quadrilateral circumscribed about a circle has three consecutive sides of 11 cm, 6 cm and 13 cm. How long is the fourth side?", "answer": 18, "unit": "cm", "explain": "By Pitot's theorem, AB + CD = BC + DA: 11 + 13 = 6 + DA, so DA = 18 cm." },
    { "type": "mc", "q": "A rhombus that is not a square is…", "options": ["Only inscribable", "Only circumscribable", "Neither inscribable nor circumscribable"], "answer": 1, "explain": "Its opposite sides have equal sums (circumscribable), but its opposite angles are equal and not supplementary unless they are right angles." },
    { "type": "num", "q": "A regular polygon has area 150 cm² and apothem 5 cm. What is its perimeter?", "answer": 60, "unit": "cm", "explain": "A = p × a / 2, so p = 2A / a = 300 / 5 = 60 cm." },
    { "type": "num", "q": "In triangle ABC the angle at C is 62° and the triangle is inscribed in a circle with centre O. What is the central angle AOB subtended by the same arc AB (the one not containing C)?", "answer": 124, "unit": "°", "explain": "The angle at the centre is twice the angle at the circumference: 2 × 62° = 124°." },
    { "type": "tf", "q": "All angles at the circumference subtended by the same arc are congruent.", "answer": true, "explain": "Each one is half of the same angle at the centre, so they are all equal." }
  ]
});
