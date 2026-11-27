TOPIC('it', {
  id: `l4-lat-sintassi-periodo`,
  title: `La sintassi del periodo`,
  intro: `Hai già incontrato le <b>infinitive</b>, il <b>cum narrativo</b>, le <b>finali</b> e le <b>consecutive</b> con la loro <i>consecutio temporum</i>. Ora completi il quadro con tre costrutti che trovi ovunque negli autori: le <b>proposizioni completive</b> (volitive, dichiarative, dei verbi di timore e di impedimento), le <b>interrogative indirette</b> e il <b>periodo ipotetico</b>. Sono i "mattoni" che permettono a Cicerone e a Livio di costruire i periodi lunghi e articolati. Imparali per funzione, non a memoria: ogni volta chiediti "che cosa fa questa frase?". 🧩`,
  minutes: 55,
  sections: [
    {
      type: `text`, title: `1. Il quadro: che cosa sono le completive`,
      html: `<p>Una <b>completiva</b> è una subordinata che "completa" il verbo reggente, facendo da <b>soggetto</b> o da <b>oggetto</b>: <i>Volo ut veniat</i> ("voglio che venga": "che venga" è l'oggetto di <i>volo</i>). A seconda del verbo reggente, il latino sceglie costrutti diversi:</p>
<table>
<tr><th>Verbo reggente</th><th>Costrutto</th><th>Esempio</th></tr>
<tr><td>dichiarare, pensare, sapere (<i>dico, puto, scio</i>)</td><td><b>infinitiva</b> (già vista)</td><td><i>Dico eum venire</i></td></tr>
<tr><td>volere, ordinare, pregare, esortare, decidere</td><td><b>ut / ne + congiuntivo</b> (volitiva)</td><td><i>Oro te ut venias</i></td></tr>
<tr><td>temere</td><td><b>ne / ut + congiuntivo</b></td><td><i>Timeo ne veniat</i></td></tr>
<tr><td>impedire, ostacolare</td><td><b>ne, quominus + congiuntivo</b></td><td><i>Impedio quominus veniat</i></td></tr>
<tr><td>accadere, fare in modo che, è un fatto che</td><td><b>ut / ut non + congiuntivo</b> (dichiarativa)</td><td><i>Fit ut errem</i></td></tr>
<tr><td>chiedere indirettamente</td><td><b>interrogativa indiretta</b> (congiuntivo)</td><td><i>Quaero quid facias</i></td></tr>
</table>
<p>Il trucco è sempre lo stesso: <b>identifica il verbo reggente</b> e chiediti che tipo di significato ha (volontà, timore, fatto, domanda). Poi scegli il costrutto.</p>`
    },
    {
      type: `text`, title: `2. Le completive volitive: ut e ne`,
      html: `<p>Dopo i verbi che esprimono <b>volontà, comando, preghiera, esortazione, decisione, cura</b> si usa <b>ut</b> (affermativo) o <b>ne</b> (negativo) + <b>congiuntivo</b>:</p>
<ul>
<li><b>comandare, chiedere</b>: <i>impero, rogo, oro, peto, postulo, moneo, hortor</i>;</li>
<li><b>persuadere, esortare</b>: <i>persuadeo, suadeo, hortor</i> (+ dativo di persona);</li>
<li><b>curare, decidere</b>: <i>curo, statuo, constituo, decerno</i>;</li>
<li><b>volere</b>: <i>volo, nolo, cupio</i> (anche con infinito).</li>
</ul>
<p><i>Caesar militibus imperat ut castra muniant</i> "Cesare ordina ai soldati di fortificare l'accampamento". <i>Te rogo ne abeas</i> "Ti prego di non andartene". <i>Cicero senatui persuadet ut bellum geratur</i> "Cicerone persuade il senato che si faccia la guerra".</p>
<p><b>Attenzione alle eccezioni.</b> Alcuni verbi di comando non vogliono <i>ut</i> ma l'<b>accusativo con infinito</b>: <i>iubeo</i> ("ordino"), <i>veto</i> ("vieto"), <i>sino</i> e <i>patior</i> ("permetto"). <i>Milites castra munire iussit</i> "Ordinò ai soldati di fortificare l'accampamento" (e non <i>iussit ut</i>). Per <i>volo</i> e <i>cupio</i>, se il soggetto è lo stesso si usa l'infinito (<i>volo venire</i>), se è diverso si può usare <i>ut</i> o l'accusativo con infinito (<i>volo te venire</i> o <i>volo ut venias</i>).</p>
<p>La <b>consecutio</b> è semplice: dopo un tempo principale si usa il congiuntivo presente (<i>imperat ut muniant</i>), dopo un tempo storico l'imperfetto (<i>imperavit ut munirent</i>). Non servono i tempi dell'anteriorità o della posteriorità, perché il comando guarda sempre al futuro.</p>`
    },
    {
      type: `example`, title: `Volitive in frase`,
      html: `<ul>
<li><i>Te hortor ut diligenter studeas.</i> ➜ "Ti esorto a studiare con impegno."</li>
<li><i>Consul militibus persuasit ne oppidum desererent.</i> ➜ "Il console persuase i soldati a non abbandonare la città." (persuadeo + dativo + ne)</li>
<li><i>Pater filio imperavit ut domi maneret.</i> ➜ "Il padre ordinò al figlio di restare a casa." (tempo storico: imperfetto)</li>
<li><i>Consul legatos iussit Romam redire.</i> ➜ "Il console ordinò agli ambasciatori di tornare a Roma." (<i>iubeo</i> + infinito)</li>
</ul>`
    },
    {
      type: `quiz`, title: `Mini-quiz: volitive`,
      questions: [
        { type: `mc`, q: `Quale costrutto regge il verbo "iubeo"?`, options: [`accusativo e infinito`, `ut + congiuntivo`, `ne + congiuntivo`], answer: 0, explain: `Iubeo, veto, sino, patior vogliono l'accusativo con infinito.` },
        { type: `mc`, q: `Traduci: "Rogo te ne abeas".`, options: [`Ti prego di non andare via`, `Ti prego di andare via`, `Temo che tu vada via`], answer: 0, explain: `Rogo + ne + congiuntivo = volitiva negativa.` },
        { type: `tf`, q: `"Imperavit ut muniant" è corretto secondo la consecutio.`, answer: false, explain: `Dopo imperavit (tempo storico) serve l'imperfetto: ut munirent.` },
        { type: `text`, q: `Completa: "Caesar militibus imperat ... castra muniant." (una parola)`, answer: [`ut`], explain: `Volitiva affermativa: ut + congiuntivo.` }
      ]
    },
    {
      type: `text`, title: `3. I verbi di timore e di impedimento`,
      html: `<p><b>Verba timendi</b> (<i>timeo, metuo, vereor, paveo</i>). Hanno una particolarità che spiazza gli italiani: il significato di <i>ne</i> e <i>ut</i> è <b>capovolto</b>. Il latino ragiona così: "temo" equivale a "desidero che non": quindi <i>ne</i> esprime ciò che si teme che accada, <i>ut</i> ciò che si teme che <b>non</b> accada.</p>
<table>
<tr><th>Latino</th><th>Italiano</th></tr>
<tr><td><i>Timeo <b>ne</b> veniat</i></td><td>Temo <b>che</b> venga</td></tr>
<tr><td><i>Timeo <b>ut</b> veniat</i> (o <i>ne non veniat</i>)</td><td>Temo <b>che non</b> venga</td></tr>
</table>
<p>Il congiuntivo segue la consecutio: <i>Timeo ne veniat / venerit</i> (temo che venga / sia venuto); <i>Timebam ne veniret / venisset</i>. Per ricordarlo: <b>ne = che</b>, <b>ut = che non</b>.</p>
<p><b>Verba impediendi e recusandi</b> (<i>impedio, prohibeo, deterreo, obsto</i>). Reggono <b>ne</b> o <b>quominus</b> + congiuntivo, oppure l'infinito (soprattutto <i>prohibeo</i>): <i>Impedio ne (quominus) discedas</i> "Ti impedisco di andartene". Con un verbo reggente negato si usa <b>quin</b>: <i>Non impedio quin discedas</i>.</p>
<p><b>Dubito</b>: <i>Non dubito quin veniat</i> "Non dubito che venga" (<i>quin</i> + congiuntivo dopo verbo di dubbio negato). Affermativo, <i>dubito an</i> o <i>dubito num</i> introducono un'interrogativa indiretta.</p>`
    },
    {
      type: `svg`, title: `Timeo ne o timeo ut?`,
      caption: `Con i verbi di timore, ne dice ciò che temi che accada; ut ciò che temi che non accada.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<text x="300" y="30" font-size="20" font-weight="bold" fill="#4c1d95" text-anchor="middle">I VERBI DI TIMORE: IL CAPOVOLGIMENTO</text>
<rect x="30" y="60" width="255" height="150" rx="14" fill="#fee2e2" stroke="#dc2626" stroke-width="3"/>
<text x="157" y="95" font-size="22" font-weight="bold" fill="#7f1d1d" text-anchor="middle">TIMEO NE</text>
<text x="157" y="125" font-size="16" fill="#1e293b" text-anchor="middle">+ congiuntivo</text>
<text x="157" y="160" font-size="16" font-weight="bold" fill="#991b1b" text-anchor="middle">temo CHE accada</text>
<text x="157" y="190" font-size="14" fill="#334155" text-anchor="middle">timeo ne veniat = temo che venga</text>
<rect x="315" y="60" width="255" height="150" rx="14" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
<text x="442" y="95" font-size="22" font-weight="bold" fill="#14532d" text-anchor="middle">TIMEO UT</text>
<text x="442" y="125" font-size="16" fill="#1e293b" text-anchor="middle">+ congiuntivo</text>
<text x="442" y="160" font-size="16" font-weight="bold" fill="#166534" text-anchor="middle">temo CHE NON accada</text>
<text x="442" y="190" font-size="14" fill="#334155" text-anchor="middle">timeo ut veniat = temo che non venga</text>
<text x="300" y="250" font-size="16" fill="#4c1d95" text-anchor="middle">Regola: ne = che; ut = che non</text>
<text x="300" y="275" font-size="14" fill="#334155" text-anchor="middle">il desiderio è l'opposto del timore: desidero che venga, temo ut</text>
</svg>`
    },
    {
      type: `text`, title: `4. Le dichiarative con ut e ut non; quod dichiarativo`,
      html: `<p>Accanto alle volitive ci sono le completive che <b>dichiarano un fatto</b>. Si usano con verbi che esprimono avvenimento o risultato: <i>fit, accidit, evenit, contingit, efficio, facio</i> (nel senso di "fare in modo che"), <i>sequitur</i>, e con espressioni come <i>est mos</i>, <i>reliquum est</i>, <i>mos est</i>. Il costrutto è <b>ut</b> (affermativo) o <b>ut non</b> (negativo) + <b>congiuntivo</b>:</p>
<ul>
<li><i>Accidit ut luna plena esset.</i> ➜ "Accadde che ci fosse la luna piena."</li>
<li><i>Fit ut ea res nos delectet.</i> ➜ "Succede che questa cosa ci piaccia."</li>
<li><i>Efficiam ut non pigeat te.</i> ➜ "Farò in modo che tu non te ne dolga."</li>
</ul>
<p><b>Attenzione a non confondere</b> con la <b>consecutiva</b> (già vista): <i>ut non</i> è lo stesso, ma qui la frase non dipende da un "così/tanto" (<i>ita, tam, adeo, tantus</i>). La dichiarativa è retta da un verbo, la consecutiva da un avverbio di intensità.</p>
<p>C'è poi il <b>quod dichiarativo</b>, che regge l'<b>indicativo</b>: <i>Bene facis quod me adiuvas</i> "Fai bene ad aiutarmi (il fatto che mi aiuti è un bene)". Serve per esprimere un <b>fatto reale</b> già accaduto, non una possibilità: <i>Accedit quod</i> ("si aggiunge il fatto che"), <i>Gratum est quod venisti</i> "È gradito il fatto che sei venuto". Se invece vuoi che sia irreale o ipotetico, passi al congiuntivo.</p>`
    },
    {
      type: `remember`, title: `Tabella riassuntiva delle completive`,
      html: `<table>
<tr><th>Significato del reggente</th><th>Affermativa</th><th>Negativa</th></tr>
<tr><td>volontà, comando</td><td><b>ut</b> + cong.</td><td><b>ne</b> + cong.</td></tr>
<tr><td>timore: "che"</td><td><b>ne</b> + cong.</td><td><b>ut</b> + cong.</td></tr>
<tr><td>impedimento</td><td><b>ne / quominus</b> + cong.</td><td><b>quin</b> + cong. (se negato il reggente)</td></tr>
<tr><td>avvenimento, effetto</td><td><b>ut</b> + cong.</td><td><b>ut non</b> + cong.</td></tr>
<tr><td>fatto reale</td><td><b>quod</b> + indicativo</td><td><b>quod</b> + indicativo</td></tr>
</table>`
    },
    {
      type: `text`, title: `5. Le interrogative indirette`,
      html: `<p>Una <b>interrogativa indiretta</b> è una domanda inserita in una frase come subordinata: <i>Dimmi che cosa fai</i>. In latino il verbo va sempre al <b>congiuntivo</b>, a differenza dell'italiano (che usa l'indicativo): <i>Quaero quid facias</i> "Chiedo che cosa fai". È retta da verbi di domanda, ignoranza, conoscenza, dubbio, dichiarazione: <i>quaero, rogo, interrogo, nescio, scio, dubito, video, audio, narro, doceo, demonstro, video</i>.</p>
<p>Come si introduce: con pronomi e avverbi interrogativi (<i>quis, quid, qualis, quantus, quot, cur, quo modo, ubi, unde, quando</i>) o, per le domande sì/no, con <b>-ne</b>, <b>num</b> ("se"), <b>utrum…an</b> ("se… o se"), <b>-ne…an</b>, <b>an</b> (nel seguito). <i>Nescio utrum veniat an maneat</i> "Non so se venga o resti". Per le domande sì/no, le particelle di domanda diretta (<i>nonne</i>, <i>num</i>) perdono il valore particolare e <i>num</i> significa semplicemente "se".</p>
<p>La <b>consecutio</b> dell'interrogativa indiretta è completa, perché la domanda può riferirsi a un tempo anteriore, contemporaneo o posteriore al reggente:</p>
<table>
<tr><th>Rapporto temporale</th><th>Reggente principale (<i>quaero</i>)</th><th>Reggente storico (<i>quaesivi</i>)</th></tr>
<tr><td>contemporaneità</td><td>cong. <b>presente</b>: <i>quid facias</i></td><td>cong. <b>imperfetto</b>: <i>quid faceres</i></td></tr>
<tr><td>anteriorità</td><td>cong. <b>perfetto</b>: <i>quid feceris</i></td><td>cong. <b>piuccheperfetto</b>: <i>quid fecisses</i></td></tr>
<tr><td>posteriorità</td><td><b>-urus sim</b>: <i>quid facturus sis</i></td><td><b>-urus essem</b>: <i>quid facturus esses</i></td></tr>
</table>
<p>Traduzioni: <i>Quaero quid facias</i> (chiedo che cosa fai), <i>quid feceris</i> (che cosa hai fatto), <i>quid facturus sis</i> (che cosa farai). <i>Quaesivi quid faceres</i> (chiesi che cosa facevi), <i>quid fecisses</i> (che cosa avevi fatto), <i>quid facturus esses</i> (che cosa avresti fatto).</p>`
    },
    {
      type: `example`, title: `Interrogative indirette in frase`,
      html: `<ul>
<li><i>Nescio cur Caesar hoc fecerit.</i> ➜ "Non so perché Cesare abbia fatto questo." (anteriorità, perfetto)</li>
<li><i>Rogavi num domi esset.</i> ➜ "Chiesi se fosse in casa." (num = se)</li>
<li><i>Docet quanta sit virtus.</i> ➜ "Mostra quanto grande sia il valore."</li>
<li><i>Quis sit, nescimus.</i> ➜ "Chi sia, non lo sappiamo."</li>
<li><i>Dic mihi utrum venias an maneas.</i> ➜ "Dimmi se vieni o resti."</li>
</ul>
<p>Un modo per riconoscerle: se togli il verbo reggente e rimane una domanda ("Che cosa fai?"), allora sono interrogative indirette.</p>`
    },
    {
      type: `quiz`, title: `Mini-quiz: timore e interrogative`,
      questions: [
        { type: `mc`, q: `"Timeo ut veniat" significa:`, options: [`temo che non venga`, `temo che venga`, `spero che venga`], answer: 0, explain: `Con i verbi di timore ut = "che non".` },
        { type: `mc`, q: `Quale modo regge l'interrogativa indiretta?`, options: [`il congiuntivo`, `l'indicativo`, `l'infinito`], answer: 0, explain: `Sempre il congiuntivo, a differenza dell'italiano.` },
        { type: `tf`, q: `"Quaesivi quid faceres" ha il verbo all'imperfetto per la consecutio (contemporaneità, reggente storico).`, answer: true, explain: `Reggente storico + contemporaneità = congiuntivo imperfetto.` },
        { type: `text`, q: `Come si traduce "num" nelle interrogative indirette? (due lettere, in italiano)`, answer: [`se`], explain: `Nelle indirette num significa semplicemente "se".` }
      ]
    },
    {
      type: `text`, title: `6. Il periodo ipotetico indipendente`,
      html: `<p>Il <b>periodo ipotetico</b> è formato da una <b>protasi</b> (la condizione, introdotta da <b>si</b> "se", <b>nisi</b> "se non", "a meno che") e da un'<b>apodosi</b> (la conseguenza). In latino i tipi sono tre, secondo il grado di realtà:</p>
<table>
<tr><th>Tipo</th><th>Protasi</th><th>Apodosi</th><th>Esempio</th></tr>
<tr><td><b>Della realtà</b></td><td>indicativo</td><td>indicativo</td><td><i>Si hoc dicis, erras</i> "Se dici questo, sbagli"</td></tr>
<tr><td><b>Della possibilità</b></td><td>cong. <b>presente</b> (o perfetto)</td><td>cong. <b>presente</b> (o perfetto)</td><td><i>Si hoc dicas, erres</i> "Se dicessi questo, sbaglieresti"</td></tr>
<tr><td><b>Dell'irrealtà presente</b></td><td>cong. <b>imperfetto</b></td><td>cong. <b>imperfetto</b></td><td><i>Si hoc diceres, errares</i> "Se dicessi questo (ma non lo dici), sbaglieresti"</td></tr>
<tr><td><b>Dell'irrealtà passata</b></td><td>cong. <b>piuccheperfetto</b></td><td>cong. <b>piuccheperfetto</b></td><td><i>Si hoc dixisses, erravisses</i> "Se avessi detto questo, avresti sbagliato"</td></tr>
</table>
<p>I tempi dell'indicativo seguono il senso: <i>Si vales, bene est; ego valeo</i> "Se stai bene, va bene; io sto bene" (frase di apertura di molte lettere antiche, che Cicerone abbrevia in S.V.B.E.E.V.). Nella realtà si possono usare anche il futuro (<i>Si veniet, gaudebo</i>) e il perfetto.</p>
<p><b>Attenzione alla trappola italiana.</b> In italiano "Se dicessi questo, sbaglieresti" può avere due significati: possibilità ("potrebbe capitare") o irrealtà presente ("non lo dici, ma se lo dicessi…"). In latino sono costrutti diversi: <i>si dicas, erres</i> (possibilità) e <i>si diceres, errares</i> (irrealtà). Per distinguerli, chiediti: <b>il fatto è davvero possibile o è escluso?</b></p>
<p>Altre note: <b>nisi</b> nega l'intera protasi (<i>nisi venis, abeo</i> "se non vieni, me ne vado"), <b>si non</b> nega una sola parola (<i>si non omnia, at multa</i> "se non tutto, almeno molto"). Con i verbi che indicano <b>dovere, potere, convenire</b> (<i>debeo, possum, oportet, decet</i>) nell'irrealtà si usa spesso l'<b>indicativo</b> nell'apodosi: <i>Si venisses, gaudere debui</i> ("Se fossi venuto, avrei dovuto gioire").</p>`
    },
    {
      type: `svg`, title: `I tre tipi di periodo ipotetico`,
      caption: `Dalla realtà all'irrealtà: più il fatto è lontano dal vero, più indietro scorre il tempo del congiuntivo.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfeff"/>
<text x="300" y="28" font-size="20" font-weight="bold" fill="#164e63" text-anchor="middle">IL PERIODO IPOTETICO</text>
<rect x="15" y="50" width="180" height="200" rx="14" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
<text x="105" y="80" font-size="18" font-weight="bold" fill="#14532d" text-anchor="middle">REALTÀ</text>
<text x="105" y="108" font-size="14" fill="#1e293b" text-anchor="middle">indicativo</text>
<text x="105" y="128" font-size="14" fill="#1e293b" text-anchor="middle">+ indicativo</text>
<text x="105" y="165" font-size="14" font-style="italic" fill="#166534" text-anchor="middle">si dicis, erras</text>
<text x="105" y="190" font-size="14" fill="#334155" text-anchor="middle">se dici, sbagli</text>
<text x="105" y="225" font-size="14" font-weight="bold" fill="#15803d" text-anchor="middle">è vero</text>
<rect x="210" y="50" width="180" height="200" rx="14" fill="#fef9c3" stroke="#ca8a04" stroke-width="3"/>
<text x="300" y="80" font-size="18" font-weight="bold" fill="#713f12" text-anchor="middle">POSSIBILITÀ</text>
<text x="300" y="108" font-size="14" fill="#1e293b" text-anchor="middle">cong. presente</text>
<text x="300" y="128" font-size="14" fill="#1e293b" text-anchor="middle">+ cong. presente</text>
<text x="300" y="165" font-size="14" font-style="italic" fill="#854d0e" text-anchor="middle">si dicas, erres</text>
<text x="300" y="190" font-size="14" fill="#334155" text-anchor="middle">se dicessi, sbaglieresti</text>
<text x="300" y="225" font-size="14" font-weight="bold" fill="#a16207" text-anchor="middle">può accadere</text>
<rect x="405" y="50" width="180" height="200" rx="14" fill="#fee2e2" stroke="#dc2626" stroke-width="3"/>
<text x="495" y="80" font-size="18" font-weight="bold" fill="#7f1d1d" text-anchor="middle">IRREALTÀ</text>
<text x="495" y="108" font-size="14" fill="#1e293b" text-anchor="middle">imperfetto (pres.)</text>
<text x="495" y="128" font-size="14" fill="#1e293b" text-anchor="middle">piuccheperf. (pass.)</text>
<text x="495" y="165" font-size="14" font-style="italic" fill="#991b1b" text-anchor="middle">si diceres, errares</text>
<text x="495" y="190" font-size="14" fill="#334155" text-anchor="middle">se dicessi (ma no)...</text>
<text x="495" y="225" font-size="14" font-weight="bold" fill="#b91c1c" text-anchor="middle">non è vero</text>
<text x="300" y="282" font-size="14" fill="#164e63" text-anchor="middle">cong. imperfetto = irrealtà presente; piuccheperfetto = irrealtà passata</text>
</svg>`
    },
    {
      type: `example`, title: `Periodi ipotetici in frase`,
      html: `<ul>
<li><i>Si vis pacem, para bellum.</i> ➜ "Se vuoi la pace, prepara la guerra." (realtà: <i>vis</i> indicativo, imperativo nell'apodosi)</li>
<li><i>Si tacuisses, philosophus mansisses.</i> ➜ "Se avessi taciuto, saresti rimasto un filosofo." (irrealtà passata, massima attribuita a Boezio, <i>De consolatione</i> II, 7)</li>
<li><i>Si fecissem, poenas dedissem.</i> ➜ "Se l'avessi fatto, avrei pagato." (irrealtà passata)</li>
<li><i>Nisi me fallit memoria, Romae fuisti.</i> ➜ "Se la memoria non m'inganna, sei stato a Roma." (realtà)</li>
</ul>
<p>La frase <i>Si vis pacem, para bellum</i> è una massima tardo-latina riassunta da un passo di Vegezio (<i>Epitoma rei militaris</i>: <i>qui desiderat pacem, praeparet bellum</i>).</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… "Si tacuisses" è diventato proverbio`,
      html: `<p>La massima <i>Si tacuisses, philosophus mansisses</i> ("se avessi taciuto, saresti rimasto un filosofo") è legata a un aneddoto che Boezio riporta nel <i>De consolatione philosophiae</i> (II, 7): chi si vantava di essere filosofo, davanti a un insulto non seppe reggere con calma, e fu smascherato. Il valore grammaticale è chiaro: è un periodo ipotetico dell'<b>irrealtà nel passato</b>, con piuccheperfetto nella protasi e nell'apodosi. Costrutti così sono frequenti nei proverbi perché dicono, con sobrietà, che il passato non si cambia.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… l'italiano ha ereditato tutto`,
      html: `<p>Il congiuntivo italiano (<i>penso che sia</i>, <i>se fossi</i>) è un diretto discendente di quello latino. L'italiano ha però perso alcune distinzioni: per esempio "se fossi" corrisponde sia a <i>si essem</i> (irrealtà) sia a <i>si sim</i> (possibilità). Anche la "regola" per cui nell'italiano parlato si usa l'indicativo ("se lo sapevo, venivo") riprende l'uso latino con i verbi di dovere e potere, in cui l'indicativo nell'apodosi dell'irrealtà (<i>poteram</i>, <i>debui</i>) esprime la forza dell'obbligo non rispettato.</p>`
    },
    {
      type: `widget`, title: `Allenamento: che costrutto è?`,
      widget: `match`,
      options: {
        pairs: [
          [`Oro te ut venias`, `completiva volitiva`],
          [`Timeo ne veniat`, `temo che venga`],
          [`Timeo ut veniat`, `temo che non venga`],
          [`Quaero quid facias`, `interrogativa indiretta`],
          [`Si hoc diceres, errares`, `ipotetico dell'irrealtà (presente)`],
          [`Si hoc dixisses, erravisses`, `ipotetico dell'irrealtà (passato)`],
          [`Accidit ut esset luna plena`, `completiva dichiarativa`],
          [`Gratum est quod venisti`, `quod dichiarativo con indicativo`]
        ]
      },
      caption: `Abbina la frase latina al costrutto.`
    },
    {
      type: `alternatives`, title: `Altri modi per padroneggiare i costrutti`,
      intro: `Scegli il metodo che ti torna più comodo.`,
      tabs: [
        {
          label: `🌳 L'albero decisionale`,
          html: `<p>Davanti a una subordinata introdotta da <i>ut/ne/quod/quid</i>, chiediti in ordine: <b>1.</b> Il reggente esprime <b>volontà</b> (ordino, prego)? ➜ ut/ne + cong. <b>2.</b> Esprime <b>timore</b>? ➜ ne = che, ut = che non. <b>3.</b> Esprime <b>impedimento</b>? ➜ ne/quominus. <b>4.</b> Dichiara un <b>fatto</b> (accade, fa sì che)? ➜ ut/ut non. <b>5.</b> È una <b>domanda</b>? ➜ interrogativa indiretta. <b>6.</b> C'è "se"? ➜ periodo ipotetico: guarda il modo e il tempo.</p>`
        },
        {
          label: `🎚️ Il "volume" della realtà`,
          html: `<p>Immagina il periodo ipotetico come un <b>regolatore del volume</b> della realtà: <b>indicativo</b> = volume alto (è vero); <b>congiuntivo presente</b> = volume medio (può accadere); <b>imperfetto</b> = volume basso (non accade ora); <b>piuccheperfetto</b> = volume zero (non è accaduto). Più il fatto è lontano dalla realtà, più il tempo del congiuntivo "scivola" indietro.</p>`
        },
        {
          label: `🔁 Il trucco del timore`,
          html: `<p>Per <i>timeo ne / timeo ut</i> usa questa regola: <b>"ne" è come "ne-gativo ma paradossale"</b>: dice ciò che non vuoi che accada. Se vuoi la frase italiana "temo che arrivi", pensa "mi auguro che non arrivi": <i>ne arrivi</i>. Se temi che <b>non</b> arrivi, pensa "mi auguro che arrivi": <i>ut arrivi</i>. Il verbo di timore è un desiderio "capovolto".</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa della sintassi del periodo`,
      nodes: [
        { id: `per`, label: `Periodo latino`, x: 50, y: 8, color: `#a855f7`, html: `Principale + subordinate collegate dal modo e dal tempo.`, why: `Il latino non ha l'abbondanza di preposizioni e articoli dell'italiano: segnala i rapporti tra le frasi con congiunzioni, modi e tempi. Per questo la sintassi del periodo è la chiave per leggere gli autori.` },
        { id: `vol`, label: `Volitive`, x: 18, y: 40, color: `#f59e0b`, html: `ut / ne + congiuntivo dopo verbi di volontà e comando.`, why: `Il congiuntivo esprime un desiderio non ancora realizzato: per questo si usa dopo ordini e preghiere. Deriva dal valore ottativo/iussivo del congiuntivo indoeuropeo.` },
        { id: `tim`, label: `Timore`, x: 50, y: 40, color: `#16a34a`, html: `ne = che, ut = che non.`, why: `L'apparente paradosso nasce dal fatto che il timore è un desiderio negativo: 'timeo ne veniat' deriva da 'ne veniat! (che non venga!), lo temo'. La negazione ne conserva il valore volitivo originario.` },
        { id: `int`, label: `Interrogative indirette`, x: 82, y: 40, color: `#3b82f6`, html: `Domande subordinate con il congiuntivo.`, why: `Il congiuntivo segnala che la domanda non è più asserita dal parlante ma "riportata" come contenuto. Con la consecutio permette tutti i rapporti temporali, compresa la posteriorità (-urus sim).` },
        { id: `dic`, label: `Dichiarative`, x: 30, y: 76, color: `#ef4444`, html: `ut / ut non + cong.; quod + indicativo.`, why: `Il quod con l'indicativo presenta un fatto come reale; il costrutto con ut e il congiuntivo presenta l'evento come risultato di un processo. Sono due modi diversi di guardare lo stesso fatto.` },
        { id: `ipo`, label: `Periodo ipotetico`, x: 72, y: 76, color: `#06b6d4`, html: `Realtà, possibilità, irrealtà (presente e passato).`, why: `La scala dei tempi del congiuntivo riflette il grado di distanza dalla realtà: più la condizione è irrealizzabile, più il verbo è "arretrato" nel tempo. È un'idea che l'italiano ha mantenuto.` }
      ],
      edges: [
        [`per`, `vol`, `volontà`], [`per`, `tim`, `timore`], [`per`, `int`, `domanda`], [`per`, `dic`, `fatto`], [`per`, `ipo`, `condizione`], [`vol`, `tim`, `ne / ut`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: periodo ipotetico`,
      questions: [
        { type: `mc`, q: `Quale costrutto esprime "Si hoc diceres, errares"?`, options: [`irrealtà presente`, `realtà`, `irrealtà passata`], answer: 0, explain: `Congiuntivo imperfetto nella protasi e nell'apodosi.` },
        { type: `mc`, q: `Come si traduce "Si hoc dixisses, erravisses"?`, options: [`Se avessi detto questo, avresti sbagliato`, `Se dici questo, sbagli`, `Se dicessi questo, sbaglieresti`], answer: 0, explain: `Piuccheperfetto congiuntivo: irrealtà nel passato.` },
        { type: `tf`, q: `"Nisi" nega l'intera protasi, "si non" una sola parola.`, answer: true, explain: `Nisi = a meno che; si non = se non, riferito a un singolo termine.` },
        { type: `order`, q: `Ordina i tipi di periodo ipotetico dal più reale al meno reale.`, items: [`realtà (indicativo)`, `possibilità (cong. presente)`, `irrealtà presente (cong. imperfetto)`, `irrealtà passata (cong. piuccheperfetto)`], explain: `Più è lontano dal vero, più il congiuntivo scivola indietro.` }
      ]
    }
  ],
  glossary: [
    { t: `Completiva`, d: `Subordinata che completa il verbo reggente, facendo da soggetto o da oggetto.` },
    { t: `Volitiva`, d: `Completiva con ut/ne + congiuntivo, dopo verbi di volontà, comando, preghiera.` },
    { t: `Verba timendi`, d: `Verbi di timore: ne = "che", ut = "che non".` },
    { t: `Quominus`, d: `Congiunzione che introduce completive dopo verbi di impedimento.` },
    { t: `Quin`, d: `Congiunzione dopo verbi di impedimento o di dubbio negati: non dubito quin...` },
    { t: `Interrogativa indiretta`, d: `Domanda subordinata, in latino sempre al congiuntivo.` },
    { t: `Protasi`, d: `La parte condizionale (introdotta da si, nisi) del periodo ipotetico.` },
    { t: `Apodosi`, d: `La conseguenza della condizione, nel periodo ipotetico.` },
    { t: `Irrealtà`, d: `Condizione contraria ai fatti: congiuntivo imperfetto (presente) o piuccheperfetto (passato).` },
    { t: `Quod dichiarativo`, d: `Quod + indicativo: introduce un fatto reale ("il fatto che").` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Quale costrutto segue il verbo "impero"?`, options: [`ut + congiuntivo`, `quod + indicativo`, `quin + congiuntivo`], answer: 0, explain: `Impero = comando: volitiva con ut/ne.` },
      { type: `mc`, q: `Traduci: "Timeo ne hostes veniant".`, options: [`Temo che i nemici vengano`, `Temo che i nemici non vengano`, `Non temo i nemici`], answer: 0, explain: `Ne dopo timeo = "che" (si teme che avvenga).` },
      { type: `tf`, q: `Dopo "iubeo" si usa ut + congiuntivo.`, answer: false, explain: `Iubeo vuole l'accusativo con infinito.` },
      { type: `mc`, q: `Quale modo regge l'interrogativa indiretta?`, options: [`congiuntivo`, `indicativo`, `imperativo`], answer: 0, explain: `Sempre il congiuntivo.` },
      { type: `text`, q: `Traduci in latino la congiunzione "se" per una domanda indiretta sì/no (una parola, 3 lettere).`, answer: [`num`], explain: `Num introduce l'interrogativa indiretta sì/no (anche -ne).` },
      { type: `mc`, q: `Quale tempo si usa in "Quaesivi quid faceres"?`, options: [`congiuntivo imperfetto (contemporaneità, storico)`, `congiuntivo presente`, `indicativo`], answer: 0, explain: `Reggente storico + contemporaneità = imperfetto.` },
      { type: `mc`, q: `Quale periodo ipotetico è "Si tacuisses, philosophus mansisses"?`, options: [`irrealtà passata`, `realtà`, `possibilità`], answer: 0, explain: `Piuccheperfetto congiuntivo in protasi e apodosi.` },
      { type: `tf`, q: `"Accidit ut luna plena esset" contiene una completiva dichiarativa.`, answer: true, explain: `Accidit regge ut + congiuntivo: dichiarativa.` },
      { type: `mc`, q: `Che cosa vuol dire "Timeo ut veniat"?`, options: [`Temo che non venga`, `Temo che venga`, `Spero che venga`], answer: 0, explain: `Con i verbi di timore ut = "che non".` },
      { type: `order`, q: `Ordina la consecutio nell'interrogativa indiretta dopo un tempo principale: contemporaneità, anteriorità, posteriorità.`, items: [`quid facias`, `quid feceris`, `quid facturus sis`], explain: `Presente, perfetto, -urus sim.` }
    ]
  }
});
