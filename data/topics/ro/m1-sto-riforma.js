TOPIC('ro', {
  id: `m1-sto-riforma`,
  title: `Reforma și Contrareforma`,
  intro: `În 1517, un călugăr german, <b>Martin Luther</b>, a contestat vânzarea indulgențelor. În câțiva ani, creștinătatea occidentală s-a împărțit: au apărut Bisericile <b>protestante</b>, în timp ce Biserica Catolică a răspuns prin <b>Conciliul de la Trento</b>. Această divizare a schimbat religia, politica și cultura Europei.`,
  minutes: 35,
  sections: [
    {
      type: `text`,
      title: `1. O Biserică de reformat`,
      html: `<p>La începutul secolului al XVI-lea, mulți creștini cereau o <b>reformă</b> a Bisericii:</p><ul><li>Mulți episcopi și cardinali trăiau ca niște principi, strângeau funcții și adesea nu locuiau în eparhiile lor.</li><li>Mulți preoți erau puțin instruiți.</li><li>Se practica <b>simonia</b> (cumpărarea și vânzarea funcțiilor bisericești).</li><li>Mai ales, se vindeau <b>indulgențele</b>: un document care, după doctrină, reducea pedepsele păcatelor în Purgatoriu. În 1515, papa <b>Leon al X-lea</b> (un Medici) a promovat o vânzare extraordinară pentru a finanța noua <b>bazilică Sf. Petru</b>. În Germania, fratele dominican <b>Johann Tetzel</b> o predica fără nicio reținere.</li></ul><p>Și înainte, alții criticaseră Biserica: John Wycliffe în Anglia, Jan Hus în Boemia (ars pe rug în 1415), Girolamo Savonarola la Florența (1498), Erasmus din Rotterdam.</p>`
    },
    {
      type: `text`,
      title: `2. Martin Luther și cele 95 de teze (1517)`,
      html: `<p><b>Martin Luther</b> (1483–1546) era un călugăr augustinian și profesor de teologie la <b>Wittenberg</b>, în Saxonia. La <b>31 octombrie 1517</b> a făcut publice <b>95 de teze</b> (afirmații de discutat) împotriva indulgențelor. Datorită <b>tiparului</b>, în câteva săptămâni erau citite în toată Germania.</p><p>Ideile lui principale:</p><ul><li><b>Numai credința</b>: omul se mântuiește doar prin credința în Dumnezeu și prin harul Său, nu prin fapte bune și nici cumpărând indulgențe.</li><li><b>Numai Scriptura</b>: singura autoritate este <b>Biblia</b>, pe care o poate citi oricine. De aceea Luther a tradus-o în germană.</li><li><b>Preoția universală</b>: toți cei botezați sunt preoți; nu este nevoie de o ierarhie care să facă pe intermediarul cu Dumnezeu.</li><li>Doar <b>două sacramente</b> (botezul și euharistia) în loc de șapte.</li></ul>`
    },
    {
      type: `svg`,
      title: `Catolici și luterani comparați`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="320" fill="#f8fafc"/><rect x="15" y="15" width="280" height="290" rx="14" fill="#fef3c7" stroke="#b45309" stroke-width="3"/><rect x="305" y="15" width="280" height="290" rx="14" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/><text x="155" y="48" font-size="20" font-family="sans-serif" text-anchor="middle" fill="#78350f" font-weight="bold">Biserica Catolică</text><text x="445" y="48" font-size="20" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Luterani</text><g font-family="sans-serif" font-size="15" fill="#422006"><text x="30" y="90">✝ Credință + fapte bune</text><text x="30" y="130">📜 Biblia + Tradiția</text><text x="30" y="170">⛪ Papă, episcopi, preoți</text><text x="30" y="210">7️⃣ Șapte sacramente</text><text x="30" y="250">🗣️ Liturghie în latină</text><text x="30" y="290">🙏 Cultul sfinților</text></g><g font-family="sans-serif" font-size="15" fill="#172554"><text x="320" y="90">✝ Numai credința</text><text x="320" y="130">📖 Numai Scriptura</text><text x="320" y="170">👥 Preoția universală</text><text x="320" y="210">2️⃣ Două sacramente</text><text x="320" y="250">🗣️ Slujbă în germană</text><text x="320" y="290">🎵 Coraluri cântate de toți</text></g></svg>`,
      caption: `Schemă simplificată a principalelor diferențe. Ambele confesiuni rămân creștine: cred în Dumnezeu, în Hristos și în Biblie.`
    },
    {
      type: `decision`,
      title: `Worms, 1521: te retragi sau nu?`,
      html: `<p>Ești <b>Martin Luther</b>. Papa te-a <b>excomunicat</b> deja (iar tu ai ars în public bula papală). Acum te afli în fața <b>Dietei de la Worms</b>, adunarea principilor Imperiului, prezidată de tânărul împărat <b>Carol Quintul</b>. Ți se arată cărțile tale și ți se cere să te <b>retragi</b>, adică să renegi ce ai scris. Îți amintești că, în urmă cu un secol, Jan Hus, care se prezentase la un conciliu, fusese ars pe rug.</p>`,
      question: `Ce răspunzi?`,
      options: [
        { label: `Mă retrag: îmi salvez viața și poate voi putea schimba Biserica din interior.`, outcome: `<p>Ai fi în siguranță, dar susținătorii tăi s-ar simți trădați, iar mișcarea probabil s-ar opri. Tu însuți ai merge împotriva conștiinței tale.</p>` },
        { label: `Nu mă retrag, dacă nu mă conving cu Biblia și cu rațiunea.`, outcome: `<p>Devii un haiduc scos în afara legii: oricine te-ar putea ucide fără să fie pedepsit. Dar unii principi germani te sprijină, pentru că și ei vor mai multă independență față de Roma și față de împărat.</p>` }
      ],
      answer: 1,
      explain: `<p>Luther a refuzat să se retragă: „Conștiința mea este prizonieră a Cuvântului lui Dumnezeu” (fraza „Aici stau, nu pot face altfel” i-a fost atribuită mai târziu). Carol Quintul l-a pus sub <b>interdicția Imperiului</b>. Dar protectorul lui, principele elector <b>Frederic cel Înțelept</b> al Saxoniei, l-a pus să fie „răpit” pe ascuns și ascuns în castelul <b>Wartburg</b>, unde Luther a tradus Noul Testament în germană. Care era diferența față de Hus? <b>Tiparul</b>, care răspândise ideile lui peste tot, și <b>sprijinul principilor</b>.</p>`
    },
    {
      type: `quiz`,
      title: `Mini-test 1`,
      questions: [
        { type: `num`, q: `În ce an a făcut Luther publice cele 95 de teze?`, answer: 1517, tol: 0, explain: `La 31 octombrie 1517, la Wittenberg.` },
        { type: `mc`, q: `Ce înseamnă „numai Scriptura”?`, options: [`Se poate citi o singură carte`, `Singura autoritate pentru credință este Biblia`, `Doar preoții pot citi`, `Trebuie scrise rugăciunile`], answer: 1, explain: `Pentru Luther, Biblia avea mai multă valoare decât tradiția și decretele papei.` },
        { type: `tf`, q: `Luther a tradus Biblia în germană.`, answer: true, explain: `Noul Testament în 1522, Biblia completă în 1534.` }
      ]
    },
    {
      type: `text`,
      title: `3. Reforma se răspândește`,
      html: `<ul><li><b>În Germania</b>, mulți principi aderă la Reformă: pot confisca bunurile Bisericii și își pot întări puterea. În <b>1529</b>, la Dieta de la Speyer, protestează împotriva hotărârilor împăratului: de aici numele de <b>protestanți</b>. După ani de război, <b>Pacea de la Augsburg</b> (1555) stabilește că fiecare principe alege religia supușilor săi: <i>cuius regio, eius religio</i> („a cui e regiunea, a aceluia e religia”).</li><li><b>În Elveția</b>, <b>Ulrich Zwingli</b> (Zürich) și mai ales <b>Jean Calvin</b> (Geneva, din 1541) creează o Reformă mai riguroasă. Calvin predă <b>predestinarea</b>: Dumnezeu a hotărât deja cine va fi mântuit; munca cinstită și succesul pot fi un semn al acesteia. Calvinismul se răspândește în Franța (<b>hughenoții</b>), în Țările de Jos, în Scoția.</li><li><b>În Anglia</b>, regele <b>Henric al VIII-lea</b>, căruia papa nu-i acordă anularea căsătoriei cu Ecaterina de Aragon, se proclamă, prin <b>Actul de supremație</b> (1534), căpetenie a Bisericii Angliei: apare <b>Biserica anglicană</b>.</li></ul>`
    },
    {
      type: `example`,
      title: `Exemplu practic: „cuius regio, eius religio”`,
      html: `<p>Imaginează-ți că trăiești în 1560 într-un sat din Saxonia: principele tău este luteran, deci mergi la o biserică luterană. Te muți la câțiva kilometri, în Bavaria: acolo ducele este catolic, deci ar trebui să devii catolic… sau să emigrezi (Pacea de la Augsburg acorda dreptul de a te muta). Și astăzi Germania are regiuni cu majoritate catolică (Bavaria, Renania) și altele cu majoritate protestantă (Nord și Est): este o moștenire a acelor alegeri.</p>`
    },
    {
      type: `text`,
      title: `4. Răspunsul catolic: Reforma catolică și Contrareforma`,
      html: `<p>Biserica din Roma reacționează în două moduri: <b>înnoindu-se</b> din interior (Reforma catolică) și <b>combătând</b> protestantismul (Contrareforma).</p><ul><li><b>Noi ordine religioase</b>: mai ales <b>Compania lui Iisus</b> (iezuiții), întemeiată de <b>Ignațiu de Loyola</b> și aprobată de papă în <b>1540</b>: se dedică educației (colegii) și misiunilor din toată lumea (Francisc Xaveriu în Asia, Matteo Ricci în China). Și capucinii, ursulinele, barnabiții…</li><li><b>Conciliul de la Trento</b> (1545–1563): confirmă doctrinele catolice (credință <b>și</b> fapte, Scriptură <b>și</b> Tradiție, șapte sacramente, liturghia în latină, cultul sfinților), dar corectează abuzurile: episcopii trebuie să locuiască în eparhie, se interzice vânzarea indulgențelor, se creează <b>seminariile</b> pentru formarea preoților, se scrie un <b>catehism</b>.</li><li><b>Controlul</b>: <b>Inchiziția romană</b> (Sfântul Oficiu, 1542) judecă ereticii; <b>Indexul cărților interzise</b> (1559) enumeră cărțile pe care catolicii nu au voie să le citească.</li></ul>`
    },
    {
      type: `curiosity`,
      title: `De ce tocmai Trento?`,
      html: `<p>Conciliul s-a întrunit la <b>Trento</b> pentru că era un compromis: orașul era italian prin limbă și aproape de Roma, dar făcea parte din <b>Sfântul Imperiu Roman</b>, cum cerea Carol Quintul pentru a-i invita și pe protestanții germani (care însă nu au acceptat). Conciliul a durat 18 ani, cu lungi întreruperi, și o vreme s-a mutat la Bologna.</p>`
    },
    {
      type: `3d`,
      title: `Hartă 3D spațiu-timp a Reformei`,
      scene: `spacetime`,
      options: {
        lat: [40, 56], lon: [-6, 20], years: [1500, 1600],
        places: [
          { lat: 51.87, lon: 12.65, label: `Wittenberg` },
          { lat: 41.9, lon: 12.5, label: `Roma` },
          { lat: 46.2, lon: 6.14, label: `Geneva` },
          { lat: 51.5, lon: -0.12, label: `Londra` },
          { lat: 46.07, lon: 11.12, label: `Trento` }
        ],
        events: [
          { id: `sanpietro`, lat: 41.9, lon: 12.45, year: 1506, label: `Începe noua bazilică Sf. Petru`, html: `<p>Șantierul extrem de costisitor este finanțat și cu indulgențe.</p>` },
          { id: `tesi`, lat: 51.87, lon: 12.65, year: 1517, label: `Cele 95 de teze ale lui Luther`, causes: [`sanpietro`], html: `<p>Luther contestă vânzarea indulgențelor. Tiparul răspândește tezele peste tot.</p>` },
          { id: `worms`, lat: 49.63, lon: 8.36, year: 1521, label: `Dieta de la Worms`, causes: [`tesi`], html: `<p>Luther nu se retrage și este pus sub interdicție de împăratul Carol Quintul.</p>` },
          { id: `contadini`, lat: 51.2, lon: 10.45, year: 1525, label: `Războiul țăranilor`, causes: [`worms`], html: `<p>Țăranii germani, inspirați în parte de Reformă (și de Thomas Müntzer), se răscoală. Luther se alătură principilor; revolta este înăbușită, cu aproximativ 100.000 de morți.</p>` },
          { id: `sacco`, lat: 41.9, lon: 12.5, year: 1527, label: `Jefuirea Romei`, causes: [`worms`], html: `<p>Trupele lui Carol Quintul, printre care mulți lanschenetți luterani, jefuiesc Roma.</p>` },
          { id: `spira`, lat: 49.32, lon: 8.43, year: 1529, label: `„Protestul” de la Speyer`, causes: [`worms`], html: `<p>Principii luterani protestează împotriva împăratului: apare numele de „protestanți”.</p>` },
          { id: `supremazia`, lat: 51.5, lon: -0.12, year: 1534, label: `Actul de supremație`, causes: [`tesi`], html: `<p>Henric al VIII-lea devine căpetenia Bisericii Angliei: apare Biserica anglicană.</p>` },
          { id: `gesuiti`, lat: 41.9, lon: 12.48, year: 1540, label: `Este aprobată Compania lui Iisus`, causes: [`tesi`], html: `<p>Ignațiu de Loyola întemeiază un ordin dedicat educației și misiunilor.</p>` },
          { id: `calvino`, lat: 46.2, lon: 6.14, year: 1541, label: `Calvin la Geneva`, causes: [`tesi`], html: `<p>Geneva devine „Roma protestanților”: de aici calvinismul se răspândește în Europa.</p>` },
          { id: `trento`, lat: 46.07, lon: 11.12, year: 1545, label: `Deschiderea Conciliului de la Trento`, causes: [`spira`, `gesuiti`], html: `<p>Biserica Catolică își redefinește doctrina și se reformează. Va dura până în 1563.</p>` },
          { id: `augusta`, lat: 48.37, lon: 10.9, year: 1555, label: `Pacea de la Augsburg`, causes: [`spira`], html: `<p>„Cuius regio, eius religio”: fiecare principe alege între catolicism și luteranism.</p>` },
          { id: `indice`, lat: 41.9, lon: 12.5, year: 1559, label: `Indexul cărților interzise`, causes: [`trento`], html: `<p>Primul Index roman al cărților interzise catolicilor.</p>` },
          { id: `bartolomeo`, lat: 48.86, lon: 2.35, year: 1572, label: `Noaptea Sfântului Bartolomeu`, causes: [`calvino`], html: `<p>La Paris, mii de hughenoți (calvinii francezi) sunt masacrați.</p>` },
          { id: `nantes`, lat: 47.22, lon: -1.55, year: 1598, label: `Edictul de la Nantes`, causes: [`bartolomeo`], html: `<p>Henric al IV-lea acordă hughenoților libertatea cultului: se încheie războaiele religioase din Franța.</p>` }
        ]
      },
      caption: `De la Wittenberg ideile se răspândesc în toată Europa, iar răspunsul catolic pornește de la Roma și Trento. Atinge evenimentele și urmărește săgețile.`
    },
    {
      type: `widget`,
      title: `Catolic sau protestant?`,
      widget: `classify`,
      options: { groups: [`Biserica Catolică (Trento)`, `Protestanți (Luther, Calvin)`], items: [ [`Șapte sacramente`, 0], [`Două sacramente`, 1], [`Numai credința`, 1], [`Credință și fapte`, 0], [`Papa conduce Biserica`, 0], [`Preoția universală`, 1], [`Liturghie în latină`, 0], [`Biblia tradusă în limba poporului`, 1], [`Iezuiții`, 0], [`Predestinarea (Calvin)`, 1] ] },
      caption: `Pune fiecare idee sau instituție în coloana potrivită.`
    },
    {
      type: `example`,
      title: `Exemplu practic: Reforma pe care o auzi și o vezi`,
      html: `<p>Reforma a lăsat urme pe care le întâlnești și astăzi:</p><ul><li>Luther a scris <b>coraluri</b> pe care să le cânte toți împreună în germană; două secole mai târziu, <b>Johann Sebastian Bach</b>, luteran, a compus muzică sacră bazată pe acele coraluri.</li><li>Germana modernă datorează mult <b>Bibliei lui Luther</b>, citită în toate regiunile Germaniei.</li><li>Reforma catolică a produs arta <b>barocă</b>: biserici somptuoase precum Il Gesù din Roma, gândite să emoționeze credincioșii.</li></ul>`
    },
    {
      type: `curiosity`,
      title: `31 octombrie`,
      html: `<p>La 31 octombrie, în multe țări protestante (în mai multe regiuni ale Germaniei este zi liberă) se sărbătorește <b>Ziua Reformei</b>. După tradiție, Luther a afișat tezele pe ușa bisericii castelului din Wittenberg, dar unii istorici cred că le-a trimis doar prin scrisoare arhiepiscopului de Mainz: nu există o mărturie directă despre afișare.</p>`
    },
    {
      type: `alternatives`,
      title: `Alte moduri de a înțelege`,
      intro: `Disputele teologice pot părea îndepărtate. Încearcă aceste căi.`,
      tabs: [
        { label: `🏫 O școală care se desparte`, html: `<p>Imaginează-ți o școală în care directorul (<b>papa</b>) vinde „bilete” pentru a șterge notele proaste. Un profesor (<b>Luther</b>) protestează: „Notele proaste se șterg doar purtându-te cu adevărat bine, iar regulamentul (<b>Biblia</b>) trebuie să-l poată citi orice elev!”. Unele clase îl urmează și întemeiază o școală nouă. Directorul convoacă atunci un mare consiliu (<b>Trento</b>), interzice biletele, își pregătește mai bine profesorii, dar își confirmă regulamentul și îi alungă pe cei care nu-l acceptă.</p>` },
        { label: `👑 Urmărește puterea`, html: `<p>Întreabă-te mereu: <b>cine are de câștigat?</b> Principii germani, trecând la Reformă, confiscau mănăstirile și pământurile Bisericii și deveneau mai independenți față de împărat. Henric al VIII-lea a obținut divorțul și bunurile mănăstirilor. Orașele negustorești nu mai plăteau taxe Romei. Credința era sinceră pentru mulți, dar politica și economia explică de ce Reforma a reușit tocmai acolo unde a reușit.</p>` },
        { label: `🌳 Arborele confesiunilor`, html: `<p>Privește cum s-au despărțit Bisericile creștine în timp:</p>`, svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f0fdf4"/><g stroke="#78350f" stroke-width="8" fill="none" stroke-linecap="round"><path d="M300 290 L300 200"/><path d="M300 200 L130 120"/><path d="M300 200 L420 140"/><path d="M420 140 L330 60"/><path d="M420 140 L440 50"/><path d="M420 140 L540 60"/><path d="M420 140 L560 140"/></g><g font-family="sans-serif" font-size="15" text-anchor="middle"><rect x="230" y="255" width="140" height="30" rx="8" fill="#fde68a"/><text x="300" y="276" fill="#422006">Biserica veche</text><rect x="60" y="95" width="140" height="30" rx="8" fill="#e9d5ff"/><text x="130" y="116" fill="#4c1d95">Ortodocși (1054)</text><rect x="350" y="185" width="140" height="30" rx="8" fill="#fef3c7"/><text x="420" y="206" fill="#78350f">Catolici</text><rect x="260" y="35" width="140" height="30" rx="8" fill="#bfdbfe"/><text x="330" y="56" fill="#1e3a8a">Luterani (1517)</text><rect x="400" y="15" width="120" height="30" rx="8" fill="#bbf7d0"/><text x="460" y="36" fill="#14532d">Calvinisti</text><rect x="480" y="70" width="115" height="30" rx="8" fill="#fecaca"/><text x="537" y="91" fill="#7f1d1d">Anglicani</text><rect x="490" y="125" width="105" height="30" rx="8" fill="#e5e7eb"/><text x="542" y="146" fill="#111827" font-size="13">anabaptiști…</text></g></svg>` },
        { label: `🌍 Pe glob`, html: `<p>Bisericile născute în secolul al XVI-lea s-au răspândit apoi în toată lumea: iezuiții au dus catolicismul în Asia și în America; coloniștii englezi și olandezi au dus Bisericile protestante în America de Nord și în Africa de Sud.</p>`, scene: `globe`, options: { points: [ { lat: 51.87, lon: 12.65, label: `Wittenberg (luterani)`, color: `#1d4ed8` }, { lat: 46.2, lon: 6.14, label: `Geneva (calvini)`, color: `#15803d` }, { lat: 51.5, lon: -0.12, label: `Londra (anglicani)`, color: `#b91c1c` }, { lat: 46.07, lon: 11.12, label: `Trento (catolici)`, color: `#b45309` }, { lat: 39.9, lon: 116.4, label: `Beijing (Matteo Ricci, 1601)`, color: `#b45309` }, { lat: 15.5, lon: 73.83, label: `Goa (Francisc Xaveriu, 1542)`, color: `#b45309` }, { lat: 42.36, lon: -71.06, label: `Boston (puritani, 1630)`, color: `#15803d` } ], routes: [ { points: [3, 5, 4], color: `#b45309` }, { points: [2, 6], color: `#15803d` } ] } }
      ]
    },
    {
      type: `quiz`,
      title: `Mini-test 2`,
      questions: [
        { type: `mc`, q: `Cine a întemeiat Compania lui Iisus?`, options: [`Calvin`, `Ignațiu de Loyola`, `Carlo Borromeo`, `Luther`], answer: 1, explain: `Aprobată de papă în 1540.` },
        { type: `text`, q: `Ce rege englez a întemeiat Biserica anglicană?`, answer: [`henric al viii-lea`, `henric 8`, `henric viii`], explain: `Henric al VIII-lea, prin Actul de supremație din 1534.` },
        { type: `order`, q: `Pune în ordine`, items: [`95 de teze`, `Dieta de la Worms`, `Deschiderea Conciliului de la Trento`, `Pacea de la Augsburg`], explain: `1517, 1521, 1545, 1555.` }
      ]
    },
    {
      type: `conceptMap`,
      title: `Hartă conceptuală: marea divizare`,
      nodes: [
        { id: `abusi`, label: `Abuzuri în Biserică`, x: 12, y: 12, color: `#b91c1c`, html: `<p>Vânzarea indulgențelor, simonie, cler puțin instruit.</p>`, why: `<p>Biserica era și o putere economică și politică; funcțiile erau o sursă de venit și erau date din interes. Critici asemănătoare fuseseră făcute deja de Wycliffe, Hus și Savonarola.</p>` },
        { id: `stampa`, label: `Tiparul`, x: 42, y: 12, color: `#475569`, html: `<p>Pamflete și Biblii tipărite cu miile.</p>`, why: `<p>Fără tipar (Gutenberg, circa 1455), ideile lui Luther ar fi rămas într-un singur oraș, ca cele ale lui Hus. Se estimează că, între 1518 și 1525, scrierile lui Luther reprezentau aproximativ o treime din toate cărțile în germană vândute în acei ani.</p>` },
        { id: `principi`, label: `Interesele principilor`, x: 75, y: 12, color: `#ca8a04`, html: `<p>Independență față de Roma și de împărat, bunurile Bisericii.</p>`, why: `<p>Sfântul Imperiu Roman era împărțit în sute de state: principii voiau mai multă autonomie față de Carol Quintul, iar Reforma oferea o ocazie.</p>` },
        { id: `lutero`, label: `Luther și cele 95 de teze`, x: 30, y: 42, color: `#1d4ed8`, html: `<p>Numai credința, numai Scriptura, preoția universală.</p>`, why: `<p>Luther a ajuns la ideile sale studiind epistolele Sfântului Pavel („cel drept prin credință va fi viu”, Romani 1,17) și propria neliniște pentru mântuire.</p>` },
        { id: `protestanti`, label: `Biserici protestante`, x: 62, y: 45, color: `#15803d`, html: `<p>Luterani, calvini, anglicani, anabaptiști.</p>`, why: `<p>Odată respinsă autoritatea papei, fiecare interpreta Biblia în felul său: de aceea protestantismul s-a împărțit în multe Biserici diferite.</p>` },
        { id: `trento`, label: `Conciliul de la Trento`, x: 22, y: 78, color: `#b45309`, html: `<p>1545–1563: confirmarea doctrinei și reforma abuzurilor.</p>`, why: `<p>Era răspunsul oficial al Bisericii: un conciliu (adunarea episcopilor) are cea mai înaltă autoritate în definirea doctrinei catolice.</p>` },
        { id: `gesuiti`, label: `Iezuiți, Inchiziție, Index`, x: 50, y: 85, color: `#7c3aed`, html: `<p>Educație, misiuni și controlul ideilor.</p>`, why: `<p>Biserica a înțeles că bătălia se câștiga prin educație (colegiile iezuiților) și prin controlul cărților, tocmai pentru că tiparul le făcea atât de puternice.</p>` },
        { id: `guerre`, label: `Războaie religioase`, x: 82, y: 78, color: `#be123c`, html: `<p>Războiul țăranilor, războaiele din Franța, apoi Războiul de treizeci de ani.</p>`, why: `<p>Religia și politica erau împletite: se credea că un stat poate avea o singură credință. Toleranța religioasă s-a impus încet, după multe războaie.</p>` }
      ],
      edges: [ [`abusi`, `lutero`, `provoacă`], [`stampa`, `lutero`, `răspândește`], [`principi`, `protestanti`, `protejează`], [`lutero`, `protestanti`, `întemeiază`], [`lutero`, `trento`, `răspuns`], [`trento`, `gesuiti`, `instrumente`], [`protestanti`, `guerre`, `conflicte`], [`gesuiti`, `guerre`, ``] ]
    }
  ],
  glossary: [
    { t: `Indulgență`, d: `Iertarea pedepselor păcatelor acordată de Biserică; în secolul al XVI-lea era și vândută.` },
    { t: `Teză`, d: `Afirmație propusă spre discuție.` },
    { t: `Excomunicare`, d: `Excluderea din comunitatea Bisericii.` },
    { t: `Protestanți`, d: `Creștini care aparțin Bisericilor născute din Reformă; numele vine de la „protestul” de la Speyer (1529).` },
    { t: `Predestinare`, d: `Doctrină a lui Calvin potrivit căreia Dumnezeu a hotărât deja cine va fi mântuit.` },
    { t: `Conciliu`, d: `Adunare a episcopilor care hotărăște în chestiuni de credință și disciplină.` },
    { t: `Contrareforma`, d: `Ansamblul măsurilor Bisericii Catolice împotriva răspândirii protestantismului.` },
    { t: `Iezuiți`, d: `Membri ai Companiei lui Iisus, ordin întemeiat de Ignațiu de Loyola.` },
    { t: `Hughenoți`, d: `Calvinii francezi.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `De ce a promovat papa Leon al X-lea vânzarea indulgențelor în 1515?`, options: [`Pentru a finanța bazilica Sf. Petru`, `Pentru a plăti o cruciadă`, `Pentru a cumpăra cărți`, `Pentru a întemeia iezuiții`], answer: 0, explain: `Noua bazilică era un șantier extrem de costisitor.` },
      { type: `text`, q: `În ce oraș preda Luther?`, answer: [`wittenberg`], explain: `La Wittenberg, în Saxonia.` },
      { type: `tf`, q: `Pentru Luther, omul se mântuiește mai ales cumpărând indulgențe și făcând fapte bune.`, answer: false, explain: `Pentru Luther, omul se mântuiește numai prin credință, datorită harului lui Dumnezeu.` },
      { type: `mc`, q: `Ce a stabilit Pacea de la Augsburg (1555)?`, options: [`Libertatea religioasă pentru toți`, `Că fiecare principe alege religia supușilor`, `Sfârșitul Conciliului de la Trento`, `Nașterea Bisericii anglicane`], answer: 1, explain: `Cuius regio, eius religio.` },
      { type: `mc`, q: `În ce oraș a predicat Jean Calvin?`, options: [`Roma`, `Geneva`, `Londra`, `Paris`], answer: 1, explain: `Geneva, din 1541.` },
      { type: `order`, q: `Pune în ordine cronologică`, items: [`Cele 95 de teze ale lui Luther`, `Actul de supremație al lui Henric al VIII-lea`, `Aprobarea iezuiților`, `Sfârșitul Conciliului de la Trento`, `Edictul de la Nantes`], explain: `1517, 1534, 1540, 1563, 1598.` },
      { type: `num`, q: `Câți ani a durat Conciliul de la Trento (din 1545 până în 1563)?`, answer: 18, tol: 0, unit: `ani`, explain: `1563 − 1545 = 18 ani, cu lungi întreruperi.` },
      { type: `mc`, q: `Care dintre aceste hotărâri NU a fost luată de Conciliul de la Trento?`, options: [`Crearea seminariilor`, `Obligarea episcopilor să locuiască în eparhie`, `Desființarea liturghiei în latină`, `Confirmarea celor șapte sacramente`], answer: 2, explain: `Liturghia a rămas în latină până la Conciliul Vatican II (1962–1965).` },
      { type: `tf`, q: `Numele „protestanți” provine de la Dieta de la Speyer din 1529.`, answer: true, explain: `Principii luterani au protestat împotriva hotărârilor împăratului.` },
      { type: `mc`, q: `Ce factor a ajutat cel mai mult la răspândirea rapidă a ideilor lui Luther?`, options: [`Tiparul`, `Telegraful`, `Cruciadele`, `Ciuma`], answer: 0, explain: `Pamfletele și Bibliile tipărite circulau repede.` },
      { type: `text`, q: `Cum se numea lista cărților interzise catolicilor?`, answer: [`index`, `indexul cărților interzise`, `indexul`], explain: `Indexul cărților interzise (1559).` }
    ]
  }
});
