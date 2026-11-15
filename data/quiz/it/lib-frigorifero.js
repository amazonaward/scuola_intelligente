QBANK("it", "lib-frigorifero", {
  "f": [
    {
      "type": "mc",
      "q": "Quale pezzo tiene ben chiusa la porta del frigorifero grazie a una calamita?",
      "options": [
        "Il termostato",
        "La guarnizione",
        "Il ripiano"
      ],
      "answer": 1,
      "explain": "Il bordo di gomma con la calamita si attacca al mobile di metallo e non lascia scappare l'aria fredda."
    },
    {
      "type": "tf",
      "q": "Se tieni la porta del frigorifero aperta a lungo, il compressore deve lavorare di più.",
      "answer": true,
      "explain": "Entra aria calda dalla stanza e il frigo deve togliere più calore per rimanere freddo."
    },
    {
      "type": "text",
      "q": "Come si chiama il liquido speciale che gira nei tubi del frigorifero e trasporta il calore?",
      "answer": [
        "refrigerante",
        "il refrigerante",
        "gas refrigerante",
        "fluido refrigerante"
      ],
      "explain": "Il refrigerante gira in un circuito chiuso: evapora e si condensa di continuo."
    },
    {
      "type": "mc",
      "q": "Che cosa misura la temperatura dentro il frigo e accende o spegne il compressore?",
      "options": [
        "Il termostato",
        "La lampadina",
        "Il ripiano di vetro"
      ],
      "answer": 0,
      "explain": "Il termostato spegne il compressore quando fa abbastanza freddo e lo riaccende quando si scalda."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Il freezer è a −18 °C e il frigorifero a +4 °C. Di quanti gradi il freezer è più freddo del frigorifero?",
      "answer": 22,
      "unit": "°C",
      "explain": "Dal +4 al −18: 4 + 18 = 22 gradi."
    },
    {
      "type": "mc",
      "q": "Perché è meglio non mettere in frigo una pentola di minestra ancora bollente?",
      "options": [
        "Perché il frigo si riempie d'acqua",
        "Perché la minestra diventa più salata",
        "Perché il frigo deve togliere molto più calore e il compressore lavora molto di più",
        "Perché la minestra non può congelarsi"
      ],
      "answer": 2,
      "explain": "Un cibo caldo porta dentro tanto calore: il frigo deve toglierlo e consuma di più, scaldando anche gli altri cibi."
    },
    {
      "type": "tf",
      "q": "Se lasci aperta la porta di un frigorifero acceso in una cucina chiusa, la cucina si raffredda.",
      "answer": false,
      "explain": "È falso: il frigo porta il calore fuori dal condensatore, nella cucina. Insieme al calore del motore, la stanza si scalda un po'."
    },
    {
      "type": "order",
      "q": "Metti in ordine che cosa succede quando dentro il frigo la temperatura sale.",
      "items": [
        "Dentro il frigo si scalda",
        "Il termostato lo sente",
        "Si riaccende il compressore",
        "Il refrigerante porta via calore e dentro torna freddo"
      ],
      "explain": "Il termostato regola il compressore: lo accende solo quando serve e lo spegne quando fa abbastanza freddo."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Il frigorifero di Anna è addossato al muro e la griglia nera dietro è coperta di polvere. Che cosa succede?",
      "options": [
        "Il frigo diventa più freddo",
        "Il calore esce male, il compressore lavora di più e si consuma più energia",
        "Il refrigerante si trasforma in acqua",
        "Il termostato si rompe subito"
      ],
      "answer": 1,
      "explain": "Il condensatore deve cedere calore all'aria: se è sporco o soffocato lo fa male e il compressore deve lavorare di più."
    },
    {
      "type": "mc",
      "q": "Quale fenomeno spiega sia il freddo che senti uscendo bagnato dalla piscina, sia il freddo dell'evaporatore?",
      "options": [
        "La condensazione libera calore",
        "Il ghiaccio produce freddo",
        "L'evaporazione assorbe calore da ciò che sta intorno",
        "L'aria fredda sale sempre"
      ],
      "answer": 2,
      "explain": "Quando un liquido evapora prende calore dall'ambiente: dalla tua pelle, o dall'aria e dai cibi nel frigo."
    },
    {
      "type": "num",
      "q": "Il frigorifero A consuma 1,2 kWh al giorno, il frigorifero B 0,8 kWh al giorno. Quanti kWh in meno consuma B in 30 giorni?",
      "answer": 12,
      "unit": "kWh",
      "explain": "1,2 − 0,8 = 0,4 kWh al giorno; 0,4 × 30 = 12 kWh."
    },
    {
      "type": "tf",
      "q": "Il condizionatore d'aria funziona con lo stesso principio del frigorifero: sposta il calore da un posto a un altro.",
      "answer": true,
      "explain": "Anche la pompa di calore che scalda le case fa lo stesso lavoro, in senso inverso."
    }
  ]
});
