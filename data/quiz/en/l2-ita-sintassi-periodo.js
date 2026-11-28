QBANK("en", "l2-ita-sintassi-periodo", {
  f: [
    { type: "mc", q: "How many clauses are there in «Mangio mentre leggo» (I eat while I read)?", options: ["2", "1", "3", "4"], answer: 0, explain: "Two verbs, two clauses: mangio and leggo." },
    { type: "mc", q: "Which Italian conjunction is coordinating?", options: ["ma", "perché", "quando", "affinché"], answer: 0, explain: "«Ma» (but) coordinates; the others introduce subordinate clauses." },
    { type: "tf", q: "The main clause makes complete sense on its own.", answer: true, explain: "It does not depend on other clauses." },
    { type: "text", q: "What is a clause that depends on another clause called?", answer: ["subordinate", "subordinate clause", "dependent", "dependent clause", "subordinata"], explain: "The subordinate clause completes the meaning of the governing clause." },
    { type: "mc", q: "«Ho studiato, quindi sono tranquillo» (I studied, so I'm calm): «quindi» introduces a coordinate clause that is:", options: ["Conclusive", "Adversative", "Disjunctive", "Copulative"], answer: 0, explain: "It expresses a consequence." }
  ],
  m: [
    { type: "mc", q: "«Dico che hai ragione» (I say that you are right): the subordinate clause is:", options: ["An object clause", "A subject clause", "A purpose clause", "A temporal clause"], answer: 0, explain: "It answers the question “what do I say?”." },
    { type: "mc", q: "«Quando arriverai, ti chiamo» (When you arrive, I'll call you): the subordinate clause is:", options: ["Temporal", "Causal", "Concessive", "Comparative"], answer: 0, explain: "It expresses time." },
    { type: "tf", q: "«Studiando ogni giorno, migliori» (By studying every day, you improve) has an implicit subordinate clause.", answer: true, explain: "The verb is in the gerund: a non-finite mood." },
    { type: "text", q: "What is the clause introduced by the relative pronoun «che» called, as in «il libro che leggo» (the book that I read)?", answer: ["relative", "relative clause", "relativa"], explain: "The relative clause refers to a noun in the governing clause." },
    { type: "order", q: "Put them in order from the most real conditional sentence to the most unreal.", items: ["Se piove, resto a casa", "Se piovesse, resterei a casa", "Se fosse piovuto, sarei rimasto a casa"], explain: "Reality (If it rains, I stay home), possibility (If it rained, I would stay home), unreality (If it had rained, I would have stayed home)." }
  ],
  d: [
    { type: "mc", q: "In «Sebbene fosse tardi, continuò a lavorare perché voleva finire» (Although it was late, he kept working because he wanted to finish), how many degrees of subordination are there with respect to the main clause?", options: ["Two subordinate clauses, both 1st degree", "One 1st-degree and one 2nd-degree clause", "No subordinate clauses", "Two coordinate clauses"], answer: 0, explain: "Both (concessive and causal) depend on the main clause «continuò a lavorare»." },
    { type: "mc", q: "Which sentence contains a consecutive (result) clause?", options: ["Era così stanco che si addormentò", "Studio per imparare", "Se studi, passi", "Mentre cammino, penso"], answer: 0, explain: "Così... che (so... that) expresses a consequence." },
    { type: "tf", q: "«Benché» (although) is followed by the indicative.", answer: false, explain: "«Benché» takes the subjunctive; «anche se» (even if) takes the indicative." },
    { type: "text", q: "What is the part of a conditional sentence introduced by «se» (if) called?", answer: ["protasis", "protasi"], explain: "The apodosis expresses the consequence." },
    { type: "mc", q: "Which transformation makes «Poiché ho studiato, sono sereno» (Since I have studied, I feel calm) implicit?", options: ["Avendo studiato, sono sereno", "Siccome studio, sono sereno", "Ho studiato quindi sono sereno", "Se ho studiato, sono sereno"], answer: 0, explain: "The compound gerund makes the causal clause implicit." }
  ]
});
