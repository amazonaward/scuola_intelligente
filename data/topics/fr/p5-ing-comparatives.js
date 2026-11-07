TOPIC('fr', {
  id: `p5-ing-comparatives`,
  title: `Comparatives`,
  intro: `L'éléphant est <b>plus grand</b> que la souris. La girafe est <b>plus haute</b> que le cheval. Faire des comparaisons est très utile ! En anglais, pourtant, « plus » ne se dit pas toujours de la même façon : parfois on ajoute <b>-er</b> (<i>bigger</i>), parfois on utilise <b>more</b> (<i>more beautiful</i>). Découvrons quand. 🐘 > 🐭`,
  minutes: 30,
  sections: [
    {
      type: `text`, title: `1. Le comparatif de supériorité`,
      html: `<p>Le <b>comparatif</b> sert à dire qu'une chose a une qualité <b>plus</b> qu'une autre. En français, on utilise toujours <i>plus … que</i>. En anglais, le mot pour « que » est <b>than</b> (« zène »), et « plus » change selon la <b>longueur de l'adjectif</b> :</p>
<ul>
<li><b>Adjectifs courts</b> (une syllabe) : on ajoute <b>-er</b>.<br><i>tall ➜ <b>taller</b></i> : <i>Tom is <b>taller than</b> Ben.</i> = Tom est plus grand que Ben.</li>
<li><b>Adjectifs longs</b> (trois syllabes ou plus, et beaucoup de deux) : on met <b>more</b> devant.<br><i>beautiful ➜ <b>more beautiful</b></i> : <i>This flower is <b>more beautiful than</b> that one.</i></li>
</ul>`
    },
    {
      type: `text`, title: `2. Les règles d'orthographe avec -er`,
      html: `<table>
<tr><th>Cas</th><th>Règle</th><th>Exemples</th></tr>
<tr><td>Presque tous les adjectifs courts</td><td>+ <b>er</b></td><td>small ➜ smaller · fast ➜ faster · old ➜ older · cold ➜ colder</td></tr>
<tr><td>Finissent par <b>-e</b></td><td>+ <b>r</b></td><td>nice ➜ nicer · large ➜ larger · safe ➜ safer</td></tr>
<tr><td>Finissent par <b>consonne-voyelle-consonne</b></td><td><b>on double</b> la consonne + er</td><td>big ➜ bi<b>gg</b>er · hot ➜ ho<b>tt</b>er · thin ➜ thi<b>nn</b>er · fat ➜ fa<b>tt</b>er</td></tr>
<tr><td>Finissent par <b>consonne + y</b></td><td>y ➜ <b>ier</b></td><td>happy ➜ happ<b>ier</b> · funny ➜ funn<b>ier</b> · easy ➜ eas<b>ier</b> · heavy ➜ heav<b>ier</b></td></tr>
<tr><td>Adjectifs longs</td><td><b>more</b> + adjectif</td><td>more expensive · more interesting · more dangerous · more difficult</td></tr>
</table>
<p>⚠️ On n'utilise <b>jamais ensemble</b> « more » et « -er » : <i>more bigger</i> est faux !</p>`
    },
    {
      type: `svg`, title: `Qui est le plus grand ?`,
      caption: `Éléphant, cheval et souris : compare-les avec bigger, smaller, heavier, faster.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfccb"/>
<rect y="240" width="600" height="60" fill="#84cc16"/>
<ellipse cx="140" cy="170" rx="95" ry="65" fill="#94a3b8"/>
<rect x="75" y="200" width="25" height="45" fill="#94a3b8"/>
<rect x="175" y="200" width="25" height="45" fill="#94a3b8"/>
<circle cx="225" cy="135" r="40" fill="#94a3b8"/>
<path d="M255 150 Q275 200 255 235" stroke="#94a3b8" stroke-width="16" fill="none" stroke-linecap="round"/>
<circle cx="232" cy="125" r="5" fill="#0f172a"/>
<ellipse cx="200" cy="130" rx="22" ry="30" fill="#cbd5e1"/>
<ellipse cx="380" cy="190" rx="55" ry="30" fill="#a16207"/>
<rect x="340" y="210" width="12" height="35" fill="#a16207"/>
<rect x="410" y="210" width="12" height="35" fill="#a16207"/>
<path d="M425 180 L450 135 L470 145 L445 190 Z" fill="#a16207"/>
<circle cx="458" cy="138" r="3" fill="#0f172a"/>
<ellipse cx="535" cy="232" rx="16" ry="9" fill="#6b7280"/>
<circle cx="550" cy="226" r="6" fill="#6b7280"/>
<path d="M519 232 Q505 236 500 228" stroke="#6b7280" stroke-width="2" fill="none"/>
<text x="150" y="40" font-size="20" text-anchor="middle" fill="#1e293b" font-weight="bold">elephant</text>
<text x="400" y="110" font-size="20" text-anchor="middle" fill="#1e293b" font-weight="bold">horse</text>
<text x="540" y="200" font-size="20" text-anchor="middle" fill="#1e293b" font-weight="bold">mouse</text>
<text x="300" y="275" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">The elephant is BIGGER than the horse.</text>
<text x="300" y="295" font-size="15" text-anchor="middle" fill="#ffffff">The mouse is SMALLER than the horse.</text>
</svg>`
    },
    {
      type: `quiz`, title: `Mini-quiz : -er ou more ?`,
      questions: [
        { type: `mc`, q: `Le comparatif de "fast" est…`, options: [`more fast`, `faster`, `fastter`], answer: 1, explain: `Adjectif court : fast + er = faster.` },
        { type: `mc`, q: `Le comparatif de "interesting" est…`, options: [`interestinger`, `more interesting`], answer: 1, explain: `Adjectif long (4 syllabes) : more interesting.` },
        { type: `text`, q: `Écris le comparatif de "big".`, answer: [`bigger`], explain: `Consonne-voyelle-consonne : on double le g ➜ bigger.` }
      ]
    },
    {
      type: `text`, title: `3. Les irréguliers : à apprendre par cœur`,
      html: `<p>Certains adjectifs très utilisés sont <b>irréguliers</b>, exactement comme en français (bon ➜ meilleur) :</p>
<table>
<tr><th>Adjectif</th><th>Comparatif</th><th>Français</th></tr>
<tr><td><b>good</b></td><td><b>better</b></td><td>bon ➜ meilleur</td></tr>
<tr><td><b>bad</b></td><td><b>worse</b></td><td>mauvais ➜ pire</td></tr>
<tr><td><b>far</b></td><td><b>farther / further</b></td><td>loin ➜ plus loin</td></tr>
</table>
<p>Exemple : <i>Pizza is <b>better than</b> broccoli!</i> 🍕 · <i>My cold is <b>worse</b> today.</i> 🤧</p>
<p><b>Bonus</b> : pour dire « <b>aussi … que</b> », on utilise <b>as … as</b> : <i>Anna is <b>as tall as</b> Luca.</i> = Anna est aussi grande que Luca.</p>`
    },
    {
      type: `remember`, title: `Le schéma de la phrase`,
      html: `<p><b>Sujet + is/are + comparatif + than + deuxième terme</b></p>
<p><i>The sun</i> + <i>is</i> + <i><b>hotter</b></i> + <i><b>than</b></i> + <i>the moon</i>. ☀️ > 🌙</p>
<p>Court ➜ <b>-er</b> · Long ➜ <b>more</b> · good ➜ <b>better</b> · bad ➜ <b>worse</b></p>`
    },
    {
      type: `widget`, title: `Jeu : -er ou more ?`,
      widget: `classify`,
      caption: `Comment forme-t-on le comparatif de ces adjectifs ?`,
      options: {
        groups: [`➕ -er / -ier`, `📏 more …`, `⭐ irrégulier`],
        items: [
          [`tall`, 0], [`small`, 0], [`happy`, 0], [`hot`, 0], [`nice`, 0], [`easy`, 0],
          [`beautiful`, 1], [`expensive`, 1], [`dangerous`, 1], [`difficult`, 1],
          [`good`, 2], [`bad`, 2]
        ]
      }
    },
    {
      type: `widget`, title: `Flashcards : adjectif ➜ comparatif`,
      widget: `flashcards`,
      options: {
        cards: [
          { front: `🐘 big`, back: `bigger (plus grand)` },
          { front: `🐭 small`, back: `smaller (plus petit)` },
          { front: `🦒 tall`, back: `taller (plus haut)` },
          { front: `🐆 fast`, back: `faster (plus rapide)` },
          { front: `🔥 hot`, back: `hotter (plus chaud)` },
          { front: `😀 happy`, back: `happier (plus heureux)` },
          { front: `🏋️ heavy`, back: `heavier (plus lourd)` },
          { front: `🌸 beautiful`, back: `more beautiful (plus beau)` },
          { front: `💎 expensive`, back: `more expensive (plus cher)` },
          { front: `👍 good`, back: `better (meilleur)` },
          { front: `👎 bad`, back: `worse (pire)` }
        ]
      }
    },
    {
      type: `example`, title: `Exemple : des animaux recordmen`,
      html: `<ul>
<li>🐆 <i>A cheetah is <b>faster than</b> a horse.</i> — Le guépard atteint environ 100 km/h, le cheval environ 70.</li>
<li>🐋 <i>A blue whale is <b>heavier than</b> an elephant.</i> — La baleine bleue peut peser plus de 150 tonnes, un éléphant environ 6.</li>
<li>🦒 <i>A giraffe is <b>taller than</b> a bus.</i> — Une girafe mâle atteint presque 6 mètres, un autobus environ 3.</li>
<li>🐢 <i>A tortoise is <b>slower than</b> a snail?</i> — Non ! La tortue est plus rapide que l'escargot : <i>A snail is <b>slower than</b> a tortoise.</i></li>
</ul>`
    },
    {
      type: `example`, title: `Exemple : au magasin de jouets`,
      html: `<p><b>Emma:</b> Look at this teddy bear! 🧸<br>
<b>Dad:</b> It's nice, but the red one is <b>bigger</b> and <b>softer</b>.<br>
<b>Emma:</b> Yes, but it's <b>more expensive</b>. 💰<br>
<b>Dad:</b> That's true. The small one is <b>cheaper</b>.<br>
<b>Emma:</b> OK, the small one is <b>better</b> for me!</p>`
    },
    {
      type: `curiosity`, title: `Le savais-tu ? "fun" a fait discuter les Anglais`,
      html: `<p>Pendant longtemps, les livres de grammaire disaient que le comparatif de <b>fun</b> (amusant) était seulement <b>more fun</b>. Mais les jeunes Anglais et Américains disaient <b>funner</b>, et aujourd'hui beaucoup de dictionnaires l'acceptent à l'oral familier. Les langues changent grâce à ceux qui les parlent… même les enfants !</p>`
    },
    {
      type: `curiosity`, title: `Le savais-tu ? Le français aussi avait des comparatifs « courts »`,
      html: `<p>En latin, le comparatif se faisait avec une terminaison, exactement comme l'anglais -er : <i>altus</i> ➜ <i>altior</i> (plus haut). En français, il en reste peu : <b>meilleur</b> (de <i>melior</i>), <b>pire</b> (de <i>peior</i>), <b>majeur</b>, <b>mineur</b>, <b>supérieur</b>. Pour tout le reste, nous utilisons « plus », comme les Anglais utilisent « more ».</p>`
    },
    {
      type: `alternatives`, title: `D'autres façons de comprendre`,
      intro: `Si tu ne te rappelles pas quand utiliser -er et quand more, essaie ces astuces.`,
      tabs: [
        {
          label: `👏 Compte les syllabes`,
          html: `<p>Frappe dans tes mains en disant l'adjectif :</p>
<ul>
<li><b>tall</b> 👏 = 1 frappe ➜ <b>-er</b> : taller</li>
<li><b>hap-py</b> 👏👏 = 2 frappes mais finit par <b>y</b> ➜ <b>-ier</b> : happier</li>
<li><b>beau-ti-ful</b> 👏👏👏 = 3 frappes ➜ <b>more</b> : more beautiful</li>
</ul>
<p>Règle pratique : <b>1 frappe ➜ -er</b> ; <b>3 ou plus ➜ more</b> ; avec 2 frappes : <b>-ier</b> si ça finit par y, sinon en général <b>more</b> (<i>more famous, more boring</i>).</p>`
        },
        {
          label: `📊 La balance`,
          html: `<p>Le comparatif est comme une <b>balance</b> : le côté le plus « fort » descend. <b>than</b> est au milieu, comme le pivot.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#fff7ed"/>
<polygon points="300,210 270,235 330,235" fill="#78350f"/>
<line x1="300" y1="210" x2="300" y2="90" stroke="#78350f" stroke-width="6"/>
<line x1="120" y1="120" x2="480" y2="60" stroke="#78350f" stroke-width="6"/>
<circle cx="300" cy="90" r="10" fill="#f59e0b"/>
<rect x="60" y="120" width="120" height="70" rx="10" fill="#ef4444"/>
<text x="120" y="162" font-size="20" text-anchor="middle" fill="#ffffff" font-weight="bold">🐘 elephant</text>
<rect x="420" y="20" width="120" height="44" rx="10" fill="#38bdf8"/>
<text x="480" y="48" font-size="20" text-anchor="middle" fill="#ffffff" font-weight="bold">🐭 mouse</text>
<text x="300" y="70" font-size="20" text-anchor="middle" fill="#9a3412" font-weight="bold">than</text>
<text x="300" y="30" font-size="18" text-anchor="middle" fill="#9a3412">heavier</text>
</svg>`
        },
        {
          label: `🇩🇪 Comme en allemand`,
          html: `<p>L'allemand, cousin de l'anglais, utilise lui aussi la terminaison <b>-er</b>, mais pour <b>tous</b> les adjectifs, même les longs :</p>
<ul>
<li>klein ➜ klein<b>er</b> (small ➜ smaller)</li>
<li>schön ➜ schön<b>er</b> (beautiful ➜ more beautiful)</li>
<li>gut ➜ <b>besser</b> (good ➜ better)</li>
</ul>
<p>Le français, l'espagnol et l'italien, eux, font avec « plus » : <b>plus</b> grand, <b>más</b> grande, <b>più</b> grande. L'anglais est à mi-chemin : -er comme les langues germaniques pour les mots courts, more comme les langues latines pour les longs (qui viennent souvent justement du latin et du français : <i>beautiful, expensive, difficult</i>).</p>`
        },
        {
          label: `🔗 Associe`,
          html: `<p>Associe chaque adjectif à son comparatif.</p>`,
          widget: `match`,
          options: {
            pairs: [
              [`good`, `better`], [`bad`, `worse`], [`hot`, `hotter`], [`funny`, `funnier`],
              [`nice`, `nicer`], [`difficult`, `more difficult`]
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Carte : comment se forme le comparatif`,
      nodes: [
        { id: `comp`, label: `Comparatif`, x: 50, y: 8, color: `#3b82f6`, html: `Compare deux choses : « plus … que ».`, why: `Toutes les langues ont besoin de comparer. L'anglais a deux systèmes parce que c'est un mélange : la base germanique (anglo-saxonne) et un très grand nombre de mots arrivés du français après la conquête normande de 1066.` },
        { id: `than`, label: `than`, x: 85, y: 22, color: `#64748b`, html: `Veut dire « que » dans la comparaison.`, why: `« Than » et « then » (ensuite) étaient à l'origine le même mot : « Tom is taller, then Ben » = d'abord vient Tom, ensuite Ben. Avec le temps, ils se sont séparés.` },
        { id: `short`, label: `Courts : -er`, x: 18, y: 35, color: `#22c55e`, html: `tall ➜ taller, small ➜ smaller.`, why: `C'est l'ancienne terminaison germanique (en vieil anglais <i>-ra</i>), que l'on trouve aussi en allemand (kleiner) et en néerlandais. Les mots courts sont presque tous d'origine anglo-saxonne.` },
        { id: `long`, label: `Longs : more`, x: 50, y: 35, color: `#a855f7`, html: `more beautiful, more expensive.`, why: `Depuis le Moyen Âge, avec les mots longs (souvent d'origine française ou latine), « more » + adjectif sonnait mieux qu'une terminaison collée : <i>beautifuller</i> est difficile à prononcer !` },
        { id: `irr`, label: `Irréguliers`, x: 82, y: 50, color: `#ef4444`, html: `good ➜ better, bad ➜ worse.`, why: `Ce sont des mots très anciens et très utilisés : « better » vient d'une autre racine que « good », comme en français « meilleur » ne vient pas de « bon ». On appelle cela le <b>supplétisme</b>.` },
        { id: `e`, label: `-e ➜ -r`, x: 10, y: 65, color: `#16a34a`, html: `nice ➜ nicer.`, why: `On n'ajoute que le « r » : « niceer » aurait un e inutile, puisque le e final est déjà là.` },
        { id: `double`, label: `Consonne doublée`, x: 32, y: 78, color: `#15803d`, html: `big ➜ bigger, hot ➜ hotter.`, why: `Cela sert à garder la voyelle « courte ». En anglais, une voyelle suivie d'une seule consonne puis d'une autre voyelle devient « longue » : « biger » se lirait « baïgueur ». En doublant le g, on lit toujours « bigueur ».` },
        { id: `y`, label: `-y ➜ -ier`, x: 55, y: 78, color: `#84cc16`, html: `happy ➜ happier.`, why: `En anglais, le y à l'intérieur des mots devient souvent i (happy ➜ happiness, carry ➜ carries). C'est une règle d'écriture établie par la tradition des imprimeurs.` }
      ],
      edges: [
        [`comp`, `than`, `utilise`], [`comp`, `short`, `mots courts`], [`comp`, `long`, `mots longs`], [`comp`, `irr`, `exceptions`],
        [`short`, `e`, `règle`], [`short`, `double`, `règle`], [`short`, `y`, `règle`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz : phrases de comparaison`,
      questions: [
        { type: `mc`, q: `« Mon chat est plus gros que le tien » se dit…`, options: [`My cat is fater than your cat.`, `My cat is fatter than your cat.`, `My cat is more fat than your cat.`], answer: 1, explain: `fat ➜ fatter (on double le t).` },
        { type: `mc`, q: `Summer is ___ than winter.`, options: [`hoter`, `more hot`, `hotter`], answer: 2, explain: `hot ➜ hotter.` },
        { type: `text`, q: `Le comparatif de "good" est…`, answer: [`better`], explain: `good ➜ better (irrégulier).` }
      ]
    }
  ],
  glossary: [
    { t: `comparative`, d: `Comparatif : forme de l'adjectif pour comparer deux choses.` },
    { t: `than`, d: `« Que » dans la comparaison : taller than me = plus grand que moi.` },
    { t: `-er`, d: `Terminaison du comparatif pour les adjectifs courts.` },
    { t: `more`, d: `« Plus » : s'utilise devant les adjectifs longs.` },
    { t: `better`, d: `Meilleur (comparatif de good).` },
    { t: `worse`, d: `Pire (comparatif de bad).` },
    { t: `as … as`, d: `« Aussi … que » : as tall as = aussi grand que.` },
    { t: `syllable`, d: `Syllabe : sert à savoir si l'adjectif est court ou long.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Le comparatif de "old" est…`, options: [`older`, `more old`, `oldder`], answer: 0, explain: `old + er = older.` },
      { type: `mc`, q: `Le comparatif de "dangerous" est…`, options: [`dangerouser`, `more dangerous`], answer: 1, explain: `Adjectif long ➜ more dangerous.` },
      { type: `text`, q: `Écris le comparatif de "happy".`, answer: [`happier`], explain: `y ➜ ier : happier.` },
      { type: `text`, q: `Écris le comparatif de "bad".`, answer: [`worse`], explain: `bad ➜ worse (irrégulier).` },
      { type: `mc`, q: `Quelle phrase est correcte ?`, options: [`A car is more faster than a bike.`, `A car is faster than a bike.`, `A car is faster that a bike.`], answer: 1, explain: `Jamais "more" + "-er" ; et on utilise than, pas that.` },
      { type: `tf`, q: `"nice" devient "nicer".`, answer: true, explain: `Finit par -e : on ajoute seulement -r.` },
      { type: `tf`, q: `"thin" devient "thiner".`, answer: false, explain: `Consonne-voyelle-consonne : thin ➜ thinner.` },
      { type: `order`, q: `Remets les mots dans l'ordre.`, items: [`Rome`, `is`, `bigger`, `than`, `Turin.`], explain: `Rome is bigger than Turin. = Rome est plus grande que Turin.` },
      { type: `mc`, q: `Comment dit-on « Le livre est meilleur que le film » ?`, options: [`The book is gooder than the film.`, `The book is better than the film.`, `The book is more good than the film.`], answer: 1, explain: `good ➜ better.` },
      { type: `mc`, q: `« Anna est aussi grande que Luca » se dit…`, options: [`Anna is taller than Luca.`, `Anna is as tall as Luca.`, `Anna is tall than Luca.`], answer: 1, explain: `Pour l'égalité : as … as.` },
      { type: `text`, q: `Complète : Maths is ___ (difficult) than art.`, answer: [`more difficult`], explain: `difficult est long : more difficult.` }
    ]
  }
});
