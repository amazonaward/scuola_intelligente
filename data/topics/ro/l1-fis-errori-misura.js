TOPIC('ro', {
  id: "l1-fis-errori-misura",
  title: "Măsurarea și erorile",
  intro: "Nicio măsură nu este <b>exactă</b>. Dacă măsori de trei ori același catedră cu aceeași ruletă, probabil vei obține trei rezultate ușor diferite. Nu este un eșec: este chiar natura măsurării. Fizica experimentală nu caută «numărul adevărat», ci un <b>rezultat însoțit de incertitudinea lui</b>, scris cinstit. În această lecție învățăm să recunoaștem <b>caracteristicile instrumentelor</b>, să deosebim <b>erorile</b>, să calculăm <b>eroarea absolută și relativă</b> și să scriem corect <b>cifrele semnificative</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Instrumentele de măsură și caracteristicile lor",
      html: `<p>Un instrument de măsură se descrie prin câteva <b>caracteristici</b>:</p>
<ul>
<li><b>Domeniu de măsurare</b> (capacitate): valoarea maximă pe care o poate măsura instrumentul. Un cântar de bucătărie cu domeniul de 5 kg nu poate cântări o persoană.</li>
<li><b>Sensibilitate</b>: <b>cea mai mică variație</b> a mărimii pe care instrumentul reușește să o detecteze. Pentru o riglă gradată în milimetri este 1 mm; pentru un șubler cu vernier la 0,05 mm este 0,05 mm; pentru un cronometru digital 0,01 s.</li>
<li><b>Promptitudine</b>: rapiditatea cu care instrumentul răspunde la o variație (un termometru cu mercur este mai puțin prompt decât unul digital).</li>
<li><b>Fidelitate</b> (precizie): capacitatea de a da, repetând măsurarea în aceleași condiții, <b>valori apropiate între ele</b>.</li>
<li><b>Exactitate</b>: capacitatea de a da valori <b>apropiate de valoarea adevărată</b>.</li>
</ul>
<p>Instrumentele pot fi <b>analogice</b> (cu o scară gradată și un indicator: rigla, termometrul cu mercur) sau <b>digitale</b> (cu afișaj numeric: cronometrul, cântarul electronic).</p>`
    },
    {
      type: "svg",
      title: "Fidelitate și exactitate: ținta",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<g transform="translate(80,110)">
<circle r="70" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="48" fill="#fff" stroke="#991b1b" stroke-width="2"/><circle r="26" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="8" fill="#991b1b"/>
<g fill="#1d4ed8"><circle cx="-5" cy="4" r="5"/><circle cx="10" cy="-6" r="5"/><circle cx="3" cy="9" r="5"/><circle cx="-9" cy="-8" r="5"/><circle cx="8" cy="5" r="5"/></g>
</g>
<g transform="translate(240,110)">
<circle r="70" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="48" fill="#fff" stroke="#991b1b" stroke-width="2"/><circle r="26" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="8" fill="#991b1b"/>
<g fill="#1d4ed8"><circle cx="38" cy="-30" r="5"/><circle cx="46" cy="-24" r="5"/><circle cx="40" cy="-20" r="5"/><circle cx="44" cy="-34" r="5"/><circle cx="35" cy="-26" r="5"/></g>
</g>
<g transform="translate(400,110)">
<circle r="70" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="48" fill="#fff" stroke="#991b1b" stroke-width="2"/><circle r="26" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="8" fill="#991b1b"/>
<g fill="#1d4ed8"><circle cx="-28" cy="-20" r="5"/><circle cx="30" cy="14" r="5"/><circle cx="6" cy="40" r="5"/><circle cx="-34" cy="30" r="5"/><circle cx="20" cy="-36" r="5"/></g>
</g>
<g transform="translate(560,110)">
<circle r="70" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="48" fill="#fff" stroke="#991b1b" stroke-width="2"/><circle r="26" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="8" fill="#991b1b"/>
<g fill="#1d4ed8"><circle cx="-6" cy="-3" r="5"/><circle cx="4" cy="8" r="5"/><circle cx="-12" cy="10" r="5"/><circle cx="14" cy="-8" r="5"/><circle cx="0" cy="-14" r="5"/></g>
</g>
<g font-size="14" text-anchor="middle" fill="#0f172a" font-weight="bold">
<text x="80" y="212">Fidelă și</text><text x="80" y="230">exactă</text>
<text x="240" y="212">Fidelă, dar</text><text x="240" y="230">inexactă</text>
<text x="400" y="212">Nici fidelă,</text><text x="400" y="230">nici exactă</text>
<text x="560" y="212">Exactă în medie,</text><text x="560" y="230">puțin fidelă</text>
</g>
<text x="320" y="270" font-size="14" text-anchor="middle" fill="#334155">Centrul țintei = valoarea adevărată; punctele albastre = măsurări repetate</text>
</g>
</svg>`,
      caption: "Fidelitate = măsurări apropiate între ele. Exactitate = măsurări apropiate de valoarea adevărată. Sunt două lucruri diferite."
    },
    {
      type: "text",
      title: "Erorile de măsurare",
      html: `<p>Orice măsurare este afectată de o <b>eroare</b>, înțeleasă nu ca o greșeală, ci ca o <b>incertitudine</b>. Se deosebesc două familii:</p>
<ul>
<li><b>Erori sistematice</b>: deplasează <b>întotdeauna în același sens</b> toate măsurările. Cauze: instrument reglat prost (eroare de zero: cântarul arată 20 g fără nimic pe el), metodă greșită, poziție greșită a ochiului (<b>eroare de paralaxă</b>). Se corectează, dacă sunt descoperite, dar nu se reduc repetând măsurarea.</li>
<li><b>Erori aleatorii</b> (sau accidentale): variază de la o măsurare la alta, în plus sau în minus, fără regulă, deoarece depind de multe cauze mici (tremurul mâinii, vibrații, timpul de reacție al celui care apasă cronometrul). Se <b>reduc repetând</b> măsurarea de multe ori și făcând media.</li>
</ul>
<p>Există, în sfârșit, <b>eroarea grosolană</b>, adică greșeala propriu-zisă (a citi 28 în loc de 82): trebuie eliminată și nu face parte din teoria erorilor.</p>`
    },
    {
      type: "widget",
      title: "Sistematică sau aleatorie?",
      widget: "classify",
      options: { groups: ["Sistematică", "Aleatorie"], items: [
        ["Cântarul arată 5 g chiar și fără nimic pe el", 0],
        ["Cronometrul este oprit uneori prea devreme, alteori prea târziu", 1],
        ["Citesc rigla întotdeauna dintr-o parte (paralaxă)", 0],
        ["Mici vibrații ale mesei în timpul cântăririi", 1],
        ["Metrul de plastic s-a dilatat la soare și măsoară mereu puțin mai mult", 0],
        ["Citirile termometrului oscilează cu câteva zecimi de grad", 1]
      ] },
      caption: "Eroarea sistematică deplasează mereu în același sens; cea aleatorie merge când puțin în plus, când puțin în minus."
    },
    {
      type: "text",
      title: "Măsurarea unică și eroarea absolută",
      html: `<p>Când se face <b>o singură măsurare</b>, rezultatul nu poate fi mai precis decât permite instrumentul. Prin convenție (în multe manuale școlare) se consideră ca <b>eroare absolută</b> <b>sensibilitatea</b> instrumentului:</p>
<p style="text-align:center"><b>x = x₀ ± E<sub>a</sub></b></p>
<p>unde x₀ este valoarea măsurată și E<sub>a</sub> eroarea absolută. Exemplu: cu o riglă gradată în milimetri măsori 32 cm și 4 mm: scrii <b>l = (32,4 ± 0,1) cm</b>. Înseamnă: «valoarea adevărată se află foarte probabil în intervalul dintre 32,3 și 32,5 cm». Unele manuale consideră ca eroare <b>jumătate</b> din sensibilitate: la fiecare exercițiu trebuie respectată convenția indicată.</p>
<p>Eroarea absolută are <b>aceeași unitate de măsură</b> ca mărimea și este întotdeauna pozitivă.</p>`
    },
    {
      type: "text",
      title: "Măsurări repetate: valoarea medie și semidispersia",
      html: `<p>Dacă măsurarea poate fi repetată de N ori în aceleași condiții, valorile obținute vor fi ușor diferite. Se procedează astfel:</p>
<ol>
<li><b>Valoarea medie</b>: suma tuturor măsurărilor împărțită la N. Este cea mai bună estimare a valorii adevărate.</li>
<li><b>Eroarea absolută</b> ca <b>semidispersie maximă</b>: E<sub>a</sub> = (x<sub>max</sub> − x<sub>min</sub>) / 2.</li>
<li>Se scrie rezultatul: <b>x = valoarea medie ± E<sub>a</sub></b>.</li>
</ol>
<p><b>Exemplu.</b> Măsori lățimea unui caiet cu o riglă gradată în mm și obții: 21,3 cm; 21,5; 21,4; 21,4; 21,6.</p>
<ul>
<li>Suma: 21,3 + 21,5 + 21,4 + 21,4 + 21,6 = 107,2; media = 107,2 / 5 = <b>21,44 cm</b>.</li>
<li>Semidispersia: (21,6 − 21,3) / 2 = <b>0,15 cm</b>.</li>
<li>Rezultatul: <b>l = (21,44 ± 0,15) cm</b>, care se rotunjește la <b>(21,4 ± 0,2) cm</b>: eroarea se scrie cu <b>o singură cifră semnificativă</b>, iar valoarea cu același număr de zecimale ca eroarea.</li>
</ul>`
    },
    {
      type: "remember",
      title: "Eroarea relativă și procentuală",
      html: `<p>Eroarea absolută nu spune dacă măsurarea este «bună»: o eroare de 1 cm este mică dacă măsor un teren de fotbal, uriașă dacă măsor o unghie. De aceea se calculează <b>eroarea relativă</b>:</p>
<p style="text-align:center"><b>E<sub>r</sub> = E<sub>a</sub> / x</b> (număr pur, fără unitate)</p>
<p>și <b>eroarea procentuală</b>: <b>E% = E<sub>r</sub> × 100</b>. Cu cât eroarea relativă este mai mică, cu atât măsurarea este mai bună.</p>`
    },
    {
      type: "example",
      title: "Care măsurare este mai bună?",
      html: `<p>Marta măsoară lungimea unei străzi: (500 ± 1) m. Luca măsoară grosimea unei cărți: (3,0 ± 0,5) cm. Cine a măsurat mai bine?</p>
<ul>
<li>Marta: E<sub>r</sub> = 1/500 = 0,002 = <b>0,2 %</b>.</li>
<li>Luca: E<sub>r</sub> = 0,5/3,0 ≈ 0,17 = <b>17 %</b>.</li>
</ul>
<p>Chiar dacă eroarea absolută a lui Luca (0,5 cm) este ca număr mai mică decât cea a Martei (1 m), măsurarea lui este mult mai slabă în proporție. <b>Eroarea relativă</b> este comparația corectă între măsurări ale unor mărimi diferite.</p>`
    },
    {
      type: "example",
      title: "Cronometrul și timpul de reacție",
      html: `<p>Pentru a măsura timpul de cădere al unei bile de la 2 m, trei elevi folosesc un cronometru digital cu precizie de o sutime de secundă. Obțin 0,71 s; 0,64 s; 0,78 s; 0,69 s. Sensibilitatea instrumentului este 0,01 s, dar măsurările diferă cu aproape 0,1 s: cauza este <b>timpul de reacție uman</b>, o eroare aleatorie mult mai mare decât sensibilitatea. Valoarea medie este 0,705 s, iar semidispersia (0,78 − 0,64)/2 = 0,07 s: rezultatul corect este <b>(0,71 ± 0,07) s</b>, nu (0,705 ± 0,01) s. Instrumentul are o sensibilitate mai bună decât permite metoda: contează incertitudinea <i>dominantă</i>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: erori",
      questions: [
        { type: "num", q: "Valori măsurate: 12,0 s; 12,4 s; 12,2 s. Calculează valoarea medie.", answer: 12.2, tol: 0.01, unit: "s", explain: "(12,0 + 12,4 + 12,2) / 3 = 36,6 / 3 = 12,2 s." },
        { type: "num", q: "Cu aceleași măsurări (12,0; 12,4; 12,2 s) calculează eroarea absolută ca semidispersie maximă.", answer: 0.2, tol: 0.001, unit: "s", explain: "(12,4 − 12,0) / 2 = 0,2 s." },
        { type: "tf", q: "O eroare sistematică se reduce repetând de multe ori măsurarea și făcând media.", answer: false, explain: "Eroarea sistematică deplasează toate măsurările în același sens: media nu o elimină." }
      ]
    },
    {
      type: "text",
      title: "Cifrele semnificative",
      html: `<p><b>Cifrele semnificative</b> ale unei măsurări sunt cele care au un sens real, adică cele sigure plus prima nesigură. A scrie 3,20 m și 3,2 m nu este același lucru: în primul caz instrumentul ajunge la centimetru, în al doilea la decimetru.</p>
<p><b>Reguli de numărare:</b></p>
<ul>
<li>cifrele diferite de zero sunt întotdeauna semnificative;</li>
<li>zerourile <b>dintre</b> cifre semnificative sunt semnificative (<b>4 0 7</b> → 3 cifre);</li>
<li>zerourile <b>de la început</b> nu sunt semnificative (0,0052 are <b>2</b> cifre);</li>
<li>zerourile <b>finale de după virgulă</b> sunt semnificative (2,50 are <b>3</b> cifre);</li>
<li>la numerele întregi cu zerouri finale, cum este 1500, numărul este ambiguu: pentru a clarifica se folosește notația științifică (1,5 × 10³ are 2 cifre; 1,50 × 10³ are 3).</li>
</ul>
<table>
<tr><th>Număr</th><th>Cifre semnificative</th></tr>
<tr><td>35,2</td><td>3</td></tr>
<tr><td>0,0045</td><td>2</td></tr>
<tr><td>3,020</td><td>4</td></tr>
<tr><td>6,0 × 10⁻³</td><td>2</td></tr>
</table>`
    },
    {
      type: "text",
      title: "Calcule și cifre semnificative",
      html: `<p>Rezultatul unui calcul nu poate fi mai precis decât datele de plecare.</p>
<ul>
<li><b>Înmulțiri și împărțiri</b>: rezultatul are tot atâtea cifre semnificative câte are data care are <b>mai puține</b>. Exemplu: 3,2 m × 1,45 m = 4,64 m² → se scrie <b>4,6 m²</b> (2 cifre).</li>
<li><b>Adunări și scăderi</b>: rezultatul are tot atâtea <b>zecimale</b> câte are data care are <b>mai puține</b>. Exemplu: 12,34 + 0,5 = 12,84 → se scrie <b>12,8</b>.</li>
<li><b>Rotunjirea</b>: dacă cifra de eliminat este ≥ 5, se mărește cu 1 cifra precedentă; dacă este &lt; 5, rămâne neschimbată (2,46 → 2,5; 2,44 → 2,4).</li>
</ul>
<p>Pericolul este <b>falsa precizie</b>: calculatorul afișează 8 cifre, dar dacă datele au fost măsurate cu 2 cifre, celelalte sunt inventate.</p>`
    },
    {
      type: "text",
      title: "Cum se propagă erorile",
      html: `<p>Când se calculează o mărime nouă pornind de la măsurători cu erori, și rezultatul are o eroare. Reguli simple (pentru cazul cel mai nefavorabil):</p>
<ul>
<li><b>Suma și diferența</b>: <b>erorile absolute se adună</b>. (5,0 ± 0,1) cm + (3,0 ± 0,1) cm = (8,0 ± 0,2) cm. Și la diferență se adună!</li>
<li><b>Produsul și câtul</b>: <b>erorile relative se adună</b>.</li>
</ul>
<p><b>Exemplu, aria unui dreptunghi</b> cu laturile (5,0 ± 0,1) cm și (3,0 ± 0,1) cm:</p>
<ul>
<li>E<sub>r</sub> ale laturilor: 0,1/5,0 = 2 % și 0,1/3,0 ≈ 3,3 %;</li>
<li>E<sub>r</sub> a ariei ≈ 2 % + 3,3 % = 5,3 %;</li>
<li>Aria = 5,0 × 3,0 = 15 cm²; eroarea absolută = 15 × 0,053 ≈ 0,8 cm²;</li>
<li>rezultatul: <b>A = (15,0 ± 0,8) cm²</b>.</li>
</ul>
<p>De aceea, într-o formulă cu un produs, merită să măsurăm cu mai multă precizie mărimea care are eroarea relativă mai mare.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege erorile",
      intro: "Dacă socotelile ți se par abstracte, încearcă aceste puncte de vedere.",
      tabs: [
        {
          label: "🎯 Ținta",
          html: "<p>Gândește-te la un trăgător. <b>Fidelitate</b> = loviturile sunt grupate. <b>Exactitate</b> = grupul este aproape de centru. O eroare <b>sistematică</b> mută tot grupul într-o parte (cătare strâmbă); o eroare <b>aleatorie</b> lărgește grupul (mână care tremură). «Valoarea adevărată» este centrul pe care nu-l vezi niciodată direct, dar de care te apropii cu mai multe măsurători.</p>"
        },
        {
          label: "📏 Rigla care înaintează în salturi",
          html: "<p>Imaginează-ți că rigla înaintează în salturi de 1 mm: nu poți citi 3,5 mm, ci doar 3 sau 4. <b>Sensibilitatea</b> este lățimea «saltului» și stabilește precizia maximă a unei singure citiri. De aceea nu are sens să scrii 12,347 cm dacă instrumentul ajunge doar la milimetri: cifrele 4 și 7 sunt inventate.</p>"
        },
        {
          label: "🧮 Facem media cu jetoane",
          html: "<p>Cinci măsurători: 20,1; 20,3; 20,2; 20,2; 20,2 cm. Un truc: scoate «20,» comun și lucrează cu zecimalele: 1, 3, 2, 2, 2 → suma 10 → media 2 → valoarea medie este 20,2 cm. Este o cale de a face calculele în minte.</p>",
          widget: "flashcards",
          options: { cards: [
            { front: "Valoarea medie", back: "suma măsurărilor / numărul de măsurări" },
            { front: "Eroarea absolută (măsurări repetate)", back: "(x max - x min) / 2" },
            { front: "Eroarea relativă", back: "eroarea absolută / valoarea măsurată" },
            { front: "Eroarea procentuală", back: "eroarea relativă × 100" },
            { front: "Suma măsurărilor", back: "se adună erorile absolute" },
            { front: "Produsul măsurărilor", back: "se adună erorile relative" }
          ] }
        },
        {
          label: "🔁 Fluxul unei măsurări",
          html: "<p>Fiecare experiment urmează acești pași: alegi instrumentul → verifici zeroul → măsori de mai multe ori → elimini greșelile grosolane → calculezi media și eroarea → scrii rezultatul cu cifrele corecte → compari cu alte rezultate sau cu valoarea așteptată.</p>",
          svg: "<svg viewBox='0 0 600 160' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='160' fill='#f0f9ff'/><g font-family='sans-serif' font-size='14' text-anchor='middle' fill='#0c4a6e'><rect x='10' y='55' width='85' height='50' rx='8' fill='#bae6fd'/><text x='52' y='84'>Instrument</text><rect x='115' y='55' width='85' height='50' rx='8' fill='#bae6fd'/><text x='157' y='84'>Măsurări</text><rect x='220' y='55' width='85' height='50' rx='8' fill='#bae6fd'/><text x='262' y='84'>Media</text><rect x='325' y='55' width='85' height='50' rx='8' fill='#bae6fd'/><text x='367' y='84'>Eroarea</text><rect x='430' y='55' width='85' height='50' rx='8' fill='#bae6fd'/><text x='472' y='84'>Cifre</text><rect x='535' y='55' width='55' height='50' rx='8' fill='#7dd3fc'/><text x='562' y='84'>x±E</text><path d='M95 80 L115 80 M200 80 L220 80 M305 80 L325 80 M410 80 L430 80 M515 80 L535 80' stroke='#0369a1' stroke-width='3'/></g></svg>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "Când neutrinul a «depășit» lumina",
      html: `<p>În septembrie 2011, experimentul <b>OPERA</b> (care măsura neutrini trimiși de la CERN din Geneva spre Laboratoarele Gran Sasso, din Italia) a anunțat că neutrinii păreau să călătorească <b>puțin mai repede decât lumina</b>. Ar fi fost o descoperire revoluționară. În lunile următoare cercetătorii au verificat totul și au găsit două <b>erori sistematice</b>: un cablu de fibră optică conectat necorespunzător și un oscilator defect. După corecție, viteza a revenit compatibilă cu cea a luminii. Este dovada că și marile laboratoare își caută și își corectează erorile și că pentru o descoperire extraordinară sunt necesare dovezi extraordinare.</p>`
    },
    {
      type: "curiosity",
      title: "Eratostene și circumferința Pământului",
      html: `<p>Pe la 240 î.Hr., <b>Eratostene</b> din Cirene a măsurat circumferința Pământului cu un băț, o umbră și o distanță: la Siene (astăzi Assuan) razele Soarelui la amiaza solstițiului de vară cădeau vertical, în timp ce la Alexandria, la circa 5000 de stadii mai spre nord, formau un unghi de aproximativ 7,2° (1/50 dintr-un unghi plin). A dedus o circumferință de 250 000 de stadii. Valoarea stadiului folosit este nesigură, dar măsurarea se abate de la cea modernă cu un procent mic: o estimare excelentă cu instrumente simple și cu o incertitudine estimată clar.</p>`
    },
    {
      type: "conceptMap",
      title: "Harta măsurării",
      nodes: [
        { id: "misura", label: "Măsurarea", x: 50, y: 8, color: "#2563eb", html: "Compararea unei mărimi cu un etalon, cu ajutorul unui instrument.", why: "Orice dată experimentală este rezultatul unei măsurări: fără a înțelege cum se obține și cât este de fiabilă, nu poți avea încredere în nicio lege fizică. De aceea metoda experimentală a lui Galilei a pus măsurarea în centru." },
        { id: "strumenti", label: "Instrument", x: 15, y: 42, color: "#16a34a", html: "Domeniu de măsurare, sensibilitate, promptitudine, fidelitate, exactitate.", why: "Caracteristicile instrumentului fixează limitele oricărei măsurări: niciun calcul nu poate obține mai multă precizie decât are instrumentul." },
        { id: "errori", label: "Erori", x: 50, y: 42, color: "#ef4444", html: "Sistematice și aleatorii: incertitudinea oricărei măsurări.", why: "Erorile aleatorii provin din multe cauze mici independente, de aceea se compensează făcând media; cele sistematice depind de un defect al metodei sau al instrumentului și trebuie descoperite, nu mediate." },
        { id: "incertezza", label: "Eroare absolută și relativă", x: 85, y: 42, color: "#f59e0b", html: "Ea = semidispersie sau sensibilitate; Er = Ea/x; E% = Er × 100.", why: "Eroarea absolută arată cât de mult te poți încrede; eroarea relativă permite compararea măsurărilor unor mărimi diferite. Comparația prin eroarea relativă dă sens unui număr." },
        { id: "cifre", label: "Cifre semnificative", x: 30, y: 80, color: "#8b5cf6", html: "Cifrele sigure plus prima nesigură.", why: "A scrie doar cifrele semnificative este o obligație de sinceritate: fiecare cifră în plus este o promisiune de precizie pe care nu o poți ține." },
        { id: "propagazione", label: "Propagarea erorilor", x: 72, y: 80, color: "#64748b", html: "Suma: erorile absolute. Produsul: erorile relative.", why: "Provine din raționamentul cazului cel mai nefavorabil: dacă fiecare măsurare poate greși în plus, eroarea rezultatului este suma contribuțiilor. Deci merită să îmbunătățim măsurarea care cântărește cel mai mult." }
      ],
      edges: [["misura", "strumenti", "depinde de"], ["misura", "errori", "are întotdeauna"], ["errori", "incertezza", "se cuantifică prin"], ["incertezza", "cifre", "stabilește"], ["incertezza", "propagazione", "se propagă în"]]
    },
    {
      type: "quiz",
      title: "Mini-test: cifre semnificative",
      questions: [
        { type: "mc", q: "Câte cifre semnificative are 0,0360?", options: ["2", "3", "4", "5"], answer: 1, explain: "Zerourile de la început nu contează; 3, 6 și zeroul final de după virgulă contează: 3 cifre." },
        { type: "mc", q: "Produsul 2,5 m × 3,14 m dă 7,85 m². Cum se scrie cu cifrele semnificative?", options: ["7,85 m²", "7,9 m²", "8 m²", "7,850 m²"], answer: 1, explain: "Data cu mai puține cifre (2,5) are 2: rezultatul are 2 cifre, 7,9 m²." }
      ]
    }
  ],
  glossary: [
    { t: "Sensibilitate", d: "Cea mai mică variație a mărimii pe care instrumentul reușește să o detecteze." },
    { t: "Domeniu de măsurare", d: "Valoarea maximă care poate fi măsurată de un instrument." },
    { t: "Fidelitate", d: "Capacitatea de a da măsurări repetate apropiate între ele." },
    { t: "Exactitate", d: "Capacitatea de a da măsurări apropiate de valoarea adevărată." },
    { t: "Eroare sistematică", d: "Eroare care deplasează măsurările întotdeauna în același sens." },
    { t: "Eroare aleatorie", d: "Eroare care variază imprevizibil de la o măsurare la alta." },
    { t: "Eroare absolută", d: "Incertitudinea unei măsurări, cu aceeași unitate ca mărimea." },
    { t: "Eroare relativă", d: "Raportul dintre eroarea absolută și valoarea măsurată." },
    { t: "Cifre semnificative", d: "Cifrele sigure plus prima nesigură ale unei măsurări." },
    { t: "Paralaxă", d: "Eroare de citire datorată poziției ochiului față de scară." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Ce este sensibilitatea unui instrument?", options: ["Valoarea maximă măsurabilă", "Cea mai mică variație detectabilă", "Rapiditatea de răspuns", "Prețul instrumentului"], answer: 1, explain: "Sensibilitatea este cea mai mică variație pe care o sesizează instrumentul." },
      { type: "tf", q: "Un instrument foarte fidel este în mod necesar și exact.", answer: false, explain: "Poate da valori apropiate între ele, dar toate deplasate față de valoarea adevărată, din cauza unei erori sistematice." },
      { type: "mc", q: "Cântarul arată 10 g cu talerul gol. Ce fel de eroare este?", options: ["Aleatorie", "Sistematică", "Grosolană", "Relativă"], answer: 1, explain: "Deplasează toate măsurările în același sens: eroare de zero, deci sistematică." },
      { type: "num", q: "Măsurări ale unei lungimi: 8,2 cm; 8,4 cm; 8,3 cm; 8,3 cm. Calculează valoarea medie.", answer: 8.3, tol: 0.01, unit: "cm", explain: "(8,2 + 8,4 + 8,3 + 8,3) / 4 = 33,2 / 4 = 8,3 cm." },
      { type: "num", q: "Cu aceleași măsurări (8,2; 8,4; 8,3; 8,3 cm) calculează eroarea absolută ca semidispersie.", answer: 0.1, tol: 0.001, unit: "cm", explain: "(8,4 − 8,2) / 2 = 0,1 cm." },
      { type: "num", q: "O măsurare are valoarea (50 ± 2) cm. Calculează eroarea procentuală.", answer: 4, tol: 0.01, unit: "%", explain: "E_r = 2/50 = 0,04, adică 4 %." },
      { type: "mc", q: "Câte cifre semnificative are 4,050?", options: ["2", "3", "4", "5"], answer: 2, explain: "Zeroul dintre 4 și 5 și zeroul final de după virgulă sunt semnificative: 4 cifre." },
      { type: "mc", q: "Care este rezultatul lui 12,34 + 0,5 cu cifrele semnificative?", options: ["12,84", "12,8", "13", "12,9"], answer: 1, explain: "La adunări se păstrează numărul de zecimale al datei cu cele mai puține zecimale (1): 12,8." },
      { type: "tf", q: "Când se scad două măsurări, erorile absolute se scad.", answer: false, explain: "În cazul cel mai nefavorabil, erorile absolute se adună și la diferență." },
      { type: "order", q: "Ordonează pașii pentru a scrie rezultatul unor măsurări repetate.", items: ["Efectuarea mai multor măsurări", "Calcularea valorii medii", "Calcularea erorii absolute", "Scrierea x = media ± eroarea cu cifrele corecte"], explain: "Mai întâi se adună datele, apoi media, apoi eroarea, la final se scrie rezultatul." }
    ]
  }
});
