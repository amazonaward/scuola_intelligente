QBANK("fr", "p1-geo-percorsi", {
 "f": [
  {
   "type": "mc",
   "q": "Quelle flèche veut dire « avance » ?",
   "options": [
    "⬇️",
    "⬅️",
    "⬆️"
   ],
   "answer": 2,
   "explain": "La flèche vers le haut ⬆️ veut dire avance."
  },
  {
   "type": "tf",
   "q": "Chaque parcours a un départ et une arrivée.",
   "answer": true,
   "explain": "Oui : on part d'un endroit et on arrive dans un autre."
  },
  {
   "type": "mc",
   "q": "Quel animal montre le chemin en dansant ?",
   "options": [
    "Le chat",
    "L'abeille",
    "La grenouille"
   ],
   "answer": 1,
   "explain": "L'abeille fait une danse et dit aux autres où sont les fleurs."
  },
  {
   "type": "text",
   "q": "Quel est le contraire de « en avant » ?",
   "answer": [
    "en arrière",
    "arrière",
    "derrière"
   ],
   "explain": "En avant ↔ en arrière."
  },
  {
   "type": "num",
   "q": "Code : → → ↑ ↑ ↑. Combien de pas fais-tu vers le haut (↑) ?",
   "answer": 3,
   "explain": "Il y a 3 flèches ↑, donc 3 pas vers le haut."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Pars du point : 3 pas à droite, 4 pas en haut, 2 pas à gauche. Combien de pas en tout ?",
   "answer": 9,
   "unit": "pas",
   "explain": "3 + 4 + 2 = 9 pas."
  },
  {
   "type": "mc",
   "q": "Le code → → ↓ veut dire…",
   "options": [
    "1 pas à droite et 2 vers le bas",
    "2 pas à droite et 1 vers le bas",
    "3 pas à gauche"
   ],
   "answer": 1,
   "explain": "Deux flèches à droite et une vers le bas."
  },
  {
   "type": "mc",
   "q": "Maman dit : « D'abord le feu, puis la pharmacie, enfin l'école. » Que trouves-tu juste avant l'école ?",
   "options": [
    "Le feu",
    "La pharmacie",
    "Le parc"
   ],
   "answer": 1,
   "explain": "L'ordre est : feu, pharmacie, école. Juste avant l'école, il y a la pharmacie."
  },
  {
   "type": "tf",
   "q": "En course d'orientation, les enfants utilisent une carte et une boussole pour trouver les balises.",
   "answer": true,
   "explain": "Vrai : ils courent dans les bois et cherchent les balises dans le bon ordre."
  },
  {
   "type": "order",
   "q": "Mets dans l'ordre le matin de Sara, du premier au dernier.",
   "items": [
    "Je me réveille",
    "Je m'habille",
    "Je prends le petit-déjeuner",
    "Je sors de la maison"
   ],
   "explain": "D'abord, puis, après, enfin : les choses se font dans l'ordre."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Pars du point et fais : ↑ ↑ ↑ ↓. De combien de carreaux es-tu plus haut que le départ ?",
   "answer": 2,
   "unit": "carreaux",
   "explain": "Trois pas vers le haut et un vers le bas : 3 − 1 = 2 carreaux."
  },
  {
   "type": "tf",
   "q": "Deux robots partent du même endroit. Le premier fait : avance, avance, tourne à droite, avance. Le second fait : avance, tourne à droite, avance, avance. Ils arrivent au même endroit.",
   "answer": false,
   "explain": "Faux : ils ont les mêmes commandes mais dans un ordre différent, donc ils arrivent à deux endroits différents."
  },
  {
   "type": "mc",
   "q": "Lequel de ces parcours est un parcours fermé ?",
   "options": [
    "Maison → école",
    "Maison → parc → magasin → maison",
    "Maison → maison de mamie"
   ],
   "answer": 1,
   "explain": "Dans un parcours fermé, on revient au point de départ : maison, parc, magasin, de nouveau maison."
  },
  {
   "type": "num",
   "q": "Un robot exécute : avance ×3, tourne à droite, avance ×2, tourne à gauche, avance ×1. Combien de pas en avant fait-il en tout ?",
   "answer": 6,
   "unit": "pas",
   "explain": "On ne compte que les pas en avant : 3 + 2 + 1 = 6. Les virages ne sont pas des pas."
  },
  {
   "type": "order",
   "q": "Mets dans l'ordre la course d'orientation dans les bois.",
   "items": [
    "Je prends la carte et la boussole",
    "Je cours dans les bois",
    "Je trouve les balises dans le bon ordre",
    "J'arrive à l'arrivée"
   ],
   "explain": "D'abord tu te prépares, puis tu cours, puis tu trouves les balises et enfin tu arrives."
  }
 ]
});
