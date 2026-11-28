QBANK("en", "l2-sci-ecosistemi", {
  f: [
    { type: "mc", q: "Who are the producers in an ecosystem?", options: ["Organisms that carry out photosynthesis or chemosynthesis", "Carnivorous animals", "Decomposer fungi"], answer: 0, explain: "Producers are autotrophs and make organic matter." },
    { type: "tf", q: "Decomposers are fungi and bacteria.", answer: true, explain: "They break down organic remains, returning mineral salts to the soil." },
    { type: "text", q: "What do we call all the ecosystems on Earth taken together?", answer: ["biosphere", "the biosphere"], explain: "It is the part of the planet where there is life." },
    { type: "mc", q: "A herbivore is a ... consumer.", options: ["primary", "secondary", "tertiary"], answer: 0, explain: "It feeds directly on producers." },
    { type: "tf", q: "The Sun is the energy source of almost all ecosystems.", answer: true, explain: "The exceptions are ecosystems powered by chemosynthesis, such as hydrothermal vents." }
  ],
  m: [
    { type: "num", q: "Using the 10% rule, if the producers have 10,000 kcal, how many kcal does the secondary consumer level have?", answer: 100, unit: "kcal", explain: "10,000 → 1000 (primary) → 100 (secondary)." },
    { type: "mc", q: "Which relationship benefits one species and has no effect on the other?", options: ["Commensalism", "Mutualism", "Parasitism"], answer: 0, explain: "Commensalism is a +/0 relationship." },
    { type: "mc", q: "In what form do plants mainly absorb nitrogen?", options: ["Nitrates and ammonium", "N₂ from the air", "Carbon monoxide"], answer: 0, explain: "They cannot use atmospheric N₂ directly." },
    { type: "tf", q: "Burning oil and coal increases atmospheric CO₂.", answer: true, explain: "It returns to the atmosphere carbon that built up over millions of years." },
    { type: "order", q: "Put the levels of organisation in order from smallest to largest.", items: ["Individual", "Population", "Community", "Ecosystem"], explain: "Then come biome and biosphere." }
  ],
  d: [
    { type: "mc", q: "A species introduced by humans that spreads and harms native species is called...", options: ["invasive", "endemic", "keystone"], answer: 0, explain: "Invasive species are one of the main causes of biodiversity loss." },
    { type: "num", q: "In the energy pyramid, how many kcal do 40,000 kcal of producers leave for the tertiary consumers (level 4)?", answer: 40, unit: "kcal", explain: "40,000 → 4000 → 400 → 40." },
    { type: "mc", q: "Why is the concentration of DDT higher in birds of prey than in plankton?", options: ["Because of biomagnification: the persistent substance builds up along the chain", "Because birds of prey produce DDT", "Because birds of prey live longer without eating"], answer: 0, explain: "Each predator eats many individuals from the level below and accumulates their non-degradable substances." },
    { type: "tf", q: "According to the competitive exclusion principle, two species with the same ecological niche can coexist for a long time.", answer: false, explain: "One ends up winning out over the other, or the two species become different." },
    { type: "mc", q: "Why doesn't a population grow exponentially for ever?", options: ["Because of the environment's carrying capacity (limited resources)", "Because parents stop reproducing", "Because mutations stop it"], answer: 0, explain: "Growth becomes logistic and levels off around K." }
  ]
});
