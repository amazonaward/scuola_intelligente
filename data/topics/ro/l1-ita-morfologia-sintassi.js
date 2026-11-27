TOPIC('ro', {
  id: "l1-ita-morfologia-sintassi",
  title: "Reflecție asupra limbii: morfologie și sintaxă",
  intro: "Vorbim italiana de când ne știm, dar <b>știm cum funcționează</b>? Gramatica este instrumentul cu care limba este „demontată” pentru a-i înțelege mecanismele, așa cum se deschide un ceas. În această lecție recapitulăm și aprofundăm <b>morfologia</b> (părțile de vorbire: ce fel de cuvinte avem) și <b>sintaxa</b> propoziției simple (<b>analiza logică</b>: ce funcție are fiecare cuvânt sau grup de cuvinte în propoziție). Exemplele sunt în italiană, cu traducerea în română între paranteze; categoriile sunt în mare parte comune cu cele din română.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Morfologie și sintaxă: două niveluri de analiză",
      html: `<p>Gramatica studiază cum este alcătuită limba și se împarte în niveluri:</p>
<ul>
<li><b>Fonetica și ortografia</b>: sunetele și modul în care se scriu.</li>
<li><b>Morfologia</b>: <b>forma cuvintelor</b> și clasificarea lor în <b>părți de vorbire</b>. Studiază cum se schimbă un cuvânt (gen, număr, persoană, timp...).</li>
<li><b>Sintaxa</b>: cum se combină cuvintele pentru a forma <b>propoziții</b> și <b>fraze</b>. Studiază ordinea și relațiile dintre ele.</li>
<li><b>Lexicul și semantica</b>: sensul cuvintelor.</li>
</ul>
<p>Exemplu: în propoziția <i>\"Il gatto dorme sul divano\"</i> („Pisica doarme pe canapea”), morfologia spune că <i>gatto</i> este un substantiv masculin singular, iar <i>dorme</i> un verb la persoana a treia singular, prezent; sintaxa spune că <i>il gatto</i> este subiectul, iar <i>sul divano</i> indică locul în care se petrece acțiunea.</p>`
    },
    {
      type: "text",
      title: "2. Cele nouă părți de vorbire",
      html: `<p>Cuvintele italiene se împart în <b>nouă categorii</b>. Cinci sunt <b>flexibile</b> (își schimbă forma) și patru <b>neflexibile</b>. (Gramatica română mai adaugă numeralul ca parte de vorbire separată; în italiană el este tratat ca adjectiv sau pronume.)</p>
<p><b>Flexibile</b></p>
<ul>
<li><b>Substantivul</b> (sau numele): denumește persoane, animale, lucruri, idei. Comun/propriu, concret/abstract, primitiv/derivat/alterat/compus, individual/colectiv.</li>
<li><b>Articolul</b>: precede substantivul și îi indică genul și numărul. <i>Hotărât</i> (il, lo, la, i, gli, le), <i>nehotărât</i> (un, uno, una), <i>partitiv</i> (del, dello, della...; în română nu există o formă corespunzătoare, se traduce de obicei cu „niște” sau cu nimic).</li>
<li><b>Adjectivul</b>: însoțește substantivul pentru a-l califica (<i>calificativ</i>: „o carte interesantă”) sau pentru a-l determina (<i>posesiv, demonstrativ, nehotărât, numeral, interogativ/exclamativ</i>).</li>
<li><b>Pronumele</b>: ține locul unui substantiv (<i>personal, posesiv, demonstrativ, nehotărât, relativ, interogativ</i>). „Marco a venit: <b>l-am</b> văzut.”</li>
<li><b>Verbul</b>: indică o acțiune, o stare sau un fel de a fi. Se conjugă după persoană, număr, timp, mod, diateză (activă, pasivă, reflexivă).</li>
</ul>
<p><b>Neflexibile</b></p>
<ul>
<li><b>Adverbul</b>: modifică un verb, un adjectiv sau alt adverb („aleargă <b>repede</b>”, „<b>foarte</b> frumos”).</li>
<li><b>Prepoziția</b>: leagă cuvinte și indică tipul de raport (<i>di, a, da, in, con, su, per, tra, fra</i>). Când se unește cu articolul devine <i>articulată</i> (del, nella, sul...).</li>
<li><b>Conjuncția</b>: unește cuvinte sau propoziții (<i>e, ma, perché, se, quando...</i>).</li>
<li><b>Interjecția</b>: exprimă o emoție bruscă (<i>ah!, uffa!, evviva!</i>).</li>
</ul>`
    },
    {
      type: "widget",
      title: "Flexibil sau neflexibil?",
      widget: "classify",
      options: { groups: ["Flexibile", "Neflexibile"], items: [["gatto (substantiv)", 0], ["veloce (adjectiv)", 0], ["rapidamente (adverb)", 1], ["con (prepoziție)", 1], ["mangiare (verb)", 0], ["ma (conjuncție)", 1], ["la (articol)", 0], ["evviva! (interjecție)", 1]] },
      caption: "Clasifică cuvintele după cum își schimbă sau nu forma."
    },
    {
      type: "example",
      title: "Analiza gramaticală a unei propoziții",
      html: `<p><i>\"Domani i miei amici arriveranno con un treno velocissimo.\"</i> („Mâine prietenii mei vor sosi cu un tren foarte rapid.”)</p>
<ul>
<li><b>Domani</b>: adverb (de timp).</li>
<li><b>i</b>: articol hotărât, masculin plural.</li>
<li><b>miei</b>: adjectiv posesiv, masculin plural.</li>
<li><b>amici</b>: substantiv comun, concret, masculin plural.</li>
<li><b>arriveranno</b>: verb intranzitiv, indicativ viitor simplu, persoana a 3-a plural.</li>
<li><b>con</b>: prepoziție simplă.</li>
<li><b>un</b>: articol nehotărât, masculin singular.</li>
<li><b>treno</b>: substantiv comun, concret, masculin singular.</li>
<li><b>velocissimo</b>: adjectiv calificativ, superlativ absolut, masculin singular.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: părțile de vorbire",
      questions: [
        { type: "mc", q: "În propoziția „Parla troppo piano” („Vorbește prea încet”), cuvântul „piano” este...", options: ["un substantiv", "un adverb", "un adjectiv"], answer: 1, explain: "Modifică verbul „parla”: este un adverb (de mod)." },
        { type: "mc", q: "Care cuvânt este o prepoziție articulată?", options: ["della", "dalla vita", "perché", "quello"], answer: 0, explain: "„della” = di + la. Celelalte sunt un grup de cuvinte, o conjuncție și un pronume/adjectiv." },
        { type: "tf", q: "Conjuncția este o parte de vorbire flexibilă.", answer: false, explain: "Conjuncțiile, adverbele, prepozițiile și interjecțiile sunt neflexibile." }
      ]
    },
    {
      type: "text",
      title: "3. Propoziția simplă și analiza logică",
      html: `<p><b>Enunțul</b> este un grup de cuvinte cu sens deplin. Dacă are un singur verb (un singur predicat) se numește <b>propoziție simplă</b>; dacă are mai multe, se vorbește despre <b>frază</b> (analiza frazei).</p>
<p><b>Analiza logică</b> descompune propoziția simplă în <b>elementele</b> ei, fiecare cu o funcție precisă. Nucleul este format din:</p>
<ul>
<li><b>Subiectul</b>: cine face acțiunea sau despre cine se spune ceva. Se află cu întrebarea <i>„Cine...?”</i>. Poate fi subînțeles („Mâncăm” = noi).</li>
<li><b>Predicatul</b>: ceea ce se spune despre subiect. Poate fi:
  <ul>
  <li><b>verbal</b>: este un verb cu sens deplin („Câinele <b>aleargă</b>”);</li>
  <li><b>nominal</b>: copulă (verbul a fi sau similar) + <b>nume predicativ</b> (substantiv sau adjectiv) („Câinele <b>este</b> <b>credincios</b>”).</li>
  </ul></li>
</ul>
<p>În jurul nucleului se așază <b>expansiunile</b>: <b>atributul</b>, <b>apoziția</b> și <b>complementele</b>.</p>`
    },
    {
      type: "svg",
      title: "Anatomia unei propoziții simple",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="35" font-size="18" font-weight="bold" text-anchor="middle" fill="#0f172a">Ieri Marco ha mangiato una mela con la nonna</text>
<rect x="20" y="60" width="70" height="40" rx="8" fill="#fde68a" stroke="#92400e" stroke-width="2"/><text x="55" y="86" font-size="16" text-anchor="middle" fill="#0f172a">Ieri</text>
<rect x="105" y="60" width="90" height="40" rx="8" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/><text x="150" y="86" font-size="16" text-anchor="middle" fill="#0f172a">Marco</text>
<rect x="210" y="60" width="140" height="40" rx="8" fill="#bbf7d0" stroke="#166534" stroke-width="2"/><text x="280" y="86" font-size="16" text-anchor="middle" fill="#0f172a">ha mangiato</text>
<rect x="365" y="60" width="90" height="40" rx="8" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><text x="410" y="86" font-size="16" text-anchor="middle" fill="#0f172a">una mela</text>
<rect x="470" y="60" width="110" height="40" rx="8" fill="#e9d5ff" stroke="#6b21a8" stroke-width="2"/><text x="525" y="86" font-size="16" text-anchor="middle" fill="#0f172a">con la nonna</text>
<text x="55" y="140" font-size="13" text-anchor="middle" fill="#92400e" font-weight="bold">compl. de timp</text>
<text x="150" y="140" font-size="14" text-anchor="middle" fill="#1e3a8a" font-weight="bold">subiect</text>
<text x="280" y="140" font-size="14" text-anchor="middle" fill="#166534" font-weight="bold">predicat verbal</text>
<text x="410" y="140" font-size="14" text-anchor="middle" fill="#991b1b" font-weight="bold">compl. direct</text>
<text x="525" y="140" font-size="13" text-anchor="middle" fill="#6b21a8" font-weight="bold">compl. de companie</text>
<text x="300" y="210" font-size="16" text-anchor="middle" fill="#0f172a">Întrebări-ghid:</text>
<text x="300" y="235" font-size="14" text-anchor="middle" fill="#0f172a">Cine? (subiect) · Ce face? (predicat) · Ce? (complement direct)</text>
<text x="300" y="258" font-size="14" text-anchor="middle" fill="#0f172a">Când? Unde? Cu cine? Cum? De ce? (complemente indirecte)</text>
</svg>`,
      caption: "Fiecare parte a propoziției răspunde la o întrebare: găsește întâi predicatul, apoi subiectul."
    },
    {
      type: "text",
      title: "4. Atribut, apoziție și complemente",
      html: `<p><b>Atributul</b>: adjectiv care însoțește un substantiv („o <b>frumoasă</b> zi”). <b>Apoziția</b>: un substantiv care se așază lângă altul pentru a-l preciza („Dante, <b>poetul</b>”; „fluviul <b>Po</b>”).</p>
<p><b>Complementele</b> completează sensul predicatului. <b>Complementul direct</b> (în italiană „complemento oggetto”) răspunde la <i>„pe cine? ce?”</i> și în italiană nu are prepoziție: „Citesc <b>o carte</b>”. Celelalte sunt <b>complemente indirecte</b>, introduse de o prepoziție:</p>
<table>
<tr><th>Complementul</th><th>Răspunde la</th><th>Exemplu</th></tr>
<tr><td>De specificare (genitiv)</td><td>al cui? a ce?</td><td>Casa <b>lui Luca</b></td></tr>
<tr><td>De termen (dativ)</td><td>cui? la ce?</td><td>Îi scriu <b>Martei</b></td></tr>
<tr><td>De loc</td><td>unde? de unde? pe unde?</td><td>Locuiesc <b>la Torino</b></td></tr>
<tr><td>De timp</td><td>când? cât timp?</td><td>Plec <b>mâine</b>; învăț <b>două ore</b></td></tr>
<tr><td>De mijloc</td><td>cu ce mijloc?</td><td>Călătoresc <b>cu trenul</b></td></tr>
<tr><td>De mod</td><td>cum?</td><td>Vorbește <b>cu calm</b></td></tr>
<tr><td>De cauză</td><td>din ce cauză?</td><td>Tremur <b>de frig</b></td></tr>
<tr><td>De scop</td><td>în ce scop?</td><td>Învăț <b>pentru promovare</b></td></tr>
<tr><td>De companie / de unire</td><td>cu cine? cu ce?</td><td>Ies <b>cu prietenii</b></td></tr>
<tr><td>De agent / cauză eficientă</td><td>de către cine? (cu verb pasiv)</td><td>Tabloul a fost pictat <b>de Giotto</b></td></tr>
<tr><td>De argument</td><td>despre ce?</td><td>O carte <b>despre istoria romană</b></td></tr>
<tr><td>De materie</td><td>din ce material?</td><td>Un inel <b>de aur</b></td></tr>
<tr><td>De calitate</td><td>cu ce caracteristică?</td><td>O fată <b>cu părul roșu</b></td></tr>
</table>
<p>Același substantiv poate avea funcții diferite: depinde de <b>verb</b> și de <b>prepoziție</b>. În „Il vaso <b>di vetro</b>” („vaza de sticlă”) este materie; în „il vaso <b>di Marta</b>” („vaza Martei”) este specificare.</p>`
    },
    {
      type: "remember",
      title: "Metoda analizei logice",
      html: `<ol><li>Caută <b>predicatul</b> (verbul, eventual cu copulă).</li><li>Găsește <b>subiectul</b> (cine face acțiunea?). La pasiv subiectul <i>suportă</i> acțiunea.</li><li>Caută <b>complementul direct</b> (fără prepoziție, în italiană).</li><li>Pentru complementele indirecte, uită-te la <b>prepoziție</b> și pune <b>întrebarea potrivită</b>.</li><li>Amintește-ți: <b>aceeași prepoziție</b> poate introduce complemente diferite (<i>con</i>: companie, mijloc, mod...). Contează sensul.</li></ol>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege propoziția",
      intro: "Dacă analiza logică ți se pare o listă de învățat pe de rost, încearcă aceste puncte de vedere.",
      tabs: [
        { label: "🎬 Filmul propoziției", html: "<p>Imaginează-ți propoziția ca pe o <b>scenă dintr-un film</b>: <b>predicatul</b> este acțiunea, <b>subiectul</b> este actorul, <b>complementul direct</b> este ceea ce acțiunea atinge direct, iar <b>complementele indirecte</b> sunt fundalul: unde, când, cu cine, de ce, cum. Întreabă-te „cine face ce? și unde, când, cum?”.</p>" },
        { label: "🌳 Arborele propoziției", html: "<p>Unele școli lingvistice reprezintă propoziția ca pe un <b>arbore</b>: predicatul este trunchiul, din care pornesc ramurile (subiect, complement, alte complemente), la rândul lor cu ramuri mai mici (atribute, apoziții). Gramatica „valențială” a lui <b>Lucien Tesnière</b> (1893-1954) raționează așa: verbul este centrul și cere un anumit număr de „locuri” (<i>valențe</i>) de umplut. Verbul <i>a da</i> cere trei: cine dă, ce, cui.</p>", svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><circle cx="300" cy="50" r="38" fill="#bbf7d0" stroke="#166534" stroke-width="2"/><text x="300" y="56" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">dă</text><line x1="270" y1="78" x2="120" y2="170" stroke="#334155" stroke-width="2"/><line x1="300" y1="88" x2="300" y2="170" stroke="#334155" stroke-width="2"/><line x1="330" y1="78" x2="480" y2="170" stroke="#334155" stroke-width="2"/><rect x="60" y="170" width="120" height="44" rx="8" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/><text x="120" y="197" font-size="16" text-anchor="middle" fill="#0f172a">Anna (cine)</text><rect x="240" y="170" width="120" height="44" rx="8" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><text x="300" y="197" font-size="16" text-anchor="middle" fill="#0f172a">o carte (ce)</text><rect x="420" y="170" width="140" height="44" rx="8" fill="#e9d5ff" stroke="#6b21a8" stroke-width="2"/><text x="490" y="197" font-size="16" text-anchor="middle" fill="#0f172a">lui Luca (cui)</text><text x="300" y="260" font-size="14" text-anchor="middle" fill="#0f172a">Verbul „a da” are trei valențe: subiect, obiect, termen</text></svg>` },
        { label: "🧩 Testul substituției", html: "<p>Pentru a înțelege <b>partea de vorbire</b> a unui cuvânt, înlocuiește-l cu un cuvânt sigur. Dacă poți pune <i>„foarte”</i> înaintea lui („foarte <b>bine</b>”), este adverb; dacă poți pune <i>„il/la”</i> (în italiană) sau un articol înaintea lui, este substantiv („il <b>bene</b>” = „binele”). Același termen <i>bene</i> își schimbă categoria după propoziție. În gramatică contează <b>funcția</b>, nu doar cuvântul.</p>" }
      ]
    },
    {
      type: "text",
      title: "5. Cazuri speciale: pasivul, reflexivul, predicatul nominal",
      html: `<p>Unele verbe schimbă structura propoziției.</p>
<ul>
<li><b>Diateza pasivă</b>: subiectul <i>suportă</i> acțiunea; cel care o face devine <b>complement de agent</b>: „Hoțul <b>a fost arestat de carabinieri</b>”. Propoziția activă: „Carabinierii au arestat hoțul” (carabinierii = subiect; hoțul = complement direct).</li>
<li><b>Diateza reflexivă</b>: subiectul și obiectul coincid („Luca <b>se spală</b>”): <i>se</i> este un pronume cu funcție de complement direct.</li>
<li><b>Predicatul nominal</b>: „Pământul <b>este</b> <b>rotund</b>”; „Roma este capitala”. Verbul a fi este aici copulă și nu are sens propriu; alte verbe copulative: <i>a părea, a deveni, a rămâne</i>.</li>
<li><b>Subiectul subînțeles</b>: în italiană pronumele personale subiect se omit adesea, pentru că desinența verbală indică persoana („Vado” = eu merg). La fel și în română.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Este analiza logică o invenție italiană?",
      html: `<p>În mare parte da: <b>analiza logică</b> ca exercițiu școlar, cu acest nume și cu această listă de complemente, este tipică școlii italiene. În alte țări se practică <i>sentence parsing</i> sau analiza în constituenți. Numele „logică” trimite la ideea de a recunoaște în propoziție raporturile de gândire dintre cuvinte. Astăzi lingviștii moderni, precum <b>Noam Chomsky</b> (născut în 1928), descriu sintaxa prin modele „arborescente” asemănătoare cu cel din fișa precedentă. (În română, analiza se numește „analiza sintactică”, iar complementele au denumiri puțin diferite.)</p>`
    },
    {
      type: "curiosity",
      title: "Cuvintele care își schimbă meseria",
      html: `<p>Multe cuvinte trec dintr-o categorie în alta. <i>\"Il bello della vita\"</i> („frumosul vieții”): <i>bello</i>, adjectiv, este substantivizat. <i>\"Cammina piano\"</i> („merge încet”) și <i>\"un piano di studi\"</i> („un plan de studii”): adverb și substantiv. De aceea se spune că <b>categoria gramaticală</b> se stabilește <b>în uz</b>, nu în dicționar.</p>`
    },
    {
      type: "conceptMap",
      title: "Hartă: gramatica și propoziția simplă",
      nodes: [
        { id: "gram", label: "Gramatica", x: 50, y: 8, color: "#3b82f6", html: "Studiul regulilor după care funcționează o limbă.", why: "De la greci și latini (Dionisie Tracul, Priscian) gramatica descrie cuvintele și relațiile lor. Numele părților de vorbire provin din gramaticile antice." },
        { id: "morf", label: "Morfologia", x: 20, y: 40, color: "#10b981", html: "Studiază forma și clasificarea cuvintelor: nouă părți de vorbire.", why: "Categoriile derivă din comportamentul cuvintelor: unele se schimbă (flexibile), altele nu. Clasificarea servește la a prevedea cum sunt folosite." },
        { id: "sint", label: "Sintaxa", x: 80, y: 40, color: "#f59e0b", html: "Studiază cum formează cuvintele propoziții și fraze.", why: "O propoziție nu este o sumă de cuvinte: ordinea și legăturile (acorduri, prepoziții) produc sensul. „Il cane morde l'uomo” („Câinele mușcă omul”) și „L'uomo morde il cane” („Omul mușcă câinele”) au aceleași cuvinte și sens opus." },
        { id: "log", label: "Analiza logică", x: 80, y: 72, color: "#8b5cf6", html: "Subiect, predicat, atribut, apoziție, complement direct și complemente indirecte.", why: "Servește la a înțelege cine face ce și în ce împrejurări. Ajută la scrierea unor propoziții clare și la evitarea ambiguităților." },
        { id: "parti", label: "Părți de vorbire", x: 20, y: 72, color: "#ef4444", html: "Cinci flexibile (substantiv, articol, adjectiv, pronume, verb), patru neflexibile (adverb, prepoziție, conjuncție, interjecție).", why: "Împărțirea în flexibile și neflexibile depinde de posibilitatea flexiunii, care în italiană (limbă derivată din latină) este bogată în verb și în grupul nominal." }
      ],
      edges: [["gram", "morf", "cuprinde"], ["gram", "sint", "cuprinde"], ["sint", "log", "propoziția simplă"], ["morf", "parti", "clasifică în"]]
    },
    {
      type: "quiz",
      title: "Mini-test: analiza logică",
      questions: [
        { type: "mc", q: "„La torta è squisita” („Tortul este delicios”): „è squisita” este...", options: ["predicat verbal", "predicat nominal", "atribut"], answer: 1, explain: "Este copulă + adjectiv (nume predicativ)." },
        { type: "mc", q: "În „Sono partito per Roma” („Am plecat spre Roma”), „per Roma” este complement de...", options: ["scop", "loc", "cauză"], answer: 1, explain: "Indică destinația călătoriei: complement de loc (mișcare spre un loc)." },
        { type: "tf", q: "În propoziția „Il libro fu scritto da Manzoni” („Cartea a fost scrisă de Manzoni”), „Manzoni” este subiect.", answer: false, explain: "Este complement de agent: subiectul este „il libro” („cartea”)." }
      ]
    }
  ],
  glossary: [
    { t: "Morfologie", d: "Studiul formei cuvintelor și al părților de vorbire." },
    { t: "Sintaxă", d: "Studiul relațiilor dintre cuvinte în propoziție și în frază." },
    { t: "Predicat verbal", d: "Predicat format dintr-un verb cu sens deplin." },
    { t: "Predicat nominal", d: "Copulă (verbul a fi sau similar) plus nume predicativ." },
    { t: "Complement direct", d: "Complement fără prepoziție (în italiană), care indică asupra cui sau asupra a ce se răsfrânge acțiunea." },
    { t: "Complement indirect", d: "Complement introdus de o prepoziție." },
    { t: "Apoziție", d: "Substantiv care se așază lângă alt substantiv pentru a-l preciza." },
    { t: "Atribut", d: "Adjectiv raportat direct la un substantiv." },
    { t: "Copulă", d: "Verbul a fi (sau similar) care leagă subiectul de numele predicativ." },
    { t: "Complement de agent", d: "Indică de către cine este făcută acțiunea într-o propoziție pasivă." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Câte părți de vorbire sunt în italiană?", options: ["șapte", "opt", "nouă", "zece"], answer: 2, explain: "Substantiv, articol, adjectiv, pronume, verb, adverb, prepoziție, conjuncție, interjecție." },
      { type: "mc", q: "Care parte de vorbire este neflexibilă?", options: ["Pronumele", "Conjuncția", "Adjectivul", "Verbul"], answer: 1, explain: "Cele neflexibile sunt adverbul, prepoziția, conjuncția și interjecția." },
      { type: "text", q: "Cum se numește verbul „a fi” când leagă subiectul de numele predicativ?", answer: ["copulă", "copula", "o copulă", "verb copulativ"], explain: "În „Anna è stanca” („Anna este obosită”), „è” este copulă." },
      { type: "mc", q: "În „Parlo con calma” („Vorbesc cu calm”), „con calma” este complement de...", options: ["companie", "mijloc", "mod", "cauză"], answer: 2, explain: "Răspunde la „cum?”: mod." },
      { type: "tf", q: "În propoziția „Mi piace il mare” („Îmi place marea”), „il mare” este subiectul.", answer: true, explain: "Ce place? Marea: subiect; „mi” este complement de termen (dativ)." },
      { type: "mc", q: "„La casa di Luca” („Casa lui Luca”) conține un complement de...", options: ["specificare", "termen", "loc", "agent"], answer: 0, explain: "Răspunde la „al cui?”: specificare." },
      { type: "mc", q: "În „Dante, poeta fiorentino, scrisse la Commedia” („Dante, poet florentin, a scris Commedia”), „poeta” este...", options: ["atribut", "apoziție", "predicat nominal", "complement direct"], answer: 1, explain: "Este un substantiv care se așază lângă „Dante” pentru a-l preciza: apoziție." },
      { type: "order", q: "Așază în ordinea recomandată pașii analizei logice.", items: ["Găsirea predicatului", "Găsirea subiectului", "Găsirea complementului direct", "Analiza complementelor indirecte"], explain: "Se pornește de la verb, apoi de la subiect, apoi de la elementele pe care le cere verbul, în final complementele indirecte." },
      { type: "mc", q: "În „Il compito fu corretto dal professore” („Tema a fost corectată de profesor”), „dal professore” este...", options: ["complement de cauză", "complement de agent", "subiect", "complement de loc"], answer: 1, explain: "Indică cine face acțiunea într-o propoziție pasivă." }
    ]
  }
});
