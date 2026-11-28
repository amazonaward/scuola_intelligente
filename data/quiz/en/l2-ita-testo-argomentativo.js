QBANK("en", "l2-ita-testo-argomentativo", {
  f: [
    { type: "mc", q: "What is the main idea you want to prove called?", options: ["Thesis", "Title", "Example", "Caption"], answer: 0, explain: "The thesis is the central statement of the text." },
    { type: "tf", q: "Arguments are used to support the thesis.", answer: true, explain: "They are the reasons that make it believable." },
    { type: "mc", q: "Which part ends the text?", options: ["Conclusion", "Introduction", "Antithesis", "Premise"], answer: 0, explain: "The conclusion sums up the thesis." },
    { type: "text", q: "What is the thesis opposite to the author's called?", answer: ["antithesis", "the antithesis", "antitesi"], explain: "The antithesis is presented so that it can then be rebutted." },
    { type: "mc", q: "Which connective introduces an additional argument?", options: ["Moreover", "However", "Therefore", "While"], answer: 0, explain: "“Moreover” adds." }
  ],
  m: [
    { type: "mc", q: "“According to many experts, sleeping too little reduces concentration” is an argument:", options: ["From authority", "By analogy", "Narrative", "Poetic"], answer: 0, explain: "It refers to the opinion of competent experts." },
    { type: "tf", q: "An argumentative text should never consider the opposing opinion.", answer: false, explain: "Considering it and rebutting it makes the text stronger." },
    { type: "mc", q: "Who wrote the Rhetoric, which discusses logos, ethos and pathos?", options: ["Aristotle", "Plato", "Cicero", "Seneca"], answer: 0, explain: "Aristotle studied the means of persuasion." },
    { type: "text", q: "What is the deductive argument with two premises and a conclusion called?", answer: ["syllogism", "a syllogism", "sillogismo"], explain: "E.g.: All men are mortal; Socrates is a man; Socrates is mortal." },
    { type: "order", q: "Put the parts in order.", items: ["Problem", "Thesis", "Arguments", "Conclusion"], explain: "The text moves from the problem to the conclusion." }
  ],
  d: [
    { type: "mc", q: "“Either you're with us or you're against us” is a:", options: ["False dilemma", "Rebuttal", "Analogy", "Thesis"], answer: 0, explain: "It reduces the possibilities to two, ignoring the others." },
    { type: "mc", q: "Which technique distorts the opponent's thesis to defeat it more easily?", options: ["Straw man", "Syllogism", "Climax", "Example"], answer: 0, explain: "It attacks a caricature of the thesis." },
    { type: "tf", q: "If two events happen one after the other, the first is always the cause of the second.", answer: false, explain: "This is the post hoc fallacy: sequence does not prove causation." },
    { type: "mc", q: "Why can a cautious sentence (“some studies suggest...”) be more convincing?", options: ["Because it is more honest and harder to attack", "Because it is longer", "Because it avoids arguments", "Because it is emotional"], answer: 0, explain: "It avoids hasty generalisations and strengthens credibility." },
    { type: "text", q: "What is the fallacy “Everyone does it, so it's right” called?", answer: ["appeal to the majority", "appeal to popularity", "ad populum", "argumentum ad populum", "bandwagon", "bandwagon fallacy"], explain: "The number of people is not enough to prove that something is true or right." }
  ]
});
