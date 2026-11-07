TOPIC('fr', {
  id: "p3-ita-coniugazioni",
  title: "Les trois conjugaisons",
  intro: "Cantare, leggere, dormire : tous les verbes italiens finissent en <b>-are</b>, <b>-ere</b> ou <b>-ire</b>. Ce sont les <b>trois conjugaisons</b>, trois grandes « familles » de verbes 👨‍👩‍👧. Apprenons à les reconnaître et à conjuguer les verbes au <b>passé</b>, au <b>présent</b> et au <b>futur</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "L'infinitif : le nom du verbe",
      html: `<p>Quand tu cherches un verbe dans le dictionnaire, tu le trouves à l'<b>infinitif</b> : <i>cantare, leggere, dormire</i> (chanter, lire, dormir). L'infinitif est comme le « prénom » du verbe : il ne dit ni <b>qui</b> fait l'action ni <b>quand</b>.</p>
<p>Chaque verbe à l'infinitif a deux parties :</p>
<ul>
<li>le <b>radical</b>, qui porte le sens et ne change en général pas : <b>cant</b>-are, <b>legg</b>-ere, <b>dorm</b>-ire ;</li>
<li>la <b>terminaison</b> (<i>desinenza</i>), la partie finale qui change : cant-<b>are</b>, cant-<b>o</b>, cant-<b>erò</b>.</li>
</ul>
<p>C'est justement en regardant la terminaison de l'infinitif que nous comprenons à quelle <b>conjugaison</b> appartient le verbe.</p>`
    },
    {
      type: "svg",
      title: "Les trois familles de verbes",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="20" y="30" width="175" height="240" rx="18" fill="#fee2e2" stroke="#dc2626" stroke-width="4"/>
<rect x="212" y="30" width="175" height="240" rx="18" fill="#dcfce7" stroke="#16a34a" stroke-width="4"/>
<rect x="405" y="30" width="175" height="240" rx="18" fill="#dbeafe" stroke="#2563eb" stroke-width="4"/>
<text x="107" y="70" font-size="22" font-weight="bold" text-anchor="middle" fill="#991b1b">1re conjug.</text>
<text x="300" y="70" font-size="22" font-weight="bold" text-anchor="middle" fill="#166534">2e conjug.</text>
<text x="492" y="70" font-size="22" font-weight="bold" text-anchor="middle" fill="#1e40af">3e conjug.</text>
<text x="107" y="118" font-size="40" font-weight="bold" text-anchor="middle" fill="#dc2626">-ARE</text>
<text x="300" y="118" font-size="40" font-weight="bold" text-anchor="middle" fill="#16a34a">-ERE</text>
<text x="492" y="118" font-size="40" font-weight="bold" text-anchor="middle" fill="#2563eb">-IRE</text>
<g font-size="20" text-anchor="middle" fill="#1f2937">
<text x="107" y="160">cant-are 🎤</text><text x="107" y="192">gioc-are ⚽</text><text x="107" y="224">salt-are 🐸</text>
<text x="300" y="160">legg-ere 📖</text><text x="300" y="192">cred-ere 🤔</text><text x="300" y="224">corr-ere 🏃</text>
<text x="492" y="160">dorm-ire 😴</text><text x="492" y="192">part-ire 🚂</text><text x="492" y="224">fin-ire 🏁</text>
</g>
<text x="107" y="258" font-size="15" text-anchor="middle" fill="#7f1d1d">la plus nombreuse</text>
<text x="300" y="258" font-size="15" text-anchor="middle" fill="#14532d">beaucoup d'irréguliers</text>
<text x="492" y="258" font-size="15" text-anchor="middle" fill="#1e3a8a">certains en -isc-</text>
</svg>`,
      caption: "Radical + terminaison : la terminaison de l'infinitif nous dit la famille du verbe."
    },
    {
      type: "widget",
      title: "Jeu : dans quelle famille ?",
      widget: "classify",
      options: {
        groups: ["-ARE (1re)", "-ERE (2e)", "-IRE (3e)"],
        items: [
          ["🎨 disegnare", 0], ["🏊 nuotare", 0], ["🍝 mangiare", 0], ["👀 guardare", 0],
          ["✍️ scrivere", 1], ["👁️ vedere", 1], ["🏃 correre", 1], ["🙂 sorridere", 1],
          ["🎧 sentire", 2], ["🚪 aprire", 2], ["🧹 pulire", 2], ["🥣 servire", 2]
        ]
      },
      caption: "Regarde seulement la fin de l'infinitif et mets chaque verbe dans sa famille."
    },
    {
      type: "text",
      title: "Le présent : les terminaisons changent avec la personne",
      html: `<p>Le verbe change de terminaison selon <b>qui</b> fait l'action (la <b>personne</b>) :</p>
<table>
<tr><th>Personne</th><th>CANT-ARE</th><th>CRED-ERE</th><th>DORM-IRE</th></tr>
<tr><td>io (je)</td><td>cant<b>o</b></td><td>cred<b>o</b></td><td>dorm<b>o</b></td></tr>
<tr><td>tu</td><td>cant<b>i</b></td><td>cred<b>i</b></td><td>dorm<b>i</b></td></tr>
<tr><td>lui/lei (il/elle)</td><td>cant<b>a</b></td><td>cred<b>e</b></td><td>dorm<b>e</b></td></tr>
<tr><td>noi (nous)</td><td>cant<b>iamo</b></td><td>cred<b>iamo</b></td><td>dorm<b>iamo</b></td></tr>
<tr><td>voi (vous)</td><td>cant<b>ate</b></td><td>cred<b>ete</b></td><td>dorm<b>ite</b></td></tr>
<tr><td>loro (ils/elles)</td><td>cant<b>ano</b></td><td>cred<b>ono</b></td><td>dorm<b>ono</b></td></tr>
</table>
<p>Tu as remarqué ? Les terminaisons de <b>io</b> (-o), <b>tu</b> (-i) et <b>noi</b> (-iamo) sont les mêmes pour les trois familles ! À la personne <b>voi</b>, on voit la voyelle de la famille : cant<b>a</b>te, cred<b>e</b>te, dorm<b>i</b>te.</p>
<p><b>Attention :</b> beaucoup de verbes en -ire ajoutent <b>-isc-</b> à certaines personnes : fin<b>isc</b>o, fin<b>isc</b>i, fin<b>isc</b>e, finiamo, finite, fin<b>isc</b>ono. Ainsi font aussi capire (comprendre), pulire (nettoyer), colpire (frapper), preferire (préférer).</p>`
    },
    {
      type: "text",
      title: "Passé et futur",
      html: `<p>Le verbe change aussi pour dire <b>quand</b> l'action a lieu. Voici trois temps du mode indicatif, à la personne « io » :</p>
<table>
<tr><th>Temps</th><th>CANTARE</th><th>CREDERE</th><th>DORMIRE</th></tr>
<tr><td>⬅️ <b>Passato prossimo</b> (passé composé : action terminée)</td><td>ho cant<b>ato</b></td><td>ho cred<b>uto</b></td><td>ho dorm<b>ito</b></td></tr>
<tr><td>⬅️ <b>Imperfetto</b> (imparfait : habitude, description)</td><td>cant<b>avo</b></td><td>cred<b>evo</b></td><td>dorm<b>ivo</b></td></tr>
<tr><td>⏺️ <b>Presente</b> (présent)</td><td>cant<b>o</b></td><td>cred<b>o</b></td><td>dorm<b>o</b></td></tr>
<tr><td>➡️ <b>Futuro semplice</b> (futur simple)</td><td>cant<b>erò</b></td><td>cred<b>erò</b></td><td>dorm<b>irò</b></td></tr>
</table>
<ul>
<li>Le <b>passato prossimo</b> est un temps <b>composé</b> : auxiliaire (avere ou essere) + <b>participe passé</b> en -ato, -uto, -ito. Ex. : « sono partito », « ho cantato ».</li>
<li>Au <b>futur</b>, la première conjugaison change le <b>a</b> en <b>e</b> : cant<b>a</b>re → cant<b>e</b>rò (pas « cantarò » !).</li>
<li>Au futur, l'accent tombe sur la dernière syllabe : cante<b>rò</b>, cante<b>rà</b> : ne l'oublie pas !</li>
</ul>`
    },
    {
      type: "svg",
      title: "La flèche du temps",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fffbeb"/>
<line x1="40" y1="140" x2="540" y2="140" stroke="#78350f" stroke-width="6"/>
<polygon points="540,125 575,140 540,155" fill="#78350f"/>
<circle cx="120" cy="140" r="16" fill="#a855f7"/>
<circle cx="300" cy="140" r="20" fill="#16a34a"/>
<circle cx="480" cy="140" r="16" fill="#2563eb"/>
<text x="120" y="60" font-size="24" font-weight="bold" text-anchor="middle" fill="#7e22ce">PASSÉ</text>
<text x="300" y="60" font-size="24" font-weight="bold" text-anchor="middle" fill="#15803d">PRÉSENT</text>
<text x="480" y="60" font-size="24" font-weight="bold" text-anchor="middle" fill="#1d4ed8">FUTUR</text>
<text x="120" y="95" font-size="18" text-anchor="middle" fill="#1f2937">hier</text>
<text x="300" y="95" font-size="18" text-anchor="middle" fill="#1f2937">maintenant</text>
<text x="480" y="95" font-size="18" text-anchor="middle" fill="#1f2937">demain</text>
<text x="120" y="190" font-size="20" text-anchor="middle" fill="#1f2937">ho giocato</text>
<text x="120" y="218" font-size="20" text-anchor="middle" fill="#1f2937">giocavo</text>
<text x="300" y="190" font-size="20" text-anchor="middle" fill="#1f2937">gioco</text>
<text x="480" y="190" font-size="20" text-anchor="middle" fill="#1f2937">giocherò</text>
<text x="480" y="225" font-size="15" text-anchor="middle" fill="#92400e">(c + h pour le son dur)</text>
</svg>`,
      caption: "Le même verbe, giocare (jouer), change de forme selon le moment où l'action a lieu."
    },
    {
      type: "quiz",
      title: "Mini-quiz : familles et personnes",
      questions: [
        { type: "mc", q: "« Scrivere » (écrire) appartient à la…", options: ["1re conjugaison", "2e conjugaison", "3e conjugaison"], answer: 1, explain: "Il finit en -ere : deuxième conjugaison." },
        { type: "text", q: "Conjugue « parlare » au présent avec « noi ».", answer: ["parliamo", "noi parliamo"], explain: "Noi parl-iamo." },
        { type: "mc", q: "Quelle est la bonne forme du futur de « cantare » (io) ?", options: ["cantarò", "canterò", "cantirò"], answer: 1, explain: "À la 1re conjugaison, le -a- devient -e- : canterò." }
      ]
    },
    {
      type: "example",
      title: "Exemple pratique : le journal de Matteo",
      html: `<p><i>« Ieri <b>ho giocato</b> a calcio e <b>ho vinto</b>. Quando ero piccolo <b>dormivo</b> sempre dopo pranzo. Oggi <b>leggo</b> un fumetto. Domani <b>partirò</b> per la montagna e <b>camminerò</b> tanto. »</i> (Hier j'ai joué au foot et j'ai gagné. Quand j'étais petit, je dormais toujours après le déjeuner. Aujourd'hui je lis une bande dessinée. Demain je partirai à la montagne et je marcherai beaucoup.)</p>
<table>
<tr><th>Verbe</th><th>Infinitif</th><th>Conjugaison</th><th>Temps</th></tr>
<tr><td>ho giocato</td><td>giocare</td><td>1re</td><td>passato prossimo</td></tr>
<tr><td>ho vinto</td><td>vincere</td><td>2e</td><td>passato prossimo</td></tr>
<tr><td>dormivo</td><td>dormire</td><td>3e</td><td>imperfetto</td></tr>
<tr><td>leggo</td><td>leggere</td><td>2e</td><td>presente</td></tr>
<tr><td>partirò</td><td>partire</td><td>3e</td><td>futuro</td></tr>
<tr><td>camminerò</td><td>camminare</td><td>1re</td><td>futuro</td></tr>
</table>`
    },
    {
      type: "example",
      title: "Exemple pratique : trouver l'infinitif",
      html: `<p>Pour connaître la conjugaison d'un verbe conjugué, tu dois d'abord <b>revenir à l'infinitif</b>. Demande-toi : « Comment appelle-t-on le fait de faire cette action ? »</p>
<ul>
<li>« Noi <b>ridiamo</b> » → que faisons-nous ? <b>ridere</b> (rire) → 2e conjugaison.</li>
<li>« Voi <b>aprite</b> » → <b>aprire</b> (ouvrir) → 3e conjugaison.</li>
<li>« Loro <b>ballavano</b> » → <b>ballare</b> (danser) → 1re conjugaison.</li>
<li>« Tu <b>capirai</b> » → <b>capire</b> (comprendre) → 3e conjugaison.</li>
</ul>
<p>Astuce : essaie de dire « <b>Devo</b> … » (je dois…) devant : « Devo ridere », « Devo aprire », « Devo ballare ». Après « devo », le verbe est toujours à l'infinitif !</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Les nouveaux verbes vont tous en -are",
      html: `<p>Quand un nouveau verbe naît, en italien il finit presque toujours en <b>-are</b> : <i>cliccare, chattare, postare, zoomare, scannerizzare, googlare</i>. La première conjugaison est la plus grande famille (elle contient la plupart des verbes italiens) et aussi la plus régulière : c'est pour ça qu'elle accueille les nouveaux arrivants ! 📱</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? En latin, il y avait quatre familles",
      html: `<p>Le <b>latin</b>, la langue dont naît l'italien, avait <b>quatre</b> conjugaisons : <i>amāre, timēre, legĕre, audīre</i>. Deux d'entre elles (celle de <i>timēre</i>, avec l'accent sur le « e », et celle de <i>legĕre</i>, avec l'accent plus en arrière) se sont réunies dans notre 2e conjugaison. C'est pour ça qu'on dit te<b>mé</b>re mais <b>lèg</b>gere : deux accents différents dans la même famille !</p>`
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>1re conjugaison : <b>-are</b> · 2e : <b>-ere</b> · 3e : <b>-ire</b>.</li>
<li>Verbe = <b>radical</b> (sens) + <b>terminaison</b> (personne et temps).</li>
<li>Personnes : io, tu, lui/lei (singulier) · noi, voi, loro (pluriel).</li>
<li>Passato prossimo = auxiliaire + participe (-ato, -uto, -ito).</li>
<li>Futur : cant-<b>erò</b> (le -a- devient -e-), cred-<b>erò</b>, dorm-<b>irò</b>.</li>
<li>Essere et avere ont une conjugaison à eux : ils sont irréguliers.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les conjugaisons",
      intro: "Les tableaux ne rentrent pas dans ta tête ? Essaie avec une machine, un autre pays, des cartes ou un jeu d'association.",
      tabs: [
        {
          label: "⚙️ La machine à verbes",
          html: `<p>Imagine une machine avec deux molettes. La première molette choisit <b>qui</b> (io, tu, lui…), la seconde choisit <b>quand</b> (hier, aujourd'hui, demain). Tu mets le radical dedans et la machine colle la bonne terminaison !</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f1f5f9"/>
<rect x="30" y="100" width="120" height="60" rx="10" fill="#fde68a" stroke="#a16207" stroke-width="3"/>
<text x="90" y="138" font-size="24" font-weight="bold" text-anchor="middle" fill="#713f12">CANT-</text>
<path d="M155 130 L200 130" stroke="#334155" stroke-width="5"/>
<polygon points="200,120 218,130 200,140" fill="#334155"/>
<rect x="220" y="50" width="200" height="160" rx="20" fill="#94a3b8" stroke="#334155" stroke-width="4"/>
<circle cx="280" cy="110" r="38" fill="#f472b6" stroke="#9d174d" stroke-width="4"/>
<circle cx="360" cy="150" r="38" fill="#60a5fa" stroke="#1e3a8a" stroke-width="4"/>
<text x="280" y="117" font-size="20" font-weight="bold" text-anchor="middle" fill="#ffffff">QUI ?</text>
<text x="360" y="157" font-size="18" font-weight="bold" text-anchor="middle" fill="#ffffff">QUAND ?</text>
<text x="280" y="175" font-size="16" text-anchor="middle" fill="#1f2937">noi</text>
<text x="360" y="85" font-size="16" text-anchor="middle" fill="#1f2937">demain</text>
<path d="M425 130 L470 130" stroke="#334155" stroke-width="5"/>
<polygon points="470,120 488,130 470,140" fill="#334155"/>
<rect x="490" y="100" width="100" height="60" rx="10" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<text x="540" y="128" font-size="17" font-weight="bold" text-anchor="middle" fill="#14532d">cant-</text>
<text x="540" y="150" font-size="17" font-weight="bold" text-anchor="middle" fill="#14532d">eremo</text>
</svg>`
        },
        {
          label: "🇬🇧 En anglais, c'est plus facile ?",
          html: `<p>En <b>anglais</b>, les verbes changent très peu : c'est pour ça que les Anglais doivent <b>toujours</b> dire le sujet.</p>
<table>
<tr><th>Italien</th><th>Anglais</th></tr>
<tr><td>canto, canti, canta</td><td>I sing, you sing, he sing<b>s</b></td></tr>
<tr><td>ho cantato</td><td>I sang (passé)</td></tr>
<tr><td>canterò</td><td>I <b>will</b> sing (futur avec « will »)</td></tr>
<tr><td>gioco → ho giocato</td><td>I play → I play<b>ed</b></td></tr>
</table>
<p>En italien, au contraire, la terminaison dit déjà qui fait l'action : « <b>Cantiamo</b> ! » veut forcément dire « nous chantons ». On peut même ne pas dire le sujet !</p>`
        },
        {
          label: "🎵 L'astuce de la voyelle",
          html: `<p>Chaque famille a sa <b>voyelle du cœur</b>, celle qui se trouve avant -re :</p>
<ul>
<li>cant-<b>A</b>-re → cant<b>a</b>te, cant<b>a</b>vo, cant<b>a</b>to</li>
<li>cred-<b>E</b>-re → cred<b>e</b>te, cred<b>e</b>vo (mais credu-to)</li>
<li>dorm-<b>I</b>-re → dorm<b>i</b>te, dorm<b>i</b>vo, dorm<b>i</b>to</li>
</ul>
<p>À la personne <b>voi</b> et à l'<b>imparfait</b>, la voyelle du cœur se voit toujours : si tu t'en souviens, tu te trompes beaucoup moins !</p>`
        },
        {
          label: "🃏 Cartes des verbes",
          html: `<p>Devant, il y a un verbe conjugué. Essaie de dire l'infinitif, la conjugaison et le temps, puis retourne la carte.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "nuoteremo", back: "nuotare · 1re · futur · noi" },
              { front: "hai letto", back: "leggere · 2e · passé composé · tu" },
              { front: "sentivano", back: "sentire · 3e · imparfait · loro" },
              { front: "corre", back: "correre · 2e · présent · lui/lei" },
              { front: "finisco", back: "finire · 3e (avec -isc-) · présent · io" },
              { front: "giocavate", back: "giocare · 1re · imparfait · voi" }
            ]
          }
        },
        {
          label: "🔗 Associe personne et terminaison",
          html: `<p>Verbe « dormire » au présent : relie chaque personne à sa forme.</p>`,
          widget: "match",
          options: { pairs: [["io", "dormo"], ["tu", "dormi"], ["lui", "dorme"], ["noi", "dormiamo"], ["voi", "dormite"], ["loro", "dormono"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte des conjugaisons : touche un nœud et découvre pourquoi",
      nodes: [
        { id: "verbo", label: "Verbe", x: 50, y: 6, color: "#2563eb", html: "Mot qui indique une action ou un état.", why: "Sans verbe, il n'y a pas de phrase : c'est le « moteur » qui dit ce qui se passe. Déjà les grammairiens grecs l'appelaient <i>rhêma</i>, « ce que l'on dit » du sujet." },
        { id: "infinito", label: "Infinitif", x: 50, y: 26, color: "#0ea5e9", html: "La forme « de base » du verbe : cantare, leggere, dormire.", why: "On l'appelle infinitif parce qu'il est « non défini » : il ne dit ni qui fait l'action ni quand. C'est pour ça que les dictionnaires classent les verbes à l'infinitif." },
        { id: "are", label: "1re : -are", x: 18, y: 46, color: "#dc2626", html: "La famille la plus grande et la plus régulière : amare, giocare.", why: "Elle vient de la 1re conjugaison latine (<i>amāre</i>), déjà très régulière : c'est pour ça que les nouveaux verbes (chattare, cliccare) entrent ici." },
        { id: "ere", label: "2e : -ere", x: 50, y: 46, color: "#16a34a", html: "Credere, leggere, vedere : beaucoup de verbes irréguliers.", why: "Elle est née de la réunion de deux conjugaisons latines (<i>timēre</i> et <i>legĕre</i>). C'est pour ça qu'elle contient des verbes avec des accents différents et beaucoup d'irrégularités (letto, scritto, visto)." },
        { id: "ire", label: "3e : -ire", x: 82, y: 46, color: "#2563eb", html: "Dormire, partire, finire.", why: "Elle vient de la 4e conjugaison latine (<i>audīre</i>). L'ajout de <b>-isc-</b> (finisco) vient d'un suffixe latin qui indiquait une action qui commence ou se développe (<i>-esco</i>)." },
        { id: "desinenza", label: "Radical + terminaison", x: 22, y: 70, color: "#f59e0b", html: "Cant- (sens) + -iamo (qui et quand).", why: "L'italien, comme le latin, est une langue « flexionnelle » : elle met les informations à l'intérieur du mot, en changeant sa fin. Ainsi un seul mot (« cantiamo ») dit l'action, la personne, le nombre et le temps." },
        { id: "persone", label: "Les six personnes", x: 50, y: 92, color: "#ec4899", html: "Io, tu, lui/lei, noi, voi, loro.", why: "Il y a trois personnes (celui qui parle, celui qui écoute, celui dont on parle), chacune au singulier et au pluriel : 3 × 2 = 6 formes." },
        { id: "tempi", label: "Passé, présent, futur", x: 78, y: 70, color: "#a855f7", html: "Ho cantato / cantavo · canto · canterò.", why: "Le futur italien naît du latin parlé : « cantare habeo » (j'ai à chanter) → « canterò ». En effet, les terminaisons du futur (-ò, -ai, -à, -emo, -ete, -anno) ressemblent au verbe avere !" },
        { id: "irregolari", label: "Verbes irréguliers", x: 85, y: 90, color: "#64748b", html: "Essere, avere, andare, fare : ils ne suivent pas les règles.", why: "Ce sont les verbes les plus utilisés : à force d'être répétés au fil des siècles, ils se sont « usés » et transformés, comme une pièce de monnaie passée de main en main." }
      ],
      edges: [
        ["verbo", "infinito", "se cherche à l'"],
        ["infinito", "are", "finit en"],
        ["infinito", "ere", "finit en"],
        ["infinito", "ire", "finit en"],
        ["are", "desinenza", "se conjugue en changeant la"],
        ["desinenza", "persone", "dit la"],
        ["ire", "tempi", "et aussi le temps"],
        ["tempi", "irregolari", "exceptions :"],
        ["desinenza", "tempi", "dit le"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : les temps",
      questions: [
        { type: "mc", q: "« Partivamo » est…", options: ["présent", "imparfait", "futur"], answer: 1, explain: "La terminaison -ivamo indique l'imparfait (3e conjugaison)." },
        { type: "mc", q: "Le participe passé de « dormire » est…", options: ["dormato", "dormuto", "dormito"], answer: 2, explain: "3e conjugaison : -ito → dormito." },
        { type: "tf", q: "« Ho mangiato » est un temps composé.", answer: true, explain: "Il est formé de deux mots : l'auxiliaire « ho » et le participe « mangiato »." }
      ]
    }
  ],
  glossary: [
    { t: "Conjugaison", d: "Famille de verbes ayant la même terminaison à l'infinitif (-are, -ere, -ire) ; aussi l'ensemble de toutes les formes d'un verbe." },
    { t: "Infinitif", d: "La forme de base du verbe, celle du dictionnaire (cantare)." },
    { t: "Radical", d: "La partie du verbe qui porte le sens (cant-)." },
    { t: "Terminaison (desinenza)", d: "La partie finale du verbe qui change avec la personne et le temps (-iamo, -erò)." },
    { t: "Personne", d: "Celui qui accomplit l'action : io, tu, lui/lei, noi, voi, loro." },
    { t: "Temps simple", d: "Temps formé d'un seul mot (canto, cantavo, canterò)." },
    { t: "Temps composé", d: "Temps formé d'un auxiliaire + un participe (ho cantato)." },
    { t: "Participe passé", d: "Forme du verbe en -ato, -uto, -ito." },
    { t: "Imperfetto (imparfait)", d: "Temps du passé qui décrit des habitudes ou des situations (giocavo)." },
    { t: "Futuro semplice (futur simple)", d: "Temps qui indique une action qui aura lieu (giocherò)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "À quelle conjugaison appartient « capire » ?", options: ["1re", "2e", "3e"], answer: 2, explain: "Il finit en -ire : 3e conjugaison." },
      { type: "mc", q: "Quel est l'infinitif de « vedevamo » ?", options: ["vedare", "vedere", "vedire"], answer: 1, explain: "Vedere, 2e conjugaison." },
      { type: "text", q: "Conjugue « ballare » au futur avec « io ».", answer: ["ballero", "io ballero", "ballerò", "io ballerò"], explain: "Io ballerò : le -a- devient -e-." },
      { type: "tf", q: "Au présent, la terminaison de « noi » est -iamo pour les trois conjugaisons.", answer: true, explain: "Cantiamo, crediamo, dormiamo." },
      { type: "mc", q: "Dans « Loro aprono la porta », le verbe est…", options: ["au passato prossimo", "au présent", "au futur"], answer: 1, explain: "Aprono : présent de aprire, 3e personne du pluriel." },
      { type: "mc", q: "Quelle forme est fausse ?", options: ["voi correte", "voi dormite", "voi cantete"], answer: 2, explain: "Cantare est de la 1re conjugaison : voi cantate." },
      { type: "text", q: "Écris le participe passé de « credere ».", answer: ["creduto"], explain: "2e conjugaison : -uto → creduto." },
      { type: "mc", q: "Quel verbe prend -isc- au présent ?", options: ["dormire", "pulire", "partire"], answer: 1, explain: "Io pulisco, tu pulisci, lui pulisce." },
      { type: "order", q: "Mets dans l'ordre, du passé au futur.", items: ["ho saltato", "salto", "salterò"], explain: "Passato prossimo, présent, futur." },
      { type: "mc", q: "Dans « Tu leggevi un fumetto », le verbe est…", options: ["imparfait, 2e conjugaison", "présent, 2e conjugaison", "imparfait, 3e conjugaison"], answer: 0, explain: "Leggere (2e), terminaison -evi de l'imparfait." },
      { type: "tf", q: "Les nouveaux verbes comme « chattare » entrent en général dans la 3e conjugaison.", answer: false, explain: "Ils entrent dans la 1re conjugaison, en -are." },
      { type: "text", q: "Conjugue « sentire » au présent avec « voi ».", answer: ["sentite", "voi sentite"], explain: "Voi sent-ite." }
    ]
  }
});
