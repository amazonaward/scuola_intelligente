TOPIC('it', {
  id: "p4-ita-pronomi",
  title: "I pronomi",
  intro: "\"Luca ha un cane. Luca porta il cane al parco e Luca lancia la palla al cane.\" Che noia ripetere sempre gli stessi nomi! Per fortuna esistono i <b>pronomi</b>: piccole parole che <b>stanno al posto del nome</b>. Impariamo i pronomi <b>personali</b>, <b>possessivi</b> e <b>dimostrativi</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Che cos'è un pronome",
      html: `<p>Il <b>pronome</b> è una parte <b>variabile</b> del discorso che <b>sostituisce il nome</b> (o un'altra parte della frase) per non ripeterlo.</p>
<p>La parola stessa lo spiega: <b>pro-nome</b> = "al posto del nome".</p>
<p>Guarda come cambia la frase:</p>
<ul>
<li>❌ <i>Luca ha un cane. <b>Luca</b> porta <b>il cane</b> al parco.</i></li>
<li>✅ <i>Luca ha un cane. <b>Lui</b> <b>lo</b> porta al parco.</i></li>
</ul>
<p>"Lui" sta al posto di <b>Luca</b>, "lo" sta al posto di <b>il cane</b>. La frase è più breve e più scorrevole!</p>
<p>Come si fa a trovare un pronome? Ci si chiede: <b>"Al posto di chi o di che cosa sta questa parola?"</b> Se la risposta è un nome, è un pronome.</p>`
    },
    {
      type: "text",
      title: "Passo 1 – I pronomi personali soggetto",
      html: `<p>I <b>pronomi personali</b> indicano le <b>persone</b> che parlano, che ascoltano o di cui si parla. Quando fanno da <b>soggetto</b> (chi compie l'azione) sono questi:</p>
<table>
<tr><th></th><th>Singolare</th><th>Plurale</th></tr>
<tr><td><b>1ª persona</b> (chi parla)</td><td>io</td><td>noi</td></tr>
<tr><td><b>2ª persona</b> (chi ascolta)</td><td>tu</td><td>voi</td></tr>
<tr><td><b>3ª persona</b> (di chi si parla)</td><td>lui, lei, (egli, ella, esso, essa)</td><td>loro, (essi, esse)</td></tr>
</table>
<p>In italiano il pronome soggetto spesso <b>si sottintende</b>, perché la desinenza del verbo ci dice già la persona: <i>"(Io) mangio", "(Noi) giochiamo"</i>. Si scrive quando vogliamo sottolinearlo: <i>"<b>Io</b> ho lavato i piatti, non <b>tu</b>!"</i></p>
<p>Le forme <i>egli, ella, esso, essa, essi, esse</i> si usano soprattutto nei libri; <i>esso/essa</i> si riferiscono di solito ad animali e cose.</p>`
    },
    {
      type: "text",
      title: "Passo 2 – I pronomi personali complemento",
      html: `<p>Quando il pronome <b>non</b> è il soggetto (ma riceve l'azione o segue una preposizione) cambia forma. Ci sono forme <b>forti</b> (toniche) e forme <b>deboli</b> (atone, dette anche <b>particelle pronominali</b>):</p>
<table>
<tr><th>Persona</th><th>Forma forte</th><th>Forma debole</th></tr>
<tr><td>1ª sing.</td><td>me</td><td>mi</td></tr>
<tr><td>2ª sing.</td><td>te</td><td>ti</td></tr>
<tr><td>3ª sing.</td><td>lui, lei, sé</td><td>lo, la, gli, le, si, ne</td></tr>
<tr><td>1ª plur.</td><td>noi</td><td>ci</td></tr>
<tr><td>2ª plur.</td><td>voi</td><td>vi</td></tr>
<tr><td>3ª plur.</td><td>loro, sé</td><td>li, le, si, ne</td></tr>
</table>
<p>Esempi: <i>Chiama <b>me</b>!</i> (forte) – <i><b>Mi</b> chiami?</i> (debole) – <i>Vengo con <b>te</b>.</i> – <i><b>Gli</b> ho scritto</i> (= ho scritto a lui) – <i><b>Le</b> ho regalato un fiore</i> (= a lei).</p>
<p>⚠️ Attenzione: <b>gli</b> vuol dire "a lui", <b>le</b> vuol dire "a lei". Si dice <i>"Ho visto Anna e <b>le</b> ho parlato"</i>, non "gli ho parlato".</p>`
    },
    {
      type: "svg",
      title: "Le tre persone",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<circle cx="110" cy="120" r="40" fill="#fcd34d" stroke="#92400e" stroke-width="3"/>
<circle cx="97" cy="112" r="5" fill="#1f2937"/><circle cx="123" cy="112" r="5" fill="#1f2937"/>
<path d="M95 135 Q110 148 125 135" stroke="#1f2937" stroke-width="3" fill="none"/>
<rect x="75" y="165" width="70" height="70" rx="15" fill="#3b82f6"/>
<path d="M160 90 L300 70 L300 120 L175 115 Z" fill="#ffffff" stroke="#1d4ed8" stroke-width="3"/>
<text x="232" y="100" font-size="18" text-anchor="middle" fill="#1d4ed8" font-weight="bold">Io ti parlo di lei!</text>
<circle cx="330" cy="170" r="38" fill="#fdba74" stroke="#9a3412" stroke-width="3"/>
<circle cx="318" cy="163" r="5" fill="#1f2937"/><circle cx="342" cy="163" r="5" fill="#1f2937"/>
<path d="M318 185 Q330 193 342 185" stroke="#1f2937" stroke-width="3" fill="none"/>
<rect x="297" y="212" width="66" height="55" rx="15" fill="#22c55e"/>
<circle cx="500" cy="120" r="38" fill="#f9a8d4" stroke="#9d174d" stroke-width="3"/>
<circle cx="488" cy="113" r="5" fill="#1f2937"/><circle cx="512" cy="113" r="5" fill="#1f2937"/>
<path d="M488 133 Q500 141 512 133" stroke="#1f2937" stroke-width="3" fill="none"/>
<path d="M462 100 Q500 60 538 100" stroke="#7c2d12" stroke-width="10" fill="none"/>
<rect x="467" y="162" width="66" height="60" rx="15" fill="#a855f7"/>
<text x="110" y="270" font-size="20" text-anchor="middle" fill="#1d4ed8" font-weight="bold">1ª: IO</text>
<text x="110" y="292" font-size="15" text-anchor="middle" fill="#1f2937">chi parla</text>
<text x="330" y="292" font-size="20" text-anchor="middle" fill="#15803d" font-weight="bold">2ª: TU (chi ascolta)</text>
<text x="500" y="255" font-size="20" text-anchor="middle" fill="#7e22ce" font-weight="bold">3ª: LEI</text>
<text x="500" y="278" font-size="15" text-anchor="middle" fill="#1f2937">di chi si parla</text>
</svg>`,
      caption: "La prima persona parla, la seconda ascolta, la terza è la persona (o la cosa) di cui si parla."
    },
    {
      type: "quiz",
      title: "Mini-quiz: i pronomi personali",
      questions: [
        { type: "mc", q: "\"<b>Noi</b> andiamo al mare.\" Che persona è \"noi\"?", options: ["1ª plurale", "2ª plurale", "3ª plurale"], answer: 0, explain: "Noi = io + altri: è la prima persona plurale." },
        { type: "mc", q: "Completa: \"Ho incontrato la maestra e ___ ho dato il quaderno.\"", options: ["gli", "le", "li"], answer: 1, explain: "Ho dato il quaderno a lei (la maestra): si usa \"le\"." },
        { type: "tf", q: "Nella frase \"Mangio una mela\" il pronome soggetto \"io\" è sottinteso.", answer: true, explain: "La desinenza \"-o\" di mangio indica già la 1ª persona singolare." }
      ]
    },
    {
      type: "text",
      title: "Passo 3 – I pronomi possessivi",
      html: `<p>I <b>pronomi possessivi</b> indicano <b>a chi appartiene</b> qualcosa e <b>sostituiscono</b> un nome già detto.</p>
<table>
<tr><th>Possessore</th><th>Forme</th></tr>
<tr><td>io</td><td>il mio, la mia, i miei, le mie</td></tr>
<tr><td>tu</td><td>il tuo, la tua, i tuoi, le tue</td></tr>
<tr><td>lui / lei</td><td>il suo, la sua, i suoi, le sue</td></tr>
<tr><td>noi</td><td>il nostro, la nostra, i nostri, le nostre</td></tr>
<tr><td>voi</td><td>il vostro, la vostra, i vostri, le vostre</td></tr>
<tr><td>loro</td><td>il loro, la loro, i loro, le loro</td></tr>
</table>
<p>⚠️ <b>Aggettivo o pronome?</b> Le parole sono le stesse, ma:</p>
<ul>
<li>se è <b>accompagnato da un nome</b> è un <b>aggettivo</b> possessivo: <i>Questa è <b>la mia bici</b>.</i></li>
<li>se <b>sta al posto del nome</b> è un <b>pronome</b> possessivo: <i>La tua bici è rossa, <b>la mia</b> è blu.</i> ("la mia" = la mia bici)</li>
</ul>`
    },
    {
      type: "text",
      title: "Passo 4 – I pronomi dimostrativi",
      html: `<p>I <b>pronomi dimostrativi</b> indicano qualcosa <b>"mostrandolo"</b>, cioè dicendo se è <b>vicino o lontano</b> da chi parla o da chi ascolta.</p>
<ul>
<li><b>questo, questa, questi, queste</b> → vicino a chi parla: <i>Prendo <b>questo</b>.</i></li>
<li><b>codesto, codesta…</b> → vicino a chi ascolta (si usa soprattutto in Toscana e nei documenti).</li>
<li><b>quello, quella, quelli, quelle</b> → lontano da tutti e due: <i>Mi piace <b>quella</b> laggiù.</i></li>
<li><b>ciò</b> = "questa cosa / quella cosa": <i><b>Ciò</b> che dici è vero.</i></li>
<li>altri: <b>stesso, medesimo</b> (<i>Ho detto lo <b>stesso</b></i>).</li>
</ul>
<p>Anche qui vale la regola: <i><b>Questo libro</b> è mio</i> → aggettivo (c'è il nome); <i>Voglio <b>questo</b></i> → pronome (sta da solo, al posto del nome).</p>`
    },
    {
      type: "svg",
      title: "Questo, codesto, quello",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fefce8"/>
<line x1="20" y1="200" x2="580" y2="200" stroke="#a16207" stroke-width="4"/>
<circle cx="70" cy="110" r="30" fill="#93c5fd" stroke="#1e3a8a" stroke-width="3"/>
<rect x="45" y="140" width="50" height="58" rx="10" fill="#2563eb"/>
<text x="70" y="235" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">chi parla</text>
<circle cx="140" cy="185" r="14" fill="#ef4444"/>
<text x="140" y="160" font-size="18" text-anchor="middle" fill="#b91c1c" font-weight="bold">questo</text>
<circle cx="330" cy="110" r="30" fill="#86efac" stroke="#14532d" stroke-width="3"/>
<rect x="305" y="140" width="50" height="58" rx="10" fill="#16a34a"/>
<text x="330" y="235" font-size="16" text-anchor="middle" fill="#14532d" font-weight="bold">chi ascolta</text>
<circle cx="270" cy="185" r="14" fill="#f97316"/>
<text x="270" y="160" font-size="18" text-anchor="middle" fill="#c2410c" font-weight="bold">codesto</text>
<circle cx="520" cy="185" r="14" fill="#a855f7"/>
<text x="520" y="160" font-size="18" text-anchor="middle" fill="#7e22ce" font-weight="bold">quello</text>
<text x="520" y="235" font-size="16" text-anchor="middle" fill="#7e22ce">lontano da tutti</text>
<path d="M100 95 Q300 30 505 165" stroke="#64748b" stroke-width="2" stroke-dasharray="6 6" fill="none"/>
</svg>`,
      caption: "I dimostrativi dicono quanto una cosa è vicina a chi parla o a chi ascolta."
    },
    {
      type: "example",
      title: "Esempio pratico: riscrivere un testo",
      html: `<p>Testo con troppe ripetizioni:</p>
<p><i>"Sara ha una gatta. La gatta di Sara si chiama Mimì. Sara dà da mangiare a Mimì ogni mattina. Mimì aspetta Sara vicino alla porta."</i></p>
<p>Testo con i pronomi:</p>
<p><i>"Sara ha una gatta. <b>La sua</b> si chiama Mimì. <b>Lei</b> <b>le</b> dà da mangiare ogni mattina. Mimì <b>la</b> aspetta vicino alla porta."</i></p>
<ul>
<li><b>la sua</b> = la gatta di Sara (possessivo; qui si potrebbe dire anche "la sua gatta");</li>
<li><b>lei</b> = Sara (personale soggetto);</li>
<li><b>le</b> = a Mimì (personale complemento, "a lei");</li>
<li><b>la</b> = Sara (personale complemento oggetto).</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: al mercato",
      html: `<p>Al banco della frutta:</p>
<p>— Vorrei delle mele. Quali mi consiglia?<br>— <b>Queste</b> sono dolci, <b>quelle</b> sono più aspre.<br>— Prendo <b>queste</b>. E le pere? <b>Le</b> ha mature?<br>— Sì, <b>ne</b> ho di buonissime. Quante <b>ne</b> vuole?<br>— <b>Me ne</b> dia un chilo, grazie!</p>
<p>Senza pronomi il dialogo sarebbe lunghissimo: <i>"Prendo le mele dolci. E le pere? Ha pere mature? … Mi dia un chilo di pere"</i>. La particella <b>ne</b> vuol dire "di queste cose" (qui: "di pere").</p>`
    },
    {
      type: "widget",
      title: "Gioco: che tipo di pronome è?",
      widget: "classify",
      options: {
        groups: ["Personale", "Possessivo", "Dimostrativo"],
        items: [
          ["io", 0], ["noi", 0], ["gli (= a lui)", 0], ["me", 0], ["vi", 0],
          ["il mio", 1], ["la vostra", 1], ["i loro", 1], ["le tue", 1],
          ["questo", 2], ["quella", 2], ["ciò", 2], ["codesti", 2]
        ]
      },
      caption: "Metti ogni pronome nella scatola giusta."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il \"Lei\" di cortesia",
      html: `<p>Quando parli con un adulto che non conosci bene (il medico, la vigile, il preside) usi il <b>Lei</b>: <i>"Scusi, <b>Lei</b> sa dov'è la stazione?"</i>. È un pronome di <b>3ª persona</b> usato per parlare a chi ascolta: un segno di rispetto.</p>
<p>Si diffuse in Italia nel Rinascimento, sotto l'influenza della lingua spagnola. Nelle lettere molto formali si scrive con la maiuscola.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Lingue senza \"lui\" e \"lei\"",
      html: `<p>In <b>finlandese</b> e in <b>turco</b> c'è un solo pronome per "lui" e "lei": <i>hän</i> in finlandese, <i>o</i> in turco. Invece in <b>giapponese</b> ci sono tantissimi modi di dire "io", a seconda di chi parla e di quanto è gentile: <i>watashi, boku, ore</i>…</p>
<p>E in italiano antico? Dante, nella <i>Divina Commedia</i> (inizio del 1300), usa spesso "ei" ed "elli" per dire "egli".</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Il pronome <b>sta al posto del nome</b> per evitare ripetizioni.</li>
<li><b>Personali</b>: indicano le persone (io, tu, lui, lei, noi, voi, loro; me, te, mi, ti, lo, la, gli, le…).</li>
<li><b>Possessivi</b>: indicano a chi appartiene (il mio, il tuo, il suo…) e <b>stanno da soli</b>.</li>
<li><b>Dimostrativi</b>: indicano vicinanza o lontananza (questo, codesto, quello, ciò).</li>
<li>Con il nome accanto → <b>aggettivo</b>; da solo al posto del nome → <b>pronome</b>.</li>
<li><b>gli</b> = a lui; <b>le</b> = a lei.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i pronomi",
      intro: "Se la spiegazione della grammatica non ti basta, prova una di queste strade: un'analogia, un trucco per riconoscerli, un confronto con l'inglese e un gioco di carte.",
      tabs: [
        {
          label: "🎭 I sostituti in campo",
          html: `<p>Pensa a una partita di calcio. Il <b>nome</b> è il giocatore titolare; il <b>pronome</b> è la <b>riserva</b> che entra in campo al suo posto quando il titolare è stanco di correre (cioè quando l'abbiamo già ripetuto troppe volte).</p>
<p>La riserva deve avere la <b>stessa maglia</b>: se il titolare è femminile plurale (<i>le amiche</i>) entra un pronome femminile plurale (<i>loro, le, quelle, le mie</i>).</p>
<p>E prima di far entrare la riserva, il titolare deve <b>essere già sceso in campo</b>: se dico "<i>Lui è arrivato</i>" senza aver detto prima chi è, nessuno capisce!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#bbf7d0"/>
<rect x="10" y="10" width="580" height="200" fill="none" stroke="#ffffff" stroke-width="4"/>
<line x1="300" y1="10" x2="300" y2="210" stroke="#ffffff" stroke-width="4"/>
<circle cx="150" cy="95" r="30" fill="#fcd34d"/><rect x="120" y="125" width="60" height="55" rx="10" fill="#dc2626"/>
<text x="150" y="160" font-size="20" text-anchor="middle" fill="#ffffff" font-weight="bold">NOME</text>
<text x="150" y="50" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">Luca</text>
<path d="M200 120 L380 120" stroke="#1f2937" stroke-width="5" marker-end="url(#ar)"/>
<defs><marker id="ar" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 Z" fill="#1f2937"/></marker></defs>
<circle cx="450" cy="95" r="30" fill="#fcd34d"/><rect x="420" y="125" width="60" height="55" rx="10" fill="#dc2626"/>
<text x="450" y="160" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">PRON.</text>
<text x="450" y="50" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">lui</text>
<text x="290" y="105" font-size="16" text-anchor="middle" fill="#1f2937">cambio!</text>
</svg>`
        },
        {
          label: "🔍 Il trucco della domanda",
          html: `<p>Per capire se una parola è un <b>pronome</b> o un <b>aggettivo</b>, fai due prove:</p>
<ol>
<li><b>Prova del nome vicino</b>: c'è un nome subito dopo (o prima)? <i>"questo <u>zaino</u>"</i> → aggettivo. Nessun nome? → probabilmente pronome.</li>
<li><b>Prova della sostituzione</b>: rimetti al suo posto il nome. Se la frase funziona, era un pronome! <i>"Il tuo zaino è pesante, <b>il mio</b> no"</i> → "il mio <u>zaino</u> no" ✅ → "il mio" era pronome.</li>
</ol>
<p>Per i pronomi personali chiediti: <b>"chi?"</b> <i>"<b>Gli</b> ho telefonato" → a chi? → a lui (a Marco).</i></p>`
        },
        {
          label: "🇬🇧 Come in inglese",
          html: `<p>Se studi l'inglese, i pronomi li conosci già! Confrontali:</p>
<table>
<tr><th>Italiano</th><th>Inglese soggetto</th><th>Inglese complemento</th><th>Possessivo</th></tr>
<tr><td>io / me</td><td>I</td><td>me</td><td>mine</td></tr>
<tr><td>tu / te</td><td>you</td><td>you</td><td>yours</td></tr>
<tr><td>lui</td><td>he</td><td>him</td><td>his</td></tr>
<tr><td>lei</td><td>she</td><td>her</td><td>hers</td></tr>
<tr><td>esso (cosa/animale)</td><td>it</td><td>it</td><td>its</td></tr>
<tr><td>noi</td><td>we</td><td>us</td><td>ours</td></tr>
<tr><td>loro</td><td>they</td><td>them</td><td>theirs</td></tr>
</table>
<p>Differenza importante: in inglese il soggetto <b>non si può mai togliere</b> (<i>"I eat"</i>, non "eat"), mentre in italiano sì, perché il verbo cambia a ogni persona: mangi<b>o</b>, mangi<b>i</b>, mangi<b>a</b>…</p>`
        },
        {
          label: "🃏 Carte: pronome ↔ nome",
          html: `<p>Abbina ogni frase con il pronome al nome che sostituisce.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["\"<b>Gli</b> ho scritto\" (a Paolo)", "a lui"],
              ["\"<b>Le</b> ho scritto\" (a Giulia)", "a lei"],
              ["\"<b>La</b> mangio\" (la pera)", "la pera"],
              ["\"<b>Li</b> chiamo\" (i cugini)", "i cugini"],
              ["\"<b>Ne</b> voglio due\" (di caramelle)", "di caramelle"],
              ["\"<b>Ci</b> vediamo\" (noi)", "noi"]
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dei pronomi: tocca un nodo e scopri il perché",
      nodes: [
        { id: "nome", label: "Nome", x: 50, y: 6, color: "#2563eb", html: "La parola che indica persone, animali, cose, idee.", why: "Il pronome esiste solo perché esiste il nome: per sapere che cosa vuol dire \"lui\" devo conoscere il nome che sostituisce (si chiama <b>antecedente</b> o <b>referente</b>)." },
        { id: "pronome", label: "Pronome", x: 50, y: 28, color: "#16a34a", html: "Parte variabile del discorso che sta al posto del nome.", why: "Dal latino <i>pro nomine</i>, \"al posto del nome\". Già i grammatici greci (Dionisio Trace, II secolo a.C.) lo elencavano tra le otto parti del discorso; i Romani, con Elio Donato (IV secolo d.C.), copiarono la classificazione che usiamo ancora." },
        { id: "personali", label: "Personali", x: 18, y: 52, color: "#f59e0b", html: "Indicano chi parla, chi ascolta e di chi si parla: io, tu, lui, noi…", why: "Ogni dialogo ha tre ruoli: chi parla (1ª persona), chi ascolta (2ª) e il resto del mondo (3ª). Per questo i verbi si coniugano in tre persone, al singolare e al plurale." },
        { id: "possessivi", label: "Possessivi", x: 50, y: 56, color: "#ef4444", html: "Indicano a chi appartiene qualcosa: il mio, il tuo, il loro…", why: "Nascono dai pronomi personali: \"mio\" viene dal latino <i>meus</i>, legato a <i>me</i>. Per questo a ogni persona corrisponde un possessivo." },
        { id: "dimostrativi", label: "Dimostrativi", x: 82, y: 52, color: "#a855f7", html: "Indicano vicinanza o lontananza: questo, codesto, quello, ciò.", why: "\"Questo\" viene dal latino <i>eccum istum</i> (\"ecco codesto\") e \"quello\" da <i>eccum illum</i> (\"ecco quello\"): parole nate per indicare con il dito!" },
        { id: "atone", label: "Forme deboli (mi, ti, lo, gli…)", x: 18, y: 80, color: "#0ea5e9", html: "Pronomi brevi, senza accento, che si appoggiano al verbo: <i>lo vedo, dammelo</i>.", why: "Si chiamano anche <b>clitici</b> (dal greco \"appoggiarsi\"): non hanno accento proprio e si \"attaccano\" al verbo, prima o dopo (<i>lo prendo / prendilo</i>). \"Lo\" e \"la\" vengono dal latino <i>illum, illam</i>." },
        { id: "cortesia", label: "Lei di cortesia", x: 50, y: 82, color: "#14b8a6", html: "La 3ª persona usata per parlare in modo rispettoso a chi ascolta.", why: "Nel Rinascimento si diceva \"Vostra Signoria\" (femminile) e si continuava con \"Lei\". Lo spagnolo, molto influente in Italia nel 1500-1600, diffuse quest'uso. Nel periodo fascista si cercò di imporre il \"Voi\", ma dopo il 1945 il Lei tornò normale." },
        { id: "aggettivo", label: "Aggettivo o pronome?", x: 82, y: 80, color: "#64748b", html: "Stesse parole, ruoli diversi: con il nome = aggettivo, da sole = pronome.", why: "Possessivi e dimostrativi possono accompagnare il nome (aggettivi) o sostituirlo (pronomi). La differenza dipende dalla <b>funzione</b> nella frase, non dalla parola in sé." }
      ],
      edges: [
        ["nome", "pronome", "sostituito da"],
        ["pronome", "personali", "tipo"],
        ["pronome", "possessivi", "tipo"],
        ["pronome", "dimostrativi", "tipo"],
        ["personali", "atone", "forme brevi"],
        ["personali", "cortesia", "uso speciale"],
        ["possessivi", "aggettivo", "attenzione"],
        ["dimostrativi", "aggettivo", "attenzione"]
      ]
    },
    {
      type: "widget",
      title: "Ripassa con le flashcard",
      widget: "flashcards",
      options: {
        cards: [
          { front: "gli", back: "a lui (pronome personale complemento)" },
          { front: "le (in \"le parlo\")", back: "a lei" },
          { front: "il nostro", back: "pronome possessivo, 1ª persona plurale" },
          { front: "ciò", back: "pronome dimostrativo = questa/quella cosa" },
          { front: "codesto", back: "dimostrativo: vicino a chi ascolta" },
          { front: "Lei (con la maiuscola)", back: "pronome di cortesia" }
        ]
      },
      caption: "Gira le carte per vedere la risposta."
    },
    {
      type: "quiz",
      title: "Mini-quiz: possessivi e dimostrativi",
      questions: [
        { type: "mc", q: "\"Il mio quaderno è nuovo, <b>il tuo</b> è vecchio.\" \"Il tuo\" è…", options: ["aggettivo possessivo", "pronome possessivo", "pronome dimostrativo"], answer: 1, explain: "Sta al posto di \"il tuo quaderno\": è un pronome possessivo." },
        { type: "mc", q: "\"Mi piace <b>questa</b> maglietta.\" \"Questa\" è…", options: ["pronome dimostrativo", "aggettivo dimostrativo", "pronome personale"], answer: 1, explain: "C'è il nome \"maglietta\" accanto: è un aggettivo." },
        { type: "tf", q: "\"Ciò\" è un pronome dimostrativo.", answer: true, explain: "Ciò significa \"questa cosa / quella cosa\"." }
      ]
    }
  ],
  glossary: [
    { t: "Pronome", d: "Parola variabile che sostituisce un nome per evitare ripetizioni." },
    { t: "Antecedente", d: "Il nome (già detto) che il pronome sostituisce." },
    { t: "Pronome personale", d: "Indica la persona che parla, ascolta o di cui si parla (io, tu, lui…)." },
    { t: "Forma debole (atona)", d: "Pronome personale breve che si appoggia al verbo: mi, ti, lo, la, gli, le, ci, vi, li, ne." },
    { t: "Pronome possessivo", d: "Indica a chi appartiene qualcosa e sta al posto del nome (il mio, la tua…)." },
    { t: "Pronome dimostrativo", d: "Indica la posizione di qualcosa rispetto a chi parla o ascolta (questo, quello, ciò)." },
    { t: "Lei di cortesia", d: "Pronome di 3ª persona usato per rivolgersi con rispetto a chi ascolta." },
    { t: "Sottinteso", d: "Non scritto ma capito: il soggetto \"io\" in \"mangio\"." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cosa fa un pronome?", options: ["Descrive il nome", "Sta al posto del nome", "Indica un'azione"], answer: 1, explain: "Pro-nome: al posto del nome." },
      { type: "mc", q: "\"<b>Voi</b> siete bravissimi.\" Voi è…", options: ["2ª persona plurale", "3ª persona plurale", "1ª persona plurale"], answer: 0, explain: "Voi = le persone a cui parlo: 2ª plurale." },
      { type: "mc", q: "Scegli la frase corretta.", options: ["Ho visto la nonna e gli ho dato un bacio.", "Ho visto la nonna e le ho dato un bacio.", "Ho visto la nonna e li ho dato un bacio."], answer: 1, explain: "A lei (la nonna) → le." },
      { type: "tf", q: "In \"<b>Quello</b> è il mio zaino\" la parola \"quello\" è un pronome dimostrativo.", answer: true, explain: "Sta da solo, al posto del nome: pronome." },
      { type: "tf", q: "In \"<b>La mia</b> casa è grande\" la parola \"la mia\" è un pronome.", answer: false, explain: "Accompagna il nome \"casa\": è un aggettivo possessivo." },
      { type: "text", q: "Scrivi il pronome personale soggetto di 1ª persona singolare.", answer: ["io"], explain: "Io: chi parla." },
      { type: "text", q: "Sostituisci con un pronome: \"Telefono <u>a Marco</u>\" → \"___ telefono\".", answer: ["gli"], explain: "A lui → gli: \"Gli telefono\"." },
      { type: "mc", q: "Quale di questi è un pronome possessivo?", options: ["noi", "i vostri", "questi"], answer: 1, explain: "\"I vostri\" indica possesso." },
      { type: "mc", q: "Quale dimostrativo indica una cosa vicina a chi ascolta?", options: ["questo", "codesto", "quello"], answer: 1, explain: "Codesto = vicino a chi ascolta." },
      { type: "order", q: "Metti in ordine i pronomi personali soggetto: dalla 1ª singolare alla 3ª plurale.", items: ["io", "tu", "lui", "noi", "voi", "loro"], explain: "1ª, 2ª, 3ª singolare, poi 1ª, 2ª, 3ª plurale." },
      { type: "mc", q: "\"Vuoi delle ciliegie?\" \"Sì, <b>ne</b> prendo un po'.\" Ne significa…", options: ["di ciliegie", "a lui", "noi"], answer: 0, explain: "Ne = di queste cose (di ciliegie)." },
      { type: "tf", q: "Il \"Lei\" di cortesia è un pronome di 3ª persona.", answer: true, explain: "Si usa la 3ª persona per rivolgersi con rispetto a chi ascolta: \"Lei è gentile\"." }
    ]
  }
});
