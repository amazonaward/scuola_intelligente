TOPIC('ro', {
  id: `m3-lat-motti-celebri`,
  title: `Maxime și expresii latine celebre`,
  intro: `<i>Veni, vidi, vici. Carpe diem. Alea iacta est.</i> Sunt expresii vechi de peste două mii de ani, dar le auzim și azi în filme, pe tatuaje, pe stemele orașelor și ale echipelor de fotbal. Să descoperim <b>cine</b> le-a rostit sau scris, <b>când</b>, ce <b>înseamnă cu adevărat</b> și cum să le <b>analizăm</b> cu gramatica latină pe care o cunoști. 🏛️💬`,
  minutes: 45,
  sections: [
    {
      type: `text`, title: `1. De ce sunt atât de celebre expresiile latine?`,
      html: `<p>Latina a fost secole la rând limba Romei, apoi a <b>Bisericii</b>, a <b>universităților</b>, a <b>științei</b> și a <b>dreptului</b> în toată Europa: până în secolul al XVIII-lea cărți de știință și filosofie se scriau adesea în latină. De aceea multe expresii au devenit patrimoniu comun.</p>
<p>Expresiile latine „merg" bine ca maxime pentru că latina este:</p>
<ul>
<li><b>concisă</b>: fără articole și adesea fără pronume, ajung puține cuvinte (<i>Veni, vidi, vici</i> = 3 cuvinte, în română 6: „Am venit, am văzut, am învins");</li>
<li><b>muzicală</b>: îi plac aliterațiile (aceleași sunete la început: <b>v</b>eni, <b>v</b>idi, <b>v</b>ici) și ritmurile;</li>
<li><b>solemnă</b>: dă propoziției un aer străvechi și autoritar.</li>
</ul>
<p>Aceste expresii se împart în <b>citate</b> (spuse sau scrise de un autor precis), <b>proverbe</b> (înțelepciune populară, adesea fără autor) și <b>devize</b> sau <b>maxime</b> (formule alese ca „program" de o persoană, o familie, un oraș, o școală).</p>`
    },
    {
      type: `text`, title: `2. Expresiile lui Iulius Caesar`,
      html: `<ul>
<li><b>Alea iacta est</b> = „Zarul a fost aruncat". După istoricul Suetoniu, Caesar a rostit-o pe <b>10 ianuarie 49 î.Hr.</b> trecând cu trupele sale râul <b>Rubicon</b>, o graniță pe care un general nu avea voie să o treacă înarmat. Era începutul războiului civil. Istoricul grec Plutarh povestește că a spus-o în greacă, citându-l pe comediograful Menandru. Azi se spune când iei o decizie din care nu mai există cale de întoarcere (ca „a trece Rubiconul").</li>
<li><b>Veni, vidi, vici</b> = „Am venit, am văzut, am învins". Caesar a scris-o în <b>47 î.Hr.</b> ca să anunțe Romei victoria fulgerătoare de la <b>Zela</b> (azi în Turcia) împotriva regelui Farnace al Pontului. Suetoniu povestește că era scrisă pe o tăbliță purtată în timpul triumfului său.</li>
<li><b>Tu quoque, Brute, fili mi!</b> = „Și tu, Brutus, fiul meu!". După tradiție, ultimele cuvinte ale lui Caesar, ucis la <b>15 martie 44 î.Hr.</b> (Idele lui Martie). În realitate Suetoniu redă o frază în <b>greacă</b> (<i>kai sy, teknon</i> = și tu, copile) și adaugă că alții spun că Caesar a murit <b>fără să spună nimic</b>. Versiunea latină cea mai celebră este cea a lui Shakespeare: <i>Et tu, Brute?</i></li>
</ul>`
    },
    {
      type: `3d`, title: `Expresiile celebre în spațiu și timp`,
      scene: `spacetime`,
      options: {
        lat: [35, 55], lon: [-5, 40], years: [-250, 1700],
        places: [
          { lat: 41.9, lon: 12.5, label: `Roma` },
          { lat: 44.1, lon: 12.4, label: `Rubicon` },
          { lat: 40.3, lon: 35.9, label: `Zela` },
          { lat: 41.49, lon: 13.81, label: `Monte Cassino` },
          { lat: 52.16, lon: 4.49, label: `Leiden` }
        ],
        events: [
          { id: `plauto`, lat: 41.9, lon: 12.5, year: -211, label: `Plaut: „lupus est homo homini"`, html: `În comedia <i>Asinaria</i> (circa 211 î.Hr.) Plaut scrie că omul este lup pentru om atunci când nu îl cunoaște. În 1600, filosoful englez Thomas Hobbes va face celebră forma <i>homo homini lupus</i>.` },
          { id: `rubi`, lat: 44.1, lon: 12.4, year: -49, label: `Alea iacta est`, html: `10 ianuarie 49 î.Hr.: Caesar trece Rubiconul cu o legiune, sfidând Senatul. Începe războiul civil împotriva lui Pompei.` },
          { id: `zela`, lat: 40.3, lon: 35.9, year: -47, label: `Veni, vidi, vici`, html: `August 47 î.Hr.: într-o bătălie de câteva ore Caesar îl înfrânge pe Farnace al II-lea al Pontului și anunță victoria în doar trei cuvinte.`, causes: [`rubi`] },
          { id: `idi`, lat: 41.9, lon: 12.5, year: -44, label: `Tu quoque, Brute`, html: `15 martie 44 î.Hr.: Caesar, acum dictator pe viață, este ucis în Senat de un grup de conspiratori, printre care și Brutus.`, causes: [`rubi`, `zela`] },
          { id: `orazio`, lat: 41.9, lon: 12.5, year: -23, label: `Horațiu: carpe diem`, html: `Poetul Horațiu publică primele trei cărți de <i>Ode</i>. În oda 1,11 o îndeamnă pe Leuconoe să „culeagă clipa". Este epoca lui Augustus, după ani de războaie civile.`, causes: [`idi`] },
          { id: `giov`, lat: 41.9, lon: 12.5, year: 120, label: `Iuvenal: mens sana in corpore sano`, html: `În <i>Satira a X-a</i> (începutul secolului al II-lea d.Hr.) Iuvenal spune că zeilor ar trebui să le cerem doar o minte sănătoasă într-un corp sănătos. În aceeași epocă îl ironizează pe poporul care vrea doar <i>panem et circenses</i>.` },
          { id: `bene`, lat: 41.49, lon: 13.81, year: 529, label: `Benedict: ora et labora`, html: `Pe la 529 sfântul Benedict întemeiază mănăstirea de la Monte Cassino. Regula sa organizează ziua între rugăciune și muncă: de aici deviza benedictină <i>ora et labora</i> (care ca formulă s-a răspândit însă mai târziu).` },
          { id: `gali`, lat: 41.9, lon: 12.5, year: 1633, label: `Galilei: „Eppur si muove"`, html: `Galileo Galilei este judecat la Roma și silit să renunțe la teoria lui Copernic. Fraza „Eppur si muove" (în italiană) este probabil o legendă născută după moartea lui.` },
          { id: `cart`, lat: 52.16, lon: 4.49, year: 1637, label: `Descartes: cogito, ergo sum`, html: `La Leiden apare <i>Discurs asupra metodei</i> de Descartes: „Je pense, donc je suis". Versiunea latină <i>cogito, ergo sum</i> apare în <i>Principia philosophiae</i> (1644). După condamnarea lui Galilei, Descartes renunțase să-și publice tratatul <i>Lumea</i>.`, causes: [`gali`] }
        ]
      },
      caption: `Baza este harta, înălțimea este timpul. Atinge un eveniment ca să citești istoria expresiei; săgețile leagă cauzele de efecte.`
    },
    {
      type: `decision`, title: `49 î.Hr.: Caesar în fața Rubiconului`,
      html: `<p>Ești <b>Iulius Caesar</b>. Ai cucerit Galia în opt ani de război și ești foarte iubit de soldații tăi. La Roma însă Senatul, condus de adversarii tăi și de Pompei, îți ordonă să <b>desfaci armata</b> și să te întorci ca simplu cetățean: fără protecția funcției, riști un proces și sfârșitul carierei politice.</p>
<p>Ești pe malul <b>Rubiconului</b>, pârâul care marchează granița Italiei: legea interzice unui general să îl treacă cu trupele.</p>`,
      question: `Tu ce ai fi făcut?`,
      options: [
        { label: `Să ascult: să desfac armata și să mă întorc singur la Roma`, outcome: `Ai fi respectat legea și ai fi evitat războiul civil, dar probabil dușmanii tăi te-ar fi judecat și te-ar fi exclus din politică, poate chiar exilat.` },
        { label: `Să trec râul cu legiunea`, outcome: `Devii un rebel împotriva Statului: se deschide un război civil în toată Mediterana. Dacă învingi, vei avea o putere uriașă; dacă pierzi, moartea.` },
        { label: `Să rămân la graniță și să mai negociez cu Senatul`, outcome: `Caesar propusese de fapt compromisuri (de exemplu ca și Pompei să-și lase armata), dar Senatul le respinsese. A aștepta ar fi dat dușmanilor timp să se organizeze.` }
      ],
      answer: 1,
      explain: `Caesar a trecut Rubiconul pe 10 ianuarie 49 î.Hr., rostind (după Suetoniu) „alea iacta est". Pompei și mulți senatori au fugit din Roma; Caesar a câștigat războiul civil (bătălia de la Pharsalos, 48 î.Hr.) și a devenit dictator. Puterea lui personală i-a neliniștit însă pe mulți senatori, care l-au ucis în 44 î.Hr. Alegerea lui a marcat sfârșitul Republicii romane: câțiva ani mai târziu fiul său adoptiv Octavian a devenit primul împărat, Augustus.`
    },
    {
      type: `quiz`, title: `Mini-test: expresiile lui Caesar`,
      questions: [
        { type: `mc`, q: `„Alea iacta est" se referă la…`, options: [`victoria de la Zela`, `trecerea Rubiconului`, `moartea lui Caesar`], answer: 1, explain: `49 î.Hr., începutul războiului civil.` },
        { type: `mc`, q: `Ce înseamnă „Veni, vidi, vici"?`, options: [`Am venit, am văzut, am învins`, `Vino, privește, învinge`, `Văd, vin, trăiesc`], answer: 0, explain: `Trei perfecte, persoana I singular.` },
        { type: `num`, q: `În ce an î.Hr. a fost ucis Iulius Caesar? (scrie doar numărul)`, answer: 44, tol: 0, explain: `La Idele lui Martie (15 martie) din 44 î.Hr.` }
      ]
    },
    {
      type: `text`, title: `3. Poeți și scriitori: înțelepciune pentru viață`,
      html: `<table>
<tr><th>Expresia</th><th>Sensul</th><th>Autorul și opera</th></tr>
<tr><td><b>Carpe diem</b> (quam minimum credula postero)</td><td>Culege ziua (încrezându-te cât mai puțin în ziua de mâine)</td><td>Horațiu, <i>Ode</i> 1,11 (23 î.Hr.)</td></tr>
<tr><td><b>Mens sana in corpore sano</b></td><td>Minte sănătoasă în corp sănătos</td><td>Iuvenal, <i>Satire</i> X</td></tr>
<tr><td><b>Panem et circenses</b></td><td>Pâine și jocuri de circ: ce cere poporul ca să stea liniștit</td><td>Iuvenal, <i>Satire</i> X</td></tr>
<tr><td><b>Audentes fortuna iuvat</b></td><td>Norocul îi ajută pe cei îndrăzneți</td><td>Vergiliu, <i>Eneida</i> X, 284</td></tr>
<tr><td><b>Omnia vincit amor</b></td><td>Iubirea învinge totul</td><td>Vergiliu, <i>Bucolice</i> X, 69</td></tr>
<tr><td><b>Homo sum, humani nihil a me alienum puto</b></td><td>Sunt om: nimic din ce este omenesc nu îmi este străin</td><td>Terențiu, <i>Heautontimorumenos</i> (163 î.Hr.)</td></tr>
<tr><td><b>Festina lente</b></td><td>Grăbește-te încet</td><td>deviza lui Augustus (relatată de Suetoniu, în greacă)</td></tr>
<tr><td><b>Si vis pacem, para bellum</b></td><td>Dacă vrei pace, pregătește războiul</td><td>adaptare după Vegetius (secolele IV-V d.Hr.)</td></tr>
</table>
<p>⚠️ Atenție la sensul adevărat: <i>Mens sana in corpore sano</i> pentru Iuvenal <b>nu</b> era o îndemnare la sport, ci un sfat despre ce să ceri zeilor în rugăciuni (în loc de bogății și putere). <i>Carpe diem</i> nu înseamnă „fă tot ce vrei", ci „trăiește bine prezentul, pentru că viitorul este nesigur".</p>`
    },
    {
      type: `text`, title: `4. Proverbe, drept, știință: expresiile de fiecare zi`,
      html: `<ul>
<li><b>Verba volant, scripta manent</b> = cuvintele zboară, scrisul rămâne (proverb medieval).</li>
<li><b>Errare humanum est, perseverare autem diabolicum</b> = a greși este omenește, a stărui (în greșeală) este diavolesc (medieval, inspirat de Seneca și de sfântul Augustin).</li>
<li><b>Repetita iuvant</b> = lucrurile repetate folosesc (deviza perfectă pentru cine studiază!).</li>
<li><b>Dura lex, sed lex</b> = legea este aspră, dar este lege.</li>
<li><b>Per aspera ad astra</b> = prin greutăți către stele.</li>
<li><b>Ora et labora</b> = roagă-te și muncește (deviza călugărilor benedictini).</li>
<li><b>Cogito, ergo sum</b> = gândesc, deci exist (Descartes).</li>
<li><b>Memento mori</b> = adu-ți aminte că vei muri (îndemn la smerenie).</li>
</ul>
<p>Și în viața de zi cu zi: <i>ad hoc</i> (anume pentru asta), <i>alter ego</i> (un alt eu), <i>lapsus</i> (alunecare), <i>ultimatum</i>, <i>gratis</i> (din <i>gratiis</i> = din bunăvoință, fără plată), <i>bis</i> (de două ori), <i>post scriptum</i> (P.S.), <i>et cetera</i> (etc.).</p>`
    },
    {
      type: `widget`, title: `Potrivește expresia cu sensul`,
      widget: `match`,
      options: { pairs: [
        [`Carpe diem`, `Trăiește clipa`],
        [`Alea iacta est`, `Zarul a fost aruncat`],
        [`Verba volant, scripta manent`, `Cuvintele zboară, scrisul rămâne`],
        [`Mens sana in corpore sano`, `Minte sănătoasă în corp sănătos`],
        [`Audentes fortuna iuvat`, `Norocul îi ajută pe cei îndrăzneți`],
        [`Festina lente`, `Grăbește-te încet`],
        [`Repetita iuvant`, `Repetiția ajută`]
      ] },
      caption: `Încearcă fără să te uiți în tabele!`
    },
    {
      type: `text`, title: `5. Analizăm expresiile cu gramatica`,
      html: `<p>Acum că știi cazurile și verbele, poți „dezmembra" devizele:</p>
<ul>
<li><b>Carpe diem</b>: <i>carpe</i> = imperativ de la <i>carpo, carpis, carpĕre</i> (conj. a III-a: a culege); <i>diem</i> = acuzativ singular de la <i>dies</i> (declinarea a V-a) ➜ complement direct: „culege ziua".</li>
<li><b>Veni, vidi, vici</b>: trei <b>perfecte</b> (pers. I sing.) de la <i>venio</i> (a IV-a), <i>video</i> (a II-a), <i>vinco</i> (a III-a). Niciun pronume, nicio conjuncție (se numește <b>asindet</b>): efectul este viteza, exact ca în bătălie!</li>
<li><b>Verba volant, scripta manent</b>: <i>verba</i> (cuvintele) și <i>scripta</i> (scrisele) sunt nominative plural neutre ➜ subiecte; <i>volant</i> (conj. I) și <i>manent</i> (conj. a II-a) sunt prezente la persoana a III-a plural.</li>
<li><b>Audentes fortuna iuvat</b>: <i>fortuna</i> = nominativ (subiect, decl. I); <i>audentes</i> = acuzativ plural (cei îndrăzneți, complement direct); <i>iuvat</i> = ajută (conj. I). Subiectul stă la mijloc: în latină ordinea este liberă!</li>
<li><b>Cogito, ergo sum</b>: <i>cogito</i> = gândesc (conj. I), <i>ergo</i> = deci, <i>sum</i> = exist, sunt (verbul pe care l-ai studiat deja!).</li>
</ul>`
    },
    {
      type: `svg`, title: `Dezmembrăm „Audentes fortuna iuvat"`,
      caption: `Desinența arată funcția: subiectul „fortuna" stă la mijloc, dar rămâne subiect.`,
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#fffbeb"/>
<rect x="30" y="40" width="200" height="70" rx="12" fill="#3b82f6"/>
<rect x="250" y="40" width="160" height="70" rx="12" fill="#ef4444"/>
<rect x="430" y="40" width="140" height="70" rx="12" fill="#334155"/>
<text x="130" y="85" font-size="28" fill="#fff" text-anchor="middle" font-weight="bold">audent<tspan fill="#fde047">es</tspan></text>
<text x="330" y="85" font-size="28" fill="#fff" text-anchor="middle" font-weight="bold">fortun<tspan fill="#fde047">a</tspan></text>
<text x="500" y="85" font-size="28" fill="#fff" text-anchor="middle" font-weight="bold">iuva<tspan fill="#fde047">t</tspan></text>
<text x="130" y="140" font-size="15" fill="#1d4ed8" text-anchor="middle" font-weight="bold">ACUZATIV PLURAL</text>
<text x="330" y="140" font-size="15" fill="#b91c1c" text-anchor="middle" font-weight="bold">NOMINATIV</text>
<text x="500" y="140" font-size="15" fill="#334155" text-anchor="middle" font-weight="bold">PERS. III SING. PREZENT</text>
<text x="130" y="165" font-size="15" fill="#334155" text-anchor="middle">complement direct</text>
<text x="330" y="165" font-size="15" fill="#334155" text-anchor="middle">subiect</text>
<text x="500" y="165" font-size="15" fill="#334155" text-anchor="middle">predicat</text>
<path d="M130 180 C 130 230, 470 210, 470 235" stroke="#3b82f6" stroke-width="3" fill="none"/>
<path d="M330 180 C 330 210, 130 210, 130 235" stroke="#ef4444" stroke-width="3" fill="none"/>
<path d="M500 180 C 500 210, 300 215, 300 235" stroke="#334155" stroke-width="3" fill="none"/>
<text x="300" y="265" font-size="20" fill="#0f172a" text-anchor="middle" font-weight="bold">Norocul   ajută   pe cei îndrăzneți</text>
</svg>`
    },
    {
      type: `example`, title: `Exemplu practic: devizele din jurul nostru`,
      html: `<ul>
<li>Stema orașului <b>Paris</b>: <i>Fluctuat nec mergitur</i> = este zdruncinat de valuri, dar nu se scufundă.</li>
<li><b>Jocurile Olimpice</b>: <i>Citius, altius, fortius</i> = mai repede, mai sus, mai tare (propusă de Pierre de Coubertin în 1894; din 2021 se adaugă <i>communiter</i>, „împreună").</li>
<li><b>Statele Unite</b>: <i>E pluribus unum</i> = din multe, unul (statele care formează o singură națiune), scrisă pe monede.</li>
<li><b>Uniunea Europeană</b>: <i>In varietate concordia</i> = unită în diversitate.</li>
<li>Marca sportivă <b>ASICS</b> este acronimul lui <i>Anima sana in corpore sano</i>!</li>
</ul>`
    },
    {
      type: `example`, title: `Exemplu practic: folosim o deviză într-o compunere`,
      html: `<p>Un citat latin, folosit bine, face mai convingător un text argumentativ. De exemplu, într-o compunere despre importanța învățării:</p>
<p><i>„Cum spuneau romanii, <b>repetita iuvant</b>: să repeți puțin în fiecare zi este mai util decât să înveți totul în seara dinaintea lucrării."</i></p>
<p>Reguli de aur: scrie expresia cu <b>litere cursive</b> (sau între ghilimele), <b>tradu-o</b> sau explic-o imediat după, și asigură-te că îi cunoști <b>sensul adevărat</b> (și autorul, dacă există).</p>`
    },
    {
      type: `curiosity`, title: `Știai că… multe expresii „ale lui Caesar" nu sunt chiar ale lui?`,
      html: `<p><i>Alea iacta est</i> era un proverb grecesc pe care Caesar (după Plutarh) l-a citat de la comediograful Menandru. <i>Tu quoque, Brute</i> este o invenție ulterioară: sursele vechi vorbesc despre o frază în greacă sau despre tăcere. Iar ordinea din Suetoniu este de fapt <i>iacta alea est</i>! Și „<i>Eppur si muove</i>" al lui Galilei apare pentru prima oară într-un tablou și într-o carte scrise la peste o sută de ani după proces. Morala: verifică întotdeauna sursele, chiar și pentru citatele celebre!</p>`
    },
    {
      type: `curiosity`, title: `Știai că… jurămintele medicilor și fotbalul vorbesc latinește?`,
      html: `<p>Principiul medicilor <i>Primum non nocere</i> (mai întâi, să nu faci rău) se inspiră din jurământul lui Hipocrate. Multe echipe de fotbal englezești au devize latine: <b>Tottenham</b> are <i>Audere est facere</i> (a îndrăzni înseamnă a face) iar <b>Everton</b> <i>Nil satis nisi optimum</i> (nimic nu-i destul în afară de ce e mai bun). Iar deviza statului Kansas (SUA) este chiar <i>Ad astra per aspera</i>!</p>`
    },
    {
      type: `remember`, title: `De ținut minte`,
      html: `<ul>
<li>Caesar: <b>Alea iacta est</b> (Rubicon, 49 î.Hr.), <b>Veni, vidi, vici</b> (Zela, 47 î.Hr.); <b>Tu quoque, Brute</b> este tradiție (44 î.Hr.).</li>
<li>Horațiu: <b>Carpe diem</b>. Iuvenal: <b>Mens sana in corpore sano</b>, <b>Panem et circenses</b>. Vergiliu: <b>Audentes fortuna iuvat</b>.</li>
<li>Înainte de a folosi un citat: <b>sensul adevărat</b>, <b>autorul</b>, <b>contextul</b>.</li>
<li>Expresiile se analizează ca orice propoziție latină: verb, subiect (nominativ), complement direct (acuzativ)…</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Alte moduri de a le învăța`,
      intro: `Expresiile latine se rețin mai bine dacă le legi de imagini, povești și limbi pe care le cunoști.`,
      tabs: [
        {
          label: `🃏 Flashcards`,
          html: `<p>Citește deviza latină, încearcă s-o traduci și apoi întoarce cartonașul.</p>`,
          widget: `flashcards`,
          options: { cards: [
            { front: `Veni, vidi, vici`, back: `Am venit, am văzut, am învins (Caesar, 47 î.Hr.)` },
            { front: `Carpe diem`, back: `Culege ziua (Horațiu)` },
            { front: `Panem et circenses`, back: `Pâine și jocuri de circ (Iuvenal)` },
            { front: `Per aspera ad astra`, back: `Prin greutăți către stele` },
            { front: `Cogito, ergo sum`, back: `Gândesc, deci exist (Descartes)` },
            { front: `Dura lex, sed lex`, back: `Legea este aspră, dar este lege` },
            { front: `Memento mori`, back: `Adu-ți aminte că vei muri` },
            { front: `E pluribus unum`, back: `Din multe, unul (deviza SUA)` }
          ] }
        },
        {
          label: `🖼️ Benzi desenate în minte`,
          html: `<p>Asociază fiecărei expresii o imagine caraghioasă și precisă: memoria ține minte mai bine imaginile decât cuvintele.</p>
<ul>
<li>🎲 <b>Alea iacta est</b>: Caesar care aruncă un zar uriaș într-un râu.</li>
<li>🍞🎪 <b>Panem et circenses</b>: o pâine imensă așezată pe treptele Circului Maxim.</li>
<li>🐢🏃 <b>Festina lente</b>: o broască țestoasă cu pantofi de alergare.</li>
<li>🧠💪 <b>Mens sana in corpore sano</b>: un creier care face haltere.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#e0f2fe"/>
<path d="M0 150 Q 150 120 300 150 T 600 150 L600 220 L0 220 Z" fill="#38bdf8"/>
<rect x="250" y="70" width="80" height="80" rx="10" fill="#ffffff" stroke="#0f172a" stroke-width="4" transform="rotate(-15 290 110)"/>
<circle cx="270" cy="95" r="7" fill="#0f172a"/><circle cx="305" cy="115" r="7" fill="#0f172a"/><circle cx="285" cy="130" r="7" fill="#0f172a"/>
<text x="110" y="120" font-size="64" text-anchor="middle">🤴</text>
<text x="300" y="40" font-size="22" fill="#0f172a" text-anchor="middle" font-weight="bold">ALEA IACTA EST!</text>
<text x="470" y="140" font-size="18" fill="#075985" font-weight="bold">Rubicon</text>
<text x="300" y="205" font-size="15" fill="#ffffff" text-anchor="middle" font-weight="bold">49 î.Hr. – zarul a fost aruncat: nu mai e cale de întoarcere</text>
</svg>`
        },
        {
          label: `🌍 Expresii surori în alte limbi`,
          html: `<p>Multe limbi au proverbe cu același sens ca devizele latine:</p>
<ul>
<li><i>Festina lente</i> ➜ 🇷🇴 „Graba strică treaba"; 🇬🇧 <i>More haste, less speed</i>; 🇯🇵 <i>Isogaba maware</i> (dacă te grăbești, ocolește).</li>
<li><i>Repetita iuvant</i> ➜ 🇷🇴 „Repetiția este mama învățăturii"; 🇬🇧 <i>Practice makes perfect</i>; 🇷🇺 <i>Повторение — мать учения</i>.</li>
<li><i>Audentes fortuna iuvat</i> ➜ 🇬🇧 <i>Fortune favours the bold</i>; 🇫🇷 <i>La fortune sourit aux audacieux</i>.</li>
<li><i>Verba volant…</i> ➜ 🇷🇴 „Ce e scris rămâne" (și în italiană: „Carta canta").</li>
</ul>`
        },
        {
          label: `⏳ Axa timpului`,
          html: `<p>Pune expresiile în ordine cronologică: în ce epocă s-a născut fiecare?</p>`,
          widget: `timeline`,
          options: { events: [
            { year: -211, label: `Plaut: lupus est homo homini`, icon: `🐺` },
            { year: -49, label: `Alea iacta est`, icon: `🎲` },
            { year: -47, label: `Veni, vidi, vici`, icon: `⚔️` },
            { year: -23, label: `Horațiu: Carpe diem`, icon: `🌹` },
            { year: 120, label: `Iuvenal: Mens sana…`, icon: `🧠` },
            { year: 1644, label: `Descartes: Cogito, ergo sum`, icon: `💭` },
            { year: 1894, label: `Citius, altius, fortius`, icon: `🏅` }
          ], unit: `ani` }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Harta: de unde vin expresiile latine`,
      nodes: [
        { id: `lat`, label: `Latina`, x: 50, y: 6, color: `#64748b`, html: `Limba Romei, apoi limba comună a culturii europene.`, why: `După sfârșitul Imperiului de Apus (476 d.Hr.) latina a rămas limba Bisericii, a școlilor și a universităților (Bologna, 1088) și a științei până în secolul al XVIII-lea: Newton a scris în latină <i>Principia</i> (1687).` },
        { id: `stor`, label: `Istorici`, x: 15, y: 30, color: `#ef4444`, html: `Suetoniu, Plutarh: transmit cuvintele celor puternici.`, why: `Suetoniu a scris <i>Vieți ale celor doisprezece Cezari</i> pe la 121 d.Hr., la peste 150 de ani după Caesar, folosind arhive și povestiri: de aceea unele expresii sunt nesigure.` },
        { id: `cesare`, label: `Iulius Caesar`, x: 15, y: 58, color: `#dc2626`, html: `Alea iacta est, Veni vidi vici.`, why: `Caesar era și un mare scriitor (<i>De bello Gallico</i>), celebru pentru stilul sobru și clar: frazele scurte și puternice erau „semnătura" lui.` },
        { id: `poeti`, label: `Poeți`, x: 50, y: 30, color: `#a855f7`, html: `Horațiu, Vergiliu, Iuvenal, Terențiu.`, why: `Poezia latină folosește ritmul silabelor lungi și scurte (metrica): versurile scurte și ritmate se rețin ușor, iar multe expresii sunt bucăți de vers.` },
        { id: `orazio`, label: `Carpe diem`, x: 40, y: 58, color: `#c084fc`, html: `Horațiu, Ode 1,11.`, why: `Horațiu urma filosofia lui <b>Epicur</b>: ca să fii fericit trebuie să te bucuri cu măsură de prezent, fără neliniște pentru un viitor pe care nu îl putem controla.` },
        { id: `giov`, label: `Mens sana…`, x: 62, y: 58, color: `#9333ea`, html: `Iuvenal, Satira X.`, why: `Iuvenal scria <b>satire</b>, critici țepoase ale societății romane: fraza era un îndemn să-ți dorești lucruri simple, nu bogăție și putere.` },
        { id: `med`, label: `Evul Mediu și Biserica`, x: 85, y: 30, color: `#0ea5e9`, html: `Ora et labora, Errare humanum est, Verba volant…`, why: `În mănăstiri și universități latina era limba de fiecare zi: au apărut proverbe noi, scurte și rimate, ușor de memorat.` },
        { id: `oggi`, label: `Devize de azi`, x: 50, y: 88, color: `#22c55e`, html: `Olimpiade, state, orașe, echipe, școli.`, why: `Latina nu mai aparține unei singure națiuni: de aceea este „neutră" și solemnă, perfectă pentru devizele unor instituții internaționale, precum UE sau Olimpiadele.` }
      ],
      edges: [
        [`lat`, `stor`, `surse`], [`lat`, `poeti`, `surse`], [`lat`, `med`, `continuă`], [`stor`, `cesare`, `povestesc`],
        [`poeti`, `orazio`, `Horațiu`], [`poeti`, `giov`, `Iuvenal`], [`med`, `oggi`, `moștenire`], [`cesare`, `oggi`, `încă citat`]
      ]
    },
    {
      type: `quiz`, title: `Mini-test: autori și sensuri`,
      questions: [
        { type: `mc`, q: `Cine a scris „Carpe diem"?`, options: [`Vergiliu`, `Horațiu`, `Caesar`], answer: 1, explain: `Horațiu, Ode 1,11.` },
        { type: `tf`, q: `Pentru Iuvenal „Mens sana in corpore sano" era o îndemnare la sport.`, answer: false, explain: `Era un sfat despre ce să ceri zeilor: sănătatea trupului și a minții în loc de bogăție și putere.` },
        { type: `text`, q: `Completează: „Verba volant, scripta ___".`, answer: [`manent`], explain: `Cuvintele zboară, scrisul rămâne.` }
      ]
    }
  ],
  glossary: [
    { t: `Deviză`, d: `Frază scurtă care exprimă un ideal sau un program (al unei persoane, oraș, instituții).` },
    { t: `Citat`, d: `Frază preluată de la un autor sau dintr-o operă precisă.` },
    { t: `Proverb`, d: `Frază de înțelepciune populară, de obicei fără autor.` },
    { t: `Asindet`, d: `Enumerare de cuvinte fără conjuncții: veni, vidi, vici.` },
    { t: `Aliterație`, d: `Repetarea acelorași sunete la începutul unor cuvinte apropiate.` },
    { t: `Rubicon`, d: `Râu din Romagna, graniță a Italiei romane, trecut de Caesar în 49 î.Hr.` },
    { t: `Idele lui Martie`, d: `15 martie în calendarul roman: ziua uciderii lui Caesar (44 î.Hr.).` },
    { t: `Satiră`, d: `Gen literar care critică ironic defectele societății.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `„Veni, vidi, vici" anunța victoria lui Caesar la…`, options: [`Pharsalos`, `Zela`, `Alesia`], answer: 1, explain: `Zela, 47 î.Hr., împotriva lui Farnace al Pontului.` },
      { type: `mc`, q: `„Alea iacta est" înseamnă…`, options: [`Zarul a fost aruncat`, `Soarta este potrivnică`, `Râul este lat`], answer: 0, explain: `Alea = zar, iacta est = a fost aruncat.` },
      { type: `num`, q: `În ce an î.Hr. a trecut Caesar Rubiconul?`, answer: 49, tol: 0, explain: `Pe 10 ianuarie 49 î.Hr.` },
      { type: `order`, q: `Pune în ordine cronologică.`, items: [`Alea iacta est (Rubicon)`, `Veni, vidi, vici (Zela)`, `Moartea lui Caesar la Idele lui Martie`, `Horațiu publică Odele (Carpe diem)`, `Descartes: Cogito, ergo sum`], explain: `49 î.Hr., 47 î.Hr., 44 î.Hr., 23 î.Hr., 1637/1644 d.Hr.` },
      { type: `mc`, q: `„Panem et circenses" critică…`, options: [`un popor care se mulțumește cu mâncare și spectacole`, `brutarii romani`, `cursele de cai`], answer: 0, explain: `Iuvenal acuză poporul că nu se mai interesează de politică.` },
      { type: `text`, q: `Tradu „Carpe diem".`, answer: [`culege ziua`, `culege clipa`, `trăiește clipa`, `bucură-te de clipă`, `prinde ziua`, `prinde clipa`], explain: `carpe = culege (imperativ), diem = ziua (acuzativ).` },
      { type: `mc`, q: `În „Carpe diem", „diem" este…`, options: [`nominativ, subiect`, `acuzativ, complement direct`, `ablativ, timp`], answer: 1, explain: `Acuzativ singular de la dies (declinarea a V-a).` },
      { type: `tf`, q: `„Tu quoque, Brute, fili mi" este cu siguranță fraza rostită de Caesar.`, answer: false, explain: `Suetoniu redă o frază în greacă sau tăcerea; versiunea latină este tradițională.` },
      { type: `mc`, q: `„Cogito, ergo sum" aparține lui…`, options: [`Cicero`, `Descartes`, `Galilei`], answer: 1, explain: `Filosoful francez René Descartes, secolul al XVII-lea.` },
      { type: `mc`, q: `Care deviză aparține Jocurilor Olimpice?`, options: [`E pluribus unum`, `Citius, altius, fortius`, `Fluctuat nec mergitur`], answer: 1, explain: `Mai repede, mai sus, mai tare (din 2021 + communiter).` },
      { type: `text`, q: `Completează deviza lui Vergiliu: „Audentes fortuna ___" (ajută).`, answer: [`iuvat`, `juvat`], explain: `iuvat = ajută (pers. a III-a sing., conjugarea I).` },
      { type: `mc`, q: `„Festina lente" înseamnă…`, options: [`Serbează încet`, `Grăbește-te încet`, `Cel lent câștigă sărbătoarea`], answer: 1, explain: `Acționează repede, dar fără grabă nesăbuită: deviza lui Augustus.` }
    ]
  }
});
