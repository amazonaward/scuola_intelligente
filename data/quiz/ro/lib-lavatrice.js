QBANK("ro", "lib-lavatrice", {
  "f": [
    {
      "type": "mc",
      "q": "Unde se pune detergentul înainte de a porni mașina de spălat?",
      "options": [
        "În sertarul pentru detergent",
        "În pompa de evacuare",
        "În hublou"
      ],
      "answer": 0,
      "explain": "Apa care intră trece prin sertar și duce detergentul în cuvă."
    },
    {
      "type": "tf",
      "q": "În timpul spălării hubloul se blochează singur, așa că nu poate fi deschis cu apă înăuntru.",
      "answer": true,
      "explain": "Blocarea ușii împiedică ieșirea apei."
    },
    {
      "type": "text",
      "q": "Cum se numește «butoiul» mare găurit în care pui rufele?",
      "answer": [
        "tambur",
        "tamburul",
        "cuvă interioară"
      ],
      "explain": "Tamburul se învârte în cuvă și ridică rufele cu paletele lui."
    },
    {
      "type": "mc",
      "q": "Care alegere economisește cea mai multă energie?",
      "options": [
        "Să speli mereu la 90 °C",
        "Să speli la 30 °C când rufele sunt puțin murdare",
        "Să speli la 60 °C chiar și rufele curate"
      ],
      "answer": 1,
      "explain": "Încălzirea apei consumă cel mai mult: la 30 °C se folosește mai puțin de jumătate din energia de la 60 °C."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "O spălare la 30 °C consumă 0,5 kWh, iar una la 60 °C consumă 1,2. Câți kWh se economisesc făcând 10 spălări la 30 °C în loc de 60 °C?",
      "answer": 7,
      "unit": "kWh",
      "explain": "1,2 − 0,5 = 0,7 kWh pe spălare; 0,7 × 10 = 7 kWh."
    },
    {
      "type": "mc",
      "q": "De ce trebuie ca mașina de spălat să fie «în nivel» pe picioarele reglabile?",
      "options": [
        "Ca să spele cu mai puțină apă",
        "Ca să facă mai puțină spumă",
        "Pentru că altfel vibrează și «umblă» la centrifugare",
        "Ca să se încălzească mai repede"
      ],
      "answer": 2,
      "explain": "Dacă nu este bine nivelată, vibrațiile centrifugării o fac să tremure și să se mute."
    },
    {
      "type": "tf",
      "q": "Roata mare (scripetele) atașată de tambur se învârte mai încet decât roata mică a motorului, dar cu mai multă forță.",
      "answer": true,
      "explain": "Cureaua leagă cele două roți: cea mare se învârte mai încet și cu mai multă forță."
    },
    {
      "type": "order",
      "q": "Pune în ordine cum intră apa în mașina de spălat.",
      "items": [
        "Placa electronică deschide electrovalva",
        "Apa trece prin sertar și duce detergentul cu ea",
        "Apa intră în cuvă",
        "Presostatul simte că ajunge și supapa se închide"
      ],
      "explain": "Apa intră doar până când senzorul de presiune simte că e destulă: apoi supapa se închide."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "După o mutare, mașina de spălat «umblă» și face zgomot la centrifugare. Ce verifici mai întâi?",
      "options": [
        "Că detergentul este în sertarul potrivit",
        "Că pompa nu este înfundată",
        "Că rezistența este fierbinte",
        "Că este bine nivelată pe picioare și că rufele sunt bine distribuite în tambur"
      ],
      "answer": 3,
      "explain": "O mașină nenivelată sau cu toate rufele pe o parte vibrează mult: este primul lucru de verificat."
    },
    {
      "type": "num",
      "q": "Motorul se învârte cu 6000 de rotații pe minut. Roata mare atașată de tambur are diametrul de 5 ori mai mare decât roata mică a motorului. Cu câte rotații pe minut se învârte tamburul?",
      "answer": 1200,
      "unit": "rot/min",
      "explain": "Cu o curea, o roată de 5 ori mai mare se învârte de 5 ori mai încet: 6000 : 5 = 1200 de rotații pe minut."
    },
    {
      "type": "tf",
      "q": "Rezistența servește la învârtirea tamburului, pentru că curentul o face să se miște ca un motor.",
      "answer": false,
      "explain": "Fals: rezistența se încălzește când trece curentul prin ea și încălzește apa. Tamburul îl învârte motorul electric."
    },
    {
      "type": "mc",
      "q": "Țesăturile sintetice, ca fleece-ul, pierd fire minuscule de plastic la fiecare spălare. Care alegere ajută cel mai mult să reducem problema?",
      "options": [
        "Să speli mereu la 90 °C",
        "Să folosești un sac sau un filtru special care reține firele",
        "Să folosești mai mult detergent",
        "Să centrifughezi mai mult timp"
      ],
      "answer": 1,
      "explain": "Există saci și filtre speciale care rețin microplasticele, așa că ele nu ajung până la mare."
    }
  ]
});
