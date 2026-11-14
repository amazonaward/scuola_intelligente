BODY_TEXT({
  lang: "fr",
  title: "Le corps humain",
  intro: "<p>Ton corps est une équipe d'<b>organes</b> qui travaillent ensemble, jour et nuit. Fais tourner le modèle, écarte les pièces, touche un organe et découvre à quoi il sert, comment il fonctionne et avec qui il collabore.</p>",
  systems: {
    pelle: { name: "La peau", intro: "<p>La peau est le plus grand organe du corps : elle t'enveloppe comme un vêtement sur mesure. Elle protège des chocs, des microbes et du soleil, règle la température grâce à la sueur et te fait sentir le chaud, le froid, la pression et la douleur grâce à des millions de petits capteurs.</p>" },
    scheletro: { name: "Le squelette", intro: "<p>Le squelette est la charpente du corps : environ 206 os chez l'adulte, reliés par des articulations, des ligaments et des tendons. Il soutient le corps, protège les organes fragiles, permet les mouvements avec les muscles et, dans la moelle osseuse, fabrique les cellules du sang.</p>" },
    muscoli: { name: "Les muscles", intro: "<p>Le corps compte plus de 600 muscles. Ils fonctionnent en se raccourcissant (se contractant) puis en se relâchant, et tirent sur les os grâce aux tendons. Certains, nous les commandons ; d'autres, comme ceux de l'estomac, travaillent tout seuls. Ils produisent aussi de la chaleur.</p>" },
    nervoso: { name: "Le système nerveux", intro: "<p>C'est le réseau de commande et de communication du corps. Le cerveau et la moelle épinière forment le système central ; les nerfs sont les « câbles » qui portent les informations du corps au cerveau et les ordres du cerveau aux muscles et aux organes. Les signaux voyagent comme de petites impulsions électriques.</p>" },
    sensi: { name: "Les sens", intro: "<p>La vue, l'ouïe, l'odorat et le goût (et le toucher, avec la peau) sont les fenêtres du corps sur le monde. Chaque organe des sens transforme la lumière, les sons, les odeurs ou les saveurs en signaux nerveux, que le cerveau interprète.</p>" },
    circolatorio: { name: "L'appareil circulatoire", intro: "<p>Le cœur est la pompe qui pousse le sang dans un réseau de tuyaux, les vaisseaux sanguins. Les artères emmènent le sang loin du cœur, les veines le ramènent. Le sang apporte l'oxygène et les nutriments à chaque cellule et emporte les déchets : c'est pour cela qu'il ne s'arrête jamais.</p>" },
    respiratorio: { name: "L'appareil respiratoire", intro: "<p>Il sert à faire entrer l'oxygène et à faire sortir le dioxyde de carbone. L'air passe par le nez, la trachée et les bronches jusqu'aux poumons, où l'oxygène entre dans le sang. Le diaphragme, un muscle situé sous les poumons, fait circuler l'air comme un soufflet.</p>" },
    digerente: { name: "L'appareil digestif", intro: "<p>Il transforme les aliments en substances assez petites pour passer dans le sang. Les aliments parcourent un long tube d'environ 8 à 9 mètres : bouche, œsophage, estomac, intestin grêle et gros intestin. Le foie, la vésicule biliaire et le pancréas aident avec des sucs spéciaux.</p>" },
    urinario: { name: "L'appareil urinaire", intro: "<p>C'est le système de filtrage du corps. Les reins nettoient le sang, éliminent les déchets et l'excès d'eau et les transforment en urine, qui descend dans la vessie jusqu'au moment d'aller aux toilettes.</p>" },
    endocrino: { name: "Le système endocrinien", intro: "<p>Les glandes endocrines fabriquent les hormones, des messagers chimiques qui voyagent dans le sang et disent aux organes quoi faire : grandir, utiliser les sucres, réagir à une frayeur. Elles agissent plus lentement que les nerfs, mais leurs effets durent plus longtemps.</p>" },
    immunitario: { name: "Le système immunitaire", intro: "<p>C'est l'armée de défense du corps. Les globules blancs et d'autres cellules reconnaissent les virus, les bactéries et les autres intrus et les éliminent. La rate, le thymus et les ganglions lymphatiques sont les bases où ces cellules se forment, s'entraînent et montent la garde.</p>" }
  },
  organs: {
    pelle: {
      name: "La peau", label: "Peau",
      what: "<p>La peau couvre tout le corps comme une combinaison. Elle protège des chocs, de la saleté et des microbes, te garde au frais quand tu transpires et te fait sentir le chaud, le froid et les caresses.</p>",
      how: "<p>Elle est formée de trois couches : l'<b>épiderme</b> (fin et imperméable, il se renouvelle sans cesse), le <b>derme</b> (avec des vaisseaux, des nerfs, des glandes sudoripares et les racines des poils) et l'<b>hypoderme</b> (de la graisse qui isole et amortit). Chez l'adulte, elle mesure environ 1,8 m² et pèse 3 à 4 kg. Les cellules de l'épiderme se renouvellent toutes les 4 semaines environ. Le pigment appelé <b>mélanine</b> filtre les rayons UV du soleil. Pour refroidir le corps, les vaisseaux se dilatent et la sueur s'évapore ; par temps froid, les vaisseaux se resserrent.</p>",
      links: [
        { to: "nervi", text: "Les terminaisons nerveuses de la peau envoient au cerveau, par les nerfs, les signaux de toucher, de température et de douleur." },
        { to: "vene", text: "Le sang qui circule dans les vaisseaux proches de la surface évacue l'excès de chaleur et aide à régler la température." },
        { to: "muscoli", text: "Sous la peau, les muscles produisent de la chaleur ; quand tu as froid, les petits muscles des poils te donnent la chair de poule." }
      ],
      problems: [
        { title: "Coup de soleil", causes: "trop de soleil sans protection, surtout aux heures du milieu de la journée.", effects: "la peau rougit, brûle puis pèle ; à long terme, les rayons UV peuvent abîmer les cellules.", prevent: "crème solaire, casquette, t-shirt, ombre aux heures chaudes, boire de l'eau." },
        { title: "Eczéma et peau sèche", causes: "peau sensible, savon agressif, air sec, parfois allergies.", effects: "démangeaisons, rougeurs et peau gercée, qui protège moins bien.", prevent: "se laver avec des produits doux, hydrater la peau ; si ça démange encore, parles-en à un adulte ou au médecin." }
      ],
      fact: "En une journée, nous perdons des millions de cellules de peau : une grande partie de la poussière de la maison en est faite !"
    },
    cranio: {
      name: "Le crâne", label: "Crâne",
      what: "<p>Le crâne est la boîte en os qui protège le cerveau. Il donne aussi sa forme au visage et abrite les yeux, les oreilles et le nez.</p>",
      how: "<p>Il est formé de 22 os : 8 composent la boîte crânienne et 14 le visage. Presque tous sont unis par des joints rigides appelés <b>sutures</b> ; la seule articulation mobile est la <b>mandibule</b>, qui permet de mâcher et de parler. Chez les nouveau-nés, les os ne sont pas encore soudés (les « fontanelles »), si bien que la tête peut passer pendant la naissance et que le cerveau a de la place pour grandir. Un grand trou à la base, le <b>trou occipital</b>, laisse passer la moelle épinière.</p>",
      links: [
        { to: "cervello", text: "Il renferme et protège le cerveau comme un casque naturel." },
        { to: "colonna", text: "Il repose sur la colonne vertébrale, qui le soutient et le fait bouger." },
        { to: "occhi", text: "Les orbites sont deux cavités du crâne où les yeux sont en sécurité." },
        { to: "midollo", text: "Par le trou à la base du crâne, le cerveau se relie à la moelle épinière." }
      ],
      problems: [
        { title: "Coups à la tête", causes: "chutes ou chocs à vélo, en sport, en jouant.", effects: "le cerveau peut recevoir une secousse, avec mal de tête ou vertiges.", prevent: "casque à vélo, en trottinette et à ski ; si tu te cognes la tête, dis-le tout de suite à un adulte et fais-toi examiner." }
      ],
      fact: "Les os du crâne de l'adulte sont emboîtés comme un puzzle."
    },
    colonna: {
      name: "La colonne vertébrale", label: "Colonne",
      what: "<p>C'est l'axe du corps : elle te tient debout, te permet de te pencher et de te tourner, et protège la moelle épinière qui passe à l'intérieur.</p>",
      how: "<p>Elle est faite de 33 à 34 <b>vertèbres</b> empilées : 7 cervicales, 12 thoraciques, 5 lombaires, puis le sacrum et le coccyx (vertèbres soudées). Entre deux vertèbres se trouvent les <b>disques intervertébraux</b>, des coussinets élastiques qui amortissent. Vue de côté, elle a quatre courbures en « S » qui la rendent souple et capable d'absorber les chocs. Les muscles du dos la maintiennent droite. Dans le canal qu'elle renferme passe la moelle épinière.</p>",
      links: [
        { to: "midollo", text: "Les vertèbres forment un canal qui protège la moelle épinière." },
        { to: "costole", text: "Les vertèbres thoraciques se relient aux côtes, formant ainsi la cage thoracique." },
        { to: "bacino", text: "En bas, elle s'appuie sur le bassin, qui supporte le poids du corps." },
        { to: "muscoli", text: "Les muscles du dos la maintiennent droite et la font bouger." }
      ],
      problems: [
        { title: "Mal de dos et mauvaise posture", causes: "rester trop longtemps assis ou voûté, cartables lourds portés sur une épaule, peu de mouvement.", effects: "muscles tendus et douleurs dans le dos ; avec le temps, on peut perdre la bonne posture.", prevent: "sac sur les deux épaules et pas trop chargé, pauses après les devoirs, sport et jeux actifs ; si la douleur dure, parles-en à un adulte ou au médecin." }
      ],
      fact: "Le matin, tu es un peu plus grand que le soir : pendant la nuit, les disques entre les vertèbres « se regonflent »."
    },
    costole: {
      name: "Les côtes", label: "Côtes",
      what: "<p>Les côtes forment une cage qui protège le cœur et les poumons. Elles bougent un tout petit peu quand tu respires.</p>",
      how: "<p>Ce sont 12 paires d'os courbes, attachés derrière aux vertèbres thoraciques. Les 7 premières paires se relient devant au <b>sternum</b> par du cartilage ; les 5 autres sont reliées de façon indirecte ou libres. Cette structure, la <b>cage thoracique</b>, est assez rigide pour protéger et assez souple pour s'élargir : pendant l'inspiration, les muscles intercostaux soulèvent les côtes et le thorax s'élargit, ce qui fait entrer l'air. Elles contiennent aussi de la moelle rouge qui fabrique des cellules du sang.</p>",
      links: [
        { to: "polmoni", text: "Elles forment une cage autour des poumons et bougent à chaque respiration." },
        { to: "cuore", text: "Elles protègent le cœur des chocs." },
        { to: "colonna", text: "Derrière, elles s'accrochent aux vertèbres thoraciques." },
        { to: "diaframma", text: "Avec le diaphragme, elles changent le volume du thorax et font entrer et sortir l'air." }
      ],
      problems: [
        { title: "Côtes contusionnées ou fêlées", causes: "chutes ou gros coups sur le thorax.", effects: "douleur surtout quand on respire profondément ou quand on rit.", prevent: "protections dans les sports de contact et prudence dans les jeux ; si tu as mal au thorax après un coup, dis-le à un adulte." }
      ],
      fact: "Les côtes se réparent toutes seules : ce sont parmi les os qui guérissent le mieux."
    },
    bacino: {
      name: "Le bassin", label: "Bassin",
      what: "<p>Le bassin est l'os en forme de cuvette au-dessus des jambes. Il supporte le poids du corps et protège les organes du bas du ventre.</p>",
      how: "<p>Le bassin est formé des deux <b>os coxaux</b> (chacun né de l'union de l'ilion, de l'ischion et du pubis), réunis entre eux devant et au <b>sacrum</b> derrière. Il transmet le poids du tronc aux jambes par les articulations de la hanche, où la tête du fémur tourne dans une cavité appelée acétabulum. Il protège la vessie et l'intestin. C'est un os robuste, qui grandit jusqu'à la fin de l'adolescence.</p>",
      links: [
        { to: "colonna", text: "Le sacrum, au bas de la colonne, est soudé au bassin." },
        { to: "ossa_gambe", text: "Le fémur s'emboîte dans l'os coxal et forme l'articulation qui te fait marcher." },
        { to: "vescica", text: "Il forme une cuvette protectrice pour la vessie et une partie de l'intestin." }
      ],
      problems: [
        { title: "Contusions à la hanche", causes: "chutes sur le côté, par exemple en patins ou sur la neige.", effects: "douleur et bleu, parfois difficulté à marcher pendant quelques jours.", prevent: "protections quand tu patines ou skies, chaussures adaptées ; si tu n'arrives pas à poser la jambe, dis-le à un adulte." }
      ],
      fact: "Le bassin est le centre de gravité du corps, là où ton poids s'équilibre."
    },
    ossa_braccia: {
      name: "Les os des bras", label: "Os des bras",
      what: "<p>L'épaule, le bras, l'avant-bras et la main sont soutenus par des os qui te permettent d'attraper, de lancer et d'écrire.</p>",
      how: "<p>Chaque bras a : l'<b>humérus</b> (bras), le <b>radius</b> et le <b>cubitus</b> (avant-bras), 8 os du carpe, 5 du métacarpe et 14 phalanges, soit 30 os par membre, plus l'omoplate et la clavicule. L'épaule est l'articulation la plus mobile du corps, mais aussi l'une des plus sujettes aux luxations. Le radius et le cubitus peuvent se croiser et permettent de tourner la paume de la main. Le pouce « opposable » permet de saisir avec précision.</p>",
      links: [
        { to: "muscoli", text: "Les muscles tirent sur les os par les tendons : le biceps plie le coude et le triceps le tend." },
        { to: "nervi", text: "Les nerfs du bras donnent les ordres et rapportent les sensations des doigts." },
        { to: "costole", text: "La clavicule et l'omoplate relient le bras au thorax." }
      ],
      problems: [
        { title: "Fractures", causes: "chutes les mains en avant, jeux et sports.", effects: "douleur, gonflement et difficulté à bouger le bras ; avec un plâtre, l'os guérit en quelques semaines.", prevent: "protections dans le sport, calcium et vitamine D dans l'alimentation, jeux en plein air ; si tu tombes et que tu as très mal, dis-le tout de suite à un adulte." }
      ],
      fact: "Dans les mains et les poignets se trouve plus d'un quart de tous les os du corps."
    },
    ossa_gambe: {
      name: "Les os des jambes", label: "Os des jambes",
      what: "<p>Les os des jambes sont longs et robustes : ils soutiennent le corps et te font marcher, courir et sauter.</p>",
      how: "<p>Chaque jambe a le <b>fémur</b> (l'os le plus long et le plus fort du corps, environ un quart de la taille), la <b>rotule</b>, le <b>tibia</b> et le <b>péroné</b>, puis 7 os du tarse, 5 du métatarse et 14 phalanges du pied. Le genou est une grande articulation renforcée par des ligaments. Le pied a une voûte qui fait office de ressort et absorbe les chocs. Les os longs grandissent à partir des <b>cartilages de croissance</b>, qui se ferment à la fin de l'adolescence.</p>",
      links: [
        { to: "bacino", text: "Le fémur tourne dans la cavité de l'os coxal." },
        { to: "muscoli", text: "Le quadriceps et les mollets tirent sur les os des jambes et permettent de marcher et de courir." },
        { to: "cervelletto", text: "Le cervelet coordonne les mouvements et l'équilibre quand tu marches et que tu sautes." }
      ],
      problems: [
        { title: "Entorses et fractures", causes: "sauts, glissades, chaussures peu adaptées.", effects: "douleur et gonflement à la cheville ou au genou, difficulté à marcher.", prevent: "échauffement avant le sport, chaussures adaptées et entraînement progressif ; si tu as mal en posant le pied, parles-en à un adulte ou au médecin." }
      ],
      fact: "Le fémur peut supporter un poids bien supérieur au tien, et il est plus résistant que le béton à poids égal."
    },
    muscoli: {
      name: "Les muscles", label: "Muscles",
      what: "<p>Les muscles te font bouger : courir, sauter, sourire, respirer. Ils sont faits de fibres qui se raccourcissent puis se relâchent.</p>",
      how: "<p>Le corps compte plus de 600 muscles. Les <b>muscles squelettiques</b> sont volontaires et s'attachent aux os par les <b>tendons</b> ; les <b>muscles lisses</b> (estomac, intestin, vaisseaux) travaillent tout seuls ; le <b>muscle cardiaque</b> se trouve seulement dans le cœur. Un muscle ne peut que tirer, c'est pourquoi il travaille par paires : par exemple le biceps et le triceps (agoniste et antagoniste). Pour se contracter, il utilise de l'énergie obtenue à partir de sucres et d'oxygène ; une partie devient de la chaleur, ce qui te réchauffe quand tu bouges. S'entraîner rend les fibres plus fortes.</p>",
      links: [
        { to: "nervi", text: "Les nerfs envoient aux muscles l'ordre de se contracter." },
        { to: "ossa_braccia", text: "Avec les tendons, ils tirent sur les os et font ainsi bouger des articulations comme le coude." },
        { to: "cuore", text: "Le cœur est un muscle spécial qui travaille sans s'arrêter." },
        { to: "vene", text: "Quand les muscles se contractent, ils écrasent les veines et aident le sang à revenir au cœur." }
      ],
      problems: [
        { title: "Crampes et déchirures", causes: "effort sans échauffement, pas assez d'eau, fatigue.", effects: "le muscle se contracte de façon douloureuse ou se blesse ; il faut du repos.", prevent: "échauffement et étirements, boire de l'eau, augmenter les efforts petit à petit." }
      ],
      fact: "Le muscle le plus fort par rapport à sa taille est le masséter, qui fait bouger la mâchoire."
    },
    diaframma: {
      name: "Le diaphragme", label: "Diaphragme",
      what: "<p>C'est un muscle en forme de coupole sous les poumons. Il monte et descend, et c'est ainsi qu'il fait entrer et sortir l'air quand tu respires.</p>",
      how: "<p>Le diaphragme sépare le thorax de l'abdomen. Quand tu inspires, il se <b>contracte</b> et s'abaisse, le thorax s'élargit et la pression dans les poumons diminue : l'air entre. Quand tu expires, il se <b>relâche</b> et remonte, et l'air sort. Il travaille de façon automatique, environ 12 à 20 fois par minute au repos, mais nous pouvons le contrôler (pour chanter ou retenir notre souffle). Le hoquet est une contraction brusque et involontaire du diaphragme, interrompue par la fermeture de la glotte.</p>",
      links: [
        { to: "polmoni", text: "Quand il s'abaisse, les poumons se remplissent d'air ; quand il remonte, il le repousse dehors." },
        { to: "costole", text: "Il travaille avec les muscles entre les côtes pour élargir le thorax." },
        { to: "stomaco", text: "Sous lui, dans l'abdomen, se trouvent l'estomac et le foie ; il bouge au-dessus d'eux à chaque respiration." },
        { to: "nervi", text: "Le nerf phrénique lui envoie les ordres de se contracter." }
      ],
      problems: [
        { title: "Hoquet", causes: "manger trop vite, boissons gazeuses, fous rires.", effects: "le diaphragme se contracte par saccades et fait le « hic » typique ; en général, ça passe tout seul.", prevent: "manger lentement et bien mâcher ; si ça ne passe pas pendant des heures, parles-en à un adulte." }
      ],
      fact: "Le diaphragme travaille toute la vie sans jamais se reposer, même quand tu dors."
    },
    cervello: {
      name: "Le cerveau", label: "Cerveau",
      what: "<p>C'est le centre de commande du corps. Il pense, se souvient, apprend, ressent les émotions et dirige tout ce que tu fais, même quand tu dors.</p>",
      how: "<p>Il pèse environ 1,3 à 1,4 kg et contient environ 86 milliards de cellules nerveuses, les <b>neurones</b>, reliées par des milliers de milliards de connexions (synapses). La plus grande partie, le <b>cortex</b>, est divisée en deux hémisphères et en lobes : elle traite la vue, l'ouïe, le mouvement, le langage et la pensée. À l'intérieur, des zones règlent les émotions, la mémoire, le sommeil, la faim et la soif. Il utilise environ 20 % de l'énergie du corps alors qu'il ne pèse que 2 %. Les neurones communiquent par des signaux électriques et des substances chimiques, les neurotransmetteurs.</p>",
      links: [
        { to: "midollo", text: "Il envoie et reçoit les signaux du corps par la moelle épinière." },
        { to: "cervelletto", text: "Le cervelet, sous lui, rend les mouvements précis et coordonnés." },
        { to: "occhi", text: "Le lobe postérieur transforme les signaux des yeux en images que tu vois." },
        { to: "cranio", text: "Le crâne le protège comme un casque." },
        { to: "tiroide", text: "Avec l'hypophyse, une petite glande à sa base, il contrôle de nombreuses glandes endocrines." }
      ],
      problems: [
        { title: "Mal de tête", causes: "fatigue, manque d'eau, tension, trop de temps devant les écrans.", effects: "douleur à la tête et difficulté à se concentrer.", prevent: "dormir suffisamment, boire de l'eau, faire des pauses loin des écrans ; si les maux de tête sont fréquents, parles-en à un adulte ou au médecin." },
        { title: "Manque de sommeil", causes: "se coucher tard, écrans le soir.", effects: "moins d'attention et de mémoire, plus d'irritabilité ; le cerveau n'arrive pas à « faire le rangement ».", prevent: "horaires réguliers, pas d'écrans avant de dormir, chambre sombre et calme." }
      ],
      fact: "Le cerveau est fait d'environ 75 % d'eau et n'a pas de récepteurs de la douleur : les douleurs de la tête naissent autour de lui."
    },
    cervelletto: {
      name: "Le cervelet", label: "Cervelet",
      what: "<p>C'est la partie du cerveau qui t'aide à garder l'équilibre et à faire des mouvements précis, comme faire du vélo ou attraper un ballon.</p>",
      how: "<p>Il se trouve à l'arrière et en bas de la tête. Il pèse environ un dixième du cerveau mais contient plus de la moitié de ses neurones. Il reçoit des informations des muscles, des articulations, de l'oreille interne (équilibre) et des yeux, les compare avec les mouvements que le cerveau a commandés et corrige les erreurs en temps réel. C'est pourquoi, avec l'entraînement, les gestes deviennent de plus en plus fluides et automatiques : apprendre à faire du vélo « entraîne » le cervelet.</p>",
      links: [
        { to: "cervello", text: "Il reçoit du cerveau les ordres de mouvement et les affine." },
        { to: "orecchie", text: "L'oreille interne lui dit comment la tête est inclinée, ce qui est utile pour l'équilibre." },
        { to: "muscoli", text: "Il coordonne les muscles pour qu'ils travaillent ensemble avec précision." },
        { to: "midollo", text: "Il échange des informations avec le corps par la moelle épinière." }
      ],
      problems: [
        { title: "Vertiges et perte d'équilibre", causes: "tourner sur soi-même, fatigue, parfois maladies de l'oreille interne.", effects: "tu as l'impression que tout tourne et tu as du mal à tenir debout.", prevent: "s'asseoir jusqu'à ce que ça passe ; si cela arrive souvent, parles-en à un adulte ou au médecin." }
      ],
      fact: "Après avoir beaucoup tourné sur toi-même, tu as le vertige parce que le liquide de l'oreille continue de bouger."
    },
    midollo: {
      name: "La moelle épinière", label: "Moelle",
      what: "<p>C'est un long cordon de nerfs dans la colonne vertébrale. Il porte les messages entre le cerveau et le reste du corps, comme une autoroute.</p>",
      how: "<p>Longue d'environ 45 cm, elle descend du cerveau dans le canal des vertèbres. 31 paires de <b>nerfs rachidiens</b> en sortent. Elle transporte des signaux <b>sensitifs</b> (du corps au cerveau) et <b>moteurs</b> (du cerveau aux muscles). Elle peut aussi gérer seule les <b>réflexes</b> : quand tu touches quelque chose de très chaud, le signal arrive à la moelle, qui ordonne aussitôt au muscle de se retirer, avant même que le cerveau « sente » la douleur. Elle est protégée par les vertèbres, des membranes et un liquide.</p>",
      links: [
        { to: "cervello", text: "C'est le lien entre le cerveau et tout le corps." },
        { to: "nervi", text: "De la moelle partent les nerfs rachidiens qui atteignent les bras, les jambes et les organes." },
        { to: "muscoli", text: "Les ordres de mouvement voyagent du cerveau à la moelle, puis aux muscles." },
        { to: "colonna", text: "La colonne vertébrale l'enveloppe et la protège." }
      ],
      problems: [
        { title: "Coups dans le dos", causes: "grosses chutes ou accidents.", effects: "ils peuvent abîmer la moelle et faire perdre la sensibilité ou le mouvement ; c'est pour cela qu'elle est si bien protégée.", prevent: "ceintures de sécurité, casque, prudence en plongeant dans une eau peu profonde et dans les sports dangereux." }
      ],
      fact: "Le réflexe rotulien (le petit coup de pied quand le médecin tape sur le genou) est géré par la moelle, sans passer par le cerveau."
    },
    nervi: {
      name: "Les nerfs", label: "Nerfs",
      what: "<p>Les nerfs sont de fins « câbles » qui portent des messages dans tout le corps : ils disent au cerveau ce que tu ressens et portent aux muscles l'ordre de bouger.</p>",
      how: "<p>Chaque nerf est un faisceau de fibres nerveuses (des prolongements des neurones, les <b>axones</b>). Beaucoup sont entourées de <b>myéline</b>, une gaine grasse qui fait voyager les signaux à plus de 100 m/s. Il existe des nerfs <b>sensitifs</b>, <b>moteurs</b> et mixtes. Le système nerveux périphérique comprend aussi le système <b>autonome</b>, qui règle, sans que tu y penses, le battement du cœur, la digestion et la respiration. Un signal passe d'un neurone à l'autre par les synapses, grâce à des substances chimiques.</p>",
      links: [
        { to: "midollo", text: "Les nerfs rachidiens partent de la moelle et se ramifient dans le corps." },
        { to: "muscoli", text: "Les nerfs moteurs ordonnent aux muscles de se contracter." },
        { to: "pelle", text: "Les nerfs sensitifs portent au cerveau le toucher, le chaud, le froid et la douleur venant de la peau." },
        { to: "cuore", text: "Le système autonome règle automatiquement le rythme du cœur." }
      ],
      problems: [
        { title: "Fourmillements dus à une mauvaise position", causes: "rester longtemps dans la même position assise, jambes croisées ou coude appuyé.", effects: "un nerf est écrasé et tu ressens des fourmillements ou des jambes « engourdies ».", prevent: "changer souvent de position et bouger ; en général, ça passe en quelques minutes." }
      ],
      fact: "Le nerf sciatique, dans la jambe, est le nerf le plus long du corps."
    },
    occhi: {
      name: "Les yeux", label: "Yeux",
      what: "<p>Avec les yeux, tu vois les formes, les couleurs et les mouvements. Ils captent la lumière et la transforment en signaux pour le cerveau.</p>",
      how: "<p>La lumière entre par la <b>cornée</b>, passe par la pupille (qui s'agrandit ou se rétrécit selon la lumière, réglée par l'iris) et par le <b>cristallin</b>, une lentille qui fait la mise au point de l'image sur la <b>rétine</b>. Là, les <b>cônes</b> (environ 6 millions, pour les couleurs) et les <b>bâtonnets</b> (environ 120 millions, pour la lumière faible) transforment la lumière en signaux électriques. Le <b>nerf optique</b> les porte au cerveau, qui redresse l'image (sur la rétine, elle est à l'envers) et l'interprète. Les paupières et les larmes gardent l'œil propre.</p>",
      links: [
        { to: "cervello", text: "Le nerf optique porte au cerveau les signaux, qu'il transforme en images." },
        { to: "cranio", text: "Les orbites du crâne protègent les yeux." },
        { to: "muscoli", text: "Six petits muscles par œil le font bouger dans toutes les directions." },
        { to: "naso", text: "Les larmes descendent par de petits canaux situés aux coins des yeux jusqu'au nez : c'est pour cela que le nez coule quand on pleure." }
      ],
      problems: [
        { title: "Myopie et fatigue visuelle", causes: "trop de temps près des écrans et des livres, peu de temps dehors, parfois aussi l'hérédité.", effects: "les objets lointains paraissent flous, les yeux se fatiguent et font mal.", prevent: "pauses loin des écrans (regarde au loin toutes les 20 minutes), bonne lumière, jouer dehors ; si tu vois flou, parles-en à un adulte pour une visite." }
      ],
      fact: "Nous clignons des yeux environ 15 à 20 fois par minute pour humidifier l'œil."
    },
    orecchie: {
      name: "Les oreilles", label: "Oreilles",
      what: "<p>Les oreilles te font entendre les sons. Mais pas seulement : dans l'oreille se cache aussi le secret de ton équilibre.</p>",
      how: "<p>Le pavillon recueille les sons et les porte par le conduit jusqu'au <b>tympan</b>, une membrane qui vibre. La vibration passe à trois osselets (marteau, enclume et étrier) dans l'oreille moyenne, qui l'amplifient. Dans l'oreille interne, la <b>cochlée</b>, un petit tube en spirale rempli de liquide, transforme les vibrations en signaux nerveux envoyés au cerveau. À côté se trouvent les <b>canaux semi-circulaires</b>, qui sentent les mouvements de la tête et aident à l'équilibre. La trompe d'Eustache relie l'oreille à la gorge et équilibre la pression.</p>",
      links: [
        { to: "cervello", text: "Le nerf auditif porte les sons au cerveau, qui les reconnaît." },
        { to: "cervelletto", text: "Les informations des canaux semi-circulaires aident le cervelet à garder l'équilibre." },
        { to: "naso", text: "La trompe d'Eustache relie l'oreille moyenne au nez et à la gorge ; c'est pour cela qu'un rhume peut donner mal aux oreilles." }
      ],
      problems: [
        { title: "Otite", causes: "un rhume qui arrive jusqu'à l'oreille moyenne.", effects: "mal d'oreille et audition étouffée pendant quelques jours.", prevent: "se moucher doucement, se laver les mains ; si tu as mal à l'oreille, préviens un adulte." },
        { title: "Bruit trop fort", causes: "musique à fort volume, surtout avec un casque.", effects: "les cellules de l'oreille interne peuvent s'abîmer et l'audition baisser.", prevent: "volume modéré, pauses sans casque, protéger les oreilles dans les endroits très bruyants." }
      ],
      fact: "Les trois osselets de l'oreille sont les plus petits os du corps : l'étrier mesure environ 3 mm."
    },
    naso: {
      name: "Le nez", label: "Nez",
      what: "<p>Le nez fait entrer l'air, le réchauffe et le nettoie, et te fait sentir les odeurs.</p>",
      how: "<p>L'air passe par les <b>fosses nasales</b>, tapissées de mucus et de poils qui retiennent la poussière et les microbes, et il est réchauffé et humidifié avant d'arriver aux poumons. En haut, un petit tissu contenant des millions de cellules de l'<b>odorat</b> reconnaît les molécules des odeurs et envoie des signaux au cerveau. Le goût et l'odorat travaillent ensemble : avec le nez bouché, les saveurs paraissent beaucoup plus faibles. Le nez communique avec les oreilles et les yeux par de petits canaux.</p>",
      links: [
        { to: "trachea", text: "L'air propre et chaud descend du nez à la trachée." },
        { to: "lingua", text: "L'odorat et le goût travaillent ensemble : une grande partie de la saveur des aliments est en réalité de l'odeur." },
        { to: "cervello", text: "Le nerf olfactif porte au cerveau les odeurs, liées aussi aux émotions et aux souvenirs." },
        { to: "occhi", text: "Les larmes passent des yeux au nez par les canaux lacrymaux." }
      ],
      problems: [
        { title: "Rhume", causes: "des virus qui se propagent par les éternuements et les mains non lavées.", effects: "nez bouché ou qui coule, odorat et goût diminués pendant quelques jours.", prevent: "se laver souvent les mains, utiliser des mouchoirs jetables, éternuer dans le coude, bien dormir et bien manger." },
        { title: "Allergie au pollen", causes: "le système immunitaire réagit aux pollens.", effects: "éternuements, nez qui gratte et yeux rouges au printemps.", prevent: "si cela arrive chaque année, parles-en à un adulte et au médecin." }
      ],
      fact: "Nous pouvons reconnaître des milliers d'odeurs différentes, et l'odorat est le sens le plus lié aux souvenirs."
    },
    lingua: {
      name: "La langue", label: "Langue",
      what: "<p>La langue perçoit les saveurs, mélange les aliments pendant que tu mâches et t'aide à parler.</p>",
      how: "<p>C'est un muscle recouvert de petites saillies, les <b>papilles gustatives</b>, avec des milliers de bourgeons du goût qui reconnaissent les saveurs fondamentales : sucré, salé, acide, amer et umami. Quand tu mâches, elle pousse les aliments entre les dents, les mélange à la <b>salive</b> (qui contient une enzyme, l'amylase, qui commence à digérer l'amidon) et forme le <b>bol alimentaire</b>, qu'elle pousse ensuite vers la gorge pour avaler. En bougeant de façon très précise, elle nous permet aussi de prononcer les mots.</p>",
      links: [
        { to: "esofago", text: "Elle pousse le bol alimentaire vers la gorge, puis l'œsophage." },
        { to: "naso", text: "Avec le nez, elle te fait reconnaître la saveur complète des aliments." },
        { to: "cervello", text: "Les nerfs portent au cerveau les informations sur les saveurs." }
      ],
      problems: [
        { title: "Caries et bouche sale", causes: "sucres et brossage insuffisant ; les bactéries de la bouche produisent des acides.", effects: "les dents s'abîment et on peut avoir mauvaise haleine.", prevent: "se brosser les dents après les repas et le soir, peu de bonbons et de boissons sucrées, visites chez le dentiste." }
      ],
      fact: "Chaque langue a un dessin unique, comme les empreintes digitales."
    },
    cuore: {
      name: "Le cœur", label: "Cœur",
      what: "<p>Le cœur est une pompe musculaire grosse comme ton poing. Il bat toute la vie pour pousser le sang dans tout le corps.</p>",
      how: "<p>C'est un muscle à quatre cavités : deux <b>oreillettes</b> (qui reçoivent le sang) et deux <b>ventricules</b> (qui le projettent), séparés par des valves qui le font aller dans un seul sens. Le côté droit envoie le sang aux poumons (circulation pulmonaire), le gauche l'envoie à tout le corps (circulation systémique). Au repos, il bat 60 à 100 fois par minute, soit environ 100 000 fois par jour, et pompe environ 5 litres de sang par minute. Le battement est commandé par un groupe de cellules, le stimulateur naturel, et il s'accélère pendant l'effort.</p>",
      links: [
        { to: "polmoni", text: "Le côté droit envoie aux poumons le sang pauvre en oxygène (circulation pulmonaire) ; il revient oxygéné." },
        { to: "arterie", text: "Du ventricule gauche, le sang oxygéné part dans l'aorte et les artères." },
        { to: "vene", text: "Les veines ramènent au cœur le sang qui a déjà livré son oxygène." },
        { to: "nervi", text: "Le système nerveux autonome accélère ou ralentit son battement." }
      ],
      problems: [
        { title: "Infarctus et maladies du cœur", causes: "tabac, cholestérol élevé, tension élevée, sédentarité, mauvaise alimentation (surtout chez les adultes).", effects: "une partie du cœur reçoit moins de sang et d'oxygène et a du mal à pomper, et tout le corps peut en souffrir.", prevent: "bouger chaque jour, manger des fruits, des légumes et peu de sel, ne pas fumer, bien dormir." }
      ],
      fact: "Le cœur commence à battre environ 3 semaines après la conception et ne s'arrête plus."
    },
    arterie: {
      name: "Les artères", label: "Artères",
      what: "<p>Les artères sont les tuyaux qui portent le sang riche en oxygène du cœur à toutes les parties du corps.</p>",
      how: "<p>Elles ont des parois épaisses et élastiques et résistent à la pression du sang poussé par le cœur. La plus grande, l'<b>aorte</b>, mesure environ 2 à 3 cm de diamètre et se ramifie en artères de plus en plus petites jusqu'aux <b>capillaires</b>, très fins, où se font les échanges avec les cellules. Le « battement » que tu sens au poignet est l'onde de pression qui se propage dans les artères à chaque battement du cœur. La <b>tension artérielle</b> se mesure avec deux valeurs : la maximale (cœur contracté) et la minimale (cœur relâché). Les artères pulmonaires font exception : elles portent du sang pauvre en oxygène aux poumons.</p>",
      links: [
        { to: "cuore", text: "Elles partent du cœur, qui les remplit de sang à chaque battement." },
        { to: "vene", text: "Après les capillaires, le sang atteint les veines et retourne au cœur." },
        { to: "reni", text: "Les artères rénales portent aux reins le sang à filtrer." },
        { to: "cervello", text: "Les artères du cou portent au cerveau l'oxygène dont il a grand besoin." }
      ],
      problems: [
        { title: "Tension élevée", causes: "trop de sel, peu de mouvement, surpoids, tabac.", effects: "les parois des artères sont sous tension et le cœur travaille davantage ; avec le temps, des problèmes peuvent apparaître.", prevent: "peu de sel, beaucoup de fruits et de légumes, bouger, ne pas fumer ; le médecin contrôle la tension." }
      ],
      fact: "Si tu mettais bout à bout tous les vaisseaux sanguins, tu atteindrais environ 100 000 km, soit plus de deux fois le tour de la Terre."
    },
    vene: {
      name: "Les veines", label: "Veines",
      what: "<p>Les veines ramènent le sang au cœur après qu'il a livré l'oxygène et ramassé les déchets.</p>",
      how: "<p>Elles ont des parois plus fines que celles des artères et une pression plus basse. Dans les veines des jambes se trouvent des <b>valvules</b> en forme de petite poche qui empêchent le sang de redescendre. Le retour vers le cœur est aidé par les <b>muscles</b> qui, en se contractant, écrasent les veines, et par le mouvement de la respiration. Les deux plus grosses veines, la veine cave supérieure et la veine cave inférieure, portent le sang à l'oreillette droite. Les veines pulmonaires sont une exception : elles portent du sang oxygéné des poumons au cœur. La couleur bleutée des veines sous la peau est un effet d'optique.</p>",
      links: [
        { to: "cuore", text: "Les veines caves portent le sang dans l'oreillette droite du cœur." },
        { to: "muscoli", text: "Les muscles des jambes, en se contractant, poussent le sang vers le haut, vers le cœur." },
        { to: "intestino_tenue", text: "De l'intestin, une veine spéciale porte les nutriments au foie." },
        { to: "polmoni", text: "Les veines pulmonaires ramènent au cœur le sang riche en oxygène." }
      ],
      problems: [
        { title: "Jambes lourdes", causes: "rester longtemps immobile debout ou assis, mauvaise circulation.", effects: "le sang stagne dans les jambes, qui se sentent gonflées et fatiguées.", prevent: "bouger souvent, faire des pauses, marcher, ne pas rester des heures sans bouger les jambes." }
      ],
      fact: "Les veines contiennent à tout moment environ 60 à 70 % du sang du corps."
    },
    trachea: {
      name: "La trachée", label: "Trachée",
      what: "<p>La trachée est le tuyau qui porte l'air de la gorge aux poumons. Elle a des anneaux de cartilage qui la gardent ouverte.</p>",
      how: "<p>Elle mesure environ 10 à 12 cm et est formée de 16 à 20 anneaux de cartilage en forme de « C », qui la gardent toujours ouverte, tapissée à l'intérieur de cellules munies de minuscules cils et de mucus. Le mucus piège la poussière et les microbes, et les cils le poussent vers la gorge, où il est avalé ou expulsé par la toux. En bas, elle se divise en deux <b>bronches</b>, une par poumon, qui se ramifient en tubes de plus en plus petits (bronchioles). Au-dessus, le <b>larynx</b> contient les cordes vocales, et l'<b>épiglotte</b> ferme la trachée quand tu avales.</p>",
      links: [
        { to: "naso", text: "Elle reçoit l'air du nez et de la bouche, déjà réchauffé et nettoyé." },
        { to: "polmoni", text: "Elle se divise en deux bronches qui portent l'air aux poumons." },
        { to: "esofago", text: "Elle passe devant l'œsophage ; l'épiglotte la ferme quand tu avales, ainsi les aliments n'y entrent pas." }
      ],
      problems: [
        { title: "Toux et bronchite", causes: "virus, tabac, air pollué.", effects: "le mucus augmente, la gorge irrite et la toux essaie de nettoyer les voies respiratoires.", prevent: "éviter la fumée, même passive, se laver les mains, aérer ; si la toux dure, parles-en à un adulte ou au médecin." }
      ],
      fact: "Un coup de toux peut projeter l'air à des dizaines de mètres par seconde."
    },
    polmoni: {
      name: "Les poumons", label: "Poumons",
      what: "<p>Les poumons sont deux grandes « éponges » qui prennent l'oxygène de l'air et l'envoient dans le sang, et qui font sortir le dioxyde de carbone.</p>",
      how: "<p>Dans les poumons, les bronches se ramifient en des milliers de bronchioles qui se terminent par environ 300 à 500 millions d'<b>alvéoles</b>, de minuscules sacs entourés de capillaires. Leurs parois sont très fines : l'oxygène passe dans le sang et le dioxyde de carbone passe du sang à l'air, par <b>diffusion</b>. Au total, la surface des alvéoles est grande comme la moitié d'un court de tennis environ (50 à 70 m²). Le poumon droit a trois lobes, le gauche deux, pour laisser de la place au cœur. Au repos, nous respirons 12 à 20 fois par minute.</p>",
      links: [
        { to: "cuore", text: "Le cœur envoie aux poumons le sang pauvre en oxygène et le reçoit oxygéné." },
        { to: "diaframma", text: "Le diaphragme les fait gonfler et se dégonfler à chaque respiration." },
        { to: "trachea", text: "L'air arrive de la trachée par les bronches." },
        { to: "costole", text: "Les côtes les protègent comme une cage." },
        { to: "vene", text: "Des veines pulmonaires sort le sang riche en oxygène, en route vers le cœur." }
      ],
      problems: [
        { title: "Asthme", causes: "allergies, infections, air froid ou fumée peuvent rétrécir les bronches.", effects: "essoufflement, toux et sifflements dans la respiration, parce que l'air passe difficilement.", prevent: "éviter la fumée et la poussière, suivre les indications du médecin si on est asthmatique et garder ses médicaments sur soi." },
        { title: "Pneumonie", causes: "infections par des virus ou des bactéries.", effects: "les alvéoles se remplissent de liquide et moins d'oxygène passe dans le sang ; il faut des soins médicaux.", prevent: "vaccinations, se laver les mains, ne pas fumer, bien dormir et bien manger." }
      ],
      fact: "Étalées l'une à côté de l'autre, les alvéoles couvriraient une surface des dizaines de fois plus grande que ta peau."
    },
    esofago: {
      name: "L'œsophage", label: "Œsophage",
      what: "<p>L'œsophage est le tuyau qui porte les aliments de la gorge à l'estomac. Il fonctionne même la tête en bas !</p>",
      how: "<p>Il mesure environ 25 cm. Ses parois musculaires se contractent en ondes, le <b>péristaltisme</b>, qui poussent les aliments vers le bas sans avoir besoin de la gravité. Au début et à la fin se trouvent deux « valves » musculaires (sphincters) : celui du bas s'ouvre pour laisser passer les aliments dans l'estomac, puis se ferme pour les empêcher de remonter. Quand le suc gastrique acide remonte un peu, on ressent la brûlure appelée « reflux ».</p>",
      links: [
        { to: "lingua", text: "Il reçoit les aliments mâchés que la langue pousse vers la gorge." },
        { to: "stomaco", text: "En bas, il s'ouvre dans l'estomac, où les aliments sont digérés." },
        { to: "trachea", text: "Il passe derrière la trachée : quand tu avales, l'épiglotte la ferme." },
        { to: "diaframma", text: "Il traverse le diaphragme pour entrer dans l'abdomen." }
      ],
      problems: [
        { title: "Brûlures d'estomac", causes: "repas copieux ou très gras, manger en vitesse, boissons gazeuses.", effects: "une sensation de brûlure derrière le sternum, quand un peu d'acide remonte.", prevent: "manger lentement, portions modérées, ne pas se coucher juste après le dîner ; si cela arrive souvent, parles-en à un adulte ou au médecin." }
      ],
      fact: "Les aliments descendent le long de l'œsophage en quelques secondes."
    },
    stomaco: {
      name: "L'estomac", label: "Estomac",
      what: "<p>L'estomac est un sac musculaire qui mélange les aliments avec des sucs spéciaux et les transforme en bouillie.</p>",
      how: "<p>Il a une capacité d'environ 1 à 1,5 litre. Ses parois musculaires malaxent les aliments pendant 2 à 4 heures, en les mélangeant au <b>suc gastrique</b>, riche en acide chlorhydrique (qui tue de nombreux microbes) et en enzymes comme la pepsine, qui commencent à digérer les protéines. Une couche de mucus protège la paroi de l'acide. Le résultat est le <b>chyme</b>, qui passe à petites doses dans l'intestin grêle par une valve, le pylore.</p>",
      links: [
        { to: "esofago", text: "Il reçoit les aliments de l'œsophage." },
        { to: "intestino_tenue", text: "Le chyme passe à petites doses dans l'intestin grêle." },
        { to: "fegato", text: "Il est près du foie, qui prépare la bile utile aux étapes suivantes de la digestion." },
        { to: "nervi", text: "Les nerfs disent à l'estomac quand il est temps de travailler et envoient la sensation de faim." }
      ],
      problems: [
        { title: "Mal de ventre et gastrite", causes: "manger trop vite, trop de nourriture, stress, infections.", effects: "douleur ou brûlure et nausées, la digestion est plus difficile.", prevent: "manger calmement, à heures régulières, éviter les excès d'aliments gras ou épicés ; si la douleur persiste, parles-en à un adulte ou au médecin." }
      ],
      fact: "La muqueuse de l'estomac se renouvelle tous les quelques jours, ainsi l'acide ne l'abîme pas."
    },
    fegato: {
      name: "Le foie", label: "Foie",
      what: "<p>Le foie est la grande « usine » du corps : il nettoie le sang, stocke de l'énergie et prépare des substances utiles pour digérer.</p>",
      how: "<p>C'est le plus gros organe interne (environ 1,5 kg) et il remplit plus de 500 fonctions. Il reçoit de l'intestin, par la <b>veine porte</b>, le sang chargé de nutriments : il les transforme, stocke le sucre sous forme de <b>glycogène</b> et le restitue quand c'est nécessaire. Il rend moins nocives certaines substances (comme les médicaments), fabrique des protéines du sang et la <b>bile</b>, qui aide à digérer les graisses. Il peut se régénérer après une lésion : une partie perdue peut repousser.</p>",
      links: [
        { to: "cistifellea", text: "La bile produite par le foie est conservée dans la vésicule biliaire." },
        { to: "intestino_tenue", text: "Il reçoit de l'intestin les nutriments absorbés, et envoie la bile dans l'intestin." },
        { to: "pancreas", text: "Le pancréas et le foie règlent ensemble la quantité de sucre dans le sang." },
        { to: "vene", text: "La veine porte et la veine cave portent le sang vers le foie et hors du foie." }
      ],
      problems: [
        { title: "Foie fatigué", causes: "trop d'aliments gras et sucrés, peu de mouvement, alcool (chez les adultes), certains médicaments pris sans contrôle.", effects: "le foie a plus de mal à travailler et la graisse s'accumule ; avec le temps, il peut s'abîmer.", prevent: "manger varié, bouger, ne prendre des médicaments qu'avec un adulte, pas d'alcool pour les jeunes." }
      ],
      fact: "Le foie est le seul organe interne qui peut se régénérer en grande partie."
    },
    cistifellea: {
      name: "La vésicule biliaire", label: "Vésicule",
      what: "<p>C'est un petit sac sous le foie où se conserve la bile, le liquide qui aide à digérer les graisses.</p>",
      how: "<p>Elle a la forme d'une petite poire, longue d'environ 8 à 10 cm. La bile est produite en continu par le foie et arrive à la vésicule, qui la <b>concentre</b> en retirant de l'eau. Quand tu manges des aliments gras, une hormone fait se contracter la vésicule, qui presse la bile dans le <b>duodénum</b> (la première partie de l'intestin grêle). La bile agit comme un détergent : elle fragmente les graisses en minuscules gouttelettes, pour que les enzymes puissent les attaquer. On peut aussi vivre sans vésicule biliaire.</p>",
      links: [
        { to: "fegato", text: "Elle conserve la bile produite par le foie." },
        { to: "intestino_tenue", text: "Elle verse la bile dans le duodénum quand il faut digérer les graisses." },
        { to: "pancreas", text: "Son canal rejoint celui du pancréas avant de déboucher dans le duodénum." }
      ],
      problems: [
        { title: "Calculs biliaires", causes: "bile trop riche en cholestérol, alimentation grasse, surpoids (plus chez les adultes).", effects: "de petits « cailloux » peuvent bloquer le canal et donner des douleurs après les repas.", prevent: "alimentation variée avec des fibres, mouvement, éviter les régimes drastiques ; en cas de forte douleur au ventre, préviens tout de suite un adulte." }
      ],
      fact: "La bile est vert-jaune et donne leur couleur brune caractéristique aux selles."
    },
    pancreas: {
      name: "Le pancréas", label: "Pancréas",
      what: "<p>Le pancréas fait deux métiers : il fabrique des sucs pour digérer les aliments et il fabrique une hormone, l'insuline, qui gère le sucre dans le sang.</p>",
      how: "<p>C'est une glande longue d'environ 15 cm derrière l'estomac. Comme glande <b>exocrine</b>, il produit le suc pancréatique, riche en enzymes qui digèrent les sucres, les protéines et les graisses, et en bicarbonate qui neutralise l'acide de l'estomac ; il l'envoie au duodénum. Comme glande <b>endocrine</b>, ses « îlots de Langerhans » produisent deux hormones opposées : l'<b>insuline</b> (elle baisse la glycémie en faisant entrer le sucre dans les cellules) et le <b>glucagon</b> (il la fait monter en libérant le sucre stocké dans le foie).</p>",
      links: [
        { to: "intestino_tenue", text: "Il verse dans le duodénum les enzymes qui digèrent les aliments." },
        { to: "fegato", text: "L'insuline et le glucagon disent au foie quand stocker ou libérer du sucre." },
        { to: "stomaco", text: "Il est derrière l'estomac, et neutralise l'acide qui vient de là." },
        { to: "muscoli", text: "Grâce à l'insuline, les muscles prennent dans le sang le sucre dont ils ont besoin pour travailler." }
      ],
      problems: [
        { title: "Diabète", causes: "le corps produit peu d'insuline ou ne l'utilise pas bien ; il existe différentes formes, certaines liées aussi au surpoids et à la sédentarité.", effects: "le sucre reste élevé dans le sang, avec soif, fatigue et, avec le temps, des dommages à d'autres organes comme les yeux et les reins.", prevent: "alimentation équilibrée, peu de boissons sucrées, mouvement ; les personnes diabétiques se soignent avec le médecin." }
      ],
      fact: "Les îlots de Langerhans ne représentent que 1 à 2 % du pancréas, mais sans insuline les cellules ne pourraient pas utiliser le sucre."
    },
    intestino_tenue: {
      name: "L'intestin grêle", label: "Int. grêle",
      what: "<p>C'est le long tube enroulé dans le ventre où les aliments finissent d'être digérés et où les nutriments passent dans le sang.</p>",
      how: "<p>Il mesure environ 6 à 7 mètres et se divise en duodénum, jéjunum et iléon. Ici arrivent le suc pancréatique, la bile et les sucs intestinaux qui décomposent les glucides en sucres simples, les protéines en acides aminés et les graisses en acides gras. La paroi est pleine de plis et de minuscules saillies, les <b>villosités</b>, qui augmentent la surface d'absorption jusqu'à environ 30 m² (plus qu'un grand salon). Les sucres et les acides aminés passent dans les capillaires, qui les portent au foie par la veine porte ; les graisses passent dans les vaisseaux lymphatiques.</p>",
      links: [
        { to: "stomaco", text: "Il reçoit de l'estomac le chyme, à petites doses." },
        { to: "pancreas", text: "Le pancréas lui envoie les enzymes pour terminer la digestion." },
        { to: "cistifellea", text: "La bile de la vésicule biliaire aide à digérer les graisses." },
        { to: "intestino_crasso", text: "Ce qui n'est pas absorbé passe dans le gros intestin." },
        { to: "vene", text: "Les nutriments absorbés entrent dans le sang et arrivent au foie." }
      ],
      problems: [
        { title: "Intolérances et allergies alimentaires", causes: "le corps ne digère pas bien une substance (comme le lactose) ou le système immunitaire réagit à un aliment.", effects: "ballonnements, mal de ventre, diarrhée, parfois d'autres symptômes.", prevent: "si un aliment te rend souvent malade, parles-en à un adulte et au médecin, qui t'indiquera quoi faire." },
        { title: "Gastro-entérite", causes: "virus ou bactéries pris par des mains sales ou des aliments mal conservés.", effects: "diarrhée, vomissements, mal de ventre et perte d'eau.", prevent: "se laver les mains avant de manger, laver les fruits et les légumes, bien conserver les aliments, boire de l'eau." }
      ],
      fact: "Grâce aux plis et aux villosités, la surface de l'intestin grêle est bien plus grande que ce que le tube laisse penser."
    },
    intestino_crasso: {
      name: "Le gros intestin", label: "Gros intestin",
      what: "<p>C'est le dernier tronçon de la digestion : il récupère l'eau des aliments qui ne servent plus et prépare les déchets à éliminer.</p>",
      how: "<p>Il mesure environ 1,5 mètre et est plus large que l'intestin grêle. Il comprend le <b>cæcum</b> (avec l'appendice), le <b>côlon</b> et le <b>rectum</b>. Ici, l'eau et les sels sont réabsorbés, donc les restes deviennent plus solides, les <b>selles</b>. Y vivent des milliards de bactéries utiles, le <b>microbiote</b>, qui digèrent les fibres, produisent certaines vitamines (comme la K) et protègent contre les bactéries nuisibles. Les selles restent dans le rectum jusqu'à leur élimination. Le passage dans tout l'appareil digestif dure de 1 à 3 jours environ.</p>",
      links: [
        { to: "intestino_tenue", text: "Il reçoit de l'intestin grêle les résidus non digestibles et encore très aqueux." },
        { to: "reni", text: "Avec les reins, il aide le corps à garder le bon équilibre en eau." },
        { to: "vene", text: "L'eau et certaines vitamines récupérées passent dans le sang." }
      ],
      problems: [
        { title: "Constipation", causes: "peu de fibres, peu d'eau, peu de mouvement, se retenir d'aller aux toilettes.", effects: "les selles deviennent dures et faire caca demande des efforts et fait mal.", prevent: "fruits, légumes, céréales complètes, boire de l'eau, bouger, aller aux toilettes quand il faut." }
      ],
      fact: "Dans l'intestin vivent plus de bactéries qu'il n'y a de cellules dans tout le reste du corps."
    },
    reni: {
      name: "Les reins", label: "Reins",
      what: "<p>Les reins sont deux organes en forme de haricot qui nettoient le sang et fabriquent l'urine.</p>",
      how: "<p>Chaque rein est gros comme un poing et contient environ un million de filtres appelés <b>néphrons</b>. Chaque jour, environ 180 litres de plasma sanguin sont filtrés, mais presque tout retourne dans le sang : les reins réabsorbent l'eau et les substances utiles et ne laissent sortir qu'environ 1,5 litre d'<b>urine</b>, avec des déchets comme l'urée et l'excès de sel. Ainsi, ils règlent la quantité d'eau, le sel et la tension. Ils produisent aussi une hormone, l'<b>érythropoïétine</b>, qui stimule la moelle osseuse à fabriquer des globules rouges.</p>",
      links: [
        { to: "vescica", text: "L'urine descend des reins à la vessie par les deux uretères." },
        { to: "arterie", text: "Les artères rénales portent le sang à filtrer, les veines le ramènent propre." },
        { to: "surrenali", text: "Au-dessus de chaque rein se trouve une glande surrénale." },
        { to: "cuore", text: "Les reins contrôlent le volume du sang et aident donc le cœur à régler la tension." }
      ],
      problems: [
        { title: "Infections urinaires et calculs", causes: "peu d'eau, hygiène insuffisante, parfois des sels qui s'accumulent.", effects: "brûlure quand on fait pipi, ou douleur dans les flancs ; les reins fonctionnent moins bien.", prevent: "boire de l'eau pendant la journée, peu de sel, aller aux toilettes sans se retenir ; si ça brûle, dis-le à un adulte." }
      ],
      fact: "Les reins filtrent tout le sang du corps plusieurs fois par jour."
    },
    vescica: {
      name: "La vessie", label: "Vessie",
      what: "<p>La vessie est un sac élastique où l'urine s'accumule, jusqu'à ce que tu ailles aux toilettes.</p>",
      how: "<p>C'est un organe musculaire creux. L'urine arrive des reins par les uretères et s'accumule : la vessie d'un adulte peut contenir environ un demi-litre. Quand elle est pleine, les récepteurs de la paroi envoient un signal au cerveau et tu ressens l'envie. Deux sphincters la ferment : un automatique et un que nous contrôlons. Quand tu décides d'aller aux toilettes, le muscle de la paroi se contracte, le sphincter se relâche et l'urine sort par l'<b>urètre</b>. Les enfants apprennent à contrôler la vessie pendant les premières années de vie.</p>",
      links: [
        { to: "reni", text: "Elle reçoit l'urine produite par les reins." },
        { to: "bacino", text: "Elle est en sécurité dans la cuvette du bassin." },
        { to: "nervi", text: "Les nerfs avertissent le cerveau quand elle est pleine et coordonnent la vidange." }
      ],
      problems: [
        { title: "Cystite", causes: "des bactéries qui remontent depuis l'urètre, peu d'eau, trop se retenir.", effects: "brûlure et envie fréquente de faire pipi.", prevent: "boire de l'eau, ne pas trop se retenir de faire pipi, hygiène personnelle ; si tu as une brûlure, préviens un adulte ou le médecin." }
      ],
      fact: "La vessie s'étire comme un ballon et se fait sentir quand elle est pleine à environ un tiers."
    },
    tiroide: {
      name: "La thyroïde", label: "Thyroïde",
      what: "<p>La thyroïde est une petite glande en forme de papillon dans le cou. Elle fabrique des hormones qui règlent la vitesse à laquelle le corps travaille.</p>",
      how: "<p>Elle pèse 15 à 25 g et produit les hormones <b>thyroxine (T4)</b> et <b>triiodothyronine (T3)</b>, qui contrôlent le métabolisme : la vitesse à laquelle les cellules utilisent l'énergie. Elles influencent la croissance, la température, le battement du cœur et le développement du cerveau chez les enfants. Pour les fabriquer, il faut de l'<b>iode</b>, qu'on trouve dans le poisson et le sel iodé. La production est commandée par l'hypophyse avec l'hormone TSH, dans un circuit de contrôle par rétroaction qui garde les niveaux stables.</p>",
      links: [
        { to: "cervello", text: "L'hypothalamus et l'hypophyse, dans le cerveau, contrôlent la quantité de thyroxine à produire." },
        { to: "cuore", text: "Les hormones thyroïdiennes influencent la fréquence des battements." },
        { to: "ossa_gambe", text: "Elles sont nécessaires à une croissance régulière des os chez les jeunes." }
      ],
      problems: [
        { title: "Thyroïde trop lente ou trop rapide", causes: "manque d'iode ou troubles des défenses immunitaires.", effects: "si elle travaille peu, tu as sommeil et froid ; si elle travaille trop, tu es agité et tu perds du poids.", prevent: "utiliser du sel iodé avec modération, manger du poisson ; des analyses de sang permettent de la contrôler : parles-en au médecin." }
      ],
      fact: "Son nom vient du grec « bouclier », à cause de la forme du cartilage voisin."
    },
    surrenali: {
      name: "Les glandes surrénales", label: "Surrénales",
      what: "<p>Ce sont deux petites glandes au-dessus des reins. Elles fabriquent des hormones qui nous aident à réagir à une frayeur ou à un moment important.</p>",
      how: "<p>Chaque surrénale a deux parties. La <b>médullaire</b> produit de l'<b>adrénaline</b> et de la <b>noradrénaline</b> dans les moments de stress : le cœur bat plus fort, la respiration s'accélère, les muscles reçoivent plus de sang, c'est la réaction dite « combat ou fuite ». La <b>corticale</b> produit le <b>cortisol</b> (qui aide à gérer le stress et les sucres) et l'<b>aldostérone</b>, qui règle le sel et l'eau avec les reins. Elles sont contrôlées par l'hypophyse et par le système nerveux.</p>",
      links: [
        { to: "reni", text: "Elles reposent sur le haut des reins ; l'aldostérone indique aux reins combien de sel retenir." },
        { to: "cuore", text: "L'adrénaline fait battre le cœur plus fort et plus vite." },
        { to: "cervello", text: "Le cerveau, face à un danger ou à une forte émotion, les met en action." },
        { to: "muscoli", text: "Elles préparent les muscles à l'action en leur envoyant plus de sucre et de sang." }
      ],
      problems: [
        { title: "Stress prolongé", causes: "soucis continuels, peu de sommeil, trop d'engagements.", effects: "cortisol élevé trop longtemps : fatigue, difficulté à dormir, maux de ventre.", prevent: "bien dormir, jouer et bouger dehors, parler de ses soucis à un adulte en qui on a confiance." }
      ],
      fact: "L'adrénaline agit en quelques secondes : voilà pourquoi le cœur bat fort dès que tu as peur."
    },
    milza: {
      name: "La rate", label: "Rate",
      what: "<p>La rate est un organe mou à gauche du ventre. Elle filtre le sang et aide le corps à se défendre contre les microbes.</p>",
      how: "<p>Grosse environ comme un poing, elle a deux tissus : la <b>pulpe rouge</b>, qui filtre le sang et élimine les globules rouges vieux ou abîmés (après environ 120 jours) et en garde une réserve ; la <b>pulpe blanche</b>, riche en lymphocytes, qui reconnaissent les microbes dans le sang et fabriquent des anticorps. Le fer des globules rouges est récupéré et réutilisé. On peut vivre sans rate, mais on est un peu plus exposé à certaines infections, et il est utile de se faire vacciner.</p>",
      links: [
        { to: "stomaco", text: "Elle est à côté de l'estomac, sous les côtes de gauche." },
        { to: "arterie", text: "Elle reçoit le sang d'une artère spéciale et le filtre." },
        { to: "linfonodi", text: "Avec les ganglions lymphatiques, elle fait partie du système lymphatique de défense." },
        { to: "costole", text: "Les côtes la protègent des chocs." }
      ],
      problems: [
        { title: "Coups sur le flanc gauche", causes: "gros chocs dans les sports de contact ou chutes.", effects: "la rate peut être blessée et donner une douleur au flanc gauche.", prevent: "utiliser les protections et faire attention dans les jeux ; si tu as une forte douleur après un coup, préviens tout de suite un adulte." }
      ],
      fact: "C'est le plus gros organe du système lymphatique."
    },
    timo: {
      name: "Le thymus", label: "Thymus",
      what: "<p>Le thymus est une petite glande derrière le sternum. C'est l'« école » où certaines cellules de défense apprennent à reconnaître les microbes.</p>",
      how: "<p>Il est plus gros chez les enfants et devient plus petit avec la croissance puis à l'âge adulte. C'est ici que mûrissent les <b>lymphocytes T</b> (le T vient de thymus), qui naissent dans la moelle osseuse. Dans le thymus, ils apprennent à distinguer les cellules de leur propre corps de celles qui sont étrangères : ceux qui se trompent sont éliminés, pour éviter que le système immunitaire n'attaque le corps lui-même. Les lymphocytes T passent ensuite dans le sang, les ganglions lymphatiques et la rate où ils coordonnent la défense.</p>",
      links: [
        { to: "linfonodi", text: "Les lymphocytes T sortis du thymus se dirigent vers les ganglions lymphatiques." },
        { to: "milza", text: "La rate aussi abrite des lymphocytes T et B qui ont terminé leur formation." },
        { to: "cuore", text: "Il est devant le cœur, derrière le sternum." }
      ],
      problems: [
        { title: "Défenses immatures ou faibles", causes: "le système immunitaire se développe pendant l'enfance et est influencé par le sommeil, l'alimentation et les vaccins.", effects: "si les défenses fonctionnent moins bien, on tombe malade plus facilement.", prevent: "vaccinations, bon sommeil, alimentation variée, se laver les mains ; si tu es souvent malade, parles-en au médecin." }
      ],
      fact: "Le thymus est plus actif pendant l'enfance et l'adolescence, puis il rapetisse."
    },
    linfonodi: {
      name: "Les ganglions lymphatiques", label: "Ganglions",
      what: "<p>Les ganglions lymphatiques sont de petites glandes en forme de haricot réparties dans le corps (cou, aisselles, aine). Ce sont les postes de contrôle qui arrêtent les microbes.</p>",
      how: "<p>Ils sont reliés entre eux par les vaisseaux lymphatiques, qui recueillent la <b>lymphe</b>, un liquide clair qui s'écoule des tissus. La lymphe traverse les ganglions, où se trouvent de nombreux <b>lymphocytes</b> et macrophages qui filtrent et détruisent les bactéries, les virus et les cellules endommagées. Quand il y a une infection, les lymphocytes se multiplient, et le ganglion grossit et peut faire un peu mal : c'est le signe qu'il travaille. À la fin, la lymphe retourne dans le sang près du cœur. Le corps en compte environ 600.</p>",
      links: [
        { to: "milza", text: "La rate et les ganglions font partie ensemble du système lymphatique." },
        { to: "timo", text: "Ils reçoivent les lymphocytes T formés dans le thymus." },
        { to: "vene", text: "La lymphe recueillie retourne dans la circulation en se versant dans les grosses veines près du cœur." },
        { to: "intestino_tenue", text: "Les graisses absorbées dans l'intestin voyagent dans les vaisseaux lymphatiques." }
      ],
      problems: [
        { title: "Ganglions gonflés", causes: "mal de gorge, rhume ou autres infections.", effects: "tu sens sous le menton des « petites boules » douloureuses qui, en général, dégonflent toutes seules.", prevent: "repos, boire, se laver les mains ; s'ils restent gonflés longtemps, parles-en à un adulte ou au médecin." }
      ],
      fact: "Les ganglions du cou gonflent souvent quand tu as mal à la gorge : cela signifie que ton corps se défend."
    }
  },
  tour: [
    { icon: "🧍", title: "Le corps entier", html: "<p>Voici le corps avec la <b>peau</b>, qui le protège de l'extérieur. En dessous, il y a les muscles, les os et les organes. Utilise le curseur « Éclater » pour séparer les pièces et mieux les voir.</p>", focus: ["pelle"], explode: 0, view: { rx: 0.1, ry: -0.4 } },
    { icon: "🦴", title: "Squelette et muscles", html: "<p>Les <b>os</b> sont la charpente qui soutient tout et protège le cœur, les poumons et le cerveau. Les <b>muscles</b> tirent sur les os et te font bouger.</p>", focus: ["cranio", "colonna", "costole", "bacino", "ossa_braccia", "ossa_gambe", "muscoli"], explode: 0.4 },
    { icon: "🧠", title: "Le poste de commande", html: "<p>Le <b>cerveau</b> donne les ordres, le <b>cervelet</b> coordonne les mouvements, la <b>moelle épinière</b> et les <b>nerfs</b> portent les messages dans tout le corps.</p>", focus: ["cervello", "cervelletto", "midollo", "nervi"], explode: 0.3, view: { rx: 0.05, ry: 0.4 }, zoom: 1.2 },
    { icon: "👀", title: "Les sens", html: "<p>Les yeux, les oreilles, le nez et la langue captent la lumière, les sons, les odeurs et les saveurs et les envoient au cerveau sous forme de signaux.</p>", focus: ["occhi", "orecchie", "naso", "lingua"], explode: 0.3, zoom: 1.4 },
    { icon: "🫀", title: "Cœur et sang", html: "<p>Le <b>cœur</b> est une pompe qui pousse le sang dans les <b>artères</b> ; les <b>veines</b> le ramènent. Le sang livre l'oxygène et les nutriments à chaque cellule.</p>", focus: ["cuore", "arterie", "vene"], explode: 0.2 },
    { icon: "🫁", title: "Respirer", html: "<p>L'air entre par le nez, descend par la <b>trachée</b> et arrive aux <b>poumons</b>, où l'oxygène entre dans le sang. Le <b>diaphragme</b> fait circuler l'air comme un soufflet.</p>", focus: ["naso", "trachea", "polmoni", "diaframma"], explode: 0.4, view: { rx: 0.1, ry: -0.2 } },
    { icon: "🍽️", title: "Digérer", html: "<p>Les aliments descendent par l'<b>œsophage</b> dans l'<b>estomac</b>, puis dans l'<b>intestin grêle</b>, où le <b>foie</b>, la <b>vésicule biliaire</b> et le <b>pancréas</b> aident à digérer. Dans le <b>gros intestin</b>, on récupère l'eau.</p>", focus: ["esofago", "stomaco", "fegato", "cistifellea", "pancreas", "intestino_tenue", "intestino_crasso"], explode: 0.5 },
    { icon: "🚽", title: "Filtrer et nettoyer", html: "<p>Les <b>reins</b> filtrent le sang et fabriquent l'urine, qui descend dans la <b>vessie</b>.</p>", focus: ["reni", "vescica"], explode: 0.5 },
    { icon: "⚗️", title: "Les hormones", html: "<p>La <b>thyroïde</b>, les <b>surrénales</b> et le <b>pancréas</b> envoient dans le sang des hormones, des messagers chimiques qui règlent la croissance, l'énergie et les réactions au stress.</p>", focus: ["tiroide", "surrenali", "pancreas"], explode: 0.5 },
    { icon: "🛡️", title: "Les défenses", html: "<p>La <b>rate</b>, le <b>thymus</b> et les <b>ganglions lymphatiques</b> sont la base des globules blancs, qui reconnaissent et éliminent virus et bactéries.</p>", focus: ["milza", "timo", "linfonodi"], explode: 0.5 }
  ],
  quiz: [
    { type: "mc", q: "Quel organe fait passer l'oxygène de l'air au sang ?", options: ["L'estomac", "Les poumons", "Les reins"], answer: 1, explain: "Dans les alvéoles des poumons, l'oxygène passe dans le sang et le dioxyde de carbone passe dans l'air." },
    { type: "tf", q: "Les artères portent toujours du sang riche en oxygène, sauf celles qui vont aux poumons.", answer: true, explain: "Les artères emmènent le sang loin du cœur ; l'artère pulmonaire porte du sang pauvre en oxygène aux poumons." },
    { type: "mc", q: "Où la bile est-elle conservée ?", options: ["Dans la vésicule biliaire", "Dans l'estomac", "Dans la vessie"], answer: 0, explain: "Le foie fabrique la bile et la vésicule biliaire la conserve jusqu'à ce qu'elle serve à digérer les graisses." },
    { type: "order", q: "Remets dans l'ordre le trajet des aliments.", items: ["Bouche", "Œsophage", "Estomac", "Intestin grêle", "Gros intestin"], explain: "Les aliments parcourent un long tube : ils sont mâchés, descendent dans l'œsophage, dans l'estomac, puis sont absorbés dans l'intestin grêle et le gros intestin récupère l'eau." },
    { type: "tf", q: "L'insuline, fabriquée par le pancréas, aide le sucre à entrer dans les cellules.", answer: true, explain: "L'insuline fait baisser la quantité de sucre dans le sang en le faisant entrer dans les cellules." },
    { type: "mc", q: "Quelle partie du système nerveux protège et relie le cerveau au corps, à l'intérieur de la colonne vertébrale ?", options: ["Le cervelet", "La moelle épinière", "Le thymus"], answer: 1, explain: "La moelle épinière, protégée par les vertèbres, porte les signaux entre le cerveau et les nerfs du corps." },
    { type: "num", q: "À peu près, combien de litres de sang a un adulte ?", answer: 5, tol: 1, unit: "litres", explain: "Un adulte a environ 5 litres de sang, soit 7 à 8 % de son poids." },
    { type: "mc", q: "Quel organe fabrique l'urine en filtrant le sang ?", options: ["Les reins", "La vessie", "Le foie"], answer: 0, explain: "Les reins filtrent le sang et fabriquent l'urine ; la vessie ne fait que la recueillir." },
    { type: "tf", q: "Le diaphragme se contracte quand tu inspires.", answer: true, explain: "En se contractant, il s'abaisse, le thorax s'élargit et l'air entre dans les poumons." },
    { type: "order", q: "Remets dans l'ordre le trajet d'un ordre de mouvement.", items: ["Cerveau", "Moelle épinière", "Nerfs", "Muscles"], explain: "Le cerveau décide, la moelle et les nerfs portent le signal et le muscle se contracte." },
    { type: "mc", q: "Où mûrissent les lymphocytes T ?", options: ["Dans le thymus", "Dans la rate", "Dans l'estomac"], answer: 0, explain: "Dans le thymus, les lymphocytes T apprennent à reconnaître ce qui est étranger au corps, et c'est pour cela qu'on les appelle « T »." },
    { type: "num", q: "Combien de mètres mesure environ l'intestin grêle d'un adulte ?", answer: 6, tol: 1, unit: "m", explain: "L'intestin grêle mesure environ 6 à 7 mètres : replié dans le ventre, il absorbe les nutriments." },
    { type: "mc", q: "Quel lien est correct ?", options: ["Cœur et poumons : le sang prend de l'oxygène", "Œsophage et reins : ils portent l'urine", "Thyroïde et vessie : elles fabriquent la bile"], answer: 0, explain: "Le cœur envoie aux poumons du sang pauvre en oxygène, qui revient oxygéné." },
    { type: "tf", q: "Le cervelet sert surtout à digérer les aliments.", answer: false, explain: "Le cervelet coordonne les mouvements et l'équilibre." }
  ]
});
