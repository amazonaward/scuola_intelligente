QBANK("fr", "l1-fis-ottica-geometrica", {
 "f": [
  { "type": "mc", "q": "Comment la lumière se propage-t-elle dans un milieu homogène et transparent ?", "options": ["En ligne droite", "En zigzag", "En cercle"], "answer": 0, "explain": "Dans un milieu homogène, la lumière se propage en ligne droite : c'est le fondement de l'optique géométrique." },
  { "type": "tf", "q": "Un rayon qui arrive avec un angle de 40° sur un miroir plan est réfléchi avec un angle de 40°.", "answer": true, "explain": "Loi de la réflexion : angle de réflexion = angle d'incidence." },
  { "type": "mc", "q": "Quelle est, environ, la vitesse de la lumière dans le vide ?", "options": ["300 m/s", "300 000 km/s", "30 000 km/s"], "answer": 1, "explain": "c ≈ 3,00 × 10^8 m/s = 300 000 km/s." },
  { "type": "text", "q": "Comment s'appelle la droite perpendiculaire à la surface au point où arrive un rayon ?", "answer": ["normale", "la normale"], "explain": "Les angles d'incidence, de réflexion et de réfraction se mesurent par rapport à la normale." },
  { "type": "mc", "q": "Quel type de lentille utilise-t-on comme loupe ?", "options": ["Convergente", "Divergente", "Aucune des deux"], "answer": 0, "explain": "Une lentille convergente, avec l'objet entre la lentille et le foyer, donne une image virtuelle, droite et agrandie." }
 ],
 "m": [
  { "type": "num", "q": "Un miroir sphérique a un rayon de courbure de 50 cm. Quelle est sa distance focale (en cm, en valeur absolue) ?", "answer": 25, "unit": "cm", "explain": "f = R/2 = 25 cm." },
  { "type": "num", "q": "Calcule l'indice de réfraction d'un matériau dans lequel la lumière se déplace à 2,0 × 10^8 m/s (c = 3,0 × 10^8 m/s).", "answer": 1.5, "tol": 0.01, "explain": "n = c/v = 1,5 : c'est la valeur typique du verre." },
  { "type": "mc", "q": "Un rayon passe du verre à l'air sous une incidence oblique. Le rayon réfracté…", "options": ["se rapproche de la normale", "s'écarte de la normale", "garde la même direction"], "answer": 1, "explain": "En passant dans un milieu d'indice plus petit, le rayon s'écarte de la normale." },
  { "type": "num", "q": "Une lentille a une distance focale de 50 cm (0,5 m). Combien de dioptries a-t-elle ?", "answer": 2, "unit": "D", "explain": "V = 1/f = 1/0,5 = 2 D." },
  { "type": "tf", "q": "L'image donnée par un miroir plan est réelle et renversée.", "answer": false, "explain": "Elle est virtuelle, droite, de même taille que l'objet et symétrique par rapport au miroir." }
 ],
 "d": [
  { "type": "num", "q": "Une lentille convergente a f = 12 cm. Un objet est placé à 36 cm de la lentille. À quelle distance (en cm) se forme l'image ?", "answer": 18, "unit": "cm", "explain": "1/q = 1/12 − 1/36 = 3/36 − 1/36 = 2/36, donc q = 18 cm (G = −0,5)." },
  { "type": "num", "q": "Un rayon passe de l'air (n = 1) dans un liquide d'indice n = 1,6 avec un angle de 53,1° (sin 53,1° = 0,8). Que vaut sin θ2 ?", "answer": 0.5, "tol": 0.01, "explain": "sin θ2 = 0,8/1,6 = 0,5, soit θ2 = 30°." },
  { "type": "mc", "q": "Un rayon dans le verre (n = 1,5) arrive sur la surface verre-air avec un angle de 50°. Que se passe-t-il ?", "options": ["Il sort dans l'air en se rapprochant de la normale", "Il y a réflexion totale", "Il sort sans être dévié"], "answer": 1, "explain": "L'angle limite verre-air vaut arcsin(1/1,5) ≈ 41,8°. Comme 50° est plus grand, il n'y a pas de rayon réfracté : toute la lumière est réfléchie." },
  { "type": "tf", "q": "Une personne myope a besoin d'une lentille de vergence négative.", "answer": true, "explain": "La myopie se corrige avec des lentilles divergentes, qui ont une distance focale négative et donc des dioptries négatives." },
  { "type": "mc", "q": "Un objet est placé entre le sommet et le foyer d'un miroir concave. L'image est…", "options": ["réelle, renversée et réduite", "virtuelle, droite et agrandie", "virtuelle, droite et réduite"], "answer": 1, "explain": "C'est le cas du miroir grossissant pour se raser : si p < f, q est négatif (image virtuelle), et G = −q/p est positif et supérieur à 1." }
 ]
});
