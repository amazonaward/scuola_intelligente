TOPIC('it', {
  id: "p1-mat-confronto",
  title: "Maggiore, minore, uguale",
  intro: "Chi ha più caramelle? 🍬 Chi è arrivato prima? Per saperlo dobbiamo <b>confrontare</b>. Impariamo a dire se un numero è <b>maggiore</b>, <b>minore</b> o <b>uguale</b> a un altro, con i segni <b>&gt;</b>, <b>&lt;</b> e <b>=</b>.",
  minutes: 20,
  sections: [
    {
      type: "text",
      title: "Di più, di meno, tanti quanti",
      html: `<p>Guarda i due piatti:</p>
<p style="font-size:1.4em">🍓🍓🍓🍓🍓 &nbsp;&nbsp;|&nbsp;&nbsp; 🍓🍓🍓</p>
<p>Nel primo piatto ci sono <b>5</b> fragole, nel secondo <b>3</b>.</p>
<ul>
<li>5 è <b>maggiore</b> di 3: ci sono <b>di più</b> fragole 😋</li>
<li>3 è <b>minore</b> di 5: ci sono <b>di meno</b> fragole</li>
</ul>
<p>Se in due piatti ci sono 4 fragole e 4 fragole, sono <b>uguali</b>: <b>tanti quanti</b>.</p>`
    },
    {
      type: "text",
      title: "Il trucco delle coppie",
      html: `<p>Non sai contare bene? Nessun problema! Prendi un oggetto di un gruppo e uno dell'altro gruppo e <b>mettili in coppia</b> 🤝.</p>
<p>Il gruppo dove <b>avanza</b> qualcosa è quello che ha <b>di più</b>.</p>
<p>🐰🐰🐰🐰 e 🥕🥕🥕: ogni coniglio prende una carota… un coniglio resta senza! Quindi i conigli sono <b>di più</b> delle carote: 4 &gt; 3.</p>`
    },
    {
      type: "svg",
      title: "Conigli e carote in coppia",
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#f0fdf4"/>
<g font-size="48" text-anchor="middle">
<text x="100" y="90">🐰</text><text x="220" y="90">🐰</text><text x="340" y="90">🐰</text><text x="460" y="90">🐰</text>
<text x="100" y="230">🥕</text><text x="220" y="230">🥕</text><text x="340" y="230">🥕</text>
</g>
<g stroke="#16a34a" stroke-width="4">
<line x1="100" y1="105" x2="100" y2="185"/><line x1="220" y1="105" x2="220" y2="185"/><line x1="340" y1="105" x2="340" y2="185"/>
</g>
<circle cx="460" cy="70" r="45" fill="none" stroke="#dc2626" stroke-width="4" stroke-dasharray="8 6"/>
<text x="460" y="175" font-size="20" fill="#dc2626" text-anchor="middle">avanza!</text>
<text x="300" y="270" font-size="24" font-weight="bold" fill="#14532d" text-anchor="middle">4 conigli &gt; 3 carote</text>
</svg>`,
      caption: "Unisci a coppie: chi resta da solo appartiene al gruppo più numeroso."
    },
    {
      type: "text",
      title: "I segni > < =",
      html: `<p>In matematica scriviamo il confronto con <b>tre segni</b>:</p>
<table><tr><th>Segno</th><th>Si legge</th><th>Esempio</th></tr>
<tr><td style="font-size:1.5em"><b>&gt;</b></td><td>è <b>maggiore</b> di</td><td>7 &gt; 2</td></tr>
<tr><td style="font-size:1.5em"><b>&lt;</b></td><td>è <b>minore</b> di</td><td>2 &lt; 7</td></tr>
<tr><td style="font-size:1.5em"><b>=</b></td><td>è <b>uguale</b> a</td><td>5 = 5</td></tr></table>
<p>Trucco: la parte <b>aperta</b> del segno guarda sempre il numero <b>più grande</b>; la <b>punta</b> indica il numero <b>più piccolo</b>.</p>`
    },
    {
      type: "svg",
      title: "Il coccodrillo goloso",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfeff"/>
<text x="90" y="170" font-size="90" font-weight="bold" fill="#1d4ed8" text-anchor="middle">9</text>
<polygon points="200,90 360,150 200,210" fill="#86efac" stroke="#15803d" stroke-width="5"/>
<polygon points="200,90 360,150 200,130" fill="#4ade80"/>
<circle cx="250" cy="105" r="10" fill="#ffffff" stroke="#14532d" stroke-width="3"/>
<circle cx="252" cy="105" r="4" fill="#14532d"/>
<g fill="#ffffff" stroke="#15803d" stroke-width="2">
<polygon points="215,140 225,128 235,140"/><polygon points="245,145 255,133 265,145"/><polygon points="215,160 225,172 235,160"/><polygon points="245,155 255,167 265,155"/>
</g>
<text x="470" y="170" font-size="90" font-weight="bold" fill="#b91c1c" text-anchor="middle">4</text>
<text x="300" y="50" font-size="26" font-weight="bold" fill="#0f172a" text-anchor="middle">9 &gt; 4 · nove è maggiore di quattro</text>
<text x="300" y="270" font-size="20" fill="#0f172a" text-anchor="middle">Il coccodrillo apre la bocca verso il numero più grande! 🐊</text>
</svg>`,
      caption: "La bocca del coccodrillo è sempre aperta verso il numero più grande, perché è goloso!"
    },
    {
      type: "quiz",
      title: "Mini-quiz: dove guarda la bocca?",
      questions: [
        { type: "mc", q: "8 … 3: quale segno ci va?", options: [">", "<", "="], answer: 0, explain: "8 è maggiore di 3: 8 > 3." },
        { type: "mc", q: "6 … 6: quale segno ci va?", options: [">", "<", "="], answer: 2, explain: "Sono uguali: 6 = 6." },
        { type: "tf", q: "2 < 9 si legge \"due è minore di nove\".", answer: true, explain: "Il segno < si legge \"è minore di\"." }
      ]
    },
    {
      type: "text",
      title: "Confrontare con la retta dei numeri",
      html: `<p>Sulla <b>retta dei numeri</b> i numeri sono in fila dal più piccolo al più grande ➡️.</p>
<p>Più un numero sta <b>a destra</b>, più è <b>grande</b>. Più sta <b>a sinistra</b>, più è <b>piccolo</b>.</p>
<p>12 sta a destra di 8, quindi <b>12 &gt; 8</b>.</p>
<p>Con i numeri oltre il 10 guarda prima le <b>decine</b>: 15 ha 1 decina, 9 non ne ha nessuna, quindi <b>15 &gt; 9</b>. Se le decine sono uguali, guarda le <b>unità</b>: 17 &gt; 13 perché 7 &gt; 3.</p>`
    },
    {
      type: "widget",
      title: "La retta dei numeri",
      widget: "numberLine",
      options: { min: 0, max: 20, step: 1, marks: [8, 12] },
      caption: "Il 12 è più a destra dell'8: è maggiore. Prova con altri numeri!"
    },
    {
      type: "example",
      title: "Esempio: le figurine",
      html: `<p>Anna ha <b>14</b> figurine ⚽, Leo ne ha <b>11</b>.</p>
<ul>
<li>14 e 11 hanno <b>1 decina</b> tutti e due → guardo le unità: 4 e 1.</li>
<li>4 &gt; 1, quindi <b>14 &gt; 11</b>: Anna ha <b>più</b> figurine.</li>
<li>Possiamo anche dire <b>11 &lt; 14</b>: Leo ne ha <b>meno</b>.</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio: la gara di corsa",
      html: `<p>Nella gara 🏃 vince chi fa <b>meno</b> secondi!</p>
<ul><li>Giulia: <b>12</b> secondi</li><li>Omar: <b>15</b> secondi</li></ul>
<p>12 &lt; 15, quindi Giulia è più <b>veloce</b> e vince 🥇. Attenzione: qui il numero <b>minore</b> è il migliore!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Il segno <b>=</b> l'ha inventato un medico e matematico gallese, <b>Robert Recorde</b>, nel <b>1557</b>. Scelse due lineette parallele perché, disse, "nessuna cosa può essere più uguale" di due righe uguali una accanto all'altra!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>I segni <b>&gt;</b> e <b>&lt;</b> sono un po' più giovani: comparvero in un libro dell'inglese <b>Thomas Harriot</b>, pubblicato nel <b>1631</b>, dopo la sua morte. Prima si scriveva tutto a parole: "è maggiore di"!</p>
<p>E anche gli animali sanno confrontare: le api e i pulcini 🐣 riconoscono il gruppo con più oggetti, se la differenza è abbastanza grande.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>&gt;</b> maggiore di · <b>&lt;</b> minore di · <b>=</b> uguale a.</li>
<li>La bocca del segno è aperta verso il <b>numero più grande</b>.</li>
<li>Sulla retta: più a <b>destra</b> = più <b>grande</b>.</li>
<li>Prima confronta le <b>decine</b>, poi le <b>unità</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per confrontare",
      intro: "Se il coccodrillo non ti convince, prova la bilancia, i cubetti 3D, il contatore o il segno a forma di freccia!",
      tabs: [
        {
          label: "⚖️ La bilancia",
          html: `<p>Immagina una <b>bilancia a due piatti</b>. Metti le palline: il piatto con <b>più palline</b> va <b>giù</b>.</p>
<ul>
<li>Se scende il piatto di sinistra → sinistra <b>&gt;</b> destra.</li>
<li>Se scende il piatto di destra → sinistra <b>&lt;</b> destra.</li>
<li>Se la bilancia è <b>dritta</b> → <b>=</b>, sono uguali!</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fff7ed"/>
<polygon points="300,90 280,230 320,230" fill="#78716c"/>
<rect x="240" y="228" width="120" height="14" fill="#57534e"/>
<line x1="120" y1="130" x2="480" y2="70" stroke="#44403c" stroke-width="8"/>
<line x1="120" y1="130" x2="120" y2="170" stroke="#44403c" stroke-width="3"/>
<line x1="480" y1="70" x2="480" y2="110" stroke="#44403c" stroke-width="3"/>
<path d="M60,170 L180,170 L160,195 L80,195 Z" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
<path d="M420,110 L540,110 L520,135 L440,135 Z" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
<g fill="#2563eb"><circle cx="85" cy="158" r="10"/><circle cx="108" cy="158" r="10"/><circle cx="131" cy="158" r="10"/><circle cx="154" cy="158" r="10"/><circle cx="97" cy="140" r="10"/><circle cx="120" cy="140" r="10"/><circle cx="143" cy="140" r="10"/></g>
<g fill="#dc2626"><circle cx="465" cy="98" r="10"/><circle cx="495" cy="98" r="10"/></g>
<text x="120" y="230" font-size="26" font-weight="bold" fill="#1d4ed8" text-anchor="middle">7</text>
<text x="480" y="170" font-size="26" font-weight="bold" fill="#b91c1c" text-anchor="middle">2</text>
<text x="300" y="40" font-size="26" font-weight="bold" fill="#1f2937" text-anchor="middle">7 &gt; 2</text>
</svg>`
        },
        {
          label: "🧊 Torri di cubetti 3D",
          html: `<p>Costruisci il numero con i cubetti: <b>14</b> = una barretta da 10 e 4 cubetti sciolti.</p>
<p>Cambia il numero con il cursore e confronta: <b>chi ha più barrette da 10 vince</b>; se le barrette sono uguali, vince chi ha più cubetti sciolti.</p>`,
          scene: "blocks",
          options: { mode: "base10", value: 14 }
        },
        {
          label: "🍎 Conta e confronta",
          html: `<p>Metti nel cestino tante mele quante dice il primo numero, contale; poi fallo con il secondo numero. Quale cestino era più pieno?</p>
<p>Prova con <b>9</b> e <b>13</b>: con 13 mele il cestino è più pieno, quindi <b>13 &gt; 9</b>.</p>`,
          widget: "counter",
          options: { emoji: "🍎", max: 20 }
        },
        {
          label: "➡️ La freccia che indica il piccolo",
          html: `<p>In molti Paesi (per esempio in Inghilterra e negli Stati Uniti) i bambini non usano il coccodrillo: imparano che il segno è una <b>freccia</b> e che la <b>punta</b> indica il numero <b>più piccolo</b>.</p>
<p style="font-size:1.3em">3 <b>&lt;</b> 8 → la punta indica il 3, il più piccolo.</p>
<p>Altro trucco: il segno <b>&lt;</b> somiglia a una <b>L</b> storta, come la "L" di "Less" (= <i>meno</i> in inglese). <b>3 &lt; 8</b>: "3 is less than 8".</p>`
        },
        {
          "label": "🇸🇬 Le barre di Singapore",
          "html": "<p>A <b>Singapore</b> i bambini disegnano i numeri come <b>barre di quadretti</b>.</p><ol><li>Disegna 8 quadretti in fila. È la barra dell'<b>8</b>.</li><li>Sotto, disegna 5 quadretti. È la barra del <b>5</b>.</li><li>Le due barre devono <b>partire dalla stessa linea</b>.</li><li>Guarda: quale barra è <b>più lunga</b>? Quella dell'8!</li></ol><p>Quindi <b>8 &gt; 5</b>. Il pezzo che manca alla barra corta (3 quadretti) ti dice anche <b>di quanto</b> è più grande l'8: di 3!</p><p>🎯 Prova con 6 e 9. Poi con 7 e 7: le barre sono lunghe uguali, quindi 7 = 7.</p>",
          "svg": "<svg viewBox=\"0 0 600 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"200\" fill=\"#f8fafc\"/><text x=\"20\" y=\"62\" font-size=\"30\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">8</text><rect x=\"60\" y=\"30\" width=\"44\" height=\"44\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><rect x=\"104\" y=\"30\" width=\"44\" height=\"44\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><rect x=\"148\" y=\"30\" width=\"44\" height=\"44\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><rect x=\"192\" y=\"30\" width=\"44\" height=\"44\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><rect x=\"236\" y=\"30\" width=\"44\" height=\"44\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><rect x=\"280\" y=\"30\" width=\"44\" height=\"44\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><rect x=\"324\" y=\"30\" width=\"44\" height=\"44\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><rect x=\"368\" y=\"30\" width=\"44\" height=\"44\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><text x=\"20\" y=\"132\" font-size=\"30\" font-family=\"sans-serif\" fill=\"#be185d\" font-weight=\"bold\">5</text><rect x=\"60\" y=\"100\" width=\"44\" height=\"44\" fill=\"#f9a8d4\" stroke=\"#9d174d\" stroke-width=\"2\"/><rect x=\"104\" y=\"100\" width=\"44\" height=\"44\" fill=\"#f9a8d4\" stroke=\"#9d174d\" stroke-width=\"2\"/><rect x=\"148\" y=\"100\" width=\"44\" height=\"44\" fill=\"#f9a8d4\" stroke=\"#9d174d\" stroke-width=\"2\"/><rect x=\"192\" y=\"100\" width=\"44\" height=\"44\" fill=\"#f9a8d4\" stroke=\"#9d174d\" stroke-width=\"2\"/><rect x=\"236\" y=\"100\" width=\"44\" height=\"44\" fill=\"#f9a8d4\" stroke=\"#9d174d\" stroke-width=\"2\"/><rect x=\"280\" y=\"100\" width=\"44\" height=\"44\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><rect x=\"324\" y=\"100\" width=\"44\" height=\"44\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><rect x=\"368\" y=\"100\" width=\"44\" height=\"44\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><line x1=\"60\" y1=\"20\" x2=\"60\" y2=\"160\" stroke=\"#16a34a\" stroke-width=\"4\"/><text x=\"70\" y=\"185\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#16a34a\" font-weight=\"bold\">partono dalla stessa linea!</text><text x=\"296\" y=\"170\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#475569\" font-weight=\"bold\">3 in più</text><text x=\"470\" y=\"100\" font-size=\"36\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">8 > 5</text></svg>"
        },
        {
          "label": "🇩🇪 Il campo del 20 (Germania)",
          "html": "<p>In <b>Germania</b>, in prima, i bambini usano lo <b>Zwanzigerfeld</b>, il <b>«campo del 20»</b>: due file da 10 pallini. Ogni fila è divisa in <b>due gruppi da 5</b>, così si vede subito quanti sono senza contarli uno per uno.</p><ol><li>Per fare il <b>13</b> colora tutta la prima fila (10) e poi 3 pallini nella seconda.</li><li>Per fare il <b>9</b> colora 5 pallini e poi 4: la prima fila <b>non è piena</b>.</li><li>Chi riempie la prima fila ha almeno 10: è più grande!</li></ol><p>Quindi <b>13 &gt; 9</b>. Se tutti e due riempiono la prima fila (per esempio 12 e 15), guarda la seconda fila: vince chi ha più pallini.</p><p>🎯 Disegna il tuo campo del 20 su un foglio e prova con 11 e 18.</p>",
          "svg": "<svg viewBox=\"0 0 600 220\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"220\" fill=\"#f8fafc\"/><text x=\"20\" y=\"62\" font-size=\"28\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">13</text><rect x=\"70\" y=\"25\" width=\"278\" height=\"62\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"2\"/><circle cx=\"86\" cy=\"42\" r=\"10\" fill=\"#ef4444\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"112\" cy=\"42\" r=\"10\" fill=\"#ef4444\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"138\" cy=\"42\" r=\"10\" fill=\"#ef4444\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"164\" cy=\"42\" r=\"10\" fill=\"#ef4444\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"190\" cy=\"42\" r=\"10\" fill=\"#ef4444\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"224\" cy=\"42\" r=\"10\" fill=\"#ef4444\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"250\" cy=\"42\" r=\"10\" fill=\"#ef4444\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"276\" cy=\"42\" r=\"10\" fill=\"#ef4444\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"302\" cy=\"42\" r=\"10\" fill=\"#ef4444\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"328\" cy=\"42\" r=\"10\" fill=\"#ef4444\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"86\" cy=\"70\" r=\"10\" fill=\"#ef4444\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"112\" cy=\"70\" r=\"10\" fill=\"#ef4444\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"138\" cy=\"70\" r=\"10\" fill=\"#ef4444\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"164\" cy=\"70\" r=\"10\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"190\" cy=\"70\" r=\"10\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"224\" cy=\"70\" r=\"10\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"250\" cy=\"70\" r=\"10\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"276\" cy=\"70\" r=\"10\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"302\" cy=\"70\" r=\"10\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"328\" cy=\"70\" r=\"10\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text x=\"20\" y=\"152\" font-size=\"28\" font-family=\"sans-serif\" fill=\"#2563eb\" font-weight=\"bold\">9</text><rect x=\"70\" y=\"115\" width=\"278\" height=\"62\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"2\"/><circle cx=\"86\" cy=\"132\" r=\"10\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"112\" cy=\"132\" r=\"10\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"138\" cy=\"132\" r=\"10\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"164\" cy=\"132\" r=\"10\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"190\" cy=\"132\" r=\"10\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"224\" cy=\"132\" r=\"10\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"250\" cy=\"132\" r=\"10\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"276\" cy=\"132\" r=\"10\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"302\" cy=\"132\" r=\"10\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"328\" cy=\"132\" r=\"10\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"86\" cy=\"160\" r=\"10\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"112\" cy=\"160\" r=\"10\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"138\" cy=\"160\" r=\"10\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"164\" cy=\"160\" r=\"10\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"190\" cy=\"160\" r=\"10\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"224\" cy=\"160\" r=\"10\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"250\" cy=\"160\" r=\"10\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"276\" cy=\"160\" r=\"10\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"302\" cy=\"160\" r=\"10\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"328\" cy=\"160\" r=\"10\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text x=\"370\" y=\"52\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">Fila piena = 10!</text><text x=\"370\" y=\"142\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#2563eb\" font-weight=\"bold\">La fila non è piena</text><text x=\"300\" y=\"205\" font-size=\"32\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">13 > 9</text></svg>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del confronto: tocca un nodo e scopri il perché",
      nodes: [
        { id: "quantita", label: "Quantità", x: 50, y: 8, color: "#2563eb", html: "Quanti oggetti ci sono in un gruppo.", why: "Confrontare le quantità è un bisogno antichissimo: chi ha più pecore, più pane, più frecce. Anche i bambini piccolissimi capiscono 'di più' prima di saper contare." },
        { id: "coppie", label: "Corrispondenza a coppie", x: 18, y: 32, color: "#16a34a", html: "Unisco un oggetto di un gruppo con uno dell'altro: chi avanza ha di più.", why: "È il metodo più antico: i pastori mettevano un sassolino per ogni pecora. Funziona anche senza conoscere i numeri!" },
        { id: "numero", label: "Numero", x: 82, y: 32, color: "#f59e0b", html: "Il nome della quantità: 5, 12, 20.", why: "Contando trasformiamo un gruppo in un numero: così confrontare diventa più facile, basta confrontare i numeri." },
        { id: "retta", label: "Retta dei numeri", x: 82, y: 60, color: "#0ea5e9", html: "I numeri in fila: a destra i più grandi.", why: "Ogni numero è il precedente + 1, quindi andando avanti i numeri crescono sempre." },
        { id: "decine", label: "Prima le decine", x: 55, y: 62, color: "#a855f7", html: "Con i numeri a due cifre si confrontano prima le decine, poi le unità.", why: "Una decina vale 10 unità: anche 1 decina sola (10) è più di 9 unità sciolte." },
        { id: "segni", label: "Segni > < =", x: 22, y: 64, color: "#dc2626", html: "Maggiore, minore, uguale.", why: "Il segno = fu inventato da Robert Recorde nel 1557; > e < comparvero nel 1631 in un libro di Thomas Harriot. Servono a scrivere in breve ciò che prima si scriveva a parole." },
        { id: "uguale", label: "Uguale", x: 22, y: 90, color: "#64748b", html: "Due quantità che si accoppiano senza che avanzi niente.", why: "Recorde scelse due righe parallele perché sono il simbolo perfetto di due cose identiche." },
        { id: "ordine", label: "Ordinare", x: 70, y: 90, color: "#14b8a6", html: "Mettere più numeri dal più piccolo al più grande (crescente) o al contrario (decrescente).", why: "Ordinare è confrontare tante volte di seguito, a coppie." }
      ],
      edges: [
        ["quantita", "coppie", "confronto con"],
        ["quantita", "numero", "conto e ottengo"],
        ["numero", "retta", "ha un posto sulla"],
        ["numero", "decine", "si confronta guardando"],
        ["coppie", "segni", "scrivo il risultato con"],
        ["segni", "uguale", "uno è"],
        ["retta", "ordine", "aiuta a"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: numeri più grandi",
      questions: [
        { type: "mc", q: "Qual è il numero maggiore?", options: ["19", "9", "16"], answer: 0, explain: "19 ha 1 decina e 9 unità: è il più grande." },
        { type: "mc", q: "13 … 18: quale segno ci va?", options: [">", "<", "="], answer: 1, explain: "Stesse decine; 3 < 8, quindi 13 < 18." },
        { type: "order", q: "Metti in ordine dal più piccolo al più grande.", items: ["2", "7", "11", "20"], explain: "2 < 7 < 11 < 20." }
      ]
    }
  ],
  glossary: [
    { t: "Confrontare", d: "Guardare due quantità o due numeri per capire quale è più grande, più piccolo o se sono uguali." },
    { t: "Maggiore (>)", d: "Più grande. 8 > 5 si legge 'otto è maggiore di cinque'." },
    { t: "Minore (<)", d: "Più piccolo. 5 < 8 si legge 'cinque è minore di otto'." },
    { t: "Uguale (=)", d: "Tanti quanti. 6 = 6." },
    { t: "Ordine crescente", d: "Dal più piccolo al più grande." },
    { t: "Ordine decrescente", d: "Dal più grande al più piccolo." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale gruppo ha di più?", options: ["⭐⭐⭐⭐", "⭐⭐⭐⭐⭐⭐", "⭐⭐"], answer: 1, explain: "6 stelle: è il gruppo più numeroso." },
      { type: "mc", q: "5 … 9", options: [">", "<", "="], answer: 1, explain: "5 è minore di 9." },
      { type: "mc", q: "17 … 12", options: [">", "<", "="], answer: 0, explain: "Stesse decine, 7 > 2: 17 > 12." },
      { type: "mc", q: "10 … 10", options: [">", "<", "="], answer: 2, explain: "Sono uguali." },
      { type: "tf", q: "15 > 9", answer: true, explain: "15 ha una decina, 9 no: 15 è maggiore." },
      { type: "tf", q: "11 < 8", answer: false, explain: "11 è maggiore di 8, quindi 11 > 8." },
      { type: "num", q: "Scrivi un numero che sta tra 13 e 15.", answer: 14, explain: "13 < 14 < 15." },
      { type: "text", q: "Come si legge il segno > ?", answer: ["maggiore", "è maggiore di", "maggiore di"], explain: "> si legge 'è maggiore di'." },
      { type: "order", q: "Metti in ordine dal più piccolo al più grande.", items: ["3", "9", "12", "18"], explain: "3 < 9 < 12 < 18." },
      { type: "order", q: "Metti in ordine dal più grande al più piccolo.", items: ["20", "15", "10", "5"], explain: "Ordine decrescente: 20 > 15 > 10 > 5." },
      { type: "num", q: "Luca ha 8 biglie, Sara ne ha 8. Quante ne servirebbero a Luca per averne una più di Sara?", answer: 1, explain: "Ora sono uguali (8 = 8); con 1 biglia in più Luca ne avrebbe 9 > 8." }
    ],
    gen: [["compare20", 3]]
  }
});
