QBANK("en", "l2-ita-testo-poetico", {
  f: [
    { type: "mc", q: "What is a four-line stanza called?", options: ["Quatrain", "Tercet", "Couplet", "Sestet"], answer: 0, explain: "Quatrain = 4 lines; tercet = 3; couplet = 2; sestet = 6." },
    { type: "tf", q: "A sonnet is made up of 14 lines.", answer: true, explain: "Two quatrains and two tercets, for a total of 14 hendecasyllables." },
    { type: "mc", q: "How many syllables does a settenario ending in a piana word have?", options: ["7", "6", "8", "11"], answer: 0, explain: "The name of the line tells you the number of metrical syllables (when the last word is piana)." },
    { type: "text", q: "What do we call the identity of sounds at the end of two lines?", answer: ["rhyme", "rime", "rima"], explain: "Rhyme links the lines and gives the text its musicality." },
    { type: "mc", q: "Who wrote the Divine Comedy in tercets?", options: ["Dante Alighieri", "Francesco Petrarca", "Giacomo Leopardi", "Ugo Foscolo"], answer: 0, explain: "Dante used the chained tercet ABA BCB." }
  ],
  m: [
    { type: "mc", q: "What is the scheme of alternate rhyme?", options: ["ABAB", "AABB", "ABBA", "ABCABC"], answer: 0, explain: "The first line rhymes with the third, the second with the fourth." },
    { type: "mc", q: "What is the merging of two vowels between neighbouring words called?", options: ["Synaloepha", "Diaeresis", "Caesura", "Assonance"], answer: 0, explain: "Synaloepha counts the meeting of a final vowel and an initial vowel as a single syllable." },
    { type: "tf", q: "A sdrucciolo line has one syllable fewer in the metrical count than it really has.", answer: true, explain: "If the final word is sdrucciola, you take away one syllable." },
    { type: "num", q: "How many metrical syllables are there in the line «Sempre caro mi fu quest'ermo colle»?", answer: 11, tol: 0, explain: "With the elision in quest'ermo, the line is a hendecasyllable of 11 syllables." },
    { type: "order", q: "Put these stanzas in order from shortest to longest.", items: ["Couplet", "Tercet", "Quatrain", "Ottava"], explain: "2, 3, 4 and 8 lines respectively." }
  ],
  d: [
    { type: "mc", q: "What distinguishes assonance from rhyme?", options: ["Only the vowels after the stress match", "Only the consonants match", "The whole word matches", "There is no shared sound"], answer: 0, explain: "Cuore and morte are in assonance: the vowels (o, e) match but the consonants do not." },
    { type: "mc", q: "In what kind of verse did Ungaretti write «Mi illumino / d'immenso» (“I light myself up / with immensity”)?", options: ["Free verse", "Sonnet", "Ode in tercets", "Ottava"], answer: 0, explain: "It is a 1917 text in very short free-verse lines." },
    { type: "tf", q: "Enjambment always makes the end of the sentence coincide with the end of the line.", answer: false, explain: "It does the opposite: the sentence continues into the next line." },
    { type: "mc", q: "Why was rhyme important in ancient poetry?", options: ["It helped people memorise and recite the lines", "It was only decoration", "It made texts shorter", "It was required by law"], answer: 0, explain: "In an oral culture, rhythm and rhyme made memorising easier." },
    { type: "text", q: "What is the ten-syllable line with the stress on the ninth syllable called?", answer: ["decasillabo", "decasyllable"], explain: "The decasillabo is often used for sung and choral texts (Manzoni, «S'ode a destra uno squillo di tromba», from the Conte di Carmagnola)." }
  ]
});
