TOPIC('ro', {
 "id": "m1-mat-numeri-primi-mcd-mcm",
 "title": "Numere prime, c.m.m.d.c. și c.m.m.m.c.",
 "intro": "Numerele prime sunt „cărămizile” din care se construiesc toate celelalte numere naturale. Învățăm să le recunoaștem, să descompunem numerele în factori și să le folosim ca să calculăm <b>cel mai mare divizor comun</b> și <b>cel mai mic multiplu comun</b>.",
 "minutes": 40,
 "sections": [
  {
   "type": "text",
   "title": "Multipli și divizori",
   "html": "<p>Pornim de la două cuvinte-cheie:</p>\n<ul>\n<li>un <b>multiplu</b> al unui număr se obține înmulțindu-l cu 0, 1, 2, 3…<br>Multiplii lui 6: 0, 6, 12, 18, 24, 30… (sunt o infinitate!)</li>\n<li>un <b>divizor</b> al unui număr este un număr care îl împarte <b>fără rest</b>.<br>Divizorii lui 12: 1, 2, 3, 4, 6, 12 (sunt un număr finit).</li>\n</ul>\n<p>Cele două merg împreună: dacă 12 este <b>multiplu</b> al lui 3, atunci 3 este <b>divizor</b> al lui 12. Se mai spune că 12 este <b>divizibil</b> cu 3.</p>\n<p>Ține minte: <b>1</b> este divizor al tuturor numerelor, iar orice număr este divizor al lui însuși.</p>"
  },
  {
   "type": "remember",
   "title": "Criteriile de divizibilitate",
   "html": "<p>Ca să afli dacă un număr este divizibil fără să faci împărțirea:</p>\n<table>\n<tr><th>Cu</th><th>Regula</th><th>Exemplu</th></tr>\n<tr><td><b>2</b></td><td>ultima cifră este pară (0, 2, 4, 6, 8)</td><td>374 ✔️</td></tr>\n<tr><td><b>3</b></td><td>suma cifrelor este divizibilă cu 3</td><td>411 → 4+1+1 = 6 ✔️</td></tr>\n<tr><td><b>4</b></td><td>ultimele două cifre formează un număr divizibil cu 4 (sau sunt 00)</td><td>1.316 → 16 ✔️</td></tr>\n<tr><td><b>5</b></td><td>ultima cifră este 0 sau 5</td><td>845 ✔️</td></tr>\n<tr><td><b>9</b></td><td>suma cifrelor este divizibilă cu 9</td><td>738 → 7+3+8 = 18 ✔️</td></tr>\n<tr><td><b>10, 100…</b></td><td>se termină cu unul, două… zerouri</td><td>4.500 ✔️</td></tr>\n<tr><td><b>11</b></td><td>diferența dintre suma cifrelor de pe locurile impare și suma celor de pe locurile pare este 0 sau multiplu de 11</td><td>693 → (6+3) − 9 = 0 ✔️</td></tr>\n</table>"
  },
  {
   "type": "text",
   "title": "Numere prime și numere compuse",
   "html": "<p>Un număr natural mai mare decât 1 se numește:</p>\n<ul>\n<li><b>prim</b> dacă are <b>doar doi divizori</b>: 1 și el însuși. Exemple: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29…</li>\n<li><b>compus</b> dacă are <b>mai mult de doi divizori</b>. Exemple: 4 (1, 2, 4), 9 (1, 3, 9), 12 (1, 2, 3, 4, 6, 12).</li>\n</ul>\n<p>Numărul <b>1</b> nu este nici prim, nici compus: are un singur divizor.</p>\n<p><b>2</b> este singurul număr prim par: toate celelalte numere pare sunt divizibile cu 2, deci sunt compuse.</p>\n<p>Numerele prime mai mici decât 50 sunt: <b>2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47</b>.</p>"
  },
  {
   "type": "example",
   "title": "Exemplu practic: ciurul lui Eratostene",
   "html": "<p>Acum mai bine de 2.200 de ani matematicianul grec <b>Eratostene</b> a inventat o metodă de a găsi numerele prime, ca o sită (ciur):</p>\n<ol>\n<li>Scrie numerele de la 2 la 100.</li>\n<li>2 este prim: încercuiește-l și taie toți multiplii lui (4, 6, 8…).</li>\n<li>Primul număr netăiat este 3: încercuiește-l și taie multiplii lui (6, 9, 12…).</li>\n<li>Apoi 5, apoi 7… Repetă cât poți.</li>\n<li>Numerele rămase (încercuite) sunt toate numerele prime până la 100: sunt <b>25</b>.</li>\n</ol>\n<p>Ca să ajungi până la 100 e suficient să tai multiplii lui 2, 3, 5 și 7, pentru că 11 × 11 = 121 este deja mai mare decât 100.</p>"
  },
  {
   "type": "widget",
   "title": "Prim sau compus?",
   "widget": "classify",
   "options": {
    "groups": [
     "Număr prim",
     "Număr compus"
    ],
    "items": [
     [
      "2",
      0
     ],
     [
      "9",
      1
     ],
     [
      "13",
      0
     ],
     [
      "21",
      1
     ],
     [
      "29",
      0
     ],
     [
      "33",
      1
     ],
     [
      "37",
      0
     ],
     [
      "49",
      1
     ],
     [
      "51",
      1
     ],
     [
      "53",
      0
     ],
     [
      "57",
      1
     ],
     [
      "61",
      0
     ]
    ]
   },
   "caption": "Atenție la capcane: 51 = 3 × 17 și 57 = 3 × 19 (folosește criteriul lui 3!)."
  },
  {
   "type": "text",
   "title": "Descompunerea în factori primi",
   "html": "<p><b>Teorema fundamentală a aritmeticii</b> spune că orice număr compus se poate scrie într-un singur mod ca <b>produs de numere prime</b> (în afară de ordine).</p>\n<p>Ca să descompui un număr, îl împarți la numere prime, începând cu cel mai mic, până ajungi la 1. Se folosește un tabel cu două coloane:</p>\n<table>\n<tr><td>180</td><td>2</td></tr>\n<tr><td>90</td><td>2</td></tr>\n<tr><td>45</td><td>3</td></tr>\n<tr><td>15</td><td>3</td></tr>\n<tr><td>5</td><td>5</td></tr>\n<tr><td>1</td><td></td></tr>\n</table>\n<p>Deci <b>180 = 2 × 2 × 3 × 3 × 5 = 2² × 3² × 5</b>.</p>\n<p>Se poate folosi și <b>arborele factorilor</b>: rupi numărul în doi factori oarecare și continui până când toate „frunzele” sunt numere prime.</p>"
  },
  {
   "type": "svg",
   "title": "Arborele factorilor lui 180",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#ffffff\"/>\n<g stroke=\"#64748b\" stroke-width=\"3\">\n<line x1=\"300\" y1=\"45\" x2=\"200\" y2=\"105\"/><line x1=\"300\" y1=\"45\" x2=\"400\" y2=\"105\"/>\n<line x1=\"200\" y1=\"125\" x2=\"140\" y2=\"185\"/><line x1=\"200\" y1=\"125\" x2=\"260\" y2=\"185\"/>\n<line x1=\"400\" y1=\"125\" x2=\"350\" y2=\"185\"/><line x1=\"400\" y1=\"125\" x2=\"450\" y2=\"185\"/>\n<line x1=\"450\" y1=\"205\" x2=\"410\" y2=\"255\"/><line x1=\"450\" y1=\"205\" x2=\"490\" y2=\"255\"/>\n</g>\n<g font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\">\n<circle cx=\"300\" cy=\"35\" r=\"26\" fill=\"#e0e7ff\" stroke=\"#4338ca\" stroke-width=\"2\"/><text x=\"300\" y=\"42\" fill=\"#312e81\">180</text>\n<circle cx=\"200\" cy=\"115\" r=\"22\" fill=\"#e0e7ff\" stroke=\"#4338ca\" stroke-width=\"2\"/><text x=\"200\" y=\"122\" fill=\"#312e81\">10</text>\n<circle cx=\"400\" cy=\"115\" r=\"22\" fill=\"#e0e7ff\" stroke=\"#4338ca\" stroke-width=\"2\"/><text x=\"400\" y=\"122\" fill=\"#312e81\">18</text>\n<circle cx=\"140\" cy=\"195\" r=\"22\" fill=\"#fde047\" stroke=\"#a16207\" stroke-width=\"3\"/><text x=\"140\" y=\"202\" fill=\"#713f12\">2</text>\n<circle cx=\"260\" cy=\"195\" r=\"22\" fill=\"#fde047\" stroke=\"#a16207\" stroke-width=\"3\"/><text x=\"260\" y=\"202\" fill=\"#713f12\">5</text>\n<circle cx=\"350\" cy=\"195\" r=\"22\" fill=\"#fde047\" stroke=\"#a16207\" stroke-width=\"3\"/><text x=\"350\" y=\"202\" fill=\"#713f12\">2</text>\n<circle cx=\"450\" cy=\"195\" r=\"22\" fill=\"#e0e7ff\" stroke=\"#4338ca\" stroke-width=\"2\"/><text x=\"450\" y=\"202\" fill=\"#312e81\">9</text>\n<circle cx=\"410\" cy=\"265\" r=\"22\" fill=\"#fde047\" stroke=\"#a16207\" stroke-width=\"3\"/><text x=\"410\" y=\"272\" fill=\"#713f12\">3</text>\n<circle cx=\"490\" cy=\"265\" r=\"22\" fill=\"#fde047\" stroke=\"#a16207\" stroke-width=\"3\"/><text x=\"490\" y=\"272\" fill=\"#713f12\">3</text>\n</g>\n<text x=\"20\" y=\"275\" font-size=\"18\" fill=\"#111\">180 = 2² × 3² × 5</text>\n<text x=\"20\" y=\"250\" font-size=\"14\" fill=\"#a16207\">cu galben: factorii primi</text>\n</svg>",
   "caption": "Se poate începe în moduri diferite (de exemplu 180 = 12 × 15), dar la final factorii primi sunt mereu aceiași!"
  },
  {
   "type": "quiz",
   "title": "Mini-test: numere prime și descompunere",
   "questions": [
    {
     "type": "tf",
     "q": "Numărul 1 este un număr prim.",
     "answer": false,
     "explain": "1 are un singur divizor: nu este nici prim, nici compus."
    },
    {
     "type": "mc",
     "q": "Care dintre aceste numere este prim?",
     "options": [
      "27",
      "39",
      "41",
      "45"
     ],
     "answer": 2,
     "explain": "41 are doar divizorii 1 și 41. 27 = 3³, 39 = 3 × 13, 45 = 3² × 5."
    },
    {
     "type": "mc",
     "q": "Care este descompunerea lui 72?",
     "options": [
      "2³ × 3²",
      "2² × 3³",
      "2 × 36",
      "8 × 9"
     ],
     "answer": 0,
     "explain": "72 = 8 × 9 = 2³ × 3². 8 și 9 nu sunt prime!"
    },
    {
     "type": "tf",
     "q": "462 este divizibil cu 3.",
     "answer": true,
     "explain": "4 + 6 + 2 = 12, care este divizibil cu 3."
    }
   ]
  },
  {
   "type": "text",
   "title": "Cel mai mare divizor comun (c.m.m.d.c.)",
   "html": "<p><b>C.m.m.d.c.</b> a două sau mai multe numere este <b>cel mai mare</b> dintre <b>divizorii lor comuni</b>.</p>\n<p><b>Metoda 1 – lista divizorilor</b>: c.m.m.d.c.(12, 18)?<br>Divizorii lui 12: 1, 2, <b>3</b>, 4, <b>6</b>, 12 – Divizorii lui 18: 1, 2, 3, 6, 9, 18.<br>Comuni: 1, 2, 3, 6 → <b>c.m.m.d.c. = 6</b>.</p>\n<p><b>Metoda 2 – descompunerea</b> (mai rapidă cu numere mari):</p>\n<ol>\n<li>Descompune numerele în factori primi.</li>\n<li>Ia doar factorii <b>comuni</b>, cu exponentul <b>cel mai mic</b>.</li>\n<li>Înmulțește-i.</li>\n</ol>\n<p>c.m.m.d.c.(60, 84): 60 = 2² × 3 × 5; 84 = 2² × 3 × 7. Comuni: 2² și 3 → c.m.m.d.c. = 4 × 3 = <b>12</b>.</p>\n<p>Dacă c.m.m.d.c. este 1, numerele se numesc <b>prime între ele</b> (de ex. 8 și 15).</p>"
  },
  {
   "type": "text",
   "title": "Cel mai mic multiplu comun (c.m.m.m.c.)",
   "html": "<p><b>C.m.m.m.c.</b> a două sau mai multe numere este <b>cel mai mic</b> dintre <b>multiplii lor comuni</b> (diferit de 0).</p>\n<p><b>Metoda 1 – lista multiplilor</b>: c.m.m.m.c.(4, 6)?<br>Multiplii lui 4: 4, 8, <b>12</b>, 16, 20, 24… – Multiplii lui 6: 6, <b>12</b>, 18, 24…<br>→ <b>c.m.m.m.c. = 12</b>.</p>\n<p><b>Metoda 2 – descompunerea</b>:</p>\n<ol>\n<li>Descompune numerele în factori primi.</li>\n<li>Ia factorii <b>comuni și necomuni</b>, fiecare o singură dată, cu exponentul <b>cel mai mare</b>.</li>\n<li>Înmulțește-i.</li>\n</ol>\n<p>c.m.m.m.c.(60, 84): 60 = 2² × 3 × 5; 84 = 2² × 3 × 7 → 2² × 3 × 5 × 7 = <b>420</b>.</p>\n<p>Truc de verificare pentru două numere: <b>c.m.m.d.c. × c.m.m.m.c. = produsul celor două numere</b>. Într-adevăr 12 × 420 = 5.040 = 60 × 84 ✔️</p>"
  },
  {
   "type": "example",
   "title": "Exemplu practic (c.m.m.d.c.): pungile cu bomboane",
   "html": "<p>Ai <b>24 de bomboane de căpșuni</b> și <b>36 de lămâie</b>. Vrei să pregătești pungi toate la fel, folosind toate bomboanele, cât mai <b>multe posibil</b>. Câte pungi?</p>\n<p>Numărul de pungi trebuie să-l împartă și pe 24, și pe 36 și să fie cât mai mare: este <b>c.m.m.d.c.</b></p>\n<p>24 = 2³ × 3; 36 = 2² × 3² → c.m.m.d.c. = 2² × 3 = <b>12 pungi</b>.</p>\n<p>În fiecare pungă: 24 : 12 = <b>2 de căpșuni</b> și 36 : 12 = <b>3 de lămâie</b>.</p>\n<p>Cuvinte-indiciu pentru c.m.m.d.c.: „cel mai mare”, „a împărți în părți egale”, „fără să rămână nimic”.</p>"
  },
  {
   "type": "example",
   "title": "Exemplu practic (c.m.m.m.c.): autobuzele",
   "html": "<p>În stație, autobuzul <b>A</b> trece la fiecare <b>12 minute</b>, iar autobuzul <b>B</b> la fiecare <b>18 minute</b>. La ora 8:00 pleacă împreună. Când vor pleca din nou împreună?</p>\n<p>Căutăm primul timp care este multiplu și al lui 12, și al lui 18: este <b>c.m.m.m.c.</b></p>\n<p>12 = 2² × 3; 18 = 2 × 3² → c.m.m.m.c. = 2² × 3² = <b>36 de minute</b>.</p>\n<p>Vor pleca din nou împreună la ora <b>8:36</b>.</p>\n<p>Cuvinte-indiciu pentru c.m.m.m.c.: „din nou împreună”, „în același timp”, „cel mai mic”, evenimente care se repetă.</p>"
  },
  {
   "type": "curiosity",
   "title": "Cicadele matematice",
   "html": "<p>În America de Nord trăiesc cicade care stau sub pământ <b>13 sau 17 ani</b> și apoi ies toate deodată, cu miliardele! 13 și 17 sunt numere prime.</p>\n<p>Oamenii de știință cred că este un „truc” împotriva prădătorilor: dacă un prădător are un ciclu de viață de 2, 3, 4 sau 6 ani, cu un ciclu prim cicadele îl întâlnesc mai rar. De exemplu, c.m.m.m.c. dintre 17 și 6 este 102: o întâlnire la fiecare 102 ani!</p>"
  },
  {
   "type": "curiosity",
   "title": "Numerele prime îți apără secretele",
   "html": "<p>Euclid a demonstrat, acum mai bine de 2.300 de ani, că numerele prime sunt <b>infinit de multe</b>.</p>\n<p>Astăzi numerele prime uriașe (cu sute de cifre) servesc în <b>criptografie</b>: protejează mesajele din chat, parolele și plățile online. Să înmulțești două numere prime enorme e ușor pentru un calculator, dar să te întorci și să descoperi care erau este foarte, foarte greu!</p>\n<p>Cel mai mare număr prim cunoscut are peste <b>41 de milioane de cifre</b>.</p>"
  },
  {
   "type": "alternatives",
   "title": "Alte moduri de a înțelege numerele prime, c.m.m.d.c. și c.m.m.m.c.",
   "intro": "Sunt multe drumuri care duc la același rezultat. În lume elevii folosesc metode diferite: alege-o pe cea care ți se potrivește.",
   "tabs": [
    {
     "label": "🧊 Dreptunghiuri din cuburi (3D)",
     "html": "<p>Ia 12 cuburi: le poți așeza în dreptunghiuri diferite: 1 × 12, 2 × 6, 3 × 4. Laturile dreptunghiurilor sunt tocmai <b>divizorii</b> lui 12.</p><p>Acum încearcă cu 7 cuburi: singurul dreptunghi posibil este un rând 1 × 7. Un număr este <b>prim</b> când se poate face <b>doar rândul</b>! Schimbă numerele cu cursoarele și caută numerele „doar-rând”.</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 3,
      "b": 4
     }
    },
    {
     "label": "🕸️ Ciurul lui Eratostene",
     "html": "<p>Eratostene (sec. al III-lea î.Hr.) a inventat o „sită”: scrii numerele, tai 1, apoi încercuiești 2 și tai toți multiplii lui; încercuiești primul număr netăiat (3) și tai multiplii lui; apoi 5, 7… Cele care rămân sunt numerele prime. Iată rezultatul până la 30: cele <b>verzi</b> sunt prime.</p>",
     "svg": "<svg viewBox=\"0 0 600 200\" xmlns=\"http://www.w3.org/2000/svg\"><g font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\"><rect x=\"10\" y=\"10\" width=\"54\" height=\"54\" fill=\"#e5e7eb\"/><text x=\"37\" y=\"44\" fill=\"#9ca3af\">1</text><rect x=\"68\" y=\"10\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"95\" y=\"44\" fill=\"#14532d\">2</text><rect x=\"126\" y=\"10\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"153\" y=\"44\" fill=\"#14532d\">3</text><rect x=\"184\" y=\"10\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"211\" y=\"44\" fill=\"#991b1b\">4</text><rect x=\"242\" y=\"10\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"269\" y=\"44\" fill=\"#14532d\">5</text><rect x=\"300\" y=\"10\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"327\" y=\"44\" fill=\"#991b1b\">6</text><rect x=\"358\" y=\"10\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"385\" y=\"44\" fill=\"#14532d\">7</text><rect x=\"416\" y=\"10\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"443\" y=\"44\" fill=\"#991b1b\">8</text><rect x=\"474\" y=\"10\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"501\" y=\"44\" fill=\"#991b1b\">9</text><rect x=\"532\" y=\"10\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"559\" y=\"44\" fill=\"#991b1b\">10</text><rect x=\"10\" y=\"70\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"37\" y=\"104\" fill=\"#14532d\">11</text><rect x=\"68\" y=\"70\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"95\" y=\"104\" fill=\"#991b1b\">12</text><rect x=\"126\" y=\"70\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"153\" y=\"104\" fill=\"#14532d\">13</text><rect x=\"184\" y=\"70\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"211\" y=\"104\" fill=\"#991b1b\">14</text><rect x=\"242\" y=\"70\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"269\" y=\"104\" fill=\"#991b1b\">15</text><rect x=\"300\" y=\"70\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"327\" y=\"104\" fill=\"#991b1b\">16</text><rect x=\"358\" y=\"70\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"385\" y=\"104\" fill=\"#14532d\">17</text><rect x=\"416\" y=\"70\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"443\" y=\"104\" fill=\"#991b1b\">18</text><rect x=\"474\" y=\"70\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"501\" y=\"104\" fill=\"#14532d\">19</text><rect x=\"532\" y=\"70\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"559\" y=\"104\" fill=\"#991b1b\">20</text><rect x=\"10\" y=\"130\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"37\" y=\"164\" fill=\"#991b1b\">21</text><rect x=\"68\" y=\"130\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"95\" y=\"164\" fill=\"#991b1b\">22</text><rect x=\"126\" y=\"130\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"153\" y=\"164\" fill=\"#14532d\">23</text><rect x=\"184\" y=\"130\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"211\" y=\"164\" fill=\"#991b1b\">24</text><rect x=\"242\" y=\"130\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"269\" y=\"164\" fill=\"#991b1b\">25</text><rect x=\"300\" y=\"130\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"327\" y=\"164\" fill=\"#991b1b\">26</text><rect x=\"358\" y=\"130\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"385\" y=\"164\" fill=\"#991b1b\">27</text><rect x=\"416\" y=\"130\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"443\" y=\"164\" fill=\"#991b1b\">28</text><rect x=\"474\" y=\"130\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"501\" y=\"164\" fill=\"#14532d\">29</text><rect x=\"532\" y=\"130\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"559\" y=\"164\" fill=\"#991b1b\">30</text></g></svg>"
    },
    {
     "label": "🪜 Metoda pe coloană",
     "html": "<p>În multe țări (inclusiv România, Franța, Rusia, Spania…) se descompune pe coloană: tragi o linie verticală, în dreapta scrii <b>cel mai mic număr prim</b> care împarte, în stânga rezultatul, și continui până ajungi la 1.</p><p>Citind coloana din dreapta: 360 = 2 × 2 × 2 × 3 × 3 × 5 = <b>2³ × 3² × 5</b>. Este același lucru ca arborele factorilor, doar desenat vertical: mulți îl găsesc mai ordonat.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"300\" y1=\"15\" x2=\"300\" y2=\"285\" stroke=\"#1e293b\" stroke-width=\"4\"/><g font-size=\"26\" font-weight=\"bold\"><text x=\"280\" y=\"45\" text-anchor=\"end\" fill=\"#1e3a8a\">360</text><text x=\"320\" y=\"45\" fill=\"#dc2626\">2</text><text x=\"280\" y=\"85\" text-anchor=\"end\" fill=\"#1e3a8a\">180</text><text x=\"320\" y=\"85\" fill=\"#dc2626\">2</text><text x=\"280\" y=\"125\" text-anchor=\"end\" fill=\"#1e3a8a\">90</text><text x=\"320\" y=\"125\" fill=\"#dc2626\">2</text><text x=\"280\" y=\"165\" text-anchor=\"end\" fill=\"#1e3a8a\">45</text><text x=\"320\" y=\"165\" fill=\"#16a34a\">3</text><text x=\"280\" y=\"205\" text-anchor=\"end\" fill=\"#1e3a8a\">15</text><text x=\"320\" y=\"205\" fill=\"#16a34a\">3</text><text x=\"280\" y=\"245\" text-anchor=\"end\" fill=\"#1e3a8a\">5</text><text x=\"320\" y=\"245\" fill=\"#9333ea\">5</text><text x=\"280\" y=\"285\" text-anchor=\"end\" fill=\"#1e3a8a\">1</text></g><text x=\"460\" y=\"150\" font-size=\"24\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\">360 = 2³ × 3² × 5</text></svg>"
    },
    {
     "label": "🎂 „Tortul”: c.m.m.d.c. și c.m.m.m.c. împreună",
     "html": "<p>Metodă folosită în Statele Unite și în Asia (se numește „ladder” sau „cake method”). Scrie cele două numere unul lângă altul și împarte-le pe <b>amândouă</b> la un număr prim care le divide pe amândouă, până nu mai există niciunul:</p><table><tr><td>2</td><td>24</td><td>36</td></tr><tr><td>2</td><td>12</td><td>18</td></tr><tr><td>3</td><td>6</td><td>9</td></tr><tr><td></td><td><b>2</b></td><td><b>3</b></td></tr></table><ul><li><b>c.m.m.d.c.</b> = produsul numerelor din stânga = 2 × 2 × 3 = <b>12</b></li><li><b>c.m.m.m.c.</b> = numerele din stânga × numerele rămase jos = 2 × 2 × 3 × 2 × 3 = <b>72</b></li></ul><p>Verificare: c.m.m.d.c. × c.m.m.m.c. = 12 × 72 = 864 = 24 × 36. Funcționează mereu cu două numere!</p>"
    },
    {
     "label": "🔁 Algoritmul lui Euclid",
     "html": "<p>Euclid (cca 300 î.Hr.) a găsit o cale foarte rapidă pentru c.m.m.d.c., <b>fără descompunere</b>: împarți numărul mai mare la cel mai mic și păstrezi restul; apoi împarți împărțitorul la rest… până când restul este 0.</p><p><b>c.m.m.d.c.(84, 36)</b>:</p><ul><li>84 : 36 = 2 rest <b>12</b></li><li>36 : 12 = 3 rest <b>0</b> → c.m.m.d.c. = <b>12</b></li></ul><p><b>De ce funcționează?</b> Orice număr care îi divide pe 84 și 36 divide și 84 − 36 − 36 = 12. Deci divizorii comuni nu se schimbă, în timp ce numerele devin tot mai mici. Este unul dintre cei mai vechi algoritmi din istorie: îl folosesc și azi calculatoarele!</p>"
    },
    {
     "label": "🚦 O poveste pentru c.m.m.m.c.",
     "html": "<p>Două faruri clipesc împreună la miezul nopții: primul la fiecare 6 secunde, al doilea la fiecare 8 secunde. Când vor clipi din nou împreună?</p><ul><li>Farul A: 6, 12, 18, <b>24</b>, 30…</li><li>Farul B: 8, 16, <b>24</b>, 32…</li></ul><p>După <b>24 de secunde</b> = c.m.m.m.c.(6, 8). C.m.m.m.c. răspunde mereu la întrebarea „<i>când se întâlnesc din nou?</i>”. C.m.m.d.c. răspunde în schimb la „<i>în câte grupe egale pot împărți totul fără să rămână nimic?</i>”.</p>"
    }
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-test: c.m.m.d.c. și c.m.m.m.c.",
   "questions": [
    {
     "type": "num",
     "q": "c.m.m.d.c.(18, 24) = ?",
     "answer": 6,
     "tol": 0,
     "explain": "18 = 2 × 3², 24 = 2³ × 3 → factorii comuni cu exponentul cel mai mic: 2 × 3 = 6."
    },
    {
     "type": "num",
     "q": "c.m.m.m.c.(6, 8) = ?",
     "answer": 24,
     "tol": 0,
     "explain": "6 = 2 × 3, 8 = 2³ → 2³ × 3 = 24."
    },
    {
     "type": "mc",
     "q": "Doi prieteni merg la piscină, unul la fiecare 4 zile și celălalt la fiecare 6. Azi au fost împreună. Ce trebuie să calculezi ca să afli când se vor revedea?",
     "options": [
      "C.m.m.d.c.",
      "C.m.m.m.c.",
      "Suma",
      "Diferența"
     ],
     "answer": 1,
     "explain": "Evenimente care se repetă și se întâlnesc din nou: e nevoie de c.m.m.m.c. (12 zile)."
    },
    {
     "type": "tf",
     "q": "8 și 15 sunt prime între ele.",
     "answer": true,
     "explain": "8 = 2³ și 15 = 3 × 5 nu au factori comuni: c.m.m.d.c. = 1."
    }
   ]
  },
  {
   "type": "3d",
   "title": "Divizorii lui 24 în 3D",
   "scene": "blocks",
   "options": {
    "mode": "array",
    "a": 4,
    "b": 6
   },
   "caption": "24 de cuburi pot forma dreptunghiurile 1 × 24, 2 × 12, 3 × 8 și 4 × 6: divizorii lui 24 sunt 1, 2, 3, 4, 6, 8, 12, 24. Încearcă să alegi 23: se poate face doar rândul. 23 este prim!"
  },
  {
   "type": "conceptMap",
   "title": "Hartă: de ce sunt numerele prime atât de importante",
   "nodes": [
    {
     "id": "naturali",
     "label": "Numere naturale",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "0, 1, 2, 3, 4… numerele cu care numărăm.",
     "why": "S-au născut din nevoia de a număra obiecte: oi, zile, monede. Sunt punctul de pornire al întregii aritmetici."
    },
    {
     "id": "divisibilita",
     "label": "Multipli și divizori",
     "x": 50,
     "y": 22,
     "color": "#3b82f6",
     "html": "a este divizor al lui b dacă b : a nu dă rest; atunci b este multiplu al lui a.",
     "why": "Vine din problema practică de a împărți lucruri în părți egale fără să rămână nimic: de aceea împărțirea cu rest este baza a tot."
    },
    {
     "id": "criteri",
     "label": "Criterii de divizibilitate",
     "x": 15,
     "y": 36,
     "color": "#0ea5e9",
     "html": "Scurtături: pentru 2 ultima cifră pară, pentru 3 suma cifrelor divizibilă cu 3, pentru 5 ultima cifră 0 sau 5…",
     "why": "Funcționează pentru că scriem numerele în baza 10: de exemplu 10, 100, 1000… împărțite la 3 dau mereu restul 1, deci contează doar suma cifrelor."
    },
    {
     "id": "primi",
     "label": "Numere prime",
     "x": 50,
     "y": 40,
     "color": "#16a34a",
     "html": "Numere mai mari decât 1 cu doar doi divizori: 1 și ele însele.",
     "why": "Euclid le-a definit în Elemente (cca 300 î.Hr.). Sunt „atomii” numerelor: nu pot fi rupte în produse de numere mai mici."
    },
    {
     "id": "infiniti",
     "label": "Numerele prime sunt infinit de multe",
     "x": 85,
     "y": 36,
     "color": "#22c55e",
     "html": "Nu există un număr prim mai mare decât toate celelalte.",
     "why": "Demonstrația lui Euclid: presupune că ai toate numerele prime. Înmulțește-le și adaugă 1. Noul număr, împărțit la fiecare dintre acele numere prime, dă restul 1: deci ori este el însuși prim, ori are un divizor prim care lipsea din listă. Contradicție! Numerele prime nu se termină niciodată."
    },
    {
     "id": "tfa",
     "label": "Teorema fundamentală a aritmeticii",
     "x": 50,
     "y": 60,
     "color": "#f59e0b",
     "html": "Orice număr mai mare decât 1 se scrie ca produs de numere prime într-un singur mod (în afară de ordine).",
     "why": "Existența descompunerii este ușoară: dacă un număr nu este prim, îl rupi și continui. Unicitatea se bazează pe lema lui Euclid (dacă un număr prim divide un produs, divide unul dintre factori). Carl Friedrich Gauss a enunțat-o și a demonstrat-o complet în 1801."
    },
    {
     "id": "scomposizione",
     "label": "Descompunerea în factori",
     "x": 50,
     "y": 74,
     "color": "#ea580c",
     "html": "Arbore, coloană sau tort: de ex. 360 = 2³ × 3² × 5.",
     "why": "Datorită teoremei fundamentale nu contează de unde pornești: vei ajunge mereu la aceiași factori."
    },
    {
     "id": "mcd",
     "label": "c.m.m.d.c.",
     "x": 22,
     "y": 88,
     "color": "#9333ea",
     "html": "Factorii comuni, luați o singură dată, cu exponentul cel mai mic.",
     "why": "Un divizor comun poate conține doar factori prezenți în ambele numere și nu de mai multe ori decât apar în numărul care îi are de cele mai puține ori."
    },
    {
     "id": "mcm",
     "label": "c.m.m.m.c.",
     "x": 78,
     "y": 88,
     "color": "#db2777",
     "html": "Factorii comuni și necomuni, luați o singură dată, cu exponentul cel mai mare.",
     "why": "Un multiplu comun trebuie să le „conțină” pe amândouă numerele: deci toți factorii lor, fiecare de câte ori îi trebuie numărului care îl are de cele mai multe ori."
    },
    {
     "id": "euclide",
     "label": "Algoritmul lui Euclid",
     "x": 15,
     "y": 70,
     "color": "#7c3aed",
     "html": "C.m.m.d.c. prin împărțiri succesive, fără descompunere.",
     "why": "Divizorii comuni ai lui a și b sunt aceiași cu cei ai lui b și ai restului lui a : b. Numerele scad până când restul este 0."
    },
    {
     "id": "usi",
     "label": "La ce folosesc",
     "x": 85,
     "y": 70,
     "color": "#0f766e",
     "html": "Simplificarea fracțiilor, adunarea fracțiilor, organizarea turelor și a calendarelor, criptografia (RSA).",
     "why": "Să înmulțești două numere prime enorme e ușor, dar să le regăsești pornind de la produs este foarte greu: pe această diferență se bazează lacătele digitale care protejează internetul."
    }
   ],
   "edges": [
    [
     "naturali",
     "divisibilita",
     "împărțire fără rest"
    ],
    [
     "divisibilita",
     "criteri",
     "scurtături"
    ],
    [
     "divisibilita",
     "primi",
     "doar 2 divizori"
    ],
    [
     "primi",
     "infiniti",
     "Euclid demonstrează"
    ],
    [
     "primi",
     "tfa",
     "cărămizile tuturor numerelor"
    ],
    [
     "tfa",
     "scomposizione",
     "garantează"
    ],
    [
     "scomposizione",
     "mcd",
     "exponentul mai mic"
    ],
    [
     "scomposizione",
     "mcm",
     "exponentul mai mare"
    ],
    [
     "divisibilita",
     "euclide",
     "resturi"
    ],
    [
     "euclide",
     "mcd",
     "calculează"
    ],
    [
     "tfa",
     "usi",
     "aplicații"
    ]
   ]
  }
 ],
 "glossary": [
  {
   "t": "Multiplu",
   "d": "Număr obținut înmulțind un număr cu un număr natural."
  },
  {
   "t": "Divizor",
   "d": "Număr care împarte alt număr fără rest."
  },
  {
   "t": "Număr prim",
   "d": "Număr mai mare decât 1 divizibil doar cu 1 și cu el însuși."
  },
  {
   "t": "Număr compus",
   "d": "Număr care are mai mult de doi divizori."
  },
  {
   "t": "Factor prim",
   "d": "Număr prim care apare în descompunerea unui număr."
  },
  {
   "t": "Descompunere",
   "d": "Scrierea unui număr ca produs de factori primi."
  },
  {
   "t": "c.m.m.d.c.",
   "d": "Cel mai mare divizor comun: cel mai mare divizor comun al mai multor numere."
  },
  {
   "t": "c.m.m.m.c.",
   "d": "Cel mai mic multiplu comun: cel mai mic multiplu comun (nenul) al mai multor numere."
  },
  {
   "t": "Prime între ele",
   "d": "Numere care au c.m.m.d.c. egal cu 1."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Care mulțime conține doar numere prime?",
    "options": [
     "2, 3, 9, 11",
     "3, 5, 7, 13",
     "1, 2, 3, 5",
     "5, 7, 15, 17"
    ],
    "answer": 1,
    "explain": "9 și 15 sunt compuse, 1 nu este prim."
   },
   {
    "type": "tf",
    "q": "2 este singurul număr prim par.",
    "answer": true,
    "explain": "Orice alt număr par este divizibil cu 2, deci este compus."
   },
   {
    "type": "mc",
    "q": "Numărul 5.430 este divizibil cu…",
    "options": [
     "2, 3, 5 și 10",
     "doar 2 și 5",
     "doar 10",
     "2, 5, 9"
    ],
    "answer": 0,
    "explain": "Se termină cu 0 (2, 5, 10), iar 5+4+3+0 = 12 este divizibil cu 3, nu cu 9."
   },
   {
    "type": "mc",
    "q": "Descompunerea lui 120 este…",
    "options": [
     "2³ × 3 × 5",
     "2² × 3 × 10",
     "2 × 3 × 4 × 5",
     "2⁴ × 3 × 5"
    ],
    "answer": 0,
    "explain": "120 = 8 × 15 = 2³ × 3 × 5."
   },
   {
    "type": "num",
    "q": "c.m.m.d.c.(36, 48) = ?",
    "answer": 12,
    "tol": 0,
    "explain": "36 = 2² × 3², 48 = 2⁴ × 3 → 2² × 3 = 12."
   },
   {
    "type": "num",
    "q": "c.m.m.m.c.(10, 15) = ?",
    "answer": 30,
    "tol": 0,
    "explain": "10 = 2 × 5, 15 = 3 × 5 → 2 × 3 × 5 = 30."
   },
   {
    "type": "num",
    "q": "Ai 30 de trandafiri și 45 de lalele: vrei să faci cât mai multe buchete la fel folosind toate florile. Câte buchete?",
    "answer": 15,
    "tol": 0,
    "explain": "c.m.m.d.c.(30, 45) = 15: fiecare buchet va avea 2 trandafiri și 3 lalele."
   },
   {
    "type": "num",
    "q": "Un far clipește la fiecare 8 secunde, altul la fiecare 12. Clipesc împreună acum: după câte secunde o vor face din nou?",
    "answer": 24,
    "tol": 0,
    "unit": "s",
    "explain": "c.m.m.m.c.(8, 12) = 24 de secunde."
   },
   {
    "type": "text",
    "q": "Cum se numește metoda inventată de un matematician grec ca să găsească numerele prime „cernând” numerele?",
    "answer": [
     "ciurul lui eratostene",
     "ciurul",
     "ciur"
    ],
    "explain": "Este ciurul lui Eratostene."
   },
   {
    "type": "tf",
    "q": "C.m.m.d.c. a două numere este întotdeauna mai mare decât c.m.m.m.c. al lor.",
    "answer": false,
    "explain": "C.m.m.d.c. este cel mult egal cu numărul mai mic; c.m.m.m.c. este cel puțin egal cu numărul mai mare."
   },
   {
    "type": "order",
    "q": "Pune în ordine pașii pentru a calcula c.m.m.m.c. prin descompunere",
    "items": [
     "Descompune numerele în factori primi",
     "Ia factorii comuni și necomuni",
     "Alege pentru fiecare exponentul cel mai mare",
     "Înmulțește factorii aleși"
    ],
    "explain": "Comuni și necomuni, exponentul mai mare, apoi se înmulțește."
   }
  ],
  "gen": [
   [
    "isPrime",
    1
   ],
   [
    "gcd",
    1
   ],
   [
    "lcm",
    1
   ]
  ]
 }
});
