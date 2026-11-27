TOPIC('it', {
  id: "l2-sci-cellula",
  title: "La cellula",
  intro: "Ogni essere vivente, dal batterio alla balenottera azzurra, è fatto di <b>cellule</b>: minuscole unità che respirano, si nutrono, si riproducono e reagiscono all'ambiente. Nel tuo corpo ce ne sono alcune decine di migliaia di miliardi. In questa lezione scopriamo come è fatta una cellula, in che cosa differiscono <b>procarioti</b> ed <b>eucarioti</b>, <b>animali</b> e <b>vegetali</b>, e che cosa fa ciascuno dei suoi <b>organuli</b>: una vera città in miniatura.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "La teoria cellulare: come si è arrivati a un'idea semplice",
      html: `<p>Nel <b>1665</b> l'inglese <b>Robert Hooke</b>, osservando con un microscopio rudimentale una sottile fetta di sughero, vide tante piccole cavità regolari che chiamò <i>cells</i> (celle, come quelle dei monaci). In realtà vedeva le pareti di cellule vegetali morte. Pochi anni dopo l'olandese <b>Antoni van Leeuwenhoek</b>, con lenti da lui costruite, osservò per primo batteri, protozoi e spermatozoi, che chiamò "animalcoli".</p>
<p>Solo nell'Ottocento le osservazioni diventarono una teoria:</p>
<ul>
<li><b>1838-1839</b>: il botanico <b>Matthias Schleiden</b> e lo zoologo <b>Theodor Schwann</b> affermano che piante e animali sono costituiti da cellule;</li>
<li><b>1855</b>: <b>Rudolf Virchow</b> sintetizza: <i>omnis cellula e cellula</i>, ogni cellula deriva da un'altra cellula (idea già sostenuta da Robert Remak).</li>
</ul>
<p>I tre principi della <b>teoria cellulare</b> sono quindi:</p>
<ol>
<li>tutti gli esseri viventi sono formati da una o più cellule;</li>
<li>la cellula è l'unità fondamentale, strutturale e funzionale, della vita;</li>
<li>ogni cellula nasce da un'altra cellula preesistente (e questo smentì la generazione spontanea, già messa in dubbio da Redi e poi da Pasteur).</li>
</ol>
<p>Gli organismi possono essere <b>unicellulari</b> (batteri, lieviti, amebe) o <b>pluricellulari</b> (piante, animali, funghi come i porcini), dove le cellule si specializzano e formano tessuti, organi e apparati.</p>`
    },
    {
      type: "example",
      title: "Quanto è grande una cellula? Ingrandimento e scala",
      html: `<p>Una cellula tipica ha un diametro di 10-100 µm (1 µm = 1 micrometro = un millesimo di millimetro): troppo piccola per l'occhio nudo, che distingue al massimo circa 0,1 mm = 100 µm. Per vederla serve il <b>microscopio ottico</b>, che ingrandisce di 40-1000 volte; per i dettagli interni (organuli, virus) il <b>microscopio elettronico</b> arriva a centinaia di migliaia di ingrandimenti.</p>
<p>L'ingrandimento totale è il prodotto di quello dell'oculare e dell'obiettivo: con oculare 10× e obiettivo 40× si ha 10 × 40 = <b>400×</b>. Se al microscopio una cellula appare larga 2 cm = 20 000 µm, la sua dimensione reale è:</p>
<p><b>20 000 µm ÷ 400 = 50 µm</b>.</p>
<p>Per confronto: un globulo rosso misura circa 7 µm; un batterio comune 1-5 µm; l'uovo di gallina (una sola cellula, tuorlo) circa 3 cm; una cellula nervosa può avere un prolungamento (assone) lungo anche oltre un metro.</p>`
    },
    {
      type: "example",
      title: "Perché le cellule sono piccole? Il rapporto superficie/volume",
      html: `<p>Una cellula scambia con l'ambiente ossigeno, nutrienti e rifiuti <b>attraverso la sua superficie</b>, ma ciò che consuma dipende dal suo <b>volume</b>. Modelliamola con un cubo di lato <i>l</i>:</p>
<table>
<tr><th>Lato</th><th>Superficie (6 l²)</th><th>Volume (l³)</th><th>Superficie / Volume</th></tr>
<tr><td>1 µm</td><td>6 µm²</td><td>1 µm³</td><td><b>6</b></td></tr>
<tr><td>10 µm</td><td>600 µm²</td><td>1000 µm³</td><td><b>0,6</b></td></tr>
<tr><td>100 µm</td><td>60 000 µm²</td><td>1 000 000 µm³</td><td><b>0,06</b></td></tr>
</table>
<p>Il rapporto S/V vale 6/<i>l</i>: raddoppiando il lato, la superficie quadruplica ma il volume diventa otto volte maggiore. Una cellula troppo grande avrebbe poca superficie per "rifornire" tutto il suo interno. Per questo gli organismi grandi non hanno cellule enormi, ma <b>tante cellule piccole</b>; e le cellule specializzate negli scambi (come quelle dell'intestino) hanno la membrana ripiegata in <b>microvilli</b> per aumentare la superficie.</p>`
    },
    {
      type: "text",
      title: "Due grandi modelli: procarioti ed eucarioti",
      html: `<p>Tutte le cellule hanno in comune quattro componenti: una <b>membrana plasmatica</b> che le delimita, il <b>citoplasma</b> (una soluzione gelatinosa, il <i>citosol</i>, con gli organuli), i <b>ribosomi</b> che costruiscono proteine, e il <b>DNA</b> che contiene le istruzioni. Dal modo in cui il DNA è organizzato nascono i due modelli:</p>
<table>
<tr><th></th><th>Cellula procariote</th><th>Cellula eucariote</th></tr>
<tr><td>Organismi</td><td>Batteri e Archei</td><td>Protisti, funghi, piante, animali</td></tr>
<tr><td>Dimensioni tipiche</td><td>1-10 µm</td><td>10-100 µm</td></tr>
<tr><td>DNA</td><td>un cromosoma circolare libero nel <b>nucleoide</b> (più eventuali <b>plasmidi</b>)</td><td>più cromosomi lineari racchiusi nel <b>nucleo</b> con la membrana nucleare</td></tr>
<tr><td>Organuli con membrana</td><td>assenti</td><td>presenti (mitocondri, reticolo, Golgi...)</td></tr>
<tr><td>Ribosomi</td><td>più piccoli (70S)</td><td>più grandi (80S) nel citoplasma</td></tr>
<tr><td>Parete</td><td>spesso presente (nei batteri di peptidoglicano)</td><td>solo in piante (cellulosa), funghi (chitina) e alghe</td></tr>
</table>
<p>"Procariote" significa "prima del nucleo", "eucariote" "vero nucleo". I procarioti sono comparsi circa <b>3,5-3,8 miliardi di anni fa</b>, gli eucarioti circa 1,5-2 miliardi di anni fa. Molti procarioti hanno <b>flagelli</b> per muoversi, <b>pili</b> per attaccarsi, e una <b>capsula</b> protettiva. Si riproducono per <b>scissione binaria</b> e, in condizioni ideali, alcuni raddoppiano ogni 20-30 minuti.</p>
<p>Un caso a parte sono i <b>virus</b>: sono frammenti di materiale genetico (DNA o RNA) racchiusi in un involucro proteico. Non hanno metabolismo né ribosomi e si riproducono solo dentro una cellula ospite, per questo di solito non sono considerati esseri viventi in senso stretto.</p>`
    },
    {
      type: "svg",
      title: "Cellula procariote e cellula eucariote a confronto",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="20" y="70" width="230" height="150" rx="60" fill="#fef3c7" stroke="#92400e" stroke-width="4"/>
<rect x="30" y="80" width="210" height="130" rx="52" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
<path d="M95 150 C95 115 135 115 135 140 C135 170 165 165 160 135 C158 120 120 190 100 165" fill="none" stroke="#7c3aed" stroke-width="4"/>
<circle cx="180" cy="170" r="10" fill="none" stroke="#7c3aed" stroke-width="3"/>
<circle cx="65" cy="120" r="4" fill="#b91c1c"/><circle cx="200" cy="110" r="4" fill="#b91c1c"/><circle cx="110" cy="195" r="4" fill="#b91c1c"/><circle cx="215" cy="150" r="4" fill="#b91c1c"/>
<path d="M20 145 C-5 120 -5 175 10 160" fill="none" stroke="#475569" stroke-width="3"/>
<text x="135" y="50" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">PROCARIOTE (batterio)</text>
<text x="135" y="245" font-size="14" fill="#7c3aed" text-anchor="middle" font-weight="bold">DNA circolare + plasmide</text>
<text x="135" y="265" font-size="14" fill="#b91c1c" text-anchor="middle" font-weight="bold">ribosomi · niente nucleo</text>
<ellipse cx="440" cy="150" rx="140" ry="95" fill="#dbeafe" stroke="#1d4ed8" stroke-width="4"/>
<circle cx="420" cy="140" r="42" fill="#e9d5ff" stroke="#7c3aed" stroke-width="3"/>
<path d="M400 140 C410 120 430 160 445 135" fill="none" stroke="#6d28d9" stroke-width="3"/>
<ellipse cx="510" cy="110" rx="26" ry="14" fill="#fecaca" stroke="#b91c1c" stroke-width="2"/>
<ellipse cx="500" cy="190" rx="26" ry="14" fill="#fecaca" stroke="#b91c1c" stroke-width="2"/>
<path d="M360 200 q15 -12 30 0 q15 12 30 0" fill="none" stroke="#16a34a" stroke-width="4"/>
<circle cx="365" cy="105" r="5" fill="#b91c1c"/><circle cx="380" cy="95" r="5" fill="#b91c1c"/><circle cx="470" cy="165" r="5" fill="#b91c1c"/>
<text x="440" y="50" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">EUCARIOTE (animale)</text>
<text x="420" y="145" font-size="14" fill="#4c1d95" text-anchor="middle" font-weight="bold">nucleo</text>
<text x="515" y="150" font-size="14" fill="#991b1b" text-anchor="middle" font-weight="bold">mitocondri</text>
<text x="440" y="265" font-size="14" fill="#1e40af" text-anchor="middle" font-weight="bold">DNA nel nucleo + organuli con membrana</text>
</svg>`,
      caption: "Il batterio ha il DNA libero nel citoplasma; la cellula eucariote lo custodisce nel nucleo e ha organuli delimitati da membrane."
    },
    {
      type: "text",
      title: "Gli organuli della cellula eucariote",
      html: `<p>Gli <b>organuli</b> sono compartimenti specializzati, come i reparti di una fabbrica. Le membrane che li separano permettono di tenere insieme reazioni chimiche incompatibili.</p>
<ul>
<li><b>Membrana plasmatica</b>: doppio strato di fosfolipidi con proteine; controlla ciò che entra ed esce (ne parliamo nella prossima lezione).</li>
<li><b>Nucleo</b>: contiene il DNA, avvolto a proteine (<i>istoni</i>) a formare la <b>cromatina</b>, che durante la divisione si condensa in cromosomi. È delimitato dall'<b>involucro nucleare</b> (due membrane con pori) e contiene il <b>nucleolo</b>, dove si costruiscono i ribosomi.</li>
<li><b>Ribosomi</b>: costruiscono le proteine leggendo l'RNA messaggero. Non hanno membrana. Sono liberi o attaccati al reticolo.</li>
<li><b>Reticolo endoplasmatico rugoso (RER)</b>: rete di sacculi con ribosomi sulla superficie; produce proteine destinate a essere secrete o inserite nelle membrane.</li>
<li><b>Reticolo endoplasmatico liscio (REL)</b>: senza ribosomi; sintetizza lipidi, demolisce sostanze tossiche (abbondante nel fegato), nelle cellule muscolari accumula calcio.</li>
<li><b>Apparato di Golgi</b> (descritto da Camillo Golgi nel 1898): pile di sacculi che modificano, selezionano e "impacchettano" in vescicole i prodotti del reticolo, spedendoli alla loro destinazione.</li>
<li><b>Lisosomi</b>: vescicole piene di enzimi digestivi, che demoliscono molecole, batteri e organuli vecchi (il "riciclo" della cellula).</li>
<li><b>Mitocondri</b>: la "centrale energetica". Con la <b>respirazione cellulare</b> usano ossigeno per ricavare dal glucosio molta <b>ATP</b>, la moneta energetica della cellula. Hanno doppia membrana (quella interna ripiegata in <b>creste</b>) e un proprio piccolo DNA.</li>
<li><b>Perossisomi</b>: vescicole che demoliscono acidi grassi e neutralizzano il perossido di idrogeno (acqua ossigenata) prodotto dalle reazioni.</li>
<li><b>Citoscheletro</b>: rete di filamenti proteici (microfilamenti, filamenti intermedi, microtubuli) che dà forma alla cellula, permette i movimenti e il trasporto interno.</li>
<li><b>Centrioli</b> (nelle cellule animali): coppia di cilindri di microtubuli che organizzano il fuso durante la divisione.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Riconosci l'organulo: etichetta lo schema",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><ellipse cx="300" cy="150" rx="270" ry="130" fill="#dbeafe" stroke="#1d4ed8" stroke-width="5"/><circle cx="260" cy="140" r="55" fill="#e9d5ff" stroke="#7c3aed" stroke-width="4"/><circle cx="250" cy="135" r="14" fill="#7c3aed"/><ellipse cx="430" cy="100" rx="42" ry="22" fill="#fecaca" stroke="#b91c1c" stroke-width="3"/><path d="M400 100 q10 -10 20 0 q10 10 20 0" fill="none" stroke="#b91c1c" stroke-width="3"/><path d="M360 200 q20 -18 40 0 q20 18 40 0 q20 -18 40 0" fill="none" stroke="#15803d" stroke-width="6"/><path d="M160 90 q30 -25 60 -10 M165 70 q30 -25 60 -10" fill="none" stroke="#0369a1" stroke-width="5"/><circle cx="170" cy="210" r="16" fill="#fde047" stroke="#a16207" stroke-width="3"/></svg>`,
        spots: [
          { x: 260, y: 140, label: "Nucleo" },
          { x: 250, y: 135, label: "Nucleolo" },
          { x: 430, y: 100, label: "Mitocondrio" },
          { x: 400, y: 200, label: "Reticolo endoplasmatico" },
          { x: 190, y: 80, label: "Apparato di Golgi" },
          { x: 170, y: 210, label: "Lisosoma" }
        ]
      },
      caption: "Clicca un punto dello schema e scegli il nome dell'organulo."
    },
    {
      type: "quiz",
      title: "Mini-quiz: la cellula e i suoi organuli",
      questions: [
        { type: "mc", q: "Quale organulo produce la maggior parte dell'ATP nella cellula animale?", options: ["Mitocondrio", "Lisosoma", "Apparato di Golgi"], answer: 0, explain: "La respirazione cellulare avviene nei mitocondri." },
        { type: "tf", q: "Una cellula procariote ha il DNA racchiuso in un nucleo delimitato da membrana.", answer: false, explain: "I procarioti hanno il DNA libero nel citoplasma, nella zona detta nucleoide." },
        { type: "num", q: "Con oculare 10× e obiettivo 20× quanti ingrandimenti totali si ottengono?", answer: 200, unit: "×", explain: "L'ingrandimento è il prodotto: 10 × 20 = 200." }
      ]
    },
    {
      type: "text",
      title: "Cellula animale e cellula vegetale",
      html: `<p>Piante e animali sono entrambi eucarioti e condividono nucleo, mitocondri, reticolo, Golgi. Ma la vita sedentaria e "autotrofa" della pianta richiede strutture in più:</p>
<ul>
<li><b>Parete cellulare</b> di <b>cellulosa</b>, esterna alla membrana: rigida, dà forma e sostegno (il legno è fatto di pareti). Le cellule comunicano tra loro attraverso i <b>plasmodesmi</b>, canali che bucano la parete.</li>
<li><b>Cloroplasti</b>: contengono la <b>clorofilla</b> e fanno la <b>fotosintesi</b>: con la luce trasformano acqua e anidride carbonica in glucosio e ossigeno (6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂). Hanno doppia membrana e un proprio DNA.</li>
<li><b>Vacuolo centrale</b>: una grande sacca (anche l'80-90% del volume) piena di acqua e sostanze; spinge contro la parete, producendo la <b>turgore</b> che tiene dritta una pianta (una piantina senza acqua appassisce: i vacuoli si sgonfiano).</li>
</ul>
<p>La cellula animale ha invece i <b>centrioli</b>, ha lisosomi ben sviluppati, non ha parete e quindi può assumere forme variabili (neuroni, globuli rossi, cellule muscolari) e inglobare particelle. Le cellule dei <b>funghi</b> hanno parete di <b>chitina</b>, ma non cloroplasti.</p>
<table>
<tr><th>Struttura</th><th>Animale</th><th>Vegetale</th></tr>
<tr><td>Nucleo, mitocondri, Golgi, reticolo</td><td>sì</td><td>sì</td></tr>
<tr><td>Parete di cellulosa</td><td>no</td><td>sì</td></tr>
<tr><td>Cloroplasti</td><td>no</td><td>sì (nelle parti verdi)</td></tr>
<tr><td>Vacuolo centrale grande</td><td>no (piccole vescicole)</td><td>sì</td></tr>
<tr><td>Centrioli</td><td>sì</td><td>no (nelle piante superiori)</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Animale, vegetale o entrambe?",
      widget: "classify",
      options: { groups: ["Solo cellula animale", "Solo cellula vegetale", "Entrambe"], items: [
        ["Parete di cellulosa", 1],
        ["Mitocondri", 2],
        ["Cloroplasti", 1],
        ["Centrioli", 0],
        ["Nucleo", 2],
        ["Vacuolo centrale grande", 1],
        ["Apparato di Golgi", 2],
        ["Ribosomi", 2]
      ] },
      caption: "Ricorda: anche le piante hanno mitocondri, perché respirano come tutti gli eucarioti."
    },
    {
      type: "3d",
      title: "Dentro una cellula: i livelli, dall'esterno al nucleo",
      scene: "layers",
      options: { layers: [
        { r: 1, color: "#3b82f6", label: "Membrana plasmatica" },
        { r: 0.9, color: "#93c5fd", label: "Citoplasma con gli organuli" },
        { r: 0.5, color: "#a855f7", label: "Nucleo (involucro nucleare)" },
        { r: 0.2, color: "#f59e0b", label: "Nucleolo" }
      ] },
      caption: "Ruota la sfera: lo spicchio mostra le strutture concentriche di una cellula eucariote (schema semplificato)."
    },
    {
      type: "curiosity",
      title: "I mitocondri sono batteri addomesticati?",
      html: `<p>Mitocondri e cloroplasti hanno doppia membrana, un proprio <b>DNA circolare</b>, ribosomi di tipo batterico e si dividono per conto loro. Nel <b>1967</b> la biologa statunitense <b>Lynn Margulis</b> (all'epoca Lynn Sagan) riprese e sviluppò la <b>teoria dell'endosimbiosi</b>: circa 2 miliardi di anni fa una cellula ospite inglobò un batterio capace di respirare ossigeno, che invece di essere digerito rimase a vivere dentro di essa, fornendo energia in cambio di protezione. Un secondo evento analogo con un cianobatterio fotosintetico portò ai cloroplasti. La teoria fu inizialmente derisa, ma i dati sul DNA l'hanno confermata. Ancora oggi il DNA mitocondriale si eredita (nell'uomo) quasi sempre dalla madre.</p>`
    },
    {
      type: "curiosity",
      title: "Quante cellule hai? E quante ne perdi ogni giorno",
      html: `<p>Le stime più recenti attribuiscono a un adulto di 70 kg circa <b>30-40 mila miliardi</b> (3-4 × 10¹³) di cellule umane, a cui si aggiunge un numero simile di batteri del microbiota intestinale. Le cellule vivono vite molto diverse: quelle del rivestimento dell'intestino durano pochi giorni, i globuli rossi circa 120 giorni (e non hanno nucleo!), mentre molti neuroni della corteccia ci accompagnano per tutta la vita. Ogni secondo il tuo corpo ne rinnova milioni.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la cellula",
      intro: "Se l'elenco di organuli ti sembra una lista da imparare a memoria, prova a cambiare punto di vista.",
      tabs: [
        {
          label: "🏙️ La cellula come città",
          html: `<p>Il <b>nucleo</b> è il municipio con l'archivio delle leggi (DNA). I <b>ribosomi</b> sono i cantieri che costruiscono ciò che serve (proteine), seguendo i progetti trasmessi dall'RNA, come copie dell'archivio. Il <b>reticolo</b> è la rete di strade e magazzini, il <b>Golgi</b> l'ufficio postale che smista e spedisce i pacchi. I <b>mitocondri</b> sono le centrali elettriche, i <b>lisosomi</b> la raccolta differenziata e il riciclaggio, la <b>membrana</b> la dogana e le mura con i controlli, il <b>citoscheletro</b> impalcature e binari. Nelle piante, i <b>cloroplasti</b> sono i pannelli solari e la <b>parete</b> un muro di cinta in cemento.</p>`
        },
        {
          label: "📐 Il confronto con le dimensioni",
          html: `<p>Se un batterio fosse una persona alta 1,7 m, una tipica cellula eucariote sarebbe alta come un palazzo di 5-10 piani (circa 17-170 m) e un mitocondrio sarebbe grande più o meno come una persona. In effetti un mitocondrio misura circa 1-2 µm, cioè quanto un batterio: un indizio dell'origine "batterica" che abbiamo visto. Un virus (30-300 nm) sarebbe invece un oggetto grande come un bambino o un cane in confronto al batterio-gigante.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><line x1="40" y1="250" x2="560" y2="250" stroke="#334155" stroke-width="3"/><circle cx="80" cy="250" r="5" fill="#16a34a"/><text x="80" y="230" font-size="14" fill="#166534" text-anchor="middle" font-weight="bold">virus</text><text x="80" y="275" font-size="14" fill="#334155" text-anchor="middle">0,1 µm</text><circle cx="190" cy="250" r="9" fill="#f59e0b"/><text x="190" y="225" font-size="14" fill="#92400e" text-anchor="middle" font-weight="bold">batterio</text><text x="190" y="275" font-size="14" fill="#334155" text-anchor="middle">2 µm</text><circle cx="330" cy="250" r="22" fill="#60a5fa"/><text x="330" y="205" font-size="14" fill="#1e40af" text-anchor="middle" font-weight="bold">globulo rosso 7 µm</text><text x="330" y="275" font-size="14" fill="#334155" text-anchor="middle">7 µm</text><circle cx="470" cy="215" r="50" fill="#c4b5fd"/><text x="470" y="220" font-size="14" fill="#4c1d95" text-anchor="middle" font-weight="bold">cellula</text><text x="470" y="275" font-size="14" fill="#334155" text-anchor="middle">~50 µm</text></svg>`
        },
        {
          label: "🧩 Una classificazione a schema",
          html: `<p>Per orientarti, usa tre domande a cascata: <b>1)</b> Il DNA è dentro un nucleo? No → procariote. Sì → eucariote. <b>2)</b> C'è la parete di cellulosa? No → animale (o fungo/protista). Sì → vegetale. <b>3)</b> Ci sono cloroplasti? Sì → capace di fotosintesi (pianta o alga). Con tre domande si distinguono i grandi modelli cellulari.</p>`
        }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul><li>Teoria cellulare: tutti i viventi sono cellule, la cellula è l'unità della vita, ogni cellula viene da un'altra cellula.</li><li>Procariote: niente nucleo, niente organuli con membrana. Eucariote: nucleo e organuli.</li><li>Mitocondri: energia (ATP). Cloroplasti: fotosintesi. Ribosomi: proteine. Golgi: smistamento. Lisosomi: digestione.</li><li>Cellula vegetale: in più parete di cellulosa, cloroplasti, vacuolo grande.</li></ul>`
    },
    {
      type: "conceptMap",
      title: "Mappa della cellula: tocca i nodi e scopri il perché",
      nodes: [
        { id: "teoria", label: "Teoria cellulare", x: 50, y: 6, color: "#3b82f6", html: "Ogni vivente è fatto di cellule e ogni cellula nasce da una cellula.", why: "Nasce dal microscopio: senza lenti migliori Hooke (1665) e Leeuwenhoek non avrebbero visto nulla. Schleiden e Schwann (1838-39) unificarono piante e animali; Virchow (1855) escluse la generazione spontanea, confermata dagli esperimenti di Pasteur (1860-65)." },
        { id: "procarioti", label: "Procarioti", x: 18, y: 32, color: "#f59e0b", html: "Batteri e Archei: DNA nel nucleoide, nessun organulo con membrana.", why: "Sono le cellule più antiche e semplici. Carl Woese (1977), confrontando l'RNA ribosomiale, scoprì che gli Archei sono un gruppo distinto dai batteri: la vita si divide in tre domini." },
        { id: "eucarioti", label: "Eucarioti", x: 82, y: 32, color: "#a855f7", html: "Nucleo e organuli: animali, piante, funghi, protisti.", why: "Si pensa derivino da una cellula ospite che inglobò altri procarioti: i compartimenti interni permettono reazioni specializzate e cellule più grandi." },
        { id: "organuli", label: "Organuli", x: 82, y: 58, color: "#22c55e", html: "Nucleo, mitocondri, reticolo, Golgi, lisosomi, cloroplasti...", why: "Furono scoperti con il microscopio elettronico (anni Trenta-Cinquanta del Novecento) e con la centrifugazione, che separa gli organuli per peso e ne permette lo studio. Golgi vide il suo apparato già nel 1898, con una colorazione a sali d'argento." },
        { id: "endosimbiosi", label: "Endosimbiosi", x: 50, y: 82, color: "#ef4444", html: "Mitocondri e cloroplasti derivano da batteri inglobati.", why: "Lynn Margulis (1967) mise insieme gli indizi: DNA proprio, doppia membrana, ribosomi simili a quelli batterici, divisione indipendente. Il confronto delle sequenze di DNA ha mostrato che i mitocondri sono imparentati con alfaproteobatteri e i cloroplasti con i cianobatteri." },
        { id: "vegetale", label: "Cellula vegetale", x: 18, y: 58, color: "#14b8a6", html: "Parete, cloroplasti, vacuolo centrale.", why: "Una pianta non può spostarsi per cercare cibo, ma può costruirselo con la luce: da qui i cloroplasti; poiché non ha scheletro, sostiene il proprio corpo con pareti rigide e turgore." },
        { id: "sv", label: "Rapporto S/V", x: 50, y: 40, color: "#06b6d4", html: "Superficie e volume limitano le dimensioni cellulari.", why: "Il volume cresce con il cubo del lato, la superficie con il quadrato: è una questione di pura geometria, e spiega perché i corpi grandi sono fatti di tante cellule piccole." }
      ],
      edges: [
        ["teoria", "procarioti", "vale per"],
        ["teoria", "eucarioti", "vale per"],
        ["eucarioti", "organuli", "possiedono"],
        ["organuli", "endosimbiosi", "origine di alcuni"],
        ["eucarioti", "vegetale", "include"],
        ["sv", "eucarioti", "limita la taglia"],
        ["procarioti", "endosimbiosi", "ne sono i protagonisti"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: confronti",
      questions: [
        { type: "mc", q: "Quale struttura è presente nella cellula vegetale ma non in quella animale?", options: ["Mitocondri", "Parete di cellulosa", "Ribosomi"], answer: 1, explain: "La parete di cellulosa, insieme a cloroplasti e vacuolo centrale, caratterizza le cellule vegetali." },
        { type: "order", q: "Metti in ordine di grandezza crescente.", items: ["Virus", "Batterio", "Globulo rosso", "Uovo di gallina"], explain: "Virus (decine-centinaia di nm), batterio (1-5 µm), globulo rosso (7 µm), tuorlo dell'uovo (circa 3 cm)." },
        { type: "tf", q: "Un cubo di 100 µm di lato ha un rapporto superficie/volume maggiore di uno di 10 µm di lato.", answer: false, explain: "S/V = 6/l: più il cubo è grande, più il rapporto diminuisce (0,06 contro 0,6)." }
      ]
    }
  ],
  glossary: [
    { t: "Cellula", d: "Unità fondamentale, strutturale e funzionale, di tutti gli esseri viventi." },
    { t: "Procariote", d: "Cellula senza nucleo delimitato da membrana (batteri e archei)." },
    { t: "Eucariote", d: "Cellula con nucleo e organuli delimitati da membrane." },
    { t: "Organulo", d: "Compartimento specializzato all'interno della cellula." },
    { t: "Nucleo", d: "Organulo che contiene il DNA della cellula eucariote." },
    { t: "Mitocondrio", d: "Organulo in cui si produce la maggior parte dell'ATP con la respirazione cellulare." },
    { t: "Cloroplasto", d: "Organulo delle cellule vegetali in cui avviene la fotosintesi." },
    { t: "Ribosoma", d: "Struttura che costruisce le proteine leggendo l'RNA messaggero." },
    { t: "Apparato di Golgi", d: "Organulo che modifica e smista le sostanze prodotte dalla cellula." },
    { t: "Lisosoma", d: "Vescicola con enzimi digestivi che demolisce molecole e organuli vecchi." },
    { t: "Parete cellulare", d: "Rivestimento rigido esterno alla membrana di piante, funghi, batteri." },
    { t: "ATP", d: "Molecola che immagazzina e trasferisce l'energia nelle cellule." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Chi pubblicò nel 1665 le prime osservazioni delle \"cellule\" nel sughero?", options: ["Robert Hooke", "Louis Pasteur", "Charles Darwin"], answer: 0, explain: "Hooke, nella Micrographia, descrisse le piccole cavità del sughero e le chiamò cells." },
      { type: "tf", q: "Secondo la teoria cellulare, ogni cellula deriva da un'altra cellula preesistente.", answer: true, explain: "È il principio di Virchow: omnis cellula e cellula." },
      { type: "mc", q: "Quale caratteristica distingue una cellula eucariote da una procariote?", options: ["Presenza del DNA", "Presenza di un nucleo delimitato da membrana", "Presenza di ribosomi"], answer: 1, explain: "DNA e ribosomi ci sono in entrambe; il nucleo con membrana è solo negli eucarioti." },
      { type: "mc", q: "Dove avviene la fotosintesi?", options: ["Nei mitocondri", "Nei lisosomi", "Nei cloroplasti"], answer: 2, explain: "I cloroplasti contengono la clorofilla che cattura l'energia luminosa." },
      { type: "num", q: "Al microscopio con oculare 10× e obiettivo 40× una cellula appare larga 1,2 cm (12 000 µm). Quanto è larga in realtà, in µm?", answer: 30, unit: "µm", explain: "Ingrandimento = 10 × 40 = 400; 12 000 ÷ 400 = 30 µm." },
      { type: "text", q: "Come si chiama l'organulo che funziona da centrale energetica della cellula?", answer: ["mitocondrio", "mitocondri", "il mitocondrio"], explain: "Nei mitocondri la respirazione cellulare produce ATP." },
      { type: "tf", q: "Le cellule vegetali non hanno mitocondri perché producono energia con la fotosintesi.", answer: false, explain: "Anche le piante respirano: i mitocondri ci sono, e usano il glucosio prodotto dai cloroplasti." },
      { type: "order", q: "Ordina il percorso di una proteina destinata a essere secreta.", items: ["Sintesi sui ribosomi del RER", "Passaggio nel reticolo", "Modifica nell'apparato di Golgi", "Uscita in una vescicola"], explain: "Ribosomi del RER, interno del reticolo, Golgi che la modifica e la smista, poi vescicola verso la membrana." },
      { type: "mc", q: "Perché una cellula non può crescere indefinitamente?", options: ["Perché il rapporto superficie/volume diminuisce e gli scambi diventano insufficienti", "Perché il nucleo non può ingrandirsi", "Perché le cellule non hanno energia"], answer: 0, explain: "Il volume cresce più in fretta della superficie attraverso cui avvengono gli scambi." },
      { type: "mc", q: "Che cosa sostiene la teoria dell'endosimbiosi?", options: ["I mitocondri derivano da batteri inglobati da una cellula ospite", "Il nucleo deriva da un virus", "Le piante derivano dai funghi"], answer: 0, explain: "Proposta da Lynn Margulis nel 1967, è sostenuta da DNA, doppia membrana e ribosomi dei mitocondri." }
    ]
  }
});
