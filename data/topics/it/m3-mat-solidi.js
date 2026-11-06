TOPIC('it', {
  "id": "m3-mat-solidi",
  "title": "I solidi: superficie e volume",
  "intro": "Scatole, lattine, coni gelato, palloni: siamo circondati da solidi. Impariamo a riconoscerli, a calcolare quanto materiale serve per costruirli (<b>superficie</b>) e quanto spazio occupano (<b>volume</b>).",
  "minutes": 40,
  "sections": [
    {
      "type": "text",
      "title": "1. Poliedri e solidi di rotazione",
      "html": "<p>Un <b>solido</b> è una figura geometrica a tre dimensioni: lunghezza, larghezza, altezza. Si dividono in due grandi famiglie:</p><ul><li><b>Poliedri</b>: delimitati solo da poligoni (le <b>facce</b>). Le facce si incontrano negli <b>spigoli</b>, gli spigoli nei <b>vertici</b>. Esempi: cubo, parallelepipedo, prisma, piramide.</li><li><b>Solidi di rotazione</b>: si ottengono facendo ruotare una figura piana attorno a un asse. Hanno superfici curve. Esempi: cilindro (rettangolo che ruota), cono (triangolo rettangolo che ruota), sfera (semicerchio che ruota).</li></ul>"
    },
    {
      "type": "3d",
      "title": "Esplora i solidi in 3D",
      "scene": "solid",
      "options": {
        "shape": "cube",
        "shapes": [
          "cube",
          "box",
          "prism",
          "pyramid",
          "cylinder",
          "cone",
          "sphere"
        ],
        "labels": true,
        "color": "#60a5fa"
      },
      "caption": "Ruota ogni solido con il dito o il mouse. Conta facce, spigoli e vertici dei poliedri."
    },
    {
      "type": "remember",
      "title": "La relazione di Eulero",
      "html": "<p>In ogni poliedro convesso vale: <b>F + V − S = 2</b> (facce + vertici − spigoli).</p><p>Cubo: 6 + 8 − 12 = 2 ✔ &nbsp; Piramide a base quadrata: 5 + 5 − 8 = 2 ✔</p>"
    },
    {
      "type": "text",
      "title": "2. Superficie e volume: che differenza c'è?",
      "html": "<ul><li>La <b>superficie laterale</b> (S<sub>l</sub>) è l'area delle facce laterali.</li><li>La <b>superficie totale</b> (S<sub>t</sub>) è S<sub>l</sub> + l'area delle basi. Si misura in cm², m²…</li><li>Il <b>volume</b> (V) è lo spazio occupato. Si misura in cm³, dm³, m³.</li></ul><p>Ricorda le equivalenze: <b>1 dm³ = 1 litro</b>; 1 m³ = 1000 dm³ = 1000 litri; 1 cm³ = 1 ml.</p><p>Per calcolare la superficie è utile immaginare lo <b>sviluppo piano</b> del solido: lo «apriamo» e lo stendiamo sul tavolo.</p>"
    },
    {
      "type": "svg",
      "title": "Lo sviluppo del cubo e del cilindro",
      "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"320\" fill=\"#ffffff\"/><g fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"2\"><rect x=\"80\" y=\"30\" width=\"60\" height=\"60\"/><rect x=\"20\" y=\"90\" width=\"60\" height=\"60\"/><rect x=\"80\" y=\"90\" width=\"60\" height=\"60\"/><rect x=\"140\" y=\"90\" width=\"60\" height=\"60\"/><rect x=\"200\" y=\"90\" width=\"60\" height=\"60\"/><rect x=\"80\" y=\"150\" width=\"60\" height=\"60\"/></g><text x=\"140\" y=\"250\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\">Cubo: 6 quadrati uguali</text><text x=\"140\" y=\"275\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\">S<tspan font-size=\"12\" dy=\"4\">t</tspan><tspan dy=\"-4\"> = 6 · s²</tspan></text><g stroke=\"#9a3412\" stroke-width=\"2\"><rect x=\"330\" y=\"95\" width=\"220\" height=\"90\" fill=\"#fed7aa\"/><circle cx=\"440\" cy=\"60\" r=\"35\" fill=\"#fdba74\"/><circle cx=\"440\" cy=\"220\" r=\"35\" fill=\"#fdba74\"/></g><text x=\"440\" y=\"145\" font-size=\"16\" text-anchor=\"middle\" font-family=\"sans-serif\">base = 2πr (circonferenza)</text><text x=\"560\" y=\"145\" font-size=\"16\" font-family=\"sans-serif\">h</text><text x=\"440\" y=\"290\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\">Cilindro: 1 rettangolo + 2 cerchi</text></svg>",
      "caption": "Sviluppo piano: il cubo si apre in 6 quadrati, il cilindro in un rettangolo (la superficie laterale) e due cerchi."
    },
    {
      "type": "alternatives",
      "title": "Altri modi per capirlo: perché le formule sono così",
      "intro": "Le formule dei volumi non vanno solo imparate a memoria: si possono «vedere» e perfino toccare.",
      "tabs": [
        {
          "label": "🪙 Principio di Cavalieri",
          "html": "<p>Prendi una pila di monete dritta e poi spingila di lato: diventa storta, ma le monete sono le stesse, quindi il <b>volume non cambia</b>. Bonaventura Cavalieri (1635), allievo di Galileo, lo trasformò in un principio: <b>se due solidi hanno la stessa altezza e, a ogni altezza, sezioni con la stessa area, hanno lo stesso volume</b>. Per questo un prisma obliquo ha lo stesso volume di uno retto: V = A<sub>base</sub> × h.</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><ellipse cx=\"150\" cy=\"255\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"235\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"215\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"195\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"175\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"155\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"135\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"115\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"95\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"75\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"400\" cy=\"255\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"420\" cy=\"235\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"438\" cy=\"215\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"453\" cy=\"195\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"463\" cy=\"175\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"469\" cy=\"155\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"471\" cy=\"135\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"468\" cy=\"115\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"462\" cy=\"95\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"454\" cy=\"75\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><text x=\"150\" y=\"292\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Pila dritta</text><text x=\"440\" y=\"292\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Pila storta</text><text x=\"300\" y=\"40\" font-size=\"18\" text-anchor=\"middle\" fill=\"#b91c1c\" font-weight=\"bold\">Stesse monete = stesso volume</text></svg>"
        },
        {
          "label": "📐 Sviluppi piani",
          "html": "<p>Taglia il solido lungo alcuni spigoli e aprilo sul tavolo: ottieni lo <b>sviluppo</b>. L'area dello sviluppo è la <b>superficie totale</b>. Il cilindro diventa un rettangolo (lungo quanto la circonferenza, 2πr) più due cerchi; il cono un settore circolare più un cerchio.</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f0f9ff\"/><g transform=\"translate(20,40)\" stroke=\"#1e3a8a\" stroke-width=\"2\" fill=\"#bfdbfe\"><rect x=\"50\" y=\"0\" width=\"50\" height=\"50\"/><rect x=\"0\" y=\"50\" width=\"50\" height=\"50\"/><rect x=\"50\" y=\"50\" width=\"50\" height=\"50\"/><rect x=\"100\" y=\"50\" width=\"50\" height=\"50\"/><rect x=\"150\" y=\"50\" width=\"50\" height=\"50\"/><rect x=\"50\" y=\"100\" width=\"50\" height=\"50\"/></g><text x=\"120\" y=\"230\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Cubo: 6 quadrati</text><g transform=\"translate(260,30)\" stroke=\"#166534\" stroke-width=\"2\" fill=\"#bbf7d0\"><circle cx=\"60\" cy=\"25\" r=\"25\"/><rect x=\"0\" y=\"50\" width=\"157\" height=\"80\"/><circle cx=\"60\" cy=\"155\" r=\"25\"/></g><text x=\"340\" y=\"230\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">Cilindro: rettangolo</text><text x=\"340\" y=\"250\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">lungo 2πr + 2 cerchi</text><g transform=\"translate(470,40)\" stroke=\"#9a3412\" stroke-width=\"2\" fill=\"#fed7aa\"><path d=\"M60,0 L0,110 A125,125 0 0 0 120,110 Z\"/><circle cx=\"60\" cy=\"158\" r=\"28\"/></g><text x=\"530\" y=\"230\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">Cono: settore</text><text x=\"530\" y=\"250\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">circolare + cerchio</text></svg>"
        },
        {
          "label": "💧 Con l'acqua",
          "html": "<p>Prendi un cono e un cilindro di plastica con <b>stessa base e stessa altezza</b>. Riempi il cono d'acqua e versalo nel cilindro: servono esattamente <b>3 coni</b> per riempirlo. Ecco perché V<sub>cono</sub> = πr²h : 3. Lo stesso vale per piramide e prisma. Archimede scoprì anche che la sfera ha i <b>2/3</b> del volume del cilindro in cui è inscritta.</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><g transform=\"translate(60,40)\"><polygon points=\"0,0 120,0 60,180\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><text x=\"60\" y=\"210\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">cono pieno d'acqua</text></g><text x=\"235\" y=\"140\" font-size=\"28\" fill=\"#b91c1c\" font-weight=\"bold\">× 3 =</text><g transform=\"translate(340,40)\"><rect x=\"0\" y=\"0\" width=\"120\" height=\"180\" fill=\"#fff\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><rect x=\"0\" y=\"0\" width=\"120\" height=\"180\" fill=\"#93c5fd\" opacity=\".85\"/><line x1=\"0\" y1=\"60\" x2=\"120\" y2=\"60\" stroke=\"#1e3a8a\" stroke-dasharray=\"5 4\"/><line x1=\"0\" y1=\"120\" x2=\"120\" y2=\"120\" stroke=\"#1e3a8a\" stroke-dasharray=\"5 4\"/><text x=\"60\" y=\"210\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">cilindro pieno</text></g><text x=\"520\" y=\"100\" font-size=\"15\" fill=\"#1f2937\">stessa base</text><text x=\"520\" y=\"125\" font-size=\"15\" fill=\"#1f2937\">stessa</text><text x=\"520\" y=\"148\" font-size=\"15\" fill=\"#1f2937\">altezza</text></svg>"
        },
        {
          "label": "🧊 Cubetti 3D",
          "html": "<p>Il volume è il <b>numero di cubetti unitari</b> che riempiono il solido. Un parallelepipedo 4 × 3 × 2 contiene 4 × 3 = 12 cubetti per strato, e ci sono 2 strati: 24 cubetti. Cambia le misure con i cursori e conta!</p>",
          "scene": "blocks",
          "options": {
            "mode": "volume",
            "a": 4,
            "b": 3,
            "c": 2
          }
        },
        {
          "label": "🔺 3 piramidi = 1 cubo",
          "html": "<p>Un cubo si può dividere in <b>3 piramidi uguali</b> a base quadrata, tutte con il vertice nello stesso angolo del cubo. Ognuna ha quindi un terzo del volume del cubo: V = l² × l : 3. Ruota la piramide e immagina di metterne tre insieme.</p>",
          "scene": "solid",
          "options": {
            "shape": "pyramid",
            "n": 4,
            "h": 1.4,
            "labels": true
          }
        }
      ]
    },
    {
      "type": "text",
      "title": "3. Il formulario",
      "html": "<table><tr><th>Solido</th><th>Superficie laterale</th><th>Superficie totale</th><th>Volume</th></tr><tr><td>Cubo (spigolo s)</td><td>4·s²</td><td>6·s²</td><td>s³</td></tr><tr><td>Parallelepipedo (a, b, c)</td><td>2p<sub>b</sub>·c = 2(a+b)·c</td><td>2(ab + bc + ac)</td><td>a·b·c</td></tr><tr><td>Prisma retto</td><td>2p<sub>b</sub>·h</td><td>S<sub>l</sub> + 2·A<sub>b</sub></td><td>A<sub>b</sub>·h</td></tr><tr><td>Piramide retta (apotema a)</td><td>p<sub>b</sub>·a (semiperimetro × apotema)</td><td>S<sub>l</sub> + A<sub>b</sub></td><td>A<sub>b</sub>·h / 3</td></tr><tr><td>Cilindro</td><td>2πr·h</td><td>2πr·h + 2πr²</td><td>πr²·h</td></tr><tr><td>Cono (apotema a)</td><td>πr·a</td><td>πr·a + πr²</td><td>πr²·h / 3</td></tr><tr><td>Sfera</td><td>—</td><td>4πr²</td><td>4/3·πr³</td></tr></table><p>Nel cono l'apotema si trova con Pitagora: <b>a = √(r² + h²)</b>. Nella piramide a base quadrata di lato l: <b>a = √(h² + (l/2)²)</b>.</p>"
    },
    {
      "type": "remember",
      "title": "La regola del «diviso 3»",
      "html": "<p>Piramide e cono hanno volume pari a <b>un terzo</b> del prisma e del cilindro con stessa base e stessa altezza. Con un cono pieno d'acqua si riempie il cilindro corrispondente esattamente in <b>3 travasi</b>.</p>"
    },
    {
      "type": "example",
      "title": "Esempio: quanta acqua contiene l'acquario?",
      "html": "<p>Un acquario a forma di parallelepipedo misura 60 cm × 30 cm × 40 cm.</p><p>V = 60 × 30 × 40 = <b>72 000 cm³</b> = 72 dm³ = <b>72 litri</b>.</p><p>Per sapere quanto vetro serve (senza coperchio): area di base 60×30 = 1800 cm², pareti 2·(60×40) + 2·(30×40) = 4800 + 2400 = 7200 cm². Totale: <b>9000 cm²</b> = 0,9 m².</p>"
    },
    {
      "type": "example",
      "title": "Esempio: l'etichetta della lattina",
      "html": "<p>Una lattina cilindrica ha raggio 3,3 cm e altezza 11,5 cm.</p><ul><li>Etichetta (superficie laterale): 2π·3,3·11,5 ≈ <b>238,4 cm²</b>.</li><li>Volume: π·3,3²·11,5 ≈ 3,14·10,89·11,5 ≈ <b>393 cm³</b>, cioè circa 0,39 litri: è la lattina da 33 cl, con un po' di spazio vuoto in cima!</li></ul>"
    },
    {
      "type": "quiz",
      "title": "Mini-quiz 1",
      "questions": [
        {
          "type": "num",
          "q": "Volume di un cubo di spigolo 5 cm?",
          "answer": 125,
          "tol": 0,
          "unit": "cm³",
          "explain": "V = s³ = 5 × 5 × 5 = 125 cm³."
        },
        {
          "type": "mc",
          "q": "Quale di questi è un solido di rotazione?",
          "options": [
            "Prisma",
            "Piramide",
            "Cono",
            "Cubo"
          ],
          "answer": 2,
          "explain": "Il cono si ottiene facendo ruotare un triangolo rettangolo attorno a un cateto."
        },
        {
          "type": "num",
          "q": "Quanti litri sono 3 dm³?",
          "answer": 3,
          "tol": 0,
          "unit": "litri",
          "explain": "1 dm³ = 1 litro."
        }
      ]
    },
    {
      "type": "text",
      "title": "4. Peso specifico: dal volume al peso",
      "html": "<p>Ogni materiale ha un suo <b>peso specifico</b> (ps): quanti grammi pesa 1 cm³. <b>Peso = Volume × ps</b>.</p><table><tr><th>Materiale</th><th>ps (g/cm³)</th></tr><tr><td>Sughero</td><td>0,25</td></tr><tr><td>Legno di abete</td><td>0,5</td></tr><tr><td>Acqua</td><td>1</td></tr><tr><td>Vetro</td><td>2,5</td></tr><tr><td>Ferro</td><td>7,8</td></tr><tr><td>Oro</td><td>19,3</td></tr></table><p>Un cubo di ferro di 10 cm di spigolo: V = 1000 cm³ → peso = 1000 × 7,8 = <b>7800 g = 7,8 kg</b>. Se il ps è minore di 1, l'oggetto <b>galleggia</b> sull'acqua.</p>"
    },
    {
      "type": "curiosity",
      "title": "Il premio di Archimede",
      "html": "<p>Archimede di Siracusa (III secolo a.C.) dimostrò che il volume di una sfera è esattamente <b>2/3</b> del volume del cilindro che la contiene. Ne era così orgoglioso che volle una sfera inscritta in un cilindro sulla propria tomba. Secoli dopo, Cicerone ritrovò la tomba proprio grazie a quel disegno.</p>"
    },
    {
      "type": "curiosity",
      "title": "Perché le bolle sono sferiche?",
      "html": "<p>Tra tutti i solidi con lo stesso volume, la <b>sfera</b> è quello con la superficie più piccola. La pellicola di sapone «tira» per occupare meno superficie possibile, e così diventa una sfera. Per lo stesso motivo gli animali si raggomitolano a palla quando fa freddo: riducono la superficie da cui disperdono calore.</p>"
    },
    {
      "type": "quiz",
      "title": "Mini-quiz 2",
      "questions": [
        {
          "type": "num",
          "q": "Un parallelepipedo ha dimensioni 4 cm, 5 cm, 10 cm. Volume?",
          "answer": 200,
          "tol": 0,
          "unit": "cm³",
          "explain": "V = 4 × 5 × 10 = 200 cm³."
        },
        {
          "type": "mc",
          "q": "Un cilindro e un cono hanno stessa base e stessa altezza. Il volume del cono è:",
          "options": [
            "uguale",
            "la metà",
            "un terzo",
            "il doppio"
          ],
          "answer": 2,
          "explain": "V cono = πr²h / 3."
        },
        {
          "type": "tf",
          "q": "In un poliedro vale F + V − S = 2.",
          "answer": true,
          "explain": "È la relazione di Eulero."
        }
      ]
    },
    {
      "type": "conceptMap",
      "title": "Mappa concettuale: da dove vengono le formule",
      "nodes": [
        {
          "id": "unita",
          "label": "Unità di volume: il cubetto",
          "x": 50,
          "y": 6,
          "color": "#64748b",
          "html": "<p>1 cm³ è un cubo di 1 cm di spigolo; 1 dm³ = 1 litro.</p>",
          "why": "<p>Misurare vuol dire confrontare con un'unità. Per le lunghezze usiamo un segmento, per le aree un quadratino, per i volumi un cubetto. Il sistema metrico (Francia, 1795) collegò il litro al decimetro cubo.</p>"
        },
        {
          "id": "par",
          "label": "Parallelepipedo: V = a·b·c",
          "x": 22,
          "y": 24,
          "color": "#2563eb",
          "html": "<p>Strati di cubetti: a·b cubetti per strato, c strati.</p>",
          "why": "<p>È un semplice conteggio: righe × colonne × strati. Funziona anche con misure non intere passando a cubetti sempre più piccoli.</p>"
        },
        {
          "id": "cav",
          "label": "Principio di Cavalieri",
          "x": 78,
          "y": 24,
          "color": "#7c3aed",
          "html": "<p>Stesse sezioni a ogni altezza → stesso volume.</p>",
          "why": "<p>Cavalieri (1635) pensava il solido come una pila di fogli sottilissimi («indivisibili»). È un'idea che anticipa il calcolo integrale di Newton e Leibniz.</p>"
        },
        {
          "id": "prisma",
          "label": "Prisma e cilindro: V = A_b · h",
          "x": 50,
          "y": 44,
          "color": "#0d9488",
          "html": "<p>Area di base per altezza.</p>",
          "why": "<p>Ogni prisma ha le stesse sezioni di un parallelepipedo con la stessa area di base: per Cavalieri hanno lo stesso volume. Il cilindro è come un prisma con infiniti lati.</p>"
        },
        {
          "id": "piramide",
          "label": "Piramide e cono: V = A_b · h : 3",
          "x": 22,
          "y": 66,
          "color": "#ea580c",
          "html": "<p>Un terzo del prisma corrispondente.</p>",
          "why": "<p>Euclide (Elementi, libro XII) dimostrò che un prisma triangolare si scompone in 3 piramidi equivalenti. Prima ancora gli Egizi calcolavano il volume del tronco di piramide (Papiro di Mosca, circa 1850 a.C.).</p>"
        },
        {
          "id": "sfera",
          "label": "Sfera: V = 4/3 π r³",
          "x": 78,
          "y": 66,
          "color": "#dc2626",
          "html": "<p>E superficie S = 4πr².</p>",
          "why": "<p>Archimede (III sec. a.C.) dimostrò che la sfera ha i 2/3 del volume e della superficie del cilindro circoscritto. Ne era così orgoglioso che volle la figura sfera-cilindro sulla sua tomba.</p>"
        },
        {
          "id": "eulero",
          "label": "Relazione di Eulero F + V − S = 2",
          "x": 22,
          "y": 90,
          "color": "#a855f7",
          "html": "<p>Vale per ogni poliedro convesso.</p>",
          "why": "<p>Eulero la pubblicò nel 1758. Se aggiungi un vertice tagliando un angolo, aumentano insieme facce, vertici e spigoli in modo che la somma resti 2: per questo la regola non cambia mai.</p>"
        },
        {
          "id": "peso",
          "label": "Peso = Volume × peso specifico",
          "x": 78,
          "y": 90,
          "color": "#475569",
          "html": "<p>Dal volume si ricava la massa di un oggetto.</p>",
          "why": "<p>Ogni materiale ha la sua densità (acqua 1 g/cm³, ferro circa 7,8). Archimede capì che la corona di Gerone non era d'oro puro misurandone il volume con l'acqua spostata.</p>"
        }
      ],
      "edges": [
        [
          "unita",
          "par",
          "conto i cubetti"
        ],
        [
          "par",
          "prisma",
          "generalizza"
        ],
        [
          "cav",
          "prisma",
          "dimostra"
        ],
        [
          "prisma",
          "piramide",
          "÷ 3"
        ],
        [
          "cav",
          "sfera",
          "usato per"
        ],
        [
          "prisma",
          "sfera",
          "confronto con il cilindro"
        ],
        [
          "prisma",
          "peso",
          "serve per"
        ],
        [
          "piramide",
          "eulero",
          "poliedri"
        ]
      ]
    }
  ],
  "glossary": [
    {
      "t": "Poliedro",
      "d": "Solido delimitato da poligoni."
    },
    {
      "t": "Solido di rotazione",
      "d": "Solido ottenuto ruotando una figura piana attorno a una retta (asse)."
    },
    {
      "t": "Spigolo",
      "d": "Segmento in cui si incontrano due facce di un poliedro."
    },
    {
      "t": "Apotema",
      "d": "Nella piramide, altezza di una faccia laterale; nel cono, segmento dal vertice alla circonferenza di base."
    },
    {
      "t": "Sviluppo piano",
      "d": "La figura piana che si ottiene «aprendo» la superficie di un solido."
    },
    {
      "t": "Volume",
      "d": "Misura dello spazio occupato da un solido."
    },
    {
      "t": "Peso specifico",
      "d": "Peso dell'unità di volume di un materiale (es. g/cm³)."
    }
  ],
  "verifica": {
    "pass": 0.7,
    "questions": [
      {
        "type": "num",
        "q": "Superficie totale di un cubo di spigolo 3 cm?",
        "answer": 54,
        "tol": 0,
        "unit": "cm²",
        "explain": "6 × 3² = 54 cm²."
      },
      {
        "type": "num",
        "q": "Volume di un cubo di spigolo 4 cm?",
        "answer": 64,
        "tol": 0,
        "unit": "cm³",
        "explain": "4³ = 64 cm³."
      },
      {
        "type": "num",
        "q": "Un prisma ha area di base 12 cm² e altezza 10 cm. Volume?",
        "answer": 120,
        "tol": 0,
        "unit": "cm³",
        "explain": "V = A_b × h = 120 cm³."
      },
      {
        "type": "num",
        "q": "Una piramide ha area di base 36 cm² e altezza 5 cm. Volume?",
        "answer": 60,
        "tol": 0,
        "unit": "cm³",
        "explain": "V = 36 × 5 / 3 = 60 cm³."
      },
      {
        "type": "num",
        "q": "Cono con raggio 3 cm e altezza 4 cm: quanto misura l'apotema?",
        "answer": 5,
        "tol": 0,
        "unit": "cm",
        "explain": "a = √(9 + 16) = 5 cm."
      },
      {
        "type": "mc",
        "q": "Il volume del cilindro si calcola con:",
        "options": [
          "2πr·h",
          "πr²·h",
          "4πr²",
          "πr·a"
        ],
        "answer": 1,
        "explain": "Area di base (πr²) per altezza."
      },
      {
        "type": "mc",
        "q": "Quante facce, spigoli e vertici ha un cubo?",
        "options": [
          "6, 12, 8",
          "6, 8, 12",
          "8, 12, 6",
          "4, 6, 4"
        ],
        "answer": 0,
        "explain": "6 facce, 12 spigoli, 8 vertici: 6 + 8 − 12 = 2."
      },
      {
        "type": "tf",
        "q": "1 m³ corrisponde a 1000 litri.",
        "answer": true,
        "explain": "1 m³ = 1000 dm³ e 1 dm³ = 1 l."
      },
      {
        "type": "num",
        "q": "Cilindro di raggio 2 cm e altezza 10 cm. Volume (usa π = 3,14)?",
        "answer": 125.6,
        "tol": 0.1,
        "unit": "cm³",
        "explain": "3,14 × 4 × 10 = 125,6 cm³."
      },
      {
        "type": "mc",
        "q": "Un oggetto galleggia sull'acqua se il suo peso specifico è:",
        "options": [
          "maggiore di 1",
          "minore di 1",
          "uguale a 7,8",
          "qualsiasi"
        ],
        "answer": 1,
        "explain": "Se è meno denso dell'acqua (ps < 1 g/cm³) galleggia."
      },
      {
        "type": "text",
        "q": "Come si chiama il solido ottenuto facendo ruotare un rettangolo attorno a un lato?",
        "answer": [
          "cilindro",
          "il cilindro"
        ],
        "explain": "È il cilindro."
      }
    ],
    "gen": [
      [
        "volCube",
        1
      ],
      [
        "volBox",
        1
      ]
    ]
  }
});
