TOPIC('it', {
  id: "p4-mat-grandi-numeri",
  title: "I grandi numeri",
  intro: "Quante persone vivono in Italia? Quanti chilometri ci separano dalla Luna? Per rispondere servono i <b>grandi numeri</b>: le <b>migliaia</b> e i <b>milioni</b>. Impariamo a leggerli, scriverli, scomporli e confrontarli senza paura.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Dal mille in su",
      html: `<p>Conosci già unità (u), decine (da) e centinaia (h). Ricordi la regola d'oro del nostro sistema? <b>10 unità di un ordine formano 1 unità dell'ordine superiore</b>:</p>
<ul>
<li>10 unità = 1 decina</li>
<li>10 decine = 1 centinaio</li>
<li>10 centinaia = <b>1 migliaio</b> (1.000)</li>
</ul>
<p>E si continua sempre allo stesso modo:</p>
<ul>
<li>10 migliaia = 1 <b>decina di migliaia</b> (10.000)</li>
<li>10 decine di migliaia = 1 <b>centinaio di migliaia</b> (100.000)</li>
<li>10 centinaia di migliaia = <b>1 milione</b> (1.000.000)</li>
</ul>
<p>È un sistema <b>decimale</b> (in base 10) e <b>posizionale</b>: il valore di una cifra dipende dal <b>posto</b> che occupa nel numero.</p>`
    },
    {
      type: "3d",
      title: "Mille cubetti in 3D",
      scene: "blocks",
      options: { mode: "volume", a: 10, b: 10, c: 10, max: 10 },
      caption: "Un cubo di 10 × 10 × 10 cubetti contiene 1.000 cubetti: è un migliaio! Gira il modello e usa i cursori per vedere quanti cubetti ci sono con meno strati."
    },
    {
      type: "text",
      title: "Passo 1 – Le classi: unità, migliaia, milioni",
      html: `<p>Le cifre di un grande numero si raggruppano <b>a tre a tre</b>, partendo da destra. Ogni gruppo si chiama <b>classe</b>:</p>
<table>
<tr><th colspan="3">Classe dei MILIONI</th><th colspan="3">Classe delle MIGLIAIA</th><th colspan="3">Classe delle UNITÀ semplici</th></tr>
<tr><td>hM</td><td>daM</td><td>uM</td><td>hk</td><td>dak</td><td>uk</td><td>h</td><td>da</td><td>u</td></tr>
<tr><td>centinaia di milioni</td><td>decine di milioni</td><td>unità di milioni</td><td>centinaia di migliaia</td><td>decine di migliaia</td><td>unità di migliaia</td><td>centinaia</td><td>decine</td><td>unità</td></tr>
</table>
<p>La lettera <b>k</b> viene dal greco <i>chílioi</i>, \"mille\" (come in <b>k</b>m, <b>k</b>g); la <b>M</b> sta per \"mega\", milione.</p>
<p>Per rendere i numeri più leggibili, tra una classe e l'altra si mette un <b>punto</b> o un piccolo <b>spazio</b>: <b>3.408.215</b> oppure <b>3 408 215</b>. (Mai la virgola: in italiano la virgola serve per i decimali!)</p>`
    },
    {
      type: "svg",
      title: "La tabella delle classi",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f8fafc"/>
<rect x="15" y="20" width="185" height="40" fill="#a855f7"/><text x="107" y="47" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">MILIONI</text>
<rect x="208" y="20" width="185" height="40" fill="#3b82f6"/><text x="300" y="47" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">MIGLIAIA</text>
<rect x="401" y="20" width="185" height="40" fill="#22c55e"/><text x="493" y="47" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">UNITÀ</text>
<g font-size="16" text-anchor="middle" fill="#1f2937" font-weight="bold">
<text x="46" y="88">hM</text><text x="107" y="88">daM</text><text x="168" y="88">uM</text>
<text x="239" y="88">hk</text><text x="300" y="88">dak</text><text x="361" y="88">uk</text>
<text x="432" y="88">h</text><text x="493" y="88">da</text><text x="554" y="88">u</text>
</g>
<g stroke="#64748b" stroke-width="2" fill="#ffffff">
<rect x="15" y="100" width="61" height="70"/><rect x="76" y="100" width="62" height="70"/><rect x="138" y="100" width="62" height="70"/>
<rect x="208" y="100" width="61" height="70"/><rect x="269" y="100" width="62" height="70"/><rect x="331" y="100" width="62" height="70"/>
<rect x="401" y="100" width="61" height="70"/><rect x="462" y="100" width="62" height="70"/><rect x="524" y="100" width="62" height="70"/>
</g>
<g font-size="40" text-anchor="middle" font-weight="bold">
<text x="168" y="150" fill="#7e22ce">3</text>
<text x="239" y="150" fill="#1d4ed8">4</text><text x="300" y="150" fill="#1d4ed8">0</text><text x="361" y="150" fill="#1d4ed8">8</text>
<text x="432" y="150" fill="#15803d">2</text><text x="493" y="150" fill="#15803d">1</text><text x="554" y="150" fill="#15803d">5</text>
</g>
<text x="300" y="210" font-size="26" text-anchor="middle" fill="#1f2937" font-weight="bold">3.408.215</text>
<text x="300" y="242" font-size="17" text-anchor="middle" fill="#334155">tre milioni quattrocentottomila duecentoquindici</text>
</svg>`,
      caption: "Ogni classe ha tre posti: centinaia, decine e unità. Lo zero tiene il posto delle decine di migliaia."
    },
    {
      type: "text",
      title: "Passo 2 – Leggere e scrivere i grandi numeri",
      html: `<p>Per <b>leggere</b> un grande numero:</p>
<ol>
<li>dividi le cifre in classi da tre, partendo da <b>destra</b>;</li>
<li>leggi ogni classe come un numero fino a 999, partendo da <b>sinistra</b>, e aggiungi il nome della classe (<b>milioni</b>, <b>mila</b>).</li>
</ol>
<p>Esempi:</p>
<ul>
<li><b>45.320</b> → quarantacinque<b>mila</b>trecentoventi</li>
<li><b>702.009</b> → settecentodue<b>mila</b>nove</li>
<li><b>2.500.000</b> → due <b>milioni</b> cinquecento<b>mila</b></li>
</ul>
<p>Regole di scrittura in lettere:</p>
<ul>
<li>si dice \"<b>mille</b>\" ma \"due<b>mila</b>, tre<b>mila</b>…\";</li>
<li>\"un milione\", \"due milioni\" si scrivono <b>staccati</b> dal resto: <i>tre milioni duecentomila</i>;</li>
<li>i numeri fino alle migliaia si scrivono tutti <b>attaccati</b>: <i>centoventitremilaquattrocentocinquantasei</i>.</li>
</ul>
<p>Attenzione agli <b>zeri</b>! In \"settantamila e cinque\" ci sono decine, centinaia e unità di migliaia vuote: si scrive <b>70.005</b>.</p>`
    },
    {
      type: "widget",
      title: "L'abaco delle migliaia",
      widget: "abacus",
      options: { columns: ["hk", "dak", "uk", "h", "da", "u"], value: 245367 },
      caption: "Aggiungi e togli palline: quando una colonna arriva a 10, tocca alla colonna a sinistra (cambio)."
    },
    {
      type: "quiz",
      title: "Mini-quiz: classi e valore delle cifre",
      questions: [
        { type: "num", q: "Quante centinaia ci sono in un migliaio?", answer: 10, explain: "10 centinaia = 1.000." },
        { type: "mc", q: "Nel numero 586.214 la cifra 8 vale…", options: ["8 migliaia", "80 migliaia (80.000)", "800"], answer: 1, explain: "L'8 è al posto delle decine di migliaia: 80.000." },
        { type: "mc", q: "Come si scrive in cifre \"quattrocentomila e sei\"?", options: ["400.006", "40.006", "4.000.006"], answer: 0, explain: "400 migliaia e 6 unità: 400.006." }
      ]
    },
    {
      type: "text",
      title: "Passo 3 – Scomporre e comporre",
      html: `<p><b>Scomporre</b> un numero significa dire quanto vale ogni sua cifra.</p>
<p><b>3.408.215</b> =</p>
<ul>
<li>3 uM + 4 hk + 0 dak + 8 uk + 2 h + 1 da + 5 u</li>
<li>= 3.000.000 + 400.000 + 8.000 + 200 + 10 + 5 (scomposizione <b>additiva</b>)</li>
</ul>
<p><b>Comporre</b> è il contrario: <i>5 dak + 7 uk + 3 da</i> = 50.000 + 7.000 + 30 = <b>57.030</b> (attenzione agli zeri nei posti vuoti: centinaia e unità).</p>
<p>Lo stesso numero si può anche leggere in modi diversi: <b>57.030</b> = 57 migliaia e 30 unità = 570 centinaia e 3 decine = 5.703 decine.</p>`
    },
    {
      type: "text",
      title: "Passo 4 – Confrontare e ordinare",
      html: `<p>Per <b>confrontare</b> due grandi numeri:</p>
<ol>
<li>conta le <b>cifre</b>: il numero con più cifre è il maggiore (<i>100.000 &gt; 99.999</i>);</li>
<li>se hanno lo stesso numero di cifre, confronta le cifre <b>da sinistra</b>, una alla volta, finché trovi la prima diversa: <i>452.<b>3</b>10 &gt; 452.<b>1</b>99</i>.</li>
</ol>
<p>Simboli: <b>&gt;</b> maggiore, <b>&lt;</b> minore, <b>=</b> uguale.</p>
<p><b>Arrotondare</b>: nei giornali i grandi numeri si arrotondano. Per arrotondare alle migliaia guarda la cifra delle centinaia: se è 5 o più si arrotonda per eccesso, altrimenti per difetto. <i>58.643 → circa 59.000</i>; <i>58.432 → circa 58.000</i>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: i numeri dell'Italia",
      html: `<ul>
<li>In Italia vivono circa <b>59 milioni</b> di persone: secondo l'ISTAT, all'inizio del 2025 erano circa <b>58.934.000</b>.</li>
<li>Lo stadio di San Siro, a Milano, contiene circa <b>75.000</b> spettatori. Per contenere tutti gli italiani servirebbero quasi <b>800</b> stadi così!</li>
<li>Il Monte Bianco è alto circa <b>4.805</b> metri (le misure più recenti variano di un metro o due perché la cima è di neve e ghiaccio).</li>
<li>La distanza media tra la Terra e la Luna è di circa <b>384.400 km</b>: trecentoottantaquattromilaquattrocento chilometri.</li>
</ul>
<p>Prova a leggere ad alta voce: <b>58.934.000</b> → <i>cinquantotto milioni novecentotrentaquattromila</i>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: il salvadanaio della classe",
      html: `<p>La scuola raccoglie i tappi di plastica per beneficenza. Ogni sacco ne contiene <b>1.000</b>.</p>
<ul>
<li>Classe 4ª A: <b>12.450</b> tappi → 12 sacchi pieni e 450 tappi sfusi.</li>
<li>Classe 4ª B: <b>12.540</b> tappi.</li>
<li>Chi ne ha di più? Stesse cifre fino alle migliaia (12), poi centinaia: 5 &gt; 4 → <b>12.540 &gt; 12.450</b>. Vince la 4ª B!</li>
<li>Insieme: 12.450 + 12.540 = <b>24.990</b> tappi. Quanti ne mancano per arrivare a 25.000? <b>10</b>!</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Lakh e crore",
      html: `<p>In <b>India</b> i grandi numeri si raggruppano in modo diverso! Le prime tre cifre a destra stanno insieme, poi si raggruppano <b>a due a due</b>: un milione si scrive <b>10,00,000</b> e si dice \"dieci <b>lakh</b>\". Un <b>lakh</b> è 100.000 e un <b>crore</b> è 10.000.000.</p>
<p>In <b>Cina</b> e in <b>Giappone</b>, invece, c'è una parola speciale per <b>10.000</b> (<i>wàn</i> in cinese, <i>man</i> in giapponese), e i numeri si raggruppano <b>a quattro a quattro</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Da dove viene \"milione\"",
      html: `<p>La parola <b>milione</b> è nata in <b>Italia</b>, nel Medioevo: vuol dire \"<b>grande mille</b>\" (mille + il suffisso accrescitivo <i>-one</i>), cioè \"mille volte mille\". Da qui è passata a tutte le lingue europee: <i>million</i> in inglese e francese, <i>Million</i> in tedesco.</p>
<p>E sai che il libro di viaggi di <b>Marco Polo</b> si chiama <i>Il Milione</i>? Forse per il soprannome della sua famiglia (\"Emilione\"), o forse perché raccontava di \"milioni\" di meraviglie!</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>10</b> unità di un ordine = <b>1</b> unità dell'ordine superiore.</li>
<li>1.000 = mille; 10.000 = diecimila; 100.000 = centomila; <b>1.000.000 = un milione</b>.</li>
<li>Le cifre si raggruppano in <b>classi di tre</b>: unità, migliaia, milioni.</li>
<li>Il valore di una cifra dipende dalla sua <b>posizione</b>; lo <b>zero</b> tiene il posto vuoto.</li>
<li>Per confrontare: prima il numero di cifre, poi le cifre da sinistra.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i grandi numeri",
      intro: "Un milione è difficile da immaginare. Ecco altre strade: i soldi, i cubetti 3D, la retta dei numeri, il conto del tempo e il metodo indiano.",
      tabs: [
        {
          label: "💶 Con le banconote",
          html: `<p>Immagina di avere solo banconote da <b>1 €</b>, <b>10 €</b>, <b>100 €</b>… e di dover pagare <b>34.526 €</b> (il prezzo di un'auto).</p>
<ul>
<li>3 mazzette da <b>10.000 €</b></li>
<li>4 mazzette da <b>1.000 €</b></li>
<li>5 banconote da <b>100 €</b></li>
<li>2 banconote da <b>10 €</b></li>
<li>6 monete da <b>1 €</b></li>
</ul>
<p>Ogni posizione del numero corrisponde a un \"taglio\" di banconota 10 volte più grande del precedente. Un <b>milione</b> di euro sarebbero 100 mazzette da 10.000 €!</p>`
        },
        {
          label: "🧊 Cubetti: da 1 a 1.000",
          html: `<p>Nel sistema dei <b>blocchi base 10</b>: il cubetto è l'unità, il lungo è la decina, la lastra è il centinaio… e il <b>cubo grande</b> è il migliaio. Qui vedi un numero fino a 999: muovi il cursore fino a <b>999</b> e immagina di aggiungere ancora 1 cubetto. Fai i cambi: 10 unità → 1 decina, 10 decine → 1 centinaio, 10 centinaia → <b>1 cubo da mille</b>!</p>
<p>E poi? 10 cubi grandi in fila fanno una \"barra\" da 10.000, 10 barre una \"lastra\" da 100.000 e 10 lastre un cubo gigante da <b>1.000.000</b>. La forma si ripete: cubo, barra, lastra… sempre per 10!</p>`,
          scene: "blocks",
          options: { mode: "base10", value: 999 }
        },
        {
          label: "⏱️ Quanto dura un milione?",
          html: `<p>Prova a contare un numero al secondo, senza mai fermarti:</p>
<ul>
<li>fino a <b>1.000</b>: circa <b>17 minuti</b>;</li>
<li>fino a <b>100.000</b>: più di <b>27 ore</b>;</li>
<li>fino a <b>1.000.000</b>: circa <b>11 giorni e mezzo</b>, giorno e notte!</li>
</ul>
<p>Infatti in un giorno ci sono 24 × 60 × 60 = <b>86.400</b> secondi, e 1.000.000 : 86.400 ≈ 11,6 giorni.</p>
<p>E un <b>miliardo</b> (mille milioni)? Ci vorrebbero quasi <b>32 anni</b>!</p>`
        },
        {
          label: "📏 Sulla retta, con lo zoom",
          html: `<p>La retta dei numeri funziona anche per i grandi numeri: basta cambiare il valore di ogni tacca. Qui ogni tacca vale <b>1.000</b>: la tacca 25 è <b>25.000</b>, la 47 è <b>47.000</b>.</p>
<p>Usa i salti: da 30 (30.000) salta di 10 in 10 (10.000 alla volta). Dove arrivi dopo 5 salti? A 80, cioè <b>80.000</b>.</p>`,
          widget: "numberLine",
          options: { min: 0, max: 100, step: 10, start: 30, marks: [25, 47] }
        },
        {
          label: "🇮🇳 Il metodo indiano",
          html: `<p>Il nostro modo di scrivere i numeri (con le cifre da 0 a 9 e lo zero) è nato proprio in <b>India</b>, circa 1500 anni fa, ed è arrivato in Europa attraverso i matematici arabi e <b>Leonardo Fibonacci</b> (1202). Per questo si chiamano <b>cifre indo-arabiche</b>.</p>
<p>Gli Indiani però raggruppano le cifre in un altro modo:</p>
<table>
<tr><th>Numero</th><th>In Italia</th><th>In India</th></tr>
<tr><td>centomila</td><td>100.000</td><td>1,00,000 (1 lakh)</td></tr>
<tr><td>un milione</td><td>1.000.000</td><td>10,00,000 (10 lakh)</td></tr>
<tr><td>dieci milioni</td><td>10.000.000</td><td>1,00,00,000 (1 crore)</td></tr>
</table>
<p>Il numero è sempre lo stesso: cambia solo il modo di <b>raggruppare</b> e di dare i nomi. Provare un altro raggruppamento aiuta a capire che le classi sono solo un \"aiuto per gli occhi\".</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dei grandi numeri",
      nodes: [
        { id: "base10", label: "Sistema decimale", x: 50, y: 6, color: "#2563eb", html: "Contiamo a gruppi di 10: 10 unità di un ordine = 1 dell'ordine superiore.", why: "Quasi sicuramente perché abbiamo <b>10 dita</b>! Molti popoli antichi contavano a gruppi di 10; i Maya usavano il 20 (dita delle mani e dei piedi), i Babilonesi il 60." },
        { id: "posizione", label: "Valore posizionale", x: 22, y: 28, color: "#16a34a", html: "Una cifra vale di più o di meno secondo il posto che occupa.", why: "Il sistema posizionale con lo zero nacque in <b>India</b> (circa V-VI secolo d.C.). I Romani non lo avevano: in MMXXV ogni simbolo ha un valore fisso, e fare i calcoli era difficilissimo." },
        { id: "zero", label: "Lo zero", x: 50, y: 30, color: "#f59e0b", html: "Indica un posto vuoto: in 70.005 gli zeri tengono il posto di h, da, uk.", why: "Il matematico indiano <b>Brahmagupta</b> nel 628 d.C. diede le prime regole per calcolare con lo zero. Senza zero non si potrebbe distinguere 75 da 705 o da 7.005!" },
        { id: "classi", label: "Classi", x: 78, y: 28, color: "#a855f7", html: "Gruppi di tre cifre: unità, migliaia, milioni.", why: "Raggruppare a tre segue i nomi: mille, milione, miliardo sono ognuno mille volte il precedente. È solo una comodità per gli occhi: in India si raggruppa diversamente (lakh, crore)." },
        { id: "migliaia", label: "Migliaia", x: 70, y: 55, color: "#3b82f6", html: "uk (1.000), dak (10.000), hk (100.000).", why: "\"Mille\" viene dal latino <i>mille</i>; il simbolo k viene dal greco <i>chílioi</i>. I Romani scrivevano mille con la lettera M." },
        { id: "milioni", label: "Milioni", x: 88, y: 78, color: "#7e22ce", html: "uM (1.000.000), daM, hM: mille volte mille.", why: "La parola è italiana (\"grande mille\") e compare nel Medioevo, quando i mercanti italiani avevano bisogno di contare grandi somme di denaro." },
        { id: "leggere", label: "Leggere e scrivere", x: 22, y: 60, color: "#ef4444", html: "Classi da destra, lettura da sinistra; mila, milioni.", why: "Il punto o lo spazio tra le classi servono a non sbagliare: la norma internazionale (Sistema Internazionale, 1948-2003) consiglia lo spazio, perché in alcuni Paesi il punto indica i decimali." },
        { id: "confronto", label: "Confrontare", x: 30, y: 86, color: "#14b8a6", html: "Prima il numero di cifre, poi le cifre da sinistra.", why: "Funziona grazie al valore posizionale: la cifra più a sinistra \"pesa\" più di tutte le altre messe insieme (1.000 è più di 999)." },
        { id: "abaco", label: "Abaco", x: 60, y: 82, color: "#64748b", html: "Strumento con aste e palline per rappresentare i numeri.", why: "Gli abachi esistono da migliaia di anni (Mesopotamia, Roma, Cina). Il <b>suanpan</b> cinese e il <b>soroban</b> giapponese si usano ancora oggi per fare calcoli velocissimi a mente." }
      ],
      edges: [
        ["base10", "posizione", "si scrive con"],
        ["posizione", "zero", "ha bisogno dello"],
        ["base10", "classi", "si raggruppa in"],
        ["classi", "migliaia", ""],
        ["classi", "milioni", ""],
        ["posizione", "leggere", "permette di"],
        ["leggere", "confronto", "poi"],
        ["posizione", "abaco", "si vede con"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: confrontare e arrotondare",
      questions: [
        { type: "mc", q: "Quale numero è maggiore?", options: ["98.999", "100.001", "99.990"], answer: 1, explain: "100.001 ha 6 cifre, gli altri 5." },
        { type: "num", q: "Arrotonda 47.682 alle migliaia.", answer: 48000, explain: "La cifra delle centinaia è 6 (≥ 5): si arrotonda per eccesso a 48.000." },
        { type: "num", q: "Quanto fa 999.999 + 1?", answer: 1000000, explain: "Tutti i 9 diventano 0 con i cambi: un milione!" }
      ]
    }
  ],
  glossary: [
    { t: "Migliaio", d: "Gruppo di mille unità (1.000 = 10 centinaia)." },
    { t: "Milione", d: "Mille migliaia: 1.000.000." },
    { t: "Classe", d: "Gruppo di tre cifre: unità semplici, migliaia, milioni." },
    { t: "Ordine (posto)", d: "Posizione di una cifra: unità, decine, centinaia, unità di migliaia…" },
    { t: "Valore posizionale", d: "Il valore di una cifra dipende dal posto che occupa." },
    { t: "Scomporre", d: "Scrivere un numero come somma dei valori delle sue cifre." },
    { t: "Arrotondare", d: "Sostituire un numero con un altro vicino e più semplice (per eccesso o per difetto)." },
    { t: "Sistema decimale", d: "Sistema di numerazione in base 10." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Quante migliaia ci sono in un milione?", answer: 1000, explain: "1.000 × 1.000 = 1.000.000." },
      { type: "mc", q: "Come si legge 307.050?", options: ["trecentosettemilacinquanta", "trentasettemilacinquecento", "tre milioni settantacinquanta"], answer: 0, explain: "307 mila e 50 unità." },
      { type: "num", q: "Scrivi in cifre: due milioni quattrocentomila.", answer: 2400000, explain: "2.400.000." },
      { type: "mc", q: "In 6.152.380 la cifra 1 indica…", options: ["1 centinaio di migliaia (100.000)", "1 decina di migliaia", "1 milione"], answer: 0, explain: "6 . 1 5 2 . 3 8 0: l'1 è al posto delle hk." },
      { type: "num", q: "Componi: 4 hk + 2 uk + 9 da.", answer: 402090, explain: "400.000 + 2.000 + 90 = 402.090." },
      { type: "tf", q: "In italiano, per separare le classi di un grande numero si può usare la virgola.", answer: false, explain: "Si usa il punto o lo spazio; la virgola è per i decimali." },
      { type: "order", q: "Metti in ordine dal più piccolo al più grande.", items: ["9.999", "10.100", "10.010.000", "100.000.000"], explain: "Prima conta le cifre, poi confronta da sinistra." },
      { type: "mc", q: "Quale simbolo va tra 345.120 ___ 345.210?", options: [">", "<", "="], answer: 1, explain: "Le centinaia: 1 < 2, quindi 345.120 < 345.210." },
      { type: "num", q: "Quante decine ci sono in 5.000?", answer: 500, explain: "5.000 : 10 = 500 decine." },
      { type: "text", q: "Come si chiama in India il numero 100.000?", answer: ["lakh", "un lakh"], explain: "1 lakh = 100.000." }
    ],
    gen: [["placeValue", 3]]
  }
});
