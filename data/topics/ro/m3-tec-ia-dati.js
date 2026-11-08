TOPIC('ro', {
  id: `m3-tec-ia-dati`,
  title: `Inteligența artificială și datele`,
  intro: `Sugestiile de videoclipuri, traducătorul, chatboții care scriu texte, mașinile care frânează singure: <b>inteligența artificială</b> (IA) face deja parte din viața noastră. Dar cum poate o mașină să <b>învețe din date</b>? Ce este o <b>rețea neuronală</b>? Și care sunt <b>riscurile</b> (erori, prejudecăți, confidențialitate, falsuri) și <b>oportunitățile</b>? În această lecție ne uităm în interiorul „cutiei negre". 🤖📊`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Date, informații, cunoaștere`,
      html: `<p>O <b>dată</b> este o valoare brută: <i>38,5</i>. O <b>informație</b> este o dată cu un înțeles: <i>temperatura lui Marco este 38,5 °C</i>. <b>Cunoașterea</b> apare legând multe informații: <i>peste 37,5 °C avem febră</i>.</p>
<p>Datele pot fi:</p>
<ul>
<li><b>structurate</b>: ordonate în tabele (note, temperaturi, prețuri);</li>
<li><b>nestructurate</b>: texte, fotografii, sunete, videoclipuri (sunt marea majoritate).</li>
</ul>
<p>În calculator fiecare dată devine o succesiune de <b>biți</b> (0 și 1). O fotografie este o grilă de pixeli, fiecare cu trei numere (roșu, verde, albastru de la 0 la 255). Un text este o succesiune de numere, câte unul pentru fiecare caracter sau bucată de cuvânt.</p>
<p>În fiecare zi în lume se produc cantități uriașe de date (se vorbește de <b>big data</b>): tocmai această abundență a permis IA modernă să funcționeze.</p>`
    },
    {
      type: `text`, title: `2. Programăm sau lăsăm să învețe?`,
      html: `<p>În <b>programarea clasică</b> omul scrie <b>regulile</b>; calculatorul le aplică datelor și dă răspunsurile.</p>
<p>În <b>machine learning</b> (învățare automată) îi dăm calculatorului <b>datele</b> și <b>răspunsurile corecte</b> (exemple); calculatorul își extrage singur <b>regulile</b>, adică construiește un <b>model</b>.</p>
<p>Există trei moduri principale de a învăța:</p>
<ul>
<li><b>Supervizat</b>: exemple cu <b>eticheta</b> corectă („acest e-mail este spam / nu este spam"). Modelul învață să prezică eticheta.</li>
<li><b>Nesupervizat</b>: date fără etichetă; modelul găsește singur <b>grupuri</b> și asemănări (ex. clienți cu gusturi similare).</li>
<li><b>Prin întărire</b>: modelul încearcă acțiuni și primește <b>recompense sau penalizări</b>, ca atunci când dresezi un câine (ex. a învăța să joace un joc video).</li>
</ul>`
    },
    {
      type: `svg`, title: `Ciclul învățării automate`,
      caption: `Date ➜ împărțire în antrenare și test ➜ antrenare ➜ verificare pe date nemaivăzute ➜ utilizare. Dacă modelul greșește prea mult, ne întoarcem la date.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<rect x="20" y="40" width="120" height="70" rx="12" fill="#a78bfa"/>
<text x="80" y="70" font-size="16" fill="#fff" font-weight="bold" text-anchor="middle">1. DATE</text>
<text x="80" y="94" font-size="13" fill="#fff" text-anchor="middle">colectare, curățare</text>
<rect x="170" y="20" width="120" height="50" rx="10" fill="#22c55e"/>
<text x="230" y="50" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">80% antrenare</text>
<rect x="170" y="85" width="120" height="50" rx="10" fill="#f59e0b"/>
<text x="230" y="115" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">20% test</text>
<rect x="320" y="20" width="130" height="70" rx="12" fill="#7c3aed"/>
<text x="385" y="50" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">2. ANTRENEAZĂ</text>
<text x="385" y="73" font-size="12" fill="#ede9fe" text-anchor="middle">încearcă, greșește, corectează</text>
<rect x="470" y="40" width="115" height="70" rx="12" fill="#1d4ed8"/>
<text x="527" y="70" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">3. MODEL</text>
<text x="527" y="93" font-size="12" fill="#dbeafe" text-anchor="middle">„regulile" găsite</text>
<rect x="320" y="170" width="130" height="70" rx="12" fill="#f59e0b"/>
<text x="385" y="200" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">4. VERIFICARE</text>
<text x="385" y="223" font-size="12" fill="#fff" text-anchor="middle">pe datele de test</text>
<rect x="470" y="170" width="115" height="70" rx="12" fill="#16a34a"/>
<text x="527" y="200" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">5. UTILIZARE</text>
<text x="527" y="223" font-size="12" fill="#fff" text-anchor="middle">date noi</text>
<g stroke="#4c1d95" stroke-width="3" fill="none">
<path d="M140 65 L168 45"/><path d="M140 85 L168 110"/>
<path d="M290 45 L318 50"/><path d="M450 55 L468 70"/>
<path d="M527 112 L527 168"/><path d="M290 110 C 330 120, 360 140, 380 168"/>
<path d="M450 205 L468 205"/>
<path d="M320 220 C 200 260, 90 230, 80 112" stroke-dasharray="7 5"/>
</g>
<text x="170" y="262" font-size="13" fill="#4c1d95" font-weight="bold">prea multe erori? îmbunătățește datele</text>
</svg>`
    },
    {
      type: `text`, title: `3. În interiorul unei rețele neuronale`,
      html: `<p>Cele mai puternice IA de azi folosesc <b>rețelele neuronale artificiale</b>, inspirate (foarte de departe) de neuronii creierului.</p>
<p>Un <b>neuron artificial</b> face un calcul foarte simplu:</p>
<ol>
<li>primește niște <b>numere la intrare</b> (input);</li>
<li>înmulțește fiecare cu o <b>pondere</b> (cât de important este);</li>
<li>adună totul (plus o valoare numită <i>bias</i>);</li>
<li>dacă rezultatul depășește un <b>prag</b>, „se activează" și trimite un semnal neuronilor următori.</li>
</ol>
<p>Exemplu: <i>„Merg în parc?"</i> Input: e soare (1), am teme (1), e un prieten (1). Ponderi: soare +3, teme −4, prieten +2. Suma: 3 − 4 + 2 = <b>1</b>. Prag 0 ➜ 1 &gt; 0 ➜ <b>da, merg!</b></p>
<p>O rețea este făcută din <b>straturi</b>: stratul de intrare, unul sau mai multe <b>straturi ascunse</b>, stratul de ieșire. Când rețelele au multe straturi se vorbește de <b>deep learning</b> (învățare profundă). <b>A antrena</b> rețeaua înseamnă a ajusta automat, de milioane de ori, <b>ponderile</b> pentru a reduce erorile. Marile modele lingvistice au <b>miliarde</b> de ponderi.</p>`
    },
    {
      type: `3d`, title: `O mică rețea neuronală în 3D`,
      scene: `molecule`,
      options: {
        atoms: [
          { x: -2, y: 1.2, z: 0, r: 0.3, color: `#22c55e`, label: `intrare 1` },
          { x: -2, y: 0, z: 0, r: 0.3, color: `#22c55e`, label: `intrare 2` },
          { x: -2, y: -1.2, z: 0, r: 0.3, color: `#22c55e`, label: `intrare 3` },
          { x: 0, y: 1.6, z: 0.5, r: 0.3, color: `#a855f7`, label: `ascuns` },
          { x: 0, y: 0.5, z: -0.5, r: 0.3, color: `#a855f7`, label: `ascuns` },
          { x: 0, y: -0.5, z: 0.5, r: 0.3, color: `#a855f7`, label: `ascuns` },
          { x: 0, y: -1.6, z: -0.5, r: 0.3, color: `#a855f7`, label: `ascuns` },
          { x: 2, y: 0.6, z: 0, r: 0.35, color: `#f97316`, label: `pisică` },
          { x: 2, y: -0.6, z: 0, r: 0.35, color: `#f97316`, label: `câine` }
        ],
        bonds: [[0, 3], [0, 4], [0, 5], [0, 6], [1, 3], [1, 4], [1, 5], [1, 6], [2, 3], [2, 4], [2, 5], [2, 6], [3, 7], [3, 8], [4, 7], [4, 8], [5, 7], [5, 8], [6, 7], [6, 8]]
      },
      caption: `Verde: neuroni de intrare (de exemplu pixeli). Violet: stratul ascuns. Portocaliu: ieșirile (pisică sau câine). Fiecare legătură are o pondere care se reglează în timpul antrenării.`
    },
    {
      type: `quiz`, title: `Mini-test: cum învață o mașină`,
      questions: [
        { type: `mc`, q: `Un model care învață din e-mailuri deja etichetate „spam / nu e spam" folosește învățarea…`, options: [`supervizată`, `nesupervizată`, `prin întărire`], answer: 0, explain: `Exemplele au eticheta corectă: este supervizată.` },
        { type: `num`, q: `Un neuron are inputurile 1 și 1, ponderile 2 și −5. Cât este suma ponderată?`, answer: -3, tol: 0, explain: `1×2 + 1×(−5) = 2 − 5 = −3.` },
        { type: `tf`, q: `Datele de test servesc la verificarea modelului pe exemple pe care nu le-a mai văzut.`, answer: true, explain: `Dacă l-am verifica pe aceleași date de antrenare, modelul ar putea doar să „țină minte", fără să generalizeze.` }
      ]
    },
    {
      type: `text`, title: `4. IA generativă și chatboții`,
      html: `<p><b>IA generativă</b> creează conținuturi noi: texte, imagini, muzică, videoclipuri. Chatboții pe care îi cunoști se bazează pe <b>mari modele lingvistice</b> (LLM, <i>Large Language Models</i>).</p>
<p>Un LLM a fost antrenat pe cantități uriașe de texte să facă un singur lucru, dar foarte bine: <b>să prezică următorul cuvânt (sau următoarea bucată de cuvânt)</b>. Repetând predicția de multe ori, scrie propoziții întregi.</p>
<p>Consecințe importante:</p>
<ul>
<li>modelul <b>nu „știe" ca un om</b>: produce textul cel mai probabil, care de obicei este corect, dar <b>uneori inventează</b> fapte, date sau surse în mod convingător (se numesc <b>halucinații</b>);</li>
<li>răspunsurile depind de cum pui întrebarea (<b>prompt</b>-ul);</li>
<li>informațiile trebuie mereu <b>verificate</b> pe surse de încredere.</li>
</ul>`
    },
    {
      type: `text`, title: `5. Riscuri și reguli`,
      html: `<ul>
<li><b>Prejudecăți (bias)</b>: dacă datele sunt dezechilibrate, va fi și modelul. Un sistem antrenat aproape numai pe fețe de un anumit tip le recunoaște mai prost pe celelalte.</li>
<li><b>Erori și halucinații</b>: IA poate greși cu mare siguranță.</li>
<li><b>Confidențialitate</b>: fotografiile, vocea, mesajele, locația sunt <b>date personale</b>. În Europa le protejează <b>GDPR</b> (Regulamentul general privind protecția datelor, în vigoare din 2018).</li>
<li><b>Deepfake și dezinformare</b>: imagini, sunete și videoclipuri false, dar realiste.</li>
<li><b>Energie și mediu</b>: antrenarea și folosirea marilor modele cer centre de date care consumă multă electricitate și apă pentru răcire.</li>
<li><b>Muncă și învățare</b>: IA poate ajuta, dar dacă îți face temele în locul tău… tu nu înveți!</li>
</ul>
<p>Uniunea Europeană a adoptat în <b>2024</b> <b>AI Act</b>, prima mare lege din lume despre IA: împarte sistemele după <b>nivelul de risc</b> și le interzice pe cele inacceptabile (de exemplu „punctajul social" al cetățenilor). În 2025 și Italia a adoptat o lege proprie despre IA, care printre altele cere <b>consimțământul părinților</b> pentru folosirea ei de către minorii sub 14 ani.</p>
<p><b>Oportunități</b>: diagnostice medicale mai timpurii, traduceri instantanee, ajutor pentru persoanele cu dizabilități (citirea textelor pentru cei care nu văd, subtitrări automate), prognoze meteo, descoperirea de noi medicamente și materiale.</p>`
    },
    {
      type: `widget`, title: `Joc: risc sau oportunitate?`,
      widget: `classify`,
      options: {
        groups: [`Oportunități 🌱`, `Riscuri ⚠️`],
        items: [
          [`🩺 Găsirea tumorilor pe radiografii înaintea medicului`, 0],
          [`🔊 Citirea cu voce tare a unui text pentru cineva care nu vede`, 0],
          [`🌍 Traducerea în timp real a unei conversații`, 0],
          [`💊 Descoperirea de noi molecule pentru medicamente`, 0],
          [`🎭 Videoclip fals cu un politician care spune lucruri pe care nu le-a spus niciodată`, 1],
          [`📸 Folosirea fotografiilor unor persoane fără permisiunea lor`, 1],
          [`⚖️ Selectarea candidaților cu date pline de prejudecăți`, 1],
          [`📝 Copierea unei teme scrise de IA fără s-o înțelegi`, 1]
        ]
      },
      caption: `Aceeași unealtă poate fi folosită în scopuri bune sau rele: contează cum o folosim.`
    },
    {
      type: `example`, title: `Exemplu practic: filtrul anti-spam`,
      html: `<p>Serviciul tău de e-mail primește milioane de mesaje. Pentru a antrena filtrul:</p>
<ol>
<li><b>Date</b>: multe e-mailuri deja marcate de utilizatori ca „spam" sau „nu e spam".</li>
<li><b>Caracteristici</b> (features): cuvinte precum „GRATIS", „ai câștigat", linkuri ciudate, expeditor necunoscut…</li>
<li><b>Antrenare</b>: modelul învață cât cântărește fiecare caracteristică.</li>
<li><b>Test</b>: din 1000 de e-mailuri noi, clasifică bine 980 ➜ <b>acuratețe</b> = 980 ÷ 1000 = <b>98%</b>.</li>
</ol>
<p>Când apeși „Raportează ca spam", oferi un nou exemplu etichetat: și tu antrenezi modelul!</p>`
    },
    {
      type: `example`, title: `Exemplu practic: sugestiile de videoclipuri`,
      html: `<p>Platformele video înregistrează ce urmărești, cât timp, ce sari. Cu învățarea <b>nesupervizată</b> grupează utilizatorii cu gusturi similare; apoi îți propun ce a plăcut „celor ca tine".</p>
<p>Partea bună: descoperi conținuturi interesante. Riscul: <b>bula de filtrare</b> (<i>filter bubble</i>), adică să vezi mereu aceleași idei, și timpul care trece fără să-ți dai seama. Scopul sistemului este să te țină acolo cât mai mult: ține minte!</p>`
    },
    {
      type: `curiosity`, title: `Știai că… numele „inteligență artificială" are o dată de naștere?`,
      html: `<p>În <b>1950</b> matematicianul englez <b>Alan Turing</b> s-a întrebat „Pot mașinile să gândească?" și a propus un joc, numit apoi <b>testul Turing</b>. Termenul <b>„artificial intelligence"</b> a fost folosit de <b>John McCarthy</b> pentru un seminar de vară la Dartmouth College (SUA) în <b>1956</b>. În 1958 Frank Rosenblatt a construit <b>perceptronul</b>, primul neuron artificial capabil să învețe.</p>`
    },
    {
      type: `curiosity`, title: `Știai că… mașinile au învins campionii?`,
      html: `<p>În <b>1997</b> calculatorul <b>Deep Blue</b> de la IBM l-a învins pe campionul mondial de șah <b>Garry Kasparov</b>, dar folosind mai ales calcul „prin forță brută". În <b>2016</b> <b>AlphaGo</b> de la DeepMind l-a învins pe campionul <b>Lee Sedol</b> la <b>Go</b>, un joc cu mai multe poziții posibile decât atomi în universul observabil: acolo erau necesare rețelele neuronale. În noiembrie <b>2022</b> lansarea ChatGPT a făcut chatboții cunoscuți sutelor de milioane de oameni în doar câteva luni.</p>`
    },
    {
      type: `widget`, title: `Istoria IA`,
      widget: `timeline`,
      options: { events: [
        { year: 1950, label: `Turing: „Pot mașinile să gândească?"`, icon: `🧠` },
        { year: 1956, label: `Dartmouth: se naște termenul „IA"`, icon: `🏫` },
        { year: 1958, label: `Perceptronul lui Rosenblatt`, icon: `🔘` },
        { year: 1997, label: `Deep Blue îl învinge pe Kasparov la șah`, icon: `♟️` },
        { year: 2012, label: `Rețelele profunde recunosc imaginile`, icon: `🖼️` },
        { year: 2016, label: `AlphaGo îl învinge pe Lee Sedol la Go`, icon: `⚫` },
        { year: 2022, label: `Chatboții devin un fenomen de masă`, icon: `💬` },
        { year: 2024, label: `UE: se adoptă AI Act`, icon: `⚖️` }
      ], unit: `ani` },
      caption: `Șaptezeci de ani de istorie: perioade lungi de așteptare („ierni ale IA") și accelerări bruște.`
    },
    {
      type: `remember`, title: `De ținut minte: folosește IA cu cap`,
      html: `<ul>
<li>IA învață <b>din date</b>: dacă datele sunt greșite sau părtinitoare, va fi și ea.</li>
<li>Dă răspunsuri <b>probabile</b>, nu sigure: <b>verifică</b> mereu pe surse de încredere.</li>
<li><b>Nu introduce date personale</b> (ale tale sau ale altora) în chatboți.</li>
<li>Folosește-o ca să înțelegi, nu ca să copiezi; și spune când ai folosit-o.</li>
<li>Deciziile importante rămân la <b>oameni</b>.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Alte moduri de a înțelege`,
      intro: `Cum „învață" cu adevărat o mașină? Iată patru drumuri diferite.`,
      tabs: [
        {
          label: `🍳 Bucătarul și rețeta`,
          html: `<p><b>Programarea clasică</b>: îți dau <b>rețeta</b> (regulile) și ingredientele (datele) ➜ tu faci tortul (răspunsul).</p>
<p><b>Machine learning</b>: îți dau <b>multe torturi deja făcute</b> cu ingredientele lor, iar tu trebuie să <b>ghicești rețeta</b>. Guști, încerci, greșești, corectezi… La final „rețeta" pe care ai reconstruit-o este <b>modelul</b>.</p>`
        },
        {
          label: `🎛️ Butoanele`,
          html: `<p>Imaginează-ți o masă de mixaj cu mii de <b>butoane</b> (ponderile). Îi arăți mașinii o fotografie cu o pisică: ea răspunde „câine". Eroare! Atunci rotește <b>puțin</b> fiecare buton în direcția care ar fi redus eroarea. Repetă cu milioane de fotografii. La final butoanele sunt în poziția potrivită pentru a recunoaște pisicile.</p>
<p>Această metodă de ajustare a butoanelor se numește <b>coborâre pe gradient</b>: ca atunci când cobori un munte în ceață făcând mereu un pas în jos.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#0f172a"/>
<g fill="#334155" stroke="#94a3b8" stroke-width="2">
<circle cx="80" cy="90" r="34"/><circle cx="190" cy="90" r="34"/><circle cx="300" cy="90" r="34"/><circle cx="410" cy="90" r="34"/><circle cx="520" cy="90" r="34"/>
</g>
<g stroke="#facc15" stroke-width="5" stroke-linecap="round">
<line x1="80" y1="90" x2="100" y2="65"/><line x1="190" y1="90" x2="165" y2="70"/><line x1="300" y1="90" x2="300" y2="58"/><line x1="410" y1="90" x2="440" y2="100"/><line x1="520" y1="90" x2="500" y2="62"/>
</g>
<g font-size="15" fill="#e2e8f0" text-anchor="middle"><text x="80" y="150">pondere 1</text><text x="190" y="150">pondere 2</text><text x="300" y="150">pondere 3</text><text x="410" y="150">pondere 4</text><text x="520" y="150">…</text></g>
<text x="300" y="195" font-size="16" fill="#facc15" text-anchor="middle" font-weight="bold">fiecare eroare ➜ mică corecție a tuturor butoanelor</text>
</svg>`
        },
        {
          label: `👶 Ca un copil`,
          html: `<p>Un copil mic vede un câine și spune „ham". Apoi vede o pisică și spune „ham": mama îl corectează, „nu, aia e o <b>pisică</b>". După multe exemple, învață diferența. Aceasta este învățarea <b>supervizată</b>.</p>
<p>Dar atenție la deosebiri: unui copil îi ajung câteva exemple; unei rețele neuronale îi trebuie mii sau milioane. Iar copilul <b>înțelege</b> ce este un animal, rețeaua găsește doar regularități în numere.</p>`
        },
        {
          label: `🃏 Flashcards cu termeni`,
          html: `<p>Repetă cuvintele-cheie ale IA (multe sunt în engleză).</p>`,
          widget: `flashcards`,
          options: { cards: [
            { front: `dataset`, back: `set de date folosit pentru antrenare` },
            { front: `training`, back: `antrenare: modelul își reglează ponderile` },
            { front: `model`, back: `rezultatul antrenării: „regulile" găsite` },
            { front: `bias`, back: `prejudecată din date pe care modelul o învață` },
            { front: `prompt`, back: `cererea pe care o scrii chatbotului` },
            { front: `halucinație`, back: `răspuns inventat, dar convingător` },
            { front: `deepfake`, back: `video/audio fals creat cu IA` }
          ] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Harta: inteligența artificială`,
      nodes: [
        { id: `dati`, label: `Date`, x: 15, y: 10, color: `#a855f7`, html: `Numere, texte, imagini, sunete: „materia primă" a IA.`, why: `Odată cu Internetul, smartphone-urile și senzorii, din anii 2000 cantitatea de date digitale a explodat: fără această abundență rețelele neuronale nu ar fi avut destule exemple.` },
        { id: `ml`, label: `Machine learning`, x: 50, y: 10, color: `#7c3aed`, html: `A învăța reguli din exemple în loc să le scrii.`, why: `Termenul a fost folosit de <b>Arthur Samuel</b> în 1959 pentru un program care învăța să joace dame, îmbunătățindu-se partidă după partidă.` },
        { id: `calc`, label: `Putere de calcul`, x: 85, y: 10, color: `#0ea5e9`, html: `Procesoare grafice (GPU) și centre de date.`, why: `GPU-urile, născute pentru jocuri video, fac mii de înmulțiri în paralel: exact ce trebuie rețelelor neuronale. Din 2012 au devenit principala unealtă a IA.` },
        { id: `sup`, label: `Supervizat`, x: 15, y: 40, color: `#22c55e`, html: `Exemple cu etichetă corectă.`, why: `Este metoda cea mai folosită pentru că eroarea se poate măsura ușor: se compară răspunsul modelului cu eticheta.` },
        { id: `nonsup`, label: `Nesupervizat`, x: 40, y: 40, color: `#16a34a`, html: `Găsește grupuri în date fără etichetă.`, why: `A eticheta costă timp și muncă umană: multe date nu au etichete, iar algoritmii de grupare (clustering) le folosesc oricum.` },
        { id: `rinf`, label: `Prin întărire`, x: 65, y: 40, color: `#15803d`, html: `Recompense și penalizări.`, why: `Se inspiră din experimentele de psihologie despre condiționarea animalelor (precum cele ale lui B. F. Skinner). AlphaGo l-a folosit jucând milioane de partide împotriva lui însuși.` },
        { id: `rete`, label: `Rețele neuronale`, x: 85, y: 62, color: `#f97316`, html: `Straturi de neuroni artificiali cu ponderi reglabile.`, why: `Inspirate de neuronul biologic descris de McCulloch și Pitts (1943) și de perceptronul lui Rosenblatt (1958). Metoda de antrenare a rețelelor cu multe straturi (backpropagation) a devenit celebră în 1986.` },
        { id: `gen`, label: `IA generativă`, x: 55, y: 75, color: `#ef4444`, html: `Creează texte, imagini, sunete noi.`, why: `În 2017 cercetătorii de la Google au publicat arhitectura <b>Transformer</b>, care permite analizarea unor propoziții întregi în paralel: este baza marilor modele lingvistice.` },
        { id: `etica`, label: `Riscuri și reguli`, x: 20, y: 85, color: `#64748b`, html: `Bias, confidențialitate, deepfake, energie; GDPR și AI Act.`, why: `Cu cât IA decide lucruri mai importante (credite, muncă, sănătate), cu atât sunt necesare mai multe reguli. UE a ales o abordare bazată pe <b>nivelul de risc</b>: cu cât riscul e mai mare, cu atât controalele sunt mai severe.` }
      ],
      edges: [
        [`dati`, `ml`, `alimentează`], [`calc`, `ml`, `face posibil`], [`ml`, `sup`, `tip`], [`ml`, `nonsup`, `tip`], [`ml`, `rinf`, `tip`],
        [`ml`, `rete`, `unealtă`], [`rete`, `gen`, `permite`], [`dati`, `etica`, `confidențialitate`], [`gen`, `etica`, `deepfake`]
      ]
    },
    {
      type: `quiz`, title: `Mini-test: riscuri și utilizare responsabilă`,
      questions: [
        { type: `mc`, q: `Ce este o „halucinație" a unui chatbot?`, options: [`O eroare de conexiune`, `Un răspuns inventat, dar scris în mod convingător`, `O imagine colorată`], answer: 1, explain: `Modelul generează text probabil, care uneori nu este adevărat.` },
        { type: `tf`, q: `Dacă datele de antrenare conțin prejudecăți, modelul le poate repeta.`, answer: true, explain: `Modelul învață ce găsește în date, inclusiv prejudecățile (bias).` },
        { type: `mc`, q: `Ce regulă europeană protejează datele personale din 2018?`, options: [`AI Act`, `GDPR`, `Wi-Fi Act`], answer: 1, explain: `GDPR, Regulamentul general privind protecția datelor.` }
      ]
    }
  ],
  glossary: [
    { t: `Dată`, d: `Valoare brută care, cu un înțeles, devine informație.` },
    { t: `Machine learning`, d: `Învățare automată: calculatorul își extrage regulile din exemple.` },
    { t: `Model`, d: `Rezultatul antrenării, folosit pentru a face predicții pe date noi.` },
    { t: `Rețea neuronală`, d: `Ansamblu de neuroni artificiali organizați în straturi, legați prin ponderi.` },
    { t: `Pondere`, d: `Număr care arată cât contează o legătură într-o rețea neuronală.` },
    { t: `Deep learning`, d: `Învățare cu rețele neuronale cu multe straturi.` },
    { t: `LLM`, d: `Mare model lingvistic: prezice următorul cuvânt dintr-un text.` },
    { t: `Bias`, d: `Prejudecată sau dezechilibru din date pe care modelul îl învață.` },
    { t: `Deepfake`, d: `Imagine, sunet sau video fals realizat cu IA.` },
    { t: `AI Act`, d: `Legea Uniunii Europene despre IA (2024), bazată pe niveluri de risc.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `În machine learning, ce îi oferim calculatorului?`, options: [`Doar regulile`, `Multe exemple (date), adesea cu răspunsurile corecte`, `Doar electricitate`], answer: 1, explain: `Calculatorul își extrage regulile din exemple.` },
      { type: `mc`, q: `Un robot care învață să meargă primind o recompensă când nu cade folosește învățarea…`, options: [`supervizată`, `nesupervizată`, `prin întărire`], answer: 2, explain: `Recompense și penalizări: învățare prin întărire.` },
      { type: `num`, q: `Un model clasifică corect 450 de fotografii din 500. Care este acuratețea în procente?`, answer: 90, tol: 0, unit: `%`, explain: `450 ÷ 500 = 0,9 = 90%.` },
      { type: `num`, q: `Neuron: inputuri 1, 0, 1 cu ponderile 3, 5, −1. Suma ponderată?`, answer: 2, tol: 0, explain: `1×3 + 0×5 + 1×(−1) = 3 + 0 − 1 = 2.` },
      { type: `tf`, q: `Un chatbot spune mereu adevărul pentru că a citit tot Internetul.`, answer: false, explain: `Poate face erori și „halucinații": trebuie verificat.` },
      { type: `tf`, q: `Deep learning folosește rețele neuronale cu multe straturi.`, answer: true, explain: `„Deep" = profund: multe straturi ascunse.` },
      { type: `mc`, q: `La ce servesc datele de test?`, options: [`La antrenarea modelului`, `La verificarea modelului pe exemple nemaivăzute`, `La decorarea setului de date`], answer: 1, explain: `Se măsoară cât de bine generalizează modelul.` },
      { type: `text`, q: `Cum îl cheamă pe matematicianul englez care în 1950 s-a întrebat dacă mașinile pot gândi?`, answer: [`turing`, `alan turing`], explain: `Alan Turing a propus „jocul imitației", testul Turing.` },
      { type: `order`, q: `Pune în ordine etapele învățării automate.`, items: [`Colectarea și curățarea datelor`, `Antrenarea modelului`, `Verificarea pe datele de test`, `Folosirea lui pe date noi`], explain: `Date ➜ antrenare ➜ test ➜ utilizare.` },
      { type: `mc`, q: `Ce comportament este corect cu un chatbot?`, options: [`Să scrii adresa și numărul de telefon ale colegilor`, `Să-l folosești ca să înțelegi un subiect și apoi să verifici în manual`, `Să predai textul generat ca și cum ar fi al tău`], answer: 1, explain: `Utilizare responsabilă: ca să înțelegi, verificând, fără date personale.` },
      { type: `mc`, q: `De ce ar putea un sistem de recunoaștere facială să funcționeze mai prost cu unele persoane?`, options: [`Pentru că datele de antrenare erau dezechilibrate`, `Pentru că acele persoane se mișcă`, `Pentru că calculatorul este obosit`], answer: 0, explain: `Este un caz de bias în date.` },
      { type: `tf`, q: `AI Act european clasifică sistemele de IA după nivelul de risc.`, answer: true, explain: `Risc inacceptabil (interzis), ridicat, limitat, minim.` }
    ],
    gen: [[`percent`, 2]]
  }
});
