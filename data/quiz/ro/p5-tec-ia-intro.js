QBANK("ro", "p5-tec-ia-intro", {
  "f": [
    {
      "type": "mc",
      "q": "Ce înseamnă «IA»?",
      "options": [
        "Informație automată",
        "Internet avansat",
        "Inteligență artificială"
      ],
      "answer": 2,
      "explain": "IA înseamnă inteligență artificială."
    },
    {
      "type": "tf",
      "q": "Un chatbot poate da răspunsuri greșite.",
      "answer": true,
      "explain": "Chiar dacă scrie bine, poate greși sau inventa: trebuie să verifici mereu."
    },
    {
      "type": "mc",
      "q": "Care dintre acestea folosește inteligența artificială?",
      "options": [
        "Deblocarea telefonului cu fața",
        "Un semafor cu timp fix",
        "O riglă"
      ],
      "answer": 0,
      "explain": "Recunoașterea unei fețe este ceva ce IA învață din exemple; semaforul cu timp fix și rigla nu învață nimic."
    },
    {
      "type": "text",
      "q": "Cu ce este antrenată o IA? Sunt exemplele pe care i le arătăm.",
      "answer": [
        "date",
        "datele",
        "date de antrenament",
        "exemple",
        "exemplele"
      ],
      "explain": "O IA învață din date: multe exemple, adesea cu etichete."
    },
    {
      "type": "tf",
      "q": "O inteligență artificială înțelege lucrurile exact ca un om.",
      "answer": false,
      "explain": "IA calculează probabilități pe baza exemplelor văzute; nu înțelege lumea ca o persoană."
    }
  ],
  "m": [
    {
      "type": "mc",
      "q": "Cum a învățat filtrul antispam să recunoască poșta nedorită?",
      "options": [
        "Un programator a scris o regulă pentru fiecare e-mail posibil",
        "Din e-mailurile pe care utilizatorii le-au marcat ca spam",
        "Un angajat citește fiecare e-mail"
      ],
      "answer": 1,
      "explain": "Semnalările utilizatorilor sunt etichetele: sistemul învață ce apare des în spam."
    },
    {
      "type": "num",
      "q": "O echipă are 5.000 de fotografii. 20% sunt pentru verificare, iar restul pentru antrenament. Câte fotografii se folosesc la antrenament?",
      "answer": 4000,
      "unit": "fotografii",
      "explain": "20% din 5.000 = 1.000 de fotografii pentru verificare; 5.000 − 1.000 = 4.000."
    },
    {
      "type": "mc",
      "q": "Un asistent vocal a fost antrenat doar cu voci de adulți. Ce se poate întâmpla cu vocea unui copil?",
      "options": [
        "Va înțelege perfect, pentru că toate vocile sunt la fel",
        "Se va bloca și va închide telefonul",
        "Poate înțelege mai prost, pentru că nu a auzit niciodată exemple asemănătoare"
      ],
      "answer": 2,
      "explain": "IA învață doar din exemplele primite: cu voci pe care nu le-a auzit poate greși mai mult."
    },
    {
      "type": "order",
      "q": "Pune în ordine drumul informației într-o rețea neuronală.",
      "items": [
        "Stratul de intrare (de exemplu pixelii)",
        "Straturile ascunse",
        "Stratul de ieșire (răspunsul)"
      ],
      "explain": "Datele intră, straturile ascunse descoperă forme tot mai complexe, ultimul strat dă răspunsul."
    },
    {
      "type": "text",
      "q": "Cum se numesc numerele de pe conexiunile unei rețele neuronale, care se ajustează în timpul antrenării?",
      "answer": [
        "ponderi",
        "ponderile",
        "pondere",
        "greutăți",
        "greutățile"
      ],
      "explain": "A antrena o rețea înseamnă a-i ajusta ponderile puțin câte puțin până când răspunsurile sunt corecte."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "O IA este antrenată cu 1.000 de fotografii de labradori și doar 10 fotografii de alte rase de câini. Care este problema cea mai probabilă?",
      "options": [
        "Va recunoaște bine labradorii, dar va greși des cu celelalte rase",
        "Va recunoaște toate rasele la fel de bine",
        "Nu va recunoaște nici măcar labradorii"
      ],
      "answer": 0,
      "explain": "Date dezechilibrate: a văzut foarte puține exemple din celelalte rase, deci greșește mai des cu ele."
    },
    {
      "type": "tf",
      "q": "Dacă un chatbot scrie foarte sigur și convingător, răspunsul lui este sigur corect.",
      "answer": false,
      "explain": "Un chatbot poate scrie cu încredere chiar și lucruri inventate (halucinații): trebuie să verifici pe surse de încredere."
    },
    {
      "type": "mc",
      "q": "Care dintre aceste sarcini se potrivește unei IA care învață din exemple, pentru că regulile ei sunt greu de scris?",
      "options": [
        "Adunarea a două numere",
        "Recunoașterea unui câine într-o fotografie",
        "Aprinderea unei lumini în fiecare zi la ora 18"
      ],
      "answer": 1,
      "explain": "Adunarea și aprinderea la oră fixă se fac cu reguli simple; recunoașterea unui câine este prea variată, deci se învață din exemple."
    },
    {
      "type": "num",
      "q": "O IA se uită la 200 de fotografii noi și recunoaște corect 170. Care este procentul de răspunsuri corecte?",
      "answer": 85,
      "unit": "%",
      "explain": "170 ÷ 200 = 0,85, adică 85 din 100 = 85%."
    },
    {
      "type": "text",
      "q": "Cum se numește programul de IA care în 2016 l-a învins pe campionul Lee Sedol la go?",
      "answer": [
        "alphago",
        "alpha go"
      ],
      "explain": "AlphaGo a învățat studiind partide jucate de oameni și jucând milioane de partide împotriva lui însuși."
    }
  ]
});
