QBANK("de", "l1-lat-metodo-traduzione", {
  f: [
    { type: "mc", q: "Wo steht das Verb in einem lateinischen Satz gewöhnlich?", options: ["Am Ende", "Am Anfang", "Nach dem Subjekt"], answer: 0, explain: "Die übliche Reihenfolge ist Subjekt – Ergänzungen – Objekt – Verb." },
    { type: "tf", q: "Im Lateinischen gibt es bestimmte Artikel.", answer: false, explain: "Es gibt keine Artikel: Sie werden im Deutschen ergänzt." },
    { type: "mc", q: "Wie übersetzt man \"et\"?", options: ["und", "aber", "oder"], answer: 0, explain: "Et = und; sed = aber; aut = oder." },
    { type: "mc", q: "Was sucht man im Wörterbuch?", options: ["Die Form, die im Satz erscheint", "Das Lemma (Nominativ oder Infinitiv)", "Den letzten Buchstaben"], answer: 1, explain: "Man sucht das Lemma und geht dazu von der Endung zurück." },
    { type: "mc", q: "Das Subjekt eines lateinischen Satzes steht im…", options: ["Nominativ", "Akkusativ", "Ablativ"], answer: 0, explain: "Nominativ, kongruent mit dem Verb." }
  ],
  m: [
    { type: "mc", q: "Übersetze: \"Puella rosam amat\".", options: ["Das Mädchen liebt die Rose", "Die Rose liebt das Mädchen", "Die Mädchen lieben die Rosen"], answer: 0, explain: "Puella Nom. Sg.; rosam Akk. Sg.; amat 3. Sg." },
    { type: "text", q: "Wie lautet das Lemma von \"servorum\"? (Nominativ Singular)", answer: ["servus"], explain: "-orum = Gen. Pl. der 2. Deklination: servus, -i." },
    { type: "mc", q: "\"Nam\" übersetzt man…", options: ["also", "denn", "auch"], answer: 1, explain: "Nam = denn; igitur = also; etiam = auch." },
    { type: "mc", q: "\"Pueri puellaeque\" bedeutet…", options: ["die Jungen und die Mädchen", "der Junge des Mädchens", "die Mädchen der Jungen"], answer: 0, explain: "-que = und." },
    { type: "tf", q: "Das finite Verb zeigt an, wie viele Sätze es in einem Satzgefüge gibt.", answer: true, explain: "Jedes finite Verb bildet einen Satz." }
  ],
  d: [
    { type: "mc", q: "Übersetze: \"Servi a dominis vocantur\".", options: ["Die Sklaven werden von den Herren gerufen", "Die Sklaven rufen die Herren", "Die Herren werden von den Sklaven gerufen"], answer: 0, explain: "Vocantur Passiv; a dominis = Urheber." },
    { type: "mc", q: "In \"Reges milites vocant\": Welches Wort ist das Subjekt?", options: ["milites", "reges", "vocant"], answer: 1, explain: "Reges und milites haben im Plural dieselbe Form; der Sinn (die Könige rufen die Soldaten) und die natürlichere Reihenfolge zeigen reges als Subjekt an." },
    { type: "mc", q: "\"Nautae cum magna cura navigabant\": \"cum magna cura\" ist…", options: ["Begleitung", "Art und Weise", "Mittel"], answer: 1, explain: "Cum + abstrakter Ablativ: Art und Weise (mit großer Sorgfalt)." },
    { type: "text", q: "Wie lautet das Lemma von \"hostibus\"? (Nominativ Singular)", answer: ["hostis"], explain: "-ibus: Dat./Abl. Plural der 3.; hostis, hostis." },
    { type: "mc", q: "Warum kann \"leges\" zwei Analysen haben?", options: ["Es ist sowohl Nomen (die Gesetze) als auch Verb (du wirst lesen)", "Es ist ein Fehler", "Nur beim Neutrum"], answer: 0, explain: "Leges = Nominativ/Akkusativ Plural von lex oder 2. Sg. des Futurs von lego." }
  ]
});
