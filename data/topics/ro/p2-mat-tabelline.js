TOPIC('ro', {
 "id": "p2-mat-tabelline",
 "title": "Tabla înmulțirii",
 "intro": "<b>Tabla înmulțirii</b> este o super-putere 🦸: ne ajută să numărăm repede multe lucruri la fel. Să descoperim că a <b>înmulți</b> înseamnă a face o <b>adunare repetată</b>!",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "A înmulți = a aduna de mai multe ori același număr",
   "html": "<p>Ai <b>3 farfurii</b> și pe fiecare farfurie sunt <b>4 biscuiți</b> 🍪.</p><p>Poți număra așa: 4 + 4 + 4 = 12.</p><p>Sau poți spune: <b>de 3 ori 4</b>, care se scrie <b>3 × 4 = 12</b>.</p><p>Semnul <b>×</b> se citește „ori”. Numerele pe care le înmulțim se numesc <b>factori</b>, iar rezultatul se numește <b>produs</b>.</p>"
  },
  {
   "type": "svg",
   "title": "3 × 4 cu șiruri",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fefce8\"/><text x=\"300\" y=\"40\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3 rânduri × 4 coloane = 12</text><g fill=\"#a16207\" stroke=\"#713f12\" stroke-width=\"2\"><circle cx=\"110\" cy=\"100\" r=\"24\"/><circle cx=\"180\" cy=\"100\" r=\"24\"/><circle cx=\"250\" cy=\"100\" r=\"24\"/><circle cx=\"320\" cy=\"100\" r=\"24\"/><circle cx=\"110\" cy=\"170\" r=\"24\"/><circle cx=\"180\" cy=\"170\" r=\"24\"/><circle cx=\"250\" cy=\"170\" r=\"24\"/><circle cx=\"320\" cy=\"170\" r=\"24\"/><circle cx=\"110\" cy=\"240\" r=\"24\"/><circle cx=\"180\" cy=\"240\" r=\"24\"/><circle cx=\"250\" cy=\"240\" r=\"24\"/><circle cx=\"320\" cy=\"240\" r=\"24\"/></g><g fill=\"#fde68a\"><circle cx=\"102\" cy=\"94\" r=\"4\"/><circle cx=\"172\" cy=\"94\" r=\"4\"/><circle cx=\"242\" cy=\"94\" r=\"4\"/><circle cx=\"312\" cy=\"94\" r=\"4\"/><circle cx=\"102\" cy=\"164\" r=\"4\"/><circle cx=\"172\" cy=\"164\" r=\"4\"/><circle cx=\"242\" cy=\"164\" r=\"4\"/><circle cx=\"312\" cy=\"164\" r=\"4\"/><circle cx=\"102\" cy=\"234\" r=\"4\"/><circle cx=\"172\" cy=\"234\" r=\"4\"/><circle cx=\"242\" cy=\"234\" r=\"4\"/><circle cx=\"312\" cy=\"234\" r=\"4\"/></g><g font-size=\"22\" fill=\"#2563eb\" font-weight=\"bold\"><text x=\"370\" y=\"108\">4</text><text x=\"370\" y=\"178\">+ 4</text><text x=\"370\" y=\"248\">+ 4</text></g><text x=\"470\" y=\"178\" font-size=\"34\" font-weight=\"bold\" fill=\"#dc2626\">= 12</text></svg>",
   "caption": "Un șir: rânduri și coloane de biscuiți. 3 rânduri a câte 4 fac 12."
  },
  {
   "type": "example",
   "title": "Exemplu: lăbuțele câinilor 🐕",
   "html": "<p>În parc sunt <b>5 câini</b>. Fiecare câine are <b>4 lăbuțe</b>.</p><p>Câte lăbuțe în total? 4 + 4 + 4 + 4 + 4 = 20, adică <b>5 × 4 = 20</b> de lăbuțe! 🐾</p>"
  },
  {
   "type": "text",
   "title": "Trucuri ca să ții minte tabla înmulțirii",
   "html": "<ul><li><b>× 1</b>: numărul rămâne la fel. 7 × 1 = 7.</li><li><b>× 0</b>: dă mereu 0! 8 × 0 = 0 (0 farfurii = 0 biscuiți).</li><li><b>× 2</b>: este <b>dublul</b>. 6 × 2 = 6 + 6 = 12.</li><li><b>× 5</b>: rezultatele se termină mereu cu <b>0</b> sau cu <b>5</b>: 5, 10, 15, 20…</li><li><b>× 10</b>: adaugi un <b>0</b> la sfârșit. 3 × 10 = 30.</li><li><b>× 9</b>: cifrele rezultatului adunate fac 9! 9 × 3 = 27 → 2 + 7 = 9.</li></ul>"
  },
  {
   "type": "remember",
   "title": "Proprietatea de comutativitate",
   "html": "<p>Dacă schimbi factorii între ei, rezultatul <b>nu se schimbă</b>: <b>3 × 4 = 4 × 3 = 12</b>.</p><p>Așa, dacă știi 3 × 8, știi și 8 × 3! Înmulțirile de învățat se înjumătățesc. 😄</p>"
  },
  {
   "type": "widget",
   "title": "Tabla lui Pitagora",
   "widget": "timesTable",
   "options": {
    "size": 10
   },
   "caption": "Atinge o căsuță: rândul și coloana se întâlnesc în rezultat. Uite: tabla este la fel de o parte și de alta a diagonalei!"
  },
  {
   "type": "quiz",
   "title": "Mini-test: adunări repetate",
   "questions": [
    {
     "type": "mc",
     "q": "2 + 2 + 2 + 2 este egal cu…",
     "options": [
      "2 × 4",
      "2 × 2",
      "4 + 2"
     ],
     "answer": 0,
     "explain": "2 se repetă de 4 ori: 2 × 4 = 8."
    },
    {
     "type": "num",
     "q": "Cât face 5 × 3?",
     "answer": 15,
     "explain": "5 + 5 + 5 = 15."
    },
    {
     "type": "tf",
     "q": "6 × 0 = 6",
     "answer": false,
     "explain": "Orice număr înmulțit cu 0 dă 0."
    }
   ]
  },
  {
   "type": "widget",
   "title": "Sărituri pe axă: înmulțirea cu 3",
   "widget": "numberLine",
   "options": {
    "min": 0,
    "max": 30,
    "step": 3,
    "marks": [
     3,
     6,
     9,
     12,
     15,
     18,
     21,
     24,
     27,
     30
    ]
   },
   "caption": "Fă sărituri de câte 3: 3, 6, 9, 12… sunt rezultatele înmulțirii cu 3!"
  },
  {
   "type": "example",
   "title": "Exemplu: cumpărături la piață 🥚",
   "html": "<p>Bunica cumpără <b>2 cofraje de ouă</b>. În fiecare cofraj sunt <b>6 ouă</b>.</p><p>Câte ouă? <b>2 × 6 = 12</b> ouă. O duzină! 🥚</p>"
  },
  {
   "type": "curiosity",
   "title": "Știai că…? 🏛️",
   "html": "<p>Tabla înmulțirii se numește și <b>tabla lui Pitagora</b>, în onoarea lui <b>Pitagora</b>, un matematician grec care a trăit acum mai bine de 2500 de ani.</p>"
  },
  {
   "type": "curiosity",
   "title": "Știai că…? ✋",
   "html": "<p>Există un truc cu degetele pentru înmulțirea cu 9! Deschide palmele. Pentru 9 × 4 coboară <b>al 4-lea deget</b> din stânga: în stânga rămân <b>3 degete</b> și în dreapta <b>6 degete</b>. Rezultatul este <b>36</b>!</p>"
  },
  {
   "type": "3d",
   "title": "Tabla înmulțirii în 3D 🧊",
   "scene": "blocks",
   "options": {
    "mode": "array",
    "a": 3,
    "b": 4
   },
   "caption": "O înmulțire este un dreptunghi de cuburi: 3 rânduri a câte 4 cuburi = 12 cuburi. Schimbă numerele cu cursoarele și rotește dreptunghiul: 3 × 4 și 4 × 3 au aceleași cuburi!"
  },
  {
   "type": "alternatives",
   "title": "Nu-ți place metoda de la școală? Iată alte moduri! 🌍",
   "intro": "<p>În fiecare colț al lumii copiii înmulțesc altfel. Nu există un singur mod corect: alege-l pe cel pe care îl înțelegi cel mai bine!</p>",
   "tabs": [
    {
     "label": "🧊 Cuburi 3D",
     "html": "<p>Așază cuburile în <b>rânduri</b>: 3 rânduri a câte 5 cuburi. Câte sunt în total? Numără rândurile și cuburile din fiecare rând: <b>3 × 5 = 15</b>.</p><p>Mișcă cursoarele și construiește tu tabla înmulțirii!</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 3,
      "b": 5
     }
    },
    {
     "label": "🔄 Rotește dreptunghiul",
     "html": "<p>Desenează 3 rânduri a câte 5 pătrățele. Acum <b>rotește foaia</b>: devin 5 rânduri a câte 3 pătrățele! Pătrățelele sunt tot <b>15</b>.</p><p>De aceea <b>3 × 5 = 5 × 3</b>. Se numește <b>proprietatea de comutativitate</b>. Așa trebuie să înveți doar jumătate din tabla lui Pitagora! 😉</p>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"240\" fill=\"#f0f9ff\"/><g fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"2\"><rect x=\"40\" y=\"50\" width=\"30\" height=\"30\"/><rect x=\"70\" y=\"50\" width=\"30\" height=\"30\"/><rect x=\"100\" y=\"50\" width=\"30\" height=\"30\"/><rect x=\"130\" y=\"50\" width=\"30\" height=\"30\"/><rect x=\"160\" y=\"50\" width=\"30\" height=\"30\"/><rect x=\"40\" y=\"80\" width=\"30\" height=\"30\"/><rect x=\"70\" y=\"80\" width=\"30\" height=\"30\"/><rect x=\"100\" y=\"80\" width=\"30\" height=\"30\"/><rect x=\"130\" y=\"80\" width=\"30\" height=\"30\"/><rect x=\"160\" y=\"80\" width=\"30\" height=\"30\"/><rect x=\"40\" y=\"110\" width=\"30\" height=\"30\"/><rect x=\"70\" y=\"110\" width=\"30\" height=\"30\"/><rect x=\"100\" y=\"110\" width=\"30\" height=\"30\"/><rect x=\"130\" y=\"110\" width=\"30\" height=\"30\"/><rect x=\"160\" y=\"110\" width=\"30\" height=\"30\"/></g><text x=\"115\" y=\"185\" font-size=\"26\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#1e3a8a\">3 × 5 = 15</text><text x=\"300\" y=\"110\" font-size=\"44\" text-anchor=\"middle\">🔄</text><g fill=\"#f472b6\" stroke=\"#831843\" stroke-width=\"2\"><rect x=\"420\" y=\"20\" width=\"30\" height=\"30\"/><rect x=\"450\" y=\"20\" width=\"30\" height=\"30\"/><rect x=\"480\" y=\"20\" width=\"30\" height=\"30\"/><rect x=\"420\" y=\"50\" width=\"30\" height=\"30\"/><rect x=\"450\" y=\"50\" width=\"30\" height=\"30\"/><rect x=\"480\" y=\"50\" width=\"30\" height=\"30\"/><rect x=\"420\" y=\"80\" width=\"30\" height=\"30\"/><rect x=\"450\" y=\"80\" width=\"30\" height=\"30\"/><rect x=\"480\" y=\"80\" width=\"30\" height=\"30\"/><rect x=\"420\" y=\"110\" width=\"30\" height=\"30\"/><rect x=\"450\" y=\"110\" width=\"30\" height=\"30\"/><rect x=\"480\" y=\"110\" width=\"30\" height=\"30\"/><rect x=\"420\" y=\"140\" width=\"30\" height=\"30\"/><rect x=\"450\" y=\"140\" width=\"30\" height=\"30\"/><rect x=\"480\" y=\"140\" width=\"30\" height=\"30\"/></g><text x=\"465\" y=\"215\" font-size=\"26\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#831843\">5 × 3 = 15</text></svg>"
    },
    {
     "label": "🇯🇵 Liniile japoneze",
     "html": "<p>În <b>Japonia</b> și în <b>China</b> mulți copii înmulțesc desenând <b>linii</b>! Pentru 12 × 13:</p><ol><li>desenezi 1 linie și apoi 2 linii (pentru 12) înclinate într-o parte;</li><li>desenezi 1 linie și apoi 3 linii (pentru 13) înclinate în cealaltă parte;</li><li>numeri <b>intersecțiile</b> din fiecare zonă: în stânga sutele, la mijloc zecile, în dreapta unitățile.</li></ol><p>Rezultat: 1 | 5 | 6 → <b>156</b>. Privește animația!</p>",
     "widget": "lineMultiply",
     "options": {
      "a": 12,
      "b": 13
     }
    },
    {
     "label": "🇷🇺 Țăranul rus",
     "html": "<p>Se spune că <b>țăranii ruși</b> înmulțeau știind să facă doar două lucruri: <b>să înjumătățească</b> și <b>să dubleze</b>!</p><ol><li>Scrie cele două numere în două coloane.</li><li>În stânga împarte la 2 (fără rest), în dreapta dublează.</li><li>Taie rândurile în care în stânga este un număr <b>par</b>.</li><li>Adună numerele rămase în dreapta.</li></ol><p>Încearcă: 8 × 6 = 48.</p>",
     "widget": "russianPeasant",
     "options": {
      "a": 8,
      "b": 6
     }
    },
    {
     "label": "🏺 Vechii egipteni",
     "html": "<p>Acum mai bine de 3500 de ani, <b>egiptenii</b> înmulțeau făcând doar <b>dublări</b>! Pentru 7 × 6:</p><ul><li>1 × 6 = 6</li><li>2 × 6 = 12</li><li>4 × 6 = 24</li></ul><p>Apoi aleg rândurile care împreună fac 7: 1 + 2 + 4 = 7. Adună 6 + 12 + 24 = <b>42</b>. Ingenios, nu?</p>",
     "widget": "egyptianMultiply",
     "options": {
      "a": 7,
      "b": 6
     }
    },
    {
     "label": "🔲 Metoda „gelosia” (grila)",
     "html": "<p><b>Înmulțirea „gelosia”</b> folosește o grilă cu diagonale, care seamănă cu obloanele numite în italiană „gelosie”. Vine din lumea <b>arabă</b> și a fost folosită la <b>Veneția</b> și în toată Italia în Evul Mediu.</p><p>În fiecare căsuță scrii rezultatul unei înmulțiri (zecile deasupra diagonalei, unitățile dedesubt), apoi aduni pe diagonale.</p>",
     "widget": "lattice",
     "options": {
      "a": 23,
      "b": 4
     }
    },
    {
     "label": "✋ Trucul lui 9",
     "html": "<p>Pentru înmulțirea cu 9 îți ajung mâinile!</p><ol><li>Deschide palmele în fața ta: 10 degete.</li><li>Pentru 9 × 3 coboară <b>al treilea deget</b> din stânga.</li><li>Degetele ridicate în <b>stânga</b> degetului coborât sunt <b>zecile</b>: 2.</li><li>Degetele ridicate în <b>dreapta</b> sunt <b>unitățile</b>: 7.</li></ol><p>9 × 3 = <b>27</b>! Funcționează de la 9 × 1 la 9 × 10.</p>",
     "svg": "<svg viewBox=\"0 0 600 220\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"220\" fill=\"#fefce8\"/><g fill=\"#fdba74\" stroke=\"#9a3412\" stroke-width=\"2\"><rect x=\"40\" y=\"40\" width=\"34\" height=\"110\" rx=\"17\"/><rect x=\"90\" y=\"40\" width=\"34\" height=\"110\" rx=\"17\"/><rect x=\"140\" y=\"110\" width=\"34\" height=\"40\" rx=\"17\" fill=\"#fca5a5\"/><rect x=\"190\" y=\"40\" width=\"34\" height=\"110\" rx=\"17\"/><rect x=\"240\" y=\"40\" width=\"34\" height=\"110\" rx=\"17\"/><rect x=\"320\" y=\"40\" width=\"34\" height=\"110\" rx=\"17\"/><rect x=\"370\" y=\"40\" width=\"34\" height=\"110\" rx=\"17\"/><rect x=\"420\" y=\"40\" width=\"34\" height=\"110\" rx=\"17\"/><rect x=\"470\" y=\"40\" width=\"34\" height=\"110\" rx=\"17\"/><rect x=\"520\" y=\"40\" width=\"34\" height=\"110\" rx=\"17\"/></g><text x=\"157\" y=\"30\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#b91c1c\" font-weight=\"bold\">3°</text><text x=\"82\" y=\"185\" font-size=\"22\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#1e3a8a\">2 zeci</text><text x=\"400\" y=\"185\" font-size=\"22\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#166534\">7 unități</text><text x=\"300\" y=\"212\" font-size=\"24\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#111827\">9 × 3 = 27</text></svg>"
    },
    {
     "label": "🐸 Săriturile broscuței",
     "html": "<p>O broscuță sare mereu la fel de departe. Dacă face sărituri de câte <b>4</b>, după 5 sărituri unde ajunge? 4, 8, 12, 16, <b>20</b>! Tabla înmulțirii înseamnă <b>sărituri egale</b> pe axa numerelor.</p>",
     "widget": "numberLine",
     "options": {
      "min": 0,
      "max": 40,
      "step": 4,
      "marks": [
       20,
       40
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Harta înmulțirii 🗺️",
   "nodes": [
    {
     "id": "addizione",
     "label": "Adunarea",
     "x": 50,
     "y": 6,
     "color": "#22c55e",
     "html": "<p>Știi deja să faci adunări: 3 + 3 + 3 + 3.</p>",
     "why": "<p>Adunarea este prima operație: a pune împreună. Toate celelalte operații se nasc din ea.</p>"
    },
    {
     "id": "ripetuta",
     "label": "Adunare repetată",
     "x": 50,
     "y": 26,
     "color": "#16a34a",
     "html": "<p>Când aduni de multe ori <b>același număr</b>, poți folosi o scurtătură: înmulțirea. 3 + 3 + 3 + 3 = 4 × 3.</p>",
     "why": "<p>Să scrii 3 + 3 + 3 + … de o sută de ori ar dura foarte mult! Înmulțirea s-a născut ca să <b>economisim efort</b>.</p>"
    },
    {
     "id": "moltiplicazione",
     "label": "Înmulțirea ×",
     "x": 50,
     "y": 46,
     "color": "#3b82f6",
     "html": "<p>4 × 3 = 12. Numerele pe care le înmulțești se numesc <b>factori</b>, rezultatul se numește <b>produs</b>.</p>",
     "why": "<p>Semnul × a fost folosit pentru prima dată de un matematician englez, <b>William Oughtred</b>, acum aproape 400 de ani. Înainte se scria în cuvinte!</p>"
    },
    {
     "id": "rettangolo",
     "label": "Dreptunghi de pătrățele",
     "x": 15,
     "y": 46,
     "color": "#f97316",
     "html": "<p>Orice înmulțire se poate desena ca un <b>dreptunghi</b>: 4 rânduri a câte 3 pătrățele.</p>",
     "why": "<p>Dreptunghiul ne face să <b>vedem</b> înmulțirea: rândurile sunt egale, exact ca termenii egali ai adunării repetate.</p>"
    },
    {
     "id": "tabelline",
     "label": "Tabla înmulțirii",
     "x": 85,
     "y": 46,
     "color": "#a855f7",
     "html": "<p><b>Tabla înmulțirii</b> cuprinde înmulțirile de la 1 la 10 care trebuie știute pe de rost. Împreună formează <b>tabla lui Pitagora</b>.</p>",
     "why": "<p>Se numește „a lui Pitagora” în onoarea matematicianului grec <b>Pitagora</b>, dar tabla înmulțirii este și mai veche: în <b>China</b> s-a găsit o tablă a înmulțirii scrisă pe bețișoare de bambus acum mai bine de 2300 de ani!</p>"
    },
    {
     "id": "commutativa",
     "label": "Se poate întoarce: 3×5 = 5×3",
     "x": 15,
     "y": 75,
     "color": "#ec4899",
     "html": "<p><b>Proprietatea de comutativitate</b>: dacă schimbi factorii, produsul nu se schimbă.</p>",
     "why": "<p>De ce? Ia dreptunghiul 3 × 5 și rotește-l: devine 5 × 3, dar pătrățelele sunt tot aceleași! Nimeni nu a adăugat și nu a luat nimic.</p>"
    },
    {
     "id": "zero",
     "label": "× 0 = 0",
     "x": 40,
     "y": 75,
     "color": "#64748b",
     "html": "<p>Orice număr înmulțit cu <b>0</b> dă <b>0</b>.</p>",
     "why": "<p>5 × 0 înseamnă „de 5 ori nimic”: dacă ai 5 cutii goale, câte bomboane ai? Zero!</p>"
    },
    {
     "id": "uno",
     "label": "× 1 rămâne la fel",
     "x": 62,
     "y": 75,
     "color": "#0ea5e9",
     "html": "<p>Orice număr înmulțit cu <b>1</b> rămâne la fel: 7 × 1 = 7.</p>",
     "why": "<p>7 × 1 înseamnă „7 o singură dată”: nu se schimbă nimic!</p>"
    },
    {
     "id": "dieci",
     "label": "× 10: adaugi un 0",
     "x": 85,
     "y": 75,
     "color": "#eab308",
     "html": "<p>4 × 10 = 40: se adaugă un <b>zero</b>.</p>",
     "why": "<p>Înmulțirea cu 10 transformă fiecare unitate într-o zece: cifrele se mută cu un loc la stânga, iar zero ține locul gol al unităților.</p>"
    },
    {
     "id": "divisione",
     "label": "Împărțirea",
     "x": 50,
     "y": 95,
     "color": "#ef4444",
     "html": "<p><b>Împărțirea</b> este operația inversă: dacă 4 × 3 = 12, atunci 12 : 3 = 4.</p>",
     "why": "<p>Dacă știi bine tabla înmulțirii, te va ajuta enorm la împărțiri: este același tabel citit invers!</p>"
    }
   ],
   "edges": [
    [
     "addizione",
     "ripetuta",
     "cu numere egale"
    ],
    [
     "ripetuta",
     "moltiplicazione",
     "scurtătură"
    ],
    [
     "moltiplicazione",
     "rettangolo",
     "se desenează ca"
    ],
    [
     "moltiplicazione",
     "tabelline",
     "de la 1 la 10"
    ],
    [
     "rettangolo",
     "commutativa",
     "rotindu-l"
    ],
    [
     "moltiplicazione",
     "zero",
     ""
    ],
    [
     "moltiplicazione",
     "uno",
     ""
    ],
    [
     "tabelline",
     "dieci",
     ""
    ],
    [
     "moltiplicazione",
     "divisione",
     "inversul"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-test: înmulțiri rapide",
   "questions": [
    {
     "type": "num",
     "q": "7 × 2 = ?",
     "answer": 14,
     "explain": "Dublul lui 7 este 14."
    },
    {
     "type": "num",
     "q": "4 × 10 = ?",
     "answer": 40,
     "explain": "Cu 10 adaugi un zero: 40."
    },
    {
     "type": "mc",
     "q": "Care rezultat este în înmulțirea cu 5?",
     "options": [
      "23",
      "35",
      "41"
     ],
     "answer": 1,
     "explain": "35 = 5 × 7; rezultatele înmulțirii cu 5 se termină cu 0 sau 5."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Înmulțire",
   "d": "O adunare repetată a aceluiași număr. Se folosește semnul ×."
  },
  {
   "t": "Factori",
   "d": "Numerele care se înmulțesc."
  },
  {
   "t": "Produs",
   "d": "Rezultatul înmulțirii."
  },
  {
   "t": "Șir (rânduri și coloane)",
   "d": "Obiecte așezate în rânduri și coloane egale."
  },
  {
   "t": "Dublu",
   "d": "Un număr luat de 2 ori."
  },
  {
   "t": "Tabla lui Pitagora",
   "d": "Tabelul cu toate rezultatele înmulțirilor."
  },
  {
   "t": "Proprietatea de comutativitate",
   "d": "Dacă schimbi factorii, produsul nu se schimbă."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "3 × 3 = ?",
    "answer": 9,
    "explain": "3 + 3 + 3 = 9."
   },
   {
    "type": "num",
    "q": "6 × 5 = ?",
    "answer": 30,
    "explain": "5 + 5 + 5 + 5 + 5 + 5 = 30."
   },
   {
    "type": "num",
    "q": "8 × 2 = ?",
    "answer": 16,
    "explain": "Dublul lui 8 este 16."
   },
   {
    "type": "mc",
    "q": "Care adunare este egală cu 4 × 3?",
    "options": [
     "4 + 3",
     "3 + 3 + 3 + 3",
     "4 + 4 + 4 + 4"
    ],
    "answer": 1,
    "explain": "4 × 3 înseamnă de 4 ori 3."
   },
   {
    "type": "tf",
    "q": "5 × 2 este egal cu 2 × 5.",
    "answer": true,
    "explain": "Proprietatea de comutativitate: amândouă fac 10."
   },
   {
    "type": "num",
    "q": "9 × 1 = ?",
    "answer": 9,
    "explain": "Cu 1 numărul rămâne la fel."
   },
   {
    "type": "num",
    "q": "Un păianjen are 8 picioare. Câte picioare au 3 păianjeni? 🕷️",
    "answer": 24,
    "explain": "3 × 8 = 24."
   },
   {
    "type": "mc",
    "q": "Cum se numește rezultatul unei înmulțiri?",
    "options": [
     "Sumă",
     "Produs",
     "Diferență"
    ],
    "answer": 1,
    "explain": "Rezultatul înmulțirii este produsul."
   },
   {
    "type": "order",
    "q": "Pune în ordine rezultatele înmulțirii cu 4",
    "items": [
     "4",
     "8",
     "12",
     "16",
     "20"
    ],
    "explain": "4, 8, 12, 16, 20: de fiecare dată + 4."
   },
   {
    "type": "num",
    "q": "0 × 7 = ?",
    "answer": 0,
    "explain": "Înmulțirea cu 0 dă mereu 0."
   }
  ],
  "gen": [
   [
    "times",
    4
   ]
  ]
 }
});
