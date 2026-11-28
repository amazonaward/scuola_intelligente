TOPIC('ro', {
  id: "l1-dir-economia-bisogni",
  title: "Economia: nevoi, bunuri și servicii",
  intro: "Ai 20 de euro. Un cinema, o pereche de căști, o pizza cu prietenii: nu poți avea de toate. În fiecare zi, fără să știi, faci alegeri economice. <b>Economia</b> studiază exact acest lucru: cum aleg oamenii, firmele și statele să folosească resurse <b>limitate</b> pentru a satisface nevoi <b>nelimitate</b>. În această lecție afli ce sunt <b>nevoile</b>, <b>bunurile</b> și <b>serviciile</b>, de ce bunurile sunt <b>rare</b> și ce înseamnă să faci o alegere cu un <b>cost de oportunitate</b>.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Ce este economia",
      html: `<p>Cuvântul vine din grecescul <i>oikonomía</i>, „administrarea casei” (<i>oikos</i> = casă, <i>nomos</i> = regulă). Astăzi <b>economia</b> este știința care studiază cum <b>folosesc</b> oamenii și societățile <b>resurse rare</b> pentru a produce bunuri și servicii și a le distribui între indivizi. O definiție celebră a fost dată în 1932 de economistul englez <b>Lionel Robbins</b>: economia studiază comportamentul uman ca relație între <b>scopuri</b> și <b>mijloace rare</b> care au utilizări alternative.</p>
<p>Economia se împarte în:</p>
<ul>
<li><b>microeconomie</b>: studiază comportamentul agenților individuali (o gospodărie, o firmă) și formarea prețurilor pe piețe;</li>
<li><b>macroeconomie</b>: studiază fenomenele întregului sistem (produsul național, ocuparea forței de muncă, inflația, datoria publică).</li>
</ul>
<p>Se deosebește apoi între economia <b>pozitivă</b> (descrie faptele: „dacă prețul crește, cererea scade”) și economia <b>normativă</b> (judecă ce ar fi drept să se facă: „statul ar trebui să mărească impozitele pentru cei bogați”). Primul tip de afirmație poate fi verificat cu date; al doilea depinde și de valori.</p>`
    },
    {
      type: "text",
      title: "2. Nevoile",
      html: `<p><b>Nevoia</b> este senzația de lipsă a ceva, însoțită de dorința de a o satisface. Nevoile umane sunt practic <b>nelimitate</b>: de îndată ce le satisfaci pe una, se naște alta (ți-e foame, mănânci; apoi vrei un desert; apoi un restaurant mai bun). Se clasifică în mai multe feluri.</p>
<p><b>După importanță:</b></p>
<ul>
<li><b>primare</b> (sau vitale): indispensabile supraviețuirii: a mânca, a bea, a te adăposti de frig, a te îngriji;</li>
<li><b>secundare</b> (sau de lux): nu sunt indispensabile, dar pot îmbunătăți viața: a călători, a face sport, a asculta muzică, a avea un smartphone de ultimă generație.</li>
</ul>
<p><b>După subiect:</b></p>
<ul>
<li><b>individuale</b>: resimțite de o singură persoană (a cumpăra o carte);</li>
<li><b>colective</b>: resimțite de o întreagă comunitate și satisfăcute prin servicii comune (siguranță, școală, drumuri, justiție, sănătate publică).</li>
</ul>
<p>Psihologul american <b>Abraham Maslow</b> (1943) a propus o „piramidă” cu cinci niveluri: nevoi <b>fiziologice</b> (hrană, somn), de <b>siguranță</b> (locuință, sănătate, loc de muncă), de <b>apartenență</b> (prieteni, familie, iubire), de <b>stimă</b> (respect, succes), de <b>autorealizare</b> (dezvoltarea propriilor capacități). După Maslow, de regulă se încearcă satisfacerea nevoilor de nivel mai jos înainte de a trece la cele superioare.</p>
<p>Nevoile depind de <b>epocă, cultură, vârstă și venit</b>: astăzi internetul este pentru mulți o nevoie aproape primară; acum cincizeci de ani nu exista.</p>`
    },
    {
      type: "svg",
      title: "Piramida nevoilor a lui Maslow",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Piramida lui Maslow cu cinci niveluri">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<polygon points="300,15 245,65 355,65" fill="#e9d5ff" stroke="#7e22ce" stroke-width="2"/>
<text x="300" y="52" text-anchor="middle" font-size="14" font-weight="bold" fill="#581c87">Sine</text>
<polygon points="245,65 355,65 390,115 210,115" fill="#fbcfe8" stroke="#be185d" stroke-width="2"/>
<text x="300" y="97" text-anchor="middle" font-size="14" font-weight="bold" fill="#831843">Stimă</text>
<polygon points="210,115 390,115 425,165 175,165" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
<text x="300" y="147" text-anchor="middle" font-size="14" font-weight="bold" fill="#7c2d12">Apartenență</text>
<polygon points="175,165 425,165 460,215 140,215" fill="#fef08a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="197" text-anchor="middle" font-size="14" font-weight="bold" fill="#713f12">Siguranță</text>
<polygon points="140,215 460,215 495,270 105,270" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
<text x="300" y="248" text-anchor="middle" font-size="14" font-weight="bold" fill="#14532d">Fiziologice</text>
<text x="515" y="45" font-size="14" fill="#334155">Autorealizare</text>
<text x="515" y="150" font-size="14" fill="#334155">Relații</text>
<text x="515" y="250" font-size="14" fill="#334155">Supraviețuire</text>
</svg>`,
      caption: "Nevoile lui Maslow, de la bază (supraviețuire) la vârf (realizarea de sine)."
    },
    {
      type: "widget",
      title: "Primare sau secundare?",
      widget: "classify",
      options: {
        groups: ["Nevoie primară", "Nevoie secundară"],
        items: [
          ["A bea apă", 0],
          ["A juca jocuri video", 1],
          ["A te îngriji când ești bolnav", 0],
          ["A merge în vacanță în străinătate", 1],
          ["A avea un acoperiș deasupra capului", 0],
          ["A cumpăra haine de firmă", 1],
          ["A mânca", 0],
          ["A merge la un concert", 1]
        ]
      },
      caption: "Deosebește ceea ce este necesar vieții de ceea ce o face mai plăcută."
    },
    {
      type: "text",
      title: "3. Bunuri și servicii",
      html: `<p>Nevoile se satisfac cu <b>bunuri</b> și <b>servicii</b>.</p>
<p><b>Bunurile</b> sunt lucrurile utile pentru a satisface o nevoie. Se clasifică în:</p>
<ul>
<li><b>libere</b>: disponibile în cantitate nelimitată, care nu cer muncă pentru a fi obținute (aerul, lumina soarelui); din ce în ce mai puține: apa curată, de exemplu, costă astăzi;</li>
<li><b>economice</b>: disponibile în cantitate limitată, au un <b>preț</b> și cer muncă pentru a fi produse. Sunt obiectul economiei.</li>
</ul>
<p>Bunurile economice se împart la rândul lor în:</p>
<ul>
<li><b>materiale</b> (o bicicletă, pâinea) și <b>imateriale</b> (un brevet, un software, o marcă);</li>
<li><b>de consum</b>: satisfac direct o nevoie (un sandviș, o pereche de pantofi); pot fi <b>durabile</b> (se folosesc de mai multe ori: mașina de spălat, telefonul) și <b>nedurabile</b> (se consumă imediat: mâncarea);</li>
<li><b>de producție</b> (sau capital): servesc la producerea altor bunuri (utilaje, computerele unei firme, un cuptor);</li>
<li><b>complementare</b>: se folosesc împreună (mașină și benzină, pix și cerneală);</li>
<li><b>substituibile</b> (sau înlocuitoare): satisfac aceeași nevoie și se pot înlocui (unt și margarină, tren și autocar).</li>
</ul>
<p><b>Serviciile</b> sunt prestații, activități care satisfac o nevoie fără a produce un obiect: predarea, consultația medicală, transportul, tunsul. Se produc și se consumă în același moment și nu pot fi depozitate.</p>`
    },
    {
      type: "example",
      title: "Ziua Sofiei în bunuri și servicii",
      html: `<p>Sofia se trezește (<b>bun liber</b>: aerul, lumina), bea cafea cu zahăr (<b>bunuri de consum nedurabile</b>, între ele <b>complementare</b>). Merge la școală cu autobuzul (<b>serviciu</b> de transport public) și învață cu o tabletă (<b>bun durabil</b>). Profesorul ei oferă un <b>serviciu</b> de educație. Pizzeria folosește cuptorul, un <b>bun de producție</b>, ca să facă pizza. Dacă prețul autocarului crește, Sofia ar putea prefera trenul: cele două sunt <b>substituibile</b>.</p>`
    },
    {
      type: "widget",
      title: "Bun sau serviciu?",
      widget: "classify",
      options: {
        groups: ["Bun", "Serviciu"],
        items: [
          ["O pereche de pantofi", 0],
          ["O lecție de chitară", 1],
          ["Un sandviș", 0],
          ["O consultație la medic", 1],
          ["Un tractor", 0],
          ["Transportul cu trenul", 1],
          ["O carte", 0],
          ["O tunsoare", 1]
        ]
      },
      caption: "Un bun este un lucru, un serviciu este o activitate."
    },
    {
      type: "quiz",
      title: "Verifică imediat",
      questions: [
        { type: "mc", q: "Care dintre acestea este un bun de producție?", options: ["Cuptorul unei pizzerii", "O înghețată", "O melodie ascultată"], answer: 0, explain: "Servește la producerea altor bunuri (pizza); celelalte satisfac direct o nevoie." },
        { type: "tf", q: "Nevoile umane sunt limitate și curând toate sunt satisfăcute.", answer: false, explain: "Nevoile sunt nelimitate: după ce una este satisfăcută, se naște alta." },
        { type: "mc", q: "Pixul și cerneala sunt bunuri...", options: ["Complementare", "Substituibile", "Libere"], answer: 0, explain: "Se folosesc împreună; cele substituibile se înlocuiesc reciproc." }
      ]
    },
    {
      type: "text",
      title: "4. Raritatea și problema economică",
      html: `<p>Resursele naturale, timpul, munca și banii sunt <b>limitate</b>, în timp ce nevoile sunt <b>nelimitate</b>. Această contradicție se numește <b>raritate</b> și stă la originea economiei. Nu înseamnă că resursele sunt puține în mod absolut, ci că sunt <b>insuficiente</b> pentru a satisface toate nevoile.</p>
<p>Fiindcă nu poți avea totul, fiecare societate (și fiecare persoană) trebuie să răspundă la trei întrebări fundamentale:</p>
<ol>
<li><b>Ce să producă</b>, și în ce cantitate (mai multe școli sau mai multe drumuri? mai multă mâncare sau mai multe mașini?)?</li>
<li><b>Cum să producă</b> (cu multe utilaje sau cu multă muncă omenească? cu ce tehnologii?)?</li>
<li><b>Pentru cine să producă</b>: cum să distribuie bunurile între oameni?</li>
</ol>
<p>Răspunsurile la aceste întrebări definesc diferitele <b>sisteme economice</b> (pe care le vom vedea în lecția următoare).</p>
<p>Pentru a produce se folosesc <b>factorii de producție</b>:</p>
<ul>
<li><b>munca</b> (activitatea celui care lucrează, fizică sau intelectuală);</li>
<li><b>pământul</b> (resursele naturale: sol, apă, minerale, energie);</li>
<li><b>capitalul</b> (utilaje, clădiri, instrumente și banii pentru a le cumpăra);</li>
<li><b>spiritul întreprinzător</b> (capacitatea de a organiza factorii și de a-și asuma riscul de întreprinzător; uneori considerat un factor aparte).</li>
</ul>
<p>Cel care pune la dispoziție un factor primește o remunerație: <b>salariul</b> pentru muncă, <b>renta</b> pentru pământ, <b>dobânda</b> pentru capital, <b>profitul</b> pentru firmă.</p>`
    },
    {
      type: "text",
      title: "5. A alege costă: costul de oportunitate",
      html: `<p>Fiindcă resursele sunt rare, orice alegere implică o renunțare. <b>Costul de oportunitate</b> al unei alegeri este <b>valoarea celei mai bune alternative la care renunți</b>. Nu este doar prețul plătit: cuprinde și ceea ce ai fi putut face cu acei bani sau cu acel timp.</p>
<p>Exemple:</p>
<ul>
<li>Ai 20 de euro: alegi cinematograful (10 euro) sau o carte (10 euro) pentru care ai fi plătit mai mult? Costul de oportunitate al cinematografului este cartea la care renunți.</li>
<li>O oră de studiu după-amiaza are drept cost de oportunitate o oră de sport cu prietenii; timpul este și el o resursă rară.</li>
<li>Un stat care cheltuiește mai mult pentru apărare are mai puține resurse pentru școală: este vechea dilemă „tunuri sau unt”.</li>
</ul>
<p>Economiștii reprezintă această problemă prin <b>frontiera posibilităților de producție</b>: un grafic care arată combinațiile maxime din două bunuri pe care o economie le poate produce cu resursele de care dispune. Pentru a avea mai mult din unul, trebuie să produci mai puțin din celălalt.</p>`
    },
    {
      type: "svg",
      title: "Frontiera posibilităților de producție",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Frontiera posibilităților de producție">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<line x1="80" y1="250" x2="80" y2="30" stroke="#334155" stroke-width="2"/>
<line x1="80" y1="250" x2="540" y2="250" stroke="#334155" stroke-width="2"/>
<path d="M80,60 Q300,80 480,250" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3" fill-opacity="0.6"/>
<circle cx="250" cy="105" r="8" fill="#16a34a"/>
<text x="268" y="102" font-size="14" font-weight="bold" fill="#14532d">A: eficient</text>
<circle cx="170" cy="190" r="8" fill="#f59e0b"/>
<text x="188" y="200" font-size="14" font-weight="bold" fill="#78350f">B: resurse irosite</text>
<circle cx="450" cy="90" r="8" fill="#dc2626"/>
<text x="360" y="75" font-size="14" font-weight="bold" fill="#7f1d1d">C: de neatins</text>
<text x="40" y="45" font-size="14" fill="#1e293b">Bunuri X</text>
<text x="490" y="275" font-size="14" fill="#1e293b">Bunuri Y</text>
</svg>`,
      caption: "Punctele de pe curbă sunt combinații eficiente; cele de sub ea indică resurse nefolosite pe deplin; cele din afară sunt de neatins cu resursele actuale."
    },
    {
      type: "example",
      title: "Costul de oportunitate al unei zile de sâmbătă",
      html: `<p>Luca are o sâmbătă liberă și două opțiuni: să lucreze 5 ore într-un magazin câștigând 40 de euro, sau să meargă la un turneu de fotbal în sală care îi place foarte mult (gratuit). Dacă merge la turneu, <b>costul lui de oportunitate</b> este de <b>40 de euro</b>: ceea ce sacrifică. Dacă, în schimb, lucrează, costul de oportunitate este distracția de la turneu. Nu există o alegere corectă în mod absolut: depinde de valoarea pe care Luca o dă fiecărei alternative. Dar este o greșeală să spui că a merge la turneu „nu costă nimic”.</p>`
    },
    {
      type: "curiosity",
      title: "Paradoxul apei și al diamantelor",
      html: `<p>Adam Smith, în <i>Avuția națiunilor</i> (1776), a observat un paradox: apa este indispensabilă vieții, dar costă foarte puțin, diamantele sunt inutile pentru supraviețuire, dar costă foarte mult. Valoarea economică nu depinde doar de utilitate, ci de <b>raritate</b>. Mai târziu economiștii au explicat că ceea ce contează este <b>utilitatea marginală</b>: pentru cine are multă apă, un litru în plus valorează puțin; în deșert, un singur pahar poate valora foarte mult.</p>`
    },
    {
      type: "text",
      title: "6. Utilitatea marginală descrescătoare",
      html: `<p>Când consumi mai multe unități din același bun, <b>utilitatea</b> (satisfacția) fiecărei unități suplimentare <b>scade</b>. Primul sandviș, când ți-e foarte foame, dă o mare satisfacție; al doilea dă mai puțin; al cincilea te-ar putea deranja. Aceasta este <b>legea utilității marginale descrescătoare</b>.</p>
<p>Este unul dintre motivele pentru care oamenii nu cheltuiesc totul pe un singur bun, ci <b>își diversifică consumul</b>. Și ajută la explicarea modului în care se formează prețul: dacă un bun este foarte rar, utilitatea ultimei unități rămâne mare, iar oamenii sunt dispuși să plătească mai mult.</p>
<p><b>Valoarea</b> unui bun se împarte în <b>valoare de întrebuințare</b> (utilitatea pe care o are pentru cel care îl folosește) și <b>valoare de schimb</b> (ceea ce se poate obține în schimb: prețul). Apa are valoare de întrebuințare mare și valoare de schimb mică; diamantele, invers.</p>`
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li><b>Nevoile</b> sunt nelimitate; <b>resursele</b> sunt rare. De aici se naște economia.</li>
<li>Nevoi: primare/secundare, individuale/colective.</li>
<li>Bunuri (libere, economice) și servicii. Bunurile pot fi de consum sau de producție; complementare sau substituibile.</li>
<li>Factori de producție: <b>muncă, pământ, capital</b> (+ spirit întreprinzător).</li>
<li><b>Cost de oportunitate</b>: valoarea celei mai bune alternative la care renunți.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege raritatea și alegerea",
      intro: "Conceptul de alegere economică este mai simplu dacă îl vezi în acțiune.",
      tabs: [
        {
          label: "🍕 Bugetul de 20 de euro",
          html: `<p>Ai 20 de euro pentru weekend: 10 pentru cinema, 8 pentru pizza, 15 pentru niște căști: în total 33 de euro. Nu ajung: trebuie să alegi. Dacă alegi cinema + pizza (18 euro), renunți la căști: valoarea lor este <b>costul de oportunitate</b> al alegerii tale. A face un buget înseamnă exact ceea ce face economia, în mic.</p>`
        },
        {
          label: "⏰ Timpul ca resursă",
          html: `<p>Timpul este cea mai rară resursă dintre toate: fiecare zi are 24 de ore pentru toți. O oră petrecută cu un joc video este o oră pe care nu o dedici studiului, somnului sau prietenilor. Chiar și cel mai bogat om are o singură zi de 24 de ore. De aceea se spune că „timpul înseamnă bani”: nu pentru că ar fi același lucru, ci pentru că are mereu un cost de oportunitate.</p>`
        },
        {
          label: "🌍 Satul cu o singură barcă",
          html: `<p>Într-un sat există o singură barcă. Poate servi la pescuit (hrană) sau la transportul mărfurilor la piață (venit). În fiecare zi în care este folosită pentru un lucru, nu este disponibilă pentru celălalt. Comunitatea trebuie să hotărască <b>ce să producă</b>, <b>cum</b> și <b>pentru cine</b>: sunt cele trei întrebări fundamentale ale oricărui sistem economic.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Hartă: problema economică",
      nodes: [
        { id: "bisogni", label: "Nevoi nelimitate", x: 20, y: 10, color: "#2563eb", html: "Primare și secundare, individuale și colective.", why: "Nevoile sunt nelimitate pentru că se schimbă odată cu cultura, tehnologia, venitul: de îndată ce nevoile vitale sunt satisfăcute, apar nevoi de siguranță, apartenență, stimă (Maslow)." },
        { id: "risorse", label: "Resurse rare", x: 80, y: 10, color: "#dc2626", html: "Pământ, muncă, capital, timp.", why: "Resursele au o limită fizică (planeta, timpul, competențele). Progresul tehnic o mută mai departe, dar nu o elimină." },
        { id: "scarsita", label: "Raritate", x: 50, y: 38, color: "#a855f7", html: "Resursele nu ajung pentru toate nevoile.", why: "Este problema fundamentală a economiei: dacă totul ar fi din abundență, nu ar fi nevoie să alegi și nici să dai un preț bunurilor." },
        { id: "scelta", label: "Alegere și cost de oportunitate", x: 20, y: 68, color: "#16a34a", html: "A alege înseamnă a renunța la ceva.", why: "Orice alegere are un cost nu doar în bani, ci și în alternative pierdute. Conceptul explică de ce există prețuri, economii, investiții, educație (a renunța astăzi pentru a câștiga mâine)." },
        { id: "beni", label: "Bunuri și servicii", x: 80, y: 68, color: "#f59e0b", html: "Libere/economice; de consum/de producție; servicii.", why: "Sunt modul în care se satisfac nevoile. Doar bunurile economice sunt rare și deci au preț: aerul este un bun liber, apa potabilă nu." },
        { id: "produzione", label: "Factori de producție", x: 50, y: 90, color: "#0891b2", html: "Muncă, pământ, capital, spirit întreprinzător.", why: "Sunt ingredientele cu care se produc bunuri și servicii. Cine le oferă primește o remunerație: salariu, rentă, dobândă, profit." }
      ],
      edges: [["bisogni", "scarsita", "se ciocnesc de"], ["risorse", "scarsita", "provoacă"], ["scarsita", "scelta", "obligă la"], ["scarsita", "beni", "face economice"], ["beni", "produzione", "produse cu"]]
    },
    {
      type: "curiosity",
      title: "Bunurile libere devin economice",
      html: `<p>Cândva apa curată era un bun liber pentru multe comunități. Astăzi, din cauza poluării și a creșterii populației, în multe zone este un bun <b>economic</b>, cu un preț (facturile) și chiar cu conflicte pentru folosirea ei. Și aerul curat din marile orașe tinde să devină rar: de aceea există limite ale emisiilor și piețe ale „drepturilor de emisie”.</p>`
    },
    {
      type: "quiz",
      title: "A doua verificare",
      questions: [
        { type: "mc", q: "Care este costul de oportunitate al unei după-amiezi petrecute la cinema în loc să lucrezi pentru 30 de euro?", options: ["Cel puțin 30 de euro la care renunți", "Zero, pentru că cinematograful este gratuit", "Doar prețul biletului"], answer: 0, explain: "Este valoarea celei mai bune alternative la care renunți: 30 de euro necâștigați (pe lângă bilet, dacă se plătește)." },
        { type: "tf", q: "Serviciile se pot depozita ca bunurile.", answer: false, explain: "Un serviciu se produce și se consumă în același moment (o lecție, o călătorie cu trenul)." },
        { type: "mc", q: "Cum se numește remunerația pentru capital?", options: ["Dobânda", "Salariul", "Renta"], answer: 0, explain: "Salariu pentru muncă, rentă pentru pământ, dobândă pentru capital, profit pentru întreprinzător." }
      ]
    }
  ],
  glossary: [
    { t: "Economie", d: "Știința care studiază cum se folosesc resursele rare pentru a satisface nevoi nelimitate." },
    { t: "Nevoie", d: "Senzația de lipsă a ceva, însoțită de dorința de a o satisface." },
    { t: "Bun economic", d: "Bun rar, care are un preț și cere muncă pentru a fi produs." },
    { t: "Bun liber", d: "Bun disponibil în cantitate nelimitată, fără cost, precum aerul." },
    { t: "Bun de producție", d: "Bun folosit pentru a produce alte bunuri (utilaje, echipamente)." },
    { t: "Serviciu", d: "Prestație care satisface o nevoie fără a produce un obiect." },
    { t: "Raritate", d: "Insuficiența resurselor în raport cu nevoile nelimitate." },
    { t: "Cost de oportunitate", d: "Valoarea celei mai bune alternative la care renunți atunci când faci o alegere." },
    { t: "Factori de producție", d: "Munca, pământul, capitalul (și spiritul întreprinzător): resursele folosite pentru a produce." },
    { t: "Utilitate marginală", d: "Satisfacția suplimentară dată de o unitate în plus dintr-un bun; de regulă scade." },
    { t: "Microeconomie și macroeconomie", d: "Studiul agenților individuali și al piețelor (micro) și al întregului sistem economic (macro)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "De ce se naște problema economică?", options: ["Pentru că resursele sunt rare în raport cu nevoile", "Pentru că prețurile sunt prea mari", "Pentru că există banii"], answer: 0, explain: "Raritatea obligă la alegere." },
      { type: "tf", q: "Aerul este un exemplu clasic de bun liber.", answer: true, explain: "Este disponibil în cantitate nelimitată, fără a fi nevoie să plătești." },
      { type: "mc", q: "Care este un bun complementar automobilului?", options: ["Benzina", "Autocarul", "Bicicleta"], answer: 0, explain: "Cele complementare se folosesc împreună; autocarul și bicicleta sunt substituibile." },
      { type: "text", q: "Cum se numește valoarea celei mai bune alternative la care renunți?", answer: ["cost de oportunitate", "costul de oportunitate", "costul oportunității", "cost de oportunitate (cost-oportunitate)"], explain: "Este costul de oportunitate." },
      { type: "mc", q: "Care nu este un factor de producție?", options: ["Banii consumatorilor", "Munca", "Pământul"], answer: 0, explain: "Factorii sunt munca, pământul, capitalul (plus spiritul întreprinzător)." },
      { type: "order", q: "Așază nevoile din piramida lui Maslow de la cea mai de jos la cea mai de sus.", items: ["Fiziologice", "Siguranță", "Apartenență", "Stimă", "Autorealizare"], explain: "Nevoile cele mai elementare vin primele, cele de realizare de sine sunt în vârf." },
      { type: "num", q: "Ai 30 de euro și alegi să cheltuiești 12 euro pe cinema și 18 pe o pizza. Cât îți rămâne?", answer: 0, tol: 0, unit: "euro", explain: "12 + 18 = 30: nu-ți rămâne nimic; orice altă cheltuială ar fi cerut să renunți la ceva." },
      { type: "mc", q: "Un serviciu este...", options: ["O activitate care satisface o nevoie fără a produce un obiect", "Un obiect durabil", "Un bun de producție"], answer: 0, explain: "Lecția, consultația, transportul sunt servicii." },
      { type: "tf", q: "Conform legii utilității marginale descrescătoare, fiecare unitate suplimentară din același bun dă, de regulă, mai puțină satisfacție.", answer: true, explain: "Al cincilea sandviș dă mai puțină plăcere decât primul." },
      { type: "mc", q: "Microeconomia studiază...", options: ["Comportamentul agenților individuali și al piețelor", "Întregul produs național", "Istoria monedei"], answer: 0, explain: "Analiza întregului sistem este macroeconomia." }
    ]
  }
});
