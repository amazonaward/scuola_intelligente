TOPIC('ro', {
  id: "l1-sci-materia-miscugli",
  title: "Materia: substanțe și amestecuri",
  intro: "Tot ce ne înconjoară, de la aerul pe care îl respiri până la ecranul la care te uiți, este <b>materie</b>: are masă și ocupă un spațiu. Dar materia nu este peste tot la fel: apa de la robinet, aurul unui inel și nisipul de pe plajă sunt lucruri foarte diferite. În această lecție învățăm să o clasificăm (<b>stări de agregare</b>, <b>substanțe pure</b> și <b>amestecuri</b>) și să separăm ceea ce natura a amestecat, așa cum face zilnic un laborator de chimie.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Ce este materia",
      html: `<p><b>Materia</b> este tot ceea ce are <b>masă</b> și ocupă un <b>volum</b>. Aerul, pe care nu-l vedem, este materie: o minge umflată cântărește mai mult decât una dezumflată.</p>
<p>Mărimile fizice ale unui corp se împart în două familii:</p>
<ul>
<li><b>proprietăți extensive</b>: depind de cantitatea de materie (masă, volum);</li>
<li><b>proprietăți intensive</b>: nu depind de cantitate, ci caracterizează substanța (densitatea, temperatura de topire, temperatura de fierbere, culoarea).</li>
</ul>
<p>O proprietate intensivă foarte folosită este <b>densitatea</b>: ρ = m / V. Se măsoară în g/cm³ (sau kg/m³). Apa la 4 °C are densitatea 1,00 g/cm³; fierul aproximativ 7,9 g/cm³; aurul aproximativ 19,3 g/cm³. Dacă două obiecte sunt făcute din același material, au aceeași densitate, chiar dacă unul este mare și celălalt mic.</p>
<p>Ține minte diferența dintre <b>masă</b> (cantitatea de materie, în kg, aceeași oriunde) și <b>greutate</b> (forța cu care gravitația atrage corpul, în newtoni: pe Lună este aproximativ 1/6 din cea de pe Pământ).</p>`
    },
    {
      type: "example",
      title: "Plutește sau se scufundă? Calculul densității",
      html: `<p>Un cubuleț dintr-un material necunoscut are masa de <b>54 g</b> și volumul de <b>20 cm³</b>. Care este densitatea? Plutește în apă?</p>
<ol>
<li>ρ = m / V = 54 g / 20 cm³ = <b>2,7 g/cm³</b> (este densitatea aluminiului).</li>
<li>Apa are densitatea 1 g/cm³: un corp cu densitate mai mare <b>se scufundă</b>, unul cu densitate mai mică <b>plutește</b>.</li>
<li>2,7 &gt; 1: cubulețul se scufundă.</li>
</ol>
<p>O navă de fier plutește pentru că este goală pe dinăuntru: densitatea ei <i>medie</i> (oțel + aer interior) este mai mică decât a apei.</p>`
    },
    {
      type: "text",
      title: "Cele trei stări de agregare",
      html: `<p>În funcție de temperatură și de presiune, aceeași substanță se poate prezenta în trei stări principale. Pentru a le deosebi ne uităm la <b>formă</b> și <b>volum</b> și, la nivel microscopic, la felul în care se mișcă particulele (atomi, molecule sau ioni).</p>
<table>
<tr><th>Starea</th><th>Forma</th><th>Volumul</th><th>Particulele</th></tr>
<tr><td><b>Solidă</b></td><td>proprie</td><td>propriu</td><td>foarte apropiate, în poziții fixe (doar vibrează); ordonate în solidele cristaline</td></tr>
<tr><td><b>Lichidă</b></td><td>a vasului</td><td>propriu</td><td>apropiate, dar libere să alunece unele peste altele</td></tr>
<tr><td><b>Gazoasă</b> (gaz sau vapori)</td><td>a vasului</td><td>cel al vasului</td><td>foarte depărtate, în mișcare rapidă și dezordonată</td></tr>
</table>
<p>Modelul <b>cinetico-molecular</b> explică totul prin două idei: particulele sunt mereu în mișcare, iar <b>energia lor cinetică medie</b> crește odată cu temperatura. Un gaz este compresibil pentru că între particule este aproape doar vid; un lichid nu, pentru că ele sunt deja în contact.</p>`
    },
    {
      type: "svg",
      title: "Particulele în cele trei stări",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<rect x="15" y="40" width="190" height="190" rx="10" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>
<rect x="225" y="40" width="190" height="190" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<rect x="435" y="40" width="190" height="190" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
<g fill="#0369a1">
<circle cx="45" cy="70" r="12"/><circle cx="75" cy="70" r="12"/><circle cx="105" cy="70" r="12"/><circle cx="135" cy="70" r="12"/><circle cx="165" cy="70" r="12"/>
<circle cx="45" cy="100" r="12"/><circle cx="75" cy="100" r="12"/><circle cx="105" cy="100" r="12"/><circle cx="135" cy="100" r="12"/><circle cx="165" cy="100" r="12"/>
<circle cx="45" cy="130" r="12"/><circle cx="75" cy="130" r="12"/><circle cx="105" cy="130" r="12"/><circle cx="135" cy="130" r="12"/><circle cx="165" cy="130" r="12"/>
<circle cx="45" cy="160" r="12"/><circle cx="75" cy="160" r="12"/><circle cx="105" cy="160" r="12"/><circle cx="135" cy="160" r="12"/><circle cx="165" cy="160" r="12"/>
<circle cx="45" cy="190" r="12"/><circle cx="75" cy="190" r="12"/><circle cx="105" cy="190" r="12"/><circle cx="135" cy="190" r="12"/><circle cx="165" cy="190" r="12"/>
</g>
<g fill="#15803d">
<circle cx="250" cy="170" r="12"/><circle cx="276" cy="196" r="12"/><circle cx="302" cy="170" r="12"/><circle cx="330" cy="200" r="12"/><circle cx="358" cy="178" r="12"/><circle cx="386" cy="200" r="12"/>
<circle cx="262" cy="144" r="12"/><circle cx="292" cy="120" r="12"/><circle cx="330" cy="150" r="12"/><circle cx="364" cy="128" r="12"/><circle cx="392" cy="152" r="12"/><circle cx="318" cy="118" r="12"/>
</g>
<g fill="#b45309">
<circle cx="470" cy="75" r="12"/><circle cx="560" cy="62" r="12"/><circle cx="600" cy="120" r="12"/><circle cx="520" cy="130" r="12"/><circle cx="465" cy="180" r="12"/><circle cx="585" cy="195" r="12"/><circle cx="530" cy="205" r="12"/>
</g>
<g stroke="#b45309" stroke-width="2"><line x1="470" y1="75" x2="500" y2="95"/><line x1="560" y1="62" x2="535" y2="45"/><line x1="585" y1="195" x2="560" y2="215"/></g>
<text x="110" y="30" font-size="20" text-anchor="middle" fill="#0c4a6e" font-weight="bold">SOLID</text>
<text x="320" y="30" font-size="20" text-anchor="middle" fill="#14532d" font-weight="bold">LICHID</text>
<text x="530" y="30" font-size="20" text-anchor="middle" fill="#78350f" font-weight="bold">GAZ</text>
<text x="110" y="256" font-size="15" text-anchor="middle" fill="#1f2937">ordonate și apropiate</text>
<text x="320" y="256" font-size="15" text-anchor="middle" fill="#1f2937">apropiate, dar dezordonate</text>
<text x="530" y="256" font-size="15" text-anchor="middle" fill="#1f2937">depărtate și rapide</text>
<text x="320" y="287" font-size="15" text-anchor="middle" fill="#334155">Liniile indică mișcarea particulelor gazului</text>
</svg>`,
      caption: "Aceeași substanță, trei organizări ale particulelor: se schimbă distanțele și libertatea de mișcare."
    },
    {
      type: "curiosity",
      title: "A patra stare: plasma",
      html: `<p>Peste 99% din materia vizibilă a Universului nu este nici solidă, nici lichidă, nici gazoasă: este <b>plasmă</b>, un gaz atât de fierbinte încât atomii pierd electronii și devin ioni liberi să se miște. Plasmă sunt Soarele și stelele, fulgerele, aurorele polare și becurile cu neon. Există și o a cincea stare, <b>condensatul Bose-Einstein</b>, observat în 1995 prin răcirea unor atomi la câteva miliardimi de grad peste zeroul absolut.</p>`
    },
    {
      type: "text",
      title: "Substanțe pure și amestecuri",
      html: `<p>O <b>substanță pură</b> are compoziție definită și proprietăți intensive constante (de exemplu o temperatură de fierbere precisă). Poate fi:</p>
<ul>
<li><b>element</b>: format dintr-un singur fel de atomi (oxigen O₂, fier Fe, aur Au);</li>
<li><b>compus</b>: format din atomi ai unor elemente diferite în raport fix (apa H₂O, sarea de bucătărie NaCl); se poate descompune doar prin reacții chimice.</li>
</ul>
<p>Un <b>amestec</b> este format din două sau mai multe substanțe (<b>componentele</b>) amestecate fără să reacționeze, în proporții <b>variabile</b>. Fiecare componentă își păstrează proprietățile și poate fi separată prin metode <b>fizice</b>.</p>
<ul>
<li><b>Omogen</b> (<b>soluție</b>): are o singură fază, aspect uniform chiar și la microscopul optic. Exemple: apă cu sare, aerul, bronzul (aliaj de cupru și staniu), oțetul.</li>
<li><b>Eterogen</b>: are două sau mai multe faze distincte. Exemple: apă cu nisip (suspensie), ulei cu apă (emulsie dacă este agitat), granitul, ceața (lichid în gaz), fumul (solid în gaz).</li>
</ul>
<p>O <b>fază</b> este o porțiune de materie cu proprietăți uniforme. Apa cu trei cuburi de gheață este un sistem cu <b>două faze</b>, deși este o singură substanță: atenție, faza și substanța nu sunt același lucru.</p>`
    },
    {
      type: "widget",
      title: "Clasifică materia",
      widget: "classify",
      options: { groups: ["Substanță pură", "Amestec omogen", "Amestec eterogen"], items: [
        ["Aur de 24 de karate", 0],
        ["Apă distilată", 0],
        ["Aer curat", 1],
        ["Apă cu zahăr dizolvat", 1],
        ["Apă cu nisip", 2],
        ["Granit", 2],
        ["Oxigen", 0],
        ["Bronz", 1],
        ["Lapte", 2],
        ["Ulei cu apă", 2]
      ] },
      caption: "Laptele pare uniform, dar la microscop are picături de grăsime suspendate în apă: este o emulsie, deci eterogen."
    },
    {
      type: "remember",
      title: "Substanță pură sau amestec? Un test practic",
      html: `<p>O substanță pură, în timpul unei treceri de stare, își păstrează <b>temperatura constantă</b> (apa pură fierbe la 100 °C la nivelul mării și rămâne la 100 °C cât timp există lichid). Un amestec își schimbă temperatura în timpul trecerii de stare: apa sărată începe să fiarbă puțin peste 100 °C, iar temperatura crește pe măsură ce apa se evaporă și soluția se concentrează. Aceasta este diferența care face posibilă recunoașterea lor în laborator.</p>`
    },
    {
      type: "text",
      title: "Soluțiile și concentrația",
      html: `<p>Într-o <b>soluție</b>, componenta aflată în cantitate mai mică este <b>dizolvatul</b> (solutul), cea aflată în cantitate mai mare este <b>solventul</b>. Cel mai important solvent este apa.</p>
<p><b>Concentrația</b> spune cât dizolvat există. Cele mai folosite exprimări:</p>
<ul>
<li><b>procentul de masă</b> (% m/m) = (masa dizolvatului / masa soluției) × 100;</li>
<li><b>procentul de volum</b> (% V/V), folosit pentru alcoolul din băuturi;</li>
<li><b>masă/volum</b> (g/L).</li>
</ul>
<p>La o temperatură dată, solventul poate dizolva o cantitate maximă de dizolvat: <b>solubilitatea</b>. Peste această limită soluția este <b>saturată</b>, iar dizolvatul în exces rămâne pe fund. În general solubilitatea solidelor crește cu temperatura; cea a <b>gazelor</b> scade (de aceea o băutură caldă își pierde repede dioxidul de carbon).</p>`
    },
    {
      type: "example",
      title: "Cât de multă sare este?",
      html: `<p>Dizolvi <b>30 g</b> de sare în <b>220 g</b> de apă. Care este procentul de masă?</p>
<ol>
<li>Masa soluției: 30 + 220 = 250 g.</li>
<li>% m/m = 30 / 250 × 100 = <b>12%</b>.</li>
</ol>
<p>Pentru comparație, apa mării are în medie aproximativ <b>3,5%</b> săruri dizolvate (adică aproximativ 35 g pe kg), în timp ce Marea Moartă are peste 30%: de aceea te menții ușor la suprafață, pentru că densitatea apei este mult mai mare.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: clasificăm și calculăm",
      questions: [
        { type: "mc", q: "Care dintre acestea este o substanță pură?", options: ["Apa de mare", "Apa distilată", "Aerul", "Laptele"], answer: 1, explain: "Apa distilată este formată doar din H₂O. Celelalte sunt amestecuri." },
        { type: "num", q: "Un obiect are masa de 120 g și volumul de 15 cm³. Care este densitatea lui?", answer: 8, unit: "g/cm³", explain: "ρ = m/V = 120/15 = 8 g/cm³." },
        { type: "tf", q: "Într-un amestec componentele își pierd proprietățile proprii.", answer: false, explain: "În amestecuri componentele își păstrează proprietățile: pot fi separate prin metode fizice." }
      ]
    },
    {
      type: "text",
      title: "Cum se separă amestecurile",
      html: `<p>Deoarece în amestecuri substanțele nu au reacționat, ele se separă prin <b>metode fizice</b>, care folosesc o diferență de proprietăți. Metoda se alege în funcție de tipul de amestec.</p>
<table>
<tr><th>Metoda</th><th>Amestecul</th><th>Proprietatea folosită</th></tr>
<tr><td><b>Filtrarea</b></td><td>solid insolubil + lichid (apă și nisip)</td><td>dimensiunile particulelor</td></tr>
<tr><td><b>Decantarea</b></td><td>solid + lichid, sau două lichide nemiscibile (ulei și apă, cu pâlnie de separare)</td><td>densitatea</td></tr>
<tr><td><b>Centrifugarea</b></td><td>suspensii fine (sânge: plasmă și globule)</td><td>densitatea, accentuată de rotație</td></tr>
<tr><td><b>Cernerea</b></td><td>solide cu granulație diferită (nisip și pietriș)</td><td>dimensiunile</td></tr>
<tr><td><b>Separarea magnetică</b></td><td>fier + alte solide</td><td>magnetismul</td></tr>
<tr><td><b>Evaporarea</b></td><td>dizolvat solid + solvent (sare și apă)</td><td>volatilitatea</td></tr>
<tr><td><b>Distilarea</b></td><td>lichide miscibile sau soluții (apă și alcool)</td><td>temperatura de fierbere</td></tr>
<tr><td><b>Cromatografia</b></td><td>amestecuri de coloranți sau de substanțe complexe</td><td>afinitate diferită față de o fază fixă și una mobilă</td></tr>
<tr><td><b>Extracția cu solvent</b></td><td>dizolvat într-un solvent</td><td>solubilitatea într-un alt solvent</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Asociază metoda cu amestecul",
      widget: "match",
      options: { pairs: [
        ["Apă și nisip", "Filtrare"],
        ["Ulei și apă", "Decantare (pâlnie de separare)"],
        ["Sare dizolvată în apă", "Evaporare"],
        ["Apă și etanol", "Distilare"],
        ["Pilitură de fier și sulf", "Magnet"],
        ["Pigmenții unei cerneli", "Cromatografie"],
        ["Plasma și globulele din sânge", "Centrifugare"]
      ] },
      caption: "Găsește pentru fiecare amestec proprietatea care îl face separabil."
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege distilarea",
      intro: "Distilarea se bazează pe o diferență de temperatură de fierbere. Dacă nu ți-e clară, încearcă aceste imagini.",
      tabs: [
        {
          label: "🔬 Schema aparatului",
          html: `<p>Amestecul se încălzește în balon: componenta cu punctul de fierbere mai scăzut (de exemplu etanolul, 78 °C, față de apă, 100 °C) se evaporă prima. Vaporii urcă, trec prin <b>refrigerent</b> (un tub răcit de apa rece care curge în jurul lui) și <b>se condensează</b>: lichidul pur cade în vasul de colectare, numit <b>distilat</b>.</p>`,
          svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<circle cx="110" cy="190" r="60" fill="#e0f2fe" stroke="#334155" stroke-width="3"/>
<path d="M56 205 A60 60 0 0 0 164 205 Z" fill="#7dd3fc"/>
<rect x="100" y="95" width="20" height="45" fill="#e0f2fe" stroke="#334155" stroke-width="3"/>
<rect x="60" y="255" width="100" height="20" rx="4" fill="#f59e0b"/>
<text x="110" y="270" font-size="14" text-anchor="middle" fill="#1f2937">arzător</text>
<line x1="110" y1="95" x2="250" y2="95" stroke="#334155" stroke-width="3"/>
<line x1="250" y1="95" x2="470" y2="160" stroke="#334155" stroke-width="3"/>
<rect x="300" y="100" width="130" height="38" transform="rotate(16 365 119)" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
<text x="365" y="75" font-size="16" text-anchor="middle" fill="#0369a1" font-weight="bold">refrigerent</text>
<path d="M470 160 L470 215" stroke="#334155" stroke-width="3"/>
<path d="M440 220 L500 220 L492 280 L448 280 Z" fill="#dcfce7" stroke="#334155" stroke-width="3"/>
<text x="470" y="298" font-size="14" text-anchor="middle" fill="#14532d">distilat</text>
<text x="110" y="75" font-size="14" text-anchor="middle" fill="#7c2d12">vaporii urcă</text>
<text x="560" y="150" font-size="14" text-anchor="middle" fill="#0369a1">apă rece</text>
</svg>`
        },
        {
          label: "☕ Analogia cu cafetiera",
          html: `<p>În cafetiera italiană (moka) încălzești apa: aburul împinge lichidul în sus, prin filtru. Și în distilator căldura transferă o substanță din lichid în vapori, dar aici vaporii se <b>răcesc și revin în stare lichidă</b>: o vezi de fiecare dată când aburul unei oale se condensează pe capac și se scurge în picături. Distilarea este exact asta, făcută în mod controlat.</p>`
        },
        {
          label: "🧪 O cursă de viteză",
          html: `<p>Imaginează-ți doi alergători: etanolul este cel mai rapid în a deveni vapori, apa este mai lentă. Dacă încălzești cu grijă și oprești cursa la momentul potrivit, în vasul de colectare ajung aproape doar cei rapizi. Cum separarea nu este niciodată perfectă din prima încercare, în industrie se folosește <b>distilarea fracționată</b> (coloane cu multe «talere»), care înseamnă repetarea cursei de multe ori: așa se obțin din petrol benzina, motorina, kerosenul și alte produse.</p>`
        }
      ]
    },
    {
      type: "example",
      title: "Problemă: separarea nisipului, a sării și a piliturii de fier",
      html: `<p>Ai un amestec de <b>nisip, sare și pilitură de fier</b>. Cum obții cele trei componente pure?</p>
<ol>
<li><b>Magnet</b>: atrage pilitura de fier, care se îndepărtează uscat.</li>
<li><b>Apă</b>: se adaugă apă și se amestecă; sarea se dizolvă, nisipul nu.</li>
<li><b>Filtrare</b>: nisipul rămâne pe filtru (și se lasă să se usuce).</li>
<li><b>Evaporarea</b> filtratului: apa dispare, sarea cristalizează.</li>
</ol>
<p>Ordinea contează: dacă ai adăuga apă înaintea magnetului, fierul ar putea rugini. A te gândi la un «plan de separare» este un raționament tipic chimiei analitice.</p>`
    },
    {
      type: "curiosity",
      title: "Salinele și cromatografia",
      html: `<p>Sarea de bucătărie se obține și astăzi, în multe saline italiene precum Trapani sau Cervia, prin <b>evaporarea</b> apei de mare în bazine puțin adânci, încălzită de soare și de vânt. Cât despre cromatografie, numele înseamnă «scriere cu culori»: a fost folosită de botanistul rus <b>Mihail Țvet</b> în jurul anului 1900 pentru a separa pigmenții frunzelor. Astăzi este instrumentul cu care se caută dopajul, medicamentele și poluanții. O poți încerca acasă: o fâșie de hârtie de filtru, un punct de marker negru lavabil și puțină apă care urcă prin capilaritate separă culorile amestecate.</p>`
    },
    {
      type: "conceptMap",
      title: "Harta materiei: atinge nodurile și descoperă de ce",
      nodes: [
        { id: "materia", label: "Materia", x: 50, y: 6, color: "#a855f7", html: "Tot ceea ce are masă și volum.", why: "Definiția se întoarce la filozofii greci: <b>Democrit</b> (secolul al V-lea î.Hr.) și-a imaginat materia făcută din atomi indivizibili, <b>Aristotel</b> din patru elemente continue. Abia în 1800 teoria atomică a lui <b>Dalton</b> a făcut-o științifică." },
        { id: "stati", label: "Stări de agregare", x: 18, y: 28, color: "#3b82f6", html: "Solidă, lichidă, gazoasă.", why: "Se explică prin <b>modelul cinetico-molecular</b>, dezvoltat în secolul al XIX-lea de Clausius, Maxwell și Boltzmann: odată cu temperatura se schimbă energia de mișcare a particulelor și intensitatea forțelor care le țin unite." },
        { id: "pura", label: "Substanțe pure", x: 50, y: 32, color: "#22c55e", html: "Elemente și compuși cu compoziție definită.", why: "Conceptul de compoziție definită provine din <b>legea lui Proust</b> (1799): un compus conține întotdeauna aceleași elemente în aceleași proporții de masă." },
        { id: "miscugli", label: "Amestecuri", x: 82, y: 28, color: "#f97316", html: "Mai multe substanțe amestecate, proporții variabile.", why: "Dacă substanțele ar reacționa între ele și proporțiile ar fi fixe, n-am avea amestecuri, ci compuși: de aceea amestecurile se deosebesc prin posibilitatea de a varia cantitățile și de a separa componentele prin metode fizice." },
        { id: "omo", label: "Omogene (soluții)", x: 68, y: 56, color: "#0ea5e9", html: "O singură fază: aer, bronz, apă cu sare.", why: "Particulele de dizolvat sunt dispersate la nivel de molecule sau ioni individuali, prea mici ca să fie văzute sau reținute de un filtru: de aceea sunt necesare distilarea sau evaporarea." },
        { id: "etero", label: "Eterogene", x: 92, y: 56, color: "#ef4444", html: "Mai multe faze vizibile: apă cu nisip, granit.", why: "Particulele dispersate sunt mari sau aglomerate, deci mai dense sau mai mari decât mediul: se separă prin decantare, filtrare sau cernere." },
        { id: "metodi", label: "Metode de separare", x: 76, y: 82, color: "#14b8a6", html: "Filtrare, distilare, cromatografie…", why: "Fiecare metodă folosește o proprietate <b>intensivă</b> diferită între componente (densitate, temperatură de fierbere, solubilitate, dimensiune): de aceea alegerea depinde de amestec." },
        { id: "densita", label: "Densitatea", x: 28, y: 62, color: "#eab308", html: "ρ = m/V, proprietate intensivă.", why: "Se spune că <b>Arhimede</b> (secolul al III-lea î.Hr.) a descoperit principiul împingerii hidrostatice tocmai în timp ce căuta o cale de a verifica dacă coroana lui Hieron era din aur pur, comparând densitatea fără a strica obiectul." }
      ],
      edges: [
        ["materia", "stati", "se prezintă în"],
        ["materia", "pura", "se clasifică în"],
        ["materia", "miscugli", "se clasifică în"],
        ["miscugli", "omo", "poate fi"],
        ["miscugli", "etero", "poate fi"],
        ["omo", "metodi", "se separă prin"],
        ["etero", "metodi", "se separă prin"],
        ["pura", "densita", "are o"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: separări",
      questions: [
        { type: "mc", q: "Pentru a separa uleiul de apă se folosește…", options: ["distilarea", "pâlnia de separare (decantarea)", "magnetul"], answer: 1, explain: "Cele două lichide nu se amestecă și au densități diferite: uleiul, mai puțin dens, stă deasupra." },
        { type: "mc", q: "Aerul este…", options: ["o substanță pură", "un amestec omogen de gaze", "un amestec eterogen"], answer: 1, explain: "Este un amestec de azot (78%), oxigen (21%) și alte gaze: o singură fază." },
        { type: "tf", q: "În timpul fierberii unei substanțe pure temperatura rămâne constantă.", answer: true, explain: "Căldura furnizată servește la schimbarea stării, nu la creșterea temperaturii." }
      ]
    }
  ],
  glossary: [
    { t: "Materie", d: "Tot ceea ce are masă și ocupă un volum." },
    { t: "Densitate", d: "Raportul dintre masa și volumul unui corp: ρ = m/V." },
    { t: "Proprietate intensivă", d: "Proprietate care nu depinde de cantitatea de materie (densitate, temperatură de fierbere)." },
    { t: "Stare de agregare", d: "Modul în care sunt organizate particulele: solidă, lichidă, gazoasă." },
    { t: "Substanță pură", d: "Materie cu compoziție definită: un element sau un compus." },
    { t: "Amestec", d: "Ansamblu de mai multe substanțe necombinate chimic, în proporții variabile." },
    { t: "Fază", d: "Porțiune de materie cu proprietăți uniforme, separată de restul printr-o suprafață." },
    { t: "Soluție", d: "Amestec omogen de dizolvat într-un solvent." },
    { t: "Solubilitate", d: "Cantitatea maximă de dizolvat care se dizolvă într-o cantitate de solvent la o anumită temperatură." },
    { t: "Distilare", d: "Separarea lichidelor pe baza diferenței de temperatură de fierbere." },
    { t: "Cromatografie", d: "Tehnică de separare bazată pe afinitatea diferită a componentelor pentru o fază fixă și una mobilă." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care proprietate NU depinde de cantitatea de materie?", options: ["Masa", "Volumul", "Densitatea"], answer: 2, explain: "Densitatea este o proprietate intensivă: este aceeași pentru un gram și pentru un kilogram din același material." },
      { type: "num", q: "Un bloc are masa de 540 g și volumul de 200 cm³. Care este densitatea lui?", answer: 2.7, tol: 0.01, unit: "g/cm³", explain: "ρ = 540/200 = 2,7 g/cm³." },
      { type: "mc", q: "În ce stare sunt particulele foarte depărtate și în mișcare rapidă și dezordonată?", options: ["Solidă", "Lichidă", "Gazoasă"], answer: 2, explain: "În gaze forțele dintre particule sunt neglijabile, iar volumul este cel al vasului." },
      { type: "tf", q: "Bronzul, aliaj de cupru și staniu, este un amestec omogen.", answer: true, explain: "Are o singură fază și proporții variabile între componente." },
      { type: "tf", q: "Un amestec are întotdeauna o temperatură de fierbere constantă.", answer: false, explain: "Doar substanțele pure au temperatura constantă în timpul trecerii de stare." },
      { type: "mc", q: "Pentru a obține apă potabilă din apa mării, folosind volatilitatea diferită, se folosește…", options: ["filtrarea", "distilarea", "cernerea"], answer: 1, explain: "Apa se evaporă și apoi se condensează, lăsând sărurile: este principiul instalațiilor termice de desalinizare." },
      { type: "num", q: "Dizolvi 15 g de zahăr în 135 g de apă. Care este % m/m?", answer: 10, unit: "%", explain: "15 / (15 + 135) × 100 = 10%." },
      { type: "order", q: "Pune în ordine pașii pentru separarea nisipului, a sării și a fierului.", items: ["Trecerea magnetului", "Adăugarea apei și amestecarea", "Filtrarea", "Evaporarea filtratului"], explain: "Mai întâi se îndepărtează fierul uscat, apoi se dizolvă sarea, se filtrează nisipul și la final se recuperează sarea." },
      { type: "text", q: "Cum se numește componenta aflată în cantitate mai mare într-o soluție?", answer: ["solvent", "solventul"], explain: "Solventul este componenta predominantă; dizolvatul este cel care se dizolvă." },
      { type: "mc", q: "O suspensie de globule roșii în plasmă se separă prin…", options: ["centrifugare", "evaporare", "cromatografie"], answer: 0, explain: "Rotația rapidă accentuează diferența de densitate, iar globulele se depun pe fund." }
    ]
  }
});
