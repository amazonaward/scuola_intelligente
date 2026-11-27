TOPIC('it', {
  id: `l1-lat-metodo-traduzione`,
  title: `Il metodo di traduzione`,
  intro: `Tradurre dal latino non è un gioco di fortuna né un esercizio di memoria: è un <b>metodo</b>, e come ogni metodo si impara. Chi lo applica sempre nello stesso ordine sbaglia molto meno di chi "indovina" a partire dalle parole che riconosce. In questa lezione unisci tutto quello che hai studiato (declinazioni, aggettivi, verbi, complementi) in una <b>procedura in sette passi</b>: leggere, usare il vocabolario, trovare il verbo, trovare il soggetto e gli altri casi, riconoscere i complementi, ricostruire la frase in italiano, controllare. Alla fine saprai tradurre le prime frasi complete del latino con sicurezza. 🧭📖`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Perché il latino non si legge "da sinistra a destra"`,
      html: `<p>In italiano l'ordine delle parole è molto importante: "Il lupo mangia l'agnello" e "L'agnello mangia il lupo" sono due frasi diverse. In latino la funzione di ogni parola è indicata dalla <b>desinenza</b>, quindi l'ordine è <b>libero</b> e di solito <b>il verbo è alla fine</b>. L'ordine più comune è: <b>soggetto – complementi – oggetto – verbo</b> (SOV). Per esempio:</p>
<p><i>Agnus lupum non timet.</i> (Agnus = soggetto, lupum = oggetto, timet = verbo) ➜ "L'agnello non teme il lupo."<br><i>Lupum agnus non timet.</i> ➜ Stessa frase! Cambia solo l'enfasi.</p>
<p>Questo significa che se traduci <b>nell'ordine in cui le parole compaiono</b> ottieni una frase italiana senza senso (o con un senso diverso). Devi invece <b>analizzare</b> la frase e poi <b>ricostruirla</b>. Non è un "indovinello": è come risolvere un puzzle, dove ogni pezzo ha una forma (la desinenza) che ti dice dove andare.</p>
<p>Altre differenze con l'italiano:</p>
<ul>
<li><b>Non ci sono articoli</b> (né determinativi né indeterminativi): <i>puella</i> = "la ragazza" o "una ragazza", a seconda del contesto.</li>
<li>Il <b>pronome soggetto</b> si omette: <i>amamus</i> = "(noi) amiamo".</li>
<li>L'<b>aggettivo</b> può essere lontano dal nome (ma concorda sempre).</li>
</ul>`
    },
    {
      type: `text`, title: `2. Saper usare il vocabolario`,
      html: `<p>Sul vocabolario si cerca il <b>lemma</b> (la forma "di base" della parola), non la forma che compare nella frase. Per trovare il lemma devi quindi <b>risalire dalla desinenza</b>.</p>
<h4>Come si presentano i nomi</h4>
<p><i>rosa, -ae</i> f. = "rosa" (nominativo, genitivo, genere ➜ 1ª declinazione, tema <i>ros-</i>)<br>
<i>dominus, -i</i> m. = "padrone" (2ª)<br>
<i>rex, regis</i> m. = "re" (3ª, tema <i>reg-</i>)<br>
<i>bellum, -i</i> n. = "guerra" (2ª neutro)</p>
<h4>Come si presentano i verbi</h4>
<p><i>amo, -as, -avi, -atum, -are</i> (1) = "amare". Il numero tra parentesi è la coniugazione. Per il presente, imperfetto e futuro ti bastano la <b>1ª persona</b> e l'<b>infinito</b>.</p>
<h4>Come si presentano gli aggettivi</h4>
<p><i>bonus, -a, -um</i> = "buono"; <i>pulcher, -chra, -chrum</i> = "bello"; <i>fortis, -e</i> = "forte".</p>
<h4>Come risalire dal "testo" al lemma</h4>
<table>
<tr><th>Forma nel testo</th><th>Indizio</th><th>Lemma da cercare</th></tr>
<tr><td><i>puellarum</i></td><td>-arum = genitivo plurale 1ª</td><td><b>puella, -ae</b></td></tr>
<tr><td><i>servos</i></td><td>-os = accusativo plurale 2ª</td><td><b>servus, -i</b></td></tr>
<tr><td><i>militibus</i></td><td>-ibus = dat./abl. plurale 3ª; tema <i>milit-</i></td><td><b>miles, militis</b></td></tr>
<tr><td><i>legebant</i></td><td>-ebant = imperfetto, 3ª plurale</td><td><b>lego, -is, -ere</b></td></tr>
<tr><td><i>docebitur</i></td><td>-bitur = futuro passivo 3ª sing.</td><td><b>doceo, -es, -ere</b></td></tr>
<tr><td><i>navigabunt</i></td><td>-bunt = futuro, 3ª plur.</td><td><b>navigo, -as, -are</b></td></tr>
</table>
<p><b>Attenzione</b>: se la parola non si trova, prova a togliere altre desinenze o a pensare a una declinazione diversa. Molti errori degli studenti nascono dal cercare la forma sbagliata. Se cerchi <i>regis</i> e non trovi nulla, ricordati che il lemma è <i>rex</i> (il tema è <i>reg-</i>).</p>
<p>Il vocabolario ti dà anche i <b>diversi significati</b> di una parola: scegli quello che si adatta al <b>contesto</b>. Esempi di parole con più significati: <i>virtus</i> (valore, virtù, coraggio), <i>res</i> (cosa, fatto, affare), <i>pars</i> (parte, fazione), <i>animus</i> (anima, coraggio, intenzione), <i>gratia</i> (grazia, riconoscenza, favore), <i>liber</i> (libro / libero).</p>`
    },
    {
      type: `svg`, title: `Il metodo in sette passi`,
      caption: `Le sette tappe della traduzione, più il controllo finale. Non saltarle mai, soprattutto quando la frase sembra facile.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<text x="300" y="26" font-size="20" font-weight="bold" fill="#4c1d95" text-anchor="middle">IL METODO IN 7 PASSI</text>
<g font-size="15" font-weight="bold">
<rect x="14" y="44" width="136" height="68" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/><text x="82" y="68" fill="#4c1d95" text-anchor="middle">1. LEGGI</text><text x="82" y="90" font-size="13" font-weight="normal" fill="#334155" text-anchor="middle">tutta la frase</text>
<rect x="164" y="44" width="136" height="68" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/><text x="232" y="68" fill="#4c1d95" text-anchor="middle">2. VERBO</text><text x="232" y="90" font-size="13" font-weight="normal" fill="#334155" text-anchor="middle">persona, tempo</text>
<rect x="314" y="44" width="136" height="68" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/><text x="382" y="68" fill="#4c1d95" text-anchor="middle">3. SOGGETTO</text><text x="382" y="90" font-size="13" font-weight="normal" fill="#334155" text-anchor="middle">nominativo + verbo</text>
<rect x="464" y="44" width="122" height="68" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/><text x="525" y="68" fill="#4c1d95" text-anchor="middle">4. OGGETTO</text><text x="525" y="90" font-size="13" font-weight="normal" fill="#334155" text-anchor="middle">accusativo</text>
<rect x="14" y="140" width="136" height="68" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="82" y="164" fill="#78350f" text-anchor="middle">5. COMPLEMENTI</text><text x="82" y="186" font-size="13" font-weight="normal" fill="#334155" text-anchor="middle">caso + preposizione</text>
<rect x="164" y="140" width="136" height="68" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="232" y="164" fill="#78350f" text-anchor="middle">6. AGGETTIVI</text><text x="232" y="186" font-size="13" font-weight="normal" fill="#334155" text-anchor="middle">concordanza, genitivo</text>
<rect x="314" y="140" width="136" height="68" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/><text x="382" y="164" fill="#14532d" text-anchor="middle">7. COSTRUISCI</text><text x="382" y="186" font-size="13" font-weight="normal" fill="#334155" text-anchor="middle">la frase italiana</text>
<rect x="464" y="140" width="122" height="68" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/><text x="525" y="164" fill="#14532d" text-anchor="middle">CONTROLLA</text><text x="525" y="186" font-size="13" font-weight="normal" fill="#334155" text-anchor="middle">senso e desinenze</text>
</g>
<g stroke="#7c3aed" stroke-width="3" fill="#7c3aed">
<line x1="150" y1="78" x2="162" y2="78"/><line x1="300" y1="78" x2="312" y2="78"/><line x1="450" y1="78" x2="462" y2="78"/>
<line x1="150" y1="174" x2="162" y2="174"/><line x1="300" y1="174" x2="312" y2="174"/><line x1="450" y1="174" x2="462" y2="174"/>
</g>
<text x="300" y="250" font-size="16" fill="#4c1d95" text-anchor="middle" font-weight="bold">Dal verbo ai complementi: si parte da ciò che regge la frase</text>
<text x="300" y="276" font-size="15" fill="#334155" text-anchor="middle">Il verbo sta di solito in fondo alla frase latina: cerca da lì</text>
</svg>`
    },
    {
      type: `text`, title: `3. I sette passi, uno per uno`,
      html: `<ol>
<li><b>Leggi tutta la frase</b> (a voce alta, con l'accento giusto) senza tradurre: cerca di capire l'argomento. Conta quanti <b>verbi</b> ci sono: ogni verbo di modo finito è una proposizione.</li>
<li><b>Trova il verbo</b> (di solito in fondo) e analizzalo: <b>persona, numero, tempo, diatesi</b> (attiva o passiva). Ricavane l'infinito e cerca il significato sul vocabolario.</li>
<li><b>Trova il soggetto</b>: è un nome o pronome al <b>nominativo</b> che <b>concorda in persona e numero</b> con il verbo. Se non c'è, è sottinteso e lo dice la desinenza (<i>laboramus</i> = "lavoriamo").</li>
<li><b>Trova l'oggetto</b> (accusativo) se il verbo è transitivo, e i complementi di <b>termine</b> (dativo) e <b>specificazione</b> (genitivo).</li>
<li><b>Riconosci i complementi indiretti</b> (ablativo, accusativo con preposizione): luogo, tempo, mezzo, modo, causa, compagnia, agente…</li>
<li><b>Abbina gli aggettivi</b> ai nomi (stesso genere, numero, caso) e i possessivi.</li>
<li><b>Costruisci la frase italiana</b>: soggetto, verbo, oggetto, complementi, con l'ordine naturale dell'italiano; aggiungi articoli e preposizioni; controlla il senso e rileggi.</li>
</ol>
<p>L'ultima domanda da farti è sempre: <i>"La mia frase ha senso in italiano? Tutte le parole latine sono state tradotte? Ogni desinenza è stata rispettata?"</i> Se manca una parola o una desinenza non ha trovato posto, c'è un errore.</p>`
    },
    {
      type: `example`, title: `Traduzione guidata di una frase`,
      html: `<p><i>Nautae magnis navibus ad insulam parvam cum magna cura navigabant.</i></p>
<table>
<tr><th>Passo</th><th>Analisi</th></tr>
<tr><td>1. Verbi</td><td>Un solo verbo: <b>navigabant</b>.</td></tr>
<tr><td>2. Verbo</td><td>navigabant = 3ª plurale, imperfetto indicativo attivo di <i>navigo, -as, -are</i> = "navigavano".</td></tr>
<tr><td>3. Soggetto</td><td><b>nautae</b> = nominativo plurale (concorda con navigabant) = "i marinai". (Nota: <i>nautae</i> potrebbe essere gen. o dat. sing. ma qui il verbo è plurale e non c'è altro soggetto.)</td></tr>
<tr><td>4. Oggetto</td><td>Nessuno: <i>navigo</i> qui è intransitivo.</td></tr>
<tr><td>5. Complementi</td><td><b>magnis navibus</b>: ablativo plurale senza preposizione = mezzo ("con grandi navi"); <b>ad insulam parvam</b>: ad + accusativo = moto a luogo ("verso la piccola isola"); <b>cum magna cura</b>: cum + ablativo = modo ("con grande cura").</td></tr>
<tr><td>6. Aggettivi</td><td><i>magnis</i> con <i>navibus</i>, <i>parvam</i> con <i>insulam</i>, <i>magna</i> con <i>cura</i>.</td></tr>
<tr><td>7. Costruzione</td><td>"I marinai navigavano verso la piccola isola con grandi navi e con grande cura."</td></tr>
</table>`
    },
    {
      type: `quiz`, title: `Mini-quiz: il metodo`,
      questions: [
        { type: `mc`, q: `Qual è il primo passo del metodo?`, options: [`Cercare tutte le parole sul vocabolario`, `Leggere tutta la frase e individuare i verbi`, `Tradurre la prima parola`], answer: 1, explain: `Prima si legge e si individua il verbo; il vocabolario si usa dopo aver analizzato.` },
        { type: `mc`, q: `Come si riconosce il soggetto?`, options: [`È la prima parola della frase`, `È al nominativo e concorda con il verbo`, `È sempre un nome proprio`], answer: 1, explain: `Il soggetto è al nominativo e concorda in persona e numero con il verbo.` },
        { type: `mc`, q: `Dove si trova di solito il verbo in una frase latina?`, options: [`all'inizio`, `in fondo`, `sempre al centro`], answer: 1, explain: `L'ordine più comune è soggetto – complementi – oggetto – verbo.` },
        { type: `tf`, q: `In latino gli articoli determinativi sono sempre espressi.`, answer: false, explain: `Il latino non ha articoli: si aggiungono nella traduzione italiana.` }
      ]
    },
    {
      type: `text`, title: `4. Ambiguità e trappole frequenti`,
      html: `<p>Alcune forme latine hanno più analisi possibili. Vediamo le trappole più comuni e come uscirne:</p>
<table>
<tr><th>Forma</th><th>Analisi possibili</th><th>Come scegliere</th></tr>
<tr><td><b>-ae</b> (puellae)</td><td>gen. sing., dat. sing., nom. plur. (1ª)</td><td>Guarda il verbo (singolare/plurale) e il senso (di chi / a chi)</td></tr>
<tr><td><b>-a</b> (rosa)</td><td>nom. sing., voc. sing., abl. sing. (1ª); nom./acc. plur. neutro</td><td>Guarda se fa da soggetto o da complemento; l'abl. ha la <i>a</i> lunga</td></tr>
<tr><td><b>-i</b> (domini)</td><td>gen. sing. o nom. plur. (2ª)</td><td>Il verbo plurale = nom. plur.; il nome da cui dipende = gen.</td></tr>
<tr><td><b>-o</b> (domino)</td><td>dat. o abl. sing. (2ª)</td><td>Guarda se c'è una preposizione o il senso (a chi / con che cosa)</td></tr>
<tr><td><b>-is</b> (rosis, dominis)</td><td>dat. o abl. plur.</td><td>Guarda la preposizione o il verbo</td></tr>
<tr><td><b>-es</b> (reges)</td><td>nom., voc., acc. plur. (3ª); anche 2ª sing. di verbi (leges)</td><td>Confronta con il verbo</td></tr>
<tr><td><b>-um</b> (dominum, bellum)</td><td>acc. sing. (2ª) o nom./acc. neutro</td><td>Guarda il genere del nome</td></tr>
<tr><td><b>-am</b> (rosam, legam)</td><td>acc. sing. (1ª); 1ª sing. futuro di 3ª/4ª</td><td>Vedi se c'è un nome o un verbo</td></tr>
<tr><td><b>-t, -nt</b></td><td>3ª sing./plur. attivo</td><td>—</td></tr>
</table>
<p><b>Regola d'oro</b>: non decidere alla prima. Elenca tutte le analisi possibili, poi scegli quella che rende la frase coerente. Se due soggetti sono possibili, controlla se l'altro è accusativo (oggetto) o ha un altro compito. La frase deve avere <b>esattamente un soggetto per ogni verbo</b>, e ogni parola deve avere una funzione.</p>`
    },
    {
      type: `text`, title: `5. Collegare le frasi: congiunzioni e avverbi semplici`,
      html: `<p>Nelle prime frasi trovi spesso parole piccole ma fondamentali:</p>
<table>
<tr><th>Latino</th><th>Italiano</th><th>Nota</th></tr>
<tr><td><b>et</b></td><td>e</td><td><i>et… et</i> = "sia… sia"</td></tr>
<tr><td><b>-que</b></td><td>e</td><td>enclitica: si attacca alla parola seguente (<i>pueri puellaeque</i> = i ragazzi e le ragazze)</td></tr>
<tr><td><b>ac, atque</b></td><td>e, e inoltre</td><td>più enfatiche</td></tr>
<tr><td><b>sed</b></td><td>ma</td><td>avversativa</td></tr>
<tr><td><b>aut, vel</b></td><td>o</td><td><i>aut</i> è escludente, <i>vel</i> inclusiva</td></tr>
<tr><td><b>nam, enim</b></td><td>infatti</td><td><i>enim</i> è sempre al secondo posto</td></tr>
<tr><td><b>igitur</b></td><td>dunque</td><td>di solito al secondo posto</td></tr>
<tr><td><b>non</b></td><td>non</td><td>prima del verbo; <i>nec, neque</i> = e non, né</td></tr>
<tr><td><b>etiam, quoque</b></td><td>anche</td><td><i>quoque</i> sta dopo la parola</td></tr>
<tr><td><b>semper, saepe, nunc, tum, iam</b></td><td>sempre, spesso, ora, allora, già</td><td>avverbi di tempo</td></tr>
<tr><td><b>ibi, ubi</b></td><td>là, dove</td><td>avverbi di luogo</td></tr>
</table>`
    },
    {
      type: `widget`, title: `Flashcard: le parole-ponte`,
      widget: `flashcards`,
      options: {
        cards: [
          { front: `et`, back: `e` },
          { front: `-que`, back: `e (enclitica, si attacca alla parola dopo)` },
          { front: `sed`, back: `ma` },
          { front: `nam`, back: `infatti` },
          { front: `igitur`, back: `dunque (2º posto)` },
          { front: `aut`, back: `o (escludente)` },
          { front: `quoque`, back: `anche (dopo la parola)` },
          { front: `semper`, back: `sempre` },
          { front: `saepe`, back: `spesso` },
          { front: `nunc`, back: `ora` }
        ]
      },
      caption: `Ripassa i connettivi: sono la colla delle frasi latine.`
    },
    {
      type: `example`, title: `Due frasi da tradurre con il metodo`,
      html: `<p><b>Frase A</b>: <i>Rex civium libertatem defendit, sed hostes urbem oppugnant.</i></p>
<ul>
<li>Verbi: <i>defendit</i> (3ª sing. presente di <i>defendo</i>), <i>oppugnant</i> (3ª plur., <i>oppugno</i>).</li>
<li>Prima proposizione: soggetto <i>rex</i>; oggetto <i>libertatem</i> (acc. sing. di <i>libertas</i>); <i>civium</i> = gen. plur. ("dei cittadini") che dipende da <i>libertatem</i>.</li>
<li>Seconda: soggetto <i>hostes</i> (nom. plur.); oggetto <i>urbem</i>.</li>
<li><b>Traduzione</b>: "Il re difende la libertà dei cittadini, ma i nemici assediano la città."</li>
</ul>
<p><b>Frase B</b>: <i>Puellae et pueri a magistro in schola laudabantur.</i></p>
<ul>
<li>Verbo: <i>laudabantur</i> = 3ª plur., imperfetto passivo di <i>laudo</i>.</li>
<li>Soggetto: <i>puellae et pueri</i> (nom. plur.): "le ragazze e i ragazzi".</li>
<li>Complementi: <i>a magistro</i> = agente ("dal maestro"); <i>in schola</i> = stato in luogo ("a scuola").</li>
<li><b>Traduzione</b>: "Le ragazze e i ragazzi erano lodati dal maestro a scuola."</li>
</ul>`
    },
    {
      type: `remember`, title: `Checklist finale prima di consegnare`,
      html: `<ul>
<li>Ogni <b>verbo</b> è tradotto con persona, numero e tempo giusti?</li>
<li>Ogni verbo ha il suo <b>soggetto</b> (esplicito o sottinteso)?</li>
<li>Ogni <b>caso</b> è stato rispettato (nominativo = soggetto, accusativo = oggetto, genitivo = "di", dativo = "a", ablativo = complemento)?</li>
<li>Ogni <b>aggettivo</b> concorda con il suo nome?</li>
<li>Le <b>preposizioni</b> latine sono tradotte (ad = verso, ex = da, cum = con, a/ab = da)?</li>
<li>La frase italiana ha <b>senso</b> e l'<b>ordine</b> è naturale?</li>
<li>Non è rimasta <b>nessuna parola</b> senza traduzione?</li>
</ul>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… i Romani traducevano anche loro?`,
      html: `<p>Gli intellettuali romani studiavano il greco e traducevano dal greco al latino. Il primo grande traduttore fu <b>Livio Andronico</b> (III secolo a.C., originario di Taranto), che tradusse l'<i>Odissea</i> in latino (<i>Odusia</i>) adattandola per i Romani. Cicerone, secoli dopo, riflette sul modo di tradurre: non "parola per parola" (<i>verbum pro verbo</i>) ma "senso per senso", cercando di restituire lo <i>stile</i> dell'originale. È la stessa lezione di questa pagina: non sostituire parola con parola, ma ricostruire il senso.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… il verbo in fondo ha un nome?`,
      html: `<p>Gli studiosi di linguistica chiamano l'ordine <b>SOV</b> (soggetto – oggetto – verbo). Lingue come il giapponese, il turco, il coreano e il persiano hanno questo ordine! In latino il verbo in fondo crea un po' di <i>suspense</i>: ascolti tutta la frase prima di sapere che cosa sta facendo il soggetto. Gli oratori sfruttavano questo effetto, come in <i>Veni, vidi, vici</i>: tre verbi senza altro, quasi telegrafici.</p>`
    },
    {
      type: `alternatives`, title: `Altri modi per tradurre meglio`,
      intro: `Non esiste un solo modo per organizzare la traduzione: scegli quello che fa per te.`,
      tabs: [
        {
          label: `🎨 Il metodo dei colori`,
          html: `<p>Sottolinea con <b>colori diversi</b> le funzioni: <span style="color:#dc2626"><b>rosso</b></span> il verbo, <span style="color:#2563eb"><b>blu</b></span> il soggetto, <span style="color:#16a34a"><b>verde</b></span> l'oggetto, <span style="color:#d97706"><b>arancione</b></span> i complementi indiretti, <span style="color:#7c3aed"><b>viola</b></span> gli attributi. Vedrai la <i>struttura</i> della frase. Molti studenti si accorgono subito degli errori perché un colore resta "vuoto".</p>`
        },
        {
          label: `🧱 Il metodo delle colonne`,
          html: `<p>Disegna una tabella con sette colonne: <b>Parola | Lemma | Caso/Tempo | Numero | Genere/Persona | Funzione | Traduzione</b>. Per ogni parola compili una riga. Sembra lungo, ma impedisce gli errori e ti allena a riconoscere le forme: dopo un mese lo farai a mente.</p>`
        },
        {
          label: `🗣️ Leggi ad alta voce`,
          html: `<p>Leggi la frase latina con la pronuncia e l'accento corretti: spesso senti subito che <i>servi</i> e <i>laborant</i> vanno insieme (soggetto e verbo plurali) o che <i>pulchra</i> chiama un nome femminile. Poi leggi la traduzione italiana e chiediti se suona naturale. La lettura ad alta voce aiuta sia l'analisi sia la costruzione.</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: la traduzione`,
      nodes: [
        { id: `trad`, label: `Tradurre`, x: 50, y: 8, color: `#a855f7`, html: `Ricostruire il senso della frase in italiano partendo dalle desinenze.`, why: `Tradurre non è sostituire parole: due lingue organizzano il senso in modo diverso. Il latino lo affida alle desinenze, l'italiano all'ordine e alle preposizioni.` },
        { id: `voc`, label: `Vocabolario`, x: 18, y: 42, color: `#16a34a`, html: `Si cerca il lemma, non la forma.`, why: `Il lemma (nominativo, infinito) è convenzionale ma permette di ritrovare ogni forma: l'idea risale ai grammatici alessandrini e latini (Varrone, Prisciano).` },
        { id: `verbo`, label: `Il verbo`, x: 50, y: 42, color: `#3b82f6`, html: `Persona, numero, tempo, diatesi.`, why: `Il verbo è il centro della frase (in linguistica: il "predicato"); individuarlo permette di trovare il soggetto per concordanza e di capire quante proposizioni ci sono.` },
        { id: `caso`, label: `I casi`, x: 82, y: 42, color: `#f59e0b`, html: `Nominativo = soggetto; accusativo = oggetto; genitivo, dativo, ablativo = complementi.`, why: `I casi sostituiscono le preposizioni e l'ordine: per questo si studiano a memoria le declinazioni.` },
        { id: `amb`, label: `Ambiguità`, x: 30, y: 80, color: `#ef4444`, html: `Una stessa forma, più analisi.`, why: `Nelle declinazioni diverse le stesse desinenze si ripetono (per esempio -is, -i, -a): è il prezzo di un sistema compatto. Il contesto risolve l'ambiguità.` },
        { id: `ita`, label: `Italiano`, x: 75, y: 82, color: `#06b6d4`, html: `Ordine SVO e preposizioni.`, why: `L'italiano usa un ordine fisso (soggetto – verbo – oggetto) e le preposizioni al posto dei casi: tradurre significa passare da un sistema all'altro.` }
      ],
      edges: [
        [`trad`, `voc`, `usa`], [`trad`, `verbo`, `parte da`], [`trad`, `caso`, `legge`], [`caso`, `amb`, `ma`], [`amb`, `ita`, `contesto`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: ambiguità e connettivi`,
      questions: [
        { type: `mc`, q: `"Pueri puellaeque" significa…`, options: [`i ragazzi e le ragazze`, `i ragazzi delle ragazze`, `la ragazza dei ragazzi`], answer: 0, explain: `-que è una congiunzione enclitica: "e le ragazze".` },
        { type: `mc`, q: `Come si traduce "sed"?`, options: [`e`, `ma`, `dunque`], answer: 1, explain: `Sed = ma (avversativa).` },
        { type: `text`, q: `Qual è il lemma di "regibus"? (nominativo singolare)`, answer: [`rex`], explain: `Regibus = dat./abl. plurale di rex, regis.` },
        { type: `mc`, q: `"Domini servos vocant": qual è il soggetto?`, options: [`servos`, `domini (nom. plur.)`, `vocant`], answer: 1, explain: `Domini è nominativo plurale e concorda con vocant; servos è accusativo.` }
      ]
    }
  ],
  glossary: [
    { t: `Lemma`, d: `Forma di base di una parola sul vocabolario (nominativo per i nomi, 1ª persona del presente per i verbi).` },
    { t: `Soggetto`, d: `Nome o pronome al nominativo che concorda con il verbo.` },
    { t: `Oggetto`, d: `Complemento all'accusativo del verbo transitivo.` },
    { t: `Predicato`, d: `Il verbo (o la copula con il nome del predicato).` },
    { t: `Ordine SOV`, d: `Soggetto – oggetto – verbo: ordine tipico del latino.` },
    { t: `Enclitica`, d: `Particella che si attacca alla parola che segue (-que).` },
    { t: `Concordanza`, d: `Accordo di genere, numero e caso (aggettivo/nome) o persona e numero (soggetto/verbo).` },
    { t: `Analisi`, d: `Scomposizione della frase nei suoi elementi e funzioni.` },
    { t: `Polisemia`, d: `Presenza di più significati per una stessa parola.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `order`, q: `Metti in ordine i passi del metodo di traduzione.`, items: [`Leggere tutta la frase`, `Trovare e analizzare il verbo`, `Trovare il soggetto`, `Trovare oggetto e complementi`, `Abbinare gli aggettivi`, `Costruire la frase italiana`], explain: `L'ordine consigliato è: leggere, verbo, soggetto, oggetto e complementi, aggettivi, costruzione.` },
      { type: `mc`, q: `Traduci: "Agricolae agros colunt".`, options: [`I contadini coltivano i campi`, `Il contadino coltiva il campo`, `I campi coltivano i contadini`], answer: 0, explain: `Agricolae = nom. plur. (soggetto); agros = acc. plur.; colunt = 3ª plur.` },
      { type: `mc`, q: `Traduci: "Puer a matre laudatur".`, options: [`Il ragazzo loda la madre`, `Il ragazzo è lodato dalla madre`, `La madre è lodata dal ragazzo`], answer: 1, explain: `Laudatur passivo; a matre = agente.` },
      { type: `mc`, q: `"Rex hostes vincit" significa…`, options: [`Il re vince i nemici`, `I nemici vincono il re`, `Il re è vinto dai nemici`], answer: 0, explain: `Rex è nominativo singolare (soggetto), hostes è accusativo plurale (oggetto), vincit 3ª sing. attivo.` },
      { type: `text`, q: `Qual è il lemma di "navibus"? (nominativo singolare)`, answer: [`navis`], explain: `Navibus = dat./abl. plurale di navis, navis.` },
      { type: `mc`, q: `In latino la funzione di una parola è indicata…`, options: [`dall'ordine`, `dalla desinenza`, `dall'articolo`], answer: 1, explain: `Dal caso, indicato dalla desinenza.` },
      { type: `tf`, q: `"-que" è una congiunzione che si attacca alla parola seguente.`, answer: true, explain: `È una enclitica: "pueri puellaeque" = i ragazzi e le ragazze.` },
      { type: `mc`, q: `Traduci: "Nautae in insulam navigant".`, options: [`I marinai navigano verso l'isola`, `I marinai navigano nell'isola (stato)`, `L'isola naviga i marinai`], answer: 0, explain: `In + accusativo (insulam) = moto a luogo.` },
      { type: `mc`, q: `"Puellae rosas dant". Chi dà le rose?`, options: [`le ragazze (soggetto)`, `le rose`, `non si può sapere`], answer: 0, explain: `Puellae è nominativo plurale e concorda con dant; rosas è accusativo plurale.` },
      { type: `tf`, q: `Se una forma ha più analisi possibili, si sceglie sempre la prima.`, answer: false, explain: `Si elencano tutte le analisi e si sceglie in base al contesto e al verbo.` }
    ]
  }
});
