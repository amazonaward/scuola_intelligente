TOPIC('fr', {
  id: `l1-lat-indicativo-coniugazioni`,
  title: `L'indicatif des quatre conjugaisons`,
  intro: `Le verbe est le cœur de la phrase latine : si tu le reconnais et l'analyses bien, la traduction est à moitié faite. Dans cette leçon, tu apprends à conjuguer les verbes réguliers aux trois temps simples de l'indicatif : <b>présent</b>, <b>imparfait</b> et <b>futur simple</b>, à la <b>voix active</b> comme à la <b>voix passive</b>, dans les quatre conjugaisons (plus la 3e « mixte » en <i>-io</i>), ainsi que le verbe <b>sum</b>. Les règles sont peu nombreuses et très régulières : radical + marque du temps + désinence personnelle. Avec un peu d'entraînement, tu conjugueras des centaines de verbes par cœur. ⚔️📜`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Comment est fait un verbe latin`,
      html: `<p>Un verbe latin se compose de <b>radical + (marque du temps) + désinence personnelle</b>. Par exemple <i>ama-ba-mus</i> = radical <i>ama-</i> + marque de l'imparfait <i>-ba-</i> + désinence <i>-mus</i> (« nous aimions »).</p>
<p>Chaque forme verbale te donne quatre informations : la <b>personne</b> (1re, 2e, 3e), le <b>nombre</b> (singulier, pluriel), le <b>temps</b> (présent, imparfait, futur…), la <b>voix</b> (active ou passive), et en plus le <b>mode</b> (ici toujours l'indicatif).</p>
<p><b>Les temps primitifs</b> : dans le dictionnaire, chaque verbe est donné avec quatre (ou cinq) formes qui permettent de construire tout le reste :</p>
<table>
<tr><th>Conjug.</th><th>Présent (1re sing.)</th><th>2e sing.</th><th>Parfait</th><th>Supin</th><th>Infinitif</th><th>Sens</th></tr>
<tr><td>1re</td><td>amo</td><td>amas</td><td>amavi</td><td>amatum</td><td>amāre</td><td>aimer</td></tr>
<tr><td>2e</td><td>moneo</td><td>mones</td><td>monui</td><td>monitum</td><td>monēre</td><td>avertir, conseiller</td></tr>
<tr><td>3e</td><td>lego</td><td>legis</td><td>legi</td><td>lectum</td><td>legĕre</td><td>lire</td></tr>
<tr><td>4e</td><td>audio</td><td>audis</td><td>audivi</td><td>auditum</td><td>audīre</td><td>entendre, écouter</td></tr>
<tr><td>3e mixte</td><td>capio</td><td>capis</td><td>cepi</td><td>captum</td><td>capĕre</td><td>prendre</td></tr>
</table>
<p>Pour les temps de l'<b>infectum</b> (présent, imparfait, futur), il suffit de la <b>1re personne</b>, de la <b>2e personne</b> et de l'<b>infinitif</b>. Le <b>radical du présent</b> s'obtient en enlevant <b>-re</b> à l'infinitif : <i>ama-, mone-, lege-, audi-, cape-</i> (dans la 3e, la dernière voyelle se modifie : <i>leg-</i> + voyelle de liaison).</p>`
    },
    {
      type: `text`, title: `2. Le présent de l'indicatif actif`,
      html: `<p>Les <b>désinences personnelles actives</b> sont : <b>-o (-m), -s, -t, -mus, -tis, -nt</b>.</p>
<table>
<tr><th></th><th>1re amāre</th><th>2e monēre</th><th>3e legĕre</th><th>4e audīre</th><th>3e mixte capĕre</th></tr>
<tr><td>je</td><td>amo</td><td>moneo</td><td>lego</td><td>audio</td><td>capio</td></tr>
<tr><td>tu</td><td>amas</td><td>mones</td><td>legis</td><td>audis</td><td>capis</td></tr>
<tr><td>il</td><td>amat</td><td>monet</td><td>legit</td><td>audit</td><td>capit</td></tr>
<tr><td>nous</td><td>amamus</td><td>monemus</td><td>legimus</td><td>audimus</td><td>capimus</td></tr>
<tr><td>vous</td><td>amatis</td><td>monetis</td><td>legitis</td><td>auditis</td><td>capitis</td></tr>
<tr><td>ils</td><td>amant</td><td>monent</td><td>legunt</td><td>audiunt</td><td>capiunt</td></tr>
</table>
<p>La <b>voyelle thématique</b> est : <b>a</b> (1re), <b>e</b> (2e), <b>i/u/e bref</b> (3e), <b>i</b> (4e). Attention aux différences :</p>
<ul>
<li>1re conjugaison : le <i>a</i> tombe devant le <i>o</i> (<i>amo</i>, et non <s>amao</s>).</li>
<li>2e : le <i>e</i> reste partout (<i>moneo, monent</i>).</li>
<li>3e : la voyelle de liaison est <b>-i-</b> aux 2e, 3e pers. du sing. et 1re, 2e du plur. (<i>legis, legit, legimus, legitis</i>), <b>-u-</b> à la 3e du plur. (<i>legunt</i>).</li>
<li>4e et 3e mixte : le <i>-i-</i> reste dans toutes les formes, et la 3e du plur. est en <b>-iunt</b> (<i>audiunt, capiunt</i>).</li>
</ul>
<p><b>Valeur</b> : le présent latin se traduit par le présent français (<i>amo</i> = j'aime, je suis en train d'aimer). Il n'y a pas de différence entre « j'aime » et « je suis en train d'aimer ».</p>`
    },
    {
      type: `svg`, title: `Former une forme verbale`,
      caption: `Radical + marque du temps + désinence personnelle : la formule de toutes les formes de l'indicatif actif.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eef2ff"/>
<text x="300" y="30" font-size="20" font-weight="bold" fill="#312e81" text-anchor="middle">COMMENT ON CONSTRUIT UN VERBE</text>
<rect x="30" y="50" width="160" height="70" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
<text x="110" y="82" font-size="26" font-weight="bold" fill="#14532d" text-anchor="middle">ama-</text>
<text x="110" y="106" font-size="14" fill="#14532d" text-anchor="middle">RADICAL (de amāre)</text>
<text x="212" y="92" font-size="30" fill="#334155" text-anchor="middle">+</text>
<rect x="232" y="50" width="136" height="70" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
<text x="300" y="82" font-size="26" font-weight="bold" fill="#78350f" text-anchor="middle">-ba-</text>
<text x="300" y="106" font-size="14" fill="#78350f" text-anchor="middle">MARQUE imparfait</text>
<text x="390" y="92" font-size="30" fill="#334155" text-anchor="middle">+</text>
<rect x="410" y="50" width="160" height="70" rx="10" fill="#fee2e2" stroke="#dc2626" stroke-width="3"/>
<text x="490" y="82" font-size="26" font-weight="bold" fill="#7f1d1d" text-anchor="middle">-mus</text>
<text x="490" y="106" font-size="14" fill="#7f1d1d" text-anchor="middle">DÉSINENCE (nous)</text>
<text x="300" y="165" font-size="24" font-weight="bold" fill="#312e81" text-anchor="middle">amabamus = nous aimions</text>
<text x="300" y="205" font-size="16" fill="#334155" text-anchor="middle">Imparfait : -ba- (-bam, -bas, -bat, -bamus, -batis, -bant)</text>
<text x="300" y="232" font-size="16" fill="#334155" text-anchor="middle">Futur 1re et 2e : -bo, -bis, -bit, -bimus, -bitis, -bunt</text>
<text x="300" y="259" font-size="16" fill="#334155" text-anchor="middle">Futur 3e et 4e : -am, -es, -et, -emus, -etis, -ent</text>
<text x="300" y="284" font-size="16" font-weight="bold" fill="#312e81" text-anchor="middle">Passif : -r, -ris, -tur, -mur, -mini, -ntur</text>
</svg>`
    },
    {
      type: `example`, title: `Les verbes en action : le présent`,
      html: `<p><i>Magister pueros docet, pueri libros legunt, puellae cantant.</i></p>
<ul>
<li><b>docet</b> : 3e sing. de <i>doceo, docēre</i> (enseigner) : « le maître enseigne » ;</li>
<li><b>legunt</b> : 3e plur. de <i>lego</i> : « les garçons lisent les livres » ;</li>
<li><b>cantant</b> : 3e plur. de <i>canto, cantāre</i> : « les filles chantent ».</li>
</ul>
<p>Observe : <b>pueros</b> est un accusatif pluriel et indique qui reçoit l'enseignement ; <b>pueri</b> est un nominatif pluriel et sert de sujet à <i>legunt</i>. Le verbe se place en général <b>à la fin</b> de la phrase.</p>
<p>Le verbe s'accorde <b>en personne et en nombre</b> avec le sujet : <i>agricola laborat</i> (sing.), <i>agricolae laborant</i> (plur.). Le sujet de 1re et 2e personne n'est généralement pas exprimé : <i>laboro</i> = je travaille.</p>`
    },
    {
      type: `quiz`, title: `Mini-quiz : le présent`,
      questions: [
        { type: `text`, q: `Écris « ils entendent » (audio, audire).`, answer: [`audiunt`], explain: `4e conjugaison : 3e personne du pluriel en -iunt : audiunt.` },
        { type: `mc`, q: `« Legitis » signifie…`, options: [`il lit`, `vous lisez`, `ils lisent`], answer: 1, explain: `-tis = vous : legitis = vous lisez.` },
        { type: `mc`, q: `Comment obtient-on le radical du présent ?`, options: [`en enlevant -re à l'infinitif`, `en enlevant -o à la 1re personne`, `en ajoutant -s au parfait`], answer: 0, explain: `À partir de l'infinitif sans -re : ama-, mone-, lege-, audi-.` }
      ]
    },
    {
      type: `text`, title: `3. L'imparfait de l'indicatif actif`,
      html: `<p>Il exprime une action <b>passée non achevée</b> : qui dure, habituelle, descriptive (en français : <i>j'aimais</i>, <i>j'étais en train d'aimer</i>). Il se forme avec le <b>radical + -ba- + désinences</b> : <b>-bam, -bas, -bat, -bamus, -batis, -bant</b>. Dans la 1re conjugaison, il suffit de les ajouter au radical ; dans les autres, il y a une voyelle de liaison longue <b>-ē-</b> : 2e et 3e <i>-ebam</i> ; 4e et 3e mixte <i>-iebam</i>.</p>
<table>
<tr><th></th><th>1re</th><th>2e</th><th>3e</th><th>4e</th><th>3e mixte</th></tr>
<tr><td>je</td><td>ama<b>bam</b></td><td>mone<b>bam</b></td><td>leg<b>ebam</b></td><td>audi<b>ebam</b></td><td>capi<b>ebam</b></td></tr>
<tr><td>tu</td><td>ama<b>bas</b></td><td>mone<b>bas</b></td><td>leg<b>ebas</b></td><td>audi<b>ebas</b></td><td>capi<b>ebas</b></td></tr>
<tr><td>il</td><td>ama<b>bat</b></td><td>mone<b>bat</b></td><td>leg<b>ebat</b></td><td>audi<b>ebat</b></td><td>capi<b>ebat</b></td></tr>
<tr><td>nous</td><td>ama<b>bamus</b></td><td>mone<b>bamus</b></td><td>leg<b>ebamus</b></td><td>audi<b>ebamus</b></td><td>capi<b>ebamus</b></td></tr>
<tr><td>vous</td><td>ama<b>batis</b></td><td>mone<b>batis</b></td><td>leg<b>ebatis</b></td><td>audi<b>ebatis</b></td><td>capi<b>ebatis</b></td></tr>
<tr><td>ils</td><td>ama<b>bant</b></td><td>mone<b>bant</b></td><td>leg<b>ebant</b></td><td>audi<b>ebant</b></td><td>capi<b>ebant</b></td></tr>
</table>
<p>Astuce : la syllabe <b>-ba-</b> apparaît dans toutes les formes de l'imparfait ; dans la <b>3e et la 4e</b>, on insère un <b>-e-</b> avant -ba- (<i>-eba-</i>). Exemple : <i>Romani in foro conveniebant</i> (« les Romains se réunissaient [d'habitude] sur le forum »).</p>`
    },
    {
      type: `text`, title: `4. Le futur simple actif`,
      html: `<p>Il indique une action qui aura lieu (en français : <i>j'aimerai</i>). Il a <b>deux modèles</b> :</p>
<h4>A. 1re et 2e conjugaisons : radical + <b>-bo, -bis, -bit, -bimus, -bitis, -bunt</b></h4>
<table>
<tr><th></th><th>1re</th><th>2e</th></tr>
<tr><td>je</td><td>ama<b>bo</b></td><td>mone<b>bo</b></td></tr>
<tr><td>tu</td><td>ama<b>bis</b></td><td>mone<b>bis</b></td></tr>
<tr><td>il</td><td>ama<b>bit</b></td><td>mone<b>bit</b></td></tr>
<tr><td>nous</td><td>ama<b>bimus</b></td><td>mone<b>bimus</b></td></tr>
<tr><td>vous</td><td>ama<b>bitis</b></td><td>mone<b>bitis</b></td></tr>
<tr><td>ils</td><td>ama<b>bunt</b></td><td>mone<b>bunt</b></td></tr>
</table>
<h4>B. 3e, 4e et 3e mixte : radical + <b>-am, -es, -et, -emus, -etis, -ent</b></h4>
<table>
<tr><th></th><th>3e</th><th>4e</th><th>3e mixte</th></tr>
<tr><td>je</td><td>leg<b>am</b></td><td>audi<b>am</b></td><td>capi<b>am</b></td></tr>
<tr><td>tu</td><td>leg<b>es</b></td><td>audi<b>es</b></td><td>capi<b>es</b></td></tr>
<tr><td>il</td><td>leg<b>et</b></td><td>audi<b>et</b></td><td>capi<b>et</b></td></tr>
<tr><td>nous</td><td>leg<b>emus</b></td><td>audi<b>emus</b></td><td>capi<b>emus</b></td></tr>
<tr><td>vous</td><td>leg<b>etis</b></td><td>audi<b>etis</b></td><td>capi<b>etis</b></td></tr>
<tr><td>ils</td><td>leg<b>ent</b></td><td>audi<b>ent</b></td><td>capi<b>ent</b></td></tr>
</table>
<p><b>Attention aux pièges !</b> La 1re pers. du sing. du futur de la 3e et de la 4e (<i>legam, audiam</i>) ressemble à un accusatif (-am) ; le futur de la 3e (<i>leges, leget</i>) a les mêmes désinences que le présent de la 2e (<i>mones, monet</i>) : regarde toujours le radical pour identifier la conjugaison ; les formes <i>amabo</i> / <i>amabam</i> se distinguent par la marque : <b>-bo</b> = futur, <b>-bam</b> = imparfait. Le radical t'indique la conjugaison.</p>`
    },
    {
      type: `remember`, title: `Tableau récapitulatif des temps de l'infectum (actif)`,
      html: `<table>
<tr><th>Temps</th><th>1re et 2e</th><th>3e et 4e</th></tr>
<tr><td>Présent</td><td>radical + -o/-s/-t/-mus/-tis/-nt</td><td>radical + -o/-s/-t/-mus/-tis/-nt (3e : voyelle -i-/-u- ; 4e : -iunt)</td></tr>
<tr><td>Imparfait</td><td>-ba- (amabam, monebam)</td><td>-eba- (legebam, audiebam)</td></tr>
<tr><td>Futur</td><td>-bo, -bis, -bit… (amabo, monebo)</td><td>-am, -es, -et… (legam, audiam)</td></tr>
</table>
<p><b>Pour retenir</b> : imparfait = <b>BA</b>, futur 1re/2e = <b>BO/BI</b>, futur 3e/4e = <b>A/E</b> (« am, es, et »).</p>`
    },
    {
      type: `widget`, title: `Jeu : quel temps est-ce ?`,
      widget: `classify`,
      options: {
        groups: [`Présent`, `Imparfait`, `Futur`],
        items: [
          [`amant`, 0], [`legis`, 0], [`audimus`, 0], [`monetis`, 0],
          [`amabam`, 1], [`legebant`, 1], [`audiebat`, 1], [`monebamus`, 1],
          [`amabo`, 2], [`legam`, 2], [`audient`, 2], [`monebunt`, 2]
        ]
      },
      caption: `Marques du temps : pas de marque = présent ; -ba-/-eba- = imparfait ; -bo/-bi/-bu ou -a/-e = futur.`
    },
    {
      type: `text`, title: `5. La voix passive`,
      html: `<p>À la voix passive, le sujet <b>subit</b> l'action : <i>Puella laudatur</i> = « La jeune fille est louée ». Le complément d'agent (celui qui fait l'action) s'exprime par <b>a / ab + ablatif</b> pour les personnes (<i>a magistro</i>) et par l'<b>ablatif seul</b> pour les choses (cause ou moyen : <i>gladio</i>, « par l'épée »).</p>
<p>Les <b>désinences personnelles passives</b> sont : <b>-r, -ris, -tur, -mur, -mini, -ntur</b> (au présent, la 1re sing. est en <b>-or</b> avec le <i>o</i> thématique).</p>
<table>
<tr><th>Présent passif</th><th>1re</th><th>2e</th><th>3e</th><th>4e</th><th>3e mixte</th></tr>
<tr><td>je</td><td>amor</td><td>moneor</td><td>legor</td><td>audior</td><td>capior</td></tr>
<tr><td>tu</td><td>amaris</td><td>moneris</td><td>legeris</td><td>audiris</td><td>caperis</td></tr>
<tr><td>il</td><td>amatur</td><td>monetur</td><td>legitur</td><td>auditur</td><td>capitur</td></tr>
<tr><td>nous</td><td>amamur</td><td>monemur</td><td>legimur</td><td>audimur</td><td>capimur</td></tr>
<tr><td>vous</td><td>amamini</td><td>monemini</td><td>legimini</td><td>audimini</td><td>capimini</td></tr>
<tr><td>ils</td><td>amantur</td><td>monentur</td><td>leguntur</td><td>audiuntur</td><td>capiuntur</td></tr>
</table>
<p>Imparfait passif : <b>radical + -ba- + -r, -ris, -tur, -mur, -mini, -ntur</b>, avec la 1re sing. en <b>-bar</b> et la 2e sing. en <b>-baris</b> (<i>amabar, amabaris, amabatur, amabamur, amabamini, amabantur</i> ; <i>legebar, audiebar</i>…).</p>
<p>Futur passif :</p>
<ul>
<li><b>1re et 2e</b> : <i>amabor, amaberis, amabitur, amabimur, amabimini, amabuntur</i> (<i>monebor, moneberis…</i>) ;</li>
<li><b>3e et 4e</b> : <i>legar, legeris, legetur, legemur, legemini, legentur</i> ; <i>audiar, audieris, audietur, audiemur, audiemini, audientur</i>.</li>
</ul>
<p>Remarque : la <b>2e sing.</b> du présent passif de la 3e (<i>legeris</i>) coïncide avec le futur passif de la 3e (<i>legeris</i>) : le contexte (et le temps des autres verbes) t'aidera à choisir.</p>`
    },
    {
      type: `example`, title: `Actif et passif comparés`,
      html: `<table>
<tr><th>Actif</th><th>Passif</th></tr>
<tr><td><i>Magister puerum laudat.</i><br>Le maître loue le garçon.</td><td><i>Puer a magistro laudatur.</i><br>Le garçon est loué par le maître.</td></tr>
<tr><td><i>Agricolae agros arabant.</i><br>Les paysans labouraient les champs.</td><td><i>Agri ab agricolis arabantur.</i><br>Les champs étaient labourés par les paysans.</td></tr>
<tr><td><i>Poeta carmen scribet.</i><br>Le poète écrira un poème.</td><td><i>Carmen a poeta scribetur.</i><br>Un poème sera écrit par le poète.</td></tr>
</table>
<p>Le <b>COD</b> de la phrase active devient le <b>sujet</b> de la phrase passive (accusatif ➜ nominatif) ; l'ancien sujet devient <b>complément d'agent</b> (<i>a/ab</i> + ablatif). Le verbe passif s'accorde avec le nouveau sujet en personne et en nombre.</p>`
    },
    {
      type: `text`, title: `6. Le verbe sum au présent, à l'imparfait et au futur`,
      html: `<p>Le verbe <i>être</i> est irrégulier, mais il est employé sans arrêt : <b>sum, es, fui, esse</b>.</p>
<table>
<tr><th></th><th>Présent</th><th>Imparfait</th><th>Futur</th></tr>
<tr><td>je</td><td>sum</td><td>eram</td><td>ero</td></tr>
<tr><td>tu</td><td>es</td><td>eras</td><td>eris</td></tr>
<tr><td>il</td><td>est</td><td>erat</td><td>erit</td></tr>
<tr><td>nous</td><td>sumus</td><td>eramus</td><td>erimus</td></tr>
<tr><td>vous</td><td>estis</td><td>eratis</td><td>eritis</td></tr>
<tr><td>ils</td><td>sunt</td><td>erant</td><td>erunt</td></tr>
</table>
<p>L'imparfait est régulier (radical <i>er-</i> + <i>-am, -as, -at…</i>) ; le futur ressemble à celui de la 3e (<i>-o, -is, -it, -imus, -itis, -unt</i>). Comme on l'a vu, <i>sum</i> peut être <b>copule</b> (<i>Rosa est pulchra</i>) ou avoir un <b>sens plein</b> (<i>Romae sumus</i>, « nous sommes à Rome »). Les composés de <i>sum</i> se conjuguent de la même façon : <i>adsum, adesse</i> (être présent), <i>absum</i> (être absent), <i>possum</i> (<i>pot-</i> + <i>sum</i> : pouvoir).</p>`
    },
    {
      type: `curiosity`, title: `Le savais-tu ? « Amabo » signifie aussi « s'il te plaît »`,
      html: `<p>En latin, <i>amabo te</i> (littéralement « je t'aimerai ») était une formule de politesse employée surtout dans le théâtre comique (Plaute), avec le sens de « je t'en prie, s'il te plaît ». Le français « s'il te plaît » a une fonction semblable. Et <i>amabo</i> et <i>amabis</i> sont aussi des formes du futur : tout dépend du contexte.</p>`
    },
    {
      type: `curiosity`, title: `Le savais-tu ? Les langues romanes ont renouvelé le futur`,
      html: `<p>Le français <i>aimerai</i> (comme l'italien <i>amerò</i>) ne vient pas du futur latin <i>amabo</i>, mais d'une construction du latin tardif : <i>amare habeo</i> (« j'ai à aimer »). C'est pourquoi le futur français (<i>aimer-ai</i>) et italien (<i>amer-ò</i>) contiennent la forme abrégée du verbe « avoir » (<i>-ai</i>, <i>-ò</i>). Le futur synthétique latin a disparu en partie parce que ses formes se confondaient avec d'autres (<i>amabo</i> / <i>amabam</i>, <i>leges</i> présent de la 2e et futur de la 3e).</p>`
    },
    {
      type: `alternatives`, title: `D'autres façons de retenir les conjugaisons`,
      intro: `Le verbe latin a beaucoup de formes, mais peu de règles : choisis la méthode qui te convient.`,
      tabs: [
        {
          label: `🔤 La marque du temps`,
          html: `<p>Regarde où apparaît la syllabe <b>-ba-</b> :</p>
<ul>
<li><b>-ba-</b> juste après le radical ➜ <b>imparfait</b> (<i>amabam</i>).</li>
<li><b>-bo-, -bi-, -bu-</b> après le radical ➜ <b>futur</b> de la 1re/2e (<i>amabo, amabit, amabunt</i>).</li>
<li><b>-a-, -e-</b> juste après le radical de la 3e/4e ➜ <b>futur</b> de la 3e/4e (<i>legam, legent</i>).</li>
<li>Aucune marque ➜ <b>présent</b> (<i>amat, legit</i>).</li>
</ul>`
        },
        {
          label: `📊 Grille en couleurs`,
          html: `<p>Dessine une grille de 5 colonnes (conjugaisons) × 3 lignes (temps). Utilise une couleur pour les désinences communes (<b>-t, -mus, -tis, -nt</b>) et une autre pour les marques du temps. Tu verras que la partie difficile est vraiment petite : <b>3 marques</b> (-ba-, -bo/-bi/-bu, -a/-e) + les <b>6 désinences personnelles</b>.</p>`
        },
        {
          label: `🔄 De l'actif au passif`,
          html: `<p>Le passif s'obtient en changeant seulement les désinences : <b>-o ➜ -or</b>, <b>-s ➜ -ris</b>, <b>-t ➜ -tur</b>, <b>-mus ➜ -mur</b>, <b>-tis ➜ -mini</b>, <b>-nt ➜ -ntur</b>. Le radical et la marque du temps restent les mêmes. Exemple : <i>amabat</i> ➜ <i>amabatur</i>, <i>legemus</i> ➜ <i>legemur</i>, <i>monebunt</i> ➜ <i>monebuntur</i>.</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Carte : l'indicatif`,
      nodes: [
        { id: `verbo`, label: `Le verbe latin`, x: 50, y: 8, color: `#a855f7`, html: `Radical + marque du temps + désinence personnelle ; actif ou passif.`, why: `Le latin a hérité de l'indo-européen un système verbal riche ; en latin classique, l'indicatif a 6 temps, répartis entre temps de l'infectum (action non achevée) et du perfectum (action achevée).` },
        { id: `inf`, label: `Infectum`, x: 22, y: 42, color: `#16a34a`, html: `Présent, imparfait, futur : formés sur le radical du présent.`, why: `Le radical de l'<i>infectum</i> (action non achevée) se tire de l'infinitif présent ; celui du <i>perfectum</i> (action achevée) se tire du parfait, que tu étudieras plus tard.` },
        { id: `coniug`, label: `Quatre conjugaisons`, x: 50, y: 42, color: `#f59e0b`, html: `1re -āre, 2e -ēre, 3e -ĕre, 4e -īre.`, why: `Elles dépendent de la voyelle finale du thème (a, e, consonne, i). Les grammairiens les ont classées ainsi pour l'école ; en réalité, elles sont nées de classes de verbes que l'indo-européen formait avec des suffixes différents.` },
        { id: `att`, label: `Actif / passif`, x: 80, y: 42, color: `#3b82f6`, html: `Désinences actives -o -s -t -mus -tis -nt ; passives -r -ris -tur -mur -mini -ntur.`, why: `Le -r du passif est un élément très ancien qu'on retrouve en celtique et dans d'autres langues italiques (osque, ombrien) : il montre que le passif en -r est un trait de l'aire italo-celtique.` },
        { id: `ba`, label: `-ba- / -bo`, x: 35, y: 78, color: `#ef4444`, html: `Marques de l'imparfait et du futur.`, why: `Le suffixe -ba- de l'imparfait et le futur en -bo viennent très probablement de la racine indo-européenne <i>*bhu-</i> « être, devenir » (la même que dans <i>fui</i> et l'anglais <i>be</i>) : à l'origine, ils signifiaient « être/devenir » ajouté au thème. Amabam = « j'étais aimant ».` },
        { id: `ita`, label: `Langues romanes`, x: 75, y: 82, color: `#06b6d4`, html: `Le présent et l'imparfait français et italiens viennent du latin ; le futur a été renouvelé.`, why: `Français <i>aimais</i>, italien <i>amavo</i> ≈ <i>amabam</i> ; <i>aime</i>, <i>amo</i> ≈ <i>amo</i>. Le passif simple s'est perdu : on utilise aujourd'hui <i>être</i> + participe (<i>je suis aimé</i>).` }
      ],
      edges: [
        [`verbo`, `inf`, `temps`], [`verbo`, `coniug`, `se divise en`], [`verbo`, `att`, `voix`], [`inf`, `ba`, `marques`], [`coniug`, `ba`, `choix`], [`ba`, `ita`, `héritage`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz : imparfait, futur, passif`,
      questions: [
        { type: `text`, q: `Conjugue « amo » au futur, 3e personne du singulier (il aimera).`, answer: [`amabit`], explain: `1re conjugaison : radical ama- + -bit : amabit.` },
        { type: `mc`, q: `« Audiebamus » signifie…`, options: [`nous entendions`, `nous entendrons`, `nous entendons`], answer: 0, explain: `Radical audi- + -ebamus : imparfait, 1re personne du pluriel.` },
        { type: `text`, q: `Traduis « ils sont aimés » (présent passif de amo).`, answer: [`amantur`], explain: `Radical ama- + -ntur : amantur.` },
        { type: `mc`, q: `Le futur de « lego » à la 1re personne du singulier est…`, options: [`legabo`, `legam`, `legebo`], answer: 1, explain: `3e conjugaison : -am, -es, -et… : legam, leges, leget.` }
      ]
    }
  ],
  glossary: [
    { t: `Temps primitifs`, d: `Les formes principales d'un verbe données par le dictionnaire (ex. amo, amas, amavi, amatum, amare).` },
    { t: `Radical du présent`, d: `Infinitif sans -re : ama-, mone-, lege-, audi-.` },
    { t: `Désinences actives`, d: `-o, -s, -t, -mus, -tis, -nt.` },
    { t: `Désinences passives`, d: `-r (-or), -ris, -tur, -mur, -mini, -ntur.` },
    { t: `Imparfait`, d: `Temps du passé qui indique une action non achevée ou habituelle ; marque -ba-.` },
    { t: `Futur simple`, d: `Action qui aura lieu : -bo/-bi/-bu (1re et 2e) ou -a/-e (3e et 4e).` },
    { t: `Voix`, d: `Forme du verbe : active (le sujet agit) ou passive (le sujet subit).` },
    { t: `Complément d'agent`, d: `Celui qui fait l'action dans la phrase passive : a/ab + ablatif.` },
    { t: `Copule`, d: `Sum quand il relie le sujet et l'attribut.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Comment forme-t-on le radical du présent ?`, options: [`En enlevant -re à l'infinitif`, `En enlevant -o à la 1re personne`, `En ajoutant -bam au présent`], answer: 0, explain: `Exemple : amāre ➜ ama- ; audīre ➜ audi-.` },
      { type: `text`, q: `Écris la 2e personne du singulier du présent de « moneo » (tu avertis).`, answer: [`mones`], explain: `mone- + -s : mones.` },
      { type: `text`, q: `Écris la 3e personne du pluriel du présent de « lego ».`, answer: [`legunt`], explain: `3e conjugaison : legunt (voyelle -u-).` },
      { type: `mc`, q: `« Monebatis » est…`, options: [`présent, 2e pluriel`, `imparfait, 2e pluriel`, `futur, 2e pluriel`], answer: 1, explain: `Marque -ba- + -tis : imparfait « vous avertissiez ».` },
      { type: `mc`, q: `« Audiet » est…`, options: [`futur, 3e singulier`, `imparfait, 3e singulier`, `présent, 3e singulier`], answer: 0, explain: `4e conjugaison, futur en -et : « il entendra ».` },
      { type: `text`, q: `Écris « vous serez » (futur de sum).`, answer: [`eritis`], explain: `Futur de sum : ero, eris, erit, erimus, eritis, erunt.` },
      { type: `mc`, q: `« Laudamur » signifie…`, options: [`nous louons`, `nous sommes loués`, `ils sont loués`], answer: 1, explain: `-mur = 1re personne du pluriel passive : nous sommes loués.` },
      { type: `tf`, q: `« Amabo » et « amabam » sont au même temps.`, answer: false, explain: `Amabo est un futur, amabam un imparfait.` },
      { type: `mc`, q: `Comment traduit-on « Puella a matre laudatur » ?`, options: [`La jeune fille loue sa mère`, `La jeune fille est louée par sa mère`, `La mère loue la jeune fille`], answer: 1, explain: `Laudatur est passif : le sujet puella subit l'action ; a matre est le complément d'agent.` },
      { type: `order`, q: `Mets dans l'ordre les désinences du présent actif.`, items: [`-o`, `-s`, `-t`, `-mus`, `-tis`, `-nt`], explain: `1re, 2e, 3e du singulier, puis 1re, 2e, 3e du pluriel.` }
    ]
  }
});
