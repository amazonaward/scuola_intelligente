TOPIC('fr', {
  id: "l1-sto-alessandro-ellenismo",
  title: "Alexandre le Grand et l'époque hellénistique",
  intro: "En un peu plus de <b>dix ans</b>, entre 334 et 323 av. J.-C., un roi de vingt ans, parti d'un royaume aux marges du monde grec, conquit le plus grand empire jamais vu, de la Méditerranée à l'Inde. Il mourut à 32 ans, sans avoir réglé sa succession. Mais son aventure changea le monde : de ses conquêtes naquit une civilisation nouvelle, l'<b>époque hellénistique</b>, où la langue et la culture grecques se mêlèrent à celles de l'Égypte, de la Perse et de l'Asie. Dans cette leçon, nous suivons Alexandre et découvrons quel fut l'héritage qu'il laissa.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. La Macédoine de Philippe II",
      html: `<p>La <b>Macédoine</b>, au nord de la Grèce, était un royaume de bergers et de paysans gouverné par des rois et des nobles guerriers. Les Grecs la considéraient comme à demi barbare, même si ses rois parlaient grec. Avec <b>Philippe II</b> (359-336 av. J.-C.), elle devint la puissance dominante :</p>
<ul>
<li><b>Armée réformée</b> : infanterie armée de la <b>sarisse</b> (une lance d'environ 5 à 6 mètres) en <b>phalange</b> serrée, cavalerie des <b>Compagnons</b>, techniques de siège.</li>
<li><b>Ressources</b> : les mines d'or du mont Pangée, qui financèrent l'armée et la diplomatie.</li>
<li><b>Politique</b> : profitant des divisions entre les cités (affaiblies par la guerre du Péloponnèse), Philippe s'imposa peu à peu. En <b>338 av. J.-C.</b>, à <b>Chéronée</b>, il battit Athènes et Thèbes. L'orateur athénien <b>Démosthène</b> avait mis en garde contre lui dans ses « Philippiques » : trop tard.</li>
<li>En 337 av. J.-C., il créa la <b>Ligue de Corinthe</b> : toutes les cités (sauf Sparte) juraient alliance et reconnaissaient Philippe comme chef, pour faire la guerre à la Perse.</li>
</ul>
<p>Philippe fut assassiné en <b>336 av. J.-C.</b> pendant les noces de sa fille. Son fils <b>Alexandre</b> lui succéda.</p>`
    },
    {
      type: "text",
      title: "2. Alexandre : jeunesse et premiers pas",
      html: `<p><b>Alexandre</b> naquit en <b>356 av. J.-C.</b> à Pella, fils de Philippe II et d'Olympias. À 13 ans, il eut pour maître le philosophe <b>Aristote</b>, qui lui transmit l'amour d'Homère, de la science et de la géographie. À 16 ans, il gouverna le royaume pendant une absence de son père ; à 18 ans, il commanda la cavalerie à Chéronée. Il monta sur le trône à <b>20 ans</b> (336 av. J.-C.), soumit rapidement les rebelles (il détruisit Thèbes en 335 av. J.-C.) et, en <b>334 av. J.-C.</b>, franchit l'Hellespont avec environ 40 000 hommes : Macédoniens, Grecs alliés, Thraces.</p>
<p>Son but déclaré était de venger l'invasion perse de Xerxès et de libérer les Grecs d'Asie. Mais l'entreprise prit vite une dimension nouvelle : la conquête de l'Empire perse.</p>`
    },
    {
      type: "3d",
      title: "Carte 3D : la marche d'Alexandre (334-323 av. J.-C.)",
      scene: "spacetime",
      caption: "La base est la carte de la mer Égée à l'Inde, la hauteur représente le temps (336-320 av. J.-C.). Touche les événements pour voir les étapes de la conquête.",
      options: {
        lat: [24, 44],
        lon: [20, 78],
        years: [-337, -320],
        places: [
          { lat: 40.76, lon: 22.52, label: "Pella" },
          { lat: 32.5, lon: 44.4, label: "Babylone" },
          { lat: 29.9, lon: 52.9, label: "Persépolis" },
          { lat: 31.2, lon: 29.9, label: "Alexandrie" }
        ],
        events: [
          { id: "pella", lat: 40.76, lon: 22.52, year: -336, label: "Alexandre roi", html: "À la mort de Philippe II, Alexandre (20 ans) devient roi de Macédoine. Il réprime les révoltes en Grèce.", causes: [] },
          { id: "granico", lat: 40.2, lon: 27.3, year: -334, label: "Granique", html: "Printemps 334 av. J.-C. : première bataille contre les satrapes perses ; victoire macédonienne et contrôle de l'Asie Mineure.", causes: ["pella"] },
          { id: "isso", lat: 36.8, lon: 36.2, year: -333, label: "Issos", html: "En 333 av. J.-C., Alexandre bat le roi perse Darius III, qui s'enfuit en abandonnant sa famille.", causes: ["granico"] },
          { id: "tiro", lat: 33.27, lon: 35.2, year: -332, label: "Siège de Tyr", html: "Après sept mois, en 332 av. J.-C., Alexandre prend Tyr en construisant une digue jusqu'à l'île.", causes: ["isso"] },
          { id: "egitto", lat: 31.2, lon: 29.9, year: -331, label: "Égypte et Alexandrie", html: "Les Égyptiens l'accueillent comme un libérateur face aux Perses. En 331 av. J.-C., il fonde <b>Alexandrie</b>, qui deviendra la capitale de la culture hellénistique.", causes: ["tiro"] },
          { id: "gaugamela", lat: 36.4, lon: 43.3, year: -331, label: "Gaugamèles", html: "Le 1er octobre 331 av. J.-C., victoire décisive sur Darius III. Alexandre entre à Babylone, puis à Suse.", causes: ["egitto"] },
          { id: "persepoli", lat: 29.93, lon: 52.9, year: -330, label: "Persépolis", html: "En 330 av. J.-C., Alexandre prend Persépolis, capitale cérémonielle, et son palais est incendié. Darius III est assassiné par les siens.", causes: ["gaugamela"] },
          { id: "battriana", lat: 36.7, lon: 67.1, year: -329, label: "Bactriane et Sogdiane", html: "Entre 329 et 327 av. J.-C., campagnes difficiles en Asie centrale. Il épouse la princesse Roxane.", causes: ["persepoli"] },
          { id: "idaspe", lat: 32.7, lon: 73.4, year: -326, label: "Hydaspe", html: "En 326 av. J.-C., il bat le roi indien Poros sur l'Hydaspe. Aux portes de l'Inde, l'armée, épuisée, refuse d'aller plus loin.", causes: ["battriana"] },
          { id: "babilonia", lat: 32.54, lon: 44.42, year: -323, label: "Mort à Babylone", html: "Juin 323 av. J.-C. : Alexandre meurt à Babylone, à 32 ans (de fièvre, peut-être le paludisme ou le typhus ; la cause reste incertaine). L'empire est sans héritier adulte.", causes: ["idaspe"] }
        ]
      }
    },
    {
      type: "text",
      title: "3. Les conquêtes : du Granique à l'Inde",
      html: `<p>La conquête se fit par étapes :</p>
<ul>
<li><b>334 av. J.-C., le Granique</b> : victoire sur les satrapes perses et contrôle de l'Asie Mineure.</li>
<li><b>333 av. J.-C., Issos</b> : le roi perse <b>Darius III</b> est battu en Cilicie et s'enfuit.</li>
<li><b>332 av. J.-C.</b> : siège et destruction de <b>Tyr</b>, puis l'<b>Égypte</b> se rend sans combattre ; dans l'oasis de Siwa, les prêtres le saluent comme fils d'Amon (le Zeus égyptien).</li>
<li><b>331 av. J.-C., Gaugamèles</b> : nouvelle victoire contre une armée perse bien plus nombreuse ; Alexandre devient le « Grand Roi » de Perse.</li>
<li><b>330 av. J.-C.</b> : Persépolis incendiée ; Darius III est tué par l'un de ses satrapes.</li>
<li><b>329-327 av. J.-C.</b> : Bactriane et Sogdiane (Afghanistan et Asie centrale) : une guérilla très dure.</li>
<li><b>326 av. J.-C.</b> : Inde du Nord-Ouest, victoire contre Poros sur l'<b>Hydaspe</b> ; puis, sur l'Hyphase, l'armée refuse d'aller plus loin.</li>
<li><b>325-324 av. J.-C.</b> : retour à travers le désert de Gédrosie (avec de lourdes pertes) ; à Suse, il célèbre des noces collectives entre Macédoniens et femmes perses pour fusionner les élites.</li>
<li><b>323 av. J.-C.</b> : il meurt à <b>Babylone</b>, à 32 ans, alors qu'il prépare de nouvelles expéditions.</li>
</ul>
<p><b>Comment a-t-il réussi ?</b> Grâce à une armée entraînée et fidèle, une excellente cavalerie, une tactique habile (il attaquait le point le plus faible, souvent à la tête de ses hommes), un grand courage personnel et… la faiblesse de l'Empire perse, immense mais peu uni. Le prix fut énorme : villes détruites, centaines de milliers de morts, exécutions même de ses plus fidèles.</p>`
    },
    {
      type: "svg",
      title: "L'empire d'Alexandre (schéma)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fef3c7"/>
<path d="M40 170 L70 150 L120 160 L130 190 L90 210 L50 200 Z" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<text x="85" y="185" font-size="14" text-anchor="middle" fill="#0f172a">Grèce</text>
<path d="M150 150 L300 120 L420 130 L500 160 L520 220 L400 250 L250 240 L160 210 Z" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="330" y="190" font-size="18" font-weight="bold" text-anchor="middle" fill="#7c2d12">EMPIRE D'ALEXANDRE</text>
<polyline points="90,175 170,170 230,160 280,190 330,200 400,170 490,160" fill="none" stroke="#dc2626" stroke-width="4" stroke-dasharray="8 6"/>
<g fill="#dc2626"><circle cx="90" cy="175" r="6"/><circle cx="170" cy="170" r="6"/><circle cx="230" cy="160" r="6"/><circle cx="280" cy="190" r="6"/><circle cx="330" cy="200" r="6"/><circle cx="400" cy="170" r="6"/><circle cx="490" cy="160" r="6"/></g>
<g font-size="14" fill="#0f172a" text-anchor="middle"><text x="170" y="150">Issos</text><text x="230" y="140">Égypte</text><text x="280" y="215">Babylone</text><text x="400" y="150">Persépolis</text><text x="490" y="145">Inde</text></g>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#7c2d12">334 – 323 av. J.-C. : environ 11 ans de campagne, plus de 20 000 km parcourus</text>
</svg>`,
      caption: "Carte très simplifiée de l'itinéraire ; la ligne en pointillés indique la marche vers l'est."
    },
    {
      type: "quiz",
      title: "Mini-quiz : Alexandre",
      questions: [
        { type: "mc", q: "Qui fut le maître d'Alexandre ?", options: ["Aristote", "Platon", "Socrate"], answer: 0, explain: "Aristote, philosophe grec." },
        { type: "mc", q: "Dans quelle bataille Alexandre a-t-il définitivement vaincu Darius III ?", options: ["Gaugamèles", "Marathon", "Hydaspe"], answer: 0, explain: "À Gaugamèles, en 331 av. J.-C." },
        { type: "tf", q: "Alexandre est mort à 32 ans à Babylone.", answer: true, explain: "En juin 323 av. J.-C." },
        { type: "text", q: "Quelle ville d'Égypte a-t-il fondée en 331 av. J.-C. ?", answer: ["alexandrie", "alexandrie d'égypte"], explain: "Alexandrie, sur la côte du delta du Nil." }
      ]
    },
    {
      type: "decision",
      title: "Sur l'Hyphase, 326 av. J.-C. : avancer ou rentrer ?",
      html: `<p>Tu es Alexandre. L'armée a parcouru des milliers de kilomètres en huit ans et a combattu sous les pluies de la mousson. Devant, au-delà de l'Hyphase, il y a d'autres royaumes indiens et, dit-on, une armée de centaines d'éléphants. Les soldats sont fatigués, malades, ils veulent revoir leur patrie. Ton général Coénos parle au nom de tous : « rentrons ».</p>`,
      question: "Que décides-tu ?",
      options: [
        { label: "Continuer vers l'est coûte que coûte, même contre la volonté de l'armée.", outcome: "Tu risques une mutinerie : sans l'accord des troupes, même un roi à demi divin ne peut pas commander. Ton prestige et ta vie seraient en danger." },
        { label: "Céder et faire demi-tour, en fondant de nouvelles villes et en consolidant l'empire.", outcome: "Tu sauves l'armée et tu peux organiser le territoire, même si tu renonces au rêve d'atteindre l'« Océan oriental ». Mais le retour est terrible : dans le désert de Gédrosie, de nombreux soldats meurent." },
        { label: "Renvoyer l'armée et continuer avec des volontaires locaux.", outcome: "Tu risques de perdre le noyau militaire macédonien et de te retrouver encerclé par des peuples hostiles." }
      ],
      answer: 1,
      explain: "Après trois jours enfermé dans sa tente, Alexandre dut céder : sur l'<b>Hyphase</b> (aujourd'hui le Beas), l'armée refusa d'aller plus loin. Il fit élever douze autels et fit demi-tour. Même les plus grands chefs dépendent de l'adhésion de ceux qui les suivent."
    },
    {
      type: "text",
      title: "4. Après Alexandre : les diadoques et les royaumes hellénistiques",
      html: `<p>Alexandre mourut sans héritier capable de régner (son fils Alexandre IV naquit après sa mort). Ses généraux, les <b>diadoques</b> (« successeurs »), se disputèrent l'empire au cours de longues guerres et, après la bataille d'<b>Ipsos</b> (301 av. J.-C.), trois grands royaumes se formèrent, auxquels s'en ajoutèrent d'autres :</p>
<ul>
<li><b>Royaume des Lagides (Ptolémées)</b> (Égypte) : fondé par <b>Ptolémée Ier</b>, capitale <b>Alexandrie</b>. Il dura jusqu'à la mort de <b>Cléopâtre VII</b> (30 av. J.-C.), dernière reine, quand Rome l'annexa.</li>
<li><b>Royaume des Séleucides</b> (Syrie, Mésopotamie, Perse) : fondé par <b>Séleucos Ier</b>, capitale Antioche ; le plus vaste, mais le plus difficile à maintenir uni.</li>
<li><b>Royaume des Antigonides</b> (Macédoine et Grèce) : plus traditionnel, proche de Rome.</li>
<li>Autres : le royaume de <b>Pergame</b> (Attalides), le royaume gréco-bactrien (Afghanistan), le royaume de Syracuse.</li>
</ul>
<p>Ces royaumes étaient des <b>monarchies absolues</b> : le roi était chef militaire, juge et parfois divinisé. Ils se faisaient sans cesse la guerre pour le contrôle de territoires comme la Syrie. Les anciennes cités grecques, de plus en plus petites et faibles, formèrent des ligues (comme la Ligue achéenne et la Ligue étolienne) pour résister.</p>`
    },
    {
      type: "text",
      title: "5. Qu'est-ce que l'époque hellénistique ?",
      html: `<p>Le terme <b>hellénistique</b> (forgé au XIXe siècle par l'Allemand Droysen) désigne la période qui va de la mort d'Alexandre (323 av. J.-C.) à la conquête romaine de l'Égypte (30 av. J.-C.), et la culture qui la caractérise : une <b>civilisation grecque élargie et métissée</b> avec les cultures orientales.</p>
<ul>
<li><b>Langue commune</b> : la <b>koinè</b>, un grec simplifié parlé et écrit de l'Égypte à la Perse. Le Nouveau Testament sera lui aussi écrit en koinè.</li>
<li><b>Nouvelles villes</b> : Alexandre et ses successeurs fondèrent des dizaines de villes au nom grec (les Alexandrie, les Antioche, les Séleucie) avec gymnases, théâtres, temples, marchés. Une nouvelle élite grecque gouvernait les populations locales.</li>
<li><b>Rencontre des cultures</b> : culte d'Isis et de Sérapis, art gréco-bouddhique du Gandhara (visages de Bouddha aux traits grecs), mélange des divinités.</li>
<li><b>Cosmopolitisme</b> : après la crise de la cité, l'homme ne se sent plus « citoyen d'une cité » mais <b>citoyen du monde</b> (<i>kosmopolítès</i>).</li>
<li><b>Économie</b> : grand commerce et monnaies communes, routes maritimes et caravanes jusqu'à l'Inde et la Chine.</li>
</ul>
<p>Mais tout le monde n'en profita pas : les Grecs dominaient, les populations locales restaient souvent à l'écart. Et les révoltes ne manquèrent pas, comme celle des Maccabées en Judée contre le roi séleucide Antiochos IV (167 av. J.-C.).</p>`
    },
    {
      type: "text",
      title: "6. Science, philosophie et art hellénistiques",
      html: `<p>Les rois hellénistiques finançaient la culture par prestige. Le centre en était <b>Alexandrie d'Égypte</b>, avec le <b>Musée</b> (institut de recherche) et la <b>Bibliothèque</b>, qui visait à rassembler tous les livres du monde (les estimations parlent de centaines de milliers de rouleaux). Le <b>Phare</b> d'Alexandrie (vers 280 av. J.-C., plus de 100 mètres) était l'une des sept merveilles du monde.</p>
<ul>
<li><b>Mathématiques</b> : <b>Euclide</b> écrivit les <i>Éléments</i> (vers 300 av. J.-C.), le manuel de géométrie utilisé pendant plus de deux mille ans. <b>Archimède</b> de Syracuse (287-212 av. J.-C.) calcula des aires et des volumes, trouva la loi du levier et le principe de l'hydrostatique (« Eurêka ! »).</li>
<li><b>Astronomie et géographie</b> : <b>Aristarque de Samos</b> proposa que la Terre tourne autour du Soleil. <b>Ératosthène</b> mesura la circonférence de la Terre (environ 40 000 km) grâce à l'ombre d'un bâton à Syène et à Alexandrie. <b>Hipparque</b> fit un catalogue des étoiles.</li>
<li><b>Médecine</b> : Hérophile et Érasistrate étudièrent l'anatomie et le système nerveux.</li>
<li><b>Philosophie</b> : <b>stoïcisme</b> (Zénon : vivre selon la raison et la nature, accepter le destin), <b>épicurisme</b> (Épicure : la sérénité intérieure, l'<i>ataraxie</i>), <b>scepticisme</b>, <b>cynisme</b>. Ces écoles cherchent le bonheur individuel dans un monde vaste et incertain.</li>
<li><b>Art</b> : plus dramatique et réaliste : le <b>Laocoon</b>, la <b>Victoire de Samothrace</b>, la <b>Vénus de Milo</b> ; portraits réalistes, scènes de la vie quotidienne.</li>
<li><b>Littérature</b> : naissance de la philologie (étude des textes) et poésie raffinée de Callimaque et de Théocrite.</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemple concret : mesurer la Terre avec un bâton",
      html: `<p><b>Ératosthène</b>, directeur de la Bibliothèque d'Alexandrie (vers 240 av. J.-C.), apprit qu'à Syène (aujourd'hui Assouan), le jour du solstice d'été à midi, le Soleil éclaire le fond d'un puits (il est au zénith). À Alexandrie, au même instant, un bâton vertical projette une ombre : l'angle est d'environ <b>7,2°</b>, soit 1/50 d'un tour complet.</p>
<ol>
<li>Si 7,2° correspondent à la distance Alexandrie-Syène (environ 5 000 stades),</li>
<li>alors la circonférence entière est 50 fois plus grande : 250 000 stades.</li>
<li>Avec la valeur la plus probable du stade (environ 157 à 185 m), on obtient environ <b>40 000 à 46 000 km</b> : à moins de 15 % de la vraie valeur (40 075 km).</li>
</ol>
<p>Avec une géométrie élémentaire, un bâton et une idée de génie, on mesura la planète. Tu peux refaire l'expérience avec un ami dans une autre ville et un gnomon !</p>`
    },
    {
      type: "example",
      title: "Exemple concret : des mots grecs d'aujourd'hui",
      html: `<p>La koinè et la science hellénistique nous ont laissé un vocabulaire immense : <b>géométrie</b> (mesure de la terre), <b>bibliothèque</b>, <b>musée</b> (maison des Muses), <b>philologie</b>, <b>cosmopolite</b>, <b>gymnase</b>. Quand nous disons <b>« épicurien »</b> (qui aime les plaisirs) ou <b>« stoïque »</b> (impassible), nous utilisons des mots des écoles hellénistiques, souvent avec un sens différent : pour Épicure, le plaisir, c'était surtout la sérénité de l'esprit, pas le luxe !</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Le nœud gordien",
      html: `<p>À Gordion, en Phrygie, un oracle affirmait que celui qui déferait un nœud très compliqué, qui attachait un char à son joug, deviendrait le maître de l'Asie. Selon la légende, Alexandre, n'arrivant pas à le défaire, le <b>trancha d'un coup d'épée</b>. D'où l'expression « trancher le nœud gordien » : résoudre un problème difficile par un geste radical.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Le tombeau perdu",
      html: `<p>Le corps d'Alexandre fut transporté en Égypte par Ptolémée Ier et enseveli à Alexandrie, où le tombeau fut visité pendant des siècles par des empereurs romains (Auguste, Caracalla). Puis on en perdit toute trace : malgré de nombreuses recherches, personne n'a jamais retrouvé le tombeau. C'est l'un des grands mystères de l'archéologie.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre l'époque hellénistique",
      intro: "Une civilisation qui réunit des mondes différents : voici quelques comparaisons.",
      tabs: [
        {
          label: "🍲 La soupe du monde",
          html: `<p>Imagine l'époque hellénistique comme une grande <b>soupe</b> : le bouillon, c'est la <b>culture grecque</b> (langue, philosophie, théâtre, villes), à laquelle s'ajoutent des ingrédients venus d'Orient (religions égyptiennes et perses, science babylonienne, art indien). Le résultat n'est ni seulement grec ni seulement oriental : c'est une culture <b>métissée</b>.</p>
<p>Exemple : un roi indo-grec de Bactriane, Ménandre (IIe s. av. J.-C.), dialogue avec un moine bouddhiste dans un texte célèbre, le « Milindapañha ». Une pièce de monnaie avec un texte grec d'un côté et indien de l'autre : un objet qui parle deux langues.</p>`
        },
        {
          label: "🏛️ Avant et après Alexandre",
          html: `<table>
<tr><th></th><th>Avant (cité classique)</th><th>Après (époque hellénistique)</th></tr>
<tr><td>État</td><td>Petite cité de citoyens</td><td>Grand royaume avec un roi</td></tr>
<tr><td>Citoyen</td><td>Participe à la vie politique</td><td>Sujet, souvent loin du pouvoir</td></tr>
<tr><td>Philosophie</td><td>Politique et vertu publique</td><td>Bonheur individuel et cosmopolitisme</td></tr>
<tr><td>Culture</td><td>Surtout grecque</td><td>Métissée gréco-orientale</td></tr>
<tr><td>Langue</td><td>Dialectes grecs</td><td>Koinè commune</td></tr>
</table>`
        },
        {
          label: "🗺️ Fais tourner le globe",
          html: `<p>Fais tourner le globe et suis la marche d'Alexandre et les grandes villes hellénistiques.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 40.76, lon: 22.52, label: "Pella", color: "#2563eb" },
              { lat: 36.8, lon: 36.2, label: "Issos", color: "#ef4444" },
              { lat: 31.2, lon: 29.9, label: "Alexandrie", color: "#16a34a" },
              { lat: 36.4, lon: 43.3, label: "Gaugamèles", color: "#ef4444" },
              { lat: 32.5, lon: 44.4, label: "Babylone", color: "#f97316" },
              { lat: 29.93, lon: 52.9, label: "Persépolis", color: "#ef4444" },
              { lat: 32.7, lon: 73.4, label: "Hydaspe", color: "#ef4444" }
            ],
            routes: [{ points: [0, 1, 2, 3, 4, 5, 6], color: "#dc2626" }]
          }
        },
        {
          label: "📅 Frise chronologique",
          html: `<p>Parcours la vie d'Alexandre et de ses successeurs.</p>`,
          widget: "timeline",
          options: {
            unit: "ans",
            events: [
              { year: -356, label: "Naissance d'Alexandre", icon: "👶" },
              { year: -338, label: "Chéronée", icon: "⚔️" },
              { year: -334, label: "Granique", icon: "🏇" },
              { year: -331, label: "Gaugamèles, Alexandrie", icon: "🏛️" },
              { year: -326, label: "Hydaspe", icon: "🐘" },
              { year: -323, label: "Mort d'Alexandre", icon: "🕯️" },
              { year: -301, label: "Ipsos, royaumes hellénistiques", icon: "👑" },
              { year: -146, label: "Rome détruit Corinthe", icon: "🦅" },
              { year: -30, label: "Fin de l'Égypte ptolémaïque", icon: "🏺" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte : de Philippe à l'époque hellénistique",
      nodes: [
        { id: "filippo", label: "Philippe II", x: 50, y: 6, color: "#0ea5e9", html: "Il renforce l'armée et l'État ; il l'emporte à Chéronée (338 av. J.-C.).", why: "Les cités étaient épuisées et divisées ; Philippe sut combiner diplomatie, argent des mines et une armée nouvelle armée de la sarisse." },
        { id: "alessandro", label: "Alexandre", x: 22, y: 30, color: "#ef4444", html: "Il conquiert l'Empire perse (334-323 av. J.-C.).", why: "Il hérita d'une armée prête et d'un rêve panhellénique ; la faiblesse perse et son audace firent le reste." },
        { id: "fusione", label: "Fusion des cultures", x: 78, y: 30, color: "#16a34a", html: "Noces de Suse, villes nouvelles, adoption de coutumes perses.", why: "Pour gouverner des peuples différents, Alexandre chercha à unir les élites gréco-macédoniennes et perses ; mais beaucoup de Macédoniens ne l'acceptèrent pas." },
        { id: "diadochi", label: "Guerres des diadoques", x: 50, y: 52, color: "#f97316", html: "Les généraux se disputent l'empire (323-301 av. J.-C.).", why: "L'empire était trop vaste et trop lié à sa personne : sans héritier adulte, les généraux se le partagèrent." },
        { id: "regni", label: "Royaumes hellénistiques", x: 20, y: 75, color: "#7c3aed", html: "Lagides, Séleucides, Antigonides, Pergame.", why: "Des monarchies fondées sur des armées professionnelles et des fonctionnaires grecs, qui gouvernaient les populations locales : grandes mais instables." },
        { id: "cultura", label: "Culture hellénistique", x: 80, y: 75, color: "#eab308", html: "Koinè, science, philosophies, art métissé.", why: "Les rois finançaient la recherche par prestige ; la langue commune et les villes nouvelles facilitèrent les échanges d'idées sur un territoire immense." },
        { id: "roma", label: "Conquête romaine", x: 50, y: 95, color: "#334155", html: "Macédoine 168, Corinthe 146, Pergame 133, Égypte 30 av. J.-C.", why: "Affaiblis par leurs guerres, les royaumes tombèrent l'un après l'autre sous la domination de Rome, qui hérita de leur culture." }
      ],
      edges: [
        ["filippo", "alessandro", "prépare"],
        ["alessandro", "fusione", "encourage la"],
        ["alessandro", "diadochi", "laisse place aux"],
        ["diadochi", "regni", "créent les"],
        ["fusione", "cultura", "nourrit la"],
        ["regni", "cultura", "financent la"],
        ["regni", "roma", "tombent devant la"],
        ["cultura", "roma", "héritée par la"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : l'époque hellénistique",
      questions: [
        { type: "mc", q: "Qu'est-ce que la koinè ?", options: ["La langue grecque commune de l'époque hellénistique", "Un type de navire", "Une assemblée"], answer: 0, explain: "Un grec simplifié utilisé dans tout l'empire." },
        { type: "mc", q: "Où se trouvait le Musée avec la grande bibliothèque ?", options: ["Alexandrie", "Athènes", "Pergame"], answer: 0, explain: "À Alexandrie d'Égypte, capitale des Ptolémées." },
        { type: "tf", q: "Ératosthène a mesuré avec une bonne précision la circonférence de la Terre.", answer: true, explain: "Grâce à l'ombre d'un bâton à Syène et à Alexandrie." },
        { type: "mc", q: "Quelle dynastie a régné sur l'Égypte après Alexandre ?", options: ["Les Lagides (Ptolémées)", "Les Séleucides", "Les Antigonides"], answer: 0, explain: "Fondée par Ptolémée Ier." }
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li><b>Philippe II</b> (359-336 av. J.-C.) unifie la Grèce sous la Macédoine (Chéronée, 338). <b>Alexandre</b> (356-323 av. J.-C.) conquiert l'Empire perse : Granique, Issos, Gaugamèles, Inde.</li>
<li>Après la mort d'Alexandre, les <b>diadoques</b> se partagent l'empire : <b>Lagides</b>, <b>Séleucides</b>, <b>Antigonides</b>.</li>
<li><b>Époque hellénistique</b> : culture grecque élargie et métissée avec l'Orient, koinè, cosmopolitisme.</li>
<li>Alexandrie : Musée, Bibliothèque, Phare. <b>Euclide</b>, <b>Archimède</b>, <b>Ératosthène</b>, <b>Aristarque</b>.</li>
<li>Fin de l'époque hellénistique : conquête romaine (Macédoine 168/146, Égypte 30 av. J.-C.).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Sarisse", d: "Longue lance des fantassins macédoniens." },
    { t: "Phalange macédonienne", d: "Infanterie en formation serrée armée de sarisses." },
    { t: "Ligue de Corinthe", d: "Alliance des cités sous la direction de Philippe II." },
    { t: "Diadoques", d: "Les généraux successeurs d'Alexandre." },
    { t: "Époque hellénistique", d: "Civilisation grecque élargie et métissée avec les cultures orientales (323-30 av. J.-C.)." },
    { t: "Koinè", d: "Grec commun parlé dans tout le monde hellénistique." },
    { t: "Cosmopolitisme", d: "Se sentir citoyen du monde et pas seulement d'une cité." },
    { t: "Musée", d: "Institut de recherche d'Alexandrie." },
    { t: "Stoïcisme", d: "Philosophie qui invite à vivre selon la raison et la nature." },
    { t: "Épicurisme", d: "Philosophie qui recherche la sérénité en évitant la douleur." },
    { t: "Satrape", d: "Gouverneur d'une province perse." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quelle bataille de 338 av. J.-C. donna à Philippe II le contrôle de la Grèce ?", options: ["Chéronée", "Marathon", "Gaugamèles"], answer: 0, explain: "Chéronée, contre Athènes et Thèbes." },
      { type: "mc", q: "Qui fut le maître d'Alexandre ?", options: ["Aristote", "Platon", "Euclide"], answer: 0, explain: "Aristote." },
      { type: "tf", q: "Alexandre a conquis l'Empire perse en quelques années.", answer: true, explain: "Entre 334 et 330 av. J.-C., il conquit la plus grande partie de l'empire." },
      { type: "text", q: "Comment s'appellent les généraux qui se sont partagé l'empire après la mort d'Alexandre ?", answer: ["diadoques", "les diadoques"], explain: "Les diadoques, « successeurs »." },
      { type: "mc", q: "Quelle ville fondée par Alexandre devint une capitale culturelle ?", options: ["Alexandrie d'Égypte", "Antioche", "Pella"], answer: 0, explain: "Avec le Musée et la Bibliothèque." },
      { type: "mc", q: "Quel savant de Syracuse a étudié le levier et l'hydrostatique ?", options: ["Archimède", "Euclide", "Ératosthène"], answer: 0, explain: "Archimède (287-212 av. J.-C.)." },
      { type: "order", q: "Range dans l'ordre chronologique.", items: ["Chéronée", "Granique", "Gaugamèles", "Mort d'Alexandre", "Bataille d'Ipsos"], explain: "338, 334, 331, 323, 301 av. J.-C." },
      { type: "mc", q: "Lequel de ces États N'EST PAS un royaume hellénistique ?", options: ["L'Empire romain", "Le royaume des Ptolémées", "Le royaume des Séleucides"], answer: 0, explain: "Rome était une autre puissance." },
      { type: "num", q: "À quel âge Alexandre le Grand est-il mort ?", answer: 32, tol: 1, explain: "Né en 356, il mourut en 323 av. J.-C., à environ 32 ans." },
      { type: "tf", q: "L'époque hellénistique fut seulement la diffusion de la culture grecque, sans influences orientales.", answer: false, explain: "Ce fut une rencontre et un mélange de cultures." },
      { type: "mc", q: "Par quel procédé géométrique Ératosthène a-t-il mesuré la Terre ?", options: ["Avec l'ombre d'un bâton dans deux villes", "Avec un télescope", "Avec une boussole"], answer: 0, explain: "Il compara l'angle de l'ombre à Alexandrie et à Syène." }
    ]
  }
});
