QBANK("de", "l1-mat-frazioni-algebriche", {
 "f": [
  { "type": "mc", "q": "Ein Bruchterm ist sinnvoll, wenn …", "options": ["der Nenner ungleich null ist", "der Zähler ungleich null ist", "die Buchstaben gleich sind"], "answer": 0, "explain": "Man kann nicht durch null teilen: Der Nenner muss ungleich 0 sein." },
  { "type": "num", "q": "Berechne 8/x für x = 4.", "answer": 2, "explain": "8 : 4 = 2." },
  { "type": "tf", "q": "x/x = 1 für jeden Wert von x ungleich null.", "answer": true, "explain": "Eine Zahl durch sich selbst geteilt ergibt 1, solange sie nicht 0 ist." },
  { "type": "mc", "q": "Die Existenzbedingungen von 5/(x + 7) sind …", "options": ["x ≠ −7", "x ≠ 7", "x ≠ 5"], "answer": 0, "explain": "x + 7 = 0 für x = −7." },
  { "type": "num", "q": "Berechne (x² − 9)/(x − 3) für x = 8.", "answer": 11, "explain": "Es lässt sich zu x + 3 = 11 kürzen. Kontrolle: 55/5 = 11." }
 ],
 "m": [
  { "type": "mc", "q": "Kürze (2x + 6)/(x + 3).", "options": ["2", "x + 2", "2x"], "answer": 0, "explain": "2(x + 3)/(x + 3) = 2, mit x ≠ −3." },
  { "type": "num", "q": "x/2 + x/3 = 5x/6. Wie groß ist der Wert für x = 6?", "answer": 5, "explain": "5 · 6/6 = 5. Tatsächlich: 3 + 2 = 5." },
  { "type": "mc", "q": "Die Existenzbedingungen von 1/(x² − x) sind …", "options": ["x ≠ 0 und x ≠ 1", "x ≠ 1", "x ≠ 0"], "answer": 0, "explain": "x² − x = x(x − 1) wird für x = 0 und x = 1 null." },
  { "type": "tf", "q": "(a + b)/a = 1 + b, wenn man a kürzt.", "answer": false, "explain": "(a + b)/a = 1 + b/a. Das a ist kein Faktor des Zählers." },
  { "type": "mc", "q": "x/(x + 1) · (x + 1)/x² =", "options": ["1/x", "x", "1/x²"], "answer": 0, "explain": "Man streicht x + 1 und ein x: Es bleibt 1/x, mit x ≠ 0, −1." }
 ],
 "d": [
  { "type": "mc", "q": "1/(x − 1) − 1/(x + 1) =", "options": ["2/(x² − 1)", "0", "2x/(x² − 1)"], "answer": 0, "explain": "[(x + 1) − (x − 1)]/(x² − 1) = 2/(x² − 1)." },
  { "type": "num", "q": "(x³ − x)/(x² − x) lässt sich zu x + 1 kürzen. Berechne den Wert für x = 9.", "answer": 10, "explain": "x(x − 1)(x + 1)/[x(x − 1)] = x + 1 = 10." },
  { "type": "mc", "q": "Wie lauten die Existenzbedingungen von x/(x − 1) : (x + 2)/(x − 3)?", "options": ["x ≠ 1, x ≠ 3", "x ≠ 1, x ≠ 3, x ≠ −2", "x ≠ −2"], "answer": 1, "explain": "Die Nenner müssen ungleich null sein (x ≠ 1, x ≠ 3), und auch der Divisor: x + 2 ≠ 0." },
  { "type": "num", "q": "Zwei parallel geschaltete Widerstände von 12 Ω und 4 Ω: Wie groß ist der Ersatzwiderstand in Ohm?", "answer": 3, "unit": "Ω", "explain": "R = 12·4/(12 + 4) = 48/16 = 3 Ω." },
  { "type": "tf", "q": "(x² − 4)/(x − 2) und x + 2 stimmen für jedes x überein, auch für x = 2.", "answer": false, "explain": "Der Bruch existiert für x = 2 nicht, x + 2 dagegen schon: Sie stimmen nur für x ≠ 2 überein." }
 ]
});
