QBANK("it", "l5-fis-nucleare-particelle", {
  f: [
    { type: "mc", q: "Come si chiamano protoni e neutroni insieme?", options: ["Leptoni", "Nucleoni", "Fotoni", "Quark"], answer: 1, explain: "I costituenti del nucleo sono detti nucleoni." },
    { type: "tf", q: "Gli isotopi di un elemento hanno lo stesso numero di protoni.", answer: true, explain: "Hanno lo stesso Z e diverso numero di neutroni." },
    { type: "mc", q: "Chi scoprì la radioattività nel 1896?", options: ["Becquerel", "Rutherford", "Chadwick", "Fermi"], answer: 0, explain: "Henri Becquerel, studiando i sali di uranio." },
    { type: "num", q: "Quanti protoni ha un nucleo di carbonio-14?", answer: 6, tol: 0, unit: "", explain: "Il carbonio ha Z = 6; il numero di neutroni è 14 − 6 = 8." },
    { type: "tf", q: "Il bosone di Higgs è stato scoperto al CERN nel 2012.", answer: true, explain: "Il 4 luglio 2012, con gli esperimenti ATLAS e CMS." }
  ],
  m: [
    { type: "num", q: "Un isotopo ha T½ = 6,0 ore. Quanta frazione (in %) resta dopo 18 ore?", answer: 12.5, tol: 0.1, unit: "%", explain: "18 h = 3 dimezzamenti: (1/2)³ = 12,5%." },
    { type: "mc", q: "Nel decadimento α di ²²⁶₈₈Ra, quale nucleo si forma?", options: ["²²²₈₆Rn", "²²⁶₈₉Ac", "²²²₈₈Ra", "²²⁴₈₆Rn"], answer: 0, explain: "A = 226 − 4 = 222, Z = 88 − 2 = 86: radon-222." },
    { type: "num", q: "L'energia di legame dell'elio-4 è 28,3 MeV. Quanto vale per nucleone (in MeV)?", answer: 7.07, tol: 0.05, unit: "MeV", explain: "28,3/4 ≈ 7,07 MeV." },
    { type: "mc", q: "Quale forza tiene uniti protoni e neutroni nel nucleo?", options: ["Gravitazionale", "Forte", "Debole", "Elettromagnetica"], answer: 1, explain: "È la forza nucleare forte, di corto raggio." },
    { type: "tf", q: "Il neutrino fu proposto da Pauli per spiegare lo spettro continuo del decadimento β.", answer: true, explain: "Il neutrino porta via parte dell'energia (1930)." }
  ],
  d: [
    { type: "num", q: "Un campione ha attività 2,0 MBq con T½ = 5,0 giorni. Quanti giorni servono perché scenda a 0,25 MBq?", answer: 15, tol: 0.2, unit: "giorni", explain: "2,0 → 0,25 è un fattore 8 = 2³: tre dimezzamenti = 15 giorni." },
    { type: "num", q: "Un reperto ha il 6,25% del ¹⁴C iniziale. Quanti anni ha (T½ = 5730 anni)?", answer: 22920, tol: 10, unit: "anni", explain: "6,25% = 1/16 = (1/2)⁴: 4 × 5730 = 22 920 anni." },
    { type: "num", q: "In una fissione si liberano 200 MeV. Quanta energia (in 10⁻¹¹ J, circa)?", answer: 3.2, tol: 0.05, unit: "·10⁻¹¹ J", explain: "200 × 1,602·10⁻¹³ J = 3,2·10⁻¹¹ J." },
    { type: "mc", q: "Perché per la fusione serve una temperatura di milioni di kelvin?", options: ["Per sciogliere i nuclei", "Per vincere la repulsione coulombiana", "Per aumentare il numero atomico", "Per produrre neutroni"], answer: 1, explain: "I nuclei positivi si respingono: servono energie cinetiche elevate per avvicinarli a pochi fm." },
    { type: "num", q: "Quale carica (in unità di e) ha il pione π⁺ composto da un quark up e un antiquark down?", answer: 1, tol: 0, unit: "e", explain: "+2/3 + (+1/3) = +1." }
  ]
});
