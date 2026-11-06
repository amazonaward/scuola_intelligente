TOPIC('it', {
  id: `p5-tec-dati-binario`,
  title: `Dati e codice binario`,
  intro: `Un computer può mostrarti una foto, farti ascoltare una canzone, scrivere il tuo nome… eppure dentro di sé conosce solo <b>due simboli</b>: <b>0</b> e <b>1</b>. Come fa? Oggi scopriamo il <b>codice binario</b>, i <b>bit</b> e i <b>byte</b>, e impariamo a scrivere numeri, lettere e disegni come li "vede" un computer. 💻`,
  minutes: 35,
  sections: [
    {
      type: `text`, title: `1. Che cosa sono i dati?`,
      html: `<p>I <b>dati</b> sono informazioni: un numero, una parola, il colore di un punto in una foto, una nota musicale, la temperatura di oggi.</p>
<p>Il computer funziona con l'<b>elettricità</b>. Dentro ci sono miliardi di minuscoli interruttori, i <b>transistor</b>, che possono essere solo in due stati:</p>
<ul>
<li>💡 <b>acceso</b> (passa corrente) = <b>1</b></li>
<li>⚫ <b>spento</b> (non passa corrente) = <b>0</b></li>
</ul>
<p>Ogni 0 o 1 si chiama <b>bit</b> (da <i>BInary digiT</i>, "cifra binaria"). È l'informazione più piccola che esista: un sì o un no.</p>
<p>Con un bit solo si dice poco (sì/no, acceso/spento). Ma mettendo <b>tanti bit in fila</b> si può rappresentare <b>qualunque cosa</b>!</p>`
    },
    {
      type: `text`, title: `2. Quante combinazioni?`,
      html: `<p>Ogni bit in più <b>raddoppia</b> le combinazioni possibili:</p>
<table>
<tr><th>Bit</th><th>Combinazioni</th><th>Quante sono</th></tr>
<tr><td>1</td><td>0 · 1</td><td>2</td></tr>
<tr><td>2</td><td>00 · 01 · 10 · 11</td><td>4</td></tr>
<tr><td>3</td><td>000 · 001 · 010 · 011 · 100 · 101 · 110 · 111</td><td>8</td></tr>
<tr><td>4</td><td>…</td><td>16</td></tr>
<tr><td><b>8</b></td><td>…</td><td><b>256</b></td></tr>
</table>
<p>Un gruppo di <b>8 bit</b> si chiama <b>byte</b>. Con un byte si possono scrivere <b>256</b> valori diversi (da 0 a 255): abbastanza per tutte le lettere maiuscole e minuscole, le cifre e la punteggiatura!</p>`
    },
    {
      type: `text`, title: `3. Contare in binario`,
      html: `<p>Noi contiamo in <b>base 10</b>: usiamo 10 cifre (0–9) e ogni posizione vale 10 volte quella a destra (unità, decine, centinaia…).</p>
<p>Il computer conta in <b>base 2</b>: usa 2 cifre (0 e 1) e ogni posizione vale il <b>doppio</b> di quella a destra:</p>
<table>
<tr><th>128</th><th>64</th><th>32</th><th>16</th><th>8</th><th>4</th><th>2</th><th>1</th></tr>
</table>
<p><b>Dal binario al decimale</b>: somma i valori delle posizioni dove c'è un <b>1</b>.</p>
<p>Esempio: <b>1101</b> ➜ 8 + 4 + 0 + 1 = <b>13</b>.</p>
<p><b>Dal decimale al binario</b> (metodo delle divisioni per 2): dividi per 2 e scrivi il resto; continua finché arrivi a 0; poi leggi i resti <b>dal basso verso l'alto</b>.</p>
<p>Esempio: 13 : 2 = 6 resto <b>1</b> · 6 : 2 = 3 resto <b>0</b> · 3 : 2 = 1 resto <b>1</b> · 1 : 2 = 0 resto <b>1</b> ➜ leggo dal basso: <b>1101</b>. ✅</p>
<p>I primi numeri: 0 = 0 · 1 = 1 · 2 = 10 · 3 = 11 · 4 = 100 · 5 = 101 · 6 = 110 · 7 = 111 · 8 = 1000.</p>
<p>⚠️ In binario "10" <b>non</b> si legge "dieci" ma "uno-zero", e vale 2!</p>`
    },
    {
      type: `svg`, title: `Le lampadine binarie`,
      caption: `Ogni lampadina accesa vale il numero scritto sotto. Qui sono accese 8, 4 e 1: 8 + 4 + 1 = 13, cioè 1101.`,
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#0f172a"/>
<text x="300" y="34" font-size="20" text-anchor="middle" fill="#f8fafc" font-weight="bold">Il numero 13 in binario</text>
<g>
<circle cx="120" cy="105" r="45" fill="#facc15"/><rect x="105" y="148" width="30" height="20" fill="#94a3b8"/>
<text x="120" y="115" font-size="30" text-anchor="middle" fill="#713f12" font-weight="bold">1</text>
<text x="120" y="200" font-size="22" text-anchor="middle" fill="#facc15" font-weight="bold">8</text>
</g>
<g>
<circle cx="240" cy="105" r="45" fill="#facc15"/><rect x="225" y="148" width="30" height="20" fill="#94a3b8"/>
<text x="240" y="115" font-size="30" text-anchor="middle" fill="#713f12" font-weight="bold">1</text>
<text x="240" y="200" font-size="22" text-anchor="middle" fill="#facc15" font-weight="bold">4</text>
</g>
<g>
<circle cx="360" cy="105" r="45" fill="#334155" stroke="#64748b" stroke-width="3"/><rect x="345" y="148" width="30" height="20" fill="#94a3b8"/>
<text x="360" y="115" font-size="30" text-anchor="middle" fill="#94a3b8" font-weight="bold">0</text>
<text x="360" y="200" font-size="22" text-anchor="middle" fill="#64748b" font-weight="bold">2</text>
</g>
<g>
<circle cx="480" cy="105" r="45" fill="#facc15"/><rect x="465" y="148" width="30" height="20" fill="#94a3b8"/>
<text x="480" y="115" font-size="30" text-anchor="middle" fill="#713f12" font-weight="bold">1</text>
<text x="480" y="200" font-size="22" text-anchor="middle" fill="#facc15" font-weight="bold">1</text>
</g>
<text x="300" y="240" font-size="22" text-anchor="middle" fill="#f8fafc" font-weight="bold">8 + 4 + 0 + 1 = 13</text>
</svg>`
    },
    {
      type: `widget`, title: `Ogni posizione vale il doppio`,
      widget: `numberLine`,
      caption: `Sulla retta sono segnati i "valori" delle posizioni binarie: 1, 2, 4, 8, 16, 32, 64. Guarda come ogni salto è il doppio del precedente!`,
      options: { min: 0, max: 64, step: 1, marks: [1, 2, 4, 8, 16, 32, 64] }
    },
    {
      type: `quiz`, title: `Mini-quiz: bit e numeri`,
      questions: [
        { type: `num`, q: `Quanto vale in decimale il numero binario 101?`, answer: 5, tol: 0, explain: `4 + 0 + 1 = 5.` },
        { type: `num`, q: `Quanti bit ci sono in un byte?`, answer: 8, tol: 0, unit: `bit`, explain: `1 byte = 8 bit.` },
        { type: `mc`, q: `Come si scrive 6 in binario?`, options: [`110`, `101`, `111`], answer: 0, explain: `4 + 2 + 0 = 6 ➜ 110.` }
      ]
    },
    {
      type: `text`, title: `4. Lettere, immagini e suoni`,
      html: `<p><b>🔤 Le lettere</b>: ogni carattere ha un numero, stabilito da un codice uguale per tutti i computer. Il primo codice famoso è l'<b>ASCII</b> (1963): <b>A = 65</b>, B = 66, C = 67… a = 97, spazio = 32. Il numero viene poi scritto in binario: A = 65 = <b>01000001</b>. Oggi si usa <b>Unicode</b>, che contiene più di 150.000 caratteri di tutte le lingue del mondo, comprese le emoji 😀!</p>
<p><b>🖼️ Le immagini</b>: una foto è divisa in una griglia di quadratini, i <b>pixel</b>. Per ogni pixel il computer memorizza il colore con tre numeri: quanto <b>rosso</b>, quanto <b>verde</b> e quanto <b>blu</b> (<b>RGB</b>), ognuno da 0 a 255, cioè un byte ciascuno. Mescolandoli escono più di 16 milioni di colori!</p>
<p><b>🎵 I suoni</b>: il microfono misura migliaia di volte al secondo quanto vibra l'aria (per la musica dei CD: 44.100 volte al secondo) e salva ogni misura come numero.</p>
<p>Tutto, alla fine, diventa una lunghissima fila di 0 e 1.</p>`
    },
    {
      type: `svg`, title: `Un disegno fatto di bit`,
      caption: `Ogni riga è un byte: 1 = quadratino colorato, 0 = bianco. Così, in modo semplificato, il computer memorizza un'immagine in bianco e nero.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-size="16" font-family="monospace" fill="#0f172a">
<text x="20" y="48">0 1 1 0 0 1 1 0</text>
<text x="20" y="78">1 1 1 1 1 1 1 1</text>
<text x="20" y="108">1 1 1 1 1 1 1 1</text>
<text x="20" y="138">1 1 1 1 1 1 1 1</text>
<text x="20" y="168">0 1 1 1 1 1 1 0</text>
<text x="20" y="198">0 0 1 1 1 1 0 0</text>
<text x="20" y="228">0 0 0 1 1 0 0 0</text>
<text x="20" y="258">0 0 0 0 0 0 0 0</text>
</g>
<text x="225" y="150" font-size="34" fill="#64748b">➜</text>
<g stroke="#cbd5e1" stroke-width="1">
<rect x="300" y="30" width="30" height="30" fill="#ffffff"/><rect x="330" y="30" width="30" height="30" fill="#ef4444"/><rect x="360" y="30" width="30" height="30" fill="#ef4444"/><rect x="390" y="30" width="30" height="30" fill="#ffffff"/><rect x="420" y="30" width="30" height="30" fill="#ffffff"/><rect x="450" y="30" width="30" height="30" fill="#ef4444"/><rect x="480" y="30" width="30" height="30" fill="#ef4444"/><rect x="510" y="30" width="30" height="30" fill="#ffffff"/>
<rect x="300" y="60" width="30" height="30" fill="#ef4444"/><rect x="330" y="60" width="30" height="30" fill="#ef4444"/><rect x="360" y="60" width="30" height="30" fill="#ef4444"/><rect x="390" y="60" width="30" height="30" fill="#ef4444"/><rect x="420" y="60" width="30" height="30" fill="#ef4444"/><rect x="450" y="60" width="30" height="30" fill="#ef4444"/><rect x="480" y="60" width="30" height="30" fill="#ef4444"/><rect x="510" y="60" width="30" height="30" fill="#ef4444"/>
<rect x="300" y="90" width="30" height="30" fill="#ef4444"/><rect x="330" y="90" width="30" height="30" fill="#ef4444"/><rect x="360" y="90" width="30" height="30" fill="#ef4444"/><rect x="390" y="90" width="30" height="30" fill="#ef4444"/><rect x="420" y="90" width="30" height="30" fill="#ef4444"/><rect x="450" y="90" width="30" height="30" fill="#ef4444"/><rect x="480" y="90" width="30" height="30" fill="#ef4444"/><rect x="510" y="90" width="30" height="30" fill="#ef4444"/>
<rect x="300" y="120" width="30" height="30" fill="#ef4444"/><rect x="330" y="120" width="30" height="30" fill="#ef4444"/><rect x="360" y="120" width="30" height="30" fill="#ef4444"/><rect x="390" y="120" width="30" height="30" fill="#ef4444"/><rect x="420" y="120" width="30" height="30" fill="#ef4444"/><rect x="450" y="120" width="30" height="30" fill="#ef4444"/><rect x="480" y="120" width="30" height="30" fill="#ef4444"/><rect x="510" y="120" width="30" height="30" fill="#ef4444"/>
<rect x="300" y="150" width="30" height="30" fill="#ffffff"/><rect x="330" y="150" width="30" height="30" fill="#ef4444"/><rect x="360" y="150" width="30" height="30" fill="#ef4444"/><rect x="390" y="150" width="30" height="30" fill="#ef4444"/><rect x="420" y="150" width="30" height="30" fill="#ef4444"/><rect x="450" y="150" width="30" height="30" fill="#ef4444"/><rect x="480" y="150" width="30" height="30" fill="#ef4444"/><rect x="510" y="150" width="30" height="30" fill="#ffffff"/>
<rect x="300" y="180" width="30" height="30" fill="#ffffff"/><rect x="330" y="180" width="30" height="30" fill="#ffffff"/><rect x="360" y="180" width="30" height="30" fill="#ef4444"/><rect x="390" y="180" width="30" height="30" fill="#ef4444"/><rect x="420" y="180" width="30" height="30" fill="#ef4444"/><rect x="450" y="180" width="30" height="30" fill="#ef4444"/><rect x="480" y="180" width="30" height="30" fill="#ffffff"/><rect x="510" y="180" width="30" height="30" fill="#ffffff"/>
<rect x="300" y="210" width="30" height="30" fill="#ffffff"/><rect x="330" y="210" width="30" height="30" fill="#ffffff"/><rect x="360" y="210" width="30" height="30" fill="#ffffff"/><rect x="390" y="210" width="30" height="30" fill="#ef4444"/><rect x="420" y="210" width="30" height="30" fill="#ef4444"/><rect x="450" y="210" width="30" height="30" fill="#ffffff"/><rect x="480" y="210" width="30" height="30" fill="#ffffff"/><rect x="510" y="210" width="30" height="30" fill="#ffffff"/>
<rect x="300" y="240" width="30" height="30" fill="#ffffff"/><rect x="330" y="240" width="30" height="30" fill="#ffffff"/><rect x="360" y="240" width="30" height="30" fill="#ffffff"/><rect x="390" y="240" width="30" height="30" fill="#ffffff"/><rect x="420" y="240" width="30" height="30" fill="#ffffff"/><rect x="450" y="240" width="30" height="30" fill="#ffffff"/><rect x="480" y="240" width="30" height="30" fill="#ffffff"/><rect x="510" y="240" width="30" height="30" fill="#ffffff"/>
</g>
</svg>`
    },
    {
      type: `text`, title: `5. Quanto pesano i dati?`,
      html: `<p>Come i metri hanno i chilometri, anche i byte hanno i multipli:</p>
<table>
<tr><th>Unità</th><th>Quanto vale (circa)</th><th>Che cosa ci sta</th></tr>
<tr><td><b>1 byte</b> (B)</td><td>8 bit</td><td>una lettera</td></tr>
<tr><td><b>1 kilobyte</b> (kB)</td><td>1.000 byte</td><td>mezza pagina di testo</td></tr>
<tr><td><b>1 megabyte</b> (MB)</td><td>1.000 kB = 1 milione di byte</td><td>un libro intero di solo testo, o una foto</td></tr>
<tr><td><b>1 gigabyte</b> (GB)</td><td>1.000 MB = 1 miliardo di byte</td><td>circa un'ora di film</td></tr>
<tr><td><b>1 terabyte</b> (TB)</td><td>1.000 GB</td><td>centinaia di migliaia di foto</td></tr>
</table>
<p>Nota: a volte, in informatica, i multipli valgono <b>1.024</b> invece di 1.000 (perché 1024 = 2<sup>10</sup>). Per ora basta ricordare "circa mille".</p>`
    },
    {
      type: `example`, title: `Esempio pratico: scrivi il tuo nome in binario`,
      html: `<p>Proviamo con <b>CIAO</b>. Usiamo il codice ASCII delle maiuscole (A = 65, B = 66 … ogni lettera +1):</p>
<table>
<tr><th>Lettera</th><th>Codice</th><th>Binario (8 bit)</th></tr>
<tr><td>C</td><td>67</td><td>01000011</td></tr>
<tr><td>I</td><td>73</td><td>01001001</td></tr>
<tr><td>A</td><td>65</td><td>01000001</td></tr>
<tr><td>O</td><td>79</td><td>01001111</td></tr>
</table>
<p>Verifica la C: 64 + 2 + 1 = 67 ✅. Tutte le maiuscole cominciano con <b>010</b>; le altre 5 cifre dicono la posizione nell'alfabeto (C è la 3ª lettera: 00011 = 3).</p>
<p>Ora prova con il tuo nome! Così 4 lettere "pesano" 4 byte = 32 bit.</p>`
    },
    {
      type: `example`, title: `Esempio pratico: un gioco di carte binarie`,
      html: `<p>Prendi 5 cartoncini e disegna dei pallini: <b>16, 8, 4, 2, 1</b>. Mettili in fila con i pallini in vista (1) o girati (0).</p>
<ul>
<li>Vuoi fare <b>10</b>? Gira in su solo 8 e 2 ➜ <b>01010</b>.</li>
<li>Vuoi fare <b>21</b>? 16 + 4 + 1 ➜ <b>10101</b>.</li>
<li>Qual è il numero più grande che puoi fare? Tutte girate in su: 16 + 8 + 4 + 2 + 1 = <b>31</b> = 11111.</li>
</ul>
<p>Questa attività viene da <b>CS Unplugged</b>, un progetto neozelandese per imparare l'informatica <b>senza computer</b>.</p>`
    },
    {
      type: `remember`, title: `Da ricordare`,
      html: `<ul>
<li><b>Bit</b> = 0 o 1, la più piccola informazione. <b>Byte</b> = 8 bit = 256 valori.</li>
<li>Binario ➜ decimale: somma i valori (1, 2, 4, 8, 16…) dove c'è 1.</li>
<li>Decimale ➜ binario: dividi per 2 e leggi i resti dal basso.</li>
<li>Lettere = codici (ASCII/Unicode); immagini = pixel con RGB; suoni = misure di vibrazione.</li>
</ul>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… il binario è più vecchio del computer?`,
      html: `<p>Il matematico tedesco <b>Gottfried Wilhelm Leibniz</b> descrisse il sistema binario nel <b>1703</b>, più di 200 anni prima del primo computer! Era affascinato dal fatto che con solo 0 e 1 si potessero scrivere tutti i numeri. Nel 1854 l'inglese <b>George Boole</b> inventò un'algebra fatta solo di "vero" e "falso", e nel 1937 l'americano <b>Claude Shannon</b> capì che si poteva costruire con circuiti elettrici: era nata l'idea del computer digitale.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… anche il Braille è un codice binario?`,
      html: `<p>L'alfabeto <b>Braille</b>, inventato nel 1824 dal francese Louis Braille (rimasto cieco da bambino), usa celle di <b>6 puntini</b> in rilievo: ogni puntino c'è (1) o non c'è (0). Quante combinazioni? 2 × 2 × 2 × 2 × 2 × 2 = <b>64</b>, abbastanza per tutte le lettere, i numeri e la punteggiatura. Louis Braille aveva solo 15 anni!</p>`
    },
    {
      type: `alternatives`, title: `Altri modi per capirlo`,
      intro: `Il binario sembra strano solo perché siamo abituati a contare con 10 dita. Ecco altre strade.`,
      tabs: [
        {
          label: `🖐️ Contare con le dita`,
          html: `<p>Con le dita della mano, di solito, arrivi a 5. Ma se ogni dito è un bit (alzato = 1, abbassato = 0) e vale il doppio del precedente:</p>
<ul>
<li>pollice = 1 · indice = 2 · medio = 4 · anulare = 8 · mignolo = 16</li>
</ul>
<p>Con <b>una mano</b> arrivi a <b>31</b>, con due mani a <b>1023</b>! Prova: per fare 3 alza pollice e indice; per fare 5 pollice e medio.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fef9c3"/>
<rect x="190" y="120" width="220" height="90" rx="40" fill="#fdba74"/>
<rect x="150" y="110" width="40" height="70" rx="20" fill="#fdba74" transform="rotate(-35 170 145)"/>
<rect x="205" y="30" width="36" height="100" rx="18" fill="#fdba74"/>
<rect x="250" y="15" width="36" height="115" rx="18" fill="#fdba74"/>
<rect x="295" y="25" width="36" height="105" rx="18" fill="#fdba74"/>
<rect x="340" y="50" width="34" height="80" rx="17" fill="#fdba74"/>
<g font-size="18" text-anchor="middle" font-weight="bold" fill="#7c2d12">
<text x="140" y="110">1</text><text x="223" y="25">2</text><text x="268" y="12">4</text><text x="313" y="20">8</text><text x="357" y="45">16</text>
</g>
<text x="500" y="110" font-size="18" text-anchor="middle" fill="#7c2d12" font-weight="bold">tutte su =</text>
<text x="500" y="140" font-size="26" text-anchor="middle" fill="#b91c1c" font-weight="bold">31</text>
</svg>`
        },
        {
          label: `🧮 Come l'abaco`,
          html: `<p>Conosci l'abaco: nella colonna delle unità, quando arrivi a 10 palline, le togli e ne metti 1 nelle decine. Il binario è uguale, ma il "cambio" avviene a <b>2</b>: appena hai 2 palline in una colonna, le togli e ne metti 1 nella colonna a sinistra.</p>
<p>Prova con l'abaco qui sotto a contare in base 10, e immagina che ogni colonna possa avere solo 0 o 1 pallina: ecco il binario!</p>`,
          widget: `abacus`,
          options: { columns: ['h', 'da', 'u'], value: 101 }
        },
        {
          label: `🔦 Messaggi con la torcia`,
          html: `<p>Anche altri codici usano due soli segnali:</p>
<ul>
<li><b>Codice Morse</b> (Samuel Morse, anni '30 dell'Ottocento): punto e linea. SOS = · · · — — — · · ·</li>
<li><b>I Ching</b> (antica Cina, circa 3000 anni fa): linee intere e spezzate in gruppi di 6 = 64 esagrammi. Leibniz li studiò e ci vide il suo binario!</li>
<li><b>Bandiere navali e fumo</b>: c'è / non c'è.</li>
</ul>
<p>Fai una prova con un amico: con la torcia, luce lunga = 1, luce corta = 0. Mandatevi un numero!</p>`
        },
        {
          label: `🔗 Abbina`,
          html: `<p>Abbina ogni numero binario al suo valore decimale.</p>`,
          widget: `match`,
          options: {
            pairs: [
              [`1`, `1`], [`10`, `2`], [`11`, `3`], [`100`, `4`], [`111`, `7`], [`1000`, `8`], [`1010`, `10`], [`1111`, `15`]
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: dal bit al computer`,
      nodes: [
        { id: `bit`, label: `Bit (0/1)`, x: 50, y: 8, color: `#3b82f6`, html: `La più piccola unità di informazione.`, why: `Il nome <i>bit</i> (binary digit) fu proposto dal matematico John Tukey e usato da <b>Claude Shannon</b> nel 1948 nel suo articolo che fondò la "teoria dell'informazione".` },
        { id: `trans`, label: `Transistor`, x: 15, y: 30, color: `#64748b`, html: `Interruttore elettronico: acceso o spento.`, why: `Fu inventato nel <b>1947</b> ai Bell Labs (USA) da Bardeen, Brattain e Shockley, che vinsero il Nobel. Prima si usavano valvole grandi come lampadine. Oggi un processore contiene miliardi di transistor.` },
        { id: `base2`, label: `Base 2`, x: 50, y: 30, color: `#a855f7`, html: `Ogni posizione vale il doppio: 1, 2, 4, 8, 16…`, why: `Descritta da <b>Leibniz</b> nel 1703. Si usa nei computer perché distinguere solo due stati elettrici (c'è corrente/non c'è) è molto più affidabile che distinguerne dieci.` },
        { id: `boole`, label: `Logica di Boole`, x: 85, y: 30, color: `#ef4444`, html: `Vero/falso, AND, OR, NOT.`, why: `<b>George Boole</b> (1854) trasformò il ragionamento in calcoli con 0 e 1. Nel 1937 <b>Claude Shannon</b>, a 21 anni, dimostrò che i circuiti con interruttori potevano fare questi calcoli.` },
        { id: `byte`, label: `Byte = 8 bit`, x: 30, y: 55, color: `#22c55e`, html: `256 combinazioni: un carattere.`, why: `La parola fu inventata da Werner Buchholz all'IBM nel 1956. Gli 8 bit sono diventati lo standard con il computer IBM System/360 (1964), perché bastavano per lettere, numeri e simboli.` },
        { id: `ascii`, label: `Codici: ASCII, Unicode`, x: 12, y: 80, color: `#16a34a`, html: `Ogni carattere ha un numero.`, why: `L'<b>ASCII</b> (1963) fu creato negli USA perché computer diversi potessero scambiarsi testi. Conteneva solo l'alfabeto inglese, così nel 1991 nacque <b>Unicode</b>, per tutte le lingue del mondo.` },
        { id: `pixel`, label: `Pixel e RGB`, x: 42, y: 80, color: `#f97316`, html: `Le immagini come griglia di colori.`, why: `"Pixel" viene da <i>picture element</i>. I colori si fanno con rosso, verde e blu perché l'occhio umano ha tre tipi di "sensori" (coni) sensibili proprio a questi colori.` },
        { id: `units`, label: `kB, MB, GB, TB`, x: 75, y: 62, color: `#eab308`, html: `I multipli del byte.`, why: `Si usano i prefissi del Sistema Internazionale (kilo = mille, mega = milione, giga = miliardo). In informatica a volte valgono potenze di 2 (1024): per questo nel 1998 sono nati i nomi kibibyte, mebibyte…` },
        { id: `data`, label: `Dati`, x: 75, y: 88, color: `#0ea5e9`, html: `Testi, foto, suoni, video: tutto diventa numeri.`, why: `Trasformare un'informazione in numeri si chiama <b>digitalizzare</b> (da <i>digit</i>, cifra). Una volta numeri, i dati si possono copiare senza errori, comprimere e inviare in tutto il mondo.` }
      ],
      edges: [
        [`trans`, `bit`, `memorizza`], [`base2`, `bit`, `usa`], [`boole`, `bit`, `calcola con`], [`bit`, `byte`, `8 formano`],
        [`byte`, `ascii`, `codifica`], [`byte`, `pixel`, `colora`], [`byte`, `units`, `si misura in`], [`units`, `data`, `quantità di`], [`pixel`, `data`, `è un tipo di`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: codici e misure`,
      questions: [
        { type: `mc`, q: `Che cosa vuol dire RGB?`, options: [`Rosso, Giallo, Bianco`, `Rosso, Verde, Blu (Red, Green, Blue)`, `Rapido, Grande, Binario`], answer: 1, explain: `Red, Green, Blue: i tre colori che si mescolano per ogni pixel.` },
        { type: `tf`, q: `1 megabyte è più grande di 1 gigabyte.`, answer: false, explain: `1 GB ≈ 1000 MB.` },
        { type: `num`, q: `Quante combinazioni si possono fare con 3 bit?`, answer: 8, tol: 0, explain: `2 × 2 × 2 = 8.` }
      ]
    }
  ],
  glossary: [
    { t: `Dato`, d: `Un'informazione (numero, testo, immagine, suono) che si può memorizzare.` },
    { t: `Bit`, d: `Cifra binaria: 0 oppure 1.` },
    { t: `Byte`, d: `Gruppo di 8 bit; può avere 256 valori.` },
    { t: `Codice binario`, d: `Sistema che rappresenta le informazioni con soli 0 e 1.` },
    { t: `Base 2`, d: `Sistema di numerazione con due cifre in cui ogni posizione vale il doppio della precedente.` },
    { t: `Transistor`, d: `Minuscolo interruttore elettronico, il "mattoncino" dei computer.` },
    { t: `ASCII / Unicode`, d: `Codici che assegnano un numero a ogni carattere.` },
    { t: `Pixel`, d: `Il più piccolo quadratino di colore di un'immagine digitale.` },
    { t: `RGB`, d: `Rosso, verde, blu: i tre colori base delle immagini sullo schermo.` },
    { t: `Digitalizzare`, d: `Trasformare un'informazione in numeri che il computer può usare.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `num`, q: `Quanto vale in decimale il numero binario 1010?`, answer: 10, tol: 0, explain: `8 + 0 + 2 + 0 = 10.` },
      { type: `num`, q: `Quanto vale in decimale il numero binario 11111?`, answer: 31, tol: 0, explain: `16 + 8 + 4 + 2 + 1 = 31.` },
      { type: `text`, q: `Scrivi 9 in binario.`, answer: [`1001`, `00001001`], explain: `9 = 8 + 1 ➜ 1001.` },
      { type: `mc`, q: `Quanti valori diversi può avere un byte?`, options: [`8`, `100`, `256`], answer: 2, explain: `2 alla ottava = 256 (da 0 a 255).` },
      { type: `tf`, q: `Il computer usa il binario perché i transistor hanno due stati: acceso e spento.`, answer: true, explain: `Due stati elettrici sono facili da distinguere senza errori.` },
      { type: `order`, q: `Metti in ordine dalla più piccola alla più grande.`, items: [`bit`, `byte`, `kilobyte`, `megabyte`, `gigabyte`], explain: `bit < byte (8 bit) < kB < MB < GB.` },
      { type: `mc`, q: `Nel codice ASCII la lettera A vale…`, options: [`1`, `65`, `100`], answer: 1, explain: `A = 65 = 01000001.` },
      { type: `mc`, q: `Chi descrisse il sistema binario nel 1703?`, options: [`Leibniz`, `Galileo`, `Leonardo da Vinci`], answer: 0, explain: `Gottfried Wilhelm Leibniz.` },
      { type: `mc`, q: `Una foto digitale è fatta di…`, options: [`pixel`, `byte musicali`, `transistor colorati`], answer: 0, explain: `Una griglia di pixel, ognuno con il suo colore RGB.` },
      { type: `num`, q: `In binario, quanto vale la posizione a sinistra del 16?`, answer: 32, tol: 0, explain: `Ogni posizione vale il doppio: 16 × 2 = 32.` },
      { type: `tf`, q: `In binario "10" vale dieci.`, answer: false, explain: `In binario 10 = 2 (un 2 e zero 1).` },
      { type: `mc`, q: `Il Braille usa celle di 6 puntini. Quante combinazioni ci sono?`, options: [`12`, `36`, `64`], answer: 2, explain: `2 alla sesta = 64.` }
    ],
    gen: [['power', 2]]
  }
});
