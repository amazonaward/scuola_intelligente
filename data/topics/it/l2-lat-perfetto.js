TOPIC('it', {
  id: `l2-lat-perfetto`,
  title: `Il sistema del perfetto`,
  intro: `Finora hai usato tempi che esprimono azioni in corso o future: <i>amo, amabam, amabo</i>. Ora entri nel <b>sistema del perfetto</b>, che racconta azioni <b>concluse</b>: <i>amavi</i> ("amai, ho amato"), <i>amaveram</i> ("avevo amato"), <i>amavero</i> ("avrò amato"). Il latino ha tre <b>temi</b> per ogni verbo (presente, perfetto, supino) e il perfetto è spesso <b>irregolare e imprevedibile</b>: è la ragione per cui ogni verbo si studia con le quattro "forme guida". In questa lezione impari a riconoscere i <b>sei modi di formare il perfetto</b>, le desinenze del perfetto, del piuccheperfetto e del futuro anteriore, il passivo con <i>sum</i> e i verbi che hanno il perfetto con il senso del presente (<i>novi, memini, odi</i>). 📜⏳`,
  minutes: 55,
  sections: [
    {
      type: `text`, title: `1. Tre temi, quattro forme guida`,
      html: `<p>Ogni verbo latino ha tre <b>temi</b> da cui si ricavano tutte le forme:</p>
<ul>
<li>il <b>tema del presente</b> (presente, imperfetto, futuro semplice, congiuntivo presente e imperfetto, imperativo, infinito presente);</li>
<li>il <b>tema del perfetto</b> (perfetto, piuccheperfetto, futuro anteriore, congiuntivo perfetto e piuccheperfetto, infinito perfetto, tutti in forma attiva);</li>
<li>il <b>tema del supino</b> (participio perfetto, supino, participio futuro, infinito futuro, e quindi tutto il passivo dei tempi composti).</li>
</ul>
<p>Sul dizionario un verbo si presenta con le <b>quattro forme guida</b>: <i>amo, amas, amare, amavi, amatum</i> (cioè 1ª sing. presente, infinito, 1ª sing. perfetto, supino). Per la 1ª coniugazione regolare, il tema del perfetto è <i>amav-</i>, il tema del supino <i>amat-</i>:</p>
<table>
<tr><th>Coniug.</th><th>Presente</th><th>Perfetto</th><th>Supino</th></tr>
<tr><td>1ª</td><td>amo, amare</td><td>amavi</td><td>amatum</td></tr>
<tr><td>2ª</td><td>moneo, monere</td><td>monui</td><td>monitum</td></tr>
<tr><td>3ª</td><td>rego, regere</td><td>rexi</td><td>rectum</td></tr>
<tr><td>3ª in -io</td><td>capio, capere</td><td>cepi</td><td>captum</td></tr>
<tr><td>4ª</td><td>audio, audire</td><td>audivi</td><td>auditum</td></tr>
</table>
<p>Il perfetto della 1ª e della 4ª è quasi sempre regolare (<i>-avi, -ivi</i>); quello della 2ª è spesso in <i>-ui</i>; quello della 3ª è molto vario. Perciò i verbi della 3ª vanno imparati con tutte le forme guida.</p>`
    },
    {
      type: `text`, title: `2. Come si forma il perfetto: sei tipi`,
      html: `<p>Il perfetto si forma in sei modi principali. Il tema del perfetto si ricava sempre <b>dalla 3ª forma guida</b> togliendo <b>-i</b>: <i>amavi ➜ amav-</i>, <i>monui ➜ monu-</i>, <i>rexi ➜ rex-</i>.</p>
<table>
<tr><th>Tipo</th><th>Come funziona</th><th>Esempi</th></tr>
<tr><td><b>1. in -vi</b></td><td>tema + -v-</td><td><i>amo, amavi; deleo, delevi; audio, audivi; peto, petivi</i></td></tr>
<tr><td><b>2. in -ui</b></td><td>tema + -u- (tipico della 2ª)</td><td><i>moneo, monui; habeo, habui; teneo, tenui; colo, colui; possum, potui</i></td></tr>
<tr><td><b>3. in -si</b> (sigmatico)</td><td>tema + -s- (con fusioni: g+s = x)</td><td><i>rego, rexi; scribo, scripsi; dico, dixi; duco, duxi; mitto, misi; iubeo, iussi; maneo, mansi; claudo, clausi</i></td></tr>
<tr><td><b>4. con raddoppiamento</b></td><td>prima sillaba ripetuta</td><td><i>do, dedi; sto, steti; curro, cucurri; cado, cecidi; disco, didici; pello, pepuli; cano, cecini</i></td></tr>
<tr><td><b>5. con allungamento</b></td><td>vocale del tema allungata</td><td><i>venio, veni; video, vidi; lego, legi; ago, egi; facio, feci; capio, cepi; vinco, vici; fugio, fugi; emo, emi</i></td></tr>
<tr><td><b>6. identico al presente</b></td><td>solo l'aspetto del tema coincide</td><td><i>verto, verti; defendo, defendi; bibo, bibi; solvo, solvi</i></td></tr>
</table>
<p>Alcuni verbi hanno perfetti completamente <b>diversi</b> (suppletivi): <i>sum, fui; fero, tuli, latum; eo, ii (ivi), itum; volo, volui; nolo, nolui; malo, malui</i>. La lingua italiana conserva spesso tracce: "<i>ho fatto</i>" (<i>feci</i>), "<i>ho detto</i>" (<i>dixi</i>), "<i>ho visto</i>" (<i>vidi</i>).</p>`
    },
    {
      type: `svg`, title: `Il treno dei tempi del perfetto`,
      caption: `Tre tempi del sistema del perfetto: azione finita prima del momento di cui si parla.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<text x="300" y="28" font-size="20" font-weight="bold" fill="#4c1d95" text-anchor="middle">IL SISTEMA DEL PERFETTO</text>
<line x1="40" y1="150" x2="560" y2="150" stroke="#475569" stroke-width="4"/>
<polygon points="560,150 545,142 545,158" fill="#475569"/>
<circle cx="130" cy="150" r="14" fill="#fbbf24" stroke="#b45309" stroke-width="3"/>
<circle cx="300" cy="150" r="14" fill="#34d399" stroke="#047857" stroke-width="3"/>
<circle cx="470" cy="150" r="14" fill="#60a5fa" stroke="#1d4ed8" stroke-width="3"/>
<text x="130" y="110" font-size="17" font-weight="bold" fill="#92400e" text-anchor="middle">amaveram</text>
<text x="130" y="90" font-size="14" fill="#334155" text-anchor="middle">piuccheperfetto</text>
<text x="130" y="195" font-size="14" fill="#334155" text-anchor="middle">avevo amato</text>
<text x="300" y="110" font-size="17" font-weight="bold" fill="#065f46" text-anchor="middle">amavi</text>
<text x="300" y="90" font-size="14" fill="#334155" text-anchor="middle">perfetto</text>
<text x="300" y="195" font-size="14" fill="#334155" text-anchor="middle">amai / ho amato</text>
<text x="470" y="110" font-size="17" font-weight="bold" fill="#1e3a8a" text-anchor="middle">amavero</text>
<text x="470" y="90" font-size="14" fill="#334155" text-anchor="middle">futuro anteriore</text>
<text x="470" y="195" font-size="14" fill="#334155" text-anchor="middle">avrò amato</text>
<text x="300" y="240" font-size="15" font-weight="bold" fill="#4c1d95" text-anchor="middle">tema del perfetto (amav-) + desinenze proprie</text>
<text x="300" y="266" font-size="14" fill="#334155" text-anchor="middle">-i, -isti, -it, -imus, -istis, -erunt  ·  -eram  ·  -ero</text>
</svg>`
    },
    {
      type: `text`, title: `3. Il perfetto indicativo attivo`,
      html: `<p>Al tema del perfetto si aggiungono le desinenze del perfetto, uguali per tutte le coniugazioni:</p>
<table>
<tr><th>Persona</th><th>Desinenza</th><th>amo</th><th>moneo</th><th>rego</th><th>capio</th><th>audio</th><th>sum</th></tr>
<tr><td>1ª sing.</td><td>-i</td><td>amavi</td><td>monui</td><td>rexi</td><td>cepi</td><td>audivi</td><td>fui</td></tr>
<tr><td>2ª sing.</td><td>-isti</td><td>amavisti</td><td>monuisti</td><td>rexisti</td><td>cepisti</td><td>audivisti</td><td>fuisti</td></tr>
<tr><td>3ª sing.</td><td>-it</td><td>amavit</td><td>monuit</td><td>rexit</td><td>cepit</td><td>audivit</td><td>fuit</td></tr>
<tr><td>1ª plur.</td><td>-imus</td><td>amavimus</td><td>monuimus</td><td>reximus</td><td>cepimus</td><td>audivimus</td><td>fuimus</td></tr>
<tr><td>2ª plur.</td><td>-istis</td><td>amavistis</td><td>monuistis</td><td>rexistis</td><td>cepistis</td><td>audivistis</td><td>fuistis</td></tr>
<tr><td>3ª plur.</td><td>-erunt (-ere)</td><td>amaverunt</td><td>monuerunt</td><td>rexerunt</td><td>ceperunt</td><td>audiverunt</td><td>fuerunt</td></tr>
</table>
<p>Fa' attenzione a riconoscere il tema (<i>amav-, monu-, rex-, cep-, audiv-, fu-</i>): le desinenze sono identiche in ogni verbo.</p>
<p><b>Uso</b>. Il perfetto latino ha due valori che l'italiano distingue:</p>
<ul>
<li><b>perfetto storico</b> (passato remoto): racconta fatti passati lontani dal presente: <i>Caesar Rubiconem transiit</i> "Cesare attraversò il Rubicone" (49 a.C.);</li>
<li><b>perfetto logico</b> (passato prossimo): esprime un fatto passato con effetti nel presente: <i>Scripsi epistulam</i> "ho scritto la lettera".</li>
</ul>
<p>La distinzione serve nella traduzione e nella <b>consecutio temporum</b> (lezione successiva): il perfetto storico conta come tempo <b>storico</b>, il perfetto logico come tempo <b>principale</b>.</p>
<p><b>Contrazioni</b>: nei testi trovi spesso forme sincopate: <i>amasti</i> per <i>amavisti</i>, <i>amarunt</i> per <i>amaverunt</i>, <i>audisti</i>, <i>audierunt</i>, <i>delerunt</i>. Sono equivalenti.</p>`
    },
    {
      type: `example`, title: `Il perfetto in frase`,
      html: `<ol>
<li><i>Veni, vidi, vici.</i> ➜ "Venni, vidi, vinsi." (l'annuncio di Cesare dopo la battaglia di Zela, 47 a.C., contro Farnace II del Ponto)</li>
<li><i>Hannibal Alpes superavit.</i> ➜ "Annibale superò le Alpi." (perfetto storico)</li>
<li><i>Marcus librum scripsit; nunc eum legit.</i> ➜ "Marco ha scritto un libro; ora lo legge." (perfetto logico)</li>
<li><i>Cives urbem defenderunt.</i> ➜ "I cittadini difesero la città." (<i>defendo, defendi</i>: perfetto uguale al presente nella forma)</li>
<li><i>Quis fecit hoc?</i> ➜ "Chi ha fatto questo?"</li>
</ol>`
    },
    {
      type: `quiz`, title: `Mini-quiz: il perfetto`,
      questions: [
        { type: `text`, q: `Scrivi la 3ª persona plurale del perfetto di "amo".`, answer: [`amaverunt`, `amarunt`, `amavere`], explain: `Tema amav- + -erunt (anche -ere; forma sincopata amarunt).` },
        { type: `mc`, q: `Come si forma il perfetto di "dico"?`, options: [`con raddoppiamento`, `in -si`, `in -vi`], answer: 1, explain: `Dico, dixi (dic-s ➜ dix-): perfetto sigmatico.` },
        { type: `text`, q: `Scrivi la 2ª persona singolare del perfetto di "sum".`, answer: [`fuisti`], explain: `Fui, fuisti, fuit…` },
        { type: `mc`, q: `Che cos'è il "perfetto logico"?`, options: [`un fatto passato con effetti nel presente`, `un fatto passato remoto`, `un fatto futuro`], answer: 0, explain: `Si traduce con il passato prossimo: ho scritto.` }
      ]
    },
    {
      type: `text`, title: `4. Il piuccheperfetto e il futuro anteriore`,
      html: `<p>Il <b>piuccheperfetto</b> esprime un'azione conclusa <b>prima di un'altra azione passata</b>. Si forma con il <b>tema del perfetto</b> + l'imperfetto di <i>sum</i>: <b>-eram, -eras, -erat, -eramus, -eratis, -erant</b>. Il <b>futuro anteriore</b> esprime un'azione conclusa <b>prima di un'altra azione futura</b>: tema del perfetto + futuro di <i>sum</i>: <b>-ero, -eris, -erit, -erimus, -eritis, -erint</b> (nota la 3ª plurale: <b>-erint</b>, non <i>-erunt</i>).</p>
<table>
<tr><th>Persona</th><th>Piuccheperfetto</th><th>Futuro anteriore</th><th>sum (pluperf.)</th><th>sum (fut. ant.)</th></tr>
<tr><td>1ª sing.</td><td>amaveram</td><td>amavero</td><td>fueram</td><td>fuero</td></tr>
<tr><td>2ª sing.</td><td>amaveras</td><td>amaveris</td><td>fueras</td><td>fueris</td></tr>
<tr><td>3ª sing.</td><td>amaverat</td><td>amaverit</td><td>fuerat</td><td>fuerit</td></tr>
<tr><td>1ª plur.</td><td>amaveramus</td><td>amaverimus</td><td>fueramus</td><td>fuerimus</td></tr>
<tr><td>2ª plur.</td><td>amaveratis</td><td>amaveritis</td><td>fueratis</td><td>fueritis</td></tr>
<tr><td>3ª plur.</td><td>amaverant</td><td>amaverint</td><td>fuerant</td><td>fuerint</td></tr>
</table>
<p><b>Traduzione</b>: piuccheperfetto ➜ <i>trapassato prossimo</i> ("avevo amato"); futuro anteriore ➜ <i>futuro anteriore</i> ("avrò amato"). Esempi: <i>Postquam hostes fugerant, cives domum redierunt</i> "Dopo che i nemici erano fuggiti, i cittadini tornarono a casa"; <i>Cum epistulam scripsero, ad te mittam</i> "Quando avrò scritto la lettera, te la manderò". Dopo <i>cum, ubi, simul ac, si, postquam, ut primum</i> in contesto futuro il latino usa il <b>futuro anteriore</b> (<i>Si hoc feceris, laetus ero</i> "se avrai fatto questo, sarò lieto"), mentre l'italiano preferisce spesso il futuro semplice.</p>`
    },
    {
      type: `text`, title: `5. Il passivo dei tempi del perfetto`,
      html: `<p>Il passivo del sistema del perfetto si forma con il <b>participio perfetto</b> (4ª forma guida: <i>amatus, -a, -um</i>) + <i>sum</i>. Il participio <b>concorda</b> con il soggetto in genere, numero e caso (nominativo):</p>
<table>
<tr><th>Tempo</th><th>Formazione</th><th>Esempio</th><th>Traduzione</th></tr>
<tr><td>Perfetto passivo</td><td>amatus + sum</td><td>amatus sum / amata est / amati sunt</td><td>sono stato amato / è stata amata / sono stati amati</td></tr>
<tr><td>Piuccheperfetto passivo</td><td>amatus + eram</td><td>amatus eram / amata erat</td><td>ero stato amato / era stata amata</td></tr>
<tr><td>Futuro anteriore passivo</td><td>amatus + ero</td><td>amatus ero / amati erunt</td><td>sarò stato amato / saranno stati amati</td></tr>
</table>
<p>Per <b>rego</b>: <i>rectus est</i> "è stato retto"; per <b>capio</b>: <i>capti sunt</i> "sono stati catturati"; per <b>audio</b>: <i>audita est</i> "è stata udita"; per <b>moneo</b>: <i>monitus sum</i> "sono stato ammonito". Attenzione: <i>est</i>, <i>sunt</i> qui non sono "è, sono" attuali, ma l'ausiliare di un tempo passato: <i>amata est</i> = "è stata amata", non "è amata" (che sarebbe <i>amatur</i>).</p>
<p><b>Esempio</b>: <i>Urbs a Gallis capta est</i> "La città fu presa dai Galli" (<i>a Gallis</i> complemento d'agente; <i>capta</i> concorda con <i>urbs</i> f.). <i>Milites, ubi duces laudati erant, laeti fuerunt</i> "I soldati, dopo che i comandanti erano stati lodati, furono lieti".</p>`
    },
    {
      type: `example`, title: `Piuccheperfetto, futuro anteriore e passivo in frase`,
      html: `<ol>
<li><i>Postquam hostes fugerant, cives domum redierunt.</i> ➜ "Dopo che i nemici erano fuggiti, i cittadini tornarono a casa."</li>
<li><i>Si hoc feceris, laetus ero.</i> ➜ "Se avrai fatto questo, sarò lieto."</li>
<li><i>Urbs a Gallis capta est.</i> ➜ "La città fu presa dai Galli."</li>
<li><i>Litterae a puero scriptae erant.</i> ➜ "La lettera era stata scritta dal ragazzo." (<i>litterae</i> plurale = lettera, messaggio)</li>
</ol>`
    },
    {
      type: `remember`, title: `I verbi del perfetto "presente": novi, memini, odi, coepi`,
      html: `<p>Alcuni verbi esistono <b>solo nel tema del perfetto</b>, ma il loro perfetto ha il <b>significato di un presente</b>:</p>
<table>
<tr><th>Verbo</th><th>Perfetto = presente</th><th>Piuccheperfetto = imperfetto</th><th>Fut. anteriore = futuro</th></tr>
<tr><td><i>novi</i> (cognosco)</td><td>so</td><td>sapevo (noveram)</td><td>saprò (novero)</td></tr>
<tr><td><i>memini</i></td><td>ricordo</td><td>ricordavo (memineram)</td><td>ricorderò (meminero)</td></tr>
<tr><td><i>odi</i></td><td>odio</td><td>odiavo (oderam)</td><td>odierò (odero)</td></tr>
<tr><td><i>coepi</i></td><td>ho cominciato</td><td>avevo cominciato</td><td>avrò cominciato</td></tr>
</table>
<p>Si traducono come presente, imperfetto e futuro: <i>Te odi</i> "ti odia"; <i>Memini te</i> "mi ricordo di te". Per il significato logico: la conoscenza è il risultato dell'avere appreso (<i>novi</i> "ho appreso" ➜ "so"), il ricordo di avere fissato nella memoria, l'odio di avere preso in odio.</p>`
    },
    {
      type: `widget`, title: `Gioco: abbina verbo e perfetto`,
      widget: `match`,
      options: {
        pairs: [
          [`amo`, `amavi`], [`moneo`, `monui`], [`rego`, `rexi`], [`scribo`, `scripsi`], [`do`, `dedi`], [`venio`, `veni`], [`facio`, `feci`], [`fero`, `tuli`]
        ]
      },
      caption: `Abbina ogni verbo (1ª forma guida) al suo perfetto.`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… "veni, vidi, vici" è un capolavoro di brevità?`,
      html: `<p>Plutarco (<i>Vita di Cesare</i>) racconta che Cesare, dopo avere sconfitto <b>Farnace II del Ponto</b> a Zela, nel 47 a.C., annunciò la vittoria a un amico a Roma con la frase <b>"Veni, vidi, vici"</b>; anche Svetonio (<i>Vita del divo Giulio</i>) ricorda la formula, esibita nel trionfo. Tre perfetti in asindeto, tre parole che iniziano con la stessa lettera (<i>v-</i>) e tre azioni compiute: la brevità trasmette rapidità. È anche una lezione di grammatica: <i>veni</i> (allungamento), <i>vidi</i> (allungamento) e <i>vici</i> (allungamento) sono tutti perfetti del 5° tipo.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… il perfetto latino è diventato il passato remoto?`,
      html: `<p>Il perfetto latino ha dato il <b>passato remoto italiano</b> (<i>amavit</i> ➜ amò; <i>dixit</i> ➜ disse; <i>vidit</i> ➜ vide; <i>fecit</i> ➜ fece), e <b>molte forme irregolari italiane</b> sono ancora quelle latine: <i>scripsi</i> ➜ scrissi, <i>rexi</i> ➜ ressi, <i>misi</i> ➜ misi, <i>vixi</i> ➜ vissi, <i>dixi</i> ➜ dissi. Il passato prossimo italiano (<i>ho amato</i>) è invece una creazione romanza ex novo: nasce da <i>habeo</i> + participio (<i>habeo amatum</i> "ho un amato", poi "ho amato"). Così ogni tempo composto italiano è stato un tempo "inventato" in epoca tarda.</p>`
    },
    {
      type: `alternatives`, title: `Altri modi per imparare i perfetti`,
      intro: `I perfetti sono tanti, ma si imparano meglio in famiglie.`,
      tabs: [
        {
          label: `🗂️ Per famiglia di perfetti`,
          html: `<p>Raggruppa i verbi per tipo: <b>-vi</b> (1ª, 4ª, qualche 2ª e 3ª), <b>-ui</b> (2ª), <b>-si</b> (molti della 3ª), <b>raddoppiamento</b> (do, sto, curro, cado, disco), <b>allungamento</b> (venio, video, lego, ago, facio, capio, vinco). Impara una famiglia per giorno, con 4-5 verbi ognuna, e ripeti ad alta voce le forme guida.</p>`
        },
        {
          label: `🇮🇹 Dal passato remoto`,
          html: `<p>Per alcuni perfetti irregolari conosci già la forma italiana: <i>feci ➜ feci</i>, <i>dixi ➜ dissi</i>, <i>scripsi ➜ scrissi</i>, <i>misi ➜ misi</i>, <i>vidi ➜ vidi</i>, <i>rexi ➜ ressi</i>, <i>posui ➜ posi</i>. Usa il passato remoto come promemoria: se in italiano il verbo ha una forma irregolare, probabilmente il latino ne ha una pure.</p>`
        },
        {
          label: `🧩 Tre pezzi: tema + vocale + desinenza`,
          html: `<p>Scomponi sempre la forma: <b>tema del perfetto</b> + <b>vocale di legame</b> (<i>-i-, -e-</i>) + <b>desinenza</b>. Esempio: <i>amav-is-ti</i>, <i>amav-eram</i>, <i>amav-ero</i>. Una volta trovato il tema, puoi creare tutti i tempi del perfetto semplicemente cambiando la desinenza: <b>-i</b> perfetto, <b>-eram</b> piuccheperfetto, <b>-ero</b> futuro anteriore.</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa del sistema del perfetto`,
      nodes: [
        { id: `perf`, label: `Sistema del perfetto`, x: 50, y: 8, color: `#a855f7`, html: `Tre tempi (perfetto, piuccheperfetto, futuro anteriore) formati dal tema del perfetto.`, why: `Il latino distingue l'<i>aspetto</i> (azione in corso o compiuta) più del tempo. Il sistema del perfetto esprime l'azione <b>compiuta</b>: da qui la parola "perfetto" (<i>perfectus</i> "finito, completo").` },
        { id: `temi`, label: `Tre temi`, x: 18, y: 40, color: `#f59e0b`, html: `Presente, perfetto, supino: le quattro forme guida.`, why: `Il latino ha ereditato dall'indoeuropeo tre temi verbali distinti. Per questo le grammatiche chiedono di imparare le forme guida: ogni verbo ha una sua "storia" irregolare.` },
        { id: `sei`, label: `Sei tipi`, x: 50, y: 40, color: `#16a34a`, html: `-vi, -ui, -si, raddoppiamento, allungamento, identico.`, why: `Sono i residui di diversi modi indoeuropei di esprimere il "completato": il raddoppiamento (dedi, cucurri) è l'antico <i>perfetto</i> indoeuropeo; il -si è l'aoristo sigmatico fuso nel perfetto.` },
        { id: `aus`, label: `Ausiliare sum`, x: 82, y: 40, color: `#3b82f6`, html: `-eram (piuccheperfetto), -ero (futuro anteriore); passivo con participio + sum.`, why: `Il piuccheperfetto e il futuro anteriore sono "perfetto + imperfetto/futuro di sum": le desinenze sono quelle di eram ed ero con la i/e di legame.` },
        { id: `pass`, label: `Passivo`, x: 30, y: 76, color: `#ef4444`, html: `Participio perfetto + sum/eram/ero.`, why: `Il passivo del perfetto è un tempo composto: dice "è in uno stato di essere stato fatto". Per questo il participio concorda con il soggetto.` },
        { id: `ita`, label: `Italiano`, x: 75, y: 76, color: `#06b6d4`, html: `Passato remoto, trapassato, futuro anteriore.`, why: `Il perfetto latino ha dato il passato remoto; il trapassato e il futuro anteriore italiani sono invece tempi composti creati dalle lingue romanze (ausiliare + participio).` }
      ],
      edges: [
        [`perf`, `temi`, `da`], [`perf`, `sei`, `forme`], [`perf`, `aus`, `usa`], [`aus`, `pass`, `participio`], [`sei`, `ita`, `passato remoto`], [`pass`, `ita`, `tempi composti`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: piuccheperfetto e passivo`,
      questions: [
        { type: `text`, q: `Scrivi la 3ª persona singolare del piuccheperfetto di "amo".`, answer: [`amaverat`], explain: `Tema amav- + -erat.` },
        { type: `mc`, q: `Come si traduce "amata est"?`, options: [`è stata amata`, `è amata`, `fu amante`], answer: 0, explain: `Participio perfetto + est: perfetto passivo.` },
        { type: `mc`, q: `Quale desinenza ha la 3ª plurale del futuro anteriore?`, options: [`-erunt`, `-erint`, `-erant`], answer: 1, explain: `Futuro anteriore: -erint (diverso dal perfetto -erunt).` },
        { type: `text`, q: `Che cosa significa "odi" (perfetto)?`, answer: [`odio`, `io odio`], explain: `Odi, memini, novi: perfetti con valore di presente.` }
      ]
    }
  ],
  glossary: [
    { t: `Sistema del perfetto`, d: `Perfetto, piuccheperfetto e futuro anteriore, formati dal tema del perfetto.` },
    { t: `Forme guida`, d: `Le quattro forme sul dizionario: amo, amare, amavi, amatum.` },
    { t: `Perfetto storico`, d: `Passato remoto: racconta fatti passati.` },
    { t: `Perfetto logico`, d: `Passato prossimo: fatto passato con effetto nel presente.` },
    { t: `Raddoppiamento`, d: `Ripetizione della prima sillaba nel perfetto: do, dedi.` },
    { t: `Piuccheperfetto`, d: `Azione conclusa prima di un'altra passata: -eram.` },
    { t: `Futuro anteriore`, d: `Azione conclusa prima di un'altra futura: -ero.` },
    { t: `Participio perfetto`, d: `Quarta forma guida in -tus/-sus: amatus, rectus.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `text`, q: `Scrivi la 1ª persona singolare del perfetto di "moneo".`, answer: [`monui`], explain: `Moneo, monui, monitum.` },
      { type: `mc`, q: `Qual è il perfetto di "rego"?`, options: [`regi`, `rexi`, `regavi`], answer: 1, explain: `Rego, rexi, rectum.` },
      { type: `text`, q: `Scrivi la 2ª persona plurale del perfetto di "audio".`, answer: [`audivistis`, `audistis`], explain: `Audiv- + -istis.` },
      { type: `mc`, q: `Quale forma è il piuccheperfetto di "sum" alla 1ª persona singolare?`, options: [`fui`, `fueram`, `fuero`], answer: 1, explain: `Fueram (ero stato).` },
      { type: `mc`, q: `Traduci "amati erunt".`, options: [`saranno stati amati`, `erano amati`, `furono amati`], answer: 0, explain: `Participio perfetto + erunt (futuro): futuro anteriore passivo.` },
      { type: `text`, q: `Scrivi il perfetto di "venio".`, answer: [`veni`], explain: `Venio, veni, ventum: allungamento della vocale.` },
      { type: `mc`, q: `"Memini" significa…`, options: [`dimentico`, `ricordo`, `ho cominciato`], answer: 1, explain: `Memini è un perfetto con valore di presente: ricordo.` },
      { type: `tf`, q: `Il perfetto di "do" è formato con il raddoppiamento.`, answer: true, explain: `Do, dedi, datum.` },
      { type: `mc`, q: `Traduci "Cum epistulam scripsero, ad te mittam".`, options: [`Quando avrò scritto la lettera, te la manderò`, `Quando scrivevo la lettera, te la mandavo`, `Dopo aver scritto la lettera, te la mandai`], answer: 0, explain: `Scripsero è futuro anteriore, mittam è futuro semplice.` },
      { type: `order`, q: `Ordina i passi per formare un perfetto attivo.`, items: [`Cercare la 3ª forma guida sul dizionario`, `Togliere -i e ottenere il tema del perfetto`, `Aggiungere la desinenza della persona`, `Controllare il tipo di perfetto`], explain: `Prima la forma guida, poi il tema, poi la desinenza, infine il controllo.` }
    ]
  }
});
