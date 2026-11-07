TOPIC('fr', {
  id: `p5-tec-dati-binario`,
  title: `Données et code binaire`,
  intro: `Un ordinateur peut t'afficher une photo, te faire écouter une chanson, écrire ton prénom… et pourtant, à l'intérieur, il ne connaît que <b>deux symboles</b> : <b>0</b> et <b>1</b>. Comment fait-il ? Aujourd'hui, nous découvrons le <b>code binaire</b>, les <b>bits</b> et les <b>octets</b>, et nous apprenons à écrire des nombres, des lettres et des dessins comme un ordinateur les « voit ». 💻`,
  minutes: 35,
  sections: [
    {
      type: `text`, title: `1. Que sont les données ?`,
      html: `<p>Les <b>données</b> sont des informations : un nombre, un mot, la couleur d'un point dans une photo, une note de musique, la température d'aujourd'hui.</p>
<p>L'ordinateur fonctionne avec l'<b>électricité</b>. À l'intérieur, il y a des milliards de minuscules interrupteurs, les <b>transistors</b>, qui ne peuvent être que dans deux états :</p>
<ul>
<li>💡 <b>allumé</b> (le courant passe) = <b>1</b></li>
<li>⚫ <b>éteint</b> (le courant ne passe pas) = <b>0</b></li>
</ul>
<p>Chaque 0 ou 1 s'appelle un <b>bit</b> (de l'anglais <i>BInary digiT</i>, « chiffre binaire »). C'est la plus petite information qui existe : un oui ou un non.</p>
<p>Avec un seul bit, on dit peu de choses (oui/non, allumé/éteint). Mais en mettant <b>beaucoup de bits à la suite</b>, on peut représenter <b>n'importe quoi</b> !</p>`
    },
    {
      type: `text`, title: `2. Combien de combinaisons ?`,
      html: `<p>Chaque bit en plus <b>double</b> les combinaisons possibles :</p>
<table>
<tr><th>Bits</th><th>Combinaisons</th><th>Combien</th></tr>
<tr><td>1</td><td>0 · 1</td><td>2</td></tr>
<tr><td>2</td><td>00 · 01 · 10 · 11</td><td>4</td></tr>
<tr><td>3</td><td>000 · 001 · 010 · 011 · 100 · 101 · 110 · 111</td><td>8</td></tr>
<tr><td>4</td><td>…</td><td>16</td></tr>
<tr><td><b>8</b></td><td>…</td><td><b>256</b></td></tr>
</table>
<p>Un groupe de <b>8 bits</b> s'appelle un <b>octet</b> (en anglais, <i>byte</i>). Avec un octet, on peut écrire <b>256</b> valeurs différentes (de 0 à 255) : assez pour toutes les lettres majuscules et minuscules, les chiffres et la ponctuation !</p>`
    },
    {
      type: `text`, title: `3. Compter en binaire`,
      html: `<p>Nous comptons en <b>base 10</b> : nous utilisons 10 chiffres (0–9) et chaque position vaut 10 fois celle de droite (unités, dizaines, centaines…).</p>
<p>L'ordinateur compte en <b>base 2</b> : il utilise 2 chiffres (0 et 1) et chaque position vaut le <b>double</b> de celle de droite :</p>
<table>
<tr><th>128</th><th>64</th><th>32</th><th>16</th><th>8</th><th>4</th><th>2</th><th>1</th></tr>
</table>
<p><b>Du binaire au décimal</b> : additionne les valeurs des positions où il y a un <b>1</b>.</p>
<p>Exemple : <b>1101</b> ➜ 8 + 4 + 0 + 1 = <b>13</b>.</p>
<p><b>Du décimal au binaire</b> (méthode des divisions par 2) : divise par 2 et écris le reste ; continue jusqu'à arriver à 0 ; puis lis les restes <b>de bas en haut</b>.</p>
<p>Exemple : 13 : 2 = 6 reste <b>1</b> · 6 : 2 = 3 reste <b>0</b> · 3 : 2 = 1 reste <b>1</b> · 1 : 2 = 0 reste <b>1</b> ➜ je lis de bas en haut : <b>1101</b>. ✅</p>
<p>Les premiers nombres : 0 = 0 · 1 = 1 · 2 = 10 · 3 = 11 · 4 = 100 · 5 = 101 · 6 = 110 · 7 = 111 · 8 = 1000.</p>
<p>⚠️ En binaire, « 10 » ne se lit <b>pas</b> « dix » mais « un-zéro », et vaut 2 !</p>`
    },
    {
      type: `svg`, title: `Les ampoules binaires`,
      caption: `Chaque ampoule allumée vaut le nombre écrit en dessous. Ici sont allumées 8, 4 et 1 : 8 + 4 + 1 = 13, c'est-à-dire 1101.`,
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#0f172a"/>
<text x="300" y="34" font-size="20" text-anchor="middle" fill="#f8fafc" font-weight="bold">Le nombre 13 en binaire</text>
<g>
<circle cx="120" cy="105" r="45" fill="#facc15"/><rect x="105" y="148" width="30" height="20" fill="#94a3b8"/>
<text x="120" y="115" font-size="30" text-anchor="middle" fill="#713f12" font-weight="bold">1</text>
<text x="120" y="200" font-size="22" text-anchor="middle" fill="#facc15" font-weight="bold">8</text>
</g>
<g>
<circle cx="240" cy="105" r="45" fill="#facc15"/><rect x="225" y="148" width="30" height="20" fill="#94a3b8"/>
<text x="240" y="115" font-size="30" text-anchor="middle" fill="#713f12" font-weight="bold">1</text>
<text x="240" y="200" font-size="22" text-anchor="middle" fill="#facc15" font-weight="bold">4</text>
</g>
<g>
<circle cx="360" cy="105" r="45" fill="#334155" stroke="#64748b" stroke-width="3"/><rect x="345" y="148" width="30" height="20" fill="#94a3b8"/>
<text x="360" y="115" font-size="30" text-anchor="middle" fill="#94a3b8" font-weight="bold">0</text>
<text x="360" y="200" font-size="22" text-anchor="middle" fill="#64748b" font-weight="bold">2</text>
</g>
<g>
<circle cx="480" cy="105" r="45" fill="#facc15"/><rect x="465" y="148" width="30" height="20" fill="#94a3b8"/>
<text x="480" y="115" font-size="30" text-anchor="middle" fill="#713f12" font-weight="bold">1</text>
<text x="480" y="200" font-size="22" text-anchor="middle" fill="#facc15" font-weight="bold">1</text>
</g>
<text x="300" y="240" font-size="22" text-anchor="middle" fill="#f8fafc" font-weight="bold">8 + 4 + 0 + 1 = 13</text>
</svg>`
    },
    {
      type: `widget`, title: `Chaque position vaut le double`,
      widget: `numberLine`,
      caption: `Sur la droite sont marquées les « valeurs » des positions binaires : 1, 2, 4, 8, 16, 32, 64. Regarde comme chaque saut est le double du précédent !`,
      options: { min: 0, max: 64, step: 1, marks: [1, 2, 4, 8, 16, 32, 64] }
    },
    {
      type: `quiz`, title: `Mini-quiz : bits et nombres`,
      questions: [
        { type: `num`, q: `Combien vaut en décimal le nombre binaire 101 ?`, answer: 5, tol: 0, explain: `4 + 0 + 1 = 5.` },
        { type: `num`, q: `Combien y a-t-il de bits dans un octet ?`, answer: 8, tol: 0, unit: `bits`, explain: `1 octet = 8 bits.` },
        { type: `mc`, q: `Comment écrit-on 6 en binaire ?`, options: [`110`, `101`, `111`], answer: 0, explain: `4 + 2 + 0 = 6 ➜ 110.` }
      ]
    },
    {
      type: `text`, title: `4. Lettres, images et sons`,
      html: `<p><b>🔤 Les lettres</b> : chaque caractère a un numéro, fixé par un code identique pour tous les ordinateurs. Le premier code célèbre est l'<b>ASCII</b> (1963) : <b>A = 65</b>, B = 66, C = 67… a = 97, espace = 32. Le nombre est ensuite écrit en binaire : A = 65 = <b>01000001</b>. Aujourd'hui, on utilise <b>Unicode</b>, qui contient plus de 150 000 caractères de toutes les langues du monde, y compris les émojis 😀 !</p>
<p><b>🖼️ Les images</b> : une photo est divisée en une grille de petits carrés, les <b>pixels</b>. Pour chaque pixel, l'ordinateur mémorise la couleur avec trois nombres : combien de <b>rouge</b>, combien de <b>vert</b> et combien de <b>bleu</b> (<b>RVB</b>, en anglais <b>RGB</b>), chacun de 0 à 255, c'est-à-dire un octet chacun. En les mélangeant, on obtient plus de 16 millions de couleurs !</p>
<p><b>🎵 Les sons</b> : le microphone mesure des milliers de fois par seconde comment l'air vibre (pour la musique des CD : 44 100 fois par seconde) et enregistre chaque mesure sous forme de nombre.</p>
<p>Tout, à la fin, devient une très longue suite de 0 et de 1.</p>`
    },
    {
      type: `svg`, title: `Un dessin fait de bits`,
      caption: `Chaque ligne est un octet : 1 = petit carré coloré, 0 = blanc. C'est ainsi, de façon simplifiée, que l'ordinateur mémorise une image en noir et blanc.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-size="16" font-family="monospace" fill="#0f172a">
<text x="20" y="48">0 1 1 0 0 1 1 0</text>
<text x="20" y="78">1 1 1 1 1 1 1 1</text>
<text x="20" y="108">1 1 1 1 1 1 1 1</text>
<text x="20" y="138">1 1 1 1 1 1 1 1</text>
<text x="20" y="168">0 1 1 1 1 1 1 0</text>
<text x="20" y="198">0 0 1 1 1 1 0 0</text>
<text x="20" y="228">0 0 0 1 1 0 0 0</text>
<text x="20" y="258">0 0 0 0 0 0 0 0</text>
</g>
<text x="225" y="150" font-size="34" fill="#64748b">➜</text>
<g stroke="#cbd5e1" stroke-width="1">
<rect x="300" y="30" width="30" height="30" fill="#ffffff"/><rect x="330" y="30" width="30" height="30" fill="#ef4444"/><rect x="360" y="30" width="30" height="30" fill="#ef4444"/><rect x="390" y="30" width="30" height="30" fill="#ffffff"/><rect x="420" y="30" width="30" height="30" fill="#ffffff"/><rect x="450" y="30" width="30" height="30" fill="#ef4444"/><rect x="480" y="30" width="30" height="30" fill="#ef4444"/><rect x="510" y="30" width="30" height="30" fill="#ffffff"/>
<rect x="300" y="60" width="30" height="30" fill="#ef4444"/><rect x="330" y="60" width="30" height="30" fill="#ef4444"/><rect x="360" y="60" width="30" height="30" fill="#ef4444"/><rect x="390" y="60" width="30" height="30" fill="#ef4444"/><rect x="420" y="60" width="30" height="30" fill="#ef4444"/><rect x="450" y="60" width="30" height="30" fill="#ef4444"/><rect x="480" y="60" width="30" height="30" fill="#ef4444"/><rect x="510" y="60" width="30" height="30" fill="#ef4444"/>
<rect x="300" y="90" width="30" height="30" fill="#ef4444"/><rect x="330" y="90" width="30" height="30" fill="#ef4444"/><rect x="360" y="90" width="30" height="30" fill="#ef4444"/><rect x="390" y="90" width="30" height="30" fill="#ef4444"/><rect x="420" y="90" width="30" height="30" fill="#ef4444"/><rect x="450" y="90" width="30" height="30" fill="#ef4444"/><rect x="480" y="90" width="30" height="30" fill="#ef4444"/><rect x="510" y="90" width="30" height="30" fill="#ef4444"/>
<rect x="300" y="120" width="30" height="30" fill="#ef4444"/><rect x="330" y="120" width="30" height="30" fill="#ef4444"/><rect x="360" y="120" width="30" height="30" fill="#ef4444"/><rect x="390" y="120" width="30" height="30" fill="#ef4444"/><rect x="420" y="120" width="30" height="30" fill="#ef4444"/><rect x="450" y="120" width="30" height="30" fill="#ef4444"/><rect x="480" y="120" width="30" height="30" fill="#ef4444"/><rect x="510" y="120" width="30" height="30" fill="#ef4444"/>
<rect x="300" y="150" width="30" height="30" fill="#ffffff"/><rect x="330" y="150" width="30" height="30" fill="#ef4444"/><rect x="360" y="150" width="30" height="30" fill="#ef4444"/><rect x="390" y="150" width="30" height="30" fill="#ef4444"/><rect x="420" y="150" width="30" height="30" fill="#ef4444"/><rect x="450" y="150" width="30" height="30" fill="#ef4444"/><rect x="480" y="150" width="30" height="30" fill="#ef4444"/><rect x="510" y="150" width="30" height="30" fill="#ffffff"/>
<rect x="300" y="180" width="30" height="30" fill="#ffffff"/><rect x="330" y="180" width="30" height="30" fill="#ffffff"/><rect x="360" y="180" width="30" height="30" fill="#ef4444"/><rect x="390" y="180" width="30" height="30" fill="#ef4444"/><rect x="420" y="180" width="30" height="30" fill="#ef4444"/><rect x="450" y="180" width="30" height="30" fill="#ef4444"/><rect x="480" y="180" width="30" height="30" fill="#ffffff"/><rect x="510" y="180" width="30" height="30" fill="#ffffff"/>
<rect x="300" y="210" width="30" height="30" fill="#ffffff"/><rect x="330" y="210" width="30" height="30" fill="#ffffff"/><rect x="360" y="210" width="30" height="30" fill="#ffffff"/><rect x="390" y="210" width="30" height="30" fill="#ef4444"/><rect x="420" y="210" width="30" height="30" fill="#ef4444"/><rect x="450" y="210" width="30" height="30" fill="#ffffff"/><rect x="480" y="210" width="30" height="30" fill="#ffffff"/><rect x="510" y="210" width="30" height="30" fill="#ffffff"/>
<rect x="300" y="240" width="30" height="30" fill="#ffffff"/><rect x="330" y="240" width="30" height="30" fill="#ffffff"/><rect x="360" y="240" width="30" height="30" fill="#ffffff"/><rect x="390" y="240" width="30" height="30" fill="#ffffff"/><rect x="420" y="240" width="30" height="30" fill="#ffffff"/><rect x="450" y="240" width="30" height="30" fill="#ffffff"/><rect x="480" y="240" width="30" height="30" fill="#ffffff"/><rect x="510" y="240" width="30" height="30" fill="#ffffff"/>
</g>
</svg>`
    },
    {
      type: `text`, title: `5. Combien « pèsent » les données ?`,
      html: `<p>Comme les mètres ont les kilomètres, les octets ont aussi leurs multiples :</p>
<table>
<tr><th>Unité</th><th>Valeur (environ)</th><th>Ce qui y tient</th></tr>
<tr><td><b>1 octet</b> (o)</td><td>8 bits</td><td>une lettre</td></tr>
<tr><td><b>1 kilooctet</b> (ko)</td><td>1 000 octets</td><td>une demi-page de texte</td></tr>
<tr><td><b>1 mégaoctet</b> (Mo)</td><td>1 000 ko = 1 million d'octets</td><td>un livre entier de texte seul, ou une photo</td></tr>
<tr><td><b>1 gigaoctet</b> (Go)</td><td>1 000 Mo = 1 milliard d'octets</td><td>environ une heure de film</td></tr>
<tr><td><b>1 téraoctet</b> (To)</td><td>1 000 Go</td><td>des centaines de milliers de photos</td></tr>
</table>
<p>Remarque : parfois, en informatique, les multiples valent <b>1 024</b> au lieu de 1 000 (parce que 1024 = 2<sup>10</sup>). Pour l'instant, il suffit de retenir « environ mille ».</p>`
    },
    {
      type: `example`, title: `Exemple pratique : écris ton prénom en binaire`,
      html: `<p>Essayons avec <b>CIAO</b>. Utilisons le code ASCII des majuscules (A = 65, B = 66 … chaque lettre +1) :</p>
<table>
<tr><th>Lettre</th><th>Code</th><th>Binaire (8 bits)</th></tr>
<tr><td>C</td><td>67</td><td>01000011</td></tr>
<tr><td>I</td><td>73</td><td>01001001</td></tr>
<tr><td>A</td><td>65</td><td>01000001</td></tr>
<tr><td>O</td><td>79</td><td>01001111</td></tr>
</table>
<p>Vérifie le C : 64 + 2 + 1 = 67 ✅. Toutes les majuscules commencent par <b>010</b> ; les 5 autres chiffres donnent la position dans l'alphabet (C est la 3<sup>e</sup> lettre : 00011 = 3).</p>
<p>Maintenant, essaie avec ton prénom ! Ainsi, 4 lettres « pèsent » 4 octets = 32 bits.</p>`
    },
    {
      type: `example`, title: `Exemple pratique : un jeu de cartes binaires`,
      html: `<p>Prends 5 cartons et dessine des points : <b>16, 8, 4, 2, 1</b>. Place-les en rang avec les points visibles (1) ou retournés (0).</p>
<ul>
<li>Tu veux faire <b>10</b> ? Retourne vers le haut seulement 8 et 2 ➜ <b>01010</b>.</li>
<li>Tu veux faire <b>21</b> ? 16 + 4 + 1 ➜ <b>10101</b>.</li>
<li>Quel est le plus grand nombre que tu peux faire ? Toutes vers le haut : 16 + 8 + 4 + 2 + 1 = <b>31</b> = 11111.</li>
</ul>
<p>Cette activité vient de <b>CS Unplugged</b>, un projet néo-zélandais pour apprendre l'informatique <b>sans ordinateur</b>.</p>`
    },
    {
      type: `remember`, title: `À retenir`,
      html: `<ul>
<li><b>Bit</b> = 0 ou 1, la plus petite information. <b>Octet</b> = 8 bits = 256 valeurs.</li>
<li>Binaire ➜ décimal : additionne les valeurs (1, 2, 4, 8, 16…) là où il y a 1.</li>
<li>Décimal ➜ binaire : divise par 2 et lis les restes de bas en haut.</li>
<li>Lettres = codes (ASCII/Unicode) ; images = pixels avec RVB ; sons = mesures de vibration.</li>
</ul>`
    },
    {
      type: `curiosity`, title: `Le savais-tu ? Le binaire est plus vieux que l'ordinateur`,
      html: `<p>Le mathématicien allemand <b>Gottfried Wilhelm Leibniz</b> a décrit le système binaire en <b>1703</b>, plus de 200 ans avant le premier ordinateur ! Il était fasciné par le fait qu'avec seulement 0 et 1 on pouvait écrire tous les nombres. En 1854, l'Anglais <b>George Boole</b> a inventé une algèbre faite seulement de « vrai » et de « faux », et en 1937 l'Américain <b>Claude Shannon</b> a compris qu'on pouvait la construire avec des circuits électriques : l'idée de l'ordinateur numérique était née.</p>`
    },
    {
      type: `curiosity`, title: `Le savais-tu ? Le braille aussi est un code binaire`,
      html: `<p>L'alphabet <b>braille</b>, inventé en 1824 par le Français Louis Braille (devenu aveugle dans son enfance), utilise des cellules de <b>6 points</b> en relief : chaque point est là (1) ou n'est pas là (0). Combien de combinaisons ? 2 × 2 × 2 × 2 × 2 × 2 = <b>64</b>, assez pour toutes les lettres, les chiffres et la ponctuation. Louis Braille n'avait que 15 ans !</p>`
    },
    {
      type: `alternatives`, title: `D'autres façons de comprendre`,
      intro: `Le binaire semble bizarre seulement parce que nous sommes habitués à compter avec 10 doigts. Voici d'autres chemins.`,
      tabs: [
        {
          label: `🖐️ Compter avec les doigts`,
          html: `<p>Avec les doigts de la main, on arrive d'habitude à 5. Mais si chaque doigt est un bit (levé = 1, baissé = 0) et vaut le double du précédent :</p>
<ul>
<li>pouce = 1 · index = 2 · majeur = 4 · annulaire = 8 · auriculaire = 16</li>
</ul>
<p>Avec <b>une main</b>, tu arrives à <b>31</b>, avec deux mains à <b>1 023</b> ! Essaie : pour faire 3, lève le pouce et l'index ; pour faire 5, le pouce et le majeur.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fef9c3"/>
<rect x="190" y="120" width="220" height="90" rx="40" fill="#fdba74"/>
<rect x="150" y="110" width="40" height="70" rx="20" fill="#fdba74" transform="rotate(-35 170 145)"/>
<rect x="205" y="30" width="36" height="100" rx="18" fill="#fdba74"/>
<rect x="250" y="15" width="36" height="115" rx="18" fill="#fdba74"/>
<rect x="295" y="25" width="36" height="105" rx="18" fill="#fdba74"/>
<rect x="340" y="50" width="34" height="80" rx="17" fill="#fdba74"/>
<g font-size="18" text-anchor="middle" font-weight="bold" fill="#7c2d12">
<text x="140" y="110">1</text><text x="223" y="25">2</text><text x="268" y="12">4</text><text x="313" y="20">8</text><text x="357" y="45">16</text>
</g>
<text x="500" y="110" font-size="18" text-anchor="middle" fill="#7c2d12" font-weight="bold">tous levés =</text>
<text x="500" y="140" font-size="26" text-anchor="middle" fill="#b91c1c" font-weight="bold">31</text>
</svg>`
        },
        {
          label: `🧮 Comme le boulier`,
          html: `<p>Tu connais le boulier : dans la colonne des unités, quand tu arrives à 10 boules, tu les enlèves et tu en mets 1 dans les dizaines. Le binaire, c'est pareil, mais l'« échange » se fait à <b>2</b> : dès que tu as 2 boules dans une colonne, tu les enlèves et tu en mets 1 dans la colonne de gauche.</p>
<p>Essaie avec le boulier ci-dessous de compter en base 10, et imagine que chaque colonne ne peut avoir que 0 ou 1 boule : voilà le binaire !</p>`,
          widget: `abacus`,
          options: { columns: ['h', 'da', 'u'], value: 101 }
        },
        {
          label: `🔦 Messages à la lampe de poche`,
          html: `<p>D'autres codes utilisent aussi seulement deux signaux :</p>
<ul>
<li><b>Code Morse</b> (Samuel Morse, années 1830) : point et trait. SOS = · · · — — — · · ·</li>
<li><b>Yi Jing</b> (Chine ancienne, il y a environ 3 000 ans) : lignes pleines et brisées en groupes de 6 = 64 hexagrammes. Leibniz les a étudiés et y a vu son binaire !</li>
<li><b>Pavillons de marine et fumée</b> : il y en a / il n'y en a pas.</li>
</ul>
<p>Fais un essai avec un ami : avec la lampe de poche, lumière longue = 1, lumière courte = 0. Envoyez-vous un nombre !</p>`
        },
        {
          label: `🔗 Associe`,
          html: `<p>Associe chaque nombre binaire à sa valeur décimale.</p>`,
          widget: `match`,
          options: {
            pairs: [
              [`1`, `1`], [`10`, `2`], [`11`, `3`], [`100`, `4`], [`111`, `7`], [`1000`, `8`], [`1010`, `10`], [`1111`, `15`]
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Carte : du bit à l'ordinateur`,
      nodes: [
        { id: `bit`, label: `Bit (0/1)`, x: 50, y: 8, color: `#3b82f6`, html: `La plus petite unité d'information.`, why: `Le nom <i>bit</i> (binary digit) a été proposé par le mathématicien John Tukey et utilisé par <b>Claude Shannon</b> en 1948 dans son article qui a fondé la « théorie de l'information ».` },
        { id: `trans`, label: `Transistor`, x: 15, y: 30, color: `#64748b`, html: `Interrupteur électronique : allumé ou éteint.`, why: `Il a été inventé en <b>1947</b> aux Bell Labs (États-Unis) par Bardeen, Brattain et Shockley, qui ont reçu le prix Nobel. Avant, on utilisait des tubes à vide grands comme des ampoules. Aujourd'hui, un processeur contient des milliards de transistors.` },
        { id: `base2`, label: `Base 2`, x: 50, y: 30, color: `#a855f7`, html: `Chaque position vaut le double : 1, 2, 4, 8, 16…`, why: `Décrite par <b>Leibniz</b> en 1703. On l'utilise dans les ordinateurs parce que distinguer seulement deux états électriques (il y a du courant / il n'y en a pas) est beaucoup plus fiable que d'en distinguer dix.` },
        { id: `boole`, label: `Logique de Boole`, x: 85, y: 30, color: `#ef4444`, html: `Vrai/faux, ET, OU, NON.`, why: `<b>George Boole</b> (1854) a transformé le raisonnement en calculs avec 0 et 1. En 1937, <b>Claude Shannon</b>, à 21 ans, a démontré que des circuits avec des interrupteurs pouvaient faire ces calculs.` },
        { id: `byte`, label: `Octet = 8 bits`, x: 30, y: 55, color: `#22c55e`, html: `256 combinaisons : un caractère.`, why: `Le mot (<i>byte</i>) a été inventé par Werner Buchholz chez IBM en 1956. Les 8 bits sont devenus la norme avec l'ordinateur IBM System/360 (1964), parce qu'ils suffisaient pour les lettres, les chiffres et les symboles.` },
        { id: `ascii`, label: `Codes : ASCII, Unicode`, x: 12, y: 80, color: `#16a34a`, html: `Chaque caractère a un numéro.`, why: `L'<b>ASCII</b> (1963) a été créé aux États-Unis pour que des ordinateurs différents puissent échanger des textes. Il ne contenait que l'alphabet anglais, alors en 1991 est né <b>Unicode</b>, pour toutes les langues du monde.` },
        { id: `pixel`, label: `Pixel et RVB`, x: 42, y: 80, color: `#f97316`, html: `Les images comme grille de couleurs.`, why: `« Pixel » vient de <i>picture element</i>. Les couleurs se font avec du rouge, du vert et du bleu parce que l'œil humain a trois types de « capteurs » (les cônes) sensibles justement à ces couleurs.` },
        { id: `units`, label: `ko, Mo, Go, To`, x: 75, y: 62, color: `#eab308`, html: `Les multiples de l'octet.`, why: `On utilise les préfixes du Système international (kilo = mille, méga = million, giga = milliard). En informatique, ils valent parfois des puissances de 2 (1024) : c'est pourquoi en 1998 sont nés les noms kibioctet, mébioctet…` },
        { id: `data`, label: `Données`, x: 75, y: 88, color: `#0ea5e9`, html: `Textes, photos, sons, vidéos : tout devient nombres.`, why: `Transformer une information en nombres s'appelle <b>numériser</b> (de l'anglais <i>digit</i>, chiffre). Une fois en nombres, les données peuvent être copiées sans erreur, compressées et envoyées dans le monde entier.` }
      ],
      edges: [
        [`trans`, `bit`, `mémorise`], [`base2`, `bit`, `utilise`], [`boole`, `bit`, `calcule avec`], [`bit`, `byte`, `8 forment`],
        [`byte`, `ascii`, `code`], [`byte`, `pixel`, `colorie`], [`byte`, `units`, `se mesure en`], [`units`, `data`, `quantité de`], [`pixel`, `data`, `est un type de`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz : codes et mesures`,
      questions: [
        { type: `mc`, q: `Que veut dire RVB (RGB en anglais) ?`, options: [`Rouge, Jaune, Blanc`, `Rouge, Vert, Bleu (Red, Green, Blue)`, `Rapide, Grand, Binaire`], answer: 1, explain: `Red, Green, Blue : les trois couleurs qui se mélangent pour chaque pixel.` },
        { type: `tf`, q: `1 mégaoctet est plus grand que 1 gigaoctet.`, answer: false, explain: `1 Go ≈ 1 000 Mo.` },
        { type: `num`, q: `Combien de combinaisons peut-on faire avec 3 bits ?`, answer: 8, tol: 0, explain: `2 × 2 × 2 = 8.` }
      ]
    }
  ],
  glossary: [
    { t: `Donnée`, d: `Une information (nombre, texte, image, son) qu'on peut mémoriser.` },
    { t: `Bit`, d: `Chiffre binaire : 0 ou 1.` },
    { t: `Octet`, d: `Groupe de 8 bits ; il peut avoir 256 valeurs.` },
    { t: `Code binaire`, d: `Système qui représente les informations avec seulement des 0 et des 1.` },
    { t: `Base 2`, d: `Système de numération à deux chiffres dans lequel chaque position vaut le double de la précédente.` },
    { t: `Transistor`, d: `Minuscule interrupteur électronique, la « brique » des ordinateurs.` },
    { t: `ASCII / Unicode`, d: `Codes qui attribuent un numéro à chaque caractère.` },
    { t: `Pixel`, d: `Le plus petit carré de couleur d'une image numérique.` },
    { t: `RVB`, d: `Rouge, vert, bleu : les trois couleurs de base des images à l'écran.` },
    { t: `Numériser`, d: `Transformer une information en nombres que l'ordinateur peut utiliser.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `num`, q: `Combien vaut en décimal le nombre binaire 1010 ?`, answer: 10, tol: 0, explain: `8 + 0 + 2 + 0 = 10.` },
      { type: `num`, q: `Combien vaut en décimal le nombre binaire 11111 ?`, answer: 31, tol: 0, explain: `16 + 8 + 4 + 2 + 1 = 31.` },
      { type: `text`, q: `Écris 9 en binaire.`, answer: [`1001`, `00001001`], explain: `9 = 8 + 1 ➜ 1001.` },
      { type: `mc`, q: `Combien de valeurs différentes un octet peut-il avoir ?`, options: [`8`, `100`, `256`], answer: 2, explain: `2 puissance 8 = 256 (de 0 à 255).` },
      { type: `tf`, q: `L'ordinateur utilise le binaire parce que les transistors ont deux états : allumé et éteint.`, answer: true, explain: `Deux états électriques sont faciles à distinguer sans erreur.` },
      { type: `order`, q: `Remets dans l'ordre, du plus petit au plus grand.`, items: [`bit`, `octet`, `kilooctet`, `mégaoctet`, `gigaoctet`], explain: `bit < octet (8 bits) < ko < Mo < Go.` },
      { type: `mc`, q: `Dans le code ASCII, la lettre A vaut…`, options: [`1`, `65`, `100`], answer: 1, explain: `A = 65 = 01000001.` },
      { type: `mc`, q: `Qui a décrit le système binaire en 1703 ?`, options: [`Leibniz`, `Galilée`, `Léonard de Vinci`], answer: 0, explain: `Gottfried Wilhelm Leibniz.` },
      { type: `mc`, q: `Une photo numérique est faite de…`, options: [`pixels`, `octets musicaux`, `transistors colorés`], answer: 0, explain: `Une grille de pixels, chacun avec sa couleur RVB.` },
      { type: `num`, q: `En binaire, combien vaut la position à gauche du 16 ?`, answer: 32, tol: 0, explain: `Chaque position vaut le double : 16 × 2 = 32.` },
      { type: `tf`, q: `En binaire, « 10 » vaut dix.`, answer: false, explain: `En binaire, 10 = 2 (un 2 et zéro 1).` },
      { type: `mc`, q: `Le braille utilise des cellules de 6 points. Combien y a-t-il de combinaisons ?`, options: [`12`, `36`, `64`], answer: 2, explain: `2 puissance 6 = 64.` }
    ],
    gen: [['power', 2]]
  }
});
