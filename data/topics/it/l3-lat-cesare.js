TOPIC('it', {
  id: `l3-lat-cesare`,
  title: `Giulio Cesare`,
  intro: `Il generale che ha conquistato la Gallia è anche l'autore del libro che racconta la conquista. <b>Gaio Giulio Cesare</b> (100-44 a.C.) è forse l'unico uomo politico della storia che ha scritto la propria storia in prosa limpidissima e l'ha trasformata in <b>propaganda</b> di altissimo livello. I suoi <i>Commentarii</i> sono il testo latino con cui gli studenti cominciano a leggere gli autori: frasi lineari, narrazione rapida, tono "oggettivo". Ma proprio qui sta il bello: Cesare parla di sé in <b>terza persona</b> ("Caesar...") e così sembra un cronista neutrale, mentre costruisce il proprio ritratto di condottiero necessario. Questa lezione ti insegna a leggere i suoi testi sia come <b>racconto storico</b> sia come <b>messaggio politico</b>. ⚔️`,
  minutes: 55,
  sections: [
    {
      type: `text`, title: `1. L'uomo e il contesto`,
      html: `<p><b>Gaio Giulio Cesare</b> nacque a Roma il <b>12 o 13 luglio del 100 a.C.</b> (alcune fonti indicano il 102) da una famiglia patrizia, la <i>gens Iulia</i>, che si diceva discendente da Iulo, figlio di Enea, e quindi dalla dea Venere. Politicamente si schierò con i <b>populares</b> (la parte che cercava il favore del popolo), imparentato con Gaio Mario (sua zia Giulia ne era la moglie).</p>
<p>Le tappe principali:</p>
<ul>
<li><b>60 a.C.</b>: primo triumvirato, accordo privato con <b>Pompeo</b> e <b>Crasso</b>;</li>
<li><b>59 a.C.</b>: console; poi proconsole nelle Gallie (Cisalpina, Narbonese, Illirico) per cinque anni, prorogati;</li>
<li><b>58-50 a.C.</b>: conquista della Gallia;</li>
<li><b>49 a.C.</b>: attraversa il <b>Rubicone</b> e scatena la guerra civile contro Pompeo e il senato;</li>
<li><b>48 a.C.</b>: batte Pompeo a <b>Farsàlo</b> (Grecia); Pompeo fugge in Egitto e viene assassinato;</li>
<li><b>46-44 a.C.</b>: dittatore, riforme (il <b>calendario giuliano</b>, 45 a.C.);</li>
<li><b>15 marzo 44 a.C.</b> (le Idi di marzo): assassinato in senato da congiurati guidati da Bruto e Cassio.</li>
</ul>
<p>Fu anche un <b>oratore</b> di prim'ordine (Cicerone lo elogiò), un grammatico (scrisse <i>De analogia</i>, sulla lingua), un poeta minore; ma sono i <i>Commentarii</i> a restare.</p>`
    },
    {
      type: `widget`, title: `Cronologia di Cesare`,
      widget: `timeline`,
      options: {
        events: [
          { year: -100, label: `Nascita`, icon: `👶` },
          { year: -60, label: `Primo triumvirato`, icon: `🤝` },
          { year: -58, label: `Inizio guerra in Gallia`, icon: `⚔️` },
          { year: -52, label: `Alesia: Vercingetorige si arrende`, icon: `🏰` },
          { year: -49, label: `Rubicone`, icon: `🌊` },
          { year: -48, label: `Farsalo`, icon: `🛡️` },
          { year: -44, label: `Idi di marzo`, icon: `🗡️` }
        ],
        unit: `anni`
      },
      caption: `Dalla nascita alla morte: tutto in 56 anni.`
    },
    {
      type: `text`, title: `2. I Commentarii: che cosa sono`,
      html: `<p>Il termine <i>commentarii</i> ("appunti, memorie", da <i>commentari</i>, "riflettere") indicava originariamente <b>note grezze</b>, materiale per gli storici. Cesare dichiara di scrivere solo questo, ma in realtà li compone con grande arte; Cicerone nel <i>Brutus</i> (262) scrive che sono "<b>nudi, rectos et venusti</b>", "nudi, diritti e graziosi" (privi di ornamenti), e che hanno tolto agli storici di professione la voglia di riscrivere gli stessi fatti.</p>
<p>Le opere sono due:</p>
<table>
<tr><th>Opera</th><th>Contenuto</th><th>Struttura</th></tr>
<tr><td><b>De bello Gallico</b></td><td>conquista della Gallia, 58-52 a.C. (più eventi del 51 nell'VIII libro)</td><td>7 libri di Cesare (uno per anno); l'<b>VIII</b> è di <b>Aulo Irzio</b>, suo luogotenente</td></tr>
<tr><td><b>De bello civili</b></td><td>guerra civile contro Pompeo, 49-48 a.C.</td><td>3 libri; incompleto (si interrompe in Egitto, nel 48)</td></tr>
</table>
<p>Il <i>De bello Gallico</i> si apre con una descrizione celebre: <b>"Gallia est omnis divisa in partes tres, quarum unam incolunt Belgae, aliam Aquitani, tertiam qui ipsorum lingua Celtae, nostra Galli appellantur"</b> ("La Gallia nel suo complesso è divisa in tre parti: una la abitano i Belgi, un'altra gli Aquitani, la terza quelli che nella loro lingua si chiamano Celti, nella nostra Galli"). Cesare dice "i Galli"; in realtà ha già in mente tutto lo spazio da conquistare.</p>`
    },
    {
      type: `svg`, title: `La Gallia di Cesare`,
      caption: `Le tre parti della Gallia (Belgi, Celti, Aquitani) e la Provincia romana a sud-est.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eff6ff"/>
<text x="300" y="26" font-size="19" font-weight="bold" fill="#1e3a8a" text-anchor="middle">GALLIA EST OMNIS DIVISA IN PARTES TRES</text>
<polygon points="260,50 480,50 500,120 280,110" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<text x="385" y="86" font-size="17" font-weight="bold" fill="#78350f" text-anchor="middle">BELGAE</text>
<polygon points="150,115 280,110 500,120 480,200 330,230 180,200" fill="#bbf7d0" stroke="#166534" stroke-width="3"/>
<text x="330" y="168" font-size="17" font-weight="bold" fill="#14532d" text-anchor="middle">CELTAE (GALLI)</text>
<polygon points="110,200 180,200 330,230 340,275 120,275" fill="#fecaca" stroke="#991b1b" stroke-width="3"/>
<text x="225" y="255" font-size="17" font-weight="bold" fill="#7f1d1d" text-anchor="middle">AQUITANI</text>
<polygon points="330,230 480,200 570,230 560,275 340,275" fill="#e9d5ff" stroke="#6b21a8" stroke-width="3"/>
<text x="450" y="255" font-size="15" font-weight="bold" fill="#4c1d95" text-anchor="middle">PROVINCIA</text>
<text x="430" y="40" font-size="14" fill="#334155">Reno ➜</text>
<text x="60" y="130" font-size="14" fill="#334155" text-anchor="middle">Oceano</text>
<text x="60" y="150" font-size="14" fill="#334155" text-anchor="middle">Atlantico</text>
<text x="570" y="90" font-size="14" fill="#334155" text-anchor="end">Germani</text>
</svg>`
    },
    {
      type: `remember`, title: `Lo stile di Cesare`,
      html: `<ul>
<li><b>Terza persona</b>: Cesare scrive "Caesar" e non "io": effetto di oggettività, presa di distanza, quasi impersonalità.</li>
<li><b>Sintassi lineare</b>: periodi con ablativi assoluti, participi, subordinate esplicite; pochi aggettivi e metafore. Ideale per chi studia latino.</li>
<li><b>Narrazione rapida</b>: frasi brevi e azioni concatenate, vocabolario concreto, tecnico (militare).</li>
<li><b>Excursus etnografici</b>: Galli (VI), Germani, druidi, Britannia, con digressioni sui costumi dei popoli.</li>
<li><b>Discorsi indiretti</b>: Cesare riporta i discorsi con l'<i>oratio obliqua</i> (accusativo + infinito), senza dare la parola direttamente ai nemici.</li>
<li><b>Propaganda</b>: rappresenta le guerre come <b>difensive</b> o necessarie (aiuto agli alleati, minaccia germanica), i Galli come traditori, i nemici come barbari, sé stesso come condottiero previdente e clemente.</li>
</ul>`
    },
    {
      type: `example`, title: `Un episodio: gli Elvezi e Ariovisto`,
      html: `<p>Nel <b>58 a.C.</b> (libro I) gli <b>Elvezi</b>, popolo della Svizzera attuale, guidati da Orgetorige, decidono di migrare verso l'Occidente della Gallia. Cesare, console l'anno prima e ora governatore, si oppone: presenta la migrazione come una <b>minaccia per la Provincia romana</b>. Li affronta a <b>Bibracte</b> e li costringe a tornare indietro. Poi interviene contro il re germanico <b>Ariovisto</b>, che aveva occupato terre degli Edui, alleati di Roma, e lo sconfigge presso il Reno (nell'attuale Alsazia). Nel racconto Cesare descrive il discorso con cui calma i soldati spaventati dai Germani e, con un colpo di scena psicologico, afferma che anche se nessuno lo seguirà "andrà solo con la decima legione". È un brano ideale per capire propaganda e capacità narrativa.</p>`
    },
    {
      type: `example`, title: `Alesia (52 a.C.)`,
      html: `<p>L'anno 52 a.C. è l'anno della grande rivolta di <b>Vercingetorige</b>, giovane capo degli Arverni. Dopo la sconfitta a Gergovia, Cesare lo assedia nell'oppidum di <b>Alesia</b> (Borgogna). I Romani costruiscono <b>due linee di fortificazioni concentriche</b>: una interna di circa 16 km contro gli assediati, una esterna di circa 21 km contro l'esercito di soccorso gallico (decine di migliaia di uomini). Vinti sia gli assediati sia i soccorritori, Vercingetorige si arrende. Fu portato a Roma, tenuto prigioniero per sei anni e giustiziato dopo il trionfo di Cesare (46 a.C.). La guerra gallica era finita. Cesare ha lasciato nei <i>Commentarii</i> una descrizione tecnica accurata delle fortificazioni, ancora oggi studiata dagli archeologi (gli scavi di Alise-Sainte-Reine l'hanno confermata).</p>`
    },
    {
      type: `3d`, title: `Le campagne di Cesare nello spazio e nel tempo`,
      scene: `spacetime`,
      options: {
        lat: [30, 56], lon: [-6, 32], years: [-60, -44],
        places: [
          { lat: 41.9, lon: 12.5, label: `Roma` },
          { lat: 48.9, lon: 2.3, label: `Lutetia (Parigi)` }
        ],
        events: [
          { id: `elv`, lat: 46.9, lon: 4.3, year: -58, label: `Elvezi e Ariovisto`, html: `Cesare ferma la migrazione degli Elvezi a Bibracte e sconfigge Ariovisto presso il Reno.` },
          { id: `bri`, lat: 51.1, lon: 1.4, year: -55, label: `Prima spedizione in Britannia`, html: `Cesare sbarca presso Dover; dopo un anno la ripete con forze maggiori.`, causes: [`elv`] },
          { id: `ale`, lat: 47.5, lon: 4.5, year: -52, label: `Alesia`, html: `Vercingetorige si arrende: la Gallia è conquistata.`, causes: [`bri`] },
          { id: `rub`, lat: 44.1, lon: 12.4, year: -49, label: `Rubicone`, html: `Cesare passa il fiume con l'esercito: è la guerra civile.`, causes: [`ale`] },
          { id: `far`, lat: 39.3, lon: 22.4, year: -48, label: `Farsalo`, html: `Vittoria su Pompeo in Tessaglia.`, causes: [`rub`] },
          { id: `ide`, lat: 41.9, lon: 12.5, year: -44, label: `Idi di marzo`, html: `Cesare è assassinato a Roma.`, causes: [`far`] }
        ]
      },
      caption: `Ruota la mappa e sali nel tempo: la base è lo spazio, l'altezza è l'anno.`
    },
    {
      type: `decision`, title: `Gennaio del 49 a.C.: attraversare il Rubicone?`,
      html: `<p>Il senato, guidato dai pompeiani e da Catone, gli ha intimato di sciogliere l'esercito e tornare a Roma da privato cittadino, dove rischia un processo. Cesare è con una sola legione a <b>Ravenna</b>: il <b>Rubicone</b> è il confine della sua provincia (la Cisalpina) con l'Italia: entrarvi in armi è illegale e significa guerra civile.</p>`,
      question: `Tu che cosa avresti fatto?`,
      options: [
        { label: `Obbedire, sciogliere l'esercito e andare a Roma`, outcome: `Avrebbe perso l'immunità che gli dava il comando: i nemici avrebbero potuto processarlo e farlo condannare. Avrebbe evitato la guerra, ma rischiato la carriera e forse la vita.` },
        { label: `Trattare ancora, aspettare e prendere tempo`, outcome: `Aveva già provato: le trattative erano fallite. Il tempo giocava per Pompeo, che avrebbe armato nuove legioni.` },
        { label: `Passare il Rubicone con l'esercito`, outcome: `Rapidità e sorpresa: Pompeo e il senato lasciarono Roma. In due mesi Cesare controllò l'Italia, ma aprì la guerra civile.` }
      ],
      answer: 2,
      explain: `Cesare passò il fiume nella notte tra il 10 e l'11 gennaio del 49 a.C. (data tradizionale; il calendario precedente alla riforma era sfasato). Svetonio gli attribuisce la frase "alea iacta est" ("il dado è tratto"); Plutarco la riferisce in greco. La guerra civile durò anni: Cesare vinse a Farsalo (48), a Tapso (46) e a Munda (45), ma pagò con la vita: fu ucciso nelle Idi di marzo del 44.`
    },
    {
      type: `quiz`, title: `Mini-quiz: Cesare`,
      questions: [
        { type: `mc`, q: `Quanti libri ha il De bello Gallico scritti da Cesare?`, options: [`7`, `8`, `3`], answer: 0, explain: `Sette libri di Cesare; l'ottavo è di Irzio.` },
        { type: `tf`, q: `Cesare scrive i Commentarii in prima persona.`, answer: false, explain: `Usa la terza persona: "Caesar".` },
        { type: `mc`, q: `In quale anno si arrende Vercingetorige?`, options: [`52 a.C.`, `58 a.C.`, `44 a.C.`], answer: 0, explain: `Dopo l'assedio di Alesia.` },
        { type: `text`, q: `Come si chiama il fiume attraversato nel 49 a.C.? (una parola)`, answer: [`rubicone`], explain: `Confine tra Gallia Cisalpina e Italia.` }
      ]
    },
    {
      type: `text`, title: `3. Il De bello civili: la guerra tra romani`,
      html: `<p>Il <i>De bello civili</i> racconta la guerra civile in 3 libri (49-48 a.C.): I libro, Spagna e Italia; II, Marsiglia e Africa; III, Farsalo e l'Egitto. Cesare doveva giustificarsi: aveva portato l'esercito contro Roma. Quindi:</p>
<ul>
<li>presenta Pompeo e i senatori come <b>ostinati</b> e responsabili della guerra;</li>
<li>sottolinea la propria <b>clemenza</b> (<i>clementia</i>), perdonando i nemici catturati, come a Corfinio;</li>
<li>costruisce un'immagine di sé come <b>difensore della legalità e dei diritti dei tribuni</b> (che erano stati cacciati da Roma);</li>
<li>riduce ogni emozione, ogni cruda descrizione dei massacri.</li>
</ul>
<p>Anche qui la prosa è sobria, ma più amara: la guerra tra concittadini (<i>bellum civile</i>) è una tragedia, e dopo Farsalo Cesare ordina ai suoi di risparmiare i concittadini che si arrendono. Dopo questo libro, l'opera si interrompe nel 48 a.C. in Egitto; altri testi di collaboratori continuano la storia (<i>Bellum Alexandrinum, Africum, Hispaniense</i>).</p>`
    },
    {
      type: `text`, title: `4. Scrivere per vincere: la politica nei Commentarii`,
      html: `<p>Gli storici si chiedono: perché Cesare scrive? Le risposte tradizionali:</p>
<ul>
<li><b>Conto alla patria</b>: ogni anno mandava a Roma un resoconto, che veniva letto in senato e dai cittadini. Fa conoscere le sue imprese, rafforza la sua fama contro i rivali;</li>
<li><b>Giustificazione</b>: dimostrare che le guerre erano legittime. Nel I libro presenta come "casus belli" la minaccia degli Elvezi e dei Germani; nel VII, i Galli si ribellano per "tradimento" e non per libertà;</li>
<li><b>Memoria</b>: lasciare ai posteri la versione ufficiale. Per due millenni, quello che sappiamo della conquista della Gallia viene da lui: <b>chi scrive la storia vince due volte</b>.</li>
</ul>
<p>Eppure c'è una vena di sincerità: Cesare descrive i suoi errori tattici (come l'assalto a Gergovia) e ammette la disfatta. Anche i Galli compaiono con tratti nobili: Vercingetorige parla davanti a Cesare con dignità, presentandosi come difensore della libertà (VII, 89).</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… "Veni, vidi, vici" non è nei Commentarii?`,
      html: `<p>La celebre frase <b>"Veni, vidi, vici"</b> ("Venni, vidi, vinsi") è attribuita a Cesare da Plutarco e Svetonio, dopo la vittoria rapidissima sul re Farnace del Ponto a <b>Zela</b> (47 a.C.). Non è nei Commentarii ma nel trionfo: i cartelli del corteo mostravano la scritta. Come la frase "alea iacta est" (il dado è tratto) per il Rubicone, è una sintesi che ha conquistato la cultura popolare. Anche il "Tu quoque, Brute?" è una formula tardiva (Shakespeare): Svetonio riporta, al massimo, la frase greca "anche tu, figlio mio?" riferita come ipotesi.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… Cesare ha lasciato parole nel nostro calendario?`,
      html: `<p>Nel 46 a.C. Cesare, aiutato dall'astronomo alessandrino Sosigene, riformò il calendario: nacque il <b>calendario giuliano</b> con l'anno di 365 giorni e il bisestile ogni quattro anni. Il mese <i>Quintilis</i> fu rinominato <b>Iulius</b> (<b>luglio</b>) in suo onore. Il calendario giuliano restò in uso fino al 1582, quando papa Gregorio XIII lo corresse con il calendario gregoriano. E ancora: la parola <b>"zar"</b> russo e <b>"kaiser"</b> tedesco derivano dal suo cognome <i>Caesar</i>: l'imperatore è "il Cesare".</p>`
    },
    {
      type: `widget`, title: `Allenamento: opera e contenuto`,
      widget: `match`,
      options: {
        pairs: [
          [`De bello Gallico`, `conquista della Gallia, 58-52 a.C.`],
          [`De bello civili`, `guerra civile contro Pompeo`],
          [`Libro VIII del Gallico`, `scritto da Aulo Irzio`],
          [`Alesia`, `assedio e resa di Vercingetorige`],
          [`Farsalo`, `vittoria su Pompeo, 48 a.C.`],
          [`Calendario giuliano`, `riforma del 46-45 a.C.`]
        ]
      },
      caption: `Abbina ogni elemento al suo contenuto.`
    },
    {
      type: `alternatives`, title: `Altri modi per leggere Cesare`,
      intro: `Cesare è un autore da "usare": ecco tre approcci.`,
      tabs: [
        {
          label: `🧭 Come un reportage di guerra`,
          html: `<p>Leggi il <i>De bello Gallico</i> come il rapporto di un inviato: ogni libro = un anno di campagna: <b>chi</b> sono i nemici, <b>dove</b> si combatte, <b>come</b> procede l'esercito, <b>che cosa</b> decide Cesare. Segna sulla carta i luoghi (Bibracte, Alesia, Reno, Britannia): ti accorgerai che la narrazione segue le linee di marcia.</p>`
        },
        {
          label: `🕵️ Come un caso di propaganda`,
          html: `<p>Chiediti sempre: <b>chi parla, a chi, per ottenere che cosa?</b> Cesare scrive per i Romani, di cui vuole il consenso. Nota dove usa verbi come <i>coactus</i> ("costretto"), <i>iniuria</i> ("offesa") o <i>perfidia</i> ("tradimento"): servono a dare ragione a Roma. Confrontalo con fonti diverse (Cicerone, Plutarco, archeologia).</p>`
        },
        {
          label: `✏️ Come laboratorio di sintassi`,
          html: `<p>Cesare è l'autore ideale per allenare la <b>sintassi</b>: nelle sue pagine trovi ablativi assoluti, participi congiunti, gerundivi, accusativo con infinito, oratio obliqua con il congiuntivo. Prendi un paragrafo, sottolinea il verbo reggente e le subordinate, costruisci uno schema ad albero: la sua prosa ordinata si lascia "smontare" meglio di quella di Cicerone.</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa dell'opera di Cesare`,
      nodes: [
        { id: `ces`, label: `Cesare`, x: 50, y: 8, color: `#a855f7`, html: `Generale, politico, scrittore (100-44 a.C.).`, why: `Il suo percorso mostra la crisi della Repubblica: un singolo uomo con un esercito fedele diventa più forte delle istituzioni. Scrive per spiegare e giustificare questa forza.` },
        { id: `gal`, label: `De bello Gallico`, x: 20, y: 42, color: `#f59e0b`, html: `7 libri (58-52), un libro VIII di Irzio.`, why: `Racconta la conquista della Gallia come necessità difensiva di Roma. Cesare ottiene gloria, ricchezza e un esercito fedele.` },
        { id: `civ`, label: `De bello civili`, x: 50, y: 42, color: `#16a34a`, html: `3 libri sulla guerra con Pompeo.`, why: `Serve a dimostrare che Cesare non voleva la guerra e che i nemici ne sono responsabili. Mette in luce la clementia.` },
        { id: `sty`, label: `Stile`, x: 80, y: 42, color: `#3b82f6`, html: `Terza persona, linearità, lessico tecnico.`, why: `La scelta di apparire "senza ornamenti" è un artificio: la semplicità rende credibile il racconto e nasconde l'interpretazione.` },
        { id: `pol`, label: `Propaganda`, x: 32, y: 78, color: `#ef4444`, html: `Guerre difensive, nemici barbari, Cesare previdente e clemente.`, why: `A Roma conta chi ha il consenso: il racconto delle vittorie serve a mantenere il potere e a prevenire i processi dei rivali.` },
        { id: `rep`, label: `Eredità`, x: 70, y: 78, color: `#06b6d4`, html: `Calendario, titolo "Cesare", modello di prosa.`, why: `La sua lingua sarà modello di purezza per secoli; il suo nome diventa titolo imperiale.` }
      ],
      edges: [
        [`ces`, `gal`, `scrive`], [`ces`, `civ`, `scrive`], [`gal`, `sty`, ``], [`civ`, `sty`, ``], [`gal`, `pol`, `serve a`], [`civ`, `pol`, `serve a`], [`ces`, `rep`, ``]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: stile e contenuti`,
      questions: [
        { type: `mc`, q: `Chi scrisse l'ottavo libro del De bello Gallico?`, options: [`Aulo Irzio`, `Pompeo`, `Cicerone`], answer: 0, explain: `Luogotenente di Cesare.` },
        { type: `tf`, q: `Cesare fu pugnalato nelle Idi di marzo del 44 a.C.`, answer: true, explain: `15 marzo 44 a.C., in senato.` },
        { type: `mc`, q: `Quale famoso giudizio dà Cicerone sui Commentarii?`, options: [`nudi, diritti e graziosi`, `lunghi e noiosi`, `ricchi di ornamenti`], answer: 0, explain: `Brutus 262.` },
        { type: `text`, q: `Quale popolo guidato da Orgetorige tentò la migrazione nel 58 a.C.? (una parola)`, answer: [`elvezi`, `gli elvezi`], explain: `Gli Elvezi.` }
      ]
    }
  ],
  glossary: [
    { t: `Commentarii`, d: `"Memorie, appunti": il nome delle opere di Cesare.` },
    { t: `Populares`, d: `Fazione politica romana che cercava l'appoggio del popolo.` },
    { t: `Triumvirato`, d: `Accordo privato tra tre uomini potenti (Cesare, Pompeo, Crasso).` },
    { t: `Rubicone`, d: `Fiume confine tra Gallia Cisalpina e Italia: attraversarlo in armi (49 a.C.) significò guerra civile.` },
    { t: `Oratio obliqua`, d: `Discorso indiretto: accusativo + infinito e congiuntivo.` },
    { t: `Clementia`, d: `Clemenza verso i vinti: virtù di Cesare nel De bello civili.` },
    { t: `Oppidum`, d: `Centro fortificato dei Galli.` },
    { t: `Excursus`, d: `Digressione descrittiva (es. sui Galli, sui Germani).` },
    { t: `Casus belli`, d: `Motivo che giustifica la guerra.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Con quale frase inizia il De bello Gallico?`, options: [`Gallia est omnis divisa in partes tres`, `Arma virumque cano`, `Quo usque tandem`], answer: 0, explain: `Incipit celebre.` },
      { type: `mc`, q: `Quali sono le tre parti della Gallia secondo Cesare?`, options: [`Belgi, Aquitani e Celti (Galli)`, `Elvezi, Germani e Britanni`, `Galli, Iberi e Liguri`], answer: 0, explain: `Belgae, Aquitani, Celtae.` },
      { type: `tf`, q: `L'ottavo libro del De bello Gallico è di Cesare.`, answer: false, explain: `È di Aulo Irzio.` },
      { type: `text`, q: `Come si chiama il capo gallo che si arrese ad Alesia? (un nome)`, answer: [`vercingetorige`], explain: `Vercingetorige, degli Arverni.` },
      { type: `mc`, q: `Perché Cesare scrive in terza persona?`, options: [`per dare impressione di oggettività`, `perché non sapeva usare la prima persona`, `per copiare Omero`], answer: 0, explain: `Strategia retorica.` },
      { type: `mc`, q: `Dove fu sconfitto Pompeo nel 48 a.C.?`, options: [`Farsalo`, `Munda`, `Alesia`], answer: 0, explain: `In Tessaglia.` },
      { type: `mc`, q: `Quale riforma compì Cesare nel 46-45 a.C.?`, options: [`il calendario giuliano`, `la moneta d'argento`, `la costituzione repubblicana`], answer: 0, explain: `Con Sosigene.` },
      { type: `tf`, q: `Il De bello civili è un'opera completa, che racconta l'intera guerra civile fino al 44 a.C.`, answer: false, explain: `Si interrompe nel 48 a.C., in Egitto.` },
      { type: `mc`, q: `Che cosa significa "clementia" per Cesare?`, options: [`perdonare i nemici vinti`, `punire severamente`, `fuggire dalla battaglia`], answer: 0, explain: `Virtù politica e immagine pubblica.` },
      { type: `order`, q: `Metti in ordine cronologico.`, items: [`Primo triumvirato`, `Inizio della guerra in Gallia`, `Resa di Vercingetorige`, `Passaggio del Rubicone`], explain: `60, 58, 52, 49 a.C.` }
    ]
  }
});
