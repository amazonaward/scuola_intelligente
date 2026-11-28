QBANK("fr", "l1-lat-alfabeto-pronuncia", {
  f: [
    { type: "mc", q: "Quelle lettre n'existe PAS dans l'alphabet latin classique ?", options: ["H", "J", "X"], answer: 1, explain: "Le J (comme le U et le W) n'existe pas : I et V faisaient double emploi." },
    { type: "tf", q: "Dans les mots latins de deux syllabes, l'accent tombe sur la première.", answer: true, explain: "Il tombe toujours sur la pénultième, qui dans un mot de deux syllabes est la première : ròsa, sèrvus." },
    { type: "mc", q: "Laquelle de ces suites est une diphtongue latine ?", options: ["ae", "ao", "ie"], answer: 0, explain: "Les diphtongues les plus courantes sont ae, oe et au." },
    { type: "text", q: "Combien de lettres compte l'alphabet latin classique ? (nombre)", answer: ["23", "vingt-trois", "vingt trois"], explain: "A B C D E F G H I K L M N O P Q R S T V X Y Z : vingt-trois lettres." },
    { type: "mc", q: "Comment se lit la lettre H en latin avec la prononciation scolaire ?", options: ["Comme un h anglais aspiré", "Elle reste muette", "Comme un c dur"], answer: 1, explain: "Dans la lecture scolaire, le h est muet : homo se lit òmo." }
  ],
  m: [
    { type: "mc", q: "Avec la prononciation scolaire, comment se lit « Cicero » ?", options: ["Kìkero", "Tchìtchero", "Sìsero"], answer: 1, explain: "Scolaire : c se lit « tch » devant e, i : Tchìtchero. La restituée donnerait Kìkero." },
    { type: "text", q: "Découpe « terra » en syllabes (avec des tirets).", answer: ["ter-ra"], explain: "Deux consonnes identiques entre deux voyelles se séparent : ter-ra." },
    { type: "mc", q: "Où est l'accent de « regina » ?", options: ["règina", "regìna", "reginà"], answer: 1, explain: "Re-gi-na : la pénultième gi est longue (gī), donc regìna." },
    { type: "tf", q: "Dans un mot latin de trois syllabes, l'accent peut tomber sur la dernière.", answer: false, explain: "La dernière syllabe des mots de plusieurs syllabes ne porte jamais l'accent." },
    { type: "mc", q: "Une syllabe avec une voyelle brève suivie de deux consonnes est…", options: ["brève", "longue par position", "muette"], answer: 1, explain: "Elle est longue par position, comme gis- dans magìster." }
  ],
  d: [
    { type: "mc", q: "Pourquoi « filia » s'accentue-t-il fìlia (sur l'antépénultième) ?", options: ["Parce que la pénultième li est brève (voyelle devant voyelle)", "Parce qu'il est féminin", "Parce qu'il se termine en -a"], answer: 0, explain: "Fi-li-a : le i suivi d'une voyelle est bref, donc l'accent remonte sur l'antépénultième." },
    { type: "mc", q: "Comment se lit « Veni, vidi, vici » avec la prononciation restituée ?", options: ["Vèni, vìdi, vìtchi", "Wèni, wìdi, wìki", "Vèni, vìdi, vìki"], answer: 1, explain: "Restituée : v = /w/ et c toujours /k/." },
    { type: "text", q: "Quel mot est accentué sur l'antépénultième : « dominus » ou « magister » ? (un mot)", answer: ["dominus"], explain: "Do-mi-nus : la pénultième mi est brève, donc dòminus. Magìster a la pénultième longue par position." },
    { type: "mc", q: "Quelle différence y a-t-il entre « mălum » et « mālum » ?", options: ["Aucune : ce sont deux graphies", "La quantité de la voyelle : le mal / la pomme", "Seulement l'accent"], answer: 1, explain: "La quantité distingue les mots : mălum = le mal ; mālum = la pomme." },
    { type: "tf", q: "Dans « poëta », la suite « oe » est une diphtongue et le mot a deux syllabes.", answer: false, explain: "Avec le tréma, les voyelles sont séparées : po-ë-ta, trois syllabes." }
  ]
});
