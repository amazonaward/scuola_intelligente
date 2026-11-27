QBANK("de", "l1-mat-insiemi-logica", {
 "f": [
  { "type": "mc", "q": "Welches Symbol zeigt an, dass ein Element zu einer Menge gehört?", "options": ["∈", "⊂", "∪"], "answer": 0, "explain": "∈ liest man \"gehört zu\": 3 ∈ {1, 2, 3}. Das Symbol ⊂ verwendet man zwischen Mengen (Teilmenge)." },
  { "type": "num", "q": "A = {1, 3, 5} und B = {3, 5, 7, 9}. Wie viele Elemente hat A ∩ B?", "answer": 2, "explain": "Der Schnitt ist {3, 5}: 2 Elemente." },
  { "type": "tf", "q": "Die leere Menge ist Teilmenge jeder Menge.", "answer": true, "explain": "Es gibt kein Element von ∅, das nicht zu A gehört, also gilt immer ∅ ⊆ A." },
  { "type": "mc", "q": "Welche von diesen ist eine Aussage?", "options": ["Wie spät ist es?", "9 ist ein Vielfaches von 3", "Mach die Hausaufgaben!"], "answer": 1, "explain": "Eine Aussage ist wahr oder falsch: \"9 ist ein Vielfaches von 3\" ist wahr. Die anderen sind eine Frage und ein Befehl." },
  { "type": "text", "q": "Wie heißt die Menge ohne Elemente?", "answer": ["leere Menge", "die leere Menge", "leer", "insieme vuoto"], "explain": "Es ist die leere Menge, bezeichnet mit ∅ oder { }." }
 ],
 "m": [
  { "type": "num", "q": "In einer Klasse mit 25 Schülern haben 14 einen Hund, 9 eine Katze und 4 beides. Wie viele haben mindestens eines der beiden Tiere?", "answer": 19, "explain": "|H ∪ K| = 14 + 9 − 4 = 19." },
  { "type": "num", "q": "Wie viele Teilmengen hat eine Menge mit 6 Elementen?", "answer": 64, "explain": "2⁶ = 64." },
  { "type": "mc", "q": "Was ist die Negation von \"es gibt eine natürliche Zahl n mit n² = 10\"?", "options": ["Für jede natürliche Zahl n gilt n² ≠ 10", "Es gibt eine natürliche Zahl n mit n² ≠ 10", "Für jede natürliche Zahl n gilt n² = 10"], "answer": 0, "explain": "Die Negation von ∃ ist ∀ mit negiertem Prädikat: Keine natürliche Zahl hat das Quadrat 10." },
  { "type": "mc", "q": "Die Aussage p ∨ q ist falsch, wenn ...", "options": ["p und q beide falsch sind", "nur eine der beiden falsch ist", "p und q beide wahr sind"], "answer": 0, "explain": "Der Junktor \"oder\" (einschließend) ist nur falsch, wenn beide falsch sind." },
  { "type": "tf", "q": "\"Wenn eine Zahl ein Vielfaches von 4 ist, dann ist sie gerade\" ist wahr, und auch ihre Umkehrung \"wenn eine Zahl gerade ist, dann ist sie ein Vielfaches von 4\" ist wahr.", "answer": false, "explain": "Die Umkehrung ist falsch: 6 ist gerade, aber kein Vielfaches von 4." }
 ],
 "d": [
  { "type": "num", "q": "Von 100 Touristen haben 60 Rom besucht, 50 Florenz und 20 keine der beiden. Wie viele haben beide besucht?", "answer": 30, "explain": "Mindestens eine Stadt haben 100 − 20 = 80 besucht. Aus |R ∪ F| = |R| + |F| − |R ∩ F|: 80 = 110 − x, also x = 30." },
  { "type": "mc", "q": "Welche Äquivalenz ist richtig (De Morgan)?", "options": ["¬(p ∧ q) ≡ ¬p ∧ ¬q", "¬(p ∧ q) ≡ ¬p ∨ ¬q", "¬(p ∨ q) ≡ ¬p ∨ ¬q"], "answer": 1, "explain": "Die Negation eines \"und\" ist das \"oder\" der Negationen und umgekehrt: ¬(p ∧ q) ≡ ¬p ∨ ¬q; ¬(p ∨ q) ≡ ¬p ∧ ¬q." },
  { "type": "tf", "q": "Die Aussage (p ⇒ q) ist logisch äquivalent zu (¬q ⇒ ¬p).", "answer": true, "explain": "Das ist die Kontraposition: Beide haben dieselbe Wahrheitstabelle." },
  { "type": "num", "q": "A = {1, 2, 3} und B = {a, b}. Wie viele Elemente hat A × B?", "answer": 6, "explain": "3 × 2 = 6 Paare: (1,a), (1,b), (2,a), (2,b), (3,a), (3,b)." },
  { "type": "mc", "q": "\"Einen Durchmesser zu haben ist eine notwendige Bedingung dafür, ein Kreis zu sein\" bedeutet ...", "options": ["Wenn es ein Kreis ist, dann hat es einen Durchmesser", "Wenn es einen Durchmesser hat, dann ist es ein Kreis", "Kreis und Durchmesser hängen nicht zusammen"], "answer": 0, "explain": "Q ist eine notwendige Bedingung für P, wenn P ⇒ Q: Jeder Kreis hat einen Durchmesser, aber nicht alles mit einem Durchmesser ist ein Kreis (zum Beispiel die Kugel)." }
 ]
});
