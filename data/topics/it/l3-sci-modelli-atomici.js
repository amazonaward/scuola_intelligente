TOPIC('it', {
  id: "l3-sci-modelli-atomici",
  title: "Modelli atomici e configurazione elettronica",
  intro: "Per oltre duemila anni l'atomo è stato un'idea filosofica; tra il 1897 e il 1926 è diventato un oggetto di laboratorio, con un nucleo minuscolo e una nuvola di elettroni che obbedisce alle regole della <b>meccanica quantistica</b>. In questa lezione seguiamo la catena di esperimenti e di idee che porta da <b>Thomson</b> a <b>Bohr</b> fino agli <b>orbitali</b>, e impariamo a scrivere la <b>configurazione elettronica</b> di un elemento: la chiave per capire perché la chimica funziona come funziona.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Dall'atomo indivisibile alle particelle subatomiche",
      html: `<p>Nella lezione sulle leggi ponderali hai visto che Dalton (1803-1808) immaginava gli atomi come sfere piene e indivisibili. Alla fine dell'Ottocento questa immagine entra in crisi: alcuni esperimenti mostrano che dall'atomo si possono estrarre particelle più piccole.</p>
<ul>
<li><b>1897, J. J. Thomson</b> studia i raggi catodici in un tubo a vuoto: sono deviati da campi elettrici e magnetici, quindi sono fatti di particelle con <b>carica negativa</b>, molto più leggere dell'atomo di idrogeno. Ha scoperto l'<b>elettrone</b>. Poiché l'atomo è neutro, deve contenere anche carica positiva: Thomson propone il modello "a panettone" (<i>plum pudding</i>), una sfera di carica positiva diffusa con gli elettroni incastonati come canditi.</li>
<li><b>1909-1911, Geiger, Marsden e Rutherford</b> bombardano una sottilissima lamina d'oro con particelle α (nuclei di elio, con carica positiva). Se il panettone fosse vero, le particelle passerebbero quasi indisturbate. Invece la maggior parte attraversa la lamina, ma <b>alcune vengono deviate di grandi angoli e una su circa 8000 rimbalza all'indietro</b>. Rutherford disse che era come sparare un proiettile da 38 cm contro un foglio di carta velina e vederlo tornare indietro.</li>
<li><b>1911, Rutherford</b> ne deduce il <b>modello nucleare</b>: tutta la carica positiva e quasi tutta la massa sono concentrate in un <b>nucleo</b> minuscolo, circondato da elettroni a grande distanza. Il raggio dell'atomo è circa 10⁻¹⁰ m, quello del nucleo circa 10⁻¹⁵ m: l'atomo è <b>quasi tutto vuoto</b>.</li>
<li><b>1919</b> Rutherford identifica il <b>protone</b>; <b>1932</b> James Chadwick scopre il <b>neutrone</b>, particella senza carica con massa quasi uguale a quella del protone.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Tre modelli a confronto",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="100" cy="140" r="75" fill="#fecaca" stroke="#dc2626" stroke-width="3"/>
<g fill="#2563eb"><circle cx="70" cy="110" r="8"/><circle cx="120" cy="100" r="8"/><circle cx="85" cy="160" r="8"/><circle cx="130" cy="150" r="8"/><circle cx="100" cy="190" r="8"/><circle cx="60" cy="140" r="8"/></g>
<text x="100" y="250" font-size="16" text-anchor="middle" fill="#1f2937" font-weight="bold">Thomson 1904</text>
<text x="100" y="272" font-size="14" text-anchor="middle" fill="#475569">carica + diffusa</text>
<circle cx="300" cy="140" r="75" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<circle cx="300" cy="140" r="7" fill="#dc2626"/>
<circle cx="365" cy="108" r="8" fill="#2563eb"/><circle cx="240" cy="175" r="8" fill="#2563eb"/><circle cx="318" cy="205" r="8" fill="#2563eb"/>
<text x="300" y="250" font-size="16" text-anchor="middle" fill="#1f2937" font-weight="bold">Rutherford 1911</text>
<text x="300" y="272" font-size="14" text-anchor="middle" fill="#475569">nucleo + elettroni</text>
<circle cx="500" cy="140" r="30" fill="none" stroke="#16a34a" stroke-width="2"/>
<circle cx="500" cy="140" r="52" fill="none" stroke="#16a34a" stroke-width="2"/>
<circle cx="500" cy="140" r="75" fill="none" stroke="#16a34a" stroke-width="2"/>
<circle cx="500" cy="140" r="7" fill="#dc2626"/>
<circle cx="530" cy="140" r="7" fill="#2563eb"/><circle cx="460" cy="115" r="7" fill="#2563eb"/><circle cx="500" cy="215" r="7" fill="#2563eb"/>
<text x="500" y="250" font-size="16" text-anchor="middle" fill="#1f2937" font-weight="bold">Bohr 1913</text>
<text x="500" y="272" font-size="14" text-anchor="middle" fill="#475569">orbite quantizzate</text>
<text x="300" y="28" font-size="16" text-anchor="middle" fill="#0369a1">Rosso = carica positiva, blu = elettroni</text>
</svg>`,
      caption: "Ogni modello nasce per spiegare un esperimento che il precedente non riusciva a spiegare."
    },
    {
      type: "example",
      title: "Quanto è vuoto un atomo?",
      html: `<p>Il rapporto tra raggio dell'atomo (10⁻¹⁰ m) e raggio del nucleo (10⁻¹⁵ m) è 10⁵, cioè centomila. Se il nucleo fosse una pallina da 1 cm di diametro posta al centro di un campo da calcio, gli elettroni più esterni sarebbero a circa un chilometro di distanza. Eppure quasi tutta la massa è in quella pallina: i protoni e i neutroni pesano circa 1836 volte un elettrone.</p>
<p>Ma allora perché la materia non ci appare vuota e non attraversiamo il pavimento? Perché a contare sono le <b>forze elettriche</b> tra le nuvole di elettroni degli atomi vicini, che si respingono.</p>`
    },
    {
      type: "text",
      title: "Numero atomico, numero di massa, isotopi",
      html: `<p>Ogni atomo è descritto da due numeri:</p>
<ul>
<li>il <b>numero atomico Z</b> = numero di protoni nel nucleo. Identifica l'elemento: Z = 6 è sempre carbonio. In un atomo neutro è anche il numero di elettroni.</li>
<li>il <b>numero di massa A</b> = protoni + neutroni (i <b>nucleoni</b>). I neutroni sono quindi A − Z.</li>
</ul>
<p>Si scrive ᴬ_Z X, per esempio il carbonio-12 ha Z = 6, A = 12 e quindi 6 neutroni. Atomi con lo <b>stesso Z ma diverso A</b> sono <b>isotopi</b>: il carbonio-14 ha 6 protoni e 8 neutroni, ed è radioattivo. Le proprietà chimiche di due isotopi sono praticamente identiche, perché dipendono dagli elettroni; cambia la massa. Per questo la massa atomica riportata nella tavola periodica è una media pesata degli isotopi naturali (come hai visto nella lezione sulla mole).</p>
<p>Se un atomo perde o acquista elettroni diventa uno <b>ione</b>: Na⁺ ha 11 protoni e 10 elettroni; Cl⁻ ha 17 protoni e 18 elettroni.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: dentro l'atomo",
      questions: [
        { type: "num", q: "Quanti neutroni ha un atomo di ferro-56 (Z = 26)?", answer: 30, explain: "Neutroni = A − Z = 56 − 26 = 30." },
        { type: "mc", q: "Quale osservazione dell'esperimento di Rutherford portò a ipotizzare un nucleo piccolo e denso?", options: ["Quasi tutte le particelle α attraversavano la lamina, ma poche rimbalzavano", "Tutte le particelle α rimbalzavano", "Le particelle α venivano assorbite dall'oro", "Le particelle α si trasformavano in elettroni"], answer: 0, explain: "Il passaggio indisturbato della maggior parte delle particelle indica spazio vuoto; i rari rimbalzi indicano una piccola regione positiva e massiccia." },
        { type: "tf", q: "Due isotopi dello stesso elemento hanno un diverso numero di protoni.", answer: false, explain: "Gli isotopi hanno lo stesso Z (stessi protoni) e diverso numero di neutroni." }
      ]
    },
    {
      type: "text",
      title: "Luce e spettri: il problema che Rutherford non risolveva",
      html: `<p>Il modello di Rutherford ha due difetti gravi. Secondo la fisica classica un elettrone che orbita attorno al nucleo, essendo accelerato, dovrebbe emettere onde elettromagnetiche, perdere energia e <b>precipitare sul nucleo in una frazione di secondo</b>: gli atomi non sarebbero stabili. Inoltre non spiega perché gli atomi emettono luce solo a certi colori.</p>
<p>Se scaldi un gas (o lo attraversi con una scarica elettrica) e analizzi la luce con un prisma, non vedi un arcobaleno continuo ma poche <b>righe luminose</b> a lunghezze d'onda precise: lo <b>spettro a righe</b>, diverso per ogni elemento, come un'impronta digitale. Nel 1885 Johann Balmer trovò una formula per le righe visibili dell'idrogeno, ma nessuno sapeva perché valesse.</p>
<p>Nel 1900 Max Planck aveva proposto che l'energia venga scambiata in pacchetti, i <b>quanti</b>, e nel 1905 Einstein spiegò l'effetto fotoelettrico con i <b>fotoni</b>: un fotone di frequenza ν porta l'energia <b>E = hν</b> (h = 6,626·10⁻³⁴ J·s, costante di Planck). Con ν = c/λ, a lunghezza d'onda minore corrisponde energia maggiore.</p>`
    },
    {
      type: "text",
      title: "Il modello di Bohr (1913)",
      html: `<p>Niels Bohr unisce Rutherford e Planck con due postulati, per l'atomo di idrogeno:</p>
<ol>
<li>L'elettrone può muoversi solo su certe <b>orbite permesse</b>, ciascuna con energia ben definita (<b>livelli energetici</b>, numerati da n = 1, 2, 3…). Su un'orbita permessa non irradia: è in uno <b>stato stazionario</b>.</li>
<li>L'elettrone può <b>saltare</b> da un livello all'altro assorbendo o emettendo un fotone la cui energia è esattamente la <b>differenza</b> tra i due livelli: <b>ΔE = hν</b>.</li>
</ol>
<p>Per l'idrogeno i livelli hanno energia <b>Eₙ = −13,6 eV / n²</b> (l'elettronvolt, eV, vale 1,602·10⁻¹⁹ J). Lo zero è l'elettrone libero; il segno meno indica che l'elettrone è legato. Il livello fondamentale (n = 1) vale −13,6 eV: è l'energia di ionizzazione dell'idrogeno. Il salto da n = 3 a n = 2 libera 3,40 − 1,51 = 1,89 eV, cioè luce rossa a 656 nm: è proprio la riga che Balmer aveva descritto. Il modello spiega quindi quantitativamente lo spettro dell'idrogeno e perché gli atomi sono stabili: sotto n = 1 non si può scendere.</p>`
    },
    {
      type: "svg",
      title: "I livelli dell'idrogeno e le righe di Balmer",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#0f172a"/>
<g stroke="#e2e8f0" stroke-width="3">
<line x1="60" y1="260" x2="320" y2="260"/>
<line x1="60" y1="130" x2="320" y2="130"/>
<line x1="60" y1="88" x2="320" y2="88"/>
<line x1="60" y1="66" x2="320" y2="66"/>
<line x1="60" y1="54" x2="320" y2="54"/>
</g>
<g font-size="15" fill="#e2e8f0">
<text x="330" y="265">n = 1   −13,6 eV</text>
<text x="330" y="135">n = 2   −3,40 eV</text>
<text x="330" y="93">n = 3   −1,51 eV</text>
<text x="330" y="71">n = 4   −0,85 eV</text>
<text x="330" y="52">n = 5   −0,54 eV</text>
</g>
<g stroke-width="3" fill="none">
<path d="M110 88 L110 128" stroke="#ef4444"/><path d="M104 118 L110 130 L116 118" stroke="#ef4444"/>
<path d="M160 66 L160 128" stroke="#06b6d4"/><path d="M154 118 L160 130 L166 118" stroke="#06b6d4"/>
<path d="M210 54 L210 128" stroke="#6366f1"/><path d="M204 118 L210 130 L216 118" stroke="#6366f1"/>
</g>
<text x="110" y="180" font-size="14" fill="#ef4444" text-anchor="middle">656 nm</text>
<text x="160" y="198" font-size="14" fill="#06b6d4" text-anchor="middle">486 nm</text>
<text x="210" y="216" font-size="14" fill="#a5b4fc" text-anchor="middle">434 nm</text>
<text x="450" y="200" font-size="15" fill="#fde68a" text-anchor="middle">I salti verso n = 2</text>
<text x="450" y="220" font-size="15" fill="#fde68a" text-anchor="middle">emettono luce visibile</text>
<text x="300" y="25" font-size="17" fill="#ffffff" text-anchor="middle" font-weight="bold">Energia dell'elettrone nell'atomo di idrogeno</text>
</svg>`,
      caption: "I livelli si avvicinano sempre più salendo: per questo le righe si infittiscono verso il violetto."
    },
    {
      type: "3d",
      title: "L'atomo di Bohr in 3D",
      scene: "atom",
      options: { elements: ["H", "He", "C", "O", "Na"] },
      caption: "Ruota il modello e cambia elemento: gli elettroni si dispongono su gusci successivi (2, poi 8, poi 8...)."
    },
    {
      type: "text",
      title: "Oltre Bohr: la meccanica quantistica",
      html: `<p>Il modello di Bohr funziona benissimo per l'idrogeno ma fallisce già con l'elio e non spiega perché le orbite siano quantizzate. La risposta arriva negli anni Venti:</p>
<ul>
<li><b>1924, de Broglie</b>: anche la materia ha natura ondulatoria, con lunghezza d'onda <b>λ = h/(mv)</b>. Per un elettrone in un atomo λ è paragonabile alle dimensioni dell'atomo: ecco perché sono ammessi solo certi stati, come le note di una corda di chitarra fissata agli estremi. La conferma sperimentale è la diffrazione degli elettroni (Davisson e Germer, 1927).</li>
<li><b>1926, Schrödinger</b> scrive l'equazione d'onda che descrive l'elettrone; <b>Born</b> ne dà l'interpretazione: il quadrato della funzione d'onda dà la <b>probabilità</b> di trovare l'elettrone in un punto.</li>
<li><b>1927, Heisenberg</b>: <b>principio di indeterminazione</b>, non si possono conoscere con precisione arbitraria insieme posizione e quantità di moto (Δx·Δp ≥ ħ/2). Perciò non esistono traiettorie definite.</li>
</ul>
<p>L'elettrone non gira più su un'orbita, ma è descritto da un <b>orbitale</b>: la regione di spazio attorno al nucleo in cui la probabilità di trovarlo è alta (di solito si disegna la superficie che racchiude circa il 90% di probabilità). È una "nuvola" di probabilità, non un percorso.</p>`
    },
    {
      type: "text",
      title: "I numeri quantici",
      html: `<p>Ogni orbitale è identificato da tre <b>numeri quantici</b>, e ogni elettrone ha un quarto numero, lo spin:</p>
<table>
<tr><th>Numero</th><th>Simbolo</th><th>Valori</th><th>Che cosa determina</th></tr>
<tr><td>principale</td><td>n</td><td>1, 2, 3, …</td><td>energia e dimensione dell'orbitale (guscio)</td></tr>
<tr><td>secondario (azimutale)</td><td>l</td><td>0, 1, …, n − 1</td><td>forma: l = 0 s (sferico), 1 p (a manubrio), 2 d, 3 f (sottoguscio)</td></tr>
<tr><td>magnetico</td><td>mₗ</td><td>da −l a +l</td><td>orientamento nello spazio</td></tr>
<tr><td>di spin</td><td>mₛ</td><td>+½ oppure −½</td><td>verso di rotazione intrinseca dell'elettrone</td></tr>
</table>
<p>Ne seguono i conti: un sottoguscio s ha 1 orbitale, p ne ha 3, d ne ha 5, f ne ha 7; ogni orbitale ospita al massimo <b>2 elettroni</b> (con spin opposti). Quindi s contiene fino a 2 elettroni, p fino a 6, d fino a 10, f fino a 14. Il guscio n contiene n sottogusci e n² orbitali, quindi al massimo <b>2n²</b> elettroni: 2, 8, 18, 32…</p>
<p>Esempio: per n = 3 sono permessi l = 0, 1, 2, cioè i sottogusci 3s, 3p, 3d: 1 + 3 + 5 = 9 orbitali, 18 elettroni.</p>`
    },
    {
      type: "remember",
      title: "Le tre regole del riempimento",
      html: `<ol>
<li><b>Principio di minima energia (Aufbau)</b>: gli elettroni occupano prima gli orbitali a energia più bassa. L'ordine è 1s, 2s, 2p, 3s, 3p, <b>4s</b>, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d…</li>
<li><b>Principio di esclusione di Pauli (1925)</b>: in un atomo non possono esserci due elettroni con i quattro numeri quantici uguali. Quindi un orbitale ospita al massimo due elettroni, con spin opposti.</li>
<li><b>Regola di Hund</b>: in orbitali della stessa energia (per esempio i tre 2p) gli elettroni si dispongono prima uno per orbitale, con spin parallelo, e solo dopo si accoppiano.</li>
</ol>`
    },
    {
      type: "svg",
      title: "Il diagramma per il riempimento",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-size="18" font-weight="bold" text-anchor="middle">
<text x="70" y="50" fill="#1d4ed8">1s</text>
<text x="70" y="100" fill="#1d4ed8">2s</text><text x="140" y="100" fill="#16a34a">2p</text>
<text x="70" y="150" fill="#1d4ed8">3s</text><text x="140" y="150" fill="#16a34a">3p</text><text x="210" y="150" fill="#d97706">3d</text>
<text x="70" y="200" fill="#1d4ed8">4s</text><text x="140" y="200" fill="#16a34a">4p</text><text x="210" y="200" fill="#d97706">4d</text><text x="280" y="200" fill="#dc2626">4f</text>
<text x="70" y="250" fill="#1d4ed8">5s</text><text x="140" y="250" fill="#16a34a">5p</text>
</g>
<g stroke="#475569" stroke-width="2" fill="none">
<path d="M45 85 L225 160" stroke-dasharray="4 4"/>
</g>
<text x="400" y="60" font-size="16" fill="#1f2937" font-weight="bold">Ordine di riempimento</text>
<text x="400" y="90" font-size="15" fill="#334155">1s → 2s → 2p → 3s → 3p</text>
<text x="400" y="115" font-size="15" fill="#334155">→ 4s → 3d → 4p → 5s → 4d</text>
<text x="400" y="140" font-size="15" fill="#334155">→ 5p → 6s → 4f → 5d → 6p</text>
<text x="400" y="185" font-size="15" fill="#b45309">Si segue la diagonale:</text>
<text x="400" y="207" font-size="15" fill="#b45309">si legge per somma n + l</text>
<text x="400" y="229" font-size="15" fill="#b45309">crescente (4s prima di 3d)</text>
</svg>`,
      caption: "Il 4s costa meno energia del 3d, per questo il potassio e il calcio riempiono il 4s prima del 3d."
    },
    {
      type: "example",
      title: "Scrivere una configurazione elettronica",
      html: `<p>Si elencano i sottogusci in ordine di riempimento, con gli elettroni in apice.</p>
<ul>
<li><b>Ossigeno (Z = 8)</b>: 1s² 2s² 2p⁴. Nei tre orbitali 2p, per Hund: ↑↓ ↑ ↑ (due elettroni spaiati).</li>
<li><b>Cloro (Z = 17)</b>: 1s² 2s² 2p⁶ 3s² 3p⁵, in forma abbreviata [Ne] 3s² 3p⁵ (si parte dal gas nobile precedente). Ha 7 elettroni di valenza, ne manca uno per l'ottetto.</li>
<li><b>Ferro (Z = 26)</b>: [Ar] 4s² 3d⁶.</li>
<li><b>Eccezioni</b>: cromo (Z = 24) è [Ar] 4s¹ 3d⁵ e rame (Z = 29) è [Ar] 4s¹ 3d¹⁰: i sottogusci d semipieno o pieno sono particolarmente stabili.</li>
</ul>
<p>Gli elettroni dell'ultimo guscio sono gli <b>elettroni di valenza</b>: sono quelli che partecipano ai legami e determinano il comportamento chimico. Nel prossimo argomento vedrai che la tavola periodica è la mappa di queste configurazioni.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: orbitali ed elettroni",
      questions: [
        { type: "num", q: "Quanti elettroni al massimo può contenere il sottoguscio 3d?", answer: 10, explain: "Il sottoguscio d ha 5 orbitali da 2 elettroni: 10." },
        { type: "mc", q: "Qual è la configurazione elettronica del sodio (Z = 11)?", options: ["1s² 2s² 2p⁶ 3s¹", "1s² 2s² 2p⁵ 3s²", "1s² 2s² 2p⁶ 3p¹", "1s² 2s¹ 2p⁶ 3s²"], answer: 0, explain: "11 elettroni: 2 + 2 + 6 = 10 nei primi gusci, l'ultimo va in 3s." },
        { type: "tf", q: "Secondo la regola di Hund, in tre orbitali 2p con 3 elettroni gli elettroni si dispongono uno per orbitale.", answer: true, explain: "Gli elettroni occupano prima singolarmente gli orbitali isoenergetici, con spin parallelo (azoto: 2p³)." }
      ]
    },
    {
      type: "alternatives",
      title: "Altri modi per capire gli orbitali",
      intro: "L'idea di una nuvola di probabilità è difficile: ecco tre immagini diverse.",
      tabs: [
        { label: "🏨 L'albergo quantico", html: "<p>Immagina un albergo con piani (i gusci n). Ogni piano ha più tipi di stanze: al piano 1 solo una stanza (1s), al piano 2 una singola (2s) e tre stanze p, al piano 3 anche cinque stanze d. Ogni stanza ha <b>due letti</b> (spin su e giù): è il principio di Pauli. Gli ospiti arrivano e scelgono sempre la stanza più economica disponibile (Aufbau); in un gruppo di stanze dello stesso prezzo ognuno prende prima una stanza da solo e poi si dorme in due (Hund). Il piano 4 ha le stanze 4s più economiche delle 3d: per questo il 4s si riempie prima.</p>" },
        { label: "🎯 La nuvola di probabilità", html: "<p>Se potessi fotografare l'elettrone di un atomo di idrogeno un milione di volte e sovrapporre le foto, otterresti una nuvola di puntini: densa vicino al nucleo, più rada lontano. Non vedresti mai un'orbita. Un orbitale <b>s</b> è una nuvola sferica; un orbitale <b>p</b> ha due lobi, come un manubrio, con un piano nodale al centro dove la probabilità è zero. I tre p (pₓ, p_y, p_z) sono orientati lungo i tre assi. È come lo sciame di api attorno a un alveare: sai dove è probabile trovarle, non il percorso di ciascuna.</p>" },
        { label: "🎸 Onde stazionarie", html: "<p>Una corda di chitarra fissata agli estremi può vibrare solo con certe frequenze: la fondamentale e le armoniche, con un numero intero di mezze onde. Non esistono note intermedie. Allo stesso modo l'elettrone, che ha natura ondulatoria, \"sta\" attorno al nucleo solo se la sua onda si richiude su sé stessa: ne derivano energie quantizzate e i numeri interi n, l, mₗ. I <b>nodi</b> della corda corrispondono ai nodi degli orbitali: n − l − 1 nodi radiali.</p>" }
      ]
    },
    {
      type: "curiosity",
      title: "Il colore dei fuochi d'artificio",
      html: `<p>Ogni elemento ha le sue righe, perciò ogni elemento dà un colore alla fiamma: il sodio un giallo-arancio intenso, il litio un rosso carminio, il potassio un lilla, il rame un verde-azzurro, lo stronzio un rosso vivo (usato nei razzi di segnalazione). I pirotecnici scelgono i sali in base a questo. Con lo stesso principio, la <b>spettroscopia</b> permette di scoprire di che cosa sono fatte le stelle: l'elio fu individuato nel 1868 nello spettro del Sole, 27 anni prima di essere trovato sulla Terra, e il suo nome viene da <i>helios</i>, il Sole.</p>`
    },
    {
      type: "curiosity",
      title: "Perché il 4s si riempie prima del 3d, ma si svuota prima?",
      html: `<p>Nei metalli di transizione la configurazione del neutro è [Ar] 4s² 3dⁿ, ma quando perdono elettroni per formare ioni, <b>i primi a uscire sono i 4s</b>. Il ferro forma Fe²⁺ ([Ar] 3d⁶) e Fe³⁺ ([Ar] 3d⁵). Il motivo è che, una volta che il 3d si popola, l'attrazione del nucleo lo porta a un'energia inferiore a quella del 4s: l'ordine di riempimento non coincide con l'ordine delle energie in ogni atomo. È un buon esempio di regola empirica con una spiegazione più sottile.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: la storia dell'atomo",
      nodes: [
        { id: "thomson", label: "Elettrone (Thomson)", x: 15, y: 12, color: "#2563eb", html: "Particella negativa scoperta nel 1897; modello a panettone.", why: "I raggi catodici erano deviati dai campi elettrici e magnetici: dal rapporto carica/massa Thomson dedusse che le particelle erano molto più leggere dell'atomo, quindi l'atomo non poteva essere indivisibile." },
        { id: "ruth", label: "Nucleo (Rutherford)", x: 50, y: 12, color: "#dc2626", html: "Carica positiva e massa concentrate in un nucleo piccolissimo.", why: "Il modello di Thomson prevedeva solo piccole deviazioni delle particelle α. I rimbalzi osservati da Geiger e Marsden erano incompatibili con una carica diffusa: servivano un centro duro e piccolo." },
        { id: "planck", label: "Quanti di luce", x: 85, y: 12, color: "#f59e0b", html: "E = hν: l'energia si scambia a pacchetti.", why: "Planck (1900) risolse il problema della radiazione del corpo nero ipotizzando pacchetti di energia; Einstein (1905) vide nella luce stessa dei quanti per spiegare l'effetto fotoelettrico." },
        { id: "spettri", label: "Spettri a righe", x: 15, y: 55, color: "#a855f7", html: "Ogni elemento emette solo certe lunghezze d'onda.", why: "Bunsen e Kirchhoff (1859) ne fecero uno strumento di analisi chimica. Il fatto che le righe fossero discrete era incomprensibile per la fisica classica: suggeriva livelli di energia discreti." },
        { id: "bohr", label: "Modello di Bohr", x: 50, y: 55, color: "#16a34a", html: "Orbite permesse e salti con ΔE = hν.", why: "Bohr (1913) mise insieme il nucleo di Rutherford e i quanti di Planck per spiegare sia la stabilità dell'atomo sia lo spettro dell'idrogeno: funzionò, ma solo per atomi con un elettrone." },
        { id: "onde", label: "Onde di materia", x: 85, y: 55, color: "#0ea5e9", html: "λ = h/(mv); indeterminazione di Heisenberg.", why: "De Broglie (1924) estese la dualità onda-particella agli elettroni; ciò spiega perché solo certe \"onde stazionarie\" sono possibili attorno al nucleo e perché non ha senso parlare di traiettorie." },
        { id: "orbitali", label: "Orbitali e numeri quantici", x: 50, y: 90, color: "#ef4444", html: "n, l, mₗ, mₛ: la carta d'identità di ogni elettrone.", why: "Soluzioni dell'equazione di Schrödinger (1926): i numeri interi n, l, mₗ non sono imposti a mano come in Bohr ma emergono dalla matematica. Lo spin fu introdotto da Uhlenbeck e Goudsmit nel 1925." }
      ],
      edges: [["thomson", "ruth", "superato da"], ["ruth", "bohr", "più i quanti porta a"], ["planck", "bohr", "fornisce"], ["spettri", "bohr", "spiegati da"], ["bohr", "onde", "superato da"], ["onde", "orbitali", "porta agli"]]
    }
  ],
  glossary: [
    { t: "Elettrone", d: "Particella subatomica di carica negativa, scoperta da Thomson nel 1897." },
    { t: "Nucleo", d: "Regione centrale dell'atomo, con protoni e neutroni; contiene quasi tutta la massa." },
    { t: "Numero atomico (Z)", d: "Numero di protoni nel nucleo; identifica l'elemento." },
    { t: "Numero di massa (A)", d: "Somma di protoni e neutroni nel nucleo." },
    { t: "Isotopi", d: "Atomi dello stesso elemento (stesso Z) con diverso numero di neutroni." },
    { t: "Fotone", d: "Quanto di radiazione elettromagnetica, con energia E = hν." },
    { t: "Livello energetico", d: "Energia permessa a un elettrone in un atomo; è quantizzata." },
    { t: "Orbitale", d: "Regione di spazio in cui è alta la probabilità di trovare un elettrone, descritta da una funzione d'onda." },
    { t: "Numeri quantici", d: "n, l, mₗ, mₛ: identificano lo stato di un elettrone in un atomo." },
    { t: "Principio di Pauli", d: "Due elettroni di un atomo non possono avere tutti e quattro i numeri quantici uguali." },
    { t: "Elettroni di valenza", d: "Elettroni del guscio più esterno, responsabili dei legami chimici." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Chi scoprì l'elettrone e con quale strumento?", options: ["Thomson, studiando i raggi catodici", "Rutherford, con la lamina d'oro", "Bohr, con gli spettri", "Chadwick, con le particelle α"], answer: 0, explain: "Thomson (1897) mostrò che i raggi catodici sono particelle negative molto leggere." },
      { type: "tf", q: "Nel modello di Rutherford quasi tutta la massa dell'atomo è concentrata nel nucleo.", answer: true, explain: "Il nucleo è circa 10⁵ volte più piccolo dell'atomo ma contiene protoni e neutroni, che pesano circa 1836 volte un elettrone." },
      { type: "num", q: "Quanti neutroni ha il carbonio-14 (Z = 6)?", answer: 8, explain: "Neutroni = A − Z = 14 − 6 = 8." },
      { type: "mc", q: "Perché secondo la fisica classica l'atomo di Rutherford sarebbe instabile?", options: ["L'elettrone in orbita, accelerato, irradierebbe energia e cadrebbe sul nucleo", "I protoni si respingono", "I neutroni decadono", "Gli elettroni si attraggono"], answer: 0, explain: "Una carica accelerata emette radiazione, quindi perde energia: l'elettrone dovrebbe spiraleggiare sul nucleo." },
      { type: "num", q: "Un elettrone dell'idrogeno ha energia E = −13,6/n² eV. Quanto vale l'energia al livello n = 2?", answer: -3.4, tol: 0.05, unit: "eV", explain: "E₂ = −13,6/4 = −3,4 eV." },
      { type: "mc", q: "Che cosa succede quando un elettrone passa da n = 3 a n = 2 nell'idrogeno?", options: ["Emette un fotone di energia pari alla differenza tra i livelli", "Assorbe un fotone", "Cambia il numero di protoni", "Esce dall'atomo"], answer: 0, explain: "Scendendo di livello l'atomo emette un fotone con ΔE = hν (riga rossa a 656 nm)." },
      { type: "mc", q: "Quale numero quantico determina la forma dell'orbitale?", options: ["l (secondario)", "n (principale)", "mₛ (di spin)", "Nessuno"], answer: 0, explain: "l = 0, 1, 2, 3 corrisponde a s, p, d, f; n dà energia e dimensione, mₗ l'orientamento." },
      { type: "num", q: "Quanti orbitali ha il terzo guscio (n = 3) in tutto?", answer: 9, explain: "n² = 9 orbitali: 1 (3s) + 3 (3p) + 5 (3d)." },
      { type: "mc", q: "Qual è la configurazione elettronica del cloro (Z = 17)?", options: ["1s² 2s² 2p⁶ 3s² 3p⁵", "1s² 2s² 2p⁶ 3s² 3p⁶", "1s² 2s² 2p⁶ 3s¹ 3p⁶", "1s² 2s² 2p⁵ 3s² 3p⁶"], answer: 0, explain: "17 elettroni: 2 + 2 + 6 + 2 + 5. Ha 7 elettroni di valenza." },
      { type: "order", q: "Metti in ordine di riempimento (dal primo) questi sottogusci.", items: ["2p", "3s", "3p", "4s", "3d"], explain: "Ordine: 2p, 3s, 3p, 4s, poi 3d (il 4s ha energia più bassa del 3d)." }
    ]
  }
});
