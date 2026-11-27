TOPIC('ro', {
  id: "l1-ita-testo-narrativo",
  title: "Textul narativ",
  intro: "Povestim istorii de când există limbajul: la gura sobei, în romane, în seriale, în jocuri video. Dar cum este construită o poveste? În această lecție înveți <b>instrumentele analizei narative</b>: diferența dintre <b>fabulă și intrigă</b>, <b>naratorul</b> și <b>punctul de vedere</b>, <b>personajele</b>, <b>timpul</b> și <b>spațiul</b>. Sunt aceleași instrumente pe care le folosesc criticii, scenariștii și scriitorii.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Ce este un text narativ",
      html: `<p>Un <b>text narativ</b> povestește o serie de <b>fapte</b> (reale sau inventate) legate între ele în timp și prin raporturi de cauză și efect, care implică niște <b>personaje</b>. Sunt narative romanul, povestirea, nuvela, basmul, fabula, dar și un articol de cronică, o bandă desenată, un film.</p>
<p>Un text narativ este de obicei alcătuit din mai multe tipuri de <b>secvențe</b>:</p>
<ul>
<li><b>narative</b>: povestesc faptele, fac acțiunea să înainteze;</li>
<li><b>descriptive</b>: prezintă locuri, persoane, obiecte și opresc pentru o clipă acțiunea;</li>
<li><b>dialogate</b>: redau cuvintele personajelor (vorbirea directă);</li>
<li><b>reflexive</b>: conțin gândurile și comentariile naratorului sau ale personajelor.</li>
</ul>
<p>O poveste are o structură tipică în patru faze, pe care o numim <b>schemă narativă</b>:</p>
<ol>
<li><b>Situația inițială</b> (echilibru): cine, unde, când.</li>
<li><b>Ruperea echilibrului</b> (complicația): se întâmplă ceva care pune povestea în mișcare.</li>
<li><b>Desfășurarea</b> (peripețiile): protagonistul înfruntă obstacole (adesea culminând cu <i>punctul culminant</i>, sau <i>climax</i>).</li>
<li><b>Deznodământul</b> și <b>situația finală</b>: problema este rezolvată, se naște un nou echilibru (uneori deschis).</li>
</ol>`
    },
    {
      type: "svg",
      title: "Schema narativă",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<polyline points="30,230 130,230 200,170 290,120 380,60 470,170 570,200" fill="none" stroke="#2563eb" stroke-width="4"/>
<circle cx="30" cy="230" r="7" fill="#2563eb"/><circle cx="130" cy="230" r="7" fill="#dc2626"/><circle cx="380" cy="60" r="8" fill="#f59e0b"/><circle cx="570" cy="200" r="7" fill="#16a34a"/>
<text x="30" y="260" font-size="14" fill="#0f172a">Situația</text><text x="30" y="278" font-size="14" fill="#0f172a">inițială</text>
<text x="105" y="205" font-size="14" fill="#dc2626" font-weight="bold">Ruperea</text><text x="105" y="222" font-size="14" fill="#dc2626" font-weight="bold">echilibrului</text>
<text x="215" y="115" font-size="14" fill="#0f172a">Desfășurarea</text><text x="215" y="133" font-size="14" fill="#0f172a">(peripeții)</text>
<text x="395" y="55" font-size="14" fill="#b45309" font-weight="bold">Climax</text>
<text x="470" y="210" font-size="14" fill="#0f172a">Deznodământ</text><text x="440" y="288" font-size="14" fill="#16a34a" font-weight="bold">Situația finală</text>
<text x="300" y="25" font-size="16" text-anchor="middle" font-weight="bold" fill="#0f172a">Tensiunea crește și apoi scade</text>
</svg>`,
      caption: "Linia albastră reprezintă tensiunea narativă: crește până la climax și apoi se dezleagă."
    },
    {
      type: "text",
      title: "2. Fabula și intriga",
      html: `<p>În secolul al XX-lea <b>formaliștii ruși</b> (Viktor Șklovski, Boris Tomașevski) au deosebit două niveluri:</p>
<ul>
<li><b>Fabula</b>: faptele în <b>ordinea cronologică și cauzală</b> în care s-au petrecut „în realitate”.</li>
<li><b>Intriga</b> (sujetul): faptele așa cum <b>alege autorul să le prezinte</b>, chiar în altă ordine (anticipări, flashback-uri, salturi), pentru a crea suspans, surpriză sau semnificație.</li>
</ul>
<p>Exemplu: într-un roman polițist fabula pornește de la crimă și ajunge la descoperirea vinovatului; intriga începe de la cadavru și reconstituie <i>retrospectiv</i> cum s-a ajuns aici. Fabula este o „cronică”; intriga este <b>arta</b> de a povesti.</p>
<p><i>Notă</i>: în terminologia românească, „fabulă” are și sensul de specie literară (cu animale, cu morală); aici folosim termenul în sensul teoriei narative, de succesiune cronologică a faptelor.</p>`
    },
    {
      type: "example",
      title: "Aceeași fabulă, două intrigi",
      html: `<p><b>Fabula</b>: (1) Sara își pierde portofelul, (2) un trecător îl găsește, (3) îl duce la poliție, (4) Sara îl recuperează.</p>
<p><b>Intriga A</b> (liniară): 1-2-3-4, ca în ordinea faptelor.</p>
<p><b>Intriga B</b> (cu flashback): se deschide cu Sara care își ridică portofelul de la poliție (4); apoi ne întoarcem în timp: „cu trei ore înainte” îl pierduse (1)... Cititorul se întreabă imediat <i>cum s-a ajuns aici</i>: se naște curiozitatea. Povestea este aceeași, efectul este diferit.</p>`
    },
    {
      type: "widget",
      title: "Fabulă sau intrigă?",
      widget: "classify",
      options: { groups: ["Ține de intrigă (tehnică narativă)", "Ține de fabulă (ordinea faptelor)"], items: [["Flashback", 0], ["Anticipare", 0], ["Ordinea cronologică a faptelor", 1], ["Povestire care începe de la final", 0], ["Succesiunea reală cauză-efect", 1]] },
      caption: "Deosebește tehnicile autorului de ordinea reală a faptelor."
    },
    {
      type: "text",
      title: "3. Naratorul și punctul de vedere",
      html: `<p>Nu trebuie confundat <b>autorul</b> (persoana reală care scrie) cu <b>naratorul</b> (vocea care povestește în interiorul textului). Naratorul poate fi:</p>
<ul>
<li><b>Extern</b> (persoana a III-a): nu participă la poveste („Lucia alerga spre casă...”). Poate fi <b>omniscient</b> (știe totul, chiar și gândurile) sau se poate limita la ceea ce se poate observa din exterior.</li>
<li><b>Intern</b> (persoana I): este un personaj al poveștii, protagonist sau martor („Alergam spre casă...”). Știe doar ceea ce știe și vede el și poate fi <b>nesigur (nesincer)</b>.</li>
</ul>
<p>Teoreticianul <b>Gérard Genette</b> (1930-2018) deosebește și <b>focalizarea</b>, adică <i>din ce punct de vedere</i> vedem faptele:</p>
<ul>
<li><b>Focalizare zero</b>: naratorul știe mai mult decât personajele (omniscientă). De exemplu <i>I promessi sposi</i> de Manzoni.</li>
<li><b>Focalizare internă</b>: vedem prin ochii unui personaj și știm doar ce știe el.</li>
<li><b>Focalizare externă</b>: naratorul știe mai puțin decât personajul și redă doar ce se vede și se aude, fără a explica gândurile.</li>
</ul>
<p><b>Cuvintele personajelor</b> se redau în trei moduri: <b>vorbire directă</b> (ghilimele sau linii de dialog: „Vin”, a spus), <b>vorbire indirectă</b> (A spus că va veni) și <b>vorbire indirectă liberă</b> (fără introducere, vocea personajului se amestecă cu cea a naratorului: <i>S-a dus la fereastră. Ce plictiseală, ploaia asta!</i>).</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege punctul de vedere",
      intro: "Punctul de vedere este lucrul cel mai greu de văzut într-un text. Iată trei metafore.",
      tabs: [
        { label: "🎥 Camera de filmat", html: "<p>Gândește-te la narator ca la o <b>cameră de filmat</b>. Cu <b>focalizarea zero</b>, camera este o dronă care vede totul de sus, chiar și în interiorul caselor. Cu <b>focalizarea internă</b>, este un joc video la persoana întâi: vezi doar ce vede personajul. Cu <b>focalizarea externă</b>, este o cameră de supraveghere: înregistrează acțiuni și cuvinte, dar nu gânduri.</p>" },
        { label: "🔁 Rescrie scena", html: "<p>Cel mai bun mod de a înțelege punctul de vedere este să-l <b>schimbi</b>. Scena: un băiat întârzie la școală. <br><b>Extern omniscient</b>: <i>Marco intră în clasă neliniștit: știa că profesorul era deja furios.</i> <br><b>Intern (persoana I)</b>: <i>Am intrat și mi s-a făcut sângele gheață: profesorul se uita țintă la mine.</i> <br><b>Extern obiectiv</b>: <i>Marco a deschis ușa. Profesorul a încetat să vorbească.</i><br>Se schimbă tonul, informațiile, simpatia pe care o simțim pentru personaj.</p>" },
        { label: "👁️ Schema punctelor de vedere", html: "<p>Schema arată cât de multe știe naratorul în raport cu personajul.</p>", svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><text x="300" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#0f172a">Focalizarea (Genette)</text><rect x="30" y="60" width="160" height="150" rx="10" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/><text x="110" y="95" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">ZERO</text><text x="110" y="125" font-size="14" text-anchor="middle" fill="#0f172a">narator &gt; personaj</text><text x="110" y="150" font-size="14" text-anchor="middle" fill="#0f172a">știe totul</text><text x="110" y="175" font-size="14" text-anchor="middle" fill="#0f172a">(omniscientă)</text><rect x="220" y="60" width="160" height="150" rx="10" fill="#bbf7d0" stroke="#166534" stroke-width="2"/><text x="300" y="95" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">INTERNĂ</text><text x="300" y="125" font-size="14" text-anchor="middle" fill="#0f172a">narator = personaj</text><text x="300" y="150" font-size="14" text-anchor="middle" fill="#0f172a">vede cu ochii lui</text><rect x="410" y="60" width="160" height="150" rx="10" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><text x="490" y="95" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">EXTERNĂ</text><text x="490" y="125" font-size="14" text-anchor="middle" fill="#0f172a">narator &lt; personaj</text><text x="490" y="150" font-size="14" text-anchor="middle" fill="#0f172a">doar acțiuni și cuvinte</text><text x="300" y="260" font-size="14" text-anchor="middle" fill="#0f172a">Punctul de vedere schimbă ce știm și ce simțim</text></svg>` }
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: narator și fabulă",
      questions: [
        { type: "mc", q: "Într-o povestire la persoana I, naratorul este...", options: ["extern", "intern", "întotdeauna omniscient"], answer: 1, explain: "Cel care spune „eu” este un personaj al poveștii: narator intern." },
        { type: "tf", q: "Intriga respectă întotdeauna ordinea cronologică a faptelor.", answer: false, explain: "Intriga poate modifica ordinea prin flashback-uri și anticipări; fabula urmează ordinea reală." },
        { type: "mc", q: "„S-a așezat. Ce plictiseală, lecția aia!” este un exemplu de...", options: ["vorbire directă", "vorbire indirectă liberă", "descriere"], answer: 1, explain: "Gândul personajului intră în poveste fără verbe introductive și fără ghilimele." }
      ]
    },
    {
      type: "text",
      title: "4. Personajele",
      html: `<p>Personajele sunt ființele (persoane, animale, creaturi fantastice) care acționează în poveste. După <b>rolul</b> lor se deosebesc:</p>
<ul>
<li><b>Protagonistul</b>: personajul central, a cărui poveste o urmărim (este <b>eroul</b> din basme).</li>
<li><b>Antagonistul</b>: cel care i se opune protagonistului.</li>
<li><b>Ajutorul</b> (sau aliatul): cel care îl sprijină. <b>Personajele secundare</b>: completează acțiunea.</li>
</ul>
<p>Scriitorul englez <b>E. M. Forster</b> (<i>Aspecte ale romanului</i>, 1927) a deosebit personajele <b>plate</b> (definite de o singură calitate, previzibile) de personajele <b>rotunde</b> (complexe, capabile să surprindă și să se schimbe). Un personaj poate fi:</p>
<ul>
<li><b>static</b> (nu se schimbă pe parcursul poveștii) sau <b>dinamic</b> (se transformă);</li>
<li><b>tip</b> (reprezintă o categorie, precum zgârcitul) sau <b>individ</b> (unic).</li>
</ul>
<p>Cititorul cunoaște un personaj în mai multe feluri: prin <b>caracterizare directă</b> (naratorul îl descrie: „era un om zgârcit”) și <b>indirectă</b> (o deducem din acțiuni, cuvinte, alegeri și obiectele pe care le are). Aceasta din urmă este preferată în literatura modernă: <i>„show, don't tell”</i> (arată, nu spune).</p>`
    },
    {
      type: "example",
      title: "Cum „vedem” un personaj",
      html: `<p>Compară două moduri de a prezenta același personaj:</p>
<p><b>Direct</b>: <i>„Giulia era o persoană foarte generoasă.”</i></p>
<p><b>Indirect</b>: <i>„Giulia și-a golit portofelul pentru bărbatul așezat pe trotuar, apoi s-a întors acasă pe jos.”</i></p>
<p>În al doilea caz deducem din fapte: cititorul participă activ, deci se implică mai mult.</p>`
    },
    {
      type: "text",
      title: "5. Timpul și spațiul",
      html: `<p><b>Timpul</b> are două dimensiuni:</p>
<ul>
<li><b>Timpul poveștii</b>: durata reală a evenimentelor (ani, o zi).</li>
<li><b>Timpul povestirii</b>: câtă întindere dedică textul acelor evenimente (rânduri, pagini).</li>
</ul>
<p>Raportul dintre cele două creează <b>ritmul</b>:</p>
<ul>
<li><b>Scena</b>: timpul poveștii ≈ timpul povestirii (mai ales dialogurile).</li>
<li><b>Rezumatul</b>: perioade lungi povestite în câteva rânduri („Au trecut zece ani”).</li>
<li><b>Elipsa</b>: un interval de timp este sărit cu totul.</li>
<li><b>Pauza</b>: povestirea se oprește (descriere, reflecție) în timp ce povestea nu înaintează.</li>
<li><b>Dilatarea</b>: o clipă durează multe rânduri (așteptarea lungă).</li>
</ul>
<p>Cât despre ordine: <b>analepsa</b> (flashback: salt în trecut), <b>prolepsa</b> (anticiparea viitorului). Timpul poate fi <b>cronologic</b> (extern, al ceasurilor) sau <b>psihologic</b> (interior: o oră de plictiseală pare veșnică).</p>
<p><b>Spațiul</b> este locul acțiunii: <b>real</b> sau <b>imaginar</b>, <b>deschis</b> sau <b>închis</b>. Nu este doar un fundal: creează atmosferă, exprimă starea sufletească, uneori este un simbol (castelul, pădurea, marea).</p>`
    },
    {
      type: "curiosity",
      title: "„I promessi sposi” începe cu un peisaj",
      html: `<p>Celebrul început al lui Alessandro Manzoni, <i>\"Quel ramo del lago di Como, che volge a mezzogiorno...\"</i> („Acel braț al lacului Como, care se întoarce spre miazăzi...”), deschide povestea cu o <b>lungă descriere</b> a locurilor (pauză narativă), înainte chiar de a introduce personajele. Romanul, publicat în versiunea definitivă în 1840-42, are un narator extern <b>omniscient</b> și adesea ironic, care comentează faptele. Pretinde că rescrie un manuscris din secolul al XVII-lea al unui anonim: este artificiul „manuscrisului regăsit”.</p>`
    },
    {
      type: "curiosity",
      title: "Timpul în jocurile video și în seriale",
      html: `<p>Serialele folosesc continuu tehnicile învățate: <i>flashback-ul</i> (analepsa), <i>elipsa</i> („trei luni mai târziu”) și <i>cliffhanger-ul</i> (final suspendat în momentul de maximă tensiune, ca într-un serial lăsat la jumătate). Și jocurile video se joacă cu punctul de vedere: camera la persoana întâi este o focalizare internă, cea din înălțime este omniscientă.</p>`
    },
    {
      type: "conceptMap",
      title: "Hartă: elementele textului narativ",
      nodes: [
        { id: "tn", label: "Text narativ", x: 50, y: 8, color: "#3b82f6", html: "Povestește fapte legate în timp și prin cauză-efect, trăite de personaje.", why: "A povesti este una dintre cele mai vechi forme de gândire: dă ordine experienței și o face comunicabilă." },
        { id: "fab", label: "Fabulă și intrigă", x: 18, y: 38, color: "#10b981", html: "Fabula = ordinea cronologică a faptelor; intriga = ordinea aleasă de autor.", why: "Distincție propusă de formaliștii ruși (anii 1910-1920) pentru a explica faptul că arta stă în felul de a povesti, nu doar în ceea ce se povestește." },
        { id: "nar", label: "Narator și punct de vedere", x: 82, y: 38, color: "#f59e0b", html: "Narator extern sau intern; focalizare zero, internă, externă.", why: "Cel care povestește decide ce știm și cât de mult avem încredere. Genette (<i>Figure III</i>, 1972) a sistematizat conceptele pentru a analiza cu precizie." },
        { id: "per", label: "Personaje", x: 30, y: 72, color: "#8b5cf6", html: "Protagonist, antagonist, ajutoare; plate sau rotunde.", why: "Personajele dau sens emoțional intrigii: Forster (1927) a arătat că un personaj bine construit surprinde în mod convingător." },
        { id: "ts", label: "Timp și spațiu", x: 70, y: 72, color: "#ef4444", html: "Timpul poveștii și al povestirii; analepsă și prolepsă; locuri ca atmosferă și simbol.", why: "Timpul povestirii creează ritm și suspans; spațiul nu este doar fundal, ci încarcă de semnificație întâmplarea." }
      ],
      edges: [["tn", "fab", "se organizează în"], ["tn", "nar", "este filtrat de"], ["tn", "per", "are"], ["tn", "ts", "se plasează în"]]
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<p>Pentru a analiza un text narativ întreabă-te: <b>cine povestește?</b> (narator), <b>de unde vede?</b> (focalizare), <b>în ce ordine?</b> (fabulă/intrigă), <b>cine acționează?</b> (personaje), <b>când și unde?</b> (timp și spațiu). Apoi caută <b>structura</b>: situația inițială, ruperea echilibrului, desfășurarea, deznodământul.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: personaje, timp și spațiu",
      questions: [
        { type: "mc", q: "Un personaj construit pe o singură calitate și previzibil este, după Forster...", options: ["rotund", "plat", "dinamic"], answer: 1, explain: "Forster numește „plate” personajele cu o singură caracteristică." },
        { type: "mc", q: "„Zece ani mai târziu, Anna s-a întors în sat.” Aici timpul este tratat prin...", options: ["o pauză", "un rezumat/o elipsă", "o scenă"], answer: 1, explain: "Zece ani sunt rezumați în câteva cuvinte." },
        { type: "tf", q: "Un flashback este o analepsă.", answer: true, explain: "Este un salt înapoi în timpul poveștii." }
      ]
    }
  ],
  glossary: [
    { t: "Fabulă", d: "Faptele povestite în ordinea cronologică și cauzală în care s-au petrecut." },
    { t: "Intrigă", d: "Faptele povestite în ordinea aleasă de autor." },
    { t: "Narator", d: "Vocea care povestește istoria, distinctă de autor." },
    { t: "Focalizare", d: "Punctul de vedere din care sunt prezentate faptele." },
    { t: "Analepsă", d: "Salt înapoi în timp (flashback)." },
    { t: "Prolepsă", d: "Anticiparea unor fapte viitoare." },
    { t: "Elipsă", d: "Salt temporal în care o perioadă nu este povestită." },
    { t: "Climax", d: "Momentul de maximă tensiune al poveștii." },
    { t: "Antagonist", d: "Personaj care i se opune protagonistului." },
    { t: "Vorbire indirectă liberă", d: "Cuvintele sau gândurile personajului se contopesc cu vocea naratorului, fără semnale." },
    { t: "Cliffhanger", d: "Final de episod suspendat în punctul de maximă tensiune." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Ce deosebește fabula de intrigă?", options: ["Lungimea textului", "Ordinea în care sunt prezentate faptele", "Numărul de personaje", "Tipul de narator"], answer: 1, explain: "Fabula urmează ordinea cronologică; intriga, ordinea aleasă de autor." },
      { type: "tf", q: "Autorul și naratorul sunt întotdeauna același lucru.", answer: false, explain: "Autorul este persoana reală; naratorul este o voce creată în interiorul textului." },
      { type: "mc", q: "Cu focalizare internă cititorul...", options: ["știe mai mult decât personajele", "știe doar ce știe personajul", "nu cunoaște gândurile și vede doar acțiuni", "cunoaște viitorul"], answer: 1, explain: "Vedem povestea prin ochii unui personaj." },
      { type: "text", q: "Cum se numește saltul înapoi în timp într-o povestire?", answer: ["analepsă", "analepsa", "flashback"], explain: "Analepsă (flashback): se evocă un fapt din trecut." },
      { type: "order", q: "Așază în ordine fazele schemei narative.", items: ["Situația inițială", "Ruperea echilibrului", "Desfășurarea", "Deznodământul"], explain: "Se pornește de la echilibru, acesta se rupe, se dezvoltă și în final se dezleagă." },
      { type: "mc", q: "„Era un om zgârcit” este un exemplu de caracterizare...", options: ["directă", "indirectă", "ironică", "dialogată"], answer: 0, explain: "Naratorul declară direct calitatea." },
      { type: "mc", q: "O descriere care oprește acțiunea este...", options: ["o scenă", "o pauză", "o elipsă", "un climax"], answer: 1, explain: "Timpul poveștii nu înaintează în timp ce povestirea continuă: pauză." },
      { type: "num", q: "Câte sunt fazele schemei narative de bază descrise în lecție (situația inițială, ruperea echilibrului, desfășurarea, deznodământul)?", answer: 4, tol: 0, explain: "Sunt patru." },
      { type: "mc", q: "În „I promessi sposi” naratorul este...", options: ["intern protagonist", "extern omniscient", "extern obiectiv", "intern martor"], answer: 1, explain: "Povestește din exterior, știe totul și comentează." }
    ]
  }
});
