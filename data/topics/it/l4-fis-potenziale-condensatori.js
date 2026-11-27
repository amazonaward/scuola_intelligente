TOPIC('it', {
  id: "l4-fis-potenziale-condensatori",
  title: "Potenziale elettrico e condensatori",
  intro: "Per sollevare un sasso bisogna fare lavoro e il sasso lo restituisce cadendo: la gravità è una forza <b>conservativa</b> e si può definire un'energia potenziale. Lo stesso vale per la forza elettrica. Da questa idea nascono due grandezze fondamentali, l'<b>energia potenziale elettrica</b> e il <b>potenziale</b> (la «tensione» di pile e prese di corrente), e un dispositivo che immagazzina carica ed energia: il <b>condensatore</b>. Vedremo cosa significa «volt», come si calcola la capacità di due lastre parallele, come si collegano più condensatori e quanta energia può contenere un campo elettrico.",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "Energia potenziale elettrica",
      html: `<p>La forza elettrostatica, come quella gravitazionale, è <b>conservativa</b>: il lavoro che compie su una carica che si sposta da A a B <b>non dipende dal percorso</b>, ma solo dai punti iniziale e finale (equivalentemente: il lavoro su un percorso chiuso è nullo). Perciò si può associare ad ogni posizione un'<b>energia potenziale elettrica U</b>, definita in modo che il lavoro del campo sia W<sub>A→B</sub> = −ΔU = U<sub>A</sub> − U<sub>B</sub>.</p>
<p><b>Campo uniforme.</b> Una carica positiva q in un campo uniforme E subisce la forza F = qE. Se si sposta di una distanza d nel verso del campo, il lavoro è <b>W = q·E·d</b>, e l'energia potenziale <b>diminuisce</b> dello stesso valore: è come una pallina che cade in discesa. Se la carica viene spostata <b>contro</b> il campo, serve lavoro esterno e U aumenta. Per una carica negativa i versi si invertono.</p>
<p><b>Due cariche puntiformi</b> q<sub>1</sub> e q<sub>2</sub> a distanza r, scegliendo U = 0 a distanza infinita:</p>
<p style="text-align:center"><b>U = k · q<sub>1</sub> · q<sub>2</sub> / r</b></p>
<p>Il segno è fondamentale: se le cariche hanno <b>lo stesso segno</b> U &gt; 0 (per avvicinarle bisogna fare lavoro: si «carica una molla»); se hanno <b>segni opposti</b> U &lt; 0 (sono «legate»: per allontanarle bisogna fornire energia). Per più cariche l'energia del sistema è la somma su tutte le coppie. Vale la conservazione dell'energia: <b>½mv² + U = costante</b> per una carica che si muove sotto l'azione del solo campo.</p>
<p>Nell'atomo di idrogeno l'energia potenziale elettrica dell'elettrone al raggio di Bohr (5,29·10<sup>-11</sup> m) è U = −k·e²/r ≈ −27,2 eV; aggiungendo l'energia cinetica (+13,6 eV) si ottiene l'energia totale −13,6 eV: serve proprio questa energia per <b>ionizzare</b> l'atomo.</p>`
    },
    {
      type: "text",
      title: "Il potenziale e la differenza di potenziale",
      html: `<p>L'energia potenziale dipende dalla carica che si sta spostando; è utile una grandezza che dipenda solo dal campo. Si definisce il <b>potenziale elettrico</b> in un punto come energia potenziale <b>per unità di carica</b>:</p>
<p style="text-align:center"><b>V = U / q</b> &nbsp; (unità: volt, 1 V = 1 J/C)</p>
<p>Contano solo le <b>differenze</b> di potenziale (d.d.p., o «tensione»): il lavoro del campo su una carica q che va da A a B è</p>
<p style="text-align:center"><b>W<sub>A→B</sub> = q · (V<sub>A</sub> − V<sub>B</sub>) = −q·ΔV</b></p>
<p>Il potenziale ha il nome di <b>volt</b> in onore di <b>Alessandro Volta</b> (1745-1827). Per esempio, una pila da 1,5 V fornisce 1,5 J ad ogni coulomb di carica che la attraversa. Una carica positiva si muove spontaneamente <b>verso potenziali minori</b>, una negativa verso potenziali maggiori.</p>
<ul>
<li><b>Carica puntiforme Q</b>: <b>V = k·Q/r</b> (zero all'infinito; positivo se Q &gt; 0, negativo se Q &lt; 0). Per più cariche si sommano i potenziali (scalari, quindi più facile dei campi vettoriali!).</li>
<li><b>Campo uniforme</b>: tra due punti a distanza d lungo il campo, <b>ΔV = E·d</b>, da cui l'altra unità del campo elettrico, <b>V/m</b> = N/C. In generale E è la derivata cambiata di segno del potenziale rispetto allo spazio: E = −dV/dx; il campo punta verso i potenziali decrescenti, nella direzione di massima diminuzione di V.</li>
<li><b>Elettronvolt</b>: l'energia guadagnata da un elettrone attraversando 1 V, <b>1 eV = 1,602·10<sup>-19</sup> J</b>. È l'unità naturale per atomi e particelle: l'energia di legame dell'idrogeno è 13,6 eV; i fotoni visibili hanno 1,6-3,1 eV.</li>
</ul>
<p>Le <b>superfici equipotenziali</b> sono i luoghi dei punti con lo stesso potenziale: sono sempre <b>perpendicolari alle linee di campo</b> (spostandosi lungo una superficie equipotenziale il campo non compie lavoro) e sono più ravvicinate dove il campo è più intenso. Un <b>conduttore in equilibrio</b> è un volume equipotenziale: sulla sua superficie e al suo interno V è costante.</p>`
    },
    {
      type: "svg",
      title: "Linee di campo e superfici equipotenziali",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<rect x="90" y="50" width="420" height="12" fill="#ef4444"/>
<rect x="90" y="238" width="420" height="12" fill="#2563eb"/>
<text x="300" y="40" font-size="15" fill="#b91c1c" text-anchor="middle" font-weight="bold">piastra positiva  V = 12 V</text>
<text x="300" y="275" font-size="15" fill="#1d4ed8" text-anchor="middle" font-weight="bold">piastra negativa  V = 0</text>
<g stroke="#475569" stroke-width="2.5">
<line x1="150" y1="64" x2="150" y2="228"/><line x1="230" y1="64" x2="230" y2="228"/><line x1="310" y1="64" x2="310" y2="228"/><line x1="390" y1="64" x2="390" y2="228"/><line x1="470" y1="64" x2="470" y2="228"/>
</g>
<g fill="#475569"><polygon points="150,228 144,212 156,212"/><polygon points="230,228 224,212 236,212"/><polygon points="310,228 304,212 316,212"/><polygon points="390,228 384,212 396,212"/><polygon points="470,228 464,212 476,212"/></g>
<g stroke="#16a34a" stroke-width="2.5" stroke-dasharray="8 5">
<line x1="90" y1="105" x2="510" y2="105"/><line x1="90" y1="150" x2="510" y2="150"/><line x1="90" y1="195" x2="510" y2="195"/>
</g>
<text x="95" y="98" font-size="14" fill="#15803d">9 V</text>
<text x="95" y="143" font-size="14" fill="#15803d">6 V</text>
<text x="95" y="188" font-size="14" fill="#15803d">3 V</text>
<text x="515" y="154" font-size="15" fill="#475569">E</text>
<path d="M545 100 L 545 190" stroke="#7c3aed" stroke-width="3"/>
<polygon points="545,190 539,178 551,178" fill="#7c3aed"/>
<text x="560" y="150" font-size="14" fill="#6d28d9">ΔV = E·d</text>
</g>
</svg>`,
      caption: "Tra due piastre parallele il campo è uniforme (frecce nere) e il potenziale scende linearmente dalla piastra positiva alla negativa. Le superfici equipotenziali (verde) sono piani paralleli alle piastre, perpendicolari al campo."
    },
    {
      type: "example",
      title: "Elettroni accelerati da una tensione",
      html: `<p>Un elettrone parte da fermo e viene accelerato da una d.d.p. di <b>100 V</b>. Il lavoro del campo è W = e·ΔV = 100 eV = 1,60·10<sup>-17</sup> J. Questa energia diventa cinetica: ½mv² = 1,60·10<sup>-17</sup> J, quindi v = √(2 × 1,60·10<sup>-17</sup>/9,11·10<sup>-31</sup>) ≈ <b>5,9·10<sup>6</sup> m/s</b> (circa il 2% della velocità della luce: in questo caso si può ancora usare la fisica non relativistica). Con 10 000 V (tubo catodico di un vecchio televisore) la velocità raggiunge ≈ 0,2 c e bisogna già correggere con la relatività.</p>
<p><b>Potenziale di una carica.</b> Una carica Q = 2,0 nC crea a r = 3,0 cm il potenziale V = 8,99·10<sup>9</sup> × 2,0·10<sup>-9</sup>/0,030 ≈ <b>600 V</b>. Se portiamo da molto lontano una carica q = 3,0 nC fino a quella distanza, il lavoro esterno necessario è U = qV = 3,0·10<sup>-9</sup> × 600 = 1,8·10<sup>-6</sup> J.</p>
<p><b>Campo uniforme.</b> Due piastre distanti 2,0 cm con una d.d.p. di 400 V hanno E = ΔV/d = 400/0,020 = <b>2,0·10<sup>4</sup> V/m</b>.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: potenziale",
      questions: [
        { type: "num", q: "Quale lavoro compie il campo su una carica di 2 C che attraversa una d.d.p. di 5 V?", answer: 10, tol: 0.01, unit: "J", explain: "W = q·ΔV = 2 × 5 = 10 J." },
        { type: "mc", q: "Due piastre distano 5 cm e hanno una d.d.p. di 100 V. Quanto vale il campo uniforme tra esse?", options: ["20 V/m", "500 V/m", "2000 V/m", "5000 V/m"], answer: 2, explain: "E = ΔV/d = 100/0,05 = 2000 V/m." },
        { type: "tf", q: "Una carica negativa lasciata libera in un campo si muove verso potenziali più bassi.", answer: false, explain: "Le cariche negative si muovono verso potenziali più alti (la loro energia potenziale qV diminuisce); le positive verso potenziali più bassi." }
      ]
    },
    {
      type: "text",
      title: "Capacità e condensatori",
      html: `<p>Un <b>condensatore</b> è un dispositivo formato da due conduttori (le <b>armature</b>) separati da un isolante: collegandoli a un generatore, su un'armatura si accumula una carica +Q e sull'altra −Q. L'esperienza mostra che tra le armature compare una differenza di potenziale <b>ΔV proporzionale a Q</b>. Il rapporto è la <b>capacità</b>:</p>
<p style="text-align:center"><b>C = Q / ΔV</b> &nbsp; (unità: <b>farad</b>, 1 F = 1 C/V)</p>
<p>La capacità dipende solo dalla <b>geometria</b> (e dal materiale tra le armature), non da Q o ΔV. Il farad è un'unità enorme: in elettronica si usano il microfarad (µF = 10<sup>-6</sup> F), il nanofarad (nF) e il picofarad (pF). Il nome è in onore di <b>Michael Faraday</b>.</p>
<p><b>Condensatore piano</b> (due lastre parallele di area S a distanza d, con S molto più grande di d²): dal teorema di Gauss E = σ/ε<sub>0</sub> = Q/(ε<sub>0</sub>·S) e ΔV = E·d, quindi</p>
<p style="text-align:center"><b>C = ε<sub>0</sub> · S / d</b> &nbsp; (nel vuoto)</p>
<p>Riempiendo lo spazio con un <b>dielettrico</b> (materiale isolante) la capacità aumenta di un fattore ε<sub>r</sub>: <b>C = ε<sub>r</sub>·ε<sub>0</sub>·S/d</b>. Le molecole del dielettrico si polarizzano e creano un campo opposto che riduce il campo netto: a parità di Q la d.d.p. è minore (ε<sub>r</sub>: aria ≈ 1, carta ≈ 3-4, vetro 5-10, acqua ≈ 80). Il dielettrico inoltre impedisce che le armature si tocchino e sopporta campi maggiori prima di «rompersi» (rigidità dielettrica).</p>
<p>Anche un singolo conduttore ha una capacità: per una sfera di raggio R è C = 4π·ε<sub>0</sub>·R; la Terra (R = 6,37·10<sup>6</sup> m) ha C ≈ 7,1·10<sup>-4</sup> F = 710 µF, molto meno di un moderno condensatore elettrolitico di grandi dimensioni.</p>`
    },
    {
      type: "example",
      title: "Quanto vale una capacità?",
      html: `<p><b>Condensatore piano.</b> Due lastre quadrate di lato 10 cm (S = 1,0·10<sup>-2</sup> m²) a distanza d = 1,0 mm: C = ε<sub>0</sub>·S/d = 8,85·10<sup>-12</sup> × 1,0·10<sup>-2</sup>/1,0·10<sup>-3</sup> ≈ <b>8,9·10<sup>-11</sup> F = 89 pF</b>. Con il vetro in mezzo (ε<sub>r</sub> = 5) diventerebbe 440 pF circa.</p>
<p><b>Carica accumulata.</b> Collegato a una batteria da 12 V, questo condensatore accumula Q = C·ΔV = 89·10<sup>-12</sup> × 12 ≈ 1,1·10<sup>-9</sup> C = 1,1 nC: pochissimo. Per ottenere capacità di microfarad servono armature arrotolate, di grande superficie, con isolante sottilissimo.</p>
<p><b>Tastiere e schermi touch.</b> Gli schermi tattili capacitivi sfruttano il fatto che un dito (conduttore, collegato a terra attraverso il corpo) modifica la capacità locale: il circuito misura la variazione e individua il punto toccato.</p>`
    },
    {
      type: "text",
      title: "Condensatori in serie e in parallelo",
      html: `<p>Più condensatori si possono collegare in due modi, e si può sostituirli con un solo <b>condensatore equivalente</b> che a parità di tensione immagazzina la stessa carica.</p>
<ul>
<li><b>In parallelo</b>: tutti i condensatori hanno la <b>stessa d.d.p.</b> V (quella del generatore) e la carica totale è la somma Q = Q<sub>1</sub> + Q<sub>2</sub> + …. Quindi <b>C<sub>eq</sub> = C<sub>1</sub> + C<sub>2</sub> + …</b>: le armature, di fatto, si «sommano» in area.</li>
<li><b>In serie</b>: tutti i condensatori hanno la <b>stessa carica Q</b> e la d.d.p. totale si divide: V = V<sub>1</sub> + V<sub>2</sub> + …. Quindi <b>1/C<sub>eq</sub> = 1/C<sub>1</sub> + 1/C<sub>2</sub> + …</b>: la capacità equivalente è <b>minore</b> della più piccola; è come se la distanza tra le armature crescesse.</li>
</ul>
<p>Attenzione: per le <b>resistenze</b> (lezione successiva) vale esattamente il contrario. Per due condensatori in serie si può usare la formula rapida C<sub>eq</sub> = C<sub>1</sub>·C<sub>2</sub>/(C<sub>1</sub> + C<sub>2</sub>).</p>
<p><b>Esempio.</b> C<sub>1</sub> = 2 µF e C<sub>2</sub> = 3 µF: in parallelo C<sub>eq</sub> = 5 µF; in serie C<sub>eq</sub> = 6/5 = 1,2 µF. Se i due in serie sono collegati a 10 V, Q = 1,2 µF × 10 V = 12 µC, uguale su entrambi; V<sub>1</sub> = Q/C<sub>1</sub> = 6 V e V<sub>2</sub> = Q/C<sub>2</sub> = 4 V: somma 10 V. Il condensatore più piccolo sopporta la tensione più grande.</p>`
    },
    {
      type: "text",
      title: "L'energia di un condensatore",
      html: `<p>Caricare un condensatore significa spostare carica da un'armatura all'altra contro la d.d.p. già presente. Quando la carica è q, per portare un'altra piccola dq serve il lavoro dq·(q/C): sommando fino a Q, l'energia immagazzinata è (area di un triangolo nel grafico V-q)</p>
<p style="text-align:center"><b>U = ½ · Q · ΔV = ½ · C · ΔV² = Q² / (2C)</b></p>
<p>L'energia è immagazzinata nel <b>campo elettrico</b> tra le armature, con una densità (energia per unità di volume) <b>u = ½·ε<sub>0</sub>·E²</b>, formula valida per qualunque campo elettrico. Un condensatore può cedere l'energia molto rapidamente (è una «riserva di potenza», diversamente da una batteria, che la rilascia lentamente): per questo viene usato nei flash fotografici e nei <b>defibrillatori</b>, dove un condensatore di circa 100 µF caricato a 2000 V immagazzina U = ½ × 10<sup>-4</sup> × (2000)² = <b>200 J</b>, rilasciati al paziente in pochi millisecondi.</p>
<p>Altri usi: filtri e stabilizzatori di tensione negli alimentatori, circuiti accordati radio (insieme a bobine), memorie DRAM dei computer (un transistor e un microscopico condensatore per ogni bit), avvio dei motori. Una famiglia di dispositivi in forte sviluppo sono i <b>supercondensatori</b>, con capacità di migliaia di farad grazie a superfici di carbone attivo enormi, usati per accumulare e recuperare energia nelle frenate.</p>
<p><b>Attenzione alla sicurezza:</b> un condensatore carico può restare pericoloso anche dopo aver staccato l'apparecchio, perché conserva energia (alimentatori e flash).</p>`
    },
    {
      type: "example",
      title: "Energia e tensioni in un circuito",
      html: `<p><b>Un condensatore da 100 µF a 12 V</b> contiene Q = C·ΔV = 100·10<sup>-6</sup> × 12 = 1,2·10<sup>-3</sup> C = 1,2 mC e un'energia U = ½·C·ΔV² = ½ × 100·10<sup>-6</sup> × 144 = <b>7,2·10<sup>-3</sup> J</b> (7,2 mJ), pari a quella che serve per sollevare di 7 mm una moneta da 10 g.</p>
<p><b>Serie con la batteria da 12 V.</b> C<sub>1</sub> = 2 µF e C<sub>2</sub> = 4 µF in serie: C<sub>eq</sub> = 8/6 = 1,33 µF, Q = 1,33 × 12 = 16 µC. V<sub>1</sub> = 16/2 = 8 V, V<sub>2</sub> = 16/4 = 4 V. L'energia totale è ½·C<sub>eq</sub>·V² = ½ × 1,33·10<sup>-6</sup> × 144 ≈ 96 µJ.</p>
<p><b>Distanza dimezzata.</b> Se le armature di un condensatore piano staccato dalla batteria (Q costante) vengono avvicinate dimezzando d, la capacità raddoppia e, a parità di Q, l'energia U = Q²/(2C) si <b>dimezza</b>: l'energia mancante è il lavoro compiuto dalla forza di attrazione tra le piastre.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: condensatori",
      questions: [
        { type: "num", q: "Qual è la capacità equivalente di due condensatori da 6 µF in serie (in µF)?", answer: 3, tol: 0.01, unit: "µF", explain: "1/C = 1/6 + 1/6 = 1/3, quindi C = 3 µF." },
        { type: "num", q: "Un condensatore da 10 µF è caricato a 20 V. Quanta energia contiene (in mJ)?", answer: 2, tol: 0.01, unit: "mJ", explain: "U = ½·C·V² = ½ × 10·10⁻⁶ × 400 = 2,0·10⁻³ J = 2 mJ." },
        { type: "tf", q: "Raddoppiando la distanza tra le armature di un condensatore piano, la capacità raddoppia.", answer: false, explain: "C = ε₀S/d: con d doppia, C si dimezza." }
      ]
    },
    {
      type: "alternatives",
      title: "Altri modi per capire potenziale e capacità",
      intro: "Tensioni e capacità sono astratte: ecco immagini che aiutano.",
      tabs: [
        {
          label: "⛰️ La collina del potenziale",
          html: "<p>Immagina il potenziale come l'<b>altezza di un paesaggio</b>: una carica positiva è una palla che rotola in discesa, dai potenziali alti ai bassi; una negativa è una palla «al contrario» che sale. Le <b>superfici equipotenziali</b> sono le linee di livello delle carte topografiche, e il campo elettrico è la <b>pendenza</b> (la linea di massima discesa, sempre perpendicolare alle curve di livello). Una differenza di potenziale è un dislivello: più è grande, più energia può guadagnare la palla (qΔV). E il «volt» è l'altezza in joule per coulomb.</p>"
        },
        {
          label: "💧 Il serbatoio d'acqua",
          html: "<p>Un condensatore si comporta come un <b>serbatoio</b>: la carica Q è l'acqua contenuta, il potenziale V è la <b>pressione</b> (o il livello) e la capacità C è la <b>sezione del serbatoio</b>: C = Q/V. Un serbatoio largo (grande C) richiede molta acqua per aumentare di poco il livello. In <b>parallelo</b> i serbatoi, collegati sul fondo, si riempiono allo stesso livello e le sezioni si sommano; in <b>serie</b>, la stessa acqua passa attraverso tutti, ma il dislivello totale si ripartisce, più grande nel più stretto.</p>"
        },
        {
          label: "🔗 Abbina grandezza e formula",
          html: "<p>Collega ogni grandezza alla sua relazione.</p>",
          widget: "match",
          options: { pairs: [
            ["Potenziale di una carica puntiforme", "V = k·Q/r"],
            ["Lavoro del campo", "W = q·(V_A − V_B)"],
            ["Capacità", "C = Q/ΔV"],
            ["Condensatore piano", "C = ε₀·S/d"],
            ["Condensatori in parallelo", "C_eq = C₁ + C₂"],
            ["Energia del condensatore", "U = ½·C·ΔV²"]
          ] }
        },
        {
          label: "🎨 Disegno: serie e parallelo",
          html: "<p>Due condensatori in parallelo (stessa tensione) e in serie (stessa carica).</p>",
          svg: "<svg viewBox='0 0 600 260' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='260' fill='#f8fafc'/><g font-family='sans-serif' stroke='#334155' stroke-width='3' fill='none'><text x='150' y='28' font-size='15' fill='#1e3a8a' stroke='none' text-anchor='middle' font-weight='bold'>Parallelo: C = C₁ + C₂</text><path d='M60 60 L 240 60 M60 200 L 240 200 M120 60 L 120 100 M120 160 L 120 200 M180 60 L 180 100 M180 160 L 180 200'/><line x1='100' y1='100' x2='140' y2='100'/><line x1='100' y1='160' x2='140' y2='160'/><line x1='160' y1='100' x2='200' y2='100'/><line x1='160' y1='160' x2='200' y2='160'/><text x='120' y='136' font-size='15' fill='#7c2d12' stroke='none' text-anchor='middle'>C₁</text><text x='180' y='136' font-size='15' fill='#7c2d12' stroke='none' text-anchor='middle'>C₂</text><text x='450' y='28' font-size='15' fill='#14532d' stroke='none' text-anchor='middle' font-weight='bold'>Serie: 1/C = 1/C₁ + 1/C₂</text><path d='M360 130 L 410 130 M410 130 L 410 100 M410 100 L 410 100'/><line x1='390' y1='110' x2='430' y2='110' /><line x1='390' y1='118' x2='430' y2='118'/><line x1='440' y1='130' x2='490' y2='130'/><line x1='470' y1='110' x2='510' y2='110'/><line x1='470' y1='118' x2='510' y2='118'/><text x='410' y='160' font-size='15' fill='#7c2d12' stroke='none' text-anchor='middle'>C₁</text><text x='490' y='160' font-size='15' fill='#7c2d12' stroke='none' text-anchor='middle'>C₂</text><text x='450' y='220' font-size='14' fill='#475569' stroke='none' text-anchor='middle'>stessa carica Q su entrambi</text></g></svg>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "La bottiglia di Leida",
      html: `<p>Il primo condensatore della storia nacque quasi per caso. Nel 1745 il tedesco <b>Ewald Georg von Kleist</b> e nel 1746 l'olandese <b>Pieter van Musschenbroek</b>, a Leida, scoprirono che una bottiglia di vetro riempita d'acqua (o rivestita di metallo dentro e fuori) e collegata a una macchina elettrostatica poteva accumulare una carica sorprendente: Musschenbroek, toccandola, ricevette una scossa tale da dire che non avrebbe ripetuto l'esperienza «per il regno di Francia». Le armature erano l'acqua e la mano (o i rivestimenti metallici), il dielettrico il vetro. Lo studio di questi apparecchi spianò la strada a <b>Volta</b>, che definì la capacità e inventò il «condensatore» (1780 circa), e poi alla pila (1800).</p>`
    },
    {
      type: "curiosity",
      title: "Una fabbrica di lampi in miniatura: il flash",
      html: `<p>Un flash fotografico carica un condensatore (qualche centinaio di volt) con una piccola batteria da 3 V in alcuni secondi, poi lo scarica nella lampada allo xeno in meno di un millesimo di secondo. Se il condensatore da 100 µF è caricato a 300 V, immagazzina U = ½ × 10<sup>-4</sup> × 300² = 4,5 J: sembra poco, ma rilasciata in 1 ms è una potenza media di 4,5 kW, ben oltre ciò che la batteria potrebbe dare in modo continuo. È un esempio perfetto della differenza tra <b>energia</b> e <b>potenza</b>: i condensatori sono ottimi per la seconda.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Forza elettrica conservativa: <b>U = kq<sub>1</sub>q<sub>2</sub>/r</b>; potenziale <b>V = U/q</b>, <b>W<sub>A→B</sub> = q(V<sub>A</sub> − V<sub>B</sub>)</b>.</li>
<li>Carica puntiforme: <b>V = kQ/r</b>. Campo uniforme: <b>ΔV = E·d</b>. 1 eV = 1,602·10<sup>-19</sup> J.</li>
<li>Equipotenziali ⟂ linee di campo; un conduttore è equipotenziale.</li>
<li><b>C = Q/ΔV</b>; piano <b>C = ε<sub>r</sub>ε<sub>0</sub>S/d</b>. Parallelo: C si somma; serie: 1/C si somma.</li>
<li>Energia: <b>U = ½·C·ΔV² = ½·QΔV = Q²/2C</b>, densità <b>½ε<sub>0</sub>E²</b>.</li>
</ul>`
    },
    {
      type: "conceptMap",
      title: "Mappa di potenziale e condensatori",
      nodes: [
        { id: "conservativa", label: "Forza conservativa", x: 50, y: 8, color: "#2563eb", html: "Il lavoro dipende solo da punto iniziale e finale: si può definire un'energia potenziale.", why: "La forza di Coulomb è centrale e dipende solo dalla distanza: è la stessa struttura matematica della gravità, quindi ha lavoro indipendente dal cammino e circuitazione del campo nulla." },
        { id: "energia", label: "Energia potenziale U = kq₁q₂/r", x: 15, y: 38, color: "#16a34a", html: "Positiva per cariche dello stesso segno, negativa per segni opposti.", why: "Si ottiene calcolando il lavoro per portare una carica dall'infinito a distanza r. Il segno spiega perché cariche opposte formano sistemi legati (atomi)." },
        { id: "potenziale", label: "Potenziale V = U/q", x: 80, y: 38, color: "#f59e0b", html: "Energia per unità di carica; unità volt (J/C). Contano le differenze ΔV.", why: "Separa ciò che dipende dal campo (V) da ciò che dipende dalla carica di prova (q). Essendo scalare, è più semplice da sommare dei campi vettoriali." },
        { id: "equip", label: "Equipotenziali e campo", x: 50, y: 58, color: "#8b5cf6", html: "Superfici a V costante, perpendicolari alle linee di campo; E = −dV/dx.", why: "Lungo una superficie equipotenziale non c'è lavoro, quindi la forza (cioè il campo) non ha componenti lungo di essa: è perpendicolare." },
        { id: "capacita", label: "Capacità C = Q/ΔV", x: 18, y: 82, color: "#ef4444", html: "Piano: C = ε₀S/d; con dielettrico moltiplicata per ε_r.", why: "Da Gauss E = Q/(ε₀S) e ΔV = Ed ⟹ ΔV ∝ Q: il rapporto Q/ΔV dipende solo dalla geometria." },
        { id: "energiaC", label: "Energia del condensatore ½CΔV²", x: 80, y: 82, color: "#64748b", html: "Energia del campo tra le armature, densità ½ε₀E².", why: "Si ricava sommando il lavoro per caricare il condensatore a poco a poco; l'energia risiede nel campo, idea che sarà essenziale per le onde elettromagnetiche." }
      ],
      edges: [["conservativa", "energia", "definisce"], ["energia", "potenziale", "per unità di carica"], ["potenziale", "equip", "geometria di"], ["potenziale", "capacita", "ΔV tra armature"], ["capacita", "energiaC", "immagazzina"]]
    }
  ],
  glossary: [
    { t: "Forza conservativa", d: "Forza il cui lavoro non dipende dal percorso, ma solo dai punti iniziale e finale." },
    { t: "Energia potenziale elettrica", d: "Energia di un sistema di cariche dovuta alla loro posizione: U = kq₁q₂/r." },
    { t: "Potenziale elettrico", d: "Energia potenziale per unità di carica: V = U/q, in volt." },
    { t: "Differenza di potenziale", d: "ΔV tra due punti: lavoro per unità di carica, detto anche tensione." },
    { t: "Volt (V)", d: "Unità di potenziale: 1 V = 1 J/C." },
    { t: "Elettronvolt (eV)", d: "Energia guadagnata da un elettrone attraverso 1 V: 1,602·10⁻¹⁹ J." },
    { t: "Superficie equipotenziale", d: "Insieme di punti con lo stesso potenziale; perpendicolare alle linee di campo." },
    { t: "Condensatore", d: "Dispositivo formato da due armature conduttrici che immagazzina carica ed energia." },
    { t: "Capacità", d: "C = Q/ΔV, in farad (F)." },
    { t: "Dielettrico", d: "Isolante posto tra le armature: aumenta la capacità di un fattore ε_r." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Perché si può definire un'energia potenziale elettrica?", options: ["Perché la forza elettrica è molto intensa", "Perché la forza elettrostatica è conservativa", "Perché le cariche sono quantizzate", "Perché il campo è uniforme"], answer: 1, explain: "Il lavoro della forza di Coulomb dipende solo dagli estremi del percorso: è una forza conservativa." },
      { type: "num", q: "Qual è il potenziale a 0,5 m da una carica di 2 µC? (k = 9·10⁹ N·m²/C², risposta in kV)", answer: 36, tol: 0.1, unit: "kV", explain: "V = kQ/r = 9·10⁹ × 2·10⁻⁶/0,5 = 3,6·10⁴ V = 36 kV." },
      { type: "num", q: "Un protone attraversa una d.d.p. di 1000 V partendo da fermo. Quanta energia cinetica acquista (in eV)?", answer: 1000, tol: 1, unit: "eV", explain: "ΔK = e·ΔV = 1000 eV per definizione di elettronvolt." },
      { type: "tf", q: "Il campo elettrico è sempre perpendicolare alle superfici equipotenziali.", answer: true, explain: "Lungo un'equipotenziale il lavoro è nullo: il campo non ha componenti tangenti alla superficie." },
      { type: "num", q: "Un condensatore piano ha armature di 0,02 m² a distanza 2 mm nel vuoto. Qual è la capacità in pF? (ε₀ = 8,85·10⁻¹² F/m)", answer: 88.5, tol: 0.5, unit: "pF", explain: "C = ε₀S/d = 8,85·10⁻¹² × 0,02/0,002 = 8,85·10⁻¹¹ F = 88,5 pF." },
      { type: "mc", q: "Due condensatori da 4 µF e 12 µF sono in serie. Qual è la capacità equivalente?", options: ["16 µF", "8 µF", "3 µF", "1 µF"], answer: 2, explain: "C = (4 × 12)/(4 + 12) = 48/16 = 3 µF." },
      { type: "num", q: "Un condensatore da 50 µF è caricato a 100 V. Quanta energia contiene (in J)?", answer: 0.25, tol: 0.005, unit: "J", explain: "U = ½·C·V² = ½ × 50·10⁻⁶ × 10⁴ = 0,25 J." },
      { type: "tf", q: "Mettendo un dielettrico tra le armature (con carica costante), la d.d.p. tra di esse aumenta.", answer: false, explain: "Il dielettrico aumenta C: a Q costante ΔV = Q/C diminuisce." },
      { type: "mc", q: "Due condensatori in parallelo collegati a una batteria hanno:", options: ["la stessa carica", "la stessa d.d.p.", "la stessa energia", "campi nulli"], answer: 1, explain: "In parallelo la tensione è comune (quella della batteria); le cariche si sommano." },
      { type: "order", q: "Ordina per energia crescente: condensatori con la stessa C = 10 µF caricati a tensioni diverse.", items: ["V = 5 V", "V = 10 V", "V = 50 V", "V = 100 V"], explain: "U = ½CV² cresce con V²: 125 µJ, 500 µJ, 12,5 mJ, 50 mJ." }
    ]
  }
});
