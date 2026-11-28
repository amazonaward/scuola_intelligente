TOPIC('fr', {
  id: "l2-ita-testo-poetico",
  title: "Le texte poétique",
  intro: "Un poème ne se lit pas comme un article : il a un <b>rythme</b>, une <b>musique</b> et une forme qui parlent autant que les mots. Dans cette leçon, tu apprends à « démonter » un texte poétique italien : compter les syllabes, reconnaître les accents, repérer les rimes et les strophes, distinguer sonnet, canzone, ode et vers libre. Grâce à ces outils, chaque poème, de Dante à Ungaretti, devient plus facile à comprendre et plus beau à lire.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Le vers et les syllabes",
      html: `<p>Un texte poétique est écrit en <b>vers</b> : des lignes qui vont à la ligne selon un rythme choisi par le poète, et non parce qu'il n'y a plus de place. Le vers traditionnel italien se mesure en <b>syllabes métriques</b>, et son nom dépend de leur nombre.</p>
<table>
<tr><th>Vers</th><th>Syllabes</th><th>Accent principal sur la</th></tr>
<tr><td>Quinaire (quinario)</td><td>5</td><td>4ᵉ</td></tr>
<tr><td>Sénaire (senario)</td><td>6</td><td>5ᵉ</td></tr>
<tr><td>Septénaire (settenario)</td><td>7</td><td>6ᵉ</td></tr>
<tr><td>Octonaire (ottonario)</td><td>8</td><td>7ᵉ</td></tr>
<tr><td>Novénaire (novenario)</td><td>9</td><td>8ᵉ</td></tr>
<tr><td>Décasyllabe (decasillabo)</td><td>10</td><td>9ᵉ</td></tr>
<tr><td>Hendécasyllabe (endecasillabo)</td><td>11</td><td>10ᵉ (plus des accents internes : 4ᵉ et 7ᵉ, ou bien 6ᵉ)</td></tr>
</table>
<p>Les deux vers les plus importants de la tradition italienne sont l'<b>hendécasyllabe</b> (11 syllabes, le vers de la <i>Divine Comédie</i>) et le <b>septénaire</b>. Ils alternent souvent dans un même poème.</p>`
    },
    {
      type: "remember",
      title: "Comment compter les syllabes métriques",
      html: `<p>On compte les syllabes « comme elles sonnent », avec quelques règles :</p>
<ul>
<li><b>Synalèphe</b> (sinalefe) : quand un mot finit par une voyelle et que le suivant commence par une voyelle, les deux syllabes se fondent en une seule. <i>« Tanto gentile e tanto onesta pare »</i> (Dante) : dans <i>gentile e</i>, « le » et « e » ne comptent que pour une syllabe, de même que « to » et « o » dans <i>tanto onesta</i>.</li>
<li><b>Dialèphe</b> (dialefe) : la rencontre des voyelles reste séparée (c'est une exception, souvent pour un effet expressif).</li>
<li><b>Synérèse</b> (sineresi) : deux voyelles voisines dans le même mot comptent pour une seule syllabe (par ex. <i>mia</i> en une syllabe au lieu de deux).</li>
<li><b>Diérèse</b> (dieresi) : deux voyelles qui d'habitude forment une seule syllabe sont séparées (par ex. <i>o-rï-en-te</i>, marqué par le tréma).</li>
<li><b>Dernier mot</b> : s'il est <b>paroxyton</b> (<i>piano</i> : accent sur l'avant-dernière syllabe, le cas le plus courant), on compte les syllabes réelles ; s'il est <b>oxyton</b> (<i>tronco</i> : accent sur la dernière), on <b>ajoute</b> une syllabe ; s'il est <b>proparoxyton</b> (<i>sdrucciolo</i> : accent sur l'antépénultième), on en <b>retire</b> une.</li>
</ul>
<p>C'est le dernier accent fixe du vers qui lui donne son nom : l'hendécasyllabe a toujours l'accent sur la <b>dixième syllabe</b>.</p>`
    },
    {
      type: "example",
      title: "Comptons un vers : « Tanto gentile e tanto onesta pare »",
      html: `<p>Ce vers (Dante, <i>Vita nova</i> : « Elle paraît si noble et si honnête ») se scande ainsi :</p>
<p>Syllabes : <i>Tan(1)-to(2)-gen(3)-ti(4)-le+e(5)-tan(6)-to+o(7)-ne(8)-sta(9)-pa(10)-re(11)</i>. Les deux synalèphes (<i>gentile e</i>, <i>tanto onesta</i>) réduisent chaque fois deux syllabes à une.</p>
<p>Total : <b>11 syllabes</b>. Le dernier mot, <i>pare</i>, est paroxyton, et l'accent tombe sur la dixième syllabe (<i>pa</i>) : c'est un <b>hendécasyllabe</b>. Autre exemple : <i>« Sempre caro mi fu quest'ermo colle »</i> (« Toujours chère me fut cette colline solitaire », Leopardi, <i>L'infinito</i>) : <i>Sem-pre-ca-ro-mi-fu-ques-ter-mo-col-le</i> = 11 syllabes. Pour t'entraîner, essaie avec <i>« Silvia, rimembri ancora »</i> (« Silvia, te souviens-tu encore », <i>A Silvia</i>) : <i>Sil-via-ri-mem-brian-co-ra</i>, avec synalèphe entre <i>rimembri</i> et <i>ancora</i> : cela fait 7 syllabes, un <b>septénaire</b>.</p>`
    },
    {
      type: "svg",
      title: "Scander un hendécasyllabe",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<text x="300" y="34" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">Sempre caro mi fu quest'ermo colle</text>
<g font-size="16" fill="#0f172a" text-anchor="middle">
<rect x="20" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="43" y="110">Sem</text>
<rect x="72" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="95" y="110">pre</text>
<rect x="124" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="147" y="110">ca</text>
<rect x="176" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="199" y="110">ro</text>
<rect x="228" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="251" y="110">mi</text>
<rect x="280" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="303" y="110">fu</text>
<rect x="332" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="355" y="110">ques</text>
<rect x="384" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="407" y="110">ter</text>
<rect x="436" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="459" y="110">mo</text>
<rect x="488" y="80" width="46" height="46" rx="8" fill="#fecaca" stroke="#b91c1c" stroke-width="3"/><text x="511" y="110" font-weight="bold">col</text>
<rect x="540" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="563" y="110">le</text>
</g>
<g font-size="14" fill="#475569" text-anchor="middle">
<text x="43" y="150">1</text><text x="95" y="150">2</text><text x="147" y="150">3</text><text x="199" y="150">4</text><text x="251" y="150">5</text><text x="303" y="150">6</text><text x="355" y="150">7</text><text x="407" y="150">8</text><text x="459" y="150">9</text><text x="511" y="150">10</text><text x="563" y="150">11</text>
</g>
<text x="300" y="196" font-size="15" text-anchor="middle" fill="#1e293b">quest'ermo : l'élision fond deux mots (ques-ter-mo)</text>
<text x="300" y="224" font-size="15" text-anchor="middle" fill="#b91c1c">L'accent fort tombe sur la 10ᵉ syllabe (col) : hendécasyllabe paroxyton.</text>
<text x="300" y="262" font-size="15" text-anchor="middle" fill="#334155">Il y a 11 syllabes : le dernier mot (colle) est paroxyton.</text>
</g>
</svg>`,
      caption: "Chaque carré est une syllabe métrique. L'accent sur la dixième syllabe est la marque distinctive de l'hendécasyllabe."
    },
    {
      type: "text",
      title: "La rime et son schéma",
      html: `<p>La <b>rime</b> est l'identité des sons, depuis la voyelle accentuée jusqu'à la fin, entre deux mots (<i>vita – smarrita</i>). Les mots qui riment ferment les vers et créent la musique du texte.</p>
<ul>
<li><b>Assonance</b> : seules les voyelles après l'accent coïncident (<i>cuore – morte</i>).</li>
<li><b>Consonance</b> : seules les consonnes coïncident (<i>tetto – tutto</i>).</li>
<li><b>Rime interne</b> : un des mots qui riment se trouve à l'intérieur du vers.</li>
</ul>
<p>Pour décrire le schéma des rimes, on utilise des lettres (A, B, C…) :</p>
<table>
<tr><th>Schéma</th><th>Vers</th><th>Nom</th></tr>
<tr><td>AABB</td><td>1-2, 3-4</td><td>rimes plates ou suivies (<i>baciata</i>)</td></tr>
<tr><td>ABAB</td><td>1-3, 2-4</td><td>rimes croisées (<i>alternata</i>)</td></tr>
<tr><td>ABBA</td><td>1-4, 2-3</td><td>rimes embrassées (<i>incrociata</i> ou <i>chiusa</i>)</td></tr>
<tr><td>ABA BCB CDC</td><td>le vers central rime avec le premier et le troisième du tercet suivant</td><td>rimes enchaînées (<i>incatenata</i>, tercet dantesque)</td></tr>
<tr><td>ABC ABC</td><td>les rimes se répètent dans le même ordre</td><td>rimes répétées (<i>ripetuta</i>)</td></tr>
</table>
<p>Les vers qui ne riment pas sont appelés <b>vers blancs</b> (<i>versi sciolti</i>) : <i>L'infinito</i> de Leopardi est écrit en hendécasyllabes blancs.</p>`
    },
    {
      type: "example",
      title: "Le schéma du tercet dantesque",
      html: `<p>Observons le début de la <i>Comédie</i> :</p>
<p><i>Nel mezzo del cammin di nostra <b>vita</b></i> (A)<br>
<i>mi ritrovai per una selva <b>oscura</b>,</i> (B)<br>
<i>ché la diritta via era smar<b>rita</b>.</i> (A)</p>
<p><i>Ahi quanto a dir qual era è cosa <b>dura</b></i> (B)<br>
<i>esta selva selvaggia e aspra e <b>forte</b></i> (C)<br>
<i>che nel pensier rinova la pa<b>ura</b>!</i> (B)</p>
<p>(« Au milieu du chemin de notre vie, je me retrouvai dans une forêt obscure, car la voie droite était perdue. Ah, qu'il est dur de dire ce qu'était cette forêt sauvage, âpre et dense, qui ranime la peur rien que d'y penser ! »)</p>
<p>Le schéma est <b>ABA BCB</b> : la rime centrale du premier tercet (<i>oscura</i>) devient la rime extérieure du deuxième (<i>dura, paura</i>), et la nouvelle rime centrale (<i>forte</i>) reviendra dans le tercet suivant. Dante l'inventa pour la <i>Comédie</i> : on l'appelle <b>tercet</b> à rimes enchaînées (<i>terza rima</i>), car les vers semblent accrochés les uns aux autres comme les maillons d'une chaîne.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : métrique et rime",
      questions: [
        { type: "mc", q: "Où tombe l'accent principal de l'hendécasyllabe ?", options: ["Sur la 10ᵉ syllabe", "Sur la 7ᵉ", "Sur la 11ᵉ", "Sur la 5ᵉ"], answer: 0, explain: "L'hendécasyllabe a toujours l'accent fort sur la dixième syllabe." },
        { type: "mc", q: "Comment s'appelle le schéma de rimes AABB ?", options: ["Rimes plates (baciata)", "Rimes croisées (alternata)", "Rimes embrassées (incrociata)", "Rimes enchaînées (incatenata)"], answer: 0, explain: "Dans les rimes plates, les vers riment deux par deux." },
        { type: "tf", q: "Un vers qui se termine par un mot proparoxyton (sdrucciolo) compte une syllabe de moins dans le décompte métrique.", answer: true, explain: "Si le dernier mot est proparoxyton, on retire une syllabe ; s'il est oxyton, on en ajoute une." }
      ]
    },
    {
      type: "text",
      title: "Les strophes et les formes poétiques",
      html: `<p>Les vers se regroupent en <b>strophes</b>, des groupes d'un nombre fixe de vers :</p>
<ul>
<li><b>Distique</b> : 2 vers. <b>Tercet</b> : 3. <b>Quatrain</b> : 4. <b>Sizain</b> : 6. <b>Huitain</b> (<i>ottava</i>) : 8 (en général des hendécasyllabes selon le schéma ABABABCC, comme dans le <i>Roland furieux</i> de l'Arioste).</li>
</ul>
<p>Certaines combinaisons de strophes forment des <b>poèmes à forme fixe</b> qui portent un nom précis :</p>
<ul>
<li><b>Sonnet</b> : 14 hendécasyllabes répartis en deux quatrains et deux tercets (schéma typique ABAB ABAB CDC DCD, mais il existe des variantes). Il fut inventé au XIIIe siècle par le poète sicilien <b>Giacomo da Lentini</b> ; c'est la forme de Pétrarque, de Foscolo, de Montale. Exemples : <i>A Zacinto</i> et <i>Alla sera</i> de Foscolo.</li>
<li><b>Canzone</b> : forme longue et solennelle, faite de stances de même structure ; Pétrarque l'utilise dans le <i>Canzoniere</i>.</li>
<li><b>Ballade</b> (<i>ballata</i>) : née pour être chantée et dansée, avec un refrain.</li>
<li><b>Madrigal</b> : court poème au sujet amoureux, souvent mis en musique.</li>
<li><b>Ode</b> : poème solennel en l'honneur d'une personne ou d'un thème (Manzoni, <i>Il cinque maggio</i> ; Parini ; Carducci).</li>
<li><b>Poème</b> (<i>poema</i>) : long texte en vers, divisé en chants (<i>Divine Comédie</i>, <i>Roland furieux</i>).</li>
</ul>`
    },
    {
      type: "text",
      title: "Le vers libre et la poésie du XXe siècle",
      html: `<p>À partir du début du XXe siècle, beaucoup de poètes abandonnent le mètre et la rime : c'est la naissance du <b>vers libre</b>, dont la longueur et la disposition dépendent du sens. Le vers peut être très bref, réduit même à un seul mot. Voici deux exemples célèbres :</p>
<p><i>Mi illumino / d'immenso</i> (« Je m'illumine / d'immense ») — <b>Giuseppe Ungaretti</b>, <i>Mattina</i> (1917), qui exprime en deux vers une émotion d'une grande ouverture.</p>
<p><i>Si sta come / d'autunno / sugli alberi / le foglie</i> (« On est comme / en automne / sur les arbres / les feuilles ») — <b>Ungaretti</b>, <i>Soldati</i> (1918) : les vers sont courts parce que le ton est celui de la suspension et de la fragilité.</p>
<p>Quasimodo aussi écrit en vers libres : <i>« Ognuno sta solo sul cuor della terra / trafitto da un raggio di sole: / ed è subito sera »</i> (« Chacun est seul sur le cœur de la terre / transpercé d'un rayon de soleil : / et soudain c'est le soir », <i>Ed è subito sera</i>, 1930). Le poète ne renonce pas à la musique, mais il la construit avec le rythme, les pauses et les silences sur la page blanche.</p>`
    },
    {
      type: "remember",
      title: "Enjambement, césure et pause",
      html: `<p>La <b>ponctuation</b> et la fin du vers ne coïncident pas toujours. Quand une phrase se poursuit dans le vers suivant, on parle d'<b>enjambement</b> : <i>« ma sedendo e mirando, interminati / spazi di là da quella… »</i> (« mais, assis et contemplant, d'interminables / espaces au-delà de celle-ci… », Leopardi). L'enjambement ralentit la lecture, met un mot en relief et crée du suspense. La <b>césure</b>, elle, est une pause à l'intérieur du vers. Quand les vers sont longs, le poète utilise la césure pour respirer.</p>`
    },
    {
      type: "curiosity",
      title: "Sonnets et innovations",
      html: `<p>Le sonnet est né vers 1230 à la cour de Frédéric II et a été utilisé pendant des siècles dans toute l'Europe (Shakespeare écrivit 154 sonnets, avec un schéma différent du schéma italien). Pourtant, au XXe siècle, il est encore bien vivant : Montale et Ungaretti en ont écrit, et certains auteurs-compositeurs en imitent la structure : quatorze vers, c'est un bon contenant pour une idée complète.</p>`
    },
    {
      type: "curiosity",
      title: "Pourquoi la poésie a-t-elle un rythme ?",
      html: `<p>Avant l'écriture, la poésie se mémorisait et se chantait : le <b>rythme</b> et la <b>rime</b> aidaient à retenir de longs textes (pense à l'<i>Iliade</i>). Aujourd'hui encore, les rappeurs utilisent des mètres et des rimes pour fixer leurs vers : la « métrique » n'est pas seulement une règle scolaire, mais une invention humaine pour faire parvenir les mots à la mémoire et à l'oreille.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre la métrique",
      intro: "Si compter les syllabes te paraît abstrait, essaie d'entendre le rythme.",
      tabs: [
        {
          label: "🥁 Bats le rythme",
          html: "<p>Lis le vers à voix haute en tapant dans tes mains à chaque syllabe, et <b>plus fort</b> sur les syllabes accentuées. Au bout d'un moment, tu sentiras que la dixième syllabe de l'hendécasyllabe est comme un « coup final » ; dans le septénaire, le coup tombe sur la sixième. C'est une façon de <b>ressentir</b> avant de calculer.</p>"
        },
        {
          label: "🎵 Comme une chanson",
          html: "<p>Un poème est comme un texte de chanson : les <b>vers</b> sont les mesures, les <b>rimes</b> sont comme le refrain qui revient, les <b>strophes</b> sont les blocs de la chanson. Si tu arrives à imaginer la mélodie, la structure devient plus facile. Le rap, la pop et la poésie traditionnelle partagent beaucoup d'astuces : rime, répétition, rythme.</p>"
        },
        {
          label: "🔎 Schéma de rimes en couleurs",
          html: "<p>Voici comment on « voit » le tercet à rimes enchaînées : chaque couleur est une rime. Le vers central du premier tercet (en rouge) revient comme premier et troisième vers du deuxième.</p>",
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#fffbeb"/><g font-family="sans-serif" font-size="16"><rect x="40" y="30" width="520" height="34" rx="8" fill="#bfdbfe"/><text x="60" y="53" fill="#1e3a8a">Nel mezzo del cammin di nostra vita  (A)</text><rect x="40" y="70" width="520" height="34" rx="8" fill="#fecaca"/><text x="60" y="93" fill="#7f1d1d">mi ritrovai per una selva oscura,  (B)</text><rect x="40" y="110" width="520" height="34" rx="8" fill="#bfdbfe"/><text x="60" y="133" fill="#1e3a8a">ché la diritta via era smarrita.  (A)</text><rect x="40" y="165" width="520" height="34" rx="8" fill="#fecaca"/><text x="60" y="188" fill="#7f1d1d">Ahi quanto a dir qual era è cosa dura  (B)</text><rect x="40" y="205" width="520" height="34" rx="8" fill="#bbf7d0"/><text x="60" y="228" fill="#14532d">esta selva selvaggia e aspra e forte  (C)</text><rect x="40" y="245" width="520" height="34" rx="8" fill="#fecaca"/><text x="60" y="268" fill="#7f1d1d">che nel pensier rinova la paura!  (B)</text></g></svg>`
        },
        {
          label: "🕰️ Les formes poétiques dans le temps",
          html: "<p>Quelques dates essentielles.</p>",
          widget: "timeline",
          options: { events: [
            { year: 1224, label: "Cantique des créatures", icon: "🌞" },
            { year: 1230, label: "Sonnet (Giacomo da Lentini)", icon: "✒️" },
            { year: 1304, label: "Dante commence la Comédie (v.)", icon: "📜" },
            { year: 1516, label: "Roland furieux", icon: "⚔️" },
            { year: 1807, label: "Foscolo, Dei Sepolcri", icon: "🕯️" },
            { year: 1917, label: "Ungaretti, Mattina", icon: "🌅" }
          ], unit: "ans" }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte mentale du texte poétique",
      nodes: [
        { id: "poesia", label: "Texte poétique", x: 50, y: 8, color: "#ef4444", html: "Texte en vers, dans lequel le son et le sens sont étroitement mêlés.", why: "En poésie, la forme n'est pas une décoration : le rythme et le son contribuent au sens, comme dans une chanson." },
        { id: "metro", label: "Mètre", x: 12, y: 42, color: "#0ea5e9", html: "La mesure des vers : syllabes et accents (hendécasyllabe, septénaire, quinaire...).", why: "La métrique italienne repose sur le nombre de syllabes et sur l'accent : c'est un système né de la poésie médiévale et consolidé par Dante et Pétrarque." },
        { id: "rima", label: "Rime", x: 50, y: 42, color: "#22c55e", html: "Identité des sons finaux : rimes plates, croisées, embrassées, enchaînées.", why: "Elle aidait à retenir les textes par cœur quand on les récitait à voix haute, et elle crée une structure reconnaissable." },
        { id: "strofe", label: "Strophes et formes", x: 88, y: 42, color: "#8b5cf6", html: "Distique, tercet, quatrain, huitain ; sonnet, canzone, ballade, ode.", why: "Les formes fixes organisent la pensée : un sonnet, par exemple, développe un thème dans les quatrains et le conclut dans les tercets." },
        { id: "libero", label: "Vers libre", x: 28, y: 78, color: "#f59e0b", html: "Des vers de longueur variable, souvent sans rime, nés au XXe siècle.", why: "Après la crise des certitudes du début du siècle, les poètes refusent les formes traditionnelles pour exprimer une expérience plus fragmentée." },
        { id: "figure", label: "Son et figures", x: 72, y: 78, color: "#64748b", html: "Allitérations, enjambements, répétitions : les effets qui renforcent le sens.", why: "La poésie concentre beaucoup de sens en peu de mots : les sons et les pauses font partie du message." }
      ],
      edges: [["poesia", "metro", "se mesure par le"], ["poesia", "rima", "s'enrichit de la"], ["poesia", "strofe", "s'organise en"], ["metro", "libero", "est dépassé par le"], ["rima", "figure", "est une forme de"], ["strofe", "libero", "sont dépassées par le"]]
    },
    {
      type: "quiz",
      title: "Mini-quiz final",
      questions: [
        { type: "order", q: "Range ces strophes de la plus courte à la plus longue.", items: ["Distique", "Tercet", "Quatrain", "Huitain"], explain: "Distique (2 vers), tercet (3), quatrain (4), huitain (8)." },
        { type: "text", q: "Comment s'appelle le procédé par lequel une phrase se poursuit dans le vers suivant ?", answer: ["enjambement", "l'enjambement", "inarcatura"], explain: "L'enjambement coupe la phrase entre deux vers, ce qui crée un effet d'insistance." },
        { type: "mc", q: "Combien de vers compte un sonnet ?", options: ["14", "12", "16", "10"], answer: 0, explain: "Deux quatrains et deux tercets, tous en hendécasyllabes." }
      ]
    }
  ],
  glossary: [
    { t: "Vers", d: "Ligne d'un texte poétique, dont la mesure dépend du nombre de syllabes et des accents." },
    { t: "Hendécasyllabe", d: "Vers de 11 syllabes avec l'accent sur la 10ᵉ ; c'est le vers principal de la poésie italienne." },
    { t: "Synalèphe", d: "Fusion en une seule syllabe de la voyelle finale d'un mot avec la voyelle initiale du suivant." },
    { t: "Rime", d: "Identité des sons à partir de la dernière voyelle accentuée, entre deux mots en fin de vers." },
    { t: "Strophe", d: "Groupe de vers dont le nombre et la disposition sont fixes (distique, tercet, quatrain...)." },
    { t: "Sonnet", d: "Poème de 14 hendécasyllabes répartis en deux quatrains et deux tercets." },
    { t: "Enjambement", d: "La phrase se poursuit dans le vers suivant, rompant l'unité syntaxique du vers." },
    { t: "Vers libre", d: "Vers sans mètre ni rime fixes, typique de la poésie du XXe siècle." },
    { t: "Tercet", d: "Strophe de trois vers ; le tercet dantesque a des rimes enchaînées ABA BCB." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Combien de syllabes compte un hendécasyllabe paroxyton (piano) ?", options: ["11", "10", "9", "12"], answer: 0, explain: "L'hendécasyllabe compte 11 syllabes métriques et porte l'accent sur la 10ᵉ." },
      { type: "tf", q: "Si le dernier mot du vers est oxyton (tronco), on ajoute une syllabe au décompte.", answer: true, explain: "Dans le vers oxyton, on compte une syllabe de plus ; dans le vers proparoxyton, une de moins." },
      { type: "mc", q: "Quel est le schéma du tercet dantesque ?", options: ["ABA BCB CDC", "ABB ACC", "AAB CCB", "ABC ABC"], answer: 0, explain: "Ce sont les rimes enchaînées, inventées par Dante pour la Comédie." },
      { type: "text", q: "Comment s'appelle la fusion entre la voyelle finale d'un mot et la voyelle initiale du suivant ?", answer: ["synalèphe", "synalephe", "la synalèphe", "sinalefe"], explain: "La synalèphe réduit deux syllabes à une seule dans le décompte métrique." },
      { type: "mc", q: "Quelle est la forme métrique la plus fréquente du Canzoniere de Pétrarque, après le sonnet ?", options: ["La canzone", "L'ode barbare", "Le poème en huitains", "Le vers libre"], answer: 0, explain: "Le Canzoniere réunit 366 poèmes, surtout des sonnets et des canzoni." },
      { type: "mc", q: "Que sont les vers blancs (versi sciolti) ?", options: ["Des vers sans rime", "Des vers avec beaucoup de rimes", "Des vers chantés", "Des vers de neuf syllabes"], answer: 0, explain: "L'infinito de Leopardi est en hendécasyllabes blancs." },
      { type: "tf", q: "Ungaretti n'écrivait qu'en hendécasyllabes rimés.", answer: false, explain: "Ungaretti utilisa le vers libre, avec des vers réduits parfois à un seul mot." },
      { type: "order", q: "Range les strophes selon leur nombre croissant de vers.", items: ["Distique", "Tercet", "Quatrain", "Sizain"], explain: "Respectivement 2, 3, 4 et 6 vers." },
      { type: "mc", q: "Qui a inventé le sonnet ?", options: ["Giacomo da Lentini", "Dante Alighieri", "François Pétrarque", "Ugo Foscolo"], answer: 0, explain: "Le notaire Giacomo da Lentini, de l'école sicilienne, est considéré comme l'inventeur du sonnet." },
      { type: "mc", q: "Qu'est-ce qu'un enjambement ?", options: ["Une phrase qui se poursuit dans le vers suivant", "Une rime interne", "Un vers sans accent", "Une strophe de deux vers"], answer: 0, explain: "Il rompt l'unité entre vers et syntaxe, en mettant les mots en relief." }
    ]
  }
});
