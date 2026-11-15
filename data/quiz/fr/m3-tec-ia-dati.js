QBANK("fr", "m3-tec-ia-dati", {
 "f": [
  {
   "type": "mc",
   "q": "Laquelle de ces données est non structurée ?",
   "options": [
    "Un tableau de notes",
    "Une photographie",
    "Une liste de prix"
   ],
   "answer": 1,
   "explain": "Photos, textes, audio et vidéos ne sont pas rangés en tableaux : ce sont des données non structurées, la grande majorité."
  },
  {
   "type": "tf",
   "q": "Un grand modèle de langage (LLM) est entraîné surtout à prédire le mot suivant d'un texte.",
   "answer": true,
   "explain": "Vrai : en répétant la prédiction très souvent, le modèle écrit des phrases entières."
  },
  {
   "type": "text",
   "q": "Comment s'appelle la plus petite unité d'information d'un ordinateur, qui vaut 0 ou 1 ?",
   "answer": [
    "bit",
    "le bit",
    "un bit"
   ],
   "explain": "Le bit (0 ou 1) est l'unité de base : toute donnée dans l'ordinateur devient une suite de bits."
  },
  {
   "type": "mc",
   "q": "À quel jeu le programme AlphaGo a-t-il battu le champion Lee Sedol en 2016 ?",
   "options": [
    "Échecs",
    "Dames",
    "Go"
   ],
   "answer": 2,
   "explain": "AlphaGo gagna au Go, un jeu avec plus de positions possibles que d'atomes dans l'univers observable."
  },
  {
   "type": "num",
   "q": "En quelle année l'ordinateur Deep Blue battit-il le champion d'échecs Garry Kasparov ?",
   "answer": 1997,
   "explain": "Deep Blue d'IBM gagna en 1997, surtout par calcul en force brute."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Combien y a-t-il de bits dans 3 octets ? (1 octet = 8 bits)",
   "answer": 24,
   "unit": "bits",
   "explain": "3 × 8 = 24 bits."
  },
  {
   "type": "mc",
   "q": "Une plateforme regroupe les utilisateurs aux goûts similaires, sans aucune étiquette prédéfinie. Quel type d'apprentissage utilise-t-elle ?",
   "options": [
    "Supervisé",
    "Non supervisé",
    "Aucun apprentissage"
   ],
   "answer": 1,
   "explain": "Sans étiquettes, le modèle trouve seul des groupes et des motifs dans les données : c'est l'apprentissage non supervisé."
  },
  {
   "type": "mc",
   "q": "Qu'est-ce que la « bulle de filtres » (filter bubble) ?",
   "options": [
    "Ne voir presque que des contenus et des idées semblables à ceux que l'on aime déjà",
    "Un filtre qui élimine les virus de l'ordinateur",
    "Une erreur du disque dur"
   ],
   "answer": 0,
   "explain": "Les suggestions basées sur tes goûts peuvent t'enfermer dans une bulle et te montrer toujours les mêmes idées."
  },
  {
   "type": "tf",
   "q": "Un neurone artificiel n'envoie un signal aux neurones suivants que si la somme pondérée de ses entrées dépasse un seuil.",
   "answer": true,
   "explain": "Vrai : le neurone multiplie les entrées par les poids, additionne et « s'active » si le seuil est dépassé."
  },
  {
   "type": "order",
   "q": "Mets dans l'ordre les étapes par lesquelles un chatbot (LLM) écrit une phrase.",
   "items": [
    "Il reçoit le texte de départ",
    "Il calcule la probabilité des mots suivants possibles",
    "Il choisit le mot le plus adapté",
    "Il ajoute le mot et répète le cycle"
   ],
   "explain": "Le modèle ne « connaît » pas les faits : il calcule des probabilités et répète le cycle mot après mot."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Un modèle a 99 % de bonnes réponses sur les données d'entraînement, mais seulement 70 % sur des données de test jamais vues. Quel est le problème le plus probable ?",
   "options": [
    "Le modèle a « mémorisé » les exemples au lieu d'apprendre à généraliser",
    "L'ordinateur a trop peu de mémoire RAM",
    "Les données de test sont trop faciles",
    "Le modèle est trop simple et a trop peu appris"
   ],
   "answer": 0,
   "explain": "C'est le surapprentissage (overfitting) : le modèle réussit sur les données déjà vues mais se trompe sur les nouvelles."
  },
  {
   "type": "num",
   "q": "Un neurone a pour entrées 2 et 3, poids 1,5 et −2 et biais 4. Combien vaut la somme pondérée plus le biais ?",
   "answer": 1,
   "explain": "2 × 1,5 = 3 ; 3 × (−2) = −6 ; 3 − 6 + 4 = 1."
  },
  {
   "type": "mc",
   "q": "Une application de retouche photo demande l'accès à tous tes contacts et à ta position pour fonctionner. Quel principe de protection des données est ignoré ?",
   "options": [
    "On ne devrait collecter que les données vraiment nécessaires à l'objectif (minimisation)",
    "Les données personnelles doivent toujours être publiées",
    "Plus on collecte de données, mieux c'est pour l'utilisateur",
    "Le consentement n'est jamais nécessaire"
   ],
   "answer": 0,
   "explain": "Le RGPD demande de ne collecter que les données nécessaires : une appli photo n'a pas besoin des contacts."
  },
  {
   "type": "tf",
   "q": "L'ordinateur Deep Blue battit Kasparov en 1997 en utilisant surtout des réseaux de neurones comme ceux des chatbots modernes.",
   "answer": false,
   "explain": "Faux : Deep Blue reposait surtout sur le calcul en force brute ; les réseaux de neurones ont servi en 2016 pour AlphaGo."
  },
  {
   "type": "mc",
   "q": "Une maladie touche 1 personne sur 1000. Un modèle répond toujours « sain » et a 99,9 % de précision. Pourquoi n'est-ce pas un bon modèle ?",
   "options": [
    "Il ne détecte jamais aucun malade : la précision seule trompe quand les cas sont rares",
    "Parce que 99,9 % est trop bas pour un modèle",
    "Parce qu'il devrait toujours répondre « malade »",
    "Parce qu'il n'utilise pas assez de bits"
   ],
   "answer": 0,
   "explain": "Le modèle se trompe justement sur le seul cas qui compte : il faut regarder aussi combien de malades il détecte, pas seulement le pourcentage global."
  }
 ]
});
