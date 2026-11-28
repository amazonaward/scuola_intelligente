TOPIC('ro', {
  id: "l1-geo-clima-ambienti",
  title: "Climate și medii ale Pământului",
  intro: "De ce se pot vedea ghețari la Quito, pe Ecuator? De ce este Oslo mai blând decât Anchorage, deși se află la aceeași latitudine? <b>Clima</b> depinde de câțiva factori care se combină în moduri mereu diferite și, la rândul ei, modelează <b>mediile naturale</b> (<b>biomurile</b>) în care trăiesc plante, animale și popoare. În plus, astăzi clima se <b>schimbă</b>: să înțelegem cum și de ce.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Vremea și clima",
      html: `<p><b>Vremea</b> este starea atmosferei într-un anumit loc și într-un anumit moment (azi plouă, sunt 12 °C). <b>Clima</b> este, în schimb, <b>ansamblul condițiilor medii</b> ale unui loc, calculate pe o perioadă lungă: Organizația Meteorologică Mondială (OMM) folosește prin convenție perioade de <b>cel puțin treizeci de ani</b> (perioada de referință actuală este 1991-2020). Clima se descrie prin mediile <b>temperaturii</b>, <b>precipitațiilor</b>, <b>umidității</b>, <b>presiunii</b> și <b>vânturilor</b>.</p>
<p>O frază ajută: <i>„clima este ce te aștepți, vremea este ce găsești”</i>. O zi friguroasă nu infirmă încălzirea globală, la fel cum o tuse nu infirmă sănătatea unei persoane.</p>
<p>Clima se studiază cu datele stațiilor meteorologice și se reprezintă cu o <b>climogramă</b> (sau diagramă termopluviometrică): <b>temperaturile medii lunare</b> sunt o linie, <b>precipitațiile lunare</b> sunt histograme (bare). Dintr-o climogramă se citesc imediat <b>amplitudinea termică anuală</b> (diferența dintre luna cea mai caldă și cea mai rece), totalul ploilor și prezența unui anotimp secetos.</p>`
    },
    {
      type: "text",
      title: "2. Factorii care determină clima",
      html: `<p>Clima unui loc depinde de <b>factori astronomici</b> și de <b>factori geografici</b>:</p>
<ul>
<li><b>Latitudinea</b> ☀️: razele Soarelui ajung aproape perpendicular lângă Ecuator (multă căldură concentrată) și foarte înclinat la poli (căldură împrăștiată pe o suprafață mai mare, și mai multă atmosferă de străbătut). De aceea temperatura medie scade de la Ecuator spre poli.</li>
<li><b>Altitudinea</b> ⛰️: în troposferă temperatura scade cu circa <b>6,5 °C la fiecare 1.000 m</b> (gradient termic vertical). La 3.000 m este cu circa 20 °C mai puțin decât la nivelul mării.</li>
<li><b>Distanța față de mare</b> 🌊: apa se încălzește și se răcește mai încet decât uscatul (căldură specifică mare). Aproape de mare temperaturile sunt moderate (climă <b>maritimă</b>, amplitudine termică mică); în interiorul continentelor este o climă <b>continentală</b> (veri calde, ierni reci).</li>
<li><b>Curenții marini</b> 🌀: transportă căldură. <b>Curentul Golfului</b> aduce apă caldă din Caraibe spre nord-vestul Europei: datorită lui Bergen (Norvegia, 60° N) are ierni mult mai blânde decât Labradorul, la aceeași latitudine. Curenții reci (precum cel Humboldt, de-a lungul Chile și Peru) răcesc coastele și favorizează deșerturi precum <b>Atacama</b>.</li>
<li><b>Vânturile și masele de aer</b> 💨: vânturile dominante aduc aer umed sau uscat, cald sau rece. <b>Alizeele</b> bat dinspre est spre Ecuator, <b>vânturile de vest</b> la latitudini medii; <b>musonii</b> își inversează direcția între vară și iarnă și aduc ploi torențiale în India și Asia de Sud-Est.</li>
<li><b>Relieful și expunerea</b> 🏔️: un lanț muntos oprește norii pe versantul expus vântului (<b>ploi orografice</b>) și lasă celălalt versant în „umbra pluviometrică”, uscat. <b>Cherrapunji</b>, pe pantele Himalayei indiene, este unul dintre cele mai ploioase locuri din lume (peste 11.000 mm pe an).</li>
<li><b>Acoperirea solului (albedoul)</b>: zăpada și gheața reflectă până la 80-90% din lumina solară, marea întunecată reflectă mai puțin de 10%.</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemplu practic: cât de frig este sus?",
      html: `<p>La Courmayeur, la circa <b>1.200 m</b>, la amiază sunt 14 °C. La aceeași oră, ce temperatură te aștepți să fie pe vârful Helbronner, la circa <b>3.460 m</b>?</p>
<p>Diferența de cotă: 3.460 − 1.200 = 2.260 m. Scădere: 2,26 × 6,5 ≈ <b>14,7 °C</b>. Temperatura prevăzută: 14 − 14,7 ≈ <b>−0,7 °C</b>, circa zero grade. Calculul este o estimare medie (aerul real poate varia cu umiditatea și stabilitatea), dar explică de ce pe vârfuri vara se poartă geacă chiar dacă în vale transpiri și de ce ghețarii și zăpada perenă se găsesc pe munți chiar și aproape de Ecuator (Kilimanjaro, la 3° S, are un ghețar pe vârf).</p>`
    },
    {
      type: "svg",
      title: "Climograma unui climat mediteranean",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<line x1="70" y1="240" x2="560" y2="240" stroke="#111827" stroke-width="2"/>
<line x1="70" y1="40" x2="70" y2="240" stroke="#111827" stroke-width="2"/>
<g fill="#60a5fa" stroke="#1e3a8a" stroke-width="1">
<rect x="82" y="165" width="26" height="75"/>
<rect x="123" y="170" width="26" height="70"/>
<rect x="164" y="175" width="26" height="65"/>
<rect x="205" y="180" width="26" height="60"/>
<rect x="246" y="205" width="26" height="35"/>
<rect x="287" y="222" width="26" height="18"/>
<rect x="328" y="230" width="26" height="10"/>
<rect x="369" y="226" width="26" height="14"/>
<rect x="410" y="198" width="26" height="42"/>
<rect x="451" y="150" width="26" height="90"/>
<rect x="492" y="142" width="26" height="98"/>
<rect x="533" y="165" width="26" height="75"/>
</g>
<polyline points="95,178 136,172 177,160 218,148 259,128 300,105 341,92 382,95 423,112 464,138 505,160 546,172" fill="none" stroke="#dc2626" stroke-width="4"/>
<text x="300" y="25" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Climat mediteranean (tip Roma): vară caldă și secetoasă, iarnă blândă și ploioasă</text>
<text x="95" y="262" font-size="14" text-anchor="middle" fill="#111827">I</text><text x="259" y="262" font-size="14" text-anchor="middle" fill="#111827">M</text><text x="341" y="262" font-size="14" text-anchor="middle" fill="#111827">I</text><text x="546" y="262" font-size="14" text-anchor="middle" fill="#111827">D</text>
<text x="76" y="285" font-size="14" fill="#dc2626" font-weight="bold">linia roșie = temperatura (max. vara)</text>
<text x="340" y="285" font-size="14" fill="#1e3a8a" font-weight="bold">barele albastre = ploi (min. vara)</text>
</svg>`,
      caption: "Vârful temperaturilor coincide cu minimul ploilor: este semnătura climatului mediteranean (anotimp secetos vara). Valori desenate cu scop ilustrativ."
    },
    {
      type: "quiz",
      title: "Mini-test: factorii climei",
      questions: [
        { type: "mc", q: "Cu cât scade în medie temperatura urcând 1.000 m în troposferă?", options: ["Circa 0,65 °C", "Circa 6,5 °C", "Circa 65 °C"], answer: 1, explain: "Gradientul termic vertical este de circa 6,5 °C la 1.000 m (0,65 °C la 100 m)." },
        { type: "tf", q: "O iarnă deosebit de friguroasă dovedește că clima nu se încălzește.", answer: false, explain: "Clima este media pe decenii; o singură iarnă este vreme și poate fi friguroasă chiar într-un climat care se încălzește." },
        { type: "mc", q: "Ce curent face nord-vestul Europei mai blând decât ar lăsa să se creadă latitudinea?", options: ["Curentul Humboldt", "Curentul Golfului", "Curentul Labrador"], answer: 1, explain: "Curentul Golfului aduce ape calde din Caraibe spre Atlanticul de Nord." }
      ]
    },
    {
      type: "text",
      title: "3. Clasificarea climatelor după Köppen",
      html: `<p>Climatele Pământului sunt foarte numeroase: pentru a le studia le clasificăm. Cea mai folosită clasificare, propusă de climatologul ruso-german <b>Wladimir Köppen</b> (1884, apoi revizuită împreună cu Rudolf Geiger până în anii '30), se bazează pe temperatură și precipitații și folosește cinci grupe indicate printr-o literă:</p>
<ul>
<li><b>A – Climate tropicale (calde și umede)</b>: toate lunile peste 18 °C. Cuprinde tropicalul umed (pădure ecuatorială, ploi tot anul) și tropicalul cu anotimp secetos (savană, musonic).</li>
<li><b>B – Climate aride</b>: evaporarea depășește precipitațiile. <b>Deșertic</b> (BW) și <b>de stepă</b> (BS). Nu depind doar de temperatură: există deșerturi reci, precum Gobi.</li>
<li><b>C – Climate temperate</b>: luna cea mai rece între −3 și 18 °C. Include <b>mediteraneanul</b> (vară secetoasă), <b>subtropicalul umed</b> și <b>oceanicul</b> (ploi distribuite, ierni blânde: Irlanda, Bretania, nord-vestul Pacific al SUA).</li>
<li><b>D – Climate continentale (reci)</b>: ierni lungi și aspre (luna cea mai rece sub −3 °C), veri calde sau răcoroase. Sunt răspândite în emisfera nordică (Rusia, Canada).</li>
<li><b>E – Climate polare</b>: nicio lună peste 10 °C; tundră și calote glaciare.</li>
</ul>
<p>În Italia clima este <b>mediteraneană</b> pe coaste, în Sud și în insule, <b>temperată subcontinentală</b> în Câmpia Padului (ierni reci și cu ceață, veri calde și înăbușitoare), <b>alpină</b> pe munți, cu temperatura care scade odată cu altitudinea.</p>`
    },
    {
      type: "svg",
      title: "Zonele climatice ale Pământului",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<rect x="40" y="30" width="520" height="30" fill="#e0f2fe" stroke="#0369a1" stroke-width="1"/>
<rect x="40" y="60" width="520" height="30" fill="#bbf7d0" stroke="#15803d" stroke-width="1"/>
<rect x="40" y="90" width="520" height="30" fill="#fde68a" stroke="#b45309" stroke-width="1"/>
<rect x="40" y="120" width="520" height="30" fill="#bbf7d0" stroke="#15803d" stroke-width="1"/>
<rect x="40" y="150" width="520" height="30" fill="#86efac" stroke="#15803d" stroke-width="1"/>
<rect x="40" y="180" width="520" height="30" fill="#fde68a" stroke="#b45309" stroke-width="1"/>
<rect x="40" y="210" width="520" height="30" fill="#bbf7d0" stroke="#15803d" stroke-width="1"/>
<rect x="40" y="240" width="520" height="30" fill="#e0f2fe" stroke="#0369a1" stroke-width="1"/>
<text x="300" y="50" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Polară (90°-66°N): tundră, gheață</text>
<text x="300" y="80" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Subpolară (66°-50°N): taiga</text>
<text x="300" y="110" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Temperată (50°-35°N): păduri, mediteraneană</text>
<text x="300" y="140" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Subtropicală/deșertică (35°-23°N)</text>
<text x="300" y="170" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Ecuatorială: pădure ecuatorială</text>
<text x="300" y="200" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Subtropicală/deșertică (23°-35°S)</text>
<text x="300" y="230" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Temperată australă</text>
<text x="300" y="260" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Polară australă: Antarctica</text>
<text x="30" y="150" font-size="14" text-anchor="end" fill="#111827">N</text>
<text x="30" y="215" font-size="14" text-anchor="end" fill="#111827">S</text>
</svg>`,
      caption: "Schemă simplificată a marilor grupe de climate pe fâșii de latitudine: între Ecuator și poli succesiunea este, în linii mari, cea a fâșiilor. Abaterile (mări, reliefuri, curenți) fac harta reală mult mai complexă."
    },
    {
      type: "text",
      title: "4. Biomurile: mediile naturale",
      html: `<p>Un <b>bioma</b> este un mare ansamblu de ecosisteme cu vegetație și faună asemănătoare, determinat mai ales de <b>temperatură și precipitații</b>. Cele principale:</p>
<ul>
<li>🌴 <b>Pădurea ecuatorială</b> (Amazonia, Congo, Indonezia): mereu caldă și ploioasă, cea mai mare <b>biodiversitate</b> a planetei; soluri sărace în ciuda vegetației bogate, pentru că nutrienții se află în biomasă și nu în sol.</li>
<li>🦁 <b>Savana</b> (Africa de Est, Brazilia centrală, nordul Australiei): iarbă înaltă și copaci răzleți, anotimp secetos și anotimp al ploilor; mari turme de ierbivore.</li>
<li>🏜️ <b>Deșertul</b> (Sahara, Arabia, Atacama, Gobi, Australia): mai puțin de 250 mm de ploaie pe an, amplitudini termice mari între zi și noapte; plante suculente, animale nocturne.</li>
<li>🌾 <b>Stepa și prerie</b> (Eurasia centrală, Marile Câmpii, pampasul argentinian): iarbă, puțini copaci, soluri foarte fertile (<i>cernoziomurile</i> ucrainene și rusești), astăzi în mare parte cultivate cu cereale.</li>
<li>🌿 <b>Maquis-ul mediteranean</b> (coastele Mediteranei, California, Chile central, Africa de Sud, sud-vestul Australiei): arbuști veșnic verzi cu frunze coriacee (stejar vesnic verde, mirt, mastic) adaptați la seceta de vară și la incendii.</li>
<li>🍂 <b>Pădurea temperată</b> (Europa, estul Americii de Nord, Asia de Est): arbori cu frunze căzătoare (stejari, fagi), cu patru anotimpuri.</li>
<li>🌲 <b>Taiga</b> (Canada, Scandinavia, Siberia): pădure de conifere, cea mai întinsă din lume; ierni lungi și foarte friguroase.</li>
<li>❄️ <b>Tundra</b>: mușchi și licheni; <b>permafrost</b> (sol înghețat în adâncime) care împiedică creșterea copacilor.</li>
<li>🏔️ <b>Mediile de mare altitudine</b>: vegetația se schimbă cu altitudinea în <b>etaje altitudinale</b> (foioase, conifere, pășuni, stânci și gheață), așa cum s-ar schimba călătorind spre pol.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Activitate: fiecărui mediu clima lui",
      widget: "classify",
      options: {
        groups: ["Cald și umed tot anul", "Arid", "Rece"],
        items: [
          ["🌴 Pădure ecuatorială", 0],
          ["🏜️ Sahara", 1],
          ["❄️ Tundra", 2],
          ["🌲 Taiga", 2],
          ["🐪 Gobi", 1],
          ["🌊 Bazinul Congo", 0],
          ["🧊 Antarctica", 2],
          ["🏜️ Atacama", 1]
        ]
      },
      caption: "Trage sau selectează fiecare mediu în categoria climatică potrivită."
    },
    {
      type: "curiosity",
      title: "Știai că… există un deșert rece și un deșert de gheață?",
      html: `<p><b>Antarctica</b> este cel mai mare deșert din lume: cad mai puțin de 200 mm de precipitații pe an (în medie, mult mai puțin în interior). Un deșert nu este definit de căldură, ci de <b>lipsa ploii</b>. Antarctica este și continentul cel mai rece: în 1983, la stația rusă Vostok, s-au măsurat <b>−89,2 °C</b>, minimul oficial de pe Pământ. Recordul de căldură (54,4 °C) a fost înregistrat în Death Valley, în California (în 2020 și 2021).</p>`
    },
    {
      type: "curiosity",
      title: "Știai că… în Atacama poate să nu plouă ani la rând?",
      html: `<p><b>Deșertul Atacama</b> (Chile) este cel mai arid loc nepolar din lume: în unele zone interioare ploile lipsesc aproape ani întregi. Motivul este dublu: <b>Cordiliera Anzilor</b> oprește norii care vin din Amazonia, iar <b>curentul rece Humboldt</b> răcește aerul de deasupra Pacificului, împiedicând formarea ploilor. NASA folosește Atacama pentru a testa instrumente destinate planetei Marte.</p>`
    },
    {
      type: "text",
      title: "5. Schimbarea climatică",
      html: `<p><b>Clima s-a schimbat întotdeauna</b>: erele glaciare și interglaciare s-au succedat din cauze naturale (variații ale orbitei terestre, așa-numitele <b>cicluri Milanković</b>, activitatea solară, erupții vulcanice). Dar de aproximativ două secole schimbarea este <b>prea rapidă</b> pentru a fi explicată doar prin cauze naturale: comunitatea științifică, reunită în <b>IPCC</b> (Grupul interguvernamental privind schimbările climatice, creat în 1988 de ONU și OMM), concluzionează că răspunderea revine <b>activităților umane</b>.</p>
<p>Mecanismul este <b>efectul de seră</b>: unele gaze din atmosferă (<b>vaporii de apă</b>, <b>dioxidul de carbon CO₂</b>, <b>metanul CH₄</b>, protoxidul de azot N₂O) lasă să treacă lumina Soarelui, dar rețin o parte din căldura pe care Pământul o emite sub formă de infraroșii. Efectul de seră <b>natural</b> este indispensabil: fără el temperatura medie a Pământului ar fi de circa <b>−18 °C</b> în loc de circa +15 °C. Problema este efectul de seră <b>amplificat</b> de emisiile umane.</p>
<ul>
<li>Arderea <b>cărbunelui, petrolului și gazelor</b> (combustibili fosili) eliberează CO₂ acumulat în milioane de ani.</li>
<li><b>Defrișările</b> reduc numărul copacilor care absorb CO₂.</li>
<li><b>Creșterea animalelor</b> și orezăriile produc metan, un gaz cu efect de seră mult mai puternic decât CO₂ (dar care rămâne mai puțin timp în atmosferă).</li>
</ul>
<p><b>Datele</b>: concentrația de CO₂ a crescut de la circa <b>280 ppm</b> (părți pe milion) înainte de Revoluția industrială la peste <b>420 ppm</b> astăzi, cel mai înalt nivel din ultimii cel puțin 800.000 de ani (se știe din gazele prinse în bulele de aer din gheața antarctică, <i>carotele de gheață</i>). Temperatura medie globală a crescut cu circa <b>1,1-1,2 °C</b> față de perioada 1850-1900; ultimii ani sunt cei mai calzi măsurați vreodată. Nivelul mediu al mărilor a crescut cu circa <b>20 cm</b> din 1900 (prin dilatarea termică a apei și topirea gheților).</p>`
    },
    {
      type: "svg",
      title: "Cum funcționează efectul de seră",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eff6ff"/>
<rect x="0" y="40" width="600" height="60" fill="#bfdbfe" opacity="0.7"/>
<text x="300" y="75" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Gaze cu efect de seră (CO₂, CH₄, vapori de apă)</text>
<circle cx="70" cy="40" r="26" fill="#fbbf24" stroke="#b45309" stroke-width="2"/>
<line x1="90" y1="55" x2="200" y2="260" stroke="#f59e0b" stroke-width="5"/>
<polygon points="200,260 188,238 210,243" fill="#f59e0b"/>
<rect x="0" y="260" width="600" height="40" fill="#86efac"/>
<line x1="260" y1="255" x2="260" y2="120" stroke="#dc2626" stroke-width="4"/>
<polygon points="260,110 250,130 270,130" fill="#dc2626"/>
<path d="M260 118 C285 95 330 95 345 118" fill="none" stroke="#dc2626" stroke-width="4"/>
<polygon points="345,125 337,106 355,108" fill="#dc2626"/>
<line x1="420" y1="255" x2="420" y2="10" stroke="#dc2626" stroke-width="4" stroke-dasharray="8 6"/>
<polygon points="420,4 410,24 430,24" fill="#dc2626"/>
<text x="215" y="170" font-size="14" fill="#92400e" font-weight="bold">lumina solară</text>
<text x="430" y="150" font-size="14" fill="#991b1b" font-weight="bold">căldura (infraroșu)</text>
<text x="430" y="170" font-size="14" fill="#991b1b" font-weight="bold">care iese în spațiu</text>
<text x="275" y="205" font-size="14" fill="#991b1b" font-weight="bold">căldură reținută</text>
<text x="300" y="285" font-size="15" text-anchor="middle" fill="#14532d" font-weight="bold">Suprafața Pământului</text>
</svg>`,
      caption: "O parte din căldura emisă de Pământ scapă în spațiu, o parte este absorbită de gazele cu efect de seră și trimisă înapoi în jos. Cu cât sunt mai multe gaze cu efect de seră, cu atât rămâne mai multă căldură."
    },
    {
      type: "example",
      title: "Exemplu practic: consecințele în Mediterana și în Italia",
      html: `<p>Bazinul Mediteranei este considerat un <b>„hot spot”</b> climatic: se încălzește mai mult decât media mondială. În Italia se observă deja:</p>
<ul>
<li><b>valuri de căldură</b> mai frecvente și mai lungi (vara lui 2003 și cea din 2022 se numără printre cele mai calde);</li>
<li><b>secetă</b> și reducerea ghețarilor alpini: Marmolada și-a pierdut o mare parte din ghețar, iar în iulie 2022 o desprindere a provocat o tragedie;</li>
<li><b>ploi intense</b> concentrate într-un timp scurt, cu inundații (Emilia-Romagna, mai 2023);</li>
<li><b>creșterea nivelului mării</b> și riscuri pentru coastele joase, precum laguna Veneției și delta Padului;</li>
<li>schimbări pentru agricultură (culesuri de struguri mai devreme, boli noi ale plantelor) și pentru sănătate.</li>
</ul>
<p>Nu trebuie confundată <b>adaptarea</b> (a te pregăti: diguri, culturi noi, planuri anticaniculă) cu <b>atenuarea</b> (reducerea emisiilor pentru a încetini fenomenul): sunt necesare amândouă.</p>`
    },
    {
      type: "decision",
      title: "Ce este de făcut? O alegere pentru un oraș de coastă",
      html: `<p>Ești primarul unui oraș de coastă expus unor furtuni marine tot mai puternice. Ai un buget limitat și două priorități: <b>protejarea coastei</b> și <b>reducerea emisiilor</b> orașului.</p>`,
      question: "Ce strategie ți se pare mai eficace pe termen lung?",
      options: [
        { label: "Doar diguri și bariere", outcome: "Protejează pe termen scurt, dar nu oprește cauzele și poate costa foarte mult; barierele rigide uneori dăunează plajelor vecine." },
        { label: "Doar reducerea emisiilor locale", outcome: "Util, dar un singur oraș nu poate opri schimbarea: nivelul mării crește oricum deja din cauza emisiilor din trecut." },
        { label: "Ambele: adaptare și atenuare", outcome: "Este abordarea indicată de IPCC: adaptarea la schimbările inevitabile și, în același timp, reducerea emisiilor pentru a evita cele mai grave scenarii." }
      ],
      answer: 2,
      explain: "Acordul de la Paris (2015) prevede menținerea creșterii temperaturii „cu mult sub” 2 °C față de epoca preindustrială și continuarea eforturilor pentru limitarea ei la 1,5 °C: atenuarea și adaptarea merg împreună."
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege clima și schimbarea climatică",
      intro: "Clima este un sistem complex: iată trei analogii pentru a-i înțelege mecanismele.",
      tabs: [
        {
          label: "🚗 Mașina la soare",
          html: `<p>Lasă o mașină la soare cu geamurile închise: înăuntru este mult mai cald decât afară. Lumina intră prin sticlă și încălzește interiorul; acesta emite infraroșii, pe care sticla le <b>reține</b>. Gazele cu efect de seră fac același lucru cu atmosfera: sunt geamul mașinii (chiar dacă atmosfera nu este o seră cu pereți închiși, iar mecanismul fizic este puțin diferit, analogia redă ideea). A adăuga CO₂ este ca și cum ai pune un geam mai gros.</p>`
        },
        {
          label: "🛁 Cada de baie",
          html: `<p>Carbonul este ca apa dintr-o cadă: robinetele sunt emisiile, scurgerea este absorbția realizată de păduri și oceane. Astăzi robinetele toarnă mai mult decât reușește să elimine scurgerea, așa că <b>nivelul crește</b>. Dacă reduci emisiile la jumătate, cada continuă să se umple, doar mai încet: pentru a o opri sunt necesare emisii nete zero (ca în Europa, care vizează neutralitatea climatică până în <b>2050</b>).</p>`
        },
        {
          label: "🧊 Carotele de gheață",
          html: `<p>Oamenii de știință forează gheața din Antarctica și Groenlanda și extrag cilindri de gheață din adâncimi de peste 3 km. Gheața se formează strat peste strat, ca inelele unui copac, și prinde bule de aer străvechi: măsurând CO₂ și izotopii oxigenului se reconstituie <b>temperatura și atmosfera de acum sute de mii de ani</b>. Carota de la Vostok și cea a proiectului EPICA (Dome C) arată că CO₂ și temperatura au mers întotdeauna împreună.</p>`,
          svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="200" fill="#f0f9ff"/><rect x="40" y="20" width="60" height="160" fill="#e0f2fe" stroke="#0369a1" stroke-width="3"/><line x1="40" y1="60" x2="100" y2="60" stroke="#0369a1" stroke-width="2"/><line x1="40" y1="100" x2="100" y2="100" stroke="#0369a1" stroke-width="2"/><line x1="40" y1="140" x2="100" y2="140" stroke="#0369a1" stroke-width="2"/><text x="120" y="45" font-size="15" fill="#111827">straturi recente (CO₂ mare)</text><text x="120" y="125" font-size="15" fill="#111827">straturi vechi (CO₂ mai mic)</text><text x="120" y="175" font-size="15" fill="#111827">până la 800.000 de ani în urmă</text></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Hartă: de ce se schimbă clima de la un loc la altul și în timp",
      nodes: [
        { id: "sole", label: "Energia Soarelui", x: 50, y: 6, color: "#f59e0b", html: "Motorul climei: încălzește Pământul inegal.", why: "Pământul este sferic și înclinat cu circa 23,4° pe axă: razele ajung mai mult sau mai puțin înclinate, iar anotimpurile derivă din înclinare, nu din distanța față de Soare (în ianuarie Pământul este mai aproape de Soare, dar în emisfera nordică este iarnă)." },
        { id: "lat", label: "Latitudine și altitudine", x: 18, y: 32, color: "#2563eb", html: "Mai departe de Ecuator și mai sus = mai frig.", why: "La poli razele sunt oblice și străbat mai multă atmosferă; la altitudine aerul este mai rarefiat și reține mai puțină căldură. Gradientul de 6,5 °C/km se obține din măsurători cu baloane-sondă." },
        { id: "mare", label: "Mări și curenți", x: 82, y: 32, color: "#0ea5e9", html: "Moderează temperaturile și transportă căldură.", why: "Apa are o căldură specifică de circa patru ori mai mare decât aerul uscat: este nevoie de multă energie pentru a o încălzi sau răci. Curenții se nasc din vânturi, rotația Pământului și diferențe de temperatură și salinitate (circulația termohalină)." },
        { id: "clima", label: "Clima și Köppen", x: 50, y: 52, color: "#16a34a", html: "Cinci grupe: A, B, C, D, E.", why: "Köppen a observat că vegetația reflectă clima și a folosit limitele dintre biomuri drept ghid pentru a defini limitele dintre climate: clasificarea pornește de la plante." },
        { id: "bioma", label: "Biomuri", x: 18, y: 76, color: "#84cc16", html: "Păduri, savane, deșerturi, stepe, tundră…", why: "Fiecare plantă are un interval de temperatură și apă în care supraviețuiește; biomul este răspunsul evolutiv al vegetației și animalelor la condițiile climatice din acea zonă." },
        { id: "serra", label: "Efectul de seră", x: 82, y: 76, color: "#ef4444", html: "Gazele cu efect de seră rețin o parte din căldură.", why: "A fost intuit de Joseph Fourier (1824), demonstrat în laborator de John Tyndall (1859) și calculat de Svante Arrhenius (1896), care a estimat efectul unei dublări a CO₂ asupra temperaturii." },
        { id: "cc", label: "Schimbarea climatică", x: 50, y: 94, color: "#dc2626", html: "Încălzire rapidă datorată emisiilor umane.", why: "Măsurătorile de CO₂ pe vulcanul Mauna Loa (Hawaii), începute de Charles Keeling în 1958, arată creșterea continuă a CO₂ („curba Keeling”); IPCC rezumă dovezile în rapoartele sale din 1990." }
      ],
      edges: [
        ["sole", "lat", "depinde de"],
        ["sole", "mare", "încălzește"],
        ["lat", "clima", "determină"],
        ["mare", "clima", "determină"],
        ["clima", "bioma", "modelează"],
        ["sole", "serra", "reținut de"],
        ["serra", "cc", "amplificat → "],
        ["cc", "clima", "modifică"]
      ]
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li><b>Vremea</b> = starea momentană a atmosferei; <b>clima</b> = medii pe mulți ani.</li>
<li>Factori: latitudine, altitudine (−6,5 °C/1.000 m), distanța față de mare, curenți, vânturi, relief.</li>
<li>Köppen: A tropical, B arid, C temperat, D continental, E polar.</li>
<li>Biomuri: pădure ecuatorială, savană, deșert, stepă, maquis mediteranean, pădure temperată, taiga, tundră.</li>
<li><b>Efectul de seră</b> natural (+15 °C în loc de −18 °C) și <b>efectul de seră amplificat</b> de emisiile umane (CO₂ de la ~280 la peste 420 ppm; +1,1-1,2 °C).</li>
<li>Răspunsuri: <b>atenuare</b> și <b>adaptare</b>; Acordul de la Paris 2015.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: biomuri și schimbare climatică",
      questions: [
        { type: "mc", q: "Ce bioma are solul înghețat în adâncime (permafrost)?", options: ["Savana", "Tundra", "Maquis-ul mediteranean"], answer: 1, explain: "Tundra are permafrost, care împiedică arborii să prindă rădăcini adânci." },
        { type: "tf", q: "Fără efectul de seră natural Pământul ar fi mai cald.", answer: false, explain: "Fără gazele naturale cu efect de seră temperatura medie ar fi în jur de −18 °C: efectul de seră natural este esențial pentru viață." },
        { type: "mc", q: "Reducerea emisiilor de gaze cu efect de seră pentru a încetini încălzirea se numește…", options: ["Adaptare", "Atenuare", "Compensare"], answer: 1, explain: "Atenuare = reducerea cauzelor; adaptare = reducerea daunelor efectelor deja în curs." }
      ]
    }
  ],
  glossary: [
    { t: "Clima", d: "Ansamblul condițiilor atmosferice medii ale unui loc, evaluate pe o perioadă lungă (cel puțin 30 de ani)." },
    { t: "Vremea", d: "Starea atmosferei într-un loc și într-un moment precis." },
    { t: "Climogramă", d: "Grafic ce redă temperaturile medii lunare (linie) și precipitațiile (bare) ale unui loc." },
    { t: "Amplitudine termică", d: "Diferența dintre temperatura maximă și cea minimă (zilnică sau anuală)." },
    { t: "Bioma", d: "Mare ansamblu de ecosisteme cu vegetație și faună asemănătoare, datorat unei anumite clime." },
    { t: "Permafrost", d: "Teren care rămâne înghețat tot anul, tipic pentru tundră și taigaua nordică." },
    { t: "Efect de seră", d: "Fenomen prin care unele gaze atmosferice rețin o parte din căldura emisă de Pământ." },
    { t: "IPCC", d: "Grupul interguvernamental privind schimbările climatice: adună și sintetizează cercetările științifice despre climă." },
    { t: "Atenuare", d: "Ansamblu de acțiuni pentru reducerea emisiilor de gaze cu efect de seră și încetinirea schimbării climatice." },
    { t: "Adaptare", d: "Ansamblu de acțiuni pentru reducerea daunelor efectelor schimbării climatice deja în curs." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care este diferența dintre vreme și climă?", options: ["Niciuna, sunt sinonime", "Vremea este starea momentană, clima este media pe mulți ani", "Clima se schimbă în fiecare zi, vremea în fiecare an"], answer: 1, explain: "Clima descrie condițiile medii ale unui loc pe o perioadă lungă; vremea este ceea ce se întâmplă într-un moment precis." },
      { type: "num", q: "Într-o localitate la nivelul mării sunt 24 °C. Câți °C te aștepți la 2.000 m altitudine (cu gradient de 6,5 °C/km)?", answer: 11, tol: 0.5, unit: "°C", explain: "Scădere: 2 × 6,5 = 13 °C. Temperatura: 24 − 13 = 11 °C." },
      { type: "mc", q: "De ce are Bergen (Norvegia) ierni mai blânde decât locurile canadiene aflate la aceeași latitudine?", options: ["Din cauza Curentului Golfului", "Din cauza altitudinii mai mari", "Din cauza musonilor"], answer: 0, explain: "Curentul Golfului transportă ape calde în Atlanticul de Nord, moderând clima norvegiană." },
      { type: "mc", q: "Clima mediteraneană se distinge prin…", options: ["vară secetoasă și iarnă blândă și ploioasă", "ploi tot anul și veri răcoroase", "ierni foarte aspre"], answer: 0, explain: "Veri calde și uscate, ierni blânde și umede: este clima coastelor Mediteranei." },
      { type: "text", q: "Cum se numește marele bioma de pădure de conifere din emisfera nordică (Canada, Scandinavia, Siberia)?", answer: ["taiga", "taigaua", "taigă"], explain: "Taigaua este cea mai mare pădure din lume, de conifere." },
      { type: "tf", q: "Efectele schimbării climatice privesc doar regiunile polare.", answer: false, explain: "Există efecte pretutindeni: valuri de căldură, secetă, inundații, creșterea nivelului mărilor, ghețari alpini în retragere." },
      { type: "order", q: "Pune în ordine de la cea mai mică la cea mai mare concentrație de CO₂ din atmosferă.", items: ["Epoca preindustrială (~280 ppm)", "Anii '50 (~315 ppm)", "Anii 2000 (~370 ppm)", "Astăzi (peste 420 ppm)"], explain: "CO₂ a crescut continuu de la Revoluția industrială; curba Keeling o arată din 1958." },
      { type: "mc", q: "Ce grupă Köppen cuprinde climatele fără nicio lună peste 10 °C?", options: ["A", "C", "E"], answer: 2, explain: "Grupa E este cea a climatelor polare: tundră și gheață." },
      { type: "num", q: "Care era temperatura medie a Pământului fără efectul de seră natural (în °C)?", answer: -18, tol: 1, unit: "°C", explain: "Circa −18 °C, față de +15 °C actuali: efectul de seră natural valorează circa 33 °C." },
      { type: "mc", q: "Care dintre aceste acțiuni este de adaptare (și nu de atenuare)?", options: ["Construirea de bariere împotriva furtunilor marine", "Trecerea la energia solară", "Plantarea de păduri pentru absorbția CO₂"], answer: 0, explain: "Barierele reduc daunele unui efect deja în curs; celelalte două acțiuni reduc CO₂ și deci atenuează." }
    ]
  }
});
