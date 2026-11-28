QBANK("fr", "l1-lat-metodo-traduzione", {
  f: [
    { type: "mc", q: "Où se trouve en général le verbe dans une phrase latine ?", options: ["À la fin", "Au début", "Après le sujet"], answer: 0, explain: "L'ordre habituel est sujet – compléments – COD – verbe." },
    { type: "tf", q: "En latin, il existe des articles définis.", answer: false, explain: "Il n'y a pas d'articles : on les ajoute en français." },
    { type: "mc", q: "Comment traduit-on « et » ?", options: ["et", "mais", "ou"], answer: 0, explain: "Et = et ; sed = mais ; aut = ou." },
    { type: "mc", q: "Que cherche-t-on dans le dictionnaire ?", options: ["La forme qui figure dans la phrase", "L'entrée (nominatif ou 1re personne)", "La dernière lettre"], answer: 1, explain: "On cherche l'entrée, en remontant à partir de la désinence." },
    { type: "mc", q: "Le sujet d'une phrase latine est au…", options: ["nominatif", "accusatif", "ablatif"], answer: 0, explain: "Au nominatif, accordé avec le verbe." }
  ],
  m: [
    { type: "mc", q: "Traduis : « Puella rosam amat ».", options: ["La jeune fille aime la rose", "La rose aime la jeune fille", "Les jeunes filles aiment les roses"], answer: 0, explain: "Puella nom. sing. ; rosam acc. sing. ; amat 3e sing." },
    { type: "text", q: "Quelle est l'entrée de « servorum » ? (nominatif singulier)", answer: ["servus"], explain: "-orum = gén. plur. de la 2e déclinaison : servus, -i." },
    { type: "mc", q: "« Nam » se traduit par…", options: ["donc", "en effet, car", "aussi"], answer: 1, explain: "Nam = en effet, car ; igitur = donc ; etiam = aussi." },
    { type: "mc", q: "« Pueri puellaeque » signifie…", options: ["les garçons et les filles", "le garçon de la fille", "les filles des garçons"], answer: 0, explain: "-que = et." },
    { type: "tf", q: "Le nombre de verbes à un mode personnel indique combien il y a de propositions dans une phrase.", answer: true, explain: "Chaque verbe à un mode personnel est le noyau d'une proposition." }
  ],
  d: [
    { type: "mc", q: "Traduis : « Servi a dominis vocantur ».", options: ["Les esclaves sont appelés par les maîtres", "Les esclaves appellent les maîtres", "Les maîtres sont appelés par les esclaves"], answer: 0, explain: "Vocantur est passif ; a dominis = agent." },
    { type: "mc", q: "Dans « Reges milites vocant », quel mot est le sujet ?", options: ["milites", "reges", "vocant"], answer: 1, explain: "Reges et milites ont la même forme au pluriel ; le sens (les rois appellent les soldats) et l'ordre le plus naturel désignent reges comme sujet." },
    { type: "mc", q: "« Nautae cum magna cura navigabant » : « cum magna cura » est…", options: ["accompagnement", "manière", "moyen"], answer: 1, explain: "Cum + ablatif d'un nom abstrait : manière (avec grand soin)." },
    { type: "text", q: "Quelle est l'entrée de « hostibus » ? (nominatif singulier)", answer: ["hostis"], explain: "-ibus : dat./abl. pluriel de la 3e ; hostis, hostis." },
    { type: "mc", q: "Pourquoi « leges » peut-il avoir deux analyses ?", options: ["C'est à la fois un nom (les lois) et un verbe (tu liras)", "C'est une erreur", "Seulement pour le neutre"], answer: 0, explain: "Leges = nominatif/accusatif pluriel de lex, ou 2e sing. du futur de lego." }
  ]
});
