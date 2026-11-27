QBANK("it", "l1-geo-strumenti", {
 "f": [
  { "type": "mc", "q": "Qual è il parallelo di riferimento a 0° di latitudine?", "options": ["Tropico del Cancro", "Equatore", "Circolo polare artico"], "answer": 1, "explain": "L'Equatore è il parallelo 0°, da cui si misura la latitudine." },
  { "type": "num", "q": "Su una carta in scala 1:10.000, 5 cm quanti metri sono nella realtà?", "answer": 500, "tol": 0, "unit": "m", "explain": "5 cm × 10.000 = 50.000 cm = 500 m." },
  { "type": "tf", "q": "I meridiani sono semicerchi che uniscono il Polo Nord al Polo Sud.", "answer": true, "explain": "I meridiani passano per i poli e misurano la longitudine." },
  { "type": "text", "q": "Come si chiama la riga che nella carta spiega i simboli e i colori?", "answer": ["legenda", "la legenda"], "explain": "La legenda è l'elemento della carta che spiega il significato di simboli e colori." },
  { "type": "mc", "q": "Che cosa indica la longitudine?", "options": ["La distanza angolare da Greenwich", "La distanza angolare dall'Equatore", "L'altitudine"], "answer": 0, "explain": "La longitudine misura la distanza angolare Est-Ovest dal meridiano di Greenwich." }
 ],
 "m": [
  { "type": "mc", "q": "Una scala 1:2.000.000 è…", "options": ["una scala grande", "una scala piccola", "una scala uguale a 1:1"], "answer": 1, "explain": "Il denominatore è molto grande: la scala è piccola e rappresenta un'area vasta con pochi dettagli." },
  { "type": "num", "q": "Due paesi distano 15 km. Su una carta sono a 30 cm. Qual è il denominatore della scala (1:N)?", "answer": 50000, "tol": 0, "explain": "15 km = 1.500.000 cm; 1.500.000 ÷ 30 = 50.000: scala 1:50.000." },
  { "type": "tf", "q": "Su una carta topografica le curve di livello molto distanziate indicano un pendio dolce.", "answer": true, "explain": "Curve lontane tra loro significano poca variazione di quota in molto spazio." },
  { "type": "mc", "q": "Quanto vale circa 1 ora di differenza oraria in gradi di longitudine?", "options": ["15°", "24°", "90°"], "answer": 0, "explain": "360° ÷ 24 ore = 15° per ora." },
  { "type": "mc", "q": "A quale scopo servono le carte tematiche?", "options": ["Mostrare un singolo fenomeno su una base geografica", "Mostrare solo le strade", "Misurare la profondità del mare"], "answer": 0, "explain": "Una carta tematica rappresenta un fenomeno specifico (clima, popolazione, reddito…)." }
 ],
 "d": [
  { "type": "mc", "q": "Perché una proiezione cartografica deve sempre deformare qualcosa?", "options": ["Perché una superficie sferica non si può stendere su un piano senza deformare aree, forme o distanze", "Perché i cartografi sbagliano le misure", "Perché la Terra è troppo grande"], "answer": 0, "explain": "È una proprietà matematica (Gauss): una sfera non è sviluppabile sul piano." },
  { "type": "num", "q": "Un sentiero misura 4,8 cm su una carta 1:25.000. Quanti metri è lungo (in orizzontale)?", "answer": 1200, "tol": 0, "unit": "m", "explain": "4,8 × 25.000 = 120.000 cm = 1.200 m." },
  { "type": "tf", "q": "Il GPS può calcolare la posizione con un solo satellite.", "answer": false, "explain": "Servono almeno quattro satelliti: tre per la posizione e uno per correggere l'orologio del ricevitore." },
  { "type": "mc", "q": "Un dato GIS \"vettoriale\" è, per esempio…", "options": ["Una foto satellitare", "Il poligono che rappresenta il confine di un comune", "Una griglia di pixel di altitudine"], "answer": 1, "explain": "I dati vettoriali sono punti, linee e poligoni; le foto satellitari e le griglie di altitudine sono dati raster." },
  { "type": "mc", "q": "Quale tra queste proiezioni conserva le aree ma deforma le forme?", "options": ["Mercatore", "Gall-Peters", "Nessuna delle due"], "answer": 1, "explain": "Gall-Peters è equivalente: mantiene i rapporti fra le aree, ma le forme risultano allungate." }
 ]
});
