QBANK("fr", "p1-sto-prima-dopo", {
 "f": [
  {
   "type": "mc",
   "q": "Que fais-tu avant de manger ?",
   "options": [
    "Je me lave les mains",
    "Je vais au lit",
    "Je sors jouer"
   ],
   "answer": 0,
   "explain": "Avant de manger, on se lave les mains."
  },
  {
   "type": "tf",
   "q": "Hier vient avant aujourd'hui.",
   "answer": true,
   "explain": "Hier est déjà passé : il vient avant aujourd'hui."
  },
  {
   "type": "mc",
   "q": "Demain vient…",
   "options": [
    "avant aujourd'hui",
    "après aujourd'hui",
    "avec hier"
   ],
   "answer": 1,
   "explain": "Demain n'est pas encore arrivé : il vient après aujourd'hui."
  },
  {
   "type": "text",
   "q": "Le contraire de « avant » est…",
   "answer": [
    "après",
    "apres"
   ],
   "explain": "Avant et après sont des mots contraires."
  },
  {
   "type": "order",
   "q": "Mets dans l'ordre : comment faire un sandwich.",
   "items": [
    "Je prends le pain",
    "Je le coupe",
    "J'y mets le jambon",
    "Je le mange"
   ],
   "explain": "D'abord le pain, puis on le coupe, on le garnit et à la fin on le mange."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Carla arrive lundi et part jeudi. Combien de jours passent de lundi à jeudi ?",
   "answer": 3,
   "explain": "À partir de lundi : mardi (1), mercredi (2), jeudi (3). Il passe 3 jours.",
   "unit": "jours"
  },
  {
   "type": "mc",
   "q": "D'abord la graine, puis la petite plante. Qu'est-ce qui vient après la petite plante ?",
   "options": [
    "La fleur",
    "La graine",
    "Le terreau"
   ],
   "answer": 0,
   "explain": "La graine devient une petite plante, puis elle fait une fleur."
  },
  {
   "type": "tf",
   "q": "Après le coucher du soleil, c'est tout de suite le matin.",
   "answer": false,
   "explain": "Après le coucher du soleil viennent le soir, puis la nuit. Le matin vient après la nuit."
  },
  {
   "type": "text",
   "q": "Quel jour vient après le lundi ?",
   "answer": [
    "mardi",
    "le mardi"
   ],
   "explain": "Après le lundi vient le mardi."
  },
  {
   "type": "order",
   "q": "Il pleut ! Mets dans l'ordre ce que tu fais.",
   "items": [
    "Je vois qu'il pleut",
    "Je prends le parapluie",
    "Je sors de la maison",
    "Je rentre au sec"
   ],
   "explain": "D'abord tu vois la pluie, puis tu prends le parapluie, tu sors et tu rentres au sec."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Anna arrive avant Luca. Luca arrive avant Marco. Qui arrive en dernier ?",
   "options": [
    "Anna",
    "Luca",
    "Marco"
   ],
   "answer": 2,
   "explain": "L'ordre est Anna, Luca, Marco : le dernier est Marco."
  },
  {
   "type": "num",
   "q": "Je suis le cinquième de la file. Combien d'enfants y a-t-il avant moi ?",
   "answer": 4,
   "explain": "Le cinquième a 4 enfants devant lui : le premier, le deuxième, le troisième et le quatrième.",
   "unit": "enfants"
  },
  {
   "type": "tf",
   "q": "Si A vient avant B et B vient avant C, alors C vient avant A.",
   "answer": false,
   "explain": "L'ordre est A, B, C. Donc C vient en dernier, après A."
  },
  {
   "type": "text",
   "q": "Après l'hiver vient le…",
   "answer": [
    "printemps",
    "le printemps"
   ],
   "explain": "Les saisons sont : printemps, été, automne, hiver. Après l'hiver, le printemps recommence."
  },
  {
   "type": "order",
   "q": "Mets dans l'ordre du plus ancien au plus récent.",
   "items": [
    "Les dinosaures",
    "Les hommes de la Préhistoire",
    "Les Romains de l'Antiquité",
    "Aujourd'hui"
   ],
   "explain": "Les dinosaures sont les plus anciens. Puis la Préhistoire, puis les Romains, enfin aujourd'hui."
  }
 ]
});
