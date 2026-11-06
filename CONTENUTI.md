# Come scrivere un argomento

Ogni argomento completo è un file JavaScript in `data/topics/<lingua>/<id>.js`
(lingue: `it`, `en`, `fr`, `ru`, `ro`). L'`id` deve esistere in `data/curriculum.js`
e va aggiunto all'elenco `full` del curriculum.
Se una lingua non ha il file, il sito mostra la versione italiana con un avviso.

```js
TOPIC('it', {
  id: 'p4-mat-frazioni',
  title: 'Le frazioni',              // titolo nella lingua del file
  intro: 'Testo introduttivo breve (HTML permesso).',
  minutes: 25,                       // tempo indicativo di studio
  sections: [ /* blocchi, vedi sotto */ ],
  glossary: [ { t: 'Numeratore', d: 'Il numero sopra la linea…' } ],
  verifica: {                        // verifica finale: superata con pass (0–1)
    pass: 0.7,
    questions: [ /* domande */ ],
    gen: [ ['fracOf', 3] ]           // facoltativo: aggiunge 3 domande generate
  }
});
```

## Tipi di blocco (`sections`)

| type | campi | descrizione |
|---|---|---|
| `text` | `title`, `html` | Spiegazione. HTML semplice: `<p>`, `<b>`, `<ul><li>`, `<table>`. |
| `example` | `title`, `html` | Esempio pratico dalla vita reale (riquadro verde). |
| `curiosity` | `title`, `html` | "Lo sapevi che…?" (riquadro giallo). |
| `remember` | `title`, `html` | Regola da ricordare (riquadro viola). |
| `svg` | `title`, `svg`, `caption` | Illustrazione SVG inline (stringa `<svg viewBox=…>`). Usa colori espliciti, testi grandi (font-size ≥ 14), `viewBox` circa 600×300. |
| `3d` | `title`, `scene`, `options`, `caption` | Modello 3D ruotabile col dito/mouse. Vedi scene sotto. |
| `widget` | `title`, `widget`, `options`, `caption` | Attività interattiva. Vedi widget sotto. |
| `quiz` | `title`, `questions` | Mini-quiz di controllo, con correzione immediata. |
| `video` | `title`, `youtube`, `caption` | Facoltativo: id YouTube (solo se sicuro). |

### Blocchi speciali (il cuore del sito)

**`alternatives` – Spiegazioni alternative.** Chi non capisce il metodo tradizionale deve trovare altre strade
(metodi di altri Paesi, altre rappresentazioni, analogie, manipolazione 3D).
```js
{ type: 'alternatives', title: 'Altri modi per capirlo', intro: '…',
  tabs: [
    { label: '🇯🇵 Metodo delle linee', html: '<p>…</p>', widget: 'lineMultiply', options: { a: 23, b: 12 } },
    { label: '🧊 Con i cubetti 3D', html: '…', scene: 'blocks', options: { mode: 'array', a: 3, b: 4 } },
    { label: '🎨 Disegno', html: '…', svg: '<svg …>' }
  ] }
```
Ogni scheda: `html` + al massimo uno tra `svg`, `widget`(+`options`), `scene`(+`options`).

**`conceptMap` – Mappa concettuale esplorabile.** Ogni nodo si apre: `html` = che cos'è; `why` = perché è così,
da dove viene, quali postulati/assiomi o scoperte stanno sotto, chi e come ci è arrivato.
```js
{ type: 'conceptMap', title: 'Mappa del teorema',
  nodes: [ { id: 'euclide', label: 'Postulati di Euclide', x: 50, y: 10, color: '#a855f7', html: '…', why: '…' }, … ],
  edges: [ ['euclide', 'triangolo', 'definisce'], … ] }   // x, y da 0 a 100
```

**`decision` – Bivio storico ("Tu cosa avresti fatto?").** Mostra la situazione, le scelte possibili, poi cosa successe davvero e perché.
```js
{ type: 'decision', title: '1492: verso ovest o intorno all\'Africa?', html: 'situazione…', question: 'Tu cosa avresti scelto?',
  options: [ { label: '…', outcome: 'cosa sarebbe successo / pro e contro' }, … ], answer: 1, explain: 'cosa accadde e perché' }
```

## Domande

```js
{ type: 'mc',  q: 'Domanda?', options: ['A', 'B', 'C'], answer: 1, explain: 'Perché…' }
{ type: 'tf',  q: 'Affermazione.', answer: true, explain: '…' }
{ type: 'num', q: 'Quanto fa 3 × 4?', answer: 12, tol: 0, unit: 'cm', explain: '…' }
{ type: 'text', q: 'Come si chiama…?', answer: ['nilo', 'il nilo'], explain: '…' }   // confronto senza maiuscole/accenti
{ type: 'order', q: 'Metti in ordine', items: ['primo', 'secondo', 'terzo'], explain: '…' } // items nell'ordine CORRETTO; il sito li mescola
```
`explain` va sempre messo: spiega la risposta giusta.

## Scene 3D (`type: '3d'`)

- `solid` – `options: { shape, color, labels }`
  `shape`: `cube`, `box` (`w,h,d`), `prism` (`n` lati, `r`, `h`), `pyramid` (`n`, `r`, `h`),
  `cylinder` (`r`,`h`), `cone` (`r`,`h`), `sphere` (`r`). `labels: true` mostra spigoli e dimensioni.
  Con `shapes: ['cube','cylinder',…]` compaiono pulsanti per cambiare solido.
