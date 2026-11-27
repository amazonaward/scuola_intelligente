QBANK("it", "l4-sci-acidi-basi", {
 "f": [
  { "type": "mc", "q": "Che pH ha l'acqua pura a 25 °C?", "options": ["7", "0", "14", "1"], "answer": 0, "explain": "L'acqua pura è neutra: [H₃O⁺] = [OH⁻] = 10⁻⁷ M, quindi pH 7." },
  { "type": "tf", "q": "Una soluzione con pH 2 è acida.", "answer": true, "explain": "Il pH minore di 7 indica una soluzione acida." },
  { "type": "mc", "q": "Quale di queste sostanze è una base?", "options": ["Soda caustica (NaOH)", "Succo di limone", "Aceto", "Acido cloridrico"], "answer": 0, "explain": "NaOH libera ioni OH⁻ in acqua ed è una base forte." },
  { "type": "mc", "q": "Che cosa fa un indicatore come la fenolftaleina?", "options": ["Cambia colore al variare del pH", "Cambia il pH della soluzione", "Neutralizza gli acidi", "Misura la massa"], "answer": 0, "explain": "Gli indicatori sono acidi o basi deboli il cui colore dipende dal pH." },
  { "type": "num", "q": "Quanto vale il pH di una soluzione di HCl 0,1 M?", "answer": 1, "tol": 0.01, "explain": "HCl è un acido forte: [H⁺] = 0,1 = 10⁻¹, pH = 1." }
 ],
 "m": [
  { "type": "mc", "q": "Qual è l'acido coniugato di NH₃?", "options": ["NH₄⁺", "NH₂⁻", "N₂", "HNO₃"], "answer": 0, "explain": "NH₃ accetta un protone e diventa NH₄⁺: la coppia coniugata è NH₄⁺/NH₃." },
  { "type": "num", "q": "Una soluzione ha pOH = 3. Qual è il suo pH?", "answer": 11, "tol": 0.01, "explain": "pH + pOH = 14, quindi pH = 14 − 3 = 11." },
  { "type": "mc", "q": "Quale affermazione sul confronto tra HCl 0,1 M e CH₃COOH 0,1 M è corretta?", "options": ["HCl ha pH più basso perché è completamente dissociato", "Hanno lo stesso pH", "CH₃COOH ha pH più basso", "Nessuno dei due è acido"], "answer": 0, "explain": "A parità di concentrazione, l'acido forte libera più H₃O⁺ di quello debole." },
  { "type": "tf", "q": "Per ogni acido, la base coniugata è tanto più debole quanto più forte è l'acido.", "answer": true, "explain": "Un acido forte cede facilmente il protone; la sua base coniugata (come Cl⁻) non ha alcuna tendenza a riprenderlo." },
  { "type": "num", "q": "10,0 mL di HCl vengono neutralizzati da 20,0 mL di NaOH 0,050 M. Qual è la molarità dell'HCl?", "answer": 0.1, "tol": 0.001, "unit": "mol/L", "explain": "n(NaOH) = 0,050 · 0,0200 = 1,0·10⁻³ mol = n(HCl); M = 1,0·10⁻³ / 0,0100 = 0,10 mol/L." }
 ],
 "d": [
  { "type": "num", "q": "Calcola il pH di Ba(OH)₂ 0,0050 M (base forte, 2 OH⁻ per formula). Risposta con due decimali.", "answer": 12, "tol": 0.01, "explain": "[OH⁻] = 0,010, pOH = 2, pH = 12,00." },
  { "type": "num", "q": "Un tampone ha 0,20 mol di CH₃COOH e 0,40 mol di CH₃COO⁻ nello stesso volume. Con pKa = 4,74, quanto vale il pH? (due decimali)", "answer": 5.04, "tol": 0.02, "explain": "pH = 4,74 + log(0,40/0,20) = 4,74 + 0,30 = 5,04." },
  { "type": "mc", "q": "Il sangue ha pH 7,4. Se il rapporto [HCO₃⁻]/[CO₂ disciolta] è 20 e pKa = 6,1, a quale valore corrisponde il pH?", "options": ["6,1 + log 20 ≈ 7,4", "6,1 − log 20 ≈ 4,8", "6,1 · 20", "6,1 + 20"], "answer": 0, "explain": "Henderson-Hasselbalch: pH = pKa + log(base/acido) = 6,1 + 1,3 = 7,4." },
  { "type": "mc", "q": "Per titolare un acido debole con una base forte, il punto di equivalenza si trova a un pH...", "options": ["maggiore di 7", "minore di 7", "esattamente 7", "uguale a pKa dell'indicatore per definizione"], "answer": 0, "explain": "Al punto di equivalenza è presente solo la base coniugata dell'acido debole, che idrolizza liberando OH⁻." },
  { "type": "tf", "q": "Una soluzione di NH₄Cl in acqua ha pH minore di 7.", "answer": true, "explain": "NH₄⁺ è l'acido coniugato di una base debole e cede protoni all'acqua; Cl⁻ è invece praticamente neutro." }
 ]
});
