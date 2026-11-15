QBANK("ro", "m3-tec-ia-dati", {
 "f": [
  {
   "type": "mc",
   "q": "Care dintre acestea este o dată nestructurată?",
   "options": [
    "Un tabel cu note",
    "O fotografie",
    "O listă de prețuri"
   ],
   "answer": 1,
   "explain": "Fotografiile, textele, audio și video nu sunt ordonate în tabele: sunt date nestructurate, marea majoritate."
  },
  {
   "type": "tf",
   "q": "Un model lingvistic mare (LLM) este antrenat mai ales să prezică următorul cuvânt dintr-un text.",
   "answer": true,
   "explain": "Adevărat: repetând predicția de multe ori, modelul scrie propoziții întregi."
  },
  {
   "type": "text",
   "q": "Cum se numește cea mai mică unitate de informație a calculatorului, care are valoarea 0 sau 1?",
   "answer": [
    "bit",
    "bitul",
    "un bit"
   ],
   "explain": "Bitul (0 sau 1) este unitatea de bază: orice dată din calculator devine o secvență de biți."
  },
  {
   "type": "mc",
   "q": "La ce joc a învins programul AlphaGo în 2016 campionul Lee Sedol?",
   "options": [
    "Șah",
    "Dame",
    "Go"
   ],
   "answer": 2,
   "explain": "AlphaGo a câștigat la Go, un joc cu mai multe poziții posibile decât atomi în universul observabil."
  },
  {
   "type": "num",
   "q": "În ce an a învins calculatorul Deep Blue campionul de șah Garry Kasparov?",
   "answer": 1997,
   "explain": "Deep Blue de la IBM a învins în 1997, mai ales prin calcul de tip forță brută."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Câți biți sunt în 3 octeți? (1 octet = 8 biți)",
   "answer": 24,
   "unit": "biți",
   "explain": "3 × 8 = 24 de biți."
  },
  {
   "type": "mc",
   "q": "O platformă grupează utilizatorii cu gusturi asemănătoare, fără nicio etichetă predefinită. Ce tip de învățare folosește?",
   "options": [
    "Supervizat",
    "Nesupervizat",
    "Nicio învățare"
   ],
   "answer": 1,
   "explain": "Fără etichete, modelul găsește singur grupuri și tipare în date: este învățare nesupervizată."
  },
  {
   "type": "mc",
   "q": "Ce este „bula de filtrare” (filter bubble)?",
   "options": [
    "Să vezi aproape numai conținuturi și idei asemănătoare cu cele care îți plac deja",
    "Un filtru care elimină virușii din calculator",
    "O eroare a hard diskului"
   ],
   "answer": 0,
   "explain": "Sugestiile bazate pe gusturile tale te pot închide într-o bulă și îți arată mereu aceleași idei."
  },
  {
   "type": "tf",
   "q": "Un neuron artificial trimite un semnal următorilor neuroni doar dacă suma ponderată a intrărilor sale depășește un prag.",
   "answer": true,
   "explain": "Adevărat: neuronul înmulțește intrările cu ponderile, adună și „se activează” dacă pragul este depășit."
  },
  {
   "type": "order",
   "q": "Pune în ordine pașii prin care un chatbot (LLM) scrie o propoziție.",
   "items": [
    "Primește textul de pornire",
    "Calculează probabilitatea cuvintelor următoare posibile",
    "Alege cuvântul cel mai potrivit",
    "Adaugă cuvântul și repetă ciclul"
   ],
   "explain": "Modelul nu „știe” faptele: calculează probabilități și repetă ciclul cuvânt cu cuvânt."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Un model are 99% răspunsuri corecte pe datele de antrenare, dar doar 70% pe datele de test nevăzute. Care este problema cea mai probabilă?",
   "options": [
    "Modelul a „memorat” exemplele în loc să învețe să generalizeze",
    "Calculatorul are prea puțină memorie RAM",
    "Datele de test sunt prea ușoare",
    "Modelul este prea simplu și a învățat prea puțin"
   ],
   "answer": 0,
   "explain": "Este supraînvățarea (overfitting): modelul merge bine pe datele văzute, dar greșește pe cele noi."
  },
  {
   "type": "num",
   "q": "Un neuron are intrările 2 și 3, ponderile 1,5 și −2 și bias-ul 4. Cât este suma ponderată plus bias-ul?",
   "answer": 1,
   "explain": "2 × 1,5 = 3; 3 × (−2) = −6; 3 − 6 + 4 = 1."
  },
  {
   "type": "mc",
   "q": "O aplicație de retușare foto cere acces la toate contactele și la locația ta ca să funcționeze. Ce principiu de protecție a datelor este ignorat?",
   "options": [
    "Ar trebui colectate doar datele cu adevărat necesare scopului (minimizare)",
    "Datele personale trebuie mereu publicate",
    "Cu cât se colectează mai multe date, cu atât e mai bine pentru utilizator",
    "Consimțământul nu este niciodată necesar"
   ],
   "answer": 0,
   "explain": "GDPR cere colectarea doar a datelor necesare: o aplicație foto nu are nevoie de contacte."
  },
  {
   "type": "tf",
   "q": "Calculatorul Deep Blue l-a învins pe Kasparov în 1997 folosind mai ales rețele neuronale ca cele ale chatboturilor moderne.",
   "answer": false,
   "explain": "Fals: Deep Blue se baza mai ales pe calcul de tip forță brută; rețelele neuronale au fost necesare în 2016 pentru AlphaGo."
  },
  {
   "type": "mc",
   "q": "O boală afectează 1 persoană din 1000. Un model spune mereu „sănătos” și are acuratețe de 99,9%. De ce nu este un model bun?",
   "options": [
    "Nu detectează niciodată vreun bolnav: acuratețea singură înșală când cazurile sunt rare",
    "Pentru că 99,9% e prea puțin pentru un model",
    "Pentru că ar trebui să spună mereu „bolnav”",
    "Pentru că nu folosește destui biți"
   ],
   "answer": 0,
   "explain": "Modelul greșește tocmai în singurul caz care contează: trebuie să vedem și câți bolnavi găsește, nu doar procentul total."
  }
 ]
});
