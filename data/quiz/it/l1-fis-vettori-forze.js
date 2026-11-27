QBANK("it", "l1-fis-vettori-forze", {
 "f": [
  { "type": "mc", "q": "Qual è l'unità di misura della forza nel SI?", "options": ["Newton", "Joule", "Chilogrammo"], "answer": 0, "explain": "La forza si misura in newton (N)." },
  { "type": "tf", "q": "La massa è una grandezza vettoriale.", "answer": false, "explain": "La massa è scalare: ha solo un valore." },
  { "type": "mc", "q": "Quale strumento misura le forze?", "options": ["Dinamometro", "Termometro", "Cronometro"], "answer": 0, "explain": "Il dinamometro usa l'allungamento di una molla." },
  { "type": "num", "q": "Due forze di 3 N e 5 N hanno stessa direzione e stesso verso. Quanto vale la risultante?", "answer": 8, "tol": 0, "unit": "N", "explain": "Si sommano i moduli: 3 + 5 = 8 N." },
  { "type": "mc", "q": "In quale direzione agisce la forza peso?", "options": ["Verso il centro della Terra", "Orizzontale", "Verso l'alto"], "answer": 0, "explain": "La forza peso è verticale, diretta verso il basso." }
 ],
 "m": [
  { "type": "num", "q": "Calcola il peso di un corpo di 12 kg sulla Terra (g = 9,8 m/s²).", "answer": 117.6, "tol": 0.1, "unit": "N", "explain": "P = 12 × 9,8 = 117,6 N." },
  { "type": "num", "q": "Una molla con k = 80 N/m è allungata di 0,15 m. Quanto vale la forza elastica?", "answer": 12, "tol": 0.01, "unit": "N", "explain": "F = 80 × 0,15 = 12 N." },
  { "type": "num", "q": "Due forze perpendicolari di 5 N e 12 N: calcola la risultante.", "answer": 13, "tol": 0, "unit": "N", "explain": "√(25 + 144) = √169 = 13 N." },
  { "type": "tf", "q": "Il peso di un astronauta è lo stesso sulla Terra e sulla Luna.", "answer": false, "explain": "Sulla Luna g è circa 1/6: il peso è circa un sesto, la massa resta uguale." },
  { "type": "mc", "q": "A cosa si oppone la forza di attrito?", "options": ["Allo scivolamento tra le superfici", "Alla gravità", "All'allungamento di una molla", "Alla massa"], "answer": 0, "explain": "L'attrito agisce lungo le superfici in contatto e contrasta il moto relativo." }
 ],
 "d": [
  { "type": "num", "q": "Un corpo di 6 kg in un luogo dove g = 1,6 m/s²: quanto vale il suo peso?", "answer": 9.6, "tol": 0.01, "unit": "N", "explain": "P = 6 × 1,6 = 9,6 N." },
  { "type": "num", "q": "Un blocco di 10 kg (g = 10 m/s²) è fermo su un piano orizzontale con μ_s = 0,4. Qual è la forza minima per metterlo in moto?", "answer": 40, "tol": 0.1, "unit": "N", "explain": "N = 100 N; F_s,max = 0,4 × 100 = 40 N." },
  { "type": "mc", "q": "Una molla, appesa a un supporto, si allunga di 4 cm con un peso di 2 N. Con 6 N (entro il limite elastico) quanto si allunga?", "options": ["8 cm", "10 cm", "12 cm", "16 cm"], "answer": 2, "explain": "k = 2/0,04 = 50 N/m; Δx = 6/50 = 0,12 m = 12 cm." },
  { "type": "mc", "q": "Un battello punta perpendicolarmente alla riva con velocità 12 m/s in un fiume che scorre a 5 m/s. Quanto vale il modulo della velocità rispetto alla riva?", "options": ["7 m/s", "13 m/s", "17 m/s", "60 m/s"], "answer": 1, "explain": "√(12² + 5²) = √169 = 13 m/s." },
  { "type": "tf", "q": "Se la somma vettoriale delle forze su un corpo è nulla, i moduli delle forze devono essere tutti nulli.", "answer": false, "explain": "Forze uguali e opposte, ad esempio, hanno risultante nulla anche se i moduli non sono nulli." }
 ]
});
