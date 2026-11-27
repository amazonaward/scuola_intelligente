QBANK("it", "l1-fis-equilibrio-fluidi", {
 "f": [
  { "type": "mc", "q": "Qual è l'unità di pressione nel Sistema Internazionale?", "options": ["newton", "pascal", "joule"], "answer": 1, "explain": "La pressione si misura in pascal: 1 Pa = 1 N/m²." },
  { "type": "num", "q": "Una forza di 100 N agisce perpendicolarmente su 2 m². Quanta pressione (in Pa) esercita?", "answer": 50, "unit": "Pa", "explain": "p = F/S = 100/2 = 50 Pa." },
  { "type": "tf", "q": "A parità di peso, una persona con gli sci esercita sulla neve una pressione minore di una con gli scarponi.", "answer": true, "explain": "Gli sci hanno una superficie molto maggiore: a parità di forza, la pressione p = F/S è minore." },
  { "type": "text", "q": "Quale scienziato siracusano enunciò il principio sulla spinta ricevuta dai corpi immersi in un fluido?", "answer": ["archimede", "archimede di siracusa"], "explain": "Archimede di Siracusa (III secolo a.C.) formulò il principio che porta il suo nome." },
  { "type": "mc", "q": "Un oggetto affonda in acqua quando la sua densità è…", "options": ["minore di 1000 kg/m³", "uguale a 1000 kg/m³", "maggiore di 1000 kg/m³"], "answer": 2, "explain": "Se la densità del corpo supera quella dell'acqua, il peso prevale sulla spinta e il corpo affonda." }
 ],
 "m": [
  { "type": "num", "q": "Quale pressione (in Pa) esercita l'acqua (ρ = 1000 kg/m³, g = 10 m/s²) a 8 m di profondità, escludendo l'atmosfera?", "answer": 80000, "unit": "Pa", "explain": "p = ρ g h = 1000 × 10 × 8 = 80 000 Pa." },
  { "type": "mc", "q": "Secondo il principio di Pascal, in un fluido in equilibrio una pressione applicata a un punto…", "options": ["resta solo in quel punto", "si trasmette uguale a ogni punto del fluido", "diminuisce con la distanza"], "answer": 1, "explain": "La pressione si trasmette inalterata in tutto il fluido e alle pareti." },
  { "type": "num", "q": "Un torchio idraulico ha pistoni di area 10 cm² e 500 cm². Spingendo il piccolo con 20 N, quale forza (in N) si ottiene sul grande?", "answer": 1000, "unit": "N", "explain": "F2 = F1·S2/S1 = 20 × 500/10 = 1000 N." },
  { "type": "tf", "q": "La spinta di Archimede su un corpo completamente immerso dipende dal volume del corpo ma non dalla sua forma.", "answer": true, "explain": "FA = ρ V g: conta solo il volume di fluido spostato." },
  { "type": "mc", "q": "Un blocco di ghiaccio (917 kg/m³) galleggia in acqua. Quale frazione del suo volume è immersa, circa?", "options": ["8%", "50%", "92%"], "answer": 2, "explain": "La frazione immersa è ρghiaccio/ρacqua = 917/1000, circa il 92%." }
 ],
 "d": [
  { "type": "num", "q": "Un cubo di legno di lato 20 cm e massa 6,4 kg è completamente immerso in acqua (ρ = 1000 kg/m³, g = 10 m/s²). Con quale forza risultante (in N, positiva se verso l'alto) viene spinto?", "answer": 16, "unit": "N", "explain": "V = 0,008 m³: FA = 1000 × 0,008 × 10 = 80 N; P = 6,4 × 10 = 64 N. Risultante verso l'alto: 80 − 64 = 16 N." },
  { "type": "num", "q": "In un tubo ad U contenente acqua da un lato e olio dall'altro, la colonna d'acqua è alta 20 cm. Se la densità dell'olio è 800 kg/m³, quanto è alta (in cm) la colonna d'olio, misurata dalla stessa superficie di separazione?", "answer": 25, "unit": "cm", "explain": "ρ1h1 = ρ2h2: 1000 × 20 = 800 × h, quindi h = 25 cm." },
  { "type": "mc", "q": "Perché la colonna di mercurio di un barometro è alta circa 760 mm, mentre una colonna d'acqua sarebbe alta oltre 10 m?", "options": ["Perché il mercurio è molto più denso dell'acqua (circa 13,6 volte)", "Perché il mercurio è più freddo", "Perché il mercurio non risente della gravità"], "answer": 0, "explain": "La colonna deve avere peso per unità di area pari alla pressione atmosferica: ρ g h = costante. Con ρ 13,6 volte maggiore, h è 13,6 volte minore." },
  { "type": "tf", "q": "Un sub che scende da 10 m a 30 m di profondità in acqua di mare vede la pressione totale aumentare di circa 2 atm.", "answer": true, "explain": "Ogni 10 m di acqua aggiungono circa 1 atm: 20 m in più corrispondono a circa 2 atm in più." },
  { "type": "mc", "q": "Una barca carica di merci affonda di più nell'acqua. Che cosa succede alla spinta di Archimede?", "options": ["Diminuisce", "Aumenta, fino a eguagliare il nuovo peso", "Resta uguale e la barca affonda"], "answer": 1, "explain": "Immergendosi di più la barca sposta più acqua: la spinta cresce finché eguaglia il peso totale e si ristabilisce l'equilibrio." }
 ]
});
