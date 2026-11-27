QBANK("it", "l1-art-proiezioni-ortogonali", {
 f: [
  { type: "mc", q: "Come si chiama la vista di un oggetto dall'alto nel disegno tecnico?", options: ["Pianta", "Prospetto", "Sezione"], answer: 0, explain: "La vista dall'alto è la pianta (proiezione sul PO)." },
  { type: "tf", q: "Nella proiezione ortogonale i raggi proiettanti sono perpendicolari al piano.", answer: true, explain: "È proprio la definizione di proiezione ortogonale." },
  { type: "text", q: "Con quale nome si indica il piano verticale di proiezione, in sigla di due lettere?", answer: ["pv", "p.v."], explain: "PV: piano verticale, su cui si proietta il prospetto." },
  { type: "mc", q: "Quale solido ha la pianta circolare e il prospetto rettangolare?", options: ["Cilindro", "Cubo", "Piramide"], answer: 0, explain: "Il cilindro ad asse verticale." },
  { type: "num", q: "Quante viste principali (pianta, prospetto, fianco) servono di solito per definire un solido?", answer: 3, tol: 0, explain: "Le tre viste principali, anche se spesso bastano due." }
 ],
 m: [
  { type: "mc", q: "Un quadrato parallelo al PO, in prospetto appare come…", options: ["Un quadrato", "Un segmento orizzontale", "Un punto"], answer: 1, explain: "Un piano parallelo al PO è perpendicolare al PV: ridotto a un segmento parallelo alla linea di terra." },
  { type: "mc", q: "Qual è la pianta di una piramide retta a base quadrata?", options: ["Un triangolo", "Un quadrato con le diagonali", "Un cerchio"], answer: 1, explain: "Si vede la base e i quattro spigoli laterali come diagonali." },
  { type: "num", q: "Un parallelepipedo misura 10 cm di larghezza, 6 di profondità e 4 di altezza. Quanto vale l'area del rettangolo della pianta?", answer: 60, tol: 0, unit: "cm²", explain: "La pianta mostra larghezza × profondità: 10 × 6 = 60 cm²." },
  { type: "tf", q: "Un segmento perpendicolare al PV si proietta in prospetto come un punto.", answer: true, explain: "Il raggio proiettante coincide con il segmento." },
  { type: "text", q: "Quale linea sottile mette in corrispondenza le proiezioni dello stesso punto su due viste?", answer: ["linea di richiamo", "richiamo", "la linea di richiamo"], explain: "La linea di richiamo, perpendicolare alla linea di terra." }
 ],
 d: [
  { type: "mc", q: "Nel metodo americano (terzo diedro), dove si disegna la pianta rispetto al prospetto?", options: ["Sotto", "Sopra", "A destra"], answer: 1, explain: "Nel metodo americano la pianta sta sopra il prospetto, al contrario del metodo europeo." },
  { type: "mc", q: "Un cerchio inclinato rispetto al piano di proiezione si proietta come…", options: ["Una circonferenza più piccola", "Un'ellisse", "Un rombo"], answer: 1, explain: "La proiezione ortogonale di un cerchio inclinato è un'ellisse con asse maggiore uguale al diametro." },
  { type: "num", q: "Un segmento lungo 10 cm è parallelo al piano di proiezione. Quanto misura la sua proiezione ortogonale?", answer: 10, tol: 0, unit: "cm", explain: "Un segmento parallelo al piano si proietta in vera grandezza." },
  { type: "tf", q: "Il metodo della geometria descrittiva fu inizialmente mantenuto segreto perché utile in campo militare.", answer: true, explain: "Monge lo usò per le fortificazioni; fu reso pubblico dopo la Rivoluzione francese." },
  { type: "order", q: "Metti in ordine: costruzione del fianco a partire da pianta e prospetto.", items: ["Traccia richiami orizzontali dal prospetto", "Riporta le profondità dalla pianta con una linea a 45°", "Unisci i punti ottenuti", "Ripassa spigoli visibili e nascosti"], explain: "Le altezze vengono dal prospetto, le profondità dalla pianta." }
 ]
});
