QBANK("it", "l2-fis-moto-accelerato", {
  "f": [
    { "type": "num", "q": "Un corpo passa da 0 a 20 m/s in 4 s. Qual è l'accelerazione media?", "answer": 5, "unit": "m/s²", "explain": "20 / 4 = 5 m/s²." },
    { "type": "mc", "q": "Cosa indica la pendenza del grafico velocità-tempo?", "options": ["La posizione", "L'accelerazione", "Lo spostamento"], "answer": 1, "explain": "Pendenza = Δv / Δt = accelerazione." },
    { "type": "num", "q": "Un corpo parte da fermo con a = 2 m/s². Che velocità ha dopo 10 s?", "answer": 20, "unit": "m/s", "explain": "v = a t = 2 · 10 = 20 m/s." },
    { "type": "tf", "q": "Nel vuoto tutti i corpi in caduta libera hanno la stessa accelerazione.", "answer": true, "explain": "È il risultato di Galileo: g ≈ 9,8 m/s², indipendente dalla massa." },
    { "type": "num", "q": "Un'auto ha a = 3 m/s² e parte da ferma. Quanti metri percorre in 4 s?", "answer": 24, "unit": "m", "explain": "s = ½ · 3 · 16 = 24 m." }
  ],
  "m": [
    { "type": "num", "q": "Una palla cade da ferma per 2 s (g = 9,8 m/s²). Quanto vale la sua velocità finale?", "answer": 19.6, "tol": 0.1, "unit": "m/s", "explain": "v = g t = 9,8 · 2 = 19,6 m/s." },
    { "type": "num", "q": "Un'auto a 15 m/s accelera a 2 m/s² per 5 s. Che velocità raggiunge?", "answer": 25, "unit": "m/s", "explain": "v = 15 + 2 · 5 = 25 m/s." },
    { "type": "mc", "q": "v = +8 m/s e a = −2 m/s². Che cosa fa il corpo?", "options": ["Accelera", "Rallenta", "Va a velocità costante"], "answer": 1, "explain": "v e a hanno segni opposti: il modulo della velocità diminuisce." },
    { "type": "num", "q": "Un'auto a 10 m/s frena con a = 2,5 m/s². Quanti metri percorre prima di fermarsi?", "answer": 20, "unit": "m", "explain": "s = v₀² / (2a) = 100 / 5 = 20 m." },
    { "type": "tf", "q": "Se la velocità iniziale di una frenata triplica, lo spazio di arresto diventa 9 volte più grande.", "answer": true, "explain": "Lo spazio è proporzionale a v₀²: 3² = 9." }
  ],
  "d": [
    { "type": "num", "q": "Un'auto passa da 10 a 30 m/s in uno spazio di 200 m con accelerazione costante. Quanto vale l'accelerazione?", "answer": 2, "unit": "m/s²", "explain": "v² = v₀² + 2 a s: 900 = 100 + 400 a, a = 2 m/s²." },
    { "type": "num", "q": "Una pietra è lanciata verso l'alto a 14,7 m/s (g = 9,8 m/s²). Dopo quanti secondi raggiunge il punto più alto?", "answer": 1.5, "tol": 0.01, "unit": "s", "explain": "t = v₀ / g = 14,7 / 9,8 = 1,5 s." },
    { "type": "num", "q": "Una pietra lasciata cadere da un ponte tocca l'acqua dopo 3 s (g = 9,8 m/s²). Quanto è alto il ponte?", "answer": 44.1, "tol": 0.1, "unit": "m", "explain": "h = ½ · 9,8 · 9 = 44,1 m." },
    { "type": "num", "q": "Una sfera parte da ferma e percorre 2 m nel primo secondo. Quanti metri percorre nel quarto secondo (non in totale)?", "answer": 14, "unit": "m", "explain": "Gli spazi per secondo stanno come 1 : 3 : 5 : 7: 2 · 7 = 14 m." },
    { "type": "mc", "q": "Su un grafico v-t una retta passa da (0 s, 4 m/s) a (5 s, 14 m/s). Lo spazio percorso in 5 s vale…", "options": ["45 m", "70 m", "20 m"], "answer": 0, "explain": "Area del trapezio: (4 + 14) / 2 · 5 = 45 m." }
  ]
});
