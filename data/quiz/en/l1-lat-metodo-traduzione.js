QBANK("en", "l1-lat-metodo-traduzione", {
  f: [
    { type: "mc", q: "Where is the verb usually found in a Latin sentence?", options: ["At the end", "At the beginning", "After the subject"], answer: 0, explain: "The usual order is subject – other phrases – object – verb." },
    { type: "tf", q: "Latin has definite articles.", answer: false, explain: "There are no articles: they are added in English." },
    { type: "mc", q: "How do you translate \"et\"?", options: ["and", "but", "or"], answer: 0, explain: "Et = and; sed = but; aut = or." },
    { type: "mc", q: "What do you look up in the dictionary?", options: ["The form that appears in the sentence", "The headword (nominative or 1st person)", "The last letter"], answer: 1, explain: "You look up the headword, working back from the ending." },
    { type: "mc", q: "The subject of a Latin sentence is in the…", options: ["nominative", "accusative", "ablative"], answer: 0, explain: "Nominative, agreeing with the verb." }
  ],
  m: [
    { type: "mc", q: "Translate: \"Puella rosam amat\".", options: ["The girl loves the rose", "The rose loves the girl", "The girls love the roses"], answer: 0, explain: "Puella nom. sing.; rosam acc. sing.; amat 3rd sing." },
    { type: "text", q: "What is the headword of \"servorum\"? (nominative singular)", answer: ["servus"], explain: "-orum = gen. pl., 2nd declension: servus, -i." },
    { type: "mc", q: "\"Nam\" is translated…", options: ["therefore", "for, in fact", "also"], answer: 1, explain: "Nam = for, in fact; igitur = therefore; etiam = also." },
    { type: "mc", q: "\"Pueri puellaeque\" means…", options: ["the boys and the girls", "the girl's boy", "the boys' girls"], answer: 0, explain: "-que = and." },
    { type: "tf", q: "The finite verbs show how many clauses there are in a sentence.", answer: true, explain: "Each finite verb governs a clause." }
  ],
  d: [
    { type: "mc", q: "Translate: \"Servi a dominis vocantur\".", options: ["The slaves are called by the masters", "The slaves call the masters", "The masters are called by the slaves"], answer: 0, explain: "Vocantur is passive; a dominis = agent." },
    { type: "mc", q: "In \"Reges milites vocant\" which word is the subject?", options: ["milites", "reges", "vocant"], answer: 1, explain: "Reges and milites have the same form in the plural; the meaning (the kings call the soldiers) and the most natural order point to reges as the subject." },
    { type: "mc", q: "\"Nautae cum magna cura navigabant\": \"cum magna cura\" is…", options: ["accompaniment", "manner", "means"], answer: 1, explain: "Cum + abstract ablative: manner (with great care)." },
    { type: "text", q: "What is the headword of \"hostibus\"? (nominative singular)", answer: ["hostis"], explain: "-ibus: dat./abl. plural, 3rd declension; hostis, hostis." },
    { type: "mc", q: "Why can \"leges\" be analysed in two ways?", options: ["It is both a noun (the laws) and a verb (you will read)", "It is a mistake", "Only in the neuter"], answer: 0, explain: "Leges = nominative/accusative plural of lex, or 2nd sing. future of lego." }
  ]
});
