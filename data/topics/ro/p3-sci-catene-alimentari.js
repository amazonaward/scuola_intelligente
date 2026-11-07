TOPIC('ro', {
  id: "p3-sci-catene-alimentari",
  title: "Lanțurile trofice",
  intro: `În natură toți mănâncă pe cineva… sau ceva! Iarba este mâncată de iepure, iepurele de vulpe. Aceste trepte formează un <b>lanț trofic</b>. Să descoperim cine sunt <b>producătorii</b>, <b>consumatorii</b> și <b>descompunătorii</b> și de ce este important fiecare.`,
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Cine pe cine mănâncă?",
      html: `<p>Orice ființă vie are nevoie de <b>energie</b> ca să crească, să se miște și să trăiască. Această energie vine din <b>hrană</b>.</p>
<p>Dacă punem la rând cine pe cine mănâncă, obținem un <b>lanț trofic</b>. Iată un exemplu dintr-o pajiște:</p>
<p style="font-size:1.2em">🌿 iarbă → 🐰 iepure → 🦊 vulpe</p>
<p>Săgeata se citește <b>„este mâncat de”</b>: iarba este mâncată de iepure, iepurele este mâncat de vulpe. Săgeata arată drumul pe care îl face energia.</p>`
    },
    {
      type: "text",
      title: "Pasul 1: producătorii",
      html: `<p>La începutul <b>fiecărui</b> lanț trofic se află întotdeauna o <b>plantă</b> (sau o algă). Plantele sunt <b>producătorii</b>: își <b>fabrică singure</b> hrana!</p>
<ul>
<li>Captează <b>lumina Soarelui</b> cu frunzele verzi;</li>
<li>iau din sol <b>apa</b> și sărurile minerale cu ajutorul rădăcinilor;</li>
<li>iau <b>dioxidul de carbon</b> din aer;</li>
<li>cu toate acestea produc <b>zaharuri</b> (hrana lor) și eliberează <b>oxigen</b>.</li>
</ul>
<p>Această „muncă” se numește <b>fotosinteză</b>, ceea ce înseamnă „a pune laolaltă cu ajutorul luminii”.</p>`
    },
    {
      type: "text",
      title: "Pasul 2: consumatorii",
      html: `<p>Animalele nu știu să-și fabrice hrana: trebuie să <b>mănânce</b> plante sau alte animale. De aceea se numesc <b>consumatori</b>.</p>
<ul>
<li><b>Ierbivore</b> (consumatori primari): mănâncă doar vegetale. Exemple: iepurele, vaca, lăcusta, omida, cerbul.</li>
<li><b>Carnivore</b> (consumatori secundari și terțiari): mănâncă alte animale. Exemple: vulpea, lupul, vulturul, păianjenul, leul.</li>
<li><b>Omnivore</b>: mănâncă atât vegetale, cât și animale. Exemple: ursul, mistrețul, ariciul, găina… și noi, oamenii!</li>
</ul>
<p>Carnivorul care se află în vârf și nu este mâncat de niciun alt animal se numește <b>super-prădător</b> (de exemplu vulturul de munte sau balena ucigașă).</p>`
    },
    {
      type: "text",
      title: "Pasul 3: descompunătorii",
      html: `<p>Ce se întâmplă cu frunzele căzute, cu animalele moarte, cu excrementele animalelor? Se ocupă de ele <b>descompunătorii</b>: <b>ciupercile</b>, <b>bacteriile</b> și animale mici precum <b>râmele</b>.</p>
<p>Ei mănâncă resturile și le „desfac” în bucățele foarte mici: <b>sărurile minerale</b>. Acestea se întorc în sol, iar rădăcinile plantelor le absorb din nou.</p>
<p>Astfel lanțul devine un <b>cerc</b>: nimic nu se irosește! Descompunătorii sunt „<b>gunoierii</b>” și „<b>reciclatorii</b>” naturii.</p>`
    },
    {
      type: "svg",
      title: "Cercul vieții într-o pajiște",
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="fa" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#334155"/></marker></defs>
<rect width="600" height="340" fill="#ecfccb"/>
<circle cx="545" cy="45" r="30" fill="#facc15"/>
<text x="545" y="95" font-size="14" text-anchor="middle" fill="#92400e">Soarele</text>
<path d="M515 60 L420 100" stroke="#f59e0b" stroke-width="4" stroke-dasharray="8 6" marker-end="url(#fa)"/>
<rect x="330" y="105" width="130" height="60" rx="14" fill="#22c55e"/>
<text x="395" y="132" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">🌿 Iarba</text>
<text x="395" y="153" font-size="13" text-anchor="middle" fill="#ffffff">PRODUCĂTOR</text>
<rect x="60" y="105" width="150" height="60" rx="14" fill="#f97316"/>
<text x="135" y="132" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">🐰 Iepurele</text>
<text x="135" y="153" font-size="13" text-anchor="middle" fill="#ffffff">IERBIVOR</text>
<rect x="60" y="235" width="150" height="60" rx="14" fill="#dc2626"/>
<text x="135" y="262" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">🦊 Vulpea</text>
<text x="135" y="283" font-size="13" text-anchor="middle" fill="#ffffff">CARNIVOR</text>
<rect x="320" y="235" width="160" height="60" rx="14" fill="#92400e"/>
<text x="400" y="262" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">🍄🪱 Ciuperci, viermi</text>
<text x="400" y="283" font-size="13" text-anchor="middle" fill="#ffffff">DESCOMPUNĂTORI</text>
<path d="M328 135 L216 135" stroke="#334155" stroke-width="4" marker-end="url(#fa)"/>
<path d="M135 167 L135 229" stroke="#334155" stroke-width="4" marker-end="url(#fa)"/>
<path d="M212 265 L314 265" stroke="#334155" stroke-width="4" marker-end="url(#fa)"/>
<path d="M400 233 L400 171" stroke="#334155" stroke-width="4" marker-end="url(#fa)"/>
<text x="272" y="125" font-size="13" text-anchor="middle" fill="#334155">este mâncată de</text>
<text x="70" y="205" font-size="13" fill="#334155">este mâncat de</text>
<text x="262" y="255" font-size="13" text-anchor="middle" fill="#334155">când moare</text>
<text x="490" y="205" font-size="13" text-anchor="middle" fill="#334155">săruri minerale</text>
<text x="490" y="222" font-size="13" text-anchor="middle" fill="#334155">în sol</text>
</svg>`,
      caption: "Săgețile arată călătoria energiei și a materiei: de la Soare la plante, la animale, la descompunători și din nou la plante."
    },
    {
      type: "quiz",
      title: "Mini-test: producători și consumatori",
      questions: [
        { type: "mc", q: "Cine se află întotdeauna la începutul unui lanț trofic?", options: ["Un carnivor", "O plantă (un producător)", "O ciupercă"], answer: 1, explain: "Plantele își fabrică hrana cu lumina Soarelui: sunt producătorii, prima verigă." },
        { type: "mc", q: "Vaca mănâncă doar iarbă. Este un…", options: ["ierbivor", "carnivor", "descompunător"], answer: 0, explain: "Cine mănâncă doar vegetale este un ierbivor (consumator primar)." },
        { type: "tf", q: "Ciupercile și râmele sunt descompunători.", answer: true, explain: "Ele transformă resturile de plante și de animale în săruri minerale pentru sol." }
      ]
    },
    {
      type: "widget",
      title: "Joc: în ce grup intră?",
      widget: "classify",
      caption: "Pune fiecare ființă vie în grupul potrivit.",
      options: {
        groups: ["🌿 Producători", "🐰 Ierbivore", "🦊 Carnivore", "🐻 Omnivore", "🍄 Descompunători"],
        items: [
          ["🌳 stejar", 0], ["🌾 grâu", 0], ["🟢 algă", 0],
          ["🐄 vacă", 1], ["🐛 omidă", 1], ["🦌 cerb", 1],
          ["🐺 lup", 2], ["🦅 vultur", 2], ["🕷️ păianjen", 2],
          ["🐻 urs", 3], ["🐗 mistreț", 3],
          ["🍄 ciupercă", 4], ["🪱 râmă", 4]
        ]
      }
    },
    {
      type: "svg",
      title: "Piramida energiei",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<polygon points="300,20 350,85 250,85" fill="#dc2626"/>
<polygon points="250,85 350,85 400,150 200,150" fill="#f97316"/>
<polygon points="200,150 400,150 450,215 150,215" fill="#facc15"/>
<polygon points="150,215 450,215 500,280 100,280" fill="#22c55e"/>
<text x="300" y="75" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">🦅</text>
<text x="300" y="125" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">🐍 șerpi</text>
<text x="300" y="190" font-size="15" text-anchor="middle" fill="#78350f" font-weight="bold">🐭 șoareci</text>
<text x="300" y="255" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">🌾 plante și semințe</text>
<text x="515" y="60" font-size="14" fill="#991b1b">foarte puțini</text>
<text x="525" y="270" font-size="14" fill="#166534">foarte mulți</text>
<text x="20" y="60" font-size="14" fill="#334155">1 kg</text>
<text x="20" y="125" font-size="14" fill="#334155">10 kg</text>
<text x="20" y="190" font-size="14" fill="#334155">100 kg</text>
<text x="20" y="255" font-size="14" fill="#334155">1000 kg</text>
<text x="300" y="308" font-size="14" text-anchor="middle" fill="#334155">La fiecare treaptă trece doar aproximativ 1/10 din energie</text>
</svg>`,
      caption: "Pentru a crește 1 kg de vultur sunt necesari mulți șerpi, foarte mulți șoareci și un munte de plante (numere rotunjite)."
    },
    {
      type: "text",
      title: "De ce sunt puține animale în vârf?",
      html: `<p>Când un animal mănâncă, folosește aproape toată energia din hrană ca să <b>trăiască</b>: să respire, să alerge, să se încălzească. Doar o mică parte (aproximativ <b>o zecime</b>) devine corpul lui și trece la cel care îl va mânca.</p>
<p>De aceea plantele sunt foarte numeroase, ierbivorele ceva mai puține, carnivorele puține, iar super-prădătorii foarte puțini. Dacă desenăm aceste numere în trepte, obținem o <b>piramidă trofică</b> (sau piramidă ecologică).</p>`
    },
    {
      type: "3d",
      title: "Piramida trofică în 3D",
      scene: "solid",
      options: { shape: "pyramid", n: 4, r: 1.2, h: 1.3, color: "#22c55e", labels: false },
      caption: "Imaginează-ți piramida împărțită în 4 etaje: baza lată sunt plantele, vârful îngust sunt super-prădătorii. Rotește-o și gândește-te: câte „cărămizi” de iarbă trebuie ca să țină vârful sus?"
    },
    {
      type: "text",
      title: "Rețelele trofice",
      html: `<p>În natură lucrurile sunt mai împletite. Iepurele este mâncat de vulpe, dar și de vultur și de lup. Vulpea mănâncă iepuri, dar și șoareci, ouă și fructe. Multele lanțuri se încrucișează și formează o <b>rețea trofică</b>, ca o pânză de păianjen.</p>
<p>Dacă o verigă dispare, toată rețeaua are de suferit. De exemplu: dacă se elimină toate vulpile, iepurii se înmulțesc prea mult, mănâncă toată iarba… și în cele din urmă rămân fără hrană chiar și iepurii.</p>`
    },
    {
      type: "widget",
      title: "Construiește lanțul: cine urmează?",
      widget: "match",
      options: {
        pairs: [
          ["🌾 grâu", "🐭 șoarece"],
          ["🐭 șoarece", "🐍 șarpe"],
          ["🍃 frunză de dud", "🐛 vierme de mătase"],
          ["🦗 lăcustă", "🐸 broască"],
          ["🟢 alge marine", "🦐 crustacee mici"],
          ["🦐 krill", "🐋 balenă"]
        ]
      },
      caption: "Potrivește fiecare ființă vie cu cea care o mănâncă (următoarea verigă din lanț)."
    },
    {
      type: "example",
      title: "Exemplu practic: un lanț în mare",
      html: `<p>Și în mare prima verigă este un producător: <b>fitoplanctonul</b>, alge minuscule care plutesc și fac fotosinteză.</p>
<p style="font-size:1.1em">🟢 fitoplancton → 🦐 zooplancton (crustacee mici) → 🐟 hamsie → 🐟 ton → 🦈 rechin</p>
<p>Fitoplanctonul produce și <b>aproximativ jumătate din oxigenul</b> pe care îl respirăm pe Pământ!</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: lanțul din farfuria ta",
      html: `<p>Și tu faci parte din lanțuri trofice. Gândește-te la gustare:</p>
<ul>
<li>🌾 grâu → 🍞 pâine → 🧒 <b>tu</b>: ești consumator primar (mănânci un vegetal).</li>
<li>🌱 iarbă → 🐄 vacă → 🥛 lapte → 🧒 <b>tu</b>: ești consumator secundar.</li>
</ul>
<p>Și coaja de măr care ajunge în <b>compost</b>? Acolo râmele, ciupercile și bacteriile o transformă în pământ bun pentru grădină: descompunătorii la lucru în curte!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că… cel mai mare animal mănâncă dintre cele mai mici?",
      html: `<p><b>Balena albastră</b>, lungă de până la aproximativ 30 de metri, este cel mai mare animal care a existat vreodată. Și totuși mănâncă mai ales <b>krill</b>, creveți lungi de câțiva centimetri! Filtrează câteva tone pe zi, deschizând gura și reținându-i cu fanoanele, ca printr-o sită uriașă.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că… există plante „carnivore”?",
      html: `<p><b>Dionaea</b> (sau capcana-muștelor) are frunze în formă de capcană care se închid brusc atunci când un insect le atinge. Și în Italia trăiesc plante carnivore, precum <b>roua-cerului</b> (Drosera) din turbăriile de munte. Totuși și ele fac fotosinteză: insectele servesc doar ca „supliment” de săruri minerale, pentru că ele trăiesc în soluri sărace.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că… în parcul Yellowstone lupii au salvat râurile?",
      html: `<p>În Statele Unite, în parcul Yellowstone, lupii fuseseră eliminați. Cerbii s-au înmulțit foarte mult și au mâncat puieții de copaci de pe malurile râurilor. În <b>1995</b> lupii au fost readuși în parc: cerbii s-au împuținat și și-au schimbat obiceiurile, copacii au putut să crească din nou în multe zone și s-au întors păsările și castorii. O singură verigă poate schimba toată rețeaua!</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege lanțul trofic",
      intro: "Dacă săgețile te încurcă, încearcă unul dintre aceste moduri diferite de a privi aceeași idee.",
      tabs: [
        {
          label: "🔋 Ca bateriile",
          html: `<p>Imaginează-ți energia ca pe o <b>baterie</b>. Soarele încarcă plantele. Iepurele mănâncă iarba și preia încărcătura ei, dar o consumă aproape toată ca să sară și să se încălzească. La vulpe ajunge doar o bucățică de încărcătură.</p>
<p>Iată de ce săgeata merge <b>de la cel mâncat la cel care mănâncă</b>: urmărește încărcătura care trece din mână în mână, ca într-o ștafetă.</p>`
        },
        {
          label: "🇬🇧 Cum se spune în engleză",
          html: `<p>În școlile englezești se vorbește despre <b>food chain</b> (lanț) și <b>food web</b> (rețea, pânză de păianjen). Rolurile se numesc:</p>
<ul>
<li><b>Producer</b> = producător (cel care produce);</li>
<li><b>Consumer</b> = consumator (cel care consumă);</li>
<li><b>Decomposer</b> = descompunător;</li>
<li><b>Predator</b> și <b>prey</b> = prădător și pradă.</li>
</ul>
<p>În multe școli americane se face un joc: fiecare copil are un cartonaș (iarbă, iepure, vulpe…) și se leagă unii de alții cu un <b>ghem de lână</b>. La final se vede o adevărată pânză de păianjen! Dacă unul dă drumul firului, toată rețeaua se slăbește.</p>`
        },
        {
          label: "🧩 Joc de potrivire",
          html: `<p>Potrivește fiecare cuvânt cu definiția lui simplă.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Producător", "Își face hrana cu lumina"],
              ["Ierbivor", "Mănâncă doar vegetale"],
              ["Carnivor", "Mănâncă alte animale"],
              ["Omnivor", "Mănâncă de toate"],
              ["Descompunător", "Reciclează resturile în săruri minerale"]
            ]
          }
        },
        {
          label: "🌍 Lanțuri din toată lumea",
          html: `<p>Fiecare mediu de pe Pământ are lanțurile lui. Învârte globul:</p>
<ul>
<li><b>Savana africană</b>: iarbă → zebră → leu.</li>
<li><b>Arctica</b>: alge → krill și pești → focă → urs polar.</li>
<li><b>Australia</b>: frunze de eucalipt → koala (care mănâncă aproape doar frunze de acestea!).</li>
<li><b>Alpii</b>: iarbă → capră neagră → vultur de munte.</li>
<li><b>Amazonia</b>: fructe → maimuță → jaguar.</li>
</ul>`,
          scene: "globe",
          options: {
            points: [
              { lat: -2.3, lon: 34.8, label: "Savana: iarbă → zebră → leu", color: "#f59e0b" },
              { lat: 78, lon: 16, label: "Arctica: krill → focă → urs polar", color: "#0ea5e9" },
              { lat: -27, lon: 152, label: "Australia: eucalipt → koala", color: "#22c55e" },
              { lat: 46.5, lon: 10.5, label: "Alpii: iarbă → capră neagră → vultur", color: "#a855f7" },
              { lat: -3.5, lon: -62, label: "Amazonia: fructe → maimuță → jaguar", color: "#16a34a" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Hartă: de unde vine energia? Atinge nodurile",
      nodes: [
        { id: "sole", label: "☀️ Soarele", x: 50, y: 6, color: "#f59e0b", html: "Sursa aproape a întregii energii de pe Pământ.", why: "În Soare hidrogenul se transformă în heliu și eliberează o cantitate enormă de energie, care ajunge la noi sub formă de lumină și căldură în aproximativ 8 minute. Fără Soare plantele nu ar putea produce hrană și toate lanțurile s-ar opri." },
        { id: "foto", label: "Fotosinteza", x: 20, y: 24, color: "#84cc16", html: "Plantele folosesc lumina, apa și dioxidul de carbon ca să facă zaharuri și oxigen.", why: "A fost descoperită pas cu pas: în 1779 medicul olandez Jan Ingenhousz a demonstrat că plantele eliberează oxigen doar la lumină. Partea verde a frunzelor, clorofila, captează lumina." },
        { id: "prod", label: "🌿 Producători", x: 50, y: 30, color: "#22c55e", html: "Plante și alge: prima verigă a fiecărui lanț.", why: "Sunt singurii care știu să transforme lumina în hrană. De aceea se numesc „autotrofi”, din greacă „care se hrănesc singuri”." },
        { id: "erb", label: "🐰 Ierbivore", x: 30, y: 52, color: "#f97316", html: "Consumatori primari: mănâncă producătorii.", why: "Au dinți plați pentru măcinat și un intestin lung, pentru că vegetalele sunt greu de digerat. Vaca are chiar un stomac împărțit în 4 compartimente!" },
        { id: "carn", label: "🦊 Carnivore", x: 55, y: 70, color: "#dc2626", html: "Consumatori secundari și terțiari: mănâncă alte animale.", why: "Au dinți ascuțiți (canini) ca să prindă prada și simțuri foarte dezvoltate pentru vânătoare. Țin sub control numărul ierbivorelor." },
        { id: "super", label: "🦅 Super-prădători", x: 85, y: 55, color: "#7f1d1d", html: "Se află în vârf: niciun animal nu vânează adulții lor.", why: "Sunt puțini pentru că la fiecare treaptă se pierde aproximativ 90% din energie. Această regulă a „celor 10 la sută” a fost descrisă de ecologul american Raymond Lindeman în 1942." },
        { id: "dec", label: "🍄 Descompunători", x: 25, y: 88, color: "#92400e", html: "Ciupercile, bacteriile și râmele reciclează resturile.", why: "Bacteriile au fost văzute pentru prima dată în 1676 de Antoni van Leeuwenhoek cu un microscop făcut de el. Fără descompunători lumea ar fi acoperită de frunze și resturi, iar solul și-ar pierde sărurile minerale." },
        { id: "rete", label: "🕸️ Rețea trofică", x: 80, y: 88, color: "#6366f1", html: "Multe lanțuri împletite într-un mediu.", why: "Fiecare animal mănâncă mai multe lucruri și este mâncat de mai mulți prădători. Cuvântul „ecosistem”, pentru ansamblul format din viețuitoare și mediu, a fost inventat în 1935 de botanistul englez Arthur Tansley." }
      ],
      edges: [
        ["sole", "foto", "lumină pentru"],
        ["foto", "prod", "hrănește"],
        ["prod", "erb", "mâncați de"],
        ["erb", "carn", "mâncate de"],
        ["carn", "super", "mâncate de"],
        ["carn", "dec", "resturi pentru"],
        ["dec", "prod", "săruri minerale pentru"],
        ["carn", "rete", "se împletesc într-o"]
      ]
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>Un <b>lanț trofic</b> arată cine pe cine mănâncă; săgeata înseamnă „este mâncat de”.</li>
<li>La început sunt <b>producătorii</b> (plante și alge), care își fac hrana cu lumina Soarelui.</li>
<li><b>Consumatorii</b> pot fi <b>ierbivori</b>, <b>carnivori</b> sau <b>omnivori</b>.</li>
<li><b>Descompunătorii</b> reciclează resturile și dau înapoi solului sărurile minerale.</li>
<li>Multe lanțuri împletite formează o <b>rețea trofică</b>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: rețeaua vieții",
      questions: [
        { type: "order", q: "Pune în ordine lanțul trofic din mare.", items: ["Fitoplancton", "Zooplancton", "Hamsie", "Ton"], explain: "Se pornește de la producător (fitoplancton) și se urcă până la cel mai mare prădător." },
        { type: "mc", q: "Dacă într-o pădure ar dispărea toate vulpile, ce s-ar întâmpla la început cu iepurii?", options: ["Ar scădea ca număr", "Ar crește ca număr", "Nu s-ar schimba nimic"], answer: 1, explain: "Fără prădătorul lor, iepurii s-ar înmulți, apoi ar mânca prea multă iarbă." },
        { type: "tf", q: "În vârful piramidei trofice sunt mai multe animale decât la bază.", answer: false, explain: "Este invers: la bază sunt foarte mulți producători, în vârf foarte puțini prădători." }
      ]
    }
  ],
  glossary: [
    { t: "Lanț trofic", d: "Succesiune de ființe vii în care fiecare este hrană pentru următoarea." },
    { t: "Rețea trofică", d: "Ansamblul multor lanțuri trofice împletite într-un mediu." },
    { t: "Producător", d: "Plantă sau algă care își fabrică hrana cu lumina Soarelui." },
    { t: "Fotosinteză", d: "Proces prin care plantele folosesc lumina, apa și dioxidul de carbon pentru a produce zaharuri și oxigen." },
    { t: "Consumator", d: "Animal care se hrănește cu alte ființe vii." },
    { t: "Ierbivor", d: "Animal care mănâncă doar vegetale." },
    { t: "Carnivor", d: "Animal care mănâncă alte animale." },
    { t: "Omnivor", d: "Animal care mănâncă atât vegetale, cât și animale." },
    { t: "Descompunător", d: "Ciupercă, bacterie sau animal mic care transformă resturile în săruri minerale." },
    { t: "Super-prădător", d: "Animal aflat în vârful lanțului, care ca adult nu are dușmani naturali." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Ce indică săgeata într-un lanț trofic (iarbă → iepure)?", options: ["„mănâncă”", "„este mâncat de”", "„este prieten cu”"], answer: 1, explain: "Se citește „iarba este mâncată de iepure”: săgeata urmează drumul energiei." },
      { type: "mc", q: "De ce au nevoie plantele pentru a face fotosinteză?", options: ["Lumină, apă și dioxid de carbon", "Carne și oxigen", "Doar pământ"], answer: 0, explain: "Cu lumină, apă și dioxid de carbon plantele produc zaharuri și eliberează oxigen." },
      { type: "text", q: "Cum se numesc ființele vii care își fabrică singure hrana?", answer: ["producători", "producătorii", "producător", "producatori", "producatorii"], explain: "Sunt producătorii: plantele și algele." },
      { type: "mc", q: "Care dintre aceste animale este un omnivor?", options: ["Cerbul", "Ursul", "Vulturul"], answer: 1, explain: "Ursul mănâncă fructe, rădăcini, miere, pești și animale mici." },
      { type: "tf", q: "Ciupercile sunt descompunători.", answer: true, explain: "Multe ciuperci se hrănesc cu frunze și lemn mort și le transformă în săruri minerale." },
      { type: "order", q: "Pune în ordine lanțul trofic.", items: ["🌾 grâu", "🐭 șoarece", "🐍 șarpe", "🦅 vultur"], explain: "Grâu (producător) → șoarece (ierbivor) → șarpe (carnivor) → vultur (super-prădător)." },
      { type: "mc", q: "Lupul, care mănâncă cerbi și iepuri de câmp, este un…", options: ["producător", "ierbivor", "carnivor"], answer: 2, explain: "Mănâncă alte animale, deci este un carnivor." },
      { type: "tf", q: "Un lanț trofic poate începe cu un animal carnivor.", answer: false, explain: "Fiecare lanț începe cu un producător (plantă sau algă), pentru că numai ei transformă lumina în hrană." },
      { type: "mc", q: "De ce sunt puține animale în vârful piramidei trofice?", options: ["Pentru că la fiecare trecere se pierde o mare parte din energie", "Pentru că prădătorii sunt leneși", "Pentru că ei mănâncă doar iarbă"], answer: 0, explain: "Doar aproximativ 1/10 din energie trece de la o treaptă la următoarea, așa că rămâne puțină pentru cel din vârf." },
      { type: "mc", q: "Care este producătorul din lanțul din mare?", options: ["Tonul", "Fitoplanctonul", "Rechinul"], answer: 1, explain: "Fitoplanctonul este format din alge microscopice care fac fotosinteză." },
      { type: "text", q: "Cum se numește ansamblul multor lanțuri trofice împletite?", answer: ["rețea trofică", "rețeaua trofică", "rețea", "o rețea trofică", "retea trofica", "reteaua trofica"], explain: "Se numește rețea trofică, pentru că seamănă cu o pânză de păianjen." },
      { type: "mc", q: "Ce se întâmplă cu sărurile minerale produse de descompunători?", options: ["Dispar", "Sunt absorbite din nou de rădăcinile plantelor", "Se transformă în lumină"], answer: 1, explain: "Se întorc în sol și plantele le refolosesc: astfel cercul se închide." }
    ]
  }
});
