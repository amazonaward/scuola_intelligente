TOPIC('it', {
  "id": "m2-mat-pitagora",
  "title": "Il teorema di Pitagora",
  "intro": "Il teorema di Pitagora è una delle scoperte più famose della matematica: collega i tre lati di ogni <b>triangolo rettangolo</b> e ci permette di calcolare distanze che non possiamo misurare direttamente.",
  "minutes": 35,
  "sections": [
    {
      "type": "text",
      "title": "1. Il triangolo rettangolo",
      "html": "<p>Un <b>triangolo rettangolo</b> ha un angolo retto (90°). I suoi lati hanno nomi speciali:</p><ul><li>i due lati che formano l'angolo retto si chiamano <b>cateti</b> (li indichiamo con <i>a</i> e <i>b</i>);</li><li>il lato opposto all'angolo retto è l'<b>ipotenusa</b> (<i>c</i>): è sempre il lato più lungo.</li></ul><p>Pitagora era un matematico e filosofo greco vissuto nel VI secolo a.C. a Crotone, in Calabria.</p>"
    },
    {
      "type": "svg",
      "title": "Cateti e ipotenusa",
      "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><polygon points=\"150,250 450,250 150,50\" fill=\"#dbeafe\" stroke=\"#1e3a8a\" stroke-width=\"4\"/><rect x=\"150\" y=\"225\" width=\"25\" height=\"25\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><text x=\"300\" y=\"280\" font-size=\"20\" fill=\"#b91c1c\" text-anchor=\"middle\" font-family=\"sans-serif\">cateto b</text><text x=\"95\" y=\"155\" font-size=\"20\" fill=\"#b91c1c\" text-anchor=\"middle\" font-family=\"sans-serif\">cateto a</text><text x=\"330\" y=\"135\" font-size=\"20\" fill=\"#15803d\" font-family=\"sans-serif\">ipotenusa c</text><text x=\"190\" y=\"240\" font-size=\"16\" fill=\"#1e3a8a\" font-family=\"sans-serif\">90°</text></svg>",
      "caption": "I cateti formano l'angolo retto; l'ipotenusa sta di fronte a esso."
    },
    {
      "type": "remember",
      "title": "L'enunciato",
      "html": "<p>In ogni triangolo rettangolo <b>il quadrato costruito sull'ipotenusa è equivalente alla somma dei quadrati costruiti sui cateti</b>.</p><p style=\"font-size:1.3em;text-align:center\"><b>c² = a² + b²</b></p><p>Formule inverse: <b>c = √(a² + b²)</b> &nbsp; <b>a = √(c² − b²)</b> &nbsp; <b>b = √(c² − a²)</b></p>"
    },
    {
      "type": "svg",
      "title": "La dimostrazione con i quadrati (3, 4, 5)",
      "svg": "<svg viewBox=\"0 0 600 370\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"370\" fill=\"#ffffff\"/><g stroke=\"#334155\" stroke-width=\"2\"><rect x=\"150\" y=\"230\" width=\"120\" height=\"120\" fill=\"#fde68a\"/><rect x=\"60\" y=\"140\" width=\"90\" height=\"90\" fill=\"#bfdbfe\"/><polygon points=\"150,140 270,230 360,110 240,20\" fill=\"#bbf7d0\"/><polygon points=\"150,230 270,230 150,140\" fill=\"#e2e8f0\" stroke-width=\"3\"/></g><text x=\"210\" y=\"297\" font-size=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\">b² = 16</text><text x=\"105\" y=\"192\" font-size=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\">a² = 9</text><text x=\"255\" y=\"130\" font-size=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\">c² = 25</text><text x=\"400\" y=\"220\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e3a8a\">a = 3, b = 4, c = 5</text><text x=\"400\" y=\"255\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#15803d\">9 + 16 = 25 ✔</text><text x=\"400\" y=\"290\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#475569\">area gialla + area blu</text><text x=\"400\" y=\"312\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#475569\">= area verde</text></svg>",
      "caption": "Costruendo un quadrato su ogni lato, l'area del quadrato verde (sull'ipotenusa) è uguale alla somma delle altre due."
    },
    {
      "type": "widget",
      "title": "Prova tu: muovi i cateti",
      "widget": "pythagoras",
      "options": {
        "a": 3,
        "b": 4
      },
      "caption": "Cambia la lunghezza dei cateti e osserva come cambiano i quadrati: la somma delle aree piccole è sempre uguale all'area grande."
    },
    {
      "type": "alternatives",
      "title": "Altri modi per capirlo: 6 dimostrazioni dal mondo",
      "intro": "Il teorema di Pitagora ha più di 350 dimostrazioni diverse! Se una non ti convince, prova un'altra: a ognuno «scatta» quella giusta.",
      "tabs": [
        {
          "label": "🇨🇳 Cina: il Gougu",
          "html": "<p>Nel <b>Zhou Bi Suan Jing</b>, un antico testo cinese di astronomia e matematica (i suoi contenuti risalgono a circa 2000 anni fa), il teorema si chiama <b>Gougu</b> (gou = cateto corto, gu = cateto lungo). La figura classica è un quadrato di lato a + b con dentro quattro triangoli uguali: lo spazio centrale è il quadrato dell'ipotenusa.</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"600\" height=\"300\" fill=\"#fffbeb\"/><g transform=\"translate(40,20)\"><rect x=\"0\" y=\"0\" width=\"260\" height=\"260\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"3\"/><polygon points=\"0,0 100,0 0,160\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"100,0 260,0 260,100\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"260,100 260,260 160,260\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"160,260 0,260 0,160\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"100,0 260,100 160,260 0,160\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"3\"/><text x=\"130\" y=\"138\" font-size=\"28\" text-anchor=\"middle\" fill=\"#7f1d1d\" font-weight=\"bold\">c²</text><text x=\"50\" y=\"-4\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1e3a8a\">a</text><text x=\"180\" y=\"-4\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1e3a8a\">b</text></g><text x=\"330\" y=\"70\" font-size=\"18\" fill=\"#1f2937\">Quadrato grande: lato a + b</text><text x=\"330\" y=\"105\" font-size=\"18\" fill=\"#1f2937\">Area = (a + b)²</text><text x=\"330\" y=\"140\" font-size=\"18\" fill=\"#1f2937\">= 4 triangoli + quadrato c²</text><text x=\"330\" y=\"175\" font-size=\"18\" fill=\"#1f2937\">= 4 · (a·b : 2) + c²</text><text x=\"330\" y=\"220\" font-size=\"18\" fill=\"#b91c1c\" font-weight=\"bold\">a² + 2ab + b² = 2ab + c²</text><text x=\"330\" y=\"255\" font-size=\"20\" fill=\"#b91c1c\" font-weight=\"bold\">a² + b² = c²</text></svg>"
        },
        {
          "label": "🏛️ Euclide",
          "html": "<p>Negli <b>Elementi</b> (circa 300 a.C.), proposizione I.47, Euclide traccia dal vertice dell'angolo retto una linea perpendicolare all'ipotenusa. Questa divide il quadrato grande in due rettangoli e, con triangoli congruenti, dimostra che ciascun rettangolo è <b>equivalente</b> (ha la stessa area) al quadrato su uno dei cateti. È la «figura del mulino a vento».</p>",
          "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"320\" fill=\"#f5f3ff\"/><g transform=\"translate(150,30)\"><polygon points=\"0,90 120,90 0,0\" fill=\"#fde68a\" stroke=\"#1f2937\" stroke-width=\"2\"/><polygon points=\"0,0 -90,0 -90,90 0,90\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\" opacity=\".8\"/><polygon points=\"0,0 120,90 210,-30 90,-120\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"2\" opacity=\".8\"/><polygon points=\"0,90 120,90 120,210 0,210\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"2\" opacity=\".8\"/><line x1=\"0\" y1=\"90\" x2=\"133\" y2=\"-88\" stroke=\"#7c3aed\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><text x=\"-45\" y=\"50\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">a²</text><text x=\"60\" y=\"160\" font-size=\"20\" text-anchor=\"middle\" fill=\"#166534\" font-weight=\"bold\">b²</text><text x=\"105\" y=\"-15\" font-size=\"20\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\">c²</text></g><text x=\"360\" y=\"200\" font-size=\"16\" fill=\"#1f2937\">La linea viola, dal vertice</text><text x=\"360\" y=\"222\" font-size=\"16\" fill=\"#1f2937\">dell'angolo retto, divide c²</text><text x=\"360\" y=\"244\" font-size=\"16\" fill=\"#1f2937\">in due rettangoli: uno vale a²,</text><text x=\"360\" y=\"266\" font-size=\"16\" fill=\"#1f2937\">l'altro vale b² (Elementi, I.47)</text></svg>"
        },
        {
          "label": "🇺🇸 Il presidente Garfield",
          "html": "<p>Nel 1876 il deputato (e futuro presidente degli Stati Uniti) <b>James Garfield</b> trovò una dimostrazione con un <b>trapezio</b> formato da due triangoli rettangoli uguali e un triangolo isoscele. Calcolando l'area del trapezio in due modi diversi si ottiene il teorema.</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#ecfeff\"/><g transform=\"translate(40,30)\"><polygon points=\"0,240 0,80 100,240\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"100,240 260,240 260,140\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/><polygon points=\"0,80 100,240 260,140\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"2\"/><line x1=\"0\" y1=\"80\" x2=\"260\" y2=\"140\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"-12\" y=\"165\" font-size=\"16\" fill=\"#1e3a8a\">a</text><text x=\"45\" y=\"262\" font-size=\"16\" fill=\"#1e3a8a\">b</text><text x=\"175\" y=\"262\" font-size=\"16\" fill=\"#92400e\">a</text><text x=\"268\" y=\"195\" font-size=\"16\" fill=\"#92400e\">b</text><text x=\"120\" y=\"160\" font-size=\"20\" fill=\"#7f1d1d\" font-weight=\"bold\">c²/2</text></g><text x=\"340\" y=\"80\" font-size=\"17\" fill=\"#1f2937\">Trapezio di basi a e b, altezza a + b</text><text x=\"340\" y=\"115\" font-size=\"17\" fill=\"#1f2937\">Area = (a + b)(a + b) : 2</text><text x=\"340\" y=\"150\" font-size=\"17\" fill=\"#1f2937\">= ab/2 + ab/2 + c²/2</text><text x=\"340\" y=\"195\" font-size=\"18\" fill=\"#b91c1c\" font-weight=\"bold\">→ a² + b² = c²</text><text x=\"340\" y=\"240\" font-size=\"14\" fill=\"#475569\">James Garfield, 1876 (poi presidente USA)</text></svg>"
        },
        {
          "label": "🧩 Puzzle",
          "html": "<p>Prendi <b>4 triangoli rettangoli uguali</b> e un quadrato di lato a + b. Disposti in un modo lasciano liberi due quadrati, a² e b². Disposti in un altro modo lasciano libero un solo quadrato inclinato, c². Lo spazio libero è lo stesso, quindi <b>a² + b² = c²</b>. Nessun calcolo, solo occhi!</p>",
          "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"280\" fill=\"#f0fdf4\"/><g transform=\"translate(30,20)\"><rect width=\"240\" height=\"240\" fill=\"#fff\" stroke=\"#14532d\" stroke-width=\"3\"/><rect x=\"0\" y=\"0\" width=\"90\" height=\"90\" fill=\"#93c5fd\"/><rect x=\"90\" y=\"90\" width=\"150\" height=\"150\" fill=\"#86efac\"/><polygon points=\"90,0 240,0 240,90\" fill=\"#fde68a\" stroke=\"#92400e\"/><polygon points=\"90,0 90,90 240,90\" fill=\"#fcd34d\" stroke=\"#92400e\"/><polygon points=\"0,90 90,90 0,240\" fill=\"#fde68a\" stroke=\"#92400e\"/><polygon points=\"90,90 90,240 0,240\" fill=\"#fcd34d\" stroke=\"#92400e\"/><text x=\"45\" y=\"52\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1e3a8a\">a²</text><text x=\"165\" y=\"172\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#166534\">b²</text></g><g transform=\"translate(330,20)\"><rect width=\"240\" height=\"240\" fill=\"#fca5a5\" stroke=\"#14532d\" stroke-width=\"3\"/><polygon points=\"0,0 90,0 0,150\" fill=\"#fde68a\" stroke=\"#92400e\"/><polygon points=\"90,0 240,0 240,90\" fill=\"#fcd34d\" stroke=\"#92400e\"/><polygon points=\"240,90 240,240 150,240\" fill=\"#fde68a\" stroke=\"#92400e\"/><polygon points=\"150,240 0,240 0,150\" fill=\"#fcd34d\" stroke=\"#92400e\"/><text x=\"120\" y=\"128\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#7f1d1d\">c²</text></g><text x=\"300\" y=\"275\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">Stessi 4 triangoli, stesso quadrato: lo spazio libero è uguale!</text></svg>"
        },
        {
          "label": "🪢 La corda egizia",
          "html": "<p>I costruttori e agrimensori dell'antico Egitto (gli «arpedonapti», tenditori di corde) avrebbero usato, secondo una tradizione, una corda con <b>12 tratti uguali</b> separati da nodi. Tendendola a formare un triangolo di lati 3, 4 e 5 si ottiene un <b>angolo retto</b> perfetto: utile per tracciare campi e fondamenta. È il <b>teorema inverso</b> in azione: se 3² + 4² = 5², il triangolo è rettangolo. Ancora oggi i muratori usano il trucco «3-4-5» con il metro.</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fff7ed\"/><polyline points=\"100,250 340,250 100,70 100,250\" fill=\"#fed7aa\" stroke=\"#9a3412\" stroke-width=\"5\"/><circle cx=\"100\" cy=\"250\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"160\" cy=\"250\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"220\" cy=\"250\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"280\" cy=\"250\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"340\" cy=\"250\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"100\" cy=\"190\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"100\" cy=\"130\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"100\" cy=\"70\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"148\" cy=\"106\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"196\" cy=\"142\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"244\" cy=\"178\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"292\" cy=\"214\" r=\"7\" fill=\"#7c2d12\"/><rect x=\"100\" y=\"230\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\"/><text x=\"220\" y=\"282\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1f2937\">4 tratti</text><text x=\"70\" y=\"165\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1f2937\">3 tratti</text><text x=\"250\" y=\"140\" font-size=\"18\" fill=\"#1f2937\">5 tratti</text><text x=\"380\" y=\"110\" font-size=\"17\" fill=\"#1f2937\">Corda con 12 tratti uguali</text><text x=\"380\" y=\"140\" font-size=\"17\" fill=\"#1f2937\">tesa a triangolo 3-4-5:</text><text x=\"380\" y=\"170\" font-size=\"17\" fill=\"#b91c1c\" font-weight=\"bold\">angolo retto garantito!</text></svg>"
        },
        {
          "label": "🧊 Con i cubetti 3D",
          "html": "<p>Il quadrato 3 × 3 ha <b>9</b> cubetti, il 4 × 4 ne ha <b>16</b>. Insieme fanno 25: esattamente quelli che servono per riempire il quadrato <b>5 × 5</b> costruito sull'ipotenusa. Prova a cambiare i numeri con i cursori: con 6 e 8 servono 36 + 64 = 100 cubetti, cioè un quadrato 10 × 10.</p>",
          "scene": "blocks",
          "options": {
            "mode": "array",
            "a": 5,
            "b": 5
          }
        }
      ]
    },
    {
      "type": "text",
      "title": "2. Come si usa: passo per passo",
      "html": "<p><b>Trovare l'ipotenusa</b> (conosco i due cateti):</p><ol><li>elevo al quadrato ciascun cateto;</li><li>sommo i due quadrati;</li><li>estraggo la radice quadrata.</li></ol><p><b>Trovare un cateto</b> (conosco ipotenusa e l'altro cateto):</p><ol><li>elevo al quadrato ipotenusa e cateto noto;</li><li><b>sottraggo</b> il quadrato del cateto da quello dell'ipotenusa;</li><li>estraggo la radice quadrata.</li></ol><p>Attenzione: per il cateto si <b>sottrae</b>, per l'ipotenusa si <b>somma</b>!</p>"
    },
    {
      "type": "example",
      "title": "Esempio: la scala appoggiata al muro",
      "html": "<p>Una scala lunga <b>5 m</b> è appoggiata a un muro; il piede della scala è a <b>3 m</b> dal muro. A che altezza arriva?</p><p>La scala è l'ipotenusa, la distanza dal muro un cateto: <br>h = √(5² − 3²) = √(25 − 9) = √16 = <b>4 m</b>.</p>"
    },
    {
      "type": "example",
      "title": "Esempio: la diagonale dello schermo",
      "html": "<p>I pollici di una TV indicano la <b>diagonale</b>. Uno schermo largo 88,6 cm e alto 49,8 cm ha diagonale:</p><p>d = √(88,6² + 49,8²) = √(7849,96 + 2480,04) = √10330 ≈ <b>101,6 cm</b>, cioè circa 40 pollici (1 pollice = 2,54 cm).</p><p>Allo stesso modo si calcola la diagonale di un rettangolo o di un quadrato: in un quadrato di lato <i>l</i>, d = l·√2 ≈ l × 1,414.</p>"
    },
    {
      "type": "quiz",
      "title": "Mini-quiz 1",
      "questions": [
        {
          "type": "mc",
          "q": "Qual è il lato più lungo di un triangolo rettangolo?",
          "options": [
            "Il cateto maggiore",
            "L'ipotenusa",
            "Dipende dal triangolo"
          ],
          "answer": 1,
          "explain": "L'ipotenusa sta di fronte all'angolo retto, il più grande del triangolo, quindi è sempre il lato più lungo."
        },
        {
          "type": "num",
          "q": "Cateti 6 cm e 8 cm. Quanto misura l'ipotenusa?",
          "answer": 10,
          "tol": 0,
          "unit": "cm",
          "explain": "√(36 + 64) = √100 = 10 cm."
        },
        {
          "type": "tf",
          "q": "Il teorema di Pitagora vale per tutti i triangoli.",
          "answer": false,
          "explain": "Vale solo per i triangoli rettangoli."
        }
      ]
    },
    {
      "type": "text",
      "title": "3. Le terne pitagoriche",
      "html": "<p>Una <b>terna pitagorica</b> è un gruppo di tre numeri interi che soddisfano a² + b² = c². Le più usate:</p><table><tr><th>a</th><th>b</th><th>c</th></tr><tr><td>3</td><td>4</td><td>5</td></tr><tr><td>5</td><td>12</td><td>13</td></tr><tr><td>8</td><td>15</td><td>17</td></tr><tr><td>7</td><td>24</td><td>25</td></tr><tr><td>20</td><td>21</td><td>29</td></tr></table><p>Moltiplicando una terna per lo stesso numero si ottiene un'altra terna: 3-4-5 × 2 = <b>6-8-10</b>, × 3 = <b>9-12-15</b>.</p><p>Il teorema funziona anche al contrario: se a² + b² = c², il triangolo è <b>rettangolo</b>.</p>"
    },
    {
      "type": "curiosity",
      "title": "La corda dei 12 nodi",
      "html": "<p>Gli antichi Egizi, per tracciare angoli retti nei campi dopo le piene del Nilo, usavano una corda con <b>12 nodi</b> equidistanti: tendendola a formare un triangolo di lati 3, 4 e 5 ottenevano un angolo retto perfetto. I muratori usano ancora oggi questo trucco (3-4-5 metri) per controllare che i muri siano a squadra.</p>"
    },
    {
      "type": "curiosity",
      "title": "Più di 370 dimostrazioni",
      "html": "<p>Il teorema è conosciuto almeno da 3800 anni: la tavoletta babilonese <b>Plimpton 322</b> contiene terne pitagoriche. Nel 1940 il matematico Elisha Loomis raccolse <b>367 dimostrazioni</b> diverse; una è stata trovata perfino da un presidente degli Stati Uniti, James Garfield, nel 1876.</p>"
    },
    {
      "type": "text",
      "title": "4. Applicazioni nella geometria",
      "html": "<ul><li><b>Diagonale del rettangolo</b>: d = √(b² + h²).</li><li><b>Altezza del triangolo equilatero</b> di lato l: h = √(l² − (l/2)²) ≈ l × 0,866.</li><li><b>Lato obliquo del trapezio rettangolo</b>: si usa il triangolo formato dall'altezza e dalla differenza delle basi.</li><li><b>Distanza tra due punti</b> nel piano cartesiano: d = √((x₂−x₁)² + (y₂−y₁)²).</li><li><b>Diagonale del cubo</b> di spigolo s: D = s·√3.</li></ul>"
    },
    {
      "type": "conceptMap",
      "title": "Mappa concettuale: da dove viene il teorema?",
      "nodes": [
        {
          "id": "def",
          "label": "Definizioni: punto, retta, piano",
          "x": 50,
          "y": 6,
          "color": "#64748b",
          "html": "<p>Gli oggetti di base della geometria.</p>",
          "why": "<p>Euclide comincia gli Elementi con 23 definizioni («il punto è ciò che non ha parti»). Non si possono dimostrare: sono il vocabolario comune da cui partire.</p>"
        },
        {
          "id": "post",
          "label": "I primi 4 postulati di Euclide",
          "x": 22,
          "y": 24,
          "color": "#a855f7",
          "html": "<p>Per due punti passa una retta; un segmento si può prolungare; si può tracciare una circonferenza; tutti gli angoli retti sono uguali.</p>",
          "why": "<p>Un <b>postulato</b> (o assioma) è una regola che si accetta senza dimostrazione perché sembra evidente. Ogni teorema deve poggiare su qualcosa: se dimostrassimo tutto all'infinito non partiremmo mai. Euclide scelse pochissime regole e da quelle ricavò centinaia di teoremi.</p>"
        },
        {
          "id": "quinto",
          "label": "5° postulato: le parallele",
          "x": 78,
          "y": 24,
          "color": "#7c3aed",
          "html": "<p>Per un punto esterno a una retta passa <b>una sola</b> parallela (nella forma di Playfair).</p>",
          "why": "<p>Per oltre 2000 anni i matematici provarono a dimostrarlo partendo dagli altri quattro, senza riuscirci. Nell'Ottocento Lobačevskij, Bolyai e Gauss capirono il perché: si può <b>sostituire</b> con un postulato diverso e ottenere geometrie altrettanto coerenti!</p>"
        },
        {
          "id": "angoli",
          "label": "Somma degli angoli = 180°",
          "x": 78,
          "y": 46,
          "color": "#2563eb",
          "html": "<p>In ogni triangolo gli angoli interni sommano 180°.</p>",
          "why": "<p>Si dimostra tracciando la parallela a un lato: servono gli angoli alterni interni, che dipendono proprio dal 5° postulato.</p>"
        },
        {
          "id": "aree",
          "label": "Aree e figure equivalenti",
          "x": 22,
          "y": 46,
          "color": "#0d9488",
          "html": "<p>Figure scomposte negli stessi pezzi hanno la stessa area; il rettangolo ha area b × h.</p>",
          "why": "<p>Euclide confronta le aree spostando e ricomponendo figure congruenti (criteri di congruenza dei triangoli). Anche i rettangoli e i quadrati «funzionano» bene solo nella geometria con il 5° postulato.</p>"
        },
        {
          "id": "pit",
          "label": "Teorema di Pitagora",
          "x": 50,
          "y": 66,
          "color": "#dc2626",
          "html": "<p>c² = a² + b² nei triangoli rettangoli.</p>",
          "why": "<p>Si dimostra combinando aree equivalenti (Euclide, I.47) o similitudini di triangoli. È attribuito a Pitagora (VI sec. a.C.), ma i Babilonesi conoscevano già terne come 3-4-5: la tavoletta <b>Plimpton 322</b> (circa 1800 a.C.) ne elenca molte. Il merito greco è la <b>dimostrazione</b> generale, non solo l'esempio.</p>"
        },
        {
          "id": "inverso",
          "label": "Teorema inverso",
          "x": 18,
          "y": 86,
          "color": "#ea580c",
          "html": "<p>Se a² + b² = c², il triangolo è rettangolo.</p>",
          "why": "<p>È la proposizione I.48 di Euclide. Serve per costruire angoli retti (la corda 3-4-5) e per verificare se un triangolo è rettangolo.</p>"
        },
        {
          "id": "distanza",
          "label": "Distanza nel piano cartesiano",
          "x": 50,
          "y": 92,
          "color": "#16a34a",
          "html": "<p>d = √((x₂ − x₁)² + (y₂ − y₁)²)</p>",
          "why": "<p>Lo spostamento orizzontale e quello verticale sono i cateti di un triangolo rettangolo: la distanza è l'ipotenusa. Così funzionano anche GPS, videogiochi e mappe digitali.</p>"
        },
        {
          "id": "noneuclide",
          "label": "Geometrie non euclidee",
          "x": 84,
          "y": 82,
          "color": "#be185d",
          "html": "<p>Su una sfera, il teorema di Pitagora <b>non vale</b>.</p>",
          "why": "<p>Sulla superficie della Terra un triangolo con un vertice al Polo Nord e due all'equatore può avere <b>tre angoli retti</b> (somma 270°). Cambiando il 5° postulato cambiano anche Pitagora e la somma degli angoli. Einstein usò proprio una geometria non euclidea per descrivere lo spazio-tempo curvo nella relatività generale (1915).</p>"
        }
      ],
      "edges": [
        [
          "def",
          "post",
          "base di"
        ],
        [
          "def",
          "quinto",
          "base di"
        ],
        [
          "post",
          "aree",
          "permettono"
        ],
        [
          "quinto",
          "angoli",
          "dimostra"
        ],
        [
          "aree",
          "pit",
          "dimostrano"
        ],
        [
          "angoli",
          "pit",
          "servono a"
        ],
        [
          "pit",
          "inverso",
          "si inverte"
        ],
        [
          "pit",
          "distanza",
          "si applica"
        ],
        [
          "quinto",
          "noneuclide",
          "se lo cambi…"
        ],
        [
          "noneuclide",
          "pit",
          "non vale più"
        ]
      ]
    },
    {
      "type": "quiz",
      "title": "Mini-quiz 2",
      "questions": [
        {
          "type": "num",
          "q": "Ipotenusa 13 cm, un cateto 5 cm. Quanto misura l'altro cateto?",
          "answer": 12,
          "tol": 0,
          "unit": "cm",
          "explain": "√(169 − 25) = √144 = 12 cm."
        },
        {
          "type": "mc",
          "q": "Quale di queste è una terna pitagorica?",
          "options": [
            "4, 5, 6",
            "6, 8, 10",
            "2, 3, 4"
          ],
          "answer": 1,
          "explain": "36 + 64 = 100 = 10². È il doppio della terna 3-4-5."
        },
        {
          "type": "num",
          "q": "Rettangolo con base 12 cm e altezza 5 cm: quanto misura la diagonale?",
          "answer": 13,
          "tol": 0,
          "unit": "cm",
          "explain": "√(144 + 25) = √169 = 13 cm."
        }
      ]
    }
  ],
  "glossary": [
    {
      "t": "Triangolo rettangolo",
      "d": "Triangolo con un angolo di 90°."
    },
    {
      "t": "Cateti",
      "d": "I due lati che formano l'angolo retto."
    },
    {
      "t": "Ipotenusa",
      "d": "Il lato opposto all'angolo retto; è il più lungo."
    },
    {
      "t": "Terna pitagorica",
      "d": "Tre numeri interi a, b, c tali che a² + b² = c²."
    },
    {
      "t": "Radice quadrata",
      "d": "Il numero che, moltiplicato per sé stesso, dà il numero di partenza: √49 = 7."
    },
    {
      "t": "Equivalente",
      "d": "Che ha la stessa area (o lo stesso volume), anche se la forma è diversa."
    }
  ],
  "verifica": {
    "pass": 0.7,
    "questions": [
      {
        "type": "mc",
        "q": "Il teorema di Pitagora si scrive:",
        "options": [
          "c = a + b",
          "c² = a² + b²",
          "a² = b² + c²",
          "c² = a² − b²"
        ],
        "answer": 1,
        "explain": "Il quadrato dell'ipotenusa (c) è uguale alla somma dei quadrati dei cateti."
      },
      {
        "type": "num",
        "q": "Cateti 9 cm e 12 cm. Ipotenusa?",
        "answer": 15,
        "tol": 0,
        "unit": "cm",
        "explain": "√(81 + 144) = √225 = 15 cm (terna 3-4-5 × 3)."
      },
      {
        "type": "num",
        "q": "Ipotenusa 17 cm, cateto 8 cm. Altro cateto?",
        "answer": 15,
        "tol": 0,
        "unit": "cm",
        "explain": "√(289 − 64) = √225 = 15 cm."
      },
      {
        "type": "tf",
        "q": "Un triangolo con lati 5, 12, 13 è rettangolo.",
        "answer": true,
        "explain": "25 + 144 = 169 = 13²: vale il teorema inverso."
      },
      {
        "type": "tf",
        "q": "Un triangolo con lati 4, 6, 7 è rettangolo.",
        "answer": false,
        "explain": "16 + 36 = 52, ma 7² = 49: non sono uguali."
      },
      {
        "type": "num",
        "q": "Lato di un quadrato 10 cm. Diagonale (arrotonda ai decimi)?",
        "answer": 14.1,
        "tol": 0.05,
        "unit": "cm",
        "explain": "d = 10 × √2 ≈ 14,1 cm."
      },
      {
        "type": "mc",
        "q": "Per trovare un cateto conoscendo ipotenusa e altro cateto devo:",
        "options": [
          "sommare i quadrati",
          "sottrarre i quadrati",
          "sommare i lati",
          "moltiplicare i lati"
        ],
        "answer": 1,
        "explain": "a = √(c² − b²): si sottrae il quadrato del cateto noto da quello dell'ipotenusa."
      },
      {
        "type": "num",
        "q": "Una scala di 10 m ha il piede a 6 m dal muro. A che altezza arriva?",
        "answer": 8,
        "tol": 0,
        "unit": "m",
        "explain": "√(100 − 36) = √64 = 8 m."
      },
      {
        "type": "text",
        "q": "Come si chiama il lato opposto all'angolo retto?",
        "answer": [
          "ipotenusa",
          "l'ipotenusa"
        ],
        "explain": "È l'ipotenusa."
      },
      {
        "type": "order",
        "q": "Metti in ordine i passaggi per calcolare l'ipotenusa",
        "items": [
          "Elevo al quadrato i cateti",
          "Sommo i quadrati",
          "Estraggo la radice quadrata"
        ],
        "explain": "Prima i quadrati, poi la somma, infine la radice."
      }
    ],
    "gen": [
      [
        "pythagoras",
        2
      ]
    ]
  }
});
