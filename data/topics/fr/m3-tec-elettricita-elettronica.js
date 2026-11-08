TOPIC('fr', {
  id: `m3-tec-elettricita-elettronica`,
  title: `Électricité et électronique`,
  intro: `Tu allumes la lumière, tu charges ton téléphone, la machine à laver se met en route toute seule à la fin du programme : tout cela grâce à l'<b>électricité</b> et à l'<b>électronique</b>. Dans cette leçon, nous découvrons ce qu'est le courant électrique, comment on construit un <b>circuit</b>, la <b>loi d'Ohm</b>, les principaux <b>composants</b> (résistances, LED, diodes, condensateurs, transistors) et les <b>capteurs</b> qui permettent aux machines de « sentir » le monde. ⚡🔌`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. D'où vient l'électricité : charges et électrons`,
      html: `<p>Toute la matière est faite d'<b>atomes</b>. Chaque atome a un <b>noyau</b> avec des <b>protons</b> (charge positive +) et des neutrons (sans charge), et autour, les <b>électrons</b> (charge négative −).</p>
<p>Dans les <b>métaux</b> (cuivre, aluminium, argent…), les électrons les plus externes sont faiblement liés : ils peuvent passer d'un atome à l'autre. On les appelle des <b>électrons libres</b>.</p>
<p>Le <b>courant électrique</b> est un <b>flux ordonné de charges électriques</b> (dans les fils métalliques : des électrons) qui se déplacent dans un <b>circuit fermé</b>.</p>
<ul>
<li><b>Conducteurs</b> : ils laissent facilement passer le courant (métaux, graphite, eau salée, le corps humain !).</li>
<li><b>Isolants</b> : ils le bloquent (plastique, caoutchouc, verre, bois sec, céramique, air).</li>
<li><b>Semi-conducteurs</b> : à mi-chemin ; leur conductivité peut être contrôlée (silicium, germanium). Ils sont la base de l'<b>électronique</b>.</li>
</ul>`
    },
    {
      type: `3d`, title: `Les atomes d'un conducteur et d'un semi-conducteur`,
      scene: `atom`,
      options: { elements: [`Cu`, `Al`, `Si`] },
      caption: `Le cuivre (Cu) a un seul électron dans la couche la plus externe, facile à « détacher » : c'est pour cela que c'est un excellent conducteur. Le silicium (Si) en a 4 : c'est un semi-conducteur.`
    },
    {
      type: `text`, title: `2. Les trois grandeurs : tension, courant, résistance`,
      html: `<p>Pense à un circuit comme à une <b>installation hydraulique</b> :</p>
<table>
<tr><th>Grandeur</th><th>Symbole</th><th>Unité</th><th>Instrument</th><th>Analogie avec l'eau</th></tr>
<tr><td><b>Tension</b> (différence de potentiel)</td><td>V</td><td>volt (V)</td><td>voltmètre</td><td>la <b>pression</b> / la différence de niveau qui pousse l'eau</td></tr>
<tr><td><b>Intensité du courant</b></td><td>I</td><td>ampère (A)</td><td>ampèremètre</td><td>quelle quantité d'eau passe <b>chaque seconde</b></td></tr>
<tr><td><b>Résistance</b></td><td>R</td><td>ohm (Ω)</td><td>ohmmètre</td><td>un <b>tuyau étroit</b> qui freine le débit</td></tr>
</table>
<p>Un <b>multimètre</b> (ou testeur) mesure les trois.</p>
<p>Valeurs utiles : une pile AA = <b>1,5 V</b> ; une batterie de voiture = <b>12 V</b> ; le port USB = <b>5 V</b> ; la prise de la maison en Italie = <b>230 V</b> alternatifs à <b>50 Hz</b> (dangereux !).</p>`
    },
    {
      type: `text`, title: `3. La loi d'Ohm et la puissance`,
      html: `<p>En <b>1827</b>, le physicien allemand <b>Georg Simon Ohm</b> découvrit que, dans de nombreux conducteurs, tension et courant sont <b>directement proportionnels</b> :</p>
<p style="font-size:1.3em;text-align:center"><b>V = R × I</b></p>
<p>et donc : <b>I = V ÷ R</b> et <b>R = V ÷ I</b>.</p>
<p>Exemple : une résistance de <b>100 Ω</b> branchée sur <b>5 V</b> ➜ I = 5 ÷ 100 = <b>0,05 A</b> = 50 mA (milliampères).</p>
<p>La <b>puissance électrique</b> (quelle énergie est utilisée chaque seconde) se mesure en <b>watts (W)</b> :</p>
<p style="font-size:1.3em;text-align:center"><b>P = V × I</b></p>
<p>Exemple : un sèche-cheveux à 230 V qui absorbe 8 A a une puissance de 230 × 8 = <b>1840 W</b>. L'énergie consommée se paie en <b>kilowattheures (kWh)</b> : 1 kW utilisé pendant 1 heure.</p>`
    },
    {
      type: `quiz`, title: `Mini-quiz : grandeurs et loi d'Ohm`,
      questions: [
        { type: `mc`, q: `En quelle unité se mesure la résistance ?`, options: [`volt`, `ampère`, `ohm`], answer: 2, explain: `La résistance se mesure en ohms (Ω), en l'honneur de Georg Ohm.` },
        { type: `num`, q: `Une résistance de 10 Ω est branchée sur une pile de 9 V. Combien d'ampères passent ?`, answer: 0.9, tol: 0.01, unit: `A`, explain: `I = V ÷ R = 9 ÷ 10 = 0,9 A.` },
        { type: `tf`, q: `Le plastique est un bon conducteur.`, answer: false, explain: `Le plastique est un isolant : c'est pour cela qu'il recouvre les fils électriques.` }
      ]
    },
    {
      type: `text`, title: `4. Le circuit électrique : série et parallèle`,
      html: `<p>Un circuit élémentaire comporte toujours :</p>
<ol>
<li>un <b>générateur</b> (pile, batterie, alimentation) qui fournit la tension ;</li>
<li>des <b>conducteurs</b> (fils) qui transportent le courant ;</li>
<li>un <b>récepteur</b> (ampoule, moteur, LED) qui transforme l'énergie électrique en lumière, mouvement, chaleur… ;</li>
<li>un <b>interrupteur</b> pour ouvrir ou fermer le circuit.</li>
</ol>
<p>Le courant ne circule que si le circuit est <b>fermé</b>. Par convention, on dit qu'il va du <b>+</b> vers le <b>−</b> (sens conventionnel), même si les électrons se déplacent dans le sens inverse !</p>
<p><b>Montage en série</b> : les composants sont les uns après les autres, sur un seul chemin. Le courant est le même partout ; si une ampoule grille, elles s'éteignent toutes (comme les anciennes guirlandes de Noël). Les résistances s'additionnent : R<sub>tot</sub> = R<sub>1</sub> + R<sub>2</sub>.</p>
<p><b>Montage en parallèle</b> : chaque composant a sa propre branche. La tension est la même sur tous ; si une ampoule grille, les autres restent allumées. C'est ainsi que sont branchées les prises de la maison.</p>`
    },
    {
      type: `svg`, title: `Schéma : circuit en série et en parallèle`,
      caption: `À gauche deux ampoules en série (un seul chemin) ; à droite en parallèle (deux branches). Symboles normalisés : pile, interrupteur, lampe.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="150" y="28" font-size="18" font-weight="bold" fill="#1e40af" text-anchor="middle">SÉRIE</text>
<text x="450" y="28" font-size="18" font-weight="bold" fill="#166534" text-anchor="middle">PARALLÈLE</text>
<g stroke="#0f172a" stroke-width="3" fill="none">
<polyline points="40,150 40,60 105,60"/><polyline points="135,60 260,60 260,95"/><line x1="260" y1="145" x2="260" y2="175"/><polyline points="260,225 260,250 40,250 40,180"/>
<line x1="105" y1="60" x2="130" y2="45"/>
<line x1="20" y1="150" x2="60" y2="150"/><line x1="28" y1="180" x2="52" y2="180"/>
<circle cx="260" cy="120" r="22"/><line x1="245" y1="105" x2="275" y2="135"/><line x1="275" y1="105" x2="245" y2="135"/>
<circle cx="260" cy="200" r="22"/><line x1="245" y1="185" x2="275" y2="215"/><line x1="275" y1="185" x2="245" y2="215"/>
</g>
<circle cx="105" cy="60" r="4" fill="#0f172a"/><circle cx="135" cy="60" r="4" fill="#0f172a"/>
<text x="70" y="145" font-size="16" fill="#dc2626" font-weight="bold">+</text>
<text x="70" y="195" font-size="16" fill="#2563eb" font-weight="bold">−</text>
<text x="120" y="88" font-size="13" fill="#334155" text-anchor="middle">interrupteur</text>
<text x="100" y="170" font-size="13" fill="#334155" text-anchor="middle">pile</text>
<g stroke="#0f172a" stroke-width="3" fill="none">
<polyline points="340,150 340,60 560,60 560,98"/><polyline points="460,60 460,98"/>
<polyline points="460,142 460,250"/><polyline points="560,142 560,250 340,250 340,180"/>
<line x1="320" y1="150" x2="360" y2="150"/><line x1="328" y1="180" x2="352" y2="180"/>
<circle cx="460" cy="120" r="22"/><line x1="445" y1="105" x2="475" y2="135"/><line x1="475" y1="105" x2="445" y2="135"/>
<circle cx="560" cy="120" r="22"/><line x1="545" y1="105" x2="575" y2="135"/><line x1="575" y1="105" x2="545" y2="135"/>
</g>
<circle cx="460" cy="60" r="5" fill="#0f172a"/><circle cx="460" cy="250" r="5" fill="#0f172a"/>
<text x="370" y="145" font-size="16" fill="#dc2626" font-weight="bold">+</text>
<text x="370" y="195" font-size="16" fill="#2563eb" font-weight="bold">−</text>
<text x="510" y="200" font-size="13" fill="#166534" text-anchor="middle">2 branches</text>
<text x="300" y="285" font-size="14" fill="#334155" text-anchor="middle">⊗ = lampe · longue/courte = pile (+/−) · ● = nœud</text>
</svg>`
    },
    {
      type: `text`, title: `5. De l'électricité à l'électronique : les composants`,
      html: `<p>L'<b>électrotechnique</b> utilise l'électricité comme <b>énergie</b> (moteurs, radiateurs, lampes). L'<b>électronique</b> s'en sert pour <b>contrôler</b> et transporter des <b>informations</b> (ordinateurs, téléphones, capteurs). Les principaux composants :</p>
<ul>
<li><b>Résistance</b> : limite le courant. Sa valeur est écrite avec des <b>anneaux colorés</b> (ex. marron-noir-rouge = 1000 Ω = 1 kΩ).</li>
<li><b>Diode</b> : laisse passer le courant <b>dans un seul sens</b>, comme un clapet anti-retour.</li>
<li><b>LED</b> (Light Emitting Diode) : une diode qui <b>émet de la lumière</b>. Elle a une patte longue (+, anode) et une patte courte (−, cathode) et doit toujours être protégée par une <b>résistance</b>, sinon elle grille.</li>
<li><b>Condensateur</b> : accumule pendant un instant des charges électriques et les restitue (comme un petit réservoir) : il sert à filtrer, à temporiser, pour le flash de l'appareil photo.</li>
<li><b>Transistor</b> : un interrupteur ou un amplificateur <b>commandé électriquement</b>, sans pièces en mouvement. Un processeur moderne en contient des <b>milliards</b>.</li>
<li><b>Circuit intégré</b> (puce) : de nombreux composants miniaturisés sur une plaquette de silicium.</li>
</ul>`
    },
    {
      type: `text`, title: `6. Les capteurs : les « organes des sens » des circuits`,
      html: `<p>Un <b>capteur</b> transforme une grandeur physique (lumière, chaleur, mouvement…) en un <b>signal électrique</b> qu'un circuit ou un microcontrôleur peut lire.</p>
<table>
<tr><th>Capteur</th><th>Ce qu'il « sent »</th><th>Où le trouver</th></tr>
<tr><td><b>Photorésistance (LDR)</b></td><td>lumière : plus de lumière, moins de résistance</td><td>lampadaires qui s'allument dans le noir</td></tr>
<tr><td><b>Thermistance (CTN)</b></td><td>température</td><td>thermostat, réfrigérateur, thermomètre numérique</td></tr>
<tr><td><b>PIR</b> (infrarouge passif)</td><td>mouvement de corps chauds</td><td>alarmes, lumières d'escalier</td></tr>
<tr><td><b>Ultrasons</b></td><td>distance (écho)</td><td>capteurs de parking de la voiture</td></tr>
<tr><td><b>Microphone</b></td><td>son</td><td>téléphone, assistants vocaux</td></tr>
<tr><td><b>Accéléromètre</b></td><td>mouvement et inclinaison</td><td>smartphone (rotation de l'écran), podomètre</td></tr>
</table>
<p>Le signal peut être <b>analogique</b> (il varie de façon continue, comme la luminosité) ou <b>numérique</b> (seulement 0 et 1, allumé/éteint).</p>`
    },
    {
      type: `widget`, title: `Jeu : conducteur ou isolant ?`,
      widget: `classify`,
      options: {
        groups: [`Conducteurs ⚡`, `Isolants 🛑`, `Semi-conducteurs 🔬`],
        items: [
          [`🟠 cuivre`, 0], [`🥈 argent`, 0], [`✏️ mine de crayon (graphite)`, 0], [`🌊 eau salée`, 0],
          [`🧤 caoutchouc`, 1], [`🍶 verre`, 1], [`🪵 bois sec`, 1], [`🧴 plastique`, 1], [`🍽️ céramique`, 1],
          [`💎 silicium`, 2], [`⚙️ germanium`, 2]
        ]
      },
      caption: `Attention : l'eau du robinet (avec des sels dissous) conduit ! Ne touche jamais les prises ou les appareils avec les mains mouillées.`
    },
    {
      type: `example`, title: `Exemple pratique : calculer la résistance d'une LED`,
      html: `<p>Tu veux allumer une <b>LED rouge</b> avec un port USB de <b>5 V</b>. La LED a besoin d'environ <b>2 V</b> et d'un courant de <b>20 mA</b> (0,02 A).</p>
<ol>
<li>Tension que la résistance doit « absorber » : 5 − 2 = <b>3 V</b>.</li>
<li>Loi d'Ohm : R = V ÷ I = 3 ÷ 0,02 = <b>150 Ω</b>.</li>
<li>On choisit la valeur commerciale la plus proche, un peu plus grande : <b>150 Ω ou 220 Ω</b> (la LED sera un peu moins lumineuse mais plus sûre).</li>
</ol>
<p>Sans résistance, le courant monterait trop et la LED grillerait en un instant.</p>`
    },
    {
      type: `example`, title: `Exemple pratique : l'éclairage automatique du jardin`,
      html: `<p>Un lampadaire de jardin à énergie solaire fonctionne ainsi :</p>
<ul>
<li>le jour, le <b>panneau photovoltaïque</b> (en silicium) transforme la lumière en électricité et charge une <b>batterie</b> ;</li>
<li>un <b>capteur de lumière</b> (souvent le panneau lui-même ou une photorésistance) détecte la tombée de la nuit ;</li>
<li>un <b>transistor</b> sert d'interrupteur automatique et allume la <b>LED</b>.</li>
</ul>
<p>Générateur, capteur, contrôle, actionneur : c'est un schéma que tu retrouveras dans tous les appareils automatiques.</p>`
    },
    {
      type: `curiosity`, title: `Le saviez-vous ? La pile a été inventée par un Italien ?`,
      html: `<p>En <b>1799</b>, <b>Alessandro Volta</b>, professeur à Pavie, empila des disques de <b>zinc</b> et de <b>cuivre</b> séparés par des tissus imbibés d'eau salée : c'était la <b>pile</b>, le premier générateur de courant continu. Il en donna la nouvelle en 1800 à la Royal Society de Londres. En son honneur, l'unité de tension s'appelle le <b>volt</b>. Le mot « pile » vient d'ailleurs bien de cette « pile » de disques !</p>`
    },
    {
      type: `curiosity`, title: `Le saviez-vous ? Arduino est né à Ivrée ?`,
      html: `<p>La carte <b>Arduino</b>, utilisée dans le monde entier pour apprendre l'électronique et construire des robots, est née en <b>2005</b> à l'Interaction Design Institute d'<b>Ivrée</b> (au Piémont), grâce à Massimo Banzi et ses collègues. Le nom vient du bar qu'ils fréquentaient, lui-même dédié à <b>Arduin d'Ivrée</b>, roi d'Italie vers l'an 1000. Le premier <b>transistor</b>, quant à lui, fut construit en <b>1947</b> aux Bell Labs aux États-Unis par Bardeen, Brattain et Shockley (prix Nobel 1956).</p>`
    },
    {
      type: `remember`, title: `À retenir (et sécurité !)`,
      html: `<ul>
<li>Courant = flux de charges dans un circuit <b>fermé</b>.</li>
<li><b>V = R × I</b> (loi d'Ohm) ; <b>P = V × I</b> (puissance).</li>
<li>Série : même courant, un seul chemin. Parallèle : même tension, plusieurs branches.</li>
<li>Électronique = contrôler l'électricité avec des semi-conducteurs (diodes, LED, transistors, puces).</li>
<li>Capteurs = transforment des grandeurs physiques en signaux électriques.</li>
<li>⚠️ <b>Ne fais jamais</b> d'expériences avec la prise de la maison (230 V) : utilise seulement des piles ou des alimentations basse tension (jusqu'à 12 V) et demande à un adulte.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `D'autres façons de le comprendre`,
      intro: `L'électricité ne se voit pas : c'est pourquoi il faut différentes images et comparaisons. Choisis la tienne.`,
      tabs: [
        {
          label: `💧 L'eau dans les tuyaux`,
          html: `<p>Le circuit est comme une installation d'eau fermée :</p>
<ul>
<li>la <b>pompe</b> est la pile : elle crée la pression (tension, V) ;</li>
<li>l'<b>eau</b> qui coule est le courant (I) ;</li>
<li>un <b>tuyau étroit</b> est la résistance (R) : plus il est étroit, moins d'eau passe ;</li>
<li>une <b>turbine</b> qui tourne est l'ampoule : elle utilise l'énergie de l'eau ;</li>
<li>un <b>robinet</b> est l'interrupteur.</li>
</ul>
<p>Plus de pression ➜ plus d'eau ; tuyau plus étroit ➜ moins d'eau. C'est la loi d'Ohm !</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#ecfeff"/>
<rect x="40" y="40" width="520" height="160" rx="30" fill="none" stroke="#0891b2" stroke-width="22"/>
<rect x="40" y="40" width="520" height="160" rx="30" fill="none" stroke="#67e8f9" stroke-width="12" stroke-dasharray="14 10"/>
<circle cx="50" cy="120" r="34" fill="#f97316" stroke="#7c2d12" stroke-width="3"/>
<text x="50" y="128" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">V</text>
<rect x="250" y="32" width="100" height="16" fill="#0e7490"/>
<text x="300" y="25" font-size="15" text-anchor="middle" fill="#0e7490" font-weight="bold">tuyau étroit = R</text>
<circle cx="550" cy="120" r="30" fill="#fde047" stroke="#854d0e" stroke-width="3"/>
<text x="550" y="128" font-size="22" text-anchor="middle">💡</text>
<text x="300" y="232" font-size="15" text-anchor="middle" fill="#0e7490" font-weight="bold">débit d'eau = courant I</text>
<text x="105" y="125" font-size="14" fill="#7c2d12" font-weight="bold">pompe = pile</text>
<text x="490" y="170" font-size="14" fill="#854d0e" font-weight="bold">turbine = lampe</text>
</svg>`
        },
        {
          label: `🔺 Le triangle d'Ohm`,
          html: `<p>Un truc utilisé dans les écoles anglaises et allemandes : écris <b>V</b> en haut et <b>R · I</b> en bas dans un triangle. Couvre avec le doigt la grandeur que tu cherches :</p>
<ul>
<li>tu couvres V ➜ il reste R × I ;</li>
<li>tu couvres I ➜ il reste V au-dessus de R ➜ V ÷ R ;</li>
<li>tu couvres R ➜ il reste V au-dessus de I ➜ V ÷ I.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#fef9c3"/>
<polygon points="300,20 470,220 130,220" fill="#fde68a" stroke="#a16207" stroke-width="5"/>
<line x1="190" y1="140" x2="410" y2="140" stroke="#a16207" stroke-width="4"/>
<line x1="300" y1="140" x2="300" y2="220" stroke="#a16207" stroke-width="4"/>
<text x="300" y="115" font-size="48" font-weight="bold" fill="#dc2626" text-anchor="middle">V</text>
<text x="240" y="198" font-size="44" font-weight="bold" fill="#2563eb" text-anchor="middle">R</text>
<text x="360" y="198" font-size="44" font-weight="bold" fill="#16a34a" text-anchor="middle">I</text>
<text x="520" y="110" font-size="16" fill="#713f12" text-anchor="middle">V = R × I</text>
<text x="520" y="140" font-size="16" fill="#713f12" text-anchor="middle">I = V ÷ R</text>
<text x="520" y="170" font-size="16" fill="#713f12" text-anchor="middle">R = V ÷ I</text>
</svg>`
        },
        {
          label: `🚗 Route et trafic`,
          html: `<p>Imagine les électrons comme des <b>voitures</b> :</p>
<ul>
<li>la <b>tension</b> est la <b>pente</b> de la route : plus elle est raide, plus les voitures sont poussées ;</li>
<li>le <b>courant</b> est <b>combien de voitures</b> passent sous un pont chaque seconde ;</li>
<li>la <b>résistance</b> est un <b>rétrécissement</b> de la chaussée ;</li>
<li>en <b>série</b> : deux chantiers l'un après l'autre sur la même route ; en <b>parallèle</b> : deux routes de contournement, la circulation se divise.</li>
</ul>`
        },
        {
          label: `🧩 Composants et fonctions`,
          html: `<p>Associe chaque composant à ce qu'il fait.</p>`,
          widget: `match`,
          options: { pairs: [
            [`Résistance`, `limite le courant`],
            [`Diode`, `laisse passer le courant dans un seul sens`],
            [`LED`, `émet de la lumière`],
            [`Condensateur`, `accumule des charges pendant un court instant`],
            [`Transistor`, `interrupteur commandé électriquement`],
            [`Photorésistance`, `change de résistance avec la lumière`]
          ] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Carte : de l'atome à la puce`,
      nodes: [
        { id: `car`, label: `Charge électrique`, x: 50, y: 6, color: `#64748b`, html: `Propriété des protons (+) et des électrons (−).`, why: `Déjà les Grecs avaient remarqué que l'ambre frotté attire des brins de paille : « ambre » en grec se dit <i>élektron</i>, d'où vient « électricité ». L'électron fut découvert par <b>J. J. Thomson</b> en 1897.` },
        { id: `cor`, label: `Courant`, x: 20, y: 28, color: `#3b82f6`, html: `Flux ordonné de charges (A).`, why: `Il se mesure en ampères en l'honneur d'<b>André-Marie Ampère</b>, qui étudia en 1820 les forces entre fils parcourus par un courant.` },
        { id: `ten`, label: `Tension`, x: 50, y: 28, color: `#f97316`, html: `La « poussée » qui met les charges en mouvement (V).`, why: `La première source stable fut la pile d'<b>Alessandro Volta</b> (1799) : des réactions chimiques entre deux métaux différents créent une différence de potentiel.` },
        { id: `res`, label: `Résistance`, x: 80, y: 28, color: `#ef4444`, html: `Opposition au passage du courant (Ω).`, why: `Les électrons en mouvement heurtent les atomes du matériau et cèdent de l'énergie sous forme de chaleur : c'est l'<b>effet Joule</b>, utilisé dans les radiateurs et les grille-pain.` },
        { id: `ohm`, label: `Loi d'Ohm`, x: 50, y: 50, color: `#a855f7`, html: `V = R × I.`, why: `<b>Georg Simon Ohm</b> la publia en 1827 après avoir mesuré des courants dans des fils de longueurs différentes. Elle fut d'abord critiquée ; puis elle devint la base de l'électrotechnique.` },
        { id: `circ`, label: `Circuit`, x: 20, y: 72, color: `#22c55e`, html: `Générateur, fils, récepteur, interrupteur ; série ou parallèle.`, why: `Les charges ne se créent ni ne se détruisent (conservation de la charge) : pour circuler sans interruption, elles doivent revenir au générateur, donc le chemin doit être fermé.` },
        { id: `semi`, label: `Semi-conducteurs`, x: 50, y: 72, color: `#0ea5e9`, html: `Silicium et germanium : conduisent « sur commande ».`, why: `En ajoutant de minuscules quantités d'autres éléments (<b>dopage</b>), on contrôle leur conduction. C'est sur ce principe que reposent la diode et le transistor (1947).` },
        { id: `sens`, label: `Capteurs`, x: 80, y: 72, color: `#eab308`, html: `Transforment la lumière, la chaleur, le mouvement en signaux électriques.`, why: `Beaucoup exploitent le fait que la résistance d'un matériau change avec la lumière (photorésistance) ou la température (thermistance) : la loi d'Ohm permet de mesurer cette variation.` },
        { id: `chip`, label: `Puces et microcontrôleurs`, x: 50, y: 94, color: `#7c3aed`, html: `Des milliards de transistors sur un petit morceau de silicium.`, why: `Le circuit intégré fut inventé en 1958-59 par <b>Jack Kilby</b> et <b>Robert Noyce</b>. En 1971, l'Italien <b>Federico Faggin</b> dirigea le projet du premier microprocesseur commercial, l'Intel 4004.` }
      ],
      edges: [
        [`car`, `cor`, `en mouvement`], [`car`, `ten`, `poussées par`], [`cor`, `ohm`, `I`], [`ten`, `ohm`, `V`], [`res`, `ohm`, `R`],
        [`ohm`, `circ`, `s'applique`], [`ohm`, `semi`, `matériaux`], [`semi`, `chip`, `construisent`], [`semi`, `sens`, `construisent`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz : composants et circuits`,
      questions: [
        { type: `mc`, q: `Dans un circuit en parallèle, si une ampoule grille…`, options: [`elles s'éteignent toutes`, `les autres restent allumées`, `les autres s'allument plus fort et grillent`], answer: 1, explain: `Chaque ampoule a sa propre branche : les autres branches continuent de fonctionner.` },
        { type: `num`, q: `Quelle puissance a une lampe qui absorbe 0,1 A sous 230 V ?`, answer: 23, tol: 0, unit: `W`, explain: `P = V × I = 230 × 0,1 = 23 W.` },
        { type: `mc`, q: `Quel composant laisse passer le courant dans un seul sens ?`, options: [`Condensateur`, `Diode`, `Résistance`], answer: 1, explain: `La diode est comme une soupape à sens unique.` }
      ]
    }
  ],
  glossary: [
    { t: `Courant électrique (I)`, d: `Flux ordonné de charges ; il se mesure en ampères (A).` },
    { t: `Tension (V)`, d: `Différence de potentiel qui pousse les charges ; elle se mesure en volts.` },
    { t: `Résistance (R)`, d: `Opposition au passage du courant ; elle se mesure en ohms (Ω).` },
    { t: `Loi d'Ohm`, d: `V = R × I.` },
    { t: `Puissance (P)`, d: `Énergie utilisée chaque seconde : P = V × I, en watts (W).` },
    { t: `Semi-conducteur`, d: `Matériau (ex. silicium) dont la conductivité peut être contrôlée.` },
    { t: `Transistor`, d: `Composant qui sert d'interrupteur ou d'amplificateur commandé électriquement.` },
    { t: `LED`, d: `Diode qui émet de la lumière ; elle doit être protégée par une résistance.` },
    { t: `Capteur`, d: `Dispositif qui transforme une grandeur physique en signal électrique.` },
    { t: `Multimètre`, d: `Instrument qui mesure la tension, le courant et la résistance.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Le courant électrique dans les métaux est un flux de…`, options: [`protons`, `électrons`, `neutrons`], answer: 1, explain: `Dans les métaux, ce sont les électrons libres qui se déplacent.` },
      { type: `mc`, q: `La tension se mesure en…`, options: [`ampères`, `volts`, `watts`], answer: 1, explain: `Volts, en l'honneur d'Alessandro Volta.` },
      { type: `num`, q: `Une résistance de 220 Ω est parcourue par 0,01 A. Quelle est la tension à ses bornes ?`, answer: 2.2, tol: 0.01, unit: `V`, explain: `V = R × I = 220 × 0,01 = 2,2 V.` },
      { type: `num`, q: `Une pile de 12 V fait passer 2 A dans un moteur. Quelle est la résistance du moteur ?`, answer: 6, tol: 0, unit: `Ω`, explain: `R = V ÷ I = 12 ÷ 2 = 6 Ω.` },
      { type: `num`, q: `Deux résistances de 100 Ω et 47 Ω en série : résistance totale ?`, answer: 147, tol: 0, unit: `Ω`, explain: `En série, les résistances s'additionnent : 100 + 47 = 147 Ω.` },
      { type: `tf`, q: `Le courant circule même si le circuit est ouvert.`, answer: false, explain: `Il faut un circuit fermé.` },
      { type: `tf`, q: `Les prises de la maison sont branchées en parallèle.`, answer: true, explain: `Ainsi chaque appareil reçoit 230 V et fonctionne indépendamment.` },
      { type: `mc`, q: `Quel capteur utilise un lampadaire qui s'allume tout seul dans le noir ?`, options: [`Thermistance`, `Photorésistance (LDR)`, `Accéléromètre`], answer: 1, explain: `La photorésistance change de résistance avec la lumière.` },
      { type: `text`, q: `Comment s'appelle l'Italien qui inventa la pile en 1799 ?`, answer: [`volta`, `alessandro volta`], explain: `Alessandro Volta, professeur à Pavie.` },
      { type: `order`, q: `Mets dans l'ordre le parcours du signal dans une lampe automatique.`, items: [`Le capteur détecte l'obscurité`, `Le circuit de contrôle traite le signal`, `Le transistor ferme le circuit`, `La LED s'allume`], explain: `Capteur ➜ contrôle ➜ interrupteur électronique ➜ actionneur (LED).` },
      { type: `mc`, q: `Pourquoi une LED a-t-elle besoin d'une résistance en série ?`, options: [`Pour changer de couleur`, `Pour limiter le courant et éviter qu'elle grille`, `Pour la faire clignoter`], answer: 1, explain: `Sans résistance, le courant monterait trop.` },
      { type: `mc`, q: `De quel matériau sont faites presque toutes les puces ?`, options: [`Cuivre`, `Silicium`, `Plastique`], answer: 1, explain: `Le silicium est un semi-conducteur.` }
    ]
  }
});
