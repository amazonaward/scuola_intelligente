TOPIC('it', {
  id: "l3-mat-successioni",
  title: "Successioni e progressioni",
  intro: "Un conto in banca che cresce del 3% ogni anno, una pila di tronchi in cui ogni fila ha un tronco in più della precedente, una palla che rimbalza sempre meno in alto, i numeri di Fibonacci nei fiori di girasole: tutti questi fenomeni sono <b>successioni</b>, cioè elenchi ordinati di numeri generati da una regola. Le più semplici e importanti sono le <b>progressioni aritmetiche</b> (si somma sempre lo stesso numero) e <b>geometriche</b> (si moltiplica sempre per lo stesso numero). In questa lezione impariamo a descriverle, a sommarle, e soprattutto a <b>dimostrare</b> con il <b>principio di induzione</b> che una formula vale per tutti i numeri naturali, infiniti compresi.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Che cos'è una successione",
      html: `<p>Una <b>successione</b> è una funzione che a ogni numero naturale n (a partire da 0 o da 1) associa un numero reale aₙ: si scrive (aₙ) = a₁, a₂, a₃, … Il numero aₙ è il <b>termine di posto n</b> (o termine generale). Una successione si può assegnare in due modi:</p>
<ul>
<li><b>per espressione esplicita</b> (formula chiusa): aₙ = 2n + 1 dà 3, 5, 7, 9, … Per trovare a₁₀₀ basta sostituire.</li>
<li><b>per ricorrenza</b> (ricorsivamente): si dà il primo termine e una regola che calcola ogni termine dai precedenti. Esempio: a₁ = 1, aₙ₊₁ = 2aₙ + 1 dà 1, 3, 7, 15, 31, … Un esempio celebre è la <b>successione di Fibonacci</b>: F₁ = F₂ = 1, Fₙ₊₂ = Fₙ₊₁ + Fₙ: 1, 1, 2, 3, 5, 8, 13, 21, …</li>
</ul>
<p>Una successione è <b>crescente</b> se aₙ₊₁ ≥ aₙ per ogni n, <b>decrescente</b> se aₙ₊₁ ≤ aₙ; è <b>limitata</b> se tutti i termini stanno in un intervallo. Per studiare la monotonia si guarda il segno della differenza aₙ₊₁ − aₙ.</p>
<p><b>Esempio.</b> aₙ = n²: differenza (n + 1)² − n² = 2n + 1 &gt; 0, quindi è crescente. aₙ = 1/n: 1/(n + 1) − 1/n = −1/(n(n + 1)) &lt; 0, decrescente e limitata (tra 0 e 1).</p>`
    },
    {
      type: "text",
      title: "Progressioni aritmetiche",
      html: `<p>Una <b>progressione aritmetica</b> è una successione in cui la <b>differenza</b> tra ogni termine e il precedente è costante: <b>aₙ₊₁ − aₙ = d</b> (la <b>ragione</b>). Esempi: 3, 7, 11, 15, … (d = 4); 10, 7, 4, 1, … (d = −3).</p>
<ul>
<li><b>Termine generale</b>: <b>aₙ = a₁ + (n − 1)d</b>. Più in generale aₙ = aₖ + (n − k)d.</li>
<li><b>Proprietà</b>: ogni termine (tranne il primo) è la <b>media aritmetica</b> dei due vicini: aₙ = (aₙ₋₁ + aₙ₊₁)/2. Per questo si chiama aritmetica.</li>
<li><b>Somma dei primi n termini</b>: <b>Sₙ = n(a₁ + aₙ)/2</b>: il numero dei termini per la media del primo e dell'ultimo.</li>
</ul>
<p><b>Perché vale la somma.</b> Scriviamo la somma due volte, la seconda al contrario:</p>
<p style="text-align:center">S = a₁ + a₂ + … + aₙ<br>S = aₙ + aₙ₋₁ + … + a₁</p>
<p>Sommando colonna per colonna ogni coppia vale a₁ + aₙ (perché quando si va avanti di d da una parte si torna indietro di d dall'altra), e le coppie sono n: 2S = n(a₁ + aₙ). Ecco il trucco che si attribuisce al giovane <b>Gauss</b>: secondo un aneddoto, a scuola calcolò 1 + 2 + … + 100 pensando a 50 coppie da 101, cioè 5050.</p>
<p><b>Esempio.</b> a₁ = 3, d = 4: a₁₀ = 3 + 9·4 = 39 e S₁₀ = 10(3 + 39)/2 = <b>210</b>. Quanti termini servono perché la somma di 1 + 2 + 3 + … superi 1000? n(n + 1)/2 &gt; 1000 → n = 45 dà 1035, n = 44 dà 990: serve n = 45.</p>`
    },
    {
      type: "svg",
      title: "Somma di Gauss: i numeri a coppie",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="20" y="35" font-size="16" fill="#334155" font-weight="bold">1 + 2 + 3 + … + 98 + 99 + 100</text>
<path d="M 28 50 Q 28 90 300 90 Q 572 90 572 50" fill="none" stroke="#2563eb" stroke-width="3"/>
<path d="M 60 50 Q 60 120 300 120 Q 540 120 540 50" fill="none" stroke="#16a34a" stroke-width="3"/>
<path d="M 92 50 Q 92 150 300 150 Q 508 150 508 50" fill="none" stroke="#ea580c" stroke-width="3"/>
<text x="300" y="80" font-size="16" fill="#1d4ed8" text-anchor="middle">1 + 100 = 101</text>
<text x="300" y="112" font-size="16" fill="#166534" text-anchor="middle">2 + 99 = 101</text>
<text x="300" y="144" font-size="16" fill="#9a3412" text-anchor="middle">3 + 98 = 101</text>
<text x="300" y="190" font-size="16" fill="#334155" text-anchor="middle">… 50 coppie, ognuna con somma 101</text>
<text x="300" y="230" font-size="18" fill="#7c3aed" text-anchor="middle" font-weight="bold">S = 50 · 101 = 5050</text>
<text x="300" y="265" font-size="16" fill="#334155" text-anchor="middle">In generale: Sₙ = n(a₁ + aₙ)/2</text>
</svg>`,
      caption: "Accoppiando il primo con l'ultimo, il secondo con il penultimo e così via, ogni coppia ha la stessa somma."
    },
    {
      type: "text",
      title: "Progressioni geometriche",
      html: `<p>Una <b>progressione geometrica</b> è una successione in cui il <b>rapporto</b> tra ogni termine e il precedente è costante: <b>aₙ₊₁ = q·aₙ</b> (<b>ragione q</b>, con q ≠ 0 e termini non nulli). Esempi: 2, 6, 18, 54, … (q = 3); 100, 50, 25, … (q = 1/2); 1, −2, 4, −8, … (q = −2, termini di segno alterno).</p>
<ul>
<li><b>Termine generale</b>: <b>aₙ = a₁ · qⁿ⁻¹</b>.</li>
<li><b>Proprietà</b>: per termini positivi, ogni termine è la <b>media geometrica</b> dei vicini: aₙ² = aₙ₋₁ · aₙ₊₁.</li>
<li><b>Somma dei primi n termini</b> (q ≠ 1): <b>Sₙ = a₁ · (qⁿ − 1)/(q − 1)</b> (se q = 1 tutti i termini sono uguali e Sₙ = n·a₁).</li>
</ul>
<p><b>Perché vale la somma.</b> Moltiplichiamo S = a₁ + a₁q + a₁q² + … + a₁qⁿ⁻¹ per q: qS = a₁q + a₁q² + … + a₁qⁿ. Sottraendo membro a membro quasi tutti i termini si elidono: qS − S = a₁qⁿ − a₁, cioè S(q − 1) = a₁(qⁿ − 1).</p>
<p><b>Esempio.</b> a₁ = 2, q = 3: a₆ = 2·3⁵ = 486 e S₆ = 2(3⁶ − 1)/(3 − 1) = 728 (infatti 2 + 6 + 18 + 54 + 162 + 486 = 728 ✔️).</p>
<p><b>Crescita esponenziale.</b> Con q &gt; 1 i termini crescono sempre più in fretta, con 0 &lt; q &lt; 1 decrescono verso 0. Se si investono 1000 € al 3% annuo composto, dopo n anni si ha 1000·1,03ⁿ, una progressione geometrica di ragione 1,03: dopo 10 anni 1000·1,03¹⁰ ≈ <b>1343,92 €</b>. Un investimento a interesse <i>semplice</i> sarebbe invece una progressione aritmetica: 1000 + 30n = 1300 €.</p>`
    },
    {
      type: "remember",
      title: "Aritmetica contro geometrica",
      html: `<table>
<tr><th></th><th>Aritmetica</th><th>Geometrica</th></tr>
<tr><td>Regola</td><td>si <b>somma</b> d</td><td>si <b>moltiplica</b> per q</td></tr>
<tr><td>Termine n-esimo</td><td>a₁ + (n − 1)d</td><td>a₁·qⁿ⁻¹</td></tr>
<tr><td>Somma di n termini</td><td>n(a₁ + aₙ)/2</td><td>a₁(qⁿ − 1)/(q − 1)</td></tr>
<tr><td>Crescita</td><td>lineare (grafico: punti allineati)</td><td>esponenziale</td></tr>
<tr><td>Nella vita</td><td>interesse semplice, risparmio di una cifra fissa</td><td>interesse composto, popolazioni, ammortamenti</td></tr>
</table>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: progressioni",
      questions: [
        { type: "num", q: "Progressione aritmetica con a₁ = 5 e d = 3: quanto vale a₈?", answer: 26, explain: "a₈ = 5 + 7·3 = 26." },
        { type: "num", q: "Progressione geometrica 3, 6, 12, …: quanto vale a₅?", answer: 48, explain: "q = 2: a₅ = 3·2⁴ = 48." },
        { type: "num", q: "Somma dei primi 20 numeri naturali positivi 1 + 2 + … + 20.", answer: 210, explain: "S = 20·21/2 = 210." }
      ]
    },
    {
      type: "text",
      title: "Serie geometrica: sommare infiniti termini",
      html: `<p>Che cosa succede se si sommano <b>infiniti</b> termini di una progressione geometrica con |q| &lt; 1? Gli addendi diventano sempre più piccoli e, sorprendentemente, la somma non cresce all'infinito. Nella formula Sₙ = a₁(1 − qⁿ)/(1 − q) il termine qⁿ tende a 0 quando n cresce (se |q| &lt; 1), quindi:</p>
<p style="text-align:center"><b>S = a₁ + a₁q + a₁q² + … = a₁/(1 − q)</b>, per |q| &lt; 1</p>
<p><b>Esempio 1.</b> 1 + 1/2 + 1/4 + 1/8 + … = 1/(1 − 1/2) = <b>2</b>. Se si cammina verso un muro percorrendo prima metà della distanza, poi metà della rimanente e così via, si copre una distanza finita in infiniti passi. È il <b>paradosso di Zenone</b> (Achille e la tartaruga, V secolo a.C.): il paradosso nasce dall'idea che una somma infinita debba essere infinita, mentre non è vero.</p>
<p><b>Esempio 2: 0,999… = 1.</b> 0,999… = 9/10 + 9/100 + 9/1000 + … = (9/10)/(1 − 1/10) = (9/10)/(9/10) = 1. Non è un'approssimazione: i due numeri sono <i>uguali</i>.</p>
<p><b>Esempio 3: la decimale periodica come frazione.</b> 0,272727… = 27/100 + 27/10000 + … = (27/100)/(1 − 1/100) = 27/99 = 3/11.</p>
<p>Se invece |q| ≥ 1 la serie non converge: 1 + 2 + 4 + 8 + … diverge a +∞.</p>`
    },
    {
      type: "text",
      title: "Il principio di induzione",
      html: `<p>Come si può dimostrare che una formula vale per <b>tutti</b> gli infiniti numeri naturali? Non si possono controllare uno per uno. Il <b>principio di induzione</b> ci riesce con due soli passi. Sia P(n) un'affermazione che dipende da n. Se</p>
<ol>
<li><b>passo base</b>: P(n₀) è vera (di solito n₀ = 0 o 1);</li>
<li><b>passo induttivo</b>: per ogni n ≥ n₀, <i>se</i> P(n) è vera (<b>ipotesi induttiva</b>) <i>allora</i> è vera anche P(n + 1);</li>
</ol>
<p>allora P(n) è vera per <b>ogni</b> n ≥ n₀. L'immagine è quella delle <b>tessere del domino</b>: se la prima cade e ogni tessera che cade fa cadere la successiva, cadranno tutte.</p>
<p><b>Esempio 1: 1 + 2 + … + n = n(n + 1)/2.</b></p>
<ul>
<li>Base (n = 1): 1 = 1·2/2 ✔️.</li>
<li>Passo: supponiamo vera per n. Allora 1 + … + n + (n + 1) = n(n + 1)/2 + (n + 1) = (n + 1)(n/2 + 1) = (n + 1)(n + 2)/2, che è la formula con n + 1 al posto di n ✔️.</li>
</ul>
<p><b>Esempio 2: la somma dei primi n numeri dispari è n².</b> 1 + 3 + 5 + … + (2n − 1) = n². Base: 1 = 1². Passo: n² + (2n + 1) = n² + 2n + 1 = (n + 1)² ✔️. (Geometricamente, un quadrato n × n si ingrandisce aggiungendo una "L" di 2n + 1 quadretti.)</p>
<p><b>Esempio 3: 2ⁿ &gt; n per ogni n ≥ 0.</b> Base: 2⁰ = 1 &gt; 0. Passo: se 2ⁿ &gt; n, allora 2ⁿ⁺¹ = 2·2ⁿ &gt; 2n ≥ n + 1 (per n ≥ 1; per n = 0 si verifica direttamente 2 &gt; 1).</p>
<p><b>Attenzione:</b> senza il passo base l'induzione non funziona. L'affermazione "n = n + 1" soddisfa il passo induttivo (se n = n + 1 allora n + 1 = n + 2) ma è falsa per ogni n: manca il primo tassello che cade.</p>`
    },
    {
      type: "svg",
      title: "Il domino dell'induzione",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="40" y="90" width="26" height="90" rx="4" fill="#16a34a" transform="rotate(25 53 180)"/>
<rect x="110" y="90" width="26" height="90" rx="4" fill="#16a34a" transform="rotate(12 123 180)"/>
<rect x="180" y="90" width="26" height="90" rx="4" fill="#94a3b8"/>
<rect x="250" y="90" width="26" height="90" rx="4" fill="#94a3b8"/>
<rect x="320" y="90" width="26" height="90" rx="4" fill="#94a3b8"/>
<rect x="390" y="90" width="26" height="90" rx="4" fill="#94a3b8"/>
<rect x="460" y="90" width="26" height="90" rx="4" fill="#94a3b8"/>
<text x="53" y="210" font-size="16" fill="#166534" text-anchor="middle" font-weight="bold">P(1)</text>
<text x="123" y="210" font-size="16" fill="#166534" text-anchor="middle" font-weight="bold">P(2)</text>
<text x="193" y="210" font-size="16" fill="#475569" text-anchor="middle">P(3)</text>
<text x="263" y="210" font-size="16" fill="#475569" text-anchor="middle">P(4)</text>
<text x="333" y="210" font-size="16" fill="#475569" text-anchor="middle">P(5)</text>
<text x="500" y="140" font-size="22" fill="#475569">…</text>
<text x="40" y="60" font-size="16" fill="#9a3412" font-weight="bold">1) Base: la prima tessera cade (P(1) è vera)</text>
<text x="40" y="250" font-size="16" fill="#1d4ed8" font-weight="bold">2) Passo: se cade la n-esima, cade la (n + 1)-esima</text>
<text x="40" y="280" font-size="16" fill="#7c3aed" font-weight="bold">Conclusione: cadono tutte, P(n) è vera per ogni n</text>
</svg>`,
      caption: "Il passo base fa cadere la prima tessera; il passo induttivo garantisce che ogni tessera trascini la successiva."
    },
    {
      type: "example",
      title: "Esempio pratico: la scacchiera e i chicchi di grano",
      html: `<p>Secondo la leggenda dell'inventore degli scacchi, un sovrano gli promise qualsiasi ricompensa e lui chiese un chicco di grano sulla prima casella della scacchiera, due sulla seconda, quattro sulla terza e così via raddoppiando. È una progressione geometrica con a₁ = 1 e q = 2, su 64 caselle. La somma è S₆₄ = (2⁶⁴ − 1)/(2 − 1) = 2⁶⁴ − 1 = <b>18 446 744 073 709 551 615</b> chicchi: più di 18 miliardi di miliardi, molto più di quanto il mondo ne produca in secoli.</p>
