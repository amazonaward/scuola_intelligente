QBANK("en", "m1-mat-geometria-base", {
  "f": [
    {
      "type": "mc",
      "q": "Which of these geometric entities can be measured with a ruler?",
      "options": [
        "The line",
        "The ray",
        "The segment"
      ],
      "answer": 2,
      "explain": "Lines and rays are unlimited; a segment has two endpoints and therefore a length."
    },
    {
      "type": "tf",
      "q": "A right angle measures 90°.",
      "answer": true,
      "explain": "A right angle is formed by two perpendicular rays and measures 90°."
    },
    {
      "type": "mc",
      "q": "What is an angle of 180° called?",
      "options": [
        "Full angle",
        "Straight angle",
        "Right angle"
      ],
      "answer": 1,
      "explain": "The two rays lie on the same line: the angle is straight and measures 180°."
    },
    {
      "type": "num",
      "q": "How many degrees does a full angle measure?",
      "answer": 360,
      "unit": "°",
      "explain": "A full angle is one complete turn: 360°."
    },
    {
      "type": "text",
      "q": "What is the point called that divides a segment into two congruent segments?",
      "answer": [
        "midpoint",
        "the midpoint",
        "mid-point",
        "the mid-point"
      ],
      "explain": "The midpoint M of AB is such that AM ≅ MB."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "On a line the points A, B, C lie in this order. AB = 4.5 cm and AC = 11 cm. How long is BC?",
      "answer": 6.5,
      "tol": 0.01,
      "unit": "cm",
      "explain": "BC = AC − AB = 11 − 4.5 = 6.5 cm."
    },
    {
      "type": "num",
      "q": "Two angles are supplementary and one is twice the other. How large is the smaller angle?",
      "answer": 60,
      "unit": "°",
      "explain": "The sum 180° split into 3 equal parts (1 + 2): 180 ÷ 3 = 60°. The other is 120°."
    },
    {
      "type": "mc",
      "q": "Two consecutive angles that together form a straight angle are called…",
      "options": [
        "complementary",
        "adjacent (supplementary)",
        "vertical angles"
      ],
      "answer": 1,
      "explain": "Two consecutive angles whose outer sides lie on the same line are adjacent and add up to 180°."
    },
    {
      "type": "tf",
      "q": "The midpoint of a 15 cm segment divides it into two parts of 7.5 cm each.",
      "answer": true,
      "explain": "15 ÷ 2 = 7.5 cm."
    },
    {
      "type": "mc",
      "q": "What is 90° − 36°40′ ?",
      "options": [
        "54°20′",
        "53°40′",
        "53°20′"
      ],
      "answer": 2,
      "explain": "90° = 89°60′. So 89°60′ − 36°40′ = 53°20′."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "On the same line the points A, B, C, D lie in this order. AB = 6 cm, BC is twice AB and CD is half of BC. How long is AD?",
      "answer": 24,
      "unit": "cm",
      "explain": "BC = 6 × 2 = 12 cm; CD = 12 ÷ 2 = 6 cm; AD = 6 + 12 + 6 = 24 cm."
    },
    {
      "type": "num",
      "q": "A, B, C are collinear in this order and AC = 30 cm. M is the midpoint of AB and N is the midpoint of BC. How long is MN?",
      "answer": 15,
      "unit": "cm",
      "explain": "MB = AB ÷ 2 and BN = BC ÷ 2, so MN = (AB + BC) ÷ 2 = AC ÷ 2 = 15 cm."
    },
    {
      "type": "mc",
      "q": "Two adjacent supplementary angles differ by 40°. How large is the bigger one?",
      "options": [
        "70°",
        "140°",
        "110°"
      ],
      "answer": 2,
      "explain": "Sum 180°, difference 40°: the bigger is (180 + 40) ÷ 2 = 110°, the smaller 70°."
    },
    {
      "type": "tf",
      "q": "Two vertical angles are always congruent, while two adjacent angles are never congruent.",
      "answer": false,
      "explain": "Adjacent angles can be congruent: two right angles of 90° are adjacent and equal."
    },
    {
      "type": "order",
      "q": "Put the steps for finding the midpoint of a segment AB with ruler and compass in order.",
      "items": [
        "Place the compass at A and, with an opening larger than half of AB, draw an arc",
        "With the same opening, place it at B and draw a second arc",
        "Mark the two points where the arcs cross",
        "Join the two points: the line cuts AB at its midpoint"
      ],
      "explain": "The arcs from the two endpoints cross at two points; the line joining them cuts AB in half."
    }
  ]
});
