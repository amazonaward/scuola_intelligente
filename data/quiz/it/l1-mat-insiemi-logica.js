QBANK("it", "l1-mat-insiemi-logica", {
 "f": [
  { "type": "mc", "q": "Quale simbolo indica che un elemento appartiene a un insieme?", "options": ["∈", "⊂", "∪"], "answer": 0, "explain": "∈ si legge \"appartiene a\": 3 ∈ {1, 2, 3}. Il simbolo ⊂ si usa tra insiemi (sottoinsieme)." },
  { "type": "num", "q": "A = {1, 3, 5} e B = {3, 5, 7, 9}. Quanti elementi ha A ∩ B?", "answer": 2, "explain": "L'intersezione è {3, 5}: 2 elementi." },
  { "type": "tf", "q": "L'insieme vuoto è sottoinsieme di ogni insieme.", "answer": true, "explain": "Non esiste alcun elemento di ∅ che non appartenga ad A, quindi ∅ ⊆ A sempre." },
  { "type": "mc", "q": "Quale tra queste è una proposizione?", "options": ["Che ore sono?", "9 è un multiplo di 3", "Fai i compiti!"], "answer": 1, "explain": "Una proposizione è vera o falsa: \"9 è un multiplo di 3\" è vera. Le altre sono una domanda e un ordine." },
  { "type": "text", "q": "Come si chiama l'insieme privo di elementi?", "answer": ["insieme vuoto", "vuoto", "l'insieme vuoto"], "explain": "È l'insieme vuoto, indicato con ∅ o { }." }
 ],
 "m": [
  { "type": "num", "q": "In una classe di 25 alunni, 14 hanno un cane, 9 hanno un gatto e 4 hanno entrambi. Quanti hanno almeno uno dei due animali?", "answer": 19, "explain": "|C ∪ G| = 14 + 9 − 4 = 19." },
  { "type": "num", "q": "Quanti sottoinsiemi ha un insieme di 6 elementi?", "answer": 64, "explain": "2⁶ = 64." },
  { "type": "mc", "q": "Qual è la negazione di \"esiste un numero naturale n tale che n² = 10\"?", "options": ["Per ogni naturale n, n² ≠ 10", "Esiste un naturale n con n² ≠ 10", "Per ogni naturale n, n² = 10"], "answer": 0, "explain": "La negazione di ∃ è ∀ con predicato negato: nessun naturale ha quadrato 10." },
  { "type": "mc", "q": "La proposizione p ∨ q è falsa quando…", "options": ["p e q sono entrambe false", "una sola delle due è falsa", "p e q sono entrambe vere"], "answer": 0, "explain": "Il connettivo \"o\" (inclusivo) è falso solo se sono false entrambe." },
  { "type": "tf", "q": "\"Se un numero è multiplo di 4, allora è pari\" è vera, e anche la sua inversa \"se un numero è pari, allora è multiplo di 4\" è vera.", "answer": false, "explain": "L'inversa è falsa: 6 è pari ma non è multiplo di 4." }
 ],
 "d": [
  { "type": "num", "q": "Di 100 turisti, 60 hanno visitato Roma, 50 Firenze e 20 nessuna delle due. Quanti hanno visitato entrambe?", "answer": 30, "explain": "Hanno visitato almeno una città 100 − 20 = 80. Da |R ∪ F| = |R| + |F| − |R ∩ F|: 80 = 110 − x, quindi x = 30." },
  { "type": "mc", "q": "Quale equivalenza è corretta (De Morgan)?", "options": ["¬(p ∧ q) ≡ ¬p ∧ ¬q", "¬(p ∧ q) ≡ ¬p ∨ ¬q", "¬(p ∨ q) ≡ ¬p ∨ ¬q"], "answer": 1, "explain": "La negazione di un \"e\" è l'\"o\" delle negazioni, e viceversa: ¬(p ∧ q) ≡ ¬p ∨ ¬q; ¬(p ∨ q) ≡ ¬p ∧ ¬q." },
  { "type": "tf", "q": "La proposizione (p ⇒ q) è logicamente equivalente a (¬q ⇒ ¬p).", "answer": true, "explain": "È la contrapposizione: le due hanno la stessa tabella di verità." },
  { "type": "num", "q": "A = {1, 2, 3} e B = {a, b}. Quanti elementi ha A × B ?", "answer": 6, "explain": "3 × 2 = 6 coppie: (1,a), (1,b), (2,a), (2,b), (3,a), (3,b)." },
  { "type": "mc", "q": "\"Avere un diametro è condizione necessaria per essere un cerchio\" significa…", "options": ["Se è un cerchio, allora ha un diametro", "Se ha un diametro, allora è un cerchio", "Cerchio e diametro non sono collegati"], "answer": 0, "explain": "Q è condizione necessaria per P quando P ⇒ Q: ogni cerchio ha un diametro, ma non tutto ciò che ha un diametro è un cerchio (la sfera, per esempio)." }
 ]
});
