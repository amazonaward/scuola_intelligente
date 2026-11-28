TOPIC('fr', {
  id: "l1-sto-roma-repubblica",
  title: "Rome : des origines à la République",
  intro: "Un village de cabanes sur une colline près d'un fleuve, fondé (selon la légende) en <b>753 av. J.-C.</b> Trois siècles plus tard, il était maître de l'Italie ; deux siècles plus tard encore, il dominait toute la Méditerranée. Comment est-ce possible ? Dans cette leçon, nous suivons la naissance de Rome entre mythe et archéologie, le gouvernement des rois, la <b>République</b> et ses institutions, la lutte entre patriciens et plébéiens, la conquête de l'Italie et le duel à mort avec <b>Carthage</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. Les origines de Rome : mythe et archéologie",
      html: `<p>Selon la tradition, <b>Romulus</b> et <b>Rémus</b>, jumeaux descendants du héros troyen <b>Énée</b> (qui avait fui Troie), allaités par une louve et élevés par un berger, fondèrent Rome le <b>21 avril 753 av. J.-C.</b> Romulus traça le sillon sur le Palatin et tua Rémus qui l'avait franchi. Le mythe exprime l'idée d'une ville née de la violence, mais aussi d'une mission divine.</p>
<p>L'archéologie raconte quelque chose de différent et de plus intéressant : entre le Xe et le VIIIe s. av. J.-C., sur les collines (Palatin, Capitole, Quirinal…), il y avait des <b>villages de bergers et de paysans latins et sabins</b>. Le site était excellent : un gué sur le <b>Tibre</b> (l'île Tibérine), la route du sel (via Salaria), des collines faciles à défendre, la mer proche mais pas trop. Vers la fin du VIIIe-VIIe s. av. J.-C., les villages fusionnèrent en une ville, et le Forum (d'abord un marécage) fut asséché grâce à la <b>Cloaca Maxima</b>.</p>
<p>Les historiens distinguent donc la <b>légende</b> (utile pour comprendre comment les Romains se voyaient) et les <b>sources historiques</b> (archéologie, inscriptions).</p>`
    },
    {
      type: "3d",
      title: "Carte 3D : l'expansion de Rome",
      scene: "spacetime",
      caption: "La base est la carte de l'Italie et de la Méditerranée occidentale, la hauteur représente le temps (753-146 av. J.-C.). Touche les événements : les flèches relient causes et effets.",
      options: {
        lat: [34, 47],
        lon: [-2, 20],
        years: [-753, -140],
        places: [
          { lat: 41.9, lon: 12.5, label: "Rome" },
          { lat: 36.85, lon: 10.32, label: "Carthage" },
          { lat: 40.47, lon: 17.24, label: "Tarente" },
          { lat: 38.19, lon: 15.55, label: "Messine" }
        ],
        events: [
          { id: "fondazione", lat: 41.89, lon: 12.49, year: -753, label: "Fondation de Rome", html: "Date traditionnelle : 21 avril 753 av. J.-C. (Romulus).", causes: [] },
          { id: "cacciata", lat: 41.89, lon: 12.49, year: -509, label: "Expulsion des rois", html: "En 509 av. J.-C., selon la tradition, les Romains chassent le dernier roi, Tarquin le Superbe, et instaurent la République avec deux consuls.", causes: ["fondazione"] },
          { id: "secessione", lat: 41.89, lon: 12.5, year: -494, label: "Première sécession de la plèbe", html: "Les plébéiens se retirent sur le mont Sacré : ils obtiennent les tribuns de la plèbe, dotés d'un droit de veto.", causes: ["cacciata"] },
          { id: "dodici", lat: 41.89, lon: 12.49, year: -450, label: "Loi des Douze Tables", html: "Vers 450 av. J.-C., les lois, jusque-là gardées par les patriciens, sont gravées et rendues publiques : tout le monde peut les connaître.", causes: ["secessione"] },
          { id: "veio", lat: 42.02, lon: 12.4, year: -396, label: "Prise de Véies", html: "Après dix ans de siège, Rome prend la riche cité étrusque de Véies (Camille).", causes: ["dodici"] },
          { id: "sannitiche", lat: 41.3, lon: 14.6, year: -321, label: "Guerres samnites", html: "Entre 343 et 290 av. J.-C., Rome bat les Samnites de l'Apennin ; en 321, elle subit l'humiliation des Fourches Caudines.", causes: ["veio"] },
          { id: "pirro", lat: 41.13, lon: 14.78, year: -275, label: "Pyrrhus vaincu à Bénévent", html: "En 275 av. J.-C., Rome bat Pyrrhus, roi d'Épire appelé par Tarente. En 272, elle prend aussi Tarente : toute l'Italie du Sud lui appartient.", causes: ["sannitiche"] },
          { id: "messina", lat: 38.19, lon: 15.55, year: -264, label: "Début de la première guerre punique", html: "En 264 av. J.-C., Rome intervient à Messine contre Carthage : la lutte pour la Sicile commence.", causes: ["pirro"] },
          { id: "egadi", lat: 37.97, lon: 12.3, year: -241, label: "Bataille des îles Égates", html: "En 241 av. J.-C., la flotte romaine l'emporte : la Sicile devient la première province romaine.", causes: ["messina"] },
          { id: "canne", lat: 41.3, lon: 16.13, year: -216, label: "Cannes", html: "En 216 av. J.-C., Hannibal anéantit l'armée romaine : la pire défaite de l'histoire de Rome, mais les alliés italiens (socii) restent fidèles.", causes: ["egadi"] },
          { id: "zama", lat: 36.0, lon: 9.4, year: -202, label: "Zama", html: "En 202 av. J.-C., Scipion bat Hannibal en Afrique : fin de la deuxième guerre punique.", causes: ["canne"] },
          { id: "cartagine", lat: 36.85, lon: 10.32, year: -146, label: "Destruction de Carthage", html: "En 146 av. J.-C., après la troisième guerre punique, Scipion Émilien détruit Carthage. La même année, Rome détruit Corinthe.", causes: ["zama"] }
        ]
      }
    },
    {
      type: "text",
      title: "2. La royauté et les Étrusques",
      html: `<p>Selon la tradition, Rome eut <b>sept rois</b> : Romulus, Numa Pompilius, Tullus Hostilius, Ancus Marcius, Tarquin l'Ancien, Servius Tullius, Tarquin le Superbe. Les trois derniers étaient d'origine <b>étrusque</b>. Le roi était chef militaire, prêtre et juge suprême, élu par une assemblée et assisté du <b>Sénat</b> (conseil des anciens, les <i>patres</i>).</p>
<p>Les <b>Étrusques</b>, peuple de l'Étrurie (Toscane et nord du Latium), organisés en cités-États (lucumonies), étaient d'habiles métallurgistes, navigateurs et agriculteurs. Ils dominèrent Rome au VIe siècle av. J.-C. et y apportèrent : l'<b>urbanisation</b> (murailles, ouvrages hydrauliques, temple de Jupiter sur le Capitole), l'<b>alphabet</b> (dérivé du grec), des symboles du pouvoir (<b>faisceaux</b> et <b>hache</b>, toge, chaise curule), les jeux de gladiateurs et l'art divinatoire des haruspices.</p>
<p>Le roi <b>Servius Tullius</b> répartit la population en classes selon le <b>cens</b> (la fortune), et pas seulement selon la naissance ; la société romaine était déjà divisée entre <b>patriciens</b> (familles nobles, descendants des <i>patres</i>) et <b>plébéiens</b> (tous les autres, libres, souvent paysans et artisans, sans accès aux charges), avec les <b>clients</b> liés aux patriciens par un rapport de fidélité (<i>clientèle</i>). En <b>509 av. J.-C.</b>, les patriciens chassèrent le dernier roi, Tarquin le Superbe, accusé de tyrannie : la <b>République</b> était née (<i>res publica</i>, « la chose publique »). Dès lors, le titre de roi fut détesté à Rome.</p>`
    },
    {
      type: "svg",
      title: "Les institutions de la République romaine",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<rect x="210" y="15" width="180" height="45" rx="8" fill="#ddd6fe" stroke="#5b21b6" stroke-width="2"/>
<text x="300" y="44" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">SÉNAT (300 membres)</text>
<rect x="20" y="105" width="170" height="60" rx="8" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="105" y="130" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">2 CONSULS</text>
<text x="105" y="152" font-size="14" text-anchor="middle" fill="#0f172a">élus pour 1 an</text>
<rect x="215" y="105" width="170" height="60" rx="8" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="300" y="130" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">AUTRES MAGISTRATS</text>
<text x="300" y="152" font-size="14" text-anchor="middle" fill="#0f172a">préteurs, questeurs, édiles, censeurs</text>
<rect x="410" y="105" width="170" height="60" rx="8" fill="#fecaca" stroke="#991b1b" stroke-width="2"/>
<text x="495" y="130" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">TRIBUNS DE LA PLÈBE</text>
<text x="495" y="152" font-size="14" text-anchor="middle" fill="#0f172a">ont le droit de veto</text>
<rect x="150" y="215" width="300" height="55" rx="8" fill="#bae6fd" stroke="#075985" stroke-width="2"/>
<text x="300" y="240" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">COMICES (assemblées du peuple)</text>
<text x="300" y="260" font-size="14" text-anchor="middle" fill="#0f172a">élisent les magistrats et votent les lois</text>
<path d="M300 60 L300 105 M300 165 L300 215 M105 165 L105 190 L300 215 M495 165 L495 190 L300 215" stroke="#374151" stroke-width="2" fill="none"/>
</svg>`,
      caption: "Schéma simplifié : le pouvoir était partagé entre plusieurs organes, pour éviter qu'un seul homme ne devienne roi."
    },
    {
      type: "text",
      title: "3. Les institutions de la République",
      html: `<p>Après l'expérience des rois, les Romains construisirent un État doté d'un système de <b>contrepoids</b> (comme le décrivit plus tard l'historien grec <b>Polybe</b>, qui y voyait une « constitution mixte » : monarchie, aristocratie et démocratie à la fois).</p>
<ul>
<li><b>Magistrats</b> : charges électives, annuelles, collégiales (au moins deux personnes avec le même pouvoir, qui pouvaient se bloquer mutuellement) et gratuites. Les deux <b>consuls</b> commandent l'armée et la cité ; les <b>préteurs</b> rendent la justice ; les <b>questeurs</b> gèrent les finances ; les <b>édiles</b> s'occupent de la ville et des jeux ; les <b>censeurs</b> (tous les 5 ans) font le recensement et surveillent les mœurs. En cas d'urgence, on nommait un <b>dictateur</b> pour six mois au maximum.</li>
<li><b>Sénat</b> : environ 300 anciens magistrats, nommés à vie ; il contrôle la politique étrangère, les finances et la religion. C'était le véritable centre du pouvoir.</li>
<li><b>Comices</b> : assemblées du peuple (<i>comices centuriates</i> pour élire les magistrats supérieurs et déclarer la guerre, <i>comices tributes</i> pour les lois), avec un vote pondéré selon la fortune.</li>
<li><b>Cursus honorum</b> : la carrière politique dans un ordre fixé : questeur → édile → préteur → consul.</li>
</ul>
<p>C'était un système conçu pour <b>éviter la tyrannie</b>, mais pas une démocratie : les votes des riches comptaient davantage, et l'accès aux hautes charges fut longtemps réservé aux patriciens, puis aux familles riches. Les femmes, les esclaves et les étrangers étaient exclus.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : origines et institutions",
      questions: [
        { type: "mc", q: "En quelle année, selon la tradition, le dernier roi de Rome a-t-il été chassé ?", options: ["509 av. J.-C.", "753 av. J.-C.", "264 av. J.-C."], answer: 0, explain: "En 509 av. J.-C., Tarquin le Superbe." },
        { type: "mc", q: "Combien y avait-il de consuls et combien de temps restaient-ils en charge ?", options: ["Deux, un an", "Un, à vie", "Trois, cinq ans"], answer: 0, explain: "Deux consuls annuels : ils pouvaient se contrôler mutuellement." },
        { type: "tf", q: "Le Sénat romain était composé d'anciens magistrats.", answer: true, explain: "Nommés à vie." },
        { type: "text", q: "Comment s'appelle la carrière politique ordonnée des magistrats romains ?", answer: ["cursus honorum", "le cursus honorum"], explain: "Le cursus honorum." }
      ]
    },
    {
      type: "text",
      title: "4. Patriciens et plébéiens : la lutte des ordres",
      html: `<p>Pendant les premiers siècles de la République, les <b>plébéiens</b> (qui servaient dans l'armée, mais ne pouvaient ni exercer de charges ni épouser des patriciennes) luttèrent pour obtenir l'égalité. Ce fut un conflit long mais presque sans guerre civile, mené avec l'arme de la <b>sécession</b> : refuser de combattre et quitter la ville.</p>
<ul>
<li><b>494 av. J.-C.</b> : première sécession sur le mont Sacré ; les plébéiens obtiennent les <b>tribuns de la plèbe</b>, magistrats sacrés et inviolables, dotés d'un droit de <b>veto</b> contre les décisions des magistrats.</li>
<li><b>451-450 av. J.-C.</b> : <b>loi des Douze Tables</b>, premier recueil de lois écrites, exposé sur le Forum : la loi devient connaissable par tous et n'est plus le monopole des patriciens.</li>
<li><b>445 av. J.-C.</b> (loi Canuleia) : les mariages entre patriciens et plébéiens sont autorisés.</li>
<li><b>367 av. J.-C.</b> (lois licinio-sextiennes) : l'un des deux consuls peut être plébéien ; la possession de terres publiques est limitée.</li>
<li><b>287 av. J.-C.</b> (loi Hortensia) : les <b>plébiscites</b> (décisions de l'assemblée de la plèbe) ont force de loi pour tous les citoyens.</li>
</ul>
<p>Finalement, une nouvelle classe dirigeante apparut, la <b>nobilitas</b>, formée de patriciens et de plébéiens riches ayant exercé des charges. Mais les pauvres restaient pauvres : les problèmes sociaux (dettes, terres) reviendront plus tard avec les Gracques.</p>`
    },
    {
      type: "decision",
      title: "Rome, 494 av. J.-C. : la plèbe doit-elle se retirer sur le mont Sacré ?",
      html: `<p>Tu es un plébéien, soldat et paysan. Tu es écrasé de dettes : les créanciers patriciens peuvent enchaîner ceux qui ne paient pas. Les guerres t'éloignent de tes champs. Un groupe de plébéiens propose d'<b>abandonner la ville</b> et de camper sur le mont Sacré : sans eux, Rome n'a pas d'armée pour se défendre contre ses voisins ennemis.</p>`,
      question: "Que fais-tu ?",
      options: [
        { label: "Obéir et continuer à servir : la cité a besoin de tout le monde.", outcome: "Tu évites l'affrontement, mais les patriciens n'ont aucune raison de changer et les dettes demeurent. La situation empire." },
        { label: "Participer à la sécession pour obtenir des garanties.", outcome: "Le Sénat, effrayé, envoie un ambassadeur (Ménénius Agrippa, qui raconte l'apologue des membres et de l'estomac) et accorde les tribuns de la plèbe. Une révolte sans violence obtient une conquête fondamentale." },
        { label: "Demander à un général célèbre de prendre le pouvoir et de punir les patriciens.", outcome: "Tu risques de te retrouver avec un tyran : le danger même que la République voulait éviter." }
      ],
      answer: 1,
      explain: "La plèbe choisit la <b>sécession</b>, une forme de protestation sans armes. Le Sénat céda : les <b>tribuns de la plèbe</b> furent créés. L'histoire romaine montre que même un groupe sans pouvoir officiel peut obtenir des droits s'il dispose d'une arme sûre : la grève de sa propre force militaire."
    },
    {
      type: "text",
      title: "5. La conquête de l'Italie",
      html: `<p>Entre le Ve et le IIIe s. av. J.-C., Rome passa du statut de petite ville du Latium à celui de maîtresse de la péninsule :</p>
<ul>
<li><b>Latium et Étrurie</b> : après des années de guerres contre les Èques, les Volsques et la ville voisine de Véies (prise en <b>396 av. J.-C.</b> par Camille). En <b>390 av. J.-C.</b>, les Gaulois de Brennus pillèrent Rome (mais pas le Capitole, sauvé par les oies, selon la légende).</li>
<li><b>Guerres samnites</b> (343-290 av. J.-C.) : contre les Samnites de l'Apennin. En 321 av. J.-C., l'armée romaine subit l'humiliation des <b>Fourches Caudines</b>. Rome gagna en apprenant : elle remplaça la phalange par la <b>légion manipulaire</b>, plus souple.</li>
<li><b>Guerre latine</b> (340-338 av. J.-C.) : Rome dissout la Ligue latine et annexa les cités.</li>
<li><b>Pyrrhus et Tarente</b> (280-275 av. J.-C.) : Tarente appelle le roi d'Épire, <b>Pyrrhus</b>, qui gagne à Héraclée et à Ausculum mais avec des pertes très lourdes (« victoire à la Pyrrhus »), puis il est battu à Bénévent (275 av. J.-C.). En 272, Rome prend Tarente : toute l'Italie du Sud lui appartient.</li>
</ul>
<p><b>Comment gouverna-t-elle l'Italie ?</b> Avec un système souple : pas une règle unique, mais des accords différents pour chaque peuple.</p>
<ul>
<li><b>Citoyenneté</b> complète ou <b>sans droit de vote</b> pour certaines villes voisines ;</li>
<li><b>Alliés</b> (<i>socii</i>) qui gardaient leur autonomie interne mais devaient fournir des soldats ;</li>
<li><b>Colonies</b> romaines et latines placées à des endroits stratégiques ;</li>
<li><b>Routes</b> (via Appia à partir de 312 av. J.-C.) pour déplacer rapidement les légions.</li>
</ul>
<p>La stratégie « <b>diviser pour régner</b> » (<i>divide et impera</i>) : récompenser les fidèles, punir les rebelles. Rome offrait aussi une perspective : les alliés pouvaient espérer obtenir la citoyenneté. Ainsi, Rome eut toujours de nouvelles recrues pour ses guerres.</p>`
    },
    {
      type: "text",
      title: "6. Rome et Carthage : les guerres puniques",
      html: `<p>Carthage, colonie phénicienne (814 av. J.-C.), était la puissance maritime et commerciale de la Méditerranée occidentale, avec la Sicile occidentale, la Sardaigne et le sud de l'Espagne. Rome, maîtresse de l'Italie, se retrouva à sa frontière, sur le détroit de Messine. Ce fut une lutte de plus d'un siècle.</p>
<ul>
<li><b>Première guerre punique</b> (264-241 av. J.-C.) : provoquée par l'intervention à Messine. Rome, qui n'avait pas de flotte, en construisit une en copiant les navires carthaginois et en utilisant le <b>corbeau</b> (passerelle munie d'un crochet pour l'abordage). Victoires navales à Mylae (260) et aux <b>îles Égates</b> (241 av. J.-C.). Carthage céda la <b>Sicile</b>, première province romaine ; puis aussi la Sardaigne et la Corse (238 av. J.-C.).</li>
<li><b>Deuxième guerre punique</b> (218-201 av. J.-C.) : <b>Hannibal</b>, jeune général carthaginois, part d'Espagne et franchit les Alpes avec 37 éléphants et environ 26 000 hommes. Il l'emporte au Tessin et à la Trébie (218), au lac <b>Trasimène</b> (217) et à <b>Cannes</b> (216 av. J.-C.), où il bat une armée romaine deux fois plus nombreuse que la sienne en l'encerclant (environ 50 000 morts romains). Mais la plupart des alliés italiens restent fidèles à Rome. <b>Fabius Maximus</b>, le « Temporisateur », use Hannibal en évitant les grandes batailles. <b>Scipion</b> porte la guerre en Afrique et bat Hannibal à <b>Zama</b> (202 av. J.-C.), ce qui lui vaut le surnom d'« Africain ». Carthage perd sa flotte, ses colonies et doit payer une énorme indemnité.</li>
<li><b>Troisième guerre punique</b> (149-146 av. J.-C.) : <b>Caton l'Ancien</b> terminait chacun de ses discours par « Carthago delenda est » (« il faut détruire Carthage »). Rome assiège et <b>détruit Carthage</b> (146 av. J.-C.), sous la conduite de <b>Scipion Émilien</b>. Le territoire devient la province d'Afrique.</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemple concret : pourquoi Hannibal n'a-t-il pas gagné ?",
      html: `<p>Hannibal gagna presque toutes les batailles, et pourtant il perdit la guerre. Pourquoi ? Essaie de raisonner comme un historien :</p>
<ol>
<li><b>Alliés</b> : il espérait que les alliés italiens se révolteraient contre Rome : presque tous restèrent fidèles, parce que Rome leur garantissait des avantages et une protection.</li>
<li><b>Ravitaillement</b> : il vivait « sur le pays », sans base sûre, alors que Rome disposait de réserves d'hommes presque illimitées.</li>
<li><b>Mer</b> : Rome contrôlait la mer et pouvait envoyer des troupes en Espagne et en Afrique.</li>
<li><b>Stratégie</b> : la contre-attaque de Scipion en Afrique obligea Hannibal à rentrer à Carthage.</li>
</ol>
<p>Leçon : gagner des batailles ne suffit pas, il faut une <b>structure politique et militaire</b> capable de résister aux défaites. Rome en avait une, grâce à son système d'alliances.</p>`
    },
    {
      type: "example",
      title: "Exemple concret : lire la carte d'une voie romaine",
      html: `<p>Les voies consulaires reliaient Rome aux provinces : la <b>via Appia</b> (312 av. J.-C.) allait jusqu'à Brindisi, la via Aurelia longeait la côte tyrrhénienne, la via Flaminia menait vers l'Adriatique, la via Aemilia (187 av. J.-C.) traversait la plaine du Pô. Construites avec des couches de pierraille, de sable et de dalles de basalte, elles avaient des <b>bornes milliaires</b> qui indiquaient la distance depuis Rome. Beaucoup de routes modernes suivent encore ce tracé : en Italie, la SS 1 Aurelia, l'Appia, la Flaminia ; en France, la via Domitia ou la via Agrippa ont laissé des traces semblables. Regarde la carte de ta région : y a-t-il des noms de voies romaines près de chez toi ?</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Cincinnatus, le dictateur paysan",
      html: `<p>En <b>458 av. J.-C.</b>, Rome était assiégée par les Èques. Le Sénat nomma dictateur <b>Lucius Quinctius Cincinnatus</b>, ancien consul qui cultivait son petit champ. On le trouva la charrue à la main. Cincinnatus vainquit les ennemis en seize jours, puis renonça à sa charge et retourna à son champ. Pour les Romains, c'était le modèle du citoyen vertueux qui n'utilise le pouvoir que pour servir l'État. George Washington fut surnommé « le Cincinnatus de l'Amérique » pour avoir quitté le commandement après la guerre d'indépendance.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Les oies du Capitole",
      html: `<p>En 390 av. J.-C., les Gaulois de Brennus s'apprêtaient à surprendre de nuit les Romains réfugiés sur le Capitole, mais les oies consacrées à Junon, réveillées par le bruit, se mirent à cacarder. Le consul Manlius se réveilla et repoussa l'assaut. Lors du paiement de la rançon, selon la tradition, Brennus jeta son épée dans la balance de l'or : « Malheur aux vaincus » (<i>Vae victis</i>). Quelle est la part d'histoire et la part de légende ? Les Gaulois pillèrent effectivement Rome vers cette date, et le souvenir de cette catastrophe marqua longtemps les Romains.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre la Rome républicaine",
      intro: "Un système politique complexe, une conquête progressive : voici quelques comparaisons.",
      tabs: [
        {
          label: "🎭 Une équipe sans capitaine",
          html: `<p>Imagine une équipe de football avec <b>deux capitaines</b> élus chaque année, qui peuvent se bloquer mutuellement, et un <b>conseil d'anciens capitaines</b> (le Sénat) qui conseille et tranche les questions les plus importantes. À chaque saison, on change : personne ne reste capitaine trop longtemps. Les supporters, c'est-à-dire les assemblées, élisent les capitaines et votent les règles.</p>
<p>Pourquoi ? Pour éviter que quelqu'un ne devienne un <b>tyran</b>. Après l'expérience de Tarquin, les Romains avaient une peur presque religieuse de la monarchie. Le système fonctionna tant que Rome resta petite : avec l'empire et des généraux trop puissants, il entra en crise (nous le verrons plus tard).</p>`
        },
        {
          label: "🔗 Le système des alliances",
          html: `<p>La force de Rome ne tenait pas seulement à son armée, mais à son <b>réseau d'alliés</b> :</p>
<ul>
<li>Citoyens romains (même sans droit de vote) : ils paient des impôts et fournissent des soldats.</li>
<li>Latins : droits privés proches de ceux des Romains, fournisseurs de troupes.</li>
<li>Alliés italiens (socii) : autonomie locale, mais soldats pour Rome.</li>
</ul>
<p>Chaque allié était lié directement à Rome, et non aux autres alliés : une étoile, pas une ligue. En échange, il y avait la protection, le butin et la possibilité d'obtenir la citoyenneté. Pendant la deuxième guerre punique, après Cannes, ce réseau tint bon et fit la différence.</p>`
        },
        {
          label: "🗺️ Fais tourner le globe",
          html: `<p>Fais tourner le globe et suis les guerres puniques.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 41.9, lon: 12.5, label: "Rome", color: "#ef4444" },
              { lat: 36.85, lon: 10.32, label: "Carthage", color: "#7c3aed" },
              { lat: 37.97, lon: 12.3, label: "Îles Égates", color: "#f97316" },
              { lat: 37.88, lon: -1.13, label: "Carthagène (Espagne)", color: "#7c3aed" },
              { lat: 45.0, lon: 9.7, label: "Trébie", color: "#f97316" },
              { lat: 41.3, lon: 16.13, label: "Cannes", color: "#f97316" },
              { lat: 36.0, lon: 9.4, label: "Zama", color: "#f97316" }
            ],
            routes: [{ points: [3, 4, 5], color: "#7c3aed" }, { points: [0, 6], color: "#ef4444" }]
          }
        },
        {
          label: "📅 Frise chronologique",
          html: `<p>Parcours les grandes étapes de Rome.</p>`,
          widget: "timeline",
          options: {
            unit: "ans",
            events: [
              { year: -753, label: "Fondation (tradition)", icon: "🐺" },
              { year: -509, label: "Expulsion des rois", icon: "👑" },
              { year: -494, label: "Sécession et tribuns", icon: "✊" },
              { year: -450, label: "Douze Tables", icon: "📜" },
              { year: -396, label: "Prise de Véies", icon: "🏹" },
              { year: -312, label: "Via Appia", icon: "🛣️" },
              { year: -264, label: "Première guerre punique", icon: "⚓" },
              { year: -216, label: "Cannes", icon: "🐘" },
              { year: -202, label: "Zama", icon: "🛡️" },
              { year: -146, label: "Fin de Carthage", icon: "🔥" }
            ]
          }
        },
        {
          label: "🃏 Cartes de révision",
          html: `<p>Retourne les cartes pour réviser.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "Patriciens / plébéiens", back: "Familles nobles avec tous les droits / peuple sans accès aux charges (au début)" },
              { front: "Tribun de la plèbe", back: "Magistrat inviolable doté du droit de veto (494 av. J.-C.)" },
              { front: "Douze Tables", back: "Premières lois écrites de Rome (451-450 av. J.-C.)" },
              { front: "Socii", back: "Alliés italiens qui fournissaient des soldats à Rome" },
              { front: "Cannes", back: "216 av. J.-C. : pire défaite romaine, infligée par Hannibal" },
              { front: "Zama", back: "202 av. J.-C. : Scipion bat Hannibal" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte : pourquoi Rome a gagné",
      nodes: [
        { id: "posizione", label: "Position et ressources", x: 50, y: 6, color: "#16a34a", html: "Gué sur le Tibre, plaine fertile, collines faciles à défendre.", why: "Une position centrale dans la péninsule permit de contrôler les voies terrestres et maritimes. La nombreuse population latine fournit des hommes aux légions." },
        { id: "istituzioni", label: "Institutions mixtes", x: 20, y: 30, color: "#7c3aed", html: "Consuls, Sénat, comices, tribuns.", why: "Les contrepoids évitèrent à la fois la tyrannie et l'anarchie. Les décisions du Sénat donnaient de la continuité à la politique étrangère, malgré des magistrats annuels." },
        { id: "lotta", label: "Lutte des ordres", x: 80, y: 30, color: "#ef4444", html: "Des tribuns (494 av. J.-C.) à la loi Hortensia (287 av. J.-C.).", why: "Les plébéiens, qui combattaient dans l'armée, obtinrent des droits en échange de leur service : on évita ainsi une guerre civile." },
        { id: "esercito", label: "Armée de citoyens", x: 15, y: 58, color: "#f97316", html: "Légion manipulaire, discipline, routes.", why: "Les citoyens-soldats défendaient leurs propres champs : ils étaient motivés. La légion, souple, s'adapta aux terrains et aux ennemis." },
        { id: "alleanze", label: "Système d'alliances", x: 50, y: 58, color: "#0ea5e9", html: "Citoyenneté, socii, colonies.", why: "Rome offrait aux vaincus un statut et l'espoir d'une citoyenneté complète : leur loyauté resta donc solide, même après Cannes." },
        { id: "mare", label: "Puissance navale", x: 85, y: 58, color: "#eab308", html: "La flotte construite pendant la première guerre punique.", why: "Rome apprit de son adversaire : pour vaincre Carthage, elle dut devenir une puissance maritime." },
        { id: "conquista", label: "Domination de la Méditerranée", x: 50, y: 92, color: "#334155", html: "Sicile, Espagne, Afrique, Macédoine, Grèce.", why: "Après Carthage, aucune puissance ne pouvait rivaliser avec Rome : au IIe siècle av. J.-C., elle conquit la Méditerranée et dut affronter de nouveaux problèmes intérieurs." }
      ],
      edges: [
        ["posizione", "esercito", "nourrit l'"],
        ["istituzioni", "lotta", "évoluent avec la"],
        ["lotta", "esercito", "motive l'"],
        ["esercito", "alleanze", "repose sur le"],
        ["alleanze", "conquista", "permet la"],
        ["mare", "conquista", "ouvre la voie à la"],
        ["istituzioni", "alleanze", "garantissent le"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : les guerres puniques",
      questions: [
        { type: "mc", q: "Qui a battu Hannibal à Zama ?", options: ["Scipion", "Fabius Maximus", "Pyrrhus"], answer: 0, explain: "Scipion, surnommé ensuite l'Africain." },
        { type: "tf", q: "Après la bataille de Cannes, les alliés italiens ont abandonné Rome en masse.", answer: false, explain: "La plupart restèrent fidèles." },
        { type: "text", q: "Comment s'appelle la première province romaine, conquise lors de la première guerre punique ?", answer: ["sicile", "la sicile"], explain: "La Sicile." },
        { type: "order", q: "Range dans l'ordre.", items: ["Première guerre punique", "Cannes", "Zama", "Destruction de Carthage"], explain: "264, 216, 202, 146 av. J.-C." }
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>Rome : fondation traditionnelle en 753 av. J.-C. ; sept rois ; les trois derniers étrusques ; expulsion des rois en 509 av. J.-C. → <b>République</b>.</li>
<li>Institutions : <b>consuls</b> (2, annuels), <b>Sénat</b>, <b>comices</b>, magistrats, <b>tribuns de la plèbe</b>.</li>
<li>Lutte patriciens-plébéiens : tribuns (494), Douze Tables (450), lois licinio-sextiennes (367), loi Hortensia (287).</li>
<li>Conquête de l'Italie : Véies, Samnites, Pyrrhus (275), Tarente (272) ; alliés et colonies.</li>
<li>Guerres puniques (264-146 av. J.-C.) : Sicile, Hannibal (Cannes 216), Zama 202, destruction de Carthage 146.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Res publica", d: "« La chose publique » : la République romaine." },
    { t: "Patriciens", d: "Familles nobles qui détenaient les charges pendant les premiers siècles." },
    { t: "Plébéiens", d: "Citoyens non nobles, d'abord exclus des charges." },
    { t: "Consul", d: "L'un des deux magistrats suprêmes, en charge pour un an." },
    { t: "Sénat", d: "Conseil d'anciens magistrats, centre du pouvoir." },
    { t: "Tribun de la plèbe", d: "Magistrat qui défendait les plébéiens grâce au droit de veto." },
    { t: "Dictateur", d: "Magistrat doté des pleins pouvoirs pendant six mois en cas d'urgence." },
    { t: "Socii", d: "Alliés italiens de Rome." },
    { t: "Province", d: "Territoire hors d'Italie gouverné par un magistrat romain." },
    { t: "Légion", d: "Unité de base de l'armée romaine." },
    { t: "Carthago delenda est", d: "« Il faut détruire Carthage » : la devise de Caton." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quel événement marque le début de la République romaine ?", options: ["L'expulsion de Tarquin le Superbe (509 av. J.-C.)", "La fondation de Rome", "La destruction de Carthage"], answer: 0, explain: "Selon la tradition, en 509 av. J.-C." },
      { type: "mc", q: "Quel peuple a dominé Rome au VIe siècle av. J.-C. ?", options: ["Les Étrusques", "Les Samnites", "Les Gaulois"], answer: 0, explain: "Les trois derniers rois étaient étrusques." },
      { type: "tf", q: "Les consuls étaient deux et restaient en charge un an.", answer: true, explain: "Ils pouvaient se bloquer mutuellement." },
      { type: "text", q: "Comment s'appelle le magistrat des plébéiens doté du droit de veto ?", answer: ["tribun de la plèbe", "tribun", "le tribun de la plèbe"], explain: "Le tribun de la plèbe." },
      { type: "mc", q: "Qu'est-ce que la loi des Douze Tables ?", options: ["Les premières lois écrites romaines", "Un traité avec Carthage", "Une réforme militaire"], answer: 0, explain: "Vers 450 av. J.-C." },
      { type: "mc", q: "Quel roi, appelé par Tarente, a tenté de conquérir l'Italie du Sud ?", options: ["Pyrrhus", "Hannibal", "Brennus"], answer: 0, explain: "Pyrrhus, roi d'Épire." },
      { type: "order", q: "Range dans l'ordre chronologique.", items: ["Expulsion des rois", "Douze Tables", "Prise de Véies", "Première guerre punique", "Zama"], explain: "509, 450, 396, 264, 202 av. J.-C." },
      { type: "mc", q: "Pourquoi Hannibal n'a-t-il pas réussi à vaincre Rome malgré sa victoire à Cannes ?", options: ["Les alliés italiens sont restés fidèles à Rome", "Rome n'avait pas de soldats", "Carthage ne voulait pas la guerre"], answer: 0, explain: "Le réseau d'alliances romain tint bon." },
      { type: "num", q: "En quelle année av. J.-C. Carthage a-t-elle été détruite ?", answer: 146, tol: 0, explain: "En 146 av. J.-C." },
      { type: "tf", q: "Rome a conquis l'Italie en imposant à tous les peuples le même statut juridique.", answer: false, explain: "Elle utilisa des statuts différents : citoyenneté, alliance, colonies." },
      { type: "mc", q: "Quelle fut la première province romaine ?", options: ["La Sicile", "L'Égypte", "La Grèce"], answer: 0, explain: "Après la première guerre punique." }
    ]
  }
});
