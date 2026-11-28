QBANK("de", "l1-mat-insiemi-numerici", {
 "f": [
  { "type": "mc", "q": "Welche dieser Zahlen ist nicht natürlich?", "options": ["0", "17", "−5"], "answer": 2, "explain": "−5 ist eine negative ganze Zahl: Sie gehört zu ℤ, aber nicht zu ℕ." },
  { "type": "num", "q": "Berechne: 3 + 4 · 5", "answer": 23, "explain": "Zuerst die Multiplikation: 4 · 5 = 20, dann 3 + 20 = 23." },
  { "type": "num", "q": "Wie groß ist 2⁵?", "answer": 32, "explain": "2 · 2 · 2 · 2 · 2 = 32." },
  { "type": "tf", "q": "Die Zahl 1/2 ist eine rationale Zahl.", "answer": true, "explain": "Sie ist ein Bruch zweier ganzer Zahlen mit Nenner ungleich null." },
  { "type": "text", "q": "Wie heißt die Zahl, die unter dem Bruchstrich steht?", "answer": ["Nenner", "der Nenner", "nenner", "der nenner"], "explain": "Der Nenner gibt an, in wie viele gleiche Teile das Ganze geteilt ist." }
 ],
 "m": [
  { "type": "num", "q": "Berechne: (−3) · (−4) + (−2)", "answer": 10, "explain": "(−3)(−4) = +12; 12 + (−2) = 10." },
  { "type": "num", "q": "Berechne: 5⁷ : 5⁴ (als Zahl)", "answer": 125, "explain": "Gleiche Basis: 5^(7−4) = 5³ = 125." },
  { "type": "mc", "q": "Wie viel ist 1/2 + 1/3?", "options": ["2/5", "5/6", "1/6"], "answer": 1, "explain": "Hauptnenner 6: 3/6 + 2/6 = 5/6." },
  { "type": "mc", "q": "Welcher dieser Brüche ergibt eine endliche Dezimalzahl?", "options": ["1/3", "1/6", "1/8"], "answer": 2, "explain": "8 = 2³ hat nur den Faktor 2: 1/8 = 0,125. Die 3 im Nenner (1/3 und 1/6) ergibt eine periodische Dezimalzahl." },
  { "type": "tf", "q": "Der Wert von −4² ist 16.", "answer": false, "explain": "Die Potenz hat Vorrang vor dem Minuszeichen: −4² = −(4²) = −16. Dagegen ist (−4)² = 16." }
 ],
 "d": [
  { "type": "mc", "q": "Welcher ist der erzeugende Bruch von 0,2(7)?", "options": ["27/99", "25/90", "27/90"], "answer": 1, "explain": "Zähler: 27 − 2 = 25; Nenner: 90 (eine 9 für die Periode, eine 0 für die Vorperiode). 25/90 = 5/18." },
  { "type": "num", "q": "Berechne: (2/3)⁻² und schreibe das Ergebnis als Dezimalzahl.", "answer": 2.25, "tol": 0.001, "explain": "(2/3)⁻² = (3/2)² = 9/4 = 2,25." },
  { "type": "num", "q": "Berechne: 3,(6) − 1,(3)", "answer": 2.33, "tol": 0.01, "explain": "3,(6) = 33/9 = 11/3 und 1,(3) = 12/9 = 4/3; die Differenz ist 7/3 ≈ 2,33." },
  { "type": "tf", "q": "Die Gleichung 3x = 7 hat eine Lösung in ℤ.", "answer": false, "explain": "Die Lösung ist x = 7/3, keine ganze Zahl: Sie hat nur in ℚ eine Lösung." },
  { "type": "mc", "q": "Welcher Beweis zeigt, dass √2 nicht rational ist?", "options": ["Eine numerische Überprüfung bis zu 1000 Stellen", "Ein Widerspruchsbeweis: Wäre a/b gekürzt, wären a und b beide gerade", "Die Tatsache, dass √2 unendlich viele Ziffern hat"], "answer": 1, "explain": "Aus a² = 2b² folgt, dass a gerade ist, dann dass b gerade ist: Widerspruch dazu, dass a/b vollständig gekürzt ist. Auch 1/3 = 0,(3) hat unendlich viele Ziffern und ist rational." }
 ]
});
