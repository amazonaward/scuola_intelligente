QBANK("it", "l1-fis-errori-misura", {
 "f": [
  { "type": "mc", "q": "Per un righello diviso in millimetri, qual è la sensibilità?", "options": ["1 mm", "1 cm", "0,1 mm"], "answer": 0, "explain": "La sensibilità è la divisione più piccola della scala: 1 mm." },
  { "type": "tf", "q": "Ogni misura è affetta da un errore, cioè da un'incertezza.", "answer": true, "explain": "Nessuno strumento è perfetto: ogni misura ha un'incertezza." },
  { "type": "mc", "q": "Con quale operazione si ottiene il valore medio di più misure?", "options": ["Somma delle misure divisa per il numero di misure", "Prodotto delle misure", "Differenza tra massimo e minimo"], "answer": 0, "explain": "Il valore medio è la somma divisa per N." },
  { "type": "num", "q": "Calcola la media di 4 cm, 6 cm e 8 cm.", "answer": 6, "tol": 0, "unit": "cm", "explain": "(4 + 6 + 8)/3 = 18/3 = 6 cm." },
  { "type": "text", "q": "Come si chiama il valore massimo che uno strumento può misurare?", "answer": ["portata", "la portata"], "explain": "È la portata dello strumento." }
 ],
 "m": [
  { "type": "num", "q": "Misure: 5,2 s; 5,6 s; 5,4 s. Calcola l'errore assoluto come semidispersione.", "answer": 0.2, "tol": 0.001, "unit": "s", "explain": "(5,6 − 5,2)/2 = 0,2 s." },
  { "type": "num", "q": "Una misura è (20 ± 1) cm. Quanto vale l'errore percentuale?", "answer": 5, "tol": 0.01, "unit": "%", "explain": "1/20 = 0,05, cioè 5 %." },
  { "type": "mc", "q": "Quante cifre significative ha 0,0705?", "options": ["2", "3", "4", "5"], "answer": 1, "explain": "Gli zeri iniziali non contano; 7, 0, 5 sono significativi: 3 cifre." },
  { "type": "tf", "q": "Un errore casuale si riduce aumentando il numero di misure e facendo la media.", "answer": true, "explain": "Gli errori casuali, andando in più e in meno, in parte si compensano." },
  { "type": "mc", "q": "Un termometro dà sempre 2 gradi in più del valore reale. Che errore è?", "options": ["Sistematico", "Casuale", "Grossolano", "Nullo"], "answer": 0, "explain": "Sposta tutte le misure nello stesso verso." }
 ],
 "d": [
  { "type": "mc", "q": "Un rettangolo ha lati (4,0 ± 0,1) cm e (2,0 ± 0,1) cm. Quanto vale l'errore assoluto del perimetro?", "options": ["0,2 cm", "0,4 cm", "0,6 cm", "0,3 cm"], "answer": 1, "explain": "Il perimetro è 2(a + b): gli errori assoluti si sommano per ogni lato: 4 × 0,1 = 0,4 cm." },
  { "type": "mc", "q": "Quale delle due misure è migliore: (100 ± 2) m oppure (10,0 ± 0,5) cm?", "options": ["La prima, perché 2 % è meno di 5 %", "La seconda, perché 0,5 < 2", "Sono uguali", "Non si può dire"], "answer": 0, "explain": "Si confrontano gli errori relativi: 2/100 = 2 % contro 0,5/10 = 5 %." },
  { "type": "num", "q": "Calcola 2,5 × 3,24 e arrotonda rispettando le cifre significative. Quante cifre significative ha il risultato?", "answer": 2, "tol": 0, "explain": "Il dato con meno cifre (2,5) ne ha 2: il risultato 8,1 ha 2 cifre." },
  { "type": "tf", "q": "Una misura può essere molto precisa ma poco accurata.", "answer": true, "explain": "Se c'è un errore sistematico, i valori sono vicini tra loro ma lontani dal valore vero." },
  { "type": "mc", "q": "Qual è la scrittura corretta del risultato? Media 21,44 cm, errore 0,15 cm.", "options": ["(21,4 ± 0,2) cm", "(21,44 ± 0,15) cm con 4 cifre", "(21 ± 0,15) cm", "21,4 cm senza errore"], "answer": 0, "explain": "L'errore ha una cifra significativa e il valore ha lo stesso numero di decimali dell'errore." }
 ]
});
