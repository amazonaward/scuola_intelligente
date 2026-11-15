QBANK("fr", "m1-geo-popolazione-citta", {
 "f": [
  {
   "type": "tf",
   "q": "En Italie, le recensement est réalisé par l'ISTAT, l'Institut national de la statistique.",
   "answer": true,
   "explain": "L'ISTAT collecte et traite les données sur la population italienne."
  },
  {
   "type": "mc",
   "q": "Qu'est-ce que le taux de natalité ?",
   "options": [
    "Les décès pour 1000 habitants en un an",
    "Le nombre d'enfants de chaque famille",
    "Les naissances pour 1000 habitants en un an"
   ],
   "answer": 2,
   "explain": "Le taux de natalité compte les naissances pour 1000 habitants en un an ; le taux de mortalité compte les décès."
  },
  {
   "type": "mc",
   "q": "Quel continent abrite environ la moitié de l'humanité ?",
   "options": [
    "Asie",
    "Europe",
    "Afrique"
   ],
   "answer": 0,
   "explain": "Environ la moitié de la population mondiale vit en Asie, en Chine, en Inde, au Bangladesh, au Pakistan et en Indonésie."
  },
  {
   "type": "text",
   "q": "Comment s'appelle la science qui étudie la population ?",
   "answer": [
    "démographie",
    "la démographie"
   ],
   "explain": "La démographie étudie combien nous sommes, notre âge, où nous vivons et comment la population évolue."
  },
  {
   "type": "mc",
   "q": "Que signifie « urbanisation » ?",
   "options": [
    "Le déplacement des personnes des villes vers les campagnes",
    "Le déplacement des personnes vers les villes et la croissance des villes",
    "La construction de nouvelles routes"
   ],
   "answer": 1,
   "explain": "L'urbanisation est la croissance des villes, due surtout à l'arrivée de population venue des campagnes."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Un pays a une densité de 80 hab./km² et une superficie de 25 000 km². Combien d'habitants compte-t-il ?",
   "answer": 2000000,
   "tol": 0,
   "explain": "Habitants = densité × superficie = 80 × 25 000 = 2 000 000."
  },
  {
   "type": "num",
   "q": "Dans une ville de 50 000 habitants, 400 bébés naissent en un an. Quel est le taux de natalité (naissances pour 1000 habitants) ?",
   "answer": 8,
   "tol": 0,
   "unit": "‰",
   "explain": "50 000 : 1000 = 50 groupes de 1000 habitants ; 400 : 50 = 8 naissances pour 1000 habitants."
  },
  {
   "type": "tf",
   "q": "Si la pyramide des âges d'un pays a une base très large, ce pays compte beaucoup d'enfants et de jeunes.",
   "answer": true,
   "explain": "La base représente les plus jeunes : plus elle est large, plus il y a d'enfants (pays jeune)."
  },
  {
   "type": "mc",
   "q": "Un paysan quitte son village frappé par la sécheresse pour chercher du travail dans une ville avec beaucoup d'usines. Quelle paire décrit les deux facteurs ?",
   "options": [
    "Sécheresse = facteur d'attraction ; usines = facteur de répulsion",
    "Sécheresse = facteur de répulsion ; usines = facteur d'attraction",
    "Ce sont tous deux des facteurs de répulsion",
    "Ce sont tous deux des facteurs d'attraction"
   ],
   "answer": 1,
   "explain": "Ce qui fait partir (sécheresse) est un facteur de répulsion ; ce qui attire (travail en usine) est un facteur d'attraction."
  },
  {
   "type": "order",
   "q": "Classe du plus petit au plus grand nombre d'habitants.",
   "items": [
    "Rome (environ 2,75 millions)",
    "Italie (environ 59 millions)",
    "Union européenne (environ 450 millions)",
    "Monde (environ 8,2 milliards)"
   ],
   "explain": "2,75 millions < 59 millions < 450 millions < 8,2 milliards."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Une île de 24 000 habitants a une densité de 120 hab./km². Si 6 000 habitants de plus arrivent et que la superficie ne change pas, quelle est la nouvelle densité (hab./km²) ?",
   "answer": 150,
   "tol": 0,
   "unit": "ab/km²",
   "explain": "Superficie = 24 000 : 120 = 200 km². Nouveaux habitants : 30 000. Nouvelle densité : 30 000 : 200 = 150 hab./km²."
  },
  {
   "type": "mc",
   "q": "Marco calcule la densité d'un pays de 1 000 000 d'habitants et 500 km² en faisant 500 : 1 000 000 = 0,0005. Quelle est son erreur ?",
   "options": [
    "Il a divisé la superficie par les habitants au lieu des habitants par la superficie",
    "Il a oublié de multiplier par 100",
    "La densité se calcule en additionnant habitants et superficie"
   ],
   "answer": 0,
   "explain": "La densité est habitants : superficie = 1 000 000 : 500 = 2 000 hab./km²."
  },
  {
   "type": "tf",
   "q": "La population d'un pays peut augmenter même si chaque année il meurt plus de personnes qu'il n'en naît.",
   "answer": true,
   "explain": "Un solde naturel négatif peut être compensé par le solde migratoire, si arrivent plus d'immigrés que ne partent d'émigrés."
  },
  {
   "type": "mc",
   "q": "Pourquoi la population mondiale a-t-elle augmenté si rapidement au XXe siècle (explosion démographique) ?",
   "options": [
    "Parce que les migrations internationales ont beaucoup augmenté",
    "Parce que l'espérance de vie a diminué",
    "Parce que la mortalité a baissé grâce à la médecine, à l'hygiène et à l'alimentation"
   ],
   "answer": 2,
   "explain": "Moins de décès (surtout d'enfants) avec autant de naissances font croître vite la population. Les migrations ne changent pas le total mondial."
  },
  {
   "type": "num",
   "q": "Un pays compte 40 millions d'habitants et 75 % vivent dans les villes. Combien de millions de personnes vivent à la campagne ?",
   "answer": 10,
   "tol": 0,
   "unit": "millions",
   "explain": "À la campagne vivent 100 % − 75 % = 25 %. 25 % de 40 millions = 40 : 4 = 10 millions."
  }
 ]
});
