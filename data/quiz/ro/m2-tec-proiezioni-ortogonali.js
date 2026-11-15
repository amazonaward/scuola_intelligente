QBANK("ro", "m2-tec-proiezioni-ortogonali", {
 "f": [
  {
   "type": "mc",
   "q": "Ce plan primește vederea de sus?",
   "options": [
    "Planul orizontal (P.O.)",
    "Planul vertical (P.V.)",
    "Planul lateral (P.L.)"
   ],
   "answer": 0,
   "explain": "Vederea de sus (planul) se proiectează pe planul orizontal, P.O."
  },
  {
   "type": "tf",
   "q": "În proiecțiile ortogonale nu există perspectivă: muchiile egale rămân egale chiar dacă sunt departe.",
   "answer": true,
   "explain": "Razele paralele nu deformează: fețele paralele cu planul apar în formă și mărime reală."
  },
  {
   "type": "mc",
   "q": "Cum se mai numește vederea frontală?",
   "options": [
    "Plan",
    "Fațadă",
    "Secțiune"
   ],
   "answer": 1,
   "explain": "Vederea frontală se numește și fațadă (prospect)."
  },
  {
   "type": "num",
   "q": "Câte vederi (frontală, de sus, laterală) se folosesc de obicei pentru a descrie un obiect?",
   "answer": 3,
   "tol": 0,
   "explain": "Se folosesc trei vederi, câte una pentru fiecare plan: P.V., P.O. și P.L."
  },
  {
   "type": "text",
   "q": "Cum se numește sistemul celor trei plane perpendiculare care formează un colț ca într-o cameră?",
   "answer": [
    "triedru",
    "triedrul",
    "un triedru"
   ],
   "explain": "Triedrul este format din planul vertical, cel orizontal și cel lateral."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "O cărămidă are lungimea de 12 cm, adâncimea de 7 cm și înălțimea de 5 cm. Câți cm² are aria vederii sale laterale?",
   "answer": 35,
   "tol": 0,
   "unit": "cm²",
   "explain": "Vederea laterală este un dreptunghi adâncime × înălțime = 7 × 5 = 35 cm²."
  },
  {
   "type": "mc",
   "q": "Un con așezat pe bază: care sunt vederile sale frontală, laterală și de sus?",
   "options": [
    "Triunghi, triunghi, cerc",
    "Dreptunghi, dreptunghi, cerc",
    "Cerc, cerc, triunghi"
   ],
   "answer": 0,
   "explain": "Din față și din lateral, conul apare ca un triunghi isoscel; de sus, ca un cerc."
  },
  {
   "type": "mc",
   "q": "În ce pereche de vederi apare înălțimea obiectului?",
   "options": [
    "Frontală și laterală",
    "Frontală și de sus",
    "De sus și laterală"
   ],
   "answer": 0,
   "explain": "Înălțimea apare în vederea frontală și în cea laterală; în planul de sus nu apare."
  },
  {
   "type": "num",
   "q": "Un cub are muchia de 4 cm. Câți cm are perimetrul vederii sale de sus?",
   "answer": 16,
   "tol": 0,
   "unit": "cm",
   "explain": "Vederea de sus este un pătrat cu latura de 4 cm: 4 × 4 = 16 cm."
  },
  {
   "type": "text",
   "q": "Cum se numește vederea de sus a unui obiect?",
   "answer": [
    "plan",
    "planul",
    "vederea de sus"
   ],
   "explain": "Vederea de sus se numește plan și se desenează sub vederea frontală."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Un paralelipiped are în vederea frontală un dreptunghi de 9 × 4 cm (lățime × înălțime) și în plan un dreptunghi de 9 × 6 cm (lățime × adâncime). Care este volumul în cm³?",
   "answer": 216,
   "tol": 0,
   "unit": "cm³",
   "explain": "Dimensiuni: lățime 9, înălțime 4, adâncime 6. Volum = 9 × 4 × 6 = 216 cm³."
  },
  {
   "type": "mc",
   "q": "Un elev trebuie să deseneze vederile unei cărămizi de 8 × 5 × 3 cm (lățime × adâncime × înălțime). Sub vederea frontală desenează un dreptunghi de 8 × 3 cm. Care este greșeala?",
   "options": [
    "Planul trebuie să fie 8 × 5 (lățime și adâncime)",
    "Planul trebuie desenat deasupra vederii frontale",
    "Planul trebuie să fie un pătrat"
   ],
   "answer": 0,
   "explain": "Planul arată lățimea și adâncimea: trebuie să fie un dreptunghi de 8 × 5 cm."
  },
  {
   "type": "tf",
   "q": "Dacă două obiecte au aceeași vedere frontală și aceeași vedere laterală, au neapărat și aceeași vedere de sus.",
   "answer": false,
   "explain": "Fals: un cilindru și un paralelipiped pot avea aceleași două dreptunghiuri, dar planul (cerc sau dreptunghi) le deosebește."
  },
  {
   "type": "mc",
   "q": "O piesă mecanică ajunge «în oglindă» și nu se poate monta. Care e cea mai probabilă cauză?",
   "options": [
    "Desenul a fost citit cu metoda greșită (europeană în loc de americană sau invers)",
    "S-a folosit linia întreruptă pentru muchiile ascunse",
    "Scara desenului era 1:1"
   ],
   "answer": 0,
   "explain": "Metoda europeană și cea americană așază vederile diferit: citirea desenului cu metoda greșită răstoarnă piesa."
  },
  {
   "type": "num",
   "q": "Un paralelipiped are lățimea de 10 cm, adâncimea de 6 cm și înălțimea de 4 cm. Ce măsură (în cm) se transferă din plan în vederea laterală cu linia de 45°?",
   "answer": 6,
   "tol": 0,
   "unit": "cm",
   "explain": "Linia de 45° transferă adâncimea, care apare în plan și în vederea laterală: 6 cm."
  }
 ]
});
