TOPIC('fr', {
  id: "l1-fra-quotidien",
  title: "La vie quotidienne",
  intro: "« Le matin, <b>je me lève</b> à sept heures, je prends mon petit-déjeuner avec ma famille et je vais au lycée. » Parler de sa journée est la première vraie utilisation pratique du français : la <b>famille</b>, la <b>maison</b>, l'<b>école</b>, les <b>horaires</b> et la <b>routine</b> sont les sujets de chaque échange et de chaque examen A1-A2. Nous allons apprendre le vocabulaire, les <b>possessifs</b>, la façon de dire l'<b>heure</b> et les <b>verbes pronominaux</b> (je me lève, je me couche). 🏠⏰",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. La famille",
      html: `<table>
<tr><th>Masculin</th><th>Qui est-ce ?</th><th>Féminin</th><th>Qui est-ce ?</th></tr>
<tr><td>le <b>père</b> / le papa</td><td>le parent homme</td><td>la <b>mère</b> / la maman</td><td>le parent femme</td></tr>
<tr><td>le <b>frère</b></td><td>le fils de mes parents</td><td>la <b>sœur</b></td><td>la fille de mes parents</td></tr>
<tr><td>le <b>grand-père</b></td><td>le père de mon père ou de ma mère</td><td>la <b>grand-mère</b></td><td>la mère de mon père ou de ma mère</td></tr>
<tr><td>l'<b>oncle</b></td><td>le frère d'un de mes parents</td><td>la <b>tante</b></td><td>la sœur d'un de mes parents</td></tr>
<tr><td>le <b>cousin</b></td><td>le fils de mon oncle ou de ma tante</td><td>la <b>cousine</b></td><td>la fille de mon oncle ou de ma tante</td></tr>
<tr><td>le <b>fils</b></td><td>l'enfant garçon</td><td>la <b>fille</b></td><td>l'enfant fille / une jeune fille</td></tr>
<tr><td>le <b>mari</b></td><td>l'homme marié</td><td>la <b>femme</b></td><td>l'épouse / une femme</td></tr>
</table>
<p>Le père et la mère, ce sont <b>les parents</b> (attention, faux ami pour les italophones : <i>parents</i> ne veut pas dire « parenti » !). L'ensemble des personnes de la famille, c'est <i>la famille</i>. <b>Les grands-parents</b> = le grand-père et la grand-mère. <b>Un enfant</b> = un garçon ou une fille, ou le fils / la fille de quelqu'un. <b>Un frère aîné</b> / <b>cadet</b> = le frère le plus âgé / le plus jeune.</p>
<p>Pour parler de sa famille :</p>
<ul>
<li><b>Tu as des frères et sœurs ?</b> → <i>J'ai un frère et deux sœurs.</i> / <i>Je suis fils unique</i> (garçon) / <i>fille unique</i> (fille).</li>
<li><b>Ma mère s'appelle Claire. Elle a quarante-cinq ans. Elle est professeure.</b></li>
</ul>`
    },
    {
      type: "text",
      title: "2. Les possessifs : mon, ma, mes…",
      html: `<p>Le possessif français s'accorde avec la <b>chose possédée</b> (genre et nombre), et non avec le possesseur !</p>
<table>
<tr><th>Possesseur</th><th>Masculin sing.</th><th>Féminin sing.</th><th>Pluriel</th></tr>
<tr><td>je</td><td><b>mon</b> frère</td><td><b>ma</b> sœur</td><td><b>mes</b> frères / sœurs</td></tr>
<tr><td>tu</td><td><b>ton</b> père</td><td><b>ta</b> mère</td><td><b>tes</b> parents</td></tr>
<tr><td>il / elle</td><td><b>son</b> frère</td><td><b>sa</b> sœur</td><td><b>ses</b> parents</td></tr>
<tr><td>nous</td><td colspan="2"><b>notre</b> maison</td><td><b>nos</b> amis</td></tr>
<tr><td>vous</td><td colspan="2"><b>votre</b> classe</td><td><b>vos</b> livres</td></tr>
<tr><td>ils / elles</td><td colspan="2"><b>leur</b> chien</td><td><b>leurs</b> chiens</td></tr>
</table>
<ul>
<li><b>Son / sa / ses</b> s'emploient aussi bien pour un possesseur masculin que féminin : c'est le contexte qui l'indique. <i>Paul parle à sa sœur</i> (la sœur de Paul) et <i>Marie parle à sa sœur</i> (la sœur de Marie).</li>
<li>Devant un nom féminin qui commence par une <b>voyelle</b>, on emploie <b>mon / ton / son</b> pour éviter la rencontre de deux voyelles : <i>mon amie, ton école, son idée</i>.</li>
<li>En français, <b>on n'emploie pas d'article</b> avec le possessif : <i>mon frère</i> (et non <s>le mon frère</s>, contrairement à l'italien « il mio fratello »).</li>
</ul>`
    },
    {
      type: "svg",
      title: "L'arbre généalogique",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="15" width="170" height="40" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
<text x="145" y="41" font-size="15" text-anchor="middle" fill="#1e3a8a">le grand-père</text>
<rect x="370" y="15" width="170" height="40" rx="10" fill="#fce7f3" stroke="#db2777" stroke-width="2"/>
<text x="455" y="41" font-size="15" text-anchor="middle" fill="#831843">la grand-mère</text>
<line x1="230" y1="35" x2="370" y2="35" stroke="#64748b" stroke-width="2"/>
<line x1="300" y1="35" x2="300" y2="95" stroke="#64748b" stroke-width="2"/>
<line x1="120" y1="95" x2="480" y2="95" stroke="#64748b" stroke-width="2"/>
<line x1="120" y1="95" x2="120" y2="110" stroke="#64748b" stroke-width="2"/>
<line x1="300" y1="95" x2="300" y2="110" stroke="#64748b" stroke-width="2"/>
<line x1="480" y1="95" x2="480" y2="110" stroke="#64748b" stroke-width="2"/>
<rect x="45" y="110" width="150" height="38" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
<text x="120" y="135" font-size="15" text-anchor="middle" fill="#14532d">l'oncle / la tante</text>
<rect x="225" y="110" width="150" height="38" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
<text x="300" y="135" font-size="15" text-anchor="middle" fill="#14532d">le père + la mère</text>
<rect x="405" y="110" width="150" height="38" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
<text x="480" y="135" font-size="15" text-anchor="middle" fill="#14532d">l'oncle / la tante</text>
<line x1="300" y1="148" x2="300" y2="185" stroke="#64748b" stroke-width="2"/>
<line x1="170" y1="185" x2="430" y2="185" stroke="#64748b" stroke-width="2"/>
<line x1="170" y1="185" x2="170" y2="200" stroke="#64748b" stroke-width="2"/>
<line x1="300" y1="185" x2="300" y2="200" stroke="#64748b" stroke-width="2"/>
<line x1="430" y1="185" x2="430" y2="200" stroke="#64748b" stroke-width="2"/>
<rect x="105" y="200" width="130" height="38" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
<text x="170" y="225" font-size="15" text-anchor="middle" fill="#78350f">mon frère</text>
<rect x="235" y="200" width="130" height="38" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
<text x="300" y="225" font-size="15" text-anchor="middle" fill="#78350f" font-weight="bold">MOI</text>
<rect x="365" y="200" width="130" height="38" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
<text x="430" y="225" font-size="15" text-anchor="middle" fill="#78350f">ma sœur</text>
<text x="300" y="275" font-size="14" text-anchor="middle" fill="#334155">mon cousin / ma cousine = les enfants de mon oncle / ma tante</text>
</svg>`,
      caption: "Mon, ma, mes s'accordent avec le nom qui suit : mon frère, ma sœur, mes parents."
    },
    {
      type: "remember",
      title: "Parents = le père et la mère",
      html: `<p><b>Les parents</b> = le père et la mère. Pour parler de toute la famille au sens large, on dit <b>la famille</b> ou <b>les proches</b>. C'est un faux ami classique pour un Italien (« parenti ») : <i>Mes parents habitent à Lyon</i> = mon père et ma mère habitent à Lyon.</p>`
    },
    {
      type: "text",
      title: "3. La maison et l'école",
      html: `<p><b>La maison / l'appartement</b> :</p>
<ul>
<li>le <b>salon</b> (pièce où l'on reçoit et se détend), la <b>salle à manger</b>, la <b>cuisine</b>, la <b>chambre</b> (pièce où l'on dort), la <b>salle de bains</b>, les <b>toilettes</b> / les WC, le <b>couloir</b>, le <b>balcon</b>, le <b>jardin</b>, le <b>garage</b>, l'<b>escalier</b>.</li>
<li>Objets : <i>un lit, une table, une chaise, un bureau, une armoire, un canapé, une lampe, une fenêtre, une porte</i>.</li>
<li><b>Où est ... ? / Il y a ...</b> → <i>Dans ma chambre, il y a un lit et un bureau.</i></li>
<li>Prépositions de lieu : <b>dans</b>, <b>sur</b>, <b>sous</b>, <b>devant</b>, <b>derrière</b>, <b>à côté de</b>, <b>entre</b>, <b>en face de</b>.</li>
</ul>
<p><b>L'école / le lycée</b> :</p>
<ul>
<li>le <b>professeur</b> (ou la professeure), l'<b>élève</b>, la <b>classe</b>, le <b>cours</b>, la <b>salle de classe</b>, le <b>cahier</b>, le <b>stylo</b>, le <b>cartable</b>, la <b>trousse</b>, la <b>règle</b>, la <b>gomme</b>, le <b>tableau</b>, la <b>cantine</b>, la <b>cour</b>, la <b>récréation</b>.</li>
<li>Matières : <b>le français</b>, <b>l'italien</b>, <b>l'anglais</b>, <b>les maths</b>, <b>l'histoire</b>, <b>la géographie</b>, <b>la physique</b>, <b>la chimie</b>, <b>les SVT</b> (sciences de la vie et de la Terre), <b>l'EPS</b> (éducation physique et sportive), <b>le dessin</b>, <b>la musique</b>.</li>
<li><b>J'aime</b> / <b>j'adore</b> / <b>je déteste</b> + article défini : <i>J'adore les maths. Je déteste l'histoire.</i></li>
</ul>
<p>Le système scolaire français est différent du système italien : <b>l'école primaire</b> (6-11 ans), <b>le collège</b> (11-15 ans, de la 6ᵉ à la 3ᵉ), <b>le lycée</b> (15-18 ans, de la seconde à la terminale), puis le <b>baccalauréat</b> (le « bac »). On compte à rebours : 6ᵉ, 5ᵉ, 4ᵉ, 3ᵉ, <i>seconde</i>, <i>première</i>, <i>terminale</i>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : famille, maison et école",
      questions: [
        { type: "mc", q: "___ sœur s'appelle Léa. (la sœur de moi)", options: ["Mon", "Ma", "Mes"], answer: 1, explain: "Sœur est féminin singulier → ma sœur." },
        { type: "mc", q: "Les parents de Paul sont…", options: ["toute la famille de Paul", "le père et la mère de Paul", "les frères de Paul"], answer: 1, explain: "Parents = le père et la mère (faux ami de l'italien « parenti »)." },
        { type: "tf", q: "On dit « le mon livre ».", answer: false, explain: "Avec le possessif, on n'emploie pas d'article : mon livre." },
        { type: "text", q: "Comment s'appelle la pièce où l'on prépare les repas ? (article + nom)", answer: ["la cuisine"], explain: "La cuisine." }
      ]
    },
    {
      type: "text",
      title: "4. Dire l'heure et les jours",
      html: `<p>Question : <b>Quelle heure est-il ?</b> / <b>Il est quelle heure ?</b> → Réponse : <b>Il est + nombre + heure(s)</b>.</p>
<table>
<tr><th>Heure</th><th>En toutes lettres</th></tr>
<tr><td>7:00</td><td>Il est <b>sept heures</b>.</td></tr>
<tr><td>7:15</td><td>Il est sept heures <b>et quart</b>.</td></tr>
<tr><td>7:30</td><td>Il est sept heures <b>et demie</b>.</td></tr>
<tr><td>7:45</td><td>Il est huit heures <b>moins le quart</b>.</td></tr>
<tr><td>7:10</td><td>Il est sept heures <b>dix</b>.</td></tr>
<tr><td>7:50</td><td>Il est huit heures <b>moins dix</b>.</td></tr>
<tr><td>12:00</td><td>Il est <b>midi</b>.</td></tr>
<tr><td>00:00</td><td>Il est <b>minuit</b>.</td></tr>
<tr><td>13:30</td><td>Il est une heure et demie (ou <i>treize heures trente</i>, heure officielle)</td></tr>
</table>
<p>Pour l'heure officielle (horaires des trains, programmes), on utilise le format 24 heures : <i>Le train part à dix-huit heures quarante-cinq.</i></p>
<p><b>À quelle heure ?</b> → <b>À</b> sept heures. <i>Le cours commence <b>à</b> huit heures et finit <b>à</b> quatre heures.</i> Pour distinguer le matin et l'après-midi : <b>du matin / de l'après-midi / du soir</b>.</p>
<p><b>Les jours</b> (toujours avec une minuscule, masculins) : <b>lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche</b>. <i>Lundi</i> = ce lundi-ci ; <i>le lundi</i> = chaque lundi. <b>Les mois</b> : janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre. <b>La date</b> : <i>Nous sommes le 27 novembre.</i> (le premier jour du mois : <i>le premier</i>).</p>`
    },
    {
      type: "text",
      title: "5. La routine : les verbes pronominaux",
      html: `<p>Beaucoup d'actions quotidiennes s'expriment avec des <b>verbes pronominaux</b> (<i>se lever, se laver, s'habiller, se coucher, se réveiller, se brosser les dents, s'appeler, se promener</i>), comme en italien. Le pronom réfléchi se place <b>devant le verbe</b> :</p>
<table>
<tr><th>Pronom</th><th>SE LEVER</th><th>S'HABILLER</th></tr>
<tr><td>je</td><td>je <b>me</b> lève</td><td>je <b>m'</b>habille</td></tr>
<tr><td>tu</td><td>tu <b>te</b> lèves</td><td>tu <b>t'</b>habilles</td></tr>
<tr><td>il / elle / on</td><td>il <b>se</b> lève</td><td>il <b>s'</b>habille</td></tr>
<tr><td>nous</td><td>nous <b>nous</b> levons</td><td>nous <b>nous</b> habillons</td></tr>
<tr><td>vous</td><td>vous <b>vous</b> levez</td><td>vous <b>vous</b> habillez</td></tr>
<tr><td>ils / elles</td><td>ils <b>se</b> lèvent</td><td>ils <b>s'</b>habillent</td></tr>
</table>
<p>Une journée type :</p>
<ol>
<li>Je <b>me réveille</b> à sept heures et je <b>me lève</b>.</li>
<li>Je <b>me douche</b> (ou je prends une douche), je <b>m'habille</b> et je <b>prends mon petit-déjeuner</b>.</li>
<li>Je <b>vais</b> au lycée à pied ou en bus. Les cours <b>commencent</b> à huit heures.</li>
<li>À midi, je <b>mange</b> à la cantine avec mes amis.</li>
<li>L'après-midi, j'<b>ai</b> des cours jusqu'à seize heures. Puis je <b>rentre</b> à la maison, je <b>fais</b> mes devoirs et je <b>joue</b> au foot.</li>
<li>Le soir, nous <b>dînons</b> en famille. Je <b>me couche</b> vers vingt-deux heures.</li>
</ol>
<p><b>Mots pour enchaîner</b> : <i>d'abord, puis / ensuite, après, enfin</i>. <b>Fréquence</b> : <i>toujours, souvent, quelquefois, rarement, ne… jamais, tous les jours, le week-end</i>.</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : une journée de Léa",
      html: `<p>📖 <i>Je m'appelle Léa, j'ai quinze ans et j'habite à Lyon avec ma famille : mon père, ma mère et mon petit frère Tom. <b>Le matin</b>, je me réveille à sept heures et je me lève à sept heures et quart. Je prends mon petit-déjeuner avec Tom : du pain, du beurre et du chocolat chaud. Nous partons de la maison à huit heures moins le quart et nous allons au lycée en bus. <b>Les cours</b> commencent à huit heures et demie. J'ai maths le lundi, histoire le mardi, EPS le jeudi. À midi, je mange à la cantine. <b>L'après-midi</b>, le dernier cours finit à seize heures. Je rentre, je fais mes devoirs puis je regarde une série. <b>Le soir</b>, nous dînons à dix-neuf heures trente. Je me couche vers vingt-deux heures.</i></p>
<p>Essaie de réécrire le texte avec tes horaires : en 10 lignes, tu as déjà une présentation orale de niveau A2 !</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : décrire sa chambre",
      html: `<p>🛏️ <i>Ma chambre est petite mais confortable. <b>Dans</b> ma chambre, il y a un lit, un bureau et une armoire. Mon bureau est <b>devant</b> la fenêtre. Mes livres sont <b>sur</b> l'étagère, <b>à côté de</b> mon ordinateur. <b>Sous</b> le lit, il y a mon sac de sport. Il y a un poster de mon groupe préféré <b>au-dessus de</b> mon lit. Je partage ma chambre avec mon frère, mais j'aimerais avoir une chambre pour moi seule !</i></p>
<p>Remarque : <i>il y a</i> + article indéfini : <i>il y a un lit</i>. On ne dit jamais <i>il est un lit</i> !</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? En français, la semaine commence le lundi",
      html: `<p>En français, la semaine commence le <b>lundi</b> et les noms des jours viennent des astres latins : <i>lundi</i> (la Lune), <i>mardi</i> (Mars), <i>mercredi</i> (Mercure), <i>jeudi</i> (Jupiter), <i>vendredi</i> (Vénus), <i>samedi</i> (de <i>sabbati dies</i>, jour du sabbat juif), <i>dimanche</i> (<i>dies dominica</i>, jour du Seigneur).</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? En France, on déjeune longtemps et on dîne tard",
      html: `<p>La journée française est rythmée par les <b>repas</b> : le <i>petit-déjeuner</i> (le matin), le <i>déjeuner</i> (à midi) et le <i>dîner</i> (vers 19 h 30–20 h). Le <b>goûter</b> est le repas des enfants vers 16 h 30 (souvent un pain au chocolat ou une baguette avec du chocolat). Au Canada et en Belgique, les repas s'appellent au contraire <i>déjeuner</i> (le matin), <i>dîner</i> (à midi) et <i>souper</i> (le soir) : attention si tu voyages !</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de retenir le vocabulaire du quotidien",
      intro: "Le vocabulaire s'apprend mieux par associations, images et répétition.",
      tabs: [
        {
          label: "🏠 Le palais de la mémoire",
          html: `<p>Imagine que tu te promènes dans ta maison et <b>colle mentalement une étiquette</b> en français sur chaque objet : <i>la porte, le couloir, la cuisine, le frigo, la chambre, le lit, l'armoire</i>. Quand tu entres dans une vraie pièce de chez toi, prononce deux mots à voix haute. En quelques jours, le vocabulaire devient automatique, parce qu'il est lié à un lieu.</p>`
        },
        {
          label: "🕐 Avec l'horloge",
          html: `<p>Dessine un cadran et répète les formules : <b>et quart</b> (quinze minutes après l'heure), <b>et demie</b> (trente minutes après), <b>moins le quart</b> (quinze minutes avant l'heure suivante), <b>moins dix</b> (dix minutes avant l'heure suivante). Pour lire vite l'heure officielle (24 heures), souviens-toi qu'après midi on peut enlever 12 : 15:00 = <i>trois heures de l'après-midi</i>.</p>`
        },
        {
          label: "🧩 Jeu : où va ce mot ?",
          html: `<p>Classe les mots dans la bonne catégorie :</p>`,
          widget: "classify",
          options: {
            groups: ["🏠 La maison", "🏫 L'école", "👪 La famille"],
            items: [["la cuisine", 0], ["la chambre", 0], ["le salon", 0], ["le professeur", 1], ["le cahier", 1], ["la cantine", 1], ["la tante", 2], ["le grand-père", 2], ["le cousin", 2], ["la salle de bains", 0], ["la trousse", 1], ["la sœur", 2]]
          }
        },
        {
          label: "🎴 Cartes : les prépositions de lieu",
          html: `<p>Essaie de trouver un exemple avant de retourner la carte :</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "dans", back: "à l'intérieur : le stylo est dans la trousse" },
              { front: "sur", back: "dessus : le livre est sur la table" },
              { front: "sous", back: "dessous : le chat est sous le lit" },
              { front: "devant", back: "en avant de : le bureau est devant la fenêtre" },
              { front: "derrière", back: "en arrière de : le jardin est derrière la maison" },
              { front: "à côté de", back: "tout près de : la lampe est à côté du lit" },
              { front: "entre", back: "au milieu de deux choses : la chaise est entre la table et l'armoire" },
              { front: "en face de", back: "de l'autre côté, face à face : l'école est en face de la gare" }
            ]
          }
        }
      ]
    },
    {
      type: "widget",
      title: "Associe l'horaire à la phrase",
      widget: "match",
      options: {
        pairs: [
          ["8:15", "Il est huit heures et quart."],
          ["8:30", "Il est huit heures et demie."],
          ["8:45", "Il est neuf heures moins le quart."],
          ["12:00", "Il est midi."],
          ["7:10", "Il est sept heures dix."],
          ["7:50", "Il est huit heures moins dix."]
        ]
      },
      caption: "Après la demie, on « avance » avec moins : on part de l'heure suivante et on enlève les minutes."
    },
    {
      type: "conceptMap",
      title: "Carte de la journée : touche les nœuds pour découvrir le pourquoi",
      nodes: [
        { id: "fam", label: "La famille", x: 15, y: 8, color: "#2563eb", html: "père, mère, frère, sœur, grands-parents…", why: "Beaucoup de mots de la parenté viennent du latin (<i>pater, mater, frater, soror</i>). <i>Parents</i> vient de <i>parentes</i> = « ceux qui donnent naissance » (<i>parere</i> = enfanter) : d'où le faux ami avec l'italien « parenti »." },
        { id: "poss", label: "Possessifs", x: 50, y: 8, color: "#16a34a", html: "mon, ma, mes ; ton, ta, tes ; son, sa, ses…", why: "Ils s'accordent avec la chose possédée parce qu'ils viennent des adjectifs latins <i>meus, mea, meum</i>. Devant une voyelle, on emploie mon (mon amie) parce que ma + a- serait difficile à prononcer." },
        { id: "maison", label: "La maison", x: 85, y: 8, color: "#d97706", html: "salon, cuisine, chambre, salle de bains…", why: "<i>Chambre</i> vient du latin <i>camera</i> (pièce voûtée). En italien, <i>camera</i> a le même sens, en anglais <i>chamber</i>. Les noms des pièces montrent l'origine latine commune des langues romanes." },
        { id: "ecole", label: "L'école", x: 20, y: 42, color: "#a855f7", html: "classe, cours, matières, cantine.", why: "Les <i>lycées</i> ont été créés en 1802 sous Napoléon ; leur nom rappelle le <i>Lycée</i> (Lýkeion) d'Aristote. En France, on compte les années à rebours : de la 6ᵉ (11 ans) à la 3ᵉ, puis seconde, première, terminale." },
        { id: "heure", label: "L'heure", x: 50, y: 42, color: "#f97316", html: "Il est … heures ; et quart, et demie, moins le quart.", why: "Le français dit « moins le quart » au lieu de « quarante-cinq » : c'est une formule commune aux langues romanes (l'italien dit « le nove meno un quarto »). Dans le système de 24 heures (trains, télévision), on lit le nombre entier." },
        { id: "refl", label: "Verbes pronominaux", x: 80, y: 42, color: "#0ea5e9", html: "me lève, te lèves, se lève…", why: "Le pronom réfléchi indique que l'action retombe sur le sujet : se lever = « lever soi-même ». La construction ressemble à l'italien, mais en français le pronom se place toujours devant le verbe conjugué." },
        { id: "rout", label: "La routine", x: 35, y: 76, color: "#dc2626", html: "d'abord, puis, ensuite, enfin.", why: "Les mots de liaison organisent le récit en étapes. Ils sont essentiels à chaque épreuve orale et écrite, parce qu'ils donnent une structure logique à une description." },
        { id: "meal", label: "Les repas", x: 70, y: 76, color: "#14b8a6", html: "petit-déjeuner, déjeuner, goûter, dîner.", why: "<i>Déjeuner</i> = rompre le jeûne (<i>dé</i> + <i>jeûner</i>) : à l'origine, c'était le repas du matin. Puis le déplacement des repas dans la journée a aussi déplacé les noms (la Belgique et le Canada ont gardé l'usage ancien)." }
      ],
      edges: [
        ["fam", "poss", "mon père"],
        ["maison", "ecole", "lieux"],
        ["ecole", "heure", "horaires"],
        ["heure", "refl", "routine"],
        ["refl", "rout", "étapes"],
        ["rout", "meal", "journée"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : l'heure et la routine",
      questions: [
        { type: "mc", q: "Comment dit-on 8:45 ?", options: ["huit heures et quart", "neuf heures moins le quart", "huit heures moins le quart"], answer: 1, explain: "8:45 = quinze minutes avant neuf heures : neuf heures moins le quart." },
        { type: "mc", q: "Je ___ à sept heures. (se réveiller)", options: ["réveille", "me réveille", "se réveille"], answer: 1, explain: "Verbe pronominal avec je : me réveille." },
        { type: "tf", q: "En français, « son frère » s'emploie seulement quand le possesseur est un homme.", answer: false, explain: "Son/sa/ses s'emploient pour un possesseur masculin ou féminin ; le contexte l'indique." },
        { type: "text", q: "Complète : « Je mange ___ » (à 12 heures ; deux mots : à + ...)", answer: ["à midi", "a midi"], explain: "À midi." }
      ]
    }
  ],
  glossary: [
    { t: "Les parents", d: "Le père et la mère (faux ami de l'italien « parenti »)." },
    { t: "Adjectif possessif", d: "mon, ma, mes… s'accorde avec la chose possédée." },
    { t: "Il y a", d: "Expression invariable pour dire qu'une chose existe dans un lieu." },
    { t: "Verbe pronominal", d: "Verbe avec un pronom réfléchi (me, te, se, nous, vous, se) : se lever, se coucher." },
    { t: "Et quart / et demie / moins le quart", d: "Formules pour 15, 30 et 45 minutes dans l'heure." },
    { t: "Matière", d: "Discipline scolaire : les maths, l'histoire, l'EPS…" },
    { t: "Le bac", d: "Le baccalauréat, examen de fin de lycée en France." },
    { t: "Le goûter", d: "Petit repas de l'après-midi, typique des enfants français." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Tu as des frères et ___ ?", options: ["sœurs", "sœur", "mères"], answer: 0, explain: "Frères et sœurs : expression toujours au pluriel." },
      { type: "mc", q: "Comment dit-on « les parents de moi » avec un possessif ?", options: ["mon parents", "mes parents", "ma parents"], answer: 1, explain: "Pluriel → mes : mes parents." },
      { type: "text", q: "Écris l'heure 7:30 en toutes lettres. (Il est sept heures ...)", answer: ["et demie", "sept heures et demie"], explain: "Il est sept heures et demie." },
      { type: "mc", q: "Dans mon salon, ___ un canapé.", options: ["il est", "il y a", "c'est"], answer: 1, explain: "Pour dire qu'une chose existe dans un lieu : il y a." },
      { type: "tf", q: "En français, on dit « ma amie ».", answer: false, explain: "Devant une voyelle, on emploie mon : mon amie." },
      { type: "mc", q: "Il se ___ (coucher) à dix heures.", options: ["couche", "couches", "couchent"], answer: 0, explain: "Il + se couche." },
      { type: "order", q: "Remets la phrase dans l'ordre : Je / me / lève / à / sept heures", items: ["Je", "me", "lève", "à", "sept heures"], explain: "Sujet + pronom réfléchi + verbe + complément de temps." },
      { type: "mc", q: "Dans ma chambre, mon lit est ___ la fenêtre (face à face).", options: ["en face de", "sous", "entre"], answer: 0, explain: "En face de = face à face, de l'autre côté." },
      { type: "tf", q: "Le lycée français dure trois ans : seconde, première et terminale.", answer: true, explain: "Oui : de 15 à 18 ans, puis le baccalauréat." },
      { type: "mc", q: "Comment s'appelle le petit repas de l'après-midi ?", options: ["le goûter", "le dîner", "le déjeuner"], answer: 0, explain: "Le goûter se prend vers 16 h 30." }
    ]
  }
});
