QBANK("fr", "l2-ita-testo-poetico", {
  f: [
    { type: "mc", q: "Comment s'appelle une strophe de quatre vers ?", options: ["Quatrain", "Tercet", "Distique", "Sizain"], answer: 0, explain: "Quatrain = 4 vers ; tercet = 3 ; distique = 2 ; sizain = 6." },
    { type: "tf", q: "Le sonnet est composé de 14 vers.", answer: true, explain: "Deux quatrains et deux tercets, soit 14 hendécasyllabes au total." },
    { type: "mc", q: "Combien de syllabes compte un septénaire paroxyton (settenario piano) ?", options: ["7", "6", "8", "11"], answer: 0, explain: "Le nom du vers indique le nombre de syllabes métriques (quand le dernier mot est paroxyton)." },
    { type: "text", q: "Comment s'appelle l'identité des sons à la fin de deux vers ?", answer: ["rime", "la rime"], explain: "La rime relie les vers et donne de la musicalité au texte." },
    { type: "mc", q: "Qui a écrit la Divine Comédie en tercets ?", options: ["Dante Alighieri", "François Pétrarque", "Giacomo Leopardi", "Ugo Foscolo"], answer: 0, explain: "Dante utilisa le tercet à rimes enchaînées ABA BCB." }
  ],
  m: [
    { type: "mc", q: "Quel est le schéma des rimes croisées (rima alternata) ?", options: ["ABAB", "AABB", "ABBA", "ABCABC"], answer: 0, explain: "Le premier vers rime avec le troisième, le deuxième avec le quatrième." },
    { type: "mc", q: "Comment s'appelle la fusion de deux voyelles entre des mots voisins ?", options: ["Synalèphe", "Diérèse", "Césure", "Assonance"], answer: 0, explain: "La synalèphe compte pour une seule syllabe la rencontre d'une voyelle finale et d'une voyelle initiale." },
    { type: "tf", q: "Un vers proparoxyton (sdrucciolo) compte, dans le décompte métrique, une syllabe de moins que ses syllabes réelles.", answer: true, explain: "Si le dernier mot est proparoxyton, on retire une syllabe." },
    { type: "num", q: "Combien de syllabes métriques compte le vers « Sempre caro mi fu quest'ermo colle » ?", answer: 11, tol: 0, explain: "Avec l'élision dans quest'ermo, le vers est un hendécasyllabe de 11 syllabes." },
    { type: "order", q: "Range ces strophes de la plus courte à la plus longue.", items: ["Distique", "Tercet", "Quatrain", "Huitain"], explain: "Respectivement 2, 3, 4 et 8 vers." }
  ],
  d: [
    { type: "mc", q: "Qu'est-ce qui distingue l'assonance de la rime ?", options: ["Seules les voyelles après l'accent coïncident", "Seules les consonnes coïncident", "Le mot entier coïncide", "Il n'y a aucun son commun"], answer: 0, explain: "Cuore et morte sont en assonance : les voyelles (o, e) coïncident, mais pas les consonnes." },
    { type: "mc", q: "Dans quel type de vers Ungaretti a-t-il écrit « Mi illumino / d'immenso » (« Je m'illumine / d'immense ») ?", options: ["Vers libre", "Sonnet", "Ode en tercets", "Huitain"], answer: 0, explain: "C'est un texte de 1917 en vers libres très brefs." },
    { type: "tf", q: "L'enjambement fait toujours coïncider la fin de la phrase avec la fin du vers.", answer: false, explain: "C'est le contraire : la phrase se poursuit dans le vers suivant." },
    { type: "mc", q: "Pourquoi la rime était-elle importante dans la poésie ancienne ?", options: ["Elle aidait à mémoriser et à réciter les vers", "Elle servait seulement de décoration", "Elle rendait les textes plus courts", "Elle était obligatoire selon la loi"], answer: 0, explain: "Dans une culture orale, le rythme et la rime facilitaient la mémoire." },
    { type: "text", q: "Comment s'appelle le vers de dix syllabes, accentué sur la neuvième ?", answer: ["décasyllabe", "decasyllabe", "le décasyllabe", "decasillabo"], explain: "Le décasyllabe est très utilisé pour les textes chantés et choraux (Manzoni, chœur du Conte di Carmagnola : « S'ode a destra uno squillo di tromba »)." }
  ]
});
