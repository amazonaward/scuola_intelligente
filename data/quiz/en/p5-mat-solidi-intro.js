QBANK("en", "p5-mat-solidi-intro", {
  "f": [
    {
      "type": "mc",
      "q": "Which solid has two circular bases?",
      "options": [
        "Cone",
        "Sphere",
        "Cylinder"
      ],
      "answer": 2,
      "explain": "The cylinder has two circles as bases; the cone has only one and the sphere has none."
    },
    {
      "type": "tf",
      "q": "A solid of revolution has at least one curved surface.",
      "answer": true,
      "explain": "Cylinder, cone and sphere have curved surfaces: that is why they can roll."
    },
    {
      "type": "num",
      "q": "How many faces does a tetrahedron have?",
      "answer": 4,
      "explain": "The tetrahedron is a pyramid with a triangular base: 1 base + 3 side faces = 4 faces."
    },
    {
      "type": "mc",
      "q": "What are the «corners» of a polyhedron, where several edges meet, called?",
      "options": [
        "Vertices",
        "Faces",
        "Bases"
      ],
      "answer": 0,
      "explain": "Vertices are the points where edges meet."
    },
    {
      "type": "text",
      "q": "Which solid has the shape of a tin can of tomatoes?",
      "answer": [
        "cylinder",
        "a cylinder",
        "the cylinder"
      ],
      "explain": "The can has two circular bases and a curved side: it is a cylinder."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "A box is 6 cubes long, 2 wide and 4 high. How many cubes does it hold?",
      "answer": 48,
      "unit": "cubes",
      "explain": "One layer: 6 × 2 = 12 cubes. There are 4 layers: 12 × 4 = 48."
    },
    {
      "type": "mc",
      "q": "How many faces does a prism with a hexagonal base have?",
      "options": [
        "6",
        "8",
        "12"
      ],
      "answer": 1,
      "explain": "It has 2 hexagonal bases and 6 rectangular side faces: 2 + 6 = 8 (that is n + 2 with n = 6)."
    },
    {
      "type": "tf",
      "q": "A pyramid with a pentagonal base has 6 faces.",
      "answer": true,
      "explain": "1 base + 5 triangular side faces = 6 faces (n + 1 with n = 5)."
    },
    {
      "type": "num",
      "q": "How many edges does a triangular prism have?",
      "answer": 9,
      "explain": "3 edges on the top base + 3 on the bottom base + 3 vertical ones = 9."
    },
    {
      "type": "mc",
      "q": "The net of a cone is made of…",
      "options": [
        "a circular sector and a circle",
        "two circles and a rectangle",
        "six equal squares"
      ],
      "answer": 0,
      "explain": "The «fan» (circular sector) is the side, the circle is the base. Two circles and a rectangle make the net of a cylinder."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "A polyhedron has 7 faces and 10 vertices. Using Euler's formula (faces + vertices − edges = 2), how many edges does it have?",
      "answer": 15,
      "explain": "7 + 10 = 17; 17 − edges = 2, so edges = 17 − 2 = 15 (it is a pentagonal prism)."
    },
    {
      "type": "mc",
      "q": "A prism and a pyramid have the same hexagonal base. How many more vertices does the prism have?",
      "options": [
        "3",
        "5",
        "6"
      ],
      "answer": 1,
      "explain": "The prism has 6 + 6 = 12 vertices, the pyramid 6 + 1 = 7. The difference is 12 − 7 = 5."
    },
    {
      "type": "tf",
      "q": "A cube and a tetrahedron have the same number of edges.",
      "answer": false,
      "explain": "The cube has 12 edges, the tetrahedron only 6: the statement is false."
    },
    {
      "type": "num",
      "q": "A full box holds 60 cubes. It is 5 cubes long and 4 wide. How many cubes high is it?",
      "answer": 3,
      "unit": "cubes",
      "explain": "One layer has 5 × 4 = 20 cubes. The number of layers is 60 ÷ 20 = 3."
    },
    {
      "type": "order",
      "q": "Put these polyhedra in order from the fewest edges to the most edges.",
      "items": [
        "Tetrahedron (6 edges)",
        "Square-based pyramid (8 edges)",
        "Cube (12 edges)",
        "Hexagonal prism (18 edges)"
      ],
      "explain": "The hexagonal prism has 6 + 6 + 6 = 18 edges, the cube 12, the square pyramid 4 + 4 = 8, the tetrahedron 6."
    }
  ]
});
