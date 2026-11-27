QBANK("it", "l2-art-proiezioni-solidi", {
 "f": [
  { "type": "mc", "q": "Quale forma ha la pianta di un cilindro retto appoggiato sul PO?", "options": ["Un cerchio", "Un rettangolo", "Un triangolo"], "answer": 0, "explain": "La base è un cerchio parallelo al PO." },
  { "type": "tf", "q": "Gli spigoli nascosti si disegnano con linea tratteggiata.", "answer": true, "explain": "È la convenzione del disegno tecnico." },
  { "type": "mc", "q": "Quale forma ha il prospetto di un cono retto?", "options": ["Un triangolo isoscele", "Un cerchio", "Un rettangolo"], "answer": 0, "explain": "Base di lunghezza 2r e altezza h." },
  { "type": "text", "q": "Come si chiama la figura che si ottiene tagliando un solido con un piano?", "answer": ["sezione", "la sezione", "figura di sezione"], "explain": "La sezione." },
  { "type": "mc", "q": "Quale solido si proietta come cerchio in tutte le viste?", "options": ["Sfera", "Cubo", "Cono"], "answer": 0, "explain": "La sfera è simmetrica in ogni direzione." }
 ],
 "m": [
  { "type": "mc", "q": "Che figura è la sezione di un cilindro con un piano obliquo (non parallelo alla base)?", "options": ["Ellisse", "Quadrato", "Triangolo"], "answer": 0, "explain": "Un piano obliquo dà un'ellisse." },
  { "type": "num", "q": "Quanti sviluppi diversi ha il cubo?", "answer": 11, "tol": 0, "explain": "Undici." },
  { "type": "tf", "q": "Lo sviluppo laterale di un cilindro retto è un rettangolo.", "answer": true, "explain": "Con lati 2πr e h." },
  { "type": "num", "q": "Un cono ha r = 2 e a = 8. Quanti gradi misura l'angolo del settore?", "answer": 90, "tol": 0, "unit": "°", "explain": "360 × 2 / 8 = 90°." },
  { "type": "mc", "q": "Quale piano di taglio dà un cerchio in un cono?", "options": ["Parallelo alla base", "Parallelo a una generatrice", "Parallelo all'asse"], "answer": 0, "explain": "Parallelo alla base." }
 ],
 "d": [
  { "type": "mc", "q": "Un cono ha r = 3 e apotema 5. Quanto vale l'altezza?", "options": ["4", "2", "8"], "answer": 0, "explain": "h = √(5² − 3²) = √16 = 4." },
  { "type": "num", "q": "Superficie laterale di un cono con r = 3 e a = 5 (in unità di π)?", "answer": 15, "tol": 0, "explain": "S = π · r · a = 15π." },
  { "type": "tf", "q": "Un piano che taglia un cubo passando per i punti medi di sei spigoli dà un esagono regolare.", "answer": true, "explain": "È una sezione celebre del cubo." },
  { "type": "mc", "q": "Perché la sfera non è sviluppabile?", "options": ["Non si può stendere su un piano senza deformarla", "Non ha superficie", "È troppo piccola"], "answer": 0, "explain": "La curvatura gaussiana è positiva (Gauss)." },
  { "type": "order", "q": "Ordina i passi per disegnare un solido.", "items": ["Tracciare la linea di terra", "Disegnare la pianta in vera forma", "Tracciare i richiami verticali", "Disegnare il prospetto con le altezze"], "explain": "Dalla LT alle viste." }
 ]
});
