QBANK("ro", "p4-tec-condizioni", {
 "f": [
  {
   "type": "mc",
   "q": "În limbajele de programare englezești, care cuvânt înseamnă „atunci”?",
   "options": [
    "if",
    "then",
    "else"
   ],
   "answer": 1,
   "explain": "if = dacă, then = atunci, else = altfel."
  },
  {
   "type": "tf",
   "q": "Simbolul „>” înseamnă „mai mare decât”.",
   "answer": true,
   "explain": "Adevărat: 7 > 5 se citește „7 este mai mare decât 5”."
  },
  {
   "type": "mc",
   "q": "O ușă automată folosește regula „DACĂ senzorul vede o persoană ATUNCI deschide”. Ce verifică ușa?",
   "options": [
    "Cât este ceasul",
    "Ce culoare au hainele",
    "Dacă este o persoană în față"
   ],
   "answer": 2,
   "explain": "Condiția este „vede senzorul o persoană?”: dacă e adevărată, ușa se deschide."
  },
  {
   "type": "tf",
   "q": "Dacă condiția este falsă, calculatorul face totuși acțiunea de după ATUNCI.",
   "answer": false,
   "explain": "Fals: dacă condiția este falsă, acțiunea de după ATUNCI este sărită."
  },
  {
   "type": "text",
   "q": "Cum se numește, într-un program, o valoare care se poate schimba în timpul jocului, precum „puncte” sau „vieți”?",
   "answer": [
    "variabila",
    "variabilă",
    "o variabilă",
    "variabile"
   ],
   "explain": "O variabilă este ca o cutie cu nume în care programul păstrează o valoare care se poate schimba."
  }
 ],
 "m": [
  {
   "type": "mc",
   "q": "monede = 12. DACĂ monede > 10 ATUNCI spune „Cumpără pălăria” ALTFEL spune „Economisește”. Ce spune programul?",
   "options": [
    "Economisește",
    "Cumpără pălăria",
    "Ambele propoziții"
   ],
   "answer": 1,
   "explain": "12 > 10 este adevărat, deci se execută acțiunea de după ATUNCI."
  },
  {
   "type": "num",
   "q": "puncte = 8. DACĂ puncte > 5 ATUNCI puncte devine puncte + 10 ALTFEL puncte devine puncte − 1. Câte puncte sunt la sfârșit?",
   "answer": 18,
   "tol": 0,
   "explain": "8 > 5 este adevărat, deci facem puncte + 10: 8 + 10 = 18."
  },
  {
   "type": "tf",
   "q": "(4 > 2) SAU (1 > 9) este adevărat.",
   "answer": true,
   "explain": "Adevărat: 4 > 2 este adevărat, iar la SAU e de ajuns o condiție adevărată."
  },
  {
   "type": "mc",
   "q": "DACĂ mi-e foame ȘI frigiderul e gol ATUNCI comand pizza. Mi-e foame, dar în frigider este brânză. Comand pizza?",
   "options": [
    "Da, comand pizza",
    "Nu, pentru că cele două condiții nu sunt amândouă adevărate",
    "Depinde de zi"
   ],
   "answer": 1,
   "explain": "La ȘI trebuie ca ambele condiții să fie adevărate: frigiderul nu e gol, deci acțiunea nu se face."
  },
  {
   "type": "order",
   "q": "Pune în ordine pașii unui program care spune „Ai câștigat!” când punctele depășesc 10.",
   "items": [
    "Creează variabila puncte",
    "Adaugă 1 la puncte de fiecare dată când prinzi un măr",
    "Verifică dacă puncte > 10",
    "Dacă este adevărat, arată „Ai câștigat!”"
   ],
   "explain": "Mai întâi e nevoie de variabilă, apoi punctele se schimbă, apoi se verifică condiția și numai dacă e adevărată se arată mesajul."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Un coleg scrie: DACĂ plouă ATUNCI ia umbrela ALTFEL ia umbrela. Care este problema?",
   "options": [
    "Cele două acțiuni sunt la fel: condiția nu folosește la nimic",
    "Lipsește operatorul ȘI",
    "„Plouă” nu poate fi o condiție"
   ],
   "answer": 0,
   "explain": "Oricare ar fi răspunsul, programul face același lucru: alegerea DACĂ…ALTFEL este inutilă."
  },
  {
   "type": "tf",
   "q": "(7 > 3) ȘI NU (2 > 5) este adevărat.",
   "answer": true,
   "explain": "7 > 3 este adevărat. 2 > 5 este fals, iar NU îl răstoarnă în adevărat. Adevărat ȘI adevărat = adevărat."
  },
  {
   "type": "mc",
   "q": "Regulă: DACĂ (e sâmbătă SAU e duminică) ȘI nu plouă ATUNCI merg în parc. Azi e duminică și plouă. Merg în parc?",
   "options": [
    "Da, pentru că e duminică",
    "Nu, pentru că plouă",
    "Da, pentru că nu e sâmbătă"
   ],
   "answer": 1,
   "explain": "(sâmbătă SAU duminică) este adevărat, dar „nu plouă” este fals: la ȘI trebuie amândouă adevărate, deci nu merg."
  },
  {
   "type": "num",
   "q": "puncte = 6. Prima verificare: DACĂ puncte > 5 ATUNCI puncte devine puncte × 2. A doua verificare: DACĂ puncte > 10 ATUNCI puncte devine puncte − 3. Câte puncte sunt la sfârșit?",
   "answer": 9,
   "tol": 0,
   "explain": "Prima verificare: 6 > 5 este adevărat, deci 6 × 2 = 12. A doua verificare: 12 > 10 este adevărat, deci 12 − 3 = 9."
  },
  {
   "type": "mc",
   "q": "Termostat: DACĂ temperatura < 20 ATUNCI pornește centrala ALTFEL oprește-o. Temperatura este exact 20 °C. Ce face centrala?",
   "options": [
    "Nu se poate spune",
    "Pornește",
    "Rămâne oprită"
   ],
   "answer": 2,
   "explain": "20 < 20 este fals (20 nu este mai mic decât 20), deci se execută acțiunea de după ALTFEL: centrala e oprită."
  }
 ]
});
