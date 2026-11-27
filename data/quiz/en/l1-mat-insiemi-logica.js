QBANK("en", "l1-mat-insiemi-logica", {
 "f": [
  { "type": "mc", "q": "Which symbol shows that an element belongs to a set?", "options": ["∈", "⊂", "∪"], "answer": 0, "explain": "∈ is read \"belongs to\" (is an element of): 3 ∈ {1, 2, 3}. The symbol ⊂ is used between sets (subset)." },
  { "type": "num", "q": "A = {1, 3, 5} and B = {3, 5, 7, 9}. How many elements does A ∩ B have?", "answer": 2, "explain": "The intersection is {3, 5}: 2 elements." },
  { "type": "tf", "q": "The empty set is a subset of every set.", "answer": true, "explain": "There is no element of ∅ that does not belong to A, so ∅ ⊆ A always." },
  { "type": "mc", "q": "Which of these is a proposition?", "options": ["What time is it?", "9 is a multiple of 3", "Do your homework!"], "answer": 1, "explain": "A proposition is true or false: \"9 is a multiple of 3\" is true. The others are a question and an order." },
  { "type": "text", "q": "What is the set with no elements called?", "answer": ["empty set", "the empty set", "empty", "null set", "the null set"], "explain": "It is the empty set, written ∅ or { }." }
 ],
 "m": [
  { "type": "num", "q": "In a class of 25 pupils, 14 have a dog, 9 have a cat and 4 have both. How many have at least one of the two animals?", "answer": 19, "explain": "|D ∪ C| = 14 + 9 − 4 = 19." },
  { "type": "num", "q": "How many subsets does a set with 6 elements have?", "answer": 64, "explain": "2⁶ = 64." },
  { "type": "mc", "q": "What is the negation of \"there exists a natural number n such that n² = 10\"?", "options": ["For every natural number n, n² ≠ 10", "There exists a natural number n with n² ≠ 10", "For every natural number n, n² = 10"], "answer": 0, "explain": "The negation of ∃ is ∀ with the predicate negated: no natural number has square 10." },
  { "type": "mc", "q": "The proposition p ∨ q is false when…", "options": ["p and q are both false", "only one of the two is false", "p and q are both true"], "answer": 0, "explain": "The (inclusive) \"or\" connective is false only if both are false." },
  { "type": "tf", "q": "\"If a number is a multiple of 4, then it is even\" is true, and its converse \"if a number is even, then it is a multiple of 4\" is also true.", "answer": false, "explain": "The converse is false: 6 is even but not a multiple of 4." }
 ],
 "d": [
  { "type": "num", "q": "Of 100 tourists, 60 visited Rome, 50 Florence and 20 neither. How many visited both?", "answer": 30, "explain": "100 − 20 = 80 visited at least one city. From |R ∪ F| = |R| + |F| − |R ∩ F|: 80 = 110 − x, so x = 30." },
  { "type": "mc", "q": "Which equivalence is correct (De Morgan)?", "options": ["¬(p ∧ q) ≡ ¬p ∧ ¬q", "¬(p ∧ q) ≡ ¬p ∨ ¬q", "¬(p ∨ q) ≡ ¬p ∨ ¬q"], "answer": 1, "explain": "The negation of an \"and\" is the \"or\" of the negations, and vice versa: ¬(p ∧ q) ≡ ¬p ∨ ¬q; ¬(p ∨ q) ≡ ¬p ∧ ¬q." },
  { "type": "tf", "q": "The proposition (p ⇒ q) is logically equivalent to (¬q ⇒ ¬p).", "answer": true, "explain": "This is contraposition: the two have the same truth table." },
  { "type": "num", "q": "A = {1, 2, 3} and B = {a, b}. How many elements does A × B have?", "answer": 6, "explain": "3 × 2 = 6 pairs: (1,a), (1,b), (2,a), (2,b), (3,a), (3,b)." },
  { "type": "mc", "q": "\"Having a diameter is a necessary condition for being a circle\" means…", "options": ["If it is a circle, then it has a diameter", "If it has a diameter, then it is a circle", "Circle and diameter are not connected"], "answer": 0, "explain": "Q is a necessary condition for P when P ⇒ Q: every circle has a diameter, but not everything that has a diameter is a circle (a sphere, for example)." }
 ]
});
