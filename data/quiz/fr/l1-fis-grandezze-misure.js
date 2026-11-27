QBANK("fr", "l1-fis-grandezze-misure", {
 "f": [
  { "type": "mc", "q": "Quelle est l'unité de longueur du Système international ?", "options": ["Le mètre", "Le centimètre", "Le kilomètre"], "answer": 0, "explain": "L'unité SI de longueur est le mètre (m)." },
  { "type": "tf", "q": "La seconde est l'unité de temps du SI.", "answer": true, "explain": "Le temps se mesure en secondes (s)." },
  { "type": "num", "q": "Combien de grammes font 2 kg ?", "answer": 2000, "tol": 0, "unit": "g", "explain": "1 kg = 1000 g, donc 2 kg = 2000 g." },
  { "type": "mc", "q": "Laquelle de ces propriétés n'est PAS une grandeur physique ?", "options": ["La température", "La sympathie", "La masse"], "answer": 1, "explain": "La sympathie ne se mesure pas de façon objective." },
  { "type": "text", "q": "Quel est le symbole du kilogramme ?", "answer": ["kg"], "explain": "On écrit kg." }
 ],
 "m": [
  { "type": "num", "q": "Convertis 0,75 km en mètres.", "answer": 750, "tol": 0, "unit": "m", "explain": "0,75 × 1000 = 750 m." },
  { "type": "num", "q": "Convertis 18 km/h en m/s.", "answer": 5, "tol": 0, "unit": "m/s", "explain": "18 : 3,6 = 5 m/s." },
  { "type": "mc", "q": "Quelle est l'unité SI de la vitesse ?", "options": ["m/s", "m·s", "kg/m", "s/m"], "answer": 0, "explain": "La vitesse est une distance divisée par un temps : m/s." },
  { "type": "mc", "q": "Comment écrit-on 3 400 000 en notation scientifique ?", "options": ["3,4 × 10⁶", "34 × 10⁵", "3,4 × 10⁵", "0,34 × 10⁷"], "answer": 0, "explain": "La virgule se déplace de 6 rangs : 3,4 × 10⁶." },
  { "type": "tf", "q": "1 litre est égal à 1 dm³.", "answer": true, "explain": "C'est la définition pratique du litre : le volume d'un cube de 1 dm de côté." }
 ],
 "d": [
  { "type": "mc", "q": "Une plaque a une aire de 2,5 m². Combien de cm² ?", "options": ["250", "2500", "25 000", "250 000"], "answer": 2, "explain": "1 m² = 10⁴ cm², donc 2,5 m² = 2,5 × 10⁴ = 25 000 cm²." },
  { "type": "mc", "q": "Quel est l'ordre de grandeur de la masse d'un électron, 9,11 × 10⁻³¹ kg ?", "options": ["10⁻³⁰", "10⁻³¹", "10⁻³²", "10⁻²⁹"], "answer": 0, "explain": "Comme 9,11 ≥ 5, l'ordre de grandeur est 10⁻³¹⁺¹ = 10⁻³⁰." },
  { "type": "num", "q": "Calcule (6 × 10⁸) / (2 × 10³) et indique l'exposant de 10 du résultat écrit sous la forme 3 × 10ⁿ.", "answer": 5, "tol": 0, "explain": "6/2 = 3 et 8 − 3 = 5 : le résultat est 3 × 10⁵." },
  { "type": "mc", "q": "Un objet a une masse volumique de 2,7 g/cm³. Combien cela fait-il en kg/m³ ?", "options": ["27", "270", "2700", "27 000"], "answer": 2, "explain": "1 g/cm³ = 1000 kg/m³, donc 2,7 g/cm³ = 2700 kg/m³." },
  { "type": "mc", "q": "Pourquoi la formule v = d · t est-elle forcément fausse ?", "options": ["Ses unités sont des m·s et non des m/s", "Parce qu'il n'y a pas la masse", "Parce que v est une lettre minuscule", "Elle n'est pas fausse"], "answer": 0, "explain": "L'analyse dimensionnelle montre que la vitesse exige un rapport d/t." }
 ]
});
