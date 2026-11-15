QBANK("it", "lib-lampadina", {
  "f": [
    {
      "type": "mc",
      "q": "Quale lampadina consuma meno energia per fare la stessa luce?",
      "options": [
        "Quella a incandescenza",
        "Quella LED",
        "Consumano uguale"
      ],
      "answer": 1,
      "explain": "La LED fa luce quasi senza scaldarsi, per questo consuma molto meno."
    },
    {
      "type": "tf",
      "q": "La lampadina a incandescenza scotta perché quasi tutta l'energia diventa calore.",
      "answer": true,
      "explain": "Circa 95 parti su 100 diventano calore e solo 5 luce."
    },
    {
      "type": "text",
      "q": "Come si chiama la parte di metallo della lampadina che si avvita nel portalampada?",
      "answer": [
        "attacco",
        "l'attacco",
        "attacco a vite",
        "vite",
        "attacco e27"
      ],
      "explain": "L'attacco a vite porta la corrente dal portalampada alla lampadina."
    },
    {
      "type": "mc",
      "q": "Chi rese pratica la lampadina a incandescenza nel 1879?",
      "options": [
        "Isaac Newton",
        "Leonardo da Vinci",
        "Thomas Edison"
      ],
      "answer": 2,
      "explain": "Edison usò un filamento di bambù carbonizzato, ma ci lavoravano anche altri inventori."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Una lampadina a incandescenza da 100 watt viene sostituita da una LED da 12 watt che fa la stessa luce. Quanti watt si risparmiano cambiando 5 lampadine?",
      "answer": 440,
      "unit": "watt",
      "explain": "100 − 12 = 88 watt per lampadina; 88 × 5 = 440 watt."
    },
    {
      "type": "mc",
      "q": "Perché il filamento diventa rovente, mentre i fili che portano la corrente restano freddi?",
      "options": [
        "Perché il filamento è sottilissimo e la corrente fa fatica ad attraversarlo",
        "Perché il filamento è fatto di legno",
        "Perché i fili non hanno corrente",
        "Perché il filamento è dipinto di nero"
      ],
      "answer": 0,
      "explain": "Nel filo sottilissimo la corrente incontra molta difficoltà e lo scalda; nei fili grossi passa facilmente."
    },
    {
      "type": "tf",
      "q": "Un LED emette luce direttamente, senza bisogno di diventare rovente.",
      "answer": true,
      "explain": "Quando la corrente lo attraversa, gli elettroni liberano la loro energia come luce, quasi senza calore."
    },
    {
      "type": "order",
      "q": "Metti in ordine che cosa succede quando accendi una lampadina a incandescenza.",
      "items": [
        "Premi l'interruttore e il circuito si chiude",
        "La corrente scorre attraverso il filamento",
        "Il filamento si scalda fino a circa 2500 °C",
        "Il filamento brilla di luce gialla"
      ],
      "explain": "Il circuito chiuso lascia passare la corrente, che scalda il filamento fino a farlo brillare."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Due lampadine fanno la stessa quantità di luce, 800 lumen: la A usa 60 watt, la B usa 8 watt. Quale affermazione è corretta?",
      "options": [
        "La A è migliore, perché consuma di più",
        "Sono uguali, perché i watt non contano",
        "La A fa più luce, perché ha più watt",
        "La B è migliore, perché fa la stessa luce con meno energia"
      ],
      "answer": 3,
      "explain": "I lumen dicono quanta luce, i watt quanta energia si consuma: una buona lampadina fa tanti lumen con pochi watt."
    },
    {
      "type": "num",
      "q": "Una lampadina LED dura 20 000 ore, una lampadina a incandescenza dura 1000 ore. Quante lampadine a incandescenza servono per fare le ore di una LED?",
      "answer": 20,
      "unit": "lampadine",
      "explain": "20 000 : 1000 = 20 lampadine."
    },
    {
      "type": "tf",
      "q": "Se il filamento si rompe, il circuito resta chiuso e la lampadina continua a fare luce.",
      "answer": false,
      "explain": "È falso: il filo rotto interrompe il circuito, la corrente non può più scorrere e la lampadina si spegne."
    },
    {
      "type": "mc",
      "q": "Perché la lampadina LED ha dentro un piccolo circuito chiamato «driver»?",
      "options": [
        "Per far girare le luci",
        "Perché i LED non sopportano la corrente di casa e serve trasformarla in corrente debole e continua",
        "Per far diventare calda la lampadina",
        "Per riempire il bulbo di gas"
      ],
      "answer": 1,
      "explain": "La corrente di casa è troppo «forte» per i LED: il driver la trasforma in corrente debole e continua."
    }
  ]
});
