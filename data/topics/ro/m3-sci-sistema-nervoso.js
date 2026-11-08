TOPIC('ro', {
  id: "m3-sci-sistema-nervoso",
  title: "Sistemul nervos",
  intro: "A citi această frază, a-ți aminti o melodie, a-ți retrage mâna de pe o oală fierbinte, a simți mirosul pizzei: totul trece prin <b>sistemul nervos</b>, rețeaua de comunicații a corpului. Este alcătuit din miliarde de celule speciale, <b>neuronii</b>, care își transmit semnale electrice și chimice în câteva miimi de secundă.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. La ce folosește sistemul nervos",
      html: `<p>Sistemul nervos îndeplinește trei sarcini, una după alta:</p>
<ol>
<li><b>Primește</b> informații din exteriorul și din interiorul corpului, prin <b>receptorii</b> organelor de simț (ochi, urechi, piele…) și ai organelor interne.</li>
<li><b>Prelucrează</b> informațiile: le compară cu amintirile, decide ce trebuie făcut. Acest lucru îl fac <b>creierul</b> și <b>măduva spinării</b>.</li>
<li><b>Răspunde</b>, trimițând ordine către <b>efectori</b>: mușchii (care se contractă) și glandele (care produc substanțe).</li>
</ol>
<p>Lucrează împreună cu <b>sistemul endocrin</b> (glandele care produc hormoni): sistemul nervos este rapid ca un mesaj pe telefon, hormonii sunt mai lenți, dar au efecte mai durabile, ca o scrisoare.</p>`
    },
    {
      type: "text",
      title: "2. Neuronul, celula care „vorbește”",
      html: `<p><b>Neuronul</b> este celula sistemului nervos. În creierul uman există aproximativ <b>86 de miliarde</b>. Este format din:</p>
<ul>
<li><b>corpul celular</b>, cu nucleul;</li>
<li><b>dendrite</b>: ramificații scurte care <b>primesc</b> semnalele de la alți neuroni;</li>
<li><b>axonul</b>: o prelungire lungă (poate depăși 1 metru, de la măduva spinării până la degetul mare de la picior!) care <b>transmite</b> semnalul;</li>
<li><b>teaca de mielină</b>: un înveliș izolator de grăsime, ca plasticul din jurul firelor electrice, care face semnalul mult mai rapid;</li>
<li><b>terminațiile sinaptice</b>: „degetele” finale care transmit mesajul celulei următoare.</li>
</ul>
<p>Semnalul care aleargă de-a lungul axonului se numește <b>impuls nervos</b>: este o mică undă electrică produsă de trecerea ionilor (sodiu și potasiu) prin membrană. În fibrele cu mielină poate călători cu până la aproximativ <b>120 m/s</b> (peste 400 km/h).</p>
<p>Pe lângă neuroni există <b>celulele gliale</b>, care îi hrănesc, îi protejează și formează mielina.</p>`
    },
    {
      type: "widget",
      title: "Recunoaște părțile neuronului",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="260" fill="#eff6ff"/>
<path d="M90 130 L30 70 M90 130 L25 130 M90 130 L35 195 M60 100 L45 60 M55 165 L30 175 M40 70 L20 50" stroke="#7c3aed" stroke-width="7" stroke-linecap="round" fill="none"/>
<circle cx="100" cy="130" r="38" fill="#c084fc" stroke="#6d28d9" stroke-width="4"/>
<circle cx="100" cy="130" r="13" fill="#4c1d95"/>
<line x1="138" y1="130" x2="540" y2="130" stroke="#6d28d9" stroke-width="8"/>
<rect x="170" y="115" width="70" height="30" rx="15" fill="#fde68a" stroke="#d97706" stroke-width="3"/>
<rect x="260" y="115" width="70" height="30" rx="15" fill="#fde68a" stroke="#d97706" stroke-width="3"/>
<rect x="350" y="115" width="70" height="30" rx="15" fill="#fde68a" stroke="#d97706" stroke-width="3"/>
<rect x="440" y="115" width="70" height="30" rx="15" fill="#fde68a" stroke="#d97706" stroke-width="3"/>
<path d="M540 130 L590 85 M540 130 L600 130 M540 130 L590 180" stroke="#6d28d9" stroke-width="6" fill="none"/>
<circle cx="592" cy="83" r="9" fill="#22c55e"/><circle cx="604" cy="130" r="9" fill="#22c55e"/><circle cx="592" cy="182" r="9" fill="#22c55e"/>
<text x="340" y="230" font-size="16" fill="#1e3a8a" text-anchor="middle">direcția impulsului →</text>
</svg>`,
        spots: [
          { x: 35, y: 70, label: "Dendrite" },
          { x: 100, y: 105, label: "Corp celular" },
          { x: 100, y: 130, label: "Nucleu" },
          { x: 300, y: 130, label: "Teaca de mielină" },
          { x: 250, y: 155, label: "Axon" },
          { x: 604, y: 130, label: "Terminații sinaptice" }
        ]
      },
      caption: "Atinge fiecare punct și alege numele potrivit. Semnalul intră prin dendrite și iese prin terminații."
    },
    {
      type: "text",
      title: "3. Sinapsa: un salt chimic",
      html: `<p>Neuronii nu se ating: între un neuron și altul există un spațiu microscopic, <b>sinapsa</b>. Când impulsul electric ajunge la capătul axonului, neuronul eliberează substanțe chimice, <b>neurotransmițătorii</b> (de exemplu acetilcolina, dopamina, serotonina). Acestea străbat spațiul și se leagă de celula următoare, care se poate „aprinde” sau „stinge”.</p>
<p>Fiecare neuron poate avea mii de sinapse: în creier sunt sute de <b>mii de miliarde</b>. Când învățăm ceva, unele sinapse se întăresc și se formează altele noi: aceasta este <b>plasticitatea</b> creierului. De aceea exercițiul funcționează!</p>
<p>Multe <b>droguri</b>, <b>alcoolul</b> și <b>nicotina</b> acționează chiar asupra sinapselor, imitând sau blocând neurotransmițătorii: modifică percepțiile și reflexele și pot crea <b>dependență</b>. Creierul adolescenților este încă în construcție (până la aproximativ 25 de ani) și este deosebit de vulnerabil.</p>`
    },
    {
      type: "text",
      title: "4. Organizarea: central și periferic",
      html: `<table>
<tr><th>Sistemul nervos central (SNC)</th><th>Sistemul nervos periferic (SNP)</th></tr>
<tr><td><b>Encefalul</b> (în craniu) și <b>măduva spinării</b> (în coloana vertebrală). Prelucrează informațiile și ia decizii.</td>
<td><b>Nervii</b> care leagă SNC de tot corpul: <b>12 perechi de nervi cranieni</b> (pornesc din encefal) și <b>31 de perechi de nervi spinali</b> (pornesc din măduvă).</td></tr>
</table>
<p>SNC este protejat de <b>oase</b> (craniu și vertebre), de trei membrane, <b>meningele</b> (dura mater, arahnoida, pia mater), și de un lichid care face rol de pernă, <b>lichidul cefalorahidian</b>.</p>
<p>SNP se împarte în:</p>
<ul>
<li><b>somatic</b> (voluntar): controlează mușchii scheletici, cei pe care îi miști când vrei;</li>
<li><b>autonom</b> (involuntar): controlează inima, stomacul, intestinul, glandele. Are două părți care lucrează în mod opus:
<ul><li><b>simpatic</b>: „luptă sau fugi” – accelerează inima, dilată pupilele, oprește digestia;</li>
<li><b>parasimpatic</b>: „odihnește-te și digeră” – încetinește inima, favorizează digestia.</li></ul></li>
</ul>`
    },
    {
      type: "text",
      title: "5. Encefalul",
      html: `<p><b>Encefalul</b> cântărește aproximativ <b>1,3–1,4 kg</b>, adică 2% din greutatea corpului, dar consumă aproximativ <b>20% din energie</b>. Cuprinde:</p>
<ul>
<li><b>Creierul</b>: împărțit în două <b>emisfere</b> legate prin <b>corpul calos</b>. Partea exterioară, <b>scoarța cerebrală</b> (substanța cenușie, plină de cute), este locul unde se nasc gândirea, limbajul, memoria și mișcările voluntare. Fiecare emisferă se împarte în 4 <b>lobi</b>: frontal, parietal, temporal, occipital.</li>
<li><b>Diencefalul</b>: <b>talamusul</b> sortează informațiile de la simțuri; <b>hipotalamusul</b> reglează temperatura, foamea, setea, somnul și comandă hipofiza („regina” glandelor).</li>
<li><b>Cerebelul</b>: în spatele și sub creier; coordonează mișcările și <b>echilibrul</b>. Îți permite să mergi cu bicicleta fără să te gândești.</li>
<li><b>Trunchiul cerebral</b>: leagă encefalul de măduvă; controlează funcții vitale automate precum <b>respirația</b> și <b>bătăile inimii</b>.</li>
</ul>
<p>Curios: nervii se <b>încrucișează</b>. Emisfera <b>stângă</b> controlează partea <b>dreaptă</b> a corpului și invers.</p>`
    },
    {
      type: "svg",
      title: "Lobii creierului și funcțiile lor",
      svg: `<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="330" fill="#fff7ed"/>
<path d="M120 190 C 100 110, 170 40, 280 38 C 380 35, 470 70, 490 150 C 505 205, 470 240, 420 240 L 160 240 C 130 238, 122 215, 120 190 Z" fill="#fca5a5" stroke="#7f1d1d" stroke-width="3"/>
<path d="M280 38 C 270 100, 290 150, 260 240" stroke="#7f1d1d" stroke-width="3" fill="none"/>
<path d="M420 70 C 400 130, 420 180, 440 235" stroke="#7f1d1d" stroke-width="3" fill="none"/>
<path d="M140 200 C 220 180, 330 190, 420 200" stroke="#7f1d1d" stroke-width="3" fill="none"/>
<path d="M120 190 C 100 110, 170 40, 280 38 C 270 100, 290 150, 270 195 C 220 185, 170 190, 120 190 Z" fill="#60a5fa" opacity="0.75"/>
<path d="M280 38 C 380 35, 410 50, 420 70 C 400 130, 420 180, 420 200 C 360 192, 310 190, 270 195 C 290 150, 270 100, 280 38 Z" fill="#fbbf24" opacity="0.75"/>
<path d="M420 70 C 470 85, 495 130, 490 160 C 500 205, 470 238, 440 236 C 425 220, 420 210, 420 200 C 420 180, 400 130, 420 70 Z" fill="#a78bfa" opacity="0.8"/>
<path d="M140 200 C 220 182, 330 190, 420 200 C 430 220, 438 232, 440 238 L 170 240 C 150 236, 142 222, 140 200 Z" fill="#34d399" opacity="0.8"/>
<ellipse cx="430" cy="270" rx="55" ry="32" fill="#f472b6" stroke="#831843" stroke-width="3"/>
<rect x="335" y="238" width="30" height="80" fill="#fb923c" stroke="#7c2d12" stroke-width="3"/>
<text x="195" y="130" font-size="16" font-weight="bold" fill="#1e3a8a">FRONTAL</text>
<text x="168" y="150" font-size="13" fill="#1e3a8a">decizii, mișcare,</text>
<text x="180" y="166" font-size="13" fill="#1e3a8a">vorbire (Broca)</text>
<text x="300" y="90" font-size="16" font-weight="bold" fill="#78350f">PARIETAL</text>
<text x="300" y="110" font-size="13" fill="#78350f">pipăit, poziție</text>
<text x="430" y="140" font-size="14" font-weight="bold" fill="#3b0764">OCCI-</text>
<text x="435" y="157" font-size="14" font-weight="bold" fill="#3b0764">PITAL</text>
<text x="437" y="175" font-size="13" fill="#3b0764">vedere</text>
<text x="230" y="218" font-size="16" font-weight="bold" fill="#064e3b">TEMPORAL: auz, memorie</text>
<text x="430" y="275" font-size="14" font-weight="bold" fill="#831843" text-anchor="middle">Cerebel</text>
<text x="300" y="300" font-size="14" font-weight="bold" fill="#7c2d12" text-anchor="end">Trunchi cerebral</text>
<text x="40" y="60" font-size="15" fill="#334155">față ←</text>
</svg>`,
      caption: "Emisfera stângă văzută din lateral. Fiecare lob are funcții predominante, dar aproape pentru orice activitate lucrează împreună multe zone."
    },
    {
      type: "3d",
      title: "Straturile care protejează creierul",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#fcd5b5", label: "Scalp" },
          { r: 0.95, color: "#f1f5f9", label: "Oasele craniului" },
          { r: 0.87, color: "#93c5fd", label: "Meninge și lichid cefalorahidian" },
          { r: 0.82, color: "#9ca3af", label: "Scoarța (substanța cenușie)" },
          { r: 0.72, color: "#f8fafc", label: "Substanța albă (axoni cu mielină)" },
          { r: 0.15, color: "#38bdf8", label: "Ventricule pline de lichid cefalorahidian" }
        ]
      },
      caption: "Rotește și privește felia: substanța cenușie conține corpii neuronilor, substanța albă este albă din cauza mielinei axonilor. Casca de bicicletă adaugă încă un strat!"
    },
    {
      type: "quiz",
      title: "Mini-test: neuroni și encefal",
      questions: [
        { type: "mc", q: "Care parte a neuronului primește semnalele?", options: ["Axonul", "Dendritele", "Teaca de mielină"], answer: 1, explain: "Dendritele primesc, axonul transmite." },
        { type: "mc", q: "Care organ coordonează echilibrul?", options: ["Cerebelul", "Măduva spinării", "Talamusul"], answer: 0, explain: "Cerebelul coordonează mișcările și echilibrul." },
        { type: "tf", q: "Emisfera stângă controlează mai ales partea stângă a corpului.", answer: false, explain: "Căile nervoase se încrucișează: emisfera stângă controlează partea dreaptă." },
        { type: "text", q: "Cum se numește spațiul dintre doi neuroni prin care trec neurotransmițătorii?", answer: ["sinapsa", "sinapsă", "o sinapsă", "fanta sinaptică"], explain: "Este sinapsa." }
      ]
    },
    {
      type: "text",
      title: "6. Măduva spinării și reflexele",
      html: `<p><b>Măduva spinării</b> este un cordon lung de aproximativ <b>45 cm</b> care coboară în interiorul coloanei vertebrale. Face rol de „autostradă” între encefal și corp, dar știe și să decidă singură în cazul <b>reflexelor</b>.</p>
<p>Un <b>reflex</b> este un răspuns <b>automat, foarte rapid și involuntar</b>. Traseul se numește <b>arc reflex</b>:</p>
<ol>
<li>un <b>receptor</b> (din piele) simte căldura oalei;</li>
<li>un <b>neuron senzitiv</b> duce semnalul la măduva spinării;</li>
<li>în măduvă un <b>interneuron</b> îl transmite imediat către…</li>
<li>…un <b>neuron motor</b>, care ajunge la <b>mușchiul</b> brațului;</li>
<li>mușchiul se contractă: <b>îți retragi mâna</b>. Abia <b>după aceea</b> creierul primește informația și simți durerea!</li>
</ol>
<p>Medicul verifică <b>reflexul rotulian</b> lovind cu un ciocănel sub genunchi: piciorul tresare singur. Și clipitul, strănutul și tusea sunt reflexe.</p>`
    },
    {
      type: "svg",
      title: "Arcul reflex",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f0fdf4"/>
<ellipse cx="480" cy="150" rx="70" ry="80" fill="#e5e7eb" stroke="#475569" stroke-width="3"/>
<path d="M455 120 C 440 150, 440 170, 460 190 L 500 190 C 520 170, 520 150, 505 120 Z" fill="#9ca3af"/>
<text x="480" y="255" font-size="15" text-anchor="middle" fill="#1e293b" font-weight="bold">Măduva spinării</text>
<rect x="40" y="60" width="80" height="50" rx="10" fill="#ef4444"/>
<text x="80" y="92" font-size="15" fill="#fff" text-anchor="middle">🔥 căldură</text>
<circle cx="140" cy="85" r="10" fill="#f59e0b"/>
<text x="140" y="45" font-size="14" fill="#92400e" text-anchor="middle">1 receptor</text>
<path d="M150 85 C 260 60, 380 70, 470 135" stroke="#2563eb" stroke-width="6" fill="none"/>
<text x="290" y="58" font-size="14" fill="#1d4ed8" text-anchor="middle">2 neuron senzitiv →</text>
<circle cx="480" cy="155" r="9" fill="#a855f7"/>
<text x="560" y="160" font-size="14" fill="#6b21a8">3 interneuron</text>
<path d="M470 165 C 380 230, 260 240, 160 215" stroke="#dc2626" stroke-width="6" fill="none"/>
<text x="300" y="262" font-size="14" fill="#b91c1c" text-anchor="middle">← 4 neuron motor</text>
<ellipse cx="120" cy="210" rx="45" ry="25" fill="#fb7185" stroke="#9f1239" stroke-width="3"/>
<text x="120" y="215" font-size="14" fill="#fff" text-anchor="middle">mușchi</text>
<text x="120" y="262" font-size="14" fill="#9f1239" text-anchor="middle">5 îți retragi mâna!</text>
</svg>`,
      caption: "Traseul reflexului nu trece prin creier: de aceea este atât de rapid."
    },
    {
      type: "widget",
      title: "Voluntar sau involuntar?",
      widget: "classify",
      options: {
        groups: ["🙋 Voluntar (tu decizi)", "⚡ Involuntar / reflex"],
        items: [
          ["Ridicatul mâinii pentru a vorbi", 0],
          ["Bătăile inimii", 1],
          ["Lovitul unei mingi cu piciorul", 0],
          ["Clipitul când se apropie o musculiță", 1],
          ["Scrisul unei fraze", 0],
          ["Pupila care se strânge la lumină puternică", 1],
          ["Strănutul", 1],
          ["Mestecatul unui sandviș", 0],
          ["Digestia în stomac", 1]
        ]
      },
      caption: "Mișcările voluntare pornesc din scoarță; cele involuntare din măduvă, din trunchiul cerebral sau din sistemul autonom."
    },
    {
      type: "text",
      title: "7. Organele de simț",
      html: `<p>Organele de simț conțin <b>receptori</b> care transformă un stimul (lumină, sunet, presiune, substanțe chimice) în impulsuri nervoase. Apoi creierul le interpretează: de fapt <b>vedem și auzim cu creierul</b>.</p>
<table>
<tr><th>Simțul</th><th>Organul și receptorii</th><th>Zona din creier</th></tr>
<tr><td>👁️ Văzul</td><td>Ochiul: lumina trece prin cornee, pupilă și cristalin și formează o imagine <b>răsturnată</b> pe <b>retină</b>, unde se află <b>conurile</b> (aproximativ 6 milioane, văd culorile) și <b>bastonașele</b> (aproximativ 120 de milioane, văd cu puțină lumină). <b>Nervul optic</b> duce semnalul la creier, care „îndreaptă” imaginea.</td><td>Lobul occipital</td></tr>
<tr><td>👂 Auzul și echilibrul</td><td>Urechea externă (pavilionul) → medie (timpanul și trei oscioare: ciocan, nicovală, <b>scăriță</b>, cel mai mic os din corp, aproximativ 3 mm) → internă: <b>cohleea</b> pentru auz și <b>canalele semicirculare</b> pentru echilibru.</td><td>Lobul temporal; cerebelul</td></tr>
<tr><td>👃 Mirosul</td><td>Receptori în partea de sus a nasului, sensibili la mii de mirosuri.</td><td>Lobul temporal și sistemul limbic (emoții și amintiri)</td></tr>
<tr><td>👅 Gustul</td><td>Papile gustative pe limbă: dulce, sărat, acru, amar și <b>umami</b> (gustul „savuros” al parmezanului și al supei).</td><td>Scoarța gustativă</td></tr>
<tr><td>✋ Pipăitul</td><td>Receptori în <b>piele</b> pentru presiune, vibrație, cald, rece și durere. Vârfurile degetelor și buzele au foarte mulți.</td><td>Lobul parietal</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Asociază partea cu funcția",
      widget: "match",
      options: {
        pairs: [
          ["Retina", "Conține conuri și bastonașe"],
          ["Cohleea", "Transformă sunetele în impulsuri"],
          ["Canalele semicirculare", "Simțul echilibrului"],
          ["Lobul occipital", "Prelucrează vederea"],
          ["Trunchiul cerebral", "Controlează respirația și bătăile inimii"],
          ["Hipotalamusul", "Reglează foamea, setea și temperatura"]
        ]
      },
      caption: "Atinge un element din stânga și apoi pe cel potrivit din dreapta."
    },
    {
      type: "example",
      title: "Exemplu practic: măsoară-ți timpul de reacție cu o riglă",
      html: `<p>Ai nevoie de un coleg și de o riglă de 30 cm.</p>
<ol>
<li>Colegul ține rigla vertical, cu 0 în jos, între degetul tău mare și arătătorul tău deschise (fără să o atingi).</li>
<li>Fără să te avertizeze, o lasă să cadă: tu o prinzi cât mai repede.</li>
<li>Citește la câți centimetri ai prins-o.</li>
</ol>
<p>Rigla cade ca orice obiect, deci din distanță se poate afla timpul: <b>t = √(2 × d : 9,8)</b> (cu d în metri).<br>
Dacă ai prins-o la <b>20 cm</b>: t = √(2 × 0,20 : 9,8) ≈ <b>0,2 secunde</b>. La 15 cm ≈ 0,17 s; la 10 cm ≈ 0,14 s.</p>
<p>În acest timp ochiul vede, semnalul ajunge la creier, creierul decide și trimite ordinul către mușchii mâinii. Încercați să repetați după ce ați citit cu voce tare sau cu o distragere: timpul se înrăutățește. Este motivul pentru care <b>nu se folosește telefonul când conduci</b>: la 50 km/h, într-o secundă de neatenție se parcurg aproximativ 14 metri.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: găsește-ți pata oarbă",
      html: `<p>Pe o foaie desenează un <b>X</b> în stânga și un <b>punct</b> la 8 cm mai la dreapta. Închide ochiul stâng și privește X-ul cu ochiul drept. Apropie și depărtează încet foaia: la aproximativ 25–30 cm punctul <b>dispare</b>!</p>
<p>În acel loc imaginea cade acolo unde <b>nervul optic</b> iese din retină: acolo nu există nici conuri, nici bastonașe. În mod normal nu ne dăm seama pentru că creierul „umple golul” cu ceea ce se află în jur și pentru că cei doi ochi se completează reciproc.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Un Nobel italian pentru neuroni",
      html: `<p>În 1873 medicul italian <b>Camillo Golgi</b>, la Pavia, a inventat o colorație cu săruri de argint („reacția neagră”) care pentru prima dată arăta neuronii întregi la microscop. Spaniolul <b>Santiago Ramón y Cajal</b> a folosit-o pentru a demonstra că sistemul nervos este alcătuit din celule separate. În <b>1906</b> au primit împreună premiul Nobel, chiar dacă nu erau de acord cu felul în care funcționează neuronii! În 1986 o altă italiancă, <b>Rita Levi-Montalcini</b>, a câștigat Nobelul pentru descoperirea factorului de creștere nervoasă (NGF).</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Creierul nu se oprește niciodată",
      html: `<p>În timpul <b>somnului</b> creierul lucrează foarte mult: reordonează amintirile zilei, întărește ceea ce ai învățat și „curăță” substanțele de rebut. De aceea să dormi 9–10 ore pe noapte, la vârsta ta, te ajută cu adevărat să înveți mai bine. Iar creierul nu simte durerea: nu are receptori ai durerii, atât de mult încât unele operații se fac cu pacientul treaz!</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege sistemul nervos",
      intro: "Dacă numele părților nu îți rămân în cap, încearcă să vezi sistemul nervos într-un alt fel.",
      tabs: [
        {
          label: "🏢 Compania mesajelor",
          html: `<p>Imaginează-ți corpul ca pe o mare <b>companie</b>:</p>
<ul>
<li><b>receptorii</b> sunt senzorii și camerele de la intrare;</li>
<li><b>nervii senzitivi</b> sunt firele care duc veștile la biroul central;</li>
<li><b>creierul</b> este conducerea, unde se decide; <b>scoarța frontală</b> este directorul, <b>cerebelul</b> coordonatorul lucrărilor, <b>trunchiul cerebral</b> paznicul care ține încălzirea pornită și noaptea;</li>
<li><b>măduva spinării</b> este centrala de sortare, care în caz de urgență (reflex) acționează fără să întrebe directorul;</li>
<li><b>nervii motori</b> duc ordinele către muncitori: <b>mușchii</b>.</li>
</ul>`
        },
        {
          label: "🔌 Ca o instalație electrică",
          html: `<p>Un neuron seamănă cu un <b>cablu electric</b>: axonul este firul de cupru, <b>mielina</b> este teaca izolatoare de plastic. Dar există o diferență importantă: în neuron nu aleargă electroni ca în cupru, ci <b>ioni</b> (sodiu și potasiu) care intră și ies prin membrană, un „declic” după altul, ca un șir de piese de domino care cad. În fibra cu mielină semnalul „sare” de la o întrerupere a tecii la alta: de aceea este mai rapid.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fefce8"/>
<text x="20" y="35" font-size="16" fill="#0f172a" font-weight="bold">Cablu electric</text>
<rect x="20" y="50" width="560" height="34" rx="17" fill="#3b82f6"/>
<rect x="20" y="61" width="560" height="12" fill="#d97706"/>
<text x="300" y="104" font-size="14" fill="#1e3a8a" text-anchor="middle">teacă de plastic + cupru: aleargă electronii</text>
<text x="20" y="140" font-size="16" fill="#0f172a" font-weight="bold">Axon cu mielină</text>
<line x1="20" y1="172" x2="580" y2="172" stroke="#7c3aed" stroke-width="10"/>
<rect x="40" y="156" width="110" height="32" rx="16" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<rect x="170" y="156" width="110" height="32" rx="16" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<rect x="300" y="156" width="110" height="32" rx="16" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<rect x="430" y="156" width="110" height="32" rx="16" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<path d="M160 150 Q 225 115 290 150 Q 355 115 420 150 Q 485 115 550 150" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="300" y="212" font-size="14" fill="#7f1d1d" text-anchor="middle">semnalul „sare” între porțiunile descoperite: mai rapid</text>
</svg>`
        },
        {
          label: "👁️ Ochiul în 3D",
          html: `<p>Ochiul este o sferă de aproximativ <b>2,4 cm</b>. Rotește modelul: la exterior găsești <b>scleroticul</b> („albul” ochiului), <b>coroida</b> bogată în vase de sânge, <b>retina</b> cu receptorii și, în interior, <b>umoarea sticloasă</b>, o gelatină transparentă. În față, corneea și cristalinul funcționează ca lentilele unui aparat foto.</p>`,
          scene: "layers",
          options: {
            layers: [
              { r: 1, color: "#f8fafc", label: "Sclerotica" },
              { r: 0.94, color: "#b91c1c", label: "Coroida" },
              { r: 0.89, color: "#f59e0b", label: "Retina (conuri și bastonașe)" },
              { r: 0.85, color: "#bae6fd", label: "Umoarea sticloasă" }
            ]
          }
        },
        {
          label: "🃏 Cartonașe de recapitulare",
          html: `<p>Întoarce cartonașele: pe față partea, pe verso ce face. Recapitularea cu cartonașe folosește chiar plasticitatea creierului: de fiecare dată când îți amintești, sinapsa se întărește.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🧠 Scoarța frontală", back: "Decizii, mișcări voluntare, limbaj vorbit" },
              { front: "⚖️ Cerebelul", back: "Echilibrul și coordonarea mișcărilor" },
              { front: "❤️ Trunchiul cerebral", back: "Respirație, bătăile inimii, înghițire" },
              { front: "🦴 Măduva spinării", back: "Leagă encefalul de corp; gestionează reflexele" },
              { front: "🏃 Simpaticul", back: "Luptă sau fugi: accelerează inima" },
              { front: "😌 Parasimpaticul", back: "Odihnește-te și digeră: încetinește inima" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta sistemului nervos: atinge nodurile și descoperă de ce",
      nodes: [
        { id: "stimolo", label: "Stimuli și receptori", x: 12, y: 10, color: "#f59e0b", html: "Lumină, sunete, căldură, presiune, substanțe chimice percepute de receptori.", why: "Receptorii sunt celule specializate care transformă un tip de energie într-un semnal electric. Fiecare receptor răspunde la un singur tip de stimul: de aceea o lovitură în ochi te face să „vezi stele”." },
        { id: "neurone", label: "Neuron", x: 50, y: 10, color: "#a855f7", html: "Celula care transmite semnalele nervoase.", why: "<b>Teoria neuronului</b> a lui Ramón y Cajal (sfârșitul secolului al XIX-lea), făcută posibilă de colorația lui <b>Golgi</b> (1873), a demonstrat că sistemul nervos este alcătuit din celule distincte. Nobel 1906 pentru amândoi." },
        { id: "impulso", label: "Impuls electric", x: 85, y: 10, color: "#ef4444", html: "O undă electrică care aleargă de-a lungul axonului.", why: "<b>Luigi Galvani</b> în 1791 a văzut labele de broască contractându-se atinse de metale și a vorbit despre „electricitate animală”. În 1952 Hodgkin și Huxley au explicat rolul ionilor de sodiu și potasiu (Nobel 1963)." },
        { id: "sinapsi", label: "Sinapsa", x: 85, y: 40, color: "#db2777", html: "Punctul de contact chimic dintre doi neuroni.", why: "Numele a fost propus de Charles Sherrington în 1897. În 1921 Otto Loewi a demonstrat, cu un experiment pe inimi de broască, că neuronii comunică prin substanțe chimice (neurotransmițătorii)." },
        { id: "snc", label: "Sistemul nervos central", x: 50, y: 45, color: "#2563eb", html: "Encefalul și măduva spinării: prelucrează și decid.", why: "S-a dezvoltat concentrând neuronii într-un „centru de comandă” protejat de oase: animalele simple precum meduzele au doar o rețea difuză de neuroni, vertebratele un encefal din ce în ce mai complex." },
        { id: "snp", label: "Sistemul nervos periferic", x: 15, y: 45, color: "#0ea5e9", html: "12 perechi de nervi cranieni și 31 de nervi spinali.", why: "Nervii sunt fascicule de axoni: trebuie să ajungă la fiecare mușchi și la fiecare centimetru de piele, de aceea se ramifică în tot corpul." },
        { id: "riflessi", label: "Reflexe", x: 15, y: 80, color: "#14b8a6", html: "Răspunsuri automate gestionate de măduva spinării.", why: "Sunt un avantaj pentru supraviețuire: ocolind creierul se câștigă milisecunde prețioase pentru a scăpa de un pericol." },
        { id: "corteccia", label: "Scoarța și lobii", x: 50, y: 80, color: "#16a34a", html: "Gândire, limbaj, memorie, simțuri.", why: "În 1861 <b>Paul Broca</b> a studiat un pacient care înțelegea, dar nu putea vorbi, și a găsit o leziune în lobul frontal stâng: a fost prima dovadă că funcțiile au un „loc” în creier." },
        { id: "autonomo", label: "Sistemul autonom", x: 85, y: 80, color: "#64748b", html: "Simpaticul și parasimpaticul reglează organele interne.", why: "Funcțiile vitale (bătăile inimii, digestia) trebuie să funcționeze mereu, chiar și când dormim sau ne gândim la altceva: de aceea sunt încredințate unui sistem care nu depinde de voință." }
      ],
      edges: [
        ["stimolo", "neurone", "activează"],
        ["neurone", "impulso", "produce"],
        ["impulso", "sinapsi", "ajunge la"],
        ["neurone", "snc", "formează"],
        ["neurone", "snp", "formează"],
        ["snp", "snc", "duce informații către"],
        ["snp", "riflessi", "cu măduva creează"],
        ["snc", "corteccia", "cuprinde"],
        ["snc", "autonomo", "comandă"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: reflexe și simțuri",
      questions: [
        { type: "order", q: "Pune în ordine arcul reflex.", items: ["Receptor", "Neuron senzitiv", "Măduva spinării (interneuron)", "Neuron motor", "Mușchi"], explain: "Semnalul merge de la receptor la măduvă și se întoarce la mușchi." },
        { type: "mc", q: "Care celule ale retinei văd culorile?", options: ["Bastonașele", "Conurile", "Celulele gliale"], answer: 1, explain: "Conurile văd culorile; bastonașele funcționează cu puțină lumină." },
        { type: "tf", q: "Parasimpaticul accelerează bătăile inimii în caz de pericol.", answer: false, explain: "O accelerează simpaticul; parasimpaticul o încetinește." }
      ]
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li><b>Neuronul</b> primește prin dendrite și transmite prin axon; comunică prin <b>sinapse</b> cu ajutorul neurotransmițătorilor.</li>
<li><b>SNC</b> = encefal + măduva spinării; <b>SNP</b> = nervi (12 perechi cranieni, 31 spinali).</li>
<li>Encefal: <b>creier</b> (4 lobi, 2 emisfere), <b>cerebel</b> (echilibru), <b>trunchi cerebral</b> (funcții vitale).</li>
<li><b>Reflex</b>: răspuns automat gestionat de măduva spinării.</li>
<li>Sistemul autonom: <b>simpatic</b> (activează) și <b>parasimpatic</b> (calmează).</li>
<li>Protejează-ți creierul: somn, cască, fără alcool și droguri.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Neuron", d: "Celulă nervoasă care primește și transmite impulsuri." },
    { t: "Axon", d: "Prelungire lungă a neuronului care transmite impulsul." },
    { t: "Dendrite", d: "Ramificații scurte ale neuronului care primesc semnalele." },
    { t: "Mielină", d: "Înveliș izolator care face impulsul mai rapid." },
    { t: "Sinapsă", d: "Zonă de comunicare între doi neuroni sau între neuron și mușchi." },
    { t: "Neurotransmițător", d: "Substanță chimică ce transmite semnalul în sinapsă." },
    { t: "Encefal", d: "Parte a SNC aflată în craniu: creier, cerebel, trunchi cerebral." },
    { t: "Reflex", d: "Răspuns automat și involuntar la un stimul." },
    { t: "Receptor", d: "Celulă sau structură care captează un stimul." },
    { t: "Meninge", d: "Trei membrane care învelesc encefalul și măduva spinării." },
    { t: "Retină", d: "Stratul intern al ochiului cu fotoreceptorii (conuri și bastonașe)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Sistemul nervos central este format din…", options: ["nervi cranieni și spinali", "encefal și măduva spinării", "creier și inimă"], answer: 1, explain: "SNC = encefal + măduva spinării." },
      { type: "mc", q: "La ce folosește teaca de mielină?", options: ["Să hrănească neuronul", "Să facă impulsul mai rapid", "Să producă hormoni"], answer: 1, explain: "Izolează axonul și face semnalul să „sară”." },
      { type: "text", q: "Cum se numesc substanțele chimice eliberate în sinapsă?", answer: ["neurotransmițători", "neurotransmițătorii", "neurotransmițător"], explain: "Neurotransmițătorii, precum dopamina și serotonina." },
      { type: "num", q: "Câte perechi de nervi spinali are corpul uman?", answer: 31, explain: "31 de perechi, care ies din măduva spinării printre vertebre." },
      { type: "mc", q: "Care lob prelucrează imaginile văzute de ochi?", options: ["Frontal", "Temporal", "Occipital", "Parietal"], answer: 2, explain: "Lobul occipital, în partea din spate." },
      { type: "tf", q: "În reflex semnalul trece mai întâi prin creier și apoi prin măduvă.", answer: false, explain: "Reflexul este gestionat de măduvă; creierul este informat după aceea." },
      { type: "mc", q: "Care parte a encefalului controlează respirația și bătăile inimii?", options: ["Trunchiul cerebral", "Corpul calos", "Lobul parietal"], answer: 0, explain: "Trunchiul cerebral controlează funcțiile vitale." },
      { type: "mc", q: "Unde se află cohleea?", options: ["În ochi", "În urechea internă", "În nas"], answer: 1, explain: "Cohleea, în formă de melc, se află în urechea internă." },
      { type: "tf", q: "Sistemul simpatic pregătește corpul pentru acțiune („luptă sau fugi”).", answer: true, explain: "Accelerează inima și respirația, dilată pupilele." },
      { type: "order", q: "Pune în ordine traseul semnalului într-un neuron.", items: ["Dendrite", "Corp celular", "Axon", "Terminații sinaptice"], explain: "Se intră prin dendrite, se iese prin terminații." },
      { type: "text", q: "Care om de știință italian a inventat „reacția neagră” pentru colorarea neuronilor?", answer: ["golgi", "camillo golgi"], explain: "Camillo Golgi, Nobel 1906." },
      { type: "num", q: "O riglă este prinsă în aproximativ 0,2 s. Dacă o bicicletă merge cu 5 m/s, câți metri parcurge în acest timp?", answer: 1, tol: 0.01, unit: "m", explain: "5 m/s × 0,2 s = 1 m." }
    ]
  }
});
