QBANK("fr", "l2-ita-sintassi-periodo", {
  f: [
    { type: "mc", q: "Combien de propositions y a-t-il dans « Je mange pendant que je lis » ?", options: ["2", "1", "3", "4"], answer: 0, explain: "Deux verbes, deux propositions : mange et lis." },
    { type: "mc", q: "Quelle conjonction est une conjonction de coordination ?", options: ["mais", "parce que", "quand", "afin que"], answer: 0, explain: "« Mais » coordonne ; les autres introduisent des subordonnées." },
    { type: "tf", q: "La proposition principale a un sens complet à elle seule.", answer: true, explain: "Elle ne dépend d'aucune autre proposition." },
    { type: "text", q: "Comment s'appelle la proposition qui dépend d'une autre ?", answer: ["subordonnée", "subordonnee", "la subordonnée", "dépendante", "dependante"], explain: "La subordonnée complète le sens de la proposition dont elle dépend." },
    { type: "mc", q: "« J'ai étudié, donc je suis tranquille » : « donc » introduit une coordonnée :", options: ["Conclusive", "Adversative", "Disjonctive", "Copulative"], answer: 0, explain: "Elle indique une conséquence." }
  ],
  m: [
    { type: "mc", q: "« Je dis que tu as raison » : la subordonnée est :", options: ["Complétive COD", "Complétive sujet", "Finale", "Temporelle"], answer: 0, explain: "Elle répond à la question « qu'est-ce que je dis ? »." },
    { type: "mc", q: "« Quand tu arriveras, je t'appellerai » : la subordonnée est :", options: ["Temporelle", "Causale", "Concessive", "Comparative"], answer: 0, explain: "Elle indique le temps." },
    { type: "tf", q: "« En étudiant chaque jour, tu progresses » contient une subordonnée implicite.", answer: true, explain: "Le verbe est au gérondif : un mode non personnel." },
    { type: "text", q: "Comment s'appelle la proposition introduite par le pronom relatif « que », comme dans « le livre que je lis » ?", answer: ["relative", "la relative", "proposition relative", "subordonnée relative"], explain: "La relative se rapporte à un nom de la proposition dont elle dépend (son antécédent)." },
    { type: "order", q: "Range du système hypothétique le plus réel au plus irréel.", items: ["S'il pleut, je reste à la maison", "S'il pleuvait, je resterais à la maison", "S'il avait plu, je serais resté à la maison"], explain: "Réel, potentiel, irréel." }
  ],
  d: [
    { type: "mc", q: "Dans « Bien qu'il fût tard, il continua à travailler parce qu'il voulait finir », combien de degrés de subordination y a-t-il par rapport à la principale ?", options: ["Deux subordonnées, toutes deux du 1er degré", "Une du 1er et une du 2e degré", "Aucune subordonnée", "Deux coordonnées"], answer: 0, explain: "Les deux (concessive et causale) dépendent de la principale « il continua à travailler »." },
    { type: "mc", q: "Quelle phrase contient une consécutive ?", options: ["Il était si fatigué qu'il s'endormit", "J'étudie pour apprendre", "Si tu étudies, tu réussis", "Pendant que je marche, je pense"], answer: 0, explain: "Si... que indique une conséquence." },
    { type: "tf", q: "Après « bien que », on emploie l'indicatif.", answer: false, explain: "Après « bien que », on emploie le subjonctif ; après « même si », l'indicatif." },
    { type: "text", q: "Comment s'appelle la partie du système hypothétique introduite par « si » ?", answer: ["protase", "la protase", "protasi"], explain: "L'apodose exprime la conséquence." },
    { type: "mc", q: "Quelle transformation rend implicite « Comme j'ai étudié, je suis serein » ?", options: ["Ayant étudié, je suis serein", "Puisque j'étudie, je suis serein", "J'ai étudié donc je suis serein", "Si j'ai étudié, je suis serein"], answer: 0, explain: "Le participe passé composé (ayant étudié) rend la causale implicite." }
  ]
});
