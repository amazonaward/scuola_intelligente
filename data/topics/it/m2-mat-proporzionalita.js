TOPIC('it', {
  id: "m2-mat-proporzionalita",
  title: "Proporzionalità diretta e inversa",
  intro: "Se compri il doppio dei quaderni, spendi il doppio. Se invece siete il doppio a dividere una pizza, ognuno ne mangia la metà. Nel primo caso c'è <b>proporzionalità diretta</b>, nel secondo <b>proporzionalità inversa</b>. Impariamo a riconoscerle con le <b>tabelle</b>, le <b>formule</b> e i <b>grafici</b>, e a usarle per risolvere problemi.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Grandezze costanti e variabili",
      html: `<p>Una <b>grandezza</b> è qualcosa che si può misurare. In un problema alcune grandezze restano <b>costanti</b> (il prezzo di un quaderno), altre <b>variano</b> (quanti quaderni compri, quanto spendi).</p>
<p>Quando due grandezze variabili <b>x</b> e <b>y</b> sono legate tra loro (al variare di una cambia anche l'altra), si dice che <b>y dipende da x</b>, oppure che y è <b>funzione</b> di x. I modi più semplici di dipendere sono due: la <b>proporzionalità diretta</b> e la <b>proporzionalità inversa</b>.</p>`
    },
    {
      type: "text",
      title: "La proporzionalità diretta",
      html: `<p>Due grandezze sono <b>direttamente proporzionali</b> se il loro <b>rapporto è costante</b>:</p>
<p style="text-align:center;font-size:1.3em"><b>y / x = k</b> &nbsp;&nbsp; cioè &nbsp;&nbsp; <b>y = k · x</b></p>
<p>Il numero <b>k</b> si chiama <b>costante di proporzionalità</b>.</p>
<p>Esempio: un quaderno costa <b>2 €</b>.</p>
<table>
<tr><th>Quaderni (x)</th><td>1</td><td>2</td><td>3</td><td>5</td><td>10</td></tr>
<tr><th>Spesa in € (y)</th><td>2</td><td>4</td><td>6</td><td>10</td><td>20</td></tr>
<tr><th>y / x</th><td>2</td><td>2</td><td>2</td><td>2</td><td>2</td></tr>
</table>
<p><b>Come riconoscerla</b>: se x <b>raddoppia</b>, anche y raddoppia; se x si <b>triplica</b>, y si triplica; se x si dimezza, y si dimezza. E quando x = 0, anche y = 0.</p>
<p><b>Attenzione</b>: «aumentano insieme» non basta! L'età e l'altezza di un bambino crescono insieme, ma a 10 anni non sei alto il doppio di quando ne avevi 5.</p>`
    },
    {
      type: "svg",
      title: "Il grafico della proporzionalità diretta",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f0fdf4"/>
<g stroke="#bbf7d0" stroke-width="1">
<line x1="60" y1="40" x2="60" y2="280"/><line x1="110" y1="40" x2="110" y2="280"/><line x1="160" y1="40" x2="160" y2="280"/><line x1="210" y1="40" x2="210" y2="280"/><line x1="260" y1="40" x2="260" y2="280"/><line x1="310" y1="40" x2="310" y2="280"/>
<line x1="60" y1="280" x2="330" y2="280"/><line x1="60" y1="240" x2="330" y2="240"/><line x1="60" y1="200" x2="330" y2="200"/><line x1="60" y1="160" x2="330" y2="160"/><line x1="60" y1="120" x2="330" y2="120"/><line x1="60" y1="80" x2="330" y2="80"/><line x1="60" y1="40" x2="330" y2="40"/>
</g>
<line x1="60" y1="290" x2="60" y2="30" stroke="#14532d" stroke-width="3"/>
<line x1="50" y1="280" x2="340" y2="280" stroke="#14532d" stroke-width="3"/>
<line x1="60" y1="280" x2="310" y2="80" stroke="#16a34a" stroke-width="5"/>
<circle cx="110" cy="240" r="7" fill="#dc2626"/><circle cx="160" cy="200" r="7" fill="#dc2626"/><circle cx="210" cy="160" r="7" fill="#dc2626"/><circle cx="260" cy="120" r="7" fill="#dc2626"/><circle cx="310" cy="80" r="7" fill="#dc2626"/>
<text x="110" y="302" font-size="14" text-anchor="middle">1</text><text x="160" y="302" font-size="14" text-anchor="middle">2</text><text x="210" y="302" font-size="14" text-anchor="middle">3</text><text x="260" y="302" font-size="14" text-anchor="middle">4</text><text x="310" y="302" font-size="14" text-anchor="middle">5</text>
<text x="45" y="245" font-size="14" text-anchor="end">2</text><text x="45" y="205" font-size="14" text-anchor="end">4</text><text x="45" y="165" font-size="14" text-anchor="end">6</text><text x="45" y="125" font-size="14" text-anchor="end">8</text><text x="45" y="85" font-size="14" text-anchor="end">10</text>
<text x="345" y="290" font-size="16" font-weight="bold">x</text><text x="68" y="30" font-size="16" font-weight="bold">y</text>
<text x="370" y="90" font-size="22" fill="#15803d" font-weight="bold">y = 2x</text>
<text x="370" y="130" font-size="16" fill="#14532d">• è una retta</text>
<text x="370" y="158" font-size="16" fill="#14532d">• passa per l'origine (0;0)</text>
<text x="370" y="186" font-size="16" fill="#14532d">• più k è grande,</text>
<text x="370" y="208" font-size="16" fill="#14532d">  più la retta è ripida</text>
</svg>`,
      caption: "Il grafico di una proporzionalità diretta è una semiretta (o retta) che passa per l'origine degli assi."
    },
    {
      type: "quiz",
      title: "Mini-quiz: la diretta",
      questions: [
        { type: "tf", q: "Il perimetro di un quadrato è direttamente proporzionale al lato.", answer: true, explain: "P = 4 · l: il rapporto P/l è sempre 4." },
        { type: "mc", q: "Se y = 5x e x = 7, quanto vale y?", options: ["12", "35", "1,4"], answer: 1, explain: "5 × 7 = 35." },
        { type: "tf", q: "L'area di un quadrato è direttamente proporzionale al lato.", answer: false, explain: "A = l²: se il lato raddoppia l'area quadruplica, il rapporto A/l non è costante." }
      ]
    },
    {
      type: "text",
      title: "La proporzionalità inversa",
      html: `<p>Due grandezze sono <b>inversamente proporzionali</b> se il loro <b>prodotto è costante</b>:</p>
<p style="text-align:center;font-size:1.3em"><b>x · y = k</b> &nbsp;&nbsp; cioè &nbsp;&nbsp; <b>y = k / x</b></p>
<p>Esempio: un viaggio di <b>120 km</b>. Più vai veloce, meno tempo impieghi.</p>
<table>
<tr><th>Velocità km/h (x)</th><td>20</td><td>30</td><td>40</td><td>60</td><td>120</td></tr>
<tr><th>Tempo in h (y)</th><td>6</td><td>4</td><td>3</td><td>2</td><td>1</td></tr>
<tr><th>x · y</th><td>120</td><td>120</td><td>120</td><td>120</td><td>120</td></tr>
</table>
<p><b>Come riconoscerla</b>: se x <b>raddoppia</b>, y si <b>dimezza</b>; se x si triplica, y diventa un terzo. x e y non possono mai valere 0.</p>
<p><b>Attenzione</b>: «uno aumenta e l'altro diminuisce» non basta! Se hai 10 € e spendi, i soldi rimasti diminuiscono, ma 10 − spesa non è un prodotto costante: non è proporzionalità inversa.</p>`
    },
    {
      type: "svg",
      title: "Il grafico della proporzionalità inversa",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#eff6ff"/>
<line x1="60" y1="290" x2="60" y2="20" stroke="#1e3a8a" stroke-width="3"/>
<line x1="50" y1="280" x2="360" y2="280" stroke="#1e3a8a" stroke-width="3"/>
<path d="M88 52 L100 120 L120 173 L140 200 L180 227 L220 240 L260 248 L300 253 L345 257" fill="none" stroke="#2563eb" stroke-width="5" stroke-linejoin="round"/>
<circle cx="100" cy="120" r="7" fill="#dc2626"/><circle cx="140" cy="200" r="7" fill="#dc2626"/><circle cx="220" cy="240" r="7" fill="#dc2626"/>
<rect x="60" y="120" width="40" height="160" fill="#f59e0b" opacity="0.25"/>
<rect x="60" y="240" width="160" height="40" fill="#10b981" opacity="0.25"/>
<text x="100" y="302" font-size="14" text-anchor="middle">1</text><text x="140" y="302" font-size="14" text-anchor="middle">2</text><text x="220" y="302" font-size="14" text-anchor="middle">4</text>
<text x="45" y="125" font-size="14" text-anchor="end">4</text><text x="45" y="205" font-size="14" text-anchor="end">2</text><text x="45" y="245" font-size="14" text-anchor="end">1</text>
<text x="365" y="290" font-size="16" font-weight="bold">x</text><text x="68" y="20" font-size="16" font-weight="bold">y</text>
<text x="390" y="80" font-size="22" fill="#1d4ed8" font-weight="bold">x · y = 4</text>
<text x="390" y="118" font-size="16" fill="#1e3a8a">• è un ramo di</text>
<text x="390" y="140" font-size="16" fill="#1e3a8a">  iperbole equilatera</text>
<text x="390" y="168" font-size="16" fill="#1e3a8a">• non tocca mai gli assi</text>
<text x="390" y="196" font-size="16" fill="#1e3a8a">• i rettangoli colorati</text>
<text x="390" y="218" font-size="16" fill="#1e3a8a">  hanno la stessa area (k)</text>
</svg>`,
      caption: "Il grafico è una curva chiamata iperbole equilatera: si avvicina agli assi senza mai toccarli."
    },
    {
      type: "widget",
      title: "Rettangoli con la stessa area",
      widget: "areaGrid",
      options: { w: 6, h: 2, max: 12 },
      caption: "Prova a costruire tutti i rettangoli di area 12: 1 × 12, 2 × 6, 3 × 4, 4 × 3, 6 × 2, 12 × 1. Base e altezza sono inversamente proporzionali!"
    },
    {
      type: "example",
      title: "Esempio pratico: diretta o inversa?",
      html: `<ul>
<li><b>Benzina e chilometri</b>: un'auto fa 20 km con 1 litro. Litri e km sono <b>direttamente</b> proporzionali (k = 20 km/l): con 35 litri fa 700 km.</li>
<li><b>Operai e giorni</b>: 6 operai costruiscono un muro in 10 giorni. Operai e giorni sono <b>inversamente</b> proporzionali (k = 60 «giorni-operaio»): 12 operai impiegano 60 : 12 = <b>5 giorni</b>; 4 operai 60 : 4 = <b>15 giorni</b>.</li>
<li><b>Ingredienti e persone</b>: diretta. <b>Fette di pizza e amici</b> (pizza fissa): inversa.</li>
<li><b>Età e numero di scarpe</b>: né l'una né l'altra!</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: risolvere un problema in tre passi",
      html: `<p><i>Per riempire una piscina servono 8 ore con 3 pompe uguali. Quanto tempo serve con 4 pompe?</i></p>
<ol>
<li><b>Riconosco</b>: più pompe → meno tempo; con il doppio delle pompe il tempo si dimezza → <b>inversa</b>.</li>
<li><b>Trovo k</b>: k = 3 × 8 = 24 («ore-pompa»).</li>
<li><b>Calcolo</b>: tempo = 24 : 4 = <b>6 ore</b>.</li>
</ol>
<p>Con una proporzione: nell'inversa si scrive <b>invertendo</b> un rapporto: 3 : 4 = x : 8 → x = 3 × 8 : 4 = 6. ✓</p>`
    },
    {
      type: "widget",
      title: "Diretta o inversa?",
      widget: "classify",
      options: {
        groups: ["📈 Diretta (y/x costante)", "📉 Inversa (x·y costante)", "🚫 Nessuna delle due"],
        items: [
          ["Kg di mele e prezzo pagato", 0], ["Lato del quadrato e perimetro", 0], ["Ore di lavoro e paga (a ore)", 0],
          ["Velocità e tempo per 100 km", 1], ["Numero di amici e fette di una torta a testa", 1], ["Operai e giorni per un lavoro", 1],
          ["Età e altezza", 2], ["Lato del quadrato e area", 2], ["Soldi spesi e soldi rimasti", 2]
        ]
      },
      caption: "Controlla sempre: se x raddoppia, y raddoppia (diretta), si dimezza (inversa) o fa altro?"
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La legge di Boyle",
      html: `<p>Nel <b>1662</b> il chimico irlandese <b>Robert Boyle</b> scoprì che, a temperatura costante, la <b>pressione</b> e il <b>volume</b> di un gas sono <b>inversamente proporzionali</b>: p · V = costante. Se schiacci una siringa tappata fino a metà volume, la pressione dell'aria dentro raddoppia. È il motivo per cui le orecchie «si tappano» in aereo o sott'acqua!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La legge di Hooke",
      html: `<p>Nel <b>1678</b> <b>Robert Hooke</b> pubblicò la sua legge: l'<b>allungamento</b> di una molla è <b>direttamente proporzionale</b> alla forza che la tira (finché non la deformi). È il principio del <b>dinamometro</b> e delle vecchie bilance a molla: se appendi un peso doppio, la molla si allunga il doppio. Hooke annunciò la legge prima come anagramma latino, «ceiiinosssttuv», per non farsi rubare l'idea: significa <i>ut tensio, sic vis</i>, «come l'allungamento, così la forza».</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la proporzionalità",
      intro: "Se le formule non ti convincono, prova a vedere la proporzionalità in altri modi.",
      tabs: [
        {
          label: "🧊 Gli stessi cubetti",
          html: `<p>Ecco <b>12 cubetti</b> in 3 file da 4. Muovi i cursori e prova a disporli in modo diverso <b>senza aggiungerne né toglierne</b>: 2 file da 6, 4 file da 3, 6 file da 2… Il numero di file e i cubetti per fila sono <b>inversamente proporzionali</b> (il prodotto resta 12). Se invece aggiungi file da 4 cubetti, il totale cresce in modo <b>diretto</b>: 1 fila = 4, 2 file = 8, 3 file = 12.</p>`,
          scene: "blocks",
          options: { mode: "array", a: 3, b: 4 }
        },
        {
          label: "🇳🇱 Tabella-rapporto olandese",
          html: `<p>Nelle scuole olandesi (metodo della <b>matematica realistica</b>) si usa la <b>verhoudingstabel</b>, la «tabella dei rapporti»: si scrivono le coppie in colonna e si fanno operazioni semplici <b>su entrambe le righe</b>.</p>
<table>
<tr><th>Quaderni</th><td>4</td><td>2</td><td>1</td><td>10</td></tr>
<tr><th>€</th><td>8</td><td>4</td><td>2</td><td>20</td></tr>
<tr><td></td><td></td><td>:2</td><td>:2</td><td>×10</td></tr>
</table>
<p>Nella diretta si fa la <b>stessa operazione</b> sopra e sotto. Nell'inversa si fa l'operazione <b>opposta</b>: se sopra moltiplichi per 2, sotto dividi per 2.</p>`
        },
        {
          label: "🚲 L'analogia della bici",
          html: `<p>Pedala a ritmo costante: <b>più tempo</b> pedali, <b>più strada</b> fai → diretta (la costante è la velocità).</p>
<p>Ora devi fare un percorso fisso di 30 km: <b>più veloce</b> vai, <b>meno tempo</b> ci metti → inversa (la costante è la distanza).</p>
<p>Lo stesso trio <b>spazio = velocità × tempo</b> dà una diretta o un'inversa a seconda di <b>quale grandezza tieni ferma</b>!</p>`
        },
        {
          label: "📊 I due grafici a confronto",
          html: `<p>Guarda le due forme: la diretta è una <b>retta che parte dall'origine</b>; l'inversa è una <b>curva che scende</b> e si avvicina agli assi. Se vedi una retta che non passa per l'origine, non è proporzionalità diretta!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#ffffff"/>
<line x1="40" y1="230" x2="40" y2="20" stroke="#334155" stroke-width="3"/><line x1="30" y1="220" x2="270" y2="220" stroke="#334155" stroke-width="3"/>
<line x1="40" y1="220" x2="250" y2="40" stroke="#16a34a" stroke-width="5"/>
<text x="150" y="250" font-size="17" text-anchor="middle" fill="#15803d" font-weight="bold">DIRETTA: y = kx</text>
<line x1="330" y1="230" x2="330" y2="20" stroke="#334155" stroke-width="3"/><line x1="320" y1="220" x2="570" y2="220" stroke="#334155" stroke-width="3"/>
<path d="M345 30 Q360 160 400 180 Q460 205 560 210" fill="none" stroke="#2563eb" stroke-width="5"/>
<text x="450" y="250" font-size="17" text-anchor="middle" fill="#1d4ed8" font-weight="bold">INVERSA: y = k/x</text>
</svg>`
        },
        {
          "label": "🇸🇬 Il modello a barre (Singapore)",
          "html": "<p>A <b>Singapore</b>, uno dei Paesi con i risultati migliori in matematica, i problemi sui rapporti si risolvono disegnando <b>barre fatte di blocchi tutti uguali</b> (il <b>bar model</b>). Il rapporto 3 : 2 vuol dire semplicemente «3 blocchi contro 2 blocchi».</p><p><b>Problema 1</b>: in un dolce farina e zucchero sono nel rapporto <b>3 : 2</b>. Se uso 450 g di farina, quanto zucchero mi serve?</p><ol><li>Disegna la farina con <b>3 blocchi</b> e lo zucchero con <b>2 blocchi</b> della stessa grandezza.</li><li>3 blocchi = 450 g → 1 blocco = 450 : 3 = <b>150 g</b>.</li><li>Zucchero = 2 blocchi = <b>300 g</b>.</li></ol><p><b>Problema 2</b>: Anna e Luca si dividono 45 € nel rapporto <b>2 : 3</b>.</p><ol><li>In tutto ci sono 2 + 3 = <b>5 blocchi</b> = 45 €.</li><li>1 blocco = 45 : 5 = <b>9 €</b>.</li><li>Anna = 2 × 9 = <b>18 €</b>, Luca = 3 × 9 = <b>27 €</b>. Controllo: 18 + 27 = 45 ✔</li></ol><p>Il segreto della proporzionalità diretta è proprio questo: <b>i blocchi sono tutti uguali</b>. Se raddoppi la farina, raddoppia il blocco e quindi raddoppia anche lo zucchero.</p>",
          "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"280\" fill=\"#f8fafc\"/><text x=\"20\" y=\"40\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Farina</text><rect x=\"110\" y=\"18\" width=\"70\" height=\"36\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/><rect x=\"180\" y=\"18\" width=\"70\" height=\"36\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/><rect x=\"250\" y=\"18\" width=\"70\" height=\"36\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/><text x=\"20\" y=\"98\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Zucchero</text><rect x=\"110\" y=\"76\" width=\"70\" height=\"36\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><rect x=\"180\" y=\"76\" width=\"70\" height=\"36\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><path d=\"M110,10 Q215,-6 320,10\" fill=\"none\" stroke=\"#92400e\" stroke-width=\"2\"/><text x=\"330\" y=\"42\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#92400e\" font-weight=\"bold\">= 450 g → 1 blocco = 150 g</text><text x=\"260\" y=\"100\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e3a8a\" font-weight=\"bold\">→ zucchero = 2 × 150 = 300 g</text><line x1=\"20\" y1=\"140\" x2=\"580\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"2\"/><text x=\"20\" y=\"190\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Anna</text><rect x=\"110\" y=\"168\" width=\"50\" height=\"36\" fill=\"#bbf7d0\" stroke=\"#166534\" stroke-width=\"2\"/><rect x=\"160\" y=\"168\" width=\"50\" height=\"36\" fill=\"#bbf7d0\" stroke=\"#166534\" stroke-width=\"2\"/><text x=\"20\" y=\"248\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Luca</text><rect x=\"110\" y=\"226\" width=\"50\" height=\"36\" fill=\"#fbcfe8\" stroke=\"#9d174d\" stroke-width=\"2\"/><rect x=\"160\" y=\"226\" width=\"50\" height=\"36\" fill=\"#fbcfe8\" stroke=\"#9d174d\" stroke-width=\"2\"/><rect x=\"210\" y=\"226\" width=\"50\" height=\"36\" fill=\"#fbcfe8\" stroke=\"#9d174d\" stroke-width=\"2\"/><path d=\"M268,168 Q290,215 268,262\" fill=\"none\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"290\" y=\"205\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">5 blocchi = 45 € → 1 blocco = 9 €</text><text x=\"290\" y=\"232\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">Anna 2 × 9 = 18 €   Luca 3 × 9 = 27 €</text></svg>"
        },
        {
          "label": "🇫🇷 Il «produit en croix» francese",
          "html": "<p>Nelle scuole medie <b>francesi</b> (il <i>collège</i>) si usa moltissimo il <b>tableau de proportionnalité</b> (tabella di proporzionalità) e, per trovare il numero che manca, il <b>produit en croix</b>, il «prodotto in croce».</p><p><b>Esempio</b>: 4 quaderni costano 6 €. Quanto costano 10 quaderni?</p><ol><li>Scrivi la tabella: in alto i quaderni (4 e 10), in basso gli euro (6 e ?).</li><li>Moltiplica i due numeri <b>in diagonale</b> che conosci: 10 × 6 = 60.</li><li>Dividi per il numero rimasto: 60 : 4 = <b>15 €</b>.</li></ol><p><b>Perché funziona?</b> La tabella è una proporzione: 4 : 6 = 10 : ?. Per la <b>proprietà fondamentale delle proporzioni</b>, il prodotto dei medi è uguale al prodotto degli estremi: 4 × ? = 6 × 10.</p><p>⚠️ <b>Attenzione</b>: il prodotto in croce vale <b>solo</b> per la proporzionalità <b>diretta</b>. Nell'inversa si moltiplicano i numeri della <b>stessa colonna</b>: se 3 operai impiegano 8 giorni, 6 operai impiegano 3 × 8 : 6 = <b>4 giorni</b> (il prodotto 24 resta costante).</p>",
          "svg": "<svg viewBox=\"0 0 600 250\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"250\" fill=\"#f8fafc\"/><rect x=\"120\" y=\"60\" width=\"120\" height=\"60\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"2\"/><rect x=\"240\" y=\"60\" width=\"120\" height=\"60\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"2\"/><rect x=\"120\" y=\"120\" width=\"120\" height=\"60\" fill=\"#fef9c3\" stroke=\"#a16207\" stroke-width=\"2\"/><rect x=\"240\" y=\"120\" width=\"120\" height=\"60\" fill=\"#fef9c3\" stroke=\"#a16207\" stroke-width=\"2\"/><rect x=\"20\" y=\"60\" width=\"100\" height=\"60\" fill=\"#f1f5f9\" stroke=\"#64748b\" stroke-width=\"2\"/><rect x=\"20\" y=\"120\" width=\"100\" height=\"60\" fill=\"#f1f5f9\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"70\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">quaderni</text><text x=\"70\" y=\"156\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">euro</text><text x=\"180\" y=\"100\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">4</text><text x=\"300\" y=\"100\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">10</text><text x=\"180\" y=\"160\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">6</text><text x=\"300\" y=\"160\" font-size=\"30\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">?</text><line x1=\"205\" y1=\"92\" x2=\"280\" y2=\"145\" stroke=\"#dc2626\" stroke-width=\"3\"/><line x1=\"205\" y1=\"150\" x2=\"280\" y2=\"92\" stroke=\"#2563eb\" stroke-width=\"3\" stroke-dasharray=\"6 4\"/><text x=\"390\" y=\"90\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">? = 10 × 6 : 4</text><text x=\"390\" y=\"125\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">? = 60 : 4 = 15 €</text><text x=\"390\" y=\"170\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">moltiplica in croce,</text><text x=\"390\" y=\"192\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">dividi per il numero</text><text x=\"390\" y=\"214\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">che resta</text><text x=\"240\" y=\"230\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#475569\" text-anchor=\"middle\" font-weight=\"bold\">Funziona solo per la proporzionalità DIRETTA!</text></svg>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della proporzionalità",
      nodes: [
        { id: "grand", label: "Grandezze variabili", x: 50, y: 6, color: "#334155", html: "Quantità che possono cambiare: x e y.", why: "L'idea che una grandezza dipenda da un'altra (funzione) fu sviluppata nel Seicento da <b>Galileo</b>, <b>Cartesio</b> e poi <b>Leibniz</b>, che usò per primo la parola «funzione» (1673)." },
        { id: "dir", label: "Proporzionalità diretta", x: 22, y: 30, color: "#16a34a", html: "y / x = k → y = kx.", why: "Deriva dalla teoria delle proporzioni: se y₁ : x₁ = y₂ : x₂ per tutte le coppie, il rapporto è sempre lo stesso numero k." },
        { id: "inv", label: "Proporzionalità inversa", x: 78, y: 30, color: "#2563eb", html: "x · y = k → y = k / x.", why: "Equivale a dire che y è direttamente proporzionale a 1/x. Nei trattati d'abaco medievali era la «regola del tre inversa»." },
        { id: "k", label: "Costante k", x: 50, y: 48, color: "#ca8a04", html: "Il numero che non cambia: rapporto o prodotto.", why: "Spesso ha un significato fisico: il prezzo unitario, la velocità, la distanza fissa. Trovare la costante significa capire la «regola» del fenomeno." },
        { id: "retta", label: "Retta per l'origine", x: 18, y: 66, color: "#22c55e", html: "Grafico della diretta.", why: "Il piano cartesiano fu ideato da <b>René Descartes</b> (Cartesio) nella <i>Géométrie</i> del 1637: unì algebra e geometria. Ogni punto (x; kx) sta sulla stessa retta perché la «pendenza» y/x è sempre k." },
        { id: "iperb", label: "Iperbole equilatera", x: 82, y: 66, color: "#3b82f6", html: "Grafico dell'inversa.", why: "Il nome viene da <b>Apollonio di Perga</b> (III secolo a.C.), che studiò le coniche: ellisse, parabola, iperbole. Tutti i rettangoli tra l'origine e un punto della curva hanno la stessa area k." },
        { id: "tab", label: "Tabelle", x: 50, y: 72, color: "#9333ea", html: "Coppie di valori: si verifica il rapporto o il prodotto.", why: "Le tabelle sono il modo più antico per studiare una relazione: i Babilonesi avevano tavole di reciproci (1/x) per fare le divisioni, circa 4000 anni fa." },
        { id: "fisica", label: "Leggi della natura", x: 50, y: 92, color: "#dc2626", html: "Hooke (diretta), Boyle (inversa)…", why: "Molte leggi scientifiche scoperte nel Seicento con il <b>metodo sperimentale</b> sono proporzionalità: misurando e mettendo i dati in tabella e in grafico gli scienziati riconoscevano la relazione." }
      ],
      edges: [
        ["grand", "dir", "possono essere"],
        ["grand", "inv", "possono essere"],
        ["dir", "k", "rapporto ="],
        ["inv", "k", "prodotto ="],
        ["dir", "retta", "grafico"],
        ["inv", "iperb", "grafico"],
        ["k", "tab", "si verifica con"],
        ["tab", "fisica", "rivela"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: l'inversa e i problemi",
      questions: [
        { type: "num", q: "x · y = 36. Se x = 9, quanto vale y?", answer: 4, explain: "y = 36 : 9 = 4." },
        { type: "num", q: "5 operai finiscono un lavoro in 12 giorni. Quanti giorni servono a 10 operai?", answer: 6, unit: "giorni", explain: "Inversa: k = 60 → 60 : 10 = 6." },
        { type: "mc", q: "Il grafico della proporzionalità inversa è…", options: ["una retta per l'origine", "un'iperbole equilatera", "una parabola"], answer: 1, explain: "Iperbole equilatera, che non tocca gli assi." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Diretta</b>: y/x = k, y = kx; x raddoppia → y raddoppia; grafico: <b>retta per l'origine</b>.</li>
<li><b>Inversa</b>: x·y = k, y = k/x; x raddoppia → y si dimezza; grafico: <b>iperbole equilatera</b>.</li>
<li>Per decidere, verifica il <b>rapporto</b> o il <b>prodotto</b> in una tabella: non basta «crescono insieme» o «uno cresce e l'altro cala».</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Grandezze direttamente proporzionali", d: "Grandezze il cui rapporto è costante (y = kx)." },
    { t: "Grandezze inversamente proporzionali", d: "Grandezze il cui prodotto è costante (y = k/x)." },
    { t: "Costante di proporzionalità", d: "Il valore k che resta uguale per tutte le coppie." },
    { t: "Funzione", d: "Legge che associa a ogni valore di x un solo valore di y." },
    { t: "Piano cartesiano", d: "Piano con due assi perpendicolari (x e y) per rappresentare coppie di numeri." },
    { t: "Origine", d: "Il punto (0; 0) in cui si incontrano gli assi." },
    { t: "Iperbole equilatera", d: "Curva grafico della proporzionalità inversa." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "In una proporzionalità diretta, che cosa resta costante?", options: ["La somma x + y", "Il rapporto y / x", "Il prodotto x · y"], answer: 1, explain: "y/x = k." },
      { type: "mc", q: "In una proporzionalità inversa, che cosa resta costante?", options: ["Il prodotto x · y", "La differenza y − x", "Il rapporto y / x"], answer: 0, explain: "x · y = k." },
      { type: "num", q: "y = 3x. Quanto vale y se x = 12?", answer: 36, explain: "3 × 12 = 36." },
      { type: "num", q: "3 kg di pane costano 7,50 €. Quanto costano 5 kg (in €)?", answer: 12.5, tol: 0.01, unit: "€", explain: "Diretta: 7,50 : 3 = 2,50 €/kg → 2,50 × 5 = 12,50 €." },
      { type: "num", q: "A 60 km/h un viaggio dura 3 ore. Quante ore dura a 90 km/h?", answer: 2, unit: "h", explain: "Inversa: 60 × 3 = 180 km → 180 : 90 = 2 h." },
      { type: "tf", q: "Il grafico della proporzionalità diretta passa sempre per l'origine.", answer: true, explain: "Se x = 0, y = k · 0 = 0." },
      { type: "tf", q: "Se una grandezza aumenta e l'altra diminuisce, sono sempre inversamente proporzionali.", answer: false, explain: "Serve che il prodotto sia costante: es. soldi spesi/rimasti non lo è." },
      { type: "mc", q: "Il numero di biglietti e il costo totale (biglietto a prezzo fisso) sono…", options: ["direttamente proporzionali", "inversamente proporzionali", "non proporzionali"], answer: 0, explain: "Il costo totale / biglietti = prezzo fisso." },
      { type: "num", q: "Una torta si divide in parti uguali: con 4 amici ognuno riceve 150 g. Quanti grammi riceve ognuno con 6 amici?", answer: 100, unit: "g", explain: "Inversa: 4 × 150 = 600 g → 600 : 6 = 100 g." },
      { type: "mc", q: "Quale tabella mostra una proporzionalità inversa?", options: ["x: 1, 2, 4 — y: 3, 6, 12", "x: 1, 2, 4 — y: 8, 4, 2", "x: 1, 2, 4 — y: 5, 6, 8"], answer: 1, explain: "1·8 = 2·4 = 4·2 = 8: prodotto costante." },
      { type: "order", q: "Ordina i passi per risolvere un problema di proporzionalità.", items: ["Capisco se è diretta o inversa", "Calcolo la costante k", "Calcolo il valore richiesto", "Controllo che il risultato abbia senso"], explain: "Riconoscere, trovare k, calcolare, verificare." }
    ],
    gen: [["proportion", 2]]
  }
});
