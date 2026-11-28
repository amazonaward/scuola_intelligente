QBANK("fr", "l1-lat-prima-seconda-declinazione", {
  f: [
    { type: "mc", q: "Quel cas répond à la question « à qui ? »", options: ["datif", "génitif", "accusatif"], answer: 0, explain: "Le datif exprime le complément d'attribution : à qui ? à quoi ?" },
    { type: "text", q: "Quel est le nominatif pluriel de « rosa » ?", answer: ["rosae"], explain: "1re déclinaison : nominatif pluriel en -ae : rosae." },
    { type: "mc", q: "Quel est le génitif singulier de « puella » ?", options: ["puellam", "puellae", "puellarum"], answer: 1, explain: "Génitif singulier de la 1re déclinaison : -ae." },
    { type: "tf", q: "En latin, l'ordre des mots décide de la fonction d'un nom.", answer: false, explain: "La fonction se lit dans la désinence (le cas), pas dans l'ordre." },
    { type: "mc", q: "Combien y a-t-il de cas en latin ?", options: ["4", "6", "8"], answer: 1, explain: "Nominatif, génitif, datif, accusatif, vocatif, ablatif." }
  ],
  m: [
    { type: "text", q: "Écris l'accusatif pluriel de « servus ».", answer: ["servos"], explain: "2e déclinaison, accusatif pluriel en -os : servos." },
    { type: "mc", q: "« Agricola » est un nom…", options: ["féminin", "masculin", "neutre"], answer: 1, explain: "Comme nauta et poeta, agricola désigne un homme : il est masculin bien qu'il soit de 1re déclinaison." },
    { type: "mc", q: "Quel est le vocatif singulier de « dominus » ?", options: ["dominus", "domine", "domini"], answer: 1, explain: "Les noms en -us ont le vocatif singulier en -e : domine." },
    { type: "mc", q: "Comment traduit-on « Puella agricolae rosam dat » ?", options: ["La jeune fille donne une rose au paysan", "Le paysan donne une rose à la jeune fille", "La fille du paysan donne une rose"], answer: 0, explain: "Puella = nom. (sujet) ; agricolae = datif (au paysan) ; rosam = acc. (COD)." },
    { type: "tf", q: "« Bella » est un nominatif singulier féminin.", answer: false, explain: "C'est le nominatif/accusatif pluriel du neutre bellum : les guerres." }
  ],
  d: [
    { type: "text", q: "Mets « ager, agri » au datif singulier.", answer: ["agro"], explain: "Radical agr- + -o : agro (le e du nominatif tombe)." },
    { type: "mc", q: "« Dominis » peut être…", options: ["seulement un accusatif pluriel", "un datif ou un ablatif pluriel", "un génitif singulier"], answer: 1, explain: "Le datif et l'ablatif pluriels coïncident : -is." },
    { type: "mc", q: "Quel est le vocatif singulier de « filius, filii » ?", options: ["filie", "fili", "filius"], answer: 1, explain: "Les noms en -ius ont le vocatif en -i : fili." },
    { type: "mc", q: "Dans « Domini servos vocant », le sujet est…", options: ["servos", "domini, nominatif pluriel", "domini, génitif singulier"], answer: 1, explain: "Vocant est à la 3e personne du pluriel et servos est un accusatif pluriel : le sujet est domini, nominatif pluriel (Les maîtres appellent les esclaves)." },
    { type: "mc", q: "Quelle forme est un génitif pluriel ?", options: ["rosarum", "rosas", "rosis"], answer: 0, explain: "-arum pour la 1re, -orum pour la 2e : le génitif pluriel a toujours -rum." }
  ]
});
