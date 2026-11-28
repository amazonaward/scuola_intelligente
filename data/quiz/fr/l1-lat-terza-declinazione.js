QBANK("fr", "l1-lat-terza-declinazione", {
  f: [
    { type: "mc", q: "Quel est le génitif singulier de « rex » ?", options: ["regis", "regi", "regem"], answer: 0, explain: "Le génitif en -is identifie la 3e déclinaison : regis." },
    { type: "tf", q: "Dans la 3e déclinaison, le nominatif singulier a toujours la même désinence.", answer: false, explain: "Il est variable (rex, civis, nomen, mare…), c'est pourquoi on l'apprend avec le génitif." },
    { type: "text", q: "Écris l'accusatif singulier de « civis ».", answer: ["civem"], explain: "Radical civ- + -em." },
    { type: "mc", q: "Quel est le pluriel de « nomen » ?", options: ["nomines", "nomina", "nomini"], answer: 1, explain: "Les neutres ont le pluriel en -a." },
    { type: "mc", q: "« Leges » peut être…", options: ["seulement un génitif singulier", "le nominatif, vocatif ou accusatif pluriel de lex", "un datif pluriel"], answer: 1, explain: "-es : nominatif, vocatif et accusatif pluriels (mais c'est aussi le futur de lego, 2e sing.)." }
  ],
  m: [
    { type: "text", q: "Écris le génitif pluriel de « miles, militis ».", answer: ["militum"], explain: "Imparisyllabique : -um." },
    { type: "mc", q: "Quel est le génitif pluriel de « hostis, hostis » ?", options: ["hostum", "hostium", "hostibus"], answer: 1, explain: "Parisyllabique à thème en -i : -ium." },
    { type: "text", q: "Écris le datif pluriel de « navis ».", answer: ["navibus"], explain: "-ibus pour le datif et l'ablatif pluriels." },
    { type: "mc", q: "Comment traduit-on « Rex militibus pecuniam dat » ?", options: ["Le roi donne de l'argent aux soldats", "Les soldats donnent de l'argent au roi", "Le roi donne les soldats à l'argent"], answer: 0, explain: "Rex sujet ; militibus datif pluriel ; pecuniam accusatif." },
    { type: "mc", q: "Quel est l'ablatif singulier de « mare » ?", options: ["mare", "mari", "mares"], answer: 1, explain: "Les neutres en -e ont l'ablatif singulier en -i : mari." }
  ],
  d: [
    { type: "text", q: "Écris le génitif pluriel de « urbs, urbis ».", answer: ["urbium"], explain: "Monosyllabe avec deux consonnes (rb) : -ium." },
    { type: "mc", q: "Quel nom a le génitif pluriel « patrum » ?", options: ["pater", "pars", "pes"], answer: 0, explain: "Pater, mater, frater, canis et iuvenis sont des exceptions en -um (pars fait partium ; pes fait pedum)." },
    { type: "mc", q: "Quel est le nominatif pluriel de « mare » ?", options: ["mares", "maria", "mara"], answer: 1, explain: "Neutre en -e : pluriel en -ia (maria), génitif pluriel marium." },
    { type: "mc", q: "Quel groupe a le neutre pluriel en -ia ?", options: ["Les neutres en -e, -al, -ar", "Les neutres en -us", "Les neutres en -men"], answer: 0, explain: "Mare ➜ maria ; animal ➜ animalia ; mais tempus ➜ tempora, nomen ➜ nomina." },
    { type: "mc", q: "Quel est l'ablatif pluriel de « flumen, fluminis » ?", options: ["fluminibus", "fluminum", "flumina"], answer: 0, explain: "Datif et ablatif pluriels : -ibus." }
  ]
});
