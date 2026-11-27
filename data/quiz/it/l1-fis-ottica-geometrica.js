QBANK("it", "l1-fis-ottica-geometrica", {
 "f": [
  { "type": "mc", "q": "Come si propaga la luce in un mezzo omogeneo e trasparente?", "options": ["In linea retta", "A zig zag", "In cerchio"], "answer": 0, "explain": "In un mezzo omogeneo la luce si propaga in linea retta: è la base dell'ottica geometrica." },
  { "type": "tf", "q": "Un raggio che incide con angolo di 40° su uno specchio piano viene riflesso con un angolo di 40°.", "answer": true, "explain": "Legge della riflessione: angolo di riflessione = angolo di incidenza." },
  { "type": "mc", "q": "Qual è, circa, la velocità della luce nel vuoto?", "options": ["300 m/s", "300 000 km/s", "30 000 km/s"], "answer": 1, "explain": "c ≈ 3,00 × 10^8 m/s = 300 000 km/s." },
  { "type": "text", "q": "Come si chiama la retta perpendicolare alla superficie nel punto in cui arriva un raggio?", "answer": ["normale", "la normale"], "explain": "Gli angoli di incidenza, riflessione e rifrazione si misurano rispetto alla normale." },
  { "type": "mc", "q": "Quale tipo di lente è usata come lente d'ingrandimento?", "options": ["Convergente", "Divergente", "Nessuna delle due"], "answer": 0, "explain": "Una lente convergente con l'oggetto tra lente e fuoco dà un'immagine virtuale, diritta e ingrandita." }
 ],
 "m": [
  { "type": "num", "q": "Uno specchio sferico ha raggio di curvatura 50 cm. Quanto vale la sua distanza focale (in cm, in valore assoluto)?", "answer": 25, "unit": "cm", "explain": "f = R/2 = 25 cm." },
  { "type": "num", "q": "Calcola l'indice di rifrazione di un materiale in cui la luce viaggia a 2,0 × 10^8 m/s (c = 3,0 × 10^8 m/s).", "answer": 1.5, "tol": 0.01, "explain": "n = c/v = 1,5: è il valore tipico del vetro." },
  { "type": "mc", "q": "Un raggio passa dal vetro all'aria con incidenza obliqua. Il raggio rifratto…", "options": ["si avvicina alla normale", "si allontana dalla normale", "resta sulla stessa direzione"], "answer": 1, "explain": "Passando a un mezzo con indice minore, il raggio si allontana dalla normale." },
  { "type": "num", "q": "Una lente ha distanza focale di 50 cm (0,5 m). Quante diottrie ha?", "answer": 2, "unit": "D", "explain": "P = 1/f = 1/0,5 = 2 D." },
  { "type": "tf", "q": "L'immagine in uno specchio piano è reale e capovolta.", "answer": false, "explain": "È virtuale, diritta e delle stesse dimensioni dell'oggetto, simmetrica rispetto allo specchio." }
 ],
 "d": [
  { "type": "num", "q": "Una lente convergente ha f = 12 cm. Un oggetto è posto a 36 cm dalla lente. A quale distanza (in cm) si forma l'immagine?", "answer": 18, "unit": "cm", "explain": "1/q = 1/12 − 1/36 = 3/36 − 1/36 = 2/36, quindi q = 18 cm (G = −0,5)." },
  { "type": "num", "q": "Un raggio incide dall'aria (n = 1) su un liquido di indice n = 1,6 con un angolo di 53,1° (sin 53,1° = 0,8). Quanto vale sin θ2?", "answer": 0.5, "tol": 0.01, "explain": "sin θ2 = 0,8/1,6 = 0,5, cioè θ2 = 30°." },
  { "type": "mc", "q": "Un raggio nel vetro (n = 1,5) incide sulla superficie vetro-aria con un angolo di 50°. Che cosa succede?", "options": ["Esce nell'aria avvicinandosi alla normale", "Si ha riflessione totale", "Esce senza deviare"], "answer": 1, "explain": "L'angolo limite vetro-aria vale arcsin(1/1,5) ≈ 41,8°. Poiché 50° è maggiore, non c'è raggio rifratto: tutta la luce è riflessa." },
  { "type": "tf", "q": "Una persona con miopia ha bisogno di una lente con potere diottrico negativo.", "answer": true, "explain": "La miopia si corregge con lenti divergenti, che hanno distanza focale negativa e quindi diottrie negative." },
  { "type": "mc", "q": "Un oggetto è posto tra il vertice e il fuoco di uno specchio concavo. L'immagine è…", "options": ["reale, capovolta e rimpicciolita", "virtuale, diritta e ingrandita", "virtuale, diritta e rimpicciolita"], "answer": 1, "explain": "È la situazione dello specchio per la barba: se p < f, q risulta negativo (virtuale), e G = −q/p è positivo e maggiore di 1." }
 ]
});
