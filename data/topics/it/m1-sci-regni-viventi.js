TOPIC('it', {
  id: "m1-sci-regni-viventi",
  title: "I cinque regni dei viventi",
  intro: "Sulla Terra gli scienziati hanno descritto circa <b>2 milioni</b> di specie viventi, e molte di più devono ancora essere scoperte. Per non perdersi serve un ordine: la <b>classificazione</b>. Scopriamo che cosa rende \"vivo\" un essere, come si costruisce un sistema di classificazione e quali sono i <b>cinque regni</b>.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Che cosa distingue un essere vivente?",
      html: `<p>Un essere vivente (o <b>organismo</b>) ha <b>tutte</b> queste caratteristiche:</p>
<ul>
<li>è formato da una o più <b>cellule</b>;</li>
<li>si <b>nutre</b>: ricava energia e materia dall'ambiente;</li>
<li><b>respira</b>: trasforma le sostanze nutritive in energia;</li>
<li><b>cresce</b> e si sviluppa;</li>
<li><b>reagisce agli stimoli</b> (luce, calore, contatto);</li>
<li><b>si riproduce</b>, generando nuovi individui simili a sé;</li>
<li><b>muore</b>.</li>
</ul>
<p>Un cristallo di sale "cresce", il fuoco "si nutre" e "respira" ossigeno… ma nessuno dei due ha cellule né si riproduce con un patrimonio genetico: non sono vivi.</p>
<p><b>E i virus?</b> Contengono materiale genetico, ma <b>non sono cellule</b> e si moltiplicano solo dentro le cellule di un altro organismo. Per questo la maggior parte degli scienziati non li considera esseri viventi e non li inserisce nei regni.</p>`
    },
    {
      type: "text",
      title: "2. Classificare: le idee di Linneo",
      html: `<p><b>Classificare</b> significa raggruppare gli organismi in base alle loro <b>somiglianze</b>, come i libri in una biblioteca.</p>
<p>Già <b>Aristotele</b> (IV secolo a.C.) divise i viventi in piante e animali. Ma il sistema che usiamo ancora oggi lo ideò lo svedese <b>Carlo Linneo</b> (Carl von Linné) nel libro <i>Systema Naturae</i> (1735, e poi nella 10ª edizione del 1758).</p>
<p>Linneo inventò la <b>nomenclatura binomia</b>: ogni specie ha un nome scientifico in <b>latino</b> formato da <b>due parole</b>:</p>
<ul>
<li>la prima è il <b>genere</b>, con la maiuscola;</li>
<li>la seconda indica la <b>specie</b>, con la minuscola.</li>
</ul>
<p>Si scrive in <i>corsivo</i>: <i>Homo sapiens</i> (uomo), <i>Canis lupus</i> (lupo), <i>Felis catus</i> (gatto), <i>Quercus robur</i> (farnia, una quercia). Così uno scienziato giapponese e uno italiano sanno di parlare dello stesso organismo, anche se nelle loro lingue i nomi comuni sono diversi.</p>
<p>Una <b>specie</b> è un gruppo di individui simili che possono <b>riprodursi tra loro</b> e avere figli <b>fertili</b>. Cavallo e asino sono specie diverse: il loro figlio, il mulo, di solito è sterile.</p>`
    },
    {
      type: "text",
      title: "3. Le categorie: dalla più grande alla più piccola",
      html: `<p>Linneo organizzò i viventi in gruppi uno dentro l'altro, come le <b>scatole cinesi</b>. Ecco le categorie (o <b>taxa</b>) dalla più ampia alla più ristretta, con l'esempio del <b>lupo</b>:</p>
<table>
<tr><th>Categoria</th><th>Lupo</th><th>Chi c'è dentro</th></tr>
<tr><td><b>Dominio</b></td><td>Eucarioti</td><td>tutti gli organismi con cellule dotate di nucleo</td></tr>
<tr><td><b>Regno</b></td><td>Animali</td><td>tutti gli animali</td></tr>
<tr><td><b>Phylum</b> (tipo)</td><td>Cordati</td><td>animali con una corda dorsale (vertebrati e pochi altri)</td></tr>
<tr><td><b>Classe</b></td><td>Mammiferi</td><td>animali che allattano i piccoli</td></tr>
<tr><td><b>Ordine</b></td><td>Carnivori</td><td>gatti, orsi, foche, cani…</td></tr>
<tr><td><b>Famiglia</b></td><td>Canidi</td><td>cani, lupi, volpi, sciacalli</td></tr>
<tr><td><b>Genere</b></td><td><i>Canis</i></td><td>lupo, coyote, sciacallo dorato</td></tr>
<tr><td><b>Specie</b></td><td><i>Canis lupus</i></td><td>il lupo (e il cane, che ne è una sottospecie domestica)</td></tr>
</table>
<p>Scendendo, i gruppi contengono <b>meno</b> organismi ma sempre più <b>simili</b> tra loro. Un trucco per ricordare l'ordine: "<b>D</b>ue <b>R</b>agazzi <b>P</b>rendono <b>C</b>affè <b>O</b>gni <b>F</b>ine <b>G</b>iornata <b>S</b>erale".</p>`
    },
    {
      type: "3d",
      title: "Le categorie una dentro l'altra",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#a7f3d0", label: "Dominio: Eucarioti" },
          { r: 0.88, color: "#6ee7b7", label: "Regno: Animali" },
          { r: 0.76, color: "#34d399", label: "Phylum: Cordati" },
          { r: 0.64, color: "#10b981", label: "Classe: Mammiferi" },
          { r: 0.52, color: "#059669", label: "Ordine: Carnivori" },
          { r: 0.4, color: "#047857", label: "Famiglia: Canidi" },
          { r: 0.28, color: "#065f46", label: "Genere: Canis" },
          { r: 0.16, color: "#f59e0b", label: "Specie: Canis lupus" }
        ]
      },
      caption: "Come una matrioska: ogni categoria è contenuta in quella più grande. Il lupo è al centro."
    },
    {
      type: "quiz",
      title: "Mini-quiz: viventi e classificazione",
      questions: [
        { type: "mc", q: "Chi inventò la nomenclatura binomia?", options: ["Aristotele", "Carlo Linneo", "Charles Darwin", "Galileo"], answer: 1, explain: "Linneo, nel Settecento, diede a ogni specie un nome latino di due parole." },
        { type: "tf", q: "Nel nome Felis catus, Felis indica il genere.", answer: true, explain: "La prima parola, con la maiuscola, è il genere." },
        { type: "order", q: "Metti le categorie dalla più ampia alla più ristretta.", items: ["Regno", "Phylum", "Classe", "Ordine", "Famiglia", "Genere", "Specie"], explain: "Regno, phylum, classe, ordine, famiglia, genere, specie." }
      ]
    },
    {
      type: "text",
      title: "4. I criteri per dividere i regni",
      html: `<p>Nel <b>1969</b> l'ecologo americano <b>Robert Whittaker</b> propose di dividere i viventi in <b>cinque regni</b>, usando tre domande:</p>
<ol>
<li><b>Che cellula ha?</b> <b>Procariote</b> (semplice, senza nucleo: il DNA è libero nel citoplasma) oppure <b>eucariote</b> (con un nucleo che racchiude il DNA e tanti organuli).</li>
<li><b>Quante cellule ha?</b> Una sola (<b>unicellulare</b>) o tante (<b>pluricellulare</b>).</li>
<li><b>Come si nutre?</b> <b>Autotrofo</b>: produce da solo il cibo con la fotosintesi (usa luce, acqua e anidride carbonica). <b>Eterotrofo</b>: deve prendere il cibo da altri organismi, mangiandoli o assorbendo sostanze.</li>
</ol>`
    },
    {
      type: "text",
      title: "5. I cinque regni",
      html: `<table>
<tr><th>Regno</th><th>Cellula</th><th>Cellule</th><th>Nutrizione</th><th>Esempi</th></tr>
<tr><td>🦠 <b>Monere</b></td><td>procariote</td><td>una</td><td>autotrofi o eterotrofi</td><td>batteri, cianobatteri</td></tr>
<tr><td>🔬 <b>Protisti</b></td><td>eucariote</td><td>quasi sempre una</td><td>autotrofi o eterotrofi</td><td>amebe, parameci, euglene, alghe unicellulari, diatomee</td></tr>
<tr><td>🍄 <b>Funghi</b></td><td>eucariote</td><td>una o tante</td><td>eterotrofi (assorbono)</td><td>lieviti, muffe, funghi a cappello</td></tr>
<tr><td>🌳 <b>Piante</b></td><td>eucariote, con parete di cellulosa e cloroplasti</td><td>tante</td><td>autotrofe</td><td>muschi, felci, conifere, piante con fiori</td></tr>
<tr><td>🐾 <b>Animali</b></td><td>eucariote, senza parete</td><td>tante</td><td>eterotrofi (ingeriscono)</td><td>spugne, insetti, pesci, uccelli, mammiferi</td></tr>
</table>
<p><b>Monere</b>: sono i viventi più antichi (circa 3,5 miliardi di anni fa) e più numerosi. Molti batteri ci sono utili: nell'intestino aiutano la digestione, nel latte producono lo yogurt.</p>
<p><b>Protisti</b>: un regno "miscellanea" con organismi molto diversi; alcuni assomigliano a piccoli animali (protozoi), altri a piccole piante (alghe).</p>
<p><b>Funghi</b>: non sono piante! Non hanno clorofilla, le loro pareti sono di <b>chitina</b> (come il guscio degli insetti) e si nutrono <b>assorbendo</b> sostanze da ciò che decompongono. Il "fungo" che raccogli è solo il <b>corpo fruttifero</b>: la parte principale è il <b>micelio</b>, una rete di filamenti (le ife) sottoterra.</p>`
    },
    {
      type: "svg",
      title: "I cinque regni a colpo d'occhio",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f0fdf4"/>
<rect x="15" y="20" width="570" height="70" rx="12" fill="#fee2e2" stroke="#b91c1c" stroke-width="3"/>
<text x="30" y="50" font-size="18" font-weight="bold" fill="#991b1b">PROCARIOTI</text>
<text x="30" y="75" font-size="15" fill="#991b1b">cellula senza nucleo</text>
<rect x="330" y="30" width="230" height="50" rx="25" fill="#fca5a5"/>
<text x="445" y="62" font-size="18" text-anchor="middle" font-weight="bold">🦠 Monere</text>
<rect x="15" y="105" width="570" height="200" rx="12" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<text x="30" y="132" font-size="18" font-weight="bold" fill="#1e3a8a">EUCARIOTI: cellula con nucleo</text>
<rect x="30" y="150" width="160" height="50" rx="25" fill="#c4b5fd"/>
<text x="110" y="182" font-size="17" text-anchor="middle" font-weight="bold">🔬 Protisti</text>
<text x="110" y="222" font-size="14" text-anchor="middle">soprattutto unicellulari</text>
<rect x="215" y="150" width="110" height="50" rx="25" fill="#fde68a"/>
<text x="270" y="182" font-size="17" text-anchor="middle" font-weight="bold">🍄 Funghi</text>
<rect x="340" y="150" width="110" height="50" rx="25" fill="#86efac"/>
<text x="395" y="182" font-size="17" text-anchor="middle" font-weight="bold">🌳 Piante</text>
<rect x="465" y="150" width="110" height="50" rx="25" fill="#fdba74"/>
<text x="520" y="182" font-size="17" text-anchor="middle" font-weight="bold">🐾 Animali</text>
<text x="270" y="222" font-size="14" text-anchor="middle">assorbono</text>
<text x="395" y="222" font-size="14" text-anchor="middle">fotosintesi</text>
<text x="520" y="222" font-size="14" text-anchor="middle">mangiano</text>
<line x1="215" y1="245" x2="575" y2="245" stroke="#1d4ed8" stroke-width="3"/>
<text x="395" y="275" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">pluricellulari</text>
<text x="395" y="295" font-size="14" text-anchor="middle" fill="#1e3a8a">(i lieviti sono funghi unicellulari)</text>
</svg>`,
      caption: "Prima grande divisione: procarioti ed eucarioti. Poi si guarda il numero di cellule e il modo di nutrirsi."
    },
    {
      type: "widget",
      title: "In quale regno lo metti?",
      widget: "classify",
      options: {
        groups: ["Monere", "Protisti", "Funghi", "Piante", "Animali"],
        items: [
          ["🦠 batterio dello yogurt", 0], ["🔵 cianobatterio", 0], ["🫧 ameba", 1], ["🟢 paramecio", 1],
          ["🍞 lievito di birra", 2], ["🍄 porcino", 2], ["🧀 muffa del gorgonzola", 2],
          ["🌿 felce", 3], ["🌲 abete", 3], ["🌱 muschio", 3],
          ["🧽 spugna di mare", 4], ["🪼 medusa", 4], ["🐧 pinguino", 4]
        ]
      },
      caption: "Attenzione ai tranelli: la spugna di mare è un animale, il muschio è una pianta, il lievito è un fungo!"
    },
    {
      type: "example",
      title: "Esempio pratico: usare una chiave dicotomica",
      html: `<p>Una <b>chiave dicotomica</b> ("che divide in due") è una serie di domande con <b>due risposte</b>. Seguendole si arriva al nome del gruppo. Proviamo con un organismo misterioso: <i>è fatto di tante cellule, non fa la fotosintesi, ha pareti di chitina e assorbe il cibo dal legno morto</i>.</p>
<ol>
<li>Le sue cellule hanno il nucleo? <b>Sì</b> → eucariote (non è una monera).</li>
<li>È formato da tante cellule? <b>Sì</b> → non è un protista.</li>
<li>Fa la fotosintesi? <b>No</b> → non è una pianta.</li>
<li>Ingerisce il cibo o lo assorbe? <b>Lo assorbe</b> → è un <b>fungo</b>!</li>
</ol>
<p>Le chiavi dicotomiche si usano davvero: le guide ai funghi, agli uccelli, agli alberi e le app di riconoscimento sono costruite proprio così.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: i regni nella tua cucina",
      html: `<ul>
<li>🦠 <b>Monere</b>: lo yogurt nasce grazie ai batteri <i>Lactobacillus</i> e <i>Streptococcus</i> che trasformano il latte.</li>
<li>🔬 <b>Protisti</b>: l'alga <i>Spirulina</i> si vende come integratore… anche se in realtà è un cianobatterio, quindi una monera! Le diatomee invece formano la "farina fossile" usata nei filtri.</li>
<li>🍄 <b>Funghi</b>: il lievito <i>Saccharomyces cerevisiae</i> fa lievitare il pane e la pizza; la muffa <i>Penicillium</i> dà il colore blu al gorgonzola.</li>
<li>🌳 <b>Piante</b>: farina, frutta, verdura, olio d'oliva.</li>
<li>🐾 <b>Animali</b>: latte, uova, carne, pesce, miele (prodotto dalle api).</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… il più grande essere vivente è un fungo?",
      html: `<p>Nella Malheur National Forest, in <b>Oregon</b> (USA), vive un fungo del genere <i>Armillaria</i> (chiodino) il cui micelio sotterraneo si estende per circa <b>9 km²</b>, più di 1200 campi da calcio! Si stima che abbia migliaia di anni.</p>
<p>E un'altra sorpresa: secondo il DNA, i funghi sono <b>più parenti degli animali</b> che delle piante.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… nel tuo corpo ci sono tantissimi batteri?",
      html: `<p>Nel nostro corpo, soprattutto nell'intestino, vivono circa <b>38 000 miliardi</b> di batteri: più o meno quante sono le nostre cellule (circa 30 000 miliardi)! Insieme formano il <b>microbiota</b> e ci aiutano a digerire, a produrre vitamine e a difenderci dai microbi dannosi. Pesano in tutto circa 200 grammi.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la classificazione",
      intro: "Il sistema dei cinque regni non è l'unico possibile, e si può capire con tanti paragoni.",
      tabs: [
        {
          label: "📬 Come un indirizzo",
          html: `<p>La classificazione funziona come un <b>indirizzo postale</b>, dal più generale al più preciso:</p>
<table>
<tr><th>Indirizzo</th><th>Classificazione</th></tr>
<tr><td>Pianeta Terra</td><td>Dominio</td></tr>
<tr><td>Continente: Europa</td><td>Regno</td></tr>
<tr><td>Stato: Italia</td><td>Phylum</td></tr>
<tr><td>Regione: Piemonte</td><td>Classe</td></tr>
<tr><td>Provincia: Torino</td><td>Ordine</td></tr>
<tr><td>Comune</td><td>Famiglia</td></tr>
<tr><td>Via</td><td>Genere</td></tr>
<tr><td>Numero civico</td><td>Specie</td></tr>
</table>
<p>Il nome scientifico (genere + specie) è come "via + numero": basta per trovare esattamente quell'organismo.</p>`
        },
        {
          label: "🧬 I tre domini di Woese",
          html: `<p>Nel <b>1990</b> il microbiologo americano <b>Carl Woese</b>, confrontando il materiale genetico (l'RNA dei ribosomi), scoprì che le monere erano in realtà <b>due gruppi molto diversi</b>. Propose quindi tre <b>domini</b>, al di sopra dei regni:</p>
<ul>
<li><b>Batteri</b> (Bacteria);</li>
<li><b>Archei</b> (Archaea): procarioti che spesso vivono in ambienti estremi, come sorgenti bollenti e laghi salatissimi;</li>
<li><b>Eucarioti</b> (Eukarya): protisti, funghi, piante e animali.</li>
</ul>
<p>Oggi molti scienziati usano i tre domini e preferiscono più di cinque regni. I cinque regni restano però un ottimo punto di partenza: la classificazione <b>cambia</b> quando la scienza scopre cose nuove.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f8fafc"/>
<line x1="300" y1="240" x2="300" y2="170" stroke="#475569" stroke-width="6"/>
<line x1="300" y1="170" x2="110" y2="60" stroke="#dc2626" stroke-width="6"/>
<line x1="300" y1="170" x2="400" y2="115" stroke="#475569" stroke-width="6"/>
<line x1="400" y1="115" x2="320" y2="60" stroke="#f59e0b" stroke-width="6"/>
<line x1="400" y1="115" x2="500" y2="60" stroke="#2563eb" stroke-width="6"/>
<text x="110" y="45" font-size="20" text-anchor="middle" font-weight="bold" fill="#dc2626">Batteri</text>
<text x="320" y="45" font-size="20" text-anchor="middle" font-weight="bold" fill="#b45309">Archei</text>
<text x="500" y="45" font-size="20" text-anchor="middle" font-weight="bold" fill="#1d4ed8">Eucarioti</text>
<text x="300" y="255" font-size="15" text-anchor="middle" fill="#334155">antenato comune</text>
<text x="500" y="85" font-size="14" text-anchor="middle" fill="#1d4ed8">protisti, funghi,</text>
<text x="500" y="102" font-size="14" text-anchor="middle" fill="#1d4ed8">piante, animali</text>
</svg>`
        },
        {
          label: "🗂️ Gioca a classificare",
          html: `<p>Abbina ogni organismo al suo regno. Ricorda le tre domande: ha il nucleo? quante cellule? come si nutre?</p>`,
          widget: "match",
          options: { pairs: [["Escherichia coli (batterio)", "Monere"], ["Euglena", "Protisti"], ["Penicillium (muffa)", "Funghi"], ["Girasole", "Piante"], ["Lombrico", "Animali"]] }
        },
        {
          label: "🌍 Le classificazioni nel tempo",
          html: `<ul>
<li><b>Aristotele</b> (IV sec. a.C.): 2 gruppi, piante e animali; gli animali divisi in "con sangue" e "senza sangue".</li>
<li><b>Linneo</b> (1735): 2 regni, vegetale e animale (più un regno minerale!).</li>
<li><b>Haeckel</b> (1866): 3 regni, aggiunge i Protisti per gli organismi microscopici.</li>
<li><b>Whittaker</b> (1969): 5 regni.</li>
<li><b>Woese</b> (1990): 3 domini.</li>
<li>Oggi in molti Paesi (ad esempio nei testi del Regno Unito e degli USA) si parla anche di <b>6 o 7 regni</b>, separando batteri e archei e, a volte, alghe e protozoi.</li>
</ul>
<p>Più strumenti abbiamo (prima il microscopio, poi il DNA), più la classificazione diventa precisa.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dei regni: tocca e scopri il perché",
      nodes: [
        { id: "vivente", label: "Essere vivente", x: 50, y: 5, color: "#16a34a", html: "Ha cellule, si nutre, respira, cresce, reagisce, si riproduce, muore.", why: "La teoria cellulare (Schleiden e Schwann, 1838-39) stabilì che ogni vivente è fatto di cellule. È il criterio più sicuro per dire che cosa è vivo." },
        { id: "linneo", label: "Linneo", x: 20, y: 22, color: "#a855f7", html: "Carlo Linneo, naturalista svedese (1707–1778).", why: "Nel Settecento gli esploratori portavano in Europa migliaia di piante e animali nuovi, ognuno con nomi diversi in ogni lingua. Linneo creò un sistema unico e semplice, in latino, la lingua comune degli scienziati." },
        { id: "binomia", label: "Nome binomio", x: 20, y: 44, color: "#8b5cf6", html: "Genere + specie, in latino e in corsivo: Homo sapiens.", why: "Due parole bastano per identificare una specie in modo unico in tutto il mondo; il genere già dice quali sono i \"parenti stretti\"." },
        { id: "categorie", label: "Categorie", x: 50, y: 30, color: "#059669", html: "Dominio, regno, phylum, classe, ordine, famiglia, genere, specie.", why: "Gruppi uno dentro l'altro: dopo Darwin (1859) si capì che riflettono la parentela evolutiva, come i rami di un albero genealogico." },
        { id: "criteri", label: "Tre criteri", x: 80, y: 22, color: "#f59e0b", html: "Tipo di cellula, numero di cellule, modo di nutrirsi.", why: "Sono caratteristiche fondamentali che si vedono al microscopio e che cambiano poco nel tempo evolutivo: per questo sono buoni criteri per i gruppi più grandi." },
        { id: "whittaker", label: "Cinque regni", x: 80, y: 46, color: "#2563eb", html: "Monere, Protisti, Funghi, Piante, Animali.", why: "Robert Whittaker li propose nel 1969: separò i funghi dalle piante perché non fanno la fotosintesi e assorbono il cibo." },
        { id: "procarioti", label: "Procarioti", x: 30, y: 70, color: "#dc2626", html: "Cellule senza nucleo: le Monere.", why: "Sono le cellule più antiche: i fossili di stromatoliti mostrano batteri già 3,5 miliardi di anni fa. Il nucleo comparve molto dopo." },
        { id: "eucarioti", label: "Eucarioti", x: 70, y: 70, color: "#1d4ed8", html: "Cellule con nucleo: Protisti, Funghi, Piante, Animali.", why: "Secondo la teoria dell'endosimbiosi di Lynn Margulis (1967), sono nati quando una cellula ne ha \"inglobate\" altre: mitocondri e cloroplasti erano un tempo batteri liberi." },
        { id: "domini", label: "Tre domini", x: 50, y: 94, color: "#0f766e", html: "Batteri, Archei, Eucarioti.", why: "Carl Woese nel 1990 confrontò il materiale genetico e scoprì che gli archei sono diversi dai batteri quanto lo siamo noi. Il DNA ha cambiato la classificazione." }
      ],
      edges: [
        ["vivente", "categorie", "si ordina con le"],
        ["linneo", "categorie", "inventa le"],
        ["linneo", "binomia", "inventa il"],
        ["criteri", "whittaker", "definiscono i"],
        ["vivente", "criteri", "si osservano"],
        ["whittaker", "procarioti", "1 regno"],
        ["whittaker", "eucarioti", "4 regni"],
        ["procarioti", "domini", "divisi in 2"],
        ["eucarioti", "domini", "1"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: i cinque regni",
      questions: [
        { type: "mc", q: "Quale regno comprende organismi procarioti?", options: ["Protisti", "Monere", "Funghi", "Piante"], answer: 1, explain: "Le Monere (batteri) hanno cellule senza nucleo." },
        { type: "tf", q: "I funghi sono piante senza fiori.", answer: false, explain: "I funghi non fanno la fotosintesi e hanno pareti di chitina: sono un regno a sé." },
        { type: "mc", q: "Un organismo che produce da solo il suo cibo con la fotosintesi è…", options: ["eterotrofo", "autotrofo", "procariote"], answer: 1, explain: "Autotrofo significa \"che si nutre da sé\"." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>I viventi hanno <b>cellule</b>, si nutrono, respirano, crescono, reagiscono, si riproducono e muoiono.</li>
<li><b>Linneo</b>: nome scientifico in due parole, <i>Genere specie</i>.</li>
<li>Categorie: dominio, regno, phylum, classe, ordine, famiglia, genere, <b>specie</b>.</li>
<li>Criteri: <b>procariote/eucariote</b>, <b>uni/pluricellulare</b>, <b>autotrofo/eterotrofo</b>.</li>
<li>Cinque regni: <b>Monere, Protisti, Funghi, Piante, Animali</b> (Whittaker, 1969).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Specie", d: "Gruppo di individui simili che si riproducono tra loro con figli fertili." },
    { t: "Nomenclatura binomia", d: "Sistema di Linneo: ogni specie ha un nome latino di due parole (genere e specie)." },
    { t: "Taxon (plurale taxa)", d: "Un gruppo della classificazione: regno, classe, famiglia…" },
    { t: "Procariote", d: "Cellula senza nucleo, con il DNA libero nel citoplasma." },
    { t: "Eucariote", d: "Cellula con nucleo delimitato da una membrana." },
    { t: "Autotrofo", d: "Organismo che produce da sé le sostanze nutritive (fotosintesi)." },
    { t: "Eterotrofo", d: "Organismo che ricava il nutrimento da altri organismi." },
    { t: "Micelio", d: "Rete di filamenti (ife) che forma il corpo principale di un fungo." },
    { t: "Chiave dicotomica", d: "Serie di domande a due risposte per identificare un organismo." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale di queste caratteristiche hanno TUTTI gli esseri viventi?", options: ["Si muovono", "Sono formati da cellule", "Fanno la fotosintesi", "Hanno lo scheletro"], answer: 1, explain: "Tutti i viventi sono formati da almeno una cellula." },
      { type: "tf", q: "I virus sono considerati esseri viventi e appartengono al regno delle Monere.", answer: false, explain: "I virus non sono cellule e si moltiplicano solo dentro altre cellule: non rientrano nei regni." },
      { type: "text", q: "Come si chiama lo scienziato svedese che inventò la nomenclatura binomia?", answer: ["linneo", "carlo linneo", "linnaeus", "carl linnaeus"], explain: "Carlo Linneo, nel Systema Naturae (1735)." },
      { type: "mc", q: "Nel nome Canis lupus, che cosa indica \"Canis\"?", options: ["La famiglia", "Il genere", "La specie", "L'ordine"], answer: 1, explain: "La prima parola, con la maiuscola, è il genere." },
      { type: "order", q: "Metti in ordine dalla categoria più ampia alla più ristretta.", items: ["Regno", "Classe", "Famiglia", "Genere", "Specie"], explain: "Regno > classe > famiglia > genere > specie." },
      { type: "mc", q: "In quale regno si trovano i lieviti?", options: ["Monere", "Protisti", "Funghi", "Piante"], answer: 2, explain: "I lieviti sono funghi unicellulari." },
      { type: "mc", q: "Che cosa distingue una cellula procariote?", options: ["Ha la parete di cellulosa", "Non ha il nucleo", "Ha i cloroplasti", "È sempre pluricellulare"], answer: 1, explain: "Nei procarioti il DNA non è racchiuso in un nucleo." },
      { type: "tf", q: "Le piante sono organismi autotrofi pluricellulari.", answer: true, explain: "Producono da sé il nutrimento con la fotosintesi e sono fatte di tante cellule." },
      { type: "mc", q: "Chi propose i cinque regni nel 1969?", options: ["Darwin", "Whittaker", "Woese", "Aristotele"], answer: 1, explain: "Robert Whittaker." },
      { type: "mc", q: "Due animali possono avere figli fertili insieme. Allora appartengono…", options: ["allo stesso regno ma a specie diverse", "alla stessa specie", "a famiglie diverse"], answer: 1, explain: "È la definizione biologica di specie." },
      { type: "text", q: "Come si chiama la rete di filamenti sotterranei che forma il corpo di un fungo?", answer: ["micelio", "il micelio"], explain: "Il micelio, fatto di ife; il \"fungo\" che vediamo è il corpo fruttifero." },
      { type: "mc", q: "Una spugna di mare appartiene al regno…", options: ["delle Piante", "dei Protisti", "degli Animali", "dei Funghi"], answer: 2, explain: "Le spugne (Poriferi) sono animali pluricellulari eterotrofi, i più semplici." }
    ]
  }
});
