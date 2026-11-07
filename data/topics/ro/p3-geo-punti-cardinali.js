TOPIC('ro', {
  id: "p3-geo-punti-cardinali",
  title: "Punctele cardinale",
  intro: `Ca să nu ne rătăcim și ca să explicăm unde se află un loc, folosim patru direcții speciale: <b>Nord</b>, <b>Est</b>, <b>Sud</b> și <b>Vest</b>. Sunt <b>punctele cardinale</b>. Să învățăm să le găsim cu <b>Soarele</b>, cu <b>stelele</b> și cu <b>busola</b> și să le citim pe hărți.`,
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Dreapta și stânga nu ajung",
      html: `<p>Dacă îi spui unui prieten „școala este în dreapta”, el trebuie să știe încotro ești întors tu. Dacă vă întoarceți, dreapta se schimbă! Dreapta, stânga, în față și în spate sunt <b>repere relative</b>: depind de cum suntem întorși.</p>
<p><b>Punctele cardinale</b>, în schimb, sunt <b>mereu aceleași</b>, pentru toți, în orice parte a lumii:</p>
<ul>
<li><b>Nord</b> (N), numit și <b>Miazănoapte</b> (în italiană <i>Settentrione</i>);</li>
<li><b>Sud</b> (S), numit și <b>Miazăzi</b> (în italiană <i>Meridione</i> sau <i>Mezzogiorno</i>);</li>
<li><b>Est</b> (E), numit și <b>Răsărit</b> (în italiană <i>Oriente</i> sau <i>Levante</i>);</li>
<li><b>Vest</b> (V), numit și <b>Apus</b> (în italiană <i>Occidente</i> sau <i>Ponente</i>).</li>
</ul>
<p>„Cardinal” vine din latinescul <i>cardo</i>, balama: sunt direcțiile „balama” pe care se învârte toată orientarea.</p>`
    },
    {
      type: "text",
      title: "Pasul 1: Soarele ne arată drumul",
      html: `<p>Cea mai veche metodă de orientare este să te uiți la <b>Soare</b>:</p>
<ul>
<li>🌅 dimineața Soarele <b>răsare</b> la <b>Est</b> (de aceea Estul se numește și Răsărit);</li>
<li>☀️ la amiază, în Italia, Soarele este la <b>Sud</b> (de aceea Sudul se numește și Miazăzi, adică „mijlocul zilei”);</li>
<li>🌇 seara Soarele <b>apune</b> la <b>Vest</b> (Apusul: unde Soarele „se duce la culcare”, adică coboară);</li>
<li>🌙 <b>Nordul</b> este direcția în care Soarele, la noi, nu trece niciodată.</li>
</ul>
<p>De fapt Soarele răsare exact la Est și apune exact la Vest doar două zile pe an, la <b>echinocții</b> (pe la 21 martie și 23 septembrie). Vara răsare ceva mai spre Nord-Est, iar iarna mai spre Sud-Est.</p>`
    },
    {
      type: "svg",
      title: "Călătoria Soarelui pe cer",
      svg: `<svg viewBox="0 0 600 310" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="310" fill="#e0f2fe"/>
<rect y="220" width="600" height="90" fill="#86efac"/>
<path d="M60 220 Q300 -20 540 220" stroke="#f59e0b" stroke-width="4" stroke-dasharray="10 8" fill="none"/>
<circle cx="70" cy="205" r="22" fill="#fb923c"/>
<circle cx="300" cy="62" r="26" fill="#facc15"/>
<circle cx="530" cy="205" r="22" fill="#f97316"/>
<text x="70" y="160" font-size="15" text-anchor="middle" fill="#9a3412" font-weight="bold">dimineața</text>
<text x="300" y="25" font-size="15" text-anchor="middle" fill="#854d0e" font-weight="bold">amiază</text>
<text x="530" y="160" font-size="15" text-anchor="middle" fill="#9a3412" font-weight="bold">seara</text>
<text x="70" y="255" font-size="20" text-anchor="middle" fill="#14532d" font-weight="bold">EST</text>
<text x="300" y="255" font-size="20" text-anchor="middle" fill="#14532d" font-weight="bold">SUD</text>
<text x="530" y="255" font-size="20" text-anchor="middle" fill="#14532d" font-weight="bold">VEST</text>
<circle cx="300" cy="285" r="10" fill="#1e293b"/>
<text x="318" y="292" font-size="14" fill="#1e293b">tu, privind spre Sud</text>
<text x="300" y="150" font-size="14" text-anchor="middle" fill="#334155">în spatele tău este NORDUL</text>
</svg>`,
      caption: "Dacă te uiți la Soare la amiază (în Italia) ai în față Sudul, în stânga Estul, în dreapta Vestul și în spate Nordul."
    },
    {
      type: "remember",
      title: "Trucul cu brațele",
      html: `<p>Dimineața stai cu <b>brațul drept</b> întins spre Soarele care răsare. Atunci:</p>
<ul>
<li>brațul <b>drept</b> arată <b>Estul</b>;</li>
<li>brațul <b>stâng</b> arată <b>Vestul</b>;</li>
<li><b>în fața</b> ta este <b>Nordul</b>;</li>
<li><b>în spatele</b> tău este <b>Sudul</b>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: Soarele și direcțiile",
      questions: [
        { type: "mc", q: "Unde răsare Soarele?", options: ["La Nord", "La Est", "La Vest"], answer: 1, explain: "Soarele răsare la Est, de aceea Estul se numește și Răsărit." },
        { type: "mc", q: "Cum se mai numește Vestul?", options: ["Apus sau Occident", "Miazăzi", "Miazănoapte"], answer: 0, explain: "Apus, pentru că acolo Soarele apune." },
        { type: "tf", q: "Dreapta și stânga sunt la fel pentru toți, ca punctele cardinale.", answer: false, explain: "Dreapta și stânga depind de cum ești întors; punctele cardinale nu." }
      ]
    },
    {
      type: "text",
      title: "Pasul 2: roza vânturilor",
      html: `<p>Între cele patru puncte cardinale sunt direcțiile <b>intermediare</b>:</p>
<ul>
<li><b>Nord-Est</b> (NE), între Nord și Est;</li>
<li><b>Sud-Est</b> (SE), între Sud și Est;</li>
<li><b>Sud-Vest</b> (SV), între Sud și Vest;</li>
<li><b>Nord-Vest</b> (NV), între Nord și Vest.</li>
</ul>
<p>Toate la un loc formează <b>roza vânturilor</b>. Se numește așa pentru că marinarii din Mediterana dădeau un nume <b>vântului</b> care vine din fiecare direcție: <b>Tramontana</b> dinspre Nord, <b>Grecale</b> dinspre Nord-Est, <b>Levante</b> dinspre Est, <b>Scirocco</b> dinspre Sud-Est, <b>Ostro</b> dinspre Sud, <b>Libeccio</b> dinspre Sud-Vest, <b>Ponente</b> dinspre Vest și <b>Maestrale</b> dinspre Nord-Vest (acestea sunt numele italienești ale vânturilor din Marea Mediterană).</p>`
    },
    {
      type: "widget",
      title: "Completează roza vânturilor",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#f8fafc"/>
<circle cx="300" cy="170" r="140" fill="#e0f2fe" stroke="#0369a1" stroke-width="3"/>
<polygon points="300,40 318,170 300,300 282,170" fill="#1e3a8a"/>
<polygon points="170,170 300,152 430,170 300,188" fill="#1e3a8a"/>
<polygon points="300,40 318,170 300,170" fill="#dc2626"/>
<polygon points="210,80 304,166 390,260 296,174" fill="#60a5fa" opacity="0.8"/>
<polygon points="390,80 304,174 210,260 296,166" fill="#60a5fa" opacity="0.8"/>
<circle cx="300" cy="170" r="10" fill="#facc15" stroke="#1e293b" stroke-width="2"/>
</svg>`,
        spots: [
          { x: 300, y: 45, label: "Nord" },
          { x: 425, y: 170, label: "Est" },
          { x: 300, y: 295, label: "Sud" },
          { x: 175, y: 170, label: "Vest" },
          { x: 385, y: 85, label: "Nord-Est" },
          { x: 385, y: 255, label: "Sud-Est" },
          { x: 215, y: 255, label: "Sud-Vest" },
          { x: 215, y: 85, label: "Nord-Vest" }
        ]
      },
      caption: "Atinge fiecare vârf și alege numele potrivit. Vârful roșu arată Nordul. Ține minte ordinea în sensul acelor de ceasornic: N, E, S, V („Nu Ești Singur, Vino”)."
    },
    {
      type: "text",
      title: "Pasul 3: busola",
      html: `<p>Noaptea, când e înnorat sau într-o pădure, Soarele nu se vede. Atunci se folosește <b>busola</b>.</p>
<p>În busolă este un <b>ac magnetizat</b> (un magnet mic) liber să se rotească. Pământul se comportă ca un magnet uriaș: de aceea acul se întoarce mereu cu vârful colorat spre <b>Nord</b>.</p>
<p>Cum se folosește:</p>
<ol>
<li>ține busola <b>orizontal</b>, nemișcată, departe de obiecte de fier și de telefon;</li>
<li>așteaptă să se oprească acul;</li>
<li>rotește busola până când litera <b>N</b> de pe cadran este sub vârful colorat al acului;</li>
<li>acum poți citi toate direcțiile!</li>
</ol>
<p>Atenție: acul arată <b>Nordul magnetic</b>, care este puțin diferit de <b>Polul Nord geografic</b> și se mută încet în fiecare an. În Italia diferența este mică, de câteva grade.</p>`
    },
    {
      type: "3d",
      title: "Nordul și Sudul pe glob",
      scene: "globe",
      options: {
        points: [
          { lat: 90, lon: 0, label: "Polul Nord", color: "#dc2626" },
          { lat: -90, lon: 0, label: "Polul Sud", color: "#2563eb" },
          { lat: 86, lon: 140, label: "Polul Nord magnetic (aproximativ, se mută)", color: "#f97316" },
          { lat: 41.9, lon: 12.5, label: "Roma", color: "#16a34a" },
          { lat: 0, lon: -78.5, label: "Quito (la Ecuator)", color: "#a855f7" },
          { lat: -33.9, lon: 151.2, label: "Sydney", color: "#0ea5e9" }
        ],
        routes: [{ points: [3, 0], color: "#dc2626" }]
      },
      caption: "Rotește globul. Din orice punct, a merge spre Nord înseamnă a merge spre Polul Nord (linia roșie pornește de la Roma). Ecuatorul împarte Pământul în emisfera nordică și emisfera sudică."
    },
    {
      type: "text",
      title: "Pasul 4: punctele cardinale pe hărți",
      html: `<p>Pe aproape toate hărțile geografice <b>Nordul este sus</b>, <b>Sudul jos</b>, <b>Estul în dreapta</b> și <b>Vestul în stânga</b>. Adesea într-un colț este o mică roză a vânturilor sau o săgeată cu „N”.</p>
<p>Așa putem descrie unde se află locurile. De exemplu, în Italia:</p>
<ul>
<li><b>Alpii</b> sunt la <b>Nord</b>;</li>
<li><b>Sicilia</b> este la <b>Sud</b>;</li>
<li><b>Marea Adriatică</b> este la <b>Est</b> de peninsulă;</li>
<li><b>Marea Tireniană</b> este la <b>Vest</b>;</li>
<li><b>Piemontul</b> este la <b>Nord-Vest</b>, <b>Puglia</b> la <b>Sud-Est</b>.</li>
</ul>
<p>De aceea spunem „Italia de nord” (Nordul), „centrală” și „de sud” (Sudul).</p>`
    },
    {
      type: "svg",
      title: "Italia și punctele cardinale",
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#bae6fd"/>
<path d="M150 40 L330 30 L350 60 L330 90 L300 95 L320 140 L370 190 L420 215 L450 240 L430 250 L400 235 L395 260 L370 285 L355 270 L360 245 L330 215 L290 185 L260 150 L230 110 L200 95 L170 80 Z" fill="#86efac" stroke="#166534" stroke-width="3"/>
<path d="M320 300 L380 295 L370 325 L330 330 Z" fill="#86efac" stroke="#166534" stroke-width="3"/>
<path d="M190 190 L220 185 L225 250 L195 255 Z" fill="#86efac" stroke="#166534" stroke-width="3"/>
<text x="240" y="62" font-size="15" fill="#14532d" font-weight="bold">Alpii</text>
<text x="350" y="322" font-size="13" fill="#14532d" font-weight="bold">Sicilia</text>
<text x="160" y="275" font-size="13" fill="#14532d" font-weight="bold">Sardinia</text>
<text x="400" y="140" font-size="15" fill="#0c4a6e" font-weight="bold">Marea Adriatică</text>
<text x="220" y="300" font-size="15" fill="#0c4a6e" font-weight="bold">Marea Tireniană</text>
<circle cx="170" cy="70" r="6" fill="#dc2626"/><text x="100" y="60" font-size="13" fill="#7f1d1d" font-weight="bold">Torino</text>
<g transform="translate(520,80)">
<circle r="45" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
<polygon points="0,-38 7,0 0,38 -7,0" fill="#1e3a8a"/>
<polygon points="-38,0 0,-7 38,0 0,7" fill="#1e3a8a"/>
<polygon points="0,-38 7,0 0,0" fill="#dc2626"/>
<text y="-50" font-size="16" text-anchor="middle" font-weight="bold" fill="#dc2626">N</text>
<text y="64" font-size="16" text-anchor="middle" font-weight="bold">S</text>
<text x="56" y="6" font-size="16" text-anchor="middle" font-weight="bold">E</text>
<text x="-56" y="6" font-size="16" text-anchor="middle" font-weight="bold">V</text>
</g>
</svg>`,
      caption: "Desen simplificat (fără scară). Cu roza vânturilor în colț, poți spune că Torino este la Nord-Vest și Sicilia la Sud."
    },
    {
      type: "example",
      title: "Exemplu practic: orientarea în sala ta de clasă",
      html: `<p>Încearcă acest experiment la școală:</p>
<ol>
<li>Într-o dimineață însorită, uită-te pe ce fereastră intră lumina: peretele acela privește mai mult sau mai puțin spre <b>Est</b>.</li>
<li>Scrie un carton „EST” și lipește-l pe acel perete.</li>
<li>Pe peretele opus lipește „VEST”.</li>
<li>Așază-te cu spatele la Vest, privind spre Est: în <b>stânga</b> ta este <b>Nordul</b>, în <b>dreapta</b> ta <b>Sudul</b>.</li>
<li>Verifică cu o busolă (sau cu aplicația busolă a unui telefon, cu ajutorul învățătoarei): ai avut dreptate?</li>
</ol>
<p>Acum poți spune: „Tabla este la Nord, ușa la Vest…”.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: umbra unui băț",
      html: `<p>O metodă foarte veche de a găsi Nordul cu ajutorul Soarelui, numită <b>gnomon</b>:</p>
<ol>
<li>înfige un băț drept într-un teren plan și însorit, spre sfârșitul dimineții;</li>
<li>marchează cu o pietricică vârful <b>umbrei</b>;</li>
<li>așteaptă 15–20 de minute: umbra s-a mutat. Marchează noul vârf cu altă pietricică;</li>
<li>unește cele două pietricele cu o linie: primul semn este spre <b>Vest</b>, al doilea spre <b>Est</b>;</li>
<li>linia perpendiculară arată Nordul și Sudul. Spre amiază umbra bățului este cea mai scurtă și arată (în Italia) drept spre <b>Nord</b>.</li>
</ol>`
    },
    {
      type: "curiosity",
      title: "Știai că… busola a fost inventată în China?",
      html: `<p>Acum mai bine de 2000 de ani, în <b>China</b>, se folosea o lingură de <b>magnetit</b> (o piatră care atrage fierul) așezată pe o placă de bronz: mânerul se întorcea mereu spre <b>Sud</b>! Se numea <b>sinan</b>, „cel care arată sudul”. Oamenii de știință chinezi au descris acul magnetic pentru navigație în jurul anului <b>1100</b>; puțin mai târziu busola a ajuns și în Mediterana. La <b>Amalfi</b> există o statuie a lui Flavio Gioia, pe care o legendă îl arată drept inventator al busolei: astăzi se știe că marinarii din Amalfi au îmbunătățit-o, dar nu au inventat-o.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că… unele popoare nu spun niciodată „dreapta” și „stânga”?",
      html: `<p>În Australia, poporul aborigen care vorbește limba <b>Guugu Yimithirr</b> folosește doar punctele cardinale. Nu spun „ai o furnică pe piciorul stâng”, ci „ai o furnică pe piciorul dinspre Vest”! Chiar și copiii mici știu mereu unde este Nordul, chiar și într-o cameră fără ferestre.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că… „a se orienta” înseamnă „a privi spre Orient”?",
      html: `<p>În Evul Mediu multe hărți europene aveau <b>Estul (Orientul) sus</b>, spre Ierusalim și spre paradisul pământesc imaginat în Asia. A te întoarce spre Orient era modul de a găsi drumul: de aici cuvântul <b>orientare</b> (în română, „a se orienta”, din franceză, vine tot din <i>orient</i>)! Și multe biserici vechi sunt construite cu altarul spre Est.</p>`
    },
    {
      type: "widget",
      title: "Joc: potrivește numele cu direcția",
      widget: "match",
      options: {
        pairs: [
          ["Miazănoapte (Settentrione)", "Nord"],
          ["Miazăzi (Meridione)", "Sud"],
          ["Răsărit / Orient (Levante)", "Est"],
          ["Apus / Occident (Ponente)", "Vest"],
          ["Tramontana", "Vânt dinspre Nord"],
          ["Scirocco", "Vânt dinspre Sud-Est"]
        ]
      }
    },
    {
      type: "alternatives",
      title: "Alte moduri de a găsi Nordul",
      intro: "Nu ai busolă și Soarele nu te ajută? Iată alte metode, folosite în alte țări și în alte epoci.",
      tabs: [
        {
          label: "⭐ Steaua Polară",
          html: `<p>Noaptea, în emisfera noastră, se caută <b>Steaua Polară</b>. Este singura stea care pare <b>nemișcată</b> în timp ce celelalte se rotesc în jurul ei, pentru că se află aproape exact deasupra Polului Nord.</p>
<p>Cum o găsești: caută <b>Carul Mare</b> (șapte stele în formă de cățuie). Ia cele două stele de pe marginea cățuii, opuse mânerului, și prelungește distanța dintre ele de aproximativ <b>5 ori</b>: ajungi la Steaua Polară. Sub ea, la orizont, este <b>Nordul</b>.</p>
<p>În emisfera sudică (Australia, America de Sud) Steaua Polară nu se vede: se folosește constelația <b>Crucea Sudului</b>.</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#0f172a"/>
<g fill="#fde68a">
<circle cx="380" cy="200" r="6"/><circle cx="440" cy="210" r="6"/><circle cx="450" cy="160" r="6"/><circle cx="390" cy="150" r="6"/>
<circle cx="330" cy="140" r="5"/><circle cx="280" cy="150" r="5"/><circle cx="230" cy="180" r="5"/>
</g>
<path d="M380 200 L440 210 L450 160 L390 150 Z M390 150 L330 140 L280 150 L230 180" stroke="#94a3b8" stroke-width="2" fill="none"/>
<path d="M440 210 L450 160 L480 30" stroke="#f87171" stroke-width="2" stroke-dasharray="6 6" fill="none"/>
<circle cx="482" cy="28" r="9" fill="#ffffff"/>
<text x="495" y="34" font-size="16" fill="#ffffff" font-weight="bold">Steaua Polară</text>
<text x="330" y="250" font-size="16" fill="#e2e8f0" font-weight="bold">Carul Mare</text>
<text x="40" y="40" font-size="14" fill="#cbd5e1">prelungește de 5 ori →</text>
<rect y="265" width="600" height="15" fill="#14532d"/>
</svg>`
        },
        {
          label: "🇦🇺 Busola din corp",
          html: `<p>Ca vorbitorii de Guugu Yimithirr din Australia, încearcă o zi întreagă să <b>nu spui dreapta și stânga</b>, ci doar Nord, Sud, Est, Vest: „dă-mi creionul care e la Est de caiet”.</p>
<p>La început este greu, dar creierul învață să țină mereu minte unde sunt punctele cardinale, ca o busolă internă. Și multe animale au o „busolă”: <b>broaștele țestoase marine</b>, <b>porumbeii voiajori</b> și <b>păsările migratoare</b> simt câmpul magnetic al Pământului!</p>`
        },
        {
          label: "🧲 Construiește o busolă",
          html: `<p>Îți trebuie: un <b>ac</b> de cusut, un <b>magnet</b>, un dop de plută (sau o frunză), un castron cu apă.</p>
<ol>
<li>Freacă acul de magnet de aproximativ <b>30 de ori</b>, mereu în <b>aceeași direcție</b>: acul devine un mic magnet.</li>
<li>Așază acul pe dop și lasă dopul să plutească în apă.</li>
<li>Așteaptă: acul se va întoarce singur până va arăta linia <b>Nord–Sud</b>!</li>
</ol>
<p>Ca să înțelegi care capăt merge spre Nord, compară cu Soarele: la amiază Soarele este în partea opusă.</p>`
        },
        {
          label: "🌍 Nordul pe glob",
          html: `<p>Rotește globul: Nordul este mereu direcția spre <b>Polul Nord</b>, Estul este direcția în care se rotește Pământul (de aceea Soarele pare să răsară la Est). În Australia, în emisfera sudică, la amiază Soarele este la <b>Nord</b>, nu la Sud!</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 90, lon: 0, label: "N - Polul Nord", color: "#dc2626" },
              { lat: -90, lon: 0, label: "S - Polul Sud", color: "#2563eb" },
              { lat: 45, lon: 7.7, label: "Torino", color: "#16a34a" },
              { lat: -33.9, lon: 151.2, label: "Sydney: Soarele la amiază este la Nord", color: "#f97316" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Hartă: de unde vin punctele cardinale? Atinge nodurile",
      nodes: [
        { id: "rotazione", label: "🌍 Pământul se rotește", x: 50, y: 6, color: "#0ea5e9", html: "Pământul se rotește în jurul lui însuși de la Vest spre Est în aproximativ 24 de ore.", why: "Că Pământul se rotește, și nu cerul, au susținut Nicolaus Copernic (1543) și Galileo Galilei. În 1851 Léon Foucault a dovedit-o la Paris cu un enorm pendul care își schimbă încet direcția." },
        { id: "poli", label: "🧊 Polii", x: 20, y: 28, color: "#2563eb", html: "Cele două puncte prin care trece axa de rotație: Polul Nord și Polul Sud.", why: "Sunt singurele puncte de pe Pământ care nu se rotesc în cerc. Nordul și Sudul sunt definite chiar așa: direcția spre unul sau spre celălalt Pol." },
        { id: "sole", label: "☀️ Soarele răsare și apune", x: 50, y: 30, color: "#f59e0b", html: "Răsare la Est, apune la Vest.", why: "Soarele nu se mișcă în jurul nostru: noi, rotindu-ne cu Pământul spre Est, îl vedem apărând din acea parte. De aceea Estul și Vestul se numesc și Răsărit și Apus." },
        { id: "nsoe", label: "🧭 N, E, S, V", x: 80, y: 28, color: "#dc2626", html: "Cele patru puncte cardinale.", why: "Nord-Sud urmează axa Pământului, Est-Vest urmează sensul rotației: de aceea sunt perpendiculare și la fel pentru toți. Numele „cardinale” vine din latinescul cardo, balama." },
        { id: "rosa", label: "🌹 Roza vânturilor", x: 80, y: 58, color: "#ec4899", html: "8 (sau 16, sau 32) direcții cu numele vânturilor.", why: "Marinarii din Mediterana dădeau nume vânturilor după proveniența lor: Grecale din Grecia, Scirocco din Siria, Libeccio din Libia, Maestrale de la „vântul maestru”, adică cel mai puternic. Erau punctele de reper pentru navigație." },
        { id: "magnete", label: "🧲 Magnetismul terestru", x: 20, y: 58, color: "#7c3aed", html: "Pământul se comportă ca un magnet uriaș.", why: "În nucleul exterior al Pământului fierul topit se mișcă și generează un câmp magnetic. Primul care a intuit-o a fost medicul englez William Gilbert în 1600, în cartea „De Magnete”." },
        { id: "bussola", label: "🧭 Busola", x: 50, y: 70, color: "#16a34a", html: "Un ac magnetizat care se aliniază cu câmpul magnetic.", why: "Inventată în China (întâi pentru ghicit, apoi pentru navigație în jurul anului 1100), a ajuns în Europa în secolul al XII-lea și a permis marinarilor să navigheze chiar fără să vadă Soarele sau stelele." },
        { id: "carte", label: "🗺️ Hărțile cu Nordul sus", x: 50, y: 93, color: "#92400e", html: "Convenție: Nordul sus, Estul în dreapta.", why: "În spațiu nu există un „sus”: este o alegere. S-a răspândit odată cu navigatorii care foloseau busola, care arată spre Nord, și cu hărțile tipărite în Renaștere (precum cele ale lui Gerardus Mercator, 1569)." }
      ],
      edges: [
        ["rotazione", "poli", "în jurul axei dintre"],
        ["rotazione", "sole", "face să răsară și să apună"],
        ["poli", "nsoe", "dau Nordul și Sudul"],
        ["sole", "nsoe", "dă Estul și Vestul"],
        ["nsoe", "rosa", "se împart în"],
        ["magnete", "bussola", "întoarce acul"],
        ["bussola", "nsoe", "arată Nordul"],
        ["bussola", "carte", "duce la"]
      ]
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>Punctele cardinale sunt <b>Nord</b>, <b>Est</b>, <b>Sud</b>, <b>Vest</b> (în sensul acelor de ceasornic: „Nu Ești Singur, Vino”).</li>
<li>Soarele <b>răsare la Est</b>, la amiază în Italia este la <b>Sud</b>, <b>apune la Vest</b>.</li>
<li>Noaptea Nordul se găsește cu <b>Steaua Polară</b>.</li>
<li><b>Busola</b> are un ac magnetizat care arată Nordul.</li>
<li>Pe hărți <b>Nordul este sus</b>, Estul în dreapta, Sudul jos, Vestul în stânga.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: busolă și hărți",
      questions: [
        { type: "mc", q: "Încotro arată acul busolei?", options: ["Spre Nord", "Spre Soare", "Spre casă"], answer: 0, explain: "Acul magnetizat se aliniază cu câmpul magnetic terestru și arată spre Nord." },
        { type: "mc", q: "Pe o hartă geografică, Estul este de obicei…", options: ["sus", "în dreapta", "în stânga"], answer: 1, explain: "Nord sus, Est în dreapta, Sud jos, Vest în stânga." },
        { type: "order", q: "Pune punctele cardinale în sensul acelor de ceasornic, pornind de la Nord.", items: ["Nord", "Est", "Sud", "Vest"], explain: "N → E → S → V: „Nu Ești Singur, Vino”." }
      ]
    }
  ],
  glossary: [
    { t: "Puncte cardinale", d: "Cele patru direcții principale: Nord, Est, Sud, Vest." },
    { t: "A se orienta", d: "A înțelege unde te afli și în ce direcție să mergi." },
    { t: "Miazănoapte", d: "Alt nume al Nordului (în italiană Settentrione)." },
    { t: "Miazăzi", d: "Alt nume al Sudului (în italiană Meridione / Mezzogiorno)." },
    { t: "Răsărit / Orient", d: "Alte nume ale Estului, unde răsare Soarele (în italiană Levante / Oriente)." },
    { t: "Apus / Occident", d: "Alte nume ale Vestului, unde apune Soarele (în italiană Ponente / Occidente)." },
    { t: "Roza vânturilor", d: "Desen cu punctele cardinale și direcțiile intermediare, fiecare cu numele unui vânt." },
    { t: "Busolă", d: "Instrument cu un ac magnetizat care arată Nordul." },
    { t: "Steaua Polară", d: "Stea care se află aproape deasupra Polului Nord și arată direcția Nord." },
    { t: "Echinocțiu", d: "Zi în care ziua și noaptea au aceeași durată, iar Soarele răsare exact la Est." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care sunt cele patru puncte cardinale?", options: ["Nord, Sud, Est, Vest", "Dreapta, stânga, sus, jos", "Mare, munte, lac, râu"], answer: 0, explain: "Nord, Sud, Est și Vest." },
      { type: "mc", q: "Unde apune Soarele?", options: ["La Est", "La Vest", "La Nord"], answer: 1, explain: "La Vest, numit și Apus." },
      { type: "tf", q: "În Italia, la amiază, Soarele se află la Sud.", answer: true, explain: "De aceea Sudul se numește și Miazăzi (Mezzogiorno)." },
      { type: "text", q: "Cum se numește instrumentul cu ac magnetizat care arată Nordul?", answer: ["busolă", "busola", "o busolă"], explain: "Busola." },
      { type: "mc", q: "Cum se mai numește Nordul?", options: ["Miazăzi", "Miazănoapte", "Răsărit"], answer: 1, explain: "Miazănoapte (în italiană Settentrione); Sudul este Miazăzi." },
      { type: "mc", q: "Care stea arată Nordul noaptea?", options: ["Steaua Polară", "Soarele", "Sirius"], answer: 0, explain: "Steaua Polară, care se găsește cu ajutorul Carului Mare." },
      { type: "mc", q: "Care direcție se află între Sud și Vest?", options: ["Nord-Est", "Sud-Est", "Sud-Vest"], answer: 2, explain: "Sud-Vest (SV), de unde bate Libeccio." },
      { type: "tf", q: "Pe hărțile geografice Nordul este de obicei jos.", answer: false, explain: "De obicei Nordul este sus." },
      { type: "order", q: "Pune în ordine drumul Soarelui în timpul zilei (în Italia).", items: ["Răsare la Est", "La amiază este la Sud", "Apune la Vest"], explain: "Est → Sud → Vest." },
      { type: "mc", q: "Sicilia față de Piemont se află la…", options: ["Nord-Vest", "Sud-Est", "Nord-Est"], answer: 1, explain: "Piemontul este la Nord-Vest în Italia, Sicilia la Sud: față de Piemont este la Sud-Est." },
      { type: "mc", q: "Unde a fost inventată busola?", options: ["În China", "În America", "În Australia"], answer: 0, explain: "În China; apoi a ajuns în Mediterana în jurul secolului al XII-lea." },
      { type: "text", q: "Cum se numește vântul care bate dinspre Nord (în italiană)?", answer: ["tramontana", "la tramontana", "crivăț", "crivat"], explain: "Tramontana, vânt rece care vine „de dincolo de munți”." }
    ]
  }
});
