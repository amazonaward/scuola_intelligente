TOPIC('it', {
  id: "p2-mat-sottrazioni-colonna",
  title: "Sottrazioni in colonna",
  intro: "Avevi 52 caramelle e ne hai regalate 27: quante ne restano? 🍬 Impariamo a fare le <b>sottrazioni in colonna</b>, <b>senza</b> e <b>con il prestito</b> (cambio).",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Che cos'è la sottrazione",
      html: `<p><b>Sottrarre</b> vuol dire <b>togliere</b>. Si usa anche per trovare <b>quanto manca</b> o <b>la differenza</b> tra due numeri.</p>
<ul>
<li>il primo numero, da cui togliamo, si chiama <b>minuendo</b>;</li>
<li>il numero che togliamo si chiama <b>sottraendo</b>;</li>
<li>il risultato si chiama <b>differenza</b>.</li>
</ul>
<p style="font-size:1.2em; text-align:center"><b>58</b> − <b>23</b> = <b>35</b><br><span style="font-size:0.8em">minuendo − sottraendo = differenza</span></p>
<p>⚠️ Nella sottrazione l'ordine conta: il minuendo va sempre <b>sopra</b>, e deve essere il numero più grande.</p>`
    },
    {
      type: "text",
      title: "Sottrazione in colonna senza prestito",
      html: `<p>Calcoliamo <b>58 − 23</b>:</p>
<ol>
<li>Incolonna: <b>unità sotto unità</b>, <b>decine sotto decine</b>. Il minuendo (58) sta sopra.</li>
<li>Comincia dalle <b>unità</b>: 8 − 3 = <b>5</b>.</li>
<li>Poi le <b>decine</b>: 5 − 2 = <b>3</b>.</li>
<li>Risultato: <b>35</b>! ✅</li>
</ol>`
    },
    {
      type: "svg",
      title: "58 − 23 in colonna",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="150" y="20" width="90" height="260" fill="#fee2e2"/>
<rect x="240" y="20" width="90" height="260" fill="#dbeafe"/>
<text x="195" y="55" font-size="26" text-anchor="middle" fill="#b91c1c" font-weight="bold">da</text>
<text x="285" y="55" font-size="26" text-anchor="middle" fill="#1d4ed8" font-weight="bold">u</text>
<g font-size="52" font-weight="bold" text-anchor="middle" fill="#1f2937">
<text x="195" y="120">5</text><text x="285" y="120">8</text>
<text x="195" y="185">2</text><text x="285" y="185">3</text>
</g>
<text x="110" y="180" font-size="58" font-weight="bold" text-anchor="middle" fill="#dc2626">−</text>
<line x1="90" y1="205" x2="330" y2="205" stroke="#1f2937" stroke-width="5"/>
<g font-size="52" font-weight="bold" text-anchor="middle">
<text x="195" y="265" fill="#b91c1c">3</text><text x="285" y="265" fill="#1d4ed8">5</text>
</g>
<text x="360" y="110" font-size="20" fill="#1d4ed8">① unità: 8 − 3 = 5</text>
<text x="360" y="150" font-size="20" fill="#b91c1c">② decine: 5 − 2 = 3</text>
<text x="360" y="250" font-size="22" fill="#1f2937" font-weight="bold">③ differenza = 35</text>
</svg>`,
      caption: "Come per l'addizione: ogni cifra nella sua colonna e si parte dalle unità."
    },
    {
      type: "quiz",
      title: "Mini-quiz: senza prestito",
      questions: [
        { type: "num", q: "Quanto fa 76 − 34?", answer: 42, explain: "6 − 4 = 2; 7 − 3 = 4: 42." },
        { type: "mc", q: "Come si chiama il risultato della sottrazione?", options: ["somma", "differenza", "minuendo"], answer: 1, explain: "Il risultato è la differenza." },
        { type: "num", q: "Quanto fa 89 − 50?", answer: 39, explain: "9 − 0 = 9; 8 − 5 = 3: 39." }
      ]
    },
    {
      type: "text",
      title: "Sottrazione con il prestito (cambio)",
      html: `<p>Calcoliamo <b>52 − 27</b>:</p>
<ol>
<li><b>Unità</b>: 2 − 7… non si può! 2 è più piccolo di 7. 😟</li>
<li>Chiediamo <b>in prestito una decina</b> alla colonna delle decine. Il 5 diventa <b>4</b> (lo cancelliamo e scriviamo 4 sopra).</li>
<li>La decina presa diventa <b>10 unità</b>: le unità passano da 2 a <b>12</b>.</li>
<li>Ora sì: 12 − 7 = <b>5</b>.</li>
<li><b>Decine</b>: 4 − 2 = <b>2</b> (attenzione: non più 5, ma 4!).</li>
<li>Risultato: <b>25</b>! ✅</li>
</ol>
<p>Il prestito è un <b>cambio</b>: spezziamo 1 decina in 10 unità, come cambiare una moneta da 10 cent in 10 monetine da 1 cent.</p>`
    },
    {
      type: "svg",
      title: "52 − 27 con il prestito",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<rect x="150" y="20" width="90" height="260" fill="#fee2e2"/>
<rect x="240" y="20" width="90" height="260" fill="#dbeafe"/>
<text x="195" y="45" font-size="22" text-anchor="middle" fill="#b91c1c" font-weight="bold">da</text>
<text x="285" y="45" font-size="22" text-anchor="middle" fill="#1d4ed8" font-weight="bold">u</text>
<text x="195" y="82" font-size="28" text-anchor="middle" fill="#ca8a04" font-weight="bold">4</text>
<text x="270" y="82" font-size="28" text-anchor="middle" fill="#ca8a04" font-weight="bold">1</text>
<g font-size="52" font-weight="bold" text-anchor="middle" fill="#1f2937">
<text x="195" y="140">5</text><text x="285" y="140">2</text>
<text x="195" y="200">2</text><text x="285" y="200">7</text>
</g>
<line x1="172" y1="135" x2="218" y2="100" stroke="#ca8a04" stroke-width="5"/>
<text x="110" y="195" font-size="58" font-weight="bold" text-anchor="middle" fill="#dc2626">−</text>
<line x1="90" y1="218" x2="330" y2="218" stroke="#1f2937" stroke-width="5"/>
<g font-size="52" font-weight="bold" text-anchor="middle">
<text x="195" y="272" fill="#b91c1c">2</text><text x="285" y="272" fill="#1d4ed8">5</text>
</g>
<path d="M210 70 Q235 40 258 66" fill="none" stroke="#ca8a04" stroke-width="3"/>
<polygon points="262,58 262,72 250,66" fill="#ca8a04"/>
<text x="350" y="80" font-size="18" fill="#a16207">presto 1 decina:</text>
<text x="350" y="104" font-size="18" fill="#a16207">5 → 4,  2 → 12</text>
<text x="350" y="150" font-size="19" fill="#1d4ed8">① 12 − 7 = 5</text>
<text x="350" y="185" font-size="19" fill="#b91c1c">② 4 − 2 = 2</text>
<text x="350" y="262" font-size="22" fill="#1f2937" font-weight="bold">③ differenza = 25</text>
</svg>`,
      caption: "Il 5 delle decine presta una decina: diventa 4, e le unità diventano 12."
    },
    {
      type: "3d",
      title: "Il prestito con i cubetti 3D",
      scene: "blocks",
      options: { mode: "base10", value: 52 },
      caption: "Ecco 52: 5 stecche e 2 cubetti. Per togliere 7 cubetti devi «rompere» una stecca in 10 cubetti. Cambia il valore e prova a immaginare il prestito!"
    },
    {
      type: "example",
      title: "Esempio: le caramelle 🍬",
      html: `<p>Giorgia ha <b>52 caramelle</b> e ne regala <b>27</b> ai compagni. Quante ne restano?</p>
<p>52 − 27: le unità 2 − 7 non si può → prestito → 12 − 7 = 5; decine 4 − 2 = 2.</p>
<p>Restano <b>25 caramelle</b>. 🍬</p>
<p><b>Prova</b>: 25 + 27 = 52 ✅ (differenza + sottraendo = minuendo).</p>`
    },
    {
      type: "example",
      title: "Esempio: quanto manca? 📖",
      html: `<p>Il libro di Pietro ha <b>80 pagine</b>. Ne ha già lette <b>46</b>. Quante gliene mancano?</p>
<ul>
<li>Unità: 0 − 6 non si può → prestito: 8 diventa 7, 0 diventa 10 → 10 − 6 = <b>4</b>.</li>
<li>Decine: 7 − 4 = <b>3</b>.</li>
</ul>
<p>Mancano <b>34 pagine</b>. Prova: 34 + 46 = 80 ✅</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Il <b>minuendo</b> (il numero più grande) va <b>sopra</b>.</li>
<li>Si comincia dalle <b>unità</b>.</li>
<li>Se la cifra sopra è più piccola di quella sotto, <b>chiedi in prestito</b> 1 decina: le decine calano di 1, le unità aumentano di 10.</li>
<li><b>Prova</b>: differenza + sottraendo = minuendo.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Il segno <b>−</b> è stato stampato per la prima volta nello stesso libro del segno +, quello di <b>Johannes Widmann</b> del <b>1489</b>. Prima i mercanti scrivevano una <b>m</b> con una lineetta sopra, da <i>minus</i>, «meno» in latino. ➖</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Molti negozianti, quando ti danno il resto, non fanno la sottrazione: fanno un'<b>addizione</b>! 🛒</p>
<p>Se compri qualcosa da 37 € e paghi con 50 €, contano: «37… più 3 fa 40… più 10 fa 50». Ti danno 3 + 10 = <b>13 €</b>. Si chiama metodo del <b>completamento</b> ed è usatissimo in tutto il mondo.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per fare le sottrazioni",
      intro: "Se il prestito ti confonde, non preoccuparti: in altri Paesi e nei negozi si usano altri metodi. Tutti danno lo stesso risultato!",
      tabs: [
        {
          label: "🛒 Il metodo del negoziante",
          html: `<p>Invece di togliere, <b>conta in avanti</b> dal numero piccolo al numero grande (si chiama <b>addizione complementare</b>).</p>
<p><b>52 − 27</b>: parti da 27.</p>
<ul>
<li>27 → 30: <b>+3</b></li>
<li>30 → 50: <b>+20</b></li>
<li>50 → 52: <b>+2</b></li>
</ul>
<p>In tutto 3 + 20 + 2 = <b>25</b>. È il metodo che si insegna in molte scuole inglesi e olandesi.</p>`,
          widget: "numberLine",
          options: { min: 25, max: 55, step: 1, marks: [27, 30, 50, 52] }
        },
        {
          label: "⚖️ Aggiungi a tutti e due",
          html: `<p>Se aggiungi <b>lo stesso numero</b> al minuendo e al sottraendo, la differenza <b>non cambia</b>! (È la <b>proprietà invariantiva</b>.)</p>
<p><b>52 − 27</b>: aggiungo 3 a tutti e due → <b>55 − 30</b> = <b>25</b>. Facilissimo!</p>
<p>Pensa a due fratelli: uno ha 9 anni e l'altro 5. La differenza è 4 anni. Tra 10 anni ne avranno 19 e 15: la differenza è ancora 4! 👦👧</p>
<p>Questo trucco, fatto in colonna, è il metodo usato in diversi Paesi europei (detto anche «metodo austriaco» o delle «addizioni uguali»).</p>`
        },
        {
          label: "🦘 Salti all'indietro",
          html: `<p>Parti dal minuendo e salta <b>all'indietro</b>: prima le decine, poi le unità.</p>
<p><b>52 − 27</b>: 52 → (−10) 42 → (−10) 32 → poi −7: 32 → 25.</p>
<p>Oppure −2 per arrivare a 30, poi −5: 30 → <b>25</b>.</p>`,
          widget: "numberLine",
          options: { min: 20, max: 55, step: 1, marks: [52, 42, 32, 25] }
        },
        {
          label: "🧊 Rompi la stecca 3D",
          html: `<p>Prendi 52 cubetti: <b>5 stecche</b> da 10 e <b>2 cubetti</b> sciolti. Devi toglierne 27.</p>
<ol>
<li>Togliere 7 cubetti sciolti? Ne hai solo 2! Allora <b>rompi una stecca</b>: ora hai 4 stecche e 12 cubetti.</li>
<li>Togli 7 cubetti: ne restano 5.</li>
<li>Togli 2 stecche: ne restano 2.</li>
</ol>
<p>Resta: 2 stecche e 5 cubetti = <b>25</b>. Ecco cos'è davvero il prestito!</p>`,
          scene: "blocks",
          options: { mode: "base10", value: 25 }
        },
        {
          label: "🧮 Con l'abaco",
          html: `<p>Metti 52 sull'abaco. Per togliere 7 unità ne servono di più: togli 1 pallina dalle decine e metti 10 palline nelle unità. Poi togli 7 unità e 2 decine. Che cosa resta?</p>`,
          widget: "abacus",
          options: { columns: ["da", "u"], value: 52 }
        },
        {
          "label": "🇩🇪 Il metodo tedesco: «quanto manca?»",
          "html": "<p>In <b>Germania</b> e in <b>Austria</b> molti bambini fanno la sottrazione in colonna <b>contando quanto manca</b>. Invece di dire «2 meno 7» dicono «7 più quanto fa 2?». È come quando il negoziante ti dà il resto!</p><p><b>52 − 27</b>:</p><ol><li><b>Unità</b>: 7 più quanto fa 2? Non si può. Allora: 7 più quanto fa <b>12</b>? → <b>5</b>. Scrivi 5.</li><li>Hai usato 10 in più. Scrivi un <b>piccolo 1</b> sotto il 2 delle decine del <b>numero da togliere</b>: ora conta come <b>3</b>.</li><li><b>Decine</b>: 3 più quanto fa 5? → <b>2</b>. Scrivi 2.</li></ol><p>Risultato: <b>25</b>. Controlla: 25 + 27 = 52 ✔</p><p>Prova con <b>83 − 46</b>: 6 + ? = 13 → 7; il piccolo 1 fa diventare 4 un 5; 5 + ? = 8 → 3. Risultato <b>37</b>.</p><p>Con questo metodo non devi mai «rompere» le decine del numero di sopra: il prestito si «restituisce» al numero di sotto.</p>",
          "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"240\" fill=\"#f8fafc\"/><text x=\"120\" y=\"40\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#2563eb\" text-anchor=\"middle\" font-weight=\"bold\">da</text><text x=\"180\" y=\"40\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#16a34a\" text-anchor=\"middle\" font-weight=\"bold\">u</text><text x=\"120\" y=\"90\" font-size=\"40\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">5</text><text x=\"180\" y=\"90\" font-size=\"40\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">2</text><text x=\"70\" y=\"145\" font-size=\"40\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">−</text><text x=\"120\" y=\"145\" font-size=\"40\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">2</text><text x=\"180\" y=\"145\" font-size=\"40\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">7</text><text x=\"138\" y=\"165\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">1</text><line x1=\"60\" y1=\"170\" x2=\"220\" y2=\"170\" stroke=\"#1e293b\" stroke-width=\"3\"/><text x=\"120\" y=\"215\" font-size=\"40\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2</text><text x=\"180\" y=\"215\" font-size=\"40\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">5</text><text x=\"260\" y=\"70\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\">1) Unità: 7 + ? = 2  no!</text><text x=\"260\" y=\"98\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#16a34a\" font-weight=\"bold\">    7 + ? = 12  →  5</text><text x=\"260\" y=\"136\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\">2) Ho usato 10 in più:</text><text x=\"260\" y=\"162\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">    piccolo 1 sotto il 2 → 3</text><text x=\"260\" y=\"200\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#2563eb\" font-weight=\"bold\">3) Decine: 3 + ? = 5  →  2</text></svg>"
        },
        {
          "label": "🇯🇵 Il soroban giapponese: gli amici del 10",
          "html": "<p>In <b>Giappone</b> si usa il <b>soroban</b>, un abaco speciale: su ogni asta c'è <b>1 perlina in alto che vale 5</b> e <b>4 perline in basso che valgono 1</b>. Le perline contano quando toccano la barra in mezzo. Molti bambini giapponesi vanno anche a scuola di soroban, il pomeriggio!</p><p>Quando non ci sono abbastanza perline da togliere, si usano gli <b>«amici del 10»</b>: le coppie che fanno 10 (1 e 9, 2 e 8, 3 e 7, 4 e 6, 5 e 5).</p><p><b>12 − 7</b>: nelle unità ci sono solo 2 perline, non posso toglierne 7. Allora:</p><ol><li>tolgo <b>1 decina</b> (cioè 10, che è più di 7);</li><li>ho tolto 3 di troppo (perché 10 − 7 = 3, l'amico del 7): li <b>rimetto</b> nelle unità: 2 + 3 = <b>5</b>.</li></ol><p><b>52 − 27</b>: unità: 2 − 7 non si può → tolgo 1 decina e rimetto 3 → unità 5, decine 4. Poi tolgo 2 decine: 4 − 2 = 2. Risultato <b>25</b>!</p><p>Nel disegno: a sinistra 52, a destra il risultato 25.</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><rect x=\"40\" y=\"20\" width=\"140\" height=\"230\" fill=\"#92400e\" stroke=\"#451a03\" stroke-width=\"3\"/><rect x=\"50\" y=\"30\" width=\"120\" height=\"210\" fill=\"#fef3c7\" stroke=\"#78350f\" stroke-width=\"2\"/><rect x=\"50\" y=\"90\" width=\"120\" height=\"8\" fill=\"#451a03\" stroke=\"#451a03\" stroke-width=\"1\"/><line x1=\"80\" y1=\"30\" x2=\"80\" y2=\"240\" stroke=\"#78350f\" stroke-width=\"3\"/><ellipse cx=\"80\" cy=\"75\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"80\" cy=\"141\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"80\" cy=\"169\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"80\" cy=\"197\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"80\" cy=\"225\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"80\" y=\"272\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">da</text><line x1=\"140\" y1=\"30\" x2=\"140\" y2=\"240\" stroke=\"#78350f\" stroke-width=\"3\"/><ellipse cx=\"140\" cy=\"47\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"140\" cy=\"113\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"140\" cy=\"141\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"140\" cy=\"197\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"140\" cy=\"225\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"140\" y=\"272\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">u</text><rect x=\"330\" y=\"20\" width=\"140\" height=\"230\" fill=\"#92400e\" stroke=\"#451a03\" stroke-width=\"3\"/><rect x=\"340\" y=\"30\" width=\"120\" height=\"210\" fill=\"#fef3c7\" stroke=\"#78350f\" stroke-width=\"2\"/><rect x=\"340\" y=\"90\" width=\"120\" height=\"8\" fill=\"#451a03\" stroke=\"#451a03\" stroke-width=\"1\"/><line x1=\"370\" y1=\"30\" x2=\"370\" y2=\"240\" stroke=\"#78350f\" stroke-width=\"3\"/><ellipse cx=\"370\" cy=\"47\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"370\" cy=\"113\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"370\" cy=\"141\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"370\" cy=\"197\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"370\" cy=\"225\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"370\" y=\"272\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">da</text><line x1=\"430\" y1=\"30\" x2=\"430\" y2=\"240\" stroke=\"#78350f\" stroke-width=\"3\"/><ellipse cx=\"430\" cy=\"75\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"430\" cy=\"141\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"430\" cy=\"169\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"430\" cy=\"197\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"430\" cy=\"225\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"430\" y=\"272\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">u</text><text x=\"110\" y=\"292\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">52</text><text x=\"400\" y=\"292\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">25</text><text x=\"235\" y=\"120\" font-size=\"22\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">− 27</text><text x=\"235\" y=\"145\" font-size=\"30\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">→</text><text x=\"480\" y=\"60\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\">in alto:</text><text x=\"480\" y=\"78\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">1 perlina = 5</text><text x=\"480\" y=\"120\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\">in basso:</text><text x=\"480\" y=\"138\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">1 perlina = 1</text><text x=\"480\" y=\"180\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#dc2626\">rosse = contano</text></svg>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della sottrazione in colonna",
      nodes: [
        { id: "sottrazione", label: "Sottrazione", x: 50, y: 8, color: "#dc2626", html: "Operazione che toglie, o che trova la differenza tra due numeri.", why: "Dal latino <i>subtrahere</i>, «tirare via da sotto». Serve per sapere quanto resta, quanto manca e di quanto un numero supera l'altro." },
        { id: "termini", label: "Minuendo, sottraendo, differenza", x: 18, y: 28, color: "#2563eb", html: "Minuendo − sottraendo = differenza.", why: "Minuendo = «ciò che deve essere diminuito», sottraendo = «ciò che deve essere tolto»: sono parole latine che descrivono il loro compito." },
        { id: "inversa", label: "Inversa dell'addizione", x: 82, y: 28, color: "#16a34a", html: "Togliere è il contrario di aggiungere.", why: "Se 25 + 27 = 52, allora 52 − 27 = 25: sono la stessa relazione vista da due lati. Per questo la prova si fa con un'addizione." },
        { id: "colonna", label: "In colonna", x: 50, y: 40, color: "#f59e0b", html: "Unità sotto unità, decine sotto decine, minuendo sopra.", why: "Come per l'addizione, le cifre valgono secondo la loro posizione (base 10): si sottraggono unità da unità e decine da decine." },
        { id: "prestito", label: "Prestito (cambio)", x: 22, y: 62, color: "#a855f7", html: "1 decina si spezza in 10 unità.", why: "È il cambio dell'addizione al contrario: lì 10 unità diventano 1 decina, qui 1 decina torna a essere 10 unità. Il valore totale del numero non cambia: 52 = 5 da + 2 u = 4 da + 12 u." },
        { id: "invariantiva", label: "Proprietà invariantiva", x: 78, y: 62, color: "#0ea5e9", html: "Aggiungendo o togliendo lo stesso numero a entrambi i termini, la differenza non cambia.", why: "La differenza è la «distanza» tra due numeri sulla retta: se li sposti tutti e due della stessa quantità, la distanza resta uguale." },
        { id: "prova", label: "La prova", x: 50, y: 85, color: "#14b8a6", html: "Differenza + sottraendo = minuendo.", why: "Funziona perché la sottrazione è l'operazione inversa dell'addizione." },
        { id: "segno", label: "Il segno −", x: 15, y: 88, color: "#64748b", html: "Il simbolo della sottrazione.", why: "Prima si scriveva una «m» con una lineetta (da <i>minus</i>, «meno»). Il segno − apparve a stampa nel 1489 nel libro di <b>Johannes Widmann</b>." }
      ],
      edges: [
        ["sottrazione", "termini", "ha"],
        ["sottrazione", "inversa", "è la"],
        ["sottrazione", "colonna", "si fa"],
        ["colonna", "prestito", "se serve"],
        ["sottrazione", "invariantiva", "ha la"],
        ["inversa", "prova", "permette"],
        ["sottrazione", "segno", "si scrive con"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: con il prestito",
      questions: [
        { type: "num", q: "Quanto fa 43 − 18?", answer: 25, explain: "3 − 8 non si può: prestito → 13 − 8 = 5; 3 − 1 = 2: 25." },
        { type: "num", q: "Quanto fa 70 − 24?", answer: 46, explain: "0 − 4 non si può: prestito → 10 − 4 = 6; 6 − 2 = 4: 46." },
        { type: "tf", q: "In 65 − 32 serve il prestito.", answer: false, explain: "5 − 2 si può fare: niente prestito. Risultato 33." }
      ]
    }
  ],
  glossary: [
    { t: "Sottrazione", d: "Operazione che toglie o trova la differenza." },
    { t: "Minuendo", d: "Il numero da cui si toglie (sta sopra)." },
    { t: "Sottraendo", d: "Il numero che si toglie." },
    { t: "Differenza", d: "Il risultato della sottrazione." },
    { t: "Prestito (cambio)", d: "Quando si spezza 1 decina in 10 unità per poter sottrarre." },
    { t: "Proprietà invariantiva", d: "Aggiungendo o togliendo lo stesso numero a minuendo e sottraendo, la differenza non cambia." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Quanto fa 87 − 45?", answer: 42, explain: "7 − 5 = 2; 8 − 4 = 4: 42." },
      { type: "num", q: "Quanto fa 61 − 29?", answer: 32, explain: "1 − 9 non si può: 11 − 9 = 2; 5 − 2 = 3: 32." },
      { type: "num", q: "Quanto fa 90 − 37?", answer: 53, explain: "10 − 7 = 3; 8 − 3 = 5: 53." },
      { type: "mc", q: "In 64 − 21 = 43, il sottraendo è…", options: ["64", "21", "43"], answer: 1, explain: "Il sottraendo è il numero che si toglie: 21." },
      { type: "tf", q: "Nella sottrazione in colonna il numero più grande va sopra.", answer: true, explain: "Il minuendo va sopra." },
      { type: "tf", q: "Quando chiedo un prestito, le decine del minuendo aumentano di 1.", answer: false, explain: "Le decine diminuiscono di 1 e le unità aumentano di 10." },
      { type: "mc", q: "Come si fa la prova di 50 − 18 = 32?", options: ["32 + 18", "50 + 18", "32 − 18"], answer: 0, explain: "Differenza + sottraendo = minuendo: 32 + 18 = 50." },
      { type: "text", q: "Come si chiama il risultato della sottrazione?", answer: ["differenza", "la differenza"], explain: "Si chiama differenza." },
      { type: "num", q: "In classe ci sono 25 bambini; 8 sono in gita. Quanti sono in classe?", answer: 17, explain: "25 − 8: 15 − 8 = 7 con prestito, 1 − 0 = 1: 17." },
      { type: "num", q: "Un treno ha 72 posti; 46 sono occupati. Quanti posti liberi?", answer: 26, explain: "12 − 6 = 6; 6 − 4 = 2: 26." },
      { type: "order", q: "Metti in ordine i passi di 52 − 27.", items: ["2 − 7 non si può", "Chiedo in prestito una decina: 5 diventa 4", "Le unità diventano 12: 12 − 7 = 5", "Decine: 4 − 2 = 2. Risultato 25"], explain: "Prima le unità con il prestito, poi le decine." }
    ],
    gen: [["sub100", 3]]
  }
});
