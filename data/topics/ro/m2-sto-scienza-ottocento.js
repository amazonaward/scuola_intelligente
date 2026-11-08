TOPIC('ro', {
  id: `m2-sto-scienza-ottocento`,
  title: `Descoperirile științifice ale secolului al XIX-lea`,
  intro: `Secolul al XIX-lea este secolul în care știința schimbă viața tuturor: din <b>pila lui Volta</b> se naște epoca <b>electricității</b>; <b>Darwin</b> explică cum evoluează viețuitoarele; <b>Pasteur</b> și <b>Koch</b> descoperă microbii care provoacă bolile; Mendeleev pune ordine în elementele chimice. Multe lucruri pe care azi le considerăm firești, cum ar fi spălatul pe mâini sau aprinderea luminii, vin de aici.`,
  minutes: 40,
  sections: [
    {
      type: `text`,
      title: `1. De ce tocmai secolul al XIX-lea?`,
      html: `<p>În secolul al XIX-lea știința devine o <b>profesie</b>: apar laboratoare în universități, reviste științifice, congrese internaționale. <b>Metoda experimentală</b> a lui Galilei (observi, formulezi o ipoteză, o verifici prin experimente, tragi concluzii) este aplicată unor domenii noi: electricitate, chimie, biologie, medicină.</p>
<p>Instrumentele se îmbunătățesc (microscoape mai puternice, termometre, balanțe precise), iar industria cere invenții utile. Știința, tehnica și industria se împing una pe alta: este una dintre rădăcinile <b>celei de-a doua revoluții industriale</b>.</p>`
    },
    {
      type: `text`,
      title: `2. Electricitatea: de la o broască la un bec`,
      html: `<ol>
<li><b>Galvani</b> (Bologna, anii 1780-90) observă că picioarele de broască se contractă atunci când sunt atinse de două metale diferite: crede că e vorba de o „electricitate animală”.</li>
<li><b>Alessandro Volta</b> (Pavia) înțelege că electricitatea apare din contactul dintre <b>două metale</b> separate de un lichid. În <b>1800</b> anunță <b>pila</b>: discuri de zinc și de cupru așezate alternativ, separate de pânză îmbibată în apă sărată. Este primul generator de <b>curent continuu</b>. De la numele lui vine unitatea de măsură numită <b>volt</b>.</li>
<li>În <b>1820</b> danezul <b>Ørsted</b> descoperă că un curent electric mișcă acul unei busole: electricitatea și magnetismul sunt legate.</li>
<li>În <b>1831</b> englezul <b>Michael Faraday</b> descoperă <b>inducția electromagnetică</b>: mișcând un magnet într-o bobină de sârmă se produce curent. Este principiul <b>dinamului</b> și al generatoarelor din centralele electrice de azi.</li>
<li>În <b>1865</b> scoțianul <b>James Clerk Maxwell</b> rezumă totul în patru ecuații și prevede <b>undele electromagnetice</b>: lumina este una dintre ele! <b>Hertz</b> le produce în laborator în 1887; Marconi le va folosi pentru radio.</li>
</ol>
<p>Aplicații: <b>telegraful</b> lui Morse (1844), telefonul (1876), becul (1879), motorul electric.</p>`
    },
    {
      type: `widget`,
      title: `Cum este făcută pila lui Volta`,
      widget: `labelDiagram`,
      options: {
        svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<rect x="230" y="40" width="140" height="18" fill="#b45309"/>
<rect x="230" y="58" width="140" height="8" fill="#93c5fd"/>
<rect x="230" y="66" width="140" height="18" fill="#9ca3af"/>
<rect x="230" y="84" width="140" height="18" fill="#b45309"/>
<rect x="230" y="102" width="140" height="8" fill="#93c5fd"/>
<rect x="230" y="110" width="140" height="18" fill="#9ca3af"/>
<rect x="230" y="128" width="140" height="18" fill="#b45309"/>
<rect x="230" y="146" width="140" height="8" fill="#93c5fd"/>
<rect x="230" y="154" width="140" height="18" fill="#9ca3af"/>
<rect x="230" y="172" width="140" height="18" fill="#b45309"/>
<rect x="230" y="190" width="140" height="8" fill="#93c5fd"/>
<rect x="230" y="198" width="140" height="18" fill="#9ca3af"/>
<rect x="210" y="216" width="180" height="20" fill="#78350f"/>
<path d="M370 49 C470 49 470 120 500 120" stroke="#dc2626" stroke-width="5" fill="none"/>
<path d="M370 207 C470 207 470 160 500 160" stroke="#1d4ed8" stroke-width="5" fill="none"/>
<circle cx="510" cy="140" r="24" fill="#fde047" stroke="#854d0e" stroke-width="3"/>
<text x="300" y="280" font-size="16" text-anchor="middle">cupru, pânză cu apă sărată, zinc… repetate</text>
</svg>`,
        spots: [
          { x: 300, y: 49, label: `Disc de cupru` },
          { x: 300, y: 62, label: `Pânză îmbibată în apă sărată` },
          { x: 300, y: 75, label: `Disc de zinc` },
          { x: 300, y: 226, label: `Bază de lemn` },
          { x: 450, y: 70, label: `Fir conductor` },
          { x: 510, y: 140, label: `Bec (de azi)` }
        ]
      },
      caption: `Fiecare „pereche” cupru-pânză-zinc dă o tensiune mică; punându-le una peste alta, tensiunile se adună. Pe vremea lui Volta becul nu exista încă: se simțea șocul sau se vedeau scântei.`
    },
    {
      type: `quiz`,
      title: `Mini-test: electricitatea`,
      questions: [
        { type: `mc`, q: `Ce a anunțat Alessandro Volta în 1800?`, options: [`Becul`, `Pila`, `Telegraful`], answer: 1, explain: `Pila, primul generator de curent continuu.` },
        { type: `text`, q: `Care om de știință englez a descoperit inducția electromagnetică în 1831?`, answer: [`faraday`, `michael faraday`], explain: `Michael Faraday: un magnet în mișcare într-o bobină produce curent.` },
        { type: `tf`, q: `Potrivit lui Maxwell, lumina este o undă electromagnetică.`, answer: true, explain: `Ecuațiile lui (1865) arată că lumina, undele radio și razele X sunt de aceeași natură.` }
      ]
    },
    {
      type: `text`,
      title: `3. Darwin și evoluția`,
      html: `<p>În <b>1831</b> tânărul naturalist englez <b>Charles Darwin</b> pornește pe nava <b>Beagle</b> într-o călătorie în jurul lumii care durează cinci ani. În <b>1835</b>, în insulele <b>Galápagos</b> (Oceanul Pacific), observă că cintezele din insule diferite au ciocuri diferite, potrivite pentru hrana fiecărei insule.</p>
<p>După mai bine de douăzeci de ani de studiu publică <b>Originea speciilor</b> (<b>1859</b>). Teoria lui, <b>evoluția prin selecție naturală</b>, se poate rezuma în patru pași:</p>
<ol>
<li><b>Variabilitatea</b>: indivizii unei specii sunt toți puțin diferiți între ei.</li>
<li><b>Ereditatea</b>: multe caracteristici trec de la părinți la copii.</li>
<li><b>Lupta pentru supraviețuire</b>: se nasc mai mulți indivizi decât pot supraviețui.</li>
<li><b>Selecția</b>: cei cu caracteristici mai potrivite mediului supraviețuiesc și se înmulțesc mai mult. În foarte multe generații specia se schimbă.</li>
</ol>
<p>Și <b>Alfred Russel Wallace</b> a ajuns la aceeași idee, independent: cei doi și-au prezentat împreună teoriile în 1858. Teoria a făcut scandal, pentru că includea și omul: Darwin susținea că omul și maimuțele antropoide au <b>strămoși comuni</b> (nu că omul „se trage din maimuță”).</p>
<p>Darwin nu știa <i>cum</i> se moștenesc caracterele. Răspunsul îl găsise, fără ca Darwin să știe, călugărul <b>Gregor Mendel</b>: încrucișând mii de plante de mazăre la Brno, în <b>1865</b> a descoperit legile eredității, baza <b>geneticii</b>. Lucrarea lui a fost redescoperită abia în 1900.</p>`
    },
    {
      type: `svg`,
      title: `Cintezele din Galápagos`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfdf5"/>
<text x="300" y="28" font-size="18" text-anchor="middle" font-weight="bold" fill="#065f46">Ciocuri diferite pentru hrană diferită</text>
<ellipse cx="110" cy="140" rx="55" ry="40" fill="#a16207"/>
<circle cx="150" cy="110" r="25" fill="#a16207"/>
<circle cx="157" cy="104" r="4" fill="#111827"/>
<polygon points="172,100 205,110 172,122" fill="#1f2937"/>
<text x="110" y="215" font-size="15" text-anchor="middle" font-weight="bold">cioc gros</text>
<text x="110" y="237" font-size="14" text-anchor="middle">sparge semințe tari</text>
<ellipse cx="300" cy="140" rx="55" ry="40" fill="#78716c"/>
<circle cx="340" cy="110" r="25" fill="#78716c"/>
<circle cx="347" cy="104" r="4" fill="#111827"/>
<polygon points="362,106 410,112 362,116" fill="#1f2937"/>
<text x="300" y="215" font-size="15" text-anchor="middle" font-weight="bold">cioc subțire</text>
<text x="300" y="237" font-size="14" text-anchor="middle">prinde insecte</text>
<ellipse cx="490" cy="140" rx="55" ry="40" fill="#57534e"/>
<circle cx="530" cy="110" r="25" fill="#57534e"/>
<circle cx="537" cy="104" r="4" fill="#111827"/>
<polygon points="552,104 590,118 552,118" fill="#1f2937"/>
<text x="490" y="215" font-size="15" text-anchor="middle" font-weight="bold">cioc lung</text>
<text x="490" y="237" font-size="14" text-anchor="middle">flori de cactus</text>
<text x="300" y="280" font-size="15" text-anchor="middle" fill="#065f46">Un strămoș comun, adaptări diferite pe insule diferite</text>
</svg>`,
      caption: `Desen simplificat: în Galápagos trăiesc peste douăsprezece specii de cinteze, descendente dintr-un strămoș venit de pe continent.`
    },
    {
      type: `text`,
      title: `4. Revoluția medicinei`,
      html: `<p>La începutul secolului al XIX-lea medicii nu știau că multe boli sunt provocate de <b>microorganisme</b>. Se credea în „miasme”, aerul rău. Operațiile se făceau fără anestezie și fără spălarea mâinilor. Iată cum s-a schimbat totul:</p>
<ul>
<li><b>1796</b> – <b>Edward Jenner</b> creează primul <b>vaccin</b> împotriva variolei, folosind variola vacilor (de aici cuvântul „vaccin”, de la <i>vacă</i>).</li>
<li><b>1846</b> – La Boston este operat pentru prima dată în public un pacient adormit cu <b>eter</b>: se naște <b>anestezia</b>.</li>
<li><b>1847</b> – La Viena, <b>Ignaz Semmelweis</b> îi obligă pe medici să-și spele mâinile cu o soluție de clor: moartea prin febră a lăuzelor scade brusc.</li>
<li><b>1854</b> – La Londra, <b>John Snow</b> demonstrează cu o hartă că holera se răspândește prin apa unei fântâni poluate. În același an, la Florența, <b>Filippo Pacini</b> observă la microscop bacteria holerei.</li>
<li><b>Anii 1860</b> – <b>Louis Pasteur</b> demonstrează că microbii nu apar „din nimic” și că provoacă fermentații și boli (<b>teoria germenilor</b>). Inventează <b>pasteurizarea</b>: încălzirea unui lichid pentru a ucide microbii. În <b>1885</b> salvează un băiat mușcat de un câine turbat, cu vaccinul său.</li>
<li><b>1867</b> – <b>Joseph Lister</b> folosește acidul fenic pentru a dezinfecta rănile și instrumentele: se naște <b>antisepsia</b>.</li>
<li><b>1882</b> – <b>Robert Koch</b> descoperă bacteria <b>tuberculozei</b>; 24 martie este și azi Ziua mondială de luptă împotriva tuberculozei.</li>
<li><b>1895</b> – <b>Wilhelm Röntgen</b> descoperă <b>razele X</b>: pentru prima dată se vede în interiorul corpului fără a-l tăia.</li>
</ul>`
    },
    {
      type: `text`,
      title: `5. Chimia și atomul`,
      html: `<p>În <b>1808</b> John <b>Dalton</b> propune ideea că materia este făcută din <b>atomi</b>, diferiți pentru fiecare element. În <b>1869</b> rusul <b>Dmitri Mendeleev</b> ordonează cele 63 de elemente cunoscute atunci după masă și proprietăți: se naște <b>tabelul periodic</b>. Mendeleev lasă <b>căsuțe goale</b> și prevede proprietățile elementelor lipsă: galiul (descoperit în 1875), scandiul (1879) și germaniul (1886) îi confirmă previziunile!</p>
<p>La sfârșitul secolului se descoperă că atomul nu este indivizibil: <b>Becquerel</b> descoperă <b>radioactivitatea</b> (1896), <b>Marie și Pierre Curie</b> descoperă poloniul și radiul (1898), <b>J. J. Thomson</b> descoperă <b>electronul</b> (1897). Marie Curie va fi prima persoană care a câștigat două premii Nobel (fizică 1903, chimie 1911).</p>`
    },
    {
      type: `widget`,
      title: `Tabelul periodic al lui Mendeleev, astăzi`,
      widget: `periodicTable`,
      options: {},
      caption: `Atinge elementele: observă cum cele din aceeași coloană au proprietăți asemănătoare. Tocmai această „periodicitate” a observat-o Mendeleev în 1869.`
    },
    {
      type: `3d`,
      title: `În interiorul atomului`,
      scene: `atom`,
      options: { elements: [`H`, `He`, `Li`, `C`, `O`, `Na`] },
      caption: `Modelul cu orbite (al lui Bohr) este din 1913, dar pornește de la descoperirile de la sfârșitul secolului al XIX-lea: electronul (1897) și radioactivitatea (1896).`
    },
    {
      type: `widget`,
      title: `Cine ce a descoperit?`,
      widget: `match`,
      options: {
        pairs: [
          [`Alessandro Volta`, `Pila electrică`],
          [`Michael Faraday`, `Inducția electromagnetică`],
          [`Charles Darwin`, `Evoluția prin selecție naturală`],
          [`Gregor Mendel`, `Legile eredității`],
          [`Louis Pasteur`, `Pasteurizarea și vaccinul antirabic`],
          [`Robert Koch`, `Bacteria tuberculozei`],
          [`Dmitri Mendeleev`, `Tabelul periodic`],
          [`Wilhelm Röntgen`, `Razele X`]
        ]
      },
      caption: `Opt oameni de știință, opt descoperiri pe care le folosim și astăzi în fiecare zi.`
    },
    {
      type: `example`,
      title: `Exemplu practic: știința secolului al XIX-lea în frigiderul tău`,
      html: `<p>Ia o sticlă de lapte: scrie pe ea <b>„pasteurizat”</b>. Înseamnă că a fost încălzit (circa 72 °C timp de 15 secunde) ca să omoare bacteriile periculoase, fără a-l fierbe. Este metoda pe care <b>Pasteur</b> a inventat-o în 1864 pentru vin și bere, care se stricau.</p>
<p>Acum uită-te la o priză: tensiunea este de <b>230 de volți</b> (unitate care poartă numele lui Volta) și este produsă de generatoare care funcționează pe baza inducției lui <b>Faraday</b>. Lumina din frigider care se aprinde? Vine dintr-o idee a lui <b>Edison</b>, transformată azi în LED.</p>`
    },
    {
      type: `example`,
      title: `Exemplu practic: fă ca John Snow`,
      html: `<p>În 1854, la Londra, în câteva zile au murit sute de oameni de holeră în cartierul Soho. John Snow a însemnat pe o hartă fiecare casă în care murise cineva: punctele se concentrau în jurul <b>fântânii din Broad Street</b>. A pus să se scoată mânerul pompei, iar epidemia, deja în scădere, s-a stins.</p>
<p>Încearcă și tu: dacă în clasă mulți au dureri de burtă, ce ai nota? Cine a mâncat ce, unde, când… Aceasta este metoda <b>epidemiologiei</b>: aduni date, le pui pe o hartă sau într-un tabel, cauți factorul comun.</p>`
    },
    {
      type: `curiosity`,
      title: `Știai că… prima radiografie este a unei mâini cu inel?`,
      html: `<p>Pe 22 decembrie 1895, Röntgen a fotografiat cu raze X mâna soției sale, Anna Bertha: se vedeau oasele și verigheta. Ea, văzându-și propriul schelet, ar fi spus: <i>„Mi-am văzut moartea!”</i>. Röntgen a numit razele „X” pentru că nu știa ce sunt: în matematică X este necunoscuta. A câștigat primul Nobel pentru fizică (1901) și a refuzat să breveteze descoperirea, pentru ca ea să fie a tuturor.</p>`
    },
    {
      type: `curiosity`,
      title: `Știai că… lui Semmelweis nu i s-a dat crezare?`,
      html: `<p>În ciuda rezultatelor, mulți medici s-au simțit jigniți la ideea că ei înșiși ar aduce boala cu propriile mâini. Semmelweis și-a pierdut postul la Viena și a murit în 1865, înainte ca descoperirile lui Pasteur și Lister să-i dea dreptate. Astăzi OMS sărbătorește în fiecare an, pe 5 mai, Ziua mondială a igienei mâinilor.</p>`
    },
    {
      type: `widget`,
      title: `Un secol de descoperiri`,
      widget: `timeline`,
      options: {
        unit: `anni`,
        events: [
          { year: 1796, label: `Jenner: vaccinul împotriva variolei`, icon: `💉` },
          { year: 1800, label: `Volta: pila`, icon: `🔋` },
          { year: 1831, label: `Faraday: inducția; Darwin pornește pe Beagle`, icon: `🧲` },
          { year: 1846, label: `Prima anestezie cu eter`, icon: `😴` },
          { year: 1847, label: `Semmelweis: spălatul pe mâini`, icon: `🧼` },
          { year: 1859, label: `Darwin: Originea speciilor`, icon: `🐢` },
          { year: 1865, label: `Mendel, Maxwell`, icon: `🌱` },
          { year: 1869, label: `Mendeleev: tabelul periodic`, icon: `🧪` },
          { year: 1882, label: `Koch: bacilul tuberculozei`, icon: `🔬` },
          { year: 1885, label: `Pasteur: vaccinul antirabic`, icon: `🐕` },
          { year: 1895, label: `Röntgen: razele X`, icon: `🩻` },
          { year: 1898, label: `Curie: poloniu și radiu`, icon: `☢️` }
        ]
      },
      caption: `În 1800 o operație era un coșmar; în 1900 existau anestezia, dezinfecția și radiografiile.`
    },
    {
      type: `3d`,
      title: `Harta 3D spațiu-timp a descoperirilor`,
      scene: `spacetime`,
      caption: `Descoperirile se concentrează în Europa, dar știința călătorește: din Galápagos până la Boston. Atinge un eveniment: săgețile arată care descoperiri le-au făcut posibile pe celelalte.`,
      options: {
        lat: [-5, 60],
        lon: [-95, 35],
        years: [1790, 1900],
        places: [
          { lat: 51.5, lon: -0.12, label: `Londra` },
          { lat: 48.86, lon: 2.35, label: `Paris` },
          { lat: 52.52, lon: 13.4, label: `Berlin` },
          { lat: 48.21, lon: 16.37, label: `Viena` },
          { lat: 45.19, lon: 9.16, label: `Pavia` },
          { lat: -0.7, lon: -90.5, label: `Galápagos` }
        ],
        events: [
          { id: `jenner`, lat: 51.69, lon: -2.46, year: 1796, label: `Primul vaccin`, html: `La Berkeley, în Anglia, Edward Jenner inoculează unui băiat variola vacilor, apoi demonstrează că acesta nu se îmbolnăvește de variola umană. În 1980 variola a fost declarată eradicată.` },
          { id: `volta`, lat: 45.19, lon: 9.16, year: 1800, label: `Pila lui Volta`, html: `Alessandro Volta, profesor la Pavia, anunță pila: pentru prima dată există un curent electric continuu care poate fi studiat.` },
          { id: `faraday`, lat: 51.51, lon: -0.14, year: 1831, label: `Inducția electromagnetică`, html: `La Royal Institution din Londra, Faraday produce curent mișcând un magnet într-o bobină. Fără pilă nu ar fi putut studia curenții.`, causes: [`volta`] },
          { id: `galapagos`, lat: -0.7, lon: -90.5, year: 1835, label: `Darwin în Galápagos`, html: `Darwin adună cinteze, broaște țestoase și iguane, observând că variază de la o insulă la alta. Îndoiala că speciile nu sunt neschimbabile începe aici.` },
          { id: `etere`, lat: 42.36, lon: -71.06, year: 1846, label: `Anestezia`, html: `La Massachusetts General Hospital din Boston, dentistul William Morton adoarme cu eter un pacient în timpul unei operații la gât. În câteva luni anestezia se răspândește în lume.` },
          { id: `semmelweis`, lat: 48.22, lon: 16.35, year: 1847, label: `Spălatul pe mâini`, html: `Semmelweis observă că lăuzele examinate de medici veniți din sala de autopsii mureau mult mai des. Odată cu spălatul mâinilor, decesele scad brusc.` },
          { id: `snow`, lat: 51.51, lon: -0.14, year: 1854, label: `Harta holerei`, html: `John Snow leagă decesele prin holeră de o fântână poluată: se naște epidemiologia modernă. În același an, Pacini observă bacteria la Florența.` },
          { id: `origine`, lat: 51.5, lon: -0.12, year: 1859, label: `Originea speciilor`, html: `Darwin își publică cartea la Londra: primul tiraj se epuizează în câteva zile. Biologia nu va mai fi niciodată la fel.`, causes: [`galapagos`] },
          { id: `pasteur`, lat: 48.86, lon: 2.35, year: 1864, label: `Teoria germenilor`, html: `Pasteur demonstrează, cu balloanele sale „gât de lebădă”, că microbii vin din aer și nu apar din nimic. Inventează pasteurizarea.` },
          { id: `mendel`, lat: 49.2, lon: 16.61, year: 1865, label: `Legile lui Mendel`, html: `În mănăstirea din Brno, Mendel prezintă rezultatele obținute pe circa 28.000 de plante de mazăre: caracterele se moștenesc ca „unități” separate. Nimeni nu înțelege asta până în 1900.` },
          { id: `maxwell`, lat: 52.2, lon: 0.12, year: 1865, label: `Ecuațiile lui Maxwell`, html: `Maxwell unifică electricitatea, magnetismul și lumina. Prevede undele electromagnetice, descoperite de Hertz în 1887.`, causes: [`faraday`] },
          { id: `lister`, lat: 55.86, lon: -4.25, year: 1867, label: `Antisepsia`, html: `La Glasgow, chirurgul Joseph Lister, citindu-l pe Pasteur, dezinfectează rănile și instrumentele cu acid fenic: infecțiile după operații scad drastic.`, causes: [`pasteur`, `semmelweis`] },
          { id: `mendeleev`, lat: 59.94, lon: 30.31, year: 1869, label: `Tabelul periodic`, html: `La Sankt Petersburg, Mendeleev ordonează elementele într-un tabel și prevede elementele lipsă.` },
          { id: `koch`, lat: 52.52, lon: 13.4, year: 1882, label: `Bacilul tuberculozei`, html: `La Berlin, Robert Koch identifică bacteria tuberculozei, pe atunci una dintre primele cauze de deces din Europa.`, causes: [`pasteur`] },
          { id: `rabbia`, lat: 48.85, lon: 2.34, year: 1885, label: `Vaccinul antirabic`, html: `Pasteur îl vaccinează pe Joseph Meister, în vârstă de 9 ani, mușcat de un câine turbat: băiatul supraviețuiește.`, causes: [`pasteur`, `jenner`] },
          { id: `raggix`, lat: 49.79, lon: 9.95, year: 1895, label: `Razele X`, html: `La Würzburg, Röntgen descoperă raze invizibile care traversează carnea, dar nu și oasele.`, causes: [`maxwell`] },
          { id: `curie`, lat: 48.84, lon: 2.34, year: 1898, label: `Radioactivitatea`, html: `La Paris, Marie și Pierre Curie, studiind razele descoperite de Becquerel, izolează două elemente noi: poloniul și radiul.`, causes: [`raggix`, `mendeleev`] }
        ]
      }
    },
    {
      type: `decision`,
      title: `Viena, 1847: ești doctorul Semmelweis`,
      html: `<p>În spitalul tău există două secții de maternitate. În prima, unde lucrează medicii și studenții, mor de „febră puerperală” mult mai multe femei (chiar 1 din 10) decât în a doua, unde lucrează doar moașele. Medicii, înainte de a examina lăuzele, fac autopsii pe cadavre. Un coleg de-al tău moare de o febră asemănătoare după ce s-a tăiat în timpul unei autopsii.</p>`,
      question: `Ce crezi și ce faci?`,
      options: [
        { label: `Este vina aerului rău din secție: deschid ferestrele.`, outcome: `Aceasta este teoria „miasmelor”, acceptată de aproape toată lumea. Dar cele două secții au același aer: nu explică diferența.` },
        { label: `Mâinile medicilor aduc de la cadavre ceva care îmbolnăvește: impun spălarea lor cu o soluție de clor.`, outcome: `Încă nu știi ce este acel „ceva” (microbii vor fi demonstrați peste ani), dar poți verifica cu cifre dacă funcționează.` },
        { label: `Este soarta: unele femei sunt mai slabe decât altele.`, outcome: `Nu explică de ce în secția moașelor mor mult mai puține.` }
      ],
      answer: 1,
      explain: `Semmelweis a introdus spălarea mâinilor cu clorură de var în mai 1847: în câteva luni mortalitatea din secția medicilor a scăzut la circa 1-2%. Este un exemplu perfect de <b>metodă științifică</b>: observație, ipoteză, experiment, verificare cu cifre. Dar mulți colegi au refuzat ideea. Abia cu Pasteur și Lister, douăzeci de ani mai târziu, s-a înțeles de ce avusese dreptate.`
    },
    {
      type: `decision`,
      title: `Paris, iulie 1885: ești Louis Pasteur`,
      html: `<p>Ți-l aduc pe Joseph Meister, 9 ani, mușcat de un câine turbat cu două zile înainte. Fără tratament, rabia este mortală în aproape 100% din cazuri. Ai un vaccin care a funcționat la câini, dar nu l-ai încercat niciodată pe un om. Mai mult, nu ești medic: ești chimist.</p>`,
      question: `Ce faci?`,
      options: [
        { label: `Nu îl tratez: vaccinul nu a fost încă încercat pe oameni.`, outcome: `Eviți un risc necunoscut, dar băiatul aproape sigur va muri.` },
        { label: `Îl tratez, cu ajutorul unor medici care fac injecțiile, și urmăresc cu atenție cum reacționează.`, outcome: `Este un risc etic și științific mare: dacă dai greș, ai putea fi acuzat că ai ucis copilul. Dar este singura speranță de a-l salva.` },
        { label: `Aștept câteva săptămâni ca să fac alte probe pe câini.`, outcome: `Rabia nu așteaptă: după apariția simptomelor nu mai e nimic de făcut.` }
      ],
      answer: 1,
      explain: `Pasteur, de acord cu doi medici, i-a administrat lui Joseph 13 injecții în 10 zile. Băiatul a supraviețuit și, ca adult, a lucrat ca paznic la Institutul Pasteur. Succesul a făcut vaccinul faimos în toată lumea. Astăzi regulile sunt mult mai stricte: un medicament nou trebuie să treacă prin teste lungi și controlate înainte de a fi folosit pe oameni, tocmai pentru a-i proteja pe pacienți.`
    },
    {
      type: `alternatives`,
      title: `Alte moduri de a înțelege`,
      intro: `Unele idei din secolul al XIX-lea sunt greu de imaginat: iată câteva ajutoare.`,
      tabs: [
        {
          label: `💧 Electricitatea ca apa`,
          html: `<p>Gândește-te la un circuit ca la o instalație de apă:</p>
<ul>
<li><b>pila</b> este o <b>pompă</b> care împinge apa;</li>
<li><b>tensiunea</b> (voltul) arată cât de tare împinge pompa;</li>
<li><b>curentul</b> (amperul) arată câtă apă trece în fiecare secundă;</li>
<li><b>becul</b> este o roată de moară: apa o învârte și produce lucru mecanic;</li>
<li>dacă țeava se întrerupe (<b>circuit deschis</b>), apa se oprește.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#eff6ff"/>
<rect x="60" y="50" width="480" height="120" rx="20" fill="none" stroke="#2563eb" stroke-width="12"/>
<rect x="30" y="80" width="60" height="60" rx="8" fill="#f97316"/>
<text x="60" y="117" font-size="14" text-anchor="middle" font-weight="bold" fill="#ffffff">pompă</text>
<circle cx="540" cy="110" r="32" fill="#fde047" stroke="#854d0e" stroke-width="3"/>
<text x="540" y="115" font-size="13" text-anchor="middle">moară</text>
<text x="300" y="40" font-size="15" text-anchor="middle" fill="#1e3a8a">apa care curge = curent →</text>
<text x="60" y="190" font-size="14" text-anchor="middle">= pila</text>
<text x="540" y="190" font-size="14" text-anchor="middle">= becul</text>
<text x="300" y="115" font-size="15" text-anchor="middle" fill="#334155">țeavă = fir electric</text>
</svg>`
        },
        {
          label: `🐞 Selecția ca un joc`,
          html: `<p>Imaginează-ți 100 de buburuze: 50 roșii și 50 verzi, pe o pajiște verde. Păsările le văd mai bine pe cele roșii și mănâncă mai multe. În generația următoare buburuzele verzi sunt 60, apoi 70, apoi 85… Nicio buburuză nu a „hotărât” să devină verde: pur și simplu cele verzi supraviețuiesc și au mai mulți pui.</p>
<p>Dacă pajiștea devine maro (secetă), avantajul se schimbă! Asta s-a întâmplat cu adevărat cu <b>molia mesteacănului</b> din Anglia: în timpul revoluției industriale, când trunchiurile s-au înnegrit de funingine, moliile închise la culoare au devenit cele mai comune.</p>`
        },
        {
          label: `⚛️ Atomul în 3D`,
          html: `<p>La sfârșitul secolului al XIX-lea se descoperă că atomul are „piese” în interior: <b>electronii</b> (Thomson, 1897). Aici vezi modelul lui Bohr: un nucleu cu electronii în jur, pe orbite. Compară hidrogenul (1 electron) cu sodiul (11).</p>`,
          scene: `atom`,
          options: { elements: [`H`, `He`, `C`, `Na`] }
        },
        {
          label: `🔎 Metoda în 5 pași`,
          html: `<p>Aproape toate descoperirile din această lecție urmează aceeași schemă. Încearcă s-o recunoști la Semmelweis:</p>
<ol>
<li><b>Observ</b>: în secția medicilor se moare mai mult.</li>
<li><b>Mă întreb</b>: de ce? Ce este diferit?</li>
<li><b>Formulez o ipoteză</b>: medicii aduc ceva de la cadavre.</li>
<li><b>Experimentez</b>: spălatul mâinilor devine obligatoriu.</li>
<li><b>Verific cu datele</b>: mortalitatea scade brusc. Ipoteza este confirmată!</li>
</ol>
<p>Încearcă să faci la fel cu Snow (holera) sau cu Pasteur (laptele care se strică).</p>`
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Harta descoperirilor din secolul al XIX-lea`,
      nodes: [
        { id: `metodo`, label: `Metoda experimentală`, x: 50, y: 6, color: `#a855f7`, html: `Observi, formulezi ipoteze, experimentezi, verifici.`, why: `A formulat-o Galileo Galilei în secolul al XVII-lea. În secolul al XIX-lea devine modul de lucru din toate laboratoarele, de la universități la fabrici.` },
        { id: `pila`, label: `Pila lui Volta`, x: 15, y: 28, color: `#eab308`, html: `1800: primul generator de curent continuu.`, why: `Volta voia să demonstreze că Galvani greșea: contracția broaștelor nu depindea de o electricitate animală, ci de contactul dintre două metale diferite într-un lichid.` },
        { id: `elettromagnetismo`, label: `Electromagnetismul`, x: 15, y: 55, color: `#f97316`, html: `Ørsted, Faraday, Maxwell: electricitatea, magnetismul și lumina sunt un singur fenomen.`, why: `Cu pila se puteau, în sfârșit, studia curenți constanți; experimentele lui Faraday și matematica lui Maxwell au dus la descoperirea undelor electromagnetice.` },
        { id: `tecnologia`, label: `Telegraf, bec, radio`, x: 15, y: 85, color: `#0ea5e9`, html: `Aplicațiile care schimbă viața de zi cu zi.`, why: `Fiecare invenție aplică o descoperire: telegraful folosește electromagneții, dinamul inducția, radioul undele lui Maxwell și Hertz.` },
        { id: `darwin`, label: `Evoluția (Darwin)`, x: 50, y: 40, color: `#16a34a`, html: `1859: speciile se schimbă în timp prin selecție naturală.`, why: `Darwin a reunit observațiile din călătoria cu Beagle, fosilele, ideile geologului Lyell despre timpurile foarte îndelungate ale Pământului și pe cele ale economistului Malthus despre lupta pentru resurse.` },
        { id: `mendel`, label: `Genetica (Mendel)`, x: 50, y: 75, color: `#65a30d`, html: `1865: legile eredității, studiate pe mazăre.`, why: `Mendel a folosit matematica (statistica) pentru a număra mii de plante: era o metodă nouă pentru biologie, de aceea nu a fost înțeles imediat.` },
        { id: `germi`, label: `Teoria germenilor`, x: 85, y: 28, color: `#ef4444`, html: `Multe boli sunt provocate de microorganisme.`, why: `Microscoapele mai bune și experimentele lui Pasteur și Koch au demonstrat că fiecare boală infecțioasă are microbul ei. Semmelweis și Snow ajunseseră la asta pe alte căi, cu ajutorul datelor.` },
        { id: `medicina`, label: `Vaccinuri, antisepsie, anestezie`, x: 85, y: 60, color: `#dc2626`, html: `Operații sigure și prevenirea bolilor.`, why: `Dacă microbii provoacă infecțiile, e de ajuns să-i omorâm (dezinfecție, pasteurizare) sau să antrenăm corpul să-i recunoască (vaccinuri). Anestezia a permis intervenții lungi și precise.` },
        { id: `atomo`, label: `Atomul și tabelul periodic`, x: 85, y: 88, color: `#7c3aed`, html: `Dalton, Mendeleev, Thomson, Curie: cum este făcută materia.`, why: `Măsurătorile precise ale maselor elementelor i-au permis lui Mendeleev să găsească o regularitate; la sfârșitul secolului, radioactivitatea și electronul au arătat că atomul are o structură internă.` }
      ],
      edges: [
        [`metodo`, `pila`, `călăuzește`],
        [`metodo`, `darwin`, `călăuzește`],
        [`metodo`, `germi`, `călăuzește`],
        [`pila`, `elettromagnetismo`, `permite studiul`],
        [`elettromagnetismo`, `tecnologia`, `aplicat în`],
        [`darwin`, `mendel`, `explicată apoi de`],
        [`germi`, `medicina`, `duce la`],
        [`elettromagnetismo`, `atomo`, `razele X și electronul`]
      ]
    },
    {
      type: `quiz`,
      title: `Mini-test: Darwin și medicina`,
      questions: [
        { type: `mc`, q: `Unde a observat Darwin faimoasele cinteze?`, options: [`În Galápagos`, `În Australia`, `În Islanda`], answer: 0, explain: `În insulele Galápagos, în 1835, în timpul călătoriei cu Beagle.` },
        { type: `mc`, q: `Ce face pasteurizarea?`, options: [`Adaugă vitamine`, `Încălzește un lichid pentru a ucide microbii`, `Congelează alimentul`], answer: 1, explain: `Se încălzește (de exemplu laptele la circa 72 °C) fără a fierbe, pentru a elimina bacteriile periculoase.` },
        { type: `tf`, q: `Darwin susținea că omul se trage din maimuțele de azi.`, answer: false, explain: `El spunea că omul și maimuțele antropoide au strămoși comuni.` }
      ]
    }
  ],
  glossary: [
    { t: `Pila`, d: `Generator de curent continuu inventat de Volta (1800), cu discuri de metale diferite separate de un lichid.` },
    { t: `Inducția electromagnetică`, d: `Producerea de curent electric prin mișcarea unui magnet lângă un fir (Faraday, 1831).` },
    { t: `Evoluția`, d: `Transformarea speciilor vii de-a lungul a foarte multe generații.` },
    { t: `Selecția naturală`, d: `Mecanismul prin care indivizii cei mai potriviți mediului supraviețuiesc și se înmulțesc mai mult.` },
    { t: `Genetica`, d: `Știința care studiază cum se transmit caracterele de la părinți la copii.` },
    { t: `Vaccinul`, d: `Preparat care învață sistemul imunitar să recunoască un microb, fără a îmbolnăvi.` },
    { t: `Antisepsia`, d: `Folosirea dezinfectanților pentru a ucide microbii de pe răni și instrumente.` },
    { t: `Anestezia`, d: `Eliminarea durerii (și adesea a conștienței) în timpul unei intervenții.` },
    { t: `Pasteurizarea`, d: `Încălzirea controlată a unui aliment pentru a elimina microorganismele dăunătoare.` },
    { t: `Radioactivitatea`, d: `Emisia spontană de radiații de către unii atomi instabili (Becquerel, Curie).` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `De la cine își ia numele unitatea de măsură „volt”?`, options: [`De la Galvani`, `De la Volta`, `De la Faraday`], answer: 1, explain: `De la Alessandro Volta, inventatorul pilei.` },
      { type: `tf`, q: `Faraday a descoperit că mișcând un magnet într-o bobină se produce curent.`, answer: true, explain: `Este inducția electromagnetică (1831), principiul dinamului.` },
      { type: `num`, q: `În ce an a publicat Darwin „Originea speciilor”?`, answer: 1859, explain: `În 1859, la Londra.` },
      { type: `order`, q: `Pune în ordine cei patru pași ai selecției naturale.`, items: [`Indivizii sunt diferiți între ei`, `Multe caracteristici se moștenesc`, `Se nasc mai mulți indivizi decât pot supraviețui`, `Cei mai potriviți supraviețuiesc și se înmulțesc mai mult`], explain: `Variabilitate, ereditate, lupta pentru supraviețuire, selecție.` },
      { type: `text`, q: `Care călugăr a descoperit legile eredității studiind mazărea?`, answer: [`mendel`, `gregor mendel`], explain: `Gregor Mendel, la Brno, în 1865.` },
      { type: `mc`, q: `Ce a demonstrat Semmelweis?`, options: [`Că spălatul pe mâini reduce infecțiile`, `Că eterul adoarme`, `Că lumina este o undă`], answer: 0, explain: `În 1847, la Viena: odată cu spălatul mâinilor, decesele prin febră puerperală au scăzut brusc.` },
      { type: `mc`, q: `Ce bacterie a descoperit Robert Koch în 1882?`, options: [`Cea a holerei`, `Cea a tuberculozei`, `Cea a rabiei`], answer: 1, explain: `Bacilul tuberculozei (rabia este provocată de un virus).` },
      { type: `mc`, q: `De ce a fost considerat genial tabelul lui Mendeleev?`, options: [`Pentru că era colorat`, `Pentru că lăsa căsuțe goale, prevăzând elemente descoperite apoi`, `Pentru că avea toate elementele de azi`], answer: 1, explain: `A prevăzut galiul, scandiul și germaniul, descoperite între 1875 și 1886.` },
      { type: `text`, q: `Cum se numesc razele descoperite de Röntgen în 1895? (razele …)`, answer: [`x`, `razele x`], explain: `Razele X: X ca necunoscută, pentru că nu se știa ce sunt.` },
      { type: `tf`, q: `Marie Curie a câștigat două premii Nobel în două domenii diferite.`, answer: true, explain: `Fizică (1903) și chimie (1911).` },
      { type: `mc`, q: `Care dintre acestea NU este o descoperire a secolului al XIX-lea?`, options: [`Tabelul periodic`, `Metoda experimentală a lui Galilei`, `Anestezia cu eter`], answer: 1, explain: `Galilei a trăit între secolele al XVI-lea și al XVII-lea; metoda lui a stat însă la baza descoperirilor din secolul al XIX-lea.` },
      { type: `mc`, q: `Ce a legat John Snow în 1854?`, options: [`Holera de o fântână cu apă poluată`, `Febra de aerul rău`, `Tuberculoza de frig`], answer: 0, explain: `Cu o hartă a deceselor a demonstrat că holera se răspândea prin apă.` }
    ]
  }
});
