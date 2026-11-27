QBANK("it", "l1-fis-grandezze-misure", {
 "f": [
  { "type": "mc", "q": "Qual è l'unità di lunghezza del Sistema Internazionale?", "options": ["Il metro", "Il centimetro", "Il chilometro"], "answer": 0, "explain": "L'unità SI di lunghezza è il metro (m)." },
  { "type": "tf", "q": "Il secondo è l'unità di tempo del SI.", "answer": true, "explain": "Il tempo si misura in secondi (s)." },
  { "type": "num", "q": "Quanti grammi sono 2 kg?", "answer": 2000, "tol": 0, "unit": "g", "explain": "1 kg = 1000 g, quindi 2 kg = 2000 g." },
  { "type": "mc", "q": "Quale di queste NON è una grandezza fisica?", "options": ["La temperatura", "La simpatia", "La massa"], "answer": 1, "explain": "La simpatia non è misurabile in modo oggettivo." },
  { "type": "text", "q": "Qual è il simbolo del chilogrammo?", "answer": ["kg"], "explain": "Si scrive kg." }
 ],
 "m": [
  { "type": "num", "q": "Converti 0,75 km in metri.", "answer": 750, "tol": 0, "unit": "m", "explain": "0,75 × 1000 = 750 m." },
  { "type": "num", "q": "Converti 18 km/h in m/s.", "answer": 5, "tol": 0, "unit": "m/s", "explain": "18 : 3,6 = 5 m/s." },
  { "type": "mc", "q": "Qual è l'unità SI della velocità?", "options": ["m/s", "m·s", "kg/m", "s/m"], "answer": 0, "explain": "La velocità è spazio diviso tempo: m/s." },
  { "type": "mc", "q": "Come si scrive 3 400 000 in notazione scientifica?", "options": ["3,4 × 10⁶", "34 × 10⁵", "3,4 × 10⁵", "0,34 × 10⁷"], "answer": 0, "explain": "La virgola si sposta di 6 posti: 3,4 × 10⁶." },
  { "type": "tf", "q": "1 litro è uguale a 1 dm³.", "answer": true, "explain": "È la definizione pratica di litro: il volume di un cubo di 1 dm di lato." }
 ],
 "d": [
  { "type": "mc", "q": "Una lastra ha area 2,5 m². Quanti cm²?", "options": ["250", "2500", "25 000", "250 000"], "answer": 2, "explain": "1 m² = 10⁴ cm², quindi 2,5 m² = 2,5 × 10⁴ = 25 000 cm²." },
  { "type": "mc", "q": "Qual è l'ordine di grandezza della massa di un elettrone, 9,11 × 10⁻³¹ kg?", "options": ["10⁻³⁰", "10⁻³¹", "10⁻³²", "10⁻²⁹"], "answer": 0, "explain": "Poiché 9,11 ≥ 5, l'ordine di grandezza è 10⁻³¹⁺¹ = 10⁻³⁰." },
  { "type": "num", "q": "Calcola (6 × 10⁸) / (2 × 10³) e indica l'esponente di 10 del risultato scritto come 3 × 10ⁿ.", "answer": 5, "tol": 0, "explain": "6/2 = 3 e 8 − 3 = 5: il risultato è 3 × 10⁵." },
  { "type": "mc", "q": "Un oggetto ha densità 2,7 g/cm³. Quanto vale in kg/m³?", "options": ["27", "270", "2700", "27 000"], "answer": 2, "explain": "1 g/cm³ = 1000 kg/m³, quindi 2,7 g/cm³ = 2700 kg/m³." },
  { "type": "mc", "q": "Perché la formula v = s · t è sicuramente sbagliata?", "options": ["Le sue unità sono m·s e non m/s", "Perché non c'è la massa", "Perché v è una lettera minuscola", "Non è sbagliata"], "answer": 0, "explain": "L'analisi dimensionale mostra che la velocità richiede un rapporto s/t." }
 ]
});
