# Coding divertente (`#/coding`)

Codice: `js/coding.js` (motori + interfaccia + testi UI nelle 5 lingue), stile: `css/coding.css`.
Dati caricati solo quando servono con `Z.loadScript`:

| file | contenuto |
|---|---|
| `robot-levels.js` | `window.CODING_ROBOT = { chapters, levels }` – 34 livelli del robot (primaria) |
| `turtle-challenges.js` | `window.CODING_TURTLE = { challenges, examples }` – 22 sfide Logo (medie) + esempi del disegno libero |

Rotte: `#/coding` (scelta), `#/coding/robot` (mappa), `#/coding/robot/<n>`, `#/coding/tartaruga` (sfide),
`#/coding/tartaruga/<n>`, `#/coding/tartaruga/libero`.

Avanzamento (Store): `code:robot:<n>` (`markDone` + `quizResult(id, 'stars', stelle, 3)`),
`code:turtle:<n>` (`markDone` + `quizResult(id, 'check', 1, 1)`), `code:turtle:free` (solo visite).
I programmi lasciati a metà sono salvati per profilo in `localStorage['zainetto-coding-drafts']`.

Tutti i testi dei livelli sono array `[it, en, fr, ru, ro]` (se manca una lingua si usa l'italiano).

## Livelli del robot

```js
{ map: ['TTT*', 'TTT.', 'R...'],      // righe dall'alto; tutte lunghe uguali
  dir: 'E',                            // direzione iniziale: N, E, S, W
  blocks: ['fwd', 'left', 'right'],    // blocchi nella tavolozza: fwd left right pick rep until if fn
  conds: ['wall', 'pathR'],            // (se c'è "if") condizioni scelte toccando il blocco: wall water coin pathR pathL
  max: 6,                              // (facoltativo) numero massimo di blocchi
  sol: { main: [...], fn: [...] },     // soluzione di riferimento (vedi sotto)
  name: [...], goal: [...], hint: [...] }
```

Caselle: `.` prato, `R` partenza, `*` stella (arrivo), `#` muro, `T` albero (ostacolo), `~` acqua (il robot cade),
`c` moneta, `k` chiave, `D` porta (si apre entrando con una chiave, che viene consumata).

Si vince quando il robot è sulla stella **e** ha raccolto tutte le monete (le chiavi non contano).
Si perde sbattendo contro ostacoli o porte chiuse, cadendo in acqua, raccogliendo dove non c'è niente,
o superando 800 passi (ciclo infinito).

Soluzione compatta: `'F'` avanti, `'L'` sinistra, `'R'` destra, `'P'` raccogli, `'C'` chiama la funzione,
`['rep', n, [...]]`, `['until', [...]]` (ripeti fino alla stella), `['if', cond, [...allora], [...altrimenti]]`.
Le stelle si calcolano dalla lunghezza della soluzione (ogni blocco conta 1, contenitori compresi, funzione compresa):
3 stelle se si usano al massimo quei blocchi, 2 fino a +2, altrimenti 1. Il pulsante «Soluzione» compare dopo 3 tentativi.

Verifica: in Node, `global.window = global; require('js/coding.js')` espone `Coding.solveRobot(level, prog)`
(con `prog = { main: Coding.fromShort(sol.main), fn: Coding.fromShort(sol.fn) }`) e `Coding.runLogo(src)`.

## Sfide della tartaruga

```js
{ sol: 'ripeti 4 [avanti 160 destra 90]',   // codice di riferimento: il disegno-bersaglio è il suo risultato
  need: ['repeat'],                          // (facoltativo) costrutti obbligatori: repeat, to, make, if, recursion
  name: [...], goal: [...], hint: [...] }
```

Controllo automatico (`Coding.compareDrawing`): si confrontano i segmenti tracciati a penna giù con quelli del bersaglio,
campionando punti ogni 3 unità con tolleranza 5. Servono ≥ 96 % di copertura in entrambe le direzioni (niente pezzi
mancanti, niente pezzi in più). Posizione libera (si centrano i disegni), ammessi rotazioni di 90° e specchio.
La tela va da −210 a +210; la tartaruga parte da (0, 0) guardando in su.

`examples`: `{ name: [...], code: '...' }` per il menu «Esempi» del disegno libero.

## Linguaggio Logo (interprete in `js/coding.js`, senza eval)

| italiano | inglese | |
|---|---|---|
| `avanti N` / `av` | `forward N` / `fd` | |
| `indietro N` | `back N` / `bk` | |
| `destra A` / `sinistra A` | `right A` / `left A` (`rt`, `lt`) | gradi |
| `penna su` / `penna giù` | `penup` / `pendown` (`pu`, `pd`) | |
| `colore rosso` / `colore #f80` / `colore N` | `color red` … | N = tavolozza 0–15 |
| `spessore N` | `width N` | |
| `ripeti N [ … ]` | `repeat N [ … ]` | `ripetizione` / `repcount` = giro attuale |
| `metti lato 10` | `make "side 10` | si legge con `:lato` |
| `per nome :a :b … fine` | `to name :a :b … end` | procedure, ricorsione |
| `se cond [ … ] altrimenti [ … ]` | `if cond [ … ] else [ … ]`, `ifelse` | `stop` / `ferma` esce dalla procedura |
| `vai x y`, `direzione A`, `casa`, `cancella`, `nascondi`, `mostra` | `setxy`, `setheading`, `home`, `clear`/`cs`, `ht`, `st` | |

Espressioni: `+ - * / % ^`, parentesi, `< > = <= >= <>`, funzioni `casuale N` (0…N−1), `radice`, `seno`, `coseno`,
`arrotonda`, `intero`, `assoluto`. Numeri anche con la virgola (`0,7`). Commenti con `;` o `//`.
Un `-` attaccato al numero e staccato da prima è un segno: `vai -10 -20`.
Gli errori hanno numero di riga e frase per ragazzi (chiavi `lg.err.*`), con suggerimenti per i comandi scritti male.
Limiti: 300 000 istruzioni, 80 000 segmenti, profondità 400.
