QBANK("fr", "p1-tec-coding-unplugged", {
 "f": [
  {
   "type": "mc",
   "q": "Quelle flèche dit au robot « avance » ?",
   "options": [
    "⬇️",
    "⬆️",
    "⬅️"
   ],
   "answer": 1,
   "explain": "La flèche vers le haut ⬆️ veut dire avancer."
  },
  {
   "type": "tf",
   "q": "Un robot a besoin d'instructions pour bouger.",
   "answer": true,
   "explain": "Le robot ne pense pas tout seul : il bouge seulement si on lui donne des instructions."
  },
  {
   "type": "mc",
   "q": "Le robot doit aller d'une case vers la droite. Quelle flèche utilises-tu ?",
   "options": [
    "⬅️",
    "⬇️",
    "➡️"
   ],
   "answer": 2,
   "explain": "La flèche ➡️ emmène le robot vers la droite."
  },
  {
   "type": "text",
   "q": "La personne qui écrit des programmes pour les ordinateurs s'appelle un…",
   "answer": [
    "programmeur",
    "un programmeur",
    "programmeuse",
    "une programmeuse"
   ],
   "explain": "Le programmeur écrit les instructions pour l'ordinateur."
  },
  {
   "type": "order",
   "q": "Mets dans l'ordre l'algorithme pour s'habiller.",
   "items": [
    "Je mets les chaussettes",
    "Je mets les chaussures",
    "Je lace les chaussures"
   ],
   "explain": "Les chaussettes se mettent avant les chaussures, et on lace après les avoir mises."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Le robot est sur la case 1. Il avance de 2 cases, puis de 3 autres. Sur quelle case arrive-t-il ?",
   "answer": 6,
   "explain": "1 + 2 = 3, puis 3 + 3 = 6. Il arrive sur la case 6."
  },
  {
   "type": "mc",
   "q": "Quel programme fait faire 5 pas en avant au robot ?",
   "options": [
    "🔁 Répète 3 fois : ⬆️",
    "🔁 Répète 5 fois : ⬆️",
    "⬆️"
   ],
   "answer": 1,
   "explain": "Répète 5 fois ⬆️ fait 5 pas en avant."
  },
  {
   "type": "tf",
   "q": "Si le robot n'arrive pas à l'étoile, il y a peut-être une erreur dans le programme.",
   "answer": true,
   "explain": "Une erreur (bug) peut envoyer le robot au mauvais endroit."
  },
  {
   "type": "text",
   "q": "Quand on trouve et corrige une erreur du programme, on fait le…",
   "answer": [
    "debug",
    "débogage",
    "debogage",
    "le debug"
   ],
   "explain": "Trouver et corriger les erreurs s'appelle le débogage."
  },
  {
   "type": "order",
   "q": "Mets dans l'ordre l'algorithme pour se brosser les dents.",
   "items": [
    "Je mets du dentifrice sur la brosse",
    "Je me brosse les dents",
    "Je me rince la bouche",
    "Je range la brosse"
   ],
   "explain": "On met le dentifrice, on brosse, on rince, puis on range la brosse."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Quel programme NE fait PAS faire 6 pas en avant au robot ?",
   "options": [
    "🔁 Répète 3 fois : ⬆️⬆️",
    "🔁 Répète 6 fois : ⬆️",
    "🔁 Répète 2 fois : ⬆️⬆️"
   ],
   "answer": 2,
   "explain": "Répète 2 fois ⬆️⬆️ fait 2 × 2 = 4 pas. Les autres font 3 × 2 = 6 et 6 × 1 = 6."
  },
  {
   "type": "num",
   "q": "Programme : 🔁 Répète 3 fois : ⬆️⬆️ puis ➡️. Combien de pas ⬆️ le robot fait-il en tout ?",
   "answer": 6,
   "explain": "Chaque fois, il fait 2 pas ⬆️. 3 × 2 = 6 pas ⬆️ (puis ➡️ est un autre mouvement).",
   "unit": "pas"
  },
  {
   "type": "tf",
   "q": "Si tu changes l'ordre des instructions, le robot peut faire un chemin différent.",
   "answer": true,
   "explain": "L'ordre compte : ⬆️➡️ et ➡️⬆️ mènent le robot à deux endroits différents."
  },
  {
   "type": "text",
   "q": "Comment s'appelle l'idée de répéter plusieurs fois la même instruction ? Une…",
   "answer": [
    "boucle",
    "une boucle",
    "répétition",
    "repetition"
   ],
   "explain": "Une boucle répète les instructions, donc le programme est plus court."
  },
  {
   "type": "order",
   "q": "Mets dans l'ordre l'algorithme pour traverser la rue.",
   "items": [
    "Je m'arrête sur le trottoir",
    "Je regarde à gauche et à droite",
    "Je traverse sur le passage piéton",
    "Je marche sur l'autre trottoir"
   ],
   "explain": "D'abord on s'arrête, puis on regarde, on traverse sur le passage piéton et on arrive de l'autre côté."
  }
 ]
});
