QBANK("ro", "l1-art-proiezioni-ortogonali", {
 f: [
  { type: "mc", q: "Cum se numește vederea unui obiect de sus în desenul tehnic?", options: ["Vedere de sus (plan orizontal)", "Elevație", "Secțiune"], answer: 0, explain: "Vederea de sus este proiecția pe PO." },
  { type: "tf", q: "În proiecția ortogonală, razele proiectante sunt perpendiculare pe plan.", answer: true, explain: "Chiar aceasta este definiția proiecției ortogonale." },
  { type: "text", q: "Cu ce sigla de două litere se notează planul vertical de proiecție?", answer: ["pv", "p.v."], explain: "PV: planul vertical, pe care se proiectează elevația." },
  { type: "mc", q: "Care solid are vederea de sus circulară și elevația dreptunghiulară?", options: ["Cilindrul", "Cubul", "Piramida"], answer: 0, explain: "Cilindrul cu axa verticală." },
  { type: "num", q: "Câte vederi principale (vedere de sus, elevație, vedere laterală) sunt necesare de obicei pentru a defini un solid?", answer: 3, tol: 0, explain: "Cele trei vederi principale, deși adesea sunt suficiente două." }
 ],
 m: [
  { type: "mc", q: "Un pătrat paralel cu PO apare în elevație ca…", options: ["Un pătrat", "Un segment orizontal", "Un punct"], answer: 1, explain: "Un plan paralel cu PO este perpendicular pe PV: se reduce la un segment paralel cu linia de pământ." },
  { type: "mc", q: "Care este vederea de sus a unei piramide drepte cu baza pătrată?", options: ["Un triunghi", "Un pătrat cu diagonale", "Un cerc"], answer: 1, explain: "Se văd baza și cele patru muchii laterale ca diagonale." },
  { type: "num", q: "Un paralelipiped are 10 cm lățime, 6 cm adâncime și 4 cm înălțime. Cât este aria dreptunghiului din vederea de sus?", answer: 60, tol: 0, unit: "cm²", explain: "Vederea de sus arată lățimea × adâncimea: 10 × 6 = 60 cm²." },
  { type: "tf", q: "Un segment perpendicular pe PV se proiectează în elevație ca un punct.", answer: true, explain: "Raza proiectantă coincide cu segmentul." },
  { type: "text", q: "Care linie subțire pune în corespondență proiecțiile aceluiași punct pe două vederi?", answer: ["linie de ghidaj", "linia de ghidaj", "ghidaj", "linie de legătură", "linia de legătură"], explain: "Linia de ghidaj, perpendiculară pe linia de pământ." }
 ],
 d: [
  { type: "mc", q: "În metoda americană (al treilea diedru), unde se desenează vederea de sus față de elevație?", options: ["Dedesubt", "Deasupra", "La dreapta"], answer: 1, explain: "În metoda americană vederea de sus se află deasupra elevației, invers decât în metoda europeană." },
  { type: "mc", q: "Un cerc înclinat față de planul de proiecție se proiectează ca…", options: ["Un cerc mai mic", "O elipsă", "Un romb"], answer: 1, explain: "Proiecția ortogonală a unui cerc înclinat este o elipsă cu axa mare egală cu diametrul." },
  { type: "num", q: "Un segment lung de 10 cm este paralel cu planul de proiecție. Cât măsoară proiecția sa ortogonală?", answer: 10, tol: 0, unit: "cm", explain: "Un segment paralel cu planul se proiectează în mărime reală." },
  { type: "tf", q: "Metoda geometriei descriptive a fost la început ținută secretă pentru că era utilă în domeniul militar.", answer: true, explain: "Monge a folosit-o pentru fortificații; a fost făcută publică după Revoluția franceză." },
  { type: "order", q: "Pune în ordine: construcția vederii laterale pornind de la vederea de sus și elevație.", items: ["Trasează linii de ghidaj orizontale din elevație", "Reportează adâncimile din vederea de sus cu o linie la 45°", "Unește punctele obținute", "Repasează muchiile vizibile și pe cele ascunse"], explain: "Înălțimile vin din elevație, adâncimile din vederea de sus." }
 ]
});
