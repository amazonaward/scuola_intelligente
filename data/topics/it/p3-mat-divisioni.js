TOPIC('it', {
  id: "p3-mat-divisioni",
  title: "Le divisioni",
  intro: "Dividere vuol dire <b>fare parti uguali</b> 🍬 oppure <b>scoprire quante volte</b> un numero sta dentro un altro. Impariamo i nomi dei termini, la divisione in colonna, il <b>resto</b> e la <b>prova</b> per controllare che il risultato sia giusto.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Due modi di dividere",
      html: `<p>La divisione risponde a <b>due domande diverse</b>:</p>
<ul>
<li>🍬 <b>Ripartizione</b> (fare parti uguali): <i>"Ho 12 caramelle e 3 amici. Quante caramelle a ciascuno?"</i> → 12 : 3 = <b>4</b> caramelle a testa.</li>
<li>📦 <b>Contenenza</b> (quante volte ci sta): <i>"Ho 12 uova e scatole da 3. Quante scatole riempio?"</i> → 12 : 3 = <b>4</b> scatole.</li>
</ul>
<p>Il calcolo è lo stesso, ma la domanda cambia! Il segno della divisione è <b>:</b> (due punti). In altri Paesi si usa anche <b>÷</b> oppure <b>/</b>.</p>`
    },
    {
      type: "text",
      title: "I nomi dei termini",
      html: `<p>In <b>24 : 6 = 4</b>:</p>
<ul>
<li><b>24</b> è il <b>dividendo</b>: il numero che viene diviso;</li>
<li><b>6</b> è il <b>divisore</b>: il numero per cui si divide;</li>
<li><b>4</b> è il <b>quoziente</b>: il risultato.</li>
</ul>
<p>La divisione è l'<b>operazione inversa della moltiplicazione</b>: 24 : 6 = 4 perché <b>4 × 6 = 24</b>. Per questo conoscere bene le tabelline aiuta tantissimo! 🧠</p>`
    },
    {
      type: "svg",
      title: "12 caramelle per 3 bambini",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fdf4ff"/>
<text x="300" y="34" font-size="22" font-weight="bold" fill="#86198f" text-anchor="middle">12 : 3 = 4</text>
<g>
<rect x="30" y="60" width="160" height="150" rx="16" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<rect x="220" y="60" width="160" height="150" rx="16" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<rect x="410" y="60" width="160" height="150" rx="16" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
</g>
<g fill="#ef4444" stroke="#7f1d1d" stroke-width="2">
<circle cx="80" cy="110" r="18"/><circle cx="140" cy="110" r="18"/><circle cx="80" cy="165" r="18"/><circle cx="140" cy="165" r="18"/>
<circle cx="270" cy="110" r="18"/><circle cx="330" cy="110" r="18"/><circle cx="270" cy="165" r="18"/><circle cx="330" cy="165" r="18"/>
<circle cx="460" cy="110" r="18"/><circle cx="520" cy="110" r="18"/><circle cx="460" cy="165" r="18"/><circle cx="520" cy="165" r="18"/>
</g>
<text x="110" y="245" font-size="20" fill="#92400e" text-anchor="middle" font-weight="bold">Anna: 4</text>
<text x="300" y="245" font-size="20" fill="#166534" text-anchor="middle" font-weight="bold">Luca: 4</text>
<text x="490" y="245" font-size="20" fill="#1e40af" text-anchor="middle" font-weight="bold">Sara: 4</text>
<text x="300" y="285" font-size="18" fill="#1f2937" text-anchor="middle">dividendo 12 · divisore 3 · quoziente 4</text>
</svg>`,
      caption: "Ripartizione: le 12 caramelle sono divise in 3 gruppi uguali da 4."
    },
    {
      type: "text",
      title: "Quando avanza qualcosa: il resto",
      html: `<p>Non sempre la divisione è <b>esatta</b>. Se ho <b>14 caramelle</b> per <b>3 amici</b>:</p>
<ul>
<li>ne do 4 a ciascuno (4 × 3 = 12);</li>
<li>me ne <b>avanzano 2</b>: non bastano per darne un'altra a tutti.</li>
</ul>
<p>Scriviamo: <b>14 : 3 = 4 resto 2</b> (si può scrivere anche <b>4 r 2</b>).</p>
<p>⚠️ Il <b>resto</b> deve essere sempre <b>più piccolo del divisore</b>. Se è uguale o più grande, vuol dire che potevi dare ancora una caramella a tutti!</p>`
    },
    {
      type: "widget",
      title: "Prova tu a fare parti uguali",
      widget: "counter",
      options: { emoji: "🍬", max: 30 },
      caption: "Metti 14 caramelle, poi prova a dividerle in gruppi da 3: quanti gruppi riesci a fare? Quante ne avanzano?"
    },
    {
      type: "quiz",
      title: "Mini-quiz: i termini e il resto",
      questions: [
        { type: "mc", q: "In 35 : 5 = 7, il numero 35 si chiama…", options: ["divisore", "dividendo", "quoziente"], answer: 1, explain: "Il dividendo è il numero che viene diviso: 35." },
        { type: "num", q: "17 : 5 = 3 con il resto di…", answer: 2, explain: "5 × 3 = 15; 17 − 15 = 2." },
        { type: "tf", q: "In una divisione per 4 il resto può essere 5.", answer: false, explain: "Il resto deve essere minore del divisore: con il divisore 4 il resto può essere solo 0, 1, 2 o 3." }
      ]
    },
    {
      type: "text",
      title: "La divisione in colonna, passo passo",
      html: `<p>Calcoliamo <b>85 : 3</b>. Si comincia <b>da sinistra</b>, cioè dalle cifre più grandi!</p>
<ol>
<li>Guardo le <b>decine</b>: 8 : 3 = <b>2</b> (perché 2 × 3 = 6). Scrivo 2 nel quoziente.</li>
<li>Moltiplico e sottraggo: 8 − 6 = <b>2</b> decine avanzano.</li>
<li><b>Abbasso</b> le unità: accanto al 2 scrivo il 5 → ottengo <b>25</b>.</li>
<li>Divido: 25 : 3 = <b>8</b> (perché 8 × 3 = 24). Scrivo 8 nel quoziente.</li>
<li>Sottraggo: 25 − 24 = <b>1</b>. Non ci sono altre cifre da abbassare: 1 è il <b>resto</b>.</li>
</ol>
<p>Risultato: <b>85 : 3 = 28 resto 1</b>.</p>`
    },
    {
      type: "svg",
      title: "85 : 3 in colonna (metodo italiano)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<text x="90" y="70" font-size="42" font-family="monospace" fill="#1d4ed8" font-weight="bold">8</text>
<text x="125" y="70" font-size="42" font-family="monospace" fill="#1d4ed8" font-weight="bold">5</text>
<line x1="170" y1="30" x2="170" y2="260" stroke="#1f2937" stroke-width="4"/>
<text x="190" y="70" font-size="42" font-family="monospace" fill="#b45309" font-weight="bold">3</text>
<line x1="170" y1="85" x2="290" y2="85" stroke="#1f2937" stroke-width="4"/>
<text x="190" y="128" font-size="42" font-family="monospace" fill="#15803d" font-weight="bold">28</text>
<text x="70" y="120" font-size="34" font-family="monospace" fill="#6b7280">-6</text>
<line x1="70" y1="132" x2="115" y2="132" stroke="#6b7280" stroke-width="3"/>
<text x="90" y="170" font-size="38" font-family="monospace" fill="#1f2937">2</text>
<text x="125" y="170" font-size="38" font-family="monospace" fill="#dc2626" font-weight="bold">5</text>
<path d="M140 80 Q155 115 140 140" stroke="#dc2626" stroke-width="3" fill="none"/>
<text x="70" y="215" font-size="34" font-family="monospace" fill="#6b7280">-24</text>
<line x1="70" y1="227" x2="160" y2="227" stroke="#6b7280" stroke-width="3"/>
<text x="125" y="265" font-size="38" font-family="monospace" fill="#7c3aed" font-weight="bold">1</text>
<text x="320" y="70" font-size="18" fill="#1d4ed8">dividendo</text>
<text x="320" y="100" font-size="18" fill="#b45309">divisore (in alto a destra)</text>
<text x="320" y="130" font-size="18" fill="#15803d">quoziente (sotto il divisore)</text>
<text x="320" y="170" font-size="18" fill="#dc2626">abbasso il 5 → 25</text>
<text x="320" y="265" font-size="18" fill="#7c3aed">resto: 1 (minore di 3 ✔)</text>
</svg>`,
      caption: "In Italia il divisore si scrive a destra, separato da una linea; il quoziente va sotto il divisore."
    },
    {
      type: "text",
      title: "La prova della divisione",
      html: `<p>Per controllare se una divisione è giusta si usa la <b>moltiplicazione</b>:</p>
<p style="font-size:1.2em"><b>quoziente × divisore + resto = dividendo</b></p>
<p>Prova di 85 : 3 = 28 r 1 → 28 × 3 = 84; 84 + 1 = <b>85</b> ✔ È giusta!</p>
<p>Se il resto è 0 basta fare quoziente × divisore: 24 : 6 = 4 → 4 × 6 = 24 ✔</p>`
    },
    {
      type: "remember",
      title: "Casi speciali",
      html: `<ul>
<li>Un numero diviso <b>1</b> resta uguale: 9 : 1 = 9.</li>
<li>Un numero diviso <b>se stesso</b> fa 1: 7 : 7 = 1.</li>
<li><b>0</b> diviso un numero fa 0: 0 : 5 = 0 (niente caramelle da dividere!).</li>
<li>🚫 <b>Non si può dividere per 0</b>: dividere 5 caramelle tra 0 bambini non ha senso!</li>
<li>Dividere per <b>10</b>: se il numero finisce con 0, si toglie lo zero: 70 : 10 = 7; per <b>100</b> si tolgono due zeri: 300 : 100 = 3.</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: la gita in pullman",
      html: `<p>Alla gita partecipano <b>58 bambini</b>. Ogni pulmino ha <b>9 posti</b>. Quanti pulmini servono?</p>
<ul>
<li>58 : 9 = <b>6 resto 4</b> (6 × 9 = 54; 58 − 54 = 4).</li>
<li>6 pulmini sono pieni, ma <b>4 bambini</b> resterebbero a casa! 😮</li>
<li>Quindi servono <b>7 pulmini</b>.</li>
</ul>
<p>👉 Nei problemi bisogna sempre pensare a <b>cosa significa il resto</b>!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: le figurine nell'album",
      html: `<p>Giulia ha <b>96 figurine</b> e vuole metterle in un album con <b>4 figurine per pagina</b>. Quante pagine riempie?</p>
<ol>
<li>9 decine : 4 = 2 (2 × 4 = 8), avanza 1 decina.</li>
<li>Abbasso il 6: 16 : 4 = 4.</li>
<li>Risultato: <b>96 : 4 = 24 pagine</b>, resto 0.</li>
</ol>
<p>Prova: 24 × 4 = 96 ✔</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Il segno <b>÷</b> si chiama <b>obelo</b> e fu usato per la divisione dallo svizzero <b>Johann Rahn</b> nel 1659. I due punti <b>:</b> li rese famosi il matematico tedesco <b>Gottfried Leibniz</b> intorno al 1684. Ecco perché in Italia usiamo <b>:</b> e in Inghilterra o negli USA spesso <b>÷</b>!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Perché un'ora ha <b>60 minuti</b>? Perché gli antichi <b>Babilonesi</b> amavano il 60: si può dividere esattamente per 2, 3, 4, 5, 6, 10, 12, 15, 20 e 30! È facilissimo dividere un'ora in mezz'ore, quarti d'ora, dieci minuti… 🕐</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la divisione",
      intro: "La divisione in colonna non ti convince? Ecco altre strade per arrivare allo stesso risultato: scegli quella che ti piace di più!",
      tabs: [
        {
          label: "🧊 Cubetti 3D",
          html: `<p>Ecco <b>24 cubetti</b> sistemati in un rettangolo di <b>4 file da 6</b>. Guarda:</p>
<ul>
<li>24 : 4 = <b>6</b> (ogni fila ha 6 cubetti);</li>
<li>24 : 6 = <b>4</b> (ci sono 4 file).</li>
</ul>
<p>La divisione è la moltiplicazione "al contrario": conosci il totale e una delle due misure, cerchi l'altra. Cambia i cursori e inventa nuove divisioni!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 4, b: 6 }
        },
        {
          label: "🐸 Salti all'indietro",
          html: `<p>Una ranocchia parte da <b>20</b> e salta all'indietro di <b>4</b> alla volta: 20 → 16 → 12 → 8 → 4 → 0.</p>
<p>Ha fatto <b>5 salti</b>: quindi <b>20 : 4 = 5</b>. È la <b>contenenza</b>: quante volte il 4 sta dentro il 20? Prova sulla retta!</p>`,
          widget: "numberLine",
          options: { min: 0, max: 20, step: 1, marks: [0, 4, 8, 12, 16, 20] }
        },
        {
          label: "🇬🇧 Metodo a pezzi (chunking)",
          html: `<p>Nelle scuole inglesi molti bambini dividono <b>togliendo pezzi grandi</b> che conoscono bene. Esempio: <b>85 : 3</b></p>
<ul>
<li>tolgo 10 volte 3 = 30 → resta 55;</li>
<li>tolgo altre 10 volte 3 = 30 → resta 25;</li>
<li>tolgo 8 volte 3 = 24 → resta <b>1</b>.</li>
</ul>
<p>Quante volte ho tolto il 3? 10 + 10 + 8 = <b>28</b>, resto <b>1</b>. Stesso risultato del metodo in colonna! 🎉</p>`
        },
        {
          label: "🇺🇸 Il metodo \"a casetta\"",
          html: `<p>Negli Stati Uniti e in Inghilterra la divisione si scrive in un altro modo: il divisore sta <b>a sinistra</b>, il dividendo dentro una specie di <b>casetta</b> e il quoziente <b>sopra il tetto</b>. I passaggi però sono identici ai nostri: dividi, moltiplica, sottrai, abbassa!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#eff6ff"/>
<text x="150" y="60" font-size="40" font-family="monospace" fill="#15803d" font-weight="bold">28 r1</text>
<path d="M120 75 Q135 110 120 150 M120 75 L320 75" stroke="#1f2937" stroke-width="4" fill="none"/>
<text x="70" y="125" font-size="40" font-family="monospace" fill="#b45309" font-weight="bold">3</text>
<text x="150" y="125" font-size="40" font-family="monospace" fill="#1d4ed8" font-weight="bold">85</text>
<text x="360" y="60" font-size="18" fill="#15803d">quoziente sul tetto</text>
<text x="360" y="110" font-size="18" fill="#1d4ed8">dividendo nella casetta</text>
<text x="360" y="150" font-size="18" fill="#b45309">divisore fuori, a sinistra</text>
<text x="300" y="230" font-size="20" fill="#1f2937" text-anchor="middle">Stessi passaggi: dividi · moltiplica · sottrai · abbassa</text>
</svg>`
        },
        {
          label: "🍕 Analogia della pizzeria",
          html: `<p>Pensa a un pizzaiolo con <b>26 fette</b> da mettere nei piatti, <b>4 fette per piatto</b>.</p>
<p>Riempie un piatto, poi un altro, poi un altro… alla fine ha <b>6 piatti pieni</b> e restano <b>2 fette</b> sul bancone: troppo poche per un piatto intero. Le 2 fette sono il <b>resto</b>!</p>
<p>26 : 4 = 6 r 2 → prova: 6 × 4 + 2 = 26 ✔</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della divisione: tocca un nodo e scopri il perché",
      nodes: [
        { id: "div", label: "Divisione", x: 50, y: 8, color: "#7c3aed", html: "Operazione che serve a fare parti uguali o a scoprire quante volte un numero sta in un altro.", why: "La parola viene dal latino <i>dividere</i>, \"separare\". Le persone dividono da sempre: raccolti, terreni, pane. Gli antichi Egizi dividevano con i raddoppi, come racconta il papiro di Rhind (circa 1650 a.C.)." },
        { id: "rip", label: "Ripartizione", x: 18, y: 30, color: "#f59e0b", html: "Dividere in parti uguali: quanto tocca a ciascuno?", why: "È il significato più antico: dare a ognuno la stessa quantità, in modo giusto." },
        { id: "cont", label: "Contenenza", x: 82, y: 30, color: "#0ea5e9", html: "Quante volte un numero sta in un altro: quanti gruppi riesco a fare?", why: "Equivale a sottrarre sempre lo stesso numero finché si può: 20 − 4 − 4 − 4 − 4 − 4 = 0 → 5 volte." },
        { id: "termini", label: "Dividendo, divisore, quoziente", x: 50, y: 45, color: "#16a34a", html: "Dividendo : divisore = quoziente.", why: "\"Quoziente\" viene dal latino <i>quotiens</i>, che vuol dire \"quante volte\": proprio la domanda della contenenza!" },
        { id: "molt", label: "Inversa della moltiplicazione", x: 18, y: 65, color: "#ef4444", html: "24 : 6 = 4 perché 4 × 6 = 24.", why: "Moltiplicare vuol dire mettere insieme gruppi uguali; dividere vuol dire separarli di nuovo. Per questo le tabelline servono a dividere." },
        { id: "resto", label: "Resto", x: 82, y: 65, color: "#ec4899", html: "Ciò che avanza quando la divisione non è esatta. È sempre minore del divisore.", why: "Se il resto fosse uguale o maggiore del divisore, si potrebbe fare ancora un gruppo: vorrebbe dire che il quoziente è troppo piccolo." },
        { id: "prova", label: "La prova", x: 50, y: 82, color: "#14b8a6", html: "quoziente × divisore + resto = dividendo.", why: "Se rimetti insieme i gruppi e aggiungi quello che era avanzato, devi ritrovare tutto quello che avevi all'inizio: niente si crea e niente si perde." },
        { id: "zero", label: "Mai diviso 0", x: 18, y: 92, color: "#64748b", html: "Dividere per zero non è possibile.", why: "Nessun numero moltiplicato per 0 dà 5: quindi 5 : 0 non ha risposta. Già i matematici indiani come Brahmagupta (VII secolo) si chiedevano cosa succedesse dividendo per zero." }
      ],
      edges: [
        ["div", "rip", "può voler dire"],
        ["div", "cont", "può voler dire"],
        ["div", "termini", "si scrive con"],
        ["termini", "molt", "si controlla con"],
        ["termini", "resto", "a volte c'è"],
        ["resto", "prova", "entra nella"],
        ["molt", "prova", "serve per la"],
        ["molt", "zero", "spiega perché"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: colonna e prova",
      questions: [
        { type: "num", q: "Quanto fa 72 : 4?", answer: 18, explain: "7 : 4 = 1 resto 3; abbasso il 2 → 32 : 4 = 8. Quoziente 18." },
        { type: "mc", q: "Qual è la prova di 50 : 7 = 7 resto 1?", options: ["7 × 7 + 1 = 50", "7 × 7 − 1 = 50", "50 × 7 + 1"], answer: 0, explain: "Quoziente × divisore + resto: 49 + 1 = 50 ✔" },
        { type: "num", q: "Ci sono 30 bambini e 4 per tavolo. Quanti tavoli servono perché tutti siano seduti?", answer: 8, explain: "30 : 4 = 7 resto 2: 7 tavoli pieni e 2 bambini in più, quindi serve un ottavo tavolo." }
      ]
    }
  ],
  glossary: [
    { t: "Divisione", d: "Operazione per fare parti uguali o per sapere quante volte un numero sta in un altro." },
    { t: "Dividendo", d: "Il numero che viene diviso (il primo)." },
    { t: "Divisore", d: "Il numero per cui si divide (il secondo)." },
    { t: "Quoziente", d: "Il risultato della divisione." },
    { t: "Resto", d: "Quello che avanza quando la divisione non è esatta; è sempre minore del divisore." },
    { t: "Divisione esatta", d: "Divisione con resto 0." },
    { t: "Ripartizione", d: "Divisione che serve a fare parti uguali." },
    { t: "Contenenza", d: "Divisione che serve a sapere quante volte un numero sta in un altro." },
    { t: "Prova", d: "Controllo del risultato: quoziente × divisore + resto = dividendo." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Quanto fa 45 : 5?", answer: 9, explain: "9 × 5 = 45." },
      { type: "mc", q: "In 63 : 9 = 7, il 9 è…", options: ["il dividendo", "il divisore", "il quoziente"], answer: 1, explain: "Il divisore è il numero per cui si divide." },
      { type: "num", q: "29 : 6 = 4 con il resto di…", answer: 5, explain: "6 × 4 = 24; 29 − 24 = 5 (minore di 6 ✔)." },
      { type: "tf", q: "Si può dividere un numero per 0.", answer: false, explain: "Non esiste un numero che moltiplicato per 0 dia, per esempio, 8: dividere per 0 è impossibile." },
      { type: "num", q: "Quanto fa 84 : 3?", answer: 28, explain: "8 : 3 = 2 r 2; abbasso il 4 → 24 : 3 = 8. Quoziente 28." },
      { type: "mc", q: "\"Ho 40 € e ogni libro costa 8 €. Quanti libri compro?\" È una divisione di…", options: ["ripartizione", "contenenza", "nessuna delle due"], answer: 1, explain: "Cerco quante volte 8 sta in 40: contenenza. 40 : 8 = 5 libri." },
      { type: "text", q: "Come si chiama il risultato della divisione?", answer: ["quoziente", "il quoziente"], explain: "Il risultato si chiama quoziente." },
      { type: "tf", q: "Il resto deve essere sempre minore del divisore.", answer: true, explain: "Altrimenti si potrebbe fare un altro gruppo." },
      { type: "num", q: "Quanto fa 600 : 100?", answer: 6, explain: "Dividendo per 100 si tolgono due zeri: 6." },
      { type: "order", q: "Metti in ordine i passaggi della divisione in colonna.", items: ["Divido la prima cifra", "Moltiplico il quoziente per il divisore", "Sottraggo", "Abbasso la cifra successiva"], explain: "Dividi, moltiplica, sottrai, abbassa… e ricomincia!" },
      { type: "num", q: "Nonna ha 50 biscotti e li mette in sacchetti da 6. Quanti biscotti avanzano?", answer: 2, explain: "50 : 6 = 8 resto 2 (8 × 6 = 48)." },
      { type: "mc", q: "Quale prova è giusta per 38 : 5 = 7 r 3?", options: ["7 × 5 + 3 = 38", "7 × 3 + 5 = 38", "38 × 5 = 7"], answer: 0, explain: "7 × 5 = 35; 35 + 3 = 38 ✔" }
    ],
    gen: [["divExact", 2], ["divRem", 2]]
  }
});
