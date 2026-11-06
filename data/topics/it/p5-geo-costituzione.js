TOPIC('it', {
  id: `p5-geo-costituzione`,
  title: `La Costituzione e lo Stato`,
  intro: `Ogni gioco ha le sue regole, e anche un Paese ha bisogno di regole che valgano per tutti. In Italia la regola più importante di tutte è la <b>Costituzione</b>. Oggi scopriamo come è nata, che cosa dice e come funziona lo <b>Stato</b>: <b>Parlamento</b>, <b>Governo</b> e <b>Magistratura</b>.`,
  minutes: 35,
  sections: [
    {
      type: `text`, title: `1. Che cos'è lo Stato?`,
      html: `<p>Uno <b>Stato</b> esiste quando ci sono insieme tre elementi:</p>
<ul>
<li>il <b>popolo</b>: le persone che sono cittadine di quello Stato (in Italia circa 59 milioni);</li>
<li>il <b>territorio</b>: la terra, il mare vicino alla costa e il cielo sopra, dentro i confini;</li>
<li>la <b>sovranità</b>: il potere di decidere le proprie leggi senza obbedire ad altri Stati.</li>
</ul>
<p>L'Italia è una <b>Repubblica</b>: il capo dello Stato non è un re che eredita il trono, ma un <b>Presidente</b> eletto per un periodo di tempo limitato. Ed è una <b>democrazia</b>: il potere appartiene al popolo, che lo esercita soprattutto <b>votando</b>.</p>`
    },
    {
      type: `text`, title: `2. Come è nata la Costituzione`,
      html: `<p>Facciamo un passo indietro, alla fine della <b>Seconda guerra mondiale</b> (1945). L'Italia era stata governata per vent'anni dal <b>fascismo</b>, una dittatura che aveva tolto la libertà alle persone, e il re aveva appoggiato quel regime.</p>
<ol>
<li><b>2 giugno 1946</b>: gli italiani votano con un <b>referendum</b> e scelgono la <b>Repubblica</b> invece della monarchia. Per la prima volta in un voto nazionale votano anche le <b>donne</b>!</li>
<li>Lo stesso giorno eleggono l'<b>Assemblea Costituente</b>: 556 persone (21 erano donne) con idee politiche molto diverse, che dovevano scrivere le nuove regole insieme.</li>
<li><b>22 dicembre 1947</b>: l'Assemblea approva la Costituzione con 453 voti a favore e 62 contrari.</li>
<li><b>1° gennaio 1948</b>: la Costituzione entra in vigore. Da allora è la <b>legge fondamentale</b> dell'Italia.</li>
</ol>
<p>Per questo il <b>2 giugno</b> è la <b>Festa della Repubblica</b>.</p>`
    },
    {
      type: `widget`, title: `La strada verso la Costituzione`,
      widget: `timeline`,
      caption: `Tocca gli eventi per vedere come si arriva alla Costituzione di oggi.`,
      options: {
        unit: `anni`,
        events: [
          { year: 1848, label: `Statuto Albertino (regole del Regno di Sardegna, poi d'Italia)`, icon: `📜` },
          { year: 1861, label: `Nasce il Regno d'Italia`, icon: `🇮🇹` },
          { year: 1922, label: `Inizia la dittatura fascista`, icon: `⛓️` },
          { year: 1945, label: `Fine della Seconda guerra mondiale`, icon: `🕊️` },
          { year: 1946, label: `Referendum: vince la Repubblica, votano le donne`, icon: `🗳️` },
          { year: 1948, label: `La Costituzione entra in vigore (1° gennaio)`, icon: `📘` }
        ]
      }
    },
    {
      type: `text`, title: `3. Come è fatta la Costituzione`,
      html: `<p>La Costituzione ha <b>139 articoli</b> (alcuni sono stati poi cancellati) e 18 disposizioni finali. È divisa così:</p>
<table>
<tr><th>Parte</th><th>Articoli</th><th>Di che cosa parla</th></tr>
<tr><td><b>Principi fondamentali</b></td><td>1–12</td><td>Le idee di base: democrazia, uguaglianza, lavoro, pace, tutela dell'ambiente…</td></tr>
<tr><td><b>Parte I</b> – Diritti e doveri dei cittadini</td><td>13–54</td><td>Libertà personale, scuola, salute, voto, pagare le tasse…</td></tr>
<tr><td><b>Parte II</b> – Ordinamento della Repubblica</td><td>55–139</td><td>Come funzionano Parlamento, Presidente, Governo, Magistratura, Regioni, Comuni.</td></tr>
</table>
<p>Alcuni articoli da conoscere:</p>
<ul>
<li><b>Art. 1</b>: «L'Italia è una Repubblica democratica, fondata sul lavoro. La sovranità appartiene al popolo…»</li>
<li><b>Art. 3</b>: tutti i cittadini sono <b>uguali</b> davanti alla legge, senza distinzione di sesso, razza, lingua, religione, opinioni politiche, condizioni personali e sociali.</li>
<li><b>Art. 9</b>: la Repubblica tutela il paesaggio, la cultura e (dal 2022) anche l'<b>ambiente</b> e gli <b>animali</b>.</li>
<li><b>Art. 11</b>: l'Italia <b>ripudia la guerra</b> come mezzo per risolvere le controversie tra popoli.</li>
<li><b>Art. 12</b>: la bandiera è il <b>tricolore</b> verde, bianco e rosso, a tre bande verticali.</li>
<li><b>Art. 34</b>: la scuola è aperta a tutti; l'istruzione inferiore è obbligatoria e gratuita.</li>
</ul>`
    },
    {
      type: `quiz`, title: `Mini-quiz: la nascita della Costituzione`,
      questions: [
        { type: `mc`, q: `In che giorno gli italiani scelsero la Repubblica?`, options: [`25 aprile 1945`, `2 giugno 1946`, `1° gennaio 1948`], answer: 1, explain: `Il referendum si tenne il 2 giugno 1946: per questo è la Festa della Repubblica.` },
        { type: `tf`, q: `La Costituzione italiana è entrata in vigore il 1° gennaio 1948.`, answer: true, explain: `Approvata il 22 dicembre 1947, è in vigore dal 1° gennaio 1948.` },
        { type: `mc`, q: `Quale articolo dice che tutti i cittadini sono uguali davanti alla legge?`, options: [`Art. 1`, `Art. 3`, `Art. 12`], answer: 1, explain: `È l'articolo 3, il principio di uguaglianza.` }
      ]
    },
    {
      type: `text`, title: `4. I tre poteri: chi fa che cosa`,
      html: `<p>Per evitare che una sola persona abbia tutto il potere (come succede in una dittatura), la Costituzione lo <b>divide in tre</b>. È la <b>separazione dei poteri</b>:</p>
<ul>
<li>⚖️ <b>Potere legislativo</b> = <b>fare le leggi</b>. Spetta al <b>Parlamento</b>, formato da due "camere": la <b>Camera dei Deputati</b> (400 deputati, a Palazzo Montecitorio) e il <b>Senato della Repubblica</b> (200 senatori eletti più alcuni senatori a vita, a Palazzo Madama). Deputati e senatori sono eletti dai cittadini ogni <b>5 anni</b>.</li>
<li>🏛️ <b>Potere esecutivo</b> = <b>far funzionare le leggi</b> e governare il Paese ogni giorno. Spetta al <b>Governo</b>: il <b>Presidente del Consiglio dei ministri</b> e i <b>ministri</b> (dell'Istruzione, della Salute, dell'Economia…). Ha sede a Palazzo Chigi. Il Governo deve avere la <b>fiducia</b> del Parlamento.</li>
<li>👩‍⚖️ <b>Potere giudiziario</b> = <b>controllare che le leggi siano rispettate</b> e giudicare chi le viola. Spetta alla <b>Magistratura</b> (giudici e pubblici ministeri), che è <b>indipendente</b> da tutti gli altri poteri.</li>
</ul>
<p>Sopra le parti c'è il <b>Presidente della Repubblica</b>, il <b>capo dello Stato</b>: rappresenta l'unità del Paese, firma (promulga) le leggi, nomina il Presidente del Consiglio, comanda le Forze armate. È eletto dal Parlamento (insieme a 58 delegati delle Regioni), resta in carica <b>7 anni</b> e vive al <b>Quirinale</b>.</p>
<p>A controllare che le leggi rispettino la Costituzione c'è la <b>Corte costituzionale</b> (15 giudici).</p>`
    },
    {
      type: `svg`, title: `Lo schema dei poteri dello Stato`,
      caption: `I cittadini votano il Parlamento; il Parlamento dà la fiducia al Governo; la Magistratura è indipendente. Il Presidente della Repubblica garantisce l'equilibrio.`,
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#f8fafc"/>
<rect x="190" y="12" width="220" height="56" rx="12" fill="#a855f7"/>
<text x="300" y="36" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">Presidente della</text>
<text x="300" y="56" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">Repubblica (7 anni)</text>
<rect x="20" y="120" width="170" height="90" rx="12" fill="#3b82f6"/>
<text x="105" y="148" font-size="17" text-anchor="middle" fill="#ffffff" font-weight="bold">PARLAMENTO</text>
<text x="105" y="170" font-size="14" text-anchor="middle" fill="#ffffff">Camera + Senato</text>
<text x="105" y="192" font-size="14" text-anchor="middle" fill="#ffffff">FA le leggi</text>
<rect x="215" y="120" width="170" height="90" rx="12" fill="#22c55e"/>
<text x="300" y="148" font-size="17" text-anchor="middle" fill="#ffffff" font-weight="bold">GOVERNO</text>
<text x="300" y="170" font-size="14" text-anchor="middle" fill="#ffffff">Pres. Consiglio + ministri</text>
<text x="300" y="192" font-size="14" text-anchor="middle" fill="#ffffff">APPLICA le leggi</text>
<rect x="410" y="120" width="170" height="90" rx="12" fill="#ef4444"/>
<text x="495" y="148" font-size="17" text-anchor="middle" fill="#ffffff" font-weight="bold">MAGISTRATURA</text>
<text x="495" y="170" font-size="14" text-anchor="middle" fill="#ffffff">giudici indipendenti</text>
<text x="495" y="192" font-size="14" text-anchor="middle" fill="#ffffff">FA RISPETTARE le leggi</text>
<line x1="190" y1="165" x2="215" y2="165" stroke="#0f172a" stroke-width="3"/>
<text x="202" y="110" font-size="13" text-anchor="middle" fill="#0f172a">fiducia</text>
<line x1="250" y1="68" x2="120" y2="120" stroke="#a855f7" stroke-width="3" stroke-dasharray="6 4"/>
<line x1="300" y1="68" x2="300" y2="120" stroke="#a855f7" stroke-width="3" stroke-dasharray="6 4"/>
<line x1="350" y1="68" x2="480" y2="120" stroke="#a855f7" stroke-width="3" stroke-dasharray="6 4"/>
<rect x="120" y="262" width="360" height="60" rx="14" fill="#facc15"/>
<text x="300" y="290" font-size="18" text-anchor="middle" fill="#713f12" font-weight="bold">👥 I CITTADINI (popolo sovrano)</text>
<text x="300" y="310" font-size="14" text-anchor="middle" fill="#713f12">votano dai 18 anni</text>
<line x1="160" y1="262" x2="105" y2="212" stroke="#ca8a04" stroke-width="4"/>
<text x="90" y="245" font-size="14" fill="#713f12" font-weight="bold">votano</text>
</svg>`
    },
    {
      type: `widget`, title: `Gioco: chi lo fa?`,
      widget: `classify`,
      caption: `Metti ogni azione sotto il potere giusto.`,
      options: {
        groups: [`⚖️ Parlamento`, `🏛️ Governo`, `👩‍⚖️ Magistratura`],
        items: [
          [`Approva una nuova legge sulla scuola`, 0], [`Vota la fiducia al Governo`, 0], [`Discute e cambia una proposta di legge`, 0],
          [`Il ministro decide come spendere i soldi per le scuole`, 1], [`Guida il Paese ogni giorno`, 1], [`Propone il bilancio dello Stato`, 1],
          [`Un giudice decide chi ha ragione in una lite`, 2], [`Processa chi ha commesso un reato`, 2]
        ]
      }
    },
    {
      type: `example`, title: `Esempio pratico: come nasce una legge`,
      html: `<p>Immagina una legge che obbliga a mettere più alberi vicino alle scuole.</p>
<ol>
<li><b>Proposta</b>: può farla il Governo, un parlamentare, una Regione, il CNEL oppure <b>50.000 cittadini</b> con le loro firme.</li>
<li><b>Discussione e voto alla Camera</b>: i deputati la discutono, la modificano e la votano.</li>
<li><b>Discussione e voto al Senato</b>: anche il Senato deve approvarla <b>con lo stesso testo</b>. Se cambia qualcosa, torna alla Camera (si chiama "navetta").</li>
<li><b>Promulgazione</b>: il Presidente della Repubblica la firma (o, se non lo convince, la rimanda alle Camere una volta).</li>
<li><b>Pubblicazione</b> sulla <b>Gazzetta Ufficiale</b>: da quel momento, di solito dopo 15 giorni, vale per tutti.</li>
</ol>`
    },
    {
      type: `example`, title: `Esempio pratico: la Costituzione nella tua giornata`,
      html: `<ul>
<li>🏫 Vai a scuola gratis: <b>art. 34</b> (diritto all'istruzione).</li>
<li>🏥 Se stai male ti curano anche se non puoi pagare: <b>art. 32</b> (diritto alla salute).</li>
<li>💬 Puoi dire quello che pensi rispettando gli altri: <b>art. 21</b> (libertà di pensiero).</li>
<li>⛪🕌🕍 Ognuno può seguire la religione che vuole o nessuna: <b>art. 19</b>.</li>
<li>🧾 I tuoi genitori pagano le tasse in base a quanto guadagnano: <b>art. 53</b> (è un <b>dovere</b>).</li>
<li>🌳 Il parco vicino a casa è protetto: <b>art. 9</b>.</li>
</ul>
<p>La Costituzione non dà solo <b>diritti</b>: chiede anche <b>doveri</b>, come rispettare le leggi, pagare le tasse e aiutare gli altri (art. 2: «doveri inderogabili di solidarietà»).</p>`
    },
    {
      type: `text`, title: `5. Lo Stato vicino a te: Regioni e Comuni`,
      html: `<p>La Repubblica non è solo a Roma. Secondo l'<b>art. 114</b> è formata da:</p>
<ul>
<li><b>Comuni</b> (circa 7.900): guidati dal <b>sindaco</b> e dal consiglio comunale. Si occupano di strade, scuole elementari e medie, rifiuti, anagrafe.</li>
<li><b>Città metropolitane</b> (14, come Torino, Milano, Roma, Napoli) e <b>Province</b>.</li>
<li><b>Regioni</b> (20): hanno un <b>Presidente</b> e un consiglio regionale; si occupano soprattutto di sanità e trasporti locali. 5 sono a <b>statuto speciale</b> (Valle d'Aosta, Trentino-Alto Adige, Friuli-Venezia Giulia, Sicilia, Sardegna) e hanno più autonomia.</li>
<li>lo <b>Stato</b>.</li>
</ul>`
    },
    {
      type: `remember`, title: `Da ricordare`,
      html: `<ul>
<li>Costituzione: approvata il <b>22/12/1947</b>, in vigore dal <b>1/1/1948</b>, <b>139 articoli</b>.</li>
<li><b>Parlamento</b> (Camera 400 + Senato 200) → fa le leggi.</li>
<li><b>Governo</b> (Presidente del Consiglio + ministri) → applica le leggi.</li>
<li><b>Magistratura</b> → giudica, indipendente.</li>
<li><b>Presidente della Repubblica</b> → capo dello Stato, 7 anni, Quirinale.</li>
</ul>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… le "madri costituenti" erano 21?`,
      html: `<p>Nell'Assemblea Costituente c'erano 21 donne su 556 membri. Erano poche, ma decisive: grazie anche a loro nell'articolo 3 c'è scritto che tutti sono uguali "<b>senza distinzione di sesso</b>". Tra loro c'erano <b>Nilde Iotti</b>, che poi diventò la prima donna Presidente della Camera, e <b>Teresa Mattei</b>, la più giovane: aveva 25 anni.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… la Costituzione si può cambiare, ma non troppo facilmente?`,
      html: `<p>Una legge normale si approva con un voto per Camera. Per cambiare la Costituzione, invece, ogni Camera deve votare <b>due volte</b>, a distanza di almeno tre mesi, e a volte decidono i cittadini con un <b>referendum</b>. È fatto apposta: le regole più importanti non devono cambiare per un capriccio del momento. Una cosa però non si può cambiare mai: la <b>forma repubblicana</b> (art. 139).</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… le copie originali sono tre?`,
      html: `<p>La Costituzione fu firmata il 27 dicembre 1947 da <b>Enrico De Nicola</b> (capo provvisorio dello Stato), <b>Umberto Terracini</b> (presidente dell'Assemblea) e <b>Alcide De Gasperi</b> (capo del Governo). Una delle tre copie originali è conservata all'Archivio storico della Presidenza della Repubblica.</p>`
    },
    {
      type: `alternatives`, title: `Altri modi per capirlo`,
      intro: `Separazione dei poteri, Parlamento, Governo… se le parole ti sembrano astratte, prova questi modi.`,
      tabs: [
        {
          label: `⚽ Come una partita`,
          html: `<p>Pensa a una partita di calcio:</p>
<ul>
<li>Chi scrive il <b>regolamento</b> del calcio (le regole valide per tutti) è come il <b>Parlamento</b>.</li>
<li>L'<b>allenatore</b> e il capitano, che decidono come giocare la partita rispettando le regole, sono come il <b>Governo</b>.</li>
<li>L'<b>arbitro</b>, che fischia i falli ed è imparziale, è come la <b>Magistratura</b>.</li>
<li>La <b>Costituzione</b> è il libro delle regole più importanti, che nemmeno l'arbitro può cambiare.</li>
</ul>
<p>Se l'allenatore potesse anche fare da arbitro e cambiare le regole a metà partita… vincerebbe sempre lui! Ecco perché i poteri sono separati.</p>`
        },
        {
          label: `🏫 La tua classe`,
          html: `<p>Prova a fare una "Costituzione della classe":</p>
<ol>
<li>Tutti insieme votate le <b>regole</b> della classe (potere legislativo).</li>
<li>Eleggete un <b>capoclasse</b> che le fa applicare ogni giorno (potere esecutivo).</li>
<li>Scegliete un <b>garante</b> che, se c'è una lite, ascolta tutti e decide in modo giusto (potere giudiziario).</li>
</ol>
<p>Scrivete le regole su un cartellone: avete appena fatto quello che fece l'Assemblea Costituente!</p>`
        },
        {
          label: `🌍 Negli altri Paesi`,
          html: `<p>Quasi tutti gli Stati del mondo hanno una costituzione. Ruota il globo:</p>
<ul>
<li>🇺🇸 <b>Stati Uniti</b> (1787): la più antica costituzione scritta ancora in vigore. Lì il Presidente è eletto dai cittadini e guida anche il governo.</li>
<li>🇫🇷 <b>Francia</b> (1958): il Presidente, eletto dal popolo, ha molti poteri.</li>
<li>🇩🇪 <b>Germania</b> (1949): si chiama "Legge fondamentale"; c'è un Cancelliere, un po' come il nostro Presidente del Consiglio.</li>
<li>🇬🇧 <b>Regno Unito</b>: non ha una costituzione scritta in un solo testo! Le regole sono sparse in leggi e tradizioni, e c'è un re.</li>
<li>🇮🇹 <b>Italia</b> (1948): Repubblica parlamentare: il Governo dipende dalla fiducia del Parlamento.</li>
</ul>`,
          scene: `globe`,
          options: {
            points: [
              { lat: 38.9, lon: -77.0, label: `🇺🇸 Washington – 1787` },
              { lat: 48.85, lon: 2.35, label: `🇫🇷 Parigi – 1958` },
              { lat: 52.52, lon: 13.4, label: `🇩🇪 Berlino – 1949` },
              { lat: 51.5, lon: -0.12, label: `🇬🇧 Londra – non scritta` },
              { lat: 41.9, lon: 12.5, label: `🇮🇹 Roma – 1948`, color: `#22c55e` },
              { lat: 35.68, lon: 139.7, label: `🇯🇵 Tokyo – 1947` },
              { lat: -15.8, lon: -47.9, label: `🇧🇷 Brasilia – 1988` }
            ]
          }
        },
        {
          label: `🔗 Abbina i palazzi`,
          html: `<p>A Roma ogni potere ha il suo palazzo. Abbinali!</p>`,
          widget: `match`,
          options: {
            pairs: [
              [`Quirinale`, `Presidente della Repubblica`],
              [`Montecitorio`, `Camera dei Deputati`],
              [`Palazzo Madama`, `Senato della Repubblica`],
              [`Palazzo Chigi`, `Presidente del Consiglio`],
              [`Palazzo della Consulta`, `Corte costituzionale`]
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: da dove vengono le regole dello Stato`,
      nodes: [
        { id: `popolo`, label: `Popolo sovrano`, x: 50, y: 8, color: `#eab308`, html: `Il potere appartiene ai cittadini (art. 1).`, why: `È l'idea della <b>sovranità popolare</b>, nata con l'Illuminismo: Jean-Jacques Rousseau (1762, "Il contratto sociale") sosteneva che le leggi giuste vengono dalla volontà di tutti, non da un re scelto da Dio. La Rivoluzione francese (1789) la mise in pratica.` },
        { id: `cost`, label: `Costituzione 1948`, x: 50, y: 30, color: `#3b82f6`, html: `La legge fondamentale, sopra tutte le altre leggi.`, why: `Fu scritta dopo il fascismo e la guerra perché non si ripetessero: per questo protegge i diritti di tutti e divide il potere. Prima c'era lo <b>Statuto Albertino</b> (1848), concesso dal re e modificabile con una legge qualunque: il fascismo lo svuotò facilmente.` },
        { id: `separ`, label: `Separazione dei poteri`, x: 18, y: 50, color: `#a855f7`, html: `Il potere è diviso in legislativo, esecutivo, giudiziario.`, why: `L'idea fu spiegata dal filosofo francese <b>Montesquieu</b> nel 1748 ("Lo spirito delle leggi"): «perché non si possa abusare del potere bisogna che il potere fermi il potere». La usarono per primi i costituenti americani nel 1787.` },
        { id: `diritti`, label: `Diritti e doveri`, x: 82, y: 50, color: `#22c55e`, html: `Uguaglianza, libertà, scuola, salute; doveri di solidarietà.`, why: `Vengono da una lunga storia: la Magna Charta inglese (1215), la Dichiarazione dei diritti dell'uomo (Francia, 1789) e, nello stesso 1948, la <b>Dichiarazione universale dei diritti umani</b> dell'ONU.` },
        { id: `parl`, label: `Parlamento`, x: 12, y: 80, color: `#2563eb`, html: `Camera (400) e Senato (200): fanno le leggi.`, why: `È il cuore della democrazia rappresentativa: in uno Stato di milioni di persone non si può votare tutti su ogni legge, così si eleggono rappresentanti. Il numero dei parlamentari è stato ridotto (da 945 a 600) con un referendum nel 2020.` },
        { id: `gov`, label: `Governo`, x: 37, y: 80, color: `#16a34a`, html: `Presidente del Consiglio e ministri: applicano le leggi.`, why: `L'Italia è una <b>Repubblica parlamentare</b>: il Governo nasce dalla fiducia del Parlamento e cade se la perde. I costituenti lo scelsero per evitare un capo troppo forte dopo l'esperienza di Mussolini.` },
        { id: `mag`, label: `Magistratura`, x: 62, y: 80, color: `#dc2626`, html: `Giudici indipendenti che applicano la legge ai casi concreti.`, why: `Sotto la dittatura i giudici dipendevano dal governo. Per questo la Costituzione crea il <b>Consiglio Superiore della Magistratura</b> (CSM), che decide su carriere e trasferimenti dei giudici al posto del Governo.` },
        { id: `pres`, label: `Presidente della Repubblica`, x: 87, y: 80, color: `#7c3aed`, html: `Capo dello Stato, garante della Costituzione, 7 anni.`, why: `Sostituisce il re, ma non eredita la carica: è eletto dal Parlamento. Il mandato di 7 anni è più lungo di quello delle Camere (5) proprio perché sia "sopra le parti" e non legato a una sola maggioranza.` }
      ],
      edges: [
        [`popolo`, `cost`, `sceglie e scrive`], [`cost`, `separ`, `stabilisce`], [`cost`, `diritti`, `garantisce`],
        [`separ`, `parl`, `legislativo`], [`separ`, `gov`, `esecutivo`], [`separ`, `mag`, `giudiziario`],
        [`popolo`, `parl`, `elegge`], [`parl`, `gov`, `fiducia`], [`parl`, `pres`, `elegge`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: i poteri dello Stato`,
      questions: [
        { type: `mc`, q: `Chi fa le leggi in Italia?`, options: [`Il Governo`, `Il Parlamento`, `La Magistratura`], answer: 1, explain: `Il potere legislativo spetta al Parlamento (Camera e Senato).` },
        { type: `num`, q: `Quanti anni dura in carica il Presidente della Repubblica?`, answer: 7, tol: 0, unit: `anni`, explain: `Il mandato dura 7 anni (art. 85).` },
        { type: `tf`, q: `I giudici devono obbedire agli ordini del Governo.`, answer: false, explain: `La Magistratura è indipendente da ogni altro potere (art. 104).` }
      ]
    }
  ],
  glossary: [
    { t: `Stato`, d: `Popolo che vive su un territorio con un potere sovrano proprio.` },
    { t: `Costituzione`, d: `La legge fondamentale di uno Stato; tutte le altre leggi devono rispettarla.` },
    { t: `Repubblica`, d: `Forma di Stato in cui il capo dello Stato è eletto per un tempo limitato e non è un re.` },
    { t: `Democrazia`, d: `Governo in cui il potere appartiene al popolo, che lo esercita votando.` },
    { t: `Referendum`, d: `Voto in cui i cittadini decidono direttamente su una questione.` },
    { t: `Assemblea Costituente`, d: `Le 556 persone elette nel 1946 per scrivere la Costituzione.` },
    { t: `Parlamento`, d: `Camera dei Deputati e Senato: hanno il potere legislativo.` },
    { t: `Governo`, d: `Presidente del Consiglio e ministri: hanno il potere esecutivo.` },
    { t: `Magistratura`, d: `L'insieme dei giudici: ha il potere giudiziario.` },
    { t: `Promulgare`, d: `Firmare una legge da parte del Presidente della Repubblica perché diventi valida.` },
    { t: `Separazione dei poteri`, d: `Principio per cui fare, applicare e far rispettare le leggi spetta a organi diversi.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Quali sono i tre elementi di uno Stato?`, options: [`Popolo, territorio, sovranità`, `Re, esercito, tasse`, `Regioni, Province, Comuni`], answer: 0, explain: `Uno Stato esiste quando un popolo vive su un territorio con un potere sovrano.` },
      { type: `num`, q: `In che anno è entrata in vigore la Costituzione italiana?`, answer: 1948, tol: 0, explain: `Il 1° gennaio 1948.` },
      { type: `order`, q: `Metti in ordine gli eventi.`, items: [`Statuto Albertino`, `Dittatura fascista`, `Referendum Repubblica-Monarchia`, `Entrata in vigore della Costituzione`], explain: `1848 → 1922 → 1946 → 1948.` },
      { type: `mc`, q: `Il potere esecutivo spetta…`, options: [`al Parlamento`, `al Governo`, `alla Magistratura`], answer: 1, explain: `Il Governo applica le leggi e guida il Paese.` },
      { type: `text`, q: `Come si chiama il palazzo dove vive il Presidente della Repubblica?`, answer: [`quirinale`, `il quirinale`, `palazzo del quirinale`], explain: `Il Quirinale, a Roma.` },
      { type: `num`, q: `Quanti sono i deputati della Camera?`, answer: 400, tol: 0, explain: `Dopo la riforma del 2020 i deputati sono 400 e i senatori eletti 200.` },
      { type: `tf`, q: `Nel referendum del 1946 le donne votarono per la prima volta in un voto nazionale.`, answer: true, explain: `Fu la prima volta per le donne italiane in un voto nazionale.` },
      { type: `mc`, q: `Che cosa dice l'articolo 11?`, options: [`Che la bandiera è il tricolore`, `Che l'Italia ripudia la guerra`, `Che la scuola è obbligatoria`], answer: 1, explain: `L'Italia ripudia la guerra come mezzo per risolvere i conflitti.` },
      { type: `order`, q: `Metti in ordine il cammino di una legge.`, items: [`Proposta`, `Approvazione della Camera`, `Approvazione del Senato`, `Promulgazione del Presidente`, `Pubblicazione in Gazzetta Ufficiale`], explain: `Proposta, voto delle due Camere, firma del Presidente, pubblicazione.` },
      { type: `mc`, q: `Chi ha spiegato per primo la separazione dei poteri?`, options: [`Montesquieu`, `Napoleone`, `Garibaldi`], answer: 0, explain: `Montesquieu, nel 1748, nel libro "Lo spirito delle leggi".` },
      { type: `tf`, q: `Le Regioni a statuto speciale sono 5.`, answer: true, explain: `Valle d'Aosta, Trentino-Alto Adige, Friuli-Venezia Giulia, Sicilia e Sardegna.` },
      { type: `mc`, q: `Perché i poteri sono divisi?`, options: [`Per risparmiare soldi`, `Perché nessuno abbia troppo potere e possa abusarne`, `Perché lo vuole l'Europa`], answer: 1, explain: `Dividere il potere protegge la libertà: "il potere ferma il potere".` }
    ]
  }
});
