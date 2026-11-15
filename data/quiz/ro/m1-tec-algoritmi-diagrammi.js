QBANK("ro", "m1-tec-algoritmi-diagrammi", {
 "f": [
  {
   "type": "mc",
   "q": "Ce arată săgețile într-o schemă logică?",
   "options": [
    "O eroare",
    "O decizie",
    "Pasul următor, adică fluxul algoritmului"
   ],
   "answer": 2,
   "explain": "Săgețile leagă blocurile și arată în ce ordine se execută pașii."
  },
  {
   "type": "tf",
   "q": "O schemă logică are un singur bloc de Început.",
   "answer": true,
   "explain": "Adevărat: algoritmul începe dintr-un singur punct, dar poate avea mai multe Sfârșituri."
  },
  {
   "type": "text",
   "q": "Cum se numește cel care execută un algoritm, fie persoană, fie mașină?",
   "answer": [
    "executant",
    "executantul",
    "executor",
    "executorul"
   ],
   "explain": "Executantul face exact ce este scris: calculatorul este un executant foarte rapid, dar fără imaginație."
  },
  {
   "type": "mc",
   "q": "Care dintre aceste instrucțiuni NU este ambiguă?",
   "options": [
    "Adaugă puțină sare",
    "Adaugă 5 g de sare",
    "Adaugă sare după gust",
    "Adaugă o mână bună de sare"
   ],
   "answer": 1,
   "explain": "Doar «5 g» indică o cantitate precisă, care poate fi înțeleasă într-un singur fel."
  },
  {
   "type": "tf",
   "q": "Un algoritm bun trebuie să funcționeze doar pentru un caz particular, nu pentru toate cazurile de același tip.",
   "answer": false,
   "explain": "Fals: trebuie să fie general, adică valabil pentru toate cazurile de același tip."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Folosește algoritmul lui Euclid: care este cel mai mare divizor comun al numerelor 56 și 24?",
   "answer": 8,
   "explain": "56 : 24 dă restul 8; 24 : 8 dă restul 0. Ultimul rest nenul este 8, deci cmmdc(56, 24) = 8."
  },
  {
   "type": "mc",
   "q": "În Scratch, ce bloc corespunde structurii de selecție (rombul din schema logică)?",
   "options": [
    "«repetă de 10 ori»",
    "«dacă … atunci … altfel»",
    "blocurile așezate unul sub altul"
   ],
   "answer": 1,
   "explain": "Blocul «dacă … atunci … altfel» alege între două căi, ca rombul."
  },
  {
   "type": "order",
   "q": "Pune în ordine pașii algoritmului «par sau impar».",
   "items": [
    "Început",
    "Citește numărul N",
    "Calculează restul lui N : 2",
    "Dacă restul este 0, scrie «par», altfel scrie «impar»",
    "Sfârșit"
   ],
   "explain": "Mai întâi se citește data de intrare, apoi se calculează restul împărțirii, apoi se afișează rezultatul."
  },
  {
   "type": "tf",
   "q": "Orice program Scratch poate fi transformat într-o schemă logică și invers.",
   "answer": true,
   "explain": "Adevărat: secvența, selecția și iterația se regăsesc atât în blocuri, cât și în simbolurile schemei logice."
  },
  {
   "type": "num",
   "q": "Un algoritm execută: X ← 5; apoi repetă de 3 ori «X ← X + 2»; la final scrie X. Ce număr scrie?",
   "answer": 11,
   "explain": "Pornind de la 5: 7, 9, 11. După 3 repetări X este 5 + 3 × 2 = 11."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Care dintre acești algoritmi conține un ciclu infinit?",
   "options": [
    "X ← 10; cât timp X > 0 repetă X ← X − 1",
    "X ← 1; cât timp X > 0 repetă X ← X + 1",
    "Repetă de 5 ori «scrie salut»",
    "Dacă X > 0 scrie «salut»"
   ],
   "answer": 1,
   "explain": "În al doilea, X crește mereu și rămâne mai mare decât 0: condiția de ieșire nu devine niciodată adevărată."
  },
  {
   "type": "mc",
   "q": "Un algoritm pentru ceai spune «Cât timp apa nu fierbe, așteaptă», dar a uitat pasul «Pornește fierbătorul». Ce proprietate este încălcată?",
   "options": [
    "Generalitatea",
    "Lipsa ambiguității",
    "Executabilitatea",
    "Finitudinea"
   ],
   "answer": 3,
   "explain": "Fără fierbătorul pornit, apa nu fierbe niciodată: așteptarea nu se termină, iar algoritmul nu este finit."
  },
  {
   "type": "tf",
   "q": "Într-o schemă logică, iterația se desenează cu o săgeată care se întoarce la un bloc anterior.",
   "answer": true,
   "explain": "Adevărat: săgeata înapoi face ca pașii să se repete atât timp cât o cere condiția."
  },
  {
   "type": "text",
   "q": "Cum se numește descrierea unui algoritm scrisă cu fraze asemănătoare unui limbaj de programare, dar fără reguli stricte?",
   "answer": [
    "pseudocod",
    "pseudo-cod",
    "pseudocodul",
    "pseudo cod"
   ],
   "explain": "Pseudocodul se află la jumătatea drumului dintre limbajul natural și codul real."
  },
  {
   "type": "num",
   "q": "Un algoritm execută: S ← 0; N ← 4; cât timp N > 0 repetă «S ← S + N; N ← N − 1»; la final scrie S. Ce număr scrie?",
   "answer": 10,
   "explain": "S = 4 + 3 + 2 + 1 = 10: la fiecare ciclu se adaugă N, iar N scade cu 1, până când N ajunge la 0."
  }
 ]
});
