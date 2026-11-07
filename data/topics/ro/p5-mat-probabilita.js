TOPIC('ro', {
  id: "p5-mat-probabilita",
  title: "Probabilități și statistică",
  intro: "Mâine va ploua? Ce înghețată preferă clasa ta? Cine va câștiga la cap sau pajură? <b>Statistica</b> adună și citește datele, iar <b>probabilitatea</b> măsoară cât de ușor se poate întâmpla ceva. Învățăm <b>media, modul și mediana</b> și să recunoaștem evenimentele <b>sigure, posibile și imposibile</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Ce este statistica",
      html: `<p><b>Statistica</b> este partea matematicii care <b>adună</b>, <b>ordonează</b> și <b>interpretează</b> datele pentru a înțelege un fenomen.</p>
<p>O cercetare statistică se face în 4 pași:</p>
<ol>
<li><b>Întrebarea</b>: ce vreau să aflu? (de ex. „Care este sportul preferat al clasei?”)</li>
<li><b>Culegerea datelor</b>: cu un chestionar, un interviu, măsurători.</li>
<li><b>Organizarea</b>: datele se numără într-un <b>tabel de frecvențe</b> (de câte ori apare fiecare răspuns).</li>
<li><b>Reprezentarea și citirea</b>: se desenează un <b>grafic</b> (histogramă, ideogramă, grafic circular…) și se calculează <b>indicii</b>: modul, media, mediana.</li>
</ol>
<p>Lucrurile pe care le studiem (sport, vârstă, înălțime…) se numesc <b>caractere</b>; răspunsurile posibile se numesc <b>modalități</b>.</p>`
    },
    {
      type: "svg",
      title: "Sportul preferat al clasei a V-a B (histogramă)",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<line x1="70" y1="270" x2="570" y2="270" stroke="#1f2937" stroke-width="3"/>
<line x1="70" y1="270" x2="70" y2="30" stroke="#1f2937" stroke-width="3"/>
<g stroke="#cbd5e1" stroke-width="1">
<line x1="70" y1="230" x2="570" y2="230"/><line x1="70" y1="190" x2="570" y2="190"/><line x1="70" y1="150" x2="570" y2="150"/><line x1="70" y1="110" x2="570" y2="110"/><line x1="70" y1="70" x2="570" y2="70"/>
</g>
<g font-size="16" fill="#1f2937" text-anchor="end">
<text x="60" y="275">0</text><text x="60" y="235">2</text><text x="60" y="195">4</text><text x="60" y="155">6</text><text x="60" y="115">8</text><text x="60" y="75">10</text>
</g>
<rect x="100" y="110" width="70" height="160" fill="#22c55e"/>
<rect x="200" y="190" width="70" height="80" fill="#3b82f6"/>
<rect x="300" y="210" width="70" height="60" fill="#f97316"/>
<rect x="400" y="230" width="70" height="40" fill="#a855f7"/>
<rect x="500" y="250" width="50" height="20" fill="#ef4444"/>
<g font-size="17" text-anchor="middle" fill="#1f2937">
<text x="135" y="295">⚽ Fotbal</text><text x="235" y="295">🏊 Înot</text><text x="335" y="295">🏐 Volei</text><text x="435" y="295">🤸 Dans</text><text x="525" y="295">🏀 Baschet</text>
</g>
<g font-size="18" font-weight="bold" text-anchor="middle">
<text x="135" y="102">8</text><text x="235" y="182">4</text><text x="335" y="202">3</text><text x="435" y="222">2</text><text x="525" y="242">1</text>
</g>
<text x="330" y="40" font-size="20" fill="#166534" font-weight="bold" text-anchor="middle">Mod = Fotbal (coloana cea mai înaltă)</text>
</svg>`,
      caption: "18 elevi au răspuns. Frecvența este numărul de ori în care apare un răspuns."
    },
    {
      type: "text",
      title: "Mod, medie și mediană",
      html: `<p>Sunt trei moduri diferite de a spune cu <b>un singur număr</b> cum arată un grup de date.</p>
<p>Exemplu: notele Martei la matematică: <b>6, 8, 7, 8, 9, 10, 8</b></p>
<ul>
<li><b>Modul</b>: valoarea care apare <b>cel mai des</b>. Aici 8 apare de 3 ori → mod = <b>8</b>. (Pot exista și două moduri, sau niciunul.)</li>
<li><b>Media aritmetică</b>: se <b>adună</b> toate datele și se <b>împarte</b> la numărul lor.<br>6 + 8 + 7 + 8 + 9 + 10 + 8 = 56 → 56 : 7 = <b>8</b>.</li>
<li><b>Mediana</b>: se așază datele <b>în ordine</b> și se alege cea care e <b>la mijloc</b>.<br>6, 7, 8, <b>8</b>, 8, 9, 10 → mediana = <b>8</b>.<br>Dacă numărul datelor este par, mediana este media celor două valori de la mijloc.</li>
</ul>
<p><b>Modul</b> se poate folosi și pentru date care nu sunt numere (de ex. culori, sporturi). Media și mediana, doar pentru numere.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: temperaturile săptămânii",
      html: `<p>Clasa a măsurat temperatura la prânz timp de 5 zile: <b>12 °C, 15 °C, 14 °C, 11 °C, 18 °C</b>.</p>
<ul>
<li>Suma: 12 + 15 + 14 + 11 + 18 = 70</li>
<li>Media: 70 : 5 = <b>14 °C</b></li>
<li>În ordine: 11, 12, <b>14</b>, 15, 18 → mediana = <b>14 °C</b></li>
<li>Nicio valoare nu se repetă → <b>nu există mod</b>.</li>
</ul>
<p><b>Amplitudinea</b> este diferența dintre valoarea cea mai mare și cea mai mică: 18 − 11 = <b>7 °C</b>. Ne spune cât de „împrăștiate” sunt datele.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: când media înșală",
      html: `<p>Pe o stradă sunt 5 magazine. În fiecare zi încasează: <b>100 €, 120 €, 90 €, 110 €</b> și supermarketul <b>1580 €</b>.</p>
<ul>
<li>Media: (100 + 120 + 90 + 110 + 1580) : 5 = 2000 : 5 = <b>400 €</b></li>
<li>Mediana: 90, 100, <b>110</b>, 120, 1580 → <b>110 €</b></li>
</ul>
<p>Care număr descrie mai bine un magazin „obișnuit” de pe stradă? <b>Mediana</b>! O singură valoare foarte mare „trage în sus” media. De aceea statisticienii se uită mereu la mai mulți indici împreună.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: mod, medie, mediană",
      questions: [
        { type: "num", q: "Care este media numerelor 4, 6, 8?", answer: 6, explain: "4 + 6 + 8 = 18; 18 : 3 = 6." },
        { type: "num", q: "Care este modul numerelor 3, 5, 5, 7, 5, 2?", answer: 5, explain: "5 apare de 3 ori, mai des decât toate celelalte." },
        { type: "num", q: "Care este mediana numerelor 9, 2, 7, 4, 5?", answer: 5, explain: "În ordine: 2, 4, 5, 7, 9. Cel de la mijloc este 5." },
        { type: "tf", q: "Modul se poate calcula și pentru culorile preferate.", answer: true, explain: "Modul este răspunsul cel mai frecvent: este valabil și pentru date care nu sunt numerice." }
      ]
    },
    {
      type: "text",
      title: "Sigur, posibil, imposibil",
      html: `<p>Un <b>eveniment</b> este ceva care se poate întâmpla (sau nu). Aruncând un zar obișnuit cu 6 fețe:</p>
<ul>
<li><b>Eveniment sigur</b>: se întâmplă <b>întotdeauna</b>. „Iese un număr de la 1 la 6.” ✅</li>
<li><b>Eveniment imposibil</b>: <b>nu se întâmplă niciodată</b>. „Iese 7.” ❌</li>
<li><b>Eveniment posibil</b> (sau probabil): <b>se poate întâmpla sau nu</b>. „Iese 4.” 🤔</li>
</ul>
<p>Printre evenimentele posibile, unele sunt <b>mai probabile</b> decât altele: „iese un număr par” (3 cazuri din 6) este mai probabil decât „iese 6” (1 caz din 6).</p>`
    },
    {
      type: "widget",
      title: "Sigur, posibil sau imposibil?",
      widget: "classify",
      options: {
        groups: ["✅ Sigur", "🤔 Posibil", "❌ Imposibil"],
        items: [
          ["🎲 Aruncând un zar iese un număr mai mic decât 7", 0],
          ["🎲 Aruncând un zar iese 3", 1],
          ["🎲 Aruncând un zar iese 0", 2],
          ["🪙 Aruncând o monedă iese cap", 1],
          ["📅 După luni vine marți", 0],
          ["🐘 Un elefant încape în penarul tău", 2],
          ["🌧️ Mâine plouă", 1],
          ["🔴 Scot o bilă roșie dintr-un săculeț cu bile numai albastre", 2],
          ["🔵 Scot o bilă albastră dintr-un săculeț cu bile numai albastre", 0]
        ]
      },
      caption: "Pune fiecare eveniment în grupul potrivit."
    },
    {
      type: "text",
      title: "Măsurăm probabilitatea cu o fracție",
      html: `<p><b>Probabilitatea</b> unui eveniment se poate scrie cu o <b>fracție</b>:</p>
<p style="text-align:center;font-size:1.2em"><b>probabilitate = cazuri favorabile / cazuri posibile</b></p>
<ul>
<li><b>Cazuri posibile</b>: toate rezultatele care pot ieși (toate la fel de probabile).</li>
<li><b>Cazuri favorabile</b>: rezultatele care convin evenimentului nostru.</li>
</ul>
<p>Exemple cu un zar:</p>
<ul>
<li>„Iese 5”: 1 caz favorabil din 6 → <b>1/6</b></li>
<li>„Iese un număr par” (2, 4, 6): 3 din 6 → <b>3/6 = 1/2</b>, adică 50%</li>
<li>Eveniment <b>sigur</b>: 6/6 = <b>1</b> (100%)</li>
<li>Eveniment <b>imposibil</b>: 0/6 = <b>0</b> (0%)</li>
</ul>
<p>Așadar probabilitatea este întotdeauna un număr <b>între 0 și 1</b>: cu cât este mai aproape de 1, cu atât evenimentul este mai probabil.</p>`
    },
    {
      type: "svg",
      title: "Scara probabilității",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="pg" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ef4444"/><stop offset="0.5" stop-color="#facc15"/><stop offset="1" stop-color="#22c55e"/></linearGradient></defs>
<rect width="600" height="260" fill="#ffffff"/>
<rect x="50" y="110" width="500" height="30" rx="15" fill="url(#pg)"/>
<g font-size="20" font-weight="bold" text-anchor="middle" fill="#1f2937">
<text x="60" y="170">0</text><text x="175" y="170">1/6</text><text x="300" y="170">1/2</text><text x="540" y="170">1</text>
</g>
<g stroke="#1f2937" stroke-width="3">
<line x1="60" y1="100" x2="60" y2="150"/><line x1="133" y1="100" x2="133" y2="150"/><line x1="300" y1="100" x2="300" y2="150"/><line x1="540" y1="100" x2="540" y2="150"/>
</g>
<g font-size="17" text-anchor="middle">
<text x="60" y="60" fill="#b91c1c">imposibil</text><text x="60" y="85" fill="#b91c1c">iese 7</text>
<text x="133" y="210" fill="#92400e">iese 5</text>
<text x="300" y="60" fill="#854d0e">cap sau pajură</text><text x="300" y="85" fill="#854d0e">iese cap</text>
<text x="300" y="210" fill="#854d0e">iese un număr par</text>
<text x="530" y="60" fill="#166534">sigur</text><text x="530" y="85" fill="#166534">iese de la 1 la 6</text>
</g>
<text x="300" y="245" font-size="16" fill="#475569" text-anchor="middle">mai la dreapta = mai probabil</text>
</svg>`,
      caption: "Fiecare eveniment are locul lui între 0 (imposibil) și 1 (sigur)."
    },
    {
      type: "widget",
      title: "Probabilitatea ca o plăcintă",
      widget: "fractionPie",
      options: { n: 1, d: 6 },
      caption: "Numitorul sunt cazurile posibile, numărătorul cazurile favorabile. 1/6 = probabilitatea să iasă un anumit număr la zar. Încearcă 3/6: este probabilitatea să iasă un număr par."
    },
    {
      type: "curiosity",
      title: "Știai că…? Jocul din care s-a născut probabilitatea",
      html: `<p>Probabilitatea ca știință s-a născut în <b>1654</b> dintr-o întrebare despre jocul de zaruri. Un jucător francez, cavalerul de Méré, l-a întrebat pe matematicianul <b>Blaise Pascal</b> cum să împartă corect miza unui joc întrerupt. Pascal a discutat prin scrisori cu <b>Pierre de Fermat</b> și împreună au inventat calculul probabilităților.</p>
<p>Și un italian se apropiase de ea cu un secol înainte: medicul și matematicianul <b>Gerolamo Cardano</b>, mare pasionat de zaruri!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Moneda nu are memorie",
      html: `<p>Ai aruncat o monedă de 5 ori și a ieșit mereu cap. La a șasea aruncare e mai probabil să iasă pajură? <b>Nu!</b> Moneda nu-și amintește aruncările anterioare: probabilitatea de pajură este tot <b>1/2</b>.</p>
<p>A crede contrariul se numește „eroarea jucătorului”. În 1913, la un cazinou din Monte Carlo, la ruletă a ieșit negru <b>de 26 de ori la rând</b>, iar mulți jucători au pierdut foarte mulți bani pariind pe roșu, convinși că „acum trebuie să iasă”.</p>`
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li><b>Modul</b> = valoarea cea mai frecventă.</li>
<li><b>Media</b> = suma datelor : numărul datelor.</li>
<li><b>Mediana</b> = valoarea de la mijloc, după ce datele au fost așezate în ordine.</li>
<li>Eveniment <b>sigur</b> (probabilitate 1), <b>posibil</b> (între 0 și 1), <b>imposibil</b> (0).</li>
<li><b>Probabilitatea</b> = cazuri favorabile / cazuri posibile.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege statistica și probabilitatea",
      intro: "Media și probabilitatea sunt idei care se înțeleg mai bine făcând: nivelând turnuri, scoțând bile, numărând aruncări. Alege-ți felul tău!",
      tabs: [
        {
          label: "🧱 Media care „nivelează”",
          html: `<p>Imaginează-ți datele ca pe niște <b>turnuri de cuburi</b>: 2, 5, 3, 6.</p>
<p><b>Media</b> este înălțimea pe care ar avea-o toate turnurile dacă ai muta cuburile de la turnurile înalte la cele joase până când ar deveni <b>toate egale</b>.</p>
<p>În total sunt 2 + 5 + 3 + 6 = 16 cuburi. Împărțite la 4 turnuri: 16 : 4 = <b>4 cuburi</b> fiecare. Media este 4!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0f9ff"/>
<g fill="#60a5fa" stroke="#1e3a8a" stroke-width="2">
<rect x="30" y="190" width="30" height="30"/><rect x="30" y="160" width="30" height="30"/>
<rect x="70" y="190" width="30" height="30"/><rect x="70" y="160" width="30" height="30"/><rect x="70" y="130" width="30" height="30"/><rect x="70" y="100" width="30" height="30"/><rect x="70" y="70" width="30" height="30"/>
<rect x="110" y="190" width="30" height="30"/><rect x="110" y="160" width="30" height="30"/><rect x="110" y="130" width="30" height="30"/>
<rect x="150" y="190" width="30" height="30"/><rect x="150" y="160" width="30" height="30"/><rect x="150" y="130" width="30" height="30"/><rect x="150" y="100" width="30" height="30"/><rect x="150" y="70" width="30" height="30"/><rect x="150" y="40" width="30" height="30"/>
</g>
<text x="105" y="245" font-size="18" text-anchor="middle">2, 5, 3, 6</text>
<text x="290" y="140" font-size="44" fill="#1e3a8a" text-anchor="middle">→</text>
<g fill="#34d399" stroke="#065f46" stroke-width="2">
<rect x="380" y="190" width="30" height="30"/><rect x="380" y="160" width="30" height="30"/><rect x="380" y="130" width="30" height="30"/><rect x="380" y="100" width="30" height="30"/>
<rect x="420" y="190" width="30" height="30"/><rect x="420" y="160" width="30" height="30"/><rect x="420" y="130" width="30" height="30"/><rect x="420" y="100" width="30" height="30"/>
<rect x="460" y="190" width="30" height="30"/><rect x="460" y="160" width="30" height="30"/><rect x="460" y="130" width="30" height="30"/><rect x="460" y="100" width="30" height="30"/>
<rect x="500" y="190" width="30" height="30"/><rect x="500" y="160" width="30" height="30"/><rect x="500" y="130" width="30" height="30"/><rect x="500" y="100" width="30" height="30"/>
</g>
<line x1="370" y1="100" x2="545" y2="100" stroke="#dc2626" stroke-width="3" stroke-dasharray="6 4"/>
<text x="455" y="245" font-size="18" text-anchor="middle">media = 4</text>
</svg>`
        },
        {
          label: "🎨 Săculețul cu bile",
          html: `<p>Într-un săculeț sunt <b>3 bile roșii</b>, <b>2 albastre</b> și <b>5 galbene</b> (10 în total). Scoți una fără să te uiți:</p>
<ul>
<li>probabilitatea de <b>galbenă</b>: 5/10 = <b>1/2</b> (cea mai probabilă);</li>
<li>probabilitatea de <b>roșie</b>: <b>3/10</b>;</li>
<li>probabilitatea de <b>albastră</b>: 2/10 = <b>1/5</b>;</li>
<li>probabilitatea de <b>verde</b>: 0/10 = <b>0</b> (imposibil).</li>
</ul>
<p>Adună toate probabilitățile: 5/10 + 3/10 + 2/10 = 10/10 = <b>1</b>. Ceva trebuie să iasă negreșit!</p>`,
          widget: "counter",
          options: { emoji: "🔴", max: 20 }
        },
        {
          label: "🎲 Încearcă să arunci!",
          html: `<p>Probabilitatea spune ce se întâmplă <b>„în medie” după multe încercări</b>. Fă experimentul:</p>
<ol>
<li>aruncă o monedă de <b>10 ori</b> și numără căpetele: poate ies 7 capete și 3 pajuri;</li>
<li>acum aruncă-o de <b>100 de ori</b> (cere ajutorul întregii clase!): capetele vor fi mult mai aproape de <b>50</b>.</li>
</ol>
<p>Aceasta se numește <b>legea numerelor mari</b>: cu cât faci mai multe încercări, cu atât frecvența se apropie de probabilitate. Matematicianul Karl Pearson a aruncat o monedă de <b>24 000 de ori</b> și a obținut 12 012 capete: aproape exact jumătate!</p>`
        },
        {
          label: "🍕 Graficele circulare",
          html: `<p>O altă reprezentare este <b>graficul circular</b> (sau „plăcinta”): cercul este totalul, iar fiecare felie este cât partea ei.</p>
<p>Din 18 elevi, 9 preferă fotbalul: este <b>jumătate de plăcintă</b>. 6 preferă înotul: o treime. 3 preferă dansul: o șesime.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fefce8"/>
<path d="M160 130 L160 30 A100 100 0 0 1 160 230 Z" fill="#22c55e" stroke="#ffffff" stroke-width="3"/>
<path d="M160 130 L160 230 A100 100 0 0 1 73.4 80 Z" fill="#3b82f6" stroke="#ffffff" stroke-width="3"/>
<path d="M160 130 L73.4 80 A100 100 0 0 1 160 30 Z" fill="#a855f7" stroke="#ffffff" stroke-width="3"/>
<rect x="320" y="60" width="26" height="26" fill="#22c55e"/><text x="356" y="80" font-size="20">⚽ Fotbal: 9 (1/2)</text>
<rect x="320" y="115" width="26" height="26" fill="#3b82f6"/><text x="356" y="135" font-size="20">🏊 Înot: 6 (1/3)</text>
<rect x="320" y="170" width="26" height="26" fill="#a855f7"/><text x="356" y="190" font-size="20">🤸 Dans: 3 (1/6)</text>
</svg>`
        },
        {
          label: "🌍 Statistica în lume",
          html: `<ul>
<li>🇮🇹 <b>ISTAT</b> (Institutul Național de Statistică al Italiei) numără în fiecare an locuitorii Italiei: aproximativ <b>59 de milioane</b>.</li>
<li>🏛️ Vechii <b>romani</b> făceau <b>census</b> (recensământ) din 5 în 5 ani pentru a număra cetățenii și averile lor: de acolo vine cuvântul!</li>
<li>🇬🇧 Asistenta engleză <b>Florence Nightingale</b> a folosit, în 1858, grafice circulare colorate ca să convingă guvernul că soldații mureau mai mult din cauza bolilor decât a rănilor. Datorită datelor ei, spitalele au devenit mai curate și au fost salvate mii de vieți.</li>
<li>🌦️ Când meteorologul spune „<b>70% șanse de ploaie</b>”, înseamnă că în 7 zile din 10 cu un asemenea timp, plouă.</li>
</ul>`
        },
        {
          "label": "🇫🇷 Pascal și Fermat: jocul întrerupt (Franța)",
          "html": "<p>În <b>1654</b>, în <b>Franța</b>, doi matematicieni, <b>Blaise Pascal</b> și <b>Pierre de Fermat</b>, și-au scris scrisori pentru a rezolva o problemă: cum se împart corect banii unui joc <b>întrerupt</b> înainte de final? Din acele scrisori s-a născut calculul probabilităților.</p><p><b>Problema</b>: Ana (A) și Bruno (B) joacă. Fiecare partidă poate fi câștigată de unul sau de celălalt cu aceeași probabilitate. Câștigă jocul cine ajunge primul la <b>3 puncte</b> și ia premiul de <b>24 de abțibilduri</b>. Când este <b>2 la 1</b> pentru Ana, trebuie să se oprească. Cum împart abțibildurile?</p><p>Metoda lui Fermat: <b>imaginează-ți că joci totuși partidele care lipsesc</b> (cel mult 2) și desenează <b>arborele</b> posibilităților:</p><ul><li>AA → câștigă Ana; AB → câștigă Ana (a câștigat deja la prima!); BA → câștigă Ana; BB → câștigă Bruno.</li></ul><p>Cazurile sunt 4, toate la fel de probabile: Ana câștigă în <b>3 din 4</b>, Bruno în <b>1 din 4</b>. Deci este drept să dăm <b>3/4</b> din abțibilduri Anei (<b>18</b>) și <b>1/4</b> lui Bruno (<b>6</b>). Să le împărțim în două ar fi nedrept pentru Ana; să i le dăm pe toate Anei ar fi nedrept pentru Bruno, care mai putea încă să câștige.</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><circle cx=\"80\" cy=\"150\" r=\"24\" fill=\"#e2e8f0\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"80\" y=\"156\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2–1</text><line x1=\"104\" y1=\"150\" x2=\"218\" y2=\"80\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"104\" y1=\"150\" x2=\"218\" y2=\"220\" stroke=\"#334155\" stroke-width=\"2\"/><circle cx=\"240\" cy=\"80\" r=\"22\" fill=\"#bbf7d0\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"240\" y=\"86\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">A</text><circle cx=\"240\" cy=\"220\" r=\"22\" fill=\"#fecaca\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"240\" y=\"226\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">B</text><line x1=\"262\" y1=\"80\" x2=\"378\" y2=\"50\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"262\" y1=\"80\" x2=\"378\" y2=\"110\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"262\" y1=\"220\" x2=\"378\" y2=\"190\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"262\" y1=\"220\" x2=\"378\" y2=\"250\" stroke=\"#334155\" stroke-width=\"2\"/><circle cx=\"400\" cy=\"50\" r=\"22\" fill=\"#bbf7d0\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"400\" y=\"56\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">A</text><circle cx=\"400\" cy=\"110\" r=\"22\" fill=\"#fecaca\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"400\" y=\"116\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">B</text><circle cx=\"400\" cy=\"190\" r=\"22\" fill=\"#bbf7d0\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"400\" y=\"196\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">A</text><circle cx=\"400\" cy=\"250\" r=\"22\" fill=\"#fecaca\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"400\" y=\"256\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">B</text><text x=\"436\" y=\"56\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#15803d\" font-weight=\"bold\">AA → câștigă A</text><text x=\"436\" y=\"116\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#15803d\" font-weight=\"bold\">AB → câștigă A</text><text x=\"436\" y=\"196\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#15803d\" font-weight=\"bold\">BA → câștigă A</text><text x=\"436\" y=\"256\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#b91c1c\" font-weight=\"bold\">BB → câștigă B</text><text x=\"160\" y=\"290\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#475569\" text-anchor=\"middle\">Partida 1</text><text x=\"320\" y=\"290\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#475569\" text-anchor=\"middle\">Partida 2</text><text x=\"510\" y=\"290\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">A: 3/4  B: 1/4</text></svg>"
        },
        {
          "label": "🇬🇷 Astragalele grecilor: fețe inegale",
          "html": "<p>Înainte de zarurile cu 6 fețe, vechii <b>greci</b> și romani se jucau cu <b>astragalele</b>: oscioare mici din piciorul oii sau al caprei. Un astragal poate cădea pe <b>4 laturi</b>, cărora li se dădeau valorile <b>1, 3, 4 și 6</b>. Romanii numeau «lovitura lui Venus» aruncarea a 4 astragale cu 4 valori toate diferite.</p><p>Dar atenție: cele 4 laturi <b>nu sunt egale</b>! Două laturi sunt late (3 și 4) și două sunt înguste (1 și 6). Astragalul cade mult mai des pe o latură lată: cam <b>4 ori din 10</b> pe fiecare, față de cam <b>1 dată din 10</b> pentru fiecare latură îngustă.</p><p>Așadar, pentru astragal <b>nu</b> se poate spune «probabilitatea lui 6 = 1/4», pentru că regula <b>cazuri favorabile : cazuri posibile</b> este valabilă doar dacă toate cazurile sunt <b>la fel de probabile</b>, ca la un zar bine făcut. Când cazurile nu sunt egale, probabilitatea se estimează prin <b>experimente</b>: se aruncă de multe ori și se calculează <b>frecvența</b>.</p><p>🎯 <b>Experiment</b>: aruncă de 50 de ori un capac de sticlă. De câte ori cade cu deschiderea în sus? Calculează frecvența (de exemplu 18/50). Este aproape de 1/2? Adună rezultatele întregii clase: cu mai multe aruncări estimarea devine mai de încredere.</p>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta statisticii și a probabilității: atinge un nod",
      nodes: [
        { id: "dati", label: "Date", x: 30, y: 6, color: "#2563eb", html: "Informațiile adunate: numere, răspunsuri, măsurători.", why: "Fără date nu există statistică. Cuvântul <i>statistică</i> vine de la „stat”: s-a născut în secolele al XVII-lea–al XVIII-lea pentru a număra locuitorii, nașterile, decesele și impozitele statelor." },
        { id: "frequenza", label: "Frecvențe și tabele", x: 15, y: 30, color: "#0ea5e9", html: "De câte ori apare fiecare răspuns.", why: "Așezarea datelor într-un tabel le face ușor de citit: o listă de 100 de răspunsuri încurcă, un tabel cu 5 rânduri nu. În 1662, englezul <b>John Graunt</b> a studiat astfel listele deceselor din Londra, inventând statistica modernă." },
        { id: "grafici", label: "Grafice", x: 45, y: 30, color: "#f97316", html: "Histograme, ideograme, grafice circulare („plăcinte”).", why: "Ochii înțeleg înălțimile și suprafețele mai repede decât numerele. Scoțianul <b>William Playfair</b> a inventat graficul cu bare (1786) și pe cel circular (1801)." },
        { id: "indici", label: "Mod, medie, mediană", x: 30, y: 55, color: "#16a34a", html: "Numere care rezumă un grup de date.", why: "Media este înălțimea pe care ar avea-o datele „nivelate” (împărțind totalul în părți egale); mediana împarte datele în două; modul este cel mai votat. Fiecare spune altceva, de aceea se folosesc mai mulți." },
        { id: "evento", label: "Eveniment", x: 72, y: 6, color: "#a855f7", html: "Un fapt care se poate întâmpla sau nu.", why: "În viață există lucruri sigure și lucruri nesigure. Ca să luăm decizii (luăm umbrela? ne jucăm?) merită să măsurăm nesiguranța." },
        { id: "tipi", label: "Sigur, posibil, imposibil", x: 85, y: 30, color: "#ec4899", html: "Cele trei tipuri de eveniment.", why: "Dacă toate cazurile posibile sunt favorabile, evenimentul este sigur; dacă niciunul nu este, este imposibil; altfel este posibil." },
        { id: "prob", label: "Probabilitate", x: 72, y: 55, color: "#ef4444", html: "Cazuri favorabile / cazuri posibile: un număr de la 0 la 1.", why: "Definiția „clasică” a fost scrisă de francezul <b>Pierre-Simon Laplace</b> (1812), după lucrările lui <b>Pascal și Fermat</b> (1654). Funcționează când toate cazurile sunt la fel de probabile, ca fețele unui zar nefalsificat." },
        { id: "frazioni", label: "Fracții și procente", x: 72, y: 82, color: "#14b8a6", html: "Probabilitatea se scrie ca fracție (1/2) sau procent (50%).", why: "O probabilitate este o „parte” din cazurile posibile, exact cum o fracție este o parte din întreg." },
        { id: "grandi", label: "Legea numerelor mari", x: 30, y: 85, color: "#64748b", html: "Repetând de multe ori un experiment, frecvența se apropie de probabilitate.", why: "A fost demonstrată de elvețianul <b>Jakob Bernoulli</b> în 1713. Este puntea dintre statistică (datele observate) și probabilitate (previziunea)." }
      ],
      edges: [
        ["dati", "frequenza", "se ordonează în"],
        ["frequenza", "grafici", "se desenează în"],
        ["frequenza", "indici", "se rezumă prin"],
        ["evento", "tipi", "poate fi"],
        ["evento", "prob", "se măsoară cu"],
        ["prob", "frazioni", "se scrie cu"],
        ["indici", "grandi", "frecvențe observate"],
        ["prob", "grandi", "previziune"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: probabilitatea",
      questions: [
        { type: "mc", q: "Aruncând un zar, care este probabilitatea să iasă 2?", options: ["1/2", "1/6", "2/6"], answer: 1, explain: "1 caz favorabil din 6 posibile." },
        { type: "mc", q: "„Scot o carte de cupă dintr-un pachet făcut numai din cărți de cupă” este un eveniment…", options: ["sigur", "posibil", "imposibil"], answer: 0, explain: "Toate cărțile sunt de cupă: se întâmplă întotdeauna." },
        { type: "tf", q: "O probabilitate poate fi 3/2.", answer: false, explain: "Cazurile favorabile nu pot fi mai multe decât cele posibile: probabilitatea este între 0 și 1." }
      ]
    }
  ],
  glossary: [
    { t: "Statistică", d: "Știința care adună, ordonează și interpretează datele." },
    { t: "Frecvență", d: "Numărul de ori în care apare o valoare." },
    { t: "Mod", d: "Valoarea cu frecvența cea mai mare." },
    { t: "Media aritmetică", d: "Suma datelor împărțită la numărul lor." },
    { t: "Mediana", d: "Valoarea de la mijlocul unei liste ordonate." },
    { t: "Histogramă", d: "Grafic cu coloane: înălțimea arată frecvența." },
    { t: "Grafic circular", d: "Grafic „plăcintă”: fiecare felie este proporțională cu partea ei." },
    { t: "Eveniment", d: "Fapt care se poate întâmpla sau nu." },
    { t: "Probabilitate", d: "Măsura cât de probabil este un eveniment: cazuri favorabile / cazuri posibile." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Calculează media numerelor 10, 20, 30, 40.", answer: 25, explain: "10 + 20 + 30 + 40 = 100; 100 : 4 = 25." },
      { type: "num", q: "Care este modul numerelor 2, 4, 4, 6, 4, 2, 8?", answer: 4, explain: "4 apare de 3 ori." },
      { type: "num", q: "Care este mediana numerelor 15, 3, 8, 12, 6?", answer: 8, explain: "În ordine: 3, 6, 8, 12, 15 → cel de la mijloc este 8." },
      { type: "mc", q: "Pentru a afla mediana trebuie mai întâi să…", options: ["adunăm datele", "așezăm datele în ordine", "numărăm valoarea cea mai frecventă"], answer: 1, explain: "Mediana este valoarea de la mijlocul datelor ordonate." },
      { type: "mc", q: "„Mâine Soarele va răsări la vest” este un eveniment…", options: ["sigur", "posibil", "imposibil"], answer: 2, explain: "Soarele răsare întotdeauna la est." },
      { type: "mc", q: "Într-un săculeț sunt 4 bile roșii și 6 verzi. Care este probabilitatea să scoți una roșie?", options: ["4/6", "4/10", "6/10"], answer: 1, explain: "4 cazuri favorabile din 10 posibile." },
      { type: "tf", q: "Probabilitatea unui eveniment sigur este 1.", answer: true, explain: "Toate cazurile sunt favorabile: n/n = 1." },
      { type: "text", q: "Cum se numește graficul cu coloane?", answer: ["histogramă", "histograma", "o histogramă"], explain: "Este histograma." },
      { type: "mc", q: "Aruncând un zar, care eveniment este mai probabil?", options: ["Iese 6", "Iese un număr impar", "Iese un număr mai mare decât 6"], answer: 1, explain: "Impar: 3/6. Numărul 6: 1/6. Mai mare decât 6: imposibil (0)." },
      { type: "order", q: "Ordonează de la cel mai puțin probabil la cel mai probabil (aruncarea unui zar).", items: ["Iese 8", "Iese 3", "Iese un număr par", "Iese un număr de la 1 la 6"], explain: "0, apoi 1/6, apoi 3/6, apoi 6/6 = 1." },
      { type: "num", q: "Aruncând o monedă, care este probabilitatea de cap scrisă ca procent? (doar numărul)", answer: 50, unit: "%", explain: "1/2 = 50%." },
      { type: "tf", q: "Dacă la o monedă a ieșit pajură de 4 ori la rând, la a cincea aruncare este mai probabil cap.", answer: false, explain: "Moneda nu are memorie: probabilitatea rămâne 1/2." }
    ]
  }
});
