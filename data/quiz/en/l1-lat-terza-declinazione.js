QBANK("en", "l1-lat-terza-declinazione", {
  f: [
    { type: "mc", q: "What is the genitive singular of \"rex\"?", options: ["regis", "regi", "regem"], answer: 0, explain: "The genitive in -is identifies the 3rd declension: regis." },
    { type: "tf", q: "In the 3rd declension the nominative singular always has the same ending.", answer: false, explain: "It varies (rex, civis, nomen, mare…), which is why it is learned with the genitive." },
    { type: "text", q: "Write the accusative singular of \"civis\".", answer: ["civem"], explain: "Stem civ- + -em." },
    { type: "mc", q: "What is the plural of \"nomen\"?", options: ["nomines", "nomina", "nomini"], answer: 1, explain: "Neuters have the plural in -a." },
    { type: "mc", q: "\"Leges\" can be…", options: ["only genitive singular", "nominative, vocative or accusative plural of lex", "dative plural"], answer: 1, explain: "-es: nominative, vocative and accusative plural (but it is also the future of lego, 2nd sing.)." }
  ],
  m: [
    { type: "text", q: "Write the genitive plural of \"miles, militis\".", answer: ["militum"], explain: "Imparisyllabic: -um." },
    { type: "mc", q: "What is the genitive plural of \"hostis, hostis\"?", options: ["hostum", "hostium", "hostibus"], answer: 1, explain: "Parisyllabic noun with an i-stem: -ium." },
    { type: "text", q: "Write the dative plural of \"navis\".", answer: ["navibus"], explain: "-ibus for the dative and ablative plural." },
    { type: "mc", q: "How do you translate \"Rex militibus pecuniam dat\"?", options: ["The king gives money to the soldiers", "The soldiers give money to the king", "The king gives the soldiers to the money"], answer: 0, explain: "Rex subject; militibus dative plural; pecuniam accusative." },
    { type: "mc", q: "What is the ablative singular of \"mare\"?", options: ["mare", "mari", "mares"], answer: 1, explain: "Neuters in -e have the ablative singular in -i: mari." }
  ],
  d: [
    { type: "text", q: "Write the genitive plural of \"urbs, urbis\".", answer: ["urbium"], explain: "Monosyllable with two consonants (rb): -ium." },
    { type: "mc", q: "Which noun has the genitive plural \"patrum\"?", options: ["pater", "pars", "pes"], answer: 0, explain: "Pater, mater, frater, canis and iuvenis are exceptions: -um (pars has partium; pes has pedum)." },
    { type: "mc", q: "What is the nominative plural of \"mare\"?", options: ["mares", "maria", "mara"], answer: 1, explain: "Neuter in -e: plural in -ia (maria), genitive plural marium." },
    { type: "mc", q: "Which group has the neuter plural in -ia?", options: ["Neuters in -e, -al, -ar", "Neuters in -us", "Neuters in -men"], answer: 0, explain: "Mare ➜ maria; animal ➜ animalia; but tempus ➜ tempora, nomen ➜ nomina." },
    { type: "mc", q: "What is the ablative plural of \"flumen, fluminis\"?", options: ["fluminibus", "fluminum", "flumina"], answer: 0, explain: "Dative and ablative plural: -ibus." }
  ]
});
