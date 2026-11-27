TOPIC('it', {
  id: "l4-fis-carica-campo-elettrico",
  title: "Carica e campo elettrico",
  intro: "Pettini che attirano pezzetti di carta, la scossa dopo aver toccato la maniglia di un'auto, il fulmine: sono tutti effetti di una proprietà fondamentale della materia, la <b>carica elettrica</b>. In questa lezione scopriamo come si elettrizzano i corpi, quanto vale la forza tra due cariche (<b>legge di Coulomb</b>), perché conviene descrivere questa interazione con il <b>campo elettrico</b> e come il <b>teorema di Gauss</b> permette di calcolarlo nei casi simmetrici con pochi passaggi. È la porta d'ingresso a tutta l'elettricità e, con Maxwell, anche all'ottica.",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "La carica elettrica",
      html: `<p>Già i Greci sapevano che l'ambra (in greco <i>élektron</i>) strofinata attira piccoli oggetti. Oggi sappiamo che la materia è fatta di atomi con <b>protoni</b> (carica positiva), <b>elettroni</b> (carica negativa) e neutroni (neutri). Le proprietà fondamentali della carica sono quattro.</p>
<ul>
<li><b>Due tipi di carica.</b> Cariche dello stesso segno si <b>respingono</b>, di segno opposto si <b>attraggono</b>. La convenzione di chiamarle positive e negative si deve a <b>Benjamin Franklin</b> (metà del Settecento).</li>
<li><b>Conservazione.</b> In un sistema isolato la carica totale si conserva: la carica non si crea né si distrugge, si trasferisce.</li>
<li><b>Quantizzazione.</b> Ogni carica è un multiplo intero della <b>carica elementare e = 1,602·10<sup>-19</sup> C</b> (carica del protone; l'elettrone ha −e). L'unità è il <b>coulomb</b> (C): un coulomb sono circa 6,24·10<sup>18</sup> cariche elementari. La quantizzazione fu dimostrata da <b>Robert Millikan</b> con l'esperimento della goccia d'olio (1909-1913).</li>
<li><b>Atomo neutro.</b> Un oggetto è «carico» quando ha un eccesso o un difetto di elettroni; in pratica si muovono sempre gli elettroni, mai i protoni degli atomi.</li>
</ul>
<p><b>Conduttori e isolanti.</b> Nei <b>conduttori</b> (metalli, soluzioni ioniche, corpo umano) alcune cariche sono libere di muoversi; negli <b>isolanti</b> (vetro, plastica, aria secca, gomma) restano legate agli atomi. Ci sono poi i <b>semiconduttori</b> (silicio) a metà strada, alla base dell'elettronica.</p>
<p><b>Come si elettrizza un corpo.</b></p>
<ul>
<li><b>Strofinio</b>: gli elettroni passano da un materiale all'altro (pettine di plastica strofinato sui capelli diventa negativo);</li>
<li><b>Contatto</b>: un corpo carico tocca uno neutro e gli cede parte della carica;</li>
<li><b>Induzione</b>: un corpo carico, avvicinato senza toccare, <b>sposta</b> le cariche libere di un conduttore neutro; collegando a terra si può lasciarlo carico. Negli isolanti avviene la <b>polarizzazione</b>: gli atomi si deformano, ed è per questo che il pettine attira i pezzetti di carta neutri.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Conduttori o isolanti?",
      widget: "classify",
      options: { groups: ["Conduttori", "Isolanti"], items: [
        ["🔩 Rame", 0], ["🧂 Acqua salata", 0], ["🪙 Alluminio", 0], ["✋ Corpo umano", 0],
        ["🪟 Vetro", 1], ["🧴 Plastica", 1], ["🧱 Gomma", 1], ["🍂 Legno secco", 1]
      ] },
      caption: "In un conduttore le cariche libere si muovono; in un isolante restano legate agli atomi. Con l'umidità, però, anche materiali isolanti possono condurre un poco."
    },
    {
      type: "text",
      title: "La legge di Coulomb",
      html: `<p>Nel 1785 <b>Charles-Augustin de Coulomb</b>, con una <b>bilancia di torsione</b> (un sottile filo che si torce quando la forza tra due sferette cariche lo spinge), misurò come la forza tra due cariche dipende dalla distanza. Il risultato ricorda quello della gravitazione: la forza tra due cariche puntiformi q<sub>1</sub> e q<sub>2</sub> a distanza r nel vuoto è</p>
<p style="text-align:center"><b>F = k · |q<sub>1</sub>·q<sub>2</sub>| / r²</b> &nbsp; con &nbsp; <b>k = 1/(4π·ε<sub>0</sub>) ≈ 8,99·10<sup>9</sup> N·m²/C²</b></p>
<p>dove <b>ε<sub>0</sub> = 8,85·10<sup>-12</sup> C²/(N·m²)</b> è la <b>costante dielettrica del vuoto</b>. La forza:</p>
<ul>
<li>agisce <b>lungo la retta</b> che congiunge le due cariche, è <b>repulsiva</b> se hanno lo stesso segno e <b>attrattiva</b> se opposto;</li>
<li>rispetta il <b>terzo principio</b>: le due cariche si respingono o attraggono con forze uguali e opposte;</li>
<li>decresce con il <b>quadrato</b> della distanza (raddoppiando r, F diventa un quarto);</li>
<li>in un mezzo isolante diventa <b>F = k·q<sub>1</sub>q<sub>2</sub>/(ε<sub>r</sub>·r²)</b> con ε<sub>r</sub> costante dielettrica relativa (aria ≈ 1,0006; acqua ≈ 80: in acqua la forza si riduce di 80 volte, ed è una delle ragioni per cui il sale si scioglie in ioni);</li>
<li>soddisfa il <b>principio di sovrapposizione</b>: la forza su una carica dovuta a più cariche è la somma vettoriale delle singole forze.</li>
</ul>
<p>Rispetto alla gravità, la differenza è abissale: <b>due protoni si respingono con una forza elettrica circa 10<sup>36</sup> volte più grande dell'attrazione gravitazionale</b>. Nella vita quotidiana la gravità domina solo perché i corpi sono quasi neutri: positivo e negativo si compensano, mentre le masse si sommano sempre.</p>`
    },
    {
      type: "example",
      title: "Qualche conto con Coulomb",
      html: `<p><b>Due cariche di 1 µC a 30 cm.</b> F = 8,99·10<sup>9</sup> × (10<sup>-6</sup>)² / (0,30)² = 8,99·10<sup>-3</sup>/0,090 ≈ <b>0,10 N</b>: la forza del peso di una moneta da 10 g. Un coulomb è una carica enorme: le scariche tipiche di elettricità statica sono dell'ordine del microcoulomb o meno.</p>
<p><b>Atomo di idrogeno.</b> Elettrone e protone distano r = 5,29·10<sup>-11</sup> m (raggio di Bohr): F = 8,99·10<sup>9</sup> × (1,60·10<sup>-19</sup>)²/(5,29·10<sup>-11</sup>)² ≈ <b>8,2·10<sup>-8</sup> N</b>. Sembra poco, ma agisce su un elettrone di massa 9,11·10<sup>-31</sup> kg: l'accelerazione centripeta è a = F/m ≈ 9·10<sup>22</sup> m/s², enormemente più grande di g.</p>
<p><b>Tre cariche in linea.</b> Con le cariche q<sub>A</sub> = +2 µC in x = 0, q<sub>B</sub> = −1 µC in x = 0,10 m e q<sub>C</sub> = +1 µC in x = 0,20 m, la forza su B è la somma delle forze di A (attrattiva, verso −x: 8,99·10<sup>9</sup> × 2·10<sup>-6</sup> × 10<sup>-6</sup>/0,01 ≈ 1,8 N) e di C (attrattiva, verso +x: ≈ 0,90 N): in totale <b>0,90 N</b> verso A (i vettori si sottraggono perché sono opposti).</p>`
    },
    {
      type: "quiz",
      title: "Controlla: carica e Coulomb",
      questions: [
        { type: "mc", q: "Se la distanza tra due cariche triplica, la forza di Coulomb:", options: ["triplica", "diventa un terzo", "diventa un nono", "resta uguale"], answer: 2, explain: "F ∝ 1/r²: con r triplo, F diventa 1/9." },
        { type: "num", q: "Quanti elettroni in eccesso ha un corpo con carica −3,2·10⁻¹⁹ C? (e = 1,6·10⁻¹⁹ C)", answer: 2, tol: 0, explain: "N = Q/e = 3,2·10⁻¹⁹/1,6·10⁻¹⁹ = 2 elettroni." },
        { type: "tf", q: "Un corpo carico positivamente è un corpo che ha ricevuto protoni.", answer: false, explain: "Un corpo è positivo perché ha perso elettroni: sono sempre le cariche negative a spostarsi." }
      ]
    },
    {
      type: "text",
      title: "Il campo elettrico",
      html: `<p>La forza di Coulomb sembra agire <b>a distanza</b>, attraverso lo spazio vuoto. Per superare questa difficoltà Michael Faraday (1830-1840) introdusse il concetto di <b>campo</b>: una carica Q modifica lo spazio intorno a sé creando un <b>campo elettrico</b>, e questo campo agisce su qualsiasi altra carica. Si definisce con una <b>carica di prova</b> q (piccola e positiva): il campo in un punto è la forza per unità di carica,</p>
<p style="text-align:center"><b>E⃗ = F⃗ / q</b> &nbsp; (unità: N/C = V/m)</p>
<p>Quindi una carica q posta in un punto di campo E⃗ subisce la forza <b>F⃗ = q·E⃗</b>: parallela a E se q &gt; 0, opposta se q &lt; 0. Per una <b>carica puntiforme</b> Q a distanza r:</p>
<p style="text-align:center"><b>E = k·|Q| / r²</b> &nbsp; (uscente se Q &gt; 0, entrante se Q &lt; 0)</p>
<p>Per più sorgenti vale il <b>principio di sovrapposizione</b>: E⃗ = E⃗<sub>1</sub> + E⃗<sub>2</sub> + … (somma vettoriale). Per descrivere il campo si usano le <b>linee di campo</b>, introdotte da Faraday:</p>
<ul>
<li>escono dalle cariche positive ed entrano nelle negative (o vanno all'infinito);</li>
<li>in ogni punto sono <b>tangenti</b> al vettore E⃗;</li>
<li>sono più <b>fitte</b> dove il campo è più intenso e <b>non si incrociano mai</b>.</li>
</ul>
<p>Un campo particolarmente importante è quello <b>uniforme</b>, con E⃗ uguale in ogni punto (linee parallele ed equidistanti): lo si realizza tra due lastre piane parallele cariche di segno opposto, con <b>E = σ/ε<sub>0</sub></b> (σ = carica per unità di area, nel vuoto). In un campo uniforme una carica q di massa m ha accelerazione costante a = qE/m e si muove come un proiettile nel campo di gravità.</p>`
    },
    {
      type: "svg",
      title: "Linee di campo di un dipolo",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<g font-family="sans-serif">
<g fill="none" stroke="#475569" stroke-width="2.5">
<path d="M222 145 L 378 145"/>
<path d="M220 135 Q 300 70 380 135"/>
<path d="M215 125 Q 300 25 385 125"/>
<path d="M220 165 Q 300 230 380 165"/>
<path d="M215 175 Q 300 275 385 175"/>
<path d="M205 125 Q 150 60 70 40"/>
<path d="M205 175 Q 150 240 70 260"/>
<path d="M395 125 Q 450 60 530 40"/>
<path d="M395 175 Q 450 240 530 260"/>
</g>
<polygon points="300,145 288,139 288,151" fill="#475569"/>
<polygon points="300,93 288,99 290,86" fill="#475569" transform="rotate(8 300 93)"/>
<circle cx="200" cy="150" r="22" fill="#ef4444"/>
<text x="200" y="158" font-size="26" fill="#ffffff" text-anchor="middle" font-weight="bold">+</text>
<circle cx="400" cy="150" r="22" fill="#2563eb"/>
<text x="400" y="158" font-size="26" fill="#ffffff" text-anchor="middle" font-weight="bold">−</text>
<text x="300" y="20" font-size="15" fill="#1e293b" text-anchor="middle" font-weight="bold">Dipolo elettrico: due cariche uguali e opposte</text>
<text x="300" y="130" font-size="14" fill="#64748b" text-anchor="middle">le linee vanno da + a −</text>
</g>
</svg>`,
      caption: "Nel dipolo le linee escono dalla carica positiva e arrivano sulla negativa. Sono più fitte vicino alle cariche, dove il campo è più intenso."
    },
    {
      type: "example",
      title: "Calcolare un campo e il moto di una carica",
      html: `<p><b>Carica puntiforme.</b> Una carica Q = 1,0 µC crea a r = 0,30 m il campo E = 8,99·10<sup>9</sup> × 10<sup>-6</sup>/0,090 ≈ <b>1,0·10<sup>5</sup> N/C</b>, uscente dalla carica. Su una carica di prova q = 2 nC posta lì agisce F = qE = 2·10<sup>-9</sup> × 10<sup>5</sup> = 2·10<sup>-4</sup> N.</p>
<p><b>Dipolo (principio di sovrapposizione).</b> Due cariche +2 µC e −2 µC distano 0,20 m. Nel punto medio ciascuna crea E = 8,99·10<sup>9</sup> × 2·10<sup>-6</sup>/(0,10)<sup>2</sup> ≈ 1,8·10<sup>6</sup> N/C; i due campi hanno <b>lo stesso verso</b> (uscente dalla positiva e entrante nella negativa, quindi entrambi verso la carica negativa) e si sommano: <b>3,6·10<sup>6</sup> N/C</b>. Al punto medio tra due cariche <i>uguali</i> invece il campo sarebbe nullo.</p>
<p><b>Elettrone in campo uniforme.</b> In E = 1000 N/C (campo tra due piastre) un elettrone ha accelerazione a = eE/m = 1,60·10<sup>-19</sup> × 10<sup>3</sup>/9,11·10<sup>-31</sup> ≈ <b>1,8·10<sup>14</sup> m/s²</b>, circa 10<sup>13</sup> volte g: il peso è del tutto trascurabile rispetto alla forza elettrica. È il principio dei vecchi televisori a tubo catodico e degli oscilloscopi.</p>`
    },
    {
      type: "text",
      title: "Flusso e teorema di Gauss",
      html: `<p>Il <b>flusso</b> del campo elettrico attraverso una superficie piana di area S è <b>Φ(E⃗) = E·S·cos θ</b>, dove θ è l'angolo tra E⃗ e la normale alla superficie (unità: N·m²/C). Intuitivamente conta il «numero di linee di campo» che attraversano la superficie: massimo se sono perpendicolari alla superficie, nullo se sono parallele. Per una superficie qualunque si somma su piccoli elementi.</p>
<p>Il <b>teorema di Gauss</b> (Carl Friedrich Gauss, 1835) dice che il flusso attraverso una qualunque <b>superficie chiusa</b> dipende <b>solo dalla carica contenuta</b>:</p>
<p style="text-align:center"><b>Φ(E⃗) = Q<sub>interna</sub> / ε<sub>0</sub></b></p>
<p>Le cariche esterne danno flusso netto zero (le linee entrano e escono). Il teorema equivale alla legge di Coulomb (dipendenza 1/r²) ed è una delle quattro equazioni di Maxwell. È potentissimo quando c'è simmetria, perché permette di calcolare E senza integrali: si sceglie una superficie in cui E è costante e perpendicolare. Risultati fondamentali:</p>
<ul>
<li><b>Sfera carica</b> (o carica puntiforme), all'esterno: E = k·Q/r², come se tutta la carica fosse al centro;</li>
<li><b>Filo infinito</b> con densità lineare λ: E = λ/(2π·ε<sub>0</sub>·r), che decresce come 1/r;</li>
<li><b>Piano infinito</b> con densità superficiale σ: E = σ/(2·ε<sub>0</sub>), <b>uniforme</b>, indipendente dalla distanza; due piani opposti danno E = σ/ε<sub>0</sub> tra i piani e 0 fuori.</li>
</ul>
<p><b>Conduttori in equilibrio elettrostatico.</b> All'interno di un conduttore il campo è <b>nullo</b> (altrimenti le cariche libere si muoverebbero); la carica in eccesso sta sulla <b>superficie</b>; subito fuori il campo è perpendicolare alla superficie e vale <b>E = σ/ε<sub>0</sub></b>. Una cavità chiusa dentro un conduttore è priva di campo: è la <b>gabbia di Faraday</b> (Faraday la dimostrò nel 1836 chiudendosi in una grande gabbia metallica e facendola caricare con forti scariche, senza accorgersi di nulla). Per questo in un'automobile con carrozzeria metallica si è al sicuro durante un fulmine, e il segnale del cellulare si indebolisce in un ascensore.</p>`
    },
    {
      type: "example",
      title: "Gauss in azione: il campo vicino a una lastra e a un conduttore",
      html: `<p><b>Piano infinito.</b> Prendiamo σ = 2,0·10<sup>-6</sup> C/m². Per Gauss, E = σ/(2ε<sub>0</sub>) = 2,0·10<sup>-6</sup>/(2 × 8,85·10<sup>-12</sup>) ≈ <b>1,1·10<sup>5</sup> N/C</b>, a qualunque distanza (finché si resta vicini a una lastra molto estesa).</p>
<p><b>Sfera conduttrice.</b> Una sfera di raggio R = 10 cm porta Q = 5,0 nC. A r = 20 cm dal centro E = kQ/r² = 8,99·10<sup>9</sup> × 5,0·10<sup>-9</sup>/0,040 ≈ <b>1,1·10<sup>3</sup> N/C</b>; <b>dentro</b> la sfera E = 0; sulla superficie E = kQ/R² = 4,5·10<sup>3</sup> N/C.</p>
<p><b>Aria e fulmini.</b> L'aria secca diventa conduttrice (<b>rigidità dielettrica</b>) quando il campo supera circa <b>3·10<sup>6</sup> V/m</b>: sulla sfera di raggio 10 cm questo accadrebbe con Q ≈ 3·10<sup>6</sup> × 0,01/8,99·10<sup>9</sup> ≈ 3,3 µC. È anche la ragione del <b>potere delle punte</b>: sulle punte la carica si concentra (σ grande ⟹ E grande) e la scarica avviene lì, principio del parafulmine inventato da Franklin (1752).</p>`
    },
    {
      type: "quiz",
      title: "Controlla: campo e Gauss",
      questions: [
        { type: "num", q: "In un punto agisce su una carica di 2·10⁻⁶ C una forza di 0,04 N. Quanto vale il campo (in N/C)?", answer: 20000, tol: 1, unit: "N/C", explain: "E = F/q = 0,04/(2·10⁻⁶) = 2,0·10⁴ N/C." },
        { type: "tf", q: "All'interno di un conduttore in equilibrio elettrostatico il campo elettrico è nullo.", answer: true, explain: "Se E ≠ 0 le cariche libere si muoverebbero: l'equilibrio richiede E = 0 dentro il conduttore." },
        { type: "mc", q: "Una carica Q racchiusa in una superficie sferica produce flusso Φ. Se la sfera diventa di raggio doppio, il flusso:", options: ["raddoppia", "diventa un quarto", "non cambia", "diventa 4 volte"], answer: 2, explain: "Per Gauss Φ = Q/ε₀, indipendente dalla forma e dalle dimensioni della superficie." }
      ]
    },
    {
      type: "alternatives",
      title: "Altri modi per capire carica e campo",
      intro: "Il campo elettrico non si vede: ecco alcune analogie.",
      tabs: [
        {
          label: "🌍 Il parallelo con la gravità",
          html: "<p>La legge di Coulomb F = kq₁q₂/r² ha la stessa forma di F = Gm₁m₂/r². Il campo gravitazionale g = F/m (che conosci dalla lezione sulla gravitazione) corrisponde al campo elettrico E = F/q: «forza per unità di massa» contro «forza per unità di carica». Le differenze: la carica può avere <b>due segni</b> (la forza elettrica può essere anche repulsiva), la costante k è enormemente più grande di G, e la carica totale di un corpo si annulla quasi sempre mentre la massa si somma. In questo senso <b>la gravità è la «debole» delle due</b>.</p>"
        },
        {
          label: "🧲 Limatura e semi di erba",
          html: "<p>Come si vedono le linee di campo? Un trucco classico: in un recipiente con olio di ricino si spargono piccoli semi di erba o semolino e si immergono due elettrodi collegati a un generatore ad alta tensione. I semi si polarizzano, si dispongono lungo catene e disegnano le <b>linee del campo</b>: radiali attorno a una carica puntiforme, arcuate tra due cariche opposte, parallele tra due piastre. Le linee sono più fitte dove il campo è più forte.</p>"
        },
        {
          label: "🔗 Abbina grandezza e formula",
          html: "<p>Collega ciascuna grandezza alla relazione corretta.</p>",
          widget: "match",
          options: { pairs: [
            ["Forza di Coulomb", "F = k·q₁q₂/r²"],
            ["Definizione di campo", "E = F/q"],
            ["Campo di una carica puntiforme", "E = k·Q/r²"],
            ["Teorema di Gauss", "Φ(E) = Q_int/ε₀"],
            ["Campo tra due piastre cariche", "E = σ/ε₀"],
            ["Carica elementare", "e = 1,602·10⁻¹⁹ C"]
          ] }
        },
        {
          label: "📉 Disegno: E con la distanza",
          html: "<p>Il campo di una carica puntiforme decresce come 1/r²: a distanza doppia è un quarto, a distanza tripla un nono.</p>",
          svg: "<svg viewBox='0 0 600 260' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='260' fill='#f8fafc'/><g font-family='sans-serif'><line x1='60' y1='220' x2='560' y2='220' stroke='#334155' stroke-width='3'/><line x1='60' y1='220' x2='60' y2='20' stroke='#334155' stroke-width='3'/><path d='M100 30 C 140 100 180 160 240 183 S 360 207 440 213 S 520 217 550 218' stroke='#dc2626' stroke-width='5' fill='none'/><g font-size='14' fill='#334155' text-anchor='middle'><text x='100' y='240'>r</text><text x='200' y='240'>2r</text><text x='300' y='240'>3r</text><text x='400' y='240'>4r</text></g><text x='30' y='125' font-size='14' fill='#334155' transform='rotate(-90 30 125)' text-anchor='middle'>E</text><text x='120' y='52' font-size='14' fill='#991b1b'>E₀ = kQ/r²</text><text x='215' y='170' font-size='14' fill='#991b1b'>E₀/4</text><text x='310' y='195' font-size='14' fill='#991b1b'>E₀/9</text></g></svg>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "Fulmini e parafulmini",
      html: `<p>Una nube temporalesca accumula cariche per attrito tra cristalli di ghiaccio e gocce: la parte bassa si carica negativamente e il suolo sotto di essa positivamente per induzione. Quando il campo supera la rigidità dielettrica dell'aria (≈ 3·10<sup>6</sup> V/m) si crea un canale conduttore e avviene la scarica: un fulmine trasporta tipicamente decine di coulomb di carica con correnti di decine di migliaia di ampere, per una frazione di secondo. <b>Benjamin Franklin</b>, nel 1752, propose il parafulmine, una punta metallica collegata a terra che scarica la nube e offre al fulmine un cammino sicuro. Un'automobile chiusa, invece, funziona da gabbia di Faraday: la carica scorre sulla superficie esterna e all'interno E = 0.</p>`
    },
    {
      type: "curiosity",
      title: "Millikan e la goccia d'olio",
      html: `<p>Tra il 1909 e il 1913 <b>Robert Millikan</b> osservò minuscole gocce d'olio cariche, sospese tra due piastre orizzontali: regolando il campo elettrico in modo che la forza elettrica qE bilanciasse il peso della goccia (qE = mg) ricavava q. Ripetendo la misura per molte gocce, trovò che tutte le cariche erano multiple di uno stesso valore, ≈ 1,6·10<sup>-19</sup> C: la <b>carica elementare</b>. Per quel lavoro ottenne il Nobel nel 1923.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Carica: due segni, <b>si conserva</b>, è <b>quantizzata</b> (e = 1,602·10<sup>-19</sup> C).</li>
<li>Coulomb: <b>F = k·q<sub>1</sub>q<sub>2</sub>/r²</b>, k ≈ 8,99·10<sup>9</sup> N·m²/C² = 1/(4πε<sub>0</sub>).</li>
<li>Campo: <b>E = F/q</b>; carica puntiforme <b>E = kQ/r²</b>; vale la sovrapposizione.</li>
<li>Gauss: <b>Φ(E) = Q<sub>int</sub>/ε<sub>0</sub></b>; piano infinito E = σ/(2ε<sub>0</sub>); dentro un conduttore E = 0.</li>
</ul>`
    },
    {
      type: "conceptMap",
      title: "Mappa di carica e campo elettrico",
      nodes: [
        { id: "carica", label: "Carica elettrica", x: 50, y: 8, color: "#ef4444", html: "Due segni, conservata, quantizzata (e = 1,602·10⁻¹⁹ C).", why: "Le cariche elementari sono legate alle particelle (protone, elettrone). La conservazione fu verificata in innumerevoli esperimenti; la quantizzazione da Millikan (1909-1913)." },
        { id: "coulomb", label: "Legge di Coulomb", x: 15, y: 40, color: "#2563eb", html: "F = k·q₁q₂/r²: attrattiva o repulsiva, 1/r².", why: "Misurata da Coulomb (1785) con la bilancia di torsione. La dipendenza 1/r² è legata alle tre dimensioni dello spazio: l'«influenza» di una carica si distribuisce sulla superficie di una sfera 4πr²." },
        { id: "campo", label: "Campo elettrico", x: 85, y: 40, color: "#16a34a", html: "E = F/q: vettore definito in ogni punto, con linee di campo.", why: "Faraday introdusse il campo per eliminare l'«azione a distanza»: la carica modifica lo spazio e la modifica agisce sulle altre cariche. Maxwell lo rese matematica ed estese l'idea ai campi magnetici e alle onde." },
        { id: "sovrapp", label: "Sovrapposizione", x: 52, y: 52, color: "#f59e0b", html: "Il campo di più cariche è la somma vettoriale dei campi.", why: "Verificata sperimentalmente: le forze elettriche sono lineari, cioè la presenza di una carica non cambia quella delle altre." },
        { id: "gauss", label: "Teorema di Gauss", x: 25, y: 80, color: "#8b5cf6", html: "Φ(E) = Q_int/ε₀: il flusso dipende solo dalla carica interna.", why: "Equivale alla legge di Coulomb: se E ∝ 1/r², il flusso attraverso una sfera (E × 4πr²) non dipende da r. Vale per superfici qualsiasi e, con la simmetria, permette di calcolare E facilmente." },
        { id: "conduttori", label: "Conduttori in equilibrio", x: 78, y: 82, color: "#64748b", html: "E = 0 all'interno; carica sulla superficie; E = σ/ε₀ fuori.", why: "Se all'interno E non fosse nullo le cariche libere si sposterebbero: l'equilibrio richiede E = 0. Da Gauss segue che la carica può stare solo sulla superficie." }
      ],
      edges: [["carica", "coulomb", "genera"], ["coulomb", "campo", "si riformula come"], ["campo", "sovrapp", "obbedisce a"], ["campo", "gauss", "ha flusso"], ["gauss", "conduttori", "spiega"]]
    }
  ],
  glossary: [
    { t: "Carica elementare", d: "e = 1,602·10⁻¹⁹ C: carica del protone, in valore assoluto uguale a quella dell'elettrone." },
    { t: "Coulomb (C)", d: "Unità di carica: circa 6,24·10¹⁸ cariche elementari." },
    { t: "Induzione elettrostatica", d: "Redistribuzione delle cariche in un conduttore per la vicinanza di un corpo carico, senza contatto." },
    { t: "Legge di Coulomb", d: "F = k·q₁q₂/r²: forza tra due cariche puntiformi." },
    { t: "Costante dielettrica ε₀", d: "ε₀ = 8,85·10⁻¹² C²/(N·m²), con k = 1/(4πε₀)." },
    { t: "Campo elettrico", d: "Forza per unità di carica positiva di prova: E = F/q, in N/C." },
    { t: "Linee di campo", d: "Curve tangenti al campo in ogni punto; escono dalle cariche positive ed entrano nelle negative." },
    { t: "Flusso del campo", d: "Φ = E·S·cosθ: misura del numero di linee di campo che attraversano una superficie." },
    { t: "Teorema di Gauss", d: "Il flusso attraverso una superficie chiusa è Q_interna/ε₀." },
    { t: "Gabbia di Faraday", d: "Cavità in un conduttore: all'interno il campo elettrico è nullo." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cosa significa dire che la carica è quantizzata?", options: ["Si può misurare con precisione", "Ogni carica è multiplo intero della carica elementare e", "Si annulla sempre", "Può assumere qualsiasi valore reale"], answer: 1, explain: "Le cariche osservabili sono q = n·e, con n intero (escludendo i quark liberi, mai osservati)." },
      { type: "num", q: "Due cariche di 2 µC e 3 µC distano 0,6 m nel vuoto. Quanto vale la forza? (k = 9·10⁹ N·m²/C²)", answer: 0.15, tol: 0.005, unit: "N", explain: "F = 9·10⁹ × 2·10⁻⁶ × 3·10⁻⁶/0,36 = 0,054/0,36 = 0,15 N." },
      { type: "tf", q: "La forza tra due cariche puntiformi è inversamente proporzionale alla loro distanza.", answer: false, explain: "È inversamente proporzionale al quadrato della distanza." },
      { type: "num", q: "Una carica di 5 nC genera a 3 m di distanza un campo di intensità: (k = 9·10⁹ N·m²/C²)", answer: 5, tol: 0.05, unit: "N/C", explain: "E = kQ/r² = 9·10⁹ × 5·10⁻⁹/9 = 5 N/C." },
      { type: "mc", q: "Una carica negativa si trova in un campo elettrico E⃗. La forza su di essa è:", options: ["parallela a E⃗", "opposta a E⃗", "perpendicolare a E⃗", "nulla"], answer: 1, explain: "F⃗ = q·E⃗: se q è negativa la forza è opposta al campo." },
      { type: "num", q: "In un campo uniforme di 2,0·10⁴ N/C, quale forza agisce su una carica di 3,0 µC (in N)?", answer: 0.06, tol: 0.001, unit: "N", explain: "F = qE = 3,0·10⁻⁶ × 2,0·10⁴ = 0,060 N." },
      { type: "mc", q: "Una carica puntiforme Q si trova al centro di una sfera immaginaria. Se la carica viene spostata (restando dentro la sfera), il flusso totale:", options: ["aumenta", "diminuisce", "non cambia", "si annulla"], answer: 2, explain: "Per Gauss il flusso dipende solo dalla carica interna, non dalla sua posizione." },
      { type: "tf", q: "All'interno di una gabbia di Faraday metallica, durante un temporale, il campo elettrico dovuto al fulmine è praticamente nullo.", answer: true, explain: "Le cariche si dispongono sulla superficie esterna del conduttore e all'interno E ≈ 0." },
      { type: "num", q: "Due lastre parallele hanno σ = 8,85·10⁻⁶ C/m². Quanto vale il campo tra le lastre (in 10⁵ N/C)? (ε₀ = 8,85·10⁻¹² C²/(N·m²))", answer: 10, tol: 0.1, unit: "·10⁵ N/C", explain: "E = σ/ε₀ = 8,85·10⁻⁶/8,85·10⁻¹² = 10⁶ N/C = 10·10⁵ N/C." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Franklin: il parafulmine", "Coulomb: la bilancia di torsione", "Faraday: la gabbia", "Millikan: la carica elementare"], explain: "1752 (Franklin), 1785 (Coulomb), 1836 (Faraday), 1909-1913 (Millikan)." }
    ]
  }
});
