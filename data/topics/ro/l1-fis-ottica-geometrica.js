TOPIC('ro', {
  id: "l1-fis-ottica-geometrica",
  title: "Optica geometrică",
  intro: "De ce pare rupt un pai într-un pahar? Cum reușește un microscop să mărească o celulă și un ochelar să corecteze miopia? De ce aduc fibrele optice internetul în casele noastre? Pentru a răspunde nu e nevoie să știm ce este lumina în profunzime: este de ajuns să-i descriem drumul prin niște <b>linii drepte</b>, <b>razele de lumină</b>, și două legi foarte simple, <b>reflexia</b> și <b>refracția</b>. Aceasta este <b>optica geometrică</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Lumina și razele",
      html: `<p>O <b>sursă de lumină</b> emite lumină (Soarele, un bec, un ecran); un <b>corp iluminat</b> o trimite spre ochii noștri (Luna, o carte). Într-un <b>mediu omogen și transparent</b> (aer, apă, sticlă) lumina se propagă în <b>linie dreaptă</b>: aceasta este baza opticii geometrice. Drumul ei se reprezintă printr-o <b>rază de lumină</b>, o simplă linie orientată; un ansamblu de raze formează un <b>fascicul</b> (paralel, divergent sau convergent).</p>
<p>Lumina se propagă și în <b>vid</b> cu viteza</p>
<p style="text-align:center"><b>c = 299 792 458 m/s ≈ 3,00 × 10<sup>8</sup> m/s</b></p>
<p>Soarele se află la aproximativ 150 de milioane de km: lumina lui are nevoie de aproximativ 8 minute și 20 de secunde ca să ajungă pe Pământ. <b>Anul-lumină</b> este distanța parcursă de lumină într-un an (aproximativ 9,46 × 10<sup>12</sup> km).</p>
<p>Din propagarea rectilinie rezultă <b>umbrele</b>: în spatele unui obstacol opac iluminat de o sursă punctiformă există o zonă întunecată bine delimitată (<b>umbra</b>); dacă sursa este extinsă, apare și o zonă de <b>penumbră</b>, iluminată doar parțial. <b>Eclipsele</b> sunt umbre și penumbre astronomice: la eclipsa de Soare, Luna își proiectează umbra pe Pământ; la cea de Lună, Pământul este cel care întunecă Luna.</p>
<p>Un corp poate fi <b>transparent</b> (lasă lumina să treacă), <b>translucid</b> (o împrăștie) sau <b>opac</b> (o absoarbe sau o reflectă). Când o rază ajunge pe o suprafață care separă două medii, în general o parte este <b>reflectată</b>, o parte <b>refractată</b> și o parte <b>absorbită</b>.</p>`
    },
    {
      type: "example",
      title: "Exemplu: măsurarea înălțimii unui copac cu ajutorul umbrei",
      html: `<p>La ora 15, un par înalt de 1,5 m proiectează o umbră de 2 m; umbra copacului are 14 m. Razele Soarelui (foarte îndepărtat) sunt practic paralele, deci cele două triunghiuri formate de obiect, umbră și rază sunt asemenea:</p>
<ol>
<li>înălțimea copacului / umbra copacului = înălțimea parului / umbra parului</li>
<li>h / 14 = 1,5 / 2</li>
<li>h = 14 × 0,75 = <b>10,5 m</b></li>
</ol>
<p>Cu această metodă, bazată pe propagarea rectilinie, încă Thales (secolul al VI-lea î.Hr.), după tradiție, a măsurat înălțimea piramidelor.</p>`
    },
    {
      type: "text",
      title: "Reflexia și oglinzile plane",
      html: `<p>Când o rază lovește o suprafață netedă (o oglindă, apa liniștită, un metal lustruit) este trimisă înapoi: aceasta este <b>reflexia</b>. Unghiurile se măsoară față de <b>normală</b>, perpendiculara pe suprafață în punctul de incidență.</p>
<p><b>Legile reflexiei</b>:</p>
<ol>
<li>raza incidentă, raza reflectată și normala se află <b>în același plan</b>;</li>
<li><b>unghiul de reflexie este egal cu unghiul de incidență</b>: θ<sub>r</sub> = θ<sub>i</sub>.</li>
</ol>
<p>Dacă suprafața este netedă avem <b>reflexie regulată</b> (razele paralele rămân paralele); dacă este rugoasă, razele sunt trimise în toate direcțiile: <b>difuzie</b>. Datorită difuziei vedem obiectele din orice poziție, chiar dacă nu sunt oglinzi.</p>
<p><b>Oglinda plană.</b> Imaginea unui obiect este:</p>
<ul>
<li><b>virtuală</b> (în spatele oglinzii: razele nu trec cu adevărat pe acolo, dar par să vină de acolo);</li>
<li><b>dreaptă</b> și de <b>aceleași dimensiuni</b>;</li>
<li><b>simetrică</b> față de oglindă: imaginea se află în spatele oglinzii la aceeași distanță la care se află obiectul în fața ei. De aceea dreapta și stânga par inversate (mâna ta dreaptă devine mâna stângă a imaginii).</li>
</ul>
<p>Ca să te vezi întreg într-o oglindă plană, ajunge ca ea să aibă <b>jumătate</b> din înălțimea ta, iar marginea de jos să fie la jumătatea distanței dintre ochi și podea.</p>`
    },
    {
      type: "svg",
      title: "Reflexia și refracția",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="150" fill="#f0f9ff"/>
<rect y="150" width="600" height="150" fill="#bae6fd"/>
<line x1="0" y1="150" x2="600" y2="150" stroke="#0369a1" stroke-width="3"/>
<line x1="300" y1="20" x2="300" y2="280" stroke="#64748b" stroke-width="2" stroke-dasharray="8 6"/>
<text x="308" y="35" font-size="16" fill="#475569">normala</text>
<line x1="130" y1="50" x2="300" y2="150" stroke="#f59e0b" stroke-width="4"/>
<polygon points="300,150 284,130 274,142" fill="#f59e0b"/>
<line x1="300" y1="150" x2="470" y2="50" stroke="#ef4444" stroke-width="4"/>
<polygon points="470,50 450,52 460,66" fill="#ef4444"/>
<line x1="300" y1="150" x2="390" y2="270" stroke="#16a34a" stroke-width="4"/>
<polygon points="390,270 380,252 368,262" fill="#16a34a"/>
<text x="95" y="45" font-size="17" fill="#b45309" font-weight="bold">raza incidentă</text>
<text x="445" y="38" font-size="17" fill="#b91c1c" font-weight="bold">reflectată</text>
<text x="400" y="275" font-size="17" fill="#15803d" font-weight="bold">refractată</text>
<text x="215" y="120" font-size="17" fill="#1f2937" font-weight="bold">θi</text>
<text x="345" y="120" font-size="17" fill="#1f2937" font-weight="bold">θr = θi</text>
<text x="335" y="205" font-size="17" fill="#1f2937" font-weight="bold">θ2</text>
<text x="20" y="100" font-size="18" fill="#0c4a6e" font-weight="bold">aer (n1 = 1)</text>
<text x="20" y="190" font-size="18" fill="#0c4a6e" font-weight="bold">apă (n2 = 1,33)</text>
</svg>`,
      caption: "O rază care trece din aer în apă se împarte: o parte este reflectată cu θr = θi, o parte intră în apă apropiindu-se de normală (θ2 < θi)."
    },
    {
      type: "text",
      title: "Refracția și legea lui Snell",
      html: `<p>Când lumina trece dintr-un mediu în altul, <b>își schimbă viteza</b> și, dacă ajunge oblic, <b>își schimbă direcția</b>: aceasta este <b>refracția</b>. Fiecare mediu transparent este descris de <b>indicele său de refracție</b>:</p>
<p style="text-align:center"><b>n = c / v</b></p>
<p>unde v este viteza luminii în acel mediu (deci n ≥ 1 întotdeauna). Valori tipice: aer aproximativ 1,000; apă 1,33; sticlă obișnuită aproximativ 1,5; diamant 2,42.</p>
<p><b>Legea lui Snell</b> (sau Snell-Descartes), formulată de olandezul Willebrord Snell în jurul anului 1621 și făcută cunoscută de Descartes:</p>
<p style="text-align:center"><b>n<sub>1</sub> · sin θ<sub>1</sub> = n<sub>2</sub> · sin θ<sub>2</sub></b></p>
<p>cu unghiurile măsurate față de normală. Consecințe:</p>
<ul>
<li>la trecerea într-un mediu cu n <b>mai mare</b> (mai «dens optic», de ex. aer → apă) raza <b>se apropie de normală</b>;</li>
<li>la trecerea într-un mediu cu n <b>mai mic</b> (apă → aer) raza <b>se îndepărtează de normală</b>;</li>
<li>o rază perpendiculară pe suprafață (θ<sub>1</sub> = 0) nu se abate.</li>
</ul>
<p>Refracția explică de ce pare rupt paiul într-un pahar, de ce o piscină pare mai puțin adâncă decât este și de ce Soarele la apus pare turtit: atmosfera are un indice de refracție care crește spre jos și curbează razele.</p>`
    },
    {
      type: "example",
      title: "Exemplu: din aer în apă",
      html: `<p>O rază lovește suprafața unei piscine cu un unghi de incidență de 45°. Sub ce unghi continuă în apă (n = 1,33)?</p>
<ol>
<li>1,00 · sin 45° = 1,33 · sin θ<sub>2</sub></li>
<li>sin θ<sub>2</sub> = 0,7071 / 1,33 ≈ 0,532</li>
<li>θ<sub>2</sub> ≈ <b>32°</b></li>
</ol>
<p>Raza s-a apropiat de normală (de la 45° la 32°). De aceea un pește văzut de sus pare mai aproape de suprafață decât este în realitate, iar un pescar cu o undiță-ostie trebuie să țintească mai jos decât vede.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: reflexie și refracție",
      questions: [
        { type: "num", q: "O rază cade pe o oglindă cu un unghi de 35° față de normală. Cât este unghiul dintre raza incidentă și cea reflectată?", answer: 70, unit: "°", explain: "θr = θi = 35°, deci între cele două raze sunt 35° + 35° = 70°." },
        { type: "mc", q: "O rază trece din aer în sticlă (n = 1,5) cu incidență oblică. Raza refractată…", options: ["se îndepărtează de normală", "se apropie de normală", "nu își schimbă direcția"], answer: 1, explain: "La trecerea într-un mediu cu indice mai mare se apropie de normală: sin θ2 = sin θ1 / 1,5 < sin θ1." },
        { type: "num", q: "Într-un material lumina se deplasează cu 2,0 × 10^8 m/s. Cât este indicele de refracție (c = 3,0 × 10^8 m/s)?", answer: 1.5, tol: 0.01, explain: "n = c/v = 3,0 × 10^8 / 2,0 × 10^8 = 1,5." }
      ]
    },
    {
      type: "text",
      title: "Reflexia totală și fibrele optice",
      html: `<p>Când lumina trece dintr-un mediu cu n mai mare într-unul cu n mai mic (de exemplu din apă în aer), raza se îndepărtează de normală. Mărind unghiul de incidență se ajunge la un <b>unghi limită</b> θ<sub>L</sub> pentru care raza refractată «alunecă» de-a lungul suprafeței (θ<sub>2</sub> = 90°):</p>
<p style="text-align:center"><b>sin θ<sub>L</sub> = n<sub>2</sub> / n<sub>1</sub></b> (cu n<sub>2</sub> &lt; n<sub>1</sub>)</p>
<p>Peste acest unghi nu mai există rază refractată: toată lumina este reflectată. Aceasta este <b>reflexia totală</b>. Pentru apă-aer θ<sub>L</sub> = arcsin(1/1,33) ≈ 48,8°; pentru sticlă-aer (n = 1,5) ≈ 41,8°. Acesta este motivul reflexelor «argintii» pe care le vezi privind în sus suprafața apei de sub apă și al strălucirii diamantului (θ<sub>L</sub> ≈ 24,4°, foarte mic: lumina ricoșează în interiorul pietrei înainte să iasă).</p>
<p><b>Fibrele optice</b> sunt fire foarte subțiri de sticlă: lumina, intrând cu o înclinare mică, suferă reflexii totale continue pe pereți și călătorește chiar și sute de km urmând curbele. Transportă o mare parte din traficul de internet și sunt folosite în medicină (endoscoape).</p>`
    },
    {
      type: "text",
      title: "Oglinzile sferice",
      html: `<p>O <b>oglindă sferică</b> este o calotă de sferă de rază R. Are un <b>centru de curbură</b> C, un <b>vârf</b> V și o <b>axă optică</b> (dreapta CV). Pentru razele apropiate de axă (condiția lui Gauss), cele paralele cu axa se întâlnesc într-un punct, <b>focarul</b> F, aflat la distanța</p>
<p style="text-align:center"><b>f = R / 2</b></p>
<ul>
<li>Oglinda <b>concavă</b> (reflectă pe partea interioară, ca o lingură): <b>converge</b> razele, focar real; cu f &gt; 0. Se folosește la faruri, la antene parabolice, la telescoape cu reflexie și la oglinzile de machiaj;</li>
<li>Oglinda <b>convexă</b> (reflectă pe partea exterioară): <b>diverge</b> razele, focar virtual (f &lt; 0). Dă întotdeauna o imagine virtuală, dreaptă și micșorată, cu un câmp vizual larg: este oglinda retrovizoarelor și a parcărilor.</li>
</ul>
<p>Notând cu <b>p</b> distanța obiectului față de oglindă și cu <b>q</b> pe cea a imaginii, este valabilă <b>ecuația punctelor conjugate</b>:</p>
<p style="text-align:center"><b>1/p + 1/q = 1/f</b></p>
<p>și <b>mărirea</b> G = −q/p (G &lt; 0: imagine răsturnată; |G| &gt; 1: mărită). Pentru oglinda concavă, dacă obiectul este dincolo de centrul C, imaginea este reală, răsturnată și micșorată; între C și F reală, răsturnată și mărită; între F și V virtuală, dreaptă și mărită (ca oglinda de bărbierit).</p>`
    },
    {
      type: "example",
      title: "Exemplu: imaginea într-o oglindă concavă",
      html: `<p>O oglindă concavă are raza de curbură R = 40 cm. O lumânare se află la p = 60 cm de vârf. Unde se formează imaginea?</p>
<ol>
<li>Focarul: f = R/2 = 20 cm.</li>
<li>1/q = 1/f − 1/p = 1/20 − 1/60 = 3/60 − 1/60 = 2/60 = 1/30 → <b>q = 30 cm</b> (pozitiv: imagine reală, în fața oglinzii).</li>
<li>Mărirea: G = −q/p = −30/60 = <b>−0,5</b>: imagine răsturnată și de două ori mai mică.</li>
</ol>
<p>Dacă apropiem lumânarea la p = 10 cm (între F și V): 1/q = 1/20 − 1/10 = −1/20 → q = −20 cm (virtuală, în spatele oglinzii), G = −(−20)/10 = +2: dreaptă și dublă. Este ceea ce vezi în oglinda de machiaj.</p>`
    },
    {
      type: "text",
      title: "Lentilele subțiri",
      html: `<p>O <b>lentilă</b> este o bucată de material transparent (sticlă sau plastic) mărginită de suprafețe curbe; razele se abat de două ori prin refracție, la intrare și la ieșire. Pentru o <b>lentilă subțire</b> sunt valabile aceleași relații ca la oglinzi:</p>
<p style="text-align:center"><b>1/p + 1/q = 1/f &nbsp;&nbsp;&nbsp; G = −q/p</b></p>
<ul>
<li><b>Lentila convergentă</b> (mai groasă la mijloc, f &gt; 0): razele paralele cu axa converg în focar. Dacă obiectul este dincolo de focar, dă o imagine reală și răsturnată (ca aparatul foto, proiectorul, ochiul nostru); dacă este între lentilă și focar, dă o imagine virtuală, dreaptă și mărită: este <b>lupa</b>;</li>
<li><b>Lentila divergentă</b> (mai subțire la mijloc, f &lt; 0): razele se desfac; imaginea este întotdeauna virtuală, dreaptă și micșorată.</li>
</ul>
<p><b>Convergența</b> unei lentile se măsoară în <b>dioptrii</b> (D): C = 1/f cu f în metri. O lentilă cu f = 50 cm = 0,5 m are C = +2 D; una cu f = −25 cm are C = −4 D. Cu cât convergența este mai mare, cu atât lentila abate mai mult razele.</p>
<p><b>Ochiul și ochelarii.</b> În ochi, corneea și cristalinul formează pe retină o imagine reală și răsturnată (creierul o îndreaptă). În <b>miopie</b> imaginea unui obiect îndepărtat se formează <b>înaintea</b> retinei (ochi prea lung): se corectează cu o lentilă <b>divergentă</b> (dioptrii negative). În <b>hipermetropie</b> se formează <b>în spatele</b> retinei: se corectează cu o lentilă <b>convergentă</b> (dioptrii pozitive). Și prezbiopia, tipică după 45 de ani, se corectează cu lentile convergente.</p>`
    },
    {
      type: "widget",
      title: "Oglindă sau lentilă, convergentă sau divergentă?",
      widget: "classify",
      options: { groups: ["Converge razele", "Diverge razele"], items: [
        ["🪞 oglindă concavă", 0],
        ["🔍 lupă (lentilă convergentă)", 0],
        ["👓 lentilă pentru miopie", 1],
        ["🚗 oglindă retrovizoare (convexă)", 1],
        ["👓 lentilă pentru hipermetropie", 0],
        ["🔭 oglinda principală a unui telescop cu reflexie", 0],
        ["🪞 oglindă de supraveghere din magazine (convexă)", 1],
        ["📷 obiectivul unui aparat foto (ansamblu convergent)", 0]
      ] },
      caption: "Ține minte: concav și convergent fac să convergă razele (f > 0); convex și divergent le fac să divergă (f < 0)."
    },
    {
      type: "curiosity",
      title: "Alhazen și prima carte de optică",
      html: `<p>Optica, ca știință experimentală, se naște în lumea islamică. <b>Ibn al-Haytham</b> (latinizat Alhazen, aproximativ 965-1040), născut la Basra și activ la Cairo, a scris între 1011 și 1021 <i>Cartea de optică</i>. A demonstrat prin experimente, folosind camera obscură, că vedem pentru că lumina <b>intră</b> în ochi de la un obiect, și nu pentru că ochiul «emite» raze, cum credeau mulți filozofi greci. Metoda lui, făcută din ipoteze verificate prin experimente repetabile, este considerată un precursor al metodei științifice moderne. Tradusă în latină, cartea lui i-a influențat pe Roger Bacon, Kepler și Leonardo.</p>`
    },
    {
      type: "curiosity",
      title: "Miraje și Soarele «în avans»",
      html: `<p>Pe șosele, vara, vedem uneori «bălți de apă» care dispar când ne apropiem: este un <b>miraj</b>. Asfaltul încins încălzește aerul de la contact, care are un indice de refracție mai mic decât aerul de deasupra: razele de la cer se curbează în sus înainte să ajungă la ochii noștri și vedem o porțiune de cer «pe pământ», care pare apă. Și apusul este un efect de refracție: când Soarele pare să atingă tocmai orizontul, în realitate este deja sub el cu aproximativ jumătate de grad, iar imaginea lui este puțin turtită pentru că atmosfera curbează razele.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege refracția",
      intro: "De ce se îndoaie lumina când schimbă mediul? Trei imagini diferite, care duc la aceeași lege.",
      tabs: [
        {
          label: "🏖️ Salvamarul lui Fermat",
          html: `<p>Un salvamar trebuie să ajungă la un înotător din mare, pornind de pe plajă. Pe nisip aleargă repede, în apă înoată mai încet. Drumul cel mai rapid <b>nu este linia dreaptă</b>: merită să alergi puțin mai mult pe nisip și să înoți mai puțin în apă. Pierre de Fermat (1601-1665) a înțeles că lumina face la fel: între două puncte alege drumul care cere <b>timpul minim</b> (<b>principiul lui Fermat</b>). Din acest principiu se deduc atât reflexia, cât și legea lui Snell, și se explică de ce lumina se îndoaie spre normală când încetinește (intrând într-un mediu cu n mai mare).</p>`
        },
        {
          label: "🛒 Căruciorul pe iarbă",
          html: `<p>Un cărucior cu roțile alăturate ajunge oblic de pe asfaltul neted pe o pajiște cu iarbă. Roata care atinge prima iarba încetinește, în timp ce cealaltă continuă repede: căruciorul <b>se rotește</b> spre roata lentă și își schimbă direcția. La fel, un front de lumină care intră oblic într-un mediu mai lent se rotește. Această analogie este foarte asemănătoare cu cea folosită de Huygens și de susținătorii teoriei ondulatorii a luminii în secolul al XVII-lea.</p>`
        },
        {
          label: "✏️ Cum se trasează o rază în lentile",
          html: `<p>Pentru a construi imaginea unui obiect într-o lentilă convergentă ajung două raze «speciale» care pleacă din vârful săgeții:</p>
<ol>
<li>raza <b>paralelă</b> cu axa: după lentilă trece prin <b>focar</b>;</li>
<li>raza care trece prin <b>centrul</b> lentilei: nu se abate.</li>
</ol>
<p>Acolo unde se întâlnesc (sau prelungirile lor) se formează vârful imaginii.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<line x1="20" y1="150" x2="580" y2="150" stroke="#64748b" stroke-width="2"/>
<path d="M300 40 Q320 150 300 260 Q280 150 300 40 Z" fill="#bae6fd" stroke="#0369a1" stroke-width="3"/>
<circle cx="210" cy="150" r="5" fill="#111827"/><text x="203" y="178" font-size="16" fill="#111827" font-weight="bold">F</text>
<circle cx="390" cy="150" r="5" fill="#111827"/><text x="383" y="178" font-size="16" fill="#111827" font-weight="bold">F'</text>
<line x1="100" y1="150" x2="100" y2="100" stroke="#16a34a" stroke-width="5"/>
<polygon points="100,95 93,110 107,110" fill="#16a34a"/>
<text x="60" y="130" font-size="16" fill="#15803d" font-weight="bold">obiect</text>
<line x1="100" y1="100" x2="300" y2="100" stroke="#f59e0b" stroke-width="3"/>
<line x1="300" y1="100" x2="490" y2="205" stroke="#f59e0b" stroke-width="3"/>
<line x1="100" y1="100" x2="490" y2="198" stroke="#ef4444" stroke-width="3"/>
<line x1="490" y1="150" x2="490" y2="200" stroke="#dc2626" stroke-width="5"/>
<polygon points="490,205 483,190 497,190" fill="#dc2626"/>
<text x="500" y="232" font-size="16" fill="#b91c1c" font-weight="bold">imagine reală și răsturnată</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta opticii geometrice",
      nodes: [
        { id: "luce", label: "Raze de lumină", x: 50, y: 6, color: "#64748b", html: "Model: lumina se propagă în linie dreaptă într-un mediu omogen.", why: "Este un model aproximativ, valabil când obiectele sunt mult mai mari decât lungimea de undă a luminii (aproximativ o jumătate de miime de mm). Când nu este așa intervin difracția și interferența." },
        { id: "ombre", label: "Umbre și eclipse", x: 15, y: 25, color: "#94a3b8", html: "Zone neatinse de lumină în spatele unui obstacol.", why: "Sunt cea mai simplă dovadă a propagării rectilinii: încă vechii greci au măsurat cu umbre și geometrie dimensiuni ale Pământului (Eratostene) și distanțe astronomice." },
        { id: "riflessione", label: "Reflexia", x: 50, y: 28, color: "#ef4444", html: "θr = θi, razele în același plan.", why: "Decurge din principiul lui Fermat: drumul reflectat cel mai scurt este cel cu unghiuri egale. Euclid și Heron o cunoșteau deja." },
        { id: "rifrazione", label: "Refracția", x: 82, y: 28, color: "#16a34a", html: "n1 sin θ1 = n2 sin θ2.", why: "Lumina încetinește în mediile cu n mai mare (n = c/v). Snell (1621) și Descartes au formulat-o; Fermat a dedus-o din principiul timpului minim (1662)." },
        { id: "specchi", label: "Oglinzi", x: 28, y: 55, color: "#f59e0b", html: "Plane și sferice: 1/p + 1/q = 1/f.", why: "La oglinda sferică focarul se află la R/2 pentru că, pentru razele apropiate de axă, geometria cercului face ca razele reflectate să conveargă la jumătatea distanței dintre vârf și centru." },
        { id: "riftot", label: "Reflexia totală", x: 82, y: 55, color: "#0ea5e9", html: "Peste unghiul limită sin θL = n2/n1 nu mai există rază refractată.", why: "Este legea lui Snell dusă la limită: dacă sin θ2 ar trebui să depășească 1, nu există soluție și toată lumina este reflectată. Face posibile fibrele optice." },
        { id: "lenti", label: "Lentile", x: 62, y: 78, color: "#9333ea", html: "Convergente și divergente, convergența în dioptrii.", why: "O lentilă este o succesiune de două refracții pe suprafețe curbe; forma face ca razele îndepărtate de centru să se abată mai mult, astfel încât să conveargă într-un punct." },
        { id: "occhio", label: "Ochiul și instrumentele", x: 30, y: 92, color: "#22c55e", html: "Ochelari, microscop, telescop, aparat foto.", why: "Toate combină lentile sau oglinzi. Telescopul a fost perfecționat de Galilei în 1609; Kepler a înțeles în 1604 funcționarea optică a ochiului și cum se corectează defectele." }
      ],
      edges: [["luce", "ombre", "dovadă"], ["luce", "riflessione", "pe suprafețe"], ["luce", "rifrazione", "între medii"], ["riflessione", "specchi", "aplicație"], ["rifrazione", "riftot", "caz limită"], ["rifrazione", "lenti", "aplicație"], ["lenti", "occhio", "instrumente"], ["specchi", "occhio", "instrumente"]]
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li>Lumina se propagă în linie dreaptă; în vid c = 3,00 × 10<sup>8</sup> m/s.</li>
<li><b>Reflexia</b>: θ<sub>r</sub> = θ<sub>i</sub>. Oglinda plană dă o imagine virtuală, dreaptă, simetrică.</li>
<li><b>Refracția</b>: n = c/v; n<sub>1</sub> sin θ<sub>1</sub> = n<sub>2</sub> sin θ<sub>2</sub>. Spre n mai mare raza se apropie de normală.</li>
<li><b>Reflexie totală</b> dacă n<sub>1</sub> &gt; n<sub>2</sub> și θ &gt; θ<sub>L</sub>, cu sin θ<sub>L</sub> = n<sub>2</sub>/n<sub>1</sub>.</li>
<li>Oglinzi și lentile subțiri: <b>1/p + 1/q = 1/f</b>, G = −q/p; oglindă sferică f = R/2; convergența C = 1/f (dioptrii).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: oglinzi și lentile",
      questions: [
        { type: "num", q: "O lentilă convergentă are distanța focală de 10 cm. Un obiect se află la 30 cm. La ce distanță (în cm) se formează imaginea?", answer: 15, unit: "cm", explain: "1/q = 1/10 − 1/30 = 2/30, deci q = 15 cm." },
        { type: "num", q: "Câte dioptrii are o lentilă convergentă cu distanța focală de 25 cm?", answer: 4, unit: "D", explain: "C = 1/f = 1/0,25 m = 4 D." },
        { type: "mc", q: "Ce lentilă corectează miopia?", options: ["Convergentă", "Divergentă", "Plană"], answer: 1, explain: "În ochiul miop imaginea se formează înaintea retinei: este nevoie de o lentilă divergentă care să o mute mai în spate." },
        { type: "tf", q: "Oglinda convexă dă întotdeauna o imagine virtuală, dreaptă și micșorată.", answer: true, explain: "Pentru orice poziție a obiectului: de aceea se folosește la retrovizoare, cu un câmp vizual larg." }
      ]
    }
  ],
  glossary: [
    { t: "Rază de lumină", d: "Linie orientată care reprezintă drumul luminii." },
    { t: "Normală", d: "Dreapta perpendiculară pe o suprafață în punctul în care ajunge o rază." },
    { t: "Reflexie", d: "Întoarcerea luminii în același mediu după întâlnirea cu o suprafață: θr = θi." },
    { t: "Refracție", d: "Schimbarea direcției luminii când trece dintr-un mediu în altul." },
    { t: "Indice de refracție", d: "n = c/v: raportul dintre viteza luminii în vid și cea din mediu." },
    { t: "Unghi limită", d: "Unghiul de incidență peste care apare reflexia totală: sin θL = n2/n1." },
    { t: "Focar", d: "Punctul în care converg razele paralele cu axa după o oglindă sau o lentilă." },
    { t: "Distanță focală", d: "Distanța dintre focar și oglindă sau lentilă: f = R/2 la oglinzile sferice." },
    { t: "Imagine reală / virtuală", d: "Reală: formată de raze care se întâlnesc cu adevărat. Virtuală: formată de prelungirile razelor." },
    { t: "Dioptrie", d: "Unitatea de convergență a unei lentile: 1 D = 1 m⁻¹." },
    { t: "Fibră optică", d: "Fir de sticlă în care lumina călătorește prin reflexie totală." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care este ipoteza aflată la baza opticii geometrice?", options: ["Lumina se propagă în linie dreaptă într-un mediu omogen", "Lumina este făcută doar din unde", "Lumina se oprește pe oglinzi"], answer: 0, explain: "Modelul razelor rectilinii descrie foarte bine formarea umbrelor, a imaginilor în oglinzi și lentile." },
      { type: "num", q: "O rază cade pe o oglindă plană cu un unghi de 28° față de normală. Cât este unghiul de reflexie?", answer: 28, unit: "°", explain: "Conform legii reflexiei θr = θi = 28°." },
      { type: "num", q: "Într-un lichid lumina se deplasează cu 2,25 × 10^8 m/s. Calculează indicele de refracție (c = 3,0 × 10^8 m/s). Rotunjește la două zecimale.", answer: 1.33, tol: 0.01, explain: "n = c/v = 3,0/2,25 = 1,33: este apa." },
      { type: "tf", q: "La trecerea din apă în aer, o rază oblică se apropie de normală.", answer: false, explain: "La trecerea într-un mediu cu n mai mic (aer) raza se îndepărtează de normală." },
      { type: "num", q: "O rază trece din aer (n = 1) în sticlă (n = 1,5) cu incidența de 30°. Cât este sin θ2 (rotunjește la două zecimale)?", answer: 0.33, tol: 0.01, explain: "sin θ2 = sin 30° / 1,5 = 0,5/1,5 ≈ 0,33, adică θ2 ≈ 19,5°." },
      { type: "mc", q: "De ce transportă o fibră optică lumina fără să o piardă?", options: ["Pentru că este din metal", "Prin reflexie totală pe pereții interiori", "Pentru că lumina se oprește în sticlă"], answer: 1, explain: "În interiorul fibrei lumina cade pe pereți cu unghiuri mai mari decât unghiul limită: se reflectă total și merge mai departe." },
      { type: "num", q: "O oglindă concavă are raza de curbură de 60 cm. Care este distanța focală (în cm)?", answer: 30, unit: "cm", explain: "f = R/2 = 30 cm." },
      { type: "num", q: "O lentilă are f = 20 cm și un obiect este așezat la 60 cm. Calculează distanța imaginii (în cm).", answer: 30, unit: "cm", explain: "1/q = 1/20 − 1/60 = 2/60, deci q = 30 cm; G = −0,5." },
      { type: "tf", q: "O lupă este o lentilă convergentă cu obiectul între lentilă și focar.", answer: true, explain: "În acest caz imaginea este virtuală, dreaptă și mărită." },
      { type: "order", q: "Pune în ordine pașii pentru construirea grafică a imaginii într-o lentilă convergentă.", items: ["Desenarea axei optice, a lentilei și a focarelor", "Desenarea obiectului și a unei raze paralele cu axa", "Trecerea razei prin focar după lentilă", "Desenarea razei care trece prin centrul lentilei", "Găsirea intersecției: acolo se formează imaginea"], explain: "Ajung două raze speciale: unde se întâlnesc se află vârful imaginii." },
      { type: "text", q: "Cum se numește fenomenul prin care o rază, peste un anumit unghi, nu mai iese din mediu, ci este trimisă înapoi în întregime?", answer: ["reflexie totală", "reflexia totală", "reflexia internă totală", "reflexie internă totală"], explain: "Este reflexia totală, care apare peste unghiul limită." }
    ]
  }
});
