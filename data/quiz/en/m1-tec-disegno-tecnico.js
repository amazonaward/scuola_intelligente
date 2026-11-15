QBANK("en", "m1-tec-disegno-tecnico", {
  "f": [
    {
      "type": "mc",
      "q": "Which tool is used to measure angles in degrees?",
      "options": [
        "The compass",
        "The protractor",
        "The ruler"
      ],
      "answer": 1,
      "explain": "The protractor is a semicircle marked from 0° to 180°."
    },
    {
      "type": "tf",
      "q": "Scale 1:1 means the drawing is the same size as the real object.",
      "answer": true,
      "explain": "In scale 1:1, 1 cm on the paper is 1 cm in real life: it is the real-size scale."
    },
    {
      "type": "mc",
      "q": "What is the box in the bottom right with name, title and scale called?",
      "options": [
        "The dimension",
        "The border frame",
        "The title block"
      ],
      "answer": 2,
      "explain": "The title block (cartiglio) contains name, class, date, title and scale."
    },
    {
      "type": "num",
      "q": "How many millimetres is the long side of an A3 sheet?",
      "answer": 420,
      "unit": "mm",
      "explain": "A3 = 297 × 420 mm, so the long side is 420 mm."
    },
    {
      "type": "text",
      "q": "What is the tool used to draw circles and arcs called?",
      "answer": [
        "compass",
        "the compass",
        "compasses",
        "a compass",
        "pair of compasses"
      ],
      "explain": "The compass draws circles and arcs and transfers measurements."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "A 3 m long wall is drawn in scale 1:20. How many cm long is it on the paper?",
      "answer": 15,
      "unit": "cm",
      "explain": "3 m = 300 cm; 300 : 20 = 15 cm."
    },
    {
      "type": "mc",
      "q": "An ant 6 mm long is drawn in scale 10:1. How long is it in the drawing?",
      "options": [
        "6 mm",
        "60 mm",
        "0.6 mm"
      ],
      "answer": 1,
      "explain": "Enlargement scale: 6 × 10 = 60 mm."
    },
    {
      "type": "tf",
      "q": "Dimension lines are drawn with a thin continuous line.",
      "answer": true,
      "explain": "Dimensions and reference lines use the thin continuous line."
    },
    {
      "type": "order",
      "q": "Put the steps for constructing the bisector of an angle in order.",
      "items": [
        "Place the compass on vertex V and draw an arc cutting both sides",
        "Place it on the first intersection point and draw an arc inside the angle",
        "With the same opening, place it on the second point and cross the arc at P",
        "Join V and P"
      ],
      "explain": "First the arc from the vertex, then the two arcs crossing at P, finally the line from V to P."
    },
    {
      "type": "num",
      "q": "How many A4 sheets are needed to cover exactly one A2 sheet?",
      "answer": 4,
      "explain": "Each size is half of the previous one: A2 = 2 × A3 = 4 × A4."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "A rectangular garden of 12 m × 8 m is drawn in scale 1:200. What is the area of the rectangle on the paper, in cm²?",
      "answer": 24,
      "unit": "cm²",
      "explain": "12 m = 1200 cm → 1200 : 200 = 6 cm; 8 m = 800 cm → 800 : 200 = 4 cm. Area = 6 × 4 = 24 cm²."
    },
    {
      "type": "mc",
      "q": "A 3 mm part is drawn 12 mm long. Which scale was used?",
      "options": [
        "1:4",
        "4:1",
        "12:1"
      ],
      "answer": 1,
      "explain": "12 : 3 = 4: the drawing is 4 times bigger, so the enlargement scale is 4:1."
    },
    {
      "type": "tf",
      "q": "Giulia draws a 2 m high door in scale 1:10 and writes 200 on the dimension. She did it correctly.",
      "answer": false,
      "explain": "This is wrong: the dimension always shows the real size in millimetres, so 2000, even if the drawing is to scale."
    },
    {
      "type": "order",
      "q": "Put the steps for drawing a regular hexagon with a compass in order.",
      "items": [
        "Draw a circle",
        "With the same opening (the radius) place the compass on a point of the circle and mark an arc",
        "Repeat from point to point until you have 6 points",
        "Join the 6 points with a ruler"
      ],
      "explain": "The side of the hexagon equals the radius: you step the radius 6 times and then join the points."
    },
    {
      "type": "mc",
      "q": "Why must the compass opening be greater than half of AB when constructing the perpendicular bisector of AB?",
      "options": [
        "To make the drawing bigger",
        "Because the compass point gets damaged",
        "Otherwise the arcs drawn from A and from B would not cross"
      ],
      "answer": 2,
      "explain": "If the opening were smaller than half of AB, the two arcs would not meet and you could not find the points to draw the bisector."
    }
  ]
});
