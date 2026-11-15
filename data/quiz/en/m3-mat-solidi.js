QBANK("en", "m3-mat-solidi", {
 "f": [
  {
   "type": "mc",
   "q": "Which solid has 6 identical square faces?",
   "options": [
    "sfera",
    "cubo",
    "cono"
   ],
   "answer": 1,
   "explain": "The cube has 6 identical square faces. The sphere and the cone are solids of revolution."
  },
  {
   "type": "tf",
   "q": "The sphere is a polyhedron.",
   "answer": false,
   "explain": "False: a polyhedron has only flat faces. The sphere has a curved surface, so it is a solid of revolution."
  },
  {
   "type": "num",
   "q": "How many faces does a pyramid with a square base have?",
   "answer": 5,
   "explain": "It has 1 square base and 4 triangular lateral faces: 5 faces in all."
  },
  {
   "type": "mc",
   "q": "A soft-drink can has the shape of a…",
   "options": [
    "cono",
    "prisma",
    "cilindro"
   ],
   "answer": 2,
   "explain": "A can has two equal circular bases and a curved lateral surface: it is a cylinder."
  },
  {
   "type": "text",
   "q": "What is the solid called that you get by rotating a right triangle around one of its legs?",
   "answer": [
    "cone",
    "a cone",
    "the cone"
   ],
   "explain": "Rotating a right triangle around one of its legs produces a cone."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "A cylindrical jar has a radius of 3 cm and a height of 5 cm. What is its volume? (π = 3.14)",
   "answer": 141.3,
   "tol": 0.05,
   "unit": "cm³",
   "explain": "V = π × r² × h = 3.14 × 3² × 5 = 3.14 × 45 = 141.3 cm³."
  },
  {
   "type": "num",
   "q": "An ice-cream cone has a base radius of 3 cm and a height of 4 cm. What is its volume? (π = 3.14)",
   "answer": 37.68,
   "tol": 0.05,
   "unit": "cm³",
   "explain": "V = (π × r² × h) ÷ 3 = (3.14 × 9 × 4) ÷ 3 = 113.04 ÷ 3 = 37.68 cm³."
  },
  {
   "type": "num",
   "q": "A swimming pool is a cuboid measuring 10 m × 5 m × 2 m. How many litres of water does it hold when full?",
   "answer": 100000,
   "unit": "litres",
   "explain": "V = 10 × 5 × 2 = 100 m³. Since 1 m³ = 1000 litres, the pool holds 100 × 1000 = 100 000 litres."
  },
  {
   "type": "mc",
   "q": "The total surface area of a cube is 54 cm². How long is its edge?",
   "options": [
    "9 cm",
    "3 cm",
    "6 cm"
   ],
   "answer": 1,
   "explain": "St = 6 × s² = 54, so s² = 54 ÷ 6 = 9 and s = √9 = 3 cm."
  },
  {
   "type": "tf",
   "q": "If you double the edge of a cube, its volume doubles.",
   "answer": false,
   "explain": "False: V = s³. With edge 2s we get (2s)³ = 8s³, so the volume becomes 8 times as large."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "A cylindrical container with radius 5 cm, filled with water to a height of 12 cm, is poured into a tray with a square base of side 10 cm. How high does the water rise in the tray? (π = 3.14)",
   "answer": 9.42,
   "tol": 0.02,
   "unit": "cm",
   "explain": "Volume of water = 3.14 × 5² × 12 = 942 cm³. Base area of the tray = 10 × 10 = 100 cm². Height = 942 ÷ 100 = 9.42 cm."
  },
  {
   "type": "num",
   "q": "A block of wood is a cuboid of 20 cm × 10 cm × 5 cm with a specific weight of 0.6 g/cm³. How much does it weigh?",
   "answer": 600,
   "unit": "g",
   "explain": "Volume = 20 × 10 × 5 = 1000 cm³. Weight = volume × specific weight = 1000 × 0.6 = 600 g."
  },
  {
   "type": "mc",
   "q": "A cylinder has a radius of 3 cm and a height of 10 cm. What is the area of its lateral surface? (π = 3.14)",
   "options": [
    "94,2 cm²",
    "188,4 cm²",
    "282,6 cm²"
   ],
   "answer": 1,
   "explain": "Lateral surface = 2 × π × r × h = 2 × 3.14 × 3 × 10 = 188.4 cm². It is the area of the rectangle you get by unrolling the surface."
  },
  {
   "type": "tf",
   "q": "For the volume of a cylinder with r = 4 cm and h = 5 cm, Mark calculates 3.14 × 4 × 5 = 62.8 cm³. His calculation is correct.",
   "answer": false,
   "explain": "False: the radius must be squared in the formula. V = 3.14 × 4² × 5 = 3.14 × 80 = 251.2 cm³."
  },
  {
   "type": "order",
   "q": "Order these solids from the smallest to the largest volume.",
   "items": [
    "cube with edge 3 cm",
    "cuboid 2 cm × 3 cm × 5 cm",
    "cylinder with radius 2 cm and height 3 cm (π = 3.14)",
    "prism with base area 10 cm² and height 4 cm",
    "cube with edge 4 cm"
   ],
   "explain": "Volumes: 27 cm³; 30 cm³; 3.14 × 4 × 3 = 37.68 cm³; 10 × 4 = 40 cm³; 64 cm³."
  }
 ]
});
