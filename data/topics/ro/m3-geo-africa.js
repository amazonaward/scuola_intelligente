TOPIC('ro', {
  id: "m3-geo-africa",
  title: "Africa",
  intro: "Africa este continentul unde s-a născut omenirea, cel cu cel mai mare deșert cald din lume (<b>Sahara</b>) și cu cel mai lung fluviu (<b>Nilul</b>), cu <b>54 de state</b> și peste <b>2000 de limbi</b>. Este și cel mai tânăr continent: vârsta medie este de aproximativ 19 ani. Să descoperim mediile, popoarele și provocările sale.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Continentul în cifre",
      html: `<ul>
<li><b>Suprafață</b>: aproximativ 30,4 milioane de km² (de circa 100 de ori Italia), al treilea continent ca întindere.</li>
<li><b>Locuitori</b>: aproximativ 1,5 miliarde, iar numărul lor crește rapid: potrivit ONU, în 2050 vor fi circa 2,5 miliarde.</li>
<li><b>State</b>: 54 recunoscute de ONU. Cel mai mare este <b>Algeria</b>; cel mai populat este <b>Nigeria</b> (peste 220 de milioane de locuitori).</li>
<li><b>Granițe naturale</b>: Marea Mediterană la nord (<b>Strâmtoarea Gibraltar</b> o desparte de Europa prin doar 14 km), Marea Roșie și Canalul Suez la nord-est, Oceanul Atlantic la vest, Oceanul Indian la est.</li>
</ul>
<p>Ecuatorul taie Africa aproape în două: de aceea climatele și mediile se repetă aproape <b>simetric</b> la nord și la sud.</p>`
    },
    {
      type: "text",
      title: "2. Teritoriul",
      html: `<p>Africa este mai ales un mare <b>podiș</b> străvechi: coastele sunt puțin crestate și există puține câmpii mari.</p>
<ul>
<li><b>Relief</b>: la nord-vest se află lanțul <b>Atlas</b>; la est <b>Rift Valley</b>, o ruptură uriașă lungă de mii de km, unde placa africană se desparte încet; acolo se înalță cei mai înalți vulcani, precum <b>Kilimanjaro</b> (5895 m, Tanzania), cel mai înalt vârf al Africii.</li>
<li><b>Fluvii</b>: <b>Nilul</b> (aproximativ 6650 km, spre Mediterana), <b>Congo</b> (al doilea fluviu din lume ca volum de apă), <b>Niger</b>, <b>Zambezi</b> cu cascada Victoria.</li>
<li><b>Lacuri</b>: în Rift Valley se găsesc lacuri mari, precum <b>Victoria</b> (cel mai mare din Africa) și <b>Tanganyika</b> (al doilea cel mai adânc din lume).</li>
<li><b>Insule</b>: cea mai mare este <b>Madagascar</b>, a patra insulă ca mărime din lume.</li>
</ul>`
    },
    {
      type: "3d",
      title: "Peisajul african în 3D",
      scene: "terrain",
      options: {
        features: {
          peak: { label: "Kilimanjaro", html: "5895 m, în Tanzania: un vulcan stins cu vârful acoperit de gheață, chiar lângă ecuator. Ghețarii săi s-au micșorat însă cu peste 80% în ultimul secol." },
          valley: { label: "Rift Valley", html: "O ruptură a scoarței lungă de aproximativ 6000 km, de la Marea Roșie până în Mozambic. Aici au fost găsite unele dintre cele mai vechi fosile ale strămoșilor noștri, precum „Lucy” (Etiopia, acum aproximativ 3,2 milioane de ani)." },
          mountain: { label: "Atlas", html: "Lanț muntos din nord-vest (Maroc, Algeria, Tunisia), care desparte coastele mediteraneene de Sahara." },
          river: { label: "Nilul", html: "Cel mai lung fluviu din Africa (aproximativ 6650 km). Izvorăște din lacul Victoria (Nilul Alb) și din Etiopia (Nilul Albastru) și traversează deșertul până la Mediterana." },
          delta: { label: "Delta Nilului", html: "Una dintre cele mai fertile și mai populate zone din Africa: aici trăiește o mare parte din cei aproximativ 110 milioane de egipteni." },
          lake: { label: "Lacul Victoria", html: "Cel mai mare lac din Africa (aproximativ 68.000 km², mai mult de o cincime din Italia), împărțit între Uganda, Kenya și Tanzania." },
          plain: { label: "Savana", html: "Întinderi mari de iarbă înaltă cu copaci răzleți (acacii, baobabi), cu un anotimp secetos și unul ploios. Aici trăiesc lei, elefanți, girafe, zebre și gnu." },
          island: { label: "Madagascar", html: "A patra insulă ca mărime din lume. S-a desprins de Africa acum aproximativ 160 de milioane de ani: de aceea are animale care nu există în altă parte, precum <b>lemurii</b>." },
          coast: { label: "Coastele", html: "Coastele africane sunt puțin crestate, cu puține porturi naturale: unul dintre motivele pentru care interiorul continentului a fost explorat târziu de europeni." },
          volcano: { label: "Vulcanii din Rift", html: "De-a lungul Rift Valley există mulți vulcani activi, precum Nyiragongo (Republica Democratică Congo), cu un lac de lavă în crater." }
        }
      },
      caption: "Rotește peisajul și atinge părțile lui pentru a cunoaște mediile africane."
    },
    {
      type: "text",
      title: "3. Climate și medii: un continent în fâșii",
      html: `<p>Pornind de la ecuator și mergând spre nord (sau spre sud) întâlnim, în ordine:</p>
<ol>
<li>🌳 <b>Pădurea ecuatorială</b> (bazinul fluviului Congo, Golful Guineei): cald și ploi tot anul, copaci foarte înalți, biodiversitate uriașă. Este a doua pădure tropicală umedă din lume, după Amazonia.</li>
<li>🦒 <b>Savana</b>: climă tropicală cu un anotimp ploios și unul secetos.</li>
<li>🌾 <b>Sahelul</b> și stepa: o fâșie de trecere semiaridă între savană și deșert („sahel” înseamnă în arabă „țărm”, țărmul deșertului).</li>
<li>🏜️ <b>Deșertul</b>: la nord <b>Sahara</b> (aproximativ 9 milioane de km², aproape cât SUA), la sud <b>Kalahari</b> și <b>Namib</b>.</li>
<li>🫒 <b>Clima mediteraneană</b> la cele două capete: coastele Africii de Nord și vârful Africii de Sud (Cape Town).</li>
</ol>`
    },
    {
      type: "3d",
      title: "Fâșiile Africii ca straturi",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#84cc16", label: "Climă mediteraneană (capetele de nord și de sud)" },
          { r: 0.82, color: "#fcd34d", label: "Deșert (Sahara; Kalahari și Namib)" },
          { r: 0.64, color: "#d6d3d1", label: "Sahel și stepă" },
          { r: 0.47, color: "#a3e635", label: "Savană" },
          { r: 0.3, color: "#166534", label: "Pădure ecuatorială (ecuatorul)" }
        ]
      },
      caption: "Model simplificat: centrul este ecuatorul; îndepărtându-ne spre nord sau spre sud traversăm aceleași fâșii. Munții și curenții marini întrerup această simetrie (de exemplu, podișul etiopian și cel din Kenya au climate mai răcoroase)."
    },
    {
      type: "quiz",
      title: "Mini-test: teritoriu și medii",
      questions: [
        { type: "mc", q: "Care este cel mai înalt vârf din Africa?", options: ["Mont Blanc", "Kilimanjaro", "Atlas"], answer: 1, explain: "Kilimanjaro, 5895 m, în Tanzania." },
        { type: "order", q: "Ordonează mediile de la ecuator spre Mediterana.", items: ["Pădurea ecuatorială", "Savana", "Sahelul", "Sahara", "Clima mediteraneană"], explain: "Îndepărtându-ne de ecuator, ploile scad până la deșert; apoi, pe coastă, revine clima mediteraneană." },
        { type: "tf", q: "Rift Valley este o mare ruptură a scoarței terestre.", answer: true, explain: "Acolo placa africană se desparte încet în două." }
      ]
    },
    {
      type: "text",
      title: "4. Popoare, limbi, istorie",
      html: `<p>Africa este <b>leagănul omenirii</b>: cele mai vechi fosile de <i>Homo sapiens</i>, de acum aproximativ 300.000 de ani, au fost găsite la Jebel Irhoud, în Maroc. De aici strămoșii noștri s-au răspândit în toată lumea.</p>
<p>În Africa s-au născut mari civilizații: <b>Egiptul</b> faraonilor, regatul <b>Aksum</b> (Etiopia), imperiile <b>Mali</b> (cu orașul Timbuktu, centru de studii) și <b>Marele Zimbabwe</b>.</p>
<p>Din secolul al XVI-lea până în secolul al XIX-lea, aproximativ <b>12 milioane</b> de africani au fost deportați ca sclavi în cele două Americi (<b>comerțul transatlantic cu sclavi</b>). La sfârșitul secolului al XIX-lea, aproape tot continentul a fost împărțit între puterile europene; independența a venit mai ales între <b>1956 și 1975</b>.</p>
<p>Astăzi:</p>
<ul>
<li><b>Africa de Nord</b> (Maroc, Algeria, Tunisia, Libia, Egipt): popoare arabe și berbere, limba arabă, religia musulmană.</li>
<li><b>Africa subsahariană</b>: sute de popoare (de exemplu yoruba, igbo, zulu, masai), limbi africane precum <b>swahili</b> (vorbită de peste 100 de milioane de oameni în Africa de Est), hausa, amharica, yoruba, alături de limbile europene (engleza, franceza, portugheza) folosite ca limbi oficiale; religii creștină, musulmană și tradiționale.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Piramida vârstelor: Africa și Europa",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#fffbeb"/>
<text x="150" y="28" font-size="18" text-anchor="middle" font-weight="bold" fill="#9a3412">Niger (Africa)</text>
<text x="450" y="28" font-size="18" text-anchor="middle" font-weight="bold" fill="#1e3a8a">Italia (Europa)</text>
<rect x="40" y="250" width="220" height="30" fill="#fb923c"/>
<rect x="60" y="220" width="180" height="30" fill="#fb923c"/>
<rect x="85" y="190" width="130" height="30" fill="#fdba74"/>
<rect x="105" y="160" width="90" height="30" fill="#fdba74"/>
<rect x="120" y="130" width="60" height="30" fill="#fed7aa"/>
<rect x="132" y="100" width="36" height="30" fill="#fed7aa"/>
<rect x="142" y="70" width="16" height="30" fill="#ffedd5"/>
<rect x="400" y="250" width="100" height="30" fill="#93c5fd"/>
<rect x="390" y="220" width="120" height="30" fill="#93c5fd"/>
<rect x="380" y="190" width="140" height="30" fill="#60a5fa"/>
<rect x="370" y="160" width="160" height="30" fill="#60a5fa"/>
<rect x="372" y="130" width="156" height="30" fill="#3b82f6"/>
<rect x="385" y="100" width="130" height="30" fill="#3b82f6"/>
<rect x="405" y="70" width="90" height="30" fill="#1d4ed8"/>
<text x="300" y="272" font-size="14" text-anchor="middle" fill="#111827">tineri</text>
<text x="300" y="90" font-size="14" text-anchor="middle" fill="#111827">vârstnici</text>
<path d="M300 250 L300 105" stroke="#111827" stroke-width="2" marker-end="url(#e)"/>
<defs><marker id="e" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#111827"/></marker></defs>
<text x="150" y="305" font-size="14" text-anchor="middle" fill="#9a3412">vârsta medie circa 15 ani</text>
<text x="450" y="305" font-size="14" text-anchor="middle" fill="#1e3a8a">vârsta medie circa 48 de ani</text>
</svg>`,
      caption: "Schemă simplificată. În Niger (circa 6 copii pentru fiecare femeie) piramida are o bază foarte lată: foarte mulți copii. În Italia (circa 1,2 copii pentru fiecare femeie) „piramida” seamănă cu un butoi: există mai mulți adulți și vârstnici decât copii."
    },
    {
      type: "text",
      title: "5. Provocări și oportunități",
      html: `<p><b>Provocări</b>:</p>
<ul>
<li><b>Sărăcia</b>: aproximativ 4 din 10 oameni din Africa subsahariană trăiesc în sărăcie extremă; majoritatea țărilor cu cel mai scăzut IDU sunt africane.</li>
<li><b>Sănătatea</b>: malaria, HIV și subnutriția provoacă încă multe decese; speranța medie de viață este de aproximativ 64 de ani.</li>
<li><b>Conflicte</b> și instabilitate (Sudan, Sahel, Republica Democratică Congo), legate adesea de granițe artificiale, resurse disputate și state slabe.</li>
<li><b>Schimbările climatice</b>: Africa produce mai puțin de 4% din emisiile mondiale de CO₂, dar suferă de secetă și <b>deșertificare</b>, mai ales în Sahel.</li>
<li><b>Economie dependentă</b> de exportul de materii prime (petrol, aur, cobalt, cacao), vândute adesea fără să fie prelucrate pe loc.</li>
</ul>
<p><b>Oportunități</b>:</p>
<ul>
<li>o populație <b>foarte tânără</b>, care poate deveni o mare forță de muncă;</li>
<li><b>resurse</b> uriașe: aproximativ 70% din cobaltul mondial (pentru baterii) vine din Republica Democratică Congo; multă energie solară disponibilă;</li>
<li><b>inovație</b>: în Kenya, sistemul de plată prin telefonul mobil <b>M-Pesa</b> (din 2007) a adus serviciile bancare la milioane de oameni care nu aveau un cont;</li>
<li><b>Zona de liber schimb continentală africană</b> (AfCFTA, din 2021), pentru a crește comerțul dintre țările africane; <b>Uniunea Africană</b> (cu sediul la Addis Abeba) reunește toți cei 55 de membri ai continentului.</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemplu practic: Marele Zid Verde",
      html: `<p>Pentru a opri înaintarea deșertului, în <b>2007</b> Uniunea Africană a lansat <b>Marele Zid Verde</b>: o fâșie de copaci, grădini și terenuri recuperate, lungă de aproximativ <b>8000 km</b>, din Senegal până în Djibouti, prin 11 țări din Sahel.</p>
<p>Nu este un zid continuu de copaci: țăranii plantează specii rezistente la secetă (precum acacia care produce guma arabică), construiesc mici diguri în formă de semilună pentru a reține apa de ploaie și recuperează terenuri abandonate. Scopul este recuperarea a 100 de milioane de hectare până în 2030, dar lucrările sunt încă departe de țintă.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: cacaua din gustarea ta",
      html: `<p>Aproximativ <b>60%</b> din cacaua lumii vine din doar două țări africane: <b>Coasta de Fildeș</b> și <b>Ghana</b>. Țăranul vinde boabele uscate; transformarea lor în ciocolată, care valorează mult mai mult, are loc aproape întotdeauna în Europa (Țările de Jos, Belgia, Elveția, Germania, Italia).</p>
<p>Este un exemplu de economie care <b>exportă materii prime</b> și <b>importă produse finite</b>: de aceea multe guverne africane încearcă să construiască pe loc fabrici de ciocolată, rafinării și industrii, ca să păstreze mai multă bogăție.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că… Africa este mult mai mare decât o vezi pe hartă?",
      html: `<p>Pe harta lui Mercator (cea agățată adesea în clasă), Africa pare la fel de mare ca Groenlanda. În realitate este de aproximativ <b>14 ori mai mare</b>! În Africa ar încăpea împreună <b>Statele Unite</b>, <b>China</b>, <b>India</b> și aproape toată <b>Europa</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că… Sahara a fost odată verde?",
      html: `<p>Între acum aproximativ 11.000 și 5.000 de ani, Sahara era acoperită de savane, lacuri și râuri, cu hipopotami, crocodili și girafe: este așa-numita <b>„Sahara verde”</b>. Știm asta din picturile rupestre găsite în mijlocul deșertului, precum cele de la Tassili, în Algeria, care arată animale și turme la păscut. O mică schimbare a orbitei Pământului a mutat musonii, iar Sahara s-a transformat în deșert.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a cunoaște Africa",
      intro: "Dacă numele și cifrele te încurcă, încearcă unul dintre aceste trasee.",
      tabs: [
        {
          label: "🌍 Călătorie pe glob",
          html: `<p>Fă o călătorie de la Cairo la Cape Town (aproximativ 7000 km în linie dreaptă) și traversează toate fâșiile continentului.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 30.04, lon: 31.24, label: "Cairo", color: "#f59e0b" },
              { lat: 23.4, lon: 25.7, label: "Sahara", color: "#fbbf24" },
              { lat: 15.6, lon: 32.5, label: "Khartum (Sahel)", color: "#a16207" },
              { lat: 9.03, lon: 38.74, label: "Addis Abeba", color: "#16a34a" },
              { lat: -1.29, lon: 36.82, label: "Nairobi (savană)", color: "#84cc16" },
              { lat: -3.07, lon: 37.35, label: "Kilimanjaro", color: "#64748b" },
              { lat: -17.92, lon: 25.86, label: "Cascada Victoria", color: "#0ea5e9" },
              { lat: -33.92, lon: 18.42, label: "Cape Town", color: "#7c3aed" },
              { lat: 6.52, lon: 3.38, label: "Lagos", color: "#dc2626" }
            ],
            routes: [{ points: [0, 1, 2, 3, 4, 5, 6, 7], color: "#ea580c" }]
          }
        },
        {
          label: "🧩 Joc: potrivește mediul",
          html: `<p>Fiecare animal sau plantă trăiește în mediul său: potrivește-le.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["🐪 Dromader", "Deșertul Sahara"],
              ["🦒 Girafă", "Savana"],
              ["🦍 Gorilă", "Pădurea ecuatorială din Congo"],
              ["🐒 Lemur", "Madagascar"],
              ["🦛 Hipopotam", "Râuri și lacuri"],
              ["🫒 Măslin", "Coastele mediteraneene ale Africii de Nord"]
            ]
          }
        },
        {
          label: "🔢 Africa în 10 oameni",
          html: `<p>Dacă Africa ar fi un grup de <b>10 oameni</b>:</p>
<ul>
<li>aproximativ <b>4</b> ar avea sub 15 ani (în Italia: puțin peste 1);</li>
<li>aproximativ <b>4–5</b> ar locui la oraș (populația urbană crește foarte repede: <b>Lagos</b>, <b>Kinshasa</b> și <b>Cairo</b> au fiecare peste 15 milioane de locuitori);</li>
<li>aproximativ <b>5</b> ar lucra în agricultură;</li>
<li>aproape toți ar avea un <b>telefon mobil</b> în familie.</li>
</ul>`
        },
        {
          label: "🗺️ Harta „corectă”",
          html: `<p>Hărțile nu sunt neutre: proiecția lui <b>Mercator</b> (1569) mărește ținuturile apropiate de poli (Europa, America de Nord) și le micșorează pe cele de la ecuator (Africa). În 2025, Uniunea Africană a sprijinit campania <b>„Correct the Map”</b> pentru a folosi în școli hărți care respectă suprafețele reale, precum proiecția <b>Equal Earth</b> (2018).</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#e0f2fe"/>
<text x="150" y="26" font-size="17" text-anchor="middle" font-weight="bold" fill="#0f172a">Cum pare (Mercator)</text>
<rect x="60" y="45" width="80" height="80" fill="#e2e8f0" stroke="#334155" stroke-width="2"/><text x="100" y="92" font-size="14" text-anchor="middle" fill="#0f172a">Groenl.</text>
<rect x="155" y="55" width="90" height="100" fill="#fb923c" stroke="#9a3412" stroke-width="2"/><text x="200" y="110" font-size="14" text-anchor="middle" fill="#7c2d12">Africa</text>
<text x="450" y="26" font-size="17" text-anchor="middle" font-weight="bold" fill="#0f172a">Cum este de fapt (suprafețe)</text>
<rect x="332" y="60" width="43" height="43" fill="#e2e8f0" stroke="#334155" stroke-width="2"/><text x="353" y="122" font-size="13" text-anchor="middle" fill="#0f172a">Groenl.</text>
<rect x="390" y="40" width="160" height="160" fill="#fb923c" stroke="#9a3412" stroke-width="2"/><text x="470" y="125" font-size="18" text-anchor="middle" fill="#7c2d12" font-weight="bold">Africa ×14</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta Africii: atinge nodurile și descoperă de ce",
      nodes: [
        { id: "equatore", label: "Ecuatorul la mijloc", x: 50, y: 6, color: "#ef4444", html: "Africa este tăiată în două de ecuator.", why: "Este singurul continent traversat atât de ecuator, cât și de ambele tropice: de aceea este cel mai cald continent, iar mediile sale se repetă simetric." },
        { id: "fasce", label: "Fâșii climatice", x: 20, y: 25, color: "#16a34a", html: "Pădure, savană, Sahel, deșert, mediteranean.", why: "La ecuator, aerul cald și umed urcă și formează ploi aproape în fiecare zi; în jurul tropicelor aerul coboară uscat și acolo se formează marile deșerturi (Sahara, Kalahari). Este circulația atmosferică descrisă de „celulele Hadley” (George Hadley, 1735)." },
        { id: "rift", label: "Rift Valley", x: 80, y: 25, color: "#b45309", html: "Ruptură a scoarței, cu vulcani, lacuri și fosile.", why: "Acolo placa africană se desparte (placa somaleză și placa nubiană); peste milioane de ani s-ar putea naște un nou ocean. Eroziunea a adus la suprafață straturi foarte vechi, pline de fosile de hominizi." },
        { id: "origini", label: "Leagănul omenirii", x: 80, y: 50, color: "#a855f7", html: "Aici s-au născut primii hominizi și Homo sapiens.", why: "O dovedesc fosilele (Lucy, 1974, Etiopia; Jebel Irhoud, Maroc) și ADN-ul: toate populațiile umane se trag din strămoși africani." },
        { id: "colonie", label: "Sclavie și colonialism", x: 50, y: 45, color: "#64748b", html: "Comerțul transatlantic cu sclavi (secolele XVI–XIX) și împărțirea europeană.", why: "Puterile europene căutau mână de lucru pentru plantațiile din America, apoi materii prime pentru industrii; Conferința de la Berlin (1884–1885) a stabilit regulile împărțirii." },
        { id: "stati", label: "54 de state independente", x: 20, y: 55, color: "#f59e0b", html: "Independențe mai ales între 1956 și 1975.", why: "După al Doilea Război Mondial, puterile europene erau slăbite, iar mișcările de eliberare erau puternice; noile state au păstrat însă granițele coloniale." },
        { id: "giovani", label: "Populație foarte tânără", x: 35, y: 78, color: "#ec4899", html: "Vârsta medie circa 19 ani; creștere rapidă.", why: "Mortalitatea infantilă a scăzut datorită vaccinurilor și tratamentelor, în timp ce numărul de copii pentru fiecare femeie rămâne mare (circa 4): este faza de „tranziție demografică” pe care Europa a trăit-o în secolul al XIX-lea." },
        { id: "sfide", label: "Provocări", x: 65, y: 78, color: "#dc2626", html: "Sărăcie, conflicte, climă, economia materiilor prime.", why: "Sunt efecte împletite ale istoriei coloniale, ale granițelor artificiale, ale instituțiilor slabe și ale unei clime devenite mai extreme din cauza încălzirii globale." },
        { id: "futuro", label: "Oportunități", x: 50, y: 95, color: "#22c55e", html: "Tineri, resurse, energie solară, inovație digitală.", why: "Mulți economiști cred că în secolul XXI Africa ar putea crește așa cum a crescut Asia în secolul XX: până în 2050, aproximativ unul din trei tineri din lume va fi african." }
      ],
      edges: [
        ["equatore", "fasce", "creează"],
        ["rift", "origini", "păstrează fosilele din"],
        ["colonie", "stati", "lasă granițele"],
        ["fasce", "sfide", "secetă →"],
        ["stati", "sfide", "înfruntă"],
        ["colonie", "sfide", "moștenire →"],
        ["giovani", "futuro", "sunt"],
        ["sfide", "futuro", "de transformat în"]
      ]
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li><b>Africa</b>: 30,4 milioane km², aproximativ 1,5 miliarde de locuitori, <b>54 de state</b>. Cel mai populat este <b>Nigeria</b>.</li>
<li>Teritoriu: podiș străvechi, <b>Atlas</b>, <b>Rift Valley</b>, <b>Kilimanjaro</b> (5895 m); fluviile <b>Nil</b>, <b>Congo</b>, <b>Niger</b>; lacul <b>Victoria</b>; insula <b>Madagascar</b>.</li>
<li>Medii în fâșii simetrice: pădure ecuatorială, savană, Sahel, deșert (<b>Sahara</b>, Kalahari), mediteranean.</li>
<li>Leagănul omenirii; comerțul cu sclavi și colonialismul; independențe 1956–1975.</li>
<li>Provocări: sărăcie, sănătate, conflicte, deșertificare. Oportunități: tineri, resurse, inovație.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: popoare și provocări",
      questions: [
        { type: "mc", q: "Care este cea mai populată țară din Africa?", options: ["Egipt", "Nigeria", "Africa de Sud"], answer: 1, explain: "Nigeria, cu peste 220 de milioane de locuitori." },
        { type: "text", q: "Ce limbă africană este vorbită de peste 100 de milioane de oameni în Africa de Est?", answer: ["swahili", "limba swahili", "kiswahili"], explain: "Swahili (kiswahili)." },
        { type: "mc", q: "Ce este Marele Zid Verde?", options: ["Un zid construit de romani", "Un proiect pentru oprirea deșertificării în Sahel", "Un lanț muntos"], answer: 1, explain: "O fâșie de terenuri recuperate și copaci, din Senegal până în Djibouti." }
      ]
    }
  ],
  glossary: [
    { t: "Rift Valley", d: "Mare groapă tectonică din Africa de Est, unde scoarța se desparte." },
    { t: "Savană", d: "Pajiște tropicală cu copaci răzleți, cu un anotimp secetos și unul ploios." },
    { t: "Sahel", d: "Fâșie semiaridă la sud de Sahara, între deșert și savană." },
    { t: "Deșertificare", d: "Transformarea pământurilor fertile în pământuri aride, din cauza climei și a activităților omului." },
    { t: "Pădure ecuatorială", d: "Pădure de la ecuator, cu ploi abundente tot anul și o biodiversitate foarte mare." },
    { t: "Comerțul transatlantic cu sclavi", d: "Deportarea a milioane de africani înrobiți spre cele două Americi (secolele XVI–XIX)." },
    { t: "Vârsta medie", d: "Vârsta care împarte populația în două jumătăți: o jumătate mai tânără, o jumătate mai în vârstă." },
    { t: "Uniunea Africană", d: "Organizația statelor africane, înființată în 2002, cu sediul la Addis Abeba." },
    { t: "Swahili", d: "Limbă bantu cu multe cuvinte arabe, răspândită în Africa de Est." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Câte state africane sunt recunoscute de ONU?", options: ["27", "54", "100"], answer: 1, explain: "54 de state." },
      { type: "text", q: "Cum se numește cel mai mare deșert cald din lume, din Africa de Nord?", answer: ["sahara", "deșertul sahara", "desertul sahara"], explain: "Sahara, aproximativ 9 milioane de km²." },
      { type: "mc", q: "De ce mediile africane se repetă aproape la fel la nord și la sud?", options: ["Pentru că ecuatorul taie Africa aproape în două", "Pentru că Africa este o insulă", "Pentru că totul este deșert"], answer: 0, explain: "Îndepărtându-ne de ecuator în ambele direcții întâlnim aceleași fâșii climatice." },
      { type: "tf", q: "Kilimanjaro este cel mai înalt munte din Africa.", answer: true, explain: "5895 m, în Tanzania." },
      { type: "mc", q: "Ce fluviu african traversează deșertul și se varsă în Mediterana?", options: ["Congo", "Niger", "Nilul"], answer: 2, explain: "Nilul, cel mai lung din Africa." },
      { type: "mc", q: "Ce este Sahelul?", options: ["O pădure ecuatorială", "Fâșia semiaridă dintre Sahara și savană", "O insulă din Oceanul Indian"], answer: 1, explain: "În arabă, „sahel” înseamnă țărm: țărmul deșertului." },
      { type: "text", q: "Care este marea insulă africană unde trăiesc lemurii?", answer: ["madagascar", "insula madagascar"], explain: "Madagascar, a patra insulă ca mărime din lume." },
      { type: "tf", q: "Africa este continentul cu populația cea mai în vârstă.", answer: false, explain: "Este cel mai tânăr continent: vârsta medie circa 19 ani." },
      { type: "num", q: "De câte ori este Africa mai mare decât Groenlanda (număr întreg)?", answer: 14, tol: 0, explain: "30,4 milioane de km² ÷ aproximativ 2,2 milioane ≈ 14." },
      { type: "order", q: "Pune în ordine cronologică.", items: ["Homo sapiens la Jebel Irhoud", "Civilizația egipteană a faraonilor", "Comerțul transatlantic cu sclavi", "Conferința de la Berlin", "Independența Ghanei"], explain: "Acum 300.000 de ani → 3100 î.Hr. → secolele XVI–XIX → 1884–1885 → 1957." },
      { type: "mc", q: "Din ce țară vine aproximativ 70% din cobaltul mondial, folosit la baterii?", options: ["Republica Democratică Congo", "Maroc", "Kenya"], answer: 0, explain: "Republica Democratică Congo." },
      { type: "mc", q: "Ce este M-Pesa?", options: ["Un râu din Kenya", "Un sistem de plată prin telefonul mobil", "O monedă veche"], answer: 1, explain: "Apărut în Kenya în 2007, a adus serviciile financiare la milioane de oameni." }
    ]
  }
});
