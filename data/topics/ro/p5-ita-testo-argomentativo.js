TOPIC('ro', {
  id: "p5-ita-testo-argomentativo",
  title: "Textul argumentativ",
  intro: "Vrei să-ți convingi părinții să adopte un câine? Sau clasa să aleagă o excursie? Atunci ai nevoie de un <b>text argumentativ</b>: un text care susține o opinie (<b>teza</b>) cu <b>argumente</b> și <b>dovezi</b>, răspunde obiecțiilor și ajunge la o <b>concluzie</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "La ce folosește",
      html: `<p><b>Textul argumentativ</b> (<i>testo argomentativo</i>) folosește la <b>exprimarea unei opinii</b> despre o temă disputată și la <b>convingerea</b> cititorului că ea este corectă, folosind <b>raționamente</b> și <b>dovezi</b>, nu țipete sau toane!</p>
<p>Îl găsești în: articole de opinie din ziare, scrisori către primar, discursuri în adunări, recenzii, reclame (care însă folosesc adesea mai mult emoțiile decât dovezile), dezbateri în clasă.</p>
<p>Pornește mereu de la o <b>problemă</b> despre care oamenii au păreri diferite: «Este corect să dăm teme pentru vacanță?», «Mai bine la oraș sau la țară?».</p>`
    },
    {
      type: "text",
      title: "Structura: 5 cărămizi",
      html: `<ol>
<li><b>Introducere / problema</b>: prezinți subiectul și întrebarea. «Da anni si discute se…» (De ani de zile se discută dacă…)</li>
<li><b>Teza</b>: <b>opinia ta</b>, spusă clar. «Secondo me…» (După mine…), «Sono convinto che…» (Sunt convins că…)</li>
<li><b>Argumente în favoarea tezei</b>: <b>motivele</b> tezei, fiecare susținut de <b>dovezi</b> (date, exemple, experiențe, cuvintele unor experți).</li>
<li><b>Antiteza și combaterea</b>: prezinți opinia <b>contrară</b> («Qualcuno pensa che…», Cineva crede că…) și explici de ce nu este convingătoare («Tuttavia…», Totuși…). Așa arăți că te-ai gândit la toate!</li>
<li><b>Concluzia</b>: reiei teza pe scurt, poate cu o propunere. «Per questi motivi…» (Din aceste motive…), «In conclusione…» (În concluzie…)</li>
</ol>`
    },
    {
      type: "svg",
      title: "Podul tezei",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#eff6ff"/>
<rect x="60" y="40" width="520" height="56" rx="10" fill="#2563eb"/>
<text x="320" y="65" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">TEZA</text>
<text x="320" y="87" font-size="15" text-anchor="middle" fill="#ffffff">«Școala ar trebui să aibă o grădină de legume»</text>
<rect x="80" y="96" width="110" height="140" fill="#16a34a"/>
<rect x="265" y="96" width="110" height="140" fill="#16a34a"/>
<rect x="450" y="96" width="110" height="140" fill="#16a34a"/>
<text x="135" y="130" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">Argument 1</text>
<text x="135" y="160" font-size="14" text-anchor="middle" fill="#ffffff">se învață</text>
<text x="135" y="178" font-size="14" text-anchor="middle" fill="#ffffff">științele</text>
<text x="320" y="130" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">Argument 2</text>
<text x="320" y="160" font-size="14" text-anchor="middle" fill="#ffffff">se mănâncă</text>
<text x="320" y="178" font-size="14" text-anchor="middle" fill="#ffffff">mai multe legume</text>
<text x="505" y="130" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">Argument 3</text>
<text x="505" y="160" font-size="14" text-anchor="middle" fill="#ffffff">se lucrează</text>
<text x="505" y="178" font-size="14" text-anchor="middle" fill="#ffffff">în echipă</text>
<rect x="40" y="236" width="560" height="20" fill="#92400e"/>
<text x="320" y="282" font-size="15" text-anchor="middle" fill="#1f2937">DOVEZILE (date, exemple, experți) sunt fundația</text>
<polygon points="600,180 620,200 600,220" fill="#dc2626"/>
<text x="610" y="170" font-size="13" text-anchor="end" fill="#b91c1c">antiteza ⚡</text>
</svg>`,
      caption: "Teza stă în picioare doar dacă are argumente solide (stâlpii) sprijinite pe dovezi (fundația). Antiteza este vântul care încearcă s-o dărâme: combaterea îl oprește."
    },
    {
      type: "text",
      title: "Fapte și opinii",
      html: `<p>Pentru a argumenta bine trebuie să faci diferența dintre:</p>
<ul>
<li><b>Fapt</b>: ceva <b>adevărat și verificabil</b> de oricine. «Italia are 20 de regiuni.» «Apa fierbe la 100 °C la nivelul mării.»</li>
<li><b>Opinie</b>: ceea ce <b>gândește o persoană</b>; poți fi sau nu de acord. «Pizza este cea mai bună mâncare din lume.»</li>
</ul>
<p><b>Teza</b> este o opinie; <b>cele mai puternice argumente</b> sunt cele care se sprijină pe <b>fapte</b>.</p>
<p><b>Tipuri de dovezi</b>: date și numere (statistici), exemple concrete, experiență personală, citarea unui expert (argument de autoritate), comparația cu alte cazuri.</p>`
    },
    {
      type: "widget",
      title: "Joc: fapt sau opinie?",
      widget: "classify",
      options: {
        groups: ["Fapt", "Opinie"],
        items: [["Roma este capitala Italiei", 0], ["Fotbalul este cel mai frumos sport", 1], ["Un an are 12 luni", 0], ["Vara este cel mai bun anotimp", 1], ["Albinele fac miere", 0], ["Temele sunt plictisitoare", 1], ["Dunărea este cel mai lung fluviu din Uniunea Europeană", 0], ["Pisicile sunt mai simpatice decât câinii", 1]]
      },
      caption: "Un fapt se poate verifica; o opinie depinde de cel care vorbește."
    },
    {
      type: "text",
      title: "Conectorii: lipiciul raționamentului",
      html: `<table>
<tr><th>Pentru a…</th><th>Conectori (în italiană)</th></tr>
<tr><td>exprima teza</td><td>secondo me (după mine), a mio parere (în opinia mea), sono convinto che (sunt convins că), penso che (cred că)</td></tr>
<tr><td>adăuga argumente</td><td>innanzitutto (în primul rând), inoltre (în plus), in secondo luogo (în al doilea rând), infine (în sfârșit)</td></tr>
<tr><td>aduce o dovadă</td><td>infatti (într-adevăr), per esempio (de exemplu), come dimostra (după cum arată), secondo i dati (potrivit datelor)</td></tr>
<tr><td>prezenta antiteza</td><td>qualcuno sostiene che (cineva susține că), si potrebbe obiettare che (s-ar putea obiecta că)</td></tr>
<tr><td>combate</td><td>tuttavia (totuși), però (dar), eppure (și totuși), al contrario (dimpotrivă)</td></tr>
<tr><td>încheia</td><td>quindi (deci), perciò (de aceea), in conclusione (în concluzie), per questi motivi (din aceste motive)</td></tr>
</table>`
    },
    {
      type: "example",
      title: "Exemplu: «Ne trebuie mai mult verde în curtea școlii»",
      html: `<p><i>(Problema)</i> Curtea noastră este aproape toată din beton și vara devine foarte fierbinte.</p>
<p><i>(Teza)</i> <b>După mine</b> ar trebui plantați copaci și amenajat un strat de flori.</p>
<p><i>(Argumentul 1)</i> <b>În primul rând</b>, copacii fac umbră: <b>într-adevăr</b>, sub o coroană temperatura resimțită este mult mai scăzută decât la soare, așa cum am măsurat cu termometrul clasei.</p>
<p><i>(Argumentul 2)</i> <b>În plus</b>, am putea observa insecte și plante în timpul orelor de științe.</p>
<p><i>(Antiteza)</i> <b>Cineva ar putea obiecta că</b> costă prea mult. <i>(Combaterea)</i> <b>Totuși</b>, multe pepiniere și asociații dăruiesc răsaduri școlilor, iar părinții ne-ar putea ajuta să le plantăm.</p>
<p><i>(Concluzia)</i> <b>Din aceste motive</b> propun să scriem directorului școlii și primăriei.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: părțile textului",
      questions: [
        { type: "mc", q: "Teza este…", options: ["opinia care se vrea dovedită", "opinia contrară", "fraza finală cu salutările"], answer: 0, explain: "Teza este ideea principală pe care o susține autorul." },
        { type: "mc", q: "«Tuttavia» (totuși) se folosește mai ales pentru…", options: ["a adăuga un exemplu", "a combate o obiecție", "a încheia"], answer: 1, explain: "Tuttavia introduce o idee contrară celei tocmai spuse: servește la combatere." },
        { type: "tf", q: "«Italia are 20 de regiuni» este o opinie.", answer: false, explain: "Este un fapt verificabil." }
      ]
    },
    {
      type: "example",
      title: "Exemplu: scrisoarea către primar",
      html: `<p>Stimate domnule Primar,</p>
<p>suntem elevii clasei a V-a B și <b>am dori să vă cerem</b> să realizați o pistă de biciclete între cartier și școală.</p>
<p><b>În primul rând</b>, mulți dintre noi locuim la mai puțin de 2 km: cu bicicleta am ajunge în câteva minute. <b>În al doilea rând</b>, ar fi mai puține mașini în fața școlii la intrare, deci mai puțin trafic și mai puțin fum. <b>În sfârșit</b>, mersul pe bicicletă este o activitate fizică bună pentru sănătate.</p>
<p>Știm că <b>unii se tem</b> pentru siguranță. <b>Tocmai de aceea</b> cerem o pistă separată de șosea.</p>
<p><b>Din aceste motive</b> sperăm că ne veți primi propunerea. Cu stimă.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Aristotel și cele trei ingrediente",
      html: `<p>Filosoful grec <b>Aristotel</b> (secolul al IV-lea î.Hr.), în cartea <i>Retorica</i>, a explicat că pentru a convinge sunt necesare trei ingrediente: <b>ethos</b> (să fii credibil, o persoană serioasă și cinstită), <b>pathos</b> (să atingi emoțiile celui care ascultă) și <b>logos</b> (să oferi raționamente și dovezi). După mai bine de 2300 de ani, avocații, politicienii și publicitarii folosesc încă această rețetă!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Debate-ul la școală",
      html: `<p>În țările anglo-saxone <b>debate</b>-ul (dezbaterea reglementată) este o activitate școlară de mai bine de un secol: două echipe discută o teză, una <b>pentru</b> și una <b>împotrivă</b>, cu timpi preciși și un juriu. Adesea echipa care trebuie să apere o poziție este <b>trasă la sorți</b>: așa înveți să înțelegi și motivele celorlalți! Astăzi debate-ul se practică și în multe școli din Italia și din România.</p>`
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>Structura: <b>problemă → teză → argumente cu dovezi → antiteză și combatere → concluzie</b>.</li>
<li>Distinge mereu <b>faptele</b> de <b>opinii</b>: cele mai bune argumente se bazează pe fapte.</li>
<li>Folosește <b>conectorii</b> (innanzitutto, inoltre, infatti, tuttavia, quindi).</li>
<li>Respectă-i pe cei care gândesc diferit: se atacă <b>ideile</b>, niciodată <b>persoanele</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a construi o argumentare",
      intro: "Dacă schema clasică ți se pare grea, încearcă cu hamburgerul american, cu procesul din tribunal, cu balanța sau cu schema „PEE” englezească.",
      tabs: [
        {
          label: "🍔 Metoda OREO (SUA)",
          html: `<p>În școlile americane se predă metoda <b>OREO</b>, ca biscuiții:</p>
<ul>
<li><b>O</b> – <b>Opinion</b>: spun opinia mea (teza).</li>
<li><b>R</b> – <b>Reason</b>: dau un motiv (argumentul).</li>
<li><b>E</b> – <b>Example</b>: aduc un exemplu sau o dovadă.</li>
<li><b>O</b> – <b>Opinion</b>: repet opinia (concluzia).</li>
</ul>
<p>Cele două „O” sunt biscuiții, motivul și exemplul sunt crema din mijloc!</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#f5f5f4"/>
<ellipse cx="200" cy="50" rx="150" ry="30" fill="#292524"/><text x="200" y="57" font-size="18" fill="#ffffff" text-anchor="middle" font-weight="bold">O – Opinie</text>
<rect x="60" y="85" width="280" height="35" rx="12" fill="#ffffff" stroke="#d6d3d1" stroke-width="2"/><text x="200" y="109" font-size="17" text-anchor="middle">R – Motiv</text>
<rect x="60" y="125" width="280" height="35" rx="12" fill="#ffffff" stroke="#d6d3d1" stroke-width="2"/><text x="200" y="149" font-size="17" text-anchor="middle">E – Exemplu / dovadă</text>
<ellipse cx="200" cy="195" rx="150" ry="30" fill="#292524"/><text x="200" y="202" font-size="18" fill="#ffffff" text-anchor="middle" font-weight="bold">O – Opinie</text>
<text x="380" y="60" font-size="15" fill="#1f2937">= teza</text>
<text x="380" y="110" font-size="15" fill="#1f2937">= argumentul</text>
<text x="380" y="150" font-size="15" fill="#1f2937">= dovada</text>
<text x="380" y="200" font-size="15" fill="#1f2937">= concluzia</text>
</svg>`
        },
        {
          label: "⚖️ În tribunal",
          html: `<p>Gândește-te la un <b>proces</b>:</p>
<ul>
<li><b>avocatul</b> ești tu: susții o <b>teză</b> («clientul meu este nevinovat»);</li>
<li><b>argumentele</b> sunt motivele; <b>dovezile</b> sunt martorii, fotografiile, amprentele;</li>
<li><b>avocatul adversar</b> prezintă <b>antiteza</b>; tu răspunzi punct cu punct (<b>combaterea</b>);</li>
<li><b>judecătorul</b> este cititorul: hotărăște cine a raționat mai bine;</li>
<li><b>pledoaria finală</b> este <b>concluzia</b>.</li>
</ul>
<p>Un avocat bun nu țipă: <b>demonstrează</b>.</p>`
        },
        {
          label: "🗳️ Balanța pro și contra",
          html: `<p>Înainte de a scrie, fă un <b>tabel cu două coloane</b>: de o parte <b>PRO</b>, de cealaltă <b>CONTRA</b>. Apoi „cântărește” argumentele: care sunt mai puternice? Partea mai grea devine <b>teza</b> ta, iar cel mai puternic argument al celeilalte părți devine <b>antiteza</b> de combătut.</p>
<p>Exemplu: «Telefon mobil la școală?» PRO: căutări rapide, urgențe. CONTRA: distragere, mai puțin joc împreună. Potrivește fiecare argument cu coloana lui!</p>`,
          widget: "classify",
          options: { groups: ["PRO telefon la școală", "CONTRA telefon la școală"], items: [["Se pot face căutări rapide", 0], ["Util pentru a anunța în caz de urgență", 0], ["Se folosesc aplicații pentru a învăța", 0], ["Distrage atenția în timpul orelor", 1], ["Te joci mai puțin cu colegii", 1], ["Se poate strica sau pierde", 1]] }
        },
        {
          label: "🇬🇧 Schema PEE",
          html: `<p>În Regatul Unit, pentru fiecare paragraf se folosește schema <b>PEE</b>:</p>
<ul>
<li><b>P</b>oint – punctul (argumentul): «Copacii răcoresc curtea.»</li>
<li><b>E</b>vidence – dovada: «Am măsurat cu 5 grade mai puțin la umbră.»</li>
<li><b>E</b>xplain – explicația: «Deci ne-am juca mai bine și în iunie.»</li>
</ul>
<p>Fiecare argument devine un paragraf PEE: textul crește ordonat, cărămidă cu cărămidă.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta textului argumentativ",
      nodes: [
        { id: "problema", label: "Problema", x: 50, y: 6, color: "#64748b", html: "O chestiune despre care oamenii au opinii diferite.", why: "Se argumentează doar dacă există o îndoială: despre un fapt sigur (2 + 2 = 4) nu e nevoie să convingi pe nimeni." },
        { id: "tesi", label: "Teza", x: 50, y: 26, color: "#2563eb", html: "Opinia pe care o susține autorul.", why: "Din grecescul <i>thésis</i> = „poziție”: este punctul în care te așezi. Trebuie spusă limpede, altfel cititorul nu știe ce vrei să dovedești." },
        { id: "argomenti", label: "Argumente", x: 25, y: 48, color: "#16a34a", html: "Motivele care susțin teza.", why: "Din latinescul <i>arguere</i> = „a arăta, a lămuri”. Încă retorii greci și romani (Aristotel, Cicero, Quintilian) studiau cum se găsesc și se ordonează argumentele." },
        { id: "prove", label: "Dovezi", x: 25, y: 74, color: "#0ea5e9", html: "Date, exemple, experiențe, citate de la experți.", why: "Un argument fără dovezi este doar o altă opinie. Dovezile bazate pe fapte verificabile sunt cele mai puternice, așa cum învață metoda științifică." },
        { id: "antitesi", label: "Antiteza", x: 75, y: 48, color: "#dc2626", html: "Opinia contrară tezei.", why: "<i>Anti</i> = împotrivă. Prezentarea ei arată că ai luat în considerare și ideile altora și face textul mai cinstit și mai convingător." },
        { id: "confutazione", label: "Combaterea", x: 75, y: 74, color: "#f97316", html: "Răspunsul care arată punctele slabe ale antitezei.", why: "Din latinescul <i>confutare</i> = „a respinge”. Dacă nu răspunzi obiecțiilor, cititorul care gândește diferit nu își va schimba părerea." },
        { id: "connettivi", label: "Conectori", x: 50, y: 60, color: "#a855f7", html: "Cuvinte care leagă raționamentul: infatti, inoltre, tuttavia, quindi.", why: "Arată cititorului relația logică dintre propoziții (adăugare, cauză, contrast, consecință), ca indicatoarele rutiere ale unui drum." },
        { id: "conclusione", label: "Concluzia", x: 50, y: 92, color: "#eab308", html: "Reia teza și, eventual, face o propunere.", why: "Oamenii rețin mai ales începutul și sfârșitul unui discurs: de aceea teza trebuie repetată la final." }
      ],
      edges: [
        ["problema", "tesi", "dă naștere"],
        ["tesi", "argomenti", "este susținută de"],
        ["argomenti", "prove", "se bazează pe"],
        ["tesi", "antitesi", "se opune"],
        ["antitesi", "confutazione", "este respinsă prin"],
        ["argomenti", "connettivi", "legate prin"],
        ["confutazione", "conclusione", "duce la"],
        ["prove", "conclusione", "duc la"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: argumente și dovezi",
      questions: [
        { type: "mc", q: "Care este o dovadă bazată pe date?", options: ["«Toată lumea știe că e așa»", "«Potrivit ISTAT, 3 copii din 10 nu fac sport»", "«Mie îmi place mai mult»"], answer: 1, explain: "O dată oferită de un institut de statistică este verificabilă." },
        { type: "tf", q: "Într-un text argumentativ este util să prezinți și opinia contrară.", answer: true, explain: "Prezentarea și combaterea antitezei face textul mai convingător." },
        { type: "mc", q: "Care conector introduce concluzia?", options: ["Inoltre (în plus)", "Per esempio (de exemplu)", "In conclusione (în concluzie)"], answer: 2, explain: "«In conclusione» încheie raționamentul." }
      ]
    }
  ],
  glossary: [
    { t: "Text argumentativ", d: "Text care susține o opinie cu argumente și dovezi pentru a convinge cititorul." },
    { t: "Teză", d: "Opinia pe care autorul vrea să o dovedească." },
    { t: "Argument", d: "Motiv care susține teza." },
    { t: "Dovadă", d: "Dată, exemplu, experiență sau citat care face puternic un argument." },
    { t: "Antiteză", d: "Opinie contrară tezei." },
    { t: "Combatere (confutazione)", d: "Răspuns care arată slăbiciunea antitezei." },
    { t: "Fapt", d: "Informație adevărată și verificabilă de oricine." },
    { t: "Opinie", d: "Idee personală, cu care poți fi sau nu de acord." },
    { t: "Conector (connettivo)", d: "Cuvânt sau expresie care leagă propozițiile și arată raționamentul (infatti, tuttavia, quindi)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care este scopul principal al textului argumentativ?", options: ["să povestească o întâmplare", "să convingă cititorul de o opinie", "să explice cum se face un tort"], answer: 1, explain: "A argumenta = a susține o opinie cu motive pentru a convinge." },
      { type: "order", q: "Pune în ordine părțile textului argumentativ.", items: ["Problema", "Teza", "Argumente cu dovezi", "Antiteză și combatere", "Concluzia"], explain: "Este schema clasică: se pornește de la problemă și se încheie reluând teza." },
      { type: "mc", q: "Care propoziție exprimă o teză?", options: ["Astăzi este marți.", "După mine, recreația ar trebui să dureze mai mult.", "Recreația începe la 10:30."], answer: 1, explain: "Este o opinie de dovedit; celelalte sunt fapte." },
      { type: "tf", q: "O opinie este întotdeauna adevărată pentru toți.", answer: false, explain: "Opinia depinde de cel care vorbește; faptul este cel care se poate verifica." },
      { type: "mc", q: "«Cineva ar putea obiecta că excursiile costă prea mult.» Această propoziție introduce…", options: ["teza", "antiteza", "concluzia"], answer: 1, explain: "Prezintă o opinie contrară: antiteza." },
      { type: "text", q: "Cum se numește partea în care se respinge opinia contrară?", answer: ["combatere", "combaterea", "confutazione", "la confutazione"], explain: "A combate (confutare) = a arăta că o obiecție nu se susține." },
      { type: "mc", q: "Care conector servește la aducerea unei dovezi?", options: ["infatti (într-adevăr)", "tuttavia (totuși)", "infine (în sfârșit)"], answer: 0, explain: "«Infatti» introduce explicația sau dovada a ceea ce s-a spus." },
      { type: "mc", q: "Care argument este mai puternic pentru a susține «Trebuie să facem colectare selectivă»?", options: ["«Așa spun toți»", "«Reciclarea hârtiei economisește copaci și apă»", "«Îmi plac containerele colorate»"], answer: 1, explain: "Se bazează pe un fapt verificabil și legat de teză." },
      { type: "tf", q: "Într-o discuție corectă se critică ideile, nu persoanele.", answer: true, explain: "A ataca persoana în loc de idee este incorect și nu dovedește nimic." },
      { type: "mc", q: "În metoda OREO, litera «E» înseamnă…", options: ["Emoție", "Exemplu (dovadă)", "Greșeală"], answer: 1, explain: "Opinion, Reason, Example, Opinion." },
      { type: "mc", q: "Cine a scris «Retorica», cu ethos, pathos și logos?", options: ["Aristotel", "Dante", "Galileo"], answer: 0, explain: "Filosoful grec Aristotel, în secolul al IV-lea î.Hr." }
    ]
  }
});
