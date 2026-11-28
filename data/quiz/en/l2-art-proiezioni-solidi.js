QBANK("en", "l2-art-proiezioni-solidi", {
 "f": [
  { "type": "mc", "q": "What shape is the plan of a right cylinder resting on the HP?", "options": ["A circle", "A rectangle", "A triangle"], "answer": 0, "explain": "The base is a circle parallel to the HP." },
  { "type": "tf", "q": "Hidden edges are drawn with a dashed line.", "answer": true, "explain": "It is the convention in technical drawing." },
  { "type": "mc", "q": "What shape is the elevation of a right cone?", "options": ["An isosceles triangle", "A circle", "A rectangle"], "answer": 0, "explain": "Base of length 2r and height h." },
  { "type": "text", "q": "What is the shape obtained by cutting a solid with a plane called?", "answer": ["section", "a section", "the section", "cross-section", "cross section"], "explain": "The section." },
  { "type": "mc", "q": "Which solid is projected as a circle in every view?", "options": ["Sphere", "Cube", "Cone"], "answer": 0, "explain": "The sphere is symmetrical in every direction." }
 ],
 "m": [
  { "type": "mc", "q": "What shape is the section of a cylinder cut by an oblique plane (not parallel to the base)?", "options": ["Ellipse", "Square", "Triangle"], "answer": 0, "explain": "An oblique plane gives an ellipse." },
  { "type": "num", "q": "How many different nets does a cube have?", "answer": 11, "tol": 0, "explain": "Eleven." },
  { "type": "tf", "q": "The net of the lateral surface of a right cylinder is a rectangle.", "answer": true, "explain": "With sides 2πr and h." },
  { "type": "num", "q": "A cone has r = 2 and a = 8. How many degrees is the angle of the sector?", "answer": 90, "tol": 0, "unit": "°", "explain": "360 × 2 / 8 = 90°." },
  { "type": "mc", "q": "Which cutting plane gives a circle in a cone?", "options": ["Parallel to the base", "Parallel to a generator", "Parallel to the axis"], "answer": 0, "explain": "Parallel to the base." }
 ],
 "d": [
  { "type": "mc", "q": "A cone has r = 3 and slant height 5. What is its height?", "options": ["4", "2", "8"], "answer": 0, "explain": "h = √(5² − 3²) = √16 = 4." },
  { "type": "num", "q": "Lateral surface area of a cone with r = 3 and a = 5 (in units of π)?", "answer": 15, "tol": 0, "explain": "S = π · r · a = 15π." },
  { "type": "tf", "q": "A plane cutting a cube through the midpoints of six edges gives a regular hexagon.", "answer": true, "explain": "It is a famous section of the cube." },
  { "type": "mc", "q": "Why is a sphere not developable?", "options": ["It cannot be laid flat on a plane without distortion", "It has no surface", "It is too small"], "answer": 0, "explain": "Its Gaussian curvature is positive (Gauss)." },
  { "type": "order", "q": "Put the steps for drawing a solid in order.", "items": ["Draw the ground line", "Draw the plan in true shape", "Draw the vertical projection lines", "Draw the elevation with the heights"], "explain": "From the GL to the views." }
 ]
});
