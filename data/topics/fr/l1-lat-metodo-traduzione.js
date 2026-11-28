TOPIC('fr', {
  id: `l1-lat-metodo-traduzione`,
  title: `La méthode de traduction`,
  intro: `Traduire du latin n'est ni un jeu de hasard ni un exercice de mémoire : c'est une <b>méthode</b>, et comme toute méthode, elle s'apprend. Celui qui l'applique toujours dans le même ordre se trompe beaucoup moins que celui qui « devine » à partir des mots qu'il reconnaît. Dans cette leçon, tu réunis tout ce que tu as étudié (déclinaisons, adjectifs, verbes, compléments) en une <b>démarche en sept étapes</b> : lire, utiliser le dictionnaire, trouver le verbe, trouver le sujet et les autres cas, reconnaître les compléments, reconstruire la phrase en français, vérifier. À la fin, tu sauras traduire tes premières phrases latines complètes avec assurance. 🧭📖`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Pourquoi le latin ne se lit pas « de gauche à droite »`,
      html: `<p>En français, l'ordre des mots est très important : « Le loup mange l'agneau » et « L'agneau mange le loup » sont deux phrases différentes. En latin, la fonction de chaque mot est indiquée par la <b>désinence</b> ; l'ordre est donc <b>libre</b> et, le plus souvent, <b>le verbe est à la fin</b>. L'ordre le plus courant est : <b>sujet – compléments – COD – verbe</b> (SOV). Par exemple :</p>
<p><i>Agnus lupum non timet.</i> (Agnus = sujet, lupum = COD, timet = verbe) ➜ « L'agneau ne craint pas le loup. »<br><i>Lupum agnus non timet.</i> ➜ Même phrase ! Seule l'insistance change.</p>
<p>Cela signifie que si tu traduis <b>dans l'ordre où les mots apparaissent</b>, tu obtiens une phrase française sans queue ni tête (ou au sens différent). Tu dois au contraire <b>analyser</b> la phrase, puis la <b>reconstruire</b>. Ce n'est pas une « devinette » : c'est comme résoudre un puzzle, où chaque pièce a une forme (la désinence) qui t'indique sa place.</p>
<p>Autres différences avec le français :</p>
<ul>
<li><b>Il n'y a pas d'articles</b> (ni définis ni indéfinis) : <i>puella</i> = « la jeune fille » ou « une jeune fille », selon le contexte.</li>
<li>Le <b>pronom sujet</b> est omis : <i>amamus</i> = « nous aimons ».</li>
<li>L'<b>adjectif</b> peut être éloigné du nom (mais il s'accorde toujours).</li>
</ul>`
    },
    {
      type: `text`, title: `2. Savoir utiliser le dictionnaire`,
      html: `<p>Dans le dictionnaire, on cherche l'<b>entrée</b> (la forme « de base » du mot), et non la forme qui figure dans la phrase. Pour trouver l'entrée, tu dois donc <b>remonter à partir de la désinence</b>.</p>
<h4>Comment se présentent les noms</h4>
<p><i>rosa, -ae</i> f. = « rose » (nominatif, génitif, genre ➜ 1re déclinaison, radical <i>ros-</i>)<br>
<i>dominus, -i</i> m. = « maître » (2e)<br>
<i>rex, regis</i> m. = « roi » (3e, radical <i>reg-</i>)<br>
<i>bellum, -i</i> n. = « guerre » (2e neutre)</p>
<h4>Comment se présentent les verbes</h4>
<p><i>amo, -as, -avi, -atum, -are</i> (1) = « aimer ». Le chiffre entre parenthèses indique la conjugaison. Pour le présent, l'imparfait et le futur, il te suffit de la <b>1re personne</b> et de l'<b>infinitif</b>.</p>
<h4>Comment se présentent les adjectifs</h4>
<p><i>bonus, -a, -um</i> = « bon » ; <i>pulcher, -chra, -chrum</i> = « beau » ; <i>fortis, -e</i> = « courageux, fort ».</p>
<h4>Comment remonter du texte à l'entrée</h4>
<table>
<tr><th>Forme dans le texte</th><th>Indice</th><th>Entrée à chercher</th></tr>
<tr><td><i>puellarum</i></td><td>-arum = génitif pluriel 1re</td><td><b>puella, -ae</b></td></tr>
<tr><td><i>servos</i></td><td>-os = accusatif pluriel 2e</td><td><b>servus, -i</b></td></tr>
<tr><td><i>militibus</i></td><td>-ibus = dat./abl. pluriel 3e ; radical <i>milit-</i></td><td><b>miles, militis</b></td></tr>
<tr><td><i>legebant</i></td><td>-ebant = imparfait, 3e pluriel</td><td><b>lego, -is, -ere</b></td></tr>
<tr><td><i>docebitur</i></td><td>-bitur = futur passif 3e sing.</td><td><b>doceo, -es, -ere</b></td></tr>
<tr><td><i>navigabunt</i></td><td>-bunt = futur, 3e plur.</td><td><b>navigo, -as, -are</b></td></tr>
</table>
<p><b>Attention</b> : si tu ne trouves pas le mot, essaie d'enlever d'autres désinences ou de penser à une autre déclinaison. Beaucoup d'erreurs viennent du fait qu'on cherche la mauvaise forme. Si tu cherches <i>regis</i> et que tu ne trouves rien, souviens-toi que l'entrée est <i>rex</i> (le radical est <i>reg-</i>).</p>
<p>Le dictionnaire te donne aussi les <b>différents sens</b> d'un mot : choisis celui qui convient au <b>contexte</b>. Exemples de mots à plusieurs sens : <i>virtus</i> (valeur, vertu, courage), <i>res</i> (chose, fait, affaire), <i>pars</i> (partie, parti), <i>animus</i> (esprit, courage, intention), <i>gratia</i> (grâce, reconnaissance, faveur), <i>liber</i> (livre / libre).</p>`
    },
    {
      type: `svg`, title: `La méthode en sept étapes`,
      caption: `Les sept étapes de la traduction, plus la vérification finale. Ne les saute jamais, surtout quand la phrase semble facile.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<text x="300" y="26" font-size="20" font-weight="bold" fill="#4c1d95" text-anchor="middle">LA MÉTHODE EN 7 ÉTAPES</text>
<g font-size="15" font-weight="bold">
<rect x="14" y="44" width="136" height="68" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/><text x="82" y="68" fill="#4c1d95" text-anchor="middle">1. LIS</text><text x="82" y="90" font-size="13" font-weight="normal" fill="#334155" text-anchor="middle">toute la phrase</text>
<rect x="164" y="44" width="136" height="68" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/><text x="232" y="68" fill="#4c1d95" text-anchor="middle">2. VERBE</text><text x="232" y="90" font-size="13" font-weight="normal" fill="#334155" text-anchor="middle">personne, temps</text>
<rect x="314" y="44" width="136" height="68" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/><text x="382" y="68" fill="#4c1d95" text-anchor="middle">3. SUJET</text><text x="382" y="90" font-size="13" font-weight="normal" fill="#334155" text-anchor="middle">nominatif + verbe</text>
<rect x="464" y="44" width="122" height="68" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/><text x="525" y="68" fill="#4c1d95" text-anchor="middle">4. COD</text><text x="525" y="90" font-size="13" font-weight="normal" fill="#334155" text-anchor="middle">accusatif</text>
<rect x="14" y="140" width="136" height="68" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="82" y="164" fill="#78350f" text-anchor="middle">5. COMPLÉMENTS</text><text x="82" y="186" font-size="13" font-weight="normal" fill="#334155" text-anchor="middle">cas + préposition</text>
<rect x="164" y="140" width="136" height="68" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="232" y="164" fill="#78350f" text-anchor="middle">6. ADJECTIFS</text><text x="232" y="186" font-size="13" font-weight="normal" fill="#334155" text-anchor="middle">accord, génitif</text>
<rect x="314" y="140" width="136" height="68" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/><text x="382" y="164" fill="#14532d" text-anchor="middle">7. CONSTRUIS</text><text x="382" y="186" font-size="13" font-weight="normal" fill="#334155" text-anchor="middle">la phrase française</text>
<rect x="464" y="140" width="122" height="68" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/><text x="525" y="164" fill="#14532d" text-anchor="middle">VÉRIFIE</text><text x="525" y="186" font-size="13" font-weight="normal" fill="#334155" text-anchor="middle">sens et désinences</text>
</g>
<g stroke="#7c3aed" stroke-width="3" fill="#7c3aed">
<line x1="150" y1="78" x2="162" y2="78"/><line x1="300" y1="78" x2="312" y2="78"/><line x1="450" y1="78" x2="462" y2="78"/>
<line x1="150" y1="174" x2="162" y2="174"/><line x1="300" y1="174" x2="312" y2="174"/><line x1="450" y1="174" x2="462" y2="174"/>
</g>
<text x="300" y="250" font-size="16" fill="#4c1d95" text-anchor="middle" font-weight="bold">Du verbe aux compléments : on part de ce qui structure la phrase</text>
<text x="300" y="276" font-size="15" fill="#334155" text-anchor="middle">Le verbe est en général à la fin de la phrase latine : cherche à partir de là</text>
</svg>`
    },
    {
      type: `text`, title: `3. Les sept étapes, une par une`,
      html: `<ol>
<li><b>Lis toute la phrase</b> (à voix haute, avec le bon accent) sans traduire : essaie de saisir le thème. Compte combien il y a de <b>verbes</b> : chaque verbe à un mode personnel correspond à une proposition.</li>
<li><b>Trouve le verbe</b> (en général à la fin) et analyse-le : <b>personne, nombre, temps, voix</b> (active ou passive). Retrouve son infinitif et cherche son sens dans le dictionnaire.</li>
<li><b>Trouve le sujet</b> : c'est un nom ou un pronom au <b>nominatif</b> qui <b>s'accorde en personne et en nombre</b> avec le verbe. S'il n'y en a pas, il est sous-entendu et la désinence l'indique (<i>laboramus</i> = « nous travaillons »).</li>
<li><b>Trouve le COD</b> (accusatif) si le verbe est transitif, ainsi que les compléments d'<b>attribution</b> (datif) et les <b>compléments du nom</b> (génitif).</li>
<li><b>Reconnais les compléments circonstanciels</b> (ablatif, accusatif avec préposition) : lieu, temps, moyen, manière, cause, accompagnement, agent…</li>
<li><b>Rattache les adjectifs</b> aux noms (même genre, même nombre, même cas), ainsi que les possessifs.</li>
<li><b>Construis la phrase française</b> : sujet, verbe, COD, compléments, dans l'ordre naturel du français ; ajoute les articles et les prépositions ; vérifie le sens et relis.</li>
</ol>
<p>La dernière question à te poser est toujours : <i>« Ma phrase a-t-elle un sens en français ? Tous les mots latins ont-ils été traduits ? Chaque désinence a-t-elle été respectée ? »</i> S'il manque un mot ou si une désinence n'a pas trouvé sa place, il y a une erreur.</p>`
    },
    {
      type: `example`, title: `Traduction guidée d'une phrase`,
      html: `<p><i>Nautae magnis navibus ad insulam parvam cum magna cura navigabant.</i></p>
<table>
<tr><th>Étape</th><th>Analyse</th></tr>
<tr><td>1. Verbes</td><td>Un seul verbe : <b>navigabant</b>.</td></tr>
<tr><td>2. Verbe</td><td>navigabant = 3e pluriel, imparfait de l'indicatif actif de <i>navigo, -as, -are</i> = « naviguaient ».</td></tr>
<tr><td>3. Sujet</td><td><b>nautae</b> = nominatif pluriel (accordé avec navigabant) = « les marins ». (Remarque : <i>nautae</i> pourrait être un gén. ou un dat. sing., mais ici le verbe est au pluriel et il n'y a pas d'autre sujet.)</td></tr>
<tr><td>4. COD</td><td>Aucun : <i>navigo</i> est ici intransitif.</td></tr>
<tr><td>5. Compléments</td><td><b>magnis navibus</b> : ablatif pluriel sans préposition = moyen (« avec de grands navires ») ; <b>ad insulam parvam</b> : ad + accusatif = lieu où l'on va (« vers la petite île ») ; <b>cum magna cura</b> : cum + ablatif = manière (« avec grand soin »).</td></tr>
<tr><td>6. Adjectifs</td><td><i>magnis</i> avec <i>navibus</i>, <i>parvam</i> avec <i>insulam</i>, <i>magna</i> avec <i>cura</i>.</td></tr>
<tr><td>7. Construction</td><td>« Les marins naviguaient vers la petite île avec de grands navires et avec grand soin. »</td></tr>
</table>`
    },
    {
      type: `quiz`, title: `Mini-quiz : la méthode`,
      questions: [
        { type: `mc`, q: `Quelle est la première étape de la méthode ?`, options: [`Chercher tous les mots dans le dictionnaire`, `Lire toute la phrase et repérer les verbes`, `Traduire le premier mot`], answer: 1, explain: `On lit d'abord et on repère le verbe ; le dictionnaire s'utilise après l'analyse.` },
        { type: `mc`, q: `Comment reconnaît-on le sujet ?`, options: [`C'est le premier mot de la phrase`, `Il est au nominatif et s'accorde avec le verbe`, `C'est toujours un nom propre`], answer: 1, explain: `Le sujet est au nominatif et s'accorde en personne et en nombre avec le verbe.` },
        { type: `mc`, q: `Où se trouve en général le verbe dans une phrase latine ?`, options: [`au début`, `à la fin`, `toujours au milieu`], answer: 1, explain: `L'ordre le plus courant est sujet – compléments – COD – verbe.` },
        { type: `tf`, q: `En latin, les articles définis sont toujours exprimés.`, answer: false, explain: `Le latin n'a pas d'articles : on les ajoute dans la traduction française.` }
      ]
    },
    {
      type: `text`, title: `4. Ambiguïtés et pièges fréquents`,
      html: `<p>Certaines formes latines peuvent s'analyser de plusieurs façons. Voyons les pièges les plus courants et comment s'en sortir :</p>
<table>
<tr><th>Forme</th><th>Analyses possibles</th><th>Comment choisir</th></tr>
<tr><td><b>-ae</b> (puellae)</td><td>gén. sing., dat. sing., nom. plur. (1re)</td><td>Regarde le verbe (singulier/pluriel) et le sens (de qui / à qui)</td></tr>
<tr><td><b>-a</b> (rosa)</td><td>nom. sing., voc. sing., abl. sing. (1re) ; nom./acc. plur. neutre</td><td>Regarde s'il est sujet ou complément ; l'abl. a un <i>a</i> long</td></tr>
<tr><td><b>-i</b> (domini)</td><td>gén. sing. ou nom. plur. (2e)</td><td>Verbe au pluriel = nom. plur. ; nom dont il dépend = gén.</td></tr>
<tr><td><b>-o</b> (domino)</td><td>dat. ou abl. sing. (2e)</td><td>Regarde s'il y a une préposition, ou le sens (à qui / avec quoi)</td></tr>
<tr><td><b>-is</b> (rosis, dominis)</td><td>dat. ou abl. plur.</td><td>Regarde la préposition ou le verbe</td></tr>
<tr><td><b>-es</b> (reges)</td><td>nom., voc., acc. plur. (3e) ; aussi 2e sing. de verbes (leges)</td><td>Compare avec le verbe</td></tr>
<tr><td><b>-um</b> (dominum, bellum)</td><td>acc. sing. (2e) ou nom./acc. neutre</td><td>Regarde le genre du nom</td></tr>
<tr><td><b>-am</b> (rosam, legam)</td><td>acc. sing. (1re) ; 1re sing. du futur de la 3e/4e</td><td>Vois s'il s'agit d'un nom ou d'un verbe</td></tr>
<tr><td><b>-t, -nt</b></td><td>3e sing./plur. actif</td><td>—</td></tr>
</table>
<p><b>Règle d'or</b> : ne décide pas au premier coup d'œil. Énumère toutes les analyses possibles, puis choisis celle qui rend la phrase cohérente. Si deux sujets sont possibles, vérifie si l'autre est un accusatif (COD) ou a une autre fonction. La phrase doit avoir <b>exactement un sujet par verbe</b>, et chaque mot doit avoir une fonction.</p>`
    },
    {
      type: `text`, title: `5. Relier les phrases : conjonctions et adverbes simples`,
      html: `<p>Dans les premières phrases, tu rencontres souvent de petits mots, mais essentiels :</p>
<table>
<tr><th>Latin</th><th>Français</th><th>Remarque</th></tr>
<tr><td><b>et</b></td><td>et</td><td><i>et… et</i> = « et… et », « à la fois… et »</td></tr>
<tr><td><b>-que</b></td><td>et</td><td>enclitique : il s'attache au mot qu'il relie, placé après (<i>pueri puellaeque</i> = les garçons et les filles)</td></tr>
<tr><td><b>ac, atque</b></td><td>et, et de plus</td><td>plus expressifs</td></tr>
<tr><td><b>sed</b></td><td>mais</td><td>opposition</td></tr>
<tr><td><b>aut, vel</b></td><td>ou</td><td><i>aut</i> est exclusif, <i>vel</i> inclusif</td></tr>
<tr><td><b>nam, enim</b></td><td>en effet, car</td><td><i>enim</i> est toujours en deuxième position</td></tr>
<tr><td><b>igitur</b></td><td>donc</td><td>en général en deuxième position</td></tr>
<tr><td><b>non</b></td><td>ne… pas</td><td>avant le verbe ; <i>nec, neque</i> = et ne… pas, ni</td></tr>
<tr><td><b>etiam, quoque</b></td><td>aussi</td><td><i>quoque</i> se place après le mot</td></tr>
<tr><td><b>semper, saepe, nunc, tum, iam</b></td><td>toujours, souvent, maintenant, alors, déjà</td><td>adverbes de temps</td></tr>
<tr><td><b>ibi, ubi</b></td><td>là, où</td><td>adverbes de lieu</td></tr>
</table>`
    },
    {
      type: `widget`, title: `Cartes : les mots de liaison`,
      widget: `flashcards`,
      options: {
        cards: [
          { front: `et`, back: `et` },
          { front: `-que`, back: `et (enclitique, s'attache au second mot)` },
          { front: `sed`, back: `mais` },
          { front: `nam`, back: `en effet, car` },
          { front: `igitur`, back: `donc (2e position)` },
          { front: `aut`, back: `ou (exclusif)` },
          { front: `quoque`, back: `aussi (après le mot)` },
          { front: `semper`, back: `toujours` },
          { front: `saepe`, back: `souvent` },
          { front: `nunc`, back: `maintenant` }
        ]
      },
      caption: `Révise les mots de liaison : c'est la colle des phrases latines.`
    },
    {
      type: `example`, title: `Deux phrases à traduire avec la méthode`,
      html: `<p><b>Phrase A</b> : <i>Rex civium libertatem defendit, sed hostes urbem oppugnant.</i></p>
<ul>
<li>Verbes : <i>defendit</i> (3e sing. du présent de <i>defendo</i>), <i>oppugnant</i> (3e plur., <i>oppugno</i>).</li>
<li>Première proposition : sujet <i>rex</i> ; COD <i>libertatem</i> (acc. sing. de <i>libertas</i>) ; <i>civium</i> = gén. plur. (« des citoyens »), complément de <i>libertatem</i>.</li>
<li>Deuxième : sujet <i>hostes</i> (nom. plur.) ; COD <i>urbem</i>.</li>
<li><b>Traduction</b> : « Le roi défend la liberté des citoyens, mais les ennemis assiègent la ville. »</li>
</ul>
<p><b>Phrase B</b> : <i>Puellae et pueri a magistro in schola laudabantur.</i></p>
<ul>
<li>Verbe : <i>laudabantur</i> = 3e plur., imparfait passif de <i>laudo</i>.</li>
<li>Sujet : <i>puellae et pueri</i> (nom. plur.) : « les filles et les garçons ».</li>
<li>Compléments : <i>a magistro</i> = agent (« par le maître ») ; <i>in schola</i> = lieu où l'on est (« à l'école »).</li>
<li><b>Traduction</b> : « Les filles et les garçons étaient loués par le maître à l'école. »</li>
</ul>`
    },
    {
      type: `remember`, title: `Liste de contrôle avant de rendre ta copie`,
      html: `<ul>
<li>Chaque <b>verbe</b> est-il traduit avec la bonne personne, le bon nombre et le bon temps ?</li>
<li>Chaque verbe a-t-il son <b>sujet</b> (exprimé ou sous-entendu) ?</li>
<li>Chaque <b>cas</b> a-t-il été respecté (nominatif = sujet, accusatif = COD, génitif = « de », datif = « à », ablatif = complément circonstanciel) ?</li>
<li>Chaque <b>adjectif</b> s'accorde-t-il avec son nom ?</li>
<li>Les <b>prépositions</b> latines sont-elles traduites (ad = vers, ex = de/hors de, cum = avec, a/ab = par/de) ?</li>
<li>La phrase française a-t-elle un <b>sens</b> et l'<b>ordre</b> est-il naturel ?</li>
<li>N'est-il resté <b>aucun mot</b> sans traduction ?</li>
</ul>`
    },
    {
      type: `curiosity`, title: `Le savais-tu ? Les Romains traduisaient eux aussi`,
      html: `<p>Les intellectuels romains étudiaient le grec et traduisaient du grec vers le latin. Le premier grand traducteur fut <b>Livius Andronicus</b> (IIIe siècle av. J.-C., originaire de Tarente), qui traduisit l'<i>Odyssée</i> en latin (<i>Odusia</i>) en l'adaptant pour les Romains. Cicéron, des siècles plus tard, réfléchit à la manière de traduire : non pas « mot à mot » (<i>verbum pro verbo</i>), mais « sens pour sens », en cherchant à rendre le <i>style</i> de l'original. C'est la même leçon que dans cette page : ne pas remplacer un mot par un mot, mais reconstruire le sens.</p>`
    },
    {
      type: `curiosity`, title: `Le savais-tu ? Le verbe à la fin a un nom`,
      html: `<p>Les linguistes appellent cet ordre <b>SOV</b> (sujet – objet – verbe). Des langues comme le japonais, le turc, le coréen et le persan ont cet ordre ! En latin, le verbe à la fin crée un peu de <i>suspense</i> : tu écoutes toute la phrase avant de savoir ce que fait le sujet. Les orateurs exploitaient cet effet, comme dans <i>Veni, vidi, vici</i> : trois verbes et rien d'autre, presque un télégramme.</p>`
    },
    {
      type: `alternatives`, title: `D'autres façons de mieux traduire`,
      intro: `Il n'y a pas une seule façon d'organiser sa traduction : choisis celle qui te convient.`,
      tabs: [
        {
          label: `🎨 La méthode des couleurs`,
          html: `<p>Souligne les fonctions avec <b>des couleurs différentes</b> : <span style="color:#dc2626"><b>rouge</b></span> pour le verbe, <span style="color:#2563eb"><b>bleu</b></span> pour le sujet, <span style="color:#16a34a"><b>vert</b></span> pour le COD, <span style="color:#d97706"><b>orange</b></span> pour les compléments circonstanciels, <span style="color:#7c3aed"><b>violet</b></span> pour les épithètes. Tu verras la <i>structure</i> de la phrase. Beaucoup d'élèves repèrent tout de suite leurs erreurs parce qu'une couleur reste « vide ».</p>`
        },
        {
          label: `🧱 La méthode des colonnes`,
          html: `<p>Dessine un tableau à sept colonnes : <b>Mot | Entrée | Cas/Temps | Nombre | Genre/Personne | Fonction | Traduction</b>. Pour chaque mot, remplis une ligne. Cela paraît long, mais cela évite les erreurs et t'entraîne à reconnaître les formes : au bout d'un mois, tu le feras de tête.</p>`
        },
        {
          label: `🗣️ Lis à voix haute`,
          html: `<p>Lis la phrase latine avec la bonne prononciation et le bon accent : souvent, tu entends tout de suite que <i>servi</i> et <i>laborant</i> vont ensemble (sujet et verbe au pluriel) ou que <i>pulchra</i> appelle un nom féminin. Lis ensuite ta traduction française et demande-toi si elle sonne naturel. La lecture à voix haute aide à la fois l'analyse et la construction.</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Carte : la traduction`,
      nodes: [
        { id: `trad`, label: `Traduire`, x: 50, y: 8, color: `#a855f7`, html: `Reconstruire le sens de la phrase en français à partir des désinences.`, why: `Traduire, ce n'est pas remplacer des mots : deux langues organisent le sens de façon différente. Le latin le confie aux désinences, le français à l'ordre des mots et aux prépositions.` },
        { id: `voc`, label: `Dictionnaire`, x: 18, y: 42, color: `#16a34a`, html: `On cherche l'entrée, pas la forme.`, why: `L'entrée (nominatif, 1re personne) est une convention, mais elle permet de retrouver chaque forme : l'idée remonte aux grammairiens alexandrins et latins (Varron, Priscien).` },
        { id: `verbo`, label: `Le verbe`, x: 50, y: 42, color: `#3b82f6`, html: `Personne, nombre, temps, voix.`, why: `Le verbe est le centre de la phrase (en linguistique : le « prédicat ») ; le repérer permet de trouver le sujet par l'accord et de savoir combien il y a de propositions.` },
        { id: `caso`, label: `Les cas`, x: 82, y: 42, color: `#f59e0b`, html: `Nominatif = sujet ; accusatif = COD ; génitif, datif, ablatif = compléments.`, why: `Les cas remplacent les prépositions et l'ordre des mots : c'est pourquoi on apprend les déclinaisons par cœur.` },
        { id: `amb`, label: `Ambiguïtés`, x: 30, y: 80, color: `#ef4444`, html: `Une même forme, plusieurs analyses.`, why: `D'une déclinaison à l'autre, les mêmes désinences reviennent (par exemple -is, -i, -a) : c'est le prix d'un système compact. Le contexte lève l'ambiguïté.` },
        { id: `ita`, label: `Français`, x: 75, y: 82, color: `#06b6d4`, html: `Ordre SVO et prépositions.`, why: `Le français utilise un ordre fixe (sujet – verbe – objet) et des prépositions à la place des cas : traduire, c'est passer d'un système à l'autre.` }
      ],
      edges: [
        [`trad`, `voc`, `utilise`], [`trad`, `verbo`, `part de`], [`trad`, `caso`, `lit`], [`caso`, `amb`, `mais`], [`amb`, `ita`, `contexte`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz : ambiguïtés et mots de liaison`,
      questions: [
        { type: `mc`, q: `« Pueri puellaeque » signifie…`, options: [`les garçons et les filles`, `les garçons des filles`, `la fille des garçons`], answer: 0, explain: `-que est une conjonction enclitique : « et les filles ».` },
        { type: `mc`, q: `Comment traduit-on « sed » ?`, options: [`et`, `mais`, `donc`], answer: 1, explain: `Sed = mais (opposition).` },
        { type: `text`, q: `Quelle est l'entrée de « regibus » ? (nominatif singulier)`, answer: [`rex`], explain: `Regibus = dat./abl. pluriel de rex, regis.` },
        { type: `mc`, q: `« Domini servos vocant » : quel est le sujet ?`, options: [`servos`, `domini (nom. plur.)`, `vocant`], answer: 1, explain: `Domini est un nominatif pluriel et s'accorde avec vocant ; servos est un accusatif.` }
      ]
    }
  ],
  glossary: [
    { t: `Entrée`, d: `Forme de base d'un mot dans le dictionnaire (nominatif pour les noms, 1re personne du présent pour les verbes).` },
    { t: `Sujet`, d: `Nom ou pronom au nominatif qui s'accorde avec le verbe.` },
    { t: `COD`, d: `Complément d'objet direct, à l'accusatif, d'un verbe transitif.` },
    { t: `Prédicat`, d: `Le verbe (ou la copule avec l'attribut).` },
    { t: `Ordre SOV`, d: `Sujet – objet – verbe : ordre typique du latin.` },
    { t: `Enclitique`, d: `Petit mot qui s'attache à la fin d'un autre mot (-que).` },
    { t: `Accord`, d: `Concordance de genre, de nombre et de cas (adjectif/nom) ou de personne et de nombre (sujet/verbe).` },
    { t: `Analyse`, d: `Décomposition de la phrase en ses éléments et leurs fonctions.` },
    { t: `Polysémie`, d: `Fait qu'un même mot ait plusieurs sens.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `order`, q: `Mets dans l'ordre les étapes de la méthode de traduction.`, items: [`Lire toute la phrase`, `Trouver et analyser le verbe`, `Trouver le sujet`, `Trouver le COD et les compléments`, `Rattacher les adjectifs`, `Construire la phrase française`], explain: `L'ordre conseillé est : lire, verbe, sujet, COD et compléments, adjectifs, construction.` },
      { type: `mc`, q: `Traduis : « Agricolae agros colunt ».`, options: [`Les paysans cultivent les champs`, `Le paysan cultive le champ`, `Les champs cultivent les paysans`], answer: 0, explain: `Agricolae = nom. plur. (sujet) ; agros = acc. plur. ; colunt = 3e plur.` },
      { type: `mc`, q: `Traduis : « Puer a matre laudatur ».`, options: [`Le garçon loue sa mère`, `Le garçon est loué par sa mère`, `La mère est louée par le garçon`], answer: 1, explain: `Laudatur est passif ; a matre = agent.` },
      { type: `mc`, q: `« Rex hostes vincit » signifie…`, options: [`Le roi vainc les ennemis`, `Les ennemis vainquent le roi`, `Le roi est vaincu par les ennemis`], answer: 0, explain: `Rex est un nominatif singulier (sujet), hostes un accusatif pluriel (COD), vincit une 3e sing. active.` },
      { type: `text`, q: `Quelle est l'entrée de « navibus » ? (nominatif singulier)`, answer: [`navis`], explain: `Navibus = dat./abl. pluriel de navis, navis.` },
      { type: `mc`, q: `En latin, la fonction d'un mot est indiquée…`, options: [`par l'ordre`, `par la désinence`, `par l'article`], answer: 1, explain: `Par le cas, que la désinence indique.` },
      { type: `tf`, q: `« -que » est une conjonction qui s'attache à la fin du second mot qu'elle relie.`, answer: true, explain: `C'est un enclitique : « pueri puellaeque » = les garçons et les filles.` },
      { type: `mc`, q: `Traduis : « Nautae in insulam navigant ».`, options: [`Les marins naviguent vers l'île`, `Les marins naviguent dans l'île (sans mouvement)`, `L'île navigue les marins`], answer: 0, explain: `In + accusatif (insulam) = lieu où l'on va.` },
      { type: `mc`, q: `« Puellae rosas dant ». Qui donne les roses ?`, options: [`les jeunes filles (sujet)`, `les roses`, `on ne peut pas savoir`], answer: 0, explain: `Puellae est un nominatif pluriel et s'accorde avec dant ; rosas est un accusatif pluriel.` },
      { type: `tf`, q: `Si une forme a plusieurs analyses possibles, on choisit toujours la première.`, answer: false, explain: `On énumère toutes les analyses et on choisit selon le contexte et le verbe.` }
    ]
  }
});
