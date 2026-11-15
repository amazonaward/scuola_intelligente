QBANK("fr", "p5-tec-ia-intro", {
  "f": [
    {
      "type": "mc",
      "q": "Que signifie « IA » ?",
      "options": [
        "Information automatique",
        "Internet avancé",
        "Intelligence artificielle"
      ],
      "answer": 2,
      "explain": "IA signifie intelligence artificielle."
    },
    {
      "type": "tf",
      "q": "Un chatbot peut donner de mauvaises réponses.",
      "answer": true,
      "explain": "Même s'il écrit bien, il peut se tromper ou inventer : il faut toujours vérifier."
    },
    {
      "type": "mc",
      "q": "Laquelle de ces choses utilise l'intelligence artificielle ?",
      "options": [
        "Le déverrouillage du téléphone par le visage",
        "Un feu tricolore minuté",
        "Une règle"
      ],
      "answer": 0,
      "explain": "Reconnaître un visage est une tâche que l'IA apprend à partir d'exemples ; un feu minuté et une règle n'apprennent rien."
    },
    {
      "type": "text",
      "q": "Avec quoi entraîne-t-on une IA ? Ce sont les exemples qu'on lui montre.",
      "answer": [
        "données",
        "les données",
        "données d'entraînement",
        "exemples",
        "les exemples"
      ],
      "explain": "Une IA apprend à partir de données : beaucoup d'exemples, souvent avec des étiquettes."
    },
    {
      "type": "tf",
      "q": "Une intelligence artificielle comprend les choses exactement comme un être humain.",
      "answer": false,
      "explain": "L'IA calcule des probabilités à partir des exemples vus ; elle ne comprend pas le monde comme une personne."
    }
  ],
  "m": [
    {
      "type": "mc",
      "q": "Comment le filtre antispam a-t-il appris à reconnaître le courrier indésirable ?",
      "options": [
        "Un programmeur a écrit une règle pour chaque e-mail possible",
        "À partir des e-mails que les utilisateurs ont signalés comme spam",
        "En faisant lire chaque e-mail par un employé"
      ],
      "answer": 1,
      "explain": "Les signalements des utilisateurs sont les étiquettes : le système apprend ce qui apparaît souvent dans les spams."
    },
    {
      "type": "num",
      "q": "Une équipe a 5 000 photos. 20 % servent à la vérification et le reste à l'entraînement. Combien de photos servent à l'entraînement ?",
      "answer": 4000,
      "unit": "photos",
      "explain": "20 % de 5 000 = 1 000 photos pour la vérification ; 5 000 − 1 000 = 4 000."
    },
    {
      "type": "mc",
      "q": "Un assistant vocal a été entraîné seulement avec des voix d'adultes. Que peut-il arriver avec la voix d'un enfant ?",
      "options": [
        "Il comprendra très bien, car toutes les voix sont pareilles",
        "Il se bloquera et éteindra le téléphone",
        "Il pourrait moins bien comprendre, car il n'a jamais entendu d'exemples semblables"
      ],
      "answer": 2,
      "explain": "L'IA n'apprend que des exemples qu'elle reçoit : avec des voix jamais entendues, elle peut se tromper davantage."
    },
    {
      "type": "order",
      "q": "Mets dans l'ordre le trajet de l'information dans un réseau de neurones.",
      "items": [
        "Couche d'entrée (par exemple les pixels)",
        "Couches cachées",
        "Couche de sortie (la réponse)"
      ],
      "explain": "Les données entrent, les couches cachées découvrent des formes de plus en plus complexes, la dernière couche donne la réponse."
    },
    {
      "type": "text",
      "q": "Comment s'appellent les nombres sur les liens d'un réseau de neurones, ajustés pendant l'entraînement ?",
      "answer": [
        "poids",
        "les poids",
        "le poids"
      ],
      "explain": "Entraîner un réseau, c'est ajuster ses poids petit à petit jusqu'à ce que les réponses soient justes."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Une IA est entraînée avec 1 000 photos de labradors et seulement 10 photos d'autres races de chiens. Quel est le problème le plus probable ?",
      "options": [
        "Elle reconnaîtra bien les labradors mais se trompera souvent avec les autres races",
        "Elle reconnaîtra toutes les races aussi bien",
        "Elle ne reconnaîtra même pas les labradors"
      ],
      "answer": 0,
      "explain": "Données déséquilibrées : elle a vu très peu d'exemples des autres races, donc elle se trompe plus souvent avec elles."
    },
    {
      "type": "tf",
      "q": "Si un chatbot écrit de façon très sûre et convaincante, sa réponse est forcément juste.",
      "answer": false,
      "explain": "Un chatbot peut écrire avec assurance même des choses inventées (hallucinations) : il faut vérifier sur des sources fiables."
    },
    {
      "type": "mc",
      "q": "Laquelle de ces tâches convient à une IA qui apprend à partir d'exemples, parce que ses règles sont difficiles à écrire ?",
      "options": [
        "Additionner deux nombres",
        "Reconnaître si une photo contient un chien",
        "Allumer une lumière tous les jours à 18 h"
      ],
      "answer": 1,
      "explain": "Additionner et allumer à heure fixe se font avec des règles simples ; reconnaître un chien est trop varié, donc on l'apprend par exemples."
    },
    {
      "type": "num",
      "q": "Une IA regarde 200 nouvelles photos et en reconnaît correctement 170. Quel est le pourcentage de bonnes réponses ?",
      "answer": 85,
      "unit": "%",
      "explain": "170 ÷ 200 = 0,85, soit 85 sur 100 = 85 %."
    },
    {
      "type": "text",
      "q": "Comment s'appelle le programme d'IA qui a battu le champion Lee Sedol au go en 2016 ?",
      "answer": [
        "alphago",
        "alpha go"
      ],
      "explain": "AlphaGo a appris en étudiant des parties humaines et en jouant des millions de parties contre lui-même."
    }
  ]
});
