QBANK("ro", "m1-geo-strumenti", {
 "f": [
  {
   "type": "mc",
   "q": "Ce instrument are un ac magnetic care arată nordul?",
   "options": [
    "Termometru",
    "Busolă",
    "Altimetru"
   ],
   "answer": 1,
   "explain": "Busola are un ac magnetic care indică nordul magnetic, aproape de Polul Nord geografic."
  },
  {
   "type": "tf",
   "q": "La prânz, în Italia, Soarele se află la sud.",
   "answer": true,
   "explain": "Soarele răsare la est, apune la vest, iar la prânz în Italia este la sud."
  },
  {
   "type": "mc",
   "q": "Care stea arată nordul noaptea?",
   "options": [
    "Sirius",
    "Antares",
    "Steaua Polară"
   ],
   "answer": 2,
   "explain": "Steaua Polară se află aproape deasupra Polului Nord și arată nordul."
  },
  {
   "type": "text",
   "q": "Cum se numește harta care arată un singur subiect, de exemplu clima sau limbile vorbite?",
   "answer": [
    "tematică",
    "harta tematică",
    "tematica",
    "hartă tematică"
   ],
   "explain": "Hărțile tematice tratează o singură temă: clima, populația, limbile, turismul, riscul seismic…"
  },
  {
   "type": "tf",
   "q": "Un GIS (Sistem Informatic Geografic) suprapune pe o hartă digitală multe straturi de date.",
   "answer": true,
   "explain": "Drumuri, râuri, populație, clădiri, risc de alunecări: fiecare tip de date este un strat care poate fi pornit sau oprit."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Pe o hartă, 4 cm reprezintă 2 km în realitate. Care este numitorul N al scării 1 : N?",
   "answer": 50000,
   "tol": 0,
   "explain": "2 km = 200.000 cm. 200.000 : 4 = 50.000, deci scara este 1 : 50.000."
  },
  {
   "type": "mc",
   "q": "Vrei să compari numărul de locuitori a cinci orașe. Care grafic este cel mai potrivit?",
   "options": [
    "Grafic circular",
    "Grafic cu linii",
    "Histogramă (pe coloane)"
   ],
   "answer": 2,
   "explain": "Histograma compară cantități diferite cu coloane: cea mai înaltă este orașul cel mai populat."
  },
  {
   "type": "tf",
   "q": "O hartă la scara 1 : 10.000.000 este potrivită pentru a vedea potecile unui parc mic.",
   "answer": false,
   "explain": "Este o scară foarte mică: arată un teritoriu uriaș, cu foarte puține detalii. Pentru un parc e nevoie de o scară mare, de exemplu 1 : 5.000."
  },
  {
   "type": "text",
   "q": "Cum se numește harta care arată granițele statelor și regiunilor, fiecare într-o altă culoare?",
   "answer": [
    "politică",
    "harta politică",
    "hartă politică"
   ],
   "explain": "Harta politică arată granițe, state, regiuni și orașe; harta fizică arată relieful, câmpiile și apele."
  },
  {
   "type": "order",
   "q": "Pune în ordine pașii pentru a afla distanța reală dintre două locuri pe o hartă la scară.",
   "items": [
    "Măsoară cu rigla cm de pe hartă",
    "Înmulțește cu numitorul scării",
    "Transformă cm în km"
   ],
   "explain": "Mai întâi se măsoară pe hartă, apoi se înmulțește cu numitorul, la final se convertește în km."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Pe o hartă la scara 1 : 25.000, un traseu măsoară 18 cm. Mergând cu 3 km/h, câte ore sunt necesare ca să-l parcurgi?",
   "answer": 1.5,
   "tol": 0,
   "unit": "ore",
   "explain": "18 × 25.000 = 450.000 cm = 4.500 m = 4,5 km. Timp = 4,5 : 3 = 1,5 ore."
  },
  {
   "type": "mc",
   "q": "Un coleg spune: „Pe harta lui Mercator, Groenlanda este la fel de mare ca Africa, deci au aceeași suprafață”. Care este greșeala?",
   "options": [
    "Nicio greșeală: Mercator păstrează suprafețele",
    "Mercator mărește ținuturile apropiate de poli: în realitate Africa este de aproximativ 14 ori mai mare",
    "Groenlanda este în realitate mai mare decât Africa"
   ],
   "answer": 1,
   "explain": "Proiecția Mercator păstrează unghiurile, dar deformează suprafețele: Africa are 30 de milioane km², Groenlanda 2,2 milioane."
  },
  {
   "type": "tf",
   "q": "Pentru a compara fără deformări suprafețele continentelor, un glob este mai bun decât o hartă Mercator.",
   "answer": true,
   "explain": "Globul este singura reprezentare fără deformări; Mercator mărește mult ținuturile apropiate de poli."
  },
  {
   "type": "mc",
   "q": "Pe o hartă topografică, două poteci duc de la aceeași altitudine la același vârf. Poteca A traversează curbe de nivel foarte dese, poteca B curbe foarte rare. Care afirmație este corectă?",
   "options": [
    "Cele două poteci au aceeași pantă pentru că pornesc și ajung la aceleași altitudini",
    "A este mai domoală și mai lungă, B mai abruptă și mai scurtă",
    "A este mai abruptă și mai scurtă, B mai domoală și mai lungă"
   ],
   "answer": 2,
   "explain": "Curbe dese = pantă abruptă (urci mult pe o distanță mică); curbe rare = pantă domoală, care cere un traseu mai lung."
  },
  {
   "type": "mc",
   "q": "Care asociere instrument–utilizare este GREȘITĂ?",
   "options": [
    "Grafic circular – a arăta cum se schimbă o dată de la an la an",
    "Cartogramă – a arăta densitatea populației regiunilor",
    "Climogramă – a uni temperaturile și precipitațiile unui loc"
   ],
   "answer": 0,
   "explain": "Graficul circular arată părțile unui întreg în procente; pentru evoluția în timp se folosește graficul cu linii."
  }
 ]
});
