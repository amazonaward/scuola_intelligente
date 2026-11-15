QBANK("it", "lib-treno", {
 "f": [
  {
   "type": "mc",
   "q": "Dove siede il macchinista?",
   "options": [
    "Nel carrello",
    "Nella cabina di guida",
    "Sul pantografo"
   ],
   "answer": 1,
   "explain": "La cabina di guida è nella parte anteriore: ha le leve, gli schermi e la radio."
  },
  {
   "type": "tf",
   "q": "Il treno ha un volante per scegliere dove andare.",
   "answer": false,
   "explain": "Il treno non ha volante: è il binario a decidere dove si va."
  },
  {
   "type": "text",
   "q": "La prima ferrovia italiana, inaugurata nel 1839, andava da Napoli a quale città?",
   "answer": [
    "portici",
    "a portici"
   ],
   "explain": "La Napoli–Portici era lunga 7 km e la percorreva una locomotiva a vapore."
  },
  {
   "type": "mc",
   "q": "Di che materiale sono fatte le ruote del treno e i binari?",
   "options": [
    "Di gomma",
    "Di legno",
    "D'acciaio"
   ],
   "answer": 2,
   "explain": "Ruote e rotaie d'acciaio hanno pochissimo attrito."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Un treno ad alta velocità viaggia a 300 km/h. Quanti km percorre in 20 minuti?",
   "answer": 100,
   "unit": "km",
   "explain": "20 minuti sono un terzo d'ora: 300 ÷ 3 = 100 km."
  },
  {
   "type": "order",
   "q": "Metti in ordine ciò che succede quando il treno frena.",
   "items": [
    "Il macchinista tira la leva del freno",
    "I motori diventano generatori e rallentano il treno",
    "L'elettricità prodotta torna nella linea",
    "Intervengono i freni a disco"
   ],
   "explain": "Prima frena il motore elettrico, che produce elettricità; poi aiutano i freni a disco."
  },
  {
   "type": "mc",
   "q": "A che cosa serve il trasformatore sotto il pavimento del treno?",
   "options": [
    "Ad abbassare la tensione da 25 000 volt a poche migliaia",
    "Ad alzare ancora di più la tensione del filo",
    "A dosare la velocità dei motori"
   ],
   "answer": 0,
   "explain": "La corrente del filo è troppo forte per i motori: il trasformatore ne abbassa la tensione. Dosare la corrente è compito del convertitore."
  },
  {
   "type": "tf",
   "q": "Il muso del treno è lungo e liscio perché ad alta velocità la resistenza dell'aria è la fatica più grande da vincere.",
   "answer": true,
   "explain": "Una forma affusolata taglia l'aria e fa consumare meno energia."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Per persona e per km il treno emette fino a 10 volte meno CO₂ dell'auto. Se un'auto emette 120 g di CO₂ per persona per km, quanti grammi al massimo emette il treno per persona per km?",
   "answer": 12,
   "unit": "g",
   "explain": "120 ÷ 10 = 12 g di CO₂."
  },
  {
   "type": "mc",
   "q": "Anna dice: «Un treno a 300 km/h può frenare all'ultimo momento, come un'auto». Qual è l'errore?",
   "options": [
    "Il treno frena solo grazie alla catenaria",
    "Il treno non ha i freni",
    "Un treno a 300 km/h ha bisogno di più di 3 km per fermarsi"
   ],
   "answer": 2,
   "explain": "Il treno è velocissimo e pesante: per fermarsi serve più di 3 km, quindi il macchinista deve frenare molto prima."
  },
  {
   "type": "mc",
   "q": "Perché un treno riesce a fare le curve senza scivolare fuori dai binari?",
   "options": [
    "Perché ha un volante nascosto",
    "Perché i carrelli possono girare un po' rispetto alla cassa",
    "Perché le ruote sono di gomma"
   ],
   "answer": 1,
   "explain": "Sotto la cassa i carrelli (con 4 ruote ciascuno) ruotano leggermente e seguono la curva; il bordino tiene le ruote sulla rotaia."
  },
  {
   "type": "tf",
   "q": "La corrente elettrica che alimenta il treno ritorna alla centrale passando attraverso le ruote e le rotaie.",
   "answer": true,
   "explain": "Il circuito si chiude: filo, pantografo, motori, ruote e rotaie."
  }
 ]
});
