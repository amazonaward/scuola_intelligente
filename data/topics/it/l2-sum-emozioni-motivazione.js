TOPIC('it', {
  id: "l2-sum-emozioni-motivazione",
  title: "Emozioni e motivazione",
  intro: "Il cuore accelera prima di un'interrogazione, la rabbia ti fa stringere i pugni, la voglia di imparare una cosa ti fa studiare ore senza accorgertene... mentre altre volte non riesci ad aprire il libro. <b>Emozioni</b> e <b>motivazione</b> sono i motori nascosti di tutto ciò che facciamo, a scuola e fuori. In questa lezione scopri <b>che cosa sono le emozioni</b>, come le hanno spiegate Darwin, Ekman, James e Schachter, <b>a che cosa servono</b>, come si possono regolare; poi passi alla <b>motivazione</b>: intrinseca ed estrinseca, la celebre <b>piramide di Maslow</b>, la teoria dell'autodeterminazione e come l'ansia influenza la prestazione. Alla fine avrai strumenti concreti per capire (e gestire) te stesso e chi educhi.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Che cosa sono le emozioni",
      html: `<p>Un'<b>emozione</b> è una reazione <b>intensa e di breve durata</b> a uno stimolo importante (reale o immaginato), che coinvolge insieme più componenti:</p>
<ul>
<li><b>fisiologica</b>: battito, respiro, sudore, tensione muscolare (il sistema nervoso autonomo);</li>
<li><b>cognitiva</b>: la valutazione («questa situazione è pericolosa / mi riguarda / è colpa sua»);</li>
<li><b>espressiva</b>: viso, voce, postura;</li>
<li><b>motivazionale / comportamentale</b>: spinta ad agire (fuggire, attaccare, avvicinarsi);</li>
<li><b>soggettiva</b>: il «sentire» cosciente, il sentimento.</li>
</ul>
<p>Non vanno confuse con l'<b>umore</b> (stato più debole ma più lungo, senza una causa precisa: sentirsi «giù» tutto il giorno) né con i <b>tratti di personalità</b> (tendenze stabili: essere ansioso di carattere).</p>
<p><b>Quali sono le emozioni di base?</b> <b>Charles Darwin</b> (1872) pensava che le espressioni emotive fossero in gran parte innate ed ereditate. <b>Paul Ekman</b> confermò con ricerche interculturali (anche tra i Fore della Papua Nuova Guinea) che sei espressioni sono riconosciute da popoli diversi: <b>gioia, tristezza, rabbia, paura, disgusto, sorpresa</b>. Lo psicologo <b>Robert Plutchik</b> (1980) propose la «<b>ruota delle emozioni</b>» con otto emozioni primarie a coppie di opposti (gioia-tristezza, fiducia-disgusto, paura-rabbia, sorpresa-attesa) che si combinano come i colori: gioia + fiducia = amore, paura + sorpresa = timore reverenziale, e così via, e con intensità diverse (irritazione, rabbia, furia). Altre emozioni, come vergogna, colpa, orgoglio, imbarazzo, sono dette <b>sociali</b> o <b>complesse</b> e dipendono molto da cultura e apprendimento.</p>`
    },
    {
      type: "svg",
      title: "La ruota di Plutchik (semplificata)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<path d="M300 150 L300 20 A130 130 0 0 1 392 58 Z" fill="#fde047" stroke="#ffffff" stroke-width="2"/>
<path d="M300 150 L392 58 A130 130 0 0 1 430 150 Z" fill="#86efac" stroke="#ffffff" stroke-width="2"/>
<path d="M300 150 L430 150 A130 130 0 0 1 392 242 Z" fill="#4ade80" stroke="#ffffff" stroke-width="2"/>
<path d="M300 150 L392 242 A130 130 0 0 1 300 280 Z" fill="#67e8f9" stroke="#ffffff" stroke-width="2"/>
<path d="M300 150 L300 280 A130 130 0 0 1 208 242 Z" fill="#93c5fd" stroke="#ffffff" stroke-width="2"/>
<path d="M300 150 L208 242 A130 130 0 0 1 170 150 Z" fill="#c4b5fd" stroke="#ffffff" stroke-width="2"/>
<path d="M300 150 L170 150 A130 130 0 0 1 208 58 Z" fill="#fca5a5" stroke="#ffffff" stroke-width="2"/>
<path d="M300 150 L208 58 A130 130 0 0 1 300 20 Z" fill="#fdba74" stroke="#ffffff" stroke-width="2"/>
<text x="338" y="68" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">gioia</text>
<text x="395" y="112" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">fiducia</text>
<text x="395" y="197" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">paura</text>
<text x="338" y="248" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">sorpresa</text>
<text x="262" y="248" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">tristezza</text>
<text x="205" y="197" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">disgusto</text>
<text x="205" y="112" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">rabbia</text>
<text x="262" y="68" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">attesa</text>
<text x="80" y="140" font-size="14" text-anchor="middle" fill="#0f172a">Ogni emozione ha</text>
<text x="80" y="160" font-size="14" text-anchor="middle" fill="#0f172a">il suo opposto</text>
<text x="520" y="140" font-size="14" text-anchor="middle" fill="#0f172a">e si combina con</text>
<text x="520" y="160" font-size="14" text-anchor="middle" fill="#0f172a">le vicine</text>
</svg>`,
      caption: "Otto emozioni primarie a coppie di opposti: gioia-tristezza, fiducia-disgusto, paura-rabbia, sorpresa-attesa."
    },
    {
      type: "text",
      title: "2. Come nasce un'emozione: le grandi teorie",
      html: `<p>Che cosa viene prima: il tremore o la paura? Le teorie classiche rispondono in modi diversi.</p>
<ul>
<li><b>James-Lange</b> (1884-85): lo psicologo americano <b>William James</b> e il fisiologo danese <b>Carl Lange</b> sostengono che sia il <b>corpo</b> a venire prima. Vedi un orso, scappi, e <b>poi</b> senti la paura perché percepisci la tua fuga e il cuore che batte. «Non piangiamo perché siamo tristi, ma siamo tristi perché piangiamo.»</li>
<li><b>Cannon-Bard</b> (1927/1934): <b>Walter Cannon</b> e <b>Philip Bard</b> criticano James-Lange: le reazioni del corpo sono troppo lente e simili tra emozioni diverse. Per loro lo stimolo attiva il <b>talamo</b>, che invia contemporaneamente il segnale alla corteccia (esperienza emotiva) e al corpo (reazione). Emozione e reazione corporea sono <b>simultanee</b>.</li>
<li><b>Schachter-Singer, teoria dei due fattori</b> (1962): <b>Stanley Schachter</b> e <b>Jerome Singer</b> sostengono che l'emozione nasca da <b>attivazione fisiologica + etichetta cognitiva</b>. In un celebre esperimento iniettarono ai partecipanti adrenalina, dando informazioni diverse sugli effetti: chi non sapeva che cosa aspettarsi attribuiva il batticuore a ciò che accadeva intorno (un complice euforico o arrabbiato) e provava emozioni diverse. Lo stesso batticuore diventa gioia o rabbia a seconda di come lo interpretiamo.</li>
<li><b>Teoria della valutazione (<i>appraisal</i>)</b>, di <b>Richard Lazarus</b> (anni Sessanta-Novanta): non è lo stimolo ma la <b>valutazione</b> («è pericoloso per me? Posso affrontarlo?») a produrre l'emozione. Per questo lo stesso esame spaventa uno e stimola un altro.</li>
</ul>
<p><b>Il cervello.</b> Un ruolo centrale ha l'<b>amigdala</b>, una struttura a forma di mandorla nel lobo temporale. <b>Joseph LeDoux</b> (<i>Il cervello emotivo</i>, 1996) mostrò che esiste una «<b>via bassa</b>» rapida (dal talamo direttamente all'amigdala: reagisci prima di capire) e una «<b>via alta</b>» più lenta e precisa (attraverso la corteccia, che corregge: «era solo un bastone»). I due percorsi spiegano perché ci spaventiamo prima di riconoscere il pericolo.</p>`
    },
    {
      type: "example",
      title: "Quanto è emozionante un battito accelerato",
      html: `<p>Nel <b>1974</b> gli psicologi <b>Donald Dutton</b> e <b>Arthur Aron</b> fecero un esperimento in Canada: un'intervistatrice fermava giovani uomini su un ponte sospeso, stretto e traballante, oppure su un ponte stabile e basso, e consegnava un numero di telefono dicendo di chiamare per sapere di più. Chi aveva attraversato il ponte pericoloso telefonò più spesso. Una spiegazione, in linea con Schachter e Singer: l'attivazione provocata dalla paura veniva <b>riattribuita</b> alla persona presente («il cuore batte perché mi piace»). I risultati sono stati discussi e non tutti i tentativi di replica hanno confermato l'effetto, ma l'idea resta un buon esempio di come <b>il significato che diamo al corpo</b> decida l'emozione.</p>`
    },
    {
      type: "widget",
      title: "Teorie delle emozioni: chi dice cosa?",
      widget: "match",
      options: {
        pairs: [
          ["James-Lange", "Prima la reazione del corpo, poi l'emozione"],
          ["Cannon-Bard", "Corpo ed emozione nascono insieme (talamo)"],
          ["Schachter-Singer", "Attivazione fisica + etichetta cognitiva"],
          ["Lazarus", "L'emozione dipende dalla valutazione dello stimolo"]
        ]
      },
      caption: "Ogni teoria sottolinea un pezzo diverso del puzzle."
    },
    {
      type: "text",
      title: "3. A che cosa servono le emozioni (e come si regolano)",
      html: `<p>Le emozioni non sono un «difetto» della ragione. Hanno funzioni precise:</p>
<ul>
<li><b>Adattiva e di sopravvivenza</b>: la paura prepara a fuggire, il disgusto protegge dal cibo avariato, la rabbia fa difendere i confini.</li>
<li><b>Comunicativa</b>: il viso e la voce segnalano agli altri il nostro stato (anche ai neonati, che non parlano).</li>
<li><b>Motivazionale</b>: ci spingono ad agire (la curiosità a esplorare, la vergogna a rimediare).</li>
<li><b>Decisionale</b>: <b>Antonio Damasio</b>, neurologo, nel libro <i>L'errore di Cartesio</i> (1994) mostra che chi ha danni alle aree che collegano ragione ed emozione decide male nella vita reale, anche con intelligenza intatta. Famoso il caso di <b>Phineas Gage</b>: nel 1848, in Vermont, una sbarra di ferro gli attraversò la parte anteriore del cervello in un incidente di lavoro; sopravvisse, ma il suo carattere e il suo giudizio cambiarono molto.</li>
</ul>
<p><b>Regolare le emozioni.</b> Il punto non è eliminarle, ma gestirle. Lo psicologo <b>James Gross</b> (1998) distingue due strategie:</p>
<ul>
<li><b>rivalutazione cognitiva</b> (<i>reappraisal</i>): cambiare il modo di interpretare la situazione, prima che l'emozione si sviluppi («non è un attacco, è un'occasione per mostrare cosa so»). Funziona bene a lungo termine.</li>
<li><b>soppressione</b>: nascondere l'espressione dell'emozione. Spesso costa fatica e non riduce l'emozione interna.</li>
</ul>
<p>Altre tecniche utili: <b>respirazione lenta</b> (allunga l'espirazione e calma il sistema nervoso), nominare l'emozione («sono ansioso»), parlarne con una persona fidata, movimento fisico. Si parla di <b>intelligenza emotiva</b> (<b>Salovey e Mayer</b>, 1990, resa popolare da <b>Daniel Goleman</b> nel libro del 1995): saper riconoscere, comprendere, esprimere e regolare le proprie emozioni e quelle altrui. A scuola, climi emotivi positivi favoriscono attenzione e memoria; ansia e noia le ostacolano.</p>`
    },
    {
      type: "widget",
      title: "Che cosa serve l'emozione?",
      widget: "classify",
      options: {
        groups: ["Protegge dal pericolo", "Comunica agli altri", "Spinge a impegnarsi"],
        items: [
          ["😨 La paura che fa scappare dal cane aggressivo", 0],
          ["🤢 Il disgusto per il latte scaduto", 0],
          ["😢 Il viso triste che invita il compagno a consolarti", 1],
          ["😠 Il tono arrabbiato che fa capire un limite", 1],
          ["🤩 La curiosità che spinge a esplorare un tema", 2],
          ["😳 La vergogna che spinge a chiedere scusa", 2]
        ]
      },
      caption: "Un'emozione può svolgere più funzioni; qui scegli quella prevalente."
    },
    {
      type: "quiz",
      title: "Mini-quiz: emozioni",
      questions: [
        { type: "mc", q: "Secondo James-Lange, che cosa viene per primo?", options: ["La reazione del corpo", "L'emozione cosciente", "Il pensiero", "Il linguaggio"], answer: 0, explain: "Sentiamo l'emozione percependo le reazioni corporee." },
        { type: "mc", q: "Quale struttura cerebrale è centrale per la paura?", options: ["L'amigdala", "Il cervelletto", "Il bulbo olfattivo", "Il midollo spinale"], answer: 0, explain: "È coinvolta nella valutazione rapida del pericolo (via bassa di LeDoux)." },
        { type: "tf", q: "Secondo Gross, la rivalutazione cognitiva è una strategia che cambia l'interpretazione della situazione.", answer: true, explain: "Si interviene prima che l'emozione si sviluppi." }
      ]
    },
    {
      type: "text",
      title: "4. La motivazione: da dove viene la spinta",
      html: `<p>La <b>motivazione</b> (dal latino <i>movere</i>, «muovere») è l'insieme dei processi che <b>avviano, orientano e sostengono</b> un comportamento verso uno scopo. Se l'emozione è la reazione, la motivazione è la <b>direzione</b>. Fondamentale è la distinzione tra:</p>
<ul>
<li><b>motivazione intrinseca</b>: fai una cosa perché ti <b>interessa e ti dà soddisfazione in sé</b> (leggi un fumetto, impari una canzone alla chitarra);</li>
<li><b>motivazione estrinseca</b>: la fai per un <b>premio esterno</b> o per evitare una punizione (studi per il voto, per il regalo, per non essere rimproverato).</li>
</ul>
<p>La prima produce apprendimenti più profondi e duraturi. Un risultato sorprendente è il cosiddetto <b>effetto di sovragiustificazione</b>: nel <b>1973</b> <b>Lepper, Greene e Nisbett</b> osservarono bambini di una scuola dell'infanzia che amavano disegnare con pennarelli. A un gruppo promisero un premio per disegnare; dopo qualche settimana, quando il premio non c'era più, quel gruppo disegnava <b>meno</b> degli altri. Il premio aveva trasformato un gioco in un lavoro per ottenere qualcosa. (Attenzione: i premi inattesi, o quelli che comunicano competenza, non hanno sempre questo effetto.)</p>
<p>Per <b>Edward Deci</b> e <b>Richard Ryan</b>, nella <b>teoria dell'autodeterminazione</b> (1985), la motivazione intrinseca cresce se vengono soddisfatti tre bisogni psicologici di base:</p>
<ul>
<li><b>Autonomia</b>: sentire di poter scegliere, non di essere solo controllato.</li>
<li><b>Competenza</b>: sentirsi capaci, vedere i progressi.</li>
<li><b>Relazione</b>: sentirsi legati e accettati dagli altri.</li>
</ul>
<p>In classe: dare scelta (su temi, modalità), obiettivi raggiungibili con feedback specifici, clima di appartenenza. Altre idee utili: la <b>autoefficacia</b> di <b>Albert Bandura</b> (1977), cioè la fiducia nelle proprie capacità di riuscire in un compito, e la <b>mentalità di crescita</b> (<i>growth mindset</i>) di <b>Carol Dweck</b> (libro <i>Mindset</i>, 2006): credere che le abilità si sviluppino con impegno e strategie, non che siano fisse, aumenta la persistenza davanti agli errori.</p>`
    },
    {
      type: "text",
      title: "5. La piramide di Maslow",
      html: `<p>Nel <b>1943</b> lo psicologo americano <b>Abraham Maslow</b> (1908-1970) pubblicò l'articolo <i>A Theory of Human Motivation</i> («Una teoria della motivazione umana»), poi sviluppato nel libro <i>Motivazione e personalità</i> (1954). L'idea: i bisogni umani sono organizzati in una <b>gerarchia</b> e, in linea di massima, ci si occupa di quelli superiori solo dopo che quelli più basilari sono (almeno in parte) soddisfatti. I cinque livelli, dal basso:</p>
<ol>
<li><b>Bisogni fisiologici</b>: aria, cibo, acqua, sonno, riposo.</li>
<li><b>Bisogni di sicurezza</b>: protezione, salute, casa, stabilità, ordine.</li>
<li><b>Bisogni di appartenenza e amore</b>: amicizia, affetto, far parte di un gruppo.</li>
<li><b>Bisogni di stima</b>: rispetto di sé, riconoscimento degli altri, successo.</li>
<li><b>Autorealizzazione</b>: sviluppare pienamente le proprie potenzialità, creatività, crescita personale.</li>
</ol>
<p>I primi quattro livelli sono detti <b>bisogni di carenza</b> (si manifestano se mancano); l'ultimo, <b>bisogno di crescita</b> (non si esaurisce mai). In una fase tarda Maslow aggiunse l'idea di «trascendenza di sé» (dedicarsi a scopi più grandi di sé). Va ricordato che <b>Maslow non disegnò la piramide</b>: l'immagine fu aggiunta più tardi da manuali di management.</p>
<p><b>Critiche</b>: l'ordine non è rigido (un artista può rinunciare al comfort per la sua opera; un volontario mette a rischio la sicurezza per altri); le ricerche interculturali non confermano la gerarchia in modo uniforme; il concetto di autorealizzazione è difficile da misurare. Eppure è molto usato in <b>educazione</b>: un alunno che ha fame, sonno o paura, o che si sente escluso, difficilmente riesce a concentrarsi su un'equazione.</p>`
    },
    {
      type: "svg",
      title: "La piramide dei bisogni",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<polygon points="300,15 342,65 258,65" fill="#a78bfa" stroke="#ffffff" stroke-width="2"/>
<polygon points="258,65 342,65 384,115 216,115" fill="#60a5fa" stroke="#ffffff" stroke-width="2"/>
<polygon points="216,115 384,115 426,165 174,165" fill="#34d399" stroke="#ffffff" stroke-width="2"/>
<polygon points="174,165 426,165 468,215 132,215" fill="#fbbf24" stroke="#ffffff" stroke-width="2"/>
<polygon points="132,215 468,215 510,265 90,265" fill="#fb923c" stroke="#ffffff" stroke-width="2"/>
<text x="300" y="55" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">5</text>
<text x="300" y="95" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">4. Stima</text>
<text x="300" y="145" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">3. Appartenenza e amore</text>
<text x="300" y="195" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">2. Sicurezza</text>
<text x="300" y="245" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">1. Bisogni fisiologici</text>
<text x="545" y="40" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">Autorealizzazione</text>
<line x1="320" y1="40" x2="478" y2="40" stroke="#475569" stroke-width="2"/>
<text x="75" y="283" font-size="14" fill="#0f172a">Si parte dalla base: più è solida, più si può salire.</text>
</svg>`,
      caption: "I cinque livelli di Maslow (1943). Autorealizzazione in cima, bisogni fisiologici alla base."
    },
    {
      type: "widget",
      title: "Abbina bisogno e livello",
      widget: "classify",
      options: {
        groups: ["Fisiologici / sicurezza", "Appartenenza e stima", "Autorealizzazione"],
        items: [
          ["🍞 Mangiare e dormire a sufficienza", 0],
          ["🏠 Vivere in un ambiente sicuro", 0],
          ["🤝 Avere amici nella classe", 1],
          ["🏅 Essere riconosciuti per un traguardo", 1],
          ["🎨 Sviluppare un talento creativo", 2],
          ["🔭 Studiare per realizzare un sogno personale", 2]
        ]
      },
      caption: "I livelli bassi sono le condizioni per poter salire."
    },
    {
      type: "example",
      title: "Lunedì mattina: quale livello manca?",
      html: `<p>Chiara arriva in classe stanchissima: ha dormito poco e non ha fatto colazione. Durante la lezione non riesce a seguire, è irritabile e quando l'insegnante la interroga le sembra di avere la mente vuota. Un professore potrebbe pensare «non ha voglia di studiare». Con la lente di Maslow la lettura cambia: mancano i <b>bisogni fisiologici</b> (sonno, cibo), quindi i livelli alti (stima, apprendimento) sono fuori portata. Un'altra volta Chiara dorme e mangia bene, ma si sente esclusa dalle compagne: manca il livello di <b>appartenenza</b>. In entrambi i casi la soluzione non è «sgridarla di più», ma capire quale base è fragile.</p>`
    },
    {
      type: "text",
      title: "6. Ansia, attivazione e prestazione",
      html: `<p>Un po' di agitazione prima di una gara o di un'interrogazione non fa male: aiuta anzi. Lo mostra la <b>legge di Yerkes e Dodson</b> (1908, dai nomi dei due psicologi americani): tra <b>livello di attivazione</b> (<i>arousal</i>, cioè eccitazione fisiologica) e <b>prestazione</b> esiste una relazione a «<b>U rovesciata</b>». Con attivazione troppo bassa (noia, sonnolenza) si va male; aumentando si migliora fino a un punto ottimale; oltre, l'ansia sale, la mente si blocca e la prestazione cala. Il punto ottimale è <b>più basso nei compiti complessi</b> e più alto in quelli semplici.</p>
<p>Che cosa fare per portarsi vicino al punto ottimale? Se sei troppo <i>sotto</i>: movimento, musica, obiettivi chiari. Se sei troppo <i>sopra</i>: respiro lento, preparazione graduale, simulare la prova, riformulare («sono carico, non spaventato»).</p>
<p>Un caso particolare è l'<b>ansia da prestazione</b> (o da test): paura di fallire che porta a pensieri intrusivi, tensione e blackout. Ciò che aiuta: studio distribuito nel tempo, simulazioni a tempo, tecniche di rilassamento, pensieri realistici invece che catastrofici («non sono certo di sapere tutto, ma ho studiato e il voto non definisce chi sono»). Se l'ansia è molto forte e persistente conviene parlarne con un docente, un genitore o lo psicologo scolastico.</p>`
    },
    {
      type: "svg",
      title: "La curva di Yerkes-Dodson",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="70" y1="250" x2="560" y2="250" stroke="#0f172a" stroke-width="2"/>
<line x1="70" y1="250" x2="70" y2="30" stroke="#0f172a" stroke-width="2"/>
<path d="M70 245 C150 200 190 60 315 55 C440 50 480 200 560 245" fill="none" stroke="#2563eb" stroke-width="4"/>
<circle cx="315" cy="55" r="8" fill="#dc2626"/>
<text x="315" y="38" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">livello ottimale</text>
<text x="315" y="282" font-size="14" text-anchor="middle" fill="#0f172a">Attivazione (da noia ad ansia forte)</text>
<text x="40" y="140" font-size="14" text-anchor="middle" fill="#0f172a" transform="rotate(-90 40 140)">Prestazione</text>
<text x="130" y="230" font-size="14" text-anchor="middle" fill="#0f172a">noia</text>
<text x="500" y="230" font-size="14" text-anchor="middle" fill="#0f172a">panico</text>
</svg>`,
      caption: "Troppo poca o troppa attivazione peggiorano la prestazione: serve il punto giusto."
    },
    {
      type: "alternatives",
      title: "Altri modi per capire emozioni e motivazione",
      intro: "Qualche analogia per fissare i concetti.",
      tabs: [
        { label: "🚗 L'auto", html: `<p>Pensa a un'auto: le <b>emozioni</b> sono il <b>cruscotto e il motore</b> che reagiscono (spie, giri, rumori); la <b>motivazione</b> è la <b>direzione</b> verso cui vuoi andare; i <b>bisogni</b> di Maslow sono i <b>rifornimenti</b>: senza benzina e olio (livelli bassi) non vai lontano. La <b>regolazione emotiva</b> è saper usare freno e acceleratore.</p>` },
        { label: "🌊 L'onda", html: `<p>Un'emozione è come un'<b>onda</b>: sale, raggiunge un picco e scende, di solito in pochi minuti se non la alimenti con pensieri ripetitivi. Se la contrasti diventa più forte; se impari a «surfarla» (respirare, osservare, attendere), passa. È l'idea alla base di molte tecniche di consapevolezza (<i>mindfulness</i>).</p>` },
        { label: "🎮 Il flusso", html: `<p>Lo psicologo <b>Mihály Csíkszentmihályi</b> (<i>Flow</i>, 1990) descrive il <b>flusso</b> (<i>flow</i>): quello stato di totale immersione che provi in un gioco o in una gara quando la <b>difficoltà del compito</b> è appena superiore alla tua <b>abilità</b>. Se è troppo facile ti annoi; se è troppo difficile ti angosci; se è giusto, il tempo vola. È il punto ottimale di motivazione intrinseca.</p>` },
        { label: "🏫 In classe", html: `<p>Tre azioni concrete per un docente (o per te quando studi in gruppo): <b>1.</b> garantire <b>sicurezza</b> emotiva (errore come occasione, non come vergogna); <b>2.</b> dare <b>scelta</b> e <b>obiettivi intermedi</b> (autonomia e competenza); <b>3.</b> usare <b>feedback specifici</b> («hai strutturato bene le premesse») invece di giudizi generici («sei bravo») o etichette («sei portato/non portato»).</p>` }
      ]
    },
    {
      type: "decision",
      title: "Pagare i voti?",
      html: `<p>Sei un genitore di un ragazzo di 14 anni, che studia poco. Un'amica ti consiglia: «Promettigli 10 euro per ogni voto sopra l'8: vedrai che si impegna». Un altro suggerisce invece di parlare di che cosa gli piace e farlo scegliere un argomento da approfondire.</p>`,
      question: "Quale strategia scegli?",
      options: [
        { label: "Pagare i voti alti.", outcome: "Nel breve termine può far salire i voti (motivazione estrinseca). Ma il rischio è l'effetto di sovragiustificazione: se cessa il premio, cala anche l'interesse, e il ragazzo può puntare solo al voto, anche con scorciatoie." },
        { label: "Ignorare il problema: «è l'età».", outcome: "Il disinteresse può consolidarsi e trasformarsi in senso di inadeguatezza. Un adulto che non ascolta lascia inevasi bisogni di competenza e relazione." },
        { label: "Dialogare, fargli scegliere almeno una parte del lavoro, riconoscere i progressi e fissare piccoli traguardi.", outcome: "Soddisfa i bisogni di autonomia, competenza e relazione della teoria dell'autodeterminazione. È più lento, ma costruisce motivazione intrinseca duratura." }
      ],
      answer: 2,
      explain: "Le ricerche sulla motivazione (Lepper, Deci, Ryan) suggeriscono che i premi esterni possano indebolire l'interesse spontaneo quando sono usati per controllare il comportamento. Sostenere autonomia, competenza e relazione è più efficace nel lungo periodo. Non significa che il rinforzo sia sempre sbagliato: un riconoscimento che informa sui progressi può aiutare."
    },
    {
      type: "conceptMap",
      title: "Mappa: emozioni e motivazione",
      nodes: [
        { id: "em", label: "Emozioni e motivazione", x: 50, y: 6, color: "#3b82f6", html: "I due motori del comportamento: reazione e direzione.", why: "Hanno la stessa radice (movere: muovere): le emozioni ci preparano all'azione, la motivazione la orienta a uno scopo." },
        { id: "emo", label: "Emozioni", x: 18, y: 40, color: "#ef4444", html: "Reazione breve e intensa con componenti fisiologiche, cognitive, espressive.", why: "Si sono evolute perché aiutano a sopravvivere (Darwin 1872) e a comunicare: sei emozioni di base per Ekman, otto per Plutchik." },
        { id: "teo", label: "Teorie", x: 18, y: 78, color: "#f59e0b", html: "James-Lange, Cannon-Bard, Schachter-Singer, Lazarus.", why: "Rispondono a una domanda: viene prima il corpo, il pensiero o entrambi? Il consenso attuale è che interagiscono: attivazione + valutazione." },
        { id: "reg", label: "Regolazione", x: 50, y: 78, color: "#10b981", html: "Rivalutazione, respiro, intelligenza emotiva.", why: "Siccome le emozioni influenzano apprendimento e relazioni, saperle gestire è una competenza (Gross 1998; Goleman 1995)." },
        { id: "mot", label: "Motivazione", x: 82, y: 40, color: "#8b5cf6", html: "Intrinseca ed estrinseca; autodeterminazione.", why: "La motivazione intrinseca (Deci e Ryan 1985) cresce con autonomia, competenza e relazione; i premi esterni possono ridurla (Lepper 1973)." },
        { id: "mas", label: "Maslow", x: 82, y: 78, color: "#0ea5e9", html: "Gerarchia dei bisogni (1943).", why: "Maslow osservò che i bisogni di base chiedono attenzione prima: per questo sicurezza e appartenenza sono condizioni dell'apprendimento. Il modello è discusso ma resta utile." }
      ],
      edges: [["em", "emo", "reazione"], ["em", "mot", "direzione"], ["emo", "teo", "spiegate da"], ["emo", "reg", "si gestiscono con"], ["mot", "mas", "bisogni"]]
    },
    {
      type: "curiosity",
      title: "Il sorriso che «fa bene»? Dibattito aperto",
      html: `<p>La teoria James-Lange fu a lungo ripresa da studi sul <b>feedback facciale</b>: nel <b>1988</b> Strack, Martin e Stepper sostennero che tenere una penna tra i denti (che forza i muscoli del sorriso) facesse trovare i fumetti più divertenti. Un grande tentativo di replica nel 2016 (con 17 laboratori) non ha però confermato l'effetto, e il dibattito è tuttora aperto. È un buon esempio di come la psicologia <b>metta alla prova</b> persino le idee più affascinanti: il metodo scientifico richiede repliche.</p>`
    },
    {
      type: "curiosity",
      title: "Le emozioni nelle parole",
      html: `<p>La parola <b>emozione</b> viene dal latino <i>e-movere</i>, «muovere fuori, scuotere». Anche la parola <b>motivazione</b> viene da <i>movere</i>. Entrambe richiamano il <b>movimento</b>. E in molte lingue le emozioni si descrivono come moti fisici: «mi si è stretto lo stomaco», «mi è saltato il cuore in gola», «avevo il sangue ghiacciato». I nostri modi di dire riflettono il legame profondo fra corpo e vissuto emotivo.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Emozione = reazione breve e intensa con componenti fisiologica, cognitiva, espressiva e motivazionale; umore = stato più lungo e meno intenso.</li>
<li>Sei emozioni di base secondo Ekman; otto, in coppie di opposti, per Plutchik.</li>
<li>Teorie: James-Lange (prima il corpo), Cannon-Bard (insieme), Schachter-Singer (attivazione + etichetta), Lazarus (valutazione).</li>
<li>Motivazione intrinseca (interesse) vs estrinseca (premio): i premi possono ridurre l'interesse. Autodeterminazione: <b>autonomia, competenza, relazione</b>.</li>
<li>Maslow (1943): fisiologici, sicurezza, appartenenza, stima, autorealizzazione.</li>
<li>Yerkes-Dodson: la prestazione migliora con l'attivazione fino a un punto ottimale, poi cala.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: motivazione",
      questions: [
        { type: "mc", q: "Quale livello di Maslow è alla base della piramide?", options: ["Bisogni fisiologici", "Autorealizzazione", "Stima", "Appartenenza"], answer: 0, explain: "Aria, cibo, acqua, sonno." },
        { type: "mc", q: "Quali sono i tre bisogni della teoria dell'autodeterminazione?", options: ["Autonomia, competenza, relazione", "Sicurezza, stima, amore", "Fame, sete, sonno", "Potere, successo, denaro"], answer: 0, explain: "Deci e Ryan (1985)." },
        { type: "tf", q: "Nella curva di Yerkes-Dodson, un'attivazione molto alta porta sempre alla prestazione migliore.", answer: false, explain: "Oltre il punto ottimale la prestazione cala." },
        { type: "mc", q: "L'effetto di sovragiustificazione mostra che...", options: ["Un premio esterno può ridurre l'interesse spontaneo", "I premi aumentano sempre l'interesse", "La noia migliora la memoria", "Le punizioni sono utili"], answer: 0, explain: "Studio di Lepper, Greene e Nisbett (1973) sui pennarelli." }
      ]
    }
  ],
  glossary: [
    { t: "Emozione", d: "Reazione intensa e breve a uno stimolo importante, con componenti fisiologiche, cognitive, espressive e motivazionali." },
    { t: "Umore", d: "Stato affettivo più duraturo e meno intenso di un'emozione, spesso senza causa precisa." },
    { t: "Amigdala", d: "Struttura cerebrale importante per la valutazione rapida del pericolo e per la paura." },
    { t: "Rivalutazione cognitiva", d: "Strategia di regolazione che cambia l'interpretazione di una situazione (reappraisal)." },
    { t: "Intelligenza emotiva", d: "Capacità di riconoscere, comprendere, esprimere e regolare le emozioni proprie e altrui." },
    { t: "Motivazione", d: "Insieme di processi che avviano, orientano e sostengono un comportamento verso uno scopo." },
    { t: "Motivazione intrinseca", d: "Impegno guidato dall'interesse e dalla soddisfazione per l'attività stessa." },
    { t: "Motivazione estrinseca", d: "Impegno guidato da premi o punizioni esterni." },
    { t: "Autodeterminazione", d: "Teoria di Deci e Ryan: autonomia, competenza e relazione alimentano la motivazione." },
    { t: "Piramide di Maslow", d: "Rappresentazione della gerarchia dei bisogni: fisiologici, sicurezza, appartenenza, stima, autorealizzazione." },
    { t: "Autoefficacia", d: "Fiducia nella propria capacità di riuscire in un compito (Bandura)." },
    { t: "Flusso (flow)", d: "Stato di piena immersione quando la sfida è commisurata all'abilità (Csíkszentmihályi)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale dei seguenti non è una delle sei emozioni di base di Ekman?", options: ["Vergogna", "Gioia", "Paura", "Sorpresa"], answer: 0, explain: "Le sei sono gioia, tristezza, rabbia, paura, disgusto e sorpresa; la vergogna è un'emozione sociale." },
      { type: "mc", q: "Nella ruota di Plutchik, l'opposto della gioia è...", options: ["Tristezza", "Rabbia", "Paura", "Sorpresa"], answer: 0, explain: "Le coppie sono gioia-tristezza, fiducia-disgusto, paura-rabbia, sorpresa-attesa." },
      { type: "mc", q: "Che cosa sostengono Schachter e Singer?", options: ["L'emozione nasce da attivazione fisiologica più un'etichetta cognitiva", "Le emozioni sono solo reazioni del corpo", "Le emozioni non esistono senza il talamo", "Emozioni e pensieri sono separati"], answer: 0, explain: "Teoria dei due fattori (1962)." },
      { type: "tf", q: "Secondo LeDoux esiste una via rapida dal talamo all'amigdala che ci fa reagire prima di riconoscere lo stimolo.", answer: true, explain: "È la «via bassa»." },
      { type: "text", q: "Come si chiama l'autore della gerarchia dei bisogni del 1943?", answer: ["maslow", "abraham maslow"], explain: "Abraham Maslow." },
      { type: "mc", q: "Quale esempio rappresenta una motivazione intrinseca?", options: ["Suonare la chitarra perché ti piace", "Studiare per evitare un castigo", "Fare i compiti per ricevere denaro", "Partecipare per il punteggio"], answer: 0, explain: "L'attività è fine a se stessa." },
      { type: "mc", q: "Quale non è uno dei tre bisogni della teoria dell'autodeterminazione?", options: ["Sicurezza economica", "Autonomia", "Competenza", "Relazione"], answer: 0, explain: "I tre bisogni sono autonomia, competenza e relazione." },
      { type: "order", q: "Metti i livelli di Maslow dal basso verso l'alto.", items: ["Bisogni fisiologici", "Sicurezza", "Appartenenza e amore", "Stima", "Autorealizzazione"], explain: "Dalla base alla cima della piramide." },
      { type: "tf", q: "Secondo Yerkes-Dodson l'ansia più alta è sempre quella che dà la prestazione migliore.", answer: false, explain: "La relazione è a U rovesciata: esiste un livello ottimale." },
      { type: "mc", q: "Una strategia di regolazione emotiva efficace a lungo termine è...", options: ["La rivalutazione cognitiva", "La soppressione dell'espressione", "L'evitamento totale", "Il rimproverarsi duramente"], answer: 0, explain: "Cambiare l'interpretazione dell'evento riduce l'impatto emotivo (Gross)." }
    ]
  }
});
