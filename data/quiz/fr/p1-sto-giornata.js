QBANK("fr", "p1-sto-giornata", {
 "f": [
  {
   "type": "mc",
   "q": "Que voit-on dans le ciel la nuit ?",
   "options": [
    "Les étoiles",
    "Le Soleil",
    "L'arc-en-ciel"
   ],
   "answer": 0,
   "explain": "La nuit, le ciel est sombre et on voit les étoiles."
  },
  {
   "type": "tf",
   "q": "Le samedi vient après le vendredi.",
   "answer": true,
   "explain": "Vendredi, samedi, dimanche : le samedi vient après le vendredi."
  },
  {
   "type": "mc",
   "q": "Quel jour vient avant le dimanche ?",
   "options": [
    "Le lundi",
    "Le samedi",
    "Le jeudi"
   ],
   "answer": 1,
   "explain": "Le samedi vient avant le dimanche."
  },
  {
   "type": "text",
   "q": "Comment s'appelle le repas du soir ?",
   "answer": [
    "dîner",
    "diner",
    "le dîner",
    "le diner"
   ],
   "explain": "Le soir, on mange le dîner."
  },
  {
   "type": "order",
   "q": "Mets la journée de Luca dans l'ordre.",
   "items": [
    "Je me réveille",
    "Je prends le petit-déjeuner",
    "Je vais à l'école",
    "Je vais dormir"
   ],
   "explain": "D'abord on se réveille, puis petit-déjeuner, école, et à la fin on dort."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Combien y a-t-il de jours du lundi au vendredi ? Compte aussi lundi et vendredi.",
   "answer": 5,
   "explain": "Lundi, mardi, mercredi, jeudi, vendredi : cela fait 5 jours."
  },
  {
   "type": "mc",
   "q": "Aujourd'hui, c'est mercredi. Dans deux jours, ce sera…",
   "options": [
    "jeudi",
    "samedi",
    "vendredi"
   ],
   "answer": 2,
   "explain": "Mercredi + 1 = jeudi, + 2 = vendredi."
  },
  {
   "type": "tf",
   "q": "Le Soleil se lève le soir.",
   "answer": false,
   "explain": "Le Soleil se lève le matin et se couche le soir."
  },
  {
   "type": "text",
   "q": "Hier, c'était dimanche. Quel jour sommes-nous aujourd'hui ?",
   "answer": [
    "lundi",
    "le lundi"
   ],
   "explain": "Le jour après le dimanche, c'est le lundi."
  },
  {
   "type": "order",
   "q": "Mets ces jours dans l'ordre, du premier au dernier.",
   "items": [
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche"
   ],
   "explain": "Dans la semaine, ils viennent ainsi : jeudi, vendredi, samedi, dimanche."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Pourquoi ne voit-on pas le Soleil la nuit ?",
   "options": [
    "Le Soleil s'éteint",
    "Notre côté de la Terre est tourné de l'autre côté",
    "La Lune le cache toujours"
   ],
   "answer": 1,
   "explain": "La Terre tourne sur elle-même : la nuit, notre côté n'est pas tourné vers le Soleil."
  },
  {
   "type": "num",
   "q": "Aujourd'hui, c'est lundi. Dans combien de jours sera-t-on de nouveau lundi ?",
   "answer": 7,
   "explain": "Une semaine entière passe : cela fait 7 jours.",
   "unit": "jours"
  },
  {
   "type": "tf",
   "q": "Si aujourd'hui c'est vendredi, après-demain c'est dimanche.",
   "answer": true,
   "explain": "Demain, c'est samedi et après-demain, c'est dimanche."
  },
  {
   "type": "text",
   "q": "Hier, c'était samedi. Quel jour sera-t-on demain ?",
   "answer": [
    "lundi",
    "le lundi"
   ],
   "explain": "Hier samedi, aujourd'hui dimanche, demain lundi."
  },
  {
   "type": "order",
   "q": "Aujourd'hui, c'est mardi. Mets dans l'ordre : hier, aujourd'hui, demain, après-demain.",
   "items": [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi"
   ],
   "explain": "Hier lundi, aujourd'hui mardi, demain mercredi, après-demain jeudi."
  }
 ]
});
