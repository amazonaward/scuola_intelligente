QBANK("fr", "l2-ita-testo-argomentativo", {
  f: [
    { type: "mc", q: "Comment s'appelle l'idée principale que l'on veut démontrer ?", options: ["Thèse", "Titre", "Exemple", "Didascalie"], answer: 0, explain: "La thèse est l'affirmation centrale du texte." },
    { type: "tf", q: "Les arguments servent à défendre la thèse.", answer: true, explain: "Ce sont les raisons qui la rendent crédible." },
    { type: "mc", q: "Quelle partie clôt le texte ?", options: ["Conclusion", "Introduction", "Antithèse", "Préambule"], answer: 0, explain: "La conclusion récapitule la thèse." },
    { type: "text", q: "Comment s'appelle la thèse contraire à celle de l'auteur ?", answer: ["antithèse", "antithese", "l'antithèse", "thèse adverse", "these adverse"], explain: "L'antithèse est présentée pour être ensuite réfutée." },
    { type: "mc", q: "Quel connecteur introduit un argument supplémentaire ?", options: ["De plus", "Cependant", "Donc", "Tandis que"], answer: 0, explain: "« De plus » ajoute." }
  ],
  m: [
    { type: "mc", q: "« Selon de nombreux experts, dormir peu réduit la concentration » est un argument :", options: ["D'autorité", "Par analogie", "Narratif", "Poétique"], answer: 0, explain: "On s'appuie sur l'opinion d'experts compétents." },
    { type: "tf", q: "Un texte argumentatif ne doit jamais prendre en compte l'opinion contraire.", answer: false, explain: "La prendre en compte et la réfuter rend le texte plus solide." },
    { type: "mc", q: "Qui a écrit la Rhétorique, qui parle du logos, de l'ethos et du pathos ?", options: ["Aristote", "Platon", "Cicéron", "Sénèque"], answer: 0, explain: "Aristote a étudié les moyens de la persuasion." },
    { type: "text", q: "Comment s'appelle le raisonnement déductif à deux prémisses et une conclusion ?", answer: ["syllogisme", "le syllogisme"], explain: "Ex. : Tous les hommes sont mortels ; Socrate est un homme ; Socrate est mortel." },
    { type: "order", q: "Range les parties.", items: ["Problème", "Thèse", "Arguments", "Conclusion"], explain: "Le texte va du problème à la conclusion." }
  ],
  d: [
    { type: "mc", q: "« Soit tu es avec nous, soit tu es contre nous » est un :", options: ["Faux dilemme", "Réfutation", "Analogie", "Thèse"], answer: 0, explain: "Il réduit les possibilités à deux, en ignorant les autres." },
    { type: "mc", q: "Quelle technique déforme la thèse de l'adversaire pour la vaincre plus facilement ?", options: ["L'homme de paille", "Le syllogisme", "La gradation", "L'exemple"], answer: 0, explain: "On attaque une version caricaturale de la thèse." },
    { type: "tf", q: "Si deux événements se produisent l'un après l'autre, le premier est toujours la cause du second.", answer: false, explain: "C'est le sophisme post hoc : la succession ne prouve pas la causalité." },
    { type: "mc", q: "Pourquoi une phrase prudente (« certaines études suggèrent... ») peut-elle être plus convaincante ?", options: ["Parce qu'elle est plus honnête et moins attaquable", "Parce qu'elle est plus longue", "Parce qu'elle évite les arguments", "Parce qu'elle est émotive"], answer: 0, explain: "Elle évite les généralisations abusives et renforce la crédibilité." },
    { type: "text", q: "Comment s'appelle le sophisme « Tout le monde le fait, donc c'est juste » ?", answer: ["appel à la majorité", "appel a la majorite", "ad populum", "appel au peuple", "argument ad populum"], explain: "Le nombre de personnes ne suffit pas à prouver la vérité ou la justesse d'une idée." }
  ]
});
