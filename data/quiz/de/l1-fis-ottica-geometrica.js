QBANK("de", "l1-fis-ottica-geometrica", {
 "f": [
  { "type": "mc", "q": "Wie breitet sich das Licht in einem homogenen, durchsichtigen Medium aus?", "options": ["Geradlinig", "Im Zickzack", "Im Kreis"], "answer": 0, "explain": "In einem homogenen Medium breitet sich das Licht geradlinig aus: Das ist die Grundlage der geometrischen Optik." },
  { "type": "tf", "q": "Ein Strahl, der unter einem Winkel von 40° auf einen ebenen Spiegel fällt, wird unter einem Winkel von 40° reflektiert.", "answer": true, "explain": "Reflexionsgesetz: Reflexionswinkel = Einfallswinkel." },
  { "type": "mc", "q": "Wie groß ist ungefähr die Lichtgeschwindigkeit im Vakuum?", "options": ["300 m/s", "300 000 km/s", "30 000 km/s"], "answer": 1, "explain": "c ≈ 3,00 × 10^8 m/s = 300 000 km/s." },
  { "type": "text", "q": "Wie heißt die Gerade senkrecht zur Fläche in dem Punkt, an dem ein Strahl auftrifft?", "answer": ["lot", "einfallslot", "das lot", "das einfallslot", "normale", "die normale"], "explain": "Einfalls-, Reflexions- und Brechungswinkel werden gegen das Lot (die Normale) gemessen." },
  { "type": "mc", "q": "Welche Art von Linse wird als Lupe verwendet?", "options": ["Sammellinse", "Zerstreuungslinse", "Keine von beiden"], "answer": 0, "explain": "Eine Sammellinse mit dem Gegenstand zwischen Linse und Brennpunkt liefert ein virtuelles, aufrechtes, vergrößertes Bild." }
 ],
 "m": [
  { "type": "num", "q": "Ein Kugelspiegel hat den Krümmungsradius 50 cm. Wie groß ist seine Brennweite (in cm, als Betrag)?", "answer": 25, "unit": "cm", "explain": "f = R/2 = 25 cm." },
  { "type": "num", "q": "Berechne die Brechzahl eines Materials, in dem sich das Licht mit 2,0 × 10^8 m/s ausbreitet (c = 3,0 × 10^8 m/s).", "answer": 1.5, "tol": 0.01, "explain": "n = c/v = 1,5: Das ist der typische Wert für Glas." },
  { "type": "mc", "q": "Ein Strahl geht von Glas in Luft über und fällt schräg ein. Der gebrochene Strahl …", "options": ["nähert sich dem Lot", "entfernt sich vom Lot", "bleibt in derselben Richtung"], "answer": 1, "explain": "Beim Übergang in ein Medium mit kleinerer Brechzahl entfernt sich der Strahl vom Lot." },
  { "type": "num", "q": "Eine Linse hat die Brennweite 50 cm (0,5 m). Wie viele Dioptrien hat sie?", "answer": 2, "unit": "dpt", "explain": "D = 1/f = 1/0,5 = 2 dpt." },
  { "type": "tf", "q": "Das Bild in einem ebenen Spiegel ist reell und umgekehrt.", "answer": false, "explain": "Es ist virtuell, aufrecht und gleich groß wie der Gegenstand, symmetrisch zum Spiegel." }
 ],
 "d": [
  { "type": "num", "q": "Eine Sammellinse hat f = 12 cm. Ein Gegenstand steht 36 cm von der Linse entfernt. In welchem Abstand (in cm) entsteht das Bild?", "answer": 18, "unit": "cm", "explain": "1/b = 1/12 − 1/36 = 3/36 − 1/36 = 2/36, also b = 18 cm (V = −0,5)." },
  { "type": "num", "q": "Ein Strahl fällt aus Luft (n = 1) auf eine Flüssigkeit mit der Brechzahl n = 1,6 unter einem Winkel von 53,1° (sin 53,1° = 0,8). Wie groß ist sin β?", "answer": 0.5, "tol": 0.01, "explain": "sin β = 0,8/1,6 = 0,5, also β = 30°." },
  { "type": "mc", "q": "Ein Strahl im Glas (n = 1,5) trifft unter einem Winkel von 50° auf die Grenzfläche Glas–Luft. Was geschieht?", "options": ["Er tritt in die Luft aus und nähert sich dem Lot", "Es tritt Totalreflexion auf", "Er tritt aus, ohne abgelenkt zu werden"], "answer": 1, "explain": "Der Grenzwinkel Glas–Luft beträgt arcsin(1/1,5) ≈ 41,8°. Da 50° größer ist, gibt es keinen gebrochenen Strahl: Das gesamte Licht wird reflektiert." },
  { "type": "tf", "q": "Eine kurzsichtige Person braucht eine Linse mit negativer Brechkraft.", "answer": true, "explain": "Kurzsichtigkeit wird mit Zerstreuungslinsen korrigiert, die eine negative Brennweite und damit negative Dioptrien haben." },
  { "type": "mc", "q": "Ein Gegenstand steht zwischen Scheitel und Brennpunkt eines Hohlspiegels. Das Bild ist …", "options": ["reell, umgekehrt und verkleinert", "virtuell, aufrecht und vergrößert", "virtuell, aufrecht und verkleinert"], "answer": 1, "explain": "Das ist die Situation beim Rasierspiegel: Wenn g < f, ergibt sich b negativ (virtuell), und V = −b/g ist positiv und größer als 1." }
 ]
});
