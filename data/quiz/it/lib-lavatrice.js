QBANK("it", "lib-lavatrice", {
  "f": [
    {
      "type": "mc",
      "q": "Dove si mette il detersivo prima di far partire la lavatrice?",
      "options": [
        "Nel cassetto del detersivo",
        "Nella pompa di scarico",
        "Dentro l'oblò"
      ],
      "answer": 0,
      "explain": "L'acqua che entra passa dal cassetto e trascina il detersivo nella vasca."
    },
    {
      "type": "tf",
      "q": "Durante il lavaggio l'oblò si blocca da solo, così non si può aprire con l'acqua dentro.",
      "answer": true,
      "explain": "Il blocco dello sportello evita che l'acqua esca."
    },
    {
      "type": "text",
      "q": "Come si chiama il grande «barile» bucherellato dove metti i panni?",
      "answer": [
        "cestello",
        "il cestello",
        "tamburo",
        "il tamburo"
      ],
      "explain": "Il cestello gira dentro la vasca e solleva i panni con le sue alette."
    },
    {
      "type": "mc",
      "q": "Quale scelta fa risparmiare più energia?",
      "options": [
        "Lavare sempre a 90 °C",
        "Lavare a 30 °C quando i panni sono poco sporchi",
        "Lavare a 60 °C anche i panni puliti"
      ],
      "answer": 1,
      "explain": "Scaldare l'acqua è ciò che consuma di più: a 30 °C si usa meno della metà dell'energia rispetto a 60 °C."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Un lavaggio a 30 °C consuma 0,5 kWh e uno a 60 °C ne consuma 1,2. Quanti kWh si risparmiano facendo 10 lavaggi a 30 °C invece che a 60 °C?",
      "answer": 7,
      "unit": "kWh",
      "explain": "1,2 − 0,5 = 0,7 kWh per lavaggio; 0,7 × 10 = 7 kWh."
    },
    {
      "type": "mc",
      "q": "Perché la lavatrice deve stare «in bolla» sui suoi piedini regolabili?",
      "options": [
        "Perché così lava con meno acqua",
        "Perché così fa meno schiuma",
        "Perché altrimenti in centrifuga vibra e «cammina»",
        "Perché così si riscalda prima"
      ],
      "answer": 2,
      "explain": "Se non è ben livellata, le vibrazioni della centrifuga la fanno ballare e spostare."
    },
    {
      "type": "tf",
      "q": "La ruota grande (puleggia) attaccata al cestello gira più piano della ruota piccola del motore, ma con più forza.",
      "answer": true,
      "explain": "La cinghia collega le due ruote: la grande gira più lentamente e con più forza."
    },
    {
      "type": "order",
      "q": "Metti in ordine come entra l'acqua nella lavatrice.",
      "items": [
        "La scheda elettronica apre l'elettrovalvola",
        "L'acqua passa dal cassetto e porta con sé il detersivo",
        "L'acqua entra nella vasca",
        "Il pressostato sente che basta e la valvola si chiude"
      ],
      "explain": "L'acqua entra solo fino a quando il sensore di pressione la sente abbastanza alta: poi la valvola si chiude."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Dopo un trasloco la lavatrice «cammina» e rumoreggia in centrifuga. Che cosa controlli per prima?",
      "options": [
        "Che il detersivo sia nel cassetto giusto",
        "Che la pompa non sia intasata",
        "Che la resistenza sia calda",
        "Che sia ben in bolla sui piedini e che i panni siano distribuiti bene nel cestello"
      ],
      "answer": 3,
      "explain": "Una lavatrice non livellata o con panni tutti da una parte vibra molto: è la prima cosa da controllare."
    },
    {
      "type": "num",
      "q": "Il motore gira a 6000 giri al minuto. La ruota grande attaccata al cestello ha un diametro 5 volte più grande della ruota piccola del motore. A quanti giri al minuto gira il cestello?",
      "answer": 1200,
      "unit": "giri/min",
      "explain": "Con la cinghia, ruota 5 volte più grande = giri 5 volte minori: 6000 : 5 = 1200 giri al minuto."
    },
    {
      "type": "tf",
      "q": "La resistenza serve a far girare il cestello, perché la corrente la fa muovere come un motore.",
      "answer": false,
      "explain": "È falso: la resistenza si scalda quando la attraversa la corrente e scalda l'acqua. A far girare il cestello è il motore elettrico."
    },
    {
      "type": "mc",
      "q": "I tessuti sintetici come il pile perdono minuscoli fili di plastica a ogni lavaggio. Quale scelta aiuta di più a ridurre il problema?",
      "options": [
        "Lavare sempre a 90 °C",
        "Usare un sacchetto o un filtro speciale che trattiene i fili",
        "Usare più detersivo",
        "Centrifugare più a lungo"
      ],
      "answer": 1,
      "explain": "Esistono sacchetti e filtri speciali che trattengono le microplastiche, così non arrivano fino al mare."
    }
  ]
});
