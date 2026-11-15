QBANK("it", "p4-geo-settori-economici", {
  "f": [
    {
      "type": "mc",
      "q": "Quale di queste cose è un bene, cioè si può toccare?",
      "options": [
        "Una lezione",
        "Una sedia",
        "Un taglio di capelli"
      ],
      "answer": 1,
      "explain": "La sedia è un oggetto: è un bene. Lezione e taglio di capelli sono servizi."
    },
    {
      "type": "tf",
      "q": "Un taglio di capelli è un servizio.",
      "answer": true,
      "explain": "Vero: è un'attività utile agli altri che non è un oggetto."
    },
    {
      "type": "mc",
      "q": "In quale settore lavora una maestra?",
      "options": [
        "Primario",
        "Secondario",
        "Terziario"
      ],
      "answer": 2,
      "explain": "La scuola offre un servizio: è il settore terziario."
    },
    {
      "type": "text",
      "q": "Come si chiama il settore che trasforma le materie prime in prodotti finiti?",
      "answer": [
        "secondario",
        "il secondario",
        "settore secondario",
        "il settore secondario"
      ],
      "explain": "È il settore secondario: industria, artigianato, edilizia e produzione di energia."
    },
    {
      "type": "num",
      "q": "Circa quanti anni fa l'uomo ha iniziato a coltivare la terra e ad allevare gli animali?",
      "answer": 10000,
      "unit": "anni",
      "tol": 1000,
      "explain": "Circa 10.000 anni fa, nel Neolitico: il settore primario è il più antico."
    }
  ],
  "m": [
    {
      "type": "mc",
      "q": "Un falegname costruisce un tavolo a mano nella sua bottega. In quale settore lavora?",
      "options": [
        "Primario",
        "Secondario",
        "Terziario"
      ],
      "answer": 1,
      "explain": "Trasforma il legno in un prodotto finito: l'artigianato è nel settore secondario."
    },
    {
      "type": "num",
      "q": "In una classe di 20 bambini, i 40 genitori lavorano così: 2 nel primario, 10 nel secondario, 28 nel terziario. Quanti genitori NON lavorano nel terziario?",
      "answer": 12,
      "unit": "genitori",
      "explain": "2 + 10 = 12 genitori, oppure 40 − 28 = 12."
    },
    {
      "type": "tf",
      "q": "Una banca fa parte del settore secondario.",
      "answer": false,
      "explain": "Falso: la banca offre servizi finanziari, quindi appartiene al settore terziario."
    },
    {
      "type": "order",
      "q": "Metti in ordine il viaggio di una maglietta di cotone.",
      "items": [
        "Si coltiva e si raccoglie il cotone",
        "Il cotone diventa filo e poi stoffa",
        "La stoffa viene tagliata e cucita",
        "Un negozio vende la maglietta"
      ],
      "explain": "Prima il primario (cotone), poi il secondario (filo, stoffa, cucito) e infine il terziario (negozio)."
    },
    {
      "type": "text",
      "q": "Il Parmigiano Reggiano può chiamarsi così solo se prodotto in una certa zona. Come si chiama questo marchio di tre lettere (in italiano)?",
      "answer": [
        "dop",
        "d.o.p.",
        "d.o.p"
      ],
      "explain": "Si chiama DOP, Denominazione di Origine Protetta."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Nel 1861 circa 70 persone su 100 lavoravano in agricoltura. Oggi sono circa 4 su 100. Di quante persone su 100 è calato il numero?",
      "answer": 66,
      "unit": "su 100",
      "explain": "70 − 4 = 66 persone su 100 in meno. Le macchine agricole fanno il lavoro di tanti contadini."
    },
    {
      "type": "mc",
      "q": "Un'azienda: A coltiva il grano, B fa i biscotti in fabbrica, C porta i biscotti ai negozi con i camion, D li vende al supermercato. Quali due lavori sono del terziario?",
      "options": [
        "A e B",
        "C e D",
        "B e C"
      ],
      "answer": 1,
      "explain": "Trasporto (C) e vendita (D) sono servizi. A è primario e B è secondario."
    },
    {
      "type": "mc",
      "q": "Perché il turismo invernale in montagna (sci, alberghi) appartiene al terziario?",
      "options": [
        "Perché offre servizi alle persone e non ricava risorse dalla natura",
        "Perché c'è la neve",
        "Perché si lavora solo d'inverno"
      ],
      "answer": 0,
      "explain": "Il terziario offre servizi. Il primario ricava risorse dalla natura (pascoli, boschi) e il secondario trasforma."
    },
    {
      "type": "tf",
      "q": "Con sempre più robot e macchine nei campi e nelle fabbriche, servono sempre più operai e contadini.",
      "answer": false,
      "explain": "Falso: le macchine fanno il lavoro di tante persone, quindi ne servono meno. Servono invece più tecnici e programmatori."
    },
    {
      "type": "order",
      "q": "Metti in ordine questi momenti della storia del lavoro, dal più antico al più recente.",
      "items": [
        "Nasce l'agricoltura nel Neolitico",
        "Rivoluzione industriale con la macchina a vapore",
        "L'Italia diventa uno Stato unito (1861)",
        "Il boom economico (1958–1963)"
      ],
      "explain": "Agricoltura circa 10.000 anni fa, Rivoluzione industriale nel Settecento, Unità 1861, boom 1958–1963."
    }
  ]
});
