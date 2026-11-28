QBANK("ro", "l1-fis-vettori-forze", {
 "f": [
  { "type": "mc", "q": "Care este unitatea de măsură a forței în SI?", "options": ["Newtonul", "Joule-ul", "Kilogramul"], "answer": 0, "explain": "Forța se măsoară în newtoni (N)." },
  { "type": "tf", "q": "Masa este o mărime vectorială.", "answer": false, "explain": "Masa este scalară: are doar o valoare." },
  { "type": "mc", "q": "Care instrument măsoară forțele?", "options": ["Dinamometrul", "Termometrul", "Cronometrul"], "answer": 0, "explain": "Dinamometrul folosește alungirea unui arc." },
  { "type": "num", "q": "Două forțe de 3 N și 5 N au aceeași direcție și același sens. Cât este rezultanta?", "answer": 8, "tol": 0, "unit": "N", "explain": "Se adună modulele: 3 + 5 = 8 N." },
  { "type": "mc", "q": "În ce direcție acționează greutatea?", "options": ["Spre centrul Pământului", "Orizontal", "În sus"], "answer": 0, "explain": "Greutatea este verticală, îndreptată în jos." }
 ],
 "m": [
  { "type": "num", "q": "Calculează greutatea unui corp de 12 kg pe Pământ (g = 9,8 m/s²).", "answer": 117.6, "tol": 0.1, "unit": "N", "explain": "G = 12 × 9,8 = 117,6 N." },
  { "type": "num", "q": "Un arc cu k = 80 N/m este alungit cu 0,15 m. Cât este forța elastică?", "answer": 12, "tol": 0.01, "unit": "N", "explain": "F = 80 × 0,15 = 12 N." },
  { "type": "num", "q": "Două forțe perpendiculare de 5 N și 12 N: calculează rezultanta.", "answer": 13, "tol": 0, "unit": "N", "explain": "√(25 + 144) = √169 = 13 N." },
  { "type": "tf", "q": "Greutatea unui astronaut este aceeași pe Pământ și pe Lună.", "answer": false, "explain": "Pe Lună g este aproximativ 1/6: greutatea este aproximativ o șesime, masa rămâne aceeași." },
  { "type": "mc", "q": "Cărei acțiuni i se opune forța de frecare?", "options": ["Alunecării dintre suprafețe", "Gravitației", "Alungirii unui arc", "Masei"], "answer": 0, "explain": "Frecarea acționează de-a lungul suprafețelor în contact și se opune mișcării relative." }
 ],
 "d": [
  { "type": "num", "q": "Un corp de 6 kg într-un loc unde g = 1,6 m/s²: cât este greutatea lui?", "answer": 9.6, "tol": 0.01, "unit": "N", "explain": "G = 6 × 1,6 = 9,6 N." },
  { "type": "num", "q": "Un bloc de 10 kg (g = 10 m/s²) stă în repaus pe un plan orizontal cu μ_s = 0,4. Care este forța minimă pentru a-l pune în mișcare?", "answer": 40, "tol": 0.1, "unit": "N", "explain": "N = 100 N; F_s,max = 0,4 × 100 = 40 N." },
  { "type": "mc", "q": "Un arc, atârnat de un suport, se alungește cu 4 cm sub o greutate de 2 N. Cu 6 N (în limita de elasticitate) cât se alungește?", "options": ["8 cm", "10 cm", "12 cm", "16 cm"], "answer": 2, "explain": "k = 2/0,04 = 50 N/m; Δx = 6/50 = 0,12 m = 12 cm." },
  { "type": "mc", "q": "Un vaporaș se îndreaptă perpendicular pe mal cu viteza de 12 m/s pe un râu care curge cu 5 m/s. Cât este modulul vitezei față de mal?", "options": ["7 m/s", "13 m/s", "17 m/s", "60 m/s"], "answer": 1, "explain": "√(12² + 5²) = √169 = 13 m/s." },
  { "type": "tf", "q": "Dacă suma vectorială a forțelor care acționează asupra unui corp este nulă, modulele forțelor trebuie să fie toate nule.", "answer": false, "explain": "Forțe egale și opuse, de exemplu, au rezultanta nulă chiar dacă modulele nu sunt nule." }
 ]
});
