TOPIC('fr', {
  id: "p5-mat-perimetro-area",
  title: "Périmètre et aire",
  intro: "Combien de ruban faut-il pour décorer le bord d'un tableau ? Combien de carreaux faut-il pour couvrir le sol ? Pour répondre, il faut deux mesures différentes : le <b>périmètre</b> et l'<b>aire</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Périmètre et aire : quelle est la différence ?",
      html: `<p>Chaque figure plane a deux mesures importantes :</p>
<ul>
<li>le <b>périmètre</b> est la <b>longueur du contour</b> de la figure. Il se mesure en unités de longueur : <b>cm, m, km…</b> On le note <b>P</b>.</li>
<li>l'<b>aire</b> est la <b>mesure de la surface</b>, c'est-à-dire de la place qu'occupe la figure « à l'intérieur » du contour. Elle se mesure en unités carrées : <b>cm², m², km²…</b> On la note <b>A</b>.</li>
</ul>
<p>Imagine un terrain de football : le <b>périmètre</b> est la longueur de la ligne blanche qui l'entoure ; l'<b>aire</b> est toute l'herbe à tondre.</p>
<p><b>1 cm²</b> (centimètre carré) est l'aire d'un petit carré de 1 cm de côté. Calculer une aire, c'est compter combien de ces petits carrés « tiennent » dans la figure.</p>`
    },
    {
      type: "svg",
      title: "Contour et surface",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#ffffff"/>
<text x="150" y="30" font-size="18" text-anchor="middle" fill="#dc2626" font-weight="bold">PÉRIMÈTRE = contour</text>
<rect x="50" y="60" width="200" height="120" fill="#fff7ed" stroke="#dc2626" stroke-width="6"/>
<text x="150" y="55" font-size="15" text-anchor="middle" fill="#dc2626">5 cm</text>
<text x="150" y="200" font-size="15" text-anchor="middle" fill="#dc2626">5 cm</text>
<text x="40" y="125" font-size="15" text-anchor="end" fill="#dc2626">3 cm</text>
<text x="260" y="125" font-size="15" fill="#dc2626">3 cm</text>
<text x="150" y="235" font-size="16" text-anchor="middle" fill="#111">P = 5+3+5+3 = 16 cm</text>
<text x="450" y="30" font-size="18" text-anchor="middle" fill="#2563eb" font-weight="bold">AIRE = surface</text>
<g fill="#bfdbfe" stroke="#2563eb" stroke-width="2">
<rect x="350" y="60" width="40" height="40"/><rect x="390" y="60" width="40" height="40"/><rect x="430" y="60" width="40" height="40"/><rect x="470" y="60" width="40" height="40"/><rect x="510" y="60" width="40" height="40"/>
<rect x="350" y="100" width="40" height="40"/><rect x="390" y="100" width="40" height="40"/><rect x="430" y="100" width="40" height="40"/><rect x="470" y="100" width="40" height="40"/><rect x="510" y="100" width="40" height="40"/>
<rect x="350" y="140" width="40" height="40"/><rect x="390" y="140" width="40" height="40"/><rect x="430" y="140" width="40" height="40"/><rect x="470" y="140" width="40" height="40"/><rect x="510" y="140" width="40" height="40"/>
</g>
<text x="450" y="235" font-size="16" text-anchor="middle" fill="#111">A = 5 × 3 = 15 cm²</text>
</svg>`,
      caption: "Le même rectangle : à gauche, on mesure le bord (périmètre) ; à droite, on compte les carreaux de 1 cm² (aire)."
    },
    {
      type: "text",
      title: "Comment calculer le périmètre",
      html: `<p>Pour calculer le périmètre d'un <b>polygone</b>, il suffit d'<b>additionner les longueurs de tous les côtés</b>.</p>
<p>Pour certaines figures, il y a des raccourcis :</p>
<table>
<tr><th>Figure</th><th>Périmètre</th></tr>
<tr><td>Carré (4 côtés égaux)</td><td>P = côté × 4</td></tr>
<tr><td>Rectangle</td><td>P = (longueur + largeur) × 2</td></tr>
<tr><td>Triangle équilatéral (3 côtés égaux)</td><td>P = côté × 3</td></tr>
<tr><td>Losange (4 côtés égaux)</td><td>P = côté × 4</td></tr>
<tr><td>Polygone régulier à n côtés</td><td>P = côté × n</td></tr>
</table>
<p><b>Attention :</b> avant d'additionner, toutes les mesures doivent être dans la <b>même unité</b> (par exemple toutes en cm).</p>`
    },
    {
      type: "svg",
      title: "Les formules des aires",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#ffffff"/>
<g font-size="15" fill="#111">
<rect x="20" y="30" width="80" height="80" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<text x="60" y="130" text-anchor="middle" font-weight="bold">Carré</text>
<text x="60" y="150" text-anchor="middle">A = c × c</text>
<rect x="140" y="45" width="130" height="65" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<text x="205" y="130" text-anchor="middle" font-weight="bold">Rectangle</text>
<text x="205" y="150" text-anchor="middle">A = b × h</text>
<polygon points="320,110 350,40 450,40 420,110" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<line x1="350" y1="40" x2="350" y2="110" stroke="#1d4ed8" stroke-dasharray="5 4" stroke-width="2"/>
<text x="356" y="85" font-size="13">h</text>
<text x="385" y="130" text-anchor="middle" font-weight="bold">Parallélogramme</text>
<text x="385" y="150" text-anchor="middle">A = b × h</text>
<polygon points="500,110 560,30 620,110" fill="#fbcfe8" stroke="#be185d" stroke-width="3"/>
<line x1="560" y1="30" x2="560" y2="110" stroke="#be185d" stroke-dasharray="5 4" stroke-width="2"/>
<text x="566" y="80" font-size="13">h</text>
<text x="560" y="130" text-anchor="middle" font-weight="bold">Triangle</text>
<text x="560" y="150" text-anchor="middle">A = b × h : 2</text>
<polygon points="110,180 160,230 110,280 60,230" fill="#ddd6fe" stroke="#6d28d9" stroke-width="3"/>
<line x1="60" y1="230" x2="160" y2="230" stroke="#6d28d9" stroke-dasharray="5 4" stroke-width="2"/>
<line x1="110" y1="180" x2="110" y2="280" stroke="#6d28d9" stroke-dasharray="5 4" stroke-width="2"/>
<text x="250" y="220" font-weight="bold">Losange</text>
<text x="250" y="240">A = D × d : 2</text>
<text x="250" y="260" font-size="13">(D et d = diagonales)</text>
<polygon points="420,280 450,190 540,190 600,280" fill="#fed7aa" stroke="#c2410c" stroke-width="3"/>
<line x1="450" y1="190" x2="450" y2="280" stroke="#c2410c" stroke-dasharray="5 4" stroke-width="2"/>
<text x="510" y="235" text-anchor="middle" font-weight="bold">Trapèze</text>
<text x="510" y="255" text-anchor="middle">A = (B + b) × h : 2</text>
</g>
</svg>`,
      caption: "b = base, h = hauteur, c = côté. La hauteur (en pointillés) est toujours perpendiculaire à la base."
    },
    {
      type: "text",
      title: "Pourquoi les formules marchent-elles ?",
      html: `<p>Les formules ne sont pas magiques : on les comprend avec une paire de ciseaux !</p>
<ul>
<li><b>Rectangle</b> : si la base mesure 5 cm et la hauteur 3 cm, il y a 3 rangées de 5 carreaux : 5 × 3 = 15 cm².</li>
<li><b>Parallélogramme</b> : coupe le triangle à gauche et déplace-le à droite : ça devient un rectangle avec la même base et la même hauteur. Donc A = b × h.</li>
<li><b>Triangle</b> : deux triangles égaux, mis ensemble, forment un parallélogramme. Donc l'aire du triangle est la <b>moitié</b> : A = b × h : 2.</li>
<li><b>Losange</b> : c'est la moitié du rectangle qui a pour côtés les deux diagonales : A = D × d : 2.</li>
<li><b>Trapèze</b> : deux trapèzes égaux, dont un retourné, forment un parallélogramme de base B + b : A = (B + b) × h : 2.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Atelier : change le rectangle",
      widget: "areaGrid",
      options: { w: 5, h: 3, max: 12 },
      caption: "Bouge les curseurs et observe comment changent le périmètre et l'aire. Arrives-tu à trouver deux rectangles qui ont la même aire mais un périmètre différent ?"
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre le périmètre et l'aire",
      intro: "Les formules ne rentrent pas dans ta tête ? Pas de problème : voici d'autres chemins pour comprendre vraiment ce que tu calcules.",
      tabs: [
        {
          label: "🐜 La fourmi et le peintre",
          html: "<p>Imagine une figure dessinée sur le sol.</p><ul><li>Une <b>fourmi</b> marche le long du bord jusqu'à revenir à son point de départ : le chemin qu'elle parcourt est le <b>périmètre</b>. Il se mesure en cm, m… (une longueur).</li><li>Un <b>peintre</b> doit colorier tout l'intérieur : la quantité de sol à peindre est l'<b>aire</b>. Elle se mesure en cm², m²… (des petits carrés).</li></ul><p>C'est pour ça qu'on ne peut pas comparer le périmètre et l'aire : l'un est un chemin, l'autre une surface !</p>"
        },
        {
          label: "🟦 Compter les carreaux",
          html: "<p>Utilise les curseurs : chaque carreau vaut 1 cm². Compte les carreaux d'une rangée, puis combien il y a de rangées. Rangées × carreaux par rangée = aire. Tu remarques que c'est exactement <b>base × hauteur</b> ! Puis fais le tour du bord en comptant les côtés des carreaux : c'est le périmètre.</p>",
          widget: "areaGrid",
          options: { w: 6, h: 4, max: 12 }
        },
        {
          label: "🧊 Avec les cubes 3D",
          html: "<p>Range les cubes en rangées bien alignées : 5 cubes par rangée, 3 rangées. Combien y en a-t-il ? 5 × 3 = 15. Regarde-les d'en haut : leur « empreinte » est un rectangle d'aire 15 carreaux. Change les nombres avec les curseurs et observe comment le rectangle grandit.</p>",
          scene: "blocks",
          options: { mode: "array", a: 5, b: 3 }
        },
        {
          label: "✂️ Découpe et recompose",
          html: "<p>L'astuce des mathématiciens : <b>transformer une figure en une autre que l'on sait déjà mesurer</b>, sans perdre ni ajouter de papier.</p><ul><li><b>Parallélogramme</b> : coupe le triangle à gauche et déplace-le à droite : ça devient un rectangle avec la même base et la même hauteur. Aire = b × h.</li><li><b>Triangle</b> : deux triangles égaux mis ensemble forment un parallélogramme. Donc le triangle en est la moitié : Aire = b × h : 2.</li><li><b>Trapèze</b> : deux trapèzes égaux, dont un retourné, forment un parallélogramme de base (B + b). Aire = (B + b) × h : 2.</li></ul><p>Essaie pour de vrai avec une feuille et des ciseaux !</p>",
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg"><polygon points="40,200 100,80 260,80 200,200" fill="#93c5fd" stroke="#1e3a8a" stroke-width="3"/><line x1="100" y1="80" x2="100" y2="200" stroke="#ef4444" stroke-width="3" stroke-dasharray="6 4"/><polygon points="40,200 100,80 100,200" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/><text x="150" y="235" font-size="18" text-anchor="middle" fill="#1e3a8a" font-weight="bold">parallélogramme</text><text x="300" y="150" font-size="40" text-anchor="middle" fill="#334155">→</text><rect x="360" y="80" width="160" height="120" fill="#93c5fd" stroke="#1e3a8a" stroke-width="3"/><polygon points="460,200 520,80 520,200" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/><text x="440" y="235" font-size="18" text-anchor="middle" fill="#1e3a8a" font-weight="bold">rectangle : b × h</text><text x="130" y="40" font-size="16" text-anchor="middle" fill="#b91c1c">je coupe ici le triangle rouge…</text><text x="470" y="40" font-size="16" text-anchor="middle" fill="#b91c1c">…et je le déplace ici</text></svg>`
        },
        {
          label: "🏺 Les arpenteurs égyptiens",
          html: "<p>Chaque année, le <b>Nil</b> débordait et effaçait les limites des champs. Les « tendeurs de cordes » égyptiens (les arpenteurs) devaient remesurer les terrains pour savoir combien d'impôts chaque paysan devait payer.</p><p>Ils utilisaient une <b>corde à 12 nœuds</b> placés à la même distance : en la tendant en forme de triangle avec des côtés de 3, 4 et 5 espaces, ils obtenaient un <b>angle droit</b> parfait, et à partir de là ils traçaient des rectangles. Ensuite, ils divisaient les champs irréguliers en rectangles et en triangles, exactement comme nous !</p><p>Le mot <b>géométrie</b> vient du grec et veut justement dire « mesure de la terre ».</p>",
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="240" fill="#fef3c7"/><polygon points="180,210 315,210 315,30" fill="none" stroke="#92400e" stroke-width="5"/><g fill="#78350f"><circle cx="180" cy="210" r="7"/><circle cx="225" cy="210" r="7"/><circle cx="270" cy="210" r="7"/><circle cx="315" cy="210" r="7"/><circle cx="315" cy="165" r="7"/><circle cx="315" cy="120" r="7"/><circle cx="315" cy="75" r="7"/><circle cx="315" cy="30" r="7"/><circle cx="288" cy="66" r="7"/><circle cx="261" cy="102" r="7"/><circle cx="234" cy="138" r="7"/><circle cx="207" cy="174" r="7"/></g><rect x="297" y="192" width="18" height="18" fill="none" stroke="#dc2626" stroke-width="3"/><text x="248" y="234" font-size="18" text-anchor="middle" fill="#78350f" font-weight="bold">3 espaces</text><text x="330" y="125" font-size="18" fill="#78350f" font-weight="bold">4 espaces</text><text x="225" y="95" font-size="18" text-anchor="end" fill="#78350f" font-weight="bold">5 espaces</text><text x="470" y="205" font-size="16" text-anchor="middle" fill="#dc2626">angle droit !</text><text x="470" y="60" font-size="16" text-anchor="middle" fill="#78350f">12 nœuds en tout</text></svg>`
        },
        {
          label: "📐 La formule de Héron",
          html: "<p>Et si d'un triangle tu ne connais que les <b>trois côtés</b> et pas la hauteur ? Héron d'Alexandrie (Ier siècle apr. J.-C.) a trouvé une formule spéciale :</p><ol><li>calcule le demi-périmètre : s = (a + b + c) : 2</li><li>Aire = √( s × (s − a) × (s − b) × (s − c) )</li></ol><p><b>Exemple</b> : côtés de 3, 4 et 5 cm → s = 6 ; Aire = √(6 × 3 × 2 × 1) = √36 = <b>6 cm²</b>. Vérifie avec la formule habituelle : le triangle est rectangle, base 3 et hauteur 4 → 3 × 4 : 2 = 6 cm². Même résultat par deux chemins différents !</p>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "Même aire, périmètre différent !",
      html: `<p>Un rectangle 6 × 2 et un carré 4 × 4 ont des périmètres <b>égaux</b> (16 cm), mais des aires différentes : 12 cm² et 16 cm² !</p>
<p>Et inversement : un rectangle 12 × 1 et un rectangle 4 × 3 ont la <b>même aire</b> (12 cm²), mais des périmètres de 26 cm et 14 cm.</p>
<p>À périmètre égal, le rectangle qui a la plus grande aire est toujours le <b>carré</b>. C'est pour ça que les abeilles construisent des alvéoles hexagonales et que les paysans, autrefois, cherchaient des champs le plus « carrés » possible : moins de clôture pour plus de terrain !</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : périmètre",
      questions: [
        { type: "num", q: "Un carré a un côté de 7 cm. Combien mesure son périmètre ?", answer: 28, tol: 0, unit: "cm", explain: "P = 7 × 4 = 28 cm." },
        { type: "num", q: "Un rectangle a une base de 9 cm et une hauteur de 4 cm. Combien mesure son périmètre ?", answer: 26, tol: 0, unit: "cm", explain: "P = (9 + 4) × 2 = 26 cm." },
        { type: "mc", q: "Dans quelle unité mesure-t-on le périmètre ?", options: ["cm²", "cm", "kg", "litres"], answer: 1, explain: "Le périmètre est une longueur : il se mesure en cm, m, km…" }
      ]
    },
    {
      type: "example",
      title: "Exemple pratique : la clôture du potager",
      html: `<p>Papi a un potager rectangulaire long de <b>12 m</b> et large de <b>8 m</b>. Il veut l'entourer d'un grillage qui coûte <b>3 € le mètre</b>.</p>
<ol>
<li>Combien de grillage faut-il ? C'est le <b>périmètre</b> : P = (12 + 8) × 2 = <b>40 m</b>.</li>
<li>Combien dépense-t-il ? 40 × 3 = <b>120 €</b>.</li>
<li>Il veut aussi semer tout le terrain : quelle est la surface ? C'est l'<b>aire</b> : A = 12 × 8 = <b>96 m²</b>.</li>
<li>Un sachet de graines suffit pour 8 m² : il faut 96 : 8 = <b>12 sachets</b>.</li>
</ol>`
    },
    {
      type: "example",
      title: "Exemple pratique : les carreaux de la chambre",
      html: `<p>Le sol de la chambre est un rectangle de <b>4 m × 3 m</b>. Nous voulons le couvrir avec des carreaux carrés de <b>50 cm</b> de côté.</p>
<ol>
<li>Aire du sol : 4 × 3 = <b>12 m²</b>.</li>
<li>Un carreau : 0,5 m × 0,5 m = <b>0,25 m²</b>.</li>
<li>Carreaux nécessaires : 12 : 0,25 = <b>48 carreaux</b>.</li>
</ol>
<p>Vérification avec une autre méthode : dans 4 m il tient 8 carreaux, dans 3 m il en tient 6. 8 × 6 = 48. ✔️</p>`
    },
    {
      type: "remember",
      title: "Les unités de mesure des surfaces",
      html: `<p>Les mesures de surface « sautent » de <b>100 en 100</b>, parce qu'un grand carré contient 10 rangées de 10 petits carrés :</p>
<p><b>1 m² = 100 dm² = 10 000 cm²</b></p>
<p><b>1 dm² = 100 cm²</b> &nbsp;&nbsp; <b>1 cm² = 100 mm²</b></p>
<p>Pour les terrains, on utilise aussi l'<b>hectare</b> (1 ha = 10 000 m², environ un terrain de football et demi) et le <b>km²</b> (1 km² = 1 000 000 m²).</p>`
    },
    {
      type: "curiosity",
      title: "Quelle est la taille de l'Italie ?",
      html: `<p>L'Italie a une superficie d'environ <b>302 000 km²</b>. La plus grande région est la <b>Sicile</b> (environ 25 800 km²), la plus petite est la <b>Vallée d'Aoste</b> (environ 3 260 km²).</p>
<p>Le plus petit État du monde, la <b>Cité du Vatican</b>, mesure seulement 0,44 km² : moins de 62 terrains de football !</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : aire",
      questions: [
        { type: "num", q: "Aire d'un rectangle de base 8 cm et de hauteur 5 cm ?", answer: 40, tol: 0, unit: "cm²", explain: "A = 8 × 5 = 40 cm²." },
        { type: "num", q: "Aire d'un triangle de base 10 cm et de hauteur 6 cm ?", answer: 30, tol: 0, unit: "cm²", explain: "A = 10 × 6 : 2 = 30 cm²." },
        { type: "tf", q: "Deux figures qui ont le même périmètre ont toujours la même aire.", answer: false, explain: "Non : un rectangle 6 × 2 et un carré 4 × 4 ont le même périmètre (16) mais des aires différentes (12 et 16)." },
        { type: "num", q: "Combien y a-t-il de cm² dans 1 dm² ?", answer: 100, tol: 0, unit: "cm²", explain: "1 dm² = 10 cm × 10 cm = 100 cm²." }
      ]
    },
    {
      type: "3d",
      title: "De l'aire au volume : ajoutons des étages",
      scene: "blocks",
      options: { mode: "volume", a: 4, b: 3, c: 2 },
      caption: "Un rectangle de 4 × 3 = 12 carreaux est la base. Si tu empiles 2 étages de cubes, tu obtiens 12 × 2 = 24 cubes : c'est le volume, que tu étudieras au collège. L'aire compte les carreaux, le volume compte les cubes."
    },
    {
      type: "conceptMap",
      title: "Carte : des unités de mesure aux formules",
      nodes: [
        { id: "unita", label: "Unités de mesure", x: 50, y: 6, color: "#64748b", html: "Pour mesurer, il faut un étalon identique pour tout le monde : le mètre (m) avec ses multiples et sous-multiples.", why: "Avant, chaque ville avait ses propres mesures (pieds, coudées, empans…) et cela provoquait des disputes dans le commerce. Pendant la Révolution française (1791-1799), on a inventé le mètre, lié à la mesure de la Terre, et depuis, le système métrique s'est répandu dans presque le monde entier." },
        { id: "lunghezza", label: "Longueur (cm, m)", x: 22, y: 26, color: "#3b82f6", html: "Mesure d'une ligne : un côté, un contour, une route.", why: "On compte combien de fois l'unité (par exemple 1 cm) tient le long de la ligne." },
        { id: "quadratino", label: "Carré unité (cm²)", x: 78, y: 26, color: "#f59e0b", html: "Un carré de 1 cm de côté : son aire est 1 cm².", why: "Pour mesurer une surface, il nous faut un petit morceau de surface comme étalon. On choisit le carré parce qu'il s'emboîte avec d'autres carrés sans laisser de trous et couvre tout le plan." },
        { id: "perimetro", label: "Périmètre", x: 22, y: 48, color: "#2563eb", html: "Somme des longueurs de tous les côtés.", why: "C'est la longueur du contour : il suffit d'additionner les morceaux. Dans les polygones réguliers, les côtés sont égaux, donc côté × nombre de côtés." },
        { id: "rettangolo", label: "Aire du rectangle : b × h", x: 78, y: 48, color: "#ea580c", html: "Base fois hauteur.", why: "Dans le rectangle, les petits carrés se rangent en lignes et en colonnes : il y a h rangées de b carrés, donc b × h carrés en tout. C'est la multiplication en quadrillage !" },
        { id: "parall", label: "Parallélogramme : b × h", x: 55, y: 68, color: "#16a34a", html: "Même formule que le rectangle.", why: "En coupant un triangle et en le déplaçant, on obtient un rectangle avec la même base et la même hauteur : l'aire ne change pas parce qu'on n'enlève et n'ajoute rien (principe de la décomposition)." },
        { id: "triangolo", label: "Triangle : b × h : 2", x: 85, y: 76, color: "#dc2626", html: "Base fois hauteur divisé par 2.", why: "Deux triangles égaux forment un parallélogramme : le triangle en est la moitié." },
        { id: "trapezio", label: "Trapèze : (B + b) × h : 2", x: 30, y: 82, color: "#9333ea", html: "Somme des bases fois hauteur divisé par 2.", why: "Deux trapèzes égaux, dont un retourné, forment un parallélogramme de base B + b : le trapèze en est la moitié." },
        { id: "rombo", label: "Losange : D × d : 2", x: 60, y: 94, color: "#0891b2", html: "Grande diagonale fois petite diagonale divisé par 2.", why: "Le losange tient dans un rectangle dont les côtés sont égaux aux diagonales, et il en occupe exactement la moitié (les 4 petits triangles à l'extérieur sont égaux aux 4 à l'intérieur)." }
      ],
      edges: [ ["unita", "lunghezza", "pour les lignes"], ["unita", "quadratino", "pour les surfaces"], ["lunghezza", "perimetro", "on additionne"], ["quadratino", "rettangolo", "on compte par rangées"], ["rettangolo", "parall", "découpage"], ["parall", "triangolo", "moitié"], ["parall", "trapezio", "moitié de deux trapèzes"], ["rettangolo", "rombo", "moitié"] ]
    }
  ],
  glossary: [
    { t: "Périmètre", d: "Longueur du contour d'une figure plane." },
    { t: "Aire", d: "Mesure de la surface délimitée par une figure." },
    { t: "Polygone", d: "Figure plane fermée délimitée par des segments (les côtés)." },
    { t: "Base", d: "Le côté sur lequel « repose » la figure." },
    { t: "Hauteur", d: "Segment perpendiculaire à la base qui arrive au côté ou au sommet opposé." },
    { t: "Diagonale", d: "Segment qui relie deux sommets non consécutifs d'un polygone." },
    { t: "Mètre carré (m²)", d: "Aire d'un carré de 1 mètre de côté." },
    { t: "Figures de même aire", d: "Des figures qui ont la même aire, même si elles ont une forme différente." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Le périmètre, c'est…", options: ["la surface de la figure", "la longueur du contour", "le nombre de côtés", "la hauteur de la figure"], answer: 1, explain: "Le périmètre est la longueur du contour." },
      { type: "mc", q: "Quelle est la formule de l'aire du triangle ?", options: ["b × h", "b + h", "b × h : 2", "c × 3"], answer: 2, explain: "Le triangle est la moitié d'un parallélogramme : A = b × h : 2." },
      { type: "num", q: "Périmètre d'un triangle équilatéral de côté 9 cm ?", answer: 27, tol: 0, unit: "cm", explain: "P = 9 × 3 = 27 cm." },
      { type: "num", q: "Aire d'un carré de côté 6 m ?", answer: 36, tol: 0, unit: "m²", explain: "A = 6 × 6 = 36 m²." },
      { type: "num", q: "Aire d'un losange de diagonales 10 cm et 6 cm ?", answer: 30, tol: 0, unit: "cm²", explain: "A = D × d : 2 = 10 × 6 : 2 = 30 cm²." },
      { type: "num", q: "Aire d'un trapèze de bases 8 cm et 4 cm et de hauteur 5 cm ?", answer: 30, tol: 0, unit: "cm²", explain: "A = (8 + 4) × 5 : 2 = 30 cm²." },
      { type: "tf", q: "L'aire se mesure en unités carrées, comme les cm² ou les m².", answer: true, explain: "L'aire mesure une surface : on utilise des unités carrées." },
      { type: "num", q: "Un rectangle a une aire de 24 cm² et une base de 6 cm. Combien mesure sa hauteur ?", answer: 4, tol: 0, unit: "cm", explain: "Formule inverse : h = A : b = 24 : 6 = 4 cm." },
      { type: "num", q: "Un carré a un périmètre de 36 cm. Combien mesure son côté ?", answer: 9, tol: 0, unit: "cm", explain: "Formule inverse : c = P : 4 = 36 : 4 = 9 cm." },
      { type: "mc", q: "Quel rectangle a la plus grande aire ?", options: ["10 × 1", "5 × 2", "4 × 3", "6 × 1"], answer: 2, explain: "Aires : 10, 10, 12, 6. Le 4 × 3 gagne avec 12." },
      { type: "num", q: "Combien y a-t-il de m² dans un hectare ?", answer: 10000, tol: 0, unit: "m²", explain: "1 hectare = 10 000 m² (un carré de 100 m × 100 m)." }
    ],
    gen: [["perimRect", 1], ["areaRect", 1], ["areaTri", 1]]
  }
});
