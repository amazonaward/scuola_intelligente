QBANK("ro", "p4-mat-misure", {
  "f": [
    {
      "type": "tf",
      "q": "1 litru este egal cu 1000 de mililitri.",
      "answer": true,
      "explain": "Da: 1 l = 1000 ml, pentru că «mili» înseamnă o miime."
    },
    {
      "type": "num",
      "q": "Câți grame sunt 2 hg?",
      "answer": 200,
      "unit": "g",
      "explain": "1 hg = 100 g, deci 2 × 100 = 200 g."
    },
    {
      "type": "mc",
      "q": "Care dintre acestea este o unitate de măsură pentru capacitate?",
      "options": [
        "kilogramul",
        "litrul",
        "metrul"
      ],
      "answer": 1,
      "explain": "Capacitatea se măsoară în litri; kilogramul măsoară masa, iar metrul lungimea."
    },
    {
      "type": "text",
      "q": "Cum se numește greutatea produsului singur, fără ambalaj?",
      "answer": [
        "greutate netă",
        "greutatea netă",
        "net"
      ],
      "explain": "Greutatea netă este greutatea produsului singur; împreună cu ambalajul (tara) obținem greutatea brută."
    },
    {
      "type": "mc",
      "q": "Care dintre aceste monede valorează cel mai mult?",
      "options": [
        "50 c",
        "20 c",
        "1 €"
      ],
      "answer": 2,
      "explain": "1 € = 100 de bani, adică mai mult decât 50 c și 20 c."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "O cutie conține 6 sticle de 1,5 l. Câți litri sunt în total?",
      "answer": 9,
      "unit": "l",
      "explain": "6 × 1,5 = 9 l."
    },
    {
      "type": "mc",
      "q": "Care egalitate este corectă?",
      "options": [
        "2500 g = 250 hg",
        "2500 g = 2,5 hg",
        "2500 g = 25 hg"
      ],
      "answer": 2,
      "explain": "1 hg = 100 g, deci 2500 g : 100 = 25 hg."
    },
    {
      "type": "num",
      "q": "Un borcan cu miere are greutatea netă 250 g și greutatea brută 340 g. Cât cântărește borcanul gol (tara)?",
      "answer": 90,
      "unit": "g",
      "explain": "T = GB − GN = 340 − 250 = 90 g."
    },
    {
      "type": "num",
      "q": "Un pachet de orez de 500 g costă 1,20 €. Cât costă 3 kg de orez?",
      "answer": 7.2,
      "unit": "€",
      "explain": "3 kg = 3000 g și 3000 : 500 = 6 pachete. Preț: 6 × 1,20 = 7,20 €."
    },
    {
      "type": "tf",
      "q": "O sticlă de 75 cl conține mai mult de 1 litru.",
      "answer": false,
      "explain": "75 cl = 0,75 l, adică mai puțin de 1 l."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Pentru o gustare sunt necesare 20 de pahare de suc de câte 25 cl. Sticlele sunt de 1,5 l. Câte sticle trebuie să cumperi cel puțin?",
      "answer": 4,
      "explain": "20 × 25 cl = 500 cl = 5 l. 5 : 1,5 ≈ 3,3, deci 3 sticle nu ajung: sunt necesare 4."
    },
    {
      "type": "mc",
      "q": "Marco transformă 3,4 kg în grame așa: «împart la 1000, deci 0,0034 g». Care este greșeala?",
      "options": [
        "De la kg la g se înmulțește cu 1000: 3,4 kg = 3400 g",
        "Rezultatul corect este 34 g",
        "Kilogramele nu se pot transforma în grame"
      ],
      "answer": 0,
      "explain": "Gramul este o unitate mai mică decât kilogramul, deci numărul trebuie să crească: 3,4 × 1000 = 3400 g."
    },
    {
      "type": "num",
      "q": "Cumperi 2,5 kg de portocale cu 1,60 € kilogramul și 3 hg de brânză cu 12 € kilogramul. Plătești cu 10 €. Cât primești rest?",
      "answer": 2.4,
      "unit": "€",
      "explain": "Portocale: 2,5 × 1,60 = 4 €. Brânză: 3 hg = 0,3 kg, 0,3 × 12 = 3,60 €. Total 7,60 €. Rest: 10 − 7,60 = 2,40 €."
    },
    {
      "type": "order",
      "q": "Așază aceste capacități în ordine, de la cea mai mare la cea mai mică.",
      "items": [
        "1 hl",
        "30 l",
        "2500 cl",
        "5000 ml",
        "1 dl"
      ],
      "explain": "În litri: 1 hl = 100 l, 30 l, 2500 cl = 25 l, 5000 ml = 5 l, 1 dl = 0,1 l."
    },
    {
      "type": "tf",
      "q": "Trei sticle de 50 cl costă 0,75 € în total. O sticlă de 1,5 l cu 0,70 € este mai avantajoasă.",
      "answer": true,
      "explain": "3 × 50 cl = 150 cl = 1,5 l: aceeași cantitate. 0,75 € față de 0,70 €, deci sticla mare costă mai puțin."
    }
  ]
});
