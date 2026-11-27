QBANK("it", "l5-ted-kafka", {
  f: [
    { type: "mc", q: "In quale città è nato Kafka?", options: ["Praga", "Monaco", "Zurigo"], answer: 0, explain: "A Praga, nel 1883." },
    { type: "mc", q: "In che cosa si trasforma Gregor Samsa?", options: ["In un enorme insetto", "In un lupo", "In una statua"], answer: 0, explain: "In un «ungeheueres Ungeziefer»." },
    { type: "tf", q: "Kafka scrisse in tedesco.", answer: true, explain: "Era di lingua tedesca, pur vivendo in una città ceca." },
    { type: "mc", q: "Come si chiama il protagonista del «Processo»?", options: ["Josef K.", "Gregor K.", "Hans Castorp"], answer: 0, explain: "Josef K., procuratore di banca." },
    { type: "text", q: "Come si dice «castello» in tedesco? (una parola, anche nella grafia moderna)", answer: ["schloss", "schloß", "das schloss", "das schloß"], explain: "Das Schloß (oggi Schloss), il romanzo del 1926." }
  ],
  m: [
    { type: "mc", q: "Chi pubblicò le opere di Kafka contro la sua volontà?", options: ["Max Brod", "Thomas Mann", "Kurt Wolff"], answer: 0, explain: "Brod non bruciò i manoscritti come Kafka gli aveva chiesto." },
    { type: "tf", q: "«Brief an den Vater» è una lettera che Kafka scrisse al padre senza consegnarla.", answer: true, explain: "Del 1919, descrive il senso di colpa e di inferiorità." },
    { type: "mc", q: "Qual è l'ultima frase di Josef K.?", options: ["Wie ein Hund!", "Es ist vollbracht!", "Ich bin unschuldig!"], answer: 0, explain: "«Come un cane!», seguita da: la vergogna gli sopravvivrà." },
    { type: "mc", q: "Di che cosa soffriva Kafka?", options: ["Tubercolosi", "Colera", "Vaiolo"], answer: 0, explain: "Si ammalò nel 1917 e morì nel 1924." },
    { type: "mc", q: "Che cosa significa «Verwandlung»?", options: ["Trasformazione", "Condanna", "Viaggio"], answer: 0, explain: "È la «metamorfosi» di Gregor." }
  ],
  d: [
    { type: "mc", q: "Qual è la prima preoccupazione di Gregor appena sveglio come insetto?", options: ["Arrivare in ritardo al lavoro", "Il proprio aspetto", "La fame"], answer: 0, explain: "La sua vita è dominata dal lavoro: è lui a mantenere la famiglia." },
    { type: "tf", q: "Nella parabola «Vor dem Gesetz» la porta è chiusa a chiave.", answer: false, explain: "La porta è aperta; è il guardiano a scoraggiare l'uomo dall'entrare." },
    { type: "mc", q: "Quale lettura del «Process» vede nel romanzo una profezia dei sistemi totalitari?", options: ["La lettura politica o sociale", "La lettura grammaticale", "La lettura musicale"], answer: 0, explain: "Il tribunale che arresta senza accusa ricorda i regimi del Novecento." },
    { type: "order", q: "Metti in ordine cronologico:", items: ["Die Verwandlung (1915)", "Brief an den Vater (1919)", "Ein Hungerkünstler (1922)", "Das Schloß (pubblicato 1926)"], explain: "1915, 1919, 1922, 1926." },
    { type: "mc", q: "Perché l'incipit della «Verwandlung» è così efficace?", options: ["Racconta un fatto assurdo con tono sobrio e naturale", "Descrive con abbondanza il mostro", "Spiega subito la causa della trasformazione"], answer: 0, explain: "L'assurdo è presentato come un dato di fatto, e questo lo rende inquietante." }
  ]
});
