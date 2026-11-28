QBANK("en", "l1-ted-artikel-kasus", {
 f: [
  { type: "mc", q: "What is the article of \"Tisch\" (table)?", options: ["die", "das", "der"], answer: 2, explain: "der Tisch." },
  { type: "mc", q: "In the plural the definite article is always:", options: ["der", "die", "das"], answer: 1, explain: "Plural: die." },
  { type: "text", q: "Complete: Ich habe ___ Schwester. (ein-)", answer: ["eine"], explain: "eine Schwester." },
  { type: "tf", q: "All German nouns are written with a capital letter.", answer: true, explain: "It is a spelling rule." },
  { type: "mc", q: "What does \"kein\" mean?", options: ["a lot", "no / not any", "always"], answer: 1, explain: "kein = no / not a / not any." }
 ],
 m: [
  { type: "mc", q: "Er kauft ___ Computer. (der Computer)", options: ["der", "den", "dem"], answer: 1, explain: "Masculine accusative: den." },
  { type: "text", q: "Accusative of \"du\":", answer: ["dich"], explain: "du → dich." },
  { type: "mc", q: "Which word is feminine?", options: ["Zeitung", "Mädchen", "Lehrer"], answer: 0, explain: "-ung is feminine: die Zeitung." },
  { type: "mc", q: "Plural of \"das Kind\":", options: ["die Kinden", "die Kinder", "die Kinds"], answer: 1, explain: "das Kind → die Kinder." },
  { type: "mc", q: "Ich habe ___ Auto. (kein)", options: ["keinen", "keine", "kein"], answer: 2, explain: "Neuter: kein Auto." }
 ],
 d: [
  { type: "mc", q: "Which sentence is correct?", options: ["Ich liebe der Hund.", "Ich liebe den Hund.", "Ich liebe dem Hund."], answer: 1, explain: "Masculine accusative: den." },
  { type: "text", q: "Accusative of \"er\":", answer: ["ihn"], explain: "er → ihn." },
  { type: "mc", q: "What is the accusative of \"meine Schwester\"?", options: ["meinen Schwester", "meine Schwester", "meiner Schwester"], answer: 1, explain: "The feminine doesn't change." },
  { type: "mc", q: "Ich habe ___ Hunger. (negating \"Hunger\", m.)", options: ["kein", "keinen", "nicht"], answer: 1, explain: "Hunger is masculine: Ich habe keinen Hunger." },
  { type: "tf", q: "\"Das ist nicht mein Buch\" uses \"nicht\" because there is a possessive.", answer: true, explain: "With a definite article or a possessive you use nicht, not kein." }
 ]
});
