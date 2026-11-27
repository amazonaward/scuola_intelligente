QBANK("it", "l2-fis-moto-rettilineo", {
  "f": [
    { "type": "num", "q": "Un'auto percorre 150 km in 2 ore. Qual è la velocità media?", "answer": 75, "unit": "km/h", "explain": "150 / 2 = 75 km/h." },
    { "type": "mc", "q": "Qual è l'unità di misura della velocità nel Sistema Internazionale?", "options": ["km/h", "m/s", "m²/s"], "answer": 1, "explain": "Metro al secondo (m/s)." },
    { "type": "num", "q": "Converti 36 km/h in m/s.", "answer": 10, "unit": "m/s", "explain": "36 / 3,6 = 10 m/s." },
    { "type": "tf", "q": "Nel moto rettilineo uniforme la velocità è costante.", "answer": true, "explain": "È la definizione di moto uniforme." },
    { "type": "num", "q": "Un corpo va a 4 m/s per 10 s partendo dall'origine. Quanti metri ha percorso?", "answer": 40, "unit": "m", "explain": "s = v · t = 4 · 10 = 40 m." }
  ],
  "m": [
    { "type": "num", "q": "Un ciclista va a 18 km/h. Quanti metri percorre in 20 secondi?", "answer": 100, "unit": "m", "explain": "18 km/h = 5 m/s; 5 · 20 = 100 m." },
    { "type": "num", "q": "Un corpo ha legge oraria s = 20 + 3t (SI). Dove si trova dopo 8 s?", "answer": 44, "unit": "m", "explain": "s = 20 + 3 · 8 = 44 m." },
    { "type": "tf", "q": "Un corpo che si sposta da A a B e poi torna in A ha spostamento nullo.", "answer": true, "explain": "Lo spostamento è la differenza tra posizione finale e iniziale: coincidono." },
    { "type": "mc", "q": "Un grafico spazio-tempo è una retta che scende. Il corpo…", "options": ["Si muove nel verso negativo", "Accelera", "È fermo"], "answer": 0, "explain": "Pendenza negativa significa velocità negativa." },
    { "type": "num", "q": "La luce impiega circa 1,3 s dalla Luna alla Terra. Con c = 300 000 km/s, quanto dista la Luna?", "answer": 390000, "tol": 5000, "unit": "km", "explain": "d = c t = 300 000 km/s · 1,3 s ≈ 390 000 km." }
  ],
  "d": [
    { "type": "num", "q": "Due treni distano 360 km e viaggiano uno verso l'altro a 100 km/h e a 80 km/h. Dopo quante ore si incontrano?", "answer": 2, "unit": "h", "explain": "Velocità di avvicinamento 180 km/h: 360 / 180 = 2 h." },
    { "type": "num", "q": "Un'auto a 25 m/s insegue un camion a 20 m/s, 150 m più avanti. In quanti secondi lo raggiunge?", "answer": 30, "unit": "s", "explain": "Velocità relativa 5 m/s: 150 / 5 = 30 s." },
    { "type": "num", "q": "Vai a 30 km/h all'andata e a 60 km/h al ritorno sullo stesso percorso. Qual è la velocità media complessiva?", "answer": 40, "unit": "km/h", "explain": "Con 60 km di andata: 2 h + 1 h = 3 h per 120 km → 40 km/h (media armonica)." },
    { "type": "mc", "q": "Un osservatore su un treno a 30 m/s lancia in avanti una palla a 5 m/s rispetto al treno. Rispetto al binario la palla ha velocità…", "options": ["25 m/s", "35 m/s", "5 m/s"], "answer": 1, "explain": "Le velocità si sommano nella relatività galileiana: 30 + 5 = 35 m/s." },
    { "type": "num", "q": "L'area sotto il grafico v-t è un rettangolo di base 8 s e altezza 12 m/s. Quanto vale lo spostamento?", "answer": 96, "unit": "m", "explain": "Area = 12 · 8 = 96 m." }
  ]
});
