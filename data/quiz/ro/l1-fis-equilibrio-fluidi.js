QBANK("ro", "l1-fis-equilibrio-fluidi", {
 "f": [
  { "type": "mc", "q": "Care este unitatea de presiune în Sistemul Internațional?", "options": ["newton", "pascal", "joule"], "answer": 1, "explain": "Presiunea se măsoară în pascali: 1 Pa = 1 N/m²." },
  { "type": "num", "q": "O forță de 100 N acționează perpendicular pe 2 m². Ce presiune (în Pa) exercită?", "answer": 50, "unit": "Pa", "explain": "p = F/S = 100/2 = 50 Pa." },
  { "type": "tf", "q": "La aceeași greutate, o persoană cu schiuri exercită pe zăpadă o presiune mai mică decât una cu bocanci.", "answer": true, "explain": "Schiurile au o suprafață mult mai mare: la aceeași forță, presiunea p = F/S este mai mică." },
  { "type": "text", "q": "Care savant din Siracuza a enunțat principiul privind împingerea primită de corpurile scufundate într-un fluid?", "answer": ["arhimede", "arhimede din siracuza"], "explain": "Arhimede din Siracuza (secolul al III-lea î.Hr.) a formulat principiul care îi poartă numele." },
  { "type": "mc", "q": "Un obiect se scufundă în apă când densitatea lui este…", "options": ["mai mică de 1000 kg/m³", "egală cu 1000 kg/m³", "mai mare de 1000 kg/m³"], "answer": 2, "explain": "Dacă densitatea corpului depășește pe cea a apei, greutatea prevalează asupra împingerii și corpul se scufundă." }
 ],
 "m": [
  { "type": "num", "q": "Ce presiune (în Pa) exercită apa (ρ = 1000 kg/m³, g = 10 m/s²) la 8 m adâncime, fără a socoti atmosfera?", "answer": 80000, "unit": "Pa", "explain": "p = ρ g h = 1000 × 10 × 8 = 80 000 Pa." },
  { "type": "mc", "q": "Conform principiului lui Pascal, într-un fluid în echilibru o presiune aplicată într-un punct…", "options": ["rămâne doar în acel punct", "se transmite egal în orice punct al fluidului", "scade cu distanța"], "answer": 1, "explain": "Presiunea se transmite nemodificată în tot fluidul și pe pereți." },
  { "type": "num", "q": "O presă hidraulică are pistoane cu ariile de 10 cm² și 500 cm². Apăsând pe cel mic cu 20 N, ce forță (în N) se obține pe cel mare?", "answer": 1000, "unit": "N", "explain": "F2 = F1·S2/S1 = 20 × 500/10 = 1000 N." },
  { "type": "tf", "q": "Împingerea lui Arhimede asupra unui corp complet scufundat depinde de volumul corpului, dar nu de forma lui.", "answer": true, "explain": "FA = ρ V g: contează doar volumul de fluid dezlocuit." },
  { "type": "mc", "q": "Un bloc de gheață (917 kg/m³) plutește în apă. Ce fracțiune din volumul lui este scufundată, aproximativ?", "options": ["8%", "50%", "92%"], "answer": 2, "explain": "Fracțiunea scufundată este ρgheață/ρapă = 917/1000, aproximativ 92%." }
 ],
 "d": [
  { "type": "num", "q": "Un cub de lemn cu latura de 20 cm și masa de 6,4 kg este complet scufundat în apă (ρ = 1000 kg/m³, g = 10 m/s²). Cu ce forță rezultantă (în N, pozitivă dacă este în sus) este împins?", "answer": 16, "unit": "N", "explain": "V = 0,008 m³: FA = 1000 × 0,008 × 10 = 80 N; G = 6,4 × 10 = 64 N. Rezultanta în sus: 80 − 64 = 16 N." },
  { "type": "num", "q": "Într-un tub în formă de U care conține apă într-o parte și ulei în cealaltă, coloana de apă are 20 cm. Dacă densitatea uleiului este 800 kg/m³, cât de înaltă (în cm) este coloana de ulei, măsurată de la aceeași suprafață de separare?", "answer": 25, "unit": "cm", "explain": "ρ1h1 = ρ2h2: 1000 × 20 = 800 × h, deci h = 25 cm." },
  { "type": "mc", "q": "De ce coloana de mercur a unui barometru are aproximativ 760 mm, în timp ce o coloană de apă ar avea peste 10 m?", "options": ["Pentru că mercurul este mult mai dens decât apa (de aproximativ 13,6 ori)", "Pentru că mercurul este mai rece", "Pentru că mercurul nu este afectat de gravitație"], "answer": 0, "explain": "Coloana trebuie să aibă greutatea pe unitatea de arie egală cu presiunea atmosferică: ρ g h = constant. Cu ρ de 13,6 ori mai mare, h este de 13,6 ori mai mic." },
  { "type": "tf", "q": "Un scafandru care coboară de la 10 m la 30 m adâncime în apă de mare vede presiunea totală crescând cu aproximativ 2 atm.", "answer": true, "explain": "La fiecare 10 m de apă se adaugă aproximativ 1 atm: 20 m în plus înseamnă aproximativ 2 atm în plus." },
  { "type": "mc", "q": "O barcă încărcată cu mărfuri se scufundă mai mult în apă. Ce se întâmplă cu împingerea lui Arhimede?", "options": ["Scade", "Crește, până egalează noua greutate", "Rămâne aceeași și barca se scufundă"], "answer": 1, "explain": "Scufundându-se mai mult, barca dezlocuiește mai multă apă: împingerea crește până egalează greutatea totală și echilibrul se restabilește." }
 ]
});
