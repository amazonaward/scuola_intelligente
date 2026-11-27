QBANK("en", "l1-art-proiezioni-ortogonali", {
 f: [
  { type: "mc", q: "In technical drawing, what is the view of an object from above called?", options: ["Plan", "Front view", "Section"], answer: 0, explain: "The view from above is the plan (projection onto the HP)." },
  { type: "tf", q: "In orthographic projection the projecting rays are perpendicular to the plane.", answer: true, explain: "That is exactly the definition of orthographic projection." },
  { type: "text", q: "What two-letter abbreviation is used for the vertical plane of projection?", answer: ["vp", "v.p.", "pv"], explain: "VP: the vertical plane, onto which the front view is projected." },
  { type: "mc", q: "Which solid has a circular plan and a rectangular front view?", options: ["Cylinder", "Cube", "Pyramid"], answer: 0, explain: "A cylinder with a vertical axis." },
  { type: "num", q: "How many principal views (plan, front view, side view) are usually used to define a solid?", answer: 3, tol: 0, explain: "The three principal views, although two are often enough." }
 ],
 m: [
  { type: "mc", q: "A square parallel to the HP appears in the front view as…", options: ["A square", "A horizontal segment", "A point"], answer: 1, explain: "A plane parallel to the HP is perpendicular to the VP: it shrinks to a segment parallel to the ground line." },
  { type: "mc", q: "What is the plan of a right square pyramid?", options: ["A triangle", "A square with its diagonals", "A circle"], answer: 1, explain: "You see the base, and the four lateral edges appear as diagonals." },
  { type: "num", q: "A rectangular box is 10 cm wide, 6 cm deep and 4 cm high. What is the area of the rectangle in the plan?", answer: 60, tol: 0, unit: "cm²", explain: "The plan shows width × depth: 10 × 6 = 60 cm²." },
  { type: "tf", q: "A segment perpendicular to the VP is projected in the front view as a point.", answer: true, explain: "The projecting ray coincides with the segment." },
  { type: "text", q: "Which thin line links the projections of the same point in two views?", answer: ["projection line", "the projection line", "projector", "construction line", "line of projection"], explain: "The projection line, perpendicular to the ground line." }
 ],
 d: [
  { type: "mc", q: "In the American method (third-angle projection), where is the plan drawn relative to the front view?", options: ["Below", "Above", "To the right"], answer: 1, explain: "In the American method the plan is above the front view, the opposite of the European method." },
  { type: "mc", q: "A circle inclined to the plane of projection is projected as…", options: ["A smaller circle", "An ellipse", "A rhombus"], answer: 1, explain: "The orthographic projection of an inclined circle is an ellipse whose major axis equals the diameter." },
  { type: "num", q: "A segment 10 cm long is parallel to the plane of projection. How long is its orthographic projection?", answer: 10, tol: 0, unit: "cm", explain: "A segment parallel to the plane is projected in true length." },
  { type: "tf", q: "The method of descriptive geometry was at first kept secret because it was useful for military purposes.", answer: true, explain: "Monge used it for fortifications; it was made public after the French Revolution." },
  { type: "order", q: "Put in order: constructing the side view from the plan and front view.", items: ["Draw horizontal projection lines from the front view", "Transfer the depths from the plan with a 45° line", "Join the points you obtained", "Go over the visible and hidden edges"], explain: "The heights come from the front view, the depths from the plan." }
 ]
});
