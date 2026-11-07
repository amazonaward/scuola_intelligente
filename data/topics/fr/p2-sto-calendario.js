TOPIC('fr', {
  id: "p2-sto-calendario",
  title: "Le calendrier",
  intro: "Quand est ton anniversaire ? 🎂 Combien de jours reste-t-il avant les vacances ? 🏖️ Le <b>calendrier</b> nous aide à compter le temps long : <b>jours</b>, <b>semaines</b>, <b>mois</b>, <b>saisons</b> et <b>années</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Le jour et la semaine",
      html: `<p>Un <b>jour</b> dure <b>24 heures</b> : il y a la partie de lumière (le jour) et la partie d'obscurité (la nuit). 🌞🌙</p>
<p><b>7 jours</b> forment une <b>semaine</b> :</p>
<p><b>lundi – mardi – mercredi – jeudi – vendredi – samedi – dimanche</b></p>
<p>Puis on recommence depuis le début, comme dans un cercle ! 🔄</p>
<ul>
<li><b>Hier</b> = le jour avant aujourd'hui.</li>
<li><b>Aujourd'hui</b> = le jour où nous sommes.</li>
<li><b>Demain</b> = le jour après aujourd'hui.</li>
</ul>`
    },
    {
      type: "svg",
      title: "La roue de la semaine",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#faf5ff"/>
<circle cx="300" cy="150" r="115" fill="none" stroke="#c4b5fd" stroke-width="10"/>
<g font-size="17" font-weight="bold" text-anchor="middle">
<circle cx="300" cy="35" r="34" fill="#fecaca"/><text x="300" y="41" fill="#7f1d1d">lundi</text>
<circle cx="390" cy="78" r="34" fill="#fed7aa"/><text x="390" y="84" fill="#7c2d12">mardi</text>
<circle cx="412" cy="175" r="34" fill="#fef08a"/><text x="412" y="181" fill="#713f12">mercredi</text>
<circle cx="350" cy="255" r="34" fill="#bbf7d0"/><text x="350" y="261" fill="#14532d">jeudi</text>
<circle cx="250" cy="255" r="34" fill="#bae6fd"/><text x="250" y="261" fill="#0c4a6e">vendredi</text>
<circle cx="188" cy="175" r="34" fill="#c7d2fe"/><text x="188" y="181" fill="#312e81">samedi</text>
<circle cx="210" cy="78" r="34" fill="#f5d0fe"/><text x="210" y="84" fill="#701a75">dimanche</text>
</g>
<text x="300" y="145" font-size="24" text-anchor="middle" fill="#5b21b6" font-weight="bold">7 jours</text>
<text x="300" y="172" font-size="20" text-anchor="middle" fill="#5b21b6">et on recommence ↻</text>
</svg>`,
      caption: "Après le dimanche, le lundi revient : la semaine est un cycle."
    },
    {
      type: "text",
      title: "Les 12 mois de l'année",
      html: `<p>Une <b>année</b> a <b>12 mois</b> :</p>
<p>janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre.</p>
<p>Les mois n'ont pas tous la même longueur. Une comptine nous aide :</p>
<p>🎵 <i>« Trente jours ont novembre, avril, juin et septembre. De vingt-huit il en est un, tous les autres ont trente et un. »</i></p>
<p>Le mois court est <b>février</b> : il a 28 jours, mais tous les 4 ans il en a <b>29</b> !</p>`
    },
    {
      type: "widget",
      title: "Combien de jours a le mois ?",
      widget: "classify",
      options: {
        groups: ["30 jours", "31 jours", "28 ou 29 jours"],
        items: [
          ["janvier", 1], ["février", 2], ["mars", 1], ["avril", 0],
          ["mai", 1], ["juin", 0], ["juillet", 1], ["août", 1],
          ["septembre", 0], ["octobre", 1], ["novembre", 0], ["décembre", 1]
        ]
      },
      caption: "Répète la comptine ou utilise l'astuce des poings (tu la trouveras plus bas) !"
    },
    {
      type: "quiz",
      title: "Mini-quiz : jours et mois",
      questions: [
        { type: "num", q: "Combien de jours y a-t-il dans une semaine ?", answer: 7, explain: "Lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche : 7 jours." },
        { type: "mc", q: "Si aujourd'hui on est mercredi, demain on sera…", options: ["mardi", "jeudi", "vendredi"], answer: 1, explain: "Après mercredi vient jeudi." },
        { type: "mc", q: "Quel mois a 28 ou 29 jours ?", options: ["Février", "Avril", "Août"], answer: 0, explain: "Février est le mois le plus court." }
      ]
    },
    {
      type: "text",
      title: "Les quatre saisons",
      html: `<p>L'année est aussi divisée en <b>4 saisons</b>, chacune d'environ 3 mois :</p>
<ul>
<li>🌸 <b>Printemps</b> : à partir du 21 mars environ. Les journées s'allongent, les fleurs éclosent.</li>
<li>☀️ <b>Été</b> : à partir du 21 juin environ. Il fait chaud, les journées sont les plus longues.</li>
<li>🍂 <b>Automne</b> : à partir du 23 septembre environ. Les feuilles tombent, on vendange le raisin.</li>
<li>❄️ <b>Hiver</b> : à partir du 21 décembre environ. Il fait froid, les journées sont les plus courtes.</li>
</ul>
<p>Les saisons existent parce que la Terre tourne autour du Soleil en étant <b>inclinée</b> : pendant la moitié de l'année, notre hémisphère reçoit les rayons plus droits (il fait chaud), pendant l'autre moitié plus penchés (il fait froid).</p>`
    },
    {
      type: "svg",
      title: "L'année dans un cercle",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#ffffff"/>
<path d="M300 160 L300 20 A140 140 0 0 1 440 160 Z" fill="#bbf7d0" stroke="#ffffff" stroke-width="4"/>
<path d="M300 160 L440 160 A140 140 0 0 1 300 300 Z" fill="#fde68a" stroke="#ffffff" stroke-width="4"/>
<path d="M300 160 L300 300 A140 140 0 0 1 160 160 Z" fill="#fdba74" stroke="#ffffff" stroke-width="4"/>
<path d="M300 160 L160 160 A140 140 0 0 1 300 20 Z" fill="#bfdbfe" stroke="#ffffff" stroke-width="4"/>
<text x="360" y="95" font-size="34" text-anchor="middle">🌸</text>
<text x="360" y="245" font-size="34" text-anchor="middle">☀️</text>
<text x="240" y="245" font-size="34" text-anchor="middle">🍂</text>
<text x="240" y="95" font-size="34" text-anchor="middle">❄️</text>
<text x="470" y="60" font-size="18" fill="#166534" font-weight="bold">printemps</text>
<text x="470" y="82" font-size="15" fill="#166534">mar · avr · mai</text>
<text x="470" y="260" font-size="18" fill="#a16207" font-weight="bold">été</text>
<text x="470" y="282" font-size="15" fill="#a16207">juin · juil · août</text>
<text x="20" y="260" font-size="18" fill="#c2410c" font-weight="bold">automne</text>
<text x="20" y="282" font-size="15" fill="#c2410c">sept · oct · nov</text>
<text x="20" y="60" font-size="18" fill="#1d4ed8" font-weight="bold">hiver</text>
<text x="20" y="82" font-size="15" fill="#1d4ed8">déc · janv · fév</text>
<circle cx="300" cy="160" r="30" fill="#ffffff" stroke="#64748b" stroke-width="3"/>
<text x="300" y="167" font-size="16" text-anchor="middle" fill="#334155" font-weight="bold">année</text>
</svg>`,
      caption: "Les 4 saisons se répètent chaque année, toujours dans le même ordre (les mois indiqués sont approximatifs : les saisons commencent vers le 21 du mois)."
    },
    {
      type: "remember",
      title: "Les nombres du calendrier",
      html: `<ul>
<li>1 <b>semaine</b> = 7 jours</li>
<li>1 <b>mois</b> = 28, 29, 30 ou 31 jours (environ 4 semaines)</li>
<li>1 <b>année</b> = 12 mois = <b>365 jours</b></li>
<li>tous les 4 ans, il y a l'année <b>bissextile</b>, avec <b>366 jours</b> (le 29 février). Les prochaines : <b>2028</b>, 2032…</li>
<li>1 <b>saison</b> = environ 3 mois ; 4 saisons dans une année.</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemple : combien de temps reste-t-il avant l'anniversaire ? 🎂",
      html: `<p>Aujourd'hui, c'est le <b>10 mars</b>. L'anniversaire de Sofia est le <b>17 mars</b>.</p>
<p>Je compte sur le calendrier : 11, 12, 13, 14, 15, 16, 17 → il reste <b>7 jours</b>, c'est-à-dire <b>une semaine</b> !</p>
<p>Si aujourd'hui on est mardi, l'anniversaire sera aussi un mardi (7 jours plus tard, on retombe sur le même jour de la semaine).</p>`
    },
    {
      type: "example",
      title: "Exemple : comment écrire la date ✏️",
      html: `<p>En France, la date s'écrit : <b>jour – mois – année</b>.</p>
<ul>
<li>En toutes lettres : <b>mardi 3 novembre 2026</b> ;</li>
<li>avec des chiffres : <b>3/11/2026</b> (11 parce que novembre est le <b>11e</b> mois).</li>
</ul>
<p>Sur le cahier, chaque matin, on écrit la date en haut : ainsi nous savons quand nous avons fait chaque travail.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Les noms des jours viennent du ciel",
      html: `<p>Les Romains donnèrent aux jours les noms des <b>astres</b> qu'ils voyaient bouger dans le ciel :</p>
<ul>
<li><b>lundi</b> = jour de la <b>Lune</b> 🌙 ; <b>mardi</b> = de <b>Mars</b> ; <b>mercredi</b> = de <b>Mercure</b> ; <b>jeudi</b> = de <b>Jupiter</b> ; <b>vendredi</b> = de <b>Vénus</b>.</li>
<li><b>samedi</b> vient de l'hébreu <i>shabbat</i>, le jour du repos ; <b>dimanche</b> du latin <i>dies Dominica</i>, le « jour du Seigneur ».</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Septembre était le septième mois",
      html: `<p>Le premier calendrier de Rome commençait en <b>mars</b>. C'est pour cela que <b>sept</b>embre était le 7e mois, <b>oct</b>obre le 8e, <b>nov</b>embre le 9e et <b>déc</b>embre le 10e !</p>
<p>Ensuite, l'année se mit à commencer en janvier et les noms restèrent « faux ». <b>Juillet</b> porte ce nom en l'honneur de <b>Jules César</b> et <b>août</b> en l'honneur de l'empereur <b>Auguste</b>.</p>`
    },
    {
      type: "3d",
      title: "Voyage dans le temps : l'histoire du calendrier",
      scene: "spacetime",
      caption: "La carte est la base, la hauteur est le temps : plus un événement est haut, plus il est récent. Touche les événements et suis les flèches de la cause à l'effet.",
      options: {
        lat: [20, 60],
        lon: [-10, 50],
        years: [-3000, 2000],
        places: [
          { lat: 30.05, lon: 31.23, label: "Égypte" },
          { lat: 32.54, lon: 44.42, label: "Babylone" },
          { lat: 41.9, lon: 12.5, label: "Rome" },
          { lat: 24.47, lon: 39.61, label: "Médine" },
          { lat: 55.75, lon: 37.6, label: "Moscou" }
        ],
        events: [
          { id: "egizi", lat: 29.9, lon: 31.2, year: -2800, label: "L'année égyptienne de 365 jours", html: "Les Égyptiens observent que les crues du Nil reviennent tous les 365 jours environ. Ils créent un calendrier de <b>12 mois de 30 jours</b> plus <b>5 jours de fête</b> : 365 en tout !" },
          { id: "settimana", lat: 32.54, lon: 44.42, year: -600, label: "La semaine de 7 jours", html: "Chez les Babyloniens et les Hébreux se répand la <b>semaine de 7 jours</b>. Elle vient peut-être de la Lune : chacune de ses phases (nouvelle, croissante, pleine, décroissante) dure environ 7 jours." },
          { id: "romolo", lat: 41.9, lon: 12.5, year: -753, label: "Le calendrier de Romulus", html: "Selon la légende, Romulus donne à Rome un calendrier de <b>10 mois</b> qui commence en <b>mars</b>. Plus tard, le roi Numa ajoute janvier et février." },
          { id: "cesare", lat: 41.89, lon: 12.49, year: -46, label: "Jules César réforme le calendrier", html: "Le calendrier romain était plein d'erreurs. <b>Jules César</b>, conseillé par l'astronome <b>Sosigène d'Alexandrie</b>, fait une année de <b>365 jours</b> avec un jour en plus <b>tous les 4 ans</b> (l'année bissextile). C'est le <b>calendrier julien</b>.", causes: ["egizi", "romolo"] },
          { id: "agosto", lat: 41.91, lon: 12.48, year: -8, label: "Naissance du mois d'août", html: "Le mois appelé <i>Sextilis</i> (le sixième) prend le nom d'<b>Augustus</b>, en l'honneur du premier empereur romain. Le mois de Jules César était déjà devenu <b>juillet</b>.", causes: ["cesare"] },
          { id: "dionigi", lat: 41.88, lon: 12.5, year: 525, label: "Les années depuis la naissance du Christ", html: "Le moine <b>Denys le Petit</b>, à Rome, propose de compter les années à partir de la naissance de Jésus. C'est pour cela qu'aujourd'hui nous disons « avant Jésus-Christ » (av. J.-C.) et « après Jésus-Christ » (apr. J.-C.).", causes: ["cesare"] },
          { id: "egira", lat: 24.47, lon: 39.61, year: 622, label: "Le calendrier islamique", html: "Le prophète <b>Mahomet</b> quitte La Mecque pour Médine (l'<b>Hégire</b>). Depuis cette année-là commence le calendrier islamique, fondé sur la <b>Lune</b> : 12 mois lunaires, environ <b>354 jours</b>.", causes: ["settimana"] },
          { id: "gregorio", lat: 41.9, lon: 12.45, year: 1582, label: "Le calendrier grégorien", html: "Le calendrier julien était un peu trop long : en 1600 ans, il avait accumulé <b>10 jours</b> de retard sur les saisons. Le pape <b>Grégoire XIII</b>, avec les calculs du médecin calabrais <b>Luigi Lilio</b>, décide qu'après le jeudi <b>4 octobre 1582</b> vienne le vendredi <b>15 octobre</b>. C'est le calendrier que nous utilisons aujourd'hui !", causes: ["cesare", "dionigi"] },
          { id: "russia", lat: 55.75, lon: 37.6, year: 1918, label: "La Russie change de calendrier", html: "La Russie utilise encore le calendrier julien : c'est pour cela que la « Révolution d'octobre » de 1917 a eu lieu pour nous en <b>novembre</b> ! En <b>1918</b>, la Russie passe elle aussi au calendrier grégorien, en sautant 13 jours.", causes: ["gregorio"] }
        ]
      }
    },
    {
      type: "decision",
      title: "Rome, 1582 : tu es le pape Grégoire XIII",
      html: `<p>Les astronomes t'apportent une mauvaise nouvelle : le calendrier de Jules César est <b>un tout petit peu trop long</b> (environ 11 minutes par an). Cela semble rien, mais après tant de siècles, le calendrier a <b>10 jours de retard</b> sur le Soleil !</p>
<p>Le vrai printemps commence le 11 mars au lieu du 21, et la fête de <b>Pâques</b>, qui se calcule à partir du printemps, risque de tomber le mauvais jour.</p>`,
      question: "Que décides-tu ?",
      options: [
        { label: "On laisse tout comme c'est : 10 jours, ce n'est pas un problème.", outcome: "Le retard continuerait à grandir : dans quelques milliers d'années, Noël tomberait en automne puis en été !" },
        { label: "On saute 10 jours une seule fois et on change la règle des années bissextiles.", outcome: "Pour une fois, le calendrier « saute » en avant et se remet d'accord avec le Soleil. Avec une règle nouvelle (supprimer 3 années bissextiles tous les 400 ans), l'erreur devient minuscule." },
        { label: "On ajoute un mois entier de plus de temps en temps.", outcome: "Le calendrier deviendrait désordonné : personne ne saurait plus dans quel mois il se trouve, et les contrats et les fêtes seraient tous à refaire." }
      ],
      answer: 1,
      explain: "Grégoire XIII choisit la deuxième voie avec la bulle <i>Inter gravissimas</i> : après le <b>jeudi 4 octobre 1582</b> vint tout de suite le <b>vendredi 15 octobre</b>. Nouvelle règle : les années qui finissent par « 00 » sont bissextiles seulement si elles se divisent par 400 (2000 oui, 1900 non). L'idée vint du médecin calabrais <b>Luigi Lilio</b>. L'Italie, l'Espagne et le Portugal changèrent tout de suite ; d'autres pays beaucoup plus tard : l'Angleterre en 1752 et la Russie en 1918. Le calendrier grégorien est aujourd'hui utilisé dans presque tout le monde. La France l'adopta dès décembre 1582."
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre le calendrier",
      intro: "Le calendrier peut s'apprendre avec les mains, avec la Lune et avec différents jeux.",
      tabs: [
        {
          label: "✊ L'astuce des poings",
          html: `<p>Une astuce utilisée par les enfants du <b>monde entier</b> : ferme les mains en poing et mets-les côte à côte. Compte les mois en touchant les <b>bosses</b> (les articulations) et les <b>creux</b> entre les bosses, de gauche à droite :</p>
<ul>
<li>sur la <b>bosse</b> → mois de <b>31</b> jours ;</li>
<li>dans le <b>creux</b> → mois de <b>30</b> jours (ou février).</li>
</ul>
<p>Janvier (bosse), février (creux), mars (bosse)… juillet (dernière bosse de la première main), août (première bosse de l'autre main) !</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fff7ed"/>
<path d="M30 140 Q30 60 70 60 Q90 40 110 60 Q130 40 150 60 Q170 40 190 60 Q210 40 230 60 Q270 60 270 140 Z" fill="#fcd9b6" stroke="#9a3412" stroke-width="3"/>
<path d="M320 140 Q320 60 360 60 Q380 40 400 60 Q420 40 440 60 Q460 40 480 60 Q500 40 520 60 Q560 60 560 140 Z" fill="#fcd9b6" stroke="#9a3412" stroke-width="3"/>
<g font-size="14" font-weight="bold" text-anchor="middle">
<text x="90" y="34" fill="#b91c1c">JAN</text><text x="110" y="95" fill="#1d4ed8">FÉV</text><text x="130" y="34" fill="#b91c1c">MAR</text><text x="150" y="95" fill="#1d4ed8">AVR</text>
<text x="170" y="34" fill="#b91c1c">MAI</text><text x="190" y="95" fill="#1d4ed8">JUIN</text><text x="210" y="34" fill="#b91c1c">JUIL</text>
<text x="380" y="34" fill="#b91c1c">AOÛT</text><text x="400" y="95" fill="#1d4ed8">SEPT</text><text x="420" y="34" fill="#b91c1c">OCT</text><text x="440" y="95" fill="#1d4ed8">NOV</text><text x="460" y="34" fill="#b91c1c">DÉC</text>
</g>
<text x="300" y="185" font-size="20" text-anchor="middle" fill="#b91c1c" font-weight="bold">rouge, sur la bosse = 31 jours</text>
<text x="300" y="212" font-size="20" text-anchor="middle" fill="#1d4ed8" font-weight="bold">bleu, dans le creux = 30 jours (février 28/29)</text>
</svg>`
        },
        {
          label: "🌙 Le calendrier de la Lune",
          html: `<p>Tout le monde ne compte pas les mois comme nous. Le calendrier <b>islamique</b> et le calendrier <b>chinois</b> suivent la <b>Lune</b> : un mois va d'une nouvelle Lune à la suivante, environ <b>29 jours et demi</b>.</p>
<p>12 mois lunaires font environ 354 jours, 11 de moins que notre année. C'est pour cela que le <b>Ramadan</b> tombe chaque année environ 11 jours plus tôt, et que le <b>Nouvel An chinois</b> change de date chaque année (entre le 21 janvier et le 20 février).</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🌑 Nouvelle Lune", back: "On ne la voit pas : un nouveau mois lunaire commence" },
              { front: "🌓 Premier quartier", back: "Après environ 7 jours : une demi-Lune" },
              { front: "🌕 Pleine Lune", back: "Après environ 15 jours : toute éclairée" },
              { front: "🌗 Dernier quartier", back: "Après environ 22 jours : de nouveau une demi-Lune" },
              { front: "📅 Mois lunaire", back: "Environ 29 jours et demi" }
            ]
          }
        },
        {
          label: "🌍 Les saisons à l'envers",
          html: `<p>Quand c'est l'<b>hiver</b> chez nous, en <b>Australie</b>, en Argentine et en Afrique du Sud, c'est l'<b>été</b> ! Pourquoi ? La Terre est inclinée : quand la moitié nord est tournée vers le Soleil, la moitié sud est tournée de l'autre côté, et inversement. En Australie, beaucoup de gens fêtent <b>Noël à la plage</b> 🎄🏖️. Fais tourner le globe et compare.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 41.9, lon: 12.5, label: "Italie : en décembre c'est l'hiver ❄️", color: "#2563eb" },
              { lat: -33.9, lon: 151.2, label: "Sydney : en décembre c'est l'été ☀️", color: "#f97316" },
              { lat: -34.6, lon: -58.4, label: "Buenos Aires : en décembre c'est l'été ☀️", color: "#f97316" },
              { lat: -33.9, lon: 18.4, label: "Le Cap : en décembre c'est l'été ☀️", color: "#f97316" },
              { lat: 40.7, lon: -74, label: "New York : en décembre c'est l'hiver ❄️", color: "#2563eb" }
            ]
          }
        },
        {
          label: "📜 La frise chronologique",
          html: `<p>Parcours sur la frise chronologique les étapes du calendrier, des Égyptiens à aujourd'hui.</p>`,
          widget: "timeline",
          options: {
            unit: "anni",
            events: [
              { year: -2800, label: "Année égyptienne de 365 jours", icon: "🌊" },
              { year: -46, label: "Calendrier de Jules César", icon: "🏛️" },
              { year: 525, label: "Les années depuis la naissance du Christ", icon: "✝️" },
              { year: 622, label: "Début du calendrier islamique", icon: "🌙" },
              { year: 1582, label: "Calendrier grégorien", icon: "📅" },
              { year: 2028, label: "Prochaine année bissextile", icon: "🐸" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte du calendrier : touche les nœuds et découvre pourquoi",
      nodes: [
        { id: "terra", label: "La Terre tourne", x: 50, y: 6, color: "#0ea5e9", html: "La Terre tourne sur elle-même et autour du Soleil.", why: "Tout le calendrier naît de trois mouvements du ciel : la Terre qui tourne sur elle-même (le jour), la Lune qui tourne autour de la Terre (le mois), la Terre qui tourne autour du Soleil (l'année)." },
        { id: "giorno", label: "Jour", x: 15, y: 30, color: "#eab308", html: "24 heures : un tour de la Terre sur elle-même.", why: "Quand notre côté de la Terre est tourné vers le Soleil, c'est le jour ; quand il est tourné de l'autre côté, c'est la nuit. C'est le rythme le plus simple à voir : c'est pour cela que c'est la première unité du calendrier." },
        { id: "settimana", label: "Semaine", x: 15, y: 60, color: "#a855f7", html: "7 jours, avec les noms des astres.", why: "La semaine de 7 jours vient du Moyen-Orient ancien (Babyloniens et Hébreux) et peut-être des phases de la Lune, qui durent chacune environ 7 jours. Les Romains l'adoptèrent en donnant aux jours les noms de la Lune, de Mars, de Mercure, de Jupiter, de Vénus." },
        { id: "mese", label: "Mois", x: 50, y: 35, color: "#64748b", html: "28–31 jours : à l'origine, un tour de la Lune.", why: "« Mois » et « Lune » sont apparentés : la Lune met environ 29 jours et demi pour redevenir identique. Notre calendrier a un peu allongé les mois pour en faire tenir 12 exactement dans l'année." },
        { id: "anno", label: "Année", x: 85, y: 30, color: "#16a34a", html: "365 jours (366 les années bissextiles) : un tour de la Terre autour du Soleil.", why: "Un tour autour du Soleil dure environ <b>365 jours et 6 heures</b>. Ces 6 heures, au bout de 4 ans, font un jour entier : voilà pourquoi tous les 4 ans il y a le 29 février." },
        { id: "stagioni", label: "Saisons", x: 85, y: 60, color: "#f97316", html: "Printemps, été, automne, hiver.", why: "L'axe de la Terre est incliné d'environ 23 degrés et demi. Pendant l'année, notre hémisphère reçoit les rayons du Soleil plus droits (été) ou plus obliques (hiver). Cela ne dépend pas de la distance au Soleil : en janvier, la Terre est même un peu plus proche !" },
        { id: "giuliano", label: "Calendrier de César", x: 35, y: 85, color: "#ef4444", html: "46 av. J.-C. : 365 jours et une année bissextile tous les 4 ans.", why: "<b>Jules César</b> copia l'idée des 365 jours sur les Égyptiens, avec l'aide de l'astronome <b>Sosigène d'Alexandrie</b>, et ajouta le jour bissextile." },
        { id: "gregoriano", label: "Calendrier grégorien", x: 70, y: 88, color: "#db2777", html: "1582 : le calendrier que nous utilisons aujourd'hui.", why: "La vraie année est plus courte de 11 minutes que 365 jours et 6 heures. Le Calabrais <b>Luigi Lilio</b> trouva la correction et le pape <b>Grégoire XIII</b> en fit une loi : on sauta 10 jours et on changea la règle des années bissextiles." }
      ],
      edges: [
        ["terra", "giorno", "sur elle-même :"],
        ["terra", "anno", "autour du Soleil :"],
        ["terra", "mese", "la Lune tourne :"],
        ["giorno", "settimana", "7 forment une"],
        ["mese", "anno", "12 forment une"],
        ["anno", "stagioni", "divisée en 4"],
        ["anno", "giuliano", "mesurée par le"],
        ["giuliano", "gregoriano", "corrigé par le"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : saisons, années et histoire",
      questions: [
        { type: "mc", q: "Quelle saison vient après l'été ?", options: ["Le printemps", "L'automne", "L'hiver"], answer: 1, explain: "Printemps → été → automne → hiver." },
        { type: "num", q: "Combien de jours a une année bissextile ?", answer: 366, explain: "Elle a un jour de plus : le 29 février." },
        { type: "mc", q: "Le mois de juillet porte le nom de…", options: ["Jules César", "Auguste", "Romulus"], answer: 0, explain: "Juillet vient de Jules (Iulius) César." }
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>1 semaine = <b>7 jours</b> ; 1 année = <b>12 mois</b> = <b>365 jours</b>.</li>
<li>« Trente jours ont novembre, avril, juin et septembre… »</li>
<li>Tous les 4 ans, il y a l'année <b>bissextile</b> (366 jours).</li>
<li>4 saisons : <b>printemps, été, automne, hiver</b>.</li>
<li>Nous utilisons le calendrier <b>grégorien</b> (1582).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Calendrier", d: "Système pour diviser et compter le temps en jours, semaines, mois et années." },
    { t: "Semaine", d: "Groupe de 7 jours." },
    { t: "Mois", d: "Chacune des 12 parties de l'année, de 28 à 31 jours." },
    { t: "Année", d: "365 jours : le temps que met la Terre pour tourner autour du Soleil." },
    { t: "Année bissextile", d: "Année de 366 jours, avec le 29 février ; elle revient tous les 4 ans." },
    { t: "Saison", d: "Chacune des 4 parties de l'année avec un climat différent." },
    { t: "Date", d: "L'indication du jour, du mois et de l'année." },
    { t: "av. J.-C. / apr. J.-C.", d: "Avant Jésus-Christ / après Jésus-Christ : avant ou après l'an 1." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Combien de mois y a-t-il dans une année ?", answer: 12, explain: "De janvier à décembre : 12 mois." },
      { type: "num", q: "Combien de jours a une année normale ?", answer: 365, explain: "Une année normale a 365 jours." },
      { type: "order", q: "Mets dans l'ordre les jours de la semaine.", items: ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"], explain: "La semaine commence le lundi." },
      { type: "order", q: "Mets dans l'ordre les saisons en partant du printemps.", items: ["printemps", "été", "automne", "hiver"], explain: "Les saisons se répètent toujours dans cet ordre." },
      { type: "mc", q: "Combien de jours a avril ?", options: ["30", "31", "28"], answer: 0, explain: "« Trente jours ont novembre, avril, juin et septembre »." },
      { type: "mc", q: "Si aujourd'hui on est vendredi, hier on était…", options: ["samedi", "jeudi", "dimanche"], answer: 1, explain: "Avant le vendredi vient le jeudi." },
      { type: "tf", q: "Août a 31 jours.", answer: true, explain: "Août tombe sur une bosse : 31 jours." },
      { type: "tf", q: "En Australie, quand c'est l'hiver chez nous, c'est l'été.", answer: true, explain: "L'Australie et l'Italie sont dans des hémisphères différents : les saisons sont inversées." },
      { type: "text", q: "Comment s'appelle l'année de 366 jours ?", answer: ["bissextile", "année bissextile", "l'année bissextile"], explain: "L'année bissextile, avec le 29 février." },
      { type: "mc", q: "Le jour « lundi » tire son nom de…", options: ["la Lune", "le Soleil", "un roi"], answer: 0, explain: "Lundi = jour de la Lune." },
      { type: "mc", q: "Qui a créé, en 1582, le calendrier que nous utilisons aujourd'hui ?", options: ["Jules César", "Le pape Grégoire XIII", "Galilée"], answer: 1, explain: "Le calendrier grégorien, par le pape Grégoire XIII." },
      { type: "num", q: "Aujourd'hui, c'est le 5 mai. Dans une semaine, quel jour de mai sera-t-on ?", answer: 12, explain: "5 + 7 = 12 : le 12 mai." }
    ]
  }
});
