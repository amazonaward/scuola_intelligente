QBANK("ro", "m1-tec-disegno-tecnico", {
  "f": [
    {
      "type": "mc",
      "q": "Cu ce instrument se măsoară unghiurile în grade?",
      "options": [
        "Compasul",
        "Raportorul",
        "Rigla"
      ],
      "answer": 1,
      "explain": "Raportorul este un semicerc gradat de la 0° la 180°."
    },
    {
      "type": "tf",
      "q": "Scara 1:1 înseamnă că desenul are aceeași mărime ca obiectul real.",
      "answer": true,
      "explain": "La scara 1:1, 1 cm pe foaie este 1 cm în realitate: este scara reală."
    },
    {
      "type": "mc",
      "q": "Cum se numește căsuța din dreapta jos cu nume, titlu și scară?",
      "options": [
        "Cota",
        "Rama",
        "Cartușul"
      ],
      "answer": 2,
      "explain": "Cartușul conține numele, clasa, data, titlul și scara."
    },
    {
      "type": "num",
      "q": "Câți milimetri măsoară latura lungă a unei foi A3?",
      "answer": 420,
      "unit": "mm",
      "explain": "A3 = 297 × 420 mm, deci latura lungă are 420 mm."
    },
    {
      "type": "text",
      "q": "Cum se numește instrumentul cu care se trasează cercuri și arce?",
      "answer": [
        "compas",
        "compasul",
        "un compas"
      ],
      "explain": "Compasul trasează cercuri și arce și transferă măsuri."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Un perete lung de 3 m este desenat la scara 1:20. Cât măsoară pe foaie, în cm?",
      "answer": 15,
      "unit": "cm",
      "explain": "3 m = 300 cm; 300 : 20 = 15 cm."
    },
    {
      "type": "mc",
      "q": "O furnică lungă de 6 mm este desenată la scara 10:1. Cât măsoară în desen?",
      "options": [
        "6 mm",
        "60 mm",
        "0,6 mm"
      ],
      "answer": 1,
      "explain": "Scară de mărire: 6 × 10 = 60 mm."
    },
    {
      "type": "tf",
      "q": "Liniile de cotă se desenează cu linie continuă subțire.",
      "answer": true,
      "explain": "Cotele și liniile de referință folosesc linia continuă subțire."
    },
    {
      "type": "order",
      "q": "Pune în ordine pașii pentru construirea bisectoarei unui unghi.",
      "items": [
        "Pune compasul în vârful V și trasează un arc care taie cele două laturi",
        "Pune-l în primul punct de intersecție și trasează un arc în interiorul unghiului",
        "Cu aceeași deschidere, pune-l în al doilea punct și încrucișează arcul în P",
        "Unește V cu P"
      ],
      "explain": "Mai întâi arcul din vârf, apoi cele două arce care se intersectează în P, în final dreapta de la V la P."
    },
    {
      "type": "num",
      "q": "Câte foi A4 sunt necesare pentru a acoperi exact o foaie A2?",
      "answer": 4,
      "explain": "Fiecare format este jumătate din precedentul: A2 = 2 × A3 = 4 × A4."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "O grădină dreptunghiulară de 12 m × 8 m este desenată la scara 1:200. Care este aria dreptunghiului pe foaie, în cm²?",
      "answer": 24,
      "unit": "cm²",
      "explain": "12 m = 1200 cm → 1200 : 200 = 6 cm; 8 m = 800 cm → 800 : 200 = 4 cm. Aria = 6 × 4 = 24 cm²."
    },
    {
      "type": "mc",
      "q": "O piesă de 3 mm este desenată lungă de 12 mm. Ce scară s-a folosit?",
      "options": [
        "1:4",
        "4:1",
        "12:1"
      ],
      "answer": 1,
      "explain": "12 : 3 = 4: desenul este de 4 ori mai mare, deci scara de mărire este 4:1."
    },
    {
      "type": "tf",
      "q": "Julia desenează o ușă înaltă de 2 m la scara 1:10 și scrie pe cotă 200. A procedat corect.",
      "answer": false,
      "explain": "Este greșit: cota arată întotdeauna mărimea reală în milimetri, deci 2000, chiar dacă desenul este la scară."
    },
    {
      "type": "order",
      "q": "Pune în ordine pașii pentru desenarea unui hexagon regulat cu compasul.",
      "items": [
        "Trasează un cerc",
        "Cu aceeași deschidere (raza) pune compasul pe un punct al cercului și marchează un arc",
        "Repetă din punct în punct, până ai 6 puncte",
        "Unește cele 6 puncte cu rigla"
      ],
      "explain": "Latura hexagonului este egală cu raza: se repetă raza de 6 ori, apoi se unesc punctele."
    },
    {
      "type": "mc",
      "q": "De ce, la construirea mediatoarei lui AB, deschiderea compasului trebuie să fie mai mare decât jumătatea lui AB?",
      "options": [
        "Ca desenul să iasă mai mare",
        "Pentru că vârful compasului se strică",
        "Altfel arcele trasate din A și din B nu se intersectează"
      ],
      "answer": 2,
      "explain": "Dacă deschiderea ar fi mai mică decât jumătatea lui AB, cele două arce nu s-ar întâlni și nu s-ar găsi punctele pentru mediatoare."
    }
  ]
});
