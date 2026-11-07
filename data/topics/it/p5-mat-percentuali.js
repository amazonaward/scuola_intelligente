TOPIC('it', {
  id: "p5-mat-percentuali",
  title: "Le percentuali",
  intro: "«Saldi: −30%!», «Batteria al 15%», «Il 60% della classe preferisce il calcio». Le <b>percentuali</b> sono ovunque. Il simbolo <b>%</b> vuol dire semplicemente <b>\"su cento\"</b>. Impariamo a calcolarle, a usarle per <b>sconti</b> e <b>aumenti</b> e a leggerle nei <b>grafici a torta</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Che cos'è una percentuale",
      html: `<p>Una <b>percentuale</b> è una <b>frazione con denominatore 100</b>, scritta con il simbolo <b>%</b> (\"per cento\").</p>
<ul>
<li><b>25%</b> = 25/100 = 0,25 → 25 parti su 100;</li>
<li><b>50%</b> = 50/100 = 1/2 → <b>la metà</b>;</li>
<li><b>100%</b> = 100/100 = 1 → <b>tutto</b>, l'intero;</li>
<li><b>10%</b> = 10/100 = 1/10 → un decimo.</li>
</ul>
<p>Perché proprio 100? Perché così è facilissimo <b>confrontare</b>: \"18 su 25\" e \"35 su 50\" sono difficili da confrontare, ma \"72%\" e \"70%\" si confrontano subito!</p>`
    },
    {
      type: "svg",
      title: "La griglia del 100",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<g transform="translate(30,30)">
<rect x="0" y="0" width="240" height="240" fill="#ffffff" stroke="#1f2937" stroke-width="3"/>
<rect x="0" y="0" width="240" height="48" fill="#f97316"/>
<rect x="0" y="48" width="120" height="24" fill="#f97316"/>
<g stroke="#cbd5e1" stroke-width="1">
<line x1="24" y1="0" x2="24" y2="240"/><line x1="48" y1="0" x2="48" y2="240"/><line x1="72" y1="0" x2="72" y2="240"/><line x1="96" y1="0" x2="96" y2="240"/><line x1="120" y1="0" x2="120" y2="240"/><line x1="144" y1="0" x2="144" y2="240"/><line x1="168" y1="0" x2="168" y2="240"/><line x1="192" y1="0" x2="192" y2="240"/><line x1="216" y1="0" x2="216" y2="240"/>
<line x1="0" y1="24" x2="240" y2="24"/><line x1="0" y1="48" x2="240" y2="48"/><line x1="0" y1="72" x2="240" y2="72"/><line x1="0" y1="96" x2="240" y2="96"/><line x1="0" y1="120" x2="240" y2="120"/><line x1="0" y1="144" x2="240" y2="144"/><line x1="0" y1="168" x2="240" y2="168"/><line x1="0" y1="192" x2="240" y2="192"/><line x1="0" y1="216" x2="240" y2="216"/>
</g>
</g>
<text x="310" y="70" font-size="20" fill="#1f2937">100 quadretti = <tspan font-weight="bold">100%</tspan> (l'intero)</text>
<text x="310" y="115" font-size="20" fill="#c2410c">25 quadretti colorati</text>
<text x="310" y="150" font-size="26" fill="#c2410c" font-weight="bold">= 25/100 = 25%</text>
<text x="310" y="190" font-size="20" fill="#1f2937">= 0,25 = 1/4</text>
<text x="310" y="235" font-size="17" fill="#475569">un quarto della griglia!</text>
</svg>`,
      caption: "In una griglia di 100 quadretti, ogni quadretto è l'1%. Colorarne 25 significa colorare il 25%."
    },
    {
      type: "widget",
      title: "Costruisci la percentuale sui quadretti",
      widget: "areaGrid",
      options: { w: 5, h: 4, max: 10 },
      caption: "La griglia 10 × 10 ha 100 quadretti: l'area colorata è la percentuale. Con 5 × 4 = 20 quadretti hai il 20%. Prova a fare il 30%, il 50%, il 64%!"
    },
    {
      type: "text",
      title: "Calcolare la percentuale di un numero",
      html: `<p>Calcolare una percentuale è come calcolare una <b>frazione di un numero</b> con denominatore 100:</p>
<ol>
<li><b>dividi</b> il numero per <b>100</b> (trovi l'1%);</li>
<li><b>moltiplica</b> per la percentuale.</li>
</ol>
<p>Esempio: il 30% di 250 → 250 : 100 = 2,5 → 2,5 × 30 = <b>75</b>.</p>
<p>Oppure, al contrario: 250 × 30 : 100 = 7500 : 100 = <b>75</b>.</p>
<p><b>Percentuali \"amiche\"</b> da ricordare: 50% = metà (: 2), 25% = un quarto (: 4), 10% = un decimo (: 10), 20% = un quinto (: 5), 75% = tre quarti.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la classe e lo sport",
      html: `<p>Nella classe 5ª A ci sono <b>20 alunni</b>. Il <b>40%</b> fa nuoto. Quanti sono?</p>
<p>20 : 100 × 40 = <b>8 alunni</b>. Trucco: il 10% di 20 è 2, quindi il 40% è 2 × 4 = 8.</p>
<p>E al contrario: <b>5 alunni su 20</b> suonano uno strumento. Che percentuale è? 5/20 = 25/100 = <b>25%</b> (ho moltiplicato numeratore e denominatore per 5 per arrivare a 100).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: calcolare le percentuali",
      questions: [
        { type: "num", q: "Quanto è il 50% di 84?", answer: 42, explain: "Il 50% è la metà: 84 : 2 = 42." },
        { type: "num", q: "Quanto è il 10% di 350?", answer: 35, explain: "Il 10% è un decimo: 350 : 10 = 35." },
        { type: "mc", q: "Il 25% corrisponde alla frazione…", options: ["1/2", "1/4", "1/25"], answer: 1, explain: "25/100 = 1/4." },
        { type: "num", q: "3 alunni su 10 portano gli occhiali. Che percentuale è?", answer: 30, unit: "%", explain: "3/10 = 30/100 = 30%." }
      ]
    },
    {
      type: "text",
      title: "Sconti e aumenti",
      html: `<p><b>Sconto</b>: il prezzo <b>diminuisce</b> di una percentuale.</p>
<ol>
<li>calcola lo sconto: prezzo × % : 100;</li>
<li>togli lo sconto dal prezzo: <b>prezzo scontato = prezzo − sconto</b>.</li>
</ol>
<p>Scarpe da <b>60 €</b> con sconto del <b>20%</b>: sconto = 60 × 20 : 100 = 12 € → prezzo finale <b>60 − 12 = 48 €</b>.</p>
<p><b>Aumento</b>: il prezzo <b>cresce</b> di una percentuale. Abbonamento di <b>40 €</b> aumentato del <b>5%</b>: aumento = 40 × 5 : 100 = 2 € → nuovo prezzo <b>42 €</b>.</p>
<p><b>Scorciatoia</b>: con lo sconto del 20% paghi l'<b>80%</b> del prezzo: 60 × 80 : 100 = 48 €. Stesso risultato!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: i saldi",
      html: `<p>Una bicicletta costa <b>180 €</b>. Durante i saldi è scontata del <b>30%</b>.</p>
<ul>
<li>Sconto: 180 : 100 × 30 = <b>54 €</b>.</li>
<li>Prezzo scontato: 180 − 54 = <b>126 €</b>.</li>
<li>Verifica: il 70% di 180 = 18 × 7 = 126 € ✅.</li>
</ul>
<p>⚠️ <b>Attenzione al trucco!</b> Se un prezzo aumenta del 10% e poi diminuisce del 10%, <b>non</b> torna uguale: 100 € → +10% = 110 € → −10% = 99 €! Perché il secondo 10% si calcola su 110, non su 100.</p>`
    },
    {
      type: "text",
      title: "I grafici a torta (aerogrammi)",
      html: `<p>Il <b>grafico a torta</b> (o <b>aerogramma</b>) è un cerchio diviso in spicchi: <b>tutto il cerchio è il 100%</b> e ogni spicchio mostra una percentuale.</p>
<p>Il cerchio ha <b>360°</b>, quindi:</p>
<ul>
<li>100% = 360°, 50% = 180° (mezzo cerchio), 25% = 90° (un angolo retto), 10% = 36°;</li>
<li><b>1% = 3,6°</b>: per disegnare uno spicchio moltiplica la percentuale per 3,6.</li>
</ul>
<p>La somma di tutti gli spicchi deve fare sempre <b>100%</b> (e 360°).</p>`
    },
    {
      type: "svg",
      title: "Il frutto preferito della 5ª B",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#fffbeb"/>
<path d="M160,150 L160,30 A120,120 0 0,1 280,150 Z" fill="#ef4444"/>
<path d="M160,150 L280,150 A120,120 0 0,1 160,270 Z" fill="#facc15"/>
<path d="M160,150 L160,270 A120,120 0 0,1 62.9,220.5 Z" fill="#22c55e"/>
<path d="M160,150 L62.9,220.5 A120,120 0 0,1 160,30 Z" fill="#f97316"/>
<g font-size="20" font-weight="bold" text-anchor="middle" fill="#1f2937">
<text x="210" y="105">25%</text><text x="210" y="205">25%</text><text x="125" y="228">15%</text><text x="105" y="125">35%</text>
</g>
<g font-size="18" fill="#1f2937">
<rect x="340" y="50" width="24" height="24" fill="#f97316"/><text x="374" y="69">🍊 arancia 35% (7 alunni)</text>
<rect x="340" y="95" width="24" height="24" fill="#ef4444"/><text x="374" y="114">🍎 mela 25% (5 alunni)</text>
<rect x="340" y="140" width="24" height="24" fill="#facc15"/><text x="374" y="159">🍌 banana 25% (5 alunni)</text>
<rect x="340" y="185" width="24" height="24" fill="#22c55e"/><text x="374" y="204">🍐 pera 15% (3 alunni)</text>
<text x="340" y="250" font-weight="bold">Totale: 20 alunni = 100%</text>
</g>
</svg>`,
      caption: "Ogni alunno vale 100 : 20 = 5%. La mela (25%) occupa un quarto di cerchio: 90°."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Da dove viene il simbolo %",
      html: `<p>Il simbolo <b>%</b> è nato in <b>Italia</b>! Nei manoscritti dei mercanti del Quattrocento si scriveva <i>\"per cento\"</i> abbreviato in <b>\"p cento\"</b> o <b>\"p c°\"</b>. A forza di scriverlo velocemente, la \"c\" e il cerchietto diventarono una specie di frazione con due cerchietti: <b>%</b>. Esiste anche il <b>per mille ‰</b> (con tre cerchietti), usato per esempio per la salinità del mare (circa 35‰).</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il primo grafico a torta",
      html: `<p>Il primo grafico a torta conosciuto fu disegnato nel <b>1801</b> dall'ingegnere scozzese <b>William Playfair</b>, che inventò anche il grafico a barre e quello a linee. Più tardi l'infermiera <b>Florence Nightingale</b> usò un grafico simile, a \"rosa\", per mostrare che durante la guerra di Crimea (1853–1856) morivano più soldati per le malattie che per le ferite: grazie ai suoi grafici gli ospedali militari migliorarono l'igiene!</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>% = su cento</b>: 35% = 35/100 = 0,35.</li>
<li>Percentuale di un numero: <b>numero × % : 100</b>.</li>
<li><b>Sconto</b>: prezzo − sconto (oppure paghi il 100% − sconto%). <b>Aumento</b>: prezzo + aumento.</li>
<li>Grafico a torta: <b>100% = 360°</b>, 1% = 3,6°.</li>
<li>50% = metà, 25% = un quarto, 10% = un decimo, 20% = un quinto.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le percentuali",
      intro: "Le percentuali si possono capire con la torta, con il metodo del 10% usato nei Paesi anglosassoni, con la batteria del telefono o con la tabella delle proporzioni.",
      tabs: [
        {
          label: "🥧 Torta e frazioni",
          html: `<p>Le percentuali sono <b>frazioni travestite</b>! Muovi i cursori: con 1/4 la torta è al <b>25%</b>, con 1/2 al <b>50%</b>, con 3/4 al <b>75%</b>, con 1/5 al <b>20%</b>, con 1/10 al <b>10%</b>.</p>
<p>Per passare da frazione a percentuale, trova la frazione equivalente con denominatore 100: 3/5 = 60/100 = <b>60%</b>.</p>`,
          widget: "fractionPie",
          options: { n: 1, d: 4 }
        },
        {
          label: "🔟 Il metodo del 10%",
          html: `<p>In Inghilterra e in molti altri Paesi si insegna a calcolare tutto partendo dal <b>10%</b>, che si trova subito dividendo per 10:</p>
<ul>
<li>10% di 80 = <b>8</b></li>
<li>20% = 8 × 2 = <b>16</b>;  30% = 8 × 3 = <b>24</b></li>
<li>5% = metà del 10% = <b>4</b></li>
<li>15% = 10% + 5% = 8 + 4 = <b>12</b></li>
<li>1% = 10% : 10 = <b>0,8</b></li>
</ul>
<p>Così il 35% di 80 = 30% + 5% = 24 + 4 = <b>28</b>. Tutto a mente, senza carta! 🧠</p>`
        },
        {
          label: "🔋 La batteria",
          html: `<p>La <b>batteria del telefono</b> è un perfetto \"misuratore di percentuali\": il 100% è piena, il 0% è scarica, il 50% è a metà.</p>
<p>Se la batteria dura <b>20 ore</b> e sei al <b>25%</b>, ti restano 20 × 25 : 100 = <b>5 ore</b>.</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="200" fill="#f1f5f9"/>
<g stroke="#1f2937" stroke-width="4">
<rect x="30" y="60" width="140" height="70" rx="10" fill="#ffffff"/><rect x="170" y="80" width="10" height="30" fill="#1f2937"/>
<rect x="220" y="60" width="140" height="70" rx="10" fill="#ffffff"/><rect x="360" y="80" width="10" height="30" fill="#1f2937"/>
<rect x="410" y="60" width="140" height="70" rx="10" fill="#ffffff"/><rect x="550" y="80" width="10" height="30" fill="#1f2937"/>
</g>
<rect x="36" y="66" width="128" height="58" rx="6" fill="#22c55e"/>
<rect x="226" y="66" width="64" height="58" rx="6" fill="#facc15"/>
<rect x="416" y="66" width="32" height="58" rx="6" fill="#ef4444"/>
<g font-size="22" text-anchor="middle" font-weight="bold" fill="#1f2937">
<text x="100" y="165">100%</text><text x="290" y="165">50%</text><text x="480" y="165">25%</text>
</g>
<g font-size="15" text-anchor="middle" fill="#475569">
<text x="100" y="190">tutta</text><text x="290" y="190">metà</text><text x="480" y="190">un quarto</text>
</g>
</svg>`
        },
        {
          label: "📊 La tabella (proporzione)",
          html: `<p>Puoi usare una <b>tabella a due righe</b>: sopra la quantità, sotto la percentuale. Quello che fai a una colonna lo fai anche all'altra.</p>
<table>
<tr><th>Quantità</th><td>240</td><td>24</td><td>72</td></tr>
<tr><th>Percentuale</th><td>100%</td><td>10%</td><td>30%</td></tr>
</table>
<p>Da 100% a 10% divido per 10 (anche 240 : 10 = 24); da 10% a 30% moltiplico per 3 (24 × 3 = 72). Quindi il <b>30% di 240 è 72</b>. Alle medie questo diventerà una <b>proporzione</b>: 240 : 100 = x : 30.</p>`
        },
        {
          "label": "🇸🇬 Il modello a barre (Singapore)",
          "html": "<p>A <b>Singapore</b> i problemi con le percentuali si risolvono disegnando una <b>barra</b>: la barra intera è il <b>100%</b>, e si divide in parti uguali.</p><p><b>Problema 1</b>: una bici costa <b>240 €</b> ed è scontata del <b>25%</b>. Quanto la paghi?</p><ol><li>Disegna una barra = 100% = 240 €.</li><li>25% è un quarto: dividi la barra in <b>4 parti</b>. Ogni parte vale 240 : 4 = <b>60 €</b>.</li><li>Lo sconto è 1 parte (60 €); tu paghi le altre 3 parti: 3 × 60 = <b>180 €</b>.</li></ol><p><b>Problema 2</b> (al contrario!): il <b>30%</b> dei bambini di una classe sono <b>6</b>. Quanti bambini ci sono in tutto?</p><ol><li>Dividi la barra in <b>10 parti</b> da 10%.</li><li>30% = 3 parti = 6 bambini → 1 parte = 6 : 3 = 2.</li><li>Tutta la barra = 10 parti = <b>20 bambini</b>.</li></ol><p>Il disegno ti fa vedere subito se devi moltiplicare o dividere.</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><text x=\"20\" y=\"30\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Bici: 240 € — sconto 25%</text><rect x=\"40\" y=\"45\" width=\"120\" height=\"44\" fill=\"#bbf7d0\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"100\" y=\"73\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">25% = 60 €</text><rect x=\"160\" y=\"45\" width=\"120\" height=\"44\" fill=\"#bbf7d0\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"220\" y=\"73\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">25% = 60 €</text><rect x=\"280\" y=\"45\" width=\"120\" height=\"44\" fill=\"#bbf7d0\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"340\" y=\"73\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">25% = 60 €</text><rect x=\"400\" y=\"45\" width=\"120\" height=\"44\" fill=\"#fecaca\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"460\" y=\"73\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">25% = 60 €</text><text x=\"40\" y=\"112\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">100% = 240 €  →  1 parte = 240 : 4 = 60 €</text><text x=\"40\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#15803d\" font-weight=\"bold\">Paghi 3 parti = 180 €</text><text x=\"400\" y=\"112\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#b91c1c\" font-weight=\"bold\">sconto</text><line x1=\"20\" y1=\"152\" x2=\"580\" y2=\"152\" stroke=\"#cbd5e1\" stroke-width=\"2\"/><text x=\"20\" y=\"180\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Il 30% della classe = 6 bambini. Quanti in tutto?</text><rect x=\"40\" y=\"195\" width=\"50\" height=\"40\" fill=\"#bfdbfe\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"65\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2</text><rect x=\"90\" y=\"195\" width=\"50\" height=\"40\" fill=\"#bfdbfe\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"115\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2</text><rect x=\"140\" y=\"195\" width=\"50\" height=\"40\" fill=\"#bfdbfe\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"165\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2</text><rect x=\"190\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"215\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"240\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"265\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"290\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"315\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"340\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"365\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"390\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"415\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"440\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"465\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"490\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"515\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><text x=\"40\" y=\"258\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">3 parti da 10% = 6  →  1 parte = 2</text><text x=\"40\" y=\"280\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">10 parti = 100% = 20 bambini</text></svg>"
        },
        {
          "label": "🇬🇧 Il «moltiplicatore» inglese",
          "html": "<p>Nelle scuole del <b>Regno Unito</b> si impara un trucco velocissimo per sconti e aumenti: il <b>multiplier</b>, cioè il <b>moltiplicatore</b>. L'idea: invece di calcolare lo sconto e poi toglierlo, calcoli <b>subito quanto paghi</b>.</p><ul><li>Sconto del <b>20%</b> → paghi l'<b>80%</b> → 80/100 = <b>0,8</b> → moltiplica per 0,8.<br>45 € × 0,8 = <b>36 €</b>.</li><li>Sconto del <b>50%</b> → paghi il 50% → × 0,5 (cioè la metà).</li><li>Aumento del <b>10%</b> → paghi il <b>110%</b> → × <b>1,1</b>.<br>50 € × 1,1 = <b>55 €</b>.</li></ul><p><b>Come trovi il moltiplicatore</b>: parti da 100%, togli lo sconto (o aggiungi l'aumento) e dividi per 100.</p><p>⚠️ <b>Trappola</b>: un aumento del 10% seguito da uno sconto del 10% <b>non</b> ti riporta al prezzo di partenza! 100 € × 1,1 = 110 €; 110 € × 0,9 = <b>99 €</b>. Perché? Il secondo 10% è calcolato su un numero più grande.</p>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle percentuali",
      nodes: [
        { id: "frazioni", label: "Frazioni decimali", x: 50, y: 6, color: "#64748b", html: "Frazioni con denominatore 10, 100, 1000.", why: "Le percentuali sono un caso speciale: frazioni con denominatore 100. Per questo tutto ciò che sai sulle frazioni vale anche per le percentuali." },
        { id: "percentuale", label: "Percentuale", x: 50, y: 28, color: "#2563eb", html: "Una frazione su 100, scritta con %: 35% = 35/100.", why: "Dal latino <i>per centum</i> = \"per ogni cento\". I Romani usavano già una tassa di 1/100 (<i>centesima rerum venalium</i>) sulle merci vendute all'asta, introdotta da Augusto." },
        { id: "simbolo", label: "Simbolo %", x: 15, y: 28, color: "#a855f7", html: "Il segno che significa \"per cento\".", why: "Nato dalle abbreviazioni dei mercanti italiani del Quattrocento (\"p cento\" → \"p c°\" → %). Usare sempre 100 come denominatore rende facili i confronti." },
        { id: "calcolo", label: "% di un numero", x: 22, y: 55, color: "#16a34a", html: "Numero × percentuale : 100.", why: "È la regola della frazione di un numero (diviso il denominatore, per il numeratore) con denominatore 100." },
        { id: "decimale", label: "Forma decimale", x: 50, y: 55, color: "#eab308", html: "35% = 0,35; 5% = 0,05; 100% = 1.", why: "Dividere per 100 sposta la virgola di due posti a sinistra: per questo le calcolatrici trasformano le percentuali in numeri decimali." },
        { id: "sconti", label: "Sconti e aumenti", x: 22, y: 82, color: "#dc2626", html: "Prezzo − sconto; prezzo + aumento.", why: "Sono nati con il commercio: i mercanti calcolavano interessi, guadagni e perdite \"per cento\" nei loro libri contabili, già nel Medioevo (Fibonacci ne parla nel <i>Liber Abaci</i>, 1202)." },
        { id: "torta", label: "Grafico a torta", x: 78, y: 55, color: "#f97316", html: "Cerchio diviso in spicchi: 100% = 360°.", why: "Inventato da William Playfair nel 1801. Funziona perché il cerchio intero rappresenta bene l'idea di \"tutto\" (100%)." },
        { id: "gradi", label: "1% = 3,6°", x: 78, y: 82, color: "#0ea5e9", html: "Per disegnare uno spicchio: percentuale × 3,6.", why: "Il cerchio ha 360°, un'eredità dei Babilonesi che contavano in base 60: 360 : 100 = 3,6." },
        { id: "statistica", label: "Statistica", x: 50, y: 92, color: "#14b8a6", html: "Raccogliere dati e confrontarli con le percentuali.", why: "Le percentuali permettono di confrontare gruppi di grandezza diversa (5 su 20 e 30 su 120 sono entrambi il 25%): per questo l'ISTAT e i sondaggi le usano sempre." }
      ],
      edges: [
        ["frazioni", "percentuale", "caso speciale"],
        ["percentuale", "simbolo", "si scrive con"],
        ["percentuale", "calcolo", "si calcola"],
        ["percentuale", "decimale", "equivale a"],
        ["calcolo", "sconti", "serve per"],
        ["percentuale", "torta", "si rappresenta con"],
        ["torta", "gradi", "si disegna con"],
        ["decimale", "statistica", "usata nella"],
        ["torta", "statistica", "usato nella"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: sconti e grafici",
      questions: [
        { type: "num", q: "Un gioco costa 50 € ed è scontato del 10%. Quanto lo paghi?", answer: 45, unit: "€", explain: "Sconto: 5 €; 50 − 5 = 45 €." },
        { type: "num", q: "In un grafico a torta, quanti gradi misura lo spicchio del 50%?", answer: 180, unit: "°", explain: "50% di 360° = 180°." },
        { type: "tf", q: "In un grafico a torta la somma delle percentuali deve fare 100%.", answer: true, explain: "Il cerchio intero rappresenta il totale, cioè il 100%." }
      ]
    }
  ],
  glossary: [
    { t: "Percentuale", d: "Frazione con denominatore 100, indicata con il simbolo %." },
    { t: "Sconto", d: "Diminuzione di un prezzo, spesso espressa in percentuale." },
    { t: "Prezzo scontato", d: "Prezzo iniziale meno lo sconto." },
    { t: "Aumento", d: "Crescita di un prezzo o di una quantità, spesso espressa in percentuale." },
    { t: "Grafico a torta (aerogramma)", d: "Cerchio diviso in spicchi proporzionali alle percentuali; il cerchio intero è il 100%." },
    { t: "Per mille (‰)", d: "Frazione con denominatore 1000." },
    { t: "Totale", d: "L'intero di riferimento, che corrisponde al 100%." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cosa significa 40%?", options: ["40 su 10", "40 su 100", "40 su 1000"], answer: 1, explain: "Per cento = su cento: 40/100." },
      { type: "num", q: "Quanto è il 25% di 120?", answer: 30, explain: "Il 25% è un quarto: 120 : 4 = 30." },
      { type: "num", q: "Quanto è il 15% di 200?", answer: 30, explain: "200 × 15 : 100 = 30." },
      { type: "mc", q: "Quale percentuale equivale a 3/4?", options: ["34%", "75%", "43%"], answer: 1, explain: "3/4 = 75/100 = 75%." },
      { type: "num", q: "Una maglietta costa 30 € con lo sconto del 20%. Quanto si paga?", answer: 24, unit: "€", explain: "Sconto: 30 × 20 : 100 = 6 €; 30 − 6 = 24 €." },
      { type: "num", q: "L'abbonamento costa 200 € e aumenta del 5%. Qual è il nuovo prezzo?", answer: 210, unit: "€", explain: "Aumento: 10 €; 200 + 10 = 210 €." },
      { type: "num", q: "In una classe di 25 alunni, 5 hanno un cane. Che percentuale è?", answer: 20, unit: "%", explain: "5/25 = 20/100 = 20%." },
      { type: "num", q: "In un grafico a torta, quanti gradi corrispondono al 25%?", answer: 90, unit: "°", explain: "360 × 25 : 100 = 90°." },
      { type: "tf", q: "0,07 e 7% indicano la stessa quantità.", answer: true, explain: "7% = 7/100 = 0,07." },
      { type: "tf", q: "Se un prezzo aumenta del 10% e poi cala del 10%, torna al prezzo iniziale.", answer: false, explain: "100 → 110 → 99: il secondo 10% si calcola su una cifra più grande." },
      { type: "order", q: "Ordina dalla quantità più piccola alla più grande.", items: ["5% di 100", "10% di 100", "1/4 di 100", "50% di 100"], explain: "5 < 10 < 25 < 50." },
      { type: "mc", q: "Dove è nato il simbolo %?", options: ["nei manoscritti dei mercanti italiani", "nelle piramidi egizie", "nei computer americani"], answer: 0, explain: "Dall'abbreviazione di «per cento» nei manoscritti commerciali italiani del Quattrocento." }
    ],
    gen: [["percent", 3]]
  }
});
