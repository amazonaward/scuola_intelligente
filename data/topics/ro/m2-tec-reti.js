TOPIC('ro', {
  id: "m2-tec-reti",
  title: "Rețelele și Internetul",
  intro: "Când trimiți un mesaj unui prieten din Australia, el ajunge în mai puțin de o secundă, traversând cabluri de sub ocean, routere și antene. Cum este posibil? În această lecție descoperim ce este o <b>rețea</b>, cum funcționează <b>Internetul</b> și cum călătoresc <b>datele</b>, sparte în multe <b>pachete</b> mici.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "Ce este o rețea",
      html: `<p>O <b>rețea informatică</b> este un ansamblu de dispozitive (calculatoare, smartphone-uri, imprimante, console…) <b>conectate</b> între ele pentru a-și schimba date și a împărți resurse.</p>
<p>Rețelele se clasifică după <b>întindere</b>:</p>
<ul>
<li><b>PAN</b> (Personal Area Network): câțiva metri, de exemplu căștile Bluetooth și telefonul.</li>
<li><b>LAN</b> (Local Area Network): o casă, o școală, un birou. Wi-Fi-ul de acasă este o LAN fără fir (WLAN).</li>
<li><b>MAN</b> (Metropolitan Area Network): un oraș.</li>
<li><b>WAN</b> (Wide Area Network): regiuni, țări, continente.</li>
</ul>
<p><b>Internetul</b> este cea mai mare WAN din lume: este o <b>rețea de rețele</b>, adică milioane de rețele diferite conectate între ele prin reguli comune.</p>`
    },
    {
      type: "text",
      title: "Cine se află într-o rețea",
      html: `<ul>
<li><b>Client</b>: dispozitivul care <b>cere</b> un serviciu (telefonul tău care deschide un videoclip).</li>
<li><b>Server</b>: calculatorul care <b>oferă</b> serviciul (calculatorul care păstrează videoclipul și îl trimite). Multe servere sunt adunate în mari <b>centre de date</b> (data center).</li>
<li><b>Router</b>: «dispecerul» care decide drumul datelor între o rețea și alta. Cel de acasă îți conectează LAN-ul la Internet.</li>
<li><b>Switch</b>: conectează între ele, prin cabluri, dispozitivele aceleiași LAN.</li>
<li><b>Punct de acces (access point)</b>: antena Wi-Fi.</li>
</ul>
<p><b>Mediile de transmisie</b> pot fi: cabluri de <b>cupru</b> (semnale electrice), <b>fibră optică</b> (impulsuri de <b>lumină</b> într-un fir de sticlă subțire cât un fir de păr) și <b>unde radio</b> (Wi-Fi, rețea mobilă 4G/5G, sateliți).</p>`
    },
    {
      type: "svg",
      title: "De la casa ta la server",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eef2ff"/>
<rect x="15" y="40" width="190" height="220" rx="16" fill="#e0f2fe" stroke="#0369a1" stroke-width="3" stroke-dasharray="8 5"/>
<text x="110" y="65" font-size="16" font-weight="bold" fill="#0369a1" text-anchor="middle">LAN de acasă</text>
<rect x="35" y="90" width="50" height="80" rx="8" fill="#1e293b"/>
<rect x="41" y="98" width="38" height="58" fill="#38bdf8"/>
<text x="60" y="190" font-size="14" fill="#0f172a" text-anchor="middle">client</text>
<rect x="35" y="205" width="70" height="40" rx="4" fill="#475569"/>
<rect x="42" y="211" width="56" height="26" fill="#a5f3fc"/>
<rect x="125" y="140" width="65" height="35" rx="8" fill="#f97316" stroke="#7c2d12" stroke-width="2"/>
<text x="157" y="163" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">router</text>
<path d="M85 130 Q 110 130 125 150" fill="none" stroke="#0ea5e9" stroke-width="3" stroke-dasharray="5 4"/>
<line x1="105" y1="225" x2="125" y2="170" stroke="#0ea5e9" stroke-width="3"/>
<ellipse cx="330" cy="150" rx="105" ry="70" fill="#c7d2fe" stroke="#4338ca" stroke-width="3"/>
<text x="330" y="140" font-size="22" font-weight="bold" fill="#3730a3" text-anchor="middle">INTERNET</text>
<text x="330" y="165" font-size="14" fill="#3730a3" text-anchor="middle">rețea de rețele</text>
<circle cx="270" cy="110" r="8" fill="#f97316"/>
<circle cx="390" cy="115" r="8" fill="#f97316"/>
<circle cx="300" cy="195" r="8" fill="#f97316"/>
<circle cx="380" cy="190" r="8" fill="#f97316"/>
<line x1="190" y1="157" x2="228" y2="155" stroke="#dc2626" stroke-width="4"/>
<line x1="433" y1="150" x2="470" y2="150" stroke="#dc2626" stroke-width="4"/>
<rect x="470" y="80" width="110" height="160" rx="10" fill="#334155"/>
<rect x="482" y="95" width="86" height="25" rx="4" fill="#22c55e"/>
<rect x="482" y="130" width="86" height="25" rx="4" fill="#22c55e"/>
<rect x="482" y="165" width="86" height="25" rx="4" fill="#22c55e"/>
<text x="525" y="222" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">server</text>
<text x="300" y="275" font-size="15" fill="#1f2937" text-anchor="middle">bulinele portocalii sunt routerele care dirijează pachetele</text>
</svg>`,
      caption: "Clientul cere, routerele dirijează, serverul răspunde. Între casa ta și server pot exista chiar 15–20 de routere."
    },
    {
      type: "text",
      title: "Adrese IP și DNS: cum se găsește drumul",
      html: `<p>Pentru a trimite o scrisoare este nevoie de o adresă. În Internet, fiecare dispozitiv conectat are o <b>adresă IP</b> (Internet Protocol).</p>
<ul>
<li><b>IPv4</b>: 4 numere de la <b>0 la 255</b> separate prin puncte, de exemplu <code>192.168.1.10</code>. Sunt 32 de biți în total, aproximativ <b>4,3 miliarde</b> de adrese: prea puține pentru toate dispozitivele din lume!</li>
<li><b>IPv6</b>: 128 de biți, scrise în hexazecimal (<code>2001:db8::1</code>). Adresele posibile sunt un număr cu 39 de cifre: practic infinite.</li>
</ul>
<p>Dar noi nu scriem numere, scriem nume precum <code>www.wikipedia.org</code>. <b>DNS</b> (Domain Name System) este «agenda» Internetului: traduce numele în adresa IP a serverului. Funcționează ca agenda telefonului: cauți «Bunica» și telefonul formează numărul.</p>`
    },
    {
      type: "text",
      title: "Pachetele și protocolul TCP/IP",
      html: `<p>Datele nu călătoresc dintr-o singură bucată: sunt împărțite în <b>pachete</b> (de obicei cel mult aproximativ 1500 de octeți fiecare). Fiecare pachet conține:</p>
<ul>
<li><b>adresa IP a expeditorului</b> și pe cea a <b>destinatarului</b>;</li>
<li>un <b>număr de ordine</b> (ca să se poată reasambla bucățile);</li>
<li>o bucățică din <b>datele</b> propriu-zise.</li>
</ul>
<p>Routerele trimit fiecare pachet pe drumul <b>cel mai liber în acel moment</b>: pachetele aceluiași mesaj pot face trasee diferite și pot ajunge în dezordine. Această metodă se numește <b>comutare de pachete</b>.</p>
<p>Regulile pe care le respectă toată lumea se numesc <b>protocoale</b>. Cele mai importante sunt <b>IP</b> (duce fiecare pachet la adresa potrivită) și <b>TCP</b> (verifică dacă au ajuns toate, le pune în ordine și cere retrimiterea celor pierdute). Împreună formează <b>TCP/IP</b>, inventat de <b>Vinton Cerf</b> și <b>Robert Kahn</b> în 1974.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: rețele și adrese",
      questions: [
        { type: "mc", q: "Rețeaua Wi-Fi de acasă este o…", options: ["WAN", "LAN", "MAN"], answer: 1, explain: "Acoperă o zonă mică (casa): este o rețea locală, LAN (fără fir: WLAN)." },
        { type: "tf", q: "DNS traduce numele site-urilor în adrese IP.", answer: true, explain: "Este «agenda telefonică» a Internetului." },
        { type: "mc", q: "Care dintre acestea este o adresă IPv4 validă?", options: ["192.168.1.300", "10.0.0.25", "256.1.1.1"], answer: 1, explain: "Fiecare număr dintr-un IPv4 merge de la 0 la 255: 300 și 256 sunt prea mari." }
      ]
    },
    {
      type: "3d",
      title: "Autostrăzile de sub mare",
      scene: "globe",
      options: {
        points: [
          { lat: 45.46, lon: 9.19, label: "Milano", color: "#ef4444" },
          { lat: 43.3, lon: 5.37, label: "Marsilia", color: "#f97316" },
          { lat: 31.2, lon: 29.92, label: "Alexandria", color: "#f97316" },
          { lat: 19.07, lon: 72.88, label: "Mumbai", color: "#f97316" },
          { lat: 1.35, lon: 103.82, label: "Singapore", color: "#f97316" },
          { lat: 51.5, lon: -0.13, label: "Londra", color: "#2563eb" },
          { lat: 40.71, lon: -74.0, label: "New York", color: "#2563eb" },
          { lat: -33.87, lon: 151.21, label: "Sydney", color: "#16a34a" }
        ],
        routes: [
          { points: [0, 1, 2, 3, 4, 7], color: "#f97316" },
          { points: [0, 5, 6], color: "#2563eb" }
        ]
      },
      caption: "Peste 95% din datele dintre continente călătoresc prin cablurile submarine din fibră optică, nu prin sateliți. Rotește globul și urmărește două trasee posibile ale pachetelor tale."
    },
    {
      type: "example",
      title: "Exemplu practic: ce se întâmplă când deschizi un site",
      html: `<ol>
<li>Scrii <code>www.exemplu.ro</code> în browser.</li>
<li>Calculatorul întreabă <b>DNS</b>-ul: «Care este IP-ul lui www.exemplu.ro?» și primește, de exemplu, <code>93.184.216.34</code>.</li>
<li>Browserul trimite serverului o <b>cerere</b> (protocolul <b>HTTP</b>, sau <b>HTTPS</b> dacă este criptat: lacătul 🔒).</li>
<li>Cererea, împărțită în pachete, trece prin <b>routerul</b> tău, apoi prin routerele furnizorului tău de Internet și ale altor rețele.</li>
<li><b>Serverul</b> răspunde trimițând pagina, tot în pachete.</li>
<li><b>TCP</b> pune pachetele în ordine; browserul <b>desenează</b> pagina. Totul în câteva zecimi de secundă!</li>
</ol>`
    },
    {
      type: "example",
      title: "Exemplu practic: cât durează descărcarea?",
      html: `<p>Viteza unei conexiuni se măsoară în <b>biți pe secundă</b> (Mbit/s = milioane de biți pe secundă). Dimensiunile fișierelor se măsoară, în schimb, în <b>octeți</b> (byte). Atenție: <b>1 octet = 8 biți</b>!</p>
<p>Vrei să descarci un joc de <b>500 MB</b> (megaocteți) cu o conexiune de <b>100 Mbit/s</b>:</p>
<ol>
<li>Transform în biți: 500 × 8 = <b>4000 Mbit</b>.</li>
<li>Împart la viteză: 4000 ÷ 100 = <b>40 de secunde</b> (în condiții ideale).</li>
</ol>
<p>Cu o veche linie ADSL de 8 Mbit/s ar fi nevoie de 4000 ÷ 8 = 500 de secunde, mai mult de 8 minute. Cu fibra de 1 Gbit/s (1000 Mbit/s) sunt suficiente 4 secunde!</p>`
    },
    {
      type: "widget",
      title: "Potrivește termenii",
      widget: "match",
      options: { pairs: [
        ["Router", "Dirijează pachetele între rețele"],
        ["Server", "Oferă servicii și conținuturi"],
        ["DNS", "Traduce numele în adrese IP"],
        ["Pachet", "Bucățică de date cu expeditor și destinatar"],
        ["Fibră optică", "Transmite date prin impulsuri de lumină"],
        ["TCP", "Verifică dacă toate pachetele ajung în ordine"]
      ] },
      caption: "Leagă fiecare cuvânt de definiția lui."
    },
    {
      type: "curiosity",
      title: "Știai că…? Primul mesaj a fost «LO»",
      html: `<p>Pe <b>29 octombrie 1969</b>, două calculatoare din rețeaua <b>ARPANET</b>, strămoașa Internetului, unul la universitatea UCLA din Los Angeles și unul la Stanford Research Institute, au încercat să-și trimită primul mesaj: cuvântul <b>LOGIN</b>. După primele două litere, «L» și «O», sistemul s-a blocat!</p>
<p>Așa că primul mesaj din istoria Internetului a fost «<b>LO</b>», care în engleza arhaică înseamnă… «iată!». O oră mai târziu, conexiunea a funcționat întreagă.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Internetul și Web-ul nu sunt același lucru",
      html: `<p><b>Internetul</b> este rețeaua fizică (cabluri, routere, protocoale). <b>World Wide Web</b> este doar <b>unul</b> dintre serviciile care circulă pe Internet, ca poșta electronică sau apelurile video.</p>
<p>Web-ul a fost inventat la <b>CERN</b>, în Geneva, de englezul <b>Tim Berners-Lee</b>: l-a propus în <b>1989</b>, iar primul site a apărut online în 1991. Pe 30 aprilie 1993, CERN l-a făcut liber și gratuit pentru toată lumea.</p>
<p>Și Italia? Pe <b>30 aprilie 1986</b>, centrul CNUCE din <b>Pisa</b> a fost primul din Italia care s-a conectat la Internet, prin satelit, cu Statele Unite.</p>`
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li>Rețea = dispozitive conectate. După întindere: PAN, LAN, MAN, WAN. Internet = rețea de rețele.</li>
<li><b>Clientul</b> cere, <b>serverul</b> răspunde, <b>routerul</b> dirijează.</li>
<li>Fiecare dispozitiv are o <b>adresă IP</b>; <b>DNS</b> traduce numele în IP.</li>
<li>Datele călătoresc în <b>pachete</b> care pot urma drumuri diferite; <b>TCP/IP</b> le ghidează și le reordonează.</li>
<li>Viteza în biți/s, fișierele în octeți: <b>1 octet = 8 biți</b>.</li>
<li>Internet ≠ Web: Web-ul este un serviciu al Internetului.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege Internetul",
      intro: "Internetul este invizibil, dar poate fi imaginat în multe feluri. Alege-l pe cel care te ajută cel mai mult.",
      tabs: [
        {
          label: "✉️ Cărțile poștale numerotate",
          html: `<p>Trebuie să-i trimiți unui prieten o carte întreagă, dar poșta acceptă doar <b>cărți poștale</b>. Atunci:</p>
<ol>
<li>copiezi cartea pe 300 de cărți poștale și le <b>numerotezi</b> (1/300, 2/300…);</li>
<li>pe fiecare scrii <b>expeditorul</b> și <b>destinatarul</b>;</li>
<li>le pui în cutia poștală: unele trec prin Bologna, altele prin Florența, în funcție de camioanele libere (<b>routerele</b>);</li>
<li>prietenul tău le primește în dezordine, le <b>reordonează</b> după numere și, dacă lipsește una, îți cere să o retrimiți (este treaba lui <b>TCP</b>).</li>
</ol>
<p>Aceasta este chiar <b>comutarea de pachete</b>!</p>`
        },
        {
          label: "🛣️ Rețeaua rutieră",
          html: `<p>Gândește-te la Internet ca la rețeaua rutieră:</p>
<ul>
<li><b>cablurile</b> sunt drumurile (fibra este autostrada, vechea pereche de cupru este un drumeag);</li>
<li><b>routerele</b> sunt sensurile giratorii cu indicatoare;</li>
<li><b>adresele IP</b> sunt adresele caselor;</li>
<li><b>DNS</b> este GPS-ul care transformă «casa bunicii» în stradă și număr;</li>
<li><b>pachetele</b> sunt mașinile: dacă pe un drum este trafic, GPS-ul alege altul.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#dcfce7"/>
<path d="M40 130 L200 60 L400 60 L560 130" fill="none" stroke="#475569" stroke-width="22"/>
<path d="M40 130 L200 200 L400 200 L560 130" fill="none" stroke="#475569" stroke-width="22"/>
<path d="M200 60 L400 200" fill="none" stroke="#64748b" stroke-width="14"/>
<circle cx="200" cy="60" r="22" fill="#f97316"/>
<circle cx="400" cy="60" r="22" fill="#f97316"/>
<circle cx="200" cy="200" r="22" fill="#f97316"/>
<circle cx="400" cy="200" r="22" fill="#f97316"/>
<rect x="10" y="105" width="50" height="50" fill="#2563eb"/>
<text x="35" y="137" font-size="20" text-anchor="middle">🏠</text>
<rect x="540" y="105" width="50" height="50" fill="#334155"/>
<text x="565" y="137" font-size="20" text-anchor="middle">🖥️</text>
<text x="280" y="55" font-size="22" text-anchor="middle">🚗</text>
<text x="300" y="215" font-size="22" text-anchor="middle">🚙</text>
<text x="300" y="140" font-size="22" text-anchor="middle">🚕</text>
<text x="300" y="250" font-size="15" fill="#14532d" text-anchor="middle">sensuri giratorii portocalii = routere · mașini = pachete care aleg drumuri diferite</text>
</svg>`
        },
        {
          label: "🔦 Fibra optică",
          html: `<p>Încearcă acest experiment (împreună cu un adult): într-o cameră întunecată, lasă să iasă un jet de apă dintr-o sticlă găurită și luminează gaura din partea opusă cu o lanternă. Lumina <b>urmează curba</b> apei în loc să iasă în linie dreaptă!</p>
<p>Este <b>reflexia totală</b>: lumina ricoșează pe pereții interiori și rămâne «prinsă». În fibra optică se întâmplă la fel în interiorul unui fir de sticlă purissimă: impulsurile de lumină (aprins = 1, stins = 0) călătoresc zeci de kilometri. Experimentul a fost arătat încă din 1842 de fizicianul elvețian <b>Daniel Colladon</b>.</p>`
        },
        {
          label: "⏳ Axa timpului",
          html: `<p>De la o rețea de câteva calculatoare la miliarde de dispozitive.</p>`,
          widget: "timeline",
          options: { unit: "ani", events: [
            { year: 1969, label: "ARPANET: primul mesaj «LO»", icon: "📡" },
            { year: 1971, label: "Primul e-mail (Ray Tomlinson, simbolul @)", icon: "📧" },
            { year: 1974, label: "Cerf și Kahn descriu TCP/IP", icon: "📜" },
            { year: 1986, label: "Pisa: Italia se conectează la Internet", icon: "🇮🇹" },
            { year: 1991, label: "Tim Berners-Lee pune online primul site web", icon: "🌐" },
            { year: 1997, label: "Apare standardul Wi-Fi (IEEE 802.11)", icon: "📶" },
            { year: 2007, label: "Smartphone-uri cu ecran tactil: Internetul în buzunar", icon: "📱" }
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta Internetului",
      nodes: [
        { id: "rete", label: "Rețea informatică", x: 50, y: 7, color: "#7c3aed", html: "Dispozitive conectate pentru a schimba date și resurse.", why: "Primele rețele au apărut în anii ’60 ca să împartă calculatoarele costisitoare ale universităților. Ideea unei rețele fără centru, care continuă să funcționeze chiar dacă un nod se defectează, a fost studiată de Paul Baran (SUA) și Donald Davies (Regatul Unit)." },
        { id: "internet", label: "Internet", x: 50, y: 27, color: "#2563eb", html: "Rețeaua mondială formată din milioane de rețele conectate.", why: "Provine din ARPANET (1969), proiect finanțat de Departamentul Apărării al SUA. În 1983, ARPANET a adoptat TCP/IP: este considerată data de naștere a Internetului modern." },
        { id: "clientserver", label: "Client și server", x: 15, y: 45, color: "#0ea5e9", html: "Clientul cere, serverul răspunde.", why: "Împărțirea sarcinilor permite păstrarea datelor într-un singur loc (serverul) și folosirea lor de pe milioane de dispozitive diferite." },
        { id: "ip", label: "Adresă IP", x: 40, y: 50, color: "#f59e0b", html: "Număr care identifică fiecare dispozitiv conectat.", why: "IPv4 (1981) folosește 32 de biți: 2³² ≈ 4,3 miliarde de adrese. Odată cu explozia smartphone-urilor și a obiectelor conectate nu mai erau de ajuns: a apărut IPv6, cu 128 de biți." },
        { id: "dns", label: "DNS", x: 40, y: 72, color: "#eab308", html: "Traduce numele site-urilor în adrese IP.", why: "Inventat de Paul Mockapetris în 1983: înainte exista un singur fișier cu toate numele, actualizat de mână, care nu mai putea fi suficient." },
        { id: "pacchetti", label: "Pachete", x: 65, y: 50, color: "#ef4444", html: "Bucățele de date cu expeditor, destinatar și număr de ordine.", why: "Împărțirea datelor în pachete permite împărțirea liniilor între mulți utilizatori și ocolirea defecțiunilor: dacă un drum este întrerupt, pachetele îl iau pe altul." },
        { id: "tcpip", label: "TCP/IP", x: 65, y: 72, color: "#16a34a", html: "Regulile (protocoalele) comune întregului Internet.", why: "Scris de Vinton Cerf și Robert Kahn în 1974 ca să facă rețele diferite să comunice între ele. De aceea sunt numiți «părinții Internetului»." },
        { id: "mezzi", label: "Medii fizice", x: 88, y: 45, color: "#64748b", html: "Cupru, fibră optică, unde radio, sateliți.", why: "Fibra optică folosește reflexia totală a luminii; primul cablu telegrafic transatlantic a fost așezat încă din 1858. Astăzi peste 500 de cabluri submarine leagă continentele." },
        { id: "web", label: "World Wide Web", x: 50, y: 92, color: "#a855f7", html: "Serviciul paginilor legate prin linkuri, deasupra Internetului.", why: "Inventat de Tim Berners-Lee la CERN (1989–1991) ca oamenii de știință să poată împărți documente. Folosește protocolul HTTP și limbajul HTML." }
      ],
      edges: [
        ["rete", "internet", "cea mai mare este"],
        ["internet", "clientserver", "model"],
        ["internet", "ip", "identifică cu"],
        ["ip", "dns", "găsit prin"],
        ["internet", "pacchetti", "transportă"],
        ["pacchetti", "tcpip", "reglementate de"],
        ["internet", "mezzi", "călătorește pe"],
        ["tcpip", "web", "deasupra funcționează"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: pachete și viteză",
      questions: [
        { type: "num", q: "Câți biți are 1 octet?", answer: 8, explain: "1 octet = 8 biți." },
        { type: "tf", q: "Pachetele aceluiași mesaj urmează mereu același drum.", answer: false, explain: "Fiecare pachet poate lua drumul cel mai liber; TCP le pune în ordine la sosire." },
        { type: "num", q: "Un fișier de 50 MB cu o conexiune de 100 Mbit/s: câte secunde sunt necesare (în condiții ideale)?", answer: 4, unit: "s", explain: "50 × 8 = 400 Mbit; 400 ÷ 100 = 4 s." }
      ]
    }
  ],
  glossary: [
    { t: "Rețea", d: "Ansamblu de dispozitive conectate pentru a schimba date." },
    { t: "LAN / WAN", d: "Rețea locală (casă, școală) / rețea de arie largă (țări, continente)." },
    { t: "Client", d: "Dispozitiv care cere un serviciu." },
    { t: "Server", d: "Calculator care oferă servicii și conținuturi altor dispozitive." },
    { t: "Router", d: "Dispozitiv care dirijează pachetele între rețele diferite." },
    { t: "Adresă IP", d: "Număr care identifică un dispozitiv în rețea (IPv4 sau IPv6)." },
    { t: "DNS", d: "Sistem care traduce numele site-urilor în adrese IP." },
    { t: "Pachet", d: "Porțiune mică de date cu adrese și număr de ordine." },
    { t: "Protocol", d: "Ansamblu de reguli pentru comunicarea în rețea (TCP, IP, HTTP…)." },
    { t: "Fibră optică", d: "Fir de sticlă care transmite date prin impulsuri de lumină." },
    { t: "Bit / octet (byte)", d: "Unități de informație: 1 octet = 8 biți." },
    { t: "World Wide Web", d: "Serviciu de pagini legate prin linkuri care funcționează pe Internet." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Ce este Internetul?", options: ["Un singur calculator uriaș", "O rețea de rețele conectate din întreaga lume", "Un program pentru navigat"], answer: 1, explain: "Internetul conectează milioane de rețele diferite prin reguli comune." },
      { type: "mc", q: "Care dispozitiv dirijează pachetele între rețele diferite?", options: ["Routerul", "Imprimanta", "Monitorul"], answer: 0, explain: "Routerul decide drumul pachetelor." },
      { type: "tf", q: "Internetul și World Wide Web sunt același lucru.", answer: false, explain: "Web-ul este unul dintre serviciile care funcționează pe Internet, ca e-mailul." },
      { type: "num", q: "Care este cel mai mare număr care poate apărea în fiecare dintre cele 4 părți ale unei adrese IPv4?", answer: 255, explain: "Fiecare parte are 8 biți: de la 0 la 255." },
      { type: "text", q: "Cum se numește sistemul care traduce www.numesite.ro într-o adresă IP? (sigla)", answer: ["dns"], explain: "DNS = Domain Name System." },
      { type: "order", q: "Pune în ordine ce se întâmplă când deschizi un site.", items: ["Scrii adresa în browser", "DNS găsește adresa IP", "Browserul trimite cererea serverului", "Serverul răspunde cu pachetele", "Browserul afișează pagina"], explain: "Nume → IP → cerere → răspuns → afișare." },
      { type: "mc", q: "Ce circulă printr-o fibră optică?", options: ["Curent electric", "Impulsuri de lumină", "Unde sonore"], answer: 1, explain: "Fibra transmite biții ca fulgere de lumină." },
      { type: "num", q: "Un fișier de 200 MB cu o conexiune de 400 Mbit/s: câte secunde sunt necesare (în condiții ideale)?", answer: 4, unit: "s", explain: "200 × 8 = 1600 Mbit; 1600 ÷ 400 = 4 s." },
      { type: "mc", q: "Care este rolul protocolului TCP?", options: ["Să dea nume site-urilor", "Să verifice dacă toate pachetele ajung și să le pună în ordine", "Să pornească Wi-Fi-ul"], answer: 1, explain: "TCP garantează că datele ajung complete și în ordine." },
      { type: "text", q: "În ce centru de cercetare din Geneva s-a născut World Wide Web? (sigla)", answer: ["cern", "cernul"], explain: "La CERN, datorită lui Tim Berners-Lee." },
      { type: "mc", q: "În ce an a trimis ARPANET primul mesaj?", options: ["1959", "1969", "1991"], answer: 1, explain: "Pe 29 octombrie 1969, între UCLA și Stanford Research Institute." },
      { type: "tf", q: "Cea mai mare parte a datelor dintre continente călătorește prin cablurile submarine.", answer: true, explain: "Peste 95% din traficul intercontinental trece prin cablurile din fibră optică de pe fundul oceanelor." }
    ]
  }
});
