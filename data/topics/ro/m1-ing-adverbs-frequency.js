TOPIC('ro', {
  id: `m1-ing-adverbs-frequency`,
  title: `Adverbs of frequency`,
  intro: `<i>I <b>always</b> have breakfast. I <b>sometimes</b> eat vegetables. I <b>never</b> go to bed before 9!</i> <b>Adverbele de frecvență</b> spun <b>cât de des</b> facem ceva. Merg mână în mână cu present simple și au un loc precis în propoziție. Învățăm „scara” de la 100% la 0% și întrebarea <b>How often…?</b> 📅🔁`,
  minutes: 30,
  sections: [
    {
      type: `text`, title: `1. Scara frecvenței`,
      html: `<p>Fiecare adverb corespunde, mai mult sau mai puțin, unui procent din ocazii:</p>
<table>
<tr><th>Adverb</th><th>Pronunție</th><th>Română</th><th>Cât de des</th></tr>
<tr><td><b>always</b></td><td>«olweiz»</td><td>mereu</td><td>100%</td></tr>
<tr><td><b>usually</b></td><td>«iujuali»</td><td>de obicei</td><td>aproximativ 90%</td></tr>
<tr><td><b>often</b></td><td>«ofăn»</td><td>adesea</td><td>aproximativ 70%</td></tr>
<tr><td><b>sometimes</b></td><td>«samtaimz»</td><td>uneori</td><td>aproximativ 50%</td></tr>
<tr><td><b>rarely / seldom</b></td><td>«reărli»</td><td>rar</td><td>aproximativ 10%</td></tr>
<tr><td><b>hardly ever</b></td><td>«hardli evăr»</td><td>aproape niciodată</td><td>aproximativ 5%</td></tr>
<tr><td><b>never</b></td><td>«nevăr»</td><td>niciodată</td><td>0%</td></tr>
</table>
<p>Procentele nu sunt precise ca la matematică: servesc pentru a ține minte <b>ordinea</b>.</p>`
    },
    {
      type: `svg`, title: `Termometrul frecvenței`,
      caption: `De la 100% (always) la 0% (never): cu cât bara este mai plină, cu atât se întâmplă mai des.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<g font-size="17" font-weight="bold">
<rect x="160" y="20" width="400" height="30" rx="6" fill="#e5e7eb"/><rect x="160" y="20" width="400" height="30" rx="6" fill="#16a34a"/><text x="20" y="42" fill="#14532d">always</text><text x="570" y="42" font-size="13" fill="#14532d" text-anchor="end">100%</text>
<rect x="160" y="58" width="400" height="30" rx="6" fill="#e5e7eb"/><rect x="160" y="58" width="360" height="30" rx="6" fill="#65a30d"/><text x="20" y="80" fill="#14532d">usually</text>
<rect x="160" y="96" width="400" height="30" rx="6" fill="#e5e7eb"/><rect x="160" y="96" width="280" height="30" rx="6" fill="#ca8a04"/><text x="20" y="118" fill="#14532d">often</text>
<rect x="160" y="134" width="400" height="30" rx="6" fill="#e5e7eb"/><rect x="160" y="134" width="200" height="30" rx="6" fill="#ea580c"/><text x="20" y="156" fill="#14532d">sometimes</text>
<rect x="160" y="172" width="400" height="30" rx="6" fill="#e5e7eb"/><rect x="160" y="172" width="40" height="30" rx="6" fill="#dc2626"/><text x="20" y="194" fill="#14532d">rarely</text>
<rect x="160" y="210" width="400" height="30" rx="6" fill="#e5e7eb"/><rect x="160" y="210" width="20" height="30" rx="6" fill="#b91c1c"/><text x="20" y="232" fill="#14532d">hardly ever</text>
<rect x="160" y="248" width="400" height="30" rx="6" fill="#e5e7eb"/><text x="20" y="270" fill="#14532d">never</text><text x="570" y="270" font-size="13" fill="#7f1d1d" text-anchor="end">0%</text>
</g>
</svg>`
    },
    {
      type: `text`, title: `2. Unde se pun în propoziție`,
      html: `<p>Aceasta este partea cea mai importantă. Există două reguli:</p>
<ol>
<li><b>ÎNAINTEA verbului principal</b>:<br><i>I <b>always</b> walk to school.</i> · <i>She <b>often</b> plays chess.</i> · <i>We <b>never</b> eat fish.</i></li>
<li><b>DUPĂ verbul to be</b> (am, is, are):<br><i>I am <b>always</b> happy.</i> · <i>He is <b>never</b> late.</i> · <i>They are <b>usually</b> tired on Monday.</i></li>
</ol>
<p>La negative și întrebări, adverbul stă <b>după auxiliar</b> și înaintea verbului:</p>
<ul>
<li><i>I <b>don't usually</b> watch TV.</i> (de obicei nu mă uit la TV)</li>
<li><i><b>Do</b> you <b>often</b> go to the cinema?</i></li>
</ul>
<p>⚠️ <b>Never</b> este deja negativ: <i>I <b>never</b> eat meat</i> ✅ — <i>I <b>don't never</b> eat meat</i> ❌ (în engleză nu se fac două negații!).</p>
<p>💡 <b>Sometimes</b> și <b>usually</b> pot sta și la începutul propoziției: <i><b>Sometimes</b> I play the guitar.</i></p>`
    },
    {
      type: `remember`, title: `Regula sandvișului`,
      html: `<p>🥪 Adverbul este umplutura unui sandviș:</p>
<ul>
<li>verb obișnuit: <b>subiect + ADVERB + verb</b> → <i>She <b>always</b> sings.</i></li>
<li>verbul be: <b>subiect + be + ADVERB</b> → <i>She is <b>always</b> cheerful.</i></li>
</ul>`
    },
    {
      type: `quiz`, title: `Mini-test: poziția`,
      questions: [
        { type: `mc`, q: `Alege propoziția corectă.`, options: [`I go always to bed at 10.`, `I always go to bed at 10.`, `Always I go to bed at 10.`], answer: 1, explain: `La un verb obișnuit, adverbul stă înaintea verbului: I always go.` },
        { type: `mc`, q: `Alege propoziția corectă.`, options: [`She is often late.`, `She often is late.`], answer: 0, explain: `La to be, adverbul stă după: she is often late.` },
        { type: `tf`, q: `„I don't never eat sweets” este corectă.`, answer: false, explain: `Never este deja negativ: I never eat sweets.` }
      ]
    },
    {
      type: `text`, title: `3. How often…? și expresiile de frecvență`,
      html: `<p>Pentru a întreba cât de des se face ceva: <b>How often</b> + do/does + subiect + verb?</p>
<p><i><b>How often do</b> you go swimming?</i> – <i>I <b>usually</b> go twice a week.</i></p>
<p>Se poate răspunde și cu <b>expresii de frecvență</b>, care stau de obicei <b>la sfârșitul</b> propoziției:</p>
<ul>
<li><b>once</b> a week = o dată pe săptămână</li>
<li><b>twice</b> a month = de două ori pe lună</li>
<li><b>three times</b> a year = de trei ori pe an (de la 3 în sus: <i>număr + times</i>)</li>
<li><b>every</b> day / week / Sunday = în fiecare zi / săptămână / duminică</li>
<li><b>on</b> Mondays = lunea (în toate zilele de luni)</li>
</ul>
<p><i>I play football <b>three times a week</b>. We visit our grandparents <b>every Sunday</b>.</i></p>`
    },
    {
      type: `example`, title: `Exemplu practic: sondajul clasei`,
      html: `<p>Faceți un sondaj în engleză! Fiecare răspunde la: <i>How often do you…</i></p>
<table>
<tr><th>Activitatea</th><th>Răspunsul Martei</th></tr>
<tr><td>…eat fruit?</td><td><i>I <b>always</b> eat fruit at lunch.</i></td></tr>
<tr><td>…play video games?</td><td><i>I play video games <b>twice a week</b>.</i></td></tr>
<tr><td>…read comics?</td><td><i>I <b>often</b> read comics.</i></td></tr>
<tr><td>…go to the museum?</td><td><i>I <b>hardly ever</b> go to the museum.</i></td></tr>
<tr><td>…drink coffee?</td><td><i>I <b>never</b> drink coffee!</i></td></tr>
</table>
<p>Apoi raportează: <i>Marta <b>always</b> eats fruit, but she <b>never</b> drinks coffee.</i> Ține minte <b>-s</b>-ul de la persoana a III-a!</p>`
    },
    {
      type: `example`, title: `Exemplu practic: profilul unui animal`,
      html: `<p><i>The koala lives in Australia. It <b>usually</b> sleeps about 18-22 hours a day! It <b>always</b> eats eucalyptus leaves and it <b>hardly ever</b> drinks water, because the leaves are full of water. It <b>rarely</b> comes down from the trees. It is <b>never</b> in a hurry.</i></p>
<p>Numele „koala”, după o explicație foarte răspândită, ar veni dintr-o limbă aborigenă și ar însemna „fără apă”.</p>`
    },
    {
      type: `widget`, title: `Joc: potrivește adverbul cu sensul`,
      widget: `match`,
      options: {
        pairs: [[`always`, `mereu`], [`usually`, `de obicei`], [`often`, `adesea`], [`sometimes`, `uneori`], [`rarely`, `rar`], [`hardly ever`, `aproape niciodată`], [`never`, `niciodată`], [`twice a week`, `de două ori pe săptămână`]]
      }
    },
    {
      type: `widget`, title: `Joc: înaintea verbului sau după „be”?`,
      widget: `classify`,
      caption: `Unde stă adverbul? Înaintea verbului principal sau după verbul be?`,
      options: {
        groups: [`Înaintea verbului (I always play)`, `După be (I am always…)`],
        items: [
          [`I ___ walk to school.`, 0], [`She ___ eats pasta.`, 0], [`We ___ watch films.`, 0], [`They ___ get up early.`, 0],
          [`He is ___ hungry.`, 1], [`I am ___ late.`, 1], [`You are ___ kind.`, 1], [`It is ___ cold in January.`, 1]
        ]
      }
    },
    {
      type: `curiosity`, title: `Ai știut că… „always” înseamnă „tot drumul”?`,
      html: `<p><b>Always</b> vine din engleza veche <i>ealne weg</i>, adică „<b>all the way</b>”, tot drumul, pe tot parcursul. Cu timpul a căpătat sensul „tot timpul”, adică mereu. Iar <b>never</b> s-a născut din unirea lui <i>ne</i> (nu) + <i>ever</i> (vreodată, în orice moment): „în niciun moment”!</p>`
    },
    {
      type: `curiosity`, title: `Ai știut că… pentru un englez „often” are un „t” mut?`,
      html: `<p>Pronunția cea mai obișnuită a lui <b>often</b> este «ofăn», cu <b>t mut</b>, ca în <i>listen</i> și <i>castle</i>. Însă în secolul al XVII-lea t-ul se pronunța, iar astăzi multe persoane din Anglia și din Statele Unite au început din nou să-l pronunțe («ofăten»): dicționarele acceptă ambele pronunții. Limbile se schimbă continuu!</p>`
    },
    {
      type: `alternatives`, title: `Alte moduri de a înțelege`,
      intro: `Dacă îți este greu să ții minte ordinea sau poziția, încearcă aceste căi.`,
      tabs: [
        {
          label: `📏 Axa procentelor`,
          html: `<p>Pune adverbele pe o axă ca numerele: 0 = never, 50 = sometimes, 100 = always. Mută semnul: la ce procent ai pune <i>often</i>? Dar <i>usually</i>? Cu cât te apropii de 100, cu atât este mai frecvent.</p>`,
          widget: `numberLine`,
          options: { min: 0, max: 100, step: 10, marks: [0, 10, 50, 70, 90, 100] }
        },
        {
          label: `📅 Calendarul`,
          html: `<p>Gândește-te la o săptămână de 7 zile și colorează zilele în care faci un lucru:</p>
<ul>
<li>7 zile din 7 → <b>always</b> 🟩🟩🟩🟩🟩🟩🟩</li>
<li>5-6 zile → <b>usually</b> 🟩🟩🟩🟩🟩🟩⬜</li>
<li>4-5 zile → <b>often</b> 🟩🟩🟩🟩⬜⬜⬜</li>
<li>2-3 zile → <b>sometimes</b> 🟩🟩⬜⬜⬜⬜⬜</li>
<li>1 zi din când în când → <b>rarely</b> 🟩⬜⬜⬜⬜⬜⬜</li>
<li>nicio zi → <b>never</b> ⬜⬜⬜⬜⬜⬜⬜</li>
</ul>`
        },
        {
          label: `🇷🇴🇬🇧 Română contra engleză`,
          html: `<p>În română, adverbul stă de obicei <b>după</b> verb (dar poate sta și înainte): <i>Eu joc <b>mereu</b></i>. În engleză stă <b>înainte</b>: <i>I <b>always</b> play</i>. Cu „a fi”, în schimb, cele două limbi fac la fel: <i>Sunt <b>mereu</b> fericit = I am <b>always</b> happy</i>.</p>
<p>Alte limbi: în 🇫🇷 franceză <i>Je joue <b>toujours</b></i> și în 🇩🇪 germană <i>Ich spiele <b>immer</b></i>, adverbul vine după verb. Engleza este „ciudata” familiei: verbul principal vrea adverbul <b>în față</b>.</p>`
        },
        {
          label: `🃏 Flashcards de recapitulare`,
          html: `<p>Pe față o propoziție românească, pe verso traducerea cu adverbul la locul potrivit.</p>`,
          widget: `flashcards`,
          options: {
            cards: [
              { front: `Iau mereu micul dejun.`, back: `I always have breakfast.` },
              { front: `El este adesea obosit.`, back: `He is often tired.` },
              { front: `Nu beau niciodată cafea.`, back: `I never drink coffee.` },
              { front: `De obicei mergem pe jos.`, back: `We usually walk.` },
              { front: `Ea întârzie rar.`, back: `She is rarely late.` },
              { front: `Înot de două ori pe săptămână.`, back: `I swim twice a week.` }
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Hartă: a spune cât de des`,
      nodes: [
        { id: `freq`, label: `Frecvență`, x: 50, y: 8, color: `#16a34a`, html: `Câte ori se petrece o acțiune.`, why: `Se leagă de present simple, timpul obiceiurilor: un obicei este tocmai ceva care se repetă cu o anumită frecvență.` },
        { id: `avv`, label: `Adverbe de frecvență`, x: 25, y: 32, color: `#3b82f6`, html: `always, usually, often, sometimes, rarely, hardly ever, never.`, why: `Sunt „adverbe nedefinite”: nu dau un număr precis, ci o estimare. De aceea profesorii le așază pe o scară de la 100% la 0%.` },
        { id: `espr`, label: `Expresii de frecvență`, x: 75, y: 32, color: `#f59e0b`, html: `once / twice / three times a week, every day.`, why: `Dau un număr precis. <i>Once</i> și <i>twice</i> sunt forme vechi ale lui „one” și „two” cu desinența adverbială <i>-es</i> a englezei vechi; de la trei în sus se folosește <i>times</i>.` },
        { id: `prima`, label: `Înaintea verbului`, x: 12, y: 60, color: `#ef4444`, html: `I always play / She never eats.`, why: `În engleza medievală, verbul putea sta înaintea adverbului (ca în română). Odată cu răspândirea auxiliarelor (do), verbele principale au rămas „nemișcate”, iar adverbul s-a stabilizat în fața lor.` },
        { id: `dopo`, label: `După „be”`, x: 38, y: 60, color: `#a855f7`, html: `I am always…, He is never…`, why: `<i>Be</i> se comportă ca un auxiliar: în întrebări se inversează (<i>Are you…?</i>), iar adverbul îl urmează, așa cum urmează <i>do</i>, <i>can</i>, <i>have</i>.` },
        { id: `never`, label: `Never = negație`, x: 25, y: 86, color: `#b91c1c`, html: `Niciodată împreună cu not/don't.`, why: `Engleza standard nu admite dubla negație: „<i>I don't never</i>” ar nega de două ori. În engleza veche, însă, dubla negație era normală, iar în română este încă normală (<i>nu</i> vin <i>niciodată</i>).` },
        { id: `how`, label: `How often…?`, x: 75, y: 60, color: `#0ea5e9`, html: `Întrebarea prin care se cere frecvența.`, why: `<i>Often</i> vine din vechiul <i>oft</i> (încă folosit în poezie: „oft-repeated”). <i>How often</i> = „cât de des”.` },
        { id: `ps`, label: `Present simple`, x: 75, y: 86, color: `#14b8a6`, html: `Timpul obiceiurilor.`, why: `Obiceiurile se repetă: de aceea adverbele și expresiile de frecvență sunt „cuvintele-semnal” ale lui present simple.` }
      ],
      edges: [
        [`freq`, `avv`, `se exprimă cu`], [`freq`, `espr`, `se exprimă cu`], [`avv`, `prima`, `poziție`], [`avv`, `dopo`, `poziție`],
        [`avv`, `never`, `atenție`], [`freq`, `how`, `se întreabă cu`], [`how`, `ps`, `folosește`]
      ]
    },
    {
      type: `quiz`, title: `Mini-test: how often?`,
      questions: [
        { type: `mc`, q: `„De două ori pe lună” se spune…`, options: [`two times month`, `twice a month`, `second a month`], answer: 1, explain: `Twice = de două ori; a month = pe lună.` },
        { type: `mc`, q: `Care este mai frecvent?`, options: [`sometimes`, `usually`, `rarely`], answer: 1, explain: `Usually (aproximativ 90%) > sometimes (50%) > rarely (10%).` },
        { type: `text`, q: `Completează întrebarea: How ___ do you go to the gym?`, answer: [`often`], explain: `How often = cât de des.` }
      ]
    }
  ],
  glossary: [
    { t: `Adverb of frequency`, d: `Adverb care arată cât de des: always, usually, often, sometimes, rarely, hardly ever, never.` },
    { t: `Always`, d: `Mereu (100%).` },
    { t: `Usually`, d: `De obicei.` },
    { t: `Often`, d: `Adesea.` },
    { t: `Sometimes`, d: `Uneori (aproximativ jumătate din ocazii).` },
    { t: `Rarely / seldom`, d: `Rar.` },
    { t: `Hardly ever`, d: `Aproape niciodată.` },
    { t: `Never`, d: `Niciodată (0%). Este deja negativ: nu se folosește cu not.` },
    { t: `Once / twice`, d: `O dată / de două ori.` },
    { t: `How often…?`, d: `Cât de des…?` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `„Always” înseamnă…`, options: [`niciodată`, `mereu`, `adesea`], answer: 1, explain: `Always = mereu.` },
      { type: `order`, q: `Pune adverbele de la cel mai frecvent la cel mai puțin frecvent.`, items: [`always`, `usually`, `often`, `sometimes`, `rarely`, `never`], explain: `100% → 0%.` },
      { type: `mc`, q: `Alege propoziția cu adverbul la locul potrivit.`, options: [`I always eat breakfast.`, `I eat always breakfast.`, `I eat breakfast always.`], answer: 0, explain: `Înaintea verbului principal: I always eat.` },
      { type: `mc`, q: `Alege propoziția corectă.`, options: [`My dad usually is tired.`, `My dad is usually tired.`], answer: 1, explain: `La be, adverbul stă după: is usually.` },
      { type: `tf`, q: `„She never watches TV” este corectă.`, answer: true, explain: `Never înaintea verbului, -s-ul de la persoana a III-a pe watches.` },
      { type: `text`, q: `Tradu „aproape niciodată” (două cuvinte).`, answer: [`hardly ever`], explain: `Hardly ever = aproape niciodată.` },
      { type: `mc`, q: `„O dată pe săptămână” se spune…`, options: [`one time week`, `once a week`, `one a week`], answer: 1, explain: `Once a week.` },
      { type: `mc`, q: `Care propoziție este GREȘITĂ?`, options: [`I don't usually walk.`, `I don't never walk.`, `I never walk.`], answer: 1, explain: `Never nu se folosește cu don't: dublă negație.` },
      { type: `text`, q: `Completează: „How ___ do you visit your grandparents?” – „Every Sunday.”`, answer: [`often`], explain: `How often…?` },
      { type: `mc`, q: `Lucia merge la piscină 7 zile din 7. Lucia ___ goes swimming.`, options: [`sometimes`, `always`, `rarely`], answer: 1, explain: `În fiecare zi → always.` },
      { type: `order`, q: `Pune în ordine cuvintele.`, items: [`Tom`, `is`, `never`, `late`, `for school`], explain: `La be: Tom is never late for school.` },
      { type: `tf`, q: `Expresiile precum „twice a week” stau de obicei la sfârșitul propoziției.`, answer: true, explain: `Exemplu: I play tennis twice a week.` }
    ]
  }
});
