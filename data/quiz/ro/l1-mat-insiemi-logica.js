QBANK("ro", "l1-mat-insiemi-logica", {
 "f": [
  { "type": "mc", "q": "Care simbol indică faptul că un element aparține unei mulțimi?", "options": ["∈", "⊂", "∪"], "answer": 0, "explain": "∈ se citește „aparține lui”: 3 ∈ {1, 2, 3}. Simbolul ⊂ se folosește între mulțimi (submulțime)." },
  { "type": "num", "q": "A = {1, 3, 5} și B = {3, 5, 7, 9}. Câte elemente are A ∩ B?", "answer": 2, "explain": "Intersecția este {3, 5}: 2 elemente." },
  { "type": "tf", "q": "Mulțimea vidă este submulțime a oricărei mulțimi.", "answer": true, "explain": "Nu există niciun element al lui ∅ care să nu aparțină lui A, deci ∅ ⊆ A întotdeauna." },
  { "type": "mc", "q": "Care dintre acestea este o propoziție (enunț logic)?", "options": ["Cât este ceasul?", "9 este multiplu de 3", "Fă-ți temele!"], "answer": 1, "explain": "O propoziție este adevărată sau falsă: „9 este multiplu de 3” este adevărată. Celelalte sunt o întrebare și un ordin." },
  { "type": "text", "q": "Cum se numește mulțimea fără elemente?", "answer": ["mulțimea vidă", "multimea vida", "mulțime vidă", "multime vida", "vidă", "vida"], "explain": "Este mulțimea vidă, notată cu ∅ sau { }." }
 ],
 "m": [
  { "type": "num", "q": "Într-o clasă de 25 de elevi, 14 au un câine, 9 au o pisică și 4 au ambele. Câți au cel puțin unul dintre cele două animale?", "answer": 19, "explain": "|C ∪ G| = 14 + 9 − 4 = 19." },
  { "type": "num", "q": "Câte submulțimi are o mulțime cu 6 elemente?", "answer": 64, "explain": "2⁶ = 64." },
  { "type": "mc", "q": "Care este negația lui „există un număr natural n astfel încât n² = 10”?", "options": ["Pentru orice număr natural n, n² ≠ 10", "Există un natural n cu n² ≠ 10", "Pentru orice număr natural n, n² = 10"], "answer": 0, "explain": "Negația lui ∃ este ∀ cu predicatul negat: niciun număr natural nu are pătratul 10." },
  { "type": "mc", "q": "Propoziția p ∨ q este falsă când…", "options": ["p și q sunt amândouă false", "doar una dintre ele este falsă", "p și q sunt amândouă adevărate"], "answer": 0, "explain": "Conectorul „sau” (inclusiv) este fals doar dacă ambele sunt false." },
  { "type": "tf", "q": "„Dacă un număr este multiplu de 4, atunci este par” este adevărată, iar reciproca ei „dacă un număr este par, atunci este multiplu de 4” este și ea adevărată.", "answer": false, "explain": "Reciproca este falsă: 6 este par, dar nu este multiplu de 4." }
 ],
 "d": [
  { "type": "num", "q": "Dintre 100 de turiști, 60 au vizitat Roma, 50 Florența și 20 niciuna dintre cele două. Câți au vizitat ambele?", "answer": 30, "explain": "Au vizitat cel puțin un oraș 100 − 20 = 80. Din |R ∪ F| = |R| + |F| − |R ∩ F|: 80 = 110 − x, deci x = 30." },
  { "type": "mc", "q": "Care echivalență este corectă (De Morgan)?", "options": ["¬(p ∧ q) ≡ ¬p ∧ ¬q", "¬(p ∧ q) ≡ ¬p ∨ ¬q", "¬(p ∨ q) ≡ ¬p ∨ ¬q"], "answer": 1, "explain": "Negația unui „și” este „sau”-ul negațiilor și invers: ¬(p ∧ q) ≡ ¬p ∨ ¬q; ¬(p ∨ q) ≡ ¬p ∧ ¬q." },
  { "type": "tf", "q": "Propoziția (p ⇒ q) este logic echivalentă cu (¬q ⇒ ¬p).", "answer": true, "explain": "Este contrapoziția: cele două au același tabel de adevăr." },
  { "type": "num", "q": "A = {1, 2, 3} și B = {a, b}. Câte elemente are A × B?", "answer": 6, "explain": "3 × 2 = 6 perechi: (1,a), (1,b), (2,a), (2,b), (3,a), (3,b)." },
  { "type": "mc", "q": "„A avea un diametru este condiție necesară pentru a fi cerc” înseamnă…", "options": ["Dacă este cerc, atunci are un diametru", "Dacă are un diametru, atunci este cerc", "Cercul și diametrul nu sunt legate"], "answer": 0, "explain": "Q este condiție necesară pentru P când P ⇒ Q: orice cerc are un diametru, dar nu tot ceea ce are un diametru este un cerc (sfera, de exemplu)." }
 ]
});
