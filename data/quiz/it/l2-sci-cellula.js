QBANK("it", "l2-sci-cellula", {
  f: [
    { type: "mc", q: "Qual è l'unità fondamentale di tutti gli esseri viventi?", options: ["L'organo", "La cellula", "Il tessuto"], answer: 1, explain: "Secondo la teoria cellulare, la cellula è l'unità strutturale e funzionale della vita." },
    { type: "tf", q: "I batteri sono cellule procarioti.", answer: true, explain: "I batteri non hanno un nucleo delimitato da membrana: sono procarioti." },
    { type: "text", q: "Come si chiama l'organulo che contiene il DNA nelle cellule eucariote?", answer: ["nucleo", "il nucleo"], explain: "Il nucleo custodisce il DNA, organizzato in cromosomi." },
    { type: "mc", q: "Quale organulo svolge la fotosintesi?", options: ["Cloroplasto", "Lisosoma", "Ribosoma"], answer: 0, explain: "I cloroplasti contengono clorofilla e trasformano energia luminosa in energia chimica." },
    { type: "tf", q: "La parete di cellulosa è presente nelle cellule animali.", answer: false, explain: "La parete di cellulosa caratterizza le cellule vegetali." }
  ],
  m: [
    { type: "mc", q: "Quale funzione hanno i ribosomi?", options: ["Digerire i rifiuti", "Costruire le proteine", "Produrre luce"], answer: 1, explain: "I ribosomi leggono l'RNA messaggero e assemblano le proteine." },
    { type: "num", q: "Con oculare 10× e obiettivo 10× quanti ingrandimenti totali ottieni?", answer: 100, unit: "×", explain: "L'ingrandimento totale è il prodotto: 10 × 10 = 100." },
    { type: "mc", q: "Quale affermazione sui mitocondri è corretta?", options: ["Si trovano solo nelle piante", "Producono la maggior parte dell'ATP", "Contengono la clorofilla"], answer: 1, explain: "Con la respirazione cellulare i mitocondri producono ATP, e sono presenti in animali, piante e funghi." },
    { type: "order", q: "Metti in ordine di dimensione crescente.", items: ["Batterio", "Globulo rosso", "Cellula uovo di rana", "Struzzo (uovo)"], explain: "Un batterio misura pochi µm, un globulo rosso 7 µm, l'uovo di rana circa 1-2 mm, l'uovo di struzzo oltre 15 cm." },
    { type: "tf", q: "Il vacuolo centrale della cellula vegetale contribuisce alla rigidità della pianta grazie al turgore.", answer: true, explain: "Il vacuolo pieno d'acqua spinge contro la parete e mantiene eretti i tessuti." }
  ],
  d: [
    { type: "mc", q: "Quale indizio sostiene l'origine endosimbiontica dei mitocondri?", options: ["Hanno un proprio DNA circolare e ribosomi di tipo batterico", "Sono presenti nei batteri", "Non hanno membrane"], answer: 0, explain: "Il DNA proprio e i ribosomi simili a quelli batterici, con la doppia membrana, indicano che derivano da batteri inglobati." },
    { type: "num", q: "Un cubo di lato 5 µm ha superficie 150 µm² e volume 125 µm³. Quanto vale il rapporto superficie/volume?", answer: 1.2, tol: 0.01, explain: "S/V = 150 ÷ 125 = 1,2 (coerente con la formula 6/l = 6/5)." },
    { type: "mc", q: "Una cellula del fegato deve demolire sostanze tossiche. Quale organulo è particolarmente sviluppato?", options: ["Reticolo endoplasmatico liscio", "Cloroplasto", "Centriolo"], answer: 0, explain: "Il REL partecipa alla detossificazione ed è abbondante negli epatociti." },
    { type: "tf", q: "I globuli rossi maturi dei mammiferi, privi di nucleo, sono procarioti.", answer: false, explain: "Derivano da cellule eucariote che hanno perso il nucleo durante la maturazione: non sono procarioti." },
    { type: "mc", q: "Perché Virchow, con \"omnis cellula e cellula\", contribuì a smentire la generazione spontanea?", options: ["Perché affermò che le cellule nascono solo da cellule preesistenti", "Perché dimostrò che le cellule non si dividono", "Perché scoprì i batteri"], answer: 0, explain: "Se ogni cellula viene da un'altra cellula, gli organismi non possono comparire dalla materia inerte." }
  ]
});
