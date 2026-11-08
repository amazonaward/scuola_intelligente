TOPIC('fr', {
  id: "m3-ita-analisi-periodo",
  title: "L'analyse de la phrase complexe (analisi del periodo)",
  intro: "Une phrase complexe ressemble à un immeuble : il y a une structure porteuse (la <b>proposition principale</b>) et des pièces reliées (les <b>propositions coordonnées</b> et les <b>subordonnées</b>). Avec l'analyse du <i>periodo</i>, nous apprenons à démonter les longues phrases, à comprendre qui commande et qui dépend, et à écrire des textes plus clairs.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "Phrase simple, phrase complexe et propositions",
      html: `<p>Dans l'analyse logique, tu étudiais la <b>phrase simple</b> : un seul prédicat (verbe) avec ses compléments. Quand une phrase contient <b>plusieurs verbes à un mode personnel ou impersonnel</b>, on a un <b>periodo</b> (une phrase complexe).</p>
<p>Chaque partie de la phrase complexe qui a son propre prédicat s'appelle une <b>proposition</b>. Règle d'or : <b>autant de propositions que de prédicats</b>.</p>
<p>Exemple : <i>"Quando sono arrivato, | Marco dormiva | e non ho voluto svegliarlo."</i> (Quand je suis arrivé, Marco dormait et je n'ai pas voulu le réveiller.) → trois prédicats (<i>sono arrivato</i>, <i>dormiva</i>, <i>ho voluto svegliare</i>) → trois propositions.</p>
<p>⚠️ Attention aux verbes modaux (<i>volere, potere, dovere</i>) et aux verbes phraséologiques (<i>stare per, cominciare a, smettere di</i>) : ils forment <b>un seul prédicat</b> avec l'infinitif qui les suit. <i>"Devo studiare"</i> (je dois étudier) est une seule proposition.</p>`
    },
    {
      type: "text",
      title: "Étape 1 – Trouve la proposition principale",
      html: `<p>La <b>proposition principale</b> (ou indépendante) est celle qui :</p>
<ul>
<li>a <b>un sens complet à elle seule</b> ;</li>
<li>ne <b>dépend</b> d'aucune autre proposition ;</li>
<li>a généralement son verbe à l'<b>indicatif</b>, au <b>conditionnel</b>, à l'<b>impératif</b> ou au subjonctif exhortatif/optatif (<i>"Magari piovesse!"</i> – si seulement il pleuvait !).</li>
</ul>
<p>Les principales peuvent être : <b>énonciatives</b> (elles affirment ou nient : <i>"Oggi piove"</i>), <b>interrogatives directes</b> (<i>"Vieni?"</i>), <b>exclamatives</b> (<i>"Che bello!"</i>), <b>volitives</b> (<i>"Chiudi la porta"</i>), <b>désidératives</b> (<i>"Vorrei un gelato"</i>), <b>dubitatives</b> (<i>"Che fare?"</i>).</p>`
    },
    {
      type: "text",
      title: "Étape 2 – Coordination et subordination",
      html: `<p>Les propositions se relient de deux façons :</p>
<table>
<tr><th>Coordination (parataxe)</th><th>Subordination (hypotaxe)</th></tr>
<tr><td>Propositions <b>au même niveau</b> : aucune ne dépend de l'autre.</td><td>Une proposition <b>dépend</b> d'une autre (la régissante) et la complète.</td></tr>
<tr><td>Conjonctions de coordination : <i>e, né, o, ma, però, quindi, infatti, cioè, sia… sia</i> ; ou seulement la virgule (<b>asyndète</b>).</td><td>Conjonctions de subordination : <i>che, perché, quando, se, mentre, affinché, sebbene, poiché</i> ; pronoms relatifs ; verbes à un mode impersonnel.</td></tr>
<tr><td><i>"Studio <b>e</b> ascolto musica."</i> (J'étudie et j'écoute de la musique.)</td><td><i>"Studio <b>perché</b> domani ho la verifica."</i> (J'étudie parce que demain j'ai un contrôle.)</td></tr>
</table>
<p>Les coordonnées se classent d'après la conjonction : <b>copulatives</b> (e, né, anche), <b>adversatives</b> (ma, però, tuttavia), <b>disjonctives</b> (o, oppure), <b>conclusives</b> (quindi, perciò, dunque), <b>déclaratives/explicatives</b> (infatti, cioè), <b>corrélatives</b> (sia… sia, né… né).</p>`
    },
    {
      type: "svg",
      title: "Le schéma en arbre d'une phrase complexe",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#f8fafc"/>
<text x="320" y="28" font-size="16" text-anchor="middle" fill="#334155">"Luca ha detto che verrà alla festa e porterà la torta, se finisce i compiti."</text>
<rect x="210" y="50" width="220" height="50" rx="10" fill="#2563eb"/>
<text x="320" y="73" font-size="16" text-anchor="middle" fill="#fff" font-weight="bold">PRINCIPALE</text>
<text x="320" y="92" font-size="15" text-anchor="middle" fill="#fff">Luca ha detto</text>
<line x1="320" y1="100" x2="190" y2="150" stroke="#334155" stroke-width="3"/>
<rect x="60" y="150" width="240" height="50" rx="10" fill="#16a34a"/>
<text x="180" y="172" font-size="15" text-anchor="middle" fill="#fff" font-weight="bold">SUB. 1er degré (oggettiva)</text>
<text x="180" y="191" font-size="15" text-anchor="middle" fill="#fff">che verrà alla festa</text>
<line x1="300" y1="175" x2="350" y2="175" stroke="#f97316" stroke-width="4" stroke-dasharray="8 5"/>
<text x="325" y="165" font-size="14" text-anchor="middle" fill="#c2410c">e</text>
<rect x="350" y="150" width="250" height="50" rx="10" fill="#22c55e"/>
<text x="475" y="172" font-size="15" text-anchor="middle" fill="#fff" font-weight="bold">coordonnée à la sub. 1er degré</text>
<text x="475" y="191" font-size="15" text-anchor="middle" fill="#fff">(e) porterà la torta</text>
<line x1="180" y1="200" x2="180" y2="250" stroke="#334155" stroke-width="3"/>
<rect x="60" y="250" width="240" height="50" rx="10" fill="#a855f7"/>
<text x="180" y="272" font-size="15" text-anchor="middle" fill="#fff" font-weight="bold">SUB. 2e degré (condizionale)</text>
<text x="180" y="291" font-size="15" text-anchor="middle" fill="#fff">se finisce i compiti</text>
<text x="470" y="275" font-size="14" fill="#334155">— trait plein : dépend de</text>
<text x="470" y="298" font-size="14" fill="#c2410c">- - pointillés : coordination</text>
</svg>`,
      caption: "La principale est tout en haut ; chaque subordonnée « descend » d'un degré ; les coordonnées sont au même niveau."
    },
    {
      type: "text",
      title: "Étape 3 – Forme explicite et implicite ; les degrés",
      html: `<p>Une subordonnée peut être :</p>
<ul>
<li><b>explicite</b> : verbe à un mode <b>personnel</b> (indicatif, subjonctif, conditionnel), introduite par une conjonction ou un relatif → <i>"Ti chiamo <b>quando arrivo</b>."</i> (Je t'appelle quand j'arrive.)</li>
<li><b>implicite</b> : verbe à un mode <b>impersonnel</b> (infinitif, participe, gérondif) → <i>"Ti chiamo <b>arrivato</b> a casa"</i>, <i>"<b>Arrivando</b> a casa, ti chiamo."</i> (En arrivant à la maison, je t'appelle.)</li>
</ul>
<p>Le <b>degré</b> indique la distance par rapport à la principale : une subordonnée qui dépend de la principale est du <b>1er degré</b> ; si elle dépend d'une subordonnée du 1er degré, elle est du <b>2e degré</b>, et ainsi de suite.</p>`
    },
    {
      type: "text",
      title: "Étape 4 – Les types de subordonnées",
      html: `<p>Beaucoup de subordonnées correspondent à un complément de l'analyse logique : ce sont des « compléments transformés en proposition ».</p>
<table>
<tr><th>Subordonnée</th><th>Elle répond à…</th><th>Exemple</th></tr>
<tr><td><b>Sujet (soggettiva)</b></td><td>fait fonction de sujet</td><td><i>È importante <b>che tu venga</b>.</i> (Il est important que tu viennes.)</td></tr>
<tr><td><b>Complétive objet (oggettiva)</b></td><td>fait fonction de COD</td><td><i>So <b>che hai ragione</b>.</i> (Je sais que tu as raison.)</td></tr>
<tr><td><b>Déclarative</b></td><td>explique un nom ou un pronom</td><td><i>Ho la speranza <b>che vinca</b>.</i> (J'ai l'espoir qu'il gagne.)</td></tr>
<tr><td><b>Interrogative indirecte</b></td><td>question rapportée</td><td><i>Mi chiedo <b>se verrà</b>.</i> (Je me demande s'il viendra.)</td></tr>
<tr><td><b>Relative</b></td><td>comme un adjectif épithète</td><td><i>Il libro <b>che leggo</b> è bello.</i> (Le livre que je lis est beau.)</td></tr>
<tr><td><b>Causale</b></td><td>pourquoi ?</td><td><i>Resto a casa <b>perché piove</b>.</i> (Je reste à la maison parce qu'il pleut.)</td></tr>
<tr><td><b>Finale</b></td><td>dans quel but ?</td><td><i>Studio <b>per superare l'esame</b>.</i> (J'étudie pour réussir l'examen.)</td></tr>
<tr><td><b>Temporelle</b></td><td>quand ?</td><td><i><b>Mentre mangiavo</b>, squillò il telefono.</i> (Pendant que je mangeais, le téléphone sonna.)</td></tr>
<tr><td><b>Consécutive</b></td><td>avec quelle conséquence ?</td><td><i>Era così stanco <b>che si addormentò</b>.</i> (Il était si fatigué qu'il s'endormit.)</td></tr>
<tr><td><b>Concessive</b></td><td>malgré quoi ?</td><td><i><b>Sebbene piovesse</b>, uscimmo.</i> (Bien qu'il pleuve, nous sommes sortis.)</td></tr>
<tr><td><b>Conditionnelle</b> (période hypothétique)</td><td>à quelle condition ?</td><td><i><b>Se studi</b>, sarai promosso.</i> (Si tu étudies, tu seras reçu.)</td></tr>
<tr><td><b>Modale</b></td><td>de quelle manière ?</td><td><i>Entrò <b>correndo</b>.</i> (Il entra en courant.)</td></tr>
<tr><td><b>Comparative</b></td><td>par rapport à quoi ?</td><td><i>È più facile <b>di quanto pensassi</b>.</i> (C'est plus facile que je ne le pensais.)</td></tr>
</table>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : propositions et liaisons",
      questions: [
        { type: "num", q: "Combien y a-t-il de propositions dans : « Quando torno a casa, mangio e poi faccio i compiti » ?", answer: 3, explain: "Trois prédicats : torno, mangio, faccio → trois propositions." },
        { type: "mc", q: "Dans « Esco, ma torno presto » (Je sors, mais je rentre tôt), la deuxième proposition est…", options: ["une subordonnée causale", "une coordonnée adversative", "une principale interrogative"], answer: 1, explain: "« Ma » est une conjonction de coordination adversative : les deux propositions sont au même niveau." },
        { type: "tf", q: "« Voglio partire » (Je veux partir) contient deux propositions.", answer: false, explain: "« Volere » est un verbe modal : « voglio partire » est un seul prédicat, donc une seule proposition." }
      ]
    },
    {
      type: "example",
      title: "Exemple guidé : analysons une phrase complexe",
      html: `<p><i>"Poiché era tardi, Anna chiamò sua madre per dirle che sarebbe tornata in autobus."</i> (Comme il était tard, Anna appela sa mère pour lui dire qu'elle rentrerait en bus.)</p>
<ol>
<li><b>Je compte les prédicats</b> : era, chiamò, dire, sarebbe tornata → 4 propositions.</li>
<li><b>Principale</b> : <i>Anna chiamò sua madre</i> (elle a un sens à elle seule).</li>
<li><i>Poiché era tardi</i> → subordonnée <b>causale</b> explicite du 1er degré.</li>
<li><i>per dirle</i> → subordonnée <b>finale</b> implicite (infinitif) du 1er degré.</li>
<li><i>che sarebbe tornata in autobus</i> → subordonnée <b>complétive objet (oggettiva)</b> explicite du 2e degré (elle dépend de « dirle »).</li>
</ol>`
    },
    {
      type: "example",
      title: "Exemple pratique : passer de l'implicite à l'explicite et inversement",
      html: `<p>Savoir passer d'une forme à l'autre aide à mieux écrire et à éviter les répétitions de « che ».</p>
<ul>
<li><i>"<b>Finiti</b> i compiti, uscì"</i> (temporelle implicite, participe) → <i>"<b>Dopo che ebbe finito</b> i compiti, uscì"</i> (explicite). (Ses devoirs finis, il sortit.)</li>
<li><i>"Penso <b>di avere ragione</b>"</i> (objet implicite) → <i>"Penso <b>che io abbia ragione</b>"</i> : ici la forme explicite sonne lourd, parce que le sujet est le même. Quand le sujet est identique, on préfère l'<b>implicite</b>.</li>
<li><i>"<b>Sbagliando</b> s'impara"</i> (gérondif à valeur causale/instrumentale) → <i>"<b>Poiché si sbaglia</b>, s'impara"</i>. (C'est en se trompant qu'on apprend.)</li>
</ul>`
    },
    {
      type: "widget",
      title: "Entraîne-toi : coordonnée ou subordonnée ?",
      widget: "classify",
      options: {
        groups: ["Coordonnée", "Subordonnée"],
        items: [
          ["…ma non avevo l'ombrello", 0],
          ["…perché avevo fame", 1],
          ["…e poi sono uscito", 0],
          ["…sebbene fosse stanco", 1],
          ["…quindi ho deciso di restare", 0],
          ["…che mi hai prestato", 1],
          ["…oppure guardiamo un film", 0],
          ["…affinché tu capisca", 1],
          ["…infatti era già buio", 0],
          ["…mentre leggevo", 1]
        ]
      },
      caption: "Regarde la conjonction : celles de coordination mettent les phrases sur le même plan, celles de subordination créent une dépendance."
    },
    {
      type: "widget",
      title: "Associe la subordonnée à son type",
      widget: "match",
      options: {
        pairs: [
          ["Se piove", "conditionnelle"],
          ["Benché fosse malato", "concessive"],
          ["Per non fare tardi", "finale"],
          ["Mi domando chi sia", "interrogative indirecte"],
          ["Era così buio che non vedevo", "consécutive"],
          ["Dopo aver mangiato", "temporelle"]
        ]
      },
      caption: "Demande-toi toujours : à quelle question répond cette proposition ?"
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Parataxe et hypotaxe en littérature",
      html: `<p>Les écrivains choisissent leur style aussi en fonction de la syntaxe. <b>Giovanni Boccaccio</b>, dans le <i>Décaméron</i> (1349–1353), imitait la période latine, avec de très longues chaînes de subordonnées. Des siècles plus tard, <b>Giovanni Verga</b>, puis beaucoup d'auteurs du XXe siècle, ont préféré une syntaxe plus <b>paratactique</b>, avec des phrases courtes et coordonnées, plus proche de la langue parlée. Essaie de comparer une page des <i>Fiancés</i> (<i>I promessi sposi</i>) avec une page de <i>Si c'est un homme</i> de Primo Levi : tu remarqueras la différence !</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? La phrase la plus longue",
      html: `<p>L'écrivain français <b>Marcel Proust</b>, dans le roman <i>À la recherche du temps perdu</i>, a écrit une phrase de plus de <b>900 mots</b> ! En italien, Carlo Emilio Gadda est célèbre pour ses phrases enchevêtrées pleines d'incises. À l'opposé, dans les titres de journaux et les messages, on n'emploie presque que des phrases courtes : la syntaxe change selon le but du texte.</p>`
    },
    {
      type: "remember",
      title: "À retenir : la méthode en 5 étapes",
      html: `<ol>
<li>Souligne les <b>prédicats</b> et divise la phrase complexe en propositions.</li>
<li>Trouve la <b>principale</b> (elle a un sens à elle seule).</li>
<li>Pour chaque autre proposition, demande-toi : est-elle <b>au même niveau</b> (coordonnée) ou <b>dépend-elle</b> d'une autre (subordonnée) ?</li>
<li>Pour les subordonnées, indique : le <b>type</b> (causale, finale…), la <b>forme</b> (explicite/implicite), le <b>degré</b>.</li>
<li>Dessine le <b>schéma en arbre</b>.</li>
</ol>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre l'analyse de la phrase complexe",
      intro: "Si le schéma traditionnel te trouble, essaie une de ces voies : une analogie, une méthode utilisée à l'étranger, un modèle 3D.",
      tabs: [
        {
          label: "🏢 L'immeuble",
          html: `<p>Imagine la phrase complexe comme un <b>immeuble</b> :</p>
<ul>
<li>la <b>principale</b> est le <b>rez-de-chaussée</b> : elle tient debout toute seule ;</li>
<li>les <b>subordonnées du 1er degré</b> sont le <b>premier étage</b> : elles s'appuient sur le rez-de-chaussée ;</li>
<li>celles du <b>2e degré</b> sont au <b>deuxième étage</b>, appuyées sur le premier ;</li>
<li>les <b>coordonnées</b> sont des pièces <b>côte à côte, au même étage</b>, reliées par une porte (e, ma, o…).</li>
</ul>
<p>Si tu enlèves le rez-de-chaussée, tout s'écroule ; si tu enlèves une pièce du deuxième étage, l'immeuble reste debout. Voilà pourquoi la principale est la seule qui tient toute seule !</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#e0f2fe"/>
<rect x="100" y="200" width="400" height="60" fill="#2563eb"/>
<text x="300" y="237" font-size="18" text-anchor="middle" fill="#fff" font-weight="bold">Rez-de-chaussée : PRINCIPALE</text>
<rect x="100" y="130" width="195" height="70" fill="#16a34a" stroke="#fff" stroke-width="3"/>
<rect x="305" y="130" width="195" height="70" fill="#22c55e" stroke="#fff" stroke-width="3"/>
<text x="197" y="170" font-size="16" text-anchor="middle" fill="#fff">1er degré</text>
<text x="402" y="170" font-size="16" text-anchor="middle" fill="#fff">coordonnée (1er degré)</text>
<rect x="100" y="60" width="195" height="70" fill="#a855f7" stroke="#fff" stroke-width="3"/>
<text x="197" y="100" font-size="16" text-anchor="middle" fill="#fff">2e degré</text>
<polygon points="90,60 197,15 305,60" fill="#ef4444"/>
<rect x="290" y="150" width="30" height="40" fill="#f59e0b"/>
<text x="540" y="170" font-size="14" fill="#334155">porte</text>
<text x="540" y="188" font-size="14" fill="#334155">= « e »</text>
</svg>`
        },
        {
          label: "🇬🇧 La méthode anglaise : main & dependent clauses",
          html: `<p>Dans les écoles anglaises, on parle de <b>main clause</b> (principale) et de <b>subordinate</b> ou <b>dependent clause</b>. Le test qu'on y enseigne est très simple : <b>« Can it stand alone? »</b> – peut-elle tenir seule comme phrase ?</p>
<p>Les subordonnées se divisent en trois familles, selon leur fonction :</p>
<ul>
<li><b>noun clauses</b> (elles fonctionnent comme un nom) → nos subordonnées sujet, objet, interrogatives indirectes ;</li>
<li><b>adjective/relative clauses</b> (elles fonctionnent comme un adjectif) → nos relatives ;</li>
<li><b>adverbial clauses</b> (elles fonctionnent comme un adverbe) → causales, temporelles, finales, concessives…</li>
</ul>
<p>Trois familles au lieu de vingt noms : pour commencer, c'est plus facile ! Ensuite, à l'intérieur de chaque famille, tu retrouves les types italiens.</p>`
        },
        {
          label: "🧩 Remplace par un mot",
          html: `<p>Astuce pratique : essaie de <b>remplacer la subordonnée par un seul mot</b>. Le type de mot te dit le type de subordonnée !</p>
<ul>
<li><i>"So <b>che hai vinto</b>"</i> → <i>"So <b>questo</b>"</i> (nom/pronom COD) → <b>complétive objet (oggettiva)</b>.</li>
<li><i>"Il ragazzo <b>che corre</b> è mio fratello"</i> → <i>"Il ragazzo <b>veloce</b>"</i> (adjectif) → <b>relative</b>.</li>
<li><i>"Esco <b>quando smette di piovere</b>"</i> → <i>"Esco <b>dopo</b>"</i> (adverbe de temps) → <b>temporelle</b>.</li>
<li><i>"Lo faccio <b>per aiutarti</b>"</i> → <i>"Lo faccio <b>per te</b>"</i> (complément de but) → <b>finale</b>.</li>
</ul>`
        },
        {
          label: "🧊 La phrase complexe en 3D",
          html: `<p>Regarde cette « tour » en couches : chaque couche est un <b>degré</b> de subordination. Le noyau central est la <b>principale</b> ; plus tu t'éloignes du centre, plus la proposition est « lointaine » et dépendante. Fais tourner le modèle : tu verras que chaque couche extérieure ne peut exister que s'il y a celle de l'intérieur pour la soutenir.</p>`,
          scene: "layers",
          options: { layers: [
            { r: 1, color: "#c084fc", label: "Subordonnée du 3e degré" },
            { r: 0.78, color: "#a855f7", label: "Subordonnée du 2e degré" },
            { r: 0.56, color: "#22c55e", label: "Subordonnée du 1er degré" },
            { r: 0.32, color: "#2563eb", label: "Principale" }
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte de l'analyse de la phrase complexe : touche un nœud",
      nodes: [
        { id: "periodo", label: "Phrase complexe (periodo)", x: 50, y: 6, color: "#0f172a", html: "Phrase formée de plusieurs propositions, de la majuscule au point final.", why: "Le terme vient du grec <i>períodos</i>, « tour, circuit » : les rhéteurs grecs, comme Aristote dans la <i>Rhétorique</i>, appelaient ainsi une pensée complète qui « tourne » et se referme sur elle-même." },
        { id: "proposizione", label: "Proposition", x: 50, y: 26, color: "#334155", html: "Chaque partie de la phrase complexe qui a son propre prédicat.", why: "Du latin <i>propositio</i>, « ce qui est posé devant », c'est-à-dire une affirmation. On la compte d'après les prédicats parce que c'est le verbe qui gouverne le sujet et les compléments." },
        { id: "principale", label: "Principale", x: 15, y: 46, color: "#2563eb", html: "La proposition indépendante, qui a un sens complet à elle seule.", why: "Elle est indépendante parce qu'elle contient le message essentiel : les autres ajoutent des informations. C'est pourquoi, dans les verbes principaux, on trouve les modes de la certitude ou de la volonté (indicatif, impératif, conditionnel)." },
        { id: "coordinazione", label: "Coordination (parataxe)", x: 50, y: 50, color: "#f97316", html: "Liaison entre propositions du même niveau avec e, ma, o, quindi…", why: "Du grec <i>parà</i> (à côté) + <i>táxis</i> (ordre) : « mettre côte à côte ». C'est la syntaxe typique de la langue parlée et des langues anciennes plus simples, comme le grec homérique." },
        { id: "subordinazione", label: "Subordination (hypotaxe)", x: 85, y: 46, color: "#16a34a", html: "Une proposition dépend d'une autre (régissante) et la complète.", why: "Du grec <i>hypó</i> (sous) + <i>táxis</i> : « mettre sous ». Le latin classique de Cicéron en fit un art, et l'italien écrit l'a hérité par Boccace et les humanistes." },
        { id: "forma", label: "Explicite / implicite", x: 70, y: 72, color: "#a855f7", html: "Explicite : verbe à un mode personnel. Implicite : infinitif, participe ou gérondif.", why: "Les modes impersonnels n'indiquent pas la personne, donc le sujet se déduit de la régissante : c'est pourquoi on emploie surtout l'implicite quand le sujet est le même." },
        { id: "tipi", label: "Types de subordonnées", x: 92, y: 72, color: "#22c55e", html: "Sujet, objet, relatives, causales, finales, temporelles, concessives, consécutives, conditionnelles…", why: "Beaucoup naissent d'un complément de l'analyse logique « développé » en proposition : complément de cause → causale, de but → finale, de temps → temporelle. La grammaire les a classées en suivant le modèle latin." },
        { id: "gradi", label: "Degrés", x: 40, y: 78, color: "#ef4444", html: "La distance d'une subordonnée par rapport à la principale : 1er, 2e, 3e degré…", why: "On compte les « marches » de dépendance, comme dans un arbre généalogique : fille de la principale = 1er degré, « petite-fille » = 2e degré." },
        { id: "logica", label: "Analyse logique", x: 15, y: 90, color: "#64748b", html: "L'étude de la phrase simple : sujet, prédicat, compléments.", why: "L'analyse de la phrase complexe est la même logique appliquée à un niveau supérieur : ce qui est un complément dans la phrase simple devient une proposition dans la phrase complexe." }
      ],
      edges: [
        ["periodo", "proposizione", "est formée de"],
        ["proposizione", "principale", "l'une est la"],
        ["proposizione", "coordinazione", "se relient par"],
        ["proposizione", "subordinazione", "se relient par"],
        ["subordinazione", "forma", "peut être"],
        ["subordinazione", "tipi", "se divise en"],
        ["subordinazione", "gradi", "se mesure en"],
        ["logica", "tipi", "complément → proposition"],
        ["principale", "gradi", "degré 0"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : types de subordonnées",
      questions: [
        { type: "mc", q: "« Sebbene fosse tardi, continuammo a giocare » : la première proposition est…", options: ["causale", "concessive", "temporelle"], answer: 1, explain: "« Sebbene » introduit une concessive : elle indique un fait qui n'empêche pas l'action de la principale." },
        { type: "mc", q: "« Dimmi dove sei stato » : « dove sei stato » est…", options: ["une interrogative indirecte", "une relative", "une locative"], answer: 0, explain: "C'est une question rapportée, dépendant de « dimmi » : interrogative indirecte." },
        { type: "mc", q: "« Uscendo, chiudi la porta » : la subordonnée est…", options: ["explicite", "implicite"], answer: 1, explain: "Le gérondif « uscendo » est un mode impersonnel : subordonnée implicite (temporelle)." }
      ]
    }
  ],
  glossary: [
    { t: "Periodo (phrase complexe)", d: "Phrase formée de deux propositions ou plus." },
    { t: "Proposition", d: "Partie de la phrase complexe qui contient un prédicat." },
    { t: "Principale", d: "Proposition indépendante, ayant un sens complet à elle seule." },
    { t: "Régissante", d: "Proposition dont dépend une subordonnée." },
    { t: "Coordonnée", d: "Proposition reliée à une autre du même niveau (e, ma, o, quindi…)." },
    { t: "Subordonnée", d: "Proposition qui dépend d'une autre et en complète le sens." },
    { t: "Asyndète", d: "Coordination faite seulement avec la ponctuation, sans conjonctions." },
    { t: "Explicite", d: "Subordonnée dont le verbe est à un mode personnel." },
    { t: "Implicite", d: "Subordonnée dont le verbe est à un mode impersonnel (infinitif, participe, gérondif)." },
    { t: "Degré", d: "Niveau de dépendance d'une subordonnée par rapport à la principale." },
    { t: "Parataxe / hypotaxe", d: "Construction par coordination / par subordination." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Combien y a-t-il de propositions dans : « Mentre aspettavo l'autobus, ho letto un libro che mi aveva regalato Sara » ?", answer: 3, explain: "Prédicats : aspettavo, ho letto, aveva regalato → 3." },
      { type: "mc", q: "Quelle est la principale dans « Se avessi tempo, verrei con voi » ?", options: ["Se avessi tempo", "verrei con voi"], answer: 1, explain: "« Verrei con voi » a un sens à elle seule ; « se avessi tempo » est une conditionnelle." },
      { type: "mc", q: "« Corri, altrimenti perdi il treno » : la deuxième proposition est une coordonnée…", options: ["copulative", "disjonctive", "conclusive"], answer: 1, explain: "« Altrimenti » équivaut à « o » : coordonnée disjonctive." },
      { type: "mc", q: "« È probabile che domani nevichi » : « che domani nevichi » est…", options: ["une complétive objet (oggettiva)", "une subordonnée sujet (soggettiva)", "une déclarative"], answer: 1, explain: "Elle fait fonction de sujet de « è probabile » (qu'est-ce qui est probable ? qu'il neige) : subordonnée sujet." },
      { type: "mc", q: "« Parlava così piano che nessuno lo sentiva » : la subordonnée est…", options: ["causale", "consécutive", "finale"], answer: 1, explain: "« Così… che » indique la conséquence : consécutive." },
      { type: "tf", q: "Une subordonnée implicite a son verbe à l'indicatif ou au subjonctif.", answer: false, explain: "L'implicite emploie les modes impersonnels : infinitif, participe, gérondif." },
      { type: "tf", q: "Une subordonnée du 2e degré dépend d'une subordonnée du 1er degré.", answer: true, explain: "Le degré compte les niveaux de dépendance par rapport à la principale." },
      { type: "text", q: "Comment s'appelle la coordination faite seulement avec des virgules, sans conjonctions ?", answer: ["asindeto", "l'asindeto", "coordinazione per asindeto", "asyndète", "l'asyndète", "asyndete", "l'asyndete"], explain: "Asyndète (en italien : asindeto), du grec « sans liens »." },
      { type: "mc", q: "« Ho comprato il libro che mi avevi consigliato » : la subordonnée est…", options: ["une relative", "une complétive objet (oggettiva)", "une déclarative"], answer: 0, explain: "« Che » est un pronom relatif (= il quale) se rapportant à « libro » : relative." },
      { type: "order", q: "Mets dans l'ordre les étapes de l'analyse de la phrase complexe.", items: ["Souligner les prédicats", "Diviser en propositions", "Trouver la principale", "Reconnaître coordonnées et subordonnées", "Indiquer type, forme et degré"], explain: "On part des verbes, on isole la principale, puis on classe tout le reste." },
      { type: "mc", q: "« Per arrivare in tempo, prese un taxi » : « per arrivare in tempo » est…", options: ["une finale implicite", "une causale explicite", "une temporelle implicite"], answer: 0, explain: "Elle indique le but et est à l'infinitif : finale implicite." },
      { type: "tf", q: "Dans « Devo finire i compiti » il y a deux propositions.", answer: false, explain: "« Dovere » est modal : il forme un seul prédicat avec l'infinitif." }
    ]
  }
});
