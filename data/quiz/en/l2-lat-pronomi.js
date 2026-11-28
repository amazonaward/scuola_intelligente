QBANK("en", "l2-lat-pronomi", {
  f: [
    { type: "mc", q: "What is the accusative of \"tu\"?", options: ["te", "tibi", "tui"], answer: 0, explain: "Tu, tui, tibi, te, te." },
    { type: "text", q: "How do you say \"with me\" in Latin?", answer: ["mecum"], explain: "Cum goes after the pronoun and is joined to it: mecum." },
    { type: "mc", q: "Which pronoun means \"that\" (far away)?", options: ["hic", "iste", "ille"], answer: 2, explain: "Hic = this; iste = that (near you); ille = that (far away)." },
    { type: "tf", q: "\"Nemo\" means \"no one\".", answer: true, explain: "Nemo, neminem, nemini… An indefinite meaning no one." },
    { type: "text", q: "Write the feminine nominative singular of the relative pronoun.", answer: ["quae"], explain: "Qui, quae, quod." }
  ],
  m: [
    { type: "text", q: "Write the genitive singular of \"is, ea, id\".", answer: ["eius"], explain: "Eius for all genders." },
    { type: "mc", q: "How do you translate \"Caesar suos milites laudat\"?", options: ["Caesar praises his own soldiers", "Caesar praises someone else's soldiers", "The soldiers praise Caesar"], answer: 0, explain: "Suos is reflexive: they belong to the subject." },
    { type: "mc", q: "How do you translate \"si quis venit\"?", options: ["if anyone comes", "if no one comes", "who comes"], answer: 0, explain: "After si, aliquis becomes quis." },
    { type: "text", q: "Write the genitive singular of \"totus\".", answer: ["totius"], explain: "Totus is one of the nine \"unus nauta\" adjectives: gen. -ius." },
    { type: "mc", q: "What is the neuter of the interrogative pronoun \"quis\"?", options: ["quod", "quid", "quae"], answer: 1, explain: "Quis (m./f.), quid (n.)." }
  ],
  d: [
    { type: "text", q: "Write the masculine accusative singular of \"idem\".", answer: ["eundem"], explain: "Eum + dem ➜ eundem." },
    { type: "mc", q: "What is the difference between \"ipse\" and \"idem\"?", options: ["ipse = himself, in person; idem = the same", "ipse = the same; idem = in person", "they are synonyms"], answer: 0, explain: "Ipse emphasises, idem expresses identity." },
    { type: "mc", q: "In \"Puella, cuius pater venit, laeta est\", \"cuius\" is…", options: ["genitive", "dative", "nominative"], answer: 0, explain: "Cuius = whose (father)." },
    { type: "text", q: "Write the feminine genitive plural of \"qui, quae, quod\".", answer: ["quarum"], explain: "Quorum, quarum, quorum." },
    { type: "mc", q: "What is a \"connecting relative\"?", options: ["a relative at the start of a sentence with the value of a demonstrative", "a relative with the subjunctive", "a relative without an antecedent"], answer: 0, explain: "E.g.: quae cum ita sint = and since this is so." }
  ]
});
