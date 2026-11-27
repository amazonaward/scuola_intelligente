QBANK("en", "l1-lat-alfabeto-pronuncia", {
  f: [
    { type: "mc", q: "Which letter does NOT exist in the classical Latin alphabet?", options: ["H", "J", "X"], answer: 1, explain: "J (like U and W) does not exist: I and V did double duty." },
    { type: "tf", q: "Latin words of two syllables are stressed on the first syllable.", answer: true, explain: "The stress always falls on the penultimate, which in a two-syllable word is the first: ròsa, sèrvus." },
    { type: "mc", q: "Which of these is a Latin diphthong?", options: ["ae", "ao", "ie"], answer: 0, explain: "The most common diphthongs are ae, oe and au." },
    { type: "text", q: "How many letters does the classical Latin alphabet have? (number)", answer: ["23", "twenty-three", "twenty three"], explain: "A B C D E F G H I K L M N O P Q R S T V X Y Z: twenty-three letters." },
    { type: "mc", q: "How is the letter H read in Latin in the school pronunciation?", options: ["Like an aspirated English h", "It is silent", "Like a hard c"], answer: 1, explain: "In the school reading h is silent: homo is read òmo." }
  ],
  m: [
    { type: "mc", q: "With the school pronunciation, how is \"Cicero\" read?", options: ["Kìkero", "Chìchero (as in \"chair\")", "Sìsero"], answer: 1, explain: "School: soft c before e, i: Chìchero. The classical pronunciation gives Kìkero." },
    { type: "text", q: "Divide \"terra\" into syllables (with hyphens).", answer: ["ter-ra"], explain: "Two identical consonants between two vowels are split: ter-ra." },
    { type: "mc", q: "Where is the stress in \"regina\"?", options: ["règina", "regìna", "reginà"], answer: 1, explain: "Re-gi-na: the penultimate gi is long (gī), so regìna." },
    { type: "tf", q: "In a three-syllable Latin word the stress can fall on the last syllable.", answer: false, explain: "The last syllable of a word of more than one syllable is never stressed." },
    { type: "mc", q: "A syllable with a short vowel followed by two consonants is…", options: ["short", "long by position", "silent"], answer: 1, explain: "It is long by position, like gis- in magìster." }
  ],
  d: [
    { type: "mc", q: "Why is \"filia\" stressed fìlia (on the antepenultimate)?", options: ["Because the penultimate li is short (vowel before a vowel)", "Because it is feminine", "Because it ends in -a"], answer: 0, explain: "Fi-li-a: an i followed by a vowel is short, so the stress moves back to the antepenultimate." },
    { type: "mc", q: "How is \"Veni, vidi, vici\" read with the classical pronunciation?", options: ["Vèni, vìdi, vìchi", "Wèni, wìdi, wìki", "Vèni, vìdi, vìki"], answer: 1, explain: "Classical: v = /w/ and c always /k/." },
    { type: "text", q: "Which word is stressed on the antepenultimate: \"dominus\" or \"magister\"? (one word)", answer: ["dominus"], explain: "Do-mi-nus: the penultimate mi is short, so dòminus. Magìster has a penultimate long by position." },
    { type: "mc", q: "What is the difference between \"mălum\" and \"mālum\"?", options: ["None: they are two spellings", "The vowel quantity: evil / apple", "Only the stress"], answer: 1, explain: "Quantity distinguishes words: mălum = evil; mālum = apple." },
    { type: "tf", q: "In \"poëta\" the sequence \"oe\" is a diphthong and the word has two syllables.", answer: false, explain: "With the diaeresis the vowels are separate: po-ë-ta, three syllables." }
  ]
});
