QBANK("it", "m2-tec-programmazione", {
 "f": [
  {
   "type": "mc",
   "q": "Quale istruzione di Python mostra un valore sullo schermo?",
   "options": [
    "print()",
    "input()",
    "range()"
   ],
   "answer": 0,
   "explain": "print() scrive sullo schermo; input() legge dall'utente; range() genera una sequenza di numeri."
  },
  {
   "type": "tf",
   "q": "In Python un testo (stringa) si scrive tra virgolette.",
   "answer": true,
   "explain": "Per esempio nome = \"Sara\": le virgolette indicano che è un testo."
  },
  {
   "type": "mc",
   "q": "Di che tipo è il valore 3.14?",
   "options": [
    "Intero (int)",
    "Decimale (float)",
    "Stringa (str)"
   ],
   "answer": 1,
   "explain": "Un numero con la parte decimale è un float (si scrive con il punto)."
  },
  {
   "type": "text",
   "q": "Quale parola chiave di Python usi per un ciclo con un numero di ripetizioni già noto?",
   "answer": [
    "for"
   ],
   "explain": "for ripete un numero di volte stabilito, di solito con range()."
  },
  {
   "type": "tf",
   "q": "Il nome di una variabile può contenere spazi, per esempio «punti max».",
   "answer": false,
   "explain": "Falso: niente spazi nei nomi; si scrive punti_max."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Quante volte stampa un numero: for i in range(2, 6): print(i)?",
   "answer": 4,
   "tol": 0,
   "explain": "range(2, 6) produce 2, 3, 4, 5: si ferma prima di 6, quindi 4 numeri."
  },
  {
   "type": "mc",
   "q": "Quale riga mostra correttamente la parola Ciao sullo schermo?",
   "options": [
    "print(Ciao)",
    "print(\"Ciao\")",
    "print: Ciao"
   ],
   "answer": 1,
   "explain": "Un testo va tra virgolette dentro le parentesi di print()."
  },
  {
   "type": "num",
   "q": "c = 10; while c > 4: c = c - 3. Quante volte viene eseguito il ciclo?",
   "answer": 2,
   "tol": 0,
   "explain": "c vale 10 → 7 (1° giro) → 4 (2° giro); 4 > 4 è falso e il ciclo si ferma: 2 giri."
  },
  {
   "type": "text",
   "q": "Come si chiama un errore in un programma?",
   "answer": [
    "bug",
    "un bug",
    "il bug"
   ],
   "explain": "Dal 1947 gli errori si chiamano «bug» (insetto) e correggerli si dice «debug»."
  },
  {
   "type": "mc",
   "q": "Quale di questi nomi di variabile è valido in Python?",
   "options": [
    "2punti",
    "punti_max",
    "punti max"
   ],
   "answer": 1,
   "explain": "Un nome non può iniziare con un numero né contenere spazi: punti_max va bene."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "s = 0; for n in range(1, 6): s = s + n * n. Quanto vale s alla fine?",
   "answer": 55,
   "tol": 0,
   "explain": "Si sommano i quadrati: 1 + 4 + 9 + 16 + 25 = 55."
  },
  {
   "type": "mc",
   "q": "Un programma deve sommare 5 numeri digitati dall'utente, ma alla fine mostra sempre solo l'ultimo numero. Qual è l'errore più probabile?",
   "options": [
    "Ha scritto somma = 0 dentro il ciclo, quindi si azzera a ogni giro",
    "Ha usato for invece di while",
    "Ha scritto print fuori dal ciclo"
   ],
   "answer": 0,
   "explain": "Se somma = 0 sta dentro il ciclo, l'accumulatore si azzera a ogni giro e resta solo l'ultimo valore."
  },
  {
   "type": "tf",
   "q": "x = 5; y = x; x = x + 1. Alla fine y vale ancora 5.",
   "answer": true,
   "explain": "y ha copiato il valore 5 prima della modifica: cambiare x dopo non cambia y."
  },
  {
   "type": "num",
   "q": "a = 2; for i in range(4): a = a * 2 - 1. Quanto vale a alla fine?",
   "answer": 17,
   "tol": 0,
   "explain": "Passo dopo passo: 2 → 3 → 5 → 9 → 17."
  },
  {
   "type": "order",
   "q": "Metti in ordine le righe di un conto alla rovescia 3, 2, 1, Via! (le due righe dentro il ciclo sono rientrate).",
   "items": [
    "n = 3",
    "while n > 0:",
    "print(n)",
    "n = n - 1",
    "print(\"Via!\")"
   ],
   "explain": "Si parte da n = 3, il while ripete print e la diminuzione, poi fuori dal ciclo si stampa «Via!»."
  }
 ]
});
