QBANK("it", "m1-geo-coordinate", {
 "f": [
  {
   "type": "mc",
   "q": "Quale parallelo si trova a 66° 33′ Nord?",
   "options": [
    "Tropico del Capricorno",
    "Circolo polare artico",
    "Circolo polare antartico"
   ],
   "answer": 1,
   "explain": "66° 33′ Nord è il Circolo polare artico; il Circolo polare antartico è alla stessa latitudine ma a Sud."
  },
  {
   "type": "tf",
   "q": "La longitudine si misura a partire dall'Equatore.",
   "answer": false,
   "explain": "È la latitudine a partire dall'Equatore; la longitudine si misura a partire dal meridiano di Greenwich."
  },
  {
   "type": "mc",
   "q": "Sydney si trova a 33,9° Sud. In quale emisfero è?",
   "options": [
    "Australe",
    "Boreale",
    "Occidentale"
   ],
   "answer": 0,
   "explain": "Sud significa emisfero australe, cioè sotto l'Equatore."
  },
  {
   "type": "text",
   "q": "Con quale sigla di tre lettere si indica l'ora del meridiano di Greenwich (tempo coordinato universale)?",
   "answer": [
    "utc"
   ],
   "explain": "UTC è l'ora di riferimento: l'Italia è in UTC+1 (UTC+2 con l'ora legale)."
  },
  {
   "type": "mc",
   "q": "I meridiani sono semicirconferenze che vanno…",
   "options": [
    "dall'Equatore ai tropici",
    "da Ovest a Est",
    "da un polo all'altro"
   ],
   "answer": 2,
   "explain": "I meridiani collegano il Polo Nord al Polo Sud; i paralleli invece girano da Ovest a Est."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Due città si trovano sullo stesso meridiano, una a 52° N e l'altra a 40° N. Quanti km le separano circa? (1° di latitudine ≈ 111 km)",
   "answer": 1332,
   "tol": 10,
   "unit": "km",
   "explain": "Differenza: 52 − 40 = 12°. Distanza: 12 × 111 = 1.332 km."
  },
  {
   "type": "mc",
   "q": "Un punto ha coordinate 34° S, 151° E. In quali emisferi si trova?",
   "options": [
    "Boreale e occidentale",
    "Boreale e orientale",
    "Australe e orientale",
    "Australe e occidentale"
   ],
   "answer": 2,
   "explain": "S = Sud → emisfero australe; E = Est → emisfero orientale."
  },
  {
   "type": "tf",
   "q": "La Cina, larga come cinque fusi orari, usa cinque orari diversi.",
   "answer": false,
   "explain": "I confini dei fusi seguono spesso quelli degli Stati: la Cina usa un solo orario per tutto il Paese."
  },
  {
   "type": "text",
   "q": "Quale strumento costruì John Harrison per risolvere il problema della longitudine in mare?",
   "answer": [
    "cronometro",
    "cronometro marino",
    "il cronometro",
    "cronometro da marina",
    "orologio marino"
   ],
   "explain": "Il cronometro marino di Harrison manteneva l'ora del porto di partenza: dalla differenza con l'ora locale si calcola la longitudine (1 ora = 15°)."
  },
  {
   "type": "order",
   "q": "Ordina queste città da Ovest a Est (in base al fuso orario).",
   "items": [
    "New York (UTC−5)",
    "Londra (UTC+0)",
    "Roma (UTC+1)",
    "Mosca (UTC+3)",
    "Tokyo (UTC+9)"
   ],
   "explain": "Più ci si sposta a Est, più il numero UTC cresce: −5, 0, +1, +3, +9."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Su una nave il Sole è nel punto più alto (mezzogiorno locale) nel momento in cui il cronometro, regolato su Greenwich, segna le 15:00. A quanti gradi di longitudine Ovest si trova la nave?",
   "answer": 45,
   "tol": 0,
   "unit": "°",
   "explain": "Sono passate 3 ore dal mezzogiorno di Greenwich, quindi la nave è a Ovest: 3 × 15° = 45° Ovest."
  },
  {
   "type": "mc",
   "q": "Ilaria dice: «A Roma (UTC+1) sono le 15, quindi a New York (UTC−5) sono le 21, perché 15 + 6 = 21». Dov'è l'errore?",
   "options": [
    "La differenza è di 4 ore, non di 6",
    "Non c'è nessun errore",
    "New York è a Ovest: l'ora va tolta, quindi sono le 9"
   ],
   "answer": 2,
   "explain": "Verso Ovest il Sole arriva più tardi, quindi l'ora è più indietro: 15 − 6 = 9."
  },
  {
   "type": "tf",
   "q": "Un grado di longitudine è lungo circa 111 km in qualsiasi punto della Terra.",
   "answer": false,
   "explain": "I meridiani si incontrano ai poli: un grado di longitudine misura 111 km all'Equatore e si accorcia fino a zero ai poli."
  },
  {
   "type": "mc",
   "q": "Roma e New York hanno quasi la stessa latitudine, ma le loro ore sono molto diverse. Perché?",
   "options": [
    "Perché l'ora dipende dalla longitudine, e le due città sono su meridiani molto lontani",
    "Perché l'ora dipende dalla latitudine e New York è più a Sud",
    "Perché New York è nell'emisfero australe"
   ],
   "answer": 0,
   "explain": "I fusi orari sono spicchi di longitudine (15° ciascuno): la differenza di ore tra due luoghi dipende da quanto sono lontani Est-Ovest."
  },
  {
   "type": "num",
   "q": "Un aereo vola in linea retta verso Nord, seguendo un meridiano, dall'Equatore fino al parallelo di 30° N. Quanti km percorre circa? (1° ≈ 111 km)",
   "answer": 3330,
   "tol": 30,
   "unit": "km",
   "explain": "Dall'Equatore (0°) a 30° N ci sono 30 gradi: 30 × 111 = 3.330 km."
  }
 ]
});
