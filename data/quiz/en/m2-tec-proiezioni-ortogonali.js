QBANK("en", "m2-tec-proiezioni-ortogonali", {
 "f": [
  {
   "type": "mc",
   "q": "Which plane receives the top view?",
   "options": [
    "Horizontal plane (H.P.)",
    "Vertical plane (V.P.)",
    "Side plane (S.P.)"
   ],
   "answer": 0,
   "explain": "The top view (plan) is projected onto the horizontal plane, H.P."
  },
  {
   "type": "tf",
   "q": "Orthogonal projections have no perspective: equal edges stay equal even if they are far away.",
   "answer": true,
   "explain": "Parallel rays do not distort: faces parallel to the plane appear in true shape and size."
  },
  {
   "type": "mc",
   "q": "What is the front view also called?",
   "options": [
    "Plan",
    "Elevation",
    "Section"
   ],
   "answer": 1,
   "explain": "The front view is also called the elevation."
  },
  {
   "type": "num",
   "q": "How many views (front, top, side) are usually used to describe an object?",
   "answer": 3,
   "tol": 0,
   "explain": "Three views are used, one for each plane: V.P., H.P. and S.P."
  },
  {
   "type": "text",
   "q": "What is the system of three perpendicular planes forming a corner like a room called?",
   "answer": [
    "trihedron",
    "the trihedron",
    "triedron",
    "trihedral"
   ],
   "explain": "The trihedron is made of the vertical, horizontal and side planes."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "A brick measures 12 cm long, 7 cm deep and 5 cm high. How many cm² is the area of its side view?",
   "answer": 35,
   "tol": 0,
   "unit": "cm²",
   "explain": "The side view is a rectangle depth × height = 7 × 5 = 35 cm²."
  },
  {
   "type": "mc",
   "q": "A cone standing on its base: what are its front, side and top views?",
   "options": [
    "Triangle, triangle, circle",
    "Rectangle, rectangle, circle",
    "Circle, circle, triangle"
   ],
   "answer": 0,
   "explain": "From the front and the side a cone looks like an isosceles triangle; from above like a circle."
  },
  {
   "type": "mc",
   "q": "In which pair of views does the height of the object appear?",
   "options": [
    "Front and side",
    "Front and top",
    "Top and side"
   ],
   "answer": 0,
   "explain": "Height appears in the front view and the side view; it is not in the plan."
  },
  {
   "type": "num",
   "q": "A cube has edges of 4 cm. How many cm is the perimeter of its top view?",
   "answer": 16,
   "tol": 0,
   "unit": "cm",
   "explain": "The top view is a square with 4 cm sides: 4 × 4 = 16 cm."
  },
  {
   "type": "text",
   "q": "What is the view from above of an object called?",
   "answer": [
    "plan",
    "the plan",
    "top view",
    "plan view"
   ],
   "explain": "The view from above is called the plan and is drawn below the elevation."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "A cuboid has a 9 × 4 cm rectangle (width × height) in the elevation and a 9 × 6 cm rectangle (width × depth) in the plan. What is its volume in cm³?",
   "answer": 216,
   "tol": 0,
   "unit": "cm³",
   "explain": "Dimensions: width 9, height 4, depth 6. Volume = 9 × 4 × 6 = 216 cm³."
  },
  {
   "type": "mc",
   "q": "A student must draw the views of a brick 8 × 5 × 3 cm (width × depth × height). Under the elevation they draw an 8 × 3 cm rectangle. What is the mistake?",
   "options": [
    "The plan must be 8 × 5 (width and depth)",
    "The plan must be drawn above the elevation",
    "The plan must be a square"
   ],
   "answer": 0,
   "explain": "The plan shows width and depth: it must be an 8 × 5 cm rectangle."
  },
  {
   "type": "tf",
   "q": "If two objects have the same front view and the same side view, they necessarily also have the same top view.",
   "answer": false,
   "explain": "False: a cylinder and a cuboid can have the same two rectangles, but the plan (circle or rectangle) tells them apart."
  },
  {
   "type": "mc",
   "q": "A mechanical part arrives «mirrored» and cannot be assembled. Which cause is most likely?",
   "options": [
    "The drawing was read with the wrong method (European instead of American or vice versa)",
    "Dashed lines were used for hidden edges",
    "The drawing scale was 1:1"
   ],
   "answer": 0,
   "explain": "The European and American methods place the views differently: reading a drawing with the wrong method flips the part."
  },
  {
   "type": "num",
   "q": "A cuboid measures 10 cm in width, 6 cm in depth and 4 cm in height. Which measurement (in cm) is carried from the plan to the side view with the 45° line?",
   "answer": 6,
   "tol": 0,
   "unit": "cm",
   "explain": "The 45° line carries the depth, which appears in the plan and in the side view: 6 cm."
  }
 ]
});
