QBANK("fr", "l2-sci-ecosistemi", {
  f: [
    { type: "mc", q: "Qui sont les producteurs d'un écosystème ?", options: ["Les organismes qui font la photosynthèse ou la chimiosynthèse", "Les animaux carnivores", "Les champignons décomposeurs"], answer: 0, explain: "Les producteurs sont autotrophes et fabriquent de la matière organique." },
    { type: "tf", q: "Les décomposeurs sont des champignons et des bactéries.", answer: true, explain: "Ils dégradent les restes organiques et rendent les sels minéraux au sol." },
    { type: "text", q: "Comment appelle-t-on l'ensemble de tous les écosystèmes de la Terre ?", answer: ["biosphère", "la biosphère", "biosphere"], explain: "C'est la partie de la planète où il y a de la vie." },
    { type: "mc", q: "Un herbivore est un consommateur...", options: ["primaire", "secondaire", "tertiaire"], answer: 0, explain: "Il se nourrit directement des producteurs." },
    { type: "tf", q: "Le Soleil est la source d'énergie de presque tous les écosystèmes.", answer: true, explain: "Les exceptions sont les écosystèmes alimentés par la chimiosynthèse, comme ceux des sources hydrothermales." }
  ],
  m: [
    { type: "num", q: "Avec la règle des 10 %, si les producteurs disposent de 10 000 kcal, combien de kcal le niveau des consommateurs secondaires reçoit-il ?", answer: 100, unit: "kcal", explain: "10 000 → 1000 (primaires) → 100 (secondaires)." },
    { type: "mc", q: "Quelle relation profite à une espèce sans effet sur l'autre ?", options: ["Le commensalisme", "Le mutualisme", "Le parasitisme"], answer: 0, explain: "Le commensalisme est une relation +/0." },
    { type: "mc", q: "Sous quelle forme les plantes absorbent-elles principalement l'azote ?", options: ["Nitrates et ammonium", "N₂ de l'air", "Monoxyde de carbone"], answer: 0, explain: "Elles ne peuvent pas utiliser directement le N₂ atmosphérique." },
    { type: "tf", q: "La combustion du pétrole et du charbon augmente le CO₂ atmosphérique.", answer: true, explain: "Elle rend à l'atmosphère du carbone accumulé pendant des millions d'années." },
    { type: "order", q: "Range les niveaux d'organisation du plus petit au plus grand.", items: ["Individu", "Population", "Communauté", "Écosystème"], explain: "Viennent ensuite le biome et la biosphère." }
  ],
  d: [
    { type: "mc", q: "Une espèce introduite par l'être humain, qui prolifère et nuit aux espèces locales, est dite...", options: ["envahissante", "endémique", "clé de voûte"], answer: 0, explain: "Les espèces envahissantes sont l'une des principales causes de perte de biodiversité." },
    { type: "num", q: "Dans la pyramide de l'énergie, combien de kcal 40 000 kcal de producteurs laissent-elles aux consommateurs tertiaires (niveau 4) ?", answer: 40, unit: "kcal", explain: "40 000 → 4000 → 400 → 40." },
    { type: "mc", q: "Pourquoi la concentration de DDT est-elle plus élevée chez les rapaces que dans le plancton ?", options: ["À cause de la bioamplification : la substance persistante s'accumule le long de la chaîne", "Parce que les rapaces produisent du DDT", "Parce que les rapaces vivent plus longtemps sans manger"], answer: 0, explain: "Chaque prédateur mange de nombreux individus du niveau inférieur et accumule leurs substances non dégradables." },
    { type: "tf", q: "Selon le principe d'exclusion compétitive, deux espèces ayant la même niche écologique peuvent coexister longtemps.", answer: false, explain: "L'une finit par l'emporter sur l'autre, ou bien les deux espèces se différencient." },
    { type: "mc", q: "Pourquoi une population ne croît-elle pas indéfiniment de façon exponentielle ?", options: ["À cause de la capacité de charge du milieu (ressources limitées)", "Parce que les parents cessent de se reproduire", "Parce que les mutations la bloquent"], answer: 0, explain: "La croissance devient logistique et se stabilise autour de K." }
  ]
});
