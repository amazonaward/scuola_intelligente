TOPIC('ro', {
  id: "l1-sum-memoria-apprendimento",
  title: "Memoria și învățarea",
  intro: "De ce ne amintim un număr de telefon doar câteva secunde, dar mirosul din bucătăria bunicii o viață întreagă? De ce salivau câinii lui Pavlov la sunetul unui clopoțel? În această lecție vei studia cum funcționează <b>memoria</b> (senzorială, de scurtă și de lungă durată, curba uitării a lui Ebbinghaus, amintirile care se reconstruiesc) și principalele teorii ale <b>învățării</b>: condiționarea clasică (Pavlov), operantă (Thorndike, Skinner), învățarea prin insight (Köhler) și cea observațională (Bandura). La final vei înțelege și <b>cum să folosești aceste studii ca să înveți mai bine</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Ce este memoria",
      html: `<p><b>Memoria</b> este capacitatea de a <b>codifica, păstra și recupera</b> informații. Sunt trei faze distincte, iar o amintire poate „eșua” în fiecare dintre ele:</p>
<ul>
<li><b>Codificarea</b>: transformarea informației într-o formă pe care creierul o poate stoca (dacă nu ești atent, nu se codifică).</li>
<li><b>Stocarea</b> (retenția): păstrarea ei în timp.</li>
<li><b>Recuperarea</b>: readucerea ei atunci când este nevoie (uneori „o am pe vârful limbii”).</li>
</ul>
<p>Cel mai cunoscut model clasic este cel <b>multi-store</b> (cu „depozite multiple”), propus de <b>Richard Atkinson și Richard Shiffrin în 1968</b>: informația trece prin trei sisteme.</p>
<ol>
<li><b>Memoria senzorială</b>: reține pentru <b>fracțiuni de secundă</b> (aproximativ 1/4-1 s pentru imagini, câteva secunde pentru sunete) ceea ce înregistrează simțurile. George Sperling (1960) a arătat printr-un experiment cu matrici de litere că „urma iconică” conține mult mai mult decât reușim apoi să raportăm, dar dispare foarte repede.</li>
<li><b>Memoria de scurtă durată</b> (MSD): păstrează puține informații câteva secunde. George <b>Miller</b>, în <b>1956</b> (articolul „Numărul magic șapte, plus sau minus doi”), i-a estimat capacitatea la <b>7 ± 2 elemente</b> (<i>chunk</i>). Fără repetare durează aproximativ 15-30 de secunde (Peterson și Peterson, 1959).</li>
<li><b>Memoria de lungă durată</b> (MLD): capacitate practic nelimitată și durată de o viață întreagă.</li>
</ol>
<p>Pentru a trece de la MSD la MLD sunt necesare <b>repetarea</b> și, mai ales, <b>elaborarea sensului</b> (legarea informațiilor noi de cele deja cunoscute).</p>`
    },
    {
      type: "svg",
      title: "Modelul lui Atkinson și Shiffrin (1968)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="10" y="100" width="105" height="80" rx="12" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="62" y="130" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">STIMULI</text>
<text x="62" y="150" font-size="14" text-anchor="middle" fill="#0f172a">din mediu</text>
<rect x="150" y="100" width="130" height="80" rx="12" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<text x="215" y="128" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">MEMORIA</text>
<text x="215" y="146" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">SENZORIALĂ</text>
<text x="215" y="166" font-size="14" text-anchor="middle" fill="#0f172a">~1 secundă</text>
<rect x="315" y="100" width="120" height="80" rx="12" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="375" y="128" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">SCURTĂ</text>
<text x="375" y="146" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">DURATĂ</text>
<text x="375" y="166" font-size="14" text-anchor="middle" fill="#0f172a">7 ± 2 chunk</text>
<rect x="470" y="100" width="120" height="80" rx="12" fill="#e9d5ff" stroke="#6b21a8" stroke-width="2"/>
<text x="530" y="128" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">LUNGĂ</text>
<text x="530" y="146" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">DURATĂ</text>
<text x="530" y="166" font-size="14" text-anchor="middle" fill="#0f172a">nelimitată</text>
<line x1="115" y1="140" x2="148" y2="140" stroke="#0f172a" stroke-width="3"/><polygon points="148,140 138,133 138,147" fill="#0f172a"/>
<line x1="280" y1="130" x2="313" y2="130" stroke="#0f172a" stroke-width="3"/><polygon points="313,130 303,123 303,137" fill="#0f172a"/>
<text x="297" y="122" font-size="14" text-anchor="middle" fill="#0f172a">atenție</text>
<line x1="435" y1="130" x2="468" y2="130" stroke="#0f172a" stroke-width="3"/><polygon points="468,130 458,123 458,137" fill="#0f172a"/>
<text x="452" y="122" font-size="14" text-anchor="middle" fill="#0f172a">repetare</text>
<path d="M 530 182 Q 530 250 375 250 Q 375 220 375 182" fill="none" stroke="#6b21a8" stroke-width="3"/>
<polygon points="375,184 368,196 382,196" fill="#6b21a8"/>
<text x="450" y="272" font-size="14" text-anchor="middle" fill="#0f172a">recuperare</text>
<text x="215" y="215" font-size="14" text-anchor="middle" fill="#991b1b">uitare</text>
<line x1="215" y1="182" x2="215" y2="200" stroke="#991b1b" stroke-width="2"/>
</svg>`,
      caption: "Informația trece prin trei depozite; doar o parte ajunge în memoria de lungă durată."
    },
    {
      type: "example",
      title: "Trucul chunk-urilor",
      html: `<p>Încearcă să ții minte câteva secunde: <b>1 4 9 2 1 7 7 6 1 8 6 1</b>. Sunt douăsprezece cifre, prea multe pentru MSD. Acum grupează-le în date pe care le cunoști: <b>1492</b> (descoperirea Americii), <b>1776</b> (declarația de independență a Statelor Unite), <b>1861</b> (unificarea Italiei). „Bucățile” de ținut minte scad de la douăsprezece la trei. Un <b>chunk</b> este o unitate cu sens: un bun jucător de șah recunoaște configurații întregi de piese ca pe un singur chunk, în timp ce un începător vede piesele individuale. Este principiul numerelor de telefon scrise în grupuri.</p>`
    },
    {
      type: "text",
      title: "2. Memoria de lungă durată și memoria de lucru",
      html: `<p>Memoria de lungă durată nu este un bloc unic. Se deosebesc:</p>
<ul>
<li><b>Memoria declarativă</b> (explicită): amintiri pe care le putem „declara” în cuvinte. Se împarte în <b>episodică</b> (episoade din viața noastră: excursia de ieri) și <b>semantică</b> (cunoștințe generale: capitala Franței). Distincția îi aparține lui <b>Endel Tulving</b> (1972).</li>
<li><b>Memoria procedurală</b> (implicită): „a ști să faci” (a merge pe bicicletă, a-ți lega șireturile, a cânta la un instrument). Se exprimă în acțiune, nu în cuvinte, și este foarte rezistentă.</li>
</ul>
<p>În <b>1974</b> <b>Alan Baddeley și Graham Hitch</b> au criticat ideea unei simple MSD și au propus conceptul de <b>memorie de lucru</b>: un sistem activ care <b>menține și manipulează</b> informații în timp ce îndeplinim sarcini (a face un calcul în minte, a urmări o frază). Include un „executiv central” care coordonează și două subsisteme: o <b>buclă fonologică</b> (pentru sunete și cuvinte) și un <b>blocnotes vizuo-spațial</b> (pentru imagini și poziții).</p>
<p>Un caz celebru: pacientul <b>H.M.</b> (Henry Molaison), operat în 1953 pentru a vindeca crize epileptice grave, a pierdut o parte din hipocamp și nu a mai reușit să formeze <b>amintiri declarative noi</b>, păstrându-le totuși pe cele vechi și capacitatea de a învăța noi abilități motorii. A arătat că <b>hipocampul</b> este esențial pentru consolidare și că memoria declarativă și cea procedurală sunt sisteme distincte.</p>`
    },
    {
      type: "widget",
      title: "Ce tip de memorie este?",
      widget: "classify",
      options: { groups: ["Episodică", "Semantică", "Procedurală"], items: [
        ["A-ți aminti petrecerea ta de ziua din anul trecut", 0],
        ["A ști că Roma este capitala Italiei", 1],
        ["A merge pe bicicletă fără să te gândești", 2],
        ["A-ți aminti unde erai în ultima excursie", 0],
        ["A cunoaște sensul cuvântului «democrație»", 1],
        ["A tasta la tastatură fără să te uiți la taste", 2]
      ] },
      caption: "Pune fiecare amintire în „sertarul” ei."
    },
    {
      type: "text",
      title: "3. A uita și a reconstrui: Ebbinghaus, Bartlett, Loftus",
      html: `<p><b>Hermann Ebbinghaus</b> (1850-1909) a fost primul care a studiat memoria prin experimente: în <b>1885</b> a învățat pe de rost liste de <b>silabe fără sens</b> (precum „DAX”, „BOK”, pentru a elimina influența sensului) și a măsurat câte își amintea după intervale diferite. A obținut <b>curba uitării</b>: pierderea este <b>foarte rapidă în primele ore</b> și apoi încetinește. Fără recapitulare, în câteva zile uităm o mare parte din material; recapitularea la intervale tot mai mari face amintirea mult mai durabilă (<b>efectul repetării distribuite</b>).</p>
<p>Efecte utile de cunoscut: într-o listă ne amintim mai bine primele elemente (<b>efectul de primație</b>, trecute în MLD datorită mai multor repetări) și ultimele (<b>efectul de recență</b>, încă în MSD), mai prost pe cele din mijloc (curba poziției seriale).</p>
<p>Dar amintirea nu este o înregistrare video. În <b>1932</b> <b>Frederic Bartlett</b> a pus niște studenți englezi să citească o poveste indigenă nord-americană, „Războiul fantomelor”, și le-a cerut să o rescrie după o vreme. Versiunile deveneau mai scurte și <b>modificate după scheme culturale</b> englezești (detaliile ciudate erau eliminate sau „normalizate”). Memoria este <b>reconstructivă</b>: folosește <b>scheme</b> și cunoștințe pentru a umple golurile.</p>
<p>În <b>1974</b> <b>Elizabeth Loftus și John Palmer</b> au arătat filme cu accidente și au întrebat cu ce viteză mergeau mașinile când „s-au <i>ciocnit</i>” (<i>smashed</i>) sau „s-au <i>atins</i>” (<i>hit</i>). Cu verbul „ciocnit” estimările erau mai mari; o săptămână mai târziu mulți spuneau că văzuseră sticlă spartă, care nu fusese acolo. <b>Întrebările sugestive</b> pot altera amintirile: de aceea mărturiile oculare trebuie tratate cu prudență.</p>`
    },
    {
      type: "svg",
      title: "Curba uitării",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<line x1="70" y1="250" x2="570" y2="250" stroke="#0f172a" stroke-width="2"/>
<line x1="70" y1="30" x2="70" y2="250" stroke="#0f172a" stroke-width="2"/>
<text x="30" y="40" font-size="14" fill="#0f172a">100%</text>
<text x="40" y="255" font-size="14" fill="#0f172a">0%</text>
<text x="320" y="285" font-size="14" text-anchor="middle" fill="#0f172a">timpul scurs de la învățare</text>
<path d="M 70 40 C 110 140 150 175 230 195 C 340 215 450 225 560 230" fill="none" stroke="#dc2626" stroke-width="4"/>
<path d="M 70 40 C 90 90 110 110 150 118 L 150 60 C 175 100 200 125 260 135 L 260 62 C 300 100 350 120 420 128 L 420 70 C 460 100 500 110 560 116" fill="none" stroke="#166534" stroke-width="4"/>
<text x="330" y="205" font-size="14" fill="#991b1b">fără recapitulare</text>
<text x="400" y="60" font-size="14" fill="#166534">cu recapitulări distribuite</text>
<text x="150" y="268" font-size="14" text-anchor="middle" fill="#0f172a">20 min</text>
<text x="260" y="268" font-size="14" text-anchor="middle" fill="#0f172a">1 zi</text>
<text x="420" y="268" font-size="14" text-anchor="middle" fill="#0f172a">1 săptămână</text>
</svg>`,
      caption: "Schemă simplificată: fără recapitulare uitarea este rapidă la început; fiecare recapitulare „ridică” curba și o face mai plată (etichetele sunt orientative)."
    },
    {
      type: "curiosity",
      title: "«Cuvântul pe vârful limbii»",
      html: `<p>Fenomenul „vârfului limbii” (<i>tip of the tongue</i>) arată că amintirea poate fi prezentă, dar <b>nerecuperabilă</b> în acel moment: ne amintim inițiala sau numărul de silabe. Uitarea, așadar, nu este întotdeauna pierderea informației: adesea este <b>dificultate de recuperare</b>, care se ameliorează cu <b>indicii</b> (de aceea testele cu variante de răspuns sunt mai ușoare decât cele cu răspuns deschis).</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: memoria",
      questions: [
        { type: "mc", q: "Câte elemente poate menține memoria de scurtă durată potrivit lui Miller (1956)?", options: ["2 ± 1", "7 ± 2", "20 ± 5", "nelimitat"], answer: 1, explain: "„Numărul magic șapte, plus sau minus doi”." },
        { type: "mc", q: "Lucrarea lui Bartlett („Războiul fantomelor”, 1932) arată că memoria este...", options: ["o înregistrare fidelă", "reconstructivă", "doar procedurală", "fixă din naștere"], answer: 1, explain: "Amintirea este reconstruită pe baza schemelor culturale și a cunoștințelor." },
        { type: "tf", q: "Curba uitării a lui Ebbinghaus arată că se uită mult în primele ore și apoi tot mai lent.", answer: true, explain: "Pierderea este mai mare la început, apoi încetinește." }
      ]
    },
    {
      type: "text",
      title: "4. A învăța: condiționarea clasică (Pavlov)",
      html: `<p><b>Învățarea</b> este o <b>schimbare relativ stabilă a comportamentului</b> datorată experienței. Primele teorii științifice apar odată cu behaviorismul.</p>
<p><b>Ivan Pavlov</b> (1849-1936), fiziolog rus (Nobel pentru medicină în 1904 pentru studiile despre digestie), a observat că câinii de laborator salivau nu doar văzând mâncarea, ci încă de la sosirea îngrijitorului. A condus atunci experimente sistematice (din 1900 aproximativ):</p>
<ol>
<li>Mâncarea (<b>stimul necondiționat</b>, SN) provoacă salivația (<b>răspuns necondiționat</b>, RN): reflex înnăscut.</li>
<li>Sunetul unui clopoțel (<b>stimul neutru</b>) nu provoacă salivație.</li>
<li>Se prezintă repetat clopoțelul <b>imediat înainte</b> de mâncare (<b>asociere</b>).</li>
<li>La final clopoțelul singur (<b>stimul condiționat</b>, SC) provoacă salivația (<b>răspuns condiționat</b>, RC).</li>
</ol>
<p>Alte fenomene: <b>extincția</b> (dacă clopoțelul sună de multe ori fără mâncare, răspunsul se stinge), <b>generalizarea</b> (sunetele asemănătoare provoacă răspunsul), <b>discriminarea</b> (câinele învață să deosebească sunete diferite).</p>
<p>Condiționarea explică <b>reacțiile emoționale</b>: fobiile, dezgustul față de o mâncare care ne-a făcut rău, anxietatea legată de un loc. În 1920 <b>Watson și Rayner</b> l-au condiționat pe „micul Albert” să se teamă de un șoarece alb, asociindu-l cu un zgomot puternic (experiment astăzi inacceptabil din punct de vedere etic).</p>`
    },
    {
      type: "svg",
      title: "Condiționarea clasică în trei faze",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="100" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">1. Înainte</text>
<rect x="15" y="45" width="170" height="40" rx="8" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="100" y="71" font-size="14" text-anchor="middle" fill="#0f172a">Mâncare (SN) → salivă (RN)</text>
<rect x="15" y="100" width="170" height="40" rx="8" fill="#e5e7eb" stroke="#4b5563" stroke-width="2"/>
<text x="100" y="126" font-size="14" text-anchor="middle" fill="#0f172a">Clopoțel → nimic</text>
<text x="300" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">2. În timpul</text>
<rect x="215" y="45" width="170" height="95" rx="8" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="300" y="75" font-size="14" text-anchor="middle" fill="#0f172a">Clopoțel + mâncare</text>
<text x="300" y="98" font-size="14" text-anchor="middle" fill="#0f172a">repetate de mai multe ori</text>
<text x="300" y="121" font-size="14" text-anchor="middle" fill="#0f172a">→ salivă</text>
<text x="500" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">3. După</text>
<rect x="415" y="45" width="170" height="95" rx="8" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<text x="500" y="75" font-size="14" text-anchor="middle" fill="#0f172a">Doar clopoțelul (SC)</text>
<text x="500" y="98" font-size="14" text-anchor="middle" fill="#0f172a">→ salivă (RC)</text>
<text x="500" y="121" font-size="14" text-anchor="middle" fill="#0f172a">răspuns învățat</text>
<line x1="188" y1="92" x2="212" y2="92" stroke="#0f172a" stroke-width="3"/><polygon points="212,92 202,86 202,98" fill="#0f172a"/>
<line x1="388" y1="92" x2="412" y2="92" stroke="#0f172a" stroke-width="3"/><polygon points="412,92 402,86 402,98" fill="#0f172a"/>
<rect x="60" y="175" width="480" height="95" rx="12" fill="#ffffff" stroke="#6b21a8" stroke-width="2"/>
<text x="300" y="205" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">Exemplu cotidian</text>
<text x="300" y="230" font-size="14" text-anchor="middle" fill="#0f172a">Zgomotul burghiului dentistului (stimul neutru) este</text>
<text x="300" y="250" font-size="14" text-anchor="middle" fill="#0f172a">asociat cu durerea: apoi doar zgomotul provoacă anxietate.</text>
</svg>`,
      caption: "Pentru a condiționa, stimulul neutru trebuie să precedeze strâns stimulul necondiționat."
    },
    {
      type: "text",
      title: "5. Condiționarea operantă: Thorndike și Skinner",
      html: `<p>În condiționarea clasică organismul <i>suportă</i> o asociere între stimuli. În <b>condiționarea operantă</b> (sau instrumentală) învață că <b>urmările</b> unei acțiuni o fac mai probabilă sau mai puțin probabilă.</p>
<p><b>Edward Thorndike</b> (1898) a închis pisici flămânde în „cuști-puzzle” din care se ieșea apăsând o pârghie. Pisicile procedau prin <b>încercare și eroare</b>; cu timpul timpii de evadare scădeau. A formulat <b>legea efectului</b>: un comportament urmat de consecințe plăcute tinde să se repete, unul urmat de consecințe neplăcute tinde să dispară.</p>
<p><b>Burrhus F. Skinner</b> (1904-1990) a perfecționat metoda cu <b>„cutia Skinner”</b>: o cușcă în care un șobolan, apăsând o pârghie, primește mâncare. A deosebit:</p>
<ul>
<li><b>Întărirea pozitivă</b>: se <b>adaugă</b> ceva plăcut după comportament (laudă, recompensă) → comportamentul crește.</li>
<li><b>Întărirea negativă</b>: se <b>scoate</b> ceva neplăcut → comportamentul crește (a-ți pune centura ca să înceteze „bip-ul”). Nu este o pedeapsă!</li>
<li><b>Pedeapsa</b>: o consecință neplăcută (sau retragerea a ceva plăcut) → comportamentul scade.</li>
</ul>
<p>Skinner a studiat și <b>programele de întărire</b>: o întărire dată <i>uneori</i> (intermitentă, ca la aparatele de jocuri de noroc) face comportamentul mult mai rezistent la extincție decât una dată mereu. A aplicat aceste idei la <b>instruirea programată</b> (mașini de învățat, din anii '50).</p>`
    },
    {
      type: "widget",
      title: "Întărire sau pedeapsă?",
      widget: "classify",
      options: { groups: ["Întărire pozitivă", "Întărire negativă", "Pedeapsă"], items: [
        ["Profesorul laudă un elev care a răspuns bine, iar acesta ridică mâna mai des", 0],
        ["Îți pui centura ca să înceteze „bip-ul” enervant", 1],
        ["Iau telefonul celui care face zgomot în clasă, pentru a reduce zgomotul", 2],
        ["Un copil primește un abțibild de fiecare dată când își strânge jucăriile", 0],
        ["Iei un analgezic și durerea de cap trece: îl vei lua și data viitoare", 1],
        ["O amendă pentru cel care parchează în a doua tranșă", 2]
      ] },
      caption: "Se adaugă sau se scoate? Comportamentul crește sau scade?"
    },
    {
      type: "example",
      title: "Condiționarea la școală",
      html: `<p>Un băiat este luat în râs o dată în timp ce citește cu voce tare. După ce experiența se repetă, chiar și ideea de a citi în clasă îi provoacă anxietate (<b>condiționare clasică</b>: citirea a fost asociată cu umilința). Ca să evite anxietatea, începe să „uite” cartea acasă: comportamentul de evitare este <b>întărit negativ</b> pentru că face să înceteze starea neplăcută (<b>condiționare operantă</b>). Un profesor atent va lucra pentru a <b>stinge</b> asocierea, creând experiențe de lectură pozitive și graduale.</p>`
    },
    {
      type: "text",
      title: "6. Insight și învățarea socială",
      html: `<p>Nu toată învățarea se face prin încercări. În 1917 gestaltistul <b>Wolfgang Köhler</b>, observând cimpanzei în Tenerife, l-a văzut pe cimpanzeul <b>Sultan</b> care, neputând ajunge la o banană cu un singur băț, după o pauză <b>de gândire</b> a îmbinat două trestii și a ajuns la ea. A vorbit despre <b>insight</b> („intuiție”, „restructurare bruscă” a problemei): soluția se înțelege dintr-odată, nu prin încercări întâmplătoare.</p>
<p><b>Edward Tolman</b> a arătat că șobolanii formează <b>hărți cognitive</b> ale labirinturilor, chiar fără întăriri (<b>învățare latentă</b>): învață fără ca aceasta să se vadă imediat în comportament.</p>
<p><b>Albert Bandura</b> (experimentul păpușii Bobo, 1961) a demonstrat <b>învățarea prin observație</b> (<i>modeling</i>): se învață privind pe ceilalți și consecințele acțiunilor lor, fără a încerca direct. Pentru ca aceasta să se petreacă sunt necesare patru procese: atenția, memorarea, reproducerea, motivația. Bandura a introdus apoi (1977) conceptul de <b>autoeficacitate</b>: încrederea în propria capacitate de a reuși într-o sarcină.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege învățarea",
      intro: "Teoriile învățării sunt multe: iată câteva analogii pentru orientare.",
      tabs: [
        { label: "🐕 Trei moduri de a învăța", html: `<p><b>A asocia</b> (Pavlov): „când aud sunetul, vine mâncarea”. <b>A încerca și a primi consecințe</b> (Thorndike, Skinner): „dacă apăs pârghia, primesc mâncare”. <b>A privi și a înțelege</b> (Bandura, Köhler): „am văzut ce a făcut el” sau „am înțeles cum funcționează”.</p>` },
        { label: "🧭 Navigatorul", html: `<p>Behavioristul spune că, pentru a ajunge într-un loc, învăț o succesiune de viraje întărite (stimul → răspuns). Tolman ar spune că de fapt învăț o <b>hartă</b> a orașului: dacă o stradă este închisă, găsesc altă cale. Ambele lucruri se întâmplă, în funcție de sarcină.</p>` },
        { label: "🎮 Jocul video", html: `<p>Un joc video folosește toate principiile: <b>întărire</b> (puncte, nivele, recompense intermitente), <b>încercare și eroare</b> (mori, reîncerci), <b>modeling</b> (te uiți la tutoriale) și <b>insight</b> (înțelegi trucul șefului). A înțelege mecanismele ajută și la proiectarea unor activități didactice bune.</p>` }
      ]
    },
    {
      type: "text",
      title: "7. A învăța să înveți: ce funcționează cu adevărat",
      html: `<p>Cercetarea despre memorie și învățare a produs indicații practice. Cel mai citat studiu (Dunlosky și colaboratori, 2013) a comparat zece tehnici de studiu:</p>
<ul>
<li><b>Foarte eficiente</b>: <b>practica recuperării</b> (<i>retrieval practice</i>: a încerca să-ți amintești fără să te uiți, a te autoexamina, a fi examinat) și <b>repetarea distribuită</b> (recapitularea la intervale tot mai mari, în loc să înveți totul într-o noapte).</li>
<li><b>Puțin eficiente</b>: <b>recitirea</b> și <b>sublinierea</b> pasivă, care dau iluzia că știi (textul ni se pare familiar) fără o învățare reală.</li>
</ul>
<p>În 2006 Roediger și Karpicke au arătat că studenții care citeau un text o dată și apoi îl „reproduceau” din memorie își aminteau mai mult după o săptămână decât cei care îl recitiseră de mai multe ori: este <b>efectul testării</b> (<i>testing effect</i>). Alte indicații: <b>elaborarea</b> sensului (Craik și Lockhart, 1972, „nivelurile de prelucrare”: a te gândi la sens fixează mai bine decât a repeta sunetele), <b>legarea</b> informațiilor noi de ceea ce știi deja, folosirea <b>imaginilor și a hărților</b> și <b>somnul</b>, pentru că somnul favorizează consolidarea amintirilor.</p>`
    },
    {
      type: "decision",
      title: "Ascultare peste trei zile: ce plan alegi?",
      html: `<p>Peste trei zile ai o lucrare de istorie. Ai două ore pe zi la dispoziție. Poți alege cum să le folosești.</p>`,
      question: "Care strategie dă cel mai bun randament, potrivit cercetărilor despre memorie?",
      options: [
        { label: "Să recitesc și să subliniez capitolul dintr-o suflare în seara dinainte.", outcome: "Dă un sentiment de familiaritate, dar uitarea rapidă a lui Ebbinghaus șterge o mare parte din material; amintirea rămâne fragilă." },
        { label: "Să învăț în fiecare zi, împărțind pe blocuri, și să mă autoexaminez fără să mă uit în carte.", outcome: "Îmbină repetarea distribuită și practica recuperării: sunt cele două strategii cele mai eficiente. Costă mai mult efort, dar amintirea durează mult mai mult." },
        { label: "Să copiez capitolul cuvânt cu cuvânt într-un caiet.", outcome: "Este o muncă lungă, dar puțin elaborativă: se repetă fără a înțelege și fără a verifica ce se ține minte." }
      ],
      answer: 1,
      explain: "Rezultatele lui Ebbinghaus (curba uitării), Roediger și Karpicke (efectul testării) și Dunlosky indică același drum: <b>distribuie studiul în timp și autoexaminează-te activ</b>. O dificultate „dezirabilă” (a recupera cu efort) întărește memoria."
    },
    {
      type: "conceptMap",
      title: "Harta: memorie și învățare",
      nodes: [
        { id: "mem", label: "Memoria", x: 25, y: 8, color: "#3b82f6", html: "Codificare, stocare, recuperare.", why: "Pentru a-ți aminti, informația trebuie să fi intrat (atenție), să se fi păstrat (consolidare) și să poată fi regăsită (indicii). Un eșec în fiecare fază dă un tip diferit de uitare." },
        { id: "mod", label: "Modele", x: 8, y: 45, color: "#10b981", html: "Atkinson-Shiffrin (1968): senzorială, MSD, MLD. Baddeley-Hitch (1974): memoria de lucru.", why: "Pornesc de la ideea cognitivistă a minții ca sistem care prelucrează informații; cazurile clinice precum H.M. și experimentele despre MSD arată că sistemele sunt separabile." },
        { id: "obl", label: "Uitare și reconstrucție", x: 40, y: 45, color: "#ef4444", html: "Curba lui Ebbinghaus, schemele lui Bartlett, sugestia lui Loftus.", why: "Ebbinghaus (1885) a măsurat pierderea în timp; Bartlett (1932) și Loftus (1974) au arătat că amintirea se remodelează. De aceea mărturiile și amintirile trebuie verificate." },
        { id: "app", label: "Învățarea", x: 75, y: 8, color: "#f59e0b", html: "Schimbare stabilă a comportamentului datorată experienței.", why: "Behaviorismul o studiază prin experimente pe animale pentru a obține date observabile. Apoi cognitivismul amintește că în interiorul minții au loc procese (insight, hărți)." },
        { id: "cond", label: "Condiționări", x: 62, y: 45, color: "#8b5cf6", html: "Clasică (Pavlov) și operantă (Thorndike, Skinner).", why: "Prima explică asocierile dintre stimuli (emoții, fobii), a doua rolul consecințelor (recompense, pedepse). Stau la baza modificării comportamentului și a multor practici educative." },
        { id: "soc", label: "Insight și modeling", x: 90, y: 45, color: "#ec4899", html: "Köhler, Tolman, Bandura.", why: "Arată că se învață și înțelegând (restructurare) sau observându-i pe alții: oamenii nu sunt doar „mașini stimul-răspuns”." },
        { id: "str", label: "Strategii de studiu", x: 50, y: 82, color: "#0ea5e9", html: "Recuperare activă, repetare distribuită, elaborare, somn.", why: "Aplică rezultatele cercetării: ceea ce se ține minte cel mai bine este ceea ce se recuperează activ și se reia la intervale, legându-l de ceea ce se știe deja." }
      ],
      edges: [["mem", "mod", "descrisă de"], ["mem", "obl", "include"], ["app", "cond", "se explică prin"], ["app", "soc", "se explică prin"], ["obl", "str", "orientează"], ["cond", "str", "orientează"]]
    },
    {
      type: "curiosity",
      title: "Câinele care nu era doar un câine",
      html: `<p>Pavlov a descoperit condiționarea studiind cu totul altceva: <b>digestia</b>. Premiul său Nobel (1904) nu privește reflexele condiționate, descoperite apoi în timpul studiilor despre salivație. Și multe descoperiri din psihologie s-au născut din observații „în marginea” altei cercetări. O altă curiozitate: în experimentele sale Pavlov nu folosea doar clopoței, ci și metronoame, lumini și chiar stimuli tactili.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: învățarea",
      questions: [
        { type: "mc", q: "În condiționarea clasică a lui Pavlov clopoțelul devine...", options: ["stimul necondiționat", "stimul condiționat", "întărire negativă", "pedeapsă"], answer: 1, explain: "După asocierea cu mâncarea, clopoțelul este stimul condiționat." },
        { type: "mc", q: "Întărirea negativă...", options: ["face comportamentul să scadă", "scoate ceva neplăcut și face comportamentul să crească", "este echivalentă cu pedeapsa", "adaugă o recompensă"], answer: 1, explain: "Nu trebuie confundată cu pedeapsa: comportamentul crește pentru că evită sau face să înceteze ceva neplăcut." },
        { type: "tf", q: "Prin insight (Köhler) problema se rezolvă prin încercări și erori întâmplătoare.", answer: false, explain: "Insight-ul este o restructurare bruscă a problemei, nu o serie de încercări întâmplătoare." }
      ]
    }
  ],
  glossary: [
    { t: "Memorie", d: "Capacitatea de a codifica, păstra și recupera informații." },
    { t: "Chunk", d: "Unitate semnificativă de informație, care permite extinderea capacității memoriei de scurtă durată." },
    { t: "Memorie de lucru", d: "Sistem care menține și manipulează informații în timp ce se îndeplinesc sarcini (Baddeley și Hitch, 1974)." },
    { t: "Memorie episodică / semantică", d: "Amintiri ale unor episoade personale / cunoștințe generale (Tulving)." },
    { t: "Memorie procedurală", d: "Amintirea abilităților și a lui „a ști să faci”." },
    { t: "Curba uitării", d: "Evoluția uitării în timp, descrisă de Ebbinghaus (1885)." },
    { t: "Schemă", d: "Structură de cunoștințe care ghidează interpretarea și reconstrucția amintirilor." },
    { t: "Condiționare clasică", d: "Învățare prin asocierea stimulilor (Pavlov)." },
    { t: "Condiționare operantă", d: "Învățare bazată pe consecințele comportamentului (Thorndike, Skinner)." },
    { t: "Întărire / pedeapsă", d: "Consecințe care fac un comportament mai probabil / mai puțin probabil." },
    { t: "Insight", d: "Înțelegerea bruscă a soluției unei probleme (Köhler)." },
    { t: "Modeling", d: "Învățarea prin observarea unui model (Bandura)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care sunt cele trei faze ale memoriei?", options: ["Codificare, stocare, recuperare", "Ascultare, citire, scriere", "Percepție, atenție, uitare", "Senzație, condiționare, întărire"], answer: 0, explain: "O amintire poate eșua în fiecare dintre aceste faze." },
      { type: "mc", q: "Cine a propus în 1968 modelul memoriei cu depozite multiple?", options: ["Atkinson și Shiffrin", "Baddeley și Hitch", "Bartlett", "Pavlov"], answer: 0, explain: "Atkinson și Shiffrin: senzorială, de scurtă durată, de lungă durată." },
      { type: "tf", q: "Ebbinghaus a folosit ca material silabe fără sens pentru a elimina influența sensului.", answer: true, explain: "În 1885 a folosit silabe precum «DAX» pentru a studia memoria în mod controlat." },
      { type: "mc", q: "A ști să mergi pe bicicletă este un exemplu de memorie...", options: ["episodică", "semantică", "procedurală", "senzorială"], answer: 2, explain: "Este un „a ști să faci”, memorie procedurală (implicită)." },
      { type: "mc", q: "În experimentul lui Loftus și Palmer (1974) verbul «ciocnit» făcea să se estimeze...", options: ["viteze mai mari", "viteze mai mici", "aceeași viteză", "nicio viteză"], answer: 0, explain: "Întrebările sugestive modifică amintirea." },
      { type: "text", q: "Cum se numește fiziologul rus care a studiat reflexele condiționate la câini?", answer: ["pavlov", "ivan pavlov", "ivan petrovici pavlov"], explain: "Ivan Pavlov." },
      { type: "mc", q: "A-ți pune centura ca să înceteze un «bip» este un exemplu de...", options: ["întărire negativă", "pedeapsă", "condiționare clasică", "extincție"], answer: 0, explain: "Se scoate un stimul neplăcut și comportamentul crește." },
      { type: "order", q: "Pune în ordine fazele condiționării clasice.", items: ["Clopoțelul nu provoacă salivație", "Clopoțelul și mâncarea sunt prezentate împreună de mai multe ori", "Clopoțelul singur provoacă salivație"], explain: "Mai întâi stimulul neutru, apoi asocierea, apoi răspunsul condiționat." },
      { type: "mc", q: "Care pereche de strategii este mai eficientă potrivit cercetărilor?", options: ["Recuperare activă și repetare distribuită", "Recitire și subliniere", "Copiere și învățat noaptea", "Muzică și recitire"], answer: 0, explain: "Sunt tehnicile cu cea mai mare dovadă de eficacitate." },
      { type: "tf", q: "Bandura a arătat că se poate învăța și doar observând un model.", answer: true, explain: "Este învățarea observațională (experimentul păpușii Bobo, 1961)." }
    ]
  }
});
