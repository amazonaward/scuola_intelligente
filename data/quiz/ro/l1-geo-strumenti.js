QBANK("ro", "l1-geo-strumenti", {
 "f": [
  { "type": "mc", "q": "Care este paralela de referință de la 0° latitudine?", "options": ["Tropicul Racului", "Ecuatorul", "Cercul polar arctic"], "answer": 1, "explain": "Ecuatorul este paralela 0°, de la care se măsoară latitudinea." },
  { "type": "num", "q": "Pe o hartă la scara 1:10.000, 5 cm câți metri înseamnă în realitate?", "answer": 500, "tol": 0, "unit": "m", "explain": "5 cm × 10.000 = 50.000 cm = 500 m." },
  { "type": "tf", "q": "Meridianele sunt semicercuri care unesc Polul Nord cu Polul Sud.", "answer": true, "explain": "Meridianele trec prin poli și măsoară longitudinea." },
  { "type": "text", "q": "Cum se numește elementul hărții care explică simbolurile și culorile?", "answer": ["legenda", "legendă", "legenda hărții"], "explain": "Legenda este elementul hărții care explică semnificația simbolurilor și a culorilor." },
  { "type": "mc", "q": "Ce indică longitudinea?", "options": ["Distanța unghiulară față de Greenwich", "Distanța unghiulară față de Ecuator", "Altitudinea"], "answer": 0, "explain": "Longitudinea măsoară distanța unghiulară Est-Vest față de meridianul Greenwich." }
 ],
 "m": [
  { "type": "mc", "q": "O scară 1:2.000.000 este…", "options": ["o scară mare", "o scară mică", "o scară egală cu 1:1"], "answer": 1, "explain": "Numitorul este foarte mare: scara este mică și reprezintă o zonă vastă cu puține detalii." },
  { "type": "num", "q": "Două sate sunt la 15 km distanță. Pe o hartă sunt la 30 cm. Care este numitorul scării (1:N)?", "answer": 50000, "tol": 0, "explain": "15 km = 1.500.000 cm; 1.500.000 ÷ 30 = 50.000: scara 1:50.000." },
  { "type": "tf", "q": "Pe o hartă topografică, curbele de nivel foarte depărtate indică o pantă lină.", "answer": true, "explain": "Curbele îndepărtate între ele înseamnă puțină variație de cotă pe o distanță mare." },
  { "type": "mc", "q": "Cât echivalează aproximativ 1 oră de diferență orară în grade de longitudine?", "options": ["15°", "24°", "90°"], "answer": 0, "explain": "360° ÷ 24 de ore = 15° pe oră." },
  { "type": "mc", "q": "La ce servesc hărțile tematice?", "options": ["Să arate un singur fenomen pe o bază geografică", "Să arate doar drumurile", "Să măsoare adâncimea mării"], "answer": 0, "explain": "O hartă tematică reprezintă un fenomen anume (climă, populație, venit…)." }
 ],
 "d": [
  { "type": "mc", "q": "De ce trebuie o proiecție cartografică să deformeze întotdeauna ceva?", "options": ["Pentru că o suprafață sferică nu poate fi întinsă pe un plan fără a deforma ariile, formele sau distanțele", "Pentru că cartografii greșesc măsurătorile", "Pentru că Pământul este prea mare"], "answer": 0, "explain": "Este o proprietate matematică (Gauss): o sferă nu este desfășurabilă pe plan." },
  { "type": "num", "q": "O potecă măsoară 4,8 cm pe o hartă 1:25.000. Câți metri are lungimea ei (pe orizontală)?", "answer": 1200, "tol": 0, "unit": "m", "explain": "4,8 × 25.000 = 120.000 cm = 1.200 m." },
  { "type": "tf", "q": "GPS-ul poate calcula poziția cu un singur satelit.", "answer": false, "explain": "Sunt necesari cel puțin patru sateliți: trei pentru poziție și unul pentru corectarea ceasului receptorului." },
  { "type": "mc", "q": "O dată GIS „vectorială” este, de exemplu…", "options": ["O fotografie prin satelit", "Poligonul care reprezintă granița unei comune", "O grilă de pixeli de altitudine"], "answer": 1, "explain": "Datele vectoriale sunt puncte, linii și poligoane; fotografiile prin satelit și grilele de altitudine sunt date raster." },
  { "type": "mc", "q": "Care dintre aceste proiecții păstrează ariile, dar deformează formele?", "options": ["Mercator", "Gall-Peters", "Niciuna dintre cele două"], "answer": 1, "explain": "Gall-Peters este echivalentă: păstrează raporturile dintre arii, dar formele ies alungite." }
 ]
});
