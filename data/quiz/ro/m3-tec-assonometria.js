QBANK("ro", "m3-tec-assonometria", {
 "f": [
  {
   "type": "mc",
   "q": "Ce instrument se folosește pentru a trasa dreptele de 30° ale izometriei?",
   "options": [
    "Compasul",
    "Echerul de 30°/60°",
    "Raportorul cu vârf"
   ],
   "answer": 1,
   "explain": "Cu echerul de 30°/60° și rigla se trasează ușor dreptele de 30° și verticala."
  },
  {
   "type": "tf",
   "q": "Axonometria reprezintă lățimea, adâncimea și înălțimea într-un singur desen.",
   "answer": true,
   "explain": "Adevărat: spre deosebire de proiecțiile ortogonale, care folosesc trei vederi separate, arată obiectul într-o singură vedere."
  },
  {
   "type": "text",
   "q": "Cu ce literă se notează axa lățimilor?",
   "answer": [
    "x",
    "axa x"
   ],
   "explain": "Axa x este pentru lățimi, y pentru adâncimi, z (verticală) pentru înălțimi."
  },
  {
   "type": "num",
   "q": "Câte fețe ale unui cub se văd în același timp într-un desen axonometric?",
   "answer": 3,
   "explain": "Se văd trei fețe: cea de sus și două laterale."
  },
  {
   "type": "mc",
   "q": "Ce tip de proiecție este axonometria?",
   "options": [
    "O proiecție cu punct de fugă",
    "O proiecție centrală",
    "O proiecție paralelă"
   ],
   "answer": 2,
   "explain": "Razele de proiecție sunt paralele: de aceea paralelele rămân paralele și nu există punct de fugă."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Un raft de 60 × 15 × 2 cm este desenat în izometrie la scara 1:10. Cât de lung este segmentul de pe axa x în desen?",
   "answer": 6,
   "unit": "cm",
   "explain": "În izometrie măsurile sunt reale pe axe: 60 cm ÷ 10 = 6 cm."
  },
  {
   "type": "num",
   "q": "O cameră are înălțimea de 2,5 m. Într-o monometrică la scara 1:50, cât de înaltă este peretele desenat?",
   "answer": 5,
   "unit": "cm",
   "explain": "2,5 m = 250 cm; 250 ÷ 50 = 5 cm. Înălțimile se reproduc reale, pe verticală."
  },
  {
   "type": "mc",
   "q": "Ce foaie îți permite să desenezi în izometrie fără echere?",
   "options": [
    "Hârtia milimetrică cu pătrățele",
    "Hârtia izometrică, cu puncte dispuse în triunghiuri",
    "Hârtia milimetrică cu linii verticale"
   ],
   "answer": 1,
   "explain": "Unind punctele pe verticală și pe cele două direcții de 30°, desenul iese aproape singur."
  },
  {
   "type": "tf",
   "q": "Umbra unui obiect pe podea la soare este o proiecție paralelă, pentru că razele Soarelui sosesc practic paralele.",
   "answer": true,
   "explain": "Adevărat: Soarele este foarte departe. Cu un bec apropiat, razele ar pleca dintr-un punct, iar umbra s-ar lărgi, ca în perspectivă."
  },
  {
   "type": "mc",
   "q": "Ce formă are fața de sus a unui cub în izometrie?",
   "options": [
    "Un pătrat",
    "Un romb",
    "Un cerc"
   ],
   "answer": 1,
   "explain": "Laturile sunt paralele cu axele x și y la 30°: fața devine un romb cu unghiuri de 60° și 120°."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "O cutie de 20 × 10 × 6 cm este desenată în izometrie la scara 1:2. Cât este suma celor trei lungimi desenate pe axele x, y și z?",
   "answer": 18,
   "unit": "cm",
   "explain": "20 ÷ 2 = 10, 10 ÷ 2 = 5, 6 ÷ 2 = 3 (fără reduceri suplimentare în izometrie): 10 + 5 + 3 = 18 cm."
  },
  {
   "type": "mc",
   "q": "Marco desenează o cutie în izometrie și înjumătățește toate măsurile de adâncime (axa y). Unde este greșeala?",
   "options": [
    "Reducerea la jumătate a adâncimii este tipică proiecției cavalieră, nu izometriei",
    "Axa y trebuie să fie verticală",
    "În izometrie adâncimea nu se desenează niciodată",
    "Nu e nicio greșeală: izometria reduce mereu adâncimea"
   ],
   "answer": 0,
   "explain": "În izometrie x, y și z se reproduc la mărime reală (×1); doar în cavaliera redusă adâncimea se înjumătățește."
  },
  {
   "type": "tf",
   "q": "Într-o monometrică cu planul rotit cu 45°, unghiurile drepte ale planului rămân de 90° în desen.",
   "answer": true,
   "explain": "Adevărat: în monometrică planul se copiază exact, doar rotit, deci forma și unghiurile rămân reale."
  },
  {
   "type": "mc",
   "q": "Într-un desen al unui cub, muchia cea mai îndepărtată pare mai scurtă, iar liniile laterale converg spre un punct. Ce tip de desen este?",
   "options": [
    "Izometrie",
    "Cavalieră",
    "Perspectivă"
   ],
   "answer": 2,
   "explain": "Scurtarea cu distanța și punctele de fugă sunt tipice perspectivei; axonometria este paralelă și nu le are."
  },
  {
   "type": "order",
   "q": "Pune în ordine pașii pentru desenarea unei camere mobilate în monometrică.",
   "items": [
    "Rotește planul cu 30° și copiază-l",
    "Ridică pereții pe verticală din colțuri",
    "Desenează patul și biroul ca paralelipipede",
    "Conturează muchiile vizibile și trasează cu linie întreruptă pe cele ascunse"
   ],
   "explain": "Mai întâi se rotește planul, apoi se ridică pereții, se adaugă mobilierul și la final se finisează muchiile."
  }
 ]
});
