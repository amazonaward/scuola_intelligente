QBANK("ro", "lib-frigorifero", {
  "f": [
    {
      "type": "mc",
      "q": "Care piesă ține ușa frigiderului bine închisă cu ajutorul unui magnet?",
      "options": [
        "Termostatul",
        "Garnitura",
        "Raftul"
      ],
      "answer": 1,
      "explain": "Marginea de cauciuc cu magnet se lipește de corpul de metal și nu lasă aerul rece să scape."
    },
    {
      "type": "tf",
      "q": "Dacă ții ușa frigiderului deschisă mult timp, compresorul trebuie să lucreze mai mult.",
      "answer": true,
      "explain": "Intră aer cald din cameră, iar frigiderul trebuie să scoată mai multă căldură ca să rămână rece."
    },
    {
      "type": "text",
      "q": "Cum se numește lichidul special care circulă prin țevile frigiderului și transportă căldura?",
      "answer": [
        "agent frigorific",
        "agentul frigorific",
        "freon",
        "fluid frigorific",
        "fluidul frigorific",
        "refrigerent",
        "gaz frigorific"
      ],
      "explain": "Agentul frigorific circulă într-un circuit închis: se evaporă și se condensează tot timpul."
    },
    {
      "type": "mc",
      "q": "Ce măsoară temperatura din frigider și pornește sau oprește compresorul?",
      "options": [
        "Termostatul",
        "Becul",
        "Raftul de sticlă"
      ],
      "answer": 0,
      "explain": "Termostatul oprește compresorul când este destul de frig și îl repornește când se încălzește."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Congelatorul are −18 °C, iar frigiderul +4 °C. Cu câte grade este congelatorul mai rece decât frigiderul?",
      "answer": 22,
      "unit": "°C",
      "explain": "De la +4 la −18: 4 + 18 = 22 de grade."
    },
    {
      "type": "mc",
      "q": "De ce este mai bine să nu pui în frigider o oală cu supă încă fierbinte?",
      "options": [
        "Pentru că frigiderul se umple cu apă",
        "Pentru că supa devine mai sărată",
        "Pentru că frigiderul trebuie să scoată mult mai multă căldură, iar compresorul lucrează mult mai mult",
        "Pentru că supa nu poate îngheța"
      ],
      "answer": 2,
      "explain": "O mâncare fierbinte aduce multă căldură: frigiderul trebuie să o scoată și consumă mai mult, încălzind și celelalte alimente."
    },
    {
      "type": "tf",
      "q": "Dacă lași deschisă ușa unui frigider pornit într-o bucătărie închisă, bucătăria se răcește.",
      "answer": false,
      "explain": "Fals: frigiderul scoate căldura prin condensator în bucătărie. Împreună cu căldura motorului, camera se încălzește puțin."
    },
    {
      "type": "order",
      "q": "Pune în ordine ce se întâmplă când temperatura din frigider crește.",
      "items": [
        "Interiorul frigiderului se încălzește",
        "Termostatul simte schimbarea",
        "Compresorul pornește din nou",
        "Agentul frigorific scoate căldura și înăuntru e iar rece"
      ],
      "explain": "Termostatul controlează compresorul: îl pornește doar când e nevoie și îl oprește când e destul de frig."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Frigiderul Anei este lipit de perete, iar grila neagră din spate este acoperită de praf. Ce se întâmplă?",
      "options": [
        "Frigiderul devine mai rece",
        "Căldura iese greu, compresorul lucrează mai mult și se consumă mai multă energie",
        "Agentul frigorific se transformă în apă",
        "Termostatul se strică imediat"
      ],
      "answer": 1,
      "explain": "Condensatorul trebuie să cedeze căldură aerului: dacă este murdar sau sufocat, o face prost, iar compresorul trebuie să lucreze mai mult."
    },
    {
      "type": "mc",
      "q": "Ce fenomen explică atât frigul pe care îl simți când ieși ud din piscină, cât și frigul evaporatorului?",
      "options": [
        "Condensarea eliberează căldură",
        "Gheața produce frig",
        "Evaporarea absoarbe căldură de la ce este în jur",
        "Aerul rece urcă mereu"
      ],
      "answer": 2,
      "explain": "Când un lichid se evaporă, ia căldură din jur: de la pielea ta sau de la aerul și alimentele din frigider."
    },
    {
      "type": "num",
      "q": "Frigiderul A consumă 1,2 kWh pe zi, frigiderul B 0,8 kWh pe zi. Cu câți kWh mai puțin consumă B în 30 de zile?",
      "answer": 12,
      "unit": "kWh",
      "explain": "1,2 − 0,8 = 0,4 kWh pe zi; 0,4 × 30 = 12 kWh."
    },
    {
      "type": "tf",
      "q": "Aparatul de aer condiționat funcționează după același principiu ca frigiderul: mută căldura dintr-un loc în altul.",
      "answer": true,
      "explain": "Pompa de căldură care încălzește casele face aceeași treabă, în sens invers."
    }
  ]
});
