QBANK("ro", "l1-fis-ottica-geometrica", {
 "f": [
  { "type": "mc", "q": "Cum se propagă lumina într-un mediu omogen și transparent?", "options": ["În linie dreaptă", "În zigzag", "În cerc"], "answer": 0, "explain": "Într-un mediu omogen lumina se propagă în linie dreaptă: este baza opticii geometrice." },
  { "type": "tf", "q": "O rază care cade cu un unghi de 40° pe o oglindă plană este reflectată sub un unghi de 40°.", "answer": true, "explain": "Legea reflexiei: unghiul de reflexie = unghiul de incidență." },
  { "type": "mc", "q": "Care este aproximativ viteza luminii în vid?", "options": ["300 m/s", "300 000 km/s", "30 000 km/s"], "answer": 1, "explain": "c ≈ 3,00 × 10^8 m/s = 300 000 km/s." },
  { "type": "text", "q": "Cum se numește dreapta perpendiculară pe suprafață în punctul în care ajunge o rază?", "answer": ["normală", "normala", "normală la suprafață"], "explain": "Unghiurile de incidență, de reflexie și de refracție se măsoară față de normală." },
  { "type": "mc", "q": "Ce tip de lentilă este folosit ca lupă?", "options": ["Convergentă", "Divergentă", "Niciuna dintre cele două"], "answer": 0, "explain": "O lentilă convergentă cu obiectul între lentilă și focar dă o imagine virtuală, dreaptă și mărită." }
 ],
 "m": [
  { "type": "num", "q": "O oglindă sferică are raza de curbură de 50 cm. Cât este distanța ei focală (în cm, în valoare absolută)?", "answer": 25, "unit": "cm", "explain": "f = R/2 = 25 cm." },
  { "type": "num", "q": "Calculează indicele de refracție al unui material în care lumina se deplasează cu 2,0 × 10^8 m/s (c = 3,0 × 10^8 m/s).", "answer": 1.5, "tol": 0.01, "explain": "n = c/v = 1,5: este valoarea tipică a sticlei." },
  { "type": "mc", "q": "O rază trece din sticlă în aer cu incidență oblică. Raza refractată…", "options": ["se apropie de normală", "se îndepărtează de normală", "rămâne pe aceeași direcție"], "answer": 1, "explain": "La trecerea într-un mediu cu indice mai mic, raza se îndepărtează de normală." },
  { "type": "num", "q": "O lentilă are distanța focală de 50 cm (0,5 m). Câte dioptrii are?", "answer": 2, "unit": "D", "explain": "C = 1/f = 1/0,5 = 2 D." },
  { "type": "tf", "q": "Imaginea într-o oglindă plană este reală și răsturnată.", "answer": false, "explain": "Este virtuală, dreaptă și de aceleași dimensiuni cu obiectul, simetrică față de oglindă." }
 ],
 "d": [
  { "type": "num", "q": "O lentilă convergentă are f = 12 cm. Un obiect este așezat la 36 cm de lentilă. La ce distanță (în cm) se formează imaginea?", "answer": 18, "unit": "cm", "explain": "1/q = 1/12 − 1/36 = 3/36 − 1/36 = 2/36, deci q = 18 cm (G = −0,5)." },
  { "type": "num", "q": "O rază cade din aer (n = 1) pe un lichid cu indicele n = 1,6 sub un unghi de 53,1° (sin 53,1° = 0,8). Cât este sin θ2?", "answer": 0.5, "tol": 0.01, "explain": "sin θ2 = 0,8/1,6 = 0,5, adică θ2 = 30°." },
  { "type": "mc", "q": "O rază din sticlă (n = 1,5) cade pe suprafața sticlă-aer sub un unghi de 50°. Ce se întâmplă?", "options": ["Iese în aer apropiindu-se de normală", "Are loc reflexie totală", "Iese fără să se abată"], "answer": 1, "explain": "Unghiul limită sticlă-aer este arcsin(1/1,5) ≈ 41,8°. Cum 50° este mai mare, nu există rază refractată: toată lumina este reflectată." },
  { "type": "tf", "q": "O persoană cu miopie are nevoie de o lentilă cu convergență negativă.", "answer": true, "explain": "Miopia se corectează cu lentile divergente, care au distanța focală negativă și deci dioptrii negative." },
  { "type": "mc", "q": "Un obiect este așezat între vârful și focarul unei oglinzi concave. Imaginea este…", "options": ["reală, răsturnată și micșorată", "virtuală, dreaptă și mărită", "virtuală, dreaptă și micșorată"], "answer": 1, "explain": "Este situația oglinzii de bărbierit: dacă p < f, q rezultă negativ (virtuală), iar G = −q/p este pozitiv și mai mare decât 1." }
 ]
});
