QBANK("it", "lib-diga", {
  "f": [
    {
      "type": "mc",
      "q": "Che cosa si forma dietro il muro di una diga?",
      "options": [
        "Un lago artificiale",
        "Un deserto",
        "Un vulcano"
      ],
      "answer": 0,
      "explain": "La diga ferma il fiume e l'acqua si accumula formando un lago."
    },
    {
      "type": "tf",
      "q": "L'acqua che ha fatto girare la turbina viene consumata e non torna più nel fiume.",
      "answer": false,
      "explain": "È falso: l'acqua torna nel fiume, non è stata consumata né sporcata."
    },
    {
      "type": "text",
      "q": "Come si chiama il grosso tubo d'acciaio che porta l'acqua dal lago alla centrale?",
      "answer": [
        "condotta forzata",
        "la condotta forzata",
        "condotta"
      ],
      "explain": "Nella condotta forzata l'acqua scende e prende velocità."
    },
    {
      "type": "mc",
      "q": "Che cosa viene fatto girare dall'acqua che arriva dalla condotta?",
      "options": [
        "Il traliccio",
        "Il trasformatore",
        "La turbina"
      ],
      "answer": 2,
      "explain": "L'acqua investe le pale curve della turbina e la fa girare velocissima."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Ogni turbina di una centrale produce 25 megawatt. Una piccola città ne usa 100. Quante turbine servono per alimentarla?",
      "answer": 4,
      "unit": "turbine",
      "explain": "100 : 25 = 4 turbine."
    },
    {
      "type": "mc",
      "q": "Perché il trasformatore alza la tensione prima di mandare la corrente lungo i cavi?",
      "options": [
        "Per far muovere i tralicci",
        "Perché così nei cavi si perde pochissima energia nel viaggio",
        "Per rendere la corrente più sicura da toccare",
        "Per far girare più veloce la turbina"
      ],
      "answer": 1,
      "explain": "Con l'alta tensione la corrente può viaggiare per centinaia di chilometri perdendo pochissima energia."
    },
    {
      "type": "tf",
      "q": "Un lago artificiale è una riserva di energia: l'acqua in alto può scendere a far girare le turbine quando serve.",
      "answer": true,
      "explain": "L'acqua in alto ha energia potenziale: si apre la presa e l'energia si trasforma in movimento."
    },
    {
      "type": "text",
      "q": "Come si chiama l'energia che si ottiene dall'acqua che cade e fa girare le turbine? (due parole: energia …)",
      "answer": [
        "energia idroelettrica",
        "idroelettrica",
        "l'energia idroelettrica",
        "idroelettrico"
      ],
      "explain": "È l'energia idroelettrica: «idro» significa acqua."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Perché una diga deve lasciare scorrere sempre un po' d'acqua nel fiume a valle (deflusso minimo)?",
      "options": [
        "Per far girare più veloce la turbina",
        "Per rendere il muro più leggero",
        "Per non far morire pesci e piante del fiume",
        "Per produrre più corrente"
      ],
      "answer": 2,
      "explain": "Il fiume a valle ha bisogno di acqua, altrimenti i pesci e le piante che ci vivono non sopravvivono."
    },
    {
      "type": "mc",
      "q": "Alcune centrali hanno due laghi e, quando c'è energia in più, pompano l'acqua dal lago basso a quello alto. A che cosa serve?",
      "options": [
        "A immagazzinare energia, come una gigantesca batteria, da usare quando serve",
        "A pulire l'acqua del lago basso",
        "A far salire i pesci",
        "A raffreddare il generatore"
      ],
      "answer": 0,
      "explain": "L'acqua in alto ha energia potenziale: quando serve la fanno ricadere e produce corrente."
    },
    {
      "type": "num",
      "q": "Alle 8 un lago artificiale contiene 6 000 000 m³ di acqua. Per far girare le turbine escono 2000 m³ al minuto e non arriva acqua dal fiume. Quanta acqua resta nel lago dopo 1 ora?",
      "answer": 5880000,
      "unit": "m³",
      "explain": "1 ora = 60 minuti: 2000 × 60 = 120 000 m³ usciti. 6 000 000 − 120 000 = 5 880 000 m³."
    },
    {
      "type": "tf",
      "q": "Nel generatore la corrente nasce solo se le calamite si muovono rispetto alle bobine: se la turbina si ferma, la corrente non nasce più.",
      "answer": true,
      "explain": "Il movimento di un magnete vicino a una bobina fa nascere corrente. Senza movimento, niente corrente."
    }
  ]
});
