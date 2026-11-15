QBANK("ro", "lib-lampadina", {
  "f": [
    {
      "type": "mc",
      "q": "Care bec consumă mai puțină energie pentru aceeași lumină?",
      "options": [
        "Cel cu incandescență",
        "Cel LED",
        "Consumă la fel"
      ],
      "answer": 1,
      "explain": "LED-ul face lumină aproape fără să se încălzească, de aceea consumă mult mai puțin."
    },
    {
      "type": "tf",
      "q": "Becul cu incandescență arde la atingere pentru că aproape toată energia se transformă în căldură.",
      "answer": true,
      "explain": "Aproximativ 95 de părți din 100 devin căldură și doar 5 devin lumină."
    },
    {
      "type": "text",
      "q": "Cum se numește partea metalică a becului care se înșurubează în dulie?",
      "answer": [
        "soclu",
        "soclul",
        "soclu cu filet",
        "soclu e27",
        "dulie",
        "culot"
      ],
      "explain": "Soclul cu filet aduce curentul de la dulie la bec."
    },
    {
      "type": "mc",
      "q": "Cine a făcut practic becul cu incandescență în 1879?",
      "options": [
        "Isaac Newton",
        "Leonardo da Vinci",
        "Thomas Edison"
      ],
      "answer": 2,
      "explain": "Edison a folosit un filament de bambus carbonizat, dar și alți inventatori lucrau la el."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Un bec cu incandescență de 100 de wați este înlocuit cu un LED de 12 wați, care dă aceeași lumină. Câți wați se economisesc schimbând 5 becuri?",
      "answer": 440,
      "unit": "wați",
      "explain": "100 − 12 = 88 de wați pe bec; 88 × 5 = 440 de wați."
    },
    {
      "type": "mc",
      "q": "De ce devine filamentul incandescent, în timp ce firele care aduc curentul rămân reci?",
      "options": [
        "Pentru că filamentul este foarte subțire, iar curentul trece greu prin el",
        "Pentru că filamentul este din lemn",
        "Pentru că firele nu au curent",
        "Pentru că filamentul este vopsit în negru"
      ],
      "answer": 0,
      "explain": "În firul foarte subțire curentul întâmpină dificultăți și îl încălzește; în firele groase trece ușor."
    },
    {
      "type": "tf",
      "q": "Un LED emite lumină direct, fără să fie nevoie să devină incandescent.",
      "answer": true,
      "explain": "Când îl străbate curentul, electronii își eliberează energia sub formă de lumină, aproape fără căldură."
    },
    {
      "type": "order",
      "q": "Pune în ordine ce se întâmplă când aprinzi un bec cu incandescență.",
      "items": [
        "Apeși întrerupătorul și circuitul se închide",
        "Curentul trece prin filament",
        "Filamentul se încălzește până la aproximativ 2500 °C",
        "Filamentul strălucește în lumină galbenă"
      ],
      "explain": "Circuitul închis lasă curentul să treacă, iar acesta încălzește filamentul până strălucește."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Două becuri dau aceeași cantitate de lumină, 800 de lumeni: A folosește 60 de wați, B folosește 8 wați. Care afirmație este corectă?",
      "options": [
        "A este mai bun, pentru că consumă mai mult",
        "Sunt la fel, pentru că wații nu contează",
        "A dă mai multă lumină, pentru că are mai mulți wați",
        "B este mai bun, pentru că dă aceeași lumină cu mai puțină energie"
      ],
      "answer": 3,
      "explain": "Lumenii arată cât de multă lumină, wații cât de multă energie se consumă: un bec bun dă mulți lumeni cu puțini wați."
    },
    {
      "type": "num",
      "q": "Un bec LED durează 20 000 de ore, un bec cu incandescență durează 1000 de ore. Câte becuri cu incandescență sunt necesare ca să acopere orele unui LED?",
      "answer": 20,
      "unit": "becuri",
      "explain": "20 000 : 1000 = 20 de becuri."
    },
    {
      "type": "tf",
      "q": "Dacă filamentul se rupe, circuitul rămâne închis și becul continuă să dea lumină.",
      "answer": false,
      "explain": "Fals: firul rupt întrerupe circuitul, curentul nu mai poate circula și becul se stinge."
    },
    {
      "type": "mc",
      "q": "De ce are becul LED înăuntru un mic circuit numit «driver»?",
      "options": [
        "Ca să învârtă luminile",
        "Pentru că LED-urile nu suportă curentul de casă și trebuie transformat în curent slab și continuu",
        "Ca să se încălzească becul",
        "Ca să umple bulbul cu gaz"
      ],
      "answer": 1,
      "explain": "Curentul de casă este prea «puternic» pentru LED-uri: driverul îl transformă în curent slab și continuu."
    }
  ]
});
