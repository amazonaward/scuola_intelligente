QBANK("en", "l2-mat-similitudine", {
  "f": [
    { "type": "mc", "q": "Two similar figures have…", "options": ["The same shape", "The same area", "The same perimeter"], "answer": 0, "explain": "Similar means the same shape, even with different sizes." },
    { "type": "num", "q": "Solve the proportion 3 : 6 = 5 : x", "answer": 10, "unit": "", "explain": "x = 6 · 5 / 3 = 10." },
    { "type": "tf", "q": "Any two squares are similar.", "answer": true, "explain": "They all have right angles and their sides are in the same ratio." },
    { "type": "num", "q": "A triangle has sides of 2, 3 and 4 cm. A similar triangle has scale factor k = 2. How long is its longest side?", "answer": 8, "unit": "cm", "explain": "4 · 2 = 8 cm." },
    { "type": "mc", "q": "In Thales' theorem the lines of the set are…", "options": ["Parallel", "Perpendicular", "All meeting at the same point"], "answer": 0, "explain": "The theorem is about a set of parallel lines cut by transversals." }
  ],
  "m": [
    { "type": "num", "q": "Two similar triangles have a scale factor of 3. The area of the smaller one is 7 cm². What is the area of the larger one?", "answer": 63, "unit": "cm²", "explain": "The areas are in the ratio k² = 9: 7 · 9 = 63 cm²." },
    { "type": "num", "q": "A building casts a 30 m shadow while a 2 m pole casts a 4 m shadow. How tall is the building?", "answer": 15, "unit": "m", "explain": "h : 2 = 30 : 4, so h = 15 m." },
    { "type": "tf", "q": "Any two rectangles are always similar.", "answer": false, "explain": "Their angles are equal but their sides are not necessarily in proportion (3×4 and 3×5, for example)." },
    { "type": "mc", "q": "Which similarity criterion requires only two congruent angles?", "options": ["The first (AA)", "The second (SAS)", "The third (SSS)"], "answer": 0, "explain": "The first criterion: two congruent angles are enough because the third is determined." },
    { "type": "num", "q": "On the map two towns are 5 cm apart and the scale is 1 : 100 000. How many kilometres apart are they?", "answer": 5, "unit": "km", "explain": "5 · 100 000 = 500 000 cm = 5 km." }
  ],
  "d": [
    { "type": "num", "q": "In triangle ABC (AB = 10, AC = 15, BC = 20) the bisector of A meets BC at D. How long is DC?", "answer": 12, "unit": "", "explain": "BD : DC = 10 : 15 = 2 : 3, DC = 20 · 3 / 5 = 12." },
    { "type": "num", "q": "A solid has a volume of 16 cm³. What is the volume of a similar solid with scale factor 3?", "answer": 432, "unit": "cm³", "explain": "The volumes are in the ratio k³ = 27: 16 · 27 = 432 cm³." },
    { "type": "num", "q": "In a triangle ABC, a line parallel to BC cuts AB at D and AC at E with AD = 3, DB = 5 and BC = 16. How long is DE?", "answer": 6, "unit": "", "explain": "ADE ~ ABC with k = AD / AB = 3/8: DE = 16 · 3/8 = 6." },
    { "type": "mc", "q": "Why, at the same moment, are the shadows of vertical objects proportional to their heights?", "options": ["Because the Sun's rays are parallel and the triangles are similar", "Because the Sun is close", "Because the shadow is always twice the height"], "answer": 0, "explain": "Parallel rays ⇒ same angles ⇒ similar triangles (AA) ⇒ proportional sides." },
    { "type": "tf", "q": "If all the lengths of a solid are doubled, its volume doubles.", "answer": false, "explain": "The volume is multiplied by k³ = 8, not by 2." }
  ]
});
