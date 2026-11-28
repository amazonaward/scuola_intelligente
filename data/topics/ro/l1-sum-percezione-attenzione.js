TOPIC('ro', {
  id: "l1-sum-percezione-attenzione",
  title: "Percepția și atenția",
  intro: "Crezi că vezi lumea „așa cum este”, ca o cameră de filmat. În realitate creierul <b>construiește</b> ceea ce vedem: umple golurile, alege, interpretează, uneori se înșală. În această lecție vei afla diferența dintre <b>senzație și percepție</b>, <b>legile Gestalt</b>, <b>iluziile optice</b> (Müller-Lyer, Ponzo, Kanizsa, vaza lui Rubin) și rolul <b>atenției</b>, cu experimente celebre precum „gorila invizibilă” și efectul Stroop.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Senzație și percepție",
      html: `<p>Când te uiți la un prieten care se apropie, două procese lucrează împreună:</p>
<ul>
<li><b>Senzația</b> este <b>înregistrarea stimulilor</b> de către organele de simț: lumina lovește retina, celulele sensibile (conurile și bastonașele) o transformă în impulsuri nervoase. Este un proces „de jos în sus”, fiziologic.</li>
<li><b>Percepția</b> este <b>organizarea și interpretarea</b> acestor impulsuri de către creier: îl recunoaștem pe „Luca” care se apropie, și nu doar pete de culoare. Este un proces care depinde și de <b>experiență, așteptări, cultură, emoții</b> („de sus în jos”).</li>
</ul>
<p>Percepția nu este o copie a realității, ci o <b>construcție activă</b>. O dovedește <b>pata oarbă</b>: în punctul în care nervul optic iese din retină nu există celule sensibile la lumină, și totuși nu vedem o „gaură” în câmpul vizual, pentru că creierul o umple pe baza a ceea ce se află în jur.</p>
<p>Un cercetător italian foarte important în acest domeniu este <b>Gaetano Kanizsa</b> (1913-1993), originar din Trieste, elev al tradiției gestaltiste, al cărui celebru triunghi îl vom vedea.</p>`
    },
    {
      type: "svg",
      title: "De la lume la creier",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="15" y="100" width="120" height="90" rx="12" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="75" y="135" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">STIMUL</text>
<text x="75" y="157" font-size="14" text-anchor="middle" fill="#0f172a">lumină, sunete,</text>
<text x="75" y="175" font-size="14" text-anchor="middle" fill="#0f172a">mirosuri...</text>
<rect x="170" y="100" width="120" height="90" rx="12" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<text x="230" y="135" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">SENZAȚIE</text>
<text x="230" y="157" font-size="14" text-anchor="middle" fill="#0f172a">organe de simț</text>
<text x="230" y="175" font-size="14" text-anchor="middle" fill="#0f172a">(retina...)</text>
<rect x="325" y="100" width="120" height="90" rx="12" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="385" y="135" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">PERCEPȚIE</text>
<text x="385" y="157" font-size="14" text-anchor="middle" fill="#0f172a">organizare</text>
<text x="385" y="175" font-size="14" text-anchor="middle" fill="#0f172a">și semnificație</text>
<rect x="480" y="100" width="105" height="90" rx="12" fill="#e9d5ff" stroke="#6b21a8" stroke-width="2"/>
<text x="532" y="135" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">RĂSPUNS</text>
<text x="532" y="157" font-size="14" text-anchor="middle" fill="#0f172a">«E Luca!»</text>
<polygon points="138,145 166,145 158,137" fill="#0f172a"/><line x1="135" y1="145" x2="166" y2="145" stroke="#0f172a" stroke-width="3"/>
<line x1="290" y1="145" x2="322" y2="145" stroke="#0f172a" stroke-width="3"/><polygon points="322,145 312,138 312,152" fill="#0f172a"/>
<line x1="445" y1="145" x2="477" y2="145" stroke="#0f172a" stroke-width="3"/><polygon points="477,145 467,138 467,152" fill="#0f172a"/>
<rect x="325" y="30" width="260" height="46" rx="10" fill="#fed7aa" stroke="#9a3412" stroke-width="2"/>
<text x="455" y="58" font-size="14" text-anchor="middle" fill="#0f172a">experiență, așteptări, cultură, emoții</text>
<line x1="385" y1="78" x2="385" y2="98" stroke="#9a3412" stroke-width="2" stroke-dasharray="5 4"/>
<text x="300" y="250" font-size="14" text-anchor="middle" fill="#0f172a">Percepția este o interpretare: aceeași senzație, percepții diferite.</text>
</svg>`,
      caption: "Senzația este materialul brut; percepția îi dă formă și semnificație."
    },
    {
      type: "text",
      title: "2. Gestalt: percepem forme, nu bucăți",
      html: `<p>La începutul secolului al XX-lea, în Germania, <b>Max Wertheimer</b> (1880-1943), <b>Wolfgang Köhler</b> și <b>Kurt Koffka</b> au întemeiat psihologia <b>Gestalt</b> (cuvânt german care înseamnă „formă, configurație”). În <b>1912</b> Wertheimer a publicat studiile despre <b>fenomenul phi</b>: două lumini fixe care se aprind și se sting în succesiune rapidă sunt văzute ca <b>o lumină care se mișcă</b> (este principiul cinematografului și al reclamelor luminoase). Mișcarea nu se află în stimuli: o „adaugă” creierul. De aceea întregul este <b>diferit de suma părților</b>: o melodie rămâne aceeași dacă o transpui într-o altă tonalitate, chiar dacă toate notele s-au schimbat.</p>
<p>Gestaltiștii au descris câteva <b>legi ale organizării perceptive</b>, adică criteriile după care creierul grupează stimulii:</p>
<ul>
<li><b>Figură și fond</b>: percepem mereu un obiect care „stă în față” (figura) pe un fond.</li>
<li><b>Vecinătatea</b>: elementele apropiate se văd ca un grup.</li>
<li><b>Asemănarea</b>: elementele similare (ca culoare, formă) se grupează.</li>
<li><b>Închiderea</b>: tindem să completăm figurile deschise.</li>
<li><b>Continuitatea de direcție</b>: vedem linii care continuă cu un parcurs regulat, în loc să se frângă.</li>
<li><b>Forma bună</b> (sau pregnanța): dintre interpretările posibile o alegem pe cea mai simplă, regulată și simetrică.</li>
<li><b>Destinul comun</b>: elementele care se mișcă împreună sunt văzute ca o unitate (un stol).</li>
</ul>`
    },
    {
      type: "svg",
      title: "Legile Gestalt dintr-o privire",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<text x="100" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Vecinătate</text>
<g fill="#1e3a8a"><circle cx="40" cy="70" r="8"/><circle cx="64" cy="70" r="8"/><circle cx="88" cy="70" r="8"/><circle cx="130" cy="70" r="8"/><circle cx="154" cy="70" r="8"/><circle cx="178" cy="70" r="8"/><circle cx="40" cy="100" r="8"/><circle cx="64" cy="100" r="8"/><circle cx="88" cy="100" r="8"/><circle cx="130" cy="100" r="8"/><circle cx="154" cy="100" r="8"/><circle cx="178" cy="100" r="8"/></g>
<text x="100" y="140" font-size="14" text-anchor="middle" fill="#0f172a">două grupuri, nu 12 puncte</text>
<text x="300" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Asemănare</text>
<g><circle cx="230" cy="70" r="9" fill="#dc2626"/><circle cx="260" cy="70" r="9" fill="#1e3a8a"/><circle cx="290" cy="70" r="9" fill="#dc2626"/><circle cx="320" cy="70" r="9" fill="#1e3a8a"/><circle cx="350" cy="70" r="9" fill="#dc2626"/><circle cx="380" cy="70" r="9" fill="#1e3a8a"/>
<circle cx="230" cy="100" r="9" fill="#dc2626"/><circle cx="260" cy="100" r="9" fill="#1e3a8a"/><circle cx="290" cy="100" r="9" fill="#dc2626"/><circle cx="320" cy="100" r="9" fill="#1e3a8a"/><circle cx="350" cy="100" r="9" fill="#dc2626"/><circle cx="380" cy="100" r="9" fill="#1e3a8a"/></g>
<text x="305" y="140" font-size="14" text-anchor="middle" fill="#0f172a">se văd coloane de culoare</text>
<text x="510" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Închidere</text>
<path d="M 450 100 A 40 40 0 1 1 470 112" fill="none" stroke="#166534" stroke-width="5" stroke-dasharray="10 8"/>
<text x="510" y="140" font-size="14" text-anchor="middle" fill="#0f172a">vedem un cerc</text>
<text x="150" y="176" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Figură și fond</text>
<rect x="60" y="190" width="180" height="90" fill="#0f172a"/>
<path d="M 110 280 L 110 235 Q 110 205 150 205 Q 190 205 190 235 L 190 280 Z" fill="#f8fafc"/>
<text x="400" y="176" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Triunghiul lui Kanizsa</text>
<g fill="#0f172a"><circle cx="400" cy="208" r="14"/><circle cx="362" cy="272" r="14"/><circle cx="438" cy="272" r="14"/></g>
<polygon points="400,208 362,272 438,272" fill="#ffffff"/>
<text x="520" y="240" font-size="14" text-anchor="middle" fill="#0f172a">se «vede» un</text>
<text x="520" y="258" font-size="14" text-anchor="middle" fill="#0f172a">triunghi care nu există</text>
</svg>`,
      caption: "Creierul organizează ceea ce vede după reguli: grupează, completează, simplifică."
    },
    {
      type: "example",
      title: "Legile în acțiune în viața de zi cu zi",
      html: `<ul>
<li><b>Vecinătatea</b>: pe o pagină web, butoanele apropiate par să aparțină aceleiași funcții.</li>
<li><b>Asemănarea</b>: la echipamentele sportive, jucătorii cu același tricou se văd imediat ca o echipă.</li>
<li><b>Închiderea</b>: sigla WWF arată un panda construit din pete negre neconectate, dar noi vedem animalul întreg.</li>
<li><b>Destinul comun</b>: într-un stol de grauri, sute de puncte care se mișcă împreună sunt văzute ca un singur „nor”.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Triunghiul care nu există",
      html: `<p>În <b>1955</b> Gaetano Kanizsa a publicat figura triunghiului care îi poartă numele: trei „pacmani” și trei unghiuri deschise sugerează un triunghi alb, care pare chiar mai luminos decât fondul, cu <b>contururi iluzorii</b> care în realitate nu există. Este un exemplu de <b>închidere</b> și de <b>formă bună</b>: creierul preferă să „explice” desenul printr-un triunghi suprapus, mai degrabă decât prin trei cercuri mutilate.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: senzație, percepție, Gestalt",
      questions: [
        { type: "mc", q: "Procesul prin care creierul organizează și interpretează datele simțurilor este...", options: ["senzația", "percepția", "atenția selectivă", "condiționarea"], answer: 1, explain: "Senzația înregistrează, percepția interpretează." },
        { type: "mc", q: "Fenomenul phi al lui Wertheimer (1912) arată că...", options: ["mișcarea poate fi percepută chiar dacă nu există în stimul", "culorile nu există", "memoria este infailibilă", "atenția este limitată"], answer: 0, explain: "Două lumini alternante sunt văzute ca o lumină care se mișcă." },
        { type: "tf", q: "Potrivit Gestalt, percepția este simpla sumă a senzațiilor elementare.", answer: false, explain: "Întregul este diferit de suma părților: contează relațiile și organizarea." }
      ]
    },
    {
      type: "text",
      title: "3. Iluziile optice și constanțele perceptive",
      html: `<p><b>Iluziile</b> sunt „erori” sistematice și împărtășite ale percepției. Ele nu indică un creier defect, ci <b>criteriile</b> pe care le folosește pentru a interpreta lumea. Trei exemple clasice:</p>
<ul>
<li><b>Iluzia Müller-Lyer</b> (Franz Müller-Lyer, 1889): două segmente egale par de lungimi diferite dacă se termină cu săgeți îndreptate spre interior sau spre exterior.</li>
<li><b>Iluzia Ponzo</b> (Mario Ponzo, 1913): două segmente egale între două linii convergente (ca șinele) par diferite; cel mai „îndepărtat” pare mai mare.</li>
<li><b>Vaza lui Rubin</b> (Edgar Rubin, 1915): o imagine văzută fie ca o vază, fie ca două profiluri care se privesc. Ilustrează <b>reversibilitatea figurii și a fondului</b>: nu le putem vedea pe amândouă deodată.</li>
</ul>
<p>Iluziile sunt legate de <b>constanțele perceptive</b>: continuăm să percepem un obiect cu mărime, formă și culoare stabile, deși condițiile de observare se schimbă. O persoană care se îndepărtează proiectează pe retină o imagine tot mai mică, dar noi nu o vedem „micșorându-se”: creierul compensează cu distanța (<b>constanța mărimii</b>). O carte văzută din lateral rămâne dreptunghiulară (<b>constanța formei</b>). Iluziile apar când aceste mecanisme sunt „păcălite” de indicii înșelătoare.</p>`
    },
    {
      type: "svg",
      title: "Müller-Lyer și Ponzo",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<text x="150" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Müller-Lyer</text>
<line x1="50" y1="80" x2="250" y2="80" stroke="#1e3a8a" stroke-width="4"/>
<line x1="50" y1="80" x2="75" y2="60" stroke="#1e3a8a" stroke-width="4"/><line x1="50" y1="80" x2="75" y2="100" stroke="#1e3a8a" stroke-width="4"/>
<line x1="250" y1="80" x2="225" y2="60" stroke="#1e3a8a" stroke-width="4"/><line x1="250" y1="80" x2="225" y2="100" stroke="#1e3a8a" stroke-width="4"/>
<line x1="50" y1="180" x2="250" y2="180" stroke="#dc2626" stroke-width="4"/>
<line x1="50" y1="180" x2="25" y2="160" stroke="#dc2626" stroke-width="4"/><line x1="50" y1="180" x2="25" y2="200" stroke="#dc2626" stroke-width="4"/>
<line x1="250" y1="180" x2="275" y2="160" stroke="#dc2626" stroke-width="4"/><line x1="250" y1="180" x2="275" y2="200" stroke="#dc2626" stroke-width="4"/>
<text x="150" y="240" font-size="14" text-anchor="middle" fill="#0f172a">Cele două segmente au aceeași lungime (200).</text>
<text x="450" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Ponzo</text>
<line x1="380" y1="270" x2="440" y2="40" stroke="#6b7280" stroke-width="3"/>
<line x1="540" y1="270" x2="470" y2="40" stroke="#6b7280" stroke-width="3"/>
<line x1="432" y1="85" x2="480" y2="85" stroke="#dc2626" stroke-width="6"/>
<line x1="450" y1="205" x2="498" y2="205" stroke="#1e3a8a" stroke-width="6"/>
<text x="450" y="290" font-size="14" text-anchor="middle" fill="#0f172a">Cele două segmente sunt egale (48).</text>
</svg>`,
      caption: "Măsoară cu o riglă: în ambele figuri segmentele comparate sunt egale, dar contextul ne păcălește."
    },
    {
      type: "widget",
      title: "Potrivește cercetătorul cu descoperirea",
      widget: "match",
      options: { pairs: [
        ["Wertheimer (1912)", "Fenomenul phi"],
        ["Kanizsa (1955)", "Contururi iluzorii"],
        ["Rubin (1915)", "Vază / două profiluri"],
        ["Müller-Lyer (1889)", "Segmente cu săgeți"],
        ["Ponzo (1913)", "Linii convergente"]
      ] },
      caption: "Leagă fiecare cercetător de contribuția lui."
    },
    {
      type: "text",
      title: "4. Atenția: un reflector limitat",
      html: `<p>În fiecare clipă simțurile noastre primesc mult mai multă informație decât poate prelucra creierul. <b>Atenția</b> este procesul care <b>selectează</b> unii stimuli și îi ignoră pe alții. Este o resursă cu <b>capacitate limitată</b>.</p>
<ul>
<li><b>Atenția selectivă</b>: concentrarea asupra unui stimul, excluzându-i pe ceilalți. Exemplu: <b>«cocktail party effect»</b> studiat de Colin Cherry (1953): într-o cameră zgomotoasă urmărim o singură conversație, dar dacă cineva ne pronunță numele îl observăm chiar dacă nu îl ascultam. Donald Broadbent a propus (1958) modelul <b>filtrului</b>: un „gât de sticlă” lasă să treacă doar informațiile alese (modele ulterioare, ca cel al lui Treisman, admit un filtru mai „nuanțat”, prin care stimulii importanți trec oricum).</li>
<li><b>Atenția susținută</b> (vigilența): menținerea concentrării mult timp, ca la o lecție.</li>
<li><b>Atenția divizată</b>: încercarea de a face mai multe lucruri deodată. Funcționează doar dacă o sarcină este <b>automatizată</b> (a merge și a vorbi), nu dacă ambele cer resurse (a conduce și a scrie un mesaj).</li>
</ul>
<p>Atenția poate fi direcționată <b>voluntar</b> („de sus în jos”, decid eu) sau <b>captată</b> de stimuli puternici (un zgomot brusc, o culoare aprinsă: „de jos în sus”).</p>`
    },
    {
      type: "example",
      title: "Gorila invizibilă (Simons și Chabris, 1999)",
      html: `<p>Daniel Simons și Christopher Chabris le-au arătat unor voluntari un scurt film în care două echipe de jucători, una în tricouri albe și una în tricouri negre, își pasau o minge de baschet. Sarcina era să <b>numere pasele</b> echipei albe. La jumătatea filmului o persoană deghizată în <b>gorilă</b> traversa scena, își bătea pieptul și ieșea, rămânând vizibilă aproximativ nouă secunde.</p>
<p>Rezultat: aproximativ <b>jumătate</b> dintre participanți, concentrați pe sarcină, <b>nu au observat gorila</b>. Acest fenomen se numește <b>orbire prin neatenție</b> (<i>inattentional blindness</i>): dacă atenția este angajată în altă parte, putem să nu vedem ceea ce ne trece prin fața ochilor. Explică de ce un șofer distras de un mesaj poate „să nu vadă” un pieton.</p>`
    },
    {
      type: "curiosity",
      title: "Efectul Stroop",
      html: `<p>În 1935 John Ridley Stroop a arătat că a numi <b>culoarea cernelii</b> este mai lent când cuvântul scris indică o altă culoare (de exemplu cuvântul ROȘU scris cu albastru). Cititul este atât de automat încât interferează cu sarcina: atenția trebuie să <b>inhibe</b> răspunsul automat. Testul Stroop este încă folosit pentru a evalua controlul atențional.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege atenția și percepția",
      intro: "Dacă aceste concepte rămân abstracte, privește-le dintr-un alt unghi.",
      tabs: [
        { label: "🔦 Reflectorul", html: `<p>Atenția este ca <b>fasciculul unei lanterne</b> într-o cameră întunecată: luminează bine un punct, lăsând restul în umbră. Îl poți muta (atenția selectivă), îl poți ține mult timp pe loc (susținută) sau poți încerca să luminezi două puncte cu un fascicul lărgit (divizată), dar pierzi din claritate.</p>` },
        { label: "🎬 Regizorul", html: `<p>Percepția este ca un <b>regizor</b> care montează un film pornind de la filmări incomplete: alege scenele, umple golurile (pata oarbă, închiderea), păstrează coerența (constanțele). De aceea doi spectatori pot „monta” același material în moduri diferite, după experiențe și așteptări.</p>` },
        { label: "👉 Încearcă tu", html: `<p>Închide ochiul stâng și fixează cu cel drept crucea din stânga unei foi, ținând foaia la aproximativ 30-40 cm; pune în dreapta, la vreo zece centimetri, un punct negru. Apropiind sau depărtând foaia, punctul va <b>dispărea</b>: cade în pata ta oarbă. Creierul umple golul cu fondul.</p>` }
      ]
    },
    {
      type: "decision",
      title: "Mesaj în timp ce conduci?",
      html: `<p>Ești pe scuter și îți vine o notificare. Știi că atenția este o resursă limitată, dar gândești: „Fac repede, oricum conduc automat”.</p>`,
      question: "Ce ar fi indicat să faci, având în vedere datele psihologiei?",
      options: [
        { label: "Să răspund repede: conducerea este deja automată.", outcome: "Conducerea este automată doar în condiții previzibile. E de ajuns un imprevizibil (un pieton, o frână bruscă) și resursele atenționale sunt ocupate de citit: riscul de orbire prin neatenție crește enorm." },
        { label: "Să aștept până când stau pe loc într-un loc sigur.", outcome: "Este alegerea corectă: atenția divizată între două sarcini complexe le înrăutățește pe amândouă." },
        { label: "Să răspund vocal, cu difuzorul: așa nu mă mai uit la ecran.", outcome: "Mai puțin riscant decât scrisul, dar și o conversație angajează resurse cognitive și reduce capacitatea de a observa imprevizibilul." }
      ],
      answer: 1,
      explain: "Studiile despre atenție arată că <b>multitaskingul</b> cu sarcini neautomate este de fapt o trecere continuă de la o sarcină la alta, cu costuri de timp și erori. Și experimentul gorilei invizibile demonstrează că cine este concentrat pe altceva nu vede ce se află în fața lui."
    },
    {
      type: "conceptMap",
      title: "Harta: percepție și atenție",
      nodes: [
        { id: "sens", label: "Senzația", x: 15, y: 10, color: "#3b82f6", html: "Înregistrarea stimulilor de către organele de simț.", why: "Depinde de fiziologie: conuri și bastonașe în retină, receptori ai urechii, ai pielii. Fără senzație nu există material cu care să se lucreze." },
        { id: "perc", label: "Percepția", x: 50, y: 10, color: "#10b981", html: "Organizarea și interpretarea stimulilor.", why: "Creierul trebuie să aleagă o interpretare: datele simțurilor sunt ambigue (o imagine 2D pe retină poate corespunde unei infinități de scene 3D). De aceea folosește reguli și cunoștințe." },
        { id: "gest", label: "Legile Gestalt", x: 85, y: 10, color: "#f59e0b", html: "Vecinătate, asemănare, închidere, continuitate, formă bună, destin comun.", why: "Wertheimer, Köhler și Koffka (din 1912) au observat că organizarea perceptivă este spontană și urmează principii de simplitate și regularitate: sunt scurtături utile pentru a înțelege repede lumea." },
        { id: "ill", label: "Iluziile", x: 85, y: 50, color: "#ef4444", html: "Müller-Lyer, Ponzo, Kanizsa, Rubin.", why: "Apar când indicii înșelători activează mecanisme care de obicei funcționează (precum constanțele perceptive). Dezvăluie regulile ascunse ale percepției." },
        { id: "att", label: "Atenția", x: 50, y: 50, color: "#8b5cf6", html: "Selectarea stimulilor: selectivă, susținută, divizată.", why: "Resursele de prelucrare sunt limitate (Broadbent, 1958): fără un filtru am fi înecați de informații. Prețul este că ceea ce nu selectăm poate scăpa (gorila invizibilă)." },
        { id: "cec", label: "Orbirea prin neatenție", x: 20, y: 80, color: "#ec4899", html: "A nu vedea ceea ce este vizibil pentru că atenția este în altă parte.", why: "Simons și Chabris (1999): jumătate dintre participanți nu văd o gorilă. Arată că a vedea nu este un fapt pasiv, ci depinde de ceea ce căutăm." }
      ],
      edges: [["sens", "perc", "alimentează"], ["perc", "gest", "urmează"], ["gest", "ill", "le dezvăluie limitele"], ["att", "perc", "orientează"], ["att", "cec", "dacă e limitată, provoacă"]]
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li>Senzația = <b>a înregistra</b>; percepția = <b>a interpreta</b>.</li>
<li>Gestalt (1912, Wertheimer, Köhler, Koffka): <b>întregul</b> nu este suma părților.</li>
<li>Iluziile arată <b>regulile</b> percepției, nu un defect al ei.</li>
<li>Atenția este <b>limitată</b>: multitaskingul este o iluzie dacă sarcinile nu sunt automate.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: iluzii și atenție",
      questions: [
        { type: "mc", q: "În experimentul gorilei invizibile participanții trebuiau să...", options: ["numere pasele unei echipe", "recunoască fețe", "rețină culori", "rezolve ghicitori"], answer: 0, explain: "Sarcina de numărare le angaja atenția." },
        { type: "tf", q: "Vaza lui Rubin ilustrează reversibilitatea figurii și a fondului.", answer: true, explain: "Se vede fie vaza, fie două profiluri, niciodată amândouă deodată." },
        { type: "mc", q: "«Cocktail party effect» este un exemplu de atenție...", options: ["selectivă", "divizată", "susținută", "absentă"], answer: 0, explain: "Urmărim o singură conversație ignorându-le pe celelalte, dar rămânem sensibili la propriul nume." }
      ]
    }
  ],
  glossary: [
    { t: "Senzație", d: "Înregistrarea stimulilor de către organele de simț." },
    { t: "Percepție", d: "Organizarea și interpretarea senzațiilor de către creier." },
    { t: "Gestalt", d: "„Formă”: școală care studiază organizarea perceptivă în totalități structurate." },
    { t: "Figură și fond", d: "Distincție perceptivă între obiectul din prim-plan și ceea ce se află în spatele lui." },
    { t: "Fenomen phi", d: "Iluzie de mișcare produsă de lumini care se aprind în succesiune (Wertheimer, 1912)." },
    { t: "Constanță perceptivă", d: "Capacitatea de a percepe stabile mărimea, forma, culoarea unui obiect când condițiile se schimbă." },
    { t: "Iluzie optică", d: "Eroare perceptivă sistematică și împărtășită." },
    { t: "Atenție selectivă", d: "Capacitatea de a se concentra asupra unor stimuli ignorându-i pe ceilalți." },
    { t: "Orbire prin neatenție", d: "Neperceperea unui stimul vizibil pentru că atenția este în altă parte." },
    { t: "Efectul Stroop", d: "Interferența dintre citirea automată și denumirea culorii cernelii (1935)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Prin ce se deosebește percepția de senzație?", options: ["Percepția interpretează și organizează stimulii", "Percepția are loc doar în vise", "Senzația depinde de cultură, percepția nu", "Sunt același lucru"], answer: 0, explain: "Senzația înregistrează, percepția dă formă și semnificație." },
      { type: "tf", q: "Pata oarbă a retinei este o gaură pe care o vedem neagră în câmpul vizual.", answer: false, explain: "Creierul umple golul cu informația din jur, de aceea nu o vedem." },
      { type: "mc", q: "Cine a publicat în 1912 studiile despre fenomenul phi?", options: ["Kanizsa", "Wertheimer", "Stroop", "Broadbent"], answer: 1, explain: "Max Wertheimer, întemeietorul Gestalt." },
      { type: "mc", q: "Un șir de puncte văzute ca două grupuri separate ilustrează legea...", options: ["vecinătății", "închiderii", "destinului comun", "figură-fond"], answer: 0, explain: "Elementele apropiate sunt grupate." },
      { type: "text", q: "Cum se numește iluzia cu două segmente egale care se termină cu săgeți îndreptate spre interior sau spre exterior?", answer: ["muller-lyer", "müller-lyer", "iluzia muller-lyer", "iluzia müller-lyer", "iluzia lui muller-lyer", "iluzia lui müller-lyer"], explain: "Este iluzia Müller-Lyer (1889)." },
      { type: "mc", q: "«Gorila invizibilă» demonstrează...", options: ["orbirea prin neatenție", "constanța formei", "legea închiderii", "memoria de scurtă durată"], answer: 0, explain: "Cine este concentrat pe o sarcină poate să nu vadă un stimul neașteptat." },
      { type: "mc", q: "Modelul filtrului (Broadbent, 1958) afirmă că...", options: ["un gât de sticlă selectează informațiile de prelucrat", "toți stimulii sunt prelucrați până la capăt", "atenția nu are limite", "percepția este înnăscută"], answer: 0, explain: "Un filtru lasă să treacă doar o parte din informație." },
      { type: "tf", q: "Multitaskingul funcționează bine și între două sarcini care cer amândouă concentrare.", answer: false, explain: "Atenția este limitată: se trece de la o sarcină la alta cu costuri de timp și erori." },
      { type: "order", q: "Pune în ordine cronologică.", items: ["Iluzia Müller-Lyer", "Fenomenul phi al lui Wertheimer", "Vaza lui Rubin", "Triunghiul lui Kanizsa"], explain: "1889, 1912, 1915, 1955." },
      { type: "mc", q: "Efectul Stroop arată că...", options: ["un răspuns automat (cititul) poate interfera cu sarcina cerută", "culorile sunt percepute la fel de toți", "memoria este limitată", "copiii percep mai bine decât adulții"], answer: 0, explain: "Cititul este automat și interferează cu denumirea culorii cernelii." }
    ]
  }
});
