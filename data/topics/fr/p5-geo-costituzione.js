TOPIC('fr', {
  id: `p5-geo-costituzione`,
  title: `La Constitution et l'État`,
  intro: `Chaque jeu a ses règles, et un pays a lui aussi besoin de règles valables pour tout le monde. En Italie, la règle la plus importante de toutes est la <b>Constitution</b>. Aujourd'hui, nous découvrons comment elle est née, ce qu'elle dit et comment fonctionne l'<b>État</b> : <b>Parlement</b>, <b>Gouvernement</b> et <b>Magistrature</b>.`,
  minutes: 35,
  sections: [
    {
      type: `text`, title: `1. Qu'est-ce que l'État ?`,
      html: `<p>Un <b>État</b> existe quand trois éléments sont réunis :</p>
<ul>
<li>le <b>peuple</b> : les personnes qui sont citoyennes de cet État (en Italie, environ 59 millions) ;</li>
<li>le <b>territoire</b> : la terre, la mer proche de la côte et le ciel au-dessus, à l'intérieur des frontières ;</li>
<li>la <b>souveraineté</b> : le pouvoir de décider ses propres lois sans obéir à d'autres États.</li>
</ul>
<p>L'Italie est une <b>République</b> : le chef de l'État n'est pas un roi qui hérite du trône, mais un <b>Président</b> élu pour une durée limitée. Et c'est une <b>démocratie</b> : le pouvoir appartient au peuple, qui l'exerce surtout en <b>votant</b>.</p>`
    },
    {
      type: `text`, title: `2. Comment la Constitution est née`,
      html: `<p>Faisons un pas en arrière, à la fin de la <b>Seconde Guerre mondiale</b> (1945). L'Italie avait été gouvernée pendant vingt ans par le <b>fascisme</b>, une dictature qui avait enlevé leur liberté aux gens, et le roi avait soutenu ce régime.</p>
<ol>
<li><b>2 juin 1946</b> : les Italiens votent par <b>référendum</b> et choisissent la <b>République</b> plutôt que la monarchie. Pour la première fois lors d'un vote national, les <b>femmes</b> votent aussi !</li>
<li>Le même jour, ils élisent l'<b>Assemblée constituante</b> : 556 personnes (dont 21 femmes) aux idées politiques très différentes, qui devaient écrire ensemble les nouvelles règles.</li>
<li><b>22 décembre 1947</b> : l'Assemblée approuve la Constitution par 453 voix pour et 62 contre.</li>
<li><b>1<sup>er</sup> janvier 1948</b> : la Constitution entre en vigueur. Depuis, c'est la <b>loi fondamentale</b> de l'Italie.</li>
</ol>
<p>C'est pour cela que le <b>2 juin</b> est la <b>Fête de la République</b>.</p>`
    },
    {
      type: `widget`, title: `Le chemin vers la Constitution`,
      widget: `timeline`,
      caption: `Touche les événements pour voir comment on arrive à la Constitution d'aujourd'hui.`,
      options: {
        unit: `années`,
        events: [
          { year: 1848, label: `Statut albertin (règles du Royaume de Sardaigne, puis d'Italie)`, icon: `📜` },
          { year: 1861, label: `Naissance du Royaume d'Italie`, icon: `🇮🇹` },
          { year: 1922, label: `Début de la dictature fasciste`, icon: `⛓️` },
          { year: 1945, label: `Fin de la Seconde Guerre mondiale`, icon: `🕊️` },
          { year: 1946, label: `Référendum : la République l'emporte, les femmes votent`, icon: `🗳️` },
          { year: 1948, label: `La Constitution entre en vigueur (1er janvier)`, icon: `📘` }
        ]
      }
    },
    {
      type: `text`, title: `3. Comment est faite la Constitution`,
      html: `<p>La Constitution compte <b>139 articles</b> (certains ont été supprimés par la suite) et 18 dispositions finales. Elle est divisée ainsi :</p>
<table>
<tr><th>Partie</th><th>Articles</th><th>De quoi elle parle</th></tr>
<tr><td><b>Principes fondamentaux</b></td><td>1–12</td><td>Les idées de base : démocratie, égalité, travail, paix, protection de l'environnement…</td></tr>
<tr><td><b>Partie I</b> – Droits et devoirs des citoyens</td><td>13–54</td><td>Liberté personnelle, école, santé, vote, paiement des impôts…</td></tr>
<tr><td><b>Partie II</b> – Organisation de la République</td><td>55–139</td><td>Comment fonctionnent le Parlement, le Président, le Gouvernement, la Magistrature, les Régions, les Communes.</td></tr>
</table>
<p>Quelques articles à connaître :</p>
<ul>
<li><b>Art. 1</b> : « L'Italie est une République démocratique, fondée sur le travail. La souveraineté appartient au peuple… »</li>
<li><b>Art. 3</b> : tous les citoyens sont <b>égaux</b> devant la loi, sans distinction de sexe, de race, de langue, de religion, d'opinions politiques, de conditions personnelles et sociales.</li>
<li><b>Art. 9</b> : la République protège le paysage, la culture et (depuis 2022) aussi l'<b>environnement</b> et les <b>animaux</b>.</li>
<li><b>Art. 11</b> : l'Italie <b>répudie la guerre</b> comme moyen de résoudre les conflits entre les peuples.</li>
<li><b>Art. 12</b> : le drapeau est le <b>tricolore</b> vert, blanc et rouge, à trois bandes verticales.</li>
<li><b>Art. 34</b> : l'école est ouverte à tous ; l'enseignement inférieur est obligatoire et gratuit.</li>
</ul>`
    },
    {
      type: `quiz`, title: `Mini-quiz : la naissance de la Constitution`,
      questions: [
        { type: `mc`, q: `Quel jour les Italiens ont-ils choisi la République ?`, options: [`25 avril 1945`, `2 juin 1946`, `1er janvier 1948`], answer: 1, explain: `Le référendum a eu lieu le 2 juin 1946 : c'est pour cela que c'est la Fête de la République.` },
        { type: `tf`, q: `La Constitution italienne est entrée en vigueur le 1er janvier 1948.`, answer: true, explain: `Approuvée le 22 décembre 1947, elle est en vigueur depuis le 1er janvier 1948.` },
        { type: `mc`, q: `Quel article dit que tous les citoyens sont égaux devant la loi ?`, options: [`Art. 1`, `Art. 3`, `Art. 12`], answer: 1, explain: `C'est l'article 3, le principe d'égalité.` }
      ]
    },
    {
      type: `text`, title: `4. Les trois pouvoirs : qui fait quoi`,
      html: `<p>Pour éviter qu'une seule personne ait tout le pouvoir (comme dans une dictature), la Constitution le <b>divise en trois</b>. C'est la <b>séparation des pouvoirs</b> :</p>
<ul>
<li>⚖️ <b>Pouvoir législatif</b> = <b>faire les lois</b>. Il appartient au <b>Parlement</b>, formé de deux « chambres » : la <b>Chambre des députés</b> (400 députés, au Palazzo Montecitorio) et le <b>Sénat de la République</b> (200 sénateurs élus plus quelques sénateurs à vie, au Palazzo Madama). Députés et sénateurs sont élus par les citoyens tous les <b>5 ans</b>.</li>
<li>🏛️ <b>Pouvoir exécutif</b> = <b>faire fonctionner les lois</b> et gouverner le pays chaque jour. Il appartient au <b>Gouvernement</b> : le <b>Président du Conseil des ministres</b> et les <b>ministres</b> (de l'Éducation, de la Santé, de l'Économie…). Il siège au Palazzo Chigi. Le Gouvernement doit avoir la <b>confiance</b> du Parlement.</li>
<li>👩‍⚖️ <b>Pouvoir judiciaire</b> = <b>contrôler que les lois sont respectées</b> et juger ceux qui les enfreignent. Il appartient à la <b>Magistrature</b> (juges et procureurs), qui est <b>indépendante</b> de tous les autres pouvoirs.</li>
</ul>
<p>Au-dessus des parties se trouve le <b>Président de la République</b>, le <b>chef de l'État</b> : il représente l'unité du pays, signe (promulgue) les lois, nomme le Président du Conseil, commande les forces armées. Il est élu par le Parlement (avec 58 délégués des Régions), reste en fonction <b>7 ans</b> et vit au <b>Quirinal</b>.</p>
<p>Pour contrôler que les lois respectent la Constitution, il y a la <b>Cour constitutionnelle</b> (15 juges).</p>`
    },
    {
      type: `svg`, title: `Le schéma des pouvoirs de l'État`,
      caption: `Les citoyens votent pour le Parlement ; le Parlement accorde sa confiance au Gouvernement ; la Magistrature est indépendante. Le Président de la République garantit l'équilibre.`,
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#f8fafc"/>
<rect x="190" y="12" width="220" height="56" rx="12" fill="#a855f7"/>
<text x="300" y="36" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">Président de la</text>
<text x="300" y="56" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">République (7 ans)</text>
<rect x="20" y="120" width="170" height="90" rx="12" fill="#3b82f6"/>
<text x="105" y="148" font-size="17" text-anchor="middle" fill="#ffffff" font-weight="bold">PARLEMENT</text>
<text x="105" y="170" font-size="14" text-anchor="middle" fill="#ffffff">Chambre + Sénat</text>
<text x="105" y="192" font-size="14" text-anchor="middle" fill="#ffffff">FAIT les lois</text>
<rect x="215" y="120" width="170" height="90" rx="12" fill="#22c55e"/>
<text x="300" y="148" font-size="17" text-anchor="middle" fill="#ffffff" font-weight="bold">GOUVERNEMENT</text>
<text x="300" y="170" font-size="14" text-anchor="middle" fill="#ffffff">Prés. Conseil + ministres</text>
<text x="300" y="192" font-size="14" text-anchor="middle" fill="#ffffff">APPLIQUE les lois</text>
<rect x="410" y="120" width="170" height="90" rx="12" fill="#ef4444"/>
<text x="495" y="148" font-size="17" text-anchor="middle" fill="#ffffff" font-weight="bold">MAGISTRATURE</text>
<text x="495" y="170" font-size="14" text-anchor="middle" fill="#ffffff">juges indépendants</text>
<text x="495" y="192" font-size="14" text-anchor="middle" fill="#ffffff">FAIT RESPECTER les lois</text>
<line x1="190" y1="165" x2="215" y2="165" stroke="#0f172a" stroke-width="3"/>
<text x="202" y="110" font-size="13" text-anchor="middle" fill="#0f172a">confiance</text>
<line x1="250" y1="68" x2="120" y2="120" stroke="#a855f7" stroke-width="3" stroke-dasharray="6 4"/>
<line x1="300" y1="68" x2="300" y2="120" stroke="#a855f7" stroke-width="3" stroke-dasharray="6 4"/>
<line x1="350" y1="68" x2="480" y2="120" stroke="#a855f7" stroke-width="3" stroke-dasharray="6 4"/>
<rect x="120" y="262" width="360" height="60" rx="14" fill="#facc15"/>
<text x="300" y="290" font-size="18" text-anchor="middle" fill="#713f12" font-weight="bold">👥 LES CITOYENS (peuple souverain)</text>
<text x="300" y="310" font-size="14" text-anchor="middle" fill="#713f12">votent dès 18 ans</text>
<line x1="160" y1="262" x2="105" y2="212" stroke="#ca8a04" stroke-width="4"/>
<text x="90" y="245" font-size="14" fill="#713f12" font-weight="bold">votent</text>
</svg>`
    },
    {
      type: `widget`, title: `Jeu : qui le fait ?`,
      widget: `classify`,
      caption: `Place chaque action sous le bon pouvoir.`,
      options: {
        groups: [`⚖️ Parlement`, `🏛️ Gouvernement`, `👩‍⚖️ Magistrature`],
        items: [
          [`Approuve une nouvelle loi sur l'école`, 0], [`Vote la confiance au Gouvernement`, 0], [`Discute et modifie un projet de loi`, 0],
          [`Le ministre décide comment dépenser l'argent pour les écoles`, 1], [`Dirige le pays chaque jour`, 1], [`Propose le budget de l'État`, 1],
          [`Un juge décide qui a raison dans un différend`, 2], [`Juge celui qui a commis un délit`, 2]
        ]
      }
    },
    {
      type: `example`, title: `Exemple pratique : comment naît une loi`,
      html: `<p>Imagine une loi qui oblige à planter plus d'arbres près des écoles.</p>
<ol>
<li><b>Proposition</b> : elle peut venir du Gouvernement, d'un parlementaire, d'une Région, du CNEL ou de <b>50 000 citoyens</b> avec leurs signatures.</li>
<li><b>Discussion et vote à la Chambre</b> : les députés la discutent, la modifient et la votent.</li>
<li><b>Discussion et vote au Sénat</b> : le Sénat doit aussi l'approuver <b>avec le même texte</b>. Si quelque chose change, elle retourne à la Chambre (cela s'appelle la « navette »).</li>
<li><b>Promulgation</b> : le Président de la République la signe (ou, s'il n'est pas convaincu, la renvoie une fois aux Chambres).</li>
<li><b>Publication</b> à la <b>Gazzetta Ufficiale</b> (le Journal officiel) : à partir de ce moment, en général après 15 jours, elle vaut pour tous.</li>
</ol>`
    },
    {
      type: `example`, title: `Exemple pratique : la Constitution dans ta journée`,
      html: `<ul>
<li>🏫 Tu vas à l'école gratuitement : <b>art. 34</b> (droit à l'instruction).</li>
<li>🏥 Si tu es malade, on te soigne même si tu ne peux pas payer : <b>art. 32</b> (droit à la santé).</li>
<li>💬 Tu peux dire ce que tu penses en respectant les autres : <b>art. 21</b> (liberté d'expression).</li>
<li>⛪🕌🕍 Chacun peut suivre la religion qu'il veut ou aucune : <b>art. 19</b>.</li>
<li>🧾 Tes parents paient des impôts selon ce qu'ils gagnent : <b>art. 53</b> (c'est un <b>devoir</b>).</li>
<li>🌳 Le parc près de chez toi est protégé : <b>art. 9</b>.</li>
</ul>
<p>La Constitution ne donne pas que des <b>droits</b> : elle demande aussi des <b>devoirs</b>, comme respecter les lois, payer les impôts et aider les autres (art. 2 : « devoirs de solidarité auxquels on ne peut déroger »).</p>`
    },
    {
      type: `text`, title: `5. L'État près de chez toi : Régions et Communes`,
      html: `<p>La République n'est pas qu'à Rome. Selon l'<b>art. 114</b>, elle est formée par :</p>
<ul>
<li>les <b>Communes</b> (environ 7 900) : dirigées par le <b>maire</b> et le conseil municipal. Elles s'occupent des routes, des écoles primaires et des collèges, des déchets, de l'état civil.</li>
<li>les <b>Villes métropolitaines</b> (14, comme Turin, Milan, Rome, Naples) et les <b>Provinces</b>.</li>
<li>les <b>Régions</b> (20) : elles ont un <b>Président</b> et un conseil régional ; elles s'occupent surtout de santé et de transports locaux. 5 ont un <b>statut spécial</b> (Vallée d'Aoste, Trentin-Haut-Adige, Frioul-Vénétie Julienne, Sicile, Sardaigne) et ont plus d'autonomie.</li>
<li>l'<b>État</b>.</li>
</ul>`
    },
    {
      type: `remember`, title: `À retenir`,
      html: `<ul>
<li>Constitution : approuvée le <b>22/12/1947</b>, en vigueur depuis le <b>1/1/1948</b>, <b>139 articles</b>.</li>
<li><b>Parlement</b> (Chambre 400 + Sénat 200) → fait les lois.</li>
<li><b>Gouvernement</b> (Président du Conseil + ministres) → applique les lois.</li>
<li><b>Magistrature</b> → juge, indépendante.</li>
<li><b>Président de la République</b> → chef de l'État, 7 ans, Quirinal.</li>
</ul>`
    },
    {
      type: `curiosity`, title: `Le savais-tu ? Les « mères constituantes » étaient 21`,
      html: `<p>Dans l'Assemblée constituante, il y avait 21 femmes sur 556 membres. Elles étaient peu nombreuses, mais décisives : grâce à elles aussi, l'article 3 dit que tous sont égaux « <b>sans distinction de sexe</b> ». Parmi elles se trouvaient <b>Nilde Iotti</b>, qui devint ensuite la première femme présidente de la Chambre, et <b>Teresa Mattei</b>, la plus jeune : elle avait 25 ans.</p>`
    },
    {
      type: `curiosity`, title: `Le savais-tu ? On peut changer la Constitution, mais pas trop facilement`,
      html: `<p>Une loi ordinaire est approuvée par un vote dans chaque Chambre. Pour changer la Constitution, en revanche, chaque Chambre doit voter <b>deux fois</b>, à au moins trois mois d'intervalle, et parfois ce sont les citoyens qui décident par un <b>référendum</b>. C'est fait exprès : les règles les plus importantes ne doivent pas changer sur un caprice du moment. Mais une chose ne peut jamais être changée : la <b>forme républicaine</b> (art. 139).</p>`
    },
    {
      type: `curiosity`, title: `Le savais-tu ? Les exemplaires originaux sont trois`,
      html: `<p>La Constitution fut signée le 27 décembre 1947 par <b>Enrico De Nicola</b> (chef provisoire de l'État), <b>Umberto Terracini</b> (président de l'Assemblée) et <b>Alcide De Gasperi</b> (chef du Gouvernement). L'un des trois exemplaires originaux est conservé aux Archives historiques de la Présidence de la République.</p>`
    },
    {
      type: `alternatives`, title: `D'autres façons de comprendre`,
      intro: `Séparation des pouvoirs, Parlement, Gouvernement… si les mots te semblent abstraits, essaie ces façons.`,
      tabs: [
        {
          label: `⚽ Comme un match`,
          html: `<p>Pense à un match de football :</p>
<ul>
<li>Celui qui écrit le <b>règlement</b> du football (les règles valables pour tous) est comme le <b>Parlement</b>.</li>
<li>L'<b>entraîneur</b> et le capitaine, qui décident comment jouer le match en respectant les règles, sont comme le <b>Gouvernement</b>.</li>
<li>L'<b>arbitre</b>, qui siffle les fautes et est impartial, est comme la <b>Magistrature</b>.</li>
<li>La <b>Constitution</b> est le livre des règles les plus importantes, que même l'arbitre ne peut pas changer.</li>
</ul>
<p>Si l'entraîneur pouvait aussi être l'arbitre et changer les règles en plein match… c'est lui qui gagnerait toujours ! Voilà pourquoi les pouvoirs sont séparés.</p>`
        },
        {
          label: `🏫 Ta classe`,
          html: `<p>Essaie de faire une « Constitution de la classe » :</p>
<ol>
<li>Tous ensemble, vous votez les <b>règles</b> de la classe (pouvoir législatif).</li>
<li>Vous élisez un <b>délégué</b> qui les fait appliquer chaque jour (pouvoir exécutif).</li>
<li>Vous choisissez un <b>garant</b> qui, en cas de dispute, écoute tout le monde et décide de façon juste (pouvoir judiciaire).</li>
</ol>
<p>Écrivez les règles sur une affiche : vous venez de faire ce qu'a fait l'Assemblée constituante !</p>`
        },
        {
          label: `🌍 Dans les autres pays`,
          html: `<p>Presque tous les États du monde ont une constitution. Fais tourner le globe :</p>
<ul>
<li>🇺🇸 <b>États-Unis</b> (1787) : la plus ancienne constitution écrite encore en vigueur. Là-bas, le Président est élu par les citoyens et dirige aussi le gouvernement.</li>
<li>🇫🇷 <b>France</b> (1958) : le Président, élu par le peuple, a beaucoup de pouvoirs.</li>
<li>🇩🇪 <b>Allemagne</b> (1949) : elle s'appelle « Loi fondamentale » ; il y a un Chancelier, un peu comme notre Président du Conseil.</li>
<li>🇬🇧 <b>Royaume-Uni</b> : pas de constitution écrite en un seul texte ! Les règles sont dispersées dans des lois et des traditions, et il y a un roi.</li>
<li>🇮🇹 <b>Italie</b> (1948) : République parlementaire : le Gouvernement dépend de la confiance du Parlement.</li>
</ul>`,
          scene: `globe`,
          options: {
            points: [
              { lat: 38.9, lon: -77.0, label: `🇺🇸 Washington – 1787` },
              { lat: 48.85, lon: 2.35, label: `🇫🇷 Paris – 1958` },
              { lat: 52.52, lon: 13.4, label: `🇩🇪 Berlin – 1949` },
              { lat: 51.5, lon: -0.12, label: `🇬🇧 Londres – non écrite` },
              { lat: 41.9, lon: 12.5, label: `🇮🇹 Rome – 1948`, color: `#22c55e` },
              { lat: 35.68, lon: 139.7, label: `🇯🇵 Tokyo – 1947` },
              { lat: -15.8, lon: -47.9, label: `🇧🇷 Brasilia – 1988` }
            ]
          }
        },
        {
          label: `🔗 Associe les palais`,
          html: `<p>À Rome, chaque pouvoir a son palais. Associe-les !</p>`,
          widget: `match`,
          options: {
            pairs: [
              [`Quirinal`, `Président de la République`],
              [`Montecitorio`, `Chambre des députés`],
              [`Palazzo Madama`, `Sénat de la République`],
              [`Palazzo Chigi`, `Président du Conseil`],
              [`Palazzo della Consulta`, `Cour constitutionnelle`]
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Carte : d'où viennent les règles de l'État`,
      nodes: [
        { id: `popolo`, label: `Peuple souverain`, x: 50, y: 8, color: `#eab308`, html: `Le pouvoir appartient aux citoyens (art. 1).`, why: `C'est l'idée de la <b>souveraineté populaire</b>, née avec les Lumières : Jean-Jacques Rousseau (1762, « Du contrat social ») soutenait que les lois justes viennent de la volonté de tous, et non d'un roi choisi par Dieu. La Révolution française (1789) l'a mise en pratique.` },
        { id: `cost`, label: `Constitution 1948`, x: 50, y: 30, color: `#3b82f6`, html: `La loi fondamentale, au-dessus de toutes les autres lois.`, why: `Elle a été écrite après le fascisme et la guerre pour que cela ne se répète pas : c'est pourquoi elle protège les droits de tous et divise le pouvoir. Avant, il y avait le <b>Statut albertin</b> (1848), accordé par le roi et modifiable par une loi quelconque : le fascisme l'a facilement vidé de son sens.` },
        { id: `separ`, label: `Séparation des pouvoirs`, x: 18, y: 50, color: `#a855f7`, html: `Le pouvoir est divisé en législatif, exécutif, judiciaire.`, why: `L'idée a été expliquée par le philosophe français <b>Montesquieu</b> en 1748 (« De l'esprit des lois ») : « pour qu'on ne puisse abuser du pouvoir, il faut que, par la disposition des choses, le pouvoir arrête le pouvoir ». Les constituants américains l'ont utilisée les premiers, en 1787.` },
        { id: `diritti`, label: `Droits et devoirs`, x: 82, y: 50, color: `#22c55e`, html: `Égalité, liberté, école, santé ; devoirs de solidarité.`, why: `Ils viennent d'une longue histoire : la Grande Charte anglaise (1215), la Déclaration des droits de l'homme et du citoyen (France, 1789) et, en 1948 aussi, la <b>Déclaration universelle des droits de l'homme</b> de l'ONU.` },
        { id: `parl`, label: `Parlement`, x: 12, y: 80, color: `#2563eb`, html: `Chambre (400) et Sénat (200) : ils font les lois.`, why: `C'est le cœur de la démocratie représentative : dans un État de millions de personnes, on ne peut pas voter tous sur chaque loi, alors on élit des représentants. Le nombre de parlementaires a été réduit (de 945 à 600) par un référendum en 2020.` },
        { id: `gov`, label: `Gouvernement`, x: 37, y: 80, color: `#16a34a`, html: `Président du Conseil et ministres : ils appliquent les lois.`, why: `L'Italie est une <b>République parlementaire</b> : le Gouvernement naît de la confiance du Parlement et tombe s'il la perd. Les constituants l'ont choisi pour éviter un chef trop fort après l'expérience de Mussolini.` },
        { id: `mag`, label: `Magistrature`, x: 62, y: 80, color: `#dc2626`, html: `Des juges indépendants qui appliquent la loi aux cas concrets.`, why: `Sous la dictature, les juges dépendaient du gouvernement. C'est pourquoi la Constitution crée le <b>Conseil supérieur de la magistrature</b> (CSM), qui décide des carrières et des mutations des juges à la place du Gouvernement.` },
        { id: `pres`, label: `Président de la République`, x: 87, y: 80, color: `#7c3aed`, html: `Chef de l'État, garant de la Constitution, 7 ans.`, why: `Il remplace le roi, mais n'hérite pas de la charge : il est élu par le Parlement. Le mandat de 7 ans est plus long que celui des Chambres (5) justement pour qu'il soit « au-dessus des parties » et pas lié à une seule majorité.` }
      ],
      edges: [
        [`popolo`, `cost`, `choisit et écrit`], [`cost`, `separ`, `établit`], [`cost`, `diritti`, `garantit`],
        [`separ`, `parl`, `législatif`], [`separ`, `gov`, `exécutif`], [`separ`, `mag`, `judiciaire`],
        [`popolo`, `parl`, `élit`], [`parl`, `gov`, `confiance`], [`parl`, `pres`, `élit`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz : les pouvoirs de l'État`,
      questions: [
        { type: `mc`, q: `Qui fait les lois en Italie ?`, options: [`Le Gouvernement`, `Le Parlement`, `La Magistrature`], answer: 1, explain: `Le pouvoir législatif appartient au Parlement (Chambre et Sénat).` },
        { type: `num`, q: `Combien d'années dure le mandat du Président de la République ?`, answer: 7, tol: 0, unit: `ans`, explain: `Le mandat dure 7 ans (art. 85).` },
        { type: `tf`, q: `Les juges doivent obéir aux ordres du Gouvernement.`, answer: false, explain: `La Magistrature est indépendante de tout autre pouvoir (art. 104).` }
      ]
    }
  ],
  glossary: [
    { t: `État`, d: `Peuple qui vit sur un territoire avec un pouvoir souverain propre.` },
    { t: `Constitution`, d: `La loi fondamentale d'un État ; toutes les autres lois doivent la respecter.` },
    { t: `République`, d: `Forme d'État dans laquelle le chef de l'État est élu pour une durée limitée et n'est pas un roi.` },
    { t: `Démocratie`, d: `Gouvernement dans lequel le pouvoir appartient au peuple, qui l'exerce en votant.` },
    { t: `Référendum`, d: `Vote dans lequel les citoyens décident directement sur une question.` },
    { t: `Assemblée constituante`, d: `Les 556 personnes élues en 1946 pour écrire la Constitution.` },
    { t: `Parlement`, d: `Chambre des députés et Sénat : ils détiennent le pouvoir législatif.` },
    { t: `Gouvernement`, d: `Président du Conseil et ministres : ils détiennent le pouvoir exécutif.` },
    { t: `Magistrature`, d: `L'ensemble des juges : elle détient le pouvoir judiciaire.` },
    { t: `Promulguer`, d: `Signer une loi, pour le Président de la République, afin qu'elle devienne valable.` },
    { t: `Séparation des pouvoirs`, d: `Principe selon lequel faire, appliquer et faire respecter les lois appartient à des organes différents.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Quels sont les trois éléments d'un État ?`, options: [`Peuple, territoire, souveraineté`, `Roi, armée, impôts`, `Régions, Provinces, Communes`], answer: 0, explain: `Un État existe quand un peuple vit sur un territoire avec un pouvoir souverain.` },
      { type: `num`, q: `En quelle année la Constitution italienne est-elle entrée en vigueur ?`, answer: 1948, tol: 0, explain: `Le 1er janvier 1948.` },
      { type: `order`, q: `Remets les événements dans l'ordre.`, items: [`Statut albertin`, `Dictature fasciste`, `Référendum République-Monarchie`, `Entrée en vigueur de la Constitution`], explain: `1848 → 1922 → 1946 → 1948.` },
      { type: `mc`, q: `Le pouvoir exécutif appartient…`, options: [`au Parlement`, `au Gouvernement`, `à la Magistrature`], answer: 1, explain: `Le Gouvernement applique les lois et dirige le pays.` },
      { type: `text`, q: `Comment s'appelle le palais où vit le Président de la République ?`, answer: [`quirinal`, `le quirinal`, `palais du quirinal`, `palazzo del quirinale`, `quirinale`], explain: `Le Quirinal, à Rome.` },
      { type: `num`, q: `Combien y a-t-il de députés à la Chambre ?`, answer: 400, tol: 0, explain: `Après la réforme de 2020, il y a 400 députés et 200 sénateurs élus.` },
      { type: `tf`, q: `Lors du référendum de 1946, les femmes ont voté pour la première fois lors d'un vote national.`, answer: true, explain: `C'était la première fois pour les Italiennes lors d'un vote national.` },
      { type: `mc`, q: `Que dit l'article 11 ?`, options: [`Que le drapeau est le tricolore`, `Que l'Italie répudie la guerre`, `Que l'école est obligatoire`], answer: 1, explain: `L'Italie répudie la guerre comme moyen de résoudre les conflits.` },
      { type: `order`, q: `Remets dans l'ordre le parcours d'une loi.`, items: [`Proposition`, `Approbation de la Chambre`, `Approbation du Sénat`, `Promulgation par le Président`, `Publication à la Gazzetta Ufficiale`], explain: `Proposition, vote des deux Chambres, signature du Président, publication.` },
      { type: `mc`, q: `Qui a expliqué le premier la séparation des pouvoirs ?`, options: [`Montesquieu`, `Napoléon`, `Garibaldi`], answer: 0, explain: `Montesquieu, en 1748, dans le livre « De l'esprit des lois ».` },
      { type: `tf`, q: `Les Régions à statut spécial sont 5.`, answer: true, explain: `Vallée d'Aoste, Trentin-Haut-Adige, Frioul-Vénétie Julienne, Sicile et Sardaigne.` },
      { type: `mc`, q: `Pourquoi les pouvoirs sont-ils divisés ?`, options: [`Pour économiser de l'argent`, `Pour que personne n'ait trop de pouvoir et puisse en abuser`, `Parce que l'Europe le veut`], answer: 1, explain: `Diviser le pouvoir protège la liberté : « le pouvoir arrête le pouvoir ».` }
    ]
  }
});
