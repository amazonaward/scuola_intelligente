TOPIC('ro', {
 "id": "p4-mat-frazioni",
 "title": "Fracțiile",
 "intro": "Când împarți o pizza cu prietenii, folosești deja <b>fracțiile</b>! Hai să învățăm să le citim, să le scriem, să le comparăm și să calculăm o fracție dintr-un număr.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "Ce este o fracție",
   "html": "<p>O <b>fracție</b> arată una sau mai multe <b>părți egale</b> ale unui întreg.</p>\n<p>Ca să <b>fracționezi</b> un întreg trebuie să-l împarți în părți <b>toate egale</b>. Fiecare parte se numește <b>unitate fracționară</b>: de exemplu ¼ (un sfert) sau ⅓ (o treime).</p>\n<p>O fracție se scrie cu două numere și o linie:</p>\n<ul>\n<li><b>numitorul</b> (jos) spune în câte părți egale a fost împărțit întregul;</li>\n<li><b>numărătorul</b> (sus) spune câte părți luăm;</li>\n<li><b>linia de fracție</b> stă la mijloc.</li>\n</ul>\n<p>Exemplu: <b>3/4</b> se citește „trei pătrimi”: întregul este împărțit în 4 părți egale și luăm 3.</p>"
  },
  {
   "type": "svg",
   "title": "Părțile unei fracții",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#fff7ed\"/>\n<circle cx=\"150\" cy=\"150\" r=\"100\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"4\"/>\n<path d=\"M150 150 L150 50 A100 100 0 0 1 250 150 Z\" fill=\"#f97316\"/>\n<path d=\"M150 150 L250 150 A100 100 0 0 1 150 250 Z\" fill=\"#f97316\"/>\n<path d=\"M150 150 L150 250 A100 100 0 0 1 50 150 Z\" fill=\"#f97316\"/>\n<path d=\"M150 50 L150 250 M50 150 L250 150\" stroke=\"#92400e\" stroke-width=\"4\"/>\n<text x=\"380\" y=\"110\" font-size=\"64\" font-weight=\"bold\" fill=\"#c2410c\" text-anchor=\"middle\">3</text>\n<line x1=\"340\" y1=\"130\" x2=\"420\" y2=\"130\" stroke=\"#1f2937\" stroke-width=\"6\"/>\n<text x=\"380\" y=\"190\" font-size=\"64\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">4</text>\n<text x=\"440\" y=\"100\" font-size=\"18\" fill=\"#c2410c\">numărător: părți luate</text>\n<text x=\"440\" y=\"136\" font-size=\"18\" fill=\"#1f2937\">linia de fracție</text>\n<text x=\"440\" y=\"180\" font-size=\"18\" fill=\"#1d4ed8\">numitor:</text>\n<text x=\"440\" y=\"202\" font-size=\"18\" fill=\"#1d4ed8\">total părți egale</text>\n<text x=\"150\" y=\"285\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1f2937\" font-weight=\"bold\">3/4 din pizza</text>\n</svg>",
   "caption": "Pizza este împărțită în 4 părți egale: cele 3 colorate sunt cele 3/4."
  },
  {
   "type": "widget",
   "title": "Construiește fracțiile",
   "widget": "fractionPie",
   "options": {
    "n": 3,
    "d": 4
   },
   "caption": "Mișcă cursoarele: schimbă numărătorul și numitorul și urmărește figura."
  },
  {
   "type": "quiz",
   "title": "Mini-test: citirea fracțiilor",
   "questions": [
    {
     "type": "mc",
     "q": "În 2/5 numitorul este…",
     "options": [
      "2",
      "5",
      "7"
     ],
     "answer": 1,
     "explain": "Numitorul este numărul de sub linie: 5."
    },
    {
     "type": "mc",
     "q": "Cum se citește 5/8?",
     "options": [
      "Cinci optimi",
      "Opt cincimi",
      "Cinci și opt"
     ],
     "answer": 0,
     "explain": "Se citește întâi numărătorul (cinci), apoi numitorul ca fracțiune (optimi)."
    },
    {
     "type": "tf",
     "q": "Ca să facem o fracție, întregul trebuie împărțit în părți egale.",
     "answer": true,
     "explain": "Părțile trebuie să fie toate egale, altfel nu este o fracție."
    }
   ]
  },
  {
   "type": "text",
   "title": "Fracții subunitare, supraunitare, echiunitare",
   "html": "<ul>\n<li><b>Subunitară</b>: numărătorul <b>mai mic</b> decât numitorul → este <b>mai puțin de un întreg</b>. Ex. 3/4, 2/5.</li>\n<li><b>Supraunitară</b>: numărătorul <b>mai mare</b> decât numitorul → este <b>mai mult de un întreg</b>. Ex. 5/4 (un întreg și un sfert).</li>\n<li><b>Echiunitară / număr întreg</b>: numărătorul este <b>multiplu</b> al numitorului → este egală cu <b>unul sau mai mulți întregi</b>. Ex. 4/4 = 1, 6/3 = 2.</li>\n</ul>"
  },
  {
   "type": "text",
   "title": "Fracții echivalente și comparare",
   "html": "<p>Două fracții sunt <b>echivalente</b> când arată <b>aceeași cantitate</b>, chiar dacă sunt scrise cu numere diferite.</p>\n<p>Exemplu: <b>1/2 = 2/4 = 4/8</b>. Jumătate de pizza este egală cu două sferturi de pizza!</p>\n<p>Ca să găsești o fracție echivalentă, <b>înmulțești</b> (sau <b>împarți</b>) numărătorul și numitorul cu <b>același număr</b>: 1/2 → (×3) → 3/6.</p>\n<p><b>Compararea</b>:</p>\n<ul>\n<li>același numitor: este mai mare cea cu numărătorul mai mare (3/5 &gt; 2/5);</li>\n<li>același numărător: este mai mare cea cu numitorul mai mic (1/3 &gt; 1/6), pentru că părțile sunt mai mari!</li>\n</ul>"
  },
  {
   "type": "svg",
   "title": "1/2 = 2/4 = 4/8",
   "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#f0f9ff\"/>\n<g stroke=\"#1e3a8a\" stroke-width=\"3\">\n<rect x=\"120\" y=\"30\" width=\"200\" height=\"50\" fill=\"#60a5fa\"/>\n<rect x=\"320\" y=\"30\" width=\"200\" height=\"50\" fill=\"#ffffff\"/>\n<rect x=\"120\" y=\"105\" width=\"100\" height=\"50\" fill=\"#34d399\"/>\n<rect x=\"220\" y=\"105\" width=\"100\" height=\"50\" fill=\"#34d399\"/>\n<rect x=\"320\" y=\"105\" width=\"100\" height=\"50\" fill=\"#ffffff\"/>\n<rect x=\"420\" y=\"105\" width=\"100\" height=\"50\" fill=\"#ffffff\"/>\n<rect x=\"120\" y=\"180\" width=\"50\" height=\"50\" fill=\"#f472b6\"/>\n<rect x=\"170\" y=\"180\" width=\"50\" height=\"50\" fill=\"#f472b6\"/>\n<rect x=\"220\" y=\"180\" width=\"50\" height=\"50\" fill=\"#f472b6\"/>\n<rect x=\"270\" y=\"180\" width=\"50\" height=\"50\" fill=\"#f472b6\"/>\n<rect x=\"320\" y=\"180\" width=\"50\" height=\"50\" fill=\"#ffffff\"/>\n<rect x=\"370\" y=\"180\" width=\"50\" height=\"50\" fill=\"#ffffff\"/>\n<rect x=\"420\" y=\"180\" width=\"50\" height=\"50\" fill=\"#ffffff\"/>\n<rect x=\"470\" y=\"180\" width=\"50\" height=\"50\" fill=\"#ffffff\"/>\n</g>\n<text x=\"60\" y=\"64\" font-size=\"26\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">1/2</text>\n<text x=\"60\" y=\"139\" font-size=\"26\" font-weight=\"bold\" fill=\"#047857\" text-anchor=\"middle\">2/4</text>\n<text x=\"60\" y=\"214\" font-size=\"26\" font-weight=\"bold\" fill=\"#be185d\" text-anchor=\"middle\">4/8</text>\n<line x1=\"320\" y1=\"20\" x2=\"320\" y2=\"240\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-dasharray=\"8 6\"/>\n</svg>",
   "caption": "Părțile colorate au aceeași lungime: cele trei fracții sunt echivalente."
  },
  {
   "type": "text",
   "title": "Fracția dintr-un număr",
   "html": "<p>Ca să calculezi o fracție dintr-un număr:</p>\n<ol>\n<li><b>împarți</b> numărul la <b>numitor</b> (afli cât valorează o parte);</li>\n<li><b>înmulțești</b> rezultatul cu <b>numărătorul</b>.</li>\n</ol>\n<p>Exemplu: 3/4 din 20 → 20 : 4 = 5 → 5 × 3 = <b>15</b>.</p>"
  },
  {
   "type": "example",
   "title": "Exemplu practic: tortul de ziua de naștere",
   "html": "<p>Tortul Giuliei este împărțit în <b>8 felii egale</b>. Prietenii mănâncă <b>5</b>.</p>\n<ul>\n<li>Au mâncat <b>5/8</b> din tort.</li>\n<li>Au rămas 8 − 5 = 3 felii, adică <b>3/8</b>.</li>\n<li>5/8 + 3/8 = 8/8 = <b>1 tort întreg</b>.</li>\n</ul>"
  },
  {
   "type": "example",
   "title": "Exemplu practic: cartonașele cu fotbaliști",
   "html": "<p>Marco are <b>24 de cartonașe</b> și îi dăruiește <b>2/3</b> prietenului său Luca. Câte cartonașe dăruiește?</p>\n<ol>\n<li>24 : 3 = 8 (o treime din cartonașe)</li>\n<li>8 × 2 = <b>16</b> cartonașe dăruite</li>\n</ol>\n<p>Lui Marco îi rămân 24 − 16 = <b>8</b>, adică 1/3.</p>"
  },
  {
   "type": "curiosity",
   "title": "Știai că…?",
   "html": "<p>Vechii <b>egipteni</b> foloseau aproape numai fracții cu numărătorul 1, ca 1/2, 1/3, 1/4… Ca să scrie 3/4, spuneau „1/2 + 1/4”!</p>"
  },
  {
   "type": "curiosity",
   "title": "Știai că…?",
   "html": "<p>Și muzica folosește fracții: notele se numesc <b>notă întreagă, doime (1/2), pătrime (1/4), optime (1/8)</b>… pentru că durează o fracțiune din timpul celei mai lungi note!</p>"
  },
  {
   "type": "remember",
   "title": "De reținut",
   "html": "<ul>\n<li>Numitorul = în câte părți egale împart; numărătorul = câte părți iau.</li>\n<li>Subunitară &lt; 1, supraunitară &gt; 1, echiunitară sau cu valoare întreagă = întregi.</li>\n<li>Fracția dintr-un număr: <b>împarți la numitor, înmulțești cu numărătorul</b>.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Alte moduri de a înțelege fracțiile",
   "intro": "Nu toți înțeleg fracțiile la fel. Aici găsești aceeași idee explicată cu pizza, ciocolata, axa numerelor, banii, cuburile 3D și… cum făceau vechii egipteni. Alege-o pe cea potrivită pentru tine!",
   "tabs": [
    {
     "label": "🍕 Pizza",
     "html": "<p>O pizza întreagă este <b>întregul</b>. Dacă o tai în <b>8 felii egale</b>, fiecare felie este <b>1/8</b> din pizza.</p>\n<p>Dacă mănânci 3 felii, ai mâncat <b>3/8</b>: <b>numitorul</b> (8) spune în câte felii ai tăiat, <b>numărătorul</b> (3) spune câte felii iei.</p>\n<p>Atenție: feliile trebuie să fie <b>toate egale</b>, altfel nu e o fracție corectă… și cineva se supără!</p>",
     "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\">\n<circle cx=\"170\" cy=\"140\" r=\"115\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"8\"/>\n<g stroke=\"#b45309\" stroke-width=\"4\">\n<line x1=\"170\" y1=\"140\" x2=\"170\" y2=\"25\"/><line x1=\"170\" y1=\"140\" x2=\"251\" y2=\"59\"/><line x1=\"170\" y1=\"140\" x2=\"285\" y2=\"140\"/><line x1=\"170\" y1=\"140\" x2=\"251\" y2=\"221\"/>\n<line x1=\"170\" y1=\"140\" x2=\"170\" y2=\"255\"/><line x1=\"170\" y1=\"140\" x2=\"89\" y2=\"221\"/><line x1=\"170\" y1=\"140\" x2=\"55\" y2=\"140\"/><line x1=\"170\" y1=\"140\" x2=\"89\" y2=\"59\"/>\n</g>\n<path d=\"M170,140 L170,25 A115,115 0 0,1 251,59 Z\" fill=\"#ef4444\" opacity=\"0.75\"/>\n<path d=\"M170,140 L251,59 A115,115 0 0,1 285,140 Z\" fill=\"#ef4444\" opacity=\"0.75\"/>\n<path d=\"M170,140 L285,140 A115,115 0 0,1 251,221 Z\" fill=\"#ef4444\" opacity=\"0.75\"/>\n<text x=\"330\" y=\"110\" font-size=\"30\" fill=\"#b91c1c\" font-weight=\"bold\">3 felii mâncate</text>\n<line x1=\"330\" y1=\"135\" x2=\"560\" y2=\"135\" stroke=\"#1f2937\" stroke-width=\"4\"/>\n<text x=\"330\" y=\"180\" font-size=\"30\" fill=\"#1f2937\" font-weight=\"bold\">8 felii în total</text>\n<text x=\"330\" y=\"240\" font-size=\"34\" fill=\"#1d4ed8\" font-weight=\"bold\">= 3/8</text>\n</svg>"
    },
    {
     "label": "🍫 Tableta de ciocolată",
     "html": "<p>O tabletă de ciocolată este deja împărțită în pătrățele egale: este perfectă pentru fracții!</p>\n<p>Această tabletă are <b>12 pătrățele</b>. Dacă dăruiești <b>4</b>, ai dăruit <b>4/12</b> din tabletă. Dar uită-te bine: 4 pătrățele sunt și <b>un rând din trei</b>, adică <b>1/3</b>. Deci <b>4/12 = 1/3</b>: sunt <b>fracții echivalente</b>, adică aceeași cantitate de ciocolată scrisă în moduri diferite.</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"40\" y=\"30\" width=\"320\" height=\"180\" rx=\"10\" fill=\"#78350f\"/>\n<g fill=\"#92400e\" stroke=\"#451a03\" stroke-width=\"3\">\n<rect x=\"50\" y=\"40\" width=\"70\" height=\"50\"/><rect x=\"128\" y=\"40\" width=\"70\" height=\"50\"/><rect x=\"206\" y=\"40\" width=\"70\" height=\"50\"/><rect x=\"284\" y=\"40\" width=\"70\" height=\"50\"/>\n<rect x=\"50\" y=\"98\" width=\"70\" height=\"50\"/><rect x=\"128\" y=\"98\" width=\"70\" height=\"50\"/><rect x=\"206\" y=\"98\" width=\"70\" height=\"50\"/><rect x=\"284\" y=\"98\" width=\"70\" height=\"50\"/>\n</g>\n<g fill=\"#fbbf24\" stroke=\"#451a03\" stroke-width=\"3\">\n<rect x=\"50\" y=\"156\" width=\"70\" height=\"50\"/><rect x=\"128\" y=\"156\" width=\"70\" height=\"50\"/><rect x=\"206\" y=\"156\" width=\"70\" height=\"50\"/><rect x=\"284\" y=\"156\" width=\"70\" height=\"50\"/>\n</g>\n<text x=\"390\" y=\"100\" font-size=\"28\" fill=\"#1f2937\">4/12 dăruite</text>\n<text x=\"390\" y=\"150\" font-size=\"28\" fill=\"#1f2937\">= 1 rând din 3</text>\n<text x=\"390\" y=\"200\" font-size=\"32\" fill=\"#b45309\" font-weight=\"bold\">= 1/3</text>\n</svg>"
    },
    {
     "label": "📏 Axa numerelor",
     "html": "<p>Fracțiile sunt <b>numere</b> și au locul lor pe axă, la fel ca 0, 1, 2…</p>\n<p>Împarte segmentul dintre 0 și 1 în <b>4 părți egale</b>: fiecare săritură valorează <b>1/4</b>. Cu 3 sărituri ajungi la <b>3/4</b>, cu 4 sărituri ajungi la <b>4/4 = 1</b>, iar dacă mai faci a 5-a săritură treci de 1: <b>5/4</b> este o fracție <b>supraunitară</b>, mai mare decât întregul.</p>",
     "svg": "<svg viewBox=\"0 0 600 200\" xmlns=\"http://www.w3.org/2000/svg\">\n<line x1=\"30\" y1=\"110\" x2=\"580\" y2=\"110\" stroke=\"#1f2937\" stroke-width=\"4\"/>\n<g stroke=\"#1f2937\" stroke-width=\"4\">\n<line x1=\"50\" y1=\"95\" x2=\"50\" y2=\"125\"/><line x1=\"160\" y1=\"100\" x2=\"160\" y2=\"120\"/><line x1=\"270\" y1=\"100\" x2=\"270\" y2=\"120\"/><line x1=\"380\" y1=\"100\" x2=\"380\" y2=\"120\"/>\n<line x1=\"490\" y1=\"95\" x2=\"490\" y2=\"125\"/>\n</g>\n<g fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\">\n<path d=\"M50,95 Q105,40 160,95\"/><path d=\"M160,95 Q215,40 270,95\"/><path d=\"M270,95 Q325,40 380,95\"/>\n</g>\n<text x=\"50\" y=\"155\" font-size=\"22\" text-anchor=\"middle\">0</text>\n<text x=\"160\" y=\"155\" font-size=\"22\" text-anchor=\"middle\">1/4</text>\n<text x=\"270\" y=\"155\" font-size=\"22\" text-anchor=\"middle\">2/4</text>\n<text x=\"380\" y=\"155\" font-size=\"22\" text-anchor=\"middle\" fill=\"#2563eb\" font-weight=\"bold\">3/4</text>\n<text x=\"490\" y=\"155\" font-size=\"22\" text-anchor=\"middle\">1 = 4/4</text>\n<text x=\"215\" y=\"45\" font-size=\"18\" fill=\"#2563eb\">3 sărituri de 1/4</text>\n</svg>"
    },
    {
     "label": "💶 Banii",
     "html": "<p>Cu euro folosești deja fracțiile fără să-ți dai seama! Un euro valorează <b>100 de cenți</b>.</p>\n<ul>\n<li><b>1/2</b> de euro = 100 : 2 = <b>50 de cenți</b> 🪙</li>\n<li><b>1/4</b> de euro = 100 : 4 = <b>25 de cenți</b></li>\n<li><b>3/4</b> de euro = 25 × 3 = <b>75 de cenți</b></li>\n<li><b>1/10</b> de euro = <b>10 cenți</b></li>\n<li><b>1/100</b> de euro = <b>1 cent</b>: de fapt „cent” înseamnă tocmai „una din cele o sută de părți”!</li>\n</ul>\n<p>Încearcă: dacă ai 20 € și cheltuiești 1/4 din bani, cât cheltuiești? 20 : 4 = <b>5 €</b>.</p>"
    },
    {
     "label": "🧊 Cu cuburi 3D",
     "html": "<p>Iată <b>12 cuburi</b> așezate în 3 rânduri a câte 4. Rotește modelul și încearcă să vezi fracțiile:</p>\n<ul>\n<li>un rând de 4 cuburi este <b>1/3</b> din toate cuburile (4 din 12);</li>\n<li>o coloană de 3 cuburi este <b>1/4</b> (3 din 12);</li>\n<li>6 cuburi sunt <b>jumătate</b>: 6/12 = 1/2.</li>\n</ul>\n<p>Schimbă numerele cu cursoarele și caută alte fracții!</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 3,
      "b": 4
     }
    },
    {
     "label": "𓂀 Ca vechii egipteni",
     "html": "<p>Vechii egipteni foloseau aproape numai fracții cu numărătorul 1 (ca 1/2, 1/3, 1/4…), pe care azi le numim <b>unități fracționare</b>. Pe celelalte le scriau ca sumă de fracții diferite:</p>\n<ul>\n<li>3/4 îl scriau <b>1/2 + 1/4</b></li>\n<li>2/5 îl scriau <b>1/3 + 1/15</b></li>\n</ul>\n<p>Pare ciudat, dar e foarte practic când chiar trebuie să împarți lucrurile! Exemplu: să împarți <b>3 pâini la 4 persoane</b>. Tai 2 pâini în jumătăți (4 jumătăți) și o pâine în sferturi (4 sferturi): fiecare primește <b>1/2 + 1/4</b> de pâine. Toți au bucăți egale!</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Harta fracțiilor: atinge un nod și descoperă de ce",
   "nodes": [
    {
     "id": "intero",
     "label": "Întregul",
     "x": 50,
     "y": 6,
     "color": "#2563eb",
     "html": "Lucrul întreg pe care vrem să-l împărțim: o pizza, un grup de obiecte, un număr, un euro…",
     "why": "O fracție are sens doar dacă știm care este întregul: 1/2 dintr-o pizza mică nu este egal cu 1/2 dintr-o pizza uriașă!"
    },
    {
     "id": "frazione",
     "label": "Fracția",
     "x": 50,
     "y": 30,
     "color": "#16a34a",
     "html": "Un număr care arată una sau mai multe părți egale ale unui întreg, scris cu două numere și o linie.",
     "why": "Cuvântul vine din latinescul <i>frangere</i>, care înseamnă „a rupe”: o fracție este un întreg „rupt” în părți egale. Fracțiile s-au născut dintr-o nevoie practică: împărțirea recoltelor, a terenurilor, a pâinii și a berii în părți drepte."
    },
    {
     "id": "denominatore",
     "label": "Numitorul",
     "x": 18,
     "y": 50,
     "color": "#f59e0b",
     "html": "Numărul de sub linie: în câte părți egale este împărțit întregul.",
     "why": "Se numește așa pentru că „dă numele” părților: numitor 4 → pătrimi, 10 → zecimi, 100 → sutimi. Cu cât numitorul este mai mare, cu atât părțile sunt mai mici."
    },
    {
     "id": "numeratore",
     "label": "Numărătorul",
     "x": 82,
     "y": 50,
     "color": "#ef4444",
     "html": "Numărul de deasupra liniei: câte părți luăm.",
     "why": "Vine de la „a număra”: numără părțile pe care le luăm."
    },
    {
     "id": "unita",
     "label": "Unitatea fracționară",
     "x": 18,
     "y": 76,
     "color": "#a855f7",
     "html": "Fracție cu numărătorul 1, ca 1/2, 1/5, 1/10.",
     "why": "Sunt cele mai vechi fracții: egiptenii, acum aproape 4000 de ani, le foloseau mai ales pe acestea. Papirusul Rhind (circa 1650 î.Hr.), o carte de exerciții a unui scrib numit Ahmes, conține tabele pentru a transforma celelalte fracții în sume de unități fracționare."
    },
    {
     "id": "tipi",
     "label": "Subunitare, supraunitare, echiunitare",
     "x": 50,
     "y": 62,
     "color": "#0ea5e9",
     "html": "Subunitară: mai mică decât întregul (3/4). Supraunitară: mai mare (5/4). Cu valoare întreagă: este un număr întreg (8/4 = 2).",
     "why": "E de ajuns să compari numărătorul cu numitorul: dacă iei mai puține părți decât cele în care ai împărțit întregul, nu ajungi la întreg; dacă iei mai multe, îți trebuie un al doilea întreg."
    },
    {
     "id": "equivalenti",
     "label": "Fracții echivalente",
     "x": 82,
     "y": 76,
     "color": "#14b8a6",
     "html": "Fracții diferite care arată aceeași cantitate: 1/2 = 2/4 = 4/8.",
     "why": "Dacă tai fiecare parte în două, se dublează și toate părțile, și cele pe care le iei: cantitatea nu se schimbă. De aceea poți înmulți (sau împărți) numărătorul și numitorul cu același număr."
    },
    {
     "id": "storia",
     "label": "Linia de fracție",
     "x": 50,
     "y": 92,
     "color": "#64748b",
     "html": "Modul de a scrie fracțiile cu un număr sus și unul jos, despărțite de o linie.",
     "why": "Babilonienii scriau părțile în baza 60 (cum facem încă la minute și secunde). Linia de fracție a fost folosită de matematicienii arabi în Evul Mediu și a ajuns în Europa datorită lui <b>Leonardo Fibonacci</b> din Pisa, care a folosit-o în <i>Liber Abaci</i> din 1202."
    }
   ],
   "edges": [
    [
     "intero",
     "frazione",
     "se împarte în părți egale →"
    ],
    [
     "frazione",
     "denominatore",
     "sub linie"
    ],
    [
     "frazione",
     "numeratore",
     "deasupra liniei"
    ],
    [
     "frazione",
     "tipi",
     "poate fi"
    ],
    [
     "denominatore",
     "unita",
     "cu numărătorul 1"
    ],
    [
     "numeratore",
     "equivalenti",
     "× același număr"
    ],
    [
     "denominatore",
     "equivalenti",
     "× același număr"
    ],
    [
     "frazione",
     "storia",
     "se scrie cu"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-test: tipuri de fracții și calcule",
   "questions": [
    {
     "type": "mc",
     "q": "7/4 este o fracție…",
     "options": [
      "subunitară",
      "supraunitară",
      "cu valoare întreagă"
     ],
     "answer": 1,
     "explain": "Numărătorul (7) este mai mare decât numitorul (4), dar nu este multiplul lui: supraunitară."
    },
    {
     "type": "num",
     "q": "Cât este 1/5 din 35?",
     "answer": 7,
     "explain": "35 : 5 = 7."
    },
    {
     "type": "mc",
     "q": "Care fracție este echivalentă cu 2/3?",
     "options": [
      "4/6",
      "3/2",
      "2/6"
     ],
     "answer": 0,
     "explain": "Înmulțind cu 2 numărătorul și numitorul: 4/6."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Fracție",
   "d": "Una sau mai multe părți egale ale unui întreg."
  },
  {
   "t": "Numărător",
   "d": "Numărul de deasupra liniei: câte părți se iau."
  },
  {
   "t": "Numitor",
   "d": "Numărul de sub linie: în câte părți egale se împarte întregul."
  },
  {
   "t": "Unitate fracționară",
   "d": "O singură parte a întregului, cu numărătorul 1 (ex. 1/4)."
  },
  {
   "t": "Fracție subunitară",
   "d": "Mai mică decât un întreg: numărătorul mai mic decât numitorul."
  },
  {
   "t": "Fracție supraunitară",
   "d": "Mai mare decât un întreg: numărătorul mai mare decât numitorul."
  },
  {
   "t": "Fracție cu valoare întreagă",
   "d": "Egală cu unul sau mai mulți întregi: numărătorul multiplu al numitorului."
  },
  {
   "t": "Fracții echivalente",
   "d": "Fracții diferite care arată aceeași cantitate."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "O pizza este împărțită în 6 părți egale și mănânci 1. Ce fracție ai mâncat?",
    "options": [
     "6/1",
     "1/6",
     "5/6"
    ],
    "answer": 1,
    "explain": "1 parte din 6: 1/6."
   },
   {
    "type": "mc",
    "q": "Care fracție are valoare întreagă?",
    "options": [
     "3/4",
     "9/3",
     "5/3"
    ],
    "answer": 1,
    "explain": "9/3 = 3 întregi."
   },
   {
    "type": "tf",
    "q": "1/3 este mai mare decât 1/6.",
    "answer": true,
    "explain": "Același numărător: treimile sunt mai mari decât șesimile."
   },
   {
    "type": "num",
    "q": "Cât este 3/4 din 40?",
    "answer": 30,
    "explain": "40 : 4 = 10; 10 × 3 = 30."
   },
   {
    "type": "mc",
    "q": "Care fracție este mai mare?",
    "options": [
     "2/7",
     "5/7",
     "3/7"
    ],
    "answer": 1,
    "explain": "Același numitor: câștigă numărătorul mai mare."
   },
   {
    "type": "text",
    "q": "Cum se numește numărul care stă sub linia de fracție?",
    "answer": [
     "numitor",
     "numitorul"
    ],
    "explain": "Numitorul."
   },
   {
    "type": "tf",
    "q": "4/8 și 1/2 sunt fracții echivalente.",
    "answer": true,
    "explain": "Împărțind 4/8 la 4 se obține 1/2."
   },
   {
    "type": "num",
    "q": "Câte cincimi formează un întreg?",
    "answer": 5,
    "explain": "5/5 = 1."
   },
   {
    "type": "order",
    "q": "Ordonează de la cea mai mică la cea mai mare.",
    "items": [
     "1/8",
     "1/4",
     "1/2",
     "3/2"
    ],
    "explain": "Cu cât numitorul este mai mare, cu atât părțile sunt mai mici; 3/2 este mai mult de un întreg."
   },
   {
    "type": "num",
    "q": "Sara are 18 bomboane și mănâncă 2/9 din ele. Câte mănâncă?",
    "answer": 4,
    "explain": "18 : 9 = 2; 2 × 2 = 4."
   }
  ],
  "gen": [
   [
    "fracOf",
    2
   ],
   [
    "fracEquiv",
    2
   ]
  ]
 }
});
