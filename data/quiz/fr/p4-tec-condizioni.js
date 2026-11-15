QBANK("fr", "p4-tec-condizioni", {
 "f": [
  {
   "type": "mc",
   "q": "Dans les langages de programmation anglais, quel mot signifie « alors » ?",
   "options": [
    "if",
    "then",
    "else"
   ],
   "answer": 1,
   "explain": "if = si, then = alors, else = sinon."
  },
  {
   "type": "tf",
   "q": "Le symbole « > » signifie « plus grand que ».",
   "answer": true,
   "explain": "Vrai : 7 > 5 se lit « 7 est plus grand que 5 »."
  },
  {
   "type": "mc",
   "q": "Une porte automatique utilise la règle « SI le capteur voit une personne ALORS ouvre ». Que contrôle la porte ?",
   "options": [
    "Quelle heure il est",
    "De quelle couleur sont les vêtements",
    "S'il y a une personne devant"
   ],
   "answer": 2,
   "explain": "La condition est « le capteur voit-il une personne ? » : si elle est vraie, la porte s'ouvre."
  },
  {
   "type": "tf",
   "q": "Si la condition est fausse, l'ordinateur fait quand même l'action après ALORS.",
   "answer": false,
   "explain": "Faux : si la condition est fausse, l'action après ALORS est sautée."
  },
  {
   "type": "text",
   "q": "Comment appelle-t-on, dans un programme, une valeur qui peut changer pendant le jeu, comme « points » ou « vies » ?",
   "answer": [
    "variable",
    "une variable",
    "la variable"
   ],
   "explain": "Une variable est comme une boîte avec un nom où le programme garde une valeur qui peut changer."
  }
 ],
 "m": [
  {
   "type": "mc",
   "q": "pièces = 12. SI pièces > 10 ALORS dire « Achète le chapeau » SINON dire « Économise ». Que dit le programme ?",
   "options": [
    "Économise",
    "Achète le chapeau",
    "Les deux phrases"
   ],
   "answer": 1,
   "explain": "12 > 10 est vrai, donc on exécute l'action après ALORS."
  },
  {
   "type": "num",
   "q": "points = 8. SI points > 5 ALORS points devient points + 10 SINON points devient points − 1. Combien y a-t-il de points à la fin ?",
   "answer": 18,
   "tol": 0,
   "explain": "8 > 5 est vrai, donc on fait points + 10 : 8 + 10 = 18."
  },
  {
   "type": "tf",
   "q": "(4 > 2) OU (1 > 9) est vrai.",
   "answer": true,
   "explain": "Vrai : 4 > 2 est vrai et avec OU il suffit d'une condition vraie."
  },
  {
   "type": "mc",
   "q": "SI j'ai faim ET le frigo est vide ALORS je commande une pizza. J'ai faim, mais il y a du fromage dans le frigo. Est-ce que je commande une pizza ?",
   "options": [
    "Oui, je commande une pizza",
    "Non, parce que les deux conditions ne sont pas toutes les deux vraies",
    "Cela dépend du jour"
   ],
   "answer": 1,
   "explain": "Avec ET il faut que les deux conditions soient vraies : le frigo n'est pas vide, donc l'action n'est pas faite."
  },
  {
   "type": "order",
   "q": "Remets dans l'ordre les étapes d'un programme qui dit « Tu as gagné ! » quand les points dépassent 10.",
   "items": [
    "Créer la variable points",
    "Ajouter 1 aux points chaque fois qu'on attrape une pomme",
    "Vérifier si points > 10",
    "Si c'est vrai, afficher « Tu as gagné ! »"
   ],
   "explain": "D'abord il faut la variable, puis les points changent, puis on vérifie la condition et seulement si elle est vraie on affiche le message."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Un camarade écrit : SI il pleut ALORS prends le parapluie SINON prends le parapluie. Quel est le problème ?",
   "options": [
    "Les deux actions sont identiques : la condition ne sert à rien",
    "L'opérateur ET manque",
    "« Il pleut » ne peut pas être une condition"
   ],
   "answer": 0,
   "explain": "Quelle que soit la réponse, le programme fait la même chose : le choix SI…SINON est inutile."
  },
  {
   "type": "tf",
   "q": "(7 > 3) ET NON (2 > 5) est vrai.",
   "answer": true,
   "explain": "7 > 3 est vrai. 2 > 5 est faux, et NON le renverse en vrai. Vrai ET vrai = vrai."
  },
  {
   "type": "mc",
   "q": "Règle : SI (c'est samedi OU c'est dimanche) ET il ne pleut pas ALORS je vais au parc. Aujourd'hui c'est dimanche et il pleut. Est-ce que j'y vais ?",
   "options": [
    "Oui, parce que c'est dimanche",
    "Non, parce qu'il pleut",
    "Oui, parce que ce n'est pas samedi"
   ],
   "answer": 1,
   "explain": "(samedi OU dimanche) est vrai, mais « il ne pleut pas » est faux : avec ET il faut les deux vrais, donc je n'y vais pas."
  },
  {
   "type": "num",
   "q": "points = 6. Premier contrôle : SI points > 5 ALORS points devient points × 2. Deuxième contrôle : SI points > 10 ALORS points devient points − 3. Combien y a-t-il de points à la fin ?",
   "answer": 9,
   "tol": 0,
   "explain": "Premier contrôle : 6 > 5 est vrai, donc 6 × 2 = 12. Deuxième contrôle : 12 > 10 est vrai, donc 12 − 3 = 9."
  },
  {
   "type": "mc",
   "q": "Thermostat : SI température < 20 ALORS allume la chaudière SINON éteins-la. La température est exactement 20 °C. Que fait la chaudière ?",
   "options": [
    "On ne peut pas le dire",
    "Elle s'allume",
    "Elle reste éteinte"
   ],
   "answer": 2,
   "explain": "20 < 20 est faux (20 n'est pas plus petit que 20), donc on exécute l'action après SINON : la chaudière est éteinte."
  }
 ]
});
