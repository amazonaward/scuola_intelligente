TOPIC('ro', {
  id: "p5-ita-analisi-grammaticale",
  title: "Analiza gramaticală",
  intro: "Fiecare cuvânt dintr-o propoziție are o „meserie”: unul dă nume lucrurilor, altul descrie, altul arată o acțiune, altul leagă… A face <b>analiza gramaticală</b> înseamnă a recunoaște meseria fiecărui cuvânt. În italiană „meseriile” sunt <b>nouă</b>: cele <b>nouă părți de vorbire</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Ce este analiza gramaticală",
      html: `<p>A face <b>analiza gramaticală</b> înseamnă a lua o propoziție, a privi cuvintele <b>unul câte unul</b> și a spune pentru fiecare:</p>
<ol>
<li><b>ce parte de vorbire este</b> (substantiv, verb, adjectiv…);</li>
<li><b>caracteristicile</b> lui: gen (masculin/feminin), număr (singular/plural), iar pentru verb conjugarea, modul, timpul, persoana.</li>
</ol>
<p>Atenție: analiza gramaticală privește <b>cuvântul luat singur</b>. Analiza <b>logică</b>, în schimb, privește <b>rolul</b> pe care îl au cuvintele în propoziție (subiect, predicat…). Sunt două lucruri diferite!</p>`
    },
    {
      type: "text",
      title: "Cele nouă părți de vorbire",
      html: `<p>Părțile de vorbire se împart în două mari familii.</p>
<p><b>Părți VARIABILE</b> (își schimbă forma: masculin/feminin, singular/plural, timpuri…):</p>
<ul>
<li><b>Articolul</b> (<i>articolo</i>): stă înaintea substantivului și îi arată genul și numărul. Hotărât (<i>il, lo, la, i, gli, le, l'</i>), nehotărât (<i>un, uno, una, un'</i>), partitiv (<i>del, dello, della, dei, degli, delle</i> = „puțin”, „câțiva”).</li>
<li><b>Substantivul</b> (<i>nome</i>): arată persoane, animale, lucruri, idei. Comun sau propriu, concret sau abstract, individual sau colectiv.</li>
<li><b>Adjectivul</b> (<i>aggettivo</i>): se alătură substantivului ca să-l descrie (calificativ: <i>alto, rosso</i>) sau să-l precizeze (posesiv <i>mio</i>, demonstrativ <i>questo</i>, numeral <i>tre</i>, nehotărât <i>alcuni</i>, interogativ <i>quale?</i>).</li>
<li><b>Pronumele</b> (<i>pronome</i>): stă <b>în locul</b> substantivului (pro-nume) ca să nu-l repetăm: <i>io, lui, lo, gli, questo, che, chi…</i></li>
<li><b>Verbul</b> (<i>verbo</i>): arată o acțiune, o stare sau un fel de a fi: <i>corro, sono, piove</i>.</li>
</ul>
<p><b>Părți INVARIABILE</b> (nu își schimbă niciodată forma):</p>
<ul>
<li><b>Adverbul</b> (<i>avverbio</i>): modifică sensul unui verb, al unui adjectiv sau al altui adverb: <i>bene, oggi, qui, molto, non</i>.</li>
<li><b>Prepoziția</b> (<i>preposizione</i>): leagă cuvintele. Simple: <i>di, a, da, in, con, su, per, tra, fra</i>. Articulate = prepoziție + articol: <i>del, alla, nei, sugli…</i></li>
<li><b>Conjuncția</b> (<i>congiunzione</i>): unește cuvinte sau propoziții: <i>e, o, ma, perché, quando, se, però</i>.</li>
<li><b>Interjecția</b> (<i>interiezione</i>): exprimă o emoție: <i>oh!, ahi!, evviva!, uffa!</i></li>
</ul>`
    },
    {
      type: "svg",
      title: "O propoziție, multe culori",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<text x="320" y="36" font-size="20" text-anchor="middle" fill="#1f2937" font-weight="bold">Oh! Il mio gatto dorme tranquillo sul divano e io lo guardo.</text>
<g font-size="15" text-anchor="middle">
<rect x="10" y="70" width="60" height="44" rx="8" fill="#facc15"/><text x="40" y="97" fill="#1f2937" font-weight="bold">Oh!</text>
<rect x="76" y="70" width="44" height="44" rx="8" fill="#7dd3fc"/><text x="98" y="97" fill="#1f2937" font-weight="bold">Il</text>
<rect x="126" y="70" width="58" height="44" rx="8" fill="#3b82f6"/><text x="155" y="97" fill="#ffffff" font-weight="bold">mio</text>
<rect x="190" y="70" width="70" height="44" rx="8" fill="#1f2937"/><text x="225" y="97" fill="#ffffff" font-weight="bold">gatto</text>
<rect x="266" y="70" width="74" height="44" rx="8" fill="#dc2626"/><text x="303" y="97" fill="#ffffff" font-weight="bold">dorme</text>
<rect x="346" y="70" width="92" height="44" rx="8" fill="#3b82f6"/><text x="392" y="97" fill="#ffffff" font-weight="bold">tranquillo</text>
<rect x="444" y="70" width="48" height="44" rx="8" fill="#16a34a"/><text x="468" y="97" fill="#ffffff" font-weight="bold">sul</text>
<rect x="498" y="70" width="70" height="44" rx="8" fill="#1f2937"/><text x="533" y="97" fill="#ffffff" font-weight="bold">divano</text>
<rect x="574" y="70" width="56" height="44" rx="8" fill="#ec4899"/><text x="602" y="97" fill="#ffffff" font-weight="bold">e</text>
</g>
<g font-size="15" text-anchor="middle">
<rect x="220" y="130" width="50" height="44" rx="8" fill="#7c3aed"/><text x="245" y="157" fill="#ffffff" font-weight="bold">io</text>
<rect x="276" y="130" width="50" height="44" rx="8" fill="#7c3aed"/><text x="301" y="157" fill="#ffffff" font-weight="bold">lo</text>
<rect x="332" y="130" width="90" height="44" rx="8" fill="#dc2626"/><text x="377" y="157" fill="#ffffff" font-weight="bold">guardo</text>
</g>
<g font-size="15" fill="#1f2937">
<rect x="20" y="200" width="18" height="18" fill="#1f2937"/><text x="44" y="215">substantiv</text>
<rect x="130" y="200" width="18" height="18" fill="#7dd3fc"/><text x="154" y="215">articol</text>
<rect x="230" y="200" width="18" height="18" fill="#3b82f6"/><text x="254" y="215">adjectiv</text>
<rect x="340" y="200" width="18" height="18" fill="#dc2626"/><text x="364" y="215">verb</text>
<rect x="430" y="200" width="18" height="18" fill="#7c3aed"/><text x="454" y="215">pronume</text>
<rect x="20" y="240" width="18" height="18" fill="#16a34a"/><text x="44" y="255">prepoziție</text>
<rect x="150" y="240" width="18" height="18" fill="#ec4899"/><text x="174" y="255">conjuncție</text>
<rect x="280" y="240" width="18" height="18" fill="#facc15"/><text x="304" y="255">interjecție</text>
<rect x="420" y="240" width="18" height="18" fill="#f97316"/><text x="444" y="255">adverb</text>
</g>
<text x="320" y="290" font-size="14" text-anchor="middle" fill="#475569">Atenție: aici „tranquillo” este adjectiv (se acordă cu gatto: gatta tranquilla).</text>
</svg>`,
      caption: "Fiecare culoare este o parte de vorbire. În propoziție sunt 8 din cele 9 părți: lipsește doar adverbul (portocaliu)."
    },
    {
      type: "text",
      title: "Cum se face, pas cu pas",
      html: `<ol>
<li><b>Găsește verbul</b> (sau verbele): este inima propoziției. Întreabă-te: „există o acțiune sau o stare?”</li>
<li><b>Găsește substantivele</b> și, chiar înaintea lor, <b>articolele</b>.</li>
<li><b>Caută adjectivele</b>: sunt cuvintele care se acordă cu un substantiv (se schimbă dacă substantivul devine feminin sau plural).</li>
<li><b>Caută pronumele</b>: cuvinte care înlocuiesc un substantiv (încearcă să pui substantivul la loc: „lo guardo” = „guardo il gatto”, adică „mă uit la pisică”).</li>
<li>Rămân <b>cuvintele invariabile</b>: leagă cuvinte (prepoziție), unesc propoziții (conjuncție), modifică un verb sau un adjectiv (adverb), exprimă emoții (interjecție).</li>
<li>Pentru fiecare cuvânt variabil scrie <b>genul și numărul</b>; pentru verb: <b>conjugarea, modul, timpul, persoana</b>.</li>
</ol>`
    },
    {
      type: "example",
      title: "Exemplu rezolvat: «La nonna prepara spesso una torta buonissima.»",
      html: `<p><i>(Bunica pregătește adesea un tort foarte bun.)</i></p>
<table>
<tr><th>Cuvântul</th><th>Analiza</th></tr>
<tr><td><b>La</b></td><td>articol hotărât, feminin singular</td></tr>
<tr><td><b>nonna</b></td><td>substantiv comun de persoană, concret, feminin singular</td></tr>
<tr><td><b>prepara</b></td><td>verbul <i>preparare</i>, conjugarea I, modul indicativ, timpul prezent, persoana a III-a singular</td></tr>
<tr><td><b>spesso</b></td><td>adverb de timp (frecvență)</td></tr>
<tr><td><b>una</b></td><td>articol nehotărât, feminin singular</td></tr>
<tr><td><b>torta</b></td><td>substantiv comun de lucru, concret, feminin singular</td></tr>
<tr><td><b>buonissima</b></td><td>adjectiv calificativ, grad superlativ absolut, feminin singular</td></tr>
</table>`
    },
    {
      type: "quiz",
      title: "Mini-test: recunoaște părțile",
      questions: [
        { type: "mc", q: "În propoziția «Noi giochiamo in cortile», «noi» este…", options: ["un substantiv", "un pronume", "un articol"], answer: 1, explain: "«Noi» stă în locul numelor persoanelor care vorbesc: este pronume personal subiect." },
        { type: "mc", q: "Care dintre aceste cuvinte este o prepoziție articulată?", options: ["con", "nella", "ma"], answer: 1, explain: "«Nella» = in + la: prepoziție simplă + articol." },
        { type: "tf", q: "Adverbul este o parte variabilă de vorbire.", answer: false, explain: "Adverbul nu își schimbă niciodată forma: este invariabil (velocemente, ieri, qui)." },
        { type: "mc", q: "Câte părți de vorbire sunt în italiană?", options: ["7", "9", "12"], answer: 1, explain: "Sunt nouă: 5 variabile și 4 invariabile." }
      ]
    },
    {
      type: "widget",
      title: "Joc: variabil sau invariabil?",
      widget: "classify",
      options: {
        groups: ["Parte variabilă", "Parte invariabilă"],
        items: [["🐱 gatto (substantiv)", 0], ["🔵 bello (adjectiv)", 0], ["🏃 corrono (verb)", 0], ["👉 la (articol)", 0], ["🙋 noi (pronume)", 0], ["⚡ velocemente (adverb)", 1], ["🔗 con (prepoziție)", 1], ["➕ perché (conjuncție)", 1], ["😮 oh! (interjecție)", 1], ["📅 ieri (adverb)", 1]]
      },
      caption: "Trage fiecare cuvânt în grupul potrivit. Părțile variabile își schimbă forma (gatto → gatti), cele invariabile niciodată."
    },
    {
      type: "text",
      title: "Atenție la cuvintele „cameleon”",
      html: `<p>Unele cuvinte își schimbă partea de vorbire în funcție de <b>felul</b> în care sunt folosite în propoziție. De aceea trebuie să te uiți mereu la propoziția întreagă!</p>
<ul>
<li><b>«La»</b>: în «<u>la</u> mela» este <b>articol</b>; în «<u>la</u> mangio» este <b>pronume</b> (ține locul lui „la mela”, adică „mărul”).</li>
<li><b>«Forte»</b>: în «un vento <u>forte</u>» este <b>adjectiv</b>; în «parla <u>forte</u>» este <b>adverb</b>.</li>
<li><b>«Questo»</b>: în «<u>questo</u> libro» este <b>adjectiv</b> demonstrativ; în «prendo <u>questo</u>» este <b>pronume</b>.</li>
<li><b>«Che»</b>: în «il libro <u>che</u> leggo» este <b>pronume</b> relativ (= il quale); în «so <u>che</u> verrai» este <b>conjuncție</b>.</li>
<li><b>«Bello»</b>: în «un <u>bello</u> spettacolo» este adjectiv; în «il <u>bello</u> della vita» este substantiv (adjectiv substantivizat).</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemplu rezolvat cu un verb compus",
      html: `<p>«<b>Ieri</b> Luca <b>è andato</b> al mare <b>con</b> i suoi cugini.» <i>(Ieri Luca a plecat la mare cu verii lui.)</i></p>
<ul>
<li><b>Ieri</b>: adverb de timp.</li>
<li><b>Luca</b>: substantiv propriu de persoană, masculin singular.</li>
<li><b>è andato</b>: verbul <i>andare</i>, conjugarea I, modul indicativ, timpul <b>passato prossimo</b> (trecutul compus), persoana a III-a singular (cele două cuvinte formează <b>un singur verb</b>: auxiliar + participiu).</li>
<li><b>al</b>: prepoziție articulată (a + il).</li>
<li><b>mare</b>: substantiv comun de lucru, masculin singular.</li>
<li><b>con</b>: prepoziție simplă.</li>
<li><b>i</b>: articol hotărât, masculin plural.</li>
<li><b>suoi</b>: adjectiv posesiv, masculin plural.</li>
<li><b>cugini</b>: substantiv comun de persoană, masculin plural.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Știai că…? O listă veche de 2000 de ani",
      html: `<p>Prima listă de părți de vorbire care a ajuns până la noi se află în <b>Tehnica gramaticală</b> atribuită grecului <b>Dionisie Tracul</b> (secolul al II-lea î.Hr.). Număra <b>opt</b>! Apoi gramaticienii latini, precum <b>Aelius Donatus</b> (secolul al IV-lea d.Hr.), au făcut o listă asemănătoare. Latina <b>nu avea articol</b>: acesta a apărut mai târziu, în italiană și în celelalte limbi romanice, din demonstrativul latin <i>ille</i> („acela”) → <i>il, la, lo</i>. La fel s-a întâmplat și în română: articolul hotărât <i>-ul, -a</i> vine tot de la <i>ille</i>!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Gramatică = litere",
      html: `<p>Cuvântul <b>gramatică</b> vine din greacă, <i>grámma</i>, care înseamnă „literă” (a alfabetului). Prima gramatică tipărită a limbii italiene, <b>Regole grammaticali della volgar lingua</b> de Giovanni Francesco Fortunio, a apărut în <b>1516</b>; câțiva ani mai târziu, în 1525, Pietro Bembo a publicat celebrele <i>Prose della volgar lingua</i>.</p>`
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>Părțile de vorbire sunt <b>9</b>: articol, substantiv, adjectiv, pronume, verb (<b>variabile</b>); adverb, prepoziție, conjuncție, interjecție (<b>invariabile</b>).</li>
<li>Același cuvânt poate fi părți de vorbire diferite: <b>uită-te mereu la propoziție</b>.</li>
<li>Verbul compus (de ex. <i>ho mangiato</i>) se analizează ca <b>un singur</b> cuvânt.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege părțile de vorbire",
      intro: "Dacă definițiile te încurcă, încearcă una dintre aceste metode: simbolurile Mariei Montessori, echipa de fotbal, testele „magice” și comparația cu engleza.",
      tabs: [
        {
          label: "🔺 Simbolurile Montessori",
          html: `<p>Pedagoga italiană <b>Maria Montessori</b> a inventat un simbol pentru fiecare parte de vorbire, ca să „vadă” copiii gramatica. Se desenează deasupra fiecărui cuvânt:</p>
<ul>
<li>⚫ <b>Substantivul</b>: triunghi mare negru (solid și stabil ca o piramidă: lucrurile există).</li>
<li>🔹 <b>Articolul</b>: triunghi mic albastru deschis; <b>adjectivul</b>: triunghi albastru mijlociu (sunt „rude” cu substantivul).</li>
<li>🔴 <b>Verbul</b>: cerc mare roșu (o minge care se rostogolește: energie, acțiune); <b>adverbul</b>: cerc mic portocaliu.</li>
<li>🟣 <b>Pronumele</b>: triunghi mov înalt și îngust.</li>
<li>🟢 <b>Prepoziția</b>: semilună verde (o „punte”); 🩷 <b>conjuncția</b>: dreptunghi mic roz (o „liniuță” care unește); 🔑 <b>interjecția</b>: gaură de cheie aurie.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fffbeb"/>
<polygon points="70,40 30,110 110,110" fill="#111827"/><text x="70" y="140" font-size="16" text-anchor="middle">substantiv</text>
<polygon points="170,80 150,110 190,110" fill="#7dd3fc"/><text x="170" y="140" font-size="16" text-anchor="middle">articol</text>
<polygon points="260,60 230,110 290,110" fill="#2563eb"/><text x="260" y="140" font-size="16" text-anchor="middle">adjectiv</text>
<polygon points="350,30 330,110 370,110" fill="#7c3aed"/><text x="350" y="140" font-size="16" text-anchor="middle">pronume</text>
<circle cx="450" cy="75" r="38" fill="#dc2626"/><text x="450" y="140" font-size="16" text-anchor="middle">verb</text>
<circle cx="545" cy="90" r="20" fill="#f97316"/><text x="545" y="140" font-size="16" text-anchor="middle">adverb</text>
<path d="M80,230 A50,50 0 0,1 180,230 A40,32 0 0,0 80,230 Z" fill="#16a34a"/><text x="130" y="252" font-size="16" text-anchor="middle">prepoziție</text>
<rect x="250" y="200" width="100" height="22" fill="#f472b6"/><text x="300" y="252" font-size="16" text-anchor="middle">conjuncție</text>
<circle cx="460" cy="195" r="16" fill="#eab308"/><polygon points="452,205 468,205 474,235 446,235" fill="#eab308"/><text x="460" y="252" font-size="16" text-anchor="middle">interjecție</text>
</svg>`
        },
        {
          label: "⚽ Echipa de fotbal",
          html: `<p>Imaginează-ți propoziția ca pe o <b>echipă</b>:</p>
<ul>
<li><b>verbul</b> este <b>atacantul</b>: face acțiunea, fără el nu există gol (nu există propoziție!);</li>
<li><b>substantivul</b> este <b>jucătorul</b> de pe teren; <b>articolul</b> este <b>numărul de pe tricou</b> care îi stă mereu lipit; <b>adjectivul</b> este <b>culoarea tricoului</b> care îl descrie;</li>
<li><b>pronumele</b> este <b>rezerva</b> care intră <b>în locul</b> jucătorului;</li>
<li><b>adverbul</b> este <b>antrenorul</b> care îi spune atacantului <i>cum</i>, <i>când</i>, <i>unde</i> să joace;</li>
<li><b>prepozițiile</b> și <b>conjuncțiile</b> sunt <b>paselele</b> care leagă jucătorii;</li>
<li><b>interjecția</b> este <b>galeria</b> din tribune: «Oh! Evviva!»</li>
</ul>`
        },
        {
          label: "🧪 Testele magice",
          html: `<p>Nu știi ce parte de vorbire este? Fă o <b>probă</b>:</p>
<ul>
<li><b>Testul pluralului</b>: dacă pun propoziția la plural, se schimbă cuvântul? Dacă <b>da</b> → este variabil (substantiv, articol, adjectiv, pronume, verb). Dacă <b>nu</b> → este invariabil. «Il bambino corre <u>veloce</u>» → «I bambini corrono <u>veloce</u>»: <i>veloce</i> nu se schimbă, aici este adverb!</li>
<li><b>Testul articolului</b>: pot pune în fața lui <i>il/la/un</i>? Atunci este probabil un <b>substantiv</b>.</li>
<li><b>Testul lui „foarte”</b>: pot spune <i>molto ___</i> sau <i>___issimo</i>? Atunci este un <b>adjectiv</b> (sau un adverb).</li>
<li><b>Testul persoanelor</b>: pot spune <i>io ___, tu ___, lui ___</i>? Atunci este un <b>verb</b>.</li>
<li><b>Testul înlocuirii</b>: pot pune în locul lui un substantiv? Atunci este un <b>pronume</b>.</li>
</ul>`
        },
        {
          label: "🇬🇧 Ca în engleză",
          html: `<p>Și englezii fac analiza gramaticală: o numesc <b>parts of speech</b>. De obicei numără <b>8</b> (noun, pronoun, verb, adjective, adverb, preposition, conjunction, interjection) și așază articolul (<i>the, a</i>) printre adjective sau printre „determiners”.</p>
<table>
<tr><th>Română</th><th>Engleză</th><th>Exemplu</th></tr>
<tr><td>substantiv</td><td>noun</td><td>cat / pisică</td></tr>
<tr><td>verb</td><td>verb</td><td>run / a alerga</td></tr>
<tr><td>adjectiv</td><td>adjective</td><td>big / mare</td></tr>
<tr><td>adverb</td><td>adverb</td><td>quickly / repede</td></tr>
</table>
<p>Truc: așa cum în italiană multe adverbe se termină în <b>-mente</b>, în engleză multe se termină în <b>-ly</b>!</p>`,
          widget: "match",
          options: { pairs: [["noun", "substantiv"], ["verb", "verb"], ["adjective", "adjectiv"], ["adverb", "adverb"], ["pronoun", "pronume"], ["conjunction", "conjuncție"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta părților de vorbire",
      nodes: [
        { id: "frase", label: "Propoziția", x: 50, y: 6, color: "#0f172a", html: "Un grup de cuvinte care are un sens deplin.", why: "Analiza gramaticală desface propoziția în „cărămizile” ei ca să înțelegem cum este construită limba." },
        { id: "parti", label: "9 părți de vorbire", x: 50, y: 26, color: "#2563eb", html: "Categoriile în care se împart toate cuvintele: 5 variabile și 4 invariabile.", why: "Numele vine din latinescul <i>partes orationis</i>. Prima clasificare cunoscută este greacă (Dionisie Tracul, secolul al II-lea î.Hr., cu 8 părți); gramaticienii latini au adaptat-o, iar cea italiană a adăugat articolul, pe care latina nu-l avea." },
        { id: "variabili", label: "Părți variabile", x: 22, y: 48, color: "#16a34a", html: "Articol, substantiv, adjectiv, pronume, verb: își schimbă forma.", why: "Italiana „marchează” genul, numărul și persoana cu terminații (partea finală a cuvântului): <i>gatt-o, gatt-a, gatt-i</i>. Este o moștenire din latină, care avea și mai multe terminații." },
        { id: "invariabili", label: "Părți invariabile", x: 78, y: 48, color: "#f97316", html: "Adverb, prepoziție, conjuncție, interjecție: nu se schimbă niciodată.", why: "Servesc la legat sau la precizat, nu la a arăta cine sau câți: de aceea nu au nevoie de terminații." },
        { id: "nome", label: "Substantiv", x: 8, y: 72, color: "#111827", html: "Arată persoane, animale, lucruri, idei. Comun/propriu, concret/abstract, colectiv.", why: "Este partea cea mai veche și mai importantă: în toate limbile lumii există substantive și verbe. Celelalte elemente se „sprijină” pe substantiv." },
        { id: "articolo", label: "Articol și adjectiv", x: 30, y: 72, color: "#3b82f6", html: "Însoțesc substantivul și se acordă cu el în gen și număr.", why: "Articolul italian se naște din demonstrativul latin <i>ille, illa</i> („acela, aceea”): de atâta folosire în fața substantivelor s-a scurtat în <i>il, lo, la</i>." },
        { id: "pronome", label: "Pronume", x: 50, y: 72, color: "#7c3aed", html: "Stă în locul unui substantiv ca să nu-l repetăm.", why: "Din latinescul <i>pro nomine</i> = „în locul numelui”. Face limba mai rapidă: în loc să repeți „Marco” spui „lui”." },
        { id: "verbo", label: "Verb", x: 30, y: 92, color: "#dc2626", html: "Arată acțiuni, stări, feluri de a fi; are moduri, timpuri și persoane.", why: "Din latinescul <i>verbum</i> = „cuvânt”: pentru romani era „cuvântul” prin excelență, pentru că fără verb nu există propoziție." },
        { id: "collegano", label: "Prepoziții și conjuncții", x: 72, y: 72, color: "#ec4899", html: "Leagă cuvinte (prepoziții) și propoziții (conjuncții).", why: "Latina folosea „cazurile” (terminațiile) ca să arate relațiile dintre cuvinte; când italiana le-a pierdut, prepozițiile le-au luat locul: <i>rosa-e</i> → <i>della rosa</i>." },
        { id: "avverbio", label: "Adverb și interjecție", x: 92, y: 90, color: "#eab308", html: "Adverbul modifică verbul, adjectivul sau alt adverb; interjecția exprimă emoții.", why: "<i>Ad-verbium</i> = „lângă verb”. Adverbele în <i>-mente</i> vin din latinescul <i>mens</i> (minte): <i>lenta mente</i> = „cu minte înceată” → <i>lentamente</i>." }
      ],
      edges: [
        ["frase", "parti", "se descompune în"],
        ["parti", "variabili", "5"],
        ["parti", "invariabili", "4"],
        ["variabili", "nome", ""],
        ["variabili", "articolo", ""],
        ["variabili", "pronome", ""],
        ["variabili", "verbo", ""],
        ["invariabili", "collegano", ""],
        ["invariabili", "avverbio", ""],
        ["pronome", "nome", "înlocuiește"],
        ["articolo", "nome", "însoțește"],
        ["avverbio", "verbo", "modifică"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: cuvinte cameleon",
      questions: [
        { type: "mc", q: "În «Quel libro? Lo leggo stasera», «lo» este…", options: ["articol", "pronume", "prepoziție"], answer: 1, explain: "Stă în locul lui «il libro»: este pronume personal complement." },
        { type: "mc", q: "În «Marta corre forte», «forte» este…", options: ["adjectiv", "adverb", "substantiv"], answer: 1, explain: "Modifică verbul «corre» (aleargă cum? tare) și nu se schimbă la plural: adverb." },
        { type: "tf", q: "În «ho mangiato» sunt două verbe diferite de analizat separat.", answer: false, explain: "Este un singur verb la passato prossimo: auxiliarul și participiul se analizează împreună." }
      ]
    }
  ],
  glossary: [
    { t: "Analiza gramaticală", d: "A recunoaște partea de vorbire a fiecărui cuvânt și caracteristicile lui." },
    { t: "Parte de vorbire", d: "Categorie gramaticală a unui cuvânt (substantiv, verb, adjectiv…)." },
    { t: "Parte variabilă", d: "Cuvânt care își schimbă forma: articol, substantiv, adjectiv, pronume, verb." },
    { t: "Parte invariabilă", d: "Cuvânt care nu își schimbă niciodată forma: adverb, prepoziție, conjuncție, interjecție." },
    { t: "Prepoziție articulată", d: "Prepoziție simplă unită cu un articol: del, nella, sugli…" },
    { t: "Terminație (desinență)", d: "Partea finală a cuvântului care se schimbă pentru a arăta genul, numărul, persoana, timpul." },
    { t: "Acord", d: "Articolul și adjectivul primesc același gen și număr ca substantivul." },
    { t: "Verb compus", d: "Timp format din auxiliar (essere/avere) + participiu trecut: ho visto, sono andato." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care grup conține doar părți invariabile?", options: ["substantiv, verb, adverb", "adverb, prepoziție, conjuncție", "articol, pronume, interjecție"], answer: 1, explain: "Cele invariabile sunt adverbul, prepoziția, conjuncția și interjecția." },
      { type: "num", q: "Câte sunt părțile de vorbire VARIABILE?", answer: 5, explain: "Articol, substantiv, adjectiv, pronume, verb." },
      { type: "mc", q: "În «Gli alunni studiano», «gli» este…", options: ["pronume", "articol hotărât", "prepoziție"], answer: 1, explain: "Stă în fața substantivului «alunni»: articol hotărât masculin plural." },
      { type: "mc", q: "«Dalle» (în «dalle otto») este…", options: ["o prepoziție articulată", "un verb", "o conjuncție"], answer: 0, explain: "Da + le = prepoziție articulată." },
      { type: "tf", q: "«Felicità» (fericirea) este un substantiv abstract.", answer: true, explain: "Arată un sentiment care nu se poate atinge: substantiv abstract." },
      { type: "tf", q: "În «Oggi piove», «oggi» este un substantiv.", answer: false, explain: "Arată când se petrece acțiunea și nu își schimbă forma: este un adverb de timp." },
      { type: "text", q: "Cum se numește partea de vorbire care stă ÎN LOCUL substantivului?", answer: ["pronume", "pronumele", "pronome", "il pronome"], explain: "Pro-nume: în locul numelui." },
      { type: "mc", q: "În «Ahi! Mi sono punto», «Ahi!» este…", options: ["interjecție", "adverb", "verb"], answer: 0, explain: "Exprimă o emoție (durere): interjecție." },
      { type: "mc", q: "În «Vado a scuola ma non ho voglia», «ma» este…", options: ["prepoziție", "conjuncție", "adverb"], answer: 1, explain: "Unește două propoziții exprimând o opoziție: conjuncție adversativă." },
      { type: "mc", q: "«Cantavamo» este: verbul cantare, conjugarea I, indicativ…", options: ["prezent, persoana I plural", "imperfect, persoana I plural", "perfect simplu, persoana a III-a plural"], answer: 1, explain: "-avamo este terminația imperfectului, persoana I plural (noi)." },
      { type: "order", q: "Pune în ordine cuvintele analizei lui «Il cane abbaia forte»: articol, substantiv, verb, adverb.", items: ["Il = articol", "cane = substantiv", "abbaia = verb", "forte = adverb"], explain: "Il (articol) cane (substantiv) abbaia (verb) forte (adverb: modifică verbul)." },
      { type: "mc", q: "În «Questa è mia», «questa» este…", options: ["adjectiv demonstrativ", "pronume demonstrativ", "articol"], answer: 1, explain: "Nu însoțește un substantiv, ci îl înlocuiește: pronume demonstrativ." }
    ]
  }
});
