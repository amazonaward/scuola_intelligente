TOPIC('fr', {
  id: `m3-tec-robotica`,
  title: `Robotique et automatisation`,
  intro: `Un bras mécanique qui soude les voitures, un robot aspirateur qui évite le canapé, un rover qui explore Mars, le portail qui s'ouvre tout seul. Ce sont tous des systèmes <b>automatiques</b> : ils <b>perçoivent</b> l'environnement avec des <b>capteurs</b>, ils <b>décident</b> avec un <b>contrôleur</b> et ils <b>agissent</b> avec des <b>actionneurs</b>. Découvrons comment ils fonctionnent et comment « raisonne » un concepteur de robots. 🦾🤖`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Automatisation et robots : quelle différence ?`,
      html: `<p>L'<b>automatisation</b> consiste à utiliser des machines et des systèmes de commande pour effectuer des tâches <b>sans l'intervention continue</b> d'une personne : un lave-linge, un feu de circulation, une ligne d'embouteillage.</p>
<p>Un <b>robot</b> est une machine automatique <b>programmable</b> et <b>polyvalente</b> : il peut accomplir des tâches différentes en changeant de programme, et il se déplace souvent dans l'espace. Le lave-linge est automatique mais fait toujours la même chose ; un bras robotisé soude aujourd'hui, peint ou emballe demain.</p>
<p>Chaque robot suit le cycle <b>percevoir ➜ traiter ➜ agir</b> (en anglais <i>sense – think – act</i>) :</p>
<ol>
<li><b>Capteurs</b> : ils recueillent des informations (distance, lumière, contact, position…).</li>
<li><b>Contrôleur</b> : un ordinateur ou un microcontrôleur exécute le <b>programme</b> et décide quoi faire.</li>
<li><b>Actionneurs</b> : ils transforment la commande en action (moteurs, vérins, pinces, lampes, haut-parleurs).</li>
</ol>
<p>Il faut ensuite une <b>source d'énergie</b> (batterie, réseau électrique, air comprimé) et une <b>structure mécanique</b> (châssis, articulations, roues, engrenages).</p>`
    },
    {
      type: `svg`, title: `Les parties d'un robot mobile`,
      caption: `Capteurs (yeux et oreilles), contrôleur (cerveau), actionneurs (muscles), batterie (énergie), structure (squelette).`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f1f5f9"/>
<rect x="200" y="110" width="200" height="110" rx="16" fill="#94a3b8" stroke="#334155" stroke-width="4"/>
<rect x="250" y="135" width="100" height="45" rx="6" fill="#22c55e" stroke="#14532d" stroke-width="3"/>
<text x="300" y="164" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">CPU</text>
<rect x="225" y="190" width="60" height="22" rx="4" fill="#facc15" stroke="#854d0e" stroke-width="2"/>
<circle cx="230" cy="235" r="28" fill="#1e293b"/><circle cx="230" cy="235" r="10" fill="#64748b"/>
<circle cx="370" cy="235" r="28" fill="#1e293b"/><circle cx="370" cy="235" r="10" fill="#64748b"/>
<rect x="395" y="125" width="40" height="40" rx="6" fill="#3b82f6" stroke="#1e3a8a" stroke-width="3"/>
<circle cx="415" cy="137" r="7" fill="#e0f2fe"/><circle cx="415" cy="155" r="7" fill="#e0f2fe"/>
<line x1="300" y1="110" x2="300" y2="70" stroke="#334155" stroke-width="4"/>
<circle cx="300" cy="62" r="10" fill="#ef4444"/>
<rect x="160" y="140" width="40" height="18" rx="4" fill="#f97316" stroke="#7c2d12" stroke-width="2"/>
<g font-size="15" font-weight="bold">
<text x="470" y="140" fill="#1e40af">capteur à</text><text x="470" y="160" fill="#1e40af">ultrasons</text>
<text x="330" y="55" fill="#b91c1c">LED d'état</text>
<text x="300" y="30" fill="#166534" text-anchor="middle">contrôleur = « cerveau »</text>
<text x="20" y="150" fill="#9a3412">capteur de</text><text x="20" y="170" fill="#9a3412">contact</text>
<text x="20" y="250" fill="#0f172a">moteurs + roues</text><text x="20" y="270" fill="#0f172a">(actionneurs)</text>
<text x="430" y="250" fill="#854d0e">batterie</text>
</g>
<line x1="300" y1="36" x2="300" y2="50" stroke="#166534" stroke-width="2"/>
<line x1="465" y1="145" x2="437" y2="145" stroke="#1e40af" stroke-width="2"/>
<line x1="105" y1="155" x2="158" y2="150" stroke="#9a3412" stroke-width="2"/>
<line x1="135" y1="255" x2="200" y2="240" stroke="#0f172a" stroke-width="2"/>
<line x1="428" y1="245" x2="288" y2="205" stroke="#854d0e" stroke-width="2"/>
</svg>`
    },
    {
      type: `text`, title: `2. Capteurs : les sens du robot`,
      html: `<table>
<tr><th>Capteur</th><th>Ce qu'il mesure</th><th>Exemple d'usage</th></tr>
<tr><td>Fin de course / bouton</td><td>contact (oui/non)</td><td>le robot aspirateur heurte un meuble</td></tr>
<tr><td>Ultrasons</td><td>distance, avec l'écho (comme les chauves-souris)</td><td>éviter les obstacles</td></tr>
<tr><td>Infrarouges</td><td>réflexion de la lumière IR, proximité</td><td>suivre une ligne noire, capteur anti-chute des escaliers</td></tr>
<tr><td>Codeur (encoder)</td><td>de combien a tourné un moteur</td><td>savoir de combien de cm il s'est déplacé</td></tr>
<tr><td>Gyroscope / accéléromètre</td><td>rotation, inclinaison</td><td>drones et robots qui tiennent en équilibre</td></tr>
<tr><td>Caméra</td><td>images</td><td>reconnaître des objets (avec l'IA)</td></tr>
<tr><td>LiDAR</td><td>distances avec des impulsions laser, carte 3D</td><td>voitures autonomes, rovers</td></tr>
</table>`
    },
    {
      type: `text`, title: `3. Actionneurs : les muscles du robot`,
      html: `<ul>
<li><b>Moteur à courant continu (DC)</b> : tourne vite tant qu'il est alimenté ; pour les roues et les ventilateurs. Il a souvent un <b>réducteur</b> (engrenages) qui diminue la vitesse et augmente la force.</li>
<li><b>Servomoteur</b> : tourne jusqu'à un <b>angle précis</b> (par exemple de 0° à 180°) et le maintient ; pour les bras, les gouvernes, les pinces.</li>
<li><b>Moteur pas-à-pas</b> (stepper) : avance par <b>pas</b> précis (ex. 200 pas = 1 tour, soit 1,8° par pas) ; pour les imprimantes 3D et les machines CNC.</li>
<li><b>Vérins pneumatiques</b> (air comprimé) et <b>hydrauliques</b> (huile) : forces importantes, pour les presses et les pelleteuses.</li>
<li><b>Électrovannes, relais</b> : ouvrent et ferment des flux d'eau, d'air ou de courant.</li>
<li>Les <b>LED, écrans et haut-parleurs</b> sont aussi des actionneurs : ils « agissent » en communiquant.</li>
</ul>
<p><b>Degrés de liberté</b> (DDL) : le nombre de mouvements indépendants qu'un robot peut faire. Un bras industriel typique a <b>6 degrés de liberté</b> (6 articulations qui tournent) : il peut amener l'outil dans n'importe quelle position et avec n'importe quelle orientation dans son espace de travail. Le bras humain, de l'épaule au poignet, en a 7.</p>`
    },
    {
      type: `3d`, title: `Un bras robotisé à articulations`,
      scene: `molecule`,
      options: {
        atoms: [
          { x: 0, y: -1.8, z: 0, r: 0.55, color: `#475569`, label: `base (rotation)` },
          { x: 0, y: -1.0, z: 0, r: 0.35, color: `#f97316`, label: `épaule` },
          { x: 0.9, y: 0.2, z: 0, r: 0.3, color: `#f97316`, label: `coude` },
          { x: 1.9, y: 0.6, z: 0.3, r: 0.25, color: `#f97316`, label: `poignet` },
          { x: 2.5, y: 0.9, z: 0.4, r: 0.2, color: `#3b82f6`, label: `pince (organe terminal)` },
          { x: 2.6, y: 0.3, z: 0.5, r: 0.18, color: `#22c55e`, label: `objet` }
        ],
        bonds: [[0, 1], [1, 2], [2, 3], [3, 4]]
      },
      caption: `Chaque sphère orange est une articulation mue par un servomoteur. Fais tourner la scène : la base pivote, l'épaule et le coude lèvent le bras, le poignet oriente la pince.`
    },
    {
      type: `quiz`, title: `Mini-quiz : capteur ou actionneur ?`,
      questions: [
        { type: `mc`, q: `Un servomoteur est…`, options: [`un capteur`, `un actionneur`, `une batterie`], answer: 1, explain: `Le servomoteur produit un mouvement : c'est un actionneur.` },
        { type: `mc`, q: `Quel capteur mesure la distance grâce à l'écho ?`, options: [`Ultrasons`, `Thermistance`, `Microphone`], answer: 0, explain: `Le capteur à ultrasons émet un son et mesure le temps que met l'écho à revenir.` },
        { type: `num`, q: `Un moteur pas-à-pas fait 200 pas par tour. De combien de degrés tourne-t-il à chaque pas ?`, answer: 1.8, tol: 0.01, unit: `°`, explain: `360° ÷ 200 = 1,8°.` }
      ]
    },
    {
      type: `widget`, title: `Jeu : capteurs, contrôleurs, actionneurs`,
      widget: `classify`,
      options: {
        groups: [`Capteur 👁️`, `Contrôleur 🧠`, `Actionneur 💪`],
        items: [
          [`📏 capteur à ultrasons`, 0], [`📷 caméra`, 0], [`🌡️ thermistance`, 0], [`🔘 fin de course`, 0],
          [`🖥️ microcontrôleur (Arduino)`, 1], [`🏭 automate programmable (PLC) d'usine`, 1],
          [`⚙️ moteur CC`, 2], [`🦾 servomoteur`, 2], [`🔧 vérin pneumatique`, 2], [`🔊 haut-parleur`, 2]
        ]
      },
      caption: `Rappelle-toi le cycle : percevoir (capteur) ➜ traiter (contrôleur) ➜ agir (actionneur).`
    },
    {
      type: `text`, title: `4. La commande : boucle ouverte et boucle fermée`,
      html: `<p><b>Boucle ouverte</b> (<i>open loop</i>) : le contrôleur donne la commande et <b>ne contrôle pas le résultat</b>. Exemple : le grille-pain avec minuteur. Si le pain est plus épais, il sort peu grillé : le grille-pain ne le sait pas.</p>
<p><b>Boucle fermée</b> (<i>closed loop</i>, avec <b>rétroaction</b> ou <i>feedback</i>) : un capteur <b>mesure le résultat</b> et le contrôleur le compare à l'<b>objectif</b> (la <i>consigne</i>), en corrigeant en permanence. Exemple : le <b>thermostat</b>. Objectif 20 °C ➜ le capteur mesure 18 °C ➜ il allume la chaudière ➜ une fois à 20 °C, il l'éteint.</p>
<p>La commande peut être :</p>
<ul>
<li><b>ON/OFF</b> (tout ou rien) : simple, mais la valeur « oscille » au-dessus et en dessous de l'objectif ;</li>
<li><b>proportionnelle</b> : plus on est loin de l'objectif, plus la correction est forte (comme lorsque tu freines doucement en approchant de l'arrêt). Les systèmes industriels utilisent souvent la commande <b>PID</b>, qui est une évolution de cette idée.</li>
</ul>`
    },
    {
      type: `svg`, title: `Schéma-bloc : boucle fermée`,
      caption: `Le capteur « ferme la boucle » : le résultat revient en arrière et est comparé à l'objectif.`,
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fff7ed"/>
<rect x="15" y="70" width="95" height="56" rx="10" fill="#a855f7"/>
<text x="62" y="96" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">Objectif</text>
<text x="62" y="115" font-size="13" fill="#fff" text-anchor="middle">20 °C</text>
<circle cx="150" cy="98" r="20" fill="#fff" stroke="#0f172a" stroke-width="3"/>
<text x="150" y="105" font-size="20" text-anchor="middle" fill="#0f172a">−</text>
<rect x="200" y="70" width="110" height="56" rx="10" fill="#22c55e"/>
<text x="255" y="96" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">Contrôleur</text>
<text x="255" y="115" font-size="12" fill="#fff" text-anchor="middle">décide</text>
<rect x="340" y="70" width="110" height="56" rx="10" fill="#f97316"/>
<text x="395" y="96" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">Actionneur</text>
<text x="395" y="115" font-size="12" fill="#fff" text-anchor="middle">chaudière</text>
<rect x="480" y="70" width="105" height="56" rx="10" fill="#ef4444"/>
<text x="532" y="96" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">Environnement</text>
<text x="532" y="115" font-size="12" fill="#fff" text-anchor="middle">la pièce</text>
<rect x="320" y="180" width="140" height="50" rx="10" fill="#3b82f6"/>
<text x="390" y="211" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">Capteur 🌡️</text>
<g stroke="#0f172a" stroke-width="3" fill="none">
<line x1="110" y1="98" x2="130" y2="98"/><line x1="170" y1="98" x2="198" y2="98"/><line x1="310" y1="98" x2="338" y2="98"/><line x1="450" y1="98" x2="478" y2="98"/>
<polyline points="532,126 532,205 462,205"/><polyline points="320,205 150,205 150,118"/>
</g>
<text x="160" y="60" font-size="13" fill="#0f172a">écart</text>
<text x="230" y="245" font-size="13" fill="#1e40af" font-weight="bold">rétroaction (feedback) : mesure réelle 18 °C</text>
</svg>`
    },
    {
      type: `text`, title: `5. Programmer un robot : l'exemple du suiveur de ligne`,
      html: `<p>Un robot <b>suiveur de ligne</b> a deux capteurs infrarouges sous le museau, un à gauche et un à droite, et deux moteurs. La ligne noire absorbe la lumière IR, le sol blanc la réfléchit. Le programme (en <b>pseudocode</b>) est une boucle infinie :</p>
<pre>RÉPÈTE INDÉFINIMENT
  SI gauche voit blanc ET droit voit blanc
     ALORS va tout droit (moteurs identiques)
  SINON SI gauche voit noir
     ALORS tourne à gauche (ralentit le moteur gauche)
  SINON SI droit voit noir
     ALORS tourne à droite (ralentit le moteur droit)
FIN RÉPÈTE</pre>
<p>Le robot lit les capteurs des dizaines de fois par seconde : c'est une petite <b>boucle fermée</b>. Avec Scratch, mBlock ou la programmation par blocs d'Arduino, on construit exactement ainsi, avec des blocs <b>« répéter indéfiniment »</b> et <b>« si… alors… sinon »</b>.</p>`
    },
    {
      type: `example`, title: `Exemple pratique : le robot aspirateur`,
      html: `<ul>
<li><b>Capteurs</b> : pare-chocs avec fins de course (chocs), infrarouges anti-chute (escaliers), codeurs sur les roues, parfois LiDAR ou caméra pour établir la <b>carte</b> de la maison.</li>
<li><b>Contrôleur</b> : décide le trajet, retient les zones déjà nettoyées, retourne à la base quand la batterie est presque vide.</li>
<li><b>Actionneurs</b> : deux moteurs pour les roues, moteur de la brosse, ventilateur d'aspiration.</li>
</ul>
<p>Quand la batterie descend sous un seuil (par exemple 15 %), le programme change d'objectif : « retourne à la base ». C'est un exemple de <b>décision fondée sur les capteurs</b>.</p>`
    },
    {
      type: `example`, title: `Exemple pratique : l'usine automatique (Industrie 4.0)`,
      html: `<p>Dans une usine automobile, la caisse passe sur un tapis roulant. Un capteur photoélectrique la détecte ➜ le <b>PLC</b> (automate programmable industriel, « l'ordinateur robuste » des usines) arrête le tapis ➜ six bras robotisés soudent des centaines de points en quelques secondes ➜ une caméra contrôle la qualité ➜ le tapis repart.</p>
<p>Avec l'<b>Industrie 4.0</b>, les machines sont reliées en réseau, envoient des données en temps réel et signalent seules le besoin d'une maintenance. À côté des robots classiques, enfermés dans des cages de sécurité, il y a les <b>cobots</b> (robots collaboratifs), conçus pour travailler aux côtés des personnes et s'arrêter s'ils les touchent.</p>`
    },
    {
      type: `curiosity`, title: `Le saviez-vous ? Le mot « robot » vient d'une pièce de théâtre ?`,
      html: `<p>En <b>1920</b>, l'écrivain tchèque <b>Karel Čapek</b> écrivit le drame <i>R.U.R. (Rossum's Universal Robots)</i>, où une usine produit des travailleurs artificiels. Le mot <b>robot</b> lui fut suggéré par son frère Josef : il vient du tchèque <i>robota</i>, « travail forcé ». En 1942, l'écrivain <b>Isaac Asimov</b> inventa les fameuses <b>Trois lois de la robotique</b> (la première : un robot ne peut pas porter atteinte à un être humain). Le premier robot industriel, <b>Unimate</b>, entra dans une usine General Motors en <b>1961</b>.</p>`
    },
    {
      type: `curiosity`, title: `Le saviez-vous ? Léonard a conçu un robot, et l'Italie en possède un célèbre ?`,
      html: `<p>Vers <b>1495</b>, <b>Léonard de Vinci</b> dessina un <b>chevalier mécanique</b> en armure, mû par des poulies et des câbles, capable de se lever, de bouger les bras et la tête. En 2002, un ingénieur de la NASA l'a reconstruit : il fonctionnait ! Aujourd'hui, à l'<b>Istituto Italiano di Tecnologia</b> de Gênes, on a développé <b>iCub</b>, un robot humanoïde de la taille d'un enfant de 4 ans, utilisé dans le monde entier pour étudier comment on apprend.</p>`
    },
    {
      type: `remember`, title: `À retenir`,
      html: `<ul>
<li>Robot = machine automatique <b>programmable</b> : capteurs ➜ contrôleur ➜ actionneurs.</li>
<li>Capteurs : contact, ultrasons, infrarouges, codeurs, gyroscope, caméra, LiDAR.</li>
<li>Actionneurs : moteurs CC, servomoteurs, pas-à-pas, vérins, relais.</li>
<li>Boucle ouverte : aucun contrôle du résultat. Boucle fermée : <b>rétroaction</b> avec un capteur.</li>
<li>Degrés de liberté = mouvements indépendants (un bras industriel en a généralement 6).</li>
</ul>`
    },
    {
      type: `alternatives`, title: `D'autres façons de le comprendre`,
      intro: `Les robots sont plus faciles à comprendre si on les compare à quelque chose que l'on connaît déjà.`,
      tabs: [
        {
          label: `🧍 Le corps humain`,
          html: `<p>Toi aussi, tu es un « système à boucle fermée » !</p>
<ul>
<li><b>Capteurs</b> = yeux, oreilles, peau, l'oreille interne pour l'équilibre.</li>
<li><b>Contrôleur</b> = cerveau et moelle épinière.</li>
<li><b>Actionneurs</b> = muscles.</li>
<li><b>Fils</b> = nerfs ; <b>énergie</b> = nourriture.</li>
</ul>
<p>Quand tu prends un verre, les yeux contrôlent sans cesse la main et le cerveau corrige le mouvement : c'est la rétroaction. Essaie de le prendre les yeux fermés : cela devient une boucle ouverte, et c'est beaucoup plus difficile !</p>`
        },
        {
          label: `🚿 La douche`,
          html: `<p>Régler la température de la douche est une commande en boucle fermée faite par toi :</p>
<ol>
<li><b>Objectif</b> : eau tiède.</li>
<li><b>Capteur</b> : ta main sent que l'eau est trop froide.</li>
<li><b>Contrôleur</b> : le cerveau décide « plus chaud ».</li>
<li><b>Actionneur</b> : la main tourne le mitigeur.</li>
<li>On recommence : mesurer, comparer, corriger.</li>
</ol>
<p>Si tu tournes trop brusquement, l'eau devient bouillante, puis tu tournes trop de l'autre côté… c'est l'<b>oscillation</b> de la commande ON/OFF. Si tu tournes petit à petit, tu fais une commande <b>proportionnelle</b>.</p>`
        },
        {
          label: `🏷️ Reconnais les parties`,
          html: `<p>Touche les points du robot et choisis la bonne partie.</p>`,
          widget: `labelDiagram`,
          options: {
            svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#f8fafc"/><rect x="110" y="110" width="180" height="100" rx="14" fill="#94a3b8" stroke="#334155" stroke-width="4"/><rect x="160" y="130" width="80" height="40" rx="6" fill="#22c55e"/><rect x="150" y="180" width="50" height="20" rx="4" fill="#facc15"/><circle cx="140" cy="225" r="26" fill="#1e293b"/><circle cx="260" cy="225" r="26" fill="#1e293b"/><rect x="290" y="130" width="36" height="36" rx="6" fill="#3b82f6"/><rect x="74" y="140" width="36" height="16" rx="4" fill="#f97316"/></svg>`,
            spots: [
              { x: 200, y: 150, label: `Contrôleur` },
              { x: 308, y: 148, label: `Capteur à ultrasons` },
              { x: 140, y: 225, label: `Roue avec moteur` },
              { x: 175, y: 190, label: `Batterie` },
              { x: 92, y: 148, label: `Capteur de contact` }
            ]
          }
        },
        {
          label: `🧩 Associe robot et tâche`,
          html: `<p>Chaque robot est conçu pour une tâche : relie les deux éléments.</p>`,
          widget: `match`,
          options: { pairs: [
            [`Bras industriel à 6 axes`, `souder les caisses des voitures`],
            [`Rover Perseverance`, `explorer Mars depuis 2021`],
            [`Robot aspirateur`, `nettoyer la maison en évitant les obstacles`],
            [`Cobot`, `travailler aux côtés des personnes`],
            [`Drone`, `filmer et inspecter depuis le ciel`],
            [`Robot chirurgical`, `aider le médecin lors d'opérations précises`]
          ] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Carte : la robotique`,
      nodes: [
        { id: `rob`, label: `Robot`, x: 50, y: 8, color: `#64748b`, html: `Machine automatique programmable.`, why: `Le mot naît en 1920 avec Karel Čapek (du tchèque <i>robota</i>, travail forcé). L'idée de machines qui se déplacent seules est ancienne : déjà Héron d'Alexandrie (Ier siècle apr. J.-C.) décrivait des automates à vapeur et à contrepoids.` },
        { id: `sens`, label: `Capteurs`, x: 15, y: 32, color: `#3b82f6`, html: `Perçoivent l'environnement.`, why: `Beaucoup de capteurs imitent la nature : les ultrasons copient l'écholocalisation des chauves-souris ; la caméra copie l'œil. Ils transforment une grandeur physique en signal électrique.` },
        { id: `ctrl`, label: `Contrôleur`, x: 50, y: 32, color: `#22c55e`, html: `Exécute le programme et décide.`, why: `Depuis les années 1970, les microprocesseurs (le premier, l'Intel 4004 de 1971, dont le projet fut dirigé par l'Italien Federico Faggin) ont rendu les contrôleurs petits et peu coûteux. En 1968 naquit le PLC pour les usines.` },
        { id: `att`, label: `Actionneurs`, x: 85, y: 32, color: `#f97316`, html: `Moteurs, servos, vérins : produisent l'action.`, why: `Le moteur électrique repose sur l'électromagnétisme découvert par Ørsted (1820) et Faraday (1821) : un courant dans un champ magnétique produit une force.` },
        { id: `ciclo`, label: `Percevoir-traiter-agir`, x: 50, y: 55, color: `#a855f7`, html: `Le cycle qui se répète sans cesse.`, why: `C'est le schéma de base de tout système intelligent, naturel ou artificiel : même un animal perçoit, décide et se déplace.` },
        { id: `feed`, label: `Rétroaction`, x: 20, y: 78, color: `#ef4444`, html: `Le capteur mesure le résultat et le compare à l'objectif.`, why: `Un des premiers exemples fut le <b>régulateur centrifuge</b> de la machine à vapeur de James Watt (1788). En 1948, Norbert Wiener fonda la <b>cybernétique</b>, la science du contrôle et de la communication chez les animaux et les machines.` },
        { id: `gdl`, label: `Degrés de liberté`, x: 50, y: 82, color: `#eab308`, html: `Mouvements indépendants du robot.`, why: `Un objet rigide dans l'espace a 6 degrés de liberté (3 translations + 3 rotations) : c'est pourquoi un bras à 6 articulations peut atteindre chaque position et orientation dans son espace de travail.` },
        { id: `auto`, label: `Automatisation et Industrie 4.0`, x: 82, y: 78, color: `#0ea5e9`, html: `Usines aux machines reliées en réseau.`, why: `Après la mécanisation (vapeur), l'électricité et l'informatique, la « quatrième révolution industrielle » relie machines, capteurs et données par Internet. Le terme Industrie 4.0 est né en Allemagne en 2011.` }
      ],
      edges: [
        [`rob`, `sens`, `a`], [`rob`, `ctrl`, `a`], [`rob`, `att`, `a`], [`sens`, `ciclo`, `perçoit`], [`ctrl`, `ciclo`, `traite`], [`att`, `ciclo`, `agit`],
        [`ciclo`, `feed`, `avec`], [`att`, `gdl`, `définissent`], [`rob`, `auto`, `en usine`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz : commande et programmation`,
      questions: [
        { type: `mc`, q: `Un grille-pain avec minuteur est un système…`, options: [`à boucle ouverte`, `à boucle fermée`], answer: 0, explain: `Il ne mesure pas le degré de grillage du pain : boucle ouverte.` },
        { type: `mc`, q: `Dans le suiveur de ligne, si le capteur droit voit la ligne noire, le robot doit…`, options: [`tourner à droite`, `tourner à gauche`, `s'arrêter pour toujours`], answer: 0, explain: `La ligne se déplace vers la droite : le robot tourne à droite pour la suivre.` },
        { type: `tf`, q: `Le thermostat de la maison utilise la rétroaction.`, answer: true, explain: `Il mesure la température et la compare à celle souhaitée.` }
      ]
    }
  ],
  glossary: [
    { t: `Robot`, d: `Machine automatique programmable qui perçoit, traite et agit.` },
    { t: `Automatisation`, d: `Utilisation de machines et de commandes pour effectuer des tâches sans intervention humaine continue.` },
    { t: `Capteur`, d: `Dispositif qui détecte une grandeur physique et la transforme en signal.` },
    { t: `Actionneur`, d: `Dispositif qui transforme une commande en action (moteur, vérin…).` },
    { t: `Contrôleur`, d: `Ordinateur, microcontrôleur ou PLC qui exécute le programme.` },
    { t: `Rétroaction (feedback)`, d: `Le résultat est mesuré et sert à corriger l'action.` },
    { t: `Servomoteur`, d: `Moteur qui tourne jusqu'à un angle précis et le maintient.` },
    { t: `Degrés de liberté`, d: `Nombre de mouvements indépendants d'un mécanisme.` },
    { t: `PLC`, d: `Automate programmable industriel, utilisé dans les usines.` },
    { t: `Cobot`, d: `Robot collaboratif, conçu pour travailler près des personnes.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `order`, q: `Mets dans l'ordre le cycle de fonctionnement d'un robot.`, items: [`Le capteur perçoit`, `Le contrôleur traite`, `L'actionneur agit`], explain: `Percevoir ➜ traiter ➜ agir.` },
      { type: `mc`, q: `Qu'est-ce qui distingue un robot d'une simple machine automatique ?`, options: [`Il est plus grand`, `Il est programmable pour des tâches différentes`, `Il fonctionne sur batterie`], answer: 1, explain: `Le robot est polyvalent et reprogrammable.` },
      { type: `mc`, q: `Quel actionneur utilise une imprimante 3D pour des mouvements très précis ?`, options: [`Moteur pas-à-pas`, `Vérin hydraulique`, `Haut-parleur`], answer: 0, explain: `Le stepper avance par pas d'angle connu.` },
      { type: `num`, q: `Un servomoteur va de 0° à 180°. S'il est à mi-course, à combien de degrés se trouve-t-il ?`, answer: 90, tol: 0, unit: `°`, explain: `180 ÷ 2 = 90°.` },
      { type: `num`, q: `Un moteur tourne à 3000 tours par minute. Avec un réducteur 1:50, combien de tours par minute fait la roue ?`, answer: 60, tol: 0, unit: `tours/min`, explain: `3000 ÷ 50 = 60 tours par minute (mais avec 50 fois plus de force).` },
      { type: `tf`, q: `Dans un système à boucle ouverte, le résultat est mesuré et corrigé.`, answer: false, explain: `C'est la boucle fermée ; la boucle ouverte ne contrôle pas le résultat.` },
      { type: `tf`, q: `Un bras industriel typique a 6 degrés de liberté.`, answer: true, explain: `6 articulations : 3 pour la position de l'outil et 3 pour son orientation.` },
      { type: `text`, q: `De quelle langue vient le mot « robot » ?`, answer: [`tchèque`, `du tchèque`, `langue tchèque`, `tchécoslovaque`], explain: `Du tchèque robota (travail forcé), dans le drame R.U.R. de Karel Čapek (1920).` },
      { type: `mc`, q: `À quoi sert le capteur anti-chute d'un robot aspirateur ?`, options: [`Ne pas tomber des escaliers`, `Mesurer la poussière`, `Recharger la batterie`], answer: 0, explain: `Un capteur infrarouge tourné vers le bas détecte le vide.` },
      { type: `mc`, q: `Qu'est-ce qu'un cobot ?`, options: [`Un robot jouet`, `Un robot qui travaille en sécurité aux côtés des personnes`, `Un robot sous-marin`], answer: 1, explain: `Cobot = collaborative robot.` },
      { type: `mc`, q: `Quel exemple est une commande en boucle fermée ?`, options: [`Le régulateur de vitesse qui maintient la vitesse de la voiture`, `Une minuterie de cuisine`, `Un ventilateur avec interrupteur`], answer: 0, explain: `Le régulateur de vitesse mesure la vitesse et corrige l'accélérateur.` },
      { type: `text`, q: `Quel génie italien dessina un chevalier mécanique vers 1495 ?`, answer: [`léonard`, `léonard de vinci`, `leonard`, `leonard de vinci`], explain: `Léonard de Vinci.` }
    ]
  }
});
