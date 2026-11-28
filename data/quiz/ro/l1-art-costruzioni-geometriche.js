QBANK("ro", "l1-art-costruzioni-geometriche", {
 f: [
  { type: "mc", q: "Ce instrumente admite geometria euclidiană clasică pentru construcții?", options: ["Rigla negradată și compasul", "Rigla gradată și raportorul", "Doar echerele"], answer: 0, explain: "Euclid admite doar dreapta (rigla) și cercul (compasul)." },
  { type: "num", q: "Câte grade măsoară bisectoarea unui unghi de 60° față de fiecare latură?", answer: 30, tol: 0, unit: "°", explain: "60° : 2 = 30°." },
  { type: "tf", q: "Două drepte perpendiculare pe aceeași dreaptă sunt paralele între ele.", answer: true, explain: "Formează unghiuri corespondente egale (90°), deci sunt paralele." },
  { type: "mc", q: "Câte laturi are un hexagon?", options: ["5", "6", "8"], answer: 1, explain: "Hexa- înseamnă șase." },
  { type: "text", q: "Cum se numește dreapta care atinge un cerc într-un singur punct?", answer: ["tangentă", "tangenta", "o tangentă", "tangenta la cerc"], explain: "Este tangenta, perpendiculară pe rază în punctul de contact." }
 ],
 m: [
  { type: "mc", q: "Latura unui pătrat înscris într-un cerc de rază r este…", options: ["r", "r√2", "2r"], answer: 1, explain: "Diagonala pătratului este diametrul 2r, deci latura este 2r/√2 = r√2." },
  { type: "num", q: "Un hexagon regulat este înscris într-un cerc cu raza de 7 cm. Cât măsoară perimetrul?", answer: 42, tol: 0, unit: "cm", explain: "Latura este egală cu raza: 6 × 7 = 42 cm." },
  { type: "mc", q: "Ce figură este ACBD în construcția mediatoarei, cu AC = BC = AD = BD?", options: ["Un romb", "Un trapez", "Un dreptunghi care nu este pătrat"], answer: 0, explain: "Patru laturi egale: este un romb, cu diagonale perpendiculare." },
  { type: "tf", q: "Cu rigla și compasul se poate construi poligonul regulat cu 17 laturi.", answer: true, explain: "A demonstrat-o Gauss în 1796: 17 este un număr prim Fermat." },
  { type: "order", q: "Ordonează pașii pentru a împărți AB în 3 părți egale.", items: ["Trasează din A o semidreaptă", "Raportează 3 segmente egale pe semidreaptă", "Unește ultimul punct cu B", "Trasează paralelele din punctele 1 și 2"], explain: "Este construcția bazată pe teorema lui Thales." }
 ],
 d: [
  { type: "mc", q: "Care dintre cele trei probleme NU se poate rezolva cu rigla și compasul?", options: ["Bisecția unui unghi", "Trisecțiunea unui unghi oarecare", "Construcția mediatoarei unui segment"], answer: 1, explain: "Trisecțiunea unui unghi oarecare este imposibilă doar cu rigla și compasul." },
  { type: "num", q: "O racordare are raza de 5 cm și unește două drepte perpendiculare. La ce distanță de vârful unghiului se află centrul arcului? (rotunjește la număr întreg: 5√2)", answer: 7, tol: 0.1, unit: "cm", explain: "Centrul este la 5 cm de fiecare dreaptă: se află la 5√2 ≈ 7,07 cm de vârf." },
  { type: "tf", q: "La o racordare exterioară între o dreaptă și un cerc de rază R, centrul arcului de rază r se află la distanța R + r de centrul cercului.", answer: true, explain: "Două cercuri tangente exterior au centrele la distanța R + r." },
  { type: "mc", q: "Raportul dintre diagonala și latura pentagonului regulat este…", options: ["√2", "φ = (1+√5)/2", "√3"], answer: 1, explain: "Este numărul de aur, aproximativ 1,618." },
  { type: "text", q: "Cum se numește mulțimea tuturor punctelor care îndeplinesc aceeași proprietate geometrică (de exemplu punctele egal depărtate de două puncte date)?", answer: ["loc geometric", "locul geometric", "un loc geometric", "loc"], explain: "Este un loc geometric: mediatoarea unui segment este locul punctelor egal depărtate de extremități." }
 ]
});
