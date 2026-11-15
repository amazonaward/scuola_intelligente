QBANK("ro", "m2-tec-reti", {
 "f": [
  {
   "type": "mc",
   "q": "Care rețea acoperă doar câțiva metri, ca o pereche de căști Bluetooth legate de telefon?",
   "options": [
    "PAN",
    "WAN",
    "MAN"
   ],
   "answer": 0,
   "explain": "PAN (Personal Area Network) este rețeaua personală: acoperă câțiva metri."
  },
  {
   "type": "tf",
   "q": "Un server este un calculator care oferă servicii sau conținut clienților.",
   "answer": true,
   "explain": "Clientul cere, serverul răspunde, de exemplu trimițând o pagină sau un videoclip."
  },
  {
   "type": "mc",
   "q": "Cine a inventat World Wide Web la CERN, în Geneva?",
   "options": [
    "Tim Berners-Lee",
    "Vinton Cerf",
    "Guglielmo Marconi"
   ],
   "answer": 0,
   "explain": "Englezul Tim Berners-Lee a propus Web-ul în 1989."
  },
  {
   "type": "text",
   "q": "Cum se numește antena la care te conectezi prin Wi-Fi?",
   "answer": [
    "punct de acces",
    "punctul de acces",
    "access point"
   ],
   "explain": "Punctul de acces (access point) este antena Wi-Fi."
  },
  {
   "type": "tf",
   "q": "Wi-Fi transmite datele prin impulsuri de lumină într-un fir de sticlă.",
   "answer": false,
   "explain": "Fals: Wi-Fi folosește unde radio; impulsurile de lumină aparțin fibrei optice."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Un episod dintr-un serial are 750 MB, iar conexiunea ta este de 50 Mbit/s. Câte secunde sunt necesare pentru descărcare (condiții ideale)?",
   "answer": 120,
   "tol": 0,
   "unit": "s",
   "explain": "750 × 8 = 6000 Mbit; 6000 ÷ 50 = 120 secunde."
  },
  {
   "type": "mc",
   "q": "La ce folosește un switch?",
   "options": [
    "Leagă între ele dispozitivele aceleiași rețele LAN",
    "Traduce numele site-urilor în adrese IP",
    "Funcționează ca antenă Wi-Fi"
   ],
   "answer": 0,
   "explain": "Switch-ul leagă prin cabluri dispozitivele aceleiași rețele locale (LAN)."
  },
  {
   "type": "mc",
   "q": "De ce a fost introdus IPv6?",
   "options": [
    "Pentru că IPv4 este mai lent",
    "Pentru că adresele IPv4 nu ajung pentru toate dispozitivele din lume",
    "Pentru că IPv6 nu folosește DNS"
   ],
   "answer": 1,
   "explain": "IPv4 are circa 4,3 miliarde de adrese: prea puține pentru toate dispozitivele; IPv6 oferă un număr practic infinit."
  },
  {
   "type": "num",
   "q": "Un videoclip are 25 MB. Câți Mbit sunt?",
   "answer": 200,
   "tol": 0,
   "unit": "Mbit",
   "explain": "1 byte = 8 biți, deci 25 × 8 = 200 Mbit."
  },
  {
   "type": "text",
   "q": "Ce sigla are protocolul criptat al Web-ului, cel cu lacătul?",
   "answer": [
    "https"
   ],
   "explain": "HTTPS este versiunea criptată și sigură a lui HTTP."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Un joc are 1,2 GB (= 1200 MB). Cu câte secunde durează mai mult descărcarea cu un ADSL de 16 Mbit/s decât cu o fibră de 400 Mbit/s?",
   "answer": 576,
   "tol": 0,
   "unit": "s",
   "explain": "1200 × 8 = 9600 Mbit. ADSL: 9600 ÷ 16 = 600 s. Fibră: 9600 ÷ 400 = 24 s. Diferența: 600 − 24 = 576 s."
  },
  {
   "type": "num",
   "q": "O reclamă promite o conexiune de 200 Mbit/s. Câți MB pe secundă se pot descărca cel mult?",
   "answer": 25,
   "tol": 0,
   "unit": "MB/s",
   "explain": "Se împarte la 8: 200 ÷ 8 = 25 MB/s."
  },
  {
   "type": "mc",
   "q": "Un cablu submarin se rupe, dar Internetul funcționează aproape ca înainte. De ce?",
   "options": [
    "Routerele trimit pachetele pe alte drumuri",
    "Toate datele trec oricum prin sateliți",
    "Pachetele se recreează singure"
   ],
   "answer": 0,
   "explain": "Routerele trimit pachetele pe drumul cel mai liber: dacă un drum nu merge, îl folosesc pe altul."
  },
  {
   "type": "tf",
   "q": "Dacă un pachet se pierde pe drum, fișierul ajunge incomplet pentru că TCP nu poate face nimic.",
   "answer": false,
   "explain": "Fals: TCP observă că lipsește un pachet și îl retrimite, apoi pune totul în ordine."
  },
  {
   "type": "order",
   "q": "Pune în ordine rețelele de la cea mai mică la cea mai mare ca întindere.",
   "items": [
    "PAN (căști și telefon)",
    "LAN (o școală)",
    "MAN (un oraș)",
    "WAN (continente, Internet)"
   ],
   "explain": "De la cei câțiva metri ai unui PAN până la continentele unui WAN."
  }
 ]
});
