TOPIC('ro', {
  id: "l1-fis-equilibrio-fluidi",
  title: "Echilibrul fluidelor",
  intro: "De ce te dor urechile când te scufunzi în adâncime? De ce plutește o navă de oțel, iar un ac se scufundă? Cum reușește o presiune mică a piciorului pe pedală să oprească o mașină de o tonă? Răspunsurile se află în <b>presiune</b> și în trei legi care poartă numele unor mari oameni de știință: <b>Pascal</b>, <b>Stevin</b> și <b>Arhimede</b>. În această lecție studiem fluidele, adică lichidele și gazele, când sunt în <b>repaus</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Ce este presiunea",
      html: `<p>Dacă mergi pe zăpadă proaspătă cu bocanci, te scufunzi; cu schiurile, nu. Greutatea este aceeași, dar se schimbă <b>suprafața</b> pe care se distribuie. Pentru a descrie acest efect se folosește <b>presiunea</b>:</p>
<p style="text-align:center"><b>p = F / S</b></p>
<p>unde F este forța <b>perpendiculară</b> pe suprafață, iar S aria pe care acționează. În Sistemul Internațional unitatea este <b>pascalul</b> (Pa): 1 Pa = 1 N/m². Este o presiune foarte mică (o foaie de hârtie așezată pe o masă exercită aproximativ 1 Pa!), de aceea se folosesc adesea:</p>
<ul>
<li><b>hectopascalul</b> (hPa) = 100 Pa, folosit în prognozele meteo;</li>
<li><b>atmosfera</b> (atm): 1 atm = 101 325 Pa ≈ 1013 hPa, presiunea medie a aerului la nivelul mării;</li>
<li><b>barul</b>: 1 bar = 100 000 Pa (presiunea din anvelope se măsoară în bar);</li>
<li><b>milimetrul de mercur</b> (mmHg): 1 atm = 760 mmHg.</li>
</ul>
<p>Exemplu: un cui și un ciocan. Aceeași forță de 100 N, aplicată pe capul cuiului (aproximativ 1 cm² = 0,0001 m²) dă p = 100/0,0001 = 1 000 000 Pa, dar pe vârf (0,01 mm² = 10<sup>−8</sup> m²) dă p = 10 000 000 000 Pa: iată de ce vârful pătrunde în lemn.</p>`
    },
    {
      type: "example",
      title: "Exemplu: toc stiletto contra bocanc",
      html: `<p>O persoană de 60 kg (G = 588 N) stă într-un toc stiletto cu aria de 1 cm² (0,0001 m²), sau în doi bocanci, fiecare cu aria tălpii de 200 cm² (0,02 m²).</p>
<ol>
<li>Toc stiletto (toată greutatea pe un toc): p = 588 / 0,0001 = <b>5 880 000 Pa</b> (aproximativ 58 atm!).</li>
<li>Bocanci (două tălpi, S totală = 0,04 m²): p = 588 / 0,04 = <b>14 700 Pa</b> (aproximativ 0,15 atm).</li>
</ol>
<p>Tocul are o presiune de aproape 400 de ori mai mare: de aceea poate găuri un parchet de lemn, iar bocancii nu. Este și motivul pentru care schiurile, rachetele de zăpadă și șenilele tractoarelor distribuie greutatea pe suprafețe mari.</p>`
    },
    {
      type: "text",
      title: "Principiul lui Pascal și presa hidraulică",
      html: `<p>Lichidele sunt (practic) <b>incompresibile</b> și transmit presiunea în toate direcțiile. Blaise Pascal (1623-1662) l-a enunțat astfel:</p>
<p style="text-align:center"><b>O presiune exercitată într-un punct al unui fluid în echilibru se transmite nemodificată în orice alt punct al fluidului și pe pereții vasului.</b></p>
<p>Aplicație: <b>presa hidraulică</b>. Doi pistoane cu arii diferite, S<sub>1</sub> (mic) și S<sub>2</sub> (mare), sunt legate printr-un lichid. Dacă apăsăm pistonul mic cu F<sub>1</sub>, presiunea p = F<sub>1</sub>/S<sub>1</sub> se transmite la cel mare, care exercită F<sub>2</sub> = p·S<sub>2</sub>:</p>
<p style="text-align:center"><b>F<sub>1</sub> / S<sub>1</sub> = F<sub>2</sub> / S<sub>2</sub></b></p>
<p>Dacă S<sub>2</sub> este de 100 de ori S<sub>1</sub>, forța se înmulțește cu 100. Dar atenție: lichidul nu se creează și nu se distruge, deci pistonul mic trebuie să se deplaseze de <b>100 de ori mai mult</b> decât cel mare. Lucrul mecanic (forță × deplasare) este același: ca la pârghie, nu se câștigă energie, se schimbă forță pe deplasare.</p>
<p>Principiul lui Pascal stă la baza frânelor hidraulice ale mașinilor, a elevatoarelor din garaje, a preselor și a brațelor excavatoarelor.</p>`
    },
    {
      type: "svg",
      title: "Presa hidraulică",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<path d="M90 120 L90 230 L510 230 L510 100 L420 100 L420 190 L180 190 L180 120 Z" fill="#7dd3fc" stroke="#0369a1" stroke-width="3"/>
<rect x="95" y="100" width="80" height="18" fill="#64748b"/>
<rect x="125" y="60" width="20" height="40" fill="#64748b"/>
<line x1="135" y1="20" x2="135" y2="56" stroke="#16a34a" stroke-width="5"/>
<polygon points="135,58 126,42 144,42" fill="#16a34a"/>
<text x="150" y="35" font-size="18" fill="#15803d" font-weight="bold">F1 (mică)</text>
<text x="135" y="260" font-size="17" text-anchor="middle" fill="#1f2937" font-weight="bold">S1</text>
<rect x="425" y="78" width="130" height="18" fill="#64748b"/>
<rect x="470" y="40" width="40" height="38" fill="#64748b"/>
<rect x="445" y="14" width="90" height="26" rx="4" fill="#ef4444"/>
<text x="490" y="33" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">sarcină</text>
<line x1="590" y1="40" x2="590" y2="92" stroke="#16a34a" stroke-width="5"/>
<polygon points="590,38 582,54 598,54" fill="#16a34a"/>
<text x="480" y="260" font-size="17" text-anchor="middle" fill="#1f2937" font-weight="bold">S2 (mare)</text>
<text x="300" y="215" font-size="18" text-anchor="middle" fill="#0c4a6e" font-weight="bold">aceeași presiune peste tot</text>
<text x="300" y="130" font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">F1 / S1 = F2 / S2</text>
</svg>`,
      caption: "Presiunea p = F/S este aceeași în cele două pistoane. Dacă S2 = 20·S1, atunci F2 = 20·F1, dar pistonul mic coboară pe o distanță de 20 de ori mai mare."
    },
    {
      type: "quiz",
      title: "Mini-test: presiune și Pascal",
      questions: [
        { type: "num", q: "O forță de 200 N acționează perpendicular pe o suprafață de 0,5 m². Ce presiune (în Pa) rezultă?", answer: 400, unit: "Pa", explain: "p = F/S = 200 / 0,5 = 400 Pa." },
        { type: "num", q: "Într-o presă hidraulică, pistonul mic are aria de 4 cm², iar cel mare de 100 cm². Dacă pe cel mic se exercită 50 N, ce forță (în N) se obține pe cel mare?", answer: 1250, unit: "N", explain: "F2 = F1·S2/S1 = 50 × 100/4 = 1250 N." },
        { type: "tf", q: "Presa hidraulică economisește, pe lângă forță, și lucru mecanic.", answer: false, explain: "Lucrul mecanic rămâne același: forța se înmulțește, dar deplasarea pistonului mare este proporțional mai mică." }
      ]
    },
    {
      type: "text",
      title: "Legea lui Stevin",
      html: `<p>Într-un lichid în repaus presiunea <b>crește cu adâncimea</b>: la fiecare punct situat mai jos se adaugă greutatea coloanei de lichid de deasupra. Simon Stevin (1548-1620), matematician și inginer flamand, a formulat legea:</p>
<p style="text-align:center"><b>p = p<sub>0</sub> + ρ · g · h</b></p>
<ul>
<li>p<sub>0</sub> este presiunea de la suprafață (de obicei presiunea atmosferică);</li>
<li>ρ este <b>densitatea</b> lichidului (apă: aproximativ 1000 kg/m³);</li>
<li>g = 9,8 m/s²;</li>
<li>h este <b>adâncimea</b>.</li>
</ul>
<p>Din formulă rezultă că:</p>
<ul>
<li>presiunea depinde <b>doar de adâncime</b> și de densitate, nu de forma vasului și nici de cantitatea de apă («paradoxul hidrostatic»);</li>
<li>toate punctele aflate la aceeași adâncime au aceeași presiune: suprafața liberă a unui lichid este <b>orizontală</b>;</li>
<li>în <b>vasele comunicante</b> un lichid omogen ajunge la același nivel în toate ramurile; dacă lichidele sunt diferite, înălțimile sunt <b>invers proporționale</b> cu densitățile (ρ<sub>1</sub>h<sub>1</sub> = ρ<sub>2</sub>h<sub>2</sub>).</li>
</ul>
<p>La fiecare <b>10 m</b> de adâncime în apă presiunea crește cu aproximativ <b>1 atm</b> (ρgh = 1000·9,8·10 ≈ 98 000 Pa). La 30 m un scafandru are deci o presiune totală de aproximativ 4 atm: 1 de la aer plus 3 de la apă.</p>`
    },
    {
      type: "example",
      title: "Exemplu: presiunea într-o piscină și pe fundul mării",
      html: `<p>Calculăm presiunea <b>datorată apei</b> la diferite adâncimi (ρ = 1000 kg/m³, g = 9,8 m/s²):</p>
<ul>
<li>3 m (fundul unei piscine adânci): ρgh = 1000 × 9,8 × 3 = 29 400 Pa, aproximativ 0,3 atm;</li>
<li>40 m (limita pentru o scufundare recreativă adâncă): 392 000 Pa, aproximativ 3,9 atm doar de la apă, aproximativ 4,9 atm în total;</li>
<li>aproximativ 10 900 m (Groapa Marianelor, în cel mai adânc punct): aproximativ 1100 atm: pe fiecare centimetru pătrat apasă o greutate de peste o tonă.</li>
</ul>
<p>De aceea submarinele au cocă rezistentă, iar batiscafele sunt sfere de oțel gros sau de titan: sfera distribuie mai bine presiunea. Pe timpanul nostru, la doar 2 m adâncime, diferența de presiune este deja simțitoare (aproximativ 0,2 atm) și ne face să «simțim» urechea.</p>`
    },
    {
      type: "svg",
      title: "Presiunea crește cu adâncimea",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="40" width="260" height="230" fill="#7dd3fc" stroke="#0369a1" stroke-width="3"/>
<line x1="60" y1="40" x2="320" y2="40" stroke="#0369a1" stroke-width="4"/>
<text x="190" y="30" font-size="16" text-anchor="middle" fill="#0369a1" font-weight="bold">suprafața: p0</text>
<g stroke="#1e3a8a" stroke-width="3" fill="#1e3a8a">
<line x1="150" y1="90" x2="205" y2="90"/><polygon points="210,90 198,84 198,96"/>
<line x1="150" y1="170" x2="225" y2="170"/><polygon points="230,170 218,164 218,176"/>
<line x1="150" y1="250" x2="245" y2="250"/><polygon points="250,250 238,244 238,256"/>
</g>
<text x="75" y="95" font-size="16" fill="#1f2937">h = 5 m</text>
<text x="75" y="175" font-size="16" fill="#1f2937">h = 15 m</text>
<text x="75" y="255" font-size="16" fill="#1f2937">h = 25 m</text>
<text x="360" y="95" font-size="17" fill="#1f2937">p = 1 + 0,5 = 1,5 atm</text>
<text x="360" y="175" font-size="17" fill="#1f2937">p = 1 + 1,5 = 2,5 atm</text>
<text x="360" y="255" font-size="17" fill="#1f2937">p = 1 + 2,5 = 3,5 atm</text>
<text x="360" y="50" font-size="16" fill="#475569">săgeată mai lungă = presiune mai mare</text>
</svg>`,
      caption: "La fiecare 10 m de apă se adaugă aproximativ 1 atm. Săgețile arată că presiunea acționează perpendicular pe pereți și crește pe măsură ce coborâm."
    },
    {
      type: "text",
      title: "Presiunea atmosferică și Torricelli",
      html: `<p>Și aerul are greutate: deasupra fiecărui metru pătrat de suprafață terestră se află o coloană de aer înaltă de zeci de km, care cântărește aproximativ 100 000 N. De aceea presiunea atmosferică la nivelul mării este de aproximativ <b>1 atm = 101 325 Pa</b>.</p>
<p>În <b>1643</b>, Evangelista Torricelli, elev al lui Galilei, a umplut cu mercur un tub de sticlă lung de aproximativ un metru, închis la un capăt, și l-a răsturnat într-un vas cu mercur. Mercurul a coborât până s-a stabilizat la aproximativ <b>760 mm</b> deasupra nivelului din vas, lăsând în partea de sus un spațiu gol («vidul torricellian»). Presiunea aerului susținea coloana: se născuse <b>barometrul</b>. Mercurul este de 13,6 ori mai dens decât apa: cu apă, coloana ar fi înaltă de peste 10 m (aproximativ 10,3 m).</p>
<p>Pe la 1654, Otto von Guericke a demonstrat forța presiunii atmosferice cu <b>emisferele din Magdeburg</b>: după ce a scos aerul din două emisfere de cupru, două echipe de cai nu au reușit să le despartă. La altitudine presiunea scade: la aproximativ 5500 m este aproximativ jumătate din cea de la nivelul mării, iar de aceea la munte apa fierbe sub 100 °C, iar pungile de chipsuri se umflă în avion.</p>`
    },
    {
      type: "text",
      title: "Principiul lui Arhimede",
      html: `<p>De ce cântărește o piatră mai puțin în apă, iar o minge este greu de ținut sub apă? Pentru că orice corp scufundat într-un fluid primește o împingere de jos în sus, pe care Arhimede din Siracuza (secolul al III-lea î.Hr.) a formulat-o astfel:</p>
<p style="text-align:center"><b>Un corp scufundat într-un fluid primește o împingere de jos în sus egală cu greutatea fluidului dezlocuit.</b></p>
<p style="text-align:center"><b>F<sub>A</sub> = ρ<sub>fluid</sub> · V<sub>scufundat</sub> · g</b></p>
<p>De ce apare? Conform legii lui Stevin, presiunea pe fața inferioară a corpului (mai adâncă) este mai mare decât cea de pe fața superioară: diferența dă o forță netă îndreptată în sus, care depinde doar de volumul de fluid dezlocuit.</p>
<p>Când un corp cu densitatea ρ<sub>c</sub> este lăsat liber într-un fluid cu densitatea ρ<sub>f</sub> se compară greutatea (ρ<sub>c</sub> V g) și împingerea (ρ<sub>f</sub> V g):</p>
<ul>
<li>ρ<sub>c</sub> &gt; ρ<sub>f</sub>: greutatea învinge, corpul se <b>scufundă</b>;</li>
<li>ρ<sub>c</sub> = ρ<sub>f</sub>: echilibru în orice punct, corpul rămâne <b>suspendat</b> (ca un submarin în asietă);</li>
<li>ρ<sub>c</sub> &lt; ρ<sub>f</sub>: împingerea învinge, corpul urcă și <b>plutește</b>. La echilibru, partea scufundată satisface ρ<sub>f</sub> V<sub>scuf</sub> = ρ<sub>c</sub> V, adică V<sub>scuf</sub>/V = ρ<sub>c</sub>/ρ<sub>f</sub>.</li>
</ul>
<p>Un bloc de gheață (ρ = 917 kg/m³) în apă dulce (1000 kg/m³) are aproximativ <b>92%</b> din volum scufundat: «vârful aisbergului» este într-adevăr mic. În apă de mare (aproximativ 1025 kg/m³) iese puțin mai mult (aproximativ 10%).</p>`
    },
    {
      type: "example",
      title: "Exemplu: cât cântărește o piatră în apă?",
      html: `<p>O piatră cu volumul de 2 dm³ (0,002 m³) și densitatea de 2700 kg/m³ este atârnată de un dinamometru.</p>
<ol>
<li>Masa: m = 2700 × 0,002 = 5,4 kg; greutatea în aer: G = 5,4 × 9,8 ≈ <b>52,9 N</b>.</li>
<li>Scufundată complet în apă: împingerea F<sub>A</sub> = 1000 × 0,002 × 9,8 = <b>19,6 N</b>.</li>
<li>Dinamometrul indică <b>greutatea aparentă</b>: 52,9 − 19,6 ≈ <b>33,3 N</b>.</li>
</ol>
<p>Piatra «cântărește» cu aproximativ 37% mai puțin. De aceea, într-o piscină poți ridica un prieten: greutatea lui aparentă în apă este o mică fracțiune din cea reală.</p>`
    },
    {
      type: "curiosity",
      title: "«Evrika!» și coroana regelui",
      html: `<p>Potrivit relatării arhitectului roman Vitruviu, tiranul Siracuzei, Hieron al II-lea, dăduse aur unui bijutier pentru o coroană și bănuia că fusese amestecat cu argint. Arhimede trebuia să descopere înșelătoria fără să o deterioreze. Când a intrat într-o cadă de baie, a observat că apa dădea peste margini și a înțeles că poate măsura <b>volumul</b> coroanei după apa dezlocuită; comparând densitatea ei cu cea a aurului ar fi descoperit frauda. A alergat gol pe stradă strigând «Evrika!» («am găsit!»). Istoricii sunt nesiguri în privința detaliilor poveștii (unii cred că a folosit o balanță hidrostatică), dar metoda bazată pe densitate funcționează și astăzi pentru recunoașterea materialelor.</p>`
    },
    {
      type: "curiosity",
      title: "De ce plutește o navă de oțel?",
      html: `<p>Oțelul are densitatea de aproximativ 7800 kg/m³, de aproape opt ori cea a apei: o bucată plină se scufundă. Dar o cocă este <b>goală</b>: conține mult aer. Contează <b>densitatea medie</b> a întregului obiect (cocă + aer + încărcătură). Dacă aceasta este mai mică decât cea a apei, nava plutește. Când nava este încărcată, se scufundă puțin mai mult, dezlocuind mai multă apă și mărind împingerea, până când împingerea egalează greutatea totală: de aceea pe bordaj se desenează «liniile de încărcare» (marca Plimsoll). Dacă se deschide o spărtură și apa ia locul aerului, densitatea medie depășește pe cea a apei și nava se scufundă.</p>`
    },
    {
      type: "widget",
      title: "Plutește sau se scufundă în apă dulce?",
      widget: "classify",
      options: { groups: ["Plutește", "Se scufundă"], items: [
        ["🧊 gheață (917 kg/m³)", 0],
        ["🪵 lemn de pin (aproximativ 500 kg/m³)", 0],
        ["🫒 ulei de măsline (aproximativ 920 kg/m³)", 0],
        ["🪨 piatră (aproximativ 2700 kg/m³)", 1],
        ["🔩 fier plin (7870 kg/m³)", 1],
        ["🥇 aur (19 300 kg/m³)", 1],
        ["🎈 polistiren (aproximativ 30 kg/m³)", 0],
        ["⚓ plumb (11 340 kg/m³)", 1]
      ] },
      caption: "Compară densitatea corpului cu cea a apei (1000 kg/m³)."
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege împingerea și presiunea",
      intro: "Arhimede și Stevin nu sunt atât de intuitivi pe cât par. Iată alte drumuri.",
      tabs: [
        {
          label: "📦 Fluidul dezlocuit",
          html: `<p>Imaginează-ți că scoți piatra din apă și o înlocuiești cu o «bulă de apă» de aceeași formă. Acea bulă ar sta nemișcată, în echilibru cu apa din jur: deci împingerea asupra bulei de apă este exact egală cu greutatea ei. Acum pune la loc piatra: apa din jur nu «știe» ce se află în interiorul formei, deci împinge la fel. <b>Împingerea este greutatea apei pe care corpul a dat-o la o parte</b>. Acest raționament (tipic lui Arhimede) explică și de ce forma nu contează, ci doar volumul dezlocuit.</p>`
        },
        {
          label: "🥤 Presa cu seringi",
          html: `<p>Ia două seringi de diametre diferite, legate printr-un tub mic plin cu apă. Dacă apeși seringa mică cu puțină forță, cea mare se mișcă cu mai multă forță, dar <b>puțin</b>: ca să deplasezi cu 1 cm pistonul mare (diametru dublu, arie de 4 ori mai mare) trebuie să apeși cu 4 cm pe cel mic. Obții de 4 ori forța, dar trebuie să parcurgi de 4 ori drumul. Experimentul se poate face acasă și este o cale ușoară de a «simți» principiul lui Pascal.</p>`
        },
        {
          label: "🏔️ Coloana de apă",
          html: `<p>Gândește-te la un turn de cărămizi: cărămida de jos susține greutatea tuturor celor de deasupra. La fel în apă: la adâncimea h, deasupra fiecărui cm² se află o coloană de apă înaltă de h. Greutatea ei este: volum (S·h) × densitate × g. Împărțind la S obții p = ρ g h. Nu contează dacă deasupra este o piscină sau un lac imens: contează <b>înălțimea</b> coloanei.</p>`
        },
        {
          label: "📏 Măsurarea nivelului",
          html: `<p>«Paradoxul hidrostatic» spune că fundul unui vas lat jos și îngust sus are aceeași presiune ca unul cilindric, dacă înălțimea lichidului este aceeași. În vasele comunicante lichidul ajunge la aceeași cotă, pentru că doar așa presiunea de la fund este egală în fiecare ramură.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta echilibrului fluidelor",
      nodes: [
        { id: "fluidi", label: "Fluide în echilibru", x: 50, y: 6, color: "#64748b", html: "Lichide și gaze în repaus: nu au formă proprie, se adaptează vasului.", why: "Statica lor (hidrostatica) se naște în antichitate cu Arhimede și a fost relansată în secolul al XVII-lea de Stevin, Torricelli și Pascal, când știința experimentală a început să măsoare presiunea aerului." },
        { id: "pressione", label: "Presiune p = F/S", x: 20, y: 28, color: "#2563eb", html: "Forța perpendiculară pe unitatea de suprafață, în pascali.", why: "Unitatea poartă numele lui Blaise Pascal. Conceptul este necesar pentru că în fluide forța nu este aplicată într-un punct, ci distribuită pe întreaga suprafață." },
        { id: "pascal", label: "Principiul lui Pascal", x: 12, y: 54, color: "#16a34a", html: "Presiunea se transmite egal în tot fluidul.", why: "Pascal l-a formulat în 1647-1654, după experimentele lui Torricelli. Decurge din faptul că un fluid în echilibru nu poate susține forțe tangențiale: forța pe pereți este întotdeauna perpendiculară." },
        { id: "stevino", label: "Legea lui Stevin", x: 40, y: 54, color: "#f59e0b", html: "p = p0 + ρgh: presiunea crește cu adâncimea.", why: "Stevin (1586) a dedus-o raționând asupra echilibrului unei porțiuni de lichid: pe fața ei inferioară trebuie să acționeze presiunea care susține greutatea întregii coloane de deasupra." },
        { id: "torchio", label: "Presa hidraulică", x: 8, y: 80, color: "#22c55e", html: "F1/S1 = F2/S2: înmulțește forța.", why: "Aplicație tehnică a lui Pascal (sfârșitul secolului al XVIII-lea, Bramah). Nu creează energie: forța câștigată se plătește în deplasare." },
        { id: "atmosfera", label: "Presiunea atmosferică", x: 60, y: 28, color: "#0ea5e9", html: "Greutatea aerului: aproximativ 1 atm la nivelul mării.", why: "Torricelli (1643) a măsurat-o cu barometrul cu mercur: coloana are 760 mm pentru că ρ_Hg g h este egal cu presiunea aerului." },
        { id: "archimede", label: "Împingerea lui Arhimede", x: 75, y: 54, color: "#9333ea", html: "FA = ρ V g, în sus.", why: "Decurge din legea lui Stevin: sub corp presiunea este mai mare decât deasupra. Arhimede a enunțat-o în tratatul Despre corpurile plutitoare (secolul al III-lea î.Hr.)." },
        { id: "galleggiamento", label: "Plutirea", x: 70, y: 82, color: "#ef4444", html: "Depinde de compararea densității corpului cu cea a fluidului.", why: "Dacă greutatea depășește împingerea, corpul se scufundă, altfel urcă până când împingerea pe partea scufundată egalează greutatea. O navă plutește datorită densității sale medii." }
      ],
      edges: [["fluidi", "pressione", "se măsoară cu"], ["pressione", "pascal", "se transmite"], ["pressione", "stevino", "crește cu h"], ["pascal", "torchio", "aplicație"], ["stevino", "atmosfera", "coloană de aer"], ["stevino", "archimede", "din care decurge"], ["archimede", "galleggiamento", "explică"]]
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li><b>Presiunea</b>: p = F/S (pascal, 1 Pa = 1 N/m²). 1 atm = 101 325 Pa = 760 mmHg.</li>
<li><b>Pascal</b>: presiunea se transmite egal în tot fluidul. Presa: F1/S1 = F2/S2.</li>
<li><b>Stevin</b>: p = p0 + ρ g h. La fiecare 10 m de apă: +1 atm.</li>
<li><b>Arhimede</b>: F<sub>A</sub> = ρ<sub>fluid</sub> · V<sub>scufundat</sub> · g = greutatea fluidului dezlocuit.</li>
<li>Plutește dacă densitatea <b>medie</b> a corpului este mai mică decât cea a fluidului.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: Stevin și Arhimede",
      questions: [
        { type: "num", q: "Ce presiune (în Pa) exercită apa (ρ = 1000 kg/m³, g = 10 m/s²) la 5 m adâncime, fără a socoti atmosfera?", answer: 50000, tol: 0, unit: "Pa", explain: "p = ρ g h = 1000 × 10 × 5 = 50 000 Pa." },
        { type: "num", q: "Un cub cu latura de 10 cm este scufundat complet în apă (ρ = 1000 kg/m³, g = 10 m/s²). Cât este împingerea lui Arhimede (în N)?", answer: 10, unit: "N", explain: "V = 0,001 m³; F = 1000 × 0,001 × 10 = 10 N." },
        { type: "mc", q: "Un corp cu densitatea de 800 kg/m³ pus în apă…", options: ["se scufundă", "plutește cu 80% scufundat", "plutește cu 20% scufundat"], answer: 1, explain: "Fracțiunea scufundată este ρc/ρf = 800/1000 = 0,8, adică 80%." },
        { type: "tf", q: "Presiunea într-un lichid în repaus depinde de forma vasului.", answer: false, explain: "Depinde doar de adâncime și de densitate (legea lui Stevin)." }
      ]
    }
  ],
  glossary: [
    { t: "Presiune", d: "Raportul dintre forța perpendiculară și suprafața pe care acționează: p = F/S." },
    { t: "Pascal", d: "Unitatea de presiune din Sistemul Internațional: 1 Pa = 1 N/m²." },
    { t: "Atmosferă", d: "Unitate de presiune: 1 atm = 101 325 Pa, presiunea medie a aerului la nivelul mării." },
    { t: "Principiul lui Pascal", d: "Presiunea dintr-un punct al unui fluid în echilibru se transmite nemodificată în tot fluidul." },
    { t: "Presă hidraulică", d: "Mașină cu două pistoane de arii diferite care înmulțește forța datorită principiului lui Pascal." },
    { t: "Legea lui Stevin", d: "p = p0 + ρgh: presiunea într-un lichid crește liniar cu adâncimea." },
    { t: "Densitate", d: "Raportul dintre masă și volum: ρ = m/V." },
    { t: "Vase comunicante", d: "Recipiente legate între ele în care un lichid omogen ajunge la același nivel." },
    { t: "Împingerea lui Arhimede", d: "Forța de jos în sus asupra unui corp scufundat, egală cu greutatea fluidului dezlocuit." },
    { t: "Barometru", d: "Instrument care măsoară presiunea atmosferică; primul a fost inventat de Torricelli în 1643." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "O forță de 600 N este distribuită uniform pe 0,3 m². Ce presiune (în Pa) rezultă?", answer: 2000, unit: "Pa", explain: "p = F/S = 600/0,3 = 2000 Pa." },
      { type: "mc", q: "Câți pascali are aproximativ 1 atm?", options: ["1000 Pa", "101 325 Pa", "760 Pa"], answer: 1, explain: "1 atm = 101 325 Pa, adică 760 mmHg." },
      { type: "num", q: "Într-o presă hidraulică, pistonul mic are aria de 5 cm², cel mare de 200 cm². Cu ce forță (în N) trebuie apăsat pistonul mic pentru a ridica o sarcină care cere 4000 N pe cel mare?", answer: 100, unit: "N", explain: "F1 = F2·S1/S2 = 4000 × 5/200 = 100 N." },
      { type: "tf", q: "În presa hidraulică, deplasarea pistonului mare este mai mare decât cea a pistonului mic.", answer: false, explain: "Volumul de lichid deplasat este același: pistonul mare, având aria mai mare, se deplasează mai puțin." },
      { type: "num", q: "Care este presiunea apei (ρ = 1000 kg/m³, g = 9,8 m/s²) la 20 m adâncime, fără a socoti atmosfera, în Pa?", answer: 196000, tol: 100, unit: "Pa", explain: "p = ρ g h = 1000 × 9,8 × 20 = 196 000 Pa, aproximativ 2 atm." },
      { type: "mc", q: "Cine a măsurat primul presiunea atmosferică cu un tub cu mercur?", options: ["Arhimede", "Torricelli", "Newton"], answer: 1, explain: "Evangelista Torricelli, în 1643: mercurul s-a oprit la aproximativ 760 mm." },
      { type: "tf", q: "Un corp cu densitatea mai mare decât a apei nu poate pluti niciodată, nici măcar dacă este gol pe dinăuntru.", answer: false, explain: "Contează densitatea medie: o navă de oțel goală pe dinăuntru are densitatea medie mai mică decât a apei." },
      { type: "num", q: "Un obiect cu volumul de 0,005 m³ este scufundat complet în apă (ρ = 1000 kg/m³, g = 10 m/s²). Cât este împingerea (în N)?", answer: 50, unit: "N", explain: "FA = ρ V g = 1000 × 0,005 × 10 = 50 N." },
      { type: "order", q: "Pune în ordine pașii pentru a afla dacă un corp plutește.", items: ["Măsurarea masei și a volumului corpului", "Calcularea densității corpului (m/V)", "Compararea ei cu densitatea fluidului", "Concluzia: plutește dacă este mai mică, se scufundă dacă este mai mare"], explain: "Se compară densitățile: corpul plutește dacă densitatea lui medie este mai mică decât cea a fluidului." },
      { type: "mc", q: "De ce crește presiunea când cobori într-un lac?", options: ["Pentru că apa este mai rece", "Pentru că deasupra se află greutatea coloanei de apă", "Pentru că gravitația crește"], answer: 1, explain: "Fiecare strat trebuie să susțină greutatea apei de deasupra, așa cum prevede Stevin." },
      { type: "text", q: "Cum se numește strigătul atribuit lui Arhimede când a descoperit metoda de a măsura volumul coroanei?", answer: ["eureka", "evrika", "heureka"], explain: "«Evrika!» (în greacă «am găsit»)." }
    ]
  }
});
