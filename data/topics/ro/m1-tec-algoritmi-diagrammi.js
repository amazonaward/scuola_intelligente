TOPIC('ro', {
  id: `m1-tec-algoritmi-diagrammi`,
  title: `Algoritmi și scheme logice`,
  intro: `O rețetă, instrucțiunile de la Lego, drumul până la școală: toate sunt <b>algoritmi</b>, secvențe de pași precişi pentru a rezolva o problemă. Calculatoarele nu fac altceva decât să execute algoritmi scriși de oameni. În această lecție învățăm să îi <b>scriem</b> și să îi <b>desenăm</b> cu <b>schemele logice</b>, primul pas pentru a deveni programatori. 🤖➡️🔷`,
  minutes: 40,
  sections: [
    {
      type: `text`, title: `1. Ce este un algoritm`,
      html: `<p>Un <b>algoritm</b> este o <b>secvență finită de instrucțiuni clare</b> care, executate în ordine, rezolvă o problemă.</p>
<p>Un algoritm bun trebuie să fie:</p>
<ul>
<li><b>finit</b>: trebuie să se termine după un număr limitat de pași;</li>
<li><b>neambiguu</b>: fiecare instrucțiune se poate înțelege într-un singur fel („adaugă puțină sare” este ambiguu, „adaugă 5 g de sare” nu este);</li>
<li><b>executabil</b>: cel care îl execută (persoană sau mașină) trebuie să poată face fiecare pas;</li>
<li><b>general</b>: trebuie să funcționeze pentru toate cazurile de același tip, nu doar pentru unul.</li>
</ul>
<p>Cel care execută algoritmul se numește <b>executant</b>. Un calculator este un executant foarte rapid, dar <b>fără imaginație</b>: face exact ceea ce este scris, chiar dacă este greșit!</p>`
    },
    {
      type: `example`, title: `Exemplu practic: algoritmul ceaiului`,
      html: `<ol>
<li>Umple fierbătorul cu apă.</li>
<li>Pornește fierbătorul.</li>
<li><b>Cât timp</b> apa nu fierbe, așteaptă.</li>
<li>Pune plicul în ceașcă.</li>
<li>Toarnă apa în ceașcă.</li>
<li>Așteaptă 3 minute și scoate plicul.</li>
<li><b>Dacă</b> vrei ceai dulce, adaugă zahăr; <b>altfel</b> nu adăuga nimic.</li>
<li>Sfârșit: bea ceaiul! 🍵</li>
</ol>
<p>Observă trei lucruri: pașii sunt în <b>secvență</b>; la pasul 3 există o <b>repetiție</b> (așteaptă cât timp…); la pasul 7 există o <b>alegere</b> (dacă… altfel…). Acestea sunt cele trei „cărămizi” ale oricărui algoritm.</p>`
    },
    {
      type: `text`, title: `2. Simbolurile schemelor logice`,
      html: `<p>O <b>schemă logică</b> (în engleză <i>flowchart</i>) desenează un algoritm cu blocuri de forme diferite, legate prin <b>săgeți</b> care arată ordinea.</p>
<table>
<tr><th>Forma</th><th>Nume</th><th>Semnificație</th></tr>
<tr><td>⬭ oval</td><td><b>Început / Sfârșit</b></td><td>unde începe și unde se termină algoritmul</td></tr>
<tr><td>▱ paralelogram</td><td><b>Intrare / Ieșire</b></td><td>citirea unei date (intrare) sau afișarea unui rezultat (ieșire)</td></tr>
<tr><td>▭ dreptunghi</td><td><b>Prelucrare</b></td><td>o acțiune sau un calcul (ex. sumă ← a + b)</td></tr>
<tr><td>◇ romb</td><td><b>Decizie</b></td><td>o întrebare cu răspuns <b>da / nu</b> (adevărat / fals): de aici ies două săgeți</td></tr>
<tr><td>→ săgeată</td><td><b>Flux</b></td><td>arată pasul următor</td></tr>
</table>
<p>Reguli: un singur <b>Început</b>, cel puțin un <b>Sfârșit</b>, fiecare bloc are o săgeată de intrare și una de ieșire (rombul are două de ieșire).</p>`
    },
    {
      type: `svg`, title: `O schemă logică: par sau impar?`,
      caption: `Algoritmul citește un număr N, verifică dacă restul împărțirii la 2 este 0 și scrie „par” sau „impar”.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs><marker id="fa" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#334155"/></marker></defs>
<ellipse cx="300" cy="25" rx="60" ry="18" fill="#86efac" stroke="#166534" stroke-width="2"/>
<text x="300" y="31" font-size="16" text-anchor="middle" fill="#14532d" font-weight="bold">ÎNCEPUT</text>
<line x1="300" y1="43" x2="300" y2="58" stroke="#334155" stroke-width="2" marker-end="url(#fa)"/>
<polygon points="250,62 370,62 350,96 230,96" fill="#93c5fd" stroke="#1e40af" stroke-width="2"/>
<text x="300" y="85" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">citește N</text>
<line x1="300" y1="96" x2="300" y2="112" stroke="#334155" stroke-width="2" marker-end="url(#fa)"/>
<polygon points="300,116 385,150 300,184 215,150" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="148" font-size="14" text-anchor="middle" fill="#713f12" font-weight="bold">restul lui</text>
<text x="300" y="166" font-size="14" text-anchor="middle" fill="#713f12" font-weight="bold">N : 2 = 0 ?</text>
<line x1="215" y1="150" x2="140" y2="150" stroke="#334155" stroke-width="2"/>
<line x1="140" y1="150" x2="140" y2="198" stroke="#334155" stroke-width="2" marker-end="url(#fa)"/>
<text x="175" y="142" font-size="15" fill="#166534" font-weight="bold">DA</text>
<line x1="385" y1="150" x2="460" y2="150" stroke="#334155" stroke-width="2"/>
<line x1="460" y1="150" x2="460" y2="198" stroke="#334155" stroke-width="2" marker-end="url(#fa)"/>
<text x="410" y="142" font-size="15" fill="#b91c1c" font-weight="bold">NU</text>
<polygon points="85,202 215,202 195,236 65,236" fill="#93c5fd" stroke="#1e40af" stroke-width="2"/>
<text x="140" y="225" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">scrie „par”</text>
<polygon points="405,202 535,202 515,236 385,236" fill="#93c5fd" stroke="#1e40af" stroke-width="2"/>
<text x="460" y="225" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">scrie „impar”</text>
<line x1="140" y1="236" x2="140" y2="270" stroke="#334155" stroke-width="2"/>
<line x1="460" y1="236" x2="460" y2="270" stroke="#334155" stroke-width="2"/>
<line x1="140" y1="270" x2="236" y2="270" stroke="#334155" stroke-width="2" marker-end="url(#fa)"/>
<line x1="460" y1="270" x2="364" y2="270" stroke="#334155" stroke-width="2" marker-end="url(#fa)"/>
<ellipse cx="300" cy="275" rx="60" ry="18" fill="#fca5a5" stroke="#991b1b" stroke-width="2"/>
<text x="300" y="281" font-size="16" text-anchor="middle" fill="#7f1d1d" font-weight="bold">SFÂRȘIT</text>
</svg>`
    },
    {
      type: `widget`, title: `Recunoaște blocurile`,
      widget: `labelDiagram`,
      caption: `Apasă pe fiecare bloc și alege-i numele.`,
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<ellipse cx="100" cy="60" rx="70" ry="28" fill="#86efac" stroke="#166534" stroke-width="3"/>
<polygon points="250,35 390,35 360,85 220,85" fill="#93c5fd" stroke="#1e40af" stroke-width="3"/>
<rect x="430" y="35" width="140" height="50" fill="#c4b5fd" stroke="#5b21b6" stroke-width="3"/>
<polygon points="200,150 280,195 200,240 120,195" fill="#fde68a" stroke="#a16207" stroke-width="3"/>
<line x1="340" y1="195" x2="440" y2="195" stroke="#334155" stroke-width="4"/>
<polygon points="440,185 460,195 440,205" fill="#334155"/>
</svg>`,
        spots: [
          { x: 100, y: 60, label: `Început / Sfârșit` },
          { x: 305, y: 60, label: `Intrare / Ieșire` },
          { x: 500, y: 60, label: `Prelucrare` },
          { x: 200, y: 195, label: `Decizie` },
          { x: 400, y: 195, label: `Săgeată de flux` }
        ]
      }
    },
    {
      type: `quiz`, title: `Mini-test: blocurile`,
      questions: [
        { type: `mc`, q: `Ce formă se folosește pentru o întrebare cu răspuns da / nu?`, options: [`dreptunghi`, `romb`, `oval`], answer: 1, explain: `Rombul este blocul de decizie: din el ies două săgeți.` },
        { type: `mc`, q: `„Citește numărul N” se pune într-un bloc…`, options: [`de intrare / ieșire (paralelogram)`, `de început`, `de decizie`], answer: 0, explain: `Citirea unei date este o intrare.` },
        { type: `tf`, q: `„Pune puțină făină” este o instrucțiune neambiguă.`, answer: false, explain: `„Puțină” se poate înțelege în multe feluri: este nevoie de o cantitate precisă.` }
      ]
    },
    {
      type: `text`, title: `3. Cele trei structuri fundamentale`,
      html: `<p>Orice algoritm, chiar și cel mai complicat, se poate construi combinând doar <b>trei structuri</b>:</p>
<ol>
<li><b>Secvența</b>: instrucțiuni una după alta (mai întâi A, apoi B, apoi C).</li>
<li><b>Selecția</b> (sau alegerea): <b>DACĂ</b> o condiție este adevărată faci A, <b>ALTFEL</b> faci B. În schemă este rombul cu două drumuri care apoi se reunesc.</li>
<li><b>Iterația</b> (sau ciclul, repetiția): <b>REPETĂ</b> niște instrucțiuni cât timp o condiție este adevărată, sau de un număr fixat de ori. În schemă este o săgeată care <b>se întoarce înapoi</b>.</li>
</ol>
<p>Au demonstrat-o doi informaticieni italieni, <b>Corrado Böhm</b> și <b>Giuseppe Jacopini</b>, în <b>1966</b>: este <b>teorema Böhm-Jacopini</b>, unul dintre fundamentele programării.</p>
<p>⚠️ Atenție la <b>ciclurile infinite</b>: dacă condiția de ieșire din ciclu nu devine niciodată adevărată, algoritmul nu se mai termină!</p>`
    },
    {
      type: `svg`, title: `Secvență, selecție, iterație`,
      caption: `Cele trei „cărămizi” ale programării: cu ele se construiește orice algoritm.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<defs><marker id="fb" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#334155"/></marker></defs>
<text x="100" y="30" font-size="17" text-anchor="middle" fill="#1e3a8a" font-weight="bold">SECVENȚĂ</text>
<rect x="50" y="50" width="100" height="40" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/><text x="100" y="76" font-size="16" text-anchor="middle" fill="#3b0764">A</text>
<line x1="100" y1="90" x2="100" y2="116" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<rect x="50" y="120" width="100" height="40" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/><text x="100" y="146" font-size="16" text-anchor="middle" fill="#3b0764">B</text>
<line x1="100" y1="160" x2="100" y2="186" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<rect x="50" y="190" width="100" height="40" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/><text x="100" y="216" font-size="16" text-anchor="middle" fill="#3b0764">C</text>
<text x="300" y="30" font-size="17" text-anchor="middle" fill="#1e3a8a" font-weight="bold">SELECȚIE</text>
<polygon points="300,50 360,85 300,120 240,85" fill="#fde68a" stroke="#a16207" stroke-width="2"/><text x="300" y="91" font-size="15" text-anchor="middle" fill="#713f12">cond?</text>
<line x1="240" y1="85" x2="225" y2="85" stroke="#334155" stroke-width="2"/><line x1="225" y1="85" x2="225" y2="146" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<line x1="360" y1="85" x2="375" y2="85" stroke="#334155" stroke-width="2"/><line x1="375" y1="85" x2="375" y2="146" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<text x="222" y="75" font-size="13" text-anchor="end" fill="#166534" font-weight="bold">da</text><text x="378" y="75" font-size="13" fill="#b91c1c" font-weight="bold">nu</text>
<rect x="190" y="150" width="70" height="40" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/><text x="225" y="176" font-size="16" text-anchor="middle" fill="#3b0764">A</text>
<rect x="340" y="150" width="70" height="40" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/><text x="375" y="176" font-size="16" text-anchor="middle" fill="#3b0764">B</text>
<path d="M225 190 L225 230 L300 230 M375 190 L375 230 L300 230" stroke="#334155" stroke-width="2" fill="none"/>
<line x1="300" y1="230" x2="300" y2="256" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<text x="500" y="30" font-size="17" text-anchor="middle" fill="#1e3a8a" font-weight="bold">ITERAȚIE</text>
<rect x="450" y="60" width="100" height="40" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/><text x="500" y="86" font-size="16" text-anchor="middle" fill="#3b0764">A</text>
<line x1="500" y1="100" x2="500" y2="126" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<polygon points="500,130 560,165 500,200 440,165" fill="#fde68a" stroke="#a16207" stroke-width="2"/><text x="500" y="171" font-size="15" text-anchor="middle" fill="#713f12">gata?</text>
<path d="M440 165 L420 165 L420 80 L446 80" stroke="#dc2626" stroke-width="2" fill="none" marker-end="url(#fb)"/>
<text x="415" y="125" font-size="13" text-anchor="end" fill="#b91c1c" font-weight="bold">nu</text>
<line x1="500" y1="200" x2="500" y2="246" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<text x="510" y="230" font-size="13" fill="#166534" font-weight="bold">da</text>
<text x="300" y="290" font-size="14" text-anchor="middle" fill="#334155">Teorema Böhm-Jacopini (1966)</text>
</svg>`
    },
    {
      type: `example`, title: `Exemplu practic: algoritmul lui Euclid pentru c.m.m.d.c.`,
      html: `<p>Unul dintre cei mai vechi algoritmi din lume (circa 300 î.Hr.) găsește <b>Cel mai Mare Divizor Comun</b> a două numere A și B:</p>
<ol>
<li><b>Început</b>: citește A și B.</li>
<li><b>Cât timp</b> B este diferit de 0, repetă:
<ul><li>calculează R = restul lui A : B;</li><li>pune A ← B și B ← R.</li></ul></li>
<li>Scrie A: este c.m.m.d.c. <b>Sfârșit</b>.</li>
</ol>
<p><b>Să încercăm cu A = 48 și B = 18:</b></p>
<table>
<tr><th>A</th><th>B</th><th>restul A : B</th></tr>
<tr><td>48</td><td>18</td><td>12</td></tr>
<tr><td>18</td><td>12</td><td>6</td></tr>
<tr><td>12</td><td>6</td><td>0</td></tr>
<tr><td><b>6</b></td><td>0</td><td>stop!</td></tr>
</table>
<p>c.m.m.d.c.(48, 18) = <b>6</b>. Conține o <b>secvență</b>, un <b>ciclu</b> și o <b>condiție</b>.</p>`
    },
    {
      type: `example`, title: `Exemplu practic: traversarea străzii`,
      html: `<p>Desenează (în caiet) schema logică a acestui algoritm:</p>
<ol>
<li>Început.</li>
<li>Ajungi la trecerea de pietoni.</li>
<li>Semaforul pentru pietoni este verde? <b>Nu</b> → așteaptă și verifică din nou (ciclu). <b>Da</b> → mergi mai departe.</li>
<li>Uită-te la stânga și la dreapta: vin mașini? <b>Da</b> → așteaptă și verifică din nou. <b>Nu</b> → traversează.</li>
<li>Sfârșit.</li>
</ol>
<p>Sunt <b>două romburi</b>, fiecare cu o săgeată care se întoarce înapoi: două cicluri „așteaptă cât timp…”.</p>`
    },
    {
      type: `widget`, title: `Joc: secvență, selecție sau iterație?`,
      widget: `classify`,
      caption: `Ce structură folosește fiecare instrucțiune?`,
      options: {
        groups: [`➡️ Secvență`, `🔀 Selecție (dacă…)`, `🔁 Iterație (repetă…)`],
        items: [
          [`Deschide cartea, apoi citește pagina`, 0], [`Pornește calculatorul, introdu parola`, 0], [`Încalță-te cu ciorapii și apoi cu pantofii`, 0],
          [`Dacă plouă, ia umbrela`, 1], [`Dacă nota este cel puțin 5, scrie „promovat”`, 1], [`Dacă ți-e foame, mănâncă un măr`, 1],
          [`Amestecă până când se topește zahărul`, 2], [`Fă 10 flotări`, 2], [`Repetă poezia până o știi`, 2]
        ]
      }
    },
    {
      type: `curiosity`, title: `Știai că… „algoritm” vine de la numele unui matematician persan?`,
      html: `<p>Pe la <b>820 d.Hr.</b>, la Bagdad, în „Casa Înțelepciunii”, lucra matematicianul <b>Muhammad ibn Musa al-Khwarizmi</b>. A scris o carte despre calculele cu cifrele indiene (cifrele noastre 0-9). Când a fost tradusă în latină, numele lui a devenit <i>Algoritmi</i>: „Dixit Algoritmi” = „așa a spus al-Khwarizmi”. De la el vine și cuvântul <b>algebră</b> (de la <i>al-jabr</i>, din titlul altei cărți ale sale). În Italia, cifrele indo-arabe au fost răspândite de <b>Fibonacci</b> în 1202.</p>`
    },
    {
      type: `curiosity`, title: `Știai că… prima programatoare a fost o femeie din secolul al XIX-lea?`,
      html: `<p>În <b>1843</b>, matematiciana engleză <b>Ada Lovelace</b> a scris un algoritm care să facă <b>mașina analitică</b> a lui Charles Babbage, un calculator mecanic niciodată terminat, să calculeze „numerele lui Bernoulli”. Este considerat primul program din istorie! Ada a intuit și că o asemenea mașină ar putea compune într-o zi muzică. Limbajul de programare <b>Ada</b> îi poartă numele.</p>`
    },
    {
      type: `alternatives`, title: `Alte moduri de a înțelege`,
      intro: `Dacă schemele logice ți se par complicate, încearcă aceste căi.`,
      tabs: [
        {
          label: `🤖 Robotul uman (coding unplugged)`,
          html: `<p>Joacă în pereche: unul este <b>programatorul</b>, celălalt <b>robotul</b>. Robotul cunoaște doar 4 comenzi: <b>ÎNAINTE</b> (un pas), <b>VIREAZĂ LA DREAPTA</b>, <b>VIREAZĂ LA STÂNGA</b>, <b>IA</b>.</p>
<p>Programatorul scrie pe o foaie algoritmul care să ducă robotul până la penarul de pe catedră și să-l ia. Robotul execută <b>exact</b> ce este scris, chiar dacă se lovește de perete! 😄</p>
<p>În Italia, acest tip de activitate a fost popularizat de <b>CodyRoby</b>, inventat de profesorul Alessandro Bogliolo de la Universitatea din Urbino, promotor al Săptămânii Codului (<i>Code Week</i>).</p>`
        },
        {
          label: `🧩 Cu blocurile din Scratch`,
          html: `<p>În <b>Scratch</b> (creat în <b>2007</b> la MIT din Boston) nu se scrie cod: se îmbină <b>blocuri colorate</b> ca niște cărămizi de joc.</p>
<ul>
<li>blocurile puse unul sub altul sunt <b>secvența</b>;</li>
<li>blocul <b>„dacă … atunci … altfel”</b> este selecția (rombul!);</li>
<li>blocurile <b>„repetă de 10 ori”</b> și <b>„repetă până când”</b> sunt iterația (săgeata care se întoarce înapoi).</li>
</ul>
<p>Orice program Scratch se poate transforma într-o schemă logică, și invers!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f8fafc"/>
<rect x="60" y="15" width="220" height="36" rx="16" fill="#facc15"/><text x="170" y="39" font-size="16" text-anchor="middle" fill="#422006" font-weight="bold">când se dă clic 🏁</text>
<rect x="60" y="55" width="200" height="34" rx="6" fill="#f59e0b"/><text x="160" y="78" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">repetă de 4 ori</text>
<rect x="60" y="89" width="20" height="80" fill="#f59e0b"/>
<rect x="80" y="95" width="180" height="32" rx="6" fill="#3b82f6"/><text x="170" y="117" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">fă 100 de pași</text>
<rect x="80" y="131" width="180" height="32" rx="6" fill="#3b82f6"/><text x="170" y="153" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">rotește cu 90 de grade</text>
<rect x="60" y="169" width="200" height="22" rx="6" fill="#f59e0b"/>
<rect x="360" y="40" width="180" height="140" fill="none" stroke="#3b82f6" stroke-width="5"/>
<text x="450" y="210" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">rezultat: un pătrat!</text>
</svg>`
        },
        {
          label: `🍝 Rețeta bunicii`,
          html: `<p>O rețetă este un algoritm pentru oameni:</p>
<ul>
<li><b>ingredientele</b> sunt <b>intrările</b>;</li>
<li><b>pașii</b> („fierbe apa”, „pune pastele”) sunt <b>prelucrările</b>;</li>
<li>„<b>gustă: dacă</b> e fadă, adaugă sare” este o <b>selecție</b>;</li>
<li>„<b>amestecă până când</b> crema se îngroașă” este o <b>iterație</b>;</li>
<li><b>felul de mâncare gata</b> este <b>ieșirea</b>.</li>
</ul>
<p>Dar bunica scrie „sare după gust” (cât este nevoie): pentru un calculator ar fi o instrucțiune <b>ambiguă</b>!</p>`
        },
        {
          label: `🔢 Euclid cu numere`,
          html: `<p>Încearcă să execuți tu algoritmul lui Euclid ca un calculator, cu împărțiri cu rest. Pe axă vezi „săriturile” de câte 18 în 48: două sărituri ajung la 36, restul este 12. Apoi se continuă cu 18 și 12…</p>`,
          widget: `numberLine`,
          options: { min: 0, max: 50, step: 2, marks: [18, 36, 48] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Harta: de la algoritm la program`,
      nodes: [
        { id: `prob`, label: `Problemă`, x: 50, y: 6, color: `#ef4444`, html: `O situație de rezolvat.`, why: `Fiecare algoritm se naște dintr-o problemă: de calculat, de ordonat, de căutat, de decis. Primul pas este să o <b>analizezi</b>: ce date am (intrări)? Ce vreau să obțin (ieșiri)?` },
        { id: `alg`, label: `Algoritm`, x: 50, y: 28, color: `#3b82f6`, html: `Secvență finită de instrucțiuni neambigue.`, why: `Cuvântul vine de la <b>al-Khwarizmi</b> (secolul al IX-lea). Dar algoritmii sunt mai vechi: babilonienii aveau proceduri de calcul pe tăblițe de lut (circa 1800 î.Hr.), iar Euclid l-a descris pe cel pentru c.m.m.d.c. pe la 300 î.Hr.` },
        { id: `prop`, label: `Proprietăți`, x: 15, y: 28, color: `#0ea5e9`, html: `Finit, neambiguu, executabil, general.`, why: `În <b>1936</b>, matematicianul englez <b>Alan Turing</b> a dat o definiție precisă a „procedurii executabile de o mașină” (mașina Turing): este baza teoretică a calculatoarelor.` },
        { id: `fc`, label: `Schemă logică`, x: 22, y: 58, color: `#f59e0b`, html: `Reprezentare grafică cu blocuri și săgeți.`, why: `Primele „flow process charts” au fost prezentate de inginerii <b>Frank și Lillian Gilbreth</b> în 1921 pentru a organiza munca în fabrici. În 1947, <b>Goldstine și von Neumann</b> le-au folosit pentru programele primelor calculatoare.` },
        { id: `pseudo`, label: `Pseudocod`, x: 50, y: 58, color: `#a855f7`, html: `Algoritmul scris în cuvinte simple și structurate (DACĂ…ATUNCI, REPETĂ…).`, why: `Este ceva între limba omenească și limbajul de programare: permite să gândești algoritmul fără să te preocupe sintaxa.` },
        { id: `strutt`, label: `Secvență, selecție, iterație`, x: 82, y: 40, color: `#22c55e`, html: `Cele trei structuri de bază.`, why: `<b>Teorema Böhm-Jacopini</b> (1966) demonstrează că aceste trei structuri sunt suficiente pentru a scrie orice algoritm. De aici se naște „programarea structurată”.` },
        { id: `prog`, label: `Program`, x: 78, y: 78, color: `#14b8a6`, html: `Algoritmul tradus într-un limbaj pentru calculator.`, why: `Limbajele de programare (Scratch, Python, JavaScript…) traduc algoritmii în instrucțiuni pe care procesorul le înțelege. Primul program este atribuit <b>Adei Lovelace</b> (1843).` },
        { id: `ese`, label: `Executant`, x: 40, y: 88, color: `#64748b`, html: `Cel care execută: persoană, robot, calculator.`, why: `Executantul trebuie să cunoască fiecare instrucțiune. De aceea un algoritm pentru calculator trebuie să fie mult mai precis decât unul pentru o persoană, care folosește bunul-simț.` }
      ],
      edges: [
        [`prob`, `alg`, `se rezolvă cu`], [`alg`, `prop`, `trebuie să aibă`], [`alg`, `fc`, `se desenează cu`], [`alg`, `pseudo`, `se scrie în`],
        [`alg`, `strutt`, `este alcătuit din`], [`pseudo`, `prog`, `se traduce în`], [`fc`, `ese`, `îl ghidează pe`], [`prog`, `ese`, `executat de`]
      ]
    },
    {
      type: `quiz`, title: `Mini-test: structuri și cicluri`,
      questions: [
        { type: `mc`, q: `„Repetă până când sticla este plină” este un exemplu de…`, options: [`secvență`, `selecție`, `iterație`], answer: 2, explain: `Este un ciclu: se repetă până când condiția se schimbă.` },
        { type: `num`, q: `Cu algoritmul lui Euclid, care este c.m.m.d.c. al numerelor 30 și 12?`, answer: 6, tol: 0, explain: `30 : 12 rest 6; 12 : 6 rest 0 → c.m.m.d.c. = 6.` },
        { type: `mc`, q: `Cine a demonstrat că sunt suficiente secvența, selecția și iterația?`, options: [`Böhm și Jacopini`, `Euclid`, `Ada Lovelace`], answer: 0, explain: `Corrado Böhm și Giuseppe Jacopini, în 1966.` }
      ]
    }
  ],
  glossary: [
    { t: `Algoritm`, d: `Secvență finită de instrucțiuni neambigue care rezolvă o problemă.` },
    { t: `Executant`, d: `Cel (sau ceea ce) execută algoritmul: persoană, robot, calculator.` },
    { t: `Schemă logică`, d: `Desen al unui algoritm cu blocuri (oval, paralelogram, dreptunghi, romb) și săgeți.` },
    { t: `Intrare / Ieșire`, d: `Date de intrare / rezultate de ieșire.` },
    { t: `Secvență`, d: `Instrucțiuni executate una după alta.` },
    { t: `Selecție`, d: `Alegere între două drumuri în funcție de o condiție (dacă… altfel…).` },
    { t: `Iterație (ciclu)`, d: `Repetarea unor instrucțiuni de un număr de ori sau cât timp este adevărată o condiție.` },
    { t: `Ciclu infinit`, d: `Ciclu care nu se termină niciodată pentru că nu se îndeplinește condiția de ieșire.` },
    { t: `Pseudocod`, d: `Algoritm scris într-un limbaj simplu și structurat.` },
    { t: `Coding`, d: `A programa: a scrie instrucțiuni pentru un calculator.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Care NU este o proprietate a unui algoritm?`, options: [`finit`, `ambiguu`, `executabil`], answer: 1, explain: `Un algoritm trebuie să fie NEambiguu.` },
      { type: `mc`, q: `În schema logică, ovalul indică…`, options: [`început și sfârșit`, `o decizie`, `un calcul`], answer: 0, explain: `Oval = Început / Sfârșit.` },
      { type: `mc`, q: `Dintr-un romb de decizie ies…`, options: [`o săgeată`, `două săgeți (da / nu)`, `nicio săgeată`], answer: 1, explain: `Una pentru da, una pentru nu.` },
      { type: `tf`, q: `„Sumă ← A + B” se pune într-un dreptunghi de prelucrare.`, answer: true, explain: `Este un calcul: dreptunghi.` },
      { type: `order`, q: `Pune în ordine algoritmul pentru spălatul dinților.`, items: [`Ia periuța`, `Pune pasta de dinți`, `Periază dinții timp de 2 minute`, `Clătește gura`, `Spală periuța`], explain: `Mai întâi se pregătește periuța, apoi se periază, la sfârșit se clătește gura și se spală periuța.` },
      { type: `mc`, q: `„Dacă temperatura depășește 25 °C, pornește ventilatorul” este…`, options: [`o secvență`, `o selecție`, `un ciclu`], answer: 1, explain: `Există o condiție cu o alegere: selecție.` },
      { type: `text`, q: `Cum se numește un ciclu care nu se termină niciodată?`, answer: [`ciclu infinit`, `buclă infinită`, `loop infinit`, `infinit`], explain: `Ciclu (sau buclă, loop) infinit.` },
      { type: `num`, q: `Folosește algoritmul lui Euclid: c.m.m.d.c. al numerelor 84 și 36?`, answer: 12, tol: 0, explain: `84 : 36 rest 12; 36 : 12 rest 0 → c.m.m.d.c. = 12.` },
      { type: `mc`, q: `Cuvântul „algoritm” provine de la…`, options: [`un matematician persan, al-Khwarizmi`, `un cuvânt grecesc care înseamnă număr`, `numele unui calculator`], answer: 0, explain: `Din latinescul „Algoritmi”, numele lui al-Khwarizmi (secolul al IX-lea).` },
      { type: `tf`, q: `Un calculator înțelege instrucțiunile ambigue folosind bunul-simț.`, answer: false, explain: `Calculatorul execută întocmai: instrucțiunile trebuie să fie precise.` },
      { type: `mc`, q: `Un algoritm citește un număr și repetă „scrie salut” de câte ori arată numărul. Dacă intrarea este 3, de câte ori scrie „salut”?`, options: [`1`, `3`, `infinit de multe`], answer: 1, explain: `Ciclul se repetă de 3 ori.` },
      { type: `mc`, q: `Cine este considerată prima programatoare din istorie?`, options: [`Marie Curie`, `Ada Lovelace`, `Rita Levi-Montalcini`], answer: 1, explain: `Ada Lovelace, 1843.` }
    ],
    gen: [[`gcd`, 2]]
  }
});
