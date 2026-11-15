QBANK("it", "lib-faro", {
  "f": [
    {
      "type": "mc",
      "q": "Che cosa segnala il faro alle navi?",
      "options": [
        "Dove trovare i pesci",
        "L'ora esatta",
        "Gli scogli pericolosi e l'ingresso dei porti"
      ],
      "answer": 2,
      "explain": "Il faro avvisa delle zone pericolose e indica dove sono i porti."
    },
    {
      "type": "tf",
      "q": "La stanza di vetro in cima al faro si chiama lanterna.",
      "answer": true,
      "explain": "Nella lanterna si trova la lampada con la lente."
    },
    {
      "type": "text",
      "q": "Come si chiamava la persona che viveva nel faro e si occupava della luce?",
      "answer": [
        "guardiano",
        "il guardiano",
        "guardiano del faro",
        "il guardiano del faro"
      ],
      "explain": "Il guardiano accendeva la lampada, puliva i vetri e caricava il meccanismo."
    },
    {
      "type": "mc",
      "q": "Che cosa c'è sulla cupola del faro per proteggerlo dai fulmini?",
      "options": [
        "Una bandiera",
        "Un parafulmine",
        "Una campana"
      ],
      "answer": 1,
      "explain": "Il faro è il punto più alto della costa, perciò ha un parafulmine."
    }
  ],
  "m": [
    {
      "type": "text",
      "q": "Come si chiama la lente inventata nel 1822 che concentra la luce del faro in fasci potenti?",
      "answer": [
        "lente di fresnel",
        "la lente di fresnel",
        "fresnel"
      ],
      "explain": "È la lente di Fresnel, formata da anelli di vetro."
    },
    {
      "type": "tf",
      "q": "Un faro con la luce più bassa si vede da più lontano, perché la luce è più concentrata.",
      "answer": false,
      "explain": "Falso: più la luce è in alto, più lontano si vede, perché la Terra è curva."
    },
    {
      "type": "mc",
      "q": "Perché i fari si costruiscono su scogliere, punte e isolotti?",
      "options": [
        "Perché ci sono più turisti",
        "Perché lì il mare è sempre calmo",
        "Perché lì le navi rischiano di più"
      ],
      "answer": 2,
      "explain": "I fari si mettono dove il pericolo per le navi è maggiore."
    },
    {
      "type": "order",
      "q": "Metti in ordine dal basso verso l'alto.",
      "items": [
        "Scogliera",
        "Torre con la scala",
        "Lanterna con la lente",
        "Cupola con il parafulmine"
      ],
      "explain": "Si parte dalla scogliera, si sale la torre fino alla lanterna e in cima c'è la cupola."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Marco dice: «La lente di Fresnel fa più luce della lampada». Che cosa non è corretto?",
      "options": [
        "Serve a far girare il faro",
        "Non crea luce nuova: concentra in fasci stretti quella della lampada",
        "Serve solo a riparare dal vento"
      ],
      "answer": 1,
      "explain": "La lente piega i raggi e li raccoglie in fasci, ma la luce la produce la lampada."
    },
    {
      "type": "tf",
      "q": "Oggi le navi hanno il GPS, perciò i fari non servono più a niente.",
      "answer": false,
      "explain": "Falso: se l'elettronica si guasta, la luce di un faro può ancora salvare una nave."
    },
    {
      "type": "num",
      "q": "Una lente con due fasci compie un giro ogni 15 secondi. Quanti lampi vede una nave in 1 minuto?",
      "answer": 8,
      "unit": "lampi",
      "explain": "In 60 secondi ci sono 60 : 15 = 4 giri. Ogni giro passano 2 fasci, quindi 4 × 2 = 8 lampi."
    },
    {
      "type": "mc",
      "q": "Una nave vede un faro con 3 lampi ogni 10 secondi e capisce quale faro è. Che cosa ha usato?",
      "options": [
        "Il colore delle strisce della torre",
        "Il rumore della lente",
        "La caratteristica del faro, cioè il suo ritmo di lampi"
      ],
      "answer": 2,
      "explain": "Ogni faro ha un ritmo di lampi tutto suo, e contandoli si riconosce."
    }
  ]
});
