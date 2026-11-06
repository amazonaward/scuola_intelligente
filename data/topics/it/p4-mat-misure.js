TOPIC('it', {
  id: "p4-mat-misure",
  title: "Le misure: massa, capacità e valore",
  intro: "Al supermercato compri 1 kg di mele, una bottiglia da 1,5 l d'acqua e paghi 3,50 €. Senza accorgertene hai usato tre tipi di misura: la <b>massa</b>, la <b>capacità</b> e il <b>valore</b>. Impariamo a conoscerle e a trasformarle!",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Misurare vuol dire confrontare",
      html: `<p><b>Misurare</b> significa <b>confrontare</b> una grandezza con un'altra dello stesso tipo, scelta come <b>unità di misura</b>, e contare quante volte ci sta.</p>
<p>Un tempo si usavano il piede, il palmo, il braccio… ma ogni persona (e ogni città!) aveva misure diverse. Per questo, dalla fine del 1700, si è creato un sistema uguale per tutti: oggi si chiama <b>Sistema Internazionale (SI)</b>.</p>
<p>Le nostre misure sono <b>decimali</b>: ogni unità è <b>10 volte</b> più grande di quella alla sua destra. Bastano tre "prefissi" per i multipli e tre per i sottomultipli:</p>
<table>
<tr><th>kilo-</th><th>etto-</th><th>deca-</th><th>UNITÀ</th><th>deci-</th><th>centi-</th><th>milli-</th></tr>
<tr><td>× 1000</td><td>× 100</td><td>× 10</td><td>1</td><td>: 10</td><td>: 100</td><td>: 1000</td></tr>
</table>
<p>Funziona uguale per il <b>metro</b> (lunghezza), il <b>grammo</b> (massa) e il <b>litro</b> (capacità). Impari una tabella e le conosci tutte!</p>`
    },
    {
      type: "text",
      title: "La massa: chilogrammi e grammi",
      html: `<p>La <b>massa</b> ci dice quanta materia c'è in un oggetto. Nel linguaggio di tutti i giorni si dice "peso", e si misura con la <b>bilancia</b>.</p>
<p>L'unità di misura fondamentale è il <b>chilogrammo (kg)</b>. Per comodità la tabella si costruisce intorno al <b>grammo (g)</b>:</p>
<table>
<tr><th>kg</th><th>hg</th><th>dag</th><th><b>g</b></th><th>dg</th><th>cg</th><th>mg</th></tr>
<tr><td>chilogrammo</td><td>ettogrammo</td><td>decagrammo</td><td>grammo</td><td>decigrammo</td><td>centigrammo</td><td>milligrammo</td></tr>
<tr><td>1000 g</td><td>100 g</td><td>10 g</td><td>1 g</td><td>0,1 g</td><td>0,01 g</td><td>0,001 g</td></tr>
</table>
<p>Per le masse molto grandi si usano anche:</p>
<ul>
<li>il <b>quintale (q)</b> = 100 kg (un sacco di farina gigante, un grosso maiale);</li>
<li>la <b>tonnellata (t)</b> = 1000 kg (un'automobile pesa circa 1 t).</li>
</ul>
<p>Al negozio si dice "un <b>etto</b> di prosciutto": è 1 hg = 100 g.</p>`
    },
    {
      type: "svg",
      title: "La scala delle misure di massa",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#fff7ed"/>
<g stroke="#7c2d12" stroke-width="3">
<rect x="20" y="40" width="80" height="40" fill="#fdba74"/>
<rect x="100" y="80" width="80" height="40" fill="#fdba74"/>
<rect x="180" y="120" width="80" height="40" fill="#fdba74"/>
<rect x="260" y="160" width="80" height="40" fill="#f97316"/>
<rect x="340" y="200" width="80" height="40" fill="#fed7aa"/>
<rect x="420" y="240" width="80" height="40" fill="#fed7aa"/>
<rect x="500" y="280" width="80" height="18" fill="#fed7aa"/>
</g>
<text x="60" y="68" font-size="20" text-anchor="middle" font-weight="bold">kg</text>
<text x="140" y="108" font-size="20" text-anchor="middle" font-weight="bold">hg</text>
<text x="220" y="148" font-size="20" text-anchor="middle" font-weight="bold">dag</text>
<text x="300" y="188" font-size="20" text-anchor="middle" font-weight="bold" fill="#ffffff">g</text>
<text x="380" y="228" font-size="20" text-anchor="middle" font-weight="bold">dg</text>
<text x="460" y="268" font-size="20" text-anchor="middle" font-weight="bold">cg</text>
<text x="590" y="294" font-size="16" font-weight="bold">mg</text>
<text x="360" y="60" font-size="20" fill="#15803d" font-weight="bold">scendo ⤵ moltiplico × 10</text>
<text x="360" y="100" font-size="20" fill="#1d4ed8" font-weight="bold">salgo ⤴ divido : 10</text>
<text x="20" y="200" font-size="16" fill="#7c2d12">1 kg = 10 hg</text>
<text x="20" y="225" font-size="16" fill="#7c2d12">= 100 dag</text>
<text x="20" y="250" font-size="16" fill="#7c2d12">= 1000 g</text>
</svg>`,
      caption: "Ogni gradino vale 10 volte quello sotto. Scendendo i numeri diventano più grandi (× 10), salendo più piccoli (: 10)."
    },
    {
      type: "widget",
      title: "L'abaco delle masse",
      widget: "abacus",
      options: { columns: ["kg", "hg", "dag", "g"], value: 1250 },
      caption: "1250 g = 1 kg, 2 hg, 5 dag e 0 g. Aggiungi e togli palline e leggi quanti grammi ottieni."
    },
    {
      type: "text",
      title: "Peso lordo, peso netto, tara",
      html: `<p>Quando compri qualcosa in una confezione, la bilancia pesa sia il prodotto sia la scatola (o il vasetto, la bottiglia…).</p>
<ul>
<li><b>Peso netto</b> = il peso del solo prodotto (quello che mangi o usi).</li>
<li><b>Tara</b> = il peso del contenitore.</li>
<li><b>Peso lordo</b> = peso netto + tara (tutto insieme).</li>
</ul>
<p>Le formule:</p>
<p><b>PL = PN + T</b> &nbsp;&nbsp; <b>PN = PL − T</b> &nbsp;&nbsp; <b>T = PL − PN</b></p>
<p>La parola "tara" viene dall'arabo <i>ṭarḥa</i>, "ciò che si toglie": i mercanti del Mediterraneo la usavano già nel Medioevo.</p>`
    },
    {
      type: "svg",
      title: "Il vasetto di miele",
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#fefce8"/>
<rect x="80" y="230" width="200" height="20" fill="#94a3b8"/>
<rect x="120" y="215" width="120" height="15" fill="#64748b"/>
<rect x="130" y="80" width="100" height="135" rx="14" fill="#e0f2fe" stroke="#0369a1" stroke-width="4"/>
<rect x="138" y="110" width="84" height="98" rx="8" fill="#f59e0b"/>
<rect x="125" y="62" width="110" height="22" rx="5" fill="#b91c1c"/>
<text x="180" y="165" font-size="22" text-anchor="middle" fill="#78350f" font-weight="bold">🍯</text>
<text x="330" y="80" font-size="22" fill="#1f2937" font-weight="bold">Peso lordo: 650 g</text>
<text x="330" y="130" font-size="22" fill="#0369a1">Tara (vasetto): 150 g</text>
<text x="330" y="180" font-size="22" fill="#b45309" font-weight="bold">Peso netto: 500 g</text>
<text x="330" y="230" font-size="18" fill="#1f2937">650 − 150 = 500</text>
</svg>`,
      caption: "Il miele (peso netto) + il vasetto (tara) = tutto quello che pesa la bilancia (peso lordo)."
    },
    {
      type: "quiz",
      title: "Mini-quiz: la massa",
      questions: [
        { type: "num", q: "Quanti grammi ci sono in 3 kg?", answer: 3000, unit: "g", explain: "1 kg = 1000 g, quindi 3 × 1000 = 3000 g." },
        { type: "num", q: "Un barattolo di pomodori pesa 450 g lordi; il barattolo vuoto pesa 50 g. Quanto è il peso netto?", answer: 400, unit: "g", explain: "PN = PL − T = 450 − 50 = 400 g." },
        { type: "mc", q: "Un quintale è uguale a…", options: ["10 kg", "100 kg", "1000 kg"], answer: 1, explain: "1 q = 100 kg; 1 t = 1000 kg." }
      ]
    },
    {
      type: "text",
      title: "La capacità: litri e millilitri",
      html: `<p>La <b>capacità</b> è la quantità di liquido (o di sabbia, di riso…) che un recipiente può <b>contenere</b>. L'unità di misura è il <b>litro (l)</b>.</p>
<table>
<tr><th>hl</th><th>dal</th><th><b>l</b></th><th>dl</th><th>cl</th><th>ml</th></tr>
<tr><td>ettolitro</td><td>decalitro</td><td>litro</td><td>decilitro</td><td>centilitro</td><td>millilitro</td></tr>
<tr><td>100 l</td><td>10 l</td><td>1 l</td><td>0,1 l</td><td>0,01 l</td><td>0,001 l</td></tr>
</table>
<p>Il <b>kilolitro</b> esiste ma non si usa quasi mai: per grandi quantità si dice <b>ettolitri</b> (il vino nelle cantine) o metri cubi (l'acqua di casa).</p>
<p>Dove li vedi?</p>
<ul>
<li>bottiglia d'acqua: <b>1,5 l</b> o <b>50 cl</b>;</li>
<li>lattina: <b>33 cl</b> = 330 ml;</li>
<li>cucchiaino di sciroppo: <b>5 ml</b>;</li>
<li>vasca da bagno piena: circa <b>150 l</b>.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Quanto contiene?",
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#ecfeff"/>
<rect x="50" y="180" width="30" height="50" rx="4" fill="#a5f3fc" stroke="#0e7490" stroke-width="3"/>
<text x="65" y="260" font-size="16" text-anchor="middle">5 ml</text>
<rect x="140" y="160" width="50" height="70" rx="8" fill="#fecaca" stroke="#b91c1c" stroke-width="3"/>
<text x="165" y="260" font-size="16" text-anchor="middle">33 cl</text>
<path d="M260 230 L260 110 Q260 90 275 85 L275 60 L295 60 L295 85 Q310 90 310 110 L310 230 Z" fill="#bae6fd" stroke="#0369a1" stroke-width="3"/>
<text x="285" y="260" font-size="16" text-anchor="middle">1,5 l</text>
<rect x="370" y="120" width="80" height="110" rx="6" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<text x="410" y="180" font-size="15" text-anchor="middle">tanica</text>
<text x="410" y="260" font-size="16" text-anchor="middle">1 dal = 10 l</text>
<ellipse cx="530" cy="140" rx="45" ry="15" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<path d="M485 140 L490 230 L570 230 L575 140" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<text x="530" y="190" font-size="15" text-anchor="middle">botte</text>
<text x="530" y="260" font-size="16" text-anchor="middle">1 hl = 100 l</text>
<text x="300" y="35" font-size="20" text-anchor="middle" fill="#0e7490" font-weight="bold">dal più piccolo al più grande</text>
</svg>`,
      caption: "Recipienti di tutti i giorni e la loro capacità."
    },
    {
      type: "text",
      title: "Come si fanno le equivalenze",
      html: `<p>Fare un'<b>equivalenza</b> vuol dire scrivere la <b>stessa quantità</b> con un'altra unità di misura. Il metodo:</p>
<ol>
<li>Guarda nella tabella <b>quanti posti</b> ci sono fra le due unità.</li>
<li>Se vai verso un'unità <b>più piccola</b> (verso destra) <b>moltiplichi</b> per 10, 100, 1000…</li>
<li>Se vai verso un'unità <b>più grande</b> (verso sinistra) <b>dividi</b> per 10, 100, 1000…</li>
</ol>
<p>Esempi:</p>
<ul>
<li>4 l = ? cl → 2 posti verso destra → 4 × 100 = <b>400 cl</b></li>
<li>2500 g = ? kg → 3 posti verso sinistra → 2500 : 1000 = <b>2,5 kg</b></li>
<li>7 hg = ? g → 2 posti verso destra → 7 × 100 = <b>700 g</b></li>
</ul>
<p>Trucco: il numero di zeri da aggiungere (o i posti di cui spostare la virgola) è uguale al numero di "gradini" fra le unità.</p>`
    },
    {
      type: "text",
      title: "Il valore: l'euro",
      html: `<p>Il <b>valore</b> di una cosa è quanto costa. In Italia e in altri 20 Paesi dell'Unione Europea (nel 2026) si usa l'<b>euro (€)</b>, in tasca dal <b>1° gennaio 2002</b>. Prima in Italia c'era la <b>lira</b>: 1 € valeva 1936,27 lire!</p>
<p>Anche l'euro è decimale: <b>1 € = 100 centesimi</b> (c).</p>
<ul>
<li><b>Monete</b>: 1 c, 2 c, 5 c, 10 c, 20 c, 50 c, 1 €, 2 €.</li>
<li><b>Banconote</b>: 5 €, 10 €, 20 €, 50 €, 100 €, 200 € (e la vecchia da 500 €, che non si stampa più ma vale ancora).</li>
</ul>
<p>I prezzi si scrivono con la <b>virgola</b>: <b>3,75 €</b> = 3 euro e 75 centesimi. A sinistra della virgola gli euro, a destra i centesimi (sempre 2 cifre: 3,50 € e non 3,5 €).</p>
<p>Al negozio: <b>spesa + resto = soldi dati</b>. Quindi <b>resto = soldi dati − spesa</b>.</p>
<p>Altre parole del commercio: <b>costo unitario</b> (prezzo di 1 oggetto) × quantità = <b>costo totale</b>; <b>ricavo − spesa = guadagno</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la spesa al mercato",
      html: `<p>La mamma compra al mercato:</p>
<ul>
<li>2 kg di mele a 1,80 € al kg → 2 × 1,80 = <b>3,60 €</b></li>
<li>5 hg di formaggio a 16 € al kg → 5 hg = 0,5 kg → 16 : 2 = <b>8,00 €</b></li>
<li>una bottiglia d'olio da 75 cl a <b>7,40 €</b></li>
</ul>
<p>Totale: 3,60 + 8,00 + 7,40 = <b>19,00 €</b>. Paga con una banconota da 20 €: il resto è 20 − 19 = <b>1 €</b>.</p>
<p>Quanto pesa la borsa (senza l'olio)? 2 kg + 0,5 kg = <b>2,5 kg</b> = 2500 g.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la festa di classe",
      html: `<p>Per la festa ci sono <b>24 bambini</b>. Ognuno beve <b>2 bicchieri da 20 cl</b> di succo. Quante bottiglie da <b>1 l</b> servono?</p>
<ol>
<li>Succo per bambino: 2 × 20 = 40 cl</li>
<li>Succo totale: 24 × 40 = 960 cl</li>
<li>Equivalenza: 960 cl = 9,6 l</li>
<li>Bottiglie da 1 l: ne servono <b>10</b> (9 non bastano: mancherebbero 60 cl!)</li>
</ol>
<p>Se ogni bottiglia costa 1,20 €, la spesa è 10 × 1,20 = <b>12 €</b>, cioè 0,50 € a bambino.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il chilogrammo in cassaforte",
      html: `<p>Dal <b>1889</b> al <b>2019</b> il chilogrammo era definito da un vero cilindro di platino e iridio, chiamato "il Grande K", custodito sotto tre campane di vetro in una cassaforte a <b>Sèvres</b>, vicino a Parigi. Il problema? Con gli anni la sua massa cambiava di pochissimo! Dal 20 maggio 2019 il kg è definito con un numero fisso della natura, la <b>costante di Planck</b>, che non cambia mai.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Un litro d'acqua pesa un chilo",
      html: `<p>Gli scienziati francesi della Rivoluzione collegarono le misure fra loro: un cubo con lo spigolo di <b>1 dm</b> (10 cm) contiene esattamente <b>1 litro</b>, e un litro di acqua pura pesa circa <b>1 kg</b>. Quindi 1 ml d'acqua pesa circa 1 g. Comodo, vero? Ma attenzione: 1 l di olio pesa solo circa 0,92 kg, e per questo l'olio galleggia sull'acqua!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Le monete da 1 e 2 centesimi",
      html: `<p>Dal <b>1° gennaio 2018</b> l'Italia non conia più monete da 1 e 2 centesimi, perché produrle costava più del loro valore. Valgono ancora, ma nei negozi il totale da pagare in contanti può essere arrotondato ai 5 centesimi.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Massa: <b>kg hg dag g dg cg mg</b>; 1 q = 100 kg; 1 t = 1000 kg.</li>
<li>Capacità: <b>hl dal l dl cl ml</b>.</li>
<li>Verso destra (unità più piccola) <b>× 10, 100, 1000</b>; verso sinistra <b>: 10, 100, 1000</b>.</li>
<li><b>PL = PN + T</b>.</li>
<li>1 € = 100 centesimi; <b>resto = soldi dati − spesa</b>; costo totale = costo unitario × quantità.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le misure",
      intro: "Le equivalenze ti confondono? Prova con la tabella-casetta, con i soldi, con le mani o con il metodo di altri Paesi.",
      tabs: [
        {
          label: "🏠 La tabella con la virgola che si sposta",
          html: `<p>Scrivi il numero nella tabella, <b>una cifra per casella</b>, con l'ultima cifra intera sotto l'unità di partenza. Poi metti la virgola <b>subito dopo</b> la casella dell'unità d'arrivo. Riempi con zeri le caselle vuote.</p>
<p>Esempio: <b>3,4 kg = ? g</b> → la 3 va sotto kg, la 4 sotto hg; la virgola va dopo la colonna g: 3 | 4 | 0 | 0 → <b>3400 g</b>.</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="200" fill="#f8fafc"/>
<g stroke="#334155" stroke-width="2" fill="#ffffff">
<rect x="60" y="40" width="80" height="45"/><rect x="140" y="40" width="80" height="45"/><rect x="220" y="40" width="80" height="45"/><rect x="300" y="40" width="80" height="45" fill="#fde68a"/><rect x="380" y="40" width="80" height="45"/><rect x="460" y="40" width="80" height="45"/>
<rect x="60" y="85" width="80" height="55"/><rect x="140" y="85" width="80" height="55"/><rect x="220" y="85" width="80" height="55"/><rect x="300" y="85" width="80" height="55" fill="#fef9c3"/><rect x="380" y="85" width="80" height="55"/><rect x="460" y="85" width="80" height="55"/>
</g>
<text x="100" y="70" font-size="20" text-anchor="middle" font-weight="bold">kg</text>
<text x="180" y="70" font-size="20" text-anchor="middle" font-weight="bold">hg</text>
<text x="260" y="70" font-size="20" text-anchor="middle" font-weight="bold">dag</text>
<text x="340" y="70" font-size="20" text-anchor="middle" font-weight="bold">g</text>
<text x="420" y="70" font-size="20" text-anchor="middle" font-weight="bold">dg</text>
<text x="500" y="70" font-size="20" text-anchor="middle" font-weight="bold">cg</text>
<text x="100" y="122" font-size="28" text-anchor="middle" fill="#1d4ed8" font-weight="bold">3</text>
<text x="180" y="122" font-size="28" text-anchor="middle" fill="#1d4ed8" font-weight="bold">4</text>
<text x="260" y="122" font-size="28" text-anchor="middle" fill="#dc2626" font-weight="bold">0</text>
<text x="340" y="122" font-size="28" text-anchor="middle" fill="#dc2626" font-weight="bold">0</text>
<text x="384" y="130" font-size="34" fill="#16a34a" font-weight="bold">,</text>
<text x="300" y="180" font-size="22" text-anchor="middle" fill="#1f2937" font-weight="bold">3,4 kg = 3400 g</text>
</svg>`
        },
        {
          label: "💶 Come con i soldi",
          html: `<p>Le misure decimali funzionano come i soldi, che conosci già benissimo!</p>
<ul>
<li>1 € = 100 centesimi, come 1 m = 100 cm e 1 l = 100 cl.</li>
<li>Una moneta da 10 c è un <b>decimo</b> di euro, come 1 dl è un decimo di litro.</li>
<li>2,35 € = 235 centesimi, come 2,35 l = 235 cl.</li>
</ul>
<p>Prova con il contatore: ogni moneta 🪙 vale 10 centesimi. Quante monete servono per fare 1 €? E per 1,50 €?</p>`,
          widget: "counter",
          options: { emoji: "🪙", max: 20 }
        },
        {
          label: "🖐️ Con le mani e la cucina",
          html: `<p>Le misure si "sentono" con il corpo. Prova in cucina con un adulto:</p>
<ul>
<li>tieni in mano un pacco di zucchero da <b>1 kg</b> e una mela (circa <b>2 hg</b>): ne servono circa 5 per fare un kg;</li>
<li>un foglio A4 pesa circa <b>5 g</b>; una moneta da 1 € <b>7,5 g</b>;</li>
<li>riempi un bicchiere (circa <b>20 cl</b>) e versalo in una bottiglia da 1 l: quante volte ci sta? 5!</li>
<li>un cucchiaio da minestra contiene circa <b>15 ml</b>.</li>
</ul>
<p>Avere questi "campioni" in testa ti aiuta a capire se un risultato è sensato: un gatto non può pesare 400 kg!</p>`
        },
        {
          label: "🇺🇸 E in America?",
          html: `<p>Negli <b>Stati Uniti</b> usano ancora il sistema "imperiale", non decimale:</p>
<ul>
<li>1 <b>libbra</b> (lb) ≈ 454 g, divisa in 16 <b>once</b> (oz) da circa 28 g;</li>
<li>1 <b>gallone</b> ≈ 3,79 l, diviso in 4 quarti, 8 pinte, 128 once liquide;</li>
<li>1 dollaro = 100 centesimi (almeno questo è decimale!).</li>
</ul>
<p>Prova a trasformare 3 libbre in once: 3 × 16 = 48. Con il sistema decimale basta spostare la virgola, con quello americano bisogna fare calcoli diversi ogni volta. Per questo quasi tutto il mondo ha scelto il <b>sistema metrico</b>. Nel 1999 una sonda della NASA (Mars Climate Orbiter) andò persa proprio per una confusione fra unità americane e metriche!</p>`
        },
        {
          label: "🧊 Il litro in 3D",
          html: `<p>Un litro è lo spazio dentro un <b>cubo con lo spigolo di 10 cm</b> (1 dm). Gira il cubo e immagina di riempirlo d'acqua: conterrebbe 1 l e peserebbe circa 1 kg. Un cubetto da 1 cm di lato contiene invece 1 ml, e 1000 cubetti così riempiono il cubo grande!</p>`,
          scene: "blocks",
          options: { mode: "volume", a: 10, b: 10, c: 10, max: 10 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle misure: tocca un nodo e scopri il perché",
      nodes: [
        { id: "misurare", label: "Misurare", x: 50, y: 6, color: "#64748b", html: "Confrontare una grandezza con un'unità di misura dello stesso tipo.", why: "Da sempre gli uomini misurano per commerciare, costruire, dividere la terra. I primi campioni conosciuti sono i pesi di pietra e il <b>cubito</b> egizio (circa 52 cm, la distanza dal gomito alla punta del dito medio)." },
        { id: "si", label: "Sistema metrico decimale", x: 50, y: 26, color: "#2563eb", html: "Sistema di misure in base 10, oggi Sistema Internazionale (SI).", why: "Nacque in <b>Francia nel 1795</b> dopo la Rivoluzione, \"per tutti i popoli, per tutti i tempi\". Usa la base 10 come il nostro modo di contare (abbiamo 10 dita!). In Italia diventò obbligatorio nel 1861, con l'Unità." },
        { id: "massa", label: "Massa (g, kg)", x: 15, y: 50, color: "#f97316", html: "Quanta materia c'è in un corpo. Si misura con la bilancia.", why: "All'inizio il grammo era la massa di 1 cm³ d'acqua; poi si costruì il campione di platino (1889); dal 2019 si usa la costante di Planck, una legge di natura uguale in tutto l'universo." },
        { id: "capacita", label: "Capacità (l)", x: 50, y: 50, color: "#0ea5e9", html: "Quanto può contenere un recipiente.", why: "Il litro è stato definito come il volume di 1 dm³: così lunghezza, capacità e massa sono collegate fra loro." },
        { id: "valore", label: "Valore (€)", x: 85, y: 50, color: "#16a34a", html: "Quanto costa una cosa, espresso in moneta.", why: "Prima delle monete si faceva il <b>baratto</b>. Le prime monete furono coniate in Lidia (oggi Turchia) verso il 600 a.C. L'euro è nato come moneta \"di conto\" nel 1999 e in contanti nel 2002." },
        { id: "tabella", label: "Equivalenze", x: 32, y: 76, color: "#a855f7", html: "Scrivere la stessa quantità con un'altra unità: × o : per 10, 100, 1000.", why: "Ogni unità è 10 volte la successiva, come le colonne dei numeri (u, da, h). Per questo cambiare unità vuol dire solo spostare la virgola." },
        { id: "tara", label: "Peso lordo, netto, tara", x: 10, y: 92, color: "#b45309", html: "PL = PN + T.", why: "Serve nel commercio: si paga solo la merce (netto), non l'imballaggio (tara)." },
        { id: "spesa", label: "Spesa, resto, guadagno", x: 80, y: 80, color: "#15803d", html: "Resto = soldi dati − spesa; guadagno = ricavo − spesa.", why: "Sono addizioni e sottrazioni con i numeri decimali: 1 € = 100 c, quindi i centesimi sono i \"centesimi\" della virgola." }
      ],
      edges: [
        ["misurare", "si", "con un sistema comune"],
        ["si", "massa", "grammo"],
        ["si", "capacita", "litro"],
        ["massa", "tara", "nel commercio"],
        ["massa", "tabella", "si trasforma con"],
        ["capacita", "tabella", "si trasforma con"],
        ["misurare", "valore", "anche il prezzo"],
        ["valore", "spesa", "si usa per"],
        ["capacita", "massa", "1 l d'acqua ≈ 1 kg"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: capacità ed euro",
      questions: [
        { type: "num", q: "Quanti centilitri ci sono in 2 litri?", answer: 200, unit: "cl", explain: "1 l = 100 cl; 2 × 100 = 200 cl." },
        { type: "num", q: "Compri un quaderno da 2,30 € e paghi con 5 €. Quanto ricevi di resto?", answer: 2.7, unit: "€", explain: "5,00 − 2,30 = 2,70 €." },
        { type: "tf", q: "1 hl è uguale a 100 litri.", answer: true, explain: "Etto = 100: 1 hl = 100 l." }
      ]
    }
  ],
  glossary: [
    { t: "Unità di misura", d: "Grandezza campione con cui si confrontano le altre dello stesso tipo." },
    { t: "Massa", d: "Quantità di materia di un corpo; si misura in grammi e chilogrammi." },
    { t: "Capacità", d: "Quantità che un recipiente può contenere; si misura in litri." },
    { t: "Equivalenza", d: "Uguaglianza fra due misure espresse con unità diverse (es. 1 kg = 1000 g)." },
    { t: "Peso lordo", d: "Peso della merce insieme alla confezione." },
    { t: "Peso netto", d: "Peso della sola merce." },
    { t: "Tara", d: "Peso della confezione o del contenitore." },
    { t: "Quintale", d: "Unità di massa uguale a 100 kg." },
    { t: "Tonnellata", d: "Unità di massa uguale a 1000 kg." },
    { t: "Euro", d: "La moneta dell'Italia e di altri Paesi europei; 1 € = 100 centesimi." },
    { t: "Costo unitario", d: "Il prezzo di un solo oggetto o di una sola unità (es. di 1 kg)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "5 kg = ? g", answer: 5000, unit: "g", explain: "5 × 1000 = 5000 g." },
      { type: "num", q: "3000 ml = ? l", answer: 3, unit: "l", explain: "3000 : 1000 = 3 l." },
      { type: "mc", q: "Quale unità useresti per misurare la massa di un camion?", options: ["grammi", "tonnellate", "litri"], answer: 1, explain: "Un camion pesa molte migliaia di kg: si usano le tonnellate. I litri misurano la capacità." },
      { type: "num", q: "Una scatola di biscotti ha peso lordo 550 g e tara 50 g. Qual è il peso netto?", answer: 500, unit: "g", explain: "PN = 550 − 50 = 500 g." },
      { type: "tf", q: "1 kg = 10 hg.", answer: true, explain: "Fra kg e hg c'è un solo gradino: × 10." },
      { type: "num", q: "Quanti decilitri ci sono in 4 litri?", answer: 40, unit: "dl", explain: "4 × 10 = 40 dl." },
      { type: "num", q: "Quanti centesimi valgono 3,25 €?", answer: 325, unit: "c", explain: "3 € = 300 c, più 25 c = 325 c." },
      { type: "num", q: "Compri 3 succhi a 0,80 € l'uno e paghi con 5 €. Quanto ricevi di resto?", answer: 2.6, unit: "€", explain: "3 × 0,80 = 2,40 €; 5 − 2,40 = 2,60 €." },
      { type: "order", q: "Metti in ordine dalla massa più piccola alla più grande.", items: ["1 mg", "1 g", "1 hg", "1 kg", "1 q", "1 t"], explain: "mg < g < hg < kg < quintale (100 kg) < tonnellata (1000 kg)." },
      { type: "text", q: "Come si chiama il peso del contenitore?", answer: ["tara", "la tara"], explain: "La tara." },
      { type: "mc", q: "Una lattina contiene 33 cl. Quanti millilitri sono?", options: ["3,3 ml", "330 ml", "3300 ml"], answer: 1, explain: "1 cl = 10 ml; 33 × 10 = 330 ml." },
      { type: "num", q: "1,5 kg di mele costano 3 €. Quanto costa 1 kg?", answer: 2, unit: "€", explain: "1,5 kg → 3 €; 0,5 kg → 1 €; 1 kg → 2 €." }
    ],
    gen: [["decAdd", 2]]
  }
});
