QBANK("ro", "l1-fis-errori-misura", {
 "f": [
  { "type": "mc", "q": "Pentru o riglă împărțită în milimetri, care este sensibilitatea?", "options": ["1 mm", "1 cm", "0,1 mm"], "answer": 0, "explain": "Sensibilitatea este cea mai mică diviziune a scării: 1 mm." },
  { "type": "tf", "q": "Orice măsurare este afectată de o eroare, adică de o incertitudine.", "answer": true, "explain": "Niciun instrument nu este perfect: orice măsurare are o incertitudine." },
  { "type": "mc", "q": "Cu ce operație se obține valoarea medie a mai multor măsurări?", "options": ["Suma măsurărilor împărțită la numărul de măsurări", "Produsul măsurărilor", "Diferența dintre maxim și minim"], "answer": 0, "explain": "Valoarea medie este suma împărțită la N." },
  { "type": "num", "q": "Calculează media dintre 4 cm, 6 cm și 8 cm.", "answer": 6, "tol": 0, "unit": "cm", "explain": "(4 + 6 + 8)/3 = 18/3 = 6 cm." },
  { "type": "text", "q": "Cum se numește valoarea maximă pe care o poate măsura un instrument?", "answer": ["domeniu de măsurare", "domeniul de măsurare", "capacitate", "capacitatea", "portată", "portata"], "explain": "Este domeniul de măsurare (capacitatea) instrumentului." }
 ],
 "m": [
  { "type": "num", "q": "Măsurări: 5,2 s; 5,6 s; 5,4 s. Calculează eroarea absolută ca semidispersie.", "answer": 0.2, "tol": 0.001, "unit": "s", "explain": "(5,6 − 5,2)/2 = 0,2 s." },
  { "type": "num", "q": "O măsurare este (20 ± 1) cm. Cât este eroarea procentuală?", "answer": 5, "tol": 0.01, "unit": "%", "explain": "1/20 = 0,05, adică 5 %." },
  { "type": "mc", "q": "Câte cifre semnificative are 0,0705?", "options": ["2", "3", "4", "5"], "answer": 1, "explain": "Zerourile de la început nu contează; 7, 0, 5 sunt semnificative: 3 cifre." },
  { "type": "tf", "q": "O eroare aleatorie se reduce mărind numărul de măsurări și făcând media.", "answer": true, "explain": "Erorile aleatorii, mergând când în plus, când în minus, se compensează în parte." },
  { "type": "mc", "q": "Un termometru arată întotdeauna cu 2 grade mai mult decât valoarea reală. Ce eroare este?", "options": ["Sistematică", "Aleatorie", "Grosolană", "Nulă"], "answer": 0, "explain": "Deplasează toate măsurările în același sens." }
 ],
 "d": [
  { "type": "mc", "q": "Un dreptunghi are laturile (4,0 ± 0,1) cm și (2,0 ± 0,1) cm. Cât este eroarea absolută a perimetrului?", "options": ["0,2 cm", "0,4 cm", "0,6 cm", "0,3 cm"], "answer": 1, "explain": "Perimetrul este 2(a + b): erorile absolute se adună pentru fiecare latură: 4 × 0,1 = 0,4 cm." },
  { "type": "mc", "q": "Care dintre cele două măsurări este mai bună: (100 ± 2) m sau (10,0 ± 0,5) cm?", "options": ["Prima, pentru că 2 % este mai puțin decât 5 %", "A doua, pentru că 0,5 < 2", "Sunt egale", "Nu se poate spune"], "answer": 0, "explain": "Se compară erorile relative: 2/100 = 2 % față de 0,5/10 = 5 %." },
  { "type": "num", "q": "Calculează 2,5 × 3,24 și rotunjește respectând cifrele semnificative. Câte cifre semnificative are rezultatul?", "answer": 2, "tol": 0, "explain": "Data cu mai puține cifre (2,5) are 2: rezultatul 8,1 are 2 cifre." },
  { "type": "tf", "q": "O măsurare poate fi foarte fidelă, dar puțin exactă.", "answer": true, "explain": "Dacă există o eroare sistematică, valorile sunt apropiate între ele, dar departe de valoarea adevărată." },
  { "type": "mc", "q": "Care este scrierea corectă a rezultatului? Media 21,44 cm, eroarea 0,15 cm.", "options": ["(21,4 ± 0,2) cm", "(21,44 ± 0,15) cm cu 4 cifre", "(21 ± 0,15) cm", "21,4 cm fără eroare"], "answer": 0, "explain": "Eroarea are o cifră semnificativă, iar valoarea are același număr de zecimale ca eroarea." }
 ]
});
