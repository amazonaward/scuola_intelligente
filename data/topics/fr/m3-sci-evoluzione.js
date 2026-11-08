TOPIC('fr', {
  id: "m3-sci-evoluzione",
  title: "L'évolution",
  intro: "Sur Terre vivent des millions d'espèces différentes, et dans le passé il en a existé beaucoup plus, comme les dinosaures. D'où viennent-elles ? Les espèces changent-elles avec le temps ? En 1859, <b>Charles Darwin</b> donna une réponse qui révolutionna la biologie : les espèces <b>évoluent</b> par <b>sélection naturelle</b>. Aujourd'hui, les fossiles, l'anatomie et l'ADN confirment son idée.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Avant Darwin : les espèces changent-elles ?",
      html: `<p>Pendant de nombreux siècles, en Europe, c'est le <b>fixisme</b> qui prévalut : l'idée que les espèces avaient été créées telles qu'elles sont et ne changeaient jamais. Le naturaliste suédois <b>Carl von Linné</b>, qui inventa en 1735 le système de classification à deux noms (par ex. <i>Homo sapiens</i>), était au début fixiste.</p>
<p>Mais les <b>fossiles</b> posaient des questions : pourquoi trouve-t-on dans les roches des animaux qui n'existent plus aujourd'hui ? Le Français <b>Georges Cuvier</b> démontra que beaucoup d'espèces s'étaient <b>éteintes</b>. Le géologue <b>Charles Lyell</b> montra que la Terre est très ancienne et change lentement.</p>
<p>En <b>1809</b>, le Français <b>Jean-Baptiste Lamarck</b> proposa la première vraie théorie de l'évolution :</p>
<ul>
<li>les organes que l'on utilise se développent, ceux que l'on n'utilise pas s'atrophient (<b>usage et non-usage</b>) ;</li>
<li>les caractères acquis pendant la vie se transmettent aux enfants (<b>hérédité des caractères acquis</b>).</li>
</ul>
<p>Selon Lamarck, les girafes avaient le cou long parce que, à force de s'étirer pour atteindre les feuilles hautes, elles l'avaient allongé un peu et l'avaient transmis à leurs petits. Aujourd'hui nous savons que <b>les caractères acquis ne s'héritent pas</b> : si un athlète développe ses muscles, ses enfants ne naissent pas musclés. Mais Lamarck eut le mérite d'affirmer que les espèces <b>changent</b>.</p>`
    },
    {
      type: "text",
      title: "2. Le voyage de Darwin",
      html: `<p><b>Charles Darwin</b> (1809–1882) était un jeune Anglais passionné de sciences naturelles. À 22 ans, il partit comme naturaliste à bord du navire <b>HMS Beagle</b>, chargé de dessiner les cartes des côtes de l'Amérique du Sud. Le voyage dura presque <b>5 ans</b> (décembre 1831 – octobre 1836) et fit le tour du monde.</p>
<p>Darwin recueillit des fossiles d'animaux géants disparus (comme le <i>Megatherium</i>, un paresseux grand comme un éléphant), observa des tremblements de terre et des volcans et étudia les animaux et les plantes de chaque endroit. En 1835, il visita les îles <b>Galápagos</b>, dans l'océan Pacifique, à environ 1 000 km de l'Équateur. Là, il remarqua que :</p>
<ul>
<li>les <b>moqueurs</b> étaient différents d'une île à l'autre ;</li>
<li>les <b>tortues géantes</b> avaient des carapaces de forme différente selon l'île ;</li>
<li>les <b>pinsons</b> (qu'il classa mieux à son retour, avec l'aide de l'ornithologue John Gould) avaient des becs de forme différente, adaptés à des nourritures différentes : gros pour casser des graines dures, fins pour attraper des insectes.</li>
</ul>
<p>Pourquoi tant d'espèces semblables mais différentes, sur des îles proches ? Peut-être descendaient-elles d'ancêtres communs arrivés du continent, puis s'étaient-elles <b>modifiées</b> de façon différente sur chaque île.</p>`
    },
    {
      type: "3d",
      title: "Le voyage du Beagle sur le globe",
      scene: "globe",
      options: {
        points: [
          { lat: 50.37, lon: -4.14, label: "Plymouth (départ 1831)", color: "#ef4444" },
          { lat: 14.92, lon: -23.51, label: "Cap-Vert", color: "#f97316" },
          { lat: -12.97, lon: -38.5, label: "Bahia", color: "#f97316" },
          { lat: -22.9, lon: -43.2, label: "Rio de Janeiro", color: "#f97316" },
          { lat: -34.9, lon: -56.2, label: "Montevideo", color: "#f97316" },
          { lat: -54.8, lon: -68.3, label: "Terre de Feu", color: "#f97316" },
          { lat: -33.05, lon: -71.6, label: "Valparaíso", color: "#f97316" },
          { lat: -0.7, lon: -90.3, label: "Galápagos (1835)", color: "#16a34a" },
          { lat: -17.65, lon: -149.4, label: "Tahiti", color: "#f97316" },
          { lat: -35.2, lon: 174.1, label: "Nouvelle-Zélande", color: "#f97316" },
          { lat: -33.87, lon: 151.2, label: "Sydney", color: "#f97316" },
          { lat: -33.9, lon: 18.4, label: "Le Cap", color: "#f97316" },
          { lat: 50.37, lon: -4.14, label: "Retour (1836)", color: "#ef4444" }
        ],
        routes: [{ points: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], color: "#2563eb" }]
      },
      caption: "Fais tourner le globe et suis la route du Beagle (1831–1836). Le point vert, ce sont les Galápagos."
    },
    {
      type: "text",
      title: "3. La sélection naturelle",
      html: `<p>De retour en Angleterre, Darwin réfléchit pendant plus de 20 ans. Deux idées l'aidèrent : les <b>éleveurs</b> obtiennent différentes races de chiens, de pigeons ou de vaches en choisissant comme reproducteurs les animaux qui ont les caractères souhaités (<b>sélection artificielle</b>) ; et l'économiste <b>Thomas Malthus</b> (1798) avait écrit que les populations croissent plus vite que les ressources disponibles.</p>
<p>En <b>1859</b>, Darwin publia <i>L'Origine des espèces</i>. Sa théorie repose sur quelques faits observables :</p>
<ol>
<li><b>Variabilité</b> : les individus d'une même espèce sont tous un peu différents les uns des autres.</li>
<li><b>Hérédité</b> : beaucoup de ces différences se transmettent aux enfants.</li>
<li><b>Surproduction</b> : il naît plus d'individus que le milieu ne peut en nourrir (une morue pond des millions d'œufs !).</li>
<li><b>Lutte pour l'existence</b> : les individus se font concurrence pour la nourriture, l'espace, les partenaires et doivent échapper aux prédateurs et aux maladies.</li>
<li><b>Survie et reproduction des mieux adaptés</b> : celui qui a des caractères plus avantageux dans ce milieu vit plus longtemps et a plus de petits, auxquels il transmet ces caractères.</li>
</ol>
<p>De génération en génération, les caractères avantageux deviennent plus fréquents : la population <b>change</b>. Sur des temps très longs, des populations séparées peuvent devenir des <b>espèces différentes</b> (<b>spéciation</b>).</p>
<p>⚠️ « Le mieux adapté » ne signifie pas « le plus fort » : cela signifie <b>le mieux adapté à ce milieu</b>. Si le milieu change, celui qui est le mieux adapté change aussi. Et l'évolution n'a pas de but : les variations naissent <b>au hasard</b> (aujourd'hui nous savons que ce sont des <b>mutations</b> de l'ADN), c'est le milieu qui les « sélectionne ».</p>`
    },
    {
      type: "svg",
      title: "Lamarck et Darwin comparés : les girafes",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#fefce8"/>
<line x1="320" y1="10" x2="320" y2="310" stroke="#a16207" stroke-width="3" stroke-dasharray="8"/>
<text x="160" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#7c2d12">LAMARCK ❌</text>
<text x="480" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#14532d">DARWIN ✅</text>
<rect x="40" y="200" width="40" height="30" rx="8" fill="#f59e0b"/><rect x="58" y="140" width="10" height="62" fill="#f59e0b"/><circle cx="66" cy="136" r="9" fill="#f59e0b"/>
<text x="60" y="255" font-size="13" text-anchor="middle" fill="#7c2d12">cou court</text>
<text x="105" y="190" font-size="26" fill="#7c2d12">→</text>
<rect x="140" y="200" width="40" height="30" rx="8" fill="#f59e0b"/><rect x="158" y="115" width="10" height="87" fill="#f59e0b"/><circle cx="166" cy="110" r="9" fill="#f59e0b"/>
<text x="160" y="255" font-size="13" text-anchor="middle" fill="#7c2d12">s'allonge</text>
<text x="205" y="190" font-size="26" fill="#7c2d12">→</text>
<rect x="240" y="200" width="40" height="30" rx="8" fill="#f59e0b"/><rect x="258" y="85" width="10" height="117" fill="#f59e0b"/><circle cx="266" cy="80" r="9" fill="#f59e0b"/>
<text x="260" y="255" font-size="13" text-anchor="middle" fill="#7c2d12">petit</text>
<text x="160" y="290" font-size="14" text-anchor="middle" fill="#7c2d12">l'effort s'hérite (faux)</text>
<rect x="350" y="200" width="36" height="28" rx="8" fill="#f59e0b"/><rect x="366" y="140" width="9" height="62" fill="#f59e0b"/><circle cx="371" cy="136" r="8" fill="#f59e0b"/>
<rect x="400" y="200" width="36" height="28" rx="8" fill="#f59e0b"/><rect x="416" y="100" width="9" height="102" fill="#f59e0b"/><circle cx="421" cy="96" r="8" fill="#f59e0b"/>
<rect x="450" y="200" width="36" height="28" rx="8" fill="#f59e0b"/><rect x="466" y="125" width="9" height="77" fill="#f59e0b"/><circle cx="471" cy="121" r="8" fill="#f59e0b"/>
<line x1="345" y1="128" x2="380" y2="150" stroke="#dc2626" stroke-width="4"/><line x1="380" y1="128" x2="345" y2="150" stroke="#dc2626" stroke-width="4"/>
<text x="418" y="255" font-size="13" text-anchor="middle" fill="#14532d">variabilité : des cous différents</text>
<text x="505" y="190" font-size="26" fill="#14532d">→</text>
<rect x="545" y="200" width="36" height="28" rx="8" fill="#f59e0b"/><rect x="561" y="95" width="9" height="107" fill="#f59e0b"/><circle cx="566" cy="91" r="8" fill="#f59e0b"/>
<rect x="590" y="200" width="36" height="28" rx="8" fill="#f59e0b"/><rect x="606" y="100" width="9" height="102" fill="#f59e0b"/><circle cx="611" cy="96" r="8" fill="#f59e0b"/>
<text x="585" y="255" font-size="13" text-anchor="middle" fill="#14532d">ils survivent et</text>
<text x="585" y="272" font-size="13" text-anchor="middle" fill="#14532d">se reproduisent</text>
<text x="480" y="300" font-size="14" text-anchor="middle" fill="#14532d">le milieu sélectionne celui qui est déjà adapté</text>
<ellipse cx="420" cy="70" rx="60" ry="20" fill="#22c55e"/>
<text x="420" y="75" font-size="13" text-anchor="middle" fill="#14532d">feuilles hautes</text>
</svg>`,
      caption: "Pour Lamarck, l'individu change et transmet le changement ; pour Darwin, les différences existent déjà et le milieu récompense les avantageuses. (Aujourd'hui, on pense que le long cou des girafes a aussi été utile dans les combats entre mâles.)"
    },
    {
      type: "decision",
      title: "1858 : tu es Darwin et tu reçois une lettre inattendue",
      html: `<p>Depuis vingt ans, tu rassembles des preuves sur la sélection naturelle, mais tu n'as encore rien publié : tu veux être sûr et tu crains les réactions. Un jour arrive une lettre d'<b>Alfred Russel Wallace</b>, un jeune naturaliste qui travaille dans les îles d'Indonésie : il te décrit, presque avec tes mots, la même théorie !</p>`,
      question: "Que fais-tu ?",
      options: [
        { label: "Je publie en toute hâte, seul, sans rien dire de la lettre.", outcome: "Tu aurais la priorité, mais ce serait malhonnête envers Wallace : si cela se savait, ta réputation de savant honnête serait ruinée." },
        { label: "Je laisse Wallace publier le premier : c'est lui qui l'a écrite en premier.", outcome: "C'est généreux, mais vingt ans de preuves rassemblées resteraient dans un tiroir, et Wallace n'avait qu'un court essai, sans les montagnes de données que tu avais." },
        { label: "Je demande conseil à des amis savants et nous présentons ensemble les deux recherches.", outcome: "On reconnaît le mérite de chacun et on montre à la communauté scientifique à la fois l'idée et les preuves." }
      ],
      answer: 2,
      explain: "Les amis géologue et botaniste de Darwin, <b>Charles Lyell</b> et <b>Joseph Hooker</b>, organisèrent le <b>1er juillet 1858</b> une présentation commune à la Linnean Society de Londres avec les textes de Darwin et de Wallace. Ensuite Darwin termina rapidement son livre, <i>L'Origine des espèces</i>, paru le <b>24 novembre 1859</b>. Wallace resta toujours un admirateur de Darwin et intitula l'un de ses livres justement <i>Darwinism</i>. C'est un exemple de la façon dont, en science, deux personnes peuvent arriver à la même découverte de manière indépendante."
    },
    {
      type: "quiz",
      title: "Mini-quiz : Lamarck et Darwin",
      questions: [
        { type: "mc", q: "Quelle idée de Lamarck s'est révélée fausse ?", options: ["Que les espèces changent avec le temps", "Que les caractères acquis pendant la vie s'héritent", "Que les fossiles existent"], answer: 1, explain: "Les caractères acquis (par ex. des muscles entraînés) ne passent pas aux enfants." },
        { type: "text", q: "Comment s'appellent les îles du Pacifique qui frappèrent Darwin par leurs pinsons et leurs tortues ?", answer: ["galapagos", "galápagos", "iles galapagos", "îles galápagos", "les galapagos", "les galápagos", "îles galapagos", "iles galápagos"], explain: "Les îles Galápagos, visitées en 1835." },
        { type: "order", q: "Mets dans l'ordre le raisonnement de la sélection naturelle.", items: ["Les individus sont différents les uns des autres", "Il naît plus d'individus que le milieu ne peut en nourrir", "Les mieux adaptés survivent et se reproduisent davantage", "Leurs caractères deviennent plus fréquents dans la population"], explain: "Variabilité → surproduction et lutte → survie des mieux adaptés → changement de la population." }
      ]
    },
    {
      type: "example",
      title: "Exemple pratique : la phalène du bouleau",
      html: `<p>En Angleterre vit la phalène <i>Biston betularia</i>, qui se repose le jour sur les troncs. Avant le XIXe siècle, presque toutes étaient <b>claires</b>, camouflées sur les troncs couverts de lichens clairs ; les rares phalènes <b>sombres</b> étaient repérées et mangées par les oiseaux.</p>
<p>Avec la <b>révolution industrielle</b>, la fumée du charbon tua les lichens et noircit les troncs autour des villes. Cette fois, c'étaient les phalènes claires qui étaient visibles ! La première phalène sombre fut signalée à Manchester en 1848 ; vers 1895, près de Manchester, environ <b>98 %</b> des phalènes étaient sombres.</p>
<p>Après les lois contre la pollution de l'air (à partir de 1956), les troncs redevinrent clairs… et les phalènes claires redevinrent majoritaires. Un exemple de sélection naturelle observée en direct en quelques décennies.</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : les bactéries résistantes aux antibiotiques",
      html: `<p>Quand on prend un <b>antibiotique</b> (le premier, la pénicilline, fut découvert par Alexander Fleming en 1928), presque toutes les bactéries meurent. Mais si, par hasard, l'une d'elles a une mutation qui la rend résistante, elle survit et se multiplie : en quelques heures, elle peut avoir des millions de descendantes, toutes résistantes.</p>
<p>C'est pourquoi les médecins recommandent de prendre les antibiotiques <b>seulement quand c'est nécessaire</b> et <b>pendant toute la durée prescrite</b> : mal les utiliser « sélectionne » les bactéries résistantes. C'est l'évolution qui travaille sous nos yeux, et c'est aujourd'hui l'un des grands problèmes de la médecine.</p>`
    },
    {
      type: "text",
      title: "4. Les preuves de l'évolution",
      html: `<ul>
<li><b>Fossiles</b> : dans les couches de roche les plus anciennes, on trouve des organismes plus simples, dans les plus récentes des organismes plus complexes. Il existe des <b>formes de transition</b>, comme l'<i>Archaeopteryx</i> (découvert en 1861), mi-dinosaure mi-oiseau : il avait des dents et une queue osseuse, mais aussi des plumes et des ailes.</li>
<li><b>Organes homologues</b> : le bras de l'être humain, l'aile de la chauve-souris, la nageoire de la baleine et la patte du chat ont des fonctions différentes mais <b>les mêmes os</b> dans la même disposition : ils dérivent d'un ancêtre commun.</li>
<li><b>Organes analogues</b> : l'aile d'un oiseau et celle d'un papillon ont la même fonction mais une structure différente : elles ont évolué séparément pour le même but.</li>
<li><b>Organes vestigiaux</b> : restes d'organes qui ne servent plus, comme le <b>coccyx</b> (reste de la queue) chez l'être humain ou les petits os du bassin chez les baleines (reste des pattes postérieures).</li>
<li><b>Embryologie</b> : les embryons de vertébrés, aux premiers stades, se ressemblent énormément (ils ont tous une queue et des fentes dans le cou).</li>
<li><b>ADN</b> : plus deux espèces sont apparentées, plus leur ADN est semblable. L'être humain et le chimpanzé partagent environ <b>98–99 %</b> de leur ADN ; l'être humain et la souris environ 85 % des gènes qui codent des protéines.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Homologues ou analogues ?",
      widget: "classify",
      options: {
        groups: ["🦴 Homologues (mêmes os, ancêtre commun)", "🪽 Analogues (même fonction, origine différente)"],
        items: [
          ["Bras humain et aile de chauve-souris", 0],
          ["Aile d'oiseau et aile de papillon", 1],
          ["Nageoire de baleine et patte de chien", 0],
          ["Nageoire de requin et nageoire de dauphin", 1],
          ["Patte de cheval et bras humain", 0],
          ["Œil de pieuvre et œil humain", 1]
        ]
      },
      caption: "Les requins (poissons) et les dauphins (mammifères) ont des formes semblables parce qu'ils vivent dans le même milieu : c'est l'évolution convergente."
    },
    {
      type: "svg",
      title: "Organes homologues : les mêmes os chez des animaux différents",
      svg: `<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="280" fill="#f8fafc"/>
<g transform="translate(20,30)">
<rect x="40" y="10" width="20" height="80" rx="8" fill="#ef4444"/>
<rect x="30" y="92" width="14" height="60" rx="6" fill="#3b82f6"/><rect x="56" y="92" width="14" height="60" rx="6" fill="#22c55e"/>
<rect x="28" y="155" width="44" height="18" rx="6" fill="#f59e0b"/>
<rect x="28" y="175" width="7" height="30" fill="#a855f7"/><rect x="39" y="175" width="7" height="34" fill="#a855f7"/><rect x="50" y="175" width="7" height="36" fill="#a855f7"/><rect x="61" y="175" width="7" height="32" fill="#a855f7"/>
<text x="50" y="235" font-size="16" text-anchor="middle" font-weight="bold" fill="#0f172a">Humain</text></g>
<g transform="translate(170,30)">
<rect x="40" y="10" width="20" height="50" rx="8" fill="#ef4444"/>
<rect x="30" y="62" width="14" height="60" rx="6" fill="#3b82f6"/><rect x="56" y="62" width="14" height="60" rx="6" fill="#22c55e"/>
<rect x="28" y="125" width="44" height="12" rx="6" fill="#f59e0b"/>
<path d="M35 137 L0 205 M45 137 L30 215 M55 137 L60 215 M65 137 L95 205" stroke="#a855f7" stroke-width="6"/>
<path d="M0 205 L30 215 L60 215 L95 205 L65 137 L35 137 Z" fill="#c4b5fd" opacity="0.5"/>
<text x="50" y="235" font-size="16" text-anchor="middle" font-weight="bold" fill="#0f172a">Chauve-souris</text></g>
<g transform="translate(330,30)">
<rect x="35" y="10" width="30" height="35" rx="10" fill="#ef4444"/>
<rect x="30" y="47" width="18" height="40" rx="6" fill="#3b82f6"/><rect x="52" y="47" width="18" height="40" rx="6" fill="#22c55e"/>
<rect x="25" y="90" width="50" height="18" rx="6" fill="#f59e0b"/>
<path d="M20 110 Q 50 220 80 110 Z" fill="#c4b5fd" opacity="0.6"/>
<rect x="34" y="110" width="7" height="60" fill="#a855f7"/><rect x="46" y="110" width="7" height="75" fill="#a855f7"/><rect x="58" y="110" width="7" height="60" fill="#a855f7"/>
<text x="50" y="235" font-size="16" text-anchor="middle" font-weight="bold" fill="#0f172a">Baleine</text></g>
<g transform="translate(480,30)">
<rect x="40" y="10" width="20" height="65" rx="8" fill="#ef4444"/>
<rect x="34" y="77" width="12" height="70" rx="6" fill="#3b82f6"/><rect x="54" y="77" width="12" height="70" rx="6" fill="#22c55e"/>
<rect x="32" y="150" width="36" height="15" rx="6" fill="#f59e0b"/>
<rect x="34" y="167" width="7" height="22" fill="#a855f7"/><rect x="44" y="167" width="7" height="25" fill="#a855f7"/><rect x="54" y="167" width="7" height="22" fill="#a855f7"/>
<text x="50" y="235" font-size="16" text-anchor="middle" font-weight="bold" fill="#0f172a">Chat</text></g>
<text x="320" y="272" font-size="14" text-anchor="middle" fill="#334155">rouge = humérus · bleu et vert = radius et cubitus · orange = poignet · violet = doigts</text>
</svg>`,
      caption: "Des membres différents, le même « plan » : c'est la trace d'un ancêtre commun."
    },
    {
      type: "text",
      title: "5. L'évolution humaine",
      html: `<p>L'être humain <b>ne descend pas du chimpanzé</b> : les humains et les chimpanzés ont un <b>ancêtre commun</b> qui a vécu en Afrique il y a environ <b>6–7 millions d'années</b>, à partir duquel les deux lignées se sont séparées. Les principales étapes (simplifiées) sont :</p>
<ul>
<li>Les <b>australopithèques</b> (il y a environ 4 à 2 millions d'années) : ils marchaient déjà sur deux jambes mais avaient un petit cerveau. Le fossile le plus célèbre est <b>Lucy</b>, un <i>Australopithecus afarensis</i> d'environ 3,2 millions d'années trouvé en Éthiopie en 1974.</li>
<li><b>Homo habilis</b> (il y a environ 2,4 millions d'années) : il fabriquait les premiers outils de pierre.</li>
<li><b>Homo erectus</b> (depuis environ 1,9 million d'années) : il utilisait le feu et fut le premier à sortir d'Afrique, arrivant jusqu'en Asie.</li>
<li><b>Homo neanderthalensis</b> (il y a environ 400 000 – 40 000 ans) : il vivait en Europe et en Asie, enterrait ses morts, était intelligent et robuste.</li>
<li><b>Homo sapiens</b> : il apparaît en Afrique il y a environ <b>300 000 ans</b> (fossiles de Jebel Irhoud, au Maroc) ; depuis environ 60 000–70 000 ans, il se répand dans le monde entier.</li>
</ul>
<p>Ce n'est pas une file ordonnée mais un <b>buisson</b> : pendant un certain temps, plusieurs espèces humaines ont existé ensemble. Le généticien suédois <b>Svante Pääbo</b> (Nobel 2022) a lu l'ADN des Néandertaliens et a découvert que beaucoup de personnes d'aujourd'hui, hors d'Afrique, en portent environ 1–2 % : Sapiens et Néandertal se sont rencontrés et ont eu des enfants ensemble.</p>`
    },
    {
      type: "widget",
      title: "La longue histoire de la vie (échelle logarithmique)",
      widget: "timeline",
      options: {
        scale: "log",
        events: [
          { year: -3800000000, label: "Premières cellules", icon: "🦠" },
          { year: -2400000000, label: "Oxygène dans l'air", icon: "🫧" },
          { year: -541000000, label: "Explosion cambrienne", icon: "🦐" },
          { year: -375000000, label: "Les poissons vers la terre", icon: "🐟" },
          { year: -230000000, label: "Premiers dinosaures", icon: "🦕" },
          { year: -66000000, label: "Extinction des dinosaures", icon: "☄️" },
          { year: -3200000, label: "Lucy", icon: "🦴" },
          { year: -300000, label: "Homo sapiens", icon: "🧑" },
          { year: 1859, label: "L'Origine des espèces", icon: "📗" }
        ]
      },
      caption: "Pendant presque 3 milliards d'années, il n'y eut sur Terre que des organismes unicellulaires. L'échelle logarithmique « élargit » les derniers millions d'années."
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Les pinsons évoluent sous nos yeux",
      html: `<p>Depuis 1973, les biologistes <b>Peter et Rosemary Grant</b> mesurent chaque année les becs des pinsons de l'île Daphne Major, aux Galápagos. Après la grande sécheresse de <b>1977</b>, il ne resta presque que des graines grosses et dures : survécurent surtout les pinsons au bec le plus robuste, et la génération suivante avait des becs en moyenne plus grands d'environ 4–5 %. Darwin pensait que l'évolution était trop lente pour être vue : les Grant l'ont mesurée en une seule année !</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Les baleines avaient des pattes",
      html: `<p>Il y a environ 50 millions d'années, au Pakistan, vivait le <i>Pakicetus</i>, un mammifère de la taille d'un loup qui marchait sur terre et chassait près de l'eau. Les fossiles montrent une série de formes de transition vers des animaux de plus en plus aquatiques, jusqu'aux baleines d'aujourd'hui, qui conservent encore de petits os du bassin. Les baleines sont proches parentes… des hippopotames !</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre l'évolution",
      intro: "La sélection naturelle est une idée simple mais difficile à « voir », parce qu'elle agit sur des temps très longs. Essaie comme ceci.",
      tabs: [
        {
          label: "🦋 Simulation des phalènes",
          html: `<p>Imagine 10 phalènes, 5 claires et 5 sombres, sur un tronc noirci par la fumée. Un oiseau en mange 4 claires (il les voit tout de suite) et 1 sombre. Les 5 survivantes (1 claire et 4 sombres) ont 2 petits chacune, identiques à elles. Dans la nouvelle génération : 2 claires et 8 sombres. Recommence : en quelques générations, les sombres sont presque toutes ! Tu peux faire ce jeu en classe avec des confettis blancs et noirs sur une feuille blanche ou de journal.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#e7e5e4"/>
<rect x="20" y="20" width="160" height="190" fill="#44403c"/>
<rect x="220" y="20" width="160" height="190" fill="#44403c"/>
<rect x="420" y="20" width="160" height="190" fill="#44403c"/>
<text x="100" y="232" font-size="14" text-anchor="middle" fill="#1c1917">1re gén. : 50 % sombres</text>
<text x="300" y="232" font-size="14" text-anchor="middle" fill="#1c1917">2e gén. : 80 % sombres</text>
<text x="500" y="232" font-size="14" text-anchor="middle" fill="#1c1917">3e gén. : ~95 % sombres</text>
<g fill="#fafaf9"><ellipse cx="50" cy="50" rx="14" ry="8"/><ellipse cx="130" cy="70" rx="14" ry="8"/><ellipse cx="70" cy="130" rx="14" ry="8"/><ellipse cx="150" cy="160" rx="14" ry="8"/><ellipse cx="60" cy="190" rx="14" ry="8"/></g>
<g fill="#292524" stroke="#57534e"><ellipse cx="100" cy="40" rx="14" ry="8"/><ellipse cx="45" cy="95" rx="14" ry="8"/><ellipse cx="120" cy="115" rx="14" ry="8"/><ellipse cx="100" cy="170" rx="14" ry="8"/><ellipse cx="150" cy="200" rx="14" ry="8"/></g>
<g fill="#fafaf9"><ellipse cx="260" cy="60" rx="14" ry="8"/><ellipse cx="340" cy="170" rx="14" ry="8"/></g>
<g fill="#292524" stroke="#57534e"><ellipse cx="300" cy="40" rx="14" ry="8"/><ellipse cx="350" cy="80" rx="14" ry="8"/><ellipse cx="250" cy="110" rx="14" ry="8"/><ellipse cx="310" cy="120" rx="14" ry="8"/><ellipse cx="260" cy="170" rx="14" ry="8"/><ellipse cx="300" cy="200" rx="14" ry="8"/><ellipse cx="350" cy="130" rx="14" ry="8"/><ellipse cx="240" cy="200" rx="14" ry="8"/></g>
<g fill="#fafaf9"><ellipse cx="540" cy="190" rx="14" ry="8"/></g>
<g fill="#292524" stroke="#57534e"><ellipse cx="450" cy="40" rx="14" ry="8"/><ellipse cx="510" cy="50" rx="14" ry="8"/><ellipse cx="560" cy="80" rx="14" ry="8"/><ellipse cx="460" cy="100" rx="14" ry="8"/><ellipse cx="520" cy="120" rx="14" ry="8"/><ellipse cx="450" cy="160" rx="14" ry="8"/><ellipse cx="500" cy="180" rx="14" ry="8"/><ellipse cx="560" cy="150" rx="14" ry="8"/><ellipse cx="480" cy="200" rx="14" ry="8"/></g>
</svg>`
        },
        {
          label: "🌳 Un arbre, pas une échelle",
          html: `<p>Beaucoup imaginent l'évolution comme une <b>échelle</b> qui monte du singe à l'être humain. C'est faux ! Darwin dessina dans son carnet (1837) un <b>arbre ramifié</b> avec écrit dessus <i>« I think »</i> (« je pense »). Chaque branche est une espèce ; les branches se divisent quand les populations se séparent ; les pointes sont les espèces d'aujourd'hui, toutes « évoluées » de la même façon ; les branches interrompues sont les espèces éteintes. L'être humain et le chimpanzé sont deux petits rameaux voisins, avec un nœud commun en bas.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0fdf4"/>
<path d="M300 250 L300 200 L170 140 L110 60 M170 140 L210 70 M300 200 L430 130 L380 60 M430 130 L490 90 L460 30 M490 90 L540 35 M300 200 L300 150" stroke="#166534" stroke-width="6" fill="none" stroke-linecap="round"/>
<circle cx="300" cy="150" r="7" fill="#dc2626"/>
<text x="300" y="138" font-size="13" text-anchor="middle" fill="#991b1b">éteint</text>
<text x="110" y="50" font-size="15" text-anchor="middle" fill="#14532d">🐟 poissons</text>
<text x="210" y="60" font-size="15" text-anchor="middle" fill="#14532d">🐸 amphibiens</text>
<text x="380" y="50" font-size="15" text-anchor="middle" fill="#14532d">🐦 oiseaux</text>
<text x="460" y="22" font-size="15" text-anchor="middle" fill="#14532d">🐒 chimpanzé</text>
<text x="550" y="25" font-size="15" text-anchor="middle" fill="#14532d">🧑 humain</text>
<circle cx="490" cy="90" r="7" fill="#f59e0b"/>
<text x="560" y="105" font-size="13" text-anchor="middle" fill="#92400e">ancêtre commun</text>
<text x="300" y="258" font-size="13" text-anchor="middle" fill="#14532d">passé</text>
</svg>`
        },
        {
          label: "🌍 Le voyage d'Homo sapiens",
          html: `<p>Tous les êtres humains d'aujourd'hui descendent de populations africaines. Fais tourner le globe et suis (de façon simplifiée) les étapes de la diffusion d'<i>Homo sapiens</i> : de l'Afrique au Moyen-Orient, puis en Asie, en Australie (il y a environ 50 000–65 000 ans), en Europe (il y a environ 45 000 ans) et enfin, à travers le détroit de Béring, dans les Amériques (il y a au moins 15 000–20 000 ans).</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 31.85, lon: -8.87, label: "Jebel Irhoud (~300 000 ans)", color: "#ef4444" },
              { lat: 9.0, lon: 38.7, label: "Afrique de l'Est", color: "#ef4444" },
              { lat: 32.0, lon: 35.0, label: "Moyen-Orient", color: "#f97316" },
              { lat: 45.0, lon: 10.0, label: "Europe (~45 000)", color: "#f97316" },
              { lat: 20.0, lon: 78.0, label: "Inde", color: "#f97316" },
              { lat: -25.0, lon: 134.0, label: "Australie (~50 000–65 000)", color: "#f97316" },
              { lat: 65.0, lon: -168.0, label: "Détroit de Béring", color: "#f97316" },
              { lat: -10.0, lon: -60.0, label: "Amérique du Sud (~15 000)", color: "#f97316" }
            ],
            routes: [
              { points: [0, 1, 2, 3], color: "#2563eb" },
              { points: [2, 4, 5], color: "#16a34a" },
              { points: [4, 6, 7], color: "#a855f7" }
            ]
          }
        },
        {
          label: "📞 Le téléphone arabe",
          html: `<p>Tu te souviens du jeu du <b>téléphone arabe</b> ? Une phrase passe de bouche en bouche et change un tout petit peu à chaque fois. Au bout de 20 passages, elle est méconnaissable. L'ADN se copie de parent à enfant presque parfaitement, mais de temps en temps il y a une petite « erreur » (une <b>mutation</b>). Différence fondamentale : dans le jeu, les erreurs s'accumulent au hasard ; dans l'évolution, le milieu joue le rôle d'« arbitre » et conserve les versions qui fonctionnent le mieux. Avec des millions de générations, deux branches de la même famille peuvent devenir des espèces différentes.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte de l'évolution : touche les nœuds et découvre le pourquoi",
      nodes: [
        { id: "fissismo", label: "Fixisme", x: 12, y: 8, color: "#94a3b8", html: "L'idée que les espèces ne changent pas.", why: "C'était l'interprétation traditionnelle, soutenue aussi par Linné ; on manquait de preuves sur l'âge de la Terre et les fossiles étaient peu étudiés." },
        { id: "fossili", label: "Fossiles et extinctions", x: 45, y: 8, color: "#92400e", html: "Restes d'organismes du passé, dont beaucoup sont éteints.", why: "<b>Cuvier</b> (début du XIXe siècle) démontra, en comparant les os, que les mammouths et d'autres animaux étaient des espèces disparues ; <b>Lyell</b> (1830) montra que la Terre a des millions d'années : il y avait le temps pour les changements." },
        { id: "lamarck", label: "Lamarck", x: 80, y: 8, color: "#f97316", html: "Première théorie évolutive (1809) : usage et non-usage, caractères acquis.", why: "Lamarck étudiait les invertébrés et remarqua des séries de formes graduelles. Son explication du mécanisme était fausse, mais l'idée que les espèces se transforment était juste." },
        { id: "variabilita", label: "Variabilité", x: 20, y: 40, color: "#a855f7", html: "Les individus d'une espèce sont tous différents.", why: "Darwin ne savait pas d'où elle venait. Aujourd'hui nous le savons : des <b>mutations</b> de l'ADN et du brassage des gènes dans la reproduction sexuée (méiose et fécondation)." },
        { id: "selezione", label: "Sélection naturelle", x: 50, y: 40, color: "#16a34a", html: "Les individus les mieux adaptés au milieu survivent et se reproduisent davantage.", why: "<b>Darwin</b> (et indépendamment <b>Wallace</b>) la déduisit des observations du voyage sur le Beagle, de la sélection artificielle des éleveurs et des idées de Malthus sur la croissance des populations." },
        { id: "ambiente", label: "Milieu", x: 82, y: 40, color: "#0ea5e9", html: "Climat, nourriture, prédateurs, maladies : ils décident qui est « adapté ».", why: "L'adaptation est toujours relative : la phalène sombre est avantagée sur un tronc noirci, désavantagée sur un tronc clair." },
        { id: "speciazione", label: "Spéciation", x: 30, y: 72, color: "#db2777", html: "La naissance de nouvelles espèces à partir de populations séparées.", why: "Si deux populations restent séparées (une île, une montagne), elles accumulent des différences jusqu'à ne plus pouvoir se reproduire entre elles : c'est ce que suggéraient les espèces différentes de chaque île des Galápagos." },
        { id: "prove", label: "Preuves modernes", x: 70, y: 72, color: "#2563eb", html: "Organes homologues, vestigiaux, embryologie, ADN.", why: "La <b>synthèse moderne</b> (années 1930–1940) a uni Darwin et la génétique de Mendel ; depuis 1953, avec l'ADN, on peut mesurer les parentés entre espèces en comparant leurs séquences." },
        { id: "uomo", label: "Évolution humaine", x: 50, y: 94, color: "#f59e0b", html: "Des australopithèques à Homo sapiens, apparu en Afrique il y a 300 000 ans.", why: "Reconstituée grâce aux fossiles (Lucy, 1974 ; Jebel Irhoud, 2017) et à l'ADN ancien (Pääbo, Nobel 2022). Darwin l'avait pressenti en 1871 dans le livre <i>La Filiation de l'homme</i>." }
      ],
      edges: [
        ["fossili", "fissismo", "mettent en crise le"],
        ["fossili", "lamarck", "inspirent"],
        ["variabilita", "selezione", "est la matière première de la"],
        ["ambiente", "selezione", "guide la"],
        ["selezione", "speciazione", "conduit à la"],
        ["prove", "selezione", "confirment la"],
        ["speciazione", "uomo", "explique aussi l'"],
        ["prove", "uomo", "reconstituent l'"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : preuves et évolution humaine",
      questions: [
        { type: "mc", q: "Le bras humain et l'aile de la chauve-souris sont des organes…", options: ["analogues", "homologues", "vestigiaux"], answer: 1, explain: "Ils ont les mêmes os : ils dérivent d'un ancêtre commun." },
        { type: "tf", q: "L'être humain descend directement du chimpanzé.", answer: false, explain: "L'être humain et le chimpanzé ont un ancêtre commun qui a vécu il y a 6–7 millions d'années." },
        { type: "mc", q: "Sur quel continent Homo sapiens est-il apparu ?", options: ["Europe", "Asie", "Afrique"], answer: 2, explain: "En Afrique, il y a environ 300 000 ans." }
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li><b>Lamarck</b> (1809) : usage et non-usage, hérédité des caractères acquis (fausse).</li>
<li><b>Darwin</b> (1859, <i>L'Origine des espèces</i>) : <b>variabilité</b>, hérédité, surproduction, lutte pour l'existence, <b>sélection naturelle</b> des mieux adaptés.</li>
<li>Les variations naissent au hasard (mutations) ; c'est le <b>milieu</b> qui sélectionne.</li>
<li>Preuves : fossiles, organes homologues et vestigiaux, embryologie, ADN.</li>
<li>Homo sapiens est né en Afrique il y a environ 300 000 ans ; l'être humain et le chimpanzé ont un ancêtre commun.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Évolution", d: "Le changement des espèces vivantes au fil des générations." },
    { t: "Fixisme", d: "Théorie selon laquelle les espèces ne changent pas avec le temps." },
    { t: "Sélection naturelle", d: "Processus par lequel les individus les mieux adaptés au milieu survivent et se reproduisent davantage." },
    { t: "Adaptation", d: "Caractère qui augmente la probabilité de survivre et de se reproduire dans un milieu." },
    { t: "Espèce", d: "Groupe d'individus qui peuvent se reproduire entre eux et avoir des petits fertiles." },
    { t: "Spéciation", d: "Formation d'une nouvelle espèce." },
    { t: "Fossile", d: "Reste ou trace d'un organisme du passé conservé dans les roches." },
    { t: "Organes homologues", d: "Organes de même structure et de même origine, mais de fonctions différentes." },
    { t: "Organes analogues", d: "Organes de même fonction mais d'origine et de structure différentes." },
    { t: "Organe vestigial", d: "Reste d'un organe qui avait une fonction chez les ancêtres." },
    { t: "Mutation", d: "Changement aléatoire de l'ADN, source de nouvelle variabilité." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "En quelle année « L'Origine des espèces » fut-elle publiée ?", options: ["1809", "1859", "1900", "1953"], answer: 1, explain: "Le 24 novembre 1859." },
      { type: "text", q: "Comment s'appelait le navire sur lequel voyagea Darwin ?", answer: ["beagle", "hms beagle", "le beagle"], explain: "Le HMS Beagle (1831–1836)." },
      { type: "mc", q: "Selon Darwin, qui survit et se reproduit davantage ?", options: ["Toujours le plus fort", "Celui qui est le mieux adapté à ce milieu", "Celui qui fait le plus d'efforts"], answer: 1, explain: "L'adaptation dépend du milieu." },
      { type: "tf", q: "Selon Lamarck, les caractères acquis pendant la vie se transmettent aux enfants.", answer: true, explain: "C'était sa théorie, démentie ensuite." },
      { type: "mc", q: "Pourquoi les phalènes sombres ont-elles augmenté dans l'Angleterre industrielle ?", options: ["La fumée les colorait", "Sur les troncs noircis, elles étaient moins visibles pour les oiseaux", "Elles mangeaient du charbon"], answer: 1, explain: "Les sombres étaient camouflées et survivaient davantage." },
      { type: "mc", q: "Le coccyx humain est un exemple d'organe…", options: ["homologue", "analogue", "vestigial"], answer: 2, explain: "C'est le reste de la queue de nos ancêtres." },
      { type: "mc", q: "L'aile d'oiseau et l'aile de papillon sont des organes…", options: ["analogues", "homologues", "vestigiaux"], answer: 0, explain: "Même fonction, origine différente." },
      { type: "text", q: "Quel naturaliste arriva à la sélection naturelle indépendamment de Darwin ?", answer: ["wallace", "alfred russel wallace", "alfred wallace"], explain: "Alfred Russel Wallace ; présentation commune en 1858." },
      { type: "order", q: "Mets dans l'ordre d'apparition.", items: ["Australopithèques (Lucy)", "Homo habilis", "Homo erectus", "Homo sapiens"], explain: "Il y a environ 3,2 millions, 2,4 millions, 1,9 million et 300 000 ans." },
      { type: "tf", q: "Les antibiotiques mal utilisés favorisent les bactéries résistantes.", answer: true, explain: "Seules les bactéries résistantes survivent et se multiplient : sélection naturelle." },
      { type: "mc", q: "D'où vient, selon la génétique moderne, la variabilité entre individus ?", options: ["De l'effort fourni pendant la vie", "Des mutations de l'ADN et de la reproduction sexuée", "Du climat"], answer: 1, explain: "Mutations aléatoires et brassage des gènes." },
      { type: "num", q: "Lucy vécut il y a environ 3,2 millions d'années. Homo sapiens apparut il y a environ 300 000 ans. Combien de centaines de milliers d'années séparent les deux dates ?", answer: 29, explain: "3 200 000 − 300 000 = 2 900 000 ans = 29 centaines de milliers." }
    ]
  }
});
