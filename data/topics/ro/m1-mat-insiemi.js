TOPIC('ro', {
 "id": "m1-mat-insiemi",
 "title": "Mulțimile",
 "intro": "O <b>mulțime</b> este o colecție de obiecte alese după un criteriu precis. Cu mulțimile putem să ne ordonăm ideile, să clasificăm, să rezolvăm probleme și să înțelegem limbajul pe care îl folosește toată matematica. Învățăm să le <b>reprezentăm</b> și să facem <b>operații</b>: intersecția, reuniunea, diferența, complementara și produsul cartezian.",
 "minutes": 40,
 "sections": [
  {
   "type": "text",
   "title": "Ce este o mulțime",
   "html": "<p>În matematică, o <b>mulțime</b> este o grupare de obiecte (numite <b>elemente</b>) pentru care se poate stabili <b>fără ambiguitate</b> dacă un obiect face parte din ea sau nu.</p>\n<ul>\n<li>«Lunile anului care încep cu litera M» → <b>este o mulțime</b>: martie, mai. Nicio îndoială.</li>\n<li>«Numerele pare mai mici decât 10» → <b>este o mulțime</b>: 0, 2, 4, 6, 8.</li>\n<li>«Cele mai frumoase filme» → <b>nu este o mulțime</b>: «frumos» depinde de gusturi!</li>\n</ul>\n<p><b>Simboluri</b>:</p>\n<ul>\n<li>mulțimile se notează cu litere <b>mari</b>: A, B, C…; elementele cu litere mici sau cu numere;</li>\n<li><b>∈</b> înseamnă «<b>aparține</b>»: 4 ∈ P (4 aparține mulțimii numerelor pare);</li>\n<li><b>∉</b> înseamnă «<b>nu aparține</b>»: 7 ∉ P;</li>\n<li>o mulțime fără elemente este <b>mulțimea vidă</b>: ∅ sau { } (de ex. «lunile cu 32 de zile»);</li>\n<li>numărul de elemente se numește <b>cardinal</b>: |A| sau n(A). O mulțime poate fi <b>finită</b> (literele alfabetului) sau <b>infinită</b> (numerele naturale).</li>\n</ul>"
  },
  {
   "type": "text",
   "title": "Trei moduri de a reprezenta o mulțime",
   "html": "<p>Aceeași mulțime se poate scrie în trei moduri. Să luăm A = vocalele alfabetului.</p>\n<ol>\n<li><b>Reprezentarea prin enumerare</b> (sau tabelară): se scriu toate elementele între acolade, separate prin virgule, <b>fără repetări</b> și în orice ordine:<br><b>A = { a, e, i, o, u }</b></li>\n<li><b>Reprezentarea prin proprietate caracteristică</b>: se scrie proprietatea care le este comună:<br><b>A = { x | x este o vocală a alfabetului }</b><br>(se citește: «A este mulțimea elementelor x astfel încât x este o vocală»). Este foarte utilă pentru mulțimile infinite: P = { x | x este un număr natural par }.</li>\n<li><b>Reprezentarea grafică</b> (diagrama <b>Euler-Venn</b>): se desenează o linie închisă și înăuntru se pun elementele cu câte un punct. Ce este în afară nu aparține.</li>\n</ol>\n<p>Atenție: { 1, 2, 3 } și { 3, 1, 2 } sunt <b>aceeași</b> mulțime (ordinea nu contează), iar { 1, 1, 2 } se scrie pur și simplu { 1, 2 }.</p>"
  },
  {
   "type": "svg",
   "title": "Diagrama Euler-Venn",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#ffffff\"/>\n<ellipse cx=\"180\" cy=\"150\" rx=\"140\" ry=\"105\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"4\"/>\n<text x=\"60\" y=\"55\" font-size=\"28\" font-weight=\"bold\" fill=\"#1d4ed8\">A</text>\n<g font-size=\"22\" font-weight=\"bold\" fill=\"#1e3a8a\">\n<circle cx=\"120\" cy=\"110\" r=\"5\"/><text x=\"132\" y=\"117\">a</text>\n<circle cx=\"210\" cy=\"100\" r=\"5\"/><text x=\"222\" y=\"107\">e</text>\n<circle cx=\"140\" cy=\"180\" r=\"5\"/><text x=\"152\" y=\"187\">i</text>\n<circle cx=\"230\" cy=\"170\" r=\"5\"/><text x=\"242\" y=\"177\">o</text>\n<circle cx=\"185\" cy=\"225\" r=\"5\"/><text x=\"197\" y=\"232\">u</text>\n</g>\n<g font-size=\"22\" fill=\"#64748b\">\n<circle cx=\"380\" cy=\"80\" r=\"5\"/><text x=\"392\" y=\"87\">b</text>\n<circle cx=\"430\" cy=\"160\" r=\"5\"/><text x=\"442\" y=\"167\">m</text>\n<circle cx=\"370\" cy=\"230\" r=\"5\"/><text x=\"382\" y=\"237\">z</text>\n</g>\n<text x=\"480\" y=\"60\" font-size=\"18\" fill=\"#0f172a\">a ∈ A</text>\n<text x=\"480\" y=\"95\" font-size=\"18\" fill=\"#0f172a\">m ∉ A</text>\n<text x=\"480\" y=\"130\" font-size=\"18\" fill=\"#0f172a\">|A| = 5</text>\n<text x=\"330\" y=\"285\" font-size=\"15\" fill=\"#475569\">în afara liniei: nu aparțin</text>\n</svg>",
   "caption": "Se numește așa în onoarea lui Leonhard Euler (1707–1783) și a lui John Venn (1834–1923), care au folosit aceste desene pentru a raționa în logică."
  },
  {
   "type": "text",
   "title": "Submulțimi și egalitate",
   "html": "<p>O mulțime B este <b>submulțime</b> a lui A dacă <b>fiecare</b> element al lui B este și element al lui A. Se scrie <b>B ⊆ A</b> (B este <b>inclusă</b> în A).</p>\n<p>Exemplu: A = { 1, 2, 3, 4, 5, 6 }, B = { 2, 4, 6 } → B ⊆ A. În diagramă, B este desenată <b>în interiorul</b> lui A.</p>\n<ul>\n<li>Dacă B ⊆ A și A are cel puțin un element în plus, B este o submulțime <b>proprie</b>: <b>B ⊂ A</b>.</li>\n<li>Orice mulțime este submulțime a ei însăși, iar mulțimea vidă este submulțime a <b>oricărei</b> mulțimi: se numesc submulțimi <b>improprii</b>.</li>\n<li>Două mulțimi sunt <b>egale</b> dacă au exact aceleași elemente: A ⊆ B și B ⊆ A.</li>\n</ul>\n<p>Mulțimea <b>tuturor</b> submulțimilor lui A se numește <b>mulțimea părților</b> P(A). Dacă A are n elemente, submulțimile sunt <b>2ⁿ</b>. Pentru A = { x, y }: ∅, {x}, {y}, {x, y} → 4 = 2².</p>\n<p>Atenție la simboluri: <b>∈</b> leagă un <b>element</b> de o mulțime (2 ∈ A); <b>⊆</b> leagă o <b>mulțime</b> de o mulțime ({2} ⊆ A).</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-test: reprezentarea mulțimilor",
   "questions": [
    {
     "type": "tf",
     "q": "«Elevii simpatici ai clasei» este o mulțime în sens matematic.",
     "answer": false,
     "explain": "«Simpatic» este o părere personală: nu se poate stabili fără ambiguitate cine face parte din ea."
    },
    {
     "type": "mc",
     "q": "Cum se scrie prin enumerare mulțimea literelor cuvântului «MAMMA» (în italiană «mamă»)?",
     "options": [
      "{ M, A, M, M, A }",
      "{ M, A }",
      "{ MAMMA }",
      "{ M, M, M }"
     ],
     "answer": 1,
     "explain": "Elementele nu se repetă: literele diferite sunt doar M și A."
    },
    {
     "type": "mc",
     "q": "Dacă A = { 3, 5, 7 }, care scriere este corectă?",
     "options": [
      "5 ⊆ A",
      "{5} ∈ A",
      "5 ∈ A",
      "4 ∈ A"
     ],
     "answer": 2,
     "explain": "5 este un element: se folosește ∈. {5} este o mulțime: s-ar scrie {5} ⊆ A."
    },
    {
     "type": "num",
     "q": "Câte submulțimi are o mulțime cu 3 elemente?",
     "answer": 8,
     "tol": 0,
     "explain": "2³ = 8, numărând și mulțimea vidă și mulțimea însăși."
    }
   ]
  },
  {
   "type": "text",
   "title": "Operațiile cu mulțimi",
   "html": "<p>Să luăm A = { 1, 2, 3, 4, 5, 6 } (numerele zarului) și B = { 2, 4, 6, 8 } (pare mai mici decât 10, fără 0).</p>\n<table>\n<tr><th>Operația</th><th>Simbolul</th><th>Semnificația</th><th>Rezultatul</th></tr>\n<tr><td><b>Intersecția</b></td><td>A ∩ B</td><td>elemente care sunt <b>și în A, și în B</b> (comune)</td><td>{ 2, 4, 6 }</td></tr>\n<tr><td><b>Reuniunea</b></td><td>A ∪ B</td><td>elemente care sunt <b>în A sau în B</b> (cel puțin într-una), luate o singură dată</td><td>{ 1, 2, 3, 4, 5, 6, 8 }</td></tr>\n<tr><td><b>Diferența</b></td><td>A − B (sau A  B)</td><td>elemente ale lui A care <b>nu</b> sunt în B</td><td>{ 1, 3, 5 }</td></tr>\n<tr><td><b>Diferența</b></td><td>B − A</td><td>elemente ale lui B care nu sunt în A</td><td>{ 8 }</td></tr>\n</table>\n<ul>\n<li>Dacă A ∩ B = ∅, mulțimile se numesc <b>disjuncte</b> (de ex. pare și impare).</li>\n<li>Reuniunea și intersecția au proprietatea <b>comutativă</b>: A ∪ B = B ∪ A. Diferența <b>nu</b>!</li>\n<li>Dacă B ⊆ U (U = mulțimea <b>universală</b>, care conține tot), diferența U − B se numește <b>complementara</b> lui B față de U: B̄ sau C<sub>U</sub>B.</li>\n<li><b>Regula de numărare</b>: |A ∪ B| = |A| + |B| − |A ∩ B|. Elementele comune se scad pentru că altfel le-am număra de două ori. Aici: 6 + 4 − 3 = 7 ✔️</li>\n</ul>"
  },
  {
   "type": "svg",
   "title": "Operațiile desenate",
   "svg": "<svg viewBox=\"0 0 600 220\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"220\" fill=\"#ffffff\"/>\n<defs>\n<clipPath id=\"ia\"><circle cx=\"80\" cy=\"95\" r=\"55\"/></clipPath>\n\n</defs>\n<circle cx=\"80\" cy=\"95\" r=\"55\" fill=\"#ffffff\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<circle cx=\"130\" cy=\"95\" r=\"55\" fill=\"#ffffff\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n<circle cx=\"130\" cy=\"95\" r=\"55\" fill=\"#a855f7\" clip-path=\"url(#ia)\"/>\n<circle cx=\"80\" cy=\"95\" r=\"55\" fill=\"none\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<circle cx=\"130\" cy=\"95\" r=\"55\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n<text x=\"105\" y=\"185\" font-size=\"22\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#581c87\">A ∩ B</text>\n<circle cx=\"280\" cy=\"95\" r=\"55\" fill=\"#a855f7\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<circle cx=\"330\" cy=\"95\" r=\"55\" fill=\"#a855f7\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n<circle cx=\"280\" cy=\"95\" r=\"55\" fill=\"none\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<text x=\"305\" y=\"185\" font-size=\"22\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#581c87\">A ∪ B</text>\n<circle cx=\"470\" cy=\"95\" r=\"55\" fill=\"#a855f7\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<circle cx=\"520\" cy=\"95\" r=\"55\" fill=\"#ffffff\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n<circle cx=\"470\" cy=\"95\" r=\"55\" fill=\"none\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<text x=\"495\" y=\"185\" font-size=\"22\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#581c87\">A − B</text>\n<g font-size=\"18\" font-weight=\"bold\"><text x=\"45\" y=\"40\" fill=\"#1d4ed8\">A</text><text x=\"160\" y=\"40\" fill=\"#dc2626\">B</text><text x=\"245\" y=\"40\" fill=\"#1d4ed8\">A</text><text x=\"360\" y=\"40\" fill=\"#dc2626\">B</text><text x=\"435\" y=\"40\" fill=\"#1d4ed8\">A</text><text x=\"550\" y=\"40\" fill=\"#dc2626\">B</text></g>\n<text x=\"300\" y=\"212\" font-size=\"15\" text-anchor=\"middle\" fill=\"#475569\">cu mov: rezultatul operației</text>\n</svg>",
   "caption": "Intersecția = partea comună («și»); reuniunea = tot («sau»); diferența = A din care s-a scos partea lui B."
  },
  {
   "type": "example",
   "title": "Exemplu practic: sportul în clasă",
   "html": "<p>Într-o clasă de <b>24</b> de elevi, <b>14</b> joacă fotbal, <b>9</b> fac înot și <b>5</b> fac ambele sporturi. Câți nu fac niciunul dintre ele?</p>\n<ol>\n<li>Desenează două cercuri care se intersectează: F (fotbal) și N (înot), în interiorul dreptunghiului U (clasa).</li>\n<li>În intersecție scrie <b>5</b>.</li>\n<li>Doar fotbal: 14 − 5 = <b>9</b>. Doar înot: 9 − 5 = <b>4</b>.</li>\n<li>Cel puțin un sport: |F ∪ N| = 14 + 9 − 5 = <b>18</b> (sau 9 + 5 + 4).</li>\n<li>Niciun sport (complementara): 24 − 18 = <b>6</b> elevi.</li>\n</ol>\n<p>Greșeală tipică: să aduni 14 + 9 = 23 și să concluzionezi că doar 1 nu face sport. Dar astfel cei 5 care fac ambele sunt numărați <b>de două ori</b>!</p>"
  },
  {
   "type": "text",
   "title": "Produsul cartezian",
   "html": "<p><b>Produsul cartezian</b> A × B este mulțimea tuturor <b>perechilor ordonate</b> (a; b) cu primul element luat din A și al doilea din B.</p>\n<p>A = { paste, orez }, B = { roșii, pesto, unt } →<br>A × B = { (paste; roșii), (paste; pesto), (paste; unt), (orez; roșii), (orez; pesto), (orez; unt) }</p>\n<ul>\n<li>Numărul de perechi este <b>|A| × |B|</b> = 2 × 3 = 6. De aceea se numește «produs»!</li>\n<li>Perechile sunt <b>ordonate</b>: (paste; pesto) ≠ (pesto; paste), deci în general A × B ≠ B × A.</li>\n<li>Se reprezintă cu un <b>tabel cu dublă intrare</b>, cu o <b>diagramă cu săgeți</b> sau cu un <b>plan cartezian</b> (o rețea de puncte).</li>\n</ul>\n<p>Se numește așa în onoarea lui <b>René Descartes</b> (Cartesius, 1596–1650), filosoful francez care a inventat planul cartezian cu coordonatele (x; y).</p>"
  },
  {
   "type": "example",
   "title": "Exemplu practic: câte combinații?",
   "html": "<p>Ai <b>3 tricouri</b> (roșu, albastru, verde) și <b>2 perechi de pantaloni</b> (jeans, trening). Câte combinații diferite poți face?</p>\n<table>\n<tr><th>×</th><th>jeans</th><th>trening</th></tr>\n<tr><td><b>roșu</b></td><td>(roșu; jeans)</td><td>(roșu; trening)</td></tr>\n<tr><td><b>albastru</b></td><td>(albastru; jeans)</td><td>(albastru; trening)</td></tr>\n<tr><td><b>verde</b></td><td>(verde; jeans)</td><td>(verde; trening)</td></tr>\n</table>\n<p>3 × 2 = <b>6 combinații</b>. Dacă adaugi 4 perechi de pantofi: 6 × 4 = 24 de combinații! Este același raționament folosit pentru a număra numerele de înmatriculare ale mașinilor sau parolele posibile.</p>"
  },
  {
   "type": "widget",
   "title": "Unde merge fiecare număr?",
   "widget": "classify",
   "options": {
    "groups": [
     "Doar multipli de 2",
     "Multipli de 2 și de 3 (intersecția)",
     "Doar multipli de 3",
     "Nici unii, nici ceilalți"
    ],
    "items": [
     [
      "4",
      0
     ],
     [
      "6",
      1
     ],
     [
      "9",
      2
     ],
     [
      "12",
      1
     ],
     [
      "5",
      3
     ],
     [
      "8",
      0
     ],
     [
      "15",
      2
     ],
     [
      "18",
      1
     ],
     [
      "7",
      3
     ],
     [
      "10",
      0
     ],
     [
      "21",
      2
     ],
     [
      "1",
      3
     ]
    ]
   },
   "caption": "Cu U = {1…21}, A = multipli de 2, B = multipli de 3: intersecția A ∩ B sunt multiplii lui 6!"
  },
  {
   "type": "curiosity",
   "title": "Cantor și infiniturile de mărimi diferite",
   "html": "<p>Teoria mulțimilor a fost creată de matematicianul german <b>Georg Cantor</b> între <b>1874</b> și 1897. A descoperit un lucru care i-a lăsat fără cuvinte pe matematicienii vremii: <b>există infinituri mai mari decât altele</b>!</p>\n<p>Numerele naturale (0, 1, 2, 3…) și numerele pare sunt «la fel de multe»: le poți împerechea 0↔0, 1↔2, 2↔4, 3↔6… fără să rămână vreunul. În schimb, punctele unei drepte sunt «mai multe» decât numerele naturale: nu pot fi numărate unul câte unul nici într-un timp infinit. Matematicianul David Hilbert a spus: «Nimeni nu ne va alunga din paradisul pe care Cantor l-a creat pentru noi».</p>"
  },
  {
   "type": "curiosity",
   "title": "Paradoxul bărbierului",
   "html": "<p>În <b>1901</b>, filosoful englez <b>Bertrand Russell</b> a descoperit o problemă în teoria mulțimilor, pe care a explicat-o astfel: într-un sat, bărbierul bărbierește <b>toți și numai</b> bărbații care <b>nu</b> se bărbieresc singuri. Cine îl bărbierește pe bărbier?</p>\n<ul>\n<li>Dacă se bărbierește singur, atunci n-ar trebui să se bărbierească (bărbierește doar pe cine nu se bărbierește singur).</li>\n<li>Dacă nu se bărbierește singur, atunci ar trebui să se bărbierească!</li>\n</ul>\n<p>Este un <b>paradox</b>: un asemenea bărbier nu există. Pentru a evita probleme asemănătoare, matematicienii au trebuit să stabilească reguli mai riguroase despre ce poate fi o mulțime. De aceea definiția spune «fără ambiguitate»!</p>"
  },
  {
   "type": "alternatives",
   "title": "Alte moduri de a înțelege",
   "intro": "Mulțimile sunt peste tot în jurul tău: încearcă să le vezi în aceste moduri.",
   "tabs": [
    {
     "label": "🧺 Cu cercuri de sfoară (hula-hoop)",
     "html": "<p>În școlile din multe țări (și în metoda Montessori) mulțimile se fac în sala de sport: două cercuri de sfoară pe podea care se suprapun puțin. Fiecare intră unde trebuie: în cercul roșu cine are un frate, în cel albastru cine are un animal. Cine le are pe amândouă stă în partea comună (<b>intersecția</b>); cine nu are niciuna rămâne <b>în afară</b> (complementara).</p><p>Încearcă acasă cu două șireturi și jucăriile tale: mașinuțe roșii și jucării cu roți… unde merge mașinuța roșie?</p>"
    },
    {
     "label": "🔍 Ca un motor de căutare",
     "html": "<p>Când cauți pe internet sau filtrezi produsele unui magazin online, folosești operațiile cu mulțimi!</p><ul><li>«pantofi <b>ȘI</b> roșii» → <b>intersecție</b>: doar pantofii care sunt și roșii;</li><li>«pisici <b>SAU</b> câini» → <b>reuniune</b>: toate paginile care vorbesc despre cel puțin unul dintre ei;</li><li>«pizza <b>NU</b> ananas» → <b>diferență</b>: paginile despre pizza, fără cele cu ananas.</li></ul><p>Acești operatori se numesc <b>AND, OR, NOT</b> și vin din <b>algebra lui Boole</b> (George Boole, 1854). Sunt baza funcționării computerelor!</p>"
    },
    {
     "label": "📊 Diagrama lui Carroll",
     "html": "<p>Scriitorul <i>Alice în Țara Minunilor</i>, <b>Lewis Carroll</b>, era și matematician! A inventat un alt mod de a desena mulțimile: un tabel. Este foarte folosit în școlile englezești.</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"260\" fill=\"#ffffff\"/><rect x=\"150\" y=\"50\" width=\"420\" height=\"190\" fill=\"#f8fafc\" stroke=\"#0f172a\" stroke-width=\"3\"/><line x1=\"360\" y1=\"50\" x2=\"360\" y2=\"240\" stroke=\"#0f172a\" stroke-width=\"3\"/><line x1=\"150\" y1=\"145\" x2=\"570\" y2=\"145\" stroke=\"#0f172a\" stroke-width=\"3\"/><g font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\"><text x=\"255\" y=\"38\" fill=\"#1d4ed8\">pare</text><text x=\"465\" y=\"38\" fill=\"#1d4ed8\">NU pare</text><text x=\"75\" y=\"102\" fill=\"#dc2626\">multipli</text><text x=\"75\" y=\"122\" fill=\"#dc2626\">de 3</text><text x=\"75\" y=\"192\" fill=\"#dc2626\">NU multipli</text><text x=\"75\" y=\"212\" fill=\"#dc2626\">de 3</text></g><g font-size=\"24\" text-anchor=\"middle\" fill=\"#0f172a\"><text x=\"255\" y=\"105\">6, 12, 18</text><text x=\"465\" y=\"105\">3, 9, 15</text><text x=\"255\" y=\"200\">2, 4, 8, 10</text><text x=\"465\" y=\"200\">1, 5, 7, 11</text></g><rect x=\"150\" y=\"50\" width=\"210\" height=\"95\" fill=\"#a855f7\" fill-opacity=\"0.25\"/></svg>"
    },
    {
     "label": "🧊 Produsul cartezian în 3D",
     "html": "<p>Produsul cartezian A × B poate fi «văzut» ca un <b>dreptunghi de cubulețe</b>: fiecare rând este un element din A, fiecare coloană un element din B, iar fiecare cubuleț este o pereche. Cu 3 tricouri și 4 perechi de pantaloni obții 3 × 4 = 12 cubulețe = 12 combinații. Schimbă numerele cu cursoarele!</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 3,
      "b": 4
     }
    },
    {
     "label": "🧩 Potrivește simbolul cu semnificația",
     "html": "<p>Leagă fiecare simbol de semnificația lui.</p>",
     "widget": "match",
     "options": {
      "pairs": [
       [
        "∈",
        "aparține"
       ],
       [
        "∉",
        "nu aparține"
       ],
       [
        "∅",
        "mulțimea vidă"
       ],
       [
        "⊆",
        "este submulțime a lui"
       ],
       [
        "∩",
        "intersecția"
       ],
       [
        "∪",
        "reuniunea"
       ],
       [
        "×",
        "produsul cartezian"
       ]
      ]
     }
    },
    {
     "label": "🇫🇷 «Cartofii» francezi",
     "html": "<p>În <b>Franța</b>, mulți profesori și elevi numesc, în glumă, diagramele Euler-Venn <b>«les patates»</b> (cartofii), pentru că se desenează ca linii închise rotunjite, nu neapărat cercuri perfecte. Este o idee importantă: <b>forma nu contează</b>, contează doar <b>cine este înăuntru și cine în afară</b>.</p><p>Să încercăm. Universul U = numerele de la 1 la 12. A = multiplii lui 2, B = multiplii lui 3.</p><ol><li>Desenează doi «cartofi» care se <b>suprapun</b> puțin, într-un dreptunghi (universul).</li><li>Începe întotdeauna cu <b>partea comună</b>: care numere sunt multipli și ai lui 2, și ai lui 3? <b>6 și 12</b> → A ∩ B = {6, 12}.</li><li>Apoi restul lui A: 2, 4, 8, 10.</li><li>Apoi restul lui B: 3, 9.</li><li>În sfârșit, <b>în afara cartofilor</b>, dar în interiorul universului: 1, 5, 7, 11.</li></ol><p>Acum citește desenul: A ∪ B = {2, 3, 4, 6, 8, 9, 10, 12} (tot ce se află în cel puțin un cartof); <b>complementara</b> lui A ∪ B = {1, 5, 7, 11}. Ai descoperit și o regulă: multiplii comuni ai lui 2 și 3 sunt <b>multiplii lui 6</b>!</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><rect x=\"20\" y=\"20\" width=\"560\" height=\"260\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"32\" y=\"46\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">U = {1, 2, …, 12}</text><path d=\"M120,150 C110,70 230,50 300,90 C350,120 360,200 300,230 C230,265 130,230 120,150 Z\" fill=\"#bfdbfe\" fill-opacity=\"0.7\" stroke=\"#1d4ed8\" stroke-width=\"3\"/><path d=\"M260,140 C250,80 360,55 430,85 C500,115 490,215 420,235 C340,258 270,210 260,140 Z\" fill=\"#fbcfe8\" fill-opacity=\"0.7\" stroke=\"#be185d\" stroke-width=\"3\"/><text x=\"150\" y=\"80\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">A: multipli de 2</text><text x=\"380\" y=\"72\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#be185d\" font-weight=\"bold\">B: multipli de 3</text><text x=\"160\" y=\"140\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">2</text><text x=\"200\" y=\"120\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">4</text><text x=\"170\" y=\"190\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">8</text><text x=\"220\" y=\"210\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">10</text><text x=\"282\" y=\"150\" font-size=\"22\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">6</text><text x=\"286\" y=\"190\" font-size=\"22\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">12</text><text x=\"380\" y=\"140\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">3</text><text x=\"410\" y=\"195\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">9</text><text x=\"60\" y=\"260\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">1</text><text x=\"510\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">5</text><text x=\"530\" y=\"250\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">7</text><text x=\"60\" y=\"110\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">11</text></svg>"
    },
    {
     "label": "🇺🇸 «New Math» americană: a număra prin împerechere",
     "html": "<p>În anii '60, în <b>Statele Unite</b>, o mare reformă a școlii numită <b>«New Math»</b> a adus mulțimile încă din clasele mici. Una dintre ideile-cheie, luată de la Cantor, era aceasta: <b>două mulțimi au același număr de elemente dacă le poți împerechea unu la unu</b>, fără să rămână vreunul (se numește <b>corespondență biunivocă</b>). Nici măcar nu trebuie să știi să numeri!</p><ol><li>A = {🍎, 🍐, 🍌} și B = {a, b, c}. Împerechează: 🍎↔a, 🍐↔b, 🍌↔c. Niciunul nu rămâne singur → A și B au <b>același număr</b> de elemente (3).</li><li>C = {🐶, 🐱, 🐭, 🐰} și B = {a, b, c}: după împerecheri rămâne un animal → C are <b>mai multe</b> elemente decât B.</li><li>Acum surpriza. N = {1, 2, 3, 4, …} și P = {2, 4, 6, 8, …}. Împerechează fiecare număr cu dublul lui: 1↔2, 2↔4, 3↔6, 4↔8… Nu rămâne niciodată nimeni!</li></ol><p>Deci numerele pare sunt «tot atâtea» cât toate numerele naturale, chiar dacă P este doar o parte din N. Cu mulțimile <b>infinite</b> se întâmplă lucruri care cu cele finite sunt imposibile: este exact ceea ce a descoperit Cantor.</p><p>🎯 Încearcă: cum împerechezi N cu mulțimea multiplilor lui 10?</p>"
    }
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-test: operații",
   "questions": [
    {
     "type": "mc",
     "q": "A = { 1, 3, 5, 7 }, B = { 3, 4, 5 }. Cât este A ∩ B?",
     "options": [
      "{ 1, 3, 4, 5, 7 }",
      "{ 3, 5 }",
      "{ 1, 7 }",
      "{ 4 }"
     ],
     "answer": 1,
     "explain": "Elementele comune sunt 3 și 5."
    },
    {
     "type": "mc",
     "q": "Cu aceleași mulțimi, cât este A − B?",
     "options": [
      "{ 1, 7 }",
      "{ 4 }",
      "{ 3, 5 }",
      "∅"
     ],
     "answer": 0,
     "explain": "Se scot din A elementele care sunt și în B: rămân 1 și 7."
    },
    {
     "type": "num",
     "q": "|A| = 10, |B| = 7, |A ∩ B| = 3. Cât este |A ∪ B|?",
     "answer": 14,
     "tol": 0,
     "explain": "10 + 7 − 3 = 14: elementele comune se numără o singură dată."
    },
    {
     "type": "tf",
     "q": "A × B și B × A sunt întotdeauna aceeași mulțime.",
     "answer": false,
     "explain": "Perechile sunt ordonate: (1; a) este diferită de (a; 1). Au însă același număr de elemente."
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Hartă: de ce sunt mulțimile limbajul matematicii",
   "nodes": [
    {
     "id": "classificare",
     "label": "A clasifica",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "A grupa obiecte după o caracteristică.",
     "why": "Este una dintre primele activități ale gândirii: încă Aristotel (secolul al IV-lea î.Hr.) clasifica animale și concepte în genuri și specii."
    },
    {
     "id": "insieme",
     "label": "Mulțime",
     "x": 50,
     "y": 22,
     "color": "#2563eb",
     "html": "Colecție de elemente bine definită.",
     "why": "Georg Cantor (1874) a făcut din ea un concept matematic riguros: «o mulțime este o colecție de obiecte distincte, gândite ca un tot»."
    },
    {
     "id": "appartenenza",
     "label": "Apartenența ∈",
     "x": 15,
     "y": 36,
     "color": "#0ea5e9",
     "html": "Un element aparține sau nu aparține: nu există cale de mijloc.",
     "why": "Este principiul logic al «terțului exclus» (Aristotel): un lucru sau este, sau nu este. Simbolul ∈ vine de la litera greacă epsilon, inițiala lui «este», ales de Giuseppe Peano în 1889."
    },
    {
     "id": "rappresentazioni",
     "label": "Reprezentări",
     "x": 85,
     "y": 36,
     "color": "#16a34a",
     "html": "Enumerare, proprietate caracteristică, diagrama Euler-Venn.",
     "why": "Euler a folosit cercurile în «Scrisori către o prințesă germană» (1768); John Venn le-a perfecționat în 1880 pentru logică."
    },
    {
     "id": "sottoinsiemi",
     "label": "Submulțimi",
     "x": 25,
     "y": 56,
     "color": "#9333ea",
     "html": "B ⊆ A dacă fiecare element al lui B este în A.",
     "why": "Submulțimile unei mulțimi cu n elemente sunt 2ⁿ: pentru fiecare element se decide «înăuntru» sau «în afară», 2 alegeri repetate de n ori."
    },
    {
     "id": "operazioni",
     "label": "Operații ∩ ∪ −",
     "x": 50,
     "y": 56,
     "color": "#ea580c",
     "html": "Intersecție, reuniune, diferență, complementară.",
     "why": "Corespund cuvintelor «și», «sau», «nu» din logică. George Boole (1854) a creat o algebră a logicii care face astăzi să funcționeze circuitele computerelor."
    },
    {
     "id": "cartesiano",
     "label": "Produs cartezian",
     "x": 78,
     "y": 56,
     "color": "#dc2626",
     "html": "Toate perechile ordonate (a; b).",
     "why": "Se naște din ideea lui Descartes (1637) de a descrie fiecare punct al planului printr-o pereche de numere: coordonatele."
    },
    {
     "id": "contare",
     "label": "A număra: |A ∪ B|",
     "x": 35,
     "y": 80,
     "color": "#f59e0b",
     "html": "|A ∪ B| = |A| + |B| − |A ∩ B|.",
     "why": "Este «principiul includerii și excluderii»: se scade intersecția pentru că a fost numărată de două ori."
    },
    {
     "id": "fondamenti",
     "label": "Fundamentele matematicii",
     "x": 72,
     "y": 82,
     "color": "#0f766e",
     "html": "Numerele, funcțiile, geometria se definesc cu ajutorul mulțimilor.",
     "why": "După paradoxul lui Russell (1901), Zermelo (1908) și Fraenkel au stabilit axiomele teoriei mulțimilor (ZF), baza aproape întregii matematici moderne."
    }
   ],
   "edges": [
    [
     "classificare",
     "insieme",
     "se formalizează în"
    ],
    [
     "insieme",
     "appartenenza",
     "se bazează pe"
    ],
    [
     "insieme",
     "rappresentazioni",
     "se scrie cu"
    ],
    [
     "insieme",
     "sottoinsiemi",
     "conține"
    ],
    [
     "insieme",
     "operazioni",
     "se combină cu"
    ],
    [
     "insieme",
     "cartesiano",
     "se înmulțește"
    ],
    [
     "operazioni",
     "contare",
     "permite să"
    ],
    [
     "sottoinsiemi",
     "fondamenti",
     "structură"
    ],
    [
     "operazioni",
     "fondamenti",
     "logică"
    ],
    [
     "cartesiano",
     "fondamenti",
     "coordonate"
    ]
   ]
  }
 ],
 "glossary": [
  {
   "t": "Mulțime",
   "d": "Grupare de obiecte pentru care se poate spune fără ambiguitate dacă un obiect face parte din ea."
  },
  {
   "t": "Element",
   "d": "Fiecare dintre obiectele care formează o mulțime."
  },
  {
   "t": "Mulțime vidă",
   "d": "Mulțime fără elemente: ∅."
  },
  {
   "t": "Cardinal",
   "d": "Numărul de elemente al unei mulțimi."
  },
  {
   "t": "Submulțime",
   "d": "Mulțime ale cărei elemente aparțin toate unei alte mulțimi."
  },
  {
   "t": "Intersecție",
   "d": "Mulțimea elementelor comune a două mulțimi: A ∩ B."
  },
  {
   "t": "Reuniune",
   "d": "Mulțimea elementelor care aparțin cel puțin uneia dintre cele două mulțimi: A ∪ B."
  },
  {
   "t": "Diferență",
   "d": "Elementele primei mulțimi care nu aparțin celei de-a doua: A − B."
  },
  {
   "t": "Complementară",
   "d": "Elementele universului care nu aparțin unei mulțimi."
  },
  {
   "t": "Produs cartezian",
   "d": "Mulțimea tuturor perechilor ordonate (a; b) cu a ∈ A și b ∈ B."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Care dintre acestea este o mulțime în sens matematic?",
    "options": [
     "Cărțile interesante",
     "Numerele impare mai mici decât 10",
     "Cele mai frumoase cântece",
     "Băieții înalți"
    ],
    "answer": 1,
    "explain": "{ 1, 3, 5, 7, 9 }: se stabilește fără îndoieli cine face parte din ea."
   },
   {
    "type": "num",
    "q": "Câte elemente are mulțimea literelor cuvântului «MATEMATICA»?",
    "answer": 6,
    "tol": 0,
    "explain": "{ M, A, T, E, I, C }: 6 litere diferite."
   },
   {
    "type": "mc",
    "q": "Mulțimea lunilor cu 32 de zile este…",
    "options": [
     "infinită",
     "vidă",
     "formată dintr-un element",
     "nu este o mulțime"
    ],
    "answer": 1,
    "explain": "Nicio lună nu are 32 de zile: este mulțimea vidă ∅."
   },
   {
    "type": "mc",
    "q": "A = { a, b, c, d }, B = { c, d, e }. A ∪ B = ?",
    "options": [
     "{ c, d }",
     "{ a, b }",
     "{ a, b, c, d, e }",
     "{ a, b, c, d, c, d, e }"
    ],
    "answer": 2,
    "explain": "Toate elementele, fiecare o singură dată."
   },
   {
    "type": "tf",
    "q": "Mulțimea vidă este submulțime a oricărei mulțimi.",
    "answer": true,
    "explain": "Nu are elemente care să poată «sta în afară»: este o submulțime improprie a oricărei mulțimi."
   },
   {
    "type": "mc",
    "q": "Două mulțimi se numesc disjuncte atunci când…",
    "options": [
     "sunt egale",
     "intersecția lor este vidă",
     "una este submulțime a celeilalte",
     "au același număr de elemente"
    ],
    "answer": 1,
    "explain": "Nu au elemente comune: A ∩ B = ∅."
   },
   {
    "type": "num",
    "q": "Într-o clasă de 25 de elevi, 15 studiază în plus engleza, 12 franceza și 7 pe amândouă. Câți nu studiază nicio limbă în plus?",
    "answer": 5,
    "tol": 0,
    "explain": "Cel puțin una: 15 + 12 − 7 = 20. Nicio limbă: 25 − 20 = 5."
   },
   {
    "type": "num",
    "q": "A are 4 elemente și B are 5. Câte perechi are A × B?",
    "answer": 20,
    "tol": 0,
    "explain": "|A × B| = 4 × 5 = 20."
   },
   {
    "type": "text",
    "q": "Cum se numește diagrama cu linii închise folosită pentru a reprezenta mulțimile? (numele de familie ale celor doi matematicieni)",
    "answer": [
     "euler-venn",
     "euler venn",
     "venn",
     "euler",
     "diagrama euler-venn"
    ],
    "explain": "Diagrama Euler-Venn."
   },
   {
    "type": "mc",
    "q": "U = { 1, 2, 3, 4, 5, 6 }, B = { 2, 3 }. Complementara lui B față de U este…",
    "options": [
     "{ 2, 3 }",
     "{ 1, 4, 5, 6 }",
     "∅",
     "{ 1, 2, 3, 4, 5, 6 }"
    ],
    "answer": 1,
    "explain": "Elementele lui U care nu sunt în B."
   },
   {
    "type": "order",
    "q": "Pune în ordine pașii pentru a rezolva o problemă cu diagrama Venn",
    "items": [
     "Desenează universul și mulțimile care se intersectează",
     "Scrie numărul elementelor comune",
     "Calculează părțile «doar A» și «doar B»",
     "Calculează ce rămâne în afară"
    ],
    "explain": "Se pornește întotdeauna de la intersecție, apoi părțile exclusive, în final complementara."
   },
   {
    "type": "mc",
    "q": "Cine a întemeiat teoria mulțimilor?",
    "options": [
     "Euclid",
     "Georg Cantor",
     "Pitagora",
     "Isaac Newton"
    ],
    "answer": 1,
    "explain": "Georg Cantor, începând din 1874."
   }
  ]
 }
});
