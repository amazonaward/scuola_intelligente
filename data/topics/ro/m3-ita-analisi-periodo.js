TOPIC('ro', {
  id: "m3-ita-analisi-periodo",
  title: "Analiza frazei (analisi del periodo)",
  intro: "O frază complexă este ca o clădire: există o structură de rezistență (<b>propoziția principală</b>) și camere legate între ele (<b>propozițiile coordonate</b> și <b>subordonate</b>). Prin analiza frazei învățăm să desfacem frazele lungi, să înțelegem cine comandă și cine depinde și să scriem texte mai clare. (Exemplele sunt în italiană, limba pe care o analizăm; la nevoie le dăm și traducerea.)",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "Propoziție simplă, frază și propoziții",
      html: `<p>La analiza logică studiai <b>propoziția simplă</b>: un singur predicat (verb) cu complementele lui. Când într-o propoziție apar <b>mai multe verbe la mod personal sau nepersonal</b>, avem o <b>frază</b> (italiană: <i>periodo</i>, sau frază complexă).</p>
<p>Fiecare parte a frazei care are propriul predicat se numește <b>propoziție</b>. Regula de aur: <b>atâtea propoziții câte predicate</b>.</p>
<p>Exemplu: <i>„Quando sono arrivato, | Marco dormiva | e non ho voluto svegliarlo."</i> („Când am sosit, Marco dormea și n-am vrut să-l trezesc.") → trei predicate (<i>sono arrivato</i>, <i>dormiva</i>, <i>ho voluto svegliare</i>) → trei propoziții.</p>
<p>⚠️ Atenție la verbele modale (<i>volere, potere, dovere</i>) și la cele frazeologice (<i>stare per, cominciare a, smettere di</i>): formează <b>un singur predicat</b> cu infinitivul care le urmează. <i>„Devo studiare"</i> („Trebuie să învăț") este o singură propoziție.</p>`
    },
    {
      type: "text",
      title: "Pasul 1 – Găsește propoziția principală",
      html: `<p><b>Propoziția principală</b> (sau independentă) este cea care:</p>
<ul>
<li>are <b>sens complet de una singură</b>;</li>
<li><b>nu depinde</b> de nicio altă propoziție;</li>
<li>de obicei are verbul la <b>indicativ</b>, la <b>condițional</b>, la <b>imperativ</b> sau la conjunctiv exhortativ/optativ (<i>„Magari piovesse!"</i> – „Măcar să plouă!").</li>
</ul>
<p>Propozițiile principale pot fi: <b>enunțiative</b> (afirmă sau neagă: <i>„Oggi piove"</i>), <b>interogative directe</b> (<i>„Vieni?"</i>), <b>exclamative</b> (<i>„Che bello!"</i>), <b>volitive</b> (<i>„Chiudi la porta"</i>), <b>optative</b> (<i>„Vorrei un gelato"</i>), <b>dubitative</b> (<i>„Che fare?"</i>).</p>`
    },
    {
      type: "text",
      title: "Pasul 2 – Coordonare și subordonare",
      html: `<p>Propozițiile se leagă în două moduri:</p>
<table>
<tr><th>Coordonare (parataxă)</th><th>Subordonare (hipotaxă)</th></tr>
<tr><td>Propoziții <b>pe același nivel</b>, niciuna nu depinde de cealaltă.</td><td>O propoziție <b>depinde</b> de alta (regentă) și o completează.</td></tr>
<tr><td>Conjuncții coordonatoare: <i>e, né, o, ma, però, quindi, infatti, cioè, sia… sia</i>; sau doar virgula (<b>asindet</b>).</td><td>Conjuncții subordonatoare: <i>che, perché, quando, se, mentre, affinché, sebbene, poiché</i>; pronume relative; verbe la moduri nepersonale.</td></tr>
<tr><td><i>„Studio <b>e</b> ascolto musica."</i> („Învăț și ascult muzică.")</td><td><i>„Studio <b>perché</b> domani ho la verifica."</i> („Învăț pentru că mâine am test.")</td></tr>
</table>
<p>Coordonatele se clasifică după conjuncție: <b>copulative</b> (e, né, anche), <b>adversative</b> (ma, però, tuttavia), <b>disjunctive</b> (o, oppure), <b>conclusive</b> (quindi, perciò, dunque), <b>explicative</b> (infatti, cioè), <b>corelative</b> (sia… sia, né… né).</p>`
    },
    {
      type: "svg",
      title: "Schema arborescentă a unei fraze",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#f8fafc"/>
<text x="320" y="28" font-size="16" text-anchor="middle" fill="#334155">"Luca ha detto che verrà alla festa e porterà la torta, se finisce i compiti."</text>
<rect x="210" y="50" width="220" height="50" rx="10" fill="#2563eb"/>
<text x="320" y="73" font-size="16" text-anchor="middle" fill="#fff" font-weight="bold">PRINCIPALĂ</text>
<text x="320" y="92" font-size="15" text-anchor="middle" fill="#fff">Luca ha detto</text>
<line x1="320" y1="100" x2="190" y2="150" stroke="#334155" stroke-width="3"/>
<rect x="60" y="150" width="240" height="50" rx="10" fill="#16a34a"/>
<text x="180" y="172" font-size="15" text-anchor="middle" fill="#fff" font-weight="bold">SUB. gradul 1 (completivă)</text>
<text x="180" y="191" font-size="15" text-anchor="middle" fill="#fff">che verrà alla festa</text>
<line x1="300" y1="175" x2="350" y2="175" stroke="#f97316" stroke-width="4" stroke-dasharray="8 5"/>
<text x="325" y="165" font-size="14" text-anchor="middle" fill="#c2410c">e</text>
<rect x="350" y="150" width="250" height="50" rx="10" fill="#22c55e"/>
<text x="475" y="172" font-size="15" text-anchor="middle" fill="#fff" font-weight="bold">coordonată la sub. gradul 1</text>
<text x="475" y="191" font-size="15" text-anchor="middle" fill="#fff">(e) porterà la torta</text>
<line x1="180" y1="200" x2="180" y2="250" stroke="#334155" stroke-width="3"/>
<rect x="60" y="250" width="240" height="50" rx="10" fill="#a855f7"/>
<text x="180" y="272" font-size="15" text-anchor="middle" fill="#fff" font-weight="bold">SUB. gradul 2 (condițională)</text>
<text x="180" y="291" font-size="15" text-anchor="middle" fill="#fff">se finisce i compiti</text>
<text x="470" y="275" font-size="14" fill="#334155">— linie plină: depinde de</text>
<text x="470" y="298" font-size="14" fill="#c2410c">- - linie punctată: coordonare</text>
</svg>`,
      caption: "Principala stă în vârf; fiecare subordonată „coboară” un grad; coordonatele stau pe același nivel."
    },
    {
      type: "text",
      title: "Pasul 3 – Forma explicită și implicită; gradele",
      html: `<p>O subordonată poate fi:</p>
<ul>
<li><b>explicită</b>: verb la mod <b>finit</b> (indicativ, conjunctiv, condițional), introdusă de o conjuncție sau de un relativ → <i>„Ti chiamo <b>quando arrivo</b>."</i> („Te sun când ajung.")</li>
<li><b>implicită</b>: verb la mod <b>nefinit</b> (infinitiv, participiu, gerunziu) → <i>„Ti chiamo <b>arrivato</b> a casa"</i>, <i>„<b>Arrivando</b> a casa, ti chiamo."</i> („Ajungând acasă, te sun.")</li>
</ul>
<p><b>Gradul</b> arată distanța față de principală: o subordonată care depinde de principală este de <b>gradul 1</b>; dacă depinde de o subordonată de gradul 1 este de <b>gradul 2</b>, și tot așa.</p>`
    },
    {
      type: "text",
      title: "Pasul 4 – Tipurile de subordonate",
      html: `<p>Multe subordonate corespund unui complement din analiza logică: sunt „complemente transformate în propoziție”.</p>
<table>
<tr><th>Subordonata</th><th>Răspunde la…</th><th>Exemplu</th></tr>
<tr><td><b>Subiectivă</b> (soggettiva)</td><td>are rol de subiect</td><td><i>È importante <b>che tu venga</b>.</i></td></tr>
<tr><td><b>Completivă directă</b> (oggettiva)</td><td>are rol de complement direct</td><td><i>So <b>che hai ragione</b>.</i></td></tr>
<tr><td><b>Declarativă</b> (dichiarativa)</td><td>explică un substantiv sau un pronume</td><td><i>Ho la speranza <b>che vinca</b>.</i></td></tr>
<tr><td><b>Interogativă indirectă</b></td><td>întrebare relatată</td><td><i>Mi chiedo <b>se verrà</b>.</i></td></tr>
<tr><td><b>Atributivă / relativă</b> (relativa)</td><td>ca un atribut</td><td><i>Il libro <b>che leggo</b> è bello.</i></td></tr>
<tr><td><b>Cauzală</b> (causale)</td><td>de ce?</td><td><i>Resto a casa <b>perché piove</b>.</i></td></tr>
<tr><td><b>Finală</b> (finale)</td><td>cu ce scop?</td><td><i>Studio <b>per superare l'esame</b>.</i></td></tr>
<tr><td><b>Temporală</b> (temporale)</td><td>când?</td><td><i><b>Mentre mangiavo</b>, squillò il telefono.</i></td></tr>
<tr><td><b>Consecutivă</b> (consecutiva)</td><td>cu ce urmare?</td><td><i>Era così stanco <b>che si addormentò</b>.</i></td></tr>
<tr><td><b>Concesivă</b> (concessiva)</td><td>în ciuda cărui lucru?</td><td><i><b>Sebbene piovesse</b>, uscimmo.</i></td></tr>
<tr><td><b>Condițională</b> (perioadă ipotetică)</td><td>în ce condiție?</td><td><i><b>Se studi</b>, sarai promosso.</i></td></tr>
<tr><td><b>Modală</b> (modale)</td><td>în ce fel?</td><td><i>Entrò <b>correndo</b>.</i></td></tr>
<tr><td><b>Comparativă</b> (comparativa)</td><td>în comparație cu ce?</td><td><i>È più facile <b>di quanto pensassi</b>.</i></td></tr>
</table>`
    },
    {
      type: "quiz",
      title: "Mini-test: propoziții și legături",
      questions: [
        { type: "num", q: "Câte propoziții sunt în: „Quando torno a casa, mangio e poi faccio i compiti”?", answer: 3, explain: "Trei predicate: torno, mangio, faccio → trei propoziții." },
        { type: "mc", q: "În „Esco, ma torno presto” a doua propoziție este…", options: ["subordonată cauzală", "coordonată adversativă", "principală interogativă"], answer: 1, explain: "„Ma” este o conjuncție coordonatoare adversativă: cele două propoziții sunt pe același nivel." },
        { type: "tf", q: "„Voglio partire” conține două propoziții.", answer: false, explain: "„Volere” este verb modal: „voglio partire” este un singur predicat, deci o singură propoziție." }
      ]
    },
    {
      type: "example",
      title: "Exemplu ghidat: analizăm o frază",
      html: `<p><i>„Poiché era tardi, Anna chiamò sua madre per dirle che sarebbe tornata in autobus."</i> („Fiindcă era târziu, Anna și-a sunat mama ca să-i spună că se va întoarce cu autobuzul.")</p>
<ol>
<li><b>Număr predicatele</b>: era, chiamò, dire, sarebbe tornata → 4 propoziții.</li>
<li><b>Principala</b>: <i>Anna chiamò sua madre</i> (are sens de una singură).</li>
<li><i>Poiché era tardi</i> → subordonată <b>cauzală</b> explicită de gradul 1.</li>
<li><i>per dirle</i> → subordonată <b>finală</b> implicită (infinitiv) de gradul 1.</li>
<li><i>che sarebbe tornata in autobus</i> → subordonată <b>completivă directă</b> explicită de gradul 2 (depinde de „dirle”).</li>
</ol>`
    },
    {
      type: "example",
      title: "Exemplu practic: transformăm implicită ↔ explicită",
      html: `<p>A ști să treci de la o formă la alta ajută să scrii mai bine și să eviți repetarea lui „che”.</p>
<ul>
<li><i>„<b>Finiti</b> i compiti, uscì"</i> (temporală implicită, participiu) → <i>„<b>Dopo che ebbe finito</b> i compiti, uscì"</i> (explicită).</li>
<li><i>„Penso <b>di avere ragione</b>"</i> (completivă implicită) → <i>„Penso <b>che io abbia ragione</b>"</i>: forma explicită sună aici greoi, pentru că subiectul este același. Când subiectul coincide, se preferă <b>implicita</b>.</li>
<li><i>„<b>Sbagliando</b> s'impara"</i> (gerunziu cu valoare cauzală/instrumentală: „greșind se învață”) → <i>„<b>Poiché si sbaglia</b>, s'impara"</i>.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Exersează: coordonată sau subordonată?",
      widget: "classify",
      options: {
        groups: ["Coordonată", "Subordonată"],
        items: [
          ["…ma non avevo l'ombrello", 0],
          ["…perché avevo fame", 1],
          ["…e poi sono uscito", 0],
          ["…sebbene fosse stanco", 1],
          ["…quindi ho deciso di restare", 0],
          ["…che mi hai prestato", 1],
          ["…oppure guardiamo un film", 0],
          ["…affinché tu capisca", 1],
          ["…infatti era già buio", 0],
          ["…mentre leggevo", 1]
        ]
      },
      caption: "Uită-te la conjuncție: cele coordonatoare pun propozițiile pe picior de egalitate, cele subordonatoare creează dependență."
    },
    {
      type: "widget",
      title: "Potrivește subordonata cu tipul ei",
      widget: "match",
      options: {
        pairs: [
          ["Se piove", "condițională"],
          ["Benché fosse malato", "concesivă"],
          ["Per non fare tardi", "finală"],
          ["Mi domando chi sia", "interogativă indirectă"],
          ["Era così buio che non vedevo", "consecutivă"],
          ["Dopo aver mangiato", "temporală"]
        ]
      },
      caption: "Întreabă-te mereu: la ce întrebare răspunde această propoziție?"
    },
    {
      type: "curiosity",
      title: "Știai că…? Parataxă și hipotaxă în literatură",
      html: `<p>Scriitorii își aleg stilul și după sintaxă. <b>Giovanni Boccaccio</b>, în <i>Decameron</i> (1349–1353), imita fraza latină, cu lanțuri lungi de subordonate. Secole mai târziu, <b>Giovanni Verga</b> și apoi mulți autori din secolul XX au preferat o sintaxă mai <b>paratactică</b>, cu propoziții scurte și coordonate, mai apropiată de limba vorbită. Încearcă să compari o pagină din <i>I promessi sposi</i> cu una din <i>Se questo è un uomo</i> de Primo Levi: vei observa diferența!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Cea mai lungă frază",
      html: `<p>Scriitorul francez <b>Marcel Proust</b>, în romanul <i>În căutarea timpului pierdut</i>, a scris o frază de peste <b>900 de cuvinte</b>! În italiană, Carlo Emilio Gadda este faimos pentru frazele încâlcite, pline de incidente. La polul opus, în titlurile din ziare și în mesaje se folosesc aproape numai propoziții scurte: sintaxa se schimbă după scopul textului.</p>`
    },
    {
      type: "remember",
      title: "De reținut: metoda în 5 pași",
      html: `<ol>
<li>Subliniază <b>predicatele</b> și împarte fraza în propoziții.</li>
<li>Găsește <b>principala</b> (are sens de una singură).</li>
<li>Pentru fiecare altă propoziție întreabă-te: este <b>pe picior de egalitate</b> (coordonată) sau <b>depinde</b> (subordonată)?</li>
<li>Pentru subordonate indică: <b>tipul</b> (cauzală, finală…), <b>forma</b> (explicită/implicită), <b>gradul</b>.</li>
<li>Desenează <b>schema arborescentă</b>.</li>
</ol>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege analiza frazei",
      intro: "Dacă schema tradițională te încurcă, încearcă una dintre aceste căi: o analogie, o metodă folosită în străinătate, un model 3D.",
      tabs: [
        {
          label: "🏢 Clădirea",
          html: `<p>Imaginează-ți fraza ca pe un <b>bloc</b>:</p>
<ul>
<li><b>principala</b> este <b>parterul</b>: stă în picioare singură;</li>
<li><b>subordonatele de gradul 1</b> sunt <b>primul etaj</b>: se sprijină pe parter;</li>
<li>cele de <b>gradul 2</b> sunt la <b>etajul al doilea</b>, sprijinite pe primul;</li>
<li><b>coordonatele</b> sunt camere <b>alăturate, pe același etaj</b>, legate printr-o ușă (e, ma, o…).</li>
</ul>
<p>Dacă scoți parterul, se prăbușește totul; dacă scoți o cameră de la etajul al doilea, blocul rămâne în picioare. Iată de ce principala este singura care se ține singură!</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#e0f2fe"/>
<rect x="100" y="200" width="400" height="60" fill="#2563eb"/>
<text x="300" y="237" font-size="18" text-anchor="middle" fill="#fff" font-weight="bold">Parter: PRINCIPALA</text>
<rect x="100" y="130" width="195" height="70" fill="#16a34a" stroke="#fff" stroke-width="3"/>
<rect x="305" y="130" width="195" height="70" fill="#22c55e" stroke="#fff" stroke-width="3"/>
<text x="197" y="170" font-size="16" text-anchor="middle" fill="#fff">gradul 1</text>
<text x="402" y="170" font-size="16" text-anchor="middle" fill="#fff">coordonată (gradul 1)</text>
<rect x="100" y="60" width="195" height="70" fill="#a855f7" stroke="#fff" stroke-width="3"/>
<text x="197" y="100" font-size="16" text-anchor="middle" fill="#fff">gradul 2</text>
<polygon points="90,60 197,15 305,60" fill="#ef4444"/>
<rect x="290" y="150" width="30" height="40" fill="#f59e0b"/>
<text x="540" y="170" font-size="14" fill="#334155">ușa</text>
<text x="540" y="188" font-size="14" fill="#334155">= „e”</text>
</svg>`
        },
        {
          label: "🇬🇧 Metoda engleză: main & dependent clauses",
          html: `<p>În școlile engleze se vorbește de <b>main clause</b> (principală) și de <b>subordinate</b> sau <b>dependent clause</b>. Testul pe care îl învață este foarte simplu: <b>„Can it stand alone?”</b> – poate sta singură ca propoziție?</p>
<p>Subordonatele se împart în trei familii, după funcție:</p>
<ul>
<li><b>noun clauses</b> (funcționează ca un substantiv) → subiectivele, completivele directe, interogativele indirecte;</li>
<li><b>adjective/relative clauses</b> (funcționează ca un adjectiv) → atributivele/relativele;</li>
<li><b>adverbial clauses</b> (funcționează ca un adverb) → cauzale, temporale, finale, concesive…</li>
</ul>
<p>Trei familii în loc de douăzeci de nume: pentru început e mai ușor! Apoi, în fiecare familie, găsești tipurile italiene.</p>`
        },
        {
          label: "🧩 Înlocuiește cu un cuvânt",
          html: `<p>Truc practic: încearcă să <b>înlocuiești subordonata cu un singur cuvânt</b>. Tipul de cuvânt îți spune tipul de subordonată!</p>
<ul>
<li><i>„So <b>che hai vinto</b>"</i> („Știu că ai câștigat”) → <i>„So <b>questo</b>"</i> (substantiv/pronume complement direct) → <b>completivă directă</b>.</li>
<li><i>„Il ragazzo <b>che corre</b> è mio fratello"</i> → <i>„Il ragazzo <b>veloce</b>"</i> (adjectiv) → <b>atributivă (relativă)</b>.</li>
<li><i>„Esco <b>quando smette di piovere</b>"</i> → <i>„Esco <b>dopo</b>"</i> (adverb de timp) → <b>temporală</b>.</li>
<li><i>„Lo faccio <b>per aiutarti</b>"</i> → <i>„Lo faccio <b>per te</b>"</i> (complement de scop) → <b>finală</b>.</li>
</ul>`
        },
        {
          label: "🧊 Fraza în 3D",
          html: `<p>Privește acest „turn” în straturi: fiecare strat este un <b>grad</b> de subordonare. Nucleul central este <b>principala</b>; cu cât te îndepărtezi de centru, cu atât propoziția este mai „departe” și mai dependentă. Rotește modelul: vei observa că fiecare strat exterior poate exista doar dacă există cel interior care îl susține.</p>`,
          scene: "layers",
          options: { layers: [
            { r: 1, color: "#c084fc", label: "Subordonată de gradul 3" },
            { r: 0.78, color: "#a855f7", label: "Subordonată de gradul 2" },
            { r: 0.56, color: "#22c55e", label: "Subordonată de gradul 1" },
            { r: 0.32, color: "#2563eb", label: "Principală" }
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta analizei frazei: atinge un nod",
      nodes: [
        { id: "periodo", label: "Fraza (periodo)", x: 50, y: 6, color: "#0f172a", html: "Propoziție complexă formată din mai multe propoziții, de la majusculă la punct.", why: "Termenul vine din grecescul <i>períodos</i>, „ocol, circuit”: retorii greci, ca Aristotel în <i>Retorica</i>, numeau astfel un gând complet care „se rotește” și se închide în sine." },
        { id: "proposizione", label: "Propoziția", x: 50, y: 26, color: "#334155", html: "Orice parte a frazei cu propriul predicat.", why: "Din latinescul <i>propositio</i>, „ceea ce este pus înainte”, adică o afirmație. Se numără după predicate pentru că verbul este cel care ține subiectul și complementele." },
        { id: "principale", label: "Principala", x: 15, y: 46, color: "#2563eb", html: "Propoziția independentă, care are sens complet de una singură.", why: "Este independentă pentru că cuprinde mesajul esențial: celelalte adaugă informații. De aceea la verbele principale găsim modurile certitudinii sau ale voinței (indicativ, imperativ, condițional)." },
        { id: "coordinazione", label: "Coordonare (parataxă)", x: 50, y: 50, color: "#f97316", html: "Legătura între propoziții de același nivel prin e, ma, o, quindi…", why: "Din grecescul <i>parà</i> (alături) + <i>táxis</i> (ordine): „a pune alături”. Este sintaxa tipică limbii vorbite și a limbilor antice mai simple, ca greaca homerică." },
        { id: "subordinazione", label: "Subordonare (hipotaxă)", x: 85, y: 46, color: "#16a34a", html: "O propoziție depinde de alta (regentă) și o completează.", why: "Din grecescul <i>hypó</i> (sub) + <i>táxis</i>: „a pune dedesubt”. Latina clasică a lui Cicero a făcut din ea o artă, iar italiana scrisă a moștenit-o prin Boccaccio și umaniști." },
        { id: "forma", label: "Explicită / implicită", x: 70, y: 72, color: "#a855f7", html: "Explicită: verb la mod finit. Implicită: infinitiv, participiu sau gerunziu.", why: "Modurile nefinite nu arată persoana, deci subiectul se deduce din regentă: de aceea implicita se folosește mai ales când subiectul este același." },
        { id: "tipi", label: "Tipuri de subordonate", x: 92, y: 72, color: "#22c55e", html: "Subiective, completive, atributive, cauzale, finale, temporale, concesive, consecutive, condiționale…", why: "Multe se nasc dintr-un complement al analizei logice „extins” în propoziție: complement de cauză → cauzală, de scop → finală, de timp → temporală. Gramatica le-a clasificat după modelul latin." },
        { id: "gradi", label: "Gradele", x: 40, y: 78, color: "#ef4444", html: "Distanța unei subordonate față de principală: gradul 1, 2, 3…", why: "Se numără „treptele” de dependență, ca într-un arbore genealogic: fiica principalei = gradul 1, „nepoata” = gradul 2." },
        { id: "logica", label: "Analiza logică", x: 15, y: 90, color: "#64748b", html: "Studiul propoziției simple: subiect, predicat, complemente.", why: "Analiza frazei este aceeași logică aplicată la un nivel mai înalt: ceea ce în propoziția simplă este un complement, în frază devine o propoziție." }
      ],
      edges: [
        ["periodo", "proposizione", "este format din"],
        ["proposizione", "principale", "una este"],
        ["proposizione", "coordinazione", "se leagă prin"],
        ["proposizione", "subordinazione", "se leagă prin"],
        ["subordinazione", "forma", "poate fi"],
        ["subordinazione", "tipi", "se împarte în"],
        ["subordinazione", "gradi", "se măsoară în"],
        ["logica", "tipi", "complement → propoziție"],
        ["principale", "gradi", "gradul 0"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: tipuri de subordonate",
      questions: [
        { type: "mc", q: "„Sebbene fosse tardi, continuammo a giocare”: prima propoziție este…", options: ["cauzală", "concesivă", "temporală"], answer: 1, explain: "„Sebbene” introduce o concesivă: arată un fapt care nu împiedică acțiunea principalei." },
        { type: "mc", q: "„Dimmi dove sei stato”: „dove sei stato” este…", options: ["interogativă indirectă", "atributivă (relativă)", "locativă"], answer: 0, explain: "Este o întrebare relatată, dependentă de „dimmi”: interogativă indirectă." },
        { type: "mc", q: "„Uscendo, chiudi la porta”: subordonata este…", options: ["explicită", "implicită"], answer: 1, explain: "Gerunziul „uscendo” este un mod nefinit: subordonată implicită (temporală)." }
      ]
    }
  ],
  glossary: [
    { t: "Periodo (frază)", d: "Propoziție complexă formată din două sau mai multe propoziții." },
    { t: "Proposizione (propoziție)", d: "Parte a frazei care conține un predicat." },
    { t: "Principală", d: "Propoziție independentă, cu sens complet de una singură." },
    { t: "Regentă", d: "Propoziția de care depinde o subordonată." },
    { t: "Coordonată", d: "Propoziție legată de alta de același nivel (e, ma, o, quindi…)." },
    { t: "Subordonată", d: "Propoziție care depinde de alta și îi completează sensul." },
    { t: "Asindet", d: "Coordonare făcută numai cu punctuația, fără conjuncții." },
    { t: "Explicită", d: "Subordonată cu verb la mod finit." },
    { t: "Implicită", d: "Subordonată cu verb la mod nefinit (infinitiv, participiu, gerunziu)." },
    { t: "Grad", d: "Nivelul de dependență al unei subordonate față de principală." },
    { t: "Parataxă / hipotaxă", d: "Construcție prin coordonare / prin subordonare." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Câte propoziții sunt în: „Mentre aspettavo l'autobus, ho letto un libro che mi aveva regalato Sara”?", answer: 3, explain: "Predicate: aspettavo, ho letto, aveva regalato → 3." },
      { type: "mc", q: "Care este principala în „Se avessi tempo, verrei con voi”?", options: ["Se avessi tempo", "verrei con voi"], answer: 1, explain: "„Verrei con voi” are sens de una singură; „se avessi tempo” este o condițională." },
      { type: "mc", q: "„Corri, altrimenti perdi il treno”: a doua propoziție este o coordonată…", options: ["copulativă", "disjunctivă", "conclusivă"], answer: 1, explain: "„Altrimenti” echivalează cu „o”: coordonată disjunctivă." },
      { type: "mc", q: "„È probabile che domani nevichi”: „che domani nevichi” este…", options: ["completivă directă", "subiectivă", "declarativă"], answer: 1, explain: "Are rol de subiect pentru „è probabile” (ce este probabil? că va ninge): subiectivă." },
      { type: "mc", q: "„Parlava così piano che nessuno lo sentiva”: subordonata este…", options: ["cauzală", "consecutivă", "finală"], answer: 1, explain: "„Così… che” arată urmarea: consecutivă." },
      { type: "tf", q: "O subordonată implicită are verbul la indicativ sau la conjunctiv.", answer: false, explain: "Implicita folosește modurile nefinite: infinitiv, participiu, gerunziu." },
      { type: "tf", q: "O subordonată de gradul 2 depinde de o subordonată de gradul 1.", answer: true, explain: "Gradul numără nivelurile de dependență față de principală." },
      { type: "text", q: "Cum se numește coordonarea făcută numai cu virgule, fără conjuncții?", answer: ["asindeto", "l'asindeto", "coordinazione per asindeto", "asindet", "asindetul", "coordonare prin asindet"], explain: "Asindet (it. asindeto), din grecescul „fără legături”." },
      { type: "mc", q: "„Ho comprato il libro che mi avevi consigliato”: subordonata este…", options: ["atributivă (relativă)", "completivă directă", "declarativă"], answer: 0, explain: "„Che” este pronume relativ (= il quale) referitor la „libro”: relativă." },
      { type: "order", q: "Pune în ordine pașii analizei frazei.", items: ["Subliniezi predicatele", "Împarți în propoziții", "Găsești principala", "Recunoști coordonatele și subordonatele", "Indici tipul, forma și gradul"], explain: "Se pornește de la verbe, se izolează principala și apoi se clasifică tot restul." },
      { type: "mc", q: "„Per arrivare in tempo, prese un taxi”: „per arrivare in tempo” este…", options: ["finală implicită", "cauzală explicită", "temporală implicită"], answer: 0, explain: "Arată scopul și este la infinitiv: finală implicită." },
      { type: "tf", q: "În „Devo finire i compiti” sunt două propoziții.", answer: false, explain: "„Dovere” este modal: formează un singur predicat cu infinitivul." }
    ]
  }
});
