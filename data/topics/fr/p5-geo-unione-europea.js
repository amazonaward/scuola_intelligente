TOPIC('fr', {
  id: `p5-geo-unione-europea`,
  title: `L'Union européenne`,
  intro: `Avec ta carte d'identité, tu peux partir en vacances en Espagne ou en Autriche sans passeport et, dans de nombreux pays, payer ta glace en <b>euros</b> comme chez toi. C'est grâce à l'<b>Union européenne</b> (UE) : 27 États qui ont décidé de collaborer. Découvrons comment elle est née, quels sont ses membres et comment fonctionnent ses <b>institutions</b>.`,
  minutes: 35,
  sections: [
    {
      type: `text`, title: `1. Pourquoi l'Union européenne est née`,
      html: `<p>Dans la première moitié du XX<sup>e</sup> siècle, l'Europe fut détruite par <b>deux guerres mondiales</b> (1914–1918 et 1939–1945). Des millions de morts, des villes rasées. Certains hommes politiques pensèrent : <i>« Si les pays européens travaillent ensemble et dépendent les uns des autres, ils ne se feront plus la guerre. »</i></p>
<ul>
<li><b>1941</b> : exilés par le fascisme sur l'île de <b>Ventotene</b>, Altiero Spinelli et Ernesto Rossi écrivent le <b>Manifeste de Ventotene</b>, qui rêve d'une Europe unie et libre.</li>
<li><b>9 mai 1950</b> : le ministre français <b>Robert Schuman</b> propose de mettre en commun le <b>charbon et l'acier</b> de la France et de l'Allemagne, les matières premières pour fabriquer des armes. C'est pour cela que le <b>9 mai</b> est la <b>Fête de l'Europe</b>.</li>
<li><b>1951</b> : naissance de la <b>CECA</b> (Communauté européenne du charbon et de l'acier) avec 6 pays.</li>
<li><b>1957</b> : avec les <b>traités de Rome</b> naît la <b>CEE</b> (Communauté économique européenne) : les marchandises et les personnes circulent plus librement.</li>
<li><b>1992</b> : avec le <b>traité de Maastricht</b> (Pays-Bas) naît l'<b>Union européenne</b>, en vigueur depuis 1993.</li>
<li><b>2002</b> : les pièces et les billets en <b>euros</b> arrivent dans les poches.</li>
</ul>`
    },
    {
      type: `text`, title: `2. Les pays fondateurs et les 27 États membres`,
      html: `<p>Les <b>6 pays fondateurs</b> (1957) furent : <b>la Belgique, la France, l'Allemagne (de l'Ouest), l'Italie, le Luxembourg et les Pays-Bas</b>.</p>
<p>Ensuite, l'Union s'est <b>élargie</b> plusieurs fois. Aujourd'hui, les États membres sont <b>27</b> :</p>
<p>Allemagne · Autriche · Belgique · Bulgarie · Chypre · Croatie · Danemark · Espagne · Estonie · Finlande · France · Grèce · Hongrie · Irlande · Italie · Lettonie · Lituanie · Luxembourg · Malte · Pays-Bas · Pologne · Portugal · République tchèque · Roumanie · Slovaquie · Slovénie · Suède</p>
<p>Le <b>Royaume-Uni</b> est entré en 1973 et en est <b>sorti</b> le 31 janvier 2020 (le « Brexit »). Certains pays, comme l'<b>Ukraine, la Moldavie, l'Albanie, le Monténégro, la Serbie</b>, sont <b>candidats</b> à l'adhésion. D'autres pays européens, comme la <b>Suisse</b> et la <b>Norvège</b>, ont choisi de ne pas en faire partie.</p>
<p>Dans l'UE vivent environ <b>450 millions</b> de personnes et on y parle <b>24 langues officielles</b>.</p>`
    },
    {
      type: `widget`, title: `Les élargissements de l'Union`,
      widget: `timeline`,
      caption: `De 6 à 28 pays, puis 27 après la sortie du Royaume-Uni.`,
      options: {
        unit: `années`,
        events: [
          { year: 1957, label: `6 fondateurs : Belgique, France, Allemagne, Italie, Luxembourg, Pays-Bas`, icon: `🌱` },
          { year: 1973, label: `+ Danemark, Irlande, Royaume-Uni (9)`, icon: `➕` },
          { year: 1981, label: `+ Grèce (10)`, icon: `➕` },
          { year: 1986, label: `+ Espagne, Portugal (12)`, icon: `➕` },
          { year: 1995, label: `+ Autriche, Finlande, Suède (15)`, icon: `➕` },
          { year: 2004, label: `+ 10 pays, dont la Pologne, Malte, Chypre (25)`, icon: `🎉` },
          { year: 2007, label: `+ Bulgarie, Roumanie (27)`, icon: `➕` },
          { year: 2013, label: `+ Croatie (28)`, icon: `➕` },
          { year: 2020, label: `Le Royaume-Uni part (27)`, icon: `👋` }
        ]
      }
    },
    {
      type: `3d`, title: `Les capitales de l'Europe sur le globe`,
      scene: `globe`,
      caption: `Fais tourner le globe : en vert les 6 fondateurs, en bleu les autres États membres, en orange les sièges des institutions.`,
      options: {
        points: [
          { lat: 41.9, lon: 12.5, label: `Rome`, color: `#22c55e` },
          { lat: 48.85, lon: 2.35, label: `Paris`, color: `#22c55e` },
          { lat: 52.52, lon: 13.4, label: `Berlin`, color: `#22c55e` },
          { lat: 52.37, lon: 4.9, label: `Amsterdam`, color: `#22c55e` },
          { lat: 50.85, lon: 4.35, label: `Bruxelles (Commission, Conseil)`, color: `#f97316` },
          { lat: 49.61, lon: 6.13, label: `Luxembourg (Cour de justice)`, color: `#f97316` },
          { lat: 48.58, lon: 7.75, label: `Strasbourg (Parlement européen)`, color: `#f97316` },
          { lat: 50.11, lon: 8.68, label: `Francfort (Banque centrale européenne)`, color: `#f97316` },
          { lat: 40.42, lon: -3.7, label: `Madrid`, color: `#3b82f6` },
          { lat: 38.72, lon: -9.14, label: `Lisbonne`, color: `#3b82f6` },
          { lat: 53.35, lon: -6.26, label: `Dublin`, color: `#3b82f6` },
          { lat: 55.68, lon: 12.57, label: `Copenhague`, color: `#3b82f6` },
          { lat: 59.33, lon: 18.07, label: `Stockholm`, color: `#3b82f6` },
          { lat: 60.17, lon: 24.94, label: `Helsinki`, color: `#3b82f6` },
          { lat: 59.44, lon: 24.75, label: `Tallinn`, color: `#3b82f6` },
          { lat: 56.95, lon: 24.1, label: `Riga`, color: `#3b82f6` },
          { lat: 54.69, lon: 25.28, label: `Vilnius`, color: `#3b82f6` },
          { lat: 52.23, lon: 21.01, label: `Varsovie`, color: `#3b82f6` },
          { lat: 50.08, lon: 14.44, label: `Prague`, color: `#3b82f6` },
          { lat: 48.15, lon: 17.11, label: `Bratislava`, color: `#3b82f6` },
          { lat: 48.21, lon: 16.37, label: `Vienne`, color: `#3b82f6` },
          { lat: 47.5, lon: 19.04, label: `Budapest`, color: `#3b82f6` },
          { lat: 46.06, lon: 14.51, label: `Ljubljana`, color: `#3b82f6` },
          { lat: 45.81, lon: 15.98, label: `Zagreb`, color: `#3b82f6` },
          { lat: 44.43, lon: 26.1, label: `Bucarest`, color: `#3b82f6` },
          { lat: 42.7, lon: 23.32, label: `Sofia`, color: `#3b82f6` },
          { lat: 37.98, lon: 23.73, label: `Athènes`, color: `#3b82f6` },
          { lat: 35.9, lon: 14.51, label: `La Valette`, color: `#3b82f6` },
          { lat: 35.17, lon: 33.36, label: `Nicosie`, color: `#3b82f6` }
        ]
      }
    },
    {
      type: `quiz`, title: `Mini-quiz : l'histoire de l'UE`,
      questions: [
        { type: `num`, q: `Combien d'États membres l'Union européenne compte-t-elle aujourd'hui ?`, answer: 27, tol: 0, explain: `27, après la sortie du Royaume-Uni en 2020.` },
        { type: `mc`, q: `Dans quelle ville les traités de 1957 ont-ils été signés ?`, options: [`Paris`, `Rome`, `Maastricht`], answer: 1, explain: `Les traités de Rome du 25 mars 1957 ont créé la CEE.` },
        { type: `tf`, q: `L'Italie est l'un des 6 pays fondateurs.`, answer: true, explain: `Avec la Belgique, la France, l'Allemagne, le Luxembourg et les Pays-Bas.` }
      ]
    },
    {
      type: `text`, title: `3. Les institutions : qui décide dans l'UE`,
      html: `<p>Comme un État, l'UE a ses organes. Les principaux sont :</p>
<table>
<tr><th>Institution</th><th>Qui en fait partie</th><th>Ce qu'elle fait</th><th>Siège</th></tr>
<tr><td>🗳️ <b>Parlement européen</b></td><td>720 députés élus par les citoyens tous les 5 ans (76 Italiens)</td><td>Adopte les lois européennes et le budget, avec le Conseil</td><td>Strasbourg et Bruxelles</td></tr>
<tr><td>🤝 <b>Conseil de l'Union européenne</b></td><td>Un ministre par État (change selon le sujet)</td><td>Adopte les lois avec le Parlement</td><td>Bruxelles</td></tr>
<tr><td>⭐ <b>Conseil européen</b></td><td>Les chefs d'État ou de gouvernement des 27 pays</td><td>Décide des grandes orientations politiques</td><td>Bruxelles</td></tr>
<tr><td>🏢 <b>Commission européenne</b></td><td>27 commissaires, un par pays, avec une présidente ou un président</td><td>Propose les lois et contrôle qu'elles sont respectées ; c'est le « gouvernement » de l'UE</td><td>Bruxelles</td></tr>
<tr><td>⚖️ <b>Cour de justice</b></td><td>Un juge par État</td><td>Contrôle que les lois européennes sont appliquées de la même façon partout</td><td>Luxembourg</td></tr>
<tr><td>💶 <b>Banque centrale européenne</b></td><td>Les gouverneurs des banques centrales</td><td>Gère l'euro</td><td>Francfort</td></tr>
</table>
<p>En bref : la <b>Commission propose</b>, le <b>Parlement et le Conseil adoptent</b>, la <b>Cour contrôle</b>.</p>`
    },
    {
      type: `svg`, title: `Comment naît une loi européenne`,
      caption: `Le « triangle » des institutions : la Commission propose, le Parlement et le Conseil décident ensemble.`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#1e3a8a"/>
<g fill="#facc15" font-size="22" text-anchor="middle">
<text x="300" y="38">★</text><text x="345" y="50">★</text><text x="378" y="82">★</text><text x="390" y="125">★</text>
<text x="378" y="168">★</text><text x="345" y="200">★</text><text x="300" y="212">★</text><text x="255" y="200">★</text>
<text x="222" y="168">★</text><text x="210" y="125">★</text><text x="222" y="82">★</text><text x="255" y="50">★</text>
</g>
<rect x="200" y="100" width="200" height="50" rx="10" fill="#f97316"/>
<text x="300" y="122" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">COMMISSION</text>
<text x="300" y="141" font-size="13" text-anchor="middle" fill="#ffffff">propose la loi</text>
<rect x="20" y="240" width="210" height="60" rx="10" fill="#3b82f6" stroke="#ffffff" stroke-width="2"/>
<text x="125" y="265" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">PARLEMENT</text>
<text x="125" y="286" font-size="13" text-anchor="middle" fill="#ffffff">voix des citoyens</text>
<rect x="370" y="240" width="210" height="60" rx="10" fill="#22c55e" stroke="#ffffff" stroke-width="2"/>
<text x="475" y="265" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">CONSEIL UE</text>
<text x="475" y="286" font-size="13" text-anchor="middle" fill="#ffffff">voix des gouvernements</text>
<line x1="250" y1="150" x2="140" y2="238" stroke="#ffffff" stroke-width="4"/>
<line x1="350" y1="150" x2="460" y2="238" stroke="#ffffff" stroke-width="4"/>
<line x1="230" y1="270" x2="370" y2="270" stroke="#facc15" stroke-width="4" stroke-dasharray="8 5"/>
<text x="300" y="262" font-size="14" text-anchor="middle" fill="#facc15" font-weight="bold">adoptent ensemble</text>
<text x="300" y="300" font-size="14" text-anchor="middle" fill="#e0e7ff">= loi européenne</text>
</svg>`
    },
    {
      type: `widget`, title: `Jeu : associe l'institution à sa mission`,
      widget: `match`,
      options: {
        pairs: [
          [`Parlement européen`, `Élu par les citoyens, adopte les lois`],
          [`Commission européenne`, `Propose les lois`],
          [`Conseil de l'UE`, `Les ministres des 27 États`],
          [`Conseil européen`, `Les chefs d'État ou de gouvernement`],
          [`Cour de justice`, `Contrôle le respect du droit de l'UE`],
          [`Banque centrale européenne`, `Gère l'euro`]
        ]
      }
    },
    {
      type: `text`, title: `4. Ce que cela change pour nous`,
      html: `<ul>
<li>🚶 <b>Libre circulation</b> : les citoyens européens peuvent vivre, étudier et travailler dans n'importe quel pays de l'UE.</li>
<li>🛂 <b>Espace Schengen</b> : entre presque tous les pays de l'UE (et aussi la Suisse, la Norvège, l'Islande et le Liechtenstein), il n'y a pas de contrôles fixes aux frontières.</li>
<li>💶 <b>Euro</b> : la monnaie unique est utilisée par <b>21 pays</b> de l'UE (la Bulgarie est la dernière arrivée, en 2026). N'utilisent pas l'euro le Danemark, la Pologne, la République tchèque, la Roumanie, la Suède et la Hongrie.</li>
<li>🎓 <b>Erasmus</b> : depuis 1987, des millions d'étudiants ont étudié pendant une période dans un autre pays européen.</li>
<li>📱 <b>Itinérance</b> (roaming) : depuis 2017, on téléphone et on navigue depuis les autres pays de l'UE sans frais supplémentaires.</li>
<li>🛒 <b>Marché unique</b> : les marchandises voyagent sans droits de douane et avec les mêmes règles de sécurité (le marquage <b>CE</b> sur les jouets !).</li>
<li>🌍 <b>Environnement</b> : des règles communes pour l'air, l'eau, le recyclage.</li>
</ul>`
    },
    {
      type: `widget`, title: `Jeu : qui utilise l'euro ?`,
      widget: `classify`,
      caption: `Tous ces pays sont dans l'UE. Lesquels paient en euros ?`,
      options: {
        groups: [`💶 Utilise l'euro`, `🪙 A une autre monnaie`],
        items: [
          [`Italie`, 0], [`Allemagne`, 0], [`Espagne`, 0], [`Croatie`, 0], [`Grèce`, 0], [`Bulgarie`, 0], [`Irlande`, 0],
          [`Suède`, 1], [`Pologne`, 1], [`Danemark`, 1], [`Roumanie`, 1], [`Hongrie`, 1]
        ]
      }
    },
    {
      type: `example`, title: `Exemple pratique : une sortie scolaire à Vienne`,
      html: `<p>La classe de Luca part en voyage scolaire de Turin à <b>Vienne</b>, en Autriche :</p>
<ul>
<li>À la frontière, il n'y a aucun contrôle fixe : l'Italie et l'Autriche font partie de l'<b>espace Schengen</b>. Il suffit d'avoir sa carte d'identité.</li>
<li>Luca achète une carte postale et paie en <b>euros</b> : pas besoin de changer de l'argent.</li>
<li>Avec le téléphone de maman, il appelle la maison au prix habituel, grâce aux règles sur l'<b>itinérance</b>.</li>
<li>S'il se blesse, la <b>carte européenne d'assurance maladie</b> (au dos de la carte de santé italienne) lui donne droit aux soins publics.</li>
</ul>`
    },
    {
      type: `example`, title: `Exemple pratique : le bouchon attaché à la bouteille`,
      html: `<p>As-tu remarqué qu'aujourd'hui les bouchons des bouteilles en plastique restent <b>attachés</b> à la bouteille ? C'est une règle européenne (une <b>directive</b> de 2019, obligatoire depuis juillet 2024) contre le plastique dispersé dans la nature : les bouchons étaient parmi les déchets les plus trouvés sur les plages.</p>
<p>Voici comment cela fonctionne : la <b>Commission</b> a proposé la règle, le <b>Parlement</b> et le <b>Conseil</b> l'ont adoptée, puis chaque État l'a intégrée à ses lois. Une décision prise à Bruxelles et à Strasbourg arrive jusqu'à ton goûter !</p>`
    },
    {
      type: `remember`, title: `À retenir`,
      html: `<ul>
<li><b>1957</b> traités de Rome (6 fondateurs) → <b>1992</b> Maastricht : naissance de l'UE → <b>2002</b> l'euro dans les poches.</li>
<li><b>27</b> États membres, environ <b>450 millions</b> d'habitants, <b>24</b> langues officielles.</li>
<li>La Commission <b>propose</b>, le Parlement + le Conseil <b>adoptent</b>, la Cour <b>contrôle</b>.</li>
<li>Symboles : drapeau avec <b>12 étoiles</b> dorées, hymne « <b>Ode à la joie</b> », devise « <b>Unie dans la diversité</b> », fête le <b>9 mai</b>.</li>
</ul>`
    },
    {
      type: `curiosity`, title: `Le savais-tu ? Les 12 étoiles ne sont pas les pays`,
      html: `<p>Beaucoup pensent que les étoiles du drapeau européen correspondent chacune à un État. En réalité, il y en a <b>toujours 12</b>, même si les pays sont 27 ! Le nombre 12 est un symbole de <b>plénitude et d'harmonie</b> (comme les mois de l'année ou les heures sur le cadran d'une horloge), et le cercle représente l'<b>union</b> entre les peuples.</p>`
    },
    {
      type: `curiosity`, title: `Le savais-tu ? L'hymne européen n'a pas de paroles`,
      html: `<p>L'hymne de l'UE est l'<b>Ode à la joie</b>, tirée de la Neuvième Symphonie de <b>Ludwig van Beethoven</b> (1824). On le joue seulement en musique, sans paroles, pour qu'aucune langue ne soit privilégiée : la musique est un langage que tout le monde comprend.</p>`
    },
    {
      type: `curiosity`, title: `Le savais-tu ? L'UE a gagné un prix Nobel`,
      html: `<p>En <b>2012</b>, l'Union européenne a reçu le <b>prix Nobel de la paix</b>, pour avoir transformé un continent de guerres en un continent de paix, en aidant à la réconciliation entre des ennemis historiques comme la France et l'Allemagne.</p>`
    },
    {
      type: `alternatives`, title: `D'autres façons de comprendre`,
      intro: `L'UE est une construction compliquée. Voici d'autres façons de l'imaginer.`,
      tabs: [
        {
          label: `🏘️ Comme un immeuble`,
          html: `<p>Imagine un grand <b>immeuble</b> de 27 appartements. Chaque famille (État) décide seule chez elle : décoration, horaires, dîners. Mais pour les choses <b>communes</b> (ascenseur, jardin, toit), on décide <b>ensemble</b> à l'assemblée des copropriétaires.</p>
<ul>
<li>Le <b>syndic</b>, qui prépare les propositions et contrôle que les règles sont respectées, est comme la <b>Commission</b>.</li>
<li>L'<b>assemblée des copropriétaires</b> est comme le <b>Parlement</b> et le <b>Conseil</b>.</li>
<li>Le <b>règlement</b> de l'immeuble est comme les <b>traités</b>.</li>
</ul>
<p>Aucune famille ne perd sa maison : elle met en commun seulement certaines choses pour mieux vivre.</p>`
        },
        {
          label: `🧩 Poupées russes de règles`,
          html: `<p>Tu es citoyen de plusieurs « niveaux » emboîtés les uns dans les autres, comme des poupées russes :</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f8fafc"/>
<ellipse cx="300" cy="130" rx="285" ry="120" fill="#1e3a8a"/>
<ellipse cx="330" cy="140" rx="215" ry="95" fill="#16a34a"/>
<ellipse cx="365" cy="150" rx="150" ry="70" fill="#f59e0b"/>
<ellipse cx="400" cy="160" rx="85" ry="45" fill="#ef4444"/>
<text x="90" y="135" font-size="17" fill="#facc15" font-weight="bold">UE ★</text>
<text x="175" y="150" font-size="17" fill="#ffffff" font-weight="bold">ITALIE</text>
<text x="235" y="160" font-size="16" fill="#ffffff" font-weight="bold">Région</text>
<text x="400" y="166" font-size="17" text-anchor="middle" fill="#ffffff" font-weight="bold">Commune</text>
</svg>`
        },
        {
          label: `🇪🇺 Les drapeaux`,
          html: `<p>Reconnais-tu les pays à l'aspect de leur drapeau ? Retourne les cartes !</p>`,
          widget: `flashcards`,
          options: {
            cards: [
              { front: `🇮🇹`, back: `Italie – Rome` },
              { front: `🇫🇷`, back: `France – Paris` },
              { front: `🇩🇪`, back: `Allemagne – Berlin` },
              { front: `🇪🇸`, back: `Espagne – Madrid` },
              { front: `🇵🇹`, back: `Portugal – Lisbonne` },
              { front: `🇧🇪`, back: `Belgique – Bruxelles` },
              { front: `🇳🇱`, back: `Pays-Bas – Amsterdam` },
              { front: `🇦🇹`, back: `Autriche – Vienne` },
              { front: `🇬🇷`, back: `Grèce – Athènes` },
              { front: `🇷🇴`, back: `Roumanie – Bucarest` },
              { front: `🇵🇱`, back: `Pologne – Varsovie` },
              { front: `🇸🇪`, back: `Suède – Stockholm` }
            ]
          }
        },
        {
          label: `🌍 D'autres unions dans le monde`,
          html: `<p>L'UE n'est pas la seule union de pays. Il y en a d'autres, mais aucune n'est aussi étroite :</p>
<ul>
<li><b>Union africaine</b> (55 pays, siège à Addis-Abeba).</li>
<li><b>ASEAN</b> (pays d'Asie du Sud-Est, siège à Jakarta).</li>
<li><b>Mercosur</b> (Amérique du Sud : Brésil, Argentine, Uruguay, Paraguay, Bolivie).</li>
</ul>
<p>Seule l'UE a un <b>Parlement élu directement</b> par les citoyens de nombreux pays et une monnaie commune à de nombreux membres.</p>`,
          scene: `globe`,
          options: {
            points: [
              { lat: 50.85, lon: 4.35, label: `Union européenne – Bruxelles`, color: `#1e3a8a` },
              { lat: 9.03, lon: 38.74, label: `Union africaine – Addis-Abeba`, color: `#16a34a` },
              { lat: -6.2, lon: 106.85, label: `ASEAN – Jakarta`, color: `#ef4444` },
              { lat: -34.9, lon: -56.16, label: `Mercosur – Montevideo`, color: `#f59e0b` }
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Carte : de la guerre à l'Union`,
      nodes: [
        { id: `guerre`, label: `Deux guerres mondiales`, x: 50, y: 6, color: `#64748b`, html: `1914–1918 et 1939–1945 : l'Europe détruite.`, why: `La France et l'Allemagne s'étaient battues trois fois en 70 ans (1870, 1914, 1939). Il fallait un moyen de rendre la guerre impossible, pas seulement interdite.` },
        { id: `ventotene`, label: `Manifeste de Ventotene`, x: 18, y: 28, color: `#a855f7`, html: `1941 : le rêve d'une Europe fédérale.`, why: `Spinelli et Rossi, prisonniers politiques du fascisme, écrivirent sur des papiers à cigarettes que seul le dépassement des nationalismes donnerait la paix à l'Europe. Le texte sortit clandestinement de l'île.` },
        { id: `schuman`, label: `Déclaration Schuman`, x: 50, y: 28, color: `#3b82f6`, html: `9 mai 1950 : charbon et acier en commun.`, why: `L'idée, préparée par Jean Monnet, était pratique : celui qui contrôle ensemble le charbon et l'acier (qui servent à fabriquer des armes) ne peut pas préparer une guerre en cachette. « L'Europe se fera par des réalisations concrètes. »` },
        { id: `roma`, label: `Traités de Rome`, x: 82, y: 28, color: `#22c55e`, html: `1957 : naissance de la CEE des 6 fondateurs.`, why: `Après le succès de la CECA, les 6 pays décidèrent d'unir toute l'économie : un marché commun sans droits de douane. Ils furent signés au Capitole le 25 mars 1957.` },
        { id: `maastricht`, label: `Maastricht`, x: 50, y: 52, color: `#f59e0b`, html: `1992 : naissance de l'Union européenne et de la citoyenneté européenne.`, why: `Après la chute du mur de Berlin (1989) et la réunification allemande, les pays voulurent une union aussi politique, avec une monnaie commune et des droits communs pour les citoyens.` },
        { id: `istituzioni`, label: `Institutions`, x: 18, y: 78, color: `#0ea5e9`, html: `Commission, Parlement, Conseil, Cour, BCE.`, why: `Elles forment un équilibre entre deux besoins : donner la parole aux <b>citoyens</b> (Parlement élu, depuis 1979) et aux <b>gouvernements</b> des États (Conseils), avec un organe « de tous » qui propose (Commission).` },
        { id: `euro`, label: `Euro`, x: 50, y: 78, color: `#eab308`, html: `Monnaie commune depuis 1999 (dans les poches depuis 2002).`, why: `Avec une seule monnaie, on ne perd ni temps ni argent à changer de devise et on compare facilement les prix. Pour entrer, un État doit avoir ses comptes en ordre (les « critères de Maastricht »).` },
        { id: `cittadini`, label: `Droits des citoyens`, x: 82, y: 78, color: `#ef4444`, html: `Libre circulation, Schengen, Erasmus.`, why: `L'espace Schengen porte le nom du petit village du Luxembourg où l'accord fut signé en 1985. Erasmus porte le nom de l'humaniste Érasme de Rotterdam, qui voyagea et étudia dans toute l'Europe.` }
      ],
      edges: [
        [`guerre`, `ventotene`, `inspire`], [`guerre`, `schuman`, `pousse à`], [`schuman`, `roma`, `mène à`],
        [`roma`, `maastricht`, `s'élargit en`], [`ventotene`, `maastricht`, `rêve réalisé`],
        [`maastricht`, `istituzioni`, `renforce`], [`maastricht`, `euro`, `crée`], [`maastricht`, `cittadini`, `donne`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz : institutions et symboles`,
      questions: [
        { type: `mc`, q: `Quelle institution propose les lois européennes ?`, options: [`La Commission européenne`, `La Cour de justice`, `La Banque centrale européenne`], answer: 0, explain: `La Commission a le « droit d'initiative » : elle propose les lois.` },
        { type: `mc`, q: `Combien d'étoiles y a-t-il sur le drapeau européen ?`, options: [`27`, `12`, `6`], answer: 1, explain: `Il y en a 12, symbole de plénitude, et elles ne changent pas avec le nombre de pays.` },
        { type: `tf`, q: `Le Parlement européen est élu directement par les citoyens.`, answer: true, explain: `Depuis 1979, les citoyens l'élisent tous les 5 ans.` }
      ]
    }
  ],
  glossary: [
    { t: `Union européenne (UE)`, d: `Union politique et économique de 27 États européens.` },
    { t: `État membre`, d: `Pays qui fait partie de l'Union européenne.` },
    { t: `Traité`, d: `Accord écrit entre États ; les traités sont les « règles de base » de l'UE.` },
    { t: `Commission européenne`, d: `Institution qui propose les lois et contrôle leur application.` },
    { t: `Parlement européen`, d: `Assemblée de 720 députés élus par les citoyens européens.` },
    { t: `Conseil de l'UE`, d: `Réunion des ministres des États membres ; il adopte les lois avec le Parlement.` },
    { t: `Euro`, d: `Monnaie commune utilisée par 21 pays de l'UE.` },
    { t: `Espace Schengen`, d: `Zone sans contrôles fixes aux frontières intérieures.` },
    { t: `Erasmus`, d: `Programme qui permet d'étudier dans un autre pays européen.` },
    { t: `Brexit`, d: `Sortie du Royaume-Uni de l'UE (31 janvier 2020).` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `num`, q: `Combien y avait-il de pays fondateurs en 1957 ?`, answer: 6, tol: 0, explain: `Belgique, France, Allemagne, Italie, Luxembourg, Pays-Bas.` },
      { type: `mc`, q: `Lequel de ces pays n'est PAS un fondateur ?`, options: [`Italie`, `Espagne`, `Belgique`], answer: 1, explain: `L'Espagne est entrée en 1986.` },
      { type: `order`, q: `Remets dans l'ordre.`, items: [`Manifeste de Ventotene`, `Déclaration Schuman`, `Traités de Rome`, `Traité de Maastricht`, `L'euro dans les poches`], explain: `1941 → 1950 → 1957 → 1992 → 2002.` },
      { type: `mc`, q: `Où siège la Cour de justice de l'UE ?`, options: [`Bruxelles`, `Luxembourg`, `Francfort`], answer: 1, explain: `À Luxembourg.` },
      { type: `text`, q: `Comment s'appelle la monnaie commune européenne ?`, answer: [`euro`, `l'euro`, `l euro`, `l’euro`], explain: `L'euro.` },
      { type: `tf`, q: `Tous les pays de l'UE utilisent l'euro.`, answer: false, explain: `6 pays de l'UE ont encore leur propre monnaie, comme la Pologne et la Suède.` },
      { type: `mc`, q: `Que fête-t-on le 9 mai ?`, options: [`La Fête de l'Europe`, `La Fête de la République`, `La fin de la guerre`], answer: 0, explain: `Elle rappelle la Déclaration Schuman du 9 mai 1950.` },
      { type: `mc`, q: `Quel pays est sorti de l'UE en 2020 ?`, options: [`Irlande`, `Royaume-Uni`, `Norvège`], answer: 1, explain: `Le Royaume-Uni, avec le Brexit.` },
      { type: `mc`, q: `Qui adopte les lois européennes ?`, options: [`Seulement la Commission`, `Le Parlement européen et le Conseil de l'UE ensemble`, `La Banque centrale européenne`], answer: 1, explain: `La Commission propose, le Parlement et le Conseil adoptent.` },
      { type: `text`, q: `Comment s'appelle l'hymne européen ?`, answer: [`ode à la joie`, `l'ode à la joie`, `hymne à la joie`, `l'hymne à la joie`, `ode a la joie`], explain: `L'Ode à la joie de Beethoven.` },
      { type: `tf`, q: `Grâce à Schengen, il n'y a pas de contrôles fixes à la frontière entre l'Italie et la France.`, answer: true, explain: `Les deux pays font partie de l'espace Schengen.` },
      { type: `num`, q: `Combien y a-t-il de langues officielles dans l'UE ?`, answer: 24, tol: 0, explain: `24 langues officielles, dont l'italien.` }
    ]
  }
});
