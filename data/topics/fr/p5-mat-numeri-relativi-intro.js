TOPIC('fr', {
 "id": "p5-mat-numeri-relativi-intro",
 "title": "Les nombres relatifs",
 "intro": "En hiver, le thermomètre indique <b>−3 °C</b>, l'ascenseur descend à l'étage <b>−1</b>, la mer Morte se trouve à <b>430 mètres sous</b> le niveau de la mer. Pour tout cela, il faut des nombres « sous zéro » : les <b>nombres négatifs</b>. Avec les positifs et le zéro, ils forment les <b>nombres relatifs</b>.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "Positifs, négatifs et zéro",
   "html": "<p>Jusqu'ici tu as utilisé les <b>nombres naturels</b> (entiers) : 0, 1, 2, 3… Mais parfois il faut indiquer des quantités <b>sous zéro</b>, ou <b>dans la direction opposée</b>.</p>\n<ul>\n<li>Les <b>nombres positifs</b> sont supérieurs à zéro : on les écrit avec le signe <b>+</b> (ou sans signe) : <b>+1, +2, +15</b>.</li>\n<li>Les <b>nombres négatifs</b> sont inférieurs à zéro : on les écrit <b>toujours</b> avec le signe <b>−</b> : <b>−1, −2, −15</b>. On lit « moins un », « moins deux »…</li>\n<li>Le <b>zéro</b> n'est ni positif ni négatif : c'est le <b>point de départ</b> (l'origine).</li>\n</ul>\n<p>Ensemble, ils forment les <b>nombres relatifs</b> (ou <b>entiers relatifs</b>). On les appelle « relatifs » parce que leur valeur est <b>relative</b> à un point de référence : le zéro.</p>"
  },
  {
   "type": "svg",
   "title": "La droite des nombres relatifs",
   "svg": "<svg viewBox=\"0 0 640 220\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"640\" height=\"220\" fill=\"#f8fafc\"/>\n<line x1=\"20\" y1=\"110\" x2=\"620\" y2=\"110\" stroke=\"#1f2937\" stroke-width=\"4\"/>\n<polygon points=\"620,100 638,110 620,120\" fill=\"#1f2937\"/>\n<rect x=\"20\" y=\"102\" width=\"300\" height=\"16\" fill=\"#bfdbfe\" opacity=\"0.6\"/>\n<rect x=\"320\" y=\"102\" width=\"300\" height=\"16\" fill=\"#fecaca\" opacity=\"0.6\"/>\n<g stroke=\"#1f2937\" stroke-width=\"3\">\n<line x1=\"70\" y1=\"98\" x2=\"70\" y2=\"122\"/><line x1=\"120\" y1=\"98\" x2=\"120\" y2=\"122\"/><line x1=\"170\" y1=\"98\" x2=\"170\" y2=\"122\"/><line x1=\"220\" y1=\"98\" x2=\"220\" y2=\"122\"/><line x1=\"270\" y1=\"98\" x2=\"270\" y2=\"122\"/>\n<line x1=\"320\" y1=\"90\" x2=\"320\" y2=\"130\"/>\n<line x1=\"370\" y1=\"98\" x2=\"370\" y2=\"122\"/><line x1=\"420\" y1=\"98\" x2=\"420\" y2=\"122\"/><line x1=\"470\" y1=\"98\" x2=\"470\" y2=\"122\"/><line x1=\"520\" y1=\"98\" x2=\"520\" y2=\"122\"/><line x1=\"570\" y1=\"98\" x2=\"570\" y2=\"122\"/>\n</g>\n<g font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\">\n<text x=\"70\" y=\"152\" fill=\"#1d4ed8\">−5</text><text x=\"120\" y=\"152\" fill=\"#1d4ed8\">−4</text><text x=\"170\" y=\"152\" fill=\"#1d4ed8\">−3</text><text x=\"220\" y=\"152\" fill=\"#1d4ed8\">−2</text><text x=\"270\" y=\"152\" fill=\"#1d4ed8\">−1</text>\n<text x=\"320\" y=\"152\" fill=\"#1f2937\">0</text>\n<text x=\"370\" y=\"152\" fill=\"#b91c1c\">+1</text><text x=\"420\" y=\"152\" fill=\"#b91c1c\">+2</text><text x=\"470\" y=\"152\" fill=\"#b91c1c\">+3</text><text x=\"520\" y=\"152\" fill=\"#b91c1c\">+4</text><text x=\"570\" y=\"152\" fill=\"#b91c1c\">+5</text>\n</g>\n<text x=\"170\" y=\"60\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-weight=\"bold\">← NÉGATIFS</text>\n<text x=\"470\" y=\"60\" font-size=\"18\" text-anchor=\"middle\" fill=\"#b91c1c\" font-weight=\"bold\">POSITIFS →</text>\n<text x=\"320\" y=\"60\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">origine</text>\n<path d=\"M270,90 Q320,40 370,90\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"3\" stroke-dasharray=\"6 4\"/>\n<text x=\"320\" y=\"196\" font-size=\"15\" text-anchor=\"middle\" fill=\"#15803d\">−1 et +1 sont opposés : même distance de 0, de l'autre côté</text>\n</svg>",
   "caption": "À droite du zéro les positifs, à gauche les négatifs. Plus tu vas vers la droite, plus le nombre est grand."
  },
  {
   "type": "text",
   "title": "Comparer les nombres relatifs",
   "html": "<p>Sur la droite, <b>un nombre est supérieur à tous ceux qui sont à sa gauche</b>.</p>\n<ul>\n<li>Tout positif est supérieur à zéro et à tout négatif : <b>+1 &gt; −100</b>.</li>\n<li>Entre deux négatifs, <b>le plus grand est celui qui est le plus proche de zéro</b> : <b>−2 &gt; −7</b>. (Pense à la température : −2 °C est moins froid que −7 °C !)</li>\n</ul>\n<p>La <b>valeur absolue</b> d'un nombre est sa <b>distance à zéro</b>, sans signe. On l'écrit entre deux barres : |−7| = 7, |+7| = 7.</p>\n<p>Deux nombres de même valeur absolue et de signes différents sont <b>opposés</b> : +4 et −4. Leur somme fait <b>zéro</b>.</p>"
  },
  {
   "type": "widget",
   "title": "Explore la droite",
   "widget": "numberLine",
   "options": {
    "min": -10,
    "max": 10,
    "step": 1,
    "marks": [
     -6,
     4
    ]
   },
   "caption": "Fais des sauts sur la droite : vers la droite tu ajoutes, vers la gauche tu retires. De −6 à +4, combien de sauts faut-il ? (10)"
  },
  {
   "type": "example",
   "title": "Exemple pratique : le thermomètre",
   "html": "<p>À 7 heures du matin, à Cortina, le thermomètre indique <b>−4 °C</b>. À midi, la température est <b>montée de 9 degrés</b>. Combien de degrés fait-il ?</p>\n<p>Je pars de −4 et je monte de 9 : −4 + 9 = <b>+5 °C</b>.</p>\n<p>Sur la droite : de −4, je fais 4 sauts pour arriver à 0, puis encore 5 sauts jusqu'à +5. En tout 4 + 5 = 9 sauts. ✅</p>\n<p>La nuit, elle baisse de 7 degrés : +5 − 7 = <b>−2 °C</b>.</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : l'ascenseur du gratte-ciel",
   "html": "<p>Dans un immeuble, le rez-de-chaussée est le <b>0</b>, les garages sont aux étages <b>−1</b> et <b>−2</b>.</p>\n<ul>\n<li>Luca est à l'étage +3 et descend au garage −2 : combien d'étages fait-il ? De +3 à 0, il y a 3 étages, de 0 à −2 encore 2 : en tout <b>5 étages</b>.</li>\n<li>En Italie, comme en Europe, le rez-de-chaussée est le 0 et le « premier étage » est celui du dessus. Aux <b>États-Unis</b>, en revanche, le rez-de-chaussée s'appelle souvent <b>1st floor</b>! Voilà pourquoi il est important de savoir où est le zéro : les nombres sont <b>relatifs</b> au point de référence.</li>\n</ul>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : lire et comparer",
   "questions": [
    {
     "type": "mc",
     "q": "Quel nombre est le plus grand ?",
     "options": [
      "−8",
      "−3",
      "−5"
     ],
     "answer": 1,
     "explain": "Parmi les négatifs, le plus grand est celui qui est le plus proche de zéro : −3."
    },
    {
     "type": "tf",
     "q": "Zéro est un nombre positif.",
     "answer": false,
     "explain": "Zéro n'est ni positif ni négatif."
    },
    {
     "type": "num",
     "q": "Quel est l'opposé de +6 ?",
     "answer": -6,
     "explain": "Même distance à zéro, signe opposé : −6."
    },
    {
     "type": "num",
     "q": "Combien vaut |−12| (valeur absolue) ?",
     "answer": 12,
     "explain": "La valeur absolue est la distance à zéro : 12."
    }
   ]
  },
  {
   "type": "text",
   "title": "Premiers calculs : monter et descendre",
   "html": "<p>On peut déjà faire de simples additions et soustractions en pensant à la <b>droite</b> (ou au thermomètre) :</p>\n<ul>\n<li><b>Ajouter</b> un nombre positif = <b>monter</b> / aller vers la droite : −3 + 5 = +2.</li>\n<li><b>Retirer</b> un nombre positif = <b>descendre</b> / aller vers la gauche : 2 − 6 = −4.</li>\n<li><b>Additionner deux négatifs</b> : c'est comme avoir deux dettes, la dette grandit ! (−3) + (−4) = −7.</li>\n<li>Additionner deux <b>opposés</b> donne toujours zéro : (+5) + (−5) = 0.</li>\n</ul>\n<p><b>Règle pour additionner</b> deux nombres relatifs :</p>\n<ol>\n<li>s'ils ont le <b>même signe</b> : on additionne les valeurs absolues et on garde le signe. (+3)+(+4)=+7 ; (−3)+(−4)=−7.</li>\n<li>s'ils ont des <b>signes différents</b> : on fait la différence des valeurs absolues et on prend le signe du nombre « le plus éloigné de zéro ». (−9)+(+4) = −5 ; (+9)+(−4) = +5.</li>\n</ol>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Le froid des records",
   "html": "<p>La température la plus basse jamais mesurée avec des instruments sur Terre est <b>−89,2 °C</b>, à la station russe <b>Vostok</b> en Antarctique, le 21 juillet 1983. En Italie, on a enregistré des valeurs autour de <b>−50 °C</b> dans des cuvettes des Dolomites comme la Busa Fradusta (Pale di San Martino). Et dans l'espace ? La température la plus basse possible, le <b>zéro absolu</b>, est <b>−273,15 °C</b> : rien ne peut être plus froid !</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Sous le niveau de la mer",
   "html": "<p>Les <b>altitudes</b> aussi sont des nombres relatifs, mesurés par rapport au <b>niveau de la mer</b> (le zéro). L'Everest est à <b>+8 849 m</b>; la rive de la <b>mer Morte</b> est le point le plus bas sur la terre ferme, à environ <b>−430 m</b> (et elle descend chaque année). La <b>fosse des Mariannes</b>, dans l'océan Pacifique, atteint presque <b>−11 000 m</b>! En Italie, certaines zones près de Ferrare et de Venise sont quelques mètres <b>sous</b> le niveau de la mer.</p>"
  },
  {
   "type": "svg",
   "title": "De l'Everest à la fosse des Mariannes",
   "svg": "<svg viewBox=\"0 0 640 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"640\" height=\"160\" fill=\"#e0f2fe\"/>\n<rect y=\"160\" width=\"640\" height=\"160\" fill=\"#1e3a8a\"/>\n<polygon points=\"40,160 160,40 280,160\" fill=\"#78716c\"/>\n<polygon points=\"140,60 160,40 180,60\" fill=\"#ffffff\"/>\n<polygon points=\"380,160 470,300 560,160\" fill=\"#0f172a\"/>\n<line x1=\"0\" y1=\"160\" x2=\"640\" y2=\"160\" stroke=\"#0284c7\" stroke-width=\"4\"/>\n<text x=\"600\" y=\"152\" font-size=\"16\" text-anchor=\"end\" fill=\"#0369a1\" font-weight=\"bold\">0 m niveau de la mer</text>\n<text x=\"160\" y=\"30\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\" font-weight=\"bold\">Everest +8 849 m</text>\n<text x=\"330\" y=\"150\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">Mer Morte −430 m</text>\n<circle cx=\"330\" cy=\"164\" r=\"6\" fill=\"#facc15\"/>\n<text x=\"470\" y=\"200\" font-size=\"15\" text-anchor=\"middle\" fill=\"#ffffff\" font-weight=\"bold\">Fosse des Mariannes</text>\n<text x=\"470\" y=\"222\" font-size=\"15\" text-anchor=\"middle\" fill=\"#ffffff\">environ −11 000 m</text>\n<text x=\"110\" y=\"250\" font-size=\"16\" fill=\"#bfdbfe\">sous zéro → négatifs</text>\n<text x=\"110\" y=\"100\" font-size=\"16\" fill=\"#1f2937\">au-dessus de zéro → positifs</text>\n</svg>",
   "caption": "Les hauteurs au-dessus du niveau de la mer sont positives, les profondeurs en dessous sont négatives (dessin non à l'échelle)."
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li>Nombres <b>relatifs</b> = positifs (+), négatifs (−) et zéro.</li>\n<li>Sur la droite, plus à <b>droite</b> = plus <b>grand</b>. Entre négatifs, le plus grand est celui qui est le plus proche de 0.</li>\n<li><b>Valeur absolue</b> = distance à 0. <b>Opposés</b> : même distance, signe différent ; leur somme donne 0.</li>\n<li>Même signe : j'additionne et je garde le signe. Signe différent : je soustrais et je prends le signe du « plus fort ».</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre les nombres négatifs",
   "intro": "Les nombres négatifs ont été difficiles même pour les grands mathématiciens ! Essaie de les comprendre avec l'argent, les jetons de couleur, les bâtonnets chinois ou l'ascenseur en 3D.",
   "tabs": [
    {
     "label": "💰 Argent et dettes",
     "html": "<p>Pense aux nombres positifs comme à l'<b>argent que tu as</b> et aux négatifs comme aux <b>dettes</b> (de l'argent que tu dois rendre).</p>\n<ul>\n<li>Tu as 10 € et tu en dois 4 à ta sœur : 10 + (−4) = <b>6 €</b> vraiment à toi.</li>\n<li>Tu as 3 € mais tu dois 8 € : 3 + (−8) = <b>−5</b> : tu as encore une dette de 5 €.</li>\n<li>Deux dettes s'additionnent : (−5) + (−2) = <b>−7</b> : tu dois 7 €.</li>\n</ul>\n<p>C'est justement ainsi que le mathématicien indien <b>Brahmagupta</b>, en <b>628 apr. J.-C.</b>, a expliqué les règles des nombres négatifs : « biens » et « dettes » !</p>"
    },
    {
     "label": "🔴🔵 Les jetons",
     "html": "<p>Utilise des <b>jetons rouges</b> (+1) et des <b>jetons bleus</b> (−1). Un rouge et un bleu ensemble s'<b>annulent</b> : ils font zéro (on appelle cela une « paire zéro »).</p>\n<p>Exemple : (+5) + (−3). Tu mets 5 rouges et 3 bleus, tu enlèves les paires zéro : il reste <b>2 rouges</b> → <b>+2</b>.</p>\n<p>Cette méthode est très utilisée dans les écoles de Singapour et des pays anglo-saxons (« zero pairs »).</p>",
     "svg": "<svg viewBox=\"0 0 600 220\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"220\" fill=\"#fafafa\"/>\n<g stroke=\"#1f2937\" stroke-width=\"2\">\n<circle cx=\"60\" cy=\"70\" r=\"24\" fill=\"#ef4444\"/><circle cx=\"120\" cy=\"70\" r=\"24\" fill=\"#ef4444\"/><circle cx=\"180\" cy=\"70\" r=\"24\" fill=\"#ef4444\"/><circle cx=\"240\" cy=\"70\" r=\"24\" fill=\"#ef4444\"/><circle cx=\"300\" cy=\"70\" r=\"24\" fill=\"#ef4444\"/>\n<circle cx=\"60\" cy=\"140\" r=\"24\" fill=\"#3b82f6\"/><circle cx=\"120\" cy=\"140\" r=\"24\" fill=\"#3b82f6\"/><circle cx=\"180\" cy=\"140\" r=\"24\" fill=\"#3b82f6\"/>\n</g>\n<g font-size=\"22\" fill=\"#ffffff\" text-anchor=\"middle\" font-weight=\"bold\">\n<text x=\"60\" y=\"78\">+</text><text x=\"120\" y=\"78\">+</text><text x=\"180\" y=\"78\">+</text><text x=\"240\" y=\"78\">+</text><text x=\"300\" y=\"78\">+</text>\n<text x=\"60\" y=\"148\">−</text><text x=\"120\" y=\"148\">−</text><text x=\"180\" y=\"148\">−</text>\n</g>\n<rect x=\"30\" y=\"40\" width=\"180\" height=\"130\" rx=\"14\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"4\" stroke-dasharray=\"8 6\"/>\n<text x=\"120\" y=\"200\" font-size=\"16\" text-anchor=\"middle\" fill=\"#15803d\">3 paires zéro = 0</text>\n<text x=\"450\" y=\"90\" font-size=\"22\" text-anchor=\"middle\" fill=\"#1f2937\">(+5) + (−3)</text>\n<text x=\"450\" y=\"140\" font-size=\"30\" text-anchor=\"middle\" fill=\"#dc2626\" font-weight=\"bold\">= +2</text>\n</svg>"
    },
    {
     "label": "🇨🇳 Les bâtonnets chinois",
     "html": "<p>Il y a plus de 2000 ans, dans le livre chinois <b>« Les neuf chapitres sur l'art mathématique »</b>, les calculateurs utilisaient des <b>bâtonnets</b> : les <b>rouges</b> pour les nombres positifs et les <b>noirs</b> pour les négatifs. Ils avaient déjà des règles pour les additionner et les soustraire !</p>\n<p>Curieux : aujourd'hui, en comptabilité, on dit encore « être <b>dans le rouge</b> » pour dire « avoir une dette ». En Chine pourtant, les couleurs étaient inversées : le rouge était positif !</p>\n<p>En Europe, en revanche, beaucoup de mathématiciens ont considéré les nombres négatifs comme « absurdes » ou « faux » jusqu'aux <b>XVIe–XVIIe siècles</b>.</p>"
    },
    {
     "label": "🧊 Le gratte-ciel en 3D",
     "html": "<p>Imagine ce modèle de petits cubes comme un <b>gratte-ciel</b> vu de côté : chaque cube est un étage. Le niveau de la rue est le <b>0</b>. Les étages au-dessus de la rue sont positifs, ceux creusés en dessous (garages, caves) sont négatifs.</p>\n<p>Si l'immeuble a 4 étages au-dessus et 2 en dessous, du garage le plus bas (−2) au dernier étage (+4), il y a 4 − (−2) = <b>6 étages</b> de différence. Utilise les curseurs pour construire des tours différentes et compte les étages !</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 6,
      "b": 1
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte des nombres relatifs",
   "nodes": [
    {
     "id": "naturali",
     "label": "Nombres naturels",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "0, 1, 2, 3… les nombres pour compter.",
     "why": "Ce sont les premiers nombres inventés par l'être humain, pour compter des objets. Mais avec eux on ne peut pas toujours soustraire : 3 − 5 n'a pas de résultat parmi les naturels !"
    },
    {
     "id": "relativi",
     "label": "Nombres relatifs",
     "x": 50,
     "y": 28,
     "color": "#2563eb",
     "html": "Positifs, négatifs et zéro : …, −2, −1, 0, +1, +2, …",
     "why": "Ils ont été « inventés » pour pouvoir toujours faire la soustraction et pour mesurer des grandeurs qui ont deux sens (dessus/dessous, gain/perte, chaud/froid)."
    },
    {
     "id": "zero",
     "label": "Le zéro",
     "x": 18,
     "y": 28,
     "color": "#1f2937",
     "html": "Le point de référence : ni positif ni négatif.",
     "why": "Le zéro comme véritable nombre a été défini en Inde : <b>Brahmagupta</b> (628 apr. J.-C.) a écrit les règles pour calculer avec zéro et les négatifs. Il est arrivé en Europe avec les chiffres indo-arabes, grâce aussi à Fibonacci (1202)."
    },
    {
     "id": "positivi",
     "label": "Positifs",
     "x": 82,
     "y": 50,
     "color": "#dc2626",
     "html": "Supérieurs à zéro : +1, +2, …",
     "why": "Ils correspondent aux nombres naturels (sauf 0) : c'est pourquoi le signe + peut aussi être omis."
    },
    {
     "id": "negativi",
     "label": "Négatifs",
     "x": 18,
     "y": 50,
     "color": "#3b82f6",
     "html": "Inférieurs à zéro : −1, −2, …",
     "why": "Utilisés en Chine il y a plus de 2000 ans (bâtonnets noirs) et en Inde comme « dettes ». En Europe, ils n'ont été pleinement acceptés qu'entre le XVIe et le XVIIe siècle."
    },
    {
     "id": "retta",
     "label": "Droite des nombres",
     "x": 50,
     "y": 56,
     "color": "#16a34a",
     "html": "Ligne sur laquelle chaque nombre a sa place : à droite les positifs, à gauche les négatifs.",
     "why": "Placer les nombres sur une ligne, avec le zéro au centre, s'est diffusé avec la géométrie analytique de <b>Descartes</b> (1637) : ainsi les négatifs deviennent de simples « points de l'autre côté »."
    },
    {
     "id": "assoluto",
     "label": "Valeur absolue",
     "x": 25,
     "y": 80,
     "color": "#a855f7",
     "html": "La distance d'un nombre à zéro : |−5| = 5.",
     "why": "Une distance ne peut pas être négative : c'est pourquoi la valeur absolue n'a pas de signe. Le symbole |x| a été introduit par le mathématicien allemand <b>Karl Weierstrass</b> en 1841."
    },
    {
     "id": "opposti",
     "label": "Nombres opposés",
     "x": 55,
     "y": 80,
     "color": "#f97316",
     "html": "Même valeur absolue, signe différent : +3 et −3. Leur somme donne 0.",
     "why": "Ils sont symétriques par rapport à zéro sur la droite, comme un objet et son image dans un miroir."
    },
    {
     "id": "usi",
     "label": "Usages dans la vie",
     "x": 85,
     "y": 80,
     "color": "#14b8a6",
     "html": "Températures, altitudes, étages, comptes en banque, années av./apr. J.-C., scores.",
     "why": "Chaque fois qu'une grandeur a un point de référence et deux directions possibles, les nombres relatifs sont l'outil parfait."
    }
   ],
   "edges": [
    [
     "naturali",
     "relativi",
     "s'étendent en"
    ],
    [
     "relativi",
     "zero",
     "point de référence"
    ],
    [
     "relativi",
     "positivi",
     "comprennent les"
    ],
    [
     "relativi",
     "negativi",
     "comprennent les"
    ],
    [
     "relativi",
     "retta",
     "se représentent sur la"
    ],
    [
     "retta",
     "assoluto",
     "distance à 0"
    ],
    [
     "retta",
     "opposti",
     "symétriques"
    ],
    [
     "positivi",
     "usi",
     "servent pour"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : additionner les relatifs",
   "questions": [
    {
     "type": "num",
     "q": "(−6) + (+10) = ?",
     "answer": 4,
     "explain": "Signes différents : 10 − 6 = 4, le positif l'emporte : +4."
    },
    {
     "type": "num",
     "q": "(−4) + (−5) = ?",
     "answer": -9,
     "explain": "Même signe : 4 + 5 = 9, signe moins : −9."
    },
    {
     "type": "num",
     "q": "La température est −2 °C et elle baisse de 3 degrés. Combien le thermomètre indique-t-il ?",
     "answer": -5,
     "unit": "°C",
     "explain": "−2 − 3 = −5 °C."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Nombres relatifs",
   "d": "Ensemble des nombres positifs, des nombres négatifs et du zéro."
  },
  {
   "t": "Nombre positif",
   "d": "Nombre supérieur à zéro, avec le signe + (ex. +7)."
  },
  {
   "t": "Nombre négatif",
   "d": "Nombre inférieur à zéro, toujours avec le signe − (ex. −7)."
  },
  {
   "t": "Origine",
   "d": "Le point de la droite qui correspond au zéro."
  },
  {
   "t": "Valeur absolue",
   "d": "Distance d'un nombre à zéro, sans signe : |−7| = 7."
  },
  {
   "t": "Nombres opposés",
   "d": "Nombres de même valeur absolue et de signe différent (+4 et −4)."
  },
  {
   "t": "Niveau de la mer",
   "d": "Le zéro à partir duquel on mesure les altitudes (+) et les profondeurs (−)."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Quel nombre est le plus petit ?",
    "options": [
     "−1",
     "0",
     "−10"
    ],
    "answer": 2,
    "explain": "−10 est le plus éloigné de zéro vers la gauche : c'est le plus petit."
   },
   {
    "type": "tf",
    "q": "−5 est supérieur à −2.",
    "answer": false,
    "explain": "−2 est plus proche de zéro : −2 > −5."
   },
   {
    "type": "order",
    "q": "Range du plus petit au plus grand.",
    "items": [
     "−7",
     "−3",
     "0",
     "+2",
     "+5"
    ],
    "explain": "Sur la droite, de gauche à droite : −7, −3, 0, +2, +5."
   },
   {
    "type": "num",
    "q": "Le thermomètre indique +3 °C, puis la température baisse de 8 degrés. Quelle température fait-il ?",
    "answer": -5,
    "unit": "°C",
    "explain": "3 − 8 = −5 °C."
   },
   {
    "type": "num",
    "q": "Tu es à l'étage −2 et tu montes de 5 étages. À quel étage arrives-tu ?",
    "answer": 3,
    "explain": "−2 + 5 = +3."
   },
   {
    "type": "num",
    "q": "Combien vaut |−15| ?",
    "answer": 15,
    "explain": "La valeur absolue est la distance à zéro : 15."
   },
   {
    "type": "mc",
    "q": "Quel est l'opposé de −9 ?",
    "options": [
     "+9",
     "−9",
     "0"
    ],
    "answer": 0,
    "explain": "L'opposé a la même valeur absolue et le signe contraire : +9."
   },
   {
    "type": "num",
    "q": "(+7) + (−7) = ?",
    "answer": 0,
    "explain": "La somme de deux opposés est zéro."
   },
   {
    "type": "mc",
    "q": "Quel mathématicien indien a écrit en 628 apr. J.-C. les règles pour le zéro et les négatifs ?",
    "options": [
     "Pythagore",
     "Brahmagupta",
     "Archimède"
    ],
    "answer": 1,
    "explain": "Brahmagupta, dans le Brahmasphutasiddhanta."
   },
   {
    "type": "tf",
    "q": "Zéro est un nombre négatif.",
    "answer": false,
    "explain": "Zéro n'est ni positif ni négatif."
   },
   {
    "type": "num",
    "q": "Le jour il fait +6 °C, la nuit −4 °C. De combien de degrés la température a-t-elle baissé ?",
    "answer": 10,
    "unit": "°C",
    "explain": "De +6 à 0, il y a 6 degrés, de 0 à −4 encore 4 : 10 degrés."
   }
  ],
  "gen": [
   [
    "intAdd",
    3
   ]
  ]
 }
});
