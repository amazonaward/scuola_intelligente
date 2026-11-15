QBANK("fr", "p4-geo-settori-economici", {
  "f": [
    {
      "type": "mc",
      "q": "Laquelle de ces choses est un bien, c'est-à-dire qu'on peut toucher ?",
      "options": [
        "Une leçon",
        "Une chaise",
        "Une coupe de cheveux"
      ],
      "answer": 1,
      "explain": "La chaise est un objet : c'est un bien. Une leçon et une coupe de cheveux sont des services."
    },
    {
      "type": "tf",
      "q": "Une coupe de cheveux est un service.",
      "answer": true,
      "explain": "Vrai : c'est une activité utile aux autres qui n'est pas un objet."
    },
    {
      "type": "mc",
      "q": "Dans quel secteur travaille une institutrice ?",
      "options": [
        "Primaire",
        "Secondaire",
        "Tertiaire"
      ],
      "answer": 2,
      "explain": "L'école offre un service : c'est le secteur tertiaire."
    },
    {
      "type": "text",
      "q": "Comment s'appelle le secteur qui transforme les matières premières en produits finis ?",
      "answer": [
        "secondaire",
        "le secondaire",
        "secteur secondaire",
        "le secteur secondaire"
      ],
      "explain": "C'est le secteur secondaire : industrie, artisanat, bâtiment et production d'énergie."
    },
    {
      "type": "num",
      "q": "Il y a environ combien d'années l'homme a-t-il commencé à cultiver la terre et à élever des animaux ?",
      "answer": 10000,
      "unit": "ans",
      "tol": 1000,
      "explain": "Il y a environ 10 000 ans, au Néolithique : le secteur primaire est le plus ancien."
    }
  ],
  "m": [
    {
      "type": "mc",
      "q": "Un menuisier fabrique une table à la main dans son atelier. Dans quel secteur travaille-t-il ?",
      "options": [
        "Primaire",
        "Secondaire",
        "Tertiaire"
      ],
      "answer": 1,
      "explain": "Il transforme le bois en produit fini : l'artisanat fait partie du secteur secondaire."
    },
    {
      "type": "num",
      "q": "Dans une classe de 20 enfants, les 40 parents travaillent ainsi : 2 dans le primaire, 10 dans le secondaire, 28 dans le tertiaire. Combien de parents ne travaillent PAS dans le tertiaire ?",
      "answer": 12,
      "unit": "parents",
      "explain": "2 + 10 = 12 parents, ou 40 − 28 = 12."
    },
    {
      "type": "tf",
      "q": "Une banque fait partie du secteur secondaire.",
      "answer": false,
      "explain": "Faux : la banque offre des services financiers, elle appartient donc au secteur tertiaire."
    },
    {
      "type": "order",
      "q": "Mets dans l'ordre le voyage d'un T-shirt en coton.",
      "items": [
        "On cultive et on récolte le coton",
        "Le coton devient fil puis tissu",
        "Le tissu est coupé et cousu",
        "Un magasin vend le T-shirt"
      ],
      "explain": "D'abord le primaire (coton), puis le secondaire (fil, tissu, couture) et enfin le tertiaire (magasin)."
    },
    {
      "type": "text",
      "q": "Le Parmigiano Reggiano ne peut porter ce nom que s'il est produit dans une certaine zone. Comment s'appelle ce label de trois lettres (en italien) ?",
      "answer": [
        "dop",
        "d.o.p.",
        "aop"
      ],
      "explain": "Il s'appelle DOP, Denominazione di Origine Protetta (Appellation d'origine protégée)."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "En 1861, environ 70 personnes sur 100 travaillaient dans l'agriculture. Aujourd'hui, elles sont environ 4 sur 100. De combien de personnes sur 100 le nombre a-t-il baissé ?",
      "answer": 66,
      "unit": "sur 100",
      "explain": "70 − 4 = 66 personnes sur 100 en moins. Les machines agricoles font le travail de nombreux paysans."
    },
    {
      "type": "mc",
      "q": "Une entreprise : A cultive le blé, B fabrique des biscuits en usine, C apporte les biscuits aux magasins en camion, D les vend au supermarché. Quels deux métiers relèvent du tertiaire ?",
      "options": [
        "A et B",
        "C et D",
        "B et C"
      ],
      "answer": 1,
      "explain": "Le transport (C) et la vente (D) sont des services. A est primaire et B est secondaire."
    },
    {
      "type": "mc",
      "q": "Pourquoi le tourisme d'hiver en montagne (ski, hôtels) appartient-il au tertiaire ?",
      "options": [
        "Parce qu'il offre des services aux personnes et ne tire pas de ressources de la nature",
        "Parce qu'il y a de la neige",
        "Parce qu'on ne travaille que l'hiver"
      ],
      "answer": 0,
      "explain": "Le tertiaire offre des services. Le primaire tire des ressources de la nature (pâturages, bois) et le secondaire les transforme."
    },
    {
      "type": "tf",
      "q": "Avec de plus en plus de robots et de machines dans les champs et les usines, il faut de plus en plus d'ouvriers et de paysans.",
      "answer": false,
      "explain": "Faux : les machines font le travail de nombreuses personnes, il en faut donc moins. On a en revanche besoin de plus de techniciens et de programmeurs."
    },
    {
      "type": "order",
      "q": "Mets ces moments de l'histoire du travail dans l'ordre, du plus ancien au plus récent.",
      "items": [
        "L'agriculture naît au Néolithique",
        "La révolution industrielle avec la machine à vapeur",
        "L'Italie devient un État unifié (1861)",
        "Le boom économique (1958–1963)"
      ],
      "explain": "Agriculture il y a environ 10 000 ans, révolution industrielle au XVIIIe siècle, Unité 1861, boom 1958–1963."
    }
  ]
});
