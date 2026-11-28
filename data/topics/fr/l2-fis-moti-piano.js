TOPIC('fr', {
  id: "l2-fis-moti-piano",
  title: "Les mouvements dans le plan",
  intro: "L'année dernière, tu as étudié les forces et les grandeurs ; maintenant, mettons tout en mouvement. Un ballon frappé du pied, une roue qui tourne, une balançoire qui oscille : ce sont tous des mouvements qui ont lieu <b>dans un plan</b>, et pas sur une simple droite. Nous verrons trois protagonistes : le <b>mouvement parabolique</b>, le <b>mouvement circulaire uniforme</b> et le <b>mouvement harmonique</b>. Le fil conducteur est une idée de Galilée aussi simple que puissante : on comprend un mouvement compliqué en le <b>décomposant en mouvements simples</b>.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Composer les mouvements : l'idée de Galilée",
      html: `<p>Dans le <i>Dialogue sur les deux grands systèmes du monde</i> (1632), Galilée soutient qu'un corps peut participer à plusieurs mouvements en même temps et que ces mouvements <b>ne se gênent pas les uns les autres</b>. C'est le <b>principe d'indépendance des mouvements</b> (ou de superposition).</p>
<p>L'exemple classique : tu laisses tomber une bille depuis un navire qui avance à vitesse constante. La bille tombe à la verticale par rapport au navire, mais par rapport au rivage elle décrit une courbe, parce qu'elle conserve aussi la vitesse horizontale du navire.</p>
<p>En pratique, pour étudier un mouvement dans le plan, on choisit deux axes, <b>x</b> (horizontal) et <b>y</b> (vertical), et on étudie chaque mouvement séparément :</p>
<ul>
<li>selon x, le mouvement est <b>rectiligne uniforme</b> (s'il n'y a pas de forces horizontales) ;</li>
<li>selon y, le mouvement est <b>uniformément accéléré</b>, avec l'accélération de la pesanteur g ≈ 9,8 m/s² vers le bas (en négligeant la résistance de l'air).</li>
</ul>
<p>À la fin, on recompose les deux résultats avec la somme des vecteurs que tu connais depuis l'année dernière.</p>`
    },
    {
      type: "svg",
      title: "La trajectoire d'un projectile",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<defs>
<marker id="pA" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
<marker id="pB" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#2563eb"/></marker>
</defs>
<g font-family="sans-serif">
<line x1="30" y1="250" x2="610" y2="250" stroke="#475569" stroke-width="2"/>
<path d="M60 250 Q 260 -10 460 250" fill="none" stroke="#16a34a" stroke-width="4"/>
<line x1="60" y1="250" x2="120" y2="190" stroke="#dc2626" stroke-width="4" marker-end="url(#pA)"/>
<text x="124" y="186" font-size="15" fill="#dc2626" font-weight="bold">v0</text>
<line x1="260" y1="120" x2="330" y2="120" stroke="#2563eb" stroke-width="4" marker-end="url(#pB)"/>
<text x="334" y="116" font-size="15" fill="#2563eb" font-weight="bold">vx (constante)</text>
<line x1="260" y1="120" x2="260" y2="250" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<text x="268" y="170" font-size="15" fill="#0f172a">h max</text>
<text x="250" y="108" font-size="15" fill="#0f172a" text-anchor="end">sommet : vy = 0</text>
<text x="60" y="275" font-size="15" fill="#0f172a">départ</text>
<text x="400" y="275" font-size="15" fill="#0f172a">arrivée (portée)</text>
<path d="M90 250 A 30 30 0 0 0 85 232" fill="none" stroke="#475569" stroke-width="2"/>
<text x="96" y="238" font-size="15" fill="#0f172a">θ</text>
</g>
</svg>`,
      caption: "Horizontalement, la vitesse ne change pas ; verticalement, le corps ralentit en montant, s'arrête au sommet et accélère en descendant."
    },
    {
      type: "text",
      title: "Le mouvement parabolique : formules",
      html: `<p>Un corps lancé avec une vitesse initiale <b>v₀</b> qui fait un angle <b>θ</b> avec l'horizontale a pour composantes initiales v₀ₓ = v₀·cos θ et v₀ᵧ = v₀·sin θ. Les équations du mouvement sont :</p>
<table>
<tr><th>Axe x (uniforme)</th><th>Axe y (accéléré)</th></tr>
<tr><td>x = v₀ₓ · t</td><td>y = v₀ᵧ · t − ½ g t²</td></tr>
<tr><td>vₓ = v₀ₓ = constante</td><td>vᵧ = v₀ᵧ − g t</td></tr>
</table>
<p>En éliminant le temps, on obtient y en fonction de x : une équation du second degré, c'est-à-dire une <b>parabole</b> (d'où le nom du mouvement). On en déduit :</p>
<ul>
<li>la <b>durée du vol</b> (retour à l'altitude de départ) : t = 2 v₀ᵧ / g ;</li>
<li>la <b>hauteur maximale</b> (vᵧ = 0) : h = v₀ᵧ² / (2g) ;</li>
<li>la <b>portée</b> : P = v₀² · sin(2θ) / g.</li>
</ul>
<p>Pour une même v₀, la portée est maximale pour <b>θ = 45°</b> (car sin 2θ = 1), et des angles complémentaires (30° et 60°, par exemple) donnent la même portée. Cas particulier : un lancer <b>horizontal</b> depuis une hauteur h (θ = 0) a une durée de chute t = √(2h/g), identique à celle d'une chute libre.</p>`
    },
    {
      type: "example",
      title: "Le coup franc et la pierre lancée de la falaise",
      html: `<p><b>Le ballon.</b> Un footballeur frappe le ballon avec v₀ = 20 m/s et θ = 30°. Composantes : v₀ₓ = 20·cos 30° ≈ 17,3 m/s et v₀ᵧ = 20·sin 30° = 10 m/s. Avec g = 9,8 m/s² :</p>
<ul>
<li>durée du vol : 2·10/9,8 ≈ 2,04 s ;</li>
<li>hauteur maximale : 10²/(2·9,8) ≈ 5,1 m ;</li>
<li>portée : 17,3 · 2,04 ≈ 35 m (même résultat que 20²·sin 60°/9,8 ≈ 35,3 m).</li>
</ul>
<p><b>La pierre.</b> Du haut d'une falaise de 45 m, tu lances une pierre horizontalement à 10 m/s (g = 10 m/s² pour simplifier). Durée de chute : √(2·45/10) = 3 s. En 3 s, la pierre avance de 10 · 3 = <b>30 m</b> horizontalement. Si tu la laissais simplement tomber, elle toucherait l'eau exactement au même instant : la vitesse horizontale n'a aucune influence sur la chute.</p>`
    },
    {
      type: "curiosity",
      title: "Le singe et le chasseur",
      html: `<p>Une expérience de pensée classique : un chasseur vise droit vers un singe suspendu à une branche. Au moment du tir, le singe se laisse tomber. Est-il sauvé ? <b>Non</b> : la balle et le singe tombent de la même hauteur pendant le même temps, donc la balle le touche quand même (si elle l'atteint avant de toucher le sol). C'est la preuve que la chute verticale ne dépend pas du mouvement horizontal.</p>
<p>En réalité, l'air freine les projectiles : c'est pourquoi les trajectoires réelles (surtout celles des balles légères et rapides) sont plus courtes et moins symétriques que la parabole idéale. Pour les gros canons, l'artillerie doit même tenir compte de la rotation de la Terre.</p>`
    },
    {
      type: "quiz",
      title: "Vérifie : mouvement parabolique",
      questions: [
        { type: "mc", q: "Dans un mouvement parabolique idéal, quelle composante de la vitesse reste constante ?", options: ["La composante verticale", "La composante horizontale", "Les deux", "Aucune"], answer: 1, explain: "Horizontalement, aucune force n'agit : le mouvement est rectiligne uniforme. Verticalement, la pesanteur agit." },
        { type: "tf", q: "Au point le plus haut de la trajectoire, la vitesse du projectile est nulle.", answer: false, explain: "Seule la composante verticale s'annule ; la composante horizontale vₓ ≠ 0 demeure." },
        { type: "num", q: "Un objet est lancé vers le haut avec v₀ᵧ = 14,7 m/s (g = 9,8 m/s²). Au bout de combien de secondes atteint-il le sommet ?", answer: 1.5, tol: 0.05, unit: "s", explain: "Au sommet vᵧ = 0 : t = v₀ᵧ/g = 14,7/9,8 = 1,5 s." }
      ]
    },
    {
      type: "text",
      title: "Le mouvement circulaire uniforme",
      html: `<p>Un point est animé d'un <b>mouvement circulaire uniforme</b> s'il parcourt un cercle de rayon r avec une <b>vitesse de valeur constante</b>. Attention : la valeur de la vitesse ne change pas, mais sa <b>direction, si</b>, car la vitesse est toujours <b>tangente</b> au cercle. Comme la vitesse est un vecteur qui change, il y a une accélération !</p>
<p>Grandeurs caractéristiques :</p>
<ul>
<li><b>Période T</b> : durée d'un tour complet (en secondes) ;</li>
<li><b>Fréquence f = 1/T</b> : nombre de tours par seconde (hertz, Hz) ;</li>
<li><b>Vitesse</b> v = 2πr / T = 2πr·f ;</li>
<li><b>Vitesse angulaire</b> ω = 2π / T = 2π·f (radians par seconde) : angle balayé par unité de temps, avec v = ω·r.</li>
</ul>
<p>L'<b>accélération centripète</b> est dirigée vers le centre et a pour valeur <b>a = v² / r = ω² · r</b>. D'après la deuxième loi de Newton, il faut une <b>force centripète</b> F = m·v²/r qui maintient le corps sur la courbe : ce peut être la tension d'une corde, le frottement des pneus sur l'asphalte, la gravitation pour un satellite. Ce n'est pas une force « en plus » : c'est le nom du rôle joué par une force qui existe déjà.</p>`
    },
    {
      type: "svg",
      title: "Vitesse et accélération dans le mouvement circulaire",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<defs>
<marker id="cV" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#2563eb"/></marker>
<marker id="cA" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
</defs>
<g font-family="sans-serif">
<circle cx="300" cy="150" r="110" fill="#ffffff" stroke="#475569" stroke-width="3"/>
<circle cx="300" cy="150" r="5" fill="#0f172a"/>
<text x="312" y="170" font-size="15" fill="#0f172a">centre</text>
<circle cx="410" cy="150" r="9" fill="#16a34a"/>
<line x1="410" y1="150" x2="410" y2="60" stroke="#2563eb" stroke-width="4" marker-end="url(#cV)"/>
<text x="420" y="75" font-size="16" fill="#2563eb" font-weight="bold">v (tangente)</text>
<line x1="410" y1="150" x2="340" y2="150" stroke="#dc2626" stroke-width="4" marker-end="url(#cA)"/>
<text x="345" y="140" font-size="16" fill="#dc2626" font-weight="bold">a (centripète)</text>
<line x1="300" y1="150" x2="410" y2="150" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5 5"/>
<text x="358" y="185" font-size="15" fill="#0f172a">r</text>
<circle cx="190" cy="150" r="9" fill="#16a34a"/>
<line x1="190" y1="150" x2="190" y2="240" stroke="#2563eb" stroke-width="4" marker-end="url(#cV)"/>
<line x1="190" y1="150" x2="250" y2="150" stroke="#dc2626" stroke-width="4" marker-end="url(#cA)"/>
<text x="470" y="150" font-size="15" fill="#0f172a">v de valeur constante,</text>
<text x="470" y="172" font-size="15" fill="#0f172a">mais sa direction change</text>
</g>
</svg>`,
      caption: "La vitesse (en bleu) est tangente à la trajectoire ; l'accélération (en rouge) est toujours dirigée vers le centre."
    },
    {
      type: "remember",
      title: "Formules du mouvement circulaire uniforme",
      html: `<p><b>T = 1/f</b> · <b>ω = 2π/T</b> · <b>v = ω·r = 2πr/T</b> · <b>a<sub>c</sub> = v²/r = ω²·r</b> · <b>F<sub>c</sub> = m·v²/r</b>.</p>
<p><b>Exemple.</b> Une roue de rayon 0,30 m fait un tour en 0,50 s : ω = 2π/0,5 ≈ 12,6 rad/s ; v = 12,6·0,30 ≈ 3,8 m/s ; a = ω²r ≈ 47 m/s². À l'équateur, la Terre (r ≈ 6378 km, T ≈ 24 h) nous entraîne à environ 465 m/s, mais nous ne nous en apercevons pas parce que la vitesse est constante : nous ressentons les accélérations, pas les vitesses.</p>`
    },
    {
      type: "quiz",
      title: "Vérifie : mouvement circulaire",
      questions: [
        { type: "mc", q: "Vers où est dirigée l'accélération dans le mouvement circulaire uniforme ?", options: ["Selon la tangente", "Vers le centre", "Vers l'extérieur", "Elle est nulle"], answer: 1, explain: "C'est l'accélération centripète, dirigée vers le centre du cercle." },
        { type: "num", q: "Un satellite fait un tour en 100 minutes. Combien de tours fait-il en un jour (24 h = 1440 min) ?", answer: 14.4, tol: 0.1, unit: "tours", explain: "1440/100 = 14,4 tours : la fréquence est l'inverse de la période." },
        { type: "tf", q: "Si l'on double la vitesse dans un virage de rayon constant, l'accélération centripète double.", answer: false, explain: "a = v²/r : si v double, a devient quatre fois plus grande." }
      ]
    },
    {
      type: "text",
      title: "Le mouvement harmonique",
      html: `<p>Prends un point en mouvement circulaire uniforme et observe son <b>ombre</b> (sa projection) sur un mur : l'ombre va et vient le long d'un segment. Ce mouvement d'aller-retour est le <b>mouvement harmonique simple</b>. Son équation horaire est <b>x(t) = A · cos(ωt + φ)</b>, où <b>A</b> est l'<b>amplitude</b> (écart maximal par rapport au centre), ω la pulsation et φ la phase initiale.</p>
<p>Caractéristiques :</p>
<ul>
<li>l'accélération est <b>proportionnelle et opposée au déplacement</b> : a = −ω²·x. Elle est toujours dirigée vers le centre d'oscillation ;</li>
<li>la vitesse est maximale au centre (x = 0) et nulle aux extrémités (x = ±A) : v<sub>max</sub> = ω·A ;</li>
<li>la période T = 2π/ω ne dépend pas de l'amplitude.</li>
</ul>
<p>Deux systèmes fondamentaux :</p>
<ul>
<li>le système <b>masse-ressort</b> (sans frottement) : F = −k·x, donc <b>T = 2π·√(m/k)</b>. Un ressort plus raide (k grand) oscille plus vite, une masse plus grande plus lentement ;</li>
<li>le <b>pendule simple</b> (petites oscillations) : <b>T = 2π·√(L/g)</b>. Elle ne dépend ni de la masse suspendue ni, pour de faibles amplitudes, de l'amplitude (<i>isochronisme</i>, observé par Galilée).</li>
</ul>`
    },
    {
      type: "example",
      title: "Le ressort et la balançoire",
      html: `<p><b>Ressort.</b> Une masse de 1 kg est accrochée à un ressort de raideur k = 100 N/m : T = 2π√(1/100) = 2π · 0,1 ≈ <b>0,63 s</b>. Avec une masse de 4 kg, la période double (≈ 1,26 s).</p>
<p><b>Balançoire.</b> Une balançoire dont les chaînes mesurent 2,5 m a T = 2π√(2,5/9,8) ≈ 3,2 s. Pour « l'entretenir », il suffit de donner de petites poussées au bon moment, une par période : c'est le phénomène de <b>résonance</b>, qui permet d'augmenter l'amplitude avec peu d'effort.</p>`
    },
    {
      type: "curiosity",
      title: "La lampe de la cathédrale de Pise",
      html: `<p>La tradition raconte que le jeune Galilée, en observant une lampe qui oscillait dans la cathédrale de Pise, aurait découvert l'isochronisme du pendule en comptant les battements de son propre pouls. Le récit fut mis par écrit par son biographe Vincenzio Viviani et il est peut-être enjolivé, mais l'idée est réelle : Galilée étudia le pendule et imagina de l'utiliser pour mesurer le temps. La première horloge à pendule qui fonctionnait fut construite par Christiaan Huygens en 1656-1657.</p>`
    },
    {
      type: "svg",
      title: "L'oscillation au cours du temps",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<line x1="40" y1="150" x2="610" y2="150" stroke="#475569" stroke-width="2"/>
<line x1="60" y1="30" x2="60" y2="270" stroke="#475569" stroke-width="2"/>
<path d="M60 60 C 110 60 140 150 190 150 C 240 150 270 240 320 240 C 370 240 400 150 450 150 C 500 150 530 60 580 60" fill="none" stroke="#2563eb" stroke-width="4"/>
<line x1="320" y1="150" x2="320" y2="240" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 5"/>
<text x="70" y="52" font-size="15" fill="#0f172a">+A</text>
<text x="70" y="262" font-size="15" fill="#0f172a">−A</text>
<text x="590" y="144" font-size="15" fill="#0f172a">t</text>
<text x="66" y="24" font-size="15" fill="#0f172a">x</text>
<text x="190" y="172" font-size="15" fill="#0f172a" text-anchor="middle">T/4</text>
<text x="320" y="172" font-size="15" fill="#0f172a" text-anchor="middle">T/2</text>
<text x="450" y="172" font-size="15" fill="#0f172a" text-anchor="middle">3T/4</text>
<text x="580" y="172" font-size="15" fill="#0f172a" text-anchor="end">T</text>
<text x="330" y="40" font-size="16" fill="#2563eb" font-weight="bold">x = A cos(ωt)</text>
</g>
</svg>`,
      caption: "Une sinusoïde : au bout d'une période T, le mouvement se répète à l'identique."
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre",
      intro: "Si les formules ne te convainquent pas, essaie de regarder les mêmes mouvements sous un autre angle.",
      tabs: [
        { label: "🔄 L'ombre du cercle", html: "<p>Imagine une bille fixée au bord d'un disque qui tourne à vitesse constante, éclairée de côté : son ombre sur le mur monte et descend. Quand la bille est au point le plus haut ou le plus bas, l'ombre s'arrête un instant et repart dans l'autre sens ; quand elle est à mi-hauteur, l'ombre a sa vitesse maximale. C'est exactement le mouvement harmonique : <b>le mouvement harmonique est le mouvement circulaire vu de côté</b>.</p>", svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="260" fill="#f8fafc"/><g font-family="sans-serif"><circle cx="180" cy="130" r="90" fill="#ffffff" stroke="#475569" stroke-width="3"/><circle cx="244" cy="66" r="10" fill="#16a34a"/><line x1="180" y1="130" x2="244" y2="66" stroke="#64748b" stroke-width="2"/><line x1="244" y1="66" x2="440" y2="66" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/><line x1="440" y1="30" x2="440" y2="230" stroke="#0f172a" stroke-width="4"/><circle cx="440" cy="66" r="9" fill="#475569"/><text x="455" y="70" font-size="15" fill="#0f172a">ombre</text><text x="180" y="245" font-size="15" fill="#0f172a" text-anchor="middle">mouvement circulaire</text></g></svg>` },
        { label: "🧍 Sur le manège", html: "<p>Sur un manège, tu as l'impression d'être « poussé vers l'extérieur ». En réalité, vu depuis le sol, ton corps voudrait aller tout droit (inertie) et <b>c'est le siège ou la chaîne qui te dévie</b> vers le centre : la force centripète est celle de la chaîne. La poussée vers l'extérieur n'est qu'une sensation typique des référentiels en rotation (force fictive). Si la chaîne se rompait, tu partirais selon la <b>tangente</b>, et non radialement vers l'extérieur.</p>" },
        { label: "📐 Avec les nombres", html: "<p>Essaie de retrouver la portée sans trigonométrie : si v₀ᵧ = 10 m/s et v₀ₓ = 17,3 m/s, la montée dure 10/9,8 ≈ 1,02 s et la descente autant, soit 2,04 s au total. Multiplie la durée totale par la vitesse horizontale : 17,3 · 2,04 ≈ 35 m. Tout le secret consiste à séparer le problème en « combien de temps je reste en l'air » (vertical seulement) et « de combien j'avance pendant ce temps » (horizontal seulement).</p>" }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte des mouvements dans le plan",
      nodes: [
        { id: "comp", label: "Composition des mouvements", x: 50, y: 10, color: "#a855f7", html: "Un mouvement dans le plan se décompose en deux mouvements selon des axes perpendiculaires, que l'on peut étudier séparément.", why: "Galilée (1632) l'utilisa pour répondre aux critiques de Copernic : si la Terre bougeait, disaient-ils, les pierres ne tomberaient pas à la verticale. Il montra que le mouvement commun à tout le système ne perturbe pas les mouvements relatifs : c'est la naissance du principe de relativité galiléenne." },
        { id: "parab", label: "Mouvement parabolique", x: 15, y: 48, color: "#16a34a", html: "Uniforme à l'horizontale, uniformément accéléré à la verticale : trajectoire en parabole.", why: "Dans les Discours concernant deux sciences nouvelles (1638), Galilée démontra que la trajectoire des projectiles est une parabole, réfutant la physique aristotélicienne de l'« impetus » qui prévoyait une portion rectiligne suivie d'une chute verticale." },
        { id: "circ", label: "Mouvement circulaire uniforme", x: 50, y: 48, color: "#ef4444", html: "Vitesse de valeur constante, direction variable : accélération centripète a = v²/r.", why: "L'expression de l'accélération centripète fut établie par Huygens (1659) et utilisée par Newton pour montrer que la Lune « tombe » sans cesse vers la Terre : la même gravitation qui fait tomber les pommes gouverne les orbites." },
        { id: "arm", label: "Mouvement harmonique", x: 85, y: 48, color: "#f59e0b", html: "x = A cos(ωt + φ), a = −ω²x : oscillations autour d'un centre.", why: "Hooke (1678) trouva que la force élastique est proportionnelle à l'allongement : une force de rappel linéaire conduit toujours à une oscillation sinusoïdale. C'est pourquoi le modèle s'applique aux ressorts, aux pendules, aux atomes dans les solides, aux ondes." },
        { id: "grav", label: "Pesanteur g", x: 15, y: 88, color: "#0ea5e9", html: "Accélération vers le bas, d'environ 9,8 m/s² sur Terre.", why: "Galilée montra que tous les corps tombent avec la même accélération (en l'absence d'air) ; Newton en expliqua l'origine par la gravitation universelle (1687)." },
        { id: "forza", label: "Force centripète / de rappel", x: 68, y: 88, color: "#64748b", html: "La force qui courbe la trajectoire ou ramène le corps vers le centre.", why: "D'après la deuxième loi, F = m·a : si la trajectoire est courbe, il y a une accélération, donc il doit y avoir une force résultante dirigée vers l'intérieur de la courbe." }
      ],
      edges: [["comp", "parab", "donne naissance au"], ["comp", "circ", "s'applique au"], ["circ", "arm", "vu de côté devient le"], ["grav", "parab", "courbe la trajectoire du"], ["forza", "circ", "entretient le"], ["forza", "arm", "ramène au centre dans le"]]
    }
  ],
  glossary: [
    { t: "Principe d'indépendance des mouvements", d: "Des mouvements simultanés selon des directions différentes se déroulent sans s'influencer." },
    { t: "Portée", d: "Distance horizontale parcourue par un projectile jusqu'à son retour à l'altitude de départ." },
    { t: "Période", d: "Durée nécessaire pour effectuer une oscillation ou un tour complet." },
    { t: "Fréquence", d: "Nombre de cycles par seconde : f = 1/T, mesurée en hertz." },
    { t: "Vitesse angulaire", d: "Angle balayé par unité de temps : ω = 2π/T (rad/s)." },
    { t: "Accélération centripète", d: "Accélération dirigée vers le centre dans le mouvement circulaire : a = v²/r." },
    { t: "Amplitude", d: "Écart maximal par rapport à la position d'équilibre dans un mouvement harmonique." },
    { t: "Isochronisme", d: "Indépendance de la période du pendule vis-à-vis de l'amplitude (pour de petites oscillations)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quelle trajectoire décrit un projectile en l'absence de résistance de l'air ?", options: ["Une droite", "Une parabole", "Un cercle", "Une spirale"], answer: 1, explain: "Composition d'un mouvement uniforme horizontal et d'un mouvement uniformément accéléré vertical : une parabole." },
      { type: "num", q: "Une balle est lancée avec v₀ᵧ = 20 m/s (g = 10 m/s²). Combien vaut la hauteur maximale atteinte ?", answer: 20, tol: 0.1, unit: "m", explain: "h = v₀ᵧ²/(2g) = 400/20 = 20 m." },
      { type: "num", q: "Un objet est lancé horizontalement depuis 20 m de hauteur (g = 10 m/s²). Combien de temps dure la chute ?", answer: 2, tol: 0.05, unit: "s", explain: "t = √(2h/g) = √(40/10) = 2 s." },
      { type: "tf", q: "Pour une vitesse initiale donnée, la portée maximale s'obtient avec un angle de 45°.", answer: true, explain: "P = v₀² sin(2θ)/g est maximale quand sin 2θ = 1, c'est-à-dire θ = 45°." },
      { type: "num", q: "Un disque fait 5 tours en 10 s. Calcule la fréquence.", answer: 0.5, tol: 0.01, unit: "Hz", explain: "f = 5/10 = 0,5 Hz ; la période est T = 2 s." },
      { type: "num", q: "Un point tourne sur un cercle de rayon 2 m à la vitesse de 4 m/s. Calcule l'accélération centripète.", answer: 8, tol: 0.05, unit: "m/s²", explain: "a = v²/r = 16/2 = 8 m/s²." },
      { type: "tf", q: "Dans le mouvement circulaire uniforme, l'accélération est nulle parce que la vitesse a une valeur constante.", answer: false, explain: "La direction de la vitesse change, donc il y a une accélération centripète." },
      { type: "mc", q: "Dans un mouvement harmonique, où la vitesse est-elle maximale ?", options: ["Aux extrémités", "Au centre d'oscillation", "À mi-chemin entre le centre et une extrémité", "En aucun point particulier"], answer: 1, explain: "Au centre, l'énergie est entièrement cinétique : v = ωA. Aux extrémités, la vitesse est nulle." },
      { type: "num", q: "Un pendule simple mesure 1 m (g = 9,8 m/s²). Calcule sa période.", answer: 2, tol: 0.05, unit: "s", explain: "T = 2π√(L/g) = 2π√(1/9,8) ≈ 2,0 s." },
      { type: "mc", q: "Si je multiplie par quatre la masse accrochée à un ressort, la période d'oscillation...", options: ["Double", "Est divisée par deux", "Est multipliée par quatre", "Reste la même"], answer: 0, explain: "T = 2π√(m/k) : avec m×4, T est multipliée par √4 = 2." }
    ]
  }
});
