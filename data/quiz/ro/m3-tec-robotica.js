QBANK("ro", "m3-tec-robotica", {
 "f": [
  {
   "type": "mc",
   "q": "Care parte a unui robot funcționează ca „creierul”?",
   "options": [
    "Senzorul",
    "Controlerul",
    "Actuatorul"
   ],
   "answer": 1,
   "explain": "Controlerul prelucrează datele senzorilor și decide ce comenzi să dea actuatoarelor."
  },
  {
   "type": "tf",
   "q": "Un senzor infraroșu poate ajuta un robot să urmeze o linie neagră de pe podea.",
   "answer": true,
   "explain": "Adevărat: linia neagră absoarbe lumina infraroșie, podeaua deschisă o reflectă."
  },
  {
   "type": "text",
   "q": "Cum se numește celebra placă cu microcontroler născută la Ivrea și folosită pentru a construi roboți?",
   "answer": [
    "arduino",
    "placa arduino"
   ],
   "explain": "Arduino s-a născut la Ivrea în 2005 și este folosit în toată lumea pentru a învăța electronica și robotica."
  },
  {
   "type": "mc",
   "q": "Ce senzor îi spune unui robot cu cât s-a rotit un motor?",
   "options": [
    "Ultrasunete",
    "Buton de contact",
    "Encoder"
   ],
   "answer": 2,
   "explain": "Encoderul numără rotațiile sau fracțiuni de rotație: așa se știe cu câți centimetri s-a deplasat robotul."
  },
  {
   "type": "num",
   "q": "În ce an a scris scriitorul Karel Čapek drama R.U.R., din care provine cuvântul „robot”?",
   "answer": 1920,
   "explain": "Drama R.U.R. este din 1920; „robot” vine din cehul robota, „muncă forțată”."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Un motor pas cu pas face 200 de pași pe rotație. Câți pași sunt necesari pentru 2,5 rotații?",
   "answer": 500,
   "unit": "pași",
   "explain": "200 × 2,5 = 500 de pași."
  },
  {
   "type": "num",
   "q": "O roată are circumferința de 20 cm. Dacă encoderul numără 15 rotații, câți centimetri a parcurs robotul?",
   "answer": 300,
   "unit": "cm",
   "explain": "Fiecare rotație înaintează 20 cm: 15 × 20 = 300 cm (3 m)."
  },
  {
   "type": "mc",
   "q": "Un termostat (buclă închisă) are ca obiectiv 20 °C, iar senzorul măsoară 17 °C. Ce face controlerul?",
   "options": [
    "Oprește încălzirea",
    "Pornește încălzirea",
    "Nu face nimic pentru că temporizatorul nu a expirat"
   ],
   "answer": 1,
   "explain": "Controlerul compară măsurătoarea (17 °C) cu obiectivul (20 °C) și acționează pentru a reduce diferența."
  },
  {
   "type": "tf",
   "q": "PLC-ul este un calculator robust folosit în fabrici pentru a controla mașini și benzi transportoare.",
   "answer": true,
   "explain": "Adevărat: PLC-ul (controler logic programabil) este „creierul” robust al liniilor de producție."
  },
  {
   "type": "order",
   "q": "Pune în ordine activitatea unei linii automate dintr-o fabrică de automobile.",
   "items": [
    "Un senzor detectează caroseria pe bandă",
    "PLC-ul oprește banda",
    "Brațele robotice sudează",
    "O cameră verifică calitatea",
    "Banda repornește"
   ],
   "explain": "Schemă: senzor ➜ controler ➜ actuatoare (brațe) ➜ control de calitate ➜ repornire."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Un robot se orientează folosind doar encoderele roților. După mult drum, poziția estimată devine greșită. De ce?",
   "options": [
    "Roțile pot patina, iar erorile mici se adună rotație după rotație",
    "Encoderul nu mai funcționează după 10 metri",
    "Robotul uită că are un controler",
    "Roțile se lărgesc în timp"
   ],
   "answer": 0,
   "explain": "De aceea se adaugă alți senzori (giroscop, LiDAR, cameră) care corectează poziția."
  },
  {
   "type": "num",
   "q": "Un motor pas cu pas de 200 de pași pe rotație mișcă un braț printr-un reductor 1:5 (motorul face 5 rotații pentru 1 rotație a brațului). Câți pași sunt necesari pentru o rotație completă a brațului?",
   "answer": 1000,
   "unit": "pași",
   "explain": "Motorul trebuie să facă 5 rotații: 5 × 200 = 1000 de pași."
  },
  {
   "type": "mc",
   "q": "Un aspersor cu temporizator udă 10 minute în fiecare zi, chiar și când plouă. Cum îl transformi într-un sistem în buclă închisă?",
   "options": [
    "Prelungind timpul temporizatorului",
    "Adăugând un senzor de umiditate a solului care pornește apa doar sub un prag",
    "Schimbând culoarea țevilor",
    "Înlocuind temporizatorul cu unul mai precis"
   ],
   "answer": 1,
   "explain": "Bucla închisă măsoară rezultatul (umiditatea) și îl compară cu obiectivul: astfel nu se irosește apă când plouă."
  },
  {
   "type": "tf",
   "q": "Adăugarea mai multor grade de libertate unui braț robotic îl face mereu mai simplu de controlat.",
   "answer": false,
   "explain": "Fals: mai multe mișcări independente fac brațul mai versatil, dar calculele și controlul mai complexe."
  },
  {
   "type": "text",
   "q": "Cum se numește valoarea-țintă pe care controlerul o compară cu măsurătoarea senzorului într-un sistem în buclă închisă?",
   "answer": [
    "valoare de referință",
    "set-point",
    "setpoint",
    "valoare țintă",
    "obiectiv"
   ],
   "explain": "Se numește set-point (valoare de referință): controlerul calculează diferența dintre set-point și măsurătoare și o corectează."
  }
 ]
});
