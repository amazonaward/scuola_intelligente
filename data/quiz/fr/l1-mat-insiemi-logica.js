QBANK("fr", "l1-mat-insiemi-logica", {
 "f": [
  { "type": "mc", "q": "Quel symbole indique qu'un élément appartient à un ensemble ?", "options": ["∈", "⊂", "∪"], "answer": 0, "explain": "∈ se lit \"appartient à\" : 3 ∈ {1, 2, 3}. Le symbole ⊂ s'utilise entre ensembles (sous-ensemble)." },
  { "type": "num", "q": "A = {1, 3, 5} et B = {3, 5, 7, 9}. Combien d'éléments a A ∩ B ?", "answer": 2, "explain": "L'intersection est {3, 5} : 2 éléments." },
  { "type": "tf", "q": "L'ensemble vide est un sous-ensemble de tout ensemble.", "answer": true, "explain": "Il n'existe aucun élément de ∅ qui n'appartienne pas à A, donc on a toujours ∅ ⊆ A." },
  { "type": "mc", "q": "Laquelle de ces phrases est une proposition ?", "options": ["Quelle heure est-il ?", "9 est un multiple de 3", "Fais tes devoirs !"], "answer": 1, "explain": "Une proposition est vraie ou fausse : \"9 est un multiple de 3\" est vraie. Les autres sont une question et un ordre." },
  { "type": "text", "q": "Comment s'appelle l'ensemble qui ne contient aucun élément ?", "answer": ["ensemble vide", "vide", "l'ensemble vide"], "explain": "C'est l'ensemble vide, noté ∅ ou { }." }
 ],
 "m": [
  { "type": "num", "q": "Dans une classe de 25 élèves, 14 ont un chien, 9 ont un chat et 4 ont les deux. Combien ont au moins l'un des deux animaux ?", "answer": 19, "explain": "|C ∪ G| = 14 + 9 − 4 = 19." },
  { "type": "num", "q": "Combien de sous-ensembles a un ensemble de 6 éléments ?", "answer": 64, "explain": "2⁶ = 64." },
  { "type": "mc", "q": "Quelle est la négation de \"il existe un entier naturel n tel que n² = 10\" ?", "options": ["Pour tout entier naturel n, n² ≠ 10", "Il existe un entier naturel n tel que n² ≠ 10", "Pour tout entier naturel n, n² = 10"], "answer": 0, "explain": "La négation de ∃ est ∀ avec le prédicat nié : aucun entier naturel n'a pour carré 10." },
  { "type": "mc", "q": "La proposition p ∨ q est fausse quand…", "options": ["p et q sont toutes les deux fausses", "une seule des deux est fausse", "p et q sont toutes les deux vraies"], "answer": 0, "explain": "Le connecteur \"ou\" (inclusif) n'est faux que si les deux sont fausses." },
  { "type": "tf", "q": "\"Si un nombre est multiple de 4, alors il est pair\" est vraie, et sa réciproque \"si un nombre est pair, alors il est multiple de 4\" est vraie aussi.", "answer": false, "explain": "La réciproque est fausse : 6 est pair mais n'est pas multiple de 4." }
 ],
 "d": [
  { "type": "num", "q": "Sur 100 touristes, 60 ont visité Rome, 50 Florence et 20 aucune des deux. Combien ont visité les deux ?", "answer": 30, "explain": "100 − 20 = 80 ont visité au moins une ville. D'après |R ∪ F| = |R| + |F| − |R ∩ F| : 80 = 110 − x, donc x = 30." },
  { "type": "mc", "q": "Quelle équivalence est correcte (De Morgan) ?", "options": ["¬(p ∧ q) ≡ ¬p ∧ ¬q", "¬(p ∧ q) ≡ ¬p ∨ ¬q", "¬(p ∨ q) ≡ ¬p ∨ ¬q"], "answer": 1, "explain": "La négation d'un \"et\" est le \"ou\" des négations, et inversement : ¬(p ∧ q) ≡ ¬p ∨ ¬q ; ¬(p ∨ q) ≡ ¬p ∧ ¬q." },
  { "type": "tf", "q": "La proposition (p ⇒ q) est logiquement équivalente à (¬q ⇒ ¬p).", "answer": true, "explain": "C'est la contraposition : les deux ont la même table de vérité." },
  { "type": "num", "q": "A = {1, 2, 3} et B = {a, b}. Combien d'éléments a A × B ?", "answer": 6, "explain": "3 × 2 = 6 couples : (1,a), (1,b), (2,a), (2,b), (3,a), (3,b)." },
  { "type": "mc", "q": "\"Avoir un diamètre est une condition nécessaire pour être un cercle\" signifie…", "options": ["Si c'est un cercle, alors il a un diamètre", "Si cela a un diamètre, alors c'est un cercle", "Cercle et diamètre ne sont pas liés"], "answer": 0, "explain": "Q est une condition nécessaire pour P quand P ⇒ Q : tout cercle a un diamètre, mais tout ce qui a un diamètre n'est pas un cercle (la sphère, par exemple)." }
 ]
});
