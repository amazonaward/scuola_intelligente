TOPIC('fr', {
  id: "l1-mat-insiemi-logica",
  title: "Ensembles et logique",
  intro: "\"Tous les chats sont des mammifères ; Minou est un chat ; donc Minou est un mammifère.\" Raisonner correctement n'est pas un art mystérieux : cela obéit à des règles précises. Dans cette leçon, nous apprenons le langage avec lequel les mathématiques mettent le monde en ordre, les <b>ensembles</b>, et celui avec lequel elles argumentent, la <b>logique</b> : propositions, connecteurs, implications et quantificateurs. Ce sont les outils que tu utiliseras dans toutes les mathématiques du lycée, mais aussi en droit, en informatique et dans la vie de tous les jours (par exemple pour démonter un raisonnement incorrect).",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Qu'est-ce qu'un ensemble ?",
      html: `<p>Un <b>ensemble</b> est une collection bien définie d'objets, appelés <b>éléments</b> : étant donné un objet, il doit être possible de décider sans ambiguïté s'il appartient ou non à l'ensemble. \"Les nombres pairs inférieurs à 10\" forment un ensemble ; \"les beaux films\", non, car \"beau\" est subjectif.</p>
<p>Notation : on désigne les ensembles par des lettres majuscules (A, B, C…), les éléments par des minuscules. On écrit :</p>
<ul>
<li><b>a ∈ A</b> : a <b>appartient</b> à A ; <b>a ∉ A</b> : a n'appartient pas à A.</li>
<li><b>∅</b> : l'<b>ensemble vide</b>, qui ne contient aucun élément (par exemple les solutions réelles de x² = −1).</li>
<li>Les ensembles de nombres : ℕ (entiers naturels), ℤ (entiers relatifs), ℚ (rationnels), ℝ (réels).</li>
</ul>
<p>Il y a trois façons de <b>définir</b> un ensemble :</p>
<ol>
<li><b>En extension</b> (par énumération) : A = {2, 4, 6, 8}. L'ordre ne compte pas et les éléments ne se répètent pas : {1, 2, 3} = {3, 2, 1} = {1, 1, 2, 3}.</li>
<li><b>En compréhension</b> (par une propriété caractéristique) : A = {x ∈ ℕ | x est pair et x &lt; 10}. On lit \"x tel que\".</li>
<li><b>Par un diagramme d'Euler-Venn</b> : une ligne fermée qui entoure ses éléments. Il a été utilisé par Leonhard Euler (1768) et systématisé par John Venn (1880).</li>
</ol>
<p>Un ensemble est <b>fini</b> s'il a un nombre fini d'éléments (son <b>cardinal</b> |A| est ce nombre), <b>infini</b> sinon (ℕ, ℤ, ℝ…). Georg Cantor (1845-1918) a fondé la théorie des ensembles et montré que les infinis peuvent eux aussi avoir des \"tailles\" différentes : ℕ et ℝ sont tous deux infinis, mais ils n'ont pas la même taille.</p>`
    },
    {
      type: "text",
      title: "Sous-ensembles",
      html: `<p>B est un <b>sous-ensemble</b> (ou une partie) de A (B ⊆ A, « B est inclus dans A ») si <b>tout</b> élément de B appartient aussi à A. Si de plus B ≠ A, B est un sous-ensemble <b>strict</b> (B ⊂ A).</p>
<p>Exemple : ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. De même, {2, 4} ⊂ {1, 2, 3, 4}.</p>
<ul>
<li>L'ensemble vide est un sous-ensemble de <b>tout</b> ensemble (∅ ⊆ A : il n'y a aucun élément qui viole la condition).</li>
<li>Tout ensemble est un sous-ensemble de lui-même (A ⊆ A).</li>
<li>Deux ensembles sont <b>égaux</b> si A ⊆ B et B ⊆ A, c'est-à-dire s'ils ont les mêmes éléments.</li>
</ul>
<p>L'ensemble de <b>tous les sous-ensembles</b> de A s'appelle l'<b>ensemble des parties</b> 𝒫(A). Si A a n éléments, 𝒫(A) en a <b>2<sup>n</sup></b> : pour chaque élément, on choisit \"il y est\" ou \"il n'y est pas\". Pour A = {a, b, c}, il y a 2³ = 8 sous-ensembles : ∅, {a}, {b}, {c}, {a, b}, {a, c}, {b, c}, {a, b, c}.</p>
<p>Attention à ne pas confondre ∈ et ⊂ : 2 ∈ {1, 2, 3} (2 est un <i>élément</i>), {2} ⊂ {1, 2, 3} (l'ensemble {2} est un <i>sous-ensemble</i>).</p>`
    },
    {
      type: "svg",
      title: "Opérations sur les ensembles avec les diagrammes de Venn",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="10" y="20" width="570" height="270" fill="none" stroke="#475569" stroke-width="2"/>
<text x="22" y="46" font-size="16" fill="#475569" font-weight="bold">U (ensemble universel)</text>
<circle cx="230" cy="165" r="95" fill="#3b82f6" fill-opacity="0.35" stroke="#1d4ed8" stroke-width="3"/>
<circle cx="350" cy="165" r="95" fill="#f59e0b" fill-opacity="0.35" stroke="#b45309" stroke-width="3"/>
<text x="165" y="170" font-size="22" fill="#1e3a8a" font-weight="bold">A \\ B</text>
<text x="290" y="170" font-size="20" fill="#1f2937" font-weight="bold">A ∩ B</text>
<text x="370" y="170" font-size="22" fill="#78350f" font-weight="bold">B \\ A</text>
<text x="190" y="80" font-size="22" fill="#1d4ed8" font-weight="bold">A</text>
<text x="380" y="80" font-size="22" fill="#b45309" font-weight="bold">B</text>
<text x="480" y="130" font-size="16" fill="#1f2937">A ∪ B : toute la partie colorée</text>
<text x="480" y="160" font-size="16" fill="#1f2937">A ∩ B : partie commune</text>
<text x="480" y="190" font-size="16" fill="#1f2937">A \\ B : seulement dans A</text>
<text x="480" y="220" font-size="16" fill="#1f2937">complémentaire : hors de A</text>
</svg>`,
      caption: "Réunion (tout ce qui est dans A ou dans B), intersection (ce qui est dans les deux), différence (dans A mais pas dans B) et complémentaire (dans l'univers mais pas dans A)."
    },
    {
      type: "text",
      title: "Les opérations sur les ensembles",
      html: `<p>Soient A et B deux ensembles contenus dans un ensemble <b>universel</b> (ou référentiel) U.</p>
<ul>
<li><b>Réunion</b> (ou union) A ∪ B = {x | x ∈ A <b>ou</b> x ∈ B} (le \"ou\" est <i>inclusif</i> : cela convient aussi si x est dans les deux).</li>
<li><b>Intersection</b> A ∩ B = {x | x ∈ A <b>et</b> x ∈ B}. Si A ∩ B = ∅, les deux ensembles sont <b>disjoints</b>.</li>
<li><b>Différence</b> A \\ B = {x | x ∈ A et x ∉ B}.</li>
<li><b>Complémentaire</b> de A dans U : Ā = U \\ A = {x ∈ U | x ∉ A}.</li>
<li><b>Produit cartésien</b> A × B = {(a, b) | a ∈ A, b ∈ B} : l'ensemble des couples <i>ordonnés</i>. Si |A| = m et |B| = n, alors |A × B| = m·n. Il tient son nom de René Descartes, qui, avec le repère cartésien, a associé à chaque point un couple de nombres (ℝ × ℝ).</li>
</ul>
<p>Propriétés utiles :</p>
<ul>
<li>commutativité et associativité de ∪ et ∩ ; distributivité : A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C) ;</li>
<li><b>Lois de De Morgan</b> : le complémentaire de A ∪ B est Ā ∩ B̄ ; le complémentaire de A ∩ B est Ā ∪ B̄ (Augustus De Morgan, 1806-1871) ;</li>
<li><b>Formule d'inclusion-exclusion</b> pour les ensembles finis : |A ∪ B| = |A| + |B| − |A ∩ B| (on retire l'intersection, sinon elle serait comptée deux fois).</li>
</ul>
<p>Une <b>partition</b> de A est une famille de sous-ensembles non vides, deux à deux disjoints, dont la réunion est A : par exemple, ℤ est partagé entre nombres pairs et impairs.</p>`
    },
    {
      type: "example",
      title: "Exemple : le sondage sur les activités",
      html: `<p>Dans une classe de 28 élèves, 15 pratiquent un sport (S), 12 jouent d'un instrument (M) et 6 font les deux. Combien ne font ni l'un ni l'autre ?</p>
<ol>
<li>|S ∪ M| = |S| + |M| − |S ∩ M| = 15 + 12 − 6 = <b>21</b>.</li>
<li>Ne font ni l'un ni l'autre : 28 − 21 = <b>7</b> élèves.</li>
<li>Seulement du sport : 15 − 6 = 9 ; seulement de la musique : 12 − 6 = 6.</li>
</ol>
<p>Vérification : 9 + 6 + 6 + 7 = 28 ✔. Si nous avions simplement additionné 15 + 12 = 27, nous aurions compté deux fois les 6 élèves qui font les deux : c'est l'erreur classique dans les sondages.</p>`
    },
    {
      type: "widget",
      title: "Quelle zone du diagramme ?",
      widget: "classify",
      options: { groups: ["Seulement A (multiples de 2)", "Seulement B (multiples de 3)", "À la fois dans A et dans B", "Ni dans A ni dans B"], items: [
        ["1", 3], ["2", 0], ["3", 1], ["4", 0], ["5", 3], ["6", 2],
        ["8", 0], ["9", 1], ["10", 0], ["11", 3], ["12", 2], ["7", 3]
      ] },
      caption: "Avec A = multiples de 2 et B = multiples de 3 entre 1 et 12 : l'intersection contient les multiples de 6."
    },
    {
      type: "quiz",
      title: "Mini-quiz : ensembles",
      questions: [
        { type: "num", q: "A = {1, 2, 3, 4} et B = {3, 4, 5}. Combien d'éléments a A ∪ B ?", answer: 5, explain: "A ∪ B = {1, 2, 3, 4, 5} : 5 éléments (4 + 3 − 2 = 5)." },
        { type: "num", q: "Combien de sous-ensembles a un ensemble de 4 éléments ?", answer: 16, explain: "2⁴ = 16, y compris ∅ et l'ensemble lui-même." },
        { type: "mc", q: "Quelle affirmation est correcte ?", options: ["2 ⊂ {1, 2, 3}", "{2} ⊂ {1, 2, 3}", "{2} ∈ {1, 2, 3}"], answer: 1, explain: "{2} est un ensemble contenu dans {1, 2, 3}, donc un sous-ensemble ; 2 est un élément." }
      ]
    },
    {
      type: "text",
      title: "Propositions et connecteurs logiques",
      html: `<p>Une <b>proposition</b> est une affirmation dont on peut dire sans ambiguïté qu'elle est <b>vraie</b> (V) ou <b>fausse</b> (F). \"7 est un nombre premier\" (V) et \"8 est impair\" (F) en sont. \"Quelle heure est-il ?\" et \"x + 1 = 5\" (tant que nous ne savons pas qui est x) n'en sont pas. Cette dernière est un <b>prédicat</b> : elle devient une proposition quand on remplace x par une valeur ou qu'on utilise un quantificateur.</p>
<p>Avec les <b>connecteurs</b>, on construit des propositions composées, dont la valeur de vérité dépend uniquement de celles de leurs composantes :</p>
<table>
<tr><th>Nom</th><th>Symbole</th><th>Se lit</th><th>Vraie quand…</th></tr>
<tr><td>Négation</td><td>¬p</td><td>non p</td><td>p est fausse</td></tr>
<tr><td>Conjonction</td><td>p ∧ q</td><td>p et q</td><td>les <b>deux</b> sont vraies</td></tr>
<tr><td>Disjonction</td><td>p ∨ q</td><td>p ou q (inclusif)</td><td>au moins une est vraie</td></tr>
<tr><td>Implication</td><td>p ⇒ q</td><td>si p alors q</td><td>elle n'est fausse que si p est V et q est F</td></tr>
<tr><td>Équivalence</td><td>p ⇔ q</td><td>p si et seulement si q</td><td>p et q ont la même valeur</td></tr>
</table>
<p><b>Table de vérité</b> de p ⇒ q :</p>
<table>
<tr><th>p</th><th>q</th><th>p ⇒ q</th></tr>
<tr><td>V</td><td>V</td><td>V</td></tr>
<tr><td>V</td><td>F</td><td><b>F</b></td></tr>
<tr><td>F</td><td>V</td><td>V</td></tr>
<tr><td>F</td><td>F</td><td>V</td></tr>
</table>
<p>L'implication surprend : si p est fausse, \"p ⇒ q\" est vraie <i>quelle que soit</i> q. Pense à une promesse : \"s'il pleut demain, je t'apporte un parapluie\". S'il ne pleut pas, je n'ai trahi ma promesse dans aucun cas. La seule façon de me contredire, c'est qu'il pleuve et que je ne te l'apporte pas.</p>`
    },
    {
      type: "example",
      title: "Exemple : réciproque, contraposée et négation",
      html: `<p>Partons de : <b>p ⇒ q</b> = \"si un nombre est multiple de 6, alors il est pair\" (vraie).</p>
<ul>
<li><b>Réciproque</b> : q ⇒ p = \"s'il est pair, alors il est multiple de 6\" → <b>fausse</b> (4 est pair mais n'est pas multiple de 6).</li>
<li><b>Contraposée</b> : ¬q ⇒ ¬p = \"si un nombre n'est pas pair (impair), alors il n'est pas multiple de 6\" → <b>vraie</b>. La contraposée est <b>toujours équivalente</b> à l'implication de départ.</li>
<li><b>Négation</b> de l'implication : p ∧ ¬q = \"il est multiple de 6 et il n'est pas pair\" → fausse, comme il se doit.</li>
</ul>
<p>Cela explique deux façons de parler différentes :</p>
<ul>
<li>p est une condition <b>suffisante</b> pour q (p ⇒ q) : être multiple de 6 suffit pour être pair ;</li>
<li>q est une condition <b>nécessaire</b> pour p : s'il n'est pas pair, il ne peut pas être multiple de 6.</li>
</ul>
<p>Si les deux implications sont vraies (p ⇔ q), p est une condition nécessaire et suffisante pour q. Exemple : un nombre est divisible par 6 si et seulement s'il est divisible par 2 et par 3.</p>`
    },
    {
      type: "text",
      title: "Tautologies, contradictions et raisonnement",
      html: `<p>Une proposition composée est une <b>tautologie</b> si elle est vraie pour toutes les valeurs de vérité de ses composantes (p ∨ ¬p : \"soit il pleut, soit il ne pleut pas\"), une <b>contradiction</b> si elle est toujours fausse (p ∧ ¬p). Deux propositions sont <b>logiquement équivalentes</b> si elles ont la même table de vérité. Équivalences importantes :</p>
<ul>
<li>p ⇒ q ≡ ¬q ⇒ ¬p (contraposition) ;</li>
<li>p ⇒ q ≡ ¬p ∨ q ;</li>
<li><b>De Morgan</b> : ¬(p ∧ q) ≡ ¬p ∨ ¬q et ¬(p ∨ q) ≡ ¬p ∧ ¬q. Exemple : la négation de \"il est grand et blond\" est \"il n'est pas grand <i>ou</i> il n'est pas blond\".</li>
</ul>
<p>Sur la contraposition repose le <b>raisonnement par l'absurde</b> : pour démontrer p, on suppose ¬p et on aboutit à une contradiction. C'est ainsi que les Grecs anciens ont démontré que √2 n'est pas rationnel et qu'il existe une infinité de nombres premiers.</p>
<p>Les <b>syllogismes</b> d'Aristote (IV<sup>e</sup> siècle av. J.-C.) constituent le premier système de logique formelle : \"Tous les hommes sont mortels ; Socrate est un homme ; donc Socrate est mortel\". En termes d'ensembles : si U ⊆ M et s ∈ U, alors s ∈ M. Logique et ensembles sont les deux faces d'une même médaille : ∧ correspond à ∩, ∨ à ∪, ¬ au complémentaire, ⇒ à ⊆.</p>`
    },
    {
      type: "text",
      title: "Prédicats et quantificateurs",
      html: `<p>Un <b>prédicat</b> P(x) est une phrase contenant une variable, qui devient vraie ou fausse quand on fixe x. Les <b>quantificateurs</b> transforment un prédicat en proposition :</p>
<ul>
<li><b>∀x P(x)</b> : \"pour tout x, P(x) est vraie\" (quantificateur universel) ;</li>
<li><b>∃x P(x)</b> : \"il existe au moins un x pour lequel P(x) est vraie\" (quantificateur existentiel) ;</li>
<li><b>∃!x P(x)</b> : \"il existe un et un seul x\".</li>
</ul>
<p>Exemples dans ℝ : ∀x, x² ≥ 0 (vraie) ; ∃x, x² = 4 (vraie : x = 2 ou −2) ; ∃x, x² = −1 (fausse dans ℝ) ; ∀x, x &gt; 3 (fausse : le contre-exemple x = 0 suffit).</p>
<p><b>Comment les nier</b> (très important) :</p>
<ul>
<li>¬(∀x P(x)) ≡ ∃x ¬P(x) : pour nier \"tous\", il suffit d'<b>un contre-exemple</b>. La négation de \"tous les cygnes sont blancs\" est \"il existe au moins un cygne qui n'est pas blanc\" (et non \"tous les cygnes sont noirs\" !). Des cygnes noirs ont réellement été découverts par les Européens en Australie, à la fin du XVII<sup>e</sup> siècle.</li>
<li>¬(∃x P(x)) ≡ ∀x ¬P(x) : pour nier \"il existe\", il faut démontrer qu'<b>aucun</b> élément ne vérifie la propriété.</li>
</ul>
<p>Une simple vérification numérique ne démontre jamais une affirmation universelle (\"c'est vrai pour 1, 2, 3, 4… donc pour tous\" n'est pas une démonstration), alors qu'un contre-exemple suffit pour la réfuter.</p>`
    },
    {
      type: "curiosity",
      title: "Le paradoxe de Russell",
      html: `<p>En 1901, le philosophe et mathématicien Bertrand Russell découvrit un problème dans la théorie \"naïve\" des ensembles. Considère \"l'ensemble R de tous les ensembles qui <b>ne</b> se contiennent <b>pas</b> eux-mêmes\". R se contient-il lui-même ? Si oui, par définition il ne devrait pas se contenir ; si non, il devrait se contenir. Contradiction ! Une version amusante : \"Dans un village, le barbier rase tous les hommes qui ne se rasent pas eux-mêmes, et seulement ceux-là. Qui rase le barbier ?\". Le paradoxe obligea les mathématiciens à refonder la théorie avec des règles plus rigoureuses (les axiomes de Zermelo-Fraenkel). Il montre que même les mathématiques demandent de la prudence quand on parle de \"l'ensemble de tous les ensembles\".</p>`
    },
    {
      type: "curiosity",
      title: "Boole, la logique et ton smartphone",
      html: `<p>En 1854, le mathématicien anglais George Boole publia <i>Les Lois de la pensée</i>, où il montrait que la logique pouvait être traitée par une algèbre : appelée aujourd'hui <b>algèbre de Boole</b>, elle n'utilise que deux valeurs (1 = vrai, 0 = faux) et les opérations ET, OU, NON (AND, OR, NOT). En 1937, Claude Shannon comprit que les interrupteurs électriques se comportent exactement comme les connecteurs logiques : deux interrupteurs <b>en série</b> forment un ET (le courant ne passe que si les deux sont fermés), deux interrupteurs <b>en parallèle</b> un OU. Sur cette idée reposent tous les circuits numériques, des calculatrices aux processeurs des ordinateurs.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre la logique",
      intro: "Les tables de vérité sont précises mais abstraites : voici d'autres images pour reconnaître les connecteurs.",
      tabs: [
        {
          label: "💡 Interrupteurs",
          html: `<p>Imagine une ampoule et deux interrupteurs p et q (fermé = vrai).</p>
<ul>
<li><b>p ∧ q</b> : interrupteurs <b>en série</b>. L'ampoule ne s'allume que si les deux sont fermés.</li>
<li><b>p ∨ q</b> : interrupteurs <b>en parallèle</b>. Il suffit que l'un des deux soit fermé.</li>
<li><b>¬p</b> : un interrupteur \"inversé\", allumé quand p est éteint.</li>
</ul>
<p>En pratique, chaque formule logique est un circuit, et inversement. Vérifie-le en dessinant les circuits de ¬(p ∧ q) et de ¬p ∨ ¬q : ils ont le même comportement (De Morgan !).</p>`
        },
        {
          label: "🧮 Avec les ensembles",
          html: `<p>À chaque prédicat P(x), on associe l'ensemble des éléments qui le vérifient, A = {x | P(x)}. Alors : \"P et Q\" correspond à l'intersection A ∩ B ; \"P ou Q\" à la réunion A ∪ B ; \"non P\" au complémentaire Ā ; \"P ⇒ Q\" au fait que A ⊆ B. Par exemple, \"tous les carrés sont des losanges\" signifie que l'ensemble des carrés est inclus dans celui des losanges : on le voit en dessinant un cercle à l'intérieur d'un autre.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0fdf4"/>
<ellipse cx="300" cy="130" rx="230" ry="105" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<ellipse cx="300" cy="140" rx="130" ry="65" fill="#86efac" stroke="#166534" stroke-width="3"/>
<text x="300" y="40" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">Losanges</text>
<text x="300" y="145" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">Carrés</text>
<text x="300" y="235" font-size="16" text-anchor="middle" fill="#1f2937">Carré ⇒ losange, mais losange ⇒ carré est faux</text>
</svg>`
        },
        {
          label: "⚖️ La promesse",
          html: `<p>Pour comprendre pourquoi \"p ⇒ q\" est vraie quand p est fausse, pense à une promesse : \"si j'ai 20/20 à l'examen, je t'offre un jeu vidéo\". Quand est-ce que je <b>romps</b> ma promesse ? Seulement si j'ai 20/20 et que le cadeau n'arrive pas. Si j'ai 16, la promesse reste vraie, quoi que je fasse : elle n'a pas été démentie. La logique ne considère une implication comme fausse que si l'on trouve le cas \"prémisse vraie, conclusion fausse\".</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte des ensembles et de la logique",
      nodes: [
        { id: "insieme", label: "Ensemble", x: 25, y: 6, color: "#2563eb", html: "Collection bien définie d'éléments.", why: "Cantor (1870-1890) a introduit les ensembles pour étudier l'infini. Ils sont aujourd'hui le langage commun de toutes les mathématiques : nombres, fonctions et figures sont des ensembles munis d'une structure." },
        { id: "operazioni", label: "Réunion, intersection, différence", x: 12, y: 32, color: "#16a34a", html: "Elles construisent de nouveaux ensembles à partir d'ensembles connus.", why: "Elles suivent les lois de l'algèbre de Boole : commutativité, associativité, distributivité et De Morgan. Boole (1854) les a découvertes en étudiant la logique." },
        { id: "cartesiano", label: "Produit cartésien", x: 12, y: 60, color: "#f59e0b", html: "Couples ordonnés (a, b).", why: "Descartes (1637) a associé à chaque point du plan un couple de nombres. Les fonctions et les relations sont des sous-ensembles d'un produit cartésien." },
        { id: "proposizione", label: "Proposition", x: 72, y: 6, color: "#9333ea", html: "Phrase vraie ou fausse, pas les deux à la fois.", why: "Principe de non-contradiction et du tiers exclu, déjà chez Aristote (IV<sup>e</sup> siècle av. J.-C.) : pour la logique classique, toute proposition est V ou F." },
        { id: "connettivi", label: "Connecteurs", x: 62, y: 32, color: "#ef4444", html: "¬, ∧, ∨, ⇒, ⇔ et tables de vérité.", why: "La valeur d'une proposition composée ne dépend que des valeurs de ses parties (vérifonctionnalité). Frege et Peano (fin du XIX<sup>e</sup> siècle) ont fixé les symboles modernes." },
        { id: "implicazione", label: "Implication et contraposée", x: 85, y: 55, color: "#0ea5e9", html: "p ⇒ q ≡ ¬q ⇒ ¬p.", why: "Elle fonde le raisonnement par l'absurde. Si p ⇒ q, p est suffisante et q est nécessaire : la réciproque n'est pas vraie en général." },
        { id: "quantificatori", label: "Quantificateurs ∀, ∃", x: 55, y: 62, color: "#22c55e", html: "Ils transforment un prédicat en proposition.", why: "Introduits par Frege (1879) et Peano. Nier un ∀ exige un contre-exemple : c'est ainsi que la science progresse (les cygnes noirs ont réfuté \"tous les cygnes sont blancs\")." },
        { id: "dimostrazione", label: "Démonstration", x: 50, y: 88, color: "#64748b", html: "Chaîne de déductions qui va des axiomes aux théorèmes.", why: "Les Éléments d'Euclide (vers 300 av. J.-C.) sont le premier traité qui part d'axiomes et en déduit des théorèmes par les règles de la logique." }
      ],
      edges: [["insieme", "operazioni", "a"], ["insieme", "cartesiano", "a"], ["proposizione", "connettivi", "se combinent avec"], ["connettivi", "implicazione", "comprend"], ["proposizione", "quantificatori", "généralisent"], ["operazioni", "connettivi", "correspondent à"], ["implicazione", "dimostrazione", "utilisée dans"], ["quantificatori", "dimostrazione", "utilisés dans"]]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>∪ = \"ou\" (inclusif), ∩ = \"et\", \\ = \"mais pas\". |A ∪ B| = |A| + |B| − |A ∩ B|. Un ensemble de n éléments a 2<sup>n</sup> sous-ensembles.</li>
<li><b>p ⇒ q</b> n'est fausse <b>que</b> si p est vraie et q fausse. Elle est équivalente à la contraposée ¬q ⇒ ¬p, <b>pas</b> à la réciproque q ⇒ p.</li>
<li><b>De Morgan</b> : ¬(p ∧ q) ≡ ¬p ∨ ¬q ; ¬(p ∨ q) ≡ ¬p ∧ ¬q.</li>
<li>Négations : ¬(∀x P) ≡ ∃x ¬P ; ¬(∃x P) ≡ ∀x ¬P.</li>
<li>Un contre-exemple réfute une affirmation universelle ; mille exemples ne la démontrent pas.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : logique",
      questions: [
        { type: "mc", q: "Quelle est la négation de \"tous les élèves ont réussi le test\" ?", options: ["Aucun élève n'a réussi le test", "Au moins un élève n'a pas réussi le test", "Tous les élèves ont échoué au test"], answer: 1, explain: "La négation de ∀ est ∃ avec le prédicat nié : il suffit d'un élève qui n'a pas réussi le test." },
        { type: "tf", q: "Si p ⇒ q est vraie, alors q ⇒ p est vraie aussi.", answer: false, explain: "La réciproque n'est pas équivalente : \"s'il pleut, la route est mouillée\" n'implique pas \"si la route est mouillée, il pleut\"." },
        { type: "mc", q: "La proposition p ∧ q est vraie quand…", options: ["au moins l'une de p et q est vraie", "p et q sont toutes les deux vraies", "p et q sont toutes les deux fausses"], answer: 1, explain: "La conjonction (\"et\") exige que les deux soient vraies." },
        { type: "mc", q: "La négation de \"x > 3 et x < 8\" est…", options: ["x ≤ 3 et x ≥ 8", "x ≤ 3 ou x ≥ 8", "x < 3 ou x > 8"], answer: 1, explain: "De Morgan : la négation d'un \"et\" est un \"ou\" des négations. Nier x > 3 donne x ≤ 3, nier x < 8 donne x ≥ 8." }
      ]
    }
  ],
  glossary: [
    { t: "Ensemble", d: "Collection bien définie d'objets, appelés éléments." },
    { t: "Sous-ensemble", d: "B ⊆ A si tout élément de B appartient à A." },
    { t: "Ensemble vide", d: "L'ensemble ∅ qui ne contient aucun élément ; il est sous-ensemble de tout ensemble." },
    { t: "Réunion", d: "A ∪ B : les éléments qui sont dans A ou dans B (ou dans les deux)." },
    { t: "Intersection", d: "A ∩ B : les éléments communs à A et à B." },
    { t: "Produit cartésien", d: "A × B : l'ensemble des couples ordonnés (a, b) avec a dans A et b dans B." },
    { t: "Proposition", d: "Affirmation dont on peut dire qu'elle est vraie ou fausse." },
    { t: "Connecteur", d: "Opération logique (non, et, ou, si… alors, si et seulement si) qui combine des propositions." },
    { t: "Tautologie", d: "Proposition composée toujours vraie." },
    { t: "Contraposée", d: "La proposition ¬q ⇒ ¬p, équivalente à p ⇒ q." },
    { t: "Quantificateur", d: "Symbole ∀ (pour tout) ou ∃ (il existe) qui précise la portée d'un prédicat." },
    { t: "Contre-exemple", d: "Un cas qui réfute une affirmation universelle." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Lequel des exemples suivants est un ensemble bien défini ?", options: ["Les nombres premiers inférieurs à 20", "Les plus belles chansons", "Les élèves sympathiques"], answer: 0, explain: "Seul le premier a un critère d'appartenance objectif." },
      { type: "num", q: "A = {1, 2, 3, 4, 5, 6} et B = {4, 5, 6, 7, 8}. Combien d'éléments a A ∩ B ?", answer: 3, explain: "A ∩ B = {4, 5, 6} : 3 éléments." },
      { type: "num", q: "Dans un lycée, 40 élèves étudient le français, 35 l'espagnol et 15 les deux. Combien d'élèves étudient au moins l'une des deux langues ?", answer: 60, explain: "|F ∪ S| = 40 + 35 − 15 = 60." },
      { type: "num", q: "Combien de sous-ensembles a l'ensemble {a, b, c, d, e} ?", answer: 32, explain: "2⁵ = 32." },
      { type: "num", q: "A a 5 éléments et B en a 4. Combien d'éléments a le produit cartésien A × B ?", answer: 20, explain: "|A × B| = 5 × 4 = 20." },
      { type: "mc", q: "L'implication p ⇒ q est fausse quand…", options: ["p est fausse et q est vraie", "p est vraie et q est fausse", "p et q sont toutes les deux fausses"], answer: 1, explain: "C'est le seul cas où la promesse est trahie." },
      { type: "tf", q: "La contraposée de \"s'il pleut, je prends mon parapluie\" est \"si je ne prends pas mon parapluie, il ne pleut pas\".", answer: true, explain: "Contraposée : ¬q ⇒ ¬p. Elle est équivalente à l'implication de départ." },
      { type: "mc", q: "Quelle est la négation de \"il existe un nombre premier pair supérieur à 2\" ?", options: ["Tout nombre premier pair est inférieur ou égal à 2", "Il existe un nombre premier impair", "Tout nombre premier est pair"], answer: 0, explain: "¬(∃x P(x)) ≡ ∀x ¬P(x) : tous les nombres premiers pairs sont ≤ 2 (en réalité, le seul est 2)." },
      { type: "tf", q: "Vérifier qu'une affirmation est vraie pour les 100 premiers entiers naturels démontre qu'elle est vraie pour tous les entiers naturels.", answer: false, explain: "Une vérification sur des cas particuliers n'est pas une démonstration. Un contre-exemple, en revanche, suffit pour la réfuter." },
      { type: "order", q: "Range dans l'ordre les étapes pour nier \"tous les nombres x vérifient P(x)\".", items: ["Écrire l'affirmation sous la forme ∀x P(x)", "Changer le quantificateur ∀ en ∃", "Nier le prédicat : ¬P(x)", "Lire : il existe au moins un x pour lequel P n'est pas vraie"], explain: "¬(∀x P(x)) ≡ ∃x ¬P(x)." },
      { type: "text", q: "Comment s'appelle le mathématicien qui a fondé la théorie des ensembles au XIX<sup>e</sup> siècle (initiale C) ?", answer: ["cantor", "georg cantor"], explain: "Georg Cantor (1845-1918) a fondé la théorie des ensembles." }
    ]
  }
});
