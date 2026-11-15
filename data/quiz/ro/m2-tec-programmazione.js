QBANK("ro", "m2-tec-programmazione", {
 "f": [
  {
   "type": "mc",
   "q": "Ce instrucțiune din Python afișează o valoare pe ecran?",
   "options": [
    "print()",
    "input()",
    "range()"
   ],
   "answer": 0,
   "explain": "print() scrie pe ecran; input() citește de la utilizator; range() generează un șir de numere."
  },
  {
   "type": "tf",
   "q": "În Python un text (șir de caractere) se scrie între ghilimele.",
   "answer": true,
   "explain": "De exemplu nome = \"Sara\": ghilimelele arată că e text."
  },
  {
   "type": "mc",
   "q": "De ce tip este valoarea 3.14?",
   "options": [
    "Întreg (int)",
    "Zecimal (float)",
    "Șir de caractere (str)"
   ],
   "answer": 1,
   "explain": "Un număr cu parte zecimală este de tip float (se scrie cu punct)."
  },
  {
   "type": "text",
   "q": "Ce cuvânt cheie din Python folosești pentru o buclă cu număr de repetări cunoscut?",
   "answer": [
    "for"
   ],
   "explain": "for repetă de un număr stabilit de ori, de obicei cu range()."
  },
  {
   "type": "tf",
   "q": "Numele unei variabile poate conține spații, de exemplu «puncte max».",
   "answer": false,
   "explain": "Fals: în nume nu se pun spații; se scrie puncte_max."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Câte numere afișează: for i in range(2, 6): print(i)?",
   "answer": 4,
   "tol": 0,
   "explain": "range(2, 6) dă 2, 3, 4, 5: se oprește înainte de 6, deci 4 numere."
  },
  {
   "type": "mc",
   "q": "Care rând afișează corect cuvântul Ciao pe ecran?",
   "options": [
    "print(Ciao)",
    "print(\"Ciao\")",
    "print: Ciao"
   ],
   "answer": 1,
   "explain": "Un text se pune între ghilimele în parantezele lui print()."
  },
  {
   "type": "num",
   "q": "c = 10; while c > 4: c = c - 3. De câte ori se execută bucla?",
   "answer": 2,
   "tol": 0,
   "explain": "c ia valorile 10 → 7 (prima rulare) → 4 (a doua rulare); 4 > 4 e fals și bucla se oprește: 2 rulări."
  },
  {
   "type": "text",
   "q": "Cum se numește o greșeală dintr-un program?",
   "answer": [
    "bug",
    "un bug",
    "bugul"
   ],
   "explain": "Din 1947 erorile se numesc «bug» (insectă), iar corectarea lor se numește «debug»."
  },
  {
   "type": "mc",
   "q": "Care dintre aceste nume de variabile este valid în Python?",
   "options": [
    "2punti",
    "punti_max",
    "punti max"
   ],
   "answer": 1,
   "explain": "Un nume nu poate începe cu o cifră și nu poate conține spații: punti_max este bun."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "s = 0; for n in range(1, 6): s = s + n * n. Cât valorează s la final?",
   "answer": 55,
   "tol": 0,
   "explain": "Se adună pătratele: 1 + 4 + 9 + 16 + 25 = 55."
  },
  {
   "type": "mc",
   "q": "Un program trebuie să adune 5 numere scrise de utilizator, dar la final arată mereu doar ultimul număr. Care e cea mai probabilă greșeală?",
   "options": [
    "A scris somma = 0 în buclă, deci se resetează la fiecare pas",
    "A folosit for în loc de while",
    "A pus print în afara buclei"
   ],
   "answer": 0,
   "explain": "Dacă somma = 0 e în interiorul buclei, acumulatorul se resetează la fiecare pas și rămâne doar ultima valoare."
  },
  {
   "type": "tf",
   "q": "x = 5; y = x; x = x + 1. La final y valorează tot 5.",
   "answer": true,
   "explain": "y a copiat valoarea 5 înainte de modificare: schimbarea lui x după aceea nu schimbă y."
  },
  {
   "type": "num",
   "q": "a = 2; for i in range(4): a = a * 2 - 1. Cât valorează a la final?",
   "answer": 17,
   "tol": 0,
   "explain": "Pas cu pas: 2 → 3 → 5 → 9 → 17."
  },
  {
   "type": "order",
   "q": "Pune în ordine rândurile unei numărători inverse 3, 2, 1, Via! (cele două rânduri din buclă sunt aliniate cu indentare).",
   "items": [
    "n = 3",
    "while n > 0:",
    "print(n)",
    "n = n - 1",
    "print(\"Via!\")"
   ],
   "explain": "Se pornește de la n = 3, while repetă print și scăderea, apoi în afara buclei se afișează «Via!»."
  }
 ]
});
