QBANK("ro", "m1-geo-clima-ambienti", {
 "f": [
  {
   "type": "mc",
   "q": "Ce instrument măsoară precipitațiile?",
   "options": [
    "Anemometru",
    "Pluviometru",
    "Barometru"
   ],
   "answer": 1,
   "explain": "Pluviometrul măsoară ploaia în milimetri; anemometrul măsoară vântul, barometrul presiunea."
  },
  {
   "type": "tf",
   "q": "Pe măsură ce urci în altitudine, temperatura aerului scade în medie.",
   "answer": true,
   "explain": "În medie, temperatura scade cu aproximativ 0,6 °C la fiecare 100 m de urcare."
  },
  {
   "type": "mc",
   "q": "Ce climă are Palermo?",
   "options": [
    "Oceanic",
    "Mediteranean",
    "Subarctic"
   ],
   "answer": 1,
   "explain": "Palermo, pe coasta Siciliei, are ierni blânde și veri calde și uscate: climă mediteraneană."
  },
  {
   "type": "text",
   "q": "Cum se numește instrumentul care măsoară viteza vântului?",
   "answer": [
    "anemometru",
    "anemometrul",
    "un anemometru"
   ],
   "explain": "Anemometrul măsoară viteza vântului (girueta îi arată direcția)."
  },
  {
   "type": "mc",
   "q": "Care dintre aceste animale trăiește în tundră?",
   "options": [
    "Mistreț",
    "Capră neagră de munte (ibex)",
    "Ren"
   ],
   "answer": 2,
   "explain": "Renul trăiește în tundră, printre mușchi și licheni. Mistrețul trăiește în păduri, capra de munte în Alpi."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Pe vârful unui munte de 3.000 m sunt 2 °C. Câte grade sunt aproximativ la nivelul mării (0 m)?",
   "answer": 20,
   "tol": 0.5,
   "unit": "°C",
   "explain": "Diferență de nivel 3.000 m → scădere de 3.000 : 100 × 0,6 = 18 °C. Jos e mai cald: 2 + 18 = 20 °C."
  },
  {
   "type": "num",
   "q": "Un oraș are o amplitudine termică anuală de 20 °C, iar luna cea mai caldă are media de 28 °C. Care este media lunii celei mai reci?",
   "answer": 8,
   "tol": 0,
   "unit": "°C",
   "explain": "Amplitudinea = cea mai caldă − cea mai rece, deci cea mai rece = 28 − 20 = 8 °C."
  },
  {
   "type": "mc",
   "q": "De ce sunt numiți ghețarii alpini «termometre» ale climei?",
   "options": [
    "Pentru că se lungesc în anii reci și se retrag în cei calzi",
    "Pentru că conțin mercur",
    "Pentru că măsoară cantitatea de ploaie"
   ],
   "answer": 0,
   "explain": "Lungimea unui ghețar se schimbă cu temperatura: urmărind-o ani la rând se vede cum se schimbă clima."
  },
  {
   "type": "tf",
   "q": "Versantul unui munte expus vânturilor umede primește mai multă ploaie decât celălalt.",
   "answer": true,
   "explain": "Reliefurile fac de barieră: aerul umed urcă, se răcește și lasă ploaia pe versantul expus."
  },
  {
   "type": "order",
   "q": "Ordonează aceste medii naturale europene de la nord la sud.",
   "items": [
    "Tundra",
    "Taiga",
    "Pădure de foioase",
    "Maquis mediteranean"
   ],
   "explain": "De la nord la sud: tundră, taiga, pădure de foioase și, în sfârșit, maquis mediteranean."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Un teleferic urcă de la 1.000 m, unde sunt 25 °C, până la 2.800 m. Câte grade vor fi aproximativ sus?",
   "answer": 14.2,
   "tol": 0.2,
   "unit": "°C",
   "explain": "Diferență de nivel: 2.800 − 1.000 = 1.800 m. Scădere: 1.800 : 100 × 0,6 = 10,8 °C. Sus: 25 − 10,8 = 14,2 °C."
  },
  {
   "type": "mc",
   "q": "Tromsø se află dincolo de Cercul Polar de Nord, dar portul ei nu îngheață iarna. De ce?",
   "options": [
    "Pentru că se află la mare altitudine",
    "Pentru că Alpii o apără de vânturile reci",
    "Pentru că un curent marin cald îi îmblânzește clima"
   ],
   "answer": 2,
   "explain": "Curentul Golfului aduce apă caldă până în Norvegia și face clima mult mai blândă decât în alte locuri de la aceeași latitudine."
  },
  {
   "type": "tf",
   "q": "Două orașe aflate la aceeași latitudine au întotdeauna aceeași climă.",
   "answer": false,
   "explain": "Contează și marea, curenții, vânturile și altitudinea: Irlanda e blândă, iar Labradorul (aceeași latitudine) e acoperit de zăpadă luni în șir."
  },
  {
   "type": "mc",
   "q": "Orașul A: ianuarie 4 °C, iulie 17 °C, ploi în tot cursul anului. Orașul B: ianuarie −8 °C, iulie 20 °C, ploi mai ales vara. Care afirmație este corectă?",
   "options": [
    "A este continentală și B oceanică",
    "A este oceanică și B continentală",
    "Ambele sunt mediteraneene",
    "A este mediteraneană și B polară"
   ],
   "answer": 1,
   "explain": "A: amplitudine 13 °C, ierni blânde, ploi tot anul → oceanic. B: amplitudine 28 °C, ierni geroase, ploi vara → continental."
  },
  {
   "type": "num",
   "q": "Londra: ianuarie 5 °C, iulie 19 °C. Moscova: ianuarie −6 °C, iulie 19 °C. Cu câte grade este amplitudinea Moscovei mai mare decât a Londrei?",
   "answer": 11,
   "tol": 0,
   "unit": "°C",
   "explain": "Londra: 19 − 5 = 14 °C. Moscova: 19 − (−6) = 25 °C. Diferența: 25 − 14 = 11 °C."
  }
 ]
});
