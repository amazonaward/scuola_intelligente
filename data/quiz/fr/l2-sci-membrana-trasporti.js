QBANK("fr", "l2-sci-membrana-trasporti", {
  f: [
    { type: "mc", q: "De quoi la membrane plasmique est-elle principalement constituée ?", options: ["D'une bicouche de phospholipides avec des protéines", "De cellulose", "Uniquement de protéines"], answer: 0, explain: "C'est une bicouche de phospholipides dans laquelle sont insérées des protéines." },
    { type: "tf", q: "La diffusion simple se fait toujours de la zone la plus concentrée vers la zone la moins concentrée.", answer: true, explain: "Elle suit le gradient de concentration, sans consommation d'énergie." },
    { type: "text", q: "Comment appelle-t-on la diffusion de l'eau à travers une membrane semi-perméable ?", answer: ["osmose", "l'osmose"], explain: "L'osmose est le déplacement de l'eau vers la solution la plus concentrée." },
    { type: "mc", q: "Quelle molécule fournit l'énergie du transport actif ?", options: ["L'ATP", "L'ADN", "Le cholestérol"], answer: 0, explain: "L'ATP est la monnaie énergétique de la cellule." },
    { type: "tf", q: "Lors de l'exocytose, le contenu d'une vésicule est libéré hors de la cellule.", answer: true, explain: "La vésicule fusionne avec la membrane et libère son contenu à l'extérieur." }
  ],
  m: [
    { type: "mc", q: "Une solution qui contient plus de solutés qu'une autre est dite...", options: ["hypotonique", "hypertonique", "isotonique"], answer: 1, explain: "Hypertonique signifie plus concentrée en solutés." },
    { type: "mc", q: "Que se passe-t-il pour un globule rouge dans une solution saline très concentrée ?", options: ["Il gonfle", "Il se ratatine en perdant de l'eau", "Il éclate"], answer: 1, explain: "Le milieu est hypertonique : l'eau sort et la cellule subit une crénelure." },
    { type: "num", q: "Un litre de sérum physiologique contient 9 g de sel. Combien de grammes dans 250 mL ?", answer: 2.25, tol: 0.01, unit: "g", explain: "9 × 0,25 = 2,25 g." },
    { type: "mc", q: "Laquelle de ces molécules traverse le plus facilement la bicouche lipidique ?", options: ["L'oxygène", "L'ion sodium", "Le glucose"], answer: 0, explain: "L'oxygène est petit et apolaire ; les ions et le glucose ont besoin de protéines." },
    { type: "tf", q: "Le glucose entre dans beaucoup de cellules par diffusion facilitée, grâce à des transporteurs.", answer: true, explain: "C'est une molécule polaire et grosse : elle utilise un transporteur, sans ATP, dans le sens du gradient." }
  ],
  d: [
    { type: "mc", q: "Pourquoi la pompe Na⁺/K⁺ est-elle importante pour les neurones ?", options: ["Elle maintient les gradients ioniques sur lesquels repose l'influx nerveux", "Elle produit de l'ATP", "Elle digère les protéines"], answer: 0, explain: "Le gradient de Na⁺ et de K⁺ crée le potentiel de membrane nécessaire aux signaux nerveux." },
    { type: "num", q: "En 10 cycles de la pompe sodium-potassium, combien d'ions au total (Na⁺ + K⁺) sont transportés ?", answer: 50, explain: "Chaque cycle déplace 3 Na⁺ + 2 K⁺ = 5 ions ; 10 cycles = 50 ions." },
    { type: "mc", q: "Une plante arrosée avec de l'eau très salée se fane. Pourquoi ?", options: ["Le sol est hypertonique et les racines perdent de l'eau par osmose", "Le sel n'est toxique que pour la photosynthèse", "Le sel bloque la lumière"], answer: 0, explain: "L'eau tend à sortir des racines vers le sol, plus concentré." },
    { type: "tf", q: "La pression osmotique d'une solution augmente quand la concentration des solutés augmente.", answer: true, explain: "Elle est proportionnelle à la concentration des solutés (loi de van 't Hoff)." },
    { type: "mc", q: "Quelle paire associe correctement processus et caractéristique ?", options: ["Endocytose - consomme de l'ATP et forme des vésicules", "Osmose - consomme de l'ATP", "Diffusion simple - nécessite des pompes"], answer: 0, explain: "L'endocytose demande de l'énergie ; l'osmose et la diffusion simple sont passives." }
  ]
});
