QBANK("it", "l5-sci-clima-atmosfera", {
  f: [
    { type: "mc", q: "Quale gas è il più abbondante nell'aria?", options: ["Azoto", "Ossigeno", "Anidride carbonica", "Idrogeno"], answer: 0, explain: "Circa il 78% dell'aria secca è azoto." },
    { type: "tf", q: "Lo strato di ozono ci protegge dai raggi ultravioletti.", answer: true, explain: "L'ozono stratosferico assorbe gran parte degli UV nocivi." },
    { type: "text", q: "Come si chiama lo strato più basso dell'atmosfera, dove vive l'uomo?", answer: ["troposfera", "la troposfera"], explain: "È lo strato in cui si formano le nuvole e il tempo meteorologico." },
    { type: "mc", q: "Quale di questi è un gas serra?", options: ["Anidride carbonica", "Argon", "Azoto", "Elio"], answer: 0, explain: "La CO₂ assorbe la radiazione infrarossa." },
    { type: "mc", q: "Il tempo meteorologico è...", options: ["Lo stato dell'atmosfera in un dato momento e luogo", "La media su 30 anni", "Un gas", "Una scala di misura"], answer: 0, explain: "Il clima è invece la media su un lungo periodo." }
  ],
  m: [
    { type: "num", q: "Di quanti gradi diminuisce in media la temperatura ogni 1000 m di quota in troposfera (valore intero arrotondato)?", answer: 6.5, tol: 0.5, unit: "°C", explain: "Il gradiente termico verticale medio è di circa 6,5 °C ogni km." },
    { type: "mc", q: "Perché le zone costiere hanno un clima più mite?", options: ["L'acqua del mare cambia temperatura lentamente", "Il mare è più freddo dell'aria", "Ci sono meno nuvole", "La latitudine è diversa"], answer: 0, explain: "L'elevato calore specifico dell'acqua attenua escursioni e variazioni." },
    { type: "tf", q: "L'anno 2023 è stato più caldo rispetto alla media preindustriale di circa 1,4 °C.", answer: true, explain: "Fu uno degli anni più caldi mai registrati, circa 1,4-1,5 °C sopra il livello preindustriale." },
    { type: "mc", q: "Quale di queste NON è una prova del riscaldamento globale?", options: ["Un giorno particolarmente caldo in agosto", "Il ritiro dei ghiacciai", "Il livello del mare in aumento", "La curva di Keeling"], answer: 0, explain: "Un singolo giorno è tempo, non clima: servono tendenze di lungo periodo." },
    { type: "mc", q: "Quale gas è prodotto soprattutto da allevamenti, risaie e discariche?", options: ["Metano", "Ozono", "Azoto", "Argon"], answer: 0, explain: "Il metano è un potente gas serra di origine in gran parte agricola." }
  ],
  d: [
    { type: "num", q: "Calcola l'energia solare media assorbita dalla Terra in W/m² con costante solare 1361 W/m² e albedo 0,3 (arrotonda all'intero).", answer: 238, tol: 2, unit: "W/m²", explain: "1361/4 = 340 W/m² medi; × 0,7 = circa 238 W/m²." },
    { type: "mc", q: "Perché N₂ e O₂ non sono gas serra?", options: ["Sono molecole biatomiche simmetriche che non cambiano momento di dipolo vibrando", "Sono troppo leggeri", "Sono liquidi", "Reagiscono con l'ozono"], answer: 0, explain: "Per assorbire l'infrarosso, la vibrazione deve alterare la distribuzione di carica." },
    { type: "tf", q: "Il vapore acqueo è un gas serra che amplifica il riscaldamento causato dalla CO₂ (retroazione positiva).", answer: true, explain: "Più caldo → più evaporazione → più vapore → più effetto serra." },
    { type: "mc", q: "Quale evidenza distingue l'origine fossile della CO₂ in eccesso?", options: ["Il rapporto isotopico del carbonio (meno 13C, assenza di 14C)", "La temperatura dell'aria", "La quantità di azoto", "L'altezza delle nuvole"], answer: 0, explain: "La CO₂ da combustibili fossili contiene carbonio antico, senza ¹⁴C, e un rapporto ¹³C/¹²C più basso." },
    { type: "mc", q: "Quale affermazione sui modelli climatici è corretta?", options: ["Si verificano riproducendo il clima passato e confrontando le previsioni con le osservazioni", "Prevedono il meteo di ogni singolo giorno del 2050", "Non usano la fisica", "Sono basati solo su statistiche senza leggi"], answer: 0, explain: "Si basano sulle leggi della fisica e si convalidano con il passato (hindcast); non prevedono il tempo di un singolo giorno." }
  ]
});
