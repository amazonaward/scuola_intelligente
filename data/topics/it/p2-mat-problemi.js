TOPIC('it', {
  id: "p2-mat-problemi",
  title: "I primi problemi",
  intro: "Un <b>problema</b> è una piccola storia con una <b>domanda</b> 🤔. Per rispondere bisogna fare come un detective 🕵️: leggere bene, trovare gli indizi (i <b>dati</b>) e scegliere l'<b>operazione</b> giusta.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Che cos'è un problema?",
      html: `<p>Leggi questa storia:</p>
<p>🐟 <i>Nell'acquario ci sono 5 pesci rossi. La mamma ne compra altri 3. Quanti pesci ci sono adesso?</i></p>
<p>Un problema ha sempre:</p>
<ul>
<li>una <b>storia</b> (il testo);</li>
<li>dei <b>dati</b>: i numeri che ci servono (5 e 3);</li>
<li>una <b>domanda</b>: che cosa dobbiamo trovare (quanti pesci?).</li>
</ul>`
    },
    {
      type: "text",
      title: "I 4 passi del detective 🕵️",
      html: `<ol>
<li>📖 <b>Leggo</b> il testo con calma, anche due volte. Sottolineo la <b>domanda</b>.</li>
<li>🔍 <b>Cerco i dati</b>: cerchio i numeri che servono.</li>
<li>➕ <b>Scelgo l'operazione</b>: la quantità aumenta, diminuisce, si ripete o si divide?</li>
<li>✍️ <b>Calcolo e rispondo</b> con una frase completa. Poi controllo: la risposta ha senso?</li>
</ol>
<p>Pesci: 5 + 3 = 8. <b>Risposta:</b> nell'acquario ci sono 8 pesci. ✅</p>`
    },
    {
      type: "svg",
      title: "Il problema dei pesci, passo per passo",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<rect x="15" y="20" width="130" height="120" rx="14" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<rect x="160" y="20" width="130" height="120" rx="14" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<rect x="305" y="20" width="130" height="120" rx="14" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<rect x="450" y="20" width="135" height="120" rx="14" fill="#fbcfe8" stroke="#be185d" stroke-width="3"/>
<text x="80" y="65" font-size="34" text-anchor="middle">📖</text>
<text x="80" y="110" font-size="18" text-anchor="middle" font-weight="bold" fill="#78350f">1. Leggo</text>
<text x="225" y="65" font-size="34" text-anchor="middle">🔍</text>
<text x="225" y="110" font-size="18" text-anchor="middle" font-weight="bold" fill="#14532d">2. Dati</text>
<text x="370" y="65" font-size="34" text-anchor="middle">➕</text>
<text x="370" y="110" font-size="18" text-anchor="middle" font-weight="bold" fill="#1e3a8a">3. Operazione</text>
<text x="517" y="65" font-size="34" text-anchor="middle">✍️</text>
<text x="517" y="110" font-size="18" text-anchor="middle" font-weight="bold" fill="#831843">4. Rispondo</text>
<rect x="40" y="170" width="520" height="110" rx="16" fill="#e0f2fe" stroke="#0369a1" stroke-width="3"/>
<text x="90" y="225" font-size="36">🐟🐟🐟🐟🐟</text>
<text x="300" y="225" font-size="36" font-weight="bold" fill="#0369a1">+</text>
<text x="330" y="225" font-size="36">🐠🐠🐠</text>
<text x="300" y="268" font-size="24" text-anchor="middle" font-weight="bold" fill="#0c4a6e">5 + 3 = 8 pesci</text>
</svg>`,
      caption: "I quattro passi: leggo, trovo i dati, scelgo l'operazione, rispondo con una frase."
    },
    {
      type: "remember",
      title: "Come scelgo l'operazione?",
      html: `<ul>
<li>➕ <b>Addizione</b>: le cose si <b>aggiungono</b>, si mettono insieme (arrivano, compra, regala a me, in tutto).</li>
<li>➖ <b>Sottrazione</b>: le cose si <b>tolgono</b> o si confrontano (mangia, perde, regala ad altri, quanti mancano, quanti in più).</li>
<li>✖️ <b>Moltiplicazione</b>: lo stesso numero si <b>ripete</b> (ogni, ciascuno ha…, 4 scatole da 6).</li>
<li>➗ <b>Divisione</b>: si fanno <b>parti uguali</b> (distribuisce, a testa, gruppi da…).</li>
</ul>
<p>⚠️ Attenzione: le parole aiutano, ma bisogna <b>capire la storia</b>! Immagina la scena nella tua testa.</p>`
    },
    {
      type: "example",
      title: "Esempio: le figurine perse",
      html: `<p><i>Giulia ha 15 figurine. Ne perde 4 in cortile. Quante figurine le restano?</i></p>
<ul>
<li>Dati: 15 figurine, ne perde 4.</li>
<li>Domanda: quante le restano?</li>
<li>Le figurine <b>diminuiscono</b> → sottrazione.</li>
<li>15 − 4 = 11.</li>
</ul>
<p><b>Risposta:</b> a Giulia restano 11 figurine.</p>`
    },
    {
      type: "example",
      title: "Esempio: le ruote delle biciclette 🚲",
      html: `<p><i>Nel cortile ci sono 4 biciclette. Ogni bicicletta ha 2 ruote. Quante ruote ci sono in tutto?</i></p>
<ul>
<li>Dati: 4 biciclette, 2 ruote ciascuna.</li>
<li>Il numero 2 si <b>ripete</b> 4 volte → moltiplicazione.</li>
<li>4 × 2 = 8 (oppure 2 + 2 + 2 + 2 = 8).</li>
</ul>
<p><b>Risposta:</b> ci sono 8 ruote.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: quale operazione?",
      questions: [
        { type: "mc", q: "Marco ha 9 biglie, ne vince altre 5. Quante ne ha ora? Quale operazione?", options: ["Addizione", "Sottrazione", "Divisione"], answer: 0, explain: "Le biglie aumentano: 9 + 5 = 14." },
        { type: "mc", q: "Ci sono 12 fette di torta. Ne mangiamo 5. Quante restano? Quale operazione?", options: ["Addizione", "Sottrazione", "Moltiplicazione"], answer: 1, explain: "Le fette diminuiscono: 12 − 5 = 7." },
        { type: "num", q: "3 vasi con 5 fiori ciascuno. Quanti fiori in tutto?", answer: 15, explain: "5 si ripete 3 volte: 3 × 5 = 15." }
      ]
    },
    {
      type: "widget",
      title: "Abbina la storia all'operazione",
      widget: "match",
      options: {
        pairs: [
          ["Ho 8 🍓 e ne mangio 3", "8 − 3 = 5"],
          ["Ho 8 🍓 e me ne regalano 3", "8 + 3 = 11"],
          ["4 cestini con 3 🍓 ciascuno", "4 × 3 = 12"],
          ["12 🍓 divise tra 3 amici", "12 : 3 = 4"],
          ["Ho 5 🍓, ne voglio 8: quante mancano?", "8 − 5 = 3"]
        ]
      },
      caption: "Leggi bene la storia: che cosa succede alle fragole?"
    },
    {
      type: "widget",
      title: "Problemi da smistare",
      widget: "classify",
      options: {
        groups: ["➕ Addizione", "➖ Sottrazione"],
        items: [
          ["Arrivano altri 4 bambini", 0],
          ["Il palloncino scoppia: ne restano…", 1],
          ["Quanti in tutto?", 0],
          ["Quanti ne mancano per arrivare a 20?", 1],
          ["La nonna mi regala 2 euro", 0],
          ["Spendo 3 euro al mercato", 1],
          ["Quanti anni in più ha il fratello?", 1],
          ["Metto insieme le mie e le tue figurine", 0]
        ]
      },
      caption: "Le cose aumentano o diminuiscono? Attenzione: «quanti mancano» e «quanti in più» sono sottrazioni!"
    },
    {
      type: "text",
      title: "Le trappole dei problemi",
      html: `<ul>
<li>🪤 <b>Dati inutili</b>: «Anna ha 7 anni e 6 matite. Ne regala 2. Quante matite ha?» L'età non serve! 6 − 2 = 4.</li>
<li>🪤 <b>Dati nascosti</b>: «Compro <b>una dozzina</b> di uova» → una dozzina = 12. «Una settimana» = 7 giorni. «Un paio» = 2.</li>
<li>🪤 <b>Parole che ingannano</b>: «Luca ha 10 euro, cioè 3 <b>in più</b> di Sara. Quanti euro ha Sara?» Qui c'è «in più» ma si fa 10 − 3 = 7!</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il problema del lupo, della capra e del cavolo",
      html: `<p>Più di <b>1200 anni fa</b> il maestro <b>Alcuino di York</b>, che insegnava alla corte dell'imperatore <b>Carlo Magno</b>, scrisse un libro di problemi per far ragionare i ragazzi.</p>
<p>Il più famoso: un contadino deve portare al di là del fiume un 🐺 lupo, una 🐐 capra e un 🥬 cavolo, ma la barca porta solo lui e una cosa alla volta. Se lascia soli lupo e capra, il lupo mangia la capra; se lascia soli capra e cavolo… addio cavolo! Come fa? (Aiutino: a un certo punto la capra torna indietro!)</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Problemi di 3500 anni fa",
      html: `<p>In Egitto è stato trovato un rotolo di papiro, il <b>papiro di Rhind</b>, scritto dallo scriba <b>Ahmes</b> circa <b>3550 anni fa</b>. Contiene 84 problemi: come dividere il pane tra gli operai, quanto grano serve, quanto è grande un campo…</p>
<p>Anche gli antichi Egizi a scuola facevano… problemi! 📜</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per risolvere i problemi",
      intro: "Se il testo ti confonde, prova a «vederlo» in un altro modo.",
      tabs: [
        {
          label: "🇸🇬 Le barre di Singapore",
          html: `<p>A <b>Singapore</b> i bambini disegnano i problemi con delle <b>barre</b> (il «bar model»). Una barra lunga = tutto; i pezzi = le parti.</p>
<p><i>Sara ha 7 euro, Luca ne ha 3 più di Sara. Quanti euro ha Luca?</i> Disegno la barra di Sara (7) e quella di Luca, più lunga di un pezzetto da 3: 7 + 3 = <b>10</b>.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fefce8"/>
<text x="20" y="72" font-size="20" font-weight="bold" fill="#be185d">Sara</text>
<rect x="100" y="45" width="280" height="40" fill="#f9a8d4" stroke="#9d174d" stroke-width="3"/>
<text x="240" y="73" font-size="22" text-anchor="middle" font-weight="bold" fill="#831843">7</text>
<text x="20" y="152" font-size="20" font-weight="bold" fill="#1d4ed8">Luca</text>
<rect x="100" y="125" width="280" height="40" fill="#93c5fd" stroke="#1e3a8a" stroke-width="3"/>
<rect x="380" y="125" width="120" height="40" fill="#fde047" stroke="#a16207" stroke-width="3"/>
<text x="240" y="153" font-size="22" text-anchor="middle" font-weight="bold" fill="#1e3a8a">7</text>
<text x="440" y="153" font-size="22" text-anchor="middle" font-weight="bold" fill="#713f12">+3</text>
<path d="M100 185 L100 200 L500 200 L500 185" stroke="#334155" stroke-width="3" fill="none"/>
<text x="300" y="218" font-size="18" text-anchor="middle" fill="#0f172a">Luca: 7 + 3 = 10</text>
</svg>`
        },
        {
          label: "🎭 Recita la storia",
          html: `<p>Prendi oggetti veri (tappi, mattoncini, pastelli) e <b>recita</b> il problema come un piccolo teatro.</p>
<p>«Ci sono 5 pesci» → metti 5 tappi. «Ne arrivano 3» → aggiungine 3. Conta: 8! Quando vedi le cose con gli occhi, l'operazione la scopri da solo.</p>`,
          widget: "counter",
          options: { emoji: "🐟", max: 20 }
        },
        {
          label: "🐸 Sulla retta dei numeri",
          html: `<p>Molti problemi sono un <b>viaggio</b> sulla retta: si va avanti (addizione) o indietro (sottrazione).</p>
<p><i>Il termometro segna 12 gradi, poi la temperatura scende di 5.</i> Parto da 12 e faccio 5 passi indietro: arrivo a <b>7</b>.</p>`,
          widget: "numberLine",
          options: { min: 0, max: 20, step: 1, marks: [7, 12] }
        },
        {
          label: "🧊 Cubetti 3D",
          html: `<p>Problema: <i>3 scaffali, 5 libri su ogni scaffale.</i> Costruiscilo con i cubetti: 3 righe da 5. Contali: <b>15</b>! Cambia i numeri per inventare nuovi problemi.</p>`,
          scene: "blocks",
          options: { mode: "array", a: 3, b: 5 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dei problemi: tocca i nodi e scopri il perché",
      nodes: [
        { id: "testo", label: "Il testo (la storia)", x: 50, y: 8, color: "#a855f7", html: "Il racconto di una situazione con dei numeri.", why: "I problemi nascono dalla vita vera: dividere il raccolto, contare il gregge, fare la spesa. Già gli scribi egizi e babilonesi li scrivevano per insegnare il mestiere ai giovani." },
        { id: "domanda", label: "La domanda", x: 20, y: 30, color: "#ef4444", html: "Che cosa devo trovare.", why: "Senza la domanda non sai dove andare: per questo la prima cosa da fare è sottolinearla. Il matematico <b>George Pólya</b> nel 1945 scrisse che il primo passo è «capire il problema»: che cosa si chiede?" },
        { id: "dati", label: "I dati", x: 80, y: 30, color: "#f59e0b", html: "I numeri e le informazioni che servono.", why: "«Dato» vuol dire «ciò che ci viene dato». Alcuni dati sono nascosti nelle parole (una dozzina = 12, un paio = 2) e altri sono inutili: bisogna sceglierli." },
        { id: "immagine", label: "Immagino / disegno", x: 50, y: 45, color: "#0ea5e9", html: "Vedo la scena nella testa o la disegno.", why: "Il cervello capisce meglio le immagini delle parole. Per questo a Singapore i bambini disegnano barre e i maestri usano oggetti veri." },
        { id: "operazione", label: "L'operazione", x: 50, y: 66, color: "#16a34a", html: "Addizione, sottrazione, moltiplicazione o divisione.", why: "Ogni operazione racconta un'azione: mettere insieme, togliere, ripetere, dividere in parti uguali. Scegliere l'operazione vuol dire capire che cosa succede nella storia." },
        { id: "calcolo", label: "Il calcolo", x: 20, y: 85, color: "#64748b", html: "Faccio l'operazione con attenzione.", why: "Si può fare a mente, in colonna, con le dita o con l'abaco: l'importante è che sia giusto. Poi si può controllare con l'operazione inversa." },
        { id: "risposta", label: "La risposta", x: 80, y: 85, color: "#ec4899", html: "Una frase completa, con l'unità (pesci, euro, metri…).", why: "Il numero da solo non basta: «8» cosa? «8 pesci»! L'ultimo passo di Pólya è <b>controllare</b>: la risposta ha senso? Se trovi 100 pesci in un acquario piccolo… c'è un errore!" }
      ],
      edges: [
        ["testo", "domanda", "contiene"],
        ["testo", "dati", "contiene"],
        ["domanda", "immagine", "aiuta a"],
        ["dati", "immagine", "aiutano a"],
        ["immagine", "operazione", "suggerisce"],
        ["operazione", "calcolo", "porta al"],
        ["calcolo", "risposta", "dà la"],
        ["risposta", "domanda", "risponde alla"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: da detective",
      questions: [
        { type: "mc", q: "«Anna ha 8 anni e 10 caramelle. Ne mangia 3.» Quale dato NON serve per sapere quante caramelle restano?", options: ["8 anni", "10 caramelle", "ne mangia 3"], answer: 0, explain: "L'età di Anna non c'entra con le caramelle." },
        { type: "num", q: "Compro una dozzina di uova e ne rompo 2. Quante uova intere ho?", answer: 10, explain: "Una dozzina = 12. 12 − 2 = 10." },
        { type: "tf", q: "Nella risposta basta scrivere solo il numero.", answer: false, explain: "Meglio una frase completa: «Ho 10 uova intere»." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Un problema ha <b>testo</b>, <b>dati</b> e <b>domanda</b>.</li>
<li>4 passi: <b>leggo</b> → <b>trovo i dati</b> → <b>scelgo l'operazione</b> → <b>calcolo e rispondo</b>.</li>
<li>Immagina o disegna la scena!</li>
<li>Alla fine <b>controlla</b>: la risposta ha senso?</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Problema", d: "Una storia con dei numeri e una domanda a cui rispondere." },
    { t: "Dati", d: "Le informazioni (spesso numeri) che servono per rispondere." },
    { t: "Domanda", d: "Ciò che il problema chiede di trovare." },
    { t: "Dato inutile", d: "Un'informazione che c'è nel testo ma non serve per rispondere." },
    { t: "Dato nascosto", d: "Un numero scritto con una parola: paio = 2, dozzina = 12, settimana = 7 giorni." },
    { t: "Risposta", d: "Frase completa che risponde alla domanda, con l'unità giusta." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Sul ramo ci sono 7 uccellini 🐦. Ne arrivano 6. Quanti sono ora?", answer: 13, explain: "Gli uccellini aumentano: 7 + 6 = 13." },
      { type: "num", q: "Ho 20 palloncini 🎈. Ne scoppiano 8. Quanti me ne restano?", answer: 12, explain: "Diminuiscono: 20 − 8 = 12." },
      { type: "num", q: "5 scatole con 2 pennarelli ciascuna. Quanti pennarelli in tutto?", answer: 10, explain: "Il 2 si ripete 5 volte: 5 × 2 = 10." },
      { type: "num", q: "La maestra divide 18 quaderni tra 3 gruppi in parti uguali. Quanti quaderni per gruppo?", answer: 6, explain: "Parti uguali: 18 : 3 = 6." },
      { type: "num", q: "Leo ha 9 anni, sua sorella ne ha 4. Quanti anni in più ha Leo?", answer: 5, explain: "Confronto: 9 − 4 = 5." },
      { type: "mc", q: "Quale parola fa pensare a una moltiplicazione?", options: ["perde", "ciascuno", "restano"], answer: 1, explain: "«Ciascuno» indica che un numero si ripete per ogni elemento." },
      { type: "tf", q: "In un problema tutti i numeri del testo servono sempre.", answer: false, explain: "A volte ci sono dati inutili: bisogna scegliere quelli giusti." },
      { type: "text", q: "Quanti oggetti ci sono in «un paio»?", answer: ["2", "due"], explain: "Un paio = 2." },
      { type: "order", q: "Metti in ordine i passi per risolvere un problema.", items: ["Leggo e sottolineo la domanda", "Cerco i dati", "Scelgo l'operazione", "Calcolo e scrivo la risposta"], explain: "Prima capisco, poi cerco i dati, scelgo l'operazione e infine rispondo." },
      { type: "mc", q: "Ho 4 euro. Un gelato costa 6 euro. Quanti euro mi mancano?", options: ["10", "2", "24"], answer: 1, explain: "Quanto manca da 4 a 6: 6 − 4 = 2." },
      { type: "num", q: "In una settimana vado in piscina ogni giorno. Quante volte ci vado?", answer: 7, explain: "Dato nascosto: una settimana ha 7 giorni." }
    ],
    gen: [["add100", 2], ["sub100", 2]]
  }
});
