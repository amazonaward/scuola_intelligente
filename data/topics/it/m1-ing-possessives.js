TOPIC('it', {
  id: `m1-ing-possessives`,
  title: `Possessive adjectives`,
  intro: `<i>This is <b>my</b> bag. That's <b>her</b> phone. <b>Their</b> dog is huge!</i> Gli <b>aggettivi possessivi</b> dicono <b>di chi è</b> una cosa. In inglese sono solo 7, non cambiano mai con la cosa posseduta… ma con <b>his</b> e <b>her</b> bisogna stare attenti, perché funzionano al contrario dell'italiano! 🎒📱🐶`,
  minutes: 30,
  sections: [
    {
      type: `text`, title: `1. Pronomi soggetto e aggettivi possessivi`,
      html: `<p>Ogni pronome soggetto ha il suo aggettivo possessivo:</p>
<table>
<tr><th>Pronome soggetto</th><th>Aggettivo possessivo</th><th>Italiano</th><th>Esempio</th></tr>
<tr><td>I</td><td><b>my</b></td><td>mio, mia, miei, mie</td><td>my book, my shoes</td></tr>
<tr><td>you</td><td><b>your</b></td><td>tuo, tua…</td><td>your pen</td></tr>
<tr><td>he</td><td><b>his</b></td><td>suo (di lui)</td><td>his bike</td></tr>
<tr><td>she</td><td><b>her</b></td><td>suo (di lei)</td><td>her bike</td></tr>
<tr><td>it</td><td><b>its</b></td><td>suo (di animale / cosa)</td><td>its tail</td></tr>
<tr><td>we</td><td><b>our</b></td><td>nostro…</td><td>our teacher</td></tr>
<tr><td>you</td><td><b>your</b></td><td>vostro…</td><td>your classroom</td></tr>
<tr><td>they</td><td><b>their</b></td><td>loro</td><td>their house</td></tr>
</table>
<p>Pronuncia: <b>my</b> «mai», <b>your</b> «ior», <b>his</b> «his», <b>her</b> «hör», <b>its</b> «its», <b>our</b> «àuar», <b>their</b> «dhèar».</p>`
    },
    {
      type: `text`, title: `2. Tre regole d'oro`,
      html: `<ol>
<li><b>Non cambiano mai</b>: né per maschile/femminile, né per singolare/plurale della cosa posseduta.<br><i><b>my</b> brother, <b>my</b> sister, <b>my</b> friends</i> = mio fratello, mia sorella, i miei amici.</li>
<li><b>Niente articolo</b> davanti! In italiano diciamo "<i>il</i> mio libro", in inglese solo <i>my book</i>. ❌ <i>the my book</i></li>
<li><b>His / her dipendono dal POSSESSORE</b>, non dalla cosa posseduta.<br><i>Marco and <b>his</b> mother</i> (la madre di lui) — <i>Giulia and <b>her</b> father</i> (il padre di lei).</li>
</ol>
<p>In italiano "suo" si accorda con la cosa (suo padre, sua madre); in inglese si guarda <b>chi possiede</b>: se è un maschio → his, una femmina → her, un animale o una cosa → its.</p>`
    },
    {
      type: `svg`, title: `His o her? Guarda chi possiede!`,
      caption: `La freccia parte dal possessore: è lui o lei a decidere tra his e her, non la cosa posseduta.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fdf4ff"/>
<circle cx="90" cy="80" r="32" fill="#fcd34d"/>
<rect x="60" y="112" width="60" height="70" rx="12" fill="#3b82f6"/>
<text x="90" y="210" font-size="18" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Paul</text>
<path d="M130 130 L230 130" stroke="#1e3a8a" stroke-width="5" marker-end="url(#a1)"/>
<rect x="240" y="100" width="70" height="60" rx="8" fill="#f472b6"/>
<text x="275" y="140" font-size="28" text-anchor="middle">👜</text>
<text x="275" y="190" font-size="20" text-anchor="middle" fill="#1e3a8a" font-weight="bold">HIS bag</text>
<text x="275" y="212" font-size="14" text-anchor="middle" fill="#334155">(la sua borsa, di lui)</text>
<circle cx="510" cy="80" r="32" fill="#fcd34d"/>
<path d="M478 75 Q510 30 542 75" fill="#92400e"/>
<rect x="480" y="112" width="60" height="70" rx="12" fill="#ec4899"/>
<text x="510" y="210" font-size="18" text-anchor="middle" fill="#9d174d" font-weight="bold">Emma</text>
<path d="M470 130 L405 130" stroke="#9d174d" stroke-width="5" marker-end="url(#a2)"/>
<rect x="330" y="100" width="70" height="60" rx="8" fill="#60a5fa"/>
<text x="365" y="140" font-size="28" text-anchor="middle">⚽</text>
<text x="390" y="250" font-size="20" text-anchor="middle" fill="#9d174d" font-weight="bold">HER ball</text>
<text x="390" y="272" font-size="14" text-anchor="middle" fill="#334155">(la sua palla, di lei)</text>
<defs>
<marker id="a1" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#1e3a8a"/></marker>
<marker id="a2" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#9d174d"/></marker>
</defs>
</svg>`
    },
    {
      type: `quiz`, title: `Mini-quiz: his, her o its?`,
      questions: [
        { type: `mc`, q: `Luca loves ___ grandmother.`, options: [`his`, `her`, `its`], answer: 0, explain: `Il possessore è Luca (maschio) → his, anche se la nonna è femmina.` },
        { type: `mc`, q: `Anna is playing with ___ brother.`, options: [`his`, `her`, `their`], answer: 1, explain: `Il possessore è Anna → her.` },
        { type: `mc`, q: `The dog is wagging ___ tail.`, options: [`it's`, `its`, `his`], answer: 1, explain: `Animale (it) → its, senza apostrofo.` }
      ]
    },
    {
      type: `text`, title: `3. Attenzione ai "gemelli" che suonano uguali`,
      html: `<p>Alcuni possessivi si pronunciano come altre parole: sono trappole classiche, anche per i madrelingua!</p>
<table>
<tr><th>Possessivo</th><th>Parola "gemella"</th><th>Esempio</th></tr>
<tr><td><b>its</b> (suo, di cosa/animale)</td><td><b>it's</b> = it is / it has</td><td><i><b>It's</b> a cat. <b>Its</b> name is Felix.</i></td></tr>
<tr><td><b>your</b> (tuo)</td><td><b>you're</b> = you are</td><td><i><b>You're</b> late! Where's <b>your</b> watch?</i></td></tr>
<tr><td><b>their</b> (loro)</td><td><b>they're</b> = they are; <b>there</b> = là / c'è</td><td><i><b>They're</b> at home. <b>Their</b> house is <b>there</b>.</i></td></tr>
</table>
<p>💡 Trucco: se puoi sostituire con "it is / you are / they are", ci vuole l'apostrofo. Altrimenti è il possessivo.</p>`
    },
    {
      type: `text`, title: `4. Bonus: il genitivo sassone e "Whose?"`,
      html: `<p>Per dire di chi è una cosa usando un <b>nome</b> (non un pronome), l'inglese usa <b>'s</b>, il <b>genitivo sassone</b>:</p>
<ul>
<li><i><b>Anna's</b> bike</i> = la bici di Anna (prima il possessore, poi la cosa, niente articolo!);</li>
<li><i>my <b>dad's</b> car</i> = l'auto di mio papà;</li>
<li>plurale in -s: solo apostrofo → <i>my <b>parents'</b> room</i> = la camera dei miei genitori.</li>
</ul>
<p>Per chiedere di chi è qualcosa si usa <b>Whose…?</b> («hùuz»):</p>
<ul>
<li><i><b>Whose</b> pencil case is this?</i> – <i>It's <b>my</b> pencil case. / It's <b>Marco's</b>.</i></li>
</ul>`
    },
    {
      type: `example`, title: `Esempio pratico: presenta la tua famiglia`,
      html: `<p><i>Hi! I'm Sofia. This is <b>my</b> family. <b>My</b> dad is Luca and <b>his</b> job is very interesting: he's a pilot! <b>My</b> mum is Elena and <b>her</b> favourite hobby is gardening. I've got two brothers: <b>their</b> names are Matteo and Leo. We've got a cat. <b>Its</b> name is Pepe. <b>Our</b> house is in Turin. What's <b>your</b> family like?</i></p>
<p>Conta i possessivi: sono 9! Prova a scrivere un testo uguale sulla tua famiglia.</p>`
    },
    {
      type: `example`, title: `Esempio pratico: oggetti smarriti in classe`,
      html: `<p>La prof trova degli oggetti dimenticati:</p>
<p>— <i>Whose ruler is this? Is it <b>your</b> ruler, Giulia?</i><br>
— <i>No, it isn't <b>my</b> ruler. It's Paolo's. <b>His</b> ruler is blue.</i><br>
— <i>And these trainers? Are they the twins' trainers?</i><br>
— <i>Yes! They're <b>their</b> trainers.</i></p>`
    },
    {
      type: `widget`, title: `Gioco: abbina pronome e possessivo`,
      widget: `match`,
      options: {
        pairs: [[`I`, `my`], [`you`, `your`], [`he`, `his`], [`she`, `her`], [`it`, `its`], [`we`, `our`], [`they`, `their`]]
      }
    },
    {
      type: `widget`, title: `Gioco: chi è il possessore?`,
      widget: `classify`,
      caption: `Scegli his, her o its in base a CHI possiede.`,
      options: {
        groups: [`his`, `her`, `its`],
        items: [
          [`Mario and ___ sister`, 0], [`my grandad and ___ glasses`, 0], [`the king and ___ crown`, 0],
          [`the queen and ___ crown`, 1], [`Laura and ___ brother`, 1], [`my aunt and ___ car`, 1],
          [`the cat and ___ bowl`, 2], [`the tree and ___ leaves`, 2], [`the school and ___ garden`, 2]
        ]
      }
    },
    {
      type: `curiosity`, title: `Lo sapevi che… "its" è una parola giovane?`,
      html: `<p>Fino al Cinquecento l'inglese non aveva <b>its</b>: per le cose si usava <b>his</b>! Nella Bibbia di re Giacomo (1611) si legge "<i>if the salt have lost <b>his</b> savour</i>" (se il sale perde il <i>suo</i> sapore). <i>Its</i> nasce proprio in quegli anni e all'inizio si scriveva perfino <b>it's</b>, con l'apostrofo. Shakespeare lo usa pochissimo, quasi solo nelle ultime opere. Ecco perché ancora oggi tanti inglesi confondono its e it's!</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… le navi in inglese sono "lei"?`,
      html: `<p>Di solito per le cose si usa <b>its</b>, ma per tradizione i marinai chiamano le navi al femminile: <i>The Titanic and <b>her</b> passengers</i>. Lo stesso succede a volte con le nazioni (<i>England and <b>her</b> history</i>). Invece per gli animali domestici di cui conosci il sesso puoi usare <b>his</b> o <b>her</b>: <i>My dog Rex loves <b>his</b> ball.</i></p>`
    },
    {
      type: `alternatives`, title: `Altri modi per capirlo`,
      intro: `Se his/her ti confondono ancora, prova queste strade.`,
      tabs: [
        {
          label: `👉 Il dito del possessore`,
          html: `<p>Prima di scegliere, <b>punta il dito sul possessore</b> (chi ha la cosa) e chiediti: è <b>maschio</b>, <b>femmina</b> o <b>cosa/animale</b>?</p>
<ul>
<li><i>Il cappello di nonno</i> → dito su nonno → maschio → <b>his</b> hat.</li>
<li><i>La palla di Sara</i> → dito su Sara → femmina → <b>her</b> ball.</li>
<li><i>Le ruote della bici</i> → dito sulla bici → cosa → <b>its</b> wheels.</li>
</ul>
<p>La cosa posseduta (cappello, palla, ruote) <b>non conta mai</b>.</p>`
        },
        {
          label: `🇫🇷🇩🇪 Come fanno le altre lingue`,
          html: `<ul>
<li>🇮🇹🇪🇸🇫🇷 In italiano, spagnolo e francese il possessivo guarda la <b>cosa posseduta</b>: <i>suo padre / sua madre</i>; in francese <i>son père / sa mère</i> (anche se "suo" è di una ragazza!).</li>
<li>🇬🇧🇩🇪 In inglese e in tedesco guarda il <b>possessore</b>: <i>his mother</i> (di lui), <i>her father</i> (di lei); in tedesco <i>sein Vater</i> (di lui), <i>ihr Vater</i> (di lei).</li>
</ul>
<p>Quindi l'inglese è più <b>chiaro</b> dell'italiano: "Marco ha visto Anna con suo padre" (di chi?) in inglese è subito chiaro: <i>with <b>his</b> father</i> o <i>with <b>her</b> father</i>.</p>`
        },
        {
          label: `🃏 Flashcards`,
          html: `<p>Ripassa girando le carte: sul fronte una frase italiana, sul retro la traduzione.</p>`,
          widget: `flashcards`,
          options: {
            cards: [
              { front: `il mio zaino`, back: `my backpack` },
              { front: `sua madre (di Luca)`, back: `his mother` },
              { front: `suo padre (di Anna)`, back: `her father` },
              { front: `la sua coda (del cane)`, back: `its tail` },
              { front: `la nostra scuola`, back: `our school` },
              { front: `i loro libri`, back: `their books` },
              { front: `la bici di Tom`, back: `Tom's bike` }
            ]
          }
        },
        {
          label: `🎵 La filastrocca`,
          html: `<p>Ripeti a ritmo, battendo le mani:</p>
<p style="font-size:1.15em"><b>I – my</b>, alzo la mano!<br><b>You – your</b>, ti stringo la mano!<br><b>He – his</b>, lui ha il suo cane,<br><b>She – her</b>, lei ha il suo pane!<br><b>It – its</b>, la coda del gatto,<br><b>We – our</b>, il nostro piatto,<br><b>They – their</b>, la loro casa:<br>la lista è finita: che bella sorpresa! 🎶</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: dire "di chi è"`,
      nodes: [
        { id: `poss`, label: `Possesso`, x: 50, y: 8, color: `#a855f7`, html: `Dire a chi appartiene qualcosa.`, why: `Tutte le lingue hanno modi per esprimere il possesso. L'inglese ne ha due principali: gli aggettivi possessivi (con i pronomi) e il genitivo 's (con i nomi).` },
        { id: `sogg`, label: `Pronomi soggetto`, x: 18, y: 30, color: `#3b82f6`, html: `I, you, he, she, it, we, they.`, why: `Ogni aggettivo possessivo "nasce" da un pronome personale. Nell'inglese antico <i>my</i> era <i>min</i> (come il tedesco <i>mein</i>) e la <i>n</i> è caduta davanti alle consonanti: da qui <i>my</i> e <i>mine</i>.` },
        { id: `agg`, label: `Aggettivi possessivi`, x: 50, y: 32, color: `#ec4899`, html: `my, your, his, her, its, our, their + nome.`, why: `Si chiamano "aggettivi" perché stanno <b>davanti a un nome</b> e lo accompagnano, come gli aggettivi.` },
        { id: `inv`, label: `Invariabili`, x: 82, y: 30, color: `#22c55e`, html: `Non cambiano per genere o numero della cosa.`, why: `Dopo il 1066 l'inglese ha perso quasi tutte le desinenze di genere e numero degli aggettivi: per questo <i>my</i> va bene per una cosa o cento.` },
        { id: `hisher`, label: `His / her / its`, x: 25, y: 60, color: `#ef4444`, html: `Dipendono dal sesso del possessore.`, why: `L'inglese ha perso il genere grammaticale dei nomi (in inglese antico, come in tedesco, ogni nome era maschile, femminile o neutro). È rimasto solo il genere "naturale" delle persone: perciò si guarda chi possiede.` },
        { id: `its`, label: `Its ≠ it's`, x: 25, y: 88, color: `#f97316`, html: `its = suo (di cosa); it's = it is.`, why: `<i>Its</i> è nato intorno al 1600 per sostituire <i>his</i> usato per le cose. Per un po' si scriveva con l'apostrofo, poi la regola si è fissata: i possessivi (its, his, ours) non hanno mai apostrofo.` },
        { id: `gen`, label: `Genitivo sassone 's`, x: 70, y: 62, color: `#0ea5e9`, html: `Anna's bike, my parents' room.`, why: `È ciò che resta della desinenza del genitivo dell'inglese antico (<i>-es</i>): <i>cyninges</i> = "del re". L'apostrofo segna la <i>e</i> caduta. Si chiama "sassone" perché viene dalla lingua degli Anglosassoni.` },
        { id: `whose`, label: `Whose?`, x: 75, y: 88, color: `#eab308`, html: `La domanda: di chi è?`, why: `<i>Whose</i> è il genitivo antico di <i>who</i> (chi): significa letteralmente "di chi".` }
      ],
      edges: [
        [`poss`, `agg`, `con pronomi`], [`poss`, `gen`, `con nomi`], [`sogg`, `agg`, `genera`], [`agg`, `inv`, `sono`],
        [`agg`, `hisher`, `3ª persona`], [`hisher`, `its`, `attenzione a`], [`gen`, `whose`, `si chiede con`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: trappole e genitivo`,
      questions: [
        { type: `mc`, q: `___ raining. Take ___ umbrella!`, options: [`Its / you're`, `It's / your`, `Its / your`], answer: 1, explain: `It's = it is; your = tuo.` },
        { type: `mc`, q: `"La macchina di mio zio" si dice…`, options: [`the car of my uncle's`, `my uncle's car`, `my car's uncle`], answer: 1, explain: `Genitivo sassone: possessore + 's + cosa.` },
        { type: `tf`, q: `In inglese si dice "the my book".`, answer: false, explain: `Niente articolo prima del possessivo: my book.` }
      ]
    }
  ],
  glossary: [
    { t: `Possessive adjective`, d: `Aggettivo possessivo: my, your, his, her, its, our, their.` },
    { t: `Subject pronoun`, d: `Pronome soggetto: I, you, he, she, it, we, they.` },
    { t: `His`, d: `Suo / sua di un possessore maschio.` },
    { t: `Her`, d: `Suo / sua di un possessore femmina.` },
    { t: `Its`, d: `Suo / sua di un animale o di una cosa. Senza apostrofo!` },
    { t: `It's`, d: `Contrazione di it is o it has.` },
    { t: `Genitivo sassone`, d: `Possessore + 's + cosa posseduta: Anna's bag.` },
    { t: `Whose`, d: `"Di chi?": Whose pen is this?` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Il possessivo di "we" è…`, options: [`us`, `our`, `their`], answer: 1, explain: `We → our.` },
      { type: `mc`, q: `Paolo is talking to ___ mum.`, options: [`his`, `her`, `its`], answer: 0, explain: `Il possessore è Paolo → his.` },
      { type: `mc`, q: `My sister loves ___ cat.`, options: [`his`, `her`, `their`], answer: 1, explain: `Il possessore è my sister → her.` },
      { type: `text`, q: `Completa: The bird is in ___ nest. (suo, dell'uccello)`, answer: [`its`], explain: `Animale → its, senza apostrofo.` },
      { type: `mc`, q: `Tom and Jerry live in New York. ___ apartment is small.`, options: [`They're`, `There`, `Their`], answer: 2, explain: `Possessivo di they → their.` },
      { type: `tf`, q: `"My friends" significa "i miei amici": my non cambia al plurale.`, answer: true, explain: `I possessivi inglesi sono invariabili.` },
      { type: `text`, q: `Traduci: "la nostra classe".`, answer: [`our class`, `our classroom`], explain: `our + class.` },
      { type: `mc`, q: `"You're" significa…`, options: [`tuo`, `tu sei / voi siete`, `loro`], answer: 1, explain: `You're = you are.` },
      { type: `text`, q: `Traduci con il genitivo sassone: "il cane di Marco".`, answer: [`marco's dog`, `marcos dog`], explain: `Marco's dog.` },
      { type: `mc`, q: `___ pen is this? – It's Luca's.`, options: [`Who`, `Whose`, `Who's`], answer: 1, explain: `Whose = di chi.` },
      { type: `order`, q: `Metti in ordine i possessivi come nella tabella (I, you, he, she, it, we, they).`, items: [`my`, `your`, `his`, `her`, `its`, `our`, `their`], explain: `my, your, his, her, its, our, their.` },
      { type: `mc`, q: `Quale frase è corretta?`, options: [`The dog eats it's food.`, `The dog eats its food.`, `The dog eats his's food.`], answer: 1, explain: `Possessivo di it → its, senza apostrofo.` }
    ]
  }
});
