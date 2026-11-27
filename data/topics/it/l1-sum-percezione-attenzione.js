TOPIC('it', {
  id: "l1-sum-percezione-attenzione",
  title: "Percezione e attenzione",
  intro: "Pensi di vedere il mondo «com'è», come una telecamera. In realtà il cervello <b>costruisce</b> ciò che vediamo: riempie i vuoti, sceglie, interpreta, a volte si sbaglia. In questa lezione scoprirai la differenza tra <b>sensazione e percezione</b>, le <b>leggi della Gestalt</b>, le <b>illusioni ottiche</b> (Müller-Lyer, Ponzo, Kanizsa, il vaso di Rubin) e il ruolo dell'<b>attenzione</b>, con esperimenti famosi come il «gorilla invisibile» e l'effetto Stroop.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Sensazione e percezione",
      html: `<p>Quando guardi un amico che si avvicina, due processi lavorano insieme:</p>
<ul>
<li>La <b>sensazione</b> è la <b>registrazione degli stimoli</b> da parte degli organi di senso: la luce colpisce la retina, le cellule sensibili (coni e bastoncelli) la trasformano in impulsi nervosi. È un processo «dal basso», fisiologico.</li>
<li>La <b>percezione</b> è l'<b>organizzazione e l'interpretazione</b> di quegli impulsi da parte del cervello: riconosciamo «Luca» che si avvicina, e non solo macchie di colore. È un processo che dipende anche da <b>esperienza, aspettative, cultura, emozioni</b> («dall'alto»).</li>
</ul>
<p>La percezione non è una copia della realtà, ma una <b>costruzione attiva</b>. Lo prova il <b>punto cieco</b>: nel punto in cui il nervo ottico esce dalla retina non ci sono cellule sensibili alla luce, eppure non vediamo un «buco» nel campo visivo, perché il cervello lo riempie in base a ciò che c'è intorno.</p>
<p>Uno studioso italiano molto importante in questo campo è <b>Gaetano Kanizsa</b> (1913-1993), triestino, allievo della tradizione gestaltista, di cui vedremo il famoso triangolo.</p>`
    },
    {
      type: "svg",
      title: "Dal mondo al cervello",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="15" y="100" width="120" height="90" rx="12" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="75" y="135" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">STIMOLO</text>
<text x="75" y="157" font-size="14" text-anchor="middle" fill="#0f172a">luce, suoni,</text>
<text x="75" y="175" font-size="14" text-anchor="middle" fill="#0f172a">odori...</text>
<rect x="170" y="100" width="120" height="90" rx="12" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<text x="230" y="135" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">SENSAZIONE</text>
<text x="230" y="157" font-size="14" text-anchor="middle" fill="#0f172a">organi di senso</text>
<text x="230" y="175" font-size="14" text-anchor="middle" fill="#0f172a">(retina...)</text>
<rect x="325" y="100" width="120" height="90" rx="12" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="385" y="135" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">PERCEZIONE</text>
<text x="385" y="157" font-size="14" text-anchor="middle" fill="#0f172a">organizzazione</text>
<text x="385" y="175" font-size="14" text-anchor="middle" fill="#0f172a">e significato</text>
<rect x="480" y="100" width="105" height="90" rx="12" fill="#e9d5ff" stroke="#6b21a8" stroke-width="2"/>
<text x="532" y="135" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">RISPOSTA</text>
<text x="532" y="157" font-size="14" text-anchor="middle" fill="#0f172a">«È Luca!»</text>
<polygon points="138,145 166,145 158,137" fill="#0f172a"/><line x1="135" y1="145" x2="166" y2="145" stroke="#0f172a" stroke-width="3"/>
<line x1="290" y1="145" x2="322" y2="145" stroke="#0f172a" stroke-width="3"/><polygon points="322,145 312,138 312,152" fill="#0f172a"/>
<line x1="445" y1="145" x2="477" y2="145" stroke="#0f172a" stroke-width="3"/><polygon points="477,145 467,138 467,152" fill="#0f172a"/>
<rect x="325" y="30" width="260" height="46" rx="10" fill="#fed7aa" stroke="#9a3412" stroke-width="2"/>
<text x="455" y="58" font-size="14" text-anchor="middle" fill="#0f172a">esperienza, attese, cultura, emozioni</text>
<line x1="385" y1="78" x2="385" y2="98" stroke="#9a3412" stroke-width="2" stroke-dasharray="5 4"/>
<text x="300" y="250" font-size="14" text-anchor="middle" fill="#0f172a">La percezione è un'interpretazione: stessa sensazione, percezioni diverse.</text>
</svg>`,
      caption: "La sensazione è il materiale grezzo; la percezione gli dà forma e significato."
    },
    {
      type: "text",
      title: "2. La Gestalt: percepiamo forme, non pezzi",
      html: `<p>All'inizio del Novecento, in Germania, <b>Max Wertheimer</b> (1880-1943), <b>Wolfgang Köhler</b> e <b>Kurt Koffka</b> fondarono la psicologia della <b>Gestalt</b> (parola tedesca che significa «forma, configurazione»). Nel <b>1912</b> Wertheimer pubblicò gli studi sul <b>fenomeno phi</b>: due luci fisse che si accendono e spengono in rapida successione vengono viste come <b>una luce che si muove</b> (è il principio del cinema e delle insegne luminose). Il movimento non è negli stimoli: lo «aggiunge» il cervello. Per questo il tutto è <b>diverso dalla somma delle parti</b>: una melodia resta la stessa se la trasponi in un'altra tonalità, anche se tutte le note sono cambiate.</p>
<p>I gestaltisti descrissero alcune <b>leggi dell'organizzazione percettiva</b>, cioè i criteri con cui il cervello raggruppa gli stimoli:</p>
<ul>
<li><b>Figura e sfondo</b>: percepiamo sempre un oggetto che «sta davanti» (figura) su uno sfondo.</li>
<li><b>Vicinanza</b>: gli elementi vicini si vedono come gruppo.</li>
<li><b>Somiglianza</b>: elementi simili (per colore, forma) si raggruppano.</li>
<li><b>Chiusura</b>: tendiamo a completare le figure aperte.</li>
<li><b>Continuità di direzione</b>: vediamo linee che proseguono con andamento regolare, invece di spezzarsi.</li>
<li><b>Buona forma</b> (o pregnanza): tra le interpretazioni possibili scegliamo la più semplice, regolare e simmetrica.</li>
<li><b>Destino comune</b>: elementi che si muovono insieme sono visti come un'unità (uno stormo).</li>
</ul>`
    },
    {
      type: "svg",
      title: "Le leggi della Gestalt in un colpo d'occhio",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<text x="100" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Vicinanza</text>
<g fill="#1e3a8a"><circle cx="40" cy="70" r="8"/><circle cx="64" cy="70" r="8"/><circle cx="88" cy="70" r="8"/><circle cx="130" cy="70" r="8"/><circle cx="154" cy="70" r="8"/><circle cx="178" cy="70" r="8"/><circle cx="40" cy="100" r="8"/><circle cx="64" cy="100" r="8"/><circle cx="88" cy="100" r="8"/><circle cx="130" cy="100" r="8"/><circle cx="154" cy="100" r="8"/><circle cx="178" cy="100" r="8"/></g>
<text x="100" y="140" font-size="14" text-anchor="middle" fill="#0f172a">due gruppi, non 12 punti</text>
<text x="300" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Somiglianza</text>
<g><circle cx="230" cy="70" r="9" fill="#dc2626"/><circle cx="260" cy="70" r="9" fill="#1e3a8a"/><circle cx="290" cy="70" r="9" fill="#dc2626"/><circle cx="320" cy="70" r="9" fill="#1e3a8a"/><circle cx="350" cy="70" r="9" fill="#dc2626"/><circle cx="380" cy="70" r="9" fill="#1e3a8a"/>
<circle cx="230" cy="100" r="9" fill="#dc2626"/><circle cx="260" cy="100" r="9" fill="#1e3a8a"/><circle cx="290" cy="100" r="9" fill="#dc2626"/><circle cx="320" cy="100" r="9" fill="#1e3a8a"/><circle cx="350" cy="100" r="9" fill="#dc2626"/><circle cx="380" cy="100" r="9" fill="#1e3a8a"/></g>
<text x="305" y="140" font-size="14" text-anchor="middle" fill="#0f172a">si vedono colonne di colore</text>
<text x="510" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Chiusura</text>
<path d="M 450 100 A 40 40 0 1 1 470 112" fill="none" stroke="#166534" stroke-width="5" stroke-dasharray="10 8"/>
<text x="510" y="140" font-size="14" text-anchor="middle" fill="#0f172a">vediamo un cerchio</text>
<text x="150" y="176" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Figura e sfondo</text>
<rect x="60" y="190" width="180" height="90" fill="#0f172a"/>
<path d="M 110 280 L 110 235 Q 110 205 150 205 Q 190 205 190 235 L 190 280 Z" fill="#f8fafc"/>
<text x="400" y="176" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Il triangolo di Kanizsa</text>
<g fill="#0f172a"><circle cx="400" cy="208" r="14"/><circle cx="362" cy="272" r="14"/><circle cx="438" cy="272" r="14"/></g>
<polygon points="400,208 362,272 438,272" fill="#ffffff"/>
<text x="520" y="240" font-size="14" text-anchor="middle" fill="#0f172a">si «vede» un</text>
<text x="520" y="258" font-size="14" text-anchor="middle" fill="#0f172a">triangolo che non c'è</text>
</svg>`,
      caption: "Il cervello organizza ciò che vede secondo regole: raggruppa, completa, semplifica."
    },
    {
      type: "example",
      title: "Le leggi in azione nella vita di ogni giorno",
      html: `<ul>
<li><b>Vicinanza</b>: in una pagina web, i pulsanti ravvicinati sembrano appartenere alla stessa funzione.</li>
<li><b>Somiglianza</b>: nelle divise sportive, i giocatori con la stessa maglia si vedono subito come una squadra.</li>
<li><b>Chiusura</b>: il logo del WWF mostra un panda costruito con macchie nere non collegate, ma noi vediamo l'animale intero.</li>
<li><b>Destino comune</b>: in uno stormo di storni, centinaia di puntini che si muovono insieme sono visti come un'unica «nuvola».</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Il triangolo che non c'è",
      html: `<p>Nel <b>1955</b> Gaetano Kanizsa pubblicò la figura del triangolo che porta il suo nome: tre «pacmen» e tre angoli aperti suggeriscono un triangolo bianco, che sembra perfino più chiaro dello sfondo, con <b>contorni illusori</b> che in realtà non esistono. È un esempio di <b>chiusura</b> e di <b>buona forma</b>: il cervello preferisce «spiegare» il disegno con un triangolo sovrapposto, piuttosto che con tre cerchi mutilati.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: sensazione, percezione, Gestalt",
      questions: [
        { type: "mc", q: "Il processo con cui il cervello organizza e interpreta i dati dei sensi è...", options: ["la sensazione", "la percezione", "l'attenzione selettiva", "il condizionamento"], answer: 1, explain: "La sensazione registra, la percezione interpreta." },
        { type: "mc", q: "Il fenomeno phi di Wertheimer (1912) mostra che...", options: ["il movimento può essere percepito anche se nello stimolo non c'è", "i colori non esistono", "la memoria è infallibile", "l'attenzione è limitata"], answer: 0, explain: "Due luci alternate vengono viste come una luce che si muove." },
        { type: "tf", q: "Secondo la Gestalt la percezione è la semplice somma di sensazioni elementari.", answer: false, explain: "Il tutto è diverso dalla somma delle parti: contano le relazioni e l'organizzazione." }
      ]
    },
    {
      type: "text",
      title: "3. Le illusioni ottiche e le costanze percettive",
      html: `<p>Le <b>illusioni</b> sono «errori» sistematici e condivisi della percezione. Non indicano un cervello malfunzionante, ma i <b>criteri</b> che usa per interpretare il mondo. Tre esempi classici:</p>
<ul>
<li><b>Illusione di Müller-Lyer</b> (Franz Müller-Lyer, 1889): due segmenti uguali sembrano di lunghezza diversa se terminano con frecce rivolte verso l'interno o verso l'esterno.</li>
<li><b>Illusione di Ponzo</b> (Mario Ponzo, 1913): due segmenti uguali tra due linee convergenti (come i binari) sembrano diversi; quello più «lontano» appare più grande.</li>
<li><b>Vaso di Rubin</b> (Edgar Rubin, 1915): un'immagine vista o come un vaso, o come due profili che si guardano. Illustra la <b>reversibilità di figura e sfondo</b>: non possiamo vedere entrambi insieme.</li>
</ul>
<p>Le illusioni sono legate alle <b>costanze percettive</b>: continuiamo a percepire un oggetto con grandezza, forma e colore stabili, pur variando le condizioni di osservazione. Una persona che si allontana proietta un'immagine sempre più piccola sulla retina, ma noi non la vediamo «rimpicciolire»: il cervello compensa con la distanza (<b>costanza di grandezza</b>). Un libro visto di lato resta rettangolare (<b>costanza di forma</b>). Le illusioni nascono quando questi meccanismi vengono «ingannati» da indizi fuorvianti.</p>`
    },
    {
      type: "svg",
      title: "Müller-Lyer e Ponzo",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<text x="150" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Müller-Lyer</text>
<line x1="50" y1="80" x2="250" y2="80" stroke="#1e3a8a" stroke-width="4"/>
<line x1="50" y1="80" x2="75" y2="60" stroke="#1e3a8a" stroke-width="4"/><line x1="50" y1="80" x2="75" y2="100" stroke="#1e3a8a" stroke-width="4"/>
<line x1="250" y1="80" x2="225" y2="60" stroke="#1e3a8a" stroke-width="4"/><line x1="250" y1="80" x2="225" y2="100" stroke="#1e3a8a" stroke-width="4"/>
<line x1="50" y1="180" x2="250" y2="180" stroke="#dc2626" stroke-width="4"/>
<line x1="50" y1="180" x2="25" y2="160" stroke="#dc2626" stroke-width="4"/><line x1="50" y1="180" x2="25" y2="200" stroke="#dc2626" stroke-width="4"/>
<line x1="250" y1="180" x2="275" y2="160" stroke="#dc2626" stroke-width="4"/><line x1="250" y1="180" x2="275" y2="200" stroke="#dc2626" stroke-width="4"/>
<text x="150" y="240" font-size="14" text-anchor="middle" fill="#0f172a">I due segmenti sono lunghi uguale (200).</text>
<text x="450" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Ponzo</text>
<line x1="380" y1="270" x2="440" y2="40" stroke="#6b7280" stroke-width="3"/>
<line x1="540" y1="270" x2="470" y2="40" stroke="#6b7280" stroke-width="3"/>
<line x1="432" y1="85" x2="480" y2="85" stroke="#dc2626" stroke-width="6"/>
<line x1="450" y1="205" x2="498" y2="205" stroke="#1e3a8a" stroke-width="6"/>
<text x="450" y="290" font-size="14" text-anchor="middle" fill="#0f172a">I due segmenti sono uguali (48).</text>
</svg>`,
      caption: "Misura con un righello: in entrambe le figure i segmenti confrontati sono uguali, ma il contesto ci inganna."
    },
    {
      type: "widget",
      title: "Abbina studioso e scoperta",
      widget: "match",
      options: { pairs: [
        ["Wertheimer (1912)", "Fenomeno phi"],
        ["Kanizsa (1955)", "Contorni illusori"],
        ["Rubin (1915)", "Vaso / due profili"],
        ["Müller-Lyer (1889)", "Segmenti con frecce"],
        ["Ponzo (1913)", "Linee convergenti"]
      ] },
      caption: "Collega ogni studioso al suo contributo."
    },
    {
      type: "text",
      title: "4. L'attenzione: un riflettore limitato",
      html: `<p>In ogni istante i nostri sensi ricevono molta più informazione di quanta il cervello possa elaborare. L'<b>attenzione</b> è il processo che <b>seleziona</b> alcuni stimoli e ne ignora altri. È una risorsa a <b>capacità limitata</b>.</p>
<ul>
<li><b>Attenzione selettiva</b>: concentrarsi su uno stimolo escludendo gli altri. Esempio: il <b>«cocktail party effect»</b> studiato da Colin Cherry (1953): in una stanza rumorosa seguiamo una sola conversazione, ma se qualcuno pronuncia il nostro nome lo notiamo anche se non lo ascoltavamo. Donald Broadbent propose (1958) il modello del <b>filtro</b>: un «collo di bottiglia» lascia passare solo le informazioni scelte (modelli successivi, come quello di Treisman, ammettono un filtro più «sfumato» in cui gli stimoli importanti passano comunque).</li>
<li><b>Attenzione sostenuta</b> (vigilanza): mantenere la concentrazione a lungo, come in una lezione.</li>
<li><b>Attenzione divisa</b>: tentare di fare più cose insieme. Funziona solo se un compito è <b>automatizzato</b> (camminare e parlare), non se entrambi richiedono risorse (guidare e scrivere un messaggio).</li>
</ul>
<p>Si può dirigere l'attenzione in modo <b>volontario</b> («dall'alto», decido io) o <b>catturata</b> da stimoli forti (un rumore improvviso, un colore acceso: «dal basso»).</p>`
    },
    {
      type: "example",
      title: "Il gorilla invisibile (Simons e Chabris, 1999)",
      html: `<p>Daniel Simons e Christopher Chabris mostrarono a dei volontari un breve filmato in cui due squadre di giocatori, una in maglia bianca e una in maglia nera, si passavano una palla da basket. Il compito era <b>contare i passaggi</b> della squadra bianca. A metà video una persona travestita da <b>gorilla</b> attraversava la scena, si batteva il petto e usciva, restando visibile circa nove secondi.</p>
<p>Risultato: circa <b>la metà</b> dei partecipanti, concentrata sul compito, <b>non notò il gorilla</b>. Questo fenomeno si chiama <b>cecità attentiva</b> (<i>inattentional blindness</i>): se l'attenzione è impegnata altrove, possiamo non vedere ciò che ci passa davanti agli occhi. Spiega perché alla guida un guidatore distratto da un messaggio può «non vedere» un pedone.</p>`
    },
    {
      type: "curiosity",
      title: "L'effetto Stroop",
      html: `<p>Nel 1935 John Ridley Stroop mostrò che nominare il <b>colore dell'inchiostro</b> è più lento quando la parola scritta indica un altro colore (per esempio la parola ROSSO scritta in blu). Leggere è così automatico che interferisce con il compito: l'attenzione deve <b>inibire</b> la risposta automatica. Il test di Stroop è ancora usato per valutare il controllo attentivo.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire attenzione e percezione",
      intro: "Se questi concetti restano astratti, prova a guardarli da un'altra angolazione.",
      tabs: [
        { label: "🔦 Il riflettore", html: `<p>L'attenzione è come il <b>fascio di una torcia</b> in una stanza buia: illumina bene un punto, lasciando il resto in ombra. Puoi spostarlo (attenzione selettiva), tenerlo fermo a lungo (sostenuta) o provare a illuminare due punti con un fascio allargato (divisa), ma perdi in nitidezza.</p>` },
        { label: "🎬 Il regista", html: `<p>La percezione è come un <b>regista</b> che monta un film partendo da riprese incomplete: sceglie le scene, riempie i buchi (punto cieco, chiusura), mantiene la coerenza (costanze). Per questo due spettatori possono «montare» lo stesso materiale in modo diverso, in base a esperienze e aspettative.</p>` },
        { label: "👉 Prova tu", html: `<p>Chiudi l'occhio sinistro e fissa con il destro la croce a sinistra di un foglio, tenendo il foglio a circa 30-40 cm; poni a destra, a una decina di centimetri, un punto nero. Avvicinando o allontanando il foglio, il punto <b>scomparirà</b>: sta cadendo nel tuo punto cieco. Il cervello riempie il vuoto con lo sfondo.</p>` }
      ]
    },
    {
      type: "decision",
      title: "Messaggio mentre guidi?",
      html: `<p>Sei in scooter e ti arriva una notifica. Sai che l'attenzione è una risorsa limitata, ma pensi: «Faccio in un attimo, ormai guido in automatico».</p>`,
      question: "Che cosa conviene fare, alla luce dei dati della psicologia?",
      options: [
        { label: "Rispondere rapidamente: guidare è ormai automatico.", outcome: "Guidare è automatico solo in condizioni prevedibili. Basta un imprevisto (un pedone, una frenata) e le risorse attentive sono occupate dalla lettura: aumenta moltissimo il rischio di cecità attentiva." },
        { label: "Aspettare di essere fermo in un luogo sicuro.", outcome: "È la scelta corretta: l'attenzione divisa tra due compiti complessi peggiora entrambi." },
        { label: "Rispondere a voce con il vivavoce: così non si guarda lo schermo.", outcome: "Meno rischioso della scrittura, ma anche una conversazione impegna risorse cognitive e riduce la capacità di accorgersi degli imprevisti." }
      ],
      answer: 1,
      explain: "Gli studi sull'attenzione mostrano che il <b>multitasking</b> con compiti non automatici è in realtà un continuo passaggio da un compito all'altro, con costi in tempo ed errori. Anche l'esperimento del gorilla invisibile dimostra che chi è concentrato su altro non vede ciò che è davanti."
    },
    {
      type: "conceptMap",
      title: "Mappa: percezione e attenzione",
      nodes: [
        { id: "sens", label: "Sensazione", x: 15, y: 10, color: "#3b82f6", html: "Registrazione degli stimoli da parte degli organi di senso.", why: "Dipende dalla fisiologia: coni e bastoncelli nella retina, recettori dell'orecchio, della pelle. Senza sensazione non c'è materiale su cui lavorare." },
        { id: "perc", label: "Percezione", x: 50, y: 10, color: "#10b981", html: "Organizzazione e interpretazione degli stimoli.", why: "Il cervello deve scegliere un'interpretazione: i dati dei sensi sono ambigui (un'immagine 2D sulla retina può corrispondere a infinite scene 3D). Per questo usa regole e conoscenze." },
        { id: "gest", label: "Leggi della Gestalt", x: 85, y: 10, color: "#f59e0b", html: "Vicinanza, somiglianza, chiusura, continuità, buona forma, destino comune.", why: "Wertheimer, Köhler e Koffka (dal 1912) osservarono che l'organizzazione percettiva è spontanea e segue principi di semplicità e regolarità: sono scorciatoie utili per capire in fretta il mondo." },
        { id: "ill", label: "Illusioni", x: 85, y: 50, color: "#ef4444", html: "Müller-Lyer, Ponzo, Kanizsa, Rubin.", why: "Nascono quando indizi fuorvianti attivano meccanismi che di solito funzionano (come le costanze percettive). Rivelano le regole nascoste della percezione." },
        { id: "att", label: "Attenzione", x: 50, y: 50, color: "#8b5cf6", html: "Selezione degli stimoli: selettiva, sostenuta, divisa.", why: "Le risorse di elaborazione sono limitate (Broadbent, 1958): senza un filtro saremmo sommersi dalle informazioni. Il prezzo è che ciò che non selezioniamo può sfuggire (gorilla invisibile)." },
        { id: "cec", label: "Cecità attentiva", x: 20, y: 80, color: "#ec4899", html: "Non vedere ciò che è visibile perché l'attenzione è altrove.", why: "Simons e Chabris (1999): metà dei partecipanti non vede un gorilla. Mostra che vedere non è un fatto passivo, ma dipende da ciò che stiamo cercando." }
      ],
      edges: [["sens", "perc", "alimenta"], ["perc", "gest", "segue"], ["gest", "ill", "ne svela i limiti"], ["att", "perc", "orienta"], ["att", "cec", "se limitata causa"]]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Sensazione = <b>registrare</b>; percezione = <b>interpretare</b>.</li>
<li>La Gestalt (1912, Wertheimer, Köhler, Koffka): il <b>tutto</b> non è la somma delle parti.</li>
<li>Le illusioni mostrano le <b>regole</b> della percezione, non un suo difetto.</li>
<li>L'attenzione è <b>limitata</b>: il multitasking è un'illusione se i compiti non sono automatici.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: illusioni e attenzione",
      questions: [
        { type: "mc", q: "Nell'esperimento del gorilla invisibile i partecipanti dovevano...", options: ["contare i passaggi di una squadra", "riconoscere i volti", "ricordare i colori", "risolvere indovinelli"], answer: 0, explain: "Il compito di conteggio impegnava l'attenzione." },
        { type: "tf", q: "Il vaso di Rubin illustra la reversibilità di figura e sfondo.", answer: true, explain: "Si vede o il vaso o due profili, mai entrambi insieme." },
        { type: "mc", q: "Il «cocktail party effect» è un esempio di attenzione...", options: ["selettiva", "divisa", "sostenuta", "assente"], answer: 0, explain: "Seguiamo una sola conversazione scartando le altre, ma restiamo sensibili al nostro nome." }
      ]
    }
  ],
  glossary: [
    { t: "Sensazione", d: "Registrazione degli stimoli da parte degli organi di senso." },
    { t: "Percezione", d: "Organizzazione e interpretazione delle sensazioni da parte del cervello." },
    { t: "Gestalt", d: "«Forma»: scuola che studia l'organizzazione percettiva in totalità strutturate." },
    { t: "Figura e sfondo", d: "Distinzione percettiva fra l'oggetto in primo piano e ciò che gli sta dietro." },
    { t: "Fenomeno phi", d: "Illusione di movimento prodotta da luci che si accendono in successione (Wertheimer, 1912)." },
    { t: "Costanza percettiva", d: "Capacità di percepire stabili grandezza, forma, colore di un oggetto al variare delle condizioni." },
    { t: "Illusione ottica", d: "Errore percettivo sistematico e condiviso." },
    { t: "Attenzione selettiva", d: "Capacità di concentrarsi su alcuni stimoli ignorando gli altri." },
    { t: "Cecità attentiva", d: "Mancata percezione di uno stimolo visibile perché l'attenzione è altrove." },
    { t: "Effetto Stroop", d: "Interferenza tra lettura automatica e denominazione del colore dell'inchiostro (1935)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cosa distingue la percezione dalla sensazione?", options: ["La percezione interpreta e organizza gli stimoli", "La percezione avviene solo nei sogni", "La sensazione dipende dalla cultura, la percezione no", "Sono la stessa cosa"], answer: 0, explain: "La sensazione registra, la percezione dà forma e significato." },
      { type: "tf", q: "Il punto cieco della retina è un buco che vediamo nero nel campo visivo.", answer: false, explain: "Il cervello riempie il vuoto con l'informazione circostante, perciò non lo vediamo." },
      { type: "mc", q: "Chi pubblicò nel 1912 gli studi sul fenomeno phi?", options: ["Kanizsa", "Wertheimer", "Stroop", "Broadbent"], answer: 1, explain: "Max Wertheimer, fondatore della Gestalt." },
      { type: "mc", q: "Una serie di punti che si vedono come due gruppi separati illustra la legge di...", options: ["vicinanza", "chiusura", "destino comune", "figura-sfondo"], answer: 0, explain: "Gli elementi vicini vengono raggruppati." },
      { type: "text", q: "Come si chiama l'illusione con due segmenti uguali che terminano con frecce rivolte all'interno o all'esterno?", answer: ["muller-lyer", "müller-lyer", "illusione di muller-lyer", "illusione di müller-lyer"], explain: "È l'illusione di Müller-Lyer (1889)." },
      { type: "mc", q: "Il «gorilla invisibile» dimostra la...", options: ["cecità attentiva", "costanza di forma", "legge della chiusura", "memoria a breve termine"], answer: 0, explain: "Chi è concentrato su un compito può non vedere uno stimolo inatteso." },
      { type: "mc", q: "Il modello del filtro (Broadbent, 1958) afferma che...", options: ["un collo di bottiglia seleziona le informazioni da elaborare", "tutti gli stimoli sono elaborati fino in fondo", "l'attenzione non ha limiti", "la percezione è innata"], answer: 0, explain: "Un filtro lascia passare solo parte dell'informazione." },
      { type: "tf", q: "Il multitasking funziona bene anche tra due compiti che richiedono entrambi concentrazione.", answer: false, explain: "L'attenzione è limitata: si passa da un compito all'altro con costi in tempo ed errori." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Illusione di Müller-Lyer", "Fenomeno phi di Wertheimer", "Vaso di Rubin", "Triangolo di Kanizsa"], explain: "1889, 1912, 1915, 1955." },
      { type: "mc", q: "L'effetto Stroop mostra che...", options: ["una risposta automatica (leggere) può interferire con il compito richiesto", "i colori sono percepiti uguali da tutti", "la memoria è limitata", "i bambini percepiscono meglio degli adulti"], answer: 0, explain: "Leggere è automatico e interferisce con il nominare il colore dell'inchiostro." }
    ]
  }
});
