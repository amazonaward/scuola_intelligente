QBANK("en", "p4-mat-poligoni", {
  "f": [
    {
      "type": "mc",
      "q": "How many sides does a pentagon have?",
      "options": [
        "4",
        "5",
        "6"
      ],
      "answer": 1,
      "explain": "Penta- means five: a pentagon has 5 sides."
    },
    {
      "type": "tf",
      "q": "An equilateral triangle has all three sides equal.",
      "answer": true,
      "explain": "Equilateral means «with equal sides»: its three angles are all 60°."
    },
    {
      "type": "text",
      "q": "What shape is a STOP sign?",
      "answer": [
        "octagon",
        "an octagon",
        "the octagon"
      ],
      "explain": "A STOP sign is an octagon: it has 8 sides."
    },
    {
      "type": "num",
      "q": "How many diagonals does a quadrilateral have?",
      "answer": 2,
      "explain": "Two pairs of non-neighbouring vertices can be joined: there are 2 diagonals."
    },
    {
      "type": "mc",
      "q": "Which triangle has all three sides different?",
      "options": [
        "equilateral",
        "isosceles",
        "scalene"
      ],
      "answer": 2,
      "explain": "The scalene has three different sides; the isosceles has two equal; the equilateral has three equal."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "An isosceles triangle has a 40° angle at the top. How big is each of the two base angles?",
      "answer": 70,
      "unit": "°",
      "explain": "The sum is 180°: 180 − 40 = 140°. The two base angles are equal: 140 : 2 = 70°."
    },
    {
      "type": "mc",
      "q": "A quadrilateral has four right angles, but neighbouring sides have different lengths. What is it?",
      "options": [
        "rectangle",
        "rhombus",
        "trapezium"
      ],
      "answer": 0,
      "explain": "The rectangle has 4 right angles and sides equal in pairs, not all equal."
    },
    {
      "type": "tf",
      "q": "A trapezium always has four equal sides.",
      "answer": false,
      "explain": "A trapezium only has one pair of parallel sides; the sides are usually different. Four equal sides belong to the rhombus and the square."
    },
    {
      "type": "num",
      "q": "How many equilateral-triangle tiles fit around one point with no gaps?",
      "answer": 6,
      "explain": "Each angle is 60° and 360° : 60° = 6."
    },
    {
      "type": "mc",
      "q": "A triangle has a 120° angle. What is it called, by its angles?",
      "options": [
        "acute-angled",
        "right-angled",
        "obtuse-angled"
      ],
      "answer": 2,
      "explain": "An angle bigger than 90° is obtuse: the triangle is obtuse-angled."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "A rhombus has two opposite angles of 70° each. How big is each of the other two angles?",
      "answer": 110,
      "unit": "°",
      "explain": "The sum is 360°. 70 + 70 = 140°; 360 − 140 = 220°. The other two angles are equal: 220 : 2 = 110°."
    },
    {
      "type": "mc",
      "q": "Why can't a floor be tiled with no gaps using only regular pentagons?",
      "options": [
        "Because pentagons have too many sides",
        "Because pentagons are concave",
        "The 108° angle does not fit a whole number of times into 360°: 3 pentagons leave a gap, 4 overlap"
      ],
      "answer": 2,
      "explain": "3 × 108° = 324° (a piece is missing) and 4 × 108° = 432° (too much). To fill 360° the angle must fit a whole number of times."
    },
    {
      "type": "order",
      "q": "Put the steps in order to find the third angle of a triangle with angles of 65° and 45°.",
      "items": [
        "I remember that the angles of a triangle add up to 180°",
        "I add the two known angles: 65° + 45° = 110°",
        "I subtract from 180°: 180° − 110° = 70°",
        "The third angle measures 70°"
      ],
      "explain": "First recall the rule (180°), then add the known angles, then subtract from the total."
    },
    {
      "type": "mc",
      "q": "Which statement is true?",
      "options": [
        "Every rhombus is a square",
        "Every square is a rhombus",
        "Every rectangle has four equal sides"
      ],
      "answer": 1,
      "explain": "The square has 4 equal sides, so it is also a rhombus. But a rhombus may have angles that are not right angles, and a rectangle may have different sides."
    },
    {
      "type": "num",
      "q": "From each vertex of a pentagon 2 diagonals start. How many diagonals does the pentagon have in all?",
      "answer": 5,
      "explain": "5 vertices × 2 = 10, but this counts each diagonal twice (once for each end): 10 : 2 = 5."
    }
  ]
});
