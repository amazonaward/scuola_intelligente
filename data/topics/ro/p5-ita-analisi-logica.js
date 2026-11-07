TOPIC('ro', {
  id: "p5-ita-analisi-logica",
  title: "Analiza logică",
  intro: "În analiza gramaticală ne uitam ce <b>fel</b> de cuvânt este. În <b>analiza logică</b> ne uităm ce <b>rol</b> are în propoziție: cine face acțiunea? ce se întâmplă? cui, unde, când, cu cine? Să descoperim <b>subiectul</b>, <b>predicatul</b> și <b>complementele</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Ce este analiza logică",
      html: `<p>O <b>propoziție simplă</b> (frase semplice / proposizione) este un grup de cuvinte cu <b>un singur verb</b> care are sens deplin.</p>
<p>A face <b>analiza logică</b> înseamnă a împărți propoziția în <b>grupuri de cuvinte</b> (sintagme) și a spune ce <b>funcție</b> are fiecare grup:</p>
<ul>
<li><b>predicatul</b> (<i>predicato</i>): spune ce se afirmă (acțiunea sau starea);</li>
<li><b>subiectul</b> (<i>soggetto</i>): despre cine sau despre ce se vorbește;</li>
<li><b>complementele</b> (<i>complementi</i>): completează sensul (ce? cui? unde? când? cu cine?…).</li>
</ul>
<p>Exemplu: «<b>Il gatto</b> | <b>mangia</b> | <b>il pesce</b> | <b>in cucina</b>.» (Pisica mănâncă peștele în bucătărie.) → subiect | predicat | complement direct (<i>complemento oggetto</i>) | complement de loc.</p>`
    },
    {
      type: "text",
      title: "Predicatul: motorul propoziției",
      html: `<p>Se pornește <b>întotdeauna de la verb</b>. Predicatul poate fi de două feluri:</p>
<ul>
<li><b>Predicat verbal</b>: un verb care are sens de la sine. «Luca <u>corre</u>», «La mamma <u>ha cucinato</u>».</li>
<li><b>Predicat nominal</b>: verbul <b>essere</b> („a fi”; aici se numește <b>copulă</b>, adică „legătură”) + un substantiv sau un adjectiv (<b>parte nominală</b>). «Luca <u>è stanco</u>», «Il delfino <u>è un mammifero</u>».</li>
</ul>
<p>Atenție: dacă <i>essere</i> înseamnă „a se afla”, „a exista”, atunci este predicat verbal: «Il libro <u>è</u> sul tavolo» (= se află).</p>`
    },
    {
      type: "text",
      title: "Subiectul: cine face (sau cine este)",
      html: `<p><b>Subiectul</b> este persoana, animalul sau lucrul despre care se vorbește. Îl găsești întrebând verbul: <b>«Cine? Ce?»</b> + verbul.</p>
<p>«Domani <u>i nonni</u> arrivano» → cine sosește? <b>i nonni</b> (bunicii).</p>
<ul>
<li>Subiectul <b>nu este mereu la început</b>: «Arriva <u>il treno</u>».</li>
<li>Poate fi <b>subînțeles</b>: «Mangiamo la pizza» → subiect subînțeles <b>noi</b> (îl înțelegem din terminația <i>-iamo</i>).</li>
<li>Subiectul <b>nu are niciodată prepoziție</b> în față.</li>
<li>Verbul se <b>acordă</b> cu subiectul: <i>il bambino gioca / i bambini giocano</i>.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Propoziția ca un sistem solar (modelul valențial)",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#f0f9ff"/>
<ellipse cx="320" cy="160" rx="210" ry="120" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="8 6"/>
<ellipse cx="320" cy="160" rx="120" ry="66" fill="#fef3c7" stroke="#f59e0b" stroke-width="3"/>
<circle cx="320" cy="160" r="40" fill="#dc2626"/>
<text x="320" y="166" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">regala</text>
<rect x="190" y="140" width="80" height="34" rx="8" fill="#2563eb"/><text x="230" y="163" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">la nonna</text>
<rect x="352" y="104" width="86" height="34" rx="8" fill="#16a34a"/><text x="395" y="127" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">un libro</text>
<rect x="360" y="182" width="86" height="34" rx="8" fill="#9333ea"/><text x="403" y="205" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">a Sara</text>
<rect x="70" y="40" width="130" height="34" rx="8" fill="#64748b"/><text x="135" y="63" font-size="15" text-anchor="middle" fill="#ffffff">per Natale</text>
<rect x="450" y="250" width="150" height="34" rx="8" fill="#64748b"/><text x="525" y="273" font-size="15" text-anchor="middle" fill="#ffffff">con un sorriso</text>
<text x="320" y="24" font-size="17" text-anchor="middle" fill="#1f2937" font-weight="bold">La nonna regala un libro a Sara per Natale con un sorriso.</text>
<text x="20" y="300" font-size="14" fill="#b91c1c">● verb (predicat)</text>
<text x="170" y="300" font-size="14" fill="#b45309">galben = nucleu: verb + argumente</text>
<text x="430" y="300" font-size="14" fill="#475569">gri = extinderi</text>
</svg>`,
      caption: "«Regalare» (a dărui) are nevoie de 3 elemente (cine dăruiește, ce, cui): este un verb trivalent. «Per Natale» și «con un sorriso» se pot scoate: sunt extinderi."
    },
    {
      type: "text",
      title: "Complementele: întrebările potrivite",
      html: `<p><b>Complementele</b> „completează” sensul propoziției. Fiecare răspunde la o <b>întrebare</b>.</p>
<table>
<tr><th>Complementul</th><th>Întrebarea</th><th>Exemplu</th></tr>
<tr><td><b>Direct</b> (<i>oggetto</i>)</td><td>pe cine? ce? (fără prepoziție)</td><td>Leggo <u>un fumetto</u>.</td></tr>
<tr><td><b>De specificare</b> (<i>specificazione</i>)</td><td>al cui? despre ce / al cui anume?</td><td>Il cane <u>di Marco</u>.</td></tr>
<tr><td><b>De termen</b> (<i>termine</i>, indirect)</td><td>cui?</td><td>Scrivo <u>alla zia</u>.</td></tr>
<tr><td><b>De loc</b> (<i>luogo</i>)</td><td>unde? încotro? de unde? pe unde?</td><td>Vado <u>a Roma</u>. Esco <u>da casa</u>.</td></tr>
<tr><td><b>De timp</b> (<i>tempo</i>)</td><td>când? cât timp?</td><td>Parto <u>a luglio</u>. Ho dormito <u>per due ore</u>.</td></tr>
<tr><td><b>De mijloc</b> (<i>mezzo</i>)</td><td>cu ajutorul cui / a ce?</td><td>Viaggio <u>in treno</u>.</td></tr>
<tr><td><b>De companie</b> (<i>compagnia / unione</i>)</td><td>cu cine? cu ce?</td><td>Gioco <u>con Anna</u>.</td></tr>
<tr><td><b>De mod</b> (<i>modo</i>)</td><td>cum? în ce fel?</td><td>Parla <u>a bassa voce</u>.</td></tr>
<tr><td><b>De cauză</b> (<i>causa</i>)</td><td>de ce? din ce cauză?</td><td>Trema <u>per il freddo</u>.</td></tr>
<tr><td><b>De scop</b> (<i>fine</i>)</td><td>în ce scop?</td><td>Studio <u>per l'esame</u>.</td></tr>
<tr><td><b>De agent</b> (<i>agente</i>)</td><td>de către cine? (cu verb pasiv)</td><td>Il gol è segnato <u>dal capitano</u>.</td></tr>
</table>
<p><b>Complementul direct</b> este singurul complement <b>direct</b>: nu are prepoziție. Toate celelalte se numesc <b>indirecte</b> pentru că, de obicei, sunt introduse de o prepoziție.</p>`
    },
    {
      type: "text",
      title: "Atributul și apoziția",
      html: `<ul>
<li><b>Atributul</b> (<i>attributo</i>): un <b>adjectiv</b> care se referă la un substantiv din propoziție și îl descrie. «Il cane <u>nero</u> abbaia» → <i>nero</i> este atribut al subiectului.</li>
<li><b>Apoziția</b> (<i>apposizione</i>): un <b>substantiv</b> pus lângă alt substantiv ca să-l explice mai bine. «<u>Il dottor</u> Rossi», «Roma, <u>la capitale d'Italia</u>, …».</li>
</ul>
<p>Atributul și apoziția nu sunt complemente de sine stătătoare: „urmează” substantivul la care se referă.</p>`
    },
    {
      type: "example",
      title: "Exemplu rezolvat pas cu pas",
      html: `<p>«<b>Ieri la maestra ha letto una fiaba ai bambini con voce allegra.</b>» <i>(Ieri învățătoarea a citit un basm copiilor cu voce veselă.)</i></p>
<ol>
<li><b>Găsesc verbul</b>: <i>ha letto</i> → <b>predicat verbal</b>.</li>
<li><b>Cine a citit?</b> <i>la maestra</i> → <b>subiect</b>.</li>
<li><b>Ce a citit?</b> <i>una fiaba</i> → <b>complement direct</b>.</li>
<li><b>Cui?</b> <i>ai bambini</i> → <b>complement de termen</b>.</li>
<li><b>Cum?</b> <i>con voce</i> → <b>complement de mod</b>; <i>allegra</i> → <b>atribut</b> al lui „voce”.</li>
<li><b>Când?</b> <i>ieri</i> → <b>complement de timp</b> (determinat).</li>
</ol>`
    },
    {
      type: "quiz",
      title: "Mini-test: subiect și predicat",
      questions: [
        { type: "mc", q: "În «Sul ramo canta un merlo», subiectul este…", options: ["sul ramo", "canta", "un merlo"], answer: 2, explain: "Cine cântă? Un merlo (o mierlă). Subiectul poate sta și după verb." },
        { type: "mc", q: "«Il mare è calmo» are un predicat…", options: ["verbal", "nominal", "nu are predicat"], answer: 1, explain: "Essere + adjectiv (calmo): predicat nominal." },
        { type: "tf", q: "În «Andiamo al parco» subiectul este subînțeles.", answer: true, explain: "Subiectul «noi» nu este scris, dar se înțelege din terminația -iamo." }
      ]
    },
    {
      type: "widget",
      title: "Joc: potrivește întrebarea cu complementul",
      widget: "match",
      options: { pairs: [["cine? ce? (fără prepoziție)", "complemento oggetto (direct)"], ["al cui? despre ce?", "complemento di specificazione"], ["cui?", "complemento di termine"], ["unde?", "complemento di luogo"], ["când?", "complemento di tempo"], ["cu cine?", "complemento di compagnia"], ["de ce? din ce cauză?", "complemento di causa"]] },
      caption: "Fiecare complement răspunde la o întrebare: potrivește-le pe toate."
    },
    {
      type: "example",
      title: "Exemplu: aceeași prepoziție, complemente diferite",
      html: `<p>Prepoziția singură nu este de ajuns: trebuie să înțelegi <b>sensul</b>!</p>
<ul>
<li>«Il quaderno <u>di Paolo</u>» → al cui? <b>specificare</b>.</li>
<li>«Esco <u>di casa</u>» → de unde? <b>mișcare dinspre un loc</b>.</li>
<li>«Muoio <u>di fame</u>» → din ce cauză? <b>cauză</b>.</li>
<li>«Un anello <u>d'oro</u>» → din ce material? <b>materie</b>.</li>
<li>«Vado <u>con Paolo</u>» → <b>companie</b>; «Taglio <u>con le forbici</u>» → <b>mijloc</b>; «Ascolta <u>con attenzione</u>» → <b>mod</b>.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Latina avea „cazuri”",
      html: `<p>În latină nu era nevoie de multe prepoziții: rolul cuvântului se înțelegea din <b>terminația</b> lui, numită <b>caz</b>. <i>Rosa</i> (subiect, nominativ), <i>rosae</i> (al trandafirului, genitiv), <i>rosae</i> (trandafirului, dativ), <i>rosam</i> (trandafirul, complement direct, acuzativ)… De aceea, în latină ordinea cuvintelor era foarte liberă! Analiza logică pe care o înveți la școală derivă chiar din studiul latinei. Și româna a păstrat o parte din cazuri!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Verbe ca niște atomi",
      html: `<p>Lingvistul francez <b>Lucien Tesnière</b> (cartea a apărut în 1959) a avut o idee luată din chimie: așa cum un atom se leagă de alți atomi, un verb are o <b>valență</b>, adică un număr de „locuri” de umplut. <i>Piovere</i> (a ploua) are valența 0 (plouă și gata!), <i>dormire</i> (a dormi) 1 (cine?), <i>mangiare</i> (a mânca) 2 (cine? ce?), <i>regalare</i> (a dărui) 3 (cine? ce? cui?). În Italia acest model a fost răspândit în școli mai ales de lingvistul <b>Francesco Sabatini</b>.</p>`
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>Pornește <b>întotdeauna de la verb</b>: găsește predicatul (verbal sau nominal).</li>
<li>Apoi <b>subiectul</b>: «cine/ce + verbul?». Nu are niciodată prepoziție și poate fi subînțeles.</li>
<li>Apoi <b>complementele</b>, punând <b>întrebarea</b> potrivită. Complementul direct nu are prepoziție.</li>
<li>Adjectivele sunt <b>atribute</b>, substantivele care explică alte substantive sunt <b>apoziții</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege analiza logică",
      intro: "Analiza logică poate fi privită ca un tren, ca un interogatoriu de detectiv, ca latina sau prin culorile limbilor străine. Alege-o pe a ta!",
      tabs: [
        {
          label: "🚂 Trenul propoziției",
          html: `<p>Propoziția este un <b>tren</b>: <b>predicatul</b> este <b>locomotiva</b> (fără ea, trenul nu pornește). <b>Subiectul</b> este <b>mecanicul</b>. <b>Complementele</b> sunt <b>vagoanele</b>: unele sunt indispensabile (complementul direct al lui <i>mangiare</i>: „mănânc…” ce?), altele se pot desprinde (unde, când, cu cine), iar trenul merge oricum.</p>`,
          svg: `<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="220" fill="#ecfeff"/>
<line x1="10" y1="170" x2="630" y2="170" stroke="#475569" stroke-width="4"/>
<rect x="20" y="80" width="140" height="80" rx="10" fill="#dc2626"/><rect x="120" y="50" width="40" height="40" fill="#991b1b"/>
<text x="80" y="128" font-size="18" fill="#ffffff" text-anchor="middle" font-weight="bold">mangia</text>
<rect x="170" y="90" width="130" height="70" rx="8" fill="#2563eb"/><text x="235" y="130" font-size="16" fill="#ffffff" text-anchor="middle">il gatto</text>
<rect x="310" y="90" width="130" height="70" rx="8" fill="#16a34a"/><text x="375" y="130" font-size="16" fill="#ffffff" text-anchor="middle">il pesce</text>
<rect x="470" y="90" width="150" height="70" rx="8" fill="#94a3b8"/><text x="545" y="130" font-size="16" fill="#ffffff" text-anchor="middle">in cucina</text>
<g fill="#1f2937"><circle cx="50" cy="168" r="12"/><circle cx="130" cy="168" r="12"/><circle cx="200" cy="168" r="10"/><circle cx="270" cy="168" r="10"/><circle cx="340" cy="168" r="10"/><circle cx="410" cy="168" r="10"/><circle cx="500" cy="168" r="10"/><circle cx="590" cy="168" r="10"/></g>
<text x="80" y="205" font-size="14" text-anchor="middle">predicat</text>
<text x="235" y="205" font-size="14" text-anchor="middle">subiect</text>
<text x="375" y="205" font-size="14" text-anchor="middle">compl. direct</text>
<text x="545" y="205" font-size="14" text-anchor="middle">vagon detașabil</text>
<text x="455" y="122" font-size="22" text-anchor="middle" fill="#64748b">✂</text>
</svg>`
        },
        {
          label: "🕵️ Detectivul",
          html: `<p>Fă <b>interogatoriul</b> verbului, ca un detectiv!</p>
<ol>
<li>«Ce s-a întâmplat?» → găsești <b>predicatul</b>.</li>
<li>«Cine a fost?» → <b>subiectul</b>.</li>
<li>«Ce a luat / a făcut?» → <b>complementul direct</b>.</li>
<li>«Unde? Când? Cu cine? Cum? De ce?» → <b>complementele indirecte</b>.</li>
</ol>
<p>«Il ladro ha rubato la collana nel museo di notte con un complice.» (Hoțul a furat colierul în muzeu, noaptea, cu un complice.) Cine? <i>il ladro</i>. Ce? <i>la collana</i>. Unde? <i>nel museo</i>. Când? <i>di notte</i>. Cu cine? <i>con un complice</i>. Caz rezolvat! 🔍</p>`
        },
        {
          label: "🏛️ Ca în latină",
          html: `<p>Iată cum se spunea în latină «trandafirul» în diferitele roluri. Vezi că fiecare rol are propria <b>terminație</b>, în locul prepoziției noastre:</p>
<table>
<tr><th>Cazul</th><th>Rolul în analiza logică</th><th>Latina</th><th>Română</th></tr>
<tr><td>Nominativ</td><td>subiect</td><td>ros<b>a</b></td><td>trandafirul</td></tr>
<tr><td>Genitiv</td><td>specificare</td><td>ros<b>ae</b></td><td>al trandafirului</td></tr>
<tr><td>Dativ</td><td>termen</td><td>ros<b>ae</b></td><td>trandafirului</td></tr>
<tr><td>Acuzativ</td><td>complement direct</td><td>ros<b>am</b></td><td>trandafirul</td></tr>
<tr><td>Ablativ</td><td>mijloc, cauză, loc…</td><td>ros<b>a</b> (lung)</td><td>cu trandafirul…</td></tr>
</table>
<p>Și <b>germana</b>, <b>rusa</b> și <b>româna</b> au încă cazurile!</p>`
        },
        {
          label: "🇬🇧 Ordinea cuvintelor",
          html: `<p>În engleză rolul se înțelege din <b>poziție</b>: aproape întotdeauna <b>S + V + O</b> (Subiect, Verb, Obiect).</p>
<p><i>The dog bites the man</i> (câinele mușcă omul) ≠ <i>The man bites the dog</i> (omul mușcă câinele)! E de ajuns să muți cuvintele și se schimbă totul.</p>
<p>În italiană putem spune și «Il pesce, il gatto lo mangia» și se înțelege la fel, dar regula de bază este aceeași: <b>subiect → verb → complemente</b>. Încearcă să rearanjezi propoziția în această ordine: analiza devine mai ușoară!</p>`,
          widget: "classify",
          options: { groups: ["Subiect", "Predicat", "Complement"], items: [["the dog / câinele", 0], ["bites / mușcă", 1], ["the man / omul", 2], ["Anna", 0], ["plays / se joacă", 1], ["in the park / în parc", 2]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta analizei logice",
      nodes: [
        { id: "frase", label: "Propoziție simplă", x: 50, y: 6, color: "#0f172a", html: "Grup de cuvinte cu un singur predicat și cu sens deplin.", why: "Cuvântul <i>logică</i> vine din greacă, <i>lógos</i> (vorbire, raționament): analiza logică studiază cum „raționează” propoziția, adică cine face ce." },
        { id: "predicato", label: "Predicat", x: 50, y: 28, color: "#dc2626", html: "Verbul: ceea ce se spune despre subiect. Verbal sau nominal.", why: "<i>Praedicare</i> în latină înseamnă „a declara, a afirma”: predicatul este ceea ce se afirmă. Se pornește de la el pentru că, după modelul valențial, verbul hotărăște câte alte elemente sunt necesare." },
        { id: "soggetto", label: "Subiect", x: 18, y: 28, color: "#2563eb", html: "Cine face acțiunea sau despre cine se vorbește. Fără prepoziție; poate fi subînțeles.", why: "<i>Subiectum</i> = „ceea ce stă dedesubt”: este ceea ce „stă la baza” discursului. Poate fi subînțeles pentru că în italiană terminația verbului arată deja persoana (în engleză, în schimb, subiectul trebuie scris întotdeauna)." },
        { id: "nominale", label: "Predicat nominal", x: 82, y: 28, color: "#f97316", html: "Essere (copulă) + substantiv sau adjectiv: «è stanco».", why: "<i>Copula</i> în latină înseamnă „legătură”: verbul essere nu arată aici o acțiune, ci leagă subiectul de o calitate a lui." },
        { id: "valenza", label: "Valența verbului", x: 50, y: 50, color: "#a855f7", html: "Numărul de elemente necesare verbului: piovere 0, dormire 1, mangiare 2, regalare 3.", why: "Idee a lui Lucien Tesnière (1959), împrumutată din chimie (valența atomilor). În Italia a adus-o în școli Francesco Sabatini; Indicațiile naționale o recomandă." },
        { id: "oggetto", label: "Complement direct", x: 22, y: 72, color: "#16a34a", html: "Răspunde la cine? ce? fără prepoziție.", why: "Se numește „direct” pentru că acțiunea trece direct de la verb la obiect, fără prepoziții. În latină era cazul acuzativ." },
        { id: "indiretti", label: "Complemente indirecte", x: 60, y: 72, color: "#64748b", html: "Specificare, termen, loc, timp, mijloc, mod, cauză, companie, scop, agent…", why: "În trecerea de la latină la italiană s-au pierdut cazurile: relațiile dintre cuvinte au fost încredințate prepozițiilor (di, a, da, in, con, su, per, tra, fra)." },
        { id: "domande", label: "Întrebările", x: 60, y: 92, color: "#0ea5e9", html: "Fiecare complement răspunde la o întrebare: unde? când? cu cine?…", why: "Aceeași prepoziție poate introduce complemente diferite (di Paolo, di casa, di fame): de aceea contează sensul, descoperit cu întrebarea potrivită." },
        { id: "attributo", label: "Atribut și apoziție", x: 88, y: 72, color: "#eab308", html: "Adjectiv (atribut) sau substantiv (apoziție) care se sprijină pe alt substantiv.", why: "Nu sunt complemente de sine stătătoare: „urmează” substantivul la care se referă și îi preiau funcția (atribut al subiectului, al obiectului…)." }
      ],
      edges: [
        ["frase", "predicato", "are mereu"],
        ["frase", "soggetto", "are (și subînțeles)"],
        ["predicato", "nominale", "poate fi"],
        ["predicato", "valenza", "are o"],
        ["valenza", "oggetto", "cere"],
        ["valenza", "indiretti", "cere sau admite"],
        ["indiretti", "domande", "se găsesc cu"],
        ["indiretti", "attributo", "pot avea"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: complementele",
      questions: [
        { type: "mc", q: "În «Telefono alla nonna», «alla nonna» este complement…", options: ["de specificare", "de termen", "direct"], answer: 1, explain: "Cui telefonez? Bunicii (alla nonna): complement de termen." },
        { type: "mc", q: "În «Vado a scuola in bicicletta», «in bicicletta» este complement…", options: ["de loc", "de mijloc", "de mod"], answer: 1, explain: "Cu ce merg? Cu bicicleta (in bicicletta): complement de mijloc." },
        { type: "tf", q: "Complementul direct este introdus de prepoziția «di».", answer: false, explain: "Complementul direct este direct: nu are prepoziție." }
      ]
    }
  ],
  glossary: [
    { t: "Analiza logică", d: "A recunoaște funcția fiecărui grup de cuvinte din propoziție." },
    { t: "Predicat verbal", d: "Verb cu sens propriu: corre, legge, ha mangiato." },
    { t: "Predicat nominal", d: "Verbul essere (copulă) + substantiv sau adjectiv: è felice, è un medico." },
    { t: "Subiect", d: "Cine face acțiunea sau despre cine/ce se vorbește." },
    { t: "Subiect subînțeles", d: "Subiect nescris, dar recognoscibil din terminația verbului." },
    { t: "Complement direct (oggetto)", d: "Complement direct, fără prepoziție: răspunde la cine? ce?" },
    { t: "Complemente indirecte", d: "Complemente introduse de obicei de o prepoziție (di, a, da, in, con…)." },
    { t: "Atribut", d: "Adjectiv care se referă la un substantiv din propoziție." },
    { t: "Apoziție", d: "Substantiv care însoțește alt substantiv pentru a-l preciza." },
    { t: "Valență", d: "Numărul de elemente de care are nevoie un verb pentru a forma o propoziție completă." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "De la ce se pornește pentru a face analiza logică?", options: ["de la subiect", "de la predicat (verb)", "de la primul complement"], answer: 1, explain: "Verbul este centrul propoziției: se pornește mereu de la predicat." },
      { type: "mc", q: "În «Domani partirà Giulia», subiectul este…", options: ["domani", "partirà", "Giulia"], answer: 2, explain: "Cine va pleca? Giulia." },
      { type: "mc", q: "«Le fragole sono dolci»: predicatul este…", options: ["verbal", "nominal", "nu există"], answer: 1, explain: "Sono (copulă) + dolci (parte nominală)." },
      { type: "tf", q: "În «Il gatto è in giardino», «è» formează un predicat verbal.", answer: true, explain: "Aici essere înseamnă «se află»: predicat verbal." },
      { type: "mc", q: "În «Ho comprato un regalo per Luca», «un regalo» este…", options: ["subiect", "complement direct", "complement de termen"], answer: 1, explain: "Ce am cumpărat? Un cadou: complement direct." },
      { type: "mc", q: "În «La bici di mio fratello è rossa», «di mio fratello» este complement…", options: ["de specificare", "de mișcare dinspre un loc", "de cauză"], answer: 0, explain: "A cui este bicicleta? A fratelui meu: specificare." },
      { type: "mc", q: "În «Tremava per la paura», «per la paura» este complement…", options: ["de scop", "de cauză", "de mijloc"], answer: 1, explain: "Din ce cauză tremura? Din cauza fricii." },
      { type: "text", q: "Cum se numește substantivul pus lângă alt substantiv ca să-l explice (de ex. «il fiume Po»)?", answer: ["apoziție", "apoziția", "apposizione", "l'apposizione"], explain: "«Fiume» îl precizează pe «Po»: este o apoziție." },
      { type: "tf", q: "Subiectul poate fi subînțeles.", answer: true, explain: "De ex. «Giochiamo» → subiect subînțeles noi." },
      { type: "num", q: "Câte argumente (valență) are verbul «regalare»? (cine dăruiește, ce, cui)", answer: 3, explain: "Regalare este trivalent: subiect, obiect, termen." },
      { type: "order", q: "Pune în ordine pașii analizei logice.", items: ["Găsesc predicatul", "Găsesc subiectul", "Găsesc complementul direct", "Găsesc complementele indirecte"], explain: "Mai întâi verbul, apoi subiectul, apoi complementele (întâi cel direct, apoi cele indirecte)." },
      { type: "mc", q: "În «Il pane è tagliato dal fornaio», «dal fornaio» este complement…", options: ["de agent", "de mișcare dinspre un loc", "de termen"], answer: 0, explain: "Cu verbul pasiv, cine face acțiunea este complementul de agent (de către cine?)." }
    ]
  }
});
