TOPIC('fr', {
  id: `l1-lat-complementi`,
  title: `Les principaux compléments`,
  intro: `Une phrase ne vit pas seulement d'un sujet, d'un verbe et d'un COD : on nous dit aussi <b>où</b>, <b>quand</b>, <b>avec quoi</b>, <b>comment</b>, <b>pourquoi</b>, <b>avec qui</b>, <b>par qui</b>. Ce sont les <b>compléments circonstanciels</b> (et le complément d'agent), et le latin les exprime en combinant un <b>cas</b> et une <b>préposition</b> (ou par le cas seul, surtout l'<b>ablatif</b>, le « cas joker »). Dans cette leçon, tu apprends les compléments les plus fréquents : le <b>lieu</b> (avec la règle spéciale des noms de villes), le <b>temps</b>, le <b>moyen</b>, la <b>manière</b>, la <b>cause</b>, l'<b>accompagnement</b>, l'<b>agent</b> et six autres qui te serviront tous les jours en version. 🗺️⏳⚔️`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Le tableau des compléments`,
      html: `<p>En français, nous utilisons beaucoup de prépositions (de, à, par, dans, avec, pour, sur, entre) pour distinguer les compléments. En latin, les prépositions sont moins nombreuses, et beaucoup de compléments s'expriment par le cas seul. Le cas principal des compléments est l'<b>ablatif</b>, qui a hérité de trois fonctions indo-européennes différentes (l'<i>ablatif proprement dit</i>, qui indique l'éloignement ; l'<i>instrumental</i>, qui indique le moyen et l'accompagnement ; le <i>locatif</i>, qui indique le lieu et le temps).</p>
<table>
<tr><th>Complément</th><th>Question</th><th>Tournure latine</th><th>Exemple</th></tr>
<tr><td>Complément du nom</td><td>de qui ?</td><td>génitif</td><td><i>casa agricolae</i></td></tr>
<tr><td>Attribution</td><td>à qui ?</td><td>datif</td><td><i>puellae rosam dat</i></td></tr>
<tr><td>Agent / cause efficiente</td><td>par qui ?</td><td><b>a, ab + ablatif</b></td><td><i>a magistro laudatur</i></td></tr>
<tr><td>Moyen</td><td>avec quoi ?</td><td><b>ablatif seul</b></td><td><i>gladio pugnat</i></td></tr>
<tr><td>Accompagnement</td><td>avec qui ?</td><td><b>cum + ablatif</b></td><td><i>cum amicis ambulat</i></td></tr>
<tr><td>Manière</td><td>comment ?</td><td><b>cum + ablatif</b> (ou ablatif + adjectif)</td><td><i>cum cura laborat</i></td></tr>
<tr><td>Cause</td><td>pourquoi ?</td><td>ablatif seul, <b>ob/propter + accusatif</b>, <b>ex + ablatif</b></td><td><i>timore fugit</i></td></tr>
<tr><td>Lieu</td><td>où ? vers où ? d'où ? par où ?</td><td>prépositions + cas (voir plus bas)</td><td><i>in horto</i></td></tr>
<tr><td>Temps</td><td>quand ? pendant combien de temps ?</td><td>ablatif (date), accusatif (durée)</td><td><i>hora quinta</i></td></tr>
<tr><td>Sujet traité</td><td>sur quoi ? à propos de quoi ?</td><td><b>de + ablatif</b></td><td><i>de bello narrat</i></td></tr>
<tr><td>Matière</td><td>en quoi est-ce fait ?</td><td><b>ex + ablatif</b></td><td><i>ex auro</i></td></tr>
<tr><td>Origine</td><td>d'où vient-il ?</td><td><b>ex/de + ablatif</b></td><td><i>ex Italia</i></td></tr>
</table>`
    },
    {
      type: `svg`, title: `L'ablatif et ses trois visages`,
      caption: `L'ablatif latin réunit trois cas indo-européens : c'est pourquoi il remplit tant de fonctions différentes.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfeff"/>
<text x="300" y="30" font-size="20" font-weight="bold" fill="#164e63" text-anchor="middle">UN CAS, BEAUCOUP DE FONCTIONS</text>
<rect x="215" y="46" width="170" height="52" rx="12" fill="#06b6d4" stroke="#0e7490" stroke-width="3"/>
<text x="300" y="80" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">ABLATIF</text>
<line x1="250" y1="98" x2="110" y2="150" stroke="#0e7490" stroke-width="3"/>
<line x1="300" y1="98" x2="300" y2="150" stroke="#0e7490" stroke-width="3"/>
<line x1="350" y1="98" x2="490" y2="150" stroke="#0e7490" stroke-width="3"/>
<rect x="20" y="150" width="180" height="110" rx="10" fill="#ffffff" stroke="#0891b2" stroke-width="2"/>
<text x="110" y="176" font-size="16" font-weight="bold" fill="#164e63" text-anchor="middle">SÉPARATION</text>
<text x="110" y="200" font-size="14" fill="#334155" text-anchor="middle">par qui ? d'où ?</text>
<text x="110" y="222" font-size="14" fill="#334155" text-anchor="middle">agent, origine,</text>
<text x="110" y="242" font-size="14" fill="#334155" text-anchor="middle">lieu d'où l'on vient</text>
<rect x="210" y="150" width="180" height="110" rx="10" fill="#ffffff" stroke="#0891b2" stroke-width="2"/>
<text x="300" y="176" font-size="16" font-weight="bold" fill="#164e63" text-anchor="middle">INSTRUMENT</text>
<text x="300" y="200" font-size="14" fill="#334155" text-anchor="middle">avec quoi ? avec qui ?</text>
<text x="300" y="222" font-size="14" fill="#334155" text-anchor="middle">moyen, accompagnement,</text>
<text x="300" y="242" font-size="14" fill="#334155" text-anchor="middle">manière, cause</text>
<rect x="400" y="150" width="180" height="110" rx="10" fill="#ffffff" stroke="#0891b2" stroke-width="2"/>
<text x="490" y="176" font-size="16" font-weight="bold" fill="#164e63" text-anchor="middle">LIEU ET TEMPS</text>
<text x="490" y="200" font-size="14" fill="#334155" text-anchor="middle">où ? quand ?</text>
<text x="490" y="222" font-size="14" fill="#334155" text-anchor="middle">lieu où l'on est,</text>
<text x="490" y="242" font-size="14" fill="#334155" text-anchor="middle">date</text>
<text x="300" y="285" font-size="14" fill="#164e63" text-anchor="middle">ablatif proprement dit + instrumental + locatif</text>
</svg>`
    },
    {
      type: `text`, title: `2. Les compléments de lieu`,
      html: `<p>Pour les lieux, il faut distinguer <b>quatre situations</b> et deux catégories de noms : les <b>noms communs</b> (<i>silva, urbs, agri</i>) et les <b>noms propres de villes et de petites îles</b> (<i>Roma, Athenae, Capua, Delos</i>), qui ont des tournures particulières.</p>
<table>
<tr><th>Complément</th><th>Noms communs</th><th>Noms de villes et de petites îles</th></tr>
<tr><td><b>Lieu où l'on est</b> (où suis-je ?)</td><td><b>in + ablatif</b><br><i>in silva</i> (dans la forêt), <i>in agris</i> (dans les champs)</td><td><b>locatif</b> : 1re et 2e décl. au singulier : <b>-ae</b>, <b>-i</b><br><i>Romae</i> (à Rome), <i>Capuae</i>, <i>Corinthi</i> ; au pluriel : ablatif <i>Athenis</i> (à Athènes), <i>Pompeiis</i></td></tr>
<tr><td><b>Lieu où l'on va</b> (où vais-je ?)</td><td><b>in / ad + accusatif</b><br><i>in silvam</i> (dans la forêt), <i>ad portam</i> (à la porte)</td><td><b>accusatif sans préposition</b><br><i>Romam</i> (à Rome), <i>Athenas</i></td></tr>
<tr><td><b>Lieu d'où l'on vient</b> (d'où viens-je ?)</td><td><b>ab, ex, de + ablatif</b><br><i>ex silva</i> (de la forêt), <i>ab urbe</i></td><td><b>ablatif sans préposition</b><br><i>Roma</i> (de Rome), <i>Athenis</i></td></tr>
<tr><td><b>Lieu par où l'on passe</b> (par où ?)</td><td><b>per + accusatif</b><br><i>per silvam</i> (à travers la forêt), <i>per agros</i></td><td><b>per + accusatif</b><br><i>per Italiam</i></td></tr>
</table>
<p>Quelques noms communs se comportent comme les noms de villes : <b>domus</b> (maison : <i>domi</i> « à la maison », <i>domum</i> « vers la maison », <i>domo</i> « de la maison »), <b>rus</b> (campagne : <i>ruri</i>, <i>rus</i>, <i>rure</i>), <b>humi</b> (à terre). Retiens la différence entre <b>in + ablatif</b> (on y est) et <b>in + accusatif</b> (on y va) : <i>in agro</i> « dans le champ (sans mouvement) », mais <i>in agrum</i> « dans le champ (avec mouvement) ». La <b>même</b> préposition a donc deux valeurs selon le cas !</p>
<p>Les <b>prépositions</b> les plus courantes : avec l'<b>accusatif</b> : <i>ad, apud, ante, post, per, inter, ob, propter, contra, trans, circum, extra, intra, in</i> (mouvement) ; avec l'<b>ablatif</b> : <i>a/ab, e/ex, de, cum, sine, pro, prae, in</i> (sans mouvement), <i>sub</i>.</p>`
    },
    {
      type: `example`, title: `Les lieux en action`,
      html: `<ul>
<li><i>Marcus Romae habitat.</i> ➜ « Marcus habite à Rome. » (locatif)</li>
<li><i>Marcus Romam venit.</i> ➜ « Marcus vient à Rome. » (accusatif seul : venio = je viens)</li>
<li><i>Marcus Roma venit.</i> ➜ « Marcus vient de Rome. » (ablatif seul)</li>
<li><i>Marcus in horto laborat.</i> ➜ « Marcus travaille dans le jardin. » (in + abl.)</li>
<li><i>Pueri in hortum currunt.</i> ➜ « Les garçons courent dans le jardin (ils y entrent). » (in + acc. : mouvement)</li>
<li><i>Poeta ex Italia venit.</i> ➜ « Le poète vient d'Italie. » (l'Italie n'est pas une ville : ex + abl.)</li>
</ul>
<p>Remarque : <i>Athenas navigant</i> « ils naviguent vers Athènes » (acc. plur.), <i>Athenis navigant</i> « ils partent d'Athènes en bateau » (abl. plur.), mais aussi <i>Athenis habitant</i> « ils habitent à Athènes » (au pluriel, le lieu où l'on est s'exprime par l'ablatif).</p>`
    },
    {
      type: `quiz`, title: `Mini-quiz : compléments de lieu`,
      questions: [
        { type: `mc`, q: `Comment dit-on « à Rome » (lieu où l'on est) ?`, options: [`in Roma`, `Romae`, `Romam`], answer: 1, explain: `Noms de villes de 1re et 2e décl. au singulier : locatif en -ae / -i : Romae.` },
        { type: `mc`, q: `« Ad Italiam » et « in Italiam » : quel complément expriment-ils ?`, options: [`lieu où l'on va`, `lieu où l'on est`, `lieu d'où l'on vient`], answer: 0, explain: `Avec l'accusatif, la préposition exprime le mouvement vers : ad/in + acc.` },
        { type: `text`, q: `Comment dit-on « de Rome » (lieu d'où l'on vient, sans préposition) ?`, answer: [`roma`], explain: `Ablatif seul pour les noms de villes : Roma (a long).` },
        { type: `tf`, q: `« In silva » signifie « vers la forêt ».`, answer: false, explain: `In + ablatif = lieu où l'on est (dans la forêt) ; vers la forêt se dit in silvam.` }
      ]
    },
    {
      type: `text`, title: `3. Le complément de temps`,
      html: `<table>
<tr><th>Type</th><th>Question</th><th>Tournure</th><th>Exemple</th></tr>
<tr><td><b>Date</b> (moment précis)</td><td>quand ?</td><td><b>ablatif seul</b> (ou in + ablatif avec certains noms)</td><td><i>hora quinta</i> à la cinquième heure ; <i>anno</i> dans l'année ; <i>bello</i> en temps de guerre, pendant la guerre ; <i>primo mense</i> le premier mois</td></tr>
<tr><td><b>Durée</b></td><td>pendant combien de temps ?</td><td><b>accusatif seul</b> (ou per + accusatif)</td><td><i>tres annos</i> pendant trois ans ; <i>multos dies</i> pendant de nombreux jours ; <i>totam noctem</i> toute la nuit</td></tr>
<tr><td><b>Temps « avant/après »</b></td><td>combien de temps avant/après ?</td><td><b>ante / post + accusatif</b></td><td><i>ante bellum</i> avant la guerre ; <i>post tres annos</i> trois ans après</td></tr>
</table>
<p>Pour les distinguer : <b>quand ?</b> (moment précis) ➜ ablatif ; <b>pendant combien de temps ?</b> (durée) ➜ accusatif. Une astuce en français : « à trois heures » ➜ ablatif ; « pendant trois heures » ➜ accusatif.</p>`
    },
    {
      type: `text`, title: `4. Moyen, manière, cause, accompagnement, agent`,
      html: `<p>Ces cinq compléments s'expriment tous par l'<b>ablatif</b> (avec ou sans préposition) et doivent être soigneusement distingués :</p>
<ul>
<li><b>Moyen</b> (<i>avec quoi ?</i>) : ablatif <b>sans préposition</b>, pour une chose. <i>Milites hostes gladiis vincunt</i> « Les soldats vainquent les ennemis avec leurs épées ».</li>
<li><b>Accompagnement</b> (<i>avec qui ?</i>) : <b>cum + ablatif</b>, pour des personnes. <i>Pueri cum magistro in silva ambulant</i> « Les garçons se promènent dans la forêt avec le maître ». Avec les pronoms personnels, la préposition se place <b>à la fin</b> : <i>mecum, tecum, secum, nobiscum, vobiscum</i> (« avec moi, avec toi, avec soi, avec nous, avec vous »).</li>
<li><b>Manière</b> (<i>comment ?</i>) : <b>cum + ablatif</b> avec un nom abstrait (<i>cum cura</i>, « avec soin ») ; s'il y a un adjectif, <i>cum</i> peut manquer ou se placer au milieu : <i>magna cum cura</i> ou <i>magna cura</i> « avec grand soin » ; <i>more maiorum</i> « selon la coutume des ancêtres ».</li>
<li><b>Cause</b> (<i>pourquoi ?</i>) : ablatif seul pour une cause intérieure ou un sentiment (<i>timore</i>, « par peur » ; <i>amore</i>, « par amour »), <b>ob / propter + accusatif</b> pour une cause extérieure (<i>propter bellum</i>, « à cause de la guerre »), <b>ex + ablatif</b> pour une cause dont découle l'effet (<i>ex vulnere mortuus est</i>, « il mourut de sa blessure »).</li>
<li><b>Agent</b> (<i>par qui ?</i>) : <b>a/ab + ablatif</b> avec un <b>verbe passif</b> et un nom de <b>personne</b>. <i>Puer a magistro laudatur</i> « Le garçon est loué par le maître ». S'il s'agit d'une chose, on emploie l'ablatif seul (cause efficiente) : <i>Milites telis vulnerantur</i> « Les soldats sont blessés par les traits ».</li>
</ul>
<p>Règle pratique : <b>personne + passif ➜ a/ab</b> (agent) ; <b>personne + actif ➜ cum</b> (accompagnement) ; <b>chose ➜ ablatif seul</b> (moyen ou cause efficiente).</p>`
    },
    {
      type: `remember`, title: `Tableau de décision : « avec » en latin`,
      html: `<table>
<tr><th>Français « avec… »</th><th>Latin</th></tr>
<tr><td>avec une personne (accompagnement)</td><td><b>cum + abl.</b> (<i>cum amico</i>)</td></tr>
<tr><td>avec un instrument (moyen)</td><td><b>abl. seul</b> (<i>gladio</i>)</td></tr>
<tr><td>avec une attitude (manière)</td><td><b>cum + abl.</b> ou abl. + adj. (<i>cum cura</i>, <i>magna cura</i>)</td></tr>
<tr><td>« par » une personne au passif (agent)</td><td><b>a/ab + abl.</b> (<i>a magistro</i>)</td></tr>
</table>`
    },
    {
      type: `widget`, title: `Jeu : quel complément est-ce ?`,
      widget: `match`,
      options: {
        pairs: [
          [`gladio pugnat`, `moyen`],
          [`cum amicis ambulat`, `accompagnement`],
          [`a magistro laudatur`, `agent`],
          [`magna cum cura laborat`, `manière`],
          [`propter bellum`, `cause (extérieure)`],
          [`de bello narrat`, `sujet traité`],
          [`hora quinta`, `date`],
          [`tres annos`, `durée`]
        ]
      },
      caption: `Associe l'expression latine au complément.`
    },
    {
      type: `svg`, title: `Le lieu : les quatre questions`,
      caption: `Les quatre compléments de lieu : lieu où l'on est, où l'on va, d'où l'on vient, par où l'on passe.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f7fee7"/>
<text x="300" y="28" font-size="20" font-weight="bold" fill="#365314" text-anchor="middle">LES COMPLÉMENTS DE LIEU</text>
<rect x="20" y="45" width="130" height="130" rx="14" fill="#fef9c3" stroke="#ca8a04" stroke-width="3"/>
<text x="85" y="75" font-size="18" font-weight="bold" fill="#713f12" text-anchor="middle">URBS</text>
<circle cx="85" cy="120" r="12" fill="#dc2626"/>
<text x="85" y="150" font-size="14" fill="#713f12" text-anchor="middle">OÙ L'ON EST (où ?)</text>
<text x="85" y="168" font-size="14" fill="#713f12" text-anchor="middle">in + abl. / Romae</text>
<rect x="190" y="45" width="130" height="130" rx="14" fill="#fef9c3" stroke="#ca8a04" stroke-width="3"/>
<text x="255" y="75" font-size="18" font-weight="bold" fill="#713f12" text-anchor="middle">URBS</text>
<line x1="170" y1="130" x2="235" y2="130" stroke="#16a34a" stroke-width="5"/>
<polygon points="235,120 255,130 235,140" fill="#16a34a"/>
<text x="255" y="150" font-size="14" fill="#713f12" text-anchor="middle">OÙ L'ON VA (vers)</text>
<text x="255" y="168" font-size="14" fill="#713f12" text-anchor="middle">ad/in + acc. / Romam</text>
<rect x="360" y="45" width="130" height="130" rx="14" fill="#fef9c3" stroke="#ca8a04" stroke-width="3"/>
<text x="425" y="75" font-size="18" font-weight="bold" fill="#713f12" text-anchor="middle">URBS</text>
<line x1="430" y1="130" x2="500" y2="130" stroke="#2563eb" stroke-width="5"/>
<polygon points="500,120 520,130 500,140" fill="#2563eb"/>
<text x="425" y="150" font-size="14" fill="#713f12" text-anchor="middle">D'OÙ L'ON VIENT</text>
<text x="425" y="168" font-size="14" fill="#713f12" text-anchor="middle">ab/ex/de + abl. / Roma</text>
<rect x="20" y="195" width="560" height="80" rx="14" fill="#ffffff" stroke="#65a30d" stroke-width="2"/>
<text x="300" y="224" font-size="16" font-weight="bold" fill="#365314" text-anchor="middle">LIEU PAR OÙ L'ON PASSE (par où ?) : per + accusatif</text>
<text x="300" y="248" font-size="15" fill="#334155" text-anchor="middle">per silvam, per agros, per Italiam</text>
<text x="300" y="268" font-size="14" fill="#334155" text-anchor="middle">Noms de villes : accusatif/ablatif SANS préposition</text>
</svg>`
    },
    {
      type: `text`, title: `5. D'autres compléments utiles`,
      html: `<ul>
<li><b>Complément du nom</b> (génitif) : <i>casa agricolae</i> « la maison du paysan ». Il indique la possession, l'appartenance, la matière (<i>vas auri</i> « un vase d'or »), la partie (génitif partitif : <i>pars militum</i> « une partie des soldats »).</li>
<li><b>Attribution</b> (datif) : <i>Puer donum matri dat</i> « Le garçon donne un cadeau à sa mère ». Datif d'intérêt : <i>Non scholae sed vitae discimus</i> « Nous n'apprenons pas pour l'école, mais pour la vie » (la phrase renverse un reproche de Sénèque : <i>non vitae sed scholae discimus</i>).</li>
<li><b>Sujet traité</b> (<b>de + ablatif</b>) : <i>De bello Gallico</i>, « Sur la guerre des Gaules » (César) ; <i>de amicitia</i> « sur l'amitié ».</li>
<li><b>Matière</b> (<b>ex + ablatif</b>) : <i>statua ex marmore</i> « une statue de marbre » (marmor, 3e décl.).</li>
<li><b>Origine</b> (<b>ex/de + ablatif</b> ou ablatif seul) : <i>ex Italia oriundus</i> « originaire d'Italie ».</li>
<li><b>Qualité</b> (génitif ou ablatif avec adjectif) : <i>vir magnae virtutis</i> / <i>vir magna virtute</i> « un homme d'une grande valeur ».</li>
<li><b>But</b> (datif) : <i>Auxilio venit</i> « Il vient à l'aide » (littéralement « il vient pour l'aide »).</li>
</ul>`
    },
    {
      type: `example`, title: `Traduisons une phrase complète`,
      html: `<p><i>Nautae ex Italia ad insulam parvam magnis navibus propter bellum navigant.</i></p>
<ol>
<li><b>nautae</b> : nom. plur., sujet (les marins).</li>
<li><b>ex Italia</b> : lieu d'où l'on vient (d'Italie), ex + ablatif.</li>
<li><b>ad insulam parvam</b> : lieu où l'on va, ad + acc. (vers la petite île).</li>
<li><b>magnis navibus</b> : moyen, ablatif pluriel (avec de grands navires ; <i>navis</i> est de la 3e décl.).</li>
<li><b>propter bellum</b> : cause, propter + acc. (à cause de la guerre).</li>
<li><b>navigant</b> : verbe, 3e plur.</li>
</ol>
<p>Traduction : <i>« Les marins naviguent d'Italie vers la petite île avec de grands navires à cause de la guerre. »</i></p>`
    },
    {
      type: `curiosity`, title: `Le savais-tu ? Dans « mecum », la préposition est après`,
      html: `<p><i>Mecum</i>, <i>tecum</i>, <i>nobiscum</i> : la préposition <i>cum</i> est « collée » à la fin du pronom. C'est une particularité de <i>cum</i> avec les pronoms personnels (et aussi <i>quocum</i>, <i>quibuscum</i>, « avec lequel, avec lesquels »). La formule liturgique <i>Dominus vobiscum</i> (« Le Seigneur soit avec vous ») la conserve encore.</p>`
    },
    {
      type: `curiosity`, title: `Le savais-tu ? Le locatif est un cas « fossile »`,
      html: `<p>Le locatif latin n'a pas de désinences propres : dans les 1re et 2e déclinaisons au singulier, il coïncide avec le <b>génitif</b> (<i>Romae</i>, <i>Corinthi</i>, <i>domi</i>), dans la 3e avec l'<b>ablatif</b> ou le datif (<i>Carthagine</i> ou <i>Carthagini</i>), au pluriel avec l'<b>ablatif</b> (<i>Athenis</i>). C'est pourquoi on le considère comme un cas « fossile » : il ne survit que dans quelques noms. Un exemple célèbre : Cicéron écrit qu'il se trouve <i>Tusculi</i> (à Tusculum) ou <i>Romae</i>.</p>`
    },
    {
      type: `alternatives`, title: `D'autres façons de reconnaître les compléments`,
      intro: `Si toutes ces prépositions t'embrouillent, voici trois stratégies.`,
      tabs: [
        {
          label: `❓ Les questions`,
          html: `<p>Pose au complément la question en français : <b>où</b> (on y est), <b>vers où</b> (on y va), <b>d'où</b> (on en vient), <b>par où</b> (on y passe) ; <b>quand</b>, <b>pendant combien de temps</b> ; <b>avec quoi</b>, <b>comment</b>, <b>avec qui</b>, <b>pourquoi</b>, <b>par qui</b>. À chaque question correspond une ligne du tableau. C'est la méthode la plus sûre.</p>`
        },
        {
          label: `🧭 Le cas comme guide`,
          html: `<p>Regarde le cas du nom :</p>
<ul>
<li>si c'est un <b>accusatif</b> + préposition, il s'agit en général d'un <b>mouvement</b> (ad, in, per, trans), d'une <b>durée</b>, d'une <b>cause extérieure</b> (ob, propter) ;</li>
<li>si c'est un <b>ablatif</b> + préposition, c'est le <b>lieu d'où l'on vient</b> (ab, ex, de), l'<b>accompagnement</b>/la <b>manière</b> (cum), l'<b>agent</b> (a/ab avec un passif), le <b>lieu où l'on est</b> (in), le <b>sujet traité</b> (de), la <b>matière</b> (ex) ;</li>
<li>si c'est un <b>ablatif sans préposition</b>, c'est le <b>moyen</b>, la <b>date</b>, la <b>cause intérieure</b>, la <b>manière</b> (avec adjectif).</li>
</ul>`
        },
        {
          label: `🇫🇷 Du latin au français`,
          html: `<p>Beaucoup de prépositions et de préfixes français viennent de ces prépositions latines : <i>in</i> ➜ en ; <i>ad</i> ➜ à ; <i>de</i> ➜ de ; <i>ex</i> ➜ ex- (ex-président) ; <i>cum</i> ➜ co-, com- (compagnon) ; <i>per</i> ➜ par ; <i>sine</i> ➜ sans ; <i>post</i> ➜ post- (postérieur) ; <i>ante</i> ➜ avant ; <i>sub</i> ➜ sous ; <i>super</i> ➜ sur. Les reconnaître, c'est la moitié du travail.</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Carte des compléments`,
      nodes: [
        { id: `abl`, label: `Ablatif`, x: 50, y: 8, color: `#06b6d4`, html: `Le « cas joker » des compléments circonstanciels.`, why: `L'ablatif latin provient de la fusion de trois cas indo-européens : l'ablatif (éloignement), l'instrumental (moyen, accompagnement) et le locatif (lieu, temps). C'est pourquoi il a tant de fonctions différentes.` },
        { id: `luogo`, label: `Lieu`, x: 18, y: 42, color: `#16a34a`, html: `Où l'on est, où l'on va, d'où l'on vient, par où l'on passe.`, why: `Les noms de villes n'ont pas de préposition parce que le lieu est perçu comme un « point d'arrivée » déjà connu : Romam = vers Rome. Le locatif Romae est le reste d'un cas disparu.` },
        { id: `tempo`, label: `Temps`, x: 50, y: 42, color: `#f59e0b`, html: `Quand (abl.) et pendant combien de temps (acc.).`, why: `L'accusatif est le cas de l'étendue (« tout au long de la nuit »), l'ablatif celui du point (« à ce moment-là »).` },
        { id: `mezzo`, label: `Moyen, manière, cause`, x: 82, y: 42, color: `#3b82f6`, html: `Ablatif seul ou avec cum.`, why: `C'est la fonction de l'instrumental indo-européen : « au moyen de ». Le français n'a pas de cas correspondant et utilise « avec », « par » et « pour ».` },
        { id: `comp`, label: `Accompagnement et agent`, x: 30, y: 78, color: `#ef4444`, html: `Cum + abl. (avec qui) ; a/ab + abl. (par qui).`, why: `La distinction entre personnes et choses est typique du latin : si l'agent est une personne, il faut la préposition ; si c'est un instrument, non. Une erreur fréquente est d'écrire « gladio » pour « par le soldat ».` },
        { id: `ita`, label: `Français : prépositions`, x: 75, y: 82, color: `#a855f7`, html: `de, à, par, en, avec, pour…`, why: `Les langues romanes ont remplacé les cas par des prépositions : le français a hérité de nombreuses prépositions latines (<i>de, à, en, par, pour, sans</i>) et a ensuite créé des formes contractées (du, au, des, aux).` }
      ],
      edges: [
        [`abl`, `luogo`, `fonction`], [`abl`, `tempo`, `fonction`], [`abl`, `mezzo`, `fonction`], [`mezzo`, `comp`, `+ préposition`], [`comp`, `ita`, `aujourd'hui`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz : moyen, accompagnement, agent`,
      questions: [
        { type: `mc`, q: `« Cum amicis » est un complément…`, options: [`de moyen`, `d'accompagnement`, `d'agent`], answer: 1, explain: `Cum + ablatif avec des personnes : accompagnement.` },
        { type: `text`, q: `Comment dit-on « avec moi » (un seul mot) ?`, answer: [`mecum`], explain: `La préposition cum se place après le pronom : mecum.` },
        { type: `mc`, q: `« Puer a magistro laudatur » : a magistro est…`, options: [`un complément d'agent`, `un complément d'accompagnement`, `un complément de moyen`], answer: 0, explain: `Verbe passif + personne : a/ab + ablatif = complément d'agent.` },
        { type: `mc`, q: `« Milites gladiis pugnant » : gladiis est…`, options: [`moyen`, `accompagnement`, `agent`], answer: 0, explain: `Ablatif seul d'une chose : moyen (« ils combattent avec leurs épées »).` }
      ]
    }
  ],
  glossary: [
    { t: `Complément indirect`, d: `Complément introduit par une préposition ou exprimé par un cas autre que l'accusatif d'objet.` },
    { t: `Ablatif`, d: `Cas des compléments circonstanciels ; il réunit l'ablatif, l'instrumental et le locatif.` },
    { t: `Locatif`, d: `Cas du lieu où l'on est, conservé dans Romae, domi, ruri.` },
    { t: `Lieu où l'on est`, d: `Où ? in + ablatif (villes : locatif).` },
    { t: `Lieu où l'on va`, d: `Vers où ? in/ad + accusatif (villes : accusatif seul).` },
    { t: `Lieu d'où l'on vient`, d: `D'où ? ab/ex/de + ablatif (villes : ablatif seul).` },
    { t: `Complément de moyen`, d: `Avec quoi ? ablatif seul.` },
    { t: `Complément d'accompagnement`, d: `Avec qui ? cum + ablatif.` },
    { t: `Complément d'agent`, d: `Par qui ? a/ab + ablatif, avec un verbe passif.` },
    { t: `Complément de cause`, d: `Pourquoi ? ablatif seul ou ob/propter + accusatif.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Comment dit-on « à Rome » en réponse à « où ? »`, options: [`Romae`, `Roma`, `in Romam`], answer: 0, explain: `Locatif de Roma.` },
      { type: `mc`, q: `Comment dit-on « vers Athènes » (Athenae, -arum, pluriel) ?`, options: [`Athenas`, `Athenis`, `ad Athenae`], answer: 0, explain: `Lieu où l'on va avec un nom de ville : accusatif seul, Athenas.` },
      { type: `text`, q: `Traduis « avec l'épée » (gladius, -i) : ablatif de moyen.`, answer: [`gladio`], explain: `Ablatif singulier de gladius sans préposition.` },
      { type: `mc`, q: `« Tres annos » est…`, options: [`une date`, `une durée`, `une cause`], answer: 1, explain: `Accusatif de durée : pendant trois ans.` },
      { type: `mc`, q: `« Ex agris » est…`, options: [`lieu d'où l'on vient`, `lieu où l'on est`, `agent`], answer: 0, explain: `Ex + ablatif = lieu d'où l'on vient (des champs).` },
      { type: `mc`, q: `Comment traduit-on « Servus a domino vocatur » ?`, options: [`L'esclave appelle le maître`, `L'esclave est appelé par le maître`, `L'esclave appelle avec le maître`], answer: 1, explain: `Vocatur est passif ; a domino = agent.` },
      { type: `tf`, q: `« In silvam » indique le lieu où l'on est.`, answer: false, explain: `In + accusatif indique un mouvement (dans la forêt, en y entrant).` },
      { type: `mc`, q: `« Cum cura » est…`, options: [`manière`, `moyen`, `lieu`], answer: 0, explain: `Cum + ablatif d'un nom abstrait : manière.` },
      { type: `text`, q: `Comment dit-on « de la maison » (domus) ?`, answer: [`domo`], explain: `Comme les noms de villes : ablatif seul : domo.` },
      { type: `order`, q: `Mets dans l'ordre les quatre questions de lieu.`, items: [`où ? (on y est)`, `vers où ? (on y va)`, `d'où ? (on en vient)`, `par où ? (on y passe)`], explain: `Ordre traditionnel : lieu où l'on est, où l'on va, d'où l'on vient, par où l'on passe.` }
    ]
  }
});
