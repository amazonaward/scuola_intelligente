TOPIC('it', {
  id: `l2-lat-cum-infinitive`,
  title: `Cum narrativo e infinitive`,
  intro: `Arrivi alle <b>due costruzioni più tipiche del periodo latino</b>: il <b>cum narrativo</b> (che racconta ciò che accadde prima o durante) e la <b>proposizione infinitiva</b> (l'<b>accusativo con l'infinito</b>, che dice "che… " dopo i verbi di dire, pensare, sentire). Per usarle bene serve una regola di coordinamento dei tempi: la <b>consecutio temporum</b>. In questa lezione impari le varie funzioni di <i>cum</i> (narrativo, temporale, causale, concessivo), la tabella dei tempi del congiuntivo (contemporaneità, anteriorità, posteriorità), la costruzione dell'infinitiva con soggetto all'accusativo, il riflessivo <i>se</i> e il nominativo con l'infinito (<i>dicitur, videtur</i>). Dopo questa lezione sarai in grado di leggere periodi di Cesare, Cicerone e Livio con un metodo sicuro. 🏛️⏳`,
  minutes: 60,
  sections: [
    {
      type: `text`, title: `1. Cum: una congiunzione, molti volti`,
      html: `<p><b>Cum</b> è una delle parole latine più ambigue: può essere <b>preposizione</b> (con l'ablativo: <i>cum amicis</i> "con gli amici") o <b>congiunzione</b> ("quando, poiché, sebbene, mentre"). Come congiunzione introduce subordinate con valori diversi, a seconda del <b>modo</b> del verbo:</p>
<table>
<tr><th>Valore</th><th>Modo</th><th>Esempio</th><th>Traduzione</th></tr>
<tr><td><b>cum temporale</b> (puro)</td><td>indicativo</td><td><i>Cum Caesar in Galliam venit, bellum gerebatur.</i></td><td>Quando Cesare giunse in Gallia, si combatteva.</td></tr>
<tr><td><b>cum iterativo</b></td><td>indicativo (perf./piucch.)</td><td><i>Cum rex advenerat, omnes surgebant.</i></td><td>Ogni volta che il re arrivava, tutti si alzavano.</td></tr>
<tr><td><b>cum narrativo</b> (storico)</td><td>congiuntivo imperf. o piucch.</td><td><i>Cum Caesar in Galliam venisset, bellum gessit.</i></td><td>Poiché/dopo che Cesare era giunto in Gallia, fece guerra.</td></tr>
<tr><td><b>cum causale</b></td><td>congiuntivo</td><td><i>Cum tu fortis sis, tibi confido.</i></td><td>Poiché sei forte, mi fido di te.</td></tr>
<tr><td><b>cum concessivo</b></td><td>congiuntivo (spesso con tamen)</td><td><i>Cum esset fortis, tamen victus est.</i></td><td>Sebbene fosse forte, fu vinto.</td></tr>
<tr><td><b>cum avversativo</b></td><td>congiuntivo</td><td><i>Cum alii fugerent, ille pugnabat.</i></td><td>Mentre gli altri fuggivano, lui combatteva.</td></tr>
</table>
<p>La regola pratica: <b>cum + indicativo</b> = "quando" puro (un dato di fatto); <b>cum + congiuntivo</b> = narrativo, causale o concessivo (il contesto dice quale). Tradurre il <i>cum</i> con "quando" quando è causale o concessivo è un errore comune.</p>`
    },
    {
      type: `text`, title: `2. Il cum narrativo`,
      html: `<p>Il <b>cum narrativo</b> è la costruzione più frequente nella prosa storica: introduce un fatto che <b>precede</b> o <b>accompagna</b> la vicenda principale, spesso con una sfumatura <b>causale</b> o <b>temporale</b>. Ha sempre il <b>congiuntivo imperfetto</b> (contemporaneità) o <b>piuccheperfetto</b> (anteriorità), perché si riferisce al passato:</p>
<ul>
<li><b>Contemporaneità</b> ➜ <b>imperfetto congiuntivo</b>: <i>Cum Caesar in Gallia esset, Romae seditiones erant.</i> ➜ "Mentre Cesare era in Gallia, a Roma c'erano disordini."</li>
<li><b>Anteriorità</b> ➜ <b>piuccheperfetto congiuntivo</b>: <i>Cum Caesar Galliam vicisset, Romam rediit.</i> ➜ "Dopo che Cesare ebbe vinto la Gallia, tornò a Roma."</li>
</ul>
<p>Il verbo principale è un <b>tempo storico</b> (perfetto storico, imperfetto): <i>Cum hostes appropinquarent, milites arma sumpserunt</i> "Mentre i nemici si avvicinavano, i soldati presero le armi". L'italiano traduce con "dopo che, quando, mentre, poiché": scegli tu secondo il senso.</p>
<p><b>Struttura</b>: <i>Cum + soggetto + congiuntivo imperfetto/piuccheperfetto, + principale al perfetto/imperfetto</i>.</p>
<p><b>Quando il cum non è narrativo</b>: se il verbo è all'<b>indicativo</b>, è temporale puro; se ha un <b>valore causale o concessivo evidente</b> (<i>cum… tamen</i>), traduci di conseguenza. Il cum narrativo non traduce mai l'italiano "con": confondere <i>cum</i> preposizione con <i>cum</i> congiunzione è l'errore più frequente nelle versioni.</p>`
    },
    {
      type: `svg`, title: `La consecutio temporum`,
      caption: `Con un verbo reggente principale o storico, il congiuntivo cambia tempo.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#faf5ff"/>
<text x="300" y="28" font-size="20" font-weight="bold" fill="#581c87" text-anchor="middle">CONSECUTIO TEMPORUM</text>
<rect x="20" y="45" width="560" height="38" rx="8" fill="#e9d5ff" stroke="#9333ea" stroke-width="2"/>
<text x="130" y="70" font-size="16" font-weight="bold" fill="#581c87" text-anchor="middle">Rapporto</text>
<text x="300" y="70" font-size="16" font-weight="bold" fill="#581c87" text-anchor="middle">Reggente PRINCIPALE</text>
<text x="480" y="70" font-size="16" font-weight="bold" fill="#581c87" text-anchor="middle">Reggente STORICO</text>
<rect x="20" y="92" width="560" height="50" rx="8" fill="#ffffff" stroke="#c4b5fd" stroke-width="2"/>
<text x="130" y="122" font-size="16" fill="#0f172a" text-anchor="middle">contemporaneità</text>
<text x="300" y="122" font-size="16" fill="#0f172a" text-anchor="middle">cong. PRESENTE</text>
<text x="480" y="122" font-size="16" fill="#0f172a" text-anchor="middle">cong. IMPERFETTO</text>
<rect x="20" y="150" width="560" height="50" rx="8" fill="#ffffff" stroke="#c4b5fd" stroke-width="2"/>
<text x="130" y="180" font-size="16" fill="#0f172a" text-anchor="middle">anteriorità</text>
<text x="300" y="180" font-size="16" fill="#0f172a" text-anchor="middle">cong. PERFETTO</text>
<text x="480" y="180" font-size="16" fill="#0f172a" text-anchor="middle">cong. PIUCCHEPERF.</text>
<rect x="20" y="208" width="560" height="50" rx="8" fill="#ffffff" stroke="#c4b5fd" stroke-width="2"/>
<text x="130" y="238" font-size="16" fill="#0f172a" text-anchor="middle">posteriorità</text>
<text x="300" y="238" font-size="16" fill="#0f172a" text-anchor="middle">-urus sim</text>
<text x="480" y="238" font-size="16" fill="#0f172a" text-anchor="middle">-urus essem</text>
<text x="300" y="285" font-size="14" fill="#334155" text-anchor="middle">principali: presente, futuro, perfetto logico · storici: imperfetto, perfetto storico, piuccheperfetto</text>
</svg>`
    },
    {
      type: `text`, title: `3. La consecutio temporum`,
      html: `<p>La <b>consecutio temporum</b> ("successione dei tempi") è la regola che stabilisce <b>quale tempo del congiuntivo</b> usare in una subordinata, in base a:</p>
<ol>
<li>il <b>tempo del verbo reggente</b>: <b>principale</b> (presente, futuro, perfetto logico, imperativo) oppure <b>storico</b> (imperfetto, perfetto storico, piuccheperfetto);</li>
<li>il <b>rapporto</b> tra le due azioni: <b>contemporaneità</b> (stesso momento), <b>anteriorità</b> (la subordinata prima), <b>posteriorità</b> (la subordinata dopo).</li>
</ol>
<table>
<tr><th>Rapporto</th><th>Reggente principale</th><th>Reggente storico</th></tr>
<tr><td><b>Contemporaneità</b></td><td>congiuntivo presente</td><td>congiuntivo imperfetto</td></tr>
<tr><td><b>Anteriorità</b></td><td>congiuntivo perfetto</td><td>congiuntivo piuccheperfetto</td></tr>
<tr><td><b>Posteriorità</b></td><td>participio futuro + sim (<i>-urus sim</i>)</td><td>participio futuro + essem (<i>-urus essem</i>)</td></tr>
</table>
<p><b>Esempio con le interrogative indirette</b> ("chiedo che cosa fai / hai fatto / farai"):</p>
<ul>
<li><i>Quaero quid facias.</i> ➜ "Chiedo che cosa fai." (principale + contemporaneità)</li>
<li><i>Quaero quid feceris.</i> ➜ "Chiedo che cosa hai fatto." (principale + anteriorità)</li>
<li><i>Quaero quid facturus sis.</i> ➜ "Chiedo che cosa farai." (principale + posteriorità)</li>
<li><i>Quaesivi quid faceres.</i> ➜ "Chiesi che cosa facevi." (storico + contemporaneità)</li>
<li><i>Quaesivi quid fecisses.</i> ➜ "Chiesi che cosa avevi fatto." (storico + anteriorità)</li>
<li><i>Quaesivi quid facturus esses.</i> ➜ "Chiesi che cosa avresti fatto." (storico + posteriorità)</li>
</ul>
<p><b>Dove si applica</b>: interrogative indirette (<i>Nescio quis veniat</i> "non so chi venga"), finali e completive con <i>ut/ne</i>, cum narrativo, relative con il congiuntivo. Nel cum narrativo e nelle consecutive il tempo segue spesso il senso, ma lo schema vale come guida.</p>`
    },
    {
      type: `remember`, title: `Principali o storici? Un trucco`,
      html: `<p>Come distinguere i tempi <b>principali</b> dai <b>storici</b>:</p>
<ul>
<li><b>Principali</b> (guardano al presente/futuro): <i>presente</i> (<i>quaero</i>), <i>futuro</i> (<i>quaeram</i>), <i>futuro anteriore</i>, <i>imperativo</i>, <b>perfetto logico</b> (<i>quaesivi</i> = "ho chiesto", con effetto sul presente).</li>
<li><b>Storici</b> (guardano al passato): <i>imperfetto</i> (<i>quaerebam</i>), <i>perfetto storico</i> (<i>quaesivi</i> = "chiesi"), <i>piuccheperfetto</i> (<i>quaesiveram</i>).</li>
</ul>
<p>Il <b>perfetto</b> è l'unico tempo ambiguo: se si traduce con il passato prossimo ("ho chiesto"), è principale; se con il passato remoto ("chiesi"), è storico. Nei testi narrativi di storia il perfetto è quasi sempre <b>storico</b>.</p>`
    },
    {
      type: `example`, title: `Cum e consecutio in frase`,
      html: `<ol>
<li><i>Cum Caesar Rubiconem transisset, Pompeius Roma discessit.</i> ➜ "Dopo che Cesare ebbe attraversato il Rubicone, Pompeo lasciò Roma." (cum narrativo, anteriorità + storico)</li>
<li><i>Cum hostes appropinquarent, milites in castris manebant.</i> ➜ "Mentre i nemici si avvicinavano, i soldati restavano nell'accampamento." (contemporaneità)</li>
<li><i>Cum sis amicus meus, tibi omnia dico.</i> ➜ "Poiché sei mio amico, ti dico tutto." (causale)</li>
<li><i>Cum pauci essent, tamen fortiter pugnaverunt.</i> ➜ "Pur essendo pochi, tuttavia combatterono con coraggio." (concessivo)</li>
<li><i>Nescio quid agas.</i> ➜ "Non so che cosa tu faccia." (indiretta, principale + contemporaneità)</li>
</ol>`
    },
    {
      type: `quiz`, title: `Mini-quiz: cum e consecutio`,
      questions: [
        { type: `mc`, q: `"Cum Caesar venisset" è un cum…`, options: [`narrativo (anteriorità)`, `temporale con indicativo`, `iterativo`], answer: 0, explain: `Cum + congiuntivo piuccheperfetto: narrativo, anteriorità.` },
        { type: `mc`, q: `Con reggente al presente e anteriorità si usa il congiuntivo…`, options: [`presente`, `perfetto`, `imperfetto`], answer: 1, explain: `Principale + anteriorità = congiuntivo perfetto.` },
        { type: `mc`, q: `Con reggente all'imperfetto e contemporaneità si usa il congiuntivo…`, options: [`imperfetto`, `piuccheperfetto`, `presente`], answer: 0, explain: `Storico + contemporaneità = imperfetto congiuntivo.` },
        { type: `tf`, q: `"Cum" + indicativo ha sempre valore causale.`, answer: false, explain: `Cum + indicativo è temporale puro; la causale usa il congiuntivo.` }
      ]
    },
    {
      type: `text`, title: `4. La proposizione infinitiva (accusativo con infinito)`,
      html: `<p>Dopo i <b>verbi di dire, pensare, sentire, sapere e sentimenti</b> il latino non usa "che + modo finito" come l'italiano, ma una costruzione unica: il <b>soggetto va all'accusativo</b> e il <b>predicato all'infinito</b>. Si chiama <b>proposizione infinitiva</b> o <b>accusativo con l'infinito</b>:</p>
<table>
<tr><th>Latino</th><th>Italiano</th></tr>
<tr><td><i>Dico Caesarem venire.</i></td><td>Dico che Cesare viene.</td></tr>
<tr><td><i>Audio pueros ludere.</i></td><td>Sento che i ragazzi giocano. / Sento i ragazzi giocare.</td></tr>
<tr><td><i>Puto te errare.</i></td><td>Penso che tu sbagli.</td></tr>
<tr><td><i>Gaudeo te valere.</i></td><td>Sono lieto che tu stia bene.</td></tr>
</table>
<p>I <b>verbi che la reggono</b>:</p>
<ul>
<li><b>dicendi</b> ("dire"): <i>dico, nego, narro, nuntio, scribo, respondeo, polliceor, promitto</i>;</li>
<li><b>sentiendi</b> ("percepire"): <i>audio, video, sentio, intellego, cognosco, scio, nescio</i>;</li>
<li><b>putandi</b> ("credere"): <i>puto, credo, existimo, arbitror, spero, censeo, opinor</i>;</li>
<li><b>affectuum</b> ("sentimenti"): <i>gaudeo, doleo, miror, queror, laetor</i>;</li>
<li><b>voluntatis</b> ("volere/ordinare" con soggetto diverso): <i>volo, nolo, cupio, iubeo, veto, sino, patior, prohibeo</i>: <i>Iubeo te venire</i> "Ti ordino di venire"; <i>Vetat nos exire</i> "Ci vieta di uscire";</li>
<li><b>impersonali</b>: <i>constat, apparet, manifestum est, necesse est, oportet, decet</i>: <i>Constat Romam conditam esse</i> "È noto che Roma fu fondata".</li>
</ul>
<p><b>Attenzione</b>: se il soggetto della subordinata è <b>lo stesso della reggente</b>, con <i>volo, cupio, possum</i> si usa l'infinito semplice (<i>Volo venire</i> "voglio venire", non <i>volo me venire</i>). L'infinitiva con accusativo si usa quando i soggetti sono diversi.</p>`
    },
    {
      type: `text`, title: `5. I tempi dell'infinito e il riflessivo`,
      html: `<p>L'infinito in una infinitiva ha un valore <b>relativo</b> (rapporto con il verbo reggente), non assoluto:</p>
<table>
<tr><th>Infinito</th><th>Rapporto</th><th>Formazione</th><th>Esempio (con "dixit")</th></tr>
<tr><td><b>presente</b></td><td>contemporaneità</td><td>amare / amari</td><td><i>Dixit Caesarem venire.</i> "Disse che Cesare veniva."</td></tr>
<tr><td><b>perfetto</b></td><td>anteriorità</td><td>amavisse / amatum esse</td><td><i>Dixit Caesarem venisse.</i> "Disse che Cesare era venuto."</td></tr>
<tr><td><b>futuro</b></td><td>posteriorità</td><td>amaturum esse (attivo); amatum iri (passivo, raro)</td><td><i>Dixit Caesarem venturum esse.</i> "Disse che Cesare sarebbe venuto."</td></tr>
</table>
<p>L'infinito futuro attivo è formato da <b>participio futuro + esse</b>, e il participio <b>concorda con il soggetto</b>: <i>Spero me venturum esse</i> "spero di venire (che io verrò)", <i>Dico puellas venturas esse</i> "dico che le ragazze verranno". <i>Spero</i> richiede sempre il futuro.</p>
<p><b>Riflessivo</b>: se il soggetto dell'infinitiva è <b>lo stesso della reggente</b> (cioè, di chi parla o pensa) si usa <b>se</b> (accusativo del riflessivo), non <i>eum</i>:</p>
<ul>
<li><i>Caesar dixit <b>se</b> venire.</i> ➜ "Cesare disse che egli (Cesare stesso) veniva."</li>
<li><i>Caesar dixit <b>eum</b> venire.</i> ➜ "Cesare disse che un altro (lui = un'altra persona) veniva."</li>
</ul>
<p>Se la subordinata ha un soggetto diverso dalla reggente, si usa <i>eum, eam, eos</i>; per il possessivo <i>suus</i> (riflessivo) o <i>eius</i> (non riflessivo). Questa distinzione è essenziale nei brani indiretti di Cesare (<i>De bello Gallico</i>): <i>Ariovistus respondit se non timere</i> "Ariovisto rispose che non temeva".</p>`
    },
    {
      type: `text`, title: `6. Il nominativo con l'infinito`,
      html: `<p>Alcuni verbi passivi di dire e pensare cambiano costruzione: il <b>soggetto va al nominativo</b> e l'infinito si accorda. Si chiama <b>nominativo con l'infinito</b>:</p>
<ul>
<li><i>Romulus urbem condidisse dicitur.</i> ➜ "Si dice che Romolo abbia fondato la città." (<i>dicitur</i> passivo personale)</li>
<li><i>Homerus caecus fuisse traditur.</i> ➜ "Si tramanda che Omero fosse cieco."</li>
<li><i>Videtur esse bonus.</i> ➜ "Sembra essere buono."</li>
<li><i>Hannibal Alpes superavisse fertur.</i> ➜ "Si dice che Annibale abbia superato le Alpi."</li>
<li><i>Pueri iubentur discedere.</i> ➜ "Ai ragazzi si ordina di partire." (<i>iubeor, vetor</i>)</li>
</ul>
<p>Con i verbi <i>videor</i> ("sembro"), <i>dicor</i>, <i>putor</i>, <i>existimor</i>, <i>traditur</i>, <i>fertur</i> al presente si preferisce il nominativo con infinito. Nei <b>tempi composti</b> (<i>dictum est, traditum est, nuntiatum est</i>) si usa di norma la costruzione <b>impersonale</b> con accusativo e infinito: <i>Traditum est Homerum caecum fuisse</i> "Si tramandò che Omero fosse cieco".</p>`
    },
    {
      type: `widget`, title: `Gioco: che costruzione è?`,
      widget: `classify`,
      options: {
        groups: [`Cum narrativo (congiuntivo)`, `Infinitiva (acc. + infinito)`, `Nominativo con infinito`],
        items: [
          [`Cum Caesar venisset, laetus fuit`, 0], [`Cum hostes appropinquarent, fugimus`, 0], [`Cum Caesar in Gallia esset, ...`, 0],
          [`Dico te venire`, 1], [`Audio pueros cantare`, 1], [`Spero me venturum esse`, 1], [`Credo Caesarem vicisse`, 1],
          [`Romulus rex fuisse dicitur`, 2], [`Videtur esse bonus`, 2], [`Homerus caecus fuisse traditur`, 2]
        ]
      },
      caption: `Cum narrativo = subordinata con cum; infinitiva = soggetto in accusativo; nominativo con infinito = verbo passivo di dire.`
    },
    {
      type: `example`, title: `Infinitive in frase`,
      html: `<ol>
<li><i>Caesar dixit se in Galliam venturum esse.</i> ➜ "Cesare disse che sarebbe andato in Gallia." (<i>se</i> riflessivo; infinito futuro)</li>
<li><i>Scio te hoc fecisse.</i> ➜ "So che hai fatto questo." (infinito perfetto, anteriorità)</li>
<li><i>Nuntiatum est hostes appropinquare.</i> ➜ "Fu annunciato che i nemici si avvicinavano."</li>
<li><i>Cicero dicit amicitiam esse maximum bonum.</i> ➜ "Cicerone dice che l'amicizia è il massimo bene."</li>
<li><i>Cato censebat Carthaginem esse delendam.</i> ➜ "Catone riteneva che Cartagine dovesse essere distrutta." (<i>delendam esse</i>: costruzione con il gerundivo, che vedrai in seguito)</li>
</ol>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… il motto di Catone è un'infinitiva?`,
      html: `<p>La frase attribuita a <b>Catone il Censore</b> (234-149 a.C.), che concludeva ogni suo intervento in Senato, è: <b>"Ceterum censeo Carthaginem esse delendam"</b>, "Inoltre ritengo che Cartagine debba essere distrutta". È una perfetta <b>infinitiva</b>: <i>censeo</i> (verbo di opinione) + <i>Carthaginem</i> (soggetto in accusativo) + <i>delendam esse</i> (infinito con il gerundivo). La guerra decisiva contro Cartagine (terza guerra punica) scoppiò nel 149 a.C., l'anno della morte di Catone, e la città fu distrutta nel 146 a.C. da Scipione Emiliano. La formula è quella tramandata dalla tradizione: riassume bene il suo ruolo di "voce" implacabile della politica romana.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… "Homo sum" è un'infinitiva nascosta?`,
      html: `<p>Il celebre verso di Terenzio (<i>Heautontimorumenos</i>, 77) <b>"Homo sum: humani nihil a me alienum puto"</b> ("Sono un uomo: nulla di ciò che è umano ritengo estraneo a me") contiene un'infinitiva: <i>puto</i> (verbo di opinione) + <i>nihil alienum</i> (accusativo, soggetto) + <i>esse</i> (sottinteso). Nelle frasi sentenziose l'infinito <i>esse</i> si omette spesso: ecco perché le infinitive latine possono sembrare "incomplete". Quando lo trovi, aggiungi mentalmente <i>esse</i>.</p>`
    },
    {
      type: `alternatives`, title: `Altri modi per padroneggiare cum e infinitive`,
      intro: `Due costruzioni molto frequenti: due strategie per leggerle senza panico.`,
      tabs: [
        {
          label: `🔍 Cercare la spia`,
          html: `<p>Ogni costruzione ha una "spia": per il <b>cum narrativo</b>, <i>cum</i> + un verbo al <b>congiuntivo imperfetto o piuccheperfetto</b>. Per l'<b>infinitiva</b>, un verbo di dire/pensare/sentire seguito da <b>un accusativo e un infinito</b> (<i>dico te venire</i>). Per il <b>nominativo con infinito</b>, una forma passiva di dire (<i>dicitur, traditur, videtur</i>) e un nominativo con infinito.</p>`
        },
        {
          label: `🇮🇹 Dal "che" all'accusativo`,
          html: `<p>Per tradurre un'infinitiva, parti dall'italiano: <b>"dico che… X fa Y"</b> ➜ latino: <i>dico</i> + <b>X (accusativo)</b> + <b>Y (infinito)</b>. Per costruirla al contrario: trova il <b>verbo reggente</b> (dico), il <b>soggetto all'accusativo</b> (Caesarem), il <b>verbo all'infinito</b> (venire). Traduci con "che", poi controlla il tempo con la tabella dell'infinito (presente = contemporaneo, perfetto = anteriore, futuro = posteriore).</p>`
        },
        {
          label: `📅 Tabella dei tempi`,
          html: `<p>Disegna una tabella con due righe (principale / storico) e tre colonne (contemporaneità, anteriorità, posteriorità) e riempila con i tempi del congiuntivo; poi una seconda tabella con l'infinito (presente, perfetto, futuro). Impara le due tabelle a memoria: descrivono quasi tutte le subordinate del latino.</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: cum e infinitive`,
      nodes: [
        { id: `per`, label: `Periodo latino`, x: 50, y: 8, color: `#a855f7`, html: `Subordinate con congiuntivo e infinito.`, why: `Il latino usa poche congiunzioni e molti modi non finiti: la sintassi è compatta e il tempo si legge dalla consecutio. Per questo i periodi di Cesare e Cicerone sembrano lunghi ma sono molto ordinati.` },
        { id: `cum`, label: `Cum`, x: 18, y: 40, color: `#f59e0b`, html: `Narrativo, temporale, causale, concessivo.`, why: `Cum (in latino arcaico <i>quom</i>) è una congiunzione temporale che col tempo ha preso più valori. Il congiuntivo narrativo nasce dal bisogno di raccontare i fatti in una sequenza logica.` },
        { id: `cons`, label: `Consecutio`, x: 50, y: 40, color: `#16a34a`, html: `Coordinamento dei tempi del congiuntivo.`, why: `La consecutio è una regola di armonizzazione: il congiuntivo non indica il tempo assoluto ma il rapporto con il verbo reggente. Per questo ha solo due serie: principale e storica.` },
        { id: `inf`, label: `Infinitive`, x: 82, y: 40, color: `#3b82f6`, html: `Accusativo con infinito dopo verbi di dire e pensare.`, why: `L'infinitiva nasce dal fatto che il latino non ha un "che" subordinante per i discorsi indiretti: usa il soggetto in accusativo, ereditato dall'indoeuropeo, e l'infinito come predicato.` },
        { id: `nomi`, label: `Nom. + infinito`, x: 68, y: 76, color: `#ef4444`, html: `Dicitur, videtur, traditur.`, why: `Se il verbo reggente è passivo, il soggetto dell'infinito diventa soggetto della frase: "Romolo si dice che abbia fondato" è la logica latina.` },
        { id: `ita`, label: `Italiano`, x: 30, y: 76, color: `#06b6d4`, html: `Cum ➜ quando/mentre; infinitiva ➜ che + congiuntivo.`, why: `L'italiano ha sviluppato "che" come congiunzione completiva e il congiuntivo come modo del pensiero soggettivo, ma conserva l'infinitiva in forme come "sento i ragazzi cantare".` }
      ],
      edges: [
        [`per`, `cum`, `usa`], [`per`, `cons`, `regola`], [`per`, `inf`, `usa`], [`inf`, `nomi`, `passivo`], [`cum`, `cons`, `tempi`], [`cum`, `ita`, `quando`], [`inf`, `ita`, `che`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: le infinitive`,
      questions: [
        { type: `mc`, q: `Come si traduce "Dico te venire"?`, options: [`Dico che tu vieni`, `Dico di venire`, `Dico che tu venga`], answer: 0, explain: `Soggetto in accusativo + infinito presente.` },
        { type: `text`, q: `Scrivi l'infinito futuro attivo di "amo" (con esse).`, answer: [`amaturum esse`], explain: `Participio futuro (amaturum) + esse.` },
        { type: `mc`, q: `"Caesar dixit se venire": "se" si riferisce a…`, options: [`Cesare`, `un altro`, `nessuno`], answer: 0, explain: `Se è riflessivo: riferito al soggetto della reggente.` },
        { type: `mc`, q: `Quale forma richiede il nominativo con l'infinito?`, options: [`dicitur`, `dico`, `dixi`], answer: 0, explain: `Dicitur, traditur, videtur: soggetto al nominativo.` }
      ]
    }
  ],
  glossary: [
    { t: `Cum narrativo`, d: `Cum + congiuntivo imperfetto/piuccheperfetto: racconta un fatto precedente o contemporaneo.` },
    { t: `Cum temporale`, d: `Cum + indicativo: "quando" puro.` },
    { t: `Consecutio temporum`, d: `Regola di successione dei tempi del congiuntivo.` },
    { t: `Tempi principali`, d: `Presente, futuro, perfetto logico, imperativo.` },
    { t: `Tempi storici`, d: `Imperfetto, perfetto storico, piuccheperfetto.` },
    { t: `Infinitiva`, d: `Accusativo con l'infinito dopo verbi di dire, pensare, sentire.` },
    { t: `Nominativo con l'infinito`, d: `Costruzione con verbi passivi: dicitur, videtur.` },
    { t: `Riflessivo se`, d: `Pronome che richiama il soggetto della reggente nell'infinitiva.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Come si traduce "Cum Caesar Galliam vicisset, Romam rediit"?`, options: [`Dopo che Cesare ebbe vinto la Gallia, tornò a Roma`, `Con Cesare, vinta la Gallia, tornò a Roma`, `Cesare vince la Gallia e torna a Roma`], answer: 0, explain: `Cum narrativo con piuccheperfetto: anteriorità.` },
      { type: `mc`, q: `Con reggente al perfetto storico e anteriorità si usa il congiuntivo…`, options: [`perfetto`, `piuccheperfetto`, `imperfetto`], answer: 1, explain: `Storico + anteriorità = piuccheperfetto.` },
      { type: `mc`, q: `Con reggente al presente e posteriorità si usa…`, options: [`participio futuro + sim`, `congiuntivo presente`, `congiuntivo perfetto`], answer: 0, explain: `Principale + posteriorità = -urus sim.` },
      { type: `text`, q: `Scrivi in latino "dico che Cesare viene" (3 parole).`, answer: [`dico caesarem venire`], explain: `Soggetto all'accusativo + infinito presente.` },
      { type: `mc`, q: `Come si traduce "Scio te hoc fecisse"?`, options: [`So che hai fatto questo`, `So che farai questo`, `So di fare questo`], answer: 0, explain: `Infinito perfetto: anteriorità.` },
      { type: `mc`, q: `In "Caesar dixit eum venire" "eum" si riferisce a…`, options: [`un'altra persona`, `Cesare`, `nessuno`], answer: 0, explain: `Eum non è riflessivo: persona diversa dal soggetto della reggente.` },
      { type: `tf`, q: `Il verbo "spero" regge l'infinito futuro.`, answer: true, explain: `Spero me venturum esse.` },
      { type: `mc`, q: `Come si traduce "Romulus urbem condidisse dicitur"?`, options: [`Si dice che Romolo abbia fondato la città`, `Romolo dice di fondare la città`, `Romolo fonderà la città`], answer: 0, explain: `Nominativo con infinito perfetto.` },
      { type: `mc`, q: `"Cum + indicativo" indica…`, options: [`quando (temporale puro)`, `poiché (causale)`, `sebbene (concessivo)`], answer: 0, explain: `Con l'indicativo è temporale; causale e concessivo hanno il congiuntivo.` },
      { type: `order`, q: `Ordina i passi per tradurre un cum narrativo.`, items: [`Riconoscere cum + congiuntivo imperfetto o piuccheperfetto`, `Decidere il rapporto: contemporaneità o anteriorità`, `Scegliere "mentre", "dopo che" o "poiché"`, `Tradurre la principale`], explain: `Prima la forma, poi il rapporto temporale, poi la sfumatura, infine la reggente.` }
    ]
  }
});
