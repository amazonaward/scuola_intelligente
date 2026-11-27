QBANK("it", "l3-mat-equazioni-disequazioni", {
  "f": [
    { "type": "mc", "q": "Risolvi x² − 4 &gt; 0.", "options": ["−2 &lt; x &lt; 2", "x &lt; −2 ∨ x &gt; 2", "x &gt; 2"], "answer": 1, "explain": "Radici ±2; verso uguale al segno di a: valori esterni." },
    { "type": "tf", "q": "La disequazione x² + 1 &gt; 0 è vera per ogni numero reale.", "answer": true, "explain": "x² ≥ 0, quindi x² + 1 ≥ 1." },
    { "type": "num", "q": "Quanto vale |−7|?", "answer": 7, "explain": "Il valore assoluto è la distanza da 0: 7." },
    { "type": "mc", "q": "Quali sono le radici di x² − 5x + 6 = 0?", "options": ["1 e 6", "2 e 3", "−2 e −3"], "answer": 1, "explain": "Somma 5 e prodotto 6: 2 e 3." },
    { "type": "mc", "q": "Quanto vale il discriminante Δ di x² − 6x + 5?", "options": ["16", "56", "−4"], "answer": 0, "explain": "Δ = 36 − 20 = 16." }
  ],
  "m": [
    { "type": "mc", "q": "Risolvi x² − x − 6 ≤ 0.", "options": ["x ≤ −2 ∨ x ≥ 3", "−2 ≤ x ≤ 3", "−3 ≤ x ≤ 2"], "answer": 1, "explain": "Radici −2 e 3; verso opposto ad a (a &gt; 0, ≤): interni, estremi inclusi." },
    { "type": "mc", "q": "Risolvi |2x − 4| = 6.", "options": ["x = 5 ∨ x = −1", "x = 5", "x = 1 ∨ x = −5"], "answer": 0, "explain": "2x − 4 = 6 → x = 5; 2x − 4 = −6 → x = −1." },
    { "type": "mc", "q": "Risolvi (x + 3)/(x − 1) ≤ 0.", "options": ["−3 ≤ x ≤ 1", "−3 ≤ x &lt; 1", "x ≤ −3 ∨ x &gt; 1"], "answer": 1, "explain": "Zeri: −3 (numeratore, incluso) e 1 (denominatore, escluso). Quoziente ≤ 0 tra i due." },
    { "type": "num", "q": "Risolvi x⁴ − 10x² + 9 = 0: qual è la più grande tra le soluzioni reali?", "answer": 3, "explain": "t = x² vale 1 o 9, quindi x = ±1, ±3: la maggiore è 3." },
    { "type": "tf", "q": "L'equazione x² + 2x + 5 = 0 ha due soluzioni reali distinte.", "answer": false, "explain": "Δ = 4 − 20 = −16 &lt; 0: nessuna soluzione reale." }
  ],
  "d": [
    { "type": "mc", "q": "Risolvi (x² − 4)(x + 1) &gt; 0.", "options": ["−2 &lt; x &lt; −1 ∨ x &gt; 2", "x &lt; −2 ∨ −1 &lt; x &lt; 2", "−1 &lt; x &lt; 2"], "answer": 0, "explain": "Zeri −2, −1, 2; il prodotto è + a destra di 2, − in (−1; 2), + in (−2; −1), − a sinistra di −2." },
    { "type": "mc", "q": "Risolvi √(x − 1) &gt; 2.", "options": ["x &gt; 5", "x &gt; 3", "1 ≤ x &lt; 5"], "answer": 0, "explain": "Il secondo membro è positivo: x − 1 &gt; 4 → x &gt; 5 (e x ≥ 1 è già soddisfatta)." },
    { "type": "num", "q": "Quanti numeri interi soddisfano |x − 2| ≤ 3?", "answer": 7, "explain": "−1 ≤ x ≤ 5: gli interi sono −1, 0, 1, 2, 3, 4, 5, cioè 7." },
    { "type": "mc", "q": "Per quali valori di k l'equazione x² + kx + 9 = 0 ha due soluzioni reali distinte?", "options": ["−6 &lt; k &lt; 6", "k &lt; −6 ∨ k &gt; 6", "k &gt; 0"], "answer": 1, "explain": "Δ = k² − 36 &gt; 0 → k &lt; −6 ∨ k &gt; 6." },
    { "type": "num", "q": "Risolvi √(x + 6) = x: qual è la soluzione?", "answer": 3, "explain": "x + 6 = x² → x = 3 ∨ x = −2; x = −2 non verifica (√4 = 2 ≠ −2). Resta 3." }
  ]
});
