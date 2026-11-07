TOPIC('fr', {
  id: "p3-sto-linea-tempo",
  title: "La frise chronologique",
  intro: `Les historiens placent les faits dans l'ordre sur une <b>frise chronologique</b>, comme des perles sur un fil. Apprenons ce que veulent dire <b>av. J.-C.</b> et <b>apr. J.-C.</b>, comment on compte les <b>décennies</b>, les <b>siècles</b> et les <b>millénaires</b>, et comment on les écrit avec les <b>chiffres romains</b>.`,
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Qu'est-ce que la frise chronologique ?",
      html: `<p>La <b>frise chronologique</b> est une ligne droite sur laquelle nous plaçons les faits dans l'ordre où ils se sont produits. Elle se lit <b>de gauche à droite</b> : à gauche se trouvent les faits les plus <b>anciens</b>, à droite les plus <b>récents</b>.</p>
<p>Tu peux faire la frise de ta vie : naissance, premiers pas, premier jour d'école, aujourd'hui… Chaque morceau de ligne représente la même durée (par exemple <b>1 carreau = 1 an</b>) : c'est l'<b>échelle</b>.</p>
<p>Les historiens font la même chose avec toute l'histoire de l'humanité, mais leurs carreaux valent 100 ou 1000 ans !</p>`
    },
    {
      type: "svg",
      title: "La frise de Giulia",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="lt" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1e293b"/></marker></defs>
<rect width="600" height="260" fill="#fff7ed"/>
<line x1="40" y1="150" x2="570" y2="150" stroke="#1e293b" stroke-width="5" marker-end="url(#lt)"/>
<g font-size="14" fill="#1e293b" text-anchor="middle">
<line x1="60" y1="140" x2="60" y2="160" stroke="#1e293b" stroke-width="3"/><text x="60" y="180">2017</text>
<line x1="125" y1="140" x2="125" y2="160" stroke="#1e293b" stroke-width="3"/><text x="125" y="180">2018</text>
<line x1="190" y1="140" x2="190" y2="160" stroke="#1e293b" stroke-width="3"/><text x="190" y="180">2019</text>
<line x1="255" y1="140" x2="255" y2="160" stroke="#1e293b" stroke-width="3"/><text x="255" y="180">2020</text>
<line x1="320" y1="140" x2="320" y2="160" stroke="#1e293b" stroke-width="3"/><text x="320" y="180">2021</text>
<line x1="385" y1="140" x2="385" y2="160" stroke="#1e293b" stroke-width="3"/><text x="385" y="180">2022</text>
<line x1="450" y1="140" x2="450" y2="160" stroke="#1e293b" stroke-width="3"/><text x="450" y="180">2023</text>
<line x1="515" y1="140" x2="515" y2="160" stroke="#1e293b" stroke-width="3"/><text x="515" y="180">2024</text>
</g>
<circle cx="60" cy="150" r="9" fill="#ec4899"/><text x="60" y="110" font-size="15" text-anchor="middle" fill="#be185d">👶 naissance</text>
<circle cx="125" cy="150" r="9" fill="#f97316"/><text x="125" y="80" font-size="15" text-anchor="middle" fill="#c2410c">🚶 premiers pas</text>
<circle cx="320" cy="150" r="9" fill="#22c55e"/><text x="320" y="110" font-size="15" text-anchor="middle" fill="#15803d">🎒 maternelle</text>
<circle cx="450" cy="150" r="9" fill="#3b82f6"/><text x="450" y="80" font-size="15" text-anchor="middle" fill="#1d4ed8">✏️ CP</text>
<text x="60" y="230" font-size="15" fill="#475569">◀ passé (plus ancien)</text>
<text x="560" y="230" font-size="15" fill="#475569" text-anchor="end">plus récent ▶</text>
</svg>`,
      caption: "Chaque repère est une année : la distance entre les repères est toujours la même. C'est l'échelle de la frise."
    },
    {
      type: "text",
      title: "Étape 1 : l'an 1 et la naissance du Christ",
      html: `<p>Pour compter les années, il faut un <b>point de départ</b>. En France et dans une grande partie du monde, on part de la <b>naissance de Jésus-Christ</b>.</p>
<ul>
<li>Les années <b>après</b> la naissance du Christ s'écrivent avec <b>apr. J.-C.</b> (« après Jésus-Christ »). On les compte vers l'avant : 1, 2, 3… jusqu'à aujourd'hui. En général, <b>apr. J.-C. ne s'écrit pas</b> : « 2025 » veut dire « 2025 apr. J.-C. ».</li>
<li>Les années <b>avant</b> s'écrivent avec <b>av. J.-C.</b> (« avant Jésus-Christ »). On les compte <b>à rebours</b> : plus le nombre est grand, plus l'année est <b>ancienne</b> !</li>
</ul>
<p>Ainsi, <b>3000 av. J.-C.</b> est plus ancien que <b>500 av. J.-C.</b>, alors que 1500 apr. J.-C. est plus récent que 500 apr. J.-C.</p>
<p>Attention : <b>l'an zéro n'existe pas</b> ! Après 1 av. J.-C. vient tout de suite 1 apr. J.-C.</p>`
    },
    {
      type: "svg",
      title: "av. J.-C. et apr. J.-C. : le miroir",
      svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#f0f9ff"/>
<rect x="20" y="105" width="280" height="30" fill="#fca5a5"/>
<rect x="300" y="105" width="280" height="30" fill="#86efac"/>
<line x1="300" y1="70" x2="300" y2="170" stroke="#7c3aed" stroke-width="6"/>
<text x="300" y="60" font-size="16" text-anchor="middle" fill="#6d28d9" font-weight="bold">✝ naissance du Christ</text>
<g font-size="15" text-anchor="middle" fill="#1e293b">
<text x="60" y="160">3000</text><text x="125" y="160">2000</text><text x="190" y="160">1000</text><text x="255" y="160">1</text>
<text x="345" y="160">1</text><text x="410" y="160">1000</text><text x="475" y="160">2000</text>
</g>
<text x="160" y="95" font-size="18" text-anchor="middle" fill="#991b1b" font-weight="bold">◀ av. J.-C. (à rebours)</text>
<text x="440" y="95" font-size="18" text-anchor="middle" fill="#166534" font-weight="bold">apr. J.-C. (vers l'avant) ▶</text>
<text x="300" y="210" font-size="15" text-anchor="middle" fill="#334155">Plus tu t'éloignes de la ligne violette, plus le nombre grandit</text>
</svg>`,
      caption: "Les années av. J.-C. sont comme un miroir des années apr. J.-C. : elles augmentent en allant vers la gauche."
    },
    {
      type: "widget",
      title: "Essaie sur la droite numérique",
      widget: "numberLine",
      options: { min: -10, max: 10, step: 1, marks: [-5, 3] },
      caption: "Imagine que les nombres à gauche de zéro sont les années av. J.-C. et ceux à droite les années apr. J.-C. (mais souviens-toi : dans le calendrier, il n'y a pas de zéro !). De 5 av. J.-C. à 3 apr. J.-C., il s'écoule 7 ans, pas 8, justement parce que l'an zéro manque."
    },
    {
      type: "quiz",
      title: "Mini-quiz : avant ou après ?",
      questions: [
        { type: "mc", q: "Quelle année est la plus ancienne ?", options: ["800 av. J.-C.", "200 av. J.-C.", "100 apr. J.-C."], answer: 0, explain: "Pour les années av. J.-C., le plus grand nombre est le plus éloigné dans le temps." },
        { type: "tf", q: "L'année 2010 est une année apr. J.-C.", answer: true, explain: "Quand rien n'est écrit, on comprend apr. J.-C." },
        { type: "tf", q: "Après l'année 1 av. J.-C. vient l'année 0.", answer: false, explain: "L'an zéro n'existe pas : après 1 av. J.-C. vient 1 apr. J.-C." }
      ]
    },
    {
      type: "text",
      title: "Étape 2 : décennies, siècles et millénaires",
      html: `<p>Pour parler de beaucoup d'années ensemble, nous utilisons des « mesures » du temps :</p>
<table>
<tr><td>📅 <b>Année</b></td><td>12 mois, 365 jours (366 si bissextile)</td></tr>
<tr><td>🔟 <b>Décennie</b></td><td>10 ans</td></tr>
<tr><td>💯 <b>Siècle</b></td><td>100 ans</td></tr>
<tr><td>🏛️ <b>Millénaire</b></td><td>1000 ans</td></tr>
<tr><td>🌍 <b>Ère</b></td><td>une période très longue (par exemple l'ère des dinosaures)</td></tr>
</table>
<p>Un millénaire = 10 siècles = 100 décennies = 1000 ans.</p>`
    },
    {
      type: "text",
      title: "Étape 3 : dans quel siècle sommes-nous ?",
      html: `<p>Le <b>premier siècle</b> va de l'an <b>1</b> à l'an <b>100</b>. Le deuxième, de l'an 101 à l'an 200, et ainsi de suite. C'est pourquoi l'année 1492 est au <b>XVe siècle</b> (quinzième), et non au quatorzième !</p>
<p><b>L'astuce :</b> enlève les deux derniers chiffres et ajoute 1.</p>
<ul>
<li>1492 → 14 + 1 = <b>15e siècle</b> (XV)</li>
<li>2025 → 20 + 1 = <b>21e siècle</b> (XXI)</li>
<li>476 → 4 + 1 = <b>5e siècle</b> (V)</li>
</ul>
<p><b>Attention :</b> si l'année finit par <b>00</b>, n'ajoute rien : l'année 1900 est la dernière du <b>19e siècle</b> (XIX).</p>
<p>En Italie, les siècles à partir de 1200 ont aussi un surnom : le XVe siècle est le <b>Quattrocento</b> (les années 14..), le XXe siècle est le <b>Novecento</b> (les années 19..). En français, on dit simplement « le XVe siècle » ou « les années 1400 ».</p>`
    },
    {
      type: "text",
      title: "Les siècles s'écrivent en chiffres romains",
      html: `<p>Pour les siècles, on utilise les <b>chiffres romains</b>, inventés par les anciens Romains :</p>
<table>
<tr><td><b>I</b> = 1</td><td><b>V</b> = 5</td><td><b>X</b> = 10</td><td><b>L</b> = 50</td><td><b>C</b> = 100</td><td><b>D</b> = 500</td><td><b>M</b> = 1000</td></tr>
</table>
<ul>
<li>Un symbole placé <b>après</b> un plus grand s'<b>ajoute</b> : VI = 5 + 1 = 6 ; XV = 10 + 5 = 15.</li>
<li>Un symbole placé <b>avant</b> un plus grand se <b>retranche</b> : IV = 5 − 1 = 4 ; IX = 10 − 1 = 9 ; XIX = 10 + 9 = 19.</li>
<li>Un même symbole se répète au maximum <b>3 fois</b> : III = 3, XXX = 30.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Associe le siècle au chiffre romain",
      widget: "match",
      options: {
        pairs: [
          ["5e siècle", "V"],
          ["4e siècle", "IV"],
          ["9e siècle", "IX"],
          ["15e siècle", "XV"],
          ["19e siècle", "XIX"],
          ["21e siècle", "XXI"]
        ]
      },
      caption: "Souviens-toi : un petit symbole placé avant un grand se retranche."
    },
    {
      type: "widget",
      title: "La grande frise chronologique de l'histoire",
      widget: "timeline",
      options: {
        unit: "ans",
        events: [
          { year: -3200, label: "Naissance de l'écriture (fin de la Préhistoire)", icon: "✍️" },
          { year: -2560, label: "Pyramide de Khéops", icon: "🔺" },
          { year: -776, label: "Premiers Jeux olympiques en Grèce", icon: "🏅" },
          { year: -753, label: "Fondation de Rome (selon la légende)", icon: "🐺" },
          { year: 1, label: "Début de l'ère chrétienne (an 1 apr. J.-C.)", icon: "✝️" },
          { year: 476, label: "Fin de l'Empire romain d'Occident", icon: "🏛️" },
          { year: 1492, label: "Colomb arrive en Amérique", icon: "⛵" },
          { year: 1861, label: "Naissance du Royaume d'Italie", icon: "🇮🇹" },
          { year: 1969, label: "Premier homme sur la Lune", icon: "🌕" }
        ]
      },
      caption: "Fais défiler la frise : la Préhistoire s'arrête quand naît l'écriture, il y a environ 5200 ans."
    },
    {
      type: "example",
      title: "Exemple pratique : combien d'années se sont écoulées ?",
      html: `<p><b>Entre deux années apr. J.-C. :</b> fais une <b>soustraction</b>. Colomb est arrivé en Amérique en 1492. Jusqu'en 2025, il s'est écoulé 2025 − 1492 = <b>533 ans</b>.</p>
<p><b>Entre deux années av. J.-C. :</b> fais encore une <b>soustraction</b> (le plus grand moins le plus petit). De la pyramide de Khéops (2560 av. J.-C.) à la fondation de Rome (753 av. J.-C.) : 2560 − 753 = <b>1807 ans</b>.</p>
<p><b>Entre une année av. J.-C. et une année apr. J.-C. :</b> fais l'<b>addition</b> et enlève 1 (parce que l'an zéro manque). De la fondation de Rome (753 av. J.-C.) à la fin de l'Empire d'Occident (476 apr. J.-C.) : 753 + 476 − 1 = <b>1228 ans</b>.</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : les dates de ta famille",
      html: `<p>Demande à tes grands-parents en quelle année ils sont nés. Si ton grand-père est né en <b>1955</b> :</p>
<ul>
<li>il est né au <b>XXe siècle</b> (19 + 1 = 20) ;</li>
<li>dans les <b>années cinquante</b> (la décennie 1950–1959) ;</li>
<li>au <b>IIe millénaire</b> apr. J.-C. (les années de 1001 à 2000).</li>
</ul>
<p>Toi, en revanche, tu es né au <b>XXIe siècle</b> et au <b>IIIe millénaire</b> ! Essaie de mettre toute la famille sur la même frise.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Celui qui a inventé « av. J.-C. » et « apr. J.-C. » s'est trompé dans ses calculs !",
      html: `<p>La façon de compter les années à partir de la naissance du Christ a été proposée en <b>525</b> par un moine, <b>Denys le Petit</b>. Mais il a fait une petite erreur de calcul : aujourd'hui, les historiens pensent que Jésus est né quelques années plus tôt, entre <b>7 et 4 av. J.-C.</b> ! Mais le système était déjà utilisé par tout le monde et plus personne ne l'a changé.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Le nouveau millénaire a commencé en 2001 !",
      html: `<p>Le 31 décembre 1999, le monde entier a fêté l'arrivée de l'an 2000 comme début du nouveau millénaire. Mais les mathématiciens ont protesté : comme l'an zéro n'existe pas, le premier millénaire va de 1 à 1000, le deuxième de 1001 à 2000… et le <b>troisième millénaire</b> commence le <b>1er janvier 2001</b> !</p>`
    },
    {
      type: "3d",
      title: "La carte 3D espace-temps : l'histoire dans le monde",
      scene: "spacetime",
      caption: "La base est la carte, la hauteur est le temps : plus un événement est haut, plus il est récent. Utilise le curseur du temps pour voir l'histoire qui « grandit ». Touche un événement : les flèches relient les causes aux effets.",
      options: {
        lat: [-10, 62],
        lon: [-90, 125],
        years: [-3500, 2000],
        places: [
          { lat: 41.9, lon: 12.5, label: "Rome" },
          { lat: 30.0, lon: 31.2, label: "Égypte" },
          { lat: 32.5, lon: 44.4, label: "Mésopotamie" },
          { lat: 37.9, lon: 23.7, label: "Grèce" },
          { lat: 35.0, lon: 110.0, label: "Chine" },
          { lat: 25.0, lon: -77.0, label: "Amériques" }
        ],
        events: [
          { id: "scrittura", lat: 31.3, lon: 45.6, year: -3200, label: "Naissance de l'écriture", html: "En <b>Mésopotamie</b>, dans la ville d'Uruk, on commence à graver des signes sur des tablettes d'argile pour compter le blé et le bétail. Avec l'écriture, la <b>Préhistoire</b> se termine et l'<b>Histoire</b> commence." },
          { id: "piramidi", lat: 29.98, lon: 31.13, year: -2560, label: "Pyramide de Khéops", html: "En Égypte, on construit la Grande Pyramide. Les Égyptiens avaient déjà un calendrier de <b>365 jours</b> pour prévoir les crues du Nil.", causes: ["scrittura"] },
          { id: "olimpiadi", lat: 37.64, lon: 21.63, year: -776, label: "Premiers Jeux olympiques", html: "En Grèce, à Olympie, ont lieu les premiers jeux olympiques enregistrés. Les Grecs comptaient les années par groupes de 4, les <b>Olympiades</b> : dire « la 2e année de la 10e Olympiade » revenait à donner une date.", causes: ["scrittura"] },
          { id: "roma", lat: 41.89, lon: 12.49, year: -753, label: "Fondation de Rome", html: "Selon la légende, Romulus fonde Rome le <b>21 avril 753 av. J.-C.</b>. Les Romains comptaient les années « <b>ab Urbe condita</b> », c'est-à-dire depuis la fondation de la ville.", causes: ["olimpiadi"] },
          { id: "giuliano", lat: 41.9, lon: 12.48, year: -46, label: "Calendrier de Jules César", html: "<b>Jules César</b> réforme le calendrier romain : une année de 365 jours avec un jour de plus tous les 4 ans (l'année <b>bissextile</b>). C'est le <b>calendrier julien</b>.", causes: ["roma", "piramidi"] },
          { id: "dionigi", lat: 41.91, lon: 12.46, year: 525, label: "Denys compte depuis le Christ", html: "À Rome, le moine <b>Denys le Petit</b> propose de compter les années à partir de la naissance de Jésus (<i>Anno Domini</i>). Le système se diffusera lentement en Europe au cours des siècles suivants.", causes: ["giuliano"] },
          { id: "egira", lat: 24.47, lon: 39.61, year: 622, label: "L'Hégire", html: "Le prophète <b>Mahomet</b> quitte La Mecque pour Médine : c'est l'<b>Hégire</b>. À partir de cette année, les musulmans comptent les années du calendrier islamique, qui suit la Lune." },
          { id: "colombo", lat: 24.0, lon: -74.5, year: 1492, label: "Colomb en Amérique", html: "Christophe Colomb arrive en Amérique : pour beaucoup d'historiens, c'est ici que se termine le <b>Moyen Âge</b> et que commencent les <b>Temps modernes</b>." },
          { id: "gregoriano", lat: 41.9, lon: 12.45, year: 1582, label: "Calendrier grégorien", html: "Le calendrier julien était un peu trop long et s'était « décalé » de 10 jours. Le pape <b>Grégoire XIII</b> le corrige : après le 4 octobre 1582 vient tout de suite le <b>15 octobre</b> ! C'est le calendrier que nous utilisons aujourd'hui dans presque tout le monde.", causes: ["giuliano", "dionigi"] },
          { id: "luna", lat: 28.6, lon: -80.6, year: 1969, label: "Premier homme sur la Lune", html: "Le 20 juillet 1969, la mission <b>Apollo 11</b>, partie de Floride, amène Neil Armstrong et Buzz Aldrin sur la Lune. Une date que tout le monde écrit de la même façon grâce au calendrier grégorien.", causes: ["gregoriano"] }
        ]
      }
    },
    {
      type: "decision",
      title: "Année 525 : à partir d'où commençons-nous à compter ?",
      html: `<p>Tu es un moine expert en calculs et tu travailles à <b>Rome</b>. Le pape te demande de préparer les tables avec les dates de Pâques pour les années à venir.</p>
<p>Mais il y a un problème : chacun compte les années à sa façon. Les tables que tu reçois comptent à partir du règne de l'empereur <b>Dioclétien</b>, qui avait persécuté les chrétiens. D'autres comptent à partir de la <b>fondation de Rome</b>, les Grecs à partir des <b>Olympiades</b>…</p>`,
      question: "Quel point de départ choisis-tu ?",
      options: [
        { label: "Je continue à compter à partir du règne de Dioclétien : tout le monde l'utilise déjà dans ces tables.", outcome: "Ce serait le choix le plus commode, mais pour les chrétiens, il était pénible de se souvenir chaque année d'un persécuteur." },
        { label: "Je compte à partir de la fondation de Rome (ab Urbe condita).", outcome: "C'était une date célèbre, mais liée seulement à une ville et à une légende ; et l'Empire romain d'Occident n'existait plus depuis 476." },
        { label: "Je compte à partir de la naissance de Jésus-Christ.", outcome: "Un point de départ important pour tous les chrétiens d'Europe, sans rappeler un persécuteur. Mais il fallait calculer quand Jésus était né, et ce n'était pas facile." }
      ],
      answer: 2,
      explain: "<b>Denys le Petit</b> choisit de compter les années « <i>ab incarnatione Domini</i> », depuis la naissance du Christ. Son système se répandit peu à peu : le moine anglais <b>Bède</b> l'utilisa en 731 dans son histoire de l'Angleterre, puis l'empire de Charlemagne. Les années « avant Jésus-Christ », en revanche, furent utilisées bien plus tard. Denys se trompa pourtant de quelques années, et en Europe on ne connaissait pas encore le <b>zéro</b> (il arriva d'Inde par les Arabes et fut diffusé par Fibonacci en 1202) : c'est pourquoi l'an zéro n'existe pas."
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre la frise chronologique",
      intro: "Le temps ne se voit pas et ne se touche pas : voici d'autres façons de le « voir ».",
      tabs: [
        {
          label: "🌏 Calendriers d'autres pays",
          html: `<p>Tout le monde n'a pas compté les années comme nous ! Voici quelques exemples :</p>
<ul>
<li>🕌 <b>Calendrier islamique</b> : il compte à partir de l'<b>Hégire</b> (622 apr. J.-C.) et suit la Lune, donc l'année est plus courte (354 ou 355 jours).</li>
<li>✡️ <b>Calendrier hébraïque</b> : il compte à partir de la création du monde selon la tradition, fixée à <b>3761 av. J.-C.</b> : c'est pourquoi son année porte un numéro bien plus élevé que le nôtre.</li>
<li>🇯🇵 <b>Japon</b> : en plus de notre calendrier, il utilise les <b>ères</b> des empereurs. Depuis 2019, c'est l'ère <b>Reiwa</b> : 2025 est « Reiwa 7 ».</li>
<li>🇹🇭 <b>Thaïlande</b> : elle compte à partir de la mort du Bouddha et ajoute <b>543</b> à nos années : 2025 est 2568.</li>
<li>🇨🇳 <b>Chine</b> : le Nouvel An chinois change de date chaque année et chaque année est liée à un animal (rat, bœuf, tigre…).</li>
</ul>`
        },
        {
          label: "📏 Le mètre du temps",
          html: `<p>Prends un mètre de couturière long de <b>150 cm</b> et fais comme si chaque centimètre valait <b>100 ans</b> (un siècle) :</p>
<ul>
<li>le mètre entier = 15 000 ans, c'est-à-dire du Paléolithique à aujourd'hui ;</li>
<li>l'écriture naît à environ <b>52 cm</b> de la fin ;</li>
<li>Rome est fondée à environ <b>28 cm</b> de la fin ;</li>
<li>Colomb est à environ <b>5 cm</b> de la fin ;</li>
<li>toute ta vie (8 ans) tient dans <b>moins d'un millimètre</b> !</li>
</ul>
<p>Pour toucher du doigt la longueur de l'histoire, on peut faire la même chose avec un <b>rouleau de papier toilette</b>, une feuille pour chaque siècle.</p>`
        },
        {
          label: "🧊 Les siècles en cubes",
          html: `<p>Construis les années avec des cubes : une <b>plaque</b> de 100 cubes est un <b>siècle</b>, une <b>barre</b> de 10 est une <b>décennie</b>, un <b>cube</b> est une année. Déplace le curseur et essaie avec 476 ou 1492 : combien y a-t-il de plaques (siècles complets) ? Le siècle où tombe l'année est celui d'<b>après</b> : avec 14 plaques et un peu plus, tu es au 15e siècle !</p>`,
          scene: "blocks",
          options: { mode: "base10", value: 476 }
        },
        {
          label: "🎵 La comptine",
          html: `<p>Une comptine pour retenir les règles :</p>
<p style="font-size:1.15em"><i>Avant Jésus-Christ, je compte à l'envers :<br>plus le nombre est grand, plus c'est loin dans l'univers.<br>Après Jésus-Christ, je compte en avançant,<br>et les années grandissent en s'additionnant.<br>Pour le siècle, l'astuce est de roi :<br>retire deux chiffres, ajoute un, et voilà !</i></p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte : pourquoi mesurons-nous le temps ainsi ?",
      nodes: [
        { id: "cielo", label: "☀️🌙 Le ciel", x: 50, y: 6, color: "#f59e0b", html: "Le jour, le mois et l'année viennent du mouvement de la Terre, de la Lune et du Soleil.", why: "Le jour est une rotation de la Terre ; le mois vient des phases de la Lune (environ 29 jours et demi) ; l'année est un tour complet de la Terre autour du Soleil : environ <b>365 jours et 6 heures</b>." },
        { id: "anno", label: "📅 L'année", x: 20, y: 25, color: "#ef4444", html: "365 jours, 366 les années bissextiles.", why: "Ces 6 heures en plus chaque année font, au bout de 4 ans, un jour entier : voilà pourquoi tous les 4 ans il y a le 29 février. L'idée fut mise en pratique par Jules César en 46 av. J.-C. avec l'aide de l'astronome Sosigène d'Alexandrie." },
        { id: "decimale", label: "🔟 Compter par 10", x: 80, y: 25, color: "#3b82f6", html: "Décennies, siècles et millénaires sont des groupes de 10, 100 et 1000 ans.", why: "Nous comptons par groupes de dix parce que nous avons 10 doigts ! Notre système de nombres, avec les chiffres de 0 à 9, est né en Inde et est arrivé en Europe grâce aux Arabes." },
        { id: "zero", label: "Départ : an 1", x: 50, y: 42, color: "#7c3aed", html: "Les années se comptent depuis la naissance du Christ : av. J.-C. et apr. J.-C.", why: "Denys le Petit l'a proposé en 525. Il a choisi l'an 1, parce qu'en Europe le zéro n'était pas encore utilisé : c'est pourquoi on passe de 1 av. J.-C. à 1 apr. J.-C." },
        { id: "ac", label: "av. J.-C.", x: 20, y: 62, color: "#dc2626", html: "Années avant le Christ, comptées à rebours.", why: "Plus on s'éloigne de l'an 1, plus le nombre grandit, comme les températures sous zéro sur le thermomètre : −10 °C est plus froid que −2 °C." },
        { id: "dc", label: "apr. J.-C.", x: 80, y: 62, color: "#16a34a", html: "Années après le Christ, comptées vers l'avant.", why: "Ce sont les années que nous utilisons tous les jours ; c'est pourquoi « apr. J.-C. » ne s'écrit en général pas." },
        { id: "secolo", label: "Siècles en chiffres romains", x: 50, y: 78, color: "#0ea5e9", html: "Le 1er siècle va de 1 à 100 ; le XXIe de 2001 à 2100.", why: "On part de l'an 1 et non de 0, donc chaque siècle finit par une année « ronde » (100, 200… 2000). Les chiffres romains sont utilisés par tradition, parce que le latin a été la langue de la culture en Europe pendant des siècles." },
        { id: "periodi", label: "Préhistoire et Histoire", x: 50, y: 95, color: "#92400e", html: "Les grandes périodes : Préhistoire, Antiquité, Moyen Âge, Temps modernes, Époque contemporaine.", why: "Les historiens ont choisi quelques dates importantes comme « frontières » : l'écriture (environ 3200 av. J.-C.), la fin de l'Empire romain d'Occident (476), la découverte de l'Amérique (1492), la Révolution française (1789)." }
      ],
      edges: [
        ["cielo", "anno", "donne la mesure de l'"],
        ["cielo", "decimale", "mesuré par groupes"],
        ["anno", "zero", "comptés depuis un point de"],
        ["decimale", "secolo", "groupes de 100"],
        ["zero", "ac", "avant"],
        ["zero", "dc", "après"],
        ["dc", "secolo", "se regroupent en"],
        ["secolo", "periodi", "forment les grandes"]
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>La <b>frise chronologique</b> se lit de gauche (plus ancien) à droite (plus récent).</li>
<li><b>av. J.-C.</b> = avant Jésus-Christ, on compte à rebours ; <b>apr. J.-C.</b> = après Jésus-Christ, on compte vers l'avant. L'an zéro n'existe pas.</li>
<li><b>Décennie</b> = 10 ans ; <b>siècle</b> = 100 ans ; <b>millénaire</b> = 1000 ans.</li>
<li>Pour trouver le siècle : enlève les deux derniers chiffres et ajoute 1 (si l'année ne finit pas par 00).</li>
<li>Les siècles s'écrivent en <b>chiffres romains</b> : XV, XX, XXI…</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : siècles et chiffres romains",
      questions: [
        { type: "mc", q: "Dans quel siècle se trouve l'année 1861 ?", options: ["XVIII", "XIX", "XX"], answer: 1, explain: "18 + 1 = 19, donc XIXe siècle." },
        { type: "num", q: "Combien d'années y a-t-il dans 3 siècles ?", answer: 300, tol: 0, unit: "ans", explain: "1 siècle = 100 ans, donc 3 siècles = 300 ans." },
        { type: "text", q: "Écris en chiffres romains le nombre 9.", answer: ["ix"], explain: "IX = 10 − 1 = 9." }
      ]
    }
  ],
  glossary: [
    { t: "Frise chronologique", d: "Ligne sur laquelle on place les faits dans l'ordre, du plus ancien au plus récent." },
    { t: "av. J.-C.", d: "Avant Jésus-Christ : années avant la naissance du Christ, comptées à rebours." },
    { t: "apr. J.-C.", d: "Après Jésus-Christ : années après la naissance du Christ, comptées vers l'avant." },
    { t: "Décennie", d: "Période de 10 ans." },
    { t: "Siècle", d: "Période de 100 ans." },
    { t: "Millénaire", d: "Période de 1000 ans." },
    { t: "Année bissextile", d: "Année de 366 jours, avec le 29 février ; elle revient tous les 4 ans (avec quelques exceptions)." },
    { t: "Chiffres romains", d: "Système de numération des anciens Romains avec les lettres I, V, X, L, C, D, M." },
    { t: "Préhistoire", d: "La période de la vie humaine avant l'invention de l'écriture." },
    { t: "Calendrier", d: "Système pour diviser et compter le temps en jours, mois et années." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Comment se lit la frise chronologique ?", options: ["De droite à gauche", "De gauche (plus ancien) à droite (plus récent)", "De haut en bas"], answer: 1, explain: "À gauche se trouvent les faits les plus anciens, à droite les plus récents." },
      { type: "mc", q: "Quelle année est la plus ancienne ?", options: ["1500 av. J.-C.", "300 av. J.-C.", "1500 apr. J.-C."], answer: 0, explain: "Pour les années av. J.-C., le plus grand nombre est le plus ancien." },
      { type: "num", q: "Combien d'années y a-t-il dans un millénaire ?", answer: 1000, tol: 0, unit: "ans", explain: "Un millénaire = 1000 ans = 10 siècles." },
      { type: "mc", q: "Dans quel siècle a eu lieu la découverte de l'Amérique (1492) ?", options: ["XIVe siècle", "XVe siècle", "XVIe siècle"], answer: 1, explain: "14 + 1 = 15 : XVe siècle." },
      { type: "tf", q: "L'année 1900 appartient au XIXe siècle.", answer: true, explain: "Les années qui finissent par 00 sont la dernière année du siècle : le XIXe va de 1801 à 1900." },
      { type: "text", q: "Écris en chiffres romains le siècle où nous vivons (21e).", answer: ["xxi"], explain: "XXI = 10 + 10 + 1 = 21." },
      { type: "num", q: "Colomb est arrivé en Amérique en 1492. Combien d'années plus tard, en 1969, l'homme est-il arrivé sur la Lune ?", answer: 477, tol: 0, unit: "ans", explain: "1969 − 1492 = 477 ans." },
      { type: "tf", q: "L'an zéro existe.", answer: false, explain: "Après 1 av. J.-C. vient tout de suite 1 apr. J.-C." },
      { type: "order", q: "Remets dans l'ordre du plus ancien au plus récent.", items: ["Naissance de l'écriture (3200 av. J.-C.)", "Fondation de Rome (753 av. J.-C.)", "Fin de l'Empire romain d'Occident (476)", "Arrivée de Colomb en Amérique (1492)"], explain: "D'abord les années av. J.-C. (du plus grand au plus petit), puis les années apr. J.-C. (du plus petit au plus grand)." },
      { type: "mc", q: "Combien y a-t-il de décennies dans un siècle ?", options: ["10", "100", "1000"], answer: 0, explain: "100 ans : 10 ans = 10 décennies." },
      { type: "mc", q: "Que veut dire « apr. J.-C. » ?", options: ["Après le Calendrier", "Après Jésus-Christ", "Après la Cinquième décennie"], answer: 1, explain: "apr. J.-C. signifie « après Jésus-Christ »." },
      { type: "mc", q: "Quel chiffre romain vaut 4 ?", options: ["IIII", "VI", "IV"], answer: 2, explain: "IV = 5 − 1 = 4 (le I placé avant le V se retranche)." }
    ]
  }
});
