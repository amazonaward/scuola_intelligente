TOPIC('fr', {
  id: "p4-mat-frazioni",
  title: "Les fractions",
  intro: "Quand tu partages une pizza avec tes amis, tu utilises déjà les <b>fractions</b> ! Apprenons à les lire, les écrire, les comparer et à calculer la fraction d'un nombre.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Qu'est-ce qu'une fraction",
      html: `<p>Une <b>fraction</b> indique une ou plusieurs <b>parts égales</b> d'un tout (d'une unité).</p>
<p>Pour <b>fractionner</b> un tout, il faut le diviser en parts <b>toutes égales</b>. Chaque part s'appelle une <b>fraction unitaire</b> : par exemple ¼ (un quart) ou ⅓ (un tiers).</p>
<p>Une fraction s'écrit avec deux nombres et un trait :</p>
<ul>
<li>le <b>dénominateur</b> (en bas) dit en combien de parts égales le tout a été divisé ;</li>
<li>le <b>numérateur</b> (en haut) dit combien de parts nous prenons ;</li>
<li>le <b>trait de fraction</b> est au milieu.</li>
</ul>
<p>Exemple : <b>3/4</b> se lit « trois quarts » : le tout est divisé en 4 parts égales et nous en prenons 3.</p>`
    },
    {
      type: "svg",
      title: "Les parties d'une fraction",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<circle cx="150" cy="150" r="100" fill="#fde68a" stroke="#92400e" stroke-width="4"/>
<path d="M150 150 L150 50 A100 100 0 0 1 250 150 Z" fill="#f97316"/>
<path d="M150 150 L250 150 A100 100 0 0 1 150 250 Z" fill="#f97316"/>
<path d="M150 150 L150 250 A100 100 0 0 1 50 150 Z" fill="#f97316"/>
<path d="M150 50 L150 250 M50 150 L250 150" stroke="#92400e" stroke-width="4"/>
<text x="380" y="110" font-size="64" font-weight="bold" fill="#c2410c" text-anchor="middle">3</text>
<line x1="340" y1="130" x2="420" y2="130" stroke="#1f2937" stroke-width="6"/>
<text x="380" y="190" font-size="64" font-weight="bold" fill="#1d4ed8" text-anchor="middle">4</text>
<text x="440" y="100" font-size="18" fill="#c2410c">numérateur : parts prises</text>
<text x="440" y="136" font-size="18" fill="#1f2937">trait de fraction</text>
<text x="440" y="180" font-size="18" fill="#1d4ed8">dénominateur :</text>
<text x="440" y="202" font-size="18" fill="#1d4ed8">parts égales en tout</text>
<text x="150" y="285" font-size="20" text-anchor="middle" fill="#1f2937" font-weight="bold">3/4 de la pizza</text>
</svg>`,
      caption: "La pizza est divisée en 4 parts égales : les 3 colorées sont les 3/4."
    },
    {
      type: "widget",
      title: "Construis les fractions",
      widget: "fractionPie",
      options: { n: 3, d: 4 },
      caption: "Bouge les curseurs : change le numérateur et le dénominateur et observe la figure."
    },
    {
      type: "quiz",
      title: "Mini-quiz : lire les fractions",
      questions: [
        { type: "mc", q: "Dans 2/5, le dénominateur est…", options: ["2", "5", "7"], answer: 1, explain: "Le dénominateur est le nombre sous le trait : 5." },
        { type: "mc", q: "Comment se lit 5/8 ?", options: ["Cinq huitièmes", "Huit cinquièmes", "Cinq et huit"], answer: 0, explain: "On lit d'abord le numérateur (cinq), puis le dénominateur avec « -ième » (huitièmes)." },
        { type: "tf", q: "Pour faire une fraction, le tout doit être divisé en parts égales.", answer: true, explain: "Les parts doivent être toutes égales, sinon ce n'est pas une fraction." }
      ]
    },
    {
      type: "text",
      title: "Fractions inférieures, supérieures ou égales à 1",
      html: `<ul>
<li><b>Fraction inférieure à 1</b> : numérateur <b>plus petit</b> que le dénominateur → c'est <b>moins qu'une unité</b>. Ex. 3/4, 2/5.</li>
<li><b>Fraction supérieure à 1</b> : numérateur <b>plus grand</b> que le dénominateur → c'est <b>plus qu'une unité</b>. Ex. 5/4 (une unité et un quart).</li>
<li><b>Fraction égale à un nombre entier</b> : le numérateur est un <b>multiple</b> du dénominateur → elle vaut <b>une ou plusieurs unités</b>. Ex. 4/4 = 1, 6/3 = 2.</li>
</ul>`
    },
    {
      type: "text",
      title: "Fractions égales et comparaison",
      html: `<p>Deux fractions sont <b>égales</b> (équivalentes) quand elles indiquent la <b>même quantité</b>, même si elles s'écrivent avec des nombres différents.</p>
<p>Exemple : <b>1/2 = 2/4 = 4/8</b>. Une demi-pizza, c'est pareil que deux quarts de pizza !</p>
<p>Pour trouver une fraction égale, on <b>multiplie</b> (ou on <b>divise</b>) le numérateur et le dénominateur par le <b>même nombre</b> : 1/2 → (×3) → 3/6.</p>
<p><b>Comparer</b> :</p>
<ul>
<li>même dénominateur : la plus grande est celle qui a le plus grand numérateur (3/5 &gt; 2/5) ;</li>
<li>même numérateur : la plus grande est celle qui a le plus petit dénominateur (1/3 &gt; 1/6), parce que les parts sont plus grandes !</li>
</ul>`
    },
    {
      type: "svg",
      title: "1/2 = 2/4 = 4/8",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0f9ff"/>
<g stroke="#1e3a8a" stroke-width="3">
<rect x="120" y="30" width="200" height="50" fill="#60a5fa"/>
<rect x="320" y="30" width="200" height="50" fill="#ffffff"/>
<rect x="120" y="105" width="100" height="50" fill="#34d399"/>
<rect x="220" y="105" width="100" height="50" fill="#34d399"/>
<rect x="320" y="105" width="100" height="50" fill="#ffffff"/>
<rect x="420" y="105" width="100" height="50" fill="#ffffff"/>
<rect x="120" y="180" width="50" height="50" fill="#f472b6"/>
<rect x="170" y="180" width="50" height="50" fill="#f472b6"/>
<rect x="220" y="180" width="50" height="50" fill="#f472b6"/>
<rect x="270" y="180" width="50" height="50" fill="#f472b6"/>
<rect x="320" y="180" width="50" height="50" fill="#ffffff"/>
<rect x="370" y="180" width="50" height="50" fill="#ffffff"/>
<rect x="420" y="180" width="50" height="50" fill="#ffffff"/>
<rect x="470" y="180" width="50" height="50" fill="#ffffff"/>
</g>
<text x="60" y="64" font-size="26" font-weight="bold" fill="#1d4ed8" text-anchor="middle">1/2</text>
<text x="60" y="139" font-size="26" font-weight="bold" fill="#047857" text-anchor="middle">2/4</text>
<text x="60" y="214" font-size="26" font-weight="bold" fill="#be185d" text-anchor="middle">4/8</text>
<line x1="320" y1="20" x2="320" y2="240" stroke="#ef4444" stroke-width="3" stroke-dasharray="8 6"/>
</svg>`,
      caption: "Les parties colorées ont la même longueur : les trois fractions sont égales."
    },
    {
      type: "text",
      title: "La fraction d'un nombre",
      html: `<p>Pour calculer la fraction d'un nombre :</p>
<ol>
<li><b>divise</b> le nombre par le <b>dénominateur</b> (tu trouves combien vaut une part) ;</li>
<li><b>multiplie</b> le résultat par le <b>numérateur</b>.</li>
</ol>
<p>Exemple : 3/4 de 20 → 20 : 4 = 5 → 5 × 3 = <b>15</b>.</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : le gâteau d'anniversaire",
      html: `<p>Le gâteau de Julie est coupé en <b>8 parts égales</b>. Les amis en mangent <b>5</b>.</p>
<ul>
<li>Ils ont mangé <b>5/8</b> du gâteau.</li>
<li>Il reste 8 − 5 = 3 parts, c'est-à-dire <b>3/8</b>.</li>
<li>5/8 + 3/8 = 8/8 = <b>1 gâteau entier</b>.</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemple pratique : les images à collectionner",
      html: `<p>Marc a <b>24 images</b> et il en donne <b>2/3</b> à son ami Luc. Combien d'images donne-t-il ?</p>
<ol>
<li>24 : 3 = 8 (un tiers des images)</li>
<li>8 × 2 = <b>16</b> images données</li>
</ol>
<p>Il reste à Marc 24 − 16 = <b>8</b> images, c'est-à-dire 1/3.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ?",
      html: `<p>Les anciens <b>Égyptiens</b> utilisaient presque uniquement des fractions avec le numérateur 1, comme 1/2, 1/3, 1/4… Pour écrire 3/4, ils disaient « 1/2 + 1/4 » !</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ?",
      html: `<p>La musique aussi utilise les fractions : la <b>ronde</b> vaut 4 temps, la <b>blanche</b> en vaut la moitié (1/2), la <b>noire</b> un quart (1/4), la <b>croche</b> un huitième (1/8)… parce qu'elles durent une fraction du temps de la note la plus longue !</p>`
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>Dénominateur = en combien de parts égales je divise ; numérateur = combien de parts je prends.</li>
<li>Inférieure à 1 &lt; 1, supérieure à 1 &gt; 1, égale à un entier = des unités entières.</li>
<li>Fraction d'un nombre : <b>divisé par le dénominateur, multiplié par le numérateur</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les fractions",
      intro: "Tout le monde ne comprend pas les fractions de la même façon. Ici tu trouves la même idée expliquée avec la pizza, le chocolat, la droite des nombres, l'argent, les cubes 3D et… comme le faisaient les anciens Égyptiens. Choisis celle qui te convient !",
      tabs: [
        {
          label: "🍕 La pizza",
          html: `<p>Une pizza entière, c'est l'<b>unité</b> (le tout). Si tu la coupes en <b>8 parts égales</b>, chaque part est <b>1/8</b> de la pizza.</p>
<p>Si tu en manges 3 parts, tu as mangé <b>3/8</b> : le <b>dénominateur</b> (8) dit en combien de parts tu as coupé, le <b>numérateur</b> (3) dit combien de parts tu prends.</p>
<p>Attention : les parts doivent être <b>toutes égales</b>, sinon ce n'est pas une vraie fraction… et quelqu'un va se fâcher !</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<circle cx="170" cy="140" r="115" fill="#fde68a" stroke="#b45309" stroke-width="8"/>
<g stroke="#b45309" stroke-width="4">
<line x1="170" y1="140" x2="170" y2="25"/><line x1="170" y1="140" x2="251" y2="59"/><line x1="170" y1="140" x2="285" y2="140"/><line x1="170" y1="140" x2="251" y2="221"/>
<line x1="170" y1="140" x2="170" y2="255"/><line x1="170" y1="140" x2="89" y2="221"/><line x1="170" y1="140" x2="55" y2="140"/><line x1="170" y1="140" x2="89" y2="59"/>
</g>
<path d="M170,140 L170,25 A115,115 0 0,1 251,59 Z" fill="#ef4444" opacity="0.75"/>
<path d="M170,140 L251,59 A115,115 0 0,1 285,140 Z" fill="#ef4444" opacity="0.75"/>
<path d="M170,140 L285,140 A115,115 0 0,1 251,221 Z" fill="#ef4444" opacity="0.75"/>
<text x="330" y="110" font-size="30" fill="#b91c1c" font-weight="bold">3 parts mangées</text>
<line x1="330" y1="135" x2="560" y2="135" stroke="#1f2937" stroke-width="4"/>
<text x="330" y="180" font-size="30" fill="#1f2937" font-weight="bold">8 parts en tout</text>
<text x="330" y="240" font-size="34" fill="#1d4ed8" font-weight="bold">= 3/8</text>
</svg>`
        },
        {
          label: "🍫 La tablette de chocolat",
          html: `<p>Une tablette de chocolat est déjà divisée en carrés égaux : elle est parfaite pour les fractions !</p>
<p>Cette tablette a <b>12 carrés</b>. Si tu en donnes <b>4</b>, tu as donné <b>4/12</b> de la tablette. Mais regarde bien : 4 carrés, c'est aussi <b>une rangée sur trois</b>, c'est-à-dire <b>1/3</b>. Donc <b>4/12 = 1/3</b> : ce sont des <b>fractions égales</b>, c'est-à-dire la même quantité de chocolat écrite de façons différentes.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect x="40" y="30" width="320" height="180" rx="10" fill="#78350f"/>
<g fill="#92400e" stroke="#451a03" stroke-width="3">
<rect x="50" y="40" width="70" height="50"/><rect x="128" y="40" width="70" height="50"/><rect x="206" y="40" width="70" height="50"/><rect x="284" y="40" width="70" height="50"/>
<rect x="50" y="98" width="70" height="50"/><rect x="128" y="98" width="70" height="50"/><rect x="206" y="98" width="70" height="50"/><rect x="284" y="98" width="70" height="50"/>
</g>
<g fill="#fbbf24" stroke="#451a03" stroke-width="3">
<rect x="50" y="156" width="70" height="50"/><rect x="128" y="156" width="70" height="50"/><rect x="206" y="156" width="70" height="50"/><rect x="284" y="156" width="70" height="50"/>
</g>
<text x="390" y="100" font-size="28" fill="#1f2937">4/12 donnés</text>
<text x="390" y="150" font-size="28" fill="#1f2937">= 1 rangée sur 3</text>
<text x="390" y="200" font-size="32" fill="#b45309" font-weight="bold">= 1/3</text>
</svg>`
        },
        {
          label: "📏 La droite des nombres",
          html: `<p>Les fractions sont des <b>nombres</b> et elles ont leur place sur la droite, exactement comme 0, 1, 2…</p>
<p>Divise l'espace entre 0 et 1 en <b>4 parts égales</b> : chaque saut vaut <b>1/4</b>. Avec 3 sauts tu arrives à <b>3/4</b>, avec 4 sauts tu arrives à <b>4/4 = 1</b>, et si tu continues avec 5 sauts tu dépasses 1 : <b>5/4</b> est une fraction <b>supérieure à 1</b>, plus grande que l'unité.</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<line x1="30" y1="110" x2="580" y2="110" stroke="#1f2937" stroke-width="4"/>
<g stroke="#1f2937" stroke-width="4">
<line x1="50" y1="95" x2="50" y2="125"/><line x1="160" y1="100" x2="160" y2="120"/><line x1="270" y1="100" x2="270" y2="120"/><line x1="380" y1="100" x2="380" y2="120"/>
<line x1="490" y1="95" x2="490" y2="125"/>
</g>
<g fill="none" stroke="#2563eb" stroke-width="3">
<path d="M50,95 Q105,40 160,95"/><path d="M160,95 Q215,40 270,95"/><path d="M270,95 Q325,40 380,95"/>
</g>
<text x="50" y="155" font-size="22" text-anchor="middle">0</text>
<text x="160" y="155" font-size="22" text-anchor="middle">1/4</text>
<text x="270" y="155" font-size="22" text-anchor="middle">2/4</text>
<text x="380" y="155" font-size="22" text-anchor="middle" fill="#2563eb" font-weight="bold">3/4</text>
<text x="490" y="155" font-size="22" text-anchor="middle">1 = 4/4</text>
<text x="215" y="45" font-size="18" fill="#2563eb">3 sauts de 1/4</text>
</svg>`
        },
        {
          label: "💶 L'argent",
          html: `<p>Avec les euros, tu utilises déjà les fractions sans t'en rendre compte ! Un euro vaut <b>100 centimes</b>.</p>
<ul>
<li><b>1/2</b> euro = 100 : 2 = <b>50 centimes</b> 🪙</li>
<li><b>1/4</b> d'euro = 100 : 4 = <b>25 centimes</b></li>
<li><b>3/4</b> d'euro = 25 × 3 = <b>75 centimes</b></li>
<li><b>1/10</b> d'euro = <b>10 centimes</b></li>
<li><b>1/100</b> d'euro = <b>1 centime</b> : en effet, « centime » veut dire justement « une des cent parts » !</li>
</ul>
<p>Essaie : si tu as 20 € et que tu dépenses 1/4 de ton argent, combien dépenses-tu ? 20 : 4 = <b>5 €</b>.</p>`
        },
        {
          label: "🧊 Avec les cubes 3D",
          html: `<p>Voici <b>12 cubes</b> rangés en 3 rangées de 4. Fais tourner le modèle et essaie de voir les fractions :</p>
<ul>
<li>une rangée de 4 cubes, c'est <b>1/3</b> de tous les cubes (4 sur 12) ;</li>
<li>une colonne de 3 cubes, c'est <b>1/4</b> (3 sur 12) ;</li>
<li>6 cubes, c'est <b>la moitié</b> : 6/12 = 1/2.</li>
</ul>
<p>Change les nombres avec les curseurs et cherche d'autres fractions !</p>`,
          scene: "blocks",
          options: { mode: "array", a: 3, b: 4 }
        },
        {
          label: "𓂀 Comme les anciens Égyptiens",
          html: `<p>Les anciens Égyptiens utilisaient presque uniquement des fractions avec le numérateur 1 (comme 1/2, 1/3, 1/4…), qu'on appelle aujourd'hui des <b>fractions unitaires</b>. Les autres, ils les écrivaient comme une somme de fractions différentes :</p>
<ul>
<li>3/4 s'écrivait <b>1/2 + 1/4</b></li>
<li>2/5 s'écrivait <b>1/3 + 1/15</b></li>
</ul>
<p>Ça paraît bizarre, mais c'est très pratique pour partager vraiment les choses ! Exemple : partager <b>3 pains entre 4 personnes</b>. Je coupe 2 pains en deux (4 moitiés) et 1 pain en quatre (4 quarts) : chacun reçoit <b>1/2 + 1/4</b> de pain. Tout le monde a des morceaux égaux !</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte des fractions : touche un nœud et découvre le pourquoi",
      nodes: [
        { id: "intero", label: "Unité (le tout)", x: 50, y: 6, color: "#2563eb", html: "La chose tout entière que l'on veut partager : une pizza, un groupe d'objets, un nombre, un euro…", why: "Une fraction n'a de sens que si l'on sait quelle est l'unité : 1/2 d'une petite pizza n'est pas égal à 1/2 d'une pizza géante !" },
        { id: "frazione", label: "Fraction", x: 50, y: 30, color: "#16a34a", html: "Un nombre qui indique une ou plusieurs parts égales d'une unité, écrit avec deux nombres et un trait.", why: "Le mot vient du latin <i>frangere</i>, qui veut dire « casser » : une fraction est une unité « cassée » en parts égales. Les fractions sont nées d'un besoin pratique : partager les récoltes, les terres, le pain et la bière en parts justes." },
        { id: "denominatore", label: "Dénominateur", x: 18, y: 50, color: "#f59e0b", html: "Le nombre sous le trait : en combien de parts égales l'unité est divisée.", why: "Il s'appelle ainsi parce qu'il « donne le nom » aux parts : dénominateur 4 → quarts, 10 → dixièmes, 100 → centièmes. Plus le dénominateur est grand, plus les parts sont petites." },
        { id: "numeratore", label: "Numérateur", x: 82, y: 50, color: "#ef4444", html: "Le nombre au-dessus du trait : combien de parts on prend.", why: "Il vient de « numéroter », c'est-à-dire compter : il compte les parts que l'on prend." },
        { id: "unita", label: "Fraction unitaire", x: 18, y: 76, color: "#a855f7", html: "Fraction avec le numérateur 1, comme 1/2, 1/5, 1/10.", why: "Ce sont les fractions les plus anciennes : les Égyptiens, il y a presque 4000 ans, utilisaient surtout celles-ci. Le papyrus Rhind (vers 1650 av. J.-C.), un cahier d'exercices d'un scribe nommé Ahmès, contient des tables pour transformer les autres fractions en sommes de fractions unitaires." },
        { id: "tipi", label: "Inférieure, supérieure ou égale à 1", x: 50, y: 62, color: "#0ea5e9", html: "Inférieure à 1 : plus petite que l'unité (3/4). Supérieure à 1 : plus grande (5/4). Égale à un entier : c'est un nombre entier (8/4 = 2).", why: "Il suffit de comparer le numérateur et le dénominateur : si tu prends moins de parts que celles en lesquelles tu as divisé l'unité, tu n'arrives pas à l'unité ; si tu en prends plus, il te faut une deuxième unité." },
        { id: "equivalenti", label: "Fractions égales", x: 82, y: 76, color: "#14b8a6", html: "Des fractions différentes qui indiquent la même quantité : 1/2 = 2/4 = 4/8.", why: "Si tu coupes chaque part en deux, le nombre total de parts double, et celui des parts que tu prends aussi : la quantité ne change pas. C'est pour ça qu'on peut multiplier (ou diviser) le numérateur et le dénominateur par le même nombre." },
        { id: "storia", label: "Le trait de fraction", x: 50, y: 92, color: "#64748b", html: "La façon d'écrire les fractions avec un nombre en haut et un en bas séparés par un trait.", why: "Les Babyloniens écrivaient les parts en base 60 (comme nous le faisons encore avec les minutes et les secondes). Le trait de fraction fut utilisé par les mathématiciens arabes au Moyen Âge et arriva en Europe grâce à <b>Léonard Fibonacci</b> de Pise, qui l'utilisa dans son <i>Liber Abaci</i> de 1202." }
      ],
      edges: [
        ["intero", "frazione", "se divise en parts égales →"],
        ["frazione", "denominatore", "sous le trait"],
        ["frazione", "numeratore", "au-dessus du trait"],
        ["frazione", "tipi", "peut être"],
        ["denominatore", "unita", "avec numérateur 1"],
        ["numeratore", "equivalenti", "× le même nombre"],
        ["denominatore", "equivalenti", "× le même nombre"],
        ["frazione", "storia", "s'écrit avec"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : types de fractions et calculs",
      questions: [
        { type: "mc", q: "7/4 est une fraction…", options: ["inférieure à 1", "supérieure à 1", "égale à un entier"], answer: 1, explain: "Le numérateur (7) est plus grand que le dénominateur (4) mais n'en est pas un multiple : elle est supérieure à 1." },
        { type: "num", q: "Combien vaut 1/5 de 35 ?", answer: 7, explain: "35 : 5 = 7." },
        { type: "mc", q: "Quelle fraction est égale à 2/3 ?", options: ["4/6", "3/2", "2/6"], answer: 0, explain: "En multipliant le numérateur et le dénominateur par 2 : 4/6." }
      ]
    }
  ],
  glossary: [
    { t: "Fraction", d: "Une ou plusieurs parts égales d'une unité." },
    { t: "Numérateur", d: "Le nombre au-dessus du trait : combien de parts on prend." },
    { t: "Dénominateur", d: "Le nombre sous le trait : en combien de parts égales on divise l'unité." },
    { t: "Fraction unitaire", d: "Une seule part de l'unité, avec le numérateur 1 (ex. 1/4)." },
    { t: "Fraction inférieure à 1", d: "Plus petite qu'une unité : numérateur plus petit que le dénominateur." },
    { t: "Fraction supérieure à 1", d: "Plus grande qu'une unité : numérateur plus grand que le dénominateur." },
    { t: "Fraction égale à un entier", d: "Égale à une ou plusieurs unités : numérateur multiple du dénominateur." },
    { t: "Fractions égales", d: "Des fractions différentes qui indiquent la même quantité." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Une pizza est divisée en 6 parts égales et tu en manges 1. Quelle fraction as-tu mangée ?", options: ["6/1", "1/6", "5/6"], answer: 1, explain: "1 part sur 6 : 1/6." },
      { type: "mc", q: "Quelle fraction est égale à un nombre entier ?", options: ["3/4", "9/3", "5/3"], answer: 1, explain: "9/3 = 3 unités." },
      { type: "tf", q: "1/3 est plus grand que 1/6.", answer: true, explain: "Même numérateur : les parts d'un tiers sont plus grandes que celles d'un sixième." },
      { type: "num", q: "Combien vaut 3/4 de 40 ?", answer: 30, explain: "40 : 4 = 10 ; 10 × 3 = 30." },
      { type: "mc", q: "Quelle fraction est la plus grande ?", options: ["2/7", "5/7", "3/7"], answer: 1, explain: "Même dénominateur : c'est le plus grand numérateur qui gagne." },
      { type: "text", q: "Comment s'appelle le nombre qui se trouve sous le trait de fraction ?", answer: ["dénominateur", "le dénominateur", "denominateur"], explain: "Le dénominateur." },
      { type: "tf", q: "4/8 et 1/2 sont des fractions égales.", answer: true, explain: "En divisant 4/8 par 4, on obtient 1/2." },
      { type: "num", q: "Combien de cinquièmes forment une unité ?", answer: 5, explain: "5/5 = 1." },
      { type: "order", q: "Range de la plus petite à la plus grande.", items: ["1/8", "1/4", "1/2", "3/2"], explain: "Plus le dénominateur est grand, plus les parts sont petites ; 3/2 est plus qu'une unité." },
      { type: "num", q: "Sarah a 18 bonbons et en mange 2/9. Combien en mange-t-elle ?", answer: 4, explain: "18 : 9 = 2 ; 2 × 2 = 4." }
    ],
    gen: [["fracOf", 2], ["fracEquiv", 2]]
  }
});
