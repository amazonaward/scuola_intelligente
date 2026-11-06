TOPIC('fr', {
 "id": "m3-mat-solidi",
 "title": "Les solides : aire et volume",
 "intro": "Boîtes, canettes, cornets de glace, ballons : nous sommes entourés de solides. Apprenons à les reconnaître, à calculer combien de matériau il faut pour les construire (<b>aire</b>) et combien d'espace ils occupent (<b>volume</b>).",
 "minutes": 40,
 "sections": [
  {
   "type": "text",
   "title": "1. Polyèdres et solides de révolution",
   "html": "<p>Un <b>solide</b> est une figure géométrique à trois dimensions : longueur, largeur, hauteur. On les divise en deux grandes familles :</p><ul><li><b>Polyèdres</b> : délimités uniquement par des polygones (les <b>faces</b>). Les faces se rencontrent sur les <b>arêtes</b>, les arêtes aux <b>sommets</b>. Exemples : cube, pavé droit, prisme, pyramide.</li><li><b>Solides de révolution</b> : on les obtient en faisant tourner une figure plane autour d'un axe. Ils ont des surfaces courbes. Exemples : cylindre (rectangle qui tourne), cône (triangle rectangle qui tourne), sphère (demi-disque qui tourne).</li></ul>"
  },
  {
   "type": "3d",
   "title": "Explore les solides en 3D",
   "scene": "solid",
   "options": {
    "shape": "cube",
    "shapes": [
     "cube",
     "box",
     "prism",
     "pyramid",
     "cylinder",
     "cone",
     "sphere"
    ],
    "labels": true,
    "color": "#60a5fa"
   },
   "caption": "Fais tourner chaque solide avec le doigt ou la souris. Compte les faces, les arêtes et les sommets des polyèdres."
  },
  {
   "type": "remember",
   "title": "La relation d'Euler",
   "html": "<p>Dans tout polyèdre convexe on a : <b>F + S − A = 2</b> (faces + sommets − arêtes).</p><p>Cube : 6 + 8 − 12 = 2 ✔ &nbsp; Pyramide à base carrée : 5 + 5 − 8 = 2 ✔</p>"
  },
  {
   "type": "text",
   "title": "2. Aire et volume : quelle différence ?",
   "html": "<ul><li>L'<b>aire latérale</b> (A<sub>l</sub>) est l'aire des faces latérales.</li><li>L'<b>aire totale</b> (A<sub>t</sub>) est A<sub>l</sub> + l'aire des bases. Elle se mesure en cm², m²…</li><li>Le <b>volume</b> (V) est l'espace occupé. Il se mesure en cm³, dm³, m³.</li></ul><p>Rappelle-toi les équivalences : <b>1 dm³ = 1 litre</b> ; 1 m³ = 1000 dm³ = 1000 litres ; 1 cm³ = 1 ml.</p><p>Pour calculer l'aire, il est utile d'imaginer le <b>patron</b> du solide : on « l'ouvre » et on l'étale sur la table.</p>"
  },
  {
   "type": "svg",
   "title": "Le patron du cube et du cylindre",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"320\" fill=\"#ffffff\"/><g fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"2\"><rect x=\"80\" y=\"30\" width=\"60\" height=\"60\"/><rect x=\"20\" y=\"90\" width=\"60\" height=\"60\"/><rect x=\"80\" y=\"90\" width=\"60\" height=\"60\"/><rect x=\"140\" y=\"90\" width=\"60\" height=\"60\"/><rect x=\"200\" y=\"90\" width=\"60\" height=\"60\"/><rect x=\"80\" y=\"150\" width=\"60\" height=\"60\"/></g><text x=\"140\" y=\"250\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\">Cube : 6 carrés identiques</text><text x=\"140\" y=\"275\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\">A<tspan font-size=\"12\" dy=\"4\">t</tspan><tspan dy=\"-4\"> = 6 · c²</tspan></text><g stroke=\"#9a3412\" stroke-width=\"2\"><rect x=\"330\" y=\"95\" width=\"220\" height=\"90\" fill=\"#fed7aa\"/><circle cx=\"440\" cy=\"60\" r=\"35\" fill=\"#fdba74\"/><circle cx=\"440\" cy=\"220\" r=\"35\" fill=\"#fdba74\"/></g><text x=\"440\" y=\"145\" font-size=\"16\" text-anchor=\"middle\" font-family=\"sans-serif\">base = 2πr (circonférence)</text><text x=\"560\" y=\"145\" font-size=\"16\" font-family=\"sans-serif\">h</text><text x=\"440\" y=\"290\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\">Cylindre : 1 rectangle + 2 disques</text></svg>",
   "caption": "Patron : le cube s'ouvre en 6 carrés, le cylindre en un rectangle (la surface latérale) et deux disques."
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre : pourquoi les formules sont ainsi",
   "intro": "Les formules des volumes ne s'apprennent pas seulement par cœur : on peut les « voir » et même les toucher.",
   "tabs": [
    {
     "label": "🪙 Principe de Cavalieri",
     "html": "<p>Prends une pile de pièces bien droite puis pousse-la sur le côté : elle devient penchée, mais les pièces sont les mêmes, donc le <b>volume ne change pas</b>. Bonaventura Cavalieri (1635), élève de Galilée, en fit un principe : <b>si deux solides ont la même hauteur et, à chaque hauteur, des sections de même aire, ils ont le même volume</b>. C'est pourquoi un prisme oblique a le même volume qu'un prisme droit : V = A<sub>base</sub> × h.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><ellipse cx=\"150\" cy=\"255\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"235\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"215\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"195\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"175\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"155\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"135\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"115\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"95\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"75\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"400\" cy=\"255\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"420\" cy=\"235\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"438\" cy=\"215\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"453\" cy=\"195\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"463\" cy=\"175\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"469\" cy=\"155\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"471\" cy=\"135\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"468\" cy=\"115\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"462\" cy=\"95\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"454\" cy=\"75\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><text x=\"150\" y=\"292\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Pile droite</text><text x=\"440\" y=\"292\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Pile penchée</text><text x=\"300\" y=\"40\" font-size=\"18\" text-anchor=\"middle\" fill=\"#b91c1c\" font-weight=\"bold\">Mêmes pièces = même volume</text></svg>"
    },
    {
     "label": "📐 Patrons",
     "html": "<p>Coupe le solide le long de quelques arêtes et ouvre-le sur la table : tu obtiens le <b>patron</b>. L'aire du patron est l'<b>aire totale</b>. Le cylindre devient un rectangle (aussi long que la circonférence, 2πr) plus deux disques ; le cône un secteur circulaire plus un disque.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f0f9ff\"/><g transform=\"translate(20,40)\" stroke=\"#1e3a8a\" stroke-width=\"2\" fill=\"#bfdbfe\"><rect x=\"50\" y=\"0\" width=\"50\" height=\"50\"/><rect x=\"0\" y=\"50\" width=\"50\" height=\"50\"/><rect x=\"50\" y=\"50\" width=\"50\" height=\"50\"/><rect x=\"100\" y=\"50\" width=\"50\" height=\"50\"/><rect x=\"150\" y=\"50\" width=\"50\" height=\"50\"/><rect x=\"50\" y=\"100\" width=\"50\" height=\"50\"/></g><text x=\"120\" y=\"230\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Cube : 6 carrés</text><g transform=\"translate(260,30)\" stroke=\"#166534\" stroke-width=\"2\" fill=\"#bbf7d0\"><circle cx=\"60\" cy=\"25\" r=\"25\"/><rect x=\"0\" y=\"50\" width=\"157\" height=\"80\"/><circle cx=\"60\" cy=\"155\" r=\"25\"/></g><text x=\"340\" y=\"230\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">Cylindre : rectangle</text><text x=\"340\" y=\"250\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">long de 2πr + 2 disques</text><g transform=\"translate(470,40)\" stroke=\"#9a3412\" stroke-width=\"2\" fill=\"#fed7aa\"><path d=\"M60,0 L0,110 A125,125 0 0 0 120,110 Z\"/><circle cx=\"60\" cy=\"158\" r=\"28\"/></g><text x=\"530\" y=\"230\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">Cône : secteur</text><text x=\"530\" y=\"250\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">circulaire + disque</text></svg>"
    },
    {
     "label": "💧 Avec de l'eau",
     "html": "<p>Prends un cône et un cylindre en plastique avec la <b>même base et la même hauteur</b>. Remplis le cône d'eau et verse-la dans le cylindre : il faut exactement <b>3 cônes</b> pour le remplir. Voilà pourquoi V<sub>cône</sub> = πr²h : 3. C'est pareil pour la pyramide et le prisme. Archimède découvrit aussi que la sphère a les <b>2/3</b> du volume du cylindre dans lequel elle est inscrite.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><g transform=\"translate(60,40)\"><polygon points=\"0,0 120,0 60,180\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><text x=\"60\" y=\"210\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">cône plein d'eau</text></g><text x=\"235\" y=\"140\" font-size=\"28\" fill=\"#b91c1c\" font-weight=\"bold\">× 3 =</text><g transform=\"translate(340,40)\"><rect x=\"0\" y=\"0\" width=\"120\" height=\"180\" fill=\"#fff\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><rect x=\"0\" y=\"0\" width=\"120\" height=\"180\" fill=\"#93c5fd\" opacity=\".85\"/><line x1=\"0\" y1=\"60\" x2=\"120\" y2=\"60\" stroke=\"#1e3a8a\" stroke-dasharray=\"5 4\"/><line x1=\"0\" y1=\"120\" x2=\"120\" y2=\"120\" stroke=\"#1e3a8a\" stroke-dasharray=\"5 4\"/><text x=\"60\" y=\"210\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">cylindre plein</text></g><text x=\"520\" y=\"100\" font-size=\"15\" fill=\"#1f2937\">même base</text><text x=\"520\" y=\"125\" font-size=\"15\" fill=\"#1f2937\">même</text><text x=\"520\" y=\"148\" font-size=\"15\" fill=\"#1f2937\">hauteur</text></svg>"
    },
    {
     "label": "🧊 Cubes 3D",
     "html": "<p>Le volume est le <b>nombre de cubes unités</b> qui remplissent le solide. Un pavé droit 4 × 3 × 2 contient 4 × 3 = 12 cubes par couche, et il y a 2 couches : 24 cubes. Change les mesures avec les curseurs et compte !</p>",
     "scene": "blocks",
     "options": {
      "mode": "volume",
      "a": 4,
      "b": 3,
      "c": 2
     }
    },
    {
     "label": "🔺 3 pyramides = 1 cube",
     "html": "<p>Un cube peut se diviser en <b>3 pyramides identiques</b> à base carrée, toutes avec leur sommet dans le même coin du cube. Chacune a donc un tiers du volume du cube : V = c² × c : 3. Fais tourner la pyramide et imagine d'en assembler trois.</p>",
     "scene": "solid",
     "options": {
      "shape": "pyramid",
      "n": 4,
      "h": 1.4,
      "labels": true
     }
    }
   ]
  },
  {
   "type": "text",
   "title": "3. Le formulaire",
   "html": "<table><tr><th>Solide</th><th>Aire latérale</th><th>Aire totale</th><th>Volume</th></tr><tr><td>Cube (arête c)</td><td>4·c²</td><td>6·c²</td><td>c³</td></tr><tr><td>Pavé droit (a, b, c)</td><td>2p<sub>b</sub>·c = 2(a+b)·c</td><td>2(ab + bc + ac)</td><td>a·b·c</td></tr><tr><td>Prisme droit</td><td>2p<sub>b</sub>·h</td><td>A<sub>l</sub> + 2·A<sub>b</sub></td><td>A<sub>b</sub>·h</td></tr><tr><td>Pyramide régulière (apothème a)</td><td>p<sub>b</sub>·a (demi-périmètre × apothème)</td><td>A<sub>l</sub> + A<sub>b</sub></td><td>A<sub>b</sub>·h / 3</td></tr><tr><td>Cylindre</td><td>2πr·h</td><td>2πr·h + 2πr²</td><td>πr²·h</td></tr><tr><td>Cône (apothème a)</td><td>πr·a</td><td>πr·a + πr²</td><td>πr²·h / 3</td></tr><tr><td>Sphère</td><td>—</td><td>4πr²</td><td>4/3·πr³</td></tr></table><p>Dans le cône, l'apothème se trouve avec Pythagore : <b>a = √(r² + h²)</b>. Dans la pyramide à base carrée de côté l : <b>a = √(h² + (l/2)²)</b>.</p>"
  },
  {
   "type": "remember",
   "title": "La règle du « divisé par 3 »",
   "html": "<p>La pyramide et le cône ont un volume égal à <b>un tiers</b> de celui du prisme et du cylindre de même base et de même hauteur. Avec un cône plein d'eau, on remplit le cylindre correspondant en exactement <b>3 transvasements</b>.</p>"
  },
  {
   "type": "example",
   "title": "Exemple : combien d'eau contient l'aquarium ?",
   "html": "<p>Un aquarium en forme de pavé droit mesure 60 cm × 30 cm × 40 cm.</p><p>V = 60 × 30 × 40 = <b>72 000 cm³</b> = 72 dm³ = <b>72 litres</b>.</p><p>Pour savoir combien de verre il faut (sans couvercle) : aire de base 60×30 = 1800 cm², parois 2·(60×40) + 2·(30×40) = 4800 + 2400 = 7200 cm². Total : <b>9000 cm²</b> = 0,9 m².</p>"
  },
  {
   "type": "example",
   "title": "Exemple : l'étiquette de la canette",
   "html": "<p>Une canette cylindrique a un rayon de 3,3 cm et une hauteur de 11,5 cm.</p><ul><li>Étiquette (aire latérale) : 2π·3,3·11,5 ≈ <b>238,4 cm²</b>.</li><li>Volume : π·3,3²·11,5 ≈ 3,14·10,89·11,5 ≈ <b>393 cm³</b>, soit environ 0,39 litre : c'est la canette de 33 cl, avec un peu d'espace vide en haut !</li></ul>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz 1",
   "questions": [
    {
     "type": "num",
     "q": "Volume d'un cube d'arête 5 cm ?",
     "answer": 125,
     "tol": 0,
     "unit": "cm³",
     "explain": "V = c³ = 5 × 5 × 5 = 125 cm³."
    },
    {
     "type": "mc",
     "q": "Lequel de ces solides est un solide de révolution ?",
     "options": [
      "Prisme",
      "Pyramide",
      "Cône",
      "Cube"
     ],
     "answer": 2,
     "explain": "On obtient le cône en faisant tourner un triangle rectangle autour d'un côté de l'angle droit."
    },
    {
     "type": "num",
     "q": "Combien de litres font 3 dm³ ?",
     "answer": 3,
     "tol": 0,
     "unit": "litri",
     "explain": "1 dm³ = 1 litre."
    }
   ]
  },
  {
   "type": "text",
   "title": "4. Masse volumique : du volume à la masse",
   "html": "<p>Chaque matériau a sa <b>masse volumique</b> (ρ) : combien de grammes pèse 1 cm³. <b>Masse = Volume × ρ</b>.</p><table><tr><th>Matériau</th><th>ρ (g/cm³)</th></tr><tr><td>Liège</td><td>0,25</td></tr><tr><td>Bois de sapin</td><td>0,5</td></tr><tr><td>Eau</td><td>1</td></tr><tr><td>Verre</td><td>2,5</td></tr><tr><td>Fer</td><td>7,8</td></tr><tr><td>Or</td><td>19,3</td></tr></table><p>Un cube de fer de 10 cm d'arête : V = 1000 cm³ → masse = 1000 × 7,8 = <b>7800 g = 7,8 kg</b>. Si ρ est inférieure à 1, l'objet <b>flotte</b> sur l'eau.</p>"
  },
  {
   "type": "curiosity",
   "title": "La fierté d'Archimède",
   "html": "<p>Archimède de Syracuse (IIIe siècle av. J.-C.) démontra que le volume d'une sphère est exactement les <b>2/3</b> du volume du cylindre qui la contient. Il en était si fier qu'il voulut une sphère inscrite dans un cylindre sur sa tombe. Des siècles plus tard, Cicéron retrouva la tombe justement grâce à ce dessin.</p>"
  },
  {
   "type": "curiosity",
   "title": "Pourquoi les bulles sont-elles sphériques ?",
   "html": "<p>Parmi tous les solides de même volume, la <b>sphère</b> est celui qui a la plus petite aire. Le film de savon « tire » pour occuper le moins de surface possible, et devient ainsi une sphère. Pour la même raison, les animaux se roulent en boule quand il fait froid : ils réduisent la surface par laquelle ils perdent de la chaleur.</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz 2",
   "questions": [
    {
     "type": "num",
     "q": "Un pavé droit a pour dimensions 4 cm, 5 cm, 10 cm. Volume ?",
     "answer": 200,
     "tol": 0,
     "unit": "cm³",
     "explain": "V = 4 × 5 × 10 = 200 cm³."
    },
    {
     "type": "mc",
     "q": "Un cylindre et un cône ont la même base et la même hauteur. Le volume du cône est :",
     "options": [
      "égal",
      "la moitié",
      "un tiers",
      "le double"
     ],
     "answer": 2,
     "explain": "V cône = πr²h / 3."
    },
    {
     "type": "tf",
     "q": "Dans un polyèdre on a F + S − A = 2.",
     "answer": true,
     "explain": "C'est la relation d'Euler."
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte mentale : d'où viennent les formules",
   "nodes": [
    {
     "id": "unita",
     "label": "Unité de volume : le petit cube",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "<p>1 cm³ est un cube de 1 cm d'arête ; 1 dm³ = 1 litre.</p>",
     "why": "<p>Mesurer, c'est comparer avec une unité. Pour les longueurs on utilise un segment, pour les aires un petit carré, pour les volumes un petit cube. Le système métrique (France, 1795) a relié le litre au décimètre cube.</p>"
    },
    {
     "id": "par",
     "label": "Pavé droit : V = a·b·c",
     "x": 22,
     "y": 24,
     "color": "#2563eb",
     "html": "<p>Des couches de cubes : a·b cubes par couche, c couches.</p>",
     "why": "<p>C'est un simple comptage : lignes × colonnes × couches. Cela marche aussi avec des mesures non entières, en passant à des cubes de plus en plus petits.</p>"
    },
    {
     "id": "cav",
     "label": "Principe de Cavalieri",
     "x": 78,
     "y": 24,
     "color": "#7c3aed",
     "html": "<p>Mêmes sections à chaque hauteur → même volume.</p>",
     "why": "<p>Cavalieri (1635) voyait le solide comme une pile de feuilles très fines (« indivisibles »). C'est une idée qui annonce le calcul intégral de Newton et Leibniz.</p>"
    },
    {
     "id": "prisma",
     "label": "Prisme et cylindre : V = A_b · h",
     "x": 50,
     "y": 44,
     "color": "#0d9488",
     "html": "<p>Aire de base fois hauteur.</p>",
     "why": "<p>Tout prisme a les mêmes sections qu'un pavé droit de même aire de base : d'après Cavalieri, ils ont le même volume. Le cylindre est comme un prisme avec une infinité de côtés.</p>"
    },
    {
     "id": "piramide",
     "label": "Pyramide et cône : V = A_b · h : 3",
     "x": 22,
     "y": 66,
     "color": "#ea580c",
     "html": "<p>Un tiers du prisme correspondant.</p>",
     "why": "<p>Euclide (Éléments, livre XII) démontra qu'un prisme triangulaire se décompose en 3 pyramides de même volume. Bien avant, les Égyptiens calculaient le volume du tronc de pyramide (papyrus de Moscou, vers 1850 av. J.-C.).</p>"
    },
    {
     "id": "sfera",
     "label": "Sphère : V = 4/3 π r³",
     "x": 78,
     "y": 66,
     "color": "#dc2626",
     "html": "<p>Et aire A = 4πr².</p>",
     "why": "<p>Archimède (IIIe s. av. J.-C.) démontra que la sphère a les 2/3 du volume et de l'aire du cylindre circonscrit. Il en était si fier qu'il voulut la figure sphère-cylindre sur sa tombe.</p>"
    },
    {
     "id": "eulero",
     "label": "Relation d'Euler F + S − A = 2",
     "x": 22,
     "y": 90,
     "color": "#a855f7",
     "html": "<p>Elle est vraie pour tout polyèdre convexe.</p>",
     "why": "<p>Euler la publia en 1758. Si tu ajoutes un sommet en coupant un coin, les faces, les sommets et les arêtes augmentent ensemble de façon que le total reste 2 : c'est pourquoi la règle ne change jamais.</p>"
    },
    {
     "id": "peso",
     "label": "Masse = Volume × masse volumique",
     "x": 78,
     "y": 90,
     "color": "#475569",
     "html": "<p>À partir du volume, on trouve la masse d'un objet.</p>",
     "why": "<p>Chaque matériau a sa densité (eau 1 g/cm³, fer environ 7,8). Archimède comprit que la couronne de Hiéron n'était pas en or pur en mesurant son volume grâce à l'eau déplacée.</p>"
    }
   ],
   "edges": [
    [
     "unita",
     "par",
     "je compte les cubes"
    ],
    [
     "par",
     "prisma",
     "généralise"
    ],
    [
     "cav",
     "prisma",
     "démontre"
    ],
    [
     "prisma",
     "piramide",
     "÷ 3"
    ],
    [
     "cav",
     "sfera",
     "utilisé pour"
    ],
    [
     "prisma",
     "sfera",
     "comparaison avec le cylindre"
    ],
    [
     "prisma",
     "peso",
     "sert à"
    ],
    [
     "piramide",
     "eulero",
     "polyèdres"
    ]
   ]
  }
 ],
 "glossary": [
  {
   "t": "Polyèdre",
   "d": "Solide délimité par des polygones."
  },
  {
   "t": "Solide de révolution",
   "d": "Solide obtenu en faisant tourner une figure plane autour d'une droite (axe)."
  },
  {
   "t": "Arête",
   "d": "Segment où se rencontrent deux faces d'un polyèdre."
  },
  {
   "t": "Apothème",
   "d": "Dans la pyramide, hauteur d'une face latérale ; dans le cône, segment allant du sommet au cercle de base."
  },
  {
   "t": "Patron",
   "d": "La figure plane qu'on obtient en « ouvrant » la surface d'un solide."
  },
  {
   "t": "Volume",
   "d": "Mesure de l'espace occupé par un solide."
  },
  {
   "t": "Masse volumique",
   "d": "Masse d'une unité de volume d'un matériau (ex. g/cm³)."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Aire totale d'un cube d'arête 3 cm ?",
    "answer": 54,
    "tol": 0,
    "unit": "cm²",
    "explain": "6 × 3² = 54 cm²."
   },
   {
    "type": "num",
    "q": "Volume d'un cube d'arête 4 cm ?",
    "answer": 64,
    "tol": 0,
    "unit": "cm³",
    "explain": "4³ = 64 cm³."
   },
   {
    "type": "num",
    "q": "Un prisme a une aire de base de 12 cm² et une hauteur de 10 cm. Volume ?",
    "answer": 120,
    "tol": 0,
    "unit": "cm³",
    "explain": "V = A_b × h = 120 cm³."
   },
   {
    "type": "num",
    "q": "Une pyramide a une aire de base de 36 cm² et une hauteur de 5 cm. Volume ?",
    "answer": 60,
    "tol": 0,
    "unit": "cm³",
    "explain": "V = 36 × 5 / 3 = 60 cm³."
   },
   {
    "type": "num",
    "q": "Cône de rayon 3 cm et de hauteur 4 cm : combien mesure l'apothème ?",
    "answer": 5,
    "tol": 0,
    "unit": "cm",
    "explain": "a = √(9 + 16) = 5 cm."
   },
   {
    "type": "mc",
    "q": "Le volume du cylindre se calcule avec :",
    "options": [
     "2πr·h",
     "πr²·h",
     "4πr²",
     "πr·a"
    ],
    "answer": 1,
    "explain": "Aire de base (πr²) fois hauteur."
   },
   {
    "type": "mc",
    "q": "Combien de faces, d'arêtes et de sommets a un cube ?",
    "options": [
     "6, 12, 8",
     "6, 8, 12",
     "8, 12, 6",
     "4, 6, 4"
    ],
    "answer": 0,
    "explain": "6 faces, 12 arêtes, 8 sommets : 6 + 8 − 12 = 2."
   },
   {
    "type": "tf",
    "q": "1 m³ correspond à 1000 litres.",
    "answer": true,
    "explain": "1 m³ = 1000 dm³ et 1 dm³ = 1 l."
   },
   {
    "type": "num",
    "q": "Cylindre de rayon 2 cm et de hauteur 10 cm. Volume (utilise π = 3,14) ?",
    "answer": 125.6,
    "tol": 0.1,
    "unit": "cm³",
    "explain": "3,14 × 4 × 10 = 125,6 cm³."
   },
   {
    "type": "mc",
    "q": "Un objet flotte sur l'eau si sa masse volumique est :",
    "options": [
     "supérieure à 1",
     "inférieure à 1",
     "égale à 7,8",
     "n'importe laquelle"
    ],
    "answer": 1,
    "explain": "S'il est moins dense que l'eau (ρ < 1 g/cm³), il flotte."
   },
   {
    "type": "text",
    "q": "Comment s'appelle le solide obtenu en faisant tourner un rectangle autour d'un côté ?",
    "answer": [
     "cylindre",
     "le cylindre"
    ],
    "explain": "C'est le cylindre."
   }
  ],
  "gen": [
   [
    "volCube",
    1
   ],
   [
    "volBox",
    1
   ]
  ]
 }
});
