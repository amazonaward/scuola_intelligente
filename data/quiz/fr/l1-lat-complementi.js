QBANK("fr", "l1-lat-complementi", {
  f: [
    { type: "mc", q: "Quel cas exprime le complément du nom ?", options: ["génitif", "datif", "vocatif"], answer: 0, explain: "Le génitif répond à « de qui ? de quoi ? »." },
    { type: "mc", q: "Comment s'exprime le complément de moyen ?", options: ["ablatif seul", "cum + ablatif", "a/ab + ablatif"], answer: 0, explain: "Avec quoi ? Ablatif sans préposition." },
    { type: "text", q: "Traduis « avec les amis » (amicus, -i) : complément d'accompagnement.", answer: ["cum amicis"], explain: "Accompagnement : cum + ablatif pluriel." },
    { type: "mc", q: "« In silva » signifie…", options: ["dans la forêt", "vers la forêt", "de la forêt"], answer: 0, explain: "In + ablatif : lieu où l'on est." },
    { type: "tf", q: "Le complément d'agent s'exprime par a/ab + ablatif.", answer: true, explain: "Avec un verbe passif et un nom de personne." }
  ],
  m: [
    { type: "mc", q: "Comment dit-on « de Rome » (lieu d'où l'on vient) ?", options: ["a Roma", "Roma (ablatif sans préposition)", "Romam"], answer: 1, explain: "Les noms de villes emploient l'ablatif seul pour le lieu d'où l'on vient." },
    { type: "text", q: "Comment dit-on « avec vous » (un seul mot) ?", answer: ["vobiscum"], explain: "Cum se place après les pronoms personnels : vobiscum." },
    { type: "mc", q: "« Tres dies » (accusatif) est…", options: ["une durée", "une date", "une cause"], answer: 0, explain: "L'accusatif de temps indique la durée : pendant trois jours." },
    { type: "mc", q: "« Ob metum » est un complément…", options: ["de cause", "de manière", "d'accompagnement"], answer: 0, explain: "Ob + accusatif : cause (à cause de la peur)." },
    { type: "mc", q: "« De bello » indique…", options: ["le sujet traité", "le lieu d'où l'on vient", "le temps"], answer: 0, explain: "De + ablatif : sujet traité (sur la guerre) ; mais avec les verbes de mouvement, de peut aussi indiquer le lieu d'où l'on vient (« du haut de »)." }
  ],
  d: [
    { type: "mc", q: "« In urbem » et « in urbe » : quelle est la différence ?", options: ["lieu où l'on va / lieu où l'on est", "aucune", "agent / moyen"], answer: 0, explain: "In + accusatif = mouvement vers ; in + ablatif = sans mouvement." },
    { type: "text", q: "Comment dit-on « à Athènes » (lieu où l'on est ; Athenae, -arum) ?", answer: ["athenis"], explain: "Noms de villes au pluriel : l'ablatif (Athenis) exprime le lieu où l'on est." },
    { type: "mc", q: "« Milites ab hostibus vincuntur » signifie…", options: ["Les soldats vainquent les ennemis", "Les soldats sont vaincus par les ennemis", "Les soldats vainquent avec les ennemis"], answer: 1, explain: "Vincuntur est passif ; ab hostibus = agent." },
    { type: "mc", q: "Pourquoi « gladio » n'a-t-il pas de préposition dans « gladio pugnat » ?", options: ["C'est un moyen : nom de chose, ablatif seul", "C'est un agent", "C'est un accompagnement"], answer: 0, explain: "Les noms de choses au complément de moyen n'ont pas de préposition." },
    { type: "mc", q: "« Domi » veut dire…", options: ["à la maison (sans mouvement)", "vers la maison", "de la maison"], answer: 0, explain: "Domus a le locatif domi : à la maison ; domum = vers la maison ; domo = de la maison." }
  ]
});