- `solar` – Sistema Solare animato. `options: { labels: true }`.
- `layers` – sfera a strati con spicchio tagliato (Terra, cellula, cipolla…).
  `options: { layers: [ { r: 1, color: '#3b82f6', label: 'Crosta' }, { r: 0.8, … } ] }` dal più esterno al più interno.
- `molecule` – atomi e legami. `options: { atoms: [ { x, y, z, r, color, label } ], bonds: [ [0,1], [0,2] ] }`.
- `globe` – globo con continenti, paralleli e meridiani. `options: { points: [ { lat, lon, label, color } ], routes: [ { points: [0,1,2], color: '#f97316' } ] }`.
- `terrain` – paesaggio 3D da ruotare: si tocca una parte, si illumina e appare la spiegazione.
  `options: { features: { island: { label: 'Isola', html: '…' }, … } }`. Parti disponibili:
  `sea, coast, beach, island, archipelago, peninsula, cape, gulf, bay, isthmus, strait, lagoon, mountain, peak, glacier, hill, plain, valley, river, source, delta, lake, volcano`.
  Si mostrano solo le parti elencate in `features`.
- `spacetime` – mappa 3D spazio-tempo per la storia: la mappa è la base, l'altezza è il tempo.
  `options: { lat: [30, 50], lon: [-10, 40], years: [-3000, 0], places: [ { lat, lon, label } ],
  events: [ { id: 'e1', lat, lon, year: -2600, label: 'Piramidi di Giza', html: 'cosa accadde', causes: ['e0'] } ] }`.
  Toccando un evento si apre la scheda con cause ed effetti (le frecce collegano cause → effetti).
- `blocks` – cubetti 3D: `options: { mode: 'array', a: 3, b: 4 }` (moltiplicazione come rettangolo),
  `{ mode: 'base10', value: 245 }` (centinaia/decine/unità), `{ mode: 'volume', a: 4, b: 3, c: 2 }`.
  Con cursori per cambiare i numeri.
- `atom` – modello atomico (Bohr) in 3D con elettroni in orbita. `options: { elements: ['H','He','C','O','Na'] }`.

## Widget (`type: 'widget'`)

- `fractionPie` – `options: { n: 3, d: 4 }` torta/barra con cursori numeratore/denominatore.
- `numberLine` – `options: { min: 0, max: 20, step: 1, marks: [5, 12] }` retta dei numeri con salti.
- `abacus` – `options: { columns: ['h','da','u'], value: 123 }` abaco interattivo.
- `timesTable` – tavola pitagorica interattiva `options: { size: 10 }`.
- `counter` – `options: { emoji: '🍎', max: 20 }` contare oggetti: aggiungi/togli.
- `areaGrid` – rettangolo su quadretti con cursori: mostra perimetro e area. `options: { w: 5, h: 3, max: 12 }`.
- `pythagoras` – triangolo rettangolo con cursori sui cateti; mostra i quadrati sui lati.
- `timeline` – `options: { events: [ { year: -3000, label: 'Scrittura', icon: '✍️' } ], unit: 'anni' }` (anni negativi = a.C.; valori molto grandi ok: `-4600000000`). Si può mettere `scale: 'log'` per tempi geologici.
- `flashcards` – `options: { cards: [ { front: '🐶 dog', back: 'cane' } ] }` carte da girare.
- `match` – `options: { pairs: [ ['cat', 'gatto'], ['dog', 'cane'] ] }` abbinamenti.
- `classify` – `options: { groups: ['Viventi', 'Non viventi'], items: [ ['🌳 albero', 0], ['🪨 sasso', 1] ] }`.
- `labelDiagram` – SVG + etichette da trascinare/cliccare: `options: { svg: '<svg…>', spots: [ { x: 120, y: 80, label: 'Cuore' } ] }` (coordinate nel viewBox dell'SVG). Il bambino clicca un punto e sceglie l'etichetta.

- `lineMultiply` – moltiplicazione con le linee (metodo giapponese/cinese), animata. `options: { a: 23, b: 12 }`.
- `russianPeasant` – moltiplicazione del contadino russo (dimezza e raddoppia). `options: { a: 37, b: 24 }`.
- `egyptianMultiply` – moltiplicazione egizia per raddoppi. `options: { a: 13, b: 21 }`.
- `lattice` – moltiplicazione a gelosia (araba / Fibonacci). `options: { a: 47, b: 36 }`.
- `chemLab` – laboratorio di chimica: scaffale di reagenti, bilancia, becher, reazioni bilanciate, moli,
  reagente limitante, prodotti e conservazione della massa. `options: { }` (usa il database interno).
- `periodicTable` – tavola periodica interattiva (primi 36 elementi + i più comuni).

## Linee guida per i contenuti

- **Ogni argomento deve avere almeno un blocco `alternatives`** (spiegazioni alternative, metodi di altri Paesi,
  analogie, versione 3D) e **una `conceptMap`** che permetta di risalire al "perché".
- Storia: almeno una scena `spacetime` e un blocco `decision`. Geografia: scene `terrain`/`globe`.
  Scienze e matematica: più 3D possibile.

- Linguaggio adatto all'età dell'anno (frasi brevi in 1ª–2ª elementare, più tecnico alle medie).
- Ogni argomento: spiegazione a passi, **almeno 2 esempi pratici**, **almeno 2 curiosità**,
  **almeno 1 immagine SVG**, 1 attività interattiva o 3D quando ha senso, **2 mini-quiz** sparsi,
  glossario, **verifica finale da 8–12 domande** di tipi diversi.
- Niente immagini esterne: le illustrazioni sono SVG scritti a mano dentro il file.
- Dati corretti e verificati.
