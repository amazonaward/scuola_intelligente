TOPIC('it', {
  id: `p5-ing-comparatives`,
  title: `Comparatives`,
  intro: `L'elefante è <b>più grande</b> del topo. La giraffa è <b>più alta</b> del cavallo. Fare confronti è utilissimo! In inglese, però, "più" non si dice sempre allo stesso modo: a volte si aggiunge <b>-er</b> (<i>bigger</i>), a volte si usa <b>more</b> (<i>more beautiful</i>). Scopriamo quando. 🐘 > 🐭`,
  minutes: 30,
  sections: [
    {
      type: `text`, title: `1. Il comparativo di maggioranza`,
      html: `<p>Il <b>comparativo</b> serve a dire che una cosa ha una qualità <b>più</b> di un'altra. In italiano usiamo sempre <i>più … di</i>. In inglese la parola per "di" è <b>than</b> («dhen»), e "più" cambia a seconda della <b>lunghezza dell'aggettivo</b>:</p>
<ul>
<li><b>Aggettivi corti</b> (una sillaba): si aggiunge <b>-er</b>.<br><i>tall ➜ <b>taller</b></i>: <i>Tom is <b>taller than</b> Ben.</i> = Tom è più alto di Ben.</li>
<li><b>Aggettivi lunghi</b> (tre sillabe o più, e molti di due): si mette <b>more</b> davanti.<br><i>beautiful ➜ <b>more beautiful</b></i>: <i>This flower is <b>more beautiful than</b> that one.</i></li>
</ul>`
    },
    {
      type: `text`, title: `2. Le regole di ortografia con -er`,
      html: `<table>
<tr><th>Caso</th><th>Regola</th><th>Esempi</th></tr>
<tr><td>Quasi tutti gli aggettivi corti</td><td>+ <b>er</b></td><td>small ➜ smaller · fast ➜ faster · old ➜ older · cold ➜ colder</td></tr>
<tr><td>Finiscono in <b>-e</b></td><td>+ <b>r</b></td><td>nice ➜ nicer · large ➜ larger · safe ➜ safer</td></tr>
<tr><td>Finiscono in <b>consonante-vocale-consonante</b></td><td><b>raddoppia</b> la consonante + er</td><td>big ➜ bi<b>gg</b>er · hot ➜ ho<b>tt</b>er · thin ➜ thi<b>nn</b>er · fat ➜ fa<b>tt</b>er</td></tr>
<tr><td>Finiscono in <b>consonante + y</b></td><td>y ➜ <b>ier</b></td><td>happy ➜ happ<b>ier</b> · funny ➜ funn<b>ier</b> · easy ➜ eas<b>ier</b> · heavy ➜ heav<b>ier</b></td></tr>
<tr><td>Aggettivi lunghi</td><td><b>more</b> + aggettivo</td><td>more expensive · more interesting · more dangerous · more difficult</td></tr>
</table>
<p>⚠️ Non si usano <b>mai insieme</b> "more" e "-er": <i>more bigger</i> è sbagliato!</p>`
    },
    {
      type: `svg`, title: `Chi è più grande?`,
      caption: `Elefante, cavallo e topo: confrontali usando bigger, smaller, heavier, faster.`,
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
      type: `quiz`, title: `Mini-quiz: -er o more?`,
      questions: [
        { type: `mc`, q: `Il comparativo di "fast" è…`, options: [`more fast`, `faster`, `fastter`], answer: 1, explain: `Aggettivo corto: fast + er = faster.` },
        { type: `mc`, q: `Il comparativo di "interesting" è…`, options: [`interestinger`, `more interesting`], answer: 1, explain: `Aggettivo lungo (4 sillabe): more interesting.` },
        { type: `text`, q: `Scrivi il comparativo di "big".`, answer: [`bigger`], explain: `Consonante-vocale-consonante: si raddoppia la g ➜ bigger.` }
      ]
    },
    {
      type: `text`, title: `3. Gli irregolari: da imparare a memoria`,
      html: `<p>Alcuni aggettivi molto usati sono <b>irregolari</b>, proprio come in italiano (buono ➜ migliore):</p>
<table>
<tr><th>Aggettivo</th><th>Comparativo</th><th>Italiano</th></tr>
<tr><td><b>good</b></td><td><b>better</b></td><td>buono ➜ migliore / più buono</td></tr>
<tr><td><b>bad</b></td><td><b>worse</b></td><td>cattivo ➜ peggiore</td></tr>
<tr><td><b>far</b></td><td><b>farther / further</b></td><td>lontano ➜ più lontano</td></tr>
</table>
<p>Esempio: <i>Pizza is <b>better than</b> broccoli!</i> 🍕 · <i>My cold is <b>worse</b> today.</i> 🤧</p>
<p><b>Bonus</b>: per dire "<b>uguale</b>" si usa <b>as … as</b>: <i>Anna is <b>as tall as</b> Luca.</i> = Anna è alta quanto Luca.</p>`
    },
    {
      type: `remember`, title: `Lo schema della frase`,
      html: `<p><b>Soggetto + is/are + comparativo + than + secondo termine</b></p>
<p><i>The sun</i> + <i>is</i> + <i><b>hotter</b></i> + <i><b>than</b></i> + <i>the moon</i>. ☀️ > 🌙</p>
<p>Corto ➜ <b>-er</b> · Lungo ➜ <b>more</b> · good ➜ <b>better</b> · bad ➜ <b>worse</b></p>`
    },
    {
      type: `widget`, title: `Gioco: -er o more?`,
      widget: `classify`,
      caption: `Come si forma il comparativo di questi aggettivi?`,
      options: {
        groups: [`➕ -er / -ier`, `📏 more …`, `⭐ irregolare`],
        items: [
          [`tall`, 0], [`small`, 0], [`happy`, 0], [`hot`, 0], [`nice`, 0], [`easy`, 0],
          [`beautiful`, 1], [`expensive`, 1], [`dangerous`, 1], [`difficult`, 1],
          [`good`, 2], [`bad`, 2]
        ]
      }
    },
    {
      type: `widget`, title: `Flashcards: aggettivo ➜ comparativo`,
      widget: `flashcards`,
      options: {
        cards: [
          { front: `🐘 big`, back: `bigger (più grande)` },
          { front: `🐭 small`, back: `smaller (più piccolo)` },
          { front: `🦒 tall`, back: `taller (più alto)` },
          { front: `🐆 fast`, back: `faster (più veloce)` },
          { front: `🔥 hot`, back: `hotter (più caldo)` },
          { front: `😀 happy`, back: `happier (più felice)` },
          { front: `🏋️ heavy`, back: `heavier (più pesante)` },
          { front: `🌸 beautiful`, back: `more beautiful (più bello)` },
          { front: `💎 expensive`, back: `more expensive (più costoso)` },
          { front: `👍 good`, back: `better (migliore)` },
          { front: `👎 bad`, back: `worse (peggiore)` }
        ]
      }
    },
    {
      type: `example`, title: `Esempio: animali da record`,
      html: `<ul>
<li>🐆 <i>A cheetah is <b>faster than</b> a horse.</i> — Il ghepardo arriva a circa 100 km/h, il cavallo a circa 70.</li>
<li>🐋 <i>A blue whale is <b>heavier than</b> an elephant.</i> — La balenottera azzurra può pesare più di 150 tonnellate, un elefante circa 6.</li>
<li>🦒 <i>A giraffe is <b>taller than</b> a bus.</i> — Una giraffa maschio arriva a quasi 6 metri, un autobus a circa 3.</li>
<li>🐢 <i>A tortoise is <b>slower than</b> a snail?</i> — No! La tartaruga è più veloce della lumaca: <i>A snail is <b>slower than</b> a tortoise.</i></li>
</ul>`
    },
    {
      type: `example`, title: `Esempio: al negozio di giocattoli`,
      html: `<p><b>Emma:</b> Look at this teddy bear! 🧸<br>
<b>Dad:</b> It's nice, but the red one is <b>bigger</b> and <b>softer</b>.<br>
<b>Emma:</b> Yes, but it's <b>more expensive</b>. 💰<br>
<b>Dad:</b> That's true. The small one is <b>cheaper</b>.<br>
<b>Emma:</b> OK, the small one is <b>better</b> for me!</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… "fun" ha fatto discutere gli inglesi?`,
      html: `<p>Per molto tempo i libri di grammatica dicevano che il comparativo di <b>fun</b> (divertente) era solo <b>more fun</b>. Ma i ragazzi inglesi e americani dicevano <b>funner</b>, e oggi molti dizionari lo accettano nel parlato informale. Le lingue cambiano grazie a chi le parla… anche ai bambini!</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… anche in italiano c'erano i comparativi "corti"?`,
      html: `<p>In latino il comparativo si faceva con una desinenza, proprio come l'inglese -er: <i>altus</i> ➜ <i>altior</i> (più alto). In italiano ne sono rimasti pochi: <b>migliore</b> (da <i>melior</i>), <b>peggiore</b> (da <i>peior</i>), <b>maggiore</b>, <b>minore</b>, <b>superiore</b>. Per tutto il resto usiamo "più", come gli inglesi usano "more".</p>`
    },
    {
      type: `alternatives`, title: `Altri modi per capirlo`,
      intro: `Se non ti ricordi quando usare -er e quando more, prova questi trucchi.`,
      tabs: [
        {
          label: `👏 Conta le sillabe`,
          html: `<p>Batti le mani mentre dici l'aggettivo:</p>
<ul>
<li><b>tall</b> 👏 = 1 battito ➜ <b>-er</b>: taller</li>
<li><b>hap-py</b> 👏👏 = 2 battiti ma finisce in <b>y</b> ➜ <b>-ier</b>: happier</li>
<li><b>beau-ti-ful</b> 👏👏👏 = 3 battiti ➜ <b>more</b>: more beautiful</li>
</ul>
<p>Regola pratica: <b>1 battito ➜ -er</b>; <b>3 o più ➜ more</b>; con 2 battiti: <b>-ier</b> se finisce in y, altrimenti di solito <b>more</b> (<i>more famous, more boring</i>).</p>`
        },
        {
          label: `📊 La bilancia`,
          html: `<p>Il comparativo è come una <b>bilancia</b>: la parte più "forte" va giù. <b>than</b> sta al centro, come il perno.</p>`,
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
          label: `🇩🇪 Come in tedesco`,
          html: `<p>Anche il tedesco, cugino dell'inglese, usa la desinenza <b>-er</b>, ma per <b>tutti</b> gli aggettivi, anche quelli lunghi:</p>
<ul>
<li>klein ➜ klein<b>er</b> (small ➜ smaller)</li>
<li>schön ➜ schön<b>er</b> (beautiful ➜ more beautiful)</li>
<li>gut ➜ <b>besser</b> (good ➜ better)</li>
</ul>
<p>Il francese e lo spagnolo invece fanno come l'italiano: <b>plus</b> grand, <b>más</b> grande. L'inglese sta a metà strada: -er come i germanici per le parole corte, more come i latini per quelle lunghe (che spesso vengono proprio dal latino e dal francese: <i>beautiful, expensive, difficult</i>).</p>`
        },
        {
          label: `🔗 Abbina`,
          html: `<p>Abbina ogni aggettivo al suo comparativo.</p>`,
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
      type: `conceptMap`, title: `Mappa: come si forma il comparativo`,
      nodes: [
        { id: `comp`, label: `Comparativo`, x: 50, y: 8, color: `#3b82f6`, html: `Confronta due cose: "più … di".`, why: `Tutte le lingue hanno bisogno di confrontare. L'inglese ha due sistemi perché è un miscuglio: la base germanica (anglosassone) e moltissime parole arrivate dal francese dopo la conquista normanna del 1066.` },
        { id: `than`, label: `than`, x: 85, y: 22, color: `#64748b`, html: `Vuol dire "di / che" nel confronto.`, why: `"Than" e "then" (poi) erano in origine la stessa parola: "Tom is taller, then Ben" = prima viene Tom, poi Ben. Col tempo si sono separate.` },
        { id: `short`, label: `Corti: -er`, x: 18, y: 35, color: `#22c55e`, html: `tall ➜ taller, small ➜ smaller.`, why: `È la desinenza germanica antica (in antico inglese <i>-ra</i>), che si trova anche in tedesco (kleiner) e in olandese. Le parole corte sono quasi tutte di origine anglosassone.` },
        { id: `long`, label: `Lunghi: more`, x: 50, y: 35, color: `#a855f7`, html: `more beautiful, more expensive.`, why: `Dal Medioevo, con le parole lunghe (spesso di origine francese o latina) "more" + aggettivo suonava meglio di una desinenza attaccata: <i>beautifuller</i> è difficile da pronunciare!` },
        { id: `irr`, label: `Irregolari`, x: 82, y: 50, color: `#ef4444`, html: `good ➜ better, bad ➜ worse.`, why: `Sono parole antichissime e usatissime: "better" viene da una radice diversa da "good", come in italiano "migliore" non viene da "buono". Si chiama <b>suppletivismo</b>.` },
        { id: `e`, label: `-e ➜ -r`, x: 10, y: 65, color: `#16a34a`, html: `nice ➜ nicer.`, why: `Si toglie solo la doppia "e": "niceer" avrebbe una e inutile, perché la e finale è già lì.` },
        { id: `double`, label: `Doppia consonante`, x: 32, y: 78, color: `#15803d`, html: `big ➜ bigger, hot ➜ hotter.`, why: `Serve a mantenere la vocale "corta". In inglese una vocale seguita da una sola consonante e poi un'altra vocale diventa "lunga": "biger" si leggerebbe «bàigher». Raddoppiando la g, si legge ancora «bigher».` },
        { id: `y`, label: `-y ➜ -ier`, x: 55, y: 78, color: `#84cc16`, html: `happy ➜ happier.`, why: `In inglese la y in mezzo alle parole diventa spesso i (happy ➜ happiness, carry ➜ carries). È una regola di scrittura stabilita dalla tradizione dei tipografi.` }
      ],
      edges: [
        [`comp`, `than`, `usa`], [`comp`, `short`, `parole corte`], [`comp`, `long`, `parole lunghe`], [`comp`, `irr`, `eccezioni`],
        [`short`, `e`, `regola`], [`short`, `double`, `regola`], [`short`, `y`, `regola`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: frasi di confronto`,
      questions: [
        { type: `mc`, q: `"Il mio gatto è più grasso del tuo" si dice…`, options: [`My cat is fater than your cat.`, `My cat is fatter than your cat.`, `My cat is more fat than your cat.`], answer: 1, explain: `fat ➜ fatter (raddoppia la t).` },
        { type: `mc`, q: `Summer is ___ than winter.`, options: [`hoter`, `more hot`, `hotter`], answer: 2, explain: `hot ➜ hotter.` },
        { type: `text`, q: `Il comparativo di "good" è…`, answer: [`better`], explain: `good ➜ better (irregolare).` }
      ]
    }
  ],
  glossary: [
    { t: `comparative`, d: `Comparativo: forma dell'aggettivo per confrontare due cose.` },
    { t: `than`, d: `"Di / che" nel confronto: taller than me = più alto di me.` },
    { t: `-er`, d: `Desinenza del comparativo per gli aggettivi corti.` },
    { t: `more`, d: `"Più": si usa davanti agli aggettivi lunghi.` },
    { t: `better`, d: `Migliore (comparativo di good).` },
    { t: `worse`, d: `Peggiore (comparativo di bad).` },
    { t: `as … as`, d: `"Tanto … quanto": as tall as = alto quanto.` },
    { t: `syllable`, d: `Sillaba: serve a capire se l'aggettivo è corto o lungo.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Il comparativo di "old" è…`, options: [`older`, `more old`, `oldder`], answer: 0, explain: `old + er = older.` },
      { type: `mc`, q: `Il comparativo di "dangerous" è…`, options: [`dangerouser`, `more dangerous`], answer: 1, explain: `Aggettivo lungo ➜ more dangerous.` },
      { type: `text`, q: `Scrivi il comparativo di "happy".`, answer: [`happier`], explain: `y ➜ ier: happier.` },
      { type: `text`, q: `Scrivi il comparativo di "bad".`, answer: [`worse`], explain: `bad ➜ worse (irregolare).` },
      { type: `mc`, q: `Quale frase è corretta?`, options: [`A car is more faster than a bike.`, `A car is faster than a bike.`, `A car is faster that a bike.`], answer: 1, explain: `Mai "more" + "-er"; e si usa than, non that.` },
      { type: `tf`, q: `"nice" diventa "nicer".`, answer: true, explain: `Finisce in -e: si aggiunge solo -r.` },
      { type: `tf`, q: `"thin" diventa "thiner".`, answer: false, explain: `Consonante-vocale-consonante: thin ➜ thinner.` },
      { type: `order`, q: `Metti in ordine le parole.`, items: [`Rome`, `is`, `bigger`, `than`, `Turin.`], explain: `Rome is bigger than Turin. = Roma è più grande di Torino.` },
      { type: `mc`, q: `Come si dice "Il libro è migliore del film"?`, options: [`The book is gooder than the film.`, `The book is better than the film.`, `The book is more good than the film.`], answer: 1, explain: `good ➜ better.` },
      { type: `mc`, q: `"Anna è alta quanto Luca" si dice…`, options: [`Anna is taller than Luca.`, `Anna is as tall as Luca.`, `Anna is tall than Luca.`], answer: 1, explain: `Per l'uguaglianza: as … as.` },
      { type: `text`, q: `Completa: Maths is ___ (difficult) than art.`, answer: [`more difficult`], explain: `difficult è lungo: more difficult.` }
    ]
  }
});
