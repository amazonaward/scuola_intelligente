TOPIC('ro', {
  id: `m1-ing-possessives`,
  title: `Possessive adjectives`,
  intro: `<i>This is <b>my</b> bag. That's <b>her</b> phone. <b>Their</b> dog is huge!</i> <b>Adjectivele posesive</b> spun <b>al cui</b> este un lucru. În engleză sunt doar 7 și nu se schimbă niciodată după lucrul posedat… dar cu <b>his</b> și <b>her</b> trebuie să fii atent, pentru că aleg după <b>posesor</b>, nu după lucrul posedat! 🎒📱🐶`,
  minutes: 30,
  sections: [
    {
      type: `text`, title: `1. Pronume personale și adjective posesive`,
      html: `<p>Fiecare pronume personal are adjectivul său posesiv:</p>
<table>
<tr><th>Pronume personal</th><th>Adjectiv posesiv</th><th>Română</th><th>Exemplu</th></tr>
<tr><td>I</td><td><b>my</b></td><td>al meu, a mea, ai mei, ale mele</td><td>my book, my shoes</td></tr>
<tr><td>you</td><td><b>your</b></td><td>al tău, a ta…</td><td>your pen</td></tr>
<tr><td>he</td><td><b>his</b></td><td>al lui</td><td>his bike</td></tr>
<tr><td>she</td><td><b>her</b></td><td>al ei</td><td>her bike</td></tr>
<tr><td>it</td><td><b>its</b></td><td>al lui / al ei (al unui animal / lucru)</td><td>its tail</td></tr>
<tr><td>we</td><td><b>our</b></td><td>al nostru…</td><td>our teacher</td></tr>
<tr><td>you</td><td><b>your</b></td><td>al vostru…</td><td>your classroom</td></tr>
<tr><td>they</td><td><b>their</b></td><td>al lor</td><td>their house</td></tr>
</table>
<p>Pronunție: <b>my</b> «mai», <b>your</b> «ior», <b>his</b> «hiz», <b>her</b> «hăr», <b>its</b> «its», <b>our</b> «auăr», <b>their</b> «dheăr».</p>`
    },
    {
      type: `text`, title: `2. Trei reguli de aur`,
      html: `<ol>
<li><b>Nu se schimbă niciodată</b>: nici după masculin/feminin, nici după singularul/pluralul lucrului posedat.<br><i><b>my</b> brother, <b>my</b> sister, <b>my</b> friends</i> = fratele meu, sora mea, prietenii mei.</li>
<li><b>Fără articol</b> în față! În română spunem „cartea <i>mea</i>”, în engleză doar <i>my book</i>. ❌ <i>the my book</i></li>
<li><b>His / her depind de POSESOR</b>, nu de lucrul posedat.<br><i>Marco and <b>his</b> mother</i> (mama lui) — <i>Giulia and <b>her</b> father</i> (tatăl ei).</li>
</ol>
<p>În română „său / sa” se acordă cu lucrul posedat (tatăl său, mama sa), iar „lui / ei” arată posesorul; în engleză te uiți întotdeauna <b>cine posedă</b>: dacă este un băiat → his, o fată → her, un animal sau un lucru → its.</p>`
    },
    {
      type: `svg`, title: `His sau her? Uită-te cine posedă!`,
      caption: `Săgeata pornește de la posesor: el sau ea hotărăște între his și her, nu lucrul posedat.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fdf4ff"/>
<circle cx="90" cy="80" r="32" fill="#fcd34d"/>
<rect x="60" y="112" width="60" height="70" rx="12" fill="#3b82f6"/>
<text x="90" y="210" font-size="18" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Paul</text>
<path d="M130 130 L230 130" stroke="#1e3a8a" stroke-width="5" marker-end="url(#a1)"/>
<rect x="240" y="100" width="70" height="60" rx="8" fill="#f472b6"/>
<text x="275" y="140" font-size="28" text-anchor="middle">👜</text>
<text x="275" y="190" font-size="20" text-anchor="middle" fill="#1e3a8a" font-weight="bold">HIS bag</text>
<text x="275" y="212" font-size="14" text-anchor="middle" fill="#334155">(geanta lui)</text>
<circle cx="510" cy="80" r="32" fill="#fcd34d"/>
<path d="M478 75 Q510 30 542 75" fill="#92400e"/>
<rect x="480" y="112" width="60" height="70" rx="12" fill="#ec4899"/>
<text x="510" y="210" font-size="18" text-anchor="middle" fill="#9d174d" font-weight="bold">Emma</text>
<path d="M470 130 L405 130" stroke="#9d174d" stroke-width="5" marker-end="url(#a2)"/>
<rect x="330" y="100" width="70" height="60" rx="8" fill="#60a5fa"/>
<text x="365" y="140" font-size="28" text-anchor="middle">⚽</text>
<text x="390" y="250" font-size="20" text-anchor="middle" fill="#9d174d" font-weight="bold">HER ball</text>
<text x="390" y="272" font-size="14" text-anchor="middle" fill="#334155">(mingea ei)</text>
<defs>
<marker id="a1" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#1e3a8a"/></marker>
<marker id="a2" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#9d174d"/></marker>
</defs>
</svg>`
    },
    {
      type: `quiz`, title: `Mini-test: his, her sau its?`,
      questions: [
        { type: `mc`, q: `Luca loves ___ grandmother.`, options: [`his`, `her`, `its`], answer: 0, explain: `Posesorul este Luca (băiat) → his, chiar dacă bunica este femeie.` },
        { type: `mc`, q: `Anna is playing with ___ brother.`, options: [`his`, `her`, `their`], answer: 1, explain: `Posesorul este Anna → her.` },
        { type: `mc`, q: `The dog is wagging ___ tail.`, options: [`it's`, `its`, `his`], answer: 1, explain: `Animal (it) → its, fără apostrof.` }
      ]
    },
    {
      type: `text`, title: `3. Atenție la „gemenii” care sună la fel`,
      html: `<p>Unele posesive se pronunță ca alte cuvinte: sunt capcane clasice, chiar și pentru vorbitorii nativi!</p>
<table>
<tr><th>Posesiv</th><th>Cuvântul „geamăn”</th><th>Exemplu</th></tr>
<tr><td><b>its</b> (al unui lucru/animal)</td><td><b>it's</b> = it is / it has</td><td><i><b>It's</b> a cat. <b>Its</b> name is Felix.</i></td></tr>
<tr><td><b>your</b> (al tău)</td><td><b>you're</b> = you are</td><td><i><b>You're</b> late! Where's <b>your</b> watch?</i></td></tr>
<tr><td><b>their</b> (al lor)</td><td><b>they're</b> = they are; <b>there</b> = acolo / există</td><td><i><b>They're</b> at home. <b>Their</b> house is <b>there</b>.</i></td></tr>
</table>
<p>💡 Truc: dacă poți înlocui cu „it is / you are / they are”, este nevoie de apostrof. Altfel este posesivul.</p>`
    },
    {
      type: `text`, title: `4. Bonus: genitivul saxon și „Whose?”`,
      html: `<p>Pentru a spune al cui este un lucru folosind un <b>substantiv</b> (nu un pronume), engleza folosește <b>'s</b>, <b>genitivul saxon</b>:</p>
<ul>
<li><i><b>Anna's</b> bike</i> = bicicleta Annei (mai întâi posesorul, apoi lucrul, fără articol!);</li>
<li><i>my <b>dad's</b> car</i> = mașina tatălui meu;</li>
<li>plural în -s: doar apostroful → <i>my <b>parents'</b> room</i> = camera părinților mei.</li>
</ul>
<p>Pentru a întreba al cui este ceva se folosește <b>Whose…?</b> («huuz»):</p>
<ul>
<li><i><b>Whose</b> pencil case is this?</i> – <i>It's <b>my</b> pencil case. / It's <b>Marco's</b>.</i></li>
</ul>`
    },
    {
      type: `example`, title: `Exemplu practic: prezintă-ți familia`,
      html: `<p><i>Hi! I'm Sofia. This is <b>my</b> family. <b>My</b> dad is Luca and <b>his</b> job is very interesting: he's a pilot! <b>My</b> mum is Elena and <b>her</b> favourite hobby is gardening. I've got two brothers: <b>their</b> names are Matteo and Leo. We've got a cat. <b>Its</b> name is Pepe. <b>Our</b> house is in Turin. What's <b>your</b> family like?</i></p>
<p>Numără posesivele: sunt 9! Încearcă să scrii un text asemănător despre familia ta.</p>`
    },
    {
      type: `example`, title: `Exemplu practic: obiecte pierdute în clasă`,
      html: `<p>Profesoara găsește niște obiecte uitate:</p>
<p>— <i>Whose ruler is this? Is it <b>your</b> ruler, Giulia?</i><br>
— <i>No, it isn't <b>my</b> ruler. It's Paolo's. <b>His</b> ruler is blue.</i><br>
— <i>And these trainers? Are they the twins' trainers?</i><br>
— <i>Yes! They're <b>their</b> trainers.</i></p>`
    },
    {
      type: `widget`, title: `Joc: potrivește pronumele cu posesivul`,
      widget: `match`,
      options: {
        pairs: [[`I`, `my`], [`you`, `your`], [`he`, `his`], [`she`, `her`], [`it`, `its`], [`we`, `our`], [`they`, `their`]]
      }
    },
    {
      type: `widget`, title: `Joc: cine este posesorul?`,
      widget: `classify`,
      caption: `Alege his, her sau its în funcție de CINE posedă.`,
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
      type: `curiosity`, title: `Ai știut că… „its” este un cuvânt tânăr?`,
      html: `<p>Până în secolul al XVI-lea, engleza nu avea <b>its</b>: pentru lucruri se folosea <b>his</b>! În Biblia regelui Iacob (1611) se citește „<i>if the salt have lost <b>his</b> savour</i>” (dacă sarea își pierde gustul <i>ei</i>). <i>Its</i> apare chiar în acei ani și la început se scria chiar <b>it's</b>, cu apostrof. Shakespeare îl folosește foarte puțin, aproape doar în ultimele piese. Iată de ce și astăzi mulți englezi încurcă its și it's!</p>`
    },
    {
      type: `curiosity`, title: `Ai știut că… în engleză corăbiile sunt „ea”?`,
      html: `<p>De obicei pentru lucruri se folosește <b>its</b>, dar, prin tradiție, marinarii vorbesc despre corăbii la feminin: <i>The Titanic and <b>her</b> passengers</i>. Același lucru se întâmplă uneori cu țările (<i>England and <b>her</b> history</i>). În schimb, pentru animalele de companie al căror sex îl cunoști poți folosi <b>his</b> sau <b>her</b>: <i>My dog Rex loves <b>his</b> ball.</i></p>`
    },
    {
      type: `alternatives`, title: `Alte moduri de a înțelege`,
      intro: `Dacă his/her te încurcă în continuare, încearcă aceste căi.`,
      tabs: [
        {
          label: `👉 Degetul posesorului`,
          html: `<p>Înainte de a alege, <b>arată cu degetul spre posesor</b> (cel care are lucrul) și întreabă-te: este <b>băiat</b>, <b>fată</b> sau <b>lucru/animal</b>?</p>
<ul>
<li><i>Pălăria bunicului</i> → degetul pe bunic → băiat → <b>his</b> hat.</li>
<li><i>Mingea Sarei</i> → degetul pe Sara → fată → <b>her</b> ball.</li>
<li><i>Roțile bicicletei</i> → degetul pe bicicletă → lucru → <b>its</b> wheels.</li>
</ul>
<p>Lucrul posedat (pălăria, mingea, roțile) <b>nu contează niciodată</b>.</p>`
        },
        {
          label: `🇫🇷🇩🇪 Cum fac celelalte limbi`,
          html: `<ul>
<li>🇮🇹🇪🇸🇫🇷 În italiană, spaniolă și franceză, posesivul se acordă cu <b>lucrul posedat</b>: <i>suo padre / sua madre</i>; în franceză <i>son père / sa mère</i> (chiar dacă „său” aparține unei fete!). Și în română „său / sa” se acordă cu lucrul posedat: <i>tatăl său / mama sa</i>.</li>
<li>🇬🇧🇩🇪 În engleză și în germană se uită la <b>posesor</b>: <i>his mother</i> (a lui), <i>her father</i> (a ei); în germană <i>sein Vater</i> (al lui), <i>ihr Vater</i> (al ei). În română „lui / ei” funcționează la fel: <i>mama lui, tatăl ei</i>.</li>
</ul>
<p>Deci engleza este mai <b>clară</b> decât „său / sa”: „Marco a văzut-o pe Anna cu tatăl său” (al cui?) în engleză este imediat clar: <i>with <b>his</b> father</i> sau <i>with <b>her</b> father</i>.</p>`
        },
        {
          label: `🃏 Flashcards`,
          html: `<p>Repetă învârtind cărțile: pe față o expresie românească, pe verso traducerea.</p>`,
          widget: `flashcards`,
          options: {
            cards: [
              { front: `rucsacul meu`, back: `my backpack` },
              { front: `mama lui (a lui Luca)`, back: `his mother` },
              { front: `tatăl ei (al Annei)`, back: `her father` },
              { front: `coada lui (a câinelui)`, back: `its tail` },
              { front: `școala noastră`, back: `our school` },
              { front: `cărțile lor`, back: `their books` },
              { front: `bicicleta lui Tom`, back: `Tom's bike` }
            ]
          }
        },
        {
          label: `🎵 Poezioara`,
          html: `<p>Repetă în ritm, bătând din palme:</p>
<p style="font-size:1.15em"><b>I – my</b>, eu am ghiozdanul meu!<br><b>You – your</b>, tu ai cartea ta, nu-i așa?<br><b>He – his</b>, el are câinele lui,<br><b>She – her</b>, ea are pâinea ei!<br><b>It – its</b>, coada pisicii,<br><b>We – our</b>, farfuria noastră,<br><b>They – their</b>, casa lor:<br>lista s-a terminat: ce surpriză frumoasă! 🎶</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Hartă: a spune „al cui este”`,
      nodes: [
        { id: `poss`, label: `Posesie`, x: 50, y: 8, color: `#a855f7`, html: `A spune cui aparține ceva.`, why: `Toate limbile au moduri de a exprima posesia. Engleza are două principale: adjectivele posesive (cu pronumele) și genitivul 's (cu substantivele).` },
        { id: `sogg`, label: `Pronume personale`, x: 18, y: 30, color: `#3b82f6`, html: `I, you, he, she, it, we, they.`, why: `Fiecare adjectiv posesiv „se naște” dintr-un pronume personal. În engleza veche, <i>my</i> era <i>min</i> (ca germanul <i>mein</i>), iar <i>n</i> a căzut înaintea consoanelor: de aici <i>my</i> și <i>mine</i>.` },
        { id: `agg`, label: `Adjective posesive`, x: 50, y: 32, color: `#ec4899`, html: `my, your, his, her, its, our, their + substantiv.`, why: `Se numesc „adjective” pentru că stau <b>în fața unui substantiv</b> și îl însoțesc, ca adjectivele.` },
        { id: `inv`, label: `Invariabile`, x: 82, y: 30, color: `#22c55e`, html: `Nu se schimbă după genul sau numărul lucrului.`, why: `După 1066, engleza a pierdut aproape toate desinențele de gen și număr ale adjectivelor: de aceea <i>my</i> merge pentru un lucru sau pentru o sută.` },
        { id: `hisher`, label: `His / her / its`, x: 25, y: 60, color: `#ef4444`, html: `Depind de sexul posesorului.`, why: `Engleza a pierdut genul gramatical al substantivelor (în engleza veche, ca în germană, fiecare substantiv era masculin, feminin sau neutru). A rămas doar genul „natural” al persoanelor: de aceea te uiți la cine posedă.` },
        { id: `its`, label: `Its ≠ it's`, x: 25, y: 88, color: `#f97316`, html: `its = al unui lucru; it's = it is.`, why: `<i>Its</i> a apărut pe la 1600 ca să înlocuiască <i>his</i> folosit pentru lucruri. O vreme se scria cu apostrof, apoi regula s-a fixat: posesivele (its, his, ours) nu au niciodată apostrof.` },
        { id: `gen`, label: `Genitivul saxon 's`, x: 70, y: 62, color: `#0ea5e9`, html: `Anna's bike, my parents' room.`, why: `Este ceea ce a rămas din desinența genitivului din engleza veche (<i>-es</i>): <i>cyninges</i> = „al regelui”. Apostroful marchează <i>e</i>-ul căzut. Se numește „saxon” pentru că vine din limba anglo-saxonilor.` },
        { id: `whose`, label: `Whose?`, x: 75, y: 88, color: `#eab308`, html: `Întrebarea: al cui este?`, why: `<i>Whose</i> este genitivul vechi al lui <i>who</i> (cine): înseamnă literalmente „al cui”.` }
      ],
      edges: [
        [`poss`, `agg`, `cu pronume`], [`poss`, `gen`, `cu substantive`], [`sogg`, `agg`, `generează`], [`agg`, `inv`, `sunt`],
        [`agg`, `hisher`, `persoana a III-a`], [`hisher`, `its`, `atenție la`], [`gen`, `whose`, `se întreabă cu`]
      ]
    },
    {
      type: `quiz`, title: `Mini-test: capcane și genitivul`,
      questions: [
        { type: `mc`, q: `___ raining. Take ___ umbrella!`, options: [`Its / you're`, `It's / your`, `Its / your`], answer: 1, explain: `It's = it is; your = al tău.` },
        { type: `mc`, q: `„Mașina unchiului meu” se spune…`, options: [`the car of my uncle's`, `my uncle's car`, `my car's uncle`], answer: 1, explain: `Genitivul saxon: posesor + 's + lucru.` },
        { type: `tf`, q: `În engleză se spune „the my book”.`, answer: false, explain: `Fără articol înainte de posesiv: my book.` }
      ]
    }
  ],
  glossary: [
    { t: `Possessive adjective`, d: `Adjectiv posesiv: my, your, his, her, its, our, their.` },
    { t: `Subject pronoun`, d: `Pronume personal: I, you, he, she, it, we, they.` },
    { t: `His`, d: `Al unui posesor de sex masculin.` },
    { t: `Her`, d: `Al unui posesor de sex feminin.` },
    { t: `Its`, d: `Al unui animal sau al unui lucru. Fără apostrof!` },
    { t: `It's`, d: `Contragere a lui it is sau it has.` },
    { t: `Genitivul saxon`, d: `Posesor + 's + lucrul posedat: Anna's bag.` },
    { t: `Whose`, d: `„Al cui?”: Whose pen is this?` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Posesivul lui „we” este…`, options: [`us`, `our`, `their`], answer: 1, explain: `We → our.` },
      { type: `mc`, q: `Paolo is talking to ___ mum.`, options: [`his`, `her`, `its`], answer: 0, explain: `Posesorul este Paolo → his.` },
      { type: `mc`, q: `My sister loves ___ cat.`, options: [`his`, `her`, `their`], answer: 1, explain: `Posesorul este my sister → her.` },
      { type: `text`, q: `Completează: The bird is in ___ nest. (al păsării)`, answer: [`its`], explain: `Animal → its, fără apostrof.` },
      { type: `mc`, q: `Tom and Jerry live in New York. ___ apartment is small.`, options: [`They're`, `There`, `Their`], answer: 2, explain: `Posesivul lui they → their.` },
      { type: `tf`, q: `„My friends” înseamnă „prietenii mei”: my nu se schimbă la plural.`, answer: true, explain: `Posesivele englezești sunt invariabile.` },
      { type: `text`, q: `Tradu: „clasa noastră”.`, answer: [`our class`, `our classroom`], explain: `our + class.` },
      { type: `mc`, q: `„You're” înseamnă…`, options: [`al tău`, `tu ești / voi sunteți`, `al lor`], answer: 1, explain: `You're = you are.` },
      { type: `text`, q: `Tradu folosind genitivul saxon: „câinele lui Marco”.`, answer: [`marco's dog`, `marcos dog`], explain: `Marco's dog.` },
      { type: `mc`, q: `___ pen is this? – It's Luca's.`, options: [`Who`, `Whose`, `Who's`], answer: 1, explain: `Whose = al cui.` },
      { type: `order`, q: `Pune în ordine posesivele ca în tabel (I, you, he, she, it, we, they).`, items: [`my`, `your`, `his`, `her`, `its`, `our`, `their`], explain: `my, your, his, her, its, our, their.` },
      { type: `mc`, q: `Quale frase è corretta?`, options: [`The dog eats it's food.`, `The dog eats its food.`, `The dog eats his's food.`], answer: 1, explain: `Posesivul lui it → its, fără apostrof.` }
    ]
  }
});
