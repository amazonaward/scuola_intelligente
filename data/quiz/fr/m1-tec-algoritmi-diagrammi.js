QBANK("fr", "m1-tec-algoritmi-diagrammi", {
 "f": [
  {
   "type": "mc",
   "q": "Que montrent les flèches dans un organigramme ?",
   "options": [
    "Une erreur",
    "Une décision",
    "L'étape suivante, c'est-à-dire le flux de l'algorithme"
   ],
   "answer": 2,
   "explain": "Les flèches relient les blocs et montrent dans quel ordre les étapes sont exécutées."
  },
  {
   "type": "tf",
   "q": "Un organigramme n'a qu'un seul bloc de Début.",
   "answer": true,
   "explain": "Vrai : l'algorithme commence en un seul point, alors qu'il peut avoir plus d'une Fin."
  },
  {
   "type": "text",
   "q": "Comment s'appelle celui qui exécute un algorithme, que ce soit une personne ou une machine ?",
   "answer": [
    "exécutant",
    "l'exécutant",
    "exécuteur",
    "l'exécuteur"
   ],
   "explain": "L'exécutant fait exactement ce qui est écrit : un ordinateur est un exécutant très rapide mais sans imagination."
  },
  {
   "type": "mc",
   "q": "Laquelle de ces instructions n'est PAS ambiguë ?",
   "options": [
    "Ajoute un peu de sel",
    "Ajoute 5 g de sel",
    "Ajoute du sel à ton goût",
    "Ajoute une bonne poignée de sel"
   ],
   "answer": 1,
   "explain": "Seul « 5 g » indique une quantité précise, qu'on ne peut comprendre que d'une seule façon."
  },
  {
   "type": "tf",
   "q": "Un bon algorithme doit fonctionner seulement pour un cas particulier, pas pour tous les cas du même type.",
   "answer": false,
   "explain": "Faux : il doit être général, c'est-à-dire valable pour tous les cas du même type."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Utilise l'algorithme d'Euclide : quel est le PGCD de 56 et 24 ?",
   "answer": 8,
   "explain": "56 ÷ 24 donne un reste de 8 ; 24 ÷ 8 donne un reste de 0. Le dernier reste non nul est 8, donc PGCD(56, 24) = 8."
  },
  {
   "type": "mc",
   "q": "Dans Scratch, quel bloc correspond à la structure de sélection (le losange de l'organigramme) ?",
   "options": [
    "« répéter 10 fois »",
    "« si … alors … sinon »",
    "les blocs emboîtés l'un sous l'autre"
   ],
   "answer": 1,
   "explain": "Le bloc « si … alors … sinon » choisit entre deux chemins, comme le losange."
  },
  {
   "type": "order",
   "q": "Remets dans l'ordre les étapes de l'algorithme « pair ou impair ».",
   "items": [
    "Début",
    "Lire le nombre N",
    "Calculer le reste de N ÷ 2",
    "Si le reste est 0, écrire « pair », sinon écrire « impair »",
    "Fin"
   ],
   "explain": "On lit d'abord la donnée, puis on calcule le reste de la division, puis on affiche le résultat."
  },
  {
   "type": "tf",
   "q": "Tout programme Scratch peut être transformé en organigramme, et inversement.",
   "answer": true,
   "explain": "Vrai : séquence, sélection et itération se retrouvent à la fois dans les blocs et dans les symboles de l'organigramme."
  },
  {
   "type": "num",
   "q": "Un algorithme exécute : X ← 5 ; puis répète 3 fois « X ← X + 2 » ; enfin écrit X. Quel nombre écrit-il ?",
   "answer": 11,
   "explain": "En partant de 5 : 7, 9, 11. Après 3 répétitions, X vaut 5 + 3 × 2 = 11."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Lequel de ces algorithmes contient une boucle infinie ?",
   "options": [
    "X ← 10 ; tant que X > 0 répéter X ← X − 1",
    "X ← 1 ; tant que X > 0 répéter X ← X + 1",
    "Répéter 5 fois « écrire bonjour »",
    "Si X > 0 écrire « bonjour »"
   ],
   "answer": 1,
   "explain": "Dans le deuxième, X augmente toujours et reste supérieur à 0 : la condition de sortie ne devient jamais vraie."
  },
  {
   "type": "mc",
   "q": "Un algorithme pour faire du thé dit « Tant que l'eau ne bout pas, attendre », mais il a oublié l'étape « Allumer la bouilloire ». Quelle propriété est violée ?",
   "options": [
    "Général",
    "Non ambigu",
    "Exécutable",
    "Fini"
   ],
   "answer": 3,
   "explain": "Sans allumer la bouilloire, l'eau ne bout jamais : l'attente ne se termine pas et l'algorithme n'est pas fini."
  },
  {
   "type": "tf",
   "q": "Dans un organigramme, une itération se dessine avec une flèche qui revient vers un bloc précédent.",
   "answer": true,
   "explain": "Vrai : la flèche vers l'arrière fait répéter les étapes tant que la condition l'exige."
  },
  {
   "type": "text",
   "q": "Comment s'appelle la description d'un algorithme écrite avec des phrases proches d'un langage de programmation, mais sans règles strictes ?",
   "answer": [
    "pseudocode",
    "pseudo-code",
    "le pseudocode",
    "pseudo code",
    "le pseudo-code"
   ],
   "explain": "Le pseudocode se situe entre le langage naturel et le vrai code."
  },
  {
   "type": "num",
   "q": "Un algorithme exécute : S ← 0 ; N ← 4 ; tant que N > 0 répète « S ← S + N ; N ← N − 1 » ; enfin écrit S. Quel nombre écrit-il ?",
   "answer": 10,
   "explain": "S = 4 + 3 + 2 + 1 = 10 : à chaque tour on ajoute N et N diminue de 1, jusqu'à ce que N arrive à 0."
  }
 ]
});