<p>Il messaggio è che la crescita esponenziale è <b>controintuitiva</b>: anche partendo da un chicco, il raddoppio continuo supera in fretta ogni immaginazione. Lo stesso accade con un virus che raddoppia ogni giorno, con una catena di messaggi, con un debito che accumula interessi composti.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: tronchi, gradini e rimbalzi",
      html: `<ul>
<li><b>Tronchi accatastati</b>: una catasta ha 12 tronchi nella fila più bassa e uno in meno in ogni fila superiore, fino a 1 nella fila più alta. È una progressione aritmetica di 12 termini (d = −1): in tutto 12·(12 + 1)/2 = <b>78 tronchi</b>.</li>
<li><b>Risparmio crescente</b>: Marta mette da parte 100 € il primo mese e ogni mese 10 € in più del precedente. Il dodicesimo mese versa 100 + 11·10 = 210 € e in un anno ha risparmiato S₁₂ = 12(100 + 210)/2 = <b>1860 €</b>.</li>
<li><b>Palla che rimbalza</b>: lasciata cadere da 2 m, rimbalza ogni volta fino a 3/4 dell'altezza precedente. Le altezze dei rimbalzi 1,5 m; 1,125 m; … formano una geometrica di ragione 3/4. La distanza totale percorsa (discese e salite) è 2 + 2·(1,5/(1 − 3/4)) = 2 + 2·6 = <b>14 m</b>. Infiniti rimbalzi, distanza finita!</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Fibonacci e la natura",
      html: `<p>Leonardo Pisano, detto <b>Fibonacci</b>, nel 1202 pubblicò il <i>Liber abaci</i>, che diffuse in Europa le cifre indo-arabiche. Nel libro compare un problema sulla riproduzione dei conigli, da cui nasce la successione 1, 1, 2, 3, 5, 8, 13, 21, … Il rapporto tra termini consecutivi si avvicina al <b>rapporto aureo</b> φ = (1 + √5)/2 ≈ 1,618. Nei girasoli, nelle pigne e negli ananas le spirali dei semi o delle scaglie sono spesso in numero pari a due numeri di Fibonacci consecutivi (per esempio 21 e 34 oppure 34 e 55). Non è una magia: è il modo più efficiente di impacchettare i semi.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Peano e gli assiomi dei naturali",
      html: `<p>Il principio di induzione è uno degli <b>assiomi di Peano</b>, formulati dal matematico italiano <b>Giuseppe Peano</b> nel 1889 per definire i numeri naturali con pochissime regole: esiste lo 0, ogni numero ha un successivo e, soprattutto, un insieme che contiene 0 e il successivo di ogni suo elemento contiene tutti i naturali. Era uno dei grandi obiettivi del tempo: fondare l'aritmetica su basi rigorose. L'induzione è dunque non un trucco, ma ciò che rende i naturali <i>i naturali</i>, la "scala" senza buchi che sale all'infinito.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire successioni e induzione",
      intro: "Se la dimostrazione per induzione ti sembra un gioco di prestigio, prova a guardarla da questi punti di vista.",
      tabs: [
        {
          label: "🧱 Mattoncini a gradini",
          html: `<p>La somma 1 + 2 + 3 + … + n si può vedere come una <b>scalinata di mattoncini</b>: una colonna di 1, una di 2, … una di n. Due scale uguali, una rovesciata sull'altra, formano un rettangolo n × (n + 1), che ha n(n + 1) mattoncini. Dunque una scala ne contiene la metà, n(n + 1)/2. È la stessa dimostrazione di Gauss, ma <b>visiva</b>. Con i cubetti 3D qui sotto puoi costruire il rettangolo n × (n + 1) variando i numeri.</p>`,
          scene: "blocks",
          options: { mode: "array", a: 5, b: 6 }
        },
        {
          label: "📈 Lineare e esponenziale",
          html: `<p>Una progressione aritmetica ha grafico a <b>punti allineati</b>: la differenza tra termini successivi non cambia, come la retta y = mx + q studiata al secondo anno (la ragione d è il coefficiente angolare!). Una progressione geometrica ha un grafico che <b>si impenna</b>: la differenza tra termini successivi cresce a sua volta. Per questo un conto con interesse composto prima o poi supera sempre uno con interesse semplice, anche se parte con un tasso più basso.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><line x1="40" y1="260" x2="560" y2="260" stroke="#475569" stroke-width="2"/><line x1="40" y1="20" x2="40" y2="260" stroke="#475569" stroke-width="2"/><g fill="#2563eb"><circle cx="80" cy="230" r="6"/><circle cx="160" cy="200" r="6"/><circle cx="240" cy="170" r="6"/><circle cx="320" cy="140" r="6"/><circle cx="400" cy="110" r="6"/><circle cx="480" cy="80" r="6"/></g><line x1="80" y1="230" x2="480" y2="80" stroke="#2563eb" stroke-width="2" stroke-dasharray="6 5"/><g fill="#ea580c"><circle cx="80" cy="245" r="6"/><circle cx="160" cy="240" r="6"/><circle cx="240" cy="228" r="6"/><circle cx="320" cy="205" r="6"/><circle cx="400" cy="160" r="6"/><circle cx="480" cy="75" r="6"/></g><text x="60" y="40" font-size="16" fill="#1d4ed8" font-weight="bold">aritmetica: aₙ = a₁ + (n−1)d</text><text x="60" y="65" font-size="16" fill="#9a3412" font-weight="bold">geometrica: aₙ = a₁ qⁿ⁻¹ (q &gt; 1)</text></svg>`
        },
        {
          label: "🎯 L'induzione come ricetta",
          html: `<p>Pensa all'induzione come a una <b>ricetta in due ingredienti</b>. Ingrediente 1 (base): "so già fare il primo piatto". Ingrediente 2 (passo): "se so fare il piatto numero n, so fare il numero n + 1". Con una ricetta così so cucinare qualsiasi piatto della sequenza, fino al milionesimo. Per la dimostrazione, il segreto è nel passo: bisogna partire dall'ipotesi su n, <i>usarla davvero</i> e arrivare alla tesi su n + 1. Un errore frequente è dimostrare il passo senza mai usare l'ipotesi induttiva: in quel caso di solito non si sta dimostrando niente.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa di successioni e progressioni: tocca i nodi per scoprire il perché",
      nodes: [
        { id: "succ", label: "Successione", x: 50, y: 6, color: "#6366f1", html: "Funzione dai naturali ai reali: a₁, a₂, a₃, …", why: "Le successioni sono il modo più semplice di descrivere processi che avanzano a passi discreti: il tempo in anni, i giri, i rimbalzi." },
        { id: "arit", label: "Progressione aritmetica", x: 18, y: 32, color: "#16a34a", html: "aₙ₊₁ − aₙ = d; aₙ = a₁ + (n − 1)d.", why: "Una differenza costante significa variazione lineare: è la versione discreta della retta, con d come pendenza." },
        { id: "geo", label: "Progressione geometrica", x: 82, y: 32, color: "#f59e0b", html: "aₙ₊₁ = q·aₙ; aₙ = a₁qⁿ⁻¹.", why: "Un rapporto costante significa variazione proporzionale al valore attuale: è la crescita esponenziale (interesse composto, popolazioni) descritta a passi." },
        { id: "somme", label: "Somme", x: 18, y: 62, color: "#ef4444", html: "Sₙ = n(a₁ + aₙ)/2 e Sₙ = a₁(qⁿ − 1)/(q − 1).", why: "La somma aritmetica nasce dall'accoppiare i termini (Gauss); quella geometrica dal moltiplicare per q e sottrarre, così quasi tutto si elide." },
        { id: "serie", label: "Serie geometrica", x: 82, y: 62, color: "#a855f7", html: "Per |q| &lt; 1: S = a₁/(1 − q).", why: "Se |q| &lt; 1, qⁿ tende a 0: infiniti addendi sempre più piccoli danno una somma finita; risolve l'apparente paradosso di Zenone." },
        { id: "ind", label: "Induzione", x: 50, y: 86, color: "#0ea5e9", html: "Base + passo induttivo ⇒ vale per ogni n.", why: "È il quinto assioma di Peano (1889): i naturali sono quelli e solo quelli raggiungibili partendo da 0 e passando al successivo. Perciò dimostrare base e passo basta per tutti." },
        { id: "fib", label: "Ricorrenze: Fibonacci", x: 50, y: 50, color: "#14b8a6", html: "Fₙ₊₂ = Fₙ₊₁ + Fₙ.", why: "Fibonacci (1202) descrisse la riproduzione dei conigli: ogni termine dipende da due precedenti. Le proprietà di queste successioni si dimostrano molto spesso per induzione." }
      ],
      edges: [
        ["succ", "arit", "caso particolare"],
        ["succ", "geo", "caso particolare"],
        ["arit", "somme", "ha"],
        ["geo", "somme", "ha"],
        ["geo", "serie", "se |q| minore di 1"],
        ["somme", "ind", "si dimostrano con"],
        ["succ", "fib", "per ricorrenza"],
        ["fib", "ind", "si studia con"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: induzione e serie",
      questions: [
        { type: "tf", q: "Per dimostrare per induzione basta provare il passo induttivo, senza passo base.", answer: false, explain: "Servono entrambi: senza il passo base manca la prima tessera del domino (l'affermazione 'n = n + 1' ha un passo induttivo valido ma è sempre falsa)." },
        { type: "num", q: "Calcola la somma infinita 3 + 1 + 1/3 + 1/9 + …", answer: 4.5, tol: 0.001, explain: "a₁ = 3, q = 1/3: S = 3/(1 − 1/3) = 3/(2/3) = 9/2 = 4,5." },
        { type: "mc", q: "Quale ragione ha la progressione 80, 40, 20, 10, …?", options: ["−40", "1/2", "2"], answer: 1, explain: "Ogni termine è la metà del precedente: progressione geometrica con q = 1/2." }
      ]
    }
  ],
  glossary: [
    { t: "Successione", d: "Funzione che a ogni numero naturale n associa un numero aₙ: un elenco ordinato di numeri." },
    { t: "Termine generale", d: "L'espressione che permette di calcolare aₙ direttamente a partire da n." },
    { t: "Ricorrenza", d: "Definizione di una successione dando i primi termini e una regola che calcola ogni termine dai precedenti." },
    { t: "Progressione aritmetica", d: "Successione con differenza costante d tra termini consecutivi." },
    { t: "Progressione geometrica", d: "Successione con rapporto costante q tra termini consecutivi." },
    { t: "Ragione", d: "La differenza d (progressione aritmetica) o il rapporto q (geometrica)." },
    { t: "Serie", d: "Somma di infiniti termini di una successione, quando ha senso come numero finito." },
    { t: "Principio di induzione", d: "Se P(n₀) è vera e P(n) ⇒ P(n + 1), allora P(n) è vera per ogni n ≥ n₀." },
    { t: "Ipotesi induttiva", d: "L'assunzione che P(n) sia vera, usata per dimostrare P(n + 1)." },
    { t: "Successione di Fibonacci", d: "1, 1, 2, 3, 5, 8, … dove ogni termine è la somma dei due precedenti." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Progressione aritmetica con a₁ = 7 e d = −2: quanto vale a₆?", answer: -3, explain: "a₆ = 7 + 5·(−2) = −3." },
      { type: "num", q: "Somma dei primi 10 termini della progressione aritmetica 2, 5, 8, …", answer: 155, explain: "a₁₀ = 2 + 9·3 = 29; S₁₀ = 10(2 + 29)/2 = 155." },
      { type: "num", q: "Progressione geometrica con a₁ = 5 e q = 2: quanto vale a₄?", answer: 40, explain: "a₄ = 5·2³ = 40." },
      { type: "num", q: "Somma dei primi 5 termini di 1, 3, 9, 27, …", answer: 121, explain: "S₅ = (3⁵ − 1)/(3 − 1) = 242/2 = 121." },
      { type: "mc", q: "Per quali q una progressione geometrica ha somma infinita finita?", options: ["|q| &lt; 1", "q &gt; 1", "q = 1"], answer: 0, explain: "Con |q| &lt; 1, qⁿ → 0 e S = a₁/(1 − q). Se |q| ≥ 1 la serie non converge." },
      { type: "tf", q: "0,999… è uguale a 1.", answer: true, explain: "È la serie geometrica con a₁ = 9/10, q = 1/10: S = (9/10)/(9/10) = 1." },
      { type: "mc", q: "In una dimostrazione per induzione, il passo induttivo consiste nel…", options: ["verificare la formula per n = 1", "dimostrare che P(n) ⇒ P(n + 1)", "controllare molti casi particolari"], answer: 1, explain: "Il passo base verifica il primo caso; il passo induttivo mostra che se vale per n allora vale per n + 1." },
      { type: "tf", q: "La successione aₙ = 1/n è crescente.", answer: false, explain: "1/(n + 1) &lt; 1/n: è decrescente (e tende a 0)." },
      { type: "text", q: "Come si chiama il matematico italiano che nel 1889 formulò gli assiomi dei numeri naturali, tra cui l'induzione? (cognome)", answer: ["peano", "giuseppe peano"], explain: "Giuseppe Peano, nell'opera Arithmetices principia nova methodo exposita (1889)." },
      { type: "order", q: "Metti in ordine i passi di una dimostrazione per induzione.", items: ["Verificare P(1) (passo base)", "Supporre vera P(n) (ipotesi induttiva)", "Dimostrare P(n + 1) usando P(n)", "Concludere che P(n) vale per ogni n"], explain: "Base, ipotesi, passo, conclusione: come tessere del domino." }
    ]
  }
});
